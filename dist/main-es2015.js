(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Beutician/appointment-list/appointment-list.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Beutician/appointment-list/appointment-list.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n\n\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n       <div class=\"search-names\">\n        <h3 class=\"titles\"> Appointment List</h3>\n        <div class=\"form-group\">\n            <input type=\"search\" name=\"searchQuery\" id=\"searchQuery\" class=\"form-control\" placeholder=\"Search....\">\n        </div>\n        <div class=\"form-group\">\n            <select name=\"status\" class=\"form-control\">\n                <option value=\"null\" selected disabled>Active</option>\n                <option value=\"null\">Disable</option>\n\n\n            </select>\n        </div>\n       </div>\n\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-4\"  *ngFor=\"let item of appDetails\">\n                    <div class=\" card box-1\">\n                        <div class=\"first\">\n                         \n                          <div class=\"user-img mt-3 mb-3\">\n                            <i class=\"fa fa-user fa-3x\"></i>\n                          </div>\n                          <div class=\"user-details\">\n                            <p class=\"user-name\"> {{item.username}} </p>\n                            <p> {{item.date |date}}</p>\n                            <p>{{item.time}}</p>\n                          </div>\n                        </div>\n                        <div class=\"second\">\n                          <p> Perfome An Action</p>\n                          <button class=\"btn btn-primary \n                          \" (click)=\"generateReports()\" >Report</button>\n                          <button class=\"btn btn-danger ml-2\" (click)=\"cancelAppointment()\"> Cancel </button>\n\n                        </div>\n                      </div>\n                      <br>\n                </div>\n            </div>\n        </div>\n\n        <nav  id=\"paginationpage\">\n            <ul class=\"pagination justify-content-end\">\n              <li class=\"page-item disabled\">\n                <a class=\"page-link\"  tabindex=\"-1\">Previous</a>\n              </li>\n              <li class=\"page-item\"><a class=\"page-link\" >1</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" >2</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" >3</a></li>\n              <li class=\"page-item\">\n                <a class=\"page-link\" >Next</a>\n              </li>\n            </ul>\n          </nav>\n    </div>\n    \n    <div class=\"col-md-4\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <div class=\"title\">\n            <p> Booking List</p>\n          </div>\n        </div>\n\n        <div class=\"panel-body\">\n\n          <ul >\n            <li class=\"list-items\" *ngFor=\"let item of UserBookings\">\n              <div class=\"img\">\n                <i class=\"fa fa-user fa-2x\"> </i>\n              </div>\n              <p> {{item.clientDetails}} </p>\n              <p> {{item.date | date}} </p>\n              <p>{{item.time}}</p>\n              <span class=\"action-list\">\n                <a class=\"mr-3\" (click)=\"confirmBooking(item)\"><i class=\"fa fa-check fa-1x\" style=\"color: green;\"></i>\n                </a>\n                <a (click)=\"rejectBooking(item)\"> <i class=\"fa fa-times fa-1x\" style=\"color: red;\"></i>\n                </a>\n\n              </span>\n            </li>\n            \n          </ul>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  \n\n</div>\n\n\n\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" >\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Appointment Remove </h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n         Are You Sure Want to Remove This Appointment\n        </div>\n        <div class=\"modal-footer text-center mx-auto\">\n            <button type=\"button\" class=\"btn btn-secondary \" data-dismiss=\"modal\">No</button>\n            <button type=\"button\" class=\"btn btn-primary\">Yes</button>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Beutician/beauty-home/beauty-home.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Beutician/beauty-home/beauty-home.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"container-fluid\">\n    <div class=\"jumbotron\">\n        <p class=\"display-4 text-center\"> Welcome beautician</p>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Beutician/beauty-report/beauty-report.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Beutician/beauty-report/beauty-report.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" >\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"search-names\">\n        <h3 class=\"titles\"> Appointment List</h3>\n        <div class=\"form-group\">\n          <input type=\"search\" name=\"searchQuery\" id=\"searchQuery\" class=\"form-control\" placeholder=\"Search....\">\n        </div>\n        <div class=\"form-group\">\n\n        </div>\n      </div>\n      <table class=\"table table-hover  border-0\" id=\"main\">\n        <thead>\n          <tr>\n            <th>Id</th>\n            <th>Name</th>\n            <th>Date</th>\n            <th>Time</th>\n            <th>Status\n              \n            </th>\n            <th>Actions</th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of AppDetails; let i=index;\" [ngClass]=\"{'isActive': i == currentIndex}\">\n            <td> <input type=\"checkbox\" name=\"\" id=\"\"> </td>\n            <td> {{item.username}} </td>\n            <td> {{item.date}} </td>\n            <td> {{item.time}} </td>\n            <td> <span [ngClass]=\"item.status <= 0 ? 'badge badge-danger': 'badge badge-success'\"  > {{item.status <= 0 ? 'pending' : 'completed'}} </span> </td>\n            <td> <a (click)=\"openNav(item, i)\"> <i class=\"fa fa-gear\"></i> </a> </td>\n          </tr>\n        </tbody>\n      </table>\n\n      <div class=\"row \">\n        <div class=\"col-md-6\">\n          <p> Showing 5 out of 25</p>\n        </div>\n        <div class=\"col-md-6 \">\n          <div class=\"paginate\">\n            <a>prev</a>\n            <ul class=\"pagination\">\n              <li><a>1</a></li>\n              <li><a class=\"active\">2</a></li>\n              <li><a>3</a></li>\n            </ul>\n            <a>next</a>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <!-- <div class=\"col-md-4\">\n      \n    </div> -->\n  </div>\n\n  <!-- panel -->\n  <div class=\"panel sidebar\" id=\"mySidebar\">\n    <div class=\"panel-heading\">\n      <h3>Add/Update Report  <a class=\"closebtn\" (click)=\"closeNav()\"> <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n      </a> </h3>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"user-details\">\n            <img src=\"/assets/images/user.png\" width=\"50px\" height=\"50px\" alt=\"\">\n            <p> {{username}} </p>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"user-details-list\">\n            <p> <i class=\"fa fa-calendar\"></i>{{date| date}} </p>\n            <p class=\"mr-4\"> <i class=\"fa fa-clock-o\"></i> {{time}} </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"bill-section\">\n        <form class=\"bill-form\" #reportForm=\"ngForm\">\n          <div class=\"form-group\">\n            <textarea name=\"description\" id=\"description\" [(ngModel)]=\"description\" class=\"form-control\" cols=\"50\"\n              placeholder=\"description\" rows=\"5\"></textarea>\n            <input type=\"text\" name=\"amount\" class=\"form-control\" [(ngModel)]=\"amount\" id=\"amount\" autocomplete=\"off\"\n              placeholder=\" total amount\">\n          </div>\n          <div class=\"form-btn\">\n            <button class=\"btn btn-primary\" (click)=\"submitReport(reportForm.value)\">Submit</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n\n\n\n</div>\n\n<div class=\"container-fluid\" *ngIf=\"false\">\n  <div id=\"mySidebar\" class=\"sidebar\">\n    <a href=\"javascript:void(0)\" class=\"closebtn\" >×</a>\n    <a href=\"#\">About</a>\n    <a href=\"#\">Services</a>\n    <a href=\"#\">Clients</a>\n    <a href=\"#\">Contact</a>\n  </div>\n  \n  <div id=\"main\">\n    <button class=\"openbtn\" (click)=\"openNav()\">☰ Open Sidebar</button>  \n    <h2>Collapsed Sidebar</h2>\n    <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>\n  </div>\n  \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"wrapper\">\n  \n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n</div>\n<!-- <app-demo-list></app-demo-list> -->\n\n<div class=\"container\" *ngIf=\"false\">\n  <input type=\"text\" name=\"myname\" [(ngModel)]=\"myname\" id=\"\">\n  <button class=\"btn btn-success\" (click)=\"myData(myname)\">Click</button>\n  <div class=\"jumbotron\">\n    {{word}}\n  </div>\n</div>\n\n\n<div class=\"team-boxed\" *ngIf=\"false\">\n  <div class=\"container\">\n\n    <div class=\"row people \">\n      <div class=\"col-md-3 col-lg-3 col-xs-6 item \" *ngFor=\"let beauty of beautician; let i= index\">\n        <a href=\"#\" class=\"btn btn-blue\">Click</a>\n\n        <div class=\" card w-100 \">\n          <div class=\"card-title\">\n            <img class=\"img-fluid\" width=\"150px\" height=\"150px\" src=\"/assets/images/user.png\" alt=\"\">\n            <span class=\"dot \" [ngClass]=\" user ? 'bg-success' :'bg-danger' \"></span>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"name\">{{beauty.name}}</h4>\n            <p class=\"title\"> {{beauty.skills}} </p>\n            <p> {{beauty.experience}}</p>\n            <p class=\"parlour-name\"> AnticParlour </p>\n            <!-- <p class=\"description\">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p> -->\n            <div class=\"social\">\n              <button class=\"btn btn-primary\" (change)=\"userStatus($event)\" (click)=\"BookOp(beauty.name)\">Book </button>\n            </div>\n          </div>\n        </div>\n        <br>\n      </div>\n\n\n\n     \n    </div>\n  </div>\n</div>\n\n<!-- \n<div class=\"col-md-6 col-lg-4 sidebar\" *ngIf=\"SidebarLoad\">\n                \n    <app-demo-list  [(beautician)]=\"currentName\"   (onselected)=\"userSelected(currentName)\"\n    ></app-demo-list>\n\n</div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>about works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/signin/signin.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/signin/signin.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"container\">\n    <div class=\"card w-50 mx-auto mt-5\">\n        <div class=\"card-title\">\n            <h3 class=\"text-center\">Login</h3>\n        </div>\n        <div class=\"card-body\">\n            <form #loginForm=\"ngForm\">\n                <div class=\"form-group\">\n                    <input type=\"text\" name=\"username\" class=\"form-control\" [(ngModel)]=\"username\" placeholder=\"username\" id=\"username\" required>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"password\"  id=\"password\" required>\n                </div>\n                <div class=\"form-group text-center\">\n                    <button class=\"btn btn-primary w-75\" (click)=\"loginData($event.target,loginForm.value)\">Login</button>\n                </div>\n                <div class=\"signup-link text-center\">\n                    <p> Not Member ? <a [routerLink]=\"['/user/sign-up']\">Sign Up</a></p>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/signup/signup.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/signup/signup.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"container\">\n    <div class=\"card signup-form w-50 mx-auto mt-5\">\n        <div class=\"card-title\">\n            <h3 class=\"text-center py-1 mt-2\"> Register</h3>\n        </div> <hr>\n        <div class=\"card-body\">\n            <form #registerForm=\"ngForm\">\n\n                <div class=\"form-group\">\n                    <input type=\"text\" #uname=\"ngModel\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\" placeholder=\"UserName\" id=\"username\"  required>\n                    <div *ngIf=\"uname.errors && uname.touched\" class=\"alert-danger py-1 \">\n                        <span *ngIf=\"uname.errors.required\"> Please Enter UserName</span>\n                        \n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"email\" #myemail=\"ngModel\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"Email-id\" id=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}\" required>\n                    <div *ngIf=\"myemail.errors && myemail.touched\" class=\"alert-danger py-1 \">\n                        <span *ngIf=\"myemail.errors.required\">Please enter Email-id </span>\n                        <span *ngIf=\"myemail.errors.pattern\">Invalid email </span>\n                    </div>\n\n                </div><div class=\"form-group\">\n                    <input type=\"password\" #mypassword=\"ngModel\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\"   id=\"password\" minlength=\"6\" required>\n                    <div *ngIf=\"mypassword.errors && mypassword.touched\" class=\"alert-danger py-1 \">\n                        <span *ngIf=\"mypassword.errors.required\"> Please enter Password</span>\n                        <span *ngIf=\"mypassword.errors.minlength\"> Minimum 6 digits please</span>\n                    </div>\n\n                </div><div class=\"form-group\">\n                    <input type=\"text\" #mobile=\"ngModel\" class=\"form-control\" name=\"mobileNumber\" [(ngModel)]=\"mobileNumber\" placeholder=\"MobileNumber\" id=\"Mobilenumber\"  minlength=\"10\" required>\n                    <div *ngIf=\"mobile.errors && mobile.touched\" class=\"alert-danger py-1 \">\n                        <span *ngIf=\"mobile.errors.required\">please enter MobileNumber</span>\n                        <span *ngIf=\"mobile.errors.minlength\">minimum 10 digits only</span>\n                    </div>\n\n                </div>\n                <div class=\"form-group mx-auto text-center\">\n                    <button class=\"btn btn-success\" [disabled]=\"!registerForm.valid\" (click)=\"registerNewUser($event.target,registerForm.value)\">Register</button>\n                </div>\n                <div class=\"login-link text-center\">\n                    <p> Already a member <a [routerLink]=\"['/user/sign-in']\" > Sign In</a></p>\n                </div>\n\n\n\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>contact works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"sticky-footer\" *ngIf=\"false\">\n    <div class=\"container\">\n      <div class=\"text-center\">\n        <small>Copyright © Your Website 2021</small>\n      </div>\n    </div>\n  </footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"userNavbar\" *ngIf=\"role == 'user' || role == 'beautician'\">\n    <nav class=\"navbar navbar-expand-sm sticky-top bg-dark navbar-dark justify-content-between \" >\n        <a  class=\"navbar-brand\">\n            <!-- <img src=\"images/logo.svg\" height=\"28\" alt=\"Beautician System\"> -->\n            <p class=\"brand-name\"> Beautician System</p>\n        </a>\n        <button type=\"button\" class=\"navbar-toggler disabled\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n    \n        <div class=\"collapse navbar-collapse \" style=\"margin-right: 70px;\" id=\"navbarCollapse\">\n            <div class=\"navbar-nav ml-auto\">\n                <a [routerLink]=\"['/user/home']\" *ngIf=\"role=='user'\" class=\"nav-item nav-link active\">Home</a>\n                <a [routerLink]=\"['/beauty-home']\" *ngIf=\"role=='beautician'\" class=\"nav-item nav-link active\">Home</a>\n\n                <!-- <a [routerLink]=\"['/contact']\" class=\"nav-item nav-link\">Contact</a> -->\n                <a [routerLink]=\"['/bookings']\" class=\"nav-item nav-link\" *ngIf=\"auth.isLoggedIn() && role=='user'\">My Bookings</a>\n                <a [routerLink]=\"['/appointment']\" class=\"nav-item nav-link\" *ngIf=\"auth.isLoggedIn() && role =='beautician'\">Appointment</a>\n                <a [routerLink]=\"['/user/reports']\" class=\"nav-item nav-link\" *ngIf=\"auth.isLoggedIn()&& role=='user'\" tabindex=\"-1\">Reports</a>\n                <a [routerLink]=\"['/beauty-report']\" class=\"nav-item nav-link\" *ngIf=\"auth.isLoggedIn() && role=='beautician'\" tabindex=\"-1\">Reports</a>\n                <a [routerLink]=\"['/user/sign-in']\" *ngIf=\"!auth.isLoggedIn()\" class=\"nav-item nav-link\">Login</a>\n                \n                <div *ngIf=\"auth.isLoggedIn()\" class=\"nav-item dropdown\">\n                    <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\"> {{role}}  </a>\n                    <div class=\"dropdown-menu\">\n                        <a [routerLink]=\"['/user/profile']\" class=\"dropdown-item\"> <i class=\"fa fa-user\"></i> Profile</a>\n                       \n                        <a  class=\"dropdown-item disable\"> <i class=\"fa fa-cog\"></i>  Settings</a>\n                        <a class=\"dropdown-item\" (click)=\"logout()\"> <i class=\"fa fa-sign-out\"></i> Logout </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </nav>\n</div>\n\n\n<!-- Admin header -->\n\n<div *ngIf=\"role === 'admin'\">\n\n    <div class=\"wrapper\">\n        <!-- Sidebar  -->\n        <nav id=\"sidebar\">\n            <div class=\"sidebar-header\">\n                <h3>BS</h3>\n                <strong>BS</strong>\n               \n\n            </div>\n\n            <ul class=\"list-unstyled components\">\n                <li class=\"active\">\n                    <a [routerLink]=\"['/admin/dashboard']\"> <i class=\"fa fa-home\"></i> Home </a>\n                    \n                </li>\n                <li>\n                    \n                    <a href=\"#pagebeautician\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">\n                        <i class=\"fa fa-home\"></i>\n                        Beautician\n                    </a>\n                    <ul class=\"collapse list-unstyled\" id=\"pagebeautician\">\n                        <li>\n                            <a [routerLink]=\"['/admin/add-beautician']\">Add Beautician</a>\n                        </li>\n                        <li>\n                            <a [routerLink]=\"['/admin/beautician-list']\">Beautician Details</a>\n                        </li>\n                        \n                    </ul>\n                </li>\n                <li>\n                   \n                    <a href=\"#pagebeauty\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">\n                        <i class=\"fa fa-id-card\"></i>\n                        Beauty Parlour\n                    </a>\n                    <ul class=\"collapse list-unstyled\" id=\"pagebeauty\">\n                        <li>\n                            <a [routerLink]=\"['/admin/add-beauty-parlour']\">Add Parlour/Services</a>\n                        </li>\n                        <li>\n                            <a [routerLink]=\"['/admin/beautyparlour-list']\">Beauty Parlour Details</a>\n                        </li>\n                        <li>\n                            <a [routerLink]=\"['/admin/beautyservice-list']\">Parlour Services List</a>\n                        </li>\n                        \n                    </ul>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin/profile']\">\n                        <i class=\"fa fa-image\"></i>\n                        Profile\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        <i class=\"fa fa-envelope-o\"></i>\n                       Messages\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        <i class=\"fa fa-paper-plane\"></i>\n                        Contact\n                    </a>\n                </li>\n                \n            </ul>\n\n            \n        </nav>\n\n        <!-- Page Content  -->\n        <div id=\"content\">\n\n            <nav class=\"navbar navbar-expand-lg mt-0\">\n                <div class=\"container-fluid\">\n\n                    <h3 class=\"title-heading\">Beautician System</h3>\n                    <div class=\"\">\n                        <div class=\" search-form\">\n                          <div class=\"input-group\">\n                            <input class=\"form-control border rounded-pill-left border-right-0\" type=\"search\" placeholder=\"Search\" id=\"example-search-input\">\n                            <span class=\"input-group-append\">\n                              <button class=\"btn btn-outline-secondary border rounded-pill-right border-left-0\" type=\"button\">\n                                  <i class=\"fa fa-search\"></i>\n                              </button>\n                            </span>\n                          </div>\n                        </div>\n                      </div>\n                    <!-- <button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-info\">\n                        <i class=\"fa fa-align-left\"></i>\n                        <span>Switch/Toggle</span>\n                    </button> -->\n                    <button class=\"btn btn-dark d-inline-block d-lg-none ml-auto\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <i class=\"fas fa-align-justify\"></i>\n                    </button>\n\n                    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                        <ul class=\"nav navbar-nav ml-auto\">\n                            <li class=\"nav-item active\">\n                                <a class=\"nav-link\" > <i class=\"fa fa-envelope-o\" style=\"color: rgb(224, 224, 38); font-weight: bolder;\"></i> <span class=\"badge\">5</span> </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" ><i class=\"fa fa-bell-o\" style=\"color: tomato; font-weight: bolder;\"></i> <span class=\"badge\">5</span>  </a>\n                            </li>\n                            \n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" (click)=\"logout()\"> <i class=\"fa fa-sign-out\"></i> </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n\n            \n        </div>\n    </div>\n\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo-list/demo-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo-list/demo-list.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"container\">\n    \n    \n            <button class=\"changeback\">Bakc</button>\n    <div class=\"row\">\n        <div class=\"col-md-2 bg-info first-block\" >\n           \n            <button class=\"btn btn-success changeCol\" id=\"btn\"(click)=\"ChangeData()\">CLick</button> first Column\n        </div>\n        <div class=\"col-md-2 bg-primary\">\n            second columb\n        </div>\n        <div class=\"col-md-2 bg-secondary  test\" >\n            third column\n        </div>\n    </div>\n</div>\n\n\n\n <div class=\"container\" *ngIf=\"false\">\n     <div class=\"row\">\n         <div class=\"col-md-6\">\n\n            <div class=\"card\">\n                <div class=\"title\">\n                   <img class=\"img-fluid justify-content-center\" src=\"/assets/images/user.png\" alt=\"\">\n                   <!-- <fa name=\"user-o\" ></fa> -->\n\n                </div>\n                <div class=\"card-body details\">\n                    <p class=\"name\" > Mahesh </p>\n                    <p class=\"skills\">Message, SPA</p>\n                    <p class=\"exp\"> 2 years</p>\n                    <p class=\"beauty-name\"> Beauty Parlour Name </p>\n                    <div  class=\"track-contents\">\n                        <fa name=\"home\" class=\"track-details\"></fa>\n                        <fa name=\"phone\" class=\"track-details\"></fa>\n                        <fa name=\"envelope-o\" class=\"track-details\"></fa>\n                    </div>\n                    <button class=\"btn btn-success bookbtn\" type=\"button\">\n                        Book Applointment\n                    </button>\n                </div>\n            </div>\n         </div>\n     </div>\n </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/home/home.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/home/home.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"container\"  >\n  <div id=\"main\">\n\n \n  <div class=\"row \" >\n      <div class=\"col-md-4\" *ngFor=\"let item of beautician | paginate:{itemsPerPage:rowsOnPage, currentPage:page, totalItems:total}; let i = index\"\n     >\n          <div class=\" card box-1\">\n              <div class=\"first\">\n               \n                <div class=\"user-img mt-3 mb-3\">\n                  <img\n                  src=\"../../assets/images/user.png\"\n                  alt=\"_profile\"\n                  class=\"img-responsive rounded-image img-fluid\"\n                  width=\"60\"\n                  height=\"60\"\n                />\n                </div>\n                <div class=\"user-details\">\n                  <div class=\"title text-center\">\n                    <span>{{ item.beauticianName }}</span>\n                  </div>\n                  <div class=\"sub-titles text-center\">\n                    <p class=\"experience\">{{ item.experience }} Years</p>\n                    <!-- <p class=\"skills\">{{ item.skills }}</p> -->\n                    <p class=\"beauty-name\">{{ item.parlourName}}</p>\n                    <div class=\"ratings\" *ngIf=\"false\">\n                      <i class=\"fa fa-star\" style=\"color: yellow\"></i\n                      ><i class=\"fa fa-star\" style=\"color: yellow\"></i\n                      ><i class=\"fa fa-star\" style=\"color: yellow\"></i\n                      ><i class=\"fa fa-star\" style=\"color: yellow\"></i\n                      ><i class=\"fa fa-star\" style=\"color: yellow\"></i>\n                    </div>\n                      <div class=\"form-btns\">\n                        <button class=\"btn btn-success openbtn mb-2\" (click)=\"openNav(item)\">Show</button>\n                      </div>\n                  </div>\n                </div>\n              </div>\n              \n            </div>\n            <br>\n      </div>\n  </div>\n</div>\n</div>\n\n <!-- panel -->\n <div class=\"panel sidebar\"  id=\"mySidebar\">\n  <div class=\"panel-heading\">\n    <h3>Beautician   <a class=\"closebtn\" (click)=\"closeNav()\"> <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n    </a> </h3>\n  </div>\n  <div class=\"panel-body\">\n      \n    <div class=\"beautician-details\">\n      <div class=\"user-image\">\n        <img src=\"/assets/images/user.png\" width=\"100\" height=\"100\" alt=\"\">\n      </div>\n      <div class=\"details\">\n        <table class=\"table\">\n          <span>Personal Details</span>\n         <tr>\n\n          <th> <i class=\" fa fa-user-o\"></i> Beautician Name</th>\n          <td> {{beauticianName}} </td>\n         </tr>\n         <tr>\n           <th> <i class=\"fa fa-home\"></i> Parlour Name</th>\n           <td> {{parlourName}} </td>\n         </tr>\n         <tr>\n           <th> <i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i>\n            Experience</th>\n           <td> {{experience}} </td>\n         </tr>\n         <span>Contact Details</span>\n         <tr>\n          <th> <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>\n            Email </th>\n          <td> {{contactMail}} </td>\n         </tr>\n         <tr>\n           <th> <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n            Mobile Number </th>\n           <td> {{mobilenumber}} </td>\n         </tr>\n         <tr>\n           <th> <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n            Place</th>\n           <td> {{place}} </td>\n         </tr>\n        </table>\n        <div class=\"form-btn1\">\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"openModelForm()\" >Schedule Booking</button>\n\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"BeauticianModel\" >\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Modal title</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form #appointmentForm=\"ngForm\" class=\"appointment_form\">\n          <div class=\"form-group\">\n            <input\n              type=\"date\"\n              class=\"form-control\"\n              [(ngModel)]=\"date\"\n              name=\"date\"\n              id=\"date\"\n              placeholder=\"Slect Date\"\n              required\n            />\n          </div>\n          <div class=\"form-group\">\n            <input\n              type=\"time\"\n              class=\"form-control\"\n              name=\"time\"\n              [(ngModel)]=\"book_time\"\n              id=\"time\"\n              placeholder=\"Select Time\"\n              required\n            />\n          </div>\n          <div class=\"form-group\">\n            <button\n              class=\"btn btn-primary\"\n              [disabled]=\"!appointmentForm.valid\"\n              (click)=\"bookSlot($event.target, appointmentForm.value)\"\n              type=\"submit\"\n            >\n              Book Slot\n            </button>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid\" *ngIf=\"false\" >\n  <div class=\"row mt-3\">\n    <div class=\"col-md-12\">\n      <div class=\"wrapper\">\n        <div id=\"content\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div\n                class=\"col-md-3\"\n                *ngFor=\"let item of beautician | paginate:{itemsPerPage:rowsOnPage, currentPage:page, totalItems:total}; let i = index\"\n                (click)=\"openSideMenu(item)\"\n              >\n                <div>\n                  <div class=\"card beauty-card\">\n                    <span class=\"dot\"></span>\n                    <div class=\"text-center\">\n                      <img\n                        src=\"../../assets/images/user.png\"\n                        alt=\"_profile\"\n                        class=\"img-responsive rounded-image img-fluid\"\n                        width=\"60\"\n                        height=\"60\"\n                      />\n                    </div>\n                    <div class=\"title text-center\">\n                      <span>{{ item.beauticianName }}</span>\n                    </div>\n                    <div class=\"sub-titles text-center\">\n                      <p class=\"experience\">{{ item.experience }} Years</p>\n                      <!-- <p class=\"skills\">{{ item.skills }}</p> -->\n                      <p class=\"beauty-name\">{{ item.parlourName}}</p>\n                      <div class=\"ratings\" *ngIf=\"false\">\n                        <i class=\"fa fa-star\" style=\"color: yellow\"></i\n                        ><i class=\"fa fa-star\" style=\"color: yellow\"></i\n                        ><i class=\"fa fa-star\" style=\"color: yellow\"></i\n                        ><i class=\"fa fa-star\" style=\"color: yellow\"></i\n                        ><i class=\"fa fa-star\" style=\"color: yellow\"></i>\n                      </div>\n                      \n                    </div>\n                  </div>\n                </div>\n                <br />\n                \n              </div>\n            </div>\n          </div>\n        </div>\n        \n        <div id=\"sidebar\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"title_details\">\n                  <h3>Add Appointment</h3>\n                </div>\n                <div class=\"main_contents text-center\">\n                  <img\n                    src=\"../../assets/images/user.png\"\n                    alt=\"_profile\"\n                    class=\"img-responsive rounded-image img-fluid\"\n                    width=\"100\"\n                    height=\"100\"\n                    alt=\"\"\n                  />\n\n                  <div class=\"sub_contents\">\n                    <p>{{ beauticianData?.name }}</p>\n                    <p>{{ beauticianData?.experience }} Years</p>\n                    <p>{{ beauticianData?.beauty_parlour }}</p>\n                  </div>\n                  <form #appointmentForm=\"ngForm\" class=\"appointment_form\">\n                    <div class=\"form-group\">\n                      <input\n                        type=\"date\"\n                        class=\"form-control\"\n                        [(ngModel)]=\"book_date\"\n                        name=\"date\"\n                        id=\"date\"\n                        placeholder=\"Slect Date\"\n                        required\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <input\n                        type=\"time\"\n                        class=\"form-control\"\n                        name=\"time\"\n                        [(ngModel)]=\"book_time\"\n                        id=\"time\"\n                        placeholder=\"Select Time\"\n                        required\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <button\n                        class=\"btn btn-primary\"\n                        [disabled]=\"!appointmentForm.valid\"\n                        (click)=\"bookSlot($event.target, appointmentForm.value)\"\n                        type=\"submit\"\n                      >\n                        Book Slot\n                      </button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n  <div class=\"text-center\">\n    <section>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"pagination\">\n            <a [ngClass]=\"{'isDisable':page === 1}\" (click)=\"getPage(page-1)\">&laquo; Prev</a>\n            <ul class=\"list-group list-group-flush\" *ngFor=\"let item of mylist\">\n                <li [ngClass]=\"{'active':page === item}\" class=\"list-group-item\" (click)=\"getPage(item)\">{{item}}</li>\n            </ul>\n            <a [ngClass]=\"{'isDisable':page === mylist.length}\" (click)=\"getPage(page+1)\">Next &raquo;</a>\n\n          </div>\n        </div>\n      </div>\n    </section>\n    \n  </div> \n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/mybookings/mybookings.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/mybookings/mybookings.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"text-center display-4 text-primary\">\n        Manage Bookings\n      </div>\n    </div>\n    <div class=\"col-md-6 mt-3 mb-3\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search Here....\" name=\"searchName\"\n          [(ngModel)]=\"searchName\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-secondary\" type=\"button\" (click)=\"searchData(searchName)\">\n            <i class=\"fa fa-search\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"myBookings && myBookings.length > 0 else elseBlock\">\n    <div class=\"col-md-12\">\n      <table class=\"table table-hover table-bordered w-100 h-50\">\n        <tbody>\n          <tr>\n            <th>Id</th>\n            <th> Date</th>\n            <th>Time</th>\n            <th>Beauty Parlour</th>\n            <th>Beautician Name</th>\n            <th>Status</th>\n            <th>Actions</th>\n          </tr>\n          <tr *ngFor=\"let item of myBookings | paginate:{itemsPerPage:rowsOnPage, currentPage:page, totalItems:count}; let i = index\">\n            <td>{{i}}</td>\n            <td> {{item.date |date}} </td>\n            <td> {{item.time }}</td>\n            <td> {{item.parlourName}} </td>\n            <td> {{item.beauticianName}} </td>\n            <td [ngClass]=\"item.bookingStatus===0? 'text text-danger':'text text-success'\"> {{item.bookingStatus===0 ? 'pending': 'completed'}} </td>\n            <td class=\"p-2\" colspan=\"2 \"> <button class=\"btn btn-warning\"\n                (click)=\"openModel(item.bookingid,item)\"> <i class=\"fa fa-pencil\"></i> </button>\n              <button class=\"btn btn-danger ml-2\" (click)=\"cancelBooking(item.booking_id)\"> <i class=\" fa fa-trash\"></i> </button> </td>\n          </tr>\n        </tbody>\n        <tfoot *ngIf=\"false\">\n          <tr>\n            <td colspan=\"7\" class=\"text-center\">\n              <pagination-controls (pageChange)=\"pageChanged($event)\"\n              autoHide=\"false\" responsive=\"true\" \n              screenReaderCurentLabel=\"Your're on page\"\n              previousLabel=\"Previous\" nextLabel=\"Next\"\n              ></pagination-controls>\n            </td>\n          </tr>\n\n        </tfoot>\n\n      </table>\n\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\" text-center\">\n      <ng-template #elseBlock>\n        <span class=\" text-center text-danger display-4\"> --- No Booking Found ---</span>\n      </ng-template>\n    </div>\n  </div>\n</div>\n<!-- Pagination -->\n\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"makeChangesModel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Change Appointment Details</h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeModel()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form #changeAppointment=\"ngForm\">\n          <input type=\"hidden\" name=\"id\" class=\"form-control\" [(ngModel)]=\"id\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"date\" required name=\"date\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"time\" name=\"time\" required>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lawfirmName\" name=\"lawfirmName\" readonly>\n          </div>\n          <button class=\"btn btn-success\" (click)=\"makeChagesOnBookings(changeAppointment.value)\">Save Changes</button>\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/profile/profile.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/profile/profile.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"jumbotron bg-secondary  \">\n                    <h3 class=\"display-4 text-center text-primary\">\n                        <p> Welcome User</p>\n                    </h3>\n            </div>\n        </div>\n    </div>\n\n    <section>\n        \n                <table class=\"table table-hover  mx-auto w-50 justify-content-center\">\n                    <tr>\n                        <th> UserName : </th>\n                        <td> {{myProfile.username}} </td>\n                    </tr>\n                    <tr>\n                        <th> Email : </th>\n                        <td> {{myProfile.email}} </td>\n                    </tr>\n                    <tr>\n                        <th> MobileNumber :</th>\n                        <td> {{myProfile.mobileNumber}} </td>\n                    </tr>\n\n                </table>\n            \n    </section>\n</div>\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/reports/reports.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/reports/reports.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n<div class=\"container-fluid\" >\n  <div class=\"wrapper\">\n     <div id=\"content\">\n      <div class=\"container-fluid\">\n          <div class=\"row\">\n              <div class=\"col-md-12\">\n                  <table class=\"table table-hover\">\n                     <tbody>\n                         <tr>\n                             <th>\n                                 Report ID\n                             </th>\n                             <th> Booking ID</th>\n                             <th> Beautician Name </th>\n                             <th> Date </th>\n                         </tr>\n                         <tr *ngFor=\"let item of report ;let i= index\" (click)=\"open(item)\" >\n                            <td> {{item.reportID }} </td>\n                            <td> {{item.booking_id}} </td>\n                            <td> {{item.beauticianName}} </td>\n                          <td> {{item.date}} </td>\n                         </tr>\n                     </tbody>\n\n                  </table>\n              </div>\n          </div>\n      </div>\n\n    </div>\n    <!-- Sidebar  -->\n    <div id=\"sidebar\">\n      <div class=\"sidebar-header\">\n        <h3 class=\"text-center\">Beauty parlour Name </h3>\n            </div>\n      <div class=\"side_content\">\n        <p>   Name: {{reports.username}} </p>\n        <p> <span class=\"text-right\">{{reports.date|date}}</span> </p>\n        <div class=\"bill_content\">\n            <p> {{reports.description}} </p>\n            <div class=\"sign\">\n                <p> Total: {{reports.amount}}</p> \n                <p class=\"text-blod\"> Signature</p>\n                <span> Digitally verified.</span>\n            </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <section>\n    <nav aria-label=\"...\">\n      <ul class=\"pagination\">\n        <li class=\"page-item disabled\">\n          <a class=\"page-link\" href=\"#\" tabindex=\"-1\">Previous</a>\n        </li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n        <li class=\"page-item active\">\n          <a class=\"page-link\" href=\"#\">2 <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\">Next</a>\n        </li>\n      </ul>\n    </nav>\n  </section>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/Beutician/appointment-list/appointment-list.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/Beutician/appointment-list/appointment-list.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nh2 {\r\n    color: seagreen;\r\n    font-family: 'Playfair Display', Serif;\r\n    font-size: 180%;\r\n    font-weight: 300;\r\n    \r\n}\r\n\r\n/* p {\r\n    color: sandybrown;\r\n    line-height: 120%;\r\n    margin-bottom: 10px;\r\n} */\r\n\r\n/* MAIN */\r\n\r\n/* .section-content {\r\n    background: #fff;\r\n    border: 1px solid #fff;\r\n    border-radius: 10px;\r\n    width: 75%;\r\n    max-width: 500px;\r\n    margin: 5px auto;\r\n    padding: 10px 10px;\r\n} */\r\n\r\n/* .content-wrapper {\r\n    display: inline-block;\r\n    width: 100%;\r\n    text-align: center;\r\n} */\r\n\r\n/* .box-1 {\r\n   \r\n    border-radius: 10px 10px 0 0;\r\n} */\r\n\r\n.card{\r\n   \r\n    border-radius: 15px;\r\n    text-align: center;\r\n}\r\n\r\n.first {\r\n    display: block;\r\n    position: relative;\r\n    max-width: 100%;\r\n}\r\n\r\n.second {\r\n    color: #fff;\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 25%;\r\n}\r\n\r\n.box-1 .second {\r\n    opacity: 0;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n}\r\n\r\n.box-1:hover {\r\n    background: lightseagreen;\r\n    /* background-image: linear-gradient(rgba(134, 89, 89, 0.88),rgba(134, 89, 89, 0.74)),url(https://images.pexels.com/photos/545331/pexels-photo-545331.jpeg?w=940&h=650&auto=compress&cs=tinysrgb); */\r\n    transition: background 0.3s;\r\n\r\n}\r\n\r\n.box-1:hover .second {\r\n    opacity: 1;\r\n    transition: opacity 0.8s;\r\n   \r\n}\r\n\r\n.box-1:hover .first {\r\n    opacity: 0;\r\n}\r\n\r\n.user-img i\r\n{\r\n    width: 70px;\r\n    height: 70px;  \r\n    border-radius: 35px;\r\n    background-color: #32393f;\r\n    \r\n}\r\n\r\n.user-details{\r\n    font-size: 0.9em;\r\n    color: black;\r\n    text-transform: capitalize;\r\n\r\n}\r\n\r\n.user-details .user-name{\r\n    color: #188cf1;\r\n    font-size: 1em;\r\n    font-weight: 200;\r\n    font-weight: bold;\r\n}\r\n\r\n.search-names{\r\n    display: flex;\r\njustify-content: space-around;  \r\nbox-shadow: 0 .3rem .8rem rgba(0, 0, 0, .12);\r\npadding: 2px;\r\nmargin-bottom: 10px;\r\n/* border-radius: 15px; */\r\nalign-items: center;\r\n\r\n\r\n}\r\n\r\n.search-names .titles{\r\n    color: lightseagreen;\r\n    margin-left: -15px;\r\n    font-size: 1.5em;\r\n    font-weight: bolder;\r\n}\r\n\r\n.search-names .form-group input{\r\nwidth: 100%;\r\nborder: 1px solid lightseagreen;\r\nborder-radius: 35px;\r\nmargin-top: 10px;\r\noutline: none;\r\nbox-shadow: none;\r\ntransition: 0.2s ease all;\r\n\r\n}\r\n\r\n.search-names .form-group input:focus{\r\n    border: 2px solid lightseagreen;\r\n    transition: 0.2s ease all;\r\n}\r\n\r\n.search-names .form-group select {\r\n    margin-top: 10px;\r\n}\r\n\r\n#paginationpage{\r\n    margin-right: 24px;\r\n}\r\n\r\n.pagination ul {\r\n    outline: none;\r\n    box-shadow: none;\r\n    background: lightseagreen;\r\n    color: #fff;\r\n}\r\n\r\n.pagination ul li a {\r\n    background: lightseagreen !important;\r\n    color: #fff !important;\r\n}\r\n\r\n.panel{\r\n    font-family: 'Roboto', sans-serif;\r\n    padding: 0;\r\n    border: none;\r\n    box-shadow: 0 .3rem .8rem rgba(0, 0, 0, .12);\r\n    height: 560px;\r\n}\r\n\r\n.panel .panel-heading{\r\n    background: #fff;\r\n    padding: 25px 25px 10px;\r\n    border-radius: 0;\r\n   \r\n}\r\n\r\n.panel .panel-heading .title{\r\n    color: lightseagreen;\r\n    font-size: 1.4em;\r\n    font-weight: bold;\r\n    line-height: 30px;\r\n    text-transform: capitalize;\r\n    margin-left: 0px;\r\n    text-align: center;\r\n}\r\n\r\n.panel .panel-body{\r\n    border-radius: 0;\r\n   /* margin: 15px 20px 15px 0px; */\r\n   margin-left: -15px;\r\n   margin-right: 20px;\r\n   }\r\n\r\n.panel-body ul li{\r\n       background: honeydew;\r\n       padding: 5px;\r\n       color: black;\r\n       border-radius: 5px;\r\n       margin-bottom: 10px;\r\n   }\r\n\r\n.list-items{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    text-align: center;\r\n    margin: 0px;\r\n    padding: 10px;\r\n    font-size: 0.8em;\r\n   }\r\n\r\n/* .list-items .img{\r\nwidth: 30px;\r\nheight: 30px;\r\nborder: 1px solid gray;\r\nborder-radius: 35px;\r\n} */\r\n\r\n.action-list a {\r\n    text-decoration: none;\r\n\r\n}\r\n\r\n.action-list a i {\r\n    cursor: pointer;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQmV1dGljaWFuL2FwcG9pbnRtZW50LWxpc3QvYXBwb2ludG1lbnQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMsZUFBZTtJQUNmLGdCQUFnQjs7QUFFcEI7O0FBRUE7Ozs7R0FJRzs7QUFHSCxTQUFTOztBQUNUOzs7Ozs7OztHQVFHOztBQUlIOzs7O0dBSUc7O0FBSUg7OztHQUdHOztBQUNIOztJQUVJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBR0E7SUFDSSx5QkFBeUI7SUFDekIsb01BQW9NO0lBQ3BNLDJCQUEyQjs7QUFFL0I7O0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysd0JBQXdCOztBQUU1Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFLQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiwwQkFBMEI7O0FBRTlCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiw2QkFBNkI7QUFDN0IsNENBQTRDO0FBQzVDLFlBQVk7QUFDWixtQkFBbUI7QUFDbkIseUJBQXlCO0FBQ3pCLG1CQUFtQjs7O0FBR25COztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUNBO0FBQ0EsV0FBVztBQUNYLCtCQUErQjtBQUMvQixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixnQkFBZ0I7QUFDaEIseUJBQXlCOztBQUV6Qjs7QUFDQTtJQUNJLCtCQUErQjtJQUMvQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFVBQVU7SUFDVixZQUFZO0lBQ1osNENBQTRDO0lBQzVDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7R0FDakIsZ0NBQWdDO0dBQ2hDLGtCQUFrQjtHQUNsQixrQkFBa0I7R0FDbEI7O0FBRUE7T0FDSSxvQkFBb0I7T0FDcEIsWUFBWTtPQUNaLFlBQVk7T0FDWixrQkFBa0I7T0FDbEIsbUJBQW1CO0dBQ3ZCOztBQUVIO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7R0FDakI7O0FBQ0g7Ozs7O0dBS0c7O0FBRUg7SUFDSSxxQkFBcUI7O0FBRXpCOztBQUVBO0lBQ0ksZUFBZTs7QUFFbkIiLCJmaWxlIjoic3JjL2FwcC9CZXV0aWNpYW4vYXBwb2ludG1lbnQtbGlzdC9hcHBvaW50bWVudC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaDIge1xyXG4gICAgY29sb3I6IHNlYWdyZWVuO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5JywgU2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4MCU7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgXHJcbn1cclxuXHJcbi8qIHAge1xyXG4gICAgY29sb3I6IHNhbmR5YnJvd247XHJcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn0gKi9cclxuXHJcblxyXG4vKiBNQUlOICovXHJcbi8qIC5zZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG59ICovXHJcblxyXG5cclxuXHJcbi8qIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0gKi9cclxuXHJcblxyXG5cclxuLyogLmJveC0xIHtcclxuICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG59ICovXHJcbi5jYXJke1xyXG4gICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZpcnN0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5zZWNvbmQge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBsZWZ0OiAyNSU7XHJcbn1cclxuXHJcbi5ib3gtMSAuc2Vjb25kIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG4uYm94LTE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRzZWFncmVlbjtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDEzNCwgODksIDg5LCAwLjg4KSxyZ2JhKDEzNCwgODksIDg5LCAwLjc0KSksdXJsKGh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzU0NTMzMS9wZXhlbHMtcGhvdG8tNTQ1MzMxLmpwZWc/dz05NDAmaD02NTAmYXV0bz1jb21wcmVzcyZjcz10aW55c3JnYik7ICovXHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XHJcblxyXG59XHJcbi5ib3gtMTpob3ZlciAuc2Vjb25kIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHM7XHJcbiAgIFxyXG59XHJcblxyXG4uYm94LTE6aG92ZXIgLmZpcnN0IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi51c2VyLWltZyBpXHJcbntcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4OyAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzkzZjtcclxuICAgIFxyXG59XHJcblxyXG4udXNlci1kZXRhaWxze1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cclxufVxyXG4udXNlci1kZXRhaWxzIC51c2VyLW5hbWV7XHJcbiAgICBjb2xvcjogIzE4OGNmMTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc2VhcmNoLW5hbWVze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7ICBcclxuYm94LXNoYWRvdzogMCAuM3JlbSAuOHJlbSByZ2JhKDAsIDAsIDAsIC4xMik7XHJcbnBhZGRpbmc6IDJweDtcclxubWFyZ2luLWJvdHRvbTogMTBweDtcclxuLyogYm9yZGVyLXJhZGl1czogMTVweDsgKi9cclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblxyXG59XHJcbi5zZWFyY2gtbmFtZXMgLnRpdGxlc3tcclxuICAgIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLnNlYXJjaC1uYW1lcyAuZm9ybS1ncm91cCBpbnB1dHtcclxud2lkdGg6IDEwMCU7XHJcbmJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XHJcbmJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbm1hcmdpbi10b3A6IDEwcHg7XHJcbm91dGxpbmU6IG5vbmU7XHJcbmJveC1zaGFkb3c6IG5vbmU7XHJcbnRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XHJcblxyXG59XHJcbi5zZWFyY2gtbmFtZXMgLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXN7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodHNlYWdyZWVuO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcclxufVxyXG4uc2VhcmNoLW5hbWVzIC5mb3JtLWdyb3VwIHNlbGVjdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbiNwYWdpbmF0aW9ucGFnZXtcclxuICAgIG1hcmdpbi1yaWdodDogMjRweDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gdWwge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHNlYWdyZWVuO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnBhZ2luYXRpb24gdWwgbGkgYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHNlYWdyZWVuICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFuZWx7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMCAuM3JlbSAuOHJlbSByZ2JhKDAsIDAsIDAsIC4xMik7XHJcbiAgICBoZWlnaHQ6IDU2MHB4O1xyXG59XHJcblxyXG4ucGFuZWwgLnBhbmVsLWhlYWRpbmd7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjVweCAyNXB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICBcclxufVxyXG5cclxuLnBhbmVsIC5wYW5lbC1oZWFkaW5nIC50aXRsZXtcclxuICAgIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYW5lbCAucGFuZWwtYm9keXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgIC8qIG1hcmdpbjogMTVweCAyMHB4IDE1cHggMHB4OyAqL1xyXG4gICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgfVxyXG5cclxuICAgLnBhbmVsLWJvZHkgdWwgbGl7XHJcbiAgICAgICBiYWNrZ3JvdW5kOiBob25leWRldztcclxuICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgIH1cclxuXHJcbi5saXN0LWl0ZW1ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgfVxyXG4vKiAubGlzdC1pdGVtcyAuaW1ne1xyXG53aWR0aDogMzBweDtcclxuaGVpZ2h0OiAzMHB4O1xyXG5ib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG5ib3JkZXItcmFkaXVzOiAzNXB4O1xyXG59ICovXHJcblxyXG4uYWN0aW9uLWxpc3QgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG59XHJcblxyXG4uYWN0aW9uLWxpc3QgYSBpIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Beutician/appointment-list/appointment-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Beutician/appointment-list/appointment-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: AppointmentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentListComponent", function() { return AppointmentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _beauticianservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../beauticianservice.service */ "./src/app/Beutician/beauticianservice.service.ts");




let AppointmentListComponent = class AppointmentListComponent {
    constructor(_beauticianService, _router) {
        this._beauticianService = _beauticianService;
        this._router = _router;
        this.beautician_id = 9;
        this.page = 1;
        this.limit = 6;
        this.UserBookings = [];
        this.appDetails = [];
    }
    ngOnInit() {
        this.getBookingsById();
        this.getAppointmentsById();
    }
    generateReports() {
        // alert('This Functionality on under developement.')
        this._router.navigateByUrl("/beauty-report");
    }
    cancelAppointment() {
        $("#exampleModalCenter").modal("show");
    }
    getBookingsById() {
        let payload = {
            beautician_id: this.beautician_id,
            limit: this.limit,
            page: this.page
        };
        this._beauticianService
            .getBookingsByBeautician(payload)
            .subscribe((result) => {
            console.log(result['data'].bookingStatus == 0);
            if (result['success'] == true) {
                this.UserBookings = result['data'];
                this.getAppointmentsById();
            }
        });
    }
    confirmBooking(item) {
        alert('Confirm Booking');
        console.log(item);
        let App_payload = {
            book_id: item.book_id,
            user_id: item.user_id,
            date: item.date,
            time: item.time,
            description: item.description,
            issuedBy: item.BeauticianDetails
        };
        this._beauticianService.statusChange(App_payload).subscribe((result) => {
            console.log(result);
        }, (err) => {
        });
    }
    rejectBooking(item) {
        alert('Reject Booking' + item);
    }
    getAppointmentsById() {
        let payload = {
            page: this.page,
            limit: this.limit
        };
        this._beauticianService.getAppointments(payload).subscribe((result) => {
            console.log(result);
            this.appDetails = result['data'];
        }, (err) => {
            console.log(err);
        });
    }
};
AppointmentListComponent.ctorParameters = () => [
    { type: _beauticianservice_service__WEBPACK_IMPORTED_MODULE_3__["BeauticianserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppointmentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-appointment-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./appointment-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Beutician/appointment-list/appointment-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./appointment-list.component.css */ "./src/app/Beutician/appointment-list/appointment-list.component.css")).default]
    })
], AppointmentListComponent);



