(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mateus\Desktop\ProjetoTec\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Hj8y":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/contato/contato.component.ts ***!
  \***************************************************************/
/*! exports provided: ContatoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoComponent", function() { return ContatoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



class ContatoComponent {
    constructor() { }
    ngOnInit() {
    }
    enviar() {
        alert("obrigado Sr(a) " + this.value);
    }
}
ContatoComponent.ɵfac = function ContatoComponent_Factory(t) { return new (t || ContatoComponent)(); };
ContatoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContatoComponent, selectors: [["app-contato"]], decls: 25, vars: 1, consts: [[1, "form-signin"], ["action", "mailto:onestock0software@gmail.com", "method", "post"], ["src", "https://image.flaticon.com/icons/png/512/2080/2080904.png", "alt", "Cadastro", "height", "34%", "width", "34%", 1, "displayed"], [1, "inputBox"], ["type", "text", "name", "nome", "required", "required", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "required"], ["type", "tel", "required", "required"], [1, "textArea"], ["cols", "40", "rows", "10"], [1, "example-button-row"], ["mat-raised-button", "", 3, "click"]], template: function ContatoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContatoComponent_Template_input_ngModelChange_6_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "telefone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "textArea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sua Opni\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContatoComponent_Template_button_click_23_listener() { return ctx.enviar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".form-signin[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    border-radius:20px;\r\n    height: 100vh;\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: 125px auto;\r\n  }\r\n\r\n  IMG.displayed[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n  .form-signin[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 300px;\r\n    height:46px;\r\n    margin: bottom 35px;\r\n  }\r\n\r\n  .form-signin[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]:last-child{\r\n    margin: bottom 0;\r\n  }\r\n\r\n  .form-signin[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    position:absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    border: 1px solid #111;\r\n    background: transparent;\r\n    padding:10px;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    outline:none;\r\n    font-size: 16px;\r\n    color: #111;\r\n    font-weight: 300;\r\n\r\n  }\r\n\r\n  .form-signin[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    position:absolute;\r\n    top:1px;\r\n    left:1px;\r\n    padding: 10px;\r\n    display:inline-block;\r\n    font-size:16px;\r\n    color:#111;\r\n    font-weight:300;\r\n    transition: 0.5s;\r\n    pointer-events:none;\r\n  }\r\n\r\n  .form-signin[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], .form-signin[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%]\r\n  {\r\n    transform:translateX(-10px) translateY(-32px);\r\n    font-size:12px;\r\n  }\r\n\r\n  .form-signin[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]{\r\n    background: #2196f3;\r\n    color: #fff;\r\n    border:none;\r\n    max-width:120px;\r\n  }\r\n\r\n  .form-signin[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .input[_ngcontent-%COMP%]:hover{\r\n    outline: none;\r\n    border-color:#ee6021;\r\n    box-shadow: 0px 0px 8px 2px #ee6021;\r\n  }\r\n\r\n  .form-signin[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   #rad[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    font-size:9px;\r\n  }\r\n\r\n  .form-signin[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   #rad[_ngcontent-%COMP%]   #divgen[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .form-signin[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   #rad[_ngcontent-%COMP%]   #divgen[_ngcontent-%COMP%]   #labgen[_ngcontent-%COMP%]{\r\n    font-size:13px;\r\n  }\r\n\r\n  textarea[_ngcontent-%COMP%] {\r\n    color: black;\r\n    background: transparent;\r\n    margin-top: 10px;\r\n    -webkit-border-radius: 5px;\r\n    -moz-border-radius: 5px;\r\n    border: 1px solid;\r\n}\r\n\r\n  textarea[_ngcontent-%COMP%]:hover, textarea[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    border-color:#ee6021;\r\n    box-shadow: 0px 0px 8px 2px #ee6021; \r\n}\r\n\r\n  .botao[_ngcontent-%COMP%]{\r\n    background-color: orange;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjs7RUFFbEI7O0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7OztJQUdFLDZDQUE2QztJQUM3QyxjQUFjO0VBQ2hCOztFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFDQTtJQUNFLGFBQWE7SUFDYixvQkFBb0I7SUFHcEIsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0UsY0FBYztFQUNoQjs7RUFFRjtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztFQUVBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUdwQixtQ0FBbUM7QUFDdkM7O0VBRUE7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoiY29udGF0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLXNpZ25pbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMTI1cHggYXV0bztcclxuICB9XHJcblxyXG4gIElNRy5kaXNwbGF5ZWQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5mb3JtLXNpZ25pbiAuaW5wdXRCb3h7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6NDZweDtcclxuICAgIG1hcmdpbjogYm90dG9tIDM1cHg7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1zaWduaW4gLmlucHV0Qm94Omxhc3QtY2hpbGR7XHJcbiAgICBtYXJnaW46IGJvdHRvbSAwO1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gLmlucHV0Qm94IGlucHV0e1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTExO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3V0bGluZTpub25lO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMxMTE7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG5cclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIC5pbnB1dEJveCBsYWJlbHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjFweDtcclxuICAgIGxlZnQ6MXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBjb2xvcjojMTExO1xyXG4gICAgZm9udC13ZWlnaHQ6MzAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1zaWduaW4gLmlucHV0Qm94IGlucHV0OmZvY3VzIH4gbGFiZWwsXHJcbiAgLmZvcm0tc2lnbmluIC5pbnB1dEJveCBpbnB1dDp2YWxpZCB+IGxhYmVsXHJcbiAge1xyXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwcHgpIHRyYW5zbGF0ZVkoLTMycHgpO1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiAuaW5wdXRCb3ggaW5wdXRbdHlwZT1cInN1Ym1pdFwiXXtcclxuICAgIGJhY2tncm91bmQ6ICMyMTk2ZjM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgbWF4LXdpZHRoOjEyMHB4O1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gLmlucHV0Qm94IGlucHV0OmZvY3VzLCAuaW5wdXQ6aG92ZXJ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiNlZTYwMjE7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCAjZWU2MDIxO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAycHggI2VlNjAyMTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCAjZWU2MDIxO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tc2lnbmluIHRhYmxlICNyYWQgbGFiZWx7XHJcbiAgICBmb250LXNpemU6OXB4O1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gdGFibGUgI3JhZCAjZGl2Z2VuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIHRhYmxlICNyYWQgI2RpdmdlbiAjbGFiZ2Vue1xyXG4gICAgZm9udC1zaXplOjEzcHg7XHJcbiAgfVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcblxyXG50ZXh0YXJlYTpob3ZlciwgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjojZWU2MDIxO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAycHggI2VlNjAyMTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA4cHggMnB4ICNlZTYwMjE7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAycHggI2VlNjAyMTsgXHJcbn1cclxuXHJcbi5ib3Rhb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "KnQY":
/*!****************************************************************!*\
  !*** ./src/app/components/template/footer/footer.component.ts ***!
  \****************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 14, vars: 0, consts: [[1, "footer"], [1, "nome"], ["routerLink", "/home"], [1, "cp"], [1, "icons"], ["href", "https://web.facebook.com/rafael.dossantosdourado", "target", "_blank"], ["src", "assets/img/Icons/face.png"], ["href", "https://www.instagram.com/onestock_software/?hl=pt-br", "target", "_blank"], ["src", "assets/img/Icons/insta.png"], ["href", "http://api.whatsapp.com/send?1=pt_BR&phone=5562981252559", "target", "_blank"], ["src", "assets/img/Icons/zap.png"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "OneStock copyright ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".footer[_ngcontent-%COMP%]{\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 55px;\r\n    background-color: #fff;\r\n    position: fixed;  \r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n}\r\n\r\n.nome[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: #ee6021;\r\n}\r\n\r\n.nome[_ngcontent-%COMP%]{\r\n    \r\n    margin-right: 5px;;\r\n    float: right;\r\n    font-weight: 300;\r\n\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    \r\n    float: left;\r\n    width: 25px;\r\n    margin-right: 5px;\r\n    margin-top: 15px;\r\n    padding-left: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUNBOztJQUVJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCOztBQUVwQjs7QUFHQTs7SUFFSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgIFxyXG59XHJcblxyXG4uZm9vdGVyIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5ub21lIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogI2VlNjAyMTtcclxufVxyXG4ubm9tZXtcclxuICAgIFxyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuXHJcbn1cclxuXHJcblxyXG4uZm9vdGVyIGltZ3tcclxuICAgIFxyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_template_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/template/header/header.component */ "qK/A");
