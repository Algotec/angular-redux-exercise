import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {TickerState, TicketAppState} from "../shared/ticker.reducer";
import {Store} from '@ngrx/store';

@Component({
  selector: 'my-watched-component',
  templateUrl: './watched.component.html',
})
export class WatchedComponent implements OnInit {
  watchList$: Observable<any[]>;
  hasData$: Observable<boolean>;
  interval$: Observable<number>;

  constructor(private store: Store<TicketAppState>) {
    this.watchList$ = store.select((state) => {
      return state.ticker.watchList;
    });
    this.hasData$ = this.watchList$.map(list => list.length > 0);
    this.interval$ = this.store.select(tickerState => tickerState.ticker.interval);

  }

  ngOnInit() {
  }

}
