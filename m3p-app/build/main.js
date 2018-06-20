webpackJsonp([4],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiveisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
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
 * Generated class for the NiveisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NiveisPage = /** @class */ (function () {
    function NiveisPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NiveisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NiveisPage');
    };
    NiveisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-niveis',template:/*ion-inline-start:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\niveis\niveis.html"*/'<!--\n  Generated template for the NiveisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Níveis</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\niveis\niveis.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NiveisPage);
    return NiveisPage;
}());

//# sourceMappingURL=niveis.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_setor_cadastro_setor__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_setor__ = __webpack_require__(81);
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
 * Generated class for the SetorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SetorPage = /** @class */ (function () {
    function SetorPage(navCtrl, navParams, alertCtrl, setorService, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.setorService = setorService;
        this.viewCtrl = viewCtrl;
    }
    SetorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SetorPage');
    };
    SetorPage.prototype.ngOnInit = function () {
        this.setor = this.navParams.get('setor');
    };
    SetorPage.prototype.editarSetor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastro_setor_cadastro_setor__["a" /* CadastroSetorPage */], { setor: this.setor });
    };
    SetorPage.prototype.excluirSetor = function () {
        var _this = this;
        //Alert de confirmação
        var confirm = this.alertCtrl.create({
            title: 'Excluir Setor',
            message: 'Ao excluir um setor todos seus dados e histórico de avaliações serão excluídos. Deseja Continuar?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () { }
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        _this.setorService.delete(_this.setor);
                        _this.fecharPágina();
                    }
                }
            ]
        });
        confirm.present();
    };
    SetorPage.prototype.fecharPágina = function () {
        this.viewCtrl.dismiss();
    };
    SetorPage.prototype.avaliarSetor = function () {
    };
    SetorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setor',template:/*ion-inline-start:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\setor\setor.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{setor.sigla}}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="editarSetor()">\n        <ion-icon name="create"></ion-icon>\n      </button>\n\n      <button ion-button icon-only (click)="excluirSetor()">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n\n\n    <ion-list>\n\n      <ion-item>\n        <p>Nome Completo</p>\n        <h2>{{setor.nome}}</h2>\n      </ion-item>\n\n     <ion-item *ngIf="setor.proReitoria">\n        <p>Pró-Reitoria de Vínculo</p>\n        <h2>{{setor.proReitoria}}</h2>\n      </ion-item>\n\n      <ion-item>\n        <p>Nível Atual</p>\n        <h2>{{setor.nivel? "Nível "+setor.nivel : "NA"}}</h2>\n      </ion-item>\n\n      <ion-item>\n        <p>Líder de Processos</p>\n        <h2>{{setor.lider? setor.lider : "Não especificado"}}</h2>\n      </ion-item>\n\n      <ion-item>\n        <p>Email do Líder</p>\n        <h2>{{setor.emailLider? setor.emailLider : "Não especificado"}}</h2>\n      </ion-item>\n\n      <ion-item>\n        <p>Última Avaliação</p>\n        <h2>{{setor.ultimaAvaliacao? setor.ultimaAvaliacao : "NA"}}</h2>\n      </ion-item>\n\n  </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Histórico de Avaliações\n    </ion-card-header>\n\n    <ion-list>\n\n      <ion-item>\n        <h3>Nível 3</h3>\n        <p>29/07/2018</p>\n      </ion-item>\n\n      <ion-item>\n        <h3>Nível 2</h3>\n        <p>29/07/2017</p>\n      </ion-item>\n\n      <ion-item>\n        <h3>Nível 2</h3>\n        <p>29/05/2017</p>\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button clear small full>Ver Mais</button>\n\n  </ion-card>\n\n\n  <ion-fab bottom right>\n    <button ion-fab  hideWhen="browser" class="cor-danger" (click)="avaliarSetor()">\n      <ion-icon name="options"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\setor\setor.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_setor__["a" /* SetorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_setor__["a" /* SetorService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]) === "function" && _e || Object])
    ], SetorPage);
    return SetorPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=setor.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setor__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastro_setor_cadastro_setor__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__setor_setor__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_compat_add_operator_map__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_compat_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_compat_add_operator_map__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the SetoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SetoresPage = /** @class */ (function () {
    function SetoresPage(navCtrl, navParams, setorService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.setorService = setorService;
        this.setores$ = this.setorService
            .getAll() //DB LIST
            .snapshotChanges() // KEY AND VALUE
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
        this.atualizaListaDeSetores();
    }
    SetoresPage.prototype.ionViewDidLoad = function () {
    };
    SetoresPage.prototype.addSetor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cadastro_setor_cadastro_setor__["a" /* CadastroSetorPage */]);
    };
    SetoresPage.prototype.irParaPaginaDoSetor = function (setor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__setor_setor__["a" /* SetorPage */], { setor: setor });
    };
    SetoresPage.prototype.filterItems = function (ev) {
        this.setoresFiltrados$ = this.setores$.map(function (ARRAY) {
            return ARRAY.filter(function (setor) {
                return ((setor.sigla.toLowerCase().includes(ev.target.value.toLowerCase())) || (setor.nome.toLowerCase().includes(ev.target.value.toLowerCase())));
            });
        });
        console.log(this.setores$);
    };
    SetoresPage.prototype.onCancel = function ($event) {
        this.atualizaListaDeSetores();
    };
    SetoresPage.prototype.atualizaListaDeSetores = function () {
        this.setoresFiltrados$ = this.setores$;
    };
    SetoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setores',template:/*ion-inline-start:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\setores\setores.html"*/'<!--\n  Generated template for the SetoresPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Setores</ion-title>\n\n    <!--Botão de adicionar no iOS-->\n    <ion-buttons hideWhen="android, core" end>\n      <button ion-button icon-only (click)="addSetor()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <!--Barra de Pesquisa-->\n  <ion-toolbar>\n    <ion-searchbar\n      placeholder="Procurar"\n      [(ngModel)]="myInput"\n      [showCancelButton]="shouldShowCancel"\n      (ionInput)="filterItems($event)"\n      (ionCancel)="onCancel($event)">\n    </ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list class="browser-compat">\n    <ion-card\n      *ngFor="let setor of setoresFiltrados$ | async">\n\n      <ion-item (click)="irParaPaginaDoSetor(setor)">\n        <ion-avatar *ngIf="setor.nivel" icone-estrela item-end>\n          <img src="../assets/img/selo-nivel-5.png">\n        </ion-avatar>\n        <h2>{{setor.sigla}}</h2>\n        <p>{{setor.nome}}</p>\n      </ion-item>\n\n      <ion-card-content>\n        <ion-note>Última Avaliação: {{setor.ultimaAvaliacao}}</ion-note>\n      </ion-card-content>\n\n    </ion-card>\n  </ion-list>\n\n    <button padding showWhen="core" class="centralized" ion-button (click)="addSetor()">\n      Adicionar Setor\n    </button>\n\n  <ion-fab bottom right>\n    <button ion-fab showWhen="android" (click)="addSetor()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\setores\setores.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_setor__["a" /* SetorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_setor__["a" /* SetorService */]) === "function" && _c || Object])
    ], SetoresPage);
    return SetoresPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=setores.js.map

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro-setor/cadastro-setor.module": [
		473,
		3
	],
	"../pages/niveis/niveis.module": [
		474,
		2
	],
	"../pages/setor/setor.module": [
		475,
		1
	],
	"../pages/setores/setores.module": [
		476,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 227;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setores_setores__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__niveis_niveis__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.setoresPage = __WEBPACK_IMPORTED_MODULE_1__setores_setores__["a" /* SetoresPage */];
        this.niveisPage = __WEBPACK_IMPORTED_MODULE_2__niveis_niveis__["a" /* NiveisPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="setoresPage" tabTitle="Setores" tabIcon="home"></ion-tab>\n  <ion-tab [root]="niveisPage" tabTitle="Níveis" tabIcon="star"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(404);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_setores_setores__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_niveis_niveis__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__firebase_credentials__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_setor__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cadastro_setor_cadastro_setor__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_setor_setor__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Ionic Imports





//Imports Database



// Own Services



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_setores_setores__["a" /* SetoresPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_niveis_niveis__["a" /* NiveisPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cadastro_setor_cadastro_setor__["a" /* CadastroSetorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_setor_setor__["a" /* SetorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro-setor/cadastro-setor.module#CadastroSetorPageModule', name: 'CadastroSetorPage', segment: 'cadastro-setor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/niveis/niveis.module#NiveisPageModule', name: 'NiveisPage', segment: 'niveis', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setor/setor.module#SetorPageModule', name: 'SetorPage', segment: 'setor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setores/setores.module#SetoresPageModule', name: 'SetoresPage', segment: 'setores', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_setores_setores__["a" /* SetoresPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_niveis_niveis__["a" /* NiveisPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cadastro_setor_cadastro_setor__["a" /* CadastroSetorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_setor_setor__["a" /* SetorPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__services_setor__["a" /* SetorService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyCyARgZSkCnufQO11Pg-MSIaqZ0wz30ek0",
    authDomain: "m3p-app.firebaseapp.com",
    databaseURL: "https://m3p-app.firebaseio.com",
    projectId: "m3p-app",
    storageBucket: "",
    messagingSenderId: "414887828407"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SetorService = /** @class */ (function () {
    function SetorService(db, toastCtrl) {
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.setoresRef = this.db.list('setores');
    }
    SetorService.prototype.getAll = function () {
        return this.setoresRef;
    };
    SetorService.prototype.save = function (setor) {
        if (setor.key == null) {
            console.log(setor.key);
            setor.key = this.setoresRef.push(null).key;
            this.setoresRef.update('/' + setor.key, setor);
            this.mostrarToast('Setor ' + setor.sigla + ' adicionado');
            console.log("FIREBASE: Setor Adicionado:");
            console.log(setor);
        }
        else {
            console.log(setor.key);
            this.setoresRef.update('/' + setor.key, setor);
            this.mostrarToast('Setor ' + setor.sigla + ' editado');
            console.log("FIREBASE: Setor Editado:");
            console.log(setor);
        }
    };
    SetorService.prototype.delete = function (setor) {
        var updates = {};
        updates['/setores/' + setor.key] = null;
        this.db.database.ref().update(updates);
        this.mostrarToast('Setor ' + setor.sigla + ' excluído');
        console.log("FIREBASE: Setor Excluído:");
        console.log(setor);
    };
    SetorService.prototype.mostrarToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    SetorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
    ], SetorService);
    return SetorService;
}());

