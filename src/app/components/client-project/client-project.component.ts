import { Component, inject, OnInit } from '@angular/core';
import { ClientProjectServiceService } from '../../services/clientProject/client-project-service.service';
import { IClientProjct } from '../../model/client-project';
import { APIResponse, IClient } from '../../model/client';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ClientServiceService } from '../../services/client-service.service';
import { IEmployee } from '../../model/employee';
import { EmployeeServiceService } from '../../services/employee_service/employee-service.service';
@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {

  projectList : IClientProjct[] =[];
  projectService = inject(ClientProjectServiceService);
  clientList : IClient [] = [];
  clientService = inject(ClientServiceService);
  leadList : any [] =[];
  empService = inject(EmployeeServiceService);
  projectForm : FormGroup = new FormGroup({
    clientProjectId : new FormControl(0),
    projectName : new FormControl(""),
    startDate : new FormControl(""),
    expectedEndDate : new FormControl(""),
    leadByEmpId : new FormControl(""),
    completedDate : new FormControl(""),
    contactPerson : new FormControl(""),
    contactPersonContactNo : new FormControl(""),
    totalEmpWorking : new FormControl(""),
    projectCost : new FormControl(""),
    projectDetails : new FormControl(""),
    contactPersonEmailId : new FormControl(""),
    clientId : new FormControl(""),
  })

  ngOnInit(): void {
    this.clientProject();
    this.allEmployee();
    this.allLeadEmployee();
  }

  clientProject(){
    this.projectService.getAllClientProjects().subscribe((res:APIResponse)=>{
      this.projectList = res.data;
    })
  }

  allEmployee(){
    this.clientService.getAllEmployee().subscribe((res:APIResponse)=>{
      this.clientList = res.data;
    })
  }

  allLeadEmployee(){
    this.empService.getAllClients().subscribe((res:APIResponse)=>{
      this.leadList = res.data;
    })
  }

  saveProject(){
    this.projectService.addUpdateClientProject(this.projectForm.value).subscribe((res:APIResponse)=>{
      if (res.result){
        alert('project created');
        this.clientProject();
      }else{
        alert(res.message)
      }
    })
  }
}
