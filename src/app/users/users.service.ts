import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Users } from './users.interface';
import { Observable } from 'rxjs';

const API = 'https://dummyjson.com/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers(searchFilter: string = '', offset:number = 0, limit:number = 10 ): Observable<Users>{
    let params = new HttpParams();
    params = params.append('q', searchFilter)
    params = params.append('skip', offset);
    params = params.append('limit', limit);
    params = params.append('select', 'firstName,lastName,age,gender,address');
   return this.httpClient.get<Users>(API + '/search', {params} )
  }
}
