(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+nG1":
/*!****************************************************************************!*\
  !*** ./src/app/scheduling/book-appointment/book-appointment.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxpbmcvYm9vay1hcHBvaW50bWVudC9ib29rLWFwcG9pbnRtZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "/T8i":
/*!******************************************************************************!*\
  !*** ./src/app/scheduling/view-appointments/view-appointments.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxpbmcvdmlldy1hcHBvaW50bWVudHMvdmlldy1hcHBvaW50bWVudHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Masud\IMPACT\PMSFINAL\Spa\PmsNew\src\main.ts */"zUnb");


/***/ }),

/***/ "1cn+":
/*!****************************************!*\
  !*** ./src/app/Models/patientvisit.ts ***!
  \****************************************/
/*! exports provided: PatientVisit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientVisit", function() { return PatientVisit; });
var PatientVisit = /** @class */ (function () {
    function PatientVisit(patientid, appointmentid, height, weight, bloodpressuresystolic, bloodpressurediastolic, bodytemperature, respirationrate) {
        if (patientid === void 0) { patientid = 0; }
        if (appointmentid === void 0) { appointmentid = 0; }
        if (height === void 0) { height = 0; }
        if (weight === void 0) { weight = 0; }
        if (bloodpressuresystolic === void 0) { bloodpressuresystolic = 0; }
        if (bloodpressurediastolic === void 0) { bloodpressurediastolic = 0; }
        if (bodytemperature === void 0) { bodytemperature = 0; }
        if (respirationrate === void 0) { respirationrate = 0; }
        this.patientid = patientid;
        this.appointmentid = appointmentid;
        this.height = height;
        this.weight = weight;
        this.bloodpressuresystolic = bloodpressuresystolic;
        this.bloodpressurediastolic = bloodpressurediastolic;
        this.bodytemperature = bodytemperature;
        this.respirationrate = respirationrate;
    }
    return PatientVisit;
}());



/***/ }),

/***/ "2DHQ":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "2TU3":
/*!***********************************************************!*\
  !*** ./src/app/auth-callback/auth-callback.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgtY2FsbGJhY2svYXV0aC1jYWxsYmFjay5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "3qug":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/patient-register/patient-register.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \r\n<div  *ngIf=\"!success\" class=\"signup-form\">\r\n    <form  class=\"form-group\" [formGroup]=\"fg\" (ngSubmit)=\"SavePatientData()\">\r\n    <h2>Patient Registration</h2>\r\n    <div class=\"form-group\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\"><label for=\"firstname\">First Name:<span class=\"asterisk\"> *</span> </label>\r\n                <input type=\"text\" id=\"firstname\" name=\"firstname\" formControlName=\"firstname\" class=\"form-control\" placeholder=\"Your First Name\" required autofocus>\r\n                <span class=\"asterisk\" *ngIf=\"fg.get('firstname').touched && fg.get('firstname').errors?.required\">\r\n                    First name is required!\r\n                </span>\r\n            </div>\r\n            \r\n            <div class=\"col-sm-6\"><label for=\"lastname sr-only\">Last Name:<span class=\"asterisk\"> *</span> </label>\r\n                <input type=\"text\" class=\"form-control\" name=\"lastname\" formControlName=\"lastname\" placeholder=\"Your Last Name\" required>\r\n                <span class=\"asterisk\" *ngIf=\"fg.get('lastname').touched && fg.get('lastname').errors?.required\">\r\n                    Last name is required!\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n     \r\n    <div class=\"form-group\">\r\n        <br/>\r\n        <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n        <label for=\"title\" class=\"sr-only\">Title<span class=\"asterisk\"> *</span></label>\r\n        <select id=\"title\" name=\"title\" class=\"form-control\" placeholder=\"Select role\" required formControlName=\"title\">\r\n          <option disabled selected value=\"\">Select Title</option>\r\n          <option *ngFor=\"let title of titles\" value={{title[0]}}>{{title[1]}}</option>\r\n        </select>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <label for=\"gender\" class=\"sr-only\">Gender<span class=\"asterisk\"> *</span></label>\r\n            <select id=\"gender\" name=\"gender\" class=\"form-control\" placeholder=\"Select gender\" required formControlName=\"gender\">\r\n              <option disabled selected value=\"\">Select Gender</option>\r\n              <option *ngFor=\"let gender of genders\" value={{gender[0]}}>{{gender[1]}}</option>\r\n            </select>\r\n        </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"email\">Email:<span class=\"asterisk\"> *</span> </label>\r\n        <input type=\"email\" class=\"form-control\" name=\"email\" formControlName=\"email\" autocomplete=\"off\" required placeholder=\"Your Email\">\r\n        <span class=\"asterisk\" *ngIf=\"fg.get('email').touched && fg.get('email').errors?.required\">\r\n            Email is required!\r\n        </span>\r\n        <span class=\"asterisk\" *ngIf=\"fg.get('email').touched && fg.get('email').errors?.email\">\r\n            Email is not valid!\r\n        </span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <label for=\"contact\">Contact No:<span class=\"asterisk\"> *</span> </label>\r\n                <input type=\"text\" class=\"form-control\" name=\"contact\" formControlName=\"contact\" required placeholder=\"Your Contact No.\">\r\n                <span class=\"asterisk\" *ngIf=\"fg.get('contact').touched && fg.get('contact').errors?.required\">\r\n                    Contact is required!\r\n                </span>\r\n                <span class=\"asterisk\" *ngIf=\"fg.get('contact').touched && fg.get('contact').errors?.pattern\">\r\n                    Enter 10 digit number only!\r\n                </span>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <label for=\"dob\">DOB:<span class=\"asterisk\"> *</span> </label>\r\n                <input type=\"date\" [max]=\"getToday()\" class=\"form-control\" name=\"dob\" formControlName=\"dob\" required>\r\n                <span class=\"asterisk\" *ngIf=\"fg.get('dob').touched && fg.get('dob').errors?.required\">\r\n                    DOB is required!\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n            <label for=\"password\">Password:<span class=\"asterisk\"> *</span> </label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"password\" required placeholder=\"Password\">\r\n            <span class=\"asterisk\" *ngIf=\"fg.get('password').touched && fg.get('password').errors?.required\">\r\n            Password is required!\r\n        </span>\r\n            </div>\r\n            <div class=\"col-6\">\r\n            <label for=\"confirmpassword\">Confirm Password:<span class=\"asterisk\"> *</span> </label>\r\n            <input type=\"password\" class=\"form-control\" name=\"confirmpassword\" formControlName=\"confirmpassword\" required placeholder=\"Confirm Password\">\r\n            <span class=\"asterisk\" *ngIf=\"fg.get('confirmpassword').touched && fg.get('confirmpassword').errors?.required\">\r\n            ConfirmPassword is required!\r\n        </span>\r\n        <span class=\"asterisk\" *ngIf=\"fg.get('confirmpassword').touched && fg.get('confirmpassword').errors?.mismatch\">\r\n            ConfirmPassword does not match!\r\n        </span>\r\n            </div>\r\n        </div>\r\n    </div> \r\n    <div class=\"form-group\">\r\n        <button id=\"btnSubmit\" class=\"btn\" [disabled]=\"!fg.valid\">Register Now</button>\r\n        &nbsp;&nbsp;<label> Already have an account?</label>&nbsp;&nbsp;<a href=\"/login\"> Sign in</a>\r\n    </div>           \r\n</form>\r\n</div>\r\n\r\n<div>\r\n  <h1 style=\"color: red;\">{{msg}}</h1>\r\n</div>\r\n\r\n<div *ngIf=\"success\" class=\"alert alert-success\" role=\"alert\">\r\n    <h4 class=\"alert-heading\">Success!</h4>\r\n    <p>Your passsword reset successfully, <a routerLink=\"/userlogin\" href=\"/userlogin\">Please login</a> to continue.</p>        \r\n</div>");

/***/ }),

/***/ "5XS/":
/*!***************************************************************************************!*\
  !*** ./src/app/patient-visit/patient-visit-doctor/patient-visit-doctor.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtdmlzaXQvcGF0aWVudC12aXNpdC1kb2N0b3IvcGF0aWVudC12aXNpdC1kb2N0b3IuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "6bzr":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/view-data/view-data.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <!-- <div class=\"col-md-12\">\r\n                <a class=\"nav-link\" href=\"javascript:void(0)\" style=\"float: right;\" (click)=\"DownloadPatientData()\">\r\n                    <i class=\"material-icons\">download</i>\r\n                </a>\r\n            </div> -->\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-danger\">\r\n                        <h4 class=\"card-title\">Patient Data</h4>\r\n                        <p class=\"card-category\"></p>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <form class=\"form-group\" [formGroup]=\"userForm\" (ngSubmit)=\"SavePatientDemographicData()\">\r\n                            <mat-tab-group>                           \r\n                                <mat-tab label=\"Personal\">\r\n                                    <br>\r\n                                    <fieldset>\r\n                                        <legend>Personal :</legend>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\"><label for=\"firstname\">First Name: </label>\r\n                                            <input type=\"text\" class=\"form-control\" name=\"firstname\" formControlName=\"patientfirstname\" readonly>\r\n                                             <!-- <span class=\"asterisk\" *ngIf=\"fg.get('firstname').touched && fg.get('firstname').errors?.required\">\r\n                                                FirstName is required!\r\n                                            </span> -->\r\n                                        </div>\r\n                                        <div class=\"col-sm-6\"><label for=\"lastname\">Last Name: </label>\r\n                                            <input type=\"text\" class=\"form-control\" name=\"lastname\" formControlName=\"patientlastname\" readonly>\r\n                                            <!-- <span class=\"asterisk\" *ngIf=\"fg.get('lastname').touched && fg.get('lastname').errors?.required\">\r\n                                                LastName is required!\r\n                                            </span> -->\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-12\">\r\n                                    <label for=\"email\">Email: </label>\r\n                                    <input type=\"email\" class=\"form-control\" name=\"email\" formControlName=\"patientemail\" readonly>\r\n                                    <!-- <span class=\"asterisk\" *ngIf=\"fg.get('email').touched && fg.get('email').errors?.required\">\r\n                                        Email is required!\r\n                                    </span>\r\n                                    <span class=\"asterisk\" *ngIf=\"fg.get('email').touched && fg.get('email').errors?.email\">\r\n                                        Email is not valid!\r\n                                    </span> -->\r\n                                    </div>\r\n                                </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <label for=\"contact\">Contact: </label>\r\n                                            <input type=\"text\" class=\"form-control\" name=\"contact\" formControlName=\"patientcontact\" readonly>\r\n                                            <!-- <span class=\"asterisk\" *ngIf=\"fg.get('contact').touched && fg.get('contact').errors?.required\">\r\n                                                Contact is required!\r\n                                            </span>\r\n                                            <span class=\"asterisk\" *ngIf=\"fg.get('contact').touched && fg.get('contact').errors?.pattern\">\r\n                                                Enter 10 digit number only!\r\n                                            </span> -->\r\n                                        </div>\r\n                                        <div class=\"col-sm-6\">\r\n                                            <label for=\"dob\">DOB: </label>\r\n                                            <input type=\"text\" class=\"form-control\" name=\"dob\" formControlName=\"patientdob\" readonly>\r\n                                            <!-- <span class=\"asterisk\" *ngIf=\"fg.get('dob').touched && fg.get('dob').errors?.required\">\r\n                                                DOB is required!\r\n                                            </span> -->\r\n                                        </div>\r\n                                    </div>\r\n                                </div>                                \r\n                            </fieldset>\r\n                            </mat-tab>\r\n                                <mat-tab label=\"Demographics\">    \r\n                                    <br>                                \r\n                            <fieldset>\r\n                                <legend>Demographics: </legend>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\"><label for=\"race\">Race: </label>\r\n                                            <!-- <input type=\"text\" class=\"form-control\" name=\"race\" placeholder=\"\" formControlName=\"race\"> -->\r\n                                            <mat-form-field appearance=\"fill\">\r\n                                                <mat-label>Race</mat-label>\r\n                                                <mat-select [(value)]=\"selectedRace\" #cmbrace>\r\n                                                  <mat-option>None</mat-option>\r\n                                                  <mat-option *ngFor=\"let Race of Race\" [value]=\"Race\">{{Race}}</mat-option>\r\n                                                </mat-select>\r\n                                              </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"col-sm-6\"><label for=\"ethnicity\">Ethnicity: </label>\r\n                                            <!-- <input type=\"text\" class=\"form-control\" name=\"ethnicity\" placeholder=\"\" formControlName=\"ethnicity\"> -->\r\n                                            <mat-form-field appearance=\"fill\">\r\n                                                <mat-label>Ethnicity</mat-label>\r\n                                                <mat-select [(value)]=\"selectedEthnicity\" #cmbethnicity>\r\n                                                  <mat-option>None</mat-option>\r\n                                                  <mat-option *ngFor=\"let Ethnicity of Ethnicity\" [value]=\"Ethnicity\">{{Ethnicity}}</mat-option>\r\n                                                </mat-select>\r\n                                              </mat-form-field>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <label for=\"languagesknown\">Languages Known: </label><br>\r\n                                            <mat-select-autocomplete #autoComplete class=\"grid-7-11\"\r\n                                            [placeholder]=\"'Select Language'\"\r\n                                            [errorMsg]=\"errorMessage\"\r\n                                            [showErrorMsg]=\"showError\"\r\n                                            [options]=\"options\"\r\n                                            [display]=\"'display'\"\r\n                                            [value]=\"'value'\"\r\n                                            [multiple]='true'\r\n                                            [labelCount]=\"5\"\r\n                                            [selectedOptions]=\"selectedOptions\"\r\n                                            (selectionChange)=\"getSelectedOptions($event)\">\r\n                                          </mat-select-autocomplete>\r\n                                            <!-- <label for=\"languagesknown\">Languages Known: </label><input type=\"text\" class=\"form-control\" name=\"languagesknown\" placeholder=\"\" formControlName=\"languagesKnown\"> -->\r\n                                        </div>\r\n                                        <div class=\"col-sm-6\"><label for=\"address\">Address: </label><textarea class=\"form-control\" name=\"address\" formControlName=\"address\"></textarea></div>\r\n                                    </div>\r\n                                </div>\r\n                                <!-- <div class=\"form-group\">\r\n                                    <label for=\"address\">Address: </label>\r\n                                    <textarea class=\"form-control\" name=\"address\"></textarea>\r\n                                </div> -->\r\n                            </fieldset>\r\n                            </mat-tab>                           \r\n                                <mat-tab label=\"Emergency Contact\"> \r\n                                    <br>\r\n                                    <fieldset>\r\n                                    <legend>Emergency Contact: </legend>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\"><label for=\"firstname\">First Name: </label><input type=\"text\" class=\"form-control\" name=\"firstname\" placeholder=\"\" formControlName=\"nomineeFirstName\"></div>\r\n                                        <div class=\"col-sm-6\"><label for=\"lastname\">Last Name: </label><input type=\"text\" class=\"form-control\" name=\"lastname\" placeholder=\"\" formControlName=\"nomineeLastName\"></div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-12\">\r\n                                    <label for=\"email\">Email: </label>\r\n                                    <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"\" formControlName=\"nomineeEmail\">                                    \r\n                                    <span class=\"asterisk\" *ngIf=\"userForm.get('nomineeEmail').touched && userForm.get('nomineeEmail').errors?.email\">\r\n                                        Email is not valid!\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\"><label for=\"relationship\">Relationship: </label><input type=\"text\" class=\"form-control\" name=\"relationship\" placeholder=\"\" formControlName=\"nomineeRelationship\"></div>\r\n                                        <div class=\"col-sm-6\"><label for=\"contact\">Contact: </label><input type=\"text\" class=\"form-control\" name=\"contact\" placeholder=\"\" formControlName=\"nomineeContact\"></div>\r\n                                        <span class=\"asterisk\" *ngIf=\"userForm.get('nomineeContact').touched && userForm.get('nomineeContact').errors?.pattern\">\r\n                                            Enter 10 digit number only!\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <label for=\"address\">Address: </label><textarea class=\"form-control\" name=\"address\" formControlName=\"nomineeAddress\"></textarea>\r\n                                        </div>\r\n                                        <div class=\"col-sm-6\">\r\n                                            <input type=\"checkbox\" name=\"sameasabove\" formControlName=\"sameasabove\"><span class=\"font-bold\"> Same As Above</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-sm-4\"><input type=\"checkbox\" name=\"sameasabove\" formControlName=\"portalaccess\"> <span class=\"font-bold\"> Do you need access to patient portal?</span> </div>\r\n                                    <!-- <mat-radio-group aria-label=\"Select an option\" (change)=\"onChange($event)\"> \r\n                                        <mat-radio-button value=\"true\">Yes</mat-radio-button> \r\n                                        <mat-radio-button value=\"false\" [checked]=true>No</mat-radio-button>\r\n                                      </mat-radio-group> -->\r\n                                </div>\r\n                            </fieldset>\r\n                            </mat-tab>\r\n                                <mat-tab label=\"Allergies\">\r\n                                    <br>\r\n                                    <fieldset>\r\n                                        <legend>Allergies: </legend>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <!-- <div class=\"col-xl-4\"><label for=\"allergytype\">Type of allergy: </label><input type=\"text\" class=\"form-control\" name=\"allergytype\" placeholder=\"\" [(ngModel)]=\"allergyName\"></div> -->\r\n                                        <div class=\"col-sm-4\"><label for=\"allergytype\">Type of allergy: </label>\r\n                                            <!-- <input type=\"text\" class=\"form-control\" name=\"allergytype\" placeholder=\"\" #allergyInput> -->\r\n                                            <mat-form-field appearance=\"fill\">\r\n                                                <mat-label>Allergy</mat-label>\r\n                                                <mat-select #allergyInput>\r\n                                                  <mat-option>None</mat-option>\r\n                                                  <mat-option *ngFor=\"let allergy of allergyMaster\" [value]=\"allergy.allergyName\">{{allergy.allergyName}}</mat-option>\r\n                                                </mat-select>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"col-sm-4\"><input type=\"checkbox\" name=\"sameasabove\" (change)=\"IsFatalCheckEvent($event)\"> <span class=\"font-bold\"> Is allergy fatal</span> </div>\r\n                                        <div class=\"col-sm-4\"><button type=\"button\" class=\"btn btn-success\" id=\"btnSubmit\" (click)=\"SavePatientAllergy(allergyInput.value)\">Add</button></div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"col-sm-12\">\r\n                                    <table mat-table [dataSource]=\"dataSourceAllergyData\" class=\"mat-elevation-z2\">\r\n                                        <ng-container matColumnDef=\"id\">\r\n                                          <th mat-header-cell *matHeaderCellDef class=\"th-font\"> Sr.No </th>\r\n                                          <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n                                        </ng-container>  \r\n                                        <!-- FullName Column -->\r\n                                        <ng-container matColumnDef=\"allergy\">\r\n                                          <th mat-header-cell *matHeaderCellDef class=\"th-font\"> Allergy </th>\r\n                                          <td mat-cell *matCellDef=\"let element\"> {{element.allergy}} </td>\r\n                                        </ng-container>  \r\n                                        <!-- Date_of_Birth Column -->\r\n                                        <ng-container matColumnDef=\"isfatal\">\r\n                                          <th mat-header-cell *matHeaderCellDef class=\"th-font\"> IsFatal </th>\r\n                                          <td mat-cell *matCellDef=\"let element\"> {{element.isfatal}} </td>\r\n                                        </ng-container> \r\n                                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                                        <tr mat-row  *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                                      </table>\r\n                                      </div>\r\n                                      </div>\r\n                                </div>\r\n                            </fieldset>                       \r\n                        </mat-tab>\r\n                        </mat-tab-group>                        \r\n                        <div class=\"form-group\">\r\n                            <button type=\"submit\" class=\"btn btn-success\" id=\"btnSubmit\">Save</button>\r\n                        </div>     \r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  ");

/***/ }),

/***/ "6zU/":
/*!******************************************!*\
  !*** ./src/app/Models/PatientAllergy.ts ***!
  \******************************************/
/*! exports provided: PatientAllergy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientAllergy", function() { return PatientAllergy; });
var PatientAllergy = /** @class */ (function () {
    function PatientAllergy(id, allergy, isfatal, patientid) {
        if (id === void 0) { id = 0; }
        if (allergy === void 0) { allergy = ""; }
        if (isfatal === void 0) { isfatal = false; }
        if (patientid === void 0) { patientid = 0; }
        this.id = id;
        this.allergy = allergy;
        this.isfatal = isfatal;
        this.patientid = patientid;
    }
    return PatientAllergy;
}());



/***/ }),

/***/ "7KDP":
/*!*******************************************!*\
  !*** ./src/app/Models/patientallergy1.ts ***!
  \*******************************************/
/*! exports provided: PatientAllergy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientAllergy", function() { return PatientAllergy; });
var PatientAllergy = /** @class */ (function () {
    function PatientAllergy(allergyid, fatalAllergy, patientid, allergyName) {
        if (allergyid === void 0) { allergyid = 0; }
        if (fatalAllergy === void 0) { fatalAllergy = false; }
        if (patientid === void 0) { patientid = 0; }
        if (allergyName === void 0) { allergyName = ""; }
        this.allergyid = allergyid;
        this.fatalAllergy = fatalAllergy;
        this.patientid = patientid;
        this.allergyName = allergyName;
    }
    return PatientAllergy;
}());



/***/ }),

/***/ "7Ytv":
/*!**************************************************!*\
  !*** ./src/app/account/account-routes.module.ts ***!
  \**************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "bfzl");
/* harmony import */ var _patient_register_patient_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patient-register/patient-register.component */ "l2bC");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "dvA0");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'patientregister', component: _patient_register_patient_register_component__WEBPACK_IMPORTED_MODULE_3__["PatientRegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }
    //{ path: 'login',loadChildren:()=> import('./account.module').then(m=>m.AccountModule)  }
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "7wfR":
/*!*********************************************!*\
  !*** ./src/app/services/patient.service.ts ***!
  \*********************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/config.service */ "8WNu");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/base.service */ "P8On");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PatientService = /** @class */ (function (_super) {
    __extends(PatientService, _super);
    function PatientService(httpsvc, config) {
        var _this = _super.call(this) || this;
        _this.httpsvc = httpsvc;
        _this.config = config;
        return _this;
    }
    PatientService.prototype.GetPatientAllergyDataByID = function (userName) {
        return this.httpsvc.get(this.config.patientManagementAPI + "/Patient/getallergy?userName=" + userName);
    };
    // public GetPatientDemographicDataByID(PatientID: number):Observable<any>
    // {
    //     return this.httpsvc.get<PatientDemographicData>("http://localhost:3000/DemographicData?patientid="+PatientID);
    // }
    PatientService.prototype.GetPatientDemographicDataByID = function (userName) {
        debugger;
        var headers = { 'Access-Control-Allow-Origin': 'http://localhost:54877',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS' };
        return this.httpsvc.get(this.config.patientManagementAPI + "/Patient/getdemographic?userName=" + userName);
        // return this.httpsvc.get<PatientDemographicData>("https://localhost:44326/api/department");
    };
    PatientService.prototype.GetPatientDataByID = function (userName) {
        return this.httpsvc.get(this.config.patientManagementAPI + "/Patient/getpatient?userName=" + userName);
    };
    PatientService.prototype.GetAllergyMaster = function () {
        return this.httpsvc.get(this.config.patientManagementAPI + "/Patient/getallergydata");
    };
    PatientService.prototype.GetExcelReport = function (aID, pID) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'text/csv'
        });
        return this.httpsvc.get(this.config.patientVisitManagementAPI + "/patientvisit/getexcelreport?appointmentId=" + aID + "&patientId=" + pID, { responseType: 'blob', headers: header });
    };
    PatientService.prototype.SaveAllergyData = function (userName, pal) {
        console.log("service.SaveAllergyData() hits");
        //  const headers={'content-type':'application/json'};
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        if (userName != "") {
            return this.httpsvc.post(this.config.patientManagementAPI + "/Patient/addallergy?userName=" + userName, JSON.stringify(pal), { headers: header }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
    };
    PatientService.prototype.SaveDemographicData = function (userName, pdgd, operation) {
        debugger;
        console.log("service.SaveAllergyData() hits");
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        if (pdgd.patientid >= 0) {
            if (operation === "POST")
                return this.httpsvc.post(this.config.patientManagementAPI + "/Patient/adddemographic?userName=" + userName, JSON.stringify(pdgd), { 'headers': header });
            else
                return this.httpsvc.patch(this.config.patientManagementAPI + "/Patient/updatedemographic?userName=" + userName, JSON.stringify(pdgd), { 'headers': header });
        }
    };
    PatientService.prototype.SavePatientVisitData = function (p, operation) {
        console.log("service.SavePatientVisitData() hits");
        console.log(JSON.stringify(p));
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        if (operation === "POST") {
            return this.httpsvc.post(this.config.patientVisitManagementAPI + "/patientvisit/addvitalsigns", JSON.stringify(p), { 'headers': header });
        }
        else {
            return this.httpsvc.post(this.config.patientVisitManagementAPI + "/patientvisit/updatevitalsigns", JSON.stringify(p), { 'headers': header });
        }
    };
    PatientService.prototype.SavePatientVisitAllergyData = function (p) {
        console.log("service.SavePatientVisitNurseData() hits");
        console.log(JSON.stringify(p));
        var headers = { 'content-type': 'application/json' };
        return this.httpsvc.post(this.config.patientVisitManagementAPI + "/patientvisit/addallergy", JSON.stringify(p), { 'headers': headers });
    };
    PatientService.prototype.SavePatientVisitDiagnosisData = function (p) {
        console.log("service.SavePatientVisitNurseData() hits");
        console.log(JSON.stringify(p));
        var headers = { 'content-type': 'application/json' };
        return this.httpsvc.post(this.config.patientVisitManagementAPI + "/patientvisit/adddiagnosis", JSON.stringify(p), { 'headers': headers });
    };
    PatientService.prototype.SavePatientVisitProcedureData = function (p) {
        console.log("service.SavePatientVisitNurseData() hits");
        console.log(JSON.stringify(p));
        var headers = { 'content-type': 'application/json' };
        return this.httpsvc.post(this.config.patientVisitManagementAPI + "/patientvisit/addprocedure", JSON.stringify(p), { 'headers': headers });
    };
    PatientService.prototype.SavePatientVisitMedicationData = function (p) {
        console.log("service.SavePatientVisitNurseData() hits");
        console.log(JSON.stringify(p));
        var headers = { 'content-type': 'application/json' };
        return this.httpsvc.post(this.config.patientVisitManagementAPI + "/patientvisit/addmedication", JSON.stringify(p), { 'headers': headers });
    };
    PatientService.prototype.SavePatientData = function (p) {
        console.log("service.SavePatientData() hits");
        var headers = { 'content-type': 'application/json' };
        return this.httpsvc.post(this.config.authApiURI + "/patient", p).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    PatientService.prototype.GetPatientVisitDataByID = function (aID) {
        return this.httpsvc.get(this.config.patientVisitManagementAPI + "/patientvisit/getvitalsignsdata?appointmentid=" + aID);
    };
    PatientService.prototype.GetPatientAllergyDataByPatientID = function (pID) {
        return this.httpsvc.get(this.config.patientVisitManagementAPI + "/patientvisit/getallergy?patientid=" + pID);
    };
    PatientService.prototype.GetPatientDiagnosisDataByAppointmentID = function (aID) {
        return this.httpsvc.get(this.config.patientVisitManagementAPI + "/patientvisit/getdiagnosis?appointmentid=" + aID);
    };
    PatientService.prototype.GetPatientProcedureDataByAppointmentID = function (aID) {
        return this.httpsvc.get(this.config.patientVisitManagementAPI + "/patientvisit/getprocedure?appointmentid=" + aID);
    };
    PatientService.prototype.GetPatientMedicationDataByAppointmentID = function (aID) {
        return this.httpsvc.get(this.config.patientVisitManagementAPI + "/patientvisit/getmedication?appointmentid=" + aID);
    };
    PatientService.prototype.GetDiagnosisMaster = function () {
        return this.httpsvc.get(this.config.patientVisitManagementAPI + "/patientvisit/getdiagnosismasterdata");
    };
    PatientService.prototype.GetProcedureMaster = function () {
        return this.httpsvc.get(this.config.patientVisitManagementAPI + "/patientvisit/getproceduremasterdata");
    };
    PatientService.prototype.GetAllergyMasterVisit = function () {
        return this.httpsvc.get(this.config.patientVisitManagementAPI + "/patientvisit/getallergymasterdata");
    };
    PatientService.prototype.GetMedicineMaster = function () {
        return this.httpsvc.get(this.config.patientVisitManagementAPI + "/patientvisit/getmedicinemasterdata");
    };
    PatientService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _core_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    PatientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _core_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], PatientService);
    return PatientService;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "8PDw":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService, getClientSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientSettings", function() { return getClientSettings; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! oidc-client */ "3Rfw");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.service */ "P8On");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config.service */ "8WNu");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ "EjJx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};








