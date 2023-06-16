import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = "http://127.0.0.1:8000/api/";

  constructor(private httpClient: HttpClient) { }

  getData(){
    return this.httpClient.get(this.url + 'employees');
  }

  insertData(data: any){
    return this.httpClient.post(this.url + 'create-employee', data);
  }

  deleteData(employeeId: number){
    return this.httpClient.delete(this.url + 'delete-employee/'+ employeeId);
  }

  getEmployeeById(employeeId: number){
    return this.httpClient.get(this.url + 'employee/' + employeeId);
  }

  updateData(id: number, data: any){
    return this.httpClient.put(this.url + 'update-employee/'+ id, data);
  }

}