/* harmony import */ var _components_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/template/footer/footer.component */ "KnQY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_components_template_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "XCpV":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/construcao/construcao.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConstrucaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstrucaoComponent", function() { return ConstrucaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ConstrucaoComponent {
    constructor() { }
    ngOnInit() {
    }
}
ConstrucaoComponent.ɵfac = function ConstrucaoComponent_Factory(t) { return new (t || ConstrucaoComponent)(); };
ConstrucaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConstrucaoComponent, selectors: [["app-construcao"]], decls: 4, vars: 0, consts: [[1, "box"], ["src", "assets/img/construcao.png"], [1, "titulo"]], template: function ConstrucaoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Em constru\u00E7\u00E3o\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".box[_ngcontent-%COMP%]{\r\n  height: 100px;\r\n  width: 100px;\r\n  margin-left: 715px;\r\n  margin-top: 50px;\r\n}\r\n\r\n.titulo[_ngcontent-%COMP%]{\r\n  font-size: 4rem;\r\n  margin-top: 450px;\r\n  margin-left: 750px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0cnVjYW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImNvbnN0cnVjYW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3h7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDcxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi50aXR1bG97XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG4gIG1hcmdpbi10b3A6IDQ1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3NTBweDtcclxufSAiXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_template_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/template/header/header.component */ "qK/A");
/* harmony import */ var _components_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/template/footer/footer.component */ "KnQY");
/* harmony import */ var _components_template_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/template/nav/nav.component */ "kz4Y");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/home/home.component */ "wpF5");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-owl-carousel */ "uxF4");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_pages_construcao_construcao_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/construcao/construcao.component */ "XCpV");
/* harmony import */ var _components_pages_quemsomos_quemsomos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/quemsomos/quemsomos.component */ "rtvL");
/* harmony import */ var _components_pages_contato_contato_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pages/contato/contato.component */ "Hj8y");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/carousel */ "LwO5");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ "fXoL");
























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ providers: [], imports: [[
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11__["OwlModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_21__["ButtonModule"],
            primeng_carousel__WEBPACK_IMPORTED_MODULE_20__["CarouselModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_template_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _components_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _components_template_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
        _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _components_pages_construcao_construcao_component__WEBPACK_IMPORTED_MODULE_12__["ConstrucaoComponent"],
        _components_pages_quemsomos_quemsomos_component__WEBPACK_IMPORTED_MODULE_13__["QuemsomosComponent"],
        _components_pages_contato_contato_component__WEBPACK_IMPORTED_MODULE_14__["ContatoComponent"]], imports: [ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11__["OwlModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_21__["ButtonModule"],
        primeng_carousel__WEBPACK_IMPORTED_MODULE_20__["CarouselModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"]] }); })();