var AuthService = /** @class */ (function (_super) {
    __extends(AuthService, _super);
    function AuthService(http, configService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        // Observable navItem source
        _this._authNavStatusSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        // Observable navItem stream
        _this.authNavStatus$ = _this._authNavStatusSource.asObservable();
        _this.manager = new oidc_client__WEBPACK_IMPORTED_MODULE_3__["UserManager"](getClientSettings());
        _this.manager.getUser().then(function (user) {
            _this.user = user;
            _this._authNavStatusSource.next(_this.isAuthenticated());
        });
        return _this;
    }
    AuthService.prototype.login = function () {
        return this.manager.signinRedirect();
    };
    AuthService.prototype.completeAuthentication = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.manager.signinRedirectCallback()];
                    case 1:
                        _a.user = _b.sent();
                        this._authNavStatusSource.next(this.isAuthenticated());
                        this.username = this.name;
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.register = function (userRegistration) {
        console.log(userRegistration);
        return this.http.post(this.configService.authApiURI + '/account', userRegistration).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AuthService.prototype.changePassword = function (userModel, token) {
        console.log(userModel);
        return this.http.post(this.configService.authApiURI + '/modify', userModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AuthService.prototype.getUserRole = function (name) {
        return this.http.post(this.configService.authApiURI + '/information', { username: name }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.user != null && !this.user.expired;
    };
    Object.defineProperty(AuthService.prototype, "userId", {
        get: function () {
            if (this.isAuthenticated()) {
                var payload = void 0;
                payload = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_7__["default"])(this.authorizationHeaderValue);
                return payload.sub;
            }
            return "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "authorizationHeaderValue", {
        get: function () {
            return this.user.token_type + " " + this.user.access_token;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "name", {
        get: function () {
            return this.user != null ? this.user.profile.name : '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "email", {
        get: function () {
            return this.user != null ? this.user.profile.email : '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "role", {
        get: function () {
            return this.user != null ? this.userrole : '';
        },
        enumerable: false,
        configurable: true
    });
    AuthService.prototype.signout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.manager.signoutRedirect()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.signoutSilent = function () {
        this.user = null;
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]])
    ], AuthService);
    return AuthService;
}(_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]));

function getClientSettings() {
    return {
        authority: 'http://impactgrp2.eastus.cloudapp.azure.com:52778',
        client_id: 'angular_spa',
        redirect_uri: 'http://impactgrp2.eastus.cloudapp.azure.com:4200/auth-callback',
        post_logout_redirect_uri: 'http://impactgrp2.eastus.cloudapp.azure.com:4200/',
        response_type: "id_token token",
        scope: "openid profile email api.read",
        filterProtocolClaims: true,
        loadUserInfo: true,
        automaticSilentRenew: true,
        silent_redirect_uri: 'http://impactgrp2.eastus.cloudapp.azure.com:4200/silent-refresh.html'
    };
}


/***/ }),

/***/ "8WNu":
/*!****************************************!*\
  !*** ./src/app/core/config.service.ts ***!
  \****************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigService = /** @class */ (function () {
    function ConfigService() {
    }
    Object.defineProperty(ConfigService.prototype, "authApiURI", {
        get: function () {
            return 'http://impactgrp2.eastus.cloudapp.azure.com:52778/api';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "resourceApiURI", {
        get: function () {
            return 'http://impactgrp2.eastus.cloudapp.azure.com:61006/api';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "tempResourseAPI", {
        get: function () {
            return 'http://impactgrp2.eastus.cloudapp.azure.com:3000';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "adminApiUri", {
        get: function () {
            return 'http://impactgrp2.eastus.cloudapp.azure.com:55921';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "patientManagementAPI", {
        get: function () {
            return 'http://impactgrp2.eastus.cloudapp.azure.com:54877/api';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "scheduleManagementAPI", {
        get: function () {
            return 'http://impactgrp2.eastus.cloudapp.azure.com:56207/api';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "patientVisitManagementAPI", {
        get: function () {
            return 'http://impactgrp2.eastus.cloudapp.azure.com:61307/api';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "inboxManagementAPI", {
        get: function () {
            return 'http://impactgrp2.eastus.cloudapp.azure.com:55264/api';
        },
        enumerable: false,
        configurable: true
    });
    ConfigService.ctorParameters = function () { return []; };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "94X0":
/*!************************************************!*\
  !*** ./src/app/core/dropdownmaster.service.ts ***!
  \************************************************/
/*! exports provided: Roles, Genders, UserType, Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return Roles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Genders", function() { return Genders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return UserType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
var Roles;
(function (Roles) {
    Roles["admin"] = "Admin";
    Roles["patient"] = "Patient";
    Roles["doctor"] = "Doctor";
    Roles["nurse"] = "Nurse";
})(Roles || (Roles = {}));
var Genders;
(function (Genders) {
    Genders["M"] = "Male";
    Genders["F"] = "Female";
    Genders["O"] = "Others";
})(Genders || (Genders = {}));
var UserType;
(function (UserType) {
    UserType["D"] = "Doctor";
    UserType["N"] = "Nurse";
})(UserType || (UserType = {}));
var Title;
(function (Title) {
    Title["Mr"] = "Mr.";
    Title["Ms"] = "Ms.";
    Title["Mrs"] = "Mrs.";
    Title["Miss"] = "Miss";
})(Title || (Title = {}));


/***/ }),

/***/ "9e5g":
/*!*************************************************************************************!*\
  !*** ./src/app/patient-visit/patient-visit-nurse/patient-visit-nurse.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtdmlzaXQvcGF0aWVudC12aXNpdC1udXJzZS9wYXRpZW50LXZpc2l0LW51cnNlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "ADSJ":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scheduling/appointment-action/appointment-action.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-danger\">\r\n                        <h4 class=\"card-title\">Appointment Action</h4>\r\n                        <p class=\"card-category\"></p>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <form class=\"form-group\" [formGroup]=\"fg\" (ngSubmit)=\"SaveAppointmentAction()\">                            \r\n                            <div class=\"form-group\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-2\">\r\n                                        <label for=\"appointmentaction\">Action: </label><br />\r\n                                        <label class=\"radio-inline\"><input type=\"radio\" formControlName=\"appointmentaction\" name=\"appointmentaction\" value=\"Approved\" checked>Approve</label>\r\n                                        <br>\r\n                                        <label class=\"radio-inline\"><input type=\"radio\" formControlName=\"appointmentaction\" name=\"appointmentaction\" value=\"Rejected\">Reject</label>\r\n                                    </div>\r\n                                    <div class=\"col-sm-10\">\r\n                                        <label for=\"appointmentreason\">Reason: <span class=\"asterisk\"> *</span></label>\r\n                                        <input type=\"text\" class=\"form-control\" name=\"appointmentreason\" formControlName=\"appointmentreason\">\r\n                                        <!-- <span class=\"asterisk\" *ngIf=\"fg.get('lastname').touched && fg.get('lastname').errors?.required\">\r\n                                            LastName is required!\r\n                                        </span> -->\r\n                                    </div>               \r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">            \r\n                                <button id=\"btnSubmit\" class=\"btn\">Save</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "AK6u":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-1.jpg\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/sidebar-4.jpg)\"></div>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <app-navbar></app-navbar>\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"isMaps('maps')\">\r\n            <app-footer></app-footer>\r\n        </div>\r\n    </div>\r\n    <div class=\"fixed-plugin\">\r\n        <div class=\"dropdown show-dropdown open \">\r\n            <a href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"true\">\r\n                <i class=\"fa fa-cog fa-2x\"> </i>\r\n            </a>\r\n            <ul class=\"dropdown-menu\" x-placement=\"bottom-start\" style=\"position: absolute; top: 41px; left: -231px; will-change: top, left;\">\r\n                <li class=\"header-title\"> Sidebar Filters</li>\r\n                <li class=\"adjustments-line\">\r\n                    <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\r\n                        <div class=\"ml-auto mr-auto\">\r\n                            <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\r\n                            <span class=\"badge filter badge-azure\" data-color=\"azure\"></span>\r\n                            <span class=\"badge filter badge-green\" data-color=\"green\"></span>\r\n                            <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\r\n                            <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                    <div class=\"ripple-container\"></div></a>\r\n                </li>\r\n                <li class=\"header-title\">Images</li>\r\n                <li>\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"./assets/img/sidebar-1.jpg\" alt=\"\">\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"./assets/img/sidebar-2.jpg\" alt=\"\">\r\n                    <div class=\"ripple-container\"></div></a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"./assets/img/sidebar-3.jpg\" alt=\"\">\r\n                    </a>\r\n                </li>\r\n                <li class=\"active\">\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"./assets/img/sidebar-4.jpg\" alt=\"\">\r\n                    </a>\r\n                </li>\r\n                <!-- <li class=\"button-container\">\r\n                    <div>\r\n                        <button class=\"btn btn-info btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\r\n                            Download Free\r\n                        </button>\r\n                    </div>\r\n                </li>\r\n                <li class=\"button-container\">\r\n                    <div>\r\n                        <button class=\"btn btn-warning btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\r\n                            Buy Pro\r\n                        </button>\r\n                    </div>\r\n                </li>\r\n                <li class=\"button-container text-center\" routerLinkActive=\"active\">\r\n                  <div>\r\n                    <a class=\"btn btn-default btn-block\" href=\"https://demos.creative-tim.com/material-dashboard-angular2/#/documentation/tutorial\">\r\n                        View Documentation\r\n                    </a>\r\n                  </div>\r\n                </li> -->\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Buy-Modal-angular -->\r\n<div class=\"modal modal-angular fade\" id=\"buy\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n<div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-body text-center\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n            <h4 class=\"margin-top\">\r\n                Free Version\r\n            </h4>\r\n            <div class=\"separator\"></div>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"wrapper-card\">\r\n                    <div class=\"image-container\">\r\n                        <img src=\"./assets/img/html.png\" alt=\"unloaded\">\r\n                    </div>\r\n                    Html5\r\n                    <div class=\"separator\"></div>\r\n                    <div class=\"product-type\">\r\n                        FREE\r\n                    </div>\r\n                </div>\r\n            </a>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-angular2\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"wrapper-card\">\r\n                    <div class=\"image-container image-angular-cli\">\r\n                        <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\r\n                    </div>\r\n                    Angular\r\n                    <div class=\"separator\"></div>\r\n                    <div class=\"product-type\">\r\n                        FREE\r\n                    </div>\r\n                </div>\r\n            </a>\r\n            <h4>\r\n                PRO Version\r\n            </h4>\r\n            <div class=\"separator\"></div>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"image-container\">\r\n                    <img src=\"./assets/img/html.png\" alt=\"unloaded\">\r\n                </div>\r\n                Html5\r\n                <div class=\"separator\"></div>\r\n                <div class=\"price\">\r\n                    from\r\n                    <span>\r\n                        49\r\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\r\n                    </span>\r\n                </div>\r\n            </a>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"image-container image-angular-cli\">\r\n                    <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\r\n                </div>\r\n                Angular\r\n                <div class=\"separator\"></div>\r\n                <div class=\"price\">\r\n                    from\r\n                    <span>\r\n                        59\r\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\r\n                    </span>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "BWk6":
/*!*********************************************************!*\
  !*** ./src/app/account/register/register.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n  .tbar {\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n\r\n  .mat-toolbar.mat-primary {\r\n  background: #202721; \r\n  color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0VBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnRiYXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQ6ICMyMDI3MjE7IFxyXG4gIGNvbG9yOiAjZmZmO1xyXG59Il19 */");

/***/ }),

/***/ "ByO3":
/*!***************************************!*\
  !*** ./src/app/models/Appointment.ts ***!
  \***************************************/
/*! exports provided: Appointment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Appointment", function() { return Appointment; });
var Appointment = /** @class */ (function () {
    function Appointment(id, drname, patientname, date, fromtime, totime, drid, patientid, isApproved, reason, description, drDisplayId, patientDisplayId, speciality) {
        if (id === void 0) { id = 0; }
        if (drname === void 0) { drname = ""; }
        if (patientname === void 0) { patientname = ""; }
        if (date === void 0) { date = ""; }
        if (fromtime === void 0) { fromtime = ""; }
        if (totime === void 0) { totime = ""; }
        if (drid === void 0) { drid = ""; }
        if (patientid === void 0) { patientid = ""; }
        if (reason === void 0) { reason = ""; }
        if (description === void 0) { description = ""; }
        if (drDisplayId === void 0) { drDisplayId = ""; }
        if (patientDisplayId === void 0) { patientDisplayId = ""; }
        if (speciality === void 0) { speciality = ""; }
        this.id = id;
        this.drname = drname;
        this.patientname = patientname;
        this.date = date;
        this.fromtime = fromtime;
        this.totime = totime;
        this.drid = drid;
        this.patientid = patientid;
        this.isApproved = isApproved;
        this.reason = reason;
        this.description = description;
        this.drDisplayId = drDisplayId;
        this.patientDisplayId = patientDisplayId;
        this.speciality = speciality;
    }
    return Appointment;
}());



/***/ }),

/***/ "DIg/":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "DvRR":
/*!**********************************************************!*\
  !*** ./src/app/shared-modules/shared-material.module.ts ***!
  \**********************************************************/
/*! exports provided: SharedMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedMaterialModule", function() { return SharedMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { FormGroup, FormControl, Validators } from '@angular/forms';


// import {RegisterComponent} from '../../app/admin/register/register.component';




var SharedMaterialModule = /** @class */ (function () {
    function SharedMaterialModule() {
    }
    SharedMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"]
            ],
            exports: [
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"]
            ]
        })
    ], SharedMaterialModule);
    return SharedMaterialModule;
}());



/***/ }),

/***/ "FDEX":
/*!**********************************************************!*\
  !*** ./src/app/CustomValidator/PasswdMatch.validator.ts ***!
  \**********************************************************/
/*! exports provided: MatchPasswd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPasswd", function() { return MatchPasswd; });
function MatchPasswd(newpassword) {
    return function (control) {
        if (!control || !control.parent) {
            return null;
        }
        return control.parent.get(newpassword).value === control.value ? null : { mismatch: true };
    };
}


/***/ }),

/***/ "GQ+f":
/*!***********************************************************!*\
  !*** ./src/app/patient/view-data/view-data.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-table{\r\n    width: 100%;\r\n}\r\n\r\n.font-bold\r\n{\r\n    font-weight :bold;\r\n}\r\n\r\n.th-font\r\n{\r\n    font-size: 15px;\r\n    font-weight :bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC92aWV3LWRhdGEvdmlldy1kYXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGVBQWU7SUFDZixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wYXRpZW50L3ZpZXctZGF0YS92aWV3LWRhdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFibGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvbnQtYm9sZFxyXG57XHJcbiAgICBmb250LXdlaWdodCA6Ym9sZDtcclxufVxyXG5cclxuLnRoLWZvbnRcclxue1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQgOmJvbGQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "GpEA":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "HHbS":
/*!*************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZXBhc3N3b3JkL2NoYW5nZXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "Hipp":
/*!************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.ts ***!
  \************************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var _raw_loader_changepassword_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./changepassword.component.html */ "i+F+");
/* harmony import */ var _changepassword_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changepassword.component.css */ "HHbS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "8PDw");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/user.model */ "Tj/N");
/* harmony import */ var _core_ToasterService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../core/ToasterService */ "e+Xv");
/* harmony import */ var _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../core/ToasterPosition */ "Rz6H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ChangepasswordComponent = /** @class */ (function () {
    function ChangepasswordComponent(authService, toastr, spinner, router) {
        this.authService = authService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.router = router;
        this.userId = this.authService.email;
        this.usermodel = { oldPassword: '', email: this.authService.email, newPassword: '', confirmPassword: '' };
        this.submitted = false;
    }
    ChangepasswordComponent.prototype.ngOnInit = function () {
        this.userId = this.authService.email;
        this.usermodel = new _models_user_model__WEBPACK_IMPORTED_MODULE_6__["UserModel"]('', this.userId, '', '');
        console.log(this.userId);
    };
    ChangepasswordComponent.prototype.onSubmit = function (token) {
        var _this = this;
        this.busy = true;
        this.spinner.show();
        //this.usermodel.email = this.authService.email;
        this.formdata = this.usermodel;
        this.usermodel.email = this.userId;
        console.log(this.usermodel);
        this.authService.changePassword(this.usermodel, this.authService.authorizationHeaderValue)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.spinner.hide();
        }))
            .subscribe(function (result) {
            if (result) {
                _this.busy = false;
                _this.spinner.hide();
                console.log("success");
                _this.success = true;
                _this.toastr.success('Success', 'Password Reset Successfully', _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_8__["ToasterPosition"].topFull);
                _this.authService.signoutSilent();
                //this.router.navigate(['relogin/Password reset successfully']);
            }
        }, function (error) {
            _this.spinner.hide();
            _this.result = error;
            console.log(_this.result);
            _this.toastr.error('Error', _this.result, _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_8__["ToasterPosition"].topFull);
            _this.error = error;
        });
    };
    ChangepasswordComponent.prototype.relogin = function () {
        this.authService.signout();
    };
    ChangepasswordComponent.ctorParameters = function () { return [
        { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _core_ToasterService__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
    ]; };
    ChangepasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-changepassword',
            template: _raw_loader_changepassword_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_changepassword_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _core_ToasterService__WEBPACK_IMPORTED_MODULE_7__["ToasterService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}());



/***/ }),

/***/ "J4J6":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient-visit/patient-visit-nurse/patient-visit-nurse.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-danger\">\r\n                        <h4 class=\"card-title\">Patient Visit Data</h4>\r\n                        <p class=\"card-category\"></p>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <form class=\"form-group\" [formGroup]=\"fg\" (ngSubmit)=\"SavePatientVisitNurse()\">\r\n                            <mat-tab-group dynamicHeight>\r\n                                <!-- <mat-tab label=\"Patient Details\">\r\n                                    <br>   \r\n                                    <fieldset>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"ApptID\">AppointmentID: <span class=\"asterisk\"> *</span></label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"ApptID\" formControlName=\"ApptID\" disabled>                        \r\n                                                </div>\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"PtID\">PatientID: <span class=\"asterisk\"> *</span></label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"PtID\" formControlName=\"PtID\" disabled>                        \r\n                                                </div>\r\n                                            </div>\r\n                                        </div> \r\n                                    </fieldset>\r\n                                </mat-tab> -->\r\n                                <mat-tab label=\"Vital Signs\">\r\n                                    <br>\r\n                                    <fieldset>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"height\">Height (in cms): <span class=\"asterisk\"> *</span></label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"height\" formControlName=\"height\">                        \r\n                                                </div>\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"weight\">Weight (in kgs): <span class=\"asterisk\"> *</span></label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"weight\" formControlName=\"weight\">                        \r\n                                                </div>\r\n                                            </div>            \r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"bloodpressuresystolic\">Blood Pressure Systolic (in mmHg): <span class=\"asterisk\"> *</span></label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"bloodpressuresystolic\" formControlName=\"bloodpressuresystolic\">                        \r\n                                                </div>\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"bloodpressurediastolic\">Blood Pressure Diastolic (in mmHg): <span class=\"asterisk\"> *</span></label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"bloodpressurediastolic\" formControlName=\"bloodpressurediastolic\">                        \r\n                                                </div>\r\n                                            </div>            \r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"temperature\">Body Temperature (in celsius): <span class=\"asterisk\"> *</span></label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"bodytemperature\" formControlName=\"bodytemperature\">                        \r\n                                                </div>\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"respirationrate\">Respiration Rate (in BPM): <span class=\"asterisk\"> *</span></label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"respirationrate\" formControlName=\"respirationrate\">                        \r\n                                                </div>\r\n                                            </div>                        \r\n                                        </div>\r\n                                    </fieldset>\r\n                                </mat-tab>\r\n                                <mat-tab label=\"Allergies\">\r\n                                    <br>\r\n                                    <fieldset>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"Allergytype\">Allergy Type: <span class=\"asterisk\"> *</span></label>\r\n                                                    <select class=\"custom-select\" [(ngModel)]=\"allergytype\" [ngModelOptions]=\"{standalone: true}\" aria-label=\"Default select example\">\r\n                                                        <option selected>Select Allergy Type</option>\r\n                                                        <option *ngFor=\"let allergy of allergyMaster\" [value]=\"allergy.id\">{{allergy.allergyName}}</option>\r\n                                                      </select>\r\n                                                      <!-- <input type=\"text\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"name\" /> -->\r\n                                                </div>                \r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"fatalallergy\">Fatal Allergy? <span class=\"asterisk\"> *</span></label><br>\r\n                                                    <input type=\"checkbox\" id=\"chkFatal\" name=\"chkFatal\" [(ngModel)]=\"chkFatal\" [ngModelOptions]=\"{standalone: true}\" value=\"True\">                    \r\n                                                    <!-- <label class=\"radio-inline\"><input type=\"radio\" [(ngModel)]=\"year\" [ngModelOptions]=\"{standalone: true}\" name=\"optradio\" checked>True</label>\r\n                                                    <label class=\"radio-inline\"><input type=\"radio\" [(ngModel)]=\"year\" [ngModelOptions]=\"{standalone: true}\" name=\"optradio\">False</label>                     -->\r\n                                                    <!-- <input type=\"text\" [(ngModel)]=\"year\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"year\" /> -->\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">            \r\n                                            <button id=\"btnSubmitAllergy\" type=\"button\" (click)=\"AddAllergy()\" class=\"btn\">Add Allergy</button>\r\n                                        </div>\r\n                                        <div class=\"form-group\">            \r\n                                            <table class=\"table table-hover table-striped table-bordered\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>Allergy</th><th>Fatal Allergy?</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let row of AllergyRows\">                  \r\n                                                        <td>{{row.allergytype}}</td>\r\n                                                        <td>{{row.chkFatal}}</td>\r\n                                                      </tr>\r\n                                                </tbody>                                \t\t\t\t\r\n                                            </table>\r\n                                        </div>\r\n\r\n                                    </fieldset>\r\n                                </mat-tab>\r\n                                <mat-tab label=\"Diagnosis\">\r\n                                    <br>\r\n                                    <fieldset>                                                                            \r\n                                        <div class=\"form-group\">            \r\n                                            <table class=\"table table-hover table-striped table-bordered\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>Diagnosis</th><th>Diagnosis Description</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let row of DiagnosisRows\">                  \r\n                                                        <td>{{row.diagnosistype}}</td>\r\n                                                        <td>{{row.diagnosisdescription}}</td>\r\n                                                      </tr>\r\n                                                </tbody>                                \t\t\t\t\r\n                                            </table>          \r\n                                        </div>\r\n                                    </fieldset>\r\n                                </mat-tab>\r\n                                <mat-tab label=\"Procedure\">\r\n                                    <br>\r\n                                    <fieldset>\r\n                                        <div class=\"form-group\">            \r\n                                            <table class=\"table table-hover table-striped table-bordered\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>Procedure</th><th>Procedure Description</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let row of ProcedureRows\">                  \r\n                                                        <td>{{row.proceduretype}}</td>\r\n                                                        <td>{{row.proceduredescription}}</td>\r\n                                                      </tr>\r\n                                                </tbody>                                \t\t\t\t\r\n                                            </table>               \r\n                                        </div>\r\n                                    </fieldset>\r\n                                </mat-tab>\r\n                                <mat-tab label=\"Medication\">\r\n                                    <br>\r\n                                    <fieldset>\r\n                                        <div class=\"form-group\">            \r\n                                            <table class=\"table table-hover table-striped table-bordered\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>Medication</th><th>Medication Description</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let row of MedicationRows\">                  \r\n                                                        <td>{{row.medicationtype}}</td>                        \r\n                                                        <td>{{row.medicationdescription}}</td>\r\n                                                      </tr>                    \r\n                                                </tbody>                                \t\t\t\t\r\n                                            </table>        \r\n                                        </div>\r\n                                    </fieldset>\r\n                                </mat-tab>\r\n                            </mat-tab-group>\r\n                            <div class=\"form-group\">            \r\n                                <button id=\"btnFormSubmit\" type=\"submit\" value=\"Submit\" class=\"btn btn-success\">Submit</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "KJd+":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row justify-content-center\"> \r\n    <div class=\"col-md-4 text-center\">\r\n      <form *ngIf=\"!success\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n        <img class=\"mb-4\" src=\"assets/images/PMSlogo.png\" alt=\"\" width=\"125\" height=\"125\">\r\n        <h1 class=\"h3 mb-3 font-weight-normal\">Register</h1>\r\n        <div class=\"form-group\">\r\n            <label for=\"name\" class=\"sr-only\">Name</label>\r\n            <input type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"userRegistration.name\" class=\"form-control\" placeholder=\"Your name\" required autoFocus>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"email\" class=\"sr-only\">Email address</label>\r\n            <input type=\"email\" id=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"userRegistration.email\" class=\"form-control\" placeholder=\"Email address\" email required>\r\n            <small [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">Please enter a valid email</small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"role\" class=\"sr-only\">Role</label>\r\n          <select id=\"role\" name=\"role\" [(ngModel)]=\"userRegistration.role\"  class=\"form-control\" placeholder=\"Select role\" required>\r\n            <option disabled selected value=\"\">Select Role</option>\r\n            <!-- <option>Choose Role</option> -->\r\n            <option *ngFor=\"let role of keys()\">{{role}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"password\" class=\"sr-only\">Password</label>\r\n            <input type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"userRegistration.password\" class=\"form-control\" placeholder=\"Password\" aria-describedby=\"passwordHelp\" required>     \r\n            <small id=\"passwordHelp\" class=\"form-text text-muted\">Min. 6 characters with at least one non alphanumeric character</small>\r\n        </div>   \r\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.form.valid\">Go</button>\r\n        <ngx-spinner></ngx-spinner>   \r\n        <div *ngIf=\"error\" class=\"alert alert-danger mt-3\" role=\"alert\">\r\n            <strong>Oops!</strong> {{error}}\r\n        </div>     \r\n      </form>      \r\n      <div *ngIf=\"success\" class=\"alert alert-success\" role=\"alert\">\r\n          <h4 class=\"alert-heading\">Well done!</h4>\r\n          <p>Your account was created successfully, <a routerLink=\"/login\">Please login</a> to continue.</p>        \r\n      </div>  \r\n    </div> \r\n  </div>\r\n  \r\n  <ngx-spinner></ngx-spinner>\r\n  ");

