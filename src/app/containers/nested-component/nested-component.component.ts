import { Component, OnInit, ContentChildren, forwardRef, QueryList,
  AfterContentInit, ChangeDetectorRef, DoCheck, EventEmitter, ChangeDetectionStrategy, Input, Output } from '@angular/core';

@Component({
  selector: 'nested-component',
  templateUrl: './nested-component.component.html',
  styleUrls: ['./nested-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NestedComponentComponent implements OnInit, AfterContentInit, DoCheck {

  @ContentChildren(forwardRef(() => NestedComponentComponent)) private nestedComponents: QueryList<any>;
  @Output() changeDetect = new EventEmitter();

  private componentsArray: any[];
  public local = 0;
  public clicked = 0;
  public ticks = 0;
  interval;
  @Input() timerInterval: number;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  runChangeDetection() {
    this.local ++;
    this.changeDetectorRef.markForCheck();
    this.changeDetect.emit();
  }

  ngDoCheck(): void {
    // this.changeDetectorRef.markForCheck();
    // this.changeDetect.emit();
    // this.local ++;
  }

  ngAfterContentInit() {
    this.componentsArray = this.nestedComponents.toArray();
    this.interval = setInterval(() => {
      this.ticks ++;
      this.runChangeDetection();
    }, this.timerInterval);
  }

  public onClick() {
    this.clicked ++;
    this.runChangeDetection();
  }

}
