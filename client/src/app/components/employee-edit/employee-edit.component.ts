import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit{

  empId: number = this.route.snapshot.params['id'];
  data: any;
  employee = new Employee();

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ){}

  ngOnInit(): void {
    this.getEmployeeById();
  }

  getEmployeeById(){
    this.dataService.getEmployeeById(this.empId).subscribe(res => {
      this.data = res;
      this.employee = this.data;
    });
  }

  updateEmployee(){
    this.dataService.updateData(this.empId, this.employee).subscribe(res => {
      alert("Employee updated sucessfuly");
    });
  }

}
