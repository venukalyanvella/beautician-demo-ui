import { Component, OnInit } from '@angular/core';
import { BeauticianserviceService } from '../beauticianservice.service';

@Component({
  selector: 'app-beauty-report',
  templateUrl: './beauty-report.component.html',
  styleUrls: ['./beauty-report.component.css']
})
export class BeautyReportComponent implements OnInit {

  public page:any =1;
  public limit :any =6;
  public AppDetails:any =[];
  public username:any;
  public date:any;
  public time:any;
  public description:any;
  public amount:any;
  public appointmentID:any;
  public user_id :any;
  public issuedBy:any;
  currentIndex: any = null;

  constructor(private _beauticianservice:BeauticianserviceService) { }

  ngOnInit() {
    this.getAppointmentsById();
  }

  openNav(item: any, id: any) {
    document.getElementById("mySidebar").style.width = "450px";
    document.getElementById("main").style.width = "75%";
    document.getElementById("main").style.marginRight = "450px";
    this.currentIndex = Number(id);
    this.username = item.username;
    this.date = item.date
    this.time = item.time
    this.description = item.description
    this.appointmentID = item.appointmentID;
    this.user_id = item.user_id;
    this.issuedBy = item.issuedBy;
  }
  
  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    document.getElementById("main").style.width = "100%";

    this.currentIndex = null;
  }



  getAppointmentsById(){
    let payload = {
      page:this.page,
      limit:this.limit
    }

    this._beauticianservice.getAppointments(payload).subscribe(
      (result)=>{
        console.log(result);
        this.AppDetails = result['data']
      }
      ,(err)=>{
        console.log(err);
        
      }
    )

  }

  GenReport(item:any){
    console.log(item);
    this.username = item.username;
    this.date = item.date
    this.time = item.time
    this.description = item.description
    this.appointmentID = item.appointmentID;
    this.user_id = item.user_id;
    this.issuedBy = item.issuedBy;

    
  }
submitReport(data:any){
  let reportPayload ={
    appointmentID:this.appointmentID,
    user_id:this.user_id ,
    amount:data.amount ,
    report:data.description ,
    issuedBy:this.issuedBy,
  }
this._beauticianservice.genetateReport(reportPayload).subscribe(
  (result)=>{
    
    this.getAppointmentsById();
    this.closeNav()
  },
  (Err)=>{
    console.log(Err);
    this.getAppointmentsById();
    this.closeNav()
  })

  
}
}
