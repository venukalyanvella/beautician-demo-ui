import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonAuthService } from 'src/app/user/common-auth.service';
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  role:any
  constructor(private auth:CommonAuthService,private router:Router) { }

  ngOnInit() {
    this.role = sessionStorage.getItem('role');
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  });
  }

  logout(){
    localStorage.clear();
    sessionStorage.clear()
    this.router.navigateByUrl('/sign-in');
    

  }   

  

}
