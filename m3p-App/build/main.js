webpackJsonp([12],{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvaliacaoAnteriorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_avaliacao__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__avaliacao_criterios_anterior_avaliacao_criterios_anterior__ = __webpack_require__(154);
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
 * Generated class for the AvaliacaoAnteriorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AvaliacaoAnteriorPage = /** @class */ (function () {
    function AvaliacaoAnteriorPage(navCtrl, navParams, avaliacaoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.avaliacaoService = avaliacaoService;
        this.avaliacao = navParams.get('avaliacao');
        this.setor = navParams.get('setor');
    }
    AvaliacaoAnteriorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvaliacaoAnteriorPage');
    };
    AvaliacaoAnteriorPage.prototype.abrirCriterios = function (nivel) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__avaliacao_criterios_anterior_avaliacao_criterios_anterior__["a" /* AvaliacaoCriteriosAnteriorPage */], { nivel: nivel });
    };
    AvaliacaoAnteriorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avaliacao-anterior',template:/*ion-inline-start:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\avaliacao-anterior\avaliacao-anterior.html"*/'<!--\n  Generated template for the AvaliacaoAnteriorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{avaliacao.dataFim}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header><h1 text-center>{{setor?.sigla}}</h1></ion-card-header>\n    <ion-note><p text-center>Nível Pretendido: {{avaliacao?.nivelPretendido}}</p></ion-note>\n\n    <ion-list>\n\n      <button *ngFor="let nivel of avaliacao.corpo" ion-item  (click)="abrirCriterios(nivel)">\n        {{nivel.nome}}\n\n        <ion-icon *ngIf="!((avaliacaoService.getCorNivel(nivel) === \'avaliacaoAmarelo\') && !nivel.avaliacaoManual)"    item-end [color]="avaliacaoService.getCorNivel(nivel)" name="star"></ion-icon>\n        <ion-icon *ngIf="(avaliacaoService.getCorNivel(nivel) === \'avaliacaoAmarelo\') && !nivel.avaliacaoManual"       item-end color="avaliacaoAmarelo" name="md-help"></ion-icon>\n\n      </button>\n\n    </ion-list>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\avaliacao-anterior\avaliacao-anterior.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_avaliacao__["a" /* AvaliacaoService */]])
    ], AvaliacaoAnteriorPage);
    return AvaliacaoAnteriorPage;
}());

//# sourceMappingURL=avaliacao-anterior.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvaliacaoCriteriosAnteriorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_avaliacao__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__avaliacao_itens_anterior_avaliacao_itens_anterior__ = __webpack_require__(155);
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
 * Generated class for the AvaliacaoCriteriosAnteriorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AvaliacaoCriteriosAnteriorPage = /** @class */ (function () {
    function AvaliacaoCriteriosAnteriorPage(navCtrl, navParams, avaliacaoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.avaliacaoService = avaliacaoService;
        this.nivel = navParams.get('nivel');
        console.log(this.nivel);
    }
    AvaliacaoCriteriosAnteriorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvaliacaoCriteriosAnteriorPage');
    };
    AvaliacaoCriteriosAnteriorPage.prototype.abrirItensDeAvaliacao = function (criterio) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__avaliacao_itens_anterior_avaliacao_itens_anterior__["a" /* AvaliacaoItensAnteriorPage */], { criterio: criterio });
    };
    AvaliacaoCriteriosAnteriorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avaliacao-criterios-anterior',template:/*ion-inline-start:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\avaliacao-criterios-anterior\avaliacao-criterios-anterior.html"*/'<!--\n  Generated template for the AvaliacaoCriteriosAnteriorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{nivel?.nome}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <!--Avaliação Manual-->\n  <ion-card *ngIf="avaliacaoService.getCorNivelAutomatico(nivel) === \'avaliacaoAmarelo\'">\n\n    <ion-card-header margin-left="45" margin-right="45" text-center="">\n      <h2>Avaliação Manual de Nível</h2>\n      <!--<ion-note text-wrap>É obrigatória a definição manual da avaliação deste nível, devido aos critérios pendentes</ion-note>-->\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <div text-center>\n        <ion-col><ion-icon class="icon-avaliacao-anterior" name="close-circle" [color]="nivel.avaliacaoManual == \'vermelho\'? \'avaliacaoVermelho\': \'avaliacaoCinza\'"></ion-icon></ion-col>\n        <ion-col><ion-icon class="icon-avaliacao-anterior" name="help-circle" [color]="nivel.avaliacaoManual == \'amarelo\'? \'avaliacaoAmarelo\': \'avaliacaoCinza\'"></ion-icon></ion-col>\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card *ngFor="let criterio of nivel.criterios">\n\n    <!--<ion-card-header>-->\n    <ion-item margin-left="45" padding-right="30" (click)="abrirItensDeAvaliacao(criterio)">\n      <ion-card-title>{{criterio.nome}}</ion-card-title>\n      <ion-icon *ngIf="!((avaliacaoService.getCorCriterio(criterio) === \'avaliacaoAmarelo\') && !criterio.avaliacaoManual)"    item-end [color]="avaliacaoService.getCorCriterio(criterio)" name="star"></ion-icon>\n      <ion-icon *ngIf="(avaliacaoService.getCorCriterio(criterio) === \'avaliacaoAmarelo\') && !criterio.avaliacaoManual"       item-end color="avaliacaoAmarelo" name="md-help"></ion-icon>\n    </ion-item>\n    <!--</ion-card-header>-->\n\n    <ion-card-content (click)="abrirItensDeAvaliacao(criterio)">\n      <p margin-left="25" margin-right="20">{{criterio.descricao}}</p>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\avaliacao-criterios-anterior\avaliacao-criterios-anterior.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_avaliacao__["a" /* AvaliacaoService */]])
    ], AvaliacaoCriteriosAnteriorPage);
    return AvaliacaoCriteriosAnteriorPage;
}());

//# sourceMappingURL=avaliacao-criterios-anterior.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvaliacaoItensAnteriorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_avaliacao__ = __webpack_require__(37);
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
 * Generated class for the AvaliacaoItensAnteriorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AvaliacaoItensAnteriorPage = /** @class */ (function () {
    function AvaliacaoItensAnteriorPage(navCtrl, navParams, avaliacaoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.avaliacaoService = avaliacaoService;
        this.criterio = navParams.get('criterio');
    }
    AvaliacaoItensAnteriorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvaliacaoItensAnteriorPage');
    };
    AvaliacaoItensAnteriorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avaliacao-itens-anterior',template:/*ion-inline-start:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\avaliacao-itens-anterior\avaliacao-itens-anterior.html"*/'<!--\n  Generated template for the AvaliacaoItensAnteriorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>avaliacao-itens-anterior</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <!--Avaliação Manual-->\n  <ion-card *ngIf="avaliacaoService.getCorCriterioAutomatico(criterio) === \'avaliacaoAmarelo\'">\n\n    <ion-card-header margin-left="45" margin-right="45" text-center="">\n      <h2>Avaliação Manual de Critério</h2>\n      <!--<ion-note text-wrap>É obrigatória a definição manual da avaliação deste nível, devido aos critérios pendentes</ion-note>-->\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <div text-center>\n        <ion-col><ion-icon class="icon-avaliacao-anterior" name="close-circle" [color]="criterio.avaliacaoManual == \'vermelho\'? \'avaliacaoVermelho\': \'avaliacaoCinza\'"></ion-icon></ion-col>\n        <ion-col><ion-icon class="icon-avaliacao-anterior" name="help-circle" [color]="criterio.avaliacaoManual == \'amarelo\'? \'avaliacaoAmarelo\': \'avaliacaoCinza\'"></ion-icon></ion-col>\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor="let item of criterio.itensDeAvaliacao; let i = index">\n\n    <ion-card-header>\n\n      <ion-row float-right>\n        <ion-col><ion-icon [color]="item.avaliacao == \'vermelho\'? \'avaliacaoVermelho\': \'avaliacaoCinza\'" name="close-circle" class="icon-avaliacao-anterior"></ion-icon></ion-col>\n        <ion-col><ion-icon [color]="item.avaliacao == \'amarelo\'? \'avaliacaoAmarelo\': \'avaliacaoCinza\'" name="help-circle" class="icon-avaliacao-anterior"></ion-icon></ion-col>\n        <ion-col><ion-icon [color]="item.avaliacao == \'verde\'? \'avaliacaoVerde\': \'avaliacaoCinza\'" name="checkmark-circle" class="icon-avaliacao-anterior"></ion-icon></ion-col>\n      </ion-row>\n\n      <ion-card-title>Item {{i+1}}</ion-card-title>\n\n      <ion-label text-wrap margin-top="10"> <p>{{item.descricao}}</p></ion-label>\n\n      <ion-item no-lines *ngIf="item.observacao">\n        <h6 ion-text color="primary" stacked>Observação</h6>\n        <ion-note text-wrap>{{item.observacao}}</ion-note>\n      </ion-item>\n\n    </ion-card-header>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\avaliacao-itens-anterior\avaliacao-itens-anterior.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_avaliacao__["a" /* AvaliacaoService */]])
    ], AvaliacaoItensAnteriorPage);
    return AvaliacaoItensAnteriorPage;
}());

