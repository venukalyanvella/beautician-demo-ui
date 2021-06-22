import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeautyUserService {

  private url=`https://beauticiansystem-demo.herokuapp.com/api/`;
  constructor(private _http:HttpClient) { }

  getAllBeauticians(data:any){

    return this._http.post(this.url+`${'beautician/beauticians'}`,data)
    
  }

  slotBooking(data:any){
    return this._http.post<any>(this.url+`${'booking/add'}`,data)
  }

  getBookingsByUser(data:any){
     return this._http.post<any> (this.url+`${'booking/getByUser'}`, data)
  }

  cancelBooking(data:any){
    // console.log(data);
    
    return this._http.delete(this.url+`${'booking/remove/'}${data}`)
  }

  changeBookingData(data:any){
    return this._http.patch(this.url + `${'booking/update'}`,data)
  }

  getReportsByUser(data:any){
    return this._http.post(this.url+`${'report/reportByUser'}`,data)
  }

}
