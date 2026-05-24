import {
  BidiModule
} from "./chunk-Z772YLII.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  InjectionToken,
  Input,
  NgModule,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-6UGPGURL.js";
import "./chunk-NGWI62ZP.js";
import "./chunk-LQKJR2HS.js";
import "./chunk-73FCWE6J.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@angular/material/fesm2022/card.mjs
var _c0 = ["*"];
var _c1 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["", "mat-card-image", ""], ["", "matCardImage", ""], ["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""], ["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""], ["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""], ["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]], "*"];
var _c2 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]", "*"];
var _c3 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
var _c4 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
var MAT_CARD_CONFIG = new InjectionToken("MAT_CARD_CONFIG");
var MatCard = class _MatCard {
  appearance;
  constructor() {
    const config = inject(MAT_CARD_CONFIG, {
      optional: true
    });
    this.appearance = config?.appearance || "raised";
  }
  static ɵfac = function MatCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCard)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MatCard,
    selectors: [["mat-card"]],
    hostAttrs: [1, "mat-mdc-card", "mdc-card"],
    hostVars: 8,
    hostBindings: function MatCard_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("mat-mdc-card-outlined", ctx.appearance === "outlined")("mdc-card--outlined", ctx.appearance === "outlined")("mat-mdc-card-filled", ctx.appearance === "filled")("mdc-card--filled", ctx.appearance === "filled");
      }
    },
    inputs: {
      appearance: "appearance"
    },
    exportAs: ["matCard"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatCard_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    styles: ['.mat-mdc-card {\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  position: relative;\n  border-style: solid;\n  border-width: 0;\n  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));\n  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));\n  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));\n  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));\n}\n.mat-mdc-card::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: solid 1px transparent;\n  content: "";\n  display: block;\n  pointer-events: none;\n  box-sizing: border-box;\n  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));\n}\n\n.mat-mdc-card-outlined {\n  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));\n  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));\n  border-width: var(--mat-card-outlined-outline-width, 1px);\n  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));\n  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));\n}\n.mat-mdc-card-outlined::after {\n  border: none;\n}\n\n.mat-mdc-card-filled {\n  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));\n  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));\n  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));\n}\n\n.mdc-card__media {\n  position: relative;\n  box-sizing: border-box;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.mdc-card__media::before {\n  display: block;\n  content: "";\n}\n.mdc-card__media:first-child {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n.mdc-card__media:last-child {\n  border-bottom-left-radius: inherit;\n  border-bottom-right-radius: inherit;\n}\n\n.mat-mdc-card-actions {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-sizing: border-box;\n  min-height: 52px;\n  padding: 8px;\n}\n\n.mat-mdc-card-title {\n  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));\n  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));\n  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));\n  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));\n  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));\n}\n\n.mat-mdc-card-subtitle {\n  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));\n  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));\n  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));\n  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));\n  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));\n}\n\n.mat-mdc-card-title,\n.mat-mdc-card-subtitle {\n  display: block;\n  margin: 0;\n}\n.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,\n.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {\n  padding: 16px 16px 0;\n}\n\n.mat-mdc-card-header {\n  display: flex;\n  padding: 16px 16px 0;\n}\n\n.mat-mdc-card-content {\n  display: block;\n  padding: 0 16px;\n}\n.mat-mdc-card-content:first-child {\n  padding-top: 16px;\n}\n.mat-mdc-card-content:last-child {\n  padding-bottom: 16px;\n}\n\n.mat-mdc-card-title-group {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.mat-mdc-card-avatar {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-bottom: 16px;\n  object-fit: cover;\n}\n.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,\n.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {\n  line-height: normal;\n}\n\n.mat-mdc-card-sm-image {\n  width: 80px;\n  height: 80px;\n}\n\n.mat-mdc-card-md-image {\n  width: 112px;\n  height: 112px;\n}\n\n.mat-mdc-card-lg-image {\n  width: 152px;\n  height: 152px;\n}\n\n.mat-mdc-card-xl-image {\n  width: 240px;\n  height: 240px;\n}\n\n.mat-mdc-card-subtitle ~ .mat-mdc-card-title,\n.mat-mdc-card-title ~ .mat-mdc-card-subtitle,\n.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,\n.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,\n.mat-mdc-card-title-group .mat-mdc-card-title,\n.mat-mdc-card-title-group .mat-mdc-card-subtitle {\n  padding-top: 0;\n}\n\n.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {\n  margin-bottom: 0;\n}\n\n.mat-mdc-card-actions-align-end {\n  justify-content: flex-end;\n}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCard, [{
    type: Component,
    args: [{
      selector: "mat-card",
      host: {
        "class": "mat-mdc-card mdc-card",
        "[class.mat-mdc-card-outlined]": 'appearance === "outlined"',
        "[class.mdc-card--outlined]": 'appearance === "outlined"',
        "[class.mat-mdc-card-filled]": 'appearance === "filled"',
        "[class.mdc-card--filled]": 'appearance === "filled"'
      },
      exportAs: "matCard",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>\n",
      styles: ['.mat-mdc-card {\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  position: relative;\n  border-style: solid;\n  border-width: 0;\n  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));\n  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));\n  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));\n  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));\n}\n.mat-mdc-card::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: solid 1px transparent;\n  content: "";\n  display: block;\n  pointer-events: none;\n  box-sizing: border-box;\n  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));\n}\n\n.mat-mdc-card-outlined {\n  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));\n  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));\n  border-width: var(--mat-card-outlined-outline-width, 1px);\n  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));\n  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));\n}\n.mat-mdc-card-outlined::after {\n  border: none;\n}\n\n.mat-mdc-card-filled {\n  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));\n  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));\n  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));\n}\n\n.mdc-card__media {\n  position: relative;\n  box-sizing: border-box;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.mdc-card__media::before {\n  display: block;\n  content: "";\n}\n.mdc-card__media:first-child {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n.mdc-card__media:last-child {\n  border-bottom-left-radius: inherit;\n  border-bottom-right-radius: inherit;\n}\n\n.mat-mdc-card-actions {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-sizing: border-box;\n  min-height: 52px;\n  padding: 8px;\n}\n\n.mat-mdc-card-title {\n  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));\n  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));\n  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));\n  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));\n  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));\n}\n\n.mat-mdc-card-subtitle {\n  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));\n  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));\n  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));\n  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));\n  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));\n}\n\n.mat-mdc-card-title,\n.mat-mdc-card-subtitle {\n  display: block;\n  margin: 0;\n}\n.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,\n.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {\n  padding: 16px 16px 0;\n}\n\n.mat-mdc-card-header {\n  display: flex;\n  padding: 16px 16px 0;\n}\n\n.mat-mdc-card-content {\n  display: block;\n  padding: 0 16px;\n}\n.mat-mdc-card-content:first-child {\n  padding-top: 16px;\n}\n.mat-mdc-card-content:last-child {\n  padding-bottom: 16px;\n}\n\n.mat-mdc-card-title-group {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.mat-mdc-card-avatar {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-bottom: 16px;\n  object-fit: cover;\n}\n.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,\n.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {\n  line-height: normal;\n}\n\n.mat-mdc-card-sm-image {\n  width: 80px;\n  height: 80px;\n}\n\n.mat-mdc-card-md-image {\n  width: 112px;\n  height: 112px;\n}\n\n.mat-mdc-card-lg-image {\n  width: 152px;\n  height: 152px;\n}\n\n.mat-mdc-card-xl-image {\n  width: 240px;\n  height: 240px;\n}\n\n.mat-mdc-card-subtitle ~ .mat-mdc-card-title,\n.mat-mdc-card-title ~ .mat-mdc-card-subtitle,\n.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,\n.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,\n.mat-mdc-card-title-group .mat-mdc-card-title,\n.mat-mdc-card-title-group .mat-mdc-card-subtitle {\n  padding-top: 0;\n}\n\n.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {\n  margin-bottom: 0;\n}\n\n.mat-mdc-card-actions-align-end {\n  justify-content: flex-end;\n}\n']
    }]
  }], () => [], {
    appearance: [{
      type: Input
    }]
  });
})();
var MatCardTitle = class _MatCardTitle {
  static ɵfac = function MatCardTitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardTitle)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatCardTitle,
    selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]],
    hostAttrs: [1, "mat-mdc-card-title"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardTitle, [{
    type: Directive,
    args: [{
      selector: `mat-card-title, [mat-card-title], [matCardTitle]`,
      host: {
        "class": "mat-mdc-card-title"
      }
    }]
  }], null, null);
})();
var MatCardTitleGroup = class _MatCardTitleGroup {
  static ɵfac = function MatCardTitleGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardTitleGroup)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MatCardTitleGroup,
    selectors: [["mat-card-title-group"]],
    hostAttrs: [1, "mat-mdc-card-title-group"],
    ngContentSelectors: _c2,
    decls: 4,
    vars: 0,
    template: function MatCardTitleGroup_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c1);
        ɵɵdomElementStart(0, "div");
        ɵɵprojection(1);
        ɵɵdomElementEnd();
        ɵɵprojection(2, 1);
        ɵɵprojection(3, 2);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardTitleGroup, [{
    type: Component,
    args: [{
      selector: "mat-card-title-group",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-mdc-card-title-group"
      },
      template: '<div>\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content select="[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]"></ng-content>\n<ng-content></ng-content>\n'
    }]
  }], null, null);
})();
var MatCardContent = class _MatCardContent {
  static ɵfac = function MatCardContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardContent)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatCardContent,
    selectors: [["mat-card-content"]],
    hostAttrs: [1, "mat-mdc-card-content"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardContent, [{
    type: Directive,
    args: [{
      selector: "mat-card-content",
      host: {
        "class": "mat-mdc-card-content"
      }
    }]
  }], null, null);
})();
var MatCardSubtitle = class _MatCardSubtitle {
  static ɵfac = function MatCardSubtitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardSubtitle)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatCardSubtitle,
    selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]],
    hostAttrs: [1, "mat-mdc-card-subtitle"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardSubtitle, [{
    type: Directive,
    args: [{
      selector: `mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]`,
      host: {
        "class": "mat-mdc-card-subtitle"
      }
    }]
  }], null, null);
})();
var MatCardActions = class _MatCardActions {
  align = "start";
  static ɵfac = function MatCardActions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardActions)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatCardActions,
    selectors: [["mat-card-actions"]],
    hostAttrs: [1, "mat-mdc-card-actions", "mdc-card__actions"],
    hostVars: 2,
    hostBindings: function MatCardActions_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("mat-mdc-card-actions-align-end", ctx.align === "end");
      }
    },
    inputs: {
      align: "align"
    },
    exportAs: ["matCardActions"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardActions, [{
    type: Directive,
    args: [{
      selector: "mat-card-actions",
      exportAs: "matCardActions",
      host: {
        "class": "mat-mdc-card-actions mdc-card__actions",
        "[class.mat-mdc-card-actions-align-end]": 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: Input
    }]
  });
})();
var MatCardHeader = class _MatCardHeader {
  static ɵfac = function MatCardHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardHeader)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MatCardHeader,
    selectors: [["mat-card-header"]],
    hostAttrs: [1, "mat-mdc-card-header"],
    ngContentSelectors: _c4,
    decls: 4,
    vars: 0,
    consts: [[1, "mat-mdc-card-header-text"]],
    template: function MatCardHeader_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c3);
        ɵɵprojection(0);
        ɵɵdomElementStart(1, "div", 0);
        ɵɵprojection(2, 1);
        ɵɵdomElementEnd();
        ɵɵprojection(3, 2);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardHeader, [{
    type: Component,
    args: [{
      selector: "mat-card-header",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-mdc-card-header"
      },
      template: '<ng-content select="[mat-card-avatar], [matCardAvatar]"></ng-content>\n<div class="mat-mdc-card-header-text">\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content></ng-content>\n'
    }]
  }], null, null);
})();
var MatCardFooter = class _MatCardFooter {
  static ɵfac = function MatCardFooter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardFooter)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatCardFooter,
    selectors: [["mat-card-footer"]],
    hostAttrs: [1, "mat-mdc-card-footer"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardFooter, [{
    type: Directive,
    args: [{
      selector: "mat-card-footer",
      host: {
        "class": "mat-mdc-card-footer"
      }
    }]
  }], null, null);
})();
var MatCardImage = class _MatCardImage {
  static ɵfac = function MatCardImage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardImage)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatCardImage,
    selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]],
    hostAttrs: [1, "mat-mdc-card-image", "mdc-card__media"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-image], [matCardImage]",
      host: {
        "class": "mat-mdc-card-image mdc-card__media"
      }
    }]
  }], null, null);
})();
var MatCardSmImage = class _MatCardSmImage {
  static ɵfac = function MatCardSmImage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardSmImage)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatCardSmImage,
    selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]],
    hostAttrs: [1, "mat-mdc-card-sm-image", "mdc-card__media"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardSmImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-sm-image], [matCardImageSmall]",
      host: {
        "class": "mat-mdc-card-sm-image mdc-card__media"
      }
    }]
  }], null, null);
})();
var MatCardMdImage = class _MatCardMdImage {
  static ɵfac = function MatCardMdImage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardMdImage)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatCardMdImage,
    selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]],
    hostAttrs: [1, "mat-mdc-card-md-image", "mdc-card__media"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardMdImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-md-image], [matCardImageMedium]",
      host: {
        "class": "mat-mdc-card-md-image mdc-card__media"
      }
    }]
  }], null, null);
})();
var MatCardLgImage = class _MatCardLgImage {
  static ɵfac = function MatCardLgImage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardLgImage)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatCardLgImage,
    selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]],
    hostAttrs: [1, "mat-mdc-card-lg-image", "mdc-card__media"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardLgImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-lg-image], [matCardImageLarge]",
      host: {
        "class": "mat-mdc-card-lg-image mdc-card__media"
      }
    }]
  }], null, null);
})();
var MatCardXlImage = class _MatCardXlImage {
  static ɵfac = function MatCardXlImage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardXlImage)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatCardXlImage,
    selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]],
    hostAttrs: [1, "mat-mdc-card-xl-image", "mdc-card__media"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardXlImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-xl-image], [matCardImageXLarge]",
      host: {
        "class": "mat-mdc-card-xl-image mdc-card__media"
      }
    }]
  }], null, null);
})();
var MatCardAvatar = class _MatCardAvatar {
  static ɵfac = function MatCardAvatar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardAvatar)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatCardAvatar,
    selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]],
    hostAttrs: [1, "mat-mdc-card-avatar"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardAvatar, [{
    type: Directive,
    args: [{
      selector: "[mat-card-avatar], [matCardAvatar]",
      host: {
        "class": "mat-mdc-card-avatar"
      }
    }]
  }], null, null);
})();
var CARD_DIRECTIVES = [MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage];
var MatCardModule = class _MatCardModule {
  static ɵfac = function MatCardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatCardModule,
    imports: [MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage],
    exports: [MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage, BidiModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardModule, [{
    type: NgModule,
    args: [{
      imports: CARD_DIRECTIVES,
      exports: [CARD_DIRECTIVES, BidiModule]
    }]
  }], null, null);
})();
export {
  MAT_CARD_CONFIG,
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardImage,
  MatCardLgImage,
  MatCardMdImage,
  MatCardModule,
  MatCardSmImage,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup,
  MatCardXlImage
};
//# sourceMappingURL=@angular_material_card.js.map
