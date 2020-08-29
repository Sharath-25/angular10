import { Component, OnInit } from '@angular/core';
import {FestivalData} from './festival.data'

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.css']
})
export class FestivalComponent implements OnInit {
  listofFestival:FestivalData[];
  flag:boolean=false;

  constructor() {
    console.log("FestivalComponent created");
    let fest1:FestivalData=new FestivalData("ganesha","august 22","kadbu",2);
    let fest2:FestivalData=new FestivalData("dasra","oct 12","savari",5);
    let fest3:FestivalData=new FestivalData("deepavali","nov 27","pataki",3);
    let fest4:FestivalData=new FestivalData("chrismas","december 10","gifts",7);
    this.listofFestival=[fest1,fest2,fest3,fest4,fest3];
    if(this.listofFestival.length>4){
      this.flag=true;

    }
  }
    

  ngOnInit(): void {
    console.log("FestivalComponent ngonit");
  }

}
