import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeauticianserviceService {

  public apiUrl = `https://beauticiansystem-demo.herokuapp.com/api`

  constructor(private _http:HttpClient) { }

  getBookingsByBeautician(data:any){
    return this._http.post(this.apiUrl+`/booking/beauticianId`,data)
  }

  statusChange(data:any){
    return this._http.post<any>(this.apiUrl+`/booking/status`,data)
  }

  getAppointments(data:any){
    return this._http.post(this.apiUrl+`/appointment/appointment`,data)
  }

  genetateReport(data:any){
    return this._http.post(this.apiUrl+`/report/add`,data)
  }

}
