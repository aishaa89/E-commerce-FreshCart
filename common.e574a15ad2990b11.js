"use strict";(self.webpackChunkfreshCart=self.webpackChunkfreshCart||[]).push([[592],{2527:(d,h,n)=>{n.d(h,{e:()=>l});class a extends Error{}a.prototype.name="InvalidTokenError";var f=n(4769),i=n(9862);let l=(()=>{class r{constructor(t){this._HttpClient=t,this.baseUrl="https://ecommerce.routemisr.com"}signUp(t){return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/signup`,t)}Login(t){return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/signin`,t)}decodeUserToken(){let t=localStorage.getItem("userToken");if(null!==t){let o=function s(r,c){if("string"!=typeof r)throw new a("Invalid token specified: must be a string");c||(c={});const t=!0===c.header?0:1,o=r.split(".")[t];if("string"!=typeof o)throw new a(`Invalid token specified: missing part #${t+1}`);let g;try{g=function p(r){let c=r.replace(/-/g,"+").replace(/_/g,"/");switch(c.length%4){case 0:break;case 2:c+="==";break;case 3:c+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function e(r){return decodeURIComponent(atob(r).replace(/(.)/g,(c,t)=>{let o=t.charCodeAt(0).toString(16).toUpperCase();return o.length<2&&(o="0"+o),"%"+o}))}(c)}catch{return atob(c)}}(o)}catch(u){throw new a(`Invalid token specified: invalid base64 for part #${t+1} (${u.message})`)}try{return JSON.parse(g)}catch(u){throw new a(`Invalid token specified: invalid json for part #${t+1} (${u.message})`)}}(t);this.userinfo=o,console.log(this.userinfo)}}static#e=this.\u0275fac=function(o){return new(o||r)(f.LFG(i.eN))};static#t=this.\u0275prov=f.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()},6072:(d,h,n)=>{n.d(h,{t:()=>p});var a=n(4769),e=n(9862);let p=(()=>{class s{constructor(i){this._HttpClient=i,this.header={token:localStorage.getItem("userToken")||"null"},this.baseUrl="https://ecommerce.routemisr.com"}checkOut(i,l){return this._HttpClient.post(`${this.baseUrl}/api/v1/orders/checkout-session/${i}?url=https://e-commerce-fresh-cart.netlify.app`,{shippingAddress:l},{headers:this.header})}getUserOrders(i){return this._HttpClient.get(`${this.baseUrl}/api/v1/orders/user/${i}`)}static#e=this.\u0275fac=function(l){return new(l||s)(a.LFG(e.eN))};static#t=this.\u0275prov=a.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},7913:(d,h,n)=>{n.d(h,{c:()=>p});var a=n(6814),e=n(4769);let p=(()=>{class s{static#e=this.\u0275fac=function(l){return new(l||s)};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-footer"]],standalone:!0,features:[e.jDz],decls:13,vars:0,consts:[[1,"bg-main-light","py-4","mt-3"],[1,"container"],[1,"text-muted"],[1,"d-flex","gap-3"],["type","email","placeholder","Email....",1,"form-control"],[1,"main-btn","flex-shrink-0"],[1,"h6","text-center"]],template:function(l,r){1&l&&(e.TgZ(0,"footer",0)(1,"div",1)(2,"h2"),e._uU(3,"The Fresh Cart App"),e.qZA(),e.TgZ(4,"p",2),e._uU(5,"We will send you a link "),e.qZA(),e.TgZ(6,"div",3),e._UZ(7,"input",4),e.TgZ(8,"button",5),e._uU(9,"share App Link"),e.qZA()(),e._UZ(10,"hr"),e.TgZ(11,"h3",6),e._uU(12,"\xa9 2024 Aisha Ahmed All Rights Reserved"),e.qZA()()())},dependencies:[a.ez],styles:["[_nghost-%COMP%]{margin-top:auto}"]})}return s})()}}]);