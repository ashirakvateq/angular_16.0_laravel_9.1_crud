import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private dataService: DataService,
    private toastr: ToastrService
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
      this.toastr.success("Employee updated successfully");
    });
  }

}
