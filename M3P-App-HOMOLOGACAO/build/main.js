webpackJsonp([15],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NivelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__avaliacao__ = __webpack_require__(35);
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



var NivelService = /** @class */ (function () {
    function NivelService(db, avaliacaoService) {
        this.db = db;
        this.avaliacaoService = avaliacaoService;
        this.niveisRef = this.db.list('niveis');
        this.niveisHistoricoRef = this.db.list('historicoDeNiveis');
    }
    NivelService.prototype.getAllasList = function () {
        return this.niveisRef;
    };
    NivelService.prototype.saveNiveisHistorico = function (niveisHistorico, nomeDaVersao) {
        //Inativa o último
        var refUltimaOrganizacaoDeNiveis = this.db.database.ref('historicoDeNiveis').orderByChild('dataCriacao').limitToLast(1);
        var self = this;
        refUltimaOrganizacaoDeNiveis.once("value", function (data) {
            if (data.exists()) {
                // Põe data de fim ao último
                var ultimaOrganizacaoDeNiveis = data.val()[Object.keys(data.val())[0]];
                ultimaOrganizacaoDeNiveis.dataInativacao = self.avaliacaoService.getDataAgora();
                self.niveisHistoricoRef.update('/' + ultimaOrganizacaoDeNiveis.key, JSON.parse(JSON.stringify(ultimaOrganizacaoDeNiveis)));
            }
            // Cria novo e adiciona ao histórico
            var novoHistorico = { nome: nomeDaVersao, dataCriacao: self.avaliacaoService.getDataAgora(), niveis: niveisHistorico };
            novoHistorico.key = self.niveisHistoricoRef.push(null).key;
            self.niveisHistoricoRef.update('/' + novoHistorico.key, JSON.parse(JSON.stringify(novoHistorico)));
        });
    };
    NivelService.prototype.saveNiveis = function (niveis) {
        var _this = this;
        niveis.forEach(function (nivel) { return _this.saveNivel(nivel); });
    };
    NivelService.prototype.saveNivel = function (nivel) {
        var _this = this;
        var nivelCopy = __assign({}, nivel);
        nivel.key = this.niveisRef.push(null).key;
        nivel.criterios = null;
        this.niveisRef.update('/' + nivel.key, JSON.parse(JSON.stringify(nivel)));
        //dbug
        console.log('nvel cujos criterios serao copiadas');
        console.log(nivelCopy);
        if (!nivelCopy.criterios)
            nivelCopy.criterios = [];
        Object.values(nivelCopy.criterios).forEach(function (criterio) { return _this.saveCriterio(criterio, nivel.key); });
    };
    NivelService.prototype.saveCriterio = function (criterio, keyNivel) {
        var _this = this;
        var criterioCopy = __assign({}, criterio);
        criterio.key = this.db.list('niveis' + '/' + keyNivel + 'criterios').push(null).key;
        criterio.itensDeAvaliacao = null;
        this.niveisRef.update('/' + keyNivel + '/criterios/' + criterio.key, JSON.parse(JSON.stringify(criterio)));
        if (!criterioCopy.itensDeAvaliacao)
            criterioCopy.itensDeAvaliacao = [];
        Object.values(criterioCopy.itensDeAvaliacao).forEach(function (item) { return _this.saveItemDeAvaliacao(item, keyNivel, criterio.key); });
    };
    NivelService.prototype.saveItemDeAvaliacao = function (item, keyNivel, keyCriterio) {
        item.key = this.niveisRef.push(null).key;
        this.niveisRef.update('/' + keyNivel + '/criterios/' + keyCriterio + '/itensDeAvaliacao/' + item.key, JSON.parse(JSON.stringify(item)));
    };
    NivelService.prototype.deleteNiveis = function () {
        this.db.object('niveis').remove();
    };
    NivelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_2__avaliacao__["a" /* AvaliacaoService */]])
    ], NivelService);
    return NivelService;
}());

//# sourceMappingURL=nivel.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setores_setores__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edicao_niveis_edicao_niveis__ = __webpack_require__(171);
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
        this.niveisPage = __WEBPACK_IMPORTED_MODULE_2__edicao_niveis_edicao_niveis__["a" /* EdicaoNiveisPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="setoresPage" tabTitle="Setores" tabIcon="home"></ion-tab>\n  <ion-tab [root]="niveisPage" tabTitle="Níveis" tabIcon="star"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvaliacaoAnteriorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__avaliacao_criterios_anterior_avaliacao_criterios_anterior__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_avaliacao__ = __webpack_require__(35);
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
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.avaliacaoService = avaliacaoService;
        this.avaliacao = navParams.get('avaliacao');
        this.setor = navParams.get('setor');
        this.corpo = [];
        Object.keys(this.avaliacao.corpo).forEach(function (keyNivel) {
            _this.corpo.push(_this.avaliacao.corpo[keyNivel]);
        });
    }
    AvaliacaoAnteriorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvaliacaoAnteriorPage');
    };
    AvaliacaoAnteriorPage.prototype.abrirCriterios = function (nivel) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__avaliacao_criterios_anterior_avaliacao_criterios_anterior__["a" /* AvaliacaoCriteriosAnteriorPage */], { nivel: nivel });
    };
    AvaliacaoAnteriorPage.prototype.getUrlImagemNivel = function (nivel) {
        return 'http://nqi.ufcspa.edu.br/wiki/selos-niveis/' + nivel + '.png';
    };
    AvaliacaoAnteriorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avaliacao-anterior',template:/*ion-inline-start:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\avaliacao-anterior\avaliacao-anterior.html"*/'<!--\n  Generated template for the AvaliacaoAnteriorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{setor.sigla}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg-image">\n  <div class="browser-compat">\n\n    <ion-card>\n      <ion-row>\n        <ion-col text-center>\n          <ion-card-header><h1 text-center>{{setor?.sigla}}</h1></ion-card-header>\n          <ion-img style="width: 60px; height: 60px; border-radius: 50%;" src={{getUrlImagemNivel(avaliacao.nivelAtingido)}}></ion-img>\n          <div margin-top="10"></div>\n        </ion-col>\n        <ion-col>\n          <div margin-top="10"></div>\n          <h6 ion-text  stacked color="primary">Pretendido:</h6><h2>{{avaliacao?.nivelPretendido}}</h2>\n          <div margin-top="10"></div>\n          <h6 ion-text  stacked color="primary">Atingido: </h6><h2>{{avaliacao?.nivelAtingido}}</h2>\n          <div margin-top="10"></div>\n        </ion-col>\n      </ion-row>\n\n    </ion-card>\n\n    <!--TODO VERIFICAR NOMENCLATURA DE INÍCIO E FIM-->\n\n    <ion-card>\n      <ion-row padding margin-right="10" margin-left="5">\n        <ion-col>\n          <h6 ion-text  stacked color="primary">Início regular:</h6><p>{{avaliacao?.dataInicio}}</p>\n        </ion-col>\n        <ion-col>\n          <h6 ion-text  stacked color="primary">Fim regular:</h6><p>{{avaliacao?.dataFim}}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row padding margin-right="10" margin-left="5" *ngIf="avaliacao.dataInicioAvaliacaoComplementar">\n        <ion-col *ngIf="avaliacao.dataInicioAvaliacaoComplementar">\n          <h6 ion-text  stacked color="primary">Início complementar:</h6><p>{{avaliacao?.dataInicioAvaliacaoComplementar}}</p>\n        </ion-col>\n        <ion-col *ngIf="avaliacao.dataFimAvaliacaoComplementar">\n          <h6 ion-text  stacked color="primary">Fim complementar:</h6><p>{{avaliacao?.dataFimAvaliacaoComplementar}}</p>\n        </ion-col>\n      </ion-row>\n\n    </ion-card>\n\n    <ion-card>\n      <ion-list>\n\n        <button *ngFor="let nivel of corpo" ion-item  (click)="abrirCriterios(nivel)">\n          {{nivel.nome}}\n\n          <ion-icon *ngIf="!(avaliacaoService.newGetCorNivel(nivel) === \'avaliacaoManual\')"    item-end [color]="avaliacaoService.newGetCorNivel(nivel)" name={{avaliacaoService.ICON_ESTRELA}}></ion-icon>\n          <ion-icon *ngIf="(avaliacaoService.newGetCorNivel(nivel) === \'avaliacaoManual\')"       item-end color="avaliacaoAmarelo" name={{avaliacaoService.ICON_AVALIACAO_MANUAL}}></ion-icon>\n\n        </button>\n\n      </ion-list>\n    </ion-card>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\avaliacao-anterior\avaliacao-anterior.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_avaliacao__["a" /* AvaliacaoService */]])
    ], AvaliacaoAnteriorPage);
    return AvaliacaoAnteriorPage;
}());

//# sourceMappingURL=avaliacao-anterior.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvaliacaoCriteriosAnteriorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__avaliacao_itens_anterior_avaliacao_itens_anterior__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_avaliacao__ = __webpack_require__(35);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__avaliacao_itens_anterior_avaliacao_itens_anterior__["a" /* AvaliacaoItensAnteriorPage */], { criterio: criterio });
    };
    AvaliacaoCriteriosAnteriorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avaliacao-criterios-anterior',template:/*ion-inline-start:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\avaliacao-criterios-anterior\avaliacao-criterios-anterior.html"*/'<!--\n  Generated template for the AvaliacaoCriteriosAnteriorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{nivel?.nome}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg-image">\n\n  <div class="browser-compat">\n\n    <!--Avaliação Manual-->\n    <ion-card *ngIf="nivel.avaliacaoManual">\n\n      <ion-card-header margin-left="45" margin-right="45" text-center="">\n        <h2>Avaliação Manual de Nível</h2>\n        <ion-note text-wrap text-center>Avaliado por: {{nivel.usuarioAvaliacaoManual}}</ion-note>\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <div text-center>\n          <ion-col>\n            <ion-icon *ngIf="nivel.avaliacaoManual == \'vermelho\'" class="icon-avaliacao-anterior" name="close-circle"\n                      [color]="nivel.avaliacaoManual == \'vermelho\'? \'avaliacaoVermelho\': \'avaliacaoCinza\'"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-icon *ngIf="nivel.avaliacaoManual == \'amarelo\'" class="icon-avaliacao-anterior" name="help-circle"\n                      [color]="nivel.avaliacaoManual == \'amarelo\'? \'avaliacaoAmarelo\': \'avaliacaoCinza\'"></ion-icon>\n          </ion-col>\n        </div>\n\n      </ion-card-content>\n    </ion-card>\n    <ion-card *ngFor="let criterio of nivel.criterios">\n\n      <!--<ion-card-header>-->\n      <ion-item margin-left="45" padding-right="30" (click)="abrirItensDeAvaliacao(criterio)">\n        <ion-card-title>{{criterio.nome}}</ion-card-title>\n        <ion-icon\n          *ngIf="!(avaliacaoService.newGetCorCriterio(criterio) === \'avaliacaoManual\')"\n          item-end [color]="avaliacaoService.newGetCorCriterio(criterio)" name={{avaliacaoService.ICON_ESTRELA}}></ion-icon>\n        <ion-icon\n          *ngIf="(avaliacaoService.newGetCorCriterio(criterio) === \'avaliacaoManual\')"\n          item-end color="avaliacaoAmarelo" name={{avaliacaoService.ICON_AVALIACAO_MANUAL}}></ion-icon>\n      </ion-item>\n      <!--</ion-card-header>-->\n\n      <ion-card-content (click)="abrirItensDeAvaliacao(criterio)">\n        <p margin-left="25" margin-right="20">{{criterio.descricao}}</p>\n      </ion-card-content>\n    </ion-card>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\avaliacao-criterios-anterior\avaliacao-criterios-anterior.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_avaliacao__["a" /* AvaliacaoService */]])
    ], AvaliacaoCriteriosAnteriorPage);
    return AvaliacaoCriteriosAnteriorPage;
}());

