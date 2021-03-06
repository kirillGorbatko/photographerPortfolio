(() => {
  "use strict";
  let e = (e, t = 500, i = 0) => {
      e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.height = `${e.offsetHeight}px`),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = i ? `${i}px` : "0px"),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.hidden = !i),
            !i && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !i && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide");
        }, t));
    },
    t = (e, t = 500, i = 0) => {
      if (!e.classList.contains("_slide")) {
        e.classList.add("_slide"),
          (e.hidden = !e.hidden && null),
          i && e.style.removeProperty("height");
        let s = e.offsetHeight;
        (e.style.overflow = "hidden"),
          (e.style.height = i ? `${i}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          e.offsetHeight,
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = s + "px"),
          e.style.removeProperty("padding-top"),
          e.style.removeProperty("padding-bottom"),
          e.style.removeProperty("margin-top"),
          e.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            e.style.removeProperty("height"),
              e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t);
      }
    },
    i = !0,
    s = (e = 500) => {
      let t = document.querySelector("body");
      if (i) {
        let s = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight = "0px";
          }
          (t.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (i = !1),
          setTimeout(function () {
            i = !0;
          }, e);
      }
    },
    n = (e = 500) => {
      let t = document.querySelector("body");
      if (i) {
        let s = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < s.length; e++) {
          s[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (t.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (i = !1),
          setTimeout(function () {
            i = !0;
          }, e);
      }
    };
  function o(e, t) {
    const i = Array.from(e).filter(function (e, i, s) {
      if (e.dataset[t]) return e.dataset[t].split(",")[0];
    });
    if (i.length) {
      const e = [];
      i.forEach((i) => {
        const s = {},
          n = i.dataset[t].split(",");
        (s.value = n[0]),
          (s.type = n[1] ? n[1].trim() : "max"),
          (s.item = i),
          e.push(s);
      });
      let s = e.map(function (e) {
        return (
          "(" + e.type + "-width: " + e.value + "px)," + e.value + "," + e.type
        );
      });
      s = (function (e) {
        return e.filter(function (e, t, i) {
          return i.indexOf(e) === t;
        });
      })(s);
      const n = [];
      if (s.length)
        return (
          s.forEach((t) => {
            const i = t.split(","),
              s = i[1],
              o = i[2],
              a = window.matchMedia(i[0]),
              r = e.filter(function (e) {
                if (e.value === s && e.type === o) return !0;
              });
            n.push({ itemsArray: r, matchMedia: a });
          }),
          n
        );
    }
  }
  function a(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function r(e = {}, t = {}) {
    Object.keys(t).forEach((i) => {
      void 0 === e[i]
        ? (e[i] = t[i])
        : a(t[i]) && a(e[i]) && Object.keys(t[i]).length > 0 && r(e[i], t[i]);
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
    const e = "undefined" != typeof document ? document : {};
    return r(e, l), e;
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
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function h() {
    const e = "undefined" != typeof window ? window : {};
    return r(e, d), e;
  }
  class p extends Array {
    constructor(e) {
      "number" == typeof e
        ? super(e)
        : (super(...(e || [])),
          (function (e) {
            const t = e.__proto__;
            Object.defineProperty(e, "__proto__", {
              get: () => t,
              set(e) {
                t.__proto__ = e;
              },
            });
          })(this));
    }
  }
  function u(e = []) {
    const t = [];
    return (
      e.forEach((e) => {
        Array.isArray(e) ? t.push(...u(e)) : t.push(e);
      }),
      t
    );
  }
  function f(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function m(e, t) {
    const i = h(),
      s = c();
    let n = [];
    if (!t && e instanceof p) return e;
    if (!e) return new p(n);
    if ("string" == typeof e) {
      const i = e.trim();
      if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
        let e = "div";
        0 === i.indexOf("<li") && (e = "ul"),
          0 === i.indexOf("<tr") && (e = "tbody"),
          (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (e = "tr"),
          0 === i.indexOf("<tbody") && (e = "table"),
          0 === i.indexOf("<option") && (e = "select");
        const t = s.createElement(e);
        t.innerHTML = i;
        for (let e = 0; e < t.childNodes.length; e += 1)
          n.push(t.childNodes[e]);
      } else
        n = (function (e, t) {
          if ("string" != typeof e) return [e];
          const i = [],
            s = t.querySelectorAll(e);
          for (let e = 0; e < s.length; e += 1) i.push(s[e]);
          return i;
        })(e.trim(), t || s);
    } else if (e.nodeType || e === i || e === s) n.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof p) return e;
      n = e;
    }
    return new p(
      (function (e) {
        const t = [];
        for (let i = 0; i < e.length; i += 1)
          -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t;
      })(n)
    );
  }
  m.fn = p.prototype;
  const g = "resize scroll".split(" ");
  function v(e) {
    return function (...t) {
      if (void 0 === t[0]) {
        for (let t = 0; t < this.length; t += 1)
          g.indexOf(e) < 0 &&
            (e in this[t] ? this[t][e]() : m(this[t]).trigger(e));
        return this;
      }
      return this.on(e, ...t);
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
    addClass: function (...e) {
      const t = u(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.add(...t);
        }),
        this
      );
    },
    removeClass: function (...e) {
      const t = u(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.remove(...t);
        }),
        this
      );
    },
    hasClass: function (...e) {
      const t = u(e.map((e) => e.split(" ")));
      return (
        f(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
          .length > 0
      );
    },
    toggleClass: function (...e) {
      const t = u(e.map((e) => e.split(" ")));
      this.forEach((e) => {
        t.forEach((t) => {
          e.classList.toggle(t);
        });
      });
    },
    attr: function (e, t) {
      if (1 === arguments.length && "string" == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (let i = 0; i < this.length; i += 1)
        if (2 === arguments.length) this[i].setAttribute(e, t);
        else
          for (const t in e) (this[i][t] = e[t]), this[i].setAttribute(t, e[t]);
      return this;
    },
    removeAttr: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    transform: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
      return this;
    },
    transition: function (e) {
      for (let t = 0; t < this.length; t += 1)
        this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
      return this;
    },
    on: function (...e) {
      let [t, i, s, n] = e;
      function o(e) {
        const t = e.target;
        if (!t) return;
        const n = e.target.dom7EventData || [];
        if ((n.indexOf(e) < 0 && n.unshift(e), m(t).is(i))) s.apply(t, n);
        else {
          const e = m(t).parents();
          for (let t = 0; t < e.length; t += 1)
            m(e[t]).is(i) && s.apply(e[t], n);
        }
      }
      function a(e) {
        const t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
      }
      "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
        n || (n = !1);
      const r = t.split(" ");
      let l;
      for (let e = 0; e < this.length; e += 1) {
        const t = this[e];
        if (i)
          for (l = 0; l < r.length; l += 1) {
            const e = r[l];
            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
              t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
              t.dom7LiveListeners[e].push({ listener: s, proxyListener: o }),
              t.addEventListener(e, o, n);
          }
        else
          for (l = 0; l < r.length; l += 1) {
            const e = r[l];
            t.dom7Listeners || (t.dom7Listeners = {}),
              t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
              t.dom7Listeners[e].push({ listener: s, proxyListener: a }),
              t.addEventListener(e, a, n);
          }
      }
      return this;
    },
    off: function (...e) {
      let [t, i, s, n] = e;
      "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
        n || (n = !1);
      const o = t.split(" ");
      for (let e = 0; e < o.length; e += 1) {
        const t = o[e];
        for (let e = 0; e < this.length; e += 1) {
          const o = this[e];
          let a;
          if (
            (!i && o.dom7Listeners
              ? (a = o.dom7Listeners[t])
              : i && o.dom7LiveListeners && (a = o.dom7LiveListeners[t]),
            a && a.length)
          )
            for (let e = a.length - 1; e >= 0; e -= 1) {
              const i = a[e];
              (s && i.listener === s) ||
              (s &&
                i.listener &&
                i.listener.dom7proxy &&
                i.listener.dom7proxy === s)
                ? (o.removeEventListener(t, i.proxyListener, n), a.splice(e, 1))
                : s ||
                  (o.removeEventListener(t, i.proxyListener, n),
                  a.splice(e, 1));
            }
        }
      }
      return this;
    },
    trigger: function (...e) {
      const t = h(),
        i = e[0].split(" "),
        s = e[1];
      for (let n = 0; n < i.length; n += 1) {
        const o = i[n];
        for (let i = 0; i < this.length; i += 1) {
          const n = this[i];
          if (t.CustomEvent) {
            const i = new t.CustomEvent(o, {
              detail: s,
              bubbles: !0,
              cancelable: !0,
            });
            (n.dom7EventData = e.filter((e, t) => t > 0)),
              n.dispatchEvent(i),
              (n.dom7EventData = []),
              delete n.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function (e) {
      const t = this;
      return (
        e &&
          t.on("transitionend", function i(s) {
            s.target === this && (e.call(this, s), t.off("transitionend", i));
          }),
        this
      );
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(e.getPropertyValue("margin-right")) +
            parseFloat(e.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(e.getPropertyValue("margin-top")) +
            parseFloat(e.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function () {
      const e = h();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        const e = h(),
          t = c(),
          i = this[0],
          s = i.getBoundingClientRect(),
          n = t.body,
          o = i.clientTop || n.clientTop || 0,
          a = i.clientLeft || n.clientLeft || 0,
          r = i === e ? e.scrollY : i.scrollTop,
          l = i === e ? e.scrollX : i.scrollLeft;
        return { top: s.top + r - o, left: s.left + l - a };
      }
      return null;
    },
    css: function (e, t) {
      const i = h();
      let s;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (s = 0; s < this.length; s += 1)
            for (const t in e) this[s].style[t] = e[t];
          return this;
        }
        if (this[0])
          return i.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      return e
        ? (this.forEach((t, i) => {
            e.apply(t, [t, i]);
          }),
          this)
        : this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;
      for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      const t = h(),
        i = c(),
        s = this[0];
      let n, o;
      if (!s || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (s.matches) return s.matches(e);
        if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
        if (s.msMatchesSelector) return s.msMatchesSelector(e);
        for (n = m(e), o = 0; o < n.length; o += 1) if (n[o] === s) return !0;
        return !1;
      }
      if (e === i) return s === i;
      if (e === t) return s === t;
      if (e.nodeType || e instanceof p) {
        for (n = e.nodeType ? [e] : e, o = 0; o < n.length; o += 1)
          if (n[o] === s) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      let e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      const t = this.length;
      if (e > t - 1) return m([]);
      if (e < 0) {
        const i = t + e;
        return m(i < 0 ? [] : [this[i]]);
      }
      return m([this[e]]);
    },
    append: function (...e) {
      let t;
      const i = c();
      for (let s = 0; s < e.length; s += 1) {
        t = e[s];
        for (let e = 0; e < this.length; e += 1)
          if ("string" == typeof t) {
            const s = i.createElement("div");
            for (s.innerHTML = t; s.firstChild; )
              this[e].appendChild(s.firstChild);
          } else if (t instanceof p)
            for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
          else this[e].appendChild(t);
      }
      return this;
    },
    prepend: function (e) {
      const t = c();
      let i, s;
      for (i = 0; i < this.length; i += 1)
        if ("string" == typeof e) {
          const n = t.createElement("div");
          for (n.innerHTML = e, s = n.childNodes.length - 1; s >= 0; s -= 1)
            this[i].insertBefore(n.childNodes[s], this[i].childNodes[0]);
        } else if (e instanceof p)
          for (s = 0; s < e.length; s += 1)
            this[i].insertBefore(e[s], this[i].childNodes[0]);
        else this[i].insertBefore(e, this[i].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e)
            ? m([this[0].nextElementSibling])
            : m([])
          : this[0].nextElementSibling
          ? m([this[0].nextElementSibling])
          : m([])
        : m([]);
    },
    nextAll: function (e) {
      const t = [];
      let i = this[0];
      if (!i) return m([]);
      for (; i.nextElementSibling; ) {
        const s = i.nextElementSibling;
        e ? m(s).is(e) && t.push(s) : t.push(s), (i = s);
      }
      return m(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        const t = this[0];
        return e
          ? t.previousElementSibling && m(t.previousElementSibling).is(e)
            ? m([t.previousElementSibling])
            : m([])
          : t.previousElementSibling
          ? m([t.previousElementSibling])
          : m([]);
      }
      return m([]);
    },
    prevAll: function (e) {
      const t = [];
      let i = this[0];
      if (!i) return m([]);
      for (; i.previousElementSibling; ) {
        const s = i.previousElementSibling;
        e ? m(s).is(e) && t.push(s) : t.push(s), (i = s);
      }
      return m(t);
    },
    parent: function (e) {
      const t = [];
      for (let i = 0; i < this.length; i += 1)
        null !== this[i].parentNode &&
          (e
            ? m(this[i].parentNode).is(e) && t.push(this[i].parentNode)
            : t.push(this[i].parentNode));
      return m(t);
    },
    parents: function (e) {
      const t = [];
      for (let i = 0; i < this.length; i += 1) {
        let s = this[i].parentNode;
        for (; s; ) e ? m(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
      }
      return m(t);
    },
    closest: function (e) {
      let t = this;
      return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      const t = [];
      for (let i = 0; i < this.length; i += 1) {
        const s = this[i].querySelectorAll(e);
        for (let e = 0; e < s.length; e += 1) t.push(s[e]);
      }
      return m(t);
    },
    children: function (e) {
      const t = [];
      for (let i = 0; i < this.length; i += 1) {
        const s = this[i].children;
        for (let i = 0; i < s.length; i += 1)
          (e && !m(s[i]).is(e)) || t.push(s[i]);
      }
      return m(t);
    },
    filter: function (e) {
      return m(f(this, e));
    },
    remove: function () {
      for (let e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
  };
  Object.keys(b).forEach((e) => {
    Object.defineProperty(m.fn, e, { value: b[e], writable: !0 });
  });
  const y = m;
  function x(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function w() {
    return Date.now();
  }
  function C(e, t) {
    void 0 === t && (t = "x");
    const i = h();
    let s, n, o;
    const a = (function (e) {
      const t = h();
      let i;
      return (
        t.getComputedStyle && (i = t.getComputedStyle(e, null)),
        !i && e.currentStyle && (i = e.currentStyle),
        i || (i = e.style),
        i
      );
    })(e);
    return (
      i.WebKitCSSMatrix
        ? ((n = a.transform || a.webkitTransform),
          n.split(",").length > 6 &&
            (n = n
              .split(", ")
              .map((e) => e.replace(",", "."))
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
      "x" === t &&
        (n = i.WebKitCSSMatrix
          ? o.m41
          : 16 === s.length
          ? parseFloat(s[12])
          : parseFloat(s[4])),
      "y" === t &&
        (n = i.WebKitCSSMatrix
          ? o.m42
          : 16 === s.length
          ? parseFloat(s[13])
          : parseFloat(s[5])),
      n || 0
    );
  }
  function S(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function E(e) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement
      ? e instanceof HTMLElement
      : e && (1 === e.nodeType || 11 === e.nodeType);
  }
  function T() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < arguments.length; i += 1) {
      const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
      if (null != s && !E(s)) {
        const i = Object.keys(Object(s)).filter((e) => t.indexOf(e) < 0);
        for (let t = 0, n = i.length; t < n; t += 1) {
          const n = i[t],
            o = Object.getOwnPropertyDescriptor(s, n);
          void 0 !== o &&
            o.enumerable &&
            (S(e[n]) && S(s[n])
              ? s[n].__swiper__
                ? (e[n] = s[n])
                : T(e[n], s[n])
              : !S(e[n]) && S(s[n])
              ? ((e[n] = {}), s[n].__swiper__ ? (e[n] = s[n]) : T(e[n], s[n]))
              : (e[n] = s[n]));
        }
      }
    }
    return e;
  }
  function $(e, t, i) {
    e.style.setProperty(t, i);
  }
  function P(e) {
    let { swiper: t, targetPosition: i, side: s } = e;
    const n = h(),
      o = -t.translate;
    let a,
      r = null;
    const l = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      n.cancelAnimationFrame(t.cssModeFrameID);
    const c = i > o ? "next" : "prev",
      d = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
      p = () => {
        (a = new Date().getTime()), null === r && (r = a);
        const e = Math.max(Math.min((a - r) / l, 1), 0),
          c = 0.5 - Math.cos(e * Math.PI) / 2;
        let h = o + c * (i - o);
        if ((d(h, i) && (h = i), t.wrapperEl.scrollTo({ [s]: h }), d(h, i)))
          return (
            (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [s]: h });
            }),
            void n.cancelAnimationFrame(t.cssModeFrameID)
          );
        t.cssModeFrameID = n.requestAnimationFrame(p);
      };
    p();
  }
  let L, k, M;
  function A() {
    return (
      L ||
        (L = (function () {
          const e = h(),
            t = c();
          return {
            smoothScroll:
              t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            passiveListener: (function () {
              let t = !1;
              try {
                const i = Object.defineProperty({}, "passive", {
                  get() {
                    t = !0;
                  },
                });
                e.addEventListener("testPassiveListener", null, i);
              } catch (e) {}
              return t;
            })(),
            gestures: "ongesturestart" in e,
          };
        })()),
      L
    );
  }
  function _(e) {
    return (
      void 0 === e && (e = {}),
      k ||
        (k = (function (e) {
          let { userAgent: t } = void 0 === e ? {} : e;
          const i = A(),
            s = h(),
            n = s.navigator.platform,
            o = t || s.navigator.userAgent,
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
        })(e)),
      k
    );
  }
  function O() {
    return (
      M ||
        (M = (function () {
          const e = h();
          return {
            isSafari: (function () {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            })(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      M
    );
  }
  const z = {
    on(e, t, i) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof t) return s;
      const n = i ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          s.eventsListeners[e] || (s.eventsListeners[e] = []),
            s.eventsListeners[e][n](t);
        }),
        s
      );
    },
    once(e, t, i) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof t) return s;
      function n() {
        s.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
        for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
          o[a] = arguments[a];
        t.apply(s, o);
      }
      return (n.__emitterProxy = t), s.on(e, n, i);
    },
    onAny(e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof e) return i;
      const s = t ? "unshift" : "push";
      return (
        i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const i = t.eventsAnyListeners.indexOf(e);
      return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
    },
    off(e, t) {
      const i = this;
      return !i.eventsListeners || i.destroyed
        ? i
        : i.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (i.eventsListeners[e] = [])
              : i.eventsListeners[e] &&
                i.eventsListeners[e].forEach((s, n) => {
                  (s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                    i.eventsListeners[e].splice(n, 1);
                });
          }),
          i)
        : i;
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      let t, i, s;
      for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
        o[a] = arguments[a];
      "string" == typeof o[0] || Array.isArray(o[0])
        ? ((t = o[0]), (i = o.slice(1, o.length)), (s = e))
        : ((t = o[0].events), (i = o[0].data), (s = o[0].context || e)),
        i.unshift(s);
      return (
        (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((e) => {
              e.apply(s, [t, ...i]);
            }),
            e.eventsListeners &&
              e.eventsListeners[t] &&
              e.eventsListeners[t].forEach((e) => {
                e.apply(s, i);
              });
        }),
        e
      );
    },
  };
  const I = {
    updateSize: function () {
      const e = this;
      let t, i;
      const s = e.$el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : s[0].clientWidth),
        (i =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : s[0].clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === i && e.isVertical()) ||
          ((t =
            t -
            parseInt(s.css("padding-left") || 0, 10) -
            parseInt(s.css("padding-right") || 0, 10)),
          (i =
            i -
            parseInt(s.css("padding-top") || 0, 10) -
            parseInt(s.css("padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(i) && (i = 0),
          Object.assign(e, {
            width: t,
            height: i,
            size: e.isHorizontal() ? t : i,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[t];
      }
      function i(e, i) {
        return parseFloat(e.getPropertyValue(t(i)) || 0);
      }
      const s = e.params,
        { $wrapperEl: n, size: o, rtlTranslate: a, wrongRTL: r } = e,
        l = e.virtual && s.virtual.enabled,
        c = l ? e.virtual.slides.length : e.slides.length,
        d = n.children(`.${e.params.slideClass}`),
        h = l ? e.virtual.slides.length : d.length;
      let p = [];
      const u = [],
        f = [];
      let m = s.slidesOffsetBefore;
      "function" == typeof m && (m = s.slidesOffsetBefore.call(e));
      let g = s.slidesOffsetAfter;
      "function" == typeof g && (g = s.slidesOffsetAfter.call(e));
      const v = e.snapGrid.length,
        b = e.slidesGrid.length;
      let y = s.spaceBetween,
        x = -m,
        w = 0,
        C = 0;
      if (void 0 === o) return;
      "string" == typeof y &&
        y.indexOf("%") >= 0 &&
        (y = (parseFloat(y.replace("%", "")) / 100) * o),
        (e.virtualSize = -y),
        a
          ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
          : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
        s.centeredSlides &&
          s.cssMode &&
          ($(e.wrapperEl, "--swiper-centered-offset-before", ""),
          $(e.wrapperEl, "--swiper-centered-offset-after", ""));
      const S = s.grid && s.grid.rows > 1 && e.grid;
      let E;
      S && e.grid.initSlides(h);
      const T =
        "auto" === s.slidesPerView &&
        s.breakpoints &&
        Object.keys(s.breakpoints).filter(
          (e) => void 0 !== s.breakpoints[e].slidesPerView
        ).length > 0;
      for (let n = 0; n < h; n += 1) {
        E = 0;
        const a = d.eq(n);
        if (
          (S && e.grid.updateSlide(n, a, h, t), "none" !== a.css("display"))
        ) {
          if ("auto" === s.slidesPerView) {
            T && (d[n].style[t("width")] = "");
            const o = getComputedStyle(a[0]),
              r = a[0].style.transform,
              l = a[0].style.webkitTransform;
            if (
              (r && (a[0].style.transform = "none"),
              l && (a[0].style.webkitTransform = "none"),
              s.roundLengths)
            )
              E = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
            else {
              const e = i(o, "width"),
                t = i(o, "padding-left"),
                s = i(o, "padding-right"),
                n = i(o, "margin-left"),
                r = i(o, "margin-right"),
                l = o.getPropertyValue("box-sizing");
              if (l && "border-box" === l) E = e + n + r;
              else {
                const { clientWidth: i, offsetWidth: o } = a[0];
                E = e + t + s + n + r + (o - i);
              }
            }
            r && (a[0].style.transform = r),
              l && (a[0].style.webkitTransform = l),
              s.roundLengths && (E = Math.floor(E));
          } else
            (E = (o - (s.slidesPerView - 1) * y) / s.slidesPerView),
              s.roundLengths && (E = Math.floor(E)),
              d[n] && (d[n].style[t("width")] = `${E}px`);
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
                (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                  e.params.slidesPerGroup ==
                  0 && p.push(x),
                u.push(x),
                (x = x + E + y)),
            (e.virtualSize += E + y),
            (w = E),
            (C += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, o) + g),
        a &&
          r &&
          ("slide" === s.effect || "coverflow" === s.effect) &&
          n.css({ width: `${e.virtualSize + s.spaceBetween}px` }),
        s.setWrapperSize &&
          n.css({ [t("width")]: `${e.virtualSize + s.spaceBetween}px` }),
        S && e.grid.updateWrapperSize(E, p, t),
        !s.centeredSlides)
      ) {
        const t = [];
        for (let i = 0; i < p.length; i += 1) {
          let n = p[i];
          s.roundLengths && (n = Math.floor(n)),
            p[i] <= e.virtualSize - o && t.push(n);
        }
        (p = t),
          Math.floor(e.virtualSize - o) - Math.floor(p[p.length - 1]) > 1 &&
            p.push(e.virtualSize - o);
      }
      if ((0 === p.length && (p = [0]), 0 !== s.spaceBetween)) {
        const i = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
        d.filter((e, t) => !s.cssMode || t !== d.length - 1).css({
          [i]: `${y}px`,
        });
      }
      if (s.centeredSlides && s.centeredSlidesBounds) {
        let e = 0;
        f.forEach((t) => {
          e += t + (s.spaceBetween ? s.spaceBetween : 0);
        }),
          (e -= s.spaceBetween);
        const t = e - o;
        p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
      }
      if (s.centerInsufficientSlides) {
        let e = 0;
        if (
          (f.forEach((t) => {
            e += t + (s.spaceBetween ? s.spaceBetween : 0);
          }),
          (e -= s.spaceBetween),
          e < o)
        ) {
          const t = (o - e) / 2;
          p.forEach((e, i) => {
            p[i] = e - t;
          }),
            u.forEach((e, i) => {
              u[i] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: d,
          snapGrid: p,
          slidesGrid: u,
          slidesSizesGrid: f,
        }),
        s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
      ) {
        $(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
          $(
            e.wrapperEl,
            "--swiper-centered-offset-after",
            e.size / 2 - f[f.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          i = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + i));
      }
      if (
        (h !== c && e.emit("slidesLengthChange"),
        p.length !== v &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        u.length !== b && e.emit("slidesGridLengthChange"),
        s.watchSlidesProgress && e.updateSlidesOffset(),
        !(l || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
      ) {
        const t = `${s.containerModifierClass}backface-hidden`,
          i = e.$el.hasClass(t);
        h <= s.maxBackfaceHiddenSlides
          ? i || e.$el.addClass(t)
          : i && e.$el.removeClass(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        i = [],
        s = t.virtual && t.params.virtual.enabled;
      let n,
        o = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const a = (e) =>
        s
          ? t.slides.filter(
              (t) =>
                parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
            )[0]
          : t.slides.eq(e)[0];
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          (t.visibleSlides || y([])).each((e) => {
            i.push(e);
          });
        else
          for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
            const e = t.activeIndex + n;
            if (e > t.slides.length && !s) break;
            i.push(a(e));
          }
      else i.push(a(t.activeIndex));
      for (n = 0; n < i.length; n += 1)
        if (void 0 !== i[n]) {
          const e = i[n].offsetHeight;
          o = e > o ? e : o;
        }
      (o || 0 === o) && t.$wrapperEl.css("height", `${o}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides;
      for (let i = 0; i < t.length; i += 1)
        t[i].swiperSlideOffset = e.isHorizontal()
          ? t[i].offsetLeft
          : t[i].offsetTop;
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      const t = this,
        i = t.params,
        { slides: s, rtlTranslate: n, snapGrid: o } = t;
      if (0 === s.length) return;
      void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
      let a = -e;
      n && (a = e),
        s.removeClass(i.slideVisibleClass),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      for (let e = 0; e < s.length; e += 1) {
        const r = s[e];
        let l = r.swiperSlideOffset;
        i.cssMode && i.centeredSlides && (l -= s[0].swiperSlideOffset);
        const c =
            (a + (i.centeredSlides ? t.minTranslate() : 0) - l) /
            (r.swiperSlideSize + i.spaceBetween),
          d =
            (a - o[0] + (i.centeredSlides ? t.minTranslate() : 0) - l) /
            (r.swiperSlideSize + i.spaceBetween),
          h = -(a - l),
          p = h + t.slidesSizesGrid[e];
        ((h >= 0 && h < t.size - 1) ||
          (p > 1 && p <= t.size) ||
          (h <= 0 && p >= t.size)) &&
          (t.visibleSlides.push(r),
          t.visibleSlidesIndexes.push(e),
          s.eq(e).addClass(i.slideVisibleClass)),
          (r.progress = n ? -c : c),
          (r.originalProgress = n ? -d : d);
      }
      t.visibleSlides = y(t.visibleSlides);
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const i = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * i) || 0;
      }
      const i = t.params,
        s = t.maxTranslate() - t.minTranslate();
      let { progress: n, isBeginning: o, isEnd: a } = t;
      const r = o,
        l = a;
      0 === s
        ? ((n = 0), (o = !0), (a = !0))
        : ((n = (e - t.minTranslate()) / s), (o = n <= 0), (a = n >= 1)),
        Object.assign(t, { progress: n, isBeginning: o, isEnd: a }),
        (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
          t.updateSlidesProgress(e),
        o && !r && t.emit("reachBeginning toEdge"),
        a && !l && t.emit("reachEnd toEdge"),
        ((r && !o) || (l && !a)) && t.emit("fromEdge"),
        t.emit("progress", n);
    },
    updateSlidesClasses: function () {
      const e = this,
        {
          slides: t,
          params: i,
          $wrapperEl: s,
          activeIndex: n,
          realIndex: o,
        } = e,
        a = e.virtual && i.virtual.enabled;
      let r;
      t.removeClass(
        `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
      ),
        (r = a
          ? e.$wrapperEl.find(
              `.${i.slideClass}[data-swiper-slide-index="${n}"]`
            )
          : t.eq(n)),
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
      i.loop && 0 === l.length && ((l = t.eq(0)), l.addClass(i.slideNextClass));
      let c = r.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
      i.loop &&
        0 === c.length &&
        ((c = t.eq(-1)), c.addClass(i.slidePrevClass)),
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
        e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        i = t.rtlTranslate ? t.translate : -t.translate,
        {
          slidesGrid: s,
          snapGrid: n,
          params: o,
          activeIndex: a,
          realIndex: r,
          snapIndex: l,
        } = t;
      let c,
        d = e;
      if (void 0 === d) {
        for (let e = 0; e < s.length; e += 1)
          void 0 !== s[e + 1]
            ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2
              ? (d = e)
              : i >= s[e] && i < s[e + 1] && (d = e + 1)
            : i >= s[e] && (d = e);
        o.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
      }
      if (n.indexOf(i) >= 0) c = n.indexOf(i);
      else {
        const e = Math.min(o.slidesPerGroupSkip, d);
        c = e + Math.floor((d - e) / o.slidesPerGroup);
      }
      if ((c >= n.length && (c = n.length - 1), d === a))
        return void (c !== l && ((t.snapIndex = c), t.emit("snapIndexChange")));
      const h = parseInt(
        t.slides.eq(d).attr("data-swiper-slide-index") || d,
        10
      );
      Object.assign(t, {
        snapIndex: c,
        realIndex: h,
        previousIndex: a,
        activeIndex: d,
      }),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        r !== h && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        i = t.params,
        s = y(e).closest(`.${i.slideClass}`)[0];
      let n,
        o = !1;
      if (s)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === s) {
            (o = !0), (n = e);
            break;
          }
      if (!s || !o)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = s),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              y(s).attr("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = n),
        i.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  const N = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      const { params: t, rtlTranslate: i, translate: s, $wrapperEl: n } = this;
      if (t.virtualTranslate) return i ? -s : s;
      if (t.cssMode) return s;
      let o = C(n[0], e);
      return i && (o = -o), o || 0;
    },
    setTranslate: function (e, t) {
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
      i.isHorizontal() ? (c = s ? -e : e) : (d = e),
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
      (l = 0 === h ? 0 : (e - i.minTranslate()) / h),
        l !== r && i.updateProgress(e),
        i.emit("setTranslate", i.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, i, s, n) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === i && (i = !0),
        void 0 === s && (s = !0);
      const o = this,
        { params: a, wrapperEl: r } = o;
      if (o.animating && a.preventInteractionOnTransition) return !1;
      const l = o.minTranslate(),
        c = o.maxTranslate();
      let d;
      if (
        ((d = s && e > l ? l : s && e < c ? c : e),
        o.updateProgress(d),
        a.cssMode)
      ) {
        const e = o.isHorizontal();
        if (0 === t) r[e ? "scrollLeft" : "scrollTop"] = -d;
        else {
          if (!o.support.smoothScroll)
            return (
              P({ swiper: o, targetPosition: -d, side: e ? "left" : "top" }), !0
            );
          r.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (o.setTransition(0),
            o.setTranslate(d),
            i &&
              (o.emit("beforeTransitionStart", t, n), o.emit("transitionEnd")))
          : (o.setTransition(t),
            o.setTranslate(d),
            i &&
              (o.emit("beforeTransitionStart", t, n),
              o.emit("transitionStart")),
            o.animating ||
              ((o.animating = !0),
              o.onTranslateToWrapperTransitionEnd ||
                (o.onTranslateToWrapperTransitionEnd = function (e) {
                  o &&
                    !o.destroyed &&
                    e.target === this &&
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
  function D(e) {
    let { swiper: t, runCallbacks: i, direction: s, step: n } = e;
    const { activeIndex: o, previousIndex: a } = t;
    let r = s;
    if (
      (r || (r = o > a ? "next" : o < a ? "prev" : "reset"),
      t.emit(`transition${n}`),
      i && o !== a)
    ) {
      if ("reset" === r) return void t.emit(`slideResetTransition${n}`);
      t.emit(`slideChangeTransition${n}`),
        "next" === r
          ? t.emit(`slideNextTransition${n}`)
          : t.emit(`slidePrevTransition${n}`);
    }
  }
  const F = {
    slideTo: function (e, t, i, s, n) {
      if (
        (void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === i && (i = !0),
        "number" != typeof e && "string" != typeof e)
      )
        throw new Error(
          `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
        );
      if ("string" == typeof e) {
        const t = parseInt(e, 10);
        if (!isFinite(t))
          throw new Error(
            `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
          );
        e = t;
      }
      const o = this;
      let a = e;
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
        for (let e = 0; e < c.length; e += 1) {
          const t = -Math.floor(100 * v),
            i = Math.floor(100 * c[e]),
            s = Math.floor(100 * c[e + 1]);
          void 0 !== c[e + 1]
            ? t >= i && t < s - (s - i) / 2
              ? (a = e)
              : t >= i && t < s && (a = e + 1)
            : t >= i && (a = e);
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
        const e = o.isHorizontal(),
          i = p ? v : -v;
        if (0 === t) {
          const t = o.virtual && o.params.virtual.enabled;
          t &&
            ((o.wrapperEl.style.scrollSnapType = "none"),
            (o._immediateVirtual = !0)),
            (u[e ? "scrollLeft" : "scrollTop"] = i),
            t &&
              requestAnimationFrame(() => {
                (o.wrapperEl.style.scrollSnapType = ""),
                  (o._swiperImmediateVirtual = !1);
              });
        } else {
          if (!o.support.smoothScroll)
            return (
              P({ swiper: o, targetPosition: i, side: e ? "left" : "top" }), !0
            );
          u.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
        }
        return !0;
      }
      return (
        o.setTransition(t),
        o.setTranslate(v),
        o.updateActiveIndex(a),
        o.updateSlidesClasses(),
        o.emit("beforeTransitionStart", t, s),
        o.transitionStart(i, b),
        0 === t
          ? o.transitionEnd(i, b)
          : o.animating ||
            ((o.animating = !0),
            o.onSlideToWrapperTransitionEnd ||
              (o.onSlideToWrapperTransitionEnd = function (e) {
                o &&
                  !o.destroyed &&
                  e.target === this &&
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
    slideToLoop: function (e, t, i, s) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === i && (i = !0);
      const n = this;
      let o = e;
      return n.params.loop && (o += n.loopedSlides), n.slideTo(o, t, i, s);
    },
    slideNext: function (e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
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
        ? s.slideTo(0, e, t, i)
        : s.slideTo(s.activeIndex + l, e, t, i);
    },
    slidePrev: function (e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
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
      function d(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const h = d(l ? s.translate : -s.translate),
        p = a.map((e) => d(e));
      let u = a[p.indexOf(h) - 1];
      if (void 0 === u && n.cssMode) {
        let e;
        a.forEach((t, i) => {
          h >= t && (e = i);
        }),
          void 0 !== e && (u = a[e > 0 ? e - 1 : e]);
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
        return s.slideTo(n, e, t, i);
      }
      return s.slideTo(f, e, t, i);
    },
    slideReset: function (e, t, i) {
      return (
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, i)
      );
    },
    slideToClosest: function (e, t, i, s) {
      void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        void 0 === s && (s = 0.5);
      const n = this;
      let o = n.activeIndex;
      const a = Math.min(n.params.slidesPerGroupSkip, o),
        r = a + Math.floor((o - a) / n.params.slidesPerGroup),
        l = n.rtlTranslate ? n.translate : -n.translate;
      if (l >= n.snapGrid[r]) {
        const e = n.snapGrid[r];
        l - e > (n.snapGrid[r + 1] - e) * s && (o += n.params.slidesPerGroup);
      } else {
        const e = n.snapGrid[r - 1];
        l - e <= (n.snapGrid[r] - e) * s && (o -= n.params.slidesPerGroup);
      }
      return (
        (o = Math.max(o, 0)),
        (o = Math.min(o, n.slidesGrid.length - 1)),
        n.slideTo(o, e, t, i)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, $wrapperEl: i } = e,
        s =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let n,
        o = e.clickedIndex;
      if (t.loop) {
        if (e.animating) return;
        (n = parseInt(y(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
          t.centeredSlides
            ? o < e.loopedSlides - s / 2 ||
              o > e.slides.length - e.loopedSlides + s / 2
              ? (e.loopFix(),
                (o = i
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                x(() => {
                  e.slideTo(o);
                }))
              : e.slideTo(o)
            : o > e.slides.length - s
            ? (e.loopFix(),
              (o = i
                .children(
                  `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              x(() => {
                e.slideTo(o);
              }))
            : e.slideTo(o);
      } else e.slideTo(o);
    },
  };
  const B = {
    loopCreate: function () {
      const e = this,
        t = c(),
        { params: i, $wrapperEl: s } = e,
        n = s.children().length > 0 ? y(s.children()[0].parentNode) : s;
      n.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
      let o = n.children(`.${i.slideClass}`);
      if (i.loopFillGroupWithBlank) {
        const e = i.slidesPerGroup - (o.length % i.slidesPerGroup);
        if (e !== i.slidesPerGroup) {
          for (let s = 0; s < e; s += 1) {
            const e = y(t.createElement("div")).addClass(
              `${i.slideClass} ${i.slideBlankClass}`
            );
            n.append(e);
          }
          o = n.children(`.${i.slideClass}`);
        }
      }
      "auto" !== i.slidesPerView ||
        i.loopedSlides ||
        (i.loopedSlides = o.length),
        (e.loopedSlides = Math.ceil(
          parseFloat(i.loopedSlides || i.slidesPerView, 10)
        )),
        (e.loopedSlides += i.loopAdditionalSlides),
        e.loopedSlides > o.length && (e.loopedSlides = o.length);
      const a = [],
        r = [];
      o.each((t, i) => {
        const s = y(t);
        i < e.loopedSlides && r.push(t),
          i < o.length && i >= o.length - e.loopedSlides && a.push(t),
          s.attr("data-swiper-slide-index", i);
      });
      for (let e = 0; e < r.length; e += 1)
        n.append(y(r[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
      for (let e = a.length - 1; e >= 0; e -= 1)
        n.prepend(y(a[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
    },
    loopFix: function () {
      const e = this;
      e.emit("beforeLoopFix");
      const {
        activeIndex: t,
        slides: i,
        loopedSlides: s,
        allowSlidePrev: n,
        allowSlideNext: o,
        snapGrid: a,
        rtlTranslate: r,
      } = e;
      let l;
      (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
      const c = -a[t] - e.getTranslate();
      if (t < s) {
        (l = i.length - 3 * s + t), (l += s);
        e.slideTo(l, 0, !1, !0) &&
          0 !== c &&
          e.setTranslate((r ? -e.translate : e.translate) - c);
      } else if (t >= i.length - s) {
        (l = -i.length + t + s), (l += s);
        e.slideTo(l, 0, !1, !0) &&
          0 !== c &&
          e.setTranslate((r ? -e.translate : e.translate) - c);
      }
      (e.allowSlidePrev = n), (e.allowSlideNext = o), e.emit("loopFix");
    },
    loopDestroy: function () {
      const { $wrapperEl: e, params: t, slides: i } = this;
      e
        .children(
          `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
        )
        .remove(),
        i.removeAttr("data-swiper-slide-index");
    },
  };
  function R(e) {
    const t = this,
      i = c(),
      s = h(),
      n = t.touchEventsData,
      { params: o, touches: a, enabled: r } = t;
    if (!r) return;
    if (t.animating && o.preventInteractionOnTransition) return;
    !t.animating && o.cssMode && o.loop && t.loopFix();
    let l = e;
    l.originalEvent && (l = l.originalEvent);
    let d = y(l.target);
    if ("wrapper" === o.touchEventsTarget && !d.closest(t.wrapperEl).length)
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
      e.path &&
      e.path[0] &&
      (d = y(e.path[0]));
    const p = o.noSwipingSelector
        ? o.noSwipingSelector
        : `.${o.noSwipingClass}`,
      u = !(!l.target || !l.target.shadowRoot);
    if (
      o.noSwiping &&
      (u
        ? (function (e, t) {
            return (
              void 0 === t && (t = this),
              (function t(i) {
                if (!i || i === c() || i === h()) return null;
                i.assignedSlot && (i = i.assignedSlot);
                const s = i.closest(e);
                return s || i.getRootNode ? s || t(i.getRootNode().host) : null;
              })(t)
            );
          })(p, d[0])
        : d.closest(p)[0])
    )
      return void (t.allowClick = !0);
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
      e.preventDefault();
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
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      o.threshold > 0 && (n.allowThresholdMove = !1),
      "touchstart" !== l.type)
    ) {
      let e = !0;
      d.is(n.focusableElements) &&
        ((e = !1), "SELECT" === d[0].nodeName && (n.isTouched = !1)),
        i.activeElement &&
          y(i.activeElement).is(n.focusableElements) &&
          i.activeElement !== d[0] &&
          i.activeElement.blur();
      const s = e && t.allowTouchMove && o.touchStartPreventDefault;
      (!o.touchStartForcePreventDefault && !s) ||
        d[0].isContentEditable ||
        l.preventDefault();
    }
    t.params.freeMode &&
      t.params.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !o.cssMode &&
      t.freeMode.onTouchStart(),
      t.emit("touchStart", l);
  }
  function H(e) {
    const t = c(),
      i = this,
      s = i.touchEventsData,
      { params: n, touches: o, rtlTranslate: a, enabled: r } = i;
    if (!r) return;
    let l = e;
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
      t.activeElement &&
      l.target === t.activeElement &&
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
      let e;
      (i.isHorizontal() && o.currentY === o.startY) ||
      (i.isVertical() && o.currentX === o.startX)
        ? (s.isScrolling = !1)
        : u * u + f * f >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(f), Math.abs(u))) / Math.PI),
          (s.isScrolling = i.isHorizontal()
            ? e > n.touchAngle
            : 90 - e > n.touchAngle));
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
  function W(e) {
    const t = this,
      i = t.touchEventsData,
      { params: s, touches: n, rtlTranslate: o, slidesGrid: a, enabled: r } = t;
    if (!r) return;
    let l = e;
    if (
      (l.originalEvent && (l = l.originalEvent),
      i.allowTouchCallbacks && t.emit("touchEnd", l),
      (i.allowTouchCallbacks = !1),
      !i.isTouched)
    )
      return (
        i.isMoved && s.grabCursor && t.setGrabCursor(!1),
        (i.isMoved = !1),
        void (i.startMoving = !1)
      );
    s.grabCursor &&
      i.isMoved &&
      i.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const c = w(),
      d = c - i.touchStartTime;
    if (t.allowClick) {
      const e = l.path || (l.composedPath && l.composedPath());
      t.updateClickedSlide((e && e[0]) || l.target),
        t.emit("tap click", l),
        d < 300 &&
          c - i.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", l);
    }
    if (
      ((i.lastClickTime = w()),
      x(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !i.isTouched ||
        !i.isMoved ||
        !t.swipeDirection ||
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
          ? t.translate
          : -t.translate
        : -i.currentTranslate),
      s.cssMode)
    )
      return;
    if (t.params.freeMode && s.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: h });
    let p = 0,
      u = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < a.length;
      e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
    ) {
      const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
      void 0 !== a[e + t]
        ? h >= a[e] && h < a[e + t] && ((p = e), (u = a[e + t] - a[e]))
        : h >= a[e] && ((p = e), (u = a[a.length - 1] - a[a.length - 2]));
    }
    let f = null,
      m = null;
    s.rewind &&
      (t.isBeginning
        ? (m =
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (f = 0));
    const g = (h - a[p]) / u,
      v = p < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    if (d > s.longSwipesMs) {
      if (!s.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (g >= s.longSwipesRatio
          ? t.slideTo(s.rewind && t.isEnd ? f : p + v)
          : t.slideTo(p)),
        "prev" === t.swipeDirection &&
          (g > 1 - s.longSwipesRatio
            ? t.slideTo(p + v)
            : null !== m && g < 0 && Math.abs(g) > s.longSwipesRatio
            ? t.slideTo(m)
            : t.slideTo(p));
    } else {
      if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
        ? l.target === t.navigation.nextEl
          ? t.slideTo(p + v)
          : t.slideTo(p)
        : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : p + v),
          "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p));
    }
  }
  function G() {
    const e = this,
      { params: t, el: i } = e;
    if (i && 0 === i.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: s, allowSlidePrev: n, snapGrid: o } = e;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
      e.isEnd &&
      !e.isBeginning &&
      !e.params.centeredSlides
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = n),
      (e.allowSlideNext = s),
      e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow();
  }
  function q(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function j() {
    const e = this,
      { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
    if (!s) return;
    let n;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const o = e.maxTranslate() - e.minTranslate();
    (n = 0 === o ? 0 : (e.translate - e.minTranslate()) / o),
      n !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  let V = !1;
  function X() {}
  const Y = (e, t) => {
    const i = c(),
      {
        params: s,
        touchEvents: n,
        el: o,
        wrapperEl: a,
        device: r,
        support: l,
      } = e,
      d = !!s.nested,
      h = "on" === t ? "addEventListener" : "removeEventListener",
      p = t;
    if (l.touch) {
      const t = !(
        "touchstart" !== n.start ||
        !l.passiveListener ||
        !s.passiveListeners
      ) && { passive: !0, capture: !1 };
      o[h](n.start, e.onTouchStart, t),
        o[h](
          n.move,
          e.onTouchMove,
          l.passiveListener ? { passive: !1, capture: d } : d
        ),
        o[h](n.end, e.onTouchEnd, t),
        n.cancel && o[h](n.cancel, e.onTouchEnd, t);
    } else
      o[h](n.start, e.onTouchStart, !1),
        i[h](n.move, e.onTouchMove, d),
        i[h](n.end, e.onTouchEnd, !1);
    (s.preventClicks || s.preventClicksPropagation) &&
      o[h]("click", e.onClick, !0),
      s.cssMode && a[h]("scroll", e.onScroll),
      s.updateOnWindowResize
        ? e[p](
            r.ios || r.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            G,
            !0
          )
        : e[p]("observerUpdate", G, !0);
  };
  const U = {
      attachEvents: function () {
        const e = this,
          t = c(),
          { params: i, support: s } = e;
        (e.onTouchStart = R.bind(e)),
          (e.onTouchMove = H.bind(e)),
          (e.onTouchEnd = W.bind(e)),
          i.cssMode && (e.onScroll = j.bind(e)),
          (e.onClick = q.bind(e)),
          s.touch && !V && (t.addEventListener("touchstart", X), (V = !0)),
          Y(e, "on");
      },
      detachEvents: function () {
        Y(this, "off");
      },
    },
    Z = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  const K = {
    setBreakpoint: function () {
      const e = this,
        {
          activeIndex: t,
          initialized: i,
          loopedSlides: s = 0,
          params: n,
          $el: o,
        } = e,
        a = n.breakpoints;
      if (!a || (a && 0 === Object.keys(a).length)) return;
      const r = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
      if (!r || e.currentBreakpoint === r) return;
      const l = (r in a ? a[r] : void 0) || e.originalParams,
        c = Z(e, n),
        d = Z(e, l),
        h = n.enabled;
      c && !d
        ? (o.removeClass(
            `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
          ),
          e.emitContainerClasses())
        : !c &&
          d &&
          (o.addClass(`${n.containerModifierClass}grid`),
          ((l.grid.fill && "column" === l.grid.fill) ||
            (!l.grid.fill && "column" === n.grid.fill)) &&
            o.addClass(`${n.containerModifierClass}grid-column`),
          e.emitContainerClasses());
      const p = l.direction && l.direction !== n.direction,
        u = n.loop && (l.slidesPerView !== n.slidesPerView || p);
      p && i && e.changeDirection(), T(e.params, l);
      const f = e.params.enabled;
      Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev,
      }),
        h && !f ? e.disable() : !h && f && e.enable(),
        (e.currentBreakpoint = r),
        e.emit("_beforeBreakpoint", l),
        u &&
          i &&
          (e.loopDestroy(),
          e.loopCreate(),
          e.updateSlides(),
          e.slideTo(t - s + e.loopedSlides, 0, !1)),
        e.emit("breakpoint", l);
    },
    getBreakpoint: function (e, t, i) {
      if ((void 0 === t && (t = "window"), !e || ("container" === t && !i)))
        return;
      let s = !1;
      const n = h(),
        o = "window" === t ? n.innerHeight : i.clientHeight,
        a = Object.keys(e).map((e) => {
          if ("string" == typeof e && 0 === e.indexOf("@")) {
            const t = parseFloat(e.substr(1));
            return { value: o * t, point: e };
          }
          return { value: e, point: e };
        });
      a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
      for (let e = 0; e < a.length; e += 1) {
        const { point: o, value: r } = a[e];
        "window" === t
          ? n.matchMedia(`(min-width: ${r}px)`).matches && (s = o)
          : r <= i.clientWidth && (s = o);
      }
      return s || "max";
    },
  };
  const J = {
    addClasses: function () {
      const e = this,
        { classNames: t, params: i, rtl: s, $el: n, device: o, support: a } = e,
        r = (function (e, t) {
          const i = [];
          return (
            e.forEach((e) => {
              "object" == typeof e
                ? Object.keys(e).forEach((s) => {
                    e[s] && i.push(t + s);
                  })
                : "string" == typeof e && i.push(t + e);
            }),
            i
          );
        })(
          [
            "initialized",
            i.direction,
            { "pointer-events": !a.touch },
            { "free-mode": e.params.freeMode && i.freeMode.enabled },
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
      t.push(...r), n.addClass([...t].join(" ")), e.emitContainerClasses();
    },
    removeClasses: function () {
      const { $el: e, classNames: t } = this;
      e.removeClass(t.join(" ")), this.emitContainerClasses();
    },
  };
  const Q = {
    loadImage: function (e, t, i, s, n, o) {
      const a = h();
      let r;
      function l() {
        o && o();
      }
      y(e).parent("picture")[0] || (e.complete && n)
        ? l()
        : t
        ? ((r = new a.Image()),
          (r.onload = l),
          (r.onerror = l),
          s && (r.sizes = s),
          i && (r.srcset = i),
          t && (r.src = t))
        : l();
    },
    preloadImages: function () {
      const e = this;
      function t() {
        null != e &&
          e &&
          !e.destroyed &&
          (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
          e.imagesLoaded === e.imagesToLoad.length &&
            (e.params.updateOnImagesReady && e.update(),
            e.emit("imagesReady")));
      }
      e.imagesToLoad = e.$el.find("img");
      for (let i = 0; i < e.imagesToLoad.length; i += 1) {
        const s = e.imagesToLoad[i];
        e.loadImage(
          s,
          s.currentSrc || s.getAttribute("src"),
          s.srcset || s.getAttribute("srcset"),
          s.sizes || s.getAttribute("sizes"),
          !0,
          t
        );
      }
    },
  };
  const ee = {
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
  function te(e, t) {
    return function (i) {
      void 0 === i && (i = {});
      const s = Object.keys(i)[0],
        n = i[s];
      "object" == typeof n && null !== n
        ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
            !0 === e[s] &&
            (e[s] = { auto: !0 }),
          s in e && "enabled" in n
            ? (!0 === e[s] && (e[s] = { enabled: !0 }),
              "object" != typeof e[s] ||
                "enabled" in e[s] ||
                (e[s].enabled = !0),
              e[s] || (e[s] = { enabled: !1 }),
              T(t, i))
            : T(t, i))
        : T(t, i);
    };
  }
  const ie = {
      eventsEmitter: z,
      update: I,
      translate: N,
      transition: {
        setTransition: function (e, t) {
          const i = this;
          i.params.cssMode || i.$wrapperEl.transition(e),
            i.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const i = this,
            { params: s } = i;
          s.cssMode ||
            (s.autoHeight && i.updateAutoHeight(),
            D({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const i = this,
            { params: s } = i;
          (i.animating = !1),
            s.cssMode ||
              (i.setTransition(0),
              D({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: F,
      loop: B,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            t.support.touch ||
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const i =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          (i.style.cursor = "move"), (i.style.cursor = e ? "grabbing" : "grab");
        },
        unsetGrabCursor: function () {
          const e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = "");
        },
      },
      events: U,
      breakpoints: K,
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: i } = e,
            { slidesOffsetBefore: s } = i;
          if (s) {
            const t = e.slides.length - 1,
              i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
            e.isLocked = e.size > i;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: J,
      images: Q,
    },
    se = {};
  class ne {
    constructor() {
      let e, t;
      for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++)
        s[n] = arguments[n];
      if (
        (1 === s.length &&
        s[0].constructor &&
        "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
          ? (t = s[0])
          : ([e, t] = s),
        t || (t = {}),
        (t = T({}, t)),
        e && !t.el && (t.el = e),
        t.el && y(t.el).length > 1)
      ) {
        const e = [];
        return (
          y(t.el).each((i) => {
            const s = T({}, t, { el: i });
            e.push(new ne(s));
          }),
          e
        );
      }
      const o = this;
      (o.__swiper__ = !0),
        (o.support = A()),
        (o.device = _({ userAgent: t.userAgent })),
        (o.browser = O()),
        (o.eventsListeners = {}),
        (o.eventsAnyListeners = []),
        (o.modules = [...o.__modules__]),
        t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
      const a = {};
      o.modules.forEach((e) => {
        e({
          swiper: o,
          extendParams: te(t, a),
          on: o.on.bind(o),
          once: o.once.bind(o),
          off: o.off.bind(o),
          emit: o.emit.bind(o),
        });
      });
      const r = T({}, ee, a);
      return (
        (o.params = T({}, r, se, t)),
        (o.originalParams = T({}, o.params)),
        (o.passedParams = T({}, t)),
        o.params &&
          o.params.on &&
          Object.keys(o.params.on).forEach((e) => {
            o.on(e, o.params.on[e]);
          }),
        o.params && o.params.onAny && o.onAny(o.params.onAny),
        (o.$ = y),
        Object.assign(o, {
          enabled: o.params.enabled,
          el: e,
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
            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
              t = ["pointerdown", "pointermove", "pointerup"];
            return (
              (o.touchEventsTouch = {
                start: e[0],
                move: e[1],
                end: e[2],
                cancel: e[3],
              }),
              (o.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
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
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const i = this;
      e = Math.min(Math.max(e, 0), 1);
      const s = i.minTranslate(),
        n = (i.maxTranslate() - s) * e + s;
      i.translateTo(n, void 0 === t ? 0 : t),
        i.updateActiveIndex(),
        i.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.each((i) => {
        const s = e.getSlideClasses(i);
        t.push({ slideEl: i, classNames: s }), e.emit("_slideClass", i, s);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
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
        let e,
          t = s[r].swiperSlideSize;
        for (let i = r + 1; i < s.length; i += 1)
          s[i] &&
            !e &&
            ((t += s[i].swiperSlideSize), (l += 1), t > a && (e = !0));
        for (let i = r - 1; i >= 0; i -= 1)
          s[i] &&
            !e &&
            ((t += s[i].swiperSlideSize), (l += 1), t > a && (e = !0));
      } else if ("current" === e)
        for (let e = r + 1; e < s.length; e += 1) {
          (t ? n[e] + o[e] - n[r] < a : n[e] - n[r] < a) && (l += 1);
        }
      else
        for (let e = r - 1; e >= 0; e -= 1) {
          n[r] - n[e] < a && (l += 1);
        }
      return l;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: i } = e;
      function s() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let n;
      i.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled
          ? (s(), e.params.autoHeight && e.updateAutoHeight())
          : ((n =
              ("auto" === e.params.slidesPerView ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)),
            n || s()),
        i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const i = this,
        s = i.params.direction;
      return (
        e || (e = "horizontal" === s ? "vertical" : "horizontal"),
        e === s ||
          ("horizontal" !== e && "vertical" !== e) ||
          (i.$el
            .removeClass(`${i.params.containerModifierClass}${s}`)
            .addClass(`${i.params.containerModifierClass}${e}`),
          i.emitContainerClasses(),
          (i.params.direction = e),
          i.slides.each((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          i.emit("changeDirection"),
          t && i.update()),
        i
      );
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      const i = y(e || t.params.el);
      if (!(e = i[0])) return !1;
      e.swiper = t;
      const s = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let n = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const t = y(e.shadowRoot.querySelector(s()));
          return (t.children = (e) => i.children(e)), t;
        }
        return i.children ? i.children(s()) : y(i).children(s());
      })();
      if (0 === n.length && t.params.createElements) {
        const e = c().createElement("div");
        (n = y(e)),
          (e.className = t.params.wrapperClass),
          i.append(e),
          i.children(`.${t.params.slideClass}`).each((e) => {
            n.append(e);
          });
      }
      return (
        Object.assign(t, {
          $el: i,
          el: e,
          $wrapperEl: n,
          wrapperEl: n[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
          wrongRTL: "-webkit-box" === n.css("display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.params.loop && t.loopCreate(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.preloadImages && t.preloadImages(),
          t.params.loop
            ? t.slideTo(
                t.params.initialSlide + t.loopedSlides,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.attachEvents(),
          (t.initialized = !0),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const i = this,
        { params: s, $el: n, $wrapperEl: o, slides: a } = i;
      return (
        void 0 === i.params ||
          i.destroyed ||
          (i.emit("beforeDestroy"),
          (i.initialized = !1),
          i.detachEvents(),
          s.loop && i.loopDestroy(),
          t &&
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
          Object.keys(i.eventsListeners).forEach((e) => {
            i.off(e);
          }),
          !1 !== e &&
            ((i.$el[0].swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      T(se, e);
    }
    static get extendedDefaults() {
      return se;
    }
    static get defaults() {
      return ee;
    }
    static installModule(e) {
      ne.prototype.__modules__ || (ne.prototype.__modules__ = []);
      const t = ne.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => ne.installModule(e)), ne)
        : (ne.installModule(e), ne);
    }
  }
  Object.keys(ie).forEach((e) => {
    Object.keys(ie[e]).forEach((t) => {
      ne.prototype[t] = ie[e][t];
    });
  }),
    ne.use([
      function (e) {
        let { swiper: t, on: i, emit: s } = e;
        const n = h();
        let o = null,
          a = null;
        const r = () => {
            t &&
              !t.destroyed &&
              t.initialized &&
              (s("beforeResize"), s("resize"));
          },
          l = () => {
            t && !t.destroyed && t.initialized && s("orientationchange");
          };
        i("init", () => {
          t.params.resizeObserver && void 0 !== n.ResizeObserver
            ? t &&
              !t.destroyed &&
              t.initialized &&
              ((o = new ResizeObserver((e) => {
                a = n.requestAnimationFrame(() => {
                  const { width: i, height: s } = t;
                  let n = i,
                    o = s;
                  e.forEach((e) => {
                    let { contentBoxSize: i, contentRect: s, target: a } = e;
                    (a && a !== t.el) ||
                      ((n = s ? s.width : (i[0] || i).inlineSize),
                      (o = s ? s.height : (i[0] || i).blockSize));
                  }),
                    (n === i && o === s) || r();
                });
              })),
              o.observe(t.el))
            : (n.addEventListener("resize", r),
              n.addEventListener("orientationchange", l));
        }),
          i("destroy", () => {
            a && n.cancelAnimationFrame(a),
              o && o.unobserve && t.el && (o.unobserve(t.el), (o = null)),
              n.removeEventListener("resize", r),
              n.removeEventListener("orientationchange", l);
          });
      },
      function (e) {
        let { swiper: t, extendParams: i, on: s, emit: n } = e;
        const o = [],
          a = h(),
          r = function (e, t) {
            void 0 === t && (t = {});
            const i = new (a.MutationObserver || a.WebkitMutationObserver)(
              (e) => {
                if (1 === e.length) return void n("observerUpdate", e[0]);
                const t = function () {
                  n("observerUpdate", e[0]);
                };
                a.requestAnimationFrame
                  ? a.requestAnimationFrame(t)
                  : a.setTimeout(t, 0);
              }
            );
            i.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              o.push(i);
          };
        i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          s("init", () => {
            if (t.params.observer) {
              if (t.params.observeParents) {
                const e = t.$el.parents();
                for (let t = 0; t < e.length; t += 1) r(e[t]);
              }
              r(t.$el[0], { childList: t.params.observeSlideChildren }),
                r(t.$wrapperEl[0], { attributes: !1 });
            }
          }),
          s("destroy", () => {
            o.forEach((e) => {
              e.disconnect();
            }),
              o.splice(0, o.length);
          });
      },
    ]);
  const oe = ne;
  function ae(e, t, i, s) {
    const n = c();
    return (
      e.params.createElements &&
        Object.keys(s).forEach((o) => {
          if (!i[o] && !0 === i.auto) {
            let a = e.$el.children(`.${s[o]}`)[0];
            a ||
              ((a = n.createElement("div")),
              (a.className = s[o]),
              e.$el.append(a)),
              (i[o] = a),
              (t[o] = a);
          }
        }),
      i
    );
  }
  function re(e) {
    let { swiper: t, extendParams: i, on: s, emit: n } = e;
    function o(e) {
      let i;
      return (
        e &&
          ((i = y(e)),
          t.params.uniqueNavElements &&
            "string" == typeof e &&
            i.length > 1 &&
            1 === t.$el.find(e).length &&
            (i = t.$el.find(e))),
        i
      );
    }
    function a(e, i) {
      const s = t.params.navigation;
      e &&
        e.length > 0 &&
        (e[i ? "addClass" : "removeClass"](s.disabledClass),
        e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = i),
        t.params.watchOverflow &&
          t.enabled &&
          e[t.isLocked ? "addClass" : "removeClass"](s.lockClass));
    }
    function r() {
      if (t.params.loop) return;
      const { $nextEl: e, $prevEl: i } = t.navigation;
      a(i, t.isBeginning && !t.params.rewind),
        a(e, t.isEnd && !t.params.rewind);
    }
    function l(e) {
      e.preventDefault(),
        (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev();
    }
    function c(e) {
      e.preventDefault(),
        (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
    }
    function d() {
      const e = t.params.navigation;
      if (
        ((t.params.navigation = ae(
          t,
          t.originalParams.navigation,
          t.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !e.nextEl && !e.prevEl)
      )
        return;
      const i = o(e.nextEl),
        s = o(e.prevEl);
      i && i.length > 0 && i.on("click", c),
        s && s.length > 0 && s.on("click", l),
        Object.assign(t.navigation, {
          $nextEl: i,
          nextEl: i && i[0],
          $prevEl: s,
          prevEl: s && s[0],
        }),
        t.enabled ||
          (i && i.addClass(e.lockClass), s && s.addClass(e.lockClass));
    }
    function h() {
      const { $nextEl: e, $prevEl: i } = t.navigation;
      e &&
        e.length &&
        (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)),
        i &&
          i.length &&
          (i.off("click", l), i.removeClass(t.params.navigation.disabledClass));
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
      (t.navigation = {
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
        const { $nextEl: e, $prevEl: i } = t.navigation;
        e &&
          e[t.enabled ? "removeClass" : "addClass"](
            t.params.navigation.lockClass
          ),
          i &&
            i[t.enabled ? "removeClass" : "addClass"](
              t.params.navigation.lockClass
            );
      }),
      s("click", (e, i) => {
        const { $nextEl: s, $prevEl: o } = t.navigation,
          a = i.target;
        if (t.params.navigation.hideOnClick && !y(a).is(o) && !y(a).is(s)) {
          if (
            t.pagination &&
            t.params.pagination &&
            t.params.pagination.clickable &&
            (t.pagination.el === a || t.pagination.el.contains(a))
          )
            return;
          let e;
          s
            ? (e = s.hasClass(t.params.navigation.hiddenClass))
            : o && (e = o.hasClass(t.params.navigation.hiddenClass)),
            n(!0 === e ? "navigationShow" : "navigationHide"),
            s && s.toggleClass(t.params.navigation.hiddenClass),
            o && o.toggleClass(t.params.navigation.hiddenClass);
        }
      }),
      Object.assign(t.navigation, { update: r, init: d, destroy: h });
  }
  function le(e) {
    return (
      void 0 === e && (e = ""),
      `.${e
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function ce(e) {
    let { swiper: t, extendParams: i, on: s, emit: n } = e;
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
        formatFractionCurrent: (e) => e,
        formatFractionTotal: (e) => e,
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
      (t.pagination = { el: null, $el: null, bullets: [] });
    let r = 0;
    function l() {
      return (
        !t.params.pagination.el ||
        !t.pagination.el ||
        !t.pagination.$el ||
        0 === t.pagination.$el.length
      );
    }
    function c(e, i) {
      const { bulletActiveClass: s } = t.params.pagination;
      e[i]().addClass(`${s}-${i}`)[i]().addClass(`${s}-${i}-${i}`);
    }
    function d() {
      const e = t.rtl,
        i = t.params.pagination;
      if (l()) return;
      const s =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.slides.length,
        o = t.pagination.$el;
      let d;
      const h = t.params.loop
        ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
        : t.snapGrid.length;
      if (
        (t.params.loop
          ? ((d = Math.ceil(
              (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
            )),
            d > s - 1 - 2 * t.loopedSlides && (d -= s - 2 * t.loopedSlides),
            d > h - 1 && (d -= h),
            d < 0 && "bullets" !== t.params.paginationType && (d = h + d))
          : (d = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
        "bullets" === i.type &&
          t.pagination.bullets &&
          t.pagination.bullets.length > 0)
      ) {
        const s = t.pagination.bullets;
        let n, l, h;
        if (
          (i.dynamicBullets &&
            ((a = s.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
            o.css(
              t.isHorizontal() ? "width" : "height",
              a * (i.dynamicMainBullets + 4) + "px"
            ),
            i.dynamicMainBullets > 1 &&
              void 0 !== t.previousIndex &&
              ((r += d - (t.previousIndex - t.loopedSlides || 0)),
              r > i.dynamicMainBullets - 1
                ? (r = i.dynamicMainBullets - 1)
                : r < 0 && (r = 0)),
            (n = Math.max(d - r, 0)),
            (l = n + (Math.min(s.length, i.dynamicMainBullets) - 1)),
            (h = (l + n) / 2)),
          s.removeClass(
            ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
              .map((e) => `${i.bulletActiveClass}${e}`)
              .join(" ")
          ),
          o.length > 1)
        )
          s.each((e) => {
            const t = y(e),
              s = t.index();
            s === d && t.addClass(i.bulletActiveClass),
              i.dynamicBullets &&
                (s >= n && s <= l && t.addClass(`${i.bulletActiveClass}-main`),
                s === n && c(t, "prev"),
                s === l && c(t, "next"));
          });
        else {
          const e = s.eq(d),
            o = e.index();
          if ((e.addClass(i.bulletActiveClass), i.dynamicBullets)) {
            const e = s.eq(n),
              a = s.eq(l);
            for (let e = n; e <= l; e += 1)
              s.eq(e).addClass(`${i.bulletActiveClass}-main`);
            if (t.params.loop)
              if (o >= s.length) {
                for (let e = i.dynamicMainBullets; e >= 0; e -= 1)
                  s.eq(s.length - e).addClass(`${i.bulletActiveClass}-main`);
                s.eq(s.length - i.dynamicMainBullets - 1).addClass(
                  `${i.bulletActiveClass}-prev`
                );
              } else c(e, "prev"), c(a, "next");
            else c(e, "prev"), c(a, "next");
          }
        }
        if (i.dynamicBullets) {
          const n = Math.min(s.length, i.dynamicMainBullets + 4),
            o = (a * n - a) / 2 - h * a,
            r = e ? "right" : "left";
          s.css(t.isHorizontal() ? r : "top", `${o}px`);
        }
      }
      if (
        ("fraction" === i.type &&
          (o.find(le(i.currentClass)).text(i.formatFractionCurrent(d + 1)),
          o.find(le(i.totalClass)).text(i.formatFractionTotal(h))),
        "progressbar" === i.type)
      ) {
        let e;
        e = i.progressbarOpposite
          ? t.isHorizontal()
            ? "vertical"
            : "horizontal"
          : t.isHorizontal()
          ? "horizontal"
          : "vertical";
        const s = (d + 1) / h;
        let n = 1,
          a = 1;
        "horizontal" === e ? (n = s) : (a = s),
          o
            .find(le(i.progressbarFillClass))
            .transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${a})`)
            .transition(t.params.speed);
      }
      "custom" === i.type && i.renderCustom
        ? (o.html(i.renderCustom(t, d + 1, h)), n("paginationRender", o[0]))
        : n("paginationUpdate", o[0]),
        t.params.watchOverflow &&
          t.enabled &&
          o[t.isLocked ? "addClass" : "removeClass"](i.lockClass);
    }
    function h() {
      const e = t.params.pagination;
      if (l()) return;
      const i =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.slides.length,
        s = t.pagination.$el;
      let o = "";
      if ("bullets" === e.type) {
        let n = t.params.loop
          ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup)
          : t.snapGrid.length;
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          !t.params.loop &&
          n > i &&
          (n = i);
        for (let i = 0; i < n; i += 1)
          e.renderBullet
            ? (o += e.renderBullet.call(t, i, e.bulletClass))
            : (o += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
        s.html(o), (t.pagination.bullets = s.find(le(e.bulletClass)));
      }
      "fraction" === e.type &&
        ((o = e.renderFraction
          ? e.renderFraction.call(t, e.currentClass, e.totalClass)
          : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
        s.html(o)),
        "progressbar" === e.type &&
          ((o = e.renderProgressbar
            ? e.renderProgressbar.call(t, e.progressbarFillClass)
            : `<span class="${e.progressbarFillClass}"></span>`),
          s.html(o)),
        "custom" !== e.type && n("paginationRender", t.pagination.$el[0]);
    }
    function p() {
      t.params.pagination = ae(
        t,
        t.originalParams.pagination,
        t.params.pagination,
        { el: "swiper-pagination" }
      );
      const e = t.params.pagination;
      if (!e.el) return;
      let i = y(e.el);
      0 !== i.length &&
        (t.params.uniqueNavElements &&
          "string" == typeof e.el &&
          i.length > 1 &&
          ((i = t.$el.find(e.el)),
          i.length > 1 &&
            (i = i.filter((e) => y(e).parents(".swiper")[0] === t.el))),
        "bullets" === e.type && e.clickable && i.addClass(e.clickableClass),
        i.addClass(e.modifierClass + e.type),
        i.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
        "bullets" === e.type &&
          e.dynamicBullets &&
          (i.addClass(`${e.modifierClass}${e.type}-dynamic`),
          (r = 0),
          e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
        "progressbar" === e.type &&
          e.progressbarOpposite &&
          i.addClass(e.progressbarOppositeClass),
        e.clickable &&
          i.on("click", le(e.bulletClass), function (e) {
            e.preventDefault();
            let i = y(this).index() * t.params.slidesPerGroup;
            t.params.loop && (i += t.loopedSlides), t.slideTo(i);
          }),
        Object.assign(t.pagination, { $el: i, el: i[0] }),
        t.enabled || i.addClass(e.lockClass));
    }
    function u() {
      const e = t.params.pagination;
      if (l()) return;
      const i = t.pagination.$el;
      i.removeClass(e.hiddenClass),
        i.removeClass(e.modifierClass + e.type),
        i.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
        t.pagination.bullets &&
          t.pagination.bullets.removeClass &&
          t.pagination.bullets.removeClass(e.bulletActiveClass),
        e.clickable && i.off("click", le(e.bulletClass));
    }
    s("init", () => {
      p(), h(), d();
    }),
      s("activeIndexChange", () => {
        (t.params.loop || void 0 === t.snapIndex) && d();
      }),
      s("snapIndexChange", () => {
        t.params.loop || d();
      }),
      s("slidesLengthChange", () => {
        t.params.loop && (h(), d());
      }),
      s("snapGridLengthChange", () => {
        t.params.loop || (h(), d());
      }),
      s("destroy", () => {
        u();
      }),
      s("enable disable", () => {
        const { $el: e } = t.pagination;
        e &&
          e[t.enabled ? "removeClass" : "addClass"](
            t.params.pagination.lockClass
          );
      }),
      s("lock unlock", () => {
        d();
      }),
      s("click", (e, i) => {
        const s = i.target,
          { $el: o } = t.pagination;
        if (
          t.params.pagination.el &&
          t.params.pagination.hideOnClick &&
          o.length > 0 &&
          !y(s).hasClass(t.params.pagination.bulletClass)
        ) {
          if (
            t.navigation &&
            ((t.navigation.nextEl && s === t.navigation.nextEl) ||
              (t.navigation.prevEl && s === t.navigation.prevEl))
          )
            return;
          const e = o.hasClass(t.params.pagination.hiddenClass);
          n(!0 === e ? "paginationShow" : "paginationHide"),
            o.toggleClass(t.params.pagination.hiddenClass);
        }
      }),
      Object.assign(t.pagination, {
        render: h,
        update: d,
        init: p,
        destroy: u,
      });
  }
  function de() {
    if (
      ((function () {
        let e = document.querySelectorAll(
          '[class*="__swiper"]:not(.swiper-wrapper)'
        );
        e &&
          e.forEach((e) => {
            e.parentElement.classList.add("swiper"),
              e.classList.add("swiper-wrapper");
            for (const t of e.children) t.classList.add("swiper-slide");
          });
      })(),
      document.querySelector(".mainSlider"))
    ) {
      new oe(".mainSlider", {
        modules: [re, ce],
        observer: !0,
        observeParents: !0,
        loop: !0,
        slidesPerView: 3,
        spaceBetween: 10,
        speed: 800,
        navigation: { nextEl: ".main-slider__arrow" },
        breakpoints: {
          320: {
            slidesPerView: 1,
            autoHeight: !0,
            spaceBetween: 5,
            slidesPerGroup: 1,
          },
          768: { slidesPerView: 2, spaceBetween: 20, slidesPerGroup: 2 },
          1200: { slidesPerView: 3, slidesPerGroup: 3 },
        },
        pagination: { el: ".main-slider__dotts", clickable: !0 },
      });
    }
  }
  window.addEventListener("load", function (e) {
    de();
  });
  const he = (e) =>
      "object" == typeof e &&
      null !== e &&
      e.constructor === Object &&
      "[object Object]" === Object.prototype.toString.call(e),
    pe = (...e) => {
      let t = !1;
      "boolean" == typeof e[0] && (t = e.shift());
      let i = e[0];
      if (!i || "object" != typeof i)
        throw new Error("extendee must be an object");
      const s = e.slice(1),
        n = s.length;
      for (let e = 0; e < n; e++) {
        const n = s[e];
        for (let e in n)
          if (n.hasOwnProperty(e)) {
            const s = n[e];
            if (t && (Array.isArray(s) || he(s))) {
              const t = Array.isArray(s) ? [] : {};
              i[e] = pe(!0, i.hasOwnProperty(e) ? i[e] : t, s);
            } else i[e] = s;
          }
      }
      return i;
    },
    ue = (e, t = 1e4) => (
      (e = parseFloat(e) || 0), Math.round((e + Number.EPSILON) * t) / t
    ),
    fe = function (e) {
      return (
        !!(
          e &&
          "object" == typeof e &&
          e instanceof Element &&
          e !== document.body
        ) &&
        !e.__Panzoom &&
        ((function (e) {
          const t = getComputedStyle(e)["overflow-y"],
            i = getComputedStyle(e)["overflow-x"],
            s =
              ("scroll" === t || "auto" === t) &&
              Math.abs(e.scrollHeight - e.clientHeight) > 1,
            n =
              ("scroll" === i || "auto" === i) &&
              Math.abs(e.scrollWidth - e.clientWidth) > 1;
          return s || n;
        })(e)
          ? e
          : fe(e.parentNode))
      );
    },
    me =
      ("undefined" != typeof window && window.ResizeObserver) ||
      class {
        constructor(e) {
          (this.observables = []),
            (this.boundCheck = this.check.bind(this)),
            this.boundCheck(),
            (this.callback = e);
        }
        observe(e) {
          if (this.observables.some((t) => t.el === e)) return;
          const t = {
            el: e,
            size: { height: e.clientHeight, width: e.clientWidth },
          };
          this.observables.push(t);
        }
        unobserve(e) {
          this.observables = this.observables.filter((t) => t.el !== e);
        }
        disconnect() {
          this.observables = [];
        }
        check() {
          const e = this.observables
            .filter((e) => {
              const t = e.el.clientHeight,
                i = e.el.clientWidth;
              if (e.size.height !== t || e.size.width !== i)
                return (e.size.height = t), (e.size.width = i), !0;
            })
            .map((e) => e.el);
          e.length > 0 && this.callback(e),
            window.requestAnimationFrame(this.boundCheck);
        }
      };
  class ge {
    constructor(e) {
      (this.id = self.Touch && e instanceof Touch ? e.identifier : -1),
        (this.pageX = e.pageX),
        (this.pageY = e.pageY),
        (this.clientX = e.clientX),
        (this.clientY = e.clientY);
    }
  }
  const ve = (e, t) =>
      t
        ? Math.sqrt((t.clientX - e.clientX) ** 2 + (t.clientY - e.clientY) ** 2)
        : 0,
    be = (e, t) =>
      t
        ? {
            clientX: (e.clientX + t.clientX) / 2,
            clientY: (e.clientY + t.clientY) / 2,
          }
        : e;
  class ye {
    constructor(
      e,
      { start: t = () => !0, move: i = () => {}, end: s = () => {} } = {}
    ) {
      (this._element = e),
        (this.startPointers = []),
        (this.currentPointers = []),
        (this._pointerStart = (e) => {
          if (e.buttons > 0 && 0 !== e.button) return;
          const t = new ge(e);
          this.currentPointers.some((e) => e.id === t.id) ||
            (this._triggerPointerStart(t, e) &&
              (window.addEventListener("mousemove", this._move),
              window.addEventListener("mouseup", this._pointerEnd)));
        }),
        (this._touchStart = (e) => {
          for (const t of Array.from(e.changedTouches || []))
            this._triggerPointerStart(new ge(t), e);
        }),
        (this._move = (e) => {
          const t = this.currentPointers.slice(),
            i = ((e) => "changedTouches" in e)(e)
              ? Array.from(e.changedTouches).map((e) => new ge(e))
              : [new ge(e)];
          for (const e of i) {
            const t = this.currentPointers.findIndex((t) => t.id === e.id);
            t < 0 || (this.currentPointers[t] = e);
          }
          this._moveCallback(t, this.currentPointers.slice(), e);
        }),
        (this._triggerPointerEnd = (e, t) => {
          const i = this.currentPointers.findIndex((t) => t.id === e.id);
          return !(
            i < 0 ||
            (this.currentPointers.splice(i, 1),
            this.startPointers.splice(i, 1),
            this._endCallback(e, t),
            0)
          );
        }),
        (this._pointerEnd = (e) => {
          (e.buttons > 0 && 0 !== e.button) ||
            (this._triggerPointerEnd(new ge(e), e) &&
              (window.removeEventListener("mousemove", this._move, {
                passive: !1,
              }),
              window.removeEventListener("mouseup", this._pointerEnd, {
                passive: !1,
              })));
        }),
        (this._touchEnd = (e) => {
          for (const t of Array.from(e.changedTouches || []))
            this._triggerPointerEnd(new ge(t), e);
        }),
        (this._startCallback = t),
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
    _triggerPointerStart(e, t) {
      return (
        !!this._startCallback(e, t) &&
        (this.currentPointers.push(e), this.startPointers.push(e), !0)
      );
    }
  }
  class xe {
    constructor(e = {}) {
      (this.options = pe(!0, {}, e)), (this.plugins = []), (this.events = {});
      for (const e of ["on", "once"])
        for (const t of Object.entries(this.options[e] || {})) this[e](...t);
    }
    option(e, t, ...i) {
      let s =
        ((n = e = String(e)),
        (o = this.options),
        n.split(".").reduce(function (e, t) {
          return e && e[t];
        }, o));
      var n, o;
      return (
        "function" == typeof s && (s = s.call(this, this, ...i)),
        void 0 === s ? t : s
      );
    }
    localize(e, t = []) {
      return (e = String(e).replace(/\{\{(\w+).?(\w+)?\}\}/g, (e, i, s) => {
        let n = "";
        s
          ? (n = this.option(
              `${i[0] + i.toLowerCase().substring(1)}.l10n.${s}`
            ))
          : i && (n = this.option(`l10n.${i}`)),
          n || (n = e);
        for (let e = 0; e < t.length; e++) n = n.split(t[e][0]).join(t[e][1]);
        return n;
      })).replace(/\{\{(.*)\}\}/, (e, t) => t);
    }
    on(e, t) {
      if (he(e)) {
        for (const t of Object.entries(e)) this.on(...t);
        return this;
      }
      return (
        String(e)
          .split(" ")
          .forEach((e) => {
            const i = (this.events[e] = this.events[e] || []);
            -1 == i.indexOf(t) && i.push(t);
          }),
        this
      );
    }
    once(e, t) {
      if (he(e)) {
        for (const t of Object.entries(e)) this.once(...t);
        return this;
      }
      return (
        String(e)
          .split(" ")
          .forEach((e) => {
            const i = (...s) => {
              this.off(e, i), t.call(this, this, ...s);
            };
            (i._ = t), this.on(e, i);
          }),
        this
      );
    }
    off(e, t) {
      if (!he(e))
        return (
          e.split(" ").forEach((e) => {
            const i = this.events[e];
            if (!i || !i.length) return this;
            let s = -1;
            for (let e = 0, n = i.length; e < n; e++) {
              const n = i[e];
              if (n && (n === t || n._ === t)) {
                s = e;
                break;
              }
            }
            -1 != s && i.splice(s, 1);
          }),
          this
        );
      for (const t of Object.entries(e)) this.off(...t);
    }
    trigger(e, ...t) {
      for (const i of [...(this.events[e] || [])].slice())
        if (i && !1 === i.call(this, this, ...t)) return !1;
      for (const i of [...(this.events["*"] || [])].slice())
        if (i && !1 === i.call(this, e, this, ...t)) return !1;
      return !0;
    }
    attachPlugins(e) {
      const t = {};
      for (const [i, s] of Object.entries(e || {}))
        !1 === this.options[i] ||
          this.plugins[i] ||
          ((this.options[i] = pe({}, s.defaults || {}, this.options[i])),
          (t[i] = new s(this)));
      for (const [e, i] of Object.entries(t)) i.attach(this);
      return (this.plugins = Object.assign({}, this.plugins, t)), this;
    }
    detachPlugins() {
      for (const e in this.plugins) {
        let t;
        (t = this.plugins[e]) &&
          "function" == typeof t.detach &&
          t.detach(this);
      }
      return (this.plugins = {}), this;
    }
  }
  const we = {
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
  class Ce extends xe {
    constructor(e, t = {}) {
      super(pe(!0, {}, we, t)), (this.state = "init"), (this.$container = e);
      for (const e of ["onLoad", "onWheel", "onClick"])
        this[e] = this[e].bind(this);
      this.initLayout(),
        this.resetValues(),
        this.attachPlugins(Ce.Plugins),
        this.trigger("init"),
        this.updateMetrics(),
        this.attachEvents(),
        this.trigger("ready"),
        !1 === this.option("centerOnStart")
          ? (this.state = "ready")
          : this.panTo({ friction: 0 }),
        (e.__Panzoom = this);
    }
    initLayout() {
      const e = this.$container;
      if (!(e instanceof HTMLElement))
        throw new Error("Panzoom: Container not found");
      const t = this.option("content") || e.querySelector(".panzoom__content");
      if (!t) throw new Error("Panzoom: Content not found");
      this.$content = t;
      let i = this.option("viewport") || e.querySelector(".panzoom__viewport");
      i ||
        !1 === this.option("wrapInner") ||
        ((i = document.createElement("div")),
        i.classList.add("panzoom__viewport"),
        i.append(...e.childNodes),
        e.appendChild(i)),
        (this.$viewport = i || t.parentNode);
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
    onLoad(e) {
      this.updateMetrics(),
        this.panTo({ scale: this.option("baseScale"), friction: 0 }),
        this.trigger("load", e);
    }
    onClick(e) {
      if (e.defaultPrevented) return;
      if (
        this.option("textSelection") &&
        window.getSelection().toString().length
      )
        return void e.stopPropagation();
      const t = this.$content.getClientRects()[0];
      if (
        "ready" !== this.state &&
        (this.dragPosition.midPoint ||
          Math.abs(t.top - this.dragStart.rect.top) > 1 ||
          Math.abs(t.left - this.dragStart.rect.left) > 1)
      )
        return e.preventDefault(), void e.stopPropagation();
      !1 !== this.trigger("click", e) &&
        this.option("zoom") &&
        "toggleZoom" === this.option("click") &&
        (e.preventDefault(), e.stopPropagation(), this.zoomWithClick(e));
    }
    onWheel(e) {
      !1 !== this.trigger("wheel", e) &&
        this.option("zoom") &&
        this.option("wheel") &&
        this.zoomWithWheel(e);
    }
    zoomWithWheel(e) {
      void 0 === this.changedDelta && (this.changedDelta = 0);
      const t = Math.max(
          -1,
          Math.min(1, -e.deltaY || -e.deltaX || e.wheelDelta || -e.detail)
        ),
        i = this.content.scale;
      let s = (i * (100 + t * this.option("wheelFactor"))) / 100;
      if (
        ((t < 0 && Math.abs(i - this.option("minScale")) < 0.01) ||
        (t > 0 && Math.abs(i - this.option("maxScale")) < 0.01)
          ? ((this.changedDelta += Math.abs(t)), (s = i))
          : ((this.changedDelta = 0),
            (s = Math.max(
              Math.min(s, this.option("maxScale")),
              this.option("minScale")
            ))),
        this.changedDelta > this.option("wheelLimit"))
      )
        return;
      if ((e.preventDefault(), s === i)) return;
      const n = this.$content.getBoundingClientRect(),
        o = e.clientX - n.left,
        a = e.clientY - n.top;
      this.zoomTo(s, { x: o, y: a });
    }
    zoomWithClick(e) {
      const t = this.$content.getClientRects()[0],
        i = e.clientX - t.left,
        s = e.clientY - t.top;
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
      const e = new ye(this.$container, {
        start: (t, i) => {
          if (!this.option("touch")) return !1;
          if (this.velocity.scale < 0) return !1;
          const s = i.composedPath()[0];
          if (!e.currentPointers.length) {
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
              ((e, t, i) => {
                const s = e.childNodes,
                  n = document.createRange();
                for (let e = 0; e < s.length; e++) {
                  const o = s[e];
                  if (o.nodeType !== Node.TEXT_NODE) continue;
                  n.selectNodeContents(o);
                  const a = n.getBoundingClientRect();
                  if (
                    t >= a.left &&
                    i >= a.top &&
                    t <= a.right &&
                    i <= a.bottom
                  )
                    return o;
                }
                return !1;
              })(s, t.clientX, t.clientY)
            )
              return !1;
          }
          return (
            !fe(s) &&
            !1 !== this.trigger("touchStart", i) &&
            ("mousedown" === i.type && i.preventDefault(),
            (this.state = "pointerdown"),
            this.resetDragPosition(),
            (this.dragPosition.midPoint = null),
            (this.dragPosition.time = Date.now()),
            !0)
          );
        },
        move: (t, i, s) => {
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
          const n = be(t[0], t[1]),
            o = be(i[0], i[1]),
            a = o.clientX - n.clientX,
            r = o.clientY - n.clientY,
            l = ve(t[0], t[1]),
            c = ve(i[0], i[1]),
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
            const e = Math.abs(
              (180 * Math.atan2(this.dragOffset.y, this.dragOffset.x)) / Math.PI
            );
            this.lockAxis = e > 45 && e < 135 ? "y" : "x";
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
              const t = be(e.startPointers[0], e.startPointers[1]),
                i = t.clientX - this.dragStart.rect.x,
                s = t.clientY - this.dragStart.rect.y,
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
        end: (t, i) => {
          if ("pointerdown" !== this.state) return;
          if (
            ((this._dragOffset = { ...this.dragOffset }),
            e.currentPointers.length)
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
            const e = this.dragPosition.midPoint || t,
              i = this.$content.getClientRects()[0];
            this.zoomTo(n, {
              friction: 0.64,
              x: e.clientX - i.left,
              y: e.clientY - i.top,
            });
          }
        },
      });
      this.pointerTracker = e;
    }
    initObserver() {
      this.resizeObserver ||
        ((this.resizeObserver = new me(() => {
          this.updateTimer ||
            (this.updateTimer = setTimeout(() => {
              const e = this.$container.getBoundingClientRect();
              e.width && e.height
                ? ((Math.abs(e.width - this.container.width) > 1 ||
                    Math.abs(e.height - this.container.height) > 1) &&
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
      const { x: e, y: t, scale: i } = this.content;
      (this.dragStart = {
        rect: this.$content.getBoundingClientRect(),
        x: e,
        y: t,
        scale: i,
      }),
        (this.dragPosition = { ...this.dragPosition, x: e, y: t, scale: i }),
        (this.dragOffset = { x: 0, y: 0, scale: 1, time: 0 });
    }
    updateMetrics(e) {
      !0 !== e && this.trigger("beforeUpdate");
      const t = this.$container,
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
        ((e) =>
          Math.max(
            parseFloat(e.naturalHeight || 0),
            parseFloat(
              (e.height && e.height.baseVal && e.height.baseVal.value) || 0
            ),
            parseFloat(e.offsetHeight || 0),
            parseFloat(e.scrollHeight || 0)
          ))(i);
      Object.assign(i.style, {
        width: r ? `${r}px` : "",
        height: l ? `${l}px` : "",
        maxWidth: "",
        maxHeight: "",
      }),
        a && Object.assign(s.style, { width: "", height: "" });
      const p = this.option("ratio");
      (c = ue(c * p)), (h = ue(h * p)), (r = c), (l = h);
      const u = i.getBoundingClientRect(),
        f = s.getBoundingClientRect(),
        m = s == t ? f : t.getBoundingClientRect();
      let g = Math.max(s.offsetWidth, ue(f.width)),
        v = Math.max(s.offsetHeight, ue(f.height)),
        b = window.getComputedStyle(s);
      if (
        ((g -= parseFloat(b.paddingLeft) + parseFloat(b.paddingRight)),
        (v -= parseFloat(b.paddingTop) + parseFloat(b.paddingBottom)),
        (this.viewport.width = g),
        (this.viewport.height = v),
        o)
      ) {
        if (Math.abs(c - u.width) > 0.1 || Math.abs(h - u.height) > 0.1) {
          const e = ((e, t, i, s) => {
            const n = Math.min(i / e || 0, s / t);
            return { width: e * n || 0, height: t * n || 0 };
          })(c, h, Math.min(c, u.width), Math.min(h, u.height));
          (r = ue(e.width)), (l = ue(e.height));
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
        const e = this.option("maxScale");
        this.options.maxScale = function () {
          return this.content.origWidth > 0 && this.content.fitWidth > 0
            ? this.content.origWidth / this.content.fitWidth
            : e;
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
        !0 !== e && this.trigger("afterUpdate");
    }
    zoomIn(e) {
      this.zoomTo(this.content.scale + (e || this.option("step")));
    }
    zoomOut(e) {
      this.zoomTo(this.content.scale - (e || this.option("step")));
    }
    toggleZoom(e = {}) {
      const t = this.option("maxScale"),
        i = this.option("baseScale"),
        s = this.content.scale > i + 0.5 * (t - i) ? i : t;
      this.zoomTo(s, e);
    }
    zoomTo(e = this.option("baseScale"), { x: t = null, y: i = null } = {}) {
      e = Math.max(
        Math.min(e, this.option("maxScale")),
        this.option("minScale")
      );
      const s = ue(
        this.content.scale / (this.content.width / this.content.fitWidth),
        1e7
      );
      null === t && (t = this.content.width * s * 0.5),
        null === i && (i = this.content.height * s * 0.5);
      const { deltaX: n, deltaY: o } = this.getZoomDelta(e, t, i);
      (t = this.content.x - n),
        (i = this.content.y - o),
        this.panTo({
          x: t,
          y: i,
          scale: e,
          friction: this.option("zoomFriction"),
        });
    }
    getZoomDelta(e, t = 0, i = 0) {
      const s = this.content.fitWidth * this.content.scale,
        n = this.content.fitHeight * this.content.scale,
        o = t > 0 && s ? t / s : 0,
        a = i > 0 && n ? i / n : 0;
      return {
        deltaX: (this.content.fitWidth * e - s) * o,
        deltaY: (this.content.fitHeight * e - n) * a,
      };
    }
    panTo({
      x: e = this.content.x,
      y: t = this.content.y,
      scale: i,
      friction: s = this.option("friction"),
      ignoreBounds: n = !1,
    } = {}) {
      if (((i = i || this.content.scale || 1), !n)) {
        const { boundX: s, boundY: n } = this.getBounds(i);
        s && (e = Math.max(Math.min(e, s.to), s.from)),
          n && (t = Math.max(Math.min(t, n.to), n.from));
      }
      (this.friction = s),
        (this.transform = { ...this.transform, x: e, y: t, scale: i }),
        s
          ? ((this.state = "panning"),
            (this.velocity = {
              x: (1 / this.friction - 1) * (e - this.content.x),
              y: (1 / this.friction - 1) * (t - this.content.y),
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
    getBounds(e) {
      let t = this.boundX,
        i = this.boundY;
      if (void 0 !== t && void 0 !== i) return { boundX: t, boundY: i };
      (t = { from: 0, to: 0 }),
        (i = { from: 0, to: 0 }),
        (e = e || this.transform.scale);
      const s = this.content.fitWidth * e,
        n = this.content.fitHeight * e,
        o = this.viewport.width,
        a = this.viewport.height;
      if (s < o) {
        const e = ue(0.5 * (o - s));
        (t.from = e), (t.to = e);
      } else t.from = ue(o - s);
      if (n < a) {
        const e = 0.5 * (a - n);
        (i.from = e), (i.to = e);
      } else i.from = ue(a - n);
      return { boundX: t, boundY: i };
    }
    setEdgeForce() {
      if ("decel" !== this.state) return;
      const e = this.option("bounceForce"),
        { boundX: t, boundY: i } = this.getBounds(
          Math.max(this.transform.scale, this.content.scale)
        );
      let s, n, o, a;
      if (
        (t && ((s = this.content.x < t.from), (n = this.content.x > t.to)),
        i && ((o = this.content.y < i.from), (a = this.content.y > i.to)),
        s || n)
      ) {
        let i = ((s ? t.from : t.to) - this.content.x) * e;
        const n = this.content.x + (this.velocity.x + i) / this.friction;
        n >= t.from && n <= t.to && (i += this.velocity.x),
          (this.velocity.x = i),
          this.recalculateTransform();
      }
      if (o || a) {
        let t = ((o ? i.from : i.to) - this.content.y) * e;
        const s = this.content.y + (t + this.velocity.y) / this.friction;
        s >= i.from && s <= i.to && (t += this.velocity.y),
          (this.velocity.y = t),
          this.recalculateTransform();
      }
    }
    setDragResistance() {
      if ("pointerdown" !== this.state) return;
      const { boundX: e, boundY: t } = this.getBounds(this.dragPosition.scale);
      let i, s, n, o;
      if (
        (e &&
          ((i = this.dragPosition.x < e.from),
          (s = this.dragPosition.x > e.to)),
        t &&
          ((n = this.dragPosition.y < t.from),
          (o = this.dragPosition.y > t.to)),
        (i || s) && (!i || !s))
      ) {
        const t = i ? e.from : e.to,
          s = t - this.dragPosition.x;
        this.dragPosition.x = t - 0.3 * s;
      }
      if ((n || o) && (!n || !o)) {
        const e = n ? t.from : t.to,
          i = e - this.dragPosition.y;
        this.dragPosition.y = e - 0.3 * i;
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
    setTransform(e) {
      let t, i, s;
      if (
        (e
          ? ((t = ue(this.transform.x)),
            (i = ue(this.transform.y)),
            (s = this.transform.scale),
            (this.content = { ...this.content, x: t, y: i, scale: s }))
          : ((t = ue(this.content.x)),
            (i = ue(this.content.y)),
            (s =
              this.content.scale /
              (this.content.width / this.content.fitWidth)),
            (this.content = { ...this.content, x: t, y: i })),
        this.trigger("beforeTransform"),
        (t = ue(this.content.x)),
        (i = ue(this.content.y)),
        e && this.option("zoom"))
      ) {
        let e, n;
        (e = ue(this.content.fitWidth * s)),
          (n = ue(this.content.fitHeight * s)),
          (this.content.width = e),
          (this.content.height = n),
          (this.transform = {
            ...this.transform,
            width: e,
            height: n,
            scale: s,
          }),
          Object.assign(this.$content.style, {
            width: `${e}px`,
            height: `${n}px`,
            maxWidth: "none",
            maxHeight: "none",
            transform: `translate3d(${t}px, ${i}px, 0) scale(1)`,
          });
      } else
        this.$content.style.transform = `translate3d(${t}px, ${i}px, 0) scale(${s})`;
      this.trigger("afterTransform");
    }
    endAnimation(e) {
      cancelAnimationFrame(this.rAF),
        (this.rAF = null),
        (this.velocity = { x: 0, y: 0, scale: 0 }),
        this.setTransform(!0),
        (this.state = "ready"),
        this.handleCursor(),
        !0 !== e && this.trigger("endAnimation");
    }
    handleCursor() {
      const e = this.option("draggableClass");
      e &&
        this.option("touch") &&
        (1 == this.option("panOnlyZoomed") &&
        this.content.width <= this.viewport.width &&
        this.content.height <= this.viewport.height &&
        this.transform.scale <= this.option("baseScale")
          ? this.$container.classList.remove(e)
          : this.$container.classList.add(e));
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
  (Ce.version = "4.0.27"), (Ce.Plugins = {});
  const Se = (e, t) => {
    let i = 0;
    return function (...s) {
      const n = new Date().getTime();
      if (!(n - i < t)) return (i = n), e(...s);
    };
  };
  class Ee {
    constructor(e) {
      (this.$container = null),
        (this.$prev = null),
        (this.$next = null),
        (this.carousel = e),
        (this.onRefresh = this.onRefresh.bind(this));
    }
    option(e) {
      return this.carousel.option(`Navigation.${e}`);
    }
    createButton(e) {
      const t = document.createElement("button");
      t.setAttribute("title", this.carousel.localize(`{{${e.toUpperCase()}}}`));
      const i =
        this.option("classNames.button") + " " + this.option(`classNames.${e}`);
      return (
        t.classList.add(...i.split(" ")),
        t.setAttribute("tabindex", "0"),
        (t.innerHTML = this.carousel.localize(this.option(`${e}Tpl`))),
        t.addEventListener("click", (t) => {
          t.preventDefault(),
            t.stopPropagation(),
            this.carousel["slide" + ("next" === e ? "Next" : "Prev")]();
        }),
        t
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
      const e = this.carousel.pages.length;
      e <= 1 ||
      (e > 1 &&
        this.carousel.elemDimWidth < this.carousel.wrapDimWidth &&
        !Number.isInteger(this.carousel.option("slidesPerPage")))
        ? this.cleanup()
        : (this.build(),
          this.$prev.removeAttribute("disabled"),
          this.$next.removeAttribute("disabled"),
          this.carousel.option("infiniteX", this.carousel.option("infinite")) ||
            (this.carousel.page <= 0 && this.$prev.setAttribute("disabled", ""),
            this.carousel.page >= e - 1 &&
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
  Ee.defaults = {
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
  class Te {
    constructor(e) {
      (this.carousel = e),
        (this.selectedIndex = null),
        (this.friction = 0),
        (this.onNavReady = this.onNavReady.bind(this)),
        (this.onNavClick = this.onNavClick.bind(this)),
        (this.onNavCreateSlide = this.onNavCreateSlide.bind(this)),
        (this.onTargetChange = this.onTargetChange.bind(this));
    }
    addAsTargetFor(e) {
      (this.target = this.carousel), (this.nav = e), this.attachEvents();
    }
    addAsNavFor(e) {
      (this.target = e), (this.nav = this.carousel), this.attachEvents();
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
    onNavClick(e, t, i) {
      const s = i.target.closest(".carousel__slide");
      if (!s) return;
      i.stopPropagation();
      const n = parseInt(s.dataset.index, 10),
        o = this.target.findPageForSlide(n);
      this.target.page !== o &&
        this.target.slideTo(o, { friction: this.friction }),
        this.markSelectedSlide(n);
    }
    onNavCreateSlide(e, t) {
      t.index === this.selectedIndex && this.markSelectedSlide(t.index);
    }
    onTargetChange() {
      const e = this.target.pages[this.target.page].indexes[0],
        t = this.nav.findPageForSlide(e);
      this.nav.slideTo(t), this.markSelectedSlide(e);
    }
    markSelectedSlide(e) {
      (this.selectedIndex = e),
        [...this.nav.slides].filter(
          (e) => e.$el && e.$el.classList.remove("is-nav-selected")
        );
      const t = this.nav.slides[e];
      t && t.$el && t.$el.classList.add("is-nav-selected");
    }
    attach(e) {
      const t = e.options.Sync;
      (t.target || t.nav) &&
        (t.target
          ? this.addAsNavFor(t.target)
          : t.nav && this.addAsTargetFor(t.nav),
        (this.friction = t.friction));
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
  Te.defaults = { friction: 0.92 };
  const $e = {
      Navigation: Ee,
      Dots: class {
        constructor(e) {
          (this.carousel = e),
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
          const e = document.createElement("ol");
          return (
            e.classList.add("carousel__dots"),
            e.addEventListener("click", (e) => {
              if (!("page" in e.target.dataset)) return;
              e.preventDefault(), e.stopPropagation();
              const t = parseInt(e.target.dataset.page, 10),
                i = this.carousel;
              t !== i.page &&
                (i.pages.length < 3 && i.option("infinite")
                  ? i[0 == t ? "slidePrev" : "slideNext"]()
                  : i.slideTo(t));
            }),
            (this.$list = e),
            this.carousel.$container.appendChild(e),
            this.carousel.$container.classList.add("has-dots"),
            e
          );
        }
        removeList() {
          this.$list &&
            (this.$list.parentNode.removeChild(this.$list),
            (this.$list = null)),
            this.carousel.$container.classList.remove("has-dots");
        }
        rebuildDots() {
          let e = this.$list;
          const t = !!e,
            i = this.carousel.pages.length;
          if (i < 2) return void (t && this.removeList());
          t || (e = this.buildList());
          const s = this.$list.children.length;
          if (s > i)
            for (let e = i; e < s; e++)
              this.$list.removeChild(this.$list.lastChild);
          else {
            for (let e = s; e < i; e++) {
              const t = document.createElement("li");
              t.classList.add("carousel__dot"),
                (t.dataset.page = e),
                t.setAttribute("role", "button"),
                t.setAttribute("tabindex", "0"),
                t.setAttribute(
                  "title",
                  this.carousel.localize("{{GOTO}}", [["%d", e + 1]])
                ),
                t.addEventListener("keydown", (e) => {
                  const i = e.code;
                  let s;
                  "Enter" === i || "NumpadEnter" === i
                    ? (s = t)
                    : "ArrowRight" === i
                    ? (s = t.nextSibling)
                    : "ArrowLeft" === i && (s = t.previousSibling),
                    s && s.click();
                }),
                this.$list.appendChild(t);
            }
            this.setActiveDot();
          }
        }
        setActiveDot() {
          if (!this.$list) return;
          this.$list.childNodes.forEach((e) => {
            e.classList.remove("is-selected");
          });
          const e = this.$list.childNodes[this.carousel.page];
          e && e.classList.add("is-selected");
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
      Sync: Te,
    },
    Pe = {
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
  class Le extends xe {
    constructor(e, t = {}) {
      if (
        (super((t = pe(!0, {}, Pe, t))),
        (this.state = "init"),
        (this.$container = e),
        !(this.$container instanceof HTMLElement))
      )
        throw new Error("No root element provided");
      (this.slideNext = Se(this.slideNext.bind(this), 250)),
        (this.slidePrev = Se(this.slidePrev.bind(this), 250)),
        this.init(),
        (e.__Carousel = this);
    }
    init() {
      (this.pages = []),
        (this.page = this.pageIndex = null),
        (this.prevPage = this.prevPageIndex = null),
        this.attachPlugins(Le.Plugins),
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
      const e = this.option("prefix"),
        t = this.option("classNames");
      (this.$viewport =
        this.option("viewport") ||
        this.$container.querySelector(`.${e}${t.viewport}`)),
        this.$viewport ||
          ((this.$viewport = document.createElement("div")),
          this.$viewport.classList.add(...(e + t.viewport).split(" ")),
          this.$viewport.append(...this.$container.childNodes),
          this.$container.appendChild(this.$viewport)),
        (this.$track =
          this.option("track") ||
          this.$container.querySelector(`.${e}${t.track}`)),
        this.$track ||
          ((this.$track = document.createElement("div")),
          this.$track.classList.add(...(e + t.track).split(" ")),
          this.$track.append(...this.$viewport.childNodes),
          this.$viewport.appendChild(this.$track));
    }
    initSlides() {
      (this.slides = []),
        this.$viewport
          .querySelectorAll(
            `.${this.option("prefix")}${this.option("classNames.slide")}`
          )
          .forEach((e) => {
            const t = { $el: e, isDom: !0 };
            this.slides.push(t),
              this.trigger("createSlide", t, this.slides.length);
          }),
        Array.isArray(this.options.slides) &&
          (this.slides = pe(!0, [...this.slides], this.options.slides));
    }
    updateMetrics() {
      let e,
        t = 0,
        i = [];
      this.slides.forEach((s, n) => {
        const o = s.$el,
          a = s.isDom || !e ? this.getSlideMetrics(o) : e;
        (s.index = n),
          (s.width = a),
          (s.left = t),
          (e = a),
          (t += a),
          i.push(n);
      });
      let s = Math.max(
          this.$track.offsetWidth,
          ue(this.$track.getBoundingClientRect().width)
        ),
        n = getComputedStyle(this.$track);
      (s -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight)),
        (this.contentWidth = t),
        (this.viewportWidth = s);
      const o = [],
        a = this.option("slidesPerPage");
      if (Number.isInteger(a) && t > s)
        for (let e = 0; e < this.slides.length; e += a)
          o.push({
            indexes: i.slice(e, e + a),
            slides: this.slides.slice(e, e + a),
          });
      else {
        let e = 0,
          t = 0;
        for (let i = 0; i < this.slides.length; i += 1) {
          let n = this.slides[i];
          (!o.length || t + n.width > s) &&
            (o.push({ indexes: [], slides: [] }), (e = o.length - 1), (t = 0)),
            (t += n.width),
            o[e].indexes.push(i),
            o[e].slides.push(n);
        }
      }
      const r = this.option("center"),
        l = this.option("fill");
      o.forEach((e, i) => {
        (e.index = i),
          (e.width = e.slides.reduce((e, t) => e + t.width, 0)),
          (e.left = e.slides[0].left),
          r && (e.left += 0.5 * (s - e.width) * -1),
          l &&
            !this.option("infiniteX", this.option("infinite")) &&
            t > s &&
            ((e.left = Math.max(e.left, 0)),
            (e.left = Math.min(e.left, t - s)));
      });
      const c = [];
      let d;
      o.forEach((e) => {
        const t = { ...e };
        d && t.left === d.left
          ? ((d.width += t.width),
            (d.slides = [...d.slides, ...t.slides]),
            (d.indexes = [...d.indexes, ...t.indexes]))
          : ((t.index = c.length), (d = t), c.push(t));
      }),
        (this.pages = c);
      let h = this.page;
      if (null === h) {
        const e = this.option("initialSlide");
        (h =
          null !== e
            ? this.findPageForSlide(e)
            : parseInt(this.option("initialPage", 0), 10) || 0),
          c[h] || (h = c.length && h > c.length ? c[c.length - 1].index : 0),
          (this.page = h),
          (this.pageIndex = h);
      }
      this.updatePanzoom(), this.trigger("refresh");
    }
    getSlideMetrics(e) {
      if (!e) {
        const t = this.slides[0];
        ((e = document.createElement("div")).dataset.isTestEl = 1),
          (e.style.visibility = "hidden"),
          e.classList.add(
            ...(this.option("prefix") + this.option("classNames.slide")).split(
              " "
            )
          ),
          t.customClass && e.classList.add(...t.customClass.split(" ")),
          this.$track.prepend(e);
      }
      let t = Math.max(e.offsetWidth, ue(e.getBoundingClientRect().width));
      const i = e.currentStyle || window.getComputedStyle(e);
      return (
        (t =
          t +
          (parseFloat(i.marginLeft) || 0) +
          (parseFloat(i.marginRight) || 0)),
        e.dataset.isTestEl && e.remove(),
        t
      );
    }
    findPageForSlide(e) {
      e = parseInt(e, 10) || 0;
      const t = this.pages.find((t) => t.indexes.indexOf(e) > -1);
      return t ? t.index : null;
    }
    slideNext() {
      this.slideTo(this.pageIndex + 1);
    }
    slidePrev() {
      this.slideTo(this.pageIndex - 1);
    }
    slideTo(e, t = {}) {
      const {
        x: i = -1 * this.setPage(e, !0),
        y: s = 0,
        friction: n = this.option("friction"),
      } = t;
      (this.Panzoom.content.x === i && !this.Panzoom.velocity.x && n) ||
        (this.Panzoom.panTo({ x: i, y: s, friction: n, ignoreBounds: !0 }),
        "ready" === this.state &&
          "ready" === this.Panzoom.state &&
          this.trigger("settle"));
    }
    initPanzoom() {
      this.Panzoom && this.Panzoom.destroy();
      const e = pe(
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
      (this.Panzoom = new Ce(this.$container, e)),
        this.Panzoom.on({
          "*": (e, ...t) => this.trigger(`Panzoom.${e}`, ...t),
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
      const e = this.contentWidth,
        t = this.viewportWidth;
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
          (c = i + t + a),
          (l -= s * (t + o + a)),
          (c += s * (t + o + a));
        const h = r.left + r.width > l && r.left < c;
        (l = i + e - o), (c = i + e + t + a), (l -= s * (t + o + a));
        const p = n && r.left + r.width > l && r.left < c;
        (l = i - e - o), (c = i - e + t + a), (l -= s * (t + o + a));
        const u = n && r.left + r.width > l && r.left < c;
        p || h || u
          ? (this.createSlideEl(r),
            h && (d = 0),
            p && (d = -1),
            u && (d = 1),
            r.left + r.width > i && r.left <= i + t + a && (d = 0))
          : this.removeSlideEl(r),
          (r.hasDiff = d);
      });
      let r = 0,
        l = 0;
      this.slides.forEach((t, i) => {
        let s = 0;
        t.$el
          ? (i !== r || t.hasDiff ? (s = l + t.hasDiff * e) : (l = 0),
            (t.$el.style.left =
              Math.abs(s) > 0.1 ? `${l + t.hasDiff * e}px` : ""),
            r++)
          : (l += t.width);
      }),
        this.markSelectedSlides();
    }
    createSlideEl(e) {
      if (!e) return;
      if (e.$el) {
        let t = e.$el.dataset.index;
        if (!t || parseInt(t, 10) !== e.index) {
          let t;
          (e.$el.dataset.index = e.index),
            e.$el.querySelectorAll("[data-lazy-srcset]").forEach((e) => {
              e.srcset = e.dataset.lazySrcset;
            }),
            e.$el.querySelectorAll("[data-lazy-src]").forEach((e) => {
              let t = e.dataset.lazySrc;
              e instanceof HTMLImageElement
                ? (e.src = t)
                : (e.style.backgroundImage = `url('${t}')`);
            }),
            (t = e.$el.dataset.lazySrc) &&
              (e.$el.style.backgroundImage = `url('${t}')`),
            (e.state = "ready");
        }
        return;
      }
      const t = document.createElement("div");
      (t.dataset.index = e.index),
        t.classList.add(
          ...(this.option("prefix") + this.option("classNames.slide")).split(
            " "
          )
        ),
        e.customClass && t.classList.add(...e.customClass.split(" ")),
        e.html && (t.innerHTML = e.html);
      const i = [];
      this.slides.forEach((e, t) => {
        e.$el && i.push(t);
      });
      const s = e.index;
      let n = null;
      if (i.length) {
        let e = i.reduce((e, t) => (Math.abs(t - s) < Math.abs(e - s) ? t : e));
        n = this.slides[e];
      }
      return (
        this.$track.insertBefore(
          t,
          n && n.$el ? (n.index < e.index ? n.$el.nextSibling : n.$el) : null
        ),
        (e.$el = t),
        this.trigger("createSlide", e, s),
        e
      );
    }
    removeSlideEl(e) {
      e.$el &&
        !e.isDom &&
        (this.trigger("removeSlide", e), e.$el.remove(), (e.$el = null));
    }
    markSelectedSlides() {
      const e = this.option("classNames.slideSelected"),
        t = "aria-hidden";
      this.slides.forEach((i, s) => {
        const n = i.$el;
        if (!n) return;
        const o = this.pages[this.page];
        o && o.indexes && o.indexes.indexOf(s) > -1
          ? (e &&
              !n.classList.contains(e) &&
              (n.classList.add(e), this.trigger("selectSlide", i)),
            n.removeAttribute(t))
          : (e &&
              n.classList.contains(e) &&
              (n.classList.remove(e), this.trigger("unselectSlide", i)),
            n.setAttribute(t, !0));
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
      const e = this.contentWidth,
        t = this.viewportWidth;
      if (
        !this.option("infiniteX", this.option("infinite")) ||
        this.pages.length < 2 ||
        e < t
      )
        return;
      const i = this.Panzoom;
      let s = !1;
      return (
        i.content.x < -1 * (e - t) &&
          ((i.content.x += e),
          (this.pageIndex = this.pageIndex - this.pages.length),
          (s = !0)),
        i.content.x > t &&
          ((i.content.x -= e),
          (this.pageIndex = this.pageIndex + this.pages.length),
          (s = !0)),
        s && "pointerdown" === i.state && i.resetDragPosition(),
        s
      );
    }
    onTouchEnd(e, t) {
      const i = this.option("dragFree");
      if (
        !i &&
        this.pages.length > 1 &&
        e.dragOffset.time < 350 &&
        Math.abs(e.dragOffset.y) < 1 &&
        Math.abs(e.dragOffset.x) > 5
      )
        this[e.dragOffset.x < 0 ? "slideNext" : "slidePrev"]();
      else if (i) {
        const [, t] = this.getPageFromPosition(-1 * e.transform.x);
        this.setPage(t);
      } else this.slideToClosest();
    }
    slideToClosest(e = {}) {
      let [, t] = this.getPageFromPosition(-1 * this.Panzoom.content.x);
      this.slideTo(t, e);
    }
    getPageFromPosition(e) {
      const t = this.pages.length;
      this.option("center") && (e += 0.5 * this.viewportWidth);
      const i = Math.floor(e / this.contentWidth);
      e -= i * this.contentWidth;
      let s = this.slides.find((t) => t.left <= e && t.left + t.width > e);
      if (s) {
        let e = this.findPageForSlide(s.index);
        return [e, e + i * t];
      }
      return [0, 0];
    }
    setPage(e, t) {
      let i = 0,
        s = parseInt(e, 10) || 0;
      const n = this.page,
        o = this.pageIndex,
        a = this.pages.length,
        r = this.contentWidth,
        l = this.viewportWidth;
      if (
        ((e = ((s % a) + a) % a),
        this.option("infiniteX", this.option("infinite")) && r > l)
      ) {
        const n = Math.floor(s / a) || 0,
          o = r;
        if (((i = this.pages[e].left + n * o), !0 === t && a > 2)) {
          let e = -1 * this.Panzoom.content.x;
          const t = i - o,
            n = i + o,
            r = Math.abs(e - i),
            l = Math.abs(e - t),
            c = Math.abs(e - n);
          c < r && c <= l
            ? ((i = n), (s += a))
            : l < r && l < c && ((i = t), (s -= a));
        }
      } else
        (e = s = Math.max(0, Math.min(s, a - 1))),
          (i = this.pages.length ? this.pages[e].left : 0);
      return (
        (this.page = e),
        (this.pageIndex = s),
        null !== n &&
          e !== n &&
          ((this.prevPage = n),
          (this.prevPageIndex = o),
          this.trigger("change", e, n)),
        i
      );
    }
    destroy() {
      (this.state = "destroy"),
        this.slides.forEach((e) => {
          this.removeSlideEl(e);
        }),
        (this.slides = []),
        this.Panzoom.destroy(),
        this.detachPlugins();
    }
  }
  (Le.version = "4.0.27"), (Le.Plugins = $e);
  const ke = !(
    "undefined" == typeof window ||
    !window.document ||
    !window.document.createElement
  );
  let Me = null;
  const Ae = [
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
    _e = (e) => {
      if (e && ke) {
        null === Me &&
          document.createElement("div").focus({
            get preventScroll() {
              return (Me = !0), !1;
            },
          });
        try {
          if (e.setActive) e.setActive();
          else if (Me) e.focus({ preventScroll: !0 });
          else {
            const t = window.pageXOffset || document.body.scrollTop,
              i = window.pageYOffset || document.body.scrollLeft;
            e.focus(),
              document.body.scrollTo({ top: t, left: i, behavior: "auto" });
          }
        } catch (e) {}
      }
    };
  class Oe {
    constructor(e) {
      (this.fancybox = e), (this.$container = null), (this.state = "init");
      for (const e of ["onPrepare", "onClosing", "onKeydown"])
        this[e] = this[e].bind(this);
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
    onKeydown(e, t) {
      t === e.option("Thumbs.key") && this.toggle();
    }
    build() {
      if (this.$container) return;
      const e = document.createElement("div");
      e.classList.add("fancybox__thumbs"),
        this.fancybox.$carousel.parentNode.insertBefore(
          e,
          this.fancybox.$carousel.nextSibling
        ),
        (this.Carousel = new Le(
          e,
          pe(
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
        this.Carousel.Panzoom.on("wheel", (e, t) => {
          t.preventDefault(), this.fancybox[t.deltaY < 0 ? "prev" : "next"]();
        }),
        (this.$container = e),
        (this.state = "visible");
    }
    getSlides() {
      const e = [];
      for (const t of this.fancybox.items) {
        const i = t.thumb;
        i &&
          e.push({
            html: `<div class="fancybox__thumb" style="background-image:url('${i}')"></div>`,
            customClass: `has-thumb has-${t.type || "image"}`,
          });
      }
      return e;
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
  Oe.defaults = {
    minSlideCount: 2,
    minScreenHeight: 500,
    autoStart: !0,
    key: "t",
    Carousel: {},
  };
  const ze = (e, t) => {
      const i = new URL(e),
        s = new URLSearchParams(i.search);
      let n = new URLSearchParams();
      for (const [e, i] of [...s, ...Object.entries(t)])
        "t" === e ? n.set("start", parseInt(i)) : n.set(e, i);
      n = n.toString();
      let o = e.match(/#t=((.*)?\d+s)/);
      return o && (n += `#t=${o[1]}`), n;
    },
    Ie = {
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
  class Ne {
    constructor(e) {
      this.fancybox = e;
      for (const e of [
        "onInit",
        "onReady",
        "onCreateSlide",
        "onRemoveSlide",
        "onSelectSlide",
        "onUnselectSlide",
        "onRefresh",
        "onMessage",
      ])
        this[e] = this[e].bind(this);
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
      for (const e of this.fancybox.items) this.processType(e);
    }
    processType(e) {
      if (e.html)
        return (e.src = e.html), (e.type = "html"), void delete e.html;
      const t = e.src || "";
      let i = e.type || this.fancybox.options.type,
        s = null;
      if (!t || "string" == typeof t) {
        if (
          (s = t.match(
            /(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i
          ))
        ) {
          const n = ze(t, this.fancybox.option("Html.youtube")),
            o = encodeURIComponent(s[1]);
          (e.videoId = o),
            (e.src = `https://www.youtube-nocookie.com/embed/${o}?${n}`),
            (e.thumb = e.thumb || `https://i.ytimg.com/vi/${o}/mqdefault.jpg`),
            (e.vendor = "youtube"),
            (i = "video");
        } else if ((s = t.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/))) {
          const n = ze(t, this.fancybox.option("Html.vimeo")),
            o = encodeURIComponent(s[1]);
          (e.videoId = o),
            (e.src = `https://player.vimeo.com/video/${o}?${n}`),
            (e.vendor = "vimeo"),
            (i = "video");
        } else
          (s = t.match(
            /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i
          ))
            ? ((e.src = `//maps.google.${s[1]}/?ll=${(s[2]
                ? s[2] +
                  "&z=" +
                  Math.floor(s[3]) +
                  (s[4] ? s[4].replace(/^\//, "&") : "")
                : s[4] + ""
              ).replace(/\?/, "&")}&output=${
                s[4] && s[4].indexOf("layer=c") > 0 ? "svembed" : "embed"
              }`),
              (i = "map"))
            : (s = t.match(
                /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i
              )) &&
              ((e.src = `//maps.google.${s[1]}/maps?q=${s[2]
                .replace("query=", "q=")
                .replace("api=1", "")}&output=embed`),
              (i = "map"));
        i ||
          ("#" === t.charAt(0)
            ? (i = "inline")
            : (s = t.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
            ? ((i = "html5video"),
              (e.format =
                e.format || "video/" + ("ogv" === s[1] ? "ogg" : s[1])))
            : t.match(
                /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
              )
            ? (i = "image")
            : t.match(/\.(pdf)((\?|#).*)?$/i) && (i = "pdf")),
          (e.type = i || this.fancybox.option("defaultType", "image")),
          ("html5video" !== i && "video" !== i) ||
            ((e.video = pe({}, this.fancybox.option("Html.video"), e.video)),
            e._width && e._height
              ? (e.ratio = parseFloat(e._width) / parseFloat(e._height))
              : (e.ratio = e.ratio || e.video.ratio || Ie.video.ratio));
      }
    }
    onReady() {
      this.fancybox.Carousel.slides.forEach((e) => {
        e.$el &&
          (this.setContent(e),
          e.index === this.fancybox.getSlide().index && this.playVideo(e));
      });
    }
    onCreateSlide(e, t, i) {
      "ready" === this.fancybox.state && this.setContent(i);
    }
    loadInlineContent(e) {
      let t;
      if (e.src instanceof HTMLElement) t = e.src;
      else if ("string" == typeof e.src) {
        const i = e.src.split("#", 2),
          s = 2 === i.length && "" === i[0] ? i[1] : i[0];
        t = document.getElementById(s);
      }
      if (t) {
        if ("clone" === e.type || t.$placeHolder) {
          t = t.cloneNode(!0);
          let i = t.getAttribute("id");
          (i = i ? `${i}--clone` : `clone-${this.fancybox.id}-${e.index}`),
            t.setAttribute("id", i);
        } else {
          const e = document.createElement("div");
          e.classList.add("fancybox-placeholder"),
            t.parentNode.insertBefore(e, t),
            (t.$placeHolder = e);
        }
        this.fancybox.setContent(e, t);
      } else this.fancybox.setError(e, "{{ELEMENT_NOT_FOUND}}");
    }
    loadAjaxContent(e) {
      const t = this.fancybox,
        i = new XMLHttpRequest();
      t.showLoading(e),
        (i.onreadystatechange = function () {
          i.readyState === XMLHttpRequest.DONE &&
            "ready" === t.state &&
            (t.hideLoading(e),
            200 === i.status
              ? t.setContent(e, i.responseText)
              : t.setError(
                  e,
                  404 === i.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"
                ));
        });
      const s = e.ajax || null;
      i.open(s ? "POST" : "GET", e.src),
        i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
        i.send(s),
        (e.xhr = i);
    }
    loadIframeContent(e) {
      const t = this.fancybox,
        i = document.createElement("iframe");
      if (
        ((i.className = "fancybox__iframe"),
        i.setAttribute("id", `fancybox__iframe_${t.id}_${e.index}`),
        i.setAttribute("allow", "autoplay; fullscreen"),
        i.setAttribute("scrolling", "auto"),
        (e.$iframe = i),
        "iframe" !== e.type || !1 === e.preload)
      )
        return (
          i.setAttribute("src", e.src),
          this.fancybox.setContent(e, i),
          void this.resizeIframe(e)
        );
      t.showLoading(e);
      const s = document.createElement("div");
      (s.style.visibility = "hidden"),
        this.fancybox.setContent(e, s),
        s.appendChild(i),
        (i.onerror = () => {
          t.setError(e, "{{IFRAME_ERROR}}");
        }),
        (i.onload = () => {
          t.hideLoading(e);
          let s = !1;
          i.isReady || ((i.isReady = !0), (s = !0)),
            i.src.length &&
              ((i.parentNode.style.visibility = ""),
              this.resizeIframe(e),
              s && t.revealContent(e));
        }),
        i.setAttribute("src", e.src);
    }
    setAspectRatio(e) {
      const t = e.$content,
        i = e.ratio;
      if (!t) return;
      let s = e._width,
        n = e._height;
      if (i || (s && n)) {
        Object.assign(t.style, {
          width: s && n ? "100%" : "",
          height: s && n ? "100%" : "",
          maxWidth: "",
          maxHeight: "",
        });
        let e = t.offsetWidth,
          o = t.offsetHeight;
        if (((s = s || e), (n = n || o), s > e || n > o)) {
          let t = Math.min(e / s, o / n);
          (s *= t), (n *= t);
        }
        Math.abs(s / n - i) > 0.01 && (i < s / n ? (s = n * i) : (n = s / i)),
          Object.assign(t.style, { width: `${s}px`, height: `${n}px` });
      }
    }
    resizeIframe(e) {
      const t = e.$iframe;
      if (!t) return;
      let i = e._width || 0,
        s = e._height || 0;
      i && s && (e.autoSize = !1);
      const n = t.parentNode,
        o = n && n.style;
      if (!1 !== e.preload && !1 !== e.autoSize && o)
        try {
          const e = window.getComputedStyle(n),
            a = parseFloat(e.paddingLeft) + parseFloat(e.paddingRight),
            r = parseFloat(e.paddingTop) + parseFloat(e.paddingBottom),
            l = t.contentWindow.document,
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
        } catch (e) {}
      if (i || s) {
        const e = { flex: "0 1 auto" };
        i && (e.width = `${i}px`),
          s && (e.height = `${s}px`),
          Object.assign(o, e);
      }
    }
    onRefresh(e, t) {
      t.slides.forEach((e) => {
        e.$el &&
          (e.$iframe && this.resizeIframe(e),
          e.ratio && this.setAspectRatio(e));
      });
    }
    setContent(e) {
      if (e && !e.isDom) {
        switch (e.type) {
          case "html":
            this.fancybox.setContent(e, e.src);
            break;
          case "html5video":
            this.fancybox.setContent(
              e,
              this.fancybox
                .option("Html.html5video.tpl")
                .replace(/\{\{src\}\}/gi, e.src)
                .replace(
                  "{{format}}",
                  e.format || (e.html5video && e.html5video.format) || ""
                )
                .replace("{{poster}}", e.poster || e.thumb || "")
            );
            break;
          case "inline":
          case "clone":
            this.loadInlineContent(e);
            break;
          case "ajax":
            this.loadAjaxContent(e);
            break;
          case "pdf":
          case "video":
          case "map":
            e.preload = !1;
          case "iframe":
            this.loadIframeContent(e);
        }
        e.ratio && this.setAspectRatio(e);
      }
    }
    onSelectSlide(e, t, i) {
      "ready" === e.state && this.playVideo(i);
    }
    playVideo(e) {
      if ("html5video" === e.type && e.video.autoplay)
        try {
          const t = e.$el.querySelector("video");
          if (t) {
            const e = t.play();
            void 0 !== e &&
              e
                .then(() => {})
                .catch((e) => {
                  (t.muted = !0), t.play();
                });
          }
        } catch (e) {}
      if ("video" !== e.type || !e.$iframe || !e.$iframe.contentWindow) return;
      const t = () => {
        if ("done" === e.state && e.$iframe && e.$iframe.contentWindow) {
          let t;
          if (e.$iframe.isReady)
            return (
              e.video &&
                e.video.autoplay &&
                (t =
                  "youtube" == e.vendor
                    ? { event: "command", func: "playVideo" }
                    : { method: "play", value: "true" }),
              void (
                t && e.$iframe.contentWindow.postMessage(JSON.stringify(t), "*")
              )
            );
          "youtube" === e.vendor &&
            ((t = { event: "listening", id: e.$iframe.getAttribute("id") }),
            e.$iframe.contentWindow.postMessage(JSON.stringify(t), "*"));
        }
        e.poller = setTimeout(t, 250);
      };
      t();
    }
    onUnselectSlide(e, t, i) {
      if ("html5video" === i.type) {
        try {
          i.$el.querySelector("video").pause();
        } catch (e) {}
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
    onRemoveSlide(e, t, i) {
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
    onMessage(e) {
      try {
        let t = JSON.parse(e.data);
        if ("https://player.vimeo.com" === e.origin) {
          if ("ready" === t.event)
            for (let t of document.getElementsByClassName("fancybox__iframe"))
              t.contentWindow === e.source && (t.isReady = 1);
        } else
          "https://www.youtube-nocookie.com" === e.origin &&
            "onReady" === t.event &&
            (document.getElementById(t.id).isReady = 1);
      } catch (e) {}
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
  Ne.defaults = Ie;
  class De {
    constructor(e) {
      this.fancybox = e;
      for (const e of [
        "onReady",
        "onClosing",
        "onDone",
        "onPageChange",
        "onCreateSlide",
        "onRemoveSlide",
        "onImageStatusChange",
      ])
        this[e] = this[e].bind(this);
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
      this.fancybox.Carousel.slides.forEach((e) => {
        e.$el && this.setContent(e);
      });
    }
    onDone(e, t) {
      this.handleCursor(t);
    }
    onClosing(e) {
      clearTimeout(this.clickTimer),
        (this.clickTimer = null),
        e.Carousel.slides.forEach((e) => {
          e.$image && (e.state = "destroy"),
            e.Panzoom && e.Panzoom.detachEvents();
        }),
        "closing" === this.fancybox.state &&
          this.canZoom(e.getSlide()) &&
          this.zoomOut();
    }
    onCreateSlide(e, t, i) {
      "ready" === this.fancybox.state && this.setContent(i);
    }
    onRemoveSlide(e, t, i) {
      i.$image &&
        (i.$el.classList.remove(e.option("Image.canZoomInClass")),
        i.$image.remove(),
        (i.$image = null)),
        i.Panzoom && (i.Panzoom.destroy(), (i.Panzoom = null)),
        i.$el && i.$el.dataset && delete i.$el.dataset.imageFit;
    }
    setContent(e) {
      if (e.isDom || e.html || (e.type && "image" !== e.type)) return;
      if (e.$image) return;
      (e.type = "image"), (e.state = "loading");
      const t = document.createElement("div");
      t.style.visibility = "hidden";
      const i = document.createElement("img");
      i.addEventListener("load", (t) => {
        t.stopImmediatePropagation(), this.onImageStatusChange(e);
      }),
        i.addEventListener("error", () => {
          this.onImageStatusChange(e);
        }),
        (i.src = e.src),
        (i.alt = ""),
        (i.draggable = !1),
        i.classList.add("fancybox__image"),
        e.srcset && i.setAttribute("srcset", e.srcset),
        e.sizes && i.setAttribute("sizes", e.sizes),
        (e.$image = i);
      const s = this.fancybox.option("Image.wrap");
      if (s) {
        const n = document.createElement("div");
        n.classList.add("string" == typeof s ? s : "fancybox__image-wrap"),
          n.appendChild(i),
          t.appendChild(n),
          (e.$wrap = n);
      } else t.appendChild(i);
      (e.$el.dataset.imageFit = this.fancybox.option("Image.fit")),
        this.fancybox.setContent(e, t),
        i.complete || i.error
          ? this.onImageStatusChange(e)
          : this.fancybox.showLoading(e);
    }
    onImageStatusChange(e) {
      const t = e.$image;
      t &&
        "loading" === e.state &&
        (t.complete && t.naturalWidth && t.naturalHeight
          ? (this.fancybox.hideLoading(e),
            "contain" === this.fancybox.option("Image.fit") &&
              this.initSlidePanzoom(e),
            e.$el.addEventListener("wheel", (t) => this.onWheel(e, t), {
              passive: !1,
            }),
            e.$content.addEventListener("click", (t) => this.onClick(e, t), {
              passive: !1,
            }),
            this.revealContent(e))
          : this.fancybox.setError(e, "{{IMAGE_ERROR}}"));
    }
    initSlidePanzoom(e) {
      e.Panzoom ||
        ((e.Panzoom = new Ce(
          e.$el,
          pe(!0, this.fancybox.option("Image.Panzoom", {}), {
            viewport: e.$wrap,
            content: e.$image,
            width: e._width,
            height: e._height,
            wrapInner: !1,
            textSelection: !0,
            touch: this.fancybox.option("Image.touch"),
            panOnlyZoomed: !0,
            click: !1,
            wheel: !1,
          })
        )),
        e.Panzoom.on("startAnimation", () => {
          this.fancybox.trigger("Image.startAnimation", e);
        }),
        e.Panzoom.on("endAnimation", () => {
          "zoomIn" === e.state && this.fancybox.done(e),
            this.handleCursor(e),
            this.fancybox.trigger("Image.endAnimation", e);
        }),
        e.Panzoom.on("afterUpdate", () => {
          this.handleCursor(e), this.fancybox.trigger("Image.afterUpdate", e);
        }));
    }
    revealContent(e) {
      null === this.fancybox.Carousel.prevPage &&
      e.index === this.fancybox.options.startIndex &&
      this.canZoom(e)
        ? this.zoomIn()
        : this.fancybox.revealContent(e);
    }
    getZoomInfo(e) {
      const t = e.$thumb.getBoundingClientRect(),
        i = t.width,
        s = t.height,
        n = e.$content.getBoundingClientRect(),
        o = n.width,
        a = n.height,
        r = n.top - t.top,
        l = n.left - t.left;
      let c = this.fancybox.option("Image.zoomOpacity");
      return (
        "auto" === c && (c = Math.abs(i / s - o / a) > 0.1),
        { top: r, left: l, scale: o && i ? i / o : 1, opacity: c }
      );
    }
    canZoom(e) {
      const t = this.fancybox,
        i = t.$container;
      if (window.visualViewport && 1 !== window.visualViewport.scale) return !1;
      if (e.Panzoom && !e.Panzoom.content.width) return !1;
      if (!t.option("Image.zoom") || "contain" !== t.option("Image.fit"))
        return !1;
      const s = e.$thumb;
      if (!s || "loading" === e.state) return !1;
      i.classList.add("fancybox__no-click");
      const n = s.getBoundingClientRect();
      let o;
      if (this.fancybox.option("Image.ignoreCoveredThumbnail")) {
        const e = document.elementFromPoint(n.left + 1, n.top + 1) === s,
          t = document.elementFromPoint(n.right - 1, n.bottom - 1) === s;
        o = e && t;
      } else
        o =
          document.elementFromPoint(
            n.left + 0.5 * n.width,
            n.top + 0.5 * n.height
          ) === s;
      return i.classList.remove("fancybox__no-click"), o;
    }
    zoomIn() {
      const e = this.fancybox,
        t = e.getSlide(),
        i = t.Panzoom,
        { top: s, left: n, scale: o, opacity: a } = this.getZoomInfo(t);
      e.trigger("reveal", t),
        i.panTo({
          x: -1 * n,
          y: -1 * s,
          scale: o,
          friction: 0,
          ignoreBounds: !0,
        }),
        (t.$content.style.visibility = ""),
        (t.state = "zoomIn"),
        !0 === a &&
          i.on("afterTransform", (e) => {
            ("zoomIn" !== t.state && "zoomOut" !== t.state) ||
              (e.$content.style.opacity = Math.min(
                1,
                1 - (1 - e.content.scale) / (1 - o)
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
      const e = this.fancybox,
        t = e.getSlide(),
        i = t.Panzoom;
      if (!i) return;
      (t.state = "zoomOut"),
        (e.state = "customClosing"),
        t.$caption && (t.$caption.style.visibility = "hidden");
      let s = this.fancybox.option("Image.zoomFriction");
      const n = (e) => {
        const { top: n, left: o, scale: a, opacity: r } = this.getZoomInfo(t);
        e || r || (s *= 0.82),
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
          window.removeEventListener("scroll", n), e.destroy();
        }),
        n();
    }
    handleCursor(e) {
      if ("image" !== e.type || !e.$el) return;
      const t = e.Panzoom,
        i = this.fancybox.option("Image.click", !1, e),
        s = this.fancybox.option("Image.touch"),
        n = e.$el.classList,
        o = this.fancybox.option("Image.canZoomInClass"),
        a = this.fancybox.option("Image.canZoomOutClass");
      n.remove(a),
        n.remove(o),
        t && "toggleZoom" === i
          ? t &&
            1 === t.content.scale &&
            t.option("maxScale") - t.content.scale > 0.01
            ? n.add(o)
            : t.content.scale > 1 && !s && n.add(a)
          : "close" === i && n.add(a);
    }
    onWheel(e, t) {
      if (
        "ready" === this.fancybox.state &&
        !1 !== this.fancybox.trigger("Image.wheel", t)
      )
        switch (this.fancybox.option("Image.wheel")) {
          case "zoom":
            "done" === e.state && e.Panzoom && e.Panzoom.zoomWithWheel(t);
            break;
          case "close":
            this.fancybox.close();
            break;
          case "slide":
            this.fancybox[t.deltaY < 0 ? "prev" : "next"]();
        }
    }
    onClick(e, t) {
      if ("ready" !== this.fancybox.state) return;
      const i = e.Panzoom;
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
              t.stopPropagation(), e.Panzoom && e.Panzoom.zoomWithClick(t);
              break;
            case "close":
              this.fancybox.close();
              break;
            case "next":
              t.stopPropagation(), this.fancybox.next();
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
    onPageChange(e, t) {
      const i = e.getSlide();
      t.slides.forEach((e) => {
        e.Panzoom &&
          "done" === e.state &&
          e.index !== i.index &&
          e.Panzoom.panTo({ x: 0, y: 0, scale: 1, friction: 0.8 });
      });
    }
    attach() {
      this.fancybox.on(this.events);
    }
    detach() {
      this.fancybox.off(this.events);
    }
  }
  De.defaults = {
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
  class Fe {
    constructor(e) {
      this.fancybox = e;
      for (const e of ["onChange", "onClosing"]) this[e] = this[e].bind(this);
      (this.events = {
        initCarousel: this.onChange,
        "Carousel.change": this.onChange,
        closing: this.onClosing,
      }),
        (this.hasCreatedHistory = !1),
        (this.origHash = ""),
        (this.timer = null);
    }
    onChange(e) {
      const t = e.Carousel;
      this.timer && clearTimeout(this.timer);
      const i = null === t.prevPage,
        s = e.getSlide(),
        n = new URL(document.URL).hash;
      let o = !1;
      if (s.slug) o = "#" + s.slug;
      else {
        const i = s.$trigger && s.$trigger.dataset,
          n = e.option("slug") || (i && i.fancybox);
        n &&
          n.length &&
          "true" !== n &&
          (o = "#" + n + (t.slides.length > 1 ? "-" + (s.index + 1) : ""));
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
            } catch (e) {}
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
        } catch (e) {}
    }
    attach(e) {
      e.on(this.events);
    }
    detach(e) {
      e.off(this.events);
    }
    static startFromUrl() {
      const e = Fe.Fancybox;
      if (!e || e.getInstance() || !1 === e.defaults.Hash) return;
      const { hash: t, slug: i, index: s } = Fe.getParsedURL();
      if (!i) return;
      let n = document.querySelector(`[data-slug="${t}"]`);
      if (
        (n &&
          n.dispatchEvent(
            new CustomEvent("click", { bubbles: !0, cancelable: !0 })
          ),
        e.getInstance())
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
      const { slug: e, index: t } = Fe.getParsedURL(),
        i = Fe.Fancybox,
        s = i && i.getInstance();
      if (s && s.plugins.Hash) {
        if (e) {
          const i = s.Carousel;
          if (e === s.option("slug")) return i.slideTo(t - 1);
          for (let t of i.slides)
            if (t.slug && t.slug === e) return i.slideTo(t.index);
          const n = s.getSlide(),
            o = n.$trigger && n.$trigger.dataset;
          if (o && o.fancybox === e) return i.slideTo(t - 1);
        }
        (s.plugins.Hash.hasSilentClose = !0), s.close();
      }
      Fe.startFromUrl();
    }
    static create(e) {
      function t() {
        window.addEventListener("hashchange", Fe.onHashChange, !1),
          Fe.startFromUrl();
      }
      (Fe.Fancybox = e),
        ke &&
          window.requestAnimationFrame(() => {
            /complete|interactive|loaded/.test(document.readyState)
              ? t()
              : document.addEventListener("DOMContentLoaded", t);
          });
    }
    static destroy() {
      window.removeEventListener("hashchange", Fe.onHashChange, !1);
    }
    static getParsedURL() {
      const e = window.location.hash.substr(1),
        t = e.split("-"),
        i =
          (t.length > 1 &&
            /^\+?\d+$/.test(t[t.length - 1]) &&
            parseInt(t.pop(-1), 10)) ||
          null;
      return { hash: e, slug: t.join("-"), index: i };
    }
  }
  const Be = {
    pageXOffset: 0,
    pageYOffset: 0,
    element: () =>
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement,
    activate(e) {
      (Be.pageXOffset = window.pageXOffset),
        (Be.pageYOffset = window.pageYOffset),
        e.requestFullscreen
          ? e.requestFullscreen()
          : e.mozRequestFullScreen
          ? e.mozRequestFullScreen()
          : e.webkitRequestFullscreen
          ? e.webkitRequestFullscreen()
          : e.msRequestFullscreen && e.msRequestFullscreen();
    },
    deactivate() {
      document.exitFullscreen
        ? document.exitFullscreen()
        : document.mozCancelFullScreen
        ? document.mozCancelFullScreen()
        : document.webkitExitFullscreen && document.webkitExitFullscreen();
    },
  };
  class Re {
    constructor(e) {
      (this.fancybox = e),
        (this.active = !1),
        (this.handleVisibilityChange = this.handleVisibilityChange.bind(this));
    }
    isActive() {
      return this.active;
    }
    setTimer() {
      if (!this.active || this.timer) return;
      const e = this.fancybox.option("slideshow.delay", 3e3);
      this.timer = setTimeout(() => {
        (this.timer = null),
          this.fancybox.option("infinite") ||
          this.fancybox.getSlide().index !==
            this.fancybox.Carousel.slides.length - 1
            ? this.fancybox.next()
            : this.fancybox.jumpTo(0, { friction: 0 });
      }, e);
      let t = this.$progress;
      t ||
        ((t = document.createElement("div")),
        t.classList.add("fancybox__progress"),
        this.fancybox.$carousel.parentNode.insertBefore(
          t,
          this.fancybox.$carousel
        ),
        (this.$progress = t),
        t.offsetHeight),
        (t.style.transitionDuration = `${e}ms`),
        (t.style.transform = "scaleX(1)");
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
  const He = {
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
        click: function (e) {
          e.preventDefault(),
            Be.element()
              ? Be.deactivate()
              : Be.activate(this.fancybox.$container);
        },
      },
      slideshow: {
        type: "button",
        class: "fancybox__button--slideshow",
        label: "TOGGLE_SLIDESHOW",
        html: '<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',
        click: function (e) {
          e.preventDefault(), this.Slideshow.toggle();
        },
      },
      zoom: {
        type: "button",
        class: "fancybox__button--zoom",
        label: "TOGGLE_ZOOM",
        html: '<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',
        click: function (e) {
          e.preventDefault();
          const t = this.fancybox.getSlide().Panzoom;
          t && t.toggleZoom();
        },
      },
      download: {
        type: "link",
        label: "DOWNLOAD",
        class: "fancybox__button--download",
        html: '<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',
        click: function (e) {
          e.stopPropagation();
        },
      },
      thumbs: {
        type: "button",
        label: "TOGGLE_THUMBS",
        class: "fancybox__button--thumbs",
        html: '<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',
        click: function (e) {
          e.stopPropagation();
          const t = this.fancybox.plugins.Thumbs;
          t && t.toggle();
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
  class We {
    constructor(e) {
      (this.fancybox = e), (this.$container = null), (this.state = "init");
      for (const e of [
        "onInit",
        "onPrepare",
        "onDone",
        "onKeydown",
        "onClosing",
        "onChange",
        "onSettle",
        "onRefresh",
      ])
        this[e] = this[e].bind(this);
      this.events = {
        init: this.onInit,
        prepare: this.onPrepare,
        done: this.onDone,
        keydown: this.onKeydown,
        closing: this.onClosing,
        "Carousel.change": this.onChange,
        "Carousel.settle": this.onSettle,
        "Carousel.Panzoom.touchStart": () => this.onRefresh(),
        "Image.startAnimation": (e, t) => this.onRefresh(t),
        "Image.afterUpdate": (e, t) => this.onRefresh(t),
      };
    }
    onInit() {
      if (this.fancybox.option("Toolbar.autoEnable")) {
        let e = !1;
        for (const t of this.fancybox.items)
          if ("image" === t.type) {
            e = !0;
            break;
          }
        if (!e) return void (this.state = "disabled");
      }
      for (const e of this.fancybox.option("Toolbar.display"))
        if ("close" === (he(e) ? e.id : e)) {
          this.fancybox.options.closeButton = !1;
          break;
        }
    }
    onPrepare() {
      const e = this.fancybox;
      if (
        "init" === this.state &&
        (this.build(),
        this.update(),
        (this.Slideshow = new Re(e)),
        !e.Carousel.prevPage &&
          (e.option("slideshow.autoStart") && this.Slideshow.activate(),
          e.option("fullscreen.autoStart") && !Be.element()))
      )
        try {
          Be.activate(e.$container);
        } catch (e) {}
    }
    onFsChange() {
      window.scrollTo(Be.pageXOffset, Be.pageYOffset);
    }
    onSettle() {
      const e = this.fancybox,
        t = this.Slideshow;
      t &&
        t.isActive() &&
        (e.getSlide().index !== e.Carousel.slides.length - 1 ||
        e.option("infinite")
          ? "done" === e.getSlide().state && t.setTimer()
          : t.deactivate());
    }
    onChange() {
      this.update(),
        this.Slideshow &&
          this.Slideshow.isActive() &&
          this.Slideshow.clearTimer();
    }
    onDone(e, t) {
      const i = this.Slideshow;
      t.index === e.getSlide().index &&
        (this.update(),
        i &&
          i.isActive() &&
          (e.option("infinite") || t.index !== e.Carousel.slides.length - 1
            ? i.setTimer()
            : i.deactivate()));
    }
    onRefresh(e) {
      (e && e.index !== this.fancybox.getSlide().index) ||
        (this.update(),
        !this.Slideshow ||
          !this.Slideshow.isActive() ||
          (e && "done" !== e.state) ||
          this.Slideshow.deactivate());
    }
    onKeydown(e, t, i) {
      " " === t &&
        this.Slideshow &&
        (this.Slideshow.toggle(), i.preventDefault());
    }
    onClosing() {
      this.Slideshow && this.Slideshow.deactivate(),
        document.removeEventListener("fullscreenchange", this.onFsChange);
    }
    createElement(e) {
      let t;
      "div" === e.type
        ? (t = document.createElement("div"))
        : ((t = document.createElement("link" === e.type ? "a" : "button")),
          t.classList.add("carousel__button")),
        (t.innerHTML = e.html),
        t.setAttribute("tabindex", e.tabindex || 0),
        e.class && t.classList.add(...e.class.split(" "));
      for (const i in e.attr) t.setAttribute(i, e.attr[i]);
      e.label &&
        t.setAttribute("title", this.fancybox.localize(`{{${e.label}}}`)),
        e.click && t.addEventListener("click", e.click.bind(this)),
        "prev" === e.id && t.setAttribute("data-fancybox-prev", ""),
        "next" === e.id && t.setAttribute("data-fancybox-next", "");
      const i = t.querySelector("svg");
      return (
        i &&
          (i.setAttribute("role", "img"),
          i.setAttribute("tabindex", "-1"),
          i.setAttribute("xmlns", "http://www.w3.org/2000/svg")),
        t
      );
    }
    build() {
      this.cleanup();
      const e = this.fancybox.option("Toolbar.items"),
        t = [
          { position: "left", items: [] },
          { position: "center", items: [] },
          { position: "right", items: [] },
        ],
        i = this.fancybox.plugins.Thumbs;
      for (const s of this.fancybox.option("Toolbar.display")) {
        let n, o;
        if (
          (he(s) ? ((n = s.id), (o = pe({}, e[n], s))) : ((n = s), (o = e[n])),
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
          r = t.find((e) => e.position === a);
        r && r.items.push(o);
      }
      const s = document.createElement("div");
      s.classList.add("fancybox__toolbar");
      for (const e of t)
        if (e.items.length) {
          const t = document.createElement("div");
          t.classList.add("fancybox__toolbar__items"),
            t.classList.add(`fancybox__toolbar__items--${e.position}`);
          for (const i of e.items) t.appendChild(this.createElement(i));
          s.appendChild(t);
        }
      this.fancybox.$carousel.parentNode.insertBefore(
        s,
        this.fancybox.$carousel
      ),
        (this.$container = s);
    }
    update() {
      const e = this.fancybox.getSlide(),
        t = e.index,
        i = this.fancybox.items.length,
        s = e.downloadSrc || ("image" !== e.type || e.error ? null : e.src);
      for (const e of this.fancybox.$container.querySelectorAll(
        "a.fancybox__button--download"
      ))
        s
          ? (e.removeAttribute("disabled"),
            e.removeAttribute("tabindex"),
            e.setAttribute("href", s),
            e.setAttribute("download", s),
            e.setAttribute("target", "_blank"))
          : (e.setAttribute("disabled", ""),
            e.setAttribute("tabindex", -1),
            e.removeAttribute("href"),
            e.removeAttribute("download"));
      const n = e.Panzoom,
        o = n && n.option("maxScale") > n.option("baseScale");
      for (const e of this.fancybox.$container.querySelectorAll(
        ".fancybox__button--zoom"
      ))
        o ? e.removeAttribute("disabled") : e.setAttribute("disabled", "");
      for (const t of this.fancybox.$container.querySelectorAll(
        "[data-fancybox-index]"
      ))
        t.innerHTML = e.index + 1;
      for (const e of this.fancybox.$container.querySelectorAll(
        "[data-fancybox-count]"
      ))
        e.innerHTML = i;
      if (!this.fancybox.option("infinite")) {
        for (const e of this.fancybox.$container.querySelectorAll(
          "[data-fancybox-prev]"
        ))
          0 === t
            ? e.setAttribute("disabled", "")
            : e.removeAttribute("disabled");
        for (const e of this.fancybox.$container.querySelectorAll(
          "[data-fancybox-next]"
        ))
          t === i - 1
            ? e.setAttribute("disabled", "")
            : e.removeAttribute("disabled");
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
  We.defaults = He;
  const Ge = {
      ScrollLock: class {
        constructor(e) {
          (this.fancybox = e),
            (this.viewport = null),
            (this.pendingUpdate = null);
          for (const e of [
            "onReady",
            "onResize",
            "onTouchstart",
            "onTouchmove",
          ])
            this[e] = this[e].bind(this);
        }
        onReady() {
          const e = window.visualViewport;
          e &&
            ((this.viewport = e),
            (this.startY = 0),
            e.addEventListener("resize", this.onResize),
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
          const e = this.fancybox,
            t = this.viewport,
            i = t.scale || 1,
            s = e.$container;
          if (!s) return;
          let n = "",
            o = "",
            a = "";
          i - 1 > 0.1 &&
            ((n = t.width * i + "px"),
            (o = t.height * i + "px"),
            (a = `translate3d(${t.offsetLeft}px, ${t.offsetTop}px, 0) scale(${
              1 / i
            })`)),
            (s.style.width = n),
            (s.style.height = o),
            (s.style.transform = a);
        }
        onTouchstart(e) {
          this.startY = e.touches ? e.touches[0].screenY : e.screenY;
        }
        onTouchmove(e) {
          const t = this.startY,
            i = window.innerWidth / window.document.documentElement.clientWidth;
          if (!e.cancelable) return;
          if (e.touches.length > 1 || 1 !== i) return;
          const s = fe(e.composedPath()[0]);
          if (!s) return void e.preventDefault();
          const n = window.getComputedStyle(s),
            o = parseInt(n.getPropertyValue("height"), 10),
            a = e.touches ? e.touches[0].screenY : e.screenY,
            r = t <= a && 0 === s.scrollTop,
            l = t >= a && s.scrollHeight - s.scrollTop === o;
          (r || l) && e.preventDefault();
        }
        onWheel(e) {
          fe(e.composedPath()[0]) || e.preventDefault();
        }
        cleanup() {
          this.pendingUpdate &&
            (cancelAnimationFrame(this.pendingUpdate),
            (this.pendingUpdate = null));
          const e = this.viewport;
          e &&
            (e.removeEventListener("resize", this.onResize),
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
      Thumbs: Oe,
      Html: Ne,
      Toolbar: We,
      Image: De,
      Hash: Fe,
    },
    qe = {
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
    je = new Map();
  let Ve = 0;
  class Xe extends xe {
    constructor(e, t = {}) {
      (e = e.map(
        (e) => (
          e.width && (e._width = e.width), e.height && (e._height = e.height), e
        )
      )),
        super(pe(!0, {}, qe, t)),
        this.bindHandlers(),
        (this.state = "init"),
        this.setItems(e),
        this.attachPlugins(Xe.Plugins),
        this.trigger("init"),
        !0 === this.option("hideScrollbar") && this.hideScrollbar(),
        this.initLayout(),
        this.initCarousel(),
        this.attachEvents(),
        je.set(this.id, this),
        this.trigger("prepare"),
        (this.state = "ready"),
        this.trigger("ready"),
        this.$container.setAttribute("aria-hidden", "false"),
        this.option("trapFocus") && this.focus();
    }
    option(e, ...t) {
      const i = this.getSlide();
      let s = i ? i[e] : void 0;
      return void 0 !== s
        ? ("function" == typeof s && (s = s.call(this, this, ...t)), s)
        : super.option(e, ...t);
    }
    bindHandlers() {
      for (const e of [
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
        this[e] = this[e].bind(this);
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
      let e = this.option("template.main");
      e &&
        (this.$root.insertAdjacentHTML("beforeend", this.localize(e)),
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
        }).forEach((e) => this.$container.setAttribute(...e)),
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
          ((this.id = this.options.id || ++Ve),
          this.$container.setAttribute("id", "fancybox-" + this.id));
      const t = this.option("mainClass");
      return (
        t && this.$container.classList.add(...t.split(" ")),
        document.documentElement.classList.add("with-fancybox"),
        this.trigger("initLayout"),
        this
      );
    }
    setItems(e) {
      const t = [];
      for (const i of e) {
        const e = i.$trigger;
        if (e) {
          const t = e.dataset || {};
          (i.src = t.src || e.getAttribute("href") || i.src),
            (i.type = t.type || i.type),
            !i.src &&
              e instanceof HTMLImageElement &&
              (i.src = e.currentSrc || i.$trigger.src);
        }
        let s = i.$thumb;
        if (!s) {
          let e = i.$trigger && i.$trigger.origTarget;
          e &&
            (s =
              e instanceof HTMLImageElement
                ? e
                : e.querySelector("img:not([aria-hidden])")),
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
          t.push(i);
      }
      this.items = t;
    }
    initCarousel() {
      return (
        (this.Carousel = new Le(
          this.$carousel,
          pe(
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
                    let e = "x";
                    return this.option("dragToClose") && (e += "y"), e;
                  }
                },
              },
              on: {
                "*": (e, ...t) => this.trigger(`Carousel.${e}`, ...t),
                init: (e) => (this.Carousel = e),
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
    onCreateSlide(e, t) {
      let i = t.caption || "";
      if (
        ("function" == typeof this.options.caption &&
          (i = this.options.caption.call(this, this, this.Carousel, t)),
        "string" == typeof i && i.length)
      ) {
        const e = document.createElement("div"),
          s = `fancybox__caption_${this.id}_${t.index}`;
        (e.className = "fancybox__caption"),
          (e.innerHTML = i),
          e.setAttribute("id", s),
          (t.$caption = t.$el.appendChild(e)),
          t.$el.classList.add("has-caption"),
          t.$el.setAttribute("aria-labelledby", s);
      }
    }
    onSettle() {
      this.option("autoFocus") && this.focus();
    }
    onFocus(e) {
      this.focus(e);
    }
    onClick(e) {
      if (e.defaultPrevented) return;
      let t = e.composedPath()[0];
      if (t.matches("[data-fancybox-close]"))
        return e.preventDefault(), void Xe.close(!1, e);
      if (t.matches("[data-fancybox-next]"))
        return e.preventDefault(), void Xe.next();
      if (t.matches("[data-fancybox-prev]"))
        return e.preventDefault(), void Xe.prev();
      if (
        !(t.matches(Ae) || document.activeElement.blur(),
        t.closest(".fancybox__content") ||
          getSelection().toString().length ||
          !1 === this.trigger("click", e))
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
      const e = this.getSlide().Panzoom;
      return !e || 1 === e.content.scale;
    }
    onTouchEnd(e) {
      const t = e.dragOffset.y;
      Math.abs(t) >= 150 || (Math.abs(t) >= 35 && e.dragOffset.time < 350)
        ? (this.option("hideClass") &&
            (this.getSlide().hideClass =
              "fancybox-throwOut" + (e.content.y < 0 ? "Up" : "Down")),
          this.close())
        : "y" === e.lockAxis && e.panTo({ y: 0 });
    }
    onTransform(e) {
      if (this.$backdrop) {
        const t = Math.abs(e.content.y),
          i =
            t < 1
              ? ""
              : Math.max(
                  0.33,
                  Math.min(1, 1 - (t / e.content.fitHeight) * 1.5)
                );
        this.$container.style.setProperty("--fancybox-ts", i ? "0s" : ""),
          this.$container.style.setProperty("--fancybox-opacity", i);
      }
    }
    onMousedown() {
      "ready" === this.state && document.body.classList.add("is-using-mouse");
    }
    onKeydown(e) {
      if (Xe.getInstance().id !== this.id) return;
      document.body.classList.remove("is-using-mouse");
      const t = e.key,
        i = this.option("keyboard");
      if (!i || e.ctrlKey || e.altKey || e.shiftKey) return;
      const s = e.composedPath()[0],
        n = document.activeElement && document.activeElement.classList,
        o = n && n.contains("carousel__button");
      if (
        "Escape" !== t &&
        !o &&
        (e.target.isContentEditable ||
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
      if (!1 === this.trigger("keydown", t, e)) return;
      const a = i[t];
      "function" == typeof this[a] && this[a]();
    }
    getSlide() {
      const e = this.Carousel;
      if (!e) return null;
      const t = null === e.page ? e.option("initialPage") : e.page,
        i = e.pages || [];
      return i.length && i[t] ? i[t].slides[0] : null;
    }
    focus(e) {
      if (Xe.ignoreFocusChange) return;
      if (
        ["init", "closing", "customClosing", "destroy"].indexOf(this.state) > -1
      )
        return;
      const t = this.$container,
        i = this.getSlide(),
        s = "done" === i.state ? i.$el : null;
      if (s && s.contains(document.activeElement)) return;
      e && e.preventDefault(), (Xe.ignoreFocusChange = !0);
      const n = Array.from(t.querySelectorAll(Ae));
      let o,
        a = [];
      for (let e of n) {
        const t = e.offsetParent,
          i = s && s.contains(e),
          n = !this.Carousel.$viewport.contains(e);
        t && (i || n)
          ? (a.push(e),
            void 0 !== e.dataset.origTabindex &&
              ((e.tabIndex = e.dataset.origTabindex),
              e.removeAttribute("data-orig-tabindex")),
            (e.hasAttribute("autoFocus") ||
              (!o && i && !e.classList.contains("carousel__button"))) &&
              (o = e))
          : ((e.dataset.origTabindex =
              void 0 === e.dataset.origTabindex
                ? e.getAttribute("tabindex")
                : e.dataset.origTabindex),
            (e.tabIndex = -1));
      }
      e
        ? a.indexOf(e.target) > -1
          ? (this.lastFocus = e.target)
          : this.lastFocus === t
          ? _e(a[a.length - 1])
          : _e(t)
        : this.option("autoFocus") && o
        ? _e(o)
        : a.indexOf(document.activeElement) < 0 && _e(t),
        (this.lastFocus = document.activeElement),
        (Xe.ignoreFocusChange = !1);
    }
    hideScrollbar() {
      if (!ke) return;
      const e =
          window.innerWidth -
          document.documentElement.getBoundingClientRect().width,
        t = "fancybox-style-noscroll";
      let i = document.getElementById(t);
      i ||
        (e > 0 &&
          ((i = document.createElement("style")),
          (i.id = t),
          (i.type = "text/css"),
          (i.innerHTML = `.compensate-for-scrollbar {padding-right: ${e}px;}`),
          document.getElementsByTagName("head")[0].appendChild(i),
          document.body.classList.add("compensate-for-scrollbar")));
    }
    revealScrollbar() {
      document.body.classList.remove("compensate-for-scrollbar");
      const e = document.getElementById("fancybox-style-noscroll");
      e && e.remove();
    }
    clearContent(e) {
      this.Carousel.trigger("removeSlide", e),
        e.$content && (e.$content.remove(), (e.$content = null)),
        e.$closeButton && (e.$closeButton.remove(), (e.$closeButton = null)),
        e._className && e.$el.classList.remove(e._className);
    }
    setContent(e, t, i = {}) {
      let s;
      const n = e.$el;
      if (t instanceof HTMLElement)
        ["img", "iframe", "video", "audio"].indexOf(t.nodeName.toLowerCase()) >
        -1
          ? ((s = document.createElement("div")), s.appendChild(t))
          : (s = t);
      else {
        const e = document.createRange().createContextualFragment(t);
        (s = document.createElement("div")), s.appendChild(e);
      }
      if (
        (e.filter && !e.error && (s = s.querySelector(e.filter)),
        s instanceof Element)
      )
        return (
          (e._className = `has-${i.suffix || e.type || "unknown"}`),
          n.classList.add(e._className),
          s.classList.add("fancybox__content"),
          ("none" !== s.style.display &&
            "none" !== getComputedStyle(s).getPropertyValue("display")) ||
            (s.style.display =
              e.display || this.option("defaultDisplay") || "flex"),
          e.id && s.setAttribute("id", e.id),
          (e.$content = s),
          n.prepend(s),
          this.manageCloseButton(e),
          "loading" !== e.state && this.revealContent(e),
          s
        );
      this.setError(e, "{{ELEMENT_NOT_FOUND}}");
    }
    manageCloseButton(e) {
      const t =
        void 0 === e.closeButton ? this.option("closeButton") : e.closeButton;
      if (!t || ("top" === t && this.$closeButton)) return;
      const i = document.createElement("button");
      i.classList.add("carousel__button", "is-close"),
        i.setAttribute("title", this.options.l10n.CLOSE),
        (i.innerHTML = this.option("template.closeButton")),
        i.addEventListener("click", (e) => this.close(e)),
        "inside" === t
          ? (e.$closeButton && e.$closeButton.remove(),
            (e.$closeButton = e.$content.appendChild(i)))
          : (this.$closeButton = this.$container.insertBefore(
              i,
              this.$container.firstChild
            ));
    }
    revealContent(e) {
      this.trigger("reveal", e), (e.$content.style.visibility = "");
      let t = !1;
      e.error ||
        "loading" === e.state ||
        null !== this.Carousel.prevPage ||
        e.index !== this.options.startIndex ||
        (t = void 0 === e.showClass ? this.option("showClass") : e.showClass),
        t
          ? ((e.state = "animating"),
            this.animateCSS(e.$content, t, () => {
              this.done(e);
            }))
          : this.done(e);
    }
    animateCSS(e, t, i) {
      if (
        (e &&
          e.dispatchEvent(
            new CustomEvent("animationend", { bubbles: !0, cancelable: !0 })
          ),
        !e || !t)
      )
        return void ("function" == typeof i && i());
      const s = function (n) {
        n.currentTarget === this &&
          (e.removeEventListener("animationend", s),
          i && i(),
          e.classList.remove(t));
      };
      e.addEventListener("animationend", s), e.classList.add(t);
    }
    done(e) {
      (e.state = "done"), this.trigger("done", e);
      const t = this.getSlide();
      t && e.index === t.index && this.option("autoFocus") && this.focus();
    }
    setError(e, t) {
      (e.error = t), this.hideLoading(e), this.clearContent(e);
      const i = document.createElement("div");
      i.classList.add("fancybox-error"),
        (i.innerHTML = this.localize(t || "<p>{{ERROR}}</p>")),
        this.setContent(e, i, { suffix: "error" });
    }
    showLoading(e) {
      (e.state = "loading"), e.$el.classList.add("is-loading");
      let t = e.$el.querySelector(".fancybox__spinner");
      t ||
        ((t = document.createElement("div")),
        t.classList.add("fancybox__spinner"),
        (t.innerHTML = this.option("template.spinner")),
        t.addEventListener("click", () => {
          this.Carousel.Panzoom.velocity || this.close();
        }),
        e.$el.prepend(t));
    }
    hideLoading(e) {
      const t = e.$el && e.$el.querySelector(".fancybox__spinner");
      t && (t.remove(), e.$el.classList.remove("is-loading")),
        "loading" === e.state && (this.trigger("load", e), (e.state = "ready"));
    }
    next() {
      const e = this.Carousel;
      e && e.pages.length > 1 && e.slideNext();
    }
    prev() {
      const e = this.Carousel;
      e && e.pages.length > 1 && e.slidePrev();
    }
    jumpTo(...e) {
      this.Carousel && this.Carousel.slideTo(...e);
    }
    close(e) {
      if (
        (e && e.preventDefault(),
        ["closing", "customClosing", "destroy"].includes(this.state))
      )
        return;
      if (!1 === this.trigger("shouldClose", e)) return;
      if (
        ((this.state = "closing"),
        this.Carousel.Panzoom.destroy(),
        this.detachEvents(),
        this.trigger("closing", e),
        "destroy" === this.state)
      )
        return;
      this.$container.setAttribute("aria-hidden", "true"),
        this.$container.classList.add("is-closing");
      const t = this.getSlide();
      if (
        (this.Carousel.slides.forEach((e) => {
          e.$content &&
            e.index !== t.index &&
            this.Carousel.trigger("removeSlide", e);
        }),
        "closing" === this.state)
      ) {
        const e =
          void 0 === t.hideClass ? this.option("hideClass") : t.hideClass;
        this.animateCSS(
          t.$content,
          e,
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
      const e = this.option("placeFocusBack") ? this.getSlide().$trigger : null;
      this.Carousel.destroy(),
        this.detachPlugins(),
        (this.Carousel = null),
        (this.options = {}),
        (this.events = {}),
        this.$container.remove(),
        (this.$container = this.$backdrop = this.$carousel = null),
        e && _e(e),
        je.delete(this.id);
      const t = Xe.getInstance();
      t
        ? t.focus()
        : (document.documentElement.classList.remove("with-fancybox"),
          document.body.classList.remove("is-using-mouse"),
          this.revealScrollbar());
    }
    static show(e, t = {}) {
      return new Xe(e, t);
    }
    static fromEvent(e, t = {}) {
      if (e.defaultPrevented) return;
      if (e.button && 0 !== e.button) return;
      if (e.ctrlKey || e.metaKey || e.shiftKey) return;
      const i = e.composedPath()[0];
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
        const e = document.querySelectorAll(`[data-fancybox="${s}"]`),
          t = parseInt(a.dataset.fancyboxIndex, 10) || 0;
        a = e.length ? e[t] : a;
      }
      a || (a = i),
        Array.from(Xe.openers.keys())
          .reverse()
          .some((t) => {
            o = a;
            let i = !1;
            try {
              o instanceof Element &&
                ("string" == typeof t || t instanceof String) &&
                (i = o.matches(t) || (o = o.closest(t)));
            } catch (e) {}
            return !!i && (e.preventDefault(), (n = t), !0);
          });
      let r = !1;
      if (n) {
        (t.event = e),
          (t.target = o),
          (o.origTarget = i),
          (r = Xe.fromOpener(n, t));
        const s = Xe.getInstance();
        s &&
          "ready" === s.state &&
          e.detail &&
          document.body.classList.add("is-using-mouse");
      }
      return r;
    }
    static fromOpener(e, t = {}) {
      let i = [],
        s = t.startIndex || 0,
        n = t.target || null;
      const o =
          void 0 !== (t = pe({}, t, Xe.openers.get(e))).groupAll && t.groupAll,
        a = void 0 === t.groupAttr ? "data-fancybox" : t.groupAttr,
        r = a && n ? n.getAttribute(`${a}`) : "";
      if (!n || r || o) {
        const s = t.root || (n ? n.getRootNode() : document.body);
        i = [].slice.call(s.querySelectorAll(e));
      }
      if (
        (n &&
          !o &&
          (i = r ? i.filter((e) => e.getAttribute(`${a}`) === r) : [n]),
        !i.length)
      )
        return !1;
      const l = Xe.getInstance();
      return (
        !(l && i.indexOf(l.options.$trigger) > -1) &&
        ((s = n ? i.indexOf(n) : s),
        (i = i.map(function (e) {
          const t = ["false", "0", "no", "null", "undefined"],
            i = ["true", "1", "yes"],
            s = Object.assign({}, e.dataset),
            n = {};
          for (let [e, o] of Object.entries(s))
            if ("fancybox" !== e)
              if ("width" === e || "height" === e) n[`_${e}`] = o;
              else if ("string" == typeof o || o instanceof String)
                if (t.indexOf(o) > -1) n[e] = !1;
                else if (i.indexOf(n[e]) > -1) n[e] = !0;
                else
                  try {
                    n[e] = JSON.parse(o);
                  } catch (t) {
                    n[e] = o;
                  }
              else n[e] = o;
          return e instanceof Element && (n.$trigger = e), n;
        })),
        new Xe(i, pe({}, t, { startIndex: s, $trigger: n })))
      );
    }
    static bind(e, t = {}) {
      function i() {
        document.body.addEventListener("click", Xe.fromEvent, !1);
      }
      ke &&
        (Xe.openers.size ||
          (/complete|interactive|loaded/.test(document.readyState)
            ? i()
            : document.addEventListener("DOMContentLoaded", i)),
        Xe.openers.set(e, t));
    }
    static unbind(e) {
      Xe.openers.delete(e), Xe.openers.size || Xe.destroy();
    }
    static destroy() {
      let e;
      for (; (e = Xe.getInstance()); ) e.destroy();
      (Xe.openers = new Map()),
        document.body.removeEventListener("click", Xe.fromEvent, !1);
    }
    static getInstance(e) {
      return e
        ? je.get(e)
        : Array.from(je.values())
            .reverse()
            .find(
              (e) =>
                !["closing", "customClosing", "destroy"].includes(e.state) && e
            ) || null;
    }
    static close(e = !0, t) {
      if (e) for (const e of je.values()) e.close(t);
      else {
        const e = Xe.getInstance();
        e && e.close(t);
      }
    }
    static next() {
      const e = Xe.getInstance();
      e && e.next();
    }
    static prev() {
      const e = Xe.getInstance();
      e && e.prev();
    }
  }
  (Xe.version = "4.0.27"),
    (Xe.defaults = qe),
    (Xe.openers = new Map()),
    (Xe.Plugins = Ge),
    Xe.bind("[data-fancybox]");
  for (const [e, t] of Object.entries(Xe.Plugins || {}))
    "function" == typeof t.create && t.create(Xe);
  (window.onload = function () {
    document.querySelectorAll(".aside__item a").forEach((e) => {
      e.href === document.URL && e.classList.add("_active");
    }),
      document.body.classList.add("loaded_hiding"),
      window.setTimeout(function () {
        document.body.classList.add("loaded"),
          document.body.classList.remove("loaded_hiding");
      }, 1100);
  }),
    (window.FLS = !1),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      let e = document.querySelector(".icon-menu");
      e &&
        e.addEventListener("click", function (e) {
          i &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? s(e) : n(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })(),
    (function () {
      const i = document.querySelectorAll("[data-spollers]");
      if (i.length > 0) {
        const s = Array.from(i).filter(function (e, t, i) {
          return !e.dataset.spollers.split(",")[0];
        });
        s.length && a(s);
        let n = o(i, "spollers");
        function a(e, t = !1) {
          e.forEach((e) => {
            (e = t ? e.item : e),
              t.matches || !t
                ? (e.classList.add("_spoller-init"),
                  r(e),
                  e.addEventListener("click", l))
                : (e.classList.remove("_spoller-init"),
                  r(e, !1),
                  e.removeEventListener("click", l));
          });
        }
        function r(e, t = !0) {
          const i = e.querySelectorAll("[data-spoller]");
          i.length > 0 &&
            i.forEach((e) => {
              t
                ? (e.removeAttribute("tabindex"),
                  e.classList.contains("_spoller-active") ||
                    (e.nextElementSibling.hidden = !0))
                : (e.setAttribute("tabindex", "-1"),
                  (e.nextElementSibling.hidden = !1));
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
                i.hidden ? t(i, s) : e(i, s);
              })(n.nextElementSibling, 500)),
              i.preventDefault();
          }
        }
        function c(t) {
          const i = t.querySelector("[data-spoller]._spoller-active");
          i &&
            (i.classList.remove("_spoller-active"),
            e(i.nextElementSibling, 500));
        }
        n &&
          n.length &&
          n.forEach((e) => {
            e.matchMedia.addEventListener("change", function () {
              a(e.itemsArray, e.matchMedia);
            }),
              a(e.itemsArray, e.matchMedia);
          });
      }
    })();
})();
