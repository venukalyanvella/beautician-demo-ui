import { Component, OnInit } from '@angular/core';
import { BeautyservicesService } from '../../services/beautyservices.service';

declare var $:any;

@Component({
  selector: 'app-beautyparlour-details',
  templateUrl: './beautyparlour-details.component.html',
  styleUrls: ['./beautyparlour-details.component.css']
})
export class BeautyparlourDetailsComponent implements OnInit {

  mylist:any=[]
  page:any=1;
  limit:any=5;
  count:any = 0;
  public Bparlour:any = [];
  public parlourName:any;
  public ownername:any;
  public lawfirmname:any;
  public contactMail:any;
  public place:any;
  public b_id :any;

  public serviceChanges:boolean=false;

  constructor(private beautyService:BeautyservicesService) { }

  ngOnInit() {
    this.getAllBeautyParlours()
  }
  getPage(data:any){
    console.log(data);
    this.page= data
    this.getAllBeautyParlours()
  }

  getAllBeautyParlours(){
   this.beautyService.getBeautyParlours({limit:this.limit,page:this.page}).subscribe(
      (result)=>{
        console.log(result);
          this.Bparlour = result['data']
          this.count = result['count']
      },
    (error)=>{
      console.log(error);
      
    }
    )

  }

  closeModel(){
    $(document).ready(function () {
      $('#makeChangesModel').modal('hide');
    })
  }
  openModel(item:any){
    $(document).ready(function () {
      $('#makeChangesModel').modal('show');
    });
    this.b_id= item.b_id;
    this.parlourName = item.parlourName;
    this.ownername = item.ownername;
    this.contactMail = item.contactMail;
    this.place = item.place;
    this.lawfirmname = item.lawfirmname
    
  }

  createPager(){
let endPage = Math.round(this.count/this.limit);
this.mylist=[];
for (let i = 1; i <= Number(endPage); i++) {
  this.mylist.push(i);
}
  }

  serviceChange(event:any){
    // console.log(event.target.checked);
    if(event.target.checked ===true){
      this.serviceChanges= true
    } else{
      
    this.serviceChanges = false
    }

  }

  makeChangeSave(data:any){
    // console.log(this.b_id,data);
    this.beautyService.changeParlour(this.b_id,data).subscribe(
      (result)=>{
        if(result['success']=="true"){
          console.log(result);
        }
        this.getAllBeautyParlours()
        this.closeModel()
      },
      (error)=>{
        console.log(error);
        this.getAllBeautyParlours()
        this.closeModel()
        
      }
    )
    
  }

  cancelParlour(item:any){
   let con = confirm('Are you want to Delete ?')
   if(con === true){
     this.beautyService.removeParlour(item).subscribe(
       (data)=>{
        console.log(data);
        this.getAllBeautyParlours()
        
       },
       (Error)=>{
        console.log(Error);
        this.getAllBeautyParlours()
        
       }
     )
   }
   
  }

}
