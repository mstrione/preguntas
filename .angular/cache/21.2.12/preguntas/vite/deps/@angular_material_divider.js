import {
  coerceBooleanProperty
} from "./chunk-3CJT2VUM.js";
import "./chunk-N4DOILP3.js";
import {
  BidiModule
} from "./chunk-Z772YLII.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  ViewEncapsulation,
  setClassMetadata,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-6UGPGURL.js";
import "./chunk-NGWI62ZP.js";
import "./chunk-LQKJR2HS.js";
import "./chunk-73FCWE6J.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@angular/material/fesm2022/divider.mjs
var MatDivider = class _MatDivider {
  get vertical() {
    return this._vertical;
  }
  set vertical(value) {
    this._vertical = coerceBooleanProperty(value);
  }
  _vertical = false;
  get inset() {
    return this._inset;
  }
  set inset(value) {
    this._inset = coerceBooleanProperty(value);
  }
  _inset = false;
  static ɵfac = function MatDivider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDivider)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MatDivider,
    selectors: [["mat-divider"]],
    hostAttrs: ["role", "separator", 1, "mat-divider"],
    hostVars: 7,
    hostBindings: function MatDivider_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
        ɵɵclassProp("mat-divider-vertical", ctx.vertical)("mat-divider-horizontal", !ctx.vertical)("mat-divider-inset", ctx.inset);
      }
    },
    inputs: {
      vertical: "vertical",
      inset: "inset"
    },
    decls: 0,
    vars: 0,
    template: function MatDivider_Template(rf, ctx) {
    },
    styles: [".mat-divider {\n  display: block;\n  margin: 0;\n  border-top-style: solid;\n  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));\n  border-top-width: var(--mat-divider-width, 1px);\n}\n.mat-divider.mat-divider-vertical {\n  border-top: 0;\n  border-right-style: solid;\n  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));\n  border-right-width: var(--mat-divider-width, 1px);\n}\n.mat-divider.mat-divider-inset {\n  margin-left: 80px;\n}\n[dir=rtl] .mat-divider.mat-divider-inset {\n  margin-left: auto;\n  margin-right: 80px;\n}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDivider, [{
    type: Component,
    args: [{
      selector: "mat-divider",
      host: {
        "role": "separator",
        "[attr.aria-orientation]": 'vertical ? "vertical" : "horizontal"',
        "[class.mat-divider-vertical]": "vertical",
        "[class.mat-divider-horizontal]": "!vertical",
        "[class.mat-divider-inset]": "inset",
        "class": "mat-divider"
      },
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".mat-divider {\n  display: block;\n  margin: 0;\n  border-top-style: solid;\n  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));\n  border-top-width: var(--mat-divider-width, 1px);\n}\n.mat-divider.mat-divider-vertical {\n  border-top: 0;\n  border-right-style: solid;\n  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));\n  border-right-width: var(--mat-divider-width, 1px);\n}\n.mat-divider.mat-divider-inset {\n  margin-left: 80px;\n}\n[dir=rtl] .mat-divider.mat-divider-inset {\n  margin-left: auto;\n  margin-right: 80px;\n}\n"]
    }]
  }], null, {
    vertical: [{
      type: Input
    }],
    inset: [{
      type: Input
    }]
  });
})();
var MatDividerModule = class _MatDividerModule {
  static ɵfac = function MatDividerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDividerModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatDividerModule,
    imports: [MatDivider],
    exports: [MatDivider, BidiModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDividerModule, [{
    type: NgModule,
    args: [{
      imports: [MatDivider],
      exports: [MatDivider, BidiModule]
    }]
  }], null, null);
})();
export {
  MatDivider,
  MatDividerModule
};
//# sourceMappingURL=@angular_material_divider.js.map