/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\r\n    <a href=\"/\" class=\"simple-text\">\r\n        <div class=\"logo-img\">\r\n            <img style=\"margin-top: 3%;\" src=\"/assets/img/PMSlogo.png\"/>\r\n        </div>\r\n        PMS\r\n    </a>\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n  <div *ngIf=\"isMobileMenu()\">\r\n    <form class=\"navbar-form\">\r\n      <span class=\"bmd-form-group\">\r\n        <div class=\"input-group no-border\">\r\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n            <i class=\"material-icons\">search</i>\r\n            <div class=\"ripple-container\"></div>\r\n          </button>\r\n        </div>\r\n      </span>\r\n    </form>\r\n    <ul class=\"nav navbar-nav nav-mobile-menu\">\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                <i class=\"material-icons\">dashboard</i>\r\n                <p>\r\n                    <span class=\"d-lg-none d-md-block\">Stats</span>\r\n                </p>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"material-icons\">notifications</i>\r\n                <span class=\"notification\">5</span>\r\n                <p>\r\n                    <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n                </p>\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\r\n                <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\r\n                <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Another One</a>\r\n            </div>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                <i class=\"material-icons\">person</i>\r\n                <p>\r\n                    <span class=\"d-lg-none d-md-block\">Account</span>\r\n                </p>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n  </div>\r\n    <ul class=\"nav\">\r\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\r\n            <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\r\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\r\n                <p>{{menuItem.title}}</p>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>\r\n");

/***/ }),

/***/ "KWWs":
/*!***************************************************!*\
  !*** ./src/app/services/notifications.service.ts ***!
  \***************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/config.service */ "8WNu");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsService = /** @class */ (function () {
    function NotificationsService(httpsvc, config) {
        this.httpsvc = httpsvc;
        this.config = config;
    }
    NotificationsService.prototype.GetNotificationsByID = function (userName) {
        return this.httpsvc.get(this.config.patientManagementAPI + "/Patient/getnotifications?userName=" + userName);
    };
    NotificationsService.prototype.SetIsSeenNotification = function (id) {
        console.log("service.SetIsSeenNotification() hits");
        // console.log(JSON.stringify(p));
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.httpsvc.patch(this.config.patientManagementAPI + "/Patient/updatenotification?id=" + id, { 'headers': header });
    };
    NotificationsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _core_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
    ]; };
    NotificationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _core_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], NotificationsService);
    return NotificationsService;
}());



/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.css */ "GpEA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "LusL":
/*!*******************************************************************************!*\
  !*** ./src/app/scheduling/appointment-action/appointment-action.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AppointmentActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentActionComponent", function() { return AppointmentActionComponent; });
/* harmony import */ var _raw_loader_appointment_action_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./appointment-action.component.html */ "ADSJ");
/* harmony import */ var _appointment_action_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointment-action.component.css */ "xgrZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _models_Appointment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/Appointment */ "ByO3");
/* harmony import */ var _app_core_ToasterPosition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app/core/ToasterPosition */ "Rz6H");
/* harmony import */ var _core_ToasterService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/ToasterService */ "e+Xv");
/* harmony import */ var _app_services_appointment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app/services/appointment.service */ "Oz3r");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppointmentActionComponent = /** @class */ (function () {
    function AppointmentActionComponent(appointmentsvc, toaster) {
        this.appointmentsvc = appointmentsvc;
        this.toaster = toaster;
        this.isApproved = false;
        this.appointmentdata = [];
        this.fg = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            appointmentaction: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            appointmentreason: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        this.parentFun = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    AppointmentActionComponent.prototype.ngOnInit = function () {
        this.loadAppointmentActionData(this.aId);
    };
    AppointmentActionComponent.prototype.SaveAppointmentAction = function () {
        var _this = this;
        debugger;
        if (this.fg.value.appointmentaction == "Approved")
            this.isApproved = true;
        this.Appointment = new _models_Appointment__WEBPACK_IMPORTED_MODULE_4__["Appointment"](this.aId, this.drname, this.patientname, this.date, this.fromtime, this.totime, this.drid, this.pId.toString(), this.isApproved, this.fg.value.appointmentreason);
        if (this.fg.invalid == false) {
            debugger;
            console.log('Before hitting service');
            this.ob = this.appointmentsvc.SaveAppointmentActionData(this.Appointment);
            this.ob.subscribe(function (data) {
                console.log(data);
                console.log("Output Is: " + data["firstname"]);
                _this.success = true;
                _this.sendMessage();
                _this.toaster.success("Success", data["response"], _app_core_ToasterPosition__WEBPACK_IMPORTED_MODULE_5__["ToasterPosition"].topFull, _this.functioncallbackFunction);
                //this.msg = data["firstname"]+ ", has Registered Successfully" 
            }, function (error) { return console.log("Error in saving practitioner data"); });
        }
    };
    AppointmentActionComponent.prototype.functioncallbackFunction = function () {
        this.success = true;
    };
    AppointmentActionComponent.prototype.loadAppointmentActionData = function (aId) {
        var _this = this;
        console.log('LoadData' + this.aId);
        debugger;
        this.obad = this.appointmentsvc.GetAppointmentActionDataByAppointmentID(this.aId);
        var appointmentaction = "";
        this.obad.subscribe(function (pv) {
            _this.appointmentdata = pv;
            console.log(_this.appointmentdata[0]);
            debugger;
            if (_this.appointmentdata["isApproved"] == true)
                appointmentaction = "Approved";
            else
                appointmentaction = "Rejected";
            _this.fg.patchValue({
                "appointmentreason": _this.appointmentdata["reason"],
                "appointmentaction": appointmentaction,
            });
        }, function (error) { return console.log('fails to load nurse data'); });
    };
    AppointmentActionComponent.prototype.sendMessage = function () {
        //this.messageEvent.emit(this.message);
        this.parentFun.emit();
    };
    AppointmentActionComponent.ctorParameters = function () { return [
        { type: _app_services_appointment_service__WEBPACK_IMPORTED_MODULE_7__["AppointmentService"] },
        { type: _core_ToasterService__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] }
    ]; };
    AppointmentActionComponent.propDecorators = {
        aId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        pId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        drname: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        patientname: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        fromtime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        totime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        drid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        parentFun: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"], args: ["parentFun",] }]
    };
    AppointmentActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-appointment-action',
            template: _raw_loader_appointment_action_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_appointment_action_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_7__["AppointmentService"], _core_ToasterService__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]])
    ], AppointmentActionComponent);
    return AppointmentActionComponent;
}());



/***/ }),

/***/ "MMFx":
/*!************************************************************************!*\
  !*** ./src/app/patient/visithistorydata/visithistorydata.component.ts ***!
  \************************************************************************/
/*! exports provided: VisithistorydataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisithistorydataComponent", function() { return VisithistorydataComponent; });
/* harmony import */ var _raw_loader_visithistorydata_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./visithistorydata.component.html */ "Nt02");
/* harmony import */ var _visithistorydata_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visithistorydata.component.css */ "zMXD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/auth.service */ "8PDw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_appointment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/appointment.service */ "Oz3r");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var app_core_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/core/config.service */ "8WNu");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var DataTablesResponse = /** @class */ (function () {
    function DataTablesResponse() {
    }
    return DataTablesResponse;
}());
var VisithistorydataComponent = /** @class */ (function () {
    function VisithistorydataComponent(authService, router, route, modalService, appointmentsvc, spinner, http, conf) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.appointmentsvc = appointmentsvc;
        this.spinner = spinner;
        this.http = http;
        this.conf = conf;
        this.dataSourceAppointmentData = [];
        this.dtOptions = {};
        this.displayedColumns = [
            'AppointmentId',
            'DoctorID',
            'DoctorName',
            'PatientID',
            'PatientName',
            'Date',
            'StartTime',
            'EndTime',
            'Description',
            'View_Edit_Delete'
        ];
    }
    VisithistorydataComponent.prototype.ngOnInit = function () {
        this.LoadAppointmentsHistory();
        // const that = this;
        // this.dtOptions = {
        //   pagingType: 'full_numbers',
        //   pageLength: 2,
        //   serverSide: true,
        //   processing: true,
        //   ajax: (dataTablesParameters: any, callback) => {
        //     that.http.post<DataTablesResponse>(
        //         this.conf.tempResourseAPI+"/Doctor",
        //         dataTablesParameters, {}
        //       ).subscribe(resp => {
        //         //that.DoctorData = resp.data;
        //         callback({
        //           data: []
        //         });
        //       });
        //   },
        //   columns: [
        //   //   {
        //   //   title: 'Title',
        //   //   data: 'title'
        //   // }, {
        //   //   title: 'First name',
        //   //   data: 'firstname'
        //   // }, {
        //   //   title: 'Last name',
        //   //   data: 'lastname'
        //   // }, {
        //   //   title: 'Action',
        //   //   render: function (data: any, type: any, full: any) {
        //   //     return 'View';
        //   //   },
        //   // }
        // ]
        // };
    };
    VisithistorydataComponent.prototype.LoadAppointmentsHistory = function () {
        var _this = this;
        this.spinner.show();
        this.ob = this.appointmentsvc.GetAppointmentsHistoryForPatient(this.authService.email);
        this.ob.subscribe(function (data) {
            _this.spinner.hide();
            console.log("Output");
            console.log(data);
            _this.datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            _this.datasource.paginator = _this.paginator;
            _this.datasource.sort = _this.sort;
        }, function (error) { return console.log("Error in fetching data"); });
    };
    VisithistorydataComponent.prototype.open = function (content, selectedaId, selectedpId, Drname) {
        debugger;
        this.modalService.open(content, { size: 'xl', centered: true, scrollable: true });
        this.aIdToUpdate = selectedaId;
        this.pIdToUpdate = selectedpId;
        this.drName = Drname;
    };
    VisithistorydataComponent.ctorParameters = function () { return [
        { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] },
        { type: _services_appointment_service__WEBPACK_IMPORTED_MODULE_8__["AppointmentService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"] },
        { type: app_core_config_service__WEBPACK_IMPORTED_MODULE_12__["ConfigService"] }
    ]; };
    VisithistorydataComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSort"],] }]
    };
    VisithistorydataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-visithistorydata',
            template: _raw_loader_visithistorydata_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_visithistorydata_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"],
            _services_appointment_service__WEBPACK_IMPORTED_MODULE_8__["AppointmentService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], app_core_config_service__WEBPACK_IMPORTED_MODULE_12__["ConfigService"]])
    ], VisithistorydataComponent);
    return VisithistorydataComponent;
}());



/***/ }),

/***/ "MTzm":
/*!***********************************!*\
  !*** ./src/app/models/Patient.ts ***!
  \***********************************/
/*! exports provided: Patients */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patients", function() { return Patients; });
var Patients = /** @class */ (function () {
    function Patients(firstname, lastname, dob, contact, email, password, fullName, status, blocked_unblocked, title, gender) {
        if (firstname === void 0) { firstname = ""; }
        if (lastname === void 0) { lastname = ""; }
        if (dob === void 0) { dob = ""; }
        if (contact === void 0) { contact = ""; }
        if (email === void 0) { email = ""; }
        if (password === void 0) { password = ""; }
        if (fullName === void 0) { fullName = ""; }
        if (status === void 0) { status = ""; }
        if (blocked_unblocked === void 0) { blocked_unblocked = ""; }
        if (title === void 0) { title = ""; }
        if (gender === void 0) { gender = ""; }
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = dob;
        this.contact = contact;
        this.email = email;
        this.password = password;
        this.fullName = fullName;
        this.status = status;
        this.blocked_unblocked = blocked_unblocked;
        this.title = title;
        this.gender = gender;
    }
    Object.defineProperty(Patients.prototype, "FirstName", {
        get: function () { return this.firstname; },
        set: function (address) { this.firstname = address; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Patients.prototype, "LastName", {
        get: function () { return this.lastname; },
        set: function (address) { this.lastname = address; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Patients.prototype, "DOB", {
        get: function () { return this.dob; },
        set: function (address) { this.dob = address; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Patients.prototype, "Contact", {
        get: function () { return this.contact; },
        set: function (address) { this.contact = address; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Patients.prototype, "Email", {
        get: function () { return this.email; },
        set: function (address) { this.email = address; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Patients.prototype, "Password", {
        get: function () { return this.password; },
        set: function (supplierName) { this.password = supplierName; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Patients.prototype, "FullName", {
        get: function () { return this.fullName; },
        set: function (supplierName) { this.fullName = supplierName; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Patients.prototype, "Status", {
        get: function () { return this.status; },
        set: function (supplierName) { this.status = supplierName; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Patients.prototype, "Blocked_unblocked", {
        get: function () { return this.blocked_unblocked; },
        set: function (supplierName) { this.blocked_unblocked = supplierName; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Patients.prototype, "Title", {
        get: function () { return this.title; },
        set: function (supplierName) { this.title = supplierName; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Patients.prototype, "Gender", {
        get: function () { return this.gender; },
        set: function (supplierName) { this.gender = supplierName; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    return Patients;
}());



/***/ }),

/***/ "NBk6":
/*!**********************************************************!*\
  !*** ./src/app/auth-callback/auth-callback.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthCallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthCallbackComponent", function() { return AuthCallbackComponent; });
/* harmony import */ var _raw_loader_auth_callback_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./auth-callback.component.html */ "qH2X");
/* harmony import */ var _auth_callback_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-callback.component.css */ "2TU3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/auth.service */ "8PDw");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};





var AuthCallbackComponent = /** @class */ (function () {
    function AuthCallbackComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    AuthCallbackComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // check for error
                        if (this.route.snapshot.fragment.indexOf('error') >= 0) {
                            this.error = true;
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.authService.completeAuthentication()];
                    case 1:
                        _a.sent();
                        this.router.navigate(['/dashboard']);
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthCallbackComponent.ctorParameters = function () { return [
        { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    AuthCallbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-auth-callback',
            template: _raw_loader_auth_callback_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_auth_callback_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AuthCallbackComponent);
    return AuthCallbackComponent;
}());



/***/ }),

/***/ "Nt02":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/visithistorydata/visithistorydata.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"divclass\">\r\n            <div>\r\n                <table mat-table [dataSource]=\"datasource\" class=\"table table-striped table-responsive-md\" matSort>    \r\n                    <ng-container matColumnDef=\"AppointmentId\">                      \r\n                      <th mat-header-cell *matHeaderCellDef class=\"th-font\"> Appt.Id</th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n                    </ng-container>    \r\n                    <ng-container matColumnDef=\"DoctorID\">\r\n                      <th mat-header-cell *matHeaderCellDef class=\"th-font\"> Dr.ID </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.drDisplayId}} </td>\r\n                    </ng-container>  \r\n                    <ng-container matColumnDef=\"DoctorName\">\r\n                      <th mat-header-cell *matHeaderCellDef class=\"th-font\"> Doctor Name </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.drname}} </td>\r\n                    </ng-container>  \r\n                    <ng-container matColumnDef=\"PatientID\">\r\n                      <th mat-header-cell *matHeaderCellDef class=\"th-font\"> PatientID </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.patientDisplayId}} </td>\r\n                    </ng-container> \r\n                    <ng-container matColumnDef=\"PatientName\">\r\n                      <th mat-header-cell *matHeaderCellDef class=\"th-font\"> Patient Name </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.patientname}} </td>\r\n                    </ng-container>  \r\n                    <ng-container matColumnDef=\"Date\">\r\n                      <th mat-header-cell *matHeaderCellDef class=\"th-font\"> Date </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\r\n                    </ng-container> \r\n                    <ng-container matColumnDef=\"StartTime\">\r\n                      <th mat-header-cell *matHeaderCellDef class=\"th-font\"> From </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.fromtime}} </td>\r\n                    </ng-container>      \r\n                    <ng-container matColumnDef=\"EndTime\">\r\n                      <th mat-header-cell *matHeaderCellDef class=\"th-font\"> To </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.totime}} </td>\r\n                    </ng-container>                         \r\n                    <ng-container matColumnDef=\"Description\">\r\n                        <th mat-header-cell *matHeaderCellDef class=\"th-font\"> Description </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                      </ng-container>\r\n                    <ng-container matColumnDef=\"View_Edit_Delete\">\r\n                      <th mat-header-cell *matHeaderCellDef class=\"th-font\"> Actions </th>\r\n                      <td mat-cell *matCellDef=\"let element\">\r\n                          <button class=\"btn btn-outline-primary\" (click)=\"open(content,element.id,element.patientid,element.drname)\">View Details</button> \r\n                      </td>\r\n                    </ng-container>                   \r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                  </table>\r\n            </div>            \r\n            <mat-paginator [length]=\"100\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\" style=\"color: #0047AB; font-size: small;\">\r\n            </mat-paginator>\r\n        </div>\r\n        </div>\r\n</div>\r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n          <div>\r\n      <button type=\"button\" class=\"close btn-close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n        <span aria-hidden=\"true\">&times; &nbsp;</span>\r\n      </button>\r\n    </div>\r\n      <app-show-visit-history [aId]=\"aIdToUpdate\" [pId]=\"pIdToUpdate\" [drName]=\"drName\"></app-show-visit-history>\r\n  </ng-template>");

/***/ }),

/***/ "Oz3r":
/*!*************************************************!*\
  !*** ./src/app/services/appointment.service.ts ***!
  \*************************************************/
/*! exports provided: AppointmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentService", function() { return AppointmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/config.service */ "8WNu");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppointmentService = /** @class */ (function () {
    function AppointmentService(httpsvc, config) {
        this.httpsvc = httpsvc;
        this.config = config;
    }
    AppointmentService.prototype.SaveAppointment = function (a) {
        console.log("service.SaveAppointment() hits");
        var headers = { 'content-type': 'application/json' };
        if (a.drid != "") {
            return this.httpsvc.post(this.config.scheduleManagementAPI + "/Schedule/bookappoinment", JSON.stringify(a), { 'headers': headers });
        }
    };
    AppointmentService.prototype.SaveAppointmentActionData = function (p) {
        console.log("service.SavePatientVisitNurseData() hits");
        console.log(JSON.stringify(p));
        var headers = { 'content-type': 'application/json' };
        return this.httpsvc.post(this.config.scheduleManagementAPI + "/Schedule/updateappointmentaction", JSON.stringify(p), { 'headers': headers });
    };
    AppointmentService.prototype.GetAppointmentActionDataByAppointmentID = function (aID) {
        debugger;
        return this.httpsvc.get(this.config.scheduleManagementAPI + "/Schedule/getappointmentaction?id=" + aID);
    };
    AppointmentService.prototype.GetAppointmentsHistoryForPatient = function (userName) {
        debugger;
        return this.httpsvc.get(this.config.scheduleManagementAPI + "/Schedule/getappointmentshistoryforpatient?userName=" + userName);
    };
    AppointmentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _core_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
    ]; };
    AppointmentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _core_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], AppointmentService);
    return AppointmentService;
}());



/***/ }),

/***/ "P6kD":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "AK6u");
/* harmony import */ var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-layout.component.scss */ "vtrx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! perfect-scrollbar */ "t/UT");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar);
        }
        var window_width = jquery__WEBPACK_IMPORTED_MODULE_7__(window).width();
        var $sidebar = jquery__WEBPACK_IMPORTED_MODULE_7__('.sidebar');
        var $sidebar_responsive = jquery__WEBPACK_IMPORTED_MODULE_7__('body > .navbar-collapse');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        if (window_width > 767) {
            if (jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .dropdown').addClass('open');
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if (jquery__WEBPACK_IMPORTED_MODULE_7__(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .badge').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_7__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).addClass('active');
            var new_color = jquery__WEBPACK_IMPORTED_MODULE_7__(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_7__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).parent('li').siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).parent('li').addClass('active');
            var new_image = jquery__WEBPACK_IMPORTED_MODULE_7__(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-admin-layout',
            template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "P8On":
/*!**************************************!*\
  !*** ./src/app/core/base.service.ts ***!
  \**************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseService = /** @class */ (function () {
    function BaseService() {
    }
    BaseService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        // either application-error in header or model error in body
        if (applicationError) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(applicationError);
        }
        var modelStateErrors = '';
        // for now just concatenate the error descriptions, alternative we could simply pass the entire error response upstream
        for (var key in error.error) {
            if (error.error[key])
                modelStateErrors += error.error[key].description + '\n';
        }
        modelStateErrors = modelStateErrors = '' ? undefined : modelStateErrors;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(modelStateErrors || 'Server error');
    };
    BaseService.ctorParameters = function () { return []; };
    BaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BaseService);
    return BaseService;
}());



/***/ }),

/***/ "Rdzm":
/*!********************************************!*\
  !*** ./src/app/Models/patientprocedure.ts ***!
  \********************************************/
/*! exports provided: PatientProcedure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientProcedure", function() { return PatientProcedure; });
var PatientProcedure = /** @class */ (function () {
    function PatientProcedure(ProcedureId, procedureDescription, patientid, AppointmentId, procedureCode) {
        if (ProcedureId === void 0) { ProcedureId = 0; }
        if (procedureDescription === void 0) { procedureDescription = ""; }
        if (patientid === void 0) { patientid = ""; }
        if (AppointmentId === void 0) { AppointmentId = 0; }
        if (procedureCode === void 0) { procedureCode = ""; }
        this.ProcedureId = ProcedureId;
        this.procedureDescription = procedureDescription;
        this.patientid = patientid;
        this.AppointmentId = AppointmentId;
        this.procedureCode = procedureCode;
    }
    return PatientProcedure;
}());



/***/ }),

/***/ "Rz6H":
/*!*****************************************!*\
  !*** ./src/app/core/ToasterPosition.ts ***!
  \*****************************************/
/*! exports provided: ToasterPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterPosition", function() { return ToasterPosition; });
var ToasterPosition;
(function (ToasterPosition) {
    ToasterPosition["topRight"] = "toast-top-right";
    ToasterPosition["topLeft"] = "toast-top-left";
    ToasterPosition["bottomRight"] = "toast-bottom-right";
    ToasterPosition["bottomLeft"] = "toast-bottom-left";
    ToasterPosition["topFull"] = "toast-top-full-width";
    // Other positions you would like
})(ToasterPosition || (ToasterPosition = {}));


/***/ }),

/***/ "S6iF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-wrapper\">\r\n          <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\r\n        </div>\r\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n            <!-- <form class=\"navbar-form\">\r\n                <div class=\"input-group no-border\">\r\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                        <i class=\"material-icons\">search</i>\r\n                        <div class=\"ripple-container\"></div>\r\n                    </button>\r\n                </div>\r\n            </form> -->\r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"/dashboard\">\r\n                        <i class=\"material-icons\">dashboard</i>\r\n                        <p>\r\n                            <span class=\"d-lg-none d-md-block\">Stats</span>\r\n                        </p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"material-icons\">notifications</i>\r\n                        <span class=\"notification\">{{badgeValue}}</span>\r\n                        <p>\r\n                            <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n                        </p>\r\n                    </a>\r\n                    <!-- <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Appointment Confirmed: Dr. D'souza</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Appointment Confirmed: Dr. Yigit</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Appointment Declined: Dr. Rona</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Appointment Declined: Dr. Bose</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">See all...</a>\r\n                    </div> -->\r\n                    <div class=\"dropdown-menu dropdown-menu-right\"  aria-labelledby=\"navbarDropdownMenuLink\">\r\n                        <a class=\"dropdown-item\" *ngFor=\"let ntf of notificationData\" href=\"javascript:void(0)\" (click)=\"setIsSeenNotification(ntf.id)\">{{getNotificationTimeDiff(ntf.createdDate)}}, {{ntf.notificationText}}</a>\r\n                        <a class=\"dropdown-item\" routerLink=\"/notifications\" href=\"javascript:void(0)\">See all...</a>\r\n                    </div>\r\n                </li>\r\n                <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"material-icons\">person</i>\r\n                        <p>\r\n                            <span class=\"d-lg-none d-md-block\">Account</span>\r\n                        </p>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink2\" *ngIf=\"isAuth()\">\r\n                        <a class=\"dropdown-item\" href=\"/user-profile\" ><i style=\"font-size: medium;\" class=\"material-icons\">person_pin</i>&nbsp;&nbsp;&nbsp; {{this.name}}</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"logout()\"><i style=\"font-size: medium;\" class=\"material-icons\">logout</i>&nbsp;&nbsp;&nbsp; logout</a>\r\n                        <a class=\"dropdown-item\" href=\"/changepassword\" ><i style=\"font-size: medium;\" class=\"material-icons\">vpn_key</i>&nbsp;&nbsp;&nbsp; change password</a>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<!--\r\n\r\n<nav class=\"navbar navbar-transparent navbar-absolute\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button mat-raised-button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"material-icons\">dashboard</i>\r\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"material-icons\">notifications</i>\r\n                        <span class=\"notification\">5</span>\r\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"javascript:void(0)\">Mike John responded to your email</a></li>\r\n                        <li><a href=\"javascript:void(0)\">You have 5 new tasks</a></li>\r\n                        <li><a href=\"javascript:void(0)\">You're now friend with Andrew</a></li>\r\n                        <li><a href=\"javascript:void(0)\">Another Notification</a></li>\r\n                        <li><a href=\"javascript:void(0)\">Another One</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                       <i class=\"material-icons\">person</i>\r\n                       <p class=\"hidden-lg hidden-md\">Profile</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n\r\n            <form class=\"navbar-form navbar-right\" role=\"search\">\r\n                <div class=\"form-group form-black is-empty\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                    <span class=\"material-input\"></span>\r\n                </div>\r\n                <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\r\n                </button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</nav> -->\r\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "T8BY":
/*!****************************************************************************!*\
  !*** ./src/app/patient/show-visit-history/show-visit-history.component.ts ***!
  \****************************************************************************/
/*! exports provided: ShowVisitHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowVisitHistoryComponent", function() { return ShowVisitHistoryComponent; });
/* harmony import */ var _raw_loader_show_visit_history_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./show-visit-history.component.html */ "iAI0");
/* harmony import */ var _show_visit_history_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-visit-history.component.css */ "VH7c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/patient.service */ "7wfR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShowVisitHistoryComponent = /** @class */ (function () {
    function ShowVisitHistoryComponent(practitionersvc) {
        this.practitionersvc = practitionersvc;
        this.msg = "";
        this.AllergyRows = [];
        this.DiagnosisRows = [];
        this.ProcedureRows = [];
        this.MedicationRows = [];
        this.patientvisitdata = [];
        this.patientAllergyData = [];
        this.patientDiagnosisData = [];
        this.patientProcedureData = [];
        this.patientMedicationData = [];
        this.fg = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            bloodpressuresystolic: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            bloodpressurediastolic: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            bodytemperature: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            respirationrate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            ApptID: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            DrName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    ShowVisitHistoryComponent.prototype.loadAppointmentData = function (aId) {
        var _this = this;
        this.obpv = this.practitionersvc.GetPatientVisitDataByID(this.aId);
        this.obpv.subscribe(function (pv) {
            _this.patientvisitdata = pv;
            console.log(_this.patientvisitdata);
            console.log(_this.patientvisitdata["height"]);
            _this.fg.patchValue({
                "height": _this.patientvisitdata["height"],
                "weight": _this.patientvisitdata["weight"],
                "bloodpressuresystolic": _this.patientvisitdata["bloodPressureSystolic"],
                "bloodpressurediastolic": _this.patientvisitdata["bloodPressureDiastolic"],
                "bodytemperature": _this.patientvisitdata["bodyTemperature"],
                "respirationrate": _this.patientvisitdata["respirationRate"]
            });
        }, function (error) { return console.log('fails to load nurse data'); });
    };
    ShowVisitHistoryComponent.prototype.loadAllergyData = function (pId) {
        var _this = this;
        this.AllergyRows = [];
        this.oballergy = this.practitionersvc.GetPatientAllergyDataByPatientID(this.pId);
        this.oballergy.subscribe(function (pv) {
            _this.patientAllergyData = pv;
            console.log(_this.patientAllergyData);
            for (var i = 0; i < _this.patientAllergyData.length; i++) {
                _this.AllergyRows.push({ allergytype: _this.patientAllergyData[i].allergyName,
                    chkFatal: _this.patientAllergyData[i].fatalAllergy });
            }
        }, function (error) { return console.log('fails to load allergy data'); });
    };
    ShowVisitHistoryComponent.prototype.loadDiagnosisData = function (aId) {
        var _this = this;
        this.DiagnosisRows = [];
        this.obdiagnosis = this.practitionersvc.GetPatientDiagnosisDataByAppointmentID(this.aId);
        this.obdiagnosis.subscribe(function (pv) {
            _this.patientDiagnosisData = pv;
            console.log(_this.patientDiagnosisData);
            for (var i = 0; i < _this.patientDiagnosisData.length; i++) {
                _this.DiagnosisRows.push({ diagnosiscode: _this.patientDiagnosisData[i].diagnosisCode,
                    diagnosisdescription: _this.patientDiagnosisData[i].diagnosisDescription });
            }
        }, function (error) { return console.log('fails to load allergy data'); });
    };
    ShowVisitHistoryComponent.prototype.loadProcedureData = function (aId) {
        var _this = this;
        this.ProcedureRows = [];
        this.obprocedure = this.practitionersvc.GetPatientProcedureDataByAppointmentID(this.aId);
        this.obprocedure.subscribe(function (pv) {
            _this.patientProcedureData = pv;
            console.log(_this.patientProcedureData[0]);
            for (var i = 0; i < _this.patientProcedureData.length; i++) {
                _this.ProcedureRows.push({ proceduretype: _this.patientProcedureData[i].procedureCode,
                    proceduredescription: _this.patientProcedureData[i].procedureDescription });
            }
        }, function (error) { return console.log('fails to load allergy data'); });
    };
    ShowVisitHistoryComponent.prototype.loadMedicationData = function (aId) {
        var _this = this;
        this.MedicationRows = [];
        this.obmedication = this.practitionersvc.GetPatientMedicationDataByAppointmentID(this.aId);
        this.obmedication.subscribe(function (pv) {
            _this.patientMedicationData = pv;
            console.log(_this.patientMedicationData[0]);
            for (var i = 0; i < _this.patientMedicationData.length; i++) {
                _this.MedicationRows.push({ medicationtype: _this.patientMedicationData[i].medicineStrength,
                    medicationdescription: _this.patientMedicationData[i].description });
            }
        }, function (error) { return console.log('fails to load allergy data'); });
    };
    ShowVisitHistoryComponent.prototype.DownloadPatientData = function () {
        debugger;
        this.ob = this.practitionersvc.GetExcelReport(this.aId, this.pId);
        this.ob.subscribe(function (response) {
            debugger;
            var dataType = response.type;
            var binaryData = [];
            binaryData.push(response);
            var downloadLink = document.createElement('a');
            downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: dataType }));
            var fileName = "Report_" + new Date().toLocaleString() + ".xlsx";
            downloadLink.setAttribute('download', fileName);
            document.body.appendChild(downloadLink);
            downloadLink.click();
        });
    };
    ShowVisitHistoryComponent.prototype.ngOnInit = function () {
        debugger;
        this.loadAppointmentData(this.aId);
        this.loadAllergyData(this.pId);
        this.loadDiagnosisData(this.aId);
        this.loadProcedureData(this.aId);
        this.loadMedicationData(this.aId);
        this.fg.patchValue({
            "ApptID": this.aId,
            "DrName": "Dr. " + this.drName
        });
    };
    ShowVisitHistoryComponent.prototype.functioncallbackFunction = function () {
        this.success = true;
    };
    ShowVisitHistoryComponent.ctorParameters = function () { return [
        { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_4__["PatientService"] }
    ]; };
    ShowVisitHistoryComponent.propDecorators = {
        pId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        aId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        drName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    ShowVisitHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-show-visit-history',
            template: _raw_loader_show_visit_history_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_show_visit_history_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_patient_service__WEBPACK_IMPORTED_MODULE_4__["PatientService"]])
    ], ShowVisitHistoryComponent);
    return ShowVisitHistoryComponent;
}());



