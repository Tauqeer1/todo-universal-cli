module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 68);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("@angular/core");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var config = {
    mongoURL: process.env.MONGODB_URI || 'mongodb://localhost:27017/todo',
    salt: 'DJEW*324KNAScsafAwe987y2e@#RWoihwefn98!',
    jwtSecret: 'SecretKeyoftodoAppMadeByUniversalCli'
};
/* harmony default export */ exports["a"] = config;
//# sourceMappingURL=D:/Web/Projects/todo-app/src/config.js.map

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("@angular/http");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("@angular/router");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/map");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_todo_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(todoService) {
        this.todoService = todoService;
        this.todo = {};
        this.todos = [];
        this.loading = false;
        this.errorMessage = '';
        this.getAllTodos();
    }
    HomeComponent.prototype.addTodo = function () {
        var _this = this;
        this.loading = true;
        if (!this.todo) {
            return;
        }
        this.todoService.addTodo(this.todo)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.success) {
                _this.todo = {};
                _this.loading = false;
                _this.getAllTodos();
            }
            else {
                _this.error = response.success;
                _this.errorMessage = response.data;
                _this.loading = false;
            }
        }, function (error) {
            _this.loading = false;
            console.error('error', error);
        });
    };
    HomeComponent.prototype.deleteTodo = function (id) {
        var _this = this;
        this.todoService.deleteTodo(id)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            if (res.success) {
                _this.getAllTodos();
            }
        });
    };
    HomeComponent.prototype.updateTodo = function () {
        console.log('updateTodo');
    };
    HomeComponent.prototype.getAllTodos = function () {
        var _this = this;
        console.log('get all todos');
        this.todoService.getAllTodo()
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log('response', response);
            _this.todos = response.data;
        }, function (err) {
            console.log('err', err);
        });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(39),
            styles: [__webpack_require__(35)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_todo_service__["a" /* TodoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_todo_service__["a" /* TodoService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=D:/Web/Projects/todo-app/src/home.component.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.user = {};
        this.loading = false;
        this.errorMessage = '';
        console.log('Login Component');
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.auth.login(this.user.email, this.user.password)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.loading = false;
            if (res.success && res.data.token) {
                console.log('res', res.data);
                _this.auth.userObject = res.data;
                _this.router.navigate(['/home']);
            }
            else {
                _this.error = res.success;
                _this.errorMessage = res.data;
                _this.loading = false;
            }
        }, function (err) {
            _this.loading = false;
            console.log('err', err);
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(40),
            styles: [__webpack_require__(36)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Web/Projects/todo-app/src/login.component.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.title = 'Register component';
        this.user = {};
        this.loading = false;
        this.error = false;
        this.errorMessage = '';
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.register(this.user)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.success) {
                _this.router.navigate(['/login']);
            }
            else {
                console.log('response', response);
                _this.error = response.success;
                _this.errorMessage = response.data;
                _this.loading = false;
            }
        }, function (error) {
            _this.loading = false;
            console.error('error', error);
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(41),
            styles: [__webpack_require__(37)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _b) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Web/Projects/todo-app/src/register.component.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    Object.defineProperty(AuthService.prototype, "userObject", {
        get: function () {
            return this.user;
        },
        set: function (user) {
            console.log('user', user);
            localStorage.setItem('user', JSON.stringify(user));
            this.user = user;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (email, password) {
        return this.http.post('/api/auth', { email: email, password: password });
        /*.map((res: Response) => {
            let user = res.json();
            if(user && user.token) {
                localStorage.setItem('user', JSON.stringify(user));
                this.user = user;
                return user;
            }
        })*/
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=D:/Web/Projects/todo-app/src/auth.service.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TodoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
    }
    TodoService.prototype.addTodo = function (todo) {
        console.log('todo', todo);
        return this.http.post('/api/todos/', todo);
    };
    TodoService.prototype.updateTodo = function () {
    };
    TodoService.prototype.deleteTodo = function (id) {
        return this.http.delete('/api/todos/' + id);
    };
    TodoService.prototype.getAllTodo = function () {
        return this.http.get('/api/todos');
    };
    TodoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], TodoService);
    return TodoService;
    var _a;
}());
//# sourceMappingURL=D:/Web/Projects/todo-app/src/todo.service.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        return this.http.post('/api/users/', user);
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=D:/Web/Projects/todo-app/src/user.service.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var userSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose__["Schema"]({
    name: { type: String },
    email: { type: String, lowercase: true, unique: true },
    createdAt: { type: Date, default: Date.now() },
    password: { type: String }
});
/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_mongoose__["model"]('User', userSchema);
//# sourceMappingURL=D:/Web/Projects/todo-app/src/user.model.js.map

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("crypto");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_body_parser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_morgan__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_compression__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_express_engine__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_express_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_express_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_app_node_module__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__server_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__server_routes__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__server_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__server_api_user__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__server_api_todo__ = __webpack_require__(27);

















__WEBPACK_IMPORTED_MODULE_4_mongoose__["connect"](__WEBPACK_IMPORTED_MODULE_12__server_config__["a" /* default */].mongoURL);
__WEBPACK_IMPORTED_MODULE_4_mongoose__["connection"].on('error', function (err) {
    console.log("MongoDB connection error: " + err);
    process.exit(-1);
});
// App
var app = __WEBPACK_IMPORTED_MODULE_3_express__();
var ROOT = __WEBPACK_IMPORTED_MODULE_2_path__["join"](__WEBPACK_IMPORTED_MODULE_2_path__["resolve"](__dirname, '..'));
var port = process.env.PORT || 4200;
/**
 * enable prod mode for production environments
 */
if (__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core__["enableProdMode"])();
}
/**
 * Express View
 */
app.engine('.html', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_angular2_express_engine__["createEngine"])({}));
app.set('views', __WEBPACK_IMPORTED_MODULE_2_path__["join"](ROOT, 'client'));
app.set('view engine', 'html');
/**
 * Enable compression
 */
app.use(__WEBPACK_IMPORTED_MODULE_7_compression__());
app.use(__WEBPACK_IMPORTED_MODULE_5_body_parser__["json"]({ limit: '20mb' }));
app.use(__WEBPACK_IMPORTED_MODULE_5_body_parser__["urlencoded"]({ limit: '20mb', extended: false }));
app.use(__WEBPACK_IMPORTED_MODULE_6_morgan__('dev'));
/**
 * serve static files
 */
app.use('/', __WEBPACK_IMPORTED_MODULE_3_express__["static"](__WEBPACK_IMPORTED_MODULE_2_path__["join"](ROOT, 'client'), { index: false }));
/**
 * place your api routes here
 */
// app.use('/api', api);
// app.use('/api/users', require('./server/api/user'));
app.use('/api/users', __WEBPACK_IMPORTED_MODULE_15__server_api_user__["a" /* userRoutes */]);
app.use('/api/todos', __WEBPACK_IMPORTED_MODULE_16__server_api_todo__["a" /* todoRoutes */]);
app.use('/api/auth', __WEBPACK_IMPORTED_MODULE_14__server_auth__["a" /* authRoutes */]);
// app.use('/api/todos', require('./server/api/todo'));
// app.use('/api/auth', require('./server/auth'));
/**
 * bootstrap universal app
 * @param req
 * @param res
 */
