import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponse } from '../model/client';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http: HttpClient) {  }

  getAllEmployee():Observable<APIResponse>{
    return this.http.get<APIResponse>(environment.API_URL + "GetAllEmployee")
  }
}
