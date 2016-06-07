import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {StockItem} from "../stock-item/stock-item.model";
import {Observable} from "rxjs/Observable";
import {LookupItem} from "../watched/lookup-item.model";

@Injectable()
export class StocksService {
  static baseUrl = `http://dev.markitondemand.com/MODApis/Api/v2/`;

  constructor(private http: HttpClient) {
  }

  private makeJsonpRequest<T>(url, searchParams) {
    return this.http.jsonp<T>(`${url}?${searchParams}`, 'jsoncallback');
  }

  lookup(search: string): Observable<LookupItem> {
    const searchParams = new HttpParams({fromObject:{input: search}});

    const url = StocksService.baseUrl + 'Lookup/jsonp';
    return this.makeJsonpRequest<LookupItem>(url, searchParams);
  }

  qoute(symbol: string): Observable<StockItem> {
    const searchParams = new HttpParams({fromObject:{symbol}});
    const url = StocksService.baseUrl + 'Quote/jsonp';
    return this.makeJsonpRequest<StockItem>(url, searchParams);
  }


}
