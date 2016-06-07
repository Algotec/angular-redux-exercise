import {Component, Input} from '@angular/core';
import {StockItem} from "./stock-item.model";


@Component({
  selector: 'stock-item-render',
  template: `
    <div class="col-xs-3 price">{{stock?.LastPrice | currency}}</div>
    <div class="col-xs-3">{{stock?.Change | number}} ({{stock?.Percent | number}}%)</div>`
})
export class StockItemRenderComponent {
  @Input()
  stock: StockItem;

}
