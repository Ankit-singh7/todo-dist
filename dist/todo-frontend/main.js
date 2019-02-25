(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./server-error/server-error.component */ "./src/app/server-error/server-error.component.ts");
/* harmony import */ var _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start-page/start-page.component */ "./src/app/start-page/start-page.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main.module */ "./src/app/main/main.module.ts");









var routes = [
    { path: '', redirectTo: 'Intro', pathMatch: 'full' },
    { path: 'Intro', component: _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_6__["StartPageComponent"] },
    { path: 'serverError', component: _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_5__["ServerErrorComponent"] },
    { path: '*', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_7__["UserModule"],
                _main_main_module__WEBPACK_IMPORTED_MODULE_8__["MainModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n<ng4-loading-spinner [loadingText]=\"'Please wait...'\"></ng4-loading-spinner>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todo-frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./server-error/server-error.component */ "./src/app/server-error/server-error.component.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./start-page/start-page.component */ "./src/app/start-page/start-page.component.ts");













//import this module for using toastr



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
                _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_11__["ServerErrorComponent"],
                _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_15__["StartPageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_9__["UserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot({
                    timeOut: 2000,
                    positionClass: 'toast-top-right',
                    preventDuplicates: true,
                }),
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_12__["Ng4LoadingSpinnerModule"].forRoot()
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_14__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AppService = /** @class */ (function () {
    function AppService(_http) {
        this._http = _http;
        this.baseUrl = "http://api.trego.tk/api/v1";
        this.userFriends = [];
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        }; //end of setlocalstorage Function
        this.getUserInfoFromLocalStorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; //end getlocalstorage function
        //console.log("App Service called")
    }
    /* Start Functions for User Management */
    AppService.prototype.signUp = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobileNumber', data.mobileNumber)
            .set('email', data.email)
            .set('password', data.password)
            .set('userName', data.userName)
            .set('countryName', data.countryName)
            .set('isAdmin', data.isAdmin);
        return this._http.post(this.baseUrl + "/users/signup", params);
    }; //end signUp 
    AppService.prototype.signIn = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this._http.post(this.baseUrl + "/users/login", params);
    }; //end signIn
    AppService.prototype.resetPassword = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', data.email);
        return this._http.post(this.baseUrl + "/users/resetPassword", params);
    }; //end resetPassword
    AppService.prototype.updatePassword = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('validationToken', data.validationToken)
            .set('password', data.password);
        return this._http.put(this.baseUrl + "/users/updatePassword", params);
    }; //end updatePassword
    AppService.prototype.verifyEmail = function (userId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('userId', userId);
        return this._http.put(this.baseUrl + "/users/verifyEmail", params);
    }; //end verifyEmail
    AppService.prototype.getCountryList = function () {
        return this._http.get("./../assets/countries.json");
    }; //end getCountryNames
    AppService.prototype.getCountryCode = function () {
        return this._http.get("./../assets/country-code-list.json");
    }; //end getCountryNumbers
    AppService.prototype.getUsers = function (authToken) {
        return this._http.get(this.baseUrl + "/users/view/all?authToken=" + authToken);
    }; //end getUsers function
    AppService.prototype.logout = function (userId, authToken) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('authToken', authToken);
        return this._http.post(this.baseUrl + "/users/" + userId + "/logout", params);
    }; //end deleteMeeting
    /* End User Management Functions */
    /* Start To Do Functions : Single User */
    AppService.prototype.getListDetails = function (listId, authToken) {
        return this._http.get(this.baseUrl + "/lists/" + listId + "/details?authToken=" + authToken);
    }; //end getListDetails function
    AppService.prototype.getItemDetails = function (itemId, authToken) {
        return this._http.get(this.baseUrl + "/items/" + itemId + "/details?authToken=" + authToken);
    }; //end getItemDetails function
    AppService.prototype.getSubItemDetails = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('subItemId', data.subItemId);
        return this._http.post(this.baseUrl + "/items/subItems/" + data.itemId + "/details?authToken=" + data.authToken, params);
    }; //end getSubItemDetails function
    AppService.prototype.getAllList = function (userId, authToken) {
        return this._http.get(this.baseUrl + "/lists/view/all/lists/" + userId + "?authToken=" + authToken);
    }; //end getAllList function
    AppService.prototype.getAllSharedList = function (userId, authToken) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('userId', userId);
        return this._http.post(this.baseUrl + "/lists/view/all/shared/lists?authToken=" + authToken, params);
    }; //end getAllSharedList function
    AppService.prototype.getAllItems = function (listId, authToken) {
        return this._http.get(this.baseUrl + "/items/view/all/items/" + listId + "?authToken=" + authToken);
    }; //end getAllItems function
    AppService.prototype.addList = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('listName', data.listName)
            .set('listCreatorId', data.listCreatorId)
            .set('listCreatorName', data.listCreatorName)
            .set('listModifierId', data.listModifierId)
            .set('listModifierName', data.listModifierName)
            .set('listMode', data.listMode)
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/lists/addList", params);
    }; //end addList 
    AppService.prototype.addItem = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('listId', data.listId)
            .set('itemName', data.itemName)
            .set('itemCreatorId', data.itemCreatorId)
            .set('itemCreatorName', data.itemCreatorName)
            .set('itemModifierId', data.itemModifierId)
            .set('itemModifierName', data.itemModifierName)
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/items/addItem", params);
    }; //end addItem 
    AppService.prototype.updateItem = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            //.set('itemId', data.itemId)
            .set('itemName', data.itemName)
            .set('itemModifierId', data.itemModifierId)
            .set('itemModifierName', data.itemModifierName)
            .set('itemDone', data.itemDone)
            .set('authToken', data.authToken);
        return this._http.put(this.baseUrl + "/items/" + data.itemId + "/updateitem", params);
    }; //end updateItem 
    AppService.prototype.addSubItem = function (data) {
        console.log(data);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            //.set('itemId', data.itemId)
            .set('subItemId', data.subItemId)
            .set('subItemName', data.subItemName)
            .set('subItemCreatorId', data.subItemCreatorId)
            .set('subItemCreatorName', data.subItemCreatorName)
            .set('subItemModifierId', data.subItemModifierId)
            .set('subItemModifierName', data.subItemModifierName)
            .set('authToken', data.authToken);
        return this._http.put(this.baseUrl + "/items/" + data.itemId + "/addSubItem", params);
    }; //end addSubItem 
    AppService.prototype.updateSubItem = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            //.set('itemId', data.itemId)
            .set('subItemId', data.subItemId)
            .set('subItemName', data.subItemName)
            .set('subItemModifierId', data.subItemModifierId)
            .set('subItemModifierName', data.subItemModifierName)
            .set('subItemDone', data.subItemDone)
            .set('authToken', data.authToken);
        return this._http.put(this.baseUrl + "/items/" + data.itemId + "/updateSubItem", params);
    }; //end updateSubItem 
    AppService.prototype.updateList = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            //.set('listId', data.listId)
            .set('listName', data.listName)
            .set('listModifierId', data.listModifierId)
            .set('listModifierName', data.listModifierName)
            .set('listMode', data.listMode)
            .set('authToken', data.authToken);
        return this._http.put(this.baseUrl + "/lists/" + data.listId + "/updateList", params);
    }; //end updateList 
    AppService.prototype.deleteList = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            //.set('listId', data.listId)
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/lists/" + data.listId + "/delete", params);
    }; //end deleteList 
    AppService.prototype.deleteItem = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            //.set('itemId',data.itemId)
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/items/" + data.itemId + "/delete", params);
    }; //end deleteItem
    AppService.prototype.deleteSubItem = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('subItemId', data.subItemId)
            .set('authToken', data.authToken);
        return this._http.put(this.baseUrl + "/items/" + data.itemId + "/deleteSubItem", params);
    }; //end deleteSubItem 
    /* Friends Management */
    AppService.prototype.getAllUsers = function (authToken) {
        return this._http.get(this.baseUrl + "/users/view/all?authToken=" + authToken);
    }; //end getAllUsers function
    AppService.prototype.getUserDetails = function (userId, authToken) {
        return this._http.get(this.baseUrl + "/users/" + userId + "/details?authToken=" + authToken);
    }; //end getUserDetails function
    AppService.prototype.sendFriendRequest = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('senderId', data.senderId)
            .set('senderName', data.senderName)
            .set('recieverId', data.recieverId)
            .set('recieverName', data.recieverName)
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/friends/send/friend/request", params);
    }; //end sendFriendRequest
    AppService.prototype.rejectFriendRequest = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('senderId', data.senderId)
            .set('senderName', data.senderName)
            .set('recieverId', data.recieverId)
            .set('recieverName', data.recieverName)
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/friends/reject/friend/request", params);
    }; //end sendFriendRequest
    AppService.prototype.cancelFriendRequest = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('senderId', data.senderId)
            .set('senderName', data.senderName)
            .set('recieverId', data.recieverId)
            .set('recieverName', data.recieverName)
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/friends/cancel/friend/request", params);
    }; //end sendFriendRequest
    AppService.prototype.acceptFriendRequest = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('senderId', data.senderId)
            .set('senderName', data.senderName)
            .set('recieverId', data.recieverId)
            .set('recieverName', data.recieverName)
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/friends/accept/friend/request", params);
    }; //end sendFriendRequest
    AppService.prototype.unfriendUser = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('senderId', data.senderId)
            .set('senderName', data.senderName)
            .set('recieverId', data.recieverId)
            .set('recieverName', data.recieverName)
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/friends/unfriend/user", params);
    }; //end sendFriendRequest
    /* History Management */
    AppService.prototype.addHistory = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('listId', data.listId)
            .set('key', data.key)
            .set('itemId', data.itemId)
            .set('subItemId', data.subItemId)
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/history/addHistory", params);
    }; //end addItem 
    AppService.prototype.getHistory = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('listId', data.listId)
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/history/deleteHistory", params);
    }; //end addItem 
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/main/friends-list/friends-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/main/friends-list/friends-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n    box-shadow: 0 4px 8px 0 #48CDC8, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9mcmllbmRzLWxpc3QvZnJpZW5kcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrRUFBa0U7Q0FDckUiLCJmaWxlIjoic3JjL2FwcC9tYWluL2ZyaWVuZHMtbGlzdC9mcmllbmRzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3h7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCAjNDhDREM4LCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main/friends-list/friends-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main/friends-list/friends-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-own-navbar [active]=\"'friends'\"></app-own-navbar>\n<br>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h5 style=\"color:#7d7d7d\"> <b>Friends Section</b></h5>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <app-friend-list></app-friend-list>\n    </div>    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/friends-list/friends-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/friends-list/friends-list.component.ts ***!
  \*************************************************************/
/*! exports provided: FriendsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsListComponent", function() { return FriendsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);





var FriendsListComponent = /** @class */ (function () {
    function FriendsListComponent(socketService, toastr) {
        var _this = this;
        this.socketService = socketService;
        this.toastr = toastr;
        //listened
        this.verifyUserConfirmation = function () {
            _this.socketService.verifyUser()
                .subscribe(function () {
                _this.socketService.setUser(_this.authToken); //in reply to verify user emitting set-user event with authToken as parameter.
            }, function (err) {
                _this.toastr.error(err, "Some error occured");
            }); //end subscribe
        }; //end verifyUserConfirmation
    }
    FriendsListComponent.prototype.ngOnInit = function () {
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken');
        this.verifyUserConfirmation();
    };
    FriendsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-friends-list',
            template: __webpack_require__(/*! ./friends-list.component.html */ "./src/app/main/friends-list/friends-list.component.html"),
            styles: [__webpack_require__(/*! ./friends-list.component.css */ "./src/app/main/friends-list/friends-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], FriendsListComponent);
    return FriendsListComponent;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _single_user_single_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./single-user/single-user.component */ "./src/app/main/single-user/single-user.component.ts");
/* harmony import */ var _multi_user_multi_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./multi-user/multi-user.component */ "./src/app/main/multi-user/multi-user.component.ts");
/* harmony import */ var _friends_list_friends_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./friends-list/friends-list.component */ "./src/app/main/friends-list/friends-list.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/dialog-box/dialog-box.component */ "./src/app/shared/dialog-box/dialog-box.component.ts");













var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                    { path: 'multi-user', component: _multi_user_multi_user_component__WEBPACK_IMPORTED_MODULE_8__["MultiUserComponent"] },
                    { path: 'single-user', component: _single_user_single_user_component__WEBPACK_IMPORTED_MODULE_7__["SingleUserComponent"] },
                    { path: 'friend-list', component: _friends_list_friends_list_component__WEBPACK_IMPORTED_MODULE_9__["FriendsListComponent"] }
                ])
            ],
            entryComponents: [
                _shared_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_12__["DialogBoxComponent"]
            ],
            declarations: [_single_user_single_user_component__WEBPACK_IMPORTED_MODULE_7__["SingleUserComponent"], _multi_user_multi_user_component__WEBPACK_IMPORTED_MODULE_8__["MultiUserComponent"], _friends_list_friends_list_component__WEBPACK_IMPORTED_MODULE_9__["FriendsListComponent"]]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/main/multi-user/multi-user.component.css":
/*!**********************************************************!*\
  !*** ./src/app/main/multi-user/multi-user.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-container {\r\n    height: 90vh;\r\n    width:100%;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.friend-sidenav {\r\n  width: 100%;\r\n  background-color: #F4F4F4;\r\n}\r\n\r\n.box{\r\n  box-shadow: 0 4px 8px 0 #48CDC8, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tdWx0aS11c2VyL211bHRpLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsMEJBQTBCO0NBQzdCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLGtFQUFrRTtDQUNuRSIsImZpbGUiOiJzcmMvYXBwL21haW4vbXVsdGktdXNlci9tdWx0aS11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5mcmllbmQtc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcclxufVxyXG5cclxuLmJveHtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCAjNDhDREM4LCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main/multi-user/multi-user.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/multi-user/multi-user.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-own-navbar [active]=\"'other'\"></app-own-navbar>\n<br>\n<div class=\"container-fluid\">\n    <div class=\"row \">\n        <div class=\"col-12\">\n          <h5 style=\"color:#7d7d7d\"> <b>Friends Dashboard</b></h5>\n        </div>\n      </div>\n      <br>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <app-list [allLists]=\"allLists\" [userMode]=\"'public'\" (notify)=\"getUpdatesFromContainer($event)\"></app-list>\n    </div>    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/multi-user/multi-user.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/multi-user/multi-user.component.ts ***!
  \*********************************************************/
/*! exports provided: MultiUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiUserComponent", function() { return MultiUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../socket.service */ "./src/app/socket.service.ts");







var MultiUserComponent = /** @class */ (function () {
    function MultiUserComponent(appService, toastr, router, socketService) {
        var _this = this;
        this.appService = appService;
        this.toastr = toastr;
        this.router = router;
        this.socketService = socketService;
        this.allLists = [];
        this.userFriendsTemp = [];
        this.userFriends = [];
        //* Database functions *//
        /* List Related Functions */
        this.getAllPublicListFunction = function (userIds) {
            //this function will get all the public lists of User. 
            _this.allLists = [];
            if (_this.authToken != null) {
                _this.appService.getAllSharedList(userIds, _this.authToken).subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        //console.log(apiResponse.data)
                        for (var _i = 0, _a = apiResponse.data; _i < _a.length; _i++) {
                            var apiItem = _a[_i];
                            _this.allLists.push(apiItem);
                        }
                    }
                    else {
                        _this.toastr.info(apiResponse.message, "Update!");
                        _this.allLists.length = 0;
                    }
                }, function (error) {
                    if (error.status == 400) {
                        _this.toastr.warning("Lists Failed to Update", "Either user or List not found");
                        _this.allLists.length = 0;
                    }
                    else {
                        _this.toastr.error("Some Error Occurred", "Error!");
                        _this.router.navigate(['/serverError']);
                    }
                } //end error
                ); //end appservice.getAllLists
            } //end if checking undefined
            else {
                _this.toastr.info("Missing Authorization Key", "Please login again");
                _this.router.navigate(['/login']);
            }
        }; //end getAllPublicListFunction
        //* Sockets functions *//
        /* Listened Events */
        this.getUpdatesFromUser = function () {
            _this.socketService.getUpdatesFromUser(_this.userId).subscribe(function (data) {
                //getting message from user.
                _this.toastr.info(data.message);
                //console.log(data)
                if (!data.listId)
                    _this.getAllPublicListFunction(_this.userFriendsTemp);
            });
        }; //end getUpdatesFromUser
        //listened
        this.verifyUserConfirmation = function () {
            _this.socketService.verifyUser()
                .subscribe(function () {
                _this.socketService.setUser(_this.authToken); //in reply to verify user emitting set-user event with authToken as parameter.
            }, function (err) {
                _this.toastr.error(err, "Some error occured");
            }); //end subscribe
        }; //end verifyUserConfirmation
        //emitted 
        this.notifyUpdatesToUser = function (data) {
            //data will be object with message and userId(recieverId)
            _this.socketService.notifyUpdates(data);
            //console.log(data)
            if (!data.listId)
                _this.getAllPublicListFunction(_this.userFriendsTemp);
        }; //end notifyUpdatesToUser
    }
    MultiUserComponent.prototype.ngOnInit = function () {
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authToken');
        this.userId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId');
        this.userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName');
        this.userInfo = this.appService.getUserInfoFromLocalStorage();
        this.userFriendsTemp.push(this.userId); // add all friends and user to variable to get their public lists
        for (var _i = 0, _a = this.userInfo.friends; _i < _a.length; _i++) {
            var x = _a[_i];
            this.userFriendsTemp.push(x.friendId);
            this.userFriends.push(x.friendId); // array of friends to notify about changes of todo
        }
        //console.log(this.userFriendsTemp)
        this.verifyUserConfirmation();
        this.getUpdatesFromUser();
        this.getAllPublicListFunction(this.userFriendsTemp);
    };
    MultiUserComponent.prototype.getUpdatesFromContainer = function (data) {
        var dataForNotify = {
            message: data.message,
            userId: this.userFriends,
            listId: data.listId
        };
        this.notifyUpdatesToUser(dataForNotify);
    };
    MultiUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multi-user',
            template: __webpack_require__(/*! ./multi-user.component.html */ "./src/app/main/multi-user/multi-user.component.html"),
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"]],
            styles: [__webpack_require__(/*! ./multi-user.component.css */ "./src/app/main/multi-user/multi-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"]])
    ], MultiUserComponent);
    return MultiUserComponent;
}());



/***/ }),

/***/ "./src/app/main/single-user/single-user.component.css":
/*!************************************************************!*\
  !*** ./src/app/main/single-user/single-user.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2luZ2xlLXVzZXIvc2luZ2xlLXVzZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/single-user/single-user.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/single-user/single-user.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-own-navbar [active]=\"'own'\"></app-own-navbar>\n<br>\n<div class=\"container-fluid\">\n  <div class=\"row box\">\n    <div class=\"col-12\">\n      <h5 style=\"color:#7d7d7d\"> Hello, <b>{{userName}}</b></h5>\n    </div>\n  </div>\n  \n\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <app-list [allLists]=\"allLists\" [userMode]=\"'private'\" (notify)=\"getUpdatesFromContainer()\"></app-list>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/single-user/single-user.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/single-user/single-user.component.ts ***!
  \***********************************************************/
/*! exports provided: SingleUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleUserComponent", function() { return SingleUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../socket.service */ "./src/app/socket.service.ts");







var SingleUserComponent = /** @class */ (function () {
    function SingleUserComponent(appService, toastr, router, socketService) {
        var _this = this;
        this.appService = appService;
        this.toastr = toastr;
        this.router = router;
        this.socketService = socketService;
        this.allLists = [];
        //* Database functions *//
        /* List Related Functions */
        this.getAllListFunction = function () {
            //this function will get all the lists of User. 
            if (_this.userId != null && _this.authToken != null) {
                _this.appService.getAllList(_this.userId, _this.authToken).subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.allLists = apiResponse.data;
                        //this.toastr.info("Lists Updated", `Lists Found!`);
                        //console.log(this.allLists)
                    }
                    else {
                        _this.toastr.info(apiResponse.message, "Update!");
                        _this.allLists.length = 0;
                    }
                }, function (error) {
                    if (error.status == 400) {
                        _this.toastr.warning("Lists Failed to Update", "Either user or List not found");
                        _this.allLists.length = 0;
                    }
                    else {
                        _this.toastr.error("Some Error Occurred", "Error!");
                        _this.router.navigate(['/serverError']);
                    }
                } //end error
                ); //end appservice.getAllLists
            } //end if checking undefined
            else {
                _this.toastr.info("Missing Authorization Key", "Please login again");
                _this.router.navigate(['/login']);
            }
        }; //end getAllListFunction
        //listened
        this.verifyUserConfirmation = function () {
            _this.socketService.verifyUser()
                .subscribe(function () {
                _this.socketService.setUser(_this.authToken); //in reply to verify user emitting set-user event with authToken as parameter.
            }, function (err) {
                _this.toastr.error(err, "Some error occured");
            }); //end subscribe
        }; //end verifyUserConfirmation
        this.getUpdatesFromUser = function () {
            _this.socketService.getUpdatesFromUser(_this.userId).subscribe(function (data) {
                //getting message from user.
                _this.toastr.info(data.message);
            });
        };
    }
    SingleUserComponent.prototype.ngOnInit = function () {
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authToken');
        this.userId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId');
        this.userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName');
        this.userInfo = this.appService.getUserInfoFromLocalStorage();
        //console.log(this.userInfo)
        this.verifyUserConfirmation();
        this.getUpdatesFromUser();
        this.getAllListFunction();
    };
    SingleUserComponent.prototype.getUpdatesFromContainer = function () {
        this.getAllListFunction();
    };
    SingleUserComponent.prototype.ngOnDestroy = function () {
        this.socketService.exitSocket();
    };
    SingleUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-user',
            template: __webpack_require__(/*! ./single-user.component.html */ "./src/app/main/single-user/single-user.component.html"),
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"]],
            styles: [__webpack_require__(/*! ./single-user.component.css */ "./src/app/main/single-user/single-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"]])
    ], SingleUserComponent);
    return SingleUserComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image\r\n{\r\n   width:400px;\r\n   height:400px;\r\n   border:1px solid white;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHLFlBQVk7R0FDWixhQUFhO0dBQ2IsdUJBQXVCOztDQUV6QiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZVxyXG57XHJcbiAgIHdpZHRoOjQwMHB4O1xyXG4gICBoZWlnaHQ6NDAwcHg7XHJcbiAgIGJvcmRlcjoxcHggc29saWQgd2hpdGU7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <br><br><br><br>\n  <div class=\"row\">\n    <div class=\"col-sm-6 text-center\">\n      <h3 class=\"text-secondary\"><b>Awww...Dont't cry.</b></h3>\n      <p class=\"text-secondary\"><b>Its just a <span class=\"text-danger\">404</span> error</b></p>\n      <br>\n      <p class=\"text-secondary\"><b>what you you're looking for may have been misplaced in Long Term Memory.</b></p>\n      <p class=\"text-secondary\"><b>Go back to <a [routerLink]=\"['/single-user']\">HomePage</a></b></p>\n        \n    </div>\n    <div class=\"col-sm-6\">\n        <img src=\"../assets/images/cry.gif\" alt=\"Baby Crying\" class=\"img-thumbnail image\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/server-error/server-error.component.css":
/*!*********************************************************!*\
  !*** ./src/app/server-error/server-error.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,html{\r\n   \r\n    height:100%;\r\n}\r\n\r\n.container-fluid{\r\n\r\n   height:100vh;    \r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmVyLWVycm9yL3NlcnZlci1lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFlBQVk7Q0FDZjs7QUFFRDs7R0FFRyxhQUFhOztDQUVmIiwiZmlsZSI6InNyYy9hcHAvc2VydmVyLWVycm9yL3NlcnZlci1lcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSxodG1se1xyXG4gICBcclxuICAgIGhlaWdodDoxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlke1xyXG5cclxuICAgaGVpZ2h0OjEwMHZoOyAgICBcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/server-error/server-error.component.html":
/*!**********************************************************!*\
  !*** ./src/app/server-error/server-error.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n\n    <div class=\"col-12 jumbotron text-center\">\n       <h1 style=\"font-size: 150px ;color:#dc3545\">500 </h1>\n       <h2 style=\"font-size: 40px;color:#7d7d7d;font-weight:bold\">Internal Server Error</h2>\n       <h5 style=\"color:#7d7d7d;font-weight:bold\">Its broken but it's not your fault.</h5>\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/server-error/server-error.component.ts":
/*!********************************************************!*\
  !*** ./src/app/server-error/server-error.component.ts ***!
  \********************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServerErrorComponent = /** @class */ (function () {
    function ServerErrorComponent() {
    }
    ServerErrorComponent.prototype.ngOnInit = function () {
    };
    ServerErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-server-error',
            template: __webpack_require__(/*! ./server-error.component.html */ "./src/app/server-error/server-error.component.html"),
            styles: [__webpack_require__(/*! ./server-error.component.css */ "./src/app/server-error/server-error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServerErrorComponent);
    return ServerErrorComponent;
}());



/***/ }),

/***/ "./src/app/shared/dialog-box/dialog-box.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/dialog-box/dialog-box.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kaWFsb2ctYm94L2RpYWxvZy1ib3guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/dialog-box/dialog-box.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/dialog-box/dialog-box.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"data.value\">\n  </mat-form-field>\n</div>\n\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\n  <button mat-button [mat-dialog-close]=\"data.value\" cdkFocusInitial>Save</button>\n</div>"

/***/ }),

