import { Component } from '@angular/core';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
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

  myCount: number = 10;
  countChange(event:any) {
    
    this.myCount = event;
    if(this.myCount==0){
      this.nextColor();
      this.myCount=10;
    }
  }

  nextColor(){
    
    this.resultCheck();
    this.counter=this.counter+1;
    if(this.counter==this.appColorsList.length){
      this.counter=0;
    }
    this.currentObject=this.appColorsList[this.counter];
    this.backgroundColr=this.currentObject["hex"];
    this.seasons=this.currentObject["option"];
    this.seasons=this.shuffle(this.seasons);
    
  }

  private resultCheck() {
    if (this.choosedColor !== undefined) {
      if (this.choosedColor === this.currentObject["name"]) {
        this.score = this.score + 1;
      }

    }
  }

   shuffle(array:any) {
    return [...array].sort(() => Math.random() - 0.5);
  }
}