/***/ }),

/***/ "Tj/N":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
var UserModel = /** @class */ (function () {
    function UserModel(email, oldPassword, newPassword, confirmPassword) {
    }
    return UserModel;
}());



/***/ }),

/***/ "UXbA":
/*!***************************************************!*\
  !*** ./src/app/account/login/login.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "VH7c":
/*!*****************************************************************************!*\
  !*** ./src/app/patient/show-visit-history/show-visit-history.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".th-font\r\n{\r\n    font-size: 15px;\r\n    font-weight :bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC9zaG93LXZpc2l0LWhpc3Rvcnkvc2hvdy12aXNpdC1oaXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQvc2hvdy12aXNpdC1oaXN0b3J5L3Nob3ctdmlzaXQtaGlzdG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRoLWZvbnRcclxue1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQgOmJvbGQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "VVT3":
/*!***********************************************************!*\
  !*** ./src/app/scheduling/schedule/schedule.component.ts ***!
  \***********************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var _raw_loader_schedule_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./schedule.component.html */ "w6Xq");
/* harmony import */ var _schedule_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.component.css */ "ZENT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_doctor_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/doctor-service.service */ "q5qX");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(doctorservice, config, modalService, spinner) {
        this.doctorservice = doctorservice;
        this.modalService = modalService;
        this.spinner = spinner;
        this.filterStr = "";
        this.rbGender = "";
        this.City = [
            'Mumbai', 'Thane', 'Kalyan', 'Andheri', 'Borivali', 'Dadar', 'Sion', 'Kurla', 'Ghatkopar', 'Mulund', 'Dombivli',
            'Airoli', 'Turbhe', 'Belapur', 'Panvel', 'Bandra', 'Malad', 'Virar', 'Pawai'
        ];
        this.speciality = [
            'Allergist', 'Cardiologist', 'Dentist', 'Dermatologist', 'Gynecologist', 'Neurologist', 'Pediatrician', 'Psychiatrist'
        ];
        //modals used by this component
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ScheduleComponent.prototype.GetAllDoctor = function () {
        var _this = this;
        console.log('ts.GetAllDoctors called');
        this.spinner.show();
        this.ob = this.doctorservice.GetAllDoctors();
        this.ob.subscribe(function (dr) {
            _this.spinner.hide();
            _this.doctorsdata = dr;
            console.log(_this.doctorsdata);
        }, function (error) { return console.log('fails to load doctors data'); });
    };
    ScheduleComponent.prototype.onChange = function (mrChange) {
        this.rbGender = mrChange.value;
    };
    ScheduleComponent.prototype.GetFilterData = function () {
        var _this = this;
        // console.log(this.cmbcity.value);
        // console.log(this.cmbspeciality.value);
        // console.log(this.rbGender);
        this.filterStr = "";
        if (typeof this.cmbcity.value != 'undefined' || this.cmbcity.value) {
            this.filterStr += (typeof this.filterStr != 'undefined' && this.filterStr) ? ("&city=" + this.cmbcity.value) : ("city=" + this.cmbcity.value);
            //console.log(this.filterStr);
        }
        if (typeof this.cmbspeciality.value != 'undefined' || this.cmbspeciality.value) {
            this.filterStr += (typeof this.filterStr != 'undefined' && this.filterStr) ? ("&speciality=" + this.cmbspeciality.value) : ("speciality=" + this.cmbspeciality.value);
            //console.log(this.filterStr);
        }
        if (this.rbGender != "") {
            this.filterStr += (typeof this.filterStr != 'undefined' && this.filterStr) ? ("&gender=" + this.rbGender) : ("gender=" + this.rbGender);
            //console.log(this.filterStr);
        }
        console.log(this.filterStr);
        this.ob = this.doctorservice.GetFilteredDoctors(this.filterStr);
        this.ob.subscribe(function (dr) { _this.doctorsdata = dr; console.log(_this.doctorsdata); }, function (error) { return console.log('fails to load doctors data'); });
    };
    ScheduleComponent.prototype.open = function (content, selectedDrId) {
        debugger;
        this.modalService.open(content, { size: 'xl', centered: true });
        this.drIdForAppointment = selectedDrId;
    };
    ScheduleComponent.prototype.ngOnInit = function () {
        this.GetAllDoctor();
    };
    ScheduleComponent.prototype.receiveMessage = function ($event) {
        this.modalService.dismissAll();
        this.GetAllDoctor();
    };
    ScheduleComponent.ctorParameters = function () { return [
        { type: _services_doctor_service_service__WEBPACK_IMPORTED_MODULE_3__["DoctorServiceService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }
    ]; };
    ScheduleComponent.propDecorators = {
        cmbcity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['cmbcity',] }],
        cmbspeciality: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['cmbspeciality',] }]
    };
    ScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-schedule',
            template: _raw_loader_schedule_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_schedule_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_doctor_service_service__WEBPACK_IMPORTED_MODULE_3__["DoctorServiceService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ngx-spinner></ngx-spinner>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer \">\r\n    <div class=\"container-fluid\">\r\n        <!-- <nav class=\"pull-left\">\r\n            <ul>\r\n                <li>\r\n                    <a href=\"https://www.creative-tim.com\">\r\n                        Creative Tim\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://creative-tim.com/about-us\">\r\n                        About Us\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"http://blog.creative-tim.com\">\r\n                        Blog\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://www.creative-tim.com/license\">\r\n                        Licenses\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav> -->\r\n        <div class=\"copyright pull-center\">\r\n            &copy;\r\n            {{test | date: 'yyyy'}}, Citiustech\r\n            <!-- <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web. -->\r\n        </div>\r\n    </div>\r\n</footer>\r\n");

/***/ }),

/***/ "Z/aa":
/*!*****************************************************************************!*\
  !*** ./src/app/scheduling/view-appointments/view-appointments.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ViewAppointmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAppointmentsComponent", function() { return ViewAppointmentsComponent; });
/* harmony import */ var _raw_loader_view_appointments_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./view-appointments.component.html */ "d8uF");
/* harmony import */ var _view_appointments_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-appointments.component.css */ "/T8i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/register.service */ "mdPV");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/auth.service */ "8PDw");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/patient.service */ "7wfR");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ViewAppointmentsComponent = /** @class */ (function () {
    function ViewAppointmentsComponent(registerService, authService, router, route, modalService, patientsvc, spinner) {
        this.registerService = registerService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.patientsvc = patientsvc;
        this.spinner = spinner;
        this.value = '';
        this.AppointmentData = [];
        this.displayedColumns = [
            'ID',
            'DrID',
            'Description',
            'DrName',
            'PatientID',
            'PatientName',
            'Date',
            'Fromtime',
            'Totime',
            'View_Edit_Delete'
        ];
    }
    ViewAppointmentsComponent.prototype.Getjson = function () {
        var _this = this;
        this.ob = this.registerService.GetAppointmentJsonData();
        this.ob.subscribe(function (data) {
            console.log(data);
            // this.AppointmentData = data;
            // this.dataSourceAppointmentData = data;
            _this.dataSourceAppointmentData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSourceAppointmentData.paginator = _this.paginator;
            _this.dataSourceAppointmentData.sort = _this.sort;
        }, function (error) { return console.log("Error in saving regiter data"); });
        this.dataSourceAppointment = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.AppointmentData);
        console.log("Data Source: " + this.AppointmentData);
    };
    ViewAppointmentsComponent.prototype.ngOnInit = function () {
        this.Getjson();
        this.dataSourceAppointment.paginator = this.paginator;
        this.initRole();
    };
    ViewAppointmentsComponent.prototype.ngAfterViewInit = function () {
        this.Getjson();
        this.dataSourceAppointment.paginator = this.paginator;
    };
    ViewAppointmentsComponent.prototype.initRole = function () {
        var _this = this;
        this.authService.getUserRole(this.authService.email)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
        }))
            .subscribe(function (result) {
            if (result) {
                _this.res = result;
                _this.role = _this.res.role;
            }
        }, function (error) {
        });
    };
    ViewAppointmentsComponent.prototype.open = function (content, selectedaId, selectedpId) {
        this.modalService.open(content, { size: 'xl', centered: true, scrollable: true });
        this.aIdToUpdate = selectedaId;
        this.pIdToUpdate = selectedpId;
    };
    ViewAppointmentsComponent.prototype.openAction = function (content, selectedaId, selectedpId, selecteddrname, selectedpatientname, selecteddate, selectedfromtime, selectedtotime, selecteddrid) {
        debugger;
        this.modalService.open(content, { size: 'xl', centered: true, scrollable: true });
        this.aIdToUpdate = selectedaId;
        this.pIdToUpdate = selectedpId;
        this.drnameToUpdate = selecteddrname;
        this.patientnameToUpdate = selectedpatientname;
        this.dateToUpdate = selecteddate;
        this.fromtimeToUpdate = selectedfromtime;
        this.totimeToUpdate = selectedtotime;
        this.dridToUpdate = selecteddrid;
    };
    ViewAppointmentsComponent.prototype.receiveMessage = function ($event) {
        this.modalService.dismissAll();
        this.Getjson();
    };
    ViewAppointmentsComponent.ctorParameters = function () { return [
        { type: _services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] },
        { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"] },
        { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_10__["PatientService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"] }
    ]; };
    ViewAppointmentsComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSort"],] }]
    };
    ViewAppointmentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-view-appointments',
            template: _raw_loader_view_appointments_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_view_appointments_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"],
            _services_patient_service__WEBPACK_IMPORTED_MODULE_10__["PatientService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"]])
    ], ViewAppointmentsComponent);
    return ViewAppointmentsComponent;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _shared_modules_shared_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared-modules/shared-material.module */ "DvRR");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./account/account.module */ "jcJX");
