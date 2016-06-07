import {Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output} from '@angular/core';
import {LookupItem} from "../watched/lookup-item.model";

export declare type eventType = 'add' | 'remove';

@Component({
  selector: 'search-results',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="row">
      <ul class="unstyled">
        <li class="stockItem" *ngFor="let item of searchResults">
          <span>{{item.Symbol}}</span>
          <span>{{item.Name}}</span>
          <ng-container [ngSwitch]="doesItemExist(item)">
            <ng-template [ngSwitchCase]="true">
              <button class="btn btn-danger" (click)="handleEvent('add',item)">+</button>
            </ng-template>
            <ng-template [ngSwitchCase]="false">
              <button class="btn btn-warn" (click)="handleEvent('remove',item)"> -</button>
            </ng-template>
          </ng-container>
      
        </li>
      </ul>
    </div>
  `
})
export class SearchResultsComponent {
  @Input() watchList: LookupItem[];
  @Input() searchResults: LookupItem[];
  @Output() addToWatch = new EventEmitter();
  @Output() removeFromWatch = new EventEmitter();

  handleEvent(type: eventType, item: LookupItem) {
    switch (type) {
      case 'add':
        return this.addToWatch.emit(item);
      case 'remove':
        return this.removeFromWatch.emit(item);
    }
  }


  doesItemExist(item): boolean {
    return (typeof this.watchList.find(watchItem => watchItem.Symbol === item.Symbol) !== 'undefined')
  }
}
