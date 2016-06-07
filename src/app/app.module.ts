import {NgModule} from "@angular/core";
import {StoreModule} from '@ngrx/store';
import {tickerReducer, reducerToken} from './shared/ticker.reducer';
import {TickerApp} from "./ticker-app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {StocksService} from "./shared/stocks.service";
import {SearchComponent} from "./search/search.component";
import {WatchedCounterComponent} from "./watched-counter/watched-counter.component";
import {WatchedComponent} from "./watched/watched.component";
import {StockItemComponent} from "./stock-item/stock-item.component";
import {StockItemRenderComponent} from "./stock-item/stock-item-render.component";
import {FormsModule} from "@angular/forms";
import {SearchResultsComponent} from "./search/search-results.component";


function tickerReducerFactory() {
  return {ticker:tickerReducer};
}

@NgModule({
  declarations: [TickerApp, SearchComponent,SearchResultsComponent,WatchedComponent, WatchedCounterComponent, StockItemComponent, StockItemRenderComponent],
  providers: [
    StocksService,
    {provide: reducerToken, useFactory: tickerReducerFactory}
  ],
  imports: [BrowserModule, StoreModule.forRoot(reducerToken), HttpClientModule, HttpClientJsonpModule, FormsModule],
  bootstrap: [TickerApp]
})
export class AppModule {
}
