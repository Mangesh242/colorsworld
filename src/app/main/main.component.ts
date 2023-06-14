import { Component } from '@angular/core';
import { AppConstants } from '../app.constants';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ResultDialogComponent } from '../result-dialog/result-dialog.component';

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
  constructor(public dialog: MatDialog){

  }

  myCount: number = 10;
  displayTimer:boolean=true;
  result:string|undefined;
  correctOption:String|undefined;

  countChange(event:any) {    
    this.myCount = event;
    if(this.myCount==0){
      // this.choosedColor=undefined;
      this.displayTimer=false;
     this.openDialog();
      
    }
  }

  openDialog() {
    this.resultCheck();

    this.displayTimer=false;
    this.dialog.open(ResultDialogComponent,{
      width:'400px',
      height:'200px',
      data: { 
             totalScore : this.score,
             time:this.myCount,
             mode: AppConstants.mode.timeup,
             res:this.result,
             name:this.correctOption
            }
    }).afterClosed().subscribe(
      (res)=>{
        if(res!==undefined){

        this.myCount=10;
        this.score+=res.score;
        if(res.action == 'next'){
          this.nextColor();
        }
        
        
        this.displayTimer=true;
        this.choosedColor=undefined;
        this.correctOption=undefined;
      }
      }
    );
  }

  nextColor(){
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
    debugger;
    if (this.choosedColor !== undefined) {
      if (this.choosedColor === this.currentObject["name"]) {
        this.result="Correct";
        this.correctOption=this.choosedColor;
      }else{
        this.result="InCorrect";
        this.correctOption=this.currentObject["name"];
      }

    }
  }

   shuffle(array:any) {
    return [...array].sort(() => Math.random() - 0.5);
  }
}