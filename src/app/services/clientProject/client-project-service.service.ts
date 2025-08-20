import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../../model/client';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientProjectServiceService {

  constructor(private http: HttpClient) { }

  getAllClientProjects():Observable<APIResponse>{
    return this.http.get<APIResponse>(environment.API_Client_Project_URL + "GetAllClientProjects")
  }

  addUpdateClientProject(obj:any){
    return this.http.post<APIResponse>(environment.API_Client_Project_URL + "AddUpdateClientProject", obj)
  }
}
