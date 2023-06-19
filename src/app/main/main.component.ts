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
  appColorsList=this.shuffle(AppConstants.colorsData);
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
      //this.choosedColor=undefined;
      this.displayTimer=false;
     this.openDialog();
      
    }
  }

  openDialog() {
    
    this.resultCheck();
    this.displayTimer=false;
    this.dialog.open(ResultDialogComponent,{
      width:'400px',
      height:'250px',
      data: { 
             totalScore : this.score,
             time:this.myCount,
             mode: AppConstants.mode.timeup,
             res:this.result,
             name:this.correctOption,
             link:this.currentObject["colorInfoLink"],
             hexCode:this.backgroundColr,
            },
            disableClose: true
    }).afterClosed().subscribe(
      (res)=>{
        if(res!==undefined){
        this.myCount=10;
        this.score+=res.score;
        if(res.action == 'next'){
          this.nextColor();
        }
        else{
          this.seasons=this.shuffle(this.seasons);
        }
        
        this.displayTimer=true;
        this.choosedColor=undefined;
        this.correctOption=undefined;
      }
      }
    );
  }

  nextColor(){
    this.choosedColor=undefined;
    this.counter=this.counter+1;
    if(this.counter==this.appColorsList.length){
      this.counter=0;
    }
    this.currentObject=this.appColorsList[this.counter];
    this.backgroundColr=this.currentObject["hexadecimalCode"];
    this.seasons=this.currentObject["options"];
    this.seasons=this.shuffle(this.seasons);
    
  }

  private resultCheck() {
    
      if (this.choosedColor !== undefined) {
        this.correctOption=this.currentObject["colorName"];

        if(this.choosedColor === this.currentObject["colorName"]){
          this.result="Correct";
        }else{
          this.result="InCorrect"
        }
      }
      else{
        this.result="InCorrect";
        if(this.myCount==0){
          this.result=undefined;
        }
        this.correctOption=this.currentObject["colorName"];
      }
  }

   shuffle(array:any) {
    return [...array].sort(() => Math.random() - 0.5);
  }

}
