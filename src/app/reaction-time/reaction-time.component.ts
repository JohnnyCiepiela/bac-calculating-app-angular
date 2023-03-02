import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reaction-time',
  templateUrl: './reaction-time.component.html',
  styleUrls: ['./reaction-time.component.css'],
})
export class ReactionTimeComponent implements OnInit {
  testRunning: boolean = false;
  testFinished: boolean = false;
  dotVisible: boolean = false;
  startTime: number | null = null;
  endTime: number | null = null;
  reactionTime: number | null = null;

  constructor() {}

  ngOnInit(): void {}

  startTest(): void {
    this.testRunning = true;
    setTimeout(() => {
      this.dotVisible = true;
      this.startTime = Date.now();
      setTimeout(() => {
        this.dotVisible = false;
        this.endTime = Date.now();
        this.reactionTime = this.endTime - this.startTime!;
        this.testFinished = true;
      }, Math.random() * 5000 + 1000);
    }, Math.random() * 5000 + 1000);
  }

  reset(): void {
    this.testRunning = false;
    this.testFinished = false;
    this.dotVisible = false;
    this.startTime = null;
    this.endTime = null;
    this.reactionTime = null;
  }
}
