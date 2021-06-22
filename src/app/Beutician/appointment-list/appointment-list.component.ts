import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BeauticianserviceService } from "../beauticianservice.service";
declare var $: any;

@Component({
  selector: "app-appointment-list",
  templateUrl: "./appointment-list.component.html",
  styleUrls: ["./appointment-list.component.css"],
})
export class AppointmentListComponent implements OnInit {
  
  public beautician_id:any=9
public page :any= 1;
public limit:any =6;
public UserBookings:any =[];
public appDetails:any =[];
  constructor(
    private _beauticianService: BeauticianserviceService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.getBookingsById();
    this.getAppointmentsById();
  }

  generateReports() {
    // alert('This Functionality on under developement.')
    this._router.navigateByUrl("/beauty-report");
  }

  cancelAppointment() {
    $("#exampleModalCenter").modal("show");
  }
  getBookingsById() {
    let payload = {
      beautician_id : this.beautician_id,
      limit:this.limit,
      page:this.page
    };
    this._beauticianService
      .getBookingsByBeautician(payload)
      .subscribe((result) => {
        console.log(result['data'].bookingStatus ==0);
        if(result['success']==true){
            
            this.UserBookings = result['data']
          this.getAppointmentsById()
        }
        
        
      });
  }

  confirmBooking(item:any){
    alert('Confirm Booking');
    console.log(item);
    let App_payload ={
      book_id:item.book_id ,
      user_id: item.user_id,
      date:item.date ,
      time: item.time ,
      description:item.description,
      issuedBy:item.BeauticianDetails
    }
    this._beauticianService.statusChange(App_payload).subscribe(
      (result)=>{
        console.log(result);
        
      },
      (err)=>{

      }
    )
    
    
  }

  rejectBooking(item:any){
    alert('Reject Booking'+item);

  }

  getAppointmentsById(){
    let payload = {
      page:this.page,
      limit:this.limit
    }

    this._beauticianService.getAppointments(payload).subscribe(
      (result)=>{
        console.log(result);
        this.appDetails = result['data']
      }
      ,(err)=>{
        console.log(err);
        
      }
    )

  }

}
