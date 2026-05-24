import {
  _getAnimationsState
} from "./chunk-SFTAFWXM.js";
import "./chunk-3M7IRAZV.js";
import "./chunk-MSTSJFWT.js";
import "./chunk-AVME3FBA.js";
import "./chunk-N4DOILP3.js";
import {
  BidiModule
} from "./chunk-Z772YLII.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  ElementRef,
  EventEmitter,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  ViewEncapsulation,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵstyleProp
} from "./chunk-6UGPGURL.js";
import "./chunk-NGWI62ZP.js";
import "./chunk-LQKJR2HS.js";
import "./chunk-73FCWE6J.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@angular/material/fesm2022/progress-bar.mjs
function MatProgressBar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElement(0, "div", 2);
  }
}
var MAT_PROGRESS_BAR_DEFAULT_OPTIONS = new InjectionToken("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");
var MAT_PROGRESS_BAR_LOCATION = new InjectionToken("mat-progress-bar-location", {
  providedIn: "root",
  factory: () => {
    const _document = inject(DOCUMENT);
    const _location = _document ? _document.location : null;
    return {
      getPathname: () => _location ? _location.pathname + _location.search : ""
    };
  }
});
var MatProgressBar = class _MatProgressBar {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _renderer = inject(Renderer2);
  _cleanupTransitionEnd;
  constructor() {
    const animationsState = _getAnimationsState();
    const defaults = inject(MAT_PROGRESS_BAR_DEFAULT_OPTIONS, {
      optional: true
    });
    this._isNoopAnimation = animationsState === "di-disabled";
    if (animationsState === "reduced-motion") {
      this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion");
    }
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      this.mode = defaults.mode || this.mode;
    }
  }
  _isNoopAnimation;
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  _color;
  _defaultColor = "primary";
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  _value = 0;
  get bufferValue() {
    return this._bufferValue || 0;
  }
  set bufferValue(v) {
    this._bufferValue = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  _bufferValue = 0;
  animationEnd = new EventEmitter();
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
    this._changeDetectorRef.markForCheck();
  }
  _mode = "determinate";
  ngAfterViewInit() {
    this._ngZone.runOutsideAngular(() => {
      this._cleanupTransitionEnd = this._renderer.listen(this._elementRef.nativeElement, "transitionend", this._transitionendHandler);
    });
  }
  ngOnDestroy() {
    this._cleanupTransitionEnd?.();
  }
  _getPrimaryBarTransform() {
    return `scaleX(${this._isIndeterminate() ? 1 : this.value / 100})`;
  }
  _getBufferBarFlexBasis() {
    return `${this.mode === "buffer" ? this.bufferValue : 100}%`;
  }
  _isIndeterminate() {
    return this.mode === "indeterminate" || this.mode === "query";
  }
  _transitionendHandler = (event) => {
    if (this.animationEnd.observers.length === 0 || !event.target || !event.target.classList.contains("mdc-linear-progress__primary-bar")) {
      return;
    }
    if (this.mode === "determinate" || this.mode === "buffer") {
      this._ngZone.run(() => this.animationEnd.next({
        value: this.value
      }));
    }
  };
  static ɵfac = function MatProgressBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressBar)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MatProgressBar,
    selectors: [["mat-progress-bar"]],
    hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", "tabindex", "-1", 1, "mat-mdc-progress-bar", "mdc-linear-progress"],
    hostVars: 10,
    hostBindings: function MatProgressBar_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-valuenow", ctx._isIndeterminate() ? null : ctx.value)("mode", ctx.mode);
        ɵɵclassMap("mat-" + ctx.color);
        ɵɵclassProp("_mat-animation-noopable", ctx._isNoopAnimation)("mdc-linear-progress--animation-ready", !ctx._isNoopAnimation)("mdc-linear-progress--indeterminate", ctx._isIndeterminate());
      }
    },
    inputs: {
      color: "color",
      value: [2, "value", "value", numberAttribute],
      bufferValue: [2, "bufferValue", "bufferValue", numberAttribute],
      mode: "mode"
    },
    outputs: {
      animationEnd: "animationEnd"
    },
    exportAs: ["matProgressBar"],
    decls: 7,
    vars: 5,
    consts: [["aria-hidden", "true", 1, "mdc-linear-progress__buffer"], [1, "mdc-linear-progress__buffer-bar"], [1, "mdc-linear-progress__buffer-dots"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__primary-bar"], [1, "mdc-linear-progress__bar-inner"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__secondary-bar"]],
    template: function MatProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵdomElementStart(0, "div", 0);
        ɵɵdomElement(1, "div", 1);
        ɵɵconditionalCreate(2, MatProgressBar_Conditional_2_Template, 1, 0, "div", 2);
        ɵɵdomElementEnd();
        ɵɵdomElementStart(3, "div", 3);
        ɵɵdomElement(4, "span", 4);
        ɵɵdomElementEnd();
        ɵɵdomElementStart(5, "div", 5);
        ɵɵdomElement(6, "span", 4);
        ɵɵdomElementEnd();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵstyleProp("flex-basis", ctx._getBufferBarFlexBasis());
        ɵɵadvance();
        ɵɵconditional(ctx.mode === "buffer" ? 2 : -1);
        ɵɵadvance();
        ɵɵstyleProp("transform", ctx._getPrimaryBarTransform());
      }
    },
    styles: [".mat-mdc-progress-bar {\n  --mat-progress-bar-animation-multiplier: 1;\n  display: block;\n  text-align: start;\n}\n.mat-mdc-progress-bar[mode=query] {\n  transform: scaleX(-1);\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {\n  animation: none;\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {\n  transition: transform 1ms;\n}\n\n.mat-progress-bar-reduced-motion {\n  --mat-progress-bar-animation-multiplier: 2;\n}\n\n.mdc-linear-progress {\n  position: relative;\n  width: 100%;\n  transform: translateZ(0);\n  outline: 1px solid transparent;\n  overflow-x: hidden;\n  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress {\n    outline-color: CanvasText;\n  }\n}\n\n.mdc-linear-progress__bar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  animation: none;\n  transform-origin: top left;\n  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {\n  transition: none;\n}\n[dir=rtl] .mdc-linear-progress__bar {\n  right: 0;\n  transform-origin: center right;\n}\n\n.mdc-linear-progress__bar-inner {\n  display: inline-block;\n  position: absolute;\n  width: 100%;\n  animation: none;\n  border-top-style: solid;\n  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));\n  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n\n.mdc-linear-progress__buffer {\n  display: flex;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  overflow: hidden;\n  height: var(--mat-progress-bar-track-height, 4px);\n  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));\n}\n\n.mdc-linear-progress__buffer-dots {\n  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);\n  background-repeat: repeat-x;\n  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);\n  background-position: left;\n  flex: auto;\n  transform: rotate(180deg);\n  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress__buffer-dots {\n    background-color: ButtonBorder;\n  }\n}\n[dir=rtl] .mdc-linear-progress__buffer-dots {\n  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n  transform: rotate(0);\n}\n\n.mdc-linear-progress__buffer-bar {\n  flex: 0 1 100%;\n  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));\n}\n\n.mdc-linear-progress__primary-bar {\n  transform: scaleX(0);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  left: -145.166611%;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  right: -145.166611%;\n  left: auto;\n}\n\n.mdc-linear-progress__secondary-bar {\n  display: none;\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  left: -54.888891%;\n  display: block;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  right: -54.888891%;\n  left: auto;\n}\n\n@keyframes mdc-linear-progress-buffering {\n  from {\n    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(83.67142%);\n  }\n  100% {\n    transform: translateX(200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-scale {\n  0% {\n    transform: scaleX(0.08);\n  }\n  36.65% {\n    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);\n    transform: scaleX(0.08);\n  }\n  69.15% {\n    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    transform: scaleX(0.661479);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(84.386165%);\n  }\n  100% {\n    transform: translateX(160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-scale {\n  0% {\n    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);\n    transform: scaleX(0.08);\n  }\n  19.15% {\n    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);\n    transform: scaleX(0.457104);\n  }\n  44.15% {\n    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);\n    transform: scaleX(0.72796);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(-83.67142%);\n  }\n  100% {\n    transform: translateX(-200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(-37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(-84.386165%);\n  }\n  100% {\n    transform: translateX(-160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-buffering-reverse {\n  from {\n    transform: translateX(-10px);\n  }\n}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBar, [{
    type: Component,
    args: [{
      selector: "mat-progress-bar",
      exportAs: "matProgressBar",
      host: {
        "role": "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "tabindex": "-1",
        "[attr.aria-valuenow]": "_isIndeterminate() ? null : value",
        "[attr.mode]": "mode",
        "class": "mat-mdc-progress-bar mdc-linear-progress",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": "_isNoopAnimation",
        "[class.mdc-linear-progress--animation-ready]": "!_isNoopAnimation",
        "[class.mdc-linear-progress--indeterminate]": "_isIndeterminate()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `<!--
  All children need to be hidden for screen readers in order to support ChromeVox.
  More context in the issue: https://github.com/angular/components/issues/22165.
-->
<div class="mdc-linear-progress__buffer" aria-hidden="true">
  <div
    class="mdc-linear-progress__buffer-bar"
    [style.flex-basis]="_getBufferBarFlexBasis()"></div>
  <!-- Remove the dots outside of buffer mode since they can cause CSP issues (see #28938) -->
  @if (mode === 'buffer') {
    <div class="mdc-linear-progress__buffer-dots"></div>
  }
</div>
<div
  class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
  aria-hidden="true"
  [style.transform]="_getPrimaryBarTransform()">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
<div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar" aria-hidden="true">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
`,
      styles: [".mat-mdc-progress-bar {\n  --mat-progress-bar-animation-multiplier: 1;\n  display: block;\n  text-align: start;\n}\n.mat-mdc-progress-bar[mode=query] {\n  transform: scaleX(-1);\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {\n  animation: none;\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {\n  transition: transform 1ms;\n}\n\n.mat-progress-bar-reduced-motion {\n  --mat-progress-bar-animation-multiplier: 2;\n}\n\n.mdc-linear-progress {\n  position: relative;\n  width: 100%;\n  transform: translateZ(0);\n  outline: 1px solid transparent;\n  overflow-x: hidden;\n  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress {\n    outline-color: CanvasText;\n  }\n}\n\n.mdc-linear-progress__bar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  animation: none;\n  transform-origin: top left;\n  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {\n  transition: none;\n}\n[dir=rtl] .mdc-linear-progress__bar {\n  right: 0;\n  transform-origin: center right;\n}\n\n.mdc-linear-progress__bar-inner {\n  display: inline-block;\n  position: absolute;\n  width: 100%;\n  animation: none;\n  border-top-style: solid;\n  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));\n  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n\n.mdc-linear-progress__buffer {\n  display: flex;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  overflow: hidden;\n  height: var(--mat-progress-bar-track-height, 4px);\n  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));\n}\n\n.mdc-linear-progress__buffer-dots {\n  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);\n  background-repeat: repeat-x;\n  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);\n  background-position: left;\n  flex: auto;\n  transform: rotate(180deg);\n  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress__buffer-dots {\n    background-color: ButtonBorder;\n  }\n}\n[dir=rtl] .mdc-linear-progress__buffer-dots {\n  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n  transform: rotate(0);\n}\n\n.mdc-linear-progress__buffer-bar {\n  flex: 0 1 100%;\n  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));\n}\n\n.mdc-linear-progress__primary-bar {\n  transform: scaleX(0);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  left: -145.166611%;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  right: -145.166611%;\n  left: auto;\n}\n\n.mdc-linear-progress__secondary-bar {\n  display: none;\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  left: -54.888891%;\n  display: block;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  right: -54.888891%;\n  left: auto;\n}\n\n@keyframes mdc-linear-progress-buffering {\n  from {\n    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(83.67142%);\n  }\n  100% {\n    transform: translateX(200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-scale {\n  0% {\n    transform: scaleX(0.08);\n  }\n  36.65% {\n    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);\n    transform: scaleX(0.08);\n  }\n  69.15% {\n    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    transform: scaleX(0.661479);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(84.386165%);\n  }\n  100% {\n    transform: translateX(160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-scale {\n  0% {\n    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);\n    transform: scaleX(0.08);\n  }\n  19.15% {\n    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);\n    transform: scaleX(0.457104);\n  }\n  44.15% {\n    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);\n    transform: scaleX(0.72796);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(-83.67142%);\n  }\n  100% {\n    transform: translateX(-200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(-37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(-84.386165%);\n  }\n  100% {\n    transform: translateX(-160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-buffering-reverse {\n  from {\n    transform: translateX(-10px);\n  }\n}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    bufferValue: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    animationEnd: [{
      type: Output
    }],
    mode: [{
      type: Input
    }]
  });
})();
function clamp(v, min = 0, max = 100) {
  return Math.max(min, Math.min(max, v));
}
var MatProgressBarModule = class _MatProgressBarModule {
  static ɵfac = function MatProgressBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressBarModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatProgressBarModule,
    imports: [MatProgressBar],
    exports: [MatProgressBar, BidiModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBarModule, [{
    type: NgModule,
    args: [{
      imports: [MatProgressBar],
      exports: [MatProgressBar, BidiModule]
    }]
  }], null, null);
})();
export {
  MAT_PROGRESS_BAR_DEFAULT_OPTIONS,
  MAT_PROGRESS_BAR_LOCATION,
  MatProgressBar,
  MatProgressBarModule
};
//# sourceMappingURL=@angular_material_progress-bar.js.map
