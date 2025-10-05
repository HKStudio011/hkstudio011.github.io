function kh(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var ga = { exports: {} };
/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var Hh = ga.exports, tu;
function Vh() {
  return tu || (tu = 1, (function(i, e) {
    (function(t, n) {
      i.exports = n();
    })(Hh, function() {
      const t = /* @__PURE__ */ new Map(), n = { set(E, a, m) {
        t.has(E) || t.set(E, /* @__PURE__ */ new Map());
        const L = t.get(E);
        L.has(a) || L.size === 0 ? L.set(a, m) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(L.keys())[0]}.`);
      }, get: (E, a) => t.has(E) && t.get(E).get(a) || null, remove(E, a) {
        if (!t.has(E)) return;
        const m = t.get(E);
        m.delete(a), m.size === 0 && t.delete(E);
      } }, s = "transitionend", l = (E) => (E && window.CSS && window.CSS.escape && (E = E.replace(/#([^\s"#']+)/g, (a, m) => `#${CSS.escape(m)}`)), E), f = (E) => E == null ? `${E}` : Object.prototype.toString.call(E).match(/\s([a-z]+)/i)[1].toLowerCase(), h = (E) => {
        E.dispatchEvent(new Event(s));
      }, p = (E) => !(!E || typeof E != "object") && (E.jquery !== void 0 && (E = E[0]), E.nodeType !== void 0), g = (E) => p(E) ? E.jquery ? E[0] : E : typeof E == "string" && E.length > 0 ? document.querySelector(l(E)) : null, v = (E) => {
        if (!p(E) || E.getClientRects().length === 0) return !1;
        const a = getComputedStyle(E).getPropertyValue("visibility") === "visible", m = E.closest("details:not([open])");
        if (!m) return a;
        if (m !== E) {
          const L = E.closest("summary");
          if (L && L.parentNode !== m || L === null) return !1;
        }
        return a;
      }, M = (E) => !E || E.nodeType !== Node.ELEMENT_NODE || !!E.classList.contains("disabled") || (E.disabled !== void 0 ? E.disabled : E.hasAttribute("disabled") && E.getAttribute("disabled") !== "false"), b = (E) => {
        if (!document.documentElement.attachShadow) return null;
        if (typeof E.getRootNode == "function") {
          const a = E.getRootNode();
          return a instanceof ShadowRoot ? a : null;
        }
        return E instanceof ShadowRoot ? E : E.parentNode ? b(E.parentNode) : null;
      }, T = () => {
      }, C = (E) => {
        E.offsetHeight;
      }, D = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, x = [], _ = () => document.documentElement.dir === "rtl", B = (E) => {
        var a;
        a = () => {
          const m = D();
          if (m) {
            const L = E.NAME, q = m.fn[L];
            m.fn[L] = E.jQueryInterface, m.fn[L].Constructor = E, m.fn[L].noConflict = () => (m.fn[L] = q, E.jQueryInterface);
          }
        }, document.readyState === "loading" ? (x.length || document.addEventListener("DOMContentLoaded", () => {
          for (const m of x) m();
        }), x.push(a)) : a();
      }, U = (E, a = [], m = E) => typeof E == "function" ? E.call(...a) : m, z = (E, a, m = !0) => {
        if (!m) return void U(E);
        const L = ((ue) => {
          if (!ue) return 0;
          let { transitionDuration: Se, transitionDelay: De } = window.getComputedStyle(ue);
          const Ze = Number.parseFloat(Se), Qe = Number.parseFloat(De);
          return Ze || Qe ? (Se = Se.split(",")[0], De = De.split(",")[0], 1e3 * (Number.parseFloat(Se) + Number.parseFloat(De))) : 0;
        })(a) + 5;
        let q = !1;
        const Y = ({ target: ue }) => {
          ue === a && (q = !0, a.removeEventListener(s, Y), U(E));
        };
        a.addEventListener(s, Y), setTimeout(() => {
          q || h(a);
        }, L);
      }, le = (E, a, m, L) => {
        const q = E.length;
        let Y = E.indexOf(a);
        return Y === -1 ? !m && L ? E[q - 1] : E[0] : (Y += m ? 1 : -1, L && (Y = (Y + q) % q), E[Math.max(0, Math.min(Y, q - 1))]);
      }, $ = /[^.]*(?=\..*)\.|.*/, c = /\..*/, oe = /::\d+$/, xe = {};
      let w = 1;
      const I = { mouseenter: "mouseover", mouseleave: "mouseout" }, pe = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
      function J(E, a) {
        return a && `${a}::${w++}` || E.uidEvent || w++;
      }
      function de(E) {
        const a = J(E);
        return E.uidEvent = a, xe[a] = xe[a] || {}, xe[a];
      }
      function Ee(E, a, m = null) {
        return Object.values(E).find((L) => L.callable === a && L.delegationSelector === m);
      }
      function ie(E, a, m) {
        const L = typeof a == "string", q = L ? m : a || m;
        let Y = ke(E);
        return pe.has(Y) || (Y = E), [L, q, Y];
      }
      function Te(E, a, m, L, q) {
        if (typeof a != "string" || !E) return;
        let [Y, ue, Se] = ie(a, m, L);
        a in I && (ue = ((yt) => function(vt) {
          if (!vt.relatedTarget || vt.relatedTarget !== vt.delegateTarget && !vt.delegateTarget.contains(vt.relatedTarget)) return yt.call(this, vt);
        })(ue));
        const De = de(E), Ze = De[Se] || (De[Se] = {}), Qe = Ee(Ze, ue, Y ? m : null);
        if (Qe) return void (Qe.oneOff = Qe.oneOff && q);
        const je = J(ue, a.replace($, "")), Tt = Y ? /* @__PURE__ */ (function(ft, yt, vt) {
          return function St(on) {
            const cn = ft.querySelectorAll(yt);
            for (let { target: Ut } = on; Ut && Ut !== this; Ut = Ut.parentNode) for (const Jt of cn) if (Jt === Ut) return It(on, { delegateTarget: Ut }), St.oneOff && Z.off(ft, on.type, yt, vt), vt.apply(Ut, [on]);
          };
        })(E, m, ue) : /* @__PURE__ */ (function(ft, yt) {
          return function vt(St) {
            return It(St, { delegateTarget: ft }), vt.oneOff && Z.off(ft, St.type, yt), yt.apply(ft, [St]);
          };
        })(E, ue);
        Tt.delegationSelector = Y ? m : null, Tt.callable = ue, Tt.oneOff = q, Tt.uidEvent = je, Ze[je] = Tt, E.addEventListener(Se, Tt, Y);
      }
      function fe(E, a, m, L, q) {
        const Y = Ee(a[m], L, q);
        Y && (E.removeEventListener(m, Y, !!q), delete a[m][Y.uidEvent]);
      }
      function Fe(E, a, m, L) {
        const q = a[m] || {};
        for (const [Y, ue] of Object.entries(q)) Y.includes(L) && fe(E, a, m, ue.callable, ue.delegationSelector);
      }
      function ke(E) {
        return E = E.replace(c, ""), I[E] || E;
      }
      const Z = { on(E, a, m, L) {
        Te(E, a, m, L, !1);
      }, one(E, a, m, L) {
        Te(E, a, m, L, !0);
      }, off(E, a, m, L) {
        if (typeof a != "string" || !E) return;
        const [q, Y, ue] = ie(a, m, L), Se = ue !== a, De = de(E), Ze = De[ue] || {}, Qe = a.startsWith(".");
        if (Y === void 0) {
          if (Qe) for (const je of Object.keys(De)) Fe(E, De, je, a.slice(1));
          for (const [je, Tt] of Object.entries(Ze)) {
            const ft = je.replace(oe, "");
            Se && !a.includes(ft) || fe(E, De, ue, Tt.callable, Tt.delegationSelector);
          }
        } else {
          if (!Object.keys(Ze).length) return;
          fe(E, De, ue, Y, q ? m : null);
        }
      }, trigger(E, a, m) {
        if (typeof a != "string" || !E) return null;
        const L = D();
        let q = null, Y = !0, ue = !0, Se = !1;
        a !== ke(a) && L && (q = L.Event(a, m), L(E).trigger(q), Y = !q.isPropagationStopped(), ue = !q.isImmediatePropagationStopped(), Se = q.isDefaultPrevented());
        const De = It(new Event(a, { bubbles: Y, cancelable: !0 }), m);
        return Se && De.preventDefault(), ue && E.dispatchEvent(De), De.defaultPrevented && q && q.preventDefault(), De;
      } };
      function It(E, a = {}) {
        for (const [m, L] of Object.entries(a)) try {
          E[m] = L;
        } catch {
          Object.defineProperty(E, m, { configurable: !0, get: () => L });
        }
        return E;
      }
      function zt(E) {
        if (E === "true") return !0;
        if (E === "false") return !1;
        if (E === Number(E).toString()) return Number(E);
        if (E === "" || E === "null") return null;
        if (typeof E != "string") return E;
        try {
          return JSON.parse(decodeURIComponent(E));
        } catch {
          return E;
        }
      }
      function _e(E) {
        return E.replace(/[A-Z]/g, (a) => `-${a.toLowerCase()}`);
      }
      const Ae = { setDataAttribute(E, a, m) {
        E.setAttribute(`data-bs-${_e(a)}`, m);
      }, removeDataAttribute(E, a) {
        E.removeAttribute(`data-bs-${_e(a)}`);
      }, getDataAttributes(E) {
        if (!E) return {};
        const a = {}, m = Object.keys(E.dataset).filter((L) => L.startsWith("bs") && !L.startsWith("bsConfig"));
        for (const L of m) {
          let q = L.replace(/^bs/, "");
          q = q.charAt(0).toLowerCase() + q.slice(1), a[q] = zt(E.dataset[L]);
        }
        return a;
      }, getDataAttribute: (E, a) => zt(E.getAttribute(`data-bs-${_e(a)}`)) };
      class Ye {
        static get Default() {
          return {};
        }
        static get DefaultType() {
          return {};
        }
        static get NAME() {
          throw new Error('You have to implement the static method "NAME", for each component!');
        }
        _getConfig(a) {
          return a = this._mergeConfigObj(a), a = this._configAfterMerge(a), this._typeCheckConfig(a), a;
        }
        _configAfterMerge(a) {
          return a;
        }
        _mergeConfigObj(a, m) {
          const L = p(m) ? Ae.getDataAttribute(m, "config") : {};
          return { ...this.constructor.Default, ...typeof L == "object" ? L : {}, ...p(m) ? Ae.getDataAttributes(m) : {}, ...typeof a == "object" ? a : {} };
        }
        _typeCheckConfig(a, m = this.constructor.DefaultType) {
          for (const [L, q] of Object.entries(m)) {
            const Y = a[L], ue = p(Y) ? "element" : f(Y);
            if (!new RegExp(q).test(ue)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${L}" provided type "${ue}" but expected type "${q}".`);
          }
        }
      }
      class Ne extends Ye {
        constructor(a, m) {
          super(), (a = g(a)) && (this._element = a, this._config = this._getConfig(m), n.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
          n.remove(this._element, this.constructor.DATA_KEY), Z.off(this._element, this.constructor.EVENT_KEY);
          for (const a of Object.getOwnPropertyNames(this)) this[a] = null;
        }
        _queueCallback(a, m, L = !0) {
          z(a, m, L);
        }
        _getConfig(a) {
          return a = this._mergeConfigObj(a, this._element), a = this._configAfterMerge(a), this._typeCheckConfig(a), a;
        }
        static getInstance(a) {
          return n.get(g(a), this.DATA_KEY);
        }
        static getOrCreateInstance(a, m = {}) {
          return this.getInstance(a) || new this(a, typeof m == "object" ? m : null);
        }
        static get VERSION() {
          return "5.3.8";
        }
        static get DATA_KEY() {
          return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
          return `.${this.DATA_KEY}`;
        }
        static eventName(a) {
          return `${a}${this.EVENT_KEY}`;
        }
      }
      const ht = (E) => {
        let a = E.getAttribute("data-bs-target");
        if (!a || a === "#") {
          let m = E.getAttribute("href");
          if (!m || !m.includes("#") && !m.startsWith(".")) return null;
          m.includes("#") && !m.startsWith("#") && (m = `#${m.split("#")[1]}`), a = m && m !== "#" ? m.trim() : null;
        }
        return a ? a.split(",").map((m) => l(m)).join(",") : null;
      }, Me = { find: (E, a = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(a, E)), findOne: (E, a = document.documentElement) => Element.prototype.querySelector.call(a, E), children: (E, a) => [].concat(...E.children).filter((m) => m.matches(a)), parents(E, a) {
        const m = [];
        let L = E.parentNode.closest(a);
        for (; L; ) m.push(L), L = L.parentNode.closest(a);
        return m;
      }, prev(E, a) {
        let m = E.previousElementSibling;
        for (; m; ) {
          if (m.matches(a)) return [m];
          m = m.previousElementSibling;
        }
        return [];
      }, next(E, a) {
        let m = E.nextElementSibling;
        for (; m; ) {
          if (m.matches(a)) return [m];
          m = m.nextElementSibling;
        }
        return [];
      }, focusableChildren(E) {
        const a = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((m) => `${m}:not([tabindex^="-"])`).join(",");
        return this.find(a, E).filter((m) => !M(m) && v(m));
      }, getSelectorFromElement(E) {
        const a = ht(E);
        return a && Me.findOne(a) ? a : null;
      }, getElementFromSelector(E) {
        const a = ht(E);
        return a ? Me.findOne(a) : null;
      }, getMultipleElementsFromSelector(E) {
        const a = ht(E);
        return a ? Me.find(a) : [];
      } }, ct = (E, a = "hide") => {
        const m = `click.dismiss${E.EVENT_KEY}`, L = E.NAME;
        Z.on(document, m, `[data-bs-dismiss="${L}"]`, function(q) {
          if (["A", "AREA"].includes(this.tagName) && q.preventDefault(), M(this)) return;
          const Y = Me.getElementFromSelector(this) || this.closest(`.${L}`);
          E.getOrCreateInstance(Y)[a]();
        });
      }, jt = ".bs.alert", Mt = `close${jt}`, V = `closed${jt}`;
      class pn extends Ne {
        static get NAME() {
          return "alert";
        }
        close() {
          if (Z.trigger(this._element, Mt).defaultPrevented) return;
          this._element.classList.remove("show");
          const a = this._element.classList.contains("fade");
          this._queueCallback(() => this._destroyElement(), this._element, a);
        }
        _destroyElement() {
          this._element.remove(), Z.trigger(this._element, V), this.dispose();
        }
        static jQueryInterface(a) {
          return this.each(function() {
            const m = pn.getOrCreateInstance(this);
            if (typeof a == "string") {
              if (m[a] === void 0 || a.startsWith("_") || a === "constructor") throw new TypeError(`No method named "${a}"`);
              m[a](this);
            }
          });
        }
      }
      ct(pn, "close"), B(pn);
      const Pt = '[data-bs-toggle="button"]';
      class bt extends Ne {
        static get NAME() {
          return "button";
        }
        toggle() {
          this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }
        static jQueryInterface(a) {
          return this.each(function() {
            const m = bt.getOrCreateInstance(this);
            a === "toggle" && m[a]();
          });
        }
      }
      Z.on(document, "click.bs.button.data-api", Pt, (E) => {
        E.preventDefault();
        const a = E.target.closest(Pt);
        bt.getOrCreateInstance(a).toggle();
      }), B(bt);
      const st = ".bs.swipe", Ot = `touchstart${st}`, dt = `touchmove${st}`, O = `touchend${st}`, R = `pointerdown${st}`, ee = `pointerup${st}`, ve = { endCallback: null, leftCallback: null, rightCallback: null }, be = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
      class K extends Ye {
        constructor(a, m) {
          super(), this._element = a, a && K.isSupported() && (this._config = this._getConfig(m), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
        }
        static get Default() {
          return ve;
        }
        static get DefaultType() {
          return be;
        }
        static get NAME() {
          return "swipe";
        }
        dispose() {
          Z.off(this._element, st);
        }
        _start(a) {
          this._supportPointerEvents ? this._eventIsPointerPenTouch(a) && (this._deltaX = a.clientX) : this._deltaX = a.touches[0].clientX;
        }
        _end(a) {
          this._eventIsPointerPenTouch(a) && (this._deltaX = a.clientX - this._deltaX), this._handleSwipe(), U(this._config.endCallback);
        }
        _move(a) {
          this._deltaX = a.touches && a.touches.length > 1 ? 0 : a.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
          const a = Math.abs(this._deltaX);
          if (a <= 40) return;
          const m = a / this._deltaX;
          this._deltaX = 0, m && U(m > 0 ? this._config.rightCallback : this._config.leftCallback);
        }
        _initEvents() {
          this._supportPointerEvents ? (Z.on(this._element, R, (a) => this._start(a)), Z.on(this._element, ee, (a) => this._end(a)), this._element.classList.add("pointer-event")) : (Z.on(this._element, Ot, (a) => this._start(a)), Z.on(this._element, dt, (a) => this._move(a)), Z.on(this._element, O, (a) => this._end(a)));
        }
        _eventIsPointerPenTouch(a) {
          return this._supportPointerEvents && (a.pointerType === "pen" || a.pointerType === "touch");
        }
        static isSupported() {
          return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
        }
      }
      const Ie = ".bs.carousel", Oe = ".data-api", Ke = "ArrowLeft", kt = "ArrowRight", Ce = "next", Ve = "prev", rt = "left", nt = "right", Ge = `slide${Ie}`, xt = `slid${Ie}`, _t = `keydown${Ie}`, $t = `mouseenter${Ie}`, j = `mouseleave${Ie}`, Xe = `dragstart${Ie}`, he = `load${Ie}${Oe}`, ye = `click${Ie}${Oe}`, Ue = "carousel", Be = "active", Lt = ".active", Ht = ".carousel-item", Kt = Lt + Ht, Ft = { [Ke]: nt, [kt]: rt }, Cn = { interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0 }, qn = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
      class hi extends Ne {
        constructor(a, m) {
          super(a, m), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = Me.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === Ue && this.cycle();
        }
        static get Default() {
          return Cn;
        }
        static get DefaultType() {
          return qn;
        }
        static get NAME() {
          return "carousel";
        }
        next() {
          this._slide(Ce);
        }
        nextWhenVisible() {
          !document.hidden && v(this._element) && this.next();
        }
        prev() {
          this._slide(Ve);
        }
        pause() {
          this._isSliding && h(this._element), this._clearInterval();
        }
        cycle() {
          this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
        }
        _maybeEnableCycle() {
          this._config.ride && (this._isSliding ? Z.one(this._element, xt, () => this.cycle()) : this.cycle());
        }
        to(a) {
          const m = this._getItems();
          if (a > m.length - 1 || a < 0) return;
          if (this._isSliding) return void Z.one(this._element, xt, () => this.to(a));
          const L = this._getItemIndex(this._getActive());
          if (L === a) return;
          const q = a > L ? Ce : Ve;
          this._slide(q, m[a]);
        }
        dispose() {
          this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(a) {
          return a.defaultInterval = a.interval, a;
        }
        _addEventListeners() {
          this._config.keyboard && Z.on(this._element, _t, (a) => this._keydown(a)), this._config.pause === "hover" && (Z.on(this._element, $t, () => this.pause()), Z.on(this._element, j, () => this._maybeEnableCycle())), this._config.touch && K.isSupported() && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
          for (const m of Me.find(".carousel-item img", this._element)) Z.on(m, Xe, (L) => L.preventDefault());
          const a = { leftCallback: () => this._slide(this._directionToOrder(rt)), rightCallback: () => this._slide(this._directionToOrder(nt)), endCallback: () => {
            this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval));
          } };
          this._swipeHelper = new K(this._element, a);
        }
        _keydown(a) {
          if (/input|textarea/i.test(a.target.tagName)) return;
          const m = Ft[a.key];
          m && (a.preventDefault(), this._slide(this._directionToOrder(m)));
        }
        _getItemIndex(a) {
          return this._getItems().indexOf(a);
        }
        _setActiveIndicatorElement(a) {
          if (!this._indicatorsElement) return;
          const m = Me.findOne(Lt, this._indicatorsElement);
          m.classList.remove(Be), m.removeAttribute("aria-current");
          const L = Me.findOne(`[data-bs-slide-to="${a}"]`, this._indicatorsElement);
          L && (L.classList.add(Be), L.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
          const a = this._activeElement || this._getActive();
          if (!a) return;
          const m = Number.parseInt(a.getAttribute("data-bs-interval"), 10);
          this._config.interval = m || this._config.defaultInterval;
        }
        _slide(a, m = null) {
          if (this._isSliding) return;
          const L = this._getActive(), q = a === Ce, Y = m || le(this._getItems(), L, q, this._config.wrap);
          if (Y === L) return;
          const ue = this._getItemIndex(Y), Se = (je) => Z.trigger(this._element, je, { relatedTarget: Y, direction: this._orderToDirection(a), from: this._getItemIndex(L), to: ue });
          if (Se(Ge).defaultPrevented || !L || !Y) return;
          const De = !!this._interval;
          this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(ue), this._activeElement = Y;
          const Ze = q ? "carousel-item-start" : "carousel-item-end", Qe = q ? "carousel-item-next" : "carousel-item-prev";
          Y.classList.add(Qe), C(Y), L.classList.add(Ze), Y.classList.add(Ze), this._queueCallback(() => {
            Y.classList.remove(Ze, Qe), Y.classList.add(Be), L.classList.remove(Be, Qe, Ze), this._isSliding = !1, Se(xt);
          }, L, this._isAnimated()), De && this.cycle();
        }
        _isAnimated() {
          return this._element.classList.contains("slide");
        }
        _getActive() {
          return Me.findOne(Kt, this._element);
        }
        _getItems() {
          return Me.find(Ht, this._element);
        }
        _clearInterval() {
          this._interval && (clearInterval(this._interval), this._interval = null);
        }
        _directionToOrder(a) {
          return _() ? a === rt ? Ve : Ce : a === rt ? Ce : Ve;
        }
        _orderToDirection(a) {
          return _() ? a === Ve ? rt : nt : a === Ve ? nt : rt;
        }
        static jQueryInterface(a) {
          return this.each(function() {
            const m = hi.getOrCreateInstance(this, a);
            if (typeof a != "number") {
              if (typeof a == "string") {
                if (m[a] === void 0 || a.startsWith("_") || a === "constructor") throw new TypeError(`No method named "${a}"`);
                m[a]();
              }
            } else m.to(a);
          });
        }
      }
      Z.on(document, ye, "[data-bs-slide], [data-bs-slide-to]", function(E) {
        const a = Me.getElementFromSelector(this);
        if (!a || !a.classList.contains(Ue)) return;
        E.preventDefault();
        const m = hi.getOrCreateInstance(a), L = this.getAttribute("data-bs-slide-to");
        return L ? (m.to(L), void m._maybeEnableCycle()) : Ae.getDataAttribute(this, "slide") === "next" ? (m.next(), void m._maybeEnableCycle()) : (m.prev(), void m._maybeEnableCycle());
      }), Z.on(window, he, () => {
        const E = Me.find('[data-bs-ride="carousel"]');
        for (const a of E) hi.getOrCreateInstance(a);
      }), B(hi);
      const Hn = ".bs.collapse", Bn = `show${Hn}`, Xi = `shown${Hn}`, qi = `hide${Hn}`, hs = `hidden${Hn}`, hr = `click${Hn}.data-api`, dr = "show", jn = "collapse", ji = "collapsing", ds = `:scope .${jn} .${jn}`, pr = '[data-bs-toggle="collapse"]', Qs = { parent: null, toggle: !0 }, Ni = { parent: "(null|element)", toggle: "boolean" };
      class P extends Ne {
        constructor(a, m) {
          super(a, m), this._isTransitioning = !1, this._triggerArray = [];
          const L = Me.find(pr);
          for (const q of L) {
            const Y = Me.getSelectorFromElement(q), ue = Me.find(Y).filter((Se) => Se === this._element);
            Y !== null && ue.length && this._triggerArray.push(q);
          }
          this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
        }
        static get Default() {
          return Qs;
        }
        static get DefaultType() {
          return Ni;
        }
        static get NAME() {
          return "collapse";
        }
        toggle() {
          this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (this._isTransitioning || this._isShown()) return;
          let a = [];
          if (this._config.parent && (a = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((q) => q !== this._element).map((q) => P.getOrCreateInstance(q, { toggle: !1 }))), a.length && a[0]._isTransitioning || Z.trigger(this._element, Bn).defaultPrevented) return;
          for (const q of a) q.hide();
          const m = this._getDimension();
          this._element.classList.remove(jn), this._element.classList.add(ji), this._element.style[m] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
          const L = `scroll${m[0].toUpperCase() + m.slice(1)}`;
          this._queueCallback(() => {
            this._isTransitioning = !1, this._element.classList.remove(ji), this._element.classList.add(jn, dr), this._element.style[m] = "", Z.trigger(this._element, Xi);
          }, this._element, !0), this._element.style[m] = `${this._element[L]}px`;
        }
        hide() {
          if (this._isTransitioning || !this._isShown() || Z.trigger(this._element, qi).defaultPrevented) return;
          const a = this._getDimension();
          this._element.style[a] = `${this._element.getBoundingClientRect()[a]}px`, C(this._element), this._element.classList.add(ji), this._element.classList.remove(jn, dr);
          for (const m of this._triggerArray) {
            const L = Me.getElementFromSelector(m);
            L && !this._isShown(L) && this._addAriaAndCollapsedClass([m], !1);
          }
          this._isTransitioning = !0, this._element.style[a] = "", this._queueCallback(() => {
            this._isTransitioning = !1, this._element.classList.remove(ji), this._element.classList.add(jn), Z.trigger(this._element, hs);
          }, this._element, !0);
        }
        _isShown(a = this._element) {
          return a.classList.contains(dr);
        }
        _configAfterMerge(a) {
          return a.toggle = !!a.toggle, a.parent = g(a.parent), a;
        }
        _getDimension() {
          return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
        }
        _initializeChildren() {
          if (!this._config.parent) return;
          const a = this._getFirstLevelChildren(pr);
          for (const m of a) {
            const L = Me.getElementFromSelector(m);
            L && this._addAriaAndCollapsedClass([m], this._isShown(L));
          }
        }
        _getFirstLevelChildren(a) {
          const m = Me.find(ds, this._config.parent);
          return Me.find(a, this._config.parent).filter((L) => !m.includes(L));
        }
        _addAriaAndCollapsedClass(a, m) {
          if (a.length) for (const L of a) L.classList.toggle("collapsed", !m), L.setAttribute("aria-expanded", m);
        }
        static jQueryInterface(a) {
          const m = {};
          return typeof a == "string" && /show|hide/.test(a) && (m.toggle = !1), this.each(function() {
            const L = P.getOrCreateInstance(this, m);
            if (typeof a == "string") {
              if (L[a] === void 0) throw new TypeError(`No method named "${a}"`);
              L[a]();
            }
          });
        }
      }
      Z.on(document, hr, pr, function(E) {
        (E.target.tagName === "A" || E.delegateTarget && E.delegateTarget.tagName === "A") && E.preventDefault();
        for (const a of Me.getMultipleElementsFromSelector(this)) P.getOrCreateInstance(a, { toggle: !1 }).toggle();
      }), B(P);
      var G = "top", Q = "bottom", te = "right", W = "left", Re = "auto", Le = [G, Q, te, W], qe = "start", $e = "end", ot = "clippingParents", at = "viewport", Je = "popper", Vt = "reference", Zt = Le.reduce(function(E, a) {
        return E.concat([a + "-" + qe, a + "-" + $e]);
      }, []), rn = [].concat(Le, [Re]).reduce(function(E, a) {
        return E.concat([a, a + "-" + qe, a + "-" + $e]);
      }, []), Tn = "beforeRead", Gt = "read", et = "afterRead", hn = "beforeMain", pt = "main", vn = "afterMain", $n = "beforeWrite", Rn = "write", mr = "afterWrite", sn = [Tn, Gt, et, hn, pt, vn, $n, Rn, mr];
      function mn(E) {
        return E ? (E.nodeName || "").toLowerCase() : null;
      }
      function gn(E) {
        if (E == null) return window;
        if (E.toString() !== "[object Window]") {
          var a = E.ownerDocument;
          return a && a.defaultView || window;
        }
        return E;
      }
      function dn(E) {
        return E instanceof gn(E).Element || E instanceof Element;
      }
      function Pn(E) {
        return E instanceof gn(E).HTMLElement || E instanceof HTMLElement;
      }
      function Ur(E) {
        return typeof ShadowRoot < "u" && (E instanceof gn(E).ShadowRoot || E instanceof ShadowRoot);
      }
      const Ln = { name: "applyStyles", enabled: !0, phase: "write", fn: function(E) {
        var a = E.state;
        Object.keys(a.elements).forEach(function(m) {
          var L = a.styles[m] || {}, q = a.attributes[m] || {}, Y = a.elements[m];
          Pn(Y) && mn(Y) && (Object.assign(Y.style, L), Object.keys(q).forEach(function(ue) {
            var Se = q[ue];
            Se === !1 ? Y.removeAttribute(ue) : Y.setAttribute(ue, Se === !0 ? "" : Se);
          }));
        });
      }, effect: function(E) {
        var a = E.state, m = { popper: { position: a.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
        return Object.assign(a.elements.popper.style, m.popper), a.styles = m, a.elements.arrow && Object.assign(a.elements.arrow.style, m.arrow), function() {
          Object.keys(a.elements).forEach(function(L) {
            var q = a.elements[L], Y = a.attributes[L] || {}, ue = Object.keys(a.styles.hasOwnProperty(L) ? a.styles[L] : m[L]).reduce(function(Se, De) {
              return Se[De] = "", Se;
            }, {});
            Pn(q) && mn(q) && (Object.assign(q.style, ue), Object.keys(Y).forEach(function(Se) {
              q.removeAttribute(Se);
            }));
          });
        };
      }, requires: ["computeStyles"] };
      function ni(E) {
        return E.split("-")[0];
      }
      var ii = Math.max, ps = Math.min, gr = Math.round;
      function bi() {
        var E = navigator.userAgentData;
        return E != null && E.brands && Array.isArray(E.brands) ? E.brands.map(function(a) {
          return a.brand + "/" + a.version;
        }).join(" ") : navigator.userAgent;
      }
      function Ui() {
        return !/^((?!chrome|android).)*safari/i.test(bi());
      }
      function Oi(E, a, m) {
        a === void 0 && (a = !1), m === void 0 && (m = !1);
        var L = E.getBoundingClientRect(), q = 1, Y = 1;
        a && Pn(E) && (q = E.offsetWidth > 0 && gr(L.width) / E.offsetWidth || 1, Y = E.offsetHeight > 0 && gr(L.height) / E.offsetHeight || 1);
        var ue = (dn(E) ? gn(E) : window).visualViewport, Se = !Ui() && m, De = (L.left + (Se && ue ? ue.offsetLeft : 0)) / q, Ze = (L.top + (Se && ue ? ue.offsetTop : 0)) / Y, Qe = L.width / q, je = L.height / Y;
        return { width: Qe, height: je, top: Ze, right: De + Qe, bottom: Ze + je, left: De, x: De, y: Ze };
      }
      function eo(E) {
        var a = Oi(E), m = E.offsetWidth, L = E.offsetHeight;
        return Math.abs(a.width - m) <= 1 && (m = a.width), Math.abs(a.height - L) <= 1 && (L = a.height), { x: E.offsetLeft, y: E.offsetTop, width: m, height: L };
      }
      function _r(E, a) {
        var m = a.getRootNode && a.getRootNode();
        if (E.contains(a)) return !0;
        if (m && Ur(m)) {
          var L = a;
          do {
            if (L && E.isSameNode(L)) return !0;
            L = L.parentNode || L.host;
          } while (L);
        }
        return !1;
      }
      function di(E) {
        return gn(E).getComputedStyle(E);
      }
      function to(E) {
        return ["table", "td", "th"].indexOf(mn(E)) >= 0;
      }
      function Ei(E) {
        return ((dn(E) ? E.ownerDocument : E.document) || window.document).documentElement;
      }
      function Or(E) {
        return mn(E) === "html" ? E : E.assignedSlot || E.parentNode || (Ur(E) ? E.host : null) || Ei(E);
      }
      function Io(E) {
        return Pn(E) && di(E).position !== "fixed" ? E.offsetParent : null;
      }
      function vr(E) {
        for (var a = gn(E), m = Io(E); m && to(m) && di(m).position === "static"; ) m = Io(m);
        return m && (mn(m) === "html" || mn(m) === "body" && di(m).position === "static") ? a : m || (function(L) {
          var q = /firefox/i.test(bi());
          if (/Trident/i.test(bi()) && Pn(L) && di(L).position === "fixed") return null;
          var Y = Or(L);
          for (Ur(Y) && (Y = Y.host); Pn(Y) && ["html", "body"].indexOf(mn(Y)) < 0; ) {
            var ue = di(Y);
            if (ue.transform !== "none" || ue.perspective !== "none" || ue.contain === "paint" || ["transform", "perspective"].indexOf(ue.willChange) !== -1 || q && ue.willChange === "filter" || q && ue.filter && ue.filter !== "none") return Y;
            Y = Y.parentNode;
          }
          return null;
        })(E) || a;
      }
      function no(E) {
        return ["top", "bottom"].indexOf(E) >= 0 ? "x" : "y";
      }
      function Fr(E, a, m) {
        return ii(E, ps(a, m));
      }
      function ms(E) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, E);
      }
      function No(E, a) {
        return a.reduce(function(m, L) {
          return m[L] = E, m;
        }, {});
      }
      const Uo = { name: "arrow", enabled: !0, phase: "main", fn: function(E) {
        var a, m = E.state, L = E.name, q = E.options, Y = m.elements.arrow, ue = m.modifiersData.popperOffsets, Se = ni(m.placement), De = no(Se), Ze = [W, te].indexOf(Se) >= 0 ? "height" : "width";
        if (Y && ue) {
          var Qe = (function(an, nn) {
            return ms(typeof (an = typeof an == "function" ? an(Object.assign({}, nn.rects, { placement: nn.placement })) : an) != "number" ? an : No(an, Le));
          })(q.padding, m), je = eo(Y), Tt = De === "y" ? G : W, ft = De === "y" ? Q : te, yt = m.rects.reference[Ze] + m.rects.reference[De] - ue[De] - m.rects.popper[Ze], vt = ue[De] - m.rects.reference[De], St = vr(Y), on = St ? De === "y" ? St.clientHeight || 0 : St.clientWidth || 0 : 0, cn = yt / 2 - vt / 2, Ut = Qe[Tt], Jt = on - je[Ze] - Qe[ft], wt = on / 2 - je[Ze] / 2 + cn, qt = Fr(Ut, wt, Jt), tn = De;
          m.modifiersData[L] = ((a = {})[tn] = qt, a.centerOffset = qt - wt, a);
        }
      }, effect: function(E) {
        var a = E.state, m = E.options.element, L = m === void 0 ? "[data-popper-arrow]" : m;
        L != null && (typeof L != "string" || (L = a.elements.popper.querySelector(L))) && _r(a.elements.popper, L) && (a.elements.arrow = L);
      }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
      function xr(E) {
        return E.split("-")[1];
      }
      var Na = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Oo(E) {
        var a, m = E.popper, L = E.popperRect, q = E.placement, Y = E.variation, ue = E.offsets, Se = E.position, De = E.gpuAcceleration, Ze = E.adaptive, Qe = E.roundOffsets, je = E.isFixed, Tt = ue.x, ft = Tt === void 0 ? 0 : Tt, yt = ue.y, vt = yt === void 0 ? 0 : yt, St = typeof Qe == "function" ? Qe({ x: ft, y: vt }) : { x: ft, y: vt };
        ft = St.x, vt = St.y;
        var on = ue.hasOwnProperty("x"), cn = ue.hasOwnProperty("y"), Ut = W, Jt = G, wt = window;
        if (Ze) {
          var qt = vr(m), tn = "clientHeight", an = "clientWidth";
          qt === gn(m) && di(qt = Ei(m)).position !== "static" && Se === "absolute" && (tn = "scrollHeight", an = "scrollWidth"), (q === G || (q === W || q === te) && Y === $e) && (Jt = Q, vt -= (je && qt === wt && wt.visualViewport ? wt.visualViewport.height : qt[tn]) - L.height, vt *= De ? 1 : -1), q !== W && (q !== G && q !== Q || Y !== $e) || (Ut = te, ft -= (je && qt === wt && wt.visualViewport ? wt.visualViewport.width : qt[an]) - L.width, ft *= De ? 1 : -1);
        }
        var nn, Sn = Object.assign({ position: Se }, Ze && Na), li = Qe === !0 ? (function(wi, Gn) {
          var _i = wi.x, vi = wi.y, _n = Gn.devicePixelRatio || 1;
          return { x: gr(_i * _n) / _n || 0, y: gr(vi * _n) / _n || 0 };
        })({ x: ft, y: vt }, gn(m)) : { x: ft, y: vt };
        return ft = li.x, vt = li.y, De ? Object.assign({}, Sn, ((nn = {})[Jt] = cn ? "0" : "", nn[Ut] = on ? "0" : "", nn.transform = (wt.devicePixelRatio || 1) <= 1 ? "translate(" + ft + "px, " + vt + "px)" : "translate3d(" + ft + "px, " + vt + "px, 0)", nn)) : Object.assign({}, Sn, ((a = {})[Jt] = cn ? vt + "px" : "", a[Ut] = on ? ft + "px" : "", a.transform = "", a));
      }
      const io = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function(E) {
        var a = E.state, m = E.options, L = m.gpuAcceleration, q = L === void 0 || L, Y = m.adaptive, ue = Y === void 0 || Y, Se = m.roundOffsets, De = Se === void 0 || Se, Ze = { placement: ni(a.placement), variation: xr(a.placement), popper: a.elements.popper, popperRect: a.rects.popper, gpuAcceleration: q, isFixed: a.options.strategy === "fixed" };
        a.modifiersData.popperOffsets != null && (a.styles.popper = Object.assign({}, a.styles.popper, Oo(Object.assign({}, Ze, { offsets: a.modifiersData.popperOffsets, position: a.options.strategy, adaptive: ue, roundOffsets: De })))), a.modifiersData.arrow != null && (a.styles.arrow = Object.assign({}, a.styles.arrow, Oo(Object.assign({}, Ze, { offsets: a.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: De })))), a.attributes.popper = Object.assign({}, a.attributes.popper, { "data-popper-placement": a.placement });
      }, data: {} };
      var gs = { passive: !0 };
      const _s = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
      }, effect: function(E) {
        var a = E.state, m = E.instance, L = E.options, q = L.scroll, Y = q === void 0 || q, ue = L.resize, Se = ue === void 0 || ue, De = gn(a.elements.popper), Ze = [].concat(a.scrollParents.reference, a.scrollParents.popper);
        return Y && Ze.forEach(function(Qe) {
          Qe.addEventListener("scroll", m.update, gs);
        }), Se && De.addEventListener("resize", m.update, gs), function() {
          Y && Ze.forEach(function(Qe) {
            Qe.removeEventListener("scroll", m.update, gs);
          }), Se && De.removeEventListener("resize", m.update, gs);
        };
      }, data: {} };
      var ro = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function Br(E) {
        return E.replace(/left|right|bottom|top/g, function(a) {
          return ro[a];
        });
      }
      var so = { start: "end", end: "start" };
      function oo(E) {
        return E.replace(/start|end/g, function(a) {
          return so[a];
        });
      }
      function vs(E) {
        var a = gn(E);
        return { scrollLeft: a.pageXOffset, scrollTop: a.pageYOffset };
      }
      function zr(E) {
        return Oi(Ei(E)).left + vs(E).scrollLeft;
      }
      function ao(E) {
        var a = di(E), m = a.overflow, L = a.overflowX, q = a.overflowY;
        return /auto|scroll|overlay|hidden/.test(m + q + L);
      }
      function Fo(E) {
        return ["html", "body", "#document"].indexOf(mn(E)) >= 0 ? E.ownerDocument.body : Pn(E) && ao(E) ? E : Fo(Or(E));
      }
      function kr(E, a) {
        var m;
        a === void 0 && (a = []);
        var L = Fo(E), q = L === ((m = E.ownerDocument) == null ? void 0 : m.body), Y = gn(L), ue = q ? [Y].concat(Y.visualViewport || [], ao(L) ? L : []) : L, Se = a.concat(ue);
        return q ? Se : Se.concat(kr(Or(ue)));
      }
      function $i(E) {
        return Object.assign({}, E, { left: E.x, top: E.y, right: E.x + E.width, bottom: E.y + E.height });
      }
      function lo(E, a, m) {
        return a === at ? $i((function(L, q) {
          var Y = gn(L), ue = Ei(L), Se = Y.visualViewport, De = ue.clientWidth, Ze = ue.clientHeight, Qe = 0, je = 0;
          if (Se) {
            De = Se.width, Ze = Se.height;
            var Tt = Ui();
            (Tt || !Tt && q === "fixed") && (Qe = Se.offsetLeft, je = Se.offsetTop);
          }
          return { width: De, height: Ze, x: Qe + zr(L), y: je };
        })(E, m)) : dn(a) ? (function(L, q) {
          var Y = Oi(L, !1, q === "fixed");
          return Y.top = Y.top + L.clientTop, Y.left = Y.left + L.clientLeft, Y.bottom = Y.top + L.clientHeight, Y.right = Y.left + L.clientWidth, Y.width = L.clientWidth, Y.height = L.clientHeight, Y.x = Y.left, Y.y = Y.top, Y;
        })(a, m) : $i((function(L) {
          var q, Y = Ei(L), ue = vs(L), Se = (q = L.ownerDocument) == null ? void 0 : q.body, De = ii(Y.scrollWidth, Y.clientWidth, Se ? Se.scrollWidth : 0, Se ? Se.clientWidth : 0), Ze = ii(Y.scrollHeight, Y.clientHeight, Se ? Se.scrollHeight : 0, Se ? Se.clientHeight : 0), Qe = -ue.scrollLeft + zr(L), je = -ue.scrollTop;
          return di(Se || Y).direction === "rtl" && (Qe += ii(Y.clientWidth, Se ? Se.clientWidth : 0) - De), { width: De, height: Ze, x: Qe, y: je };
        })(Ei(E)));
      }
      function xs(E) {
        var a, m = E.reference, L = E.element, q = E.placement, Y = q ? ni(q) : null, ue = q ? xr(q) : null, Se = m.x + m.width / 2 - L.width / 2, De = m.y + m.height / 2 - L.height / 2;
        switch (Y) {
          case G:
            a = { x: Se, y: m.y - L.height };
            break;
          case Q:
            a = { x: Se, y: m.y + m.height };
            break;
          case te:
            a = { x: m.x + m.width, y: De };
            break;
          case W:
            a = { x: m.x - L.width, y: De };
            break;
          default:
            a = { x: m.x, y: m.y };
        }
        var Ze = Y ? no(Y) : null;
        if (Ze != null) {
          var Qe = Ze === "y" ? "height" : "width";
          switch (ue) {
            case qe:
              a[Ze] = a[Ze] - (m[Qe] / 2 - L[Qe] / 2);
              break;
            case $e:
              a[Ze] = a[Ze] + (m[Qe] / 2 - L[Qe] / 2);
          }
        }
        return a;
      }
      function yr(E, a) {
        a === void 0 && (a = {});
        var m = a, L = m.placement, q = L === void 0 ? E.placement : L, Y = m.strategy, ue = Y === void 0 ? E.strategy : Y, Se = m.boundary, De = Se === void 0 ? ot : Se, Ze = m.rootBoundary, Qe = Ze === void 0 ? at : Ze, je = m.elementContext, Tt = je === void 0 ? Je : je, ft = m.altBoundary, yt = ft !== void 0 && ft, vt = m.padding, St = vt === void 0 ? 0 : vt, on = ms(typeof St != "number" ? St : No(St, Le)), cn = Tt === Je ? Vt : Je, Ut = E.rects.popper, Jt = E.elements[yt ? cn : Tt], wt = (function(Gn, _i, vi, _n) {
          var zi = _i === "clippingParents" ? (function(ln) {
            var Wn = kr(Or(ln)), xi = ["absolute", "fixed"].indexOf(di(ln).position) >= 0 && Pn(ln) ? vr(ln) : ln;
            return dn(xi) ? Wn.filter(function(br) {
              return dn(br) && _r(br, xi) && mn(br) !== "body";
            }) : [];
          })(Gn) : [].concat(_i), ki = [].concat(zi, [vi]), Es = ki[0], Nn = ki.reduce(function(ln, Wn) {
            var xi = lo(Gn, Wn, _n);
            return ln.top = ii(xi.top, ln.top), ln.right = ps(xi.right, ln.right), ln.bottom = ps(xi.bottom, ln.bottom), ln.left = ii(xi.left, ln.left), ln;
          }, lo(Gn, Es, _n));
          return Nn.width = Nn.right - Nn.left, Nn.height = Nn.bottom - Nn.top, Nn.x = Nn.left, Nn.y = Nn.top, Nn;
        })(dn(Jt) ? Jt : Jt.contextElement || Ei(E.elements.popper), De, Qe, ue), qt = Oi(E.elements.reference), tn = xs({ reference: qt, element: Ut, placement: q }), an = $i(Object.assign({}, Ut, tn)), nn = Tt === Je ? an : qt, Sn = { top: wt.top - nn.top + on.top, bottom: nn.bottom - wt.bottom + on.bottom, left: wt.left - nn.left + on.left, right: nn.right - wt.right + on.right }, li = E.modifiersData.offset;
        if (Tt === Je && li) {
          var wi = li[q];
          Object.keys(Sn).forEach(function(Gn) {
            var _i = [te, Q].indexOf(Gn) >= 0 ? 1 : -1, vi = [G, Q].indexOf(Gn) >= 0 ? "y" : "x";
            Sn[Gn] += wi[vi] * _i;
          });
        }
        return Sn;
      }
      function Ua(E, a) {
        a === void 0 && (a = {});
        var m = a, L = m.placement, q = m.boundary, Y = m.rootBoundary, ue = m.padding, Se = m.flipVariations, De = m.allowedAutoPlacements, Ze = De === void 0 ? rn : De, Qe = xr(L), je = Qe ? Se ? Zt : Zt.filter(function(yt) {
          return xr(yt) === Qe;
        }) : Le, Tt = je.filter(function(yt) {
          return Ze.indexOf(yt) >= 0;
        });
        Tt.length === 0 && (Tt = je);
        var ft = Tt.reduce(function(yt, vt) {
          return yt[vt] = yr(E, { placement: vt, boundary: q, rootBoundary: Y, padding: ue })[ni(vt)], yt;
        }, {});
        return Object.keys(ft).sort(function(yt, vt) {
          return ft[yt] - ft[vt];
        });
      }
      const Bo = { name: "flip", enabled: !0, phase: "main", fn: function(E) {
        var a = E.state, m = E.options, L = E.name;
        if (!a.modifiersData[L]._skip) {
          for (var q = m.mainAxis, Y = q === void 0 || q, ue = m.altAxis, Se = ue === void 0 || ue, De = m.fallbackPlacements, Ze = m.padding, Qe = m.boundary, je = m.rootBoundary, Tt = m.altBoundary, ft = m.flipVariations, yt = ft === void 0 || ft, vt = m.allowedAutoPlacements, St = a.options.placement, on = ni(St), cn = De || (on !== St && yt ? (function(ln) {
            if (ni(ln) === Re) return [];
            var Wn = Br(ln);
            return [oo(ln), Wn, oo(Wn)];
          })(St) : [Br(St)]), Ut = [St].concat(cn).reduce(function(ln, Wn) {
            return ln.concat(ni(Wn) === Re ? Ua(a, { placement: Wn, boundary: Qe, rootBoundary: je, padding: Ze, flipVariations: yt, allowedAutoPlacements: vt }) : Wn);
          }, []), Jt = a.rects.reference, wt = a.rects.popper, qt = /* @__PURE__ */ new Map(), tn = !0, an = Ut[0], nn = 0; nn < Ut.length; nn++) {
            var Sn = Ut[nn], li = ni(Sn), wi = xr(Sn) === qe, Gn = [G, Q].indexOf(li) >= 0, _i = Gn ? "width" : "height", vi = yr(a, { placement: Sn, boundary: Qe, rootBoundary: je, altBoundary: Tt, padding: Ze }), _n = Gn ? wi ? te : W : wi ? Q : G;
            Jt[_i] > wt[_i] && (_n = Br(_n));
            var zi = Br(_n), ki = [];
            if (Y && ki.push(vi[li] <= 0), Se && ki.push(vi[_n] <= 0, vi[zi] <= 0), ki.every(function(ln) {
              return ln;
            })) {
              an = Sn, tn = !1;
              break;
            }
            qt.set(Sn, ki);
          }
          if (tn) for (var Es = function(ln) {
            var Wn = Ut.find(function(xi) {
              var br = qt.get(xi);
              if (br) return br.slice(0, ln).every(function(Xo) {
                return Xo;
              });
            });
            if (Wn) return an = Wn, "break";
          }, Nn = yt ? 3 : 1; Nn > 0 && Es(Nn) !== "break"; Nn--) ;
          a.placement !== an && (a.modifiersData[L]._skip = !0, a.placement = an, a.reset = !0);
        }
      }, requiresIfExists: ["offset"], data: { _skip: !1 } };
      function r(E, a, m) {
        return m === void 0 && (m = { x: 0, y: 0 }), { top: E.top - a.height - m.y, right: E.right - a.width + m.x, bottom: E.bottom - a.height + m.y, left: E.left - a.width - m.x };
      }
      function o(E) {
        return [G, te, Q, W].some(function(a) {
          return E[a] >= 0;
        });
      }
      const u = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(E) {
        var a = E.state, m = E.name, L = a.rects.reference, q = a.rects.popper, Y = a.modifiersData.preventOverflow, ue = yr(a, { elementContext: "reference" }), Se = yr(a, { altBoundary: !0 }), De = r(ue, L), Ze = r(Se, q, Y), Qe = o(De), je = o(Ze);
        a.modifiersData[m] = { referenceClippingOffsets: De, popperEscapeOffsets: Ze, isReferenceHidden: Qe, hasPopperEscaped: je }, a.attributes.popper = Object.assign({}, a.attributes.popper, { "data-popper-reference-hidden": Qe, "data-popper-escaped": je });
      } }, d = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function(E) {
        var a = E.state, m = E.options, L = E.name, q = m.offset, Y = q === void 0 ? [0, 0] : q, ue = rn.reduce(function(Qe, je) {
          return Qe[je] = (function(Tt, ft, yt) {
            var vt = ni(Tt), St = [W, G].indexOf(vt) >= 0 ? -1 : 1, on = typeof yt == "function" ? yt(Object.assign({}, ft, { placement: Tt })) : yt, cn = on[0], Ut = on[1];
            return cn = cn || 0, Ut = (Ut || 0) * St, [W, te].indexOf(vt) >= 0 ? { x: Ut, y: cn } : { x: cn, y: Ut };
          })(je, a.rects, Y), Qe;
        }, {}), Se = ue[a.placement], De = Se.x, Ze = Se.y;
        a.modifiersData.popperOffsets != null && (a.modifiersData.popperOffsets.x += De, a.modifiersData.popperOffsets.y += Ze), a.modifiersData[L] = ue;
      } }, y = { name: "popperOffsets", enabled: !0, phase: "read", fn: function(E) {
        var a = E.state, m = E.name;
        a.modifiersData[m] = xs({ reference: a.rects.reference, element: a.rects.popper, placement: a.placement });
      }, data: {} }, S = { name: "preventOverflow", enabled: !0, phase: "main", fn: function(E) {
        var a = E.state, m = E.options, L = E.name, q = m.mainAxis, Y = q === void 0 || q, ue = m.altAxis, Se = ue !== void 0 && ue, De = m.boundary, Ze = m.rootBoundary, Qe = m.altBoundary, je = m.padding, Tt = m.tether, ft = Tt === void 0 || Tt, yt = m.tetherOffset, vt = yt === void 0 ? 0 : yt, St = yr(a, { boundary: De, rootBoundary: Ze, padding: je, altBoundary: Qe }), on = ni(a.placement), cn = xr(a.placement), Ut = !cn, Jt = no(on), wt = Jt === "x" ? "y" : "x", qt = a.modifiersData.popperOffsets, tn = a.rects.reference, an = a.rects.popper, nn = typeof vt == "function" ? vt(Object.assign({}, a.rects, { placement: a.placement })) : vt, Sn = typeof nn == "number" ? { mainAxis: nn, altAxis: nn } : Object.assign({ mainAxis: 0, altAxis: 0 }, nn), li = a.modifiersData.offset ? a.modifiersData.offset[a.placement] : null, wi = { x: 0, y: 0 };
        if (qt) {
          if (Y) {
            var Gn, _i = Jt === "y" ? G : W, vi = Jt === "y" ? Q : te, _n = Jt === "y" ? "height" : "width", zi = qt[Jt], ki = zi + St[_i], Es = zi - St[vi], Nn = ft ? -an[_n] / 2 : 0, ln = cn === qe ? tn[_n] : an[_n], Wn = cn === qe ? -an[_n] : -tn[_n], xi = a.elements.arrow, br = ft && xi ? eo(xi) : { width: 0, height: 0 }, Xo = a.modifiersData["arrow#persistent"] ? a.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, Gc = Xo[_i], Wc = Xo[vi], qo = Fr(0, tn[_n], br[_n]), Dh = Ut ? tn[_n] / 2 - Nn - qo - Gc - Sn.mainAxis : ln - qo - Gc - Sn.mainAxis, Ih = Ut ? -tn[_n] / 2 + Nn + qo + Wc + Sn.mainAxis : Wn + qo + Wc + Sn.mainAxis, Ka = a.elements.arrow && vr(a.elements.arrow), Nh = Ka ? Jt === "y" ? Ka.clientTop || 0 : Ka.clientLeft || 0 : 0, Xc = (Gn = li?.[Jt]) != null ? Gn : 0, Uh = zi + Ih - Xc, qc = Fr(ft ? ps(ki, zi + Dh - Xc - Nh) : ki, zi, ft ? ii(Es, Uh) : Es);
            qt[Jt] = qc, wi[Jt] = qc - zi;
          }
          if (Se) {
            var jc, Oh = Jt === "x" ? G : W, Fh = Jt === "x" ? Q : te, Yr = qt[wt], jo = wt === "y" ? "height" : "width", $c = Yr + St[Oh], Yc = Yr - St[Fh], Za = [G, W].indexOf(on) !== -1, Kc = (jc = li?.[wt]) != null ? jc : 0, Zc = Za ? $c : Yr - tn[jo] - an[jo] - Kc + Sn.altAxis, Jc = Za ? Yr + tn[jo] + an[jo] - Kc - Sn.altAxis : Yc, Qc = ft && Za ? (function(Bh, zh, Ja) {
              var eu = Fr(Bh, zh, Ja);
              return eu > Ja ? Ja : eu;
            })(Zc, Yr, Jc) : Fr(ft ? Zc : $c, Yr, ft ? Jc : Yc);
            qt[wt] = Qc, wi[wt] = Qc - Yr;
          }
          a.modifiersData[L] = wi;
        }
      }, requiresIfExists: ["offset"] };
      function A(E, a, m) {
        m === void 0 && (m = !1);
        var L, q, Y = Pn(a), ue = Pn(a) && (function(je) {
          var Tt = je.getBoundingClientRect(), ft = gr(Tt.width) / je.offsetWidth || 1, yt = gr(Tt.height) / je.offsetHeight || 1;
          return ft !== 1 || yt !== 1;
        })(a), Se = Ei(a), De = Oi(E, ue, m), Ze = { scrollLeft: 0, scrollTop: 0 }, Qe = { x: 0, y: 0 };
        return (Y || !Y && !m) && ((mn(a) !== "body" || ao(Se)) && (Ze = (L = a) !== gn(L) && Pn(L) ? { scrollLeft: (q = L).scrollLeft, scrollTop: q.scrollTop } : vs(L)), Pn(a) ? ((Qe = Oi(a, !0)).x += a.clientLeft, Qe.y += a.clientTop) : Se && (Qe.x = zr(Se))), { x: De.left + Ze.scrollLeft - Qe.x, y: De.top + Ze.scrollTop - Qe.y, width: De.width, height: De.height };
      }
      function k(E) {
        var a = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Set(), L = [];
        function q(Y) {
          m.add(Y.name), [].concat(Y.requires || [], Y.requiresIfExists || []).forEach(function(ue) {
            if (!m.has(ue)) {
              var Se = a.get(ue);
              Se && q(Se);
            }
          }), L.push(Y);
        }
        return E.forEach(function(Y) {
          a.set(Y.name, Y);
        }), E.forEach(function(Y) {
          m.has(Y.name) || q(Y);
        }), L;
      }
      var F = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function X() {
        for (var E = arguments.length, a = new Array(E), m = 0; m < E; m++) a[m] = arguments[m];
        return !a.some(function(L) {
          return !(L && typeof L.getBoundingClientRect == "function");
        });
      }
      function ae(E) {
        E === void 0 && (E = {});
        var a = E, m = a.defaultModifiers, L = m === void 0 ? [] : m, q = a.defaultOptions, Y = q === void 0 ? F : q;
        return function(ue, Se, De) {
          De === void 0 && (De = Y);
          var Ze, Qe, je = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, F, Y), modifiersData: {}, elements: { reference: ue, popper: Se }, attributes: {}, styles: {} }, Tt = [], ft = !1, yt = { state: je, setOptions: function(St) {
            var on = typeof St == "function" ? St(je.options) : St;
            vt(), je.options = Object.assign({}, Y, je.options, on), je.scrollParents = { reference: dn(ue) ? kr(ue) : ue.contextElement ? kr(ue.contextElement) : [], popper: kr(Se) };
            var cn, Ut, Jt = (function(wt) {
              var qt = k(wt);
              return sn.reduce(function(tn, an) {
                return tn.concat(qt.filter(function(nn) {
                  return nn.phase === an;
                }));
              }, []);
            })((cn = [].concat(L, je.options.modifiers), Ut = cn.reduce(function(wt, qt) {
              var tn = wt[qt.name];
              return wt[qt.name] = tn ? Object.assign({}, tn, qt, { options: Object.assign({}, tn.options, qt.options), data: Object.assign({}, tn.data, qt.data) }) : qt, wt;
            }, {}), Object.keys(Ut).map(function(wt) {
              return Ut[wt];
            })));
            return je.orderedModifiers = Jt.filter(function(wt) {
              return wt.enabled;
            }), je.orderedModifiers.forEach(function(wt) {
              var qt = wt.name, tn = wt.options, an = tn === void 0 ? {} : tn, nn = wt.effect;
              if (typeof nn == "function") {
                var Sn = nn({ state: je, name: qt, instance: yt, options: an });
                Tt.push(Sn || function() {
                });
              }
            }), yt.update();
          }, forceUpdate: function() {
            if (!ft) {
              var St = je.elements, on = St.reference, cn = St.popper;
              if (X(on, cn)) {
                je.rects = { reference: A(on, vr(cn), je.options.strategy === "fixed"), popper: eo(cn) }, je.reset = !1, je.placement = je.options.placement, je.orderedModifiers.forEach(function(nn) {
                  return je.modifiersData[nn.name] = Object.assign({}, nn.data);
                });
                for (var Ut = 0; Ut < je.orderedModifiers.length; Ut++) if (je.reset !== !0) {
                  var Jt = je.orderedModifiers[Ut], wt = Jt.fn, qt = Jt.options, tn = qt === void 0 ? {} : qt, an = Jt.name;
                  typeof wt == "function" && (je = wt({ state: je, options: tn, name: an, instance: yt }) || je);
                } else je.reset = !1, Ut = -1;
              }
            }
          }, update: (Ze = function() {
            return new Promise(function(St) {
              yt.forceUpdate(), St(je);
            });
          }, function() {
            return Qe || (Qe = new Promise(function(St) {
              Promise.resolve().then(function() {
                Qe = void 0, St(Ze());
              });
            })), Qe;
          }), destroy: function() {
            vt(), ft = !0;
          } };
          if (!X(ue, Se)) return yt;
          function vt() {
            Tt.forEach(function(St) {
              return St();
            }), Tt = [];
          }
          return yt.setOptions(De).then(function(St) {
            !ft && De.onFirstUpdate && De.onFirstUpdate(St);
          }), yt;
        };
      }
      var ge = ae(), re = ae({ defaultModifiers: [_s, y, io, Ln] }), we = ae({ defaultModifiers: [_s, y, io, Ln, d, Bo, S, Uo, u] });
      const ut = Object.freeze(Object.defineProperty({ __proto__: null, afterMain: vn, afterRead: et, afterWrite: mr, applyStyles: Ln, arrow: Uo, auto: Re, basePlacements: Le, beforeMain: hn, beforeRead: Tn, beforeWrite: $n, bottom: Q, clippingParents: ot, computeStyles: io, createPopper: we, createPopperBase: ge, createPopperLite: re, detectOverflow: yr, end: $e, eventListeners: _s, flip: Bo, hide: u, left: W, main: pt, modifierPhases: sn, offset: d, placements: rn, popper: Je, popperGenerator: ae, popperOffsets: y, preventOverflow: S, read: Gt, reference: Vt, right: te, start: qe, top: G, variationPlacements: Zt, viewport: at, write: Rn }, Symbol.toStringTag, { value: "Module" })), Bt = "dropdown", mt = ".bs.dropdown", xn = ".data-api", yn = "ArrowUp", ri = "ArrowDown", pi = `hide${mt}`, Nt = `hidden${mt}`, Yi = `show${mt}`, Xt = `shown${mt}`, un = `click${mt}${xn}`, Sr = `keydown${mt}${xn}`, co = `keyup${mt}${xn}`, On = "show", si = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', mi = `${si}.${On}`, oi = ".dropdown-menu", Fi = _() ? "top-end" : "top-start", Yn = _() ? "top-start" : "top-end", uo = _() ? "bottom-end" : "bottom-start", Ti = _() ? "bottom-start" : "bottom-end", Ai = _() ? "left-start" : "right-start", Oa = _() ? "right-start" : "left-start", Fa = { autoClose: !0, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" }, Ba = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
      class Et extends Ne {
        constructor(a, m) {
          super(a, m), this._popper = null, this._parent = this._element.parentNode, this._menu = Me.next(this._element, oi)[0] || Me.prev(this._element, oi)[0] || Me.findOne(oi, this._parent), this._inNavbar = this._detectNavbar();
        }
        static get Default() {
          return Fa;
        }
        static get DefaultType() {
          return Ba;
        }
        static get NAME() {
          return Bt;
        }
        toggle() {
          return this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (M(this._element) || this._isShown()) return;
          const a = { relatedTarget: this._element };
          if (!Z.trigger(this._element, Yi, a).defaultPrevented) {
            if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (const m of [].concat(...document.body.children)) Z.on(m, "mouseover", T);
            this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(On), this._element.classList.add(On), Z.trigger(this._element, Xt, a);
          }
        }
        hide() {
          if (M(this._element) || !this._isShown()) return;
          const a = { relatedTarget: this._element };
          this._completeHide(a);
        }
        dispose() {
          this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
          this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
        }
        _completeHide(a) {
          if (!Z.trigger(this._element, pi, a).defaultPrevented) {
            if ("ontouchstart" in document.documentElement) for (const m of [].concat(...document.body.children)) Z.off(m, "mouseover", T);
            this._popper && this._popper.destroy(), this._menu.classList.remove(On), this._element.classList.remove(On), this._element.setAttribute("aria-expanded", "false"), Ae.removeDataAttribute(this._menu, "popper"), Z.trigger(this._element, Nt, a);
          }
        }
        _getConfig(a) {
          if (typeof (a = super._getConfig(a)).reference == "object" && !p(a.reference) && typeof a.reference.getBoundingClientRect != "function") throw new TypeError(`${Bt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
          return a;
        }
        _createPopper() {
          if (ut === void 0) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
          let a = this._element;
          this._config.reference === "parent" ? a = this._parent : p(this._config.reference) ? a = g(this._config.reference) : typeof this._config.reference == "object" && (a = this._config.reference);
          const m = this._getPopperConfig();
          this._popper = we(a, this._menu, m);
        }
        _isShown() {
          return this._menu.classList.contains(On);
        }
        _getPlacement() {
          const a = this._parent;
          if (a.classList.contains("dropend")) return Ai;
          if (a.classList.contains("dropstart")) return Oa;
          if (a.classList.contains("dropup-center")) return "top";
          if (a.classList.contains("dropdown-center")) return "bottom";
          const m = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
          return a.classList.contains("dropup") ? m ? Yn : Fi : m ? Ti : uo;
        }
        _detectNavbar() {
          return this._element.closest(".navbar") !== null;
        }
        _getOffset() {
          const { offset: a } = this._config;
          return typeof a == "string" ? a.split(",").map((m) => Number.parseInt(m, 10)) : typeof a == "function" ? (m) => a(m, this._element) : a;
        }
        _getPopperConfig() {
          const a = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
          return (this._inNavbar || this._config.display === "static") && (Ae.setDataAttribute(this._menu, "popper", "static"), a.modifiers = [{ name: "applyStyles", enabled: !1 }]), { ...a, ...U(this._config.popperConfig, [void 0, a]) };
        }
        _selectMenuItem({ key: a, target: m }) {
          const L = Me.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((q) => v(q));
          L.length && le(L, m, a === ri, !L.includes(m)).focus();
        }
        static jQueryInterface(a) {
          return this.each(function() {
            const m = Et.getOrCreateInstance(this, a);
            if (typeof a == "string") {
              if (m[a] === void 0) throw new TypeError(`No method named "${a}"`);
              m[a]();
            }
          });
        }
        static clearMenus(a) {
          if (a.button === 2 || a.type === "keyup" && a.key !== "Tab") return;
          const m = Me.find(mi);
          for (const L of m) {
            const q = Et.getInstance(L);
            if (!q || q._config.autoClose === !1) continue;
            const Y = a.composedPath(), ue = Y.includes(q._menu);
            if (Y.includes(q._element) || q._config.autoClose === "inside" && !ue || q._config.autoClose === "outside" && ue || q._menu.contains(a.target) && (a.type === "keyup" && a.key === "Tab" || /input|select|option|textarea|form/i.test(a.target.tagName))) continue;
            const Se = { relatedTarget: q._element };
            a.type === "click" && (Se.clickEvent = a), q._completeHide(Se);
          }
        }
        static dataApiKeydownHandler(a) {
          const m = /input|textarea/i.test(a.target.tagName), L = a.key === "Escape", q = [yn, ri].includes(a.key);
          if (!q && !L || m && !L) return;
          a.preventDefault();
          const Y = this.matches(si) ? this : Me.prev(this, si)[0] || Me.next(this, si)[0] || Me.findOne(si, a.delegateTarget.parentNode), ue = Et.getOrCreateInstance(Y);
          if (q) return a.stopPropagation(), ue.show(), void ue._selectMenuItem(a);
          ue._isShown() && (a.stopPropagation(), ue.hide(), Y.focus());
        }
      }
      Z.on(document, Sr, si, Et.dataApiKeydownHandler), Z.on(document, Sr, oi, Et.dataApiKeydownHandler), Z.on(document, un, Et.clearMenus), Z.on(document, co, Et.clearMenus), Z.on(document, un, si, function(E) {
        E.preventDefault(), Et.getOrCreateInstance(this).toggle();
      }), B(Et);
      const Hr = "backdrop", Kn = "show", Ki = `mousedown.bs.${Hr}`, za = { className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body" }, ka = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
      class fo extends Ye {
        constructor(a) {
          super(), this._config = this._getConfig(a), this._isAppended = !1, this._element = null;
        }
        static get Default() {
          return za;
        }
        static get DefaultType() {
          return ka;
        }
        static get NAME() {
          return Hr;
        }
        show(a) {
          if (!this._config.isVisible) return void U(a);
          this._append();
          const m = this._getElement();
          this._config.isAnimated && C(m), m.classList.add(Kn), this._emulateAnimation(() => {
            U(a);
          });
        }
        hide(a) {
          this._config.isVisible ? (this._getElement().classList.remove(Kn), this._emulateAnimation(() => {
            this.dispose(), U(a);
          })) : U(a);
        }
        dispose() {
          this._isAppended && (Z.off(this._element, Ki), this._element.remove(), this._isAppended = !1);
        }
        _getElement() {
          if (!this._element) {
            const a = document.createElement("div");
            a.className = this._config.className, this._config.isAnimated && a.classList.add("fade"), this._element = a;
          }
          return this._element;
        }
        _configAfterMerge(a) {
          return a.rootElement = g(a.rootElement), a;
        }
        _append() {
          if (this._isAppended) return;
          const a = this._getElement();
          this._config.rootElement.append(a), Z.on(a, Ki, () => {
            U(this._config.clickCallback);
          }), this._isAppended = !0;
        }
        _emulateAnimation(a) {
          z(a, this._getElement(), this._config.isAnimated);
        }
      }
      const gi = ".bs.focustrap", ho = `focusin${gi}`, Bi = `keydown.tab${gi}`, po = "backward", Vr = { autofocus: !0, trapElement: null }, ys = { autofocus: "boolean", trapElement: "element" };
      class Gr extends Ye {
        constructor(a) {
          super(), this._config = this._getConfig(a), this._isActive = !1, this._lastTabNavDirection = null;
        }
        static get Default() {
          return Vr;
        }
        static get DefaultType() {
          return ys;
        }
        static get NAME() {
          return "focustrap";
        }
        activate() {
          this._isActive || (this._config.autofocus && this._config.trapElement.focus(), Z.off(document, gi), Z.on(document, ho, (a) => this._handleFocusin(a)), Z.on(document, Bi, (a) => this._handleKeydown(a)), this._isActive = !0);
        }
        deactivate() {
          this._isActive && (this._isActive = !1, Z.off(document, gi));
        }
        _handleFocusin(a) {
          const { trapElement: m } = this._config;
          if (a.target === document || a.target === m || m.contains(a.target)) return;
          const L = Me.focusableChildren(m);
          L.length === 0 ? m.focus() : this._lastTabNavDirection === po ? L[L.length - 1].focus() : L[0].focus();
        }
        _handleKeydown(a) {
          a.key === "Tab" && (this._lastTabNavDirection = a.shiftKey ? po : "forward");
        }
      }
      const Ss = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", zo = ".sticky-top", Zi = "padding-right", Ms = "margin-right";
      class Wr {
        constructor() {
          this._element = document.body;
        }
        getWidth() {
          const a = document.documentElement.clientWidth;
          return Math.abs(window.innerWidth - a);
        }
        hide() {
          const a = this.getWidth();
          this._disableOverFlow(), this._setElementAttributes(this._element, Zi, (m) => m + a), this._setElementAttributes(Ss, Zi, (m) => m + a), this._setElementAttributes(zo, Ms, (m) => m - a);
        }
        reset() {
          this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Zi), this._resetElementAttributes(Ss, Zi), this._resetElementAttributes(zo, Ms);
        }
        isOverflowing() {
          return this.getWidth() > 0;
        }
        _disableOverFlow() {
          this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
        }
        _setElementAttributes(a, m, L) {
          const q = this.getWidth();
          this._applyManipulationCallback(a, (Y) => {
            if (Y !== this._element && window.innerWidth > Y.clientWidth + q) return;
            this._saveInitialAttribute(Y, m);
            const ue = window.getComputedStyle(Y).getPropertyValue(m);
            Y.style.setProperty(m, `${L(Number.parseFloat(ue))}px`);
          });
        }
        _saveInitialAttribute(a, m) {
          const L = a.style.getPropertyValue(m);
          L && Ae.setDataAttribute(a, m, L);
        }
        _resetElementAttributes(a, m) {
          this._applyManipulationCallback(a, (L) => {
            const q = Ae.getDataAttribute(L, m);
            q !== null ? (Ae.removeDataAttribute(L, m), L.style.setProperty(m, q)) : L.style.removeProperty(m);
          });
        }
        _applyManipulationCallback(a, m) {
          if (p(a)) m(a);
          else for (const L of Me.find(a, this._element)) m(L);
        }
      }
      const Zn = ".bs.modal", mo = `hide${Zn}`, ko = `hidePrevented${Zn}`, N = `hidden${Zn}`, H = `show${Zn}`, ne = `shown${Zn}`, se = `resize${Zn}`, me = `click.dismiss${Zn}`, Pe = `mousedown.dismiss${Zn}`, We = `keydown.dismiss${Zn}`, tt = `click${Zn}.data-api`, He = "modal-open", At = "show", lt = "modal-static", gt = { backdrop: !0, focus: !0, keyboard: !0 }, Dt = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
      class it extends Ne {
        constructor(a, m) {
          super(a, m), this._dialog = Me.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Wr(), this._addEventListeners();
        }
        static get Default() {
          return gt;
        }
        static get DefaultType() {
          return Dt;
        }
        static get NAME() {
          return "modal";
        }
        toggle(a) {
          return this._isShown ? this.hide() : this.show(a);
        }
        show(a) {
          this._isShown || this._isTransitioning || Z.trigger(this._element, H, { relatedTarget: a }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(He), this._adjustDialog(), this._backdrop.show(() => this._showElement(a)));
        }
        hide() {
          this._isShown && !this._isTransitioning && (Z.trigger(this._element, mo).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(At), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
        }
        dispose() {
          Z.off(window, Zn), Z.off(this._dialog, Zn), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        handleUpdate() {
          this._adjustDialog();
        }
        _initializeBackDrop() {
          return new fo({ isVisible: !!this._config.backdrop, isAnimated: this._isAnimated() });
        }
        _initializeFocusTrap() {
          return new Gr({ trapElement: this._element });
        }
        _showElement(a) {
          document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
          const m = Me.findOne(".modal-body", this._dialog);
          m && (m.scrollTop = 0), C(this._element), this._element.classList.add(At), this._queueCallback(() => {
            this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, Z.trigger(this._element, ne, { relatedTarget: a });
          }, this._dialog, this._isAnimated());
        }
        _addEventListeners() {
          Z.on(this._element, We, (a) => {
            a.key === "Escape" && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
          }), Z.on(window, se, () => {
            this._isShown && !this._isTransitioning && this._adjustDialog();
          }), Z.on(this._element, Pe, (a) => {
            Z.one(this._element, me, (m) => {
              this._element === a.target && this._element === m.target && (this._config.backdrop !== "static" ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
            });
          });
        }
        _hideModal() {
          this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
            document.body.classList.remove(He), this._resetAdjustments(), this._scrollBar.reset(), Z.trigger(this._element, N);
          });
        }
        _isAnimated() {
          return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
          if (Z.trigger(this._element, ko).defaultPrevented) return;
          const a = this._element.scrollHeight > document.documentElement.clientHeight, m = this._element.style.overflowY;
          m === "hidden" || this._element.classList.contains(lt) || (a || (this._element.style.overflowY = "hidden"), this._element.classList.add(lt), this._queueCallback(() => {
            this._element.classList.remove(lt), this._queueCallback(() => {
              this._element.style.overflowY = m;
            }, this._dialog);
          }, this._dialog), this._element.focus());
        }
        _adjustDialog() {
          const a = this._element.scrollHeight > document.documentElement.clientHeight, m = this._scrollBar.getWidth(), L = m > 0;
          if (L && !a) {
            const q = _() ? "paddingLeft" : "paddingRight";
            this._element.style[q] = `${m}px`;
          }
          if (!L && a) {
            const q = _() ? "paddingRight" : "paddingLeft";
            this._element.style[q] = `${m}px`;
          }
        }
        _resetAdjustments() {
          this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }
        static jQueryInterface(a, m) {
          return this.each(function() {
            const L = it.getOrCreateInstance(this, a);
            if (typeof a == "string") {
              if (L[a] === void 0) throw new TypeError(`No method named "${a}"`);
              L[a](m);
            }
          });
        }
      }
      Z.on(document, tt, '[data-bs-toggle="modal"]', function(E) {
        const a = Me.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && E.preventDefault(), Z.one(a, H, (L) => {
          L.defaultPrevented || Z.one(a, N, () => {
            v(this) && this.focus();
          });
        });
        const m = Me.findOne(".modal.show");
        m && it.getInstance(m).hide(), it.getOrCreateInstance(a).toggle(this);
      }), ct(it), B(it);
      const Wt = ".bs.offcanvas", Fn = ".data-api", Dn = `load${Wt}${Fn}`, Vn = "show", ai = "showing", Ji = "hiding", In = ".offcanvas.show", Ff = `show${Wt}`, Bf = `shown${Wt}`, zf = `hide${Wt}`, Rc = `hidePrevented${Wt}`, Pc = `hidden${Wt}`, kf = `resize${Wt}`, Hf = `click${Wt}${Fn}`, Vf = `keydown.dismiss${Wt}`, Gf = { backdrop: !0, keyboard: !0, scroll: !1 }, Wf = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
      class Qi extends Ne {
        constructor(a, m) {
          super(a, m), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
        }
        static get Default() {
          return Gf;
        }
        static get DefaultType() {
          return Wf;
        }
        static get NAME() {
          return "offcanvas";
        }
        toggle(a) {
          return this._isShown ? this.hide() : this.show(a);
        }
        show(a) {
          this._isShown || Z.trigger(this._element, Ff, { relatedTarget: a }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new Wr().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(ai), this._queueCallback(() => {
            this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Vn), this._element.classList.remove(ai), Z.trigger(this._element, Bf, { relatedTarget: a });
          }, this._element, !0));
        }
        hide() {
          this._isShown && (Z.trigger(this._element, zf).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Ji), this._backdrop.hide(), this._queueCallback(() => {
            this._element.classList.remove(Vn, Ji), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Wr().reset(), Z.trigger(this._element, Pc);
          }, this._element, !0)));
        }
        dispose() {
          this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        _initializeBackDrop() {
          const a = !!this._config.backdrop;
          return new fo({ className: "offcanvas-backdrop", isVisible: a, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: a ? () => {
            this._config.backdrop !== "static" ? this.hide() : Z.trigger(this._element, Rc);
          } : null });
        }
        _initializeFocusTrap() {
          return new Gr({ trapElement: this._element });
        }
        _addEventListeners() {
          Z.on(this._element, Vf, (a) => {
            a.key === "Escape" && (this._config.keyboard ? this.hide() : Z.trigger(this._element, Rc));
          });
        }
        static jQueryInterface(a) {
          return this.each(function() {
            const m = Qi.getOrCreateInstance(this, a);
            if (typeof a == "string") {
              if (m[a] === void 0 || a.startsWith("_") || a === "constructor") throw new TypeError(`No method named "${a}"`);
              m[a](this);
            }
          });
        }
      }
      Z.on(document, Hf, '[data-bs-toggle="offcanvas"]', function(E) {
        const a = Me.getElementFromSelector(this);
        if (["A", "AREA"].includes(this.tagName) && E.preventDefault(), M(this)) return;
        Z.one(a, Pc, () => {
          v(this) && this.focus();
        });
        const m = Me.findOne(In);
        m && m !== a && Qi.getInstance(m).hide(), Qi.getOrCreateInstance(a).toggle(this);
      }), Z.on(window, Dn, () => {
        for (const E of Me.find(In)) Qi.getOrCreateInstance(E).show();
      }), Z.on(window, kf, () => {
        for (const E of Me.find("[aria-modal][class*=show][class*=offcanvas-]")) getComputedStyle(E).position !== "fixed" && Qi.getOrCreateInstance(E).hide();
      }), ct(Qi), B(Qi);
      const Lc = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], dd: [], div: [], dl: [], dt: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, Xf = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), qf = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, jf = (E, a) => {
        const m = E.nodeName.toLowerCase();
        return a.includes(m) ? !Xf.has(m) || !!qf.test(E.nodeValue) : a.filter((L) => L instanceof RegExp).some((L) => L.test(m));
      }, $f = { allowList: Lc, content: {}, extraClass: "", html: !1, sanitize: !0, sanitizeFn: null, template: "<div></div>" }, Yf = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" }, Kf = { entry: "(string|element|function|null)", selector: "(string|element)" };
      class Zf extends Ye {
        constructor(a) {
          super(), this._config = this._getConfig(a);
        }
        static get Default() {
          return $f;
        }
        static get DefaultType() {
          return Yf;
        }
        static get NAME() {
          return "TemplateFactory";
        }
        getContent() {
          return Object.values(this._config.content).map((a) => this._resolvePossibleFunction(a)).filter(Boolean);
        }
        hasContent() {
          return this.getContent().length > 0;
        }
        changeContent(a) {
          return this._checkContent(a), this._config.content = { ...this._config.content, ...a }, this;
        }
        toHtml() {
          const a = document.createElement("div");
          a.innerHTML = this._maybeSanitize(this._config.template);
          for (const [q, Y] of Object.entries(this._config.content)) this._setContent(a, Y, q);
          const m = a.children[0], L = this._resolvePossibleFunction(this._config.extraClass);
          return L && m.classList.add(...L.split(" ")), m;
        }
        _typeCheckConfig(a) {
          super._typeCheckConfig(a), this._checkContent(a.content);
        }
        _checkContent(a) {
          for (const [m, L] of Object.entries(a)) super._typeCheckConfig({ selector: m, entry: L }, Kf);
        }
        _setContent(a, m, L) {
          const q = Me.findOne(L, a);
          q && ((m = this._resolvePossibleFunction(m)) ? p(m) ? this._putElementInTemplate(g(m), q) : this._config.html ? q.innerHTML = this._maybeSanitize(m) : q.textContent = m : q.remove());
        }
        _maybeSanitize(a) {
          return this._config.sanitize ? (function(m, L, q) {
            if (!m.length) return m;
            if (q && typeof q == "function") return q(m);
            const Y = new window.DOMParser().parseFromString(m, "text/html"), ue = [].concat(...Y.body.querySelectorAll("*"));
            for (const Se of ue) {
              const De = Se.nodeName.toLowerCase();
              if (!Object.keys(L).includes(De)) {
                Se.remove();
                continue;
              }
              const Ze = [].concat(...Se.attributes), Qe = [].concat(L["*"] || [], L[De] || []);
              for (const je of Ze) jf(je, Qe) || Se.removeAttribute(je.nodeName);
            }
            return Y.body.innerHTML;
          })(a, this._config.allowList, this._config.sanitizeFn) : a;
        }
        _resolvePossibleFunction(a) {
          return U(a, [void 0, this]);
        }
        _putElementInTemplate(a, m) {
          if (this._config.html) return m.innerHTML = "", void m.append(a);
          m.textContent = a.textContent;
        }
      }
      const Jf = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), Ha = "fade", Ho = "show", Qf = ".tooltip-inner", Dc = ".modal", Ic = "hide.bs.modal", go = "hover", Va = "focus", Ga = "click", eh = { AUTO: "auto", TOP: "top", RIGHT: _() ? "left" : "right", BOTTOM: "bottom", LEFT: _() ? "right" : "left" }, th = { allowList: Lc, animation: !0, boundary: "clippingParents", container: !1, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: !1, offset: [0, 6], placement: "top", popperConfig: null, sanitize: !0, sanitizeFn: null, selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" }, nh = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" };
      class Xr extends Ne {
        constructor(a, m) {
          if (ut === void 0) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
          super(a, m), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
        }
        static get Default() {
          return th;
        }
        static get DefaultType() {
          return nh;
        }
        static get NAME() {
          return "tooltip";
        }
        enable() {
          this._isEnabled = !0;
        }
        disable() {
          this._isEnabled = !1;
        }
        toggleEnabled() {
          this._isEnabled = !this._isEnabled;
        }
        toggle() {
          this._isEnabled && (this._isShown() ? this._leave() : this._enter());
        }
        dispose() {
          clearTimeout(this._timeout), Z.off(this._element.closest(Dc), Ic, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
        }
        show() {
          if (this._element.style.display === "none") throw new Error("Please use show on visible elements");
          if (!this._isWithContent() || !this._isEnabled) return;
          const a = Z.trigger(this._element, this.constructor.eventName("show")), m = (b(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
          if (a.defaultPrevented || !m) return;
          this._disposePopper();
          const L = this._getTipElement();
          this._element.setAttribute("aria-describedby", L.getAttribute("id"));
          const { container: q } = this._config;
          if (this._element.ownerDocument.documentElement.contains(this.tip) || (q.append(L), Z.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(L), L.classList.add(Ho), "ontouchstart" in document.documentElement) for (const Y of [].concat(...document.body.children)) Z.on(Y, "mouseover", T);
          this._queueCallback(() => {
            Z.trigger(this._element, this.constructor.eventName("shown")), this._isHovered === !1 && this._leave(), this._isHovered = !1;
          }, this.tip, this._isAnimated());
        }
        hide() {
          if (this._isShown() && !Z.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
            if (this._getTipElement().classList.remove(Ho), "ontouchstart" in document.documentElement) for (const a of [].concat(...document.body.children)) Z.off(a, "mouseover", T);
            this._activeTrigger[Ga] = !1, this._activeTrigger[Va] = !1, this._activeTrigger[go] = !1, this._isHovered = null, this._queueCallback(() => {
              this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), Z.trigger(this._element, this.constructor.eventName("hidden")));
            }, this.tip, this._isAnimated());
          }
        }
        update() {
          this._popper && this._popper.update();
        }
        _isWithContent() {
          return !!this._getTitle();
        }
        _getTipElement() {
          return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
        }
        _createTipElement(a) {
          const m = this._getTemplateFactory(a).toHtml();
          if (!m) return null;
          m.classList.remove(Ha, Ho), m.classList.add(`bs-${this.constructor.NAME}-auto`);
          const L = ((q) => {
            do
              q += Math.floor(1e6 * Math.random());
            while (document.getElementById(q));
            return q;
          })(this.constructor.NAME).toString();
          return m.setAttribute("id", L), this._isAnimated() && m.classList.add(Ha), m;
        }
        setContent(a) {
          this._newContent = a, this._isShown() && (this._disposePopper(), this.show());
        }
        _getTemplateFactory(a) {
          return this._templateFactory ? this._templateFactory.changeContent(a) : this._templateFactory = new Zf({ ...this._config, content: a, extraClass: this._resolvePossibleFunction(this._config.customClass) }), this._templateFactory;
        }
        _getContentForTemplate() {
          return { [Qf]: this._getTitle() };
        }
        _getTitle() {
          return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
        }
        _initializeOnDelegatedTarget(a) {
          return this.constructor.getOrCreateInstance(a.delegateTarget, this._getDelegateConfig());
        }
        _isAnimated() {
          return this._config.animation || this.tip && this.tip.classList.contains(Ha);
        }
        _isShown() {
          return this.tip && this.tip.classList.contains(Ho);
        }
        _createPopper(a) {
          const m = U(this._config.placement, [this, a, this._element]), L = eh[m.toUpperCase()];
          return we(this._element, a, this._getPopperConfig(L));
        }
        _getOffset() {
          const { offset: a } = this._config;
          return typeof a == "string" ? a.split(",").map((m) => Number.parseInt(m, 10)) : typeof a == "function" ? (m) => a(m, this._element) : a;
        }
        _resolvePossibleFunction(a) {
          return U(a, [this._element, this._element]);
        }
        _getPopperConfig(a) {
          const m = { placement: a, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: !0, phase: "beforeMain", fn: (L) => {
            this._getTipElement().setAttribute("data-popper-placement", L.state.placement);
          } }] };
          return { ...m, ...U(this._config.popperConfig, [void 0, m]) };
        }
        _setListeners() {
          const a = this._config.trigger.split(" ");
          for (const m of a) if (m === "click") Z.on(this._element, this.constructor.eventName("click"), this._config.selector, (L) => {
            const q = this._initializeOnDelegatedTarget(L);
            q._activeTrigger[Ga] = !(q._isShown() && q._activeTrigger[Ga]), q.toggle();
          });
          else if (m !== "manual") {
            const L = m === go ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), q = m === go ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
            Z.on(this._element, L, this._config.selector, (Y) => {
              const ue = this._initializeOnDelegatedTarget(Y);
              ue._activeTrigger[Y.type === "focusin" ? Va : go] = !0, ue._enter();
            }), Z.on(this._element, q, this._config.selector, (Y) => {
              const ue = this._initializeOnDelegatedTarget(Y);
              ue._activeTrigger[Y.type === "focusout" ? Va : go] = ue._element.contains(Y.relatedTarget), ue._leave();
            });
          }
          this._hideModalHandler = () => {
            this._element && this.hide();
          }, Z.on(this._element.closest(Dc), Ic, this._hideModalHandler);
        }
        _fixTitle() {
          const a = this._element.getAttribute("title");
          a && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", a), this._element.setAttribute("data-bs-original-title", a), this._element.removeAttribute("title"));
        }
        _enter() {
          this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(() => {
            this._isHovered && this.show();
          }, this._config.delay.show));
        }
        _leave() {
          this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
            this._isHovered || this.hide();
          }, this._config.delay.hide));
        }
        _setTimeout(a, m) {
          clearTimeout(this._timeout), this._timeout = setTimeout(a, m);
        }
        _isWithActiveTrigger() {
          return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(a) {
          const m = Ae.getDataAttributes(this._element);
          for (const L of Object.keys(m)) Jf.has(L) && delete m[L];
          return a = { ...m, ...typeof a == "object" && a ? a : {} }, a = this._mergeConfigObj(a), a = this._configAfterMerge(a), this._typeCheckConfig(a), a;
        }
        _configAfterMerge(a) {
          return a.container = a.container === !1 ? document.body : g(a.container), typeof a.delay == "number" && (a.delay = { show: a.delay, hide: a.delay }), typeof a.title == "number" && (a.title = a.title.toString()), typeof a.content == "number" && (a.content = a.content.toString()), a;
        }
        _getDelegateConfig() {
          const a = {};
          for (const [m, L] of Object.entries(this._config)) this.constructor.Default[m] !== L && (a[m] = L);
          return a.selector = !1, a.trigger = "manual", a;
        }
        _disposePopper() {
          this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
        }
        static jQueryInterface(a) {
          return this.each(function() {
            const m = Xr.getOrCreateInstance(this, a);
            if (typeof a == "string") {
              if (m[a] === void 0) throw new TypeError(`No method named "${a}"`);
              m[a]();
            }
          });
        }
      }
      B(Xr);
      const ih = ".popover-header", rh = ".popover-body", sh = { ...Xr.Default, content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" }, oh = { ...Xr.DefaultType, content: "(null|string|element|function)" };
      class Vo extends Xr {
        static get Default() {
          return sh;
        }
        static get DefaultType() {
          return oh;
        }
        static get NAME() {
          return "popover";
        }
        _isWithContent() {
          return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
          return { [ih]: this._getTitle(), [rh]: this._getContent() };
        }
        _getContent() {
          return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(a) {
          return this.each(function() {
            const m = Vo.getOrCreateInstance(this, a);
            if (typeof a == "string") {
              if (m[a] === void 0) throw new TypeError(`No method named "${a}"`);
              m[a]();
            }
          });
        }
      }
      B(Vo);
      const Wa = ".bs.scrollspy", ah = `activate${Wa}`, Nc = `click${Wa}`, lh = `load${Wa}.data-api`, bs = "active", Xa = "[href]", Uc = ".nav-link", ch = `${Uc}, .nav-item > ${Uc}, .list-group-item`, uh = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [0.1, 0.5, 1] }, fh = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
      class _o extends Ne {
        constructor(a, m) {
          super(a, m), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh();
        }
        static get Default() {
          return uh;
        }
        static get DefaultType() {
          return fh;
        }
        static get NAME() {
          return "scrollspy";
        }
        refresh() {
          this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
          for (const a of this._observableSections.values()) this._observer.observe(a);
        }
        dispose() {
          this._observer.disconnect(), super.dispose();
        }
        _configAfterMerge(a) {
          return a.target = g(a.target) || document.body, a.rootMargin = a.offset ? `${a.offset}px 0px -30%` : a.rootMargin, typeof a.threshold == "string" && (a.threshold = a.threshold.split(",").map((m) => Number.parseFloat(m))), a;
        }
        _maybeEnableSmoothScroll() {
          this._config.smoothScroll && (Z.off(this._config.target, Nc), Z.on(this._config.target, Nc, Xa, (a) => {
            const m = this._observableSections.get(a.target.hash);
            if (m) {
              a.preventDefault();
              const L = this._rootElement || window, q = m.offsetTop - this._element.offsetTop;
              if (L.scrollTo) return void L.scrollTo({ top: q, behavior: "smooth" });
              L.scrollTop = q;
            }
          }));
        }
        _getNewObserver() {
          const a = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
          return new IntersectionObserver((m) => this._observerCallback(m), a);
        }
        _observerCallback(a) {
          const m = (ue) => this._targetLinks.get(`#${ue.target.id}`), L = (ue) => {
            this._previousScrollData.visibleEntryTop = ue.target.offsetTop, this._process(m(ue));
          }, q = (this._rootElement || document.documentElement).scrollTop, Y = q >= this._previousScrollData.parentScrollTop;
          this._previousScrollData.parentScrollTop = q;
          for (const ue of a) {
            if (!ue.isIntersecting) {
              this._activeTarget = null, this._clearActiveClass(m(ue));
              continue;
            }
            const Se = ue.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (Y && Se) {
              if (L(ue), !q) return;
            } else Y || Se || L(ue);
          }
        }
        _initializeTargetsAndObservables() {
          this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
          const a = Me.find(Xa, this._config.target);
          for (const m of a) {
            if (!m.hash || M(m)) continue;
            const L = Me.findOne(decodeURI(m.hash), this._element);
            v(L) && (this._targetLinks.set(decodeURI(m.hash), m), this._observableSections.set(m.hash, L));
          }
        }
        _process(a) {
          this._activeTarget !== a && (this._clearActiveClass(this._config.target), this._activeTarget = a, a.classList.add(bs), this._activateParents(a), Z.trigger(this._element, ah, { relatedTarget: a }));
        }
        _activateParents(a) {
          if (a.classList.contains("dropdown-item")) Me.findOne(".dropdown-toggle", a.closest(".dropdown")).classList.add(bs);
          else for (const m of Me.parents(a, ".nav, .list-group")) for (const L of Me.prev(m, ch)) L.classList.add(bs);
        }
        _clearActiveClass(a) {
          a.classList.remove(bs);
          const m = Me.find(`${Xa}.${bs}`, a);
          for (const L of m) L.classList.remove(bs);
        }
        static jQueryInterface(a) {
          return this.each(function() {
            const m = _o.getOrCreateInstance(this, a);
            if (typeof a == "string") {
              if (m[a] === void 0 || a.startsWith("_") || a === "constructor") throw new TypeError(`No method named "${a}"`);
              m[a]();
            }
          });
        }
      }
      Z.on(window, lh, () => {
        for (const E of Me.find('[data-bs-spy="scroll"]')) _o.getOrCreateInstance(E);
      }), B(_o);
      const qr = ".bs.tab", hh = `hide${qr}`, dh = `hidden${qr}`, ph = `show${qr}`, mh = `shown${qr}`, gh = `click${qr}`, _h = `keydown${qr}`, vh = `load${qr}`, xh = "ArrowLeft", Oc = "ArrowRight", yh = "ArrowUp", Fc = "ArrowDown", qa = "Home", Bc = "End", jr = "active", zc = "fade", ja = "show", kc = ".dropdown-toggle", $a = `:not(${kc})`, Hc = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', Ya = `.nav-link${$a}, .list-group-item${$a}, [role="tab"]${$a}, ${Hc}`, Sh = `.${jr}[data-bs-toggle="tab"], .${jr}[data-bs-toggle="pill"], .${jr}[data-bs-toggle="list"]`;
      class $r extends Ne {
        constructor(a) {
          super(a), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), Z.on(this._element, _h, (m) => this._keydown(m)));
        }
        static get NAME() {
          return "tab";
        }
        show() {
          const a = this._element;
          if (this._elemIsActive(a)) return;
          const m = this._getActiveElem(), L = m ? Z.trigger(m, hh, { relatedTarget: a }) : null;
          Z.trigger(a, ph, { relatedTarget: m }).defaultPrevented || L && L.defaultPrevented || (this._deactivate(m, a), this._activate(a, m));
        }
        _activate(a, m) {
          a && (a.classList.add(jr), this._activate(Me.getElementFromSelector(a)), this._queueCallback(() => {
            a.getAttribute("role") === "tab" ? (a.removeAttribute("tabindex"), a.setAttribute("aria-selected", !0), this._toggleDropDown(a, !0), Z.trigger(a, mh, { relatedTarget: m })) : a.classList.add(ja);
          }, a, a.classList.contains(zc)));
        }
        _deactivate(a, m) {
          a && (a.classList.remove(jr), a.blur(), this._deactivate(Me.getElementFromSelector(a)), this._queueCallback(() => {
            a.getAttribute("role") === "tab" ? (a.setAttribute("aria-selected", !1), a.setAttribute("tabindex", "-1"), this._toggleDropDown(a, !1), Z.trigger(a, dh, { relatedTarget: m })) : a.classList.remove(ja);
          }, a, a.classList.contains(zc)));
        }
        _keydown(a) {
          if (![xh, Oc, yh, Fc, qa, Bc].includes(a.key)) return;
          a.stopPropagation(), a.preventDefault();
          const m = this._getChildren().filter((q) => !M(q));
          let L;
          if ([qa, Bc].includes(a.key)) L = m[a.key === qa ? 0 : m.length - 1];
          else {
            const q = [Oc, Fc].includes(a.key);
            L = le(m, a.target, q, !0);
          }
          L && (L.focus({ preventScroll: !0 }), $r.getOrCreateInstance(L).show());
        }
        _getChildren() {
          return Me.find(Ya, this._parent);
        }
        _getActiveElem() {
          return this._getChildren().find((a) => this._elemIsActive(a)) || null;
        }
        _setInitialAttributes(a, m) {
          this._setAttributeIfNotExists(a, "role", "tablist");
          for (const L of m) this._setInitialAttributesOnChild(L);
        }
        _setInitialAttributesOnChild(a) {
          a = this._getInnerElement(a);
          const m = this._elemIsActive(a), L = this._getOuterElement(a);
          a.setAttribute("aria-selected", m), L !== a && this._setAttributeIfNotExists(L, "role", "presentation"), m || a.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(a, "role", "tab"), this._setInitialAttributesOnTargetPanel(a);
        }
        _setInitialAttributesOnTargetPanel(a) {
          const m = Me.getElementFromSelector(a);
          m && (this._setAttributeIfNotExists(m, "role", "tabpanel"), a.id && this._setAttributeIfNotExists(m, "aria-labelledby", `${a.id}`));
        }
        _toggleDropDown(a, m) {
          const L = this._getOuterElement(a);
          if (!L.classList.contains("dropdown")) return;
          const q = (Y, ue) => {
            const Se = Me.findOne(Y, L);
            Se && Se.classList.toggle(ue, m);
          };
          q(kc, jr), q(".dropdown-menu", ja), L.setAttribute("aria-expanded", m);
        }
        _setAttributeIfNotExists(a, m, L) {
          a.hasAttribute(m) || a.setAttribute(m, L);
        }
        _elemIsActive(a) {
          return a.classList.contains(jr);
        }
        _getInnerElement(a) {
          return a.matches(Ya) ? a : Me.findOne(Ya, a);
        }
        _getOuterElement(a) {
          return a.closest(".nav-item, .list-group-item") || a;
        }
        static jQueryInterface(a) {
          return this.each(function() {
            const m = $r.getOrCreateInstance(this);
            if (typeof a == "string") {
              if (m[a] === void 0 || a.startsWith("_") || a === "constructor") throw new TypeError(`No method named "${a}"`);
              m[a]();
            }
          });
        }
      }
      Z.on(document, gh, Hc, function(E) {
        ["A", "AREA"].includes(this.tagName) && E.preventDefault(), M(this) || $r.getOrCreateInstance(this).show();
      }), Z.on(window, vh, () => {
        for (const E of Me.find(Sh)) $r.getOrCreateInstance(E);
      }), B($r);
      const Mr = ".bs.toast", Mh = `mouseover${Mr}`, bh = `mouseout${Mr}`, Eh = `focusin${Mr}`, Th = `focusout${Mr}`, Ah = `hide${Mr}`, wh = `hidden${Mr}`, Ch = `show${Mr}`, Rh = `shown${Mr}`, Vc = "hide", Go = "show", Wo = "showing", Ph = { animation: "boolean", autohide: "boolean", delay: "number" }, Lh = { animation: !0, autohide: !0, delay: 5e3 };
      class vo extends Ne {
        constructor(a, m) {
          super(a, m), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
        }
        static get Default() {
          return Lh;
        }
        static get DefaultType() {
          return Ph;
        }
        static get NAME() {
          return "toast";
        }
        show() {
          Z.trigger(this._element, Ch).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Vc), C(this._element), this._element.classList.add(Go, Wo), this._queueCallback(() => {
            this._element.classList.remove(Wo), Z.trigger(this._element, Rh), this._maybeScheduleHide();
          }, this._element, this._config.animation));
        }
        hide() {
          this.isShown() && (Z.trigger(this._element, Ah).defaultPrevented || (this._element.classList.add(Wo), this._queueCallback(() => {
            this._element.classList.add(Vc), this._element.classList.remove(Wo, Go), Z.trigger(this._element, wh);
          }, this._element, this._config.animation)));
        }
        dispose() {
          this._clearTimeout(), this.isShown() && this._element.classList.remove(Go), super.dispose();
        }
        isShown() {
          return this._element.classList.contains(Go);
        }
        _maybeScheduleHide() {
          this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
        }
        _onInteraction(a, m) {
          switch (a.type) {
            case "mouseover":
            case "mouseout":
              this._hasMouseInteraction = m;
              break;
            case "focusin":
            case "focusout":
              this._hasKeyboardInteraction = m;
          }
          if (m) return void this._clearTimeout();
          const L = a.relatedTarget;
          this._element === L || this._element.contains(L) || this._maybeScheduleHide();
        }
        _setListeners() {
          Z.on(this._element, Mh, (a) => this._onInteraction(a, !0)), Z.on(this._element, bh, (a) => this._onInteraction(a, !1)), Z.on(this._element, Eh, (a) => this._onInteraction(a, !0)), Z.on(this._element, Th, (a) => this._onInteraction(a, !1));
        }
        _clearTimeout() {
          clearTimeout(this._timeout), this._timeout = null;
        }
        static jQueryInterface(a) {
          return this.each(function() {
            const m = vo.getOrCreateInstance(this, a);
            if (typeof a == "string") {
              if (m[a] === void 0) throw new TypeError(`No method named "${a}"`);
              m[a](this);
            }
          });
        }
      }
      return ct(vo), B(vo), { Alert: pn, Button: bt, Carousel: hi, Collapse: P, Dropdown: Et, Modal: it, Offcanvas: Qi, Popover: Vo, ScrollSpy: _o, Tab: $r, Toast: vo, Tooltip: Xr };
    });
  })(ga)), ga.exports;
}
Vh();
var _a = { exports: {} };
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
var Gh = _a.exports, nu;
function Wh() {
  return nu || (nu = 1, (function(i) {
    (function(e, t) {
      i.exports = e.document ? t(e, !0) : function(n) {
        if (!n.document)
          throw new Error("jQuery requires a window with a document");
        return t(n);
      };
    })(typeof window < "u" ? window : Gh, function(e, t) {
      var n = [], s = Object.getPrototypeOf, l = n.slice, f = n.flat ? function(r) {
        return n.flat.call(r);
      } : function(r) {
        return n.concat.apply([], r);
      }, h = n.push, p = n.indexOf, g = {}, v = g.toString, M = g.hasOwnProperty, b = M.toString, T = b.call(Object), C = {}, D = function(o) {
        return typeof o == "function" && typeof o.nodeType != "number" && typeof o.item != "function";
      }, x = function(o) {
        return o != null && o === o.window;
      }, _ = e.document, B = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
      };
      function U(r, o, u) {
        u = u || _;
        var d, y, S = u.createElement("script");
        if (S.text = r, o)
          for (d in B)
            y = o[d] || o.getAttribute && o.getAttribute(d), y && S.setAttribute(d, y);
        u.head.appendChild(S).parentNode.removeChild(S);
      }
      function z(r) {
        return r == null ? r + "" : typeof r == "object" || typeof r == "function" ? g[v.call(r)] || "object" : typeof r;
      }
      var le = "3.7.1", $ = /HTML$/i, c = function(r, o) {
        return new c.fn.init(r, o);
      };
      c.fn = c.prototype = {
        // The current version of jQuery being used
        jquery: le,
        constructor: c,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
          return l.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(r) {
          return r == null ? l.call(this) : r < 0 ? this[r + this.length] : this[r];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(r) {
          var o = c.merge(this.constructor(), r);
          return o.prevObject = this, o;
        },
        // Execute a callback for every element in the matched set.
        each: function(r) {
          return c.each(this, r);
        },
        map: function(r) {
          return this.pushStack(c.map(this, function(o, u) {
            return r.call(o, u, o);
          }));
        },
        slice: function() {
          return this.pushStack(l.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        even: function() {
          return this.pushStack(c.grep(this, function(r, o) {
            return (o + 1) % 2;
          }));
        },
        odd: function() {
          return this.pushStack(c.grep(this, function(r, o) {
            return o % 2;
          }));
        },
        eq: function(r) {
          var o = this.length, u = +r + (r < 0 ? o : 0);
          return this.pushStack(u >= 0 && u < o ? [this[u]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: h,
        sort: n.sort,
        splice: n.splice
      }, c.extend = c.fn.extend = function() {
        var r, o, u, d, y, S, A = arguments[0] || {}, k = 1, F = arguments.length, X = !1;
        for (typeof A == "boolean" && (X = A, A = arguments[k] || {}, k++), typeof A != "object" && !D(A) && (A = {}), k === F && (A = this, k--); k < F; k++)
          if ((r = arguments[k]) != null)
            for (o in r)
              d = r[o], !(o === "__proto__" || A === d) && (X && d && (c.isPlainObject(d) || (y = Array.isArray(d))) ? (u = A[o], y && !Array.isArray(u) ? S = [] : !y && !c.isPlainObject(u) ? S = {} : S = u, y = !1, A[o] = c.extend(X, S, d)) : d !== void 0 && (A[o] = d));
        return A;
      }, c.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (le + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: !0,
        error: function(r) {
          throw new Error(r);
        },
        noop: function() {
        },
        isPlainObject: function(r) {
          var o, u;
          return !r || v.call(r) !== "[object Object]" ? !1 : (o = s(r), o ? (u = M.call(o, "constructor") && o.constructor, typeof u == "function" && b.call(u) === T) : !0);
        },
        isEmptyObject: function(r) {
          var o;
          for (o in r)
            return !1;
          return !0;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function(r, o, u) {
          U(r, { nonce: o && o.nonce }, u);
        },
        each: function(r, o) {
          var u, d = 0;
          if (oe(r))
            for (u = r.length; d < u && o.call(r[d], d, r[d]) !== !1; d++)
              ;
          else
            for (d in r)
              if (o.call(r[d], d, r[d]) === !1)
                break;
          return r;
        },
        // Retrieve the text value of an array of DOM nodes
        text: function(r) {
          var o, u = "", d = 0, y = r.nodeType;
          if (!y)
            for (; o = r[d++]; )
              u += c.text(o);
          return y === 1 || y === 11 ? r.textContent : y === 9 ? r.documentElement.textContent : y === 3 || y === 4 ? r.nodeValue : u;
        },
        // results is for internal usage only
        makeArray: function(r, o) {
          var u = o || [];
          return r != null && (oe(Object(r)) ? c.merge(
            u,
            typeof r == "string" ? [r] : r
          ) : h.call(u, r)), u;
        },
        inArray: function(r, o, u) {
          return o == null ? -1 : p.call(o, r, u);
        },
        isXMLDoc: function(r) {
          var o = r && r.namespaceURI, u = r && (r.ownerDocument || r).documentElement;
          return !$.test(o || u && u.nodeName || "HTML");
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(r, o) {
          for (var u = +o.length, d = 0, y = r.length; d < u; d++)
            r[y++] = o[d];
          return r.length = y, r;
        },
        grep: function(r, o, u) {
          for (var d, y = [], S = 0, A = r.length, k = !u; S < A; S++)
            d = !o(r[S], S), d !== k && y.push(r[S]);
          return y;
        },
        // arg is for internal usage only
        map: function(r, o, u) {
          var d, y, S = 0, A = [];
          if (oe(r))
            for (d = r.length; S < d; S++)
              y = o(r[S], S, u), y != null && A.push(y);
          else
            for (S in r)
              y = o(r[S], S, u), y != null && A.push(y);
          return f(A);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: C
      }), typeof Symbol == "function" && (c.fn[Symbol.iterator] = n[Symbol.iterator]), c.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(r, o) {
          g["[object " + o + "]"] = o.toLowerCase();
        }
      );
      function oe(r) {
        var o = !!r && "length" in r && r.length, u = z(r);
        return D(r) || x(r) ? !1 : u === "array" || o === 0 || typeof o == "number" && o > 0 && o - 1 in r;
      }
      function xe(r, o) {
        return r.nodeName && r.nodeName.toLowerCase() === o.toLowerCase();
      }
      var w = n.pop, I = n.sort, pe = n.splice, J = "[\\x20\\t\\r\\n\\f]", de = new RegExp(
        "^" + J + "+|((?:^|[^\\\\])(?:\\\\.)*)" + J + "+$",
        "g"
      );
      c.contains = function(r, o) {
        var u = o && o.parentNode;
        return r === u || !!(u && u.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (r.contains ? r.contains(u) : r.compareDocumentPosition && r.compareDocumentPosition(u) & 16));
      };
      var Ee = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function ie(r, o) {
        return o ? r === "\0" ? "�" : r.slice(0, -1) + "\\" + r.charCodeAt(r.length - 1).toString(16) + " " : "\\" + r;
      }
      c.escapeSelector = function(r) {
        return (r + "").replace(Ee, ie);
      };
      var Te = _, fe = h;
      (function() {
        var r, o, u, d, y, S = fe, A, k, F, X, ae, ge = c.expando, re = 0, we = 0, ut = Hr(), Bt = Hr(), mt = Hr(), xn = Hr(), yn = function(N, H) {
          return N === H && (y = !0), 0;
        }, ri = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", pi = "(?:\\\\[\\da-fA-F]{1,6}" + J + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", Nt = "\\[" + J + "*(" + pi + ")(?:" + J + // Operator (capture 2)
        "*([*^$|!~]?=)" + J + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + pi + "))|)" + J + "*\\]", Yi = ":(" + pi + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Nt + ")*)|.*)\\)|)", Xt = new RegExp(J + "+", "g"), un = new RegExp("^" + J + "*," + J + "*"), Sr = new RegExp("^" + J + "*([>+~]|" + J + ")" + J + "*"), co = new RegExp(J + "|>"), On = new RegExp(Yi), si = new RegExp("^" + pi + "$"), mi = {
          ID: new RegExp("^#(" + pi + ")"),
          CLASS: new RegExp("^\\.(" + pi + ")"),
          TAG: new RegExp("^(" + pi + "|[*])"),
          ATTR: new RegExp("^" + Nt),
          PSEUDO: new RegExp("^" + Yi),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + J + "*(even|odd|(([+-]|)(\\d*)n|)" + J + "*(?:([+-]|)" + J + "*(\\d+)|))" + J + "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + ri + ")$", "i"),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          needsContext: new RegExp("^" + J + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + J + "*((?:-\\d)?\\d*)" + J + "*\\)|)(?=[^-]|$)", "i")
        }, oi = /^(?:input|select|textarea|button)$/i, Fi = /^h\d$/i, Yn = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, uo = /[+~]/, Ti = new RegExp("\\\\[\\da-fA-F]{1,6}" + J + "?|\\\\([^\\r\\n\\f])", "g"), Ai = function(N, H) {
          var ne = "0x" + N.slice(1) - 65536;
          return H || (ne < 0 ? String.fromCharCode(ne + 65536) : String.fromCharCode(ne >> 10 | 55296, ne & 1023 | 56320));
        }, Oa = function() {
          Bi();
        }, Fa = Gr(
          function(N) {
            return N.disabled === !0 && xe(N, "fieldset");
          },
          { dir: "parentNode", next: "legend" }
        );
        function Ba() {
          try {
            return A.activeElement;
          } catch {
          }
        }
        try {
          S.apply(
            n = l.call(Te.childNodes),
            Te.childNodes
          ), n[Te.childNodes.length].nodeType;
        } catch {
          S = {
            apply: function(H, ne) {
              fe.apply(H, l.call(ne));
            },
            call: function(H) {
              fe.apply(H, l.call(arguments, 1));
            }
          };
        }
        function Et(N, H, ne, se) {
          var me, Pe, We, tt, He, At, lt, gt = H && H.ownerDocument, Dt = H ? H.nodeType : 9;
          if (ne = ne || [], typeof N != "string" || !N || Dt !== 1 && Dt !== 9 && Dt !== 11)
            return ne;
          if (!se && (Bi(H), H = H || A, F)) {
            if (Dt !== 11 && (He = Yn.exec(N)))
              if (me = He[1]) {
                if (Dt === 9)
                  if (We = H.getElementById(me)) {
                    if (We.id === me)
                      return S.call(ne, We), ne;
                  } else
                    return ne;
                else if (gt && (We = gt.getElementById(me)) && Et.contains(H, We) && We.id === me)
                  return S.call(ne, We), ne;
              } else {
                if (He[2])
                  return S.apply(ne, H.getElementsByTagName(N)), ne;
                if ((me = He[3]) && H.getElementsByClassName)
                  return S.apply(ne, H.getElementsByClassName(me)), ne;
              }
            if (!xn[N + " "] && (!X || !X.test(N))) {
              if (lt = N, gt = H, Dt === 1 && (co.test(N) || Sr.test(N))) {
                for (gt = uo.test(N) && ho(H.parentNode) || H, (gt != H || !C.scope) && ((tt = H.getAttribute("id")) ? tt = c.escapeSelector(tt) : H.setAttribute("id", tt = ge)), At = Vr(N), Pe = At.length; Pe--; )
                  At[Pe] = (tt ? "#" + tt : ":scope") + " " + ys(At[Pe]);
                lt = At.join(",");
              }
              try {
                return S.apply(
                  ne,
                  gt.querySelectorAll(lt)
                ), ne;
              } catch {
                xn(N, !0);
              } finally {
                tt === ge && H.removeAttribute("id");
              }
            }
          }
          return ko(N.replace(de, "$1"), H, ne, se);
        }
        function Hr() {
          var N = [];
          function H(ne, se) {
            return N.push(ne + " ") > o.cacheLength && delete H[N.shift()], H[ne + " "] = se;
          }
          return H;
        }
        function Kn(N) {
          return N[ge] = !0, N;
        }
        function Ki(N) {
          var H = A.createElement("fieldset");
          try {
            return !!N(H);
          } catch {
            return !1;
          } finally {
            H.parentNode && H.parentNode.removeChild(H), H = null;
          }
        }
        function za(N) {
          return function(H) {
            return xe(H, "input") && H.type === N;
          };
        }
        function ka(N) {
          return function(H) {
            return (xe(H, "input") || xe(H, "button")) && H.type === N;
          };
        }
        function fo(N) {
          return function(H) {
            return "form" in H ? H.parentNode && H.disabled === !1 ? "label" in H ? "label" in H.parentNode ? H.parentNode.disabled === N : H.disabled === N : H.isDisabled === N || // Where there is no isDisabled, check manually
            H.isDisabled !== !N && Fa(H) === N : H.disabled === N : "label" in H ? H.disabled === N : !1;
          };
        }
        function gi(N) {
          return Kn(function(H) {
            return H = +H, Kn(function(ne, se) {
              for (var me, Pe = N([], ne.length, H), We = Pe.length; We--; )
                ne[me = Pe[We]] && (ne[me] = !(se[me] = ne[me]));
            });
          });
        }
        function ho(N) {
          return N && typeof N.getElementsByTagName < "u" && N;
        }
        function Bi(N) {
          var H, ne = N ? N.ownerDocument || N : Te;
          return ne == A || ne.nodeType !== 9 || !ne.documentElement || (A = ne, k = A.documentElement, F = !c.isXMLDoc(A), ae = k.matches || k.webkitMatchesSelector || k.msMatchesSelector, k.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          Te != A && (H = A.defaultView) && H.top !== H && H.addEventListener("unload", Oa), C.getById = Ki(function(se) {
            return k.appendChild(se).id = c.expando, !A.getElementsByName || !A.getElementsByName(c.expando).length;
          }), C.disconnectedMatch = Ki(function(se) {
            return ae.call(se, "*");
          }), C.scope = Ki(function() {
            return A.querySelectorAll(":scope");
          }), C.cssHas = Ki(function() {
            try {
              return A.querySelector(":has(*,:jqfake)"), !1;
            } catch {
              return !0;
            }
          }), C.getById ? (o.filter.ID = function(se) {
            var me = se.replace(Ti, Ai);
            return function(Pe) {
              return Pe.getAttribute("id") === me;
            };
          }, o.find.ID = function(se, me) {
            if (typeof me.getElementById < "u" && F) {
              var Pe = me.getElementById(se);
              return Pe ? [Pe] : [];
            }
          }) : (o.filter.ID = function(se) {
            var me = se.replace(Ti, Ai);
            return function(Pe) {
              var We = typeof Pe.getAttributeNode < "u" && Pe.getAttributeNode("id");
              return We && We.value === me;
            };
          }, o.find.ID = function(se, me) {
            if (typeof me.getElementById < "u" && F) {
              var Pe, We, tt, He = me.getElementById(se);
              if (He) {
                if (Pe = He.getAttributeNode("id"), Pe && Pe.value === se)
                  return [He];
                for (tt = me.getElementsByName(se), We = 0; He = tt[We++]; )
                  if (Pe = He.getAttributeNode("id"), Pe && Pe.value === se)
                    return [He];
              }
              return [];
            }
          }), o.find.TAG = function(se, me) {
            return typeof me.getElementsByTagName < "u" ? me.getElementsByTagName(se) : me.querySelectorAll(se);
          }, o.find.CLASS = function(se, me) {
            if (typeof me.getElementsByClassName < "u" && F)
              return me.getElementsByClassName(se);
          }, X = [], Ki(function(se) {
            var me;
            k.appendChild(se).innerHTML = "<a id='" + ge + "' href='' disabled='disabled'></a><select id='" + ge + "-\r\\' disabled='disabled'><option selected=''></option></select>", se.querySelectorAll("[selected]").length || X.push("\\[" + J + "*(?:value|" + ri + ")"), se.querySelectorAll("[id~=" + ge + "-]").length || X.push("~="), se.querySelectorAll("a#" + ge + "+*").length || X.push(".#.+[+~]"), se.querySelectorAll(":checked").length || X.push(":checked"), me = A.createElement("input"), me.setAttribute("type", "hidden"), se.appendChild(me).setAttribute("name", "D"), k.appendChild(se).disabled = !0, se.querySelectorAll(":disabled").length !== 2 && X.push(":enabled", ":disabled"), me = A.createElement("input"), me.setAttribute("name", ""), se.appendChild(me), se.querySelectorAll("[name='']").length || X.push("\\[" + J + "*name" + J + "*=" + J + `*(?:''|"")`);
          }), C.cssHas || X.push(":has"), X = X.length && new RegExp(X.join("|")), yn = function(se, me) {
            if (se === me)
              return y = !0, 0;
            var Pe = !se.compareDocumentPosition - !me.compareDocumentPosition;
            return Pe || (Pe = (se.ownerDocument || se) == (me.ownerDocument || me) ? se.compareDocumentPosition(me) : (
              // Otherwise we know they are disconnected
              1
            ), Pe & 1 || !C.sortDetached && me.compareDocumentPosition(se) === Pe ? se === A || se.ownerDocument == Te && Et.contains(Te, se) ? -1 : me === A || me.ownerDocument == Te && Et.contains(Te, me) ? 1 : d ? p.call(d, se) - p.call(d, me) : 0 : Pe & 4 ? -1 : 1);
          }), A;
        }
        Et.matches = function(N, H) {
          return Et(N, null, null, H);
        }, Et.matchesSelector = function(N, H) {
          if (Bi(N), F && !xn[H + " "] && (!X || !X.test(H)))
            try {
              var ne = ae.call(N, H);
              if (ne || C.disconnectedMatch || // As well, disconnected nodes are said to be in a document
              // fragment in IE 9
              N.document && N.document.nodeType !== 11)
                return ne;
            } catch {
              xn(H, !0);
            }
          return Et(H, A, null, [N]).length > 0;
        }, Et.contains = function(N, H) {
          return (N.ownerDocument || N) != A && Bi(N), c.contains(N, H);
        }, Et.attr = function(N, H) {
          (N.ownerDocument || N) != A && Bi(N);
          var ne = o.attrHandle[H.toLowerCase()], se = ne && M.call(o.attrHandle, H.toLowerCase()) ? ne(N, H, !F) : void 0;
          return se !== void 0 ? se : N.getAttribute(H);
        }, Et.error = function(N) {
          throw new Error("Syntax error, unrecognized expression: " + N);
        }, c.uniqueSort = function(N) {
          var H, ne = [], se = 0, me = 0;
          if (y = !C.sortStable, d = !C.sortStable && l.call(N, 0), I.call(N, yn), y) {
            for (; H = N[me++]; )
              H === N[me] && (se = ne.push(me));
            for (; se--; )
              pe.call(N, ne[se], 1);
          }
          return d = null, N;
        }, c.fn.uniqueSort = function() {
          return this.pushStack(c.uniqueSort(l.apply(this)));
        }, o = c.expr = {
          // Can be adjusted by the user
          cacheLength: 50,
          createPseudo: Kn,
          match: mi,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" }
          },
          preFilter: {
            ATTR: function(N) {
              return N[1] = N[1].replace(Ti, Ai), N[3] = (N[3] || N[4] || N[5] || "").replace(Ti, Ai), N[2] === "~=" && (N[3] = " " + N[3] + " "), N.slice(0, 4);
            },
            CHILD: function(N) {
              return N[1] = N[1].toLowerCase(), N[1].slice(0, 3) === "nth" ? (N[3] || Et.error(N[0]), N[4] = +(N[4] ? N[5] + (N[6] || 1) : 2 * (N[3] === "even" || N[3] === "odd")), N[5] = +(N[7] + N[8] || N[3] === "odd")) : N[3] && Et.error(N[0]), N;
            },
            PSEUDO: function(N) {
              var H, ne = !N[6] && N[2];
              return mi.CHILD.test(N[0]) ? null : (N[3] ? N[2] = N[4] || N[5] || "" : ne && On.test(ne) && // Get excess from tokenize (recursively)
              (H = Vr(ne, !0)) && // advance to the next closing parenthesis
              (H = ne.indexOf(")", ne.length - H) - ne.length) && (N[0] = N[0].slice(0, H), N[2] = ne.slice(0, H)), N.slice(0, 3));
            }
          },
          filter: {
            TAG: function(N) {
              var H = N.replace(Ti, Ai).toLowerCase();
              return N === "*" ? function() {
                return !0;
              } : function(ne) {
                return xe(ne, H);
              };
            },
            CLASS: function(N) {
              var H = ut[N + " "];
              return H || (H = new RegExp("(^|" + J + ")" + N + "(" + J + "|$)")) && ut(N, function(ne) {
                return H.test(
                  typeof ne.className == "string" && ne.className || typeof ne.getAttribute < "u" && ne.getAttribute("class") || ""
                );
              });
            },
            ATTR: function(N, H, ne) {
              return function(se) {
                var me = Et.attr(se, N);
                return me == null ? H === "!=" : H ? (me += "", H === "=" ? me === ne : H === "!=" ? me !== ne : H === "^=" ? ne && me.indexOf(ne) === 0 : H === "*=" ? ne && me.indexOf(ne) > -1 : H === "$=" ? ne && me.slice(-ne.length) === ne : H === "~=" ? (" " + me.replace(Xt, " ") + " ").indexOf(ne) > -1 : H === "|=" ? me === ne || me.slice(0, ne.length + 1) === ne + "-" : !1) : !0;
              };
            },
            CHILD: function(N, H, ne, se, me) {
              var Pe = N.slice(0, 3) !== "nth", We = N.slice(-4) !== "last", tt = H === "of-type";
              return se === 1 && me === 0 ? (
                // Shortcut for :nth-*(n)
                function(He) {
                  return !!He.parentNode;
                }
              ) : function(He, At, lt) {
                var gt, Dt, it, Wt, Fn, Dn = Pe !== We ? "nextSibling" : "previousSibling", Vn = He.parentNode, ai = tt && He.nodeName.toLowerCase(), Ji = !lt && !tt, In = !1;
                if (Vn) {
                  if (Pe) {
                    for (; Dn; ) {
                      for (it = He; it = it[Dn]; )
                        if (tt ? xe(it, ai) : it.nodeType === 1)
                          return !1;
                      Fn = Dn = N === "only" && !Fn && "nextSibling";
                    }
                    return !0;
                  }
                  if (Fn = [We ? Vn.firstChild : Vn.lastChild], We && Ji) {
                    for (Dt = Vn[ge] || (Vn[ge] = {}), gt = Dt[N] || [], Wt = gt[0] === re && gt[1], In = Wt && gt[2], it = Wt && Vn.childNodes[Wt]; it = ++Wt && it && it[Dn] || // Fallback to seeking `elem` from the start
                    (In = Wt = 0) || Fn.pop(); )
                      if (it.nodeType === 1 && ++In && it === He) {
                        Dt[N] = [re, Wt, In];
                        break;
                      }
                  } else if (Ji && (Dt = He[ge] || (He[ge] = {}), gt = Dt[N] || [], Wt = gt[0] === re && gt[1], In = Wt), In === !1)
                    for (; (it = ++Wt && it && it[Dn] || (In = Wt = 0) || Fn.pop()) && !((tt ? xe(it, ai) : it.nodeType === 1) && ++In && (Ji && (Dt = it[ge] || (it[ge] = {}), Dt[N] = [re, In]), it === He)); )
                      ;
                  return In -= me, In === se || In % se === 0 && In / se >= 0;
                }
              };
            },
            PSEUDO: function(N, H) {
              var ne, se = o.pseudos[N] || o.setFilters[N.toLowerCase()] || Et.error("unsupported pseudo: " + N);
              return se[ge] ? se(H) : se.length > 1 ? (ne = [N, N, "", H], o.setFilters.hasOwnProperty(N.toLowerCase()) ? Kn(function(me, Pe) {
                for (var We, tt = se(me, H), He = tt.length; He--; )
                  We = p.call(me, tt[He]), me[We] = !(Pe[We] = tt[He]);
              }) : function(me) {
                return se(me, 0, ne);
              }) : se;
            }
          },
          pseudos: {
            // Potentially complex pseudos
            not: Kn(function(N) {
              var H = [], ne = [], se = mo(N.replace(de, "$1"));
              return se[ge] ? Kn(function(me, Pe, We, tt) {
                for (var He, At = se(me, null, tt, []), lt = me.length; lt--; )
                  (He = At[lt]) && (me[lt] = !(Pe[lt] = He));
              }) : function(me, Pe, We) {
                return H[0] = me, se(H, null, We, ne), H[0] = null, !ne.pop();
              };
            }),
            has: Kn(function(N) {
              return function(H) {
                return Et(N, H).length > 0;
              };
            }),
            contains: Kn(function(N) {
              return N = N.replace(Ti, Ai), function(H) {
                return (H.textContent || c.text(H)).indexOf(N) > -1;
              };
            }),
            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // https://www.w3.org/TR/selectors/#lang-pseudo
            lang: Kn(function(N) {
              return si.test(N || "") || Et.error("unsupported lang: " + N), N = N.replace(Ti, Ai).toLowerCase(), function(H) {
                var ne;
                do
                  if (ne = F ? H.lang : H.getAttribute("xml:lang") || H.getAttribute("lang"))
                    return ne = ne.toLowerCase(), ne === N || ne.indexOf(N + "-") === 0;
                while ((H = H.parentNode) && H.nodeType === 1);
                return !1;
              };
            }),
            // Miscellaneous
            target: function(N) {
              var H = e.location && e.location.hash;
              return H && H.slice(1) === N.id;
            },
            root: function(N) {
              return N === k;
            },
            focus: function(N) {
              return N === Ba() && A.hasFocus() && !!(N.type || N.href || ~N.tabIndex);
            },
            // Boolean properties
            enabled: fo(!1),
            disabled: fo(!0),
            checked: function(N) {
              return xe(N, "input") && !!N.checked || xe(N, "option") && !!N.selected;
            },
            selected: function(N) {
              return N.parentNode && N.parentNode.selectedIndex, N.selected === !0;
            },
            // Contents
            empty: function(N) {
              for (N = N.firstChild; N; N = N.nextSibling)
                if (N.nodeType < 6)
                  return !1;
              return !0;
            },
            parent: function(N) {
              return !o.pseudos.empty(N);
            },
            // Element/input types
            header: function(N) {
              return Fi.test(N.nodeName);
            },
            input: function(N) {
              return oi.test(N.nodeName);
            },
            button: function(N) {
              return xe(N, "input") && N.type === "button" || xe(N, "button");
            },
            text: function(N) {
              var H;
              return xe(N, "input") && N.type === "text" && // Support: IE <10 only
              // New HTML5 attribute values (e.g., "search") appear
              // with elem.type === "text"
              ((H = N.getAttribute("type")) == null || H.toLowerCase() === "text");
            },
            // Position-in-collection
            first: gi(function() {
              return [0];
            }),
            last: gi(function(N, H) {
              return [H - 1];
            }),
            eq: gi(function(N, H, ne) {
              return [ne < 0 ? ne + H : ne];
            }),
            even: gi(function(N, H) {
              for (var ne = 0; ne < H; ne += 2)
                N.push(ne);
              return N;
            }),
            odd: gi(function(N, H) {
              for (var ne = 1; ne < H; ne += 2)
                N.push(ne);
              return N;
            }),
            lt: gi(function(N, H, ne) {
              var se;
              for (ne < 0 ? se = ne + H : ne > H ? se = H : se = ne; --se >= 0; )
                N.push(se);
              return N;
            }),
            gt: gi(function(N, H, ne) {
              for (var se = ne < 0 ? ne + H : ne; ++se < H; )
                N.push(se);
              return N;
            })
          }
        }, o.pseudos.nth = o.pseudos.eq;
        for (r in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
          o.pseudos[r] = za(r);
        for (r in { submit: !0, reset: !0 })
          o.pseudos[r] = ka(r);
        function po() {
        }
        po.prototype = o.filters = o.pseudos, o.setFilters = new po();
        function Vr(N, H) {
          var ne, se, me, Pe, We, tt, He, At = Bt[N + " "];
          if (At)
            return H ? 0 : At.slice(0);
          for (We = N, tt = [], He = o.preFilter; We; ) {
            (!ne || (se = un.exec(We))) && (se && (We = We.slice(se[0].length) || We), tt.push(me = [])), ne = !1, (se = Sr.exec(We)) && (ne = se.shift(), me.push({
              value: ne,
              // Cast descendant combinators to space
              type: se[0].replace(de, " ")
            }), We = We.slice(ne.length));
            for (Pe in o.filter)
              (se = mi[Pe].exec(We)) && (!He[Pe] || (se = He[Pe](se))) && (ne = se.shift(), me.push({
                value: ne,
                type: Pe,
                matches: se
              }), We = We.slice(ne.length));
            if (!ne)
              break;
          }
          return H ? We.length : We ? Et.error(N) : (
            // Cache the tokens
            Bt(N, tt).slice(0)
          );
        }
        function ys(N) {
          for (var H = 0, ne = N.length, se = ""; H < ne; H++)
            se += N[H].value;
          return se;
        }
        function Gr(N, H, ne) {
          var se = H.dir, me = H.next, Pe = me || se, We = ne && Pe === "parentNode", tt = we++;
          return H.first ? (
            // Check against closest ancestor/preceding element
            function(He, At, lt) {
              for (; He = He[se]; )
                if (He.nodeType === 1 || We)
                  return N(He, At, lt);
              return !1;
            }
          ) : (
            // Check against all ancestor/preceding elements
            function(He, At, lt) {
              var gt, Dt, it = [re, tt];
              if (lt) {
                for (; He = He[se]; )
                  if ((He.nodeType === 1 || We) && N(He, At, lt))
                    return !0;
              } else
                for (; He = He[se]; )
                  if (He.nodeType === 1 || We)
                    if (Dt = He[ge] || (He[ge] = {}), me && xe(He, me))
                      He = He[se] || He;
                    else {
                      if ((gt = Dt[Pe]) && gt[0] === re && gt[1] === tt)
                        return it[2] = gt[2];
                      if (Dt[Pe] = it, it[2] = N(He, At, lt))
                        return !0;
                    }
              return !1;
            }
          );
        }
        function Ss(N) {
          return N.length > 1 ? function(H, ne, se) {
            for (var me = N.length; me--; )
              if (!N[me](H, ne, se))
                return !1;
            return !0;
          } : N[0];
        }
        function zo(N, H, ne) {
          for (var se = 0, me = H.length; se < me; se++)
            Et(N, H[se], ne);
          return ne;
        }
        function Zi(N, H, ne, se, me) {
          for (var Pe, We = [], tt = 0, He = N.length, At = H != null; tt < He; tt++)
            (Pe = N[tt]) && (!ne || ne(Pe, se, me)) && (We.push(Pe), At && H.push(tt));
          return We;
        }
        function Ms(N, H, ne, se, me, Pe) {
          return se && !se[ge] && (se = Ms(se)), me && !me[ge] && (me = Ms(me, Pe)), Kn(function(We, tt, He, At) {
            var lt, gt, Dt, it, Wt = [], Fn = [], Dn = tt.length, Vn = We || zo(
              H || "*",
              He.nodeType ? [He] : He,
              []
            ), ai = N && (We || !H) ? Zi(Vn, Wt, N, He, At) : Vn;
            if (ne ? (it = me || (We ? N : Dn || se) ? (
              // ...intermediate processing is necessary
              []
            ) : (
              // ...otherwise use results directly
              tt
            ), ne(ai, it, He, At)) : it = ai, se)
              for (lt = Zi(it, Fn), se(lt, [], He, At), gt = lt.length; gt--; )
                (Dt = lt[gt]) && (it[Fn[gt]] = !(ai[Fn[gt]] = Dt));
            if (We) {
              if (me || N) {
                if (me) {
                  for (lt = [], gt = it.length; gt--; )
                    (Dt = it[gt]) && lt.push(ai[gt] = Dt);
                  me(null, it = [], lt, At);
                }
                for (gt = it.length; gt--; )
                  (Dt = it[gt]) && (lt = me ? p.call(We, Dt) : Wt[gt]) > -1 && (We[lt] = !(tt[lt] = Dt));
              }
            } else
              it = Zi(
                it === tt ? it.splice(Dn, it.length) : it
              ), me ? me(null, tt, it, At) : S.apply(tt, it);
          });
        }
        function Wr(N) {
          for (var H, ne, se, me = N.length, Pe = o.relative[N[0].type], We = Pe || o.relative[" "], tt = Pe ? 1 : 0, He = Gr(function(gt) {
            return gt === H;
          }, We, !0), At = Gr(function(gt) {
            return p.call(H, gt) > -1;
          }, We, !0), lt = [function(gt, Dt, it) {
            var Wt = !Pe && (it || Dt != u) || ((H = Dt).nodeType ? He(gt, Dt, it) : At(gt, Dt, it));
            return H = null, Wt;
          }]; tt < me; tt++)
            if (ne = o.relative[N[tt].type])
              lt = [Gr(Ss(lt), ne)];
            else {
              if (ne = o.filter[N[tt].type].apply(null, N[tt].matches), ne[ge]) {
                for (se = ++tt; se < me && !o.relative[N[se].type]; se++)
                  ;
                return Ms(
                  tt > 1 && Ss(lt),
                  tt > 1 && ys(
                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    N.slice(0, tt - 1).concat({ value: N[tt - 2].type === " " ? "*" : "" })
                  ).replace(de, "$1"),
                  ne,
                  tt < se && Wr(N.slice(tt, se)),
                  se < me && Wr(N = N.slice(se)),
                  se < me && ys(N)
                );
              }
              lt.push(ne);
            }
          return Ss(lt);
        }
        function Zn(N, H) {
          var ne = H.length > 0, se = N.length > 0, me = function(Pe, We, tt, He, At) {
            var lt, gt, Dt, it = 0, Wt = "0", Fn = Pe && [], Dn = [], Vn = u, ai = Pe || se && o.find.TAG("*", At), Ji = re += Vn == null ? 1 : Math.random() || 0.1, In = ai.length;
            for (At && (u = We == A || We || At); Wt !== In && (lt = ai[Wt]) != null; Wt++) {
              if (se && lt) {
                for (gt = 0, !We && lt.ownerDocument != A && (Bi(lt), tt = !F); Dt = N[gt++]; )
                  if (Dt(lt, We || A, tt)) {
                    S.call(He, lt);
                    break;
                  }
                At && (re = Ji);
              }
              ne && ((lt = !Dt && lt) && it--, Pe && Fn.push(lt));
            }
            if (it += Wt, ne && Wt !== it) {
              for (gt = 0; Dt = H[gt++]; )
                Dt(Fn, Dn, We, tt);
              if (Pe) {
                if (it > 0)
                  for (; Wt--; )
                    Fn[Wt] || Dn[Wt] || (Dn[Wt] = w.call(He));
                Dn = Zi(Dn);
              }
              S.apply(He, Dn), At && !Pe && Dn.length > 0 && it + H.length > 1 && c.uniqueSort(He);
            }
            return At && (re = Ji, u = Vn), Fn;
          };
          return ne ? Kn(me) : me;
        }
        function mo(N, H) {
          var ne, se = [], me = [], Pe = mt[N + " "];
          if (!Pe) {
            for (H || (H = Vr(N)), ne = H.length; ne--; )
              Pe = Wr(H[ne]), Pe[ge] ? se.push(Pe) : me.push(Pe);
            Pe = mt(
              N,
              Zn(me, se)
            ), Pe.selector = N;
          }
          return Pe;
        }
        function ko(N, H, ne, se) {
          var me, Pe, We, tt, He, At = typeof N == "function" && N, lt = !se && Vr(N = At.selector || N);
          if (ne = ne || [], lt.length === 1) {
            if (Pe = lt[0] = lt[0].slice(0), Pe.length > 2 && (We = Pe[0]).type === "ID" && H.nodeType === 9 && F && o.relative[Pe[1].type]) {
              if (H = (o.find.ID(
                We.matches[0].replace(Ti, Ai),
                H
              ) || [])[0], H)
                At && (H = H.parentNode);
              else return ne;
              N = N.slice(Pe.shift().value.length);
            }
            for (me = mi.needsContext.test(N) ? 0 : Pe.length; me-- && (We = Pe[me], !o.relative[tt = We.type]); )
              if ((He = o.find[tt]) && (se = He(
                We.matches[0].replace(Ti, Ai),
                uo.test(Pe[0].type) && ho(H.parentNode) || H
              ))) {
                if (Pe.splice(me, 1), N = se.length && ys(Pe), !N)
                  return S.apply(ne, se), ne;
                break;
              }
          }
          return (At || mo(N, lt))(
            se,
            H,
            !F,
            ne,
            !H || uo.test(N) && ho(H.parentNode) || H
          ), ne;
        }
        C.sortStable = ge.split("").sort(yn).join("") === ge, Bi(), C.sortDetached = Ki(function(N) {
          return N.compareDocumentPosition(A.createElement("fieldset")) & 1;
        }), c.find = Et, c.expr[":"] = c.expr.pseudos, c.unique = c.uniqueSort, Et.compile = mo, Et.select = ko, Et.setDocument = Bi, Et.tokenize = Vr, Et.escape = c.escapeSelector, Et.getText = c.text, Et.isXML = c.isXMLDoc, Et.selectors = c.expr, Et.support = c.support, Et.uniqueSort = c.uniqueSort;
      })();
      var Fe = function(r, o, u) {
        for (var d = [], y = u !== void 0; (r = r[o]) && r.nodeType !== 9; )
          if (r.nodeType === 1) {
            if (y && c(r).is(u))
              break;
            d.push(r);
          }
        return d;
      }, ke = function(r, o) {
        for (var u = []; r; r = r.nextSibling)
          r.nodeType === 1 && r !== o && u.push(r);
        return u;
      }, Z = c.expr.match.needsContext, It = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function zt(r, o, u) {
        return D(o) ? c.grep(r, function(d, y) {
          return !!o.call(d, y, d) !== u;
        }) : o.nodeType ? c.grep(r, function(d) {
          return d === o !== u;
        }) : typeof o != "string" ? c.grep(r, function(d) {
          return p.call(o, d) > -1 !== u;
        }) : c.filter(o, r, u);
      }
      c.filter = function(r, o, u) {
        var d = o[0];
        return u && (r = ":not(" + r + ")"), o.length === 1 && d.nodeType === 1 ? c.find.matchesSelector(d, r) ? [d] : [] : c.find.matches(r, c.grep(o, function(y) {
          return y.nodeType === 1;
        }));
      }, c.fn.extend({
        find: function(r) {
          var o, u, d = this.length, y = this;
          if (typeof r != "string")
            return this.pushStack(c(r).filter(function() {
              for (o = 0; o < d; o++)
                if (c.contains(y[o], this))
                  return !0;
            }));
          for (u = this.pushStack([]), o = 0; o < d; o++)
            c.find(r, y[o], u);
          return d > 1 ? c.uniqueSort(u) : u;
        },
        filter: function(r) {
          return this.pushStack(zt(this, r || [], !1));
        },
        not: function(r) {
          return this.pushStack(zt(this, r || [], !0));
        },
        is: function(r) {
          return !!zt(
            this,
            // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof r == "string" && Z.test(r) ? c(r) : r || [],
            !1
          ).length;
        }
      });
      var _e, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Ye = c.fn.init = function(r, o, u) {
        var d, y;
        if (!r)
          return this;
        if (u = u || _e, typeof r == "string")
          if (r[0] === "<" && r[r.length - 1] === ">" && r.length >= 3 ? d = [null, r, null] : d = Ae.exec(r), d && (d[1] || !o))
            if (d[1]) {
              if (o = o instanceof c ? o[0] : o, c.merge(this, c.parseHTML(
                d[1],
                o && o.nodeType ? o.ownerDocument || o : _,
                !0
              )), It.test(d[1]) && c.isPlainObject(o))
                for (d in o)
                  D(this[d]) ? this[d](o[d]) : this.attr(d, o[d]);
              return this;
            } else
              return y = _.getElementById(d[2]), y && (this[0] = y, this.length = 1), this;
          else return !o || o.jquery ? (o || u).find(r) : this.constructor(o).find(r);
        else {
          if (r.nodeType)
            return this[0] = r, this.length = 1, this;
          if (D(r))
            return u.ready !== void 0 ? u.ready(r) : (
              // Execute immediately if ready is not present
              r(c)
            );
        }
        return c.makeArray(r, this);
      };
      Ye.prototype = c.fn, _e = c(_);
      var Ne = /^(?:parents|prev(?:Until|All))/, ht = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
      c.fn.extend({
        has: function(r) {
          var o = c(r, this), u = o.length;
          return this.filter(function() {
            for (var d = 0; d < u; d++)
              if (c.contains(this, o[d]))
                return !0;
          });
        },
        closest: function(r, o) {
          var u, d = 0, y = this.length, S = [], A = typeof r != "string" && c(r);
          if (!Z.test(r)) {
            for (; d < y; d++)
              for (u = this[d]; u && u !== o; u = u.parentNode)
                if (u.nodeType < 11 && (A ? A.index(u) > -1 : (
                  // Don't pass non-elements to jQuery#find
                  u.nodeType === 1 && c.find.matchesSelector(u, r)
                ))) {
                  S.push(u);
                  break;
                }
          }
          return this.pushStack(S.length > 1 ? c.uniqueSort(S) : S);
        },
        // Determine the position of an element within the set
        index: function(r) {
          return r ? typeof r == "string" ? p.call(c(r), this[0]) : p.call(
            this,
            // If it receives a jQuery object, the first element is used
            r.jquery ? r[0] : r
          ) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(r, o) {
          return this.pushStack(
            c.uniqueSort(
              c.merge(this.get(), c(r, o))
            )
          );
        },
        addBack: function(r) {
          return this.add(
            r == null ? this.prevObject : this.prevObject.filter(r)
          );
        }
      });
      function Me(r, o) {
        for (; (r = r[o]) && r.nodeType !== 1; )
          ;
        return r;
      }
      c.each({
        parent: function(r) {
          var o = r.parentNode;
          return o && o.nodeType !== 11 ? o : null;
        },
        parents: function(r) {
          return Fe(r, "parentNode");
        },
        parentsUntil: function(r, o, u) {
          return Fe(r, "parentNode", u);
        },
        next: function(r) {
          return Me(r, "nextSibling");
        },
        prev: function(r) {
          return Me(r, "previousSibling");
        },
        nextAll: function(r) {
          return Fe(r, "nextSibling");
        },
        prevAll: function(r) {
          return Fe(r, "previousSibling");
        },
        nextUntil: function(r, o, u) {
          return Fe(r, "nextSibling", u);
        },
        prevUntil: function(r, o, u) {
          return Fe(r, "previousSibling", u);
        },
        siblings: function(r) {
          return ke((r.parentNode || {}).firstChild, r);
        },
        children: function(r) {
          return ke(r.firstChild);
        },
        contents: function(r) {
          return r.contentDocument != null && // Support: IE 11+
          // <object> elements with no `data` attribute has an object
          // `contentDocument` with a `null` prototype.
          s(r.contentDocument) ? r.contentDocument : (xe(r, "template") && (r = r.content || r), c.merge([], r.childNodes));
        }
      }, function(r, o) {
        c.fn[r] = function(u, d) {
          var y = c.map(this, o, u);
          return r.slice(-5) !== "Until" && (d = u), d && typeof d == "string" && (y = c.filter(d, y)), this.length > 1 && (ht[r] || c.uniqueSort(y), Ne.test(r) && y.reverse()), this.pushStack(y);
        };
      });
      var ct = /[^\x20\t\r\n\f]+/g;
      function jt(r) {
        var o = {};
        return c.each(r.match(ct) || [], function(u, d) {
          o[d] = !0;
        }), o;
      }
      c.Callbacks = function(r) {
        r = typeof r == "string" ? jt(r) : c.extend({}, r);
        var o, u, d, y, S = [], A = [], k = -1, F = function() {
          for (y = y || r.once, d = o = !0; A.length; k = -1)
            for (u = A.shift(); ++k < S.length; )
              S[k].apply(u[0], u[1]) === !1 && r.stopOnFalse && (k = S.length, u = !1);
          r.memory || (u = !1), o = !1, y && (u ? S = [] : S = "");
        }, X = {
          // Add a callback or a collection of callbacks to the list
          add: function() {
            return S && (u && !o && (k = S.length - 1, A.push(u)), (function ae(ge) {
              c.each(ge, function(re, we) {
                D(we) ? (!r.unique || !X.has(we)) && S.push(we) : we && we.length && z(we) !== "string" && ae(we);
              });
            })(arguments), u && !o && F()), this;
          },
          // Remove a callback from the list
          remove: function() {
            return c.each(arguments, function(ae, ge) {
              for (var re; (re = c.inArray(ge, S, re)) > -1; )
                S.splice(re, 1), re <= k && k--;
            }), this;
          },
          // Check if a given callback is in the list.
          // If no argument is given, return whether or not list has callbacks attached.
          has: function(ae) {
            return ae ? c.inArray(ae, S) > -1 : S.length > 0;
          },
          // Remove all callbacks from the list
          empty: function() {
            return S && (S = []), this;
          },
          // Disable .fire and .add
          // Abort any current/pending executions
          // Clear all callbacks and values
          disable: function() {
            return y = A = [], S = u = "", this;
          },
          disabled: function() {
            return !S;
          },
          // Disable .fire
          // Also disable .add unless we have memory (since it would have no effect)
          // Abort any pending executions
          lock: function() {
            return y = A = [], !u && !o && (S = u = ""), this;
          },
          locked: function() {
            return !!y;
          },
          // Call all callbacks with the given context and arguments
          fireWith: function(ae, ge) {
            return y || (ge = ge || [], ge = [ae, ge.slice ? ge.slice() : ge], A.push(ge), o || F()), this;
          },
          // Call all the callbacks with the given arguments
          fire: function() {
            return X.fireWith(this, arguments), this;
          },
          // To know if the callbacks have already been called at least once
          fired: function() {
            return !!d;
          }
        };
        return X;
      };
      function Mt(r) {
        return r;
      }
      function V(r) {
        throw r;
      }
      function pn(r, o, u, d) {
        var y;
        try {
          r && D(y = r.promise) ? y.call(r).done(o).fail(u) : r && D(y = r.then) ? y.call(r, o, u) : o.apply(void 0, [r].slice(d));
        } catch (S) {
          u.apply(void 0, [S]);
        }
      }
      c.extend({
        Deferred: function(r) {
          var o = [
            // action, add listener, callbacks,
            // ... .then handlers, argument index, [final state]
            [
              "notify",
              "progress",
              c.Callbacks("memory"),
              c.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              c.Callbacks("once memory"),
              c.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              c.Callbacks("once memory"),
              c.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ], u = "pending", d = {
            state: function() {
              return u;
            },
            always: function() {
              return y.done(arguments).fail(arguments), this;
            },
            catch: function(S) {
              return d.then(null, S);
            },
            // Keep pipe for back-compat
            pipe: function() {
              var S = arguments;
              return c.Deferred(function(A) {
                c.each(o, function(k, F) {
                  var X = D(S[F[4]]) && S[F[4]];
                  y[F[1]](function() {
                    var ae = X && X.apply(this, arguments);
                    ae && D(ae.promise) ? ae.promise().progress(A.notify).done(A.resolve).fail(A.reject) : A[F[0] + "With"](
                      this,
                      X ? [ae] : arguments
                    );
                  });
                }), S = null;
              }).promise();
            },
            then: function(S, A, k) {
              var F = 0;
              function X(ae, ge, re, we) {
                return function() {
                  var ut = this, Bt = arguments, mt = function() {
                    var yn, ri;
                    if (!(ae < F)) {
                      if (yn = re.apply(ut, Bt), yn === ge.promise())
                        throw new TypeError("Thenable self-resolution");
                      ri = yn && // Support: Promises/A+ section 2.3.4
                      // https://promisesaplus.com/#point-64
                      // Only check objects and functions for thenability
                      (typeof yn == "object" || typeof yn == "function") && yn.then, D(ri) ? we ? ri.call(
                        yn,
                        X(F, ge, Mt, we),
                        X(F, ge, V, we)
                      ) : (F++, ri.call(
                        yn,
                        X(F, ge, Mt, we),
                        X(F, ge, V, we),
                        X(
                          F,
                          ge,
                          Mt,
                          ge.notifyWith
                        )
                      )) : (re !== Mt && (ut = void 0, Bt = [yn]), (we || ge.resolveWith)(ut, Bt));
                    }
                  }, xn = we ? mt : function() {
                    try {
                      mt();
                    } catch (yn) {
                      c.Deferred.exceptionHook && c.Deferred.exceptionHook(
                        yn,
                        xn.error
                      ), ae + 1 >= F && (re !== V && (ut = void 0, Bt = [yn]), ge.rejectWith(ut, Bt));
                    }
                  };
                  ae ? xn() : (c.Deferred.getErrorHook ? xn.error = c.Deferred.getErrorHook() : c.Deferred.getStackHook && (xn.error = c.Deferred.getStackHook()), e.setTimeout(xn));
                };
              }
              return c.Deferred(function(ae) {
                o[0][3].add(
                  X(
                    0,
                    ae,
                    D(k) ? k : Mt,
                    ae.notifyWith
                  )
                ), o[1][3].add(
                  X(
                    0,
                    ae,
                    D(S) ? S : Mt
                  )
                ), o[2][3].add(
                  X(
                    0,
                    ae,
                    D(A) ? A : V
                  )
                );
              }).promise();
            },
            // Get a promise for this deferred
            // If obj is provided, the promise aspect is added to the object
            promise: function(S) {
              return S != null ? c.extend(S, d) : d;
            }
          }, y = {};
          return c.each(o, function(S, A) {
            var k = A[2], F = A[5];
            d[A[1]] = k.add, F && k.add(
              function() {
                u = F;
              },
              // rejected_callbacks.disable
              // fulfilled_callbacks.disable
              o[3 - S][2].disable,
              // rejected_handlers.disable
              // fulfilled_handlers.disable
              o[3 - S][3].disable,
              // progress_callbacks.lock
              o[0][2].lock,
              // progress_handlers.lock
              o[0][3].lock
            ), k.add(A[3].fire), y[A[0]] = function() {
              return y[A[0] + "With"](this === y ? void 0 : this, arguments), this;
            }, y[A[0] + "With"] = k.fireWith;
          }), d.promise(y), r && r.call(y, y), y;
        },
        // Deferred helper
        when: function(r) {
          var o = arguments.length, u = o, d = Array(u), y = l.call(arguments), S = c.Deferred(), A = function(k) {
            return function(F) {
              d[k] = this, y[k] = arguments.length > 1 ? l.call(arguments) : F, --o || S.resolveWith(d, y);
            };
          };
          if (o <= 1 && (pn(
            r,
            S.done(A(u)).resolve,
            S.reject,
            !o
          ), S.state() === "pending" || D(y[u] && y[u].then)))
            return S.then();
          for (; u--; )
            pn(y[u], A(u), S.reject);
          return S.promise();
        }
      });
      var Pt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      c.Deferred.exceptionHook = function(r, o) {
        e.console && e.console.warn && r && Pt.test(r.name) && e.console.warn(
          "jQuery.Deferred exception: " + r.message,
          r.stack,
          o
        );
      }, c.readyException = function(r) {
        e.setTimeout(function() {
          throw r;
        });
      };
      var bt = c.Deferred();
      c.fn.ready = function(r) {
        return bt.then(r).catch(function(o) {
          c.readyException(o);
        }), this;
      }, c.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: !1,
        // A counter to track how many items to wait for before
        // the ready event fires. See trac-6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(r) {
          (r === !0 ? --c.readyWait : c.isReady) || (c.isReady = !0, !(r !== !0 && --c.readyWait > 0) && bt.resolveWith(_, [c]));
        }
      }), c.ready.then = bt.then;
      function st() {
        _.removeEventListener("DOMContentLoaded", st), e.removeEventListener("load", st), c.ready();
      }
      _.readyState === "complete" || _.readyState !== "loading" && !_.documentElement.doScroll ? e.setTimeout(c.ready) : (_.addEventListener("DOMContentLoaded", st), e.addEventListener("load", st));
      var Ot = function(r, o, u, d, y, S, A) {
        var k = 0, F = r.length, X = u == null;
        if (z(u) === "object") {
          y = !0;
          for (k in u)
            Ot(r, o, k, u[k], !0, S, A);
        } else if (d !== void 0 && (y = !0, D(d) || (A = !0), X && (A ? (o.call(r, d), o = null) : (X = o, o = function(ae, ge, re) {
          return X.call(c(ae), re);
        })), o))
          for (; k < F; k++)
            o(
              r[k],
              u,
              A ? d : d.call(r[k], k, o(r[k], u))
            );
        return y ? r : X ? o.call(r) : F ? o(r[0], u) : S;
      }, dt = /^-ms-/, O = /-([a-z])/g;
      function R(r, o) {
        return o.toUpperCase();
      }
      function ee(r) {
        return r.replace(dt, "ms-").replace(O, R);
      }
      var ve = function(r) {
        return r.nodeType === 1 || r.nodeType === 9 || !+r.nodeType;
      };
      function be() {
        this.expando = c.expando + be.uid++;
      }
      be.uid = 1, be.prototype = {
        cache: function(r) {
          var o = r[this.expando];
          return o || (o = {}, ve(r) && (r.nodeType ? r[this.expando] = o : Object.defineProperty(r, this.expando, {
            value: o,
            configurable: !0
          }))), o;
        },
        set: function(r, o, u) {
          var d, y = this.cache(r);
          if (typeof o == "string")
            y[ee(o)] = u;
          else
            for (d in o)
              y[ee(d)] = o[d];
          return y;
        },
        get: function(r, o) {
          return o === void 0 ? this.cache(r) : (
            // Always use camelCase key (gh-2257)
            r[this.expando] && r[this.expando][ee(o)]
          );
        },
        access: function(r, o, u) {
          return o === void 0 || o && typeof o == "string" && u === void 0 ? this.get(r, o) : (this.set(r, o, u), u !== void 0 ? u : o);
        },
        remove: function(r, o) {
          var u, d = r[this.expando];
          if (d !== void 0) {
            if (o !== void 0)
              for (Array.isArray(o) ? o = o.map(ee) : (o = ee(o), o = o in d ? [o] : o.match(ct) || []), u = o.length; u--; )
                delete d[o[u]];
            (o === void 0 || c.isEmptyObject(d)) && (r.nodeType ? r[this.expando] = void 0 : delete r[this.expando]);
          }
        },
        hasData: function(r) {
          var o = r[this.expando];
          return o !== void 0 && !c.isEmptyObject(o);
        }
      };
      var K = new be(), Ie = new be(), Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ke = /[A-Z]/g;
      function kt(r) {
        return r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : r === +r + "" ? +r : Oe.test(r) ? JSON.parse(r) : r;
      }
      function Ce(r, o, u) {
        var d;
        if (u === void 0 && r.nodeType === 1)
          if (d = "data-" + o.replace(Ke, "-$&").toLowerCase(), u = r.getAttribute(d), typeof u == "string") {
            try {
              u = kt(u);
            } catch {
            }
            Ie.set(r, o, u);
          } else
            u = void 0;
        return u;
      }
      c.extend({
        hasData: function(r) {
          return Ie.hasData(r) || K.hasData(r);
        },
        data: function(r, o, u) {
          return Ie.access(r, o, u);
        },
        removeData: function(r, o) {
          Ie.remove(r, o);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(r, o, u) {
          return K.access(r, o, u);
        },
        _removeData: function(r, o) {
          K.remove(r, o);
        }
      }), c.fn.extend({
        data: function(r, o) {
          var u, d, y, S = this[0], A = S && S.attributes;
          if (r === void 0) {
            if (this.length && (y = Ie.get(S), S.nodeType === 1 && !K.get(S, "hasDataAttrs"))) {
              for (u = A.length; u--; )
                A[u] && (d = A[u].name, d.indexOf("data-") === 0 && (d = ee(d.slice(5)), Ce(S, d, y[d])));
              K.set(S, "hasDataAttrs", !0);
            }
            return y;
          }
          return typeof r == "object" ? this.each(function() {
            Ie.set(this, r);
          }) : Ot(this, function(k) {
            var F;
            if (S && k === void 0)
              return F = Ie.get(S, r), F !== void 0 || (F = Ce(S, r), F !== void 0) ? F : void 0;
            this.each(function() {
              Ie.set(this, r, k);
            });
          }, null, o, arguments.length > 1, null, !0);
        },
        removeData: function(r) {
          return this.each(function() {
            Ie.remove(this, r);
          });
        }
      }), c.extend({
        queue: function(r, o, u) {
          var d;
          if (r)
            return o = (o || "fx") + "queue", d = K.get(r, o), u && (!d || Array.isArray(u) ? d = K.access(r, o, c.makeArray(u)) : d.push(u)), d || [];
        },
        dequeue: function(r, o) {
          o = o || "fx";
          var u = c.queue(r, o), d = u.length, y = u.shift(), S = c._queueHooks(r, o), A = function() {
            c.dequeue(r, o);
          };
          y === "inprogress" && (y = u.shift(), d--), y && (o === "fx" && u.unshift("inprogress"), delete S.stop, y.call(r, A, S)), !d && S && S.empty.fire();
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(r, o) {
          var u = o + "queueHooks";
          return K.get(r, u) || K.access(r, u, {
            empty: c.Callbacks("once memory").add(function() {
              K.remove(r, [o + "queue", u]);
            })
          });
        }
      }), c.fn.extend({
        queue: function(r, o) {
          var u = 2;
          return typeof r != "string" && (o = r, r = "fx", u--), arguments.length < u ? c.queue(this[0], r) : o === void 0 ? this : this.each(function() {
            var d = c.queue(this, r, o);
            c._queueHooks(this, r), r === "fx" && d[0] !== "inprogress" && c.dequeue(this, r);
          });
        },
        dequeue: function(r) {
          return this.each(function() {
            c.dequeue(this, r);
          });
        },
        clearQueue: function(r) {
          return this.queue(r || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(r, o) {
          var u, d = 1, y = c.Deferred(), S = this, A = this.length, k = function() {
            --d || y.resolveWith(S, [S]);
          };
          for (typeof r != "string" && (o = r, r = void 0), r = r || "fx"; A--; )
            u = K.get(S[A], r + "queueHooks"), u && u.empty && (d++, u.empty.add(k));
          return k(), y.promise(o);
        }
      });
      var Ve = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, rt = new RegExp("^(?:([+-])=|)(" + Ve + ")([a-z%]*)$", "i"), nt = ["Top", "Right", "Bottom", "Left"], Ge = _.documentElement, xt = function(r) {
        return c.contains(r.ownerDocument, r);
      }, _t = { composed: !0 };
      Ge.getRootNode && (xt = function(r) {
        return c.contains(r.ownerDocument, r) || r.getRootNode(_t) === r.ownerDocument;
      });
      var $t = function(r, o) {
        return r = o || r, r.style.display === "none" || r.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        xt(r) && c.css(r, "display") === "none";
      };
      function j(r, o, u, d) {
        var y, S, A = 20, k = d ? function() {
          return d.cur();
        } : function() {
          return c.css(r, o, "");
        }, F = k(), X = u && u[3] || (c.cssNumber[o] ? "" : "px"), ae = r.nodeType && (c.cssNumber[o] || X !== "px" && +F) && rt.exec(c.css(r, o));
        if (ae && ae[3] !== X) {
          for (F = F / 2, X = X || ae[3], ae = +F || 1; A--; )
            c.style(r, o, ae + X), (1 - S) * (1 - (S = k() / F || 0.5)) <= 0 && (A = 0), ae = ae / S;
          ae = ae * 2, c.style(r, o, ae + X), u = u || [];
        }
        return u && (ae = +ae || +F || 0, y = u[1] ? ae + (u[1] + 1) * u[2] : +u[2], d && (d.unit = X, d.start = ae, d.end = y)), y;
      }
      var Xe = {};
      function he(r) {
        var o, u = r.ownerDocument, d = r.nodeName, y = Xe[d];
        return y || (o = u.body.appendChild(u.createElement(d)), y = c.css(o, "display"), o.parentNode.removeChild(o), y === "none" && (y = "block"), Xe[d] = y, y);
      }
      function ye(r, o) {
        for (var u, d, y = [], S = 0, A = r.length; S < A; S++)
          d = r[S], d.style && (u = d.style.display, o ? (u === "none" && (y[S] = K.get(d, "display") || null, y[S] || (d.style.display = "")), d.style.display === "" && $t(d) && (y[S] = he(d))) : u !== "none" && (y[S] = "none", K.set(d, "display", u)));
        for (S = 0; S < A; S++)
          y[S] != null && (r[S].style.display = y[S]);
        return r;
      }
      c.fn.extend({
        show: function() {
          return ye(this, !0);
        },
        hide: function() {
          return ye(this);
        },
        toggle: function(r) {
          return typeof r == "boolean" ? r ? this.show() : this.hide() : this.each(function() {
            $t(this) ? c(this).show() : c(this).hide();
          });
        }
      });
      var Ue = /^(?:checkbox|radio)$/i, Be = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Lt = /^$|^module$|\/(?:java|ecma)script/i;
      (function() {
        var r = _.createDocumentFragment(), o = r.appendChild(_.createElement("div")), u = _.createElement("input");
        u.setAttribute("type", "radio"), u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), o.appendChild(u), C.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, o.innerHTML = "<textarea>x</textarea>", C.noCloneChecked = !!o.cloneNode(!0).lastChild.defaultValue, o.innerHTML = "<option></option>", C.option = !!o.lastChild;
      })();
      var Ht = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      Ht.tbody = Ht.tfoot = Ht.colgroup = Ht.caption = Ht.thead, Ht.th = Ht.td, C.option || (Ht.optgroup = Ht.option = [1, "<select multiple='multiple'>", "</select>"]);
      function Kt(r, o) {
        var u;
        return typeof r.getElementsByTagName < "u" ? u = r.getElementsByTagName(o || "*") : typeof r.querySelectorAll < "u" ? u = r.querySelectorAll(o || "*") : u = [], o === void 0 || o && xe(r, o) ? c.merge([r], u) : u;
      }
      function Ft(r, o) {
        for (var u = 0, d = r.length; u < d; u++)
          K.set(
            r[u],
            "globalEval",
            !o || K.get(o[u], "globalEval")
          );
      }
      var Cn = /<|&#?\w+;/;
      function qn(r, o, u, d, y) {
        for (var S, A, k, F, X, ae, ge = o.createDocumentFragment(), re = [], we = 0, ut = r.length; we < ut; we++)
          if (S = r[we], S || S === 0)
            if (z(S) === "object")
              c.merge(re, S.nodeType ? [S] : S);
            else if (!Cn.test(S))
              re.push(o.createTextNode(S));
            else {
              for (A = A || ge.appendChild(o.createElement("div")), k = (Be.exec(S) || ["", ""])[1].toLowerCase(), F = Ht[k] || Ht._default, A.innerHTML = F[1] + c.htmlPrefilter(S) + F[2], ae = F[0]; ae--; )
                A = A.lastChild;
              c.merge(re, A.childNodes), A = ge.firstChild, A.textContent = "";
            }
        for (ge.textContent = "", we = 0; S = re[we++]; ) {
          if (d && c.inArray(S, d) > -1) {
            y && y.push(S);
            continue;
          }
          if (X = xt(S), A = Kt(ge.appendChild(S), "script"), X && Ft(A), u)
            for (ae = 0; S = A[ae++]; )
              Lt.test(S.type || "") && u.push(S);
        }
        return ge;
      }
      var hi = /^([^.]*)(?:\.(.+)|)/;
      function Hn() {
        return !0;
      }
      function Bn() {
        return !1;
      }
      function Xi(r, o, u, d, y, S) {
        var A, k;
        if (typeof o == "object") {
          typeof u != "string" && (d = d || u, u = void 0);
          for (k in o)
            Xi(r, k, u, d, o[k], S);
          return r;
        }
        if (d == null && y == null ? (y = u, d = u = void 0) : y == null && (typeof u == "string" ? (y = d, d = void 0) : (y = d, d = u, u = void 0)), y === !1)
          y = Bn;
        else if (!y)
          return r;
        return S === 1 && (A = y, y = function(F) {
          return c().off(F), A.apply(this, arguments);
        }, y.guid = A.guid || (A.guid = c.guid++)), r.each(function() {
          c.event.add(this, o, y, d, u);
        });
      }
      c.event = {
        global: {},
        add: function(r, o, u, d, y) {
          var S, A, k, F, X, ae, ge, re, we, ut, Bt, mt = K.get(r);
          if (ve(r))
            for (u.handler && (S = u, u = S.handler, y = S.selector), y && c.find.matchesSelector(Ge, y), u.guid || (u.guid = c.guid++), (F = mt.events) || (F = mt.events = /* @__PURE__ */ Object.create(null)), (A = mt.handle) || (A = mt.handle = function(xn) {
              return typeof c < "u" && c.event.triggered !== xn.type ? c.event.dispatch.apply(r, arguments) : void 0;
            }), o = (o || "").match(ct) || [""], X = o.length; X--; )
              k = hi.exec(o[X]) || [], we = Bt = k[1], ut = (k[2] || "").split(".").sort(), we && (ge = c.event.special[we] || {}, we = (y ? ge.delegateType : ge.bindType) || we, ge = c.event.special[we] || {}, ae = c.extend({
                type: we,
                origType: Bt,
                data: d,
                handler: u,
                guid: u.guid,
                selector: y,
                needsContext: y && c.expr.match.needsContext.test(y),
                namespace: ut.join(".")
              }, S), (re = F[we]) || (re = F[we] = [], re.delegateCount = 0, (!ge.setup || ge.setup.call(r, d, ut, A) === !1) && r.addEventListener && r.addEventListener(we, A)), ge.add && (ge.add.call(r, ae), ae.handler.guid || (ae.handler.guid = u.guid)), y ? re.splice(re.delegateCount++, 0, ae) : re.push(ae), c.event.global[we] = !0);
        },
        // Detach an event or set of events from an element
        remove: function(r, o, u, d, y) {
          var S, A, k, F, X, ae, ge, re, we, ut, Bt, mt = K.hasData(r) && K.get(r);
          if (!(!mt || !(F = mt.events))) {
            for (o = (o || "").match(ct) || [""], X = o.length; X--; ) {
              if (k = hi.exec(o[X]) || [], we = Bt = k[1], ut = (k[2] || "").split(".").sort(), !we) {
                for (we in F)
                  c.event.remove(r, we + o[X], u, d, !0);
                continue;
              }
              for (ge = c.event.special[we] || {}, we = (d ? ge.delegateType : ge.bindType) || we, re = F[we] || [], k = k[2] && new RegExp("(^|\\.)" + ut.join("\\.(?:.*\\.|)") + "(\\.|$)"), A = S = re.length; S--; )
                ae = re[S], (y || Bt === ae.origType) && (!u || u.guid === ae.guid) && (!k || k.test(ae.namespace)) && (!d || d === ae.selector || d === "**" && ae.selector) && (re.splice(S, 1), ae.selector && re.delegateCount--, ge.remove && ge.remove.call(r, ae));
              A && !re.length && ((!ge.teardown || ge.teardown.call(r, ut, mt.handle) === !1) && c.removeEvent(r, we, mt.handle), delete F[we]);
            }
            c.isEmptyObject(F) && K.remove(r, "handle events");
          }
        },
        dispatch: function(r) {
          var o, u, d, y, S, A, k = new Array(arguments.length), F = c.event.fix(r), X = (K.get(this, "events") || /* @__PURE__ */ Object.create(null))[F.type] || [], ae = c.event.special[F.type] || {};
          for (k[0] = F, o = 1; o < arguments.length; o++)
            k[o] = arguments[o];
          if (F.delegateTarget = this, !(ae.preDispatch && ae.preDispatch.call(this, F) === !1)) {
            for (A = c.event.handlers.call(this, F, X), o = 0; (y = A[o++]) && !F.isPropagationStopped(); )
              for (F.currentTarget = y.elem, u = 0; (S = y.handlers[u++]) && !F.isImmediatePropagationStopped(); )
                (!F.rnamespace || S.namespace === !1 || F.rnamespace.test(S.namespace)) && (F.handleObj = S, F.data = S.data, d = ((c.event.special[S.origType] || {}).handle || S.handler).apply(y.elem, k), d !== void 0 && (F.result = d) === !1 && (F.preventDefault(), F.stopPropagation()));
            return ae.postDispatch && ae.postDispatch.call(this, F), F.result;
          }
        },
        handlers: function(r, o) {
          var u, d, y, S, A, k = [], F = o.delegateCount, X = r.target;
          if (F && // Support: IE <=9
          // Black-hole SVG <use> instance trees (trac-13180)
          X.nodeType && // Support: Firefox <=42
          // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
          // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
          // Support: IE 11 only
          // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
          !(r.type === "click" && r.button >= 1)) {
            for (; X !== this; X = X.parentNode || this)
              if (X.nodeType === 1 && !(r.type === "click" && X.disabled === !0)) {
                for (S = [], A = {}, u = 0; u < F; u++)
                  d = o[u], y = d.selector + " ", A[y] === void 0 && (A[y] = d.needsContext ? c(y, this).index(X) > -1 : c.find(y, this, null, [X]).length), A[y] && S.push(d);
                S.length && k.push({ elem: X, handlers: S });
              }
          }
          return X = this, F < o.length && k.push({ elem: X, handlers: o.slice(F) }), k;
        },
        addProp: function(r, o) {
          Object.defineProperty(c.Event.prototype, r, {
            enumerable: !0,
            configurable: !0,
            get: D(o) ? function() {
              if (this.originalEvent)
                return o(this.originalEvent);
            } : function() {
              if (this.originalEvent)
                return this.originalEvent[r];
            },
            set: function(u) {
              Object.defineProperty(this, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: u
              });
            }
          });
        },
        fix: function(r) {
          return r[c.expando] ? r : new c.Event(r);
        },
        special: {
          load: {
            // Prevent triggered image.load events from bubbling to window.load
            noBubble: !0
          },
          click: {
            // Utilize native event to ensure correct state for checkable inputs
            setup: function(r) {
              var o = this || r;
              return Ue.test(o.type) && o.click && xe(o, "input") && qi(o, "click", !0), !1;
            },
            trigger: function(r) {
              var o = this || r;
              return Ue.test(o.type) && o.click && xe(o, "input") && qi(o, "click"), !0;
            },
            // For cross-browser consistency, suppress native .click() on links
            // Also prevent it if we're currently inside a leveraged native-event stack
            _default: function(r) {
              var o = r.target;
              return Ue.test(o.type) && o.click && xe(o, "input") && K.get(o, "click") || xe(o, "a");
            }
          },
          beforeunload: {
            postDispatch: function(r) {
              r.result !== void 0 && r.originalEvent && (r.originalEvent.returnValue = r.result);
            }
          }
        }
      };
      function qi(r, o, u) {
        if (!u) {
          K.get(r, o) === void 0 && c.event.add(r, o, Hn);
          return;
        }
        K.set(r, o, !1), c.event.add(r, o, {
          namespace: !1,
          handler: function(d) {
            var y, S = K.get(this, o);
            if (d.isTrigger & 1 && this[o]) {
              if (S)
                (c.event.special[o] || {}).delegateType && d.stopPropagation();
              else if (S = l.call(arguments), K.set(this, o, S), this[o](), y = K.get(this, o), K.set(this, o, !1), S !== y)
                return d.stopImmediatePropagation(), d.preventDefault(), y;
            } else S && (K.set(this, o, c.event.trigger(
              S[0],
              S.slice(1),
              this
            )), d.stopPropagation(), d.isImmediatePropagationStopped = Hn);
          }
        });
      }
      c.removeEvent = function(r, o, u) {
        r.removeEventListener && r.removeEventListener(o, u);
      }, c.Event = function(r, o) {
        if (!(this instanceof c.Event))
          return new c.Event(r, o);
        r && r.type ? (this.originalEvent = r, this.type = r.type, this.isDefaultPrevented = r.defaultPrevented || r.defaultPrevented === void 0 && // Support: Android <=2.3 only
        r.returnValue === !1 ? Hn : Bn, this.target = r.target && r.target.nodeType === 3 ? r.target.parentNode : r.target, this.currentTarget = r.currentTarget, this.relatedTarget = r.relatedTarget) : this.type = r, o && c.extend(this, o), this.timeStamp = r && r.timeStamp || Date.now(), this[c.expando] = !0;
      }, c.Event.prototype = {
        constructor: c.Event,
        isDefaultPrevented: Bn,
        isPropagationStopped: Bn,
        isImmediatePropagationStopped: Bn,
        isSimulated: !1,
        preventDefault: function() {
          var r = this.originalEvent;
          this.isDefaultPrevented = Hn, r && !this.isSimulated && r.preventDefault();
        },
        stopPropagation: function() {
          var r = this.originalEvent;
          this.isPropagationStopped = Hn, r && !this.isSimulated && r.stopPropagation();
        },
        stopImmediatePropagation: function() {
          var r = this.originalEvent;
          this.isImmediatePropagationStopped = Hn, r && !this.isSimulated && r.stopImmediatePropagation(), this.stopPropagation();
        }
      }, c.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
      }, c.event.addProp), c.each({ focus: "focusin", blur: "focusout" }, function(r, o) {
        function u(d) {
          if (_.documentMode) {
            var y = K.get(this, "handle"), S = c.event.fix(d);
            S.type = d.type === "focusin" ? "focus" : "blur", S.isSimulated = !0, y(d), S.target === S.currentTarget && y(S);
          } else
            c.event.simulate(
              o,
              d.target,
              c.event.fix(d)
            );
        }
        c.event.special[r] = {
          // Utilize native event if possible so blur/focus sequence is correct
          setup: function() {
            var d;
            if (qi(this, r, !0), _.documentMode)
              d = K.get(this, o), d || this.addEventListener(o, u), K.set(this, o, (d || 0) + 1);
            else
              return !1;
          },
          trigger: function() {
            return qi(this, r), !0;
          },
          teardown: function() {
            var d;
            if (_.documentMode)
              d = K.get(this, o) - 1, d ? K.set(this, o, d) : (this.removeEventListener(o, u), K.remove(this, o));
            else
              return !1;
          },
          // Suppress native focus or blur if we're currently inside
          // a leveraged native-event stack
          _default: function(d) {
            return K.get(d.target, r);
          },
          delegateType: o
        }, c.event.special[o] = {
          setup: function() {
            var d = this.ownerDocument || this.document || this, y = _.documentMode ? this : d, S = K.get(y, o);
            S || (_.documentMode ? this.addEventListener(o, u) : d.addEventListener(r, u, !0)), K.set(y, o, (S || 0) + 1);
          },
          teardown: function() {
            var d = this.ownerDocument || this.document || this, y = _.documentMode ? this : d, S = K.get(y, o) - 1;
            S ? K.set(y, o, S) : (_.documentMode ? this.removeEventListener(o, u) : d.removeEventListener(r, u, !0), K.remove(y, o));
          }
        };
      }), c.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(r, o) {
        c.event.special[r] = {
          delegateType: o,
          bindType: o,
          handle: function(u) {
            var d, y = this, S = u.relatedTarget, A = u.handleObj;
            return (!S || S !== y && !c.contains(y, S)) && (u.type = A.origType, d = A.handler.apply(this, arguments), u.type = o), d;
          }
        };
      }), c.fn.extend({
        on: function(r, o, u, d) {
          return Xi(this, r, o, u, d);
        },
        one: function(r, o, u, d) {
          return Xi(this, r, o, u, d, 1);
        },
        off: function(r, o, u) {
          var d, y;
          if (r && r.preventDefault && r.handleObj)
            return d = r.handleObj, c(r.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ), this;
          if (typeof r == "object") {
            for (y in r)
              this.off(y, o, r[y]);
            return this;
          }
          return (o === !1 || typeof o == "function") && (u = o, o = void 0), u === !1 && (u = Bn), this.each(function() {
            c.event.remove(this, r, u, o);
          });
        }
      });
      var hs = /<script|<style|<link/i, hr = /checked\s*(?:[^=]|=\s*.checked.)/i, dr = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function jn(r, o) {
        return xe(r, "table") && xe(o.nodeType !== 11 ? o : o.firstChild, "tr") && c(r).children("tbody")[0] || r;
      }
      function ji(r) {
        return r.type = (r.getAttribute("type") !== null) + "/" + r.type, r;
      }
      function ds(r) {
        return (r.type || "").slice(0, 5) === "true/" ? r.type = r.type.slice(5) : r.removeAttribute("type"), r;
      }
      function pr(r, o) {
        var u, d, y, S, A, k, F;
        if (o.nodeType === 1) {
          if (K.hasData(r) && (S = K.get(r), F = S.events, F)) {
            K.remove(o, "handle events");
            for (y in F)
              for (u = 0, d = F[y].length; u < d; u++)
                c.event.add(o, y, F[y][u]);
          }
          Ie.hasData(r) && (A = Ie.access(r), k = c.extend({}, A), Ie.set(o, k));
        }
      }
      function Qs(r, o) {
        var u = o.nodeName.toLowerCase();
        u === "input" && Ue.test(r.type) ? o.checked = r.checked : (u === "input" || u === "textarea") && (o.defaultValue = r.defaultValue);
      }
      function Ni(r, o, u, d) {
        o = f(o);
        var y, S, A, k, F, X, ae = 0, ge = r.length, re = ge - 1, we = o[0], ut = D(we);
        if (ut || ge > 1 && typeof we == "string" && !C.checkClone && hr.test(we))
          return r.each(function(Bt) {
            var mt = r.eq(Bt);
            ut && (o[0] = we.call(this, Bt, mt.html())), Ni(mt, o, u, d);
          });
        if (ge && (y = qn(o, r[0].ownerDocument, !1, r, d), S = y.firstChild, y.childNodes.length === 1 && (y = S), S || d)) {
          for (A = c.map(Kt(y, "script"), ji), k = A.length; ae < ge; ae++)
            F = y, ae !== re && (F = c.clone(F, !0, !0), k && c.merge(A, Kt(F, "script"))), u.call(r[ae], F, ae);
          if (k)
            for (X = A[A.length - 1].ownerDocument, c.map(A, ds), ae = 0; ae < k; ae++)
              F = A[ae], Lt.test(F.type || "") && !K.access(F, "globalEval") && c.contains(X, F) && (F.src && (F.type || "").toLowerCase() !== "module" ? c._evalUrl && !F.noModule && c._evalUrl(F.src, {
                nonce: F.nonce || F.getAttribute("nonce")
              }, X) : U(F.textContent.replace(dr, ""), F, X));
        }
        return r;
      }
      function P(r, o, u) {
        for (var d, y = o ? c.filter(o, r) : r, S = 0; (d = y[S]) != null; S++)
          !u && d.nodeType === 1 && c.cleanData(Kt(d)), d.parentNode && (u && xt(d) && Ft(Kt(d, "script")), d.parentNode.removeChild(d));
        return r;
      }
      c.extend({
        htmlPrefilter: function(r) {
          return r;
        },
        clone: function(r, o, u) {
          var d, y, S, A, k = r.cloneNode(!0), F = xt(r);
          if (!C.noCloneChecked && (r.nodeType === 1 || r.nodeType === 11) && !c.isXMLDoc(r))
            for (A = Kt(k), S = Kt(r), d = 0, y = S.length; d < y; d++)
              Qs(S[d], A[d]);
          if (o)
            if (u)
              for (S = S || Kt(r), A = A || Kt(k), d = 0, y = S.length; d < y; d++)
                pr(S[d], A[d]);
            else
              pr(r, k);
          return A = Kt(k, "script"), A.length > 0 && Ft(A, !F && Kt(r, "script")), k;
        },
        cleanData: function(r) {
          for (var o, u, d, y = c.event.special, S = 0; (u = r[S]) !== void 0; S++)
            if (ve(u)) {
              if (o = u[K.expando]) {
                if (o.events)
                  for (d in o.events)
                    y[d] ? c.event.remove(u, d) : c.removeEvent(u, d, o.handle);
                u[K.expando] = void 0;
              }
              u[Ie.expando] && (u[Ie.expando] = void 0);
            }
        }
      }), c.fn.extend({
        detach: function(r) {
          return P(this, r, !0);
        },
        remove: function(r) {
          return P(this, r);
        },
        text: function(r) {
          return Ot(this, function(o) {
            return o === void 0 ? c.text(this) : this.empty().each(function() {
              (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = o);
            });
          }, null, r, arguments.length);
        },
        append: function() {
          return Ni(this, arguments, function(r) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var o = jn(this, r);
              o.appendChild(r);
            }
          });
        },
        prepend: function() {
          return Ni(this, arguments, function(r) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var o = jn(this, r);
              o.insertBefore(r, o.firstChild);
            }
          });
        },
        before: function() {
          return Ni(this, arguments, function(r) {
            this.parentNode && this.parentNode.insertBefore(r, this);
          });
        },
        after: function() {
          return Ni(this, arguments, function(r) {
            this.parentNode && this.parentNode.insertBefore(r, this.nextSibling);
          });
        },
        empty: function() {
          for (var r, o = 0; (r = this[o]) != null; o++)
            r.nodeType === 1 && (c.cleanData(Kt(r, !1)), r.textContent = "");
          return this;
        },
        clone: function(r, o) {
          return r = r ?? !1, o = o ?? r, this.map(function() {
            return c.clone(this, r, o);
          });
        },
        html: function(r) {
          return Ot(this, function(o) {
            var u = this[0] || {}, d = 0, y = this.length;
            if (o === void 0 && u.nodeType === 1)
              return u.innerHTML;
            if (typeof o == "string" && !hs.test(o) && !Ht[(Be.exec(o) || ["", ""])[1].toLowerCase()]) {
              o = c.htmlPrefilter(o);
              try {
                for (; d < y; d++)
                  u = this[d] || {}, u.nodeType === 1 && (c.cleanData(Kt(u, !1)), u.innerHTML = o);
                u = 0;
              } catch {
              }
            }
            u && this.empty().append(o);
          }, null, r, arguments.length);
        },
        replaceWith: function() {
          var r = [];
          return Ni(this, arguments, function(o) {
            var u = this.parentNode;
            c.inArray(this, r) < 0 && (c.cleanData(Kt(this)), u && u.replaceChild(o, this));
          }, r);
        }
      }), c.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(r, o) {
        c.fn[r] = function(u) {
          for (var d, y = [], S = c(u), A = S.length - 1, k = 0; k <= A; k++)
            d = k === A ? this : this.clone(!0), c(S[k])[o](d), h.apply(y, d.get());
          return this.pushStack(y);
        };
      });
      var G = new RegExp("^(" + Ve + ")(?!px)[a-z%]+$", "i"), Q = /^--/, te = function(r) {
        var o = r.ownerDocument.defaultView;
        return (!o || !o.opener) && (o = e), o.getComputedStyle(r);
      }, W = function(r, o, u) {
        var d, y, S = {};
        for (y in o)
          S[y] = r.style[y], r.style[y] = o[y];
        d = u.call(r);
        for (y in o)
          r.style[y] = S[y];
        return d;
      }, Re = new RegExp(nt.join("|"), "i");
      (function() {
        function r() {
          if (X) {
            F.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", X.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Ge.appendChild(F).appendChild(X);
            var ae = e.getComputedStyle(X);
            u = ae.top !== "1%", k = o(ae.marginLeft) === 12, X.style.right = "60%", S = o(ae.right) === 36, d = o(ae.width) === 36, X.style.position = "absolute", y = o(X.offsetWidth / 3) === 12, Ge.removeChild(F), X = null;
          }
        }
        function o(ae) {
          return Math.round(parseFloat(ae));
        }
        var u, d, y, S, A, k, F = _.createElement("div"), X = _.createElement("div");
        X.style && (X.style.backgroundClip = "content-box", X.cloneNode(!0).style.backgroundClip = "", C.clearCloneStyle = X.style.backgroundClip === "content-box", c.extend(C, {
          boxSizingReliable: function() {
            return r(), d;
          },
          pixelBoxStyles: function() {
            return r(), S;
          },
          pixelPosition: function() {
            return r(), u;
          },
          reliableMarginLeft: function() {
            return r(), k;
          },
          scrollboxSize: function() {
            return r(), y;
          },
          // Support: IE 9 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Behavior in IE 9 is more subtle than in newer versions & it passes
          // some versions of this test; make sure not to make it pass there!
          //
          // Support: Firefox 70+
          // Only Firefox includes border widths
          // in computed dimensions. (gh-4529)
          reliableTrDimensions: function() {
            var ae, ge, re, we;
            return A == null && (ae = _.createElement("table"), ge = _.createElement("tr"), re = _.createElement("div"), ae.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", ge.style.cssText = "box-sizing:content-box;border:1px solid", ge.style.height = "1px", re.style.height = "9px", re.style.display = "block", Ge.appendChild(ae).appendChild(ge).appendChild(re), we = e.getComputedStyle(ge), A = parseInt(we.height, 10) + parseInt(we.borderTopWidth, 10) + parseInt(we.borderBottomWidth, 10) === ge.offsetHeight, Ge.removeChild(ae)), A;
          }
        }));
      })();
      function Le(r, o, u) {
        var d, y, S, A, k = Q.test(o), F = r.style;
        return u = u || te(r), u && (A = u.getPropertyValue(o) || u[o], k && A && (A = A.replace(de, "$1") || void 0), A === "" && !xt(r) && (A = c.style(r, o)), !C.pixelBoxStyles() && G.test(A) && Re.test(o) && (d = F.width, y = F.minWidth, S = F.maxWidth, F.minWidth = F.maxWidth = F.width = A, A = u.width, F.width = d, F.minWidth = y, F.maxWidth = S)), A !== void 0 ? (
          // Support: IE <=9 - 11 only
          // IE returns zIndex value as an integer.
          A + ""
        ) : A;
      }
      function qe(r, o) {
        return {
          get: function() {
            if (r()) {
              delete this.get;
              return;
            }
            return (this.get = o).apply(this, arguments);
          }
        };
      }
      var $e = ["Webkit", "Moz", "ms"], ot = _.createElement("div").style, at = {};
      function Je(r) {
        for (var o = r[0].toUpperCase() + r.slice(1), u = $e.length; u--; )
          if (r = $e[u] + o, r in ot)
            return r;
      }
      function Vt(r) {
        var o = c.cssProps[r] || at[r];
        return o || (r in ot ? r : at[r] = Je(r) || r);
      }
      var Zt = /^(none|table(?!-c[ea]).+)/, rn = { position: "absolute", visibility: "hidden", display: "block" }, Tn = {
        letterSpacing: "0",
        fontWeight: "400"
      };
      function Gt(r, o, u) {
        var d = rt.exec(o);
        return d ? (
          // Guard against undefined "subtract", e.g., when used as in cssHooks
          Math.max(0, d[2] - (u || 0)) + (d[3] || "px")
        ) : o;
      }
      function et(r, o, u, d, y, S) {
        var A = o === "width" ? 1 : 0, k = 0, F = 0, X = 0;
        if (u === (d ? "border" : "content"))
          return 0;
        for (; A < 4; A += 2)
          u === "margin" && (X += c.css(r, u + nt[A], !0, y)), d ? (u === "content" && (F -= c.css(r, "padding" + nt[A], !0, y)), u !== "margin" && (F -= c.css(r, "border" + nt[A] + "Width", !0, y))) : (F += c.css(r, "padding" + nt[A], !0, y), u !== "padding" ? F += c.css(r, "border" + nt[A] + "Width", !0, y) : k += c.css(r, "border" + nt[A] + "Width", !0, y));
        return !d && S >= 0 && (F += Math.max(0, Math.ceil(
          r["offset" + o[0].toUpperCase() + o.slice(1)] - S - F - k - 0.5
          // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
          // Use an explicit zero to avoid NaN (gh-3964)
        )) || 0), F + X;
      }
      function hn(r, o, u) {
        var d = te(r), y = !C.boxSizingReliable() || u, S = y && c.css(r, "boxSizing", !1, d) === "border-box", A = S, k = Le(r, o, d), F = "offset" + o[0].toUpperCase() + o.slice(1);
        if (G.test(k)) {
          if (!u)
            return k;
          k = "auto";
        }
        return (!C.boxSizingReliable() && S || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !C.reliableTrDimensions() && xe(r, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        k === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(k) && c.css(r, "display", !1, d) === "inline") && // Make sure the element is visible & connected
        r.getClientRects().length && (S = c.css(r, "boxSizing", !1, d) === "border-box", A = F in r, A && (k = r[F])), k = parseFloat(k) || 0, k + et(
          r,
          o,
          u || (S ? "border" : "content"),
          A,
          d,
          // Provide the current computed size to request scroll gutter calculation (gh-3589)
          k
        ) + "px";
      }
      c.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
          opacity: {
            get: function(r, o) {
              if (o) {
                var u = Le(r, "opacity");
                return u === "" ? "1" : u;
              }
            }
          }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
          animationIterationCount: !0,
          aspectRatio: !0,
          borderImageSlice: !0,
          columnCount: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          scale: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          // SVG-related
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},
        // Get and set the style property on a DOM Node
        style: function(r, o, u, d) {
          if (!(!r || r.nodeType === 3 || r.nodeType === 8 || !r.style)) {
            var y, S, A, k = ee(o), F = Q.test(o), X = r.style;
            if (F || (o = Vt(k)), A = c.cssHooks[o] || c.cssHooks[k], u !== void 0) {
              if (S = typeof u, S === "string" && (y = rt.exec(u)) && y[1] && (u = j(r, o, y), S = "number"), u == null || u !== u)
                return;
              S === "number" && !F && (u += y && y[3] || (c.cssNumber[k] ? "" : "px")), !C.clearCloneStyle && u === "" && o.indexOf("background") === 0 && (X[o] = "inherit"), (!A || !("set" in A) || (u = A.set(r, u, d)) !== void 0) && (F ? X.setProperty(o, u) : X[o] = u);
            } else
              return A && "get" in A && (y = A.get(r, !1, d)) !== void 0 ? y : X[o];
          }
        },
        css: function(r, o, u, d) {
          var y, S, A, k = ee(o), F = Q.test(o);
          return F || (o = Vt(k)), A = c.cssHooks[o] || c.cssHooks[k], A && "get" in A && (y = A.get(r, !0, u)), y === void 0 && (y = Le(r, o, d)), y === "normal" && o in Tn && (y = Tn[o]), u === "" || u ? (S = parseFloat(y), u === !0 || isFinite(S) ? S || 0 : y) : y;
        }
      }), c.each(["height", "width"], function(r, o) {
        c.cssHooks[o] = {
          get: function(u, d, y) {
            if (d)
              return Zt.test(c.css(u, "display")) && // Support: Safari 8+
              // Table columns in Safari have non-zero offsetWidth & zero
              // getBoundingClientRect().width unless display is changed.
              // Support: IE <=11 only
              // Running getBoundingClientRect on a disconnected node
              // in IE throws an error.
              (!u.getClientRects().length || !u.getBoundingClientRect().width) ? W(u, rn, function() {
                return hn(u, o, y);
              }) : hn(u, o, y);
          },
          set: function(u, d, y) {
            var S, A = te(u), k = !C.scrollboxSize() && A.position === "absolute", F = k || y, X = F && c.css(u, "boxSizing", !1, A) === "border-box", ae = y ? et(
              u,
              o,
              y,
              X,
              A
            ) : 0;
            return X && k && (ae -= Math.ceil(
              u["offset" + o[0].toUpperCase() + o.slice(1)] - parseFloat(A[o]) - et(u, o, "border", !1, A) - 0.5
            )), ae && (S = rt.exec(d)) && (S[3] || "px") !== "px" && (u.style[o] = d, d = c.css(u, o)), Gt(u, d, ae);
          }
        };
      }), c.cssHooks.marginLeft = qe(
        C.reliableMarginLeft,
        function(r, o) {
          if (o)
            return (parseFloat(Le(r, "marginLeft")) || r.getBoundingClientRect().left - W(r, { marginLeft: 0 }, function() {
              return r.getBoundingClientRect().left;
            })) + "px";
        }
      ), c.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(r, o) {
        c.cssHooks[r + o] = {
          expand: function(u) {
            for (var d = 0, y = {}, S = typeof u == "string" ? u.split(" ") : [u]; d < 4; d++)
              y[r + nt[d] + o] = S[d] || S[d - 2] || S[0];
            return y;
          }
        }, r !== "margin" && (c.cssHooks[r + o].set = Gt);
      }), c.fn.extend({
        css: function(r, o) {
          return Ot(this, function(u, d, y) {
            var S, A, k = {}, F = 0;
            if (Array.isArray(d)) {
              for (S = te(u), A = d.length; F < A; F++)
                k[d[F]] = c.css(u, d[F], !1, S);
              return k;
            }
            return y !== void 0 ? c.style(u, d, y) : c.css(u, d);
          }, r, o, arguments.length > 1);
        }
      });
      function pt(r, o, u, d, y) {
        return new pt.prototype.init(r, o, u, d, y);
      }
      c.Tween = pt, pt.prototype = {
        constructor: pt,
        init: function(r, o, u, d, y, S) {
          this.elem = r, this.prop = u, this.easing = y || c.easing._default, this.options = o, this.start = this.now = this.cur(), this.end = d, this.unit = S || (c.cssNumber[u] ? "" : "px");
        },
        cur: function() {
          var r = pt.propHooks[this.prop];
          return r && r.get ? r.get(this) : pt.propHooks._default.get(this);
        },
        run: function(r) {
          var o, u = pt.propHooks[this.prop];
          return this.options.duration ? this.pos = o = c.easing[this.easing](
            r,
            this.options.duration * r,
            0,
            1,
            this.options.duration
          ) : this.pos = o = r, this.now = (this.end - this.start) * o + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), u && u.set ? u.set(this) : pt.propHooks._default.set(this), this;
        }
      }, pt.prototype.init.prototype = pt.prototype, pt.propHooks = {
        _default: {
          get: function(r) {
            var o;
            return r.elem.nodeType !== 1 || r.elem[r.prop] != null && r.elem.style[r.prop] == null ? r.elem[r.prop] : (o = c.css(r.elem, r.prop, ""), !o || o === "auto" ? 0 : o);
          },
          set: function(r) {
            c.fx.step[r.prop] ? c.fx.step[r.prop](r) : r.elem.nodeType === 1 && (c.cssHooks[r.prop] || r.elem.style[Vt(r.prop)] != null) ? c.style(r.elem, r.prop, r.now + r.unit) : r.elem[r.prop] = r.now;
          }
        }
      }, pt.propHooks.scrollTop = pt.propHooks.scrollLeft = {
        set: function(r) {
          r.elem.nodeType && r.elem.parentNode && (r.elem[r.prop] = r.now);
        }
      }, c.easing = {
        linear: function(r) {
          return r;
        },
        swing: function(r) {
          return 0.5 - Math.cos(r * Math.PI) / 2;
        },
        _default: "swing"
      }, c.fx = pt.prototype.init, c.fx.step = {};
      var vn, $n, Rn = /^(?:toggle|show|hide)$/, mr = /queueHooks$/;
      function sn() {
        $n && (_.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(sn) : e.setTimeout(sn, c.fx.interval), c.fx.tick());
      }
      function mn() {
        return e.setTimeout(function() {
          vn = void 0;
        }), vn = Date.now();
      }
      function gn(r, o) {
        var u, d = 0, y = { height: r };
        for (o = o ? 1 : 0; d < 4; d += 2 - o)
          u = nt[d], y["margin" + u] = y["padding" + u] = r;
        return o && (y.opacity = y.width = r), y;
      }
      function dn(r, o, u) {
        for (var d, y = (Ln.tweeners[o] || []).concat(Ln.tweeners["*"]), S = 0, A = y.length; S < A; S++)
          if (d = y[S].call(u, o, r))
            return d;
      }
      function Pn(r, o, u) {
        var d, y, S, A, k, F, X, ae, ge = "width" in o || "height" in o, re = this, we = {}, ut = r.style, Bt = r.nodeType && $t(r), mt = K.get(r, "fxshow");
        u.queue || (A = c._queueHooks(r, "fx"), A.unqueued == null && (A.unqueued = 0, k = A.empty.fire, A.empty.fire = function() {
          A.unqueued || k();
        }), A.unqueued++, re.always(function() {
          re.always(function() {
            A.unqueued--, c.queue(r, "fx").length || A.empty.fire();
          });
        }));
        for (d in o)
          if (y = o[d], Rn.test(y)) {
            if (delete o[d], S = S || y === "toggle", y === (Bt ? "hide" : "show"))
              if (y === "show" && mt && mt[d] !== void 0)
                Bt = !0;
              else
                continue;
            we[d] = mt && mt[d] || c.style(r, d);
          }
        if (F = !c.isEmptyObject(o), !(!F && c.isEmptyObject(we))) {
          ge && r.nodeType === 1 && (u.overflow = [ut.overflow, ut.overflowX, ut.overflowY], X = mt && mt.display, X == null && (X = K.get(r, "display")), ae = c.css(r, "display"), ae === "none" && (X ? ae = X : (ye([r], !0), X = r.style.display || X, ae = c.css(r, "display"), ye([r]))), (ae === "inline" || ae === "inline-block" && X != null) && c.css(r, "float") === "none" && (F || (re.done(function() {
            ut.display = X;
          }), X == null && (ae = ut.display, X = ae === "none" ? "" : ae)), ut.display = "inline-block")), u.overflow && (ut.overflow = "hidden", re.always(function() {
            ut.overflow = u.overflow[0], ut.overflowX = u.overflow[1], ut.overflowY = u.overflow[2];
          })), F = !1;
          for (d in we)
            F || (mt ? "hidden" in mt && (Bt = mt.hidden) : mt = K.access(r, "fxshow", { display: X }), S && (mt.hidden = !Bt), Bt && ye([r], !0), re.done(function() {
              Bt || ye([r]), K.remove(r, "fxshow");
              for (d in we)
                c.style(r, d, we[d]);
            })), F = dn(Bt ? mt[d] : 0, d, re), d in mt || (mt[d] = F.start, Bt && (F.end = F.start, F.start = 0));
        }
      }
      function Ur(r, o) {
        var u, d, y, S, A;
        for (u in r)
          if (d = ee(u), y = o[d], S = r[u], Array.isArray(S) && (y = S[1], S = r[u] = S[0]), u !== d && (r[d] = S, delete r[u]), A = c.cssHooks[d], A && "expand" in A) {
            S = A.expand(S), delete r[d];
            for (u in S)
              u in r || (r[u] = S[u], o[u] = y);
          } else
            o[d] = y;
      }
      function Ln(r, o, u) {
        var d, y, S = 0, A = Ln.prefilters.length, k = c.Deferred().always(function() {
          delete F.elem;
        }), F = function() {
          if (y)
            return !1;
          for (var ge = vn || mn(), re = Math.max(0, X.startTime + X.duration - ge), we = re / X.duration || 0, ut = 1 - we, Bt = 0, mt = X.tweens.length; Bt < mt; Bt++)
            X.tweens[Bt].run(ut);
          return k.notifyWith(r, [X, ut, re]), ut < 1 && mt ? re : (mt || k.notifyWith(r, [X, 1, 0]), k.resolveWith(r, [X]), !1);
        }, X = k.promise({
          elem: r,
          props: c.extend({}, o),
          opts: c.extend(!0, {
            specialEasing: {},
            easing: c.easing._default
          }, u),
          originalProperties: o,
          originalOptions: u,
          startTime: vn || mn(),
          duration: u.duration,
          tweens: [],
          createTween: function(ge, re) {
            var we = c.Tween(
              r,
              X.opts,
              ge,
              re,
              X.opts.specialEasing[ge] || X.opts.easing
            );
            return X.tweens.push(we), we;
          },
          stop: function(ge) {
            var re = 0, we = ge ? X.tweens.length : 0;
            if (y)
              return this;
            for (y = !0; re < we; re++)
              X.tweens[re].run(1);
            return ge ? (k.notifyWith(r, [X, 1, 0]), k.resolveWith(r, [X, ge])) : k.rejectWith(r, [X, ge]), this;
          }
        }), ae = X.props;
        for (Ur(ae, X.opts.specialEasing); S < A; S++)
          if (d = Ln.prefilters[S].call(X, r, ae, X.opts), d)
            return D(d.stop) && (c._queueHooks(X.elem, X.opts.queue).stop = d.stop.bind(d)), d;
        return c.map(ae, dn, X), D(X.opts.start) && X.opts.start.call(r, X), X.progress(X.opts.progress).done(X.opts.done, X.opts.complete).fail(X.opts.fail).always(X.opts.always), c.fx.timer(
          c.extend(F, {
            elem: r,
            anim: X,
            queue: X.opts.queue
          })
        ), X;
      }
      c.Animation = c.extend(Ln, {
        tweeners: {
          "*": [function(r, o) {
            var u = this.createTween(r, o);
            return j(u.elem, r, rt.exec(o), u), u;
          }]
        },
        tweener: function(r, o) {
          D(r) ? (o = r, r = ["*"]) : r = r.match(ct);
          for (var u, d = 0, y = r.length; d < y; d++)
            u = r[d], Ln.tweeners[u] = Ln.tweeners[u] || [], Ln.tweeners[u].unshift(o);
        },
        prefilters: [Pn],
        prefilter: function(r, o) {
          o ? Ln.prefilters.unshift(r) : Ln.prefilters.push(r);
        }
      }), c.speed = function(r, o, u) {
        var d = r && typeof r == "object" ? c.extend({}, r) : {
          complete: u || !u && o || D(r) && r,
          duration: r,
          easing: u && o || o && !D(o) && o
        };
        return c.fx.off ? d.duration = 0 : typeof d.duration != "number" && (d.duration in c.fx.speeds ? d.duration = c.fx.speeds[d.duration] : d.duration = c.fx.speeds._default), (d.queue == null || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
          D(d.old) && d.old.call(this), d.queue && c.dequeue(this, d.queue);
        }, d;
      }, c.fn.extend({
        fadeTo: function(r, o, u, d) {
          return this.filter($t).css("opacity", 0).show().end().animate({ opacity: o }, r, u, d);
        },
        animate: function(r, o, u, d) {
          var y = c.isEmptyObject(r), S = c.speed(o, u, d), A = function() {
            var k = Ln(this, c.extend({}, r), S);
            (y || K.get(this, "finish")) && k.stop(!0);
          };
          return A.finish = A, y || S.queue === !1 ? this.each(A) : this.queue(S.queue, A);
        },
        stop: function(r, o, u) {
          var d = function(y) {
            var S = y.stop;
            delete y.stop, S(u);
          };
          return typeof r != "string" && (u = o, o = r, r = void 0), o && this.queue(r || "fx", []), this.each(function() {
            var y = !0, S = r != null && r + "queueHooks", A = c.timers, k = K.get(this);
            if (S)
              k[S] && k[S].stop && d(k[S]);
            else
              for (S in k)
                k[S] && k[S].stop && mr.test(S) && d(k[S]);
            for (S = A.length; S--; )
              A[S].elem === this && (r == null || A[S].queue === r) && (A[S].anim.stop(u), y = !1, A.splice(S, 1));
            (y || !u) && c.dequeue(this, r);
          });
        },
        finish: function(r) {
          return r !== !1 && (r = r || "fx"), this.each(function() {
            var o, u = K.get(this), d = u[r + "queue"], y = u[r + "queueHooks"], S = c.timers, A = d ? d.length : 0;
            for (u.finish = !0, c.queue(this, r, []), y && y.stop && y.stop.call(this, !0), o = S.length; o--; )
              S[o].elem === this && S[o].queue === r && (S[o].anim.stop(!0), S.splice(o, 1));
            for (o = 0; o < A; o++)
              d[o] && d[o].finish && d[o].finish.call(this);
            delete u.finish;
          });
        }
      }), c.each(["toggle", "show", "hide"], function(r, o) {
        var u = c.fn[o];
        c.fn[o] = function(d, y, S) {
          return d == null || typeof d == "boolean" ? u.apply(this, arguments) : this.animate(gn(o, !0), d, y, S);
        };
      }), c.each({
        slideDown: gn("show"),
        slideUp: gn("hide"),
        slideToggle: gn("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      }, function(r, o) {
        c.fn[r] = function(u, d, y) {
          return this.animate(o, u, d, y);
        };
      }), c.timers = [], c.fx.tick = function() {
        var r, o = 0, u = c.timers;
        for (vn = Date.now(); o < u.length; o++)
          r = u[o], !r() && u[o] === r && u.splice(o--, 1);
        u.length || c.fx.stop(), vn = void 0;
      }, c.fx.timer = function(r) {
        c.timers.push(r), c.fx.start();
      }, c.fx.interval = 13, c.fx.start = function() {
        $n || ($n = !0, sn());
      }, c.fx.stop = function() {
        $n = null;
      }, c.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
      }, c.fn.delay = function(r, o) {
        return r = c.fx && c.fx.speeds[r] || r, o = o || "fx", this.queue(o, function(u, d) {
          var y = e.setTimeout(u, r);
          d.stop = function() {
            e.clearTimeout(y);
          };
        });
      }, (function() {
        var r = _.createElement("input"), o = _.createElement("select"), u = o.appendChild(_.createElement("option"));
        r.type = "checkbox", C.checkOn = r.value !== "", C.optSelected = u.selected, r = _.createElement("input"), r.value = "t", r.type = "radio", C.radioValue = r.value === "t";
      })();
      var ni, ii = c.expr.attrHandle;
      c.fn.extend({
        attr: function(r, o) {
          return Ot(this, c.attr, r, o, arguments.length > 1);
        },
        removeAttr: function(r) {
          return this.each(function() {
            c.removeAttr(this, r);
          });
        }
      }), c.extend({
        attr: function(r, o, u) {
          var d, y, S = r.nodeType;
          if (!(S === 3 || S === 8 || S === 2)) {
            if (typeof r.getAttribute > "u")
              return c.prop(r, o, u);
            if ((S !== 1 || !c.isXMLDoc(r)) && (y = c.attrHooks[o.toLowerCase()] || (c.expr.match.bool.test(o) ? ni : void 0)), u !== void 0) {
              if (u === null) {
                c.removeAttr(r, o);
                return;
              }
              return y && "set" in y && (d = y.set(r, u, o)) !== void 0 ? d : (r.setAttribute(o, u + ""), u);
            }
            return y && "get" in y && (d = y.get(r, o)) !== null ? d : (d = c.find.attr(r, o), d ?? void 0);
          }
        },
        attrHooks: {
          type: {
            set: function(r, o) {
              if (!C.radioValue && o === "radio" && xe(r, "input")) {
                var u = r.value;
                return r.setAttribute("type", o), u && (r.value = u), o;
              }
            }
          }
        },
        removeAttr: function(r, o) {
          var u, d = 0, y = o && o.match(ct);
          if (y && r.nodeType === 1)
            for (; u = y[d++]; )
              r.removeAttribute(u);
        }
      }), ni = {
        set: function(r, o, u) {
          return o === !1 ? c.removeAttr(r, u) : r.setAttribute(u, u), u;
        }
      }, c.each(c.expr.match.bool.source.match(/\w+/g), function(r, o) {
        var u = ii[o] || c.find.attr;
        ii[o] = function(d, y, S) {
          var A, k, F = y.toLowerCase();
          return S || (k = ii[F], ii[F] = A, A = u(d, y, S) != null ? F : null, ii[F] = k), A;
        };
      });
      var ps = /^(?:input|select|textarea|button)$/i, gr = /^(?:a|area)$/i;
      c.fn.extend({
        prop: function(r, o) {
          return Ot(this, c.prop, r, o, arguments.length > 1);
        },
        removeProp: function(r) {
          return this.each(function() {
            delete this[c.propFix[r] || r];
          });
        }
      }), c.extend({
        prop: function(r, o, u) {
          var d, y, S = r.nodeType;
          if (!(S === 3 || S === 8 || S === 2))
            return (S !== 1 || !c.isXMLDoc(r)) && (o = c.propFix[o] || o, y = c.propHooks[o]), u !== void 0 ? y && "set" in y && (d = y.set(r, u, o)) !== void 0 ? d : r[o] = u : y && "get" in y && (d = y.get(r, o)) !== null ? d : r[o];
        },
        propHooks: {
          tabIndex: {
            get: function(r) {
              var o = c.find.attr(r, "tabindex");
              return o ? parseInt(o, 10) : ps.test(r.nodeName) || gr.test(r.nodeName) && r.href ? 0 : -1;
            }
          }
        },
        propFix: {
          for: "htmlFor",
          class: "className"
        }
      }), C.optSelected || (c.propHooks.selected = {
        get: function(r) {
          var o = r.parentNode;
          return o && o.parentNode && o.parentNode.selectedIndex, null;
        },
        set: function(r) {
          var o = r.parentNode;
          o && (o.selectedIndex, o.parentNode && o.parentNode.selectedIndex);
        }
      }), c.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ], function() {
        c.propFix[this.toLowerCase()] = this;
      });
      function bi(r) {
        var o = r.match(ct) || [];
        return o.join(" ");
      }
      function Ui(r) {
        return r.getAttribute && r.getAttribute("class") || "";
      }
      function Oi(r) {
        return Array.isArray(r) ? r : typeof r == "string" ? r.match(ct) || [] : [];
      }
      c.fn.extend({
        addClass: function(r) {
          var o, u, d, y, S, A;
          return D(r) ? this.each(function(k) {
            c(this).addClass(r.call(this, k, Ui(this)));
          }) : (o = Oi(r), o.length ? this.each(function() {
            if (d = Ui(this), u = this.nodeType === 1 && " " + bi(d) + " ", u) {
              for (S = 0; S < o.length; S++)
                y = o[S], u.indexOf(" " + y + " ") < 0 && (u += y + " ");
              A = bi(u), d !== A && this.setAttribute("class", A);
            }
          }) : this);
        },
        removeClass: function(r) {
          var o, u, d, y, S, A;
          return D(r) ? this.each(function(k) {
            c(this).removeClass(r.call(this, k, Ui(this)));
          }) : arguments.length ? (o = Oi(r), o.length ? this.each(function() {
            if (d = Ui(this), u = this.nodeType === 1 && " " + bi(d) + " ", u) {
              for (S = 0; S < o.length; S++)
                for (y = o[S]; u.indexOf(" " + y + " ") > -1; )
                  u = u.replace(" " + y + " ", " ");
              A = bi(u), d !== A && this.setAttribute("class", A);
            }
          }) : this) : this.attr("class", "");
        },
        toggleClass: function(r, o) {
          var u, d, y, S, A = typeof r, k = A === "string" || Array.isArray(r);
          return D(r) ? this.each(function(F) {
            c(this).toggleClass(
              r.call(this, F, Ui(this), o),
              o
            );
          }) : typeof o == "boolean" && k ? o ? this.addClass(r) : this.removeClass(r) : (u = Oi(r), this.each(function() {
            if (k)
              for (S = c(this), y = 0; y < u.length; y++)
                d = u[y], S.hasClass(d) ? S.removeClass(d) : S.addClass(d);
            else (r === void 0 || A === "boolean") && (d = Ui(this), d && K.set(this, "__className__", d), this.setAttribute && this.setAttribute(
              "class",
              d || r === !1 ? "" : K.get(this, "__className__") || ""
            ));
          }));
        },
        hasClass: function(r) {
          var o, u, d = 0;
          for (o = " " + r + " "; u = this[d++]; )
            if (u.nodeType === 1 && (" " + bi(Ui(u)) + " ").indexOf(o) > -1)
              return !0;
          return !1;
        }
      });
      var eo = /\r/g;
      c.fn.extend({
        val: function(r) {
          var o, u, d, y = this[0];
          return arguments.length ? (d = D(r), this.each(function(S) {
            var A;
            this.nodeType === 1 && (d ? A = r.call(this, S, c(this).val()) : A = r, A == null ? A = "" : typeof A == "number" ? A += "" : Array.isArray(A) && (A = c.map(A, function(k) {
              return k == null ? "" : k + "";
            })), o = c.valHooks[this.type] || c.valHooks[this.nodeName.toLowerCase()], (!o || !("set" in o) || o.set(this, A, "value") === void 0) && (this.value = A));
          })) : y ? (o = c.valHooks[y.type] || c.valHooks[y.nodeName.toLowerCase()], o && "get" in o && (u = o.get(y, "value")) !== void 0 ? u : (u = y.value, typeof u == "string" ? u.replace(eo, "") : u ?? "")) : void 0;
        }
      }), c.extend({
        valHooks: {
          option: {
            get: function(r) {
              var o = c.find.attr(r, "value");
              return o ?? // Support: IE <=10 - 11 only
              // option.text throws exceptions (trac-14686, trac-14858)
              // Strip and collapse whitespace
              // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
              bi(c.text(r));
            }
          },
          select: {
            get: function(r) {
              var o, u, d, y = r.options, S = r.selectedIndex, A = r.type === "select-one", k = A ? null : [], F = A ? S + 1 : y.length;
              for (S < 0 ? d = F : d = A ? S : 0; d < F; d++)
                if (u = y[d], (u.selected || d === S) && // Don't return options that are disabled or in a disabled optgroup
                !u.disabled && (!u.parentNode.disabled || !xe(u.parentNode, "optgroup"))) {
                  if (o = c(u).val(), A)
                    return o;
                  k.push(o);
                }
              return k;
            },
            set: function(r, o) {
              for (var u, d, y = r.options, S = c.makeArray(o), A = y.length; A--; )
                d = y[A], (d.selected = c.inArray(c.valHooks.option.get(d), S) > -1) && (u = !0);
              return u || (r.selectedIndex = -1), S;
            }
          }
        }
      }), c.each(["radio", "checkbox"], function() {
        c.valHooks[this] = {
          set: function(r, o) {
            if (Array.isArray(o))
              return r.checked = c.inArray(c(r).val(), o) > -1;
          }
        }, C.checkOn || (c.valHooks[this].get = function(r) {
          return r.getAttribute("value") === null ? "on" : r.value;
        });
      });
      var _r = e.location, di = { guid: Date.now() }, to = /\?/;
      c.parseXML = function(r) {
        var o, u;
        if (!r || typeof r != "string")
          return null;
        try {
          o = new e.DOMParser().parseFromString(r, "text/xml");
        } catch {
        }
        return u = o && o.getElementsByTagName("parsererror")[0], (!o || u) && c.error("Invalid XML: " + (u ? c.map(u.childNodes, function(d) {
          return d.textContent;
        }).join(`
`) : r)), o;
      };
      var Ei = /^(?:focusinfocus|focusoutblur)$/, Or = function(r) {
        r.stopPropagation();
      };
      c.extend(c.event, {
        trigger: function(r, o, u, d) {
          var y, S, A, k, F, X, ae, ge, re = [u || _], we = M.call(r, "type") ? r.type : r, ut = M.call(r, "namespace") ? r.namespace.split(".") : [];
          if (S = ge = A = u = u || _, !(u.nodeType === 3 || u.nodeType === 8) && !Ei.test(we + c.event.triggered) && (we.indexOf(".") > -1 && (ut = we.split("."), we = ut.shift(), ut.sort()), F = we.indexOf(":") < 0 && "on" + we, r = r[c.expando] ? r : new c.Event(we, typeof r == "object" && r), r.isTrigger = d ? 2 : 3, r.namespace = ut.join("."), r.rnamespace = r.namespace ? new RegExp("(^|\\.)" + ut.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, r.result = void 0, r.target || (r.target = u), o = o == null ? [r] : c.makeArray(o, [r]), ae = c.event.special[we] || {}, !(!d && ae.trigger && ae.trigger.apply(u, o) === !1))) {
            if (!d && !ae.noBubble && !x(u)) {
              for (k = ae.delegateType || we, Ei.test(k + we) || (S = S.parentNode); S; S = S.parentNode)
                re.push(S), A = S;
              A === (u.ownerDocument || _) && re.push(A.defaultView || A.parentWindow || e);
            }
            for (y = 0; (S = re[y++]) && !r.isPropagationStopped(); )
              ge = S, r.type = y > 1 ? k : ae.bindType || we, X = (K.get(S, "events") || /* @__PURE__ */ Object.create(null))[r.type] && K.get(S, "handle"), X && X.apply(S, o), X = F && S[F], X && X.apply && ve(S) && (r.result = X.apply(S, o), r.result === !1 && r.preventDefault());
            return r.type = we, !d && !r.isDefaultPrevented() && (!ae._default || ae._default.apply(re.pop(), o) === !1) && ve(u) && F && D(u[we]) && !x(u) && (A = u[F], A && (u[F] = null), c.event.triggered = we, r.isPropagationStopped() && ge.addEventListener(we, Or), u[we](), r.isPropagationStopped() && ge.removeEventListener(we, Or), c.event.triggered = void 0, A && (u[F] = A)), r.result;
          }
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(r, o, u) {
          var d = c.extend(
            new c.Event(),
            u,
            {
              type: r,
              isSimulated: !0
            }
          );
          c.event.trigger(d, null, o);
        }
      }), c.fn.extend({
        trigger: function(r, o) {
          return this.each(function() {
            c.event.trigger(r, o, this);
          });
        },
        triggerHandler: function(r, o) {
          var u = this[0];
          if (u)
            return c.event.trigger(r, o, u, !0);
        }
      });
      var Io = /\[\]$/, vr = /\r?\n/g, no = /^(?:submit|button|image|reset|file)$/i, Fr = /^(?:input|select|textarea|keygen)/i;
      function ms(r, o, u, d) {
        var y;
        if (Array.isArray(o))
          c.each(o, function(S, A) {
            u || Io.test(r) ? d(r, A) : ms(
              r + "[" + (typeof A == "object" && A != null ? S : "") + "]",
              A,
              u,
              d
            );
          });
        else if (!u && z(o) === "object")
          for (y in o)
            ms(r + "[" + y + "]", o[y], u, d);
        else
          d(r, o);
      }
      c.param = function(r, o) {
        var u, d = [], y = function(S, A) {
          var k = D(A) ? A() : A;
          d[d.length] = encodeURIComponent(S) + "=" + encodeURIComponent(k ?? "");
        };
        if (r == null)
          return "";
        if (Array.isArray(r) || r.jquery && !c.isPlainObject(r))
          c.each(r, function() {
            y(this.name, this.value);
          });
        else
          for (u in r)
            ms(u, r[u], o, y);
        return d.join("&");
      }, c.fn.extend({
        serialize: function() {
          return c.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var r = c.prop(this, "elements");
            return r ? c.makeArray(r) : this;
          }).filter(function() {
            var r = this.type;
            return this.name && !c(this).is(":disabled") && Fr.test(this.nodeName) && !no.test(r) && (this.checked || !Ue.test(r));
          }).map(function(r, o) {
            var u = c(this).val();
            return u == null ? null : Array.isArray(u) ? c.map(u, function(d) {
              return { name: o.name, value: d.replace(vr, `\r
`) };
            }) : { name: o.name, value: u.replace(vr, `\r
`) };
          }).get();
        }
      });
      var No = /%20/g, Uo = /#.*$/, xr = /([?&])_=[^&]*/, Na = /^(.*?):[ \t]*([^\r\n]*)$/mg, Oo = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, io = /^(?:GET|HEAD)$/, gs = /^\/\//, _s = {}, ro = {}, Br = "*/".concat("*"), so = _.createElement("a");
      so.href = _r.href;
      function oo(r) {
        return function(o, u) {
          typeof o != "string" && (u = o, o = "*");
          var d, y = 0, S = o.toLowerCase().match(ct) || [];
          if (D(u))
            for (; d = S[y++]; )
              d[0] === "+" ? (d = d.slice(1) || "*", (r[d] = r[d] || []).unshift(u)) : (r[d] = r[d] || []).push(u);
        };
      }
      function vs(r, o, u, d) {
        var y = {}, S = r === ro;
        function A(k) {
          var F;
          return y[k] = !0, c.each(r[k] || [], function(X, ae) {
            var ge = ae(o, u, d);
            if (typeof ge == "string" && !S && !y[ge])
              return o.dataTypes.unshift(ge), A(ge), !1;
            if (S)
              return !(F = ge);
          }), F;
        }
        return A(o.dataTypes[0]) || !y["*"] && A("*");
      }
      function zr(r, o) {
        var u, d, y = c.ajaxSettings.flatOptions || {};
        for (u in o)
          o[u] !== void 0 && ((y[u] ? r : d || (d = {}))[u] = o[u]);
        return d && c.extend(!0, r, d), r;
      }
      function ao(r, o, u) {
        for (var d, y, S, A, k = r.contents, F = r.dataTypes; F[0] === "*"; )
          F.shift(), d === void 0 && (d = r.mimeType || o.getResponseHeader("Content-Type"));
        if (d) {
          for (y in k)
            if (k[y] && k[y].test(d)) {
              F.unshift(y);
              break;
            }
        }
        if (F[0] in u)
          S = F[0];
        else {
          for (y in u) {
            if (!F[0] || r.converters[y + " " + F[0]]) {
              S = y;
              break;
            }
            A || (A = y);
          }
          S = S || A;
        }
        if (S)
          return S !== F[0] && F.unshift(S), u[S];
      }
      function Fo(r, o, u, d) {
        var y, S, A, k, F, X = {}, ae = r.dataTypes.slice();
        if (ae[1])
          for (A in r.converters)
            X[A.toLowerCase()] = r.converters[A];
        for (S = ae.shift(); S; )
          if (r.responseFields[S] && (u[r.responseFields[S]] = o), !F && d && r.dataFilter && (o = r.dataFilter(o, r.dataType)), F = S, S = ae.shift(), S) {
            if (S === "*")
              S = F;
            else if (F !== "*" && F !== S) {
              if (A = X[F + " " + S] || X["* " + S], !A) {
                for (y in X)
                  if (k = y.split(" "), k[1] === S && (A = X[F + " " + k[0]] || X["* " + k[0]], A)) {
                    A === !0 ? A = X[y] : X[y] !== !0 && (S = k[0], ae.unshift(k[1]));
                    break;
                  }
              }
              if (A !== !0)
                if (A && r.throws)
                  o = A(o);
                else
                  try {
                    o = A(o);
                  } catch (ge) {
                    return {
                      state: "parsererror",
                      error: A ? ge : "No conversion from " + F + " to " + S
                    };
                  }
            }
          }
        return { state: "success", data: o };
      }
      c.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: _r.href,
          type: "GET",
          isLocal: Oo.test(_r.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          /*
          timeout: 0,
          data: null,
          dataType: null,
          username: null,
          password: null,
          cache: null,
          throws: false,
          traditional: false,
          headers: {},
          */
          accepts: {
            "*": Br,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          // Data converters
          // Keys separate source (or catchall "*") and destination types with a single space
          converters: {
            // Convert anything to text
            "* text": String,
            // Text to html (true = no transformation)
            "text html": !0,
            // Evaluate text as a json expression
            "text json": JSON.parse,
            // Parse text as xml
            "text xml": c.parseXML
          },
          // For options that shouldn't be deep extended:
          // you can add your own custom options here if
          // and when you create one that shouldn't be
          // deep extended (see ajaxExtend)
          flatOptions: {
            url: !0,
            context: !0
          }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(r, o) {
          return o ? (
            // Building a settings object
            zr(zr(r, c.ajaxSettings), o)
          ) : (
            // Extending ajaxSettings
            zr(c.ajaxSettings, r)
          );
        },
        ajaxPrefilter: oo(_s),
        ajaxTransport: oo(ro),
        // Main method
        ajax: function(r, o) {
          typeof r == "object" && (o = r, r = void 0), o = o || {};
          var u, d, y, S, A, k, F, X, ae, ge, re = c.ajaxSetup({}, o), we = re.context || re, ut = re.context && (we.nodeType || we.jquery) ? c(we) : c.event, Bt = c.Deferred(), mt = c.Callbacks("once memory"), xn = re.statusCode || {}, yn = {}, ri = {}, pi = "canceled", Nt = {
            readyState: 0,
            // Builds headers hashtable if needed
            getResponseHeader: function(Xt) {
              var un;
              if (F) {
                if (!S)
                  for (S = {}; un = Na.exec(y); )
                    S[un[1].toLowerCase() + " "] = (S[un[1].toLowerCase() + " "] || []).concat(un[2]);
                un = S[Xt.toLowerCase() + " "];
              }
              return un == null ? null : un.join(", ");
            },
            // Raw string
            getAllResponseHeaders: function() {
              return F ? y : null;
            },
            // Caches the header
            setRequestHeader: function(Xt, un) {
              return F == null && (Xt = ri[Xt.toLowerCase()] = ri[Xt.toLowerCase()] || Xt, yn[Xt] = un), this;
            },
            // Overrides response content-type header
            overrideMimeType: function(Xt) {
              return F == null && (re.mimeType = Xt), this;
            },
            // Status-dependent callbacks
            statusCode: function(Xt) {
              var un;
              if (Xt)
                if (F)
                  Nt.always(Xt[Nt.status]);
                else
                  for (un in Xt)
                    xn[un] = [xn[un], Xt[un]];
              return this;
            },
            // Cancel the request
            abort: function(Xt) {
              var un = Xt || pi;
              return u && u.abort(un), Yi(0, un), this;
            }
          };
          if (Bt.promise(Nt), re.url = ((r || re.url || _r.href) + "").replace(gs, _r.protocol + "//"), re.type = o.method || o.type || re.method || re.type, re.dataTypes = (re.dataType || "*").toLowerCase().match(ct) || [""], re.crossDomain == null) {
            k = _.createElement("a");
            try {
              k.href = re.url, k.href = k.href, re.crossDomain = so.protocol + "//" + so.host != k.protocol + "//" + k.host;
            } catch {
              re.crossDomain = !0;
            }
          }
          if (re.data && re.processData && typeof re.data != "string" && (re.data = c.param(re.data, re.traditional)), vs(_s, re, o, Nt), F)
            return Nt;
          X = c.event && re.global, X && c.active++ === 0 && c.event.trigger("ajaxStart"), re.type = re.type.toUpperCase(), re.hasContent = !io.test(re.type), d = re.url.replace(Uo, ""), re.hasContent ? re.data && re.processData && (re.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (re.data = re.data.replace(No, "+")) : (ge = re.url.slice(d.length), re.data && (re.processData || typeof re.data == "string") && (d += (to.test(d) ? "&" : "?") + re.data, delete re.data), re.cache === !1 && (d = d.replace(xr, "$1"), ge = (to.test(d) ? "&" : "?") + "_=" + di.guid++ + ge), re.url = d + ge), re.ifModified && (c.lastModified[d] && Nt.setRequestHeader("If-Modified-Since", c.lastModified[d]), c.etag[d] && Nt.setRequestHeader("If-None-Match", c.etag[d])), (re.data && re.hasContent && re.contentType !== !1 || o.contentType) && Nt.setRequestHeader("Content-Type", re.contentType), Nt.setRequestHeader(
            "Accept",
            re.dataTypes[0] && re.accepts[re.dataTypes[0]] ? re.accepts[re.dataTypes[0]] + (re.dataTypes[0] !== "*" ? ", " + Br + "; q=0.01" : "") : re.accepts["*"]
          );
          for (ae in re.headers)
            Nt.setRequestHeader(ae, re.headers[ae]);
          if (re.beforeSend && (re.beforeSend.call(we, Nt, re) === !1 || F))
            return Nt.abort();
          if (pi = "abort", mt.add(re.complete), Nt.done(re.success), Nt.fail(re.error), u = vs(ro, re, o, Nt), !u)
            Yi(-1, "No Transport");
          else {
            if (Nt.readyState = 1, X && ut.trigger("ajaxSend", [Nt, re]), F)
              return Nt;
            re.async && re.timeout > 0 && (A = e.setTimeout(function() {
              Nt.abort("timeout");
            }, re.timeout));
            try {
              F = !1, u.send(yn, Yi);
            } catch (Xt) {
              if (F)
                throw Xt;
              Yi(-1, Xt);
            }
          }
          function Yi(Xt, un, Sr, co) {
            var On, si, mi, oi, Fi, Yn = un;
            F || (F = !0, A && e.clearTimeout(A), u = void 0, y = co || "", Nt.readyState = Xt > 0 ? 4 : 0, On = Xt >= 200 && Xt < 300 || Xt === 304, Sr && (oi = ao(re, Nt, Sr)), !On && c.inArray("script", re.dataTypes) > -1 && c.inArray("json", re.dataTypes) < 0 && (re.converters["text script"] = function() {
            }), oi = Fo(re, oi, Nt, On), On ? (re.ifModified && (Fi = Nt.getResponseHeader("Last-Modified"), Fi && (c.lastModified[d] = Fi), Fi = Nt.getResponseHeader("etag"), Fi && (c.etag[d] = Fi)), Xt === 204 || re.type === "HEAD" ? Yn = "nocontent" : Xt === 304 ? Yn = "notmodified" : (Yn = oi.state, si = oi.data, mi = oi.error, On = !mi)) : (mi = Yn, (Xt || !Yn) && (Yn = "error", Xt < 0 && (Xt = 0))), Nt.status = Xt, Nt.statusText = (un || Yn) + "", On ? Bt.resolveWith(we, [si, Yn, Nt]) : Bt.rejectWith(we, [Nt, Yn, mi]), Nt.statusCode(xn), xn = void 0, X && ut.trigger(
              On ? "ajaxSuccess" : "ajaxError",
              [Nt, re, On ? si : mi]
            ), mt.fireWith(we, [Nt, Yn]), X && (ut.trigger("ajaxComplete", [Nt, re]), --c.active || c.event.trigger("ajaxStop")));
          }
          return Nt;
        },
        getJSON: function(r, o, u) {
          return c.get(r, o, u, "json");
        },
        getScript: function(r, o) {
          return c.get(r, void 0, o, "script");
        }
      }), c.each(["get", "post"], function(r, o) {
        c[o] = function(u, d, y, S) {
          return D(d) && (S = S || y, y = d, d = void 0), c.ajax(c.extend({
            url: u,
            type: o,
            dataType: S,
            data: d,
            success: y
          }, c.isPlainObject(u) && u));
        };
      }), c.ajaxPrefilter(function(r) {
        var o;
        for (o in r.headers)
          o.toLowerCase() === "content-type" && (r.contentType = r.headers[o] || "");
      }), c._evalUrl = function(r, o, u) {
        return c.ajax({
          url: r,
          // Make this explicit, since user can override this through ajaxSetup (trac-11264)
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          // Only evaluate the response if it is successful (gh-4126)
          // dataFilter is not invoked for failure responses, so using it instead
          // of the default converter is kludgy but it works.
          converters: {
            "text script": function() {
            }
          },
          dataFilter: function(d) {
            c.globalEval(d, o, u);
          }
        });
      }, c.fn.extend({
        wrapAll: function(r) {
          var o;
          return this[0] && (D(r) && (r = r.call(this[0])), o = c(r, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && o.insertBefore(this[0]), o.map(function() {
            for (var u = this; u.firstElementChild; )
              u = u.firstElementChild;
            return u;
          }).append(this)), this;
        },
        wrapInner: function(r) {
          return D(r) ? this.each(function(o) {
            c(this).wrapInner(r.call(this, o));
          }) : this.each(function() {
            var o = c(this), u = o.contents();
            u.length ? u.wrapAll(r) : o.append(r);
          });
        },
        wrap: function(r) {
          var o = D(r);
          return this.each(function(u) {
            c(this).wrapAll(o ? r.call(this, u) : r);
          });
        },
        unwrap: function(r) {
          return this.parent(r).not("body").each(function() {
            c(this).replaceWith(this.childNodes);
          }), this;
        }
      }), c.expr.pseudos.hidden = function(r) {
        return !c.expr.pseudos.visible(r);
      }, c.expr.pseudos.visible = function(r) {
        return !!(r.offsetWidth || r.offsetHeight || r.getClientRects().length);
      }, c.ajaxSettings.xhr = function() {
        try {
          return new e.XMLHttpRequest();
        } catch {
        }
      };
      var kr = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
      }, $i = c.ajaxSettings.xhr();
      C.cors = !!$i && "withCredentials" in $i, C.ajax = $i = !!$i, c.ajaxTransport(function(r) {
        var o, u;
        if (C.cors || $i && !r.crossDomain)
          return {
            send: function(d, y) {
              var S, A = r.xhr();
              if (A.open(
                r.type,
                r.url,
                r.async,
                r.username,
                r.password
              ), r.xhrFields)
                for (S in r.xhrFields)
                  A[S] = r.xhrFields[S];
              r.mimeType && A.overrideMimeType && A.overrideMimeType(r.mimeType), !r.crossDomain && !d["X-Requested-With"] && (d["X-Requested-With"] = "XMLHttpRequest");
              for (S in d)
                A.setRequestHeader(S, d[S]);
              o = function(k) {
                return function() {
                  o && (o = u = A.onload = A.onerror = A.onabort = A.ontimeout = A.onreadystatechange = null, k === "abort" ? A.abort() : k === "error" ? typeof A.status != "number" ? y(0, "error") : y(
                    // File: protocol always yields status 0; see trac-8605, trac-14207
                    A.status,
                    A.statusText
                  ) : y(
                    kr[A.status] || A.status,
                    A.statusText,
                    // Support: IE <=9 only
                    // IE9 has no XHR2 but throws on binary (trac-11426)
                    // For XHR2 non-text, let the caller handle it (gh-2498)
                    (A.responseType || "text") !== "text" || typeof A.responseText != "string" ? { binary: A.response } : { text: A.responseText },
                    A.getAllResponseHeaders()
                  ));
                };
              }, A.onload = o(), u = A.onerror = A.ontimeout = o("error"), A.onabort !== void 0 ? A.onabort = u : A.onreadystatechange = function() {
                A.readyState === 4 && e.setTimeout(function() {
                  o && u();
                });
              }, o = o("abort");
              try {
                A.send(r.hasContent && r.data || null);
              } catch (k) {
                if (o)
                  throw k;
              }
            },
            abort: function() {
              o && o();
            }
          };
      }), c.ajaxPrefilter(function(r) {
        r.crossDomain && (r.contents.script = !1);
      }), c.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(r) {
            return c.globalEval(r), r;
          }
        }
      }), c.ajaxPrefilter("script", function(r) {
        r.cache === void 0 && (r.cache = !1), r.crossDomain && (r.type = "GET");
      }), c.ajaxTransport("script", function(r) {
        if (r.crossDomain || r.scriptAttrs) {
          var o, u;
          return {
            send: function(d, y) {
              o = c("<script>").attr(r.scriptAttrs || {}).prop({ charset: r.scriptCharset, src: r.url }).on("load error", u = function(S) {
                o.remove(), u = null, S && y(S.type === "error" ? 404 : 200, S.type);
              }), _.head.appendChild(o[0]);
            },
            abort: function() {
              u && u();
            }
          };
        }
      });
      var lo = [], xs = /(=)\?(?=&|$)|\?\?/;
      c.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var r = lo.pop() || c.expando + "_" + di.guid++;
          return this[r] = !0, r;
        }
      }), c.ajaxPrefilter("json jsonp", function(r, o, u) {
        var d, y, S, A = r.jsonp !== !1 && (xs.test(r.url) ? "url" : typeof r.data == "string" && (r.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && xs.test(r.data) && "data");
        if (A || r.dataTypes[0] === "jsonp")
          return d = r.jsonpCallback = D(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, A ? r[A] = r[A].replace(xs, "$1" + d) : r.jsonp !== !1 && (r.url += (to.test(r.url) ? "&" : "?") + r.jsonp + "=" + d), r.converters["script json"] = function() {
            return S || c.error(d + " was not called"), S[0];
          }, r.dataTypes[0] = "json", y = e[d], e[d] = function() {
            S = arguments;
          }, u.always(function() {
            y === void 0 ? c(e).removeProp(d) : e[d] = y, r[d] && (r.jsonpCallback = o.jsonpCallback, lo.push(d)), S && D(y) && y(S[0]), S = y = void 0;
          }), "script";
      }), C.createHTMLDocument = (function() {
        var r = _.implementation.createHTMLDocument("").body;
        return r.innerHTML = "<form></form><form></form>", r.childNodes.length === 2;
      })(), c.parseHTML = function(r, o, u) {
        if (typeof r != "string")
          return [];
        typeof o == "boolean" && (u = o, o = !1);
        var d, y, S;
        return o || (C.createHTMLDocument ? (o = _.implementation.createHTMLDocument(""), d = o.createElement("base"), d.href = _.location.href, o.head.appendChild(d)) : o = _), y = It.exec(r), S = !u && [], y ? [o.createElement(y[1])] : (y = qn([r], o, S), S && S.length && c(S).remove(), c.merge([], y.childNodes));
      }, c.fn.load = function(r, o, u) {
        var d, y, S, A = this, k = r.indexOf(" ");
        return k > -1 && (d = bi(r.slice(k)), r = r.slice(0, k)), D(o) ? (u = o, o = void 0) : o && typeof o == "object" && (y = "POST"), A.length > 0 && c.ajax({
          url: r,
          // If "type" variable is undefined, then "GET" method will be used.
          // Make value of this field explicit since
          // user can override it through ajaxSetup method
          type: y || "GET",
          dataType: "html",
          data: o
        }).done(function(F) {
          S = arguments, A.html(d ? (
            // If a selector was specified, locate the right elements in a dummy div
            // Exclude scripts to avoid IE 'Permission Denied' errors
            c("<div>").append(c.parseHTML(F)).find(d)
          ) : (
            // Otherwise use the full result
            F
          ));
        }).always(u && function(F, X) {
          A.each(function() {
            u.apply(this, S || [F.responseText, X, F]);
          });
        }), this;
      }, c.expr.pseudos.animated = function(r) {
        return c.grep(c.timers, function(o) {
          return r === o.elem;
        }).length;
      }, c.offset = {
        setOffset: function(r, o, u) {
          var d, y, S, A, k, F, X, ae = c.css(r, "position"), ge = c(r), re = {};
          ae === "static" && (r.style.position = "relative"), k = ge.offset(), S = c.css(r, "top"), F = c.css(r, "left"), X = (ae === "absolute" || ae === "fixed") && (S + F).indexOf("auto") > -1, X ? (d = ge.position(), A = d.top, y = d.left) : (A = parseFloat(S) || 0, y = parseFloat(F) || 0), D(o) && (o = o.call(r, u, c.extend({}, k))), o.top != null && (re.top = o.top - k.top + A), o.left != null && (re.left = o.left - k.left + y), "using" in o ? o.using.call(r, re) : ge.css(re);
        }
      }, c.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(r) {
          if (arguments.length)
            return r === void 0 ? this : this.each(function(y) {
              c.offset.setOffset(this, r, y);
            });
          var o, u, d = this[0];
          if (d)
            return d.getClientRects().length ? (o = d.getBoundingClientRect(), u = d.ownerDocument.defaultView, {
              top: o.top + u.pageYOffset,
              left: o.left + u.pageXOffset
            }) : { top: 0, left: 0 };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function() {
          if (this[0]) {
            var r, o, u, d = this[0], y = { top: 0, left: 0 };
            if (c.css(d, "position") === "fixed")
              o = d.getBoundingClientRect();
            else {
              for (o = this.offset(), u = d.ownerDocument, r = d.offsetParent || u.documentElement; r && (r === u.body || r === u.documentElement) && c.css(r, "position") === "static"; )
                r = r.parentNode;
              r && r !== d && r.nodeType === 1 && (y = c(r).offset(), y.top += c.css(r, "borderTopWidth", !0), y.left += c.css(r, "borderLeftWidth", !0));
            }
            return {
              top: o.top - y.top - c.css(d, "marginTop", !0),
              left: o.left - y.left - c.css(d, "marginLeft", !0)
            };
          }
        },
        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function() {
          return this.map(function() {
            for (var r = this.offsetParent; r && c.css(r, "position") === "static"; )
              r = r.offsetParent;
            return r || Ge;
          });
        }
      }), c.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(r, o) {
        var u = o === "pageYOffset";
        c.fn[r] = function(d) {
          return Ot(this, function(y, S, A) {
            var k;
            if (x(y) ? k = y : y.nodeType === 9 && (k = y.defaultView), A === void 0)
              return k ? k[o] : y[S];
            k ? k.scrollTo(
              u ? k.pageXOffset : A,
              u ? A : k.pageYOffset
            ) : y[S] = A;
          }, r, d, arguments.length);
        };
      }), c.each(["top", "left"], function(r, o) {
        c.cssHooks[o] = qe(
          C.pixelPosition,
          function(u, d) {
            if (d)
              return d = Le(u, o), G.test(d) ? c(u).position()[o] + "px" : d;
          }
        );
      }), c.each({ Height: "height", Width: "width" }, function(r, o) {
        c.each({
          padding: "inner" + r,
          content: o,
          "": "outer" + r
        }, function(u, d) {
          c.fn[d] = function(y, S) {
            var A = arguments.length && (u || typeof y != "boolean"), k = u || (y === !0 || S === !0 ? "margin" : "border");
            return Ot(this, function(F, X, ae) {
              var ge;
              return x(F) ? d.indexOf("outer") === 0 ? F["inner" + r] : F.document.documentElement["client" + r] : F.nodeType === 9 ? (ge = F.documentElement, Math.max(
                F.body["scroll" + r],
                ge["scroll" + r],
                F.body["offset" + r],
                ge["offset" + r],
                ge["client" + r]
              )) : ae === void 0 ? (
                // Get width or height on the element, requesting but not forcing parseFloat
                c.css(F, X, k)
              ) : (
                // Set width or height on the element
                c.style(F, X, ae, k)
              );
            }, o, A ? y : void 0, A);
          };
        });
      }), c.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ], function(r, o) {
        c.fn[o] = function(u) {
          return this.on(o, u);
        };
      }), c.fn.extend({
        bind: function(r, o, u) {
          return this.on(r, null, o, u);
        },
        unbind: function(r, o) {
          return this.off(r, null, o);
        },
        delegate: function(r, o, u, d) {
          return this.on(o, r, u, d);
        },
        undelegate: function(r, o, u) {
          return arguments.length === 1 ? this.off(r, "**") : this.off(o, r || "**", u);
        },
        hover: function(r, o) {
          return this.on("mouseenter", r).on("mouseleave", o || r);
        }
      }), c.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function(r, o) {
          c.fn[o] = function(u, d) {
            return arguments.length > 0 ? this.on(o, null, u, d) : this.trigger(o);
          };
        }
      );
      var yr = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      c.proxy = function(r, o) {
        var u, d, y;
        if (typeof o == "string" && (u = r[o], o = r, r = u), !!D(r))
          return d = l.call(arguments, 2), y = function() {
            return r.apply(o || this, d.concat(l.call(arguments)));
          }, y.guid = r.guid = r.guid || c.guid++, y;
      }, c.holdReady = function(r) {
        r ? c.readyWait++ : c.ready(!0);
      }, c.isArray = Array.isArray, c.parseJSON = JSON.parse, c.nodeName = xe, c.isFunction = D, c.isWindow = x, c.camelCase = ee, c.type = z, c.now = Date.now, c.isNumeric = function(r) {
        var o = c.type(r);
        return (o === "number" || o === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(r - parseFloat(r));
      }, c.trim = function(r) {
        return r == null ? "" : (r + "").replace(yr, "$1");
      };
      var Ua = e.jQuery, Bo = e.$;
      return c.noConflict = function(r) {
        return e.$ === c && (e.$ = Bo), r && e.jQuery === c && (e.jQuery = Ua), c;
      }, typeof t > "u" && (e.jQuery = e.$ = c), c;
    });
  })(_a)), _a.exports;
}
var Xh = Wh();
const l0 = /* @__PURE__ */ kh(Xh);
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const vc = "169", qh = 0, iu = 1, jh = 2, rf = 1, $h = 2, sr = 3, Ir = 0, ei = 1, or = 2, Lr = 0, ks = 1, ru = 2, su = 3, ou = 4, Yh = 5, rs = 100, Kh = 101, Zh = 102, Jh = 103, Qh = 104, ed = 200, td = 201, nd = 202, id = 203, Ll = 204, Dl = 205, rd = 206, sd = 207, od = 208, ad = 209, ld = 210, cd = 211, ud = 212, fd = 213, hd = 214, Il = 0, Nl = 1, Ul = 2, Xs = 3, Ol = 4, Fl = 5, Bl = 6, zl = 7, sf = 0, dd = 1, pd = 2, Dr = 0, md = 1, gd = 2, _d = 3, vd = 4, xd = 5, yd = 6, Sd = 7, of = 300, qs = 301, js = 302, kl = 303, Hl = 304, Pa = 306, Vl = 1e3, os = 1001, Gl = 1002, Mi = 1003, Md = 1004, $o = 1005, Li = 1006, Qa = 1007, as = 1008, cr = 1009, af = 1010, lf = 1011, Ao = 1012, xc = 1013, cs = 1014, ar = 1015, wo = 1016, yc = 1017, Sc = 1018, $s = 1020, cf = 35902, uf = 1021, ff = 1022, Ii = 1023, hf = 1024, df = 1025, Hs = 1026, Ys = 1027, pf = 1028, Mc = 1029, mf = 1030, bc = 1031, Ec = 1033, va = 33776, xa = 33777, ya = 33778, Sa = 33779, Wl = 35840, Xl = 35841, ql = 35842, jl = 35843, $l = 36196, Yl = 37492, Kl = 37496, Zl = 37808, Jl = 37809, Ql = 37810, ec = 37811, tc = 37812, nc = 37813, ic = 37814, rc = 37815, sc = 37816, oc = 37817, ac = 37818, lc = 37819, cc = 37820, uc = 37821, Ma = 36492, fc = 36494, hc = 36495, gf = 36283, dc = 36284, pc = 36285, mc = 36286, bd = 3200, Ed = 3201, Td = 0, Ad = 1, Pr = "", Hi = "srgb", Nr = "srgb-linear", Tc = "display-p3", La = "display-p3-linear", Ta = "linear", fn = "srgb", Aa = "rec709", wa = "p3", Ts = 7680, au = 519, wd = 512, Cd = 513, Rd = 514, _f = 515, Pd = 516, Ld = 517, Dd = 518, Id = 519, lu = 35044, cu = "300 es", lr = 2e3, Ca = 2001;
class Zs {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const s = this._listeners[e];
    if (s !== void 0) {
      const l = s.indexOf(t);
      l !== -1 && s.splice(l, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const s = n.slice(0);
      for (let l = 0, f = s.length; l < f; l++)
        s[l].call(this, e);
      e.target = null;
    }
  }
}
const zn = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], el = Math.PI / 180, gc = 180 / Math.PI;
function Co() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (zn[i & 255] + zn[i >> 8 & 255] + zn[i >> 16 & 255] + zn[i >> 24 & 255] + "-" + zn[e & 255] + zn[e >> 8 & 255] + "-" + zn[e >> 16 & 15 | 64] + zn[e >> 24 & 255] + "-" + zn[t & 63 | 128] + zn[t >> 8 & 255] + "-" + zn[t >> 16 & 255] + zn[t >> 24 & 255] + zn[n & 255] + zn[n >> 8 & 255] + zn[n >> 16 & 255] + zn[n >> 24 & 255]).toLowerCase();
}
function Qn(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Nd(i, e) {
  return (i % e + e) % e;
}
function tl(i, e, t) {
  return (1 - t) * i + t * e;
}
function xo(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Jn(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Qt {
  constructor(e = 0, t = 0) {
    Qt.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6], this.y = s[1] * t + s[4] * n + s[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Qn(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), s = Math.sin(t), l = this.x - e.x, f = this.y - e.y;
    return this.x = l * n - f * s + e.x, this.y = l * s + f * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Rt {
  constructor(e, t, n, s, l, f, h, p, g) {
    Rt.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, s, l, f, h, p, g);
  }
  set(e, t, n, s, l, f, h, p, g) {
    const v = this.elements;
    return v[0] = e, v[1] = s, v[2] = h, v[3] = t, v[4] = l, v[5] = p, v[6] = n, v[7] = f, v[8] = g, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, s = t.elements, l = this.elements, f = n[0], h = n[3], p = n[6], g = n[1], v = n[4], M = n[7], b = n[2], T = n[5], C = n[8], D = s[0], x = s[3], _ = s[6], B = s[1], U = s[4], z = s[7], le = s[2], $ = s[5], c = s[8];
    return l[0] = f * D + h * B + p * le, l[3] = f * x + h * U + p * $, l[6] = f * _ + h * z + p * c, l[1] = g * D + v * B + M * le, l[4] = g * x + v * U + M * $, l[7] = g * _ + v * z + M * c, l[2] = b * D + T * B + C * le, l[5] = b * x + T * U + C * $, l[8] = b * _ + T * z + C * c, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], l = e[3], f = e[4], h = e[5], p = e[6], g = e[7], v = e[8];
    return t * f * v - t * h * g - n * l * v + n * h * p + s * l * g - s * f * p;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], l = e[3], f = e[4], h = e[5], p = e[6], g = e[7], v = e[8], M = v * f - h * g, b = h * p - v * l, T = g * l - f * p, C = t * M + n * b + s * T;
    if (C === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const D = 1 / C;
    return e[0] = M * D, e[1] = (s * g - v * n) * D, e[2] = (h * n - s * f) * D, e[3] = b * D, e[4] = (v * t - s * p) * D, e[5] = (s * l - h * t) * D, e[6] = T * D, e[7] = (n * p - g * t) * D, e[8] = (f * t - n * l) * D, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, s, l, f, h) {
    const p = Math.cos(l), g = Math.sin(l);
    return this.set(
      n * p,
      n * g,
      -n * (p * f + g * h) + f + e,
      -s * g,
      s * p,
      -s * (-g * f + p * h) + h + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(nl.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(nl.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(nl.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let s = 0; s < 9; s++)
      if (t[s] !== n[s]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const nl = /* @__PURE__ */ new Rt();
function vf(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function Ra(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Ud() {
  const i = Ra("canvas");
  return i.style.display = "block", i;
}
const uu = {};
function ba(i) {
  i in uu || (uu[i] = !0, console.warn(i));
}
function Od(i, e, t) {
  return new Promise(function(n, s) {
    function l() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          s();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(l, t);
          break;
        default:
          n();
      }
    }
    setTimeout(l, t);
  });
}
function Fd(i) {
  const e = i.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function Bd(i) {
  const e = i.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const fu = /* @__PURE__ */ new Rt().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), hu = /* @__PURE__ */ new Rt().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), yo = {
  [Nr]: {
    transfer: Ta,
    primaries: Aa,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (i) => i,
    fromReference: (i) => i
  },
  [Hi]: {
    transfer: fn,
    primaries: Aa,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (i) => i.convertSRGBToLinear(),
    fromReference: (i) => i.convertLinearToSRGB()
  },
  [La]: {
    transfer: Ta,
    primaries: wa,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (i) => i.applyMatrix3(hu),
    fromReference: (i) => i.applyMatrix3(fu)
  },
  [Tc]: {
    transfer: fn,
    primaries: wa,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (i) => i.convertSRGBToLinear().applyMatrix3(hu),
    fromReference: (i) => i.applyMatrix3(fu).convertLinearToSRGB()
  }
}, zd = /* @__PURE__ */ new Set([Nr, La]), en = {
  enabled: !0,
  _workingColorSpace: Nr,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(i) {
    if (!zd.has(i))
      throw new Error(`Unsupported working color space, "${i}".`);
    this._workingColorSpace = i;
  },
  convert: function(i, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return i;
    const n = yo[e].toReference, s = yo[t].fromReference;
    return s(n(i));
  },
  fromWorkingColorSpace: function(i, e) {
    return this.convert(i, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(i, e) {
    return this.convert(i, e, this._workingColorSpace);
  },
  getPrimaries: function(i) {
    return yo[i].primaries;
  },
  getTransfer: function(i) {
    return i === Pr ? Ta : yo[i].transfer;
  },
  getLuminanceCoefficients: function(i, e = this._workingColorSpace) {
    return i.fromArray(yo[e].luminanceCoefficients);
  }
};
function Vs(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function il(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let As;
class kd {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      As === void 0 && (As = Ra("canvas")), As.width = e.width, As.height = e.height;
      const n = As.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = As;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Ra("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const s = n.getImageData(0, 0, e.width, e.height), l = s.data;
      for (let f = 0; f < l.length; f++)
        l[f] = Vs(l[f] / 255) * 255;
      return n.putImageData(s, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Vs(t[n] / 255) * 255) : t[n] = Vs(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Hd = 0;
class xf {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Hd++ }), this.uuid = Co(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, s = this.data;
    if (s !== null) {
      let l;
      if (Array.isArray(s)) {
        l = [];
        for (let f = 0, h = s.length; f < h; f++)
          s[f].isDataTexture ? l.push(rl(s[f].image)) : l.push(rl(s[f]));
      } else
        l = rl(s);
      n.url = l;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function rl(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? kd.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Vd = 0;
class ti extends Zs {
  constructor(e = ti.DEFAULT_IMAGE, t = ti.DEFAULT_MAPPING, n = os, s = os, l = Li, f = as, h = Ii, p = cr, g = ti.DEFAULT_ANISOTROPY, v = Pr) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Vd++ }), this.uuid = Co(), this.name = "", this.source = new xf(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = s, this.magFilter = l, this.minFilter = f, this.anisotropy = g, this.format = h, this.internalFormat = null, this.type = p, this.offset = new Qt(0, 0), this.repeat = new Qt(1, 1), this.center = new Qt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Rt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = v, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== of) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Vl:
          e.x = e.x - Math.floor(e.x);
          break;
        case os:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Gl:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Vl:
          e.y = e.y - Math.floor(e.y);
          break;
        case os:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Gl:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
ti.DEFAULT_IMAGE = null;
ti.DEFAULT_MAPPING = of;
ti.DEFAULT_ANISOTROPY = 1;
class Mn {
  constructor(e = 0, t = 0, n = 0, s = 1) {
    Mn.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = s;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, s) {
    return this.x = e, this.y = t, this.z = n, this.w = s, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, s = this.z, l = this.w, f = e.elements;
    return this.x = f[0] * t + f[4] * n + f[8] * s + f[12] * l, this.y = f[1] * t + f[5] * n + f[9] * s + f[13] * l, this.z = f[2] * t + f[6] * n + f[10] * s + f[14] * l, this.w = f[3] * t + f[7] * n + f[11] * s + f[15] * l, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, s, l;
    const p = e.elements, g = p[0], v = p[4], M = p[8], b = p[1], T = p[5], C = p[9], D = p[2], x = p[6], _ = p[10];
    if (Math.abs(v - b) < 0.01 && Math.abs(M - D) < 0.01 && Math.abs(C - x) < 0.01) {
      if (Math.abs(v + b) < 0.1 && Math.abs(M + D) < 0.1 && Math.abs(C + x) < 0.1 && Math.abs(g + T + _ - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const U = (g + 1) / 2, z = (T + 1) / 2, le = (_ + 1) / 2, $ = (v + b) / 4, c = (M + D) / 4, oe = (C + x) / 4;
      return U > z && U > le ? U < 0.01 ? (n = 0, s = 0.707106781, l = 0.707106781) : (n = Math.sqrt(U), s = $ / n, l = c / n) : z > le ? z < 0.01 ? (n = 0.707106781, s = 0, l = 0.707106781) : (s = Math.sqrt(z), n = $ / s, l = oe / s) : le < 0.01 ? (n = 0.707106781, s = 0.707106781, l = 0) : (l = Math.sqrt(le), n = c / l, s = oe / l), this.set(n, s, l, t), this;
    }
    let B = Math.sqrt((x - C) * (x - C) + (M - D) * (M - D) + (b - v) * (b - v));
    return Math.abs(B) < 1e-3 && (B = 1), this.x = (x - C) / B, this.y = (M - D) / B, this.z = (b - v) / B, this.w = Math.acos((g + T + _ - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Gd extends Zs {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Mn(0, 0, e, t), this.scissorTest = !1, this.viewport = new Mn(0, 0, e, t);
    const s = { width: e, height: t, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Li,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const l = new ti(s, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    l.flipY = !1, l.generateMipmaps = n.generateMipmaps, l.internalFormat = n.internalFormat, this.textures = [];
    const f = n.count;
    for (let h = 0; h < f; h++)
      this.textures[h] = l.clone(), this.textures[h].isRenderTargetTexture = !0;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let s = 0, l = this.textures.length; s < l; s++)
        this.textures[s].image.width = e, this.textures[s].image.height = t, this.textures[s].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let n = 0, s = e.textures.length; n < s; n++)
      this.textures[n] = e.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new xf(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class us extends Gd {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class yf extends ti {
  constructor(e = null, t = 1, n = 1, s = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: s }, this.magFilter = Mi, this.minFilter = Mi, this.wrapR = os, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Wd extends ti {
  constructor(e = null, t = 1, n = 1, s = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: s }, this.magFilter = Mi, this.minFilter = Mi, this.wrapR = os, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Ro {
  constructor(e = 0, t = 0, n = 0, s = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = s;
  }
  static slerpFlat(e, t, n, s, l, f, h) {
    let p = n[s + 0], g = n[s + 1], v = n[s + 2], M = n[s + 3];
    const b = l[f + 0], T = l[f + 1], C = l[f + 2], D = l[f + 3];
    if (h === 0) {
      e[t + 0] = p, e[t + 1] = g, e[t + 2] = v, e[t + 3] = M;
      return;
    }
    if (h === 1) {
      e[t + 0] = b, e[t + 1] = T, e[t + 2] = C, e[t + 3] = D;
      return;
    }
    if (M !== D || p !== b || g !== T || v !== C) {
      let x = 1 - h;
      const _ = p * b + g * T + v * C + M * D, B = _ >= 0 ? 1 : -1, U = 1 - _ * _;
      if (U > Number.EPSILON) {
        const le = Math.sqrt(U), $ = Math.atan2(le, _ * B);
        x = Math.sin(x * $) / le, h = Math.sin(h * $) / le;
      }
      const z = h * B;
      if (p = p * x + b * z, g = g * x + T * z, v = v * x + C * z, M = M * x + D * z, x === 1 - h) {
        const le = 1 / Math.sqrt(p * p + g * g + v * v + M * M);
        p *= le, g *= le, v *= le, M *= le;
      }
    }
    e[t] = p, e[t + 1] = g, e[t + 2] = v, e[t + 3] = M;
  }
  static multiplyQuaternionsFlat(e, t, n, s, l, f) {
    const h = n[s], p = n[s + 1], g = n[s + 2], v = n[s + 3], M = l[f], b = l[f + 1], T = l[f + 2], C = l[f + 3];
    return e[t] = h * C + v * M + p * T - g * b, e[t + 1] = p * C + v * b + g * M - h * T, e[t + 2] = g * C + v * T + h * b - p * M, e[t + 3] = v * C - h * M - p * b - g * T, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, s) {
    return this._x = e, this._y = t, this._z = n, this._w = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, s = e._y, l = e._z, f = e._order, h = Math.cos, p = Math.sin, g = h(n / 2), v = h(s / 2), M = h(l / 2), b = p(n / 2), T = p(s / 2), C = p(l / 2);
    switch (f) {
      case "XYZ":
        this._x = b * v * M + g * T * C, this._y = g * T * M - b * v * C, this._z = g * v * C + b * T * M, this._w = g * v * M - b * T * C;
        break;
      case "YXZ":
        this._x = b * v * M + g * T * C, this._y = g * T * M - b * v * C, this._z = g * v * C - b * T * M, this._w = g * v * M + b * T * C;
        break;
      case "ZXY":
        this._x = b * v * M - g * T * C, this._y = g * T * M + b * v * C, this._z = g * v * C + b * T * M, this._w = g * v * M - b * T * C;
        break;
      case "ZYX":
        this._x = b * v * M - g * T * C, this._y = g * T * M + b * v * C, this._z = g * v * C - b * T * M, this._w = g * v * M + b * T * C;
        break;
      case "YZX":
        this._x = b * v * M + g * T * C, this._y = g * T * M + b * v * C, this._z = g * v * C - b * T * M, this._w = g * v * M - b * T * C;
        break;
      case "XZY":
        this._x = b * v * M - g * T * C, this._y = g * T * M - b * v * C, this._z = g * v * C + b * T * M, this._w = g * v * M + b * T * C;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + f);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, s = Math.sin(n);
    return this._x = e.x * s, this._y = e.y * s, this._z = e.z * s, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], s = t[4], l = t[8], f = t[1], h = t[5], p = t[9], g = t[2], v = t[6], M = t[10], b = n + h + M;
    if (b > 0) {
      const T = 0.5 / Math.sqrt(b + 1);
      this._w = 0.25 / T, this._x = (v - p) * T, this._y = (l - g) * T, this._z = (f - s) * T;
    } else if (n > h && n > M) {
      const T = 2 * Math.sqrt(1 + n - h - M);
      this._w = (v - p) / T, this._x = 0.25 * T, this._y = (s + f) / T, this._z = (l + g) / T;
    } else if (h > M) {
      const T = 2 * Math.sqrt(1 + h - n - M);
      this._w = (l - g) / T, this._x = (s + f) / T, this._y = 0.25 * T, this._z = (p + v) / T;
    } else {
      const T = 2 * Math.sqrt(1 + M - n - h);
      this._w = (f - s) / T, this._x = (l + g) / T, this._y = (p + v) / T, this._z = 0.25 * T;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Qn(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const s = Math.min(1, t / n);
    return this.slerp(e, s), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, s = e._y, l = e._z, f = e._w, h = t._x, p = t._y, g = t._z, v = t._w;
    return this._x = n * v + f * h + s * g - l * p, this._y = s * v + f * p + l * h - n * g, this._z = l * v + f * g + n * p - s * h, this._w = f * v - n * h - s * p - l * g, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, s = this._y, l = this._z, f = this._w;
    let h = f * e._w + n * e._x + s * e._y + l * e._z;
    if (h < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, h = -h) : this.copy(e), h >= 1)
      return this._w = f, this._x = n, this._y = s, this._z = l, this;
    const p = 1 - h * h;
    if (p <= Number.EPSILON) {
      const T = 1 - t;
      return this._w = T * f + t * this._w, this._x = T * n + t * this._x, this._y = T * s + t * this._y, this._z = T * l + t * this._z, this.normalize(), this;
    }
    const g = Math.sqrt(p), v = Math.atan2(g, h), M = Math.sin((1 - t) * v) / g, b = Math.sin(t * v) / g;
    return this._w = f * M + this._w * b, this._x = n * M + this._x * b, this._y = s * M + this._y * b, this._z = l * M + this._z * b, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), s = Math.sqrt(1 - n), l = Math.sqrt(n);
    return this.set(
      s * Math.sin(e),
      s * Math.cos(e),
      l * Math.sin(t),
      l * Math.cos(t)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class ce {
  constructor(e = 0, t = 0, n = 0) {
    ce.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(du.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(du.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, s = this.z, l = e.elements;
    return this.x = l[0] * t + l[3] * n + l[6] * s, this.y = l[1] * t + l[4] * n + l[7] * s, this.z = l[2] * t + l[5] * n + l[8] * s, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, s = this.z, l = e.elements, f = 1 / (l[3] * t + l[7] * n + l[11] * s + l[15]);
    return this.x = (l[0] * t + l[4] * n + l[8] * s + l[12]) * f, this.y = (l[1] * t + l[5] * n + l[9] * s + l[13]) * f, this.z = (l[2] * t + l[6] * n + l[10] * s + l[14]) * f, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, s = this.z, l = e.x, f = e.y, h = e.z, p = e.w, g = 2 * (f * s - h * n), v = 2 * (h * t - l * s), M = 2 * (l * n - f * t);
    return this.x = t + p * g + f * M - h * v, this.y = n + p * v + h * g - l * M, this.z = s + p * M + l * v - f * g, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, s = this.z, l = e.elements;
    return this.x = l[0] * t + l[4] * n + l[8] * s, this.y = l[1] * t + l[5] * n + l[9] * s, this.z = l[2] * t + l[6] * n + l[10] * s, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, s = e.y, l = e.z, f = t.x, h = t.y, p = t.z;
    return this.x = s * p - l * h, this.y = l * f - n * p, this.z = n * h - s * f, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return sl.copy(this).projectOnVector(e), this.sub(sl);
  }
  reflect(e) {
    return this.sub(sl.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Qn(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, s = this.z - e.z;
    return t * t + n * n + s * s;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const s = Math.sin(t) * e;
    return this.x = s * Math.sin(n), this.y = Math.cos(t) * e, this.z = s * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), s = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = s, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const sl = /* @__PURE__ */ new ce(), du = /* @__PURE__ */ new Ro();
class Po {
  constructor(e = new ce(1 / 0, 1 / 0, 1 / 0), t = new ce(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Ci.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Ci.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Ci.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const l = n.getAttribute("position");
      if (t === !0 && l !== void 0 && e.isInstancedMesh !== !0)
        for (let f = 0, h = l.count; f < h; f++)
          e.isMesh === !0 ? e.getVertexPosition(f, Ci) : Ci.fromBufferAttribute(l, f), Ci.applyMatrix4(e.matrixWorld), this.expandByPoint(Ci);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Yo.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Yo.copy(n.boundingBox)), Yo.applyMatrix4(e.matrixWorld), this.union(Yo);
    }
    const s = e.children;
    for (let l = 0, f = s.length; l < f; l++)
      this.expandByObject(s[l], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Ci), Ci.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(So), Ko.subVectors(this.max, So), ws.subVectors(e.a, So), Cs.subVectors(e.b, So), Rs.subVectors(e.c, So), Er.subVectors(Cs, ws), Tr.subVectors(Rs, Cs), Kr.subVectors(ws, Rs);
    let t = [
      0,
      -Er.z,
      Er.y,
      0,
      -Tr.z,
      Tr.y,
      0,
      -Kr.z,
      Kr.y,
      Er.z,
      0,
      -Er.x,
      Tr.z,
      0,
      -Tr.x,
      Kr.z,
      0,
      -Kr.x,
      -Er.y,
      Er.x,
      0,
      -Tr.y,
      Tr.x,
      0,
      -Kr.y,
      Kr.x,
      0
    ];
    return !ol(t, ws, Cs, Rs, Ko) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !ol(t, ws, Cs, Rs, Ko)) ? !1 : (Zo.crossVectors(Er, Tr), t = [Zo.x, Zo.y, Zo.z], ol(t, ws, Cs, Rs, Ko));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Ci).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Ci).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (er[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), er[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), er[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), er[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), er[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), er[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), er[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), er[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(er), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const er = [
  /* @__PURE__ */ new ce(),
  /* @__PURE__ */ new ce(),
  /* @__PURE__ */ new ce(),
  /* @__PURE__ */ new ce(),
  /* @__PURE__ */ new ce(),
  /* @__PURE__ */ new ce(),
  /* @__PURE__ */ new ce(),
  /* @__PURE__ */ new ce()
], Ci = /* @__PURE__ */ new ce(), Yo = /* @__PURE__ */ new Po(), ws = /* @__PURE__ */ new ce(), Cs = /* @__PURE__ */ new ce(), Rs = /* @__PURE__ */ new ce(), Er = /* @__PURE__ */ new ce(), Tr = /* @__PURE__ */ new ce(), Kr = /* @__PURE__ */ new ce(), So = /* @__PURE__ */ new ce(), Ko = /* @__PURE__ */ new ce(), Zo = /* @__PURE__ */ new ce(), Zr = /* @__PURE__ */ new ce();
function ol(i, e, t, n, s) {
  for (let l = 0, f = i.length - 3; l <= f; l += 3) {
    Zr.fromArray(i, l);
    const h = s.x * Math.abs(Zr.x) + s.y * Math.abs(Zr.y) + s.z * Math.abs(Zr.z), p = e.dot(Zr), g = t.dot(Zr), v = n.dot(Zr);
    if (Math.max(-Math.max(p, g, v), Math.min(p, g, v)) > h)
      return !1;
  }
  return !0;
}
const Xd = /* @__PURE__ */ new Po(), Mo = /* @__PURE__ */ new ce(), al = /* @__PURE__ */ new ce();
class Ac {
  constructor(e = new ce(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Xd.setFromPoints(e).getCenter(n);
    let s = 0;
    for (let l = 0, f = e.length; l < f; l++)
      s = Math.max(s, n.distanceToSquared(e[l]));
    return this.radius = Math.sqrt(s), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    Mo.subVectors(e, this.center);
    const t = Mo.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), s = (n - this.radius) * 0.5;
      this.center.addScaledVector(Mo, s / n), this.radius += s;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (al.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Mo.copy(e.center).add(al)), this.expandByPoint(Mo.copy(e.center).sub(al))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const tr = /* @__PURE__ */ new ce(), ll = /* @__PURE__ */ new ce(), Jo = /* @__PURE__ */ new ce(), Ar = /* @__PURE__ */ new ce(), cl = /* @__PURE__ */ new ce(), Qo = /* @__PURE__ */ new ce(), ul = /* @__PURE__ */ new ce();
class qd {
  constructor(e = new ce(), t = new ce(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, tr)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = tr.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (tr.copy(this.origin).addScaledVector(this.direction, t), tr.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, s) {
    ll.copy(e).add(t).multiplyScalar(0.5), Jo.copy(t).sub(e).normalize(), Ar.copy(this.origin).sub(ll);
    const l = e.distanceTo(t) * 0.5, f = -this.direction.dot(Jo), h = Ar.dot(this.direction), p = -Ar.dot(Jo), g = Ar.lengthSq(), v = Math.abs(1 - f * f);
    let M, b, T, C;
    if (v > 0)
      if (M = f * p - h, b = f * h - p, C = l * v, M >= 0)
        if (b >= -C)
          if (b <= C) {
            const D = 1 / v;
            M *= D, b *= D, T = M * (M + f * b + 2 * h) + b * (f * M + b + 2 * p) + g;
          } else
            b = l, M = Math.max(0, -(f * b + h)), T = -M * M + b * (b + 2 * p) + g;
        else
          b = -l, M = Math.max(0, -(f * b + h)), T = -M * M + b * (b + 2 * p) + g;
      else
        b <= -C ? (M = Math.max(0, -(-f * l + h)), b = M > 0 ? -l : Math.min(Math.max(-l, -p), l), T = -M * M + b * (b + 2 * p) + g) : b <= C ? (M = 0, b = Math.min(Math.max(-l, -p), l), T = b * (b + 2 * p) + g) : (M = Math.max(0, -(f * l + h)), b = M > 0 ? l : Math.min(Math.max(-l, -p), l), T = -M * M + b * (b + 2 * p) + g);
    else
      b = f > 0 ? -l : l, M = Math.max(0, -(f * b + h)), T = -M * M + b * (b + 2 * p) + g;
    return n && n.copy(this.origin).addScaledVector(this.direction, M), s && s.copy(ll).addScaledVector(Jo, b), T;
  }
  intersectSphere(e, t) {
    tr.subVectors(e.center, this.origin);
    const n = tr.dot(this.direction), s = tr.dot(tr) - n * n, l = e.radius * e.radius;
    if (s > l) return null;
    const f = Math.sqrt(l - s), h = n - f, p = n + f;
    return p < 0 ? null : h < 0 ? this.at(p, t) : this.at(h, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, s, l, f, h, p;
    const g = 1 / this.direction.x, v = 1 / this.direction.y, M = 1 / this.direction.z, b = this.origin;
    return g >= 0 ? (n = (e.min.x - b.x) * g, s = (e.max.x - b.x) * g) : (n = (e.max.x - b.x) * g, s = (e.min.x - b.x) * g), v >= 0 ? (l = (e.min.y - b.y) * v, f = (e.max.y - b.y) * v) : (l = (e.max.y - b.y) * v, f = (e.min.y - b.y) * v), n > f || l > s || ((l > n || isNaN(n)) && (n = l), (f < s || isNaN(s)) && (s = f), M >= 0 ? (h = (e.min.z - b.z) * M, p = (e.max.z - b.z) * M) : (h = (e.max.z - b.z) * M, p = (e.min.z - b.z) * M), n > p || h > s) || ((h > n || n !== n) && (n = h), (p < s || s !== s) && (s = p), s < 0) ? null : this.at(n >= 0 ? n : s, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, tr) !== null;
  }
  intersectTriangle(e, t, n, s, l) {
    cl.subVectors(t, e), Qo.subVectors(n, e), ul.crossVectors(cl, Qo);
    let f = this.direction.dot(ul), h;
    if (f > 0) {
      if (s) return null;
      h = 1;
    } else if (f < 0)
      h = -1, f = -f;
    else
      return null;
    Ar.subVectors(this.origin, e);
    const p = h * this.direction.dot(Qo.crossVectors(Ar, Qo));
    if (p < 0)
      return null;
    const g = h * this.direction.dot(cl.cross(Ar));
    if (g < 0 || p + g > f)
      return null;
    const v = -h * Ar.dot(ul);
    return v < 0 ? null : this.at(v / f, l);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class En {
  constructor(e, t, n, s, l, f, h, p, g, v, M, b, T, C, D, x) {
    En.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, s, l, f, h, p, g, v, M, b, T, C, D, x);
  }
  set(e, t, n, s, l, f, h, p, g, v, M, b, T, C, D, x) {
    const _ = this.elements;
    return _[0] = e, _[4] = t, _[8] = n, _[12] = s, _[1] = l, _[5] = f, _[9] = h, _[13] = p, _[2] = g, _[6] = v, _[10] = M, _[14] = b, _[3] = T, _[7] = C, _[11] = D, _[15] = x, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new En().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, s = 1 / Ps.setFromMatrixColumn(e, 0).length(), l = 1 / Ps.setFromMatrixColumn(e, 1).length(), f = 1 / Ps.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * s, t[1] = n[1] * s, t[2] = n[2] * s, t[3] = 0, t[4] = n[4] * l, t[5] = n[5] * l, t[6] = n[6] * l, t[7] = 0, t[8] = n[8] * f, t[9] = n[9] * f, t[10] = n[10] * f, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, s = e.y, l = e.z, f = Math.cos(n), h = Math.sin(n), p = Math.cos(s), g = Math.sin(s), v = Math.cos(l), M = Math.sin(l);
    if (e.order === "XYZ") {
      const b = f * v, T = f * M, C = h * v, D = h * M;
      t[0] = p * v, t[4] = -p * M, t[8] = g, t[1] = T + C * g, t[5] = b - D * g, t[9] = -h * p, t[2] = D - b * g, t[6] = C + T * g, t[10] = f * p;
    } else if (e.order === "YXZ") {
      const b = p * v, T = p * M, C = g * v, D = g * M;
      t[0] = b + D * h, t[4] = C * h - T, t[8] = f * g, t[1] = f * M, t[5] = f * v, t[9] = -h, t[2] = T * h - C, t[6] = D + b * h, t[10] = f * p;
    } else if (e.order === "ZXY") {
      const b = p * v, T = p * M, C = g * v, D = g * M;
      t[0] = b - D * h, t[4] = -f * M, t[8] = C + T * h, t[1] = T + C * h, t[5] = f * v, t[9] = D - b * h, t[2] = -f * g, t[6] = h, t[10] = f * p;
    } else if (e.order === "ZYX") {
      const b = f * v, T = f * M, C = h * v, D = h * M;
      t[0] = p * v, t[4] = C * g - T, t[8] = b * g + D, t[1] = p * M, t[5] = D * g + b, t[9] = T * g - C, t[2] = -g, t[6] = h * p, t[10] = f * p;
    } else if (e.order === "YZX") {
      const b = f * p, T = f * g, C = h * p, D = h * g;
      t[0] = p * v, t[4] = D - b * M, t[8] = C * M + T, t[1] = M, t[5] = f * v, t[9] = -h * v, t[2] = -g * v, t[6] = T * M + C, t[10] = b - D * M;
    } else if (e.order === "XZY") {
      const b = f * p, T = f * g, C = h * p, D = h * g;
      t[0] = p * v, t[4] = -M, t[8] = g * v, t[1] = b * M + D, t[5] = f * v, t[9] = T * M - C, t[2] = C * M - T, t[6] = h * v, t[10] = D * M + b;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(jd, e, $d);
  }
  lookAt(e, t, n) {
    const s = this.elements;
    return ci.subVectors(e, t), ci.lengthSq() === 0 && (ci.z = 1), ci.normalize(), wr.crossVectors(n, ci), wr.lengthSq() === 0 && (Math.abs(n.z) === 1 ? ci.x += 1e-4 : ci.z += 1e-4, ci.normalize(), wr.crossVectors(n, ci)), wr.normalize(), ea.crossVectors(ci, wr), s[0] = wr.x, s[4] = ea.x, s[8] = ci.x, s[1] = wr.y, s[5] = ea.y, s[9] = ci.y, s[2] = wr.z, s[6] = ea.z, s[10] = ci.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, s = t.elements, l = this.elements, f = n[0], h = n[4], p = n[8], g = n[12], v = n[1], M = n[5], b = n[9], T = n[13], C = n[2], D = n[6], x = n[10], _ = n[14], B = n[3], U = n[7], z = n[11], le = n[15], $ = s[0], c = s[4], oe = s[8], xe = s[12], w = s[1], I = s[5], pe = s[9], J = s[13], de = s[2], Ee = s[6], ie = s[10], Te = s[14], fe = s[3], Fe = s[7], ke = s[11], Z = s[15];
    return l[0] = f * $ + h * w + p * de + g * fe, l[4] = f * c + h * I + p * Ee + g * Fe, l[8] = f * oe + h * pe + p * ie + g * ke, l[12] = f * xe + h * J + p * Te + g * Z, l[1] = v * $ + M * w + b * de + T * fe, l[5] = v * c + M * I + b * Ee + T * Fe, l[9] = v * oe + M * pe + b * ie + T * ke, l[13] = v * xe + M * J + b * Te + T * Z, l[2] = C * $ + D * w + x * de + _ * fe, l[6] = C * c + D * I + x * Ee + _ * Fe, l[10] = C * oe + D * pe + x * ie + _ * ke, l[14] = C * xe + D * J + x * Te + _ * Z, l[3] = B * $ + U * w + z * de + le * fe, l[7] = B * c + U * I + z * Ee + le * Fe, l[11] = B * oe + U * pe + z * ie + le * ke, l[15] = B * xe + U * J + z * Te + le * Z, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], s = e[8], l = e[12], f = e[1], h = e[5], p = e[9], g = e[13], v = e[2], M = e[6], b = e[10], T = e[14], C = e[3], D = e[7], x = e[11], _ = e[15];
    return C * (+l * p * M - s * g * M - l * h * b + n * g * b + s * h * T - n * p * T) + D * (+t * p * T - t * g * b + l * f * b - s * f * T + s * g * v - l * p * v) + x * (+t * g * M - t * h * T - l * f * M + n * f * T + l * h * v - n * g * v) + _ * (-s * h * v - t * p * M + t * h * b + s * f * M - n * f * b + n * p * v);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const s = this.elements;
    return e.isVector3 ? (s[12] = e.x, s[13] = e.y, s[14] = e.z) : (s[12] = e, s[13] = t, s[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], l = e[3], f = e[4], h = e[5], p = e[6], g = e[7], v = e[8], M = e[9], b = e[10], T = e[11], C = e[12], D = e[13], x = e[14], _ = e[15], B = M * x * g - D * b * g + D * p * T - h * x * T - M * p * _ + h * b * _, U = C * b * g - v * x * g - C * p * T + f * x * T + v * p * _ - f * b * _, z = v * D * g - C * M * g + C * h * T - f * D * T - v * h * _ + f * M * _, le = C * M * p - v * D * p - C * h * b + f * D * b + v * h * x - f * M * x, $ = t * B + n * U + s * z + l * le;
    if ($ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const c = 1 / $;
    return e[0] = B * c, e[1] = (D * b * l - M * x * l - D * s * T + n * x * T + M * s * _ - n * b * _) * c, e[2] = (h * x * l - D * p * l + D * s * g - n * x * g - h * s * _ + n * p * _) * c, e[3] = (M * p * l - h * b * l - M * s * g + n * b * g + h * s * T - n * p * T) * c, e[4] = U * c, e[5] = (v * x * l - C * b * l + C * s * T - t * x * T - v * s * _ + t * b * _) * c, e[6] = (C * p * l - f * x * l - C * s * g + t * x * g + f * s * _ - t * p * _) * c, e[7] = (f * b * l - v * p * l + v * s * g - t * b * g - f * s * T + t * p * T) * c, e[8] = z * c, e[9] = (C * M * l - v * D * l - C * n * T + t * D * T + v * n * _ - t * M * _) * c, e[10] = (f * D * l - C * h * l + C * n * g - t * D * g - f * n * _ + t * h * _) * c, e[11] = (v * h * l - f * M * l - v * n * g + t * M * g + f * n * T - t * h * T) * c, e[12] = le * c, e[13] = (v * D * s - C * M * s + C * n * b - t * D * b - v * n * x + t * M * x) * c, e[14] = (C * h * s - f * D * s - C * n * p + t * D * p + f * n * x - t * h * x) * c, e[15] = (f * M * s - v * h * s + v * n * p - t * M * p - f * n * b + t * h * b) * c, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, s = e.y, l = e.z;
    return t[0] *= n, t[4] *= s, t[8] *= l, t[1] *= n, t[5] *= s, t[9] *= l, t[2] *= n, t[6] *= s, t[10] *= l, t[3] *= n, t[7] *= s, t[11] *= l, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], s = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, s));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), s = Math.sin(t), l = 1 - n, f = e.x, h = e.y, p = e.z, g = l * f, v = l * h;
    return this.set(
      g * f + n,
      g * h - s * p,
      g * p + s * h,
      0,
      g * h + s * p,
      v * h + n,
      v * p - s * f,
      0,
      g * p - s * h,
      v * p + s * f,
      l * p * p + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, s, l, f) {
    return this.set(
      1,
      n,
      l,
      0,
      e,
      1,
      f,
      0,
      t,
      s,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const s = this.elements, l = t._x, f = t._y, h = t._z, p = t._w, g = l + l, v = f + f, M = h + h, b = l * g, T = l * v, C = l * M, D = f * v, x = f * M, _ = h * M, B = p * g, U = p * v, z = p * M, le = n.x, $ = n.y, c = n.z;
    return s[0] = (1 - (D + _)) * le, s[1] = (T + z) * le, s[2] = (C - U) * le, s[3] = 0, s[4] = (T - z) * $, s[5] = (1 - (b + _)) * $, s[6] = (x + B) * $, s[7] = 0, s[8] = (C + U) * c, s[9] = (x - B) * c, s[10] = (1 - (b + D)) * c, s[11] = 0, s[12] = e.x, s[13] = e.y, s[14] = e.z, s[15] = 1, this;
  }
  decompose(e, t, n) {
    const s = this.elements;
    let l = Ps.set(s[0], s[1], s[2]).length();
    const f = Ps.set(s[4], s[5], s[6]).length(), h = Ps.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (l = -l), e.x = s[12], e.y = s[13], e.z = s[14], Ri.copy(this);
    const g = 1 / l, v = 1 / f, M = 1 / h;
    return Ri.elements[0] *= g, Ri.elements[1] *= g, Ri.elements[2] *= g, Ri.elements[4] *= v, Ri.elements[5] *= v, Ri.elements[6] *= v, Ri.elements[8] *= M, Ri.elements[9] *= M, Ri.elements[10] *= M, t.setFromRotationMatrix(Ri), n.x = l, n.y = f, n.z = h, this;
  }
  makePerspective(e, t, n, s, l, f, h = lr) {
    const p = this.elements, g = 2 * l / (t - e), v = 2 * l / (n - s), M = (t + e) / (t - e), b = (n + s) / (n - s);
    let T, C;
    if (h === lr)
      T = -(f + l) / (f - l), C = -2 * f * l / (f - l);
    else if (h === Ca)
      T = -f / (f - l), C = -f * l / (f - l);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + h);
    return p[0] = g, p[4] = 0, p[8] = M, p[12] = 0, p[1] = 0, p[5] = v, p[9] = b, p[13] = 0, p[2] = 0, p[6] = 0, p[10] = T, p[14] = C, p[3] = 0, p[7] = 0, p[11] = -1, p[15] = 0, this;
  }
  makeOrthographic(e, t, n, s, l, f, h = lr) {
    const p = this.elements, g = 1 / (t - e), v = 1 / (n - s), M = 1 / (f - l), b = (t + e) * g, T = (n + s) * v;
    let C, D;
    if (h === lr)
      C = (f + l) * M, D = -2 * M;
    else if (h === Ca)
      C = l * M, D = -1 * M;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + h);
    return p[0] = 2 * g, p[4] = 0, p[8] = 0, p[12] = -b, p[1] = 0, p[5] = 2 * v, p[9] = 0, p[13] = -T, p[2] = 0, p[6] = 0, p[10] = D, p[14] = -C, p[3] = 0, p[7] = 0, p[11] = 0, p[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let s = 0; s < 16; s++)
      if (t[s] !== n[s]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Ps = /* @__PURE__ */ new ce(), Ri = /* @__PURE__ */ new En(), jd = /* @__PURE__ */ new ce(0, 0, 0), $d = /* @__PURE__ */ new ce(1, 1, 1), wr = /* @__PURE__ */ new ce(), ea = /* @__PURE__ */ new ce(), ci = /* @__PURE__ */ new ce(), pu = /* @__PURE__ */ new En(), mu = /* @__PURE__ */ new Ro();
class ur {
  constructor(e = 0, t = 0, n = 0, s = ur.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = s;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, s = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const s = e.elements, l = s[0], f = s[4], h = s[8], p = s[1], g = s[5], v = s[9], M = s[2], b = s[6], T = s[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Qn(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(-v, T), this._z = Math.atan2(-f, l)) : (this._x = Math.atan2(b, g), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Qn(v, -1, 1)), Math.abs(v) < 0.9999999 ? (this._y = Math.atan2(h, T), this._z = Math.atan2(p, g)) : (this._y = Math.atan2(-M, l), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Qn(b, -1, 1)), Math.abs(b) < 0.9999999 ? (this._y = Math.atan2(-M, T), this._z = Math.atan2(-f, g)) : (this._y = 0, this._z = Math.atan2(p, l));
        break;
      case "ZYX":
        this._y = Math.asin(-Qn(M, -1, 1)), Math.abs(M) < 0.9999999 ? (this._x = Math.atan2(b, T), this._z = Math.atan2(p, l)) : (this._x = 0, this._z = Math.atan2(-f, g));
        break;
      case "YZX":
        this._z = Math.asin(Qn(p, -1, 1)), Math.abs(p) < 0.9999999 ? (this._x = Math.atan2(-v, g), this._y = Math.atan2(-M, l)) : (this._x = 0, this._y = Math.atan2(h, T));
        break;
      case "XZY":
        this._z = Math.asin(-Qn(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(b, g), this._y = Math.atan2(h, l)) : (this._x = Math.atan2(-v, T), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return pu.makeRotationFromQuaternion(e), this.setFromRotationMatrix(pu, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return mu.setFromEuler(this), this.setFromQuaternion(mu, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
ur.DEFAULT_ORDER = "XYZ";
class Sf {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Yd = 0;
const gu = /* @__PURE__ */ new ce(), Ls = /* @__PURE__ */ new Ro(), nr = /* @__PURE__ */ new En(), ta = /* @__PURE__ */ new ce(), bo = /* @__PURE__ */ new ce(), Kd = /* @__PURE__ */ new ce(), Zd = /* @__PURE__ */ new Ro(), _u = /* @__PURE__ */ new ce(1, 0, 0), vu = /* @__PURE__ */ new ce(0, 1, 0), xu = /* @__PURE__ */ new ce(0, 0, 1), yu = { type: "added" }, Jd = { type: "removed" }, Ds = { type: "childadded", child: null }, fl = { type: "childremoved", child: null };
class fi extends Zs {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Yd++ }), this.uuid = Co(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = fi.DEFAULT_UP.clone();
    const e = new ce(), t = new ur(), n = new Ro(), s = new ce(1, 1, 1);
    function l() {
      n.setFromEuler(t, !1);
    }
    function f() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(l), n._onChange(f), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: s
      },
      modelViewMatrix: {
        value: new En()
      },
      normalMatrix: {
        value: new Rt()
      }
    }), this.matrix = new En(), this.matrixWorld = new En(), this.matrixAutoUpdate = fi.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Sf(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Ls.setFromAxisAngle(e, t), this.quaternion.multiply(Ls), this;
  }
  rotateOnWorldAxis(e, t) {
    return Ls.setFromAxisAngle(e, t), this.quaternion.premultiply(Ls), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(_u, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(vu, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(xu, e);
  }
  translateOnAxis(e, t) {
    return gu.copy(e).applyQuaternion(this.quaternion), this.position.add(gu.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(_u, e);
  }
  translateY(e) {
    return this.translateOnAxis(vu, e);
  }
  translateZ(e) {
    return this.translateOnAxis(xu, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(nr.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? ta.copy(e) : ta.set(e, t, n);
    const s = this.parent;
    this.updateWorldMatrix(!0, !1), bo.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? nr.lookAt(bo, ta, this.up) : nr.lookAt(ta, bo, this.up), this.quaternion.setFromRotationMatrix(nr), s && (nr.extractRotation(s.matrixWorld), Ls.setFromRotationMatrix(nr), this.quaternion.premultiply(Ls.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(yu), Ds.child = e, this.dispatchEvent(Ds), Ds.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Jd), fl.child = e, this.dispatchEvent(fl), fl.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), nr.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), nr.multiply(e.parent.matrixWorld)), e.applyMatrix4(nr), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(yu), Ds.child = e, this.dispatchEvent(Ds), Ds.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, s = this.children.length; n < s; n++) {
      const f = this.children[n].getObjectByProperty(e, t);
      if (f !== void 0)
        return f;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const s = this.children;
    for (let l = 0, f = s.length; l < f; l++)
      s[l].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(bo, e, Kd), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(bo, Zd, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++)
      t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
      const s = this.children;
      for (let l = 0, f = s.length; l < f; l++)
        s[l].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const s = {};
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === !0 && (s.castShadow = !0), this.receiveShadow === !0 && (s.receiveShadow = !0), this.visible === !1 && (s.visible = !1), this.frustumCulled === !1 && (s.frustumCulled = !1), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.visibility = this._visibility, s.active = this._active, s.bounds = this._bounds.map((h) => ({
      boxInitialized: h.boxInitialized,
      boxMin: h.box.min.toArray(),
      boxMax: h.box.max.toArray(),
      sphereInitialized: h.sphereInitialized,
      sphereRadius: h.sphere.radius,
      sphereCenter: h.sphere.center.toArray()
    })), s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.geometryCount = this._geometryCount, s.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (s.boundingSphere = {
      center: s.boundingSphere.center.toArray(),
      radius: s.boundingSphere.radius
    }), this.boundingBox !== null && (s.boundingBox = {
      min: s.boundingBox.min.toArray(),
      max: s.boundingBox.max.toArray()
    }));
    function l(h, p) {
      return h[p.uuid] === void 0 && (h[p.uuid] = p.toJSON(e)), p.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (s.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = l(e.geometries, this.geometry);
      const h = this.geometry.parameters;
      if (h !== void 0 && h.shapes !== void 0) {
        const p = h.shapes;
        if (Array.isArray(p))
          for (let g = 0, v = p.length; g < v; g++) {
            const M = p[g];
            l(e.shapes, M);
          }
        else
          l(e.shapes, p);
      }
    }
    if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (l(e.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const h = [];
        for (let p = 0, g = this.material.length; p < g; p++)
          h.push(l(e.materials, this.material[p]));
        s.material = h;
      } else
        s.material = l(e.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let h = 0; h < this.children.length; h++)
        s.children.push(this.children[h].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let h = 0; h < this.animations.length; h++) {
        const p = this.animations[h];
        s.animations.push(l(e.animations, p));
      }
    }
    if (t) {
      const h = f(e.geometries), p = f(e.materials), g = f(e.textures), v = f(e.images), M = f(e.shapes), b = f(e.skeletons), T = f(e.animations), C = f(e.nodes);
      h.length > 0 && (n.geometries = h), p.length > 0 && (n.materials = p), g.length > 0 && (n.textures = g), v.length > 0 && (n.images = v), M.length > 0 && (n.shapes = M), b.length > 0 && (n.skeletons = b), T.length > 0 && (n.animations = T), C.length > 0 && (n.nodes = C);
    }
    return n.object = s, n;
    function f(h) {
      const p = [];
      for (const g in h) {
        const v = h[g];
        delete v.metadata, p.push(v);
      }
      return p;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const s = e.children[n];
        this.add(s.clone());
      }
    return this;
  }
}
fi.DEFAULT_UP = /* @__PURE__ */ new ce(0, 1, 0);
fi.DEFAULT_MATRIX_AUTO_UPDATE = !0;
fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Pi = /* @__PURE__ */ new ce(), ir = /* @__PURE__ */ new ce(), hl = /* @__PURE__ */ new ce(), rr = /* @__PURE__ */ new ce(), Is = /* @__PURE__ */ new ce(), Ns = /* @__PURE__ */ new ce(), Su = /* @__PURE__ */ new ce(), dl = /* @__PURE__ */ new ce(), pl = /* @__PURE__ */ new ce(), ml = /* @__PURE__ */ new ce(), gl = /* @__PURE__ */ new Mn(), _l = /* @__PURE__ */ new Mn(), vl = /* @__PURE__ */ new Mn();
class Di {
  constructor(e = new ce(), t = new ce(), n = new ce()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, s) {
    s.subVectors(n, t), Pi.subVectors(e, t), s.cross(Pi);
    const l = s.lengthSq();
    return l > 0 ? s.multiplyScalar(1 / Math.sqrt(l)) : s.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, s, l) {
    Pi.subVectors(s, t), ir.subVectors(n, t), hl.subVectors(e, t);
    const f = Pi.dot(Pi), h = Pi.dot(ir), p = Pi.dot(hl), g = ir.dot(ir), v = ir.dot(hl), M = f * g - h * h;
    if (M === 0)
      return l.set(0, 0, 0), null;
    const b = 1 / M, T = (g * p - h * v) * b, C = (f * v - h * p) * b;
    return l.set(1 - T - C, C, T);
  }
  static containsPoint(e, t, n, s) {
    return this.getBarycoord(e, t, n, s, rr) === null ? !1 : rr.x >= 0 && rr.y >= 0 && rr.x + rr.y <= 1;
  }
  static getInterpolation(e, t, n, s, l, f, h, p) {
    return this.getBarycoord(e, t, n, s, rr) === null ? (p.x = 0, p.y = 0, "z" in p && (p.z = 0), "w" in p && (p.w = 0), null) : (p.setScalar(0), p.addScaledVector(l, rr.x), p.addScaledVector(f, rr.y), p.addScaledVector(h, rr.z), p);
  }
  static getInterpolatedAttribute(e, t, n, s, l, f) {
    return gl.setScalar(0), _l.setScalar(0), vl.setScalar(0), gl.fromBufferAttribute(e, t), _l.fromBufferAttribute(e, n), vl.fromBufferAttribute(e, s), f.setScalar(0), f.addScaledVector(gl, l.x), f.addScaledVector(_l, l.y), f.addScaledVector(vl, l.z), f;
  }
  static isFrontFacing(e, t, n, s) {
    return Pi.subVectors(n, t), ir.subVectors(e, t), Pi.cross(ir).dot(s) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, s) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[s]), this;
  }
  setFromAttributeAndIndices(e, t, n, s) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, s), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Pi.subVectors(this.c, this.b), ir.subVectors(this.a, this.b), Pi.cross(ir).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Di.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Di.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, s, l) {
    return Di.getInterpolation(e, this.a, this.b, this.c, t, n, s, l);
  }
  containsPoint(e) {
    return Di.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Di.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, s = this.b, l = this.c;
    let f, h;
    Is.subVectors(s, n), Ns.subVectors(l, n), dl.subVectors(e, n);
    const p = Is.dot(dl), g = Ns.dot(dl);
    if (p <= 0 && g <= 0)
      return t.copy(n);
    pl.subVectors(e, s);
    const v = Is.dot(pl), M = Ns.dot(pl);
    if (v >= 0 && M <= v)
      return t.copy(s);
    const b = p * M - v * g;
    if (b <= 0 && p >= 0 && v <= 0)
      return f = p / (p - v), t.copy(n).addScaledVector(Is, f);
    ml.subVectors(e, l);
    const T = Is.dot(ml), C = Ns.dot(ml);
    if (C >= 0 && T <= C)
      return t.copy(l);
    const D = T * g - p * C;
    if (D <= 0 && g >= 0 && C <= 0)
      return h = g / (g - C), t.copy(n).addScaledVector(Ns, h);
    const x = v * C - T * M;
    if (x <= 0 && M - v >= 0 && T - C >= 0)
      return Su.subVectors(l, s), h = (M - v) / (M - v + (T - C)), t.copy(s).addScaledVector(Su, h);
    const _ = 1 / (x + D + b);
    return f = D * _, h = b * _, t.copy(n).addScaledVector(Is, f).addScaledVector(Ns, h);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Mf = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, Cr = { h: 0, s: 0, l: 0 }, na = { h: 0, s: 0, l: 0 };
function xl(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class Yt {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const s = e;
      s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Hi) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, en.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, s = en.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, en.toWorkingColorSpace(this, s), this;
  }
  setHSL(e, t, n, s = en.workingColorSpace) {
    if (e = Nd(e, 1), t = Qn(t, 0, 1), n = Qn(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const l = n <= 0.5 ? n * (1 + t) : n + t - n * t, f = 2 * n - l;
      this.r = xl(f, l, e + 1 / 3), this.g = xl(f, l, e), this.b = xl(f, l, e - 1 / 3);
    }
    return en.toWorkingColorSpace(this, s), this;
  }
  setStyle(e, t = Hi) {
    function n(l) {
      l !== void 0 && parseFloat(l) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let s;
    if (s = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let l;
      const f = s[1], h = s[2];
      switch (f) {
        case "rgb":
        case "rgba":
          if (l = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))
            return n(l[4]), this.setRGB(
              Math.min(255, parseInt(l[1], 10)) / 255,
              Math.min(255, parseInt(l[2], 10)) / 255,
              Math.min(255, parseInt(l[3], 10)) / 255,
              t
            );
          if (l = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))
            return n(l[4]), this.setRGB(
              Math.min(100, parseInt(l[1], 10)) / 100,
              Math.min(100, parseInt(l[2], 10)) / 100,
              Math.min(100, parseInt(l[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (l = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))
            return n(l[4]), this.setHSL(
              parseFloat(l[1]) / 360,
              parseFloat(l[2]) / 100,
              parseFloat(l[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (s = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const l = s[1], f = l.length;
      if (f === 3)
        return this.setRGB(
          parseInt(l.charAt(0), 16) / 15,
          parseInt(l.charAt(1), 16) / 15,
          parseInt(l.charAt(2), 16) / 15,
          t
        );
      if (f === 6)
        return this.setHex(parseInt(l, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Hi) {
    const n = Mf[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Vs(e.r), this.g = Vs(e.g), this.b = Vs(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = il(e.r), this.g = il(e.g), this.b = il(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Hi) {
    return en.fromWorkingColorSpace(kn.copy(this), e), Math.round(Qn(kn.r * 255, 0, 255)) * 65536 + Math.round(Qn(kn.g * 255, 0, 255)) * 256 + Math.round(Qn(kn.b * 255, 0, 255));
  }
  getHexString(e = Hi) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = en.workingColorSpace) {
    en.fromWorkingColorSpace(kn.copy(this), t);
    const n = kn.r, s = kn.g, l = kn.b, f = Math.max(n, s, l), h = Math.min(n, s, l);
    let p, g;
    const v = (h + f) / 2;
    if (h === f)
      p = 0, g = 0;
    else {
      const M = f - h;
      switch (g = v <= 0.5 ? M / (f + h) : M / (2 - f - h), f) {
        case n:
          p = (s - l) / M + (s < l ? 6 : 0);
          break;
        case s:
          p = (l - n) / M + 2;
          break;
        case l:
          p = (n - s) / M + 4;
          break;
      }
      p /= 6;
    }
    return e.h = p, e.s = g, e.l = v, e;
  }
  getRGB(e, t = en.workingColorSpace) {
    return en.fromWorkingColorSpace(kn.copy(this), t), e.r = kn.r, e.g = kn.g, e.b = kn.b, e;
  }
  getStyle(e = Hi) {
    en.fromWorkingColorSpace(kn.copy(this), e);
    const t = kn.r, n = kn.g, s = kn.b;
    return e !== Hi ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Cr), this.setHSL(Cr.h + e, Cr.s + t, Cr.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(Cr), e.getHSL(na);
    const n = tl(Cr.h, na.h, t), s = tl(Cr.s, na.s, t), l = tl(Cr.l, na.l, t);
    return this.setHSL(n, s, l), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, s = this.b, l = e.elements;
    return this.r = l[0] * t + l[3] * n + l[6] * s, this.g = l[1] * t + l[4] * n + l[7] * s, this.b = l[2] * t + l[5] * n + l[8] * s, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const kn = /* @__PURE__ */ new Yt();
Yt.NAMES = Mf;
let Qd = 0;
class Da extends Zs {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Qd++ }), this.uuid = Co(), this.name = "", this.type = "Material", this.blending = ks, this.side = Ir, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Ll, this.blendDst = Dl, this.blendEquation = rs, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Yt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Xs, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = au, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Ts, this.stencilZFail = Ts, this.stencilZPass = Ts, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  // onBeforeRender and onBeforeCompile only supported in WebGLRenderer
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const s = this[t];
        if (s === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        s && s.isColor ? s.set(n) : s && s.isVector3 && n && n.isVector3 ? s.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ks && (n.blending = this.blending), this.side !== Ir && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== Ll && (n.blendSrc = this.blendSrc), this.blendDst !== Dl && (n.blendDst = this.blendDst), this.blendEquation !== rs && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Xs && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== au && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Ts && (n.stencilFail = this.stencilFail), this.stencilZFail !== Ts && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Ts && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function s(l) {
      const f = [];
      for (const h in l) {
        const p = l[h];
        delete p.metadata, f.push(p);
      }
      return f;
    }
    if (t) {
      const l = s(e.textures), f = s(e.images);
      l.length > 0 && (n.textures = l), f.length > 0 && (n.images = f);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const s = t.length;
      n = new Array(s);
      for (let l = 0; l !== s; ++l)
        n[l] = t[l].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class bf extends Da {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Yt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new ur(), this.combine = sf, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const bn = /* @__PURE__ */ new ce(), ia = /* @__PURE__ */ new Qt();
class Wi {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = lu, this.updateRanges = [], this.gpuType = ar, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let s = 0, l = this.itemSize; s < l; s++)
      this.array[e + s] = t.array[n + s];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        ia.fromBufferAttribute(this, t), ia.applyMatrix3(e), this.setXY(t, ia.x, ia.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        bn.fromBufferAttribute(this, t), bn.applyMatrix3(e), this.setXYZ(t, bn.x, bn.y, bn.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      bn.fromBufferAttribute(this, t), bn.applyMatrix4(e), this.setXYZ(t, bn.x, bn.y, bn.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      bn.fromBufferAttribute(this, t), bn.applyNormalMatrix(e), this.setXYZ(t, bn.x, bn.y, bn.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      bn.fromBufferAttribute(this, t), bn.transformDirection(e), this.setXYZ(t, bn.x, bn.y, bn.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = xo(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Jn(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = xo(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Jn(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = xo(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Jn(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = xo(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Jn(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = xo(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Jn(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Jn(t, this.array), n = Jn(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, s) {
    return e *= this.itemSize, this.normalized && (t = Jn(t, this.array), n = Jn(n, this.array), s = Jn(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = s, this;
  }
  setXYZW(e, t, n, s, l) {
    return e *= this.itemSize, this.normalized && (t = Jn(t, this.array), n = Jn(n, this.array), s = Jn(s, this.array), l = Jn(l, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = s, this.array[e + 3] = l, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== lu && (e.usage = this.usage), e;
  }
}
class Ef extends Wi {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Tf extends Wi {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class ls extends Wi {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let ep = 0;
const yi = /* @__PURE__ */ new En(), yl = /* @__PURE__ */ new fi(), Us = /* @__PURE__ */ new ce(), ui = /* @__PURE__ */ new Po(), Eo = /* @__PURE__ */ new Po(), Un = /* @__PURE__ */ new ce();
class fs extends Zs {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: ep++ }), this.uuid = Co(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (vf(e) ? Tf : Ef)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const l = new Rt().getNormalMatrix(e);
      n.applyNormalMatrix(l), n.needsUpdate = !0;
    }
    const s = this.attributes.tangent;
    return s !== void 0 && (s.transformDirection(e), s.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return yi.makeRotationFromQuaternion(e), this.applyMatrix4(yi), this;
  }
  rotateX(e) {
    return yi.makeRotationX(e), this.applyMatrix4(yi), this;
  }
  rotateY(e) {
    return yi.makeRotationY(e), this.applyMatrix4(yi), this;
  }
  rotateZ(e) {
    return yi.makeRotationZ(e), this.applyMatrix4(yi), this;
  }
  translate(e, t, n) {
    return yi.makeTranslation(e, t, n), this.applyMatrix4(yi), this;
  }
  scale(e, t, n) {
    return yi.makeScale(e, t, n), this.applyMatrix4(yi), this;
  }
  lookAt(e) {
    return yl.lookAt(e), yl.updateMatrix(), this.applyMatrix4(yl.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Us).negate(), this.translate(Us.x, Us.y, Us.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, s = e.length; n < s; n++) {
      const l = e[n];
      t.push(l.x, l.y, l.z || 0);
    }
    return this.setAttribute("position", new ls(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Po());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new ce(-1 / 0, -1 / 0, -1 / 0),
        new ce(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, s = t.length; n < s; n++) {
          const l = t[n];
          ui.setFromBufferAttribute(l), this.morphTargetsRelative ? (Un.addVectors(this.boundingBox.min, ui.min), this.boundingBox.expandByPoint(Un), Un.addVectors(this.boundingBox.max, ui.max), this.boundingBox.expandByPoint(Un)) : (this.boundingBox.expandByPoint(ui.min), this.boundingBox.expandByPoint(ui.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ac());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new ce(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (ui.setFromBufferAttribute(e), t)
        for (let l = 0, f = t.length; l < f; l++) {
          const h = t[l];
          Eo.setFromBufferAttribute(h), this.morphTargetsRelative ? (Un.addVectors(ui.min, Eo.min), ui.expandByPoint(Un), Un.addVectors(ui.max, Eo.max), ui.expandByPoint(Un)) : (ui.expandByPoint(Eo.min), ui.expandByPoint(Eo.max));
        }
      ui.getCenter(n);
      let s = 0;
      for (let l = 0, f = e.count; l < f; l++)
        Un.fromBufferAttribute(e, l), s = Math.max(s, n.distanceToSquared(Un));
      if (t)
        for (let l = 0, f = t.length; l < f; l++) {
          const h = t[l], p = this.morphTargetsRelative;
          for (let g = 0, v = h.count; g < v; g++)
            Un.fromBufferAttribute(h, g), p && (Us.fromBufferAttribute(e, g), Un.add(Us)), s = Math.max(s, n.distanceToSquared(Un));
        }
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, s = t.normal, l = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Wi(new Float32Array(4 * n.count), 4));
    const f = this.getAttribute("tangent"), h = [], p = [];
    for (let oe = 0; oe < n.count; oe++)
      h[oe] = new ce(), p[oe] = new ce();
    const g = new ce(), v = new ce(), M = new ce(), b = new Qt(), T = new Qt(), C = new Qt(), D = new ce(), x = new ce();
    function _(oe, xe, w) {
      g.fromBufferAttribute(n, oe), v.fromBufferAttribute(n, xe), M.fromBufferAttribute(n, w), b.fromBufferAttribute(l, oe), T.fromBufferAttribute(l, xe), C.fromBufferAttribute(l, w), v.sub(g), M.sub(g), T.sub(b), C.sub(b);
      const I = 1 / (T.x * C.y - C.x * T.y);
      isFinite(I) && (D.copy(v).multiplyScalar(C.y).addScaledVector(M, -T.y).multiplyScalar(I), x.copy(M).multiplyScalar(T.x).addScaledVector(v, -C.x).multiplyScalar(I), h[oe].add(D), h[xe].add(D), h[w].add(D), p[oe].add(x), p[xe].add(x), p[w].add(x));
    }
    let B = this.groups;
    B.length === 0 && (B = [{
      start: 0,
      count: e.count
    }]);
    for (let oe = 0, xe = B.length; oe < xe; ++oe) {
      const w = B[oe], I = w.start, pe = w.count;
      for (let J = I, de = I + pe; J < de; J += 3)
        _(
          e.getX(J + 0),
          e.getX(J + 1),
          e.getX(J + 2)
        );
    }
    const U = new ce(), z = new ce(), le = new ce(), $ = new ce();
    function c(oe) {
      le.fromBufferAttribute(s, oe), $.copy(le);
      const xe = h[oe];
      U.copy(xe), U.sub(le.multiplyScalar(le.dot(xe))).normalize(), z.crossVectors($, xe);
      const I = z.dot(p[oe]) < 0 ? -1 : 1;
      f.setXYZW(oe, U.x, U.y, U.z, I);
    }
    for (let oe = 0, xe = B.length; oe < xe; ++oe) {
      const w = B[oe], I = w.start, pe = w.count;
      for (let J = I, de = I + pe; J < de; J += 3)
        c(e.getX(J + 0)), c(e.getX(J + 1)), c(e.getX(J + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Wi(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let b = 0, T = n.count; b < T; b++)
          n.setXYZ(b, 0, 0, 0);
      const s = new ce(), l = new ce(), f = new ce(), h = new ce(), p = new ce(), g = new ce(), v = new ce(), M = new ce();
      if (e)
        for (let b = 0, T = e.count; b < T; b += 3) {
          const C = e.getX(b + 0), D = e.getX(b + 1), x = e.getX(b + 2);
          s.fromBufferAttribute(t, C), l.fromBufferAttribute(t, D), f.fromBufferAttribute(t, x), v.subVectors(f, l), M.subVectors(s, l), v.cross(M), h.fromBufferAttribute(n, C), p.fromBufferAttribute(n, D), g.fromBufferAttribute(n, x), h.add(v), p.add(v), g.add(v), n.setXYZ(C, h.x, h.y, h.z), n.setXYZ(D, p.x, p.y, p.z), n.setXYZ(x, g.x, g.y, g.z);
        }
      else
        for (let b = 0, T = t.count; b < T; b += 3)
          s.fromBufferAttribute(t, b + 0), l.fromBufferAttribute(t, b + 1), f.fromBufferAttribute(t, b + 2), v.subVectors(f, l), M.subVectors(s, l), v.cross(M), n.setXYZ(b + 0, v.x, v.y, v.z), n.setXYZ(b + 1, v.x, v.y, v.z), n.setXYZ(b + 2, v.x, v.y, v.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      Un.fromBufferAttribute(e, t), Un.normalize(), e.setXYZ(t, Un.x, Un.y, Un.z);
  }
  toNonIndexed() {
    function e(h, p) {
      const g = h.array, v = h.itemSize, M = h.normalized, b = new g.constructor(p.length * v);
      let T = 0, C = 0;
      for (let D = 0, x = p.length; D < x; D++) {
        h.isInterleavedBufferAttribute ? T = p[D] * h.data.stride + h.offset : T = p[D] * v;
        for (let _ = 0; _ < v; _++)
          b[C++] = g[T++];
      }
      return new Wi(b, v, M);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new fs(), n = this.index.array, s = this.attributes;
    for (const h in s) {
      const p = s[h], g = e(p, n);
      t.setAttribute(h, g);
    }
    const l = this.morphAttributes;
    for (const h in l) {
      const p = [], g = l[h];
      for (let v = 0, M = g.length; v < M; v++) {
        const b = g[v], T = e(b, n);
        p.push(T);
      }
      t.morphAttributes[h] = p;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const f = this.groups;
    for (let h = 0, p = f.length; h < p; h++) {
      const g = f[h];
      t.addGroup(g.start, g.count, g.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const p = this.parameters;
      for (const g in p)
        p[g] !== void 0 && (e[g] = p[g]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const p in n) {
      const g = n[p];
      e.data.attributes[p] = g.toJSON(e.data);
    }
    const s = {};
    let l = !1;
    for (const p in this.morphAttributes) {
      const g = this.morphAttributes[p], v = [];
      for (let M = 0, b = g.length; M < b; M++) {
        const T = g[M];
        v.push(T.toJSON(e.data));
      }
      v.length > 0 && (s[p] = v, l = !0);
    }
    l && (e.data.morphAttributes = s, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const f = this.groups;
    f.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(f)));
    const h = this.boundingSphere;
    return h !== null && (e.data.boundingSphere = {
      center: h.center.toArray(),
      radius: h.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const s = e.attributes;
    for (const g in s) {
      const v = s[g];
      this.setAttribute(g, v.clone(t));
    }
    const l = e.morphAttributes;
    for (const g in l) {
      const v = [], M = l[g];
      for (let b = 0, T = M.length; b < T; b++)
        v.push(M[b].clone(t));
      this.morphAttributes[g] = v;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const f = e.groups;
    for (let g = 0, v = f.length; g < v; g++) {
      const M = f[g];
      this.addGroup(M.start, M.count, M.materialIndex);
    }
    const h = e.boundingBox;
    h !== null && (this.boundingBox = h.clone());
    const p = e.boundingSphere;
    return p !== null && (this.boundingSphere = p.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Mu = /* @__PURE__ */ new En(), Jr = /* @__PURE__ */ new qd(), ra = /* @__PURE__ */ new Ac(), bu = /* @__PURE__ */ new ce(), sa = /* @__PURE__ */ new ce(), oa = /* @__PURE__ */ new ce(), aa = /* @__PURE__ */ new ce(), Sl = /* @__PURE__ */ new ce(), la = /* @__PURE__ */ new ce(), Eu = /* @__PURE__ */ new ce(), ca = /* @__PURE__ */ new ce();
class Gi extends fi {
  constructor(e = new fs(), t = new bf()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const s = t[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let l = 0, f = s.length; l < f; l++) {
          const h = s[l].name || String(l);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[h] = l;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, s = n.attributes.position, l = n.morphAttributes.position, f = n.morphTargetsRelative;
    t.fromBufferAttribute(s, e);
    const h = this.morphTargetInfluences;
    if (l && h) {
      la.set(0, 0, 0);
      for (let p = 0, g = l.length; p < g; p++) {
        const v = h[p], M = l[p];
        v !== 0 && (Sl.fromBufferAttribute(M, e), f ? la.addScaledVector(Sl, v) : la.addScaledVector(Sl.sub(t), v));
      }
      t.add(la);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, s = this.material, l = this.matrixWorld;
    s !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), ra.copy(n.boundingSphere), ra.applyMatrix4(l), Jr.copy(e.ray).recast(e.near), !(ra.containsPoint(Jr.origin) === !1 && (Jr.intersectSphere(ra, bu) === null || Jr.origin.distanceToSquared(bu) > (e.far - e.near) ** 2)) && (Mu.copy(l).invert(), Jr.copy(e.ray).applyMatrix4(Mu), !(n.boundingBox !== null && Jr.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Jr)));
  }
  _computeIntersections(e, t, n) {
    let s;
    const l = this.geometry, f = this.material, h = l.index, p = l.attributes.position, g = l.attributes.uv, v = l.attributes.uv1, M = l.attributes.normal, b = l.groups, T = l.drawRange;
    if (h !== null)
      if (Array.isArray(f))
        for (let C = 0, D = b.length; C < D; C++) {
          const x = b[C], _ = f[x.materialIndex], B = Math.max(x.start, T.start), U = Math.min(h.count, Math.min(x.start + x.count, T.start + T.count));
          for (let z = B, le = U; z < le; z += 3) {
            const $ = h.getX(z), c = h.getX(z + 1), oe = h.getX(z + 2);
            s = ua(this, _, e, n, g, v, M, $, c, oe), s && (s.faceIndex = Math.floor(z / 3), s.face.materialIndex = x.materialIndex, t.push(s));
          }
        }
      else {
        const C = Math.max(0, T.start), D = Math.min(h.count, T.start + T.count);
        for (let x = C, _ = D; x < _; x += 3) {
          const B = h.getX(x), U = h.getX(x + 1), z = h.getX(x + 2);
          s = ua(this, f, e, n, g, v, M, B, U, z), s && (s.faceIndex = Math.floor(x / 3), t.push(s));
        }
      }
    else if (p !== void 0)
      if (Array.isArray(f))
        for (let C = 0, D = b.length; C < D; C++) {
          const x = b[C], _ = f[x.materialIndex], B = Math.max(x.start, T.start), U = Math.min(p.count, Math.min(x.start + x.count, T.start + T.count));
          for (let z = B, le = U; z < le; z += 3) {
            const $ = z, c = z + 1, oe = z + 2;
            s = ua(this, _, e, n, g, v, M, $, c, oe), s && (s.faceIndex = Math.floor(z / 3), s.face.materialIndex = x.materialIndex, t.push(s));
          }
        }
      else {
        const C = Math.max(0, T.start), D = Math.min(p.count, T.start + T.count);
        for (let x = C, _ = D; x < _; x += 3) {
          const B = x, U = x + 1, z = x + 2;
          s = ua(this, f, e, n, g, v, M, B, U, z), s && (s.faceIndex = Math.floor(x / 3), t.push(s));
        }
      }
  }
}
function tp(i, e, t, n, s, l, f, h) {
  let p;
  if (e.side === ei ? p = n.intersectTriangle(f, l, s, !0, h) : p = n.intersectTriangle(s, l, f, e.side === Ir, h), p === null) return null;
  ca.copy(h), ca.applyMatrix4(i.matrixWorld);
  const g = t.ray.origin.distanceTo(ca);
  return g < t.near || g > t.far ? null : {
    distance: g,
    point: ca.clone(),
    object: i
  };
}
function ua(i, e, t, n, s, l, f, h, p, g) {
  i.getVertexPosition(h, sa), i.getVertexPosition(p, oa), i.getVertexPosition(g, aa);
  const v = tp(i, e, t, n, sa, oa, aa, Eu);
  if (v) {
    const M = new ce();
    Di.getBarycoord(Eu, sa, oa, aa, M), s && (v.uv = Di.getInterpolatedAttribute(s, h, p, g, M, new Qt())), l && (v.uv1 = Di.getInterpolatedAttribute(l, h, p, g, M, new Qt())), f && (v.normal = Di.getInterpolatedAttribute(f, h, p, g, M, new ce()), v.normal.dot(n.direction) > 0 && v.normal.multiplyScalar(-1));
    const b = {
      a: h,
      b: p,
      c: g,
      normal: new ce(),
      materialIndex: 0
    };
    Di.getNormal(sa, oa, aa, b.normal), v.face = b, v.barycoord = M;
  }
  return v;
}
class Lo extends fs {
  constructor(e = 1, t = 1, n = 1, s = 1, l = 1, f = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: s,
      heightSegments: l,
      depthSegments: f
    };
    const h = this;
    s = Math.floor(s), l = Math.floor(l), f = Math.floor(f);
    const p = [], g = [], v = [], M = [];
    let b = 0, T = 0;
    C("z", "y", "x", -1, -1, n, t, e, f, l, 0), C("z", "y", "x", 1, -1, n, t, -e, f, l, 1), C("x", "z", "y", 1, 1, e, n, t, s, f, 2), C("x", "z", "y", 1, -1, e, n, -t, s, f, 3), C("x", "y", "z", 1, -1, e, t, n, s, l, 4), C("x", "y", "z", -1, -1, e, t, -n, s, l, 5), this.setIndex(p), this.setAttribute("position", new ls(g, 3)), this.setAttribute("normal", new ls(v, 3)), this.setAttribute("uv", new ls(M, 2));
    function C(D, x, _, B, U, z, le, $, c, oe, xe) {
      const w = z / c, I = le / oe, pe = z / 2, J = le / 2, de = $ / 2, Ee = c + 1, ie = oe + 1;
      let Te = 0, fe = 0;
      const Fe = new ce();
      for (let ke = 0; ke < ie; ke++) {
        const Z = ke * I - J;
        for (let It = 0; It < Ee; It++) {
          const zt = It * w - pe;
          Fe[D] = zt * B, Fe[x] = Z * U, Fe[_] = de, g.push(Fe.x, Fe.y, Fe.z), Fe[D] = 0, Fe[x] = 0, Fe[_] = $ > 0 ? 1 : -1, v.push(Fe.x, Fe.y, Fe.z), M.push(It / c), M.push(1 - ke / oe), Te += 1;
        }
      }
      for (let ke = 0; ke < oe; ke++)
        for (let Z = 0; Z < c; Z++) {
          const It = b + Z + Ee * ke, zt = b + Z + Ee * (ke + 1), _e = b + (Z + 1) + Ee * (ke + 1), Ae = b + (Z + 1) + Ee * ke;
          p.push(It, zt, Ae), p.push(zt, _e, Ae), fe += 6;
        }
      h.addGroup(T, fe, xe), T += fe, b += Te;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Lo(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Ks(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const s = i[t][n];
      s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = s.clone() : Array.isArray(s) ? e[t][n] = s.slice() : e[t][n] = s;
    }
  }
  return e;
}
function Xn(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = Ks(i[t]);
    for (const s in n)
      e[s] = n[s];
  }
  return e;
}
function np(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function Af(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : en.workingColorSpace;
}
const ip = { clone: Ks, merge: Xn };
var rp = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, sp = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class fr extends Da {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = rp, this.fragmentShader = sp, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Ks(e.uniforms), this.uniformsGroups = np(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const s in this.uniforms) {
      const f = this.uniforms[s].value;
      f && f.isTexture ? t.uniforms[s] = {
        type: "t",
        value: f.toJSON(e).uuid
      } : f && f.isColor ? t.uniforms[s] = {
        type: "c",
        value: f.getHex()
      } : f && f.isVector2 ? t.uniforms[s] = {
        type: "v2",
        value: f.toArray()
      } : f && f.isVector3 ? t.uniforms[s] = {
        type: "v3",
        value: f.toArray()
      } : f && f.isVector4 ? t.uniforms[s] = {
        type: "v4",
        value: f.toArray()
      } : f && f.isMatrix3 ? t.uniforms[s] = {
        type: "m3",
        value: f.toArray()
      } : f && f.isMatrix4 ? t.uniforms[s] = {
        type: "m4",
        value: f.toArray()
      } : t.uniforms[s] = {
        value: f
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const s in this.extensions)
      this.extensions[s] === !0 && (n[s] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class wf extends fi {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new En(), this.projectionMatrix = new En(), this.projectionMatrixInverse = new En(), this.coordinateSystem = lr;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Rr = /* @__PURE__ */ new ce(), Tu = /* @__PURE__ */ new Qt(), Au = /* @__PURE__ */ new Qt();
class Si extends wf {
  constructor(e = 50, t = 1, n = 0.1, s = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = s, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = gc * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(el * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return gc * 2 * Math.atan(
      Math.tan(el * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(e, t, n) {
    Rr.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Rr.x, Rr.y).multiplyScalar(-e / Rr.z), Rr.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Rr.x, Rr.y).multiplyScalar(-e / Rr.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, Tu, Au), t.subVectors(Au, Tu);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, s, l, f) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = s, this.view.width = l, this.view.height = f, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(el * 0.5 * this.fov) / this.zoom, n = 2 * t, s = this.aspect * n, l = -0.5 * s;
    const f = this.view;
    if (this.view !== null && this.view.enabled) {
      const p = f.fullWidth, g = f.fullHeight;
      l += f.offsetX * s / p, t -= f.offsetY * n / g, s *= f.width / p, n *= f.height / g;
    }
    const h = this.filmOffset;
    h !== 0 && (l += e * h / this.getFilmWidth()), this.projectionMatrix.makePerspective(l, l + s, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Os = -90, Fs = 1;
class op extends fi {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new Si(Os, Fs, e, t);
    s.layers = this.layers, this.add(s);
    const l = new Si(Os, Fs, e, t);
    l.layers = this.layers, this.add(l);
    const f = new Si(Os, Fs, e, t);
    f.layers = this.layers, this.add(f);
    const h = new Si(Os, Fs, e, t);
    h.layers = this.layers, this.add(h);
    const p = new Si(Os, Fs, e, t);
    p.layers = this.layers, this.add(p);
    const g = new Si(Os, Fs, e, t);
    g.layers = this.layers, this.add(g);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, s, l, f, h, p] = t;
    for (const g of t) this.remove(g);
    if (e === lr)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), l.up.set(0, 0, -1), l.lookAt(0, 1, 0), f.up.set(0, 0, 1), f.lookAt(0, -1, 0), h.up.set(0, 1, 0), h.lookAt(0, 0, 1), p.up.set(0, 1, 0), p.lookAt(0, 0, -1);
    else if (e === Ca)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), l.up.set(0, 0, 1), l.lookAt(0, 1, 0), f.up.set(0, 0, -1), f.lookAt(0, -1, 0), h.up.set(0, -1, 0), h.lookAt(0, 0, 1), p.up.set(0, -1, 0), p.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const g of t)
      this.add(g), g.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: s } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [l, f, h, p, g, v] = this.children, M = e.getRenderTarget(), b = e.getActiveCubeFace(), T = e.getActiveMipmapLevel(), C = e.xr.enabled;
    e.xr.enabled = !1;
    const D = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, s), e.render(t, l), e.setRenderTarget(n, 1, s), e.render(t, f), e.setRenderTarget(n, 2, s), e.render(t, h), e.setRenderTarget(n, 3, s), e.render(t, p), e.setRenderTarget(n, 4, s), e.render(t, g), n.texture.generateMipmaps = D, e.setRenderTarget(n, 5, s), e.render(t, v), e.setRenderTarget(M, b, T), e.xr.enabled = C, n.texture.needsPMREMUpdate = !0;
  }
}
class Cf extends ti {
  constructor(e, t, n, s, l, f, h, p, g, v) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : qs, super(e, t, n, s, l, f, h, p, g, v), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class ap extends us {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, s = [n, n, n, n, n, n];
    this.texture = new Cf(s, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Li;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, s = new Lo(5, 5, 5), l = new fr({
      name: "CubemapFromEquirect",
      uniforms: Ks(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: ei,
      blending: Lr
    });
    l.uniforms.tEquirect.value = t;
    const f = new Gi(s, l), h = t.minFilter;
    return t.minFilter === as && (t.minFilter = Li), new op(1, 10, this).update(e, f), t.minFilter = h, f.geometry.dispose(), f.material.dispose(), this;
  }
  clear(e, t, n, s) {
    const l = e.getRenderTarget();
    for (let f = 0; f < 6; f++)
      e.setRenderTarget(this, f), e.clear(t, n, s);
    e.setRenderTarget(l);
  }
}
const Ml = /* @__PURE__ */ new ce(), lp = /* @__PURE__ */ new ce(), cp = /* @__PURE__ */ new Rt();
class ns {
  constructor(e = new ce(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, s) {
    return this.normal.set(e, t, n), this.constant = s, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const s = Ml.subVectors(n, t).cross(lp.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(s, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Ml), s = this.normal.dot(n);
    if (s === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const l = -(e.start.dot(this.normal) + this.constant) / s;
    return l < 0 || l > 1 ? null : t.copy(e.start).addScaledVector(n, l);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || cp.getNormalMatrix(e), s = this.coplanarPoint(Ml).applyMatrix4(e), l = this.normal.applyMatrix3(n).normalize();
    return this.constant = -s.dot(l), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Qr = /* @__PURE__ */ new Ac(), fa = /* @__PURE__ */ new ce();
class Rf {
  constructor(e = new ns(), t = new ns(), n = new ns(), s = new ns(), l = new ns(), f = new ns()) {
    this.planes = [e, t, n, s, l, f];
  }
  set(e, t, n, s, l, f) {
    const h = this.planes;
    return h[0].copy(e), h[1].copy(t), h[2].copy(n), h[3].copy(s), h[4].copy(l), h[5].copy(f), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = lr) {
    const n = this.planes, s = e.elements, l = s[0], f = s[1], h = s[2], p = s[3], g = s[4], v = s[5], M = s[6], b = s[7], T = s[8], C = s[9], D = s[10], x = s[11], _ = s[12], B = s[13], U = s[14], z = s[15];
    if (n[0].setComponents(p - l, b - g, x - T, z - _).normalize(), n[1].setComponents(p + l, b + g, x + T, z + _).normalize(), n[2].setComponents(p + f, b + v, x + C, z + B).normalize(), n[3].setComponents(p - f, b - v, x - C, z - B).normalize(), n[4].setComponents(p - h, b - M, x - D, z - U).normalize(), t === lr)
      n[5].setComponents(p + h, b + M, x + D, z + U).normalize();
    else if (t === Ca)
      n[5].setComponents(h, M, D, U).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Qr);
  }
  intersectsSprite(e) {
    return Qr.center.set(0, 0, 0), Qr.radius = 0.7071067811865476, Qr.applyMatrix4(e.matrixWorld), this.intersectsSphere(Qr);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, s = -e.radius;
    for (let l = 0; l < 6; l++)
      if (t[l].distanceToPoint(n) < s)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const s = t[n];
      if (fa.x = s.normal.x > 0 ? e.max.x : e.min.x, fa.y = s.normal.y > 0 ? e.max.y : e.min.y, fa.z = s.normal.z > 0 ? e.max.z : e.min.z, s.distanceToPoint(fa) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Pf() {
  let i = null, e = !1, t = null, n = null;
  function s(l, f) {
    t(l, f), n = i.requestAnimationFrame(s);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = i.requestAnimationFrame(s), e = !0);
    },
    stop: function() {
      i.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(l) {
      t = l;
    },
    setContext: function(l) {
      i = l;
    }
  };
}
function up(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(h, p) {
    const g = h.array, v = h.usage, M = g.byteLength, b = i.createBuffer();
    i.bindBuffer(p, b), i.bufferData(p, g, v), h.onUploadCallback();
    let T;
    if (g instanceof Float32Array)
      T = i.FLOAT;
    else if (g instanceof Uint16Array)
      h.isFloat16BufferAttribute ? T = i.HALF_FLOAT : T = i.UNSIGNED_SHORT;
    else if (g instanceof Int16Array)
      T = i.SHORT;
    else if (g instanceof Uint32Array)
      T = i.UNSIGNED_INT;
    else if (g instanceof Int32Array)
      T = i.INT;
    else if (g instanceof Int8Array)
      T = i.BYTE;
    else if (g instanceof Uint8Array)
      T = i.UNSIGNED_BYTE;
    else if (g instanceof Uint8ClampedArray)
      T = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + g);
    return {
      buffer: b,
      type: T,
      bytesPerElement: g.BYTES_PER_ELEMENT,
      version: h.version,
      size: M
    };
  }
  function n(h, p, g) {
    const v = p.array, M = p.updateRanges;
    if (i.bindBuffer(g, h), M.length === 0)
      i.bufferSubData(g, 0, v);
    else {
      M.sort((T, C) => T.start - C.start);
      let b = 0;
      for (let T = 1; T < M.length; T++) {
        const C = M[b], D = M[T];
        D.start <= C.start + C.count + 1 ? C.count = Math.max(
          C.count,
          D.start + D.count - C.start
        ) : (++b, M[b] = D);
      }
      M.length = b + 1;
      for (let T = 0, C = M.length; T < C; T++) {
        const D = M[T];
        i.bufferSubData(
          g,
          D.start * v.BYTES_PER_ELEMENT,
          v,
          D.start,
          D.count
        );
      }
      p.clearUpdateRanges();
    }
    p.onUploadCallback();
  }
  function s(h) {
    return h.isInterleavedBufferAttribute && (h = h.data), e.get(h);
  }
  function l(h) {
    h.isInterleavedBufferAttribute && (h = h.data);
    const p = e.get(h);
    p && (i.deleteBuffer(p.buffer), e.delete(h));
  }
  function f(h, p) {
    if (h.isInterleavedBufferAttribute && (h = h.data), h.isGLBufferAttribute) {
      const v = e.get(h);
      (!v || v.version < h.version) && e.set(h, {
        buffer: h.buffer,
        type: h.type,
        bytesPerElement: h.elementSize,
        version: h.version
      });
      return;
    }
    const g = e.get(h);
    if (g === void 0)
      e.set(h, t(h, p));
    else if (g.version < h.version) {
      if (g.size !== h.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(g.buffer, h, p), g.version = h.version;
    }
  }
  return {
    get: s,
    remove: l,
    update: f
  };
}
class Do extends fs {
  constructor(e = 1, t = 1, n = 1, s = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: s
    };
    const l = e / 2, f = t / 2, h = Math.floor(n), p = Math.floor(s), g = h + 1, v = p + 1, M = e / h, b = t / p, T = [], C = [], D = [], x = [];
    for (let _ = 0; _ < v; _++) {
      const B = _ * b - f;
      for (let U = 0; U < g; U++) {
        const z = U * M - l;
        C.push(z, -B, 0), D.push(0, 0, 1), x.push(U / h), x.push(1 - _ / p);
      }
    }
    for (let _ = 0; _ < p; _++)
      for (let B = 0; B < h; B++) {
        const U = B + g * _, z = B + g * (_ + 1), le = B + 1 + g * (_ + 1), $ = B + 1 + g * _;
        T.push(U, z, $), T.push(z, le, $);
      }
    this.setIndex(T), this.setAttribute("position", new ls(C, 3)), this.setAttribute("normal", new ls(D, 3)), this.setAttribute("uv", new ls(x, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Do(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var fp = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, hp = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, dp = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, pp = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, mp = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, gp = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, _p = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, vp = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, xp = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, yp = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Sp = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Mp = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, bp = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Ep = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Tp = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Ap = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, wp = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Cp = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Rp = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Pp = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Lp = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Dp = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Ip = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Np = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Up = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Op = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Fp = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Bp = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, zp = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, kp = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Hp = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Vp = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Gp = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Wp = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Xp = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, qp = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, jp = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, $p = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Yp = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Kp = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Zp = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Jp = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Qp = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, em = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, tm = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, nm = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, im = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, rm = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, sm = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, om = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, am = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, lm = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, cm = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, um = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, fm = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, hm = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, dm = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, pm = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, mm = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, gm = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, _m = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, vm = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, xm = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, ym = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Sm = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Mm = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, bm = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Em = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Tm = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Am = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, wm = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Cm = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Rm = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Pm = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Lm = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Dm = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Im = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Nm = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Um = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Om = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Fm = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Bm = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, zm = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, km = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Hm = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Vm = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Gm = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Wm = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Xm = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, qm = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, jm = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, $m = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Ym = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Km = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Zm = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Jm = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Qm = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, eg = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, tg = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, ng = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, ig = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, rg = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, sg = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, og = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, ag = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, lg = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, cg = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const ug = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, fg = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, hg = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, dg = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, pg = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, mg = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, gg = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, _g = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, vg = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, xg = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, yg = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Sg = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Mg = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, bg = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Eg = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Tg = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ag = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, wg = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Cg = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Rg = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Pg = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Lg = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Dg = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Ig = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ng = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Ug = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Og = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Fg = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Bg = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, zg = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, kg = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Hg = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Vg = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Gg = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ct = {
  alphahash_fragment: fp,
  alphahash_pars_fragment: hp,
  alphamap_fragment: dp,
  alphamap_pars_fragment: pp,
  alphatest_fragment: mp,
  alphatest_pars_fragment: gp,
  aomap_fragment: _p,
  aomap_pars_fragment: vp,
  batching_pars_vertex: xp,
  batching_vertex: yp,
  begin_vertex: Sp,
  beginnormal_vertex: Mp,
  bsdfs: bp,
  iridescence_fragment: Ep,
  bumpmap_pars_fragment: Tp,
  clipping_planes_fragment: Ap,
  clipping_planes_pars_fragment: wp,
  clipping_planes_pars_vertex: Cp,
  clipping_planes_vertex: Rp,
  color_fragment: Pp,
  color_pars_fragment: Lp,
  color_pars_vertex: Dp,
  color_vertex: Ip,
  common: Np,
  cube_uv_reflection_fragment: Up,
  defaultnormal_vertex: Op,
  displacementmap_pars_vertex: Fp,
  displacementmap_vertex: Bp,
  emissivemap_fragment: zp,
  emissivemap_pars_fragment: kp,
  colorspace_fragment: Hp,
  colorspace_pars_fragment: Vp,
  envmap_fragment: Gp,
  envmap_common_pars_fragment: Wp,
  envmap_pars_fragment: Xp,
  envmap_pars_vertex: qp,
  envmap_physical_pars_fragment: im,
  envmap_vertex: jp,
  fog_vertex: $p,
  fog_pars_vertex: Yp,
  fog_fragment: Kp,
  fog_pars_fragment: Zp,
  gradientmap_pars_fragment: Jp,
  lightmap_pars_fragment: Qp,
  lights_lambert_fragment: em,
  lights_lambert_pars_fragment: tm,
  lights_pars_begin: nm,
  lights_toon_fragment: rm,
  lights_toon_pars_fragment: sm,
  lights_phong_fragment: om,
  lights_phong_pars_fragment: am,
  lights_physical_fragment: lm,
  lights_physical_pars_fragment: cm,
  lights_fragment_begin: um,
  lights_fragment_maps: fm,
  lights_fragment_end: hm,
  logdepthbuf_fragment: dm,
  logdepthbuf_pars_fragment: pm,
  logdepthbuf_pars_vertex: mm,
  logdepthbuf_vertex: gm,
  map_fragment: _m,
  map_pars_fragment: vm,
  map_particle_fragment: xm,
  map_particle_pars_fragment: ym,
  metalnessmap_fragment: Sm,
  metalnessmap_pars_fragment: Mm,
  morphinstance_vertex: bm,
  morphcolor_vertex: Em,
  morphnormal_vertex: Tm,
  morphtarget_pars_vertex: Am,
  morphtarget_vertex: wm,
  normal_fragment_begin: Cm,
  normal_fragment_maps: Rm,
  normal_pars_fragment: Pm,
  normal_pars_vertex: Lm,
  normal_vertex: Dm,
  normalmap_pars_fragment: Im,
  clearcoat_normal_fragment_begin: Nm,
  clearcoat_normal_fragment_maps: Um,
  clearcoat_pars_fragment: Om,
  iridescence_pars_fragment: Fm,
  opaque_fragment: Bm,
  packing: zm,
  premultiplied_alpha_fragment: km,
  project_vertex: Hm,
  dithering_fragment: Vm,
  dithering_pars_fragment: Gm,
  roughnessmap_fragment: Wm,
  roughnessmap_pars_fragment: Xm,
  shadowmap_pars_fragment: qm,
  shadowmap_pars_vertex: jm,
  shadowmap_vertex: $m,
  shadowmask_pars_fragment: Ym,
  skinbase_vertex: Km,
  skinning_pars_vertex: Zm,
  skinning_vertex: Jm,
  skinnormal_vertex: Qm,
  specularmap_fragment: eg,
  specularmap_pars_fragment: tg,
  tonemapping_fragment: ng,
  tonemapping_pars_fragment: ig,
  transmission_fragment: rg,
  transmission_pars_fragment: sg,
  uv_pars_fragment: og,
  uv_pars_vertex: ag,
  uv_vertex: lg,
  worldpos_vertex: cg,
  background_vert: ug,
  background_frag: fg,
  backgroundCube_vert: hg,
  backgroundCube_frag: dg,
  cube_vert: pg,
  cube_frag: mg,
  depth_vert: gg,
  depth_frag: _g,
  distanceRGBA_vert: vg,
  distanceRGBA_frag: xg,
  equirect_vert: yg,
  equirect_frag: Sg,
  linedashed_vert: Mg,
  linedashed_frag: bg,
  meshbasic_vert: Eg,
  meshbasic_frag: Tg,
  meshlambert_vert: Ag,
  meshlambert_frag: wg,
  meshmatcap_vert: Cg,
  meshmatcap_frag: Rg,
  meshnormal_vert: Pg,
  meshnormal_frag: Lg,
  meshphong_vert: Dg,
  meshphong_frag: Ig,
  meshphysical_vert: Ng,
  meshphysical_frag: Ug,
  meshtoon_vert: Og,
  meshtoon_frag: Fg,
  points_vert: Bg,
  points_frag: zg,
  shadow_vert: kg,
  shadow_frag: Hg,
  sprite_vert: Vg,
  sprite_frag: Gg
}, ze = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Yt(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Rt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Rt() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Rt() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Rt() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Rt() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Rt() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Rt() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Rt() },
    normalScale: { value: /* @__PURE__ */ new Qt(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Rt() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Rt() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Rt() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Rt() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Yt(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Yt(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Rt() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Rt() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Yt(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Qt(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Rt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Rt() },
    alphaTest: { value: 0 }
  }
}, Vi = {
  basic: {
    uniforms: /* @__PURE__ */ Xn([
      ze.common,
      ze.specularmap,
      ze.envmap,
      ze.aomap,
      ze.lightmap,
      ze.fog
    ]),
    vertexShader: Ct.meshbasic_vert,
    fragmentShader: Ct.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Xn([
      ze.common,
      ze.specularmap,
      ze.envmap,
      ze.aomap,
      ze.lightmap,
      ze.emissivemap,
      ze.bumpmap,
      ze.normalmap,
      ze.displacementmap,
      ze.fog,
      ze.lights,
      {
        emissive: { value: /* @__PURE__ */ new Yt(0) }
      }
    ]),
    vertexShader: Ct.meshlambert_vert,
    fragmentShader: Ct.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Xn([
      ze.common,
      ze.specularmap,
      ze.envmap,
      ze.aomap,
      ze.lightmap,
      ze.emissivemap,
      ze.bumpmap,
      ze.normalmap,
      ze.displacementmap,
      ze.fog,
      ze.lights,
      {
        emissive: { value: /* @__PURE__ */ new Yt(0) },
        specular: { value: /* @__PURE__ */ new Yt(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Ct.meshphong_vert,
    fragmentShader: Ct.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Xn([
      ze.common,
      ze.envmap,
      ze.aomap,
      ze.lightmap,
      ze.emissivemap,
      ze.bumpmap,
      ze.normalmap,
      ze.displacementmap,
      ze.roughnessmap,
      ze.metalnessmap,
      ze.fog,
      ze.lights,
      {
        emissive: { value: /* @__PURE__ */ new Yt(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ct.meshphysical_vert,
    fragmentShader: Ct.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Xn([
      ze.common,
      ze.aomap,
      ze.lightmap,
      ze.emissivemap,
      ze.bumpmap,
      ze.normalmap,
      ze.displacementmap,
      ze.gradientmap,
      ze.fog,
      ze.lights,
      {
        emissive: { value: /* @__PURE__ */ new Yt(0) }
      }
    ]),
    vertexShader: Ct.meshtoon_vert,
    fragmentShader: Ct.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Xn([
      ze.common,
      ze.bumpmap,
      ze.normalmap,
      ze.displacementmap,
      ze.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ct.meshmatcap_vert,
    fragmentShader: Ct.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Xn([
      ze.points,
      ze.fog
    ]),
    vertexShader: Ct.points_vert,
    fragmentShader: Ct.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Xn([
      ze.common,
      ze.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ct.linedashed_vert,
    fragmentShader: Ct.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Xn([
      ze.common,
      ze.displacementmap
    ]),
    vertexShader: Ct.depth_vert,
    fragmentShader: Ct.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Xn([
      ze.common,
      ze.bumpmap,
      ze.normalmap,
      ze.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ct.meshnormal_vert,
    fragmentShader: Ct.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Xn([
      ze.sprite,
      ze.fog
    ]),
    vertexShader: Ct.sprite_vert,
    fragmentShader: Ct.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Rt() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ct.background_vert,
    fragmentShader: Ct.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Rt() }
    },
    vertexShader: Ct.backgroundCube_vert,
    fragmentShader: Ct.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ct.cube_vert,
    fragmentShader: Ct.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ct.equirect_vert,
    fragmentShader: Ct.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Xn([
      ze.common,
      ze.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new ce() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ct.distanceRGBA_vert,
    fragmentShader: Ct.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Xn([
      ze.lights,
      ze.fog,
      {
        color: { value: /* @__PURE__ */ new Yt(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ct.shadow_vert,
    fragmentShader: Ct.shadow_frag
  }
};
Vi.physical = {
  uniforms: /* @__PURE__ */ Xn([
    Vi.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Rt() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Rt() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Qt(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Rt() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Rt() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Rt() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Yt(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Rt() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Rt() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Rt() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Qt() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Rt() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Yt(0) },
      specularColor: { value: /* @__PURE__ */ new Yt(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Rt() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Rt() },
      anisotropyVector: { value: /* @__PURE__ */ new Qt() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Rt() }
    }
  ]),
  vertexShader: Ct.meshphysical_vert,
  fragmentShader: Ct.meshphysical_frag
};
const ha = { r: 0, b: 0, g: 0 }, es = /* @__PURE__ */ new ur(), Wg = /* @__PURE__ */ new En();
function Xg(i, e, t, n, s, l, f) {
  const h = new Yt(0);
  let p = l === !0 ? 0 : 1, g, v, M = null, b = 0, T = null;
  function C(B) {
    let U = B.isScene === !0 ? B.background : null;
    return U && U.isTexture && (U = (B.backgroundBlurriness > 0 ? t : e).get(U)), U;
  }
  function D(B) {
    let U = !1;
    const z = C(B);
    z === null ? _(h, p) : z && z.isColor && (_(z, 1), U = !0);
    const le = i.xr.getEnvironmentBlendMode();
    le === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, f) : le === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, f), (i.autoClear || U) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function x(B, U) {
    const z = C(U);
    z && (z.isCubeTexture || z.mapping === Pa) ? (v === void 0 && (v = new Gi(
      new Lo(1, 1, 1),
      new fr({
        name: "BackgroundCubeMaterial",
        uniforms: Ks(Vi.backgroundCube.uniforms),
        vertexShader: Vi.backgroundCube.vertexShader,
        fragmentShader: Vi.backgroundCube.fragmentShader,
        side: ei,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), v.geometry.deleteAttribute("normal"), v.geometry.deleteAttribute("uv"), v.onBeforeRender = function(le, $, c) {
      this.matrixWorld.copyPosition(c.matrixWorld);
    }, Object.defineProperty(v.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), s.update(v)), es.copy(U.backgroundRotation), es.x *= -1, es.y *= -1, es.z *= -1, z.isCubeTexture && z.isRenderTargetTexture === !1 && (es.y *= -1, es.z *= -1), v.material.uniforms.envMap.value = z, v.material.uniforms.flipEnvMap.value = z.isCubeTexture && z.isRenderTargetTexture === !1 ? -1 : 1, v.material.uniforms.backgroundBlurriness.value = U.backgroundBlurriness, v.material.uniforms.backgroundIntensity.value = U.backgroundIntensity, v.material.uniforms.backgroundRotation.value.setFromMatrix4(Wg.makeRotationFromEuler(es)), v.material.toneMapped = en.getTransfer(z.colorSpace) !== fn, (M !== z || b !== z.version || T !== i.toneMapping) && (v.material.needsUpdate = !0, M = z, b = z.version, T = i.toneMapping), v.layers.enableAll(), B.unshift(v, v.geometry, v.material, 0, 0, null)) : z && z.isTexture && (g === void 0 && (g = new Gi(
      new Do(2, 2),
      new fr({
        name: "BackgroundMaterial",
        uniforms: Ks(Vi.background.uniforms),
        vertexShader: Vi.background.vertexShader,
        fragmentShader: Vi.background.fragmentShader,
        side: Ir,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), g.geometry.deleteAttribute("normal"), Object.defineProperty(g.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), s.update(g)), g.material.uniforms.t2D.value = z, g.material.uniforms.backgroundIntensity.value = U.backgroundIntensity, g.material.toneMapped = en.getTransfer(z.colorSpace) !== fn, z.matrixAutoUpdate === !0 && z.updateMatrix(), g.material.uniforms.uvTransform.value.copy(z.matrix), (M !== z || b !== z.version || T !== i.toneMapping) && (g.material.needsUpdate = !0, M = z, b = z.version, T = i.toneMapping), g.layers.enableAll(), B.unshift(g, g.geometry, g.material, 0, 0, null));
  }
  function _(B, U) {
    B.getRGB(ha, Af(i)), n.buffers.color.setClear(ha.r, ha.g, ha.b, U, f);
  }
  return {
    getClearColor: function() {
      return h;
    },
    setClearColor: function(B, U = 1) {
      h.set(B), p = U, _(h, p);
    },
    getClearAlpha: function() {
      return p;
    },
    setClearAlpha: function(B) {
      p = B, _(h, p);
    },
    render: D,
    addToRenderList: x
  };
}
function qg(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, s = b(null);
  let l = s, f = !1;
  function h(w, I, pe, J, de) {
    let Ee = !1;
    const ie = M(J, pe, I);
    l !== ie && (l = ie, g(l.object)), Ee = T(w, J, pe, de), Ee && C(w, J, pe, de), de !== null && e.update(de, i.ELEMENT_ARRAY_BUFFER), (Ee || f) && (f = !1, z(w, I, pe, J), de !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(de).buffer));
  }
  function p() {
    return i.createVertexArray();
  }
  function g(w) {
    return i.bindVertexArray(w);
  }
  function v(w) {
    return i.deleteVertexArray(w);
  }
  function M(w, I, pe) {
    const J = pe.wireframe === !0;
    let de = n[w.id];
    de === void 0 && (de = {}, n[w.id] = de);
    let Ee = de[I.id];
    Ee === void 0 && (Ee = {}, de[I.id] = Ee);
    let ie = Ee[J];
    return ie === void 0 && (ie = b(p()), Ee[J] = ie), ie;
  }
  function b(w) {
    const I = [], pe = [], J = [];
    for (let de = 0; de < t; de++)
      I[de] = 0, pe[de] = 0, J[de] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: I,
      enabledAttributes: pe,
      attributeDivisors: J,
      object: w,
      attributes: {},
      index: null
    };
  }
  function T(w, I, pe, J) {
    const de = l.attributes, Ee = I.attributes;
    let ie = 0;
    const Te = pe.getAttributes();
    for (const fe in Te)
      if (Te[fe].location >= 0) {
        const ke = de[fe];
        let Z = Ee[fe];
        if (Z === void 0 && (fe === "instanceMatrix" && w.instanceMatrix && (Z = w.instanceMatrix), fe === "instanceColor" && w.instanceColor && (Z = w.instanceColor)), ke === void 0 || ke.attribute !== Z || Z && ke.data !== Z.data) return !0;
        ie++;
      }
    return l.attributesNum !== ie || l.index !== J;
  }
  function C(w, I, pe, J) {
    const de = {}, Ee = I.attributes;
    let ie = 0;
    const Te = pe.getAttributes();
    for (const fe in Te)
      if (Te[fe].location >= 0) {
        let ke = Ee[fe];
        ke === void 0 && (fe === "instanceMatrix" && w.instanceMatrix && (ke = w.instanceMatrix), fe === "instanceColor" && w.instanceColor && (ke = w.instanceColor));
        const Z = {};
        Z.attribute = ke, ke && ke.data && (Z.data = ke.data), de[fe] = Z, ie++;
      }
    l.attributes = de, l.attributesNum = ie, l.index = J;
  }
  function D() {
    const w = l.newAttributes;
    for (let I = 0, pe = w.length; I < pe; I++)
      w[I] = 0;
  }
  function x(w) {
    _(w, 0);
  }
  function _(w, I) {
    const pe = l.newAttributes, J = l.enabledAttributes, de = l.attributeDivisors;
    pe[w] = 1, J[w] === 0 && (i.enableVertexAttribArray(w), J[w] = 1), de[w] !== I && (i.vertexAttribDivisor(w, I), de[w] = I);
  }
  function B() {
    const w = l.newAttributes, I = l.enabledAttributes;
    for (let pe = 0, J = I.length; pe < J; pe++)
      I[pe] !== w[pe] && (i.disableVertexAttribArray(pe), I[pe] = 0);
  }
  function U(w, I, pe, J, de, Ee, ie) {
    ie === !0 ? i.vertexAttribIPointer(w, I, pe, de, Ee) : i.vertexAttribPointer(w, I, pe, J, de, Ee);
  }
  function z(w, I, pe, J) {
    D();
    const de = J.attributes, Ee = pe.getAttributes(), ie = I.defaultAttributeValues;
    for (const Te in Ee) {
      const fe = Ee[Te];
      if (fe.location >= 0) {
        let Fe = de[Te];
        if (Fe === void 0 && (Te === "instanceMatrix" && w.instanceMatrix && (Fe = w.instanceMatrix), Te === "instanceColor" && w.instanceColor && (Fe = w.instanceColor)), Fe !== void 0) {
          const ke = Fe.normalized, Z = Fe.itemSize, It = e.get(Fe);
          if (It === void 0) continue;
          const zt = It.buffer, _e = It.type, Ae = It.bytesPerElement, Ye = _e === i.INT || _e === i.UNSIGNED_INT || Fe.gpuType === xc;
          if (Fe.isInterleavedBufferAttribute) {
            const Ne = Fe.data, ht = Ne.stride, Me = Fe.offset;
            if (Ne.isInstancedInterleavedBuffer) {
              for (let ct = 0; ct < fe.locationSize; ct++)
                _(fe.location + ct, Ne.meshPerAttribute);
              w.isInstancedMesh !== !0 && J._maxInstanceCount === void 0 && (J._maxInstanceCount = Ne.meshPerAttribute * Ne.count);
            } else
              for (let ct = 0; ct < fe.locationSize; ct++)
                x(fe.location + ct);
            i.bindBuffer(i.ARRAY_BUFFER, zt);
            for (let ct = 0; ct < fe.locationSize; ct++)
              U(
                fe.location + ct,
                Z / fe.locationSize,
                _e,
                ke,
                ht * Ae,
                (Me + Z / fe.locationSize * ct) * Ae,
                Ye
              );
          } else {
            if (Fe.isInstancedBufferAttribute) {
              for (let Ne = 0; Ne < fe.locationSize; Ne++)
                _(fe.location + Ne, Fe.meshPerAttribute);
              w.isInstancedMesh !== !0 && J._maxInstanceCount === void 0 && (J._maxInstanceCount = Fe.meshPerAttribute * Fe.count);
            } else
              for (let Ne = 0; Ne < fe.locationSize; Ne++)
                x(fe.location + Ne);
            i.bindBuffer(i.ARRAY_BUFFER, zt);
            for (let Ne = 0; Ne < fe.locationSize; Ne++)
              U(
                fe.location + Ne,
                Z / fe.locationSize,
                _e,
                ke,
                Z * Ae,
                Z / fe.locationSize * Ne * Ae,
                Ye
              );
          }
        } else if (ie !== void 0) {
          const ke = ie[Te];
          if (ke !== void 0)
            switch (ke.length) {
              case 2:
                i.vertexAttrib2fv(fe.location, ke);
                break;
              case 3:
                i.vertexAttrib3fv(fe.location, ke);
                break;
              case 4:
                i.vertexAttrib4fv(fe.location, ke);
                break;
              default:
                i.vertexAttrib1fv(fe.location, ke);
            }
        }
      }
    }
    B();
  }
  function le() {
    oe();
    for (const w in n) {
      const I = n[w];
      for (const pe in I) {
        const J = I[pe];
        for (const de in J)
          v(J[de].object), delete J[de];
        delete I[pe];
      }
      delete n[w];
    }
  }
  function $(w) {
    if (n[w.id] === void 0) return;
    const I = n[w.id];
    for (const pe in I) {
      const J = I[pe];
      for (const de in J)
        v(J[de].object), delete J[de];
      delete I[pe];
    }
    delete n[w.id];
  }
  function c(w) {
    for (const I in n) {
      const pe = n[I];
      if (pe[w.id] === void 0) continue;
      const J = pe[w.id];
      for (const de in J)
        v(J[de].object), delete J[de];
      delete pe[w.id];
    }
  }
  function oe() {
    xe(), f = !0, l !== s && (l = s, g(l.object));
  }
  function xe() {
    s.geometry = null, s.program = null, s.wireframe = !1;
  }
  return {
    setup: h,
    reset: oe,
    resetDefaultState: xe,
    dispose: le,
    releaseStatesOfGeometry: $,
    releaseStatesOfProgram: c,
    initAttributes: D,
    enableAttribute: x,
    disableUnusedAttributes: B
  };
}
function jg(i, e, t) {
  let n;
  function s(g) {
    n = g;
  }
  function l(g, v) {
    i.drawArrays(n, g, v), t.update(v, n, 1);
  }
  function f(g, v, M) {
    M !== 0 && (i.drawArraysInstanced(n, g, v, M), t.update(v, n, M));
  }
  function h(g, v, M) {
    if (M === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, g, 0, v, 0, M);
    let T = 0;
    for (let C = 0; C < M; C++)
      T += v[C];
    t.update(T, n, 1);
  }
  function p(g, v, M, b) {
    if (M === 0) return;
    const T = e.get("WEBGL_multi_draw");
    if (T === null)
      for (let C = 0; C < g.length; C++)
        f(g[C], v[C], b[C]);
    else {
      T.multiDrawArraysInstancedWEBGL(n, g, 0, v, 0, b, 0, M);
      let C = 0;
      for (let D = 0; D < M; D++)
        C += v[D];
      for (let D = 0; D < b.length; D++)
        t.update(C, n, b[D]);
    }
  }
  this.setMode = s, this.render = l, this.renderInstances = f, this.renderMultiDraw = h, this.renderMultiDrawInstances = p;
}
function $g(i, e, t, n) {
  let s;
  function l() {
    if (s !== void 0) return s;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const c = e.get("EXT_texture_filter_anisotropic");
      s = i.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      s = 0;
    return s;
  }
  function f(c) {
    return !(c !== Ii && n.convert(c) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function h(c) {
    const oe = c === wo && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(c !== cr && n.convert(c) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    c !== ar && !oe);
  }
  function p(c) {
    if (c === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      c = "mediump";
    }
    return c === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let g = t.precision !== void 0 ? t.precision : "highp";
  const v = p(g);
  v !== g && (console.warn("THREE.WebGLRenderer:", g, "not supported, using", v, "instead."), g = v);
  const M = t.logarithmicDepthBuffer === !0, b = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control");
  if (b === !0) {
    const c = e.get("EXT_clip_control");
    c.clipControlEXT(c.LOWER_LEFT_EXT, c.ZERO_TO_ONE_EXT);
  }
  const T = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), C = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), D = i.getParameter(i.MAX_TEXTURE_SIZE), x = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), _ = i.getParameter(i.MAX_VERTEX_ATTRIBS), B = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), U = i.getParameter(i.MAX_VARYING_VECTORS), z = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), le = C > 0, $ = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: l,
    getMaxPrecision: p,
    textureFormatReadable: f,
    textureTypeReadable: h,
    precision: g,
    logarithmicDepthBuffer: M,
    reverseDepthBuffer: b,
    maxTextures: T,
    maxVertexTextures: C,
    maxTextureSize: D,
    maxCubemapSize: x,
    maxAttributes: _,
    maxVertexUniforms: B,
    maxVaryings: U,
    maxFragmentUniforms: z,
    vertexTextures: le,
    maxSamples: $
  };
}
function Yg(i) {
  const e = this;
  let t = null, n = 0, s = !1, l = !1;
  const f = new ns(), h = new Rt(), p = { value: null, needsUpdate: !1 };
  this.uniform = p, this.numPlanes = 0, this.numIntersection = 0, this.init = function(M, b) {
    const T = M.length !== 0 || b || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || s;
    return s = b, n = M.length, T;
  }, this.beginShadows = function() {
    l = !0, v(null);
  }, this.endShadows = function() {
    l = !1;
  }, this.setGlobalState = function(M, b) {
    t = v(M, b, 0);
  }, this.setState = function(M, b, T) {
    const C = M.clippingPlanes, D = M.clipIntersection, x = M.clipShadows, _ = i.get(M);
    if (!s || C === null || C.length === 0 || l && !x)
      l ? v(null) : g();
    else {
      const B = l ? 0 : n, U = B * 4;
      let z = _.clippingState || null;
      p.value = z, z = v(C, b, U, T);
      for (let le = 0; le !== U; ++le)
        z[le] = t[le];
      _.clippingState = z, this.numIntersection = D ? this.numPlanes : 0, this.numPlanes += B;
    }
  };
  function g() {
    p.value !== t && (p.value = t, p.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function v(M, b, T, C) {
    const D = M !== null ? M.length : 0;
    let x = null;
    if (D !== 0) {
      if (x = p.value, C !== !0 || x === null) {
        const _ = T + D * 4, B = b.matrixWorldInverse;
        h.getNormalMatrix(B), (x === null || x.length < _) && (x = new Float32Array(_));
        for (let U = 0, z = T; U !== D; ++U, z += 4)
          f.copy(M[U]).applyMatrix4(B, h), f.normal.toArray(x, z), x[z + 3] = f.constant;
      }
      p.value = x, p.needsUpdate = !0;
    }
    return e.numPlanes = D, e.numIntersection = 0, x;
  }
}
function Kg(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(f, h) {
    return h === kl ? f.mapping = qs : h === Hl && (f.mapping = js), f;
  }
  function n(f) {
    if (f && f.isTexture) {
      const h = f.mapping;
      if (h === kl || h === Hl)
        if (e.has(f)) {
          const p = e.get(f).texture;
          return t(p, f.mapping);
        } else {
          const p = f.image;
          if (p && p.height > 0) {
            const g = new ap(p.height);
            return g.fromEquirectangularTexture(i, f), e.set(f, g), f.addEventListener("dispose", s), t(g.texture, f.mapping);
          } else
            return null;
        }
    }
    return f;
  }
  function s(f) {
    const h = f.target;
    h.removeEventListener("dispose", s);
    const p = e.get(h);
    p !== void 0 && (e.delete(h), p.dispose());
  }
  function l() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: l
  };
}
class wc extends wf {
  constructor(e = -1, t = 1, n = 1, s = -1, l = 0.1, f = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = s, this.near = l, this.far = f, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, s, l, f) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = s, this.view.width = l, this.view.height = f, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, s = (this.top + this.bottom) / 2;
    let l = n - e, f = n + e, h = s + t, p = s - t;
    if (this.view !== null && this.view.enabled) {
      const g = (this.right - this.left) / this.view.fullWidth / this.zoom, v = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      l += g * this.view.offsetX, f = l + g * this.view.width, h -= v * this.view.offsetY, p = h - v * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(l, f, h, p, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const zs = 4, wu = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], ss = 20, bl = /* @__PURE__ */ new wc(), Cu = /* @__PURE__ */ new Yt();
let El = null, Tl = 0, Al = 0, wl = !1;
const is = (1 + Math.sqrt(5)) / 2, Bs = 1 / is, Ru = [
  /* @__PURE__ */ new ce(-is, Bs, 0),
  /* @__PURE__ */ new ce(is, Bs, 0),
  /* @__PURE__ */ new ce(-Bs, 0, is),
  /* @__PURE__ */ new ce(Bs, 0, is),
  /* @__PURE__ */ new ce(0, is, -Bs),
  /* @__PURE__ */ new ce(0, is, Bs),
  /* @__PURE__ */ new ce(-1, 1, -1),
  /* @__PURE__ */ new ce(1, 1, -1),
  /* @__PURE__ */ new ce(-1, 1, 1),
  /* @__PURE__ */ new ce(1, 1, 1)
];
class Pu {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, s = 100) {
    El = this._renderer.getRenderTarget(), Tl = this._renderer.getActiveCubeFace(), Al = this._renderer.getActiveMipmapLevel(), wl = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
    const l = this._allocateTargets();
    return l.depthBuffer = !0, this._sceneToCubeUV(e, n, s, l), t > 0 && this._blur(l, 0, 0, t), this._applyPMREM(l), this._cleanup(l), l;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported equirectangular image size is 64 x 32.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported cube size is 16 x 16.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Iu(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Du(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(El, Tl, Al), this._renderer.xr.enabled = wl, e.scissorTest = !1, da(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === qs || e.mapping === js ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), El = this._renderer.getRenderTarget(), Tl = this._renderer.getActiveCubeFace(), Al = this._renderer.getActiveMipmapLevel(), wl = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: Li,
      minFilter: Li,
      generateMipmaps: !1,
      type: wo,
      format: Ii,
      colorSpace: Nr,
      depthBuffer: !1
    }, s = Lu(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Lu(e, t, n);
      const { _lodMax: l } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Zg(l)), this._blurMaterial = Jg(l, e, t);
    }
    return s;
  }
  _compileMaterial(e) {
    const t = new Gi(this._lodPlanes[0], e);
    this._renderer.compile(t, bl);
  }
  _sceneToCubeUV(e, t, n, s) {
    const h = new Si(90, 1, t, n), p = [1, -1, 1, 1, 1, 1], g = [1, 1, 1, -1, -1, -1], v = this._renderer, M = v.autoClear, b = v.toneMapping;
    v.getClearColor(Cu), v.toneMapping = Dr, v.autoClear = !1;
    const T = new bf({
      name: "PMREM.Background",
      side: ei,
      depthWrite: !1,
      depthTest: !1
    }), C = new Gi(new Lo(), T);
    let D = !1;
    const x = e.background;
    x ? x.isColor && (T.color.copy(x), e.background = null, D = !0) : (T.color.copy(Cu), D = !0);
    for (let _ = 0; _ < 6; _++) {
      const B = _ % 3;
      B === 0 ? (h.up.set(0, p[_], 0), h.lookAt(g[_], 0, 0)) : B === 1 ? (h.up.set(0, 0, p[_]), h.lookAt(0, g[_], 0)) : (h.up.set(0, p[_], 0), h.lookAt(0, 0, g[_]));
      const U = this._cubeSize;
      da(s, B * U, _ > 2 ? U : 0, U, U), v.setRenderTarget(s), D && v.render(C, h), v.render(e, h);
    }
    C.geometry.dispose(), C.material.dispose(), v.toneMapping = b, v.autoClear = M, e.background = x;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, s = e.mapping === qs || e.mapping === js;
    s ? (this._cubemapMaterial === null && (this._cubemapMaterial = Iu()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Du());
    const l = s ? this._cubemapMaterial : this._equirectMaterial, f = new Gi(this._lodPlanes[0], l), h = l.uniforms;
    h.envMap.value = e;
    const p = this._cubeSize;
    da(t, 0, 0, 3 * p, 2 * p), n.setRenderTarget(t), n.render(f, bl);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const s = this._lodPlanes.length;
    for (let l = 1; l < s; l++) {
      const f = Math.sqrt(this._sigmas[l] * this._sigmas[l] - this._sigmas[l - 1] * this._sigmas[l - 1]), h = Ru[(s - l - 1) % Ru.length];
      this._blur(e, l - 1, l, f, h);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, s, l) {
    const f = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      f,
      t,
      n,
      s,
      "latitudinal",
      l
    ), this._halfBlur(
      f,
      e,
      n,
      n,
      s,
      "longitudinal",
      l
    );
  }
  _halfBlur(e, t, n, s, l, f, h) {
    const p = this._renderer, g = this._blurMaterial;
    f !== "latitudinal" && f !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const v = 3, M = new Gi(this._lodPlanes[s], g), b = g.uniforms, T = this._sizeLods[n] - 1, C = isFinite(l) ? Math.PI / (2 * T) : 2 * Math.PI / (2 * ss - 1), D = l / C, x = isFinite(l) ? 1 + Math.floor(v * D) : ss;
    x > ss && console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ss}`);
    const _ = [];
    let B = 0;
    for (let c = 0; c < ss; ++c) {
      const oe = c / D, xe = Math.exp(-oe * oe / 2);
      _.push(xe), c === 0 ? B += xe : c < x && (B += 2 * xe);
    }
    for (let c = 0; c < _.length; c++)
      _[c] = _[c] / B;
    b.envMap.value = e.texture, b.samples.value = x, b.weights.value = _, b.latitudinal.value = f === "latitudinal", h && (b.poleAxis.value = h);
    const { _lodMax: U } = this;
    b.dTheta.value = C, b.mipInt.value = U - n;
    const z = this._sizeLods[s], le = 3 * z * (s > U - zs ? s - U + zs : 0), $ = 4 * (this._cubeSize - z);
    da(t, le, $, 3 * z, 2 * z), p.setRenderTarget(t), p.render(M, bl);
  }
}
function Zg(i) {
  const e = [], t = [], n = [];
  let s = i;
  const l = i - zs + 1 + wu.length;
  for (let f = 0; f < l; f++) {
    const h = Math.pow(2, s);
    t.push(h);
    let p = 1 / h;
    f > i - zs ? p = wu[f - i + zs - 1] : f === 0 && (p = 0), n.push(p);
    const g = 1 / (h - 2), v = -g, M = 1 + g, b = [v, v, M, v, M, M, v, v, M, M, v, M], T = 6, C = 6, D = 3, x = 2, _ = 1, B = new Float32Array(D * C * T), U = new Float32Array(x * C * T), z = new Float32Array(_ * C * T);
    for (let $ = 0; $ < T; $++) {
      const c = $ % 3 * 2 / 3 - 1, oe = $ > 2 ? 0 : -1, xe = [
        c,
        oe,
        0,
        c + 2 / 3,
        oe,
        0,
        c + 2 / 3,
        oe + 1,
        0,
        c,
        oe,
        0,
        c + 2 / 3,
        oe + 1,
        0,
        c,
        oe + 1,
        0
      ];
      B.set(xe, D * C * $), U.set(b, x * C * $);
      const w = [$, $, $, $, $, $];
      z.set(w, _ * C * $);
    }
    const le = new fs();
    le.setAttribute("position", new Wi(B, D)), le.setAttribute("uv", new Wi(U, x)), le.setAttribute("faceIndex", new Wi(z, _)), e.push(le), s > zs && s--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Lu(i, e, t) {
  const n = new us(i, e, t);
  return n.texture.mapping = Pa, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function da(i, e, t, n, s) {
  i.viewport.set(e, t, n, s), i.scissor.set(e, t, n, s);
}
function Jg(i, e, t) {
  const n = new Float32Array(ss), s = new ce(0, 1, 0);
  return new fr({
    name: "SphericalGaussianBlur",
    defines: {
      n: ss,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: s }
    },
    vertexShader: Cc(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: Lr,
    depthTest: !1,
    depthWrite: !1
  });
}
function Du() {
  return new fr({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Cc(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: Lr,
    depthTest: !1,
    depthWrite: !1
  });
}
function Iu() {
  return new fr({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Cc(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: Lr,
    depthTest: !1,
    depthWrite: !1
  });
}
function Cc() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function Qg(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(h) {
    if (h && h.isTexture) {
      const p = h.mapping, g = p === kl || p === Hl, v = p === qs || p === js;
      if (g || v) {
        let M = e.get(h);
        const b = M !== void 0 ? M.texture.pmremVersion : 0;
        if (h.isRenderTargetTexture && h.pmremVersion !== b)
          return t === null && (t = new Pu(i)), M = g ? t.fromEquirectangular(h, M) : t.fromCubemap(h, M), M.texture.pmremVersion = h.pmremVersion, e.set(h, M), M.texture;
        if (M !== void 0)
          return M.texture;
        {
          const T = h.image;
          return g && T && T.height > 0 || v && T && s(T) ? (t === null && (t = new Pu(i)), M = g ? t.fromEquirectangular(h) : t.fromCubemap(h), M.texture.pmremVersion = h.pmremVersion, e.set(h, M), h.addEventListener("dispose", l), M.texture) : null;
        }
      }
    }
    return h;
  }
  function s(h) {
    let p = 0;
    const g = 6;
    for (let v = 0; v < g; v++)
      h[v] !== void 0 && p++;
    return p === g;
  }
  function l(h) {
    const p = h.target;
    p.removeEventListener("dispose", l);
    const g = e.get(p);
    g !== void 0 && (e.delete(p), g.dispose());
  }
  function f() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: f
  };
}
function e_(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let s;
    switch (n) {
      case "WEBGL_depth_texture":
        s = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        s = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        s = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        s = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        s = i.getExtension(n);
    }
    return e[n] = s, s;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function() {
      t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const s = t(n);
      return s === null && ba("THREE.WebGLRenderer: " + n + " extension not supported."), s;
    }
  };
}
function t_(i, e, t, n) {
  const s = {}, l = /* @__PURE__ */ new WeakMap();
  function f(M) {
    const b = M.target;
    b.index !== null && e.remove(b.index);
    for (const C in b.attributes)
      e.remove(b.attributes[C]);
    for (const C in b.morphAttributes) {
      const D = b.morphAttributes[C];
      for (let x = 0, _ = D.length; x < _; x++)
        e.remove(D[x]);
    }
    b.removeEventListener("dispose", f), delete s[b.id];
    const T = l.get(b);
    T && (e.remove(T), l.delete(b)), n.releaseStatesOfGeometry(b), b.isInstancedBufferGeometry === !0 && delete b._maxInstanceCount, t.memory.geometries--;
  }
  function h(M, b) {
    return s[b.id] === !0 || (b.addEventListener("dispose", f), s[b.id] = !0, t.memory.geometries++), b;
  }
  function p(M) {
    const b = M.attributes;
    for (const C in b)
      e.update(b[C], i.ARRAY_BUFFER);
    const T = M.morphAttributes;
    for (const C in T) {
      const D = T[C];
      for (let x = 0, _ = D.length; x < _; x++)
        e.update(D[x], i.ARRAY_BUFFER);
    }
  }
  function g(M) {
    const b = [], T = M.index, C = M.attributes.position;
    let D = 0;
    if (T !== null) {
      const B = T.array;
      D = T.version;
      for (let U = 0, z = B.length; U < z; U += 3) {
        const le = B[U + 0], $ = B[U + 1], c = B[U + 2];
        b.push(le, $, $, c, c, le);
      }
    } else if (C !== void 0) {
      const B = C.array;
      D = C.version;
      for (let U = 0, z = B.length / 3 - 1; U < z; U += 3) {
        const le = U + 0, $ = U + 1, c = U + 2;
        b.push(le, $, $, c, c, le);
      }
    } else
      return;
    const x = new (vf(b) ? Tf : Ef)(b, 1);
    x.version = D;
    const _ = l.get(M);
    _ && e.remove(_), l.set(M, x);
  }
  function v(M) {
    const b = l.get(M);
    if (b) {
      const T = M.index;
      T !== null && b.version < T.version && g(M);
    } else
      g(M);
    return l.get(M);
  }
  return {
    get: h,
    update: p,
    getWireframeAttribute: v
  };
}
function n_(i, e, t) {
  let n;
  function s(b) {
    n = b;
  }
  let l, f;
  function h(b) {
    l = b.type, f = b.bytesPerElement;
  }
  function p(b, T) {
    i.drawElements(n, T, l, b * f), t.update(T, n, 1);
  }
  function g(b, T, C) {
    C !== 0 && (i.drawElementsInstanced(n, T, l, b * f, C), t.update(T, n, C));
  }
  function v(b, T, C) {
    if (C === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, T, 0, l, b, 0, C);
    let x = 0;
    for (let _ = 0; _ < C; _++)
      x += T[_];
    t.update(x, n, 1);
  }
  function M(b, T, C, D) {
    if (C === 0) return;
    const x = e.get("WEBGL_multi_draw");
    if (x === null)
      for (let _ = 0; _ < b.length; _++)
        g(b[_] / f, T[_], D[_]);
    else {
      x.multiDrawElementsInstancedWEBGL(n, T, 0, l, b, 0, D, 0, C);
      let _ = 0;
      for (let B = 0; B < C; B++)
        _ += T[B];
      for (let B = 0; B < D.length; B++)
        t.update(_, n, D[B]);
    }
  }
  this.setMode = s, this.setIndex = h, this.render = p, this.renderInstances = g, this.renderMultiDraw = v, this.renderMultiDrawInstances = M;
}
function i_(i) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(l, f, h) {
    switch (t.calls++, f) {
      case i.TRIANGLES:
        t.triangles += h * (l / 3);
        break;
      case i.LINES:
        t.lines += h * (l / 2);
        break;
      case i.LINE_STRIP:
        t.lines += h * (l - 1);
        break;
      case i.LINE_LOOP:
        t.lines += h * l;
        break;
      case i.POINTS:
        t.points += h * l;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", f);
        break;
    }
  }
  function s() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: s,
    update: n
  };
}
function r_(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), s = new Mn();
  function l(f, h, p) {
    const g = f.morphTargetInfluences, v = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, M = v !== void 0 ? v.length : 0;
    let b = n.get(h);
    if (b === void 0 || b.count !== M) {
      let xe = function() {
        c.dispose(), n.delete(h), h.removeEventListener("dispose", xe);
      };
      b !== void 0 && b.texture.dispose();
      const T = h.morphAttributes.position !== void 0, C = h.morphAttributes.normal !== void 0, D = h.morphAttributes.color !== void 0, x = h.morphAttributes.position || [], _ = h.morphAttributes.normal || [], B = h.morphAttributes.color || [];
      let U = 0;
      T === !0 && (U = 1), C === !0 && (U = 2), D === !0 && (U = 3);
      let z = h.attributes.position.count * U, le = 1;
      z > e.maxTextureSize && (le = Math.ceil(z / e.maxTextureSize), z = e.maxTextureSize);
      const $ = new Float32Array(z * le * 4 * M), c = new yf($, z, le, M);
      c.type = ar, c.needsUpdate = !0;
      const oe = U * 4;
      for (let w = 0; w < M; w++) {
        const I = x[w], pe = _[w], J = B[w], de = z * le * 4 * w;
        for (let Ee = 0; Ee < I.count; Ee++) {
          const ie = Ee * oe;
          T === !0 && (s.fromBufferAttribute(I, Ee), $[de + ie + 0] = s.x, $[de + ie + 1] = s.y, $[de + ie + 2] = s.z, $[de + ie + 3] = 0), C === !0 && (s.fromBufferAttribute(pe, Ee), $[de + ie + 4] = s.x, $[de + ie + 5] = s.y, $[de + ie + 6] = s.z, $[de + ie + 7] = 0), D === !0 && (s.fromBufferAttribute(J, Ee), $[de + ie + 8] = s.x, $[de + ie + 9] = s.y, $[de + ie + 10] = s.z, $[de + ie + 11] = J.itemSize === 4 ? s.w : 1);
        }
      }
      b = {
        count: M,
        texture: c,
        size: new Qt(z, le)
      }, n.set(h, b), h.addEventListener("dispose", xe);
    }
    if (f.isInstancedMesh === !0 && f.morphTexture !== null)
      p.getUniforms().setValue(i, "morphTexture", f.morphTexture, t);
    else {
      let T = 0;
      for (let D = 0; D < g.length; D++)
        T += g[D];
      const C = h.morphTargetsRelative ? 1 : 1 - T;
      p.getUniforms().setValue(i, "morphTargetBaseInfluence", C), p.getUniforms().setValue(i, "morphTargetInfluences", g);
    }
    p.getUniforms().setValue(i, "morphTargetsTexture", b.texture, t), p.getUniforms().setValue(i, "morphTargetsTextureSize", b.size);
  }
  return {
    update: l
  };
}
function s_(i, e, t, n) {
  let s = /* @__PURE__ */ new WeakMap();
  function l(p) {
    const g = n.render.frame, v = p.geometry, M = e.get(p, v);
    if (s.get(M) !== g && (e.update(M), s.set(M, g)), p.isInstancedMesh && (p.hasEventListener("dispose", h) === !1 && p.addEventListener("dispose", h), s.get(p) !== g && (t.update(p.instanceMatrix, i.ARRAY_BUFFER), p.instanceColor !== null && t.update(p.instanceColor, i.ARRAY_BUFFER), s.set(p, g))), p.isSkinnedMesh) {
      const b = p.skeleton;
      s.get(b) !== g && (b.update(), s.set(b, g));
    }
    return M;
  }
  function f() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function h(p) {
    const g = p.target;
    g.removeEventListener("dispose", h), t.remove(g.instanceMatrix), g.instanceColor !== null && t.remove(g.instanceColor);
  }
  return {
    update: l,
    dispose: f
  };
}
class Lf extends ti {
  constructor(e, t, n, s, l, f, h, p, g, v = Hs) {
    if (v !== Hs && v !== Ys)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && v === Hs && (n = cs), n === void 0 && v === Ys && (n = $s), super(null, s, l, f, h, p, v, n, g), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = h !== void 0 ? h : Mi, this.minFilter = p !== void 0 ? p : Mi, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const Df = /* @__PURE__ */ new ti(), Nu = /* @__PURE__ */ new Lf(1, 1), If = /* @__PURE__ */ new yf(), Nf = /* @__PURE__ */ new Wd(), Uf = /* @__PURE__ */ new Cf(), Uu = [], Ou = [], Fu = new Float32Array(16), Bu = new Float32Array(9), zu = new Float32Array(4);
function Js(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const s = e * t;
  let l = Uu[s];
  if (l === void 0 && (l = new Float32Array(s), Uu[s] = l), e !== 0) {
    n.toArray(l, 0);
    for (let f = 1, h = 0; f !== e; ++f)
      h += t, i[f].toArray(l, h);
  }
  return l;
}
function An(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function wn(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function Ia(i, e) {
  let t = Ou[e];
  t === void 0 && (t = new Int32Array(e), Ou[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function o_(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function a_(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (An(t, e)) return;
    i.uniform2fv(this.addr, e), wn(t, e);
  }
}
function l_(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (An(t, e)) return;
    i.uniform3fv(this.addr, e), wn(t, e);
  }
}
function c_(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (An(t, e)) return;
    i.uniform4fv(this.addr, e), wn(t, e);
  }
}
function u_(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (An(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), wn(t, e);
  } else {
    if (An(t, n)) return;
    zu.set(n), i.uniformMatrix2fv(this.addr, !1, zu), wn(t, n);
  }
}
function f_(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (An(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), wn(t, e);
  } else {
    if (An(t, n)) return;
    Bu.set(n), i.uniformMatrix3fv(this.addr, !1, Bu), wn(t, n);
  }
}
function h_(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (An(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), wn(t, e);
  } else {
    if (An(t, n)) return;
    Fu.set(n), i.uniformMatrix4fv(this.addr, !1, Fu), wn(t, n);
  }
}
function d_(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function p_(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (An(t, e)) return;
    i.uniform2iv(this.addr, e), wn(t, e);
  }
}
function m_(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (An(t, e)) return;
    i.uniform3iv(this.addr, e), wn(t, e);
  }
}
function g_(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (An(t, e)) return;
    i.uniform4iv(this.addr, e), wn(t, e);
  }
}
function __(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function v_(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (An(t, e)) return;
    i.uniform2uiv(this.addr, e), wn(t, e);
  }
}
function x_(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (An(t, e)) return;
    i.uniform3uiv(this.addr, e), wn(t, e);
  }
}
function y_(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (An(t, e)) return;
    i.uniform4uiv(this.addr, e), wn(t, e);
  }
}
function S_(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s);
  let l;
  this.type === i.SAMPLER_2D_SHADOW ? (Nu.compareFunction = _f, l = Nu) : l = Df, t.setTexture2D(e || l, s);
}
function M_(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTexture3D(e || Nf, s);
}
function b_(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTextureCube(e || Uf, s);
}
function E_(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTexture2DArray(e || If, s);
}
function T_(i) {
  switch (i) {
    case 5126:
      return o_;
    // FLOAT
    case 35664:
      return a_;
    // _VEC2
    case 35665:
      return l_;
    // _VEC3
    case 35666:
      return c_;
    // _VEC4
    case 35674:
      return u_;
    // _MAT2
    case 35675:
      return f_;
    // _MAT3
    case 35676:
      return h_;
    // _MAT4
    case 5124:
    case 35670:
      return d_;
    // INT, BOOL
    case 35667:
    case 35671:
      return p_;
    // _VEC2
    case 35668:
    case 35672:
      return m_;
    // _VEC3
    case 35669:
    case 35673:
      return g_;
    // _VEC4
    case 5125:
      return __;
    // UINT
    case 36294:
      return v_;
    // _VEC2
    case 36295:
      return x_;
    // _VEC3
    case 36296:
      return y_;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return S_;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return M_;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return b_;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return E_;
  }
}
function A_(i, e) {
  i.uniform1fv(this.addr, e);
}
function w_(i, e) {
  const t = Js(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function C_(i, e) {
  const t = Js(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function R_(i, e) {
  const t = Js(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function P_(i, e) {
  const t = Js(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function L_(i, e) {
  const t = Js(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function D_(i, e) {
  const t = Js(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function I_(i, e) {
  i.uniform1iv(this.addr, e);
}
function N_(i, e) {
  i.uniform2iv(this.addr, e);
}
function U_(i, e) {
  i.uniform3iv(this.addr, e);
}
function O_(i, e) {
  i.uniform4iv(this.addr, e);
}
function F_(i, e) {
  i.uniform1uiv(this.addr, e);
}
function B_(i, e) {
  i.uniform2uiv(this.addr, e);
}
function z_(i, e) {
  i.uniform3uiv(this.addr, e);
}
function k_(i, e) {
  i.uniform4uiv(this.addr, e);
}
function H_(i, e, t) {
  const n = this.cache, s = e.length, l = Ia(t, s);
  An(n, l) || (i.uniform1iv(this.addr, l), wn(n, l));
  for (let f = 0; f !== s; ++f)
    t.setTexture2D(e[f] || Df, l[f]);
}
function V_(i, e, t) {
  const n = this.cache, s = e.length, l = Ia(t, s);
  An(n, l) || (i.uniform1iv(this.addr, l), wn(n, l));
  for (let f = 0; f !== s; ++f)
    t.setTexture3D(e[f] || Nf, l[f]);
}
function G_(i, e, t) {
  const n = this.cache, s = e.length, l = Ia(t, s);
  An(n, l) || (i.uniform1iv(this.addr, l), wn(n, l));
  for (let f = 0; f !== s; ++f)
    t.setTextureCube(e[f] || Uf, l[f]);
}
function W_(i, e, t) {
  const n = this.cache, s = e.length, l = Ia(t, s);
  An(n, l) || (i.uniform1iv(this.addr, l), wn(n, l));
  for (let f = 0; f !== s; ++f)
    t.setTexture2DArray(e[f] || If, l[f]);
}
function X_(i) {
  switch (i) {
    case 5126:
      return A_;
    // FLOAT
    case 35664:
      return w_;
    // _VEC2
    case 35665:
      return C_;
    // _VEC3
    case 35666:
      return R_;
    // _VEC4
    case 35674:
      return P_;
    // _MAT2
    case 35675:
      return L_;
    // _MAT3
    case 35676:
      return D_;
    // _MAT4
    case 5124:
    case 35670:
      return I_;
    // INT, BOOL
    case 35667:
    case 35671:
      return N_;
    // _VEC2
    case 35668:
    case 35672:
      return U_;
    // _VEC3
    case 35669:
    case 35673:
      return O_;
    // _VEC4
    case 5125:
      return F_;
    // UINT
    case 36294:
      return B_;
    // _VEC2
    case 36295:
      return z_;
    // _VEC3
    case 36296:
      return k_;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return H_;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return V_;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return G_;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return W_;
  }
}
class q_ {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = T_(t.type);
  }
}
class j_ {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = X_(t.type);
  }
}
class $_ {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const s = this.seq;
    for (let l = 0, f = s.length; l !== f; ++l) {
      const h = s[l];
      h.setValue(e, t[h.id], n);
    }
  }
}
const Cl = /(\w+)(\])?(\[|\.)?/g;
function ku(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function Y_(i, e, t) {
  const n = i.name, s = n.length;
  for (Cl.lastIndex = 0; ; ) {
    const l = Cl.exec(n), f = Cl.lastIndex;
    let h = l[1];
    const p = l[2] === "]", g = l[3];
    if (p && (h = h | 0), g === void 0 || g === "[" && f + 2 === s) {
      ku(t, g === void 0 ? new q_(h, i, e) : new j_(h, i, e));
      break;
    } else {
      let M = t.map[h];
      M === void 0 && (M = new $_(h), ku(t, M)), t = M;
    }
  }
}
class Ea {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const l = e.getActiveUniform(t, s), f = e.getUniformLocation(t, l.name);
      Y_(l, f, this);
    }
  }
  setValue(e, t, n, s) {
    const l = this.map[t];
    l !== void 0 && l.setValue(e, n, s);
  }
  setOptional(e, t, n) {
    const s = t[n];
    s !== void 0 && this.setValue(e, n, s);
  }
  static upload(e, t, n, s) {
    for (let l = 0, f = t.length; l !== f; ++l) {
      const h = t[l], p = n[h.id];
      p.needsUpdate !== !1 && h.setValue(e, p.value, s);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let s = 0, l = e.length; s !== l; ++s) {
      const f = e[s];
      f.id in t && n.push(f);
    }
    return n;
  }
}
function Hu(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const K_ = 37297;
let Z_ = 0;
function J_(i, e) {
  const t = i.split(`
`), n = [], s = Math.max(e - 6, 0), l = Math.min(e + 6, t.length);
  for (let f = s; f < l; f++) {
    const h = f + 1;
    n.push(`${h === e ? ">" : " "} ${h}: ${t[f]}`);
  }
  return n.join(`
`);
}
function Q_(i) {
  const e = en.getPrimaries(en.workingColorSpace), t = en.getPrimaries(i);
  let n;
  switch (e === t ? n = "" : e === wa && t === Aa ? n = "LinearDisplayP3ToLinearSRGB" : e === Aa && t === wa && (n = "LinearSRGBToLinearDisplayP3"), i) {
    case Nr:
    case La:
      return [n, "LinearTransferOETF"];
    case Hi:
    case Tc:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", i), [n, "LinearTransferOETF"];
  }
}
function Vu(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), s = i.getShaderInfoLog(e).trim();
  if (n && s === "") return "";
  const l = /ERROR: 0:(\d+)/.exec(s);
  if (l) {
    const f = parseInt(l[1]);
    return t.toUpperCase() + `

` + s + `

` + J_(i.getShaderSource(e), f);
  } else
    return s;
}
function ev(i, e) {
  const t = Q_(e);
  return `vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function tv(i, e) {
  let t;
  switch (e) {
    case md:
      t = "Linear";
      break;
    case gd:
      t = "Reinhard";
      break;
    case _d:
      t = "Cineon";
      break;
    case vd:
      t = "ACESFilmic";
      break;
    case yd:
      t = "AgX";
      break;
    case Sd:
      t = "Neutral";
      break;
    case xd:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const pa = /* @__PURE__ */ new ce();
function nv() {
  en.getLuminanceCoefficients(pa);
  const i = pa.x.toFixed(4), e = pa.y.toFixed(4), t = pa.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function iv(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(To).join(`
`);
}
function rv(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function sv(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < n; s++) {
    const l = i.getActiveAttrib(e, s), f = l.name;
    let h = 1;
    l.type === i.FLOAT_MAT2 && (h = 2), l.type === i.FLOAT_MAT3 && (h = 3), l.type === i.FLOAT_MAT4 && (h = 4), t[f] = {
      type: l.type,
      location: i.getAttribLocation(e, f),
      locationSize: h
    };
  }
  return t;
}
function To(i) {
  return i !== "";
}
function Gu(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Wu(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const ov = /^[ \t]*#include +<([\w\d./]+)>/gm;
function _c(i) {
  return i.replace(ov, lv);
}
const av = /* @__PURE__ */ new Map();
function lv(i, e) {
  let t = Ct[e];
  if (t === void 0) {
    const n = av.get(e);
    if (n !== void 0)
      t = Ct[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return _c(t);
}
const cv = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Xu(i) {
  return i.replace(cv, uv);
}
function uv(i, e, t, n) {
  let s = "";
  for (let l = parseInt(e); l < parseInt(t); l++)
    s += n.replace(/\[\s*i\s*\]/g, "[ " + l + " ]").replace(/UNROLLED_LOOP_INDEX/g, l);
  return s;
}
function qu(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function fv(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === rf ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === $h ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === sr && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function hv(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case qs:
      case js:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Pa:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function dv(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case js:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function pv(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case sf:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case dd:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case pd:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function mv(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function gv(i, e, t, n) {
  const s = i.getContext(), l = t.defines;
  let f = t.vertexShader, h = t.fragmentShader;
  const p = fv(t), g = hv(t), v = dv(t), M = pv(t), b = mv(t), T = iv(t), C = rv(l), D = s.createProgram();
  let x, _, B = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (x = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    C
  ].filter(To).join(`
`), x.length > 0 && (x += `
`), _ = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    C
  ].filter(To).join(`
`), _.length > 0 && (_ += `
`)) : (x = [
    qu(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    C,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + v : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + p : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(To).join(`
`), _ = [
    qu(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    C,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + g : "",
    t.envMap ? "#define " + v : "",
    t.envMap ? "#define " + M : "",
    b ? "#define CUBEUV_TEXEL_WIDTH " + b.texelWidth : "",
    b ? "#define CUBEUV_TEXEL_HEIGHT " + b.texelHeight : "",
    b ? "#define CUBEUV_MAX_MIP " + b.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.dispersion ? "#define USE_DISPERSION" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + p : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== Dr ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Dr ? Ct.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== Dr ? tv("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ct.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    ev("linearToOutputTexel", t.outputColorSpace),
    nv(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(To).join(`
`)), f = _c(f), f = Gu(f, t), f = Wu(f, t), h = _c(h), h = Gu(h, t), h = Wu(h, t), f = Xu(f), h = Xu(h), t.isRawShaderMaterial !== !0 && (B = `#version 300 es
`, x = [
    T,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + x, _ = [
    "#define varying in",
    t.glslVersion === cu ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === cu ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + _);
  const U = B + x + f, z = B + _ + h, le = Hu(s, s.VERTEX_SHADER, U), $ = Hu(s, s.FRAGMENT_SHADER, z);
  s.attachShader(D, le), s.attachShader(D, $), t.index0AttributeName !== void 0 ? s.bindAttribLocation(D, 0, t.index0AttributeName) : t.morphTargets === !0 && s.bindAttribLocation(D, 0, "position"), s.linkProgram(D);
  function c(I) {
    if (i.debug.checkShaderErrors) {
      const pe = s.getProgramInfoLog(D).trim(), J = s.getShaderInfoLog(le).trim(), de = s.getShaderInfoLog($).trim();
      let Ee = !0, ie = !0;
      if (s.getProgramParameter(D, s.LINK_STATUS) === !1)
        if (Ee = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(s, D, le, $);
        else {
          const Te = Vu(s, le, "vertex"), fe = Vu(s, $, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(D, s.VALIDATE_STATUS) + `

Material Name: ` + I.name + `
Material Type: ` + I.type + `

Program Info Log: ` + pe + `
` + Te + `
` + fe
          );
        }
      else pe !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", pe) : (J === "" || de === "") && (ie = !1);
      ie && (I.diagnostics = {
        runnable: Ee,
        programLog: pe,
        vertexShader: {
          log: J,
          prefix: x
        },
        fragmentShader: {
          log: de,
          prefix: _
        }
      });
    }
    s.deleteShader(le), s.deleteShader($), oe = new Ea(s, D), xe = sv(s, D);
  }
  let oe;
  this.getUniforms = function() {
    return oe === void 0 && c(this), oe;
  };
  let xe;
  this.getAttributes = function() {
    return xe === void 0 && c(this), xe;
  };
  let w = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return w === !1 && (w = s.getProgramParameter(D, K_)), w;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), s.deleteProgram(D), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Z_++, this.cacheKey = e, this.usedTimes = 1, this.program = D, this.vertexShader = le, this.fragmentShader = $, this;
}
let _v = 0;
class vv {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, s = this._getShaderStage(t), l = this._getShaderStage(n), f = this._getShaderCacheForMaterial(e);
    return f.has(s) === !1 && (f.add(s), s.usedTimes++), f.has(l) === !1 && (f.add(l), l.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new xv(e), t.set(e, n)), n;
  }
}
class xv {
  constructor(e) {
    this.id = _v++, this.code = e, this.usedTimes = 0;
  }
}
function yv(i, e, t, n, s, l, f) {
  const h = new Sf(), p = new vv(), g = /* @__PURE__ */ new Set(), v = [], M = s.logarithmicDepthBuffer, b = s.reverseDepthBuffer, T = s.vertexTextures;
  let C = s.precision;
  const D = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function x(w) {
    return g.add(w), w === 0 ? "uv" : `uv${w}`;
  }
  function _(w, I, pe, J, de) {
    const Ee = J.fog, ie = de.geometry, Te = w.isMeshStandardMaterial ? J.environment : null, fe = (w.isMeshStandardMaterial ? t : e).get(w.envMap || Te), Fe = fe && fe.mapping === Pa ? fe.image.height : null, ke = D[w.type];
    w.precision !== null && (C = s.getMaxPrecision(w.precision), C !== w.precision && console.warn("THREE.WebGLProgram.getParameters:", w.precision, "not supported, using", C, "instead."));
    const Z = ie.morphAttributes.position || ie.morphAttributes.normal || ie.morphAttributes.color, It = Z !== void 0 ? Z.length : 0;
    let zt = 0;
    ie.morphAttributes.position !== void 0 && (zt = 1), ie.morphAttributes.normal !== void 0 && (zt = 2), ie.morphAttributes.color !== void 0 && (zt = 3);
    let _e, Ae, Ye, Ne;
    if (ke) {
      const Cn = Vi[ke];
      _e = Cn.vertexShader, Ae = Cn.fragmentShader;
    } else
      _e = w.vertexShader, Ae = w.fragmentShader, p.update(w), Ye = p.getVertexShaderID(w), Ne = p.getFragmentShaderID(w);
    const ht = i.getRenderTarget(), Me = de.isInstancedMesh === !0, ct = de.isBatchedMesh === !0, jt = !!w.map, Mt = !!w.matcap, V = !!fe, pn = !!w.aoMap, Pt = !!w.lightMap, bt = !!w.bumpMap, st = !!w.normalMap, Ot = !!w.displacementMap, dt = !!w.emissiveMap, O = !!w.metalnessMap, R = !!w.roughnessMap, ee = w.anisotropy > 0, ve = w.clearcoat > 0, be = w.dispersion > 0, K = w.iridescence > 0, Ie = w.sheen > 0, Oe = w.transmission > 0, Ke = ee && !!w.anisotropyMap, kt = ve && !!w.clearcoatMap, Ce = ve && !!w.clearcoatNormalMap, Ve = ve && !!w.clearcoatRoughnessMap, rt = K && !!w.iridescenceMap, nt = K && !!w.iridescenceThicknessMap, Ge = Ie && !!w.sheenColorMap, xt = Ie && !!w.sheenRoughnessMap, _t = !!w.specularMap, $t = !!w.specularColorMap, j = !!w.specularIntensityMap, Xe = Oe && !!w.transmissionMap, he = Oe && !!w.thicknessMap, ye = !!w.gradientMap, Ue = !!w.alphaMap, Be = w.alphaTest > 0, Lt = !!w.alphaHash, Ht = !!w.extensions;
    let Kt = Dr;
    w.toneMapped && (ht === null || ht.isXRRenderTarget === !0) && (Kt = i.toneMapping);
    const Ft = {
      shaderID: ke,
      shaderType: w.type,
      shaderName: w.name,
      vertexShader: _e,
      fragmentShader: Ae,
      defines: w.defines,
      customVertexShaderID: Ye,
      customFragmentShaderID: Ne,
      isRawShaderMaterial: w.isRawShaderMaterial === !0,
      glslVersion: w.glslVersion,
      precision: C,
      batching: ct,
      batchingColor: ct && de._colorsTexture !== null,
      instancing: Me,
      instancingColor: Me && de.instanceColor !== null,
      instancingMorph: Me && de.morphTexture !== null,
      supportsVertexTextures: T,
      outputColorSpace: ht === null ? i.outputColorSpace : ht.isXRRenderTarget === !0 ? ht.texture.colorSpace : Nr,
      alphaToCoverage: !!w.alphaToCoverage,
      map: jt,
      matcap: Mt,
      envMap: V,
      envMapMode: V && fe.mapping,
      envMapCubeUVHeight: Fe,
      aoMap: pn,
      lightMap: Pt,
      bumpMap: bt,
      normalMap: st,
      displacementMap: T && Ot,
      emissiveMap: dt,
      normalMapObjectSpace: st && w.normalMapType === Ad,
      normalMapTangentSpace: st && w.normalMapType === Td,
      metalnessMap: O,
      roughnessMap: R,
      anisotropy: ee,
      anisotropyMap: Ke,
      clearcoat: ve,
      clearcoatMap: kt,
      clearcoatNormalMap: Ce,
      clearcoatRoughnessMap: Ve,
      dispersion: be,
      iridescence: K,
      iridescenceMap: rt,
      iridescenceThicknessMap: nt,
      sheen: Ie,
      sheenColorMap: Ge,
      sheenRoughnessMap: xt,
      specularMap: _t,
      specularColorMap: $t,
      specularIntensityMap: j,
      transmission: Oe,
      transmissionMap: Xe,
      thicknessMap: he,
      gradientMap: ye,
      opaque: w.transparent === !1 && w.blending === ks && w.alphaToCoverage === !1,
      alphaMap: Ue,
      alphaTest: Be,
      alphaHash: Lt,
      combine: w.combine,
      //
      mapUv: jt && x(w.map.channel),
      aoMapUv: pn && x(w.aoMap.channel),
      lightMapUv: Pt && x(w.lightMap.channel),
      bumpMapUv: bt && x(w.bumpMap.channel),
      normalMapUv: st && x(w.normalMap.channel),
      displacementMapUv: Ot && x(w.displacementMap.channel),
      emissiveMapUv: dt && x(w.emissiveMap.channel),
      metalnessMapUv: O && x(w.metalnessMap.channel),
      roughnessMapUv: R && x(w.roughnessMap.channel),
      anisotropyMapUv: Ke && x(w.anisotropyMap.channel),
      clearcoatMapUv: kt && x(w.clearcoatMap.channel),
      clearcoatNormalMapUv: Ce && x(w.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Ve && x(w.clearcoatRoughnessMap.channel),
      iridescenceMapUv: rt && x(w.iridescenceMap.channel),
      iridescenceThicknessMapUv: nt && x(w.iridescenceThicknessMap.channel),
      sheenColorMapUv: Ge && x(w.sheenColorMap.channel),
      sheenRoughnessMapUv: xt && x(w.sheenRoughnessMap.channel),
      specularMapUv: _t && x(w.specularMap.channel),
      specularColorMapUv: $t && x(w.specularColorMap.channel),
      specularIntensityMapUv: j && x(w.specularIntensityMap.channel),
      transmissionMapUv: Xe && x(w.transmissionMap.channel),
      thicknessMapUv: he && x(w.thicknessMap.channel),
      alphaMapUv: Ue && x(w.alphaMap.channel),
      //
      vertexTangents: !!ie.attributes.tangent && (st || ee),
      vertexColors: w.vertexColors,
      vertexAlphas: w.vertexColors === !0 && !!ie.attributes.color && ie.attributes.color.itemSize === 4,
      pointsUvs: de.isPoints === !0 && !!ie.attributes.uv && (jt || Ue),
      fog: !!Ee,
      useFog: w.fog === !0,
      fogExp2: !!Ee && Ee.isFogExp2,
      flatShading: w.flatShading === !0,
      sizeAttenuation: w.sizeAttenuation === !0,
      logarithmicDepthBuffer: M,
      reverseDepthBuffer: b,
      skinning: de.isSkinnedMesh === !0,
      morphTargets: ie.morphAttributes.position !== void 0,
      morphNormals: ie.morphAttributes.normal !== void 0,
      morphColors: ie.morphAttributes.color !== void 0,
      morphTargetsCount: It,
      morphTextureStride: zt,
      numDirLights: I.directional.length,
      numPointLights: I.point.length,
      numSpotLights: I.spot.length,
      numSpotLightMaps: I.spotLightMap.length,
      numRectAreaLights: I.rectArea.length,
      numHemiLights: I.hemi.length,
      numDirLightShadows: I.directionalShadowMap.length,
      numPointLightShadows: I.pointShadowMap.length,
      numSpotLightShadows: I.spotShadowMap.length,
      numSpotLightShadowsWithMaps: I.numSpotLightShadowsWithMaps,
      numLightProbes: I.numLightProbes,
      numClippingPlanes: f.numPlanes,
      numClipIntersection: f.numIntersection,
      dithering: w.dithering,
      shadowMapEnabled: i.shadowMap.enabled && pe.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: Kt,
      decodeVideoTexture: jt && w.map.isVideoTexture === !0 && en.getTransfer(w.map.colorSpace) === fn,
      premultipliedAlpha: w.premultipliedAlpha,
      doubleSided: w.side === or,
      flipSided: w.side === ei,
      useDepthPacking: w.depthPacking >= 0,
      depthPacking: w.depthPacking || 0,
      index0AttributeName: w.index0AttributeName,
      extensionClipCullDistance: Ht && w.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (Ht && w.extensions.multiDraw === !0 || ct) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: w.customProgramCacheKey()
    };
    return Ft.vertexUv1s = g.has(1), Ft.vertexUv2s = g.has(2), Ft.vertexUv3s = g.has(3), g.clear(), Ft;
  }
  function B(w) {
    const I = [];
    if (w.shaderID ? I.push(w.shaderID) : (I.push(w.customVertexShaderID), I.push(w.customFragmentShaderID)), w.defines !== void 0)
      for (const pe in w.defines)
        I.push(pe), I.push(w.defines[pe]);
    return w.isRawShaderMaterial === !1 && (U(I, w), z(I, w), I.push(i.outputColorSpace)), I.push(w.customProgramCacheKey), I.join();
  }
  function U(w, I) {
    w.push(I.precision), w.push(I.outputColorSpace), w.push(I.envMapMode), w.push(I.envMapCubeUVHeight), w.push(I.mapUv), w.push(I.alphaMapUv), w.push(I.lightMapUv), w.push(I.aoMapUv), w.push(I.bumpMapUv), w.push(I.normalMapUv), w.push(I.displacementMapUv), w.push(I.emissiveMapUv), w.push(I.metalnessMapUv), w.push(I.roughnessMapUv), w.push(I.anisotropyMapUv), w.push(I.clearcoatMapUv), w.push(I.clearcoatNormalMapUv), w.push(I.clearcoatRoughnessMapUv), w.push(I.iridescenceMapUv), w.push(I.iridescenceThicknessMapUv), w.push(I.sheenColorMapUv), w.push(I.sheenRoughnessMapUv), w.push(I.specularMapUv), w.push(I.specularColorMapUv), w.push(I.specularIntensityMapUv), w.push(I.transmissionMapUv), w.push(I.thicknessMapUv), w.push(I.combine), w.push(I.fogExp2), w.push(I.sizeAttenuation), w.push(I.morphTargetsCount), w.push(I.morphAttributeCount), w.push(I.numDirLights), w.push(I.numPointLights), w.push(I.numSpotLights), w.push(I.numSpotLightMaps), w.push(I.numHemiLights), w.push(I.numRectAreaLights), w.push(I.numDirLightShadows), w.push(I.numPointLightShadows), w.push(I.numSpotLightShadows), w.push(I.numSpotLightShadowsWithMaps), w.push(I.numLightProbes), w.push(I.shadowMapType), w.push(I.toneMapping), w.push(I.numClippingPlanes), w.push(I.numClipIntersection), w.push(I.depthPacking);
  }
  function z(w, I) {
    h.disableAll(), I.supportsVertexTextures && h.enable(0), I.instancing && h.enable(1), I.instancingColor && h.enable(2), I.instancingMorph && h.enable(3), I.matcap && h.enable(4), I.envMap && h.enable(5), I.normalMapObjectSpace && h.enable(6), I.normalMapTangentSpace && h.enable(7), I.clearcoat && h.enable(8), I.iridescence && h.enable(9), I.alphaTest && h.enable(10), I.vertexColors && h.enable(11), I.vertexAlphas && h.enable(12), I.vertexUv1s && h.enable(13), I.vertexUv2s && h.enable(14), I.vertexUv3s && h.enable(15), I.vertexTangents && h.enable(16), I.anisotropy && h.enable(17), I.alphaHash && h.enable(18), I.batching && h.enable(19), I.dispersion && h.enable(20), I.batchingColor && h.enable(21), w.push(h.mask), h.disableAll(), I.fog && h.enable(0), I.useFog && h.enable(1), I.flatShading && h.enable(2), I.logarithmicDepthBuffer && h.enable(3), I.reverseDepthBuffer && h.enable(4), I.skinning && h.enable(5), I.morphTargets && h.enable(6), I.morphNormals && h.enable(7), I.morphColors && h.enable(8), I.premultipliedAlpha && h.enable(9), I.shadowMapEnabled && h.enable(10), I.doubleSided && h.enable(11), I.flipSided && h.enable(12), I.useDepthPacking && h.enable(13), I.dithering && h.enable(14), I.transmission && h.enable(15), I.sheen && h.enable(16), I.opaque && h.enable(17), I.pointsUvs && h.enable(18), I.decodeVideoTexture && h.enable(19), I.alphaToCoverage && h.enable(20), w.push(h.mask);
  }
  function le(w) {
    const I = D[w.type];
    let pe;
    if (I) {
      const J = Vi[I];
      pe = ip.clone(J.uniforms);
    } else
      pe = w.uniforms;
    return pe;
  }
  function $(w, I) {
    let pe;
    for (let J = 0, de = v.length; J < de; J++) {
      const Ee = v[J];
      if (Ee.cacheKey === I) {
        pe = Ee, ++pe.usedTimes;
        break;
      }
    }
    return pe === void 0 && (pe = new gv(i, I, w, l), v.push(pe)), pe;
  }
  function c(w) {
    if (--w.usedTimes === 0) {
      const I = v.indexOf(w);
      v[I] = v[v.length - 1], v.pop(), w.destroy();
    }
  }
  function oe(w) {
    p.remove(w);
  }
  function xe() {
    p.dispose();
  }
  return {
    getParameters: _,
    getProgramCacheKey: B,
    getUniforms: le,
    acquireProgram: $,
    releaseProgram: c,
    releaseShaderCache: oe,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: v,
    dispose: xe
  };
}
function Sv() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(f) {
    return i.has(f);
  }
  function t(f) {
    let h = i.get(f);
    return h === void 0 && (h = {}, i.set(f, h)), h;
  }
  function n(f) {
    i.delete(f);
  }
  function s(f, h, p) {
    i.get(f)[h] = p;
  }
  function l() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: e,
    get: t,
    remove: n,
    update: s,
    dispose: l
  };
}
function Mv(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function ju(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function $u() {
  const i = [];
  let e = 0;
  const t = [], n = [], s = [];
  function l() {
    e = 0, t.length = 0, n.length = 0, s.length = 0;
  }
  function f(M, b, T, C, D, x) {
    let _ = i[e];
    return _ === void 0 ? (_ = {
      id: M.id,
      object: M,
      geometry: b,
      material: T,
      groupOrder: C,
      renderOrder: M.renderOrder,
      z: D,
      group: x
    }, i[e] = _) : (_.id = M.id, _.object = M, _.geometry = b, _.material = T, _.groupOrder = C, _.renderOrder = M.renderOrder, _.z = D, _.group = x), e++, _;
  }
  function h(M, b, T, C, D, x) {
    const _ = f(M, b, T, C, D, x);
    T.transmission > 0 ? n.push(_) : T.transparent === !0 ? s.push(_) : t.push(_);
  }
  function p(M, b, T, C, D, x) {
    const _ = f(M, b, T, C, D, x);
    T.transmission > 0 ? n.unshift(_) : T.transparent === !0 ? s.unshift(_) : t.unshift(_);
  }
  function g(M, b) {
    t.length > 1 && t.sort(M || Mv), n.length > 1 && n.sort(b || ju), s.length > 1 && s.sort(b || ju);
  }
  function v() {
    for (let M = e, b = i.length; M < b; M++) {
      const T = i[M];
      if (T.id === null) break;
      T.id = null, T.object = null, T.geometry = null, T.material = null, T.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: s,
    init: l,
    push: h,
    unshift: p,
    finish: v,
    sort: g
  };
}
function bv() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, s) {
    const l = i.get(n);
    let f;
    return l === void 0 ? (f = new $u(), i.set(n, [f])) : s >= l.length ? (f = new $u(), l.push(f)) : f = l[s], f;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Ev() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new ce(),
            color: new Yt()
          };
          break;
        case "SpotLight":
          t = {
            position: new ce(),
            direction: new ce(),
            color: new Yt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new ce(),
            color: new Yt(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new ce(),
            skyColor: new Yt(),
            groundColor: new Yt()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Yt(),
            position: new ce(),
            halfWidth: new ce(),
            halfHeight: new ce()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function Tv() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Qt()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Qt()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Qt(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let Av = 0;
function wv(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Cv(i) {
  const e = new Ev(), t = Tv(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let g = 0; g < 9; g++) n.probe.push(new ce());
  const s = new ce(), l = new En(), f = new En();
  function h(g) {
    let v = 0, M = 0, b = 0;
    for (let xe = 0; xe < 9; xe++) n.probe[xe].set(0, 0, 0);
    let T = 0, C = 0, D = 0, x = 0, _ = 0, B = 0, U = 0, z = 0, le = 0, $ = 0, c = 0;
    g.sort(wv);
    for (let xe = 0, w = g.length; xe < w; xe++) {
      const I = g[xe], pe = I.color, J = I.intensity, de = I.distance, Ee = I.shadow && I.shadow.map ? I.shadow.map.texture : null;
      if (I.isAmbientLight)
        v += pe.r * J, M += pe.g * J, b += pe.b * J;
      else if (I.isLightProbe) {
        for (let ie = 0; ie < 9; ie++)
          n.probe[ie].addScaledVector(I.sh.coefficients[ie], J);
        c++;
      } else if (I.isDirectionalLight) {
        const ie = e.get(I);
        if (ie.color.copy(I.color).multiplyScalar(I.intensity), I.castShadow) {
          const Te = I.shadow, fe = t.get(I);
          fe.shadowIntensity = Te.intensity, fe.shadowBias = Te.bias, fe.shadowNormalBias = Te.normalBias, fe.shadowRadius = Te.radius, fe.shadowMapSize = Te.mapSize, n.directionalShadow[T] = fe, n.directionalShadowMap[T] = Ee, n.directionalShadowMatrix[T] = I.shadow.matrix, B++;
        }
        n.directional[T] = ie, T++;
      } else if (I.isSpotLight) {
        const ie = e.get(I);
        ie.position.setFromMatrixPosition(I.matrixWorld), ie.color.copy(pe).multiplyScalar(J), ie.distance = de, ie.coneCos = Math.cos(I.angle), ie.penumbraCos = Math.cos(I.angle * (1 - I.penumbra)), ie.decay = I.decay, n.spot[D] = ie;
        const Te = I.shadow;
        if (I.map && (n.spotLightMap[le] = I.map, le++, Te.updateMatrices(I), I.castShadow && $++), n.spotLightMatrix[D] = Te.matrix, I.castShadow) {
          const fe = t.get(I);
          fe.shadowIntensity = Te.intensity, fe.shadowBias = Te.bias, fe.shadowNormalBias = Te.normalBias, fe.shadowRadius = Te.radius, fe.shadowMapSize = Te.mapSize, n.spotShadow[D] = fe, n.spotShadowMap[D] = Ee, z++;
        }
        D++;
      } else if (I.isRectAreaLight) {
        const ie = e.get(I);
        ie.color.copy(pe).multiplyScalar(J), ie.halfWidth.set(I.width * 0.5, 0, 0), ie.halfHeight.set(0, I.height * 0.5, 0), n.rectArea[x] = ie, x++;
      } else if (I.isPointLight) {
        const ie = e.get(I);
        if (ie.color.copy(I.color).multiplyScalar(I.intensity), ie.distance = I.distance, ie.decay = I.decay, I.castShadow) {
          const Te = I.shadow, fe = t.get(I);
          fe.shadowIntensity = Te.intensity, fe.shadowBias = Te.bias, fe.shadowNormalBias = Te.normalBias, fe.shadowRadius = Te.radius, fe.shadowMapSize = Te.mapSize, fe.shadowCameraNear = Te.camera.near, fe.shadowCameraFar = Te.camera.far, n.pointShadow[C] = fe, n.pointShadowMap[C] = Ee, n.pointShadowMatrix[C] = I.shadow.matrix, U++;
        }
        n.point[C] = ie, C++;
      } else if (I.isHemisphereLight) {
        const ie = e.get(I);
        ie.skyColor.copy(I.color).multiplyScalar(J), ie.groundColor.copy(I.groundColor).multiplyScalar(J), n.hemi[_] = ie, _++;
      }
    }
    x > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = ze.LTC_FLOAT_1, n.rectAreaLTC2 = ze.LTC_FLOAT_2) : (n.rectAreaLTC1 = ze.LTC_HALF_1, n.rectAreaLTC2 = ze.LTC_HALF_2)), n.ambient[0] = v, n.ambient[1] = M, n.ambient[2] = b;
    const oe = n.hash;
    (oe.directionalLength !== T || oe.pointLength !== C || oe.spotLength !== D || oe.rectAreaLength !== x || oe.hemiLength !== _ || oe.numDirectionalShadows !== B || oe.numPointShadows !== U || oe.numSpotShadows !== z || oe.numSpotMaps !== le || oe.numLightProbes !== c) && (n.directional.length = T, n.spot.length = D, n.rectArea.length = x, n.point.length = C, n.hemi.length = _, n.directionalShadow.length = B, n.directionalShadowMap.length = B, n.pointShadow.length = U, n.pointShadowMap.length = U, n.spotShadow.length = z, n.spotShadowMap.length = z, n.directionalShadowMatrix.length = B, n.pointShadowMatrix.length = U, n.spotLightMatrix.length = z + le - $, n.spotLightMap.length = le, n.numSpotLightShadowsWithMaps = $, n.numLightProbes = c, oe.directionalLength = T, oe.pointLength = C, oe.spotLength = D, oe.rectAreaLength = x, oe.hemiLength = _, oe.numDirectionalShadows = B, oe.numPointShadows = U, oe.numSpotShadows = z, oe.numSpotMaps = le, oe.numLightProbes = c, n.version = Av++);
  }
  function p(g, v) {
    let M = 0, b = 0, T = 0, C = 0, D = 0;
    const x = v.matrixWorldInverse;
    for (let _ = 0, B = g.length; _ < B; _++) {
      const U = g[_];
      if (U.isDirectionalLight) {
        const z = n.directional[M];
        z.direction.setFromMatrixPosition(U.matrixWorld), s.setFromMatrixPosition(U.target.matrixWorld), z.direction.sub(s), z.direction.transformDirection(x), M++;
      } else if (U.isSpotLight) {
        const z = n.spot[T];
        z.position.setFromMatrixPosition(U.matrixWorld), z.position.applyMatrix4(x), z.direction.setFromMatrixPosition(U.matrixWorld), s.setFromMatrixPosition(U.target.matrixWorld), z.direction.sub(s), z.direction.transformDirection(x), T++;
      } else if (U.isRectAreaLight) {
        const z = n.rectArea[C];
        z.position.setFromMatrixPosition(U.matrixWorld), z.position.applyMatrix4(x), f.identity(), l.copy(U.matrixWorld), l.premultiply(x), f.extractRotation(l), z.halfWidth.set(U.width * 0.5, 0, 0), z.halfHeight.set(0, U.height * 0.5, 0), z.halfWidth.applyMatrix4(f), z.halfHeight.applyMatrix4(f), C++;
      } else if (U.isPointLight) {
        const z = n.point[b];
        z.position.setFromMatrixPosition(U.matrixWorld), z.position.applyMatrix4(x), b++;
      } else if (U.isHemisphereLight) {
        const z = n.hemi[D];
        z.direction.setFromMatrixPosition(U.matrixWorld), z.direction.transformDirection(x), D++;
      }
    }
  }
  return {
    setup: h,
    setupView: p,
    state: n
  };
}
function Yu(i) {
  const e = new Cv(i), t = [], n = [];
  function s(v) {
    g.camera = v, t.length = 0, n.length = 0;
  }
  function l(v) {
    t.push(v);
  }
  function f(v) {
    n.push(v);
  }
  function h() {
    e.setup(t);
  }
  function p(v) {
    e.setupView(t, v);
  }
  const g = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {}
  };
  return {
    init: s,
    state: g,
    setupLights: h,
    setupLightsView: p,
    pushLight: l,
    pushShadow: f
  };
}
function Rv(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(s, l = 0) {
    const f = e.get(s);
    let h;
    return f === void 0 ? (h = new Yu(i), e.set(s, [h])) : l >= f.length ? (h = new Yu(i), f.push(h)) : h = f[l], h;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
class Pv extends Da {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = bd, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Lv extends Da {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Dv = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Iv = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Nv(i, e, t) {
  let n = new Rf();
  const s = new Qt(), l = new Qt(), f = new Mn(), h = new Pv({ depthPacking: Ed }), p = new Lv(), g = {}, v = t.maxTextureSize, M = { [Ir]: ei, [ei]: Ir, [or]: or }, b = new fr({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Qt() },
      radius: { value: 4 }
    },
    vertexShader: Dv,
    fragmentShader: Iv
  }), T = b.clone();
  T.defines.HORIZONTAL_PASS = 1;
  const C = new fs();
  C.setAttribute(
    "position",
    new Wi(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const D = new Gi(C, b), x = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = rf;
  let _ = this.type;
  this.render = function($, c, oe) {
    if (x.enabled === !1 || x.autoUpdate === !1 && x.needsUpdate === !1 || $.length === 0) return;
    const xe = i.getRenderTarget(), w = i.getActiveCubeFace(), I = i.getActiveMipmapLevel(), pe = i.state;
    pe.setBlending(Lr), pe.buffers.color.setClear(1, 1, 1, 1), pe.buffers.depth.setTest(!0), pe.setScissorTest(!1);
    const J = _ !== sr && this.type === sr, de = _ === sr && this.type !== sr;
    for (let Ee = 0, ie = $.length; Ee < ie; Ee++) {
      const Te = $[Ee], fe = Te.shadow;
      if (fe === void 0) {
        console.warn("THREE.WebGLShadowMap:", Te, "has no shadow.");
        continue;
      }
      if (fe.autoUpdate === !1 && fe.needsUpdate === !1) continue;
      s.copy(fe.mapSize);
      const Fe = fe.getFrameExtents();
      if (s.multiply(Fe), l.copy(fe.mapSize), (s.x > v || s.y > v) && (s.x > v && (l.x = Math.floor(v / Fe.x), s.x = l.x * Fe.x, fe.mapSize.x = l.x), s.y > v && (l.y = Math.floor(v / Fe.y), s.y = l.y * Fe.y, fe.mapSize.y = l.y)), fe.map === null || J === !0 || de === !0) {
        const Z = this.type !== sr ? { minFilter: Mi, magFilter: Mi } : {};
        fe.map !== null && fe.map.dispose(), fe.map = new us(s.x, s.y, Z), fe.map.texture.name = Te.name + ".shadowMap", fe.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(fe.map), i.clear();
      const ke = fe.getViewportCount();
      for (let Z = 0; Z < ke; Z++) {
        const It = fe.getViewport(Z);
        f.set(
          l.x * It.x,
          l.y * It.y,
          l.x * It.z,
          l.y * It.w
        ), pe.viewport(f), fe.updateMatrices(Te, Z), n = fe.getFrustum(), z(c, oe, fe.camera, Te, this.type);
      }
      fe.isPointLightShadow !== !0 && this.type === sr && B(fe, oe), fe.needsUpdate = !1;
    }
    _ = this.type, x.needsUpdate = !1, i.setRenderTarget(xe, w, I);
  };
  function B($, c) {
    const oe = e.update(D);
    b.defines.VSM_SAMPLES !== $.blurSamples && (b.defines.VSM_SAMPLES = $.blurSamples, T.defines.VSM_SAMPLES = $.blurSamples, b.needsUpdate = !0, T.needsUpdate = !0), $.mapPass === null && ($.mapPass = new us(s.x, s.y)), b.uniforms.shadow_pass.value = $.map.texture, b.uniforms.resolution.value = $.mapSize, b.uniforms.radius.value = $.radius, i.setRenderTarget($.mapPass), i.clear(), i.renderBufferDirect(c, null, oe, b, D, null), T.uniforms.shadow_pass.value = $.mapPass.texture, T.uniforms.resolution.value = $.mapSize, T.uniforms.radius.value = $.radius, i.setRenderTarget($.map), i.clear(), i.renderBufferDirect(c, null, oe, T, D, null);
  }
  function U($, c, oe, xe) {
    let w = null;
    const I = oe.isPointLight === !0 ? $.customDistanceMaterial : $.customDepthMaterial;
    if (I !== void 0)
      w = I;
    else if (w = oe.isPointLight === !0 ? p : h, i.localClippingEnabled && c.clipShadows === !0 && Array.isArray(c.clippingPlanes) && c.clippingPlanes.length !== 0 || c.displacementMap && c.displacementScale !== 0 || c.alphaMap && c.alphaTest > 0 || c.map && c.alphaTest > 0) {
      const pe = w.uuid, J = c.uuid;
      let de = g[pe];
      de === void 0 && (de = {}, g[pe] = de);
      let Ee = de[J];
      Ee === void 0 && (Ee = w.clone(), de[J] = Ee, c.addEventListener("dispose", le)), w = Ee;
    }
    if (w.visible = c.visible, w.wireframe = c.wireframe, xe === sr ? w.side = c.shadowSide !== null ? c.shadowSide : c.side : w.side = c.shadowSide !== null ? c.shadowSide : M[c.side], w.alphaMap = c.alphaMap, w.alphaTest = c.alphaTest, w.map = c.map, w.clipShadows = c.clipShadows, w.clippingPlanes = c.clippingPlanes, w.clipIntersection = c.clipIntersection, w.displacementMap = c.displacementMap, w.displacementScale = c.displacementScale, w.displacementBias = c.displacementBias, w.wireframeLinewidth = c.wireframeLinewidth, w.linewidth = c.linewidth, oe.isPointLight === !0 && w.isMeshDistanceMaterial === !0) {
      const pe = i.properties.get(w);
      pe.light = oe;
    }
    return w;
  }
  function z($, c, oe, xe, w) {
    if ($.visible === !1) return;
    if ($.layers.test(c.layers) && ($.isMesh || $.isLine || $.isPoints) && ($.castShadow || $.receiveShadow && w === sr) && (!$.frustumCulled || n.intersectsObject($))) {
      $.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse, $.matrixWorld);
      const J = e.update($), de = $.material;
      if (Array.isArray(de)) {
        const Ee = J.groups;
        for (let ie = 0, Te = Ee.length; ie < Te; ie++) {
          const fe = Ee[ie], Fe = de[fe.materialIndex];
          if (Fe && Fe.visible) {
            const ke = U($, Fe, xe, w);
            $.onBeforeShadow(i, $, c, oe, J, ke, fe), i.renderBufferDirect(oe, null, J, ke, $, fe), $.onAfterShadow(i, $, c, oe, J, ke, fe);
          }
        }
      } else if (de.visible) {
        const Ee = U($, de, xe, w);
        $.onBeforeShadow(i, $, c, oe, J, Ee, null), i.renderBufferDirect(oe, null, J, Ee, $, null), $.onAfterShadow(i, $, c, oe, J, Ee, null);
      }
    }
    const pe = $.children;
    for (let J = 0, de = pe.length; J < de; J++)
      z(pe[J], c, oe, xe, w);
  }
  function le($) {
    $.target.removeEventListener("dispose", le);
    for (const oe in g) {
      const xe = g[oe], w = $.target.uuid;
      w in xe && (xe[w].dispose(), delete xe[w]);
    }
  }
}
const Uv = {
  [Il]: Nl,
  [Ul]: Bl,
  [Ol]: zl,
  [Xs]: Fl,
  [Nl]: Il,
  [Bl]: Ul,
  [zl]: Ol,
  [Fl]: Xs
};
function Ov(i) {
  function e() {
    let j = !1;
    const Xe = new Mn();
    let he = null;
    const ye = new Mn(0, 0, 0, 0);
    return {
      setMask: function(Ue) {
        he !== Ue && !j && (i.colorMask(Ue, Ue, Ue, Ue), he = Ue);
      },
      setLocked: function(Ue) {
        j = Ue;
      },
      setClear: function(Ue, Be, Lt, Ht, Kt) {
        Kt === !0 && (Ue *= Ht, Be *= Ht, Lt *= Ht), Xe.set(Ue, Be, Lt, Ht), ye.equals(Xe) === !1 && (i.clearColor(Ue, Be, Lt, Ht), ye.copy(Xe));
      },
      reset: function() {
        j = !1, he = null, ye.set(-1, 0, 0, 0);
      }
    };
  }
  function t() {
    let j = !1, Xe = !1, he = null, ye = null, Ue = null;
    return {
      setReversed: function(Be) {
        Xe = Be;
      },
      setTest: function(Be) {
        Be ? Ye(i.DEPTH_TEST) : Ne(i.DEPTH_TEST);
      },
      setMask: function(Be) {
        he !== Be && !j && (i.depthMask(Be), he = Be);
      },
      setFunc: function(Be) {
        if (Xe && (Be = Uv[Be]), ye !== Be) {
          switch (Be) {
            case Il:
              i.depthFunc(i.NEVER);
              break;
            case Nl:
              i.depthFunc(i.ALWAYS);
              break;
            case Ul:
              i.depthFunc(i.LESS);
              break;
            case Xs:
              i.depthFunc(i.LEQUAL);
              break;
            case Ol:
              i.depthFunc(i.EQUAL);
              break;
            case Fl:
              i.depthFunc(i.GEQUAL);
              break;
            case Bl:
              i.depthFunc(i.GREATER);
              break;
            case zl:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          ye = Be;
        }
      },
      setLocked: function(Be) {
        j = Be;
      },
      setClear: function(Be) {
        Ue !== Be && (i.clearDepth(Be), Ue = Be);
      },
      reset: function() {
        j = !1, he = null, ye = null, Ue = null;
      }
    };
  }
  function n() {
    let j = !1, Xe = null, he = null, ye = null, Ue = null, Be = null, Lt = null, Ht = null, Kt = null;
    return {
      setTest: function(Ft) {
        j || (Ft ? Ye(i.STENCIL_TEST) : Ne(i.STENCIL_TEST));
      },
      setMask: function(Ft) {
        Xe !== Ft && !j && (i.stencilMask(Ft), Xe = Ft);
      },
      setFunc: function(Ft, Cn, qn) {
        (he !== Ft || ye !== Cn || Ue !== qn) && (i.stencilFunc(Ft, Cn, qn), he = Ft, ye = Cn, Ue = qn);
      },
      setOp: function(Ft, Cn, qn) {
        (Be !== Ft || Lt !== Cn || Ht !== qn) && (i.stencilOp(Ft, Cn, qn), Be = Ft, Lt = Cn, Ht = qn);
      },
      setLocked: function(Ft) {
        j = Ft;
      },
      setClear: function(Ft) {
        Kt !== Ft && (i.clearStencil(Ft), Kt = Ft);
      },
      reset: function() {
        j = !1, Xe = null, he = null, ye = null, Ue = null, Be = null, Lt = null, Ht = null, Kt = null;
      }
    };
  }
  const s = new e(), l = new t(), f = new n(), h = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap();
  let g = {}, v = {}, M = /* @__PURE__ */ new WeakMap(), b = [], T = null, C = !1, D = null, x = null, _ = null, B = null, U = null, z = null, le = null, $ = new Yt(0, 0, 0), c = 0, oe = !1, xe = null, w = null, I = null, pe = null, J = null;
  const de = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let Ee = !1, ie = 0;
  const Te = i.getParameter(i.VERSION);
  Te.indexOf("WebGL") !== -1 ? (ie = parseFloat(/^WebGL (\d)/.exec(Te)[1]), Ee = ie >= 1) : Te.indexOf("OpenGL ES") !== -1 && (ie = parseFloat(/^OpenGL ES (\d)/.exec(Te)[1]), Ee = ie >= 2);
  let fe = null, Fe = {};
  const ke = i.getParameter(i.SCISSOR_BOX), Z = i.getParameter(i.VIEWPORT), It = new Mn().fromArray(ke), zt = new Mn().fromArray(Z);
  function _e(j, Xe, he, ye) {
    const Ue = new Uint8Array(4), Be = i.createTexture();
    i.bindTexture(j, Be), i.texParameteri(j, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(j, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Lt = 0; Lt < he; Lt++)
      j === i.TEXTURE_3D || j === i.TEXTURE_2D_ARRAY ? i.texImage3D(Xe, 0, i.RGBA, 1, 1, ye, 0, i.RGBA, i.UNSIGNED_BYTE, Ue) : i.texImage2D(Xe + Lt, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, Ue);
    return Be;
  }
  const Ae = {};
  Ae[i.TEXTURE_2D] = _e(i.TEXTURE_2D, i.TEXTURE_2D, 1), Ae[i.TEXTURE_CUBE_MAP] = _e(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Ae[i.TEXTURE_2D_ARRAY] = _e(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), Ae[i.TEXTURE_3D] = _e(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), l.setClear(1), f.setClear(0), Ye(i.DEPTH_TEST), l.setFunc(Xs), Pt(!1), bt(iu), Ye(i.CULL_FACE), V(Lr);
  function Ye(j) {
    g[j] !== !0 && (i.enable(j), g[j] = !0);
  }
  function Ne(j) {
    g[j] !== !1 && (i.disable(j), g[j] = !1);
  }
  function ht(j, Xe) {
    return v[j] !== Xe ? (i.bindFramebuffer(j, Xe), v[j] = Xe, j === i.DRAW_FRAMEBUFFER && (v[i.FRAMEBUFFER] = Xe), j === i.FRAMEBUFFER && (v[i.DRAW_FRAMEBUFFER] = Xe), !0) : !1;
  }
  function Me(j, Xe) {
    let he = b, ye = !1;
    if (j) {
      he = M.get(Xe), he === void 0 && (he = [], M.set(Xe, he));
      const Ue = j.textures;
      if (he.length !== Ue.length || he[0] !== i.COLOR_ATTACHMENT0) {
        for (let Be = 0, Lt = Ue.length; Be < Lt; Be++)
          he[Be] = i.COLOR_ATTACHMENT0 + Be;
        he.length = Ue.length, ye = !0;
      }
    } else
      he[0] !== i.BACK && (he[0] = i.BACK, ye = !0);
    ye && i.drawBuffers(he);
  }
  function ct(j) {
    return T !== j ? (i.useProgram(j), T = j, !0) : !1;
  }
  const jt = {
    [rs]: i.FUNC_ADD,
    [Kh]: i.FUNC_SUBTRACT,
    [Zh]: i.FUNC_REVERSE_SUBTRACT
  };
  jt[Jh] = i.MIN, jt[Qh] = i.MAX;
  const Mt = {
    [ed]: i.ZERO,
    [td]: i.ONE,
    [nd]: i.SRC_COLOR,
    [Ll]: i.SRC_ALPHA,
    [ld]: i.SRC_ALPHA_SATURATE,
    [od]: i.DST_COLOR,
    [rd]: i.DST_ALPHA,
    [id]: i.ONE_MINUS_SRC_COLOR,
    [Dl]: i.ONE_MINUS_SRC_ALPHA,
    [ad]: i.ONE_MINUS_DST_COLOR,
    [sd]: i.ONE_MINUS_DST_ALPHA,
    [cd]: i.CONSTANT_COLOR,
    [ud]: i.ONE_MINUS_CONSTANT_COLOR,
    [fd]: i.CONSTANT_ALPHA,
    [hd]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function V(j, Xe, he, ye, Ue, Be, Lt, Ht, Kt, Ft) {
    if (j === Lr) {
      C === !0 && (Ne(i.BLEND), C = !1);
      return;
    }
    if (C === !1 && (Ye(i.BLEND), C = !0), j !== Yh) {
      if (j !== D || Ft !== oe) {
        if ((x !== rs || U !== rs) && (i.blendEquation(i.FUNC_ADD), x = rs, U = rs), Ft)
          switch (j) {
            case ks:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case ru:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case su:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case ou:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", j);
              break;
          }
        else
          switch (j) {
            case ks:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case ru:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case su:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case ou:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", j);
              break;
          }
        _ = null, B = null, z = null, le = null, $.set(0, 0, 0), c = 0, D = j, oe = Ft;
      }
      return;
    }
    Ue = Ue || Xe, Be = Be || he, Lt = Lt || ye, (Xe !== x || Ue !== U) && (i.blendEquationSeparate(jt[Xe], jt[Ue]), x = Xe, U = Ue), (he !== _ || ye !== B || Be !== z || Lt !== le) && (i.blendFuncSeparate(Mt[he], Mt[ye], Mt[Be], Mt[Lt]), _ = he, B = ye, z = Be, le = Lt), (Ht.equals($) === !1 || Kt !== c) && (i.blendColor(Ht.r, Ht.g, Ht.b, Kt), $.copy(Ht), c = Kt), D = j, oe = !1;
  }
  function pn(j, Xe) {
    j.side === or ? Ne(i.CULL_FACE) : Ye(i.CULL_FACE);
    let he = j.side === ei;
    Xe && (he = !he), Pt(he), j.blending === ks && j.transparent === !1 ? V(Lr) : V(j.blending, j.blendEquation, j.blendSrc, j.blendDst, j.blendEquationAlpha, j.blendSrcAlpha, j.blendDstAlpha, j.blendColor, j.blendAlpha, j.premultipliedAlpha), l.setFunc(j.depthFunc), l.setTest(j.depthTest), l.setMask(j.depthWrite), s.setMask(j.colorWrite);
    const ye = j.stencilWrite;
    f.setTest(ye), ye && (f.setMask(j.stencilWriteMask), f.setFunc(j.stencilFunc, j.stencilRef, j.stencilFuncMask), f.setOp(j.stencilFail, j.stencilZFail, j.stencilZPass)), Ot(j.polygonOffset, j.polygonOffsetFactor, j.polygonOffsetUnits), j.alphaToCoverage === !0 ? Ye(i.SAMPLE_ALPHA_TO_COVERAGE) : Ne(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Pt(j) {
    xe !== j && (j ? i.frontFace(i.CW) : i.frontFace(i.CCW), xe = j);
  }
  function bt(j) {
    j !== qh ? (Ye(i.CULL_FACE), j !== w && (j === iu ? i.cullFace(i.BACK) : j === jh ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : Ne(i.CULL_FACE), w = j;
  }
  function st(j) {
    j !== I && (Ee && i.lineWidth(j), I = j);
  }
  function Ot(j, Xe, he) {
    j ? (Ye(i.POLYGON_OFFSET_FILL), (pe !== Xe || J !== he) && (i.polygonOffset(Xe, he), pe = Xe, J = he)) : Ne(i.POLYGON_OFFSET_FILL);
  }
  function dt(j) {
    j ? Ye(i.SCISSOR_TEST) : Ne(i.SCISSOR_TEST);
  }
  function O(j) {
    j === void 0 && (j = i.TEXTURE0 + de - 1), fe !== j && (i.activeTexture(j), fe = j);
  }
  function R(j, Xe, he) {
    he === void 0 && (fe === null ? he = i.TEXTURE0 + de - 1 : he = fe);
    let ye = Fe[he];
    ye === void 0 && (ye = { type: void 0, texture: void 0 }, Fe[he] = ye), (ye.type !== j || ye.texture !== Xe) && (fe !== he && (i.activeTexture(he), fe = he), i.bindTexture(j, Xe || Ae[j]), ye.type = j, ye.texture = Xe);
  }
  function ee() {
    const j = Fe[fe];
    j !== void 0 && j.type !== void 0 && (i.bindTexture(j.type, null), j.type = void 0, j.texture = void 0);
  }
  function ve() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (j) {
      console.error("THREE.WebGLState:", j);
    }
  }
  function be() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (j) {
      console.error("THREE.WebGLState:", j);
    }
  }
  function K() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (j) {
      console.error("THREE.WebGLState:", j);
    }
  }
  function Ie() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (j) {
      console.error("THREE.WebGLState:", j);
    }
  }
  function Oe() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (j) {
      console.error("THREE.WebGLState:", j);
    }
  }
  function Ke() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (j) {
      console.error("THREE.WebGLState:", j);
    }
  }
  function kt() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (j) {
      console.error("THREE.WebGLState:", j);
    }
  }
  function Ce() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (j) {
      console.error("THREE.WebGLState:", j);
    }
  }
  function Ve() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (j) {
      console.error("THREE.WebGLState:", j);
    }
  }
  function rt() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (j) {
      console.error("THREE.WebGLState:", j);
    }
  }
  function nt(j) {
    It.equals(j) === !1 && (i.scissor(j.x, j.y, j.z, j.w), It.copy(j));
  }
  function Ge(j) {
    zt.equals(j) === !1 && (i.viewport(j.x, j.y, j.z, j.w), zt.copy(j));
  }
  function xt(j, Xe) {
    let he = p.get(Xe);
    he === void 0 && (he = /* @__PURE__ */ new WeakMap(), p.set(Xe, he));
    let ye = he.get(j);
    ye === void 0 && (ye = i.getUniformBlockIndex(Xe, j.name), he.set(j, ye));
  }
  function _t(j, Xe) {
    const ye = p.get(Xe).get(j);
    h.get(Xe) !== ye && (i.uniformBlockBinding(Xe, ye, j.__bindingPointIndex), h.set(Xe, ye));
  }
  function $t() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), g = {}, fe = null, Fe = {}, v = {}, M = /* @__PURE__ */ new WeakMap(), b = [], T = null, C = !1, D = null, x = null, _ = null, B = null, U = null, z = null, le = null, $ = new Yt(0, 0, 0), c = 0, oe = !1, xe = null, w = null, I = null, pe = null, J = null, It.set(0, 0, i.canvas.width, i.canvas.height), zt.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), l.reset(), f.reset();
  }
  return {
    buffers: {
      color: s,
      depth: l,
      stencil: f
    },
    enable: Ye,
    disable: Ne,
    bindFramebuffer: ht,
    drawBuffers: Me,
    useProgram: ct,
    setBlending: V,
    setMaterial: pn,
    setFlipSided: Pt,
    setCullFace: bt,
    setLineWidth: st,
    setPolygonOffset: Ot,
    setScissorTest: dt,
    activeTexture: O,
    bindTexture: R,
    unbindTexture: ee,
    compressedTexImage2D: ve,
    compressedTexImage3D: be,
    texImage2D: Ve,
    texImage3D: rt,
    updateUBOMapping: xt,
    uniformBlockBinding: _t,
    texStorage2D: kt,
    texStorage3D: Ce,
    texSubImage2D: K,
    texSubImage3D: Ie,
    compressedTexSubImage2D: Oe,
    compressedTexSubImage3D: Ke,
    scissor: nt,
    viewport: Ge,
    reset: $t
  };
}
function Ku(i, e, t, n) {
  const s = Fv(n);
  switch (t) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case uf:
      return i * e;
    case hf:
      return i * e;
    case df:
      return i * e * 2;
    case pf:
      return i * e / s.components * s.byteLength;
    case Mc:
      return i * e / s.components * s.byteLength;
    case mf:
      return i * e * 2 / s.components * s.byteLength;
    case bc:
      return i * e * 2 / s.components * s.byteLength;
    case ff:
      return i * e * 3 / s.components * s.byteLength;
    case Ii:
      return i * e * 4 / s.components * s.byteLength;
    case Ec:
      return i * e * 4 / s.components * s.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case va:
    case xa:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case ya:
    case Sa:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case Xl:
    case jl:
      return Math.max(i, 16) * Math.max(e, 8) / 4;
    case Wl:
    case ql:
      return Math.max(i, 8) * Math.max(e, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case $l:
    case Yl:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Kl:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case Zl:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Jl:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Ql:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case ec:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case tc:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case nc:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case ic:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case rc:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case sc:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case oc:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case ac:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case lc:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case cc:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case uc:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case Ma:
    case fc:
    case hc:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case gf:
    case dc:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case pc:
    case mc:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function Fv(i) {
  switch (i) {
    case cr:
    case af:
      return { byteLength: 1, components: 1 };
    case Ao:
    case lf:
    case wo:
      return { byteLength: 2, components: 1 };
    case yc:
    case Sc:
      return { byteLength: 2, components: 4 };
    case cs:
    case xc:
    case ar:
      return { byteLength: 4, components: 1 };
    case cf:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
function Bv(i, e, t, n, s, l, f) {
  const h = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, p = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), g = new Qt(), v = /* @__PURE__ */ new WeakMap();
  let M;
  const b = /* @__PURE__ */ new WeakMap();
  let T = !1;
  try {
    T = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function C(O, R) {
    return T ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(O, R)
    ) : Ra("canvas");
  }
  function D(O, R, ee) {
    let ve = 1;
    const be = dt(O);
    if ((be.width > ee || be.height > ee) && (ve = ee / Math.max(be.width, be.height)), ve < 1)
      if (typeof HTMLImageElement < "u" && O instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && O instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && O instanceof ImageBitmap || typeof VideoFrame < "u" && O instanceof VideoFrame) {
        const K = Math.floor(ve * be.width), Ie = Math.floor(ve * be.height);
        M === void 0 && (M = C(K, Ie));
        const Oe = R ? C(K, Ie) : M;
        return Oe.width = K, Oe.height = Ie, Oe.getContext("2d").drawImage(O, 0, 0, K, Ie), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + be.width + "x" + be.height + ") to (" + K + "x" + Ie + ")."), Oe;
      } else
        return "data" in O && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + be.width + "x" + be.height + ")."), O;
    return O;
  }
  function x(O) {
    return O.generateMipmaps && O.minFilter !== Mi && O.minFilter !== Li;
  }
  function _(O) {
    i.generateMipmap(O);
  }
  function B(O, R, ee, ve, be = !1) {
    if (O !== null) {
      if (i[O] !== void 0) return i[O];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + O + "'");
    }
    let K = R;
    if (R === i.RED && (ee === i.FLOAT && (K = i.R32F), ee === i.HALF_FLOAT && (K = i.R16F), ee === i.UNSIGNED_BYTE && (K = i.R8)), R === i.RED_INTEGER && (ee === i.UNSIGNED_BYTE && (K = i.R8UI), ee === i.UNSIGNED_SHORT && (K = i.R16UI), ee === i.UNSIGNED_INT && (K = i.R32UI), ee === i.BYTE && (K = i.R8I), ee === i.SHORT && (K = i.R16I), ee === i.INT && (K = i.R32I)), R === i.RG && (ee === i.FLOAT && (K = i.RG32F), ee === i.HALF_FLOAT && (K = i.RG16F), ee === i.UNSIGNED_BYTE && (K = i.RG8)), R === i.RG_INTEGER && (ee === i.UNSIGNED_BYTE && (K = i.RG8UI), ee === i.UNSIGNED_SHORT && (K = i.RG16UI), ee === i.UNSIGNED_INT && (K = i.RG32UI), ee === i.BYTE && (K = i.RG8I), ee === i.SHORT && (K = i.RG16I), ee === i.INT && (K = i.RG32I)), R === i.RGB_INTEGER && (ee === i.UNSIGNED_BYTE && (K = i.RGB8UI), ee === i.UNSIGNED_SHORT && (K = i.RGB16UI), ee === i.UNSIGNED_INT && (K = i.RGB32UI), ee === i.BYTE && (K = i.RGB8I), ee === i.SHORT && (K = i.RGB16I), ee === i.INT && (K = i.RGB32I)), R === i.RGBA_INTEGER && (ee === i.UNSIGNED_BYTE && (K = i.RGBA8UI), ee === i.UNSIGNED_SHORT && (K = i.RGBA16UI), ee === i.UNSIGNED_INT && (K = i.RGBA32UI), ee === i.BYTE && (K = i.RGBA8I), ee === i.SHORT && (K = i.RGBA16I), ee === i.INT && (K = i.RGBA32I)), R === i.RGB && ee === i.UNSIGNED_INT_5_9_9_9_REV && (K = i.RGB9_E5), R === i.RGBA) {
      const Ie = be ? Ta : en.getTransfer(ve);
      ee === i.FLOAT && (K = i.RGBA32F), ee === i.HALF_FLOAT && (K = i.RGBA16F), ee === i.UNSIGNED_BYTE && (K = Ie === fn ? i.SRGB8_ALPHA8 : i.RGBA8), ee === i.UNSIGNED_SHORT_4_4_4_4 && (K = i.RGBA4), ee === i.UNSIGNED_SHORT_5_5_5_1 && (K = i.RGB5_A1);
    }
    return (K === i.R16F || K === i.R32F || K === i.RG16F || K === i.RG32F || K === i.RGBA16F || K === i.RGBA32F) && e.get("EXT_color_buffer_float"), K;
  }
  function U(O, R) {
    let ee;
    return O ? R === null || R === cs || R === $s ? ee = i.DEPTH24_STENCIL8 : R === ar ? ee = i.DEPTH32F_STENCIL8 : R === Ao && (ee = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : R === null || R === cs || R === $s ? ee = i.DEPTH_COMPONENT24 : R === ar ? ee = i.DEPTH_COMPONENT32F : R === Ao && (ee = i.DEPTH_COMPONENT16), ee;
  }
  function z(O, R) {
    return x(O) === !0 || O.isFramebufferTexture && O.minFilter !== Mi && O.minFilter !== Li ? Math.log2(Math.max(R.width, R.height)) + 1 : O.mipmaps !== void 0 && O.mipmaps.length > 0 ? O.mipmaps.length : O.isCompressedTexture && Array.isArray(O.image) ? R.mipmaps.length : 1;
  }
  function le(O) {
    const R = O.target;
    R.removeEventListener("dispose", le), c(R), R.isVideoTexture && v.delete(R);
  }
  function $(O) {
    const R = O.target;
    R.removeEventListener("dispose", $), xe(R);
  }
  function c(O) {
    const R = n.get(O);
    if (R.__webglInit === void 0) return;
    const ee = O.source, ve = b.get(ee);
    if (ve) {
      const be = ve[R.__cacheKey];
      be.usedTimes--, be.usedTimes === 0 && oe(O), Object.keys(ve).length === 0 && b.delete(ee);
    }
    n.remove(O);
  }
  function oe(O) {
    const R = n.get(O);
    i.deleteTexture(R.__webglTexture);
    const ee = O.source, ve = b.get(ee);
    delete ve[R.__cacheKey], f.memory.textures--;
  }
  function xe(O) {
    const R = n.get(O);
    if (O.depthTexture && O.depthTexture.dispose(), O.isWebGLCubeRenderTarget)
      for (let ve = 0; ve < 6; ve++) {
        if (Array.isArray(R.__webglFramebuffer[ve]))
          for (let be = 0; be < R.__webglFramebuffer[ve].length; be++) i.deleteFramebuffer(R.__webglFramebuffer[ve][be]);
        else
          i.deleteFramebuffer(R.__webglFramebuffer[ve]);
        R.__webglDepthbuffer && i.deleteRenderbuffer(R.__webglDepthbuffer[ve]);
      }
    else {
      if (Array.isArray(R.__webglFramebuffer))
        for (let ve = 0; ve < R.__webglFramebuffer.length; ve++) i.deleteFramebuffer(R.__webglFramebuffer[ve]);
      else
        i.deleteFramebuffer(R.__webglFramebuffer);
      if (R.__webglDepthbuffer && i.deleteRenderbuffer(R.__webglDepthbuffer), R.__webglMultisampledFramebuffer && i.deleteFramebuffer(R.__webglMultisampledFramebuffer), R.__webglColorRenderbuffer)
        for (let ve = 0; ve < R.__webglColorRenderbuffer.length; ve++)
          R.__webglColorRenderbuffer[ve] && i.deleteRenderbuffer(R.__webglColorRenderbuffer[ve]);
      R.__webglDepthRenderbuffer && i.deleteRenderbuffer(R.__webglDepthRenderbuffer);
    }
    const ee = O.textures;
    for (let ve = 0, be = ee.length; ve < be; ve++) {
      const K = n.get(ee[ve]);
      K.__webglTexture && (i.deleteTexture(K.__webglTexture), f.memory.textures--), n.remove(ee[ve]);
    }
    n.remove(O);
  }
  let w = 0;
  function I() {
    w = 0;
  }
  function pe() {
    const O = w;
    return O >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + O + " texture units while this GPU supports only " + s.maxTextures), w += 1, O;
  }
  function J(O) {
    const R = [];
    return R.push(O.wrapS), R.push(O.wrapT), R.push(O.wrapR || 0), R.push(O.magFilter), R.push(O.minFilter), R.push(O.anisotropy), R.push(O.internalFormat), R.push(O.format), R.push(O.type), R.push(O.generateMipmaps), R.push(O.premultiplyAlpha), R.push(O.flipY), R.push(O.unpackAlignment), R.push(O.colorSpace), R.join();
  }
  function de(O, R) {
    const ee = n.get(O);
    if (O.isVideoTexture && st(O), O.isRenderTargetTexture === !1 && O.version > 0 && ee.__version !== O.version) {
      const ve = O.image;
      if (ve === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (ve.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        zt(ee, O, R);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, ee.__webglTexture, i.TEXTURE0 + R);
  }
  function Ee(O, R) {
    const ee = n.get(O);
    if (O.version > 0 && ee.__version !== O.version) {
      zt(ee, O, R);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, ee.__webglTexture, i.TEXTURE0 + R);
  }
  function ie(O, R) {
    const ee = n.get(O);
    if (O.version > 0 && ee.__version !== O.version) {
      zt(ee, O, R);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, ee.__webglTexture, i.TEXTURE0 + R);
  }
  function Te(O, R) {
    const ee = n.get(O);
    if (O.version > 0 && ee.__version !== O.version) {
      _e(ee, O, R);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, ee.__webglTexture, i.TEXTURE0 + R);
  }
  const fe = {
    [Vl]: i.REPEAT,
    [os]: i.CLAMP_TO_EDGE,
    [Gl]: i.MIRRORED_REPEAT
  }, Fe = {
    [Mi]: i.NEAREST,
    [Md]: i.NEAREST_MIPMAP_NEAREST,
    [$o]: i.NEAREST_MIPMAP_LINEAR,
    [Li]: i.LINEAR,
    [Qa]: i.LINEAR_MIPMAP_NEAREST,
    [as]: i.LINEAR_MIPMAP_LINEAR
  }, ke = {
    [wd]: i.NEVER,
    [Id]: i.ALWAYS,
    [Cd]: i.LESS,
    [_f]: i.LEQUAL,
    [Rd]: i.EQUAL,
    [Dd]: i.GEQUAL,
    [Pd]: i.GREATER,
    [Ld]: i.NOTEQUAL
  };
  function Z(O, R) {
    if (R.type === ar && e.has("OES_texture_float_linear") === !1 && (R.magFilter === Li || R.magFilter === Qa || R.magFilter === $o || R.magFilter === as || R.minFilter === Li || R.minFilter === Qa || R.minFilter === $o || R.minFilter === as) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(O, i.TEXTURE_WRAP_S, fe[R.wrapS]), i.texParameteri(O, i.TEXTURE_WRAP_T, fe[R.wrapT]), (O === i.TEXTURE_3D || O === i.TEXTURE_2D_ARRAY) && i.texParameteri(O, i.TEXTURE_WRAP_R, fe[R.wrapR]), i.texParameteri(O, i.TEXTURE_MAG_FILTER, Fe[R.magFilter]), i.texParameteri(O, i.TEXTURE_MIN_FILTER, Fe[R.minFilter]), R.compareFunction && (i.texParameteri(O, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(O, i.TEXTURE_COMPARE_FUNC, ke[R.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (R.magFilter === Mi || R.minFilter !== $o && R.minFilter !== as || R.type === ar && e.has("OES_texture_float_linear") === !1) return;
      if (R.anisotropy > 1 || n.get(R).__currentAnisotropy) {
        const ee = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(O, ee.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(R.anisotropy, s.getMaxAnisotropy())), n.get(R).__currentAnisotropy = R.anisotropy;
      }
    }
  }
  function It(O, R) {
    let ee = !1;
    O.__webglInit === void 0 && (O.__webglInit = !0, R.addEventListener("dispose", le));
    const ve = R.source;
    let be = b.get(ve);
    be === void 0 && (be = {}, b.set(ve, be));
    const K = J(R);
    if (K !== O.__cacheKey) {
      be[K] === void 0 && (be[K] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, f.memory.textures++, ee = !0), be[K].usedTimes++;
      const Ie = be[O.__cacheKey];
      Ie !== void 0 && (be[O.__cacheKey].usedTimes--, Ie.usedTimes === 0 && oe(R)), O.__cacheKey = K, O.__webglTexture = be[K].texture;
    }
    return ee;
  }
  function zt(O, R, ee) {
    let ve = i.TEXTURE_2D;
    (R.isDataArrayTexture || R.isCompressedArrayTexture) && (ve = i.TEXTURE_2D_ARRAY), R.isData3DTexture && (ve = i.TEXTURE_3D);
    const be = It(O, R), K = R.source;
    t.bindTexture(ve, O.__webglTexture, i.TEXTURE0 + ee);
    const Ie = n.get(K);
    if (K.version !== Ie.__version || be === !0) {
      t.activeTexture(i.TEXTURE0 + ee);
      const Oe = en.getPrimaries(en.workingColorSpace), Ke = R.colorSpace === Pr ? null : en.getPrimaries(R.colorSpace), kt = R.colorSpace === Pr || Oe === Ke ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, R.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, R.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, R.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, kt);
      let Ce = D(R.image, !1, s.maxTextureSize);
      Ce = Ot(R, Ce);
      const Ve = l.convert(R.format, R.colorSpace), rt = l.convert(R.type);
      let nt = B(R.internalFormat, Ve, rt, R.colorSpace, R.isVideoTexture);
      Z(ve, R);
      let Ge;
      const xt = R.mipmaps, _t = R.isVideoTexture !== !0, $t = Ie.__version === void 0 || be === !0, j = K.dataReady, Xe = z(R, Ce);
      if (R.isDepthTexture)
        nt = U(R.format === Ys, R.type), $t && (_t ? t.texStorage2D(i.TEXTURE_2D, 1, nt, Ce.width, Ce.height) : t.texImage2D(i.TEXTURE_2D, 0, nt, Ce.width, Ce.height, 0, Ve, rt, null));
      else if (R.isDataTexture)
        if (xt.length > 0) {
          _t && $t && t.texStorage2D(i.TEXTURE_2D, Xe, nt, xt[0].width, xt[0].height);
          for (let he = 0, ye = xt.length; he < ye; he++)
            Ge = xt[he], _t ? j && t.texSubImage2D(i.TEXTURE_2D, he, 0, 0, Ge.width, Ge.height, Ve, rt, Ge.data) : t.texImage2D(i.TEXTURE_2D, he, nt, Ge.width, Ge.height, 0, Ve, rt, Ge.data);
          R.generateMipmaps = !1;
        } else
          _t ? ($t && t.texStorage2D(i.TEXTURE_2D, Xe, nt, Ce.width, Ce.height), j && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, Ce.width, Ce.height, Ve, rt, Ce.data)) : t.texImage2D(i.TEXTURE_2D, 0, nt, Ce.width, Ce.height, 0, Ve, rt, Ce.data);
      else if (R.isCompressedTexture)
        if (R.isCompressedArrayTexture) {
          _t && $t && t.texStorage3D(i.TEXTURE_2D_ARRAY, Xe, nt, xt[0].width, xt[0].height, Ce.depth);
          for (let he = 0, ye = xt.length; he < ye; he++)
            if (Ge = xt[he], R.format !== Ii)
              if (Ve !== null)
                if (_t) {
                  if (j)
                    if (R.layerUpdates.size > 0) {
                      const Ue = Ku(Ge.width, Ge.height, R.format, R.type);
                      for (const Be of R.layerUpdates) {
                        const Lt = Ge.data.subarray(
                          Be * Ue / Ge.data.BYTES_PER_ELEMENT,
                          (Be + 1) * Ue / Ge.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, he, 0, 0, Be, Ge.width, Ge.height, 1, Ve, Lt, 0, 0);
                      }
                      R.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, he, 0, 0, 0, Ge.width, Ge.height, Ce.depth, Ve, Ge.data, 0, 0);
                } else
                  t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, he, nt, Ge.width, Ge.height, Ce.depth, 0, Ge.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              _t ? j && t.texSubImage3D(i.TEXTURE_2D_ARRAY, he, 0, 0, 0, Ge.width, Ge.height, Ce.depth, Ve, rt, Ge.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, he, nt, Ge.width, Ge.height, Ce.depth, 0, Ve, rt, Ge.data);
        } else {
          _t && $t && t.texStorage2D(i.TEXTURE_2D, Xe, nt, xt[0].width, xt[0].height);
          for (let he = 0, ye = xt.length; he < ye; he++)
            Ge = xt[he], R.format !== Ii ? Ve !== null ? _t ? j && t.compressedTexSubImage2D(i.TEXTURE_2D, he, 0, 0, Ge.width, Ge.height, Ve, Ge.data) : t.compressedTexImage2D(i.TEXTURE_2D, he, nt, Ge.width, Ge.height, 0, Ge.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : _t ? j && t.texSubImage2D(i.TEXTURE_2D, he, 0, 0, Ge.width, Ge.height, Ve, rt, Ge.data) : t.texImage2D(i.TEXTURE_2D, he, nt, Ge.width, Ge.height, 0, Ve, rt, Ge.data);
        }
      else if (R.isDataArrayTexture)
        if (_t) {
          if ($t && t.texStorage3D(i.TEXTURE_2D_ARRAY, Xe, nt, Ce.width, Ce.height, Ce.depth), j)
            if (R.layerUpdates.size > 0) {
              const he = Ku(Ce.width, Ce.height, R.format, R.type);
              for (const ye of R.layerUpdates) {
                const Ue = Ce.data.subarray(
                  ye * he / Ce.data.BYTES_PER_ELEMENT,
                  (ye + 1) * he / Ce.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, ye, Ce.width, Ce.height, 1, Ve, rt, Ue);
              }
              R.clearLayerUpdates();
            } else
              t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Ce.width, Ce.height, Ce.depth, Ve, rt, Ce.data);
        } else
          t.texImage3D(i.TEXTURE_2D_ARRAY, 0, nt, Ce.width, Ce.height, Ce.depth, 0, Ve, rt, Ce.data);
      else if (R.isData3DTexture)
        _t ? ($t && t.texStorage3D(i.TEXTURE_3D, Xe, nt, Ce.width, Ce.height, Ce.depth), j && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, Ce.width, Ce.height, Ce.depth, Ve, rt, Ce.data)) : t.texImage3D(i.TEXTURE_3D, 0, nt, Ce.width, Ce.height, Ce.depth, 0, Ve, rt, Ce.data);
      else if (R.isFramebufferTexture) {
        if ($t)
          if (_t)
            t.texStorage2D(i.TEXTURE_2D, Xe, nt, Ce.width, Ce.height);
          else {
            let he = Ce.width, ye = Ce.height;
            for (let Ue = 0; Ue < Xe; Ue++)
              t.texImage2D(i.TEXTURE_2D, Ue, nt, he, ye, 0, Ve, rt, null), he >>= 1, ye >>= 1;
          }
      } else if (xt.length > 0) {
        if (_t && $t) {
          const he = dt(xt[0]);
          t.texStorage2D(i.TEXTURE_2D, Xe, nt, he.width, he.height);
        }
        for (let he = 0, ye = xt.length; he < ye; he++)
          Ge = xt[he], _t ? j && t.texSubImage2D(i.TEXTURE_2D, he, 0, 0, Ve, rt, Ge) : t.texImage2D(i.TEXTURE_2D, he, nt, Ve, rt, Ge);
        R.generateMipmaps = !1;
      } else if (_t) {
        if ($t) {
          const he = dt(Ce);
          t.texStorage2D(i.TEXTURE_2D, Xe, nt, he.width, he.height);
        }
        j && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, Ve, rt, Ce);
      } else
        t.texImage2D(i.TEXTURE_2D, 0, nt, Ve, rt, Ce);
      x(R) && _(ve), Ie.__version = K.version, R.onUpdate && R.onUpdate(R);
    }
    O.__version = R.version;
  }
  function _e(O, R, ee) {
    if (R.image.length !== 6) return;
    const ve = It(O, R), be = R.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, O.__webglTexture, i.TEXTURE0 + ee);
    const K = n.get(be);
    if (be.version !== K.__version || ve === !0) {
      t.activeTexture(i.TEXTURE0 + ee);
      const Ie = en.getPrimaries(en.workingColorSpace), Oe = R.colorSpace === Pr ? null : en.getPrimaries(R.colorSpace), Ke = R.colorSpace === Pr || Ie === Oe ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, R.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, R.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, R.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ke);
      const kt = R.isCompressedTexture || R.image[0].isCompressedTexture, Ce = R.image[0] && R.image[0].isDataTexture, Ve = [];
      for (let ye = 0; ye < 6; ye++)
        !kt && !Ce ? Ve[ye] = D(R.image[ye], !0, s.maxCubemapSize) : Ve[ye] = Ce ? R.image[ye].image : R.image[ye], Ve[ye] = Ot(R, Ve[ye]);
      const rt = Ve[0], nt = l.convert(R.format, R.colorSpace), Ge = l.convert(R.type), xt = B(R.internalFormat, nt, Ge, R.colorSpace), _t = R.isVideoTexture !== !0, $t = K.__version === void 0 || ve === !0, j = be.dataReady;
      let Xe = z(R, rt);
      Z(i.TEXTURE_CUBE_MAP, R);
      let he;
      if (kt) {
        _t && $t && t.texStorage2D(i.TEXTURE_CUBE_MAP, Xe, xt, rt.width, rt.height);
        for (let ye = 0; ye < 6; ye++) {
          he = Ve[ye].mipmaps;
          for (let Ue = 0; Ue < he.length; Ue++) {
            const Be = he[Ue];
            R.format !== Ii ? nt !== null ? _t ? j && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ye, Ue, 0, 0, Be.width, Be.height, nt, Be.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ye, Ue, xt, Be.width, Be.height, 0, Be.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : _t ? j && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ye, Ue, 0, 0, Be.width, Be.height, nt, Ge, Be.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ye, Ue, xt, Be.width, Be.height, 0, nt, Ge, Be.data);
          }
        }
      } else {
        if (he = R.mipmaps, _t && $t) {
          he.length > 0 && Xe++;
          const ye = dt(Ve[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, Xe, xt, ye.width, ye.height);
        }
        for (let ye = 0; ye < 6; ye++)
          if (Ce) {
            _t ? j && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ye, 0, 0, 0, Ve[ye].width, Ve[ye].height, nt, Ge, Ve[ye].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ye, 0, xt, Ve[ye].width, Ve[ye].height, 0, nt, Ge, Ve[ye].data);
            for (let Ue = 0; Ue < he.length; Ue++) {
              const Lt = he[Ue].image[ye].image;
              _t ? j && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ye, Ue + 1, 0, 0, Lt.width, Lt.height, nt, Ge, Lt.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ye, Ue + 1, xt, Lt.width, Lt.height, 0, nt, Ge, Lt.data);
            }
          } else {
            _t ? j && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ye, 0, 0, 0, nt, Ge, Ve[ye]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ye, 0, xt, nt, Ge, Ve[ye]);
            for (let Ue = 0; Ue < he.length; Ue++) {
              const Be = he[Ue];
              _t ? j && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ye, Ue + 1, 0, 0, nt, Ge, Be.image[ye]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ye, Ue + 1, xt, nt, Ge, Be.image[ye]);
            }
          }
      }
      x(R) && _(i.TEXTURE_CUBE_MAP), K.__version = be.version, R.onUpdate && R.onUpdate(R);
    }
    O.__version = R.version;
  }
  function Ae(O, R, ee, ve, be, K) {
    const Ie = l.convert(ee.format, ee.colorSpace), Oe = l.convert(ee.type), Ke = B(ee.internalFormat, Ie, Oe, ee.colorSpace);
    if (!n.get(R).__hasExternalTextures) {
      const Ce = Math.max(1, R.width >> K), Ve = Math.max(1, R.height >> K);
      be === i.TEXTURE_3D || be === i.TEXTURE_2D_ARRAY ? t.texImage3D(be, K, Ke, Ce, Ve, R.depth, 0, Ie, Oe, null) : t.texImage2D(be, K, Ke, Ce, Ve, 0, Ie, Oe, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, O), bt(R) ? h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, ve, be, n.get(ee).__webglTexture, 0, Pt(R)) : (be === i.TEXTURE_2D || be >= i.TEXTURE_CUBE_MAP_POSITIVE_X && be <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, ve, be, n.get(ee).__webglTexture, K), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Ye(O, R, ee) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, O), R.depthBuffer) {
      const ve = R.depthTexture, be = ve && ve.isDepthTexture ? ve.type : null, K = U(R.stencilBuffer, be), Ie = R.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Oe = Pt(R);
      bt(R) ? h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Oe, K, R.width, R.height) : ee ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Oe, K, R.width, R.height) : i.renderbufferStorage(i.RENDERBUFFER, K, R.width, R.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, Ie, i.RENDERBUFFER, O);
    } else {
      const ve = R.textures;
      for (let be = 0; be < ve.length; be++) {
        const K = ve[be], Ie = l.convert(K.format, K.colorSpace), Oe = l.convert(K.type), Ke = B(K.internalFormat, Ie, Oe, K.colorSpace), kt = Pt(R);
        ee && bt(R) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, kt, Ke, R.width, R.height) : bt(R) ? h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, kt, Ke, R.width, R.height) : i.renderbufferStorage(i.RENDERBUFFER, Ke, R.width, R.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function Ne(O, R) {
    if (R && R.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, O), !(R.depthTexture && R.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(R.depthTexture).__webglTexture || R.depthTexture.image.width !== R.width || R.depthTexture.image.height !== R.height) && (R.depthTexture.image.width = R.width, R.depthTexture.image.height = R.height, R.depthTexture.needsUpdate = !0), de(R.depthTexture, 0);
    const ve = n.get(R.depthTexture).__webglTexture, be = Pt(R);
    if (R.depthTexture.format === Hs)
      bt(R) ? h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, ve, 0, be) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, ve, 0);
    else if (R.depthTexture.format === Ys)
      bt(R) ? h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, ve, 0, be) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, ve, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function ht(O) {
    const R = n.get(O), ee = O.isWebGLCubeRenderTarget === !0;
    if (R.__boundDepthTexture !== O.depthTexture) {
      const ve = O.depthTexture;
      if (R.__depthDisposeCallback && R.__depthDisposeCallback(), ve) {
        const be = () => {
          delete R.__boundDepthTexture, delete R.__depthDisposeCallback, ve.removeEventListener("dispose", be);
        };
        ve.addEventListener("dispose", be), R.__depthDisposeCallback = be;
      }
      R.__boundDepthTexture = ve;
    }
    if (O.depthTexture && !R.__autoAllocateDepthBuffer) {
      if (ee) throw new Error("target.depthTexture not supported in Cube render targets");
      Ne(R.__webglFramebuffer, O);
    } else if (ee) {
      R.__webglDepthbuffer = [];
      for (let ve = 0; ve < 6; ve++)
        if (t.bindFramebuffer(i.FRAMEBUFFER, R.__webglFramebuffer[ve]), R.__webglDepthbuffer[ve] === void 0)
          R.__webglDepthbuffer[ve] = i.createRenderbuffer(), Ye(R.__webglDepthbuffer[ve], O, !1);
        else {
          const be = O.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, K = R.__webglDepthbuffer[ve];
          i.bindRenderbuffer(i.RENDERBUFFER, K), i.framebufferRenderbuffer(i.FRAMEBUFFER, be, i.RENDERBUFFER, K);
        }
    } else if (t.bindFramebuffer(i.FRAMEBUFFER, R.__webglFramebuffer), R.__webglDepthbuffer === void 0)
      R.__webglDepthbuffer = i.createRenderbuffer(), Ye(R.__webglDepthbuffer, O, !1);
    else {
      const ve = O.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, be = R.__webglDepthbuffer;
      i.bindRenderbuffer(i.RENDERBUFFER, be), i.framebufferRenderbuffer(i.FRAMEBUFFER, ve, i.RENDERBUFFER, be);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Me(O, R, ee) {
    const ve = n.get(O);
    R !== void 0 && Ae(ve.__webglFramebuffer, O, O.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), ee !== void 0 && ht(O);
  }
  function ct(O) {
    const R = O.texture, ee = n.get(O), ve = n.get(R);
    O.addEventListener("dispose", $);
    const be = O.textures, K = O.isWebGLCubeRenderTarget === !0, Ie = be.length > 1;
    if (Ie || (ve.__webglTexture === void 0 && (ve.__webglTexture = i.createTexture()), ve.__version = R.version, f.memory.textures++), K) {
      ee.__webglFramebuffer = [];
      for (let Oe = 0; Oe < 6; Oe++)
        if (R.mipmaps && R.mipmaps.length > 0) {
          ee.__webglFramebuffer[Oe] = [];
          for (let Ke = 0; Ke < R.mipmaps.length; Ke++)
            ee.__webglFramebuffer[Oe][Ke] = i.createFramebuffer();
        } else
          ee.__webglFramebuffer[Oe] = i.createFramebuffer();
    } else {
      if (R.mipmaps && R.mipmaps.length > 0) {
        ee.__webglFramebuffer = [];
        for (let Oe = 0; Oe < R.mipmaps.length; Oe++)
          ee.__webglFramebuffer[Oe] = i.createFramebuffer();
      } else
        ee.__webglFramebuffer = i.createFramebuffer();
      if (Ie)
        for (let Oe = 0, Ke = be.length; Oe < Ke; Oe++) {
          const kt = n.get(be[Oe]);
          kt.__webglTexture === void 0 && (kt.__webglTexture = i.createTexture(), f.memory.textures++);
        }
      if (O.samples > 0 && bt(O) === !1) {
        ee.__webglMultisampledFramebuffer = i.createFramebuffer(), ee.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, ee.__webglMultisampledFramebuffer);
        for (let Oe = 0; Oe < be.length; Oe++) {
          const Ke = be[Oe];
          ee.__webglColorRenderbuffer[Oe] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, ee.__webglColorRenderbuffer[Oe]);
          const kt = l.convert(Ke.format, Ke.colorSpace), Ce = l.convert(Ke.type), Ve = B(Ke.internalFormat, kt, Ce, Ke.colorSpace, O.isXRRenderTarget === !0), rt = Pt(O);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, rt, Ve, O.width, O.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Oe, i.RENDERBUFFER, ee.__webglColorRenderbuffer[Oe]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), O.depthBuffer && (ee.__webglDepthRenderbuffer = i.createRenderbuffer(), Ye(ee.__webglDepthRenderbuffer, O, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (K) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, ve.__webglTexture), Z(i.TEXTURE_CUBE_MAP, R);
      for (let Oe = 0; Oe < 6; Oe++)
        if (R.mipmaps && R.mipmaps.length > 0)
          for (let Ke = 0; Ke < R.mipmaps.length; Ke++)
            Ae(ee.__webglFramebuffer[Oe][Ke], O, R, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + Oe, Ke);
        else
          Ae(ee.__webglFramebuffer[Oe], O, R, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + Oe, 0);
      x(R) && _(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (Ie) {
      for (let Oe = 0, Ke = be.length; Oe < Ke; Oe++) {
        const kt = be[Oe], Ce = n.get(kt);
        t.bindTexture(i.TEXTURE_2D, Ce.__webglTexture), Z(i.TEXTURE_2D, kt), Ae(ee.__webglFramebuffer, O, kt, i.COLOR_ATTACHMENT0 + Oe, i.TEXTURE_2D, 0), x(kt) && _(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let Oe = i.TEXTURE_2D;
      if ((O.isWebGL3DRenderTarget || O.isWebGLArrayRenderTarget) && (Oe = O.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(Oe, ve.__webglTexture), Z(Oe, R), R.mipmaps && R.mipmaps.length > 0)
        for (let Ke = 0; Ke < R.mipmaps.length; Ke++)
          Ae(ee.__webglFramebuffer[Ke], O, R, i.COLOR_ATTACHMENT0, Oe, Ke);
      else
        Ae(ee.__webglFramebuffer, O, R, i.COLOR_ATTACHMENT0, Oe, 0);
      x(R) && _(Oe), t.unbindTexture();
    }
    O.depthBuffer && ht(O);
  }
  function jt(O) {
    const R = O.textures;
    for (let ee = 0, ve = R.length; ee < ve; ee++) {
      const be = R[ee];
      if (x(be)) {
        const K = O.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D, Ie = n.get(be).__webglTexture;
        t.bindTexture(K, Ie), _(K), t.unbindTexture();
      }
    }
  }
  const Mt = [], V = [];
  function pn(O) {
    if (O.samples > 0) {
      if (bt(O) === !1) {
        const R = O.textures, ee = O.width, ve = O.height;
        let be = i.COLOR_BUFFER_BIT;
        const K = O.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Ie = n.get(O), Oe = R.length > 1;
        if (Oe)
          for (let Ke = 0; Ke < R.length; Ke++)
            t.bindFramebuffer(i.FRAMEBUFFER, Ie.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ke, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, Ie.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ke, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, Ie.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Ie.__webglFramebuffer);
        for (let Ke = 0; Ke < R.length; Ke++) {
          if (O.resolveDepthBuffer && (O.depthBuffer && (be |= i.DEPTH_BUFFER_BIT), O.stencilBuffer && O.resolveStencilBuffer && (be |= i.STENCIL_BUFFER_BIT)), Oe) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, Ie.__webglColorRenderbuffer[Ke]);
            const kt = n.get(R[Ke]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, kt, 0);
          }
          i.blitFramebuffer(0, 0, ee, ve, 0, 0, ee, ve, be, i.NEAREST), p === !0 && (Mt.length = 0, V.length = 0, Mt.push(i.COLOR_ATTACHMENT0 + Ke), O.depthBuffer && O.resolveDepthBuffer === !1 && (Mt.push(K), V.push(K), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, V)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, Mt));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), Oe)
          for (let Ke = 0; Ke < R.length; Ke++) {
            t.bindFramebuffer(i.FRAMEBUFFER, Ie.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ke, i.RENDERBUFFER, Ie.__webglColorRenderbuffer[Ke]);
            const kt = n.get(R[Ke]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, Ie.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ke, i.TEXTURE_2D, kt, 0);
          }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Ie.__webglMultisampledFramebuffer);
      } else if (O.depthBuffer && O.resolveDepthBuffer === !1 && p) {
        const R = O.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [R]);
      }
    }
  }
  function Pt(O) {
    return Math.min(s.maxSamples, O.samples);
  }
  function bt(O) {
    const R = n.get(O);
    return O.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && R.__useRenderToTexture !== !1;
  }
  function st(O) {
    const R = f.render.frame;
    v.get(O) !== R && (v.set(O, R), O.update());
  }
  function Ot(O, R) {
    const ee = O.colorSpace, ve = O.format, be = O.type;
    return O.isCompressedTexture === !0 || O.isVideoTexture === !0 || ee !== Nr && ee !== Pr && (en.getTransfer(ee) === fn ? (ve !== Ii || be !== cr) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", ee)), R;
  }
  function dt(O) {
    return typeof HTMLImageElement < "u" && O instanceof HTMLImageElement ? (g.width = O.naturalWidth || O.width, g.height = O.naturalHeight || O.height) : typeof VideoFrame < "u" && O instanceof VideoFrame ? (g.width = O.displayWidth, g.height = O.displayHeight) : (g.width = O.width, g.height = O.height), g;
  }
  this.allocateTextureUnit = pe, this.resetTextureUnits = I, this.setTexture2D = de, this.setTexture2DArray = Ee, this.setTexture3D = ie, this.setTextureCube = Te, this.rebindTextures = Me, this.setupRenderTarget = ct, this.updateRenderTargetMipmap = jt, this.updateMultisampleRenderTarget = pn, this.setupDepthRenderbuffer = ht, this.setupFrameBufferTexture = Ae, this.useMultisampledRTT = bt;
}
function zv(i, e) {
  function t(n, s = Pr) {
    let l;
    const f = en.getTransfer(s);
    if (n === cr) return i.UNSIGNED_BYTE;
    if (n === yc) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === Sc) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === cf) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === af) return i.BYTE;
    if (n === lf) return i.SHORT;
    if (n === Ao) return i.UNSIGNED_SHORT;
    if (n === xc) return i.INT;
    if (n === cs) return i.UNSIGNED_INT;
    if (n === ar) return i.FLOAT;
    if (n === wo) return i.HALF_FLOAT;
    if (n === uf) return i.ALPHA;
    if (n === ff) return i.RGB;
    if (n === Ii) return i.RGBA;
    if (n === hf) return i.LUMINANCE;
    if (n === df) return i.LUMINANCE_ALPHA;
    if (n === Hs) return i.DEPTH_COMPONENT;
    if (n === Ys) return i.DEPTH_STENCIL;
    if (n === pf) return i.RED;
    if (n === Mc) return i.RED_INTEGER;
    if (n === mf) return i.RG;
    if (n === bc) return i.RG_INTEGER;
    if (n === Ec) return i.RGBA_INTEGER;
    if (n === va || n === xa || n === ya || n === Sa)
      if (f === fn)
        if (l = e.get("WEBGL_compressed_texture_s3tc_srgb"), l !== null) {
          if (n === va) return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === xa) return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === ya) return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === Sa) return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (l = e.get("WEBGL_compressed_texture_s3tc"), l !== null) {
        if (n === va) return l.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === xa) return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === ya) return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === Sa) return l.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === Wl || n === Xl || n === ql || n === jl)
      if (l = e.get("WEBGL_compressed_texture_pvrtc"), l !== null) {
        if (n === Wl) return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Xl) return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === ql) return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === jl) return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === $l || n === Yl || n === Kl)
      if (l = e.get("WEBGL_compressed_texture_etc"), l !== null) {
        if (n === $l || n === Yl) return f === fn ? l.COMPRESSED_SRGB8_ETC2 : l.COMPRESSED_RGB8_ETC2;
        if (n === Kl) return f === fn ? l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : l.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === Zl || n === Jl || n === Ql || n === ec || n === tc || n === nc || n === ic || n === rc || n === sc || n === oc || n === ac || n === lc || n === cc || n === uc)
      if (l = e.get("WEBGL_compressed_texture_astc"), l !== null) {
        if (n === Zl) return f === fn ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : l.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Jl) return f === fn ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : l.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Ql) return f === fn ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : l.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === ec) return f === fn ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : l.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === tc) return f === fn ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : l.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === nc) return f === fn ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : l.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === ic) return f === fn ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : l.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === rc) return f === fn ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : l.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === sc) return f === fn ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : l.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === oc) return f === fn ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : l.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === ac) return f === fn ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : l.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === lc) return f === fn ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : l.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === cc) return f === fn ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : l.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === uc) return f === fn ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : l.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === Ma || n === fc || n === hc)
      if (l = e.get("EXT_texture_compression_bptc"), l !== null) {
        if (n === Ma) return f === fn ? l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : l.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === fc) return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === hc) return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === gf || n === dc || n === pc || n === mc)
      if (l = e.get("EXT_texture_compression_rgtc"), l !== null) {
        if (n === Ma) return l.COMPRESSED_RED_RGTC1_EXT;
        if (n === dc) return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === pc) return l.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === mc) return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === $s ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
class kv extends Si {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class ma extends fi {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Hv = { type: "move" };
class Rl {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new ma(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new ma(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new ce(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new ce()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new ma(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new ce(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new ce()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let s = null, l = null, f = null;
    const h = this._targetRay, p = this._grip, g = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (g && e.hand) {
        f = !0;
        for (const D of e.hand.values()) {
          const x = t.getJointPose(D, n), _ = this._getHandJoint(g, D);
          x !== null && (_.matrix.fromArray(x.transform.matrix), _.matrix.decompose(_.position, _.rotation, _.scale), _.matrixWorldNeedsUpdate = !0, _.jointRadius = x.radius), _.visible = x !== null;
        }
        const v = g.joints["index-finger-tip"], M = g.joints["thumb-tip"], b = v.position.distanceTo(M.position), T = 0.02, C = 5e-3;
        g.inputState.pinching && b > T + C ? (g.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !g.inputState.pinching && b <= T - C && (g.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        p !== null && e.gripSpace && (l = t.getPose(e.gripSpace, n), l !== null && (p.matrix.fromArray(l.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, l.linearVelocity ? (p.hasLinearVelocity = !0, p.linearVelocity.copy(l.linearVelocity)) : p.hasLinearVelocity = !1, l.angularVelocity ? (p.hasAngularVelocity = !0, p.angularVelocity.copy(l.angularVelocity)) : p.hasAngularVelocity = !1));
      h !== null && (s = t.getPose(e.targetRaySpace, n), s === null && l !== null && (s = l), s !== null && (h.matrix.fromArray(s.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (h.hasLinearVelocity = !0, h.linearVelocity.copy(s.linearVelocity)) : h.hasLinearVelocity = !1, s.angularVelocity ? (h.hasAngularVelocity = !0, h.angularVelocity.copy(s.angularVelocity)) : h.hasAngularVelocity = !1, this.dispatchEvent(Hv)));
    }
    return h !== null && (h.visible = s !== null), p !== null && (p.visible = l !== null), g !== null && (g.visible = f !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new ma();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Vv = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Gv = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Wv {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const s = new ti(), l = e.properties.get(s);
      l.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = s;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new fr({
        vertexShader: Vv,
        fragmentShader: Gv,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new Gi(new Do(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Xv extends Zs {
  constructor(e, t) {
    super();
    const n = this;
    let s = null, l = 1, f = null, h = "local-floor", p = 1, g = null, v = null, M = null, b = null, T = null, C = null;
    const D = new Wv(), x = t.getContextAttributes();
    let _ = null, B = null;
    const U = [], z = [], le = new Qt();
    let $ = null;
    const c = new Si();
    c.layers.enable(1), c.viewport = new Mn();
    const oe = new Si();
    oe.layers.enable(2), oe.viewport = new Mn();
    const xe = [c, oe], w = new kv();
    w.layers.enable(1), w.layers.enable(2);
    let I = null, pe = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(_e) {
      let Ae = U[_e];
      return Ae === void 0 && (Ae = new Rl(), U[_e] = Ae), Ae.getTargetRaySpace();
    }, this.getControllerGrip = function(_e) {
      let Ae = U[_e];
      return Ae === void 0 && (Ae = new Rl(), U[_e] = Ae), Ae.getGripSpace();
    }, this.getHand = function(_e) {
      let Ae = U[_e];
      return Ae === void 0 && (Ae = new Rl(), U[_e] = Ae), Ae.getHandSpace();
    };
    function J(_e) {
      const Ae = z.indexOf(_e.inputSource);
      if (Ae === -1)
        return;
      const Ye = U[Ae];
      Ye !== void 0 && (Ye.update(_e.inputSource, _e.frame, g || f), Ye.dispatchEvent({ type: _e.type, data: _e.inputSource }));
    }
    function de() {
      s.removeEventListener("select", J), s.removeEventListener("selectstart", J), s.removeEventListener("selectend", J), s.removeEventListener("squeeze", J), s.removeEventListener("squeezestart", J), s.removeEventListener("squeezeend", J), s.removeEventListener("end", de), s.removeEventListener("inputsourceschange", Ee);
      for (let _e = 0; _e < U.length; _e++) {
        const Ae = z[_e];
        Ae !== null && (z[_e] = null, U[_e].disconnect(Ae));
      }
      I = null, pe = null, D.reset(), e.setRenderTarget(_), T = null, b = null, M = null, s = null, B = null, zt.stop(), n.isPresenting = !1, e.setPixelRatio($), e.setSize(le.width, le.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(_e) {
      l = _e, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(_e) {
      h = _e, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return g || f;
    }, this.setReferenceSpace = function(_e) {
      g = _e;
    }, this.getBaseLayer = function() {
      return b !== null ? b : T;
    }, this.getBinding = function() {
      return M;
    }, this.getFrame = function() {
      return C;
    }, this.getSession = function() {
      return s;
    }, this.setSession = async function(_e) {
      if (s = _e, s !== null) {
        if (_ = e.getRenderTarget(), s.addEventListener("select", J), s.addEventListener("selectstart", J), s.addEventListener("selectend", J), s.addEventListener("squeeze", J), s.addEventListener("squeezestart", J), s.addEventListener("squeezeend", J), s.addEventListener("end", de), s.addEventListener("inputsourceschange", Ee), x.xrCompatible !== !0 && await t.makeXRCompatible(), $ = e.getPixelRatio(), e.getSize(le), s.renderState.layers === void 0) {
          const Ae = {
            antialias: x.antialias,
            alpha: !0,
            depth: x.depth,
            stencil: x.stencil,
            framebufferScaleFactor: l
          };
          T = new XRWebGLLayer(s, t, Ae), s.updateRenderState({ baseLayer: T }), e.setPixelRatio(1), e.setSize(T.framebufferWidth, T.framebufferHeight, !1), B = new us(
            T.framebufferWidth,
            T.framebufferHeight,
            {
              format: Ii,
              type: cr,
              colorSpace: e.outputColorSpace,
              stencilBuffer: x.stencil
            }
          );
        } else {
          let Ae = null, Ye = null, Ne = null;
          x.depth && (Ne = x.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, Ae = x.stencil ? Ys : Hs, Ye = x.stencil ? $s : cs);
          const ht = {
            colorFormat: t.RGBA8,
            depthFormat: Ne,
            scaleFactor: l
          };
          M = new XRWebGLBinding(s, t), b = M.createProjectionLayer(ht), s.updateRenderState({ layers: [b] }), e.setPixelRatio(1), e.setSize(b.textureWidth, b.textureHeight, !1), B = new us(
            b.textureWidth,
            b.textureHeight,
            {
              format: Ii,
              type: cr,
              depthTexture: new Lf(b.textureWidth, b.textureHeight, Ye, void 0, void 0, void 0, void 0, void 0, void 0, Ae),
              stencilBuffer: x.stencil,
              colorSpace: e.outputColorSpace,
              samples: x.antialias ? 4 : 0,
              resolveDepthBuffer: b.ignoreDepthValues === !1
            }
          );
        }
        B.isXRRenderTarget = !0, this.setFoveation(p), g = null, f = await s.requestReferenceSpace(h), zt.setContext(s), zt.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (s !== null)
        return s.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return D.getDepthTexture();
    };
    function Ee(_e) {
      for (let Ae = 0; Ae < _e.removed.length; Ae++) {
        const Ye = _e.removed[Ae], Ne = z.indexOf(Ye);
        Ne >= 0 && (z[Ne] = null, U[Ne].disconnect(Ye));
      }
      for (let Ae = 0; Ae < _e.added.length; Ae++) {
        const Ye = _e.added[Ae];
        let Ne = z.indexOf(Ye);
        if (Ne === -1) {
          for (let Me = 0; Me < U.length; Me++)
            if (Me >= z.length) {
              z.push(Ye), Ne = Me;
              break;
            } else if (z[Me] === null) {
              z[Me] = Ye, Ne = Me;
              break;
            }
          if (Ne === -1) break;
        }
        const ht = U[Ne];
        ht && ht.connect(Ye);
      }
    }
    const ie = new ce(), Te = new ce();
    function fe(_e, Ae, Ye) {
      ie.setFromMatrixPosition(Ae.matrixWorld), Te.setFromMatrixPosition(Ye.matrixWorld);
      const Ne = ie.distanceTo(Te), ht = Ae.projectionMatrix.elements, Me = Ye.projectionMatrix.elements, ct = ht[14] / (ht[10] - 1), jt = ht[14] / (ht[10] + 1), Mt = (ht[9] + 1) / ht[5], V = (ht[9] - 1) / ht[5], pn = (ht[8] - 1) / ht[0], Pt = (Me[8] + 1) / Me[0], bt = ct * pn, st = ct * Pt, Ot = Ne / (-pn + Pt), dt = Ot * -pn;
      if (Ae.matrixWorld.decompose(_e.position, _e.quaternion, _e.scale), _e.translateX(dt), _e.translateZ(Ot), _e.matrixWorld.compose(_e.position, _e.quaternion, _e.scale), _e.matrixWorldInverse.copy(_e.matrixWorld).invert(), ht[10] === -1)
        _e.projectionMatrix.copy(Ae.projectionMatrix), _e.projectionMatrixInverse.copy(Ae.projectionMatrixInverse);
      else {
        const O = ct + Ot, R = jt + Ot, ee = bt - dt, ve = st + (Ne - dt), be = Mt * jt / R * O, K = V * jt / R * O;
        _e.projectionMatrix.makePerspective(ee, ve, be, K, O, R), _e.projectionMatrixInverse.copy(_e.projectionMatrix).invert();
      }
    }
    function Fe(_e, Ae) {
      Ae === null ? _e.matrixWorld.copy(_e.matrix) : _e.matrixWorld.multiplyMatrices(Ae.matrixWorld, _e.matrix), _e.matrixWorldInverse.copy(_e.matrixWorld).invert();
    }
    this.updateCamera = function(_e) {
      if (s === null) return;
      let Ae = _e.near, Ye = _e.far;
      D.texture !== null && (D.depthNear > 0 && (Ae = D.depthNear), D.depthFar > 0 && (Ye = D.depthFar)), w.near = oe.near = c.near = Ae, w.far = oe.far = c.far = Ye, (I !== w.near || pe !== w.far) && (s.updateRenderState({
        depthNear: w.near,
        depthFar: w.far
      }), I = w.near, pe = w.far);
      const Ne = _e.parent, ht = w.cameras;
      Fe(w, Ne);
      for (let Me = 0; Me < ht.length; Me++)
        Fe(ht[Me], Ne);
      ht.length === 2 ? fe(w, c, oe) : w.projectionMatrix.copy(c.projectionMatrix), ke(_e, w, Ne);
    };
    function ke(_e, Ae, Ye) {
      Ye === null ? _e.matrix.copy(Ae.matrixWorld) : (_e.matrix.copy(Ye.matrixWorld), _e.matrix.invert(), _e.matrix.multiply(Ae.matrixWorld)), _e.matrix.decompose(_e.position, _e.quaternion, _e.scale), _e.updateMatrixWorld(!0), _e.projectionMatrix.copy(Ae.projectionMatrix), _e.projectionMatrixInverse.copy(Ae.projectionMatrixInverse), _e.isPerspectiveCamera && (_e.fov = gc * 2 * Math.atan(1 / _e.projectionMatrix.elements[5]), _e.zoom = 1);
    }
    this.getCamera = function() {
      return w;
    }, this.getFoveation = function() {
      if (!(b === null && T === null))
        return p;
    }, this.setFoveation = function(_e) {
      p = _e, b !== null && (b.fixedFoveation = _e), T !== null && T.fixedFoveation !== void 0 && (T.fixedFoveation = _e);
    }, this.hasDepthSensing = function() {
      return D.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return D.getMesh(w);
    };
    let Z = null;
    function It(_e, Ae) {
      if (v = Ae.getViewerPose(g || f), C = Ae, v !== null) {
        const Ye = v.views;
        T !== null && (e.setRenderTargetFramebuffer(B, T.framebuffer), e.setRenderTarget(B));
        let Ne = !1;
        Ye.length !== w.cameras.length && (w.cameras.length = 0, Ne = !0);
        for (let Me = 0; Me < Ye.length; Me++) {
          const ct = Ye[Me];
          let jt = null;
          if (T !== null)
            jt = T.getViewport(ct);
          else {
            const V = M.getViewSubImage(b, ct);
            jt = V.viewport, Me === 0 && (e.setRenderTargetTextures(
              B,
              V.colorTexture,
              b.ignoreDepthValues ? void 0 : V.depthStencilTexture
            ), e.setRenderTarget(B));
          }
          let Mt = xe[Me];
          Mt === void 0 && (Mt = new Si(), Mt.layers.enable(Me), Mt.viewport = new Mn(), xe[Me] = Mt), Mt.matrix.fromArray(ct.transform.matrix), Mt.matrix.decompose(Mt.position, Mt.quaternion, Mt.scale), Mt.projectionMatrix.fromArray(ct.projectionMatrix), Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(), Mt.viewport.set(jt.x, jt.y, jt.width, jt.height), Me === 0 && (w.matrix.copy(Mt.matrix), w.matrix.decompose(w.position, w.quaternion, w.scale)), Ne === !0 && w.cameras.push(Mt);
        }
        const ht = s.enabledFeatures;
        if (ht && ht.includes("depth-sensing")) {
          const Me = M.getDepthInformation(Ye[0]);
          Me && Me.isValid && Me.texture && D.init(e, Me, s.renderState);
        }
      }
      for (let Ye = 0; Ye < U.length; Ye++) {
        const Ne = z[Ye], ht = U[Ye];
        Ne !== null && ht !== void 0 && ht.update(Ne, Ae, g || f);
      }
      Z && Z(_e, Ae), Ae.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: Ae }), C = null;
    }
    const zt = new Pf();
    zt.setAnimationLoop(It), this.setAnimationLoop = function(_e) {
      Z = _e;
    }, this.dispose = function() {
    };
  }
}
const ts = /* @__PURE__ */ new ur(), qv = /* @__PURE__ */ new En();
function jv(i, e) {
  function t(x, _) {
    x.matrixAutoUpdate === !0 && x.updateMatrix(), _.value.copy(x.matrix);
  }
  function n(x, _) {
    _.color.getRGB(x.fogColor.value, Af(i)), _.isFog ? (x.fogNear.value = _.near, x.fogFar.value = _.far) : _.isFogExp2 && (x.fogDensity.value = _.density);
  }
  function s(x, _, B, U, z) {
    _.isMeshBasicMaterial || _.isMeshLambertMaterial ? l(x, _) : _.isMeshToonMaterial ? (l(x, _), M(x, _)) : _.isMeshPhongMaterial ? (l(x, _), v(x, _)) : _.isMeshStandardMaterial ? (l(x, _), b(x, _), _.isMeshPhysicalMaterial && T(x, _, z)) : _.isMeshMatcapMaterial ? (l(x, _), C(x, _)) : _.isMeshDepthMaterial ? l(x, _) : _.isMeshDistanceMaterial ? (l(x, _), D(x, _)) : _.isMeshNormalMaterial ? l(x, _) : _.isLineBasicMaterial ? (f(x, _), _.isLineDashedMaterial && h(x, _)) : _.isPointsMaterial ? p(x, _, B, U) : _.isSpriteMaterial ? g(x, _) : _.isShadowMaterial ? (x.color.value.copy(_.color), x.opacity.value = _.opacity) : _.isShaderMaterial && (_.uniformsNeedUpdate = !1);
  }
  function l(x, _) {
    x.opacity.value = _.opacity, _.color && x.diffuse.value.copy(_.color), _.emissive && x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity), _.map && (x.map.value = _.map, t(_.map, x.mapTransform)), _.alphaMap && (x.alphaMap.value = _.alphaMap, t(_.alphaMap, x.alphaMapTransform)), _.bumpMap && (x.bumpMap.value = _.bumpMap, t(_.bumpMap, x.bumpMapTransform), x.bumpScale.value = _.bumpScale, _.side === ei && (x.bumpScale.value *= -1)), _.normalMap && (x.normalMap.value = _.normalMap, t(_.normalMap, x.normalMapTransform), x.normalScale.value.copy(_.normalScale), _.side === ei && x.normalScale.value.negate()), _.displacementMap && (x.displacementMap.value = _.displacementMap, t(_.displacementMap, x.displacementMapTransform), x.displacementScale.value = _.displacementScale, x.displacementBias.value = _.displacementBias), _.emissiveMap && (x.emissiveMap.value = _.emissiveMap, t(_.emissiveMap, x.emissiveMapTransform)), _.specularMap && (x.specularMap.value = _.specularMap, t(_.specularMap, x.specularMapTransform)), _.alphaTest > 0 && (x.alphaTest.value = _.alphaTest);
    const B = e.get(_), U = B.envMap, z = B.envMapRotation;
    U && (x.envMap.value = U, ts.copy(z), ts.x *= -1, ts.y *= -1, ts.z *= -1, U.isCubeTexture && U.isRenderTargetTexture === !1 && (ts.y *= -1, ts.z *= -1), x.envMapRotation.value.setFromMatrix4(qv.makeRotationFromEuler(ts)), x.flipEnvMap.value = U.isCubeTexture && U.isRenderTargetTexture === !1 ? -1 : 1, x.reflectivity.value = _.reflectivity, x.ior.value = _.ior, x.refractionRatio.value = _.refractionRatio), _.lightMap && (x.lightMap.value = _.lightMap, x.lightMapIntensity.value = _.lightMapIntensity, t(_.lightMap, x.lightMapTransform)), _.aoMap && (x.aoMap.value = _.aoMap, x.aoMapIntensity.value = _.aoMapIntensity, t(_.aoMap, x.aoMapTransform));
  }
  function f(x, _) {
    x.diffuse.value.copy(_.color), x.opacity.value = _.opacity, _.map && (x.map.value = _.map, t(_.map, x.mapTransform));
  }
  function h(x, _) {
    x.dashSize.value = _.dashSize, x.totalSize.value = _.dashSize + _.gapSize, x.scale.value = _.scale;
  }
  function p(x, _, B, U) {
    x.diffuse.value.copy(_.color), x.opacity.value = _.opacity, x.size.value = _.size * B, x.scale.value = U * 0.5, _.map && (x.map.value = _.map, t(_.map, x.uvTransform)), _.alphaMap && (x.alphaMap.value = _.alphaMap, t(_.alphaMap, x.alphaMapTransform)), _.alphaTest > 0 && (x.alphaTest.value = _.alphaTest);
  }
  function g(x, _) {
    x.diffuse.value.copy(_.color), x.opacity.value = _.opacity, x.rotation.value = _.rotation, _.map && (x.map.value = _.map, t(_.map, x.mapTransform)), _.alphaMap && (x.alphaMap.value = _.alphaMap, t(_.alphaMap, x.alphaMapTransform)), _.alphaTest > 0 && (x.alphaTest.value = _.alphaTest);
  }
  function v(x, _) {
    x.specular.value.copy(_.specular), x.shininess.value = Math.max(_.shininess, 1e-4);
  }
  function M(x, _) {
    _.gradientMap && (x.gradientMap.value = _.gradientMap);
  }
  function b(x, _) {
    x.metalness.value = _.metalness, _.metalnessMap && (x.metalnessMap.value = _.metalnessMap, t(_.metalnessMap, x.metalnessMapTransform)), x.roughness.value = _.roughness, _.roughnessMap && (x.roughnessMap.value = _.roughnessMap, t(_.roughnessMap, x.roughnessMapTransform)), _.envMap && (x.envMapIntensity.value = _.envMapIntensity);
  }
  function T(x, _, B) {
    x.ior.value = _.ior, _.sheen > 0 && (x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen), x.sheenRoughness.value = _.sheenRoughness, _.sheenColorMap && (x.sheenColorMap.value = _.sheenColorMap, t(_.sheenColorMap, x.sheenColorMapTransform)), _.sheenRoughnessMap && (x.sheenRoughnessMap.value = _.sheenRoughnessMap, t(_.sheenRoughnessMap, x.sheenRoughnessMapTransform))), _.clearcoat > 0 && (x.clearcoat.value = _.clearcoat, x.clearcoatRoughness.value = _.clearcoatRoughness, _.clearcoatMap && (x.clearcoatMap.value = _.clearcoatMap, t(_.clearcoatMap, x.clearcoatMapTransform)), _.clearcoatRoughnessMap && (x.clearcoatRoughnessMap.value = _.clearcoatRoughnessMap, t(_.clearcoatRoughnessMap, x.clearcoatRoughnessMapTransform)), _.clearcoatNormalMap && (x.clearcoatNormalMap.value = _.clearcoatNormalMap, t(_.clearcoatNormalMap, x.clearcoatNormalMapTransform), x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale), _.side === ei && x.clearcoatNormalScale.value.negate())), _.dispersion > 0 && (x.dispersion.value = _.dispersion), _.iridescence > 0 && (x.iridescence.value = _.iridescence, x.iridescenceIOR.value = _.iridescenceIOR, x.iridescenceThicknessMinimum.value = _.iridescenceThicknessRange[0], x.iridescenceThicknessMaximum.value = _.iridescenceThicknessRange[1], _.iridescenceMap && (x.iridescenceMap.value = _.iridescenceMap, t(_.iridescenceMap, x.iridescenceMapTransform)), _.iridescenceThicknessMap && (x.iridescenceThicknessMap.value = _.iridescenceThicknessMap, t(_.iridescenceThicknessMap, x.iridescenceThicknessMapTransform))), _.transmission > 0 && (x.transmission.value = _.transmission, x.transmissionSamplerMap.value = B.texture, x.transmissionSamplerSize.value.set(B.width, B.height), _.transmissionMap && (x.transmissionMap.value = _.transmissionMap, t(_.transmissionMap, x.transmissionMapTransform)), x.thickness.value = _.thickness, _.thicknessMap && (x.thicknessMap.value = _.thicknessMap, t(_.thicknessMap, x.thicknessMapTransform)), x.attenuationDistance.value = _.attenuationDistance, x.attenuationColor.value.copy(_.attenuationColor)), _.anisotropy > 0 && (x.anisotropyVector.value.set(_.anisotropy * Math.cos(_.anisotropyRotation), _.anisotropy * Math.sin(_.anisotropyRotation)), _.anisotropyMap && (x.anisotropyMap.value = _.anisotropyMap, t(_.anisotropyMap, x.anisotropyMapTransform))), x.specularIntensity.value = _.specularIntensity, x.specularColor.value.copy(_.specularColor), _.specularColorMap && (x.specularColorMap.value = _.specularColorMap, t(_.specularColorMap, x.specularColorMapTransform)), _.specularIntensityMap && (x.specularIntensityMap.value = _.specularIntensityMap, t(_.specularIntensityMap, x.specularIntensityMapTransform));
  }
  function C(x, _) {
    _.matcap && (x.matcap.value = _.matcap);
  }
  function D(x, _) {
    const B = e.get(_).light;
    x.referencePosition.value.setFromMatrixPosition(B.matrixWorld), x.nearDistance.value = B.shadow.camera.near, x.farDistance.value = B.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: s
  };
}
function $v(i, e, t, n) {
  let s = {}, l = {}, f = [];
  const h = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function p(B, U) {
    const z = U.program;
    n.uniformBlockBinding(B, z);
  }
  function g(B, U) {
    let z = s[B.id];
    z === void 0 && (C(B), z = v(B), s[B.id] = z, B.addEventListener("dispose", x));
    const le = U.program;
    n.updateUBOMapping(B, le);
    const $ = e.render.frame;
    l[B.id] !== $ && (b(B), l[B.id] = $);
  }
  function v(B) {
    const U = M();
    B.__bindingPointIndex = U;
    const z = i.createBuffer(), le = B.__size, $ = B.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, z), i.bufferData(i.UNIFORM_BUFFER, le, $), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, U, z), z;
  }
  function M() {
    for (let B = 0; B < h; B++)
      if (f.indexOf(B) === -1)
        return f.push(B), B;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function b(B) {
    const U = s[B.id], z = B.uniforms, le = B.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, U);
    for (let $ = 0, c = z.length; $ < c; $++) {
      const oe = Array.isArray(z[$]) ? z[$] : [z[$]];
      for (let xe = 0, w = oe.length; xe < w; xe++) {
        const I = oe[xe];
        if (T(I, $, xe, le) === !0) {
          const pe = I.__offset, J = Array.isArray(I.value) ? I.value : [I.value];
          let de = 0;
          for (let Ee = 0; Ee < J.length; Ee++) {
            const ie = J[Ee], Te = D(ie);
            typeof ie == "number" || typeof ie == "boolean" ? (I.__data[0] = ie, i.bufferSubData(i.UNIFORM_BUFFER, pe + de, I.__data)) : ie.isMatrix3 ? (I.__data[0] = ie.elements[0], I.__data[1] = ie.elements[1], I.__data[2] = ie.elements[2], I.__data[3] = 0, I.__data[4] = ie.elements[3], I.__data[5] = ie.elements[4], I.__data[6] = ie.elements[5], I.__data[7] = 0, I.__data[8] = ie.elements[6], I.__data[9] = ie.elements[7], I.__data[10] = ie.elements[8], I.__data[11] = 0) : (ie.toArray(I.__data, de), de += Te.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, pe, I.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function T(B, U, z, le) {
    const $ = B.value, c = U + "_" + z;
    if (le[c] === void 0)
      return typeof $ == "number" || typeof $ == "boolean" ? le[c] = $ : le[c] = $.clone(), !0;
    {
      const oe = le[c];
      if (typeof $ == "number" || typeof $ == "boolean") {
        if (oe !== $)
          return le[c] = $, !0;
      } else if (oe.equals($) === !1)
        return oe.copy($), !0;
    }
    return !1;
  }
  function C(B) {
    const U = B.uniforms;
    let z = 0;
    const le = 16;
    for (let c = 0, oe = U.length; c < oe; c++) {
      const xe = Array.isArray(U[c]) ? U[c] : [U[c]];
      for (let w = 0, I = xe.length; w < I; w++) {
        const pe = xe[w], J = Array.isArray(pe.value) ? pe.value : [pe.value];
        for (let de = 0, Ee = J.length; de < Ee; de++) {
          const ie = J[de], Te = D(ie), fe = z % le, Fe = fe % Te.boundary, ke = fe + Fe;
          z += Fe, ke !== 0 && le - ke < Te.storage && (z += le - ke), pe.__data = new Float32Array(Te.storage / Float32Array.BYTES_PER_ELEMENT), pe.__offset = z, z += Te.storage;
        }
      }
    }
    const $ = z % le;
    return $ > 0 && (z += le - $), B.__size = z, B.__cache = {}, this;
  }
  function D(B) {
    const U = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof B == "number" || typeof B == "boolean" ? (U.boundary = 4, U.storage = 4) : B.isVector2 ? (U.boundary = 8, U.storage = 8) : B.isVector3 || B.isColor ? (U.boundary = 16, U.storage = 12) : B.isVector4 ? (U.boundary = 16, U.storage = 16) : B.isMatrix3 ? (U.boundary = 48, U.storage = 48) : B.isMatrix4 ? (U.boundary = 64, U.storage = 64) : B.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", B), U;
  }
  function x(B) {
    const U = B.target;
    U.removeEventListener("dispose", x);
    const z = f.indexOf(U.__bindingPointIndex);
    f.splice(z, 1), i.deleteBuffer(s[U.id]), delete s[U.id], delete l[U.id];
  }
  function _() {
    for (const B in s)
      i.deleteBuffer(s[B]);
    f = [], s = {}, l = {};
  }
  return {
    bind: p,
    update: g,
    dispose: _
  };
}
class Yv {
  constructor(e = {}) {
    const {
      canvas: t = Ud(),
      context: n = null,
      depth: s = !0,
      stencil: l = !1,
      alpha: f = !1,
      antialias: h = !1,
      premultipliedAlpha: p = !0,
      preserveDrawingBuffer: g = !1,
      powerPreference: v = "default",
      failIfMajorPerformanceCaveat: M = !1
    } = e;
    this.isWebGLRenderer = !0;
    let b;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      b = n.getContextAttributes().alpha;
    } else
      b = f;
    const T = new Uint32Array(4), C = new Int32Array(4);
    let D = null, x = null;
    const _ = [], B = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = Hi, this.toneMapping = Dr, this.toneMappingExposure = 1;
    const U = this;
    let z = !1, le = 0, $ = 0, c = null, oe = -1, xe = null;
    const w = new Mn(), I = new Mn();
    let pe = null;
    const J = new Yt(0);
    let de = 0, Ee = t.width, ie = t.height, Te = 1, fe = null, Fe = null;
    const ke = new Mn(0, 0, Ee, ie), Z = new Mn(0, 0, Ee, ie);
    let It = !1;
    const zt = new Rf();
    let _e = !1, Ae = !1;
    const Ye = new En(), Ne = new En(), ht = new ce(), Me = new Mn(), ct = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let jt = !1;
    function Mt() {
      return c === null ? Te : 1;
    }
    let V = n;
    function pn(P, G) {
      return t.getContext(P, G);
    }
    try {
      const P = {
        alpha: !0,
        depth: s,
        stencil: l,
        antialias: h,
        premultipliedAlpha: p,
        preserveDrawingBuffer: g,
        powerPreference: v,
        failIfMajorPerformanceCaveat: M
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${vc}`), t.addEventListener("webglcontextlost", ye, !1), t.addEventListener("webglcontextrestored", Ue, !1), t.addEventListener("webglcontextcreationerror", Be, !1), V === null) {
        const G = "webgl2";
        if (V = pn(G, P), V === null)
          throw pn(G) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (P) {
      throw console.error("THREE.WebGLRenderer: " + P.message), P;
    }
    let Pt, bt, st, Ot, dt, O, R, ee, ve, be, K, Ie, Oe, Ke, kt, Ce, Ve, rt, nt, Ge, xt, _t, $t, j;
    function Xe() {
      Pt = new e_(V), Pt.init(), _t = new zv(V, Pt), bt = new $g(V, Pt, e, _t), st = new Ov(V), bt.reverseDepthBuffer && st.buffers.depth.setReversed(!0), Ot = new i_(V), dt = new Sv(), O = new Bv(V, Pt, st, dt, bt, _t, Ot), R = new Kg(U), ee = new Qg(U), ve = new up(V), $t = new qg(V, ve), be = new t_(V, ve, Ot, $t), K = new s_(V, be, ve, Ot), nt = new r_(V, bt, O), Ce = new Yg(dt), Ie = new yv(U, R, ee, Pt, bt, $t, Ce), Oe = new jv(U, dt), Ke = new bv(), kt = new Rv(Pt), rt = new Xg(U, R, ee, st, K, b, p), Ve = new Nv(U, K, bt), j = new $v(V, Ot, bt, st), Ge = new jg(V, Pt, Ot), xt = new n_(V, Pt, Ot), Ot.programs = Ie.programs, U.capabilities = bt, U.extensions = Pt, U.properties = dt, U.renderLists = Ke, U.shadowMap = Ve, U.state = st, U.info = Ot;
    }
    Xe();
    const he = new Xv(U, V);
    this.xr = he, this.getContext = function() {
      return V;
    }, this.getContextAttributes = function() {
      return V.getContextAttributes();
    }, this.forceContextLoss = function() {
      const P = Pt.get("WEBGL_lose_context");
      P && P.loseContext();
    }, this.forceContextRestore = function() {
      const P = Pt.get("WEBGL_lose_context");
      P && P.restoreContext();
    }, this.getPixelRatio = function() {
      return Te;
    }, this.setPixelRatio = function(P) {
      P !== void 0 && (Te = P, this.setSize(Ee, ie, !1));
    }, this.getSize = function(P) {
      return P.set(Ee, ie);
    }, this.setSize = function(P, G, Q = !0) {
      if (he.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      Ee = P, ie = G, t.width = Math.floor(P * Te), t.height = Math.floor(G * Te), Q === !0 && (t.style.width = P + "px", t.style.height = G + "px"), this.setViewport(0, 0, P, G);
    }, this.getDrawingBufferSize = function(P) {
      return P.set(Ee * Te, ie * Te).floor();
    }, this.setDrawingBufferSize = function(P, G, Q) {
      Ee = P, ie = G, Te = Q, t.width = Math.floor(P * Q), t.height = Math.floor(G * Q), this.setViewport(0, 0, P, G);
    }, this.getCurrentViewport = function(P) {
      return P.copy(w);
    }, this.getViewport = function(P) {
      return P.copy(ke);
    }, this.setViewport = function(P, G, Q, te) {
      P.isVector4 ? ke.set(P.x, P.y, P.z, P.w) : ke.set(P, G, Q, te), st.viewport(w.copy(ke).multiplyScalar(Te).round());
    }, this.getScissor = function(P) {
      return P.copy(Z);
    }, this.setScissor = function(P, G, Q, te) {
      P.isVector4 ? Z.set(P.x, P.y, P.z, P.w) : Z.set(P, G, Q, te), st.scissor(I.copy(Z).multiplyScalar(Te).round());
    }, this.getScissorTest = function() {
      return It;
    }, this.setScissorTest = function(P) {
      st.setScissorTest(It = P);
    }, this.setOpaqueSort = function(P) {
      fe = P;
    }, this.setTransparentSort = function(P) {
      Fe = P;
    }, this.getClearColor = function(P) {
      return P.copy(rt.getClearColor());
    }, this.setClearColor = function() {
      rt.setClearColor.apply(rt, arguments);
    }, this.getClearAlpha = function() {
      return rt.getClearAlpha();
    }, this.setClearAlpha = function() {
      rt.setClearAlpha.apply(rt, arguments);
    }, this.clear = function(P = !0, G = !0, Q = !0) {
      let te = 0;
      if (P) {
        let W = !1;
        if (c !== null) {
          const Re = c.texture.format;
          W = Re === Ec || Re === bc || Re === Mc;
        }
        if (W) {
          const Re = c.texture.type, Le = Re === cr || Re === cs || Re === Ao || Re === $s || Re === yc || Re === Sc, qe = rt.getClearColor(), $e = rt.getClearAlpha(), ot = qe.r, at = qe.g, Je = qe.b;
          Le ? (T[0] = ot, T[1] = at, T[2] = Je, T[3] = $e, V.clearBufferuiv(V.COLOR, 0, T)) : (C[0] = ot, C[1] = at, C[2] = Je, C[3] = $e, V.clearBufferiv(V.COLOR, 0, C));
        } else
          te |= V.COLOR_BUFFER_BIT;
      }
      G && (te |= V.DEPTH_BUFFER_BIT, V.clearDepth(this.capabilities.reverseDepthBuffer ? 0 : 1)), Q && (te |= V.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), V.clear(te);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", ye, !1), t.removeEventListener("webglcontextrestored", Ue, !1), t.removeEventListener("webglcontextcreationerror", Be, !1), Ke.dispose(), kt.dispose(), dt.dispose(), R.dispose(), ee.dispose(), K.dispose(), $t.dispose(), j.dispose(), Ie.dispose(), he.dispose(), he.removeEventListener("sessionstart", hi), he.removeEventListener("sessionend", Hn), Bn.stop();
    };
    function ye(P) {
      P.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), z = !0;
    }
    function Ue() {
      console.log("THREE.WebGLRenderer: Context Restored."), z = !1;
      const P = Ot.autoReset, G = Ve.enabled, Q = Ve.autoUpdate, te = Ve.needsUpdate, W = Ve.type;
      Xe(), Ot.autoReset = P, Ve.enabled = G, Ve.autoUpdate = Q, Ve.needsUpdate = te, Ve.type = W;
    }
    function Be(P) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", P.statusMessage);
    }
    function Lt(P) {
      const G = P.target;
      G.removeEventListener("dispose", Lt), Ht(G);
    }
    function Ht(P) {
      Kt(P), dt.remove(P);
    }
    function Kt(P) {
      const G = dt.get(P).programs;
      G !== void 0 && (G.forEach(function(Q) {
        Ie.releaseProgram(Q);
      }), P.isShaderMaterial && Ie.releaseShaderCache(P));
    }
    this.renderBufferDirect = function(P, G, Q, te, W, Re) {
      G === null && (G = ct);
      const Le = W.isMesh && W.matrixWorld.determinant() < 0, qe = pr(P, G, Q, te, W);
      st.setMaterial(te, Le);
      let $e = Q.index, ot = 1;
      if (te.wireframe === !0) {
        if ($e = be.getWireframeAttribute(Q), $e === void 0) return;
        ot = 2;
      }
      const at = Q.drawRange, Je = Q.attributes.position;
      let Vt = at.start * ot, Zt = (at.start + at.count) * ot;
      Re !== null && (Vt = Math.max(Vt, Re.start * ot), Zt = Math.min(Zt, (Re.start + Re.count) * ot)), $e !== null ? (Vt = Math.max(Vt, 0), Zt = Math.min(Zt, $e.count)) : Je != null && (Vt = Math.max(Vt, 0), Zt = Math.min(Zt, Je.count));
      const rn = Zt - Vt;
      if (rn < 0 || rn === 1 / 0) return;
      $t.setup(W, te, qe, Q, $e);
      let Tn, Gt = Ge;
      if ($e !== null && (Tn = ve.get($e), Gt = xt, Gt.setIndex(Tn)), W.isMesh)
        te.wireframe === !0 ? (st.setLineWidth(te.wireframeLinewidth * Mt()), Gt.setMode(V.LINES)) : Gt.setMode(V.TRIANGLES);
      else if (W.isLine) {
        let et = te.linewidth;
        et === void 0 && (et = 1), st.setLineWidth(et * Mt()), W.isLineSegments ? Gt.setMode(V.LINES) : W.isLineLoop ? Gt.setMode(V.LINE_LOOP) : Gt.setMode(V.LINE_STRIP);
      } else W.isPoints ? Gt.setMode(V.POINTS) : W.isSprite && Gt.setMode(V.TRIANGLES);
      if (W.isBatchedMesh)
        if (W._multiDrawInstances !== null)
          Gt.renderMultiDrawInstances(W._multiDrawStarts, W._multiDrawCounts, W._multiDrawCount, W._multiDrawInstances);
        else if (Pt.get("WEBGL_multi_draw"))
          Gt.renderMultiDraw(W._multiDrawStarts, W._multiDrawCounts, W._multiDrawCount);
        else {
          const et = W._multiDrawStarts, hn = W._multiDrawCounts, pt = W._multiDrawCount, vn = $e ? ve.get($e).bytesPerElement : 1, $n = dt.get(te).currentProgram.getUniforms();
          for (let Rn = 0; Rn < pt; Rn++)
            $n.setValue(V, "_gl_DrawID", Rn), Gt.render(et[Rn] / vn, hn[Rn]);
        }
      else if (W.isInstancedMesh)
        Gt.renderInstances(Vt, rn, W.count);
      else if (Q.isInstancedBufferGeometry) {
        const et = Q._maxInstanceCount !== void 0 ? Q._maxInstanceCount : 1 / 0, hn = Math.min(Q.instanceCount, et);
        Gt.renderInstances(Vt, rn, hn);
      } else
        Gt.render(Vt, rn);
    };
    function Ft(P, G, Q) {
      P.transparent === !0 && P.side === or && P.forceSinglePass === !1 ? (P.side = ei, P.needsUpdate = !0, jn(P, G, Q), P.side = Ir, P.needsUpdate = !0, jn(P, G, Q), P.side = or) : jn(P, G, Q);
    }
    this.compile = function(P, G, Q = null) {
      Q === null && (Q = P), x = kt.get(Q), x.init(G), B.push(x), Q.traverseVisible(function(W) {
        W.isLight && W.layers.test(G.layers) && (x.pushLight(W), W.castShadow && x.pushShadow(W));
      }), P !== Q && P.traverseVisible(function(W) {
        W.isLight && W.layers.test(G.layers) && (x.pushLight(W), W.castShadow && x.pushShadow(W));
      }), x.setupLights();
      const te = /* @__PURE__ */ new Set();
      return P.traverse(function(W) {
        if (!(W.isMesh || W.isPoints || W.isLine || W.isSprite))
          return;
        const Re = W.material;
        if (Re)
          if (Array.isArray(Re))
            for (let Le = 0; Le < Re.length; Le++) {
              const qe = Re[Le];
              Ft(qe, Q, W), te.add(qe);
            }
          else
            Ft(Re, Q, W), te.add(Re);
      }), B.pop(), x = null, te;
    }, this.compileAsync = function(P, G, Q = null) {
      const te = this.compile(P, G, Q);
      return new Promise((W) => {
        function Re() {
          if (te.forEach(function(Le) {
            dt.get(Le).currentProgram.isReady() && te.delete(Le);
          }), te.size === 0) {
            W(P);
            return;
          }
          setTimeout(Re, 10);
        }
        Pt.get("KHR_parallel_shader_compile") !== null ? Re() : setTimeout(Re, 10);
      });
    };
    let Cn = null;
    function qn(P) {
      Cn && Cn(P);
    }
    function hi() {
      Bn.stop();
    }
    function Hn() {
      Bn.start();
    }
    const Bn = new Pf();
    Bn.setAnimationLoop(qn), typeof self < "u" && Bn.setContext(self), this.setAnimationLoop = function(P) {
      Cn = P, he.setAnimationLoop(P), P === null ? Bn.stop() : Bn.start();
    }, he.addEventListener("sessionstart", hi), he.addEventListener("sessionend", Hn), this.render = function(P, G) {
      if (G !== void 0 && G.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (z === !0) return;
      if (P.matrixWorldAutoUpdate === !0 && P.updateMatrixWorld(), G.parent === null && G.matrixWorldAutoUpdate === !0 && G.updateMatrixWorld(), he.enabled === !0 && he.isPresenting === !0 && (he.cameraAutoUpdate === !0 && he.updateCamera(G), G = he.getCamera()), P.isScene === !0 && P.onBeforeRender(U, P, G, c), x = kt.get(P, B.length), x.init(G), B.push(x), Ne.multiplyMatrices(G.projectionMatrix, G.matrixWorldInverse), zt.setFromProjectionMatrix(Ne), Ae = this.localClippingEnabled, _e = Ce.init(this.clippingPlanes, Ae), D = Ke.get(P, _.length), D.init(), _.push(D), he.enabled === !0 && he.isPresenting === !0) {
        const Re = U.xr.getDepthSensingMesh();
        Re !== null && Xi(Re, G, -1 / 0, U.sortObjects);
      }
      Xi(P, G, 0, U.sortObjects), D.finish(), U.sortObjects === !0 && D.sort(fe, Fe), jt = he.enabled === !1 || he.isPresenting === !1 || he.hasDepthSensing() === !1, jt && rt.addToRenderList(D, P), this.info.render.frame++, _e === !0 && Ce.beginShadows();
      const Q = x.state.shadowsArray;
      Ve.render(Q, P, G), _e === !0 && Ce.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const te = D.opaque, W = D.transmissive;
      if (x.setupLights(), G.isArrayCamera) {
        const Re = G.cameras;
        if (W.length > 0)
          for (let Le = 0, qe = Re.length; Le < qe; Le++) {
            const $e = Re[Le];
            hs(te, W, P, $e);
          }
        jt && rt.render(P);
        for (let Le = 0, qe = Re.length; Le < qe; Le++) {
          const $e = Re[Le];
          qi(D, P, $e, $e.viewport);
        }
      } else
        W.length > 0 && hs(te, W, P, G), jt && rt.render(P), qi(D, P, G);
      c !== null && (O.updateMultisampleRenderTarget(c), O.updateRenderTargetMipmap(c)), P.isScene === !0 && P.onAfterRender(U, P, G), $t.resetDefaultState(), oe = -1, xe = null, B.pop(), B.length > 0 ? (x = B[B.length - 1], _e === !0 && Ce.setGlobalState(U.clippingPlanes, x.state.camera)) : x = null, _.pop(), _.length > 0 ? D = _[_.length - 1] : D = null;
    };
    function Xi(P, G, Q, te) {
      if (P.visible === !1) return;
      if (P.layers.test(G.layers)) {
        if (P.isGroup)
          Q = P.renderOrder;
        else if (P.isLOD)
          P.autoUpdate === !0 && P.update(G);
        else if (P.isLight)
          x.pushLight(P), P.castShadow && x.pushShadow(P);
        else if (P.isSprite) {
          if (!P.frustumCulled || zt.intersectsSprite(P)) {
            te && Me.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ne);
            const Le = K.update(P), qe = P.material;
            qe.visible && D.push(P, Le, qe, Q, Me.z, null);
          }
        } else if ((P.isMesh || P.isLine || P.isPoints) && (!P.frustumCulled || zt.intersectsObject(P))) {
          const Le = K.update(P), qe = P.material;
          if (te && (P.boundingSphere !== void 0 ? (P.boundingSphere === null && P.computeBoundingSphere(), Me.copy(P.boundingSphere.center)) : (Le.boundingSphere === null && Le.computeBoundingSphere(), Me.copy(Le.boundingSphere.center)), Me.applyMatrix4(P.matrixWorld).applyMatrix4(Ne)), Array.isArray(qe)) {
            const $e = Le.groups;
            for (let ot = 0, at = $e.length; ot < at; ot++) {
              const Je = $e[ot], Vt = qe[Je.materialIndex];
              Vt && Vt.visible && D.push(P, Le, Vt, Q, Me.z, Je);
            }
          } else qe.visible && D.push(P, Le, qe, Q, Me.z, null);
        }
      }
      const Re = P.children;
      for (let Le = 0, qe = Re.length; Le < qe; Le++)
        Xi(Re[Le], G, Q, te);
    }
    function qi(P, G, Q, te) {
      const W = P.opaque, Re = P.transmissive, Le = P.transparent;
      x.setupLightsView(Q), _e === !0 && Ce.setGlobalState(U.clippingPlanes, Q), te && st.viewport(w.copy(te)), W.length > 0 && hr(W, G, Q), Re.length > 0 && hr(Re, G, Q), Le.length > 0 && hr(Le, G, Q), st.buffers.depth.setTest(!0), st.buffers.depth.setMask(!0), st.buffers.color.setMask(!0), st.setPolygonOffset(!1);
    }
    function hs(P, G, Q, te) {
      if ((Q.isScene === !0 ? Q.overrideMaterial : null) !== null)
        return;
      x.state.transmissionRenderTarget[te.id] === void 0 && (x.state.transmissionRenderTarget[te.id] = new us(1, 1, {
        generateMipmaps: !0,
        type: Pt.has("EXT_color_buffer_half_float") || Pt.has("EXT_color_buffer_float") ? wo : cr,
        minFilter: as,
        samples: 4,
        stencilBuffer: l,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: en.workingColorSpace
      }));
      const Re = x.state.transmissionRenderTarget[te.id], Le = te.viewport || w;
      Re.setSize(Le.z, Le.w);
      const qe = U.getRenderTarget();
      U.setRenderTarget(Re), U.getClearColor(J), de = U.getClearAlpha(), de < 1 && U.setClearColor(16777215, 0.5), U.clear(), jt && rt.render(Q);
      const $e = U.toneMapping;
      U.toneMapping = Dr;
      const ot = te.viewport;
      if (te.viewport !== void 0 && (te.viewport = void 0), x.setupLightsView(te), _e === !0 && Ce.setGlobalState(U.clippingPlanes, te), hr(P, Q, te), O.updateMultisampleRenderTarget(Re), O.updateRenderTargetMipmap(Re), Pt.has("WEBGL_multisampled_render_to_texture") === !1) {
        let at = !1;
        for (let Je = 0, Vt = G.length; Je < Vt; Je++) {
          const Zt = G[Je], rn = Zt.object, Tn = Zt.geometry, Gt = Zt.material, et = Zt.group;
          if (Gt.side === or && rn.layers.test(te.layers)) {
            const hn = Gt.side;
            Gt.side = ei, Gt.needsUpdate = !0, dr(rn, Q, te, Tn, Gt, et), Gt.side = hn, Gt.needsUpdate = !0, at = !0;
          }
        }
        at === !0 && (O.updateMultisampleRenderTarget(Re), O.updateRenderTargetMipmap(Re));
      }
      U.setRenderTarget(qe), U.setClearColor(J, de), ot !== void 0 && (te.viewport = ot), U.toneMapping = $e;
    }
    function hr(P, G, Q) {
      const te = G.isScene === !0 ? G.overrideMaterial : null;
      for (let W = 0, Re = P.length; W < Re; W++) {
        const Le = P[W], qe = Le.object, $e = Le.geometry, ot = te === null ? Le.material : te, at = Le.group;
        qe.layers.test(Q.layers) && dr(qe, G, Q, $e, ot, at);
      }
    }
    function dr(P, G, Q, te, W, Re) {
      P.onBeforeRender(U, G, Q, te, W, Re), P.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse, P.matrixWorld), P.normalMatrix.getNormalMatrix(P.modelViewMatrix), W.onBeforeRender(U, G, Q, te, P, Re), W.transparent === !0 && W.side === or && W.forceSinglePass === !1 ? (W.side = ei, W.needsUpdate = !0, U.renderBufferDirect(Q, G, te, W, P, Re), W.side = Ir, W.needsUpdate = !0, U.renderBufferDirect(Q, G, te, W, P, Re), W.side = or) : U.renderBufferDirect(Q, G, te, W, P, Re), P.onAfterRender(U, G, Q, te, W, Re);
    }
    function jn(P, G, Q) {
      G.isScene !== !0 && (G = ct);
      const te = dt.get(P), W = x.state.lights, Re = x.state.shadowsArray, Le = W.state.version, qe = Ie.getParameters(P, W.state, Re, G, Q), $e = Ie.getProgramCacheKey(qe);
      let ot = te.programs;
      te.environment = P.isMeshStandardMaterial ? G.environment : null, te.fog = G.fog, te.envMap = (P.isMeshStandardMaterial ? ee : R).get(P.envMap || te.environment), te.envMapRotation = te.environment !== null && P.envMap === null ? G.environmentRotation : P.envMapRotation, ot === void 0 && (P.addEventListener("dispose", Lt), ot = /* @__PURE__ */ new Map(), te.programs = ot);
      let at = ot.get($e);
      if (at !== void 0) {
        if (te.currentProgram === at && te.lightsStateVersion === Le)
          return ds(P, qe), at;
      } else
        qe.uniforms = Ie.getUniforms(P), P.onBeforeCompile(qe, U), at = Ie.acquireProgram(qe, $e), ot.set($e, at), te.uniforms = qe.uniforms;
      const Je = te.uniforms;
      return (!P.isShaderMaterial && !P.isRawShaderMaterial || P.clipping === !0) && (Je.clippingPlanes = Ce.uniform), ds(P, qe), te.needsLights = Ni(P), te.lightsStateVersion = Le, te.needsLights && (Je.ambientLightColor.value = W.state.ambient, Je.lightProbe.value = W.state.probe, Je.directionalLights.value = W.state.directional, Je.directionalLightShadows.value = W.state.directionalShadow, Je.spotLights.value = W.state.spot, Je.spotLightShadows.value = W.state.spotShadow, Je.rectAreaLights.value = W.state.rectArea, Je.ltc_1.value = W.state.rectAreaLTC1, Je.ltc_2.value = W.state.rectAreaLTC2, Je.pointLights.value = W.state.point, Je.pointLightShadows.value = W.state.pointShadow, Je.hemisphereLights.value = W.state.hemi, Je.directionalShadowMap.value = W.state.directionalShadowMap, Je.directionalShadowMatrix.value = W.state.directionalShadowMatrix, Je.spotShadowMap.value = W.state.spotShadowMap, Je.spotLightMatrix.value = W.state.spotLightMatrix, Je.spotLightMap.value = W.state.spotLightMap, Je.pointShadowMap.value = W.state.pointShadowMap, Je.pointShadowMatrix.value = W.state.pointShadowMatrix), te.currentProgram = at, te.uniformsList = null, at;
    }
    function ji(P) {
      if (P.uniformsList === null) {
        const G = P.currentProgram.getUniforms();
        P.uniformsList = Ea.seqWithValue(G.seq, P.uniforms);
      }
      return P.uniformsList;
    }
    function ds(P, G) {
      const Q = dt.get(P);
      Q.outputColorSpace = G.outputColorSpace, Q.batching = G.batching, Q.batchingColor = G.batchingColor, Q.instancing = G.instancing, Q.instancingColor = G.instancingColor, Q.instancingMorph = G.instancingMorph, Q.skinning = G.skinning, Q.morphTargets = G.morphTargets, Q.morphNormals = G.morphNormals, Q.morphColors = G.morphColors, Q.morphTargetsCount = G.morphTargetsCount, Q.numClippingPlanes = G.numClippingPlanes, Q.numIntersection = G.numClipIntersection, Q.vertexAlphas = G.vertexAlphas, Q.vertexTangents = G.vertexTangents, Q.toneMapping = G.toneMapping;
    }
    function pr(P, G, Q, te, W) {
      G.isScene !== !0 && (G = ct), O.resetTextureUnits();
      const Re = G.fog, Le = te.isMeshStandardMaterial ? G.environment : null, qe = c === null ? U.outputColorSpace : c.isXRRenderTarget === !0 ? c.texture.colorSpace : Nr, $e = (te.isMeshStandardMaterial ? ee : R).get(te.envMap || Le), ot = te.vertexColors === !0 && !!Q.attributes.color && Q.attributes.color.itemSize === 4, at = !!Q.attributes.tangent && (!!te.normalMap || te.anisotropy > 0), Je = !!Q.morphAttributes.position, Vt = !!Q.morphAttributes.normal, Zt = !!Q.morphAttributes.color;
      let rn = Dr;
      te.toneMapped && (c === null || c.isXRRenderTarget === !0) && (rn = U.toneMapping);
      const Tn = Q.morphAttributes.position || Q.morphAttributes.normal || Q.morphAttributes.color, Gt = Tn !== void 0 ? Tn.length : 0, et = dt.get(te), hn = x.state.lights;
      if (_e === !0 && (Ae === !0 || P !== xe)) {
        const dn = P === xe && te.id === oe;
        Ce.setState(te, P, dn);
      }
      let pt = !1;
      te.version === et.__version ? (et.needsLights && et.lightsStateVersion !== hn.state.version || et.outputColorSpace !== qe || W.isBatchedMesh && et.batching === !1 || !W.isBatchedMesh && et.batching === !0 || W.isBatchedMesh && et.batchingColor === !0 && W.colorTexture === null || W.isBatchedMesh && et.batchingColor === !1 && W.colorTexture !== null || W.isInstancedMesh && et.instancing === !1 || !W.isInstancedMesh && et.instancing === !0 || W.isSkinnedMesh && et.skinning === !1 || !W.isSkinnedMesh && et.skinning === !0 || W.isInstancedMesh && et.instancingColor === !0 && W.instanceColor === null || W.isInstancedMesh && et.instancingColor === !1 && W.instanceColor !== null || W.isInstancedMesh && et.instancingMorph === !0 && W.morphTexture === null || W.isInstancedMesh && et.instancingMorph === !1 && W.morphTexture !== null || et.envMap !== $e || te.fog === !0 && et.fog !== Re || et.numClippingPlanes !== void 0 && (et.numClippingPlanes !== Ce.numPlanes || et.numIntersection !== Ce.numIntersection) || et.vertexAlphas !== ot || et.vertexTangents !== at || et.morphTargets !== Je || et.morphNormals !== Vt || et.morphColors !== Zt || et.toneMapping !== rn || et.morphTargetsCount !== Gt) && (pt = !0) : (pt = !0, et.__version = te.version);
      let vn = et.currentProgram;
      pt === !0 && (vn = jn(te, G, W));
      let $n = !1, Rn = !1, mr = !1;
      const sn = vn.getUniforms(), mn = et.uniforms;
      if (st.useProgram(vn.program) && ($n = !0, Rn = !0, mr = !0), te.id !== oe && (oe = te.id, Rn = !0), $n || xe !== P) {
        bt.reverseDepthBuffer ? (Ye.copy(P.projectionMatrix), Fd(Ye), Bd(Ye), sn.setValue(V, "projectionMatrix", Ye)) : sn.setValue(V, "projectionMatrix", P.projectionMatrix), sn.setValue(V, "viewMatrix", P.matrixWorldInverse);
        const dn = sn.map.cameraPosition;
        dn !== void 0 && dn.setValue(V, ht.setFromMatrixPosition(P.matrixWorld)), bt.logarithmicDepthBuffer && sn.setValue(
          V,
          "logDepthBufFC",
          2 / (Math.log(P.far + 1) / Math.LN2)
        ), (te.isMeshPhongMaterial || te.isMeshToonMaterial || te.isMeshLambertMaterial || te.isMeshBasicMaterial || te.isMeshStandardMaterial || te.isShaderMaterial) && sn.setValue(V, "isOrthographic", P.isOrthographicCamera === !0), xe !== P && (xe = P, Rn = !0, mr = !0);
      }
      if (W.isSkinnedMesh) {
        sn.setOptional(V, W, "bindMatrix"), sn.setOptional(V, W, "bindMatrixInverse");
        const dn = W.skeleton;
        dn && (dn.boneTexture === null && dn.computeBoneTexture(), sn.setValue(V, "boneTexture", dn.boneTexture, O));
      }
      W.isBatchedMesh && (sn.setOptional(V, W, "batchingTexture"), sn.setValue(V, "batchingTexture", W._matricesTexture, O), sn.setOptional(V, W, "batchingIdTexture"), sn.setValue(V, "batchingIdTexture", W._indirectTexture, O), sn.setOptional(V, W, "batchingColorTexture"), W._colorsTexture !== null && sn.setValue(V, "batchingColorTexture", W._colorsTexture, O));
      const gn = Q.morphAttributes;
      if ((gn.position !== void 0 || gn.normal !== void 0 || gn.color !== void 0) && nt.update(W, Q, vn), (Rn || et.receiveShadow !== W.receiveShadow) && (et.receiveShadow = W.receiveShadow, sn.setValue(V, "receiveShadow", W.receiveShadow)), te.isMeshGouraudMaterial && te.envMap !== null && (mn.envMap.value = $e, mn.flipEnvMap.value = $e.isCubeTexture && $e.isRenderTargetTexture === !1 ? -1 : 1), te.isMeshStandardMaterial && te.envMap === null && G.environment !== null && (mn.envMapIntensity.value = G.environmentIntensity), Rn && (sn.setValue(V, "toneMappingExposure", U.toneMappingExposure), et.needsLights && Qs(mn, mr), Re && te.fog === !0 && Oe.refreshFogUniforms(mn, Re), Oe.refreshMaterialUniforms(mn, te, Te, ie, x.state.transmissionRenderTarget[P.id]), Ea.upload(V, ji(et), mn, O)), te.isShaderMaterial && te.uniformsNeedUpdate === !0 && (Ea.upload(V, ji(et), mn, O), te.uniformsNeedUpdate = !1), te.isSpriteMaterial && sn.setValue(V, "center", W.center), sn.setValue(V, "modelViewMatrix", W.modelViewMatrix), sn.setValue(V, "normalMatrix", W.normalMatrix), sn.setValue(V, "modelMatrix", W.matrixWorld), te.isShaderMaterial || te.isRawShaderMaterial) {
        const dn = te.uniformsGroups;
        for (let Pn = 0, Ur = dn.length; Pn < Ur; Pn++) {
          const Ln = dn[Pn];
          j.update(Ln, vn), j.bind(Ln, vn);
        }
      }
      return vn;
    }
    function Qs(P, G) {
      P.ambientLightColor.needsUpdate = G, P.lightProbe.needsUpdate = G, P.directionalLights.needsUpdate = G, P.directionalLightShadows.needsUpdate = G, P.pointLights.needsUpdate = G, P.pointLightShadows.needsUpdate = G, P.spotLights.needsUpdate = G, P.spotLightShadows.needsUpdate = G, P.rectAreaLights.needsUpdate = G, P.hemisphereLights.needsUpdate = G;
    }
    function Ni(P) {
      return P.isMeshLambertMaterial || P.isMeshToonMaterial || P.isMeshPhongMaterial || P.isMeshStandardMaterial || P.isShadowMaterial || P.isShaderMaterial && P.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return le;
    }, this.getActiveMipmapLevel = function() {
      return $;
    }, this.getRenderTarget = function() {
      return c;
    }, this.setRenderTargetTextures = function(P, G, Q) {
      dt.get(P.texture).__webglTexture = G, dt.get(P.depthTexture).__webglTexture = Q;
      const te = dt.get(P);
      te.__hasExternalTextures = !0, te.__autoAllocateDepthBuffer = Q === void 0, te.__autoAllocateDepthBuffer || Pt.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), te.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(P, G) {
      const Q = dt.get(P);
      Q.__webglFramebuffer = G, Q.__useDefaultFramebuffer = G === void 0;
    }, this.setRenderTarget = function(P, G = 0, Q = 0) {
      c = P, le = G, $ = Q;
      let te = !0, W = null, Re = !1, Le = !1;
      if (P) {
        const $e = dt.get(P);
        if ($e.__useDefaultFramebuffer !== void 0)
          st.bindFramebuffer(V.FRAMEBUFFER, null), te = !1;
        else if ($e.__webglFramebuffer === void 0)
          O.setupRenderTarget(P);
        else if ($e.__hasExternalTextures)
          O.rebindTextures(P, dt.get(P.texture).__webglTexture, dt.get(P.depthTexture).__webglTexture);
        else if (P.depthBuffer) {
          const Je = P.depthTexture;
          if ($e.__boundDepthTexture !== Je) {
            if (Je !== null && dt.has(Je) && (P.width !== Je.image.width || P.height !== Je.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            O.setupDepthRenderbuffer(P);
          }
        }
        const ot = P.texture;
        (ot.isData3DTexture || ot.isDataArrayTexture || ot.isCompressedArrayTexture) && (Le = !0);
        const at = dt.get(P).__webglFramebuffer;
        P.isWebGLCubeRenderTarget ? (Array.isArray(at[G]) ? W = at[G][Q] : W = at[G], Re = !0) : P.samples > 0 && O.useMultisampledRTT(P) === !1 ? W = dt.get(P).__webglMultisampledFramebuffer : Array.isArray(at) ? W = at[Q] : W = at, w.copy(P.viewport), I.copy(P.scissor), pe = P.scissorTest;
      } else
        w.copy(ke).multiplyScalar(Te).floor(), I.copy(Z).multiplyScalar(Te).floor(), pe = It;
      if (st.bindFramebuffer(V.FRAMEBUFFER, W) && te && st.drawBuffers(P, W), st.viewport(w), st.scissor(I), st.setScissorTest(pe), Re) {
        const $e = dt.get(P.texture);
        V.framebufferTexture2D(V.FRAMEBUFFER, V.COLOR_ATTACHMENT0, V.TEXTURE_CUBE_MAP_POSITIVE_X + G, $e.__webglTexture, Q);
      } else if (Le) {
        const $e = dt.get(P.texture), ot = G || 0;
        V.framebufferTextureLayer(V.FRAMEBUFFER, V.COLOR_ATTACHMENT0, $e.__webglTexture, Q || 0, ot);
      }
      oe = -1;
    }, this.readRenderTargetPixels = function(P, G, Q, te, W, Re, Le) {
      if (!(P && P.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let qe = dt.get(P).__webglFramebuffer;
      if (P.isWebGLCubeRenderTarget && Le !== void 0 && (qe = qe[Le]), qe) {
        st.bindFramebuffer(V.FRAMEBUFFER, qe);
        try {
          const $e = P.texture, ot = $e.format, at = $e.type;
          if (!bt.textureFormatReadable(ot)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!bt.textureTypeReadable(at)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          G >= 0 && G <= P.width - te && Q >= 0 && Q <= P.height - W && V.readPixels(G, Q, te, W, _t.convert(ot), _t.convert(at), Re);
        } finally {
          const $e = c !== null ? dt.get(c).__webglFramebuffer : null;
          st.bindFramebuffer(V.FRAMEBUFFER, $e);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(P, G, Q, te, W, Re, Le) {
      if (!(P && P.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let qe = dt.get(P).__webglFramebuffer;
      if (P.isWebGLCubeRenderTarget && Le !== void 0 && (qe = qe[Le]), qe) {
        const $e = P.texture, ot = $e.format, at = $e.type;
        if (!bt.textureFormatReadable(ot))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!bt.textureTypeReadable(at))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (G >= 0 && G <= P.width - te && Q >= 0 && Q <= P.height - W) {
          st.bindFramebuffer(V.FRAMEBUFFER, qe);
          const Je = V.createBuffer();
          V.bindBuffer(V.PIXEL_PACK_BUFFER, Je), V.bufferData(V.PIXEL_PACK_BUFFER, Re.byteLength, V.STREAM_READ), V.readPixels(G, Q, te, W, _t.convert(ot), _t.convert(at), 0);
          const Vt = c !== null ? dt.get(c).__webglFramebuffer : null;
          st.bindFramebuffer(V.FRAMEBUFFER, Vt);
          const Zt = V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return V.flush(), await Od(V, Zt, 4), V.bindBuffer(V.PIXEL_PACK_BUFFER, Je), V.getBufferSubData(V.PIXEL_PACK_BUFFER, 0, Re), V.deleteBuffer(Je), V.deleteSync(Zt), Re;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(P, G = null, Q = 0) {
      P.isTexture !== !0 && (ba("WebGLRenderer: copyFramebufferToTexture function signature has changed."), G = arguments[0] || null, P = arguments[1]);
      const te = Math.pow(2, -Q), W = Math.floor(P.image.width * te), Re = Math.floor(P.image.height * te), Le = G !== null ? G.x : 0, qe = G !== null ? G.y : 0;
      O.setTexture2D(P, 0), V.copyTexSubImage2D(V.TEXTURE_2D, Q, 0, 0, Le, qe, W, Re), st.unbindTexture();
    }, this.copyTextureToTexture = function(P, G, Q = null, te = null, W = 0) {
      P.isTexture !== !0 && (ba("WebGLRenderer: copyTextureToTexture function signature has changed."), te = arguments[0] || null, P = arguments[1], G = arguments[2], W = arguments[3] || 0, Q = null);
      let Re, Le, qe, $e, ot, at;
      Q !== null ? (Re = Q.max.x - Q.min.x, Le = Q.max.y - Q.min.y, qe = Q.min.x, $e = Q.min.y) : (Re = P.image.width, Le = P.image.height, qe = 0, $e = 0), te !== null ? (ot = te.x, at = te.y) : (ot = 0, at = 0);
      const Je = _t.convert(G.format), Vt = _t.convert(G.type);
      O.setTexture2D(G, 0), V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL, G.flipY), V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL, G.premultiplyAlpha), V.pixelStorei(V.UNPACK_ALIGNMENT, G.unpackAlignment);
      const Zt = V.getParameter(V.UNPACK_ROW_LENGTH), rn = V.getParameter(V.UNPACK_IMAGE_HEIGHT), Tn = V.getParameter(V.UNPACK_SKIP_PIXELS), Gt = V.getParameter(V.UNPACK_SKIP_ROWS), et = V.getParameter(V.UNPACK_SKIP_IMAGES), hn = P.isCompressedTexture ? P.mipmaps[W] : P.image;
      V.pixelStorei(V.UNPACK_ROW_LENGTH, hn.width), V.pixelStorei(V.UNPACK_IMAGE_HEIGHT, hn.height), V.pixelStorei(V.UNPACK_SKIP_PIXELS, qe), V.pixelStorei(V.UNPACK_SKIP_ROWS, $e), P.isDataTexture ? V.texSubImage2D(V.TEXTURE_2D, W, ot, at, Re, Le, Je, Vt, hn.data) : P.isCompressedTexture ? V.compressedTexSubImage2D(V.TEXTURE_2D, W, ot, at, hn.width, hn.height, Je, hn.data) : V.texSubImage2D(V.TEXTURE_2D, W, ot, at, Re, Le, Je, Vt, hn), V.pixelStorei(V.UNPACK_ROW_LENGTH, Zt), V.pixelStorei(V.UNPACK_IMAGE_HEIGHT, rn), V.pixelStorei(V.UNPACK_SKIP_PIXELS, Tn), V.pixelStorei(V.UNPACK_SKIP_ROWS, Gt), V.pixelStorei(V.UNPACK_SKIP_IMAGES, et), W === 0 && G.generateMipmaps && V.generateMipmap(V.TEXTURE_2D), st.unbindTexture();
    }, this.copyTextureToTexture3D = function(P, G, Q = null, te = null, W = 0) {
      P.isTexture !== !0 && (ba("WebGLRenderer: copyTextureToTexture3D function signature has changed."), Q = arguments[0] || null, te = arguments[1] || null, P = arguments[2], G = arguments[3], W = arguments[4] || 0);
      let Re, Le, qe, $e, ot, at, Je, Vt, Zt;
      const rn = P.isCompressedTexture ? P.mipmaps[W] : P.image;
      Q !== null ? (Re = Q.max.x - Q.min.x, Le = Q.max.y - Q.min.y, qe = Q.max.z - Q.min.z, $e = Q.min.x, ot = Q.min.y, at = Q.min.z) : (Re = rn.width, Le = rn.height, qe = rn.depth, $e = 0, ot = 0, at = 0), te !== null ? (Je = te.x, Vt = te.y, Zt = te.z) : (Je = 0, Vt = 0, Zt = 0);
      const Tn = _t.convert(G.format), Gt = _t.convert(G.type);
      let et;
      if (G.isData3DTexture)
        O.setTexture3D(G, 0), et = V.TEXTURE_3D;
      else if (G.isDataArrayTexture || G.isCompressedArrayTexture)
        O.setTexture2DArray(G, 0), et = V.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL, G.flipY), V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL, G.premultiplyAlpha), V.pixelStorei(V.UNPACK_ALIGNMENT, G.unpackAlignment);
      const hn = V.getParameter(V.UNPACK_ROW_LENGTH), pt = V.getParameter(V.UNPACK_IMAGE_HEIGHT), vn = V.getParameter(V.UNPACK_SKIP_PIXELS), $n = V.getParameter(V.UNPACK_SKIP_ROWS), Rn = V.getParameter(V.UNPACK_SKIP_IMAGES);
      V.pixelStorei(V.UNPACK_ROW_LENGTH, rn.width), V.pixelStorei(V.UNPACK_IMAGE_HEIGHT, rn.height), V.pixelStorei(V.UNPACK_SKIP_PIXELS, $e), V.pixelStorei(V.UNPACK_SKIP_ROWS, ot), V.pixelStorei(V.UNPACK_SKIP_IMAGES, at), P.isDataTexture || P.isData3DTexture ? V.texSubImage3D(et, W, Je, Vt, Zt, Re, Le, qe, Tn, Gt, rn.data) : G.isCompressedArrayTexture ? V.compressedTexSubImage3D(et, W, Je, Vt, Zt, Re, Le, qe, Tn, rn.data) : V.texSubImage3D(et, W, Je, Vt, Zt, Re, Le, qe, Tn, Gt, rn), V.pixelStorei(V.UNPACK_ROW_LENGTH, hn), V.pixelStorei(V.UNPACK_IMAGE_HEIGHT, pt), V.pixelStorei(V.UNPACK_SKIP_PIXELS, vn), V.pixelStorei(V.UNPACK_SKIP_ROWS, $n), V.pixelStorei(V.UNPACK_SKIP_IMAGES, Rn), W === 0 && G.generateMipmaps && V.generateMipmap(et), st.unbindTexture();
    }, this.initRenderTarget = function(P) {
      dt.get(P).__webglFramebuffer === void 0 && O.setupRenderTarget(P);
    }, this.initTexture = function(P) {
      P.isCubeTexture ? O.setTextureCube(P, 0) : P.isData3DTexture ? O.setTexture3D(P, 0) : P.isDataArrayTexture || P.isCompressedArrayTexture ? O.setTexture2DArray(P, 0) : O.setTexture2D(P, 0), st.unbindTexture();
    }, this.resetState = function() {
      le = 0, $ = 0, c = null, st.reset(), $t.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return lr;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === Tc ? "display-p3" : "srgb", t.unpackColorSpace = en.workingColorSpace === La ? "display-p3" : "srgb";
  }
}
class Kv extends fi {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new ur(), this.environmentIntensity = 1, this.environmentRotation = new ur(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class Zv {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = Zu(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const t = Zu();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function Zu() {
  return performance.now();
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: vc
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = vc);
const Gs = 50, Ws = 80, Jv = !0, Pl = 5, Qv = new Zv(), Of = s0();
class e0 {
  _ref;
  _speed = -1;
  _horizontalPressure = -1;
  _verticalPressure = -1;
  _waveFrequencyX = -1;
  _waveFrequencyY = -1;
  _waveAmplitude = -1;
  _shadows = -1;
  _highlights = -1;
  _saturation = -1;
  _brightness = -1;
  _grainScale = -1;
  _grainIntensity = -1;
  _grainSparsity = -1;
  _grainSpeed = -1;
  _colorBlending = -1;
  _colors = [];
  _wireframe = !1;
  _backgroundColor = "#FFFFFF";
  _backgroundAlpha = 1;
  requestRef = -1;
  sizeObserver;
  sceneState;
  _yOffset = 0;
  constructor(e) {
    const {
      ref: t,
      speed: n = 4,
      horizontalPressure: s = 3,
      verticalPressure: l = 3,
      waveFrequencyX: f = 5,
      waveFrequencyY: h = 5,
      waveAmplitude: p = 3,
      colors: g,
      highlights: v = 4,
      shadows: M = 4,
      colorSaturation: b = 0,
      colorBrightness: T = 1,
      colorBlending: C = 5,
      grainScale: D = 2,
      grainIntensity: x = 0.55,
      grainSparsity: _ = 0,
      grainSpeed: B = 0.1,
      wireframe: U = !1,
      backgroundColor: z = "#FFFFFF",
      backgroundAlpha: le = 1,
      resolution: $ = 1,
      seed: c,
      yOffset: oe = 0
    } = e;
    this._ref = t, this.destroy = this.destroy.bind(this), this._initScene = this._initScene.bind(this), this._buildMaterial = this._buildMaterial.bind(this), this.speed = n, this.horizontalPressure = s, this.verticalPressure = l, this.waveFrequencyX = f, this.waveFrequencyY = h, this.waveAmplitude = p, this.colorBlending = C, this.grainScale = D, this.grainIntensity = x, this.grainSparsity = _, this.grainSpeed = B, this.colors = g, this.shadows = M, this.highlights = v, this.colorSaturation = b, this.colorBrightness = T, this.wireframe = U, this.backgroundColor = z, this.backgroundAlpha = le, this.yOffset = oe, this.sceneState = this._initScene($);
    let xe = c !== void 0 ? c : r0();
    const w = () => {
      const { renderer: pe, camera: J, scene: de, meshes: Ee } = this.sceneState;
      Math.floor(xe * 10) % 5 === 0 && i0(t), pe.setClearColor(this._backgroundColor, this._backgroundAlpha), Ee.forEach((ie) => {
        const Te = this._ref.width, fe = this._ref.height, Fe = [
          ...this._colors.map((ke) => {
            let Z = new Yt();
            return Z.setStyle(ke.color, ""), {
              is_active: ke.enabled,
              color: Z,
              influence: ke.influence
            };
          }),
          ...Array.from({ length: Pl - this._colors.length }).map(() => ({
            is_active: !1,
            color: new Yt(0)
          }))
        ];
        xe += Qv.getDelta() * this._speed, ie.material.uniforms.u_time.value = xe, ie.material.uniforms.u_resolution = { value: new Qt(Te, fe) }, ie.material.uniforms.u_color_pressure = { value: new Qt(this._horizontalPressure, this._verticalPressure) }, ie.material.uniforms.u_wave_frequency_x = { value: this._waveFrequencyX }, ie.material.uniforms.u_wave_frequency_y = { value: this._waveFrequencyY }, ie.material.uniforms.u_wave_amplitude = { value: this._waveAmplitude }, ie.material.uniforms.u_plane_width = { value: Gs }, ie.material.uniforms.u_plane_height = { value: Ws }, ie.material.uniforms.u_color_blending = { value: this._colorBlending }, ie.material.uniforms.u_colors = { value: Fe }, ie.material.uniforms.u_colors_count = { value: Pl }, ie.material.uniforms.u_shadows = { value: this._shadows }, ie.material.uniforms.u_highlights = { value: this._highlights }, ie.material.uniforms.u_saturation = { value: this._saturation }, ie.material.uniforms.u_brightness = { value: this._brightness }, ie.material.uniforms.u_grain_intensity = { value: this._grainIntensity }, ie.material.uniforms.u_grain_sparsity = { value: this._grainSparsity }, ie.material.uniforms.u_grain_speed = { value: this._grainSpeed }, ie.material.uniforms.u_grain_scale = { value: this._grainScale }, ie.material.uniforms.u_y_offset = { value: this._yOffset }, ie.material.wireframe = this._wireframe;
      }), pe.render(de, J), this.requestRef = requestAnimationFrame(w);
    }, I = () => {
      const { renderer: pe } = this.sceneState, J = pe.domElement, de = J.clientWidth, Ee = J.clientHeight;
      this.sceneState.renderer.setSize(de, Ee, !1), Ju(this.sceneState.camera, de, Ee);
    };
    this.sizeObserver = new ResizeObserver((pe) => {
      I();
    }), this.sizeObserver.observe(t), w();
  }
  destroy() {
    this && (cancelAnimationFrame(this.requestRef), this.sizeObserver.disconnect());
  }
  downloadAsPNG(e = "neat.png") {
    console.log("Downloading as PNG", this._ref);
    const t = this._ref.toDataURL("image/png");
    console.log("data", t), o0(t, e);
  }
  set speed(e) {
    this._speed = e / 20;
  }
  set horizontalPressure(e) {
    this._horizontalPressure = e / 4;
  }
  set verticalPressure(e) {
    this._verticalPressure = e / 4;
  }
  set waveFrequencyX(e) {
    this._waveFrequencyX = e * 0.04;
  }
  set waveFrequencyY(e) {
    this._waveFrequencyY = e * 0.04;
  }
  set waveAmplitude(e) {
    this._waveAmplitude = e * 0.75;
  }
  set colors(e) {
    this._colors = e;
  }
  set highlights(e) {
    this._highlights = e / 100;
  }
  set shadows(e) {
    this._shadows = e / 100;
  }
  set colorSaturation(e) {
    this._saturation = e / 10;
  }
  set colorBrightness(e) {
    this._brightness = e;
  }
  set colorBlending(e) {
    this._colorBlending = e / 10;
  }
  set grainScale(e) {
    this._grainScale = e == 0 ? 1 : e;
  }
  set grainIntensity(e) {
    this._grainIntensity = e;
  }
  set grainSparsity(e) {
    this._grainSparsity = e;
  }
  set grainSpeed(e) {
    this._grainSpeed = e;
  }
  set wireframe(e) {
    this._wireframe = e;
  }
  set resolution(e) {
    this.sceneState = this._initScene(e);
  }
  set backgroundColor(e) {
    this._backgroundColor = e;
  }
  set backgroundAlpha(e) {
    this._backgroundAlpha = e;
  }
  set yOffset(e) {
    this._yOffset = e;
  }
  _initScene(e) {
    const t = this._ref.width, n = this._ref.height, s = new Yv({
      alpha: !0,
      preserveDrawingBuffer: !0,
      canvas: this._ref
    });
    s.setClearColor(16711680, 0.5), s.setSize(t, n, !1);
    const l = [], f = new Kv(), h = this._buildMaterial(t, n), p = new Do(Gs, Ws, 240 * e, 240 * e), g = new Gi(p, h);
    g.rotation.x = -Math.PI / 3.5, g.position.z = -1, l.push(g), f.add(g);
    const v = new wc(0, 0, 0, 0, 0, 0);
    return v.position.z = 5, Ju(v, t, n), {
      renderer: s,
      camera: v,
      scene: f,
      meshes: l,
      resolution: e
    };
  }
  _buildMaterial(e, t) {
    const n = [
      ...this._colors.map((f) => ({
        is_active: f.enabled,
        color: new Yt(f.color),
        influence: f.influence
      })),
      ...Array.from({ length: Pl - this._colors.length }).map(() => ({
        is_active: !1,
        color: new Yt(0)
      }))
    ], s = {
      u_time: { value: 0 },
      u_color_pressure: { value: new Qt(this._horizontalPressure, this._verticalPressure) },
      u_wave_frequency_x: { value: this._waveFrequencyX },
      u_wave_frequency_y: { value: this._waveFrequencyY },
      u_wave_amplitude: { value: this._waveAmplitude },
      u_resolution: { value: new Qt(e, t) },
      u_colors: { value: n },
      u_colors_count: { value: this._colors.length },
      u_plane_width: { value: Gs },
      u_plane_height: { value: Ws },
      u_shadows: { value: this._shadows },
      u_highlights: { value: this._highlights },
      u_grain_intensity: { value: this._grainIntensity },
      u_grain_sparsity: { value: this._grainSparsity },
      u_grain_scale: { value: this._grainScale },
      u_grain_speed: { value: this._grainSpeed }
    }, l = new fr({
      uniforms: s,
      vertexShader: Qu() + ef() + tf() + t0(),
      fragmentShader: Qu() + tf() + ef() + n0()
    });
    return l.wireframe = Jv, l;
  }
}
function Ju(i, e, t) {
  const n = e * t / 1e6 * Gs * Ws / 1.5, s = e / t, l = Math.sqrt(n * s), f = n / l, h = -Gs / 2, p = Math.min((h + l) / 1.5, Gs / 2), g = Ws / 4, v = Math.max((g - f) / 2, -Ws / 4), M = -100, b = 1e3;
  i instanceof wc ? (i.left = h, i.right = p, i.top = g, i.bottom = v, i.near = M, i.far = b, i.updateProjectionMatrix()) : i instanceof Si && (i.aspect = e / t, i.updateProjectionMatrix());
}
function t0() {
  return `

void main() {

    vUv = uv;

    v_displacement_amount = cnoise( vec3(
        u_wave_frequency_x * position.x + u_time,
        u_wave_frequency_y * position.y + u_time,
        u_time
    ));

    vec3 color;

    // float t = mod(u_base_color, 100.0);
    color = u_colors[0].color;

    // Apply y_offset to the noise coordinates
    vec2 noise_cord = vUv * u_color_pressure;
    // Apply the y-offset to shift the pattern vertically (1:1 pixel ratio)
    // Scale the offset to match the UV coordinate space
    float scaledOffset = u_y_offset / u_resolution.y;
    noise_cord.y -= scaledOffset;

    const float minNoise = .0;
    const float maxNoise = .9;

    for (int i = 1; i < u_colors_count; i++) {

        if(u_colors[i].is_active == 1.0){
            float noiseFlow = (1. + float(i)) / 30.;
            float noiseSpeed = (1. + float(i)) * 0.11;
            float noiseSeed = 13. + float(i) * 7.;

            int reverseIndex = u_colors_count - i;

            float noise = snoise(
                vec3(
                    noise_cord.x * u_color_pressure.x + u_time * noiseFlow * 2.,
                    noise_cord.y * u_color_pressure.y,
                    u_time * noiseSpeed
                ) + noiseSeed
            ) - (.1 * float(i)) + (.5 * u_color_blending);

            noise = clamp(minNoise, maxNoise + float(i) * 0.02, noise);
            vec3 nextColor = u_colors[i].color;
            color = mix(color, nextColor, smoothstep(0.0, u_color_blending, noise));
        }
    }

    v_color = color;

    vec3 newPosition = position + normal * v_displacement_amount * u_wave_amplitude;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);

    v_new_position = gl_Position;
}
`;
}
function n0() {
  return `
float random(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453);
}

float fbm(vec3 x) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 4; i++) {
        value += amplitude * snoise(x * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
    }
    return value;
}

void main() {
    vec3 color = v_color;
    color += pow(v_displacement_amount, 1.0) * u_highlights;
    color -= pow(1.0 - v_displacement_amount, 2.0) * u_shadows;
    color = saturation(color, 1.0 + u_saturation);
    color = color * u_brightness;

    // Generate grain using fbm
    vec2 noiseCoords = gl_FragCoord.xy / u_grain_scale;
    float grain = (u_grain_speed != 0.0) ? fbm(vec3(noiseCoords, u_time * u_grain_speed)) : fbm(vec3(noiseCoords, 0.0));

    // Center the grain around zero
    grain = grain * 0.5 + 0.5;
    grain -= 0.5;

    // Add sparsity control
    grain = (grain > u_grain_sparsity) ? grain : 0.0;

    // Apply grain intensity
    grain *= u_grain_intensity;

    // Add grain to color
    color += vec3(grain);

    gl_FragColor = vec4(color, 1.0);
}
    `;
}
const Qu = () => `
precision highp float;

struct Color {
    float is_active;
    vec3 color;
    float value;
};

uniform float u_grain_intensity; 
uniform float u_grain_sparsity; 
uniform float u_grain_scale; 
uniform float u_grain_speed; 
uniform float u_time;

uniform float u_wave_amplitude;
uniform float u_wave_frequency_x;
uniform float u_wave_frequency_y;

uniform vec2 u_color_pressure;

uniform float u_plane_width;
uniform float u_plane_height;

uniform float u_shadows;
uniform float u_highlights;
uniform float u_saturation;
uniform float u_brightness;

uniform float u_color_blending;

uniform int u_colors_count;
uniform Color u_colors[5];
uniform vec2 u_resolution;

uniform float u_y_offset;

varying vec2 vUv;
varying vec4 v_new_position;
varying vec3 v_color;
varying float v_displacement_amount;

    `, ef = () => `

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float snoise(vec3 v)
{
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}

// Classic Perlin noise
float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

// YUV to RGB matrix
mat3 yuv2rgb = mat3(1.0, 0.0, 1.13983,
                    1.0, -0.39465, -0.58060,
                    1.0, 2.03211, 0.0);

// RGB to YUV matrix
mat3 rgb2yuv = mat3(0.2126, 0.7152, 0.0722,
                    -0.09991, -0.33609, 0.43600,
                    0.615, -0.5586, -0.05639);
                    
vec3 oklab2rgb(vec3 linear)
{
    const mat3 im1 = mat3(0.4121656120, 0.2118591070, 0.0883097947,
                          0.5362752080, 0.6807189584, 0.2818474174,
                          0.0514575653, 0.1074065790, 0.6302613616);
                       
    const mat3 im2 = mat3(+0.2104542553, +1.9779984951, +0.0259040371,
                          +0.7936177850, -2.4285922050, +0.7827717662,
                          -0.0040720468, +0.4505937099, -0.8086757660);
                       
    vec3 lms = im1 * linear;
            
    return im2 * (sign(lms) * pow(abs(lms), vec3(1.0/3.0)));
}

vec3 rgb2oklab(vec3 oklab)
{
    const mat3 m1 = mat3(+1.000000000, +1.000000000, +1.000000000,
                         +0.396337777, -0.105561346, -0.089484178,
                         +0.215803757, -0.063854173, -1.291485548);
                       
    const mat3 m2 = mat3(+4.076724529, -1.268143773, -0.004111989,
                         -3.307216883, +2.609332323, -0.703476310,
                         +0.230759054, -0.341134429, +1.706862569);
    vec3 lms = m1 * oklab;
    
    return m2 * (lms * lms * lms);
}

    `, tf = () => `

vec3 saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}

float saturation(vec3 rgb)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(rgb.bg, K.wz), vec4(rgb.gb, K.xy), step(rgb.b, rgb.g));
    vec4 q = mix(vec4(p.xyw, rgb.r), vec4(rgb.r, p.yzx), step(p.x, rgb.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return abs(6.0 * d + e);
}

// get saturation of a color in values between 0 and 1
float getSaturation(vec3 color) {
    float max = max(color.r, max(color.g, color.b));
    float min = min(color.r, min(color.g, color.b));
    return (max - min) / max;
}
    
vec3 rgb2hsv(vec3 c)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
`, nf = (i) => {
  i.id = Of, i.href = "https://neat.firecms.co", i.target = "_blank", i.style.position = "absolute", i.style.display = "block", i.style.bottom = "0", i.style.right = "0", i.style.padding = "10px", i.style.color = "#dcdcdc", i.style.opacity = "0.8", i.style.fontFamily = "sans-serif", i.style.fontSize = "16px", i.style.fontWeight = "bold", i.style.textDecoration = "none", i.style.zIndex = "10000", i.innerHTML = "NEAT";
}, i0 = (i) => {
  const e = i.parentElement?.getElementsByTagName("a");
  if (e) {
    for (let n = 0; n < e.length; n++)
      if (e[n].id === Of) {
        nf(e[n]);
        return;
      }
  }
  const t = document.createElement("a");
  nf(t), i.parentElement?.appendChild(t);
};
function r0() {
  const i = /* @__PURE__ */ new Date(), e = i.getMinutes(), t = i.getSeconds();
  return e * 60 + t;
}
function s0(i = 6) {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let t = "";
  for (let n = 0; n < i; n++) {
    const s = Math.floor(Math.random() * e.length);
    t += e.charAt(s);
  }
  return t;
}
function o0(i, e) {
  const t = document.createElement("a");
  t.download = e, t.href = i, document.body.appendChild(t), t.click(), document.body.removeChild(t);
}
const a0 = {
  colors: [
    {
      color: "#FF5772",
      enabled: !0
    },
    {
      color: "#4CB4BB",
      enabled: !0
    },
    {
      color: "#FFC600",
      enabled: !0
    },
    {
      color: "#8B6AE6",
      enabled: !0
    },
    {
      color: "#2E0EC7",
      enabled: !0
    }
  ],
  speed: 4,
  horizontalPressure: 3,
  verticalPressure: 4,
  waveFrequencyX: 3,
  waveFrequencyY: 3,
  waveAmplitude: 8,
  shadows: 1,
  highlights: 5,
  colorBrightness: 1,
  colorSaturation: 7,
  wireframe: !1,
  colorBlending: 8,
  backgroundColor: "#003FFF",
  backgroundAlpha: 1,
  grainScale: 3,
  grainIntensity: 0.3,
  grainSpeed: 1,
  resolution: 1
};
function c0() {
  const i = document.getElementById("gradient");
  if (i instanceof HTMLCanvasElement) {
    const e = new e0({
      ref: i,
      ...a0
    });
    window.neat = e;
  }
}
function u0() {
  console.log("Vite library successfully imported!");
}
export {
  l0 as $,
  c0 as initNeatGradient,
  u0 as testViteLibrary
};
