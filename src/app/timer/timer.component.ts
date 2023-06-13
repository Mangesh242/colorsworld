import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  
  timer: any;

  @Input()
  seconds: number = 0;

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();


  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.seconds--;
      if (this.seconds === 0) {
        this.change.emit(this.seconds);
        this.seconds=10;
      }
    }, 1000);
  }
}
