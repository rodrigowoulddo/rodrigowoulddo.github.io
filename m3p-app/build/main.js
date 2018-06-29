webpackJsonp([6],{

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvaliacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
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
    function AvaliacaoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AvaliacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvaliacaoPage');
    };
    AvaliacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avaliacao',template:/*ion-inline-start:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\avaliacao\avaliacao.html"*/'<!--\n  Generated template for the AvaliacaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>avaliacao</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\avaliacao\avaliacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AvaliacaoPage);
    return AvaliacaoPage;
}());

//# sourceMappingURL=avaliacao.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiveisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
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

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreAvaliacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_nivel__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_avaliacao__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_setor__ = __webpack_require__(65);
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
        //Debug
        this.niveis$ = this.nivelService
            .getAll() //DB LIST
            .snapshotChanges() // KEY AND VALUE
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
        console.log(this.niveis$);
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
        console.log(avaliacao);
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
        console.log(avaliacao);
        insereNovaAvaliacao(avaliacao, this);
        this.fecharPágina();
    };
    PreAvaliacaoPage.prototype.insereNovaAvaliacao = function (avaliacao, self) {
        self.avaliacaoService.save(avaliacao);
        self.setor.sendoAvaliado = true;
        self.setorService.save(self.setor);
    };
    PreAvaliacaoPage.prototype.fecharPágina = function () {
        this.viewCtrl.dismiss();
    };
    PreAvaliacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pre-avaliacao',template:/*ion-inline-start:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\pre-avaliacao\pre-avaliacao.html"*/'<!--\n  Generated template for the PreAvaliacaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Nova Avaliação</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n\n      <ion-card-header>Nível Pretendido</ion-card-header>\n\n    <ion-card-content>\n      <ion-list radio-group [(ngModel)]="nivelPretendido">\n\n        <ion-item *ngFor="let nivel of niveis$ | async">\n\n          <ion-label>{{nivel.nome}}</ion-label>\n          <ion-radio value={{nivel.nome}}></ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n    </ion-card-content>\n\n  </ion-card>\n\n  <button ion-button round class="centralized" (click)="iniciarAvaliacao()">Iniciar Valiação</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\pre-avaliacao\pre-avaliacao.html"*/,
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

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_setor_cadastro_setor__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_setor__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__avaliacao_avaliacao__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pre_avaliacao_pre_avaliacao__ = __webpack_require__(153);
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
        if (this.setor.sendoAvaliado)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__avaliacao_avaliacao__["a" /* AvaliacaoPage */], { setor: this.setor });
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pre_avaliacao_pre_avaliacao__["a" /* PreAvaliacaoPage */], { setor: this.setor });
    };
    SetorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setor',template:/*ion-inline-start:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\setor\setor.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <!--<ion-title>{{setor.sigla}}</ion-title>-->\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="editarSetor()">\n        <ion-icon name="create"></ion-icon>\n      </button>\n\n      <button ion-button icon-only (click)="excluirSetor()">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div padding class="browser-compat">\n    <ion-card>\n\n      <ion-card-header>\n        <ion-item>\n          <h1 text-center width-50 class="nome-setor">{{setor.nome}}</h1>\n          <p text-center>({{setor.sigla}})</p>\n        </ion-item>\n      </ion-card-header>\n\n      <ion-list>\n\n        <ion-item *ngIf="setor.vinculo">\n          <p>Vínculo</p>\n          <h2>{{setor.vinculo}}</h2>\n        </ion-item>\n\n        <ion-item>\n          <p>Nível Atual</p>\n          <h2>{{setor.nivel? "Nível "+setor.nivel : "NA"}}</h2>\n        </ion-item>\n\n        <ion-item>\n          <p>Líder de Processos</p>\n          <h2>{{setor.lider? setor.lider : "Não especificado"}}</h2>\n        </ion-item>\n\n        <ion-item>\n          <p>Email do Líder</p>\n          <h2>{{setor.emailLider? setor.emailLider : "Não especificado"}}</h2>\n        </ion-item>\n\n        <ion-item>\n          <p>Última Avaliação</p>\n          <h2>{{setor.ultimaAvaliacao? setor.ultimaAvaliacao : "NA"}}</h2>\n        </ion-item>\n\n      </ion-list>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        Histórico de Avaliações\n      </ion-card-header>\n\n      <ion-list>\n\n        <ion-item>\n          <h3>Nível 3</h3>\n          <p>29/07/2018</p>\n        </ion-item>\n\n        <ion-item>\n          <h3>Nível 2</h3>\n          <p>29/07/2017</p>\n        </ion-item>\n\n        <ion-item>\n          <h3>Nível 2</h3>\n          <p>29/05/2017</p>\n        </ion-item>\n\n      </ion-list>\n\n      <button ion-button clear small full>Ver Mais</button>\n\n    </ion-card>\n  </div>\n\n\n\n  <!--<ion-fab bottom right>-->\n    <!--<button ion-fab class="cor-danger">-->\n      <!--<ion-icon name="options"></ion-icon>-->\n    <!--</button>-->\n    <!--<ion-fab-list>-->\n      <!--<button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>-->\n      <!--<button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>-->\n      <!--<button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>-->\n      <!--<button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>-->\n    <!--</ion-fab-list>-->\n  <!--</ion-fab>-->\n\n  <ion-fab bottom right>\n    <button ion-fab class="cor-danger" (click)="avaliarSetor()"><ion-icon name="options"></ion-icon></button>\n    <!--<ion-fab-list side="top">-->\n      <!--<button ion-fab class="botao-nivel">1</button>-->\n      <!--<button ion-fab class="botao-nivel">2</button>-->\n      <!--<button ion-fab class="botao-nivel">3</button>-->\n      <!--<button ion-fab class="botao-nivel">4</button>-->\n      <!--<button ion-fab class="botao-nivel">5</button>-->\n      <!--<button ion-fab class="botao-nivel">6</button>-->\n      <!--<button ion-fab class="botao-nivel">7</button>-->\n\n    <!--</ion-fab-list>-->\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\setor\setor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__services_setor__["a" /* SetorService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], SetorPage);
    return SetorPage;
}());