/***/ "./src/app/shared/dialog-box/dialog-box.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/dialog-box/dialog-box.component.ts ***!
  \***********************************************************/
/*! exports provided: DialogBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBoxComponent", function() { return DialogBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DialogBoxComponent = /** @class */ (function () {
    function DialogBoxComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogBoxComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-box',
            template: __webpack_require__(/*! ./dialog-box.component.html */ "./src/app/shared/dialog-box/dialog-box.component.html"),
            styles: [__webpack_require__(/*! ./dialog-box.component.css */ "./src/app/shared/dialog-box/dialog-box.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DialogBoxComponent);
    return DialogBoxComponent;
}());



/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\r\n    border-radius: 100%;\r\n    line-height: 1em;\r\n    padding: 1em;\r\n    text-align: center;\r\n    margin: 0em;\r\n    width: 3em;\r\n    height: 3em;\r\n    float: left;\r\n    text-transform: uppercase;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZpcnN0LWNoYXIvZmlyc3QtY2hhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWiwwQkFBMEI7R0FDM0IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZmlyc3QtY2hhci9maXJzdC1jaGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JvcCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMGVtO1xyXG4gICAgd2lkdGg6IDNlbTtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)='nameClicked()'  class=\"crop\" [style.color]=\"userColor ? userColor :'white'\" [style.background]=\"userBg ? userBg :'blue'\">\n  {{firstChar}}\n</div>"

/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.ts ***!
  \***********************************************************/
/*! exports provided: FirstCharComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstCharComponent", function() { return FirstCharComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FirstCharComponent = /** @class */ (function () {
    function FirstCharComponent() {
        this._name = '';
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FirstCharComponent.prototype.ngOnInit = function () {
        this._name = this.userName;
        this.firstChar = this._name[0];
    }; // end ngOnInit
    FirstCharComponent.prototype.ngOnChanges = function (changes) {
        var name = changes.userName;
        this._name = name.currentValue;
        this.firstChar = this._name[0];
    };
    FirstCharComponent.prototype.nameClicked = function () {
        this.notify.emit(this._name);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FirstCharComponent.prototype, "userName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FirstCharComponent.prototype, "userBg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FirstCharComponent.prototype, "userColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FirstCharComponent.prototype, "notify", void 0);
    FirstCharComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'first-char',
            template: __webpack_require__(/*! ./first-char.component.html */ "./src/app/shared/first-char/first-char.component.html"),
            styles: [__webpack_require__(/*! ./first-char.component.css */ "./src/app/shared/first-char/first-char.component.css")]
        })
    ], FirstCharComponent);
    return FirstCharComponent;
}());



/***/ }),

/***/ "./src/app/shared/friend-list/friend-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/friend-list/friend-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card:hover{\r\n    background-color: #F4F4F4; \r\n}\r\n\r\n.online{\r\n\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color:green;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n  }\r\n\r\n.offline{\r\n  \r\n    height: 10px;\r\n    width: 10px;\r\n    background-color:red;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZyaWVuZC1saXN0L2ZyaWVuZC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7Q0FDN0I7O0FBRUQ7O0lBRUksYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtHQUN2Qjs7QUFFRDs7SUFFRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsc0JBQXNCO0dBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2ZyaWVuZC1saXN0L2ZyaWVuZC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7IFxyXG59XHJcblxyXG4ub25saW5le1xyXG5cclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmVlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLm9mZmxpbmV7XHJcbiAgXHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/shared/friend-list/friend-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/friend-list/friend-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"\">\n  <div>\n    <ul class=\"nav nav-tabs nav-justified\" id=\"myTab\" role=\"tablist\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" id=\"friends-tab\" data-toggle=\"tab\" href=\"#friendsTab\" role=\"tab\" aria-controls=\"intro\"\n          aria-selected=\"true\" style=\"color:#7d7d7d\"><b>Freinds</b></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"sent-tab\" data-toggle=\"tab\" href=\"#sentTab\" role=\"tab\" aria-controls=\"other\"\n          aria-selected=\"false\" style=\"color:#7d7d7d\"><b>Sent</b></a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"requests-tab\" data-toggle=\"tab\" href=\"#requestsTab\" role=\"tab\" aria-controls=\"other\"\n          aria-selected=\"false\" style=\"color:#7d7d7d\"><b>Requests</b></a>\n      </li>\n\n    </ul> <!-- End nav-tabs-->\n    \n    <div class=\"tab-content\" id=\"myTabContent\"> \n\n      <div class=\"tab-pane fade show active\" id=\"friendsTab\" role=\"tabpanel\" aria-labelledby=\"friends-tab\">\n        <div class=\"\" *ngFor=\"let user of allUsers\">\n          <div class=\"card border border-top-0\">\n            <div class=\"card-body text-info\">\n              <div class=\"row\">\n                <div class=\"col-7\">\n                  <h6 class=\"card-title\">\n                      <span *ngIf = \"user.status == 'online'\"><i class=\"online\"></i></span>\n                      <span *ngIf = \"user.status != 'online'\"><i class=\"offline\"></i></span>\n      \n                    {{user.firstName}} {{user.lastName}}\n                  </h6>\n                  <p class=\"card-text\" *ngIf=\"user.friends.length\"> <i class=\"fas fa-users\"></i>\n                    {{user.friends.length}} Friends </p>\n                </div>\n                <div class=\"col-5\">\n                  <span *ngIf=\"!user.connected\">\n                    <button class=\"btn btn-outline-info\" type=\"button\" (click)=\"selectUserToSentRequst(user)\">\n                      <i class=\"fas fa-user-plus\"></i>\n                      Connect\n                    </button>\n\n\n                  </span>\n                  <span *ngIf=\"user.connected\">\n\n                    <button id=\"btnGroupDropFrActions\" type=\"button\" class=\"btn btn-outline-success\" data-toggle=\"dropdown\"\n                      aria-haspopup=\"true\" aria-expanded=\"false\">\n                      <i class=\"fas fa-check\"></i>Friends\n                    </button>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"btnGroupDropFrActions\">\n                      <a class=\"dropdown-item\" (click)=\"selectUserToUnfriend(user)\">Unfriend</a>\n                    </div>\n\n                  </span>\n\n                </div>\n              </div> <!-- End row-friends-->\n\n\n            </div> <!-- End cardbody-friends-->\n          </div> <!-- End card-friends-->\n\n        </div> <!-- border div-->\n      </div><!-- End tab-pane-friends-->\n\n      <div class=\"tab-pane fade\" id=\"sentTab\" role=\"tabpanel\" aria-labelledby=\"sent-tab\">\n        <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"requestSents.length == 0\">\n          <span>\n            No request sent yet!\n          </span>\n        </div>\n\n        <div class=\"\" *ngFor=\"let sentReq of requestSents\">\n          <div class=\"card border border-top-0\">\n            <div class=\"card-body text-info\">\n              <div class=\"row\">\n                <div class=\"col-7\">\n                  <h6 class=\"card-title\"> {{sentReq.friendName}}</h6>\n                </div>\n                <div class=\"col-5\">\n\n                  <button class=\"btn btn-outline-info\" type=\"button\" (click)=\"selectUserToCancelRequst(sentReq)\">\n                    Cancel</button>\n\n                </div>\n              </div> <!-- End row-sent-->\n\n\n            </div> <!-- End cardbody-sent-->\n          </div> <!-- End card-sent-->\n\n        </div> <!-- border div-->\n\n\n      </div> <!-- End tab-pane-sent -->\n\n\n      <div class=\"tab-pane fade\" id=\"requestsTab\" role=\"tabpanel\" aria-labelledby=\"requests-tab\">\n\n        <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"requestRecieved.length == 0\">\n          No request recieved!\n        </div>\n\n        <div class=\"\" *ngFor=\"let recievedReq of requestRecieved\">\n          <div class=\"card border border-top-0\">\n            <div class=\"card-body text-info\">\n              <div class=\"row\">\n                <div class=\"col-7\">\n                  <h6 class=\"card-title\">{{recievedReq.friendName}} </h6>\n                </div>\n                <div class=\"col-5\">\n                  <button id=\"btnGroupDropActions\" type=\"button\" class=\"btn btn-outline-info\" data-toggle=\"dropdown\"\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\n                    Actions\n                  </button>\n                  <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"btnGroupDropActions\">\n                    <a class=\"dropdown-item\" (click)=\"selectUserToAcceptRequst(recievedReq)\">Confirm</a>\n                    <a class=\"dropdown-item\" (click)=\"selectUserToRejectRequst(recievedReq)\">Delete Request</a>\n\n                  </div>\n\n                </div>\n              </div> <!-- End row-requests-->\n\n            </div> <!-- End cardbody-requests-->\n          </div> <!-- End card-requests-->\n\n        </div> <!-- border div-->\n\n\n      </div> <!-- End tab-pane-requests -->\n\n    </div> <!-- End inner tab-content-->\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/shared/friend-list/friend-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/friend-list/friend-list.component.ts ***!
  \*************************************************************/
/*! exports provided: FriendListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendListComponent", function() { return FriendListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);







var FriendListComponent = /** @class */ (function () {
    function FriendListComponent(appService, toastr, router, socketService) {
        var _this = this;
        this.appService = appService;
        this.toastr = toastr;
        this.router = router;
        this.socketService = socketService;
        this.userFriends = [];
        this.allUsers = [];
        this.allUsersData = [];
        this.requestSents = [];
        this.requestRecieved = [];
        this.getUpdatedResultOnLoad = function () {
            var getUserDetailsPromise = function () {
                return new Promise(function (resolve, reject) {
                    if (_this.authToken != null && _this.userId != null) {
                        _this.appService.getUserDetails(_this.userId, _this.authToken).subscribe(function (apiResponse) {
                            if (apiResponse.status == 200) {
                                _this.userDetails = apiResponse.data;
                                _this.appService.setUserInfoInLocalStorage(_this.userDetails);
                                //console.log(apiResponse.data)
                                resolve(_this.userDetails);
                            }
                            else {
                                _this.toastr.info(apiResponse.message, "Update!");
                                reject(apiResponse.message);
                            }
                        }, function (error) {
                            if (error.status == 400) {
                                _this.toastr.warning("User Details not found", "Error!");
                                reject("User Details not found");
                            }
                            else {
                                _this.toastr.error("Some Error Occurred", "Error!");
                                _this.router.navigate(['/serverError']);
                            }
                        } //end error
                        ); //end appservice.getuserdetails
                    } //end if checking undefined
                    else {
                        _this.toastr.info("Missing Authorization Key", "Please login again");
                        _this.router.navigate(['/login']);
                    }
                });
            }; // end getUserDetailsPromise
            var getAllUsersPromise = function (userDetails) {
                return new Promise(function (resolve, reject) {
                    //this function will get all the users. 
                    if (_this.authToken != null) {
                        _this.appService.getAllUsers(_this.authToken).subscribe(function (apiResponse) {
                            if (apiResponse.status == 200) {
                                _this.allUsers = apiResponse.data;
                                _this.allUsers = _this.allUsers.filter(function (user) { return user.userId != _this.userId; });
                                _this.allUsersData = _this.allUsers;
                                _this.userFriends = userDetails.friends;
                                _this.requestSents = userDetails.friendRequestSent;
                                _this.requestRecieved = userDetails.friendRequestRecieved;
                                /* Will set a connected flag true if both the user are friends */
                                for (var _i = 0, _a = _this.allUsers; _i < _a.length; _i++) {
                                    var user = _a[_i];
                                    for (var _b = 0, _c = _this.userFriends; _b < _c.length; _b++) {
                                        var friend = _c[_b];
                                        if (user.userId == friend.friendId) {
                                            user.connected = true;
                                        }
                                    }
                                }
                                /* Remove user from all users list if he is is in the list of sent requests*/
                                for (var _d = 0, _e = _this.allUsers; _d < _e.length; _d++) {
                                    var user = _e[_d];
                                    var _loop_1 = function (friendSent) {
                                        if (user.userId == friendSent.friendId) {
                                            _this.allUsers = _this.allUsers.filter(function (user) { return user.userId != friendSent.friendId; });
                                        }
                                    };
                                    for (var _f = 0, _g = _this.requestSents; _f < _g.length; _f++) {
                                        var friendSent = _g[_f];
                                        _loop_1(friendSent);
                                    }
                                }
                                /* Remove user from all users list if he is is in the list of requests recieved*/
                                for (var _h = 0, _j = _this.allUsers; _h < _j.length; _h++) {
                                    var user = _j[_h];
                                    var _loop_2 = function (friendRecieved) {
                                        if (user.userId == friendRecieved.friendId) {
                                            _this.allUsers = _this.allUsers.filter(function (user) { return user.userId != friendRecieved.friendId; });
                                        }
                                    };
                                    for (var _k = 0, _l = _this.requestRecieved; _k < _l.length; _k++) {
                                        var friendRecieved = _l[_k];
                                        _loop_2(friendRecieved);
                                    }
                                }
                                resolve(_this.allUsers);
                                //console.log(this.allUsers)
                            }
                            else {
                                _this.toastr.info(apiResponse.message, "Update!");
                                reject(apiResponse.message);
                            }
                        }, function (error) {
                            if (error.status == 400) {
                                _this.toastr.warning("User List falied to Update", "Error!");
                                reject("User List falied to Update");
                            }
                            else {
                                _this.toastr.error("Some Error Occurred", "Error!");
                                _this.router.navigate(['/serverError']);
                            }
                        } //end error
                        ); //end appservice.getAllUsers
                    } //end if checking undefined
                    else {
                        _this.toastr.info("Missing Authorization Key", "Please login again");
                        _this.router.navigate(['/login']);
                    }
                });
            }; //end getAllUsersPromise
            getUserDetailsPromise()
                .then(getAllUsersPromise)
                .then(function (resolve) {
                //console.log(resolve)
            })
                .catch(function (err) {
                console.log("errorhandler");
                console.log(err);
            });
        };
        this.notifyUpdatesToUser = function (data) {
            //data will be object with message and userId(recieverId)
            _this.socketService.notifyUpdates(data);
        }; //end notifyUpdatesToUser
        this.getUpdatesFromUser = function () {
            _this.socketService.getUpdatesFromUser(_this.userId).subscribe(function (data) {
                //getting message from user.
                _this.toastr.info(data.message);
                _this.getUpdatedResultOnLoad();
            });
        };
        this.getOnlineUserList = function () {
            _this.socketService.onlineUserList().subscribe(function (data) {
                _this.onlineUserList = [];
                for (var x in data) {
                    //let temp = { 'userId': x, 'userName': data[x] };
                    _this.onlineUserList.push(x);
                }
                //console.log(this.onlineUserList)
                for (var _i = 0, _a = _this.allUsers; _i < _a.length; _i++) {
                    var user = _a[_i];
                    if (_this.onlineUserList.includes(user.userId)) {
                        user.status = "online";
                    }
                    else {
                        user.status = "offline";
                    }
                }
                //console.log(this.allUsers)
            }); //end subscribe
        }; //end getOnlineUserList
    }
    FriendListComponent.prototype.ngOnInit = function () {
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authToken');
        this.userId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userId');
        this.userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userName');
        this.userInfo = this.appService.getUserInfoFromLocalStorage();
        this.getUpdatedResultOnLoad();
        this.getUpdatesFromUser();
        this.getOnlineUserList();
    };
    /* User Related Functions */
    FriendListComponent.prototype.selectUserToSentRequst = function (user) {
        var recieverId = user.userId;
        var recieverName = user.firstName + ' ' + user.lastName;
        this.sendFriendRequestFunction(recieverId, recieverName);
    };
    FriendListComponent.prototype.selectUserToCancelRequst = function (user) {
        var recieverId = user.friendId;
        var recieverName = user.friendName;
        this.cancelFriendRequestFunction(recieverId, recieverName);
    };
    FriendListComponent.prototype.selectUserToRejectRequst = function (user) {
        var senderId = user.friendId;
        var senderName = user.friendName;
        this.rejectFriendRequestFunction(senderId, senderName);
    };
    FriendListComponent.prototype.selectUserToAcceptRequst = function (user) {
        var senderId = user.friendId;
        var senderName = user.friendName;
        this.acceptFriendRequestFunction(senderId, senderName);
    };
    FriendListComponent.prototype.selectUserToUnfriend = function (user) {
        var senderId = user.userId;
        var senderName = user.firstName + ' ' + user.lastName;
        this.unfriendUserFunction(senderId, senderName);
    };
    FriendListComponent.prototype.sendFriendRequestFunction = function (recieverId, recieverName) {
        var _this = this;
        var data = {
            senderId: this.userId,
            senderName: this.userName,
            recieverId: recieverId,
            recieverName: recieverName,
            authToken: this.authToken
        };
        //console.log(data)  
        this.appService.sendFriendRequest(data).subscribe(function (apiResponse) {
            //console.log(apiResponse)
            if (apiResponse.status == 200) {
                _this.toastr.success("Friend Request Sent", "Success");
                _this.getUpdatedResultOnLoad();
                var dataForNotify = {
                    message: data.senderName + " has sent you a friend request.",
                    userId: data.recieverId
                };
                _this.notifyUpdatesToUser(dataForNotify);
            }
            else {
                _this.toastr.error(apiResponse.message, "Error!");
            }
        }, function (error) {
            if (error.status == 400) {
                _this.toastr.warning("Failed to Send Friend Request", "One or more fields are missing");
            }
            else {
                _this.toastr.error("Some Error Occurred", "Error!");
                _this.router.navigate(['/serverError']);
            }
        }); //end calling send request
    }; //end sendFriendRequestFunction
    FriendListComponent.prototype.rejectFriendRequestFunction = function (senderId, senderName) {
        var _this = this;
        var data = {
            senderId: senderId,
            senderName: senderName,
            recieverId: this.userId,
            recieverName: this.userName,
            authToken: this.authToken
        };
        //console.log(data)  
        this.appService.rejectFriendRequest(data).subscribe(function (apiResponse) {
            //console.log(apiResponse)
            if (apiResponse.status == 200) {
                _this.toastr.success("Friend Request Rejected", "Success");
                _this.getUpdatedResultOnLoad();
                var dataForNotify = {
                    message: data.recieverName + " has rejected your friend request.",
                    userId: data.senderId
                };
                _this.notifyUpdatesToUser(dataForNotify);
            }
            else {
                _this.toastr.error(apiResponse.message, "Error!");
            }
        }, function (error) {
            if (error.status == 400) {
                _this.toastr.warning("Failed to Reject Friend Request", "One or more fields are missing");
            }
            else {
                _this.toastr.error("Some Error Occurred", "Error!");
                _this.router.navigate(['/serverError']);
            }
        }); //end calling reject request
    }; //end rejectFriendRequestFunction
    FriendListComponent.prototype.cancelFriendRequestFunction = function (recieverId, recieverName) {
        var _this = this;
        var data = {
            senderId: this.userId,
            senderName: this.userName,
            recieverId: recieverId,
            recieverName: recieverName,
            authToken: this.authToken
        };
        //console.log(data)  
        this.appService.cancelFriendRequest(data).subscribe(function (apiResponse) {
            //console.log(apiResponse)
            if (apiResponse.status == 200) {
                _this.toastr.success("Friend Request Canceled", "Success");
                _this.getUpdatedResultOnLoad();
                var dataForNotify = {
                    message: data.senderName + " has Canceled friend request.",
                    userId: data.recieverId
                };
                _this.notifyUpdatesToUser(dataForNotify);
            }
            else {
                _this.toastr.error(apiResponse.message, "Error!");
            }
        }, function (error) {
            if (error.status == 400) {
                _this.toastr.warning("Failed to Cancel Friend Request", "One or more fields are missing");
            }
            else {
                _this.toastr.error("Some Error Occurred", "Error!");
                _this.router.navigate(['/serverError']);
            }
        }); //end calling cancel request
    }; //end cancelFriendRequestFunction
    FriendListComponent.prototype.acceptFriendRequestFunction = function (senderId, senderName) {
        var _this = this;
        var data = {
            senderId: senderId,
            senderName: senderName,
            recieverId: this.userId,
            recieverName: this.userName,
            authToken: this.authToken
        };
        //console.log(data)  
        this.appService.acceptFriendRequest(data).subscribe(function (apiResponse) {
            //console.log(apiResponse)
            if (apiResponse.status == 200) {
                _this.toastr.success("Friend Request Accepted", "Success");
                _this.getUpdatedResultOnLoad();
                var dataForNotify = {
                    message: data.recieverName + " has accepted your friend request.",
                    userId: data.senderId
                };
                _this.notifyUpdatesToUser(dataForNotify);
            }
            else {
                _this.toastr.error(apiResponse.message, "Error!");
            }
        }, function (error) {
            if (error.status == 400) {
                _this.toastr.warning("Failed to accept Friend Request", "One or more fields are missing");
            }
            else {
                _this.toastr.error("Some Error Occurred", "Error!");
                _this.router.navigate(['/serverError']);
            }
        }); //end calling accept request
    }; //end acceptFriendRequestFunction
    FriendListComponent.prototype.unfriendUserFunction = function (senderId, senderName) {
        var _this = this;
        var data = {
            senderId: senderId,
            senderName: senderName,
            recieverId: this.userId,
            recieverName: this.userName,
            authToken: this.authToken
        };
        //console.log(data)  
        this.appService.unfriendUser(data).subscribe(function (apiResponse) {
            //console.log(apiResponse)
            if (apiResponse.status == 200) {
                _this.toastr.success("You are not friends ", "Success");
                _this.getUpdatedResultOnLoad();
                var dataForNotify = {
                    message: "You are no longer friend of " + data.recieverName + ".",
                    userId: data.senderId
                };
                _this.notifyUpdatesToUser(dataForNotify);
            }
            else {
                _this.toastr.error(apiResponse.message, "Error!");
            }
        }, function (error) {
            if (error.status == 400) {
                _this.toastr.warning("Failed to unfriend User", "One or more fields are missing");
            }
            else {
                _this.toastr.error("Some Error Occurred", "Error!");
                _this.router.navigate(['/serverError']);
            }
        }); //end calling unfriend request
    }; //end unfriendUserFunction
    FriendListComponent.prototype.ngOnDestroy = function () {
        this.socketService.exitSocket();
    };
    FriendListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-friend-list',
            template: __webpack_require__(/*! ./friend-list.component.html */ "./src/app/shared/friend-list/friend-list.component.html"),
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]],
            styles: [__webpack_require__(/*! ./friend-list.component.css */ "./src/app/shared/friend-list/friend-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]])
    ], FriendListComponent);
    return FriendListComponent;
}());



/***/ }),