/* harmony import */ var _auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth-callback/auth-callback.component */ "NBk6");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "Hipp");
/* harmony import */ var _patient_view_data_view_data_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./patient/view-data/view-data.component */ "lhU4");
/* harmony import */ var _scheduling_book_appointment_book_appointment_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./scheduling/book-appointment/book-appointment.component */ "t7eR");
/* harmony import */ var _scheduling_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./scheduling/schedule/schedule.component */ "VVT3");
/* harmony import */ var mat_select_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! mat-select-autocomplete */ "+pRH");
/* harmony import */ var _patient_visit_patient_visit_doctor_patient_visit_doctor_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./patient-visit/patient-visit-doctor/patient-visit-doctor.component */ "t19f");
/* harmony import */ var _patient_visit_patient_visit_nurse_patient_visit_nurse_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./patient-visit/patient-visit-nurse/patient-visit-nurse.component */ "aFr/");
/* harmony import */ var _scheduling_appointment_action_appointment_action_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./scheduling/appointment-action/appointment-action.component */ "LusL");
/* harmony import */ var _scheduling_view_appointments_view_appointments_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./scheduling/view-appointments/view-appointments.component */ "Z/aa");
/* harmony import */ var _patient_visithistorydata_visithistorydata_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./patient/visithistorydata/visithistorydata.component */ "MMFx");
/* harmony import */ var _patient_show_visit_history_show_visit_history_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./patient/show-visit-history/show-visit-history.component */ "T8BY");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__["FullCalendarModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
                _shared_modules_shared_material_module__WEBPACK_IMPORTED_MODULE_8__["SharedMaterialModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"],
                _account_account_module__WEBPACK_IMPORTED_MODULE_17__["AccountModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
                }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot({
                    positionClass: 'toast-bottom-right'
                }),
                mat_select_autocomplete__WEBPACK_IMPORTED_MODULE_23__["SelectAutocompleteModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__["AdminLayoutComponent"],
                _auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_18__["AuthCallbackComponent"],
                _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_19__["ChangepasswordComponent"],
                _patient_view_data_view_data_component__WEBPACK_IMPORTED_MODULE_20__["ViewDataComponent"],
                _scheduling_book_appointment_book_appointment_component__WEBPACK_IMPORTED_MODULE_21__["BookAppointmentComponent"],
                _scheduling_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_22__["ScheduleComponent"],
                _patient_visit_patient_visit_doctor_patient_visit_doctor_component__WEBPACK_IMPORTED_MODULE_24__["PatientVisitDoctorComponent"],
                _patient_visit_patient_visit_nurse_patient_visit_nurse_component__WEBPACK_IMPORTED_MODULE_25__["PatientVisitNurseComponent"],
                _scheduling_appointment_action_appointment_action_component__WEBPACK_IMPORTED_MODULE_26__["AppointmentActionComponent"],
                _scheduling_view_appointments_view_appointments_component__WEBPACK_IMPORTED_MODULE_27__["ViewAppointmentsComponent"],
                _patient_visithistorydata_visithistorydata_component__WEBPACK_IMPORTED_MODULE_28__["VisithistorydataComponent"],
                _patient_show_visit_history_show_visit_history_component__WEBPACK_IMPORTED_MODULE_29__["ShowVisitHistoryComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "ZENT":
/*!************************************************************!*\
  !*** ./src/app/scheduling/schedule/schedule.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    /* width: 50%; */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZWR1bGluZy9zY2hlZHVsZS9zY2hlZHVsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2NoZWR1bGluZy9zY2hlZHVsZS9zY2hlZHVsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgLyogd2lkdGg6IDUwJTsgKi9cclxuICB9Il19 */");

/***/ }),

/***/ "aFr/":
/*!************************************************************************************!*\
  !*** ./src/app/patient-visit/patient-visit-nurse/patient-visit-nurse.component.ts ***!
  \************************************************************************************/
/*! exports provided: PatientVisitNurseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientVisitNurseComponent", function() { return PatientVisitNurseComponent; });
/* harmony import */ var _raw_loader_patient_visit_nurse_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./patient-visit-nurse.component.html */ "J4J6");
/* harmony import */ var _patient_visit_nurse_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patient-visit-nurse.component.css */ "9e5g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Models_patientvisit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Models/patientvisit */ "1cn+");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/patient.service */ "7wfR");
/* harmony import */ var _Models_patientallergy1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Models/patientallergy1 */ "7KDP");
/* harmony import */ var _app_core_ToasterPosition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app/core/ToasterPosition */ "Rz6H");
/* harmony import */ var _core_ToasterService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/ToasterService */ "e+Xv");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PatientVisitNurseComponent = /** @class */ (function () {
    function PatientVisitNurseComponent(practitionersvc, toaster, spinner) {
        this.practitionersvc = practitionersvc;
        this.toaster = toaster;
        this.spinner = spinner;
        this.msg = "";
        this.AllergyRows = [];
        this.DiagnosisRows = [];
        this.ProcedureRows = [];
        this.MedicationRows = [];
        this.parentFun = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.patientvisitdata = [];
        this.patientAllergyData = [];
        this.patientDiagnosisData = [];
        this.patientProcedureData = [];
        this.patientMedicationData = [];
        this.fg = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            bloodpressuresystolic: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            bloodpressurediastolic: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            bodytemperature: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            respirationrate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required) //,
            // ApptID: new FormControl('',Validators.required),
            // PtID: new FormControl('',Validators.required)   
        });
    }
    PatientVisitNurseComponent.prototype.AddAllergy = function () {
        var _this = this;
        //this.AllergyRows.push( {allergytype: this.allergytype, chkFatal: this.chkFatal==null?'false':'true' } );
        this.patienvisitallergy = new _Models_patientallergy1__WEBPACK_IMPORTED_MODULE_6__["PatientAllergy"](parseInt(this.allergytype.toString()), this.chkFatal == null ? false : true, parseInt(this.pId.toString()));
        this.ob = this.practitionersvc.SavePatientVisitAllergyData(this.patienvisitallergy);
        this.ob.subscribe(function (data) {
            console.log(data);
            console.log("Output Is: " + data["allergy"]);
            _this.msg = data["firstname"] + ", has Registered Successfully";
        }, function (error) { return console.log("Error in saving patientvisitallergy data"); });
        this.allergytype = null;
        this.chkFatal = null;
        this.loadAllergyData(this.pId);
    };
    PatientVisitNurseComponent.prototype.SavePatientVisitNurse = function () {
        var _this = this;
        var operation = "";
        console.log(this.fg.value.height);
        this.patientvisitnurse = new _Models_patientvisit__WEBPACK_IMPORTED_MODULE_4__["PatientVisit"](parseInt(this.pId.toString()), parseInt(this.aId.toString()), parseInt(this.fg.value.height), parseInt(this.fg.value.weight), parseInt(this.fg.value.bloodpressuresystolic), parseInt(this.fg.value.bloodpressurediastolic), parseInt(this.fg.value.bodytemperature), parseInt(this.fg.value.respirationrate));
        debugger;
        if (this.patientvisitdata["id"] > 0) {
            operation = "PATCH";
            this.patientvisitnurse.appointmentid = this.patientvisitdata["appointmentId"];
            console.log(this.patientvisitnurse);
        }
        else {
            operation = "POST";
        }
        if (this.fg.invalid == false) {
            this.ob = this.practitionersvc.SavePatientVisitData(this.patientvisitnurse, operation);
            this.ob.subscribe(function (data) {
                console.log(data);
                if (data != null) {
                    _this.success = true;
                    _this.sendMessage();
                    _this.toaster.success("Success", data["response"], _app_core_ToasterPosition__WEBPACK_IMPORTED_MODULE_7__["ToasterPosition"].topFull, _this.functioncallbackFunction);
                }
                console.log("Output Is: " + data["height"]);
                _this.msg = data["firstname"] + ", has Registered Successfully";
            }, function (error) { return console.log("Error in saving patientvisitnurse data"); });
        }
    };
    PatientVisitNurseComponent.prototype.loadAppointmentData = function (aId) {
        var _this = this;
        this.obpv = this.practitionersvc.GetPatientVisitDataByID(this.aId);
        this.obpv.subscribe(function (pv) {
            _this.patientvisitdata = pv;
            console.log(_this.patientvisitdata);
            console.log(_this.patientvisitdata["height"]);
            _this.fg.patchValue({
                "height": _this.patientvisitdata["height"],
                "weight": _this.patientvisitdata["weight"],
                "bloodpressuresystolic": _this.patientvisitdata["bloodPressureSystolic"],
                "bloodpressurediastolic": _this.patientvisitdata["bloodPressureDiastolic"],
                "bodytemperature": _this.patientvisitdata["bodyTemperature"],
                "respirationrate": _this.patientvisitdata["respirationRate"]
            });
        }, function (error) { return console.log('fails to load nurse data'); });
    };
    PatientVisitNurseComponent.prototype.loadAllergyData = function (pId) {
        var _this = this;
        this.AllergyRows = [];
        this.oballergy = this.practitionersvc.GetPatientAllergyDataByPatientID(this.pId);
        this.oballergy.subscribe(function (pv) {
            _this.patientAllergyData = pv;
            for (var i = 0; i < _this.patientAllergyData.length; i++) {
                _this.AllergyRows.push({ allergytype: _this.patientAllergyData[i].allergyName,
                    chkFatal: _this.patientAllergyData[i].fatalAllergy });
            }
        }, function (error) { return console.log('fails to load allergy data'); });
    };
    PatientVisitNurseComponent.prototype.loadDiagnosisData = function (aId) {
        var _this = this;
        this.obdiagnosis = this.practitionersvc.GetPatientDiagnosisDataByAppointmentID(this.aId);
        this.obdiagnosis.subscribe(function (pv) {
            _this.patientDiagnosisData = pv;
            for (var i = 0; i < _this.patientDiagnosisData.length; i++) {
                _this.DiagnosisRows.push({ diagnosistype: _this.patientDiagnosisData[i].diagnosisCode,
                    diagnosisdescription: _this.patientDiagnosisData[i].diagnosisDescription });
            }
        }, function (error) { return console.log('fails to load allergy data'); });
    };
    PatientVisitNurseComponent.prototype.loadProcedureData = function (aId) {
        var _this = this;
        this.obprocedure = this.practitionersvc.GetPatientProcedureDataByAppointmentID(this.aId);
        this.obprocedure.subscribe(function (pv) {
            _this.patientProcedureData = pv;
            console.log(_this.patientProcedureData[0]);
            for (var i = 0; i < _this.patientProcedureData.length; i++) {
                _this.ProcedureRows.push({ proceduretype: _this.patientProcedureData[i].procedureCode,
                    proceduredescription: _this.patientProcedureData[i].procedureDescription });
            }
        }, function (error) { return console.log('fails to load allergy data'); });
    };
    PatientVisitNurseComponent.prototype.loadMedicationData = function (aId) {
        var _this = this;
        this.obmedication = this.practitionersvc.GetPatientMedicationDataByAppointmentID(this.aId);
        this.obmedication.subscribe(function (pv) {
            _this.patientMedicationData = pv;
            console.log(_this.patientMedicationData[0]);
            for (var i = 0; i < _this.patientMedicationData.length; i++) {
                _this.MedicationRows.push({ medicationtype: _this.patientMedicationData[i].medicineStrength,
                    medicationdescription: _this.patientMedicationData[i].description });
            }
        }, function (error) { return console.log('fails to load allergy data'); });
    };
    PatientVisitNurseComponent.prototype.ngOnInit = function () {
        this.loadAppointmentData(this.aId);
        this.loadAllergyData(this.pId);
        this.loadDiagnosisData(this.aId);
        this.loadProcedureData(this.aId);
        this.loadMedicationData(this.aId);
        // this.fg.patchValue({      
        //   "ApptID":"A0"+this.aId,
        //   "PtID":"P0"+this.pId
        // })
        this.loadAllergyMaster();
    };
    PatientVisitNurseComponent.prototype.functioncallbackFunction = function () {
        this.success = true;
    };
    PatientVisitNurseComponent.prototype.loadAllergyMaster = function () {
        var _this = this;
        this.oballergy = this.practitionersvc.GetAllergyMasterVisit();
        this.oballergy.subscribe(function (data) {
            _this.allergyMaster = data;
        });
        console.log(this.allergyMaster);
    };
    PatientVisitNurseComponent.prototype.sendMessage = function () {
        //this.messageEvent.emit(this.message);
        this.parentFun.emit();
    };
    PatientVisitNurseComponent.ctorParameters = function () { return [
        { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"] },
        { type: _core_ToasterService__WEBPACK_IMPORTED_MODULE_8__["ToasterService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] }
    ]; };
    PatientVisitNurseComponent.propDecorators = {
        aId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        pId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        parentFun: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"], args: ["parentFun",] }]
    };
    PatientVisitNurseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-patient-visit-nurse',
            template: _raw_loader_patient_visit_nurse_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_patient_visit_nurse_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"], _core_ToasterService__WEBPACK_IMPORTED_MODULE_8__["ToasterService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]])
    ], PatientVisitNurseComponent);
    return PatientVisitNurseComponent;
}());



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-callback/auth-callback.component */ "NBk6");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        children: [{
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }]
    },
    {
        path: "auth-callback",
        component: _auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_5__["AuthCallbackComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    //useHash: true, 
                    relativeLinkResolution: 'legacy'
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "bfzl":
/*!********************************************************!*\
  !*** ./src/app/account/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./register.component.html */ "KJd+");
/* harmony import */ var _register_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.css */ "BWk6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/auth.service */ "8PDw");
/* harmony import */ var _core_ToasterService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../core/ToasterService */ "e+Xv");
/* harmony import */ var _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../core/ToasterPosition */ "Rz6H");
/* harmony import */ var _core_dropdownmaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/dropdownmaster.service */ "94X0");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, toastr, spinner) {
        this.authService = authService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.userRegistration = { name: '', email: '', password: '', role: '' };
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.roles = _core_dropdownmaster_service__WEBPACK_IMPORTED_MODULE_8__["Roles"];
    };
    RegisterComponent.prototype.keys = function () {
        var keys = Object.keys(this.roles);
        //console.log(keys);
        return keys;
        //return keys.slice(keys.length / 2);
    };
    RegisterComponent.prototype.onSubmit1 = function () {
        this.success = true;
        this.toastr.success('Success', 'Registered successfully', _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_7__["ToasterPosition"].topFull, this.functioncallbackFunction);
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.spinner.show();
        this.authService.register(this.userRegistration)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.spinner.hide();
        }))
            .subscribe(function (result) {
            if (result) {
                console.log("Succeess");
                _this.success = true;
                _this.toastr.success('Success', 'Registered successfully', _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_7__["ToasterPosition"].topFull, _this.functioncallbackFunction);
            }
        }, function (error) {
            //if(error.status==='undefined')
            _this.toastr.error('Error', "Unexpected error occured. Please contact administrator.", _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_7__["ToasterPosition"].topFull);
            //else
            //this.toastr.error('Error',error,ToasterPosition.topFull,this.functioncallbackFunction
            _this.error = error;
        });
    };
    RegisterComponent.prototype.functioncallbackFunction = function () {
        //this.toastr.warning("warning","Testing",ToasterPosition.topFull);
        this.success = true;
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _core_ToasterService__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-registers',
            template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _core_ToasterService__WEBPACK_IMPORTED_MODULE_6__["ToasterService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"IqXj",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "d8uF":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scheduling/view-appointments/view-appointments.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"divclass\">\r\n            <div>\r\n                <table mat-table [dataSource]=\"dataSourceAppointmentData\" class=\"table table-striped table-responsive-md\">    \r\n                    <ng-container matColumnDef=\"ID\">                      \r\n                      <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Appt ID.</th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n                    </ng-container>    \r\n                    <ng-container matColumnDef=\"Description\">                      \r\n                      <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Description</th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                    </ng-container> \r\n                    <ng-container matColumnDef=\"DrID\">\r\n                      <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> DrID </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.drDisplayId}} </td>\r\n                    </ng-container>  \r\n                    <ng-container matColumnDef=\"DrName\">\r\n                      <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Dr. Name </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.drname}} </td>\r\n                    </ng-container>  \r\n                    <ng-container matColumnDef=\"PatientID\">\r\n                      <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> PatientID </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.patientDisplayId}} </td>\r\n                    </ng-container> \r\n                    <ng-container matColumnDef=\"PatientName\">\r\n                      <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Patient Name </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.patientname}} </td>\r\n                    </ng-container>  \r\n                    <ng-container matColumnDef=\"Date\">\r\n                      <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Date </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\r\n                    </ng-container> \r\n                    <ng-container matColumnDef=\"Fromtime\">\r\n                      <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> From Time </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.fromtime}} </td>\r\n                    </ng-container>      \r\n                    <ng-container matColumnDef=\"Totime\">\r\n                      <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> To Time </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.totime}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"View_Edit_Delete\">\r\n                      <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Actions </th>\r\n                      <td mat-cell *matCellDef=\"let element\">\r\n                          <!-- <button class=\"btn\" (click)=\"Viewopen(Viewcontent,element.id )\" [ngClass]=\"{'bgColor': true}\" style=\"color: #0047AB;\" title=\"Approve\"><mat-icon>check_circle</mat-icon></button>\r\n                          <button class=\"btn\" (click)=\"Editopen(Editcontent,element.id )\" [ngClass]=\"{'bgColor': true}\" style=\"color: #0047AB;\" title=\"Reject\"><mat-icon>clear</mat-icon></button> -->\r\n              \r\n                          <button class=\"btn btn-outline-primary\" *ngIf=\"this.role=='doctor'\" (click)=\"openAction(AppointmentAction,element.id,element.patientid,element.drname,element.patientname,element.date,element.fromtime,element.totime,element.drid)\">Action</button> \r\n                          <button class=\"btn btn-outline-primary\" *ngIf=\"this.role=='doctor' && element.isApproved==true\" (click)=\"open(doctorcontent,element.id,element.patientid)\">Patient Visit</button> \r\n                          <button class=\"btn btn-outline-primary\" *ngIf=\"this.role=='nurse' && element.isApproved==true\" (click)=\"open(nursecontent,element.id,element.patientid)\">Patient Visit</button>           \r\n                          \r\n                      </td>\r\n                    </ng-container>                   \r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                  </table>\r\n                  <mat-paginator [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\" style=\"color: #0047AB; font-size: small;\">\r\n                  </mat-paginator>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"modalTagReg\">\r\n            <ng-template #doctorcontent let-c=\"close\" let-d=\"dismiss\" >    \r\n              <!-- <div class=\"modal-body\" [ngClass]=\"{'ModelPopUpClass': true}\"> -->\r\n                <div class=\"modal-body\" >\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                  <span aria-hidden=\"true\">&times; &nbsp;</span>\r\n                </button>\r\n              </div> \r\n                <app-patient-visit-doctor (parentFun)=\"receiveMessage()\" [aId]=\"aIdToUpdate\" [pId]=\"pIdToUpdate\" ></app-patient-visit-doctor>               \r\n            </ng-template>\r\n            <ng-template #nursecontent let-c=\"close\" let-d=\"dismiss\" >    \r\n              <!-- <div class=\"modal-body\" [ngClass]=\"{'ModelPopUpClass': true}\"> -->\r\n                <div class=\"modal-body\" >\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                  <span aria-hidden=\"true\">&times; &nbsp;</span>\r\n                </button>\r\n              </div> \r\n                <app-patient-visit-nurse (parentFun)=\"receiveMessage()\" [pId]=\"pIdToUpdate\" [aId]=\"aIdToUpdate\"></app-patient-visit-nurse>\r\n               \r\n            </ng-template>\r\n            <ng-template #AppointmentAction let-c=\"close\" let-d=\"dismiss\" >    \r\n              <!-- <div class=\"modal-body\" [ngClass]=\"{'ModelPopUpClass': true}\"> -->\r\n                <div class=\"modal-body\" >\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                  <span aria-hidden=\"true\">&times; &nbsp;</span>\r\n                </button>\r\n              </div> \r\n                <app-appointment-action (parentFun)=\"receiveMessage()\" [aId]=\"aIdToUpdate\" [pId]=\"pIdToUpdate\" [drname]=\"drnameToUpdate\" \r\n                [patientname]=\"patientnameToUpdate\" [date]=\"dateToUpdate\" [fromtime]=\"fromtimeToUpdate\"\r\n                [totime]=\"totimeToUpdate\" [drid]=\"dridToUpdate\">\r\n              \r\n              </app-appointment-action>\r\n               \r\n            </ng-template>\r\n          </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "dvA0":
/*!**************************************************!*\
  !*** ./src/app/account/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "g7tD");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.css */ "UXbA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/auth.service */ "8PDw");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, spinner) {
        this.authService = authService;
        this.spinner = spinner;
        this.title = "Login";
    }
    LoginComponent.prototype.Login = function () {
        this.spinner.show();
        this.authService.login();
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.spinner.show();
        this.Login();
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-userlogin',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "e+Xv":
/*!****************************************!*\
  !*** ./src/app/core/ToasterService.ts ***!
  \****************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToasterService = /** @class */ (function () {
    function ToasterService(toastr) {
        this.toastr = toastr;
        this.timeout = 3000;
    }
    ToasterService.prototype.error = function (title, message, positionClass, timein) {
        if (timein === void 0) { timein = this.timeout; }
        this.toastr.error(message, title, { positionClass: positionClass, timeOut: timein });
    };
    ToasterService.prototype.success = function (title, message, positionClass, mycallback, timein) {
        if (mycallback === void 0) { mycallback = this.Callback; }
        if (timein === void 0) { timein = this.timeout; }
        this.toastr.success(message, title, { positionClass: positionClass, timeOut: timein, closeButton: true, });
        mycallback();
    };
    ToasterService.prototype.warning = function (title, message, positionClass, timein) {
        if (timein === void 0) { timein = this.timeout; }
        this.toastr.warning(message, title, { positionClass: positionClass, timeOut: timein });
    };
    ToasterService.prototype.info = function (title, message, positionClass, timein) {
        if (timein === void 0) { timein = this.timeout; }
        this.toastr.info(message, title, { positionClass: positionClass, timeOut: timein });
    };
    ToasterService.prototype.showresponse = function (title, message, positionClass) {
        if (title === void 0) { title = ''; }
        switch (title) {
            case "": {
            }
            case "": {
            }
            case "": {
            }
            case "": {
            }
            case "": {
            }
        }
        this.toastr.info(message, title, { positionClass: positionClass });
    };
    ToasterService.prototype.mycallback = function () {
        console.log("call");
    };
    ToasterService.prototype.Callback = function () {
        console.log("call");
    };
    ToasterService.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }
    ]; };
    ToasterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], ToasterService);
    return ToasterService;
}());



/***/ }),

/***/ "eW6/":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scheduling/book-appointment/book-appointment.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-danger\">\r\n                        <h4 class=\"card-title\">Book Appointment</h4>\r\n                        <p class=\"card-category\"></p>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <form class=\"form-group\"  [formGroup]=\"userForm\" (ngSubmit)=\"SaveAppointmentData()\">\r\n                            <!-- <h2>Book Appointment</h2> -->\r\n                            <div class=\"form-group\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xl-6\">\r\n                                        <label for=\"drname\">Doctor: </label>\r\n                                        <input type=\"text\" class=\"form-control bold-text\" name=\"drname\" formControlName=\"doctorname\" placeholder=\"\" readonly>\r\n                                        \r\n                                    </div>\r\n                                    <div class=\"col-xl-6\">\r\n                                        <label for=\"ptname\">Patient:</label>\r\n                                        <input type=\"text\" class=\"form-control bold-text\" name=\"ptname\" formControlName=\"patientname\" readonly>\r\n                                       \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xl-6\">\r\n                                        <label for=\"speciality\">Speciality: </label>\r\n                                        <input type=\"text\" class=\"form-control bold-text\" name=\"speciality\" formControlName=\"spetiality\" placeholder=\"\" readonly>\r\n                                    \r\n                                    </div>\r\n                                    <div class=\"col-xl-6\">\r\n                                        <label for=\"shdate\">Date: <span class=\"asterisk\"> *</span></label>                    \r\n                                        <input type=\"date\" [min]=\"getToday()\" class=\"form-control\" name=\"shdate\" formControlName=\"appointmentdate\">\r\n                                        <span class=\"asterisk\" *ngIf=\"userForm.get('appointmentdate').touched && userForm.get('appointmentdate').errors?.required\">\r\n                                            Date is required!\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"row\">\r\n                            <div class=\"col-xl-6\">\r\n                                <label for=\"from\">From: <span class=\"asterisk\"> *</span></label>\r\n                                <input type=\"time\" class=\"form-control\" name=\"from\" formControlName=\"fromtime\">\r\n                                <span class=\"asterisk\" *ngIf=\"userForm.get('fromtime').touched && userForm.get('fromtime').errors?.required\">\r\n                                    From time is required!\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"col-xl-6\">\r\n                                <label for=\"to\">To: <span class=\"asterisk\"> *</span></label>\r\n                                <input type=\"time\" class=\"form-control\" name=\"to\" formControlName=\"totime\">\r\n                                <span class=\"asterisk\" *ngIf=\"userForm.get('totime').touched && userForm.get('totime').errors?.required\">\r\n                                    To Time is required!\r\n                                </span>\r\n                            </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row col-xl-12\">\r\n                                <label for=\"desc\">Short Description: </label>\r\n                                <textarea class=\"form-control\" name=\"desc\" formControlName=\"description\"></textarea>\r\n                            </div>\r\n                            <div class=\"form-group\">            \r\n                                <button id=\"btnSubmit\" class=\"btn btn-success\" [disabled]=\"!userForm.valid\">Book Appointment</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  ");

/***/ }),

/***/ "g7tD":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"text-center border border-light p-5\">\r\n\r\n    <!-- <p class=\"h4 mb-4\">Sign in</p>\r\n    <input type=\"email\" id=\"defaultLoginFormEmail\" class=\"form-control mb-4\" placeholder=\"E-mail\">\r\n    <input type=\"password\" id=\"defaultLoginFormPassword\" class=\"form-control mb-4\" placeholder=\"Password\">\r\n    <div class=\"d-flex justify-content-around\">\r\n      <div>\r\n        <a href=\"\">Forgot password?</a>\r\n      </div>\r\n    </div> -->\r\n    <h3>OPENID Authentication</h3>\r\n    <button mat-raised-button color=\"accent\" (click)=\"Login()\">\r\n      Login\r\n    </button>\r\n  \r\n    <!-- <p>Not a member?\r\n      <a href=\"\">Register</a>\r\n    </p> -->\r\n     \r\n  </form>\r\n  <ngx-spinner></ngx-spinner>");

/***/ }),

/***/ "gWVf":
/*!*********************************************!*\
  !*** ./src/app/Models/patientmedication.ts ***!
  \*********************************************/
/*! exports provided: PatientMedication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientMedication", function() { return PatientMedication; });
var PatientMedication = /** @class */ (function () {
    function PatientMedication(medicationid, 
    //public dosage:string="",
    description, 
    //public patientid:string="",
    appointmentid, medicineStrength) {
        if (medicationid === void 0) { medicationid = 0; }
        if (description === void 0) { description = ""; }
        if (appointmentid === void 0) { appointmentid = 0; }
        if (medicineStrength === void 0) { medicineStrength = ""; }
        this.medicationid = medicationid;
        this.description = description;
        this.appointmentid = appointmentid;
        this.medicineStrength = medicineStrength;
    }
    return PatientMedication;
}());



/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "S6iF");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.css */ "DIg/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/auth.service */ "8PDw");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/notifications.service */ "KWWs");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router, auth, notificationsvc, datepipe) {
        this.element = element;
        this.router = router;
        this.auth = auth;
        this.notificationsvc = notificationsvc;
        this.datepipe = datepipe;
        this.mobile_menu_visible = 0;
        //#region Notification
        this.badgeValue = "0";
        this.notificationData = [];
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.name = this.auth.name;
        //this.listTitles = ROUTES.filter(listTitle => listTitle);
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
        this.loadNotifications();
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        //console.log(titlee);
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        if (titlee == '/changepassword') {
            return 'Change Password';
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.signout();
    };
    NavbarComponent.prototype.isAuth = function () {
        if (this.auth.isAuthenticated) {
            return true;
        }
        return false;
    };
    //#region Notification
    NavbarComponent.prototype.loadNotifications = function () {
        var _this = this;
        //debugger;
        this.ob = this.notificationsvc.GetNotificationsByID(this.auth.email);
        this.ob.subscribe(function (data) {
            console.log(data);
            _this.notificationData = data.slice(0, 2);
            _this.badgeValue = _this.notificationData.length.toString();
        }, function (error) { return console.log("Error in fetching notification data"); });
    };
    NavbarComponent.prototype.setIsSeenNotification = function (notificationId) {
        var _this = this;
        console.log("ts.setIsSeenNotification() hits");
        // let obj:any={};
        // obj.id=notificationId,
        // obj.isSeen=true;
        this.ob = this.notificationsvc.SetIsSeenNotification(notificationId);
        this.ob.subscribe(function (dataa) {
            console.log(dataa);
            _this.loadNotifications();
        }, function (error) { return console.log("Error Occured"); });
    };
    NavbarComponent.prototype.getNotificationTimeDiff = function (createdTime) {
        var dateOneObj = new Date(createdTime).getTime();
        var dateTwoObj = new Date().getTime();
        // var milliseconds = Math.abs(dateOneObj-dateTwoObj)
        // var hours = milliseconds / 36e5;
        // return hours.toString()+" Hours ago";
        var diff = (dateOneObj - dateTwoObj) / 1000;
        var minutes = Math.abs(Math.round(diff / 60)).toString();
        var hours = Math.abs(Math.round(diff / 3600)).toString();
        if (parseInt(minutes) < 60) {
            return minutes.toString() + " Minutes ago";
        }
        else if (parseInt(hours) < 24) {
            return hours.toString() + " Hours ago";
        }
        else {
            return this.datepipe.transform(createdTime, "MMMM d, y");
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _services_notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
            styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _services_notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "i+F+":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/changepassword/changepassword.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header card-header-danger\">\r\n                <h4 class=\"card-title\">Change Password</h4>\r\n                <p class=\"card-category\">Fill in the details</p>\r\n            </div>\r\n            <div class=\"card-body\">\r\n\r\n                <div class=\"row justify-content-center\"> \r\n                    <div class=\"col-md-4 text-center\">\r\n                        <form *ngIf=\"!success\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n                            <!-- <br></br> -->\r\n                            <div class=\"form-group\">\r\n                                <mat-form-field class=\"example-full-width form-group\">\r\n                                <input matInput placeholder=\"Old Password\" required type=\"password\" id=\"oldPassword\" name=\"oldPassword\" [(ngModel)]=\"usermodel.oldPassword\">\r\n                                </mat-form-field>\r\n                            </div>\r\n                        \r\n                            <div class=\"form-group\">\r\n                                <!-- <label for=\"newPassword\" class=\"sr-only\">New Password</label>\r\n                                <input type=\"password\" id=\"newPassword\" name=\"newPassword\" [(ngModel)]=\"usermodel.newPassword\" class=\"form-control\" placeholder=\"New Password\" required aria-describedby=\"passwordHelp\"> -->\r\n                                <mat-form-field class=\"example-full-width form-group\">\r\n                                    <input matInput placeholder=\"New Password\" required  type=\"password\" id=\"newPassword\" name=\"newPassword\" [(ngModel)]=\"usermodel.newPassword\">\r\n                                </mat-form-field>\r\n                                <!-- <small id=\"passwordHelp\" class=\"form-text text-muted\">Min. 6 characters with at least one non alphanumeric character</small> -->\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                            <!-- <label for=\"newPassword\" class=\"sr-only\">Confirm Password</label>\r\n                            <input type=\"password\" id=\"confirmPassword\" name=\"confirmPassword\" [(ngModel)]=\"usermodel.confirmPassword\" class=\"form-control\" placeholder=\"Confirm Password\" aria-describedby=\"passwordHelp\" required>      -->\r\n                            <mat-form-field class=\"example-full-width form-group\">\r\n                                <input matInput placeholder=\"Confirm Password\" required  type=\"password\" id=\"confirmpassword\" name=\"confirmpassword\" [(ngModel)]=\"usermodel.confirmpassword\">\r\n                            </mat-form-field>\r\n                            <small id=\"passwordHelp\" class=\"form-text text-muted\">Min. 6 characters with at least one non alphanumeric character</small>\r\n                            </div> \r\n                        <input type=\"text\" hidden id=\"email\" name=\"email\" [(ngmodel)] = \"usermodel.email\" value='{{userId}}' class=\"form-control\" placeholder=\"email\" [(ngModel)]=\"usermodel.email\">  \r\n                        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.form.valid\">Go</button> \r\n\r\n                        <ngx-spinner></ngx-spinner>   \r\n        <div *ngIf=\"error\" class=\"alert alert-danger mt-3\" role=\"alert\">\r\n            <strong>Oops!</strong> {{error}}\r\n        </div>     \r\n      </form>     \r\n      <!-- <form class=\"form-group\" [formGroup]=\"fg\" (ngSubmit)=\"SavePractitionerData()\">\r\n\r\n      </form> -->\r\n      <div *ngIf=\"success\" class=\"alert alert-success\" role=\"alert\">\r\n          <h4 class=\"alert-heading\">Success!</h4>\r\n          <p id='relogin' (click)=\"relogin\" >Your passsword reset successfully, <a routerLink=\"/login\" href=\"/login\"><b>Please login</b></a> to continue.</p>        \r\n      </div>  \r\n                    </div> \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n  <!-- <ngx-spinner></ngx-spinner>   -->\r\n  \r\n  ");

/***/ }),