function ngApp(req, res) {
    res.render('index', {
        req: req,
        res: res,
        ngModule: __WEBPACK_IMPORTED_MODULE_10__app_app_node_module__["a" /* AppModule */],
        preboot: false,
        baseUrl: '/',
        requestUrl: req.originalUrl,
        originUrl: req.hostname
    });
}
/**
 * use universal for specific routes
 */
app.get('/', ngApp);
__WEBPACK_IMPORTED_MODULE_13__server_routes__["a" /* routes */].forEach(function (route) {
    app.get("/" + route, ngApp);
    app.get("/" + route + "/*", ngApp);
});
/**
 * if you want to use universal for all routes, you can use the '*' wildcard
 */
app.get('*', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var pojo = { status: 404, message: 'No Content' };
    var json = JSON.stringify(pojo, null, 2);
    res.status(404).send(json);
});
app.listen(port, function () {
    console.log("Listening on port " + port);
});
//# sourceMappingURL=D:/Web/Projects/todo-app/src/server.js.map

/***/ },
/* 16 */,
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(42);
var __core_private__ = __webpack_require__(0);
var patch = false;
if (!__core_private__.hasOwnProperty('ViewUtils')) {
    patch = true;
    __core_private__.ViewUtils = __core_private__.view_utils;
}
if (!__compiler__.__compiler_private__) {
    patch = true;
    (__compiler__).__compiler_private__ = {
        SelectorMatcher: __compiler__.SelectorMatcher,
        CssSelector: __compiler__.CssSelector
    };
}
var __universal__ = __webpack_require__(45);
if (patch) {
    __universal__.ViewUtils = __core_private__.view_utils;
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
//# sourceMappingURL=D:/Web/Projects/todo-app/src/__2.1.1.workaround.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(38),
            styles: [__webpack_require__(34)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/Web/Projects/todo-app/src/app.component.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_app_route__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_todo_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_register_component__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            /** Root App Component */
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__index__["a" /* AppComponent */]],
            /** Our Components */
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__index__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_4__routes_app_route__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_1_angular2_universal__["UniversalModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_8__services_todo_service__["a" /* TodoService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Web/Projects/todo-app/src/app.module.js.map

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });

//# sourceMappingURL=D:/Web/Projects/todo-app/src/app.node.module.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(19);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });

//# sourceMappingURL=D:/Web/Projects/todo-app/src/index.js.map

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_register_component__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return appRoutes; });



var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__register_register_component__["a" /* RegisterComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: '**', redirectTo: 'login' }
];
//# sourceMappingURL=D:/Web/Projects/todo-app/src/app.route.js.map

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ung build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Web/Projects/todo-app/src/environment.js.map

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=D:/Web/Projects/todo-app/src/polyfills.js.map

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });
/**
 * Server-side routes. Only the listed routes support html5pushstate.
 * Has to match client side routes.
 *
 * Index (/) route does not have to be listed here.
 *
 * @example
 * export const routes: string[] = [
 * 'home', 'about'
 * ];
 **/
var routes = [
    'login',
    'register',
    'home'
];
//# sourceMappingURL=D:/Web/Projects/todo-app/src/server.routes.js.map

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_controller__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return todoRoutes; });


var router = __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();
router.get('/', __WEBPACK_IMPORTED_MODULE_1__todo_controller__["a" /* index */]);
router.get('/:id', __WEBPACK_IMPORTED_MODULE_1__todo_controller__["b" /* show */]);
router.post('/', __WEBPACK_IMPORTED_MODULE_1__todo_controller__["c" /* create */]);
router.put('/:id', __WEBPACK_IMPORTED_MODULE_1__todo_controller__["d" /* update */]);
router.delete('/:id', __WEBPACK_IMPORTED_MODULE_1__todo_controller__["e" /* destroy */]);
var todoRoutes = router;
//# sourceMappingURL=D:/Web/Projects/todo-app/src/index.js.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todo_model__ = __webpack_require__(29);
/* harmony export (immutable) */ exports["a"] = index;
/* harmony export (immutable) */ exports["b"] = show;
/* harmony export (immutable) */ exports["c"] = create;
/* harmony export (immutable) */ exports["d"] = update;
/* harmony export (immutable) */ exports["e"] = destroy;

// Get all
function index(req, res) {
    __WEBPACK_IMPORTED_MODULE_0__todo_model__["a" /* default */].find().sort('-date')
        .exec(function (err, todos) {
        if (err) {
            return res.json({ success: false, data: null, error: err });
        }
        else {
            return res.json({ success: true, data: todos, error: null });
        }
    });
}
// Get single
function show(req, res) {
}
// Post/Create
function create(req, res) {
    console.log('req.body', req.body);
    __WEBPACK_IMPORTED_MODULE_0__todo_model__["a" /* default */].create(req.body)
        .then(function (todo) {
        return res.json({ success: true, data: todo, error: null });
    })
        .catch(function (err) {
        return res.json({ success: false, data: 'Contact support', error: err });
    });
}
// Update
function update(req, res) {
}
// Delete
function destroy(req, res) {
    console.log('req.params.id', req.params.id);
    __WEBPACK_IMPORTED_MODULE_0__todo_model__["a" /* default */].remove({ _id: req.params.id })
        .exec(function (err, todo) {
        if (err) {
            return res.json({ success: false, data: 'Contact support', err: err });
        }
        return res.json({ success: true, data: todo, err: null });
    });
}
//# sourceMappingURL=D:/Web/Projects/todo-app/src/todo.controller.js.map

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var TodoSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose__["Schema"]({
    text: { type: String },
    createdAt: { type: Date, default: Date.now() },
});
/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_mongoose__["model"]('Todo', TodoSchema);
//# sourceMappingURL=D:/Web/Projects/todo-app/src/todo.model.js.map

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_controller__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return userRoutes; });


var router = __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();
router.get('/', __WEBPACK_IMPORTED_MODULE_1__user_controller__["a" /* index */]);
router.get('/:id', __WEBPACK_IMPORTED_MODULE_1__user_controller__["b" /* show */]);
router.post('/', __WEBPACK_IMPORTED_MODULE_1__user_controller__["c" /* create */]);
router.put('/:id', __WEBPACK_IMPORTED_MODULE_1__user_controller__["d" /* update */]);
router.delete('/:id', __WEBPACK_IMPORTED_MODULE_1__user_controller__["e" /* destroy */]);
var userRoutes = router;
//# sourceMappingURL=D:/Web/Projects/todo-app/src/index.js.map

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_model__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_crypto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(2);
/* harmony export (immutable) */ exports["a"] = index;
/* harmony export (immutable) */ exports["b"] = show;
/* harmony export (immutable) */ exports["c"] = create;
/* harmony export (immutable) */ exports["d"] = update;
/* harmony export (immutable) */ exports["e"] = destroy;