//# sourceMappingURL=avaliacao-itens-anterior.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvaliacaoCriteriosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_avaliacao__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__avaliacao_itens_avaliacao_itens__ = __webpack_require__(157);
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
 * Generated class for the AvaliacaoCriteriosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AvaliacaoCriteriosPage = /** @class */ (function () {
    function AvaliacaoCriteriosPage(navCtrl, navParams, avaliacaoService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.avaliacaoService = avaliacaoService;
        this.refNivel = this.navParams.get('refNivel');
        this.nivel = this.navParams.get('nivel');
        this.nivel$ = this.avaliacaoService.getNivel(this.refNivel).snapshotChanges().map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        this.nivelSubscription = this.nivel$.subscribe(function (data) {
            _this.nivel = data;
            if (_this.avaliacaoService.getCorNivelAutomatico(_this.nivel) !== 'avaliacaoAmarelo') {
                _this.resetarAvaliacaoManualDeNivel();
            }
        });
        this.criterios$ = this.avaliacaoService
            .getCriterios(this.refNivel + '/' + 'criterios')
            .snapshotChanges() // KEY AND VALUE
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    }
    AvaliacaoCriteriosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvaliacaoCriteriosPage');
    };
    AvaliacaoCriteriosPage.prototype.abrirItensDeAvaliacao = function (criterio) {
        var refCriterio = this.refNivel + '/' + 'criterios' + '/' + criterio.key;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__avaliacao_itens_avaliacao_itens__["a" /* AvaliacaoItensPage */], { criterio: criterio, refCriterio: refCriterio });
    };
    AvaliacaoCriteriosPage.prototype.avaliarNivelManual = function (cor) {
        this.nivel.avaliacaoManual = (cor !== 'cinza') ? cor : null;
        this.avaliacaoService.saveNivelAvaliacao(this.nivel, this.refNivel);
    };
    AvaliacaoCriteriosPage.prototype.resetarAvaliacaoManualDeNivel = function () {
        this.nivel.avaliacaoManual = null;
        this.avaliacaoService.saveAvaliacaoManualCriterio(null, this.refNivel);
    };
    AvaliacaoCriteriosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avaliacao-criterios',template:/*ion-inline-start:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\avaliacao-criterios\avaliacao-criterios.html"*/'<!--\n  Generated template for the AvaliacaoCriteriosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{nivel?.nome}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="browser-compat">\n\n\n    <!--Avaliação Manual-->\n    <ion-card *ngIf="avaliacaoService.getCorNivelAutomatico(nivel) === \'avaliacaoAmarelo\'">\n\n      <ion-card-header margin-left="45" margin-right="45" text-center="">\n        <h2>Avaliação Manual de Nível</h2>\n        <ion-note text-wrap>É obrigatória a definição manual da avaliação deste nível, devido aos critérios pendentes</ion-note>\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <div text-center>\n          <button\n            ion-button round  small color="avaliacaoVermelho" [outline]="nivel.avaliacaoManual !== \'vermelho\'" (click)="avaliarNivelManual(\'vermelho\')">\n            <ion-icon name="close"></ion-icon>\n          </button>\n\n          <button\n            ion-button round  small color="avaliacaoAmarelo" [outline]="nivel.avaliacaoManual !== \'amarelo\'" (click)="avaliarNivelManual(\'amarelo\')">\n            <ion-icon name="help"></ion-icon>\n          </button>\n\n          <button\n            ion-button\n            mini\n            clear\n            icon-only\n            (click)="avaliarNivelManual(null)">\n            <ion-icon\n              color="avaliacaoCinza"\n              name="close-circle">\n            </ion-icon>\n          </button>\n\n\n        </div>\n\n\n      </ion-card-content>\n\n    </ion-card>\n\n  <ion-card *ngFor="let criterio of criterios$ | async">\n\n    <!--<ion-card-header>-->\n    <ion-item margin-left="45" padding-right="30" (click)="abrirItensDeAvaliacao(criterio)">\n      <ion-card-title>{{criterio.nome}}</ion-card-title>\n      <ion-icon *ngIf="!((avaliacaoService.getCorCriterio(criterio) === \'avaliacaoAmarelo\') && !criterio.avaliacaoManual)"    item-end [color]="avaliacaoService.getCorCriterio(criterio)" name="star"></ion-icon>\n      <ion-icon *ngIf="(avaliacaoService.getCorCriterio(criterio) === \'avaliacaoAmarelo\') && !criterio.avaliacaoManual"       item-end color="avaliacaoAmarelo" name="md-help"></ion-icon>\n    </ion-item>\n    <!--</ion-card-header>-->\n\n    <ion-card-content (click)="abrirItensDeAvaliacao(criterio)">\n      <p margin-left="25" margin-right="20">{{criterio.descricao}}</p>\n    </ion-card-content>\n  </ion-card>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\avaliacao-criterios\avaliacao-criterios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_avaliacao__["a" /* AvaliacaoService */]])
    ], AvaliacaoCriteriosPage);
    return AvaliacaoCriteriosPage;
}());