/***/ "iAI0":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/show-visit-history/show-visit-history.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-danger\">\r\n                        <h4 class=\"card-title\">Patient Visit Data</h4>\r\n                        <p class=\"card-category\"></p>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <form class=\"form-group\" [formGroup]=\"fg\">\r\n                            <mat-tab-group dynamicHeight>\r\n                                <mat-tab label=\"Appointment Details\">\r\n                                    <br>                                \r\n                                    <fieldset>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"ApptID\">AppointmentID: </label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"ApptID\" formControlName=\"ApptID\" disabled>                        \r\n                                                </div>\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"DrName\">Doctor Name: </label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"DrName\" formControlName=\"DrName\" disabled>                        \r\n                                                </div>\r\n                                            </div>\r\n                                        </div> \r\n                                    </fieldset>\r\n                                </mat-tab>\r\n                                <mat-tab label=\"Vital Signs\">\r\n                                    <br>                                \r\n                                    <fieldset>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"height\">Height (in cms): </label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"height\" formControlName=\"height\" disabled>                        \r\n                                                </div>\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"weight\">Weight (in kgs): </label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"weight\" formControlName=\"weight\" disabled>                        \r\n                                                </div>\r\n                                            </div>            \r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"bloodpressuresystolic\">Blood Pressure Systolic (in mmHg): </label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"bloodpressuresystolic\" formControlName=\"bloodpressuresystolic\" disabled>                        \r\n                                                </div>\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"bloodpressurediastolic\">Blood Pressure Diastolic (in mmHg): </label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"bloodpressurediastolic\" formControlName=\"bloodpressurediastolic\" disabled>                        \r\n                                                </div>\r\n                                            </div>            \r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"temperature\">Body Temperature (in celsius): </label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"bodytemperature\" formControlName=\"bodytemperature\" disabled>                        \r\n                                                </div>\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"respirationrate\">Respiration Rate (in BPM): </label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"respirationrate\" formControlName=\"respirationrate\" disabled>                        \r\n                                                </div>\r\n                                            </div>                        \r\n                                        </div>\r\n\r\n                                    </fieldset>\r\n                                </mat-tab>\r\n                                <mat-tab label=\"Allergies\">\r\n                                    <br>\r\n                                    <fieldset>\r\n                                        <div class=\"form-group\">            \r\n                                            <table class=\"table table-hover table-striped table-bordered\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th class=\"th-font\">Allergy</th><th class=\"th-font\">Fatal Allergy?</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let row of AllergyRows\">                  \r\n                                                        <td>{{row.allergytype}}</td>\r\n                                                        <td>{{row.chkFatal}}</td>\r\n                                                      </tr>\r\n                                                </tbody>                                \t\t\t\t\r\n                                            </table>\r\n                                        </div>\r\n                                    </fieldset>\r\n                                </mat-tab>\r\n                                <mat-tab label=\"Diagnosis\">\r\n                                    <br>\r\n                                    <fieldset>\r\n                                        <div class=\"form-group\">            \r\n                                            <table class=\"table table-hover table-striped table-bordered\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th class=\"th-font\">Diagnosis</th><th class=\"th-font\">Diagnosis Description</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let row of DiagnosisRows\">                  \r\n                                                        <td>{{row.diagnosiscode}}</td>\r\n                                                        <td>{{row.diagnosisdescription}}</td>\r\n                                                      </tr>                    \r\n                                                </tbody>                                \t\t\t\t\r\n                                            </table>          \r\n                                        </div>\r\n                                    </fieldset>\r\n                                </mat-tab>\r\n                                <mat-tab label=\"Procedure\">\r\n                                    <br>\r\n                                    <fieldset>\r\n                                        <div class=\"form-group\">            \r\n                                            <table class=\"table table-hover table-striped table-bordered\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th class=\"th-font\">Procedure</th><th class=\"th-font\">Procedure Description</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let row of ProcedureRows\">                  \r\n                                                        <td>{{row.proceduretype}}</td>\r\n                                                        <td>{{row.proceduredescription}}</td>\r\n                                                      </tr>                    \r\n                                                </tbody>                                \t\t\t\t\r\n                                            </table>               \r\n                                        </div>\r\n                                    </fieldset>\r\n                                </mat-tab>\r\n                                <mat-tab label=\"Medication\">\r\n                                    <br>\r\n                                    <fieldset>\r\n                                        <div class=\"form-group\">            \r\n                                            <table class=\"table table-hover table-striped table-bordered\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th class=\"th-font\">Medication</th><th class=\"th-font\">Medication Description</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let row of MedicationRows\">                  \r\n                                                        <td>{{row.medicationtype}}</td>                        \r\n                                                        <td>{{row.medicationdescription}}</td>\r\n                                                      </tr>                    \r\n                                                </tbody>                                \t\t\t\t\r\n                                            </table>        \r\n                                        </div>\r\n                                    </fieldset>\r\n\r\n                                </mat-tab>\r\n                                \r\n                            </mat-tab-group>\r\n                            <div class=\"form-group\">            \r\n                                <button type=\"button\" class=\"btn btn-success\" (click)=\"DownloadPatientData()\">Export</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "LmEr");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "hrlM");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "zBoC");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "jcJX":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "bfzl");
/* harmony import */ var _patient_register_patient_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patient-register/patient-register.component */ "l2bC");
/* harmony import */ var _account_routes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account-routes.module */ "7Ytv");
/* harmony import */ var _core_ToasterService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/ToasterService */ "e+Xv");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_modules_shared_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared-modules/shared-material.module */ "DvRR");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { HomeModule } from '../home/home.module';
//import { HeaderComponent } from '../home/header/header.component'; 



var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"], _patient_register_patient_register_component__WEBPACK_IMPORTED_MODULE_3__["PatientRegisterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _account_routes_module__WEBPACK_IMPORTED_MODULE_4__["AccountRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
                _shared_modules_shared_material_module__WEBPACK_IMPORTED_MODULE_9__["SharedMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]
            ],
            providers: [_core_ToasterService__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "l2bC":
/*!************************************************************************!*\
  !*** ./src/app/account/patient-register/patient-register.component.ts ***!
  \************************************************************************/
/*! exports provided: PatientRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientRegisterComponent", function() { return PatientRegisterComponent; });
/* harmony import */ var _raw_loader_patient_register_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./patient-register.component.html */ "3qug");
/* harmony import */ var _patient_register_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patient-register.component.css */ "q+Aq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/patient.service */ "7wfR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _CustomValidator_PasswdMatch_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../CustomValidator/PasswdMatch.validator */ "FDEX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_ToasterService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/ToasterService */ "e+Xv");
/* harmony import */ var _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/ToasterPosition */ "Rz6H");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _core_dropdownmaster_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/dropdownmaster.service */ "94X0");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var app_models_Patient__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/models/Patient */ "MTzm");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var PatientRegisterComponent = /** @class */ (function () {
    function PatientRegisterComponent(patientsvc, router, toast, spinner) {
        this.patientsvc = patientsvc;
        this.router = router;
        this.toast = toast;
        this.spinner = spinner;
        this.msg = "";
        this.fg = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, Object(_CustomValidator_PasswdMatch_validator__WEBPACK_IMPORTED_MODULE_5__["MatchPasswd"])('password')]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    // SavePatientData(eventsource: any): void
    PatientRegisterComponent.prototype.SavePatientData1 = function () {
        this.fg.reset();
    };
    PatientRegisterComponent.prototype.SavePatientData = function () {
        var _this = this;
        this.spinner.show();
        console.log("ts.SavePatientData() hits");
        console.log(this.fg.value);
        this.patient = new app_models_Patient__WEBPACK_IMPORTED_MODULE_12__["Patients"](this.fg.value.firstname, this.fg.value.lastname, this.fg.value.dob, this.fg.value.contact, this.fg.value.email, this.fg.value.password, (this.fg.value.firstname + " " + this.fg.value.lastname), "Active", "No", this.fg.value.title, this.fg.value.gender);
        console.log(this.patient);
        if (this.fg.invalid == false) {
            this.ob = this.patientsvc.SavePatientData(this.patient);
            this.ob.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
                _this.spinner.hide();
            })).subscribe(function (dataa) {
                _this.res = dataa;
                console.log(_this.res);
                if (_this.res.code == "1") {
                    _this.success = true;
                    _this.showMessage();
                    _this.toast.success("Success", "User registered successfully", _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_8__["ToasterPosition"].topFull);
                }
                else {
                    _this.toast.error("Error", _this.res.response, _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_8__["ToasterPosition"].topFull);
                }
            }, function (error) { return _this.toast.error("Error", error, _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_8__["ToasterPosition"].topFull); });
        }
    };
    PatientRegisterComponent.prototype.getToday = function () {
        return new Date().toISOString().split('T')[0];
    };
    PatientRegisterComponent.prototype.navigatePage = function () {
        this.router.navigate(["/userlogin"]);
    };
    PatientRegisterComponent.prototype.showMessage = function () {
        this.spinner.hide();
        this.toast.success("Success", "Patient registered successfully", _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_8__["ToasterPosition"].topFull, 5000);
    };
    PatientRegisterComponent.prototype.ngOnInit = function () {
        this.titles = Object.entries(_core_dropdownmaster_service__WEBPACK_IMPORTED_MODULE_10__["Title"]);
        this.genders = Object.entries(_core_dropdownmaster_service__WEBPACK_IMPORTED_MODULE_10__["Genders"]);
    };
    PatientRegisterComponent.ctorParameters = function () { return [
        { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _core_ToasterService__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] }
    ]; };
    PatientRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-patient-register',
            template: _raw_loader_patient_register_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            providers: [_core_ToasterService__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]],
            styles: [_patient_register_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _core_ToasterService__WEBPACK_IMPORTED_MODULE_7__["ToasterService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]])
    ], PatientRegisterComponent);
    return PatientRegisterComponent;
}());



/***/ }),

/***/ "lhU4":
/*!**********************************************************!*\
  !*** ./src/app/patient/view-data/view-data.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDataComponent", function() { return ViewDataComponent; });
/* harmony import */ var _raw_loader_view_data_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./view-data.component.html */ "6bzr");
/* harmony import */ var _view_data_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-data.component.css */ "GQ+f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/patient.service */ "7wfR");
/* harmony import */ var _core_ToasterService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/ToasterService */ "e+Xv");
/* harmony import */ var _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/ToasterPosition */ "Rz6H");
/* harmony import */ var mat_select_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mat-select-autocomplete */ "+pRH");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/auth.service */ "8PDw");
/* harmony import */ var app_Models_PatientAllergy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/Models/PatientAllergy */ "6zU/");
/* harmony import */ var app_Models_PatientDemographicData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/Models/PatientDemographicData */ "xrIu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ViewDataComponent = /** @class */ (function () {
    //#endregion
    function ViewDataComponent(patientsvc, toaster, authService, datePipe) {
        this.patientsvc = patientsvc;
        this.toaster = toaster;
        this.authService = authService;
        this.datePipe = datePipe;
        this.dataSourceAllergyData = [];
        this.demographicData = [];
        this.isFatal = false;
        this.isUseSameAddress = false;
        this.isPortalAccess = false;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            patientfirstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            patientlastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            patientdob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            patientcontact: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            patientemail: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            // race: new FormControl('',Validators.required),
            // ethnicity: new FormControl('',Validators.required),
            // languagesKnown: new FormControl('',Validators.required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            nomineeFirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            nomineeLastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            nomineeEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email),
            nomineeRelationship: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            nomineeContact: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")),
            nomineeAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            portalaccess: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            sameasabove: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false)
        });
        this.Race = [
            'White', 'Black', 'American Indian', 'Asian', 'Native Hawaiian'
        ];
        this.Ethnicity = [
            "German", "Italian", "French", "Irish", "English", "African", "Jamaican", "Nigerian", "Chinese", "Korean", "Japanese", "Indian", "Samoan", "Chamorro"
        ];
        this.displayedColumns = [
            'id',
            'allergy',
            'isfatal'
        ];
        this.options = [
            {
                display: 'English',
                value: 'English'
            }, {
                display: 'French',
                value: 'French'
            }, {
                display: 'Hindi',
                value: 'Hindi'
            }, {
                display: 'German',
                value: 'German'
            }, {
                display: 'Spanish',
                value: 'Spanish'
            }, {
                display: 'Marathi',
                value: 'Marathi'
            }
        ];
        this.selectedOptions = [];
        this.selected = this.selectedOptions;
        this.showError = false;
        this.errorMessage = '';
    }
    ViewDataComponent.prototype.SavePatientAllergy = function (allergy) {
        var _this = this;
        debugger;
        console.log('Add allergy done');
        if (typeof allergy != 'undefined') {
            this.patientAllergyData = new app_Models_PatientAllergy__WEBPACK_IMPORTED_MODULE_9__["PatientAllergy"](0, allergy, this.isFatal, 1);
            this.ob = this.patientsvc.SaveAllergyData(this.authService.email, this.patientAllergyData);
            this.ob.subscribe(function (dataa) {
                console.log(dataa);
                _this.GetPatientAllergyData();
            }, function (error) { return console.log("Error in saving patient Allergy data"); });
        }
        else {
            alert('Allergy type cannot be empty');
        }
    };
    ViewDataComponent.prototype.GetPatientAllergyData = function () {
        var _this = this;
        this.ob = this.patientsvc.GetPatientAllergyDataByID(this.authService.email);
        this.ob.subscribe(function (data) {
            console.log("Output");
            console.log(data);
            _this.dataSourceAllergyData = data;
        }, function (error) { return console.log("Error in saving regiter data"); });
    };
    ViewDataComponent.prototype.SavePatientDemographicData = function () {
        var _this = this;
        debugger;
        var operation = "";
        console.log('save demographic done');
        this.patientDemographicData = new app_Models_PatientDemographicData__WEBPACK_IMPORTED_MODULE_10__["PatientDemographicData"]((this.demographicData["id"] > 0) ? this.demographicData["id"] : 0, this.cmbrace.value, this.cmbethnicity.value, this.langSelect.displayString, this.userForm.value.address, this.userForm.value.nomineeFirstName, this.userForm.value.nomineeLastName, this.userForm.value.nomineeEmail, this.userForm.value.nomineeRelationship, this.userForm.value.nomineeContact, (this.userForm.value.sameasabove == true) ? this.userForm.value.address : this.userForm.value.nomineeAddress, this.userForm.value.portalaccess, 1);
        if (this.demographicData["id"] > 0) {
            operation = "PATCH";
        }
        else {
            operation = "POST";
        }
        this.ob = this.patientsvc.SaveDemographicData(this.authService.email, this.patientDemographicData, operation);
        this.ob.subscribe(function (dataa) {
            _this.res = dataa;
            console.log(_this.res);
            if (_this.res.code == "1") {
                _this.success = true;
                _this.toaster.success("Success", _this.res.response, _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_6__["ToasterPosition"].topFull);
            }
            else {
                _this.toaster.error("Error", _this.res.response, _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_6__["ToasterPosition"].topFull);
            }
            _this.ngOnInit();
        }, function (error) {
            _this.toaster.error('Error', error, _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_6__["ToasterPosition"].topFull);
            console.log("Error in saving patient Allergy data");
        });
    };
    ViewDataComponent.prototype.loadPatientData = function () {
        var _this = this;
        this.ob2 = this.patientsvc.GetPatientDataByID(this.authService.email);
        this.ob2.subscribe(function (data) {
            debugger;
            if (data["firstname"] != "") {
                _this.userForm.patchValue({
                    "patientfirstname": data["firstname"],
                    "patientlastname": data["lastname"],
                    "patientdob": _this.datePipe.transform(data["dob"], "MMMM d, y"),
                    "patientcontact": data["contact"],
                    "patientemail": data["email"]
                });
            }
        });
    };
    ViewDataComponent.prototype.loadDemographicData = function () {
        var _this = this;
        this.ob1 = this.patientsvc.GetPatientDemographicDataByID(this.authService.email);
        this.ob1.subscribe(function (dr) {
            _this.demographicData = dr;
            console.log(_this.demographicData);
            debugger;
            if (_this.demographicData["id"] > 0) {
                //Convert Language string into array
                _this.selectedOptions = _this.demographicData["languagesKnown"].split(',');
                _this.selectedRace = _this.demographicData["race"];
                _this.selectedEthnicity = _this.demographicData["ethnicity"];
                _this.userForm.patchValue({
                    // "race": this.demographicData["race"],
                    // "ethnicity": this.demographicData["ethnicity"],
                    // "languagesKnown": this.demographicData[0].languagesKnown,
                    "address": _this.demographicData["address"],
                    "nomineeFirstName": _this.demographicData["nomineeFirstName"],
                    "nomineeLastName": _this.demographicData["nomineeLastName"],
                    "nomineeEmail": _this.demographicData["nomineeEmail"],
                    "nomineeRelationship": _this.demographicData["nomineeRelationship"],
                    "nomineeContact": _this.demographicData["nomineeContact"],
                    "nomineeAddress": _this.demographicData["nomineeAddress"],
                    "portalaccess": _this.demographicData["isNeedportalAccess"]
                });
            }
        }, function (error) { return console.log('fails to load doctors data'); });
    };
    ViewDataComponent.prototype.loadAllergyMaster = function () {
        var _this = this;
        this.ob2 = this.patientsvc.GetAllergyMaster();
        this.ob2.subscribe(function (data) {
            debugger;
            _this.allergyMaster = data;
        });
    };
    ViewDataComponent.prototype.IsFatalCheckEvent = function (event) {
        debugger;
        this.isFatal = event.target.checked;
        console.log(this.isFatal);
    };
    // IsUseSameAddressEvent(event){
    //   debugger;    
    //   this.isUseSameAddress=event.target.checked;
    //   console.log(this.isUseSameAddress);
    //   }
    // IsPortalAccessEvent(event){
    //   debugger;    
    //   this.isPortalAccess=event.target.checked;
    //   console.log(this.isPortalAccess);
    //   }
    ViewDataComponent.prototype.functioncallbackFunction = function () {
        this.success = true;
    };
    //#region Language Known Input
    ViewDataComponent.prototype.onToggleDropdown = function () {
        this.multiSelect.toggleDropdown();
    };
    ViewDataComponent.prototype.getSelectedOptions = function (selected) {
        this.selected = selected;
    };
    ViewDataComponent.prototype.onResetSelection = function () {
        this.selectedOptions = [];
    };
    //#endregion
    // DownloadPatientData()
    // {
    //   debugger;
    //   // this.ob = this.patientsvc.GetPatientAllergyDataByID(this.authService.email);
    //   // this.ob.subscribe(
    //   //   data => { 
    //   //     let fileName="Report_"+new Date().toLocaleString();
    //   //     this.downloadFile(data, fileName);
    //   //   },
    //   //   (error: any) => console.log("Error in fetching data")
    //   //   );
    //    this.ob = this.patientsvc.GetCSVFile(this.authService.email);
    //   this.ob.subscribe(
    //     (response: any) =>{
    //       debugger;
    //         let dataType = response.type;
    //         let binaryData = [];
    //         binaryData.push(response);
    //         let downloadLink = document.createElement('a');
    //         downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
    //         let fileName="Report_"+new Date().toLocaleString()+".csv";
    //             downloadLink.setAttribute('download', fileName);
    //         document.body.appendChild(downloadLink);
    //         downloadLink.click();
    //     }
    // )
    // }
    //   downLoadFile(data: any, type: string) {
    //     debugger;
    //     let blob = new Blob([data], { type: type});
    //     let url = window.URL.createObjectURL(blob);
    //     let pwa = window.open(url);
    //     if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
    //         alert( 'Please disable your Pop-up blocker and try again.');
    //     }
    // }
    //   downloadFile(data, filename='data') {
    //     debugger;
    //     let csvData = this.ConvertToCSV(data, ['id','allergy', 'isfatal', 'patientid']);
    //     console.log(csvData)
    //     let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    //     let dwldLink = document.createElement("a");
    //     let url = URL.createObjectURL(blob);
    //     let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    //     if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
    //         dwldLink.setAttribute("target", "_blank");
    //     }
    //     dwldLink.setAttribute("href", url);
    //     dwldLink.setAttribute("download", filename + ".csv");
    //     dwldLink.style.visibility = "hidden";
    //     document.body.appendChild(dwldLink);
    //     dwldLink.click();
    //     document.body.removeChild(dwldLink);
    // }
    // ConvertToCSV(objArray, headerList) {
    //      let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    //      let str = '';
    //      let row = 'S.No,';
    //      for (let index in headerList) {
    //          row += headerList[index] + ',';
    //      }
    //      row = row.slice(0, -1);
    //      str += row + '\r\n';
    //      for (let i = 0; i < array.length; i++) {
    //          let line = (i+1)+'';
    //          for (let index in headerList) {
    //             let head = headerList[index];
    //              line += ',' + array[i][head];
    //          }
    //          str += line + '\r\n';
    //      }
    //      return str;
    //  }
    ViewDataComponent.prototype.ngOnInit = function () {
        this.loadPatientData();
        this.loadDemographicData();
        this.loadAllergyMaster();
        this.GetPatientAllergyData();
    };
    ViewDataComponent.ctorParameters = function () { return [
        { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_4__["PatientService"] },
        { type: _core_ToasterService__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] },
        { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"] }
    ]; };
    ViewDataComponent.propDecorators = {
        cmbrace: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['cmbrace',] }],
        cmbethnicity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['cmbethnicity',] }],
        multiSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [mat_select_autocomplete__WEBPACK_IMPORTED_MODULE_7__["SelectAutocompleteComponent"],] }],
        langSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['autoComplete',] }]
    };
    ViewDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-view-data',
            template: _raw_loader_view_data_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]],
            styles: [_view_data_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_patient_service__WEBPACK_IMPORTED_MODULE_4__["PatientService"], _core_ToasterService__WEBPACK_IMPORTED_MODULE_5__["ToasterService"], _core_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]])
    ], ViewDataComponent);
    return ViewDataComponent;
}());



/***/ }),

