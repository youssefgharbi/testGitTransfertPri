import {
  RouterLink,
  RouterModule
} from "./chunk-3NE2PAWD.js";
import "./chunk-7LM2UULR.js";
import {
  BaseIcon,
  ButtonDirective,
  ButtonModule,
  ConnectedOverlayScrollHandler,
  DomHandler,
  Ripple,
  RippleModule
} from "./chunk-NFRA74GR.js";
import {
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule,
  UniqueComponentId,
  zindexutils
} from "./chunk-X6PJIPMA.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-J3FYQ7PN.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  __spreadValues,
  asapScheduler,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-YVB3NLBV.js";

// node_modules/primeng/fesm2022/primeng-icons-plus.mjs
var PlusIcon = class _PlusIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + UniqueComponentId() + ")";
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵPlusIcon_BaseFactory;
    return function PlusIcon_Factory(t) {
      return (ɵPlusIcon_BaseFactory || (ɵPlusIcon_BaseFactory = ɵɵgetInheritedFactory(_PlusIcon)))(t || _PlusIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _PlusIcon,
    selectors: [["PlusIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function PlusIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0)(1, "g");
        ɵɵelement(2, "path", 1);
        ɵɵelementEnd();
        ɵɵelementStart(3, "defs")(4, "clipPath", 2);
        ɵɵelement(5, "rect", 3);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        ɵɵadvance();
        ɵɵattribute("clip-path", ctx.pathId);
        ɵɵadvance(3);
        ɵɵproperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlusIcon, [{
    type: Component,
    args: [{
      selector: "PlusIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    d="M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-tooltip.mjs
var Tooltip = class _Tooltip {
  platformId;
  el;
  zone;
  config;
  renderer;
  viewContainer;
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition;
  /**
   * Event to show the tooltip.
   * @group Props
   */
  tooltipEvent = "hover";
  /**
   *  Target element to attach the overlay, valid values are "body", "target" or a local ng-F variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Type of CSS position.
   * @group Props
   */
  positionStyle;
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Whether the z-index should be managed automatically to always go on top or have a fixed value.
   * @group Props
   */
  tooltipZIndex;
  /**
   * By default the tooltip contents are rendered as text. Set to false to support html tags in the content.
   * @group Props
   */
  escape = true;
  /**
   * Delay to show the tooltip in milliseconds.
   * @group Props
   */
  showDelay;
  /**
   * Delay to hide the tooltip in milliseconds.
   * @group Props
   */
  hideDelay;
  /**
   * Time to wait in milliseconds to hide the tooltip even it is active.
   * @group Props
   */
  life;
  /**
   * Specifies the additional vertical offset of the tooltip from its default position.
   * @group Props
   */
  positionTop;
  /**
   * Specifies the additional horizontal offset of the tooltip from its default position.
   * @group Props
   */
  positionLeft;
  /**
   * Whether to hide tooltip when hovering over tooltip content.
   * @group Props
   */
  autoHide = true;
  /**
   * Automatically adjusts the element position when there is not enough space on the selected position.
   * @group Props
   */
  fitContent = true;
  /**
   * Whether to hide tooltip on escape key press.
   * @group Props
   */
  hideOnEscape = true;
  /**
   * Content of the tooltip.
   * @group Props
   */
  content;
  /**
   * When present, it specifies that the component should be disabled.
   * @defaultValue false
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(val) {
    this._disabled = val;
    this.deactivate();
  }
  /**
   * Specifies the tooltip configuration options for the component.
   * @group Props
   */
  tooltipOptions;
  _tooltipOptions = {
    tooltipLabel: null,
    tooltipPosition: "right",
    tooltipEvent: "hover",
    appendTo: "body",
    positionStyle: null,
    tooltipStyleClass: null,
    tooltipZIndex: "auto",
    escape: true,
    disabled: null,
    showDelay: null,
    hideDelay: null,
    positionTop: null,
    positionLeft: null,
    life: null,
    autoHide: true,
    hideOnEscape: true,
    id: UniqueComponentId() + "_tooltip"
  };
  _disabled;
  container;
  styleClass;
  tooltipText;
  showTimeout;
  hideTimeout;
  active;
  mouseEnterListener;
  mouseLeaveListener;
  containerMouseleaveListener;
  clickListener;
  focusListener;
  blurListener;
  scrollHandler;
  resizeListener;
  constructor(platformId, el, zone, config, renderer, viewContainer) {
    this.platformId = platformId;
    this.el = el;
    this.zone = zone;
    this.config = config;
    this.renderer = renderer;
    this.viewContainer = viewContainer;
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        if (this.getOption("tooltipEvent") === "hover") {
          this.mouseEnterListener = this.onMouseEnter.bind(this);
          this.mouseLeaveListener = this.onMouseLeave.bind(this);
          this.clickListener = this.onInputClick.bind(this);
          this.el.nativeElement.addEventListener("mouseenter", this.mouseEnterListener);
          this.el.nativeElement.addEventListener("click", this.clickListener);
          this.el.nativeElement.addEventListener("mouseleave", this.mouseLeaveListener);
        } else if (this.getOption("tooltipEvent") === "focus") {
          this.focusListener = this.onFocus.bind(this);
          this.blurListener = this.onBlur.bind(this);
          let target = this.getTarget(this.el.nativeElement);
          target.addEventListener("focus", this.focusListener);
          target.addEventListener("blur", this.blurListener);
        }
      });
    }
  }
  ngOnChanges(simpleChange) {
    if (simpleChange.tooltipPosition) {
      this.setOption({
        tooltipPosition: simpleChange.tooltipPosition.currentValue
      });
    }
    if (simpleChange.tooltipEvent) {
      this.setOption({
        tooltipEvent: simpleChange.tooltipEvent.currentValue
      });
    }
    if (simpleChange.appendTo) {
      this.setOption({
        appendTo: simpleChange.appendTo.currentValue
      });
    }
    if (simpleChange.positionStyle) {
      this.setOption({
        positionStyle: simpleChange.positionStyle.currentValue
      });
    }
    if (simpleChange.tooltipStyleClass) {
      this.setOption({
        tooltipStyleClass: simpleChange.tooltipStyleClass.currentValue
      });
    }
    if (simpleChange.tooltipZIndex) {
      this.setOption({
        tooltipZIndex: simpleChange.tooltipZIndex.currentValue
      });
    }
    if (simpleChange.escape) {
      this.setOption({
        escape: simpleChange.escape.currentValue
      });
    }
    if (simpleChange.showDelay) {
      this.setOption({
        showDelay: simpleChange.showDelay.currentValue
      });
    }
    if (simpleChange.hideDelay) {
      this.setOption({
        hideDelay: simpleChange.hideDelay.currentValue
      });
    }
    if (simpleChange.life) {
      this.setOption({
        life: simpleChange.life.currentValue
      });
    }
    if (simpleChange.positionTop) {
      this.setOption({
        positionTop: simpleChange.positionTop.currentValue
      });
    }
    if (simpleChange.positionLeft) {
      this.setOption({
        positionLeft: simpleChange.positionLeft.currentValue
      });
    }
    if (simpleChange.disabled) {
      this.setOption({
        disabled: simpleChange.disabled.currentValue
      });
    }
    if (simpleChange.content) {
      this.setOption({
        tooltipLabel: simpleChange.content.currentValue
      });
      if (this.active) {
        if (simpleChange.content.currentValue) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
    if (simpleChange.autoHide) {
      this.setOption({
        autoHide: simpleChange.autoHide.currentValue
      });
    }
    if (simpleChange.id) {
      this.setOption({
        id: simpleChange.id.currentValue
      });
    }
    if (simpleChange.tooltipOptions) {
      this._tooltipOptions = __spreadValues(__spreadValues({}, this._tooltipOptions), simpleChange.tooltipOptions.currentValue);
      this.deactivate();
      if (this.active) {
        if (this.getOption("tooltipLabel")) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
  }
  isAutoHide() {
    return this.getOption("autoHide");
  }
  onMouseEnter(e) {
    if (!this.container && !this.showTimeout) {
      this.activate();
    }
  }
  onMouseLeave(e) {
    if (!this.isAutoHide()) {
      const valid = DomHandler.hasClass(e.relatedTarget, "p-tooltip") || DomHandler.hasClass(e.relatedTarget, "p-tooltip-text") || DomHandler.hasClass(e.relatedTarget, "p-tooltip-arrow");
      !valid && this.deactivate();
    } else {
      this.deactivate();
    }
  }
  onFocus(e) {
    this.activate();
  }
  onBlur(e) {
    this.deactivate();
  }
  onInputClick(e) {
    this.deactivate();
  }
  onPressEscape() {
    if (this.hideOnEscape) {
      this.deactivate();
    }
  }
  activate() {
    this.active = true;
    this.clearHideTimeout();
    if (this.getOption("showDelay"))
      this.showTimeout = setTimeout(() => {
        this.show();
      }, this.getOption("showDelay"));
    else
      this.show();
    if (this.getOption("life")) {
      let duration = this.getOption("showDelay") ? this.getOption("life") + this.getOption("showDelay") : this.getOption("life");
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, duration);
    }
  }
  deactivate() {
    this.active = false;
    this.clearShowTimeout();
    if (this.getOption("hideDelay")) {
      this.clearHideTimeout();
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, this.getOption("hideDelay"));
    } else {
      this.hide();
    }
  }
  create() {
    if (this.container) {
      this.clearHideTimeout();
      this.remove();
    }
    this.container = document.createElement("div");
    this.container.setAttribute("id", this.getOption("id"));
    this.container.setAttribute("role", "tooltip");
    let tooltipArrow = document.createElement("div");
    tooltipArrow.className = "p-tooltip-arrow";
    this.container.appendChild(tooltipArrow);
    this.tooltipText = document.createElement("div");
    this.tooltipText.className = "p-tooltip-text";
    this.updateText();
    if (this.getOption("positionStyle")) {
      this.container.style.position = this.getOption("positionStyle");
    }
    this.container.appendChild(this.tooltipText);
    if (this.getOption("appendTo") === "body")
      document.body.appendChild(this.container);
    else if (this.getOption("appendTo") === "target")
      DomHandler.appendChild(this.container, this.el.nativeElement);
    else
      DomHandler.appendChild(this.container, this.getOption("appendTo"));
    this.container.style.display = "inline-block";
    if (this.fitContent) {
      this.container.style.width = "fit-content";
    }
    if (this.isAutoHide()) {
      this.container.style.pointerEvents = "none";
    } else {
      this.container.style.pointerEvents = "unset";
      this.bindContainerMouseleaveListener();
    }
  }
  bindContainerMouseleaveListener() {
    if (!this.containerMouseleaveListener) {
      const targetEl = this.container ?? this.container.nativeElement;
      this.containerMouseleaveListener = this.renderer.listen(targetEl, "mouseleave", (e) => {
        this.deactivate();
      });
    }
  }
  unbindContainerMouseleaveListener() {
    if (this.containerMouseleaveListener) {
      this.bindContainerMouseleaveListener();
      this.containerMouseleaveListener = null;
    }
  }
  show() {
    if (!this.getOption("tooltipLabel") || this.getOption("disabled")) {
      return;
    }
    this.create();
    this.align();
    DomHandler.fadeIn(this.container, 250);
    if (this.getOption("tooltipZIndex") === "auto")
      zindexutils.set("tooltip", this.container, this.config.zIndex.tooltip);
    else
      this.container.style.zIndex = this.getOption("tooltipZIndex");
    this.bindDocumentResizeListener();
    this.bindScrollListener();
  }
  hide() {
    if (this.getOption("tooltipZIndex") === "auto") {
      zindexutils.clear(this.container);
    }
    this.remove();
  }
  updateText() {
    const content = this.getOption("tooltipLabel");
    if (content instanceof TemplateRef) {
      const embeddedViewRef = this.viewContainer.createEmbeddedView(content);
      embeddedViewRef.detectChanges();
      embeddedViewRef.rootNodes.forEach((node) => this.tooltipText.appendChild(node));
    } else if (this.getOption("escape")) {
      this.tooltipText.innerHTML = "";
      this.tooltipText.appendChild(document.createTextNode(content));
    } else {
      this.tooltipText.innerHTML = content;
    }
  }
  align() {
    let position = this.getOption("tooltipPosition");
    switch (position) {
      case "top":
        this.alignTop();
        if (this.isOutOfBounds()) {
          this.alignBottom();
          if (this.isOutOfBounds()) {
            this.alignRight();
            if (this.isOutOfBounds()) {
              this.alignLeft();
            }
          }
        }
        break;
      case "bottom":
        this.alignBottom();
        if (this.isOutOfBounds()) {
          this.alignTop();
          if (this.isOutOfBounds()) {
            this.alignRight();
            if (this.isOutOfBounds()) {
              this.alignLeft();
            }
          }
        }
        break;
      case "left":
        this.alignLeft();
        if (this.isOutOfBounds()) {
          this.alignRight();
          if (this.isOutOfBounds()) {
            this.alignTop();
            if (this.isOutOfBounds()) {
              this.alignBottom();
            }
          }
        }
        break;
      case "right":
        this.alignRight();
        if (this.isOutOfBounds()) {
          this.alignLeft();
          if (this.isOutOfBounds()) {
            this.alignTop();
            if (this.isOutOfBounds()) {
              this.alignBottom();
            }
          }
        }
        break;
    }
  }
  getHostOffset() {
    if (this.getOption("appendTo") === "body" || this.getOption("appendTo") === "target") {
      let offset = this.el.nativeElement.getBoundingClientRect();
      let targetLeft = offset.left + DomHandler.getWindowScrollLeft();
      let targetTop = offset.top + DomHandler.getWindowScrollTop();
      return {
        left: targetLeft,
        top: targetTop
      };
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  alignRight() {
    this.preAlign("right");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + DomHandler.getOuterWidth(this.el.nativeElement);
    let top = hostOffset.top + (DomHandler.getOuterHeight(this.el.nativeElement) - DomHandler.getOuterHeight(this.container)) / 2;
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  alignLeft() {
    this.preAlign("left");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left - DomHandler.getOuterWidth(this.container);
    let top = hostOffset.top + (DomHandler.getOuterHeight(this.el.nativeElement) - DomHandler.getOuterHeight(this.container)) / 2;
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  alignTop() {
    this.preAlign("top");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + (DomHandler.getOuterWidth(this.el.nativeElement) - DomHandler.getOuterWidth(this.container)) / 2;
    let top = hostOffset.top - DomHandler.getOuterHeight(this.container);
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  alignBottom() {
    this.preAlign("bottom");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + (DomHandler.getOuterWidth(this.el.nativeElement) - DomHandler.getOuterWidth(this.container)) / 2;
    let top = hostOffset.top + DomHandler.getOuterHeight(this.el.nativeElement);
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  setOption(option) {
    this._tooltipOptions = __spreadValues(__spreadValues({}, this._tooltipOptions), option);
  }
  getOption(option) {
    return this._tooltipOptions[option];
  }
  getTarget(el) {
    return DomHandler.hasClass(el, "p-inputwrapper") ? DomHandler.findSingle(el, "input") : el;
  }
  preAlign(position) {
    this.container.style.left = "-999px";
    this.container.style.top = "-999px";
    let defaultClassName = "p-tooltip p-component p-tooltip-" + position;
    this.container.className = this.getOption("tooltipStyleClass") ? defaultClassName + " " + this.getOption("tooltipStyleClass") : defaultClassName;
  }
  isOutOfBounds() {
    let offset = this.container.getBoundingClientRect();
    let targetTop = offset.top;
    let targetLeft = offset.left;
    let width = DomHandler.getOuterWidth(this.container);
    let height = DomHandler.getOuterHeight(this.container);
    let viewport = DomHandler.getViewport();
    return targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
  }
  onWindowResize(e) {
    this.hide();
  }
  bindDocumentResizeListener() {
    this.zone.runOutsideAngular(() => {
      this.resizeListener = this.onWindowResize.bind(this);
      window.addEventListener("resize", this.resizeListener);
    });
  }
  unbindDocumentResizeListener() {
    if (this.resizeListener) {
      window.removeEventListener("resize", this.resizeListener);
      this.resizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
        if (this.container) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  unbindEvents() {
    if (this.getOption("tooltipEvent") === "hover") {
      this.el.nativeElement.removeEventListener("mouseenter", this.mouseEnterListener);
      this.el.nativeElement.removeEventListener("mouseleave", this.mouseLeaveListener);
      this.el.nativeElement.removeEventListener("click", this.clickListener);
    } else if (this.getOption("tooltipEvent") === "focus") {
      let target = this.getTarget(this.el.nativeElement);
      target.removeEventListener("focus", this.focusListener);
      target.removeEventListener("blur", this.blurListener);
    }
    this.unbindDocumentResizeListener();
  }
  remove() {
    if (this.container && this.container.parentElement) {
      if (this.getOption("appendTo") === "body")
        document.body.removeChild(this.container);
      else if (this.getOption("appendTo") === "target")
        this.el.nativeElement.removeChild(this.container);
      else
        DomHandler.removeChild(this.container, this.getOption("appendTo"));
    }
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.unbindContainerMouseleaveListener();
    this.clearTimeouts();
    this.container = null;
    this.scrollHandler = null;
  }
  clearShowTimeout() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
  }
  clearHideTimeout() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
  clearTimeouts() {
    this.clearShowTimeout();
    this.clearHideTimeout();
  }
  ngOnDestroy() {
    this.unbindEvents();
    if (this.container) {
      zindexutils.clear(this.container);
    }
    this.remove();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
  }
  static ɵfac = function Tooltip_Factory(t) {
    return new (t || _Tooltip)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Tooltip,
    selectors: [["", "pTooltip", ""]],
    hostAttrs: [1, "p-element"],
    hostBindings: function Tooltip_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown.escape", function Tooltip_keydown_escape_HostBindingHandler($event) {
          return ctx.onPressEscape($event);
        }, false, ɵɵresolveDocument);
      }
    },
    inputs: {
      tooltipPosition: "tooltipPosition",
      tooltipEvent: "tooltipEvent",
      appendTo: "appendTo",
      positionStyle: "positionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      tooltipZIndex: "tooltipZIndex",
      escape: "escape",
      showDelay: "showDelay",
      hideDelay: "hideDelay",
      life: "life",
      positionTop: "positionTop",
      positionLeft: "positionLeft",
      autoHide: "autoHide",
      fitContent: "fitContent",
      hideOnEscape: "hideOnEscape",
      content: [InputFlags.None, "pTooltip", "content"],
      disabled: [InputFlags.None, "tooltipDisabled", "disabled"],
      tooltipOptions: "tooltipOptions"
    },
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tooltip, [{
    type: Directive,
    args: [{
      selector: "[pTooltip]",
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: PrimeNGConfig
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }], {
    tooltipPosition: [{
      type: Input
    }],
    tooltipEvent: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    positionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    tooltipZIndex: [{
      type: Input
    }],
    escape: [{
      type: Input
    }],
    showDelay: [{
      type: Input
    }],
    hideDelay: [{
      type: Input
    }],
    life: [{
      type: Input
    }],
    positionTop: [{
      type: Input
    }],
    positionLeft: [{
      type: Input
    }],
    autoHide: [{
      type: Input
    }],
    fitContent: [{
      type: Input
    }],
    hideOnEscape: [{
      type: Input
    }],
    content: [{
      type: Input,
      args: ["pTooltip"]
    }],
    disabled: [{
      type: Input,
      args: ["tooltipDisabled"]
    }],
    tooltipOptions: [{
      type: Input
    }],
    onPressEscape: [{
      type: HostListener,
      args: ["document:keydown.escape", ["$event"]]
    }]
  });
})();
var TooltipModule = class _TooltipModule {
  static ɵfac = function TooltipModule_Factory(t) {
    return new (t || _TooltipModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TooltipModule,
    declarations: [Tooltip],
    imports: [CommonModule],
    exports: [Tooltip]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Tooltip],
      declarations: [Tooltip]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-speeddial.mjs
var _c0 = ["container"];
var _c1 = ["list"];
function SpeedDial_PlusIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "PlusIcon");
  }
}
function SpeedDial_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SpeedDial_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SpeedDial_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.buttonTemplate);
  }
}
function SpeedDial_li_7_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 14);
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngClass", item_r7.icon);
  }
}
var _c2 = (a0) => ({
  "p-disabled": a0
});
var _c3 = () => ({
  exact: false
});
function SpeedDial_li_7_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 12);
    ɵɵlistener("click", function SpeedDial_li_7_a_1_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r16);
      const item_r7 = ɵɵnextContext().$implicit;
      const ctx_r14 = ɵɵnextContext();
      return ɵɵresetView(ctx_r14.onItemClick($event, item_r7));
    })("keydown.enter", function SpeedDial_li_7_a_1_Template_a_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r16);
      const ctx_r18 = ɵɵnextContext();
      const item_r7 = ctx_r18.$implicit;
      const i_r8 = ctx_r18.index;
      const ctx_r17 = ɵɵnextContext();
      return ɵɵresetView(ctx_r17.onItemClick($event, item_r7, i_r8));
    });
    ɵɵtemplate(1, SpeedDial_li_7_a_1_span_1_Template, 1, 1, "span", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext().$implicit;
    const ctx_r9 = ɵɵnextContext();
    ɵɵproperty("routerLink", item_r7.routerLink)("queryParams", item_r7.queryParams)("ngClass", ɵɵpureFunction1(15, _c2, item_r7.disabled))("routerLinkActiveOptions", item_r7.routerLinkActiveOptions || ɵɵpureFunction0(17, _c3))("fragment", item_r7.fragment)("queryParamsHandling", item_r7.queryParamsHandling)("preserveFragment", item_r7.preserveFragment)("skipLocationChange", item_r7.skipLocationChange)("replaceUrl", item_r7.replaceUrl)("state", item_r7.state);
    ɵɵattribute("target", item_r7.target)("tabindex", item_r7.disabled || ctx_r9.readonly || !ctx_r9.visible ? null : item_r7.tabindex ? item_r7.tabindex : "0")("aria-label", item_r7.label)("data-pc-section", "action");
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r7.icon);
  }
}
function SpeedDial_li_7_ng_template_2_a_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 14);
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngClass", item_r7.icon);
  }
}
function SpeedDial_li_7_ng_template_2_a_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 16);
    ɵɵlistener("click", function SpeedDial_li_7_ng_template_2_a_0_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r25);
      const item_r7 = ɵɵnextContext(2).$implicit;
      const ctx_r23 = ɵɵnextContext();
      return ɵɵresetView(ctx_r23.onItemClick($event, item_r7));
    })("keydown.enter", function SpeedDial_li_7_ng_template_2_a_0_Template_a_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r27 = ɵɵnextContext(2);
      const item_r7 = ctx_r27.$implicit;
      const i_r8 = ctx_r27.index;
      const ctx_r26 = ɵɵnextContext();
      return ɵɵresetView(ctx_r26.onItemClick($event, item_r7, i_r8));
    });
    ɵɵtemplate(1, SpeedDial_li_7_ng_template_2_a_0_span_1_Template, 1, 1, "span", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r28 = ɵɵnextContext(2);
    const item_r7 = ctx_r28.$implicit;
    const i_r8 = ctx_r28.index;
    const ctx_r20 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c2, item_r7.disabled));
    ɵɵattribute("href", item_r7.url || null, ɵɵsanitizeUrl)("target", item_r7.target)("data-pc-section", "action")("aria-label", item_r7.label)("tabindex", item_r7.disabled || i_r8 !== ctx_r20.activeIndex && ctx_r20.readonly || !ctx_r20.visible ? null : item_r7.tabindex ? item_r7.tabindex : "0");
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r7.icon);
  }
}
function SpeedDial_li_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SpeedDial_li_7_ng_template_2_a_0_Template, 2, 9, "a", 15);
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r10._visible);
  }
}
var _c4 = (a0, a1) => ({
  "p-hidden": a0,
  "p-focus": a1
});
function SpeedDial_li_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 9);
    ɵɵtemplate(1, SpeedDial_li_7_a_1_Template, 2, 18, "a", 10)(2, SpeedDial_li_7_ng_template_2_Template, 1, 1, "ng-template", null, 11, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const _r11 = ɵɵreference(3);
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r4.getItemStyle(i_r8))("tooltipOptions", item_r7.tooltipOptions)("ngClass", ɵɵpureFunction2(8, _c4, item_r7.visible === false, ctx_r4.focusedOptionId == ctx_r4.id + "_" + i_r8))("id", ctx_r4.id + "_" + i_r8);
    ɵɵattribute("aria-controls", ctx_r4.id + "_item")("data-pc-section", "menuitem");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4._visible && ctx_r4.isClickableRouterLink(item_r7))("ngIfElse", _r11);
  }
}
var _c5 = (a1) => ({
  "p-speeddial-mask": true,
  "p-speeddial-mask-visible": a1
});
function SpeedDial_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 0);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵclassMap(ctx_r5.maskClassName);
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c5, ctx_r5.visible))("ngStyle", ctx_r5.maskStyle);
  }
}
var SpeedDial = class _SpeedDial {
  platformId;
  el;
  cd;
  document;
  renderer;
  /**
   * List of items id.
   * @group Props
   */
  id;
  /**
   * MenuModel instance to define the action items.
   * @group Props
   */
  model = null;
  /**
   * Specifies the visibility of the overlay.
   * @defaultValue false
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible) {
      this.bindDocumentClickListener();
    } else {
      this.unbindDocumentClickListener();
    }
  }
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Style class of the element.
   * @group Props
   */
  className;
  /**
   * Specifies the opening direction of actions.
   * @gruop Props
   */
  direction = "up";
  /**
   * Transition delay step for each action item.
   * @group Props
   */
  transitionDelay = 30;
  /**
   * Specifies the opening type of actions.
   * @group Props
   */
  type = "linear";
  /**
   * Radius for *circle types.
   * @group Props
   */
  radius = 0;
  /**
   * Whether to show a mask element behind the speeddial.
   * @group Props
   */
  mask = false;
  /**
   * Whether the component is disabled.
   * @group Props
   */
  disabled = false;
  /**
   * Whether the actions close when clicked outside.
   * @group Props
   */
  hideOnClickOutside = true;
  /**
   * Inline style of the button element.
   * @group Props
   */
  buttonStyle;
  /**
   * Style class of the button element.
   * @group Props
   */
  buttonClassName;
  /**
   * Inline style of the mask element.
   * @group Props
   */
  maskStyle;
  /**
   * Style class of the mask element.
   * @group Props
   */
  maskClassName;
  /**
   * Show icon of the button element.
   * @group Props
   */
  showIcon;
  /**
   * Hide icon of the button element.
   * @group Props
   */
  hideIcon;
  /**
   * Defined to rotate showIcon when hideIcon is not present.
   * @group Props
   */
  rotateAnimation = true;
  /**
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabel;
  /**
   * Identifier of the underlying input element.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Fired when the visibility of element changed.
   * @param {boolean} boolean - Visibility value.
   * @group Emits
   */
  onVisibleChange = new EventEmitter();
  /**
   * Fired when the visibility of element changed.
   * @param {boolean} boolean - Visibility value.
   * @group Emits
   */
  visibleChange = new EventEmitter();
  /**
   * Fired when the button element clicked.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Fired when the actions are visible.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Fired when the actions are hidden.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onHide = new EventEmitter();
  container;
  list;
  templates;
  buttonTemplate;
  isItemClicked = false;
  _visible = false;
  documentClickListener;
  focusedOptionIndex = signal(null);
  focused = false;
  get focusedOptionId() {
    return this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : null;
  }
  constructor(platformId, el, cd, document2, renderer) {
    this.platformId = platformId;
    this.el = el;
    this.cd = cd;
    this.document = document2;
    this.renderer = renderer;
  }
  ngOnInit() {
    this.id = this.id || UniqueComponentId();
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.type !== "linear") {
        const button = DomHandler.findSingle(this.container?.nativeElement, ".p-speeddial-button");
        const firstItem = DomHandler.findSingle(this.list?.nativeElement, ".p-speeddial-item");
        if (button && firstItem) {
          const wDiff = Math.abs(button.offsetWidth - firstItem.offsetWidth);
          const hDiff = Math.abs(button.offsetHeight - firstItem.offsetHeight);
          this.list?.nativeElement.style.setProperty("--item-diff-x", `${wDiff / 2}px`);
          this.list?.nativeElement.style.setProperty("--item-diff-y", `${hDiff / 2}px`);
        }
      }
    }
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "button":
          this.buttonTemplate = item.template;
          break;
      }
    });
  }
  show() {
    this.onVisibleChange.emit(true);
    this.visibleChange.emit(true);
    this._visible = true;
    this.onShow.emit();
    this.bindDocumentClickListener();
    this.cd.markForCheck();
  }
  hide() {
    this.onVisibleChange.emit(false);
    this.visibleChange.emit(false);
    this._visible = false;
    this.onHide.emit();
    this.unbindDocumentClickListener();
    this.cd.markForCheck();
  }
  onButtonClick(event) {
    this.visible ? this.hide() : this.show();
    this.onClick.emit(event);
    this.isItemClicked = true;
  }
  onItemClick(e, item) {
    if (item.command) {
      item.command({
        originalEvent: e,
        item
      });
    }
    this.hide();
    this.isItemClicked = true;
  }
  onKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDown(event);
        break;
      case "ArrowUp":
        this.onArrowUp(event);
        break;
      case "ArrowLeft":
        this.onArrowLeft(event);
        break;
      case "ArrowRight":
        this.onArrowRight(event);
        break;
      case "Enter":
      case "Space":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      default:
        break;
    }
  }
  onFocus(event) {
    this.focused = true;
  }
  onBlur(event) {
    this.focused = false;
    asapScheduler.schedule(() => this.focusedOptionIndex.set(-1));
  }
  onArrowUp(event) {
    if (this.direction === "up") {
      this.navigateNextItem(event);
    } else if (this.direction === "down") {
      this.navigatePrevItem(event);
    } else {
      this.navigateNextItem(event);
    }
  }
  onArrowDown(event) {
    if (this.direction === "up") {
      this.navigatePrevItem(event);
    } else if (this.direction === "down") {
      this.navigateNextItem(event);
    } else {
      this.navigatePrevItem(event);
    }
  }
  onArrowLeft(event) {
    const leftValidDirections = ["left", "up-right", "down-left"];
    const rightValidDirections = ["right", "up-left", "down-right"];
    if (leftValidDirections.includes(this.direction)) {
      this.navigateNextItem(event);
    } else if (rightValidDirections.includes(this.direction)) {
      this.navigatePrevItem(event);
    } else {
      this.navigatePrevItem(event);
    }
  }
  onArrowRight(event) {
    const leftValidDirections = ["left", "up-right", "down-left"];
    const rightValidDirections = ["right", "up-left", "down-right"];
    if (leftValidDirections.includes(this.direction)) {
      this.navigatePrevItem(event);
    } else if (rightValidDirections.includes(this.direction)) {
      this.navigateNextItem(event);
    } else {
      this.navigateNextItem(event);
    }
  }
  onEndKey(event) {
    event.preventDefault();
    this.focusedOptionIndex.set(-1);
    this.navigatePrevItem(event);
  }
  onHomeKey(event) {
    event.preventDefault();
    this.focusedOptionIndex.set(-1);
    this.navigateNextItem(event);
  }
  onEnterKey(event) {
    const items = DomHandler.find(this.container.nativeElement, '[data-pc-section="menuitem"]');
    const itemIndex = [...items].findIndex((item) => item.id === this.focusedOptionIndex);
    this.onItemClick(event, this.model[itemIndex]);
    this.onBlur(event);
    const buttonEl = DomHandler.findSingle(this.container.nativeElement, "button");
    buttonEl && DomHandler.focus(buttonEl);
  }
  onEscapeKey(event) {
    this.hide();
    const buttonEl = DomHandler.findSingle(this.container.nativeElement, "button");
    buttonEl && DomHandler.focus(buttonEl);
  }
  onTogglerKeydown(event) {
    switch (event.code) {
      case "ArrowDown":
      case "ArrowLeft":
        this.onTogglerArrowDown(event);
        break;
      case "ArrowUp":
      case "ArrowRight":
        this.onTogglerArrowUp(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      default:
        break;
    }
  }
  onTogglerArrowUp(event) {
    this.focused = true;
    DomHandler.focus(this.list.nativeElement);
    this.show();
    this.navigatePrevItem(event);
    event.preventDefault();
  }
  onTogglerArrowDown(event) {
    this.focused = true;
    DomHandler.focus(this.list.nativeElement);
    this.show();
    this.navigateNextItem(event);
    event.preventDefault();
  }
  navigateNextItem(event) {
    const optionIndex = this.findNextOptionIndex(this.focusedOptionIndex());
    this.changeFocusedOptionIndex(optionIndex);
    event.preventDefault();
  }
  navigatePrevItem(event) {
    const optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex());
    this.changeFocusedOptionIndex(optionIndex);
    event.preventDefault();
  }
  findPrevOptionIndex(index) {
    const items = DomHandler.find(this.container.nativeElement, '[data-pc-section="menuitem"]');
    const filteredItems = [...items].filter((item) => !DomHandler.hasClass(DomHandler.findSingle(item, "a"), "p-disabled"));
    const newIndex = index === -1 ? filteredItems[filteredItems.length - 1].id : index;
    let matchedOptionIndex = filteredItems.findIndex((link) => link.getAttribute("id") === newIndex);
    matchedOptionIndex = index === -1 ? filteredItems.length - 1 : matchedOptionIndex - 1;
    return matchedOptionIndex;
  }
  findNextOptionIndex(index) {
    const items = DomHandler.find(this.container.nativeElement, '[data-pc-section="menuitem"]');
    const filteredItems = [...items].filter((item) => !DomHandler.hasClass(DomHandler.findSingle(item, "a"), "p-disabled"));
    const newIndex = index === -1 ? filteredItems[0].id : index;
    let matchedOptionIndex = filteredItems.findIndex((link) => link.getAttribute("id") === newIndex);
    matchedOptionIndex = index === -1 ? 0 : matchedOptionIndex + 1;
    return matchedOptionIndex;
  }
  changeFocusedOptionIndex(index) {
    const items = DomHandler.find(this.container.nativeElement, '[data-pc-section="menuitem"]');
    const filteredItems = [...items].filter((item) => !DomHandler.hasClass(DomHandler.findSingle(item, "a"), "p-disabled"));
    if (filteredItems[index]) {
      this.focusedOptionIndex.set(filteredItems[index].getAttribute("id"));
    }
  }
  calculatePointStyle(index) {
    const type = this.type;
    if (type !== "linear") {
      const length = this.model.length;
      const radius = this.radius || length * 20;
      if (type === "circle") {
        const step = 2 * Math.PI / length;
        return {
          left: `calc(${radius * Math.cos(step * index)}px + var(--item-diff-x, 0px))`,
          top: `calc(${radius * Math.sin(step * index)}px + var(--item-diff-y, 0px))`
        };
      } else if (type === "semi-circle") {
        const direction = this.direction;
        const step = Math.PI / (length - 1);
        const x = `calc(${radius * Math.cos(step * index)}px + var(--item-diff-x, 0px))`;
        const y = `calc(${radius * Math.sin(step * index)}px + var(--item-diff-y, 0px))`;
        if (direction === "up") {
          return {
            left: x,
            bottom: y
          };
        } else if (direction === "down") {
          return {
            left: x,
            top: y
          };
        } else if (direction === "left") {
          return {
            right: y,
            top: x
          };
        } else if (direction === "right") {
          return {
            left: y,
            top: x
          };
        }
      } else if (type === "quarter-circle") {
        const direction = this.direction;
        const step = Math.PI / (2 * (length - 1));
        const x = `calc(${radius * Math.cos(step * index)}px + var(--item-diff-x, 0px))`;
        const y = `calc(${radius * Math.sin(step * index)}px + var(--item-diff-y, 0px))`;
        if (direction === "up-left") {
          return {
            right: x,
            bottom: y
          };
        } else if (direction === "up-right") {
          return {
            left: x,
            bottom: y
          };
        } else if (direction === "down-left") {
          return {
            right: y,
            top: x
          };
        } else if (direction === "down-right") {
          return {
            left: y,
            top: x
          };
        }
      }
    }
    return {};
  }
  calculateTransitionDelay(index) {
    const length = this.model.length;
    return (this.visible ? index : length - index - 1) * this.transitionDelay;
  }
  containerClass() {
    return {
      [`p-speeddial p-component p-speeddial-${this.type}`]: true,
      [`p-speeddial-direction-${this.direction}`]: this.type !== "circle",
      "p-speeddial-opened": this.visible,
      "p-disabled": this.disabled
    };
  }
  buttonClass() {
    return {
      "p-speeddial-button p-button-rounded": true,
      "p-speeddial-rotate": this.rotateAnimation && !this.hideIcon,
      [this.buttonClassName]: true
    };
  }
  get buttonIconClass() {
    return !this.visible && this.showIcon || !this.hideIcon ? this.showIcon : this.hideIcon;
  }
  getItemStyle(index) {
    const transitionDelay = this.calculateTransitionDelay(index);
    const pointStyle = this.calculatePointStyle(index);
    return __spreadValues({
      transitionDelay: `${transitionDelay}ms`
    }, pointStyle);
  }
  isClickableRouterLink(item) {
    return item.routerLink && !this.disabled && !item.disabled;
  }
  isOutsideClicked(event) {
    return this.container && !(this.container.nativeElement.isSameNode(event.target) || this.container.nativeElement.contains(event.target) || this.isItemClicked);
  }
  bindDocumentClickListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentClickListener && this.hideOnClickOutside) {
        this.documentClickListener = this.renderer.listen(this.document, "click", (event) => {
          if (this.visible && this.isOutsideClicked(event)) {
            this.hide();
          }
          this.isItemClicked = false;
        });
      }
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  ngOnDestroy() {
    this.unbindDocumentClickListener();
  }
  static ɵfac = function SpeedDial_Factory(t) {
    return new (t || _SpeedDial)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SpeedDial,
    selectors: [["p-speedDial"]],
    contentQueries: function SpeedDial_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function SpeedDial_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
        ɵɵviewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.list = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      id: "id",
      model: "model",
      visible: "visible",
      style: "style",
      className: "className",
      direction: "direction",
      transitionDelay: "transitionDelay",
      type: "type",
      radius: "radius",
      mask: "mask",
      disabled: "disabled",
      hideOnClickOutside: "hideOnClickOutside",
      buttonStyle: "buttonStyle",
      buttonClassName: "buttonClassName",
      maskStyle: "maskStyle",
      maskClassName: "maskClassName",
      showIcon: "showIcon",
      hideIcon: "hideIcon",
      rotateAnimation: "rotateAnimation",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy"
    },
    outputs: {
      onVisibleChange: "onVisibleChange",
      visibleChange: "visibleChange",
      onClick: "onClick",
      onShow: "onShow",
      onHide: "onHide"
    },
    decls: 9,
    vars: 25,
    consts: [[3, "ngClass", "ngStyle"], ["container", ""], ["pRipple", "", "pButton", "", 1, "p-button-icon-only", 3, "icon", "ngClass", "disabled", "click", "keydown"], [4, "ngIf"], ["role", "menu", 1, "p-speeddial-list", 3, "id", "tabindex", "focus", "focusout", "keydown"], ["list", ""], ["class", "p-speeddial-item", "pTooltip", "", "role", "menuitem", 3, "ngStyle", "tooltipOptions", "ngClass", "id", 4, "ngFor", "ngForOf"], [3, "ngClass", "class", "ngStyle", 4, "ngIf"], [4, "ngTemplateOutlet"], ["pTooltip", "", "role", "menuitem", 1, "p-speeddial-item", 3, "ngStyle", "tooltipOptions", "ngClass", "id"], ["pRipple", "", "class", "p-speeddial-action", "role", "menuitem", 3, "routerLink", "queryParams", "ngClass", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", "keydown.enter", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["pRipple", "", "role", "menuitem", 1, "p-speeddial-action", 3, "routerLink", "queryParams", "ngClass", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", "keydown.enter"], ["class", "p-speeddial-action-icon", 3, "ngClass", 4, "ngIf"], [1, "p-speeddial-action-icon", 3, "ngClass"], ["class", "p-speeddial-action", "role", "menuitem", "pRipple", "", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], ["role", "menuitem", "pRipple", "", 1, "p-speeddial-action", 3, "ngClass", "click", "keydown.enter"]],
    template: function SpeedDial_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0, 1)(2, "button", 2);
        ɵɵlistener("click", function SpeedDial_Template_button_click_2_listener($event) {
          return ctx.onButtonClick($event);
        })("keydown", function SpeedDial_Template_button_keydown_2_listener($event) {
          return ctx.onTogglerKeydown($event);
        });
        ɵɵtemplate(3, SpeedDial_PlusIcon_3_Template, 1, 0, "PlusIcon", 3)(4, SpeedDial_ng_container_4_Template, 2, 1, "ng-container", 3);
        ɵɵelementEnd();
        ɵɵelementStart(5, "ul", 4, 5);
        ɵɵlistener("focus", function SpeedDial_Template_ul_focus_5_listener($event) {
          return ctx.onFocus($event);
        })("focusout", function SpeedDial_Template_ul_focusout_5_listener($event) {
          return ctx.onBlur($event);
        })("keydown", function SpeedDial_Template_ul_keydown_5_listener($event) {
          return ctx.onKeyDown($event);
        });
        ɵɵtemplate(7, SpeedDial_li_7_Template, 4, 11, "li", 6);
        ɵɵelementEnd()();
        ɵɵtemplate(8, SpeedDial_div_8_Template, 1, 6, "div", 7);
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.className);
        ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        ɵɵattribute("data-pc-name", "speeddial")("data-pc-section", "root");
        ɵɵadvance(2);
        ɵɵstyleMap(ctx.buttonStyle);
        ɵɵproperty("icon", ctx.buttonIconClass)("ngClass", ctx.buttonClass())("disabled", ctx.disabled);
        ɵɵattribute("aria-expanded", ctx.visible)("aria-haspopup", true)("aria-controls", ctx.id + "_list")("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("data-pc-name", "button");
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.showIcon && !ctx.buttonTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.buttonTemplate);
        ɵɵadvance();
        ɵɵproperty("id", ctx.id + "_list")("tabindex", -1);
        ɵɵattribute("aria-activedescendant", ctx.focused ? ctx.focusedOptionId : void 0)("data-pc-section", "menu");
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.model);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.mask && ctx.visible);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, ButtonDirective, Ripple, Tooltip, RouterLink, PlusIcon],
    styles: ["@layer primeng{.p-speeddial{position:absolute;display:flex;z-index:1}.p-speeddial-list{margin:0;padding:0;list-style:none;display:flex;align-items:center;justify-content:center;transition:top 0s linear .2s;pointer-events:none}.p-speeddial-item{transform:scale(0);opacity:0;transition:transform .2s cubic-bezier(.4,0,.2,1) 0ms,opacity .8s;will-change:transform}.p-speeddial-action{display:flex;align-items:center;justify-content:center;border-radius:50%;position:relative;overflow:hidden;cursor:pointer}.p-speeddial-circle .p-speeddial-item,.p-speeddial-semi-circle .p-speeddial-item,.p-speeddial-quarter-circle .p-speeddial-item{position:absolute}.p-speeddial-rotate{transition:transform .25s cubic-bezier(.4,0,.2,1) 0ms;will-change:transform}.p-speeddial-mask{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;transition:opacity .25s cubic-bezier(.25,.8,.25,1)}.p-speeddial-mask-visible{pointer-events:none;opacity:1;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.p-speeddial-opened .p-speeddial-list{pointer-events:auto}.p-speeddial-opened .p-speeddial-item{transform:scale(1);opacity:1}.p-speeddial-opened .p-speeddial-rotate{transform:rotate(45deg)}.p-speeddial-direction-up{align-items:center;flex-direction:column-reverse}.p-speeddial-direction-up .p-speeddial-list{flex-direction:column-reverse}.p-speeddial-direction-down{align-items:center;flex-direction:column}.p-speeddial-direction-down .p-speeddial-list{flex-direction:column}.p-speeddial-direction-left{justify-content:center;flex-direction:row-reverse}.p-speeddial-direction-left .p-speeddial-list{flex-direction:row-reverse}.p-speeddial-direction-right{justify-content:center;flex-direction:row}.p-speeddial-direction-right .p-speeddial-list{flex-direction:row}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpeedDial, [{
    type: Component,
    args: [{
      selector: "p-speedDial",
      template: `
        <div #container [ngClass]="containerClass()" [class]="className" [ngStyle]="style" [attr.data-pc-name]="'speeddial'" [attr.data-pc-section]="'root'">
            <button
                pRipple
                pButton
                class="p-button-icon-only"
                [style]="buttonStyle"
                [icon]="buttonIconClass"
                [ngClass]="buttonClass()"
                [disabled]="disabled"
                [attr.aria-expanded]="visible"
                [attr.aria-haspopup]="true"
                [attr.aria-controls]="id + '_list'"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledby]="ariaLabelledBy"
                (click)="onButtonClick($event)"
                (keydown)="onTogglerKeydown($event)"
                [attr.data-pc-name]="'button'"
            >
                <PlusIcon *ngIf="!showIcon && !buttonTemplate" />
                <ng-container *ngIf="buttonTemplate">
                    <ng-container *ngTemplateOutlet="buttonTemplate"></ng-container>
                </ng-container>
            </button>
            <ul
                #list
                class="p-speeddial-list"
                role="menu"
                [id]="id + '_list'"
                (focus)="onFocus($event)"
                (focusout)="onBlur($event)"
                (keydown)="onKeyDown($event)"
                [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                [tabindex]="-1"
                [attr.data-pc-section]="'menu'"
            >
                <li
                    *ngFor="let item of model; let i = index"
                    [ngStyle]="getItemStyle(i)"
                    class="p-speeddial-item"
                    pTooltip
                    [tooltipOptions]="item.tooltipOptions"
                    [ngClass]="{ 'p-hidden': item.visible === false, 'p-focus': focusedOptionId == id + '_' + i }"
                    [id]="id + '_' + i"
                    [attr.aria-controls]="id + '_item'"
                    role="menuitem"
                    [attr.data-pc-section]="'menuitem'"
                >
                    <a
                        *ngIf="_visible && isClickableRouterLink(item); else elseBlock"
                        pRipple
                        [routerLink]="item.routerLink"
                        [queryParams]="item.queryParams"
                        class="p-speeddial-action"
                        [ngClass]="{ 'p-disabled': item.disabled }"
                        role="menuitem"
                        [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                        (click)="onItemClick($event, item)"
                        (keydown.enter)="onItemClick($event, item, i)"
                        [attr.target]="item.target"
                        [attr.tabindex]="item.disabled || readonly || !visible ? null : item.tabindex ? item.tabindex : '0'"
                        [fragment]="item.fragment"
                        [queryParamsHandling]="item.queryParamsHandling"
                        [preserveFragment]="item.preserveFragment"
                        [skipLocationChange]="item.skipLocationChange"
                        [replaceUrl]="item.replaceUrl"
                        [state]="item.state"
                        [attr.aria-label]="item.label"
                        [attr.data-pc-section]="'action'"
                    >
                        <span class="p-speeddial-action-icon" *ngIf="item.icon" [ngClass]="item.icon"></span>
                    </a>
                    <ng-template #elseBlock>
                        <a
                            *ngIf="_visible"
                            [attr.href]="item.url || null"
                            class="p-speeddial-action"
                            role="menuitem"
                            pRipple
                            (click)="onItemClick($event, item)"
                            [ngClass]="{ 'p-disabled': item.disabled }"
                            (keydown.enter)="onItemClick($event, item, i)"
                            [attr.target]="item.target"
                            [attr.data-pc-section]="'action'"
                            [attr.aria-label]="item.label"
                            [attr.tabindex]="item.disabled || (i !== activeIndex && readonly) || !visible ? null : item.tabindex ? item.tabindex : '0'"
                        >
                            <span class="p-speeddial-action-icon" *ngIf="item.icon" [ngClass]="item.icon"></span>
                        </a>
                    </ng-template>
                </li>
            </ul>
        </div>
        <div *ngIf="mask && visible" [ngClass]="{ 'p-speeddial-mask': true, 'p-speeddial-mask-visible': visible }" [class]="maskClassName" [ngStyle]="maskStyle"></div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-speeddial{position:absolute;display:flex;z-index:1}.p-speeddial-list{margin:0;padding:0;list-style:none;display:flex;align-items:center;justify-content:center;transition:top 0s linear .2s;pointer-events:none}.p-speeddial-item{transform:scale(0);opacity:0;transition:transform .2s cubic-bezier(.4,0,.2,1) 0ms,opacity .8s;will-change:transform}.p-speeddial-action{display:flex;align-items:center;justify-content:center;border-radius:50%;position:relative;overflow:hidden;cursor:pointer}.p-speeddial-circle .p-speeddial-item,.p-speeddial-semi-circle .p-speeddial-item,.p-speeddial-quarter-circle .p-speeddial-item{position:absolute}.p-speeddial-rotate{transition:transform .25s cubic-bezier(.4,0,.2,1) 0ms;will-change:transform}.p-speeddial-mask{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;transition:opacity .25s cubic-bezier(.25,.8,.25,1)}.p-speeddial-mask-visible{pointer-events:none;opacity:1;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.p-speeddial-opened .p-speeddial-list{pointer-events:auto}.p-speeddial-opened .p-speeddial-item{transform:scale(1);opacity:1}.p-speeddial-opened .p-speeddial-rotate{transform:rotate(45deg)}.p-speeddial-direction-up{align-items:center;flex-direction:column-reverse}.p-speeddial-direction-up .p-speeddial-list{flex-direction:column-reverse}.p-speeddial-direction-down{align-items:center;flex-direction:column}.p-speeddial-direction-down .p-speeddial-list{flex-direction:column}.p-speeddial-direction-left{justify-content:center;flex-direction:row-reverse}.p-speeddial-direction-left .p-speeddial-list{flex-direction:row-reverse}.p-speeddial-direction-right{justify-content:center;flex-direction:row}.p-speeddial-direction-right .p-speeddial-list{flex-direction:row}}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Renderer2
  }], {
    id: [{
      type: Input
    }],
    model: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    className: [{
      type: Input
    }],
    direction: [{
      type: Input
    }],
    transitionDelay: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    radius: [{
      type: Input
    }],
    mask: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    hideOnClickOutside: [{
      type: Input
    }],
    buttonStyle: [{
      type: Input
    }],
    buttonClassName: [{
      type: Input
    }],
    maskStyle: [{
      type: Input
    }],
    maskClassName: [{
      type: Input
    }],
    showIcon: [{
      type: Input
    }],
    hideIcon: [{
      type: Input
    }],
    rotateAnimation: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    onVisibleChange: [{
      type: Output
    }],
    visibleChange: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    container: [{
      type: ViewChild,
      args: ["container"]
    }],
    list: [{
      type: ViewChild,
      args: ["list"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var SpeedDialModule = class _SpeedDialModule {
  static ɵfac = function SpeedDialModule_Factory(t) {
    return new (t || _SpeedDialModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SpeedDialModule,
    declarations: [SpeedDial],
    imports: [CommonModule, ButtonModule, RippleModule, TooltipModule, RouterModule, PlusIcon],
    exports: [SpeedDial, SharedModule, ButtonModule, TooltipModule, RouterModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, ButtonModule, RippleModule, TooltipModule, RouterModule, PlusIcon, SharedModule, ButtonModule, TooltipModule, RouterModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpeedDialModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ButtonModule, RippleModule, TooltipModule, RouterModule, PlusIcon],
      exports: [SpeedDial, SharedModule, ButtonModule, TooltipModule, RouterModule],
      declarations: [SpeedDial]
    }]
  }], null, null);
})();
export {
  SpeedDial,
  SpeedDialModule
};
//# sourceMappingURL=primeng_speeddial.js.map
