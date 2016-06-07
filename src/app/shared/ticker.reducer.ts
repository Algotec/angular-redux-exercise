import {InjectionToken} from '@angular/core';
import {Action,ActionReducer} from '@ngrx/store';
import {ADD_TO_WATCH, CHANGE_INTERVAL, REMOVE_FROM_WATCH} from "./ticker.actions";

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
    case ADD_TO_WATCH:
      state.watchList = [...state.watchList, action.payload];
      break;
    case REMOVE_FROM_WATCH:
      let itemIndex = state.watchList.indexOf(action.payload);
      state.watchList = [...state.watchList.slice(0, itemIndex), ...state.watchList.slice(itemIndex + 1)];
      break;
    case CHANGE_INTERVAL:
      state.interval = action.payload;
  }
  return state;
}
