"use strict";(self.webpackChunkfreshCart=self.webpackChunkfreshCart||[]).push([[188],{779:(I,f,l)=>{l.d(f,{N:()=>T});var g=l(5619),_=l(4769),e=l(9862),p=l(2425);let T=(()=>{class o{constructor(d,x){this._HttpClient=d,this.toastr=x,this.baseUrl="https://ecommerce.routemisr.com",this.numberofcartItems=new g.X(0)}addToCart(d){return this._HttpClient.post(`${this.baseUrl}/api/v1/cart`,{productId:d})}getLoggedUserCart(){return this._HttpClient.get(`${this.baseUrl}/api/v1/cart`)}removeItemFromCart(d){return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart/${d}`)}removeCart(){return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart`)}updateCartProductQuantity(d,x){return this._HttpClient.put(`${this.baseUrl}/api/v1/cart/${d}`,{count:x})}static#e=this.\u0275fac=function(x){return new(x||o)(_.LFG(e.eN),_.LFG(p._W))};static#t=this.\u0275prov=_.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},8439:(I,f,l)=>{l.d(f,{s:()=>e});var g=l(4769),_=l(9862);let e=(()=>{class p{constructor(o){this._HttpClient=o,this.baseUrl="https://ecommerce.routemisr.com"}getAllProducts(o=1){return this._HttpClient.get(`${this.baseUrl}/api/v1/products?page=${o}`)}getAllCategories(){return this._HttpClient.get(`${this.baseUrl}/api/v1/categories`)}GetAllSubCategoriesOnCategory(o){return this._HttpClient.get(`${this.baseUrl}/api/v1/categories/${o}/subcategories`)}GetCategoryById(o){return this._HttpClient.get(`${this.baseUrl}/api/v1/categories/${o}`)}getProductById(o){return this._HttpClient.get(`${this.baseUrl}/api/v1/products/${o}`)}getAllBrands(){return this._HttpClient.get(`${this.baseUrl}/api/v1/brands`)}getBrandByID(o){return this._HttpClient.get(`${this.baseUrl}/api/v1/brands/${o}`)}static#e=this.\u0275fac=function(P){return new(P||p)(g.LFG(_.eN))};static#t=this.\u0275prov=g.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()},1171:(I,f,l)=>{l.d(f,{M:()=>e});var g=l(4769),_=l(9862);let e=(()=>{class p{constructor(o){this._HttpClient=o,this.baseUrl="https://ecommerce.routemisr.com",this.header={token:localStorage.getItem("userToken")||"null"}}AddProductToWishList(o){return this._HttpClient.post(`${this.baseUrl}/api/v1/wishlist`,{productId:o},{headers:this.header})}GetloggedUserToWishList(){return this._HttpClient.get(`${this.baseUrl}/api/v1/wishlist`,{headers:this.header})}RemoveProductFromWishList(o){return this._HttpClient.delete(`${this.baseUrl}/api/v1/wishlist/${o}`,{headers:this.header})}static#e=this.\u0275fac=function(P){return new(P||p)(g.LFG(_.eN))};static#t=this.\u0275prov=g.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()},2188:(I,f,l)=>{l.r(f),l.d(f,{ProductsComponent:()=>j});var g=l(6814),_=l(1120),e=l(4769);function p(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.previous())})("click",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.previous())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function T(i,a){if(1&i&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function o(i,a){if(1&i&&(e.TgZ(0,"li",9),e.YNc(1,p,4,2,"a",10),e.YNc(2,T,4,2,"span",11),e.qZA()),2&i){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isFirstPage()),e.xp6(1),e.Q6J("ngIf",1<t.getCurrent()),e.xp6(1),e.Q6J("ngIf",t.isFirstPage())}}function P(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t);const s=e.oxw().$implicit;e.oxw(2);const r=e.MAs(1);return e.KtG(r.setCurrent(s.value))})("click",function(){e.CHM(t);const s=e.oxw().$implicit;e.oxw(2);const r=e.MAs(1);return e.KtG(r.setCurrent(s.value))}),e.TgZ(1,"span",13),e._uU(2),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"number"),e.qZA()()}if(2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(2),e.hij("",n.screenReaderPageLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(5,2,t.label,""))}}function d(i,a){if(1&i&&(e.ynx(0),e.TgZ(1,"span",16)(2,"span",13),e._uU(3),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.ALo(6,"number"),e.qZA()(),e.BQk()),2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(3),e.hij("",n.screenReaderCurrentLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(6,2,t.label,""))}}function x(i,a){if(1&i&&(e.TgZ(0,"li"),e.YNc(1,P,6,5,"a",10),e.YNc(2,d,7,5,"ng-container",15),e.qZA()),2&i){const t=a.$implicit;e.oxw(2);const n=e.MAs(1);e.ekj("current",n.getCurrent()===t.value)("ellipsis","..."===t.label),e.xp6(1),e.Q6J("ngIf",n.getCurrent()!==t.value),e.xp6(1),e.Q6J("ngIf",n.getCurrent()===t.value)}}function M(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.next())})("click",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.next())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function Z(i,a){if(1&i&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function D(i,a){if(1&i&&(e.TgZ(0,"li",17),e.YNc(1,M,4,2,"a",10),e.YNc(2,Z,4,2,"span",11),e.qZA()),2&i){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isLastPage()),e.xp6(1),e.Q6J("ngIf",!t.isLastPage()),e.xp6(1),e.Q6J("ngIf",t.isLastPage())}}function U(i,a){if(1&i&&(e.TgZ(0,"ul",4),e.YNc(1,o,3,4,"li",5),e.TgZ(2,"li",6),e._uU(3),e.qZA(),e.YNc(4,x,3,6,"li",7),e.YNc(5,D,3,4,"li",8),e.qZA()),2&i){const t=e.oxw(),n=e.MAs(1);e.ekj("responsive",t.responsive),e.xp6(1),e.Q6J("ngIf",t.directionLinks),e.xp6(2),e.AsE(" ",n.getCurrent()," / ",n.getLastPage()," "),e.xp6(1),e.Q6J("ngForOf",n.pages)("ngForTrackBy",t.trackByIndex),e.xp6(1),e.Q6J("ngIf",t.directionLinks)}}class A{constructor(){this.change=new e.vpe,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(a){return null==a.id&&(a.id=this.DEFAULT_ID),this.instances[a.id]?this.updateInstance(a):(this.instances[a.id]=a,!0)}updateInstance(a){let t=!1;for(let n in this.instances[a.id])a[n]!==this.instances[a.id][n]&&(this.instances[a.id][n]=a[n],t=!0);return t}getCurrentPage(a){return this.instances[a]?this.instances[a].currentPage:1}setCurrentPage(a,t){if(this.instances[a]){let n=this.instances[a];t<=Math.ceil(n.totalItems/n.itemsPerPage)&&1<=t&&(this.instances[a].currentPage=t,this.change.emit(a))}}setTotalItems(a,t){this.instances[a]&&0<=t&&(this.instances[a].totalItems=t,this.change.emit(a))}setItemsPerPage(a,t){this.instances[a]&&(this.instances[a].itemsPerPage=t,this.change.emit(a))}getInstance(a=this.DEFAULT_ID){return this.instances[a]?this.clone(this.instances[a]):{}}clone(a){var t={};for(var n in a)a.hasOwnProperty(n)&&(t[n]=a[n]);return t}}const E=Number.MAX_SAFE_INTEGER;let F=(()=>{class i{constructor(t){this.service=t,this.state={}}transform(t,n){if(!(t instanceof Array)){let C=n.id||this.service.defaultId();return this.state[C]?this.state[C].slice:t}let u,h,s=n.totalItems&&n.totalItems!==t.length,r=this.createInstance(t,n),c=r.id,m=r.itemsPerPage,b=this.service.register(r);if(!s&&t instanceof Array){if(m=+m||E,u=(r.currentPage-1)*m,h=u+m,this.stateIsIdentical(c,t,u,h))return this.state[c].slice;{let L=t.slice(u,h);return this.saveState(c,t,L,u,h),this.service.change.emit(c),L}}return b&&this.service.change.emit(c),this.saveState(c,t,t,u,h),t}createInstance(t,n){return this.checkConfig(n),{id:null!=n.id?n.id:this.service.defaultId(),itemsPerPage:+n.itemsPerPage||0,currentPage:+n.currentPage||1,totalItems:+n.totalItems||t.length}}checkConfig(t){const s=["itemsPerPage","currentPage"].filter(r=>!(r in t));if(0<s.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${s.join(", ")}`)}saveState(t,n,s,r,c){this.state[t]={collection:n,size:n.length,slice:s,start:r,end:c}}stateIsIdentical(t,n,s,r){let c=this.state[t];return!(!c||c.size!==n.length||c.start!==s||c.end!==r)&&c.slice.every((h,m)=>h===n[s+m])}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(A,16))},i.\u0275pipe=e.Yjl({name:"paginate",type:i,pure:!1}),i})(),O=(()=>{class i{constructor(t,n){this.service=t,this.changeDetectorRef=n,this.maxSize=7,this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this.pages=[],this.changeSub=this.service.change.subscribe(s=>{this.id===s&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(t){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return 1===this.getCurrent()}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(t){this.pageChange.emit(t)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let t=this.service.getInstance(this.id);return t.totalItems<1?1:Math.ceil(t.totalItems/t.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){null==this.service.getInstance(this.id).id&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let t=this.service.getInstance(this.id);const n=this.outOfBoundCorrection(t);n!==t.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(n),this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}):this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}outOfBoundCorrection(t){const n=Math.ceil(t.totalItems/t.itemsPerPage);return n<t.currentPage&&0<n?n:t.currentPage<1?1:t.currentPage}createPageArray(t,n,s,r){r=+r;let c=[];const u=Math.max(Math.ceil(s/n),1),h=Math.ceil(r/2),m=t<=h,b=u-h<t,C=!m&&!b;let L=r<u,v=1;for(;v<=u&&v<=r;){let y,w=this.calculatePageNumber(v,t,r,u);y=L&&(2===v&&(C||b)||v===r-1&&(C||m))?"...":w,c.push({label:y,value:w}),v++}return c}calculatePageNumber(t,n,s,r){let c=Math.ceil(s/2);return t===s?r:1===t?t:s<r?r-c<n?r-s+t:c<n?n-c+t:t:t}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(A),e.Y36(e.sBO))},i.\u0275dir=e.lG2({type:i,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[e.TTD]}),i})();function k(i){return!!i&&"false"!==i}let B=(()=>{class i{constructor(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}get directionLinks(){return this._directionLinks}set directionLinks(t){this._directionLinks=k(t)}get autoHide(){return this._autoHide}set autoHide(t){this._autoHide=k(t)}get responsive(){return this._responsive}set responsive(t){this._responsive=k(t)}trackByIndex(t){return t}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["pagination-controls"]],inputs:{id:"id",maxSize:"maxSize",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:4,vars:4,consts:[[3,"id","maxSize","pageChange","pageBoundsCorrection"],["p","paginationApi"],["role","navigation"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],["aria-disabled","true",4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],["aria-disabled","true"],[4,"ngIf"],["aria-live","polite"],[1,"pagination-next"]],template:function(t,n){if(1&t&&(e.TgZ(0,"pagination-template",0,1),e.NdJ("pageChange",function(r){return n.pageChange.emit(r)})("pageBoundsCorrection",function(r){return n.pageBoundsCorrection.emit(r)}),e.TgZ(2,"nav",2),e.YNc(3,U,6,8,"ul",3),e.qZA()()),2&t){const s=e.MAs(1);e.Q6J("id",n.id)("maxSize",n.maxSize),e.xp6(2),e.uIk("aria-label",n.screenReaderPaginationLabel),e.xp6(1),e.Q6J("ngIf",!(n.autoHide&&s.pages.length<=1))}},dependencies:[O,g.O5,g.sg,g.JJ],styles:['.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n'],encapsulation:2,changeDetection:0}),i})(),N=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[A],imports:[[g.ez]]}),i})();var S=l(8439),H=l(1171),$=l(2425),R=l(779);function J(i,a){if(1&i&&e._UZ(0,"i",19),2&i){const t=a.$implicit,n=e.oxw().$implicit;e.ekj("rating-color",n.ratingsAverage>=t)}}function z(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"i",20),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,r=e.oxw(2);return e.KtG(r.AddProductToWishList(s._id))}),e.qZA()}}function Y(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"i",21),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,r=e.oxw(2);return e.KtG(r.removewishList(s._id))}),e.qZA()}}const W=function(i){return["/productdetailes",i]},G=function(){return[1,2,3,4,5]};function q(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",6)(1,"div",7)(2,"div",8),e._UZ(3,"img",9),e.TgZ(4,"span",10),e._uU(5),e.qZA(),e.TgZ(6,"h3",11),e._uU(7),e.qZA(),e.TgZ(8,"div",12)(9,"span",13),e._uU(10),e.ALo(11,"currency"),e.qZA(),e.TgZ(12,"span"),e.YNc(13,J,1,2,"i",14),e._uU(14),e.qZA()()(),e.TgZ(15,"div",15),e.YNc(16,z,1,0,"i",16),e.YNc(17,Y,1,0,"i",17),e.qZA(),e.TgZ(18,"button",18),e.NdJ("click",function(){const r=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.AddProductsToCart(r._id))}),e._uU(19,"+Add"),e.qZA()()()}if(2&i){const t=a.$implicit,n=e.oxw(2);e.xp6(2),e.Q6J("routerLink",e.VKq(12,W,t._id)),e.xp6(1),e.Q6J("src",t.imageCover,e.LSH),e.xp6(2),e.Oqu(t.category.name),e.xp6(2),e.Oqu(t.title.split(" ").splice(0,2).join(" ")),e.xp6(3),e.Oqu(e.xi3(11,9,t.price,"e\xa3")),e.xp6(3),e.Q6J("ngForOf",e.DdM(14,G)),e.xp6(1),e.hij(" ",t.ratingsAverage," "),e.xp6(2),e.Q6J("ngIf",!n.wishlistData.includes(t._id)),e.xp6(1),e.Q6J("ngIf",n.wishlistData.includes(t._id))}}const Q=function(i,a,t){return{id:"productpaginat",itemsPerPage:i,currentPage:a,totalItems:t}};function K(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"section",1)(1,"h2"),e._uU(2,"Popular Products"),e.qZA(),e.TgZ(3,"div",2),e.YNc(4,q,20,15,"div",3),e.ALo(5,"paginate"),e.qZA(),e.TgZ(6,"div",4)(7,"pagination-controls",5),e.NdJ("pageChange",function(s){e.CHM(t);const r=e.oxw();return e.KtG(r.pageChanged(s))})("pageBoundsCorrection",function(s){e.CHM(t);const r=e.oxw();return e.KtG(r.pageChanged(s))}),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",e.xi3(5,5,t.productList,e.kEZ(8,Q,t.pageSize,t.currentP,t.totalProduct))),e.xp6(3),e.Q6J("maxSize",9)("directionLinks",!0)("autoHide",!0)("responsive",!0)}}let j=(()=>{class i{constructor(t,n,s,r){this._ProductsService=t,this._WishlistService=n,this.toastr=s,this._CartService=r,this.pageSize=0,this.currentP=1,this.totalProduct=0,this.term=" ",this.isloading=!0,this.productList=[],this.wishlistProducts=[],this.wishlistData=[]}ngOnInit(){this.getAllProducts(),this.getAllWishlists()}getAllProducts(){this._ProductsService.getAllProducts().subscribe({next:t=>{this.productList=t.data,this.isloading=!1,this.pageSize=t.metadata.limit,this.currentP=t.metadata.currentPage,this.totalProduct=t.results,console.log(this.productList)},error:t=>{console.log(t),this.isloading=!1}})}getAllWishlists(){this._WishlistService.GetloggedUserToWishList().subscribe({next:t=>{const n=t.data.map(s=>s._id);this.wishlistData=n}})}AddProductToWishList(t){this._WishlistService.AddProductToWishList(t).subscribe({next:n=>{this.wishlistData=n.data,console.log(n.data),this.toastr.success("It has been successFully Added to wishList"," ",{timeOut:1500,progressBar:!0,positionClass:"toast-top-right"})},error:n=>{console.log(n)}})}removewishList(t){this._WishlistService.RemoveProductFromWishList(t).subscribe({next:n=>{this.toastr.warning(" It has been removed from wishList"," ",{timeOut:1500,progressBar:!0,positionClass:"toast-top-right"}),this.wishlistData=n.data},error:n=>{console.log(n)}})}AddProductsToCart(t){this._CartService.addToCart(t).subscribe({next:n=>{this._CartService.numberofcartItems.next(n.numOfCartItems),this.toastr.success(n.message," ",{timeOut:1500,progressBar:!0,positionClass:"toast-bottom-right"})},error:n=>{console.log(n)}})}pageChanged(t){this._ProductsService.getAllProducts(t).subscribe({next:n=>{this.productList=n.data,this.isloading=!1,this.pageSize=n.metadata.limit,this.currentP=n.metadata.currentPage,this.totalProduct=n.results,console.log(this.productList)},error:n=>{console.log(n),this.isloading=!1}})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(S.s),e.Y36(H.M),e.Y36($._W),e.Y36(R.N))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-products"]],standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[["class","mt-4",4,"ngIf"],[1,"mt-4"],[1,"row","gy-4"],["class","col-md-3",4,"ngFor","ngForOf"],[1,"paginate","m-4","d-flex","justify-content-center","align-items-center"],["id","productpaginat","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"maxSize","directionLinks","autoHide","responsive","pageChange","pageBoundsCorrection"],[1,"col-md-3"],[1,"product","p-2","cursor-pointer"],[3,"routerLink"],["alt","",1,"w-100","rounded","rounded-1",3,"src"],[1,"text-main","font-sm"],[1,"h6","mt-2"],[1,"d-flex","justify-content-between","py-2"],[1,"small","text-main","fw-bold"],["class","fa fa-star",3,"rating-color",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end"],["class","fa-regular fa-heart fa-2x",3,"click",4,"ngIf"],["class","fa-solid fa-heart text-danger fa-2x",3,"click",4,"ngIf"],[1,"btn","text-white","w-100","bg-main","mt-2",3,"click"],[1,"fa","fa-star"],[1,"fa-regular","fa-heart","fa-2x",3,"click"],[1,"fa-solid","fa-heart","text-danger","fa-2x",3,"click"]],template:function(n,s){1&n&&e.YNc(0,K,8,12,"section",0),2&n&&e.Q6J("ngIf",s.productList.length>0)},dependencies:[g.ez,g.sg,g.O5,g.H9,_.rH,N,F,B]})}return i})()}}]);