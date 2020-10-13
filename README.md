# probable-rotary-phone
[Techiediaries] Angular 10 NgRX Store by Example

Grab the article at [https://www.techiediaries.com/angular-10-ngrx-store-example/](https://www.techiediaries.com/angular-10-ngrx-store-example/)

## Tips/Run

* ng serve --o | ng serve --open;

## Errors Experienced

* On the '*ngIf' statement within the "product.component.html", where it is stated if "products != 0", an (error)[https://github.com/microsoft/TypeScript/issues/25642] resulted in: "error TS2367: This condition will always return 'true' since the types 'Observable<Product[]>' and 'number' have no overlap."; on trying to fix this through "products >= 1", the error received was: "error TS2365: Operator '>=' cannot be applied to types 'Observable<Product[]>' and 'number'.";

## Notes:

* A tutorial from the same team that further explains the (async pipe observable subscription)[https://www.techiediaries.com/angular-10-async-pipe-observable-promise-example/] is available, of which I will read;
* The Angular NgRx store is a client-side data management pattern that implements the Redux pattern, invented by Facebook, using RxJS observables;

## What's it all about?

* In this tutorial, we'll learn how to use NgRX store in our Angular 10 example application. We'll see how we can create actions, reducers and disptach actions;

## Thanks

Thanks goes out to Techiediaries for the FREE stuff!

* [Techiediaries's site](https://www.techiediaries.com/) ...Abc...
