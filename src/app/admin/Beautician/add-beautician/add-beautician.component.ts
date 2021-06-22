import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BeautyservicesService } from '../../services/beautyservices.service';

@Component({
  selector: 'app-add-beautician',
  templateUrl: './add-beautician.component.html',
  styleUrls: ['./add-beautician.component.css']
})
export class AddBeauticianComponent implements OnInit {

  @ViewChild('beauticianForm',{static:true})  beauticianForm=NgForm;
  public beauticianName:any;
  public experience:any;
  public parlour_id:any=null;
  public contactMail:any;
  public mobilenumber:number;
  public ParloursData =[];
  public role:any=null;
  public username:any;
  public password:any;


  constructor(private _beautyService:BeautyservicesService) { }

  ngOnInit() {
    this.getParlours()
  }

  getParlours(){
    this._beautyService.getAllParlourDetails().subscribe(
      (result)=>{
        //console.log(result);
        this.ParloursData = result['data']
      }
    )
  }

  generatePassword(){
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'+'abcdefghijklmnopqrstuvwxyz'+'0123456789!@#$%^&*()_+';
for(let i=0; i<=8; i++){
  this.password = Math.random().toString(36).slice(2)
}
  }

  AddbeauticianDetails(data:any){

    const userPayload ={
      username:this.username,
      password:this.password,
      email:this.contactMail,
      mobileNumber:this.mobilenumber,
      parlour_id:this.parlour_id,
      beauticianName:this.beauticianName,
      experience:this.experience,
      mobilenumber:this.mobilenumber,
      contactMail:this.contactMail,
      role:this.role
    }
    // console.log(data);
    this._beautyService.addBeautician(userPayload).subscribe(
      (result)=>{
        console.log(result);
        
    },
    (err)=>{
      console.log(err);
      
    })
  }


}
