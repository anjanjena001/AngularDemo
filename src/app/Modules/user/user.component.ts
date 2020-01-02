import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  pagePagination: number = 1;
  constructor(private httpService: HttpClient) { 

  }
  UserList: string [];

  ngOnInit () {
    this.httpService.get('http://dummy.restapiexample.com/api/v1/employees').subscribe(
      data => {
        this.UserList = data as string [];	 
         console.log(this.UserList);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
