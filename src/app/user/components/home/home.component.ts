import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrManager } from "ng6-toastr-notifications";
import { Beautician } from "../../../Beautician";
import { BeautyUserService } from "../../services/beauty-user.service";
declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  beautician: any=[];
  ratings: any;
  date: any;
  page: any = 1;
  limit: any = 6;
  rowsOnPage: any = 10;
  count: any = 0;
  total: any = 0;
  book_time: any;
  beauticianData: any;
  currentUser: any = "";
  finalArr: any = [];
  mylist = [];
  pageCount: any;
  query:any ='';
  user_id:any;
  beauty_id:any;

  public beauticianName:any ;
  public contactMail:any;
  public experience:any 
  public mobilenumber:any;
  public parlourName:any;
  public place:any;
  public services:any;

  constructor(
    private beautiuser: BeautyUserService,
    private toster: ToastrManager,
    private _router: Router
  ) {}

  ngOnInit() {
    this.getAllBeauticians();
    $("#sidebar").hide();
    this.currentUser = sessionStorage.getItem("currentUser");
    this.user_id = sessionStorage.getItem('user_id')
    
    this.closeNav()
  }

  closeModel() {
    $("#BeauticianModel").hide();
  }
  pageChanged(event: any) {
    //  console.log(event);
    this.page = event;
    this.getAllBeauticians();
  }

  getAllBeauticians() {
    const userLoad = {
      page: Number(this.page),
      limit: Number(this.limit),
      query:this.query
    };
    //console.log(userLoad);
    this.beautiuser.getAllBeauticians(userLoad).subscribe(
      (data: any) => {
        console.log(data);
        
        this.beautician = data.data;
        this.ratings = data["ratings"];
        this.total = data.count;
        this.createPager();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  openSideMenu(item: any) {
    $("#sidebar").show();
    // console.log(item);
    this.beauticianData = item;
    $("#sidebar").toggleClass("active");
  }

  openNav(item:any) {
    document.getElementById("mySidebar").style.width = "450px";
    document.getElementById("main").style.width = "75%";
    document.getElementById("main").style.marginRight = "450px";
    console.log(item);
    this.beauticianName = item.beauticianName;
    this.contactMail = item.contactMail;
    this.experience = item.experience;
    this.mobilenumber = item.mobilenumber;
    this.parlourName = item.parlourName;
    this.place = item.place;
    this.services = item.services;
    this.beauty_id= item.id;
  }
  
  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    document.getElementById("main").style.width = "100%";

  }
  openModelForm(){
    $('#BeauticianModel').modal('show');
  }

  bookSlot(element: any, data: any) {
    const bookingData = {
      user_id: Number(this.user_id),
      BeauticianDetails: this.beauty_id,
      description: this.services,
      date: data.date,
      time: data.time,
    };
    // console.log(bookingData);

    this.beautiuser.slotBooking(bookingData).subscribe(
      (result) => {
        // console.log(result);
        this.toster.successToastr(result["message"]);
        this._router.navigate(["/bookings"]);
        this.closeModel();
        this.closeNav()
      },
      (err) => {
        console.log(err);
        this.toster.errorToastr(err["message"]);
        this.closeModel();
        this.closeNav()
      }
    );
  }

  createPager() {
    let pageEnd = Math.round(this.total / this.limit);

    this.mylist = [];
    for (let i = 1; i <= Number(pageEnd); i++) {
      this.mylist.push(i);
    }
    // console.log('Total Pages ', this.mylist);
  }

  getPage(event: any) {
    console.log("The page:", event);
    this.page = event;
    this.getAllBeauticians();
  }
}
