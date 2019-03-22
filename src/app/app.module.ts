import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentContainerComponent } from './containers/parent-container/parent-container.component';
import { NestedComponentComponent } from './containers/nested-component/nested-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentContainerComponent,
    NestedComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
