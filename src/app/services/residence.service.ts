import { Injectable } from '@angular/core';
import { Residence } from '../models/residence';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  

  getAllresidences():Observable<Residence>{
    return this.http.get<Residence>('http://localhost:3000/residences')
  }
  getres(id:any){
    return this.http.get('http://localhost:3000/residences'+'/'+id)
  }
     deleteres(id:any):Observable<Residence>{
    return this.http.delete<Residence>('http://localhost:3000/residences'+'/'+id)
  }

   Createres(Res:Residence):Observable<Residence>{
    return this.http.post<Residence>('http://localhost:3000/residences',Res)
  }

   updateres(id:any,Res:Residence){
    return this.http.put('http://localhost:3000/residences'+'/'+id,Res)
  }

  constructor(private http:HttpClient) { }
}