//# sourceMappingURL=avaliacao-criterios.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvaliacaoItensPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_avaliacao__ = __webpack_require__(37);
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
 * Generated class for the AvaliacaoItensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AvaliacaoItensPage = /** @class */ (function () {
    function AvaliacaoItensPage(navCtrl, navParams, avaliacaoService, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.avaliacaoService = avaliacaoService;
        this.toastCtrl = toastCtrl;
        this.refCriterio = this.navParams.get('refCriterio');
        this.criterio = this.navParams.get('criterio');
        this.observacaoVisible = [];
        this.observacaoConforme = [];
        this.criterio$ = this.avaliacaoService.getCriterio(this.refCriterio).snapshotChanges().map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        this.criterioSubscription = this.criterio$.subscribe(function (data) {
            _this.criterio = data;
            if (_this.avaliacaoService.getCorCriterioAutomatico(_this.criterio) !== 'avaliacaoAmarelo') {
                _this.resetarAvaliacaoManualDeCriterio();
            }
        });
        this.itensDeAvaliacao$ = this.avaliacaoService
            .getItensDeAvaliacao(this.refCriterio + '/' + 'itensDeAvaliacao')
            .snapshotChanges() // KEY AND VALUE
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
        this.itensSubscription = this.itensDeAvaliacao$.subscribe(function (data) {
            _this.itensDeAvaliacao = data;
        });
    }
    AvaliacaoItensPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvaliacaoItensPage');
    };
    AvaliacaoItensPage.prototype.avaliarComo = function (item, avaliacao) {
        item.avaliacao = avaliacao;
        this.avaliacaoService.saveAvaliacaoItem(item, this.refCriterio + '/' + 'itensDeAvaliacao');
    };
    AvaliacaoItensPage.prototype.alterarVisualizacaoObservacao = function (item, i) {
        if (this.observacaoVisible[i] !== undefined)
            this.observacaoVisible[i] = !this.observacaoVisible[i];
        else {
            this.observacaoVisible[i] = true;
        }
    };
    AvaliacaoItensPage.prototype.salvarObservacao = function (item, observacao, index) {
        if (observacao === "") {
            observacao = null;
            item.observacaoVisible = false;
        }
        item.observacao = observacao;
        this.avaliacaoService.saveItem(item, this.refCriterio + '/' + 'itensDeAvaliacao');
        /*
        Fecha campos de observação
        caso observação seja vazia
        */
        if (!observacao)
            this.observacaoVisible[index] = false;
        this.mostrarToastObservacaoSalva();
    };
    AvaliacaoItensPage.prototype.disableBotaoOpenCloseObservacao = function (i) {
        this.observacaoConforme[i] = false;
    };
    AvaliacaoItensPage.prototype.enableBotaoOpenCloseObservacao = function (i) {
        this.observacaoConforme[i] = true;
    };
    AvaliacaoItensPage.prototype.mostrarObservacao = function (item, i) {
        if (item == undefined)
            return;
        if (this.observacaoVisible[i] !== undefined)
            return this.observacaoVisible[i];
        else
            return false;
    };
    AvaliacaoItensPage.prototype.mostrarToastObservacaoSalva = function () {
        var toast = this.toastCtrl.create({
            message: 'Observação Salva.',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    AvaliacaoItensPage.prototype.avaliarCriterioManual = function (cor) {
        this.criterio.avaliacaoManual = (cor !== 'cinza') ? cor : null;
        this.avaliacaoService.saveCriterioAvaliacao(this.criterio, this.refCriterio);
    };
    AvaliacaoItensPage.prototype.resetarAvaliacaoManualDeCriterio = function () {
        this.criterio.avaliacaoManual = null;
        this.avaliacaoService.saveAvaliacaoManualCriterio(null, this.refCriterio);
    };
    AvaliacaoItensPage.prototype.getIconeShowObservacao = function (item, index) {
        if (item.observacao)
            return this.observacaoVisible[index] ? 'ios-arrow-dropup-circle' : 'ios-arrow-dropdown-circle';
        else
            return this.observacaoVisible[index] ? 'ios-arrow-dropup' : 'ios-arrow-dropdown';
    };
    AvaliacaoItensPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avaliacao-itens',template:/*ion-inline-start:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\avaliacao-itens\avaliacao-itens.html"*/'<!--\n  Generated template for the AvaliacaoItensPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{criterio?.nome}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="browser-compat">\n\n    <!--Avaliação Manual-->\n    <ion-card *ngIf="avaliacaoService.getCorCriterioAutomatico(criterio) === \'avaliacaoAmarelo\'">\n\n      <ion-card-header margin-left="45" margin-right="45" text-center="">\n        <h2>Avaliação Manual de Critério</h2>\n        <ion-note text-wrap>É obrigatória a definição manual da avaliação deste critério, devido aos itens pendentes</ion-note>\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <div text-center>\n          <button\n            ion-button round  small color="avaliacaoVermelho" [outline]="criterio.avaliacaoManual !== \'vermelho\'" (click)="avaliarCriterioManual(\'vermelho\')">\n            <ion-icon name="close"></ion-icon>\n          </button>\n\n          <button\n            ion-button round  small color="avaliacaoAmarelo" [outline]="criterio.avaliacaoManual !== \'amarelo\'" (click)="avaliarCriterioManual(\'amarelo\')">\n            <ion-icon name="help"></ion-icon>\n          </button>\n\n          <button\n            ion-button\n            mini\n            clear\n            icon-only\n            (click)="avaliarCriterioManual(null)">\n            <ion-icon\n              color="avaliacaoCinza"\n              name="close-circle">\n            </ion-icon>\n          </button>\n\n\n        </div>\n\n\n      </ion-card-content>\n\n    </ion-card>\n\n  <ion-card *ngFor="let item of itensDeAvaliacao; let i = index">\n\n    <ion-card-header>\n\n      <ion-card-title>Item {{i+1}}</ion-card-title>\n\n      <ion-label text-wrap> <p>{{item.descricao}}</p></ion-label>\n\n        <button\n          ion-button\n          mini\n          clear\n          icon-only\n          (click)="alterarVisualizacaoObservacao(item,i)">\n          <ion-icon\n            [name]="getIconeShowObservacao(item,i)">\n          </ion-icon>\n        </button>\n\n      <!--Nesse button:-->\n      <!--[disabled]="observacaoConforme[i] == false"-->\n\n\n      <ion-row float-right>\n          <button ion-button  round  small color="avaliacaoVermelho" [outline]="item.avaliacao !== \'vermelho\'"\n                  (click)="avaliarComo(item,\'vermelho\')"\n          >\n            <ion-icon name="close"></ion-icon>\n          </button>\n          <button ion-button  round small  color="avaliacaoAmarelo"  [outline]="item.avaliacao !== \'amarelo\'"\n                  (click)="avaliarComo(item,\'amarelo\')"\n          >\n            <ion-icon name="help"></ion-icon>\n          </button>\n          <button ion-button  round  small color="avaliacaoVerde"    [outline]="item.avaliacao !== \'verde\'"\n                  (click)="avaliarComo(item,\'verde\')"\n          >\n            <ion-icon name="checkmark"></ion-icon>\n          </button>\n        </ion-row>\n\n      <ion-item no-lines *ngIf="mostrarObservacao(item,i)">\n        <ion-label color="primary" stacked>Observação</ion-label>\n        <ion-textarea class="md-no-underline" name="observacao" [(ngModel)]="item.observacao"></ion-textarea>\n      </ion-item>\n\n      <ion-row float-right *ngIf="mostrarObservacao(item,i)">\n        <button ion-button mini round clear (click)="salvarObservacao(item, item.observacao, i)">Salvar</button>\n      </ion-row>\n\n    </ion-card-header>\n\n  </ion-card>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\avaliacao-itens\avaliacao-itens.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_avaliacao__["a" /* AvaliacaoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], AvaliacaoItensPage);
    return AvaliacaoItensPage;
}());

//# sourceMappingURL=avaliacao-itens.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiveisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
            selector: 'page-niveis',template:/*ion-inline-start:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\niveis\niveis.html"*/'<!--\n  Generated template for the NiveisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Níveis</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="browser-compat">\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\niveis\niveis.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NiveisPage);
    return NiveisPage;
}());

//# sourceMappingURL=niveis.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreAvaliacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_nivel__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_avaliacao__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_setor__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__avaliacao_avaliacao__ = __webpack_require__(88);
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
 * Generated class for the PreAvaliacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreAvaliacaoPage = /** @class */ (function () {
    function PreAvaliacaoPage(navCtrl, navParams, nivelService, avaliacaoService, setorService, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nivelService = nivelService;
        this.avaliacaoService = avaliacaoService;
        this.setorService = setorService;
        this.viewCtrl = viewCtrl;
        this.botaoInicialDisabled = true;
        //Debug
        this.niveis$ = this.nivelService
            .getAll() //DB LIST
            .snapshotChanges() // KEY AND VALUE
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    }
    PreAvaliacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreAvaliacaoPage');
    };
    PreAvaliacaoPage.prototype.ngOnInit = function () {
        this.setor = this.navParams.get('setor');
    };
    PreAvaliacaoPage.prototype.iniciarAvaliacao = function () {
        var avaliacao = {
            setor: this.setor.key,
            dataInicio: this.avaliacaoService.getDataAgora(),
            nivelPretendido: this.nivelPretendido,
            corpo: []
        };
        this.salvaNovaAvaliacao(avaliacao, this.insereNovaAvaliacao);
    };
    PreAvaliacaoPage.prototype.salvaNovaAvaliacao = function (avaliacao, insereNovaAvaliacao) {
        var niveis;
        niveis = [];
        this.niveis$.forEach(function (nivel_array) {
            nivel_array.forEach(function (nivel) {
                niveis.push(nivel);
            });
        });
        avaliacao.corpo = niveis;
        insereNovaAvaliacao(avaliacao, this);
        // this.avaliacaoService.getAvaliacaoMaisRecente(this.setor.key, this.abrirPaginaAvaliacao, this);
        this.fecharPágina();
    };
    PreAvaliacaoPage.prototype.insereNovaAvaliacao = function (avaliacao, self) {
        // self.avaliacaoService.save(avaliacao);
        self.avaliacaoService.saveAndWait(avaliacao, self.abreAvaliacao, self);
        self.setor.sendoAvaliado = true;
        self.setorService.save(self.setor);
    };
    PreAvaliacaoPage.prototype.abreAvaliacao = function (self) {
        self.avaliacaoService.getAvaliacaoMaisRecente(self.setor.key, self.abrirPaginaAvaliacao, self);
    };
    PreAvaliacaoPage.prototype.fecharPágina = function () {
        this.viewCtrl.dismiss();
    };
    PreAvaliacaoPage.prototype.abrirPaginaAvaliacao = function (refAvaliacaoCorrente, self) {
        self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__avaliacao_avaliacao__["a" /* AvaliacaoPage */], {
            setor: self.setor,
            avaliacao: refAvaliacaoCorrente
        });
    };
    PreAvaliacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pre-avaliacao',template:/*ion-inline-start:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\pre-avaliacao\pre-avaliacao.html"*/'<!--\n  Generated template for the PreAvaliacaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Nova Avaliação</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="browser-compat">\n\n  <ion-card>\n\n      <ion-card-header>\n        Nível Pretendido\n      </ion-card-header>\n\n    <ion-card-content>\n      <ion-list radio-group [(ngModel)]="nivelPretendido">\n\n        <ion-item *ngFor="let nivel of niveis$ | async; let i = index">\n\n          <ion-label>{{nivel.nome}}</ion-label>\n          <ion-radio value={{nivel.nome}} (ionSelect)="botaoInicialDisabled = false"></ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n    </ion-card-content>\n\n  </ion-card>\n\n  <button ion-button round class="centralized" [disabled]="botaoInicialDisabled" (click)="iniciarAvaliacao()">Iniciar Valiação</button>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\pre-avaliacao\pre-avaliacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_nivel__["a" /* NivelService */],
            __WEBPACK_IMPORTED_MODULE_4__services_avaliacao__["a" /* AvaliacaoService */],
            __WEBPACK_IMPORTED_MODULE_5__services_setor__["a" /* SetorService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], PreAvaliacaoPage);
    return PreAvaliacaoPage;
}());

//# sourceMappingURL=pre-avaliacao.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_setor_cadastro_setor__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_setor__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__avaliacao_avaliacao__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pre_avaliacao_pre_avaliacao__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_avaliacao__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__avaliacao_anterior_avaliacao_anterior__ = __webpack_require__(153);
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
 * Generated class for the SetorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SetorPage = /** @class */ (function () {
    function SetorPage(navCtrl, navParams, alertCtrl, setorService, avaliacaoService, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.setorService = setorService;
        this.avaliacaoService = avaliacaoService;
        this.viewCtrl = viewCtrl;
        //Startar botão 'ver mais / menos'
        this.mostrarHistoricoCompleto = false;
        this.btnVerMaisMenosContent = "Ver Mais";
        this.setor = this.navParams.get('setor');
        this.historico$ = this.avaliacaoService
            .getRef3UltimasAvaliacoes(this.setor.key) //DB LIST
            .snapshotChanges() // KEY AND VALUE
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    }
    SetorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SetorPage');
    };
    SetorPage.prototype.ngOnInit = function () {
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
        if (!this.setor.sendoAvaliado) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pre_avaliacao_pre_avaliacao__["a" /* PreAvaliacaoPage */], { setor: this.setor });
        }
        else {
            this.avaliacaoService.getAvaliacaoMaisRecente(this.setor.key, this.abrirPaginaAvaliacao, this);
        }
    };
    SetorPage.prototype.abrirPaginaAvaliacao = function (refAvaliacaoCorrente, self) {
        self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__avaliacao_avaliacao__["a" /* AvaliacaoPage */], {
            setor: self.setor,
            avaliacao: refAvaliacaoCorrente
        });
    };
    SetorPage.prototype.verMaisMenosClick = function () {
        if (!this.mostrarHistoricoCompleto) {
            this.btnVerMaisMenosContent = "Ver Menos";
            this.mostrarHistoricoCompleto = true;
        }
        else {
            this.btnVerMaisMenosContent = "Ver Mais";
            this.mostrarHistoricoCompleto = false;
        }
    };
    SetorPage.prototype.iniciarAvaliacaoComplementarClick = function (avaliacao) {
        var _this = this;
        //Alert de confirmação
        var confirm = this.alertCtrl.create({
            title: 'Avaliação Complementar',
            message: 'Deseja retomar a avaliação do setor?',
            buttons: [
                {
                    text: 'Retomar',
                    handler: function () {
                        _this.iniciarAvaliacaoComplementar(avaliacao);
                    }
                },
                {
                    text: 'Cancelar',
                    handler: function () { }
                }
            ]
        });
        confirm.present();
    };
    SetorPage.prototype.iniciarAvaliacaoComplementar = function (avaliacao) {
        this.setor.sendoAvaliado = true;
        avaliacao.dataFim = null;
        avaliacao.dataInicioAvaliacaoComplementar = this.avaliacaoService.getDataAgora();
        this.setorService.save(this.setor);
        this.avaliacaoService.save(avaliacao);
        this.avaliarSetor();
    };
    SetorPage.prototype.verAvaliacaoAnterior = function (avaliacao) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__avaliacao_anterior_avaliacao_anterior__["a" /* AvaliacaoAnteriorPage */], { avaliacao: avaliacao, setor: this.setor });
    };
    SetorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setor',template:/*ion-inline-start:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\setor\setor.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <!--<ion-title>{{setor.sigla}}</ion-title>-->\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="editarSetor()">\n        <ion-icon name="create"></ion-icon>\n      </button>\n\n      <button ion-button icon-only (click)="excluirSetor()">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div padding class="browser-compat">\n    <ion-card>\n\n      <ion-card-header>\n        <ion-item>\n          <h1 text-center width-50 class="nome-setor">{{setor.nome}}</h1>\n          <p text-center>({{setor.sigla}})</p>\n        </ion-item>\n      </ion-card-header>\n\n      <ion-list>\n\n        <ion-item *ngIf="setor.vinculo">\n          <p>Vínculo</p>\n          <h2>{{setor.vinculo}}</h2>\n        </ion-item>\n\n        <ion-item>\n          <p>Nível Atual</p>\n          <h2>{{setor.nivel? setor.nivel : "NA"}}</h2>\n        </ion-item>\n\n        <ion-item>\n          <p>Líder de Processos</p>\n          <h2>{{setor.lider? setor.lider : "Não especificado"}}</h2>\n        </ion-item>\n\n        <ion-item>\n          <p>Email do Líder</p>\n          <h2>{{setor.emailLider? setor.emailLider : "Não especificado"}}</h2>\n        </ion-item>\n\n        <ion-item>\n          <p>Última Avaliação</p>\n          <h2>{{setor.ultimaAvaliacao? setor.ultimaAvaliacao : "NA"}}</h2>\n        </ion-item>\n\n      </ion-list>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        Histórico de Avaliações\n      </ion-card-header>\n\n      <ion-item *ngIf="(historico$ | async)?.length==0"><p text-center>O setor não possui avaliações anteriores</p></ion-item>\n\n      <ion-list>\n\n        <div *ngFor="let avaliacao of historico$ | async | reverse; let i = index">\n          <ion-item *ngIf="mostrarHistoricoCompleto || (i <= 2)">\n\n            <!--Caso ja tenha finalizado-->\n            <div (click)="avaliacao.dataFim? verAvaliacaoAnterior(avaliacao):null">\n              <h3 ion-text [color]="avaliacao.dataFim? \'dark\' : \'danger\'">{{avaliacao.dataFim? avaliacao.nivelAtingido : \'Em andamento\'}}</h3>\n              <p>{{avaliacao.dataFim? avaliacao.dataFim: avaliacao.dataInicio}}</p>\n            </div>\n\n\n\n            <!--Botão de avaliação complementar-->\n            <button small round outline ion-button item-end icon-right *ngIf="(avaliacao.dataFim) && (i==0)" (click)="iniciarAvaliacaoComplementarClick(avaliacao)">\n              Retomar\n              <ion-icon color="danger" name="refresh"></ion-icon>\n            </button>\n\n          </ion-item>\n\n        </div>\n\n\n      </ion-list>\n\n      <button ion-button clear small full *ngIf="(historico$ | async)?.length==0"\n      (click)="verMaisMenosClick()">{{btnVerMaisMenosContent}}</button>\n\n    </ion-card>\n  </div>\n\n\n  <ion-fab bottom right>\n    <button ion-fab color="danger" (click)="avaliarSetor()"><ion-icon name="clipboard"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\setor\setor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__services_setor__["a" /* SetorService */],
            __WEBPACK_IMPORTED_MODULE_6__services_avaliacao__["a" /* AvaliacaoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], SetorPage);
    return SetorPage;
}());

//# sourceMappingURL=setor.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setor__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastro_setor_cadastro_setor__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__setor_setor__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_compat_add_operator_map__ = __webpack_require__(457);
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
    function SetoresPage(navCtrl, navParams, setorService, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.setorService = setorService;
        this.viewCtrl = viewCtrl;
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
        if (ev.target.value == null) {
            this.atualizaListaDeSetores();
            return;
        }
        this.setoresFiltrados$ = this.setores$.map(function (ARRAY) {
            return ARRAY.filter(function (setor) {
                return ((setor.sigla.toLowerCase().includes(ev.target.value.toLowerCase())) || (setor.nome.toLowerCase().includes(ev.target.value.toLowerCase())));
            });
        });
        console.log(this.setores$);
    };
    SetoresPage.prototype.onCancel = function () {
        this.atualizaListaDeSetores();
    };
    SetoresPage.prototype.atualizaListaDeSetores = function () {
        this.setoresFiltrados$ = this.setores$;
    };
    SetoresPage.prototype.fecharPágina = function () {
        this.viewCtrl.dismiss();
    };
    SetoresPage.prototype.getUrlImagemNivel = function (setor) {
        return 'http://nqi.ufcspa.edu.br/wiki/selos-niveis/' + setor.nivel + '.png';
    };
    SetoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setores',template:/*ion-inline-start:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\setores\setores.html"*/'<!--\n  Generated template for the SetoresPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Setores</ion-title>\n\n    <!--Botão de adicionar no iOS-->\n    <ion-buttons hideWhen="android, core" end>\n      <button ion-button icon-only (click)="addSetor()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <!--Barra de Pesquisa-->\n  <ion-toolbar>\n    <ion-searchbar\n      class="browser-compat"\n      placeholder="Procurar"\n      [(ngModel)]="myInput"\n      [showCancelButton]="shouldShowCancel"\n      (ionInput)="filterItems($event)"\n      (ionCancel)="onCancel()">\n    </ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="browser-compat">\n    <ion-list>\n      <ion-card\n        *ngFor="let setor of setoresFiltrados$ | async"\n      >\n\n        <ion-item (click)="irParaPaginaDoSetor(setor)">\n          <ion-avatar *ngIf="setor.nivel" icone-estrela item-end>\n            <img src={{getUrlImagemNivel(setor)}}>\n          </ion-avatar>\n          <h2>{{setor.sigla}}</h2>\n          <p>{{setor.nome}}</p>\n        </ion-item>\n\n        <ion-card-content>\n          <ion-note>{{setor.ultimaAvaliacao? \'Última Avaliação: \'+setor.ultimaAvaliacao : \'Setor ainda não avaliado\'}}</ion-note>\n        </ion-card-content>\n\n      </ion-card>\n    </ion-list>\n\n    <button padding showWhen="core" class="centralized" ion-button (click)="addSetor()">\n      Adicionar Setor\n    </button>\n\n    <ion-fab bottom right>\n      <button ion-fab showWhen="android" (click)="addSetor()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\setores\setores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_setor__["a" /* SetorService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], SetoresPage);
    return SetoresPage;
}());