//# sourceMappingURL=avaliacao-criterios-anterior.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvaliacaoItensAnteriorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_avaliacao__ = __webpack_require__(35);
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
        this.avaliadoresVisiveis = [];
    }
    AvaliacaoItensAnteriorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvaliacaoItensAnteriorPage');
    };
    AvaliacaoItensAnteriorPage.prototype.alterarAvaliadoresVisiveis = function (i) {
        if (this.avaliadoresVisiveis[i]) {
            this.avaliadoresVisiveis[i] = !this.avaliadoresVisiveis[i];
        }
        else
            this.avaliadoresVisiveis[i] = true;
    };
    AvaliacaoItensAnteriorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avaliacao-itens-anterior',template:/*ion-inline-start:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\avaliacao-itens-anterior\avaliacao-itens-anterior.html"*/'<!--\n  Generated template for the AvaliacaoItensAnteriorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{criterio?.nome}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg-image">\n  <div class="browser-compat">\n\n    <!--Avaliação Manual-->\n    <ion-card *ngIf="criterio.avaliacaoManual">\n\n      <ion-card-header margin-left="45" margin-right="45" text-center="">\n        <h2>Avaliação Manual de Critério</h2>\n        <ion-note text-wrap>Avaliado por: {{criterio.usuarioAvaliacaoManual}}</ion-note>\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <div text-center>\n          <ion-col>\n            <ion-icon *ngIf="criterio.avaliacaoManual == \'vermelho\'" class="icon-avaliacao-anterior" name="close-circle"\n                      [color]="criterio.avaliacaoManual == \'vermelho\'? \'avaliacaoVermelho\': \'avaliacaoCinza\'"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-icon *ngIf="criterio.avaliacaoManual == \'amarelo\'" class="icon-avaliacao-anterior" name="help-circle"\n                      [color]="criterio.avaliacaoManual == \'amarelo\'? \'avaliacaoAmarelo\': \'avaliacaoCinza\'"></ion-icon>\n          </ion-col>\n        </div>\n\n      </ion-card-content>\n    </ion-card>\n    <ion-card *ngFor="let item of criterio.itensDeAvaliacao; let i = index">\n\n      <ion-card-header>\n\n        <ion-row float-right>\n          <ion-col>\n            <ion-icon *ngIf="item.avaliacao == \'vermelho\'" color="avaliacaoVermelho" name="close-circle"\n                      class="icon-avaliacao-anterior"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-icon *ngIf="item.avaliacao == \'amarelo\'" color="avaliacaoAmarelo" name="help-circle"\n                      class="icon-avaliacao-anterior"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-icon *ngIf="item.avaliacao == \'verde\'" color="avaliacaoVerde" name="checkmark-circle"\n                      class="icon-avaliacao-anterior"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-icon *ngIf="!item.avaliacao" color="avaliacaoCinza" name="ios-close-circle-outline"\n                      class="icon-avaliacao-anterior"></ion-icon>\n          </ion-col>\n        </ion-row>\n\n        <ion-card-title>Item {{i+1}}</ion-card-title>\n\n        <ion-label text-wrap margin-top="10"><p>{{item.descricao}}</p></ion-label>\n\n\n\n        <ion-item no-lines *ngIf="item.observacao">\n          <h6 ion-text color="primary" stacked>Observação</h6>\n          <ion-note class="text-selectable" text-wrap>{{item.observacao}}</ion-note>\n        </ion-item>\n\n        <ion-row float-right *ngIf="item.usuarioAvaliacao">\n            <ion-icon\n              color="primary"\n              style=" width: 30px; height: 30px"\n              (click)="alterarAvaliadoresVisiveis(i)">\n              <ion-icon\n                [name]="avaliadoresVisiveis[i]? \'ios-contacts-outline\' : \'ios-contacts\'">\n              </ion-icon>\n            </ion-icon>\n        </ion-row>\n\n        <ion-row padding *ngIf="avaliadoresVisiveis[i]">\n          <ion-col *ngIf="item.usuarioAvaliacao">\n            <ion-note>Avaliado por:<br>{{item.usuarioAvaliacao}}</ion-note>\n          </ion-col>\n          <ion-col *ngIf="item.usuarioObservacao && item.observacao">\n            <ion-note>Observação por:<br>{{item.usuarioObservacao}}</ion-note>\n          </ion-col>\n        </ion-row>\n\n      </ion-card-header>\n\n    </ion-card>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\avaliacao-itens-anterior\avaliacao-itens-anterior.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_avaliacao__["a" /* AvaliacaoService */]])
    ], AvaliacaoItensAnteriorPage);
    return AvaliacaoItensAnteriorPage;
}());

//# sourceMappingURL=avaliacao-itens-anterior.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvaliacaoCriteriosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_avaliacao__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__avaliacao_itens_avaliacao_itens__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
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
    function AvaliacaoCriteriosPage(navCtrl, navParams, avaliacaoService, angularFireAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.avaliacaoService = avaliacaoService;
        this.angularFireAuth = angularFireAuth;
        this.refNivel = this.navParams.get('refNivel');
        this.nivel = this.navParams.get('nivel');
        //DEBUG
        console.log(this.nivel);
        console.log(this.refNivel);
        this.nivel$ = this.avaliacaoService.getNivel(this.refNivel).snapshotChanges().map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        this.nivelSubscription = this.nivel$.subscribe(function (data) {
            _this.nivel = data;
            if (!_this.avaliacaoService.newMostrarCardAvaliacaoManualNivel(_this.nivel)) {
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
    AvaliacaoCriteriosPage.prototype.ionViewWillLeave = function () {
        if (this.nivelSubscription)
            this.nivelSubscription.unsubscribe();
    };
    AvaliacaoCriteriosPage.prototype.abrirItensDeAvaliacao = function (criterio) {
        var refCriterio = this.refNivel + '/' + 'criterios' + '/' + criterio.key;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__avaliacao_itens_avaliacao_itens__["a" /* AvaliacaoItensPage */], { criterio: criterio, refCriterio: refCriterio });
    };
    AvaliacaoCriteriosPage.prototype.avaliarNivelManual = function (cor) {
        this.nivel.avaliacaoManual = (cor !== 'cinza') ? cor : null;
        this.nivel.usuarioAvaliacaoManual = this.angularFireAuth.auth.currentUser.email;
        this.avaliacaoService.saveNivelAvaliacao(this.nivel, this.refNivel);
    };
    AvaliacaoCriteriosPage.prototype.resetarAvaliacaoManualDeNivel = function () {
        this.nivel.avaliacaoManual = null;
        this.avaliacaoService.saveAvaliacaoManualCriterio(null, this.refNivel);
    };
    AvaliacaoCriteriosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avaliacao-criterios',template:/*ion-inline-start:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\avaliacao-criterios\avaliacao-criterios.html"*/'<!--\n  Generated template for the AvaliacaoCriteriosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{nivel?.nome}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg-image">\n  <div class="browser-compat">\n\n\n    <!--Avaliação Manual-->\n    <ion-card *ngIf="avaliacaoService.newMostrarCardAvaliacaoManualNivel(nivel)">\n\n      <ion-card-header margin-left="45" margin-right="45" text-center="">\n        <h2>Avaliação Manual de Nível</h2>\n        <ion-note text-wrap>É obrigatória a definição manual da avaliação deste nível, devido aos critérios pendentes</ion-note>\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <div text-center>\n          <button\n            ion-button round  small color="avaliacaoVermelho" [outline]="nivel.avaliacaoManual !== \'vermelho\'"\n            (click)="nivel.avaliacaoManual !== \'vermelho\'? avaliarNivelManual(\'vermelho\'): avaliarNivelManual(null)">\n            <ion-icon name="close"></ion-icon>\n          </button>\n\n          <button\n            ion-button round  small color="avaliacaoAmarelo" [outline]="nivel.avaliacaoManual !== \'amarelo\'"\n            (click)="nivel.avaliacaoManual !== \'amarelo\'? avaliarNivelManual(\'amarelo\'): avaliarNivelManual(null)">\n            <ion-icon name="help"></ion-icon>\n          </button>\n        </div>\n\n\n      </ion-card-content>\n\n    </ion-card>\n\n  <ion-card *ngFor="let criterio of criterios$ | async">\n\n    <ion-item margin-left="45" padding-right="30" (click)="abrirItensDeAvaliacao(criterio)" (tap)="abrirItensDeAvaliacao(criterio)">\n      <ion-card-title>{{criterio.nome}}</ion-card-title>\n      <ion-icon item-end [color]="avaliacaoService.newGetCorCriterio(criterio)" [name]="avaliacaoService.newGetAvaliacaoCriterio(criterio) == \'avaliacaoManual\'? avaliacaoService.ICON_AVALIACAO_MANUAL : avaliacaoService.ICON_ESTRELA"></ion-icon>\n    </ion-item>\n\n    <ion-card-content (click)="abrirItensDeAvaliacao(criterio)">\n      <p margin-left="25" margin-right="20">{{criterio.descricao}}</p>\n    </ion-card-content>\n  </ion-card>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\avaliacao-criterios\avaliacao-criterios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_avaliacao__["a" /* AvaliacaoService */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]])
    ], AvaliacaoCriteriosPage);
    return AvaliacaoCriteriosPage;
}());