// Get all
function index(req, res) {
    res.send('User api is working now');
}
// Get single
function show(req, res) {
}
// Post/Create
function create(req, res) {
    __WEBPACK_IMPORTED_MODULE_0__user_model__["a" /* default */].findOne({ email: req.body.email })
        .exec(function (err, userObj) {
        if (err) {
            return res.json({ success: false, data: null, error: 'Contact support' });
        }
        else if (userObj == null) {
            var pwHash = __WEBPACK_IMPORTED_MODULE_1_crypto__["createHmac"]('sha1', __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].salt).update(req.body.password).digest('hex');
            var user = {
                name: req.body.name,
                email: req.body.email,
                password: pwHash
            };
            __WEBPACK_IMPORTED_MODULE_0__user_model__["a" /* default */].create(user)
                .then(function (user) {
                return res.json({ success: true, data: 'User created', error: null });
            })
                .catch(function (err) {
                console.error('err', err);
                return res.json({ success: false, data: null, error: 'Contact support' });
            });
        }
        else {
            return res.json({ success: false, data: 'User already exists', error: null });
        }
    });
}
// Update
function update(req, res) {
}
// Delete
function destroy(req, res) {
}
//# sourceMappingURL=D:/Web/Projects/todo-app/src/user.controller.js.map

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(2);
/* harmony export (immutable) */ exports["a"] = createToken;
/* unused harmony export verifyToken */


function createToken(user) {
    console.log('user Obj', user);
    var token = __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__["sign"](user, __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].jwtSecret, { expiresIn: "90 days" }); //expires in 90 days
    return token;
}
function verifyToken(token) {
    return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__["verify"](token, __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].jwtSecret, function (err, verifiedJwt) {
            if (err) {
                reject(err);
            }
            else {
                resolve(verifiedJwt);
            }
        });
    });
}
//# sourceMappingURL=D:/Web/Projects/todo-app/src/auth.service.js.map

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_crypto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_user_user_model__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return authRoutes; });





var router = __WEBPACK_IMPORTED_MODULE_1_express__["Router"]();
router.post('/', function (req, res) {
    __WEBPACK_IMPORTED_MODULE_4__api_user_user_model__["a" /* default */].findOne({ email: req.body.email })
        .exec(function (err, userObj) {
        if (err) {
            console.error('err', err);
            return res.json({ success: false, data: null, error: err });
        }
        else if (!userObj) {
            return res.json({ success: false, data: null, error: 'Email address not found' });
        }
        var hash = __WEBPACK_IMPORTED_MODULE_2_crypto__["createHmac"]('sha1', __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].salt).update(req.body.password).digest('hex');
        if (hash == userObj['password']) {
            var currentUser = {
                id: userObj._id,
                name: userObj['name'],
                email: userObj['email'],
            };
            var token = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* createToken */])(currentUser);
            currentUser['token'] = token;
            return res.json({ success: true, data: currentUser, error: null });
        }
        else {
            return res.json({ success: false, data: null, error: 'Incorrect Password!' });
        }
    });
});
var authRoutes = router;
//# sourceMappingURL=D:/Web/Projects/todo-app/src/index.js.map

/***/ },
/* 34 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 35 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 36 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 37 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 38 */
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"col-sm-8 col-sm-offset-2\">\r\n        <div class=\"col-md-6 col-md-offset-3\">\r\n            <h2>Todo</h2>\r\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && addTodo()\" #f=\"ngForm\" novalidate>\r\n                <div class=\"form-group\">\r\n                    <label for=\"email\">Add Todo</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"todo\" [(ngModel)]=\"todo.text\" #text=\"ngModel\" required />\r\n                    <!--<div *ngIf=\"f.submitted && !text.valid\" class=\"help-block\">Todo is required</div>-->\r\n                </div>\r\n                <div *ngIf=\"!error\" class=\"help-block\">{{errorMessage}}</div>\r\n                <div class=\"form-group\">\r\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\">Add</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ul>\r\n    <li *ngFor=\"let todo of todos\">\r\n        {{todo.text}} \r\n        <!--<button class=\"btn btn-xs btn-primary\" (click)=\"updateTodo()\">Update</button>-->\r\n        <button class=\"btn btn-xs btn-danger\" (click)=\"deleteTodo(todo._id)\">Delete</button>\r\n    </li>\r\n</ul>"

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"col-sm-8 col-sm-offset-2\">\r\n        <div class=\"col-md-6 col-md-offset-3\">\r\n            <h2>Login</h2>\r\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n                    <label for=\"email\">Email</label>\r\n                    <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"user.email\" #email=\"ngModel\" required />\r\n                    <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                    <label for=\"password\">Password</label>\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required />\r\n                    <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n                </div>\r\n                <div *ngIf=\"!error\" class=\"help-block\">{{errorMessage}}</div>\r\n                <div class=\"form-group\">\r\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n                    <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 41 */
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"col-sm-8 col-sm-offset-2\">\r\n        <div class=\"col-md-6 col-md-offset-3\">\r\n            <h2>Registration Form</h2>\r\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !name.valid }\">\r\n                    <label for=\"email\">Name</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"user.name\" #name=\"ngModel\" required />\r\n                    <div *ngIf=\"f.submitted && !name.valid\" class=\"help-block\">Name is required</div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n                    <label for=\"email\">Email</label>\r\n                    <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"user.email\" #email=\"ngModel\" required />\r\n                    <div *ngIf=\"f.submitted && !name.valid\" class=\"help-block\">Email is required</div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                    <label for=\"password\">Password</label>\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required />\r\n                    <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n                </div>\r\n                <div *ngIf=\"!error\" class=\"help-block\">{{errorMessage}}</div>\r\n                <div class=\"form-group\">\r\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports = require("@angular/compiler");

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports = require("@angular/forms");

