import "./chunk-6IAIMOZW.js";
import {
  Platform
} from "./chunk-3M7IRAZV.js";
import "./chunk-MSTSJFWT.js";
import "./chunk-AVME3FBA.js";
import {
  BidiModule
} from "./chunk-Z772YLII.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  Input,
  NgModule,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryRefresh
} from "./chunk-6UGPGURL.js";
import "./chunk-NGWI62ZP.js";
import "./chunk-LQKJR2HS.js";
import "./chunk-73FCWE6J.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@angular/material/fesm2022/toolbar.mjs
var _c0 = ["*", [["mat-toolbar-row"]]];
var _c1 = ["*", "mat-toolbar-row"];
var MatToolbarRow = class _MatToolbarRow {
  static ɵfac = function MatToolbarRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatToolbarRow)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatToolbarRow,
    selectors: [["mat-toolbar-row"]],
    hostAttrs: [1, "mat-toolbar-row"],
    exportAs: ["matToolbarRow"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbarRow, [{
    type: Directive,
    args: [{
      selector: "mat-toolbar-row",
      exportAs: "matToolbarRow",
      host: {
        "class": "mat-toolbar-row"
      }
    }]
  }], null, null);
})();
var MatToolbar = class _MatToolbar {
  _elementRef = inject(ElementRef);
  _platform = inject(Platform);
  _document = inject(DOCUMENT);
  color;
  _toolbarRows;
  constructor() {
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._checkToolbarMixedModes();
      this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes());
    }
  }
  _checkToolbarMixedModes() {
    if (this._toolbarRows.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      const isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter((node) => !(node.classList && node.classList.contains("mat-toolbar-row"))).filter((node) => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8)).some((node) => !!(node.textContent && node.textContent.trim()));
      if (isCombinedUsage) {
        throwToolbarMixedModesError();
      }
    }
  }
  static ɵfac = function MatToolbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatToolbar)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MatToolbar,
    selectors: [["mat-toolbar"]],
    contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, MatToolbarRow, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._toolbarRows = _t);
      }
    },
    hostAttrs: [1, "mat-toolbar"],
    hostVars: 6,
    hostBindings: function MatToolbar_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.color ? "mat-" + ctx.color : "");
        ɵɵclassProp("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
      }
    },
    inputs: {
      color: "color"
    },
    exportAs: ["matToolbar"],
    ngContentSelectors: _c1,
    decls: 2,
    vars: 0,
    template: function MatToolbar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c0);
        ɵɵprojection(0);
        ɵɵprojection(1, 1);
      }
    },
    styles: [".mat-toolbar {\n  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));\n  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));\n}\n.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {\n  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));\n  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));\n  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));\n  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));\n  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));\n  margin: 0;\n}\n@media (forced-colors: active) {\n  .mat-toolbar {\n    outline: solid 1px;\n  }\n}\n.mat-toolbar .mat-form-field-underline,\n.mat-toolbar .mat-form-field-ripple,\n.mat-toolbar .mat-focused .mat-form-field-ripple {\n  background-color: currentColor;\n}\n.mat-toolbar .mat-form-field-label,\n.mat-toolbar .mat-focused .mat-form-field-label,\n.mat-toolbar .mat-select-value,\n.mat-toolbar .mat-select-arrow,\n.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {\n  color: inherit;\n}\n.mat-toolbar .mat-input-element {\n  caret-color: currentColor;\n}\n.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {\n  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));\n  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));\n}\n\n.mat-toolbar-row, .mat-toolbar-single-row {\n  display: flex;\n  box-sizing: border-box;\n  padding: 0 16px;\n  width: 100%;\n  flex-direction: row;\n  align-items: center;\n  white-space: nowrap;\n  height: var(--mat-toolbar-standard-height, 64px);\n}\n@media (max-width: 599px) {\n  .mat-toolbar-row, .mat-toolbar-single-row {\n    height: var(--mat-toolbar-mobile-height, 56px);\n  }\n}\n\n.mat-toolbar-multiple-rows {\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: column;\n  width: 100%;\n  min-height: var(--mat-toolbar-standard-height, 64px);\n}\n@media (max-width: 599px) {\n  .mat-toolbar-multiple-rows {\n    min-height: var(--mat-toolbar-mobile-height, 56px);\n  }\n}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbar, [{
    type: Component,
    args: [{
      selector: "mat-toolbar",
      exportAs: "matToolbar",
      host: {
        "class": "mat-toolbar",
        "[class]": 'color ? "mat-" + color : ""',
        "[class.mat-toolbar-multiple-rows]": "_toolbarRows.length > 0",
        "[class.mat-toolbar-single-row]": "_toolbarRows.length === 0"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: '<ng-content></ng-content>\n<ng-content select="mat-toolbar-row"></ng-content>\n',
      styles: [".mat-toolbar {\n  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));\n  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));\n}\n.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {\n  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));\n  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));\n  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));\n  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));\n  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));\n  margin: 0;\n}\n@media (forced-colors: active) {\n  .mat-toolbar {\n    outline: solid 1px;\n  }\n}\n.mat-toolbar .mat-form-field-underline,\n.mat-toolbar .mat-form-field-ripple,\n.mat-toolbar .mat-focused .mat-form-field-ripple {\n  background-color: currentColor;\n}\n.mat-toolbar .mat-form-field-label,\n.mat-toolbar .mat-focused .mat-form-field-label,\n.mat-toolbar .mat-select-value,\n.mat-toolbar .mat-select-arrow,\n.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {\n  color: inherit;\n}\n.mat-toolbar .mat-input-element {\n  caret-color: currentColor;\n}\n.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {\n  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));\n  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));\n}\n\n.mat-toolbar-row, .mat-toolbar-single-row {\n  display: flex;\n  box-sizing: border-box;\n  padding: 0 16px;\n  width: 100%;\n  flex-direction: row;\n  align-items: center;\n  white-space: nowrap;\n  height: var(--mat-toolbar-standard-height, 64px);\n}\n@media (max-width: 599px) {\n  .mat-toolbar-row, .mat-toolbar-single-row {\n    height: var(--mat-toolbar-mobile-height, 56px);\n  }\n}\n\n.mat-toolbar-multiple-rows {\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: column;\n  width: 100%;\n  min-height: var(--mat-toolbar-standard-height, 64px);\n}\n@media (max-width: 599px) {\n  .mat-toolbar-multiple-rows {\n    min-height: var(--mat-toolbar-mobile-height, 56px);\n  }\n}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    _toolbarRows: [{
      type: ContentChildren,
      args: [MatToolbarRow, {
        descendants: true
      }]
    }]
  });
})();
function throwToolbarMixedModesError() {
  throw Error("MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row.");
}
var MatToolbarModule = class _MatToolbarModule {
  static ɵfac = function MatToolbarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatToolbarModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatToolbarModule,
    imports: [MatToolbar, MatToolbarRow],
    exports: [MatToolbar, MatToolbarRow, BidiModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbarModule, [{
    type: NgModule,
    args: [{
      imports: [MatToolbar, MatToolbarRow],
      exports: [MatToolbar, MatToolbarRow, BidiModule]
    }]
  }], null, null);
})();
export {
  MatToolbar,
  MatToolbarModule,
  MatToolbarRow,
  throwToolbarMixedModesError
};
//# sourceMappingURL=@angular_material_toolbar.js.map
