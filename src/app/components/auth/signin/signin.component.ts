import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import {
  ToastrManager
} from 'ng6-toastr-notifications';
import { CommonAuthService } from 'src/app/user/common-auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  username: any = '';
  password: any = '';
  @ViewChild('loginForm', {
    static: false
  }) loginForm: NgForm;
  user_type: any = '';

  constructor(private _commonAuth: CommonAuthService, private _router: Router, private toster: ToastrManager) {}

  ngOnInit() {}

  loginData(element: any, data: any) {
    // console.log(data);
    element.textContent = 'Please Wait';
    element.disabled = true
    this._commonAuth.checkSigndata(data).subscribe(
      (result) => {
        console.log(result);
        if (result['success'] == true) {
          this.toster.successToastr(result['message']);
          sessionStorage.setItem('role', result['data'].role)
          sessionStorage.setItem('currentUser', result['data'].username);
          sessionStorage.setItem('user_id',result['data'].user_id);
          this.user_type = result['data'].role
          // console.log(this.user_type);
          this.saveToken(result.token)
          if (this.user_type === 'user') {
            setInterval(() => {
              this._router.navigate(['/user/home']);
            }, 2000)
          } else if(this.user_type === 'admin'){
            setInterval(() => {
              this._router.navigate(['/admin/dashboard']);
            }, 2000)
          }
          else {
            setInterval(() => {
              this._router.navigate(['/beauty/beautician-home']);
            }, 2000)
          }
        }
      },
      (error) => {
        this.toster.successToastr(error['message']);
        element.textContent = 'Sign In';
        element.disabled = false
        console.log(error);
        this.resetForm()
        this._router.navigateByUrl('/sign-in')
      })
  }

  resetForm() {
    this.loginForm.reset();
    this.username = null;
    this.password = null;
  }

  saveToken(token: any) {
    sessionStorage.setItem('token', token)
  }

}
