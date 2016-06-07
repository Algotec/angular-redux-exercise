import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import {CHANGE_INTERVAL} from "../shared/ticker.actions";
import {TickerState, TicketAppState} from "../shared/ticker.reducer";

@Component({
  selector: 'my-watched-counter',
  template: `
    <div *ngIf="watchNumber$|async">
      <h4>Currently watching {{watchNumber$ | async}} stocks</h4>
      <label>Update every <input type="number" [value]="interval$|async" (keyup)="updateInterval($event.currentTarget.value*1000)"/> seconds</label>
    </div>`
})
export class WatchedCounterComponent {
  interval$: Observable<number>;
  watchNumber$: Observable<number>;

  constructor(private store: Store<TicketAppState>) {
    this.interval$ = this.store.select(tickerState => tickerState.ticker.interval).map(v => v / 1000);
    this.watchNumber$ = this.store.select(tickerState => tickerState.ticker.watchList)
      .map(list => list ? list.length : 0);
  }

  updateInterval(newValue) {
    this.store.dispatch({type: CHANGE_INTERVAL, payload: newValue});

  }

}
