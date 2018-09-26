import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

// class Employee{

//   id: number;
//   name: string;
//   domain: string;
//   project: string;

// }

export class EmployeeComponent implements OnInit {

  isEdit=false;
  currentEmployee;

  employeeList =[
    {id:1, name:"Suresh",domain:"DB", project:"WM"},
    {id:2, name:"Ramesh",domain:"UI", project:"WM"},
    {id:3, name:"Ganesh",domain:"Angular", project:"MR"},
    {id:4, name:"Mahesh",domain:"Node", project:"SAP"},
    {id:5, name:"Yogesh",domain:"Java", project:"Amway"},
    {id:6, name:"Naresh",domain:"Admin", project:"RMG"},
    {id:7, name:"Mogesh",domain:"IT", project:"RMZ"},
    {id:8, name:"Lokesh",domain:"HR", project:"RMZ"},
  ]
  constructor() { }

  ngOnInit() {
  }

  updateEmployee(employee){
    this.isEdit=true;
    this.currentEmployee=employee;
    console.log(this.currentEmployee);
  }

}