/***/ "./src/app/shared/list/list.component.css":
/*!************************************************!*\
  !*** ./src/app/shared/list/list.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.list-container {\r\n    height: 78vh;\r\n    width:100%;\r\n  }\r\n  \r\n  \r\n  .list-sidenav-content {\r\n      height: 100%;\r\n      background-color: #ffffff;\r\n    }\r\n  \r\n  \r\n  .list-sidenav {\r\n      width: 30vw;\r\n      background-color: #EDF5E1;\r\n    }\r\n  \r\n  \r\n  .nav .nav-item :hover{\r\n      background-color: #ffffff;\r\n    }\r\n  \r\n  \r\n  .taskList{\r\n      margin-left: 2em;\r\n    }\r\n  \r\n  \r\n  .taskList:hover{\r\n      background-color: #F4F4F4;\r\n    }\r\n  \r\n  \r\n  .markDone{\r\n      color:green;\r\n    }\r\n  \r\n  \r\n  .strikethrough {\r\n      text-decoration: line-through;\r\n    }\r\n  \r\n  \r\n  h4,i{\r\n      color:#E27D60;\r\n      \r\n    }\r\n  \r\n  \r\n  .box{\r\n      border-bottom:1px solid grey;\r\n  }\r\n  \r\n  \r\n  .box-1{\r\n    border:1px solid grey;\r\n}\r\n  \r\n  \r\n  /* Media Query for 320px - 454px Devices*/\r\n  \r\n  \r\n  @media only screen and (min-width:300px) and (max-width:454px){\r\n    .list-sidenav {\r\n      width: 80vw;\r\n    }\r\n  \r\n  }\r\n  \r\n  \r\n  /* Media Query for 455px - 768px Devices*/\r\n  \r\n  \r\n  @media only screen and (min-width:455px) and (max-width:768px) {\r\n    .list-sidenav {\r\n      width: 50vw;\r\n    }\r\n   \r\n  }\r\n  \r\n  \r\n  .button1{\r\n\r\n    margin-left:15px;\r\n    background:transparent;\r\n    color:#7d7d7d;\r\n    font-weight:bold;\r\n    border-radius:15px;\r\n    border:2px solid #E27D60;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztHQUNaOzs7RUFHRDtNQUNJLGFBQWE7TUFDYiwwQkFBMEI7S0FDM0I7OztFQUVEO01BQ0UsWUFBWTtNQUNaLDBCQUEwQjtLQUMzQjs7O0VBRUQ7TUFDRSwwQkFBMEI7S0FDM0I7OztFQUVEO01BQ0UsaUJBQWlCO0tBQ2xCOzs7RUFFRDtNQUNFLDBCQUEwQjtLQUMzQjs7O0VBRUQ7TUFDRSxZQUFZO0tBQ2I7OztFQUVEO01BQ0UsOEJBQThCO0tBQy9COzs7RUFFRDtNQUNFLGNBQWM7O0tBRWY7OztFQUVEO01BQ0UsNkJBQTZCO0dBQ2hDOzs7RUFFRDtJQUNFLHNCQUFzQjtDQUN6Qjs7O0VBRUMsMENBQTBDOzs7RUFFMUM7SUFDRTtNQUNFLFlBQVk7S0FDYjs7R0FFRjs7O0VBRUQsMENBQTBDOzs7RUFFMUM7SUFDRTtNQUNFLFlBQVk7S0FDYjs7R0FFRjs7O0VBRUQ7O0lBRUUsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5QkFBeUI7R0FDMUIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5saXN0LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDc4dmg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gIH1cclxuICBcclxuICBcclxuICAubGlzdC1zaWRlbmF2LWNvbnRlbnQge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgICAgIFxyXG4gICAgLmxpc3Qtc2lkZW5hdiB7XHJcbiAgICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURGNUUxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubmF2IC5uYXYtaXRlbSA6aG92ZXJ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50YXNrTGlzdHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRhc2tMaXN0OmhvdmVye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWFya0RvbmV7XHJcbiAgICAgIGNvbG9yOmdyZWVuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc3RyaWtldGhyb3VnaCB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoNCxpe1xyXG4gICAgICBjb2xvcjojRTI3RDYwO1xyXG4gICAgICBcclxuICAgIH1cclxuICBcclxuICAgIC5ib3h7XHJcbiAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGdyZXk7XHJcbiAgfSAgXHJcblxyXG4gIC5ib3gtMXtcclxuICAgIGJvcmRlcjoxcHggc29saWQgZ3JleTtcclxufSAgXHJcbiAgICBcclxuICAvKiBNZWRpYSBRdWVyeSBmb3IgMzIwcHggLSA0NTRweCBEZXZpY2VzKi9cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MzAwcHgpIGFuZCAobWF4LXdpZHRoOjQ1NHB4KXtcclxuICAgIC5saXN0LXNpZGVuYXYge1xyXG4gICAgICB3aWR0aDogODB2dztcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgLyogTWVkaWEgUXVlcnkgZm9yIDQ1NXB4IC0gNzY4cHggRGV2aWNlcyovXHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQ1NXB4KSBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgLmxpc3Qtc2lkZW5hdiB7XHJcbiAgICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgfVxyXG4gICBcclxuICB9XHJcblxyXG4gIC5idXR0b24xe1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IzdkN2Q3ZDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICNFMjdENjA7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/list/list.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/list/list.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ng-template #modalContent let-close=\"close\">\n  <div class=\"modal-header\">\n    <h3 class=\"modal-title\" style=\"color:#7d7d7d;font-weight:bold\">{{modalData.eventData.action}}</h3>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n\n        <div class=\"card\">\n          <div class=\"card-body\">\n\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <h6 style=\"color:#E27D60;font-weight:bold\">  Name </h6>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\" style=\"color:#7d7d7d;font-weight:bold\" >{{modalData.eventData.name}} </h6>\n              </div>\n            </div>\n           <br>\n            <div class=\"row \">\n              <div class=\"col-4\">\n                <h6 style=\"color:#E27D60;font-weight:bold\"> Created By </h6>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\" style=\"color:#7d7d7d;font-weight:bold\">{{modalData.eventData.creatorName}}</h6>\n              </div>\n            </div>\n           <br>\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <h6 style=\"color:#E27D60;font-weight:bold\"> Created On </h6>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\" style=\"color:#7d7d7d;font-weight:bold\">{{modalData.eventData.createdOn | date: 'medium' }}</h6>\n              </div>\n            </div>\n            <br>\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <h6 style=\"color:#E27D60;font-weight:bold\">Last Modified By</h6>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\" style=\"color:#7d7d7d;font-weight:bold\">{{modalData.eventData.modifierName }} </h6>\n              </div>\n            </div>\n            <br>\n            <div class=\"row \">\n              <div class=\"col-4\">\n                <h6 style=\"color:#E27D60;font-weight:bold\">Last Modified On </h6>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\" style=\"color:#7d7d7d;font-weight:bold\">{{modalData.eventData.modifiedOn | date: 'medium'}} </h6>\n              </div>\n            </div>\n            <br>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<mat-sidenav-container class=\"list-container\">\n  <!-- Start Side nav-->\n  <mat-sidenav #drawerList opened mode=\"push\" class=\"list-sidenav border \">\n    <br>\n\n    <div >\n      <h4 class=\"text-center\" style=\"color:#7d7d7d\"> <b>Your List</b>  <a style=\"float:right\" (click)=\"drawerList.toggle()\"  matTooltip=\"Hide me!\"><i class=\"fas fa-times\" style=\"margin-right:19px\"></i></a></h4>\n     \n    </div>\n\n    <div>\n      <ul class=\"nav flex-column\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" *ngIf=\"other\">\n              <form id=\"list\" class=\"form-horizontal\" role=\"form\">\n            <mat-form-field>\n              <mat-label>List Name</mat-label>\n              <input matInput placeholder=\"Enter List Name\"  [(ngModel)]=\"enteredListName\" #lstName=\"ngModel\" name=\"enteredListName\"\n                (keydown)=\"addListUsingKeypress($event)\" required>\n              <mat-error *ngIf=\"lstName.errors?.required\">You must enter a value</mat-error>\n\n            </mat-form-field>\n            <button class=\"btn btn-primary btn-sm button1\" (click)=\"addListFunction()\">CREATE</button>\n          </form>\n          </a>\n        \n        </li>\n\n\n        <li class=\"nav-item\" matTooltip=\"Add a new List\">\n          <a class=\"nav-link\" (click)=\"enableListBox()\">\n            <i class=\"fas fa-plus\"></i> <span style=\"color:#7d7d7d;margin-left:5px\"><b>New List</b></span>\n          </a>\n        </li>\n\n      </ul>\n\n\n      <ul class=\"nav flex-column\" *ngFor=\"let list of allLists\">\n\n        <li class=\"nav-item\" matTooltip=\"Select to add items into it\">\n          <a class=\"nav-link\" (click)=\"getItemsOfList(list);drawerList.toggle()\">\n            <span> <i class=\"fas fa-list-ul\"></i> &nbsp; <span style=\"color:#7d7d7d\"><b>{{list.listName}}</b></span>  </span>\n          </a>\n        </li>\n\n      </ul>\n\n    </div>\n\n\n  </mat-sidenav> <!-- end Side nav-->\n\n  <!-- Start Side nav content-->\n  <mat-sidenav-content class=\"list-sidenav-content border box-1\">\n    <div class=\"container-fluid\">\n\n      <div class=\"row box\">\n        <div class=\"col-2\">\n          <a (click)=\"drawerList.toggle()\" matTooltip=\"Toggle List Section\">\n            <i class=\"fas fa-bars\" style=\"margin-top:10px;margin-bottom:6px\"></i>\n          </a>\n        </div>\n\n        <div class=\"col-8\" >\n          <span contenteditable=\"true\" style=\"color:#7d7d7d;font-weight:bold\" [textContent]=\"selectedListName\" (keydown)=\"updateListUsingKeypress($event)\"\n            (blur)=\"selectedListName=$event.target.textContent;updateListName()\" matTooltip=\"Click to Edit Me\">\n                 {{selectedListName}}\n          </span>\n\n          &nbsp;&nbsp;\n\n          <span *ngIf=\"itemsCount > 0\" matTooltip=\"Total work done\">\n            <span class=\"badge badge-pill badge-success\" *ngIf=\"itemsDoneCount == itemsCount \">\n              {{itemsDoneCount}} / {{itemsCount}}\n            </span>\n\n            <span class=\"badge badge-pill badge-danger\" *ngIf=\"itemsDoneCount < itemsCount \">\n              {{itemsDoneCount}} / {{itemsCount}}\n            </span>\n\n          </span>\n        </div>\n\n        <div class=\"col-2\">\n          <div *ngIf=\"selectedListName\">\n\n            <div class=\"dropdown\">\n\n              <a class=\"btn btn-ligh\" id=\"dropdownList\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" matTooltip=\"Options related to List\">\n                <i class=\"fas fa-ellipsis-v\"></i>\n              </a>\n\n              <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownList\">\n                <span *ngIf=\"listCreatorId == userId\">\n                  <a class=\"dropdown-item\" *ngIf=\"selectedListMode == 'private'\" (click)=\"selectedListMode = 'public';updateListMode()\">\n                    <i class=\"fas fa-eye\"></i> &nbsp;\n                    <span  style=\"color:#7d7d7d;font-weight:bold\">Make it Public</span>\n                  </a>\n  \n                  <a class=\"dropdown-item\" *ngIf=\"selectedListMode == 'public'\" (click)=\"selectedListMode = 'private';updateListMode()\">\n                    <i class=\"fas fa-eye-slash\"></i> &nbsp;\n                    <span  style=\"color:#7d7d7d;font-weight:bold\">Make it Private</span>\n                  </a>\n                    \n                </span>\n\n                <a class=\"dropdown-item\" (click)=\"getListDetailsFunction()\" matTooltip=\"View details like creator name etc.. \">\n                  <i class=\"fas fa-info-circle\"></i> &nbsp;\n                  <span  style=\"color:#7d7d7d;font-weight:bold\">View Details</span>\n                </a>\n\n                <a class=\"dropdown-item\" (click)=\"deleteListFunction()\" matTooltip=\"Be carefull..You will not be able to do undo of this action\">\n                  <i class=\"fas fa-trash \"></i> &nbsp;\n                  <span  style=\"color:#7d7d7d;font-weight:bold\"> Delete List</span>\n                </a>\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf=\"selectedListName\" style=\"margin-top:2vh\">\n        <div class=\"col-md-12\">\n\n          <div *ngFor=\"let item of allItems\">\n            <div class=\"taskList\">\n\n              <div id=\"item\">\n\n                <span matTooltip=\"Click to mark as done\">\n                  <i class=\"far fa-check-circle\" *ngIf=\"item.itemDone == 'no'\" (click)=\"markAsDoneUndone(item.itemId,item.itemName,'yes')\"></i>\n                  <i class=\"fas fa-check-circle markDone\" *ngIf=\"item.itemDone == 'yes'\" (click)=\"markAsDoneUndone(item.itemId,item.itemName,'no')\"></i>\n                </span>\n\n\n                <span [ngClass]=\"{'strikethrough':item.itemDone === 'yes'}\">\n                 <span style=\"color:#7d7d7d;font-weight:bold;margin-left:7px\">{{item.itemName}}</span> \n                </span>\n\n                <span class=\"dropdown\">\n                  <a class=\"btn btn-link\" id=\"dropdownTask\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" matTooltip=\"Options related to Item\">\n                    <i class=\"fas fa-ellipsis-h\"></i>\n                  </a>\n\n                  <span class=\"dropdown-menu\" aria-labelledby=\"dropdownTask\">\n\n                    <a class=\"dropdown-item\" (click)=\"openDialogToupdateTaskName(item.itemId,item.itemName,item.itemDone)\" matTooltip=\"Update Task Name\">\n                      <i class=\"fas fa-edit\"></i> &nbsp;\n                      <span style=\"color:#7d7d7d;font-weight:bold\">Edit Task Name</span>\n                    </a>\n\n                    <a class=\"dropdown-item\" (click)=\"selectedItemId=item.itemId;openDialogToAddSubItem();\" matTooltip=\"Add a new sub item into it\">\n                      <i class=\"fas fa-plus\"></i> &nbsp;\n                      <span style=\"color:#7d7d7d;font-weight:bold\">Add Sub Task</span>\n                    </a>\n\n                    <a class=\"dropdown-item\" (click)=\"getItemDetailsFunction(item.itemId)\" matTooltip=\"View details of item like creator name etc...\">\n                      <i class=\"fas fa-info-circle\"></i> &nbsp;\n                      <span style=\"color:#7d7d7d;font-weight:bold\">View Details</span>\n\n                    </a>\n\n                    <a class=\"dropdown-item\" (click)=\"deleteItemFunction(item.itemId)\" matTooltip=\"Are you sure?\">\n                      <i class=\"fas fa-trash\"></i> &nbsp;\n                      <span style=\"color:#7d7d7d;font-weight:bold\">Delete Item</span>\n\n                    </a>\n                  </span>\n                </span>\n\n              </div>\n\n              <hr>\n\n              <div *ngFor=\"let subitem of item.subItems\">\n                <div class=\"taskList\">\n                  <div id=\"subitem\" style=\"display:inline-flex\">\n\n                    <span>\n                      <i class=\"far fa-check-circle\" *ngIf=\"subitem.subItemDone == 'no'\" (click)=\"markSubTaskAsDoneUndone(item.itemId,subitem.subItemId,subitem.subItemName,'yes')\"></i>\n                      <i class=\"fas fa-check-circle markDone\" *ngIf=\"subitem.subItemDone == 'yes'\" (click)=\"markSubTaskAsDoneUndone(item.itemId,subitem.subItemId,subitem.subItemName,'no')\"></i>\n                    </span>\n                    &nbsp; &nbsp;\n                    <span [ngClass]=\"{'strikethrough':subitem.subItemDone === 'yes'}\">\n                      <p style=\"color:#7d7d7d;font-weight:bold\" > {{subitem.subItemName}} </p>\n                    </span>\n\n                    <span class=\"dropdown\">\n                      <a class=\"btn btn-link\" id=\"dropdownSubTask\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                        aria-expanded=\"false\" matTooltip=\"Options related to Sub Item\">\n                        <i class=\"fas fa-ellipsis-h\"></i>\n                      </a>\n\n                      <span class=\"dropdown-menu\" aria-labelledby=\"dropdownSubTask\">\n\n                        <a class=\"dropdown-item\" (click)=\"openDialogToupdateSubTaskName(item.itemId,subitem.subItemId,subitem.subItemName,subitem.subItemDone)\">\n                          <i class=\"fas fa-edit\"></i> &nbsp;\n\n                          <span>Edit Sub Task Name</span>\n                        </a>\n\n                        <a class=\"dropdown-item\" (click)=\"getSubItemDetailsFunction(item.itemId,subitem.subItemId)\">\n                          <i class=\"fas fa-info-circle\"></i> &nbsp;\n                          <span>View Details</span>\n\n                        </a>\n\n                        <a class=\"dropdown-item\" (click)=\"deleteSubItemFunction(item.itemId,subitem.subItemId)\">\n                          <i class=\"fas fa-trash\"></i> &nbsp;\n                          <span>Delete Sub Item</span>\n\n                        </a>\n                      </span>\n                    </span>\n\n                  </div>\n                  <hr>\n                </div>\n\n              </div>\n\n\n            </div>\n\n          </div>\n\n          <!-- start add task-->\n          <mat-list>\n\n            <mat-list-item (click)=\"enableAddTaskBoxFunction()\" *ngIf=\"enableAddTaskBox\">\n              <div style=\"display:inline-flex\" matTooltip=\"Add new item in your Todo\">\n                <i class=\"fas fa-plus\"></i>\n                &nbsp;\n                <h4 mat-line> Add a Task </h4>\n              </div>\n            </mat-list-item>\n\n            <mat-list-item *ngIf=\"taskBox\">\n              <mat-form-field>\n                <mat-label>Task Name</mat-label>\n                <input matInput #tskName=\"ngModel\" [(ngModel)]=\"enteredTaskName\" name=\"enteredTaskName\" (keydown)=\"addTaskUsingKeypress($event)\"\n                  required>\n\n              </mat-form-field>\n            </mat-list-item>\n            <mat-divider></mat-divider>\n\n          </mat-list>\n          <!-- end add task-->\n\n        </div>\n      </div>\n\n\n    </div>\n\n  </mat-sidenav-content> <!-- end Side nav content-->\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/shared/list/list.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/list/list.component.ts ***!
  \***********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_modal_modal_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/modal/modal.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal.module.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/dialog-box/dialog-box.component */ "./src/app/shared/dialog-box/dialog-box.component.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__);






//import for Routing

//import for toastr



var ListComponent = /** @class */ (function () {
    function ListComponent(appService, toastr, router, dialog, modal, socketService) {
        var _this = this;
        this.appService = appService;
        this.toastr = toastr;
        this.router = router;
        this.dialog = dialog;
        this.modal = modal;
        this.socketService = socketService;
        this.allLists = [];
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.value = 'push';
        this.other = false;
        this.enteredListName = '';
        this.enteredTaskName = '';
        this.enteredSubTaskName = '';
        this.enableAddTaskBox = true;
        this.enableAddSubTaskBox = true;
        this.taskBox = false;
        this.subTaskBox = false;
        //public allLists = []
        this.allItems = [];
        this.selectedListNameTemp = '';
        /* List Functions */
        this.addListUsingKeypress = function (event) {
            if (event.keyCode === 13) { // 13 is keycode of enter.
                if (_this.enteredListName === null || _this.enteredListName === '' || _this.enteredListName == undefined) {
                    _this.toastr.error("You must enter a value", "Error!");
                }
                else {
                    //console.log("Full")
                    _this.addListFunction();
                    _this.enteredListName = '';
                    _this.disableListBox();
                }
            } //end keycode if
        }; // end addListUsingKeypress
        this.updateListUsingKeypress = function (event) {
            if (event.keyCode === 13) { // 13 is keycode of enter.
                if (_this.selectedListName === null || _this.selectedListName === '' || _this.selectedListName == undefined || _this.selectedListName == _this.selectedListNameTemp) {
                    _this.toastr.info("Not Updated", "Info!");
                }
                else {
                    _this.updateListFunction(_this.selectedListName, _this.userMode);
                    _this.selectedListNameTemp = _this.selectedListName;
                }
            } //end keycode if
        }; // end updateListUsingKeypress
        this.updateListName = function () {
            //console.log(this.selectedListName)
            //console.log(this.selectedListNameTemp)
            if (_this.selectedListName != _this.selectedListNameTemp) {
                _this.updateListFunction(_this.selectedListName, _this.userMode);
                _this.selectedListNameTemp = _this.selectedListName;
            }
        }; // end updateListName
        this.updateListMode = function () {
            //console.log(this.selectedListName)
            //console.log(this.selectedListMode)
            _this.updateListFunction(_this.selectedListName, _this.selectedListMode);
        }; // end updateListMode
        this.enableListBox = function () {
            _this.other = true;
        }; // end enableListBox
        this.disableListBox = function () {
            _this.other = false;
        }; // end disableListBox
        this.getItemsOfList = function (list) {
            _this.selectedListNameTemp = list.listName;
            _this.selectedListName = list.listName;
            _this.selectedListId = list.listId;
            _this.selectedListMode = list.listMode;
            _this.listCreatorId = list.listCreatorId;
            _this.enableAddTaskBox = true;
            _this.taskBox = false;
            _this.getAllItemFunction();
        };
        /* Item Functions */
        this.addTaskUsingKeypress = function (event) {
            if (event.keyCode === 13) { // 13 is keycode of enter.
                if (_this.enteredTaskName === null || _this.enteredTaskName === '' || _this.enteredTaskName == undefined) {
                    _this.toastr.error("You must enter a value", "Error!");
                }
                else {
                    _this.itemName = _this.enteredTaskName;
                    _this.addItemFunction();
                    _this.enteredTaskName = '';
                    _this.disableAddTaskBoxFunction();
                }
            } //end keycode if
        }; // end addTaskUsingKeypress
        this.updateTaskName = function () {
            //console.log(this.selectedListName)
            //console.log(this.selectedListNameTemp)
            if (_this.selectedListName != _this.selectedListNameTemp) {
                _this.updateListFunction(_this.selectedListName, 'private');
                _this.selectedListNameTemp = _this.selectedListName;
            }
        }; // end updateTaskName
        this.markAsDoneUndone = function (itemId, itemName, itemDone) {
            //console.log(itemId)
            //console.log(itemName)
            //console.log(itemDone)
            _this.updateItemFunction(false, null, itemId, itemName, itemDone);
        }; // end markAsDoneUndone
        this.enableAddTaskBoxFunction = function () {
            _this.enableAddTaskBox = false;
            _this.taskBox = true;
        }; // end enableAddTaskBoxFunction
        this.disableAddTaskBoxFunction = function () {
            _this.enableAddTaskBox = true;
            _this.taskBox = false;
        }; // end disableAddTaskBoxFunction
        /* sub item Functions */
        this.enableAddSubTaskBoxFunction = function () {
            _this.enableAddSubTaskBox = false;
            _this.subTaskBox = true;
        }; // end enableAddSubTaskBoxFunction
        this.markSubTaskAsDoneUndone = function (itemId, subItemId, subItemName, subItemDone) {
            //console.log(subItemDone)
            _this.updateSubItemFunction(false, null, itemId, subItemId, subItemName, subItemDone);
        }; // end markSubTaskAsDoneUndone
        /* View Details */
        this.openModel = function (eventData) {
            _this.modalData = { eventData: eventData };
            _this.modal.open(_this.modalContent, { size: 'lg' });
        };
        /* Database functions */
        /* List functions */
        this.getListDetailsFunction = function () {
            //this function will get details of given list. 
            if (_this.selectedListId != null && _this.authToken != null) {
                _this.appService.getListDetails(_this.selectedListId, _this.authToken).subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        var resultData = {
                            action: 'List Details',
                            name: apiResponse.data.listName,
                            creatorName: apiResponse.data.listCreatorName,
                            createdOn: apiResponse.data.listCreatedOn,
                            modifierName: apiResponse.data.listModifierName,
                            modifiedOn: apiResponse.data.listModifiedOn
                        };
                        //Open model here with response data
                        _this.openModel(resultData);
                    }
                    else {
                        _this.toastr.info(apiResponse.message, "Update!");
                    }
                }, function (error) {
                    if (error.status == 400) {
                        _this.toastr.warning("Failed to get List Details", "Either user or List not found");
                    }
                    else {
                        _this.toastr.error("Some Error Occurred", "Error!");
                        _this.router.navigate(['/serverError']);
                    }
                } //end error
                ); //end appservice.getListDetails
            } //end if checking undefined
            else {
                _this.toastr.info("Missing Authorization Key", "Please login again");
                _this.router.navigate(['/login']);
            }
        }; //end getListDetailsFunction
        /* Item Related Functions */
        this.getItemDetailsFunction = function (itemId) {
            //this function will get details of given item. 
            if (itemId != null && _this.authToken != null) {
                _this.appService.getItemDetails(itemId, _this.authToken).subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        var resultData = {
                            action: 'Item Details',
                            name: apiResponse.data.itemName,
                            creatorName: apiResponse.data.itemCreatorName,
                            createdOn: apiResponse.data.itemCreatedOn,
                            modifierName: apiResponse.data.itemModifierName,
                            modifiedOn: apiResponse.data.itemModifiedOn
                        };
                        //Open model here with response data
                        _this.openModel(resultData);
                    }
                    else {
                        _this.toastr.info(apiResponse.message, "Update!");
                    }
                }, function (error) {
                    if (error.status == 400) {
                        _this.toastr.warning("Failed to get List Details", "Either user or List not found");
                    }
                    else {
                        _this.toastr.error("Some Error Occurred", "Error!");
                        _this.router.navigate(['/serverError']);
                    }
                } //end error
                ); //end appservice.getListDetails
            } //end if checking undefined
            else {
                _this.toastr.info("Missing Authorization Key", "Please login again");
                _this.router.navigate(['/login']);
            }
        }; //end getItemDetailsFunction
        this.getAllItemFunction = function () {
            _this.allItems = [];
            if (_this.selectedListId != null && _this.authToken != null) {
                _this.appService.getAllItems(_this.selectedListId, _this.authToken).subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.allItems = apiResponse.data;
                        _this.itemsCount = _this.allItems.length;
                        var itemsDone = _this.allItems.filter(function (item) { return item.itemDone == 'yes'; });
                        _this.itemsDoneCount = itemsDone.length;
                        //console.log(itemsDone.length)
                        //this.toastr.info("Lists Updated", `Lists Found!`);
                        //console.log(this.allItems)
                    }
                    else {
                        _this.toastr.info(apiResponse.message, "Update!");
                        _this.allItems.length = 0;
                        _this.itemsCount = 0;
                    }
                }, function (error) {
                    if (error.status == 400) {
                        _this.toastr.warning("Items Failed to Update", "Either user or Item not found");
                        _this.allItems.length = 0;
                        _this.itemsCount = 0;
                    }
                    else {
                        _this.toastr.error("Some Error Occurred", "Error!");
                        _this.router.navigate(['/serverError']);
                    }
                } //end error
                ); //end appservice.getAllLists
            } //end if checking undefined
            else {
                _this.toastr.info("Missing Authorization Key", "Please login again");
                _this.router.navigate(['/login']);
            }
        }; //end getAllItemFunction
        /* Sub item Functions */
        this.getSubItemDetailsFunction = function (itemId, subItemId) {
            //this function will get details of given item. 
            if (itemId != null && _this.authToken != null && subItemId != null) {
                var data = {
                    itemId: itemId,
                    subItemId: subItemId,
                    authToken: _this.authToken
                };
                _this.appService.getSubItemDetails(data).subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        //console.log(apiResponse.data[0].subItems[0])
                        var resultData = {
                            action: 'Sub Item Details',
                            name: apiResponse.data[0].subItems[0].subItemName,
                            creatorName: apiResponse.data[0].subItems[0].subItemCreatorName,
                            createdOn: apiResponse.data[0].subItems[0].subItemCreatedOn,
                            modifierName: apiResponse.data[0].subItems[0].subItemModifierName,
                            modifiedOn: apiResponse.data[0].subItems[0].subItemModifiedOn
                        };
                        //Open model here with response data
                        _this.openModel(resultData);
                    }
                    else {
                        _this.toastr.info(apiResponse.message, "Update!");
                    }
                }, function (error) {
                    if (error.status == 400) {
                        _this.toastr.warning("Failed to get List Details", "Either user or List not found");
                    }
                    else {
                        _this.toastr.error("Some Error Occurred", "Error!");
                        _this.router.navigate(['/serverError']);
                    }
                } //end error
                ); //end appservice.getListDetails
            } //end if checking undefined
            else {
                _this.toastr.info("Missing Authorization Key", "Please login again");
                _this.router.navigate(['/login']);
            }
        }; //end getSubItemDetailsFunction
        //* Sockets functions *//
        /* Listened Events */
        this.getUpdatesFromUser = function () {
            _this.socketService.getUpdatesFromUser(_this.userId).subscribe(function (data) {
                //getting message from user.
                //console.log(data)
                if (data.listId != undefined && data.listId == _this.selectedListId)
                    _this.getAllItemFunction();
            });
        }; //end getUpdatesFromUser
    }
    ListComponent.prototype.ngOnInit = function () {
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken');
        this.userId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('userId');
        this.userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('userName');
        this.userInfo = this.appService.getUserInfoFromLocalStorage();
        //console.log(this.userInfo)
        this.getUpdatesFromUser();
    };
    ListComponent.prototype.notifyUserAboutList = function (data) {
        this.notify.emit(data);
    };
    ListComponent.prototype.addListFunction = function () {
        var _this = this;
        if (!this.enteredListName) {
            this.toastr.warning("List Name is required", "Warning!");
        }
        else {
            var data_1 = {
                listName: this.enteredListName,
                listCreatorId: this.userId,
                listCreatorName: this.userName,
                listModifierId: this.userId,
                listModifierName: this.userName,
                listMode: this.userMode,
                authToken: this.authToken
            };
            //console.log(data)  
            this.appService.addList(data_1).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.enteredListName = '';
                    _this.disableListBox();
                    _this.toastr.success("List Added", "Success");
                    var notifyData = {
                        message: data_1.listCreatorName + " has added a List named as " + data_1.listName,
                    };
                    _this.notifyUserAboutList(notifyData);
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                if (error.status == 400) {
                    _this.toastr.warning("Failed to add List", "One or more fields are missing");
                }
                else {
                    _this.toastr.error("Some Error Occurred", "Error!");
                    _this.router.navigate(['/serverError']);
                }
            }); //end calling addMeeting
        }
    }; //end addListFunction
    ListComponent.prototype.updateListFunction = function (name, mode) {
        var _this = this;
        if (!name) {
            this.toastr.warning("List Name is required", "Warning!");
        }
        else if (mode == undefined) {
            this.toastr.warning("List Mode is required", "Warning!");
        }
        else {
            var data_2 = {
                listId: this.selectedListId,
                listName: name,
                listModifierId: this.userId,
                listModifierName: this.userName,
                listMode: mode,
                authToken: this.authToken
            };
            //console.log(data)  
            this.appService.updateList(data_2).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("List Name Updated", "Success");
                    var notifyData = {
                        message: data_2.listModifierName + " has updated a list name " + data_2.listName,
                    };
                    _this.notifyUserAboutList(notifyData);
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                if (error.status == 400) {
                    _this.toastr.warning("Failed to Update List", "One or more fields are missing");
                }
                else {
                    _this.toastr.error("Some Error Occurred", "Error!");
                    _this.router.navigate(['/serverError']);
                }
            }); //end calling addMeeting
        }
    }; //end updateListFunction
    ListComponent.prototype.deleteListFunction = function () {
        var _this = this;
        if (!this.selectedListId) {
            this.toastr.warning("List Id is required", "Warning!");
        }
        else {
            var data = {
                listId: this.selectedListId,
                authToken: this.authToken
            };
            this.appService.deleteList(data).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("List Deleted", "Success");
                    var notifyData = {
                        message: _this.userName + " has deleted a List named as " + _this.selectedListName,
                    };
                    _this.notifyUserAboutList(notifyData);
                    _this.selectedListName = '';
                    _this.itemsCount = 0;
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                if (error.status == 400) {
                    _this.toastr.warning("Failed to Delete List", "One or more fields are missing");
                }
                else {
                    _this.toastr.error("Some Error Occurred", "Error!");
                    _this.router.navigate(['/serverError']);
                }
            }); //end calling addMeeting
        }
    }; //end deleteListFunction
    ListComponent.prototype.addItemFunction = function (hasValue, gotData) {
        var _this = this;
        if (!this.selectedListId) {
            this.toastr.warning("List Id is required", "Warning!");
        }
        else if (!this.itemName) {
            this.toastr.warning("Item Name is required", "Warning!");
        }
        else {
            var data = {};
            if (hasValue) {
                data = gotData;
            }
            else {
                data = {
                    listId: this.selectedListId,
                    itemName: this.itemName,
                    itemCreatorId: this.userId,
                    itemCreatorName: this.userName,
                    itemModifierId: this.userId,
                    itemModifierName: this.userName,
                };
            }
            data.authToken = this.authToken;
            //console.log(data.listId)
            this.appService.addItem(data).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("Item Added", "Success");
                    //console.log(apiResponse.data)
                    var saveItem = {
                        listId: _this.selectedListId,
                        key: 'Item Add',
                        authToken: _this.authToken
                    };
                    saveItem.itemId = apiResponse.data.itemId;
                    _this.addHistoryFunction(saveItem);
                    _this.getAllItemFunction();
                    var notifyData = {
                        message: _this.userName + " has added a item into list named as " + _this.selectedListName,
                        listId: _this.selectedListId
                    };
                    _this.notifyUserAboutList(notifyData);
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                if (error.status == 400) {
                    _this.toastr.warning("Failed to add Item", "One or more fields are missing");
                }
                else {
                    _this.toastr.error("Some Error Occurred", "Error!");
                    _this.router.navigate(['/serverError']);
                }
            }); //end calling addMeeting
        }
    }; //end addItemFunction
    ListComponent.prototype.updateItemFunction = function (hasValue, gotData, itemId, itemName, itemDone) {
        var _this = this;
        var data = {};
        if (hasValue) {
            data = gotData;
        }
        else {
            data = {
                itemId: itemId,
                itemName: itemName,
                itemModifierId: this.userId,
                itemModifierName: this.userName,
                itemDone: itemDone,
            };
            var saveItem = {
                listId: this.selectedListId,
                key: 'Item Update',
                authToken: this.authToken,
                itemId: itemId
            };
            this.addHistoryFunction(saveItem);
        }
        data.authToken = this.authToken;
        //console.log(data)
        this.appService.updateItem(data).subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
                _this.toastr.success("Item Updated", "Success");
                _this.getAllItemFunction();
                var notifyData = {
                    message: _this.userName + " has updated a item from list named as " + _this.selectedListName,
                    listId: _this.selectedListId
                };
                _this.notifyUserAboutList(notifyData);
            }
            else {
                _this.toastr.error(apiResponse.message, "Error!");
            }
        }, function (error) {
            if (error.status == 400) {
                _this.toastr.warning("Failed to update Item", "One or more fields are missing");
            }
            else {
                _this.toastr.error("Some Error Occurred", "Error!");
                _this.router.navigate(['/serverError']);
            }
        }); //end calling addMeeting
    }; //end updateItemFunction
    ListComponent.prototype.deleteItemFunction = function (itemId, instructionFromHistory) {
        var _this = this;
        if (!itemId) {
            this.toastr.warning("Item Id is required", "Warning!");
        }
        else {
            if (!instructionFromHistory) {
                var saveItem = {
                    listId: this.selectedListId,
                    key: 'Item Delete',
                    authToken: this.authToken,
                    itemId: itemId
                };
                this.addHistoryFunction(saveItem);
            }
            var data = {
                itemId: itemId,
                authToken: this.authToken
            };
            this.appService.deleteItem(data).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("Item Deleted", "Success");
                    _this.getAllItemFunction();
                    var notifyData = {
                        message: _this.userName + " has deleted a item from list named as " + _this.selectedListName,
                        listId: _this.selectedListId
                    };
                    _this.notifyUserAboutList(notifyData);
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                if (error.status == 400) {
                    _this.toastr.warning("Failed to Delete Item", "One or more fields are missing");
                }
                else {
                    _this.toastr.error("Some Error Occurred", "Error!");
                    _this.router.navigate(['/serverError']);
                }
            }); //end calling deleteItem
        }
    }; //end deleteItemFunction
    ListComponent.prototype.addSubItemFunction = function (hasValue, gotData) {
        var _this = this;
        var data = {};
        if (hasValue) {
            data.itemId = this.selectedItemId;
            data.subItemId = gotData.subItemId;
            data.subItemName = gotData.subItemName;
            data.subItemCreatorId = gotData.subItemCreatorId;
            data.subItemCreatorName = gotData.subItemCreatorName;
            data.subItemModifierId = this.userId;
            data.subItemModifierName = this.userName;
        }
        else {
            data = {
                itemId: this.selectedItemId,
                subItemName: this.subItemName,
                subItemCreatorId: this.userId,
                subItemCreatorName: this.userName,
                subItemModifierId: this.userId,
                subItemModifierName: this.userName,
            };
        }
        data.authToken = this.authToken;
        //console.log(data)
        this.appService.addSubItem(data).subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
                _this.toastr.success("Sub Item Added", "Success");
                //console.log(apiResponse.data)
                if (!hasValue) {
                    var saveItem = {
                        listId: _this.selectedListId,
                        key: 'Sub Item Add',
                        authToken: _this.authToken,
                        itemId: _this.selectedItemId,
                        subItemId: apiResponse.data.subItemId
                    };
                    _this.addHistoryFunction(saveItem);
                }
                _this.getAllItemFunction();
                var notifyData = {
                    message: _this.userName + " has added a sub item into list named as " + _this.selectedListName,
                    listId: _this.selectedListId
                };
                _this.notifyUserAboutList(notifyData);
            }
            else {
                _this.toastr.error(apiResponse.message, "Error!");
            }
        }, function (error) {
            if (error.status == 400) {
                _this.toastr.warning("Failed to add Sub Item", "One or more fields are missing");
            }
            else {
                _this.toastr.error("Some Error Occurred", "Error!");
                _this.router.navigate(['/serverError']);
            }
        }); //end calling addMeeting
    }; //end addSubItemFunction
    ListComponent.prototype.updateSubItemFunction = function (hasValue, gotData, itemId, subItemId, subItemName, subItemDone) {
        var _this = this;
        var data = {};
        if (hasValue) {
            data.itemId = itemId;
            data.subItemId = gotData.subItemId;
            data.subItemName = gotData.subItemName;
            data.subItemModifierId = this.userId;
            data.subItemModifierName = this.userName;
            data.subItemDone = gotData.subItemDone;
        }
        else {
            data = {
                itemId: itemId,
                subItemId: subItemId,
                subItemName: subItemName,
                subItemModifierId: this.userId,
                subItemModifierName: this.userName,
                subItemDone: subItemDone,
            };
            var saveItem = {
                listId: this.selectedListId,
                key: 'Sub Item Update',
                authToken: this.authToken,
                itemId: this.selectedItemId,
                subItemId: subItemId,
            };
            //console.log(saveItem)
            this.addHistoryFunction(saveItem);
        }
        data.authToken = this.authToken;
        //console.log(data)  
        this.appService.updateSubItem(data).subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
                _this.toastr.success("Sub Item Updated", "Success");
                _this.getAllItemFunction();
                var notifyData = {
                    message: _this.userName + " has updated a sub item from list named as " + _this.selectedListName,
                    listId: _this.selectedListId
                };
                _this.notifyUserAboutList(notifyData);
            }
            else {
                _this.toastr.error(apiResponse.message, "Error!");
            }
        }, function (error) {
            if (error.status == 400) {
                _this.toastr.warning("Failed to update Item", "One or more fields are missing");
            }
            else {
                _this.toastr.error("Some Error Occurred", "Error!");
                _this.router.navigate(['/serverError']);
            }
        }); //end calling addMeeting
    }; //end updateSubItemFunction
    ListComponent.prototype.deleteSubItemFunction = function (itemId, subItemId, instructionFromHistory) {
        var _this = this;
        if (!itemId) {
            this.toastr.warning("Sub Item Id is required", "Warning!");
        }
        else if (!subItemId) {
            this.toastr.warning("Sub Item Id is required", "Warning!");
        }
        else {
            var data = {
                itemId: itemId,
                subItemId: subItemId,
                authToken: this.authToken
            };
            if (!instructionFromHistory) {
                var saveItem = {
                    listId: this.selectedListId,
                    key: 'Sub Item Delete',
                    authToken: this.authToken,
                    itemId: itemId,
                    subItemId: subItemId
                };
                //console.log(saveItem)
                this.addHistoryFunction(saveItem);
            }
            this.appService.deleteSubItem(data).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("Sub Item Deleted", "Success");
                    _this.getAllItemFunction();
                    var notifyData = {
                        message: _this.userName + " has deleted a sub item from list named as " + _this.selectedListName,
                        listId: _this.selectedListId
                    };
                    _this.notifyUserAboutList(notifyData);
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                if (error.status == 400) {
                    _this.toastr.warning("Failed to Delete Sub Item", "One or more fields are missing");
                }
                else {
                    _this.toastr.error("Some Error Occurred", "Error!");
                    _this.router.navigate(['/serverError']);
                }
            }); //end calling addMeeting
        }
    }; //end deleteSubItemFunction
    /* History management */
    ListComponent.prototype.addHistoryFunction = function (data) {
        this.appService.addHistory(data).subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
                //console.log(apiResponse.data)
            }
        }); //end calling addHistory
    }; //end addHistoryFunction
    //method to perform undo using shortcut keys
    ListComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.ctrlKey && event.key == 'z' || event.metaKey && event.key == 'z') {
            if (this.selectedListId) {
                var data = {
                    listId: this.selectedListId,
                    authToken: this.authToken
                };
                this.getHistoryFunction(data);
            }
        }
    }; //end
    ListComponent.prototype.getHistoryFunction = function (data) {
        var _this = this;
        this.appService.getHistory(data).subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
                // if key is 'Item Add' then delete the Item according to time
                if (apiResponse.data.key == 'Item Add') {
                    _this.deleteItemFunction(apiResponse.data.itemId, true);
                }
                else if (apiResponse.data.key == 'Item Delete') {
                    _this.addItemFunction(true, apiResponse.data.itemValues[0]);
                }
                else if (apiResponse.data.key == 'Item Update') {
                    _this.updateItemFunction(true, apiResponse.data.itemValues[0]);
                }
                else if (apiResponse.data.key == 'Sub Item Add') {
                    _this.deleteSubItemFunction(apiResponse.data.itemId, apiResponse.data.subItemId, true);
                }
                else if (apiResponse.data.key == 'Sub Item Delete') {
                    var itemsFromHistory = apiResponse.data.itemValues[0].subItems;
                    var itemToAdd = itemsFromHistory.filter(function (item) { return item.subItemId == apiResponse.data.subItemId; });
                    _this.addSubItemFunction(true, itemToAdd[0]);
                }
                else if (apiResponse.data.key == 'Sub Item Update') {
                    var itemsFromHistory = apiResponse.data.itemValues[0].subItems;
                    var itemToAdd = itemsFromHistory.filter(function (item) { return item.subItemId == apiResponse.data.subItemId; });
                    _this.updateSubItemFunction(true, itemToAdd[0], apiResponse.data.itemId, apiResponse.data.subItemId);
                }
            }
            else if (apiResponse.status == 404) {
                _this.toastr.info("No more undos found", "Undo Update!");
            }
        }); //end calling getHistory
    }; //end getHistoryFunction
    /* Dialog */
    ListComponent.prototype.openDialogToAddSubItem = function () {
        var _this = this;
        var dialogRefAddSubItem = this.dialog.open(_shared_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_8__["DialogBoxComponent"], {
            width: '250px',
            data: { title: 'Please Enter Sub Item Name', value: this.enteredSubTaskName }
        });
        dialogRefAddSubItem.afterClosed().subscribe(function (result) {
            //console.log('The dialog was closed');
            //console.log(result);      
            _this.enteredSubTaskName = result;
            if (_this.enteredSubTaskName === null || _this.enteredSubTaskName === '' || _this.enteredSubTaskName == undefined) {
                _this.toastr.error("You must enter a value", "Error!");
            }
            else {
                _this.subItemName = _this.enteredSubTaskName;
                //console.log(this.enteredSubTaskName)
                //console.log(this.selectedItemId)
                _this.addSubItemFunction();
                _this.enteredSubTaskName = '';
            }
        });
    };
    ListComponent.prototype.openDialogToupdateTaskName = function (itemId, itemName, itemDone) {
        var _this = this;
        var dialogRefAddSubItem = this.dialog.open(_shared_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_8__["DialogBoxComponent"], {
            width: '250px',
            data: { title: 'Please Edit Task Name', value: itemName }
        });
        dialogRefAddSubItem.afterClosed().subscribe(function (result) {
            //console.log('The dialog was closed');
            //console.log(result);      
            _this.enteredTaskName = result;
            if (_this.enteredTaskName === null || _this.enteredTaskName === '' || _this.enteredTaskName == undefined) {
                _this.toastr.error("You must enter a value", "Error!");
            }
            else {
                _this.updateItemFunction(false, null, itemId, _this.enteredTaskName, itemDone);
                _this.enteredTaskName = '';
            }
        });
    };
    ListComponent.prototype.openDialogToupdateSubTaskName = function (itemId, subItemId, subItemName, subItemDone) {
        var _this = this;
        var dialogRefAddSubItem = this.dialog.open(_shared_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_8__["DialogBoxComponent"], {
            width: '250px',
            data: { title: 'Please Edit Sub Task Name', value: subItemName }
        });
        dialogRefAddSubItem.afterClosed().subscribe(function (result) {
            //console.log('The dialog was closed');
            //console.log(result);      
            _this.enteredSubTaskName = result;
            if (_this.enteredSubTaskName === null || _this.enteredSubTaskName === '' || _this.enteredSubTaskName == undefined) {
                _this.toastr.error("You must enter a value", "Error!");
            }
            else {
                _this.updateSubItemFunction(false, null, itemId, subItemId, _this.enteredSubTaskName, subItemDone);
                _this.enteredSubTaskName = '';
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListComponent.prototype, "allLists", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListComponent.prototype, "userMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ListComponent.prototype, "notify", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], ListComponent.prototype, "modalContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ListComponent.prototype, "handleKeyboardEvent", null);
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/shared/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/shared/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _ng_bootstrap_ng_bootstrap_modal_modal_module__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/shared/own-navbar/own-navbar.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/own-navbar/own-navbar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color-me{\r\n    font-weight:bold;\r\n    background-color:#48CDC8;\r\n}\r\n\r\n.logout{\r\n    \r\n    color:white;\r\n    font-size:30px;\r\n    margin-right:10px;\r\n    transition:.2s ease-in;\r\n}\r\n\r\n.logout:hover{\r\n\r\n    color:#dc3545;\r\n}\r\n\r\n.blup{\r\n       \r\n     background-color:yellow;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL293bi1uYXZiYXIvb3duLW5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtDQUM1Qjs7QUFFRDs7SUFFSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix1QkFBdUI7Q0FDMUI7O0FBRUQ7O0lBRUksY0FBYztDQUNqQjs7QUFFRDs7S0FFSyx3QkFBd0I7Q0FDNUIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvb3duLW5hdmJhci9vd24tbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3ItbWV7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDhDREM4O1xyXG59XHJcblxyXG4ubG9nb3V0e1xyXG4gICAgXHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOi4ycyBlYXNlLWluO1xyXG59XHJcblxyXG4ubG9nb3V0OmhvdmVye1xyXG5cclxuICAgIGNvbG9yOiNkYzM1NDU7XHJcbn1cclxuXHJcbi5ibHVwe1xyXG4gICAgICAgXHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjp5ZWxsb3c7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/own-navbar/own-navbar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/own-navbar/own-navbar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <nav class=\"navbar sticky-top navbar-expand-lg navbar-dark bg-dark\">\n      <a class=\"navbar-brand\" href=\"#\"><i class=\"fab fa-audible icon\" style=\"color:white;margin-left:7px\"></i><span style=\"color:white;margin-left:7px\"><b>Trego</b></span></a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarToggler\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    \n      <div class=\"collapse navbar-collapse\" id=\"navbarToggler\">\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n          <li class=\"nav-item \" [ngClass]=\"{'active':activeNav === 'own'}\">\n            <a class=\"nav-link\" [routerLink]=\"['/single-user']\"  >Home </a>\n          </li>\n          <li class=\"nav-item\" [ngClass]=\"{'active':activeNav === 'other'}\">\n            <a class=\"nav-link\" [routerLink]=\"['/multi-user']\" >Friend's Dashboard</a>\n          </li>\n          <li class=\"nav-item\" [ngClass]=\"{'active':activeNav === 'friends'}\">\n            <a class=\"nav-link\" [routerLink]=\"['/friend-list']\" >Friends</a>\n          </li>\n  \n        </ul>\n  \n        <form class=\"form-inline my-2 my-lg-0\">\n          \n          \n          <div class=\"btn-group\" role=\"group\" style=\"float: right;\" matTooltip=\"Logout\">          \n            <a    (click)=\"logoutFunction()\">\n                <i class=\"fas fa-power-off logout\"></i>\n            </a>\n          </div>\n        </form>\n  \n      </div>\n  </nav>"

/***/ }),

/***/ "./src/app/shared/own-navbar/own-navbar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/own-navbar/own-navbar.component.ts ***!
  \***********************************************************/
/*! exports provided: OwnNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnNavbarComponent", function() { return OwnNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var OwnNavbarComponent = /** @class */ (function () {
    function OwnNavbarComponent(appService, toastr, router, socketService) {
        var _this = this;
        this.appService = appService;
        this.toastr = toastr;
        this.router = router;
        this.socketService = socketService;
        this.logoutFunction = function () {
            _this.appService.logout(_this.userId, _this.authToken).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    localStorage.clear();
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('authToken'); //delete all the cookies
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('userId');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('userName');
                    _this.socketService.disconnectedSocket(); //calling the method which emits the disconnect event.
                    _this.socketService.exitSocket(); //this method will disconnect the socket from frontend and close the connection with the server.
                    _this.router.navigate(['/login']); //redirects the user to login page.
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                    _this.router.navigate(['/serverError']); //in case of error redirects to error page.
                } // end condition
            }, function (err) {
                if (err.status == 404) {
                    _this.toastr.warning("Logout Failed", "Already Logged Out or Invalid User");
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.toastr.error("Some Error Occurred", "Error!");
                    _this.router.navigate(['/serverError']);
                }
            });
        }; //end logout  
    }
    OwnNavbarComponent.prototype.ngOnInit = function () {
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authToken');
        this.userId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('userId');
        this.userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('userName');
        this.activeNav = this.active;
    };
    OwnNavbarComponent.prototype.ngOnChanges = function (changes) {
        this.activeNav = changes.active;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], OwnNavbarComponent.prototype, "active", void 0);
    OwnNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-own-navbar',
            template: __webpack_require__(/*! ./own-navbar.component.html */ "./src/app/shared/own-navbar/own-navbar.component.html"),
            styles: [__webpack_require__(/*! ./own-navbar.component.css */ "./src/app/shared/own-navbar/own-navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]])
    ], OwnNavbarComponent);
    return OwnNavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./first-char/first-char.component */ "./src/app/shared/first-char/first-char.component.ts");
