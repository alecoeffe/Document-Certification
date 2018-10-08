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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* styles de base si JS est activé */\r\nform {\r\n    width: 225px;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n}\r\nh2 {\r\n    margin: 5px 0 2em;\r\n    color: #1ABC9C;\r\n}\r\n.input-file-container {\r\n    position: relative;\r\n    width: 225px;\r\n    margin-bottom: 20px;\r\n}\r\n.input-file-trigger {\r\n    display: block;\r\n    padding: 14px 45px;\r\n    background: #39D2B4;\r\n    color: #fff;\r\n    font-size: 1em;\r\n    transition: all .4s;\r\n    cursor: pointer;\r\n}\r\n.input-file {\r\n    position: absolute;\r\n    top: 0; left: 0;\r\n    width: 225px;\r\n    padding: 14px 0;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n}\r\n/* quelques styles d'interactions */\r\n.input-file:hover + .input-file-trigger,\r\n.input-file:focus + .input-file-trigger,\r\n.input-file-trigger:hover,\r\n.input-file-trigger:focus {\r\n    background: #34495E;\r\n    color: #39D2B4;\r\n}\r\n/* styles du retour visuel */\r\n.file-return {\r\n    margin: 0;\r\n}\r\n.file-return:not(:empty) {\r\n    margin: 1em 0;\r\n}\r\n.file-return {\r\n    font-style: italic;\r\n    font-size: .9em;\r\n    font-weight: bold;\r\n}\r\n/* on complète l'information d'un contenu textuel\r\n    uniquement lorsque le paragraphe n'est pas vide */\r\n.file-return:not(:empty):before {\r\n    content: \"Selected file: \";\r\n    font-style: normal;\r\n    font-weight: normal;\r\n}\r\n.button-contenent {\r\n    width: auto;\r\n}\r\n.btn-primary {\r\n    margin-right: 15px;\r\n}\r\n.btn {\r\n    background: #39D2B4;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    border: none;\r\n    padding: 5px;\r\n    width: 180px;\r\n    margin-bottom: 25px;\r\n    text-align: center;\r\n}\r\n#responseText {\r\n    text-align: left;\r\n}\r\n.copy {\r\n    margin-top: 2em;\r\n}\r\n.txtcenter {\r\n    margin-top: 4em;\r\n    font-size: .9em;\r\n    text-align: center;\r\n    color: #aaa;\r\n}\r\n.response-text {\r\n    width: 560px;\r\n    margin: auto;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Document Certification in the Ethereum Blockchain</h1>\n<h2> You can use this app to certified a files with a hash<br/> and find this unique hash in the blockchain </h2>\n\n<form>\n  <div class=\"input-file-container\">\n      <input type=\"file\" id=\"hashFile\" class=\"input-file\">\n      <label for=\"my-file\" class=\"input-file-trigger\" tabindex=\"0\">Select a file...</label>\n  </div>\n  <p class=\"file-return\"></p>\n</form>\n\n<div align=\"center\" class='button-contenent'>\n  <button type='button' id=\"sendHashButton\" (click)=\"send()\" class=\"btn btn-primary\">\n    Fingerprint to Blockchain\n  </button>\n\n  <button type='button' id= \"findHashButton\" (click)=\"find()\" class=\"btn btn-secondary\">\n    Find on Blockchain\n  </button>\n</div>\n<div class='response-text' align=\"center\"><div id=responseText></div></div>\n\n<p class='txtcenter copy'>By <a href='https://www.bipinfo.com/'>BIP INFO - Digital System & Media</a><br/>\n  See also <a href='mailto:contact@bipinfo.com'>@BipInfo</a>\n</p>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _web3_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web3.service */ "./src/app/web3.service.ts");
/* harmony import */ var jssha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jssha */ "./node_modules/jssha/src/sha.js");
/* harmony import */ var jssha__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jssha__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(web3Service) {
        var _this = this;
        this.web3Service = web3Service;
        this.input = null;
        this.file = null;
        this.fr = null;
        this.initAndDisplayAccount = function (callback) {
            var that = _this;
            _this.web3Service.getAccountInfo().then(function (acctInfo) {
                that.accounts = acctInfo;
                callback();
            }).catch(function (error) {
                console.log(error);
                callback();
            });
        };
        this.initAndDisplayAccount(function () {
            _this.account = _this.accounts[0];
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.hashForFile = function (callback) {
        this.input = document.getElementById("hashFile");
        if (!this.input.files[0]) {
            alert("Please select a file first");
        }
        else {
            this.file = this.input.files[0];
            this.fr = new FileReader();
            this.fr.onload = function (e) {
                this.content = e.target.result;
                var shaObj = new jssha__WEBPACK_IMPORTED_MODULE_2__("SHA-256", "ARRAYBUFFER");
                shaObj.update(this.content);
                var hash = "0x" + shaObj.getHash("HEX");
                callback(null, hash);
            };
            this.fr.readAsArrayBuffer(this.file);
        }
    };
    AppComponent.prototype.send = function () {
        var _this = this;
        this.hashForFile(function (err, hash) {
            if (!(_this.account === undefined)) {
                _this.web3Service.notary_send(hash, function (err, tx) {
                    if (!err) {
                        jquery__WEBPACK_IMPORTED_MODULE_3__("#responseText").html("<p>File successfully fingreprinted onto Ethereum blockchain.</p>" +
                            "<p>File Hash Value: " + hash + "</p>" +
                            "<p>Transaction ID: " + tx + "</p>" +
                            "<p>Available at contract address: " + _this.web3Service.contractDeployedAt + "</p>" +
                            "<p><b>Please alow a few minutes for transaction to be mined.</b></p>");
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_3__("#responseText").html("<p>Error: file not send.</p>" +
                            "<p>You have rejected the transaction</p>");
                    }
                });
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_3__("#responseText").html("<p>Error: file not send.</p>" +
                    "<p>You're not connected to <a href='https://metamask.io/'>MetaMask</a></p>" +
                    "<p>Please connected you and refresh to send files !</p>");
            }
        });
    };
    AppComponent.prototype.find = function () {
        var _this = this;
        this.hashForFile(function (err, hash) {
            if (!(_this.account === undefined)) {
                _this.web3Service.notary_find(hash, function (err, resultObj) {
                    if (resultObj.blockNumber != 0) {
                        jquery__WEBPACK_IMPORTED_MODULE_3__("#responseText").html("<p>File fingerprint found on Ethereum blockchain.</p>" +
                            "<p>File Hash Value: " + hash + "</p>" +
                            "<p>Block No.: " + resultObj.blockNumber + "</p>" +
                            "<p>Timestamp: " + resultObj.mineTime + "</p>" +
                            "<p>From Account: " + resultObj.account + "</p>");
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_3__("#responseText").html("<p>File fingerprint not found on Ethereum blockchain.</p>" +
                            "<p>File Hash Value: " + hash + "</p>");
                    }
                });
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_3__("#responseText").html("<p>Error: file not found.</p>" +
                    "<p>You're not connected to <a href='https://metamask.io/'>MetaMask</a></p>" +
                    "<p>Please connected you and refresh to found files !</p>");
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_web3_service__WEBPACK_IMPORTED_MODULE_1__["Web3Service"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web3.service */ "./src/app/web3.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/web3.service.ts":
/*!*********************************!*\
  !*** ./src/app/web3.service.ts ***!
  \*********************************/
/*! exports provided: Web3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3Service", function() { return Web3Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
// Use existing gateway
var web3 = new Web3(window.web3.currentProvider);
var contractABI = [
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "mineTime",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "blockNumber",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "msgSender",
                "type": "address"
            }
        ],
        "name": "AddDoc",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "hash",
                "type": "bytes32"
            }
        ],
        "name": "addDocHash",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "hash",
                "type": "bytes32"
            }
        ],
        "name": "findDocHash",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];
var Web3Service = /** @class */ (function () {
    function Web3Service() {
        this.contractDeployedAt = "0x4c03d6842fe2d7b1d486c90aee64ad444fdcb144";
        this.notary = null;
        this.MyContract = null;
        this.createWeb3();
    }
    //sends a hash to the blockchain
    Web3Service.prototype.notary_send = function (hash, callback) {
        var _this = this;
        web3.eth.getAccounts(function (error, accounts) {
            if (error)
                callback(error, null);
            else {
                _this.notary.addDocHash(hash, {
                    from: accounts[0]
                }, function (error, tx) {
                    if (error)
                        callback(error, null);
                    else {
                        callback(null, tx);
                    }
                });
            }
        });
    };
    //looks up a hash on the blockchain
    Web3Service.prototype.notary_find = function (hash, callback) {
        this.notary.findDocHash(hash, function (error, result) {
            if (error)
                callback(error, null);
            else {
                var resultObj = {
                    mineTime: new Date(result[0] * 1000),
                    blockNumber: result[1],
                    account: result[2],
                };
                callback(null, resultObj);
            }
        });
    };
    Web3Service.prototype.createWeb3 = function () {
        // Check if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof window.web3 !== "undefined") {
            this.MyContract = web3.eth.contract(contractABI);
            this.notary = this.MyContract.at(this.contractDeployedAt);
        }
        else {
            alert("No web3? Please trying with MetaMask!");
        }
    };
    Web3Service.prototype.getAccountInfo = function () {
        return new Promise(function (resolve, reject) {
            window.web3.eth.getCoinbase(function (err, account) {
                if (err === null) {
                    web3.eth.getBalance(account, function (err, balance) {
                        if (err === null) {
                            return resolve([account, web3.fromWei(balance, "ether")]);
                        }
                        else {
                            return reject("error!");
                        }
                    });
                }
            });
        });
    };
    Web3Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Web3Service);
    return Web3Service;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/d/Document/Document-Certification/webapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map