/***/ }),

/***/ "./src/app/Beutician/beautician.module.ts":
/*!************************************************!*\
  !*** ./src/app/Beutician/beautician.module.ts ***!
  \************************************************/
/*! exports provided: BeauticianModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeauticianModule", function() { return BeauticianModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _beauty_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./beauty-routing.module */ "./src/app/Beutician/beauty-routing.module.ts");
/* harmony import */ var _beauty_home_beauty_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./beauty-home/beauty-home.component */ "./src/app/Beutician/beauty-home/beauty-home.component.ts");
/* harmony import */ var _appointment_list_appointment_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appointment-list/appointment-list.component */ "./src/app/Beutician/appointment-list/appointment-list.component.ts");
/* harmony import */ var _beauty_report_beauty_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./beauty-report/beauty-report.component */ "./src/app/Beutician/beauty-report/beauty-report.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let BeauticianModule = class BeauticianModule {
};
BeauticianModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_beauty_home_beauty_home_component__WEBPACK_IMPORTED_MODULE_4__["BeautyHomeComponent"], _appointment_list_appointment_list_component__WEBPACK_IMPORTED_MODULE_5__["AppointmentListComponent"], _beauty_report_beauty_report_component__WEBPACK_IMPORTED_MODULE_6__["BeautyReportComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _beauty_routing_module__WEBPACK_IMPORTED_MODULE_3__["BeautyRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ]
    })
], BeauticianModule);



