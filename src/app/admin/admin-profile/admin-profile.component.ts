import { Component, OnInit } from '@angular/core';
import { CommonAuthService } from 'src/app/user/common-auth.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  public myprofile:any=[]
  constructor(private userService:CommonAuthService) { }

  ngOnInit() {
    this.myprofile = this.userService.getuserDetails()
    console.log(this.myprofile);
    
  }

}
