import { Component, OnInit, ViewChild } from "@angular/core";
import { BeautyservicesService } from "../../services/beautyservices.service";
import { NgForm } from "@angular/forms";
declare var $: any;

@Component({
  selector: "app-beautician-details",
  templateUrl: "./beautician-details.component.html",
  styleUrls: ["./beautician-details.component.css"],
})
export class BeauticianDetailsComponent implements OnInit {
  public limit: number = 5;
  public page: any = 1;
  public ItemsPerPage: any = 10;
  Beauticians: any = [];
  @ViewChild("UpdatebeauticianForm", {
    static: true,
  })
  UpdatebeauticianForm = NgForm;
  public beauticianName: any;
  public experience: any;
  public beautyparlourName: any;
  public lawfirmname: any;
  public services: any;
  public place: any;
  public ratings: number;
  public mobilenumber: number;
  id: any;
  public total:any=0;
  public searchQuery:any='';
  public myList:any=[];
  constructor(private _beautician: BeautyservicesService) {}

  ngOnInit() {
    this.getAllBeauticians();
    $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip();   
    });
  }
  pageChanged(event:any){

    this.page = event;
    this.getAllBeauticians();

  }
  getAllBeauticians() {
    let beauticianPayload = {
      page: this.page,
      limit: this.limit,
      query:this.searchQuery
    };
    console.log('Beauticians Data ', beauticianPayload);
    
    this._beautician.getAllBeauticians(beauticianPayload).subscribe(
      (result) => {
        console.log(result);
        this.Beauticians = result["data"];
        this.total = result['count'];
        this.createPager()
      },
      (error) => {
        console.log(error);
      }
    );
  }
  searchData(){
    console.log('the search data iss',this.searchQuery);
    this.getAllBeauticians()
  }
  onInputSearch(){
    console.log('the search data iss',this.searchQuery);
    if(this.searchQuery==undefined || this.searchQuery ===''){
      this.getAllBeauticians()
    }
  

  }

  createPager(){
    let endPage = Math.round(this.total/this.limit);
    this.myList = [];
    for(let i =1; i<=Number(endPage); i++){
      this.myList.push(i)
    }

    console.log(this.myList);
    

  }

  getPage(event:any){
    this.page = event;
    this.getAllBeauticians()
  }
  openModel(item: any) {
    $("#myModal").modal("show");
    //console.log(item);
    this.beauticianName = item.beautucianName;
    this.beautyparlourName = item.beautyparlourName;
    this.experience = item.experience;
    this.mobilenumber = item.mobilenumber;
    this.services = item.services;
    this.ratings = item.ratings;
    this.lawfirmname = item.lawfirmname;
    this.place = item.place;
    this.id = item.id;
  }
  closeModel() {
    $("#myModal").modal("hide");
    this.resetAll();
  }

  resetAll() {
    this.beauticianName = null;
    this.beautyparlourName = null;
    this.experience = null;
    this.mobilenumber = null;
    this.services = null;
    this.ratings = null;
    this.lawfirmname = null;
    this.place = null;
    this.id = null;
  }

  //UPDATE DETAILS
  UpdatebeauticianDetails(data: any) {
    //console.log(this.id,data);
    this._beautician.changeBeauticianDetails(this.id, data).subscribe(
      (result) => {
        console.log(result);
        this.closeModel();
        if (result["success"] == "true") {
          this.getAllBeauticians();
          this.resetAll();
        }
      },
      (error) => {
        console.log(error);
        this.closeModel();
        this.getAllBeauticians();
        this.resetAll();
      }
    );
  }

  removeBeautician(id: any) {
    // console.log(id);
    let deleteBeautician = confirm("Are You Sure Want to Remove/Delete ?");
    if (deleteBeautician == true) {
      this._beautician.removeBeautician(id).subscribe(
        (result) => {
          console.log(result);
          this.getAllBeauticians();
          this.closeModel();
        },
        (error) => {
          console.log(error);
          this.getAllBeauticians();
          this.closeModel();
        }
      );
    }
  }
}
