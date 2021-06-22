import {
  Component,
  OnInit
} from "@angular/core";
import { ToastrManager } from "ng6-toastr-notifications";
import {
  BeautyUserService
} from "../../services/beauty-user.service";
declare var $: any;
@Component({
  selector: "app-mybookings",
  templateUrl: "./mybookings.component.html",
  styleUrls: ["./mybookings.component.css"],
})
export class MybookingsComponent implements OnInit {
  clientDetails: any;
  myBookings: any;
  date: any;
  time: any;
  lawfirmName: any;
   id:any;
  limit:any =10;
  page:any=1;
  rowsOnPage:any=10;
  count:any=0;


  constructor(private myBooking: BeautyUserService,private toster: ToastrManager) {}

  ngOnInit() {
    this.getmyBookings()
  }

  getmyBookings() {
    this.clientDetails = {
      user_id: sessionStorage.getItem("user_id"),
      page:Number(this.page),
      limit:Number(this.limit)
    };
    this.myBooking.getBookingsByUser(this.clientDetails).subscribe(
      (result) => {
        console.log(result);
        this.myBookings = result.data;
        this.count = result.count;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  searchData(value:any){
    console.log(value);
    
  }

  openModel(id: any, data: any) {
    $('#makeChangesModel').modal();
     console.log(id,data);
    this.id=data.booking_id;
    this.date = data.date;
    this.time = data.time;
    this.lawfirmName = data.lawfirmName;
  
  }

  pageChanged(event:any){
    console.log(event);
    this.page = event
    this.getmyBookings()
    

  }

  makeChagesOnBookings(data: any) {

    console.log(  data);
    this.myBooking.changeBookingData( data).subscribe(
      (result) => {
         console.log(result);
        this.toster.successToastr(result['message']);
        this.resetAll()
        this.closeModel();
        this.getmyBookings();
      },
      (Err) => {
        // console.log(Err);
        this.toster.successToastr(Err['message']);
        this.resetAll()
        this.getmyBookings();
        this.closeModel()
      }
    )

  }

  closeModel() {
    $(document).ready(function () {
      $('#makeChangesModel').modal('hide');
    })
  }

  resetAll() {
    this.date = '';
    this.time = '';
    this.lawfirmName = '';
    this.id = '';

  }

  cancelBooking(data: any) {

    let d_id = {id:data};
    
    console.log(d_id);
    
    let con = confirm('Are you Sure want to Cancel Applintment ? ')
    if (con) {
      this.myBooking.cancelBooking(d_id).subscribe(
        (result) => {
          this.toster.successToastr(result['message']);
          //console.log(result);
        this.getmyBookings();

        },
        (err) => {
          // console.log(err);
          this.toster.successToastr(err['message']);
        this.getmyBookings();

        }
      )
    }


  }

}
