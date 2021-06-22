import { Component, OnInit } from '@angular/core';
import { BeautyUserService } from '../../services/beauty-user.service';
declare var $:any;
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
 
  
  reports:any;
  public report:any=[]

  public limit:any =5;
  public page:any =1;

  constructor(private _beautyService:BeautyUserService) { }

  ngOnInit() {
      this.getReports()
    $('#sidebar').hide();
    // $('#sidevar').removeClass('inactive');
  }
  getReports(){
    let payload ={
      page:this.page,
      limit:this.limit,
      user_id:sessionStorage.getItem('user_id')
    }

    this._beautyService.getReportsByUser(payload).subscribe(
      (result=>{
        console.log(result);
        this.report = result['data']
      }),
      (error)=>{
        console.log(error);
        
      }
    )
  }

  open(data:any){
    // $('#sidebarCollapse').on('click', function () {
      $('#sidebar').show();
      $('#sidebar').toggleClass('active');
      console.log(data);
      this.reports= data

      // });
  }

}
