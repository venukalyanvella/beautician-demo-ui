import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { CommonAuthService } from 'src/app/user/common-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('registerForm', {
    static: false
  }) registerForm: NgForm;

  username: any = '';
  email: any = '';
  password: any = '';
  mobileNumber: any = '';

  constructor(private _commonAuth: CommonAuthService, private _router:Router,
    private toster: ToastrManager) {}

  ngOnInit() {}


  registerNewUser(element:any,data:any) {
    element.textContent='Please wait';
    element.disabled=true
    const userData = {
      username: this.username,
      email: this.email,
      password: this.password,
      mobileNumber: this.mobileNumber,
      role: 'user'
    }
    this._commonAuth.userRegister(userData).subscribe(
      (result) => {
        console.log(result);
        this.toster.successToastr(result['message']);
        this._router.navigate(['/user/sign-in'])
      },
      (error) => {
        console.log(error);
        this.toster.successToastr(error['message']);
        element.textContent = 'Sign Up';
        element.disabled = false
        this.resetForm()
      }
    )

  }

  resetForm() {
    this.registerForm.reset();
    this.username = null;
    this.mobileNumber = null;
    this.email = null;
    this.password = null
  }



}