/***/ }),

/***/ "./src/app/Beutician/beauticianservice.service.ts":
/*!********************************************************!*\
  !*** ./src/app/Beutician/beauticianservice.service.ts ***!
  \********************************************************/
/*! exports provided: BeauticianserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeauticianserviceService", function() { return BeauticianserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let BeauticianserviceService = class BeauticianserviceService {
    constructor(_http) {
        this._http = _http;
        this.apiUrl = `https://beauticiansystem-demo.herokuapp.com/api`;
    }
    getBookingsByBeautician(data) {
        return this._http.post(this.apiUrl + `/booking/beauticianId`, data);
    }
    statusChange(data) {
        return this._http.post(this.apiUrl + `/booking/status`, data);
    }
    getAppointments(data) {
        return this._http.post(this.apiUrl + `/appointment/appointment`, data);
    }
    genetateReport(data) {
        return this._http.post(this.apiUrl + `/report/add`, data);
    }
};
BeauticianserviceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BeauticianserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], BeauticianserviceService);



/***/ }),

/***/ "./src/app/Beutician/beauty-home/beauty-home.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Beutician/beauty-home/beauty-home.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0JldXRpY2lhbi9iZWF1dHktaG9tZS9iZWF1dHktaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/Beutician/beauty-home/beauty-home.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Beutician/beauty-home/beauty-home.component.ts ***!
  \****************************************************************/