//# sourceMappingURL=setor.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroSetorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setor__ = __webpack_require__(81);
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
 * Generated class for the CadastroSetorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroSetorPage = /** @class */ (function () {
    function CadastroSetorPage(navCtrl, navParams, setoreService, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.setoreService = setoreService;
        this.viewCtrl = viewCtrl;
    }
    CadastroSetorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroSetorPage');
    };
    CadastroSetorPage.prototype.ngOnInit = function () {
        this.setor = this.navParams.get('setor') ? this.navParams.get('setor') : {};
        this.nomeBotaoSalvar = this.navParams.get('setor') ? 'Salvar Setor' : 'Adicionar Setor';
        this.nomePagina = this.navParams.get('setor') ? 'Editar Setor' : 'Cadastrar Setor';
    };
    CadastroSetorPage.prototype.registrarSetor = function (setor) {
        setor.key = this.setor.key;
        this.setoreService.save(setor);
        this.fecharPágina();
    };
    CadastroSetorPage.prototype.fecharPágina = function () {
        this.viewCtrl.dismiss();
    };
    CadastroSetorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-setor',template:/*ion-inline-start:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\cadastro-setor\cadastro-setor.html"*/'<!--\n  Generated template for the CadastroSetorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{nomePagina}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card padding class="browser-compat">\n    <ion-card-content>\n\n      <form (ngSubmit)="registrarSetor(f.value)" #f="ngForm">\n        <!--<ion-row>-->\n          <!--<ion-col>-->\n            <ion-list>\n\n              <ion-item>\n                <ion-label color="dark">Sigla</ion-label>\n                <ion-input type="text" name="sigla" [(ngModel)]="setor.sigla" required ></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label color="dark">Nome Completo</ion-label>\n                <ion-input type="text" name="nome" [(ngModel)]="setor.nome" required></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label color="dark">Pró-Reitoria</ion-label>\n                <ion-input type="text" name="proReitoria" [(ngModel)]="setor.proReitoria"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label color="dark">Líder de Processo</ion-label>\n                <ion-input type="text" name="lider" [(ngModel)]="setor.lider"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label color="dark">Email do Líder</ion-label>\n                <ion-input type="text" name="emailLider" [(ngModel)]="setor.emailLider"></ion-input>\n              </ion-item>\n\n            </ion-list>\n\n            <button padding ion-button full clear type="submit" [disabled]="!f.valid">{{nomeBotaoSalvar}}</button>\n\n      </form>\n\n    </ion-card-content>\n  </ion-card>\n\n  </ion-content>\n'/*ion-inline-end:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\cadastro-setor\cadastro-setor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_setor__["a" /* SetorService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], CadastroSetorPage);
    return CadastroSetorPage;
}());

//# sourceMappingURL=cadastro-setor.js.map

/***/ })

},[283]);
//# sourceMappingURL=main.js.map