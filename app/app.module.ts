import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './app.component';
import { FestivalComponent } from './festival/festival.component';


@NgModule({
  declarations: [
    RootComponent,
    FestivalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule {
 
  constructor(){
    console.log("RootModule is created")
  }

 }