//# sourceMappingURL=setores.js.map

/***/ }),

/***/ 195:
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
webpackEmptyAsyncContext.id = 195;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/avaliacao-anterior/avaliacao-anterior.module": [
		485,
		11
	],
	"../pages/avaliacao-criterios-anterior/avaliacao-criterios-anterior.module": [
		486,
		10
	],
	"../pages/avaliacao-criterios/avaliacao-criterios.module": [
		488,
		9
	],
	"../pages/avaliacao-itens-anterior/avaliacao-itens-anterior.module": [
		487,
		8
	],
	"../pages/avaliacao-itens/avaliacao-itens.module": [
		489,
		7
	],
	"../pages/avaliacao/avaliacao.module": [
		490,
		6
	],
	"../pages/cadastro-setor/cadastro-setor.module": [
		491,
		5
	],
	"../pages/niveis/niveis.module": [
		492,
		4
	],
	"../pages/nivel/nivel.module": [
		493,
		0
	],
	"../pages/pre-avaliacao/pre-avaliacao.module": [
		494,
		3
	],
	"../pages/setor/setor.module": [
		495,
		2
	],
	"../pages/setores/setores.module": [
		496,
		1
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
webpackAsyncContext.id = 237;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toaster; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Toaster = /** @class */ (function () {
    function Toaster(toastCtrl) {
        this.toastCtrl = toastCtrl;
        this.DEFAULT_DURATION = 3000;
    }
    Toaster.prototype.mostrarToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: this.DEFAULT_DURATION
        });
        toast.present();
    };
    Toaster = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* ToastController */]])
    ], Toaster);
    return Toaster;
}());

