import { Component, AfterContentInit, ChangeDetectorRef, ChangeDetectionStrategy, DoCheck, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';


@Component({
  selector: 'parent-container',
  templateUrl: './parent-container.component.html',
  styleUrls: ['./parent-container.component.scss']
})
export class ParentContainerComponent implements AfterContentInit, OnChanges, DoCheck {

  @Output() changeDetect = new EventEmitter();
  
  public local = 0;
  public clicked = 0;
  public ticks = 0;
  interval;


  constructor(private changeDetectorRef: ChangeDetectorRef) { }


  markForChangeDetection() {
    this.changeDetectorRef.markForCheck();
  }


  ngOnChanges(changes: SimpleChanges): void {
  }

  ngDoCheck(): void {
  }

  ngAfterContentInit() {
    this.interval = setInterval(() => {
      this.ticks ++;
      //this.markForChangeDetection();
    }, 6000);
  }

  public onClick() {
    this.clicked ++;
  }
}
