import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {StocksService} from "../shared/stocks.service";
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/publish';
import {Observable} from "rxjs/Observable";
import {LookupItem} from "../watched/lookup-item.model";
import {StockItem} from "./stock-item.model";
import {REMOVE_FROM_WATCH} from "../shared/ticker.actions";
import {Store} from '@ngrx/store';
import {TickerState} from "../shared/ticker.reducer";

@Component({
	selector: 'stock-item',
	host: {
		'[class]': '"row"'
	},
	template: `
  <div class="col-xs-1"><button class="btn btn-small btn-danger" tooltip="Remove from watched" (click)="removeFromWatch()">-</button></div>
  <div class="col-xs-2 symbol">{{item.Symbol}}</div>
  <div class="col-xs-3 companyName">{{item.Name}}</div>
  <stock-item-render [stock]="stockData$ |async"></stock-item-render>`
})
export class StockItemComponent implements OnInit,OnChanges {
	@Input()
	private item: LookupItem;
	@Input()
	private interval;
	private stockData$: Observable<StockItem>;

	constructor(private stocksService: StocksService, private store: Store<TickerState>) {
	}

	removeFromWatch() {
		this.store.dispatch({type: REMOVE_FROM_WATCH, payload: this.item});
	}

	ngOnChanges(change) {
		if (change.interval) {
			this.createObservable();
		}
	}

	private createObservable() {
		this.stockData$ = Observable.timer(0, this.interval)
			.switchMap(() => this.stocksService.qoute(this.item.Symbol))
			.distinctUntilChanged();
	}

	ngOnInit() {
		this.createObservable();
	}

}
