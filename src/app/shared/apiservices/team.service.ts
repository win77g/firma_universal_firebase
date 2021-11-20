import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http:HttpClient,) { }

url = environment.api_base
// поучаем list team
  getTeamList(){
         return this.http.get(this.url+`/team/`)
      }


     }