/* harmony import */ var _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-box/dialog-box.component */ "./src/app/shared/dialog-box/dialog-box.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list/list.component */ "./src/app/shared/list/list.component.ts");
/* harmony import */ var _own_navbar_own_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./own-navbar/own-navbar.component */ "./src/app/shared/own-navbar/own-navbar.component.ts");
/* harmony import */ var _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./friend-list/friend-list.component */ "./src/app/shared/friend-list/friend-list.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");







/* Module for Toaster */






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
                    timeOut: 2000,
                    positionClass: 'toast-top-right',
                    preventDuplicates: true,
                }),
            ],
            declarations: [_first_char_first_char_component__WEBPACK_IMPORTED_MODULE_5__["FirstCharComponent"],
                _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_6__["DialogBoxComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"],
                _own_navbar_own_navbar_component__WEBPACK_IMPORTED_MODULE_10__["OwnNavbarComponent"],
                _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_11__["FriendListComponent"]],
            exports: [
                _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_5__["FirstCharComponent"],
                _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_6__["DialogBoxComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"],
                _own_navbar_own_navbar_component__WEBPACK_IMPORTED_MODULE_10__["OwnNavbarComponent"],
                _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_11__["FriendListComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            entryComponents: [
                _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_6__["DialogBoxComponent"]
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);


//Added for Http and Observables



var SocketService = /** @class */ (function () {
    function SocketService(http) {
        var _this = this;
        this.http = http;
        this.baseUrl = "http://api.trego.tk";
        //events that has to be listen
        this.verifyUser = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on('verifyUser', function (data) {
                    observer.next(data);
                }); //On method
            }); //end observable
        }; //end verifyUser
        this.onlineUserList = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on('online-user-list', function (userList) {
                    observer.next(userList);
                }); //end On method
            }); //end observable
        }; //end onlineUserList
        this.disconnect = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on('disconnect', function () {
                    observer.next();
                }); //end On method
            }); //end observable
        }; //end disconnect
        this.listenAuthError = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on('auth-error', function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end listenAuthError
        this.getUpdatesFromUser = function (userId) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on(userId, function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end getUpdatesFromUser
        //* Events that are emitted *//
        this.setUser = function (authToken) {
            _this.socket.emit('set-user', authToken);
        };
        this.notifyUpdates = function (data) {
            _this.socket.emit('notify-updates', data);
        };
        this.notifyUpdatesItem = function (data) {
            _this.socket.emit('notify-updates-item', data);
        };
        this.exitSocket = function () {
            _this.socket.disconnect();
        }; // end exit socket
        this.disconnectedSocket = function () {
            _this.socket.emit("disconnect", ""); //end Socket
        }; //end disconnectedSocket
        //console.log("SocketService is called");
        //handshake is happening
        //console.log("Contructor of Socket Service")
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__(this.baseUrl, { forceNew: true });
        //console.log(this.socket)
    }
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/sort-countries.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/sort-countries.pipe.ts ***!
  \****************************************/
/*! exports provided: SortCountriesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortCountriesPipe", function() { return SortCountriesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortCountriesPipe = /** @class */ (function () {
    function SortCountriesPipe() {
    }
    SortCountriesPipe.prototype.transform = function (array, args) {
        if (array == null) {
            return null;
        }
        var finalArray = array.sort(function (a, b) {
            var textA = a['value'].toLowerCase();
            var textB = b['value'].toLowerCase();
            return textA < textB ? -1 : (textA > textB) ? 1 : 0;
        });
        return finalArray;
    };
    SortCountriesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'sortCountries'
        })
    ], SortCountriesPipe);
    return SortCountriesPipe;
}());



