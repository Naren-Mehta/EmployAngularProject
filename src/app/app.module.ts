import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { BasicHighlightDirective } from './directive/basic-highlight.directive';
import { BetterHighlightDirective } from './directive/better-highlight.directive';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UpdateEmployeeComponent
    ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
