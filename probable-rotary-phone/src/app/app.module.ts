import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

import { StoreModule } from '@ngrx/store';
import { addProductReducer } from './reducers/product.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({product: addProductReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