/*! exports provided: BeautyHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeautyHomeComponent", function() { return BeautyHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BeautyHomeComponent = class BeautyHomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
BeautyHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-beauty-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./beauty-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Beutician/beauty-home/beauty-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./beauty-home.component.css */ "./src/app/Beutician/beauty-home/beauty-home.component.css")).default]
    })
], BeautyHomeComponent);



/***/ }),

/***/ "./src/app/Beutician/beauty-report/beauty-report.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/Beutician/beauty-report/beauty-report.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 2;\r\n  top: 80px;\r\n  right: 0;\r\n  overflow-y: hidden;\r\n  transition: 0.5s;\r\n  padding-top: 60px;\r\n}\r\n\r\n\r\n\r\n\r\n.sidebar .closebtn {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 25px;\r\n\r\n  margin-left: 50px;\r\n}\r\n\r\n\r\n\r\n\r\n.openbtn {\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  background-color: #111;\r\n  color: white;\r\n  padding: 10px 15px;\r\n  border: none;\r\n}\r\n\r\n\r\n\r\n\r\n.closebtn i:hover {\r\n  color: crimson;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n.openbtn:hover {\r\n  background-color: #444;\r\n}\r\n\r\n\r\n\r\n\r\n#main {\r\n  transition: margin-left .5s;\r\n  padding: 16px;\r\n}\r\n\r\n\r\n\r\n\r\n.search-names {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  box-shadow: 0 .3rem .8rem rgba(0, 0, 0, .12);\r\n  padding: 2px;\r\n  margin-bottom: 10px;\r\n  /* border-radius: 15px; */\r\n  align-items: center;\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.search-names .titles {\r\n  color: lightseagreen;\r\n  margin-left: -15px;\r\n  font-size: 1.5em;\r\n  text-align: left;\r\n  font-weight: bolder;\r\n}\r\n\r\n\r\n\r\n\r\n.search-names .form-group input {\r\n  width: 100%;\r\n  border: 1px solid lightseagreen;\r\n  border-radius: 35px;\r\n  margin-top: 10px;\r\n  outline: none;\r\n  box-shadow: none;\r\n  transition: 0.2s ease all;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.search-names .form-group input:focus {\r\n  border: 2px solid lightseagreen;\r\n  transition: 0.2s ease all;\r\n}\r\n\r\n\r\n\r\n\r\n.search-names .form-group select {\r\n  margin-top: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n.table {\r\n  box-shadow: 0 .3rem .8rem rgba(0, 0, 0, .12);\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\ntr.active {\r\n  background-color: greenyellow;\r\n}\r\n\r\n\r\n\r\n\r\n.paginate {\r\n  display: flex;\r\n  /* justify-items: flex-end; */\r\n  align-items: right;\r\n\r\n}\r\n\r\n\r\n\r\n\r\nul.pagination li {\r\n  justify-content: right;\r\n}\r\n\r\n\r\n\r\n\r\nul.pagination li a {\r\n  color: black;\r\n  padding: 8px 16px;\r\n  text-decoration: none;\r\n  border-radius: 5px;\r\n}\r\n\r\n\r\n\r\n\r\nul.pagination li a.active {\r\n  background-color: lightseagreen;\r\n  color: white;\r\n  border-radius: 35px;\r\n}\r\n\r\n\r\n\r\n\r\nul.pagination li a:hover:not(.active) {\r\n  background-color: lightseagreen;\r\n}\r\n\r\n\r\n\r\n\r\n.panel {\r\n  font-family: 'Roboto', sans-serif;\r\n  padding: 0;\r\n  border: none;\r\n  box-shadow: 0 .3rem .8rem rgba(0, 0, 0, .12);\r\n  background: #fff;\r\n}\r\n\r\n\r\n\r\n\r\n.panel .panel-heading {\r\n  background: #fff;\r\n  padding: 25px 25px 10px;\r\n  border-radius: 0;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.panel .panel-heading h3 {\r\n  color: lightseagreen;\r\n  font-size: 1.5em;\r\n  font-weight: 400;\r\n  line-height: 30px;\r\n  text-transform: capitalize;\r\n  text-align: center;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.panel .panel-body {\r\n  border-radius: 0;\r\n  margin: 0px 25px 15px 25px;\r\n  height: 500px;\r\n}\r\n\r\n\r\n\r\n\r\n.user-details {\r\n  display: flex;\r\n}\r\n\r\n\r\n\r\n\r\n.user-details p {\r\n  font-size: 1em;\r\n  text-align: center;\r\n  margin-top: 15px;\r\n  padding: 2px;\r\n  margin-left: 5px;\r\n  color: lightseagreen;\r\n}\r\n\r\n\r\n\r\n\r\n.user-details-list {\r\n  display: flex;\r\n  /* flex-direction: column; */\r\n  /* align-right; */\r\n}\r\n\r\n\r\n\r\n\r\n.bill-form {}\r\n\r\n\r\n\r\n\r\n.bill-form input {\r\n  margin-top: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n.bill-form textarea {\r\n  height: 250px;\r\n}\r\n\r\n\r\n\r\n\r\n.form-btn {\r\n  display: block;\r\n  align-items: center;\r\n  place-items: center;\r\n  margin-left: 125px;\r\n}\r\n\r\n\r\n\r\n\r\n.bill-form input,\r\ntextarea:focus {\r\n\r\n  outline: none;\r\n  box-shadow: none;\r\n}\r\n\r\n\r\n\r\n\r\n.form-btn button {\r\n  background: lightseagreen;\r\n  color: #fff;\r\n  text-align: center;\r\n  width: 150px;\r\n  height: 40px;\r\n  outline: none;\r\n  cursor: pointer;\r\n  border: 0px;\r\n  margin-bottom: 5px;\r\n  margin-top: 25px;\r\n}\r\n\r\n\r\n\r\n\r\n.isActive {\r\n    background-color: lightgray;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQmV1dGljaWFuL2JlYXV0eS1yZXBvcnQvYmVhdXR5LXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFFBQVE7RUFDUixlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7Ozs7O0FBS0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7O0VBRVgsaUJBQWlCO0FBQ25COzs7OztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7Ozs7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7Ozs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7Ozs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7Ozs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLDRDQUE0QztFQUM1QyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7OztBQUdyQjs7Ozs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7Ozs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix5QkFBeUI7O0FBRTNCOzs7OztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHlCQUF5QjtBQUMzQjs7Ozs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7Ozs7QUFFQTtFQUNFLDRDQUE0Qzs7O0FBRzlDOzs7OztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COzs7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixrQkFBa0I7O0FBRXBCOzs7OztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOzs7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOzs7OztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7Ozs7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7Ozs7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsVUFBVTtFQUNWLFlBQVk7RUFDWiw0Q0FBNEM7RUFDNUMsZ0JBQWdCO0FBQ2xCOzs7OztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixnQkFBZ0I7O0FBRWxCOzs7OztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixrQkFBa0I7O0FBRXBCOzs7OztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixhQUFhO0FBQ2Y7Ozs7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7Ozs7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7Ozs7QUFFQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsaUJBQWlCO0FBQ25COzs7OztBQUVBLFlBQVk7Ozs7O0FBRVo7RUFDRSxnQkFBZ0I7QUFDbEI7Ozs7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7Ozs7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7Ozs7O0FBRUE7OztFQUdFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7Ozs7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7Ozs7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9CZXV0aWNpYW4vYmVhdXR5LXJlcG9ydC9iZWF1dHktcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAyO1xyXG4gIHRvcDogODBweDtcclxuICByaWdodDogMDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBwYWRkaW5nLXRvcDogNjBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLnNpZGViYXIgLmNsb3NlYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG5cclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLm9wZW5idG4ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmNsb3NlYnRuIGk6aG92ZXIge1xyXG4gIGNvbG9yOiBjcmltc29uO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm9wZW5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XHJcbn1cclxuXHJcbiNtYWluIHtcclxuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAuNXM7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLnNlYXJjaC1uYW1lcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBib3gtc2hhZG93OiAwIC4zcmVtIC44cmVtIHJnYmEoMCwgMCwgMCwgLjEyKTtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAvKiBib3JkZXItcmFkaXVzOiAxNXB4OyAqL1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5cclxufVxyXG5cclxuLnNlYXJjaC1uYW1lcyAudGl0bGVzIHtcclxuICBjb2xvcjogbGlnaHRzZWFncmVlbjtcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5zZWFyY2gtbmFtZXMgLmZvcm0tZ3JvdXAgaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xyXG5cclxufVxyXG5cclxuLnNlYXJjaC1uYW1lcyAuZm9ybS1ncm91cCBpbnB1dDpmb2N1cyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRzZWFncmVlbjtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xyXG59XHJcblxyXG4uc2VhcmNoLW5hbWVzIC5mb3JtLWdyb3VwIHNlbGVjdCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICBib3gtc2hhZG93OiAwIC4zcmVtIC44cmVtIHJnYmEoMCwgMCwgMCwgLjEyKTtcclxuXHJcblxyXG59XHJcblxyXG50ci5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xyXG59XHJcblxyXG4ucGFnaW5hdGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyoganVzdGlmeS1pdGVtczogZmxleC1lbmQ7ICovXHJcbiAgYWxpZ24taXRlbXM6IHJpZ2h0O1xyXG5cclxufVxyXG5cclxudWwucGFnaW5hdGlvbiBsaSB7XHJcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxufVxyXG5cclxudWwucGFnaW5hdGlvbiBsaSBhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxudWwucGFnaW5hdGlvbiBsaSBhLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcclxufVxyXG5cclxudWwucGFnaW5hdGlvbiBsaSBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcclxufVxyXG5cclxuLnBhbmVsIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMCAuM3JlbSAuOHJlbSByZ2JhKDAsIDAsIDAsIC4xMik7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLnBhbmVsIC5wYW5lbC1oZWFkaW5nIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDI1cHggMjVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcblxyXG59XHJcblxyXG4ucGFuZWwgLnBhbmVsLWhlYWRpbmcgaDMge1xyXG4gIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4ucGFuZWwgLnBhbmVsLWJvZHkge1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgbWFyZ2luOiAwcHggMjVweCAxNXB4IDI1cHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLnVzZXItZGV0YWlscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnVzZXItZGV0YWlscyBwIHtcclxuICBmb250LXNpemU6IDFlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBjb2xvcjogbGlnaHRzZWFncmVlbjtcclxufVxyXG5cclxuLnVzZXItZGV0YWlscy1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXHJcbiAgLyogYWxpZ24tcmlnaHQ7ICovXHJcbn1cclxuXHJcbi5iaWxsLWZvcm0ge31cclxuXHJcbi5iaWxsLWZvcm0gaW5wdXQge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5iaWxsLWZvcm0gdGV4dGFyZWEge1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWJ0biB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMjVweDtcclxufVxyXG5cclxuLmJpbGwtZm9ybSBpbnB1dCxcclxudGV4dGFyZWE6Zm9jdXMge1xyXG5cclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWJ0biBidXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0c2VhZ3JlZW47XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5pc0FjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Beutician/beauty-report/beauty-report.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Beutician/beauty-report/beauty-report.component.ts ***!
  \********************************************************************/
/*! exports provided: BeautyReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeautyReportComponent", function() { return BeautyReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _beauticianservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../beauticianservice.service */ "./src/app/Beutician/beauticianservice.service.ts");