/***/ },
/* 44 */
/***/ function(module, exports) {

module.exports = require("angular2-express-engine");

/***/ },
/* 45 */
/***/ function(module, exports) {

module.exports = require("angular2-platform-node/__private_imports__");

/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports = require("angular2-universal");

/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports = require("angular2-universal-polyfills");

/***/ },
/* 48 */
/***/ function(module, exports) {

module.exports = require("body-parser");

/***/ },
/* 49 */
/***/ function(module, exports) {

module.exports = require("compression");

/***/ },
/* 50 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/array");

/***/ },
/* 51 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/date");

/***/ },
/* 52 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/function");

/***/ },
/* 53 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/map");

/***/ },
/* 54 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/math");

/***/ },
/* 55 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/number");

/***/ },
/* 56 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/object");

/***/ },
/* 57 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-float");

/***/ },
/* 58 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-int");

/***/ },
/* 59 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/reflect");

/***/ },
/* 60 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/regexp");

/***/ },
/* 61 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/set");

/***/ },
/* 62 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/string");

/***/ },
/* 63 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/symbol");

/***/ },
/* 64 */
/***/ function(module, exports) {

module.exports = require("core-js/es7/reflect");

/***/ },
/* 65 */
/***/ function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ },
/* 66 */
/***/ function(module, exports) {

module.exports = require("morgan");

/***/ },
/* 67 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWVjNGRlZGM0YjNhOTk1YzU2OTYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9jb25maWcudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy90b2RvLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy91c2VyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9hcGkvdXNlci91c2VyLm1vZGVsLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19fMi4xLjEud29ya2Fyb3VuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLm5vZGUubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yb3V0ZXMvYXBwLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvbHlmaWxscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2FwaS90b2RvL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvYXBpL3RvZG8vdG9kby5jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvYXBpL3RvZG8vdG9kby5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2FwaS91c2VyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvYXBpL3VzZXIvdXNlci5jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvYXV0aC9hdXRoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9hdXRoL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21waWxlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItZXhwcmVzcy1lbmdpbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L2FycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvZGF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L2Z1bmN0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvbWF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L251bWJlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L29iamVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWZsb2F0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtaW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcmVmbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZ2V4cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3NldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3N0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3N5bWJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM3L3JlZmxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM5REEsMEM7Ozs7OztBQ0FBLHFDOzs7Ozs7O0FDQUEsSUFBSSxNQUFNLEdBQUc7SUFDWCxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLElBQUksZ0NBQWdDO0lBQ3JFLElBQUksRUFBRSx5Q0FBeUM7SUFDL0MsU0FBUyxFQUFFLHNDQUFzQztDQUNsRCxDQUFDO0FBSUYsNENBQWUsTUFBTSxDQUFDOzs7Ozs7O0FDUnRCLG9DOzs7Ozs7QUNBQSwwQzs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F5QztBQUNhO0FB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YSxjQUFjLDRVOzs7Ozs7QUNBN3VDLDJWQUEyViwwQ0FBMEMsdVlBQXVZLDJDQUEyQyxpWkFBaVosOENBQThDLDRhQUE0YSxjQUFjLGtQOzs7Ozs7QUNBaHJELDhDOzs7Ozs7QUNBQSwyQzs7Ozs7O0FDQUEsb0Q7Ozs7OztBQ0FBLHVFOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEseUQ7Ozs7OztBQ0FBLHdDOzs7Ozs7QUNBQSx3Qzs7Ozs7O0FDQUEsOEM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLG9EOzs7Ozs7QUNBQSxrRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSw0Qzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEseUM7Ozs7OztBQ0FBLG1DOzs7Ozs7QUNBQSxpQyIsImZpbGUiOiJzZXJ2ZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vcnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9yeSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0fSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDY4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1ZWM0ZGVkYzRiM2E5OTVjNTY5NiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb25nb29zZVwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImxldCBjb25maWcgPSB7XHJcbiAgbW9uZ29VUkw6IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIHx8ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L3RvZG8nLFxyXG4gIHNhbHQ6ICdESkVXKjMyNEtOQVNjc2FmQXdlOTg3eTJlQCNSV29paHdlZm45OCEnLFxyXG4gIGp3dFNlY3JldDogJ1NlY3JldEtleW9mdG9kb0FwcE1hZGVCeVVuaXZlcnNhbENsaSdcclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvY29uZmlnLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb2RvU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RvZG8uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XHJcblxyXG4gICAgdG9kbzogYW55ID0ge307XHJcbiAgICB0b2RvczogYW55ID0gW107XHJcbiAgICBsb2FkaW5nID0gZmFsc2U7XHJcbiAgICBlcnJvcjogYm9vbGVhbjtcclxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJydcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdG9kb1NlcnZpY2U6IFRvZG9TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5nZXRBbGxUb2RvcygpO1xyXG4gICAgfVxyXG4gICAgYWRkVG9kbygpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGlmICghdGhpcy50b2RvKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b2RvU2VydmljZS5hZGRUb2RvKHRoaXMudG9kbylcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZG8gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEFsbFRvZG9zKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gcmVzcG9uc2Uuc3VjY2VzcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZVRvZG8oaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudG9kb1NlcnZpY2UuZGVsZXRlVG9kbyhpZClcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBbGxUb2RvcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgdXBkYXRlVG9kbygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlVG9kbycpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbFRvZG9zKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgYWxsIHRvZG9zJyk7XHJcbiAgICAgICAgdGhpcy50b2RvU2VydmljZS5nZXRBbGxUb2RvKClcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UnLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9zID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSwgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnInLCBlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG5cclxuICAgIHVzZXI6IGFueSA9IHt9O1xyXG4gICAgbG9hZGluZyA9IGZhbHNlO1xyXG4gICAgZXJyb3I6IGJvb2xlYW47XHJcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0xvZ2luIENvbXBvbmVudCcpO1xyXG4gICAgIH1cclxuXHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYXV0aC5sb2dpbih0aGlzLnVzZXIuZW1haWwsIHRoaXMudXNlci5wYXNzd29yZClcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MgJiYgcmVzLmRhdGEudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzJywgcmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aC51c2VyT2JqZWN0ID0gcmVzLmRhdGE7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHJlcy5zdWNjZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnInLCBlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9yZWdpc3Rlci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCAge1xyXG4gICAgXHJcbiAgICB0aXRsZTogc3RyaW5nID0gJ1JlZ2lzdGVyIGNvbXBvbmVudCc7XHJcbiAgICB1c2VyOiBhbnkgPSB7fTtcclxuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGVycm9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICAgIHJlZ2lzdGVyKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHJlc3BvbnNlLnN1Y2Nlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdlcnJvcicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXF1ZXN0LCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIHVzZXI6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHVzZXJPYmplY3QoKTphbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IHVzZXJPYmplY3QodXNlcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZXInLCB1c2VyKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gICAgfVxyXG4gICAgbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9hdXRoJywgeyBlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZCB9KTtcclxuICAgICAgICAgICAgLyoubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBpZih1c2VyICYmIHVzZXIudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSovXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVxdWVzdCwgUmVzcG9uc2UsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVG9kb1NlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRUb2RvKHRvZG86IE9iamVjdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0b2RvJywgdG9kbyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL3RvZG9zLycsIHRvZG8pO1xyXG5cclxuICAgIH1cclxuICAgIHVwZGF0ZVRvZG8oKSB7XHJcblxyXG4gICAgfVxyXG4gICAgZGVsZXRlVG9kbyhpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoJy9hcGkvdG9kb3MvJysgaWQpO1xyXG4gICAgfVxyXG4gICAgZ2V0QWxsVG9kbygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL2FwaS90b2RvcycpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zZXJ2aWNlcy90b2RvLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIodXNlcjogT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL3VzZXJzLycsIHVzZXIpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zZXJ2aWNlcy91c2VyLnNlcnZpY2UudHMiLCJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCB7U2NoZW1hfSBmcm9tICdtb25nb29zZSc7XHJcbmxldCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgICBuYW1lOiB7dHlwZTogU3RyaW5nfSxcclxuICAgIGVtYWlsOiB7dHlwZTogU3RyaW5nLCBsb3dlcmNhc2U6IHRydWUsIHVuaXF1ZTogdHJ1ZX0sXHJcbiAgICBjcmVhdGVkQXQ6IHt0eXBlOiBEYXRlLCBkZWZhdWx0OiBEYXRlLm5vdygpfSxcclxuICAgIHBhc3N3b3JkOiB7dHlwZTogU3RyaW5nfVxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoJ1VzZXInLCB1c2VyU2NoZW1hKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL2FwaS91c2VyL3VzZXIubW9kZWwudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjcnlwdG9cIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiB0aGUgcG9seWZpbGxzIG11c3QgYmUgdGhlIGZpcnN0IHRoaW5nIGltcG9ydGVkXG4gKi9cbmltcG9ydCAnLi9wb2x5ZmlsbHMudHMnO1xuaW1wb3J0ICcuL19fMi4xLjEud29ya2Fyb3VuZC50cyc7IC8vIHRlbXBvcmFyeSB1bnRpbCAyLjEuMSB0aGluZ3MgYXJlIHBhdGNoZWQgaW4gQ29yZVxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCAqIGFzIG1vcmdhbiBmcm9tICdtb3JnYW4nO1xuaW1wb3J0ICogYXMgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nO1xuaW1wb3J0IHsgY3JlYXRlRW5naW5lIH0gZnJvbSAnYW5ndWxhcjItZXhwcmVzcy1lbmdpbmUnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5ub2RlLm1vZHVsZSc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcbmltcG9ydCBjb25maWcgIGZyb20gJy4vc2VydmVyL2NvbmZpZyc7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL3NlcnZlci5yb3V0ZXMnO1xuaW1wb3J0IHsgYXV0aFJvdXRlcyB9IGZyb20gJy4vc2VydmVyL2F1dGgnO1xuaW1wb3J0IHsgdXNlclJvdXRlcyB9IGZyb20gJy4vc2VydmVyL2FwaS91c2VyJztcbmltcG9ydCB7IHRvZG9Sb3V0ZXMgfSBmcm9tICcuL3NlcnZlci9hcGkvdG9kbyc7XG5cbm1vbmdvb3NlLmNvbm5lY3QoY29uZmlnLm1vbmdvVVJMKTtcbm1vbmdvb3NlLmNvbm5lY3Rpb24ub24oJ2Vycm9yJywgKGVycikgPT4ge1xuICBjb25zb2xlLmxvZyhgTW9uZ29EQiBjb25uZWN0aW9uIGVycm9yOiAke2Vycn1gKTtcbiAgcHJvY2Vzcy5leGl0KC0xKTtcbn0pXG5cbi8vIEFwcFxuXG5jb25zdCBhcHAgID0gZXhwcmVzcygpO1xuY29uc3QgUk9PVCA9IHBhdGguam9pbihwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4nKSk7XG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA0MjAwO1xuXG4vKipcbiAqIGVuYWJsZSBwcm9kIG1vZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzXG4gKi9cbmlmIChlbnZpcm9ubWVudC5wcm9kdWN0aW9uKSB7XG4gIGVuYWJsZVByb2RNb2RlKCk7XG59XG5cbi8qKlxuICogRXhwcmVzcyBWaWV3XG4gKi9cbmFwcC5lbmdpbmUoJy5odG1sJywgY3JlYXRlRW5naW5lKHt9KSk7XG5hcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihST09ULCAnY2xpZW50JykpO1xuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnaHRtbCcpO1xuXG4vKipcbiAqIEVuYWJsZSBjb21wcmVzc2lvblxuICovXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oe2xpbWl0OiAnMjBtYid9KSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7bGltaXQ6ICcyMG1iJywgZXh0ZW5kZWQ6IGZhbHNlfSkpO1xuYXBwLnVzZShtb3JnYW4oJ2RldicpKTtcblxuLyoqXG4gKiBzZXJ2ZSBzdGF0aWMgZmlsZXNcbiAqL1xuYXBwLnVzZSgnLycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihST09ULCAnY2xpZW50JyksIHtpbmRleDogZmFsc2V9KSk7XG5cbi8qKlxuICogcGxhY2UgeW91ciBhcGkgcm91dGVzIGhlcmVcbiAqL1xuLy8gYXBwLnVzZSgnL2FwaScsIGFwaSk7XG4vLyBhcHAudXNlKCcvYXBpL3VzZXJzJywgcmVxdWlyZSgnLi9zZXJ2ZXIvYXBpL3VzZXInKSk7XG5hcHAudXNlKCcvYXBpL3VzZXJzJywgdXNlclJvdXRlcyk7XG5hcHAudXNlKCcvYXBpL3RvZG9zJywgdG9kb1JvdXRlcyk7XG5hcHAudXNlKCcvYXBpL2F1dGgnLCBhdXRoUm91dGVzKTtcbi8vIGFwcC51c2UoJy9hcGkvdG9kb3MnLCByZXF1aXJlKCcuL3NlcnZlci9hcGkvdG9kbycpKTtcbi8vIGFwcC51c2UoJy9hcGkvYXV0aCcsIHJlcXVpcmUoJy4vc2VydmVyL2F1dGgnKSk7XG5cbi8qKlxuICogYm9vdHN0cmFwIHVuaXZlcnNhbCBhcHBcbiAqIEBwYXJhbSByZXFcbiAqIEBwYXJhbSByZXNcbiAqL1xuZnVuY3Rpb24gbmdBcHAocmVxOiBhbnksIHJlczogYW55KSB7XG4gIHJlcy5yZW5kZXIoJ2luZGV4Jywge1xuICAgIHJlcSxcbiAgICByZXMsXG4gICAgbmdNb2R1bGU6IEFwcE1vZHVsZSxcbiAgICBwcmVib290OiBmYWxzZSxcbiAgICBiYXNlVXJsOiAnLycsXG4gICAgcmVxdWVzdFVybDogcmVxLm9yaWdpbmFsVXJsLFxuICAgIG9yaWdpblVybDogcmVxLmhvc3RuYW1lXG4gIH0pO1xufVxuXG4vKipcbiAqIHVzZSB1bml2ZXJzYWwgZm9yIHNwZWNpZmljIHJvdXRlc1xuICovXG5hcHAuZ2V0KCcvJywgbmdBcHApO1xucm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICBhcHAuZ2V0KGAvJHtyb3V0ZX1gLCBuZ0FwcCk7XG4gIGFwcC5nZXQoYC8ke3JvdXRlfS8qYCwgbmdBcHApO1xufSk7XG5cbi8qKlxuICogaWYgeW91IHdhbnQgdG8gdXNlIHVuaXZlcnNhbCBmb3IgYWxsIHJvdXRlcywgeW91IGNhbiB1c2UgdGhlICcqJyB3aWxkY2FyZFxuICovXG5cbmFwcC5nZXQoJyonLCBmdW5jdGlvbiAocmVxOiBhbnksIHJlczogYW55KSB7XG4gIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gIGNvbnN0IHBvam8gPSB7c3RhdHVzOiA0MDQsIG1lc3NhZ2U6ICdObyBDb250ZW50J307XG4gIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShwb2pvLCBudWxsLCAyKTtcbiAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoanNvbik7XG59KTtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIudHMiLCIvKlxuICogVEhJUyBJUyBURU1QT1JBUlkgVE8gUEFUQ0ggMi4xLjErIENvcmUgYnVnc1xuICovXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5sZXQgX19jb21waWxlcl9fOiBhbnkgPSByZXF1aXJlKCdAYW5ndWxhci9jb21waWxlcicpO1xuaW1wb3J0IHsgX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xudmFyIF9fY29yZV9wcml2YXRlX186IGFueSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbmxldCBwYXRjaDogQm9vbGVhbiA9IGZhbHNlO1xuXG5pZiAoIV9fY29yZV9wcml2YXRlX18uaGFzT3duUHJvcGVydHkoJ1ZpZXdVdGlscycpKSB7XG4gICAgcGF0Y2ggPSB0cnVlO1xuICAgIF9fY29yZV9wcml2YXRlX18uVmlld1V0aWxzID0gX19jb3JlX3ByaXZhdGVfXy52aWV3X3V0aWxzO1xufVxuXG5pZiAoIV9fY29tcGlsZXJfXy5fX2NvbXBpbGVyX3ByaXZhdGVfXykge1xuICAgIHBhdGNoID0gdHJ1ZTtcbiAgICAoX19jb21waWxlcl9fKS5fX2NvbXBpbGVyX3ByaXZhdGVfXyA9IHtcbiAgICAgICAgU2VsZWN0b3JNYXRjaGVyOiBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyLFxuICAgICAgICBDc3NTZWxlY3RvcjogX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXG4gICAgfVxufVxuXG52YXIgX191bml2ZXJzYWxfXzogYW55ID0gcmVxdWlyZSgnYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fJyk7XG5pZiAocGF0Y2gpIHtcbiAgICBfX3VuaXZlcnNhbF9fLlZpZXdVdGlscyA9IF9fY29yZV9wcml2YXRlX18udmlld191dGlscztcbiAgICBfX3VuaXZlcnNhbF9fLkNzc1NlbGVjdG9yID0gX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXG4gICAgX191bml2ZXJzYWxfXy5TZWxlY3Rvck1hdGNoZXIgPSBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX18yLjEuMS53b3JrYXJvdW5kLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgdGl0bGUgPSAnYXBwIHdvcmtzISc7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgYXBwUm91dGVzIH0gZnJvbSAnLi9yb3V0ZXMvYXBwLnJvdXRlJztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IFRvZG9TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy90b2RvLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICAvKiogUm9vdCBBcHAgQ29tcG9uZW50ICovXHJcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxyXG4gICAgLyoqIE91ciBDb21wb25lbnRzICovXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgTG9naW5Db21wb25lbnQsXHJcbiAgICAgICAgUmVnaXN0ZXJDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpLFxyXG4gICAgICAgIFVuaXZlcnNhbE1vZHVsZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFVzZXJTZXJ2aWNlLFxyXG4gICAgICAgIEF1dGhTZXJ2aWNlLFxyXG4gICAgICAgIFRvZG9TZXJ2aWNlXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5tb2R1bGUudHMiLCJleHBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC5tb2R1bGUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAubm9kZS5tb2R1bGUudHMiLCJleHBvcnQgKiBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC50cyIsImltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4uL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuLi9ob21lL2hvbWUuY29tcG9uZW50JztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYXBwUm91dGVzOiBSb3V0ZXMgPSBbXHJcblxyXG4gICAgeyBwYXRoOiAnbG9naW4nLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICdyZWdpc3RlcicsIGNvbXBvbmVudDogUmVnaXN0ZXJDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ2xvZ2luJyB9XHJcbl1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3JvdXRlcy9hcHAucm91dGUudHMiLCIvLyBUaGUgZmlsZSBjb250ZW50cyBmb3IgdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQgd2lsbCBvdmVyd3JpdGUgdGhlc2UgZHVyaW5nIGJ1aWxkLlxuLy8gVGhlIGJ1aWxkIHN5c3RlbSBkZWZhdWx0cyB0byB0aGUgZGV2IGVudmlyb25tZW50IHdoaWNoIHVzZXMgYGVudmlyb25tZW50LnRzYCwgYnV0IGlmIHlvdSBkb1xuLy8gYHVuZyBidWlsZCAtLWVudj1wcm9kYCB0aGVuIGBlbnZpcm9ubWVudC5wcm9kLnRzYCB3aWxsIGJlIHVzZWQgaW5zdGVhZC5cbi8vIFRoZSBsaXN0IG9mIHdoaWNoIGVudiBtYXBzIHRvIHdoaWNoIGZpbGUgY2FuIGJlIGZvdW5kIGluIGBhbmd1bGFyLWNsaS5qc29uYC5cblxuZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xuICBwcm9kdWN0aW9uOiBmYWxzZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQudHMiLCIvLyBUaGlzIGZpbGUgaW5jbHVkZXMgcG9seWZpbGxzIG5lZWRlZCBieSBBbmd1bGFyIDIgYW5kIGlzIGxvYWRlZCBiZWZvcmVcbi8vIHRoZSBhcHAuIFlvdSBjYW4gYWRkIHlvdXIgb3duIGV4dHJhIHBvbHlmaWxscyB0byB0aGlzIGZpbGUuXG5cbmltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3N5bWJvbCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L29iamVjdCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L2Z1bmN0aW9uJztcbmltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtaW50JztcbmltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtZmxvYXQnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9udW1iZXInO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9tYXRoJztcbmltcG9ydCAnY29yZS1qcy9lczYvc3RyaW5nJztcbmltcG9ydCAnY29yZS1qcy9lczYvZGF0ZSc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L2FycmF5JztcbmltcG9ydCAnY29yZS1qcy9lczYvcmVnZXhwJztcbmltcG9ydCAnY29yZS1qcy9lczYvbWFwJztcbmltcG9ydCAnY29yZS1qcy9lczYvc2V0JztcbmltcG9ydCAnY29yZS1qcy9lczYvcmVmbGVjdCc7XG5cbmltcG9ydCAnY29yZS1qcy9lczcvcmVmbGVjdCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcG9seWZpbGxzLnRzIiwiLyoqXG4gKiBTZXJ2ZXItc2lkZSByb3V0ZXMuIE9ubHkgdGhlIGxpc3RlZCByb3V0ZXMgc3VwcG9ydCBodG1sNXB1c2hzdGF0ZS5cbiAqIEhhcyB0byBtYXRjaCBjbGllbnQgc2lkZSByb3V0ZXMuXG4gKlxuICogSW5kZXggKC8pIHJvdXRlIGRvZXMgbm90IGhhdmUgdG8gYmUgbGlzdGVkIGhlcmUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGV4cG9ydCBjb25zdCByb3V0ZXM6IHN0cmluZ1tdID0gW1xuICogJ2hvbWUnLCAnYWJvdXQnXG4gKiBdO1xuICoqL1xuZXhwb3J0IGNvbnN0IHJvdXRlczogc3RyaW5nW10gPSBbXG4gICAgJ2xvZ2luJyxcbiAgICAncmVnaXN0ZXInLFxuICAgICdob21lJ1xuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIucm91dGVzLnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0ICogYXMgdG9kb0NvbnRyb2xsZXIgZnJvbSAnLi90b2RvLmNvbnRyb2xsZXInO1xyXG5sZXQgcm91dGVyOiBleHByZXNzLlJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG5cclxucm91dGVyLmdldCgnLycsIHRvZG9Db250cm9sbGVyLmluZGV4KTtcclxucm91dGVyLmdldCgnLzppZCcsIHRvZG9Db250cm9sbGVyLnNob3cpO1xyXG5yb3V0ZXIucG9zdCgnLycsIHRvZG9Db250cm9sbGVyLmNyZWF0ZSk7XHJcbnJvdXRlci5wdXQoJy86aWQnLCB0b2RvQ29udHJvbGxlci51cGRhdGUpO1xyXG5yb3V0ZXIuZGVsZXRlKCcvOmlkJywgdG9kb0NvbnRyb2xsZXIuZGVzdHJveSk7XHJcblxyXG5leHBvcnQgY29uc3QgdG9kb1JvdXRlcyA9IHJvdXRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL2FwaS90b2RvL2luZGV4LnRzIiwiaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvLm1vZGVsJztcclxuaW1wb3J0ICogYXMgY3J5cHRvIGZyb20gJ2NyeXB0byc7XHJcbi8vIEdldCBhbGxcclxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4KHJlcSwgcmVzKSB7XHJcbiAgICBUb2RvLmZpbmQoKS5zb3J0KCctZGF0ZScpXHJcbiAgICAgICAgLmV4ZWMoKGVyciwgdG9kb3MpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiBlcnIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB0b2RvcywgZXJyb3I6IG51bGwgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxufVxyXG4vLyBHZXQgc2luZ2xlXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93KHJlcSwgcmVzKSB7XHJcblxyXG59XHJcbi8vIFBvc3QvQ3JlYXRlXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUocmVxLCByZXMpIHtcclxuICAgIGNvbnNvbGUubG9nKCdyZXEuYm9keScsIHJlcS5ib2R5KTtcclxuICAgIFRvZG8uY3JlYXRlKHJlcS5ib2R5KVxyXG4gICAgICAgIC50aGVuKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB0b2RvLCBlcnJvcjogbnVsbCB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogJ0NvbnRhY3Qgc3VwcG9ydCcsIGVycm9yOiBlcnIgfSk7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuLy8gVXBkYXRlXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGUocmVxLCByZXMpIHtcclxuXHJcbn1cclxuLy8gRGVsZXRlXHJcbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95KHJlcSwgcmVzKSB7XHJcbiAgICBjb25zb2xlLmxvZygncmVxLnBhcmFtcy5pZCcsIHJlcS5wYXJhbXMuaWQpO1xyXG4gICAgVG9kby5yZW1vdmUoeyBfaWQ6IHJlcS5wYXJhbXMuaWQgfSlcclxuICAgICAgICAuZXhlYygoZXJyLCB0b2RvKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiAnQ29udGFjdCBzdXBwb3J0JywgZXJyOiBlcnIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdG9kbywgZXJyOiBudWxsIH0pO1xyXG4gICAgICAgIH0pXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9hcGkvdG9kby90b2RvLmNvbnRyb2xsZXIudHMiLCJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCB7U2NoZW1hfSBmcm9tICdtb25nb29zZSc7XHJcbmxldCBUb2RvU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgICB0ZXh0OiB7dHlwZTogU3RyaW5nfSxcclxuICAgIGNyZWF0ZWRBdDoge3R5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93KCl9LFxyXG59KVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKCdUb2RvJywgVG9kb1NjaGVtYSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9hcGkvdG9kby90b2RvLm1vZGVsLnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0ICogYXMgdXNlckNvbnRyb2xsZXIgZnJvbSAnLi91c2VyLmNvbnRyb2xsZXInO1xyXG5cclxuXHJcbmxldCByb3V0ZXI6IGV4cHJlc3MuUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy8nLCB1c2VyQ29udHJvbGxlci5pbmRleCk7XHJcbnJvdXRlci5nZXQoJy86aWQnLCB1c2VyQ29udHJvbGxlci5zaG93KTtcclxucm91dGVyLnBvc3QoJy8nLCB1c2VyQ29udHJvbGxlci5jcmVhdGUpO1xyXG5yb3V0ZXIucHV0KCcvOmlkJywgdXNlckNvbnRyb2xsZXIudXBkYXRlKTtcclxucm91dGVyLmRlbGV0ZSgnLzppZCcsIHVzZXJDb250cm9sbGVyLmRlc3Ryb3kpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJSb3V0ZXMgPSByb3V0ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9hcGkvdXNlci9pbmRleC50cyIsImltcG9ydCBVc2VyIGZyb20gJy4vdXNlci5tb2RlbCc7XHJcbmltcG9ydCAqIGFzIGNyeXB0byBmcm9tICdjcnlwdG8nO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcblxyXG4vLyBHZXQgYWxsXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmRleChyZXEsIHJlcykge1xyXG4gICAgcmVzLnNlbmQoJ1VzZXIgYXBpIGlzIHdvcmtpbmcgbm93Jyk7XHJcbn1cclxuLy8gR2V0IHNpbmdsZVxyXG5leHBvcnQgZnVuY3Rpb24gc2hvdyhyZXEsIHJlcykge1xyXG5cclxufVxyXG4vLyBQb3N0L0NyZWF0ZVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKHJlcSwgcmVzKSB7XHJcbiAgICBVc2VyLmZpbmRPbmUoeyBlbWFpbDogcmVxLmJvZHkuZW1haWwgfSlcclxuICAgICAgICAuZXhlYygoZXJyLCB1c2VyT2JqKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogJ0NvbnRhY3Qgc3VwcG9ydCcgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodXNlck9iaiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHdIYXNoID0gY3J5cHRvLmNyZWF0ZUhtYWMoJ3NoYTEnLCBjb25maWcuc2FsdCkudXBkYXRlKHJlcS5ib2R5LnBhc3N3b3JkKS5kaWdlc3QoJ2hleCcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHVzZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVxLmJvZHkubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHB3SGFzaFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIFVzZXIuY3JlYXRlKHVzZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6ICdVc2VyIGNyZWF0ZWQnLCBlcnJvcjogbnVsbCB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdlcnInLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6ICdDb250YWN0IHN1cHBvcnQnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogZmFsc2UsIGRhdGE6ICdVc2VyIGFscmVhZHkgZXhpc3RzJywgZXJyb3I6IG51bGwgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxufVxyXG4vLyBVcGRhdGVcclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZShyZXEsIHJlcykge1xyXG5cclxufVxyXG4vLyBEZWxldGVcclxuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3kocmVxLCByZXMpIHtcclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9hcGkvdXNlci91c2VyLmNvbnRyb2xsZXIudHMiLCJpbXBvcnQgKiBhcyBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2tlbih1c2VyOiBPYmplY3QpIHtcclxuICAgIGNvbnNvbGUubG9nKCd1c2VyIE9iaicsIHVzZXIpO1xyXG4gICAgbGV0IHRva2VuID0gand0LnNpZ24odXNlciwgY29uZmlnLmp3dFNlY3JldCwgeyBleHBpcmVzSW46IFwiOTAgZGF5c1wiIH0pOyAvL2V4cGlyZXMgaW4gOTAgZGF5c1xyXG4gICAgcmV0dXJuIHRva2VuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VG9rZW4odG9rZW46IHN0cmluZykge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBqd3QudmVyaWZ5KHRva2VuLCBjb25maWcuand0U2VjcmV0LCAoZXJyLCB2ZXJpZmllZEp3dCkgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzb2x2ZSh2ZXJpZmllZEp3dCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9hdXRoL2F1dGguc2VydmljZS50cyIsImltcG9ydCBjb25maWcgZnJvbSAnLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgKiBhcyBjcnlwdG8gZnJvbSAnY3J5cHRvJztcclxuaW1wb3J0IHsgY3JlYXRlVG9rZW4gfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uL2FwaS91c2VyL3VzZXIubW9kZWwnO1xyXG5cclxubGV0IHJvdXRlcjogZXhwcmVzcy5Sb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxucm91dGVyLnBvc3QoJy8nLCAocmVxLCByZXMpID0+IHtcclxuICBVc2VyLmZpbmRPbmUoeyBlbWFpbDogcmVxLmJvZHkuZW1haWwgfSlcclxuICAgIC5leGVjKChlcnIsIHVzZXJPYmopID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2VycicsIGVycik7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiBlcnJ9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKCF1c2VyT2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiAnRW1haWwgYWRkcmVzcyBub3QgZm91bmQnIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBoYXNoID0gY3J5cHRvLmNyZWF0ZUhtYWMoJ3NoYTEnLCBjb25maWcuc2FsdCkudXBkYXRlKHJlcS5ib2R5LnBhc3N3b3JkKS5kaWdlc3QoJ2hleCcpO1xyXG4gICAgICBpZihoYXNoID09IHVzZXJPYmpbJ3Bhc3N3b3JkJ10pIHtcclxuICAgICAgICBsZXQgY3VycmVudFVzZXIgPSB7XHJcbiAgICAgICAgICBpZDogdXNlck9iai5faWQsXHJcbiAgICAgICAgICBuYW1lOiB1c2VyT2JqWyduYW1lJ10sXHJcbiAgICAgICAgICBlbWFpbDogdXNlck9ialsnZW1haWwnXSxcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRva2VuID0gY3JlYXRlVG9rZW4oY3VycmVudFVzZXIpO1xyXG4gICAgICAgIGN1cnJlbnRVc2VyWyd0b2tlbiddID0gdG9rZW47XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtzdWNjZXNzOiB0cnVlLCBkYXRhOiBjdXJyZW50VXNlciwgZXJyb3I6IG51bGx9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6ICdJbmNvcnJlY3QgUGFzc3dvcmQhJyB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5leHBvcnQgY29uc3QgYXV0aFJvdXRlcyA9IHJvdXRlcjtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvYXV0aC9pbmRleC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCJcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTggY29sLXNtLW9mZnNldC0yXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02IGNvbC1tZC1vZmZzZXQtM1xcXCI+XFxyXFxuICAgICAgICAgICAgPGgyPlRvZG88L2gyPlxcclxcbiAgICAgICAgICAgIDxmb3JtIG5hbWU9XFxcImZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcImYuZm9ybS52YWxpZCAmJiBhZGRUb2RvKClcXFwiICNmPVxcXCJuZ0Zvcm1cXFwiIG5vdmFsaWRhdGU+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiZW1haWxcXFwiPkFkZCBUb2RvPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ0b2RvXFxcIiBbKG5nTW9kZWwpXT1cXFwidG9kby50ZXh0XFxcIiAjdGV4dD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2ICpuZ0lmPVxcXCJmLnN1Ym1pdHRlZCAmJiAhdGV4dC52YWxpZFxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPlRvZG8gaXMgcmVxdWlyZWQ8L2Rpdj4tLT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIiFlcnJvclxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPnt7ZXJyb3JNZXNzYWdlfX08L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XFxcImxvYWRpbmdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPkFkZDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPHVsPlxcclxcbiAgICA8bGkgKm5nRm9yPVxcXCJsZXQgdG9kbyBvZiB0b2Rvc1xcXCI+XFxyXFxuICAgICAgICB7e3RvZG8udGV4dH19IFxcclxcbiAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XFxcImJ0biBidG4teHMgYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcInVwZGF0ZVRvZG8oKVxcXCI+VXBkYXRlPC9idXR0b24+LS0+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXhzIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcImRlbGV0ZVRvZG8odG9kby5faWQpXFxcIj5EZWxldGU8L2J1dHRvbj5cXHJcXG4gICAgPC9saT5cXHJcXG48L3VsPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04IGNvbC1zbS1vZmZzZXQtMlxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTNcXFwiPlxcclxcbiAgICAgICAgICAgIDxoMj5Mb2dpbjwvaDI+XFxyXFxuICAgICAgICAgICAgPGZvcm0gbmFtZT1cXFwiZm9ybVxcXCIgKG5nU3VibWl0KT1cXFwiZi5mb3JtLnZhbGlkICYmIGxvZ2luKClcXFwiICNmPVxcXCJuZ0Zvcm1cXFwiIG5vdmFsaWRhdGU+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieyAnaGFzLWVycm9yJzogZi5zdWJtaXR0ZWQgJiYgIWVtYWlsLnZhbGlkIH1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiZW1haWxcXFwiPkVtYWlsPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmVtYWlsXFxcIiAjZW1haWw9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJmLnN1Ym1pdHRlZCAmJiAhZW1haWwudmFsaWRcXFwiIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5FbWFpbCBpcyByZXF1aXJlZDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7ICdoYXMtZXJyb3InOiBmLnN1Ym1pdHRlZCAmJiAhcGFzc3dvcmQudmFsaWQgfVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFxcXCI+UGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIucGFzc3dvcmRcXFwiICNwYXNzd29yZD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImYuc3VibWl0dGVkICYmICFwYXNzd29yZC52YWxpZFxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPlBhc3N3b3JkIGlzIHJlcXVpcmVkPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCIhZXJyb3JcXFwiIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj57e2Vycm9yTWVzc2FnZX19PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVxcXCJsb2FkaW5nXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5Mb2dpbjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9yZWdpc3RlciddXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1saW5rXFxcIj5SZWdpc3RlcjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTggY29sLXNtLW9mZnNldC0yXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02IGNvbC1tZC1vZmZzZXQtM1xcXCI+XFxyXFxuICAgICAgICAgICAgPGgyPlJlZ2lzdHJhdGlvbiBGb3JtPC9oMj5cXHJcXG4gICAgICAgICAgICA8Zm9ybSBuYW1lPVxcXCJmb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJmLmZvcm0udmFsaWQgJiYgcmVnaXN0ZXIoKVxcXCIgI2Y9XFxcIm5nRm9ybVxcXCIgbm92YWxpZGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7ICdoYXMtZXJyb3InOiBmLnN1Ym1pdHRlZCAmJiAhbmFtZS52YWxpZCB9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsXFxcIj5OYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJuYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5uYW1lXFxcIiAjbmFtZT1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImYuc3VibWl0dGVkICYmICFuYW1lLnZhbGlkXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+TmFtZSBpcyByZXF1aXJlZDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7ICdoYXMtZXJyb3InOiBmLnN1Ym1pdHRlZCAmJiAhZW1haWwudmFsaWQgfVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJlbWFpbFxcXCI+RW1haWw8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuZW1haWxcXFwiICNlbWFpbD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImYuc3VibWl0dGVkICYmICFuYW1lLnZhbGlkXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+RW1haWwgaXMgcmVxdWlyZWQ8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieyAnaGFzLWVycm9yJzogZi5zdWJtaXR0ZWQgJiYgIXBhc3N3b3JkLnZhbGlkIH1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRcXFwiPlBhc3N3b3JkPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLnBhc3N3b3JkXFxcIiAjcGFzc3dvcmQ9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJmLnN1Ym1pdHRlZCAmJiAhcGFzc3dvcmQudmFsaWRcXFwiIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5QYXNzd29yZCBpcyByZXF1aXJlZDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiIWVycm9yXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+e3tlcnJvck1lc3NhZ2V9fTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cXFwibG9hZGluZ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+UmVnaXN0ZXI8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21waWxlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbXBpbGVyXCJcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItZXhwcmVzcy1lbmdpbmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIlxuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYm9keS1wYXJzZXJcIlxuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29tcHJlc3Npb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9hcnJheVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L2FycmF5XCJcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L2RhdGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9kYXRlXCJcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L2Z1bmN0aW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvZnVuY3Rpb25cIlxuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L21hdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L251bWJlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L251bWJlclwiXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9vYmplY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9vYmplY3RcIlxuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcGFyc2UtZmxvYXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9wYXJzZS1pbnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1pbnRcIlxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcmVmbGVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZmxlY3RcIlxuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcmVnZXhwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcmVnZXhwXCJcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3NldFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3NldFwiXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zdHJpbmdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zdHJpbmdcIlxuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvc3ltYm9sXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvc3ltYm9sXCJcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM3L3JlZmxlY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpzb253ZWJ0b2tlblwiXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb3JnYW5cIlxuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==