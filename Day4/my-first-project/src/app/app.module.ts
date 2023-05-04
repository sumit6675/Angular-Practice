import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { coursesComponents } from './course.component';
import { Practice2Component } from './practice2/practice2.component';
import { CoursesService } from './couses.service';

@NgModule({
  declarations: [
    AppComponent,
    coursesComponents,
    Practice2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
