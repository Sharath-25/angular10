export class FestivalData{

    name:string;
    date:string;
    special:string;
    days:number;

    constructor( name:string, date:string,special:string,days:number){
  this.name=name;
  this.date=date;
  this.special=special;
  this.days=days;
  console.log("FestivalData created")
    }
    

}