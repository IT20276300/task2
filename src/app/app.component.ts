import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task2';
  firstNo!:number;
  secondNo!:number;
  result!:number;

  Answer ():void{
    //this result =parseInt(this.nvalue)+parseInt(this value)
    console.log(this.firstNo,this.secondNo)
    this.result=this.secondNo*Math.pow(this.firstNo,this.secondNo-1)

  }
    
  
 
  
}