/***/ "mdPV":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/config.service */ "8WNu");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/base.service */ "P8On");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterService = /** @class */ (function (_super) {
    __extends(RegisterService, _super);
    function RegisterService(httpSVC, config) {
        var _this = _super.call(this) || this;
        _this.httpSVC = httpSVC;
        _this.config = config;
        return _this;
    }
    RegisterService.prototype.SaveUserRegiterDatas = function (reg, operation) {
        console.log("service.SavePractitionerData() hits");
        var headers = { 'content-type': 'application/json' };
        if (operation === "POST") {
            return this.httpSVC.post(this.config.authApiURI + "/doctor", reg, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
        else {
            return this.httpSVC.post(this.config.authApiURI + "/doctorupdate", reg).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
    };
    RegisterService.prototype.GetDoctorJsonDatas = function (token) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        console.log(httpOptions);
        return this.httpSVC.get(this.config.adminApiUri + "/Doctors", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    RegisterService.prototype.GetNurseJsonDatas = function (token) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.httpSVC.get(this.config.adminApiUri + "/Nurses", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    RegisterService.prototype.GetPatientJsonDatas = function (token) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.httpSVC.get(this.config.adminApiUri + "/Patients", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    RegisterService.prototype.GetDoctorJsonDatasByID = function (DrID, token) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.httpSVC.get(this.config.adminApiUri + "/Doctor/" + DrID, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    RegisterService.prototype.GetNurseJsonDatasByID = function (NurseID, token) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.httpSVC.get(this.config.adminApiUri + "/Nurse/" + NurseID, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    RegisterService.prototype.GetPatientJsonDatasByID = function (PatientID, token) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.httpSVC.get(this.config.adminApiUri + "/Patient/" + PatientID, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    RegisterService.prototype.DeleteDoctorJsonDatasByID = function (DrID) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json').set('Accept', 'application/json');
        var httpOptions = {
            headers: this.headers
        };
        return this.httpSVC.delete(this.config.tempResourseAPI + "/Doctors/" + DrID, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    RegisterService.prototype.DeleteNurseJsonDatasByID = function (NurseID) {
        return this.httpSVC.delete(this.config.tempResourseAPI + "/Nurses/" + NurseID);
    };
    RegisterService.prototype.DeletePatientJsonDatasByID = function (PatientID) {
        return this.httpSVC.delete(this.config.tempResourseAPI + "/Patient/" + PatientID);
    };
    RegisterService.prototype.GetAppointmentJsonData = function () {
        return this.httpSVC.get(this.config.scheduleManagementAPI + "/Schedule/getallappointments");
    };
    RegisterService.prototype.SoftDeleteNurseData = function (p) {
        return this.httpSVC.post(this.config.authApiURI + "/updatenursestatus?Id=" + p.Id + "&IsActive=" + p.IsActive, p).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    RegisterService.prototype.SoftDeleteDoctorData = function (p) {
        return this.httpSVC.post(this.config.authApiURI + "/updatedocstatus?Id=" + p.Id + "&IsActive=" + p.IsActive, p).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    RegisterService.prototype.SoftDeletePatienData = function (p) {
        return this.httpSVC.post(this.config.authApiURI + "/updatepatientstatus?Id=" + p.Id + "&IsActive=" + p.IsActive, p).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    RegisterService.prototype.GetUserProfile = function (token) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.httpSVC.get(this.config.adminApiUri + "/userInfo", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    RegisterService.prototype.DownloadGridData = function (entityName) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'text/csv'
        });
        return this.httpSVC.get(this.config.adminApiUri + "/getexcelreport?entityName=" + entityName, { responseType: 'blob', headers: header });
    };
    RegisterService.prototype.UnlockUser = function (p) {
        return this.httpSVC.post(this.config.authApiURI + "/unlockuser?userid=" + p.Id + "&IsActive=" + p.IsActive, p).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    RegisterService.prototype.GetAdminDashBoardData = function () {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.httpSVC.get(this.config.adminApiUri + "/getadmindashboarddata", { headers: header });
    };
    RegisterService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _core_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _core_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], RegisterService);
    return RegisterService;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "q+Aq":
/*!*************************************************************************!*\
  !*** ./src/app/account/patient-register/patient-register.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n  .tbar {\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n\r\n  .mat-toolbar.mat-primary {\r\n  background: #202721; \r\n  color: #fff;\r\n}\r\n\r\n  /*  body {\r\n            color: #fff;\r\n            background: #63738a;\r\n            font-family: 'Roboto', sans-serif;\r\n        }\r\n\r\n        .form-control {\r\n            height: 40px;\r\n            box-shadow: none;\r\n            color: #969fa4;\r\n        }*/\r\n\r\n  /* @import '~bootstrap/dist/css/bootstrap.min.css'; */\r\n\r\n  /* .form-control:focus {\r\n          border-color: #5cb85c;\r\n      } */\r\n\r\n  .form-control, .btn {\r\n          border-radius: 3px;\r\n      }\r\n\r\n  .signup-form {\r\n          width: 800px;\r\n          margin: 0 auto;\r\n          padding: 30px 0;\r\n      }\r\n\r\n  .signup-form h2 {\r\n              color: #636363;\r\n              margin: 0 0 15px;\r\n              position: relative;\r\n              text-align: center;\r\n          }\r\n\r\n  .signup-form h2:before, .signup-form h2:after {\r\n                  content: \"\";\r\n                  height: 2px;\r\n                  width: 30%;\r\n                  background: #d4d4d4;\r\n                  position: absolute;\r\n                  top: 50%;\r\n                  z-index: 2;\r\n              }\r\n\r\n  .signup-form h2:before {\r\n                  left: 0;\r\n              }\r\n\r\n  .signup-form h2:after {\r\n                  right: 0;\r\n              }\r\n\r\n  .signup-form .hint-text {\r\n              color: #999;\r\n              margin-bottom: 30px;\r\n              text-align: center;\r\n          }\r\n\r\n  .signup-form form {\r\n              color: #999;\r\n              border-radius: 3px;\r\n              margin-bottom: 15px;\r\n              background: #f2f3f7;\r\n              box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n              padding: 30px;\r\n          }\r\n\r\n  .signup-form .form-group {\r\n              margin-bottom: 20px;\r\n          }\r\n\r\n  .signup-form input[type=\"checkbox\"] {\r\n              margin-top: 3px;\r\n          }\r\n\r\n  .signup-form .btn {\r\n              font-size: 16px;\r\n              min-width: 140px;\r\n              outline: none !important;\r\n          }\r\n\r\n  .signup-form .row div:first-child {\r\n              padding-right: 10px;\r\n          }\r\n\r\n  .signup-form .row div:last-child {\r\n              padding-left: 10px;\r\n          }\r\n\r\n  .signup-form a {\r\n              color: #fff;\r\n              text-decoration: underline;\r\n          }\r\n\r\n  .signup-form a:hover {\r\n                  text-decoration: none;\r\n              }\r\n\r\n  .signup-form form a {\r\n              color: #0047ab;\r\n              /* font-weight: bold; */\r\n              text-decoration: none;\r\n          }\r\n\r\n  .signup-form form a:hover {\r\n                  text-decoration: underline;\r\n              }\r\n\r\n  #btnSubmit {\r\n          background-color: #0047ab;\r\n          color: white;\r\n      }\r\n\r\n  .asterisk{\r\n          color: red;\r\n          font-style: italic;\r\n          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\r\n      }\r\n\r\n  html, body { height: 100%; }\r\n\r\n  body { margin: 0; font-family: Roboto, \"Helvetica Neue\", sans-serif; }\r\n\r\n  main > .container {\r\n          padding: 0; \r\n          max-width: 100%;\r\n          width:100% ;\r\n      }\r\n\r\n  .ng-valid[required], .ng-valid.required  {\r\n        border-left: 5px solid #42A948; /* green */\r\n      }\r\n\r\n  .ng-invalid:not(form)  {\r\n         border-left: 5px solid #a94442; /* red */\r\n      }\r\n\r\n  html, body { height: 100%; }\r\n\r\n  body { margin: 0; font-family: Roboto, \"Helvetica Neue\", sans-serif; }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9wYXRpZW50LXJlZ2lzdGVyL3BhdGllbnQtcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztFQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7RUFFQTs7Ozs7Ozs7OztVQVVVOztFQUVGLHFEQUFxRDs7RUFFckQ7O1NBRUM7O0VBRUg7VUFDSSxrQkFBa0I7TUFDdEI7O0VBRUE7VUFDSSxZQUFZO1VBQ1osY0FBYztVQUNkLGVBQWU7TUFDbkI7O0VBRUk7Y0FDSSxjQUFjO2NBQ2QsZ0JBQWdCO2NBQ2hCLGtCQUFrQjtjQUNsQixrQkFBa0I7VUFDdEI7O0VBRUk7a0JBQ0ksV0FBVztrQkFDWCxXQUFXO2tCQUNYLFVBQVU7a0JBQ1YsbUJBQW1CO2tCQUNuQixrQkFBa0I7a0JBQ2xCLFFBQVE7a0JBQ1IsVUFBVTtjQUNkOztFQUVBO2tCQUNJLE9BQU87Y0FDWDs7RUFFQTtrQkFDSSxRQUFRO2NBQ1o7O0VBRUo7Y0FDSSxXQUFXO2NBQ1gsbUJBQW1CO2NBQ25CLGtCQUFrQjtVQUN0Qjs7RUFFQTtjQUNJLFdBQVc7Y0FDWCxrQkFBa0I7Y0FDbEIsbUJBQW1CO2NBQ25CLG1CQUFtQjtjQUNuQiwwQ0FBMEM7Y0FDMUMsYUFBYTtVQUNqQjs7RUFFQTtjQUNJLG1CQUFtQjtVQUN2Qjs7RUFFQTtjQUNJLGVBQWU7VUFDbkI7O0VBRUE7Y0FDSSxlQUFlO2NBQ2YsZ0JBQWdCO2NBQ2hCLHdCQUF3QjtVQUM1Qjs7RUFFQTtjQUNJLG1CQUFtQjtVQUN2Qjs7RUFFQTtjQUNJLGtCQUFrQjtVQUN0Qjs7RUFFQTtjQUNJLFdBQVc7Y0FDWCwwQkFBMEI7VUFDOUI7O0VBRUk7a0JBQ0kscUJBQXFCO2NBQ3pCOztFQUVKO2NBQ0ksY0FBYztjQUNkLHVCQUF1QjtjQUN2QixxQkFBcUI7VUFDekI7O0VBRUk7a0JBQ0ksMEJBQTBCO2NBQzlCOztFQUVSO1VBQ0kseUJBQXlCO1VBQ3pCLFlBQVk7TUFDaEI7O0VBRUE7VUFDSSxVQUFVO1VBQ1Ysa0JBQWtCO1VBQ2xCO01BQ0o7O0VBRUEsYUFBYSxZQUFZLEVBQUU7O0VBQzNCLE9BQU8sU0FBUyxFQUFFLGlEQUFpRCxFQUFFOztFQUVyRTtVQUNJLFVBQVU7VUFDVixlQUFlO1VBQ2YsV0FBVztNQUNmOztFQUVBO1FBQ0UsOEJBQThCLEVBQUUsVUFBVTtNQUM1Qzs7RUFFQTtTQUNHLDhCQUE4QixFQUFFLFFBQVE7TUFDM0M7O0VBQ0EsYUFBYSxZQUFZLEVBQUU7O0VBQzNCLE9BQU8sU0FBUyxFQUFFLGlEQUFpRCxFQUFFIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9wYXRpZW50LXJlZ2lzdGVyL3BhdGllbnQtcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcblxyXG4gIC50YmFyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiAjMjAyNzIxOyBcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLyogIGJvZHkge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzYzNzM4YTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICM5NjlmYTQ7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIC8qIEBpbXBvcnQgJ35ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnOyAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNWNiODVjO1xyXG4gICAgICB9ICovXHJcbiAgICAgIFxyXG4gICAgICAuZm9ybS1jb250cm9sLCAuYnRuIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnNpZ251cC1mb3JtIHtcclxuICAgICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgLnNpZ251cC1mb3JtIGgyIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzYzNjM2MztcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxNXB4O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIC5zaWdudXAtZm9ybSBoMjpiZWZvcmUsIC5zaWdudXAtZm9ybSBoMjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDRkNGQ0O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAgICAgLnNpZ251cC1mb3JtIGgyOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAgICAgICAuc2lnbnVwLWZvcm0gaDI6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgLnNpZ251cC1mb3JtIC5oaW50LXRleHQge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAgIC5zaWdudXAtZm9ybSBmb3JtIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAgIC5zaWdudXAtZm9ybSAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAuc2lnbnVwLWZvcm0gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgLnNpZ251cC1mb3JtIC5idG4ge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBtaW4td2lkdGg6IDE0MHB4O1xyXG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAuc2lnbnVwLWZvcm0gLnJvdyBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgLnNpZ251cC1mb3JtIC5yb3cgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAuc2lnbnVwLWZvcm0gYSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIC5zaWdudXAtZm9ybSBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAuc2lnbnVwLWZvcm0gZm9ybSBhIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzAwNDdhYjtcclxuICAgICAgICAgICAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIC5zaWdudXAtZm9ybSBmb3JtIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAjYnRuU3VibWl0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDQ3YWI7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hc3Rlcmlza3tcclxuICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWZcclxuICAgICAgfVxyXG5cclxuICAgICAgaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgfVxyXG4gICAgICBib2R5IHsgbWFyZ2luOiAwOyBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cclxuICAgICAgXHJcbiAgICAgIG1haW4gPiAuY29udGFpbmVyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7IFxyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6MTAwJSA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKi9cclxuICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAubmctaW52YWxpZDpub3QoZm9ybSkgIHtcclxuICAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cclxuICAgICAgfVxyXG4gICAgICBodG1sLCBib2R5IHsgaGVpZ2h0OiAxMDAlOyB9XHJcbiAgICAgIGJvZHkgeyBtYXJnaW46IDA7IGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfSJdfQ== */");

/***/ }),

/***/ "q5qX":
/*!****************************************************!*\
  !*** ./src/app/services/doctor-service.service.ts ***!
  \****************************************************/
/*! exports provided: DoctorServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorServiceService", function() { return DoctorServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/config.service */ "8WNu");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DoctorServiceService = /** @class */ (function () {
    function DoctorServiceService(httpsvc, config) {
        this.httpsvc = httpsvc;
        this.config = config;
    }
    DoctorServiceService.prototype.GetAllDoctors = function () {
        console.log('service.GetAllDoctors called');
        return this.httpsvc.get(this.config.scheduleManagementAPI + "/Schedule/getalldoctors");
    };
    DoctorServiceService.prototype.GetFilteredDoctors = function (filterStr) {
        console.log('service.GetAllDoctors called');
        return this.httpsvc.get(this.config.scheduleManagementAPI + "/Schedule/getfiltereddoctors?" + filterStr);
    };
    DoctorServiceService.prototype.GetDoctorDataById = function (id, userName) {
        debugger;
        console.log('service.GetAllDoctors called');
        return this.httpsvc.get(this.config.scheduleManagementAPI + "/Schedule/getappointment?doctorId=" + id + "&patientUserName=" + userName);
    };
    DoctorServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _core_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
    ]; };
    DoctorServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _core_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], DoctorServiceService);
    return DoctorServiceService;
}());



/***/ }),

/***/ "qH2X":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth-callback/auth-callback.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"error\" class=\"row justify-content-center\">\r\n    <div class=\"col-md-8 text-center\">\r\n          <div class=\"alert alert-warning\" role=\"alert\">\r\n            Oops, there was an error, please try to <a routerLink=\"/login\">login again</a>.\r\n            <br/>\r\n            Or <a routerLink=\"/patientregister\">register</a> to create a new account.  \r\n          </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "t19f":
/*!**************************************************************************************!*\
  !*** ./src/app/patient-visit/patient-visit-doctor/patient-visit-doctor.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PatientVisitDoctorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientVisitDoctorComponent", function() { return PatientVisitDoctorComponent; });
/* harmony import */ var _raw_loader_patient_visit_doctor_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./patient-visit-doctor.component.html */ "xVjk");
/* harmony import */ var _patient_visit_doctor_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patient-visit-doctor.component.css */ "5XS/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Models_patientvisit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Models/patientvisit */ "1cn+");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/patient.service */ "7wfR");
/* harmony import */ var _Models_patientallergy1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Models/patientallergy1 */ "7KDP");
/* harmony import */ var _Models_patientdiagnosis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Models/patientdiagnosis */ "w1oO");
/* harmony import */ var _Models_patientprocedure__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Models/patientprocedure */ "Rdzm");
/* harmony import */ var _Models_patientmedication__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Models/patientmedication */ "gWVf");
/* harmony import */ var _src_app_core_ToasterPosition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../src/app/core/ToasterPosition */ "Rz6H");
/* harmony import */ var _core_ToasterService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/ToasterService */ "e+Xv");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PatientVisitDoctorComponent = /** @class */ (function () {
    function PatientVisitDoctorComponent(practitionersvc, toaster) {
        this.practitionersvc = practitionersvc;
        this.toaster = toaster;
        this.msg = "";
        this.AllergyRows = [];
        this.DiagnosisRows = [];
        this.ProcedureRows = [];
        this.MedicationRows = [];
        this.parentFun = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.patientvisitdata = [];
        this.patientAllergyData = [];
        this.patientDiagnosisData = [];
        this.patientProcedureData = [];
        this.patientMedicationData = [];
        this.fg = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            bloodpressuresystolic: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            bloodpressurediastolic: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            bodytemperature: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            respirationrate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required) //,
            // ApptID: new FormControl('',Validators.required),
            // PtID: new FormControl('',Validators.required)    
        });
    }
    PatientVisitDoctorComponent.prototype.AddAllergy = function () {
        var _this = this;
        //this.AllergyRows.push( {allergytype: this.allergytype, chkFatal: this.chkFatal==null?'false':'true' } );
        this.patienvisitallergy = new _Models_patientallergy1__WEBPACK_IMPORTED_MODULE_6__["PatientAllergy"](parseInt(this.allergytype.toString()), this.chkFatal == null ? false : true, parseInt(this.pId.toString()));
        this.ob = this.practitionersvc.SavePatientVisitAllergyData(this.patienvisitallergy);
        this.ob.subscribe(function (data) {
            console.log(data);
            console.log("Output Is: " + data["allergy"]);
            _this.msg = data["firstname"] + ", has Registered Successfully";
            _this.loadAllergyData(_this.pId);
        }, function (error) { return console.log("Error in saving patientvisitallergy data"); });
        this.allergytype = null;
        this.chkFatal = null;
    };
    PatientVisitDoctorComponent.prototype.AddDiagnosis = function () {
        var _this = this;
        // this.DiagnosisRows.push( {diagnosistype: this.diagnosistype, diagnosisdescription: this.diagnosisdescription} );    
        this.patienvisitdiagnosis = new _Models_patientdiagnosis__WEBPACK_IMPORTED_MODULE_7__["PatientDiagnosis"](parseInt(this.diagnosistype.toString()), this.diagnosisdescription, this.pId.toString(), parseInt(this.aId.toString()));
        this.ob = this.practitionersvc.SavePatientVisitDiagnosisData(this.patienvisitdiagnosis);
        this.ob.subscribe(function (data) {
            _this.msg = data["firstname"] + ", has Registered Successfully";
            _this.loadDiagnosisData(_this.aId);
        }, function (error) { return console.log("Error in saving patientvisitdiagnosis data"); });
    };
    PatientVisitDoctorComponent.prototype.AddProcedure = function () {
        var _this = this;
        //this.ProcedureRows.push( {proceduretype: this.proceduretype, proceduredescription: this.proceduredescription} );
        this.patienvisitprocedure = new _Models_patientprocedure__WEBPACK_IMPORTED_MODULE_8__["PatientProcedure"](parseInt(this.proceduretype.toString()), this.proceduredescription, this.pId.toString(), parseInt(this.aId.toString()));
        this.ob = this.practitionersvc.SavePatientVisitProcedureData(this.patienvisitprocedure);
        this.ob.subscribe(function (data) {
            console.log(data);
            console.log("Output Is: " + data["procedure"]);
            _this.msg = data["firstname"] + ", has Registered Successfully";
            _this.loadProcedureData(_this.aId);
        }, function (error) { return console.log("Error in saving patientvisitprocedure data"); });
    };
    PatientVisitDoctorComponent.prototype.AddMedication = function () {
        var _this = this;
        //this.MedicationRows.push( {medicationtype: this.medicationtype, medicationdosage: this.medicationdosage,medicationdescription: this.medicationdescription} );
        this.patienvisitmedication = new _Models_patientmedication__WEBPACK_IMPORTED_MODULE_9__["PatientMedication"](parseInt(this.medicationtype.toString()), this.description, parseInt(this.aId.toString()));
        this.ob = this.practitionersvc.SavePatientVisitMedicationData(this.patienvisitmedication);
        this.ob.subscribe(function (data) {
            console.log(data);
            console.log("Output Is: " + data["medication"]);
            _this.msg = data["firstname"] + ", has Registered Successfully";
            _this.loadMedicationData(_this.aId);
        }, function (error) { return console.log("Error in saving patientvisitmedication data"); });
    };
    PatientVisitDoctorComponent.prototype.SavePatientVisitDoctor = function () {
        var _this = this;
        var operation = "";
        console.log(this.fg.value.height);
        this.patientvisitdoctor = new _Models_patientvisit__WEBPACK_IMPORTED_MODULE_4__["PatientVisit"](parseInt(this.pId.toString()), parseInt(this.aId.toString()), parseInt(this.fg.value.height), parseInt(this.fg.value.weight), parseInt(this.fg.value.bloodpressuresystolic), parseInt(this.fg.value.bloodpressurediastolic), parseInt(this.fg.value.bodytemperature), parseInt(this.fg.value.respirationrate));
        debugger;
        if (this.patientvisitdata["id"] > 0) {
            operation = "PATCH";
            this.patientvisitdoctor.appointmentid = this.patientvisitdata["appointmentId"];
            console.log(this.patientvisitdoctor);
        }
        else {
            operation = "POST";
        }
        if (this.fg.invalid == false) {
            this.ob = this.practitionersvc.SavePatientVisitData(this.patientvisitdoctor, operation);
            this.ob.subscribe(function (data) {
                console.log(data);
                if (data != null) {
                    _this.success = true;
                    _this.sendMessage();
                    _this.toaster.success("Success", data["response"], _src_app_core_ToasterPosition__WEBPACK_IMPORTED_MODULE_10__["ToasterPosition"].topFull, _this.functioncallbackFunction);
                }
                console.log("Output Is: " + data["height"]);
                _this.msg = data["firstname"] + ", has Registered Successfully";
            }, function (error) { return console.log("Error in saving patientvisitnurse data"); });
        }
    };
    PatientVisitDoctorComponent.prototype.loadAppointmentData = function (aId) {
        var _this = this;
        this.obpv = this.practitionersvc.GetPatientVisitDataByID(this.aId);
        this.obpv.subscribe(function (pv) {
            _this.patientvisitdata = pv;
            console.log(_this.patientvisitdata);
            console.log(_this.patientvisitdata["height"]);
            _this.fg.patchValue({
                "height": _this.patientvisitdata["height"],
                "weight": _this.patientvisitdata["weight"],
                "bloodpressuresystolic": _this.patientvisitdata["bloodPressureSystolic"],
                "bloodpressurediastolic": _this.patientvisitdata["bloodPressureDiastolic"],
                "bodytemperature": _this.patientvisitdata["bodyTemperature"],
                "respirationrate": _this.patientvisitdata["respirationRate"]
            });
        }, function (error) { return console.log('fails to load nurse data'); });
    };
    PatientVisitDoctorComponent.prototype.loadAllergyData = function (pId) {
        var _this = this;
        this.AllergyRows = [];
        this.oballergy = this.practitionersvc.GetPatientAllergyDataByPatientID(this.pId);
        this.oballergy.subscribe(function (pv) {
            _this.patientAllergyData = pv;
            console.log(_this.patientAllergyData);
            for (var i = 0; i < _this.patientAllergyData.length; i++) {
                _this.AllergyRows.push({ allergytype: _this.patientAllergyData[i].allergyName,
                    chkFatal: _this.patientAllergyData[i].fatalAllergy });
            }
        }, function (error) { return console.log('fails to load allergy data'); });
    };
    PatientVisitDoctorComponent.prototype.loadDiagnosisData = function (aId) {
        var _this = this;
        this.DiagnosisRows = [];
        this.obdiagnosis = this.practitionersvc.GetPatientDiagnosisDataByAppointmentID(this.aId);
        this.obdiagnosis.subscribe(function (pv) {
            _this.patientDiagnosisData = pv;
            console.log(_this.patientDiagnosisData);
            for (var i = 0; i < _this.patientDiagnosisData.length; i++) {
                _this.DiagnosisRows.push({ diagnosiscode: _this.patientDiagnosisData[i].diagnosisCode,
                    diagnosisdescription: _this.patientDiagnosisData[i].diagnosisDescription });
            }
        }, function (error) { return console.log('fails to load allergy data'); });
    };
    PatientVisitDoctorComponent.prototype.loadProcedureData = function (aId) {
        var _this = this;
        this.ProcedureRows = [];
        this.obprocedure = this.practitionersvc.GetPatientProcedureDataByAppointmentID(this.aId);
        this.obprocedure.subscribe(function (pv) {
            _this.patientProcedureData = pv;
            console.log(_this.patientProcedureData[0]);
            for (var i = 0; i < _this.patientProcedureData.length; i++) {
                _this.ProcedureRows.push({ proceduretype: _this.patientProcedureData[i].procedureCode,
                    proceduredescription: _this.patientProcedureData[i].procedureDescription });
            }
        }, function (error) { return console.log('fails to load allergy data'); });
    };
    PatientVisitDoctorComponent.prototype.loadMedicationData = function (aId) {
        var _this = this;
        this.MedicationRows = [];
        this.obmedication = this.practitionersvc.GetPatientMedicationDataByAppointmentID(this.aId);
        this.obmedication.subscribe(function (pv) {
            _this.patientMedicationData = pv;
            console.log(_this.patientMedicationData[0]);
            for (var i = 0; i < _this.patientMedicationData.length; i++) {
                _this.MedicationRows.push({ medicationtype: _this.patientMedicationData[i].medicineStrength,
                    medicationdescription: _this.patientMedicationData[i].description });
            }
        }, function (error) { return console.log('fails to load allergy data'); });
    };
    PatientVisitDoctorComponent.prototype.ngOnInit = function () {
        this.loadAppointmentData(this.aId);
        this.loadAllergyData(this.pId);
        this.loadDiagnosisData(this.aId);
        this.loadProcedureData(this.aId);
        this.loadMedicationData(this.aId);
        // this.fg.patchValue({      
        //   "ApptID":"A0"+this.aId,
        //   "PtID":"P0"+this.pId
        // })
        this.loadDiagnosisMaster();
        this.loadProcedureMaster();
        this.loadAllergyMaster();
        this.loadMedicineMaster();
    };
    PatientVisitDoctorComponent.prototype.functioncallbackFunction = function () {
        this.success = true;
    };
    PatientVisitDoctorComponent.prototype.loadDiagnosisMaster = function () {
        var _this = this;
        this.obdiagnosismaster = this.practitionersvc.GetDiagnosisMaster();
        this.obdiagnosismaster.subscribe(function (data) {
            _this.diagnosisMaster = data;
        });
    };
    PatientVisitDoctorComponent.prototype.loadProcedureMaster = function () {
        var _this = this;
        this.obprocedure = this.practitionersvc.GetProcedureMaster();
        this.obprocedure.subscribe(function (data) {
            _this.procedureMaster = data;
        });
    };
    PatientVisitDoctorComponent.prototype.loadAllergyMaster = function () {
        var _this = this;
        this.oballergy = this.practitionersvc.GetAllergyMasterVisit();
        this.oballergy.subscribe(function (data) {
            _this.allergyMaster = data;
        });
        console.log(this.allergyMaster);
    };
    PatientVisitDoctorComponent.prototype.loadMedicineMaster = function () {
        var _this = this;
        this.obmedication = this.practitionersvc.GetMedicineMaster();
        this.obmedication.subscribe(function (data) {
            _this.medicineMaster = data;
        });
        console.log(this.medicineMaster);
    };
    PatientVisitDoctorComponent.prototype.sendMessage = function () {
        //this.messageEvent.emit(this.message);
        this.parentFun.emit();
    };
    PatientVisitDoctorComponent.prototype.DownloadPatientData = function () {
        debugger;
        this.ob = this.practitionersvc.GetExcelReport(this.aId, this.pId);
        this.ob.subscribe(function (response) {
            debugger;
            var dataType = response.type;
            var binaryData = [];
            binaryData.push(response);
            var downloadLink = document.createElement('a');
            downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: dataType }));
            var fileName = "Report_" + new Date().toLocaleString() + ".xlsx";
            downloadLink.setAttribute('download', fileName);
            document.body.appendChild(downloadLink);
            downloadLink.click();
        });
    };
    PatientVisitDoctorComponent.ctorParameters = function () { return [
        { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"] },
        { type: _core_ToasterService__WEBPACK_IMPORTED_MODULE_11__["ToasterService"] }
    ]; };
    PatientVisitDoctorComponent.propDecorators = {
        pId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        aId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        parentFun: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"], args: ["parentFun",] }]
    };
    PatientVisitDoctorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-patient-visit-doctor',
            template: _raw_loader_patient_visit_doctor_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_patient_visit_doctor_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"], _core_ToasterService__WEBPACK_IMPORTED_MODULE_11__["ToasterService"]])
    ], PatientVisitDoctorComponent);
    return PatientVisitDoctorComponent;
}());



/***/ }),

/***/ "t7eR":
/*!***************************************************************************!*\
  !*** ./src/app/scheduling/book-appointment/book-appointment.component.ts ***!
  \***************************************************************************/
