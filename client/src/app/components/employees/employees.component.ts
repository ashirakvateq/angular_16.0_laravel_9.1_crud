import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit{
  empAddModaltitle: string = "Add Employee";
  employees:any;
  employee = new Employee();

  constructor(
    private dataService: DataService,
    private toastr: ToastrService
    ){}

  ngOnInit(): void {
    this.getEmployeesData();
  }

  getEmployeesData(){
    this.dataService.getData().subscribe(res=> {
      this.employees = res;
    });
  }

  insertData(){
    this.dataService.insertData(this.employee).subscribe(res => {
      this.getEmployeesData();
      this.toastr.success("Employee saved successfully");
    });
  }

  deleteData(employeeId: number){
    this.dataService.deleteData(employeeId).subscribe(res => {
      this.getEmployeesData();
      this.toastr.error("Employee deleted successfully");
    });
  }

}
