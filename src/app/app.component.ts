import { Component, OnInit } from '@angular/core';
import { AppConstants } from './app.constants';
import { color } from './Models/color-interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'colors';
  counter=-1;
  appColorsList=this.shuffle(AppConstants.colorsList);
  backgroundColr="";
  currentObject:any={}
  local:any=[];
  choosedColor: string | undefined;
  seasons: string[] = [];
  score:number=0;
  ngOnInit(): void {
      this.nextColor();
  }
  nextColor(){
    
    if(this.choosedColor!==undefined){
      if(
      this.choosedColor===this.currentObject["name"])
      {
        this.score=this.score+1;
      }

    }
    this.counter=this.counter+1;
    if(this.counter==this.appColorsList.length){
      this.counter=0;
    }
    this.currentObject=this.appColorsList[this.counter];
    this.backgroundColr=this.currentObject["hex"];
    this.seasons=this.currentObject["option"];
    this.seasons=this.shuffle(this.seasons);
    
    
  }

   shuffle(array:any) {
    return [...array].sort(() => Math.random() - 0.5);
  }
}