//# sourceMappingURL=avaliacao-criterios.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvaliacaoItensPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_avaliacao__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
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
    function AvaliacaoItensPage(navCtrl, navParams, avaliacaoService, toastCtrl, alertCtrl, angularFireAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.avaliacaoService = avaliacaoService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.angularFireAuth = angularFireAuth;
        this.refCriterio = this.navParams.get('refCriterio');
        this.criterio = this.navParams.get('criterio');
        this.observacaoVisible = [];
        this.observacaoConforme = [];
        this.triggerObservacaoNaoSalva = [];
        this.criterio$ = this.avaliacaoService.getCriterio(this.refCriterio).snapshotChanges().map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        this.criterioSubscription = this.criterio$.subscribe(function (data) {
            _this.criterio = data;
            if (!_this.avaliacaoService.newMostrarCardAvaliacaoManualCriterio(_this.criterio)) {
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
            if (_this.itensDeAvaliacao != null) {
                for (var i = 0; i < data.length; i++) {
                    //Caso uma observação tenha sido escrita e não salva ela não é apagada
                    if (_this.triggerObservacaoNaoSalva[i] || _this.triggerObservacaoNaoSalva[i] == "") {
                        //let observacaoNaoSalva = this.itensDeAvaliacao[i].observacao;
                        _this.itensDeAvaliacao[i] = data[i];
                        console.log('Observação nao salva no item' + (i + 1) + ':', _this.triggerObservacaoNaoSalva[i]);
                        _this.itensDeAvaliacao[i].observacao = _this.triggerObservacaoNaoSalva[i];
                        //this.itensDeAvaliacao[i].observacao = observacaoNaoSalva;
                    }
                    else
                        _this.itensDeAvaliacao = data;
                }
            }
            else
                _this.itensDeAvaliacao = data;
        });
    }
    AvaliacaoItensPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvaliacaoItensPage');
    };
    AvaliacaoItensPage.prototype.ionViewWillLeave = function () {
        if (this.itensSubscription)
            this.itensSubscription.unsubscribe();
        if (this.criterioSubscription)
            this.criterioSubscription.unsubscribe();
    };
    AvaliacaoItensPage.prototype.avaliarComo = function (item, avaliacao) {
        item.avaliacao = avaliacao;
        item.usuarioAvaliacao = this.angularFireAuth.auth.currentUser.email;
        //DEBUG
        console.log('Avaliado Por: ' + this.angularFireAuth.auth.currentUser.email);
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
        item.usuarioObservacao = this.angularFireAuth.auth.currentUser.email;
        this.avaliacaoService.saveItem(item, this.refCriterio + '/' + 'itensDeAvaliacao');
        /*
        Fecha campos de observação
        caso observação seja vazia
        */
        if (!observacao)
            this.observacaoVisible[index] = false;
        this.triggerObservacaoNaoSalva[index] = null;
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
        this.criterio.usuarioAvaliacaoManual = this.angularFireAuth.auth.currentUser.email;
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
    AvaliacaoItensPage.prototype.backClick = function () {
        var _this = this;
        if (this.checkObservacoesInseridas())
            this.navCtrl.pop();
        else {
            console.log('Faltam observações');
            var alert_1 = this.alertCtrl.create({
                title: 'Observações',
                message: 'É obrigatória a inserção de observações em itens avaliados como Amarelo ou Vermelho, não será possível finalizar a avaliação com observações pendentes.',
                buttons: [
                    {
                        text: 'Voltar mesmo assim',
                        handler: function () {
                            _this.navCtrl.pop();
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel'
                    },
                ]
            });
            alert_1.present();
        }
    };
    AvaliacaoItensPage.prototype.checkObservacoesInseridas = function () {
        var flagEmOrdem = true;
        this.criterio.itensDeAvaliacao.forEach(function (item) {
            if ((item.avaliacao !== 'verde' && item.avaliacao !== undefined) && item.observacao === undefined) {
                flagEmOrdem = false;
                return;
            }
        });
        return flagEmOrdem;
    };
    AvaliacaoItensPage.prototype.observacaoOnChange = function (observacao, i) {
        this.triggerObservacaoNaoSalva[i] = observacao;
    };
    AvaliacaoItensPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avaliacao-itens',template:/*ion-inline-start:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\avaliacao-itens\avaliacao-itens.html"*/'<!--\n  Generated template for the AvaliacaoItensPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <!--<ion-navbar>-->\n    <!--<ion-title>{{criterio?.nome}}</ion-title>-->\n  <!--</ion-navbar>-->\n\n  <ion-navbar hideBackButton>\n    <ion-buttons left>\n      <button ion-button icon-left="" (click)="backClick()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{criterio?.nome}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg-image">\n  <div class="browser-compat">\n\n    <!--Avaliação Manual-->\n    <ion-card *ngIf="avaliacaoService.newMostrarCardAvaliacaoManualCriterio(criterio)">\n\n      <ion-card-header margin-left="45" margin-right="45" text-center="">\n        <h2>Avaliação Manual de Critério</h2>\n        <ion-note text-wrap>É obrigatória a definição manual da avaliação deste critério, devido aos itens pendentes</ion-note>\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <div text-center>\n          <button\n            ion-button round  small color="avaliacaoVermelho" [outline]="criterio.avaliacaoManual !== \'vermelho\'"\n            (click)="criterio.avaliacaoManual !== \'vermelho\'? avaliarCriterioManual(\'vermelho\'): avaliarCriterioManual(null)">\n            <ion-icon name="close"></ion-icon>\n          </button>\n\n          <button\n            ion-button round  small color="avaliacaoAmarelo" [outline]="criterio.avaliacaoManual !== \'amarelo\'"\n            (click)="criterio.avaliacaoManual !== \'amarelo\'? avaliarCriterioManual(\'amarelo\'): avaliarCriterioManual(null)">\n            <ion-icon name="help"></ion-icon>\n          </button>\n        </div>\n\n\n      </ion-card-content>\n\n    </ion-card>\n\n  <ion-card *ngFor="let item of itensDeAvaliacao; let i = index">\n\n    <ion-card-header>\n\n      <ion-card-title>Item {{i+1}}</ion-card-title>\n\n      <ion-label text-wrap> <p>{{item.descricao}}</p></ion-label>\n\n        <button\n          ion-button\n          mini\n          clear\n          icon-only\n          (click)="alterarVisualizacaoObservacao(item,i)">\n          <ion-icon\n            [name]="getIconeShowObservacao(item,i)">\n          </ion-icon>\n        </button>\n\n      <ion-row float-right>\n          <button ion-button  round  small color="avaliacaoVermelho" [outline]="item.avaliacao !== \'vermelho\'"\n                  (click)="item.avaliacao !== \'vermelho\'? avaliarComo(item,\'vermelho\') : avaliarComo(item, null)"\n          >\n            <ion-icon name="close"></ion-icon>\n          </button>\n          <button ion-button  round small  color="avaliacaoAmarelo"  [outline]="item.avaliacao !== \'amarelo\'"\n                  (click)="item.avaliacao !== \'amarelo\'? avaliarComo(item,\'amarelo\') : avaliarComo(item, null)"\n          >\n            <ion-icon name="help"></ion-icon>\n          </button>\n          <button ion-button  round  small color="avaliacaoVerde"    [outline]="item.avaliacao !== \'verde\'"\n                  (click)="item.avaliacao !== \'verde\'? avaliarComo(item,\'verde\') : avaliarComo(item, null)"\n          >\n            <ion-icon name="checkmark"></ion-icon>\n          </button>\n        </ion-row>\n\n      <ion-item no-lines *ngIf="mostrarObservacao(item,i)">\n        <ion-label color="primary" stacked>Observação</ion-label>\n        <ion-textarea autosize class="md-no-underline text-area-observacao" name="observacao" [(ngModel)]="item.observacao" (ionChange)="observacaoOnChange(item.observacao,i)"></ion-textarea>\n      </ion-item>\n\n      <ion-row float-right *ngIf="mostrarObservacao(item,i)">\n        <button ion-button mini round clear (click)="salvarObservacao(item, item.observacao, i)">Salvar</button>\n      </ion-row>\n\n    </ion-card-header>\n\n  </ion-card>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\avaliacao-itens\avaliacao-itens.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_avaliacao__["a" /* AvaliacaoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"]])
    ], AvaliacaoItensPage);
    return AvaliacaoItensPage;
}());

//# sourceMappingURL=avaliacao-itens.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdicaoCriterioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
 * Generated class for the EdicaoCriterioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EdicaoCriterioPage = /** @class */ (function () {
    function EdicaoCriterioPage(navCtrl, navParams, changeRef, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.changeRef = changeRef;
        this.alertCtrl = alertCtrl;
        this.editableOn = false;
        this.criterio = navParams.get('criterio');
        if (!this.criterio.itensDeAvaliacao)
            this.criterio.itensDeAvaliacao = [];
        this.criterio.itensDeAvaliacao = Object.values(this.criterio.itensDeAvaliacao);
    }
    EdicaoCriterioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EdicaoCriterioPage');
    };
    EdicaoCriterioPage.prototype.reorderItems = function (indexes) {
        this.criterio.itensDeAvaliacao = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* reorderArray */])(this.criterio.itensDeAvaliacao, indexes);
    };
    EdicaoCriterioPage.prototype.salvarItensDeAvaliacao = function () {
        console.log('salvar itens');
    };
    EdicaoCriterioPage.prototype.toggleEditable = function () {
        this.editableOn = !this.editableOn;
        this.changeRef.detectChanges();
    };
    EdicaoCriterioPage.prototype.removeItem = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Excluir Item?',
            message: 'Você quer excluir este item de avaliação?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        var index = _this.criterio.itensDeAvaliacao.indexOf(item);
                        if (index !== -1) {
                            _this.criterio.itensDeAvaliacao.splice(index, 1);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    EdicaoCriterioPage.prototype.adicionar = function () {
        var novoItem = { descricao: '', ordem: 1 };
        this.criterio.itensDeAvaliacao.push(novoItem);
        this.changeRef.detectChanges();
    };
    EdicaoCriterioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edicao-criterio',template:/*ion-inline-start:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\edicao-criterio\edicao-criterio.html"*/'<!--\n  Generated template for the EdicaoCriterioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{criterio.nome ? criterio.nome : \'Novo Critério\'}}</ion-title>\n\n    <ion-buttons end>\n      <button showWhen="android,ios" ion-button (click)="toggleEditable()">{{editableOn ? \'Ok\' : \'Editar\'}}</button>\n    </ion-buttons>\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg-image">\n\n  <div class="browser-compat" text-center>\n\n    <ion-card *ngIf="!editableOn">\n      <ion-item>\n        <h2>Descrição</h2>\n        <p text-wrap="">{{criterio.descricao ? criterio.descricao : \'Este critério ainda não possui descrição.\'}}</p>\n      </ion-item>\n    </ion-card>\n\n    <ion-card *ngIf="editableOn">\n      <ion-item>\n        <ion-label color="dark">Nome do Critério</ion-label>\n        <ion-input placeholder="Nome" [value]="criterio.nome" name="nome" [(ngModel)]="criterio.nome"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="dark">Descrição</ion-label>\n        <ion-textarea *ngIf="editableOn" autosize class="md-no-underline text-area-observacao" name="descricao"\n                      [(ngModel)]="criterio.descricao" placeholder="Descrição do novo critério"></ion-textarea>\n      </ion-item>\n\n    </ion-card>\n\n    <ion-card>\n      <ion-list>\n\n        <div *ngIf="!editableOn">\n\n          <ion-item *ngFor="let item of criterio.itensDeAvaliacao">\n            <h2>Item {{criterio.itensDeAvaliacao.indexOf(item) + 1}}</h2>\n            <p text-wrap="">{{item.descricao ? item.descricao : \'Este item não possui descricão\'}}</p>\n          </ion-item>\n        </div>\n\n\n        <div *ngIf="editableOn">\n          <ion-item-group [reorder]="editableOn" (ionItemReorder)="reorderItems($event)">\n\n            <ion-item ion-item *ngFor="let item of criterio.itensDeAvaliacao">\n\n              <ion-label>Item {{criterio.itensDeAvaliacao.indexOf(item) + 1}}</ion-label>\n\n              <ion-textarea style="color: #555555" autosize class="md-no-underline text-area-observacao"\n                            name="descricao"\n                            [(ngModel)]="item.descricao" placeholder="Descrição do novo item"></ion-textarea>\n\n              <button icon-only ion-button item-start color="danger"\n                      (click)="removeItem(item);$event.stopPropagation();this.changeRef.detectChanges();">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n\n            </ion-item>\n          </ion-item-group>\n\n        </div>\n\n\n      </ion-list>\n    </ion-card>\n\n    <ion-row padding>\n      <button showWhen="core" padding class="centralized" ion-button (click)="toggleEditable()">\n        {{editableOn ? \'Confirmar\' : \'Editar\'}}\n      </button>\n\n      <button *ngIf="editableOn" ion-button align-self-end showWhen="core" color="danger" icon-only (click)="adicionar()"><ion-icon name="add"></ion-icon></button>\n    </ion-row>\n\n  </div>\n\n  <ion-fab bottom right *ngIf="editableOn">\n    <button ion-fab color="danger" (click)="adicionar()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\edicao-criterio\edicao-criterio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EdicaoCriterioPage);
    return EdicaoCriterioPage;
}());

//# sourceMappingURL=edicao-criterio.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdicaoNiveisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edicao_nivel_edicao_nivel__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_nivel__ = __webpack_require__(139);
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
 * Generated class for the EdicaoNiveisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EdicaoNiveisPage = /** @class */ (function () {
    function EdicaoNiveisPage(navCtrl, nivelService, navParams, db, changeRef, alertCtrl, toastCtrl) {
        // this.nivelHistorico.nome = "";
        var _this = this;
        this.navCtrl = navCtrl;
        this.nivelService = nivelService;
        this.navParams = navParams;
        this.db = db;
        this.changeRef = changeRef;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.niveis = [];
        this.niveisRollback = [];
        this.editableOn = false;
        this.db.database.ref('niveis').on("value", function (data) {
            if (!data.val())
                return;
            _this.niveis = Object.values(data.val());
            _this.niveisRollback = _this.niveis.slice(); // copia
            _this.changeRef.detectChanges(); // força atualizações quando pega primeira resposta
        }, function () { console.log('ERRO AO BUSCAR NÍVEIS'); return []; });
        var refUltimaOrganizacaoDeNiveis = this.db.database.ref('historicoDeNiveis').orderByChild('dataCriacao').limitToLast(1);
        var self = this;
        refUltimaOrganizacaoDeNiveis.on("value", function (data) {
            _this.nivelHistorico = Object.values(data.val())[0];
            _this.changeRef.detectChanges(); // força atualizações quando pega primeira resposta
            //debug
            console.log(_this.nivelHistorico);
        });
    }
    EdicaoNiveisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EdicaoNiveisPage');
    };
    EdicaoNiveisPage.prototype.reorderItems = function (indexes) {
        this.niveis = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* reorderArray */])(this.niveis, indexes);
    };
    EdicaoNiveisPage.prototype.salvarNiveis = function () {
        var _this = this;
        console.log('salvar nova versão');
        var alert = this.alertCtrl.create({
            title: 'Editar Níveis',
            message: 'Criar uma nova versão da estrutura de níveis ou fazer uma alteração simples na versão já existente?',
            buttons: [
                {
                    text: 'Alteração',
                    handler: function () {
                        _this.salvarAlteracaoSimplesNaEstruturaAtual();
                    }
                },
                {
                    text: 'Nova Versão',
                    handler: function () {
                        _this.salvarNovaVersaoDeNivel();
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
            ]
        });
        alert.present();
    };
    EdicaoNiveisPage.prototype.salvarAlteracaoSimplesNaEstruturaAtual = function () {
        this.nivelService.deleteNiveis();
        this.nivelService.saveNiveis(this.niveis);
        var toast = this.toastCtrl.create({
            message: 'Alteração da versão atual salva com sucesso!',
            duration: 3000,
        });
        toast.present();
    };
    EdicaoNiveisPage.prototype.salvarNovaVersaoDeNivel = function () {
        var _this = this;
        console.log('salvar nova versão');
        var alert = this.alertCtrl.create({
            title: 'Nova Estrutura de Níveis',
            message: 'Defina um nome para a nova estrutura de níveis.',
            inputs: [
                {
                    name: 'nome',
                    placeholder: 'Nome da Estrutra'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Salva',
                    handler: function (data) {
                        _this.nivelService.saveNiveisHistorico(_this.niveis, data.nome);
                        _this.nivelService.deleteNiveis();
                        _this.nivelService.saveNiveis(_this.niveis);
                        var toast = _this.toastCtrl.create({
                            message: 'Nova estrutura de níveis salva com sucesso!',
                            duration: 3000,
                        });
                        toast.present();
                    }
                }
            ]
        });
        alert.present();
    };
    EdicaoNiveisPage.prototype.irParaEdicaoDeNivel = function (nivel) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edicao_nivel_edicao_nivel__["a" /* EdicaoNivelPage */], { nivel: nivel });
    };
    EdicaoNiveisPage.prototype.toggleEditable = function () {
        //debug
        console.log(this.niveis);
        this.editableOn = !this.editableOn;
        this.changeRef.detectChanges();
    };
    EdicaoNiveisPage.prototype.removerNivel = function (nivel) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Excluir Nível?',
            message: 'Você quer excluir este nível?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        var index = _this.niveis.indexOf(nivel);
                        if (index !== -1) {
                            _this.niveis.splice(index, 1);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    EdicaoNiveisPage.prototype.adicionar = function () {
        var novoNivel = { nome: '', criterios: [] };
        this.niveis.push(novoNivel);
        this.changeRef.detectChanges();
    };
    EdicaoNiveisPage.prototype.getUrlImagemNivel = function (nivel) {
        if (nivel === "Novo Nível")
            return 'http://nqi.ufcspa.edu.br/wiki/selos-niveis/' + "Nível 0" + '.png';
        return 'http://nqi.ufcspa.edu.br/wiki/selos-niveis/' + nivel + '.png';
    };
    EdicaoNiveisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edicao-niveis',template:/*ion-inline-start:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\edicao-niveis\edicao-niveis.html"*/'<!--\n  Generated template for the EdicaoNiveisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>M3P</ion-title>\n\n    <ion-buttons end>\n      <button ion-button showWhen="android,ios" (click)="toggleEditable()">{{editableOn? \'Ok\' : \'Editar\'}}</button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding class="bg-image">\n  <div class="browser-compat" text-center>\n\n    <ion-card>\n<ion-item>\n\n      <ion-label align-self-start><strong>Versão</strong></ion-label>\n      <ion-label>{{nivelHistorico? nivelHistorico.nome : ""}}</ion-label>\n\n\n\n</ion-item>\n    </ion-card>\n\n<ion-card>\n  <ion-list>\n    <ion-item-group [reorder]="editableOn" (ionItemReorder)="reorderItems($event)">\n\n      <button ion-item *ngFor="let nivel of niveis" (click)="irParaEdicaoDeNivel(nivel)">\n\n        <ion-avatar item-start="">\n          <img src="{{getUrlImagemNivel(nivel.nome)}}">\n        </ion-avatar>\n\n        <ion-label>{{nivel.nome ? nivel.nome : \'Novo Nível\'}}</ion-label>\n        <button *ngIf="editableOn" icon-only ion-button item-start color="danger" (click)="removerNivel(nivel);$event.stopPropagation();this.changeRef.detectChanges();">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n\n      </button>\n\n    </ion-item-group>\n\n  </ion-list>\n</ion-card>\n\n    <ion-row padding>\n      <button showWhen="core" padding class="centralized" ion-button (click)="toggleEditable()">\n        {{editableOn ? \'Confirmar\' : \'Editar\'}}\n      </button>\n\n      <button *ngIf="editableOn" ion-button align-self-end showWhen="core" color="danger" icon-only (click)="adicionar()"><ion-icon name="add"></ion-icon></button>\n    </ion-row>\n\n    <ion-row padding-top="100px">\n      <button padding class="centralized" ion-button (click)="salvarNiveis()">\n        Salvar Níveis\n      </button>\n    </ion-row>\n\n  </div>\n\n  <ion-fab bottom right *ngIf="editableOn">\n    <button showWhen="android,ios" ion-fab color="danger" (click)="adicionar()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\edicao-niveis\edicao-niveis.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_nivel__["a" /* NivelService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], EdicaoNiveisPage);
    return EdicaoNiveisPage;
}());

//# sourceMappingURL=edicao-niveis.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdicaoNivelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edicao_criterio_edicao_criterio__ = __webpack_require__(170);
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
 * Generated class for the EdicaoNivelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EdicaoNivelPage = /** @class */ (function () {
    function EdicaoNivelPage(navCtrl, navParams, changeRef, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.changeRef = changeRef;
        this.alertCtrl = alertCtrl;
        this.editableOn = false;
        this.nivel = navParams.get('nivel');
        if (!this.nivel.criterios)
            this.nivel.criterios = [];
        this.nivel.criterios = Object.values(this.nivel.criterios);
        console.log(this.nivel);
    }
    EdicaoNivelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EdicaoNivelPage');
    };
    EdicaoNivelPage.prototype.reorderItems = function (indexes) {
        this.nivel.criterios = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* reorderArray */])(this.nivel.criterios, indexes);
    };
    EdicaoNivelPage.prototype.salvarCriterios = function () {
        console.log('salvar criterios');
    };
    EdicaoNivelPage.prototype.irParaEdicaoDeCriterio = function (criterio) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edicao_criterio_edicao_criterio__["a" /* EdicaoCriterioPage */], { criterio: criterio });
    };
    EdicaoNivelPage.prototype.toggleEditable = function () {
        this.editableOn = !this.editableOn;
        this.changeRef.detectChanges();
    };
    EdicaoNivelPage.prototype.removerCriterio = function (criterio) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Excluir Critério?',
            message: 'Você quer excluir este critério?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        var index = _this.nivel.criterios.indexOf(criterio);
                        if (index !== -1) {
                            _this.nivel.criterios.splice(index, 1);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    EdicaoNivelPage.prototype.adicionar = function () {
        var novoCriterio = { nome: '', descricao: '', itensDeAvaliacao: [] };
        this.nivel.criterios.push(novoCriterio);
        this.changeRef.detectChanges();
    };
    EdicaoNivelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edicao-nivel',template:/*ion-inline-start:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\edicao-nivel\edicao-nivel.html"*/'<!--\n  Generated template for the EdicaoNivelPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{nivel.nome ? nivel.nome : \'Novo Nível\'}}</ion-title>\n\n    <ion-buttons end>\n      <button showWhen="android,ios"  ion-button (click)="toggleEditable()">{{editableOn ? \'Ok\' : \'Editar\'}}</button>\n    </ion-buttons>\n\n\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding class="bg-image">\n\n  <div class="browser-compat" text-center>\n\n    <ion-card *ngIf="editableOn">\n      <ion-item>\n        <ion-label color="dark">Nome do Nível</ion-label>\n        <ion-input placeholder="Nome" [value]="nivel.nome" name="nome" [(ngModel)]="nivel.nome"></ion-input>\n      </ion-item>\n    </ion-card>\n\n<ion-card>\n  <ion-list>\n    <ion-item-group [reorder]="editableOn" (ionItemReorder)="reorderItems($event)">\n\n      <button ion-item *ngFor="let criterio of nivel.criterios" (click)="irParaEdicaoDeCriterio(criterio)">\n        <ion-label>{{criterio.nome ? criterio.nome : \'Novo Critério\'}}</ion-label>\n        <button *ngIf="editableOn" icon-only ion-button item-start color="danger" (click)="removerCriterio(criterio);$event.stopPropagation();this.changeRef.detectChanges();">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n\n      </button>\n\n    </ion-item-group>\n\n  </ion-list>\n</ion-card>\n\n    <ion-row padding>\n      <button showWhen="core" padding class="centralized" ion-button (click)="toggleEditable()">\n        {{editableOn ? \'Confirmar\' : \'Editar\'}}\n      </button>\n\n      <button *ngIf="editableOn" ion-button align-self-end showWhen="core" color="danger" icon-only (click)="adicionar()"><ion-icon name="add"></ion-icon></button>\n    </ion-row>\n\n  </div>\n\n  <ion-fab bottom right *ngIf="editableOn">\n    <button showWhen="android,ios" ion-fab color="danger" (click)="adicionar()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\edicao-nivel\edicao-nivel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EdicaoNivelPage);
    return EdicaoNivelPage;
}());

