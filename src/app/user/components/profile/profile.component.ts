import { Component, OnInit } from '@angular/core';
import { CommonAuthService } from '../../common-auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  myProfile:any=[];

  constructor(private userservice:CommonAuthService) { }

  ngOnInit() {

   this.myProfile = this.userservice.getuserDetails()
   console.log(this.myProfile);
   
  }

}