/***/ }),

/***/ "./src/app/start-page/start-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/start-page/start-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Miss+Fajardose&subset=latin-ext');\r\n@import url('https://fonts.googleapis.com/css?family=Righteous&subset=latin-ext');\r\nbody, html {\r\n    height: 100%;\r\n\r\n  }\r\n.container-fluid{\r\n\r\n    background-image:url('back.jpg');\r\n    height: 110vh; \r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    color:white;\r\n    \r\n\r\n}\r\n.heading\r\n{\r\n    padding-top:18px;\r\n    \r\n    color:white;\r\n}\r\nli{\r\n\r\n\r\n    list-style-type:none;\r\n    margin-left:25px;\r\n    margin-bottom:10px;\r\n    font-weight:bold;\r\n}\r\n.foot{\r\n    font-family: 'Miss Fajardose', cursive;\r\n    letter-spacing: 8px;\r\n    font-size:50px;\r\n    \r\n}\r\n.icon{\r\n    margin-right:7px;\r\n    color:white;\r\n}\r\n.icon1{\r\n    margin-right:7px;\r\n    color:#67b826;\r\n}\r\n.wel{\r\n     margin-left:40px;\r\n     font-family: 'Righteous', cursive;\r\n}\r\n.btn-block{\r\n    \r\n    padding:10px;\r\n    border-radius:30px;\r\n}\r\n@media (max-width:456px){\r\n\r\n    .wel{\r\n\r\n        font-size:30px;\r\n        margin-left:60px;\r\n    }\r\n}\r\n@media(max-width:434px){\r\n\r\n    .wel{\r\n\r\n        margin-left:10px;\r\n    }\r\n\r\n    ul{\r\n        margin-left:-10px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnQtcGFnZS9zdGFydC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUZBQXVGO0FBQ3ZGLGtGQUFrRjtBQUVsRjtJQUNJLGFBQWE7O0dBRWQ7QUFFSDs7SUFFSSxpQ0FBbUQ7SUFDbkQsY0FBYztJQUNkLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLFlBQVk7OztDQUdmO0FBRUQ7O0lBRUksaUJBQWlCOztJQUVqQixZQUFZO0NBQ2Y7QUFHRDs7O0lBR0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ3BCO0FBR0Q7SUFDSSx1Q0FBdUM7SUFDdkMsb0JBQW9CO0lBQ3BCLGVBQWU7O0NBRWxCO0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztDQUNqQjtBQUVEO0tBQ0ssaUJBQWlCO0tBQ2pCLGtDQUFrQztDQUN0QztBQUVEOztJQUVJLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7QUFFRDs7SUFFSTs7UUFFSSxlQUFlO1FBQ2YsaUJBQWlCO0tBQ3BCO0NBQ0o7QUFFRDs7SUFFSTs7UUFFSSxpQkFBaUI7S0FDcEI7O0lBRUQ7UUFDSSxrQkFBa0I7S0FDckI7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0LXBhZ2Uvc3RhcnQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NaXNzK0ZhamFyZG9zZSZzdWJzZXQ9bGF0aW4tZXh0Jyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmlnaHRlb3VzJnN1YnNldD1sYXRpbi1leHQnKTtcclxuXHJcbmJvZHksIGh0bWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICB9XHJcbiAgXHJcbi5jb250YWluZXItZmx1aWR7XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrLmpwZyk7XHJcbiAgICBoZWlnaHQ6IDExMHZoOyBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi5oZWFkaW5nXHJcbntcclxuICAgIHBhZGRpbmctdG9wOjE4cHg7XHJcbiAgICBcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG5cclxubGl7XHJcblxyXG5cclxuICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6MjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbn1cclxuXHJcblxyXG4uZm9vdHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWlzcyBGYWphcmRvc2UnLCBjdXJzaXZlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDhweDtcclxuICAgIGZvbnQtc2l6ZTo1MHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5pY29ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OjdweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcbi5pY29uMXtcclxuICAgIG1hcmdpbi1yaWdodDo3cHg7XHJcbiAgICBjb2xvcjojNjdiODI2O1xyXG59XHJcblxyXG4ud2Vse1xyXG4gICAgIG1hcmdpbi1sZWZ0OjQwcHg7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG59XHJcblxyXG4uYnRuLWJsb2Nre1xyXG4gICAgXHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjMwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjQ1NnB4KXtcclxuXHJcbiAgICAud2Vse1xyXG5cclxuICAgICAgICBmb250LXNpemU6MzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDo2MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjQzNHB4KXtcclxuXHJcbiAgICAud2Vse1xyXG5cclxuICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHVse1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0Oi0xMHB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/start-page/start-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/start-page/start-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n\n\n    <div class=\"row\">\n        <div class=\"col-12  text-left \">\n           <h4 class=\"heading animated fadeInLeft \"><i class=\"fab fa-audible icon\"></i><span>Trego</span></h4>\n        </div>\n    </div>\n    <br><br>\n\n\n    <div class=\"row\">\n\n        <div class=\"col-12 \">\n           <h1 class=\"wel\" > Welcome To Trego</h1>\n           <br>\n         \n              \n         <ul>\n\n               <li ><i class=\"far fa-check-circle icon1\"></i><p style=\"display:inline\">Live TODO List Management System.</p></li>\n               <li><i class=\"far fa-check-circle icon1\"></i>Getting Things Done</li>\n               <li><i class=\"far fa-check-circle icon1\"></i>Scheduling, and Collaboration</li>\n          </ul>\n      \n        <br><br>\n\n               <h1 class=\"foot typewriters text-center\">Time isn't the main thing.Its the only thing</h1>\n               \n               <br>\n\n               <div class=\"row\">\n\n                <div class=\"col-4\"></div>\n                <div class=\"col-4\">\n                    <button class=\"btn  btn-dark btn-block animated bounceInUp\" type=\"button\" [routerLink]=\"['/login']\" >Get Started</button>\n                </div>\n                <div class=\"col-4\"></div>\n\n         \n\n               </div>\n\n  \n\n        </div>\n\n        <div *ngIf=\"showLoadingIndicator\"><span style=\"color:white;font-size:100px\">Loading ...</span></div>\n\n</div> \n"

/***/ }),

/***/ "./src/app/start-page/start-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/start-page/start-page.component.ts ***!
  \****************************************************/
/*! exports provided: StartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageComponent", function() { return StartPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var StartPageComponent = /** @class */ (function () {
    function StartPageComponent(_router) {
        var _this = this;
        this._router = _router;
        this.showLoadingIndicator = true;
        this._router.events.subscribe(function (routerEvent) {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.showLoadingIndicator = true;
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.showLoadingIndicator = false;
            }
        });
    }
    StartPageComponent.prototype.ngOnInit = function () {
    };
    StartPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start-page',
            template: __webpack_require__(/*! ./start-page.component.html */ "./src/app/start-page/start-page.component.html"),
            styles: [__webpack_require__(/*! ./start-page.component.css */ "./src/app/start-page/start-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StartPageComponent);
    return StartPageComponent;
}());



/***/ }),

/***/ "./src/app/user/forgot-pass/forgot-pass.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/forgot-pass/forgot-pass.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody, html {\r\n    height: 100%;\r\n  }\r\n  \r\n.container-fluid{\r\n\r\n    background-image:url('back.jpg');\r\n    height: 100vh; \r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    \r\n\r\n}\r\n  \r\n.heading\r\n{\r\n    padding-top:18px;\r\n    \r\n    color:white;\r\n}\r\n  \r\n.icon\r\n{\r\n    margin-right:5px;\r\n\r\n}\r\n  \r\n.form-signin-heading{\r\n\r\n    color:white;\r\n    font-size:30px;\r\n\r\n}\r\n  \r\nbutton{\r\n    margin-top:8px;\r\n    border-radius:15px;\r\n}\r\n  \r\n.form-div{\r\n    box-shadow: 0 4px 16px 4px #2b2b2b;\r\n}\r\n  \r\n.has-error{\r\n\r\n    border:2px solid #8e1600;\r\n}\r\n  \r\n.block{\r\n    color:#8e1600;\r\n    \r\n    position:relative;\r\n\r\n}\r\n  \r\n.form-div{\r\n    box-shadow: 0 4px 16px 4px #2b2b2b;\r\n    background:transparent;\r\n}\r\n  \r\ninput{\r\n    background:transparent;\r\n}\r\n  \r\n::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color:white;\r\n    opacity: 1; /* Firefox */\r\n  }\r\n  \r\n::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color:white;\r\n    opacity: 1; /* Firefox */\r\n  }\r\n  \r\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color:white;\r\n    opacity: 1; /* Firefox */\r\n  }\r\n  \r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n    color:white;\r\n  }\r\n  \r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n    color:white;\r\n  }\r\n  \r\n/* LABEL ======================================= */\r\n  \r\nlabel                {\r\n    color:white; \r\n    font-size:18px;\r\n    font-weight:normal;\r\n    position:relative;\r\n    pointer-events:none;\r\n    left:9px;\r\n    top:-35px;\r\n    transition:0.2s ease all; \r\n    -moz-transition:0.2s ease all; \r\n    -webkit-transition:0.2s ease all;\r\n  }\r\n  \r\n/* active state */\r\n  \r\ninput:focus ~ label, input:valid ~ label        {\r\n    left:7px;\r\n    top:-65px;\r\n    font-size:14px;\r\n    color:white;\r\n  }\r\n  \r\n/* HIGHLIGHTER ================================== */\r\n  \r\n.highlight {\r\n  position:absolute;\r\n  height:60%; \r\n  width:100px; \r\n  top:25%; \r\n  left:0;\r\n  pointer-events:none;\r\n  opacity:0.5;\r\n}\r\n  \r\n/* active state */\r\n  \r\ninput:focus ~ .highlight {\r\n  -webkit-animation:inputHighlighter 0.3s ease;\r\n  animation:inputHighlighter 0.3s ease;\r\n}\r\n  \r\n/* ANIMATIONS ================ */\r\n  \r\n@-webkit-keyframes inputHighlighter {\r\n    from { background:#5264AE; }\r\n  to    { width:0; background:transparent; }\r\n}\r\n  \r\n@keyframes inputHighlighter {\r\n    from { background:#5264AE; }\r\n  to    { width:0; background:transparent; }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9mb3Jnb3QtcGFzcy9mb3Jnb3QtcGFzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7R0FDZDs7QUFFSDs7SUFFSSxpQ0FBc0Q7SUFDdEQsY0FBYztJQUNkLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsdUJBQXVCOzs7Q0FHMUI7O0FBRUQ7O0lBRUksaUJBQWlCOztJQUVqQixZQUFZO0NBQ2Y7O0FBRUQ7O0lBRUksaUJBQWlCOztDQUVwQjs7QUFFRDs7SUFFSSxZQUFZO0lBQ1osZUFBZTs7Q0FFbEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksbUNBQW1DO0NBQ3RDOztBQUVEOztJQUVJLHlCQUF5QjtDQUM1Qjs7QUFDRDtJQUNJLGNBQWM7O0lBRWQsa0JBQWtCOztDQUVyQjs7QUFFRDtJQUNJLG1DQUFtQztJQUNuQyx1QkFBdUI7Q0FDMUI7O0FBS0Q7SUFDSSx1QkFBdUI7Q0FDMUI7O0FBSUQsOEJBQWdCLDBDQUEwQztJQUN0RCxZQUFZO0lBQ1osV0FBVyxDQUFDLGFBQWE7R0FDMUI7O0FBSEgsMEJBQWdCLDBDQUEwQztJQUN0RCxZQUFZO0lBQ1osV0FBVyxDQUFDLGFBQWE7R0FDMUI7O0FBSEgsZ0JBQWdCLDBDQUEwQztJQUN0RCxZQUFZO0lBQ1osV0FBVyxDQUFDLGFBQWE7R0FDMUI7O0FBRUQseUJBQXlCLDZCQUE2QjtJQUNwRCxZQUFZO0dBQ2I7O0FBRUQsMEJBQTBCLG9CQUFvQjtJQUM1QyxZQUFZO0dBQ2I7O0FBRUQsbURBQW1EOztBQUNyRDtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLGlDQUFpQztHQUNsQzs7QUFFRCxrQkFBa0I7O0FBQ2xCO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0lBQ2YsWUFBWTtHQUNiOztBQUlILG9EQUFvRDs7QUFDcEQ7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixRQUFRO0VBQ1IsT0FBTztFQUNQLG9CQUFvQjtFQUNwQixZQUFZO0NBQ2I7O0FBRUQsa0JBQWtCOztBQUNsQjtFQUNFLDZDQUE2QztFQUU3QyxxQ0FBcUM7Q0FDdEM7O0FBRUQsaUNBQWlDOztBQUNqQztJQUNJLE9BQU8sbUJBQW1CLEVBQUU7RUFDOUIsUUFBUSxRQUFRLENBQUMsdUJBQXVCLEVBQUU7Q0FDM0M7O0FBS0Q7SUFDSSxPQUFPLG1CQUFtQixFQUFFO0VBQzlCLFFBQVEsUUFBUSxDQUFDLHVCQUF1QixFQUFFO0NBQzNDIiwiZmlsZSI6InNyYy9hcHAvdXNlci9mb3Jnb3QtcGFzcy9mb3Jnb3QtcGFzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmJvZHksIGh0bWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuLmNvbnRhaW5lci1mbHVpZHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2suanBnKTtcclxuICAgIGhlaWdodDogMTAwdmg7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi5oZWFkaW5nXHJcbntcclxuICAgIHBhZGRpbmctdG9wOjE4cHg7XHJcbiAgICBcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uaWNvblxyXG57XHJcbiAgICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG5cclxufVxyXG5cclxuLmZvcm0tc2lnbmluLWhlYWRpbmd7XHJcblxyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6MzBweDtcclxuXHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6OHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG59XHJcblxyXG4uZm9ybS1kaXZ7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IDRweCAjMmIyYjJiO1xyXG59XHJcblxyXG4uaGFzLWVycm9ye1xyXG5cclxuICAgIGJvcmRlcjoycHggc29saWQgIzhlMTYwMDtcclxufVxyXG4uYmxvY2t7XHJcbiAgICBjb2xvcjojOGUxNjAwO1xyXG4gICAgXHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHJcbn1cclxuXHJcbi5mb3JtLWRpdntcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggNHB4ICMyYjJiMmI7XHJcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5pbnB1dHtcclxuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgfVxyXG4gIFxyXG4gIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cclxuICAgIGNvbG9yOndoaXRlO1xyXG4gIH1cclxuXHJcbiAgLyogTEFCRUwgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmxhYmVsICAgICAgICAgICAgICAgIHtcclxuICAgIGNvbG9yOndoaXRlOyBcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBwb2ludGVyLWV2ZW50czpub25lO1xyXG4gICAgbGVmdDo5cHg7XHJcbiAgICB0b3A6LTM1cHg7XHJcbiAgICB0cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7IFxyXG4gICAgLW1vei10cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7IFxyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGFjdGl2ZSBzdGF0ZSAqL1xyXG4gIGlucHV0OmZvY3VzIH4gbGFiZWwsIGlucHV0OnZhbGlkIH4gbGFiZWwgICAgICAgIHtcclxuICAgIGxlZnQ6N3B4O1xyXG4gICAgdG9wOi02NXB4O1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICB9XHJcbiAgXHJcblxyXG5cclxuLyogSElHSExJR0hURVIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4uaGlnaGxpZ2h0IHtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBoZWlnaHQ6NjAlOyBcclxuICB3aWR0aDoxMDBweDsgXHJcbiAgdG9wOjI1JTsgXHJcbiAgbGVmdDowO1xyXG4gIHBvaW50ZXItZXZlbnRzOm5vbmU7XHJcbiAgb3BhY2l0eTowLjU7XHJcbn1cclxuXHJcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xyXG5pbnB1dDpmb2N1cyB+IC5oaWdobGlnaHQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOmlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xyXG4gIC1tb3otYW5pbWF0aW9uOmlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xyXG4gIGFuaW1hdGlvbjppbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLyogQU5JTUFUSU9OUyA9PT09PT09PT09PT09PT09ICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcclxuICAgIGZyb20geyBiYWNrZ3JvdW5kOiM1MjY0QUU7IH1cclxuICB0byAgICB7IHdpZHRoOjA7IGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7IH1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgaW5wdXRIaWdobGlnaHRlciB7XHJcbiAgICBmcm9tIHsgYmFja2dyb3VuZDojNTI2NEFFOyB9XHJcbiAgdG8gICAgeyB3aWR0aDowOyBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyB9XHJcbn1cclxuQGtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcclxuICAgIGZyb20geyBiYWNrZ3JvdW5kOiM1MjY0QUU7IH1cclxuICB0byAgICB7IHdpZHRoOjA7IGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7IH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/forgot-pass/forgot-pass.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user/forgot-pass/forgot-pass.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n\n        <div class=\"row\">\n            <div class=\"col-12  text-left \">\n               <h4 class=\"heading animated fadeInLeft \"><i class=\"fab fa-audible icon\"></i><span>Trego</span></h4>\n            </div>\n        </div>\n        <br><br>\n    \n        <div class=\"row p-0 m-0\">\n    \n            <div class=\"col-sm\"></div>\n          \n            <div class=\"col-sm p-5 form-div animated bounceInDown \" >\n    \n    \n          \n                    <div class=\"text-center heading\"><h2>Request Password!</h2></div>\n                    <div class=\"text-center heading\">\n                    <p>Please provide your email and we'll send a link to set up a new password.</p>\n                    </div>\n              <br>\n          \n      <form id=\"loginform\" class=\"form-horizontal\" role=\"form\" #forgotForm=\"ngForm\">\n      \n          \n        <div class=\"form-group\">\n      \n            <input type=\"email\" id=\"inputEmail\" style=\"color:black\" [class.has-error]=\"mail.invalid && mail.touched \"  class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" #mail=\"ngModel\" required >\n            \n            <label  >Email</label>\n            \n            <span class=\" block float-right\" *ngIf=\"mail.errors?.required && mail.touched\">Email is required!</span>\n    \n          </div>\n    \n          \n            \n            <button class=\"btn btn-lg btn-dark btn-block\" type=\"button\" (click)=\"forgotPasswordFunction()\" [disabled]=\"!forgotForm.valid\">Sign in</button>\n     </form>\n           <br>\n           <br>\n            <a  [routerLink]=\"['/login']\"  style=\"color:white\" ><b>Sign in instead</b></a>\n          </div>\n          \n            <div class=\"col-sm\"></div>\n    </div>\n    \n    </div> \n    "

/***/ }),

/***/ "./src/app/user/forgot-pass/forgot-pass.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/forgot-pass/forgot-pass.component.ts ***!
  \***********************************************************/
