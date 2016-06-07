import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {StoreModule} from '@ngrx/store';
import {tickerReducer, reducerToken} from './shared/ticker.reducer';
import {TickerApp} from "./ticker-app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {StocksService} from "./shared/stocks.service";


function tickerReducerFactory() {
  return {ticker:tickerReducer};
}

@NgModule({
  declarations: [TickerApp],
  imports: [BrowserModule, StoreModule.forRoot(reducerToken), HttpClientModule, HttpClientJsonpModule, FormsModule],
  providers: [
    StocksService,
    {provide: reducerToken, useFactory: tickerReducerFactory}
  ],
	schemas: [CUSTOM_ELEMENTS_SCHEMA], // to allow the non existing components in the template
  bootstrap: [TickerApp]
})
export class AppModule {
}