/***/ }),

/***/ "cSg1":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/quemsomos/quemsomos.service.ts ***!
  \*****************************************************************/
/*! exports provided: QuemsomosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuemsomosService", function() { return QuemsomosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class QuemsomosService {
    constructor(http) {
        this.http = http;
    }
    getPessoas() {
        return this.http.get('../assets/quemsomos.json')
            .toPromise()
            .then(res => res.Pessoa)
            .then(Pessoa => { return Pessoa; });
    }
}
QuemsomosService.ɵfac = function QuemsomosService_Factory(t) { return new (t || QuemsomosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
QuemsomosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuemsomosService, factory: QuemsomosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kz4Y":
/*!**********************************************************!*\
  !*** ./src/app/components/template/nav/nav.component.ts ***!
  \**********************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

//import { url } from 'node:inspector';
class NavComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 0, vars: 0, template: function NavComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYuY29tcG9uZW50LmNzcyJ9 */"], data: { animation: [] } });


/***/ }),

/***/ "qK/A":
/*!****************************************************************!*\
  !*** ./src/app/components/template/header/header.component.ts ***!
  \****************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 22, vars: 0, consts: [[1, "cabecalho"], [1, "logo"], ["routerLink", "#"], ["src", "assets/img/logo.png", "alt", "logo"], [1, "menu-toggle"], [1, "fa", "fa-lg", "fa-bars"], [1, "menu"], ["routerLink", "/home"], ["routerLink", "/construcao"], ["routerLink", "/quemsomos"], ["routerLink", "/contato"], [1, "autenticacao"], ["href", "#login"], ["href", "#registrar", 1, "botao", "destaque"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Projeto1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Projeto2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Quem Somos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "aside", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".cabecalho[_ngcontent-%COMP%]{\r\n    background: gray;\r\n    border-bottom: solid 1.5px #ee6021;\r\n    height: 80px;\r\n    box-sizing: content-box;    \r\n}\r\n\r\n.logo[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    height: 60px;\r\n    padding: 10px;\r\n\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    height: 80px;\r\n    padding: 25px;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .menu[_ngcontent-%COMP%]   a.selected[_ngcontent-%COMP%]{\r\n    color: #ee6021;\r\n}\r\n\r\n.autenticacao[_ngcontent-%COMP%]{\r\n    float: right;\r\n    height: 80px;\r\n    padding: 25px;\r\n\r\n}\r\n\r\n.botao[_ngcontent-%COMP%]{\r\n    border-radius: 30px;\r\n    padding:10px 25px;\r\n    margin: 10px;\r\n}\r\n\r\n.destaque[_ngcontent-%COMP%]{\r\n    background: #ee6021;\r\n    color: white;\r\n}\r\n\r\n.cabecalho[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: white;\r\n    font-size: 1.3em;\r\n}\r\n\r\n.menu-toggle[_ngcontent-%COMP%]{\r\n    float: right;\r\n    color: white;\r\n    background-color: darkgray;\r\n    border: solid 1px gray;\r\n    border-radius: 5px;\r\n    padding: 10px  20px;\r\n    margin: 20px 15px;\r\n}\r\n\r\n@media(min-width: 679px){\r\n    .menu-toggle[_ngcontent-%COMP%]{\r\n           display: none;\r\n    }\r\n}\r\n\r\n@media(max-width: 680px){\r\n    .menu[_ngcontent-%COMP%]{\r\n         display: none;\r\n    \r\n    }\r\n}\r\n\r\n@media(max-width: 910px){\r\n   .autenticacao[_ngcontent-%COMP%]{\r\n         display: none;\r\n   }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtXQUNPLGFBQWE7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1NBQ0ssYUFBYTs7SUFFbEI7QUFDSjs7QUFFQTtHQUNHO1NBQ00sYUFBYTtHQUNuQjtBQUNIIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhYmVjYWxob3tcclxuICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxLjVweCAjZWU2MDIxO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7ICAgIFxyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG59XHJcblxyXG4ubG9nbyBpbWd7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tZW51e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbi5tZW51IGF7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4ubWVudSBhOmhvdmVyLFxyXG4ubWVudSBhLnNlbGVjdGVke1xyXG4gICAgY29sb3I6ICNlZTYwMjE7XHJcbn1cclxuXHJcblxyXG4uYXV0ZW50aWNhY2Fve1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuXHJcbn1cclxuXHJcbi5ib3Rhb3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBwYWRkaW5nOjEwcHggMjVweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmRlc3RhcXVle1xyXG4gICAgYmFja2dyb3VuZDogI2VlNjAyMTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhYmVjYWxobyBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxufVxyXG5cclxuLm1lbnUtdG9nZ2xle1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweCAgMjBweDtcclxuICAgIG1hcmdpbjogMjBweCAxNXB4O1xyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA2NzlweCl7XHJcbiAgICAubWVudS10b2dnbGV7XHJcbiAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNjgwcHgpe1xyXG4gICAgLm1lbnV7XHJcbiAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogOTEwcHgpe1xyXG4gICAuYXV0ZW50aWNhY2Fve1xyXG4gICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "rtvL":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/quemsomos/quemsomos.component.ts ***!
  \*******************************************************************/