//# sourceMappingURL=edicao-nivel.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setor__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastro_setor_cadastro_setor__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__setor_setor__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_compat_add_operator_map__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_compat_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_compat_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(141);
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
    function SetoresPage(navCtrl, navParams, setorService, viewCtrl, angularFireAuth, alertCtrl, app, storage, cd) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.setorService = setorService;
        this.viewCtrl = viewCtrl;
        this.angularFireAuth = angularFireAuth;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.storage = storage;
        this.cd = cd;
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
                return ((setor.sigla.toLowerCase().includes(ev.target.value.toLowerCase())) ||
                    (setor.nome.toLowerCase().includes(ev.target.value.toLowerCase())) ||
                    ((setor.vinculo && setor.vinculo.toLowerCase().includes(ev.target.value.toLowerCase()))));
            });
        });
        // Adicionado após identificar problemas na busca, força a identificação de atualizações do angular.
        this.cd.detectChanges();
    };
    SetoresPage.prototype.onCancel = function () {
        this.atualizaListaDeSetores();
    };
    SetoresPage.prototype.atualizaListaDeSetores = function () {
        this.setoresFiltrados$ = this.setores$;
    };
    SetoresPage.prototype.getUrlImagemNivel = function (nivel) {
        return 'http://nqi.ufcspa.edu.br/wiki/selos-niveis/' + nivel + '.png';
    };
    SetoresPage.prototype.logoff = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Logout',
            message: 'Deseja fazer logout da conta <br> <strong>' + this.angularFireAuth.auth.currentUser.email + '<strong>',
            buttons: [
                {
                    text: 'Fazer logout',
                    handler: function () {
                        _this.angularFireAuth.auth.signOut().then(function () {
                            _this.removeUsuarioLocal();
                            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
                        });
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                },
            ]
        });
        alert.present();
    };
    SetoresPage.prototype.removeUsuarioLocal = function () {
        // set a key/value
        this.storage.remove('user');
    };
    SetoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setores',template:/*ion-inline-start:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\setores\setores.html"*/'<!--\n  Generated template for the SetoresPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <!--Botão de adicionar no iOS-->\n    <ion-buttons start>\n      <button ion-button icon-only (click)="logoff()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>Setores</ion-title>\n\n    <!--Botão de adicionar no iOS-->\n    <ion-buttons hideWhen="android, core" end>\n      <button ion-button icon-only (click)="addSetor()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <!--Barra de Pesquisa-->\n  <ion-toolbar>\n    <ion-searchbar\n      class="browser-compat"\n      placeholder="Procurar"\n      [(ngModel)]="myInput"\n      [showCancelButton]="shouldShowCancel"\n      (ionInput)="filterItems($event)"\n      (ionCancel)="onCancel()">\n    </ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg-image">\n\n  <div class="browser-compat">\n    <ion-list>\n      <ion-card (click)="irParaPaginaDoSetor(setor)" *ngFor="let setor of setoresFiltrados$ | async" >\n\n        <div *ngIf="setor?.ativo">\n          <ion-item>\n            <ion-avatar *ngIf="setor.nivel" icone-estrela item-end>\n              <img src={{getUrlImagemNivel(setor.nivel)}}>\n            </ion-avatar>\n            <h2>{{setor.sigla}}</h2>\n            <p>{{setor.nome}}</p>\n            <div *ngIf="setor.vinculo" margin-top="1">\n              <p>{{setor.vinculo}}</p>\n            </div>\n          </ion-item>\n\n          <ion-card-content>\n            <ion-note *ngIf="!setor.sendoAvaliado">{{setor.ultimaAvaliacao? \'Última Avaliação: \'+setor.ultimaAvaliacao : \'Setor ainda não avaliado\'}}</ion-note>\n            <ion-note *ngIf="setor.sendoAvaliado" color="danger">Avaliação em andamento</ion-note>\n          </ion-card-content>\n        </div>\n\n      </ion-card>\n    </ion-list>\n\n    <button padding showWhen="core" class="centralized" ion-button (click)="addSetor()">\n      Adicionar Setor\n    </button>\n  </div>\n\n  <ion-fab bottom right>\n    <button ion-fab showWhen="android" (click)="addSetor()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\setores\setores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_setor__["a" /* SetorService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], SetoresPage);
    return SetoresPage;
}());

//# sourceMappingURL=setores.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_setor_cadastro_setor__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_setor__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__avaliacao_avaliacao__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pre_avaliacao_pre_avaliacao__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_avaliacao__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__avaliacao_anterior_avaliacao_anterior__ = __webpack_require__(165);
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
            selector: 'page-setor',template:/*ion-inline-start:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\setor\setor.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <!--<ion-title>{{setor.sigla}}</ion-title>-->\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="editarSetor()">\n        <ion-icon name="create"></ion-icon>\n      </button>\n\n      <button ion-button icon-only (click)="excluirSetor()">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content pading class="bg-image">\n\n  <div padding class="browser-compat">\n\n    <ion-list-header showWhen="ios" text-center padding ion-text text-wrap><h2>{{setor.nome}}</h2><br><p>({{setor.sigla}})</p></ion-list-header>\n\n    <ion-card padding  class="nome-setor" hideWhen="ios">\n      <h2 text-center text-wrap>{{setor.nome}}</h2>\n      <p text-center>({{setor.sigla}})</p>\n    </ion-card>\n\n    <ion-card>\n\n      <ion-list>\n\n        <ion-item *ngIf="setor.vinculo">\n          <p>Vínculo</p>\n          <h2>{{setor.vinculo}}</h2>\n        </ion-item>\n\n        <ion-item>\n          <p>Nível Atual</p>\n          <h2>{{setor.nivel? setor.nivel : "NA"}}</h2>\n        </ion-item>\n\n        <ion-item>\n          <p>Líder de Processos</p>\n          <h2>{{setor.lider? setor.lider : "Não especificado"}}</h2>\n        </ion-item>\n\n        <ion-item>\n          <p>Email do Líder</p>\n          <h2>{{setor.emailLider? setor.emailLider : "Não especificado"}}</h2>\n        </ion-item>\n\n        <ion-item>\n          <p>Última Avaliação</p>\n          <h2>{{setor.ultimaAvaliacao? setor.ultimaAvaliacao : "NA"}}</h2>\n        </ion-item>\n\n      </ion-list>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        Histórico de Avaliações\n      </ion-card-header>\n\n      <ion-item *ngIf="(historico$ | async)?.length==0"><p text-center>O setor não possui avaliações anteriores</p></ion-item>\n\n      <ion-list>\n\n        <div *ngFor="let avaliacao of historico$ | async | reverse; let i = index">\n          <ion-item *ngIf="mostrarHistoricoCompleto || (i <= 2)">\n\n            <!--Caso ja tenha finalizado-->\n            <div (click)="(avaliacao.dataFim && !avaliacao.dataInicioAvaliacaoComplementar) || (avaliacao.dataInicioAvaliacaoComplementar && avaliacao.dataFimAvaliacaoComplementar)? verAvaliacaoAnterior(avaliacao):avaliarSetor()">\n              <h3 ion-text [color]="(avaliacao.dataFim && !avaliacao.dataInicioAvaliacaoComplementar) || (avaliacao.dataInicioAvaliacaoComplementar && avaliacao.dataFimAvaliacaoComplementar)? \'dark\' : \'danger\'">{{(avaliacao.dataFim && !avaliacao.dataInicioAvaliacaoComplementar) || (avaliacao.dataInicioAvaliacaoComplementar && avaliacao.dataFimAvaliacaoComplementar)? avaliacao.nivelAtingido : \'Em andamento\'}}</h3>\n              <p>{{avaliacao.dataFim? avaliacao.dataFim: avaliacao.dataInicio}}</p>\n            </div>\n\n\n\n            <!--Botão de avaliação complementar-->\n            <button small round outline ion-button item-end icon-right *ngIf="(avaliacao.dataFim && !avaliacao.dataInicioAvaliacaoComplementar) && (i==0)" (click)="iniciarAvaliacaoComplementarClick(avaliacao)">\n              Complementar\n              <ion-icon color="danger" name="refresh"></ion-icon>\n            </button>\n\n          </ion-item>\n\n        </div>\n\n\n      </ion-list>\n\n      <button ion-button clear small full *ngIf="(historico$ | async)?.length>3"\n              (click)="verMaisMenosClick()">{{btnVerMaisMenosContent}}</button>\n\n    </ion-card>\n  </div>\n\n\n  <ion-fab bottom right>\n    <button ion-fab color="danger" (click)="avaliarSetor()"><ion-icon name="clipboard"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\setor\setor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__services_setor__["a" /* SetorService */],
            __WEBPACK_IMPORTED_MODULE_6__services_avaliacao__["a" /* AvaliacaoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], SetorPage);
    return SetorPage;
}());

//# sourceMappingURL=setor.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreAvaliacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_nivel__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_avaliacao__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_setor__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__avaliacao_avaliacao__ = __webpack_require__(91);
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
        // Método não faz nada. Está aqui para que não
        // seja gerada a mensagem de desuso da variável
        // 'setorService' no deploy.
        this.setorService.exist();
        //
        this.botaoInicialDisabled = true;
        this.niveis$ = this.nivelService
            .getAllasList() //DB LIST
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
            selector: 'page-pre-avaliacao',template:/*ion-inline-start:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\pre-avaliacao\pre-avaliacao.html"*/'<!--\n  Generated template for the PreAvaliacaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Nova Avaliação</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg-image">\n  <div class="browser-compat">\n\n  <ion-card>\n\n      <ion-card-header>\n        Nível Pretendido\n      </ion-card-header>\n\n    <ion-card-content>\n      <ion-list radio-group [(ngModel)]="nivelPretendido">\n\n        <ion-item *ngFor="let nivel of niveis$ | async; let i = index">\n\n          <ion-label>{{nivel.nome}}</ion-label>\n          <ion-radio value={{nivel.nome}} (ionSelect)="botaoInicialDisabled = false"></ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n    </ion-card-content>\n\n  </ion-card>\n\n  <button ion-button round class="centralized" [disabled]="botaoInicialDisabled" (click)="iniciarAvaliacao()">Iniciar Avaliação</button>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\pre-avaliacao\pre-avaliacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_nivel__["a" /* NivelService */],
            __WEBPACK_IMPORTED_MODULE_4__services_avaliacao__["a" /* AvaliacaoService */],
            __WEBPACK_IMPORTED_MODULE_5__services_setor__["a" /* SetorService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], PreAvaliacaoPage);
    return PreAvaliacaoPage;
}());

//# sourceMappingURL=pre-avaliacao.js.map

/***/ }),

