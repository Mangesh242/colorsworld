import { Component, Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.scss']
})
export class ResultDialogComponent implements OnInit {

  score:any;
  totalScore:string|undefined;
  mode:any;
  time:any;
  msg:any;
  res:string;
  name:string | undefined;
  //based on time he took for choose assign score accordingly.

  constructor(public MatDialogRef:MatDialogRef<ResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any){

    this.totalScore=data.score;
    this.mode=data.mode;
    this.time=data.time;
    this.res=data.res;
    this.name=data.name;
  }
  ngOnInit():void{
    
    if(this.res !== undefined && this.res.toLowerCase()==="correct"){
      
    if(this.time>5){
        this.msg="EXCELLENT!";
        this.score=3;
    }else if(this.time>3){
      this.msg="GREAT!";
      this.score=2;
    }else if(this.time>=0){
      this.msg="GOOD";
      this.score=1;
    }
   }
    else if(this.res===undefined && this.time==0){
      this.msg="Time Up!"
      this.score=0;
    }
    else 
    {
      this.msg="Incorrect. Correct Option is:\n";
      this.msg+=this.name;
      this.score=0;
    }
  }

  onNextClick(msg:string){
    if(msg=='next'){
      this.MatDialogRef.close({score:this.score,action:"next"});
    }
    else{
      this.MatDialogRef.close({score:this.score,action:"retry"});
    }
    
  }

}