//# sourceMappingURL=setor.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setor__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastro_setor_cadastro_setor__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__setor_setor__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_compat_add_operator_map__ = __webpack_require__(452);
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
    SetoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setores',template:/*ion-inline-start:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\setores\setores.html"*/'<!--\n  Generated template for the SetoresPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Setores</ion-title>\n\n    <!--Botão de adicionar no iOS-->\n    <ion-buttons hideWhen="android, core" end>\n      <button ion-button icon-only (click)="addSetor()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <!--Barra de Pesquisa-->\n  <ion-toolbar>\n    <ion-searchbar\n      class="browser-compat"\n      placeholder="Procurar"\n      [(ngModel)]="myInput"\n      [showCancelButton]="shouldShowCancel"\n      (ionInput)="filterItems($event)"\n      (ionCancel)="onCancel()">\n    </ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list class="browser-compat">\n    <ion-card\n      *ngFor="let setor of setoresFiltrados$ | async">\n\n      <ion-item (click)="irParaPaginaDoSetor(setor)">\n        <ion-avatar *ngIf="setor.nivel" icone-estrela item-end>\n          <img src="../assets/img/selo-nivel-5.png">\n        </ion-avatar>\n        <h2>{{setor.sigla}}</h2>\n        <p>{{setor.nome}}</p>\n      </ion-item>\n\n      <ion-card-content>\n        <ion-note>{{setor.ultimaAvaliacao? \'Última Avaliação: \'+setor.ultimaAvaliacao : \'Setor ainda não avaliado\'}}</ion-note>\n      </ion-card-content>\n\n    </ion-card>\n  </ion-list>\n\n    <button padding showWhen="core" class="centralized" ion-button (click)="addSetor()">\n      Adicionar Setor\n    </button>\n\n  <ion-fab bottom right>\n    <button ion-fab showWhen="android" (click)="addSetor()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\setores\setores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_setor__["a" /* SetorService */]])
    ], SetoresPage);
    return SetoresPage;
}());

//# sourceMappingURL=setores.js.map

/***/ }),

/***/ 189:
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
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/avaliacao/avaliacao.module": [
		479,
		5
	],
	"../pages/cadastro-setor/cadastro-setor.module": [
		480,
		4
	],
	"../pages/niveis/niveis.module": [
		481,
		3
	],
	"../pages/pre-avaliacao/pre-avaliacao.module": [
		482,
		2
	],
	"../pages/setor/setor.module": [
		483,
		1
	],
	"../pages/setores/setores.module": [
		484,
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
webpackAsyncContext.id = 231;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toaster; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(34);
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

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NivelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(82);
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

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvaliacaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(82);
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
    }
    AvaliacaoService.prototype.getAll = function () {
        return this.avaliacaoRef;
    };
    AvaliacaoService.prototype.save = function (avaliacao) {
        if (avaliacao.key == null) {
            avaliacao.key = this.avaliacaoRef.push(null).key;
            this.avaliacaoRef.update('/' + avaliacao.setor + '/' + avaliacao.key, JSON.parse(JSON.stringify(avaliacao)));
            //this.avaliacaoRef.update('/'+avaliacao.setor+'/'+avaliacao.key+'/corpo',JSON.parse(JSON.stringify(avaliacao.corpo)));
            console.log("FIREBASE: Avaliação Adicionada ao setor " + avaliacao.setor + ":");
            console.log(avaliacao);
        }
        else {
            this.avaliacaoRef.update('/' + avaliacao.setor + '/' + avaliacao.key, JSON.parse(JSON.stringify(avaliacao)));
            console.log("FIREBASE: Avaliação Editada:");
            console.log(avaliacao);
        }
    };
    AvaliacaoService.prototype.getDataAgora = function () {
        var dateAgora = new Date();
        var agora = dateAgora.getDay() + '/' + dateAgora.getMonth() + '/' + dateAgora.getDay() + ' (' + dateAgora.getHours() + ':' + dateAgora.getMinutes() + ')';
        return agora;
    };
    AvaliacaoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AvaliacaoService);
    return AvaliacaoService;
}());