/***/ 214:
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
webpackEmptyAsyncContext.id = 214;

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/avaliacao-anterior/avaliacao-anterior.module": [
		523,
		14
	],
	"../pages/avaliacao-criterios-anterior/avaliacao-criterios-anterior.module": [
		524,
		13
	],
	"../pages/avaliacao-criterios/avaliacao-criterios.module": [
		525,
		12
	],
	"../pages/avaliacao-itens-anterior/avaliacao-itens-anterior.module": [
		526,
		11
	],
	"../pages/avaliacao-itens/avaliacao-itens.module": [
		527,
		10
	],
	"../pages/avaliacao/avaliacao.module": [
		528,
		9
	],
	"../pages/cadastro-setor/cadastro-setor.module": [
		529,
		8
	],
	"../pages/edicao-criterio/edicao-criterio.module": [
		530,
		7
	],
	"../pages/edicao-niveis/edicao-niveis.module": [
		531,
		6
	],
	"../pages/edicao-nivel/edicao-nivel.module": [
		532,
		5
	],
	"../pages/login/login.module": [
		533,
		4
	],
	"../pages/nivel/nivel.module": [
		534,
		0
	],
	"../pages/pre-avaliacao/pre-avaliacao.module": [
		535,
		3
	],
	"../pages/setor/setor.module": [
		536,
		2
	],
	"../pages/setores/setores.module": [
		537,
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
webpackAsyncContext.id = 256;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toaster; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(14);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* ToastController */]])
    ], Toaster);
    return Toaster;
}());