//# sourceMappingURL=toaster.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NivelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {ToastController} from "ionic-angular";
var NivelService = /** @class */ (function () {
    function NivelService(db) {
        this.db = db;
        this.niveisRef = this.db.list('niveis');
    }
    NivelService.prototype.getAll = function () {
        return this.niveisRef;
    };
    NivelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], NivelService);
    return NivelService;
}());

//# sourceMappingURL=nivel.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setores_setores__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__niveis_niveis__ = __webpack_require__(158);
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

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(415);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvaliacaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AvaliacaoService = /** @class */ (function () {
    function AvaliacaoService(db) {
        this.db = db;
        this.avaliacaoRef = this.db.list('avaliacoes');
        this.niveisRef = this.db.database.ref('niveis');
    }
    AvaliacaoService.prototype.getAll = function () {
        return this.avaliacaoRef;
    };
    AvaliacaoService.prototype.getCriterios = function (refNivel) {
        return this.db.list(refNivel);
    };
    AvaliacaoService.prototype.getNivel = function (refNivel) {
        return this.db.object(refNivel);
    };
    AvaliacaoService.prototype.getCriterio = function (refCriterio) {
        return this.db.object(refCriterio);
    };
    AvaliacaoService.prototype.getItensDeAvaliacao = function (refCriterio) {
        return this.db.list(refCriterio);
    };
    AvaliacaoService.prototype.getCorpoAvaliacao = function (setorKey, avaliacaoKey) {
        var pathAvaliacaoEspecifica = 'avaliacoes' + '/' + setorKey + '/' + avaliacaoKey;
        var refCorpoAvaliacaoEspecifica = this.db.object(pathAvaliacaoEspecifica);
        return refCorpoAvaliacaoEspecifica;
    };
    AvaliacaoService.prototype.getAvaliacaoMaisRecente = function (setorKey, onResponse, context) {
        var pathAvaliacoes = 'avaliacoes' + '/' + setorKey + '/';
        var refAvaliacaoMaisRecente = this.db.database.ref(pathAvaliacoes).orderByChild('dataInicio').limitToLast(1);
        var self = this;
        //@Rodrigo
        // Usar o '.once' para ter o retorno do firebase somente uma vez. Caso
        // se use '.on' ele executa a cada vez que o objeto muda no banco
        refAvaliacaoMaisRecente.once("value", function (data) {
            var avaliacaoMaisRecenteObj = data.val();
            var avaliacaoMaisRecente;
            for (var key in avaliacaoMaisRecenteObj) {
                var value = avaliacaoMaisRecenteObj[key];
                avaliacaoMaisRecente = value;
            }
            onResponse(self.getCorpoAvaliacao(setorKey, avaliacaoMaisRecente.key), context);
        }, function (error) {
            console.log("Error: " + error.code);
        });
    };
    AvaliacaoService.prototype.getRef3UltimasAvaliacoes = function (setorKey) {
        var pathAvaliacoes = 'avaliacoes' + '/' + setorKey + '/';
        // let refUltimas3Avaliacoes  = this.db.database.ref(pathAvaliacoes).limitToLast(3);
        // return this.db.list<Avaliacao>(refUltimas3Avaliacoes);
        return this.db.list(pathAvaliacoes, function (ref) { return ref.orderByChild('dataInicio'); });
    };
    AvaliacaoService.prototype.saveItem = function (item, path) {
        console.log(path);
        var refItem = this.db.database.ref(path + '/' + item.key);
        refItem.update(JSON.parse(JSON.stringify(item)));
        // console.log("FIREBASE: Item de Avaliação Editada:");
        // console.log(item);
    };
    AvaliacaoService.prototype.saveAvaliacaoItem = function (item, path) {
        console.log(path);
        var refItem = this.db.database.ref(path + '/' + item.key + '/');
        refItem.update({ avaliacao: item.avaliacao });
        // console.log("FIREBASE: Item de Avaliação Editada:");
        // console.log(item);
    };
    AvaliacaoService.prototype.save = function (avaliacao) {
        var self = this; // Para referências dos métodos assíncronos
        // Create
        if (avaliacao.key == null) {
            this.niveisRef.once("value")
                .then(function (snapshot) {
                avaliacao.corpo = snapshot.val();
                avaliacao.key = self.avaliacaoRef.push(null).key;
                self.avaliacaoRef.update('/' + avaliacao.setor + '/' + avaliacao.key, avaliacao);
                console.log("FIREBASE: Avaliação Adicionada ao setor " + avaliacao.setor + ":");
                console.log(avaliacao);
            });
        }
        else {
            self.avaliacaoRef.update('/' + avaliacao.setor + '/' + avaliacao.key, JSON.parse(JSON.stringify(avaliacao)));
            console.log("FIREBASE: Avaliação Editada:");
            console.log(avaliacao);
        }
    };
    AvaliacaoService.prototype.saveAndWait = function (avaliacao, onResponse, setorSelf) {
        var self = this; // Para referências dos métodos assíncronos
        // Create
        this.niveisRef.once("value")
            .then(function (snapshot) {
            avaliacao.corpo = snapshot.val();
            avaliacao.key = self.avaliacaoRef.push(null).key;
            self.avaliacaoRef.set('/' + avaliacao.setor + '/' + avaliacao.key, avaliacao).then(function () {
                onResponse(setorSelf);
            });
            console.log("FIREBASE: Avaliação Adicionada ao setor " + avaliacao.setor + ":");
            console.log(avaliacao);
        });
    };
    AvaliacaoService.prototype.saveNivelAvaliacao = function (nivel, refNivel) {
        this.db.database.ref(refNivel).update(nivel);
    };
    AvaliacaoService.prototype.saveCriterioAvaliacao = function (criterio, refCriterio) {
        this.db.database.ref(refCriterio).update(criterio);
    };
    AvaliacaoService.prototype.saveAvaliacaoManualCriterio = function (cor, refCriterio) {
        this.db.database.ref(refCriterio).update({ avaliacaoManual: cor });
    };
    AvaliacaoService.prototype.saveAvaliacaoManualNivel = function (cor, refNivel) {
        this.db.database.ref(refNivel).update({ avaliacaoManual: cor });
    };
    AvaliacaoService.prototype.getDataAgora = function () {
        var sdia;
        var smes;
        var shora;
        var smin;
        var data = new Date();
        var dia = data.getDate();
        sdia = dia.toString();
        if (dia.toString().length == 1)
            sdia = "0" + dia;
        var mes = data.getMonth() + 1;
        smes = mes.toString();
        if (mes.toString().length == 1)
            smes = "0" + mes;
        var hora = data.getHours();
        shora = hora.toString();
        if (hora.toString().length == 1)
            shora = "0" + hora;
        var min = data.getMinutes();
        smin = min.toString();
        if (min.toString().length == 1)
            smin = "0" + min;
        var ano = data.getFullYear();
        return ano + "/" + smes + "/" + sdia + ' (' + shora + ':' + smin + ')';
    };
    AvaliacaoService.prototype.getCorCriterioAutomatico = function (criterio) {
        if (criterio.itensDeAvaliacao) {
            var cor_1 = 'verde';
            criterio.itensDeAvaliacao = Object.keys(criterio.itensDeAvaliacao).map(function (i) {
                var value = criterio.itensDeAvaliacao[i];
                value.key = i;
                return value;
            });
            criterio.itensDeAvaliacao.forEach(function (itemAvaliacao, index) {
                if (itemAvaliacao.avaliacao) {
                    if (itemAvaliacao.avaliacao === 'vermelho') {
                        cor_1 = 'vermelho';
                        return;
                    }
                    if (itemAvaliacao.avaliacao === 'amarelo') {
                        if (cor_1 !== 'vermelho')
                            cor_1 = 'amarelo';
                        return;
                    }
                }
                else {
                    cor_1 = 'cinza';
                    return;
                }
            });
            //                  Referência de variable.scss > $colors
            if (cor_1 === 'vermelho') {
                return 'avaliacaoVermelho';
            }
            if (cor_1 === 'amarelo') {
                return 'avaliacaoAmarelo';
            }
            if (cor_1 === 'verde') {
                return 'avaliacaoVerde';
            }
            if (cor_1 === 'cinza') {
                return 'avaliacaoCinza';
            }
        }
        else {
            return 'avaliacaoCinza'; //Cinza ()
        }
    };
    AvaliacaoService.prototype.getCorCriterio = function (criterio) {
        //Verifica set manual
        if (criterio.avaliacaoManual !== undefined) {
            if (criterio.avaliacaoManual == 'verde')
                return 'avaliacaoVerde';
            if (criterio.avaliacaoManual == 'amarelo')
                return 'avaliacaoAmarelo';
            if (criterio.avaliacaoManual == 'vermelho')
                return 'avaliacaoVermelho';
        }
        if (criterio.itensDeAvaliacao) {
            var cor_2 = 'verde';
            criterio.itensDeAvaliacao = Object.keys(criterio.itensDeAvaliacao).map(function (i) {
                var value = criterio.itensDeAvaliacao[i];
                value.key = i;
                return value;
            });
            criterio.itensDeAvaliacao.forEach(function (itemAvaliacao, index) {
                if (itemAvaliacao.avaliacao) {
                    if (itemAvaliacao.avaliacao === 'vermelho') {
                        cor_2 = 'vermelho';
                        return;
                    }
                    if (itemAvaliacao.avaliacao === 'amarelo') {
                        if (cor_2 !== 'vermelho')
                            cor_2 = 'amarelo';
                        return;
                    }
                }
                else {
                    cor_2 = 'cinza';
                    return;
                }
            });
            //                  Referência de variable.scss > $colors
            if (cor_2 === 'vermelho') {
                return 'avaliacaoVermelho';
            }
            if (cor_2 === 'amarelo') {
                return 'avaliacaoAmarelo';
            }
            if (cor_2 === 'verde') {
                return 'avaliacaoVerde';
            }
            if (cor_2 === 'cinza') {
                return 'avaliacaoCinza';
            }
        }
        else {
            return 'avaliacaoCinza'; //Cinza ()
        }
    };
    AvaliacaoService.prototype.getCorNivelAutomatico = function (nivel) {
        if (nivel.criterios) {
            nivel.criterios = Object.keys(nivel.criterios).map(function (i) {
                var value = nivel.criterios[i];
                value.key = i;
                return value;
            });
            var cor_3 = 'verde';
            nivel.criterios.forEach(function (criterio, index) {
                //Verifica set manual
                if (criterio.avaliacaoManual !== undefined) {
                    if (criterio.avaliacaoManual == 'verde')
                        cor_3 = 'verde';
                    if (criterio.avaliacaoManual == 'amarelo')
                        cor_3 = 'amarelo';
                    if (criterio.avaliacaoManual == 'vermelho')
                        cor_3 = 'vermelho';
                }
                else {
                    criterio.itensDeAvaliacao = Object.keys(criterio.itensDeAvaliacao).map(function (i) {
                        var value = criterio.itensDeAvaliacao[i];
                        value.key = i;
                        return value;
                    });
                    criterio.itensDeAvaliacao.forEach(function (itemAvaliacao, index) {
                        if (itemAvaliacao.avaliacao) {
                            if (itemAvaliacao.avaliacao === 'vermelho') {
                                cor_3 = 'vermelho';
                                return;
                            }
                            if (itemAvaliacao.avaliacao === 'amarelo') {
                                if (cor_3 !== 'vermelho')
                                    cor_3 = 'amarelo';
                                return;
                            }
                        }
                        else {
                            cor_3 = 'cinza';
                            return;
                        }
                    });
                }
            });
            //                       Referência de variable.scss > $colors
            if (cor_3 === 'vermelho') {
                return 'avaliacaoVermelho';
            }
            if (cor_3 === 'amarelo') {
                return 'avaliacaoAmarelo';
            }
            if (cor_3 === 'verde') {
                return 'avaliacaoVerde';
            }
            if (cor_3 === 'cinza') {
                return 'avaliacaoCinza';
            }
        }
        else {
            return 'avaliacaoCinza'; //Cinza ()
        }
    };
    AvaliacaoService.prototype.getCorNivel = function (nivel) {
        //Verifica set manual
        if (nivel.avaliacaoManual !== undefined) {
            if (nivel.avaliacaoManual == 'verde')
                return 'avaliacaoVerde';
            if (nivel.avaliacaoManual == 'amarelo')
                return 'avaliacaoAmarelo';
            if (nivel.avaliacaoManual == 'vermelho')
                return 'avaliacaoVermelho';
        }
        if (nivel.criterios) {
            nivel.criterios = Object.keys(nivel.criterios).map(function (i) {
                var value = nivel.criterios[i];
                value.key = i;
                return value;
            });
            var cor_4 = 'verde';
            nivel.criterios.forEach(function (criterio, index) {
                //Verifica set manual
                if (criterio.avaliacaoManual !== undefined) {
                    if (criterio.avaliacaoManual == 'verde')
                        cor_4 = 'verde';
                    if (criterio.avaliacaoManual == 'amarelo')
                        cor_4 = 'amarelo';
                    if (criterio.avaliacaoManual == 'vermelho')
                        cor_4 = 'vermelho';
                }
                else {
                    criterio.itensDeAvaliacao = Object.keys(criterio.itensDeAvaliacao).map(function (i) {
                        var value = criterio.itensDeAvaliacao[i];
                        value.key = i;
                        return value;
                    });
                    criterio.itensDeAvaliacao.forEach(function (itemAvaliacao, index) {
                        if (itemAvaliacao.avaliacao) {
                            if (itemAvaliacao.avaliacao === 'vermelho') {
                                cor_4 = 'vermelho';
                                return;
                            }
                            if (itemAvaliacao.avaliacao === 'amarelo') {
                                if (cor_4 !== 'vermelho')
                                    cor_4 = 'amarelo';
                                return;
                            }
                        }
                        else {
                            cor_4 = 'cinza';
                            return;
                        }
                    });
                }
            });
            //                       Referência de variable.scss > $colors
            if (cor_4 === 'vermelho') {
                return 'avaliacaoVermelho';
            }
            if (cor_4 === 'amarelo') {
                return 'avaliacaoAmarelo';
            }
            if (cor_4 === 'verde') {
                return 'avaliacaoVerde';
            }
            if (cor_4 === 'cinza') {
                return 'avaliacaoCinza';
            }
        }
        else {
            return 'avaliacaoCinza'; //Cinza ()
        }
    };
    AvaliacaoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], AvaliacaoService);
    return AvaliacaoService;
    var _a;
}());

