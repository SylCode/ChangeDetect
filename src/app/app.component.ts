import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

export interface Data {
  name: string;
  age: number;
  set: Array<Data>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'ChangeDetect';
  constructor (private chngRef: ChangeDetectorRef) {
    // this.chngRef.detach()
      setTimeout(()=>{
        this.overall ++;
        this.updateInjectedProperty();
        this.chngRef.detectChanges();
      },1000)
  }

  public overall = 0;
  public injectedProperty: Data[];
  interval;

  public onChangeDetect() {
    this.overall++;
  }

  ngOnInit() {
    this.initInjectedProperty();
    this.interval = setInterval(() => {
      this.updateInjectedProperty();
    }, 1000);
  }

  private initInjectedProperty () {
    this.injectedProperty = new Array(4);
    for (let index = 0; index < this.injectedProperty.length; index++) {
      this.injectedProperty[index] = {
        age: index,
        name: `User${index}`,
        set: new Array(10)
      }
    }
  }

  private updateInjectedProperty() {
    for (let index = 0; index < this.injectedProperty.length; index++) {
      this.injectedProperty[index].age += 10;
    }
  }
}