//# sourceMappingURL=toaster.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(444);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvaliacaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
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
        // Os ícones foram definidos com constantes
        // para facilitar a troca de identidade visual
        this.ICON_AVALIACAO_MANUAL = "md-alert";
        this.ICON_ESTRELA = "star";
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
        refItem.update({ usuarioAvaliacao: item.usuarioAvaliacao });
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
    /*
      Entrada: Critério com itens de avaliação (em formato de observable)
  
      Possíveis saídas:
        - "avaliacaoVerde"
        - "avaliacaoAmarelo"
        - "avaliacaoVermelho"
        - "avaliacao_manual"
        - "avaliacaoCinza"
  
     */
    AvaliacaoService.prototype.newGetAvaliacaoCriterio = function (criterio) {
        //Transformar em array
        criterio.itensDeAvaliacao = Object.keys(criterio.itensDeAvaliacao).map(function (i) {
            var value = criterio.itensDeAvaliacao[i];
            value.key = i;
            return value;
        });
        var avaliacoes = [];
        criterio.itensDeAvaliacao.forEach(function (item) { avaliacoes.push(item.avaliacao); });
        if (this.isInArray(undefined, avaliacoes))
            return "avaliacaoCinza";
        if (this.isInArray("vermelho", avaliacoes))
            return "avaliacaoVermelho";
        if (this.isInArray("amarelo", avaliacoes) && !criterio.avaliacaoManual)
            return "avaliacaoManual";
        if (this.isInArray("amarelo", avaliacoes) && criterio.avaliacaoManual)
            return criterio.avaliacaoManual == "vermelho" ? "avaliacaoVermelho" : "avaliacaoAmarelo";
        return "avaliacaoVerde";
    };
    AvaliacaoService.prototype.newGetCorCriterio = function (criterio) {
        var avaliacao = this.newGetAvaliacaoCriterio(criterio);
        return avaliacao == "avaliacaoManual" ? "avaliacaoAmarelo" : avaliacao;
    };
    /*
    Entrada: Nível com critérios (em formato de observable)
  
    Possíveis saídas:
      - "avaliacaoVerde"
      - "avaliacaoAmarelo"
      - "avaliacaoVermelho"
      - "avaliacao_manual"
      - "avaliacaoCinza"
  
   */
    AvaliacaoService.prototype.newGetAvaliacaoNivel = function (nivel) {
        var _this = this;
        //Transformar em array
        nivel.criterios = Object.keys(nivel.criterios).map(function (i) {
            var value = nivel.criterios[i];
            value.key = i;
            return value;
        });
        var avaliacoes = [];
        nivel.criterios.forEach(function (item) { avaliacoes.push(_this.newGetAvaliacaoCriterio(item)); });
        if (this.isInArray("avaliacaoCinza", avaliacoes))
            return "avaliacaoCinza";
        if (this.isInArray("avaliacaoManual", avaliacoes))
            return "avaliacaoManual";
        if (this.isInArray("avaliacaoVermelho", avaliacoes))
            return "avaliacaoVermelho";
        if (this.isInArray("avaliacaoAmarelo", avaliacoes) && !nivel.avaliacaoManual)
            return "avaliacaoManual";
        if (this.isInArray("avaliacaoAmarelo", avaliacoes) && nivel.avaliacaoManual)
            return nivel.avaliacaoManual == "vermelho" ? "avaliacaoVermelho" : "avaliacaoAmarelo";
        return "avaliacaoVerde";
    };
    AvaliacaoService.prototype.newGetCorNivel = function (nivel) {
        var avaliacao = this.newGetAvaliacaoNivel(nivel);
        return avaliacao == "avaliacaoManual" ? "avaliacaoAmarelo" : avaliacao;
    };
    AvaliacaoService.prototype.newMostrarCardAvaliacaoManualCriterio = function (criterio) {
        /*
        * Caso o critério chegue vazio esse método não é executado
        */
        if (!criterio.itensDeAvaliacao)
            return;
        //Transformar em array
        criterio.itensDeAvaliacao = Object.keys(criterio.itensDeAvaliacao).map(function (i) {
            var value = criterio.itensDeAvaliacao[i];
            value.key = i;
            return value;
        });
        var avaliacoes = [];
        criterio.itensDeAvaliacao.forEach(function (item) { avaliacoes.push(item.avaliacao); });
        if (this.isInArray(undefined, avaliacoes))
            return false;
        if (this.isInArray("vermelho", avaliacoes))
            return false;
        if (this.isInArray("amarelo", avaliacoes))
            return true;
        return false;
    };
    AvaliacaoService.prototype.newMostrarCardAvaliacaoManualNivel = function (nivel) {
        var _this = this;
        //Transformar em array
        nivel.criterios = Object.keys(nivel.criterios).map(function (i) {
            var value = nivel.criterios[i];
            value.key = i;
            return value;
        });
        var avaliacoes = [];
        nivel.criterios.forEach(function (item) { avaliacoes.push(_this.newGetAvaliacaoCriterio(item)); });
        if (this.isInArray("avaliacaoCinza", avaliacoes))
            return false;
        if (this.isInArray("avaliacaoManual", avaliacoes))
            return false;
        if (this.isInArray("avaliacaoVermelho", avaliacoes))
            return false;
        if (this.isInArray("avaliacaoAmarelo", avaliacoes))
            return true;
        return false;
    };
    AvaliacaoService.prototype.isInArray = function (value, array) {
        return array.indexOf(value) > -1;
    };
    AvaliacaoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"]])
    ], AvaliacaoService);
    return AvaliacaoService;
}());

