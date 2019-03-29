import { Component, OnInit,
  AfterContentInit, ChangeDetectorRef, DoCheck, EventEmitter, Input, Output, SimpleChanges, OnChanges } from '@angular/core';
import { Data } from 'src/app/app.component';

@Component({
  selector: 'nested-component',
  templateUrl: './nested-component.component.html',
  styleUrls: ['./nested-component.component.scss']
})


export class NestedComponentComponent implements OnInit, AfterContentInit, OnChanges, DoCheck {
  
  @Output() changeDetect = new EventEmitter();

  public local = 0;
  public clicked = 0;
  public ticks = 0;
  interval;

  @Input() timerInterval: number;
  @Input() data: Data;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.changeDetectorRef.detach();
   }

  ngOnInit() {
  }

  markForChangeDetection() {
    this.changeDetectorRef.detectChanges();
    this.changeDetectorRef.markForCheck();
  }


  ngOnChanges(changes: SimpleChanges): void {
  }

  ngDoCheck(): void {
  }


  ngAfterContentInit() {
    this.interval = setInterval(() => {
      this.ticks ++;
      // this.markForChangeDetection();
    }, this.timerInterval);
  }

  public onClick() {
    this.clicked ++;
    this.markForChangeDetection();
  }

}