/*! exports provided: ForgotPassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPassComponent", function() { return ForgotPassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var ForgotPassComponent = /** @class */ (function () {
    function ForgotPassComponent(appService, _route, router, toastr, spinnerService) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
    }
    ForgotPassComponent.prototype.ngOnInit = function () {
    };
    ForgotPassComponent.prototype.forgotPasswordFunction = function () {
        var _this = this;
        if (!this.email) {
            this.toastr.warning("Email is required", "Warning!");
        }
        else {
            var data = {
                email: this.email,
            };
            this.spinnerService.show();
            this.appService.resetPassword(data).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    setTimeout(function () {
                        _this.spinnerService.hide();
                        _this.toastr.success("Reset Password", "Password reset instructions sent successfully");
                    }, 2000);
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                if (error.status == 404) {
                    setTimeout(function () {
                        _this.spinnerService.hide();
                        _this.toastr.warning("Reset Password Failed", "Email Not Found!");
                    }, 2000);
                }
                else {
                    setTimeout(function () {
                        _this.spinnerService.hide();
                        _this.router.navigate(['/serverError']);
                        _this.toastr.error("Some Error Occurred", "Error!");
                        ;
                    }, 2000);
                }
            }); //end calling resetPassword
        }
    }; //end forgotPasswordFunction
    ForgotPassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-pass',
            template: __webpack_require__(/*! ./forgot-pass.component.html */ "./src/app/user/forgot-pass/forgot-pass.component.html"),
            styles: [__webpack_require__(/*! ./forgot-pass.component.css */ "./src/app/user/forgot-pass/forgot-pass.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__["Ng4LoadingSpinnerService"]])
    ], ForgotPassComponent);
    return ForgotPassComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody, html {\r\n    height: 100%;\r\n  }\r\n  \r\n.container-fluid{\r\n\r\n    background-image:url('back.jpg');\r\n    height: 110vh; \r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    \r\n\r\n}\r\n  \r\n.heading\r\n{\r\n    padding-top:18px;\r\n    \r\n    color:white;\r\n}\r\n  \r\n.icon\r\n{\r\n    margin-right:7px;\r\n\r\n}\r\n  \r\n.form-signin-heading{\r\n\r\n    color:white;\r\n    font-size:30px;\r\n\r\n}\r\n  \r\nbutton{\r\n    margin-top:8px;\r\n    border-radius:15px;\r\n}\r\n  \r\n.form-div{\r\n    box-shadow: 0 4px 16px 4px #2b2b2b;\r\n}\r\n  \r\n.has-error{\r\n\r\n    border:2px solid #8e1600;\r\n}\r\n  \r\n.block{\r\n    color:#8e1600;\r\n    \r\n    position:relative;\r\n\r\n}\r\n  \r\ninput{\r\n    background:transparent\r\n}\r\n  \r\n::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color:white;\r\n    opacity: 1; /* Firefox */\r\n  }\r\n  \r\n::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color:white;\r\n    opacity: 1; /* Firefox */\r\n  }\r\n  \r\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color:white;\r\n    opacity: 1; /* Firefox */\r\n  }\r\n  \r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n    color:white;\r\n  }\r\n  \r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n    color:white;\r\n  }\r\n  \r\n/* LABEL ======================================= */\r\n  \r\nlabel                {\r\n    color:white; \r\n    font-size:18px;\r\n    font-weight:normal;\r\n    position:relative;\r\n    pointer-events:none;\r\n    left:9px;\r\n    top:-35px;\r\n    transition:0.2s ease all; \r\n    -moz-transition:0.2s ease all; \r\n    -webkit-transition:0.2s ease all;\r\n  }\r\n  \r\n/* active state */\r\n  \r\ninput:focus ~ label, input:valid ~ label      {\r\n    left:7px;\r\n    top:-65px;\r\n    font-size:14px;\r\n    color:white;\r\n  }\r\n  \r\ninput:focus {\r\n\r\n     background:transparent;\r\n  }\r\n  \r\n/* HIGHLIGHTER ================================== */\r\n  \r\n.highlight {\r\n  position:absolute;\r\n  height:60%; \r\n  width:100px; \r\n  top:25%; \r\n  left:0;\r\n  pointer-events:none;\r\n  opacity:0.5;\r\n}\r\n  \r\n/* active state */\r\n  \r\ninput:focus ~ .highlight {\r\n  -webkit-animation:inputHighlighter 0.3s ease;\r\n  animation:inputHighlighter 0.3s ease;\r\n}\r\n  \r\n/* ANIMATIONS ================ */\r\n  \r\n@-webkit-keyframes inputHighlighter {\r\n    from { background:#5264AE; }\r\n  to    { width:0; background:transparent; }\r\n}\r\n  \r\n@keyframes inputHighlighter {\r\n    from { background:#5264AE; }\r\n  to    { width:0; background:transparent; }\r\n}\r\n  \r\n.pass{\r\n\r\n  position:absolute;\r\n  margin-left:26vw;\r\n  margin-top:.8vw;\r\n  color:#a8a8ad;\r\n  cursor:pointer;\r\n  font-size:20px\r\n}\r\n  \r\n.active{\r\n  color:black;\r\n}\r\n  \r\n@media(max-width:1223px){\r\n\r\n  .pass{\r\n    margin-left:25vw;\r\n  }\r\n}\r\n  \r\n@media(max-width:1085px){\r\n\r\n  .pass{\r\n    margin-left:24vw;\r\n  }\r\n\r\n}\r\n  \r\n@media(max-width:963px){\r\n\r\n  .pass{\r\n    margin-left:23vw;\r\n    margin-top:.9vw;\r\n  }\r\n\r\n}\r\n  \r\n@media(max-width:907px){\r\n\r\n  .pass{\r\n    margin-left:22vw;\r\n    margin-top:1.1vw;\r\n  }\r\n\r\n}\r\n  \r\n@media(max-width:768px){\r\n\r\n  .pass{\r\n    margin-left:21vw;\r\n    margin-top:1.1vw;\r\n  }\r\n\r\n}\r\n  \r\n@media(max-width:414px){\r\n\r\n  .pass{\r\n    margin-left:60vw;\r\n    margin-top:2.3vw;\r\n  }\r\n\r\n}\r\n  \r\n@media(max-width:375px){\r\n\r\n  .pass{\r\n    margin-left:56vw;\r\n    margin-top:2.6vw;\r\n  }\r\n\r\n}\r\n  \r\n@media(max-width:360px){\r\n\r\n  .pass{\r\n    margin-left:55vw;\r\n    margin-top:2.6vw;\r\n  }\r\n\r\n}\r\n  \r\n@media(max-width:320px){\r\n\r\n  .pass{\r\n    margin-left:50vw;\r\n    margin-top:2.6vw;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7R0FDZDs7QUFFSDs7SUFFSSxpQ0FBc0Q7SUFDdEQsY0FBYztJQUNkLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsdUJBQXVCOzs7Q0FHMUI7O0FBRUQ7O0lBRUksaUJBQWlCOztJQUVqQixZQUFZO0NBQ2Y7O0FBRUQ7O0lBRUksaUJBQWlCOztDQUVwQjs7QUFFRDs7SUFFSSxZQUFZO0lBQ1osZUFBZTs7Q0FFbEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCOztBQUdEO0lBQ0ksbUNBQW1DO0NBQ3RDOztBQUVEOztJQUVJLHlCQUF5QjtDQUM1Qjs7QUFDRDtJQUNJLGNBQWM7O0lBRWQsa0JBQWtCOztDQUVyQjs7QUFHRDtJQUNJLHNCQUFzQjtDQUN6Qjs7QUFJRCw4QkFBZ0IsMENBQTBDO0lBQ3RELFlBQVk7SUFDWixXQUFXLENBQUMsYUFBYTtHQUMxQjs7QUFISCwwQkFBZ0IsMENBQTBDO0lBQ3RELFlBQVk7SUFDWixXQUFXLENBQUMsYUFBYTtHQUMxQjs7QUFISCxnQkFBZ0IsMENBQTBDO0lBQ3RELFlBQVk7SUFDWixXQUFXLENBQUMsYUFBYTtHQUMxQjs7QUFFRCx5QkFBeUIsNkJBQTZCO0lBQ3BELFlBQVk7R0FDYjs7QUFFRCwwQkFBMEIsb0JBQW9CO0lBQzVDLFlBQVk7R0FDYjs7QUFFRCxtREFBbUQ7O0FBQ3JEO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsaUNBQWlDO0dBQ2xDOztBQUVELGtCQUFrQjs7QUFDbEI7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGVBQWU7SUFDZixZQUFZO0dBQ2I7O0FBRUQ7O0tBRUcsdUJBQXVCO0dBQ3pCOztBQUlILG9EQUFvRDs7QUFDcEQ7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixRQUFRO0VBQ1IsT0FBTztFQUNQLG9CQUFvQjtFQUNwQixZQUFZO0NBQ2I7O0FBRUQsa0JBQWtCOztBQUNsQjtFQUNFLDZDQUE2QztFQUU3QyxxQ0FBcUM7Q0FDdEM7O0FBRUQsaUNBQWlDOztBQUNqQztJQUNJLE9BQU8sbUJBQW1CLEVBQUU7RUFDOUIsUUFBUSxRQUFRLENBQUMsdUJBQXVCLEVBQUU7Q0FDM0M7O0FBS0Q7SUFDSSxPQUFPLG1CQUFtQixFQUFFO0VBQzlCLFFBQVEsUUFBUSxDQUFDLHVCQUF1QixFQUFFO0NBQzNDOztBQUdEOztFQUVFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsY0FBYztDQUNmOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUtEOztFQUVFO0lBQ0UsaUJBQWlCO0dBQ2xCO0NBQ0Y7O0FBRUQ7O0VBRUU7SUFDRSxpQkFBaUI7R0FDbEI7O0NBRUY7O0FBRUQ7O0VBRUU7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0dBQ2pCOztDQUVGOztBQUVEOztFQUVFO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtHQUNsQjs7Q0FFRjs7QUFFRDs7RUFFRTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7R0FDbEI7O0NBRUY7O0FBRUQ7O0VBRUU7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0dBQ2xCOztDQUVGOztBQUdEOztFQUVFO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtHQUNsQjs7Q0FFRjs7QUFFRDs7RUFFRTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7R0FDbEI7O0NBRUY7O0FBRUQ7O0VBRUU7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0dBQ2xCOztDQUVGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmJvZHksIGh0bWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuLmNvbnRhaW5lci1mbHVpZHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2suanBnKTtcclxuICAgIGhlaWdodDogMTEwdmg7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi5oZWFkaW5nXHJcbntcclxuICAgIHBhZGRpbmctdG9wOjE4cHg7XHJcbiAgICBcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uaWNvblxyXG57XHJcbiAgICBtYXJnaW4tcmlnaHQ6N3B4O1xyXG5cclxufVxyXG5cclxuLmZvcm0tc2lnbmluLWhlYWRpbmd7XHJcblxyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6MzBweDtcclxuXHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6OHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG59XHJcblxyXG5cclxuLmZvcm0tZGl2e1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCA0cHggIzJiMmIyYjtcclxufVxyXG5cclxuLmhhcy1lcnJvcntcclxuXHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICM4ZTE2MDA7XHJcbn1cclxuLmJsb2Nre1xyXG4gICAgY29sb3I6IzhlMTYwMDtcclxuICAgIFxyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcblxyXG59XHJcblxyXG5cclxuaW5wdXR7XHJcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50XHJcbn1cclxuXHJcblxyXG5cclxuOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgfVxyXG4gIFxyXG4gIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cclxuICAgIGNvbG9yOndoaXRlO1xyXG4gIH1cclxuXHJcbiAgLyogTEFCRUwgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmxhYmVsICAgICAgICAgICAgICAgIHtcclxuICAgIGNvbG9yOndoaXRlOyBcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBwb2ludGVyLWV2ZW50czpub25lO1xyXG4gICAgbGVmdDo5cHg7XHJcbiAgICB0b3A6LTM1cHg7XHJcbiAgICB0cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7IFxyXG4gICAgLW1vei10cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7IFxyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGFjdGl2ZSBzdGF0ZSAqL1xyXG4gIGlucHV0OmZvY3VzIH4gbGFiZWwsIGlucHV0OnZhbGlkIH4gbGFiZWwgICAgICB7XHJcbiAgICBsZWZ0OjdweDtcclxuICAgIHRvcDotNjVweDtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgfVxyXG5cclxuICBpbnB1dDpmb2N1cyB7XHJcblxyXG4gICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcbi8qIEhJR0hMSUdIVEVSID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLmhpZ2hsaWdodCB7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgaGVpZ2h0OjYwJTsgXHJcbiAgd2lkdGg6MTAwcHg7IFxyXG4gIHRvcDoyNSU7IFxyXG4gIGxlZnQ6MDtcclxuICBwb2ludGVyLWV2ZW50czpub25lO1xyXG4gIG9wYWNpdHk6MC41O1xyXG59XHJcblxyXG4vKiBhY3RpdmUgc3RhdGUgKi9cclxuaW5wdXQ6Zm9jdXMgfiAuaGlnaGxpZ2h0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjppbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcclxuICAtbW96LWFuaW1hdGlvbjppbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcclxuICBhbmltYXRpb246aW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi8qIEFOSU1BVElPTlMgPT09PT09PT09PT09PT09PSAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgaW5wdXRIaWdobGlnaHRlciB7XHJcbiAgICBmcm9tIHsgYmFja2dyb3VuZDojNTI2NEFFOyB9XHJcbiAgdG8gICAgeyB3aWR0aDowOyBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xyXG4gICAgZnJvbSB7IGJhY2tncm91bmQ6IzUyNjRBRTsgfVxyXG4gIHRvICAgIHsgd2lkdGg6MDsgYmFja2dyb3VuZDp0cmFuc3BhcmVudDsgfVxyXG59XHJcbkBrZXlmcmFtZXMgaW5wdXRIaWdobGlnaHRlciB7XHJcbiAgICBmcm9tIHsgYmFja2dyb3VuZDojNTI2NEFFOyB9XHJcbiAgdG8gICAgeyB3aWR0aDowOyBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyB9XHJcbn1cclxuXHJcblxyXG4ucGFzc3tcclxuXHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgbWFyZ2luLWxlZnQ6MjZ2dztcclxuICBtYXJnaW4tdG9wOi44dnc7XHJcbiAgY29sb3I6I2E4YThhZDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxuICBmb250LXNpemU6MjBweFxyXG59XHJcblxyXG4uYWN0aXZle1xyXG4gIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjEyMjNweCl7XHJcblxyXG4gIC5wYXNze1xyXG4gICAgbWFyZ2luLWxlZnQ6MjV2dztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MTA4NXB4KXtcclxuXHJcbiAgLnBhc3N7XHJcbiAgICBtYXJnaW4tbGVmdDoyNHZ3O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6OTYzcHgpe1xyXG5cclxuICAucGFzc3tcclxuICAgIG1hcmdpbi1sZWZ0OjIzdnc7XHJcbiAgICBtYXJnaW4tdG9wOi45dnc7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo5MDdweCl7XHJcblxyXG4gIC5wYXNze1xyXG4gICAgbWFyZ2luLWxlZnQ6MjJ2dztcclxuICAgIG1hcmdpbi10b3A6MS4xdnc7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XHJcblxyXG4gIC5wYXNze1xyXG4gICAgbWFyZ2luLWxlZnQ6MjF2dztcclxuICAgIG1hcmdpbi10b3A6MS4xdnc7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo0MTRweCl7XHJcblxyXG4gIC5wYXNze1xyXG4gICAgbWFyZ2luLWxlZnQ6NjB2dztcclxuICAgIG1hcmdpbi10b3A6Mi4zdnc7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6Mzc1cHgpe1xyXG5cclxuICAucGFzc3tcclxuICAgIG1hcmdpbi1sZWZ0OjU2dnc7XHJcbiAgICBtYXJnaW4tdG9wOjIuNnZ3O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MzYwcHgpe1xyXG5cclxuICAucGFzc3tcclxuICAgIG1hcmdpbi1sZWZ0OjU1dnc7XHJcbiAgICBtYXJnaW4tdG9wOjIuNnZ3O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MzIwcHgpe1xyXG5cclxuICAucGFzc3tcclxuICAgIG1hcmdpbi1sZWZ0OjUwdnc7XHJcbiAgICBtYXJnaW4tdG9wOjIuNnZ3O1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n\n    <div class=\"row\">\n        <div class=\"col-12  text-left \">\n           <h4 class=\"heading animated fadeInLeft \"><i class=\"fab fa-audible icon\"></i><span>Trego</span></h4>\n        </div>\n    </div>\n    <br><br>\n\n    <div class=\"row p-0 m-0\">\n\n        <div class=\"col-sm\"></div>\n      \n        <div class=\"col-sm p-5 form-div animated bounceInDown \" >\n\n\n      \n          <p class=\"form-signin-heading \">Let's explore</p>\n          <br>\n      \n  <form id=\"loginform\" class=\"form-horizontal\" role=\"form\" #loginForm=\"ngForm\" ng-app=\"show_hide_password\" ng-controller=\"show_hide_password_controller\">\n  \n      \n    <div class=\"form-group\">\n  \n        <input type=\"email\" id=\"inputEmail\" style=\"color:black\" [class.has-error]=\"mail.invalid && mail.touched \" pattern=\"[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" #mail=\"ngModel\" required >\n        \n        <label  >Email</label>\n        <span [hidden]=\"mail.pristine\">\n        <span class=\" block float-right\" *ngIf=\"mail.errors?.required && mail.touched\">Email is required!</span>\n        <span class=\"block float-right\"  *ngIf=\"mail.errors?.pattern\">Email is invalid!</span>\n      </span>\n      </div>\n\n       <div class=\"form-group\">\n          <a (click)=\"togglePassword()\"  id=\"btn\"> <i class=\"far fa-eye pass\"  [class.active]=\"passwordShown==true\" ></i></a>\n        <input [type]=\"passwordType\" id=\"pwd\" style=\"color:black\"  [class.has-error]=\"pass.invalid && pass.touched\"  class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" #pass=\"ngModel\" required>\n        \n  \n        <label  >Password</label>\n        \n        <span class=\"block float-right\" *ngIf=\"pass.errors?.required && pass.touched\">Password is required!</span>\n        </div>\n       \n        \n        <a  [routerLink]=\"['/forgot-pass']\"  style=\"color:white ;float:right\">forgot password?</a><br>\n        <button class=\"btn btn-lg btn-dark btn-block\" type=\"button\" (click)=\"signInFunction()\" [disabled]=\"!loginForm.valid\">Sign in</button>\n </form>\n       <br>\n       <br>\n        <a  [routerLink]=\"['/register']\"  style=\"color:white\" ><b>Don't have an account ?</b></a>\n      </div>\n      \n        <div class=\"col-sm\"></div>\n</div>\n\n\n\n\n</div> \n"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);



//for loading spinner




var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, _route, router, toastr, spinnerService) {
        var _this = this;
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.passwordType = 'password';
        this.passwordShown = false;
        this.loginUsingKeypress = function (event) {
            if (event.keyCode === 13) {
                // 13 is keycode of enter.
                _this.signInFunction();
            }
        }; // end loginUsingKeypress
    }
    LoginComponent.prototype.togglePassword = function () {
        if (this.passwordShown) {
            this.passwordShown = false;
            this.passwordType = 'password';
        }
        else {
            this.passwordShown = true;
            this.passwordType = "text";
        }
    };
    LoginComponent.prototype.signInFunction = function () {
        var _this = this;
        if (!this.email) {
            this.toastr.warning("Email is required", "Warning!");
        }
        else if (!this.password) {
            this.toastr.warning("Password is required", "Warning!");
        }
        else {
            var data = {
                email: this.email,
                password: this.password
            };
            this.spinnerService.show();
            //console.log(data)  
            this.appService.signIn(data).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    //console.log(apiResponse.data)
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].set('authToken', apiResponse.data.authToken);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].set('userId', apiResponse.data.userDetails.userId);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].set('userName', apiResponse.data.userDetails.firstName + " " + apiResponse.data.userDetails.lastName);
                    _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                    setTimeout(function () {
                        _this.spinnerService.hide();
                        _this.router.navigate(['/single-user']);
                        _this.toastr.success("Login Successfull", "Welcome to Trego");
                    }, 2000);
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                if (error.status == 404) {
                    setTimeout(function () {
                        _this.spinnerService.hide();
                        _this.toastr.warning("Login Failed", "User Not Found");
                    }, 1000);
                }
                else if (error.status == 400) {
                    setTimeout(function () {
                        _this.spinnerService.hide();
                        _this.toastr.warning("Login Failed", "Wrong Password");
                    }, 1000);
                }
                else {
                    setTimeout(function () {
                        _this.spinnerService.hide();
                        _this.router.navigate(['/serverError']);
                        _this.toastr.error("Some Error Occurred", "Error!");
                    }, 1000);
                }
            }); //end calling SignInFunction
        }
    }; //end signInFunction
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__["Ng4LoadingSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody, html {\r\n    height: 100%;\r\n  }\r\n  \r\n.container-fluid{\r\n\r\n    background-image:url('back.jpg');\r\n    height: 160vh; \r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    \r\n\r\n}\r\n  \r\ninput:focus {\r\n\r\n  background:transparent;\r\n}\r\n  \r\n.heading\r\n{\r\n    padding-top:18px;\r\n    \r\n    color:white;\r\n}\r\n  \r\n.icon\r\n{\r\n    margin-right:5px;\r\n\r\n}\r\n  \r\n.form-signin-heading{\r\n\r\n    color:white;\r\n    font-size:30px;\r\n\r\n}\r\n  \r\ninput{\r\n    background:transparent\r\n}\r\n  \r\nselect{\r\n    background:transparent\r\n}\r\n  \r\noption{\r\n    background:transparent;\r\n}\r\n  \r\n::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color:white;\r\n    opacity: 1; /* Firefox */\r\n  }\r\n  \r\n::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color:white;\r\n    opacity: 1; /* Firefox */\r\n  }\r\n  \r\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color:white;\r\n    opacity: 1; /* Firefox */\r\n  }\r\n  \r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n    color:white;\r\n  }\r\n  \r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n    color:white;\r\n  }\r\n  \r\nbutton{\r\n    margin-top:8px;\r\n    border-radius:15px;\r\n}\r\n  \r\n.form-div{\r\n    box-shadow: 0 4px 16px 4px #2b2b2b;\r\n}\r\n  \r\n.has-error{\r\n\r\n    border:2px solid #8e1600;\r\n}\r\n  \r\n.block{\r\n    color:#8e1600;\r\n}\r\n  \r\n@media (max-width:767px){\r\n\r\n    #lastName{\r\n        margin-top:24px;\r\n    }\r\n\r\n    #confirmPassword{\r\n\r\n        margin-top:24px;\r\n\r\n    }\r\n\r\n\r\n}\r\n  \r\n/* LABEL ======================================= */\r\n  \r\nlabel                {\r\n    color:white; \r\n    font-size:18px;\r\n    font-weight:normal;\r\n    position:relative;\r\n    pointer-events:none;\r\n    left:9px;\r\n    top:-35px;\r\n    transition:0.2s ease all; \r\n    -moz-transition:0.2s ease all; \r\n    -webkit-transition:0.2s ease all;\r\n  }\r\n  \r\n/* active state */\r\n  \r\ninput:focus ~ label,input:valid ~ label       {\r\n    left:7px;\r\n    top:-65px;\r\n    font-size:14px;\r\n    color:white;\r\n  }\r\n  \r\n/* HIGHLIGHTER ================================== */\r\n  \r\n.highlight {\r\n  position:absolute;\r\n  height:60%; \r\n  width:100px; \r\n  top:25%; \r\n  left:0;\r\n  pointer-events:none;\r\n  opacity:0.5;\r\n}\r\n  \r\n/* active state */\r\n  \r\ninput:focus ~ .highlight {\r\n  -webkit-animation:inputHighlighter 0.3s ease;\r\n  animation:inputHighlighter 0.3s ease;\r\n}\r\n  \r\n/* ANIMATIONS ================ */\r\n  \r\n@-webkit-keyframes inputHighlighter {\r\n    from { background:#5264AE; }\r\n  to    { width:0; background:transparent; }\r\n}\r\n  \r\n@keyframes inputHighlighter {\r\n    from { background:#5264AE; }\r\n  to    { width:0; background:transparent; }\r\n}\r\n  \r\n.pass{\r\n\r\n  position:absolute;\r\n  margin-left:25vw;\r\n  margin-top:.8vw;\r\n  color:#a8a8ad;\r\n  cursor:pointer;\r\n  font-size:20px\r\n}\r\n  \r\n.active{\r\n  color:black;\r\n}\r\n  \r\n@media(max-width:1223px){\r\n\r\n  .pass{\r\n    margin-left:25vw;\r\n  }\r\n}\r\n  \r\n@media(max-width:1085px){\r\n\r\n  .pass{\r\n    margin-left:24vw;\r\n  }\r\n\r\n}\r\n  \r\n@media(max-width:963px){\r\n\r\n  .pass{\r\n    margin-left:23vw;\r\n    margin-top:.9vw;\r\n  }\r\n\r\n}\r\n  \r\n@media(max-width:907px){\r\n\r\n  .pass{\r\n    margin-left:22vw;\r\n    margin-top:1.1vw;\r\n  }\r\n\r\n}\r\n  \r\n@media(max-width:768px){\r\n\r\n  .pass{\r\n    margin-left:19.6vw;\r\n    margin-top:1.3vw;\r\n  }\r\n\r\n}\r\n  \r\n@media(max-width:414px){\r\n\r\n  .pass{\r\n    margin-left:60vw;\r\n    margin-top:2.3vw;\r\n  }\r\n\r\n}\r\n  \r\n@media(max-width:375px){\r\n\r\n  .pass{\r\n    margin-left:56vw;\r\n    margin-top:2.6vw;\r\n  }\r\n\r\n}\r\n  \r\n@media(max-width:360px){\r\n\r\n  .pass{\r\n    margin-left:55vw;\r\n    margin-top:2.6vw;\r\n  }\r\n\r\n}\r\n  \r\n@media(max-width:320px){\r\n\r\n  .pass{\r\n    margin-left:50vw;\r\n    margin-top:2.6vw;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7R0FDZDs7QUFFSDs7SUFFSSxpQ0FBc0Q7SUFDdEQsY0FBYztJQUNkLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsdUJBQXVCOzs7Q0FHMUI7O0FBRUQ7O0VBRUUsdUJBQXVCO0NBQ3hCOztBQUdEOztJQUVJLGlCQUFpQjs7SUFFakIsWUFBWTtDQUNmOztBQUVEOztJQUVJLGlCQUFpQjs7Q0FFcEI7O0FBRUQ7O0lBRUksWUFBWTtJQUNaLGVBQWU7O0NBRWxCOztBQUVEO0lBQ0ksc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksdUJBQXVCO0NBQzFCOztBQUVELDhCQUFnQiwwQ0FBMEM7SUFDdEQsWUFBWTtJQUNaLFdBQVcsQ0FBQyxhQUFhO0dBQzFCOztBQUhILDBCQUFnQiwwQ0FBMEM7SUFDdEQsWUFBWTtJQUNaLFdBQVcsQ0FBQyxhQUFhO0dBQzFCOztBQUhILGdCQUFnQiwwQ0FBMEM7SUFDdEQsWUFBWTtJQUNaLFdBQVcsQ0FBQyxhQUFhO0dBQzFCOztBQUVELHlCQUF5Qiw2QkFBNkI7SUFDcEQsWUFBWTtHQUNiOztBQUVELDBCQUEwQixvQkFBb0I7SUFDNUMsWUFBWTtHQUNiOztBQUVIO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLG1DQUFtQztDQUN0Qzs7QUFFRDs7SUFFSSx5QkFBeUI7Q0FDNUI7O0FBQ0Q7SUFDSSxjQUFjO0NBQ2pCOztBQUdEOztJQUVJO1FBQ0ksZ0JBQWdCO0tBQ25COztJQUVEOztRQUVJLGdCQUFnQjs7S0FFbkI7OztDQUdKOztBQUVBLG1EQUFtRDs7QUFDbkQ7SUFDRyxZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixpQ0FBaUM7R0FDbEM7O0FBRUQsa0JBQWtCOztBQUNsQjtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZUFBZTtJQUNmLFlBQVk7R0FDYjs7QUFJSCxvREFBb0Q7O0FBQ3BEO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osUUFBUTtFQUNSLE9BQU87RUFDUCxvQkFBb0I7RUFDcEIsWUFBWTtDQUNiOztBQUVELGtCQUFrQjs7QUFDbEI7RUFDRSw2Q0FBNkM7RUFFN0MscUNBQXFDO0NBQ3RDOztBQUVELGlDQUFpQzs7QUFDakM7SUFDSSxPQUFPLG1CQUFtQixFQUFFO0VBQzlCLFFBQVEsUUFBUSxDQUFDLHVCQUF1QixFQUFFO0NBQzNDOztBQUtEO0lBQ0ksT0FBTyxtQkFBbUIsRUFBRTtFQUM5QixRQUFRLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRTtDQUMzQzs7QUFJRDs7RUFFRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFLRDs7RUFFRTtJQUNFLGlCQUFpQjtHQUNsQjtDQUNGOztBQUVEOztFQUVFO0lBQ0UsaUJBQWlCO0dBQ2xCOztDQUVGOztBQUVEOztFQUVFO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtHQUNqQjs7Q0FFRjs7QUFFRDs7RUFFRTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7R0FDbEI7O0NBRUY7O0FBRUQ7O0VBRUU7SUFDRSxtQkFBbUI7SUFDbkIsaUJBQWlCO0dBQ2xCOztDQUVGOztBQUVEOztFQUVFO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtHQUNsQjs7Q0FFRjs7QUFHRDs7RUFFRTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7R0FDbEI7O0NBRUY7O0FBRUQ7O0VBRUU7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0dBQ2xCOztDQUVGOztBQUVEOztFQUVFO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtHQUNsQjs7Q0FFRiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5ib2R5LCBodG1sIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbi5jb250YWluZXItZmx1aWR7XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrLmpwZyk7XHJcbiAgICBoZWlnaHQ6IDE2MHZoOyBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgXHJcblxyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcblxyXG4gIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcblxyXG4uaGVhZGluZ1xyXG57XHJcbiAgICBwYWRkaW5nLXRvcDoxOHB4O1xyXG4gICAgXHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmljb25cclxue1xyXG4gICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuXHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbi1oZWFkaW5ne1xyXG5cclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOjMwcHg7XHJcblxyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnRcclxufVxyXG5cclxuc2VsZWN0e1xyXG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudFxyXG59XHJcblxyXG5vcHRpb257XHJcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxuICB9XHJcbiAgXHJcbiAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgfVxyXG5cclxuYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDo4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbn1cclxuXHJcbi5mb3JtLWRpdntcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggNHB4ICMyYjJiMmI7XHJcbn1cclxuXHJcbi5oYXMtZXJyb3J7XHJcblxyXG4gICAgYm9yZGVyOjJweCBzb2xpZCAjOGUxNjAwO1xyXG59XHJcbi5ibG9ja3tcclxuICAgIGNvbG9yOiM4ZTE2MDA7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjdweCl7XHJcblxyXG4gICAgI2xhc3ROYW1le1xyXG4gICAgICAgIG1hcmdpbi10b3A6MjRweDtcclxuICAgIH1cclxuXHJcbiAgICAjY29uZmlybVBhc3N3b3Jke1xyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOjI0cHg7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbiAvKiBMQUJFTCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuIGxhYmVsICAgICAgICAgICAgICAgIHtcclxuICAgIGNvbG9yOndoaXRlOyBcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBwb2ludGVyLWV2ZW50czpub25lO1xyXG4gICAgbGVmdDo5cHg7XHJcbiAgICB0b3A6LTM1cHg7XHJcbiAgICB0cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7IFxyXG4gICAgLW1vei10cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7IFxyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGFjdGl2ZSBzdGF0ZSAqL1xyXG4gIGlucHV0OmZvY3VzIH4gbGFiZWwsaW5wdXQ6dmFsaWQgfiBsYWJlbCAgICAgICB7XHJcbiAgICBsZWZ0OjdweDtcclxuICAgIHRvcDotNjVweDtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcbi8qIEhJR0hMSUdIVEVSID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLmhpZ2hsaWdodCB7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgaGVpZ2h0OjYwJTsgXHJcbiAgd2lkdGg6MTAwcHg7IFxyXG4gIHRvcDoyNSU7IFxyXG4gIGxlZnQ6MDtcclxuICBwb2ludGVyLWV2ZW50czpub25lO1xyXG4gIG9wYWNpdHk6MC41O1xyXG59XHJcblxyXG4vKiBhY3RpdmUgc3RhdGUgKi9cclxuaW5wdXQ6Zm9jdXMgfiAuaGlnaGxpZ2h0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjppbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcclxuICAtbW96LWFuaW1hdGlvbjppbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcclxuICBhbmltYXRpb246aW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi8qIEFOSU1BVElPTlMgPT09PT09PT09PT09PT09PSAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgaW5wdXRIaWdobGlnaHRlciB7XHJcbiAgICBmcm9tIHsgYmFja2dyb3VuZDojNTI2NEFFOyB9XHJcbiAgdG8gICAgeyB3aWR0aDowOyBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xyXG4gICAgZnJvbSB7IGJhY2tncm91bmQ6IzUyNjRBRTsgfVxyXG4gIHRvICAgIHsgd2lkdGg6MDsgYmFja2dyb3VuZDp0cmFuc3BhcmVudDsgfVxyXG59XHJcbkBrZXlmcmFtZXMgaW5wdXRIaWdobGlnaHRlciB7XHJcbiAgICBmcm9tIHsgYmFja2dyb3VuZDojNTI2NEFFOyB9XHJcbiAgdG8gICAgeyB3aWR0aDowOyBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyB9XHJcbn1cclxuXHJcblxyXG5cclxuLnBhc3N7XHJcblxyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIG1hcmdpbi1sZWZ0OjI1dnc7XHJcbiAgbWFyZ2luLXRvcDouOHZ3O1xyXG4gIGNvbG9yOiNhOGE4YWQ7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgZm9udC1zaXplOjIwcHhcclxufVxyXG5cclxuLmFjdGl2ZXtcclxuICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhKG1heC13aWR0aDoxMjIzcHgpe1xyXG5cclxuICAucGFzc3tcclxuICAgIG1hcmdpbi1sZWZ0OjI1dnc7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjEwODVweCl7XHJcblxyXG4gIC5wYXNze1xyXG4gICAgbWFyZ2luLWxlZnQ6MjR2dztcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjk2M3B4KXtcclxuXHJcbiAgLnBhc3N7XHJcbiAgICBtYXJnaW4tbGVmdDoyM3Z3O1xyXG4gICAgbWFyZ2luLXRvcDouOXZ3O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6OTA3cHgpe1xyXG5cclxuICAucGFzc3tcclxuICAgIG1hcmdpbi1sZWZ0OjIydnc7XHJcbiAgICBtYXJnaW4tdG9wOjEuMXZ3O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzY4cHgpe1xyXG5cclxuICAucGFzc3tcclxuICAgIG1hcmdpbi1sZWZ0OjE5LjZ2dztcclxuICAgIG1hcmdpbi10b3A6MS4zdnc7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo0MTRweCl7XHJcblxyXG4gIC5wYXNze1xyXG4gICAgbWFyZ2luLWxlZnQ6NjB2dztcclxuICAgIG1hcmdpbi10b3A6Mi4zdnc7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6Mzc1cHgpe1xyXG5cclxuICAucGFzc3tcclxuICAgIG1hcmdpbi1sZWZ0OjU2dnc7XHJcbiAgICBtYXJnaW4tdG9wOjIuNnZ3O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MzYwcHgpe1xyXG5cclxuICAucGFzc3tcclxuICAgIG1hcmdpbi1sZWZ0OjU1dnc7XHJcbiAgICBtYXJnaW4tdG9wOjIuNnZ3O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MzIwcHgpe1xyXG5cclxuICAucGFzc3tcclxuICAgIG1hcmdpbi1sZWZ0OjUwdnc7XHJcbiAgICBtYXJnaW4tdG9wOjIuNnZ3O1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n\n    <div class=\"row\">\n        <div class=\"col-12  text-left \">\n           <h4 class=\"heading animated fadeInLeft \"><i class=\"fab fa-audible icon\"></i><span>Trego</span></h4>\n        </div>\n    </div>\n    <br><br>\n\n  \n\n    <div class=\"row p-0 m-0\">\n\n        <div class=\"col-sm-2\"></div>\n      \n          <div class=\"col-sm-8 p-5 form-div animated bounceInDown\" >\n\n             <p class=\"form-signin-heading\">Sign up for free</p>\n             <br>\n\n\n        <form id=\"registerform\" class=\"form-horizontal\" role=\"form\" #registerForm=\"ngForm\">\n\n           <div class=\"row\">\n\n               <div class=\"col-sm-12 col-md-6\">\n                    <input type=\"text\" id=\"firstName\" style=\"color:black\" class=\"form-control\" name=\"firstName\" [class.has-error]=\"first.invalid && first.touched\" pattern=\"^[a-zA-Z '.-]*$\" minlength=\"3\" [(ngModel)]=\"firstName\" #first=\"ngModel\"  required >\n                    <label  >First Name</label>\n        \n                    <span class=\" block float-right\" *ngIf=\"first.errors?.required && first.touched\">first name is required!</span>\n                    <span class=\"block float-right\"  *ngIf=\"first.errors?.pattern\">name should contain only letters!</span>\n                    <span class=\"block float-right\"  *ngIf=\"first.errors?.minlength\">Minimum 3 letters required!</span>\n               </div>\n\n               <div class=\"col-sm-12 col-md-6\">\n                    <input type=\"text\" id=\"lastName\" class=\"form-control\"  style=\"color:black\"  name=\"lastName\" [class.has-error]=\"second.invalid && second.touched\" pattern=\"^[a-zA-Z '.-]*$\" minlength=\"3\"  [(ngModel)]=\"lastName\" #second=\"ngModel\"  required >\n                    <label>Last Name</label>\n                    <span class=\" block  float-right\" *ngIf=\"second.errors?.required && second.touched\">second name is required!</span>\n                    <span class=\"block  float-right\"  *ngIf=\"second.errors?.pattern\">name should contain only letters!</span>\n                    <span class=\"block  float-right\"  *ngIf=\"second.errors?.minlength\">Minimum 3 letters required!</span>\n               </div>\n\n          </div>\n\n        <br>\n          \n         <input type=\"email\" id=\"inputEmail\"  style=\"color:black\" pattern=\"[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" [class.has-error]=\"mail.invalid && mail.touched\"  class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" #mail=\"ngModel\" required >\n         <label>Email</label>\n         <span class=\" block  float-right\" *ngIf=\"mail.errors?.required && mail.touched\">Email is required!</span>\n         <span class=\"block  float-right\"  *ngIf=\"mail.errors?.pattern\">Email is invalid!</span>\n       <br>\n      \n    <div class=\"row\">\n\n          <div class=\"col-sm-12 col-md-6\">\n              <a (click)=\"togglePassword()\"  id=\"btn\"> <i class=\"far fa-eye pass\"  [class.active]=\"passwordShown==true\" ></i></a>\n                  <input [type]=\"passwordType\"  style=\"color:black\"  id=\"Password\" class=\"form-control\" name=\"pass\" [(ngModel)]=\"password\" #pass=\"ngModel\" [class.has-error]=\"pass.invalid && pass.touched\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\"  required>\n                  <label>Password</label>\n                  <span class=\"block float-right\"  *ngIf=\"pass.errors?.required && pass.touched \">Password is required!</span>\n                  <span class=\"block float-right\"  *ngIf=\"pass.errors?.pattern\">Password must contain atleast one number,one upper and lowercase letter and atleast 8 characters!</span>\n          </div>\n\n          <div class=\"col-sm-12 col-md-6\">\n              <a (click)=\"toggleConfirmPassword()\"  id=\"btn\"> <i class=\"far fa-eye pass\"  [class.active]=\"confirmPasswordShown==true\" ></i></a> \n                <input [type]=\"confirmPasswordType\" id=\"confirmPassword\"  style=\"color:black\"  class=\"form-control\" name=\"re-pass\"  [(ngModel)]=\"confirmPassword\" #repass=\"ngModel\" [class.has-error]=\"repass.invalid && repass.touched\"  required>\n                <label>Confirm Password</label>\n                <span [hidden]=\"repass.pristine || password==confirmPassword\">\n                <span class=\"block float-right\"  *ngIf=\"repass.errors?.required && repass.touched \">confirm password is required!</span>\n                <span class=\"block float-right\"  *ngIf=\"password!=confirmPassword\"> password do not match!</span>\n                </span>\n          </div>\n\n    </div>\n\n      \n          <br>\n\n          <select [(ngModel)]=\"country\" #Country=\"ngModel\"  style=\"color:black\"   name=\"countryName\" class=\"form-control  input-box\" placeholder=\"select country\"\n          id=\"inputCountry\" (change)=\"onChange()\" required>\n          <option value=\"\" >Select</option>\n          <option *ngFor=\"let country of finalCountryList\" [value]=\"country.key\">{{country.value}}</option>\n          </select>\n          <span style=\"color:white\">**Country name is required</span>\n          <br>\n          <br>\n\n          <div class=\"input-group\">\n                <div class=\"input-group-text\" style=\"background:transparent;color:black\"><span style=\"color:white\">+{{code}}</span></div>\n                <input type=\"number\" #mobileNum=\"ngModel\"  style=\"color:black\"  pattern=\"^\\d{10}$\" id=\"inputMobile\" class=\"form-control input-box\" name=\"mobile\" [(ngModel)]=\"mobileNumber\" #mob=\"ngModel\" [class.has-error]=\"mob.invalid && mob.touched\"\n                 placeholder=\"Mobile no.\" required>\n                 \n              </div>\n                \n\n                <span class=\"block float-right\" *ngIf=\"mob.errors?.required && mob.touched\">\n                  Mobile Number is required!\n                </span>\n\n                <span class=\"block float-right\" *ngIf=\"mob.errors?.pattern\">\n                  Mobile Number should only start contain only 10 digits!\n          \n                </span>\n    \n         \n        <br>\n        <br>\n            \n        \n         \n          <button class=\"btn btn-lg btn-dark btn-block\" type=\"button\" (click)=\"signupFunction()\" [disabled]=\"!registerForm.valid\">Sign in</button>\n          <br>\n          <br>\n      </form>\n          \n          <a  [routerLink]=\"['/login']\"  style=\"color:white\" ><b>Sign in Instead</b></a>\n      \n        </div>\n      \n        <div class=\"col-sm-2\"></div>\n</div>\n\n</div> \n"

/***/ }),