//# sourceMappingURL=avaliacao.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_setores_setores__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_pipes__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__firebase_credentials__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_setor__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cadastro_setor_cadastro_setor__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_setor_setor__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_pre_avaliacao_pre_avaliacao__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_avaliacao_avaliacao__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_nivel__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_avaliacao__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_toaster__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_avaliacao_criterios_avaliacao_criterios__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_avaliacao_itens_avaliacao_itens__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_avaliacao_anterior_avaliacao_anterior__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_avaliacao_criterios_anterior_avaliacao_criterios_anterior__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_avaliacao_itens_anterior_avaliacao_itens_anterior__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_app_minimize__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_storage__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_autosize_autosize__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_edicao_niveis_edicao_niveis__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_edicao_nivel_edicao_nivel__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_edicao_criterio_edicao_criterio__ = __webpack_require__(170);
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
                __WEBPACK_IMPORTED_MODULE_13__pages_cadastro_setor_cadastro_setor__["a" /* CadastroSetorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_setor_setor__["a" /* SetorPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pre_avaliacao_pre_avaliacao__["a" /* PreAvaliacaoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_avaliacao_avaliacao__["a" /* AvaliacaoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_avaliacao_criterios_avaliacao_criterios__["a" /* AvaliacaoCriteriosPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_avaliacao_itens_avaliacao_itens__["a" /* AvaliacaoItensPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_avaliacao_anterior_avaliacao_anterior__["a" /* AvaliacaoAnteriorPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_avaliacao_criterios_anterior_avaliacao_criterios_anterior__["a" /* AvaliacaoCriteriosAnteriorPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_avaliacao_itens_anterior_avaliacao_itens_anterior__["a" /* AvaliacaoItensAnteriorPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_29__components_autosize_autosize__["a" /* Autosize */],
                __WEBPACK_IMPORTED_MODULE_30__pages_edicao_niveis_edicao_niveis__["a" /* EdicaoNiveisPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_edicao_nivel_edicao_nivel__["a" /* EdicaoNivelPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_edicao_criterio_edicao_criterio__["a" /* EdicaoCriterioPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/avaliacao-anterior/avaliacao-anterior.module#AvaliacaoAnteriorPageModule', name: 'AvaliacaoAnteriorPage', segment: 'avaliacao-anterior', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/avaliacao-criterios-anterior/avaliacao-criterios-anterior.module#AvaliacaoCriteriosAnteriorPageModule', name: 'AvaliacaoCriteriosAnteriorPage', segment: 'avaliacao-criterios-anterior', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/avaliacao-criterios/avaliacao-criterios.module#AvaliacaoCriteriosPageModule', name: 'AvaliacaoCriteriosPage', segment: 'avaliacao-criterios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/avaliacao-itens-anterior/avaliacao-itens-anterior.module#AvaliacaoItensAnteriorPageModule', name: 'AvaliacaoItensAnteriorPage', segment: 'avaliacao-itens-anterior', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/avaliacao-itens/avaliacao-itens.module#AvaliacaoItensPageModule', name: 'AvaliacaoItensPage', segment: 'avaliacao-itens', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/avaliacao/avaliacao.module#AvaliacaoPageModule', name: 'AvaliacaoPage', segment: 'avaliacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-setor/cadastro-setor.module#CadastroSetorPageModule', name: 'CadastroSetorPage', segment: 'cadastro-setor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edicao-criterio/edicao-criterio.module#EdicaoCriterioPageModule', name: 'EdicaoCriterioPage', segment: 'edicao-criterio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edicao-niveis/edicao-niveis.module#EdicaoNiveisPageModule', name: 'EdicaoNiveisPage', segment: 'edicao-niveis', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edicao-nivel/edicao-nivel.module#EdicaoNivelPageModule', name: 'EdicaoNivelPage', segment: 'edicao-nivel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel/nivel.module#NivelPageModule', name: 'NivelPage', segment: 'nivel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pre-avaliacao/pre-avaliacao.module#PreAvaliacaoPageModule', name: 'PreAvaliacaoPage', segment: 'pre-avaliacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setor/setor.module#SetorPageModule', name: 'SetorPage', segment: 'setor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setores/setores.module#SetoresPageModule', name: 'SetoresPage', segment: 'setores', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_28__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_11__firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_8_ngx_pipes__["a" /* NgPipesModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_setores_setores__["a" /* SetoresPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cadastro_setor_cadastro_setor__["a" /* CadastroSetorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_setor_setor__["a" /* SetorPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pre_avaliacao_pre_avaliacao__["a" /* PreAvaliacaoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_avaliacao_avaliacao__["a" /* AvaliacaoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_avaliacao_criterios_avaliacao_criterios__["a" /* AvaliacaoCriteriosPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_avaliacao_itens_avaliacao_itens__["a" /* AvaliacaoItensPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_avaliacao_anterior_avaliacao_anterior__["a" /* AvaliacaoAnteriorPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_avaliacao_criterios_anterior_avaliacao_criterios_anterior__["a" /* AvaliacaoCriteriosAnteriorPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_avaliacao_itens_anterior_avaliacao_itens_anterior__["a" /* AvaliacaoItensAnteriorPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_edicao_niveis_edicao_niveis__["a" /* EdicaoNiveisPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_edicao_nivel_edicao_nivel__["a" /* EdicaoNivelPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_edicao_criterio_edicao_criterio__["a" /* EdicaoCriterioPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_26_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_12__services_setor__["a" /* SetorService */],
                __WEBPACK_IMPORTED_MODULE_17__services_nivel__["a" /* NivelService */],
                __WEBPACK_IMPORTED_MODULE_18__services_avaliacao__["a" /* AvaliacaoService */],
                __WEBPACK_IMPORTED_MODULE_19__services_toaster__["a" /* Toaster */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_app_minimize__["a" /* AppMinimize */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_minimize__ = __webpack_require__(310);
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
    function MyApp(platform, statusBar, splashScreen, af, appMinimize, app) {
        var _this = this;
        this.appMinimize = appMinimize;
        this.app = app;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // Listen for auth sub
            _this.rootPage = af.auth.currentUser ? __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */] : __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
            /*
            * Remove o fechamento do app quando
            * o botão 'back' é clicado na página inicial
            * */
            platform.registerBackButtonAction(function () {
                var nav = app.getActiveNavs()[0];
                var activeView = nav.getActive();
                if (activeView.name === "LoginPage" || activeView.name === "SetoresPage") {
                    /** minimize the app in background **/
                    _this.appMinimize.minimize();
                }
                else {
                    nav.pop();
                }
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_minimize__["a" /* AppMinimize */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
// DESENVOLVIMENTO
// export const FIREBASE_CONFIG  = {
//   apiKey: "AIzaSyCyARgZSkCnufQO11Pg-MSIaqZ0wz30ek0",
//   authDomain: "m3p-app.firebaseapp.com",
//   databaseURL: "https://m3p-app.firebaseio.com",
//   projectId: "m3p-app",
//   storageBucket: "",
//   messagingSenderId: "414887828407"
// };
// // //HOMOLOGAÇÃO
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyCUxGp5aBxzmNwmswp0OorPk8BBJN-kHII",
    authDomain: "m3p-app-homologacao.firebaseapp.com",
    databaseURL: "https://m3p-app-homologacao.firebaseio.com",
    projectId: "m3p-app-homologacao",
    storageBucket: "m3p-app-homologacao.appspot.com",
    messagingSenderId: "617182582356"
};
// !!!!!! UTILIZAR SOMENTE PARA DEPLOY !!!!!!
//
// //PRODUÇÃO
// export const FIREBASE_CONFIG  = {
//   apiKey: "AIzaSyCqueAyPhnNRabWoIztAWuTSwdjqR1b3kc",
//   authDomain: "m3p-app-producao.firebaseapp.com",
//   databaseURL: "https://m3p-app-producao.firebaseio.com",
//   projectId: "m3p-app-producao",
//   storageBucket: "",
//   messagingSenderId: "421496892224"
// };
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Autosize; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Autosize = /** @class */ (function () {
    function Autosize(element) {
        this.element = element;
    }
    Autosize.prototype.onInput = function (textArea) {
        this.adjust();
    };
    Autosize.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.adjust(); }, 0);
    };
    Autosize.prototype.adjust = function () {
        var textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.overflow = 'hidden';
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + "px";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLTextAreaElement]),
        __metadata("design:returntype", void 0)
    ], Autosize.prototype, "onInput", null);
    Autosize = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: 'ion-textarea[autosize]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], Autosize);
    return Autosize;
}());

//# sourceMappingURL=autosize.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
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
        this.setoresRef = this.db.list('setores', function (ref) { return ref.orderByChild('sigla'); });
    }
    SetorService.prototype.getAll = function () {
        return this.setoresRef;
    };
    SetorService.prototype.save = function (setor) {
        if (setor.key == null) {
            setor.ativo = true;
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
        setor.ativo = false;
        this.save(setor);
        console.log("FIREBASE: Setor Excluído:");
        console.log(setor);
    };
    SetorService.prototype.exist = function () {
        // Não faz nada (ver uso)
    };
    SetorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"]])
    ], SetorService);
    return SetorService;
}());

