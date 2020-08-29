import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class RootComponent {
  title:string = 'firstApp';

  constructor(){
    console.log("RootComponent is created")
  }

}
