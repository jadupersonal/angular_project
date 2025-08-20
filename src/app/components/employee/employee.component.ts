import { Component, inject, OnInit } from '@angular/core';
import { APIResponse, IClient } from '../../model/client';
import { EmployeeServiceService } from '../../services/employee_service/employee-service.service';
import { Employee, IEmployee } from '../../model/employee';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  clientList: IEmployee[] = [];

  clientSrv = inject(EmployeeServiceService);

  empObj: Employee = new Employee();


  ngOnInit(): void {
    this.loadEmployee()
  }

  loadEmployee() {
    this.clientSrv.getAllClients().subscribe((res: APIResponse) => {
      this.clientList = res.data;
      console.log(this.clientList)
    })

  }

  onSaveEmp() {
    this.clientSrv.addUpdateClient(this.empObj).subscribe((res: APIResponse) => {
      if (res.result) {
        alert('Client is Created')
        this.loadEmployee();
      } else {
        alert(res.message)
      }
    })
  }

  onDelete(id: number) {
    const isDelete = confirm('Are you want to Delete');
    if (isDelete) {

      this.clientSrv.deleteClientByClientId(id).subscribe((res: APIResponse) => {
        if (res.result) {
          alert('Data Deleted');
          this.loadEmployee();
        } else {
          alert(res.message);
        }
      })

    }
  }

  onEdit(item:Employee){
    this.empObj = item;
  }

}