//# sourceMappingURL=setor.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvaliacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__avaliacao_criterios_avaliacao_criterios__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_setor__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_avaliacao__ = __webpack_require__(35);
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
    function AvaliacaoPage(navCtrl, navParams, alertCtrl, setorService, viewCtrl, toastCtrl, avaliacaoService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.setorService = setorService;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.avaliacaoService = avaliacaoService;
        this.modalCtrl = modalCtrl;
        this.setor = this.navParams.get('setor');
        this.avaliacaoRef = __assign({}, this.navParams.get('avaliacao')); // cópia
    }
    AvaliacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvaliacaoPage');
    };
    AvaliacaoPage.prototype.ionViewWillUnload = function () {
        if (this.avaliacaoSubscription)
            this.avaliacaoSubscription.unsubscribe();
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
        var nivelAtingido = this.getNivelAtingidoAutomaticamente();
        var todosItensAvaliados = this.verificarTodosItensAvaliados();
        if (todosItensAvaliados) {
            var observacoesConformidade = this.verificarObservacoes(true);
            var avaliacoesManuaisConformidade = this.verificarAvaliacoesManuais();
            if (observacoesConformidade && avaliacoesManuaisConformidade)
                this.finalizarAvaliacaoVerificandoConformidade(nivelAtingido);
        }
    };
    AvaliacaoPage.prototype.finalizarAvaliacaoVerificandoConformidade = function (nivelAtingido) {
        var _this = this;
        var mensagemFinalizacao = 'Deseja finalizar avaliação do setor? <br><br> o nível atingido será: ' + '<strong>' + nivelAtingido + '<strong>';
        if (this.objAvaliacao.dataInicioAvaliacaoComplementar)
            mensagemFinalizacao = 'Deseja finalizar a avaliação complementar do setor? <br><br> o nível atingido será: ' + '<strong>' + nivelAtingido + '<strong> <br><br> <strong>Ao finalizar agora a avaliação não poderá ser reaberta.</strong>';
        var alertFinalizar = this.alertCtrl.create({
            title: 'Finalizar avaliação',
            message: mensagemFinalizacao,
            buttons: [
                {
                    text: 'Finalizar',
                    handler: function () {
                        _this.finalizarAvaliacao(nivelAtingido);
                        console.log('Avaliação do setor ' + _this.setor.sigla + ' finalizada.');
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alertFinalizar.present();
    };
    AvaliacaoPage.prototype.finalizarAvaliacao = function (nivelAtingido) {
        this.objAvaliacao.nivelAtingido = nivelAtingido;
        if (this.objAvaliacao.dataInicioAvaliacaoComplementar)
            this.objAvaliacao.dataFimAvaliacaoComplementar = this.avaliacaoService.getDataAgora();
        else
            this.objAvaliacao.dataFim = this.avaliacaoService.getDataAgora();
        this.avaliacaoService.save(this.objAvaliacao);
        this.setor.sendoAvaliado = false;
        this.setor.nivel = nivelAtingido;
        this.setor.ultimaAvaliacao = this.objAvaliacao.dataFim;
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
        var _this = this;
        var nivelAtingido;
        var flagNivelNaoVerde = false;
        var corpo = Object.keys(this.objAvaliacao.corpo).map(function (i) {
            var value = _this.objAvaliacao.corpo[i];
            value.key = i;
            return value;
        });
        corpo.forEach(function (nivel) {
            if (!flagNivelNaoVerde && _this.avaliacaoService.newGetAvaliacaoNivel(nivel) === 'avaliacaoVerde')
                nivelAtingido = nivel.nome;
            else
                flagNivelNaoVerde = true;
        });
        if (nivelAtingido)
            return nivelAtingido;
        else
            return 'Nível 0';
    };
    AvaliacaoPage.prototype.verificarObservacoes = function (mostrarAlert) {
        var _this = this;
        var flagEmOrdem = true;
        var corpo = Object.keys(this.objAvaliacao.corpo).map(function (i) {
            var value = _this.objAvaliacao.corpo[i];
            value.key = i;
            return value;
        });
        var faltantes = [];
        corpo.forEach(function (nivel) {
            //if (!flagEmOrdem) return;
            if (nivel.criterios) {
                nivel.criterios.forEach(function (criterio) {
                    //if (!flagEmOrdem) return;
                    criterio.itensDeAvaliacao.forEach(function (item) {
                        if ((item.avaliacao == 'amarelo' || item.avaliacao == 'vermelho') && item.observacao === undefined) {
                            flagEmOrdem = false;
                            //DEBUG
                            console.log("Observação faltante no item:", item);
                            var obsrvacaoFaltanteString = nivel.nome + " > " + criterio.nome + " > Item " + item.ordem;
                            faltantes.push(obsrvacaoFaltanteString);
                            //return;
                        }
                    });
                });
            }
        });
        var faltantesString = "";
        faltantes.forEach(function (string) {
            faltantesString += string + '<br>';
        });
        if (!flagEmOrdem) {
            var alertFaltamObservaoes = this.alertCtrl.create({
                title: 'Observações Faltantes',
                subTitle: 'Faltam observações em itens de valiação avaliados como Amarelo ou Vermelho.' + '<br><br><ion-item><strong>' + faltantesString + '<strong><ion-note>',
                buttons: ['Ok']
            });
            if (mostrarAlert)
                alertFaltamObservaoes.present();
        }
        return flagEmOrdem;
    };
    AvaliacaoPage.prototype.verificarTodosItensAvaliados = function () {
        var _this = this;
        var continuar = true;
        var flagTodosAvaliados = true;
        var corpo = Object.keys(this.objAvaliacao.corpo).map(function (i) {
            var value = _this.objAvaliacao.corpo[i];
            value.key = i;
            return value;
        });
        var flagNivelPretendido = false;
        corpo.forEach(function (nivel) {
            if (flagNivelPretendido)
                return;
            if (!flagTodosAvaliados)
                return;
            if (_this.objAvaliacao.nivelPretendido == nivel.nome)
                flagNivelPretendido = true;
            if (nivel.criterios) {
                nivel.criterios.forEach(function (criterio) {
                    if (!flagTodosAvaliados)
                        return;
                    criterio.itensDeAvaliacao.forEach(function (item) {
                        if (!item.avaliacao) {
                            flagTodosAvaliados = false;
                            return;
                        }
                    });
                });
            }
        });
        if (!flagTodosAvaliados) {
            continuar = false;
            var alertAvaliacoesFaltantes = this.alertCtrl.create({
                title: 'Avaliações Faltantes',
                subTitle: 'Nem todos os itens correspondentes ao nível desejado foram avaliados, deseja continuar?',
                buttons: [
                    {
                        text: 'Continuar',
                        handler: function () {
                            // Verifica avaliação novamente
                            // sem levar em consideração esse
                            // aspecto da verificação
                            continuar = true;
                            var nivelAtingido = _this.getNivelAtingidoAutomaticamente();
                            //Checar conformidade da avaliação
                            var observacoesConformidade = _this.verificarObservacoes(true);
                            var avaliacoesManuaisConformidade = _this.verificarAvaliacoesManuais();
                            //IF tudo ok
                            if (observacoesConformidade && avaliacoesManuaisConformidade)
                                _this.finalizarAvaliacaoVerificandoConformidade(nivelAtingido);
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                    }
                ]
            });
            alertAvaliacoesFaltantes.present();
        }
        return flagTodosAvaliados;
    };
    AvaliacaoPage.prototype.verificarAvaliacoesManuais = function () {
        var _this = this;
        var flagAvaliacoesManuaisConformidade = true;
        var corpo = Object.keys(this.objAvaliacao.corpo).map(function (i) {
            var value = _this.objAvaliacao.corpo[i];
            value.key = i;
            return value;
        });
        corpo.forEach(function (nivel) {
            if ((_this.avaliacaoService.newGetCorNivel(nivel) === 'avaliacaoAmarelo') && !nivel.avaliacaoManual) {
                flagAvaliacoesManuaisConformidade = false;
            }
        });
        if (!flagAvaliacoesManuaisConformidade) {
            var alertAvaliacoesManuais = this.alertCtrl.create({
                title: 'Avaliações Manuais Faltantes',
                subTitle: 'Faltam avaliações manuais em níveis com critérios avaliados como Amarelo.',
                buttons: ['Ok']
            });
            alertAvaliacoesManuais.present();
        }
        return flagAvaliacoesManuaisConformidade;
    };
    AvaliacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avaliacao',template:/*ion-inline-start:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\avaliacao\avaliacao.html"*/'<!--\n  Generated template for the AvaliacaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Avaliação</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg-image">\n\n  <div class="browser-compat">\n\n    <ion-card>\n      <ion-card-header><h1 text-center>{{setor?.sigla}}</h1></ion-card-header>\n      <ion-note><p text-center>Nível Pretendido: {{objAvaliacao?.nivelPretendido}}</p></ion-note>\n\n      <ion-list>\n\n      <button *ngFor="let nivel of niveis" ion-item  (click)="abrirCriterios(nivel)">\n        {{nivel.nome}}\n        <ion-icon item-end [color]="avaliacaoService.newGetCorNivel(nivel)" [name]="avaliacaoService.newGetAvaliacaoNivel(nivel) == \'avaliacaoManual\'? avaliacaoService.ICON_AVALIACAO_MANUAL : avaliacaoService.ICON_ESTRELA"></ion-icon>\n      </button>\n\n      </ion-list>\n    </ion-card>\n\n\n  <button ion-button round class="centralized" (click)="finalizarAvaliacaoClick()"> Finalizar Avaliação</button>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\avaliacao\avaliacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__services_setor__["a" /* SetorService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__services_avaliacao__["a" /* AvaliacaoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], AvaliacaoPage);
    return AvaliacaoPage;
}());

//# sourceMappingURL=avaliacao.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroSetorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setor__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toaster__ = __webpack_require__(266);
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
            selector: 'page-cadastro-setor',template:/*ion-inline-start:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\cadastro-setor\cadastro-setor.html"*/'<!--\n  Generated template for the CadastroSetorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{nomePagina}} Setor</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="bg-image">\n  <div class="browser-compat">\n\n  <ion-card padding class="browser-compat">\n    <ion-card-content>\n\n      <form (ngSubmit)="registrarSetor(f.value)" #f="ngForm">\n        <!--<ion-row>-->\n          <!--<ion-col>-->\n            <ion-list>\n\n              <ion-item>\n                <ion-label color="dark">Sigla</ion-label>\n                <ion-input type="text" name="sigla" [(ngModel)]="setor.sigla" required ></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label color="dark">Nome Completo</ion-label>\n                <ion-input type="text" name="nome" [(ngModel)]="setor.nome" required></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label color="dark">Vínculo</ion-label>\n                <ion-input type="text" name="vinculo" [(ngModel)]="setor.vinculo"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label color="dark">Líder de Processo</ion-label>\n                <ion-input type="text" name="lider" [(ngModel)]="setor.lider"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label color="dark">Email do Líder</ion-label>\n                <ion-input type="text" name="emailLider" [(ngModel)]="setor.emailLider"></ion-input>\n              </ion-item>\n\n            </ion-list>\n\n            <button padding ion-button full clear type="submit" [disabled]="!f.valid">{{nomeBotaoSalvar}}</button>\n\n      </form>\n\n    </ion-card-content>\n  </ion-card>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\cadastro-setor\cadastro-setor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_setor__["a" /* SetorService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__services_toaster__["a" /* Toaster */]])
    ], CadastroSetorPage);
    return CadastroSetorPage;
}());

//# sourceMappingURL=cadastro-setor.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, angularFireAuth, alertCtrl, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularFireAuth = angularFireAuth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.verificarUsuarioJaLogado();
    }
    LoginPage.prototype.verificarUsuarioJaLogado = function () {
        var _this = this;
        this.storage.get('user')
            .then(function (email) {
            if (!email) {
                //Usuário não logado
                console.log('Usuário não logado');
                return false;
            }
            else {
                //Usuário logado previamente e salvo
                // this.setarRootPáginaInicial();
                _this.loading = _this.loadingCtrl.create({
                    content: 'Aguarde...'
                });
                _this.loading.present();
                console.log('Usuário logado');
                //Faz login do usuário salvo
                _this.storage.get('password')
                    .then(function (password) {
                    if (password) {
                        _this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
                            .then(function (auth) {
                            //DEBUG
                            console.log('Usuário autenticado, entrando na tela inicial...');
                            _this.setarRootPáginaInicial();
                        }).catch(function (err) {
                            //DEBUG
                            console.log('Erro de login...');
                            var alert = _this.alertCtrl.create({
                                title: 'Ops, ocorreu um erro ao logar na sua conta salva! :(',
                                message: err,
                                buttons: ['OK']
                            });
                            _this.loading.dismiss();
                            alert.present();
                        });
                    }
                    else
                        _this.loading.dismiss();
                });
            }
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.ionViewDidLeave = function () {
        if (this.loading)
            this.loading.dismiss();
    };
    LoginPage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert_1;
            return __generator(this, function (_a) {
                try {
                    this.loading = this.loadingCtrl.create({
                        content: 'Aguarde...'
                    });
                    this.loading.present();
                    this.angularFireAuth.auth.signInWithEmailAndPassword(this.email, this.password)
                        .then(function (auth) {
                        _this.setarRootPáginaInicial();
                        _this.salvarUsuarioLocal(_this.email, _this.password);
                    }).catch(function (err) {
                        var alert = _this.alertCtrl.create({
                            title: 'Ops! :(',
                            message: err,
                            buttons: ['OK']
                        });
                        _this.loading.dismiss();
                        alert.present();
                    });
                }
                catch (e) {
                    alert_1 = this.alertCtrl.create({
                        title: 'Ops! :(',
                        subTitle: 'Problema com o login... Tente novamente mais tarde.',
                        buttons: ['aceitar']
                    });
                    this.loading.dismiss();
                    alert_1.present();
                }
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.setarRootPáginaInicial = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage.prototype.salvarUsuarioLocal = function (email, password) {
        // set a key/value
        this.storage.set('user', email);
        this.storage.set('password', password);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding class="bg-image">\n  <div class="browser-compat">\n\n\n      <ion-row justify-content-center>\n          <ion-img style="background: transparent" width="260" height="260" src="http://nqi.ufcspa.edu.br/wiki/selos-niveis/logo.png"></ion-img>\n      </ion-row>\n\n      <form (ngSubmit)="login()" #f="ngForm">\n\n        <ion-card>\n          <ion-item>\n            <ion-label stacked>Email</ion-label>\n            <ion-input [(ngModel)]="email" name="email" type="text" value="" required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label stacked>Password</ion-label>\n            <ion-input [(ngModel)]="password" name="password" type="password" value="" required></ion-input>\n          </ion-item>\n        </ion-card>\n\n        <div padding>\n          <button ion-button block type="submit" [disabled]="!f.valid">Login</button>\n        </div>\n\n      </form>\n\n    <div text-center>\n      <ion-note >Núcleo de Qualidade Interna<br></ion-note>\n      <ion-note >UFCSPA<br></ion-note>\n      <BR>\n      <ion-note >M3P App<br></ion-note>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodrigo\Projetos\m3p-appv1\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[311]);
//# sourceMappingURL=main.js.map