/*! exports provided: BookAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookAppointmentComponent", function() { return BookAppointmentComponent; });
/* harmony import */ var _raw_loader_book_appointment_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./book-appointment.component.html */ "eW6/");
/* harmony import */ var _book_appointment_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-appointment.component.css */ "+nG1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _models_Appointment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/Appointment */ "ByO3");
/* harmony import */ var _services_doctor_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/doctor-service.service */ "q5qX");
/* harmony import */ var _services_appointment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/appointment.service */ "Oz3r");
/* harmony import */ var _core_ToasterService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/ToasterService */ "e+Xv");
/* harmony import */ var _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/ToasterPosition */ "Rz6H");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/auth.service */ "8PDw");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var BookAppointmentComponent = /** @class */ (function () {
    function BookAppointmentComponent(doctorsvc, appointmentsvc, toaster, authService) {
        this.doctorsvc = doctorsvc;
        this.appointmentsvc = appointmentsvc;
        this.toaster = toaster;
        this.authService = authService;
        this.parentFun = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.msg = "";
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            doctorname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            patientname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            appointmentdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            fromtime: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            totime: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            spetiality: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    BookAppointmentComponent.prototype.submit = function () {
        console.log('click done');
        console.log(this.userForm);
    };
    BookAppointmentComponent.prototype.getToday = function () {
        return new Date().toISOString().split('T')[0];
    };
    BookAppointmentComponent.prototype.SaveAppointmentData = function () {
        var _this = this;
        debugger;
        console.log('click done');
        console.log(this.userForm);
        this.appointmentData = new _models_Appointment__WEBPACK_IMPORTED_MODULE_4__["Appointment"](0, this.userForm.value.doctorname, this.userForm.value.patientname, this.userForm.value.appointmentdate, this.userForm.value.fromtime, this.userForm.value.totime, this.drId.toString(), this.doctorsdata["patientid"], false, "", this.userForm.value.description);
        if (this.userForm.invalid == false) {
            this.ob1 = this.appointmentsvc.SaveAppointment(this.appointmentData);
            this.ob1.subscribe(function (dataa) {
                _this.res = dataa;
                console.log(_this.res);
                if (_this.res.code == "1") {
                    _this.success = true;
                    _this.parentFun.emit();
                    _this.toaster.success("Success", _this.res.response, _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_8__["ToasterPosition"].topFull);
                }
                else {
                    _this.toaster.error("Error", _this.res.response, _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_8__["ToasterPosition"].topFull);
                }
            }, function (error) {
                _this.parentFun.emit();
                _this.toaster.error('Error', error, _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_8__["ToasterPosition"].topFull);
                console.log("Error in saving Appointment data");
            });
        }
    };
    BookAppointmentComponent.prototype.loadData = function (drId) {
        var _this = this;
        this.ob = this.doctorsvc.GetDoctorDataById(this.drId, this.authService.email);
        this.ob.subscribe(function (dr) {
            _this.doctorsdata = dr;
            console.log(_this.doctorsdata);
            _this.userForm.patchValue({
                "doctorname": "Dr. " + _this.doctorsdata["drname"],
                "patientname": "Patient1",
                "spetiality": _this.doctorsdata["speciality"]
            });
        }, function (error) { return console.log('fails to load doctors data'); });
    };
    BookAppointmentComponent.prototype.functioncallbackFunction = function () {
        this.success = true;
    };
    BookAppointmentComponent.prototype.ngOnInit = function () {
        debugger;
        console.log(this.drId);
        this.loadData(this.drId);
    };
    BookAppointmentComponent.ctorParameters = function () { return [
        { type: _services_doctor_service_service__WEBPACK_IMPORTED_MODULE_5__["DoctorServiceService"] },
        { type: _services_appointment_service__WEBPACK_IMPORTED_MODULE_6__["AppointmentService"] },
        { type: _core_ToasterService__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] },
        { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }
    ]; };
    BookAppointmentComponent.propDecorators = {
        drId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        parentFun: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"], args: ["parentFun",] }]
    };
    BookAppointmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-book-appointment',
            template: _raw_loader_book_appointment_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_book_appointment_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_doctor_service_service__WEBPACK_IMPORTED_MODULE_5__["DoctorServiceService"],
            _services_appointment_service__WEBPACK_IMPORTED_MODULE_6__["AppointmentService"], _core_ToasterService__WEBPACK_IMPORTED_MODULE_7__["ToasterService"], _core_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]])
    ], BookAppointmentComponent);
    return BookAppointmentComponent;
}());



/***/ }),

/***/ "vtrx":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "w1oO":
/*!********************************************!*\
  !*** ./src/app/Models/patientdiagnosis.ts ***!
  \********************************************/
/*! exports provided: PatientDiagnosis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientDiagnosis", function() { return PatientDiagnosis; });
var PatientDiagnosis = /** @class */ (function () {
    function PatientDiagnosis(DiagnosisId, diagnosisDescription, patientid, AppointmentId, diagnosisCode) {
        if (DiagnosisId === void 0) { DiagnosisId = 0; }
        if (diagnosisDescription === void 0) { diagnosisDescription = ""; }
        if (patientid === void 0) { patientid = ""; }
        if (AppointmentId === void 0) { AppointmentId = 0; }
        if (diagnosisCode === void 0) { diagnosisCode = ""; }
        this.DiagnosisId = DiagnosisId;
        this.diagnosisDescription = diagnosisDescription;
        this.patientid = patientid;
        this.AppointmentId = AppointmentId;
        this.diagnosisCode = diagnosisCode;
    }
    return PatientDiagnosis;
}());



/***/ }),

/***/ "w6Xq":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scheduling/schedule/schedule.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"form-group\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xl-3\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>City</mat-label>\r\n                        <mat-select #cmbcity>\r\n                          <mat-option>None</mat-option>\r\n                          <mat-option *ngFor=\"let City of City\" [value]=\"City\">{{City}}</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                <div class=\"col-xl-3\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>Speciality</mat-label>\r\n                        <mat-select #cmbspeciality>\r\n                          <mat-option>None</mat-option>\r\n                          <mat-option *ngFor=\"let speciality of speciality\" [value]=\"speciality\">{{speciality}}</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                </div>\r\n                <div class=\"col-xl-3\">\r\n                    <label for=\"role\">Gender: </label><br />\r\n                    <mat-radio-group aria-label=\"Select an option\" (change)=\"onChange($event)\">\r\n                      <mat-radio-button value=\"M\">Male</mat-radio-button>\r\n                      <mat-radio-button value=\"F\" style=\"margin-left: 10px;\">Female</mat-radio-button>\r\n                    </mat-radio-group>\r\n                </div>\r\n                <div class=\"col-xl-3\">\r\n                  <button class=\"btn btn-success\" style=\"float: center;\" (click)=\"GetFilterData()\">Search</button>\r\n               </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- <div class=\"divcard col-sm-12\">\r\n            <div style=\"padding-bottom: 15px;\" *ngFor=\"let dr of doctorsdata\">\r\n            <div class=\"card drcard\" >\r\n              <div class=\"card-body\">\r\n          <table class=\"col-sm-12\" style=\"width: 100%;\">\r\n            <tr>\r\n              <td class=\"cardcol1\"><h3>Name: Dr. {{dr.firstName}} {{dr.lastName}}</h3></td>\r\n              <td class=\"cardcol2\"><h3>City: {{dr.city}}</h3></td>\r\n              <td class=\"cardcol3\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"cardcol1\"><h3>Contact: {{dr.phoneNo}}</h3></td>\r\n              <td class=\"cardcol2\"><h3>Speciality: {{dr.speciality}}</h3></td>\r\n              <td class=\"cardcol3\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"cardcol1\"><h3>Email: {{dr.emailId}}</h3></td>\r\n              <td class=\"cardcol2\"><h3>Gender: {{dr.gender}}</h3></td>\r\n              <td class=\"cardcol3\"><button class=\"btn btn-success\" style=\"float: right;\" (click)=\"open(content,dr.id)\">Book Appointment</button></td>\r\n            </tr>\r\n          </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          </div> -->\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n          <div class=\"card col-md-3 mx-auto my-5\" style=\"width: 18rem\" *ngFor=\"let dr of doctorsdata\">\r\n          <div *ngIf=\"dr.gender=='M'; else elseBlock\">\r\n            <img style=\"height: 150px\"\r\n              src=\"../../../assets/img/MaleDrIcon.png\"\r\n              class=\"card-img-top\"\r\n              alt=\"...\"\r\n            /></div>\r\n            <ng-template #elseBlock>\r\n            <img style=\"height: 150px\" \r\n            src=\"../../../assets/img/FemaleDrIcon.png\"\r\n            class=\"card-img-top\"\r\n            alt=\"...\"\r\n          /></ng-template>\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\" style=\"font-weight: bold;\">Dr. {{dr.firstName}} {{dr.lastName}}</h5>\r\n            </div>\r\n            <ul class=\"list-group list-group-flush\" style=\"padding: 0%;\">\r\n              <li class=\"list-group-item\"><span style=\"font-weight: bold;\">Contact:</span> {{dr.phoneNo}}</li>\r\n              <li class=\"list-group-item\"><span style=\"font-weight: bold;\">Email:</span> {{dr.emailId}}</li>\r\n              <li class=\"list-group-item\"><span style=\"font-weight: bold;\">City:</span> {{dr.city}}</li>\r\n              <li class=\"list-group-item\"><span style=\"font-weight: bold;\">Speciality:</span> {{dr.speciality}}</li>\r\n              <li class=\"list-group-item\"><span style=\"font-weight: bold;\">Gender:</span> {{dr.gender}}</li>\r\n            </ul>\r\n            <div class=\"card-body\">\r\n              <button class=\"btn btn-success\" (click)=\"open(content,dr.id)\">Book Appointment</button>\r\n            </div>\r\n          </div>\r\n            </div>\r\n          </div>\r\n        \r\n        </div>\r\n</div>\r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <!-- <div class=\"appointment-model\" [ngClass]=\"{'ModelPopUpClass': true}\"> -->\r\n      <!-- <h4 class=\"modal-title\" id=\"modal-basic-title\">Create new doctor account</h4> -->\r\n      <div>\r\n      <button type=\"button\" class=\"close btn-close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n        <span aria-hidden=\"true\">&times; &nbsp;</span>\r\n      </button>\r\n    </div>\r\n    <!-- </div> -->\r\n    <!-- <div class=\"modal-body\" [ngClass]=\"{'ModelPopUpClass': true}\" style=\"width: 800px;\"> -->\r\n      <app-book-appointment (parentFun)=\"receiveMessage()\" [drId]=\"drIdForAppointment\"></app-book-appointment>\r\n     <!-- </div>  -->\r\n  </ng-template>");

/***/ }),

/***/ "xVjk":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient-visit/patient-visit-doctor/patient-visit-doctor.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-danger\">\r\n                        <h4 class=\"card-title\">Patient Visit Data</h4>\r\n                        <p class=\"card-category\"></p>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <form class=\"form-group\" [formGroup]=\"fg\" (ngSubmit)=\"SavePatientVisitDoctor()\">\r\n                            <mat-tab-group dynamicHeight>\r\n                                <!-- <mat-tab label=\"Patient Details\">\r\n                                    <br>                                \r\n                                    <fieldset>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"ApptID\">AppointmentID: <span class=\"asterisk\"> *</span></label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"ApptID\" formControlName=\"ApptID\" disabled>                        \r\n                                                </div>\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"PtID\">PatientID: <span class=\"asterisk\"> *</span></label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"PtID\" formControlName=\"PtID\" disabled>                        \r\n                                                </div>\r\n                                            </div>\r\n                                        </div> \r\n                                    </fieldset>\r\n                                </mat-tab> -->\r\n                                <mat-tab label=\"Vital Signs\">\r\n                                    <br>                                \r\n                                    <fieldset>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"height\">Height (in cms): <span class=\"asterisk\"> *</span></label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"height\" formControlName=\"height\">                        \r\n                                                </div>\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"weight\">Weight (in kgs): <span class=\"asterisk\"> *</span></label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"weight\" formControlName=\"weight\">                        \r\n                                                </div>\r\n                                            </div>            \r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"bloodpressuresystolic\">Blood Pressure Systolic (in mmHg): <span class=\"asterisk\"> *</span></label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"bloodpressuresystolic\" formControlName=\"bloodpressuresystolic\">                        \r\n                                                </div>\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"bloodpressurediastolic\">Blood Pressure Diastolic (in mmHg): <span class=\"asterisk\"> *</span></label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"bloodpressurediastolic\" formControlName=\"bloodpressurediastolic\">                        \r\n                                                </div>\r\n                                            </div>            \r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"temperature\">Body Temperature (in celsius): <span class=\"asterisk\"> *</span></label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"bodytemperature\" formControlName=\"bodytemperature\">                        \r\n                                                </div>\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"respirationrate\">Respiration Rate (in BPM): <span class=\"asterisk\"> *</span></label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"respirationrate\" formControlName=\"respirationrate\">                        \r\n                                                </div>\r\n                                            </div>                        \r\n                                        </div>\r\n\r\n                                    </fieldset>\r\n                                </mat-tab>\r\n                                <mat-tab label=\"Allergies\">\r\n                                    <br>\r\n                                    <fieldset>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"Allergytype\">Allergy Type: <span class=\"asterisk\"> *</span></label>\r\n                                                    <select class=\"custom-select\" [(ngModel)]=\"allergytype\" [ngModelOptions]=\"{standalone: true}\" aria-label=\"Default select example\">\r\n                                                        <option selected>Select Allergy Type</option>\r\n                                                        <option *ngFor=\"let allergy of allergyMaster\" [value]=\"allergy.id\">{{allergy.allergyName}}</option>\r\n                                                      </select>                                                      \r\n                                                      <!-- <input type=\"text\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"name\" /> -->\r\n                                                </div>                \r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"fatalallergy\">Fatal Allergy? <span class=\"asterisk\"> *</span></label><br>\r\n                                                    <input type=\"checkbox\" id=\"chkFatal\" name=\"chkFatal\" [(ngModel)]=\"chkFatal\" [ngModelOptions]=\"{standalone: true}\" value=\"True\">                    \r\n                                                    <!-- <label class=\"radio-inline\"><input type=\"radio\" [(ngModel)]=\"year\" [ngModelOptions]=\"{standalone: true}\" name=\"optradio\" checked>True</label>\r\n                                                    <label class=\"radio-inline\"><input type=\"radio\" [(ngModel)]=\"year\" [ngModelOptions]=\"{standalone: true}\" name=\"optradio\">False</label>                     -->\r\n                                                    <!-- <input type=\"text\" [(ngModel)]=\"year\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"year\" /> -->\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">            \r\n                                            <button id=\"btnSubmitAllergy\" type=\"button\" (click)=\"AddAllergy()\" class=\"btn\">Add Allergy</button>\r\n                                        </div>\r\n                                        <div class=\"form-group\">            \r\n                                            <table class=\"table table-hover table-striped table-bordered\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>Allergy</th><th>Fatal Allergy?</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let row of AllergyRows\">                  \r\n                                                        <td>{{row.allergytype}}</td>\r\n                                                        <td>{{row.chkFatal}}</td>\r\n                                                      </tr>\r\n                                                </tbody>                                \t\t\t\t\r\n                                            </table>\r\n                                        </div>\r\n\r\n                                    </fieldset>\r\n                                </mat-tab>\r\n                                <mat-tab label=\"Diagnosis\">\r\n                                    <br>\r\n                                    <fieldset>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"Title\">Diagnosis: <span class=\"asterisk\"> *</span></label>\r\n                                                    <select class=\"custom-select\" [(ngModel)]=\"diagnosistype\" [ngModelOptions]=\"{standalone: true}\" aria-label=\"Default select example\">\r\n                                                        <option selected>Select Diagnosis</option>\r\n                                                        <option *ngFor=\"let diagnosis of diagnosisMaster\" [value]=\"diagnosis.id\">{{diagnosis.diagnosisCode}}</option>\r\n                                                      </select>\r\n                                                </div>                \r\n                                                <!-- <div class=\"col-xs-8\">\r\n                                                    <label for=\"DiagnosisDescription\">Diagnosis Description: <span class=\"asterisk\"> *</span></label>\r\n                                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"diagnosisdescription\" [ngModelOptions]=\"{standalone: true}\"/>\r\n                                                    <span class=\"asterisk\" *ngIf=\"fg.get('lastname').touched && fg.get('lastname').errors?.required\">\r\n                                                        LastName is required!\r\n                                                    </span>\r\n                                                </div> -->\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">            \r\n                                            <button id=\"btnSubmit\" type=\"button\" (click)=\"AddDiagnosis()\" class=\"btn\">Add Diagnosis</button>\r\n                                        </div>\r\n                                        <div class=\"form-group\">            \r\n                                            <table class=\"table table-hover table-striped table-bordered\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>Diagnosis</th><th>Diagnosis Description</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let row of DiagnosisRows\">                  \r\n                                                        <td>{{row.diagnosiscode}}</td>\r\n                                                        <td>{{row.diagnosisdescription}}</td>\r\n                                                      </tr>                    \r\n                                                </tbody>                                \t\t\t\t\r\n                                            </table>          \r\n                                        </div>\r\n                                    </fieldset>\r\n                                </mat-tab>\r\n                                <mat-tab label=\"Procedure\">\r\n                                    <br>\r\n                                    <fieldset>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <label for=\"Title\">Procedure: <span class=\"asterisk\"> *</span></label>\r\n                                                    <select class=\"custom-select\" [(ngModel)]=\"proceduretype\" [ngModelOptions]=\"{standalone: true}\" aria-label=\"Default select example\">\r\n                                                        <option selected>Select Procedure</option>\r\n                                                        <option *ngFor=\"let procedure of procedureMaster\" [value]=\"procedure.id\">{{procedure.procedureCode}}</option>\r\n                                                      </select>\r\n                                                </div>                \r\n                                                <!-- <div class=\"col-xs-8\">\r\n                                                    <label for=\"lastname\">Procedure Description: <span class=\"asterisk\"> *</span></label>\r\n                                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"proceduredescription\" [ngModelOptions]=\"{standalone: true}\"/>\r\n                                                    <span class=\"asterisk\" *ngIf=\"fg.get('lastname').touched && fg.get('lastname').errors?.required\">\r\n                                                        LastName is required!\r\n                                                    </span>\r\n                                                </div> -->\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">            \r\n                                            <button id=\"btnSubmit\" type=\"button\" (click)=\"AddProcedure()\" class=\"btn\">Add Procedure</button>\r\n                                        </div>\r\n                                        <div class=\"form-group\">            \r\n                                            <table class=\"table table-hover table-striped table-bordered\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>Procedure</th><th>Procedure Description</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let row of ProcedureRows\">                  \r\n                                                        <td>{{row.proceduretype}}</td>\r\n                                                        <td>{{row.proceduredescription}}</td>\r\n                                                      </tr>                    \r\n                                                </tbody>                                \t\t\t\t\r\n                                            </table>               \r\n                                        </div>\r\n                                    </fieldset>\r\n                                </mat-tab>\r\n                                <mat-tab label=\"Medication\">\r\n                                    <br>\r\n                                    <fieldset>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-5\">\r\n                                                    <label for=\"Title\">Medication: <span class=\"asterisk\"> *</span></label>\r\n                                                    <select class=\"custom-select\" [(ngModel)]=\"medicationtype\" [ngModelOptions]=\"{standalone: true}\" aria-label=\"Default select example\">\r\n                                                        <option selected>Select Medication</option>\r\n                                                        <option *ngFor=\"let medicine of medicineMaster\" [value]=\"medicine.id\">{{medicine.medicineStrength}}</option>\r\n                                                      </select>\r\n                                                </div>                                                 \r\n                                                <div class=\"col-sm-7\">\r\n                                                    <label for=\"lastname\">Medication Description: <span class=\"asterisk\"> *</span></label>\r\n                                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"description\" [ngModelOptions]=\"{standalone: true}\"/>\r\n                                                    <!-- <span class=\"asterisk\" *ngIf=\"fg.get('lastname').touched && fg.get('lastname').errors?.required\">\r\n                                                        LastName is required!\r\n                                                    </span> -->\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">            \r\n                                            <button id=\"btnSubmit\" type=\"button\" (click)=\"AddMedication()\" class=\"btn\">Add Medication</button>\r\n                                        </div>\r\n                                        <div class=\"form-group\">            \r\n                                            <table class=\"table table-hover table-striped table-bordered\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>Medication</th><th>Medication Description</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let row of MedicationRows\">                  \r\n                                                        <td>{{row.medicationtype}}</td>                        \r\n                                                        <td>{{row.medicationdescription}}</td>\r\n                                                      </tr>                    \r\n                                                </tbody>                                \t\t\t\t\r\n                                            </table>        \r\n                                        </div>\r\n                                    </fieldset>\r\n\r\n                                </mat-tab>\r\n                                \r\n                            </mat-tab-group>\r\n                            <div class=\"form-group\">            \r\n                                <button id=\"btnFormSubmit\" type=\"submit\" value=\"Submit\" class=\"btn btn-success\">Submit</button>\r\n                                <button type=\"button\" class=\"btn btn-success\" (click)=\"DownloadPatientData()\">Export</button>\r\n                            </div>                            \r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "xgrZ":
/*!********************************************************************************!*\
  !*** ./src/app/scheduling/appointment-action/appointment-action.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxpbmcvYXBwb2ludG1lbnQtYWN0aW9uL2FwcG9pbnRtZW50LWFjdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "xrIu":
/*!**************************************************!*\
  !*** ./src/app/Models/PatientDemographicData.ts ***!
  \**************************************************/
/*! exports provided: PatientDemographicData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientDemographicData", function() { return PatientDemographicData; });
var PatientDemographicData = /** @class */ (function () {
    function PatientDemographicData(id, race, ethnicity, languagesKnown, address, nomineeFirstName, nomineeLastName, nomineeEmail, nomineeRelationship, nomineeContact, nomineeAddress, isNeedportalAccess, patientid) {
        if (id === void 0) { id = 0; }
        if (race === void 0) { race = ""; }
        if (ethnicity === void 0) { ethnicity = ""; }
        if (languagesKnown === void 0) { languagesKnown = ""; }
        if (address === void 0) { address = ""; }
        if (nomineeFirstName === void 0) { nomineeFirstName = ""; }
        if (nomineeLastName === void 0) { nomineeLastName = ""; }
        if (nomineeEmail === void 0) { nomineeEmail = ""; }
        if (nomineeRelationship === void 0) { nomineeRelationship = ""; }
        if (nomineeContact === void 0) { nomineeContact = ""; }
        if (nomineeAddress === void 0) { nomineeAddress = ""; }
        if (isNeedportalAccess === void 0) { isNeedportalAccess = false; }
        if (patientid === void 0) { patientid = 0; }
        this.id = id;
        this.race = race;
        this.ethnicity = ethnicity;
        this.languagesKnown = languagesKnown;
        this.address = address;
        this.nomineeFirstName = nomineeFirstName;
        this.nomineeLastName = nomineeLastName;
        this.nomineeEmail = nomineeEmail;
        this.nomineeRelationship = nomineeRelationship;
        this.nomineeContact = nomineeContact;
        this.nomineeAddress = nomineeAddress;
        this.isNeedportalAccess = isNeedportalAccess;
        this.patientid = patientid;
    }
    return PatientDemographicData;
}());



/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "KKA+");
/* harmony import */ var _sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.component.css */ "2DHQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/auth.service */ "8PDw");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ROUTES = [
// { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
// { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
// { path: '/calendar', title: 'Calendar',  icon:'calendar_view_month', class: 'calendar' },
// { path: '/doctor', title: 'Doctors',  icon:'medical_services', class: 'doctor' },
// { path: '/nurse', title: 'Nurses',  icon:'medical_services', class: 'nurse' },
// { path: '/patient', title: 'Patients',  icon:'medical_services', class: 'patient' },
// //{ path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
// //{ path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
// //{ path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
// //{ path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
// { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' }
// //{ path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authService) {
        this.authService = authService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        //debugger;
        if (this.authService.isAuthenticated) {
            this.initRole();
        }
        // this.menuItems = ROUTES.filter(menuItem => menuItem);
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.prototype.initRole = function () {
        var _this = this;
        this.authService.getUserRole(this.authService.email)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
        }))
            .subscribe(function (result) {
            if (result) {
                //debugger;
                _this.res = result;
                _this.authService.userrole = _this.res.role;
                _this.role = _this.res.role;
                _this.setMenu();
            }
        }, function (error) {
        });
    };
    SidebarComponent.prototype.setMenu = function () {
        switch (this.role) {
            case "admin":
                ROUTES = [
                    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
                    { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
                    { path: '/doctor', title: 'Doctors', icon: 'medical_services', class: 'doctor' },
                    { path: '/nurse', title: 'Nurses', icon: 'medical_services', class: 'nurse' },
                    { path: '/patient', title: 'Patients', icon: 'medical_services', class: 'patient' }
                ];
                break;
            case "patient":
                ROUTES = [
                    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
                    { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
                    { path: '/calendar', title: 'Calendar', icon: 'calendar_view_month', class: 'calendar' }, ,
                    { path: '/viewdata', title: 'My Details', icon: 'person', class: '' },
                    { path: '/schedule', title: 'Book Appointment', icon: 'note_alt', class: '' },
                    { path: '/visithistorydata', title: 'Visit History', icon: 'history', class: '' },
                    { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' }
                ];
                break;
            case "doctor":
                ROUTES = [
                    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
                    { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
                    { path: '/calendar', title: 'Calendar', icon: 'calendar_view_month', class: 'calendar' }, ,
                    { path: '/viewappointment', title: 'View Appointments', icon: 'medical_services', class: '' },
                    { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' }
                ];
                break;
            case "nurse":
                ROUTES = [
                    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
                    { path: '/viewappointment', title: 'View Appointments', icon: 'medical_services', class: '' },
                    { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' }
                ];
                break;
            default:
                ROUTES = [
                    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' }
                ];
                break;
        }
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sidebar',
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "zMXD":
/*!*************************************************************************!*\
  !*** ./src/app/patient/visithistorydata/visithistorydata.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".th-font\r\n{\r\n    font-size: 15px;\r\n    font-weight :bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC92aXNpdGhpc3RvcnlkYXRhL3Zpc2l0aGlzdG9yeWRhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGF0aWVudC92aXNpdGhpc3RvcnlkYXRhL3Zpc2l0aGlzdG9yeWRhdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aC1mb250XHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0IDpib2xkO1xyXG59Il19 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/*!

=========================================================
* Material Dashboard Angular - v2.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-angular2
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-angular2/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map