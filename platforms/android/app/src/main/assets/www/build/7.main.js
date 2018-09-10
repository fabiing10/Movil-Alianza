webpackJsonp([7],{

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(609);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPageModule", function() { return ServicesPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServicesPageModule = (function () {
    function ServicesPageModule() {
    }
    return ServicesPageModule;
}());
ServicesPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__services__["a" /* ServicesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__services__["a" /* ServicesPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__services__["a" /* ServicesPage */]
        ]
    })
], ServicesPageModule);

//# sourceMappingURL=services.module.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ServicesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ServicesPage = (function () {
    function ServicesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bgImage = '../../assets/images/service_01.jpg';
        this.bgImage2 = '../../assets/images/service_2.jpg';
        this.bgImage3 = '../../assets/images/service_03.jpg';
        this.bgJuridica = '../../assets/images/abogados.jpg';
    }
    ServicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicesPage');
    };
    return ServicesPage;
}());
ServicesPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-services',template:/*ion-inline-start:"/Users/fabianzapata/Documents/Applications/Movil/Movil-Alianza/src/pages/services/services.html"*/'<!--\n  Generated template for the ServicesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Servicios</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-slides pager>\n\n    <ion-slide [style.backgroundImage]="\'url(\' + bgImage + \')\'">\n      <img src="../../assets/images/arrendamientos-1.png"/>\n      <h2>Arrendamientos</h2>\n      <p>En ALIANZA PARA EL PROGRESO S.A.S. los arrendamientos inmobiliarios son nuestra prioridad. contamos con una poderosa y profesional red de Agentes Inmobiliarios, expertos en captación y la correspondiente colocación, nuestra asistencia asesoría profesional es personalizada</p>\n      <button ion-button block  color="light">Contactar</button>\n    </ion-slide>\n\n    <ion-slide [style.backgroundImage]="\'url(\' + bgImage2 + \')\'">\n      <img src="../../assets/images/arrendamientos-1.png"/>\n      <h2>Ventas</h2>\n      <p>En ALIANZA PARA EL PROGRESO S.A.S. contamos con un departamento de ventas, con la capacidad de elaborar expeditos análisis de uso del suelo, precios y mejores posibilidades de enajenación o compra.</p>\n      <button ion-button block  color="light">Contactar</button>\n    </ion-slide>\n\n    <ion-slide [style.backgroundImage]="\'url(\' + bgImage3 + \')\'">\n      <img src="../../assets/images/arrendamientos-1.png"/>\n      <h2>Mantenimiento</h2>\n      <p>En ALIANZA PARA EL PROGRESO S.A.S. contamos con un departamento exclusivamente dedicado a los mantenimientos locativos, legalizaciones de obra, englobes, licencias de construcción, etc., solicitados por nuestros clientes.</p>\n      <button ion-button block  color="light">Contactar</button>\n    </ion-slide>\n\n    <ion-slide [style.backgroundImage]="\'url(\' + bgImage2 + \')\'">\n      <img src="../../assets/images/arrendamientos-1.png"/>\n      <h2>Avalúos</h2>\n      <p>Somos fundadores y miembros oficiales de la Lonja de Propiedad Raíz Avaluadores y Constructores de Colombia. Disponemos con más de 40 Avaluadores con Registro Abierto Avaluador (RAA) habilitado, ajustados a las exigencias normativas del gobierno Nacional conforme la Ley 1673 de 2013.</p>\n      <button ion-button block  color="light">Contactar</button>\n    </ion-slide>\n\n    <ion-slide [style.backgroundImage]="\'url(\' + bgJuridica + \')\'">\n      <img src="../../assets/images/arrendamientos-1.png"/>\n      <h2>Asesoria Juridica</h2>\n      <p>En ALIANZA PARA EL PROGRESO S.A.S contamos con abogados especializados en el Derecho Inmobiliaria a nivel nacional; ofrecemos asesorías inmobiliarias en temas de negociación, Estructuración de transacciones inmobiliarias, Fiducias inmobiliarias y más..</p>\n      <button ion-button block  color="light">Contactar</button>\n    </ion-slide>\n\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/fabianzapata/Documents/Applications/Movil/Movil-Alianza/src/pages/services/services.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ServicesPage);

//# sourceMappingURL=services.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map