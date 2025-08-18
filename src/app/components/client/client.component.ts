import { Component, inject, OnInit } from '@angular/core';
import { APIResponse, IClient } from '../../model/client';
import { ClientServiceService } from '../../services/client-service.service';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
  clientList : IClient[] = [];
  clientService = inject(ClientServiceService);

  ngOnInit(): void {
    this.clientService.getAllEmployee().subscribe((res:APIResponse)=>{
      this.clientList = res.data;
      console.log(this.clientList)
    })
    
  }

}
