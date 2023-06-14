import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
     providedIn: 'root'
   })
export class DateConverterService {

BaseUrl:string = "https://www.hebcal.com/converter?cfg=json&date=";

constructor(private http:HttpClient) { }

ConvertDate(date:any){
return this.http.get(this.BaseUrl + date)}

}
