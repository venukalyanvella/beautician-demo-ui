import { Component, OnInit } from '@angular/core';
import { BeautyservicesService } from '../../services/beautyservices.service';
declare var $:any;

@Component({
  selector: 'app-add-beautyparlour',
  templateUrl: './add-beautyparlour.component.html',
  styleUrls: ['./add-beautyparlour.component.css']
})
export class AddBeautyparlourComponent implements OnInit {

  allCategories:any=[];
  parlourName:any;
  ownername:any;
  place:any;
  lawfirmname:any;
  contactMail:any;
  

  constructor(private beautyService:BeautyservicesService) { }

  ngOnInit() {
    
  }

  AddServiceCategory(data:any){
    // console.log(data);
    this.beautyService.addCategory(data).subscribe(
      (result)=>{
        this.closeModel();
      }
    )
    
  }

  addBeautyService(data:any){
    // console.log(data);
    this.beautyService.addbeautyService(data).subscribe(
      (result)=>{
        console.log(result);
        
        
        
      }
    )
    
  }

  newParlourDetails(data:any){

    this.beautyService.addParlour(data).subscribe(
      (result)=>{
        console.log(result);
        
        this.place=null;
        this.parlourName=null;
        this.ownername=null;
        this.lawfirmname=null;
        this.contactMail=null;
      }
    )
    

  }

  getCategories(){
    this.beautyService.getCategories().subscribe(
      (result)=>{
        console.log(result); 
        this.allCategories = result['data']  
      },(err)=>{
        console.log(err);
      }
    )
  }

  openCatModel(){
    $(document).ready(function () {
      $('#myCatModel').modal('show');
    });
  }
  closeModel(){
    $(document).ready(function () {
      $('#myCatModel,#myServiceModel').modal('hide');
    })
  }
  openServiceModel(){
    $(document).ready(function () {
      $('#myServiceModel').modal('show');
    });
    this.getCategories()

  }

}
