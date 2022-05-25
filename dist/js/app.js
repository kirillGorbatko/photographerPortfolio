(() => {
  "use strict";
  let t = (t, e = 500, i = 0) => {
      t.classList.contains("_slide") ||
        (t.classList.add("_slide"),
        (t.style.transitionProperty = "height, margin, padding"),
        (t.style.transitionDuration = e + "ms"),
        (t.style.height = `${t.offsetHeight}px`),
        t.offsetHeight,
        (t.style.overflow = "hidden"),
        (t.style.height = i ? `${i}px` : "0px"),
        (t.style.paddingTop = 0),
        (t.style.paddingBottom = 0),
        (t.style.marginTop = 0),
        (t.style.marginBottom = 0),
        window.setTimeout(() => {
          (t.hidden = !i),
            !i && t.style.removeProperty("height"),
            t.style.removeProperty("padding-top"),
            t.style.removeProperty("padding-bottom"),
            t.style.removeProperty("margin-top"),
            t.style.removeProperty("margin-bottom"),
            !i && t.style.removeProperty("overflow"),
            t.style.removeProperty("transition-duration"),
            t.style.removeProperty("transition-property"),
            t.classList.remove("_slide");
        }, e));
    },
    e = (t, e = 500, i = 0) => {
      if (!t.classList.contains("_slide")) {
        t.classList.add("_slide"),
          (t.hidden = !t.hidden && null),
          i && t.style.removeProperty("height");
        let s = t.offsetHeight;
        (t.style.overflow = "hidden"),
          (t.style.height = i ? `${i}px` : "0px"),
          (t.style.paddingTop = 0),
          (t.style.paddingBottom = 0),
          (t.style.marginTop = 0),
          (t.style.marginBottom = 0),
          t.offsetHeight,
          (t.style.transitionProperty = "height, margin, padding"),
          (t.style.transitionDuration = e + "ms"),
          (t.style.height = s + "px"),
          t.style.removeProperty("padding-top"),
          t.style.removeProperty("padding-bottom"),
          t.style.removeProperty("margin-top"),
          t.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            t.style.removeProperty("height"),
              t.style.removeProperty("overflow"),
              t.style.removeProperty("transition-duration"),
              t.style.removeProperty("transition-property"),
              t.classList.remove("_slide");
          }, e);
      }
    },
    i = !0,
    s = (t = 500) => {
      let e = document.querySelector("body");
      if (i) {
        let s = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let t = 0; t < s.length; t++) {
            s[t].style.paddingRight = "0px";
          }
          (e.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, t),
          (i = !1),
          setTimeout(function () {
            i = !0;
          }, t);
      }
    },
    n = (t = 500) => {
      let e = document.querySelector("body");
      if (i) {
        let s = document.querySelectorAll("[data-lp]");
        for (let t = 0; t < s.length; t++) {
          s[t].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (e.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (i = !1),
          setTimeout(function () {
            i = !0;
          }, t);
      }
    };
  function o(t, e) {
    const i = Array.from(t).filter(function (t, i, s) {
      if (t.dataset[e]) return t.dataset[e].split(",")[0];
    });
    if (i.length) {
      const t = [];
      i.forEach((i) => {
        const s = {},
          n = i.dataset[e].split(",");
        (s.value = n[0]),
          (s.type = n[1] ? n[1].trim() : "max"),
          (s.item = i),
          t.push(s);
      });
      let s = t.map(function (t) {
        return (
          "(" + t.type + "-width: " + t.value + "px)," + t.value + "," + t.type
        );
      });
      s = (function (t) {
        return t.filter(function (t, e, i) {
          return i.indexOf(t) === e;
        });
      })(s);
      const n = [];
      if (s.length)
        return (
          s.forEach((e) => {
            const i = e.split(","),
              s = i[1],
              o = i[2],
              a = window.matchMedia(i[0]),
              r = t.filter(function (t) {
                if (t.value === s && t.type === o) return !0;
              });
            n.push({ itemsArray: r, matchMedia: a });
          }),
          n
        );
    }
  }
  function a(t) {
    return (
      null !== t &&
      "object" == typeof t &&
      "constructor" in t &&
      t.constructor === Object
    );
  }
  function r(t = {}, e = {}) {
    Object.keys(e).forEach((i) => {
      void 0 === t[i]
        ? (t[i] = e[i])
        : a(e[i]) && a(t[i]) && Object.keys(e[i]).length > 0 && r(t[i], e[i]);
    });
  }
  const l = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function c() {
    const t = "undefined" != typeof document ? document : {};
    return r(t, l), t;
  }
  const d = {
    document: l,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (t) =>
      "undefined" == typeof setTimeout ? (t(), null) : setTimeout(t, 0),
    cancelAnimationFrame(t) {
      "undefined" != typeof setTimeout && clearTimeout(t);
    },
  };
  function h() {
    const t = "undefined" != typeof window ? window : {};
    return r(t, d), t;
  }
  class p extends Array {
    constructor(t) {
      "number" == typeof t
        ? super(t)
        : (super(...(t || [])),
          (function (t) {
            const e = t.__proto__;
            Object.defineProperty(t, "__proto__", {
              get: () => e,
              set(t) {
                e.__proto__ = t;
              },
            });
          })(this));
    }
  }
  function u(t = []) {
    const e = [];
    return (
      t.forEach((t) => {
        Array.isArray(t) ? e.push(...u(t)) : e.push(t);
      }),
      e
    );
  }
  function f(t, e) {
    return Array.prototype.filter.call(t, e);
  }
  function m(t, e) {
    const i = h(),
      s = c();
    let n = [];
    if (!e && t instanceof p) return t;
    if (!t) return new p(n);
    if ("string" == typeof t) {
      const i = t.trim();
      if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
        let t = "div";
        0 === i.indexOf("<li") && (t = "ul"),
          0 === i.indexOf("<tr") && (t = "tbody"),
          (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (t = "tr"),
          0 === i.indexOf("<tbody") && (t = "table"),
          0 === i.indexOf("<option") && (t = "select");
        const e = s.createElement(t);
        e.innerHTML = i;
        for (let t = 0; t < e.childNodes.length; t += 1)
          n.push(e.childNodes[t]);
      } else
        n = (function (t, e) {
          if ("string" != typeof t) return [t];
          const i = [],
            s = e.querySelectorAll(t);
          for (let t = 0; t < s.length; t += 1) i.push(s[t]);
          return i;
        })(t.trim(), e || s);
    } else if (t.nodeType || t === i || t === s) n.push(t);
    else if (Array.isArray(t)) {
      if (t instanceof p) return t;
      n = t;
    }
    return new p(
      (function (t) {
        const e = [];
        for (let i = 0; i < t.length; i += 1)
          -1 === e.indexOf(t[i]) && e.push(t[i]);
        return e;
      })(n)
    );
  }
  m.fn = p.prototype;
  const g = "resize scroll".split(" ");
  function v(t) {
    return function (...e) {
      if (void 0 === e[0]) {
        for (let e = 0; e < this.length; e += 1)
          g.indexOf(t) < 0 &&
            (t in this[e] ? this[e][t]() : m(this[e]).trigger(t));
        return this;
      }
      return this.on(t, ...e);
    };
  }
  v("click"),
    v("blur"),
    v("focus"),
    v("focusin"),
    v("focusout"),
    v("keyup"),
    v("keydown"),
    v("keypress"),
    v("submit"),
    v("change"),
    v("mousedown"),
    v("mousemove"),
    v("mouseup"),
    v("mouseenter"),
    v("mouseleave"),
    v("mouseout"),
    v("mouseover"),
    v("touchstart"),
    v("touchend"),
    v("touchmove"),
    v("resize"),
    v("scroll");
  const b = {
    addClass: function (...t) {
      const e = u(t.map((t) => t.split(" ")));
      return (
        this.forEach((t) => {
          t.classList.add(...e);
        }),
        this
      );
    },
    removeClass: function (...t) {
      const e = u(t.map((t) => t.split(" ")));
      return (
        this.forEach((t) => {
          t.classList.remove(...e);
        }),
        this
      );
    },
    hasClass: function (...t) {
      const e = u(t.map((t) => t.split(" ")));
      return (
        f(this, (t) => e.filter((e) => t.classList.contains(e)).length > 0)
          .length > 0
      );
    },
    toggleClass: function (...t) {
      const e = u(t.map((t) => t.split(" ")));
      this.forEach((t) => {
        e.forEach((e) => {
          t.classList.toggle(e);
        });
      });
    },
    attr: function (t, e) {
      if (1 === arguments.length && "string" == typeof t)
        return this[0] ? this[0].getAttribute(t) : void 0;
      for (let i = 0; i < this.length; i += 1)
        if (2 === arguments.length) this[i].setAttribute(t, e);
        else
          for (const e in t) (this[i][e] = t[e]), this[i].setAttribute(e, t[e]);
      return this;
    },
    removeAttr: function (t) {
      for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
      return this;
    },
    transform: function (t) {
      for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
      return this;
    },
    transition: function (t) {
      for (let e = 0; e < this.length; e += 1)
        this[e].style.transitionDuration = "string" != typeof t ? `${t}ms` : t;
      return this;
    },
    on: function (...t) {
      let [e, i, s, n] = t;
      function o(t) {
        const e = t.target;
        if (!e) return;
        const n = t.target.dom7EventData || [];
        if ((n.indexOf(t) < 0 && n.unshift(t), m(e).is(i))) s.apply(e, n);
        else {
          const t = m(e).parents();
          for (let e = 0; e < t.length; e += 1)
            m(t[e]).is(i) && s.apply(t[e], n);
        }
      }
      function a(t) {
        const e = (t && t.target && t.target.dom7EventData) || [];
        e.indexOf(t) < 0 && e.unshift(t), s.apply(this, e);
      }
      "function" == typeof t[1] && (([e, s, n] = t), (i = void 0)),
        n || (n = !1);
      const r = e.split(" ");
      let l;
      for (let t = 0; t < this.length; t += 1) {
        const e = this[t];
        if (i)
          for (l = 0; l < r.length; l += 1) {
            const t = r[l];
            e.dom7LiveListeners || (e.dom7LiveListeners = {}),
              e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []),
              e.dom7LiveListeners[t].push({ listener: s, proxyListener: o }),
              e.addEventListener(t, o, n);
          }
        else
          for (l = 0; l < r.length; l += 1) {
            const t = r[l];
            e.dom7Listeners || (e.dom7Listeners = {}),
              e.dom7Listeners[t] || (e.dom7Listeners[t] = []),
              e.dom7Listeners[t].push({ listener: s, proxyListener: a }),
              e.addEventListener(t, a, n);
          }
      }
      return this;
    },
    off: function (...t) {
      let [e, i, s, n] = t;
      "function" == typeof t[1] && (([e, s, n] = t), (i = void 0)),
        n || (n = !1);
      const o = e.split(" ");
      for (let t = 0; t < o.length; t += 1) {
        const e = o[t];
        for (let t = 0; t < this.length; t += 1) {
          const o = this[t];
          let a;
          if (
            (!i && o.dom7Listeners
              ? (a = o.dom7Listeners[e])
              : i && o.dom7LiveListeners && (a = o.dom7LiveListeners[e]),
            a && a.length)
          )
            for (let t = a.length - 1; t >= 0; t -= 1) {
              const i = a[t];
              (s && i.listener === s) ||
              (s &&
                i.listener &&
                i.listener.dom7proxy &&
                i.listener.dom7proxy === s)
                ? (o.removeEventListener(e, i.proxyListener, n), a.splice(t, 1))
                : s ||
                  (o.removeEventListener(e, i.proxyListener, n),
                  a.splice(t, 1));
            }
        }
      }
      return this;
    },
    trigger: function (...t) {
      const e = h(),
        i = t[0].split(" "),
        s = t[1];
      for (let n = 0; n < i.length; n += 1) {
        const o = i[n];
        for (let i = 0; i < this.length; i += 1) {
          const n = this[i];
          if (e.CustomEvent) {
            const i = new e.CustomEvent(o, {
              detail: s,
              bubbles: !0,
              cancelable: !0,
            });
            (n.dom7EventData = t.filter((t, e) => e > 0)),
              n.dispatchEvent(i),
              (n.dom7EventData = []),
              delete n.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function (t) {
      const e = this;
      return (
        t &&
          e.on("transitionend", function i(s) {
            s.target === this && (t.call(this, s), e.off("transitionend", i));
          }),
        this
      );
    },
    outerWidth: function (t) {
      if (this.length > 0) {
        if (t) {
          const t = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(t.getPropertyValue("margin-right")) +
            parseFloat(t.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (t) {
      if (this.length > 0) {
        if (t) {
          const t = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(t.getPropertyValue("margin-top")) +
            parseFloat(t.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function () {
      const t = h();
      return this[0] ? t.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        const t = h(),
          e = c(),
          i = this[0],
          s = i.getBoundingClientRect(),
          n = e.body,
          o = i.clientTop || n.clientTop || 0,
          a = i.clientLeft || n.clientLeft || 0,
          r = i === t ? t.scrollY : i.scrollTop,
          l = i === t ? t.scrollX : i.scrollLeft;
        return { top: s.top + r - o, left: s.left + l - a };
      }
      return null;
    },
    css: function (t, e) {
      const i = h();
      let s;
      if (1 === arguments.length) {
        if ("string" != typeof t) {
          for (s = 0; s < this.length; s += 1)
            for (const e in t) this[s].style[e] = t[e];
          return this;
        }
        if (this[0])
          return i.getComputedStyle(this[0], null).getPropertyValue(t);
      }
      if (2 === arguments.length && "string" == typeof t) {
        for (s = 0; s < this.length; s += 1) this[s].style[t] = e;
        return this;
      }
      return this;
    },
    each: function (t) {
      return t
        ? (this.forEach((e, i) => {
            t.apply(e, [e, i]);
          }),
          this)
        : this;
    },
    html: function (t) {
      if (void 0 === t) return this[0] ? this[0].innerHTML : null;
      for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
      return this;
    },
    text: function (t) {
      if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
      for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
      return this;
    },
    is: function (t) {
      const e = h(),
        i = c(),
        s = this[0];
      let n, o;
      if (!s || void 0 === t) return !1;
      if ("string" == typeof t) {
        if (s.matches) return s.matches(t);
        if (s.webkitMatchesSelector) return s.webkitMatchesSelector(t);
        if (s.msMatchesSelector) return s.msMatchesSelector(t);
        for (n = m(t), o = 0; o < n.length; o += 1) if (n[o] === s) return !0;
        return !1;
      }
      if (t === i) return s === i;
      if (t === e) return s === e;
      if (t.nodeType || t instanceof p) {
        for (n = t.nodeType ? [t] : t, o = 0; o < n.length; o += 1)
          if (n[o] === s) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      let t,
        e = this[0];
      if (e) {
        for (t = 0; null !== (e = e.previousSibling); )
          1 === e.nodeType && (t += 1);
        return t;
      }
    },
    eq: function (t) {
      if (void 0 === t) return this;
      const e = this.length;
      if (t > e - 1) return m([]);
      if (t < 0) {
        const i = e + t;
        return m(i < 0 ? [] : [this[i]]);
      }
      return m([this[t]]);
    },
    append: function (...t) {
      let e;
      const i = c();
      for (let s = 0; s < t.length; s += 1) {
        e = t[s];
        for (let t = 0; t < this.length; t += 1)
          if ("string" == typeof e) {
            const s = i.createElement("div");
            for (s.innerHTML = e; s.firstChild; )
              this[t].appendChild(s.firstChild);
          } else if (e instanceof p)
            for (let i = 0; i < e.length; i += 1) this[t].appendChild(e[i]);
          else this[t].appendChild(e);
      }
      return this;
    },
    prepend: function (t) {
      const e = c();
      let i, s;
      for (i = 0; i < this.length; i += 1)
        if ("string" == typeof t) {
          const n = e.createElement("div");
          for (n.innerHTML = t, s = n.childNodes.length - 1; s >= 0; s -= 1)
            this[i].insertBefore(n.childNodes[s], this[i].childNodes[0]);
        } else if (t instanceof p)
          for (s = 0; s < t.length; s += 1)
            this[i].insertBefore(t[s], this[i].childNodes[0]);
        else this[i].insertBefore(t, this[i].childNodes[0]);
      return this;
    },
    next: function (t) {
      return this.length > 0
        ? t
          ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(t)
            ? m([this[0].nextElementSibling])
            : m([])
          : this[0].nextElementSibling
          ? m([this[0].nextElementSibling])
          : m([])
        : m([]);
    },
    nextAll: function (t) {
      const e = [];
      let i = this[0];
      if (!i) return m([]);
      for (; i.nextElementSibling; ) {
        const s = i.nextElementSibling;
        t ? m(s).is(t) && e.push(s) : e.push(s), (i = s);
      }
      return m(e);
    },
    prev: function (t) {
      if (this.length > 0) {
        const e = this[0];
        return t
          ? e.previousElementSibling && m(e.previousElementSibling).is(t)
            ? m([e.previousElementSibling])
            : m([])
          : e.previousElementSibling
          ? m([e.previousElementSibling])
          : m([]);
      }
      return m([]);
    },
    prevAll: function (t) {
      const e = [];
      let i = this[0];
      if (!i) return m([]);
      for (; i.previousElementSibling; ) {
        const s = i.previousElementSibling;
        t ? m(s).is(t) && e.push(s) : e.push(s), (i = s);
      }
      return m(e);
    },
    parent: function (t) {
      const e = [];
      for (let i = 0; i < this.length; i += 1)
        null !== this[i].parentNode &&
          (t
            ? m(this[i].parentNode).is(t) && e.push(this[i].parentNode)
            : e.push(this[i].parentNode));
      return m(e);
    },
    parents: function (t) {
      const e = [];
      for (let i = 0; i < this.length; i += 1) {
        let s = this[i].parentNode;
        for (; s; ) t ? m(s).is(t) && e.push(s) : e.push(s), (s = s.parentNode);
      }
      return m(e);
    },
    closest: function (t) {
      let e = this;
      return void 0 === t ? m([]) : (e.is(t) || (e = e.parents(t).eq(0)), e);
    },
    find: function (t) {
      const e = [];
      for (let i = 0; i < this.length; i += 1) {
        const s = this[i].querySelectorAll(t);
        for (let t = 0; t < s.length; t += 1) e.push(s[t]);
      }
      return m(e);
    },
    children: function (t) {
      const e = [];
      for (let i = 0; i < this.length; i += 1) {
        const s = this[i].children;
        for (let i = 0; i < s.length; i += 1)
          (t && !m(s[i]).is(t)) || e.push(s[i]);
      }
      return m(e);
    },
    filter: function (t) {
      return m(f(this, t));
    },
    remove: function () {
      for (let t = 0; t < this.length; t += 1)
        this[t].parentNode && this[t].parentNode.removeChild(this[t]);
      return this;
    },
  };
  Object.keys(b).forEach((t) => {
    Object.defineProperty(m.fn, t, { value: b[t], writable: !0 });
  });
  const y = m;
  function x(t, e) {
    return void 0 === e && (e = 0), setTimeout(t, e);
  }
  function w() {
    return Date.now();
  }
  function C(t, e) {
    void 0 === e && (e = "x");
    const i = h();
    let s, n, o;
    const a = (function (t) {
      const e = h();
      let i;
      return (
        e.getComputedStyle && (i = e.getComputedStyle(t, null)),
        !i && t.currentStyle && (i = t.currentStyle),
        i || (i = t.style),
        i
      );
    })(t);
    return (
      i.WebKitCSSMatrix
        ? ((n = a.transform || a.webkitTransform),
          n.split(",").length > 6 &&
            (n = n
              .split(", ")
              .map((t) => t.replace(",", "."))
              .join(", ")),
          (o = new i.WebKitCSSMatrix("none" === n ? "" : n)))
        : ((o =
            a.MozTransform ||
            a.OTransform ||
            a.MsTransform ||
            a.msTransform ||
            a.transform ||
            a
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (s = o.toString().split(","))),
      "x" === e &&
        (n = i.WebKitCSSMatrix
          ? o.m41
          : 16 === s.length
          ? parseFloat(s[12])
          : parseFloat(s[4])),
      "y" === e &&
        (n = i.WebKitCSSMatrix
          ? o.m42
          : 16 === s.length
          ? parseFloat(s[13])
          : parseFloat(s[5])),
      n || 0
    );
  }
  function S(t) {
    return (
      "object" == typeof t &&
      null !== t &&
      t.constructor &&
      "Object" === Object.prototype.toString.call(t).slice(8, -1)
    );
  }
  function E(t) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement
      ? t instanceof HTMLElement
      : t && (1 === t.nodeType || 11 === t.nodeType);
  }
  function T() {
    const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      e = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < arguments.length; i += 1) {
      const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
      if (null != s && !E(s)) {
        const i = Object.keys(Object(s)).filter((t) => e.indexOf(t) < 0);
        for (let e = 0, n = i.length; e < n; e += 1) {
          const n = i[e],
            o = Object.getOwnPropertyDescriptor(s, n);
          void 0 !== o &&
            o.enumerable &&
            (S(t[n]) && S(s[n])
              ? s[n].__swiper__
                ? (t[n] = s[n])
                : T(t[n], s[n])
              : !S(t[n]) && S(s[n])
              ? ((t[n] = {}), s[n].__swiper__ ? (t[n] = s[n]) : T(t[n], s[n]))
              : (t[n] = s[n]));
        }
      }
    }
    return t;
  }
  function $(t, e, i) {
    t.style.setProperty(e, i);
  }
  function P(t) {
    let { swiper: e, targetPosition: i, side: s } = t;
    const n = h(),
      o = -e.translate;
    let a,
      r = null;
    const l = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      n.cancelAnimationFrame(e.cssModeFrameID);
    const c = i > o ? "next" : "prev",
      d = (t, e) => ("next" === c && t >= e) || ("prev" === c && t <= e),
      p = () => {
        (a = new Date().getTime()), null === r && (r = a);
        const t = Math.max(Math.min((a - r) / l, 1), 0),
          c = 0.5 - Math.cos(t * Math.PI) / 2;
        let h = o + c * (i - o);
        if ((d(h, i) && (h = i), e.wrapperEl.scrollTo({ [s]: h }), d(h, i)))
          return (
            (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [s]: h });
            }),
            void n.cancelAnimationFrame(e.cssModeFrameID)
          );
        e.cssModeFrameID = n.requestAnimationFrame(p);
      };
    p();
  }
  let L, k, M;
  function A() {
    return (
      L ||
        (L = (function () {
          const t = h(),
            e = c();
          return {
            smoothScroll:
              e.documentElement && "scrollBehavior" in e.documentElement.style,
            touch: !!(
              "ontouchstart" in t ||
              (t.DocumentTouch && e instanceof t.DocumentTouch)
            ),
            passiveListener: (function () {
              let e = !1;
              try {
                const i = Object.defineProperty({}, "passive", {
                  get() {
                    e = !0;
                  },
                });
                t.addEventListener("testPassiveListener", null, i);
              } catch (t) {}
              return e;
            })(),
            gestures: "ongesturestart" in t,
          };
        })()),
      L
    );
  }
  function _(t) {
    return (
      void 0 === t && (t = {}),
      k ||
        (k = (function (t) {
          let { userAgent: e } = void 0 === t ? {} : t;
          const i = A(),
            s = h(),
            n = s.navigator.platform,
            o = e || s.navigator.userAgent,
            a = { ios: !1, android: !1 },
            r = s.screen.width,
            l = s.screen.height,
            c = o.match(/(Android);?[\s\/]+([\d.]+)?/);
          let d = o.match(/(iPad).*OS\s([\d_]+)/);
          const p = o.match(/(iPod)(.*OS\s([\d_]+))?/),
            u = !d && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            f = "Win32" === n;
          let m = "MacIntel" === n;
          return (
            !d &&
              m &&
              i.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${r}x${l}`) >= 0 &&
              ((d = o.match(/(Version)\/([\d.]+)/)),
              d || (d = [0, 1, "13_0_0"]),
              (m = !1)),
            c && !f && ((a.os = "android"), (a.android = !0)),
            (d || u || p) && ((a.os = "ios"), (a.ios = !0)),
            a
          );
        })(t)),
      k
    );
  }
  function O() {
    return (
      M ||
        (M = (function () {
          const t = h();
          return {
            isSafari: (function () {
              const e = t.navigator.userAgent.toLowerCase();
              return (
                e.indexOf("safari") >= 0 &&
                e.indexOf("chrome") < 0 &&
                e.indexOf("android") < 0
              );
            })(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              t.navigator.userAgent
            ),
          };
        })()),
      M
    );
  }
  const z = {
    on(t, e, i) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof e) return s;
      const n = i ? "unshift" : "push";
      return (
        t.split(" ").forEach((t) => {
          s.eventsListeners[t] || (s.eventsListeners[t] = []),
            s.eventsListeners[t][n](e);
        }),
        s
      );
    },
    once(t, e, i) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof e) return s;
      function n() {
        s.off(t, n), n.__emitterProxy && delete n.__emitterProxy;
        for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
          o[a] = arguments[a];
        e.apply(s, o);
      }
      return (n.__emitterProxy = e), s.on(t, n, i);
    },
    onAny(t, e) {
      const i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof t) return i;
      const s = e ? "unshift" : "push";
      return (
        i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[s](t), i
      );
    },
    offAny(t) {
      const e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsAnyListeners) return e;
      const i = e.eventsAnyListeners.indexOf(t);
      return i >= 0 && e.eventsAnyListeners.splice(i, 1), e;
    },
    off(t, e) {
      const i = this;
      return !i.eventsListeners || i.destroyed
        ? i
        : i.eventsListeners
        ? (t.split(" ").forEach((t) => {
            void 0 === e
              ? (i.eventsListeners[t] = [])
              : i.eventsListeners[t] &&
                i.eventsListeners[t].forEach((s, n) => {
                  (s === e || (s.__emitterProxy && s.__emitterProxy === e)) &&
                    i.eventsListeners[t].splice(n, 1);
                });
          }),
          i)
        : i;
    },
    emit() {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsListeners) return t;
      let e, i, s;
      for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
        o[a] = arguments[a];
      "string" == typeof o[0] || Array.isArray(o[0])
        ? ((e = o[0]), (i = o.slice(1, o.length)), (s = t))
        : ((e = o[0].events), (i = o[0].data), (s = o[0].context || t)),
        i.unshift(s);
      return (
        (Array.isArray(e) ? e : e.split(" ")).forEach((e) => {
          t.eventsAnyListeners &&
            t.eventsAnyListeners.length &&
            t.eventsAnyListeners.forEach((t) => {
              t.apply(s, [e, ...i]);
            }),
            t.eventsListeners &&
              t.eventsListeners[e] &&
              t.eventsListeners[e].forEach((t) => {
                t.apply(s, i);
              });
        }),
        t
      );
    },
  };
  const I = {
    updateSize: function () {
      const t = this;
      let e, i;
      const s = t.$el;
      (e =
        void 0 !== t.params.width && null !== t.params.width
          ? t.params.width
          : s[0].clientWidth),
        (i =
          void 0 !== t.params.height && null !== t.params.height
            ? t.params.height
            : s[0].clientHeight),
        (0 === e && t.isHorizontal()) ||
          (0 === i && t.isVertical()) ||
          ((e =
            e -
            parseInt(s.css("padding-left") || 0, 10) -
            parseInt(s.css("padding-right") || 0, 10)),
          (i =
            i -
            parseInt(s.css("padding-top") || 0, 10) -
            parseInt(s.css("padding-bottom") || 0, 10)),
          Number.isNaN(e) && (e = 0),
          Number.isNaN(i) && (i = 0),
          Object.assign(t, {
            width: e,
            height: i,
            size: t.isHorizontal() ? e : i,
          }));
    },
    updateSlides: function () {
      const t = this;
      function e(e) {
        return t.isHorizontal()
          ? e
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[e];
      }
      function i(t, i) {
        return parseFloat(t.getPropertyValue(e(i)) || 0);
      }
      const s = t.params,
        { $wrapperEl: n, size: o, rtlTranslate: a, wrongRTL: r } = t,
        l = t.virtual && s.virtual.enabled,
        c = l ? t.virtual.slides.length : t.slides.length,
        d = n.children(`.${t.params.slideClass}`),
        h = l ? t.virtual.slides.length : d.length;
      let p = [];
      const u = [],
        f = [];
      let m = s.slidesOffsetBefore;
      "function" == typeof m && (m = s.slidesOffsetBefore.call(t));
      let g = s.slidesOffsetAfter;
      "function" == typeof g && (g = s.slidesOffsetAfter.call(t));
      const v = t.snapGrid.length,
        b = t.slidesGrid.length;
      let y = s.spaceBetween,
        x = -m,
        w = 0,
        C = 0;
      if (void 0 === o) return;
      "string" == typeof y &&
        y.indexOf("%") >= 0 &&
        (y = (parseFloat(y.replace("%", "")) / 100) * o),
        (t.virtualSize = -y),
        a
          ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
          : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
        s.centeredSlides &&
          s.cssMode &&
          ($(t.wrapperEl, "--swiper-centered-offset-before", ""),
          $(t.wrapperEl, "--swiper-centered-offset-after", ""));
      const S = s.grid && s.grid.rows > 1 && t.grid;
      let E;
      S && t.grid.initSlides(h);
      const T =
        "auto" === s.slidesPerView &&
        s.breakpoints &&
        Object.keys(s.breakpoints).filter(
          (t) => void 0 !== s.breakpoints[t].slidesPerView
        ).length > 0;
      for (let n = 0; n < h; n += 1) {
        E = 0;
        const a = d.eq(n);
        if (
          (S && t.grid.updateSlide(n, a, h, e), "none" !== a.css("display"))
        ) {
          if ("auto" === s.slidesPerView) {
            T && (d[n].style[e("width")] = "");
            const o = getComputedStyle(a[0]),
              r = a[0].style.transform,
              l = a[0].style.webkitTransform;
            if (
              (r && (a[0].style.transform = "none"),
              l && (a[0].style.webkitTransform = "none"),
              s.roundLengths)
            )
              E = t.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
            else {
              const t = i(o, "width"),
                e = i(o, "padding-left"),
                s = i(o, "padding-right"),
                n = i(o, "margin-left"),
                r = i(o, "margin-right"),
                l = o.getPropertyValue("box-sizing");
              if (l && "border-box" === l) E = t + n + r;
              else {
                const { clientWidth: i, offsetWidth: o } = a[0];
                E = t + e + s + n + r + (o - i);
              }
            }
            r && (a[0].style.transform = r),
              l && (a[0].style.webkitTransform = l),
              s.roundLengths && (E = Math.floor(E));
          } else
            (E = (o - (s.slidesPerView - 1) * y) / s.slidesPerView),
              s.roundLengths && (E = Math.floor(E)),
              d[n] && (d[n].style[e("width")] = `${E}px`);
          d[n] && (d[n].swiperSlideSize = E),
            f.push(E),
            s.centeredSlides
              ? ((x = x + E / 2 + w / 2 + y),
                0 === w && 0 !== n && (x = x - o / 2 - y),
                0 === n && (x = x - o / 2 - y),
                Math.abs(x) < 0.001 && (x = 0),
                s.roundLengths && (x = Math.floor(x)),
                C % s.slidesPerGroup == 0 && p.push(x),
                u.push(x))
              : (s.roundLengths && (x = Math.floor(x)),
                (C - Math.min(t.params.slidesPerGroupSkip, C)) %
                  t.params.slidesPerGroup ==
                  0 && p.push(x),
                u.push(x),
                (x = x + E + y)),
            (t.virtualSize += E + y),
            (w = E),
            (C += 1);
        }
      }
      if (
        ((t.virtualSize = Math.max(t.virtualSize, o) + g),
        a &&
          r &&
          ("slide" === s.effect || "coverflow" === s.effect) &&
          n.css({ width: `${t.virtualSize + s.spaceBetween}px` }),
        s.setWrapperSize &&
          n.css({ [e("width")]: `${t.virtualSize + s.spaceBetween}px` }),
        S && t.grid.updateWrapperSize(E, p, e),
        !s.centeredSlides)
      ) {
        const e = [];
        for (let i = 0; i < p.length; i += 1) {
          let n = p[i];
          s.roundLengths && (n = Math.floor(n)),
            p[i] <= t.virtualSize - o && e.push(n);
        }
        (p = e),
          Math.floor(t.virtualSize - o) - Math.floor(p[p.length - 1]) > 1 &&
            p.push(t.virtualSize - o);
      }
      if ((0 === p.length && (p = [0]), 0 !== s.spaceBetween)) {
        const i = t.isHorizontal() && a ? "marginLeft" : e("marginRight");
        d.filter((t, e) => !s.cssMode || e !== d.length - 1).css({
          [i]: `${y}px`,
        });
      }
      if (s.centeredSlides && s.centeredSlidesBounds) {
        let t = 0;
        f.forEach((e) => {
          t += e + (s.spaceBetween ? s.spaceBetween : 0);
        }),
          (t -= s.spaceBetween);
        const e = t - o;
        p = p.map((t) => (t < 0 ? -m : t > e ? e + g : t));
      }
      if (s.centerInsufficientSlides) {
        let t = 0;
        if (
          (f.forEach((e) => {
            t += e + (s.spaceBetween ? s.spaceBetween : 0);
          }),
          (t -= s.spaceBetween),
          t < o)
        ) {
          const e = (o - t) / 2;
          p.forEach((t, i) => {
            p[i] = t - e;
          }),
            u.forEach((t, i) => {
              u[i] = t + e;
            });
        }
      }
      if (
        (Object.assign(t, {
          slides: d,
          snapGrid: p,
          slidesGrid: u,
          slidesSizesGrid: f,
        }),
        s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
      ) {
        $(t.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
          $(
            t.wrapperEl,
            "--swiper-centered-offset-after",
            t.size / 2 - f[f.length - 1] / 2 + "px"
          );
        const e = -t.snapGrid[0],
          i = -t.slidesGrid[0];
        (t.snapGrid = t.snapGrid.map((t) => t + e)),
          (t.slidesGrid = t.slidesGrid.map((t) => t + i));
      }
      if (
        (h !== c && t.emit("slidesLengthChange"),
        p.length !== v &&
          (t.params.watchOverflow && t.checkOverflow(),
          t.emit("snapGridLengthChange")),
        u.length !== b && t.emit("slidesGridLengthChange"),
        s.watchSlidesProgress && t.updateSlidesOffset(),
        !(l || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
      ) {
        const e = `${s.containerModifierClass}backface-hidden`,
          i = t.$el.hasClass(e);
        h <= s.maxBackfaceHiddenSlides
          ? i || t.$el.addClass(e)
          : i && t.$el.removeClass(e);
      }
    },
    updateAutoHeight: function (t) {
      const e = this,
        i = [],
        s = e.virtual && e.params.virtual.enabled;
      let n,
        o = 0;
      "number" == typeof t
        ? e.setTransition(t)
        : !0 === t && e.setTransition(e.params.speed);
      const a = (t) =>
        s
          ? e.slides.filter(
              (e) =>
                parseInt(e.getAttribute("data-swiper-slide-index"), 10) === t
            )[0]
          : e.slides.eq(t)[0];
      if ("auto" !== e.params.slidesPerView && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)
          (e.visibleSlides || y([])).each((t) => {
            i.push(t);
          });
        else
          for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
            const t = e.activeIndex + n;
            if (t > e.slides.length && !s) break;
            i.push(a(t));
          }
      else i.push(a(e.activeIndex));
      for (n = 0; n < i.length; n += 1)
        if (void 0 !== i[n]) {
          const t = i[n].offsetHeight;
          o = t > o ? t : o;
        }
      (o || 0 === o) && e.$wrapperEl.css("height", `${o}px`);
    },
    updateSlidesOffset: function () {
      const t = this,
        e = t.slides;
      for (let i = 0; i < e.length; i += 1)
        e[i].swiperSlideOffset = t.isHorizontal()
          ? e[i].offsetLeft
          : e[i].offsetTop;
    },
    updateSlidesProgress: function (t) {
      void 0 === t && (t = (this && this.translate) || 0);
      const e = this,
        i = e.params,
        { slides: s, rtlTranslate: n, snapGrid: o } = e;
      if (0 === s.length) return;
      void 0 === s[0].swiperSlideOffset && e.updateSlidesOffset();
      let a = -t;
      n && (a = t),
        s.removeClass(i.slideVisibleClass),
        (e.visibleSlidesIndexes = []),
        (e.visibleSlides = []);
      for (let t = 0; t < s.length; t += 1) {
        const r = s[t];
        let l = r.swiperSlideOffset;
        i.cssMode && i.centeredSlides && (l -= s[0].swiperSlideOffset);
        const c =
            (a + (i.centeredSlides ? e.minTranslate() : 0) - l) /
            (r.swiperSlideSize + i.spaceBetween),
          d =
            (a - o[0] + (i.centeredSlides ? e.minTranslate() : 0) - l) /
            (r.swiperSlideSize + i.spaceBetween),
          h = -(a - l),
          p = h + e.slidesSizesGrid[t];
        ((h >= 0 && h < e.size - 1) ||
          (p > 1 && p <= e.size) ||
          (h <= 0 && p >= e.size)) &&
          (e.visibleSlides.push(r),
          e.visibleSlidesIndexes.push(t),
          s.eq(t).addClass(i.slideVisibleClass)),
          (r.progress = n ? -c : c),
          (r.originalProgress = n ? -d : d);
      }
      e.visibleSlides = y(e.visibleSlides);
    },
    updateProgress: function (t) {
      const e = this;
      if (void 0 === t) {
        const i = e.rtlTranslate ? -1 : 1;
        t = (e && e.translate && e.translate * i) || 0;
      }
      const i = e.params,
        s = e.maxTranslate() - e.minTranslate();
      let { progress: n, isBeginning: o, isEnd: a } = e;
      const r = o,
        l = a;
      0 === s
        ? ((n = 0), (o = !0), (a = !0))
        : ((n = (t - e.minTranslate()) / s), (o = n <= 0), (a = n >= 1)),
        Object.assign(e, { progress: n, isBeginning: o, isEnd: a }),
        (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
          e.updateSlidesProgress(t),
        o && !r && e.emit("reachBeginning toEdge"),
        a && !l && e.emit("reachEnd toEdge"),
        ((r && !o) || (l && !a)) && e.emit("fromEdge"),
        e.emit("progress", n);
    },
    updateSlidesClasses: function () {
      const t = this,
        {
          slides: e,
          params: i,
          $wrapperEl: s,
          activeIndex: n,
          realIndex: o,
        } = t,
        a = t.virtual && i.virtual.enabled;
      let r;
      e.removeClass(
        `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
      ),
        (r = a
          ? t.$wrapperEl.find(
              `.${i.slideClass}[data-swiper-slide-index="${n}"]`
            )
          : e.eq(n)),
        r.addClass(i.slideActiveClass),
        i.loop &&
          (r.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${o}"]`
                )
                .addClass(i.slideDuplicateActiveClass)
            : s
                .children(
                  `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${o}"]`
                )
                .addClass(i.slideDuplicateActiveClass));
      let l = r.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
      i.loop && 0 === l.length && ((l = e.eq(0)), l.addClass(i.slideNextClass));
      let c = r.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
      i.loop &&
        0 === c.length &&
        ((c = e.eq(-1)), c.addClass(i.slidePrevClass)),
        i.loop &&
          (l.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  `.${i.slideClass}:not(.${
                    i.slideDuplicateClass
                  })[data-swiper-slide-index="${l.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(i.slideDuplicateNextClass)
            : s
                .children(
                  `.${i.slideClass}.${
                    i.slideDuplicateClass
                  }[data-swiper-slide-index="${l.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(i.slideDuplicateNextClass),
          c.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  `.${i.slideClass}:not(.${
                    i.slideDuplicateClass
                  })[data-swiper-slide-index="${c.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(i.slideDuplicatePrevClass)
            : s
                .children(
                  `.${i.slideClass}.${
                    i.slideDuplicateClass
                  }[data-swiper-slide-index="${c.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(i.slideDuplicatePrevClass)),
        t.emitSlidesClasses();
    },
    updateActiveIndex: function (t) {
      const e = this,
        i = e.rtlTranslate ? e.translate : -e.translate,
        {
          slidesGrid: s,
          snapGrid: n,
          params: o,
          activeIndex: a,
          realIndex: r,
          snapIndex: l,
        } = e;
      let c,
        d = t;
      if (void 0 === d) {
        for (let t = 0; t < s.length; t += 1)
          void 0 !== s[t + 1]
            ? i >= s[t] && i < s[t + 1] - (s[t + 1] - s[t]) / 2
              ? (d = t)
              : i >= s[t] && i < s[t + 1] && (d = t + 1)
            : i >= s[t] && (d = t);
        o.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
      }
      if (n.indexOf(i) >= 0) c = n.indexOf(i);
      else {
        const t = Math.min(o.slidesPerGroupSkip, d);
        c = t + Math.floor((d - t) / o.slidesPerGroup);
      }
      if ((c >= n.length && (c = n.length - 1), d === a))
        return void (c !== l && ((e.snapIndex = c), e.emit("snapIndexChange")));
      const h = parseInt(
        e.slides.eq(d).attr("data-swiper-slide-index") || d,
        10
      );
      Object.assign(e, {
        snapIndex: c,
        realIndex: h,
        previousIndex: a,
        activeIndex: d,
      }),
        e.emit("activeIndexChange"),
        e.emit("snapIndexChange"),
        r !== h && e.emit("realIndexChange"),
        (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange");
    },
    updateClickedSlide: function (t) {
      const e = this,
        i = e.params,
        s = y(t).closest(`.${i.slideClass}`)[0];
      let n,
        o = !1;
      if (s)
        for (let t = 0; t < e.slides.length; t += 1)
          if (e.slides[t] === s) {
            (o = !0), (n = t);
            break;
          }
      if (!s || !o)
        return (e.clickedSlide = void 0), void (e.clickedIndex = void 0);
      (e.clickedSlide = s),
        e.virtual && e.params.virtual.enabled
          ? (e.clickedIndex = parseInt(
              y(s).attr("data-swiper-slide-index"),
              10
            ))
          : (e.clickedIndex = n),
        i.slideToClickedSlide &&
          void 0 !== e.clickedIndex &&
          e.clickedIndex !== e.activeIndex &&
          e.slideToClickedSlide();
    },
  };
  const N = {
    getTranslate: function (t) {
      void 0 === t && (t = this.isHorizontal() ? "x" : "y");
      const { params: e, rtlTranslate: i, translate: s, $wrapperEl: n } = this;
      if (e.virtualTranslate) return i ? -s : s;
      if (e.cssMode) return s;
      let o = C(n[0], t);
      return i && (o = -o), o || 0;
    },
    setTranslate: function (t, e) {
      const i = this,
        {
          rtlTranslate: s,
          params: n,
          $wrapperEl: o,
          wrapperEl: a,
          progress: r,
        } = i;
      let l,
        c = 0,
        d = 0;
      i.isHorizontal() ? (c = s ? -t : t) : (d = t),
        n.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
        n.cssMode
          ? (a[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal()
              ? -c
              : -d)
          : n.virtualTranslate ||
            o.transform(`translate3d(${c}px, ${d}px, 0px)`),
        (i.previousTranslate = i.translate),
        (i.translate = i.isHorizontal() ? c : d);
      const h = i.maxTranslate() - i.minTranslate();
      (l = 0 === h ? 0 : (t - i.minTranslate()) / h),
        l !== r && i.updateProgress(t),
        i.emit("setTranslate", i.translate, e);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (t, e, i, s, n) {
      void 0 === t && (t = 0),
        void 0 === e && (e = this.params.speed),
        void 0 === i && (i = !0),
        void 0 === s && (s = !0);
      const o = this,
        { params: a, wrapperEl: r } = o;
      if (o.animating && a.preventInteractionOnTransition) return !1;
      const l = o.minTranslate(),
        c = o.maxTranslate();
      let d;
      if (
        ((d = s && t > l ? l : s && t < c ? c : t),
        o.updateProgress(d),
        a.cssMode)
      ) {
        const t = o.isHorizontal();
        if (0 === e) r[t ? "scrollLeft" : "scrollTop"] = -d;
        else {
          if (!o.support.smoothScroll)
            return (
              P({ swiper: o, targetPosition: -d, side: t ? "left" : "top" }), !0
            );
          r.scrollTo({ [t ? "left" : "top"]: -d, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === e
          ? (o.setTransition(0),
            o.setTranslate(d),
            i &&
              (o.emit("beforeTransitionStart", e, n), o.emit("transitionEnd")))
          : (o.setTransition(e),
            o.setTranslate(d),
            i &&
              (o.emit("beforeTransitionStart", e, n),
              o.emit("transitionStart")),
            o.animating ||
              ((o.animating = !0),
              o.onTranslateToWrapperTransitionEnd ||
                (o.onTranslateToWrapperTransitionEnd = function (t) {
                  o &&
                    !o.destroyed &&
                    t.target === this &&
                    (o.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      o.onTranslateToWrapperTransitionEnd
                    ),
                    o.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      o.onTranslateToWrapperTransitionEnd
                    ),
                    (o.onTranslateToWrapperTransitionEnd = null),
                    delete o.onTranslateToWrapperTransitionEnd,
                    i && o.emit("transitionEnd"));
                }),
              o.$wrapperEl[0].addEventListener(
                "transitionend",
                o.onTranslateToWrapperTransitionEnd
              ),
              o.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                o.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function D(t) {
    let { swiper: e, runCallbacks: i, direction: s, step: n } = t;
    const { activeIndex: o, previousIndex: a } = e;
    let r = s;
    if (
      (r || (r = o > a ? "next" : o < a ? "prev" : "reset"),
      e.emit(`transition${n}`),
      i && o !== a)
    ) {
      if ("reset" === r) return void e.emit(`slideResetTransition${n}`);
      e.emit(`slideChangeTransition${n}`),
        "next" === r
          ? e.emit(`slideNextTransition${n}`)
          : e.emit(`slidePrevTransition${n}`);
    }
  }
  const F = {
    slideTo: function (t, e, i, s, n) {
      if (
        (void 0 === t && (t = 0),
        void 0 === e && (e = this.params.speed),
        void 0 === i && (i = !0),
        "number" != typeof t && "string" != typeof t)
      )
        throw new Error(
          `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof t}] given.`
        );
      if ("string" == typeof t) {
        const e = parseInt(t, 10);
        if (!isFinite(e))
          throw new Error(
            `The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`
          );
        t = e;
      }
      const o = this;
      let a = t;
      a < 0 && (a = 0);
      const {
        params: r,
        snapGrid: l,
        slidesGrid: c,
        previousIndex: d,
        activeIndex: h,
        rtlTranslate: p,
        wrapperEl: u,
        enabled: f,
      } = o;
      if ((o.animating && r.preventInteractionOnTransition) || (!f && !s && !n))
        return !1;
      const m = Math.min(o.params.slidesPerGroupSkip, a);
      let g = m + Math.floor((a - m) / o.params.slidesPerGroup);
      g >= l.length && (g = l.length - 1),
        (h || r.initialSlide || 0) === (d || 0) &&
          i &&
          o.emit("beforeSlideChangeStart");
      const v = -l[g];
      if ((o.updateProgress(v), r.normalizeSlideIndex))
        for (let t = 0; t < c.length; t += 1) {
          const e = -Math.floor(100 * v),
            i = Math.floor(100 * c[t]),
            s = Math.floor(100 * c[t + 1]);
          void 0 !== c[t + 1]
            ? e >= i && e < s - (s - i) / 2
              ? (a = t)
              : e >= i && e < s && (a = t + 1)
            : e >= i && (a = t);
        }
      if (o.initialized && a !== h) {
        if (!o.allowSlideNext && v < o.translate && v < o.minTranslate())
          return !1;
        if (
          !o.allowSlidePrev &&
          v > o.translate &&
          v > o.maxTranslate() &&
          (h || 0) !== a
        )
          return !1;
      }
      let b;
      if (
        ((b = a > h ? "next" : a < h ? "prev" : "reset"),
        (p && -v === o.translate) || (!p && v === o.translate))
      )
        return (
          o.updateActiveIndex(a),
          r.autoHeight && o.updateAutoHeight(),
          o.updateSlidesClasses(),
          "slide" !== r.effect && o.setTranslate(v),
          "reset" !== b && (o.transitionStart(i, b), o.transitionEnd(i, b)),
          !1
        );
      if (r.cssMode) {
        const t = o.isHorizontal(),
          i = p ? v : -v;
        if (0 === e) {
          const e = o.virtual && o.params.virtual.enabled;
          e &&
            ((o.wrapperEl.style.scrollSnapType = "none"),
            (o._immediateVirtual = !0)),
            (u[t ? "scrollLeft" : "scrollTop"] = i),
            e &&
              requestAnimationFrame(() => {
                (o.wrapperEl.style.scrollSnapType = ""),
                  (o._swiperImmediateVirtual = !1);
              });
        } else {
          if (!o.support.smoothScroll)
            return (
              P({ swiper: o, targetPosition: i, side: t ? "left" : "top" }), !0
            );
          u.scrollTo({ [t ? "left" : "top"]: i, behavior: "smooth" });
        }
        return !0;
      }
      return (
        o.setTransition(e),
        o.setTranslate(v),
        o.updateActiveIndex(a),
        o.updateSlidesClasses(),
        o.emit("beforeTransitionStart", e, s),
        o.transitionStart(i, b),
        0 === e
          ? o.transitionEnd(i, b)
          : o.animating ||
            ((o.animating = !0),
            o.onSlideToWrapperTransitionEnd ||
              (o.onSlideToWrapperTransitionEnd = function (t) {
                o &&
                  !o.destroyed &&
                  t.target === this &&
                  (o.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    o.onSlideToWrapperTransitionEnd
                  ),
                  o.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    o.onSlideToWrapperTransitionEnd
                  ),
                  (o.onSlideToWrapperTransitionEnd = null),
                  delete o.onSlideToWrapperTransitionEnd,
                  o.transitionEnd(i, b));
              }),
            o.$wrapperEl[0].addEventListener(
              "transitionend",
              o.onSlideToWrapperTransitionEnd
            ),
            o.$wrapperEl[0].addEventListener(
              "webkitTransitionEnd",
              o.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (t, e, i, s) {
      void 0 === t && (t = 0),
        void 0 === e && (e = this.params.speed),
        void 0 === i && (i = !0);
      const n = this;
      let o = t;
      return n.params.loop && (o += n.loopedSlides), n.slideTo(o, e, i, s);
    },
    slideNext: function (t, e, i) {
      void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
      const s = this,
        { animating: n, enabled: o, params: a } = s;
      if (!o) return s;
      let r = a.slidesPerGroup;
      "auto" === a.slidesPerView &&
        1 === a.slidesPerGroup &&
        a.slidesPerGroupAuto &&
        (r = Math.max(s.slidesPerViewDynamic("current", !0), 1));
      const l = s.activeIndex < a.slidesPerGroupSkip ? 1 : r;
      if (a.loop) {
        if (n && a.loopPreventsSlide) return !1;
        s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
      }
      return a.rewind && s.isEnd
        ? s.slideTo(0, t, e, i)
        : s.slideTo(s.activeIndex + l, t, e, i);
    },
    slidePrev: function (t, e, i) {
      void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
      const s = this,
        {
          params: n,
          animating: o,
          snapGrid: a,
          slidesGrid: r,
          rtlTranslate: l,
          enabled: c,
        } = s;
      if (!c) return s;
      if (n.loop) {
        if (o && n.loopPreventsSlide) return !1;
        s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
      }
      function d(t) {
        return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t);
      }
      const h = d(l ? s.translate : -s.translate),
        p = a.map((t) => d(t));
      let u = a[p.indexOf(h) - 1];
      if (void 0 === u && n.cssMode) {
        let t;
        a.forEach((e, i) => {
          h >= e && (t = i);
        }),
          void 0 !== t && (u = a[t > 0 ? t - 1 : t]);
      }
      let f = 0;
      if (
        (void 0 !== u &&
          ((f = r.indexOf(u)),
          f < 0 && (f = s.activeIndex - 1),
          "auto" === n.slidesPerView &&
            1 === n.slidesPerGroup &&
            n.slidesPerGroupAuto &&
            ((f = f - s.slidesPerViewDynamic("previous", !0) + 1),
            (f = Math.max(f, 0)))),
        n.rewind && s.isBeginning)
      ) {
        const n =
          s.params.virtual && s.params.virtual.enabled && s.virtual
            ? s.virtual.slides.length - 1
            : s.slides.length - 1;
        return s.slideTo(n, t, e, i);
      }
      return s.slideTo(f, t, e, i);
    },
    slideReset: function (t, e, i) {
      return (
        void 0 === t && (t = this.params.speed),
        void 0 === e && (e = !0),
        this.slideTo(this.activeIndex, t, e, i)
      );
    },
    slideToClosest: function (t, e, i, s) {
      void 0 === t && (t = this.params.speed),
        void 0 === e && (e = !0),
        void 0 === s && (s = 0.5);
      const n = this;
      let o = n.activeIndex;
      const a = Math.min(n.params.slidesPerGroupSkip, o),
        r = a + Math.floor((o - a) / n.params.slidesPerGroup),
        l = n.rtlTranslate ? n.translate : -n.translate;
      if (l >= n.snapGrid[r]) {
        const t = n.snapGrid[r];
        l - t > (n.snapGrid[r + 1] - t) * s && (o += n.params.slidesPerGroup);
      } else {
        const t = n.snapGrid[r - 1];
        l - t <= (n.snapGrid[r] - t) * s && (o -= n.params.slidesPerGroup);
      }
      return (
        (o = Math.max(o, 0)),
        (o = Math.min(o, n.slidesGrid.length - 1)),
        n.slideTo(o, t, e, i)
      );
    },
    slideToClickedSlide: function () {
      const t = this,
        { params: e, $wrapperEl: i } = t,
        s =
          "auto" === e.slidesPerView
            ? t.slidesPerViewDynamic()
            : e.slidesPerView;
      let n,
        o = t.clickedIndex;
      if (e.loop) {
        if (t.animating) return;
        (n = parseInt(y(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
          e.centeredSlides
            ? o < t.loopedSlides - s / 2 ||
              o > t.slides.length - t.loopedSlides + s / 2
              ? (t.loopFix(),
                (o = i
                  .children(
                    `.${e.slideClass}[data-swiper-slide-index="${n}"]:not(.${e.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                x(() => {
                  t.slideTo(o);
                }))
              : t.slideTo(o)
            : o > t.slides.length - s
            ? (t.loopFix(),
              (o = i
                .children(
                  `.${e.slideClass}[data-swiper-slide-index="${n}"]:not(.${e.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              x(() => {
                t.slideTo(o);
              }))
            : t.slideTo(o);
      } else t.slideTo(o);
    },
  };
  const B = {
    loopCreate: function () {
      const t = this,
        e = c(),
        { params: i, $wrapperEl: s } = t,
        n = s.children().length > 0 ? y(s.children()[0].parentNode) : s;
      n.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
      let o = n.children(`.${i.slideClass}`);
      if (i.loopFillGroupWithBlank) {
        const t = i.slidesPerGroup - (o.length % i.slidesPerGroup);
        if (t !== i.slidesPerGroup) {
          for (let s = 0; s < t; s += 1) {
            const t = y(e.createElement("div")).addClass(
              `${i.slideClass} ${i.slideBlankClass}`
            );
            n.append(t);
          }
          o = n.children(`.${i.slideClass}`);
        }
      }
      "auto" !== i.slidesPerView ||
        i.loopedSlides ||
        (i.loopedSlides = o.length),
        (t.loopedSlides = Math.ceil(
          parseFloat(i.loopedSlides || i.slidesPerView, 10)
        )),
        (t.loopedSlides += i.loopAdditionalSlides),
        t.loopedSlides > o.length && (t.loopedSlides = o.length);
      const a = [],
        r = [];
      o.each((e, i) => {
        const s = y(e);
        i < t.loopedSlides && r.push(e),
          i < o.length && i >= o.length - t.loopedSlides && a.push(e),
          s.attr("data-swiper-slide-index", i);
      });
      for (let t = 0; t < r.length; t += 1)
        n.append(y(r[t].cloneNode(!0)).addClass(i.slideDuplicateClass));
      for (let t = a.length - 1; t >= 0; t -= 1)
        n.prepend(y(a[t].cloneNode(!0)).addClass(i.slideDuplicateClass));
    },
    loopFix: function () {
      const t = this;
      t.emit("beforeLoopFix");
      const {
        activeIndex: e,
        slides: i,
        loopedSlides: s,
        allowSlidePrev: n,
        allowSlideNext: o,
        snapGrid: a,
        rtlTranslate: r,
      } = t;
      let l;
      (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
      const c = -a[e] - t.getTranslate();
      if (e < s) {
        (l = i.length - 3 * s + e), (l += s);
        t.slideTo(l, 0, !1, !0) &&
          0 !== c &&
          t.setTranslate((r ? -t.translate : t.translate) - c);
      } else if (e >= i.length - s) {
        (l = -i.length + e + s), (l += s);
        t.slideTo(l, 0, !1, !0) &&
          0 !== c &&
          t.setTranslate((r ? -t.translate : t.translate) - c);
      }
      (t.allowSlidePrev = n), (t.allowSlideNext = o), t.emit("loopFix");
    },
    loopDestroy: function () {
      const { $wrapperEl: t, params: e, slides: i } = this;
      t
        .children(
          `.${e.slideClass}.${e.slideDuplicateClass},.${e.slideClass}.${e.slideBlankClass}`
        )
        .remove(),
        i.removeAttr("data-swiper-slide-index");
    },
  };
  function R(t) {
    const e = this,
      i = c(),
      s = h(),
      n = e.touchEventsData,
      { params: o, touches: a, enabled: r } = e;
    if (!r) return;
    if (e.animating && o.preventInteractionOnTransition) return;
    !e.animating && o.cssMode && o.loop && e.loopFix();
    let l = t;
    l.originalEvent && (l = l.originalEvent);
    let d = y(l.target);
    if ("wrapper" === o.touchEventsTarget && !d.closest(e.wrapperEl).length)
      return;
    if (
      ((n.isTouchEvent = "touchstart" === l.type),
      !n.isTouchEvent && "which" in l && 3 === l.which)
    )
      return;
    if (!n.isTouchEvent && "button" in l && l.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    !!o.noSwipingClass &&
      "" !== o.noSwipingClass &&
      l.target &&
      l.target.shadowRoot &&
      t.path &&
      t.path[0] &&
      (d = y(t.path[0]));
    const p = o.noSwipingSelector
        ? o.noSwipingSelector
        : `.${o.noSwipingClass}`,
      u = !(!l.target || !l.target.shadowRoot);
    if (
      o.noSwiping &&
      (u
        ? (function (t, e) {
            return (
              void 0 === e && (e = this),
              (function e(i) {
                if (!i || i === c() || i === h()) return null;
                i.assignedSlot && (i = i.assignedSlot);
                const s = i.closest(t);
                return s || i.getRootNode ? s || e(i.getRootNode().host) : null;
              })(e)
            );
          })(p, d[0])
        : d.closest(p)[0])
    )
      return void (e.allowClick = !0);
    if (o.swipeHandler && !d.closest(o.swipeHandler)[0]) return;
    (a.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
      (a.currentY =
        "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
    const f = a.currentX,
      m = a.currentY,
      g = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
      v = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
    if (g && (f <= v || f >= s.innerWidth - v)) {
      if ("prevent" !== g) return;
      t.preventDefault();
    }
    if (
      (Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (a.startX = f),
      (a.startY = m),
      (n.touchStartTime = w()),
      (e.allowClick = !0),
      e.updateSize(),
      (e.swipeDirection = void 0),
      o.threshold > 0 && (n.allowThresholdMove = !1),
      "touchstart" !== l.type)
    ) {
      let t = !0;
      d.is(n.focusableElements) &&
        ((t = !1), "SELECT" === d[0].nodeName && (n.isTouched = !1)),
        i.activeElement &&
          y(i.activeElement).is(n.focusableElements) &&
          i.activeElement !== d[0] &&
          i.activeElement.blur();
      const s = t && e.allowTouchMove && o.touchStartPreventDefault;
      (!o.touchStartForcePreventDefault && !s) ||
        d[0].isContentEditable ||
        l.preventDefault();
    }
    e.params.freeMode &&
      e.params.freeMode.enabled &&
      e.freeMode &&
      e.animating &&
      !o.cssMode &&
      e.freeMode.onTouchStart(),
      e.emit("touchStart", l);
  }
  function H(t) {
    const e = c(),
      i = this,
      s = i.touchEventsData,
      { params: n, touches: o, rtlTranslate: a, enabled: r } = i;
    if (!r) return;
    let l = t;
    if ((l.originalEvent && (l = l.originalEvent), !s.isTouched))
      return void (
        s.startMoving &&
        s.isScrolling &&
        i.emit("touchMoveOpposite", l)
      );
    if (s.isTouchEvent && "touchmove" !== l.type) return;
    const d =
        "touchmove" === l.type &&
        l.targetTouches &&
        (l.targetTouches[0] || l.changedTouches[0]),
      h = "touchmove" === l.type ? d.pageX : l.pageX,
      p = "touchmove" === l.type ? d.pageY : l.pageY;
    if (l.preventedByNestedSwiper) return (o.startX = h), void (o.startY = p);
    if (!i.allowTouchMove)
      return (
        y(l.target).is(s.focusableElements) || (i.allowClick = !1),
        void (
          s.isTouched &&
          (Object.assign(o, { startX: h, startY: p, currentX: h, currentY: p }),
          (s.touchStartTime = w()))
        )
      );
    if (s.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
      if (i.isVertical()) {
        if (
          (p < o.startY && i.translate <= i.maxTranslate()) ||
          (p > o.startY && i.translate >= i.minTranslate())
        )
          return (s.isTouched = !1), void (s.isMoved = !1);
      } else if (
        (h < o.startX && i.translate <= i.maxTranslate()) ||
        (h > o.startX && i.translate >= i.minTranslate())
      )
        return;
    if (
      s.isTouchEvent &&
      e.activeElement &&
      l.target === e.activeElement &&
      y(l.target).is(s.focusableElements)
    )
      return (s.isMoved = !0), void (i.allowClick = !1);
    if (
      (s.allowTouchCallbacks && i.emit("touchMove", l),
      l.targetTouches && l.targetTouches.length > 1)
    )
      return;
    (o.currentX = h), (o.currentY = p);
    const u = o.currentX - o.startX,
      f = o.currentY - o.startY;
    if (i.params.threshold && Math.sqrt(u ** 2 + f ** 2) < i.params.threshold)
      return;
    if (void 0 === s.isScrolling) {
      let t;
      (i.isHorizontal() && o.currentY === o.startY) ||
      (i.isVertical() && o.currentX === o.startX)
        ? (s.isScrolling = !1)
        : u * u + f * f >= 25 &&
          ((t = (180 * Math.atan2(Math.abs(f), Math.abs(u))) / Math.PI),
          (s.isScrolling = i.isHorizontal()
            ? t > n.touchAngle
            : 90 - t > n.touchAngle));
    }
    if (
      (s.isScrolling && i.emit("touchMoveOpposite", l),
      void 0 === s.startMoving &&
        ((o.currentX === o.startX && o.currentY === o.startY) ||
          (s.startMoving = !0)),
      s.isScrolling)
    )
      return void (s.isTouched = !1);
    if (!s.startMoving) return;
    (i.allowClick = !1),
      !n.cssMode && l.cancelable && l.preventDefault(),
      n.touchMoveStopPropagation && !n.nested && l.stopPropagation(),
      s.isMoved ||
        (n.loop && !n.cssMode && i.loopFix(),
        (s.startTranslate = i.getTranslate()),
        i.setTransition(0),
        i.animating &&
          i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        (s.allowMomentumBounce = !1),
        !n.grabCursor ||
          (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
          i.setGrabCursor(!0),
        i.emit("sliderFirstMove", l)),
      i.emit("sliderMove", l),
      (s.isMoved = !0);
    let m = i.isHorizontal() ? u : f;
    (o.diff = m),
      (m *= n.touchRatio),
      a && (m = -m),
      (i.swipeDirection = m > 0 ? "prev" : "next"),
      (s.currentTranslate = m + s.startTranslate);
    let g = !0,
      v = n.resistanceRatio;
    if (
      (n.touchReleaseOnEdges && (v = 0),
      m > 0 && s.currentTranslate > i.minTranslate()
        ? ((g = !1),
          n.resistance &&
            (s.currentTranslate =
              i.minTranslate() -
              1 +
              (-i.minTranslate() + s.startTranslate + m) ** v))
        : m < 0 &&
          s.currentTranslate < i.maxTranslate() &&
          ((g = !1),
          n.resistance &&
            (s.currentTranslate =
              i.maxTranslate() +
              1 -
              (i.maxTranslate() - s.startTranslate - m) ** v)),
      g && (l.preventedByNestedSwiper = !0),
      !i.allowSlideNext &&
        "next" === i.swipeDirection &&
        s.currentTranslate < s.startTranslate &&
        (s.currentTranslate = s.startTranslate),
      !i.allowSlidePrev &&
        "prev" === i.swipeDirection &&
        s.currentTranslate > s.startTranslate &&
        (s.currentTranslate = s.startTranslate),
      i.allowSlidePrev ||
        i.allowSlideNext ||
        (s.currentTranslate = s.startTranslate),
      n.threshold > 0)
    ) {
      if (!(Math.abs(m) > n.threshold || s.allowThresholdMove))
        return void (s.currentTranslate = s.startTranslate);
      if (!s.allowThresholdMove)
        return (
          (s.allowThresholdMove = !0),
          (o.startX = o.currentX),
          (o.startY = o.currentY),
          (s.currentTranslate = s.startTranslate),
          void (o.diff = i.isHorizontal()
            ? o.currentX - o.startX
            : o.currentY - o.startY)
        );
    }
    n.followFinger &&
      !n.cssMode &&
      (((n.freeMode && n.freeMode.enabled && i.freeMode) ||
        n.watchSlidesProgress) &&
        (i.updateActiveIndex(), i.updateSlidesClasses()),
      i.params.freeMode &&
        n.freeMode.enabled &&
        i.freeMode &&
        i.freeMode.onTouchMove(),
      i.updateProgress(s.currentTranslate),
      i.setTranslate(s.currentTranslate));
  }
  function W(t) {
    const e = this,
      i = e.touchEventsData,
      { params: s, touches: n, rtlTranslate: o, slidesGrid: a, enabled: r } = e;
    if (!r) return;
    let l = t;
    if (
      (l.originalEvent && (l = l.originalEvent),
      i.allowTouchCallbacks && e.emit("touchEnd", l),
      (i.allowTouchCallbacks = !1),
      !i.isTouched)
    )
      return (
        i.isMoved && s.grabCursor && e.setGrabCursor(!1),
        (i.isMoved = !1),
        void (i.startMoving = !1)
      );
    s.grabCursor &&
      i.isMoved &&
      i.isTouched &&
      (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) &&
      e.setGrabCursor(!1);
    const c = w(),
      d = c - i.touchStartTime;
    if (e.allowClick) {
      const t = l.path || (l.composedPath && l.composedPath());
      e.updateClickedSlide((t && t[0]) || l.target),
        e.emit("tap click", l),
        d < 300 &&
          c - i.lastClickTime < 300 &&
          e.emit("doubleTap doubleClick", l);
    }
    if (
      ((i.lastClickTime = w()),
      x(() => {
        e.destroyed || (e.allowClick = !0);
      }),
      !i.isTouched ||
        !i.isMoved ||
        !e.swipeDirection ||
        0 === n.diff ||
        i.currentTranslate === i.startTranslate)
    )
      return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
    let h;
    if (
      ((i.isTouched = !1),
      (i.isMoved = !1),
      (i.startMoving = !1),
      (h = s.followFinger
        ? o
          ? e.translate
          : -e.translate
        : -i.currentTranslate),
      s.cssMode)
    )
      return;
    if (e.params.freeMode && s.freeMode.enabled)
      return void e.freeMode.onTouchEnd({ currentPos: h });
    let p = 0,
      u = e.slidesSizesGrid[0];
    for (
      let t = 0;
      t < a.length;
      t += t < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
    ) {
      const e = t < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
      void 0 !== a[t + e]
        ? h >= a[t] && h < a[t + e] && ((p = t), (u = a[t + e] - a[t]))
        : h >= a[t] && ((p = t), (u = a[a.length - 1] - a[a.length - 2]));
    }
    let f = null,
      m = null;
    s.rewind &&
      (e.isBeginning
        ? (m =
            e.params.virtual && e.params.virtual.enabled && e.virtual
              ? e.virtual.slides.length - 1
              : e.slides.length - 1)
        : e.isEnd && (f = 0));
    const g = (h - a[p]) / u,
      v = p < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    if (d > s.longSwipesMs) {
      if (!s.longSwipes) return void e.slideTo(e.activeIndex);
      "next" === e.swipeDirection &&
        (g >= s.longSwipesRatio
          ? e.slideTo(s.rewind && e.isEnd ? f : p + v)
          : e.slideTo(p)),
        "prev" === e.swipeDirection &&
          (g > 1 - s.longSwipesRatio
            ? e.slideTo(p + v)
            : null !== m && g < 0 && Math.abs(g) > s.longSwipesRatio
            ? e.slideTo(m)
            : e.slideTo(p));
    } else {
      if (!s.shortSwipes) return void e.slideTo(e.activeIndex);
      e.navigation &&
      (l.target === e.navigation.nextEl || l.target === e.navigation.prevEl)
        ? l.target === e.navigation.nextEl
          ? e.slideTo(p + v)
          : e.slideTo(p)
        : ("next" === e.swipeDirection && e.slideTo(null !== f ? f : p + v),
          "prev" === e.swipeDirection && e.slideTo(null !== m ? m : p));
    }
  }
  function G() {
    const t = this,
      { params: e, el: i } = t;
    if (i && 0 === i.offsetWidth) return;
    e.breakpoints && t.setBreakpoint();
    const { allowSlideNext: s, allowSlidePrev: n, snapGrid: o } = t;
    (t.allowSlideNext = !0),
      (t.allowSlidePrev = !0),
      t.updateSize(),
      t.updateSlides(),
      t.updateSlidesClasses(),
      ("auto" === e.slidesPerView || e.slidesPerView > 1) &&
      t.isEnd &&
      !t.isBeginning &&
      !t.params.centeredSlides
        ? t.slideTo(t.slides.length - 1, 0, !1, !0)
        : t.slideTo(t.activeIndex, 0, !1, !0),
      t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.run(),
      (t.allowSlidePrev = n),
      (t.allowSlideNext = s),
      t.params.watchOverflow && o !== t.snapGrid && t.checkOverflow();
  }
  function q(t) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && t.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (t.stopPropagation(), t.stopImmediatePropagation())));
  }
  function j() {
    const t = this,
      { wrapperEl: e, rtlTranslate: i, enabled: s } = t;
    if (!s) return;
    let n;
    (t.previousTranslate = t.translate),
      t.isHorizontal()
        ? (t.translate = -e.scrollLeft)
        : (t.translate = -e.scrollTop),
      0 === t.translate && (t.translate = 0),
      t.updateActiveIndex(),
      t.updateSlidesClasses();
    const o = t.maxTranslate() - t.minTranslate();
    (n = 0 === o ? 0 : (t.translate - t.minTranslate()) / o),
      n !== t.progress && t.updateProgress(i ? -t.translate : t.translate),
      t.emit("setTranslate", t.translate, !1);
  }
  let V = !1;
  function X() {}
  const Y = (t, e) => {
    const i = c(),
      {
        params: s,
        touchEvents: n,
        el: o,
        wrapperEl: a,
        device: r,
        support: l,
      } = t,
      d = !!s.nested,
      h = "on" === e ? "addEventListener" : "removeEventListener",
      p = e;
    if (l.touch) {
      const e = !(
        "touchstart" !== n.start ||
        !l.passiveListener ||
        !s.passiveListeners
      ) && { passive: !0, capture: !1 };
      o[h](n.start, t.onTouchStart, e),
        o[h](
          n.move,
          t.onTouchMove,
          l.passiveListener ? { passive: !1, capture: d } : d
        ),
        o[h](n.end, t.onTouchEnd, e),
        n.cancel && o[h](n.cancel, t.onTouchEnd, e);
    } else
      o[h](n.start, t.onTouchStart, !1),
        i[h](n.move, t.onTouchMove, d),
        i[h](n.end, t.onTouchEnd, !1);
    (s.preventClicks || s.preventClicksPropagation) &&
      o[h]("click", t.onClick, !0),
      s.cssMode && a[h]("scroll", t.onScroll),
      s.updateOnWindowResize
        ? t[p](
            r.ios || r.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            G,
            !0
          )
        : t[p]("observerUpdate", G, !0);
  };
  const U = {
      attachEvents: function () {
        const t = this,
          e = c(),
          { params: i, support: s } = t;
        (t.onTouchStart = R.bind(t)),
          (t.onTouchMove = H.bind(t)),
          (t.onTouchEnd = W.bind(t)),
          i.cssMode && (t.onScroll = j.bind(t)),
          (t.onClick = q.bind(t)),
          s.touch && !V && (e.addEventListener("touchstart", X), (V = !0)),
          Y(t, "on");
      },
      detachEvents: function () {
        Y(this, "off");
      },
    },
    Z = (t, e) => t.grid && e.grid && e.grid.rows > 1;
  const K = {
    setBreakpoint: function () {
      const t = this,
        {
          activeIndex: e,
          initialized: i,
          loopedSlides: s = 0,
          params: n,
          $el: o,
        } = t,
        a = n.breakpoints;
      if (!a || (a && 0 === Object.keys(a).length)) return;
      const r = t.getBreakpoint(a, t.params.breakpointsBase, t.el);
      if (!r || t.currentBreakpoint === r) return;
      const l = (r in a ? a[r] : void 0) || t.originalParams,
        c = Z(t, n),
        d = Z(t, l),
        h = n.enabled;
      c && !d
        ? (o.removeClass(
            `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
          ),
          t.emitContainerClasses())
        : !c &&
          d &&
          (o.addClass(`${n.containerModifierClass}grid`),
          ((l.grid.fill && "column" === l.grid.fill) ||
            (!l.grid.fill && "column" === n.grid.fill)) &&
            o.addClass(`${n.containerModifierClass}grid-column`),
          t.emitContainerClasses());
      const p = l.direction && l.direction !== n.direction,
        u = n.loop && (l.slidesPerView !== n.slidesPerView || p);
      p && i && t.changeDirection(), T(t.params, l);
      const f = t.params.enabled;
      Object.assign(t, {
        allowTouchMove: t.params.allowTouchMove,
        allowSlideNext: t.params.allowSlideNext,
        allowSlidePrev: t.params.allowSlidePrev,
      }),
        h && !f ? t.disable() : !h && f && t.enable(),
        (t.currentBreakpoint = r),
        t.emit("_beforeBreakpoint", l),
        u &&
          i &&
          (t.loopDestroy(),
          t.loopCreate(),
          t.updateSlides(),
          t.slideTo(e - s + t.loopedSlides, 0, !1)),
        t.emit("breakpoint", l);
    },
    getBreakpoint: function (t, e, i) {
      if ((void 0 === e && (e = "window"), !t || ("container" === e && !i)))
        return;
      let s = !1;
      const n = h(),
        o = "window" === e ? n.innerHeight : i.clientHeight,
        a = Object.keys(t).map((t) => {
          if ("string" == typeof t && 0 === t.indexOf("@")) {
            const e = parseFloat(t.substr(1));
            return { value: o * e, point: t };
          }
          return { value: t, point: t };
        });
      a.sort((t, e) => parseInt(t.value, 10) - parseInt(e.value, 10));
      for (let t = 0; t < a.length; t += 1) {
        const { point: o, value: r } = a[t];
        "window" === e
          ? n.matchMedia(`(min-width: ${r}px)`).matches && (s = o)
          : r <= i.clientWidth && (s = o);
      }
      return s || "max";
    },
  };
  const J = {
    addClasses: function () {
      const t = this,
        { classNames: e, params: i, rtl: s, $el: n, device: o, support: a } = t,
        r = (function (t, e) {
          const i = [];
          return (
            t.forEach((t) => {
              "object" == typeof t
                ? Object.keys(t).forEach((s) => {
                    t[s] && i.push(e + s);
                  })
                : "string" == typeof t && i.push(e + t);
            }),
            i
          );
        })(
          [
            "initialized",
            i.direction,
            { "pointer-events": !a.touch },
            { "free-mode": t.params.freeMode && i.freeMode.enabled },
            { autoheight: i.autoHeight },
            { rtl: s },
            { grid: i.grid && i.grid.rows > 1 },
            {
              "grid-column":
                i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
            },
            { android: o.android },
            { ios: o.ios },
            { "css-mode": i.cssMode },
            { centered: i.cssMode && i.centeredSlides },
            { "watch-progress": i.watchSlidesProgress },
          ],
          i.containerModifierClass
        );
      e.push(...r), n.addClass([...e].join(" ")), t.emitContainerClasses();
    },
    removeClasses: function () {
      const { $el: t, classNames: e } = this;
      t.removeClass(e.join(" ")), this.emitContainerClasses();
    },
  };
  const Q = {
    loadImage: function (t, e, i, s, n, o) {
      const a = h();
      let r;
      function l() {
        o && o();
      }
      y(t).parent("picture")[0] || (t.complete && n)
        ? l()
        : e
        ? ((r = new a.Image()),
          (r.onload = l),
          (r.onerror = l),
          s && (r.sizes = s),
          i && (r.srcset = i),
          e && (r.src = e))
        : l();
    },
    preloadImages: function () {
      const t = this;
      function e() {
        null != t &&
          t &&
          !t.destroyed &&
          (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
          t.imagesLoaded === t.imagesToLoad.length &&
            (t.params.updateOnImagesReady && t.update(),
            t.emit("imagesReady")));
      }
      t.imagesToLoad = t.$el.find("img");
      for (let i = 0; i < t.imagesToLoad.length; i += 1) {
        const s = t.imagesToLoad[i];
        t.loadImage(
          s,
          s.currentSrc || s.getAttribute("src"),
          s.srcset || s.getAttribute("srcset"),
          s.sizes || s.getAttribute("sizes"),
          !0,
          e
        );
      }
    },
  };
  const tt = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function et(t, e) {
    return function (i) {
      void 0 === i && (i = {});
      const s = Object.keys(i)[0],
        n = i[s];
      "object" == typeof n && null !== n
        ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
            !0 === t[s] &&
            (t[s] = { auto: !0 }),
          s in t && "enabled" in n
            ? (!0 === t[s] && (t[s] = { enabled: !0 }),
              "object" != typeof t[s] ||
                "enabled" in t[s] ||
                (t[s].enabled = !0),
              t[s] || (t[s] = { enabled: !1 }),
              T(e, i))
            : T(e, i))
        : T(e, i);
    };
  }
  const it = {
      eventsEmitter: z,
      update: I,
      translate: N,
      transition: {
        setTransition: function (t, e) {
          const i = this;
          i.params.cssMode || i.$wrapperEl.transition(t),
            i.emit("setTransition", t, e);
        },
        transitionStart: function (t, e) {
          void 0 === t && (t = !0);
          const i = this,
            { params: s } = i;
          s.cssMode ||
            (s.autoHeight && i.updateAutoHeight(),
            D({ swiper: i, runCallbacks: t, direction: e, step: "Start" }));
        },
        transitionEnd: function (t, e) {
          void 0 === t && (t = !0);
          const i = this,
            { params: s } = i;
          (i.animating = !1),
            s.cssMode ||
              (i.setTransition(0),
              D({ swiper: i, runCallbacks: t, direction: e, step: "End" }));
        },
      },
      slide: F,
      loop: B,
      grabCursor: {
        setGrabCursor: function (t) {
          const e = this;
          if (
            e.support.touch ||
            !e.params.simulateTouch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode
          )
            return;
          const i =
            "container" === e.params.touchEventsTarget ? e.el : e.wrapperEl;
          (i.style.cursor = "move"), (i.style.cursor = t ? "grabbing" : "grab");
        },
        unsetGrabCursor: function () {
          const t = this;
          t.support.touch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode ||
            (t[
              "container" === t.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = "");
        },
      },
      events: U,
      breakpoints: K,
      checkOverflow: {
        checkOverflow: function () {
          const t = this,
            { isLocked: e, params: i } = t,
            { slidesOffsetBefore: s } = i;
          if (s) {
            const e = t.slides.length - 1,
              i = t.slidesGrid[e] + t.slidesSizesGrid[e] + 2 * s;
            t.isLocked = t.size > i;
          } else t.isLocked = 1 === t.snapGrid.length;
          !0 === i.allowSlideNext && (t.allowSlideNext = !t.isLocked),
            !0 === i.allowSlidePrev && (t.allowSlidePrev = !t.isLocked),
            e && e !== t.isLocked && (t.isEnd = !1),
            e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock");
        },
      },
      classes: J,
      images: Q,
    },
    st = {};
  class nt {
    constructor() {
      let t, e;
      for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++)
        s[n] = arguments[n];
      if (
        (1 === s.length &&
        s[0].constructor &&
        "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
          ? (e = s[0])
          : ([t, e] = s),
        e || (e = {}),
        (e = T({}, e)),
        t && !e.el && (e.el = t),
        e.el && y(e.el).length > 1)
      ) {
        const t = [];
        return (
          y(e.el).each((i) => {
            const s = T({}, e, { el: i });
            t.push(new nt(s));
          }),
          t
        );
      }
      const o = this;
      (o.__swiper__ = !0),
        (o.support = A()),
        (o.device = _({ userAgent: e.userAgent })),
        (o.browser = O()),
        (o.eventsListeners = {}),
        (o.eventsAnyListeners = []),
        (o.modules = [...o.__modules__]),
        e.modules && Array.isArray(e.modules) && o.modules.push(...e.modules);
      const a = {};
      o.modules.forEach((t) => {
        t({
          swiper: o,
          extendParams: et(e, a),
          on: o.on.bind(o),
          once: o.once.bind(o),
          off: o.off.bind(o),
          emit: o.emit.bind(o),
        });
      });
      const r = T({}, tt, a);
      return (
        (o.params = T({}, r, st, e)),
        (o.originalParams = T({}, o.params)),
        (o.passedParams = T({}, e)),
        o.params &&
          o.params.on &&
          Object.keys(o.params.on).forEach((t) => {
            o.on(t, o.params.on[t]);
          }),
        o.params && o.params.onAny && o.onAny(o.params.onAny),
        (o.$ = y),
        Object.assign(o, {
          enabled: o.params.enabled,
          el: t,
          classNames: [],
          slides: y(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === o.params.direction,
          isVertical: () => "vertical" === o.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: o.params.allowSlideNext,
          allowSlidePrev: o.params.allowSlidePrev,
          touchEvents: (function () {
            const t = ["touchstart", "touchmove", "touchend", "touchcancel"],
              e = ["pointerdown", "pointermove", "pointerup"];
            return (
              (o.touchEventsTouch = {
                start: t[0],
                move: t[1],
                end: t[2],
                cancel: t[3],
              }),
              (o.touchEventsDesktop = { start: e[0], move: e[1], end: e[2] }),
              o.support.touch || !o.params.simulateTouch
                ? o.touchEventsTouch
                : o.touchEventsDesktop
            );
          })(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: o.params.focusableElements,
            lastClickTime: w(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: o.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        o.emit("_swiper"),
        o.params.init && o.init(),
        o
      );
    }
    enable() {
      const t = this;
      t.enabled ||
        ((t.enabled = !0),
        t.params.grabCursor && t.setGrabCursor(),
        t.emit("enable"));
    }
    disable() {
      const t = this;
      t.enabled &&
        ((t.enabled = !1),
        t.params.grabCursor && t.unsetGrabCursor(),
        t.emit("disable"));
    }
    setProgress(t, e) {
      const i = this;
      t = Math.min(Math.max(t, 0), 1);
      const s = i.minTranslate(),
        n = (i.maxTranslate() - s) * t + s;
      i.translateTo(n, void 0 === e ? 0 : e),
        i.updateActiveIndex(),
        i.updateSlidesClasses();
    }
    emitContainerClasses() {
      const t = this;
      if (!t.params._emitClasses || !t.el) return;
      const e = t.el.className
        .split(" ")
        .filter(
          (e) =>
            0 === e.indexOf("swiper") ||
            0 === e.indexOf(t.params.containerModifierClass)
        );
      t.emit("_containerClasses", e.join(" "));
    }
    getSlideClasses(t) {
      const e = this;
      return e.destroyed
        ? ""
        : t.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper-slide") ||
                0 === t.indexOf(e.params.slideClass)
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const t = this;
      if (!t.params._emitClasses || !t.el) return;
      const e = [];
      t.slides.each((i) => {
        const s = t.getSlideClasses(i);
        e.push({ slideEl: i, classNames: s }), t.emit("_slideClass", i, s);
      }),
        t.emit("_slideClasses", e);
    }
    slidesPerViewDynamic(t, e) {
      void 0 === t && (t = "current"), void 0 === e && (e = !1);
      const {
        params: i,
        slides: s,
        slidesGrid: n,
        slidesSizesGrid: o,
        size: a,
        activeIndex: r,
      } = this;
      let l = 1;
      if (i.centeredSlides) {
        let t,
          e = s[r].swiperSlideSize;
        for (let i = r + 1; i < s.length; i += 1)
          s[i] &&
            !t &&
            ((e += s[i].swiperSlideSize), (l += 1), e > a && (t = !0));
        for (let i = r - 1; i >= 0; i -= 1)
          s[i] &&
            !t &&
            ((e += s[i].swiperSlideSize), (l += 1), e > a && (t = !0));
      } else if ("current" === t)
        for (let t = r + 1; t < s.length; t += 1) {
          (e ? n[t] + o[t] - n[r] < a : n[t] - n[r] < a) && (l += 1);
        }
      else
        for (let t = r - 1; t >= 0; t -= 1) {
          n[r] - n[t] < a && (l += 1);
        }
      return l;
    }
    update() {
      const t = this;
      if (!t || t.destroyed) return;
      const { snapGrid: e, params: i } = t;
      function s() {
        const e = t.rtlTranslate ? -1 * t.translate : t.translate,
          i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
        t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses();
      }
      let n;
      i.breakpoints && t.setBreakpoint(),
        t.updateSize(),
        t.updateSlides(),
        t.updateProgress(),
        t.updateSlidesClasses(),
        t.params.freeMode && t.params.freeMode.enabled
          ? (s(), t.params.autoHeight && t.updateAutoHeight())
          : ((n =
              ("auto" === t.params.slidesPerView ||
                t.params.slidesPerView > 1) &&
              t.isEnd &&
              !t.params.centeredSlides
                ? t.slideTo(t.slides.length - 1, 0, !1, !0)
                : t.slideTo(t.activeIndex, 0, !1, !0)),
            n || s()),
        i.watchOverflow && e !== t.snapGrid && t.checkOverflow(),
        t.emit("update");
    }
    changeDirection(t, e) {
      void 0 === e && (e = !0);
      const i = this,
        s = i.params.direction;
      return (
        t || (t = "horizontal" === s ? "vertical" : "horizontal"),
        t === s ||
          ("horizontal" !== t && "vertical" !== t) ||
          (i.$el
            .removeClass(`${i.params.containerModifierClass}${s}`)
            .addClass(`${i.params.containerModifierClass}${t}`),
          i.emitContainerClasses(),
          (i.params.direction = t),
          i.slides.each((e) => {
            "vertical" === t ? (e.style.width = "") : (e.style.height = "");
          }),
          i.emit("changeDirection"),
          e && i.update()),
        i
      );
    }
    mount(t) {
      const e = this;
      if (e.mounted) return !0;
      const i = y(t || e.params.el);
      if (!(t = i[0])) return !1;
      t.swiper = e;
      const s = () =>
        `.${(e.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let n = (() => {
        if (t && t.shadowRoot && t.shadowRoot.querySelector) {
          const e = y(t.shadowRoot.querySelector(s()));
          return (e.children = (t) => i.children(t)), e;
        }
        return i.children ? i.children(s()) : y(i).children(s());
      })();
      if (0 === n.length && e.params.createElements) {
        const t = c().createElement("div");
        (n = y(t)),
          (t.className = e.params.wrapperClass),
          i.append(t),
          i.children(`.${e.params.slideClass}`).each((t) => {
            n.append(t);
          });
      }
      return (
        Object.assign(e, {
          $el: i,
          el: t,
          $wrapperEl: n,
          wrapperEl: n[0],
          mounted: !0,
          rtl: "rtl" === t.dir.toLowerCase() || "rtl" === i.css("direction"),
          rtlTranslate:
            "horizontal" === e.params.direction &&
            ("rtl" === t.dir.toLowerCase() || "rtl" === i.css("direction")),
          wrongRTL: "-webkit-box" === n.css("display"),
        }),
        !0
      );
    }
    init(t) {
      const e = this;
      if (e.initialized) return e;
      return (
        !1 === e.mount(t) ||
          (e.emit("beforeInit"),
          e.params.breakpoints && e.setBreakpoint(),
          e.addClasses(),
          e.params.loop && e.loopCreate(),
          e.updateSize(),
          e.updateSlides(),
          e.params.watchOverflow && e.checkOverflow(),
          e.params.grabCursor && e.enabled && e.setGrabCursor(),
          e.params.preloadImages && e.preloadImages(),
          e.params.loop
            ? e.slideTo(
                e.params.initialSlide + e.loopedSlides,
                0,
                e.params.runCallbacksOnInit,
                !1,
                !0
              )
            : e.slideTo(
                e.params.initialSlide,
                0,
                e.params.runCallbacksOnInit,
                !1,
                !0
              ),
          e.attachEvents(),
          (e.initialized = !0),
          e.emit("init"),
          e.emit("afterInit")),
        e
      );
    }
    destroy(t, e) {
      void 0 === t && (t = !0), void 0 === e && (e = !0);
      const i = this,
        { params: s, $el: n, $wrapperEl: o, slides: a } = i;
      return (
        void 0 === i.params ||
          i.destroyed ||
          (i.emit("beforeDestroy"),
          (i.initialized = !1),
          i.detachEvents(),
          s.loop && i.loopDestroy(),
          e &&
            (i.removeClasses(),
            n.removeAttr("style"),
            o.removeAttr("style"),
            a &&
              a.length &&
              a
                .removeClass(
                  [
                    s.slideVisibleClass,
                    s.slideActiveClass,
                    s.slideNextClass,
                    s.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index")),
          i.emit("destroy"),
          Object.keys(i.eventsListeners).forEach((t) => {
            i.off(t);
          }),
          !1 !== t &&
            ((i.$el[0].swiper = null),
            (function (t) {
              const e = t;
              Object.keys(e).forEach((t) => {
                try {
                  e[t] = null;
                } catch (t) {}
                try {
                  delete e[t];
                } catch (t) {}
              });
            })(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(t) {
      T(st, t);
    }
    static get extendedDefaults() {
      return st;
    }
    static get defaults() {
      return tt;
    }
    static installModule(t) {
      nt.prototype.__modules__ || (nt.prototype.__modules__ = []);
      const e = nt.prototype.__modules__;
      "function" == typeof t && e.indexOf(t) < 0 && e.push(t);
    }
    static use(t) {
      return Array.isArray(t)
        ? (t.forEach((t) => nt.installModule(t)), nt)
        : (nt.installModule(t), nt);
    }
  }
  Object.keys(it).forEach((t) => {
    Object.keys(it[t]).forEach((e) => {
      nt.prototype[e] = it[t][e];
    });
  }),
    nt.use([
      function (t) {
        let { swiper: e, on: i, emit: s } = t;
        const n = h();
        let o = null,
          a = null;
        const r = () => {
            e &&
              !e.destroyed &&
              e.initialized &&
              (s("beforeResize"), s("resize"));
          },
          l = () => {
            e && !e.destroyed && e.initialized && s("orientationchange");
          };
        i("init", () => {
          e.params.resizeObserver && void 0 !== n.ResizeObserver
            ? e &&
              !e.destroyed &&
              e.initialized &&
              ((o = new ResizeObserver((t) => {
                a = n.requestAnimationFrame(() => {
                  const { width: i, height: s } = e;
                  let n = i,
                    o = s;
                  t.forEach((t) => {
                    let { contentBoxSize: i, contentRect: s, target: a } = t;
                    (a && a !== e.el) ||
                      ((n = s ? s.width : (i[0] || i).inlineSize),
                      (o = s ? s.height : (i[0] || i).blockSize));
                  }),
                    (n === i && o === s) || r();
                });
              })),
              o.observe(e.el))
            : (n.addEventListener("resize", r),
              n.addEventListener("orientationchange", l));
        }),
          i("destroy", () => {
            a && n.cancelAnimationFrame(a),
              o && o.unobserve && e.el && (o.unobserve(e.el), (o = null)),
              n.removeEventListener("resize", r),
              n.removeEventListener("orientationchange", l);
          });
      },
      function (t) {
        let { swiper: e, extendParams: i, on: s, emit: n } = t;
        const o = [],
          a = h(),
          r = function (t, e) {
            void 0 === e && (e = {});
            const i = new (a.MutationObserver || a.WebkitMutationObserver)(
              (t) => {
                if (1 === t.length) return void n("observerUpdate", t[0]);
                const e = function () {
                  n("observerUpdate", t[0]);
                };
                a.requestAnimationFrame
                  ? a.requestAnimationFrame(e)
                  : a.setTimeout(e, 0);
              }
            );
            i.observe(t, {
              attributes: void 0 === e.attributes || e.attributes,
              childList: void 0 === e.childList || e.childList,
              characterData: void 0 === e.characterData || e.characterData,
            }),
              o.push(i);
          };
        i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          s("init", () => {
            if (e.params.observer) {
              if (e.params.observeParents) {
                const t = e.$el.parents();
                for (let e = 0; e < t.length; e += 1) r(t[e]);
              }
              r(e.$el[0], { childList: e.params.observeSlideChildren }),
                r(e.$wrapperEl[0], { attributes: !1 });
            }
          }),
          s("destroy", () => {
            o.forEach((t) => {
              t.disconnect();
            }),
              o.splice(0, o.length);
          });
      },
    ]);
  const ot = nt;
  function at(t, e, i, s) {
    const n = c();
    return (
      t.params.createElements &&
        Object.keys(s).forEach((o) => {
          if (!i[o] && !0 === i.auto) {
            let a = t.$el.children(`.${s[o]}`)[0];
            a ||
              ((a = n.createElement("div")),
              (a.className = s[o]),
              t.$el.append(a)),
              (i[o] = a),
              (e[o] = a);
          }
        }),
      i
    );
  }
  function rt(t) {
    let { swiper: e, extendParams: i, on: s, emit: n } = t;
    function o(t) {
      let i;
      return (
        t &&
          ((i = y(t)),
          e.params.uniqueNavElements &&
            "string" == typeof t &&
            i.length > 1 &&
            1 === e.$el.find(t).length &&
            (i = e.$el.find(t))),
        i
      );
    }
    function a(t, i) {
      const s = e.params.navigation;
      t &&
        t.length > 0 &&
        (t[i ? "addClass" : "removeClass"](s.disabledClass),
        t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = i),
        e.params.watchOverflow &&
          e.enabled &&
          t[e.isLocked ? "addClass" : "removeClass"](s.lockClass));
    }
    function r() {
      if (e.params.loop) return;
      const { $nextEl: t, $prevEl: i } = e.navigation;
      a(i, e.isBeginning && !e.params.rewind),
        a(t, e.isEnd && !e.params.rewind);
    }
    function l(t) {
      t.preventDefault(),
        (!e.isBeginning || e.params.loop || e.params.rewind) && e.slidePrev();
    }
    function c(t) {
      t.preventDefault(),
        (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext();
    }
    function d() {
      const t = e.params.navigation;
      if (
        ((e.params.navigation = at(
          e,
          e.originalParams.navigation,
          e.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !t.nextEl && !t.prevEl)
      )
        return;
      const i = o(t.nextEl),
        s = o(t.prevEl);
      i && i.length > 0 && i.on("click", c),
        s && s.length > 0 && s.on("click", l),
        Object.assign(e.navigation, {
          $nextEl: i,
          nextEl: i && i[0],
          $prevEl: s,
          prevEl: s && s[0],
        }),
        e.enabled ||
          (i && i.addClass(t.lockClass), s && s.addClass(t.lockClass));
    }
    function h() {
      const { $nextEl: t, $prevEl: i } = e.navigation;
      t &&
        t.length &&
        (t.off("click", c), t.removeClass(e.params.navigation.disabledClass)),
        i &&
          i.length &&
          (i.off("click", l), i.removeClass(e.params.navigation.disabledClass));
    }
    i({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
      },
    }),
      (e.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null,
      }),
      s("init", () => {
        d(), r();
      }),
      s("toEdge fromEdge lock unlock", () => {
        r();
      }),
      s("destroy", () => {
        h();
      }),
      s("enable disable", () => {
        const { $nextEl: t, $prevEl: i } = e.navigation;
        t &&
          t[e.enabled ? "removeClass" : "addClass"](
            e.params.navigation.lockClass
          ),
          i &&
            i[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass
            );
      }),
      s("click", (t, i) => {
        const { $nextEl: s, $prevEl: o } = e.navigation,
          a = i.target;
        if (e.params.navigation.hideOnClick && !y(a).is(o) && !y(a).is(s)) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === a || e.pagination.el.contains(a))
          )
            return;
          let t;
          s
            ? (t = s.hasClass(e.params.navigation.hiddenClass))
            : o && (t = o.hasClass(e.params.navigation.hiddenClass)),
            n(!0 === t ? "navigationShow" : "navigationHide"),
            s && s.toggleClass(e.params.navigation.hiddenClass),
            o && o.toggleClass(e.params.navigation.hiddenClass);
        }
      }),
      Object.assign(e.navigation, { update: r, init: d, destroy: h });
  }
  function lt(t) {
    return (
      void 0 === t && (t = ""),
      `.${t
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function ct(t) {
    let { swiper: e, extendParams: i, on: s, emit: n } = t;
    const o = "swiper-pagination";
    let a;
    i({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (t) => t,
        formatFractionTotal: (t) => t,
        bulletClass: `${o}-bullet`,
        bulletActiveClass: `${o}-bullet-active`,
        modifierClass: `${o}-`,
        currentClass: `${o}-current`,
        totalClass: `${o}-total`,
        hiddenClass: `${o}-hidden`,
        progressbarFillClass: `${o}-progressbar-fill`,
        progressbarOppositeClass: `${o}-progressbar-opposite`,
        clickableClass: `${o}-clickable`,
        lockClass: `${o}-lock`,
        horizontalClass: `${o}-horizontal`,
        verticalClass: `${o}-vertical`,
      },
    }),
      (e.pagination = { el: null, $el: null, bullets: [] });
    let r = 0;
    function l() {
      return (
        !e.params.pagination.el ||
        !e.pagination.el ||
        !e.pagination.$el ||
        0 === e.pagination.$el.length
      );
    }
    function c(t, i) {
      const { bulletActiveClass: s } = e.params.pagination;
      t[i]().addClass(`${s}-${i}`)[i]().addClass(`${s}-${i}-${i}`);
    }
    function d() {
      const t = e.rtl,
        i = e.params.pagination;
      if (l()) return;
      const s =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        o = e.pagination.$el;
      let d;
      const h = e.params.loop
        ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
        : e.snapGrid.length;
      if (
        (e.params.loop
          ? ((d = Math.ceil(
              (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
            )),
            d > s - 1 - 2 * e.loopedSlides && (d -= s - 2 * e.loopedSlides),
            d > h - 1 && (d -= h),
            d < 0 && "bullets" !== e.params.paginationType && (d = h + d))
          : (d = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
        "bullets" === i.type &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        const s = e.pagination.bullets;
        let n, l, h;
        if (
          (i.dynamicBullets &&
            ((a = s.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
            o.css(
              e.isHorizontal() ? "width" : "height",
              a * (i.dynamicMainBullets + 4) + "px"
            ),
            i.dynamicMainBullets > 1 &&
              void 0 !== e.previousIndex &&
              ((r += d - (e.previousIndex - e.loopedSlides || 0)),
              r > i.dynamicMainBullets - 1
                ? (r = i.dynamicMainBullets - 1)
                : r < 0 && (r = 0)),
            (n = Math.max(d - r, 0)),
            (l = n + (Math.min(s.length, i.dynamicMainBullets) - 1)),
            (h = (l + n) / 2)),
          s.removeClass(
            ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
              .map((t) => `${i.bulletActiveClass}${t}`)
              .join(" ")
          ),
          o.length > 1)
        )
          s.each((t) => {
            const e = y(t),
              s = e.index();
            s === d && e.addClass(i.bulletActiveClass),
              i.dynamicBullets &&
                (s >= n && s <= l && e.addClass(`${i.bulletActiveClass}-main`),
                s === n && c(e, "prev"),
                s === l && c(e, "next"));
          });
        else {
          const t = s.eq(d),
            o = t.index();
          if ((t.addClass(i.bulletActiveClass), i.dynamicBullets)) {
            const t = s.eq(n),
              a = s.eq(l);
            for (let t = n; t <= l; t += 1)
              s.eq(t).addClass(`${i.bulletActiveClass}-main`);
            if (e.params.loop)
              if (o >= s.length) {
                for (let t = i.dynamicMainBullets; t >= 0; t -= 1)
                  s.eq(s.length - t).addClass(`${i.bulletActiveClass}-main`);
                s.eq(s.length - i.dynamicMainBullets - 1).addClass(
                  `${i.bulletActiveClass}-prev`
                );
              } else c(t, "prev"), c(a, "next");
            else c(t, "prev"), c(a, "next");
          }
        }
        if (i.dynamicBullets) {
          const n = Math.min(s.length, i.dynamicMainBullets + 4),
            o = (a * n - a) / 2 - h * a,
            r = t ? "right" : "left";
          s.css(e.isHorizontal() ? r : "top", `${o}px`);
        }
      }
      if (
        ("fraction" === i.type &&
          (o.find(lt(i.currentClass)).text(i.formatFractionCurrent(d + 1)),
          o.find(lt(i.totalClass)).text(i.formatFractionTotal(h))),
        "progressbar" === i.type)
      ) {
        let t;
        t = i.progressbarOpposite
          ? e.isHorizontal()
            ? "vertical"
            : "horizontal"
          : e.isHorizontal()
          ? "horizontal"
          : "vertical";
        const s = (d + 1) / h;
        let n = 1,
          a = 1;
        "horizontal" === t ? (n = s) : (a = s),
          o
            .find(lt(i.progressbarFillClass))
            .transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${a})`)
            .transition(e.params.speed);
      }
      "custom" === i.type && i.renderCustom
        ? (o.html(i.renderCustom(e, d + 1, h)), n("paginationRender", o[0]))
        : n("paginationUpdate", o[0]),
        e.params.watchOverflow &&
          e.enabled &&
          o[e.isLocked ? "addClass" : "removeClass"](i.lockClass);
    }
    function h() {
      const t = e.params.pagination;
      if (l()) return;
      const i =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        s = e.pagination.$el;
      let o = "";
      if ("bullets" === t.type) {
        let n = e.params.loop
          ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode &&
          e.params.freeMode.enabled &&
          !e.params.loop &&
          n > i &&
          (n = i);
        for (let i = 0; i < n; i += 1)
          t.renderBullet
            ? (o += t.renderBullet.call(e, i, t.bulletClass))
            : (o += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
        s.html(o), (e.pagination.bullets = s.find(lt(t.bulletClass)));
      }
      "fraction" === t.type &&
        ((o = t.renderFraction
          ? t.renderFraction.call(e, t.currentClass, t.totalClass)
          : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
        s.html(o)),
        "progressbar" === t.type &&
          ((o = t.renderProgressbar
            ? t.renderProgressbar.call(e, t.progressbarFillClass)
            : `<span class="${t.progressbarFillClass}"></span>`),
          s.html(o)),
        "custom" !== t.type && n("paginationRender", e.pagination.$el[0]);
    }
    function p() {
      e.params.pagination = at(
        e,
        e.originalParams.pagination,
        e.params.pagination,
        { el: "swiper-pagination" }
      );
      const t = e.params.pagination;
      if (!t.el) return;
      let i = y(t.el);
      0 !== i.length &&
        (e.params.uniqueNavElements &&
          "string" == typeof t.el &&
          i.length > 1 &&
          ((i = e.$el.find(t.el)),
          i.length > 1 &&
            (i = i.filter((t) => y(t).parents(".swiper")[0] === e.el))),
        "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
        i.addClass(t.modifierClass + t.type),
        i.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
        "bullets" === t.type &&
          t.dynamicBullets &&
          (i.addClass(`${t.modifierClass}${t.type}-dynamic`),
          (r = 0),
          t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
        "progressbar" === t.type &&
          t.progressbarOpposite &&
          i.addClass(t.progressbarOppositeClass),
        t.clickable &&
          i.on("click", lt(t.bulletClass), function (t) {
            t.preventDefault();
            let i = y(this).index() * e.params.slidesPerGroup;
            e.params.loop && (i += e.loopedSlides), e.slideTo(i);
          }),
        Object.assign(e.pagination, { $el: i, el: i[0] }),
        e.enabled || i.addClass(t.lockClass));
    }
    function u() {
      const t = e.params.pagination;
      if (l()) return;
      const i = e.pagination.$el;
      i.removeClass(t.hiddenClass),
        i.removeClass(t.modifierClass + t.type),
        i.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
        e.pagination.bullets &&
          e.pagination.bullets.removeClass &&
          e.pagination.bullets.removeClass(t.bulletActiveClass),
        t.clickable && i.off("click", lt(t.bulletClass));
    }
    s("init", () => {
      p(), h(), d();
    }),
      s("activeIndexChange", () => {
        (e.params.loop || void 0 === e.snapIndex) && d();
      }),
      s("snapIndexChange", () => {
        e.params.loop || d();
      }),
      s("slidesLengthChange", () => {
        e.params.loop && (h(), d());
      }),
      s("snapGridLengthChange", () => {
        e.params.loop || (h(), d());
      }),
      s("destroy", () => {
        u();
      }),
      s("enable disable", () => {
        const { $el: t } = e.pagination;
        t &&
          t[e.enabled ? "removeClass" : "addClass"](
            e.params.pagination.lockClass
          );
      }),
      s("lock unlock", () => {
        d();
      }),
      s("click", (t, i) => {
        const s = i.target,
          { $el: o } = e.pagination;
        if (
          e.params.pagination.el &&
          e.params.pagination.hideOnClick &&
          o.length > 0 &&
          !y(s).hasClass(e.params.pagination.bulletClass)
        ) {
          if (
            e.navigation &&
            ((e.navigation.nextEl && s === e.navigation.nextEl) ||
              (e.navigation.prevEl && s === e.navigation.prevEl))
          )
            return;
          const t = o.hasClass(e.params.pagination.hiddenClass);
          n(!0 === t ? "paginationShow" : "paginationHide"),
            o.toggleClass(e.params.pagination.hiddenClass);
        }
      }),
      Object.assign(e.pagination, {
        render: h,
        update: d,
        init: p,
        destroy: u,
      });
  }
  function dt() {
    if (
      ((function () {
        let t = document.querySelectorAll(
          '[class*="__swiper"]:not(.swiper-wrapper)'
        );
        t &&
          t.forEach((t) => {
            t.parentElement.classList.add("swiper"),
              t.classList.add("swiper-wrapper");
            for (const e of t.children) e.classList.add("swiper-slide");
          });
      })(),
      document.querySelector(".mainSlider"))
    ) {
      new ot(".mainSlider", {
        modules: [rt, ct],
        observer: !0,
        observeParents: !0,
        loop: !0,
        slidesPerView: 2.2,
        spaceBetween: 20,
        speed: 800,
        navigation: { nextEl: ".main-slider__arrow" },
        breakpoints: {
          320: { slidesPerView: 1, autoHeight: !0, spaceBetween: 5 },
          768: { slidesPerView: 1.7, spaceBetween: 20 },
          1200: { slidesPerView: 2.2 },
        },
        pagination: { el: ".main-slider__dotts", clickable: !0 },
      });
    }
  }
  window.addEventListener("load", function (t) {
    dt();
  });
  const ht = (t) =>
      "object" == typeof t &&
      null !== t &&
      t.constructor === Object &&
      "[object Object]" === Object.prototype.toString.call(t),
    pt = (...t) => {
      let e = !1;
      "boolean" == typeof t[0] && (e = t.shift());
      let i = t[0];
      if (!i || "object" != typeof i)
        throw new Error("extendee must be an object");
      const s = t.slice(1),
        n = s.length;
      for (let t = 0; t < n; t++) {
        const n = s[t];
        for (let t in n)
          if (n.hasOwnProperty(t)) {
            const s = n[t];
            if (e && (Array.isArray(s) || ht(s))) {
              const e = Array.isArray(s) ? [] : {};
              i[t] = pt(!0, i.hasOwnProperty(t) ? i[t] : e, s);
            } else i[t] = s;
          }
      }
      return i;
    },
    ut = (t, e = 1e4) => (
      (t = parseFloat(t) || 0), Math.round((t + Number.EPSILON) * e) / e
    ),
    ft = function (t) {
      return (
        !!(
          t &&
          "object" == typeof t &&
          t instanceof Element &&
          t !== document.body
        ) &&
        !t.__Panzoom &&
        ((function (t) {
          const e = getComputedStyle(t)["overflow-y"],
            i = getComputedStyle(t)["overflow-x"],
            s =
              ("scroll" === e || "auto" === e) &&
              Math.abs(t.scrollHeight - t.clientHeight) > 1,
            n =
              ("scroll" === i || "auto" === i) &&
              Math.abs(t.scrollWidth - t.clientWidth) > 1;
          return s || n;
        })(t)
          ? t
          : ft(t.parentNode))
      );
    },
    mt =
      ("undefined" != typeof window && window.ResizeObserver) ||
      class {
        constructor(t) {
          (this.observables = []),
            (this.boundCheck = this.check.bind(this)),
            this.boundCheck(),
            (this.callback = t);
        }
        observe(t) {
          if (this.observables.some((e) => e.el === t)) return;
          const e = {
            el: t,
            size: { height: t.clientHeight, width: t.clientWidth },
          };
          this.observables.push(e);
        }
        unobserve(t) {
          this.observables = this.observables.filter((e) => e.el !== t);
        }
        disconnect() {
          this.observables = [];
        }
        check() {
          const t = this.observables
            .filter((t) => {
              const e = t.el.clientHeight,
                i = t.el.clientWidth;
              if (t.size.height !== e || t.size.width !== i)
                return (t.size.height = e), (t.size.width = i), !0;
            })
            .map((t) => t.el);
          t.length > 0 && this.callback(t),
            window.requestAnimationFrame(this.boundCheck);
        }
      };
  class gt {
    constructor(t) {
      (this.id = self.Touch && t instanceof Touch ? t.identifier : -1),
        (this.pageX = t.pageX),
        (this.pageY = t.pageY),
        (this.clientX = t.clientX),
        (this.clientY = t.clientY);
    }
  }
  const vt = (t, e) =>
      e
        ? Math.sqrt((e.clientX - t.clientX) ** 2 + (e.clientY - t.clientY) ** 2)
        : 0,
    bt = (t, e) =>
      e
        ? {
            clientX: (t.clientX + e.clientX) / 2,
            clientY: (t.clientY + e.clientY) / 2,
          }
        : t;
  class yt {
    constructor(
      t,
      { start: e = () => !0, move: i = () => {}, end: s = () => {} } = {}
    ) {
      (this._element = t),
        (this.startPointers = []),
        (this.currentPointers = []),
        (this._pointerStart = (t) => {
          if (t.buttons > 0 && 0 !== t.button) return;
          const e = new gt(t);
          this.currentPointers.some((t) => t.id === e.id) ||
            (this._triggerPointerStart(e, t) &&
              (window.addEventListener("mousemove", this._move),
              window.addEventListener("mouseup", this._pointerEnd)));
        }),
        (this._touchStart = (t) => {
          for (const e of Array.from(t.changedTouches || []))
            this._triggerPointerStart(new gt(e), t);
        }),
        (this._move = (t) => {
          const e = this.currentPointers.slice(),
            i = ((t) => "changedTouches" in t)(t)
              ? Array.from(t.changedTouches).map((t) => new gt(t))
              : [new gt(t)];
          for (const t of i) {
            const e = this.currentPointers.findIndex((e) => e.id === t.id);
            e < 0 || (this.currentPointers[e] = t);
          }
          this._moveCallback(e, this.currentPointers.slice(), t);
        }),
        (this._triggerPointerEnd = (t, e) => {
          const i = this.currentPointers.findIndex((e) => e.id === t.id);
          return !(
            i < 0 ||
            (this.currentPointers.splice(i, 1),
            this.startPointers.splice(i, 1),
            this._endCallback(t, e),
            0)
          );
        }),
        (this._pointerEnd = (t) => {
          (t.buttons > 0 && 0 !== t.button) ||
            (this._triggerPointerEnd(new gt(t), t) &&
              (window.removeEventListener("mousemove", this._move, {
                passive: !1,
              }),
              window.removeEventListener("mouseup", this._pointerEnd, {
                passive: !1,
              })));
        }),
        (this._touchEnd = (t) => {
          for (const e of Array.from(t.changedTouches || []))
            this._triggerPointerEnd(new gt(e), t);
        }),
        (this._startCallback = e),
        (this._moveCallback = i),
        (this._endCallback = s),
        this._element.addEventListener("mousedown", this._pointerStart, {
          passive: !1,
        }),
        this._element.addEventListener("touchstart", this._touchStart, {
          passive: !1,
        }),
        this._element.addEventListener("touchmove", this._move, {
          passive: !1,
        }),
        this._element.addEventListener("touchend", this._touchEnd),
        this._element.addEventListener("touchcancel", this._touchEnd);
    }
    stop() {
      this._element.removeEventListener("mousedown", this._pointerStart, {
        passive: !1,
      }),
        this._element.removeEventListener("touchstart", this._touchStart, {
          passive: !1,
        }),
        this._element.removeEventListener("touchmove", this._move, {
          passive: !1,
        }),
        this._element.removeEventListener("touchend", this._touchEnd),
        this._element.removeEventListener("touchcancel", this._touchEnd),
        window.removeEventListener("mousemove", this._move),
        window.removeEventListener("mouseup", this._pointerEnd);
    }
    _triggerPointerStart(t, e) {
      return (
        !!this._startCallback(t, e) &&
        (this.currentPointers.push(t), this.startPointers.push(t), !0)
      );
    }
  }
  class xt {
    constructor(t = {}) {
      (this.options = pt(!0, {}, t)), (this.plugins = []), (this.events = {});
      for (const t of ["on", "once"])
        for (const e of Object.entries(this.options[t] || {})) this[t](...e);
    }
    option(t, e, ...i) {
      let s =
        ((n = t = String(t)),
        (o = this.options),
        n.split(".").reduce(function (t, e) {
          return t && t[e];
        }, o));
      var n, o;
      return (
        "function" == typeof s && (s = s.call(this, this, ...i)),
        void 0 === s ? e : s
      );
    }
    localize(t, e = []) {
      return (t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, (t, i, s) => {
        let n = "";
        s
          ? (n = this.option(
              `${i[0] + i.toLowerCase().substring(1)}.l10n.${s}`
            ))
          : i && (n = this.option(`l10n.${i}`)),
          n || (n = t);
        for (let t = 0; t < e.length; t++) n = n.split(e[t][0]).join(e[t][1]);
        return n;
      })).replace(/\{\{(.*)\}\}/, (t, e) => e);
    }
    on(t, e) {
      if (ht(t)) {
        for (const e of Object.entries(t)) this.on(...e);
        return this;
      }
      return (
        String(t)
          .split(" ")
          .forEach((t) => {
            const i = (this.events[t] = this.events[t] || []);
            -1 == i.indexOf(e) && i.push(e);
          }),
        this
      );
    }
    once(t, e) {
      if (ht(t)) {
        for (const e of Object.entries(t)) this.once(...e);
        return this;
      }
      return (
        String(t)
          .split(" ")
          .forEach((t) => {
            const i = (...s) => {
              this.off(t, i), e.call(this, this, ...s);
            };
            (i._ = e), this.on(t, i);
          }),
        this
      );
    }
    off(t, e) {
      if (!ht(t))
        return (
          t.split(" ").forEach((t) => {
            const i = this.events[t];
            if (!i || !i.length) return this;
            let s = -1;
            for (let t = 0, n = i.length; t < n; t++) {
              const n = i[t];
              if (n && (n === e || n._ === e)) {
                s = t;
                break;
              }
            }
            -1 != s && i.splice(s, 1);
          }),
          this
        );
      for (const e of Object.entries(t)) this.off(...e);
    }
    trigger(t, ...e) {
      for (const i of [...(this.events[t] || [])].slice())
        if (i && !1 === i.call(this, this, ...e)) return !1;
      for (const i of [...(this.events["*"] || [])].slice())
        if (i && !1 === i.call(this, t, this, ...e)) return !1;
      return !0;
    }
    attachPlugins(t) {
      const e = {};
      for (const [i, s] of Object.entries(t || {}))
        !1 === this.options[i] ||
          this.plugins[i] ||
          ((this.options[i] = pt({}, s.defaults || {}, this.options[i])),
          (e[i] = new s(this)));
      for (const [t, i] of Object.entries(e)) i.attach(this);
      return (this.plugins = Object.assign({}, this.plugins, e)), this;
    }
    detachPlugins() {
      for (const t in this.plugins) {
        let e;
        (e = this.plugins[t]) &&
          "function" == typeof e.detach &&
          e.detach(this);
      }
      return (this.plugins = {}), this;
    }
  }
  const wt = {
    touch: !0,
    zoom: !0,
    pinchToZoom: !0,
    panOnlyZoomed: !1,
    lockAxis: !1,
    friction: 0.64,
    decelFriction: 0.88,
    zoomFriction: 0.74,
    bounceForce: 0.2,
    baseScale: 1,
    minScale: 1,
    maxScale: 2,
    step: 0.5,
    textSelection: !1,
    click: "toggleZoom",
    wheel: "zoom",
    wheelFactor: 42,
    wheelLimit: 5,
    draggableClass: "is-draggable",
    draggingClass: "is-dragging",
    ratio: 1,
  };
  class Ct extends xt {
    constructor(t, e = {}) {
      super(pt(!0, {}, wt, e)), (this.state = "init"), (this.$container = t);
      for (const t of ["onLoad", "onWheel", "onClick"])
        this[t] = this[t].bind(this);
      this.initLayout(),
        this.resetValues(),
        this.attachPlugins(Ct.Plugins),
        this.trigger("init"),
        this.updateMetrics(),
        this.attachEvents(),
        this.trigger("ready"),
        !1 === this.option("centerOnStart")
          ? (this.state = "ready")
          : this.panTo({ friction: 0 }),
        (t.__Panzoom = this);
    }
    initLayout() {
      const t = this.$container;
      if (!(t instanceof HTMLElement))
        throw new Error("Panzoom: Container not found");
      const e = this.option("content") || t.querySelector(".panzoom__content");
      if (!e) throw new Error("Panzoom: Content not found");
      this.$content = e;
      let i = this.option("viewport") || t.querySelector(".panzoom__viewport");
      i ||
        !1 === this.option("wrapInner") ||
        ((i = document.createElement("div")),
        i.classList.add("panzoom__viewport"),
        i.append(...t.childNodes),
        t.appendChild(i)),
        (this.$viewport = i || e.parentNode);
    }
    resetValues() {
      (this.updateRate = this.option(
        "updateRate",
        /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 250 : 24
      )),
        (this.container = { width: 0, height: 0 }),
        (this.viewport = { width: 0, height: 0 }),
        (this.content = {
          origWidth: 0,
          origHeight: 0,
          width: 0,
          height: 0,
          x: this.option("x", 0),
          y: this.option("y", 0),
          scale: this.option("baseScale"),
        }),
        (this.transform = { x: 0, y: 0, scale: 1 }),
        this.resetDragPosition();
    }
    onLoad(t) {
      this.updateMetrics(),
        this.panTo({ scale: this.option("baseScale"), friction: 0 }),
        this.trigger("load", t);
    }
    onClick(t) {
      if (t.defaultPrevented) return;
      if (
        this.option("textSelection") &&
        window.getSelection().toString().length
      )
        return void t.stopPropagation();
      const e = this.$content.getClientRects()[0];
      if (
        "ready" !== this.state &&
        (this.dragPosition.midPoint ||
          Math.abs(e.top - this.dragStart.rect.top) > 1 ||
          Math.abs(e.left - this.dragStart.rect.left) > 1)
      )
        return t.preventDefault(), void t.stopPropagation();
      !1 !== this.trigger("click", t) &&
        this.option("zoom") &&
        "toggleZoom" === this.option("click") &&
        (t.preventDefault(), t.stopPropagation(), this.zoomWithClick(t));
    }
    onWheel(t) {
      !1 !== this.trigger("wheel", t) &&
        this.option("zoom") &&
        this.option("wheel") &&
        this.zoomWithWheel(t);
    }
    zoomWithWheel(t) {
      void 0 === this.changedDelta && (this.changedDelta = 0);
      const e = Math.max(
          -1,
          Math.min(1, -t.deltaY || -t.deltaX || t.wheelDelta || -t.detail)
        ),
        i = this.content.scale;
      let s = (i * (100 + e * this.option("wheelFactor"))) / 100;
      if (
        ((e < 0 && Math.abs(i - this.option("minScale")) < 0.01) ||
        (e > 0 && Math.abs(i - this.option("maxScale")) < 0.01)
          ? ((this.changedDelta += Math.abs(e)), (s = i))
          : ((this.changedDelta = 0),
            (s = Math.max(
              Math.min(s, this.option("maxScale")),
              this.option("minScale")
            ))),
        this.changedDelta > this.option("wheelLimit"))
      )
        return;
      if ((t.preventDefault(), s === i)) return;
      const n = this.$content.getBoundingClientRect(),
        o = t.clientX - n.left,
        a = t.clientY - n.top;
      this.zoomTo(s, { x: o, y: a });
    }
    zoomWithClick(t) {
      const e = this.$content.getClientRects()[0],
        i = t.clientX - e.left,
        s = t.clientY - e.top;
      this.toggleZoom({ x: i, y: s });
    }
    attachEvents() {
      this.$content.addEventListener("load", this.onLoad),
        this.$container.addEventListener("wheel", this.onWheel, {
          passive: !1,
        }),
        this.$container.addEventListener("click", this.onClick, {
          passive: !1,
        }),
        this.initObserver();
      const t = new yt(this.$container, {
        start: (e, i) => {
          if (!this.option("touch")) return !1;
          if (this.velocity.scale < 0) return !1;
          const s = i.composedPath()[0];
          if (!t.currentPointers.length) {
            if (
              -1 !==
              [
                "BUTTON",
                "TEXTAREA",
                "OPTION",
                "INPUT",
                "SELECT",
                "VIDEO",
              ].indexOf(s.nodeName)
            )
              return !1;
            if (
              this.option("textSelection") &&
              ((t, e, i) => {
                const s = t.childNodes,
                  n = document.createRange();
                for (let t = 0; t < s.length; t++) {
                  const o = s[t];
                  if (o.nodeType !== Node.TEXT_NODE) continue;
                  n.selectNodeContents(o);
                  const a = n.getBoundingClientRect();
                  if (
                    e >= a.left &&
                    i >= a.top &&
                    e <= a.right &&
                    i <= a.bottom
                  )
                    return o;
                }
                return !1;
              })(s, e.clientX, e.clientY)
            )
              return !1;
          }
          return (
            !ft(s) &&
            !1 !== this.trigger("touchStart", i) &&
            ("mousedown" === i.type && i.preventDefault(),
            (this.state = "pointerdown"),
            this.resetDragPosition(),
            (this.dragPosition.midPoint = null),
            (this.dragPosition.time = Date.now()),
            !0)
          );
        },
        move: (e, i, s) => {
          if ("pointerdown" !== this.state) return;
          if (!1 === this.trigger("touchMove", s))
            return void s.preventDefault();
          if (
            i.length < 2 &&
            !0 === this.option("panOnlyZoomed") &&
            this.content.width <= this.viewport.width &&
            this.content.height <= this.viewport.height &&
            this.transform.scale <= this.option("baseScale")
          )
            return;
          if (
            i.length > 1 &&
            (!this.option("zoom") || !1 === this.option("pinchToZoom"))
          )
            return;
          const n = bt(e[0], e[1]),
            o = bt(i[0], i[1]),
            a = o.clientX - n.clientX,
            r = o.clientY - n.clientY,
            l = vt(e[0], e[1]),
            c = vt(i[0], i[1]),
            d = l && c ? c / l : 1;
          (this.dragOffset.x += a),
            (this.dragOffset.y += r),
            (this.dragOffset.scale *= d),
            (this.dragOffset.time = Date.now() - this.dragPosition.time);
          const h = 1 === this.dragStart.scale && this.option("lockAxis");
          if (h && !this.lockAxis) {
            if (
              Math.abs(this.dragOffset.x) < 6 &&
              Math.abs(this.dragOffset.y) < 6
            )
              return void s.preventDefault();
            const t = Math.abs(
              (180 * Math.atan2(this.dragOffset.y, this.dragOffset.x)) / Math.PI
            );
            this.lockAxis = t > 45 && t < 135 ? "y" : "x";
          }
          if ("xy" === h || "y" !== this.lockAxis) {
            if (
              (s.preventDefault(),
              s.stopPropagation(),
              s.stopImmediatePropagation(),
              this.lockAxis &&
                (this.dragOffset["x" === this.lockAxis ? "y" : "x"] = 0),
              this.$container.classList.add(this.option("draggingClass")),
              (this.transform.scale === this.option("baseScale") &&
                "y" === this.lockAxis) ||
                (this.dragPosition.x = this.dragStart.x + this.dragOffset.x),
              (this.transform.scale === this.option("baseScale") &&
                "x" === this.lockAxis) ||
                (this.dragPosition.y = this.dragStart.y + this.dragOffset.y),
              (this.dragPosition.scale =
                this.dragStart.scale * this.dragOffset.scale),
              i.length > 1)
            ) {
              const e = bt(t.startPointers[0], t.startPointers[1]),
                i = e.clientX - this.dragStart.rect.x,
                s = e.clientY - this.dragStart.rect.y,
                { deltaX: n, deltaY: a } = this.getZoomDelta(
                  this.content.scale * this.dragOffset.scale,
                  i,
                  s
                );
              (this.dragPosition.x -= n),
                (this.dragPosition.y -= a),
                (this.dragPosition.midPoint = o);
            } else this.setDragResistance();
            (this.transform = {
              x: this.dragPosition.x,
              y: this.dragPosition.y,
              scale: this.dragPosition.scale,
            }),
              this.startAnimation();
          }
        },
        end: (e, i) => {
          if ("pointerdown" !== this.state) return;
          if (
            ((this._dragOffset = { ...this.dragOffset }),
            t.currentPointers.length)
          )
            return void this.resetDragPosition();
          if (
            ((this.state = "decel"),
            (this.friction = this.option("decelFriction")),
            this.recalculateTransform(),
            this.$container.classList.remove(this.option("draggingClass")),
            !1 === this.trigger("touchEnd", i))
          )
            return;
          if ("decel" !== this.state) return;
          const s = this.option("minScale");
          if (this.transform.scale < s)
            return void this.zoomTo(s, { friction: 0.64 });
          const n = this.option("maxScale");
          if (this.transform.scale - n > 0.01) {
            const t = this.dragPosition.midPoint || e,
              i = this.$content.getClientRects()[0];
            this.zoomTo(n, {
              friction: 0.64,
              x: t.clientX - i.left,
              y: t.clientY - i.top,
            });
          }
        },
      });
      this.pointerTracker = t;
    }
    initObserver() {
      this.resizeObserver ||
        ((this.resizeObserver = new mt(() => {
          this.updateTimer ||
            (this.updateTimer = setTimeout(() => {
              const t = this.$container.getBoundingClientRect();
              t.width && t.height
                ? ((Math.abs(t.width - this.container.width) > 1 ||
                    Math.abs(t.height - this.container.height) > 1) &&
                    (this.isAnimating() && this.endAnimation(!0),
                    this.updateMetrics(),
                    this.panTo({
                      x: this.content.x,
                      y: this.content.y,
                      scale: this.option("baseScale"),
                      friction: 0,
                    })),
                  (this.updateTimer = null))
                : (this.updateTimer = null);
            }, this.updateRate));
        })),
        this.resizeObserver.observe(this.$container));
    }
    resetDragPosition() {
      (this.lockAxis = null),
        (this.friction = this.option("friction")),
        (this.velocity = { x: 0, y: 0, scale: 0 });
      const { x: t, y: e, scale: i } = this.content;
      (this.dragStart = {
        rect: this.$content.getBoundingClientRect(),
        x: t,
        y: e,
        scale: i,
      }),
        (this.dragPosition = { ...this.dragPosition, x: t, y: e, scale: i }),
        (this.dragOffset = { x: 0, y: 0, scale: 1, time: 0 });
    }
    updateMetrics(t) {
      !0 !== t && this.trigger("beforeUpdate");
      const e = this.$container,
        i = this.$content,
        s = this.$viewport,
        n = i instanceof HTMLImageElement,
        o = this.option("zoom"),
        a = this.option("resizeParent", o);
      let r = this.option("width"),
        l = this.option("height"),
        c =
          r ||
          ((d = i),
          Math.max(
            parseFloat(d.naturalWidth || 0),
            parseFloat(
              (d.width && d.width.baseVal && d.width.baseVal.value) || 0
            ),
            parseFloat(d.offsetWidth || 0),
            parseFloat(d.scrollWidth || 0)
          ));
      var d;
      let h =
        l ||
        ((t) =>
          Math.max(
            parseFloat(t.naturalHeight || 0),
            parseFloat(
              (t.height && t.height.baseVal && t.height.baseVal.value) || 0
            ),
            parseFloat(t.offsetHeight || 0),
            parseFloat(t.scrollHeight || 0)
          ))(i);
      Object.assign(i.style, {
        width: r ? `${r}px` : "",
        height: l ? `${l}px` : "",
        maxWidth: "",
        maxHeight: "",
      }),
        a && Object.assign(s.style, { width: "", height: "" });
      const p = this.option("ratio");
      (c = ut(c * p)), (h = ut(h * p)), (r = c), (l = h);
      const u = i.getBoundingClientRect(),
        f = s.getBoundingClientRect(),
        m = s == e ? f : e.getBoundingClientRect();
      let g = Math.max(s.offsetWidth, ut(f.width)),
        v = Math.max(s.offsetHeight, ut(f.height)),
        b = window.getComputedStyle(s);
      if (
        ((g -= parseFloat(b.paddingLeft) + parseFloat(b.paddingRight)),
        (v -= parseFloat(b.paddingTop) + parseFloat(b.paddingBottom)),
        (this.viewport.width = g),
        (this.viewport.height = v),
        o)
      ) {
        if (Math.abs(c - u.width) > 0.1 || Math.abs(h - u.height) > 0.1) {
          const t = ((t, e, i, s) => {
            const n = Math.min(i / t || 0, s / e);
            return { width: t * n || 0, height: e * n || 0 };
          })(c, h, Math.min(c, u.width), Math.min(h, u.height));
          (r = ut(t.width)), (l = ut(t.height));
        }
        Object.assign(i.style, {
          width: `${r}px`,
          height: `${l}px`,
          transform: "",
        });
      }
      if (
        (a &&
          (Object.assign(s.style, { width: `${r}px`, height: `${l}px` }),
          (this.viewport = { ...this.viewport, width: r, height: l })),
        n && o && "function" != typeof this.options.maxScale)
      ) {
        const t = this.option("maxScale");
        this.options.maxScale = function () {
          return this.content.origWidth > 0 && this.content.fitWidth > 0
            ? this.content.origWidth / this.content.fitWidth
            : t;
        };
      }
      (this.content = {
        ...this.content,
        origWidth: c,
        origHeight: h,
        fitWidth: r,
        fitHeight: l,
        width: r,
        height: l,
        scale: 1,
        isZoomable: o,
      }),
        (this.container = { width: m.width, height: m.height }),
        !0 !== t && this.trigger("afterUpdate");
    }
    zoomIn(t) {
      this.zoomTo(this.content.scale + (t || this.option("step")));
    }
    zoomOut(t) {
      this.zoomTo(this.content.scale - (t || this.option("step")));
    }
    toggleZoom(t = {}) {
      const e = this.option("maxScale"),
        i = this.option("baseScale"),
        s = this.content.scale > i + 0.5 * (e - i) ? i : e;
      this.zoomTo(s, t);
    }
    zoomTo(t = this.option("baseScale"), { x: e = null, y: i = null } = {}) {
      t = Math.max(
        Math.min(t, this.option("maxScale")),
        this.option("minScale")
      );
      const s = ut(
        this.content.scale / (this.content.width / this.content.fitWidth),
        1e7
      );
      null === e && (e = this.content.width * s * 0.5),
        null === i && (i = this.content.height * s * 0.5);
      const { deltaX: n, deltaY: o } = this.getZoomDelta(t, e, i);
      (e = this.content.x - n),
        (i = this.content.y - o),
        this.panTo({
          x: e,
          y: i,
          scale: t,
          friction: this.option("zoomFriction"),
        });
    }
    getZoomDelta(t, e = 0, i = 0) {
      const s = this.content.fitWidth * this.content.scale,
        n = this.content.fitHeight * this.content.scale,
        o = e > 0 && s ? e / s : 0,
        a = i > 0 && n ? i / n : 0;
      return {
        deltaX: (this.content.fitWidth * t - s) * o,
        deltaY: (this.content.fitHeight * t - n) * a,
      };
    }
    panTo({
      x: t = this.content.x,
      y: e = this.content.y,
      scale: i,
      friction: s = this.option("friction"),
      ignoreBounds: n = !1,
    } = {}) {
      if (((i = i || this.content.scale || 1), !n)) {
        const { boundX: s, boundY: n } = this.getBounds(i);
        s && (t = Math.max(Math.min(t, s.to), s.from)),
          n && (e = Math.max(Math.min(e, n.to), n.from));
      }
      (this.friction = s),
        (this.transform = { ...this.transform, x: t, y: e, scale: i }),
        s
          ? ((this.state = "panning"),
            (this.velocity = {
              x: (1 / this.friction - 1) * (t - this.content.x),
              y: (1 / this.friction - 1) * (e - this.content.y),
              scale: (1 / this.friction - 1) * (i - this.content.scale),
            }),
            this.startAnimation())
          : this.endAnimation();
    }
    startAnimation() {
      this.rAF
        ? cancelAnimationFrame(this.rAF)
        : this.trigger("startAnimation"),
        (this.rAF = requestAnimationFrame(() => this.animate()));
    }
    animate() {
      if (
        (this.setEdgeForce(),
        this.setDragForce(),
        (this.velocity.x *= this.friction),
        (this.velocity.y *= this.friction),
        (this.velocity.scale *= this.friction),
        (this.content.x += this.velocity.x),
        (this.content.y += this.velocity.y),
        (this.content.scale += this.velocity.scale),
        this.isAnimating())
      )
        this.setTransform();
      else if ("pointerdown" !== this.state) return void this.endAnimation();
      this.rAF = requestAnimationFrame(() => this.animate());
    }
    getBounds(t) {
      let e = this.boundX,
        i = this.boundY;
      if (void 0 !== e && void 0 !== i) return { boundX: e, boundY: i };
      (e = { from: 0, to: 0 }),
        (i = { from: 0, to: 0 }),
        (t = t || this.transform.scale);
      const s = this.content.fitWidth * t,
        n = this.content.fitHeight * t,
        o = this.viewport.width,
        a = this.viewport.height;
      if (s < o) {
        const t = ut(0.5 * (o - s));
        (e.from = t), (e.to = t);
      } else e.from = ut(o - s);
      if (n < a) {
        const t = 0.5 * (a - n);
        (i.from = t), (i.to = t);
      } else i.from = ut(a - n);
      return { boundX: e, boundY: i };
    }
    setEdgeForce() {
      if ("decel" !== this.state) return;
      const t = this.option("bounceForce"),
        { boundX: e, boundY: i } = this.getBounds(
          Math.max(this.transform.scale, this.content.scale)
        );
      let s, n, o, a;
      if (
        (e && ((s = this.content.x < e.from), (n = this.content.x > e.to)),
        i && ((o = this.content.y < i.from), (a = this.content.y > i.to)),
        s || n)
      ) {
        let i = ((s ? e.from : e.to) - this.content.x) * t;
        const n = this.content.x + (this.velocity.x + i) / this.friction;
        n >= e.from && n <= e.to && (i += this.velocity.x),
          (this.velocity.x = i),
          this.recalculateTransform();
      }
      if (o || a) {
        let e = ((o ? i.from : i.to) - this.content.y) * t;
        const s = this.content.y + (e + this.velocity.y) / this.friction;
        s >= i.from && s <= i.to && (e += this.velocity.y),
          (this.velocity.y = e),
          this.recalculateTransform();
      }
    }
    setDragResistance() {
      if ("pointerdown" !== this.state) return;
      const { boundX: t, boundY: e } = this.getBounds(this.dragPosition.scale);
      let i, s, n, o;
      if (
        (t &&
          ((i = this.dragPosition.x < t.from),
          (s = this.dragPosition.x > t.to)),
        e &&
          ((n = this.dragPosition.y < e.from),
          (o = this.dragPosition.y > e.to)),
        (i || s) && (!i || !s))
      ) {
        const e = i ? t.from : t.to,
          s = e - this.dragPosition.x;
        this.dragPosition.x = e - 0.3 * s;
      }
      if ((n || o) && (!n || !o)) {
        const t = n ? e.from : e.to,
          i = t - this.dragPosition.y;
        this.dragPosition.y = t - 0.3 * i;
      }
    }
    setDragForce() {
      "pointerdown" === this.state &&
        ((this.velocity.x = this.dragPosition.x - this.content.x),
        (this.velocity.y = this.dragPosition.y - this.content.y),
        (this.velocity.scale = this.dragPosition.scale - this.content.scale));
    }
    recalculateTransform() {
      (this.transform.x =
        this.content.x + this.velocity.x / (1 / this.friction - 1)),
        (this.transform.y =
          this.content.y + this.velocity.y / (1 / this.friction - 1)),
        (this.transform.scale =
          this.content.scale + this.velocity.scale / (1 / this.friction - 1));
    }
    isAnimating() {
      return !(
        !this.friction ||
        !(
          Math.abs(this.velocity.x) > 0.05 ||
          Math.abs(this.velocity.y) > 0.05 ||
          Math.abs(this.velocity.scale) > 0.05
        )
      );
    }
    setTransform(t) {
      let e, i, s;
      if (
        (t
          ? ((e = ut(this.transform.x)),
            (i = ut(this.transform.y)),
            (s = this.transform.scale),
            (this.content = { ...this.content, x: e, y: i, scale: s }))
          : ((e = ut(this.content.x)),
            (i = ut(this.content.y)),
            (s =
              this.content.scale /
              (this.content.width / this.content.fitWidth)),
            (this.content = { ...this.content, x: e, y: i })),
        this.trigger("beforeTransform"),
        (e = ut(this.content.x)),
        (i = ut(this.content.y)),
        t && this.option("zoom"))
      ) {
        let t, n;
        (t = ut(this.content.fitWidth * s)),
          (n = ut(this.content.fitHeight * s)),
          (this.content.width = t),
          (this.content.height = n),
          (this.transform = {
            ...this.transform,
            width: t,
            height: n,
            scale: s,
          }),
          Object.assign(this.$content.style, {
            width: `${t}px`,
            height: `${n}px`,
            maxWidth: "none",
            maxHeight: "none",
            transform: `translate3d(${e}px, ${i}px, 0) scale(1)`,
          });
      } else
        this.$content.style.transform = `translate3d(${e}px, ${i}px, 0) scale(${s})`;
      this.trigger("afterTransform");
    }
    endAnimation(t) {
      cancelAnimationFrame(this.rAF),
        (this.rAF = null),
        (this.velocity = { x: 0, y: 0, scale: 0 }),
        this.setTransform(!0),
        (this.state = "ready"),
        this.handleCursor(),
        !0 !== t && this.trigger("endAnimation");
    }
    handleCursor() {
      const t = this.option("draggableClass");
      t &&
        this.option("touch") &&
        (1 == this.option("panOnlyZoomed") &&
        this.content.width <= this.viewport.width &&
        this.content.height <= this.viewport.height &&
        this.transform.scale <= this.option("baseScale")
          ? this.$container.classList.remove(t)
          : this.$container.classList.add(t));
    }
    detachEvents() {
      this.$content.removeEventListener("load", this.onLoad),
        this.$container.removeEventListener("wheel", this.onWheel, {
          passive: !1,
        }),
        this.$container.removeEventListener("click", this.onClick, {
          passive: !1,
        }),
        this.pointerTracker &&
          (this.pointerTracker.stop(), (this.pointerTracker = null)),
        this.resizeObserver &&
          (this.resizeObserver.disconnect(), (this.resizeObserver = null));
    }
    destroy() {
      "destroy" !== this.state &&
        ((this.state = "destroy"),
        clearTimeout(this.updateTimer),
        (this.updateTimer = null),
        cancelAnimationFrame(this.rAF),
        (this.rAF = null),
        this.detachEvents(),
        this.detachPlugins(),
        this.resetDragPosition());
    }
  }
  (Ct.version = "4.0.27"), (Ct.Plugins = {});
  const St = (t, e) => {
    let i = 0;
    return function (...s) {
      const n = new Date().getTime();
      if (!(n - i < e)) return (i = n), t(...s);
    };
  };
  class Et {
    constructor(t) {
      (this.$container = null),
        (this.$prev = null),
        (this.$next = null),
        (this.carousel = t),
        (this.onRefresh = this.onRefresh.bind(this));
    }
    option(t) {
      return this.carousel.option(`Navigation.${t}`);
    }
    createButton(t) {
      const e = document.createElement("button");
      e.setAttribute("title", this.carousel.localize(`{{${t.toUpperCase()}}}`));
      const i =
        this.option("classNames.button") + " " + this.option(`classNames.${t}`);
      return (
        e.classList.add(...i.split(" ")),
        e.setAttribute("tabindex", "0"),
        (e.innerHTML = this.carousel.localize(this.option(`${t}Tpl`))),
        e.addEventListener("click", (e) => {
          e.preventDefault(),
            e.stopPropagation(),
            this.carousel["slide" + ("next" === t ? "Next" : "Prev")]();
        }),
        e
      );
    }
    build() {
      this.$container ||
        ((this.$container = document.createElement("div")),
        this.$container.classList.add(
          ...this.option("classNames.main").split(" ")
        ),
        this.carousel.$container.appendChild(this.$container)),
        this.$next ||
          ((this.$next = this.createButton("next")),
          this.$container.appendChild(this.$next)),
        this.$prev ||
          ((this.$prev = this.createButton("prev")),
          this.$container.appendChild(this.$prev));
    }
    onRefresh() {
      const t = this.carousel.pages.length;
      t <= 1 ||
      (t > 1 &&
        this.carousel.elemDimWidth < this.carousel.wrapDimWidth &&
        !Number.isInteger(this.carousel.option("slidesPerPage")))
        ? this.cleanup()
        : (this.build(),
          this.$prev.removeAttribute("disabled"),
          this.$next.removeAttribute("disabled"),
          this.carousel.option("infiniteX", this.carousel.option("infinite")) ||
            (this.carousel.page <= 0 && this.$prev.setAttribute("disabled", ""),
            this.carousel.page >= t - 1 &&
              this.$next.setAttribute("disabled", "")));
    }
    cleanup() {
      this.$prev && this.$prev.remove(),
        (this.$prev = null),
        this.$next && this.$next.remove(),
        (this.$next = null),
        this.$container && this.$container.remove(),
        (this.$container = null);
    }
    attach() {
      this.carousel.on("refresh change", this.onRefresh);
    }
    detach() {
      this.carousel.off("refresh change", this.onRefresh), this.cleanup();
    }
  }
  Et.defaults = {
    prevTpl:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
    nextTpl:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
    classNames: {
      main: "carousel__nav",
      button: "carousel__button",
      next: "is-next",
      prev: "is-prev",
    },
  };
  class Tt {
    constructor(t) {
      (this.carousel = t),
        (this.selectedIndex = null),
        (this.friction = 0),
        (this.onNavReady = this.onNavReady.bind(this)),
        (this.onNavClick = this.onNavClick.bind(this)),
        (this.onNavCreateSlide = this.onNavCreateSlide.bind(this)),
        (this.onTargetChange = this.onTargetChange.bind(this));
    }
    addAsTargetFor(t) {
      (this.target = this.carousel), (this.nav = t), this.attachEvents();
    }
    addAsNavFor(t) {
      (this.target = t), (this.nav = this.carousel), this.attachEvents();
    }
    attachEvents() {
      (this.nav.options.initialSlide = this.target.options.initialPage),
        this.nav.on("ready", this.onNavReady),
        this.nav.on("createSlide", this.onNavCreateSlide),
        this.nav.on("Panzoom.click", this.onNavClick),
        this.target.on("change", this.onTargetChange),
        this.target.on("Panzoom.afterUpdate", this.onTargetChange);
    }
    onNavReady() {
      this.onTargetChange(!0);
    }
    onNavClick(t, e, i) {
      const s = i.target.closest(".carousel__slide");
      if (!s) return;
      i.stopPropagation();
      const n = parseInt(s.dataset.index, 10),
        o = this.target.findPageForSlide(n);
      this.target.page !== o &&
        this.target.slideTo(o, { friction: this.friction }),
        this.markSelectedSlide(n);
    }
    onNavCreateSlide(t, e) {
      e.index === this.selectedIndex && this.markSelectedSlide(e.index);
    }
    onTargetChange() {
      const t = this.target.pages[this.target.page].indexes[0],
        e = this.nav.findPageForSlide(t);
      this.nav.slideTo(e), this.markSelectedSlide(t);
    }
    markSelectedSlide(t) {
      (this.selectedIndex = t),
        [...this.nav.slides].filter(
          (t) => t.$el && t.$el.classList.remove("is-nav-selected")
        );
      const e = this.nav.slides[t];
      e && e.$el && e.$el.classList.add("is-nav-selected");
    }
    attach(t) {
      const e = t.options.Sync;
      (e.target || e.nav) &&
        (e.target
          ? this.addAsNavFor(e.target)
          : e.nav && this.addAsTargetFor(e.nav),
        (this.friction = e.friction));
    }
    detach() {
      this.nav &&
        (this.nav.off("ready", this.onNavReady),
        this.nav.off("Panzoom.click", this.onNavClick),
        this.nav.off("createSlide", this.onNavCreateSlide)),
        this.target &&
          (this.target.off("Panzoom.afterUpdate", this.onTargetChange),
          this.target.off("change", this.onTargetChange));
    }
  }
  Tt.defaults = { friction: 0.92 };
  const $t = {
      Navigation: Et,
      Dots: class {
        constructor(t) {
          (this.carousel = t),
            (this.$list = null),
            (this.events = {
              change: this.onChange.bind(this),
              refresh: this.onRefresh.bind(this),
            });
        }
        buildList() {
          if (
            this.carousel.pages.length <
            this.carousel.option("Dots.minSlideCount")
          )
            return;
          const t = document.createElement("ol");
          return (
            t.classList.add("carousel__dots"),
            t.addEventListener("click", (t) => {
              if (!("page" in t.target.dataset)) return;
              t.preventDefault(), t.stopPropagation();
              const e = parseInt(t.target.dataset.page, 10),
                i = this.carousel;
              e !== i.page &&
                (i.pages.length < 3 && i.option("infinite")
                  ? i[0 == e ? "slidePrev" : "slideNext"]()
                  : i.slideTo(e));
            }),
            (this.$list = t),
            this.carousel.$container.appendChild(t),
            this.carousel.$container.classList.add("has-dots"),
            t
          );
        }
        removeList() {
          this.$list &&
            (this.$list.parentNode.removeChild(this.$list),
            (this.$list = null)),
            this.carousel.$container.classList.remove("has-dots");
        }
        rebuildDots() {
          let t = this.$list;
          const e = !!t,
            i = this.carousel.pages.length;
          if (i < 2) return void (e && this.removeList());
          e || (t = this.buildList());
          const s = this.$list.children.length;
          if (s > i)
            for (let t = i; t < s; t++)
              this.$list.removeChild(this.$list.lastChild);
          else {
            for (let t = s; t < i; t++) {
              const e = document.createElement("li");
              e.classList.add("carousel__dot"),
                (e.dataset.page = t),
                e.setAttribute("role", "button"),
                e.setAttribute("tabindex", "0"),
                e.setAttribute(
                  "title",
                  this.carousel.localize("{{GOTO}}", [["%d", t + 1]])
                ),
                e.addEventListener("keydown", (t) => {
                  const i = t.code;
                  let s;
                  "Enter" === i || "NumpadEnter" === i
                    ? (s = e)
                    : "ArrowRight" === i
                    ? (s = e.nextSibling)
                    : "ArrowLeft" === i && (s = e.previousSibling),
                    s && s.click();
                }),
                this.$list.appendChild(e);
            }
            this.setActiveDot();
          }
        }
        setActiveDot() {
          if (!this.$list) return;
          this.$list.childNodes.forEach((t) => {
            t.classList.remove("is-selected");
          });
          const t = this.$list.childNodes[this.carousel.page];
          t && t.classList.add("is-selected");
        }
        onChange() {
          this.setActiveDot();
        }
        onRefresh() {
          this.rebuildDots();
        }
        attach() {
          this.carousel.on(this.events);
        }
        detach() {
          this.removeList(),
            this.carousel.off(this.events),
            (this.carousel = null);
        }
      },
      Sync: Tt,
    },
    Pt = {
      slides: [],
      preload: 0,
      slidesPerPage: "auto",
      initialPage: null,
      initialSlide: null,
      friction: 0.92,
      center: !0,
      infinite: !0,
      fill: !0,
      dragFree: !1,
      prefix: "",
      classNames: {
        viewport: "carousel__viewport",
        track: "carousel__track",
        slide: "carousel__slide",
        slideSelected: "is-selected",
      },
      l10n: {
        NEXT: "Next slide",
        PREV: "Previous slide",
        GOTO: "Go to slide #%d",
      },
    };
  class Lt extends xt {
    constructor(t, e = {}) {
      if (
        (super((e = pt(!0, {}, Pt, e))),
        (this.state = "init"),
        (this.$container = t),
        !(this.$container instanceof HTMLElement))
      )
        throw new Error("No root element provided");
      (this.slideNext = St(this.slideNext.bind(this), 250)),
        (this.slidePrev = St(this.slidePrev.bind(this), 250)),
        this.init(),
        (t.__Carousel = this);
    }
    init() {
      (this.pages = []),
        (this.page = this.pageIndex = null),
        (this.prevPage = this.prevPageIndex = null),
        this.attachPlugins(Lt.Plugins),
        this.trigger("init"),
        this.initLayout(),
        this.initSlides(),
        this.updateMetrics(),
        this.$track &&
          this.pages.length &&
          (this.$track.style.transform = `translate3d(${
            -1 * this.pages[this.page].left
          }px, 0px, 0) scale(1)`),
        this.manageSlideVisiblity(),
        this.initPanzoom(),
        (this.state = "ready"),
        this.trigger("ready");
    }
    initLayout() {
      const t = this.option("prefix"),
        e = this.option("classNames");
      (this.$viewport =
        this.option("viewport") ||
        this.$container.querySelector(`.${t}${e.viewport}`)),
        this.$viewport ||
          ((this.$viewport = document.createElement("div")),
          this.$viewport.classList.add(...(t + e.viewport).split(" ")),
          this.$viewport.append(...this.$container.childNodes),
          this.$container.appendChild(this.$viewport)),
        (this.$track =
          this.option("track") ||
          this.$container.querySelector(`.${t}${e.track}`)),
        this.$track ||
          ((this.$track = document.createElement("div")),
          this.$track.classList.add(...(t + e.track).split(" ")),
          this.$track.append(...this.$viewport.childNodes),
          this.$viewport.appendChild(this.$track));
    }
    initSlides() {
      (this.slides = []),
        this.$viewport
          .querySelectorAll(
            `.${this.option("prefix")}${this.option("classNames.slide")}`
          )
          .forEach((t) => {
            const e = { $el: t, isDom: !0 };
            this.slides.push(e),
              this.trigger("createSlide", e, this.slides.length);
          }),
        Array.isArray(this.options.slides) &&
          (this.slides = pt(!0, [...this.slides], this.options.slides));
    }
    updateMetrics() {
      let t,
        e = 0,
        i = [];
      this.slides.forEach((s, n) => {
        const o = s.$el,
          a = s.isDom || !t ? this.getSlideMetrics(o) : t;
        (s.index = n),
          (s.width = a),
          (s.left = e),
          (t = a),
          (e += a),
          i.push(n);
      });
      let s = Math.max(
          this.$track.offsetWidth,
          ut(this.$track.getBoundingClientRect().width)
        ),
        n = getComputedStyle(this.$track);
      (s -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight)),
        (this.contentWidth = e),
        (this.viewportWidth = s);
      const o = [],
        a = this.option("slidesPerPage");
      if (Number.isInteger(a) && e > s)
        for (let t = 0; t < this.slides.length; t += a)
          o.push({
            indexes: i.slice(t, t + a),
            slides: this.slides.slice(t, t + a),
          });
      else {
        let t = 0,
          e = 0;
        for (let i = 0; i < this.slides.length; i += 1) {
          let n = this.slides[i];
          (!o.length || e + n.width > s) &&
            (o.push({ indexes: [], slides: [] }), (t = o.length - 1), (e = 0)),
            (e += n.width),
            o[t].indexes.push(i),
            o[t].slides.push(n);
        }
      }
      const r = this.option("center"),
        l = this.option("fill");
      o.forEach((t, i) => {
        (t.index = i),
          (t.width = t.slides.reduce((t, e) => t + e.width, 0)),
          (t.left = t.slides[0].left),
          r && (t.left += 0.5 * (s - t.width) * -1),
          l &&
            !this.option("infiniteX", this.option("infinite")) &&
            e > s &&
            ((t.left = Math.max(t.left, 0)),
            (t.left = Math.min(t.left, e - s)));
      });
      const c = [];
      let d;
      o.forEach((t) => {
        const e = { ...t };
        d && e.left === d.left
          ? ((d.width += e.width),
            (d.slides = [...d.slides, ...e.slides]),
            (d.indexes = [...d.indexes, ...e.indexes]))
          : ((e.index = c.length), (d = e), c.push(e));
      }),
        (this.pages = c);
      let h = this.page;
      if (null === h) {
        const t = this.option("initialSlide");
        (h =
          null !== t
            ? this.findPageForSlide(t)
            : parseInt(this.option("initialPage", 0), 10) || 0),
          c[h] || (h = c.length && h > c.length ? c[c.length - 1].index : 0),
          (this.page = h),
          (this.pageIndex = h);
      }
      this.updatePanzoom(), this.trigger("refresh");
    }
    getSlideMetrics(t) {
      if (!t) {
        const e = this.slides[0];
        ((t = document.createElement("div")).dataset.isTestEl = 1),
          (t.style.visibility = "hidden"),
          t.classList.add(
            ...(this.option("prefix") + this.option("classNames.slide")).split(
              " "
            )
          ),
          e.customClass && t.classList.add(...e.customClass.split(" ")),
          this.$track.prepend(t);
      }
      let e = Math.max(t.offsetWidth, ut(t.getBoundingClientRect().width));
      const i = t.currentStyle || window.getComputedStyle(t);
      return (
        (e =
          e +
          (parseFloat(i.marginLeft) || 0) +
          (parseFloat(i.marginRight) || 0)),
        t.dataset.isTestEl && t.remove(),
        e
      );
    }
    findPageForSlide(t) {
      t = parseInt(t, 10) || 0;
      const e = this.pages.find((e) => e.indexes.indexOf(t) > -1);
      return e ? e.index : null;
    }
    slideNext() {
      this.slideTo(this.pageIndex + 1);
    }
    slidePrev() {
      this.slideTo(this.pageIndex - 1);
    }
    slideTo(t, e = {}) {
      const {
        x: i = -1 * this.setPage(t, !0),
        y: s = 0,
        friction: n = this.option("friction"),
      } = e;
      (this.Panzoom.content.x === i && !this.Panzoom.velocity.x && n) ||
        (this.Panzoom.panTo({ x: i, y: s, friction: n, ignoreBounds: !0 }),
        "ready" === this.state &&
          "ready" === this.Panzoom.state &&
          this.trigger("settle"));
    }
    initPanzoom() {
      this.Panzoom && this.Panzoom.destroy();
      const t = pt(
        !0,
        {},
        {
          content: this.$track,
          wrapInner: !1,
          resizeParent: !1,
          zoom: !1,
          click: !1,
          lockAxis: "x",
          x: this.pages.length ? -1 * this.pages[this.page].left : 0,
          centerOnStart: !1,
          textSelection: () => this.option("textSelection", !1),
          panOnlyZoomed: function () {
            return this.content.width <= this.viewport.width;
          },
        },
        this.option("Panzoom")
      );
      (this.Panzoom = new Ct(this.$container, t)),
        this.Panzoom.on({
          "*": (t, ...e) => this.trigger(`Panzoom.${t}`, ...e),
          afterUpdate: () => {
            this.updatePage();
          },
          beforeTransform: this.onBeforeTransform.bind(this),
          touchEnd: this.onTouchEnd.bind(this),
          endAnimation: () => {
            this.trigger("settle");
          },
        }),
        this.updateMetrics(),
        this.manageSlideVisiblity();
    }
    updatePanzoom() {
      this.Panzoom &&
        ((this.Panzoom.content = {
          ...this.Panzoom.content,
          fitWidth: this.contentWidth,
          origWidth: this.contentWidth,
          width: this.contentWidth,
        }),
        this.pages.length > 1 &&
        this.option("infiniteX", this.option("infinite"))
          ? (this.Panzoom.boundX = null)
          : this.pages.length &&
            (this.Panzoom.boundX = {
              from: -1 * this.pages[this.pages.length - 1].left,
              to: -1 * this.pages[0].left,
            }),
        this.option("infiniteY", this.option("infinite"))
          ? (this.Panzoom.boundY = null)
          : (this.Panzoom.boundY = { from: 0, to: 0 }),
        this.Panzoom.handleCursor());
    }
    manageSlideVisiblity() {
      const t = this.contentWidth,
        e = this.viewportWidth;
      let i = this.Panzoom
        ? -1 * this.Panzoom.content.x
        : this.pages.length
        ? this.pages[this.page].left
        : 0;
      const s = this.option("preload"),
        n = this.option("infiniteX", this.option("infinite")),
        o = parseFloat(
          getComputedStyle(this.$viewport, null).getPropertyValue(
            "padding-left"
          )
        ),
        a = parseFloat(
          getComputedStyle(this.$viewport, null).getPropertyValue(
            "padding-right"
          )
        );
      this.slides.forEach((r) => {
        let l,
          c,
          d = 0;
        (l = i - o),
          (c = i + e + a),
          (l -= s * (e + o + a)),
          (c += s * (e + o + a));
        const h = r.left + r.width > l && r.left < c;
        (l = i + t - o), (c = i + t + e + a), (l -= s * (e + o + a));
        const p = n && r.left + r.width > l && r.left < c;
        (l = i - t - o), (c = i - t + e + a), (l -= s * (e + o + a));
        const u = n && r.left + r.width > l && r.left < c;
        p || h || u
          ? (this.createSlideEl(r),
            h && (d = 0),
            p && (d = -1),
            u && (d = 1),
            r.left + r.width > i && r.left <= i + e + a && (d = 0))
          : this.removeSlideEl(r),
          (r.hasDiff = d);
      });
      let r = 0,
        l = 0;
      this.slides.forEach((e, i) => {
        let s = 0;
        e.$el
          ? (i !== r || e.hasDiff ? (s = l + e.hasDiff * t) : (l = 0),
            (e.$el.style.left =
              Math.abs(s) > 0.1 ? `${l + e.hasDiff * t}px` : ""),
            r++)
          : (l += e.width);
      }),
        this.markSelectedSlides();
    }
    createSlideEl(t) {
      if (!t) return;
      if (t.$el) {
        let e = t.$el.dataset.index;
        if (!e || parseInt(e, 10) !== t.index) {
          let e;
          (t.$el.dataset.index = t.index),
            t.$el.querySelectorAll("[data-lazy-srcset]").forEach((t) => {
              t.srcset = t.dataset.lazySrcset;
            }),
            t.$el.querySelectorAll("[data-lazy-src]").forEach((t) => {
              let e = t.dataset.lazySrc;
              t instanceof HTMLImageElement
                ? (t.src = e)
                : (t.style.backgroundImage = `url('${e}')`);
            }),
            (e = t.$el.dataset.lazySrc) &&
              (t.$el.style.backgroundImage = `url('${e}')`),
            (t.state = "ready");
        }
        return;
      }
      const e = document.createElement("div");
      (e.dataset.index = t.index),
        e.classList.add(
          ...(this.option("prefix") + this.option("classNames.slide")).split(
            " "
          )
        ),
        t.customClass && e.classList.add(...t.customClass.split(" ")),
        t.html && (e.innerHTML = t.html);
      const i = [];
      this.slides.forEach((t, e) => {
        t.$el && i.push(e);
      });
      const s = t.index;
      let n = null;
      if (i.length) {
        let t = i.reduce((t, e) => (Math.abs(e - s) < Math.abs(t - s) ? e : t));
        n = this.slides[t];
      }
      return (
        this.$track.insertBefore(
          e,
          n && n.$el ? (n.index < t.index ? n.$el.nextSibling : n.$el) : null
        ),
        (t.$el = e),
        this.trigger("createSlide", t, s),
        t
      );
    }
    removeSlideEl(t) {
      t.$el &&
        !t.isDom &&
        (this.trigger("removeSlide", t), t.$el.remove(), (t.$el = null));
    }
    markSelectedSlides() {
      const t = this.option("classNames.slideSelected"),
        e = "aria-hidden";
      this.slides.forEach((i, s) => {
        const n = i.$el;
        if (!n) return;
        const o = this.pages[this.page];
        o && o.indexes && o.indexes.indexOf(s) > -1
          ? (t &&
              !n.classList.contains(t) &&
              (n.classList.add(t), this.trigger("selectSlide", i)),
            n.removeAttribute(e))
          : (t &&
              n.classList.contains(t) &&
              (n.classList.remove(t), this.trigger("unselectSlide", i)),
            n.setAttribute(e, !0));
      });
    }
    updatePage() {
      this.updateMetrics(), this.slideTo(this.page, { friction: 0 });
    }
    onBeforeTransform() {
      this.option("infiniteX", this.option("infinite")) &&
        this.manageInfiniteTrack(),
        this.manageSlideVisiblity();
    }
    manageInfiniteTrack() {
      const t = this.contentWidth,
        e = this.viewportWidth;
      if (
        !this.option("infiniteX", this.option("infinite")) ||
        this.pages.length < 2 ||
        t < e
      )
        return;
      const i = this.Panzoom;
      let s = !1;
      return (
        i.content.x < -1 * (t - e) &&
          ((i.content.x += t),
          (this.pageIndex = this.pageIndex - this.pages.length),
          (s = !0)),
        i.content.x > e &&
          ((i.content.x -= t),
          (this.pageIndex = this.pageIndex + this.pages.length),
          (s = !0)),
        s && "pointerdown" === i.state && i.resetDragPosition(),
        s
      );
    }
    onTouchEnd(t, e) {
      const i = this.option("dragFree");
      if (
        !i &&
        this.pages.length > 1 &&
        t.dragOffset.time < 350 &&
        Math.abs(t.dragOffset.y) < 1 &&
        Math.abs(t.dragOffset.x) > 5
      )
        this[t.dragOffset.x < 0 ? "slideNext" : "slidePrev"]();
      else if (i) {
        const [, e] = this.getPageFromPosition(-1 * t.transform.x);
        this.setPage(e);
      } else this.slideToClosest();
    }
    slideToClosest(t = {}) {
      let [, e] = this.getPageFromPosition(-1 * this.Panzoom.content.x);
      this.slideTo(e, t);
    }
    getPageFromPosition(t) {
      const e = this.pages.length;
      this.option("center") && (t += 0.5 * this.viewportWidth);
      const i = Math.floor(t / this.contentWidth);
      t -= i * this.contentWidth;
      let s = this.slides.find((e) => e.left <= t && e.left + e.width > t);
      if (s) {
        let t = this.findPageForSlide(s.index);
        return [t, t + i * e];
      }
      return [0, 0];
    }
    setPage(t, e) {
      let i = 0,
        s = parseInt(t, 10) || 0;
      const n = this.page,
        o = this.pageIndex,
        a = this.pages.length,
        r = this.contentWidth,
        l = this.viewportWidth;
      if (
        ((t = ((s % a) + a) % a),
        this.option("infiniteX", this.option("infinite")) && r > l)
      ) {
        const n = Math.floor(s / a) || 0,
          o = r;
        if (((i = this.pages[t].left + n * o), !0 === e && a > 2)) {
          let t = -1 * this.Panzoom.content.x;
          const e = i - o,
            n = i + o,
            r = Math.abs(t - i),
            l = Math.abs(t - e),
            c = Math.abs(t - n);
          c < r && c <= l
            ? ((i = n), (s += a))
            : l < r && l < c && ((i = e), (s -= a));
        }
      } else
        (t = s = Math.max(0, Math.min(s, a - 1))),
          (i = this.pages.length ? this.pages[t].left : 0);
      return (
        (this.page = t),
        (this.pageIndex = s),
        null !== n &&
          t !== n &&
          ((this.prevPage = n),
          (this.prevPageIndex = o),
          this.trigger("change", t, n)),
        i
      );
    }
    destroy() {
      (this.state = "destroy"),
        this.slides.forEach((t) => {
          this.removeSlideEl(t);
        }),
        (this.slides = []),
        this.Panzoom.destroy(),
        this.detachPlugins();
    }
  }
  (Lt.version = "4.0.27"), (Lt.Plugins = $t);
  const kt = !(
    "undefined" == typeof window ||
    !window.document ||
    !window.document.createElement
  );
  let Mt = null;
  const At = [
      "a[href]",
      "area[href]",
      'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
      "select:not([disabled]):not([aria-hidden])",
      "textarea:not([disabled]):not([aria-hidden])",
      "button:not([disabled]):not([aria-hidden])",
      "iframe",
      "object",
      "embed",
      "video",
      "audio",
      "[contenteditable]",
      '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])',
    ],
    _t = (t) => {
      if (t && kt) {
        null === Mt &&
          document.createElement("div").focus({
            get preventScroll() {
              return (Mt = !0), !1;
            },
          });
        try {
          if (t.setActive) t.setActive();
          else if (Mt) t.focus({ preventScroll: !0 });
          else {
            const e = window.pageXOffset || document.body.scrollTop,
              i = window.pageYOffset || document.body.scrollLeft;
            t.focus(),
              document.body.scrollTo({ top: e, left: i, behavior: "auto" });
          }
        } catch (t) {}
      }
    };
  class Ot {
    constructor(t) {
      (this.fancybox = t), (this.$container = null), (this.state = "init");
      for (const t of ["onPrepare", "onClosing", "onKeydown"])
        this[t] = this[t].bind(this);
      this.events = {
        prepare: this.onPrepare,
        closing: this.onClosing,
        keydown: this.onKeydown,
      };
    }
    onPrepare() {
      this.getSlides().length < this.fancybox.option("Thumbs.minSlideCount")
        ? (this.state = "disabled")
        : !0 === this.fancybox.option("Thumbs.autoStart") &&
          this.fancybox.Carousel.Panzoom.content.height >=
            this.fancybox.option("Thumbs.minScreenHeight") &&
          this.build();
    }
    onClosing() {
      this.Carousel && this.Carousel.Panzoom.detachEvents();
    }
    onKeydown(t, e) {
      e === t.option("Thumbs.key") && this.toggle();
    }
    build() {
      if (this.$container) return;
      const t = document.createElement("div");
      t.classList.add("fancybox__thumbs"),
        this.fancybox.$carousel.parentNode.insertBefore(
          t,
          this.fancybox.$carousel.nextSibling
        ),
        (this.Carousel = new Lt(
          t,
          pt(
            !0,
            {
              Dots: !1,
              Navigation: !1,
              Sync: { friction: 0 },
              infinite: !1,
              center: !0,
              fill: !0,
              dragFree: !0,
              slidesPerPage: 1,
              preload: 1,
            },
            this.fancybox.option("Thumbs.Carousel"),
            {
              Sync: { target: this.fancybox.Carousel },
              slides: this.getSlides(),
            }
          )
        )),
        this.Carousel.Panzoom.on("wheel", (t, e) => {
          e.preventDefault(), this.fancybox[e.deltaY < 0 ? "prev" : "next"]();
        }),
        (this.$container = t),
        (this.state = "visible");
    }
    getSlides() {
      const t = [];
      for (const e of this.fancybox.items) {
        const i = e.thumb;
        i &&
          t.push({
            html: `<div class="fancybox__thumb" style="background-image:url('${i}')"></div>`,
            customClass: `has-thumb has-${e.type || "image"}`,
          });
      }
      return t;
    }
    toggle() {
      "visible" === this.state
        ? this.hide()
        : "hidden" === this.state
        ? this.show()
        : this.build();
    }
    show() {
      "hidden" === this.state &&
        ((this.$container.style.display = ""),
        this.Carousel.Panzoom.attachEvents(),
        (this.state = "visible"));
    }
    hide() {
      "visible" === this.state &&
        (this.Carousel.Panzoom.detachEvents(),
        (this.$container.style.display = "none"),
        (this.state = "hidden"));
    }
    cleanup() {
      this.Carousel && (this.Carousel.destroy(), (this.Carousel = null)),
        this.$container && (this.$container.remove(), (this.$container = null)),
        (this.state = "init");
    }
    attach() {
      this.fancybox.on(this.events);
    }
    detach() {
      this.fancybox.off(this.events), this.cleanup();
    }
  }
  Ot.defaults = {
    minSlideCount: 2,
    minScreenHeight: 500,
    autoStart: !0,
    key: "t",
    Carousel: {},
  };
  const zt = (t, e) => {
      const i = new URL(t),
        s = new URLSearchParams(i.search);
      let n = new URLSearchParams();
      for (const [t, i] of [...s, ...Object.entries(e)])
        "t" === t ? n.set("start", parseInt(i)) : n.set(t, i);
      n = n.toString();
      let o = t.match(/#t=((.*)?\d+s)/);
      return o && (n += `#t=${o[1]}`), n;
    },
    It = {
      video: { autoplay: !0, ratio: 16 / 9 },
      youtube: {
        autohide: 1,
        fs: 1,
        rel: 0,
        hd: 1,
        wmode: "transparent",
        enablejsapi: 1,
        html5: 1,
      },
      vimeo: {
        hd: 1,
        show_title: 1,
        show_byline: 1,
        show_portrait: 0,
        fullscreen: 1,
      },
      html5video: {
        tpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
        format: "",
      },
    };
  class Nt {
    constructor(t) {
      this.fancybox = t;
      for (const t of [
        "onInit",
        "onReady",
        "onCreateSlide",
        "onRemoveSlide",
        "onSelectSlide",
        "onUnselectSlide",
        "onRefresh",
        "onMessage",
      ])
        this[t] = this[t].bind(this);
      this.events = {
        init: this.onInit,
        ready: this.onReady,
        "Carousel.createSlide": this.onCreateSlide,
        "Carousel.removeSlide": this.onRemoveSlide,
        "Carousel.selectSlide": this.onSelectSlide,
        "Carousel.unselectSlide": this.onUnselectSlide,
        "Carousel.refresh": this.onRefresh,
      };
    }
    onInit() {
      for (const t of this.fancybox.items) this.processType(t);
    }
    processType(t) {
      if (t.html)
        return (t.src = t.html), (t.type = "html"), void delete t.html;
      const e = t.src || "";
      let i = t.type || this.fancybox.options.type,
        s = null;
      if (!e || "string" == typeof e) {
        if (
          (s = e.match(
            /(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i
          ))
        ) {
          const n = zt(e, this.fancybox.option("Html.youtube")),
            o = encodeURIComponent(s[1]);
          (t.videoId = o),
            (t.src = `https://www.youtube-nocookie.com/embed/${o}?${n}`),
            (t.thumb = t.thumb || `https://i.ytimg.com/vi/${o}/mqdefault.jpg`),
            (t.vendor = "youtube"),
            (i = "video");
        } else if ((s = e.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/))) {
          const n = zt(e, this.fancybox.option("Html.vimeo")),
            o = encodeURIComponent(s[1]);
          (t.videoId = o),
            (t.src = `https://player.vimeo.com/video/${o}?${n}`),
            (t.vendor = "vimeo"),
            (i = "video");
        } else
          (s = e.match(
            /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i
          ))
            ? ((t.src = `//maps.google.${s[1]}/?ll=${(s[2]
                ? s[2] +
                  "&z=" +
                  Math.floor(s[3]) +
                  (s[4] ? s[4].replace(/^\//, "&") : "")
                : s[4] + ""
              ).replace(/\?/, "&")}&output=${
                s[4] && s[4].indexOf("layer=c") > 0 ? "svembed" : "embed"
              }`),
              (i = "map"))
            : (s = e.match(
                /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i
              )) &&
              ((t.src = `//maps.google.${s[1]}/maps?q=${s[2]
                .replace("query=", "q=")
                .replace("api=1", "")}&output=embed`),
              (i = "map"));
        i ||
          ("#" === e.charAt(0)
            ? (i = "inline")
            : (s = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
            ? ((i = "html5video"),
              (t.format =
                t.format || "video/" + ("ogv" === s[1] ? "ogg" : s[1])))
            : e.match(
                /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
              )
            ? (i = "image")
            : e.match(/\.(pdf)((\?|#).*)?$/i) && (i = "pdf")),
          (t.type = i || this.fancybox.option("defaultType", "image")),
          ("html5video" !== i && "video" !== i) ||
            ((t.video = pt({}, this.fancybox.option("Html.video"), t.video)),
            t._width && t._height
              ? (t.ratio = parseFloat(t._width) / parseFloat(t._height))
              : (t.ratio = t.ratio || t.video.ratio || It.video.ratio));
      }
    }
    onReady() {
      this.fancybox.Carousel.slides.forEach((t) => {
        t.$el &&
          (this.setContent(t),
          t.index === this.fancybox.getSlide().index && this.playVideo(t));
      });
    }
    onCreateSlide(t, e, i) {
      "ready" === this.fancybox.state && this.setContent(i);
    }
    loadInlineContent(t) {
      let e;
      if (t.src instanceof HTMLElement) e = t.src;
      else if ("string" == typeof t.src) {
        const i = t.src.split("#", 2),
          s = 2 === i.length && "" === i[0] ? i[1] : i[0];
        e = document.getElementById(s);
      }
      if (e) {
        if ("clone" === t.type || e.$placeHolder) {
          e = e.cloneNode(!0);
          let i = e.getAttribute("id");
          (i = i ? `${i}--clone` : `clone-${this.fancybox.id}-${t.index}`),
            e.setAttribute("id", i);
        } else {
          const t = document.createElement("div");
          t.classList.add("fancybox-placeholder"),
            e.parentNode.insertBefore(t, e),
            (e.$placeHolder = t);
        }
        this.fancybox.setContent(t, e);
      } else this.fancybox.setError(t, "{{ELEMENT_NOT_FOUND}}");
    }
    loadAjaxContent(t) {
      const e = this.fancybox,
        i = new XMLHttpRequest();
      e.showLoading(t),
        (i.onreadystatechange = function () {
          i.readyState === XMLHttpRequest.DONE &&
            "ready" === e.state &&
            (e.hideLoading(t),
            200 === i.status
              ? e.setContent(t, i.responseText)
              : e.setError(
                  t,
                  404 === i.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"
                ));
        });
      const s = t.ajax || null;
      i.open(s ? "POST" : "GET", t.src),
        i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
        i.send(s),
        (t.xhr = i);
    }
    loadIframeContent(t) {
      const e = this.fancybox,
        i = document.createElement("iframe");
      if (
        ((i.className = "fancybox__iframe"),
        i.setAttribute("id", `fancybox__iframe_${e.id}_${t.index}`),
        i.setAttribute("allow", "autoplay; fullscreen"),
        i.setAttribute("scrolling", "auto"),
        (t.$iframe = i),
        "iframe" !== t.type || !1 === t.preload)
      )
        return (
          i.setAttribute("src", t.src),
          this.fancybox.setContent(t, i),
          void this.resizeIframe(t)
        );
      e.showLoading(t);
      const s = document.createElement("div");
      (s.style.visibility = "hidden"),
        this.fancybox.setContent(t, s),
        s.appendChild(i),
        (i.onerror = () => {
          e.setError(t, "{{IFRAME_ERROR}}");
        }),
        (i.onload = () => {
          e.hideLoading(t);
          let s = !1;
          i.isReady || ((i.isReady = !0), (s = !0)),
            i.src.length &&
              ((i.parentNode.style.visibility = ""),
              this.resizeIframe(t),
              s && e.revealContent(t));
        }),
        i.setAttribute("src", t.src);
    }
    setAspectRatio(t) {
      const e = t.$content,
        i = t.ratio;
      if (!e) return;
      let s = t._width,
        n = t._height;
      if (i || (s && n)) {
        Object.assign(e.style, {
          width: s && n ? "100%" : "",
          height: s && n ? "100%" : "",
          maxWidth: "",
          maxHeight: "",
        });
        let t = e.offsetWidth,
          o = e.offsetHeight;
        if (((s = s || t), (n = n || o), s > t || n > o)) {
          let e = Math.min(t / s, o / n);
          (s *= e), (n *= e);
        }
        Math.abs(s / n - i) > 0.01 && (i < s / n ? (s = n * i) : (n = s / i)),
          Object.assign(e.style, { width: `${s}px`, height: `${n}px` });
      }
    }
    resizeIframe(t) {
      const e = t.$iframe;
      if (!e) return;
      let i = t._width || 0,
        s = t._height || 0;
      i && s && (t.autoSize = !1);
      const n = e.parentNode,
        o = n && n.style;
      if (!1 !== t.preload && !1 !== t.autoSize && o)
        try {
          const t = window.getComputedStyle(n),
            a = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight),
            r = parseFloat(t.paddingTop) + parseFloat(t.paddingBottom),
            l = e.contentWindow.document,
            c = l.getElementsByTagName("html")[0],
            d = l.body;
          (o.width = ""),
            (d.style.overflow = "hidden"),
            (i = i || c.scrollWidth + a),
            (o.width = `${i}px`),
            (d.style.overflow = ""),
            (o.flex = "0 0 auto"),
            (o.height = `${d.scrollHeight}px`),
            (s = c.scrollHeight + r);
        } catch (t) {}
      if (i || s) {
        const t = { flex: "0 1 auto" };
        i && (t.width = `${i}px`),
          s && (t.height = `${s}px`),
          Object.assign(o, t);
      }
    }
    onRefresh(t, e) {
      e.slides.forEach((t) => {
        t.$el &&
          (t.$iframe && this.resizeIframe(t),
          t.ratio && this.setAspectRatio(t));
      });
    }
    setContent(t) {
      if (t && !t.isDom) {
        switch (t.type) {
          case "html":
            this.fancybox.setContent(t, t.src);
            break;
          case "html5video":
            this.fancybox.setContent(
              t,
              this.fancybox
                .option("Html.html5video.tpl")
                .replace(/\{\{src\}\}/gi, t.src)
                .replace(
                  "{{format}}",
                  t.format || (t.html5video && t.html5video.format) || ""
                )
                .replace("{{poster}}", t.poster || t.thumb || "")
            );
            break;
          case "inline":
          case "clone":
            this.loadInlineContent(t);
            break;
          case "ajax":
            this.loadAjaxContent(t);
            break;
          case "pdf":
          case "video":
          case "map":
            t.preload = !1;
          case "iframe":
            this.loadIframeContent(t);
        }
        t.ratio && this.setAspectRatio(t);
      }
    }
    onSelectSlide(t, e, i) {
      "ready" === t.state && this.playVideo(i);
    }
    playVideo(t) {
      if ("html5video" === t.type && t.video.autoplay)
        try {
          const e = t.$el.querySelector("video");
          if (e) {
            const t = e.play();
            void 0 !== t &&
              t
                .then(() => {})
                .catch((t) => {
                  (e.muted = !0), e.play();
                });
          }
        } catch (t) {}
      if ("video" !== t.type || !t.$iframe || !t.$iframe.contentWindow) return;
      const e = () => {
        if ("done" === t.state && t.$iframe && t.$iframe.contentWindow) {
          let e;
          if (t.$iframe.isReady)
            return (
              t.video &&
                t.video.autoplay &&
                (e =
                  "youtube" == t.vendor
                    ? { event: "command", func: "playVideo" }
                    : { method: "play", value: "true" }),
              void (
                e && t.$iframe.contentWindow.postMessage(JSON.stringify(e), "*")
              )
            );
          "youtube" === t.vendor &&
            ((e = { event: "listening", id: t.$iframe.getAttribute("id") }),
            t.$iframe.contentWindow.postMessage(JSON.stringify(e), "*"));
        }
        t.poller = setTimeout(e, 250);
      };
      e();
    }
    onUnselectSlide(t, e, i) {
      if ("html5video" === i.type) {
        try {
          i.$el.querySelector("video").pause();
        } catch (t) {}
        return;
      }
      let s = !1;
      "vimeo" == i.vendor
        ? (s = { method: "pause", value: "true" })
        : "youtube" === i.vendor &&
          (s = { event: "command", func: "pauseVideo" }),
        s &&
          i.$iframe &&
          i.$iframe.contentWindow &&
          i.$iframe.contentWindow.postMessage(JSON.stringify(s), "*"),
        clearTimeout(i.poller);
    }
    onRemoveSlide(t, e, i) {
      i.xhr && (i.xhr.abort(), (i.xhr = null)),
        i.$iframe &&
          ((i.$iframe.onload = i.$iframe.onerror = null),
          (i.$iframe.src = "//about:blank"),
          (i.$iframe = null));
      const s = i.$content;
      "inline" === i.type &&
        s &&
        (s.classList.remove("fancybox__content"),
        "none" !== s.style.display && (s.style.display = "none")),
        i.$closeButton && (i.$closeButton.remove(), (i.$closeButton = null));
      const n = s && s.$placeHolder;
      n &&
        (n.parentNode.insertBefore(s, n), n.remove(), (s.$placeHolder = null));
    }
    onMessage(t) {
      try {
        let e = JSON.parse(t.data);
        if ("https://player.vimeo.com" === t.origin) {
          if ("ready" === e.event)
            for (let e of document.getElementsByClassName("fancybox__iframe"))
              e.contentWindow === t.source && (e.isReady = 1);
        } else
          "https://www.youtube-nocookie.com" === t.origin &&
            "onReady" === e.event &&
            (document.getElementById(e.id).isReady = 1);
      } catch (t) {}
    }
    attach() {
      this.fancybox.on(this.events),
        window.addEventListener("message", this.onMessage, !1);
    }
    detach() {
      this.fancybox.off(this.events),
        window.removeEventListener("message", this.onMessage, !1);
    }
  }
  Nt.defaults = It;
  class Dt {
    constructor(t) {
      this.fancybox = t;
      for (const t of [
        "onReady",
        "onClosing",
        "onDone",
        "onPageChange",
        "onCreateSlide",
        "onRemoveSlide",
        "onImageStatusChange",
      ])
        this[t] = this[t].bind(this);
      this.events = {
        ready: this.onReady,
        closing: this.onClosing,
        done: this.onDone,
        "Carousel.change": this.onPageChange,
        "Carousel.createSlide": this.onCreateSlide,
        "Carousel.removeSlide": this.onRemoveSlide,
      };
    }
    onReady() {
      this.fancybox.Carousel.slides.forEach((t) => {
        t.$el && this.setContent(t);
      });
    }
    onDone(t, e) {
      this.handleCursor(e);
    }
    onClosing(t) {
      clearTimeout(this.clickTimer),
        (this.clickTimer = null),
        t.Carousel.slides.forEach((t) => {
          t.$image && (t.state = "destroy"),
            t.Panzoom && t.Panzoom.detachEvents();
        }),
        "closing" === this.fancybox.state &&
          this.canZoom(t.getSlide()) &&
          this.zoomOut();
    }
    onCreateSlide(t, e, i) {
      "ready" === this.fancybox.state && this.setContent(i);
    }
    onRemoveSlide(t, e, i) {
      i.$image &&
        (i.$el.classList.remove(t.option("Image.canZoomInClass")),
        i.$image.remove(),
        (i.$image = null)),
        i.Panzoom && (i.Panzoom.destroy(), (i.Panzoom = null)),
        i.$el && i.$el.dataset && delete i.$el.dataset.imageFit;
    }
    setContent(t) {
      if (t.isDom || t.html || (t.type && "image" !== t.type)) return;
      if (t.$image) return;
      (t.type = "image"), (t.state = "loading");
      const e = document.createElement("div");
      e.style.visibility = "hidden";
      const i = document.createElement("img");
      i.addEventListener("load", (e) => {
        e.stopImmediatePropagation(), this.onImageStatusChange(t);
      }),
        i.addEventListener("error", () => {
          this.onImageStatusChange(t);
        }),
        (i.src = t.src),
        (i.alt = ""),
        (i.draggable = !1),
        i.classList.add("fancybox__image"),
        t.srcset && i.setAttribute("srcset", t.srcset),
        t.sizes && i.setAttribute("sizes", t.sizes),
        (t.$image = i);
      const s = this.fancybox.option("Image.wrap");
      if (s) {
        const n = document.createElement("div");
        n.classList.add("string" == typeof s ? s : "fancybox__image-wrap"),
          n.appendChild(i),
          e.appendChild(n),
          (t.$wrap = n);
      } else e.appendChild(i);
      (t.$el.dataset.imageFit = this.fancybox.option("Image.fit")),
        this.fancybox.setContent(t, e),
        i.complete || i.error
          ? this.onImageStatusChange(t)
          : this.fancybox.showLoading(t);
    }
    onImageStatusChange(t) {
      const e = t.$image;
      e &&
        "loading" === t.state &&
        (e.complete && e.naturalWidth && e.naturalHeight
          ? (this.fancybox.hideLoading(t),
            "contain" === this.fancybox.option("Image.fit") &&
              this.initSlidePanzoom(t),
            t.$el.addEventListener("wheel", (e) => this.onWheel(t, e), {
              passive: !1,
            }),
            t.$content.addEventListener("click", (e) => this.onClick(t, e), {
              passive: !1,
            }),
            this.revealContent(t))
          : this.fancybox.setError(t, "{{IMAGE_ERROR}}"));
    }
    initSlidePanzoom(t) {
      t.Panzoom ||
        ((t.Panzoom = new Ct(
          t.$el,
          pt(!0, this.fancybox.option("Image.Panzoom", {}), {
            viewport: t.$wrap,
            content: t.$image,
            width: t._width,
            height: t._height,
            wrapInner: !1,
            textSelection: !0,
            touch: this.fancybox.option("Image.touch"),
            panOnlyZoomed: !0,
            click: !1,
            wheel: !1,
          })
        )),
        t.Panzoom.on("startAnimation", () => {
          this.fancybox.trigger("Image.startAnimation", t);
        }),
        t.Panzoom.on("endAnimation", () => {
          "zoomIn" === t.state && this.fancybox.done(t),
            this.handleCursor(t),
            this.fancybox.trigger("Image.endAnimation", t);
        }),
        t.Panzoom.on("afterUpdate", () => {
          this.handleCursor(t), this.fancybox.trigger("Image.afterUpdate", t);
        }));
    }
    revealContent(t) {
      null === this.fancybox.Carousel.prevPage &&
      t.index === this.fancybox.options.startIndex &&
      this.canZoom(t)
        ? this.zoomIn()
        : this.fancybox.revealContent(t);
    }
    getZoomInfo(t) {
      const e = t.$thumb.getBoundingClientRect(),
        i = e.width,
        s = e.height,
        n = t.$content.getBoundingClientRect(),
        o = n.width,
        a = n.height,
        r = n.top - e.top,
        l = n.left - e.left;
      let c = this.fancybox.option("Image.zoomOpacity");
      return (
        "auto" === c && (c = Math.abs(i / s - o / a) > 0.1),
        { top: r, left: l, scale: o && i ? i / o : 1, opacity: c }
      );
    }
    canZoom(t) {
      const e = this.fancybox,
        i = e.$container;
      if (window.visualViewport && 1 !== window.visualViewport.scale) return !1;
      if (t.Panzoom && !t.Panzoom.content.width) return !1;
      if (!e.option("Image.zoom") || "contain" !== e.option("Image.fit"))
        return !1;
      const s = t.$thumb;
      if (!s || "loading" === t.state) return !1;
      i.classList.add("fancybox__no-click");
      const n = s.getBoundingClientRect();
      let o;
      if (this.fancybox.option("Image.ignoreCoveredThumbnail")) {
        const t = document.elementFromPoint(n.left + 1, n.top + 1) === s,
          e = document.elementFromPoint(n.right - 1, n.bottom - 1) === s;
        o = t && e;
      } else
        o =
          document.elementFromPoint(
            n.left + 0.5 * n.width,
            n.top + 0.5 * n.height
          ) === s;
      return i.classList.remove("fancybox__no-click"), o;
    }
    zoomIn() {
      const t = this.fancybox,
        e = t.getSlide(),
        i = e.Panzoom,
        { top: s, left: n, scale: o, opacity: a } = this.getZoomInfo(e);
      t.trigger("reveal", e),
        i.panTo({
          x: -1 * n,
          y: -1 * s,
          scale: o,
          friction: 0,
          ignoreBounds: !0,
        }),
        (e.$content.style.visibility = ""),
        (e.state = "zoomIn"),
        !0 === a &&
          i.on("afterTransform", (t) => {
            ("zoomIn" !== e.state && "zoomOut" !== e.state) ||
              (t.$content.style.opacity = Math.min(
                1,
                1 - (1 - t.content.scale) / (1 - o)
              ));
          }),
        i.panTo({
          x: 0,
          y: 0,
          scale: 1,
          friction: this.fancybox.option("Image.zoomFriction"),
        });
    }
    zoomOut() {
      const t = this.fancybox,
        e = t.getSlide(),
        i = e.Panzoom;
      if (!i) return;
      (e.state = "zoomOut"),
        (t.state = "customClosing"),
        e.$caption && (e.$caption.style.visibility = "hidden");
      let s = this.fancybox.option("Image.zoomFriction");
      const n = (t) => {
        const { top: n, left: o, scale: a, opacity: r } = this.getZoomInfo(e);
        t || r || (s *= 0.82),
          i.panTo({
            x: -1 * o,
            y: -1 * n,
            scale: a,
            friction: s,
            ignoreBounds: !0,
          }),
          (s *= 0.98);
      };
      window.addEventListener("scroll", n),
        i.once("endAnimation", () => {
          window.removeEventListener("scroll", n), t.destroy();
        }),
        n();
    }
    handleCursor(t) {
      if ("image" !== t.type || !t.$el) return;
      const e = t.Panzoom,
        i = this.fancybox.option("Image.click", !1, t),
        s = this.fancybox.option("Image.touch"),
        n = t.$el.classList,
        o = this.fancybox.option("Image.canZoomInClass"),
        a = this.fancybox.option("Image.canZoomOutClass");
      n.remove(a),
        n.remove(o),
        e && "toggleZoom" === i
          ? e &&
            1 === e.content.scale &&
            e.option("maxScale") - e.content.scale > 0.01
            ? n.add(o)
            : e.content.scale > 1 && !s && n.add(a)
          : "close" === i && n.add(a);
    }
    onWheel(t, e) {
      if (
        "ready" === this.fancybox.state &&
        !1 !== this.fancybox.trigger("Image.wheel", e)
      )
        switch (this.fancybox.option("Image.wheel")) {
          case "zoom":
            "done" === t.state && t.Panzoom && t.Panzoom.zoomWithWheel(e);
            break;
          case "close":
            this.fancybox.close();
            break;
          case "slide":
            this.fancybox[e.deltaY < 0 ? "prev" : "next"]();
        }
    }
    onClick(t, e) {
      if ("ready" !== this.fancybox.state) return;
      const i = t.Panzoom;
      if (
        i &&
        (i.dragPosition.midPoint ||
          0 !== i.dragOffset.x ||
          0 !== i.dragOffset.y ||
          1 !== i.dragOffset.scale)
      )
        return;
      if (this.fancybox.Carousel.Panzoom.lockAxis) return !1;
      const s = (i) => {
          switch (i) {
            case "toggleZoom":
              e.stopPropagation(), t.Panzoom && t.Panzoom.zoomWithClick(e);
              break;
            case "close":
              this.fancybox.close();
              break;
            case "next":
              e.stopPropagation(), this.fancybox.next();
          }
        },
        n = this.fancybox.option("Image.click"),
        o = this.fancybox.option("Image.doubleClick");
      o
        ? this.clickTimer
          ? (clearTimeout(this.clickTimer), (this.clickTimer = null), s(o))
          : (this.clickTimer = setTimeout(() => {
              (this.clickTimer = null), s(n);
            }, 300))
        : s(n);
    }
    onPageChange(t, e) {
      const i = t.getSlide();
      e.slides.forEach((t) => {
        t.Panzoom &&
          "done" === t.state &&
          t.index !== i.index &&
          t.Panzoom.panTo({ x: 0, y: 0, scale: 1, friction: 0.8 });
      });
    }
    attach() {
      this.fancybox.on(this.events);
    }
    detach() {
      this.fancybox.off(this.events);
    }
  }
  Dt.defaults = {
    canZoomInClass: "can-zoom_in",
    canZoomOutClass: "can-zoom_out",
    zoom: !0,
    zoomOpacity: "auto",
    zoomFriction: 0.82,
    ignoreCoveredThumbnail: !1,
    touch: !0,
    click: "toggleZoom",
    doubleClick: null,
    wheel: "zoom",
    fit: "contain",
    wrap: !1,
    Panzoom: { ratio: 1 },
  };
  class Ft {
    constructor(t) {
      this.fancybox = t;
      for (const t of ["onChange", "onClosing"]) this[t] = this[t].bind(this);
      (this.events = {
        initCarousel: this.onChange,
        "Carousel.change": this.onChange,
        closing: this.onClosing,
      }),
        (this.hasCreatedHistory = !1),
        (this.origHash = ""),
        (this.timer = null);
    }
    onChange(t) {
      const e = t.Carousel;
      this.timer && clearTimeout(this.timer);
      const i = null === e.prevPage,
        s = t.getSlide(),
        n = new URL(document.URL).hash;
      let o = !1;
      if (s.slug) o = "#" + s.slug;
      else {
        const i = s.$trigger && s.$trigger.dataset,
          n = t.option("slug") || (i && i.fancybox);
        n &&
          n.length &&
          "true" !== n &&
          (o = "#" + n + (e.slides.length > 1 ? "-" + (s.index + 1) : ""));
      }
      i && (this.origHash = n !== o ? n : ""),
        o &&
          n !== o &&
          (this.timer = setTimeout(() => {
            try {
              window.history[i ? "pushState" : "replaceState"](
                {},
                document.title,
                window.location.pathname + window.location.search + o
              ),
                i && (this.hasCreatedHistory = !0);
            } catch (t) {}
          }, 300));
    }
    onClosing() {
      if ((this.timer && clearTimeout(this.timer), !0 !== this.hasSilentClose))
        try {
          return void window.history.replaceState(
            {},
            document.title,
            window.location.pathname +
              window.location.search +
              (this.origHash || "")
          );
        } catch (t) {}
    }
    attach(t) {
      t.on(this.events);
    }
    detach(t) {
      t.off(this.events);
    }
    static startFromUrl() {
      const t = Ft.Fancybox;
      if (!t || t.getInstance() || !1 === t.defaults.Hash) return;
      const { hash: e, slug: i, index: s } = Ft.getParsedURL();
      if (!i) return;
      let n = document.querySelector(`[data-slug="${e}"]`);
      if (
        (n &&
          n.dispatchEvent(
            new CustomEvent("click", { bubbles: !0, cancelable: !0 })
          ),
        t.getInstance())
      )
        return;
      const o = document.querySelectorAll(`[data-fancybox="${i}"]`);
      o.length &&
        (null === s && 1 === o.length ? (n = o[0]) : s && (n = o[s - 1]),
        n &&
          n.dispatchEvent(
            new CustomEvent("click", { bubbles: !0, cancelable: !0 })
          ));
    }
    static onHashChange() {
      const { slug: t, index: e } = Ft.getParsedURL(),
        i = Ft.Fancybox,
        s = i && i.getInstance();
      if (s && s.plugins.Hash) {
        if (t) {
          const i = s.Carousel;
          if (t === s.option("slug")) return i.slideTo(e - 1);
          for (let e of i.slides)
            if (e.slug && e.slug === t) return i.slideTo(e.index);
          const n = s.getSlide(),
            o = n.$trigger && n.$trigger.dataset;
          if (o && o.fancybox === t) return i.slideTo(e - 1);
        }
        (s.plugins.Hash.hasSilentClose = !0), s.close();
      }
      Ft.startFromUrl();
    }
    static create(t) {
      function e() {
        window.addEventListener("hashchange", Ft.onHashChange, !1),
          Ft.startFromUrl();
      }
      (Ft.Fancybox = t),
        kt &&
          window.requestAnimationFrame(() => {
            /complete|interactive|loaded/.test(document.readyState)
              ? e()
              : document.addEventListener("DOMContentLoaded", e);
          });
    }
    static destroy() {
      window.removeEventListener("hashchange", Ft.onHashChange, !1);
    }
    static getParsedURL() {
      const t = window.location.hash.substr(1),
        e = t.split("-"),
        i =
          (e.length > 1 &&
            /^\+?\d+$/.test(e[e.length - 1]) &&
            parseInt(e.pop(-1), 10)) ||
          null;
      return { hash: t, slug: e.join("-"), index: i };
    }
  }
  const Bt = {
    pageXOffset: 0,
    pageYOffset: 0,
    element: () =>
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement,
    activate(t) {
      (Bt.pageXOffset = window.pageXOffset),
        (Bt.pageYOffset = window.pageYOffset),
        t.requestFullscreen
          ? t.requestFullscreen()
          : t.mozRequestFullScreen
          ? t.mozRequestFullScreen()
          : t.webkitRequestFullscreen
          ? t.webkitRequestFullscreen()
          : t.msRequestFullscreen && t.msRequestFullscreen();
    },
    deactivate() {
      document.exitFullscreen
        ? document.exitFullscreen()
        : document.mozCancelFullScreen
        ? document.mozCancelFullScreen()
        : document.webkitExitFullscreen && document.webkitExitFullscreen();
    },
  };
  class Rt {
    constructor(t) {
      (this.fancybox = t),
        (this.active = !1),
        (this.handleVisibilityChange = this.handleVisibilityChange.bind(this));
    }
    isActive() {
      return this.active;
    }
    setTimer() {
      if (!this.active || this.timer) return;
      const t = this.fancybox.option("slideshow.delay", 3e3);
      this.timer = setTimeout(() => {
        (this.timer = null),
          this.fancybox.option("infinite") ||
          this.fancybox.getSlide().index !==
            this.fancybox.Carousel.slides.length - 1
            ? this.fancybox.next()
            : this.fancybox.jumpTo(0, { friction: 0 });
      }, t);
      let e = this.$progress;
      e ||
        ((e = document.createElement("div")),
        e.classList.add("fancybox__progress"),
        this.fancybox.$carousel.parentNode.insertBefore(
          e,
          this.fancybox.$carousel
        ),
        (this.$progress = e),
        e.offsetHeight),
        (e.style.transitionDuration = `${t}ms`),
        (e.style.transform = "scaleX(1)");
    }
    clearTimer() {
      clearTimeout(this.timer),
        (this.timer = null),
        this.$progress &&
          ((this.$progress.style.transitionDuration = ""),
          (this.$progress.style.transform = ""),
          this.$progress.offsetHeight);
    }
    activate() {
      this.active ||
        ((this.active = !0),
        this.fancybox.$container.classList.add("has-slideshow"),
        "done" === this.fancybox.getSlide().state && this.setTimer(),
        document.addEventListener(
          "visibilitychange",
          this.handleVisibilityChange,
          !1
        ));
    }
    handleVisibilityChange() {
      this.deactivate();
    }
    deactivate() {
      (this.active = !1),
        this.clearTimer(),
        this.fancybox.$container.classList.remove("has-slideshow"),
        document.removeEventListener(
          "visibilitychange",
          this.handleVisibilityChange,
          !1
        );
    }
    toggle() {
      this.active
        ? this.deactivate()
        : this.fancybox.Carousel.slides.length > 1 && this.activate();
    }
  }
  const Ht = {
    display: ["counter", "zoom", "slideshow", "fullscreen", "thumbs", "close"],
    autoEnable: !0,
    items: {
      counter: {
        position: "left",
        type: "div",
        class: "fancybox__counter",
        html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',
        attr: { tabindex: -1 },
      },
      prev: {
        type: "button",
        class: "fancybox__button--prev",
        label: "PREV",
        html: '<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',
        attr: { "data-fancybox-prev": "" },
      },
      next: {
        type: "button",
        class: "fancybox__button--next",
        label: "NEXT",
        html: '<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',
        attr: { "data-fancybox-next": "" },
      },
      fullscreen: {
        type: "button",
        class: "fancybox__button--fullscreen",
        label: "TOGGLE_FULLSCREEN",
        html: '<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>',
        click: function (t) {
          t.preventDefault(),
            Bt.element()
              ? Bt.deactivate()
              : Bt.activate(this.fancybox.$container);
        },
      },
      slideshow: {
        type: "button",
        class: "fancybox__button--slideshow",
        label: "TOGGLE_SLIDESHOW",
        html: '<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',
        click: function (t) {
          t.preventDefault(), this.Slideshow.toggle();
        },
      },
      zoom: {
        type: "button",
        class: "fancybox__button--zoom",
        label: "TOGGLE_ZOOM",
        html: '<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',
        click: function (t) {
          t.preventDefault();
          const e = this.fancybox.getSlide().Panzoom;
          e && e.toggleZoom();
        },
      },
      download: {
        type: "link",
        label: "DOWNLOAD",
        class: "fancybox__button--download",
        html: '<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',
        click: function (t) {
          t.stopPropagation();
        },
      },
      thumbs: {
        type: "button",
        label: "TOGGLE_THUMBS",
        class: "fancybox__button--thumbs",
        html: '<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',
        click: function (t) {
          t.stopPropagation();
          const e = this.fancybox.plugins.Thumbs;
          e && e.toggle();
        },
      },
      close: {
        type: "button",
        label: "CLOSE",
        class: "fancybox__button--close",
        html: '<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',
        attr: { "data-fancybox-close": "", tabindex: 0 },
      },
    },
  };
  class Wt {
    constructor(t) {
      (this.fancybox = t), (this.$container = null), (this.state = "init");
      for (const t of [
        "onInit",
        "onPrepare",
        "onDone",
        "onKeydown",
        "onClosing",
        "onChange",
        "onSettle",
        "onRefresh",
      ])
        this[t] = this[t].bind(this);
      this.events = {
        init: this.onInit,
        prepare: this.onPrepare,
        done: this.onDone,
        keydown: this.onKeydown,
        closing: this.onClosing,
        "Carousel.change": this.onChange,
        "Carousel.settle": this.onSettle,
        "Carousel.Panzoom.touchStart": () => this.onRefresh(),
        "Image.startAnimation": (t, e) => this.onRefresh(e),
        "Image.afterUpdate": (t, e) => this.onRefresh(e),
      };
    }
    onInit() {
      if (this.fancybox.option("Toolbar.autoEnable")) {
        let t = !1;
        for (const e of this.fancybox.items)
          if ("image" === e.type) {
            t = !0;
            break;
          }
        if (!t) return void (this.state = "disabled");
      }
      for (const t of this.fancybox.option("Toolbar.display"))
        if ("close" === (ht(t) ? t.id : t)) {
          this.fancybox.options.closeButton = !1;
          break;
        }
    }
    onPrepare() {
      const t = this.fancybox;
      if (
        "init" === this.state &&
        (this.build(),
        this.update(),
        (this.Slideshow = new Rt(t)),
        !t.Carousel.prevPage &&
          (t.option("slideshow.autoStart") && this.Slideshow.activate(),
          t.option("fullscreen.autoStart") && !Bt.element()))
      )
        try {
          Bt.activate(t.$container);
        } catch (t) {}
    }
    onFsChange() {
      window.scrollTo(Bt.pageXOffset, Bt.pageYOffset);
    }
    onSettle() {
      const t = this.fancybox,
        e = this.Slideshow;
      e &&
        e.isActive() &&
        (t.getSlide().index !== t.Carousel.slides.length - 1 ||
        t.option("infinite")
          ? "done" === t.getSlide().state && e.setTimer()
          : e.deactivate());
    }
    onChange() {
      this.update(),
        this.Slideshow &&
          this.Slideshow.isActive() &&
          this.Slideshow.clearTimer();
    }
    onDone(t, e) {
      const i = this.Slideshow;
      e.index === t.getSlide().index &&
        (this.update(),
        i &&
          i.isActive() &&
          (t.option("infinite") || e.index !== t.Carousel.slides.length - 1
            ? i.setTimer()
            : i.deactivate()));
    }
    onRefresh(t) {
      (t && t.index !== this.fancybox.getSlide().index) ||
        (this.update(),
        !this.Slideshow ||
          !this.Slideshow.isActive() ||
          (t && "done" !== t.state) ||
          this.Slideshow.deactivate());
    }
    onKeydown(t, e, i) {
      " " === e &&
        this.Slideshow &&
        (this.Slideshow.toggle(), i.preventDefault());
    }
    onClosing() {
      this.Slideshow && this.Slideshow.deactivate(),
        document.removeEventListener("fullscreenchange", this.onFsChange);
    }
    createElement(t) {
      let e;
      "div" === t.type
        ? (e = document.createElement("div"))
        : ((e = document.createElement("link" === t.type ? "a" : "button")),
          e.classList.add("carousel__button")),
        (e.innerHTML = t.html),
        e.setAttribute("tabindex", t.tabindex || 0),
        t.class && e.classList.add(...t.class.split(" "));
      for (const i in t.attr) e.setAttribute(i, t.attr[i]);
      t.label &&
        e.setAttribute("title", this.fancybox.localize(`{{${t.label}}}`)),
        t.click && e.addEventListener("click", t.click.bind(this)),
        "prev" === t.id && e.setAttribute("data-fancybox-prev", ""),
        "next" === t.id && e.setAttribute("data-fancybox-next", "");
      const i = e.querySelector("svg");
      return (
        i &&
          (i.setAttribute("role", "img"),
          i.setAttribute("tabindex", "-1"),
          i.setAttribute("xmlns", "http://www.w3.org/2000/svg")),
        e
      );
    }
    build() {
      this.cleanup();
      const t = this.fancybox.option("Toolbar.items"),
        e = [
          { position: "left", items: [] },
          { position: "center", items: [] },
          { position: "right", items: [] },
        ],
        i = this.fancybox.plugins.Thumbs;
      for (const s of this.fancybox.option("Toolbar.display")) {
        let n, o;
        if (
          (ht(s) ? ((n = s.id), (o = pt({}, t[n], s))) : ((n = s), (o = t[n])),
          ["counter", "next", "prev", "slideshow"].includes(n) &&
            this.fancybox.items.length < 2)
        )
          continue;
        if ("fullscreen" === n) {
          if (!document.fullscreenEnabled || window.fullScreen) continue;
          document.addEventListener("fullscreenchange", this.onFsChange);
        }
        if ("thumbs" === n && (!i || "disabled" === i.state)) continue;
        if (!o) continue;
        let a = o.position || "right",
          r = e.find((t) => t.position === a);
        r && r.items.push(o);
      }
      const s = document.createElement("div");
      s.classList.add("fancybox__toolbar");
      for (const t of e)
        if (t.items.length) {
          const e = document.createElement("div");
          e.classList.add("fancybox__toolbar__items"),
            e.classList.add(`fancybox__toolbar__items--${t.position}`);
          for (const i of t.items) e.appendChild(this.createElement(i));
          s.appendChild(e);
        }
      this.fancybox.$carousel.parentNode.insertBefore(
        s,
        this.fancybox.$carousel
      ),
        (this.$container = s);
    }
    update() {
      const t = this.fancybox.getSlide(),
        e = t.index,
        i = this.fancybox.items.length,
        s = t.downloadSrc || ("image" !== t.type || t.error ? null : t.src);
      for (const t of this.fancybox.$container.querySelectorAll(
        "a.fancybox__button--download"
      ))
        s
          ? (t.removeAttribute("disabled"),
            t.removeAttribute("tabindex"),
            t.setAttribute("href", s),
            t.setAttribute("download", s),
            t.setAttribute("target", "_blank"))
          : (t.setAttribute("disabled", ""),
            t.setAttribute("tabindex", -1),
            t.removeAttribute("href"),
            t.removeAttribute("download"));
      const n = t.Panzoom,
        o = n && n.option("maxScale") > n.option("baseScale");
      for (const t of this.fancybox.$container.querySelectorAll(
        ".fancybox__button--zoom"
      ))
        o ? t.removeAttribute("disabled") : t.setAttribute("disabled", "");
      for (const e of this.fancybox.$container.querySelectorAll(
        "[data-fancybox-index]"
      ))
        e.innerHTML = t.index + 1;
      for (const t of this.fancybox.$container.querySelectorAll(
        "[data-fancybox-count]"
      ))
        t.innerHTML = i;
      if (!this.fancybox.option("infinite")) {
        for (const t of this.fancybox.$container.querySelectorAll(
          "[data-fancybox-prev]"
        ))
          0 === e
            ? t.setAttribute("disabled", "")
            : t.removeAttribute("disabled");
        for (const t of this.fancybox.$container.querySelectorAll(
          "[data-fancybox-next]"
        ))
          e === i - 1
            ? t.setAttribute("disabled", "")
            : t.removeAttribute("disabled");
      }
    }
    cleanup() {
      this.Slideshow &&
        this.Slideshow.isActive() &&
        this.Slideshow.clearTimer(),
        this.$container && this.$container.remove(),
        (this.$container = null);
    }
    attach() {
      this.fancybox.on(this.events);
    }
    detach() {
      this.fancybox.off(this.events), this.cleanup();
    }
  }
  Wt.defaults = Ht;
  const Gt = {
      ScrollLock: class {
        constructor(t) {
          (this.fancybox = t),
            (this.viewport = null),
            (this.pendingUpdate = null);
          for (const t of [
            "onReady",
            "onResize",
            "onTouchstart",
            "onTouchmove",
          ])
            this[t] = this[t].bind(this);
        }
        onReady() {
          const t = window.visualViewport;
          t &&
            ((this.viewport = t),
            (this.startY = 0),
            t.addEventListener("resize", this.onResize),
            this.updateViewport()),
            window.addEventListener("touchstart", this.onTouchstart, {
              passive: !1,
            }),
            window.addEventListener("touchmove", this.onTouchmove, {
              passive: !1,
            }),
            window.addEventListener("wheel", this.onWheel, { passive: !1 });
        }
        onResize() {
          this.updateViewport();
        }
        updateViewport() {
          const t = this.fancybox,
            e = this.viewport,
            i = e.scale || 1,
            s = t.$container;
          if (!s) return;
          let n = "",
            o = "",
            a = "";
          i - 1 > 0.1 &&
            ((n = e.width * i + "px"),
            (o = e.height * i + "px"),
            (a = `translate3d(${e.offsetLeft}px, ${e.offsetTop}px, 0) scale(${
              1 / i
            })`)),
            (s.style.width = n),
            (s.style.height = o),
            (s.style.transform = a);
        }
        onTouchstart(t) {
          this.startY = t.touches ? t.touches[0].screenY : t.screenY;
        }
        onTouchmove(t) {
          const e = this.startY,
            i = window.innerWidth / window.document.documentElement.clientWidth;
          if (!t.cancelable) return;
          if (t.touches.length > 1 || 1 !== i) return;
          const s = ft(t.composedPath()[0]);
          if (!s) return void t.preventDefault();
          const n = window.getComputedStyle(s),
            o = parseInt(n.getPropertyValue("height"), 10),
            a = t.touches ? t.touches[0].screenY : t.screenY,
            r = e <= a && 0 === s.scrollTop,
            l = e >= a && s.scrollHeight - s.scrollTop === o;
          (r || l) && t.preventDefault();
        }
        onWheel(t) {
          ft(t.composedPath()[0]) || t.preventDefault();
        }
        cleanup() {
          this.pendingUpdate &&
            (cancelAnimationFrame(this.pendingUpdate),
            (this.pendingUpdate = null));
          const t = this.viewport;
          t &&
            (t.removeEventListener("resize", this.onResize),
            (this.viewport = null)),
            window.removeEventListener("touchstart", this.onTouchstart, !1),
            window.removeEventListener("touchmove", this.onTouchmove, !1),
            window.removeEventListener("wheel", this.onWheel, { passive: !1 });
        }
        attach() {
          this.fancybox.on("initLayout", this.onReady);
        }
        detach() {
          this.fancybox.off("initLayout", this.onReady), this.cleanup();
        }
      },
      Thumbs: Ot,
      Html: Nt,
      Toolbar: Wt,
      Image: Dt,
      Hash: Ft,
    },
    qt = {
      startIndex: 0,
      preload: 1,
      infinite: !0,
      showClass: "fancybox-zoomInUp",
      hideClass: "fancybox-fadeOut",
      animated: !0,
      hideScrollbar: !0,
      parentEl: null,
      mainClass: null,
      autoFocus: !0,
      trapFocus: !0,
      placeFocusBack: !0,
      click: "close",
      closeButton: "inside",
      dragToClose: !0,
      keyboard: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "next",
        ArrowDown: "prev",
        ArrowRight: "next",
        ArrowLeft: "prev",
      },
      template: {
        closeButton:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',
        spinner:
          '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
        main: null,
      },
      l10n: {
        CLOSE: "Close",
        NEXT: "Next",
        PREV: "Previous",
        MODAL: "You can close this modal content with the ESC key",
        ERROR: "Something Went Wrong, Please Try Again Later",
        IMAGE_ERROR: "Image Not Found",
        ELEMENT_NOT_FOUND: "HTML Element Not Found",
        AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
        AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
        IFRAME_ERROR: "Error Loading Page",
        TOGGLE_ZOOM: "Toggle zoom level",
        TOGGLE_THUMBS: "Toggle thumbnails",
        TOGGLE_SLIDESHOW: "Toggle slideshow",
        TOGGLE_FULLSCREEN: "Toggle full-screen mode",
        DOWNLOAD: "Download",
      },
    },
    jt = new Map();
  let Vt = 0;
  class Xt extends xt {
    constructor(t, e = {}) {
      (t = t.map(
        (t) => (
          t.width && (t._width = t.width), t.height && (t._height = t.height), t
        )
      )),
        super(pt(!0, {}, qt, e)),
        this.bindHandlers(),
        (this.state = "init"),
        this.setItems(t),
        this.attachPlugins(Xt.Plugins),
        this.trigger("init"),
        !0 === this.option("hideScrollbar") && this.hideScrollbar(),
        this.initLayout(),
        this.initCarousel(),
        this.attachEvents(),
        jt.set(this.id, this),
        this.trigger("prepare"),
        (this.state = "ready"),
        this.trigger("ready"),
        this.$container.setAttribute("aria-hidden", "false"),
        this.option("trapFocus") && this.focus();
    }
    option(t, ...e) {
      const i = this.getSlide();
      let s = i ? i[t] : void 0;
      return void 0 !== s
        ? ("function" == typeof s && (s = s.call(this, this, ...e)), s)
        : super.option(t, ...e);
    }
    bindHandlers() {
      for (const t of [
        "onMousedown",
        "onKeydown",
        "onClick",
        "onFocus",
        "onCreateSlide",
        "onSettle",
        "onTouchMove",
        "onTouchEnd",
        "onTransform",
      ])
        this[t] = this[t].bind(this);
    }
    attachEvents() {
      document.addEventListener("mousedown", this.onMousedown),
        document.addEventListener("keydown", this.onKeydown, !0),
        this.option("trapFocus") &&
          document.addEventListener("focus", this.onFocus, !0),
        this.$container.addEventListener("click", this.onClick);
    }
    detachEvents() {
      document.removeEventListener("mousedown", this.onMousedown),
        document.removeEventListener("keydown", this.onKeydown, !0),
        document.removeEventListener("focus", this.onFocus, !0),
        this.$container.removeEventListener("click", this.onClick);
    }
    initLayout() {
      this.$root = this.option("parentEl") || document.body;
      let t = this.option("template.main");
      t &&
        (this.$root.insertAdjacentHTML("beforeend", this.localize(t)),
        (this.$container = this.$root.querySelector(".fancybox__container"))),
        this.$container ||
          ((this.$container = document.createElement("div")),
          this.$root.appendChild(this.$container)),
        (this.$container.onscroll = () => (
          (this.$container.scrollLeft = 0), !1
        )),
        Object.entries({
          class: "fancybox__container",
          role: "dialog",
          tabIndex: "-1",
          "aria-modal": "true",
          "aria-hidden": "true",
          "aria-label": this.localize("{{MODAL}}"),
        }).forEach((t) => this.$container.setAttribute(...t)),
        this.option("animated") && this.$container.classList.add("is-animated"),
        (this.$backdrop = this.$container.querySelector(".fancybox__backdrop")),
        this.$backdrop ||
          ((this.$backdrop = document.createElement("div")),
          this.$backdrop.classList.add("fancybox__backdrop"),
          this.$container.appendChild(this.$backdrop)),
        (this.$carousel = this.$container.querySelector(".fancybox__carousel")),
        this.$carousel ||
          ((this.$carousel = document.createElement("div")),
          this.$carousel.classList.add("fancybox__carousel"),
          this.$container.appendChild(this.$carousel)),
        (this.$container.Fancybox = this),
        (this.id = this.$container.getAttribute("id")),
        this.id ||
          ((this.id = this.options.id || ++Vt),
          this.$container.setAttribute("id", "fancybox-" + this.id));
      const e = this.option("mainClass");
      return (
        e && this.$container.classList.add(...e.split(" ")),
        document.documentElement.classList.add("with-fancybox"),
        this.trigger("initLayout"),
        this
      );
    }
    setItems(t) {
      const e = [];
      for (const i of t) {
        const t = i.$trigger;
        if (t) {
          const e = t.dataset || {};
          (i.src = e.src || t.getAttribute("href") || i.src),
            (i.type = e.type || i.type),
            !i.src &&
              t instanceof HTMLImageElement &&
              (i.src = t.currentSrc || i.$trigger.src);
        }
        let s = i.$thumb;
        if (!s) {
          let t = i.$trigger && i.$trigger.origTarget;
          t &&
            (s =
              t instanceof HTMLImageElement
                ? t
                : t.querySelector("img:not([aria-hidden])")),
            !s &&
              i.$trigger &&
              (s =
                i.$trigger instanceof HTMLImageElement
                  ? i.$trigger
                  : i.$trigger.querySelector("img:not([aria-hidden])"));
        }
        i.$thumb = s || null;
        let n = i.thumb;
        !n &&
          s &&
          ((n = s.currentSrc || s.src),
          !n && s.dataset && (n = s.dataset.lazySrc || s.dataset.src)),
          n || "image" !== i.type || (n = i.src),
          (i.thumb = n || null),
          (i.caption = i.caption || ""),
          e.push(i);
      }
      this.items = e;
    }
    initCarousel() {
      return (
        (this.Carousel = new Lt(
          this.$carousel,
          pt(
            !0,
            {},
            {
              prefix: "",
              classNames: {
                viewport: "fancybox__viewport",
                track: "fancybox__track",
                slide: "fancybox__slide",
              },
              textSelection: !0,
              preload: this.option("preload"),
              friction: 0.88,
              slides: this.items,
              initialPage: this.options.startIndex,
              slidesPerPage: 1,
              infiniteX: this.option("infinite"),
              infiniteY: !0,
              l10n: this.option("l10n"),
              Dots: !1,
              Navigation: {
                classNames: {
                  main: "fancybox__nav",
                  button: "carousel__button",
                  next: "is-next",
                  prev: "is-prev",
                },
              },
              Panzoom: {
                textSelection: !0,
                panOnlyZoomed: () =>
                  this.Carousel &&
                  this.Carousel.pages &&
                  this.Carousel.pages.length < 2 &&
                  !this.option("dragToClose"),
                lockAxis: () => {
                  if (this.Carousel) {
                    let t = "x";
                    return this.option("dragToClose") && (t += "y"), t;
                  }
                },
              },
              on: {
                "*": (t, ...e) => this.trigger(`Carousel.${t}`, ...e),
                init: (t) => (this.Carousel = t),
                createSlide: this.onCreateSlide,
                settle: this.onSettle,
              },
            },
            this.option("Carousel")
          )
        )),
        this.option("dragToClose") &&
          this.Carousel.Panzoom.on({
            touchMove: this.onTouchMove,
            afterTransform: this.onTransform,
            touchEnd: this.onTouchEnd,
          }),
        this.trigger("initCarousel"),
        this
      );
    }
    onCreateSlide(t, e) {
      let i = e.caption || "";
      if (
        ("function" == typeof this.options.caption &&
          (i = this.options.caption.call(this, this, this.Carousel, e)),
        "string" == typeof i && i.length)
      ) {
        const t = document.createElement("div"),
          s = `fancybox__caption_${this.id}_${e.index}`;
        (t.className = "fancybox__caption"),
          (t.innerHTML = i),
          t.setAttribute("id", s),
          (e.$caption = e.$el.appendChild(t)),
          e.$el.classList.add("has-caption"),
          e.$el.setAttribute("aria-labelledby", s);
      }
    }
    onSettle() {
      this.option("autoFocus") && this.focus();
    }
    onFocus(t) {
      this.focus(t);
    }
    onClick(t) {
      if (t.defaultPrevented) return;
      let e = t.composedPath()[0];
      if (e.matches("[data-fancybox-close]"))
        return t.preventDefault(), void Xt.close(!1, t);
      if (e.matches("[data-fancybox-next]"))
        return t.preventDefault(), void Xt.next();
      if (e.matches("[data-fancybox-prev]"))
        return t.preventDefault(), void Xt.prev();
      if (
        !(e.matches(At) || document.activeElement.blur(),
        e.closest(".fancybox__content") ||
          getSelection().toString().length ||
          !1 === this.trigger("click", t))
      )
        switch (this.option("click")) {
          case "close":
            this.close();
            break;
          case "next":
            this.next();
        }
    }
    onTouchMove() {
      const t = this.getSlide().Panzoom;
      return !t || 1 === t.content.scale;
    }
    onTouchEnd(t) {
      const e = t.dragOffset.y;
      Math.abs(e) >= 150 || (Math.abs(e) >= 35 && t.dragOffset.time < 350)
        ? (this.option("hideClass") &&
            (this.getSlide().hideClass =
              "fancybox-throwOut" + (t.content.y < 0 ? "Up" : "Down")),
          this.close())
        : "y" === t.lockAxis && t.panTo({ y: 0 });
    }
    onTransform(t) {
      if (this.$backdrop) {
        const e = Math.abs(t.content.y),
          i =
            e < 1
              ? ""
              : Math.max(
                  0.33,
                  Math.min(1, 1 - (e / t.content.fitHeight) * 1.5)
                );
        this.$container.style.setProperty("--fancybox-ts", i ? "0s" : ""),
          this.$container.style.setProperty("--fancybox-opacity", i);
      }
    }
    onMousedown() {
      "ready" === this.state && document.body.classList.add("is-using-mouse");
    }
    onKeydown(t) {
      if (Xt.getInstance().id !== this.id) return;
      document.body.classList.remove("is-using-mouse");
      const e = t.key,
        i = this.option("keyboard");
      if (!i || t.ctrlKey || t.altKey || t.shiftKey) return;
      const s = t.composedPath()[0],
        n = document.activeElement && document.activeElement.classList,
        o = n && n.contains("carousel__button");
      if (
        "Escape" !== e &&
        !o &&
        (t.target.isContentEditable ||
          -1 !==
            [
              "BUTTON",
              "TEXTAREA",
              "OPTION",
              "INPUT",
              "SELECT",
              "VIDEO",
            ].indexOf(s.nodeName))
      )
        return;
      if (!1 === this.trigger("keydown", e, t)) return;
      const a = i[e];
      "function" == typeof this[a] && this[a]();
    }
    getSlide() {
      const t = this.Carousel;
      if (!t) return null;
      const e = null === t.page ? t.option("initialPage") : t.page,
        i = t.pages || [];
      return i.length && i[e] ? i[e].slides[0] : null;
    }
    focus(t) {
      if (Xt.ignoreFocusChange) return;
      if (
        ["init", "closing", "customClosing", "destroy"].indexOf(this.state) > -1
      )
        return;
      const e = this.$container,
        i = this.getSlide(),
        s = "done" === i.state ? i.$el : null;
      if (s && s.contains(document.activeElement)) return;
      t && t.preventDefault(), (Xt.ignoreFocusChange = !0);
      const n = Array.from(e.querySelectorAll(At));
      let o,
        a = [];
      for (let t of n) {
        const e = t.offsetParent,
          i = s && s.contains(t),
          n = !this.Carousel.$viewport.contains(t);
        e && (i || n)
          ? (a.push(t),
            void 0 !== t.dataset.origTabindex &&
              ((t.tabIndex = t.dataset.origTabindex),
              t.removeAttribute("data-orig-tabindex")),
            (t.hasAttribute("autoFocus") ||
              (!o && i && !t.classList.contains("carousel__button"))) &&
              (o = t))
          : ((t.dataset.origTabindex =
              void 0 === t.dataset.origTabindex
                ? t.getAttribute("tabindex")
                : t.dataset.origTabindex),
            (t.tabIndex = -1));
      }
      t
        ? a.indexOf(t.target) > -1
          ? (this.lastFocus = t.target)
          : this.lastFocus === e
          ? _t(a[a.length - 1])
          : _t(e)
        : this.option("autoFocus") && o
        ? _t(o)
        : a.indexOf(document.activeElement) < 0 && _t(e),
        (this.lastFocus = document.activeElement),
        (Xt.ignoreFocusChange = !1);
    }
    hideScrollbar() {
      if (!kt) return;
      const t =
          window.innerWidth -
          document.documentElement.getBoundingClientRect().width,
        e = "fancybox-style-noscroll";
      let i = document.getElementById(e);
      i ||
        (t > 0 &&
          ((i = document.createElement("style")),
          (i.id = e),
          (i.type = "text/css"),
          (i.innerHTML = `.compensate-for-scrollbar {padding-right: ${t}px;}`),
          document.getElementsByTagName("head")[0].appendChild(i),
          document.body.classList.add("compensate-for-scrollbar")));
    }
    revealScrollbar() {
      document.body.classList.remove("compensate-for-scrollbar");
      const t = document.getElementById("fancybox-style-noscroll");
      t && t.remove();
    }
    clearContent(t) {
      this.Carousel.trigger("removeSlide", t),
        t.$content && (t.$content.remove(), (t.$content = null)),
        t.$closeButton && (t.$closeButton.remove(), (t.$closeButton = null)),
        t._className && t.$el.classList.remove(t._className);
    }
    setContent(t, e, i = {}) {
      let s;
      const n = t.$el;
      if (e instanceof HTMLElement)
        ["img", "iframe", "video", "audio"].indexOf(e.nodeName.toLowerCase()) >
        -1
          ? ((s = document.createElement("div")), s.appendChild(e))
          : (s = e);
      else {
        const t = document.createRange().createContextualFragment(e);
        (s = document.createElement("div")), s.appendChild(t);
      }
      if (
        (t.filter && !t.error && (s = s.querySelector(t.filter)),
        s instanceof Element)
      )
        return (
          (t._className = `has-${i.suffix || t.type || "unknown"}`),
          n.classList.add(t._className),
          s.classList.add("fancybox__content"),
          ("none" !== s.style.display &&
            "none" !== getComputedStyle(s).getPropertyValue("display")) ||
            (s.style.display =
              t.display || this.option("defaultDisplay") || "flex"),
          t.id && s.setAttribute("id", t.id),
          (t.$content = s),
          n.prepend(s),
          this.manageCloseButton(t),
          "loading" !== t.state && this.revealContent(t),
          s
        );
      this.setError(t, "{{ELEMENT_NOT_FOUND}}");
    }
    manageCloseButton(t) {
      const e =
        void 0 === t.closeButton ? this.option("closeButton") : t.closeButton;
      if (!e || ("top" === e && this.$closeButton)) return;
      const i = document.createElement("button");
      i.classList.add("carousel__button", "is-close"),
        i.setAttribute("title", this.options.l10n.CLOSE),
        (i.innerHTML = this.option("template.closeButton")),
        i.addEventListener("click", (t) => this.close(t)),
        "inside" === e
          ? (t.$closeButton && t.$closeButton.remove(),
            (t.$closeButton = t.$content.appendChild(i)))
          : (this.$closeButton = this.$container.insertBefore(
              i,
              this.$container.firstChild
            ));
    }
    revealContent(t) {
      this.trigger("reveal", t), (t.$content.style.visibility = "");
      let e = !1;
      t.error ||
        "loading" === t.state ||
        null !== this.Carousel.prevPage ||
        t.index !== this.options.startIndex ||
        (e = void 0 === t.showClass ? this.option("showClass") : t.showClass),
        e
          ? ((t.state = "animating"),
            this.animateCSS(t.$content, e, () => {
              this.done(t);
            }))
          : this.done(t);
    }
    animateCSS(t, e, i) {
      if (
        (t &&
          t.dispatchEvent(
            new CustomEvent("animationend", { bubbles: !0, cancelable: !0 })
          ),
        !t || !e)
      )
        return void ("function" == typeof i && i());
      const s = function (n) {
        n.currentTarget === this &&
          (t.removeEventListener("animationend", s),
          i && i(),
          t.classList.remove(e));
      };
      t.addEventListener("animationend", s), t.classList.add(e);
    }
    done(t) {
      (t.state = "done"), this.trigger("done", t);
      const e = this.getSlide();
      e && t.index === e.index && this.option("autoFocus") && this.focus();
    }
    setError(t, e) {
      (t.error = e), this.hideLoading(t), this.clearContent(t);
      const i = document.createElement("div");
      i.classList.add("fancybox-error"),
        (i.innerHTML = this.localize(e || "<p>{{ERROR}}</p>")),
        this.setContent(t, i, { suffix: "error" });
    }
    showLoading(t) {
      (t.state = "loading"), t.$el.classList.add("is-loading");
      let e = t.$el.querySelector(".fancybox__spinner");
      e ||
        ((e = document.createElement("div")),
        e.classList.add("fancybox__spinner"),
        (e.innerHTML = this.option("template.spinner")),
        e.addEventListener("click", () => {
          this.Carousel.Panzoom.velocity || this.close();
        }),
        t.$el.prepend(e));
    }
    hideLoading(t) {
      const e = t.$el && t.$el.querySelector(".fancybox__spinner");
      e && (e.remove(), t.$el.classList.remove("is-loading")),
        "loading" === t.state && (this.trigger("load", t), (t.state = "ready"));
    }
    next() {
      const t = this.Carousel;
      t && t.pages.length > 1 && t.slideNext();
    }
    prev() {
      const t = this.Carousel;
      t && t.pages.length > 1 && t.slidePrev();
    }
    jumpTo(...t) {
      this.Carousel && this.Carousel.slideTo(...t);
    }
    close(t) {
      if (
        (t && t.preventDefault(),
        ["closing", "customClosing", "destroy"].includes(this.state))
      )
        return;
      if (!1 === this.trigger("shouldClose", t)) return;
      if (
        ((this.state = "closing"),
        this.Carousel.Panzoom.destroy(),
        this.detachEvents(),
        this.trigger("closing", t),
        "destroy" === this.state)
      )
        return;
      this.$container.setAttribute("aria-hidden", "true"),
        this.$container.classList.add("is-closing");
      const e = this.getSlide();
      if (
        (this.Carousel.slides.forEach((t) => {
          t.$content &&
            t.index !== e.index &&
            this.Carousel.trigger("removeSlide", t);
        }),
        "closing" === this.state)
      ) {
        const t =
          void 0 === e.hideClass ? this.option("hideClass") : e.hideClass;
        this.animateCSS(
          e.$content,
          t,
          () => {
            this.destroy();
          },
          !0
        );
      }
    }
    destroy() {
      if ("destroy" === this.state) return;
      (this.state = "destroy"), this.trigger("destroy");
      const t = this.option("placeFocusBack") ? this.getSlide().$trigger : null;
      this.Carousel.destroy(),
        this.detachPlugins(),
        (this.Carousel = null),
        (this.options = {}),
        (this.events = {}),
        this.$container.remove(),
        (this.$container = this.$backdrop = this.$carousel = null),
        t && _t(t),
        jt.delete(this.id);
      const e = Xt.getInstance();
      e
        ? e.focus()
        : (document.documentElement.classList.remove("with-fancybox"),
          document.body.classList.remove("is-using-mouse"),
          this.revealScrollbar());
    }
    static show(t, e = {}) {
      return new Xt(t, e);
    }
    static fromEvent(t, e = {}) {
      if (t.defaultPrevented) return;
      if (t.button && 0 !== t.button) return;
      if (t.ctrlKey || t.metaKey || t.shiftKey) return;
      const i = t.composedPath()[0];
      let s,
        n,
        o,
        a = i;
      if (
        ((a.matches("[data-fancybox-trigger]") ||
          (a = a.closest("[data-fancybox-trigger]"))) &&
          (s = a && a.dataset && a.dataset.fancyboxTrigger),
        s)
      ) {
        const t = document.querySelectorAll(`[data-fancybox="${s}"]`),
          e = parseInt(a.dataset.fancyboxIndex, 10) || 0;
        a = t.length ? t[e] : a;
      }
      a || (a = i),
        Array.from(Xt.openers.keys())
          .reverse()
          .some((e) => {
            o = a;
            let i = !1;
            try {
              o instanceof Element &&
                ("string" == typeof e || e instanceof String) &&
                (i = o.matches(e) || (o = o.closest(e)));
            } catch (t) {}
            return !!i && (t.preventDefault(), (n = e), !0);
          });
      let r = !1;
      if (n) {
        (e.event = t),
          (e.target = o),
          (o.origTarget = i),
          (r = Xt.fromOpener(n, e));
        const s = Xt.getInstance();
        s &&
          "ready" === s.state &&
          t.detail &&
          document.body.classList.add("is-using-mouse");
      }
      return r;
    }
    static fromOpener(t, e = {}) {
      let i = [],
        s = e.startIndex || 0,
        n = e.target || null;
      const o =
          void 0 !== (e = pt({}, e, Xt.openers.get(t))).groupAll && e.groupAll,
        a = void 0 === e.groupAttr ? "data-fancybox" : e.groupAttr,
        r = a && n ? n.getAttribute(`${a}`) : "";
      if (!n || r || o) {
        const s = e.root || (n ? n.getRootNode() : document.body);
        i = [].slice.call(s.querySelectorAll(t));
      }
      if (
        (n &&
          !o &&
          (i = r ? i.filter((t) => t.getAttribute(`${a}`) === r) : [n]),
        !i.length)
      )
        return !1;
      const l = Xt.getInstance();
      return (
        !(l && i.indexOf(l.options.$trigger) > -1) &&
        ((s = n ? i.indexOf(n) : s),
        (i = i.map(function (t) {
          const e = ["false", "0", "no", "null", "undefined"],
            i = ["true", "1", "yes"],
            s = Object.assign({}, t.dataset),
            n = {};
          for (let [t, o] of Object.entries(s))
            if ("fancybox" !== t)
              if ("width" === t || "height" === t) n[`_${t}`] = o;
              else if ("string" == typeof o || o instanceof String)
                if (e.indexOf(o) > -1) n[t] = !1;
                else if (i.indexOf(n[t]) > -1) n[t] = !0;
                else
                  try {
                    n[t] = JSON.parse(o);
                  } catch (e) {
                    n[t] = o;
                  }
              else n[t] = o;
          return t instanceof Element && (n.$trigger = t), n;
        })),
        new Xt(i, pt({}, e, { startIndex: s, $trigger: n })))
      );
    }
    static bind(t, e = {}) {
      function i() {
        document.body.addEventListener("click", Xt.fromEvent, !1);
      }
      kt &&
        (Xt.openers.size ||
          (/complete|interactive|loaded/.test(document.readyState)
            ? i()
            : document.addEventListener("DOMContentLoaded", i)),
        Xt.openers.set(t, e));
    }
    static unbind(t) {
      Xt.openers.delete(t), Xt.openers.size || Xt.destroy();
    }
    static destroy() {
      let t;
      for (; (t = Xt.getInstance()); ) t.destroy();
      (Xt.openers = new Map()),
        document.body.removeEventListener("click", Xt.fromEvent, !1);
    }
    static getInstance(t) {
      return t
        ? jt.get(t)
        : Array.from(jt.values())
            .reverse()
            .find(
              (t) =>
                !["closing", "customClosing", "destroy"].includes(t.state) && t
            ) || null;
    }
    static close(t = !0, e) {
      if (t) for (const t of jt.values()) t.close(e);
      else {
        const t = Xt.getInstance();
        t && t.close(e);
      }
    }
    static next() {
      const t = Xt.getInstance();
      t && t.next();
    }
    static prev() {
      const t = Xt.getInstance();
      t && t.prev();
    }
  }
  (Xt.version = "4.0.27"),
    (Xt.defaults = qt),
    (Xt.openers = new Map()),
    (Xt.Plugins = Gt),
    Xt.bind("[data-fancybox]");
  for (const [t, e] of Object.entries(Xt.Plugins || {}))
    "function" == typeof e.create && e.create(Xt);
  (window.onload = function () {
    document.querySelectorAll(".aside__item a").forEach((t) => {
      t.href === document.URL && t.classList.add("_active");
    }),
      document.body.classList.add("loaded_hiding"),
      window.setTimeout(function () {
        document.body.classList.add("loaded"),
          document.body.classList.remove("loaded_hiding");
      }, 1e3);
  }),
    (window.FLS = !1),
    (function (t) {
      let e = new Image();
      (e.onload = e.onerror =
        function () {
          t(2 == e.height);
        }),
        (e.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (t) {
      let e = !0 === t ? "webp" : "no-webp";
      document.documentElement.classList.add(e);
    }),
    (function () {
      let t = document.querySelector(".icon-menu");
      t &&
        t.addEventListener("click", function (t) {
          i &&
            (((t = 500) => {
              document.documentElement.classList.contains("lock") ? s(t) : n(t);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })(),
    (function () {
      const i = document.querySelectorAll("[data-spollers]");
      if (i.length > 0) {
        const s = Array.from(i).filter(function (t, e, i) {
          return !t.dataset.spollers.split(",")[0];
        });
        s.length && a(s);
        let n = o(i, "spollers");
        function a(t, e = !1) {
          t.forEach((t) => {
            (t = e ? t.item : t),
              e.matches || !e
                ? (t.classList.add("_spoller-init"),
                  r(t),
                  t.addEventListener("click", l))
                : (t.classList.remove("_spoller-init"),
                  r(t, !1),
                  t.removeEventListener("click", l));
          });
        }
        function r(t, e = !0) {
          const i = t.querySelectorAll("[data-spoller]");
          i.length > 0 &&
            i.forEach((t) => {
              e
                ? (t.removeAttribute("tabindex"),
                  t.classList.contains("_spoller-active") ||
                    (t.nextElementSibling.hidden = !0))
                : (t.setAttribute("tabindex", "-1"),
                  (t.nextElementSibling.hidden = !1));
            });
        }
        function l(i) {
          const s = i.target;
          if (s.closest("[data-spoller]")) {
            const n = s.closest("[data-spoller]"),
              o = n.closest("[data-spollers]"),
              a = !!o.hasAttribute("data-one-spoller");
            o.querySelectorAll("._slide").length ||
              (a && !n.classList.contains("_spoller-active") && c(o),
              n.classList.toggle("_spoller-active"),
              ((i, s = 500) => {
                i.hidden ? e(i, s) : t(i, s);
              })(n.nextElementSibling, 500)),
              i.preventDefault();
          }
        }
        function c(e) {
          const i = e.querySelector("[data-spoller]._spoller-active");
          i &&
            (i.classList.remove("_spoller-active"),
            t(i.nextElementSibling, 500));
        }
        n &&
          n.length &&
          n.forEach((t) => {
            t.matchMedia.addEventListener("change", function () {
              a(t.itemsArray, t.matchMedia);
            }),
              a(t.itemsArray, t.matchMedia);
          });
      }
    })();
})();