let BeautyReportComponent = class BeautyReportComponent {
    constructor(_beauticianservice) {
        this._beauticianservice = _beauticianservice;
        this.page = 1;
        this.limit = 6;
        this.AppDetails = [];
        this.currentIndex = null;
    }
    ngOnInit() {
        this.getAppointmentsById();
    }
    openNav(item, id) {
        document.getElementById("mySidebar").style.width = "450px";
        document.getElementById("main").style.width = "75%";
        document.getElementById("main").style.marginRight = "450px";
        this.currentIndex = Number(id);
        this.username = item.username;
        this.date = item.date;
        this.time = item.time;
        this.description = item.description;
        this.appointmentID = item.appointmentID;
        this.user_id = item.user_id;
        this.issuedBy = item.issuedBy;
    }
    closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginRight = "0";
        document.getElementById("main").style.width = "100%";
        this.currentIndex = null;
    }
    getAppointmentsById() {
        let payload = {
            page: this.page,
            limit: this.limit
        };
        this._beauticianservice.getAppointments(payload).subscribe((result) => {
            console.log(result);
            this.AppDetails = result['data'];
        }, (err) => {
            console.log(err);
        });
    }
    GenReport(item) {
        console.log(item);
        this.username = item.username;
        this.date = item.date;
        this.time = item.time;
        this.description = item.description;
        this.appointmentID = item.appointmentID;
        this.user_id = item.user_id;
        this.issuedBy = item.issuedBy;
    }
    submitReport(data) {
        let reportPayload = {
            appointmentID: this.appointmentID,
            user_id: this.user_id,
            amount: data.amount,
            report: data.description,
            issuedBy: this.issuedBy,
        };
        this._beauticianservice.genetateReport(reportPayload).subscribe((result) => {
            this.getAppointmentsById();
            this.closeNav();
        }, (Err) => {
            console.log(Err);
            this.getAppointmentsById();
            this.closeNav();
        });
    }
};
BeautyReportComponent.ctorParameters = () => [
    { type: _beauticianservice_service__WEBPACK_IMPORTED_MODULE_2__["BeauticianserviceService"] }
];
BeautyReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-beauty-report',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./beauty-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Beutician/beauty-report/beauty-report.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./beauty-report.component.css */ "./src/app/Beutician/beauty-report/beauty-report.component.css")).default]
    })
], BeautyReportComponent);



/***/ }),

/***/ "./src/app/Beutician/beauty-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/Beutician/beauty-routing.module.ts ***!
  \****************************************************/
/*! exports provided: BeautyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeautyRoutingModule", function() { return BeautyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/auth.guard */ "./src/app/user/auth.guard.ts");
/* harmony import */ var _appointment_list_appointment_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appointment-list/appointment-list.component */ "./src/app/Beutician/appointment-list/appointment-list.component.ts");
/* harmony import */ var _beauty_home_beauty_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./beauty-home/beauty-home.component */ "./src/app/Beutician/beauty-home/beauty-home.component.ts");
/* harmony import */ var _beauty_report_beauty_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./beauty-report/beauty-report.component */ "./src/app/Beutician/beauty-report/beauty-report.component.ts");







const routes = [
    {
        path: 'beautician-home',
        component: _beauty_home_beauty_home_component__WEBPACK_IMPORTED_MODULE_5__["BeautyHomeComponent"],
        canActivate: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'appointment',
        component: _appointment_list_appointment_list_component__WEBPACK_IMPORTED_MODULE_4__["AppointmentListComponent"],
        canActivate: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'beauty-report',
        component: _beauty_report_beauty_report_component__WEBPACK_IMPORTED_MODULE_6__["BeautyReportComponent"],
        pathMatch: 'full'
    }
];
let BeautyRoutingModule = class BeautyRoutingModule {
};
BeautyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BeautyRoutingModule);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/auth/signin/signin.component */ "./src/app/components/auth/signin/signin.component.ts");
/* harmony import */ var _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/auth/signup/signup.component */ "./src/app/components/auth/signup/signup.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");







const routes = [
    {
        path: 'sign-in',
        component: _components_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"],
        pathMatch: 'full'
    },
    {
        path: 'sign-up',
        component: _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: '/sign-in',
        pathMatch: 'full'
    },
    {
        path: 'contact',
        component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]
    },
    {
        path: 'about',
        component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    },
    {
        path: 'user',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./user/user.module */ "./src/app/user/user.module.ts")).then(m => m.UserModule)
    },
    {
        path: 'beauty',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./Beutician/beautician.module */ "./src/app/Beutician/beautician.module.ts")).then(m => m.BeauticianModule)
    },
    {
        path: 'admin',
        loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "./src/app/admin/admin.module.ts")).then(m => m.AdminModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.wrapper{\r\n \r\n}\r\n\r\n\r\n.team-boxed {\r\n    color:#313437;\r\n    background-color:#eef4f7;\r\n    justify-content: center;\r\n\r\n  }\r\n\r\n\r\n.team-boxed .people {\r\n    padding:50px 0;\r\n  }\r\n\r\n\r\n.card{\r\n    text-align: center;\r\n    border-radius: 25px;\r\n    padding: 15px;\r\n    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);\r\n  }\r\n\r\n\r\n.card img{\r\n\r\n    width: 100px;\r\n    margin-top: 15px;\r\n    border: 3px solid rgb(43, 175, 228);\r\n    border-radius: 50%;\r\n    height: 100px;\r\n  }\r\n\r\n\r\n.card p{\r\n    margin-top: -5px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n      color: #d0d0d0;\r\n  }\r\n\r\n\r\n.name{\r\n    text-transform: capitalize;\r\n    font-size: 20px;\r\n    text-align: center;\r\n  }\r\n\r\n\r\n.parlour-name{\r\n    text-align: center;\r\n    padding:0em;\r\n    color: black;\r\n    font-size: 15px;\r\n\r\n  }\r\n\r\n\r\n.team-boxed .item {\r\n    text-align:center;\r\n  }\r\n\r\n\r\n.team-boxed .item .box {\r\n    text-align:center;\r\n    padding:30px;\r\n    background-color:#fff;\r\n    margin-bottom:30px;\r\n  }\r\n\r\n\r\n.team-boxed .item .name {\r\n    font-weight:bold;\r\n    margin-top:28px;\r\n    margin-bottom:8px;\r\n    color:inherit;\r\n  }\r\n\r\n\r\n.team-boxed .item .title {\r\n    text-transform:uppercase;\r\n    font-weight:bold;\r\n    color:#d0d0d0;\r\n    letter-spacing:2px;\r\n    font-size:13px;\r\n  }\r\n\r\n\r\n.team-boxed .item .description {\r\n    font-size:15px;\r\n    margin-top:15px;\r\n    margin-bottom:20px;\r\n  }\r\n\r\n\r\n.team-boxed .item img {\r\n    max-width:160px;\r\n  }\r\n\r\n\r\n.team-boxed .social {\r\n    font-size:18px;\r\n    color:#a2a8ae;\r\n    display: inline-block;\r\n    margin-left: 10px ;\r\n  }\r\n\r\n\r\n.social button {\r\n  color: #fff;\r\n  width: 100%;\r\n  letter-spacing: 1px;\r\n  \r\n    background: rgb(43, 175, 228);\r\n    outline: none;\r\n    text-transform: uppercase;\r\n  place-items: center;\r\n    display: block;\r\n    cursor: pointer;\r\n    border: 1px solid rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n\r\n.dot{\r\n     height: 15px;\r\n     width: 15px;\r\n     /* background-color: red; */\r\n     border-radius: 50%;\r\n     display:inline-block;\r\n     left: 85%;\r\n     top: 5%;\r\n     position: absolute;\r\n  }\r\n  \r\n   \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztBQUVBOzs7QUFHQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsdUJBQXVCOztFQUV6Qjs7O0FBQ0E7SUFDRSxjQUFjO0VBQ2hCOzs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlEQUFpRDtFQUNuRDs7O0FBRUE7O0lBRUUsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjs7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtNQUNqQixjQUFjO0VBQ2xCOzs7QUFDQTtJQUNFLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOzs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7O0VBRWpCOzs7QUFDQTtJQUNFLGlCQUFpQjtFQUNuQjs7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7RUFDcEI7OztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtFQUNmOzs7QUFFQTtJQUNFLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOzs7QUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOzs7QUFFQTtJQUNFLGVBQWU7RUFDakI7OztBQUVBO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCOzs7QUFDRjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1COztJQUVqQiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLHlCQUF5QjtFQUMzQixtQkFBbUI7SUFDakIsY0FBYztJQUNkLGVBQWU7SUFDZiwwQ0FBMEM7QUFDOUM7OztBQUdFO0tBQ0csWUFBWTtLQUNaLFdBQVc7S0FDWCwyQkFBMkI7S0FDM0Isa0JBQWtCO0tBQ2xCLG9CQUFvQjtLQUNwQixTQUFTO0tBQ1QsT0FBTztLQUNQLGtCQUFrQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi53cmFwcGVye1xyXG4gXHJcbn1cclxuXHJcblxyXG4udGVhbS1ib3hlZCB7XHJcbiAgICBjb2xvcjojMzEzNDM3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZWVmNGY3O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIH0gIFxyXG4gIC50ZWFtLWJveGVkIC5wZW9wbGUge1xyXG4gICAgcGFkZGluZzo1MHB4IDA7XHJcbiAgfVxyXG4gIC5jYXJke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDIwcHggNDBweCAtMTRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQgaW1ne1xyXG5cclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoNDMsIDE3NSwgMjI4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCBwe1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICBjb2xvcjogI2QwZDBkMDtcclxuICB9XHJcbiAgLm5hbWV7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnBhcmxvdXItbmFtZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6MGVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG5cclxuICB9XHJcbiAgLnRlYW0tYm94ZWQgLml0ZW0ge1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZWFtLWJveGVkIC5pdGVtIC5ib3gge1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBwYWRkaW5nOjMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOjMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZWFtLWJveGVkIC5pdGVtIC5uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOjI4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjhweDtcclxuICAgIGNvbG9yOmluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZWFtLWJveGVkIC5pdGVtIC50aXRsZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgY29sb3I6I2QwZDBkMDtcclxuICAgIGxldHRlci1zcGFjaW5nOjJweDtcclxuICAgIGZvbnQtc2l6ZToxM3B4O1xyXG4gIH1cclxuICBcclxuICAudGVhbS1ib3hlZCAuaXRlbSAuZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZWFtLWJveGVkIC5pdGVtIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6MTYwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZWFtLWJveGVkIC5zb2NpYWwge1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICBjb2xvcjojYTJhOGFlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHggO1xyXG4gIH1cclxuLnNvY2lhbCBidXR0b24ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNDMsIDE3NSwgMjI4KTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxufVxyXG4gXHJcblxyXG4gIC5kb3R7XHJcbiAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxuICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgbGVmdDogODUlO1xyXG4gICAgIHRvcDogNSU7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICBcclxuICAgIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Beautician System';
        this.beautician = [{
                name: 'sandhya',
                experience: '2years',
                skills: 'spa'
            },
            {
                name: 'sudha',
                experience: '6-months',
                skills: 'spa'
            },
            {
                name: 'vani',
                experience: '5yers',
                skills: 'spa'
            },
            {
                name: 'ragasudha',
                experience: '2years',
                skills: 'spa'
            },
            {
                name: 'radha',
                experience: '2years',
                skills: 'spa'
            },
            {
                name: 'komali',
                experience: '2years',
                skills: 'spa'
            },
            {
                name: 'raga priya',
                experience: '2years',
                skills: 'spa'
            },
            {
                name: 'priya',
                experience: '2years',
                skills: 'spa'
            },
            {
                name: 'kumari',
                experience: '2years',
                skills: 'spa'
            },
        ];
        this.SidebarLoad = false;
        this.user = false;
    }
    // myData(word:any){
    //     word = word.replace(word.substr(0,word.length-8),word.substr(5,word.length).replace(/./g,"*"))
    //   console.log(word);
    //   return word
    // }
    BookOp(data) {
        console.log(data);
        this.SidebarLoad = true;
        this.currentName = data;
    }
    selectedUser(event) {
        // console.log(event);
    }
    wasSelected(data) {
        console.log(data);
    }
    userStatus(event) {
        console.log(event);
        // if(event.target.clicked == 'true'){
        //   this.user =true
        // }
        // this.user= false
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _Beutician_beautician_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Beutician/beautician.module */ "./src/app/Beutician/beautician.module.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _demo_list_demo_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./demo-list/demo-list.component */ "./src/app/demo-list/demo-list.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _components_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/auth/signin/signin.component */ "./src/app/components/auth/signin/signin.component.ts");
/* harmony import */ var _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/auth/signup/signup.component */ "./src/app/components/auth/signup/signup.component.ts");
/* harmony import */ var _user_common_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/common-auth.service */ "./src/app/user/common-auth.service.ts");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
            _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
            _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
            _demo_list_demo_list_component__WEBPACK_IMPORTED_MODULE_16__["DemoListComponent"],
            _components_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_18__["SigninComponent"],
            _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_15__["AngularFontAwesomeModule"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(), _user_user_module__WEBPACK_IMPORTED_MODULE_9__["UserModule"], _Beutician_beautician_module__WEBPACK_IMPORTED_MODULE_14__["BeauticianModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_17__["NgxPaginationModule"]
        ],
        providers: [_user_common_auth_service__WEBPACK_IMPORTED_MODULE_20__["CommonAuthService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/components/auth/signin/signin.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/auth/signin/signin.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n.signup-link{\r\n    font-size: 0.8em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLnNpZ251cC1saW5re1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/auth/signin/signin.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/auth/signin/signin.component.ts ***!
  \************************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var src_app_user_common_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user/common-auth.service */ "./src/app/user/common-auth.service.ts");





let SigninComponent = class SigninComponent {
    constructor(_commonAuth, _router, toster) {
        this._commonAuth = _commonAuth;
        this._router = _router;
        this.toster = toster;
        this.username = '';
        this.password = '';
        this.user_type = '';
    }
    ngOnInit() { }
    loginData(element, data) {
        // console.log(data);
        element.textContent = 'Please Wait';
        element.disabled = true;
        this._commonAuth.checkSigndata(data).subscribe((result) => {
            console.log(result);
            if (result['success'] == true) {
                this.toster.successToastr(result['message']);
                sessionStorage.setItem('role', result['data'].role);
                sessionStorage.setItem('currentUser', result['data'].username);
                sessionStorage.setItem('user_id', result['data'].user_id);
                this.user_type = result['data'].role;
                // console.log(this.user_type);
                this.saveToken(result.token);
                if (this.user_type === 'user') {
                    setInterval(() => {
                        this._router.navigate(['/user/home']);
                    }, 2000);
                }
                else if (this.user_type === 'admin') {
                    setInterval(() => {
                        this._router.navigate(['/admin/dashboard']);
                    }, 2000);
                }
                else {
                    setInterval(() => {
                        this._router.navigate(['/beauty/beautician-home']);
                    }, 2000);
                }
            }
        }, (error) => {
            this.toster.successToastr(error['message']);
            element.textContent = 'Sign In';
            element.disabled = false;
            console.log(error);
            this.resetForm();
            this._router.navigateByUrl('/sign-in');
        });
    }
    resetForm() {
        this.loginForm.reset();
        this.username = null;
        this.password = null;
    }
    saveToken(token) {
        sessionStorage.setItem('token', token);
    }
};
SigninComponent.ctorParameters = () => [
    { type: src_app_user_common_auth_service__WEBPACK_IMPORTED_MODULE_4__["CommonAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginForm', {
        static: false
    })
], SigninComponent.prototype, "loginForm", void 0);
SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/signin/signin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signin.component.css */ "./src/app/components/auth/signin/signin.component.css")).default]
    })
], SigninComponent);



/***/ }),

/***/ "./src/app/components/auth/signup/signup.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/auth/signup/signup.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.signup-form {\r\n    margin-top: 15px auto;\r\n\r\n}\r\nh3 {\r\n    text-align: center;\r\n    color: skyblue;\r\n}\r\n.login-link{\r\n    font-size: 0.8em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxxQkFBcUI7O0FBRXpCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2lnbnVwLWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweCBhdXRvO1xyXG5cclxufVxyXG5oMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogc2t5Ymx1ZTtcclxufVxyXG5cclxuLmxvZ2luLWxpbmt7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/auth/signup/signup.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/auth/signup/signup.component.ts ***!
  \************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var src_app_user_common_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user/common-auth.service */ "./src/app/user/common-auth.service.ts");





