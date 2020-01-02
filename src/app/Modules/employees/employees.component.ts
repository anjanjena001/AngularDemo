import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  constructor(private httpService: HttpClient) { 

  }
  EmployeeList: string [];

  ngOnInit () {
    this.httpService.get('http://dummy.restapiexample.com/api/v1/employees').subscribe(
      data => {
        this.EmployeeList = data as string [];	 
         console.log(this.EmployeeList);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
