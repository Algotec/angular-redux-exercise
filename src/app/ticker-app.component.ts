import {Component} from '@angular/core';

@Component({
	selector: 'ticker-app',
	template: `<div class="container">
    <div class="jumbotron"> <h1>TickerApp</h1></div>
    <search-component></search-component>
    <my-watched-component></my-watched-component>
    <my-watched-counter></my-watched-counter>
</div>`
})
export class TickerApp {
	constructor() {
	}
}