let SignupComponent = class SignupComponent {
    constructor(_commonAuth, _router, toster) {
        this._commonAuth = _commonAuth;
        this._router = _router;
        this.toster = toster;
        this.username = '';
        this.email = '';
        this.password = '';
        this.mobileNumber = '';
    }
    ngOnInit() { }
    registerNewUser(element, data) {
        element.textContent = 'Please wait';
        element.disabled = true;
        const userData = {
            username: this.username,
            email: this.email,
            password: this.password,
            mobileNumber: this.mobileNumber,
            role: 'user'
        };
        this._commonAuth.userRegister(userData).subscribe((result) => {
            console.log(result);
            this.toster.successToastr(result['message']);
            this._router.navigate(['/user/sign-in']);
        }, (error) => {
            console.log(error);
            this.toster.successToastr(error['message']);
            element.textContent = 'Sign Up';
            element.disabled = false;
            this.resetForm();
        });
    }
    resetForm() {
        this.registerForm.reset();
        this.username = null;
        this.mobileNumber = null;
        this.email = null;
        this.password = null;
    }
};
SignupComponent.ctorParameters = () => [
    { type: src_app_user_common_auth_service__WEBPACK_IMPORTED_MODULE_4__["CommonAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('registerForm', {
        static: false
    })
], SignupComponent.prototype, "registerForm", void 0);
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/components/auth/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.sticky-footer {\r\n    margin-bottom: 56px;\r\n  }\r\n  \r\n.sticky-footer  {\r\n    min-height: calc(100vh - 56px - 56px);\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksbUJBQW1CO0VBQ3JCOztBQUVGO0lBQ0kscUNBQXFDO0VBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnN0aWNreS1mb290ZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTZweDtcclxuICB9XHJcbiAgXHJcbi5zdGlja3ktZm9vdGVyICB7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCAtIDU2cHgpO1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n\r\n}\r\n.title-heading{\r\n    text-transform:capitalize;\r\n    text-align: center;\r\n    justify-content: center;\r\n    font-style: italic;\r\n        \r\n}\r\np {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.1em;\r\n    font-weight: 300;\r\n    line-height: 1.7em;\r\n    color: #999;\r\n}\r\n.title-heading::first-letter{\r\n    color: red;\r\n}\r\na,\r\na:hover,\r\na:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    transition: all 0.3s;\r\n}\r\n.navbar {\r\n    padding: 15px 10px;\r\n    background: #fff;\r\n    border: none;\r\n    border-radius: 0;\r\n    margin-bottom: 40px;\r\n    margin-top:0px ;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n.navbar-btn {\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    border: none;\r\n}\r\n.line {\r\n    width: 100%;\r\n    height: 1px;\r\n    border-bottom: 1px dashed #ddd;\r\n    margin: 40px 0;\r\n}\r\ni,\r\nspan {\r\n    display: inline-block;\r\n}\r\n/* search Bar */\r\n.search-form{\r\n   position: absolute;\r\n   left: 65%;\r\n  top: 18px;\r\n  box-shadow: 0;\r\n  outline: 0;\r\n  \r\n}\r\n.userNavbar nav {\r\n   background: lightseagreen !important;\r\n\r\n}\r\n.brand-name{\r\n    color: #fff;\r\n}\r\n/* Rounded pill classes for horizontal sides */\r\n.rounded-pill-left {\r\n    border-top-left-radius: 50rem !important;\r\n    border-bottom-left-radius: 50rem !important;\r\n  }\r\n.rounded-pill-right {\r\n    border-top-right-radius: 50rem !important;\r\n    border-bottom-right-radius: 50rem !important;\r\n  }\r\n/* Another classes to use */\r\n.rounded-t-l-0 {\r\n    border-top-left-radius: 0 !important;\r\n  }\r\n.rounded-t-r-0 {\r\n    border-top-right-radius: 0 !important;\r\n  }\r\n.rounded-b-l-0 {\r\n    border-bottom-left-radius: 0 !important;\r\n  }\r\n.rounded-b-r-0 {\r\n    border-bottom-right-radius: 0 !important;\r\n  }\r\n.rounded-x-l-0 {\r\n    border-top-left-radius: 0 !important;\r\n    border-bottom-left-radius: 0 !important;\r\n  }\r\n.rounded-x-r-0 {\r\n    border-top-right-radius: 0 !important;\r\n    border-bottom-right-radius: 0 !important;\r\n  }\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n.wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n\r\n}\r\n#sidebar {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    max-height: auto;\r\n    background: #7386D5;\r\n    color: #fff;\r\n    transition: all 0.3s;\r\n}\r\n#sidebar.active {\r\n    min-width: 80px;\r\n    max-width: 80px;\r\n    text-align: center;\r\n}\r\n#sidebar.active .sidebar-header h3,\r\n#sidebar.active .CTAs {\r\n    display: none;\r\n}\r\n#sidebar.active .sidebar-header strong {\r\n    display: block;\r\n}\r\n#sidebar ul li a {\r\n    text-align: left;\r\n}\r\n#sidebar.active ul li a {\r\n    padding: 20px 10px;\r\n    text-align: center;\r\n    font-size: 0.85em;\r\n}\r\n#sidebar.active ul li a i {\r\n    margin-right: 0;\r\n    display: block;\r\n    font-size: 1.8em;\r\n    margin-bottom: 5px;\r\n}\r\n#sidebar.active ul ul a {\r\n    padding: 10px !important;\r\n}\r\n#sidebar.active .dropdown-toggle::after {\r\n    top: auto;\r\n    bottom: 10px;\r\n    right: 50%;\r\n    transform: translateX(50%);\r\n}\r\n#sidebar .sidebar-header {\r\n    padding: 20px;\r\n    background: #6d7fcc;\r\n}\r\n#sidebar .sidebar-header strong {\r\n    display: none;\r\n    font-size: 1.8em;\r\n}\r\n#sidebar ul.components {\r\n    padding: 20px 0;\r\n    border-bottom: 1px solid #47748b;\r\n}\r\n#sidebar ul li a {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    display: block;\r\n}\r\n#sidebar ul li a:hover {\r\n    color: #7386D5;\r\n    background: #fff;\r\n}\r\n#sidebar ul li a i {\r\n    margin-right: 10px;\r\n}\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n    color: #fff;\r\n    background: #6d7fcc;\r\n}\r\na[data-toggle=\"collapse\"] {\r\n    position: relative;\r\n}\r\n.dropdown-toggle::after {\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 20px;\r\n    transform: translateY(-50%);\r\n}\r\nul ul a {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    background: #6d7fcc;\r\n}\r\nul.CTAs {\r\n    padding: 20px;\r\n}\r\nul.CTAs a {\r\n    text-align: center;\r\n    font-size: 0.9em !important;\r\n    display: block;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\na.download {\r\n    background: #fff;\r\n    color: #7386D5;\r\n}\r\na.article,\r\na.article:hover {\r\n    background: #6d7fcc !important;\r\n    color: #fff !important;\r\n}\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n#content {\r\n    width: 100%;\r\n    padding: 20px;\r\n    margin-top: 0px;\r\n    min-height: 100vh;\r\n    transition: all 0.3s;\r\n    overflow: hidden;\r\n}\r\n#content nav{\r\n\r\n}\r\n/* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- */\r\n@media (max-width: 768px) {\r\n    #sidebar {\r\n        min-width: 80px;\r\n        max-width: 80px;\r\n        text-align: center;\r\n        margin-left: -80px !important;\r\n    }\r\n    .dropdown-toggle::after {\r\n        top: auto;\r\n        bottom: 10px;\r\n        right: 50%;\r\n        transform: translateX(50%);\r\n    }\r\n    #sidebar.active {\r\n        margin-left: 0 !important;\r\n    }\r\n    #sidebar .sidebar-header h3,\r\n    #sidebar .CTAs {\r\n        display: none;\r\n    }\r\n    #sidebar .sidebar-header strong {\r\n        display: block;\r\n    }\r\n    #sidebar ul li a {\r\n        padding: 20px 10px;\r\n    }\r\n    #sidebar ul li a span {\r\n        font-size: 0.85em;\r\n    }\r\n    #sidebar ul li a i {\r\n        margin-right: 0;\r\n        display: block;\r\n    }\r\n    #sidebar ul ul a {\r\n        padding: 10px !important;\r\n    }\r\n    #sidebar ul li a i {\r\n        font-size: 1.3em;\r\n    }\r\n    #sidebar {\r\n        margin-left: 0;\r\n    }\r\n    #sidebarCollapse span {\r\n        display: none;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSw2RUFBNkU7QUFDN0U7SUFDSSxrQ0FBa0M7O0FBRXRDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixrQkFBa0I7O0FBRXRCO0FBR0E7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFFQTs7O0lBR0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDBDQUEwQztBQUM5QztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixjQUFjO0FBQ2xCO0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCO0FBQ0EsZUFBZTtBQUNmO0dBQ0csa0JBQWtCO0dBQ2xCLFNBQVM7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLFVBQVU7O0FBRVo7QUFFQTtHQUNHLG9DQUFvQzs7QUFFdkM7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUtBLDhDQUE4QztBQUM5QztJQUNJLHdDQUF3QztJQUN4QywyQ0FBMkM7RUFDN0M7QUFDQTtJQUNFLHlDQUF5QztJQUN6Qyw0Q0FBNEM7RUFDOUM7QUFFQSwyQkFBMkI7QUFDM0I7SUFDRSxvQ0FBb0M7RUFDdEM7QUFDQTtJQUNFLHFDQUFxQztFQUN2QztBQUNBO0lBQ0UsdUNBQXVDO0VBQ3pDO0FBQ0E7SUFDRSx3Q0FBd0M7RUFDMUM7QUFDQTtJQUNFLG9DQUFvQztJQUNwQyx1Q0FBdUM7RUFDekM7QUFDQTtJQUNFLHFDQUFxQztJQUNyQyx3Q0FBd0M7RUFDMUM7QUFHRjs7dURBRXVEO0FBRXZEO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjs7QUFFeEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUVBOztJQUVJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLFVBQVU7SUFHViwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7O0lBRUksV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFFQTs7SUFFSSw4QkFBOEI7SUFDOUIsc0JBQXNCO0FBQzFCO0FBRUE7O3VEQUV1RDtBQUV2RDtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCO0FBRUE7O0FBRUE7QUFDQTs7dURBRXVEO0FBRXZEO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQiw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLFNBQVM7UUFDVCxZQUFZO1FBQ1osVUFBVTtRQUdWLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0lBQ0E7O1FBRUksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7UUFDZixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXCI7XHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuLnRpdGxlLWhlYWRpbmd7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgXHJcbn1cclxuXHJcblxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG59XHJcbi50aXRsZS1oZWFkaW5nOjpmaXJzdC1sZXR0ZXJ7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5hLFxyXG5hOmhvdmVyLFxyXG5hOmZvY3VzIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDowcHggO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4ubmF2YmFyLWJ0biB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZGRkO1xyXG4gICAgbWFyZ2luOiA0MHB4IDA7XHJcbn1cclxuXHJcbmksXHJcbnNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi8qIHNlYXJjaCBCYXIgKi9cclxuLnNlYXJjaC1mb3Jte1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIGxlZnQ6IDY1JTtcclxuICB0b3A6IDE4cHg7XHJcbiAgYm94LXNoYWRvdzogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIFxyXG59XHJcblxyXG4udXNlck5hdmJhciBuYXYge1xyXG4gICBiYWNrZ3JvdW5kOiBsaWdodHNlYWdyZWVuICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uYnJhbmQtbmFtZXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiBSb3VuZGVkIHBpbGwgY2xhc3NlcyBmb3IgaG9yaXpvbnRhbCBzaWRlcyAqL1xyXG4ucm91bmRlZC1waWxsLWxlZnQge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTByZW0gIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5yb3VuZGVkLXBpbGwtcmlnaHQge1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTByZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLyogQW5vdGhlciBjbGFzc2VzIHRvIHVzZSAqL1xyXG4gIC5yb3VuZGVkLXQtbC0wIHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnJvdW5kZWQtdC1yLTAge1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnJvdW5kZWQtYi1sLTAge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucm91bmRlZC1iLXItMCB7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucm91bmRlZC14LWwtMCB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5yb3VuZGVkLXgtci0wIHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIFNJREVCQVIgU1RZTEVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHJcbn1cclxuXHJcbiNzaWRlYmFyIHtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgbWF4LWhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICM3Mzg2RDU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4jc2lkZWJhci5hY3RpdmUge1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jc2lkZWJhci5hY3RpdmUgLnNpZGViYXItaGVhZGVyIGgzLFxyXG4jc2lkZWJhci5hY3RpdmUgLkNUQXMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI3NpZGViYXIuYWN0aXZlIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGEge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuI3NpZGViYXIuYWN0aXZlIHVsIGxpIGEge1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XHJcbn1cclxuXHJcbiNzaWRlYmFyLmFjdGl2ZSB1bCBsaSBhIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEuOGVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4jc2lkZWJhci5hY3RpdmUgdWwgdWwgYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNzaWRlYmFyLmFjdGl2ZSAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICByaWdodDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xyXG59XHJcblxyXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICM2ZDdmY2M7XHJcbn1cclxuXHJcbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsLmNvbXBvbmVudHMge1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0Nzc0OGI7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGEge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI3NpZGViYXIgdWwgbGkgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzczODZENTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGEgaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLFxyXG5hW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzZkN2ZjYztcclxufVxyXG5cclxuYVtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG51bCB1bCBhIHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogIzZkN2ZjYztcclxufVxyXG5cclxudWwuQ1RBcyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG51bC5DVEFzIGEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbmEuZG93bmxvYWQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjNzM4NkQ1O1xyXG59XHJcblxyXG5hLmFydGljbGUsXHJcbmEuYXJ0aWNsZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIENPTlRFTlQgU1RZTEVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiNjb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4jY29udGVudCBuYXZ7XHJcblxyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgTUVESUFRVUVSSUVTXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICNzaWRlYmFyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTgwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgICAgICB0b3A6IGF1dG87XHJcbiAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIHJpZ2h0OiA1MCU7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XHJcbiAgICB9XHJcbiAgICAjc2lkZWJhci5hY3RpdmUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjc2lkZWJhciAuc2lkZWJhci1oZWFkZXIgaDMsXHJcbiAgICAjc2lkZWJhciAuQ1RBcyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgI3NpZGViYXIgdWwgbGkgYSB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgI3NpZGViYXIgdWwgbGkgYSBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDAuODVlbTtcclxuICAgIH1cclxuICAgICNzaWRlYmFyIHVsIGxpIGEgaSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgI3NpZGViYXIgdWwgdWwgYSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI3NpZGViYXIgdWwgbGkgYSBpIHtcclxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgfVxyXG4gICAgI3NpZGViYXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgI3NpZGViYXJDb2xsYXBzZSBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_user_common_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user/common-auth.service */ "./src/app/user/common-auth.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
        this.role = sessionStorage.getItem('role');
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });
    }
    logout() {
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigateByUrl('/sign-in');
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_user_common_auth_service__WEBPACK_IMPORTED_MODULE_3__["CommonAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/demo-list/demo-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/demo-list/demo-list.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n.card{\r\n    box-shadow: none;\r\n    \r\n    outline: none;\r\n    padding: 1rem;\r\n    border-radius: 15px;\r\n    margin-top: 15px;\r\n    background: linear-gradient(to bottom left, #EF8D9C 40%, #FFC39E 100%);\r\n    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.title img{\r\n    width: 150px;\r\n    height:150px;\r\n    border: 1px solid #fff;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n    align-items: center;\r\n    background: transparent;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-position: fixed;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.details{\r\n   \r\n    text-align: center;\r\n\r\n}\r\n\r\n.details p {\r\n    text-align: center;\r\n    color: #000;\r\n    \r\n\r\n}\r\n\r\n.details .name {\r\n    letter-spacing: 0.2em;\r\n    padding: 5px auto;\r\n}\r\n\r\n.details .skills {\r\n    text-transform:uppercase;\r\n    font-weight:bold;\r\n    color:#fff;\r\n    letter-spacing:2px;\r\n    font-size:13px;\r\n}\r\n\r\n.details .exp{\r\n    text-transform: capitalize;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    letter-spacing: 1px;\r\n    font-size: 0.9em;\r\n}\r\n\r\n.details .beauty-name{\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    letter-spacing: 1px;\r\n    font-size: 20px;\r\n    font-style: italic;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n.track-contents{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    padding: 5px;\r\n    color: #fff;\r\n    box-sizing: border-box;\r\n\r\n}\r\n\r\n.track-details{\r\n  \r\n    padding: 10px 10px ;\r\n    margin: 15px;\r\n    /* background-color: rgb(40, 86, 224); */\r\n    background: transparent;\r\n    border: 1px solid #ffffff;\r\n    border-radius: 50%;\r\n    color: #fff;\r\n    border-radius: 50%;\r\n    place-items:center ;\r\n\r\n\r\n}\r\n\r\n.track-details:hover{\r\nbackground-color: rgba(255, 255, 255, 0.12);\r\n\r\n}\r\n\r\n.bookbtn{\r\n    /* padding: 0.8rem; */\r\n    text-align: center;\r\n    /* margin: 2px; */\r\n    color: #ffffff;\r\n    background: transparent;\r\n    outline: none;\r\n    text-transform: uppercase;\r\n  place-items: center;\r\n    display: block;\r\n    cursor: pointer;\r\n    border: 1px solid rgba(255, 255, 255, 0.2);\r\n\r\n}\r\n\r\n.bookbtn:hover{\r\nbackground-color: rgba(255, 255, 255, 0.12);\r\n}\r\n\r\n.dot{\r\n    height: 15px;\r\n    width: 15px;\r\n    /* background-color: red; */\r\n    border-radius: 50%;\r\n    display:inline-block;\r\n    left: 90%;\r\n    top: 10%;\r\n    position: absolute;\r\n }\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby1saXN0L2RlbW8tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxnQkFBZ0I7O0lBRWhCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixzRUFBc0U7SUFDdEUsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVzs7O0FBR2Y7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsd0lBQXdJO0FBQzVJOztBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7O0FBRTFCOztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osd0NBQXdDO0lBQ3hDLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1COzs7QUFHdkI7O0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDOztBQUlBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IseUJBQXlCO0VBQzNCLG1CQUFtQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLDBDQUEwQzs7QUFFOUM7O0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxRQUFRO0lBQ1Isa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZGVtby1saXN0L2RlbW8tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uY2FyZHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICNFRjhEOUMgNDAlLCAjRkZDMzlFIDEwMCUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggLTE0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufVxyXG5cclxuLnRpdGxlIGltZ3tcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDoxNTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5kZXRhaWxze1xyXG4gICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5kZXRhaWxzIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi5kZXRhaWxzIC5uYW1lIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcclxuICAgIHBhZGRpbmc6IDVweCBhdXRvO1xyXG59XHJcbi5kZXRhaWxzIC5za2lsbHMge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzoycHg7XHJcbiAgICBmb250LXNpemU6MTNweDtcclxufVxyXG4uZGV0YWlscyAuZXhwe1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi5kZXRhaWxzIC5iZWF1dHktbmFtZXtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnRyYWNrLWNvbnRlbnRze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbn1cclxuXHJcbi50cmFjay1kZXRhaWxze1xyXG4gIFxyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgODYsIDIyNCk7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBsYWNlLWl0ZW1zOmNlbnRlciA7XHJcblxyXG5cclxufVxyXG4udHJhY2stZGV0YWlsczpob3ZlcntcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLmJvb2tidG57XHJcbiAgICAvKiBwYWRkaW5nOiAwLjhyZW07ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvKiBtYXJnaW46IDJweDsgKi9cclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcblxyXG59XHJcbi5ib29rYnRuOmhvdmVye1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xyXG59XHJcbi5kb3R7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgbGVmdDogOTAlO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiB9XHJcbiAiXX0= */");

/***/ }),

