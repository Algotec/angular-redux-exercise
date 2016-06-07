# angular2-redux-exercise

## Goal

You will make a fully functional application with technologies and best practices learnt during the course

The app will allow searching for stock symbols using a smart "typeahead" like interface (<search-component> tag)
the service which is making the requests is already made for you. the api is TickerService.lookup(input:string) : Observable(res:Response)

each stock should be marked with a + or - sign to add or remove it from the watched list

the watched list (<my-watched-components>) should show the watched stocks and for each of them issue another request to the StocksService - 
this time to the quote method (TickerService.quote(symbol:string) : Observable(res:Response)) every x (defualt 30) seconds updating and displaying the current price of the stock

a third component that shows the number of watched stocks in addition to the number of seconds in which to refresh the prices - which is giving to the watched list


## Tools

This repo is built with angular-cli  ([angular/angular-cli](https://github.com/angular/angular-cli))
You should write your app using one way data flow by using actions and reducers, taking care to use immutability where appropriate. 

The app providers include ngrx/store so you can inject Store service to [get hold of your state using observables api](https://github.com/ngrx/store)
the skeleton for the reducer is in shared/ticker.reducer.ts - write your own action and switch cases to handle them.

the app index.html includes a link to bootstrap 3.6 css so feel free to use their classes to make is look reasonably nice, but don't spend too much time on that!.

## solution

Is found in the solution branch (but don't cheat!)
