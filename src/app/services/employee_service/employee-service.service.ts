import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { APIResponse } from '../../model/client';
import { environment } from '../../../environments/environment.development';
import { Employee } from '../../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }

  getAllClients():Observable<APIResponse>{
    return this.http.get<APIResponse>(environment.API_URL + "GetAllClients")
  }

  addUpdateClient(obj:Employee):Observable<APIResponse>{
    return this.http.post<APIResponse>(environment.API_URL + "AddUpdateClient", obj)

  }

  deleteClientByClientId(id:number):Observable<APIResponse>{
    return this.http.delete<APIResponse>(environment.API_URL + "DeleteClientByClientId?clientId=" + id)
  }
}