//# sourceMappingURL=avaliacao.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_setores_setores__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_niveis_niveis__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_pipes__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__firebase_credentials__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_setor__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cadastro_setor_cadastro_setor__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_setor_setor__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_pre_avaliacao_pre_avaliacao__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_avaliacao_avaliacao__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_nivel__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_avaliacao__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_toaster__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_avaliacao_criterios_avaliacao_criterios__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_avaliacao_itens_avaliacao_itens__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_avaliacao_anterior_avaliacao_anterior__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_avaliacao_criterios_anterior_avaliacao_criterios_anterior__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_avaliacao_itens_anterior_avaliacao_itens_anterior__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Ionic Imports






//Imports Database



// Own Services and Pages













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
                __WEBPACK_IMPORTED_MODULE_14__pages_cadastro_setor_cadastro_setor__["a" /* CadastroSetorPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_setor_setor__["a" /* SetorPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pre_avaliacao_pre_avaliacao__["a" /* PreAvaliacaoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_avaliacao_avaliacao__["a" /* AvaliacaoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_avaliacao_criterios_avaliacao_criterios__["a" /* AvaliacaoCriteriosPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_avaliacao_itens_avaliacao_itens__["a" /* AvaliacaoItensPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_avaliacao_anterior_avaliacao_anterior__["a" /* AvaliacaoAnteriorPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_avaliacao_criterios_anterior_avaliacao_criterios_anterior__["a" /* AvaliacaoCriteriosAnteriorPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_avaliacao_itens_anterior_avaliacao_itens_anterior__["a" /* AvaliacaoItensAnteriorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/avaliacao-anterior/avaliacao-anterior.module#AvaliacaoAnteriorPageModule', name: 'AvaliacaoAnteriorPage', segment: 'avaliacao-anterior', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/avaliacao-criterios-anterior/avaliacao-criterios-anterior.module#AvaliacaoCriteriosAnteriorPageModule', name: 'AvaliacaoCriteriosAnteriorPage', segment: 'avaliacao-criterios-anterior', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/avaliacao-itens-anterior/avaliacao-itens-anterior.module#AvaliacaoItensAnteriorPageModule', name: 'AvaliacaoItensAnteriorPage', segment: 'avaliacao-itens-anterior', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/avaliacao-criterios/avaliacao-criterios.module#AvaliacaoCriteriosPageModule', name: 'AvaliacaoCriteriosPage', segment: 'avaliacao-criterios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/avaliacao-itens/avaliacao-itens.module#AvaliacaoItensPageModule', name: 'AvaliacaoItensPage', segment: 'avaliacao-itens', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/avaliacao/avaliacao.module#AvaliacaoPageModule', name: 'AvaliacaoPage', segment: 'avaliacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-setor/cadastro-setor.module#CadastroSetorPageModule', name: 'CadastroSetorPage', segment: 'cadastro-setor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/niveis/niveis.module#NiveisPageModule', name: 'NiveisPage', segment: 'niveis', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel/nivel.module#NivelPageModule', name: 'NivelPage', segment: 'nivel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pre-avaliacao/pre-avaliacao.module#PreAvaliacaoPageModule', name: 'PreAvaliacaoPage', segment: 'pre-avaliacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setor/setor.module#SetorPageModule', name: 'SetorPage', segment: 'setor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setores/setores.module#SetoresPageModule', name: 'SetoresPage', segment: 'setores', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_12__firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_pipes__["a" /* NgPipesModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_setores_setores__["a" /* SetoresPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_niveis_niveis__["a" /* NiveisPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cadastro_setor_cadastro_setor__["a" /* CadastroSetorPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_setor_setor__["a" /* SetorPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pre_avaliacao_pre_avaliacao__["a" /* PreAvaliacaoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_avaliacao_avaliacao__["a" /* AvaliacaoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_avaliacao_criterios_avaliacao_criterios__["a" /* AvaliacaoCriteriosPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_avaliacao_itens_avaliacao_itens__["a" /* AvaliacaoItensPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_avaliacao_anterior_avaliacao_anterior__["a" /* AvaliacaoAnteriorPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_avaliacao_criterios_anterior_avaliacao_criterios_anterior__["a" /* AvaliacaoCriteriosAnteriorPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_avaliacao_itens_anterior_avaliacao_itens_anterior__["a" /* AvaliacaoItensAnteriorPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__services_setor__["a" /* SetorService */],
                __WEBPACK_IMPORTED_MODULE_18__services_nivel__["a" /* NivelService */],
                __WEBPACK_IMPORTED_MODULE_19__services_avaliacao__["a" /* AvaliacaoService */],
                __WEBPACK_IMPORTED_MODULE_20__services_toaster__["a" /* Toaster */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(293);
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

/***/ 484:
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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(83);
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
    function SetorService(db) {
        this.db = db;
        this.setoresRef = this.db.list('setores');
    }
    SetorService.prototype.getAll = function () {
        return this.setoresRef;
    };
    SetorService.prototype.save = function (setor) {
        if (setor.key == null) {
            setor.key = this.setoresRef.push(null).key;
            this.setoresRef.update('/' + setor.key, JSON.parse(JSON.stringify(setor)));
            console.log("FIREBASE: Setor Adicionado:");
            console.log(setor);
        }
        else {
            this.setoresRef.update('/' + setor.key, JSON.parse(JSON.stringify(setor)));
            console.log("FIREBASE: Setor Editado:");
            console.log(setor);
        }
    };
    SetorService.prototype.delete = function (setor) {
        var updates = {};
        updates['/setores/' + setor.key] = null;
        this.db.database.ref().update(updates);
        console.log("FIREBASE: Setor Excluído:");
        console.log(setor);
    };
    SetorService.prototype.setorTemAvaliacaoAnterior = function (key) {
        return false;
    };
    SetorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], SetorService);
    return SetorService;
}());

