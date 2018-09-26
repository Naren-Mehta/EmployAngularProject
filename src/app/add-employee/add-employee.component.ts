import { Component, OnInit, Input } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


  @Input()
  employeeListNew;

  newEmployee={};


  constructor() { }

  ngOnInit() {
  }

  addNewEmployee(){


    console.log(this.name);

    var obj=this.employeeListNew[this.employeeListNew.length -1];
    this.newEmployee={id:obj.id+1, name:this.name,domain: this.domain, project:this.project};
    this.employeeListNew.push(this.newEmployee);
    
  }

}
