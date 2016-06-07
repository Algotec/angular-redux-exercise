import {InjectionToken} from '@angular/core';
import {Action,ActionReducer} from '@ngrx/store';

export const reducerToken = new InjectionToken<ActionReducer<TickerState,TikcerAction>>('reducerToken')
export interface TikcerAction extends Action{
  payload?:any;
}
export interface TicketAppState {
  ticker :TickerState;
}
export class TickerState {
  watchList: any[] = [];
  interval: number = 30000;
}
export const initialState = new TickerState();

export function tickerReducer(state: TickerState = initialState, action: TikcerAction): TickerState {
  switch (action.type) {
    default:
      return state;
  }
}