//# sourceMappingURL=setor.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvaliacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__avaliacao_criterios_avaliacao_criterios__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_setor__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_avaliacao__ = __webpack_require__(37);
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
 * Generated class for the AvaliacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AvaliacaoPage = /** @class */ (function () {
    function AvaliacaoPage(navCtrl, navParams, alertCtrl, setorService, viewCtrl, toastCtrl, avaliacaoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.setorService = setorService;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.avaliacaoService = avaliacaoService;
        this.setor = this.navParams.get('setor');
        this.avaliacaoRef = __assign({}, this.navParams.get('avaliacao')); // cópia
    }
    AvaliacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvaliacaoPage');
    };
    AvaliacaoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.avaliacao$ = this.avaliacaoRef.snapshotChanges().map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        this.avaliacaoSubscription = this.avaliacao$.subscribe(function (data) {
            _this.objAvaliacao = data;
            _this.niveis = [];
            Object.keys(_this.objAvaliacao.corpo).forEach(function (keyNivel) {
                _this.objAvaliacao.corpo[keyNivel].key = keyNivel;
                _this.niveis.push(_this.objAvaliacao.corpo[keyNivel]);
            });
        });
    };
    AvaliacaoPage.prototype.abrirCriterios = function (nivel) {
        //Abrir página do nível com os critérios
        var refNivel = 'avaliacoes' + '/' + this.setor.key + '/' + this.objAvaliacao.key + '/' + 'corpo' + '/' + nivel.key;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__avaliacao_criterios_avaliacao_criterios__["a" /* AvaliacaoCriteriosPage */], { nivel: nivel, refNivel: refNivel });
    };
    AvaliacaoPage.prototype.finalizarAvaliacaoClick = function () {
        var _this = this;
        var nivelAtingido = this.getNivelAtingidoAutomaticamente();
        var alert = this.alertCtrl.create({
            title: 'Finalizar avaliação',
            message: 'Deseja finalizar avaliação do setor? o nível atingido será: ' + nivelAtingido,
            buttons: [
                {
                    text: 'Finalizar',
                    handler: function () {
                        _this.finalizarAvaliacao(nivelAtingido);
                        console.log('Avaliação do setor ' + _this.setor.sigla + ' finalizada.');
                    }
                },
                {
                    text: 'Nível Manual',
                    handler: function () {
                        _this.setarNivelManualmente();
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        alert.present();
    };
    AvaliacaoPage.prototype.finalizarAvaliacao = function (nivelAtingido) {
        this.objAvaliacao.nivelAtingido = nivelAtingido;
        this.objAvaliacao.dataFim = this.avaliacaoService.getDataAgora();
        this.avaliacaoService.save(this.objAvaliacao);
        this.setor.sendoAvaliado = false;
        this.setor.nivel = nivelAtingido;
        this.setorService.save(this.setor);
        this.fecharPagina();
        this.mostrarToastAvaliacaoFinalizada();
    };
    AvaliacaoPage.prototype.fecharPagina = function () {
        this.viewCtrl.dismiss();
    };
    AvaliacaoPage.prototype.mostrarToastAvaliacaoFinalizada = function () {
        var toast = this.toastCtrl.create({
            message: 'Avaliação do setor ' + this.setor.sigla + ' finalizada.',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    AvaliacaoPage.prototype.getNivelAtingidoAutomaticamente = function () {
        //TODO Buscar nível
        var _this = this;
        var nivelAtingido;
        var flagNivelNaoVerde = false;
        this.objAvaliacao.corpo = Object.keys(this.objAvaliacao.corpo).map(function (i) {
            var value = _this.objAvaliacao.corpo[i];
            value.key = i;
            return value;
        });
        this.objAvaliacao.corpo.forEach(function (nivel) {
            if (!flagNivelNaoVerde && _this.avaliacaoService.getCorNivel(nivel) === 'avaliacaoVerde')
                nivelAtingido = nivel.nome;
            else
                flagNivelNaoVerde = true;
        });
        if (nivelAtingido)
            return nivelAtingido;
        else
            return this.objAvaliacao.corpo[0].nome;
    };
    AvaliacaoPage.prototype.setarNivelManualmente = function () {
        var _this = this;
        var nivelAvaliado;
        var alert = this.alertCtrl.create();
        alert.setTitle('Nível Manual');
        var corpo = Object.keys(this.objAvaliacao.corpo).map(function (i) {
            var value = _this.objAvaliacao.corpo[i];
            value.key = i;
            return value;
        });
        corpo.forEach(function (nivel) {
            alert.addInput({
                type: 'radio',
                label: nivel.nome,
                value: nivel.nome
            });
        });
        alert.addButton({
            text: 'Cancelar',
            role: 'cancel'
        });
        alert.addButton({
            text: 'Confirmar',
            handler: function (data) {
                nivelAvaliado = data;
                _this.finalizarAvaliacao(nivelAvaliado);
            }
        });
        alert.present();
    };
    AvaliacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avaliacao',template:/*ion-inline-start:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\avaliacao\avaliacao.html"*/'<!--\n  Generated template for the AvaliacaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Avaliação</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="browser-compat">\n\n    <ion-card>\n      <ion-card-header><h1 text-center>{{setor?.sigla}}</h1></ion-card-header>\n      <ion-note><p text-center>Nível Pretendido: {{objAvaliacao?.nivelPretendido}}</p></ion-note>\n\n      <ion-list>\n\n      <button *ngFor="let nivel of niveis" ion-item  (click)="abrirCriterios(nivel)">\n        {{nivel.nome}}\n\n        <!--<ion-icon item-end [color]="avaliacaoService.getCorNivel(nivel)" name="star"></ion-icon>-->\n\n        <!--TODO-->\n        <ion-icon *ngIf="!((avaliacaoService.getCorNivel(nivel) === \'avaliacaoAmarelo\') && !nivel.avaliacaoManual)"    item-end [color]="avaliacaoService.getCorNivel(nivel)" name="star"></ion-icon>\n        <ion-icon *ngIf="(avaliacaoService.getCorNivel(nivel) === \'avaliacaoAmarelo\') && !nivel.avaliacaoManual"       item-end color="avaliacaoAmarelo" name="md-help"></ion-icon>\n\n      </button>\n\n      </ion-list>\n    </ion-card>\n\n\n  <button ion-button round class="centralized" (click)="finalizarAvaliacaoClick()"> Finalizar Avaliação</button>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\avaliacao\avaliacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__services_setor__["a" /* SetorService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__services_avaliacao__["a" /* AvaliacaoService */]])
    ], AvaliacaoPage);
    return AvaliacaoPage;
}());

//# sourceMappingURL=avaliacao.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroSetorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setor__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toaster__ = __webpack_require__(248);
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
    function CadastroSetorPage(navCtrl, navParams, setoreService, viewCtrl, toaster) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.setoreService = setoreService;
        this.viewCtrl = viewCtrl;
        this.toaster = toaster;
    }
    CadastroSetorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroSetorPage');
    };
    CadastroSetorPage.prototype.ngOnInit = function () {
        this.setor = this.navParams.get('setor') ? this.navParams.get('setor') : {};
        this.nomeBotaoSalvar = this.navParams.get('setor') ? 'Salvar Setor' : 'Adicionar Setor';
        this.nomePagina = this.navParams.get('setor') ? 'Editar' : 'Cadastrar';
    };
    CadastroSetorPage.prototype.registrarSetor = function (setor) {
        setor.key = this.setor.key;
        this.setoreService.save(setor);
        //TO-DO Abrir página de avaliação em andamento
        this.fecharPágina();
        this.toaster.mostrarToast(this.navParams.get('setor') ? "Setor " + this.setor.nome + " editado." : "Setor " + this.setor.nome + " adicionado.");
    };
    CadastroSetorPage.prototype.fecharPágina = function () {
        this.viewCtrl.dismiss();
    };
    CadastroSetorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-setor',template:/*ion-inline-start:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\cadastro-setor\cadastro-setor.html"*/'<!--\n  Generated template for the CadastroSetorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{nomePagina}} Setor</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="browser-compat">\n\n  <ion-card padding class="browser-compat">\n    <ion-card-content>\n\n      <form (ngSubmit)="registrarSetor(f.value)" #f="ngForm">\n        <!--<ion-row>-->\n          <!--<ion-col>-->\n            <ion-list>\n\n              <ion-item>\n                <ion-label color="dark">Sigla</ion-label>\n                <ion-input type="text" name="sigla" [(ngModel)]="setor.sigla" required ></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label color="dark">Nome Completo</ion-label>\n                <ion-input type="text" name="nome" [(ngModel)]="setor.nome" required></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label color="dark">Vínculo</ion-label>\n                <ion-input type="text" name="vinculo" [(ngModel)]="setor.vinculo"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label color="dark">Líder de Processo</ion-label>\n                <ion-input type="text" name="lider" [(ngModel)]="setor.lider"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label color="dark">Email do Líder</ion-label>\n                <ion-input type="text" name="emailLider" [(ngModel)]="setor.emailLider"></ion-input>\n              </ion-item>\n\n            </ion-list>\n\n            <button padding ion-button full clear type="submit" [disabled]="!f.valid">{{nomeBotaoSalvar}}</button>\n\n      </form>\n\n    </ion-card-content>\n  </ion-card>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\cadastro-setor\cadastro-setor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_setor__["a" /* SetorService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__services_toaster__["a" /* Toaster */]])
    ], CadastroSetorPage);
    return CadastroSetorPage;
}());

//# sourceMappingURL=cadastro-setor.js.map

/***/ })

},[294]);
//# sourceMappingURL=main.js.map