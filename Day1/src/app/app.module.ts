import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { warningAlertComponent } from './warning-alert/warning-alert-component';
import { StringInterpretationComponent } from './string-interpretation/string-interpretation.component';
import { AppPropertyBindingComponentComponent } from './app-property-binding-component/app-property-binding-component.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { DirectivesComponent } from './directives/directives.component';
import { Assignment2Component } from './assignment2/assignment2.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    warningAlertComponent,
    ServersComponent,
    SuccessAlertComponent,
    StringInterpretationComponent,
    AppPropertyBindingComponentComponent,
    Assignment1Component,
    DirectivesComponent,
    Assignment2Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
