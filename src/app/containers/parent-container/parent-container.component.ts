import { NestedComponentComponent } from './../nested-component/nested-component.component';
// tslint:disable-next-line:max-line-length
import { Component, OnInit, forwardRef, ContentChildren, QueryList, AfterContentInit, ChangeDetectorRef, ChangeDetectionStrategy, DoCheck, HostListener } from '@angular/core';

@Component({
  selector: 'parent-container',
  templateUrl: './parent-container.component.html',
  styleUrls: ['./parent-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class ParentContainerComponent implements OnInit, AfterContentInit, DoCheck {

  @ContentChildren(forwardRef(() => NestedComponentComponent)) private nestedComponents: QueryList<any>;

  private componentsArray: any[];
  public overall = 0;
  public local = 0;
  public clicked = 0;
  public ticks = 0;
  interval;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  runChangeDetection() {
    this.local ++;
    this.changeDetectorRef.markForCheck();
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
    }, 6000);
  }

  public onClick() {
    this.clicked ++;
    this.runChangeDetection();
  }
}
