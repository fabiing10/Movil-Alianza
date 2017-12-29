webpackJsonp([1],{

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__network__ = __webpack_require__(600);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkPageModule", function() { return NetworkPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NetworkPageModule = (function () {
    function NetworkPageModule() {
    }
    return NetworkPageModule;
}());
NetworkPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__network__["a" /* NetworkPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__network__["a" /* NetworkPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__network__["a" /* NetworkPage */]
        ]
    })
], NetworkPageModule);

//# sourceMappingURL=network.module.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtectedPage; });
var ProtectedPage = (function () {
    function ProtectedPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    ProtectedPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.storage.get('id_token').then(function (id_token) {
            if (id_token === null) {
                _this.navCtrl.setRoot('LoginPage');
                return false;
            }
        });
        return true;
    };
    return ProtectedPage;
}());

//# sourceMappingURL=protected-page.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__protected_page_protected_page__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_general_service__ = __webpack_require__(274);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkPage; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NetworkPage = (function (_super) {
    __extends(NetworkPage, _super);
    function NetworkPage(navCtrl, navParams, menuCtrl, storage, generalService) {
        var _this = _super.call(this, navCtrl, navParams, storage) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.menuCtrl = menuCtrl;
        _this.storage = storage;
        _this.generalService = generalService;
        _this.storage.get('user').then(function (user) {
            _this.user = user;
        });
        _this.generalService.getAllUsersNetwork().then(function (users) { return _this.users = users; });
        return _this;
    }
    NetworkPage.prototype.profileUser = function (user) {
        this.navCtrl.push('ProfilePage', { user: user });
    };
    NetworkPage.prototype.ionViewDidLoad = function () {
        console.log("Cargando el ionViewDidLoad");
        this.menuCtrl.enable(true);
    };
    return NetworkPage;
}(__WEBPACK_IMPORTED_MODULE_2__protected_page_protected_page__["a" /* ProtectedPage */]));
NetworkPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-network',template:/*ion-inline-start:"/Users/fabianzapata/Documents/Applications/Moviles/Ionic/Movil-Alianza/src/pages/network/network.html"*/'<!--\n  Generated template for the NetworkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Usuarios Red</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="card-background-page"  >\n\n  <ion-card *ngIf="user">\n    <img src="../../assets/images/bg_profile.jpg"/>\n    <div class="card-title">\n      <img src="../../assets/images/user.png" *ngIf= "user.imageProfile == \'none\'" style="width: 20%;margin: 0 auto;">\n      <img src="{{user.imageProfile}}" *ngIf= "user.imageProfile != \'none\'">\n    </div>\n    <div class="card-subtitle">\n      {{ user.name }}\n    </div>\n  </ion-card>\n\n\n  <ion-list>\n  <ion-item *ngFor="let user of users" (click)="profileUser(user)">\n    <ion-avatar item-start>\n      <img src="../../assets/images/user.png" *ngIf= "user.imageProfile == \'none\'">\n      <img src="{{user.imageProfile}}" *ngIf= "user.imageProfile != \'none\'">\n    </ion-avatar>\n    <h2>{{user.name}} {{user.lastName}}</h2>\n    <p>{{user.email}}</p>\n  </ion-item>\n</ion-list>\n\n\n  <!--<ion-card>\n\n    <ion-row>\n      <ion-col col-25>{{ \'label.name\' | translate }}:</ion-col>\n      <ion-col col-75>{{ user.name }}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-25>{{ \'label.email\' | translate }}:</ion-col>\n      <ion-col col-75>{{ user.email }}</ion-col>\n    </ion-row>\n\n  </ion-card>-->\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/fabianzapata/Documents/Applications/Moviles/Ionic/Movil-Alianza/src/pages/network/network.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_general_service__["a" /* GeneralServiceProvider */]])
], NetworkPage);

//# sourceMappingURL=network.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map