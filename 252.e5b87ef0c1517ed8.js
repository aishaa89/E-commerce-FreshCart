"use strict";(self.webpackChunkfreshCart=self.webpackChunkfreshCart||[]).push([[252],{1252:(T,l,i)=>{i.r(l),i.d(l,{ForgetpasswordComponent:()=>F});var m=i(6814),r=i(95),t=i(4769),c=i(9862);let p=(()=>{class s{constructor(e){this._HttpClient=e,this.baseUrl="https://ecommerce.routemisr.com"}forgotPAssword(e){return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/forgotPasswords`,e)}ResetCode(e){return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/verifyResetCode`,e)}ResetPassword(e){return this._HttpClient.put(`${this.baseUrl}/api/v1/auth/resetPassword`,e)}static#t=this.\u0275fac=function(o){return new(o||s)(t.LFG(c.eN))};static#e=this.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var u=i(2425),f=i(1120);function g(s,a){1&s&&(t.TgZ(0,"p",9),t._uU(1,"Email is Required"),t.qZA())}function d(s,a){1&s&&(t.TgZ(0,"p",9),t._uU(1,"Email must be valid"),t.qZA())}function _(s,a){if(1&s&&(t.TgZ(0,"div",7),t.YNc(1,g,2,0,"p",8),t.YNc(2,d,2,0,"p",8),t.qZA()),2&s){const e=t.oxw(2);let o,n;t.xp6(1),t.Q6J("ngIf",null==(o=e.forgotform.get("email"))||null==o.errors?null:o.errors.required),t.xp6(1),t.Q6J("ngIf",null==(n=e.forgotform.get("email"))||null==n.errors?null:n.errors.email)}}function w(s,a){if(1&s&&(t.TgZ(0,"p",7),t._uU(1),t.qZA()),2&s){const e=t.oxw(2);t.xp6(1),t.Oqu(e.userMessage)}}function h(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"section",1)(1,"form",2),t.NdJ("ngSubmit",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.forgotPassword())}),t.TgZ(2,"label",3),t._uU(3,"Your email:"),t.qZA(),t._UZ(4,"input",4),t.YNc(5,_,3,2,"div",5),t.YNc(6,w,2,1,"p",5),t.TgZ(7,"button",6),t._uU(8,"forgotPassword"),t.qZA()()()}if(2&s){const e=t.oxw();let o;t.xp6(1),t.Q6J("formGroup",e.forgotform),t.xp6(4),t.Q6J("ngIf",(null==(o=e.forgotform.get("email"))?null:o.touched)&&(null==(o=e.forgotform.get("email"))?null:o.errors)),t.xp6(1),t.Q6J("ngIf",e.userMessage)}}function x(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"section",1)(1,"form",2),t.NdJ("ngSubmit",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.resetCode())}),t.TgZ(2,"label",10),t._uU(3,"reset Code"),t.qZA(),t._UZ(4,"input",11),t.TgZ(5,"button",6),t._uU(6,"Reset Code"),t.qZA()()()}if(2&s){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.resetform)}}function C(s,a){1&s&&(t.TgZ(0,"span"),t._uU(1," Reset Password "),t.qZA())}function b(s,a){1&s&&t._UZ(0,"i",16)}function Z(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"section",1)(1,"form",2),t.NdJ("ngSubmit",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.resetNewPassword())}),t.TgZ(2,"label",12),t._uU(3,"Reset Password"),t.qZA(),t._UZ(4,"input",13),t.TgZ(5,"button",6),t.YNc(6,C,2,0,"span",14),t.YNc(7,b,1,0,"i",15),t.qZA()()()}if(2&s){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.resetPassword),t.xp6(5),t.Q6J("ngIf",!e.isloading),t.xp6(1),t.Q6J("ngIf",e.isloading)}}let F=(()=>{class s{constructor(e,o,n){this._ForgotpasswordService=e,this._toaste=o,this._Router=n,this.email="",this.step1=!0,this.step2=!1,this.step3=!1,this.userMessage="",this.isloading=!1,this.forgotform=new r.cw({email:new r.NI(null,[r.kI.required,r.kI.email])}),this.resetform=new r.cw({resetCode:new r.NI(null,[r.kI.required])}),this.resetPassword=new r.cw({newPassword:new r.NI(null,[r.kI.required])})}forgotPassword(){let e=this.forgotform.value;this.email=e.email,this._ForgotpasswordService.forgotPAssword(e).subscribe({next:o=>{console.log(o),this._toaste.success(o.status," ",{timeOut:1500,progressBar:!0,positionClass:"toast-bottom-right"}),this.step1=!1,this.step2=!0},error:o=>{console.log(o),this.userMessage=o.error.message}})}resetCode(){this._ForgotpasswordService.ResetCode(this.resetform.value).subscribe({next:o=>{console.log(o),this._toaste.success(o.status," ",{timeOut:1500,progressBar:!0,positionClass:"toast-bottom-right"}),this.step2=!1,this.step3=!0},error:o=>{console.log(o),this.userMessage=o.error.message}})}resetNewPassword(){this.isloading=!0;let e=this.resetPassword.value;e.email=this.email,this._ForgotpasswordService.ResetPassword(e).subscribe({next:o=>{console.log(o),o.token&&(localStorage.setItem("userToken",o.token),this._Router.navigate(["/home"]),this.isloading=!1)},error:o=>{console.log(o)}})}static#t=this.\u0275fac=function(o){return new(o||s)(t.Y36(p),t.Y36(u._W),t.Y36(f.F0))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-forgetpassword"]],standalone:!0,features:[t.jDz],decls:3,vars:3,consts:[["class","w-75 mx-auto bg-light mt-5 p-5 shadow rounded",4,"ngIf"],[1,"w-75","mx-auto","bg-light","mt-5","p-5","shadow","rounded"],[3,"formGroup","ngSubmit"],["for","email",1,"text-main","fw-bold"],["formControlName","email","id","email","name","email","type","email",1,"form-control"],["class","alert alert-danger mt-2 p-1",4,"ngIf"],[1,"btn","btn-success","bg-main","mt-2","ms-auto","d-block"],[1,"alert","alert-danger","mt-2","p-1"],["class","mb-0",4,"ngIf"],[1,"mb-0"],["for","resetCode",1,"text-main","fw-bold"],["formControlName","resetCode","id","resetCode","name","resetCode","type","text",1,"form-control"],["for","newPassword",1,"text-main","fw-bold"],["formControlName","newPassword","id","newPassword","name","newPassword","type","password",1,"form-control"],[4,"ngIf"],["class","fa fa-spin fa-spinner",4,"ngIf"],[1,"fa","fa-spin","fa-spinner"]],template:function(o,n){1&o&&(t.YNc(0,h,9,3,"section",0),t.YNc(1,x,7,1,"section",0),t.YNc(2,Z,8,3,"section",0)),2&o&&(t.Q6J("ngIf",n.step1),t.xp6(1),t.Q6J("ngIf",n.step2),t.xp6(1),t.Q6J("ngIf",n.step3))},dependencies:[m.ez,m.O5,r.UX,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]})}return s})()}}]);