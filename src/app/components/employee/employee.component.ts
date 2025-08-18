import { Component, inject, OnInit } from '@angular/core';
import { APIResponse, IClient } from '../../model/client';
import { EmployeeServiceService } from '../../services/employee_service/employee-service.service';
import { IEmployee } from '../../model/employee';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  clientList : IEmployee[] = [];

  clientSrv = inject(EmployeeServiceService);

  ngOnInit(): void {
    this.clientSrv.getAllClients().subscribe((res:APIResponse)=>{
      this.clientList = res.data;
      console.log(this.clientList)
    })
  }

}
