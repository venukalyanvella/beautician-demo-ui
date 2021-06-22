import { Component, OnInit } from '@angular/core';
import { BeautyservicesService } from '../../services/beautyservices.service';

@Component({
  selector: 'app-beauty-services-list',
  templateUrl: './beauty-services-list.component.html',
  styleUrls: ['./beauty-services-list.component.css']
})
export class BeautyServicesListComponent implements OnInit {

  public beautyServices:any;
  public mylist:any=[];
  

  constructor( private beautyService:BeautyservicesService) { }

  ngOnInit() {
    this.getAllBeautyServices();
  }

  getAllBeautyServices(){
    this.beautyService.getBeautyService().subscribe(
      (result)=>{
        //console.log(result);
        this.beautyServices = result['data'];
      },
    (error)=>{
      console.log(error);
      
    }
    )
  }

  updateData(data:any){
    console.log(data);
    
  }
  removeservice(data:any){
    console.log(data);
    
  }

}