/***/ "./src/app/demo-list/demo-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/demo-list/demo-list.component.ts ***!
  \**************************************************/
/*! exports provided: DemoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoListComponent", function() { return DemoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DemoListComponent = class DemoListComponent {
    constructor() {
        // this.onselected = new ElementRef;
        $('.userVisible').hide();
    }
    ngOnInit() {
        this.currentUser = this.beautician;
        //  $(document).ready(function(){
        //    $('#btn').click(function(){
        //      console.log('change');
        // this.userVisible=true;
        // $(this).parents('.row').find('.first-block').toggleClass('col-md-2 col-md-8');
        //   })
        //  })
        $('.test').hide();
    }
    ChangeData() {
        // $('.userVisible').show()
        console.log('clicked');
        $('.test').toggle();
        // $(document).ready(function(){
        //       $(this).parents('.row').find('.first-block').toggleClass('col-md-2 col-md-8')
        //    })
    }
    ngOnChanges(changes) {
        // console.log("change detected");
        for (let data in changes) {
            // console.log(changes[data].currentValue);
            this.currentUser = changes[data].currentValue;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DemoListComponent.prototype, "beautician", void 0);
DemoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-demo-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./demo-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo-list/demo-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./demo-list.component.css */ "./src/app/demo-list/demo-list.component.css")).default]
    })
], DemoListComponent);



/***/ }),

/***/ "./src/app/user/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/user/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common-auth.service */ "./src/app/user/common-auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    canActivate() {
        if (this._auth.isLoggedIn()) {
            return true;
        }
        this._router.navigateByUrl('user/sign-in');
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _common_auth_service__WEBPACK_IMPORTED_MODULE_3__["CommonAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/user/common-auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/user/common-auth.service.ts ***!
  \*********************************************/
/*! exports provided: CommonAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonAuthService", function() { return CommonAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let CommonAuthService = class CommonAuthService {
    constructor(_http) {
        this._http = _http;
        this.api_endpoint = `https://beauticiansystem-demo.herokuapp.com/api/user`;
    }
    checkSigndata(data) {
        return this._http.post(this.api_endpoint + `${'/login'}`, data);
    }
    //Register a user
    userRegister(data) {
        return this._http.post(this.api_endpoint + `${'/register'}`, data);
    }
    getUser() {
        return this._http.get(this.api_endpoint);
    }
    gettoken() {
        return sessionStorage.getItem('token');
    }
    removeToken() {
        sessionStorage.removeItem('token');
        window.sessionStorage.clear();
    }
    getuserDetails() {
        const token = this.gettoken();
        if (token) {
            let payload = window.atob(token.split('.')[1]);
            return JSON.parse(payload);
        }
    }
    isLoggedIn() {
        const user = this.getuserDetails();
        if (user) {
            user.exp > Date.now();
            return true;
        }
        else {
            return false;
        }
    }
};
CommonAuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CommonAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], CommonAuthService);



/***/ }),

/***/ "./src/app/user/components/home/home.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user/components/home/home.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n.card{\r\n   width: 250px;\r\n  border-radius: 15px;\r\n  text-align: center;\r\n}\r\n.first {\r\n  display: block;\r\n  position: relative;\r\n  max-width: 100%;\r\n}\r\n.user-details{\r\nfont-size: 1em;\r\n\r\n}\r\n.sidebar{\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top:12%;\r\n  right: 0;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  padding-top: 60px;\r\n}\r\n.openbtn{\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  background-color: #111;\r\n  color: #fff;\r\n  padding: 10px 15px;\r\n  border: none;\r\n}\r\n.sidebar .closebtn {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n}\r\n.closebtn i:hover {\r\n  color: crimson;\r\n  cursor: pointer;\r\n}\r\n.openbtn {\r\n  font-size: 1em;\r\n  cursor: pointer;\r\n  background-color: lightseagreen;\r\n  color: white;\r\n  font-weight: bold;\r\n  border: none;\r\n  box-shadow: none;\r\n  height: 35px;\r\n  text-align: center;\r\n}\r\n.openbtn:hover {\r\n  opacity: 0.8;\r\n}\r\n.user-img i\r\n{\r\n  width: 70px;\r\n  height: 70px;  \r\n  border-radius: 35px;\r\n  background-color: #32393f;\r\n  \r\n}\r\n.user-details{\r\n  font-size: 0.9em;\r\n  color: black;\r\n  text-transform: capitalize;\r\n\r\n}\r\n.user-details .user-name{\r\n  color: #188cf1;\r\n  font-size: 1em;\r\n  font-weight: 200;\r\n  font-weight: bold;\r\n}\r\n/* pagination styles */\r\n.pagination {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.pagination a {\r\n  cursor: pointer;\r\n  color: #1667af;\r\n  float: left;\r\n  padding: 8px 16px;\r\n  text-decoration: none;\r\n  transition: background-color 0.3s;\r\n  border: 1px solid #a7a7a7;\r\n  margin: 0 4px;\r\n}\r\n.pagination a.active {\r\n  background-color: #4caf50;\r\n  color: white;\r\n  border: 1px solid #4caf50;\r\n}\r\n.pagination a:hover:not(.active) {\r\n  background-color: #ddd;\r\n}\r\n.pagination li {\r\n  cursor: pointer;\r\n  color: #1667af;\r\n  border-radius: 50%;\r\n  float: left;\r\n  padding: 8px 16px;\r\n  text-decoration: none;\r\n  transition: background-color 0.3s;\r\n  border: 1px solid #a7a7a7;\r\n  margin: 0 4px;\r\n}\r\n.pagination li.active {\r\n  background-color: #4caf50;\r\n  color: white;\r\n  border-radius: 50%;\r\n  border: 1px solid #4caf50;\r\n}\r\n.pagination li:hover:not(.active) {\r\n  background-color: #ddd;\r\n}\r\n.isDisable {\r\n  cursor: default;\r\n  pointer-events: none;\r\n  opacity: 0.5;\r\n}\r\n.panel{\r\n  font-family: 'Roboto', sans-serif;\r\n  padding: 0;\r\n  border: none;\r\n  width: 450px;\r\n  margin-left: 25px;\r\n  box-shadow: 0 .3rem .8rem rgba(0, 0, 0, .12);\r\n  background: #fff;\r\n}\r\n.panel .panel-heading{\r\n  /* background: #fff; */\r\n  padding: 25px 25px 10px;\r\n  border-radius: 0;\r\n \r\n}\r\n.panel .panel-heading .title{\r\n  color: lightseagreen;\r\n  font-size: 1.4em;\r\n  font-weight: bold;\r\n  line-height: 30px;\r\n  text-transform: capitalize;\r\n  margin-left: 0px;\r\n  text-align: center;\r\n}\r\n.panel .panel-body{\r\n  border-radius: 0;\r\n /* margin: 15px 20px 15px 0px; */\r\n\r\n }\r\n.beautician-details .user-image{\r\n\r\n  text-align: center;\r\n  margin-bottom: 15px;\r\n \r\n }\r\ntable tr th{\r\n   border-left: 2px solid lightseagreen;\r\n   font-size: 0.9em;\r\n }\r\ntable tr td \r\n {\r\n  font-size: 0.8em;\r\n\r\n }\r\nspan{\r\n   text-align: left;\r\n   font-weight: 2em;\r\n   font-weight: bolder;\r\n   padding: 10px;\r\n   color: lightseagreen;\r\n }\r\n.table tr th i{\r\n  color: lightseagreen;\r\n  \r\n}\r\n.form-btn1{\r\n  display: flex;\r\n  justify-content: center;\r\n\r\n}\r\n.form-btn1 button{\r\n  width: 80%;\r\n  height: 45px;\r\n  background: lightseagreen;\r\n  color: #fff;\r\n  font-size: 0.9em;\r\n  font-weight: bold;\r\n  border:0px;\r\n  outline: none;\r\n  box-shadow: none;\r\n  margin-bottom: 13px;\r\n \r\n}\r\n.form-btn1 button:hover{\r\n  opacity: 0.8;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7R0FDRyxZQUFZO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7QUFDQSxjQUFjOztBQUVkO0FBRUE7RUFDRSxZQUFZO0VBQ1osUUFBUTtFQUNSLGVBQWU7RUFDZixVQUFVO0VBQ1YsT0FBTztFQUNQLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBSUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCOztBQUUzQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwwQkFBMEI7O0FBRTVCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDtBQUdBO0VBQ0UsaUNBQWlDO0VBQ2pDLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiw0Q0FBNEM7RUFDNUMsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjs7QUFFbEI7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZ0JBQWdCO0NBQ2pCLGdDQUFnQzs7Q0FFaEM7QUFFQTs7RUFFQyxrQkFBa0I7RUFDbEIsbUJBQW1COztDQUVwQjtBQUVBO0dBQ0Usb0NBQW9DO0dBQ3BDLGdCQUFnQjtDQUNsQjtBQUNBOztFQUVDLGdCQUFnQjs7Q0FFakI7QUFDQTtHQUNFLGdCQUFnQjtHQUNoQixnQkFBZ0I7R0FDaEIsbUJBQW1CO0dBQ25CLGFBQWE7R0FDYixvQkFBb0I7Q0FDdEI7QUFFRDtFQUNFLG9CQUFvQjs7QUFFdEI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7O0FBRXpCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7O0FBRXJCO0FBRUE7RUFDRSxZQUFZOztBQUVkIiwiZmlsZSI6InNyYy9hcHAvdXNlci9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uY2FyZHtcclxuICAgd2lkdGg6IDI1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5maXJzdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnVzZXItZGV0YWlsc3tcclxuZm9udC1zaXplOiAxZW07XHJcblxyXG59XHJcblxyXG4uc2lkZWJhcntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOjEyJTtcclxuICByaWdodDogMDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBwYWRkaW5nLXRvcDogNjBweDtcclxufVxyXG5cclxuLm9wZW5idG57XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4uc2lkZWJhciAuY2xvc2VidG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcbi5jbG9zZWJ0biBpOmhvdmVyIHtcclxuICBjb2xvcjogY3JpbXNvbjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm9wZW5idG4ge1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ub3BlbmJ0bjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG5cclxuXHJcbi51c2VyLWltZyBpXHJcbntcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDcwcHg7ICBcclxuICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjM5M2Y7XHJcbiAgXHJcbn1cclxuXHJcbi51c2VyLWRldGFpbHN7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG59XHJcbi51c2VyLWRldGFpbHMgLnVzZXItbmFtZXtcclxuICBjb2xvcjogIzE4OGNmMTtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKiBwYWdpbmF0aW9uIHN0eWxlcyAqL1xyXG4ucGFnaW5hdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiBhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICMxNjY3YWY7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYTdhN2E3O1xyXG4gIG1hcmdpbjogMCA0cHg7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGEuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNGNhZjUwO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gbGkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzE2NjdhZjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYTdhN2E3O1xyXG4gIG1hcmdpbjogMCA0cHg7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGxpLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0Y2FmNTA7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGxpOmhvdmVyOm5vdCguYWN0aXZlKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuLmlzRGlzYWJsZSB7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuXHJcbi5wYW5lbHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgLjNyZW0gLjhyZW0gcmdiYSgwLCAwLCAwLCAuMTIpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5wYW5lbCAucGFuZWwtaGVhZGluZ3tcclxuICAvKiBiYWNrZ3JvdW5kOiAjZmZmOyAqL1xyXG4gIHBhZGRpbmc6IDI1cHggMjVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiBcclxufVxyXG5cclxuLnBhbmVsIC5wYW5lbC1oZWFkaW5nIC50aXRsZXtcclxuICBjb2xvcjogbGlnaHRzZWFncmVlbjtcclxuICBmb250LXNpemU6IDEuNGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGFuZWwgLnBhbmVsLWJvZHl7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuIC8qIG1hcmdpbjogMTVweCAyMHB4IDE1cHggMHB4OyAqL1xyXG5cclxuIH1cclxuXHJcbiAuYmVhdXRpY2lhbi1kZXRhaWxzIC51c2VyLWltYWdle1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuIFxyXG4gfVxyXG5cclxuIHRhYmxlIHRyIHRoe1xyXG4gICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XHJcbiAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiB9XHJcbiB0YWJsZSB0ciB0ZCBcclxuIHtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG5cclxuIH1cclxuIHNwYW57XHJcbiAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgIGZvbnQtd2VpZ2h0OiAyZW07XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xyXG4gfVxyXG5cclxuLnRhYmxlIHRyIHRoIGl7XHJcbiAgY29sb3I6IGxpZ2h0c2VhZ3JlZW47XHJcbiAgXHJcbn1cclxuLmZvcm0tYnRuMXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxufVxyXG4uZm9ybS1idG4xIGJ1dHRvbntcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogNDVweDtcclxuICBiYWNrZ3JvdW5kOiBsaWdodHNlYWdyZWVuO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyOjBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuIFxyXG59XHJcblxyXG4uZm9ybS1idG4xIGJ1dHRvbjpob3ZlcntcclxuICBvcGFjaXR5OiAwLjg7XHJcblxyXG59Il19 */");

