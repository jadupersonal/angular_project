import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../../model/client';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }

  getAllClients():Observable<APIResponse>{
    return this.http.get<APIResponse>(environment.API_URL + "GetAllClients")
  }
}