/*! exports provided: QuemsomosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuemsomosComponent", function() { return QuemsomosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _quemsomos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quemsomos.service */ "cSg1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function QuemsomosComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pess_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", pess_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pess_r1.nome, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pess_r1.idade, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pess_r1.profissao, " ");
} }
class QuemsomosComponent {
    constructor(quemsomosservice) {
        this.quemsomosservice = quemsomosservice;
        this.pessoas = [];
    }
    ngOnInit() {
        this.quemsomosservice.getPessoas().then(pessoas => {
            this.pessoas = pessoas;
        });
    }
}
QuemsomosComponent.ɵfac = function QuemsomosComponent_Factory(t) { return new (t || QuemsomosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_quemsomos_service__WEBPACK_IMPORTED_MODULE_1__["QuemsomosService"])); };
QuemsomosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuemsomosComponent, selectors: [["app-quemsomos"]], decls: 2, vars: 1, consts: [[1, "box"], ["class", "pess", 4, "ngFor", "ngForOf"], [1, "pess"], [1, "img1"], ["id", "img2"], [3, "src"], ["id", "nome"], ["id", "idade"], ["id", "Profiss\u00E3o"]], template: function QuemsomosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuemsomosComponent_div_1_Template, 13, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pessoas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 10%;\r\n    padding: 0px;\r\n    display: flex;    \r\n    flex-flow: row wrap;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  .box[_ngcontent-%COMP%]   .pess[_ngcontent-%COMP%] {\r\n    padding: 75px;\r\n    text-align: center;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n  .box[_ngcontent-%COMP%]   .pess[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n  #img2[_ngcontent-%COMP%]{\r\n    \r\n    border: 1px solid;\r\n    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.6);\r\n    border-color: orangered;\r\n    overflow: hidden; \r\n    width:200px;\r\n    height:200px;\r\n    border-radius: 15%;\r\n}\r\n  img[_ngcontent-%COMP%]{\r\n    width:200px;\r\n    height:200px; \r\n}\r\n  .box[_ngcontent-%COMP%]   .pess[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color:hsl(240, 33%, 4%);\r\n    font-family: Helvetica, Sans-Serif;\r\n    font-weight: bold;\r\n    font-size: 13px;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZW1zb21vcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7RUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0VBQ0E7O0lBRUksaUJBQWlCO0lBQ2pCLDhDQUE4QztJQUM5Qyx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0VBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtFQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJxdWVtc29tb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyAgICBcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5ib3ggLnBlc3Mge1xyXG4gICAgcGFkZGluZzogNzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYm94IC5wZXNzIC5pbWcxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4jaW1nMntcclxuICAgIFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBvcmFuZ2VyZWQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTUlO1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgaGVpZ2h0OjIwMHB4OyBcclxufVxyXG5cclxuLmJveCAucGVzcyBzcGFue1xyXG4gICAgY29sb3I6aHNsKDI0MCwgMzMlLCA0JSk7XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBTYW5zLVNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_pages_contato_contato_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pages/contato/contato.component */ "Hj8y");
/* harmony import */ var _components_pages_construcao_construcao_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/construcao/construcao.component */ "XCpV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/home/home.component */ "wpF5");
/* harmony import */ var _components_pages_quemsomos_quemsomos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components//pages/quemsomos/quemsomos.component */ "rtvL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: "home",
        component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "construcao",
        component: _components_pages_construcao_construcao_component__WEBPACK_IMPORTED_MODULE_1__["ConstrucaoComponent"] },
    { path: "quemsomos",
        component: _components_pages_quemsomos_quemsomos_component__WEBPACK_IMPORTED_MODULE_4__["QuemsomosComponent"] },
    { path: "contato",
        component: _components_pages_contato_contato_component__WEBPACK_IMPORTED_MODULE_0__["ContatoComponent"] },
    { path: '**', component: _components_pages_construcao_construcao_component__WEBPACK_IMPORTED_MODULE_1__["ConstrucaoComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "wpF5":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel */ "uxF4");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function HomeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", image_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return ["owl-theme", "sliding"]; };
class HomeComponent {
    constructor() {
        this.title = 'owl-carousel';
        this.mySlideImages = ['../assets/img/1.png', '../assets/img/2.jpg', '../assets/img/3.jpg', '../assets/img/4.png', '../assets/img/5.png', '../assets/img/6.png'];
        this.mySlideOptions = { items: 1, dots: true, nav: true, center: true };
        this.myCarouselOptions = { items: 3, dots: true, nav: true };
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 29, vars: 4, consts: [[1, "titulo"], ["src", "assets/img/titulo.png"], [1, "slide"], [3, "options", "carouselClasses"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "box"], ["src", "assets/img/proj1/1.png"], [1, "descricao1"], ["src", "assets/img/proj1/2.png"], [1, "descricao2"], ["src", "assets/img/proj1/3.png"], [1, "descricao3"], ["src", "assets/img/proj1/4.png"], [1, "descricao4"], [1, "item"], [1, "test"], [3, "src"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "owl-carousel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Economize muito tempo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Registre os produtos de sua loja em um cadastro que unifica as principais informa\u00E7\u00F5es a respeito deles como pre\u00E7o de venda, custos, tamanho, tributa\u00E7\u00E3o entre diversas outras. Cada produto ir\u00E1 receber um c\u00F3digo de identifica\u00E7\u00E3o. Uma vez que esse cadastro \u00E9 realizado, todos os seus processos envolvendo aquele produto se tornam muito mais \u00E1geis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Minimizar custos com pedidos mal calculados e desperd\u00EDcios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Com o OneStock a gest\u00E3o da sua empresa acontece de forma integrada. Os relat\u00F3rios de faturamento entregam quais s\u00E3o os produtos mais vendidos e quais s\u00E3o os menos vendidos, com esses dados em m\u00E3os a realiza\u00E7\u00E3o de pedidos a fornecedores se torna mais assertiva. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Estoque \u00E9 dinheiro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " O estoque de sua empresa \u00E9 o equivalente ao seu patrim\u00F4nio, sem um controle de estoque adequado voc\u00EA poder\u00E1 ter preju\u00EDzo por n\u00E3o saber quais produtos voc\u00EA realmente tem em estoque. Com a OneStock o controle de estoque se torna pr\u00E1tico e eficiente e com isso evitar perdas em seu patrim\u00F4nio. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Transfer\u00EAncia de estoque ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Sua empresa possui mais de uma filial? Na OneStock voc\u00EA movimenta seus produtos de forma \u00E1gil e pr\u00E1tica. Ao realizar uma transfer\u00EAncia, o sistema baixa as quantidades da filial A e alimenta a filial B. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.mySlideOptions)("carouselClasses", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mySlideImages);
    } }, directives: [ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__["OwlCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".item[_ngcontent-%COMP%]{ \r\n    padding: 10px;\r\n}\r\n\r\n\r\n.test[_ngcontent-%COMP%]{\r\n    width: 1000px;\r\n    height: 400px;\r\n    margin-left: 450px;  \r\n}\r\n\r\n\r\n.box[_ngcontent-%COMP%]{\r\n    width: 1100px;\r\n    height: 300px;\r\n    margin: 100px auto;\r\n    text-align: left;\r\n}\r\n\r\n\r\n.titulo[_ngcontent-%COMP%]{\r\n      font-size: 2rem;\r\n      margin-top:-175px;\r\n      margin-left:200px;\r\n  }\r\n\r\n\r\n.descricao1[_ngcontent-%COMP%]{\r\n    font-size: 1rem;\r\n    margin-top:20px;\r\n    margin-left:200px;\r\n  }\r\n\r\n\r\n.descricao2[_ngcontent-%COMP%]{\r\n    font-size: 1rem;\r\n    margin-top: 20px;\r\n    margin-left:200px;\r\n  }\r\n\r\n\r\n.descricao3[_ngcontent-%COMP%]{\r\n    font-size: 1rem;\r\n    margin-top:20px;\r\n    margin-left:200px;\r\n  }\r\n\r\n\r\n.descricao4[_ngcontent-%COMP%]{\r\n    font-size: 1rem;\r\n    margin-top:20px;\r\n    margin-left:200px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztDQU9DOzs7QUFHRDtJQUNJLGFBQWE7QUFDakI7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOzs7QUFFRTtNQUNJLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsaUJBQWlCO0VBQ3JCOzs7QUFFQTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COzs7QUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COzs7QUFFQTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COzs7QUFFQTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25CIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbi50aXR1bG8gaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogMTc1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAwcHg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDc1cHhcclxufVxyXG4qL1xyXG5cclxuXHJcbi5pdGVteyBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi50ZXN0e1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDUwcHg7ICBcclxufVxyXG5cclxuXHJcbi5ib3h7XHJcbiAgICB3aWR0aDogMTEwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbiAgLnRpdHVsb3tcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICBtYXJnaW4tdG9wOi0xNzVweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6MjAwcHg7XHJcbiAgfVxyXG5cclxuICAuZGVzY3JpY2FvMXtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjIwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmRlc2NyaWNhbzJ7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MjAwcHg7XHJcbiAgfVxyXG5cclxuICAuZGVzY3JpY2FvM3tcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjIwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmRlc2NyaWNhbzR7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDoyMDBweDtcclxuICB9Il19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map