/***/ }),

/***/ "./src/app/user/components/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user/components/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _services_beauty_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/beauty-user.service */ "./src/app/user/services/beauty-user.service.ts");





let HomeComponent = class HomeComponent {
    constructor(beautiuser, toster, _router) {
        this.beautiuser = beautiuser;
        this.toster = toster;
        this._router = _router;
        this.beautician = [];
        this.page = 1;
        this.limit = 6;
        this.rowsOnPage = 10;
        this.count = 0;
        this.total = 0;
        this.currentUser = "";
        this.finalArr = [];
        this.mylist = [];
        this.query = '';
    }
    ngOnInit() {
        this.getAllBeauticians();
        $("#sidebar").hide();
        this.currentUser = sessionStorage.getItem("currentUser");
        this.user_id = sessionStorage.getItem('user_id');
        this.closeNav();
    }
    closeModel() {
        $("#BeauticianModel").hide();
    }
    pageChanged(event) {
        //  console.log(event);
        this.page = event;
        this.getAllBeauticians();
    }
    getAllBeauticians() {
        const userLoad = {
            page: Number(this.page),
            limit: Number(this.limit),
            query: this.query
        };
        //console.log(userLoad);
        this.beautiuser.getAllBeauticians(userLoad).subscribe((data) => {
            console.log(data);
            this.beautician = data.data;
            this.ratings = data["ratings"];
            this.total = data.count;
            this.createPager();
        }, (error) => {
            console.log(error);
        });
    }
    openSideMenu(item) {
        $("#sidebar").show();
        // console.log(item);
        this.beauticianData = item;
        $("#sidebar").toggleClass("active");
    }
    openNav(item) {
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
        this.beauty_id = item.id;
    }
    closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginRight = "0";
        document.getElementById("main").style.width = "100%";
    }
    openModelForm() {
        $('#BeauticianModel').modal('show');
    }
    bookSlot(element, data) {
        const bookingData = {
            user_id: Number(this.user_id),
            BeauticianDetails: this.beauty_id,
            description: this.services,
            date: data.date,
            time: data.time,
        };
        // console.log(bookingData);
        this.beautiuser.slotBooking(bookingData).subscribe((result) => {
            // console.log(result);
            this.toster.successToastr(result["message"]);
            this._router.navigate(["/bookings"]);
            this.closeModel();
            this.closeNav();
        }, (err) => {
            console.log(err);
            this.toster.errorToastr(err["message"]);
            this.closeModel();
            this.closeNav();
        });
    }
    createPager() {
        let pageEnd = Math.round(this.total / this.limit);
        this.mylist = [];
        for (let i = 1; i <= Number(pageEnd); i++) {
            this.mylist.push(i);
        }
        // console.log('Total Pages ', this.mylist);
    }
    getPage(event) {
        console.log("The page:", event);
        this.page = event;
        this.getAllBeauticians();
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_beauty_user_service__WEBPACK_IMPORTED_MODULE_4__["BeautyUserService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/user/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/user/components/mybookings/mybookings.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/user/components/mybookings/mybookings.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\ntable{\r\n    max-height: 500px;\r\n    height: 500px;\r\n\r\n}\r\n\r\n.pagination_section{\r\n    margin-top: 500px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL215Ym9va2luZ3MvbXlib29raW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy9teWJvb2tpbmdzL215Ym9va2luZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG50YWJsZXtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuXHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uX3NlY3Rpb257XHJcbiAgICBtYXJnaW4tdG9wOiA1MDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/components/mybookings/mybookings.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/user/components/mybookings/mybookings.component.ts ***!
  \********************************************************************/
/*! exports provided: MybookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MybookingsComponent", function() { return MybookingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _services_beauty_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/beauty-user.service */ "./src/app/user/services/beauty-user.service.ts");




let MybookingsComponent = class MybookingsComponent {
    constructor(myBooking, toster) {
        this.myBooking = myBooking;
        this.toster = toster;
        this.limit = 10;
        this.page = 1;
        this.rowsOnPage = 10;
        this.count = 0;
    }
    ngOnInit() {
        this.getmyBookings();
    }
    getmyBookings() {
        this.clientDetails = {
            user_id: sessionStorage.getItem("user_id"),
            page: Number(this.page),
            limit: Number(this.limit)
        };
        this.myBooking.getBookingsByUser(this.clientDetails).subscribe((result) => {
            console.log(result);
            this.myBookings = result.data;
            this.count = result.count;
        }, (error) => {
            console.log(error);
        });
    }
    searchData(value) {
        console.log(value);
    }
    openModel(id, data) {
        $('#makeChangesModel').modal();
        console.log(id, data);
        this.id = data.booking_id;
        this.date = data.date;
        this.time = data.time;
        this.lawfirmName = data.lawfirmName;
    }
    pageChanged(event) {
        console.log(event);
        this.page = event;
        this.getmyBookings();
    }
    makeChagesOnBookings(data) {
        console.log(data);
        this.myBooking.changeBookingData(data).subscribe((result) => {
            console.log(result);
            this.toster.successToastr(result['message']);
            this.resetAll();
            this.closeModel();
            this.getmyBookings();
        }, (Err) => {
            // console.log(Err);
            this.toster.successToastr(Err['message']);
            this.resetAll();
            this.getmyBookings();
            this.closeModel();
        });
    }
    closeModel() {
        $(document).ready(function () {
            $('#makeChangesModel').modal('hide');
        });
    }
    resetAll() {
        this.date = '';
        this.time = '';
        this.lawfirmName = '';
        this.id = '';
    }
    cancelBooking(data) {
        let d_id = { id: data };
        console.log(d_id);
        let con = confirm('Are you Sure want to Cancel Applintment ? ');
        if (con) {
            this.myBooking.cancelBooking(d_id).subscribe((result) => {
                this.toster.successToastr(result['message']);
                //console.log(result);
                this.getmyBookings();
            }, (err) => {
                // console.log(err);
                this.toster.successToastr(err['message']);
                this.getmyBookings();
            });
        }
    }
};
MybookingsComponent.ctorParameters = () => [
    { type: _services_beauty_user_service__WEBPACK_IMPORTED_MODULE_3__["BeautyUserService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"] }
];
MybookingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-mybookings",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mybookings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/mybookings/mybookings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mybookings.component.css */ "./src/app/user/components/mybookings/mybookings.component.css")).default]
    })
], MybookingsComponent);



/***/ }),

/***/ "./src/app/user/components/profile/profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/user/components/profile/profile.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nh3 p{\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5oMyBwe1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/user/components/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user/components/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common-auth.service */ "./src/app/user/common-auth.service.ts");



let ProfileComponent = class ProfileComponent {
    constructor(userservice) {
        this.userservice = userservice;
        this.myProfile = [];
    }
    ngOnInit() {
        this.myProfile = this.userservice.getuserDetails();
        console.log(this.myProfile);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _common_auth_service__WEBPACK_IMPORTED_MODULE_2__["CommonAuthService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/user/components/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/user/components/reports/reports.component.css":
/*!***************************************************************!*\
  !*** ./src/app/user/components/reports/reports.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background: #fafafa;\r\n}\r\n.wrapper {\r\n    display: flex;\r\n    width: 100%;\r\n    align-items: stretch;\r\n    overflow: hidden;\r\n}\r\n#sidebar {\r\n    min-width: 450px;\r\n    max-width: 450px;\r\n    margin-top: 25px;\r\n    background: rgb(162, 213, 233);\r\n    color: black;\r\n    transition: all 0.3s;\r\n    border-radius: 10%;\r\n    padding: 15px;\r\n    margin: 15px;\r\n  /* display: none; */\r\n}\r\n#sidebar.active {\r\n    margin-right: -450px;\r\n   /* display: block; */\r\n   border-radius: 15%;\r\n\r\n}\r\n#sidebar .sidebar-header {\r\n    padding: 20px;\r\n    background: rgb(162, 213, 233);\r\n}\r\n.side_content span{\r\n    justify-content: right;\r\n    \r\n    margin-left: 250px;\r\n}\r\n.bill_content{\r\n    text-align: center;\r\n    padding: 20px;\r\n    margin-top: 35px;\r\n}\r\n.sign{\r\n    justify-content: right;\r\n    text-align: right;\r\n   \r\n}\r\n.sign p {\r\n    text-align: right;\r\n}\r\n.sign span {\r\n    font-size: 0.8em;\r\n}\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n#content {\r\n    width: 100%;\r\n    padding: 20px;\r\n    min-height: 100vh;\r\n    transition: all 0.3s;\r\n    overflow-x: hidden;\r\n}\r\n/* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- */\r\n@media (max-width: 768px) {\r\n    #sidebar {\r\n        margin-right: -450px;\r\n    }\r\n    #sidebar.active {\r\n        margin-right: 0;\r\n    }\r\n    #sidebarCollapse span {\r\n        display: none;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw2RUFBNkU7QUFDN0U7SUFDSSxrQ0FBa0M7SUFDbEMsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtFQUNkLG1CQUFtQjtBQUNyQjtBQUVBO0lBQ0ksb0JBQW9CO0dBQ3JCLG9CQUFvQjtHQUNwQixrQkFBa0I7O0FBRXJCO0FBSUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSxzQkFBc0I7O0lBRXRCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQU1BOzt1REFFdUQ7QUFFdkQ7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCO0FBRUE7O3VEQUV1RDtBQUV2RDtJQUNJO1FBQ0ksb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC91c2VyL2NvbXBvbmVudHMvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQGltcG9ydCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjMwMCw0MDAsNTAwLDYwMCw3MDBcIjtcclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4jc2lkZWJhciB7XHJcbiAgICBtaW4td2lkdGg6IDQ1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTYyLCAyMTMsIDIzMyk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cclxufVxyXG5cclxuI3NpZGViYXIuYWN0aXZlIHtcclxuICAgIG1hcmdpbi1yaWdodDogLTQ1MHB4O1xyXG4gICAvKiBkaXNwbGF5OiBibG9jazsgKi9cclxuICAgYm9yZGVyLXJhZGl1czogMTUlO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxNjIsIDIxMywgMjMzKTtcclxufVxyXG5cclxuLnNpZGVfY29udGVudCBzcGFue1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xyXG59XHJcblxyXG4uYmlsbF9jb250ZW50e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbn1cclxuXHJcbi5zaWdue1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICBcclxufVxyXG4uc2lnbiBwIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5zaWduIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgQ09OVEVOVCBTVFlMRVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuI2NvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBNRURJQVFVRVJJRVNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgI3NpZGViYXIge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLTQ1MHB4O1xyXG4gICAgfVxyXG4gICAgI3NpZGViYXIuYWN0aXZlIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAjc2lkZWJhckNvbGxhcHNlIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/user/components/reports/reports.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user/components/reports/reports.component.ts ***!
  \**************************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_beauty_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/beauty-user.service */ "./src/app/user/services/beauty-user.service.ts");



let ReportsComponent = class ReportsComponent {
    constructor(_beautyService) {
        this._beautyService = _beautyService;
        this.report = [];
        this.limit = 5;
        this.page = 1;
    }
    ngOnInit() {
        this.getReports();
        $('#sidebar').hide();
        // $('#sidevar').removeClass('inactive');
    }
    getReports() {
        let payload = {
            page: this.page,
            limit: this.limit,
            user_id: sessionStorage.getItem('user_id')
        };
        this._beautyService.getReportsByUser(payload).subscribe((result => {
            console.log(result);
            this.report = result['data'];
        }), (error) => {
            console.log(error);
        });
    }
    open(data) {
        // $('#sidebarCollapse').on('click', function () {
        $('#sidebar').show();
        $('#sidebar').toggleClass('active');
        console.log(data);
        this.reports = data;
        // });
    }
};
ReportsComponent.ctorParameters = () => [
    { type: _services_beauty_user_service__WEBPACK_IMPORTED_MODULE_2__["BeautyUserService"] }
];
ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/reports/reports.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reports.component.css */ "./src/app/user/components/reports/reports.component.css")).default]
    })
], ReportsComponent);



/***/ }),

/***/ "./src/app/user/services/beauty-user.service.ts":
/*!******************************************************!*\
  !*** ./src/app/user/services/beauty-user.service.ts ***!
  \******************************************************/
/*! exports provided: BeautyUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeautyUserService", function() { return BeautyUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let BeautyUserService = class BeautyUserService {
    constructor(_http) {
        this._http = _http;
        this.url = `https://beauticiansystem-demo.herokuapp.com/api/`;
    }
    getAllBeauticians(data) {
        return this._http.post(this.url + `${'beautician/beauticians'}`, data);
    }
    slotBooking(data) {
        return this._http.post(this.url + `${'booking/add'}`, data);
    }
    getBookingsByUser(data) {
        return this._http.post(this.url + `${'booking/getByUser'}`, data);
    }
    cancelBooking(data) {
        // console.log(data);
        return this._http.delete(this.url + `${'booking/remove/'}${data}`);
    }
    changeBookingData(data) {
        return this._http.patch(this.url + `${'booking/update'}`, data);
    }
    getReportsByUser(data) {
        return this._http.post(this.url + `${'report/reportByUser'}`, data);
    }
};
BeautyUserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BeautyUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], BeautyUserService);



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.guard */ "./src/app/user/auth.guard.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/user/components/home/home.component.ts");
/* harmony import */ var _components_mybookings_mybookings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mybookings/mybookings.component */ "./src/app/user/components/mybookings/mybookings.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/user/components/profile/profile.component.ts");
/* harmony import */ var _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/reports/reports.component */ "./src/app/user/components/reports/reports.component.ts");








const route = [
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'profile',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]
    },
    {
        path: 'reports',
        component: _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_7__["ReportsComponent"]
    },
    {
        path: 'bookings',
        component: _components_mybookings_mybookings_component__WEBPACK_IMPORTED_MODULE_5__["MybookingsComponent"]
    }
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserRoutingModule);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/user/components/profile/profile.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common-auth.service */ "./src/app/user/common-auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.guard */ "./src/app/user/auth.guard.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/user/components/home/home.component.ts");
/* harmony import */ var _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/reports/reports.component */ "./src/app/user/components/reports/reports.component.ts");
/* harmony import */ var _services_beauty_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/beauty-user.service */ "./src/app/user/services/beauty-user.service.ts");
/* harmony import */ var _components_mybookings_mybookings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/mybookings/mybookings.component */ "./src/app/user/components/mybookings/mybookings.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");














let UserModule = class UserModule {
    constructor() {
        console.log('user Module loaded');
    }
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_10__["ReportsComponent"], _components_mybookings_mybookings_component__WEBPACK_IMPORTED_MODULE_12__["MybookingsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["NgxPaginationModule"]
        ],
        providers: [_common_auth_service__WEBPACK_IMPORTED_MODULE_6__["CommonAuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _services_beauty_user_service__WEBPACK_IMPORTED_MODULE_11__["BeautyUserService"]],
        exports: []
    })
], UserModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: true,
    firebase: {
        apiKey: 'AIzaSyAzhGz0y8FVShggGUspzbHIpOByow0bEIs',
        authDomain: 'ecart-77ae5.firebaseapp.com',
        projectId: 'ecart-77ae5',
        storageBucket: 'ecart-77ae5.appspot.com',
        messagingSenderId: '261938981091',
        appId: '1:261938981091:web:2fc5ff99f443f420f23dd6',
        measurementId: 'G-FZNNHQYPT4'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular Applications\Beautision\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map