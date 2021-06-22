import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeautyservicesService {
public apiUrl=`https://beauticiansystem-demo.herokuapp.com/api/`;

  constructor(private _http:HttpClient) { }

  addBeautician(data:any){
    return this._http.post(this.apiUrl+`${'beautician/beautician'}`,data)
  }

  getAllBeauticians(data:any){
    console.log(data);
    
    return this._http.post(this.apiUrl+`beautician/beauticians`,data)
  }
  changeBeauticianDetails(id:any,data:any){
    return this._http.patch(this.apiUrl+`${'beautician/up/'}${id}`,data)
  }

  removeBeautician(id:any){
    return this._http.delete(this.apiUrl+`${'beautician/rm/'}${id}`)
  }

  addParlour(data:any){
    return this._http.post(this.apiUrl+`${'beautyparlour/add'}`,data)
  }

  getBeautyParlours(data:any){
    return this._http.post(this.apiUrl+`${'beautyparlour/getBeautparlour'}`,data)
  }

  getAllParlourDetails(){
    return this._http.get(this.apiUrl+`${'beautyparlour/allparlours'}`);
  }

  changeParlour(id:any,data:any){
    return this._http.patch(this.apiUrl+`${'beautyparlour/upparlour/'}${id}`,data)
  }

  removeParlour(data:any){
    return this._http.delete(this.apiUrl+`${'beautyparlour/delparlour/'}${data}`)
  }

  getCategories(){
    return this._http.get(this.apiUrl+`${'category/getCategories'}`)
  }

  addCategory(data:any){
    return this._http.post(this.apiUrl+`${'category/add'}`,data)
  }

  addbeautyService(data){
    return this._http.post(this.apiUrl+`${'beautyservice/add'}`,data)
  }

  getBeautyService(){
    return this._http.get(this.apiUrl+`${'beautyservice/getAllServices'}`)
  }

}
