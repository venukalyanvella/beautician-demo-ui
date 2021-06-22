import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { environment } from 'src/environments/environment';
import { ToastrModule } from 'ng6-toastr-notifications';
import { UserModule } from './user/user.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { BeauticianModule } from './Beutician/beautician.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DemoListComponent } from './demo-list/demo-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { CommonAuthService } from './user/common-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    DemoListComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, HttpClientModule, FormsModule,AngularFontAwesomeModule,
    ToastrModule.forRoot(),UserModule,BeauticianModule,NgxPaginationModule
  ],
  providers: [CommonAuthService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
