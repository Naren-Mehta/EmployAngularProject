import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor() { }

  @Input()
  currentEmployee;

  @Input()
  isEdit;

  ngOnInit() {
  }

  updateCurrentEmployee(employee){
    this.currentEmployee=employee;
  }

  newEmployPage(){
    console.log(this.isEdit);
    this.isEdit=false;
  }

}