//# sourceMappingURL=avaliacao.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setores_setores__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__niveis_niveis__ = __webpack_require__(152);
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

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(410);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_setores_setores__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_niveis_niveis__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__firebase_credentials__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_setor__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cadastro_setor_cadastro_setor__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_setor_setor__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_pre_avaliacao_pre_avaliacao__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_avaliacao_avaliacao__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_nivel__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_avaliacao__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_toaster__ = __webpack_require__(242);
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
                __WEBPACK_IMPORTED_MODULE_13__pages_cadastro_setor_cadastro_setor__["a" /* CadastroSetorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_setor_setor__["a" /* SetorPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pre_avaliacao_pre_avaliacao__["a" /* PreAvaliacaoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_avaliacao_avaliacao__["a" /* AvaliacaoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/avaliacao/avaliacao.module#AvaliacaoPageModule', name: 'AvaliacaoPage', segment: 'avaliacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-setor/cadastro-setor.module#CadastroSetorPageModule', name: 'CadastroSetorPage', segment: 'cadastro-setor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/niveis/niveis.module#NiveisPageModule', name: 'NiveisPage', segment: 'niveis', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pre-avaliacao/pre-avaliacao.module#PreAvaliacaoPageModule', name: 'PreAvaliacaoPage', segment: 'pre-avaliacao', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_14__pages_setor_setor__["a" /* SetorPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pre_avaliacao_pre_avaliacao__["a" /* PreAvaliacaoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_avaliacao_avaliacao__["a" /* AvaliacaoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__services_setor__["a" /* SetorService */],
                __WEBPACK_IMPORTED_MODULE_17__services_nivel__["a" /* NivelService */],
                __WEBPACK_IMPORTED_MODULE_18__services_avaliacao__["a" /* AvaliacaoService */],
                __WEBPACK_IMPORTED_MODULE_19__services_toaster__["a" /* Toaster */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(288);
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

/***/ 478:
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

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(82);
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
    SetorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], SetorService);
    return SetorService;
}());

//# sourceMappingURL=setor.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroSetorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setor__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toaster__ = __webpack_require__(242);
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
            selector: 'page-cadastro-setor',template:/*ion-inline-start:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\cadastro-setor\cadastro-setor.html"*/'<!--\n  Generated template for the CadastroSetorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{nomePagina}} Setor</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card padding class="browser-compat">\n    <ion-card-content>\n\n      <form (ngSubmit)="registrarSetor(f.value)" #f="ngForm">\n        <!--<ion-row>-->\n          <!--<ion-col>-->\n            <ion-list>\n\n              <ion-item>\n                <ion-label color="dark">Sigla</ion-label>\n                <ion-input type="text" name="sigla" [(ngModel)]="setor.sigla" required ></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label color="dark">Nome Completo</ion-label>\n                <ion-input type="text" name="nome" [(ngModel)]="setor.nome" required></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label color="dark">Vínculo</ion-label>\n                <ion-input type="text" name="vinculo" [(ngModel)]="setor.vinculo"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label color="dark">Líder de Processo</ion-label>\n                <ion-input type="text" name="lider" [(ngModel)]="setor.lider"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label color="dark">Email do Líder</ion-label>\n                <ion-input type="text" name="emailLider" [(ngModel)]="setor.emailLider"></ion-input>\n              </ion-item>\n\n            </ion-list>\n\n            <button padding ion-button full clear type="submit" [disabled]="!f.valid">{{nomeBotaoSalvar}}</button>\n\n      </form>\n\n    </ion-card-content>\n  </ion-card>\n\n  </ion-content>\n'/*ion-inline-end:"C:\Users\rodrigofg\Documents\Projetos\m3p-appv1\src\pages\cadastro-setor\cadastro-setor.html"*/,
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

},[289]);
//# sourceMappingURL=main.js.map