/***/ "./src/app/user/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sort_countries_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sort-countries.pipe */ "./src/app/sort-countries.pipe.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);



//import for toastr

//import for Routing



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(appService, _route, router, toastr, sortCountries, spinnerService) {
        var _this = this;
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.sortCountries = sortCountries;
        this.spinnerService = spinnerService;
        this.country = "";
        this.finalCountryList = [];
        this.codeList = [];
        this.passwordType = 'password';
        this.confirmPasswordType = 'password';
        this.passwordShown = false;
        this.confirmPasswordShown = false;
        this.onChange = function () {
            _this.appService.getCountryCode().subscribe(function (Response) {
                _this.codeList = Response;
                _this.code = _this.codeList[_this.country];
            });
        }; //end
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getCountryList().subscribe(function (Response) {
            _this.countryList = Response;
            for (var prop in _this.countryList) {
                _this.finalCountryList.push({
                    'key': prop,
                    'value': _this.countryList[prop]
                });
            }
            _this.finalCountryList = _this.sortCountries.transform(_this.finalCountryList);
        });
    };
    RegisterComponent.prototype.togglePassword = function () {
        if (this.passwordShown) {
            this.passwordShown = false;
            this.passwordType = 'password';
        }
        else {
            this.passwordShown = true;
            this.passwordType = "text";
        }
    };
    RegisterComponent.prototype.toggleConfirmPassword = function () {
        if (this.confirmPasswordShown) {
            this.confirmPasswordShown = false;
            this.confirmPasswordType = 'password';
        }
        else {
            this.confirmPasswordShown = true;
            this.confirmPasswordType = 'text';
        }
    };
    RegisterComponent.prototype.goToSignIn = function () {
        this.router.navigate(['/login']);
    }; //end of goToSign function
    RegisterComponent.prototype.signupFunction = function () {
        var _this = this;
        if (!this.firstName) {
            this.toastr.warning("First Name is required", "Warning!");
        }
        else if (!this.lastName) {
            this.toastr.warning("Last Name is required", "Warning!");
        }
        else if (!this.mobileNumber) {
            this.toastr.warning("Mobile Number is required", "Warning!");
        }
        else if (!this.country) {
            this.toastr.warning("Country is required", "Warning!");
        }
        else if (!this.email) {
            this.toastr.warning("Email is required", "Warning!");
        }
        else if (!this.password) {
            this.toastr.warning("Password is required", "Warning!");
        }
        else {
            var data = {
                firstName: this.firstName,
                lastName: this.lastName,
                mobileNumber: "+" + this.code + "-" + this.mobileNumber,
                email: this.email,
                password: this.password,
                countryName: this.country,
            };
            this.spinnerService.show();
            //console.log(data)  
            this.appService.signUp(data)
                .subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    setTimeout(function () {
                        _this.spinnerService.hide();
                        _this.toastr.success("Success", "Registered with Trego");
                        _this.goToSignIn();
                    }, 2000);
                }
                else {
                    setTimeout(function () {
                        _this.spinnerService.hide();
                        _this.toastr.error(apiResponse.message, "Error!");
                    }, 2000);
                }
            }, function (error) {
                setTimeout(function () {
                    _this.spinnerService.hide();
                    _this.router.navigate(['/serverError']);
                    _this.toastr.error("Some Error Occurred", "Error!");
                }, 2000);
            }); //end calling signUpFunction
        }
    }; //end signUp function
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _sort_countries_pipe__WEBPACK_IMPORTED_MODULE_5__["SortCountriesPipe"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user/reset-pass/reset-pass.component.css":
/*!**********************************************************!*\
  !*** ./src/app/user/reset-pass/reset-pass.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody, html {\r\n    height: 100%;\r\n  }\r\n  \r\n.container-fluid{\r\n\r\n    background-image:url('back.jpg');\r\n    height: 100vh; \r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    \r\n\r\n}\r\n  \r\n.heading\r\n{\r\n    padding-top:18px;\r\n    \r\n    color:white;\r\n}\r\n  \r\n.icon\r\n{\r\n    margin-right:5px;\r\n\r\n}\r\n  \r\n.form-signin-heading{\r\n\r\n    color:white;\r\n    font-size:30px;\r\n\r\n}\r\n  \r\nbutton{\r\n    margin-top:8px;\r\n    border-radius:15px;\r\n}\r\n  \r\n.form-div{\r\n    box-shadow: 0 4px 16px 4px #2b2b2b;\r\n}\r\n  \r\n.has-error{\r\n\r\n    border:2px solid #8e1600;\r\n}\r\n  \r\n.block{\r\n    color:#8e1600;\r\n    \r\n    position:relative;\r\n\r\n}\r\n  \r\ninput{\r\n    background:transparent\r\n}\r\n  \r\n::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color:white;\r\n    opacity: 1; /* Firefox */\r\n  }\r\n  \r\n::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color:white;\r\n    opacity: 1; /* Firefox */\r\n  }\r\n  \r\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color:white;\r\n    opacity: 1; /* Firefox */\r\n  }\r\n  \r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n    color:white;\r\n  }\r\n  \r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n    color:white;\r\n  }\r\n  \r\n/* LABEL ======================================= */\r\n  \r\nlabel                {\r\n    color:white; \r\n    font-size:18px;\r\n    font-weight:normal;\r\n    position:relative;\r\n    pointer-events:none;\r\n    left:9px;\r\n    top:-35px;\r\n    transition:0.2s ease all; \r\n    -moz-transition:0.2s ease all; \r\n    -webkit-transition:0.2s ease all;\r\n  }\r\n  \r\n/* active state */\r\n  \r\ninput:focus ~ label, input:valid ~ label        {\r\n    left:7px;\r\n    top:-65px;\r\n    font-size:14px;\r\n    color:white;\r\n  }\r\n  \r\n/* HIGHLIGHTER ================================== */\r\n  \r\n.highlight {\r\n  position:absolute;\r\n  height:60%; \r\n  width:100px; \r\n  top:25%; \r\n  left:0;\r\n  pointer-events:none;\r\n  opacity:0.5;\r\n}\r\n  \r\n/* active state */\r\n  \r\ninput:focus ~ .highlight {\r\n  -webkit-animation:inputHighlighter 0.3s ease;\r\n  animation:inputHighlighter 0.3s ease;\r\n}\r\n  \r\n/* ANIMATIONS ================ */\r\n  \r\n@-webkit-keyframes inputHighlighter {\r\n    from { background:#5264AE; }\r\n  to    { width:0; background:transparent; }\r\n}\r\n  \r\n@keyframes inputHighlighter {\r\n    from { background:#5264AE; }\r\n  to    { width:0; background:transparent; }\r\n}\r\n  \r\n@media (max-width:767px){\r\n\r\n \r\n\r\n    #confirmPassword{\r\n\r\n        margin-top:24px;\r\n\r\n    }\r\n\r\n\r\n}\r\n  \r\n.pass{\r\n\r\n  position:absolute;\r\n  margin-left:25vw;\r\n  margin-top:.8vw;\r\n  color:#a8a8ad;\r\n  cursor:pointer;\r\n  font-size:20px\r\n}\r\n  \r\n.active{\r\n  color:black;\r\n}\r\n  \r\n@media(max-width:1223px){\r\n\r\n  .pass{\r\n    margin-left:25vw;\r\n  }\r\n}\r\n  \r\n@media(max-width:1085px){\r\n\r\n  .pass{\r\n    margin-left:24vw;\r\n  }\r\n\r\n}\r\n  \r\n@media(max-width:963px){\r\n\r\n  .pass{\r\n    margin-left:23vw;\r\n    margin-top:.9vw;\r\n  }\r\n\r\n}\r\n  \r\n@media(max-width:907px){\r\n\r\n  .pass{\r\n    margin-left:22vw;\r\n    margin-top:1.1vw;\r\n  }\r\n\r\n}\r\n  \r\n@media(max-width:768px){\r\n\r\n  .pass{\r\n    margin-left:19.6vw;\r\n    margin-top:1.3vw;\r\n  }\r\n\r\n}\r\n  \r\n@media(max-width:414px){\r\n\r\n  .pass{\r\n    margin-left:60vw;\r\n    margin-top:2.3vw;\r\n  }\r\n\r\n}\r\n  \r\n@media(max-width:375px){\r\n\r\n  .pass{\r\n    margin-left:56vw;\r\n    margin-top:2.6vw;\r\n  }\r\n\r\n}\r\n  \r\n@media(max-width:360px){\r\n\r\n  .pass{\r\n    margin-left:55vw;\r\n    margin-top:2.6vw;\r\n  }\r\n\r\n}\r\n  \r\n@media(max-width:320px){\r\n\r\n  .pass{\r\n    margin-left:50vw;\r\n    margin-top:2.6vw;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZXNldC1wYXNzL3Jlc2V0LXBhc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxhQUFhO0dBQ2Q7O0FBRUg7O0lBRUksaUNBQXNEO0lBQ3RELGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLHVCQUF1Qjs7O0NBRzFCOztBQUVEOztJQUVJLGlCQUFpQjs7SUFFakIsWUFBWTtDQUNmOztBQUVEOztJQUVJLGlCQUFpQjs7Q0FFcEI7O0FBRUQ7O0lBRUksWUFBWTtJQUNaLGVBQWU7O0NBRWxCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLG1DQUFtQztDQUN0Qzs7QUFFRDs7SUFFSSx5QkFBeUI7Q0FDNUI7O0FBQ0Q7SUFDSSxjQUFjOztJQUVkLGtCQUFrQjs7Q0FFckI7O0FBR0Q7SUFDSSxzQkFBc0I7Q0FDekI7O0FBSUQsOEJBQWdCLDBDQUEwQztJQUN0RCxZQUFZO0lBQ1osV0FBVyxDQUFDLGFBQWE7R0FDMUI7O0FBSEgsMEJBQWdCLDBDQUEwQztJQUN0RCxZQUFZO0lBQ1osV0FBVyxDQUFDLGFBQWE7R0FDMUI7O0FBSEgsZ0JBQWdCLDBDQUEwQztJQUN0RCxZQUFZO0lBQ1osV0FBVyxDQUFDLGFBQWE7R0FDMUI7O0FBRUQseUJBQXlCLDZCQUE2QjtJQUNwRCxZQUFZO0dBQ2I7O0FBRUQsMEJBQTBCLG9CQUFvQjtJQUM1QyxZQUFZO0dBQ2I7O0FBRUQsbURBQW1EOztBQUNyRDtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLGlDQUFpQztHQUNsQzs7QUFFRCxrQkFBa0I7O0FBQ2xCO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0lBQ2YsWUFBWTtHQUNiOztBQUlILG9EQUFvRDs7QUFDcEQ7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixRQUFRO0VBQ1IsT0FBTztFQUNQLG9CQUFvQjtFQUNwQixZQUFZO0NBQ2I7O0FBRUQsa0JBQWtCOztBQUNsQjtFQUNFLDZDQUE2QztFQUU3QyxxQ0FBcUM7Q0FDdEM7O0FBRUQsaUNBQWlDOztBQUNqQztJQUNJLE9BQU8sbUJBQW1CLEVBQUU7RUFDOUIsUUFBUSxRQUFRLENBQUMsdUJBQXVCLEVBQUU7Q0FDM0M7O0FBS0Q7SUFDSSxPQUFPLG1CQUFtQixFQUFFO0VBQzlCLFFBQVEsUUFBUSxDQUFDLHVCQUF1QixFQUFFO0NBQzNDOztBQUdEOzs7O0lBSUk7O1FBRUksZ0JBQWdCOztLQUVuQjs7O0NBR0o7O0FBRUQ7O0VBRUUsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBS0Q7O0VBRUU7SUFDRSxpQkFBaUI7R0FDbEI7Q0FDRjs7QUFFRDs7RUFFRTtJQUNFLGlCQUFpQjtHQUNsQjs7Q0FFRjs7QUFFRDs7RUFFRTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7R0FDakI7O0NBRUY7O0FBRUQ7O0VBRUU7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0dBQ2xCOztDQUVGOztBQUVEOztFQUVFO0lBQ0UsbUJBQW1CO0lBQ25CLGlCQUFpQjtHQUNsQjs7Q0FFRjs7QUFFRDs7RUFFRTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7R0FDbEI7O0NBRUY7O0FBR0Q7O0VBRUU7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0dBQ2xCOztDQUVGOztBQUVEOztFQUVFO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtHQUNsQjs7Q0FFRjs7QUFFRDs7RUFFRTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7R0FDbEI7O0NBRUYiLCJmaWxlIjoic3JjL2FwcC91c2VyL3Jlc2V0LXBhc3MvcmVzZXQtcGFzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmJvZHksIGh0bWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuLmNvbnRhaW5lci1mbHVpZHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2suanBnKTtcclxuICAgIGhlaWdodDogMTAwdmg7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi5oZWFkaW5nXHJcbntcclxuICAgIHBhZGRpbmctdG9wOjE4cHg7XHJcbiAgICBcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uaWNvblxyXG57XHJcbiAgICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG5cclxufVxyXG5cclxuLmZvcm0tc2lnbmluLWhlYWRpbmd7XHJcblxyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6MzBweDtcclxuXHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6OHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG59XHJcblxyXG4uZm9ybS1kaXZ7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IDRweCAjMmIyYjJiO1xyXG59XHJcblxyXG4uaGFzLWVycm9ye1xyXG5cclxuICAgIGJvcmRlcjoycHggc29saWQgIzhlMTYwMDtcclxufVxyXG4uYmxvY2t7XHJcbiAgICBjb2xvcjojOGUxNjAwO1xyXG4gICAgXHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHJcbn1cclxuXHJcblxyXG5pbnB1dHtcclxuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnRcclxufVxyXG5cclxuXHJcblxyXG46OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxuICB9XHJcbiAgXHJcbiAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgfVxyXG5cclxuICAvKiBMQUJFTCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxubGFiZWwgICAgICAgICAgICAgICAge1xyXG4gICAgY29sb3I6d2hpdGU7IFxyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICBmb250LXdlaWdodDpub3JtYWw7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XHJcbiAgICBsZWZ0OjlweDtcclxuICAgIHRvcDotMzVweDtcclxuICAgIHRyYW5zaXRpb246MC4ycyBlYXNlIGFsbDsgXHJcbiAgICAtbW96LXRyYW5zaXRpb246MC4ycyBlYXNlIGFsbDsgXHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246MC4ycyBlYXNlIGFsbDtcclxuICB9XHJcbiAgXHJcbiAgLyogYWN0aXZlIHN0YXRlICovXHJcbiAgaW5wdXQ6Zm9jdXMgfiBsYWJlbCwgaW5wdXQ6dmFsaWQgfiBsYWJlbCAgICAgICAge1xyXG4gICAgbGVmdDo3cHg7XHJcbiAgICB0b3A6LTY1cHg7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gIH1cclxuICBcclxuXHJcblxyXG4vKiBISUdITElHSFRFUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5oaWdobGlnaHQge1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGhlaWdodDo2MCU7IFxyXG4gIHdpZHRoOjEwMHB4OyBcclxuICB0b3A6MjUlOyBcclxuICBsZWZ0OjA7XHJcbiAgcG9pbnRlci1ldmVudHM6bm9uZTtcclxuICBvcGFjaXR5OjAuNTtcclxufVxyXG5cclxuLyogYWN0aXZlIHN0YXRlICovXHJcbmlucHV0OmZvY3VzIH4gLmhpZ2hsaWdodCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246aW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XHJcbiAgLW1vei1hbmltYXRpb246aW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XHJcbiAgYW5pbWF0aW9uOmlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4vKiBBTklNQVRJT05TID09PT09PT09PT09PT09PT0gKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xyXG4gICAgZnJvbSB7IGJhY2tncm91bmQ6IzUyNjRBRTsgfVxyXG4gIHRvICAgIHsgd2lkdGg6MDsgYmFja2dyb3VuZDp0cmFuc3BhcmVudDsgfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcclxuICAgIGZyb20geyBiYWNrZ3JvdW5kOiM1MjY0QUU7IH1cclxuICB0byAgICB7IHdpZHRoOjA7IGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7IH1cclxufVxyXG5Aa2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xyXG4gICAgZnJvbSB7IGJhY2tncm91bmQ6IzUyNjRBRTsgfVxyXG4gIHRvICAgIHsgd2lkdGg6MDsgYmFja2dyb3VuZDp0cmFuc3BhcmVudDsgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpe1xyXG5cclxuIFxyXG5cclxuICAgICNjb25maXJtUGFzc3dvcmR7XHJcblxyXG4gICAgICAgIG1hcmdpbi10b3A6MjRweDtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuLnBhc3N7XHJcblxyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIG1hcmdpbi1sZWZ0OjI1dnc7XHJcbiAgbWFyZ2luLXRvcDouOHZ3O1xyXG4gIGNvbG9yOiNhOGE4YWQ7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgZm9udC1zaXplOjIwcHhcclxufVxyXG5cclxuLmFjdGl2ZXtcclxuICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhKG1heC13aWR0aDoxMjIzcHgpe1xyXG5cclxuICAucGFzc3tcclxuICAgIG1hcmdpbi1sZWZ0OjI1dnc7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjEwODVweCl7XHJcblxyXG4gIC5wYXNze1xyXG4gICAgbWFyZ2luLWxlZnQ6MjR2dztcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjk2M3B4KXtcclxuXHJcbiAgLnBhc3N7XHJcbiAgICBtYXJnaW4tbGVmdDoyM3Z3O1xyXG4gICAgbWFyZ2luLXRvcDouOXZ3O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6OTA3cHgpe1xyXG5cclxuICAucGFzc3tcclxuICAgIG1hcmdpbi1sZWZ0OjIydnc7XHJcbiAgICBtYXJnaW4tdG9wOjEuMXZ3O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzY4cHgpe1xyXG5cclxuICAucGFzc3tcclxuICAgIG1hcmdpbi1sZWZ0OjE5LjZ2dztcclxuICAgIG1hcmdpbi10b3A6MS4zdnc7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo0MTRweCl7XHJcblxyXG4gIC5wYXNze1xyXG4gICAgbWFyZ2luLWxlZnQ6NjB2dztcclxuICAgIG1hcmdpbi10b3A6Mi4zdnc7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6Mzc1cHgpe1xyXG5cclxuICAucGFzc3tcclxuICAgIG1hcmdpbi1sZWZ0OjU2dnc7XHJcbiAgICBtYXJnaW4tdG9wOjIuNnZ3O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MzYwcHgpe1xyXG5cclxuICAucGFzc3tcclxuICAgIG1hcmdpbi1sZWZ0OjU1dnc7XHJcbiAgICBtYXJnaW4tdG9wOjIuNnZ3O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MzIwcHgpe1xyXG5cclxuICAucGFzc3tcclxuICAgIG1hcmdpbi1sZWZ0OjUwdnc7XHJcbiAgICBtYXJnaW4tdG9wOjIuNnZ3O1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/reset-pass/reset-pass.component.html":
/*!***********************************************************!*\
  !*** ./src/app/user/reset-pass/reset-pass.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n\n    <div class=\"row\">\n        <div class=\"col-12  text-left \">\n           <h4 class=\"heading animated fadeInLeft \"><i class=\"fab fa-audible icon\"></i><span>Trego</span></h4>\n        </div>\n    </div>\n    <br><br>\n\n  \n\n    <div class=\"row p-0 m-0\">\n\n        <div class=\"col-sm-2\"></div>\n      \n          <div class=\"col-sm-8 p-5 form-div animated bounceInDown\" >\n\n             <h5 class=\"form-signin-heading\">Change your password.</h5>\n             <br>\n\n\n        <form id=\"registerform\" class=\"form-horizontal\" role=\"form\" #resetForm=\"ngForm\">\n\n\n\n\n            <div class=\"row\">\n\n                <div class=\"col-sm-12 col-md-6\">\n                    <a (click)=\"togglePassword()\"  id=\"btn\"> <i class=\"far fa-eye pass\"  [class.active]=\"passwordShown==true\" ></i></a>\n                  <input [type]=\"passwordType\"   style=\"color:black\"  id=\"Password\" class=\"form-control\" name=\"pass\" [(ngModel)]=\"password\" #pass=\"ngModel\" [class.has-error]=\"pass.invalid && pass.touched\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\"  required>\n                  <label>Password</label>\n                  <span class=\"block float-right\"  *ngIf=\"pass.errors?.required && pass.touched \">Password is required!</span>\n                  <span class=\"block float-right\"  *ngIf=\"pass.errors?.pattern\">Password must contain atleast one number,one upper and lowercase letter and atleast 8 characters!</span>\n                </div>\n\n                <div class=\"col-sm-12 col-md-6\">\n                    <a (click)=\"toggleConfirmPassword()\"  id=\"btn\"> <i class=\"far fa-eye pass\"  [class.active]=\"confirmPasswordShown==true\" ></i></a> \n                <input [type]=\"confirmPasswordType\" id=\"confirmPassword\"  style=\"color:black\"  class=\"form-control\" name=\"re-pass\"  [(ngModel)]=\"confirmPassword\" #repass=\"ngModel\" [class.has-error]=\"repass.invalid && repass.touched\"  required>\n                <label>Confirm Password</label>\n                <span [hidden]=\"repass.pristine || password==confirmPassword\">\n                <span class=\"block float-right\"  *ngIf=\"repass.errors?.required && repass.touched \">confirm password is required!</span>\n                <span class=\"block float-right\"  *ngIf=\"password!=confirmPassword\"> password do not match!</span>\n                </span>\n                </div>\n              </div>\n\n  \n\n      \n    \n         \n        <br>\n        <br>\n            \n        \n         \n          <button class=\"btn btn-lg btn-dark btn-block\" type=\"button\" (click)=\"updatePasswordFunction()\" [disabled]=\"!resetForm.valid\">Change Password</button>\n          <br>\n          <br>\n      </form>\n          \n          <a  [routerLink]=\"['/login']\"  style=\"color:white\" ><b>Sign in Instead</b></a>\n      \n        </div>\n      \n        <div class=\"col-sm-2\"></div>\n</div>\n\n</div> \n"

/***/ }),

/***/ "./src/app/user/reset-pass/reset-pass.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/reset-pass/reset-pass.component.ts ***!
  \*********************************************************/
/*! exports provided: ResetPassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassComponent", function() { return ResetPassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);


//import for toastr

//for Service

//for routing


var ResetPassComponent = /** @class */ (function () {
    function ResetPassComponent(appService, _route, router, toastr, spinnerService) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.passwordType = 'password';
        this.confirmPasswordType = 'password';
        this.passwordShown = false;
        this.confirmPasswordShown = false;
    }
    ResetPassComponent.prototype.ngOnInit = function () {
        this.validationToken = this._route.snapshot.paramMap.get('validationToken');
    };
    ResetPassComponent.prototype.togglePassword = function () {
        if (this.passwordShown) {
            this.passwordShown = false;
            this.passwordType = 'password';
        }
        else {
            this.passwordShown = true;
            this.passwordType = "text";
        }
    };
    ResetPassComponent.prototype.toggleConfirmPassword = function () {
        if (this.confirmPasswordShown) {
            this.confirmPasswordShown = false;
            this.confirmPasswordType = 'password';
        }
        else {
            this.confirmPasswordShown = true;
            this.confirmPasswordType = 'text';
        }
    };
    ResetPassComponent.prototype.goToSignIn = function () {
        this.router.navigate(['/login']);
    }; //end of goToSign function
    ResetPassComponent.prototype.updatePasswordFunction = function () {
        var _this = this;
        if (this.password != this.confirmPassword) {
            this.toastr.warning("Password doesn't match", "Warning!");
        }
        else {
            var data = {
                validationToken: this.validationToken,
                password: this.password,
            };
            this.spinnerService.show();
            this.appService.updatePassword(data).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    setTimeout(function () {
                        _this.spinnerService.hide();
                        _this.goToSignIn();
                        _this.toastr.success("Please login", "Password Updated!");
                    }, 2000);
                }
                else {
                    setTimeout(function () {
                        _this.spinnerService.hide();
                        _this.toastr.error(apiResponse.message, "Error!");
                    }, 2000);
                }
            }, function (error) {
                if (error.status == 404) {
                    setTimeout(function () {
                        _this.spinnerService.hide();
                        _this.toastr.warning("Password Update failed", "Please request another password reset!");
                    }, 2000);
                }
                else {
                    setTimeout(function () {
                        _this.spinnerService.hide();
                        _this.toastr.error("Some Error Occurred", "Error!");
                        _this.router.navigate(['/serverError']);
                    }, 2000);
                }
            }); //end calling updatePassword
        }
    }; //end updatePasswordFunction
    ResetPassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-pass',
            template: __webpack_require__(/*! ./reset-pass.component.html */ "./src/app/user/reset-pass/reset-pass.component.html"),
            styles: [__webpack_require__(/*! ./reset-pass.component.css */ "./src/app/user/reset-pass/reset-pass.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]])
    ], ResetPassComponent);
    return ResetPassComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgot-pass/forgot-pass.component */ "./src/app/user/forgot-pass/forgot-pass.component.ts");
/* harmony import */ var _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./verify-email/verify-email.component */ "./src/app/user/verify-email/verify-email.component.ts");
/* harmony import */ var _reset_pass_reset_pass_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reset-pass/reset-pass.component */ "./src/app/user/reset-pass/reset-pass.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _sort_countries_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sort-countries.pipe */ "./src/app/sort-countries.pipe.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");















var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPassComponent"],
                _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_8__["VerifyEmailComponent"],
                _reset_pass_reset_pass_component__WEBPACK_IMPORTED_MODULE_9__["ResetPassComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _sort_countries_pipe__WEBPACK_IMPORTED_MODULE_13__["SortCountriesPipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"].forRoot({
                    timeOut: 5000,
                    positionClass: 'toast-top-right',
                    preventDuplicates: true,
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
                    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
                    { path: 'forgot-pass', component: _forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPassComponent"] },
                    { path: 'VerifyEmail/:userId', component: _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_8__["VerifyEmailComponent"] },
                    { path: 'Reset-Pass/:validationToken', component: _reset_pass_reset_pass_component__WEBPACK_IMPORTED_MODULE_9__["ResetPassComponent"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            providers: [_sort_countries_pipe__WEBPACK_IMPORTED_MODULE_13__["SortCountriesPipe"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/verify-email/verify-email.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/verify-email/verify-email.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody, html {\r\n    height: 100%;\r\n  }\r\n  \r\n.container-fluid{\r\n\r\n    background-image:url('back.jpg');\r\n    height: 100vh; \r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    \r\n\r\n}\r\n  \r\n.heading\r\n{\r\n    padding-top:18px;  \r\n    color:white;\r\n}\r\n  \r\n.icon\r\n{\r\n    margin-right:5px;\r\n\r\n}\r\n  \r\n.form-signin-heading{\r\n\r\n    color:white;\r\n    font-size:30px;\r\n\r\n}\r\n  \r\nbutton{\r\n    margin-top:8px;\r\n    border-radius:15px;\r\n}\r\n  \r\n.form-div{\r\n    box-shadow: 0 4px 16px 4px #2b2b2b;\r\n}\r\n  \r\n.has-error{\r\n\r\n    border:2px solid #8e1600;\r\n}\r\n  \r\n.block{\r\n    color:#8e1600;\r\n    \r\n    position:relative;\r\n\r\n}\r\n  \r\n.form-div{\r\n    box-shadow: 0 4px 16px 4px #2b2b2b;\r\n    background:transparent;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci92ZXJpZnktZW1haWwvdmVyaWZ5LWVtYWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtHQUNkOztBQUVIOztJQUVJLGlDQUFzRDtJQUN0RCxjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qix1QkFBdUI7OztDQUcxQjs7QUFFRDs7SUFFSSxpQkFBaUI7SUFDakIsWUFBWTtDQUNmOztBQUVEOztJQUVJLGlCQUFpQjs7Q0FFcEI7O0FBRUQ7O0lBRUksWUFBWTtJQUNaLGVBQWU7O0NBRWxCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLG1DQUFtQztDQUN0Qzs7QUFFRDs7SUFFSSx5QkFBeUI7Q0FDNUI7O0FBQ0Q7SUFDSSxjQUFjOztJQUVkLGtCQUFrQjs7Q0FFckI7O0FBRUQ7SUFDSSxtQ0FBbUM7SUFDbkMsdUJBQXVCO0NBQzFCIiwiZmlsZSI6InNyYy9hcHAvdXNlci92ZXJpZnktZW1haWwvdmVyaWZ5LWVtYWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYm9keSwgaHRtbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4uY29udGFpbmVyLWZsdWlke1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFjay5qcGcpO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDsgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIFxyXG5cclxufVxyXG5cclxuLmhlYWRpbmdcclxue1xyXG4gICAgcGFkZGluZy10b3A6MThweDsgIFxyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5pY29uXHJcbntcclxuICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcblxyXG59XHJcblxyXG4uZm9ybS1zaWduaW4taGVhZGluZ3tcclxuXHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTozMHB4O1xyXG5cclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDo4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbn1cclxuXHJcbi5mb3JtLWRpdntcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggNHB4ICMyYjJiMmI7XHJcbn1cclxuXHJcbi5oYXMtZXJyb3J7XHJcblxyXG4gICAgYm9yZGVyOjJweCBzb2xpZCAjOGUxNjAwO1xyXG59XHJcbi5ibG9ja3tcclxuICAgIGNvbG9yOiM4ZTE2MDA7XHJcbiAgICBcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cclxufVxyXG5cclxuLmZvcm0tZGl2e1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCA0cHggIzJiMmIyYjtcclxuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/verify-email/verify-email.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/verify-email/verify-email.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n\n        <div class=\"row\">\n            <div class=\"col-12  text-left \">\n               <h4 class=\"heading animated fadeInLeft \"><i class=\"fab fa-audible icon\"></i><span>Trego</span></h4>\n            </div>\n        </div>\n        <br><br>\n    \n        <div class=\"row p-0 m-0\">\n    \n            <div class=\"col-sm\"></div>\n          \n            <div class=\"col-sm p-5 form-div animated bounceInDown \" >\n    \n    \n         \n          <div class=\"text-center heading\">\n                <div>\n                    <h2>Welcome to Trego!</h2>\n                </div>\n                <br>\n                <div class=\"text-center\"><p>Verification Status</p></div>\n                \n                <div>\n                    <h5 class=\"text-warning\">{{message}}</h5>\n                </div>\n            </div>\n          \n      \n      \n            <br>\n            <br>\n        \n            <button class=\"btn btn-lg btn-dark btn-block\" type=\"button\"  [routerLink]=\"['/login']\"  >Login</button>\n   \n        \n          </div>\n          \n            <div class=\"col-sm\"></div>\n    </div>\n    \n    </div> "

/***/ }),

/***/ "./src/app/user/verify-email/verify-email.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/verify-email/verify-email.component.ts ***!
  \*************************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");





var VerifyEmailComponent = /** @class */ (function () {
    function VerifyEmailComponent(appService, _route, router, toastr) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
    }
    VerifyEmailComponent.prototype.ngOnInit = function () {
        this.userId = this._route.snapshot.paramMap.get('userId');
        this.verifyEmailFunction();
    };
    VerifyEmailComponent.prototype.verifyEmailFunction = function () {
        var _this = this;
        this.appService.verifyEmail(this.userId).subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
                _this.toastr.success("Please login", "Email Verified!");
                _this.message = "Your account has been activated. You can login now";
            }
            else {
                _this.toastr.error(apiResponse.message, "Error!");
            }
        }, function (error) {
            if (error.status == 404) {
                _this.toastr.warning("Email Verification failed", "User Not Found!");
                _this.message = "Email Verification failed";
            }
            else {
                _this.toastr.error("Some Error Occurred", "Error!");
                _this.router.navigate(['/serverError']);
            }
        }); //end calling verifyEmail
    }; //end verifyEmailFunction
    VerifyEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify-email',
            template: __webpack_require__(/*! ./verify-email.component.html */ "./src/app/user/verify-email/verify-email.component.html"),
            styles: [__webpack_require__(/*! ./verify-email.component.css */ "./src/app/user/verify-email/verify-email.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ankit\Desktop\todo-frontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map