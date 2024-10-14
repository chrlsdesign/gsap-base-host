/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (e) {
  "use strict";
  function _inheritsLoose(t, e) {
    (t.prototype = Object.create(e.prototype)),
      ((t.prototype.constructor = t).__proto__ = e);
  }
  function _assertThisInitialized(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function r(t) {
    return "string" == typeof t;
  }
  function s(t) {
    return "function" == typeof t;
  }
  function t(t) {
    return "number" == typeof t;
  }
  function u(t) {
    return void 0 === t;
  }
  function v(t) {
    return "object" == typeof t;
  }
  function w(t) {
    return !1 !== t;
  }
  function x() {
    return "undefined" != typeof window;
  }
  function y(t) {
    return s(t) || r(t);
  }
  function P(t) {
    return (i = yt(t, ot)) && ze;
  }
  function Q(t, e) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      e,
      "Missing plugin? gsap.registerPlugin()"
    );
  }
  function R(t, e) {
    return !e && console.warn(t);
  }
  function S(t, e) {
    return (t && (ot[t] = e) && i && (i[t] = e)) || ot;
  }
  function T() {
    return 0;
  }
  function ea(t) {
    var e,
      r,
      i = t[0];
    if ((v(i) || s(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
      for (r = gt.length; r-- && !gt[r].targetTest(i); );
      e = gt[r];
    }
    for (r = t.length; r--; )
      (t[r] && (t[r]._gsap || (t[r]._gsap = new Vt(t[r], e)))) ||
        t.splice(r, 1);
    return t;
  }
  function fa(t) {
    return t._gsap || ea(Mt(t))[0]._gsap;
  }
  function ga(t, e, r) {
    return (r = t[e]) && s(r)
      ? t[e]()
      : (u(r) && t.getAttribute && t.getAttribute(e)) || r;
  }
  function ha(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }
  function ia(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }
  function ja(t) {
    return Math.round(1e7 * t) / 1e7 || 0;
  }
  function ka(t, e) {
    var r = e.charAt(0),
      i = parseFloat(e.substr(2));
    return (
      (t = parseFloat(t)),
      "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
    );
  }
  function la(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
    return i < r;
  }
  function ma() {
    var t,
      e,
      r = dt.length,
      i = dt.slice(0);
    for (ct = {}, t = dt.length = 0; t < r; t++)
      (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  }
  function na(t, e, r, i) {
    dt.length && !L && ma(),
      t.render(e, r, i || (L && e < 0 && (t._initted || t._startAt))),
      dt.length && !L && ma();
  }
  function oa(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(at).length < 2
      ? e
      : r(t)
      ? t.trim()
      : t;
  }
  function pa(t) {
    return t;
  }
  function qa(t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t;
  }
  function ta(t, e) {
    for (var r in e)
      "__proto__" !== r &&
        "constructor" !== r &&
        "prototype" !== r &&
        (t[r] = v(e[r]) ? ta(t[r] || (t[r] = {}), e[r]) : e[r]);
    return t;
  }
  function ua(t, e) {
    var r,
      i = {};
    for (r in t) r in e || (i[r] = t[r]);
    return i;
  }
  function va(t) {
    var e = t.parent || I,
      r = t.keyframes
        ? (function _setKeyframeDefaults(i) {
            return function (t, e) {
              for (var r in e)
                r in t ||
                  ("duration" === r && i) ||
                  "ease" === r ||
                  (t[r] = e[r]);
            };
          })(Z(t.keyframes))
        : qa;
    if (w(t.inherit))
      for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
    return t;
  }
  function xa(t, e, r, i, n) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var a,
      s = t[i];
    if (n) for (a = e[n]; s && s[n] > a; ) s = s._prev;
    return (
      s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[r]), (t[r] = e)),
      e._next ? (e._next._prev = e) : (t[i] = e),
      (e._prev = s),
      (e.parent = e._dp = t),
      e
    );
  }
  function ya(t, e, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n = e._prev,
      a = e._next;
    n ? (n._next = a) : t[r] === e && (t[r] = a),
      a ? (a._prev = n) : t[i] === e && (t[i] = n),
      (e._next = e._prev = e.parent = null);
  }
  function za(t, e) {
    t.parent &&
      (!e || t.parent.autoRemoveChildren) &&
      t.parent.remove &&
      t.parent.remove(t),
      (t._act = 0);
  }
  function Aa(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
      for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
    return t;
  }
  function Ca(t, e, r, i) {
    return (
      t._startAt &&
      (L
        ? t._startAt.revert(ht)
        : (t.vars.immediateRender && !t.vars.autoRevert) ||
          t._startAt.render(e, !0, i))
    );
  }
  function Ea(t) {
    return t._repeat ? Tt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  }
  function Ga(t, e) {
    return (
      (t - e._start) * e._ts +
      (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  }
  function Ha(t) {
    return (t._end = ja(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || X) || 0)
    ));
  }
  function Ia(t, e) {
    var r = t._dp;
    return (
      r &&
        r.smoothChildTiming &&
        t._ts &&
        ((t._start = ja(
          r._time -
            (0 < t._ts
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
        )),
        Ha(t),
        r._dirty || Aa(r, t)),
      t
    );
  }
  function Ja(t, e) {
    var r;
    if (
      ((e._time ||
        (!e._dur && e._initted) ||
        (e._start < t._time && (e._dur || !e.add))) &&
        ((r = Ga(t.rawTime(), e)),
        (!e._dur || Ot(0, e.totalDuration(), r) - e._tTime > X) &&
          e.render(r, !0)),
      Aa(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (r = t; r._dp; )
          0 <= r.rawTime() && r.totalTime(r._tTime), (r = r._dp);
      t._zTime = -X;
    }
  }
  function Ka(e, r, i, n) {
    return (
      r.parent && za(r),
      (r._start = ja(
        (t(i) ? i : i || e !== I ? xt(e, i, r) : e._time) + r._delay
      )),
      (r._end = ja(
        r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)
      )),
      xa(e, r, "_first", "_last", e._sort ? "_start" : 0),
      bt(r) || (e._recent = r),
      n || Ja(e, r),
      e._ts < 0 && Ia(e, e._tTime),
      e
    );
  }
  function La(t, e) {
    return (
      (ot.ScrollTrigger || Q("scrollTrigger", e)) &&
      ot.ScrollTrigger.create(e, t)
    );
  }
  function Ma(t, e, r, i, n) {
    return (
      Qt(t, e, n),
      t._initted
        ? !r &&
          t._pt &&
          !L &&
          ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
          f !== Rt.frame
          ? (dt.push(t), (t._lazy = [n, i]), 1)
          : void 0
        : 1
    );
  }
  function Ra(t, e, r, i) {
    var n = t._repeat,
      a = ja(e) || 0,
      s = t._tTime / t._tDur;
    return (
      s && !i && (t._time *= a / t._dur),
      (t._dur = a),
      (t._tDur = n ? (n < 0 ? 1e10 : ja(a * (n + 1) + t._rDelay * n)) : a),
      0 < s && !i && Ia(t, (t._tTime = t._tDur * s)),
      t.parent && Ha(t),
      r || Aa(t.parent, t),
      t
    );
  }
  function Sa(t) {
    return t instanceof Xt ? Aa(t) : Ra(t, t._dur);
  }
  function Va(e, r, i) {
    var n,
      a,
      s = t(r[1]),
      o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
      u = r[o];
    if ((s && (u.duration = r[1]), (u.parent = i), e)) {
      for (n = u, a = i; a && !("immediateRender" in n); )
        (n = a.vars.defaults || {}), (a = w(a.vars.inherit) && a.parent);
      (u.immediateRender = w(n.immediateRender)),
        e < 2 ? (u.runBackwards = 1) : (u.startAt = r[o - 1]);
    }
    return new $t(r[0], u, r[1 + o]);
  }
  function Wa(t, e) {
    return t || 0 === t ? e(t) : e;
  }
  function Ya(t, e) {
    return r(t) && (e = st.exec(t)) ? e[1] : "";
  }
  function _a(t, e) {
    return (
      t &&
      v(t) &&
      "length" in t &&
      ((!e && !t.length) || (t.length - 1 in t && v(t[0]))) &&
      !t.nodeType &&
      t !== h
    );
  }
  function cb(r) {
    return (
      (r = Mt(r)[0] || R("Invalid scope") || {}),
      function (t) {
        var e = r.current || r.nativeElement || r;
        return Mt(
          t,
          e.querySelectorAll
            ? e
            : e === r
            ? R("Invalid scope") || a.createElement("div")
            : r
        );
      }
    );
  }
  function db(t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  }
  function eb(t) {
    if (s(t)) return t;
    var p = v(t) ? t : { each: t },
      _ = jt(p.ease),
      m = p.from || 0,
      g = parseFloat(p.base) || 0,
      y = {},
      e = 0 < m && m < 1,
      T = isNaN(m) || e,
      b = p.axis,
      w = m,
      x = m;
    return (
      r(m)
        ? (w = x = { center: 0.5, edges: 0.5, end: 1 }[m] || 0)
        : !e && T && ((w = m[0]), (x = m[1])),
      function (t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d = (r || p).length,
          c = y[d];
        if (!c) {
          if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, U])[1])) {
            for (
              h = -U;
              h < (h = r[f++].getBoundingClientRect().left) && f < d;

            );
            f < d && f--;
          }
          for (
            c = y[d] = [],
              i = T ? Math.min(f, d) * w - 0.5 : m % f,
              n = f === U ? 0 : T ? (d * x) / f - 0.5 : (m / f) | 0,
              l = U,
              u = h = 0;
            u < d;
            u++
          )
            (a = (u % f) - i),
              (s = n - ((u / f) | 0)),
              (c[u] = o = b ? Math.abs("y" === b ? s : a) : K(a * a + s * s)),
              h < o && (h = o),
              o < l && (l = o);
          "random" === m && db(c),
            (c.max = h - l),
            (c.min = l),
            (c.v = d =
              (parseFloat(p.amount) ||
                parseFloat(p.each) *
                  (d < f
                    ? d - 1
                    : b
                    ? "y" === b
                      ? d / f
                      : f
                    : Math.max(f, d / f)) ||
                0) * ("edges" === m ? -1 : 1)),
            (c.b = d < 0 ? g - d : g),
            (c.u = Ya(p.amount || p.each) || 0),
            (_ = _ && d < 0 ? Yt(_) : _);
        }
        return (
          (d = (c[t] - c.min) / c.max || 0),
          ja(c.b + (_ ? _(d) : d) * c.v) + c.u
        );
      }
    );
  }
  function fb(i) {
    var n = Math.pow(10, ((i + "").split(".")[1] || "").length);
    return function (e) {
      var r = ja(Math.round(parseFloat(e) / i) * i * n);
      return (r - (r % 1)) / n + (t(e) ? 0 : Ya(e));
    };
  }
  function gb(h, e) {
    var l,
      f,
      r = Z(h);
    return (
      !r &&
        v(h) &&
        ((l = r = h.radius || U),
        h.values
          ? ((h = Mt(h.values)), (f = !t(h[0])) && (l *= l))
          : (h = fb(h.increment))),
      Wa(
        e,
        r
          ? s(h)
            ? function (t) {
                return (f = h(t)), Math.abs(f - t) <= l ? f : t;
              }
            : function (e) {
                for (
                  var r,
                    i,
                    n = parseFloat(f ? e.x : e),
                    a = parseFloat(f ? e.y : 0),
                    s = U,
                    o = 0,
                    u = h.length;
                  u--;

                )
                  (r = f
                    ? (r = h[u].x - n) * r + (i = h[u].y - a) * i
                    : Math.abs(h[u] - n)) < s && ((s = r), (o = u));
                return (
                  (o = !l || s <= l ? h[o] : e),
                  f || o === e || t(e) ? o : o + Ya(e)
                );
              }
          : fb(h)
      )
    );
  }
  function hb(t, e, r, i) {
    return Wa(Z(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return Z(t)
        ? t[~~(Math.random() * t.length)]
        : (r = r || 1e-5) &&
            (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            Math.floor(
              Math.round((t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r) *
                r *
                i
            ) / i;
    });
  }
  function lb(e, r, t) {
    return Wa(t, function (t) {
      return e[~~r(t)];
    });
  }
  function ob(t) {
    for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a)); )
      (i = t.indexOf(")", e)),
        (n = "[" === t.charAt(e + 7)),
        (r = t.substr(e + 7, i - e - 7).match(n ? at : tt)),
        (s +=
          t.substr(a, e - a) + hb(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)),
        (a = i + 1);
    return s + t.substr(a, t.length - a);
  }
  function rb(t, e, r) {
    var i,
      n,
      a,
      s = t.labels,
      o = U;
    for (i in s)
      (n = s[i] - e) < 0 == !!r &&
        n &&
        o > (n = Math.abs(n)) &&
        ((a = i), (o = n));
    return a;
  }
  function tb(t) {
    return (
      za(t),
      t.scrollTrigger && t.scrollTrigger.kill(!!L),
      t.progress() < 1 && Ct(t, "onInterrupt"),
      t
    );
  }
  function wb(t) {
    if (t)
      if (((t = (!t.name && t.default) || t), x() || t.headless)) {
        var e = t.name,
          r = s(t),
          i =
            e && !r && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          n = {
            init: T,
            render: he,
            add: Wt,
            kill: ce,
            modifier: fe,
            rawVars: 0,
          },
          a = {
            targetTest: 0,
            get: 0,
            getSetter: ne,
            aliases: {},
            register: 0,
          };
        if ((Ft(), t !== i)) {
          if (pt[e]) return;
          qa(i, qa(ua(t, n), a)),
            yt(i.prototype, yt(n, ua(t, a))),
            (pt[(i.prop = e)] = i),
            t.targetTest && (gt.push(i), (ft[e] = 1)),
            (e =
              ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
              "Plugin");
        }
        S(e, i), t.register && t.register(ze, i, _e);
      } else At.push(t);
  }
  function zb(t, e, r) {
    return (
      ((6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1
        ? e + (r - e) * t * 6
        : t < 0.5
        ? r
        : 3 * t < 2
        ? e + (r - e) * (2 / 3 - t) * 6
        : e) *
        St +
        0.5) |
      0
    );
  }
  function Ab(e, r, i) {
    var n,
      a,
      s,
      o,
      u,
      h,
      l,
      f,
      d,
      c,
      p = e ? (t(e) ? [e >> 16, (e >> 8) & St, e & St] : 0) : zt.black;
    if (!p) {
      if (("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), zt[e]))
        p = zt[e];
      else if ("#" === e.charAt(0)) {
        if (
          (e.length < 6 &&
            (e =
              "#" +
              (n = e.charAt(1)) +
              n +
              (a = e.charAt(2)) +
              a +
              (s = e.charAt(3)) +
              s +
              (5 === e.length ? e.charAt(4) + e.charAt(4) : "")),
          9 === e.length)
        )
          return [
            (p = parseInt(e.substr(1, 6), 16)) >> 16,
            (p >> 8) & St,
            p & St,
            parseInt(e.substr(7), 16) / 255,
          ];
        p = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & St, e & St];
      } else if ("hsl" === e.substr(0, 3))
        if (((p = c = e.match(tt)), r)) {
          if (~e.indexOf("="))
            return (p = e.match(et)), i && p.length < 4 && (p[3] = 1), p;
        } else
          (o = (+p[0] % 360) / 360),
            (u = p[1] / 100),
            (n =
              2 * (h = p[2] / 100) -
              (a = h <= 0.5 ? h * (u + 1) : h + u - h * u)),
            3 < p.length && (p[3] *= 1),
            (p[0] = zb(o + 1 / 3, n, a)),
            (p[1] = zb(o, n, a)),
            (p[2] = zb(o - 1 / 3, n, a));
      else p = e.match(tt) || zt.transparent;
      p = p.map(Number);
    }
    return (
      r &&
        !c &&
        ((n = p[0] / St),
        (a = p[1] / St),
        (s = p[2] / St),
        (h = ((l = Math.max(n, a, s)) + (f = Math.min(n, a, s))) / 2),
        l === f
          ? (o = u = 0)
          : ((d = l - f),
            (u = 0.5 < h ? d / (2 - l - f) : d / (l + f)),
            (o =
              l === n
                ? (a - s) / d + (a < s ? 6 : 0)
                : l === a
                ? (s - n) / d + 2
                : (n - a) / d + 4),
            (o *= 60)),
        (p[0] = ~~(o + 0.5)),
        (p[1] = ~~(100 * u + 0.5)),
        (p[2] = ~~(100 * h + 0.5))),
      i && p.length < 4 && (p[3] = 1),
      p
    );
  }
  function Bb(t) {
    var r = [],
      i = [],
      n = -1;
    return (
      t.split(Et).forEach(function (t) {
        var e = t.match(rt) || [];
        r.push.apply(r, e), i.push((n += e.length + 1));
      }),
      (r.c = i),
      r
    );
  }
  function Cb(t, e, r) {
    var i,
      n,
      a,
      s,
      o = "",
      u = (t + o).match(Et),
      h = e ? "hsla(" : "rgba(",
      l = 0;
    if (!u) return t;
    if (
      ((u = u.map(function (t) {
        return (
          (t = Ab(t, e, 1)) &&
          h +
            (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) +
            ")"
        );
      })),
      r && ((a = Bb(t)), (i = r.c).join(o) !== a.c.join(o)))
    )
      for (s = (n = t.replace(Et, "1").split(rt)).length - 1; l < s; l++)
        o +=
          n[l] +
          (~i.indexOf(l)
            ? u.shift() || h + "0,0,0,0)"
            : (a.length ? a : u.length ? u : r).shift());
    if (!n) for (s = (n = t.split(Et)).length - 1; l < s; l++) o += n[l] + u[l];
    return o + n[s];
  }
  function Fb(t) {
    var e,
      r = t.join(" ");
    if (((Et.lastIndex = 0), Et.test(r)))
      return (
        (e = Dt.test(r)),
        (t[1] = Cb(t[1], e)),
        (t[0] = Cb(t[0], e, Bb(t[1]))),
        !0
      );
  }
  function Ob(t) {
    var e = (t + "").split("("),
      r = Lt[e[0]];
    return r && 1 < e.length && r.config
      ? r.config.apply(
          null,
          ~t.indexOf("{")
            ? [
                (function _parseObjectInString(t) {
                  for (
                    var e,
                      r,
                      i,
                      n = {},
                      a = t.substr(1, t.length - 3).split(":"),
                      s = a[0],
                      o = 1,
                      u = a.length;
                    o < u;
                    o++
                  )
                    (r = a[o]),
                      (e = o !== u - 1 ? r.lastIndexOf(",") : r.length),
                      (i = r.substr(0, e)),
                      (n[s] = isNaN(i) ? i.replace(Bt, "").trim() : +i),
                      (s = r.substr(e + 1).trim());
                  return n;
                })(e[1]),
              ]
            : (function _valueInParentheses(t) {
                var e = t.indexOf("(") + 1,
                  r = t.indexOf(")"),
                  i = t.indexOf("(", e);
                return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
              })(t)
                .split(",")
                .map(oa)
        )
      : Lt._CE && It.test(t)
      ? Lt._CE("", t)
      : r;
  }
  function Qb(t, e) {
    for (var r, i = t._first; i; )
      i instanceof Xt
        ? Qb(i, e)
        : !i.vars.yoyoEase ||
          (i._yoyo && i._repeat) ||
          i._yoyo === e ||
          (i.timeline
            ? Qb(i.timeline, e)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = e))),
        (i = i._next);
  }
  function Sb(t, e, r, i) {
    void 0 === r &&
      (r = function easeOut(t) {
        return 1 - e(1 - t);
      }),
      void 0 === i &&
        (i = function easeInOut(t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
        });
    var n,
      a = { easeIn: e, easeOut: r, easeInOut: i };
    return (
      ha(t, function (t) {
        for (var e in ((Lt[t] = ot[t] = a), (Lt[(n = t.toLowerCase())] = r), a))
          Lt[
            n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
          ] = Lt[t + "." + e] = a[e];
      }),
      a
    );
  }
  function Tb(e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
    };
  }
  function Ub(r, t, e) {
    function Jm(t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * H((t - a) * n) + 1;
    }
    var i = 1 <= t ? t : 1,
      n = (e || (r ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      a = (n / N) * (Math.asin(1 / i) || 0),
      s =
        "out" === r
          ? Jm
          : "in" === r
          ? function (t) {
              return 1 - Jm(1 - t);
            }
          : Tb(Jm);
    return (
      (n = N / n),
      (s.config = function (t, e) {
        return Ub(r, t, e);
      }),
      s
    );
  }
  function Vb(e, r) {
    function Rm(t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
    }
    void 0 === r && (r = 1.70158);
    var t =
      "out" === e
        ? Rm
        : "in" === e
        ? function (t) {
            return 1 - Rm(1 - t);
          }
        : Tb(Rm);
    return (
      (t.config = function (t) {
        return Vb(e, t);
      }),
      t
    );
  }
  var F,
    L,
    l,
    I,
    h,
    n,
    a,
    i,
    o,
    f,
    d,
    c,
    p,
    _,
    m,
    g,
    b,
    O,
    k,
    M,
    C,
    A,
    z,
    E,
    D,
    B,
    Y,
    j,
    q = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    V = { duration: 0.5, overwrite: !1, delay: 0 },
    U = 1e8,
    X = 1 / U,
    N = 2 * Math.PI,
    G = N / 4,
    W = 0,
    K = Math.sqrt,
    J = Math.cos,
    H = Math.sin,
    $ =
      ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    Z = Array.isArray,
    tt = /(?:-?\.?\d|\.)+/gi,
    et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    nt = /[+-]=-?[.\d]+/,
    at = /[^,'"\[\]\s]+/gi,
    st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ot = {},
    ut = { suppressEvents: !0, isStart: !0, kill: !1 },
    ht = { suppressEvents: !0, kill: !1 },
    lt = { suppressEvents: !0 },
    ft = {},
    dt = [],
    ct = {},
    pt = {},
    _t = {},
    mt = 30,
    gt = [],
    vt = "",
    yt = function _merge(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    Tt = function _animationCycle(t, e) {
      var r = Math.floor((t /= e));
      return t && r === t ? r - 1 : r;
    },
    bt = function _isFromOrFromStart(t) {
      var e = t.data;
      return "isFromStart" === e || "isStart" === e;
    },
    wt = { _start: 0, endTime: T, totalDuration: T },
    xt = function _parsePosition(t, e, i) {
      var n,
        a,
        s,
        o = t.labels,
        u = t._recent || wt,
        h = t.duration() >= U ? u.endTime(!1) : t._dur;
      return r(e) && (isNaN(e) || e in o)
        ? ((a = e.charAt(0)),
          (s = "%" === e.substr(-1)),
          (n = e.indexOf("=")),
          "<" === a || ">" === a
            ? (0 <= n && (e = e.replace(/=/, "")),
              ("<" === a ? u._start : u.endTime(0 <= u._repeat)) +
                (parseFloat(e.substr(1)) || 0) *
                  (s ? (n < 0 ? u : i).totalDuration() / 100 : 1))
            : n < 0
            ? (e in o || (o[e] = h), o[e])
            : ((a = parseFloat(e.charAt(n - 1) + e.substr(n + 1))),
              s && i && (a = (a / 100) * (Z(i) ? i[0] : i).totalDuration()),
              1 < n ? _parsePosition(t, e.substr(0, n - 1), i) + a : h + a))
        : null == e
        ? h
        : +e;
    },
    Ot = function _clamp(t, e, r) {
      return r < t ? t : e < r ? e : r;
    },
    kt = [].slice,
    Mt = function toArray(t, e, i) {
      return l && !e && l.selector
        ? l.selector(t)
        : !r(t) || i || (!n && Ft())
        ? Z(t)
          ? (function _flatten(t, e, i) {
              return (
                void 0 === i && (i = []),
                t.forEach(function (t) {
                  return (r(t) && !e) || _a(t, 1)
                    ? i.push.apply(i, Mt(t))
                    : i.push(t);
                }) || i
              );
            })(t, i)
          : _a(t)
          ? kt.call(t, 0)
          : t
          ? [t]
          : []
        : kt.call((e || a).querySelectorAll(t), 0);
    },
    Pt = function mapRange(e, t, r, i, n) {
      var a = t - e,
        s = i - r;
      return Wa(n, function (t) {
        return r + (((t - e) / a) * s || 0);
      });
    },
    Ct = function _callback(t, e, r) {
      var i,
        n,
        a,
        s = t.vars,
        o = s[e],
        u = l,
        h = t._ctx;
      if (o)
        return (
          (i = s[e + "Params"]),
          (n = s.callbackScope || t),
          r && dt.length && ma(),
          h && (l = h),
          (a = i ? o.apply(n, i) : o.call(n)),
          (l = u),
          a
        );
    },
    At = [],
    St = 255,
    zt = {
      aqua: [0, St, St],
      lime: [0, St, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, St],
      navy: [0, 0, 128],
      white: [St, St, St],
      olive: [128, 128, 0],
      yellow: [St, St, 0],
      orange: [St, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [St, 0, 0],
      pink: [St, 192, 203],
      cyan: [0, St, St],
      transparent: [St, St, St, 0],
    },
    Et = (function () {
      var t,
        e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in zt) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    Dt = /hsl[a]?\(/,
    Rt =
      ((k = Date.now),
      (M = 500),
      (C = 33),
      (A = k()),
      (z = A),
      (D = E = 1e3 / 240),
      (g = {
        time: 0,
        frame: 0,
        tick: function tick() {
          yl(!0);
        },
        deltaRatio: function deltaRatio(t) {
          return b / (1e3 / (t || 60));
        },
        wake: function wake() {
          o &&
            (!n &&
              x() &&
              ((h = n = window),
              (a = h.document || {}),
              (ot.gsap = ze),
              (h.gsapVersions || (h.gsapVersions = [])).push(ze.version),
              P(i || h.GreenSockGlobals || (!h.gsap && h) || {}),
              At.forEach(wb)),
            (m =
              "undefined" != typeof requestAnimationFrame &&
              requestAnimationFrame),
            p && g.sleep(),
            (_ =
              m ||
              function (t) {
                return setTimeout(t, (D - 1e3 * g.time + 1) | 0);
              }),
            (c = 1),
            yl(2));
        },
        sleep: function sleep() {
          (m ? cancelAnimationFrame : clearTimeout)(p), (c = 0), (_ = T);
        },
        lagSmoothing: function lagSmoothing(t, e) {
          (M = t || 1 / 0), (C = Math.min(e || 33, M));
        },
        fps: function fps(t) {
          (E = 1e3 / (t || 240)), (D = 1e3 * g.time + E);
        },
        add: function add(n, t, e) {
          var a = t
            ? function (t, e, r, i) {
                n(t, e, r, i), g.remove(a);
              }
            : n;
          return g.remove(n), B[e ? "unshift" : "push"](a), Ft(), a;
        },
        remove: function remove(t, e) {
          ~(e = B.indexOf(t)) && B.splice(e, 1) && e <= O && O--;
        },
        _listeners: (B = []),
      })),
    Ft = function _wake() {
      return !c && Rt.wake();
    },
    Lt = {},
    It = /^[\d.\-M][\d.\-,\s]/,
    Bt = /["']/g,
    Yt = function _invertEase(e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    jt = function _parseEase(t, e) {
      return (t && (s(t) ? t : Lt[t] || Ob(t))) || e;
    };
  function yl(t) {
    var e,
      r,
      i,
      n,
      a = k() - z,
      s = !0 === t;
    if (
      ((M < a || a < 0) && (A += a - C),
      (0 < (e = (i = (z += a) - A) - D) || s) &&
        ((n = ++g.frame),
        (b = i - 1e3 * g.time),
        (g.time = i /= 1e3),
        (D += e + (E <= e ? 4 : E - e)),
        (r = 1)),
      s || (p = _(yl)),
      r)
    )
      for (O = 0; O < B.length; O++) B[O](i, b, n, t);
  }
  function gn(t) {
    return t < j
      ? Y * t * t
      : t < 0.7272727272727273
      ? Y * Math.pow(t - 1.5 / 2.75, 2) + 0.75
      : t < 0.9090909090909092
      ? Y * (t -= 2.25 / 2.75) * t + 0.9375
      : Y * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
  }
  ha("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Sb(
      t + ",Power" + (r - 1),
      e
        ? function (t) {
            return Math.pow(t, r);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, r);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, r) / 2
          : 1 - Math.pow(2 * (1 - t), r) / 2;
      }
    );
  }),
    (Lt.Linear.easeNone = Lt.none = Lt.Linear.easeIn),
    Sb("Elastic", Ub("in"), Ub("out"), Ub()),
    (Y = 7.5625),
    (j = 1 / 2.75),
    Sb(
      "Bounce",
      function (t) {
        return 1 - gn(1 - t);
      },
      gn
    ),
    Sb("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    Sb("Circ", function (t) {
      return -(K(1 - t * t) - 1);
    }),
    Sb("Sine", function (t) {
      return 1 === t ? 1 : 1 - J(t * G);
    }),
    Sb("Back", Vb("in"), Vb("out"), Vb()),
    (Lt.SteppedEase =
      Lt.steps =
      ot.SteppedEase =
        {
          config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
              i = t + (e ? 0 : 1),
              n = e ? 1 : 0;
            return function (t) {
              return (((i * Ot(0, 0.99999999, t)) | 0) + n) * r;
            };
          },
        }),
    (V.ease = Lt["quad.out"]),
    ha(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (t) {
        return (vt += t + "," + t + "Params,");
      }
    );
  var qt,
    Vt = function GSCache(t, e) {
      (this.id = W++),
        ((t._gsap = this).target = t),
        (this.harness = e),
        (this.get = e ? e.get : ga),
        (this.set = e ? e.getSetter : ne);
    },
    Ut =
      (((qt = Animation.prototype).delay = function delay(t) {
        return t || 0 === t
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (qt.duration = function duration(t) {
        return arguments.length
          ? this.totalDuration(
              0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t
            )
          : this.totalDuration() && this._dur;
      }),
      (qt.totalDuration = function totalDuration(t) {
        return arguments.length
          ? ((this._dirty = 0),
            Ra(
              this,
              this._repeat < 0
                ? t
                : (t - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (qt.totalTime = function totalTime(t, e) {
        if ((Ft(), !arguments.length)) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
          for (Ia(this, t), !r._dp || r.parent || Ja(r, this); r && r.parent; )
            r.parent._time !==
              r._start +
                (0 <= r._ts
                  ? r._tTime / r._ts
                  : (r.totalDuration() - r._tTime) / -r._ts) &&
              r.totalTime(r._tTime, !0),
              (r = r.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((0 < this._ts && t < this._tDur) ||
              (this._ts < 0 && 0 < t) ||
              (!this._tDur && !t)) &&
            Ka(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t ||
            (!this._dur && !e) ||
            (this._initted && Math.abs(this._zTime) === X) ||
            (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), na(this, t, e)),
          this
        );
      }),
      (qt.time = function time(t, e) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + Ea(this)) %
                (this._dur + this._rDelay) || (t ? this._dur : 0),
              e
            )
          : this._time;
      }),
      (qt.totalProgress = function totalProgress(t, e) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, e)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : 0 < this.rawTime()
          ? 1
          : 0;
      }),
      (qt.progress = function progress(t, e) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                Ea(this),
              e
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : 0 < this.rawTime()
          ? 1
          : 0;
      }),
      (qt.iteration = function iteration(t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * r, e)
          : this._repeat
          ? Tt(this._tTime, r) + 1
          : 1;
      }),
      (qt.timeScale = function timeScale(t, e) {
        if (!arguments.length) return this._rts === -X ? 0 : this._rts;
        if (this._rts === t) return this;
        var r =
          this.parent && this._ts ? Ga(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || t === -X ? 0 : this._rts),
          this.totalTime(Ot(-Math.abs(this._delay), this._tDur, r), !1 !== e),
          Ha(this),
          (function _recacheAncestors(t) {
            for (var e = t.parent; e && e.parent; )
              (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
          })(this)
        );
      }),
      (qt.paused = function paused(t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t)
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Ft(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    1 === this.progress() &&
                      Math.abs(this._zTime) !== X &&
                      (this._tTime -= X)
                  ))),
            this)
          : this._ps;
      }),
      (qt.startTime = function startTime(t) {
        if (arguments.length) {
          this._start = t;
          var e = this.parent || this._dp;
          return (
            !e || (!e._sort && this.parent) || Ka(e, this, t - this._delay),
            this
          );
        }
        return this._start;
      }),
      (qt.endTime = function endTime(t) {
        return (
          this._start +
          (w(t) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (qt.rawTime = function rawTime(t) {
        var e = this.parent || this._dp;
        return e
          ? t &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Ga(e.rawTime(t), this)
            : this._tTime
          : this._tTime;
      }),
      (qt.revert = function revert(t) {
        void 0 === t && (t = lt);
        var e = L;
        return (
          (L = t),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(t),
            this.totalTime(-0.01, t.suppressEvents)),
          "nested" !== this.data && !1 !== t.kill && this.kill(),
          (L = e),
          this
        );
      }),
      (qt.globalTime = function globalTime(t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
          (r = e._start + r / (Math.abs(e._ts) || 1)), (e = e._dp);
        return !this.parent && this._sat ? this._sat.globalTime(t) : r;
      }),
      (qt.repeat = function repeat(t) {
        return arguments.length
          ? ((this._repeat = t === 1 / 0 ? -2 : t), Sa(this))
          : -2 === this._repeat
          ? 1 / 0
          : this._repeat;
      }),
      (qt.repeatDelay = function repeatDelay(t) {
        if (arguments.length) {
          var e = this._time;
          return (this._rDelay = t), Sa(this), e ? this.time(e) : this;
        }
        return this._rDelay;
      }),
      (qt.yoyo = function yoyo(t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (qt.seek = function seek(t, e) {
        return this.totalTime(xt(this, t), w(e));
      }),
      (qt.restart = function restart(t, e) {
        return this.play().totalTime(t ? -this._delay : 0, w(e));
      }),
      (qt.play = function play(t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (qt.reverse = function reverse(t, e) {
        return (
          null != t && this.seek(t || this.totalDuration(), e),
          this.reversed(!0).paused(!1)
        );
      }),
      (qt.pause = function pause(t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (qt.resume = function resume() {
        return this.paused(!1);
      }),
      (qt.reversed = function reversed(t) {
        return arguments.length
          ? (!!t !== this.reversed() &&
              this.timeScale(-this._rts || (t ? -X : 0)),
            this)
          : this._rts < 0;
      }),
      (qt.invalidate = function invalidate() {
        return (this._initted = this._act = 0), (this._zTime = -X), this;
      }),
      (qt.isActive = function isActive() {
        var t,
          e = this.parent || this._dp,
          r = this._start;
        return !(
          e &&
          !(
            this._ts &&
            this._initted &&
            e.isActive() &&
            (t = e.rawTime(!0)) >= r &&
            t < this.endTime(!0) - X
          )
        );
      }),
      (qt.eventCallback = function eventCallback(t, e, r) {
        var i = this.vars;
        return 1 < arguments.length
          ? (e
              ? ((i[t] = e),
                r && (i[t + "Params"] = r),
                "onUpdate" === t && (this._onUpdate = e))
              : delete i[t],
            this)
          : i[t];
      }),
      (qt.then = function then(t) {
        var i = this;
        return new Promise(function (e) {
          function Co() {
            var t = i.then;
            (i.then = null),
              s(r) && (r = r(i)) && (r.then || r === i) && (i.then = t),
              e(r),
              (i.then = t);
          }
          var r = s(t) ? t : pa;
          (i._initted && 1 === i.totalProgress() && 0 <= i._ts) ||
          (!i._tTime && i._ts < 0)
            ? Co()
            : (i._prom = Co);
        });
      }),
      (qt.kill = function kill() {
        tb(this);
      }),
      Animation);
  function Animation(t) {
    (this.vars = t),
      (this._delay = +t.delay || 0),
      (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
        ((this._rDelay = t.repeatDelay || 0),
        (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
      (this._ts = 1),
      Ra(this, +t.duration, 1, 1),
      (this.data = t.data),
      l && (this._ctx = l).data.push(this),
      c || Rt.wake();
  }
  qa(Ut.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -X,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Xt = (function (i) {
    function Timeline(t, e) {
      var r;
      return (
        void 0 === t && (t = {}),
        ((r = i.call(this, t) || this).labels = {}),
        (r.smoothChildTiming = !!t.smoothChildTiming),
        (r.autoRemoveChildren = !!t.autoRemoveChildren),
        (r._sort = w(t.sortChildren)),
        I && Ka(t.parent || I, _assertThisInitialized(r), e),
        t.reversed && r.reverse(),
        t.paused && r.paused(!0),
        t.scrollTrigger && La(_assertThisInitialized(r), t.scrollTrigger),
        r
      );
    }
    _inheritsLoose(Timeline, i);
    var e = Timeline.prototype;
    return (
      (e.to = function to(t, e, r) {
        return Va(0, arguments, this), this;
      }),
      (e.from = function from(t, e, r) {
        return Va(1, arguments, this), this;
      }),
      (e.fromTo = function fromTo(t, e, r, i) {
        return Va(2, arguments, this), this;
      }),
      (e.set = function set(t, e, r) {
        return (
          (e.duration = 0),
          (e.parent = this),
          va(e).repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new $t(t, e, xt(this, r), 1),
          this
        );
      }),
      (e.call = function call(t, e, r) {
        return Ka(this, $t.delayedCall(0, t, e), r);
      }),
      (e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
        return (
          (r.duration = e),
          (r.stagger = r.stagger || i),
          (r.onComplete = a),
          (r.onCompleteParams = s),
          (r.parent = this),
          new $t(t, r, xt(this, n)),
          this
        );
      }),
      (e.staggerFrom = function staggerFrom(t, e, r, i, n, a, s) {
        return (
          (r.runBackwards = 1),
          (va(r).immediateRender = w(r.immediateRender)),
          this.staggerTo(t, e, r, i, n, a, s)
        );
      }),
      (e.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, s, o) {
        return (
          (i.startAt = r),
          (va(i).immediateRender = w(i.immediateRender)),
          this.staggerTo(t, e, i, n, a, s, o)
        );
      }),
      (e.render = function render(t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _ = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          g = this._dur,
          v = t <= 0 ? 0 : ja(t),
          y = this._zTime < 0 != t < 0 && (this._initted || !g);
        if (
          (this !== I && m < v && 0 <= t && (v = m),
          v !== this._tTime || r || y)
        ) {
          if (
            (_ !== this._time &&
              g &&
              ((v += this._time - _), (t += this._time - _)),
            (i = v),
            (f = this._start),
            (u = !(l = this._ts)),
            y && (g || (_ = this._zTime), (!t && e) || (this._zTime = t)),
            this._repeat)
          ) {
            if (
              ((c = this._yoyo),
              (o = g + this._rDelay),
              this._repeat < -1 && t < 0)
            )
              return this.totalTime(100 * o + t, e, r);
            if (
              ((i = ja(v % o)),
              v === m
                ? ((s = this._repeat), (i = g))
                : ((s = ~~(v / o)) && s === v / o && ((i = g), s--),
                  g < i && (i = g)),
              (d = Tt(this._tTime, o)),
              !_ &&
                this._tTime &&
                d !== s &&
                this._tTime - d * o - this._dur <= 0 &&
                (d = s),
              c && 1 & s && ((i = g - i), (p = 1)),
              s !== d && !this._lock)
            ) {
              var T = c && 1 & d,
                b = T === (c && 1 & s);
              if (
                (s < d && (T = !T),
                (_ = T ? 0 : v % g ? g : v),
                (this._lock = 1),
                (this.render(_ || (p ? 0 : ja(s * o)), e, !g)._lock = 0),
                (this._tTime = v),
                !e && this.parent && Ct(this, "onRepeat"),
                this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1),
                (_ && _ !== this._time) ||
                  u != !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((g = this._dur),
                (m = this._tDur),
                b &&
                  ((this._lock = 2),
                  (_ = T ? g : -1e-4),
                  this.render(_, !0),
                  this.vars.repeatRefresh && !p && this.invalidate()),
                (this._lock = 0),
                !this._ts && !u)
              )
                return this;
              Qb(this, p);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (h = (function _findNextPauseTween(t, e, r) {
                var i;
                if (e < r)
                  for (i = t._first; i && i._start <= r; ) {
                    if ("isPause" === i.data && i._start > e) return i;
                    i = i._next;
                  }
                else
                  for (i = t._last; i && i._start >= r; ) {
                    if ("isPause" === i.data && i._start < e) return i;
                    i = i._prev;
                  }
              })(this, ja(_), ja(i))) &&
              (v -= i - (i = h._start)),
            (this._tTime = v),
            (this._time = i),
            (this._act = !l),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = t),
              (_ = 0)),
            !_ && i && !e && !s && (Ct(this, "onStart"), this._tTime !== v))
          )
            return this;
          if (_ <= i && 0 <= t)
            for (n = this._first; n; ) {
              if (
                ((a = n._next), (n._act || i >= n._start) && n._ts && h !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, r);
                if (
                  (n.render(
                    0 < n._ts
                      ? (i - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (i - n._start) * n._ts,
                    e,
                    r
                  ),
                  i !== this._time || (!this._ts && !u))
                ) {
                  (h = 0), a && (v += this._zTime = -X);
                  break;
                }
              }
              n = a;
            }
          else {
            n = this._last;
            for (var w = t < 0 ? t : i; n; ) {
              if (
                ((a = n._prev), (n._act || w <= n._end) && n._ts && h !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, r);
                if (
                  (n.render(
                    0 < n._ts
                      ? (w - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (w - n._start) * n._ts,
                    e,
                    r || (L && (n._initted || n._startAt))
                  ),
                  i !== this._time || (!this._ts && !u))
                ) {
                  (h = 0), a && (v += this._zTime = w ? -X : X);
                  break;
                }
              }
              n = a;
            }
          }
          if (
            h &&
            !e &&
            (this.pause(),
            (h.render(_ <= i ? 0 : -X)._zTime = _ <= i ? 1 : -1),
            this._ts)
          )
            return (this._start = f), Ha(this), this.render(t, e, r);
          this._onUpdate && !e && Ct(this, "onUpdate", !0),
            ((v === m && this._tTime >= this.totalDuration()) || (!v && _)) &&
              ((f !== this._start && Math.abs(l) === Math.abs(this._ts)) ||
                this._lock ||
                ((!t && g) ||
                  !((v === m && 0 < this._ts) || (!v && this._ts < 0)) ||
                  za(this, 1),
                e ||
                  (t < 0 && !_) ||
                  (!v && !_ && m) ||
                  (Ct(
                    this,
                    v === m && 0 <= t ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  !this._prom ||
                    (v < m && 0 < this.timeScale()) ||
                    this._prom())));
        }
        return this;
      }),
      (e.add = function add(e, i) {
        var n = this;
        if ((t(i) || (i = xt(this, i, e)), !(e instanceof Ut))) {
          if (Z(e))
            return (
              e.forEach(function (t) {
                return n.add(t, i);
              }),
              this
            );
          if (r(e)) return this.addLabel(e, i);
          if (!s(e)) return this;
          e = $t.delayedCall(0, e);
        }
        return this !== e ? Ka(this, e, i) : this;
      }),
      (e.getChildren = function getChildren(t, e, r, i) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === r && (r = !0),
          void 0 === i && (i = -U);
        for (var n = [], a = this._first; a; )
          a._start >= i &&
            (a instanceof $t
              ? e && n.push(a)
              : (r && n.push(a),
                t && n.push.apply(n, a.getChildren(!0, e, r)))),
            (a = a._next);
        return n;
      }),
      (e.getById = function getById(t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
          if (e[r].vars.id === t) return e[r];
      }),
      (e.remove = function remove(t) {
        return r(t)
          ? this.removeLabel(t)
          : s(t)
          ? this.killTweensOf(t)
          : (ya(this, t),
            t === this._recent && (this._recent = this._last),
            Aa(this));
      }),
      (e.totalTime = function totalTime(t, e) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = ja(
                Rt.time -
                  (0 < this._ts
                    ? t / this._ts
                    : (this.totalDuration() - t) / -this._ts)
              )),
            i.prototype.totalTime.call(this, t, e),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (e.addLabel = function addLabel(t, e) {
        return (this.labels[t] = xt(this, e)), this;
      }),
      (e.removeLabel = function removeLabel(t) {
        return delete this.labels[t], this;
      }),
      (e.addPause = function addPause(t, e, r) {
        var i = $t.delayedCall(0, e || T, r);
        return (
          (i.data = "isPause"), (this._hasPause = 1), Ka(this, i, xt(this, t))
        );
      }),
      (e.removePause = function removePause(t) {
        var e = this._first;
        for (t = xt(this, t); e; )
          e._start === t && "isPause" === e.data && za(e), (e = e._next);
      }),
      (e.killTweensOf = function killTweensOf(t, e, r) {
        for (var i = this.getTweensOf(t, r), n = i.length; n--; )
          Nt !== i[n] && i[n].kill(t, e);
        return this;
      }),
      (e.getTweensOf = function getTweensOf(e, r) {
        for (var i, n = [], a = Mt(e), s = this._first, o = t(r); s; )
          s instanceof $t
            ? la(s._targets, a) &&
              (o
                ? (!Nt || (s._initted && s._ts)) &&
                  s.globalTime(0) <= r &&
                  s.globalTime(s.totalDuration()) > r
                : !r || s.isActive()) &&
              n.push(s)
            : (i = s.getTweensOf(a, r)).length && n.push.apply(n, i),
            (s = s._next);
        return n;
      }),
      (e.tweenTo = function tweenTo(t, e) {
        e = e || {};
        var r,
          i = this,
          n = xt(i, t),
          a = e.startAt,
          s = e.onStart,
          o = e.onStartParams,
          u = e.immediateRender,
          h = $t.to(
            i,
            qa(
              {
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: n,
                overwrite: "auto",
                duration:
                  e.duration ||
                  Math.abs(
                    (n - (a && "time" in a ? a.time : i._time)) / i.timeScale()
                  ) ||
                  X,
                onStart: function onStart() {
                  if ((i.pause(), !r)) {
                    var t =
                      e.duration ||
                      Math.abs(
                        (n - (a && "time" in a ? a.time : i._time)) /
                          i.timeScale()
                      );
                    h._dur !== t && Ra(h, t, 0, 1).render(h._time, !0, !0),
                      (r = 1);
                  }
                  s && s.apply(h, o || []);
                },
              },
              e
            )
          );
        return u ? h.render(0) : h;
      }),
      (e.tweenFromTo = function tweenFromTo(t, e, r) {
        return this.tweenTo(e, qa({ startAt: { time: xt(this, t) } }, r));
      }),
      (e.recent = function recent() {
        return this._recent;
      }),
      (e.nextLabel = function nextLabel(t) {
        return void 0 === t && (t = this._time), rb(this, xt(this, t));
      }),
      (e.previousLabel = function previousLabel(t) {
        return void 0 === t && (t = this._time), rb(this, xt(this, t), 1);
      }),
      (e.currentLabel = function currentLabel(t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + X);
      }),
      (e.shiftChildren = function shiftChildren(t, e, r) {
        void 0 === r && (r = 0);
        for (var i, n = this._first, a = this.labels; n; )
          n._start >= r && ((n._start += t), (n._end += t)), (n = n._next);
        if (e) for (i in a) a[i] >= r && (a[i] += t);
        return Aa(this);
      }),
      (e.invalidate = function invalidate(t) {
        var e = this._first;
        for (this._lock = 0; e; ) e.invalidate(t), (e = e._next);
        return i.prototype.invalidate.call(this, t);
      }),
      (e.clear = function clear(t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r; )
          (e = r._next), this.remove(r), (r = e);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          t && (this.labels = {}),
          Aa(this)
        );
      }),
      (e.totalDuration = function totalDuration(t) {
        var e,
          r,
          i,
          n = 0,
          a = this,
          s = a._last,
          o = U;
        if (arguments.length)
          return a.timeScale(
            (a._repeat < 0 ? a.duration() : a.totalDuration()) /
              (a.reversed() ? -t : t)
          );
        if (a._dirty) {
          for (i = a.parent; s; )
            (e = s._prev),
              s._dirty && s.totalDuration(),
              o < (r = s._start) && a._sort && s._ts && !a._lock
                ? ((a._lock = 1), (Ka(a, s, r - s._delay, 1)._lock = 0))
                : (o = r),
              r < 0 &&
                s._ts &&
                ((n -= r),
                ((!i && !a._dp) || (i && i.smoothChildTiming)) &&
                  ((a._start += r / a._ts), (a._time -= r), (a._tTime -= r)),
                a.shiftChildren(-r, !1, -Infinity),
                (o = 0)),
              s._end > n && s._ts && (n = s._end),
              (s = e);
          Ra(a, a === I && a._time > n ? a._time : n, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (Timeline.updateRoot = function updateRoot(t) {
        if ((I._ts && (na(I, Ga(t, I)), (f = Rt.frame)), Rt.frame >= mt)) {
          mt += q.autoSleep || 120;
          var e = I._first;
          if ((!e || !e._ts) && q.autoSleep && Rt._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || Rt.sleep();
          }
        }
      }),
      Timeline
    );
  })(Ut);
  qa(Xt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  function ac(t, e, i, n, a, o) {
    var u, h, l, f;
    if (
      pt[t] &&
      !1 !==
        (u = new pt[t]()).init(
          a,
          u.rawVars
            ? e[t]
            : (function _processVars(t, e, i, n, a) {
                if (
                  (s(t) && (t = Kt(t, a, e, i, n)),
                  !v(t) || (t.style && t.nodeType) || Z(t) || $(t))
                )
                  return r(t) ? Kt(t, a, e, i, n) : t;
                var o,
                  u = {};
                for (o in t) u[o] = Kt(t[o], a, e, i, n);
                return u;
              })(e[t], n, a, o, i),
          i,
          n,
          o
        ) &&
      ((i._pt = h = new _e(i._pt, a, t, 0, 1, u.render, u, 0, u.priority)),
      i !== d)
    )
      for (l = i._ptLookup[i._targets.indexOf(a)], f = u._props.length; f--; )
        l[u._props[f]] = h;
    return u;
  }
  function gc(t, r, e, i) {
    var n,
      a,
      s = r.ease || i || "power1.inOut";
    if (Z(r))
      (a = e[t] || (e[t] = [])),
        r.forEach(function (t, e) {
          return a.push({ t: (e / (r.length - 1)) * 100, v: t, e: s });
        });
    else
      for (n in r)
        (a = e[n] || (e[n] = [])),
          "ease" === n || a.push({ t: parseFloat(t), v: r[n], e: s });
  }
  var Nt,
    Gt,
    Wt = function _addPropTween(t, e, i, n, a, o, u, h, l, f) {
      s(n) && (n = n(a || 0, t, o));
      var d,
        c = t[e],
        p =
          "get" !== i
            ? i
            : s(c)
            ? l
              ? t[
                  e.indexOf("set") || !s(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](l)
              : t[e]()
            : c,
        _ = s(c) ? (l ? re : te) : Zt;
      if (
        (r(n) &&
          (~n.indexOf("random(") && (n = ob(n)),
          "=" === n.charAt(1) &&
            ((!(d = ka(p, n) + (Ya(p) || 0)) && 0 !== d) || (n = d))),
        !f || p !== n || Gt)
      )
        return isNaN(p * n) || "" === n
          ? (c || e in t || Q(e, n),
            function _addComplexStringPropTween(t, e, r, i, n, a, s) {
              var o,
                u,
                h,
                l,
                f,
                d,
                c,
                p,
                _ = new _e(this._pt, t, e, 0, 1, ue, null, n),
                m = 0,
                g = 0;
              for (
                _.b = r,
                  _.e = i,
                  r += "",
                  (c = ~(i += "").indexOf("random(")) && (i = ob(i)),
                  a && (a((p = [r, i]), t, e), (r = p[0]), (i = p[1])),
                  u = r.match(it) || [];
                (o = it.exec(i));

              )
                (l = o[0]),
                  (f = i.substring(m, o.index)),
                  h ? (h = (h + 1) % 5) : "rgba(" === f.substr(-5) && (h = 1),
                  l !== u[g++] &&
                    ((d = parseFloat(u[g - 1]) || 0),
                    (_._pt = {
                      _next: _._pt,
                      p: f || 1 === g ? f : ",",
                      s: d,
                      c: "=" === l.charAt(1) ? ka(d, l) - d : parseFloat(l) - d,
                      m: h && h < 4 ? Math.round : 0,
                    }),
                    (m = it.lastIndex));
              return (
                (_.c = m < i.length ? i.substring(m, i.length) : ""),
                (_.fp = s),
                (nt.test(i) || c) && (_.e = 0),
                (this._pt = _)
              );
            }.call(this, t, e, p, n, _, h || q.stringFilter, l))
          : ((d = new _e(
              this._pt,
              t,
              e,
              +p || 0,
              n - (p || 0),
              "boolean" == typeof c ? se : ae,
              0,
              _
            )),
            l && (d.fp = l),
            u && d.modifier(u, this, t),
            (this._pt = d));
    },
    Qt = function _initTween(t, e, r) {
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p,
        _,
        m = t.vars,
        g = m.ease,
        v = m.startAt,
        y = m.immediateRender,
        T = m.lazy,
        b = m.onUpdate,
        x = m.runBackwards,
        O = m.yoyoEase,
        k = m.keyframes,
        M = m.autoRevert,
        P = t._dur,
        C = t._startAt,
        A = t._targets,
        S = t.parent,
        z = S && "nested" === S.data ? S.vars.targets : A,
        E = "auto" === t._overwrite && !F,
        D = t.timeline;
      if (
        (!D || (k && g) || (g = "none"),
        (t._ease = jt(g, V.ease)),
        (t._yEase = O ? Yt(jt(!0 === O ? g : O, V.ease)) : 0),
        O &&
          t._yoyo &&
          !t._repeat &&
          ((O = t._yEase), (t._yEase = t._ease), (t._ease = O)),
        (t._from = !D && !!m.runBackwards),
        !D || (k && !m.stagger))
      ) {
        if (
          ((p = (l = A[0] ? fa(A[0]).harness : 0) && m[l.prop]),
          (i = ua(m, ft)),
          C &&
            (C._zTime < 0 && C.progress(1),
            e < 0 && x && y && !M
              ? C.render(-1, !0)
              : C.revert(x && P ? ht : ut),
            (C._lazy = 0)),
          v)
        ) {
          if (
            (za(
              (t._startAt = $t.set(
                A,
                qa(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: S,
                    immediateRender: !0,
                    lazy: !C && w(T),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      b &&
                      function () {
                        return Ct(t, "onUpdate");
                      },
                    stagger: 0,
                  },
                  v
                )
              ))
            ),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            e < 0 && (L || (!y && !M)) && t._startAt.revert(ht),
            y && P && e <= 0 && r <= 0)
          )
            return void (e && (t._zTime = e));
        } else if (x && P && !C)
          if (
            (e && (y = !1),
            (a = qa(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: y && !C && w(T),
                immediateRender: y,
                stagger: 0,
                parent: S,
              },
              i
            )),
            p && (a[l.prop] = p),
            za((t._startAt = $t.set(A, a))),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            e < 0 && (L ? t._startAt.revert(ht) : t._startAt.render(-1, !0)),
            (t._zTime = e),
            y)
          ) {
            if (!e) return;
          } else _initTween(t._startAt, X, X);
        for (
          t._pt = t._ptCache = 0, T = (P && w(T)) || (T && !P), n = 0;
          n < A.length;
          n++
        ) {
          if (
            ((h = (o = A[n])._gsap || ea(A)[n]._gsap),
            (t._ptLookup[n] = d = {}),
            ct[h.id] && dt.length && ma(),
            (c = z === A ? n : z.indexOf(o)),
            l &&
              !1 !== (f = new l()).init(o, p || i, t, c, z) &&
              ((t._pt = s =
                new _e(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority)),
              f._props.forEach(function (t) {
                d[t] = s;
              }),
              f.priority && (u = 1)),
            !l || p)
          )
            for (a in i)
              pt[a] && (f = ac(a, i, t, c, o, z))
                ? f.priority && (u = 1)
                : (d[a] = s =
                    Wt.call(t, o, a, "get", i[a], c, z, 0, m.stringFilter));
          t._op && t._op[n] && t.kill(o, t._op[n]),
            E &&
              t._pt &&
              ((Nt = t),
              I.killTweensOf(o, d, t.globalTime(e)),
              (_ = !t.parent),
              (Nt = 0)),
            t._pt && T && (ct[h.id] = 1);
        }
        u && pe(t), t._onInit && t._onInit(t);
      }
      (t._onUpdate = b),
        (t._initted = (!t._op || t._pt) && !_),
        k && e <= 0 && D.render(U, !0, !0);
    },
    Kt = function _parseFuncOrString(t, e, i, n, a) {
      return s(t)
        ? t.call(e, i, n, a)
        : r(t) && ~t.indexOf("random(")
        ? ob(t)
        : t;
    },
    Jt = vt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Ht = {};
  ha(Jt + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return (Ht[t] = 1);
  });
  var $t = (function (D) {
    function Tween(e, r, i, n) {
      var a;
      "number" == typeof r && ((i.duration = r), (r = i), (i = null));
      var s,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p = (a = D.call(this, n ? r : va(r)) || this).vars,
        _ = p.duration,
        m = p.delay,
        g = p.immediateRender,
        T = p.stagger,
        b = p.overwrite,
        x = p.keyframes,
        O = p.defaults,
        k = p.scrollTrigger,
        M = p.yoyoEase,
        P = r.parent || I,
        C = (Z(e) || $(e) ? t(e[0]) : "length" in r) ? [e] : Mt(e);
      if (
        ((a._targets = C.length
          ? ea(C)
          : R(
              "GSAP target " + e + " not found. https://gsap.com",
              !q.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = b),
        x || T || y(_) || y(m))
      ) {
        if (
          ((r = a.vars),
          (s = a.timeline =
            new Xt({
              data: "nested",
              defaults: O || {},
              targets: P && "nested" === P.data ? P.vars.targets : C,
            })).kill(),
          (s.parent = s._dp = _assertThisInitialized(a)),
          (s._start = 0),
          T || y(_) || y(m))
        ) {
          if (((h = C.length), (d = T && eb(T)), v(T)))
            for (l in T) ~Jt.indexOf(l) && ((c = c || {})[l] = T[l]);
          for (o = 0; o < h; o++)
            ((u = ua(r, Ht)).stagger = 0),
              M && (u.yoyoEase = M),
              c && yt(u, c),
              (f = C[o]),
              (u.duration = +Kt(_, _assertThisInitialized(a), o, f, C)),
              (u.delay =
                (+Kt(m, _assertThisInitialized(a), o, f, C) || 0) - a._delay),
              !T &&
                1 === h &&
                u.delay &&
                ((a._delay = m = u.delay), (a._start += m), (u.delay = 0)),
              s.to(f, u, d ? d(o, f, C) : 0),
              (s._ease = Lt.none);
          s.duration() ? (_ = m = 0) : (a.timeline = 0);
        } else if (x) {
          va(qa(s.vars.defaults, { ease: "none" })),
            (s._ease = jt(x.ease || r.ease || "none"));
          var A,
            S,
            z,
            E = 0;
          if (Z(x))
            x.forEach(function (t) {
              return s.to(C, t, ">");
            }),
              s.duration();
          else {
            for (l in ((u = {}), x))
              "ease" === l || "easeEach" === l || gc(l, x[l], u, x.easeEach);
            for (l in u)
              for (
                A = u[l].sort(function (t, e) {
                  return t.t - e.t;
                }),
                  o = E = 0;
                o < A.length;
                o++
              )
                ((z = {
                  ease: (S = A[o]).e,
                  duration: ((S.t - (o ? A[o - 1].t : 0)) / 100) * _,
                })[l] = S.v),
                  s.to(C, z, E),
                  (E += z.duration);
            s.duration() < _ && s.to({}, { duration: _ - s.duration() });
          }
        }
        _ || a.duration((_ = s.duration()));
      } else a.timeline = 0;
      return (
        !0 !== b ||
          F ||
          ((Nt = _assertThisInitialized(a)), I.killTweensOf(C), (Nt = 0)),
        Ka(P, _assertThisInitialized(a), i),
        r.reversed && a.reverse(),
        r.paused && a.paused(!0),
        (g ||
          (!_ &&
            !x &&
            a._start === ja(P._time) &&
            w(g) &&
            (function _hasNoPausedAncestors(t) {
              return !t || (t._ts && _hasNoPausedAncestors(t.parent));
            })(_assertThisInitialized(a)) &&
            "nested" !== P.data)) &&
          ((a._tTime = -X), a.render(Math.max(0, -m) || 0)),
        k && La(_assertThisInitialized(a), k),
        a
      );
    }
    _inheritsLoose(Tween, D);
    var e = Tween.prototype;
    return (
      (e.render = function render(t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d = this._time,
          c = this._tDur,
          p = this._dur,
          _ = t < 0,
          m = c - X < t && !_ ? c : t < X ? 0 : t;
        if (p) {
          if (
            m !== this._tTime ||
            !t ||
            r ||
            (!this._initted && this._tTime) ||
            (this._startAt && this._zTime < 0 != _)
          ) {
            if (((i = m), (l = this.timeline), this._repeat)) {
              if (((s = p + this._rDelay), this._repeat < -1 && _))
                return this.totalTime(100 * s + t, e, r);
              if (
                ((i = ja(m % s)),
                m === c
                  ? ((a = this._repeat), (i = p))
                  : ((a = ~~(m / s)) && a === ja(m / s) && ((i = p), a--),
                    p < i && (i = p)),
                (u = this._yoyo && 1 & a) && ((f = this._yEase), (i = p - i)),
                (o = Tt(this._tTime, s)),
                i === d && !r && this._initted && a === o)
              )
                return (this._tTime = m), this;
              a !== o &&
                (l && this._yEase && Qb(l, u),
                this.vars.repeatRefresh &&
                  !u &&
                  !this._lock &&
                  this._time !== s &&
                  this._initted &&
                  ((this._lock = r = 1),
                  (this.render(ja(s * a), !0).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (Ma(this, _ ? t : i, r, e, m)) return (this._tTime = 0), this;
              if (
                !(d === this._time || (r && this.vars.repeatRefresh && a !== o))
              )
                return this;
              if (p !== this._dur) return this.render(t, e, r);
            }
            if (
              ((this._tTime = m),
              (this._time = i),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = h = (f || this._ease)(i / p)),
              this._from && (this.ratio = h = 1 - h),
              i && !d && !e && !a && (Ct(this, "onStart"), this._tTime !== m))
            )
              return this;
            for (n = this._pt; n; ) n.r(h, n.d), (n = n._next);
            (l &&
              l.render(t < 0 ? t : l._dur * l._ease(i / this._dur), e, r)) ||
              (this._startAt && (this._zTime = t)),
              this._onUpdate &&
                !e &&
                (_ && Ca(this, t, 0, r), Ct(this, "onUpdate")),
              this._repeat &&
                a !== o &&
                this.vars.onRepeat &&
                !e &&
                this.parent &&
                Ct(this, "onRepeat"),
              (m !== this._tDur && m) ||
                this._tTime !== m ||
                (_ && !this._onUpdate && Ca(this, t, 0, !0),
                (!t && p) ||
                  !(
                    (m === this._tDur && 0 < this._ts) ||
                    (!m && this._ts < 0)
                  ) ||
                  za(this, 1),
                e ||
                  (_ && !d) ||
                  !(m || d || u) ||
                  (Ct(this, m === c ? "onComplete" : "onReverseComplete", !0),
                  !this._prom ||
                    (m < c && 0 < this.timeScale()) ||
                    this._prom()));
          }
        } else
          !(function _renderZeroDurationTween(t, e, r, i) {
            var n,
              a,
              s,
              o = t.ratio,
              u =
                e < 0 ||
                (!e &&
                  ((!t._start &&
                    (function _parentPlayheadIsBeforeStart(t) {
                      var e = t.parent;
                      return (
                        e &&
                        e._ts &&
                        e._initted &&
                        !e._lock &&
                        (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e))
                      );
                    })(t) &&
                    (t._initted || !bt(t))) ||
                    ((t._ts < 0 || t._dp._ts < 0) && !bt(t))))
                  ? 0
                  : 1,
              h = t._rDelay,
              l = 0;
            if (
              (h &&
                t._repeat &&
                ((l = Ot(0, t._tDur, e)),
                (a = Tt(l, h)),
                t._yoyo && 1 & a && (u = 1 - u),
                a !== Tt(t._tTime, h) &&
                  ((o = 1 - u),
                  t.vars.repeatRefresh && t._initted && t.invalidate())),
              u !== o || L || i || t._zTime === X || (!e && t._zTime))
            ) {
              if (!t._initted && Ma(t, e, i, r, l)) return;
              for (
                s = t._zTime,
                  t._zTime = e || (r ? X : 0),
                  r = r || (e && !s),
                  t.ratio = u,
                  t._from && (u = 1 - u),
                  t._time = 0,
                  t._tTime = l,
                  n = t._pt;
                n;

              )
                n.r(u, n.d), (n = n._next);
              e < 0 && Ca(t, e, 0, !0),
                t._onUpdate && !r && Ct(t, "onUpdate"),
                l && t._repeat && !r && t.parent && Ct(t, "onRepeat"),
                (e >= t._tDur || e < 0) &&
                  t.ratio === u &&
                  (u && za(t, 1),
                  r ||
                    L ||
                    (Ct(t, u ? "onComplete" : "onReverseComplete", !0),
                    t._prom && t._prom()));
            } else t._zTime || (t._zTime = e);
          })(this, t, e, r);
        return this;
      }),
      (e.targets = function targets() {
        return this._targets;
      }),
      (e.invalidate = function invalidate(t) {
        return (
          (t && this.vars.runBackwards) || (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(t),
          D.prototype.invalidate.call(this, t)
        );
      }),
      (e.resetTo = function resetTo(t, e, r, i, n) {
        c || Rt.wake(), this._ts || this.play();
        var a,
          s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return (
          this._initted || Qt(this, s),
          (a = this._ease(s / this._dur)),
          (function _updatePropTweens(t, e, r, i, n, a, s, o) {
            var u,
              h,
              l,
              f,
              d = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
            if (!d)
              for (
                d = t._ptCache[e] = [], l = t._ptLookup, f = t._targets.length;
                f--;

              ) {
                if ((u = l[f][e]) && u.d && u.d._pt)
                  for (u = u.d._pt; u && u.p !== e && u.fp !== e; ) u = u._next;
                if (!u)
                  return (
                    (Gt = 1),
                    (t.vars[e] = "+=0"),
                    Qt(t, s),
                    (Gt = 0),
                    o ? R(e + " not eligible for reset") : 1
                  );
                d.push(u);
              }
            for (f = d.length; f--; )
              ((u = (h = d[f])._pt || h).s =
                (!i && 0 !== i) || n ? u.s + (i || 0) + a * u.c : i),
                (u.c = r - u.s),
                h.e && (h.e = ia(r) + Ya(h.e)),
                h.b && (h.b = u.s + Ya(h.b));
          })(this, t, e, r, i, a, s, n)
            ? this.resetTo(t, e, r, i, 1)
            : (Ia(this, 0),
              this.parent ||
                xa(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (e.kill = function kill(t, e) {
        if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
          return (this._lazy = this._pt = 0), this.parent ? tb(this) : this;
        if (this.timeline) {
          var i = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(t, e, Nt && !0 !== Nt.vars.overwrite)
              ._first || tb(this),
            this.parent &&
              i !== this.timeline.totalDuration() &&
              Ra(this, (this._dur * this.timeline._tDur) / i, 0, 1),
            this
          );
        }
        var n,
          a,
          s,
          o,
          u,
          h,
          l,
          f = this._targets,
          d = t ? Mt(t) : f,
          c = this._ptLookup,
          p = this._pt;
        if (
          (!e || "all" === e) &&
          (function _arraysMatch(t, e) {
            for (
              var r = t.length, i = r === e.length;
              i && r-- && t[r] === e[r];

            );
            return r < 0;
          })(f, d)
        )
          return "all" === e && (this._pt = 0), tb(this);
        for (
          n = this._op = this._op || [],
            "all" !== e &&
              (r(e) &&
                ((u = {}),
                ha(e, function (t) {
                  return (u[t] = 1);
                }),
                (e = u)),
              (e = (function _addAliasesToVars(t, e) {
                var r,
                  i,
                  n,
                  a,
                  s = t[0] ? fa(t[0]).harness : 0,
                  o = s && s.aliases;
                if (!o) return e;
                for (i in ((r = yt({}, e)), o))
                  if ((i in r))
                    for (n = (a = o[i].split(",")).length; n--; )
                      r[a[n]] = r[i];
                return r;
              })(f, e))),
            l = f.length;
          l--;

        )
          if (~d.indexOf(f[l]))
            for (u in ((a = c[l]),
            "all" === e
              ? ((n[l] = e), (o = a), (s = {}))
              : ((s = n[l] = n[l] || {}), (o = e)),
            o))
              (h = a && a[u]) &&
                (("kill" in h.d && !0 !== h.d.kill(u)) || ya(this, h, "_pt"),
                delete a[u]),
                "all" !== s && (s[u] = 1);
        return this._initted && !this._pt && p && tb(this), this;
      }),
      (Tween.to = function to(t, e, r) {
        return new Tween(t, e, r);
      }),
      (Tween.from = function from(t, e) {
        return Va(1, arguments);
      }),
      (Tween.delayedCall = function delayedCall(t, e, r, i) {
        return new Tween(e, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: t,
          onComplete: e,
          onReverseComplete: e,
          onCompleteParams: r,
          onReverseCompleteParams: r,
          callbackScope: i,
        });
      }),
      (Tween.fromTo = function fromTo(t, e, r) {
        return Va(2, arguments);
      }),
      (Tween.set = function set(t, e) {
        return (
          (e.duration = 0), e.repeatDelay || (e.repeat = 0), new Tween(t, e)
        );
      }),
      (Tween.killTweensOf = function killTweensOf(t, e, r) {
        return I.killTweensOf(t, e, r);
      }),
      Tween
    );
  })(Ut);
  qa($t.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    ha("staggerTo,staggerFrom,staggerFromTo", function (r) {
      $t[r] = function () {
        var t = new Xt(),
          e = kt.call(arguments, 0);
        return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
      };
    });
  function oc(t, e, r) {
    return t.setAttribute(e, r);
  }
  function wc(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  }
  var Zt = function _setterPlain(t, e, r) {
      return (t[e] = r);
    },
    te = function _setterFunc(t, e, r) {
      return t[e](r);
    },
    re = function _setterFuncWithParam(t, e, r, i) {
      return t[e](i.fp, r);
    },
    ne = function _getSetter(t, e) {
      return s(t[e]) ? te : u(t[e]) && t.setAttribute ? oc : Zt;
    },
    ae = function _renderPlain(t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
    },
    se = function _renderBoolean(t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    ue = function _renderComplexString(t, e) {
      var r = e._pt,
        i = "";
      if (!t && e.b) i = e.b;
      else if (1 === t && e.e) i = e.e;
      else {
        for (; r; )
          (i =
            r.p +
            (r.m
              ? r.m(r.s + r.c * t)
              : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
            i),
            (r = r._next);
        i += e.c;
      }
      e.set(e.t, e.p, i, e);
    },
    he = function _renderPropTweens(t, e) {
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    fe = function _addPluginModifier(t, e, r, i) {
      for (var n, a = this._pt; a; )
        (n = a._next), a.p === i && a.modifier(t, e, r), (a = n);
    },
    ce = function _killPropTweensOf(t) {
      for (var e, r, i = this._pt; i; )
        (r = i._next),
          (i.p === t && !i.op) || i.op === t
            ? ya(this, i, "_pt")
            : i.dep || (e = 1),
          (i = r);
      return !e;
    },
    pe = function _sortPropTweensByPriority(t) {
      for (var e, r, i, n, a = t._pt; a; ) {
        for (e = a._next, r = i; r && r.pr > a.pr; ) r = r._next;
        (a._prev = r ? r._prev : n) ? (a._prev._next = a) : (i = a),
          (a._next = r) ? (r._prev = a) : (n = a),
          (a = e);
      }
      t._pt = i;
    },
    _e =
      ((PropTween.prototype.modifier = function modifier(t, e, r) {
        (this.mSet = this.mSet || this.set),
          (this.set = wc),
          (this.m = t),
          (this.mt = r),
          (this.tween = e);
      }),
      PropTween);
  function PropTween(t, e, r, i, n, a, s, o, u) {
    (this.t = e),
      (this.s = i),
      (this.c = n),
      (this.p = r),
      (this.r = a || ae),
      (this.d = s || this),
      (this.set = o || Zt),
      (this.pr = u || 0),
      (this._next = t) && (t._prev = this);
  }
  ha(
    vt +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (ft[t] = 1);
    }
  ),
    (ot.TweenMax = ot.TweenLite = $t),
    (ot.TimelineLite = ot.TimelineMax = Xt),
    (I = new Xt({
      sortChildren: !1,
      defaults: V,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (q.stringFilter = Fb);
  function Ec(t) {
    return (ye[t] || Te).map(function (t) {
      return t();
    });
  }
  function Fc() {
    var t = Date.now(),
      o = [];
    2 < t - Oe &&
      (Ec("matchMediaInit"),
      ge.forEach(function (t) {
        var e,
          r,
          i,
          n,
          a = t.queries,
          s = t.conditions;
        for (r in a)
          (e = h.matchMedia(a[r]).matches) && (i = 1),
            e !== s[r] && ((s[r] = e), (n = 1));
        n && (t.revert(), i && o.push(t));
      }),
      Ec("matchMediaRevert"),
      o.forEach(function (e) {
        return e.onMatch(e, function (t) {
          return e.add(null, t);
        });
      }),
      (Oe = t),
      Ec("matchMedia"));
  }
  var me,
    ge = [],
    ye = {},
    Te = [],
    Oe = 0,
    Me = 0,
    Pe =
      (((me = Context.prototype).add = function add(t, i, n) {
        function Gw() {
          var t,
            e = l,
            r = a.selector;
          return (
            e && e !== a && e.data.push(a),
            n && (a.selector = cb(n)),
            (l = a),
            (t = i.apply(a, arguments)),
            s(t) && a._r.push(t),
            (l = e),
            (a.selector = r),
            (a.isReverted = !1),
            t
          );
        }
        s(t) && ((n = i), (i = t), (t = s));
        var a = this;
        return (
          (a.last = Gw),
          t === s
            ? Gw(a, function (t) {
                return a.add(null, t);
              })
            : t
            ? (a[t] = Gw)
            : Gw
        );
      }),
      (me.ignore = function ignore(t) {
        var e = l;
        (l = null), t(this), (l = e);
      }),
      (me.getTweens = function getTweens() {
        var e = [];
        return (
          this.data.forEach(function (t) {
            return t instanceof Context
              ? e.push.apply(e, t.getTweens())
              : t instanceof $t &&
                  !(t.parent && "nested" === t.parent.data) &&
                  e.push(t);
          }),
          e
        );
      }),
      (me.clear = function clear() {
        this._r.length = this.data.length = 0;
      }),
      (me.kill = function kill(i, t) {
        var n = this;
        if (
          (i
            ? (function () {
                for (var t, e = n.getTweens(), r = n.data.length; r--; )
                  "isFlip" === (t = n.data[r]).data &&
                    (t.revert(),
                    t.getChildren(!0, !0, !1).forEach(function (t) {
                      return e.splice(e.indexOf(t), 1);
                    }));
                for (
                  e
                    .map(function (t) {
                      return {
                        g:
                          t._dur ||
                          t._delay ||
                          (t._sat && !t._sat.vars.immediateRender)
                            ? t.globalTime(0)
                            : -1 / 0,
                        t: t,
                      };
                    })
                    .sort(function (t, e) {
                      return e.g - t.g || -1 / 0;
                    })
                    .forEach(function (t) {
                      return t.t.revert(i);
                    }),
                    r = n.data.length;
                  r--;

                )
                  (t = n.data[r]) instanceof Xt
                    ? "nested" !== t.data &&
                      (t.scrollTrigger && t.scrollTrigger.revert(), t.kill())
                    : t instanceof $t || !t.revert || t.revert(i);
                n._r.forEach(function (t) {
                  return t(i, n);
                }),
                  (n.isReverted = !0);
              })()
            : this.data.forEach(function (t) {
                return t.kill && t.kill();
              }),
          this.clear(),
          t)
        )
          for (var e = ge.length; e--; )
            ge[e].id === this.id && ge.splice(e, 1);
      }),
      (me.revert = function revert(t) {
        this.kill(t || {});
      }),
      Context);
  function Context(t, e) {
    (this.selector = e && cb(e)),
      (this.data = []),
      (this._r = []),
      (this.isReverted = !1),
      (this.id = Me++),
      t && this.add(t);
  }
  var Ce,
    Ae =
      (((Ce = MatchMedia.prototype).add = function add(t, e, r) {
        v(t) || (t = { matches: t });
        var i,
          n,
          a,
          s = new Pe(0, r || this.scope),
          o = (s.conditions = {});
        for (n in (l && !s.selector && (s.selector = l.selector),
        this.contexts.push(s),
        (e = s.add("onMatch", e)),
        (s.queries = t)))
          "all" === n
            ? (a = 1)
            : (i = h.matchMedia(t[n])) &&
              (ge.indexOf(s) < 0 && ge.push(s),
              (o[n] = i.matches) && (a = 1),
              i.addListener
                ? i.addListener(Fc)
                : i.addEventListener("change", Fc));
        return (
          a &&
            e(s, function (t) {
              return s.add(null, t);
            }),
          this
        );
      }),
      (Ce.revert = function revert(t) {
        this.kill(t || {});
      }),
      (Ce.kill = function kill(e) {
        this.contexts.forEach(function (t) {
          return t.kill(e, !0);
        });
      }),
      MatchMedia);
  function MatchMedia(t) {
    (this.contexts = []), (this.scope = t), l && l.data.push(this);
  }
  var Se = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
      e.forEach(function (t) {
        return wb(t);
      });
    },
    timeline: function timeline(t) {
      return new Xt(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return I.getTweensOf(t, e);
    },
    getProperty: function getProperty(i, t, e, n) {
      r(i) && (i = Mt(i)[0]);
      var a = fa(i || {}).get,
        s = e ? pa : oa;
      return (
        "native" === e && (e = ""),
        i
          ? t
            ? s(((pt[t] && pt[t].get) || a)(i, t, e, n))
            : function (t, e, r) {
                return s(((pt[t] && pt[t].get) || a)(i, t, e, r));
              }
          : i
      );
    },
    quickSetter: function quickSetter(r, e, i) {
      if (1 < (r = Mt(r)).length) {
        var n = r.map(function (t) {
            return ze.quickSetter(t, e, i);
          }),
          a = n.length;
        return function (t) {
          for (var e = a; e--; ) n[e](t);
        };
      }
      r = r[0] || {};
      var s = pt[e],
        o = fa(r),
        u = (o.harness && (o.harness.aliases || {})[e]) || e,
        h = s
          ? function (t) {
              var e = new s();
              (d._pt = 0),
                e.init(r, i ? t + i : t, d, 0, [r]),
                e.render(1, e),
                d._pt && he(1, d);
            }
          : o.set(r, u);
      return s
        ? h
        : function (t) {
            return h(r, u, i ? t + i : t, o, 1);
          };
    },
    quickTo: function quickTo(t, i, e) {
      function $x(t, e, r) {
        return n.resetTo(i, t, e, r);
      }
      var r,
        n = ze.to(
          t,
          yt((((r = {})[i] = "+=0.1"), (r.paused = !0), r), e || {})
        );
      return ($x.tween = n), $x;
    },
    isTweening: function isTweening(t) {
      return 0 < I.getTweensOf(t, !0).length;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = jt(t.ease, V.ease)), ta(V, t || {});
    },
    config: function config(t) {
      return ta(q, t || {});
    },
    registerEffect: function registerEffect(t) {
      var i = t.name,
        n = t.effect,
        e = t.plugins,
        a = t.defaults,
        r = t.extendTimeline;
      (e || "").split(",").forEach(function (t) {
        return (
          t && !pt[t] && !ot[t] && R(i + " effect requires " + t + " plugin.")
        );
      }),
        (_t[i] = function (t, e, r) {
          return n(Mt(t), qa(e || {}, a), r);
        }),
        r &&
          (Xt.prototype[i] = function (t, e, r) {
            return this.add(_t[i](t, v(e) ? e : (r = e) && {}, this), r);
          });
    },
    registerEase: function registerEase(t, e) {
      Lt[t] = jt(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? jt(t, e) : Lt;
    },
    getById: function getById(t) {
      return I.getById(t);
    },
    exportRoot: function exportRoot(t, e) {
      void 0 === t && (t = {});
      var r,
        i,
        n = new Xt(t);
      for (
        n.smoothChildTiming = w(t.smoothChildTiming),
          I.remove(n),
          n._dp = 0,
          n._time = n._tTime = I._time,
          r = I._first;
        r;

      )
        (i = r._next),
          (!e &&
            !r._dur &&
            r instanceof $t &&
            r.vars.onComplete === r._targets[0]) ||
            Ka(n, r, r._start - r._delay),
          (r = i);
      return Ka(I, n, 0), n;
    },
    context: function context(t, e) {
      return t ? new Pe(t, e) : l;
    },
    matchMedia: function matchMedia(t) {
      return new Ae(t);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return (
        ge.forEach(function (t) {
          var e,
            r,
            i = t.conditions;
          for (r in i) i[r] && ((i[r] = !1), (e = 1));
          e && t.revert();
        }) || Fc()
      );
    },
    addEventListener: function addEventListener(t, e) {
      var r = ye[t] || (ye[t] = []);
      ~r.indexOf(e) || r.push(e);
    },
    removeEventListener: function removeEventListener(t, e) {
      var r = ye[t],
        i = r && r.indexOf(e);
      0 <= i && r.splice(i, 1);
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var i = t - e;
        return Z(e)
          ? lb(e, wrap(0, e.length), t)
          : Wa(r, function (t) {
              return ((i + ((t - e) % i)) % i) + e;
            });
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var i = t - e,
          n = 2 * i;
        return Z(e)
          ? lb(e, wrapYoyo(0, e.length - 1), t)
          : Wa(r, function (t) {
              return e + (i < (t = (n + ((t - e) % n)) % n || 0) ? n - t : t);
            });
      },
      distribute: eb,
      random: hb,
      snap: gb,
      normalize: function normalize(t, e, r) {
        return Pt(t, e, 0, 1, r);
      },
      getUnit: Ya,
      clamp: function clamp(e, r, t) {
        return Wa(t, function (t) {
          return Ot(e, r, t);
        });
      },
      splitColor: Ab,
      toArray: Mt,
      selector: cb,
      mapRange: Pt,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || Ya(t));
        };
      },
      interpolate: function interpolate(e, i, t, n) {
        var a = isNaN(e + i)
          ? 0
          : function (t) {
              return (1 - t) * e + t * i;
            };
        if (!a) {
          var s,
            o,
            u,
            h,
            l,
            f = r(e),
            d = {};
          if ((!0 === t && (n = 1) && (t = null), f))
            (e = { p: e }), (i = { p: i });
          else if (Z(e) && !Z(i)) {
            for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++)
              u.push(interpolate(e[o - 1], e[o]));
            h--,
              (a = function func(t) {
                t *= h;
                var e = Math.min(l, ~~t);
                return u[e](t - e);
              }),
              (t = i);
          } else n || (e = yt(Z(e) ? [] : {}, e));
          if (!u) {
            for (s in i) Wt.call(d, e, s, "get", i[s]);
            a = function func(t) {
              return he(t, d) || (f ? e.p : e);
            };
          }
        }
        return Wa(t, a);
      },
      shuffle: db,
    },
    install: P,
    effects: _t,
    ticker: Rt,
    updateRoot: Xt.updateRoot,
    plugins: pt,
    globalTimeline: I,
    core: {
      PropTween: _e,
      globals: S,
      Tween: $t,
      Timeline: Xt,
      Animation: Ut,
      getCache: fa,
      _removeLinkedListItem: ya,
      reverting: function reverting() {
        return L;
      },
      context: function context(t) {
        return t && l && (l.data.push(t), (t._ctx = l)), l;
      },
      suppressOverwrites: function suppressOverwrites(t) {
        return (F = t);
      },
    },
  };
  ha("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (Se[t] = $t[t]);
  }),
    Rt.add(Xt.updateRoot),
    (d = Se.to({}, { duration: 0 }));
  function Jc(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
      r = r._next;
    return r;
  }
  function Lc(t, a) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, n, e) {
        e._onInit = function (t) {
          var e, i;
          if (
            (r(n) &&
              ((e = {}),
              ha(n, function (t) {
                return (e[t] = 1);
              }),
              (n = e)),
            a)
          ) {
            for (i in ((e = {}), n)) e[i] = a(n[i]);
            n = e;
          }
          !(function _addModifiers(t, e) {
            var r,
              i,
              n,
              a = t._targets;
            for (r in e)
              for (i = a.length; i--; )
                (n = (n = t._ptLookup[i][r]) && n.d) &&
                  (n._pt && (n = Jc(n, r)),
                  n && n.modifier && n.modifier(e[r], t, a[i], r));
          })(t, n);
        };
      },
    };
  }
  var ze =
    Se.registerPlugin(
      {
        name: "attr",
        init: function init(t, e, r, i, n) {
          var a, s, o;
          for (a in ((this.tween = r), e))
            (o = t.getAttribute(a) || ""),
              ((s = this.add(
                t,
                "setAttribute",
                (o || 0) + "",
                e[a],
                i,
                n,
                0,
                0,
                a
              )).op = a),
              (s.b = o),
              this._props.push(a);
        },
        render: function render(t, e) {
          for (var r = e._pt; r; )
            L ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
        },
      },
      {
        name: "endArray",
        init: function init(t, e) {
          for (var r = e.length; r--; )
            this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
        },
      },
      Lc("roundProps", fb),
      Lc("modifiers"),
      Lc("snap", gb)
    ) || Se;
  ($t.version = Xt.version = ze.version = "3.12.5"), (o = 1), x() && Ft();
  function vd(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function wd(t, e) {
    return e.set(
      e.t,
      e.p,
      1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
      e
    );
  }
  function xd(t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
      e
    );
  }
  function yd(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
  }
  function zd(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }
  function Ad(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }
  function Bd(t, e, r) {
    return (t.style[e] = r);
  }
  function Cd(t, e, r) {
    return t.style.setProperty(e, r);
  }
  function Dd(t, e, r) {
    return (t._gsap[e] = r);
  }
  function Ed(t, e, r) {
    return (t._gsap.scaleX = t._gsap.scaleY = r);
  }
  function Fd(t, e, r, i, n) {
    var a = t._gsap;
    (a.scaleX = a.scaleY = r), a.renderTransform(n, a);
  }
  function Gd(t, e, r, i, n) {
    var a = t._gsap;
    (a[e] = r), a.renderTransform(n, a);
  }
  function Jd(t, e) {
    var r = this,
      i = this.target,
      n = i.style,
      a = i._gsap;
    if (t in ar && n) {
      if (((this.tfm = this.tfm || {}), "transform" === t))
        return dr.transform.split(",").forEach(function (t) {
          return Jd.call(r, t, e);
        });
      if (
        (~(t = dr[t] || t).indexOf(",")
          ? t.split(",").forEach(function (t) {
              return (r.tfm[t] = yr(i, t));
            })
          : (this.tfm[t] = a.x ? a[t] : yr(i, t)),
        t === pr && (this.tfm.zOrigin = a.zOrigin),
        0 <= this.props.indexOf(cr))
      )
        return;
      a.svg &&
        ((this.svgo = i.getAttribute("data-svg-origin")),
        this.props.push(pr, e, "")),
        (t = cr);
    }
    (n || e) && this.props.push(t, e, n[t]);
  }
  function Kd(t) {
    t.translate &&
      (t.removeProperty("translate"),
      t.removeProperty("scale"),
      t.removeProperty("rotate"));
  }
  function Ld() {
    var t,
      e,
      r = this.props,
      i = this.target,
      n = i.style,
      a = i._gsap;
    for (t = 0; t < r.length; t += 3)
      r[t + 1]
        ? (i[r[t]] = r[t + 2])
        : r[t + 2]
        ? (n[r[t]] = r[t + 2])
        : n.removeProperty(
            "--" === r[t].substr(0, 2)
              ? r[t]
              : r[t].replace(hr, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (e in this.tfm) a[e] = this.tfm[e];
      a.svg &&
        (a.renderTransform(),
        i.setAttribute("data-svg-origin", this.svgo || "")),
        ((t = Be()) && t.isStart) ||
          n[cr] ||
          (Kd(n),
          a.zOrigin &&
            n[pr] &&
            ((n[pr] += " " + a.zOrigin + "px"),
            (a.zOrigin = 0),
            a.renderTransform()),
          (a.uncache = 1));
    }
  }
  function Md(t, e) {
    var r = { target: t, props: [], revert: Ld, save: Jd };
    return (
      t._gsap || ze.core.getCache(t),
      e &&
        e.split(",").forEach(function (t) {
          return r.save(t);
        }),
      r
    );
  }
  function Od(t, e) {
    var r = De.createElementNS
      ? De.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : De.createElement(t);
    return r && r.style ? r : De.createElement(t);
  }
  function Pd(t, e, r) {
    var i = getComputedStyle(t);
    return (
      i[e] ||
      i.getPropertyValue(e.replace(hr, "-$1").toLowerCase()) ||
      i.getPropertyValue(e) ||
      (!r && Pd(t, mr(e) || e, 1)) ||
      ""
    );
  }
  function Sd() {
    (function _windowExists() {
      return "undefined" != typeof window;
    })() &&
      window.document &&
      ((Ee = window),
      (De = Ee.document),
      (Re = De.documentElement),
      (Le = Od("div") || { style: {} }),
      Od("div"),
      (cr = mr(cr)),
      (pr = cr + "Origin"),
      (Le.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Ye = !!mr("perspective")),
      (Be = ze.core.reverting),
      (Fe = 1));
  }
  function Td(t) {
    var e,
      r = Od(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      i = this.parentNode,
      n = this.nextSibling,
      a = this.style.cssText;
    if (
      (Re.appendChild(r),
      r.appendChild(this),
      (this.style.display = "block"),
      t)
    )
      try {
        (e = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = Td);
      } catch (t) {}
    else this._gsapBBox && (e = this._gsapBBox());
    return (
      i && (n ? i.insertBefore(this, n) : i.appendChild(this)),
      Re.removeChild(r),
      (this.style.cssText = a),
      e
    );
  }
  function Ud(t, e) {
    for (var r = e.length; r--; )
      if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  }
  function Vd(e) {
    var r;
    try {
      r = e.getBBox();
    } catch (t) {
      r = Td.call(e, !0);
    }
    return (
      (r && (r.width || r.height)) || e.getBBox === Td || (r = Td.call(e, !0)),
      !r || r.width || r.x || r.y
        ? r
        : {
            x: +Ud(e, ["x", "cx", "x1"]) || 0,
            y: +Ud(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
    );
  }
  function Wd(t) {
    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Vd(t));
  }
  function Xd(t, e) {
    if (e) {
      var r,
        i = t.style;
      e in ar && e !== pr && (e = cr),
        i.removeProperty
          ? (("ms" !== (r = e.substr(0, 2)) && "webkit" !== e.substr(0, 6)) ||
              (e = "-" + e),
            i.removeProperty(
              "--" === r ? e : e.replace(hr, "-$1").toLowerCase()
            ))
          : i.removeAttribute(e);
    }
  }
  function Yd(t, e, r, i, n, a) {
    var s = new _e(t._pt, e, r, 0, 1, a ? Ad : zd);
    return ((t._pt = s).b = i), (s.e = n), t._props.push(r), s;
  }
  function _d(t, e, r, i) {
    var n,
      a,
      s,
      o,
      u = parseFloat(r) || 0,
      h = (r + "").trim().substr((u + "").length) || "px",
      l = Le.style,
      f = lr.test(e),
      d = "svg" === t.tagName.toLowerCase(),
      c = (d ? "client" : "offset") + (f ? "Width" : "Height"),
      p = "px" === i,
      _ = "%" === i;
    if (i === h || !u || gr[i] || gr[h]) return u;
    if (
      ("px" === h || p || (u = _d(t, e, r, "px")),
      (o = t.getCTM && Wd(t)),
      (_ || "%" === h) && (ar[e] || ~e.indexOf("adius")))
    )
      return (
        (n = o ? t.getBBox()[f ? "width" : "height"] : t[c]),
        ia(_ ? (u / n) * 100 : (u / 100) * n)
      );
    if (
      ((l[f ? "width" : "height"] = 100 + (p ? h : i)),
      (a =
        ~e.indexOf("adius") || ("em" === i && t.appendChild && !d)
          ? t
          : t.parentNode),
      o && (a = (t.ownerSVGElement || {}).parentNode),
      (a && a !== De && a.appendChild) || (a = De.body),
      (s = a._gsap) && _ && s.width && f && s.time === Rt.time && !s.uncache)
    )
      return ia((u / s.width) * 100);
    if (!_ || ("height" !== e && "width" !== e))
      (!_ && "%" !== h) ||
        vr[Pd(a, "display")] ||
        (l.position = Pd(t, "position")),
        a === t && (l.position = "static"),
        a.appendChild(Le),
        (n = Le[c]),
        a.removeChild(Le),
        (l.position = "absolute");
    else {
      var m = t.style[e];
      (t.style[e] = 100 + i), (n = t[c]), m ? (t.style[e] = m) : Xd(t, e);
    }
    return (
      f && _ && (((s = fa(a)).time = Rt.time), (s.width = a[c])),
      ia(p ? (n * u) / 100 : n && u ? (100 / n) * u : 0)
    );
  }
  function be(t, e, r, i) {
    if (!r || "none" === r) {
      var n = mr(e, t, 1),
        a = n && Pd(t, n, 1);
      a && a !== r
        ? ((e = n), (r = a))
        : "borderColor" === e && (r = Pd(t, "borderTopColor"));
    }
    var s,
      o,
      u,
      h,
      l,
      f,
      d,
      c,
      p,
      _,
      m,
      g = new _e(this._pt, t.style, e, 0, 1, ue),
      v = 0,
      y = 0;
    if (
      ((g.b = r),
      (g.e = i),
      (r += ""),
      "auto" === (i += "") &&
        ((f = t.style[e]),
        (t.style[e] = i),
        (i = Pd(t, e) || i),
        f ? (t.style[e] = f) : Xd(t, e)),
      Fb((s = [r, i])),
      (i = s[1]),
      (u = (r = s[0]).match(rt) || []),
      (i.match(rt) || []).length)
    ) {
      for (; (o = rt.exec(i)); )
        (d = o[0]),
          (p = i.substring(v, o.index)),
          l
            ? (l = (l + 1) % 5)
            : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) || (l = 1),
          d !== (f = u[y++] || "") &&
            ((h = parseFloat(f) || 0),
            (m = f.substr((h + "").length)),
            "=" === d.charAt(1) && (d = ka(h, d) + m),
            (c = parseFloat(d)),
            (_ = d.substr((c + "").length)),
            (v = rt.lastIndex - _.length),
            _ ||
              ((_ = _ || q.units[e] || m),
              v === i.length && ((i += _), (g.e += _))),
            m !== _ && (h = _d(t, e, f, _) || 0),
            (g._pt = {
              _next: g._pt,
              p: p || 1 === y ? p : ",",
              s: h,
              c: c - h,
              m: (l && l < 4) || "zIndex" === e ? Math.round : 0,
            }));
      g.c = v < i.length ? i.substring(v, i.length) : "";
    } else g.r = "display" === e && "none" === i ? Ad : zd;
    return nt.test(i) && (g.e = 0), (this._pt = g);
  }
  function de(t) {
    var e = t.split(" "),
      r = e[0],
      i = e[1] || "50%";
    return (
      ("top" !== r && "bottom" !== r && "left" !== i && "right" !== i) ||
        ((t = r), (r = i), (i = t)),
      (e[0] = Tr[r] || r),
      (e[1] = Tr[i] || i),
      e.join(" ")
    );
  }
  function ee(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
        i,
        n,
        a = e.t,
        s = a.style,
        o = e.u,
        u = a._gsap;
      if ("all" === o || !0 === o) (s.cssText = ""), (i = 1);
      else
        for (n = (o = o.split(",")).length; -1 < --n; )
          (r = o[n]),
            ar[r] && ((i = 1), (r = "transformOrigin" === r ? pr : cr)),
            Xd(a, r);
      i &&
        (Xd(a, cr),
        u &&
          (u.svg && a.removeAttribute("transform"),
          Or(a, 1),
          (u.uncache = 1),
          Kd(s)));
    }
  }
  function ie(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }
  function je(t) {
    var e = Pd(t, cr);
    return ie(e) ? wr : e.substr(7).match(et).map(ia);
  }
  function ke(t, e) {
    var r,
      i,
      n,
      a,
      s = t._gsap || fa(t),
      o = t.style,
      u = je(t);
    return s.svg && t.getAttribute("transform")
      ? "1,0,0,1,0,0" ===
        (u = [
          (n = t.transform.baseVal.consolidate().matrix).a,
          n.b,
          n.c,
          n.d,
          n.e,
          n.f,
        ]).join(",")
        ? wr
        : u
      : (u !== wr ||
          t.offsetParent ||
          t === Re ||
          s.svg ||
          ((n = o.display),
          (o.display = "block"),
          ((r = t.parentNode) && t.offsetParent) ||
            ((a = 1), (i = t.nextElementSibling), Re.appendChild(t)),
          (u = je(t)),
          n ? (o.display = n) : Xd(t, "display"),
          a &&
            (i
              ? r.insertBefore(t, i)
              : r
              ? r.appendChild(t)
              : Re.removeChild(t))),
        e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }
  function le(t, e, r, i, n, a) {
    var s,
      o,
      u,
      h = t._gsap,
      l = n || ke(t, !0),
      f = h.xOrigin || 0,
      d = h.yOrigin || 0,
      c = h.xOffset || 0,
      p = h.yOffset || 0,
      _ = l[0],
      m = l[1],
      g = l[2],
      v = l[3],
      y = l[4],
      T = l[5],
      b = e.split(" "),
      w = parseFloat(b[0]) || 0,
      x = parseFloat(b[1]) || 0;
    r
      ? l !== wr &&
        (o = _ * v - m * g) &&
        ((u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o),
        (w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o),
        (x = u))
      : ((w = (s = Vd(t)).x + (~b[0].indexOf("%") ? (w / 100) * s.width : w)),
        (x = s.y + (~(b[1] || b[0]).indexOf("%") ? (x / 100) * s.height : x))),
      i || (!1 !== i && h.smooth)
        ? ((y = w - f),
          (T = x - d),
          (h.xOffset = c + (y * _ + T * g) - y),
          (h.yOffset = p + (y * m + T * v) - T))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = w),
      (h.yOrigin = x),
      (h.smooth = !!i),
      (h.origin = e),
      (h.originIsAbsolute = !!r),
      (t.style[pr] = "0px 0px"),
      a &&
        (Yd(a, h, "xOrigin", f, w),
        Yd(a, h, "yOrigin", d, x),
        Yd(a, h, "xOffset", c, h.xOffset),
        Yd(a, h, "yOffset", p, h.yOffset)),
      t.setAttribute("data-svg-origin", w + " " + x);
  }
  function oe(t, e, r) {
    var i = Ya(e);
    return ia(parseFloat(e) + parseFloat(_d(t, "x", r + "px", i))) + i;
  }
  function ve(t, e, i, n, a) {
    var s,
      o,
      u = 360,
      h = r(a),
      l = parseFloat(a) * (h && ~a.indexOf("rad") ? sr : 1) - n,
      f = n + l + "deg";
    return (
      h &&
        ("short" === (s = a.split("_")[1]) &&
          (l %= u) !== l % 180 &&
          (l += l < 0 ? u : -u),
        "cw" === s && l < 0
          ? (l = ((l + 36e9) % u) - ~~(l / u) * u)
          : "ccw" === s && 0 < l && (l = ((l - 36e9) % u) - ~~(l / u) * u)),
      (t._pt = o = new _e(t._pt, e, i, n, l, wd)),
      (o.e = f),
      (o.u = "deg"),
      t._props.push(i),
      o
    );
  }
  function we(t, e) {
    for (var r in e) t[r] = e[r];
    return t;
  }
  function xe(t, e, r) {
    var i,
      n,
      a,
      s,
      o,
      u,
      h,
      l = we({}, r._gsap),
      f = r.style;
    for (n in (l.svg
      ? ((a = r.getAttribute("transform")),
        r.setAttribute("transform", ""),
        (f[cr] = e),
        (i = Or(r, 1)),
        Xd(r, cr),
        r.setAttribute("transform", a))
      : ((a = getComputedStyle(r)[cr]),
        (f[cr] = e),
        (i = Or(r, 1)),
        (f[cr] = a)),
    ar))
      (a = l[n]) !== (s = i[n]) &&
        "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
        ((o = Ya(a) !== (h = Ya(s)) ? _d(r, n, a, h) : parseFloat(a)),
        (u = parseFloat(s)),
        (t._pt = new _e(t._pt, i, n, o, u - o, vd)),
        (t._pt.u = h || 0),
        t._props.push(n));
    we(i, l);
  }
  var Ee,
    De,
    Re,
    Fe,
    Le,
    Ie,
    Be,
    Ye,
    qe = Lt.Power0,
    Ve = Lt.Power1,
    Ue = Lt.Power2,
    Xe = Lt.Power3,
    Ne = Lt.Power4,
    Ge = Lt.Linear,
    We = Lt.Quad,
    Qe = Lt.Cubic,
    Ke = Lt.Quart,
    Je = Lt.Quint,
    He = Lt.Strong,
    $e = Lt.Elastic,
    Ze = Lt.Back,
    tr = Lt.SteppedEase,
    er = Lt.Bounce,
    rr = Lt.Sine,
    ir = Lt.Expo,
    nr = Lt.Circ,
    ar = {},
    sr = 180 / Math.PI,
    or = Math.PI / 180,
    ur = Math.atan2,
    hr = /([A-Z])/g,
    lr = /(left|right|width|margin|padding|x)/i,
    fr = /[\s,\(]\S/,
    dr = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    cr = "transform",
    pr = cr + "Origin",
    _r = "O,Moz,ms,Ms,Webkit".split(","),
    mr = function _checkPropPrefix(t, e, r) {
      var i = (e || Le).style,
        n = 5;
      if (t in i && !r) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        n-- && !(_r[n] + t in i);

      );
      return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? _r[n] : "") + t;
    },
    gr = { deg: 1, rad: 1, turn: 1 },
    vr = { grid: 1, flex: 1 },
    yr = function _get(t, e, r, i) {
      var n;
      return (
        Fe || Sd(),
        e in dr &&
          "transform" !== e &&
          ~(e = dr[e]).indexOf(",") &&
          (e = e.split(",")[0]),
        ar[e] && "transform" !== e
          ? ((n = Or(t, i)),
            (n =
              "transformOrigin" !== e
                ? n[e]
                : n.svg
                ? n.origin
                : kr(Pd(t, pr)) + " " + n.zOrigin + "px"))
          : ((n = t.style[e]) &&
              "auto" !== n &&
              !i &&
              !~(n + "").indexOf("calc(")) ||
            (n =
              (br[e] && br[e](t, e, r)) ||
              Pd(t, e) ||
              ga(t, e) ||
              ("opacity" === e ? 1 : 0)),
        r && !~(n + "").trim().indexOf(" ") ? _d(t, e, n, r) + r : n
      );
    },
    Tr = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    br = {
      clearProps: function clearProps(t, e, r, i, n) {
        if ("isFromStart" !== n.data) {
          var a = (t._pt = new _e(t._pt, e, r, 0, 0, ee));
          return (a.u = i), (a.pr = -10), (a.tween = n), t._props.push(r), 1;
        }
      },
    },
    wr = [1, 0, 0, 1, 0, 0],
    xr = {},
    Or = function _parseTransform(t, e) {
      var r = t._gsap || new Vt(t);
      if ("x" in r && !e && !r.uncache) return r;
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p,
        _,
        m,
        g,
        v,
        y,
        T,
        b,
        w,
        x,
        O,
        k,
        M,
        P,
        C,
        A,
        S,
        z,
        E,
        D,
        R,
        F = t.style,
        L = r.scaleX < 0,
        I = "deg",
        B = getComputedStyle(t),
        Y = Pd(t, pr) || "0";
      return (
        (i = n = a = u = h = l = f = d = c = 0),
        (s = o = 1),
        (r.svg = !(!t.getCTM || !Wd(t))),
        B.translate &&
          (("none" === B.translate &&
            "none" === B.scale &&
            "none" === B.rotate) ||
            (F[cr] =
              ("none" !== B.translate
                ? "translate3d(" +
                  (B.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              ("none" !== B.rotate ? "rotate(" + B.rotate + ") " : "") +
              ("none" !== B.scale
                ? "scale(" + B.scale.split(" ").join(",") + ") "
                : "") +
              ("none" !== B[cr] ? B[cr] : "")),
          (F.scale = F.rotate = F.translate = "none")),
        (m = ke(t, r.svg)),
        r.svg &&
          ((M = r.uncache
            ? ((P = t.getBBox()),
              (Y = r.xOrigin - P.x + "px " + (r.yOrigin - P.y) + "px"),
              "")
            : !e && t.getAttribute("data-svg-origin")),
          le(t, M || Y, !!M || r.originIsAbsolute, !1 !== r.smooth, m)),
        (p = r.xOrigin || 0),
        (_ = r.yOrigin || 0),
        m !== wr &&
          ((T = m[0]),
          (b = m[1]),
          (w = m[2]),
          (x = m[3]),
          (i = O = m[4]),
          (n = k = m[5]),
          6 === m.length
            ? ((s = Math.sqrt(T * T + b * b)),
              (o = Math.sqrt(x * x + w * w)),
              (u = T || b ? ur(b, T) * sr : 0),
              (f = w || x ? ur(w, x) * sr + u : 0) &&
                (o *= Math.abs(Math.cos(f * or))),
              r.svg && ((i -= p - (p * T + _ * w)), (n -= _ - (p * b + _ * x))))
            : ((R = m[6]),
              (E = m[7]),
              (A = m[8]),
              (S = m[9]),
              (z = m[10]),
              (D = m[11]),
              (i = m[12]),
              (n = m[13]),
              (a = m[14]),
              (h = (g = ur(R, z)) * sr),
              g &&
                ((M = O * (v = Math.cos(-g)) + A * (y = Math.sin(-g))),
                (P = k * v + S * y),
                (C = R * v + z * y),
                (A = O * -y + A * v),
                (S = k * -y + S * v),
                (z = R * -y + z * v),
                (D = E * -y + D * v),
                (O = M),
                (k = P),
                (R = C)),
              (l = (g = ur(-w, z)) * sr),
              g &&
                ((v = Math.cos(-g)),
                (D = x * (y = Math.sin(-g)) + D * v),
                (T = M = T * v - A * y),
                (b = P = b * v - S * y),
                (w = C = w * v - z * y)),
              (u = (g = ur(b, T)) * sr),
              g &&
                ((M = T * (v = Math.cos(g)) + b * (y = Math.sin(g))),
                (P = O * v + k * y),
                (b = b * v - T * y),
                (k = k * v - O * y),
                (T = M),
                (O = P)),
              h &&
                359.9 < Math.abs(h) + Math.abs(u) &&
                ((h = u = 0), (l = 180 - l)),
              (s = ia(Math.sqrt(T * T + b * b + w * w))),
              (o = ia(Math.sqrt(k * k + R * R))),
              (g = ur(O, k)),
              (f = 2e-4 < Math.abs(g) ? g * sr : 0),
              (c = D ? 1 / (D < 0 ? -D : D) : 0)),
          r.svg &&
            ((M = t.getAttribute("transform")),
            (r.forceCSS = t.setAttribute("transform", "") || !ie(Pd(t, cr))),
            M && t.setAttribute("transform", M))),
        90 < Math.abs(f) &&
          Math.abs(f) < 270 &&
          (L
            ? ((s *= -1),
              (f += u <= 0 ? 180 : -180),
              (u += u <= 0 ? 180 : -180))
            : ((o *= -1), (f += f <= 0 ? 180 : -180))),
        (e = e || r.uncache),
        (r.x =
          i -
          ((r.xPercent =
            i &&
            ((!e && r.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
            ? (t.offsetWidth * r.xPercent) / 100
            : 0) +
          "px"),
        (r.y =
          n -
          ((r.yPercent =
            n &&
            ((!e && r.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0)))
            ? (t.offsetHeight * r.yPercent) / 100
            : 0) +
          "px"),
        (r.z = a + "px"),
        (r.scaleX = ia(s)),
        (r.scaleY = ia(o)),
        (r.rotation = ia(u) + I),
        (r.rotationX = ia(h) + I),
        (r.rotationY = ia(l) + I),
        (r.skewX = f + I),
        (r.skewY = d + I),
        (r.transformPerspective = c + "px"),
        (r.zOrigin = parseFloat(Y.split(" ")[2]) || (!e && r.zOrigin) || 0) &&
          (F[pr] = kr(Y)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = q.force3D),
        (r.renderTransform = r.svg ? zr : Ye ? Sr : Mr),
        (r.uncache = 0),
        r
      );
    },
    kr = function _firstTwoOnly(t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Mr = function _renderNon3DTransforms(t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        Sr(t, e);
    },
    Pr = "0deg",
    Cr = "0px",
    Ar = ") ",
    Sr = function _renderCSSTransforms(t, e) {
      var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        d = r.skewY,
        c = r.scaleX,
        p = r.scaleY,
        _ = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        T = ("auto" === m && t && 1 !== t) || !0 === m;
      if (v && (l !== Pr || h !== Pr)) {
        var b,
          w = parseFloat(h) * or,
          x = Math.sin(w),
          O = Math.cos(w);
        (w = parseFloat(l) * or),
          (b = Math.cos(w)),
          (a = oe(g, a, x * b * -v)),
          (s = oe(g, s, -Math.sin(w) * -v)),
          (o = oe(g, o, O * b * -v + v));
      }
      _ !== Cr && (y += "perspective(" + _ + Ar),
        (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
        (!T && a === Cr && s === Cr && o === Cr) ||
          (y +=
            o !== Cr || T
              ? "translate3d(" + a + ", " + s + ", " + o + ") "
              : "translate(" + a + ", " + s + Ar),
        u !== Pr && (y += "rotate(" + u + Ar),
        h !== Pr && (y += "rotateY(" + h + Ar),
        l !== Pr && (y += "rotateX(" + l + Ar),
        (f === Pr && d === Pr) || (y += "skew(" + f + ", " + d + Ar),
        (1 === c && 1 === p) || (y += "scale(" + c + ", " + p + Ar),
        (g.style[cr] = y || "translate(0, 0)");
    },
    zr = function _renderSVGTransforms(t, e) {
      var r,
        i,
        n,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        d = o.rotation,
        c = o.skewX,
        p = o.skewY,
        _ = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        T = o.xOffset,
        b = o.yOffset,
        w = o.forceCSS,
        x = parseFloat(l),
        O = parseFloat(f);
      (d = parseFloat(d)),
        (c = parseFloat(c)),
        (p = parseFloat(p)) && ((c += p = parseFloat(p)), (d += p)),
        d || c
          ? ((d *= or),
            (c *= or),
            (r = Math.cos(d) * _),
            (i = Math.sin(d) * _),
            (n = Math.sin(d - c) * -m),
            (a = Math.cos(d - c) * m),
            c &&
              ((p *= or),
              (s = Math.tan(c - p)),
              (n *= s = Math.sqrt(1 + s * s)),
              (a *= s),
              p &&
                ((s = Math.tan(p)), (r *= s = Math.sqrt(1 + s * s)), (i *= s))),
            (r = ia(r)),
            (i = ia(i)),
            (n = ia(n)),
            (a = ia(a)))
          : ((r = _), (a = m), (i = n = 0)),
        ((x && !~(l + "").indexOf("px")) || (O && !~(f + "").indexOf("px"))) &&
          ((x = _d(g, "x", l, "px")), (O = _d(g, "y", f, "px"))),
        (v || y || T || b) &&
          ((x = ia(x + v - (v * r + y * n) + T)),
          (O = ia(O + y - (v * i + y * a) + b))),
        (u || h) &&
          ((s = g.getBBox()),
          (x = ia(x + (u / 100) * s.width)),
          (O = ia(O + (h / 100) * s.height))),
        (s =
          "matrix(" +
          r +
          "," +
          i +
          "," +
          n +
          "," +
          a +
          "," +
          x +
          "," +
          O +
          ")"),
        g.setAttribute("transform", s),
        w && (g.style[cr] = s);
    };
  ha("padding,margin,Width,Radius", function (e, r) {
    var t = "Right",
      i = "Bottom",
      n = "Left",
      o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(
        function (t) {
          return r < 2 ? e + t : "border" + t + e;
        }
      );
    br[1 < r ? "border" + e : e] = function (e, t, r, i, n) {
      var a, s;
      if (arguments.length < 4)
        return (
          (a = o.map(function (t) {
            return yr(e, t, r);
          })),
          5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s
        );
      (a = (i + "").split(" ")),
        (s = {}),
        o.forEach(function (t, e) {
          return (s[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
        }),
        e.init(t, s, n);
    };
  });
  var Er,
    Dr,
    Rr,
    Fr = {
      name: "css",
      register: Sd,
      targetTest: function targetTest(t) {
        return t.style && t.nodeType;
      },
      init: function init(t, e, i, n, a) {
        var s,
          o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _,
          m,
          g,
          v,
          y,
          T,
          b,
          w = this._props,
          x = t.style,
          O = i.vars.startAt;
        for (d in (Fe || Sd(),
        (this.styles = this.styles || Md(t)),
        (b = this.styles.props),
        (this.tween = i),
        e))
          if (
            "autoRound" !== d &&
            ((o = e[d]), !pt[d] || !ac(d, e, i, n, t, a))
          )
            if (
              ((l = typeof o),
              (f = br[d]),
              "function" === l && (l = typeof (o = o.call(i, n, t, a))),
              "string" === l && ~o.indexOf("random(") && (o = ob(o)),
              f)
            )
              f(this, t, d, o, i) && (T = 1);
            else if ("--" === d.substr(0, 2))
              (s = (getComputedStyle(t).getPropertyValue(d) + "").trim()),
                (o += ""),
                (Et.lastIndex = 0),
                Et.test(s) || ((c = Ya(s)), (p = Ya(o))),
                p ? c !== p && (s = _d(t, d, s, p) + p) : c && (o += c),
                this.add(x, "setProperty", s, o, n, a, 0, 0, d),
                w.push(d),
                b.push(d, 0, x[d]);
            else if ("undefined" !== l) {
              if (
                (O && d in O
                  ? ((s =
                      "function" == typeof O[d] ? O[d].call(i, n, t, a) : O[d]),
                    r(s) && ~s.indexOf("random(") && (s = ob(s)),
                    Ya(s + "") ||
                      "auto" === s ||
                      (s += q.units[d] || Ya(yr(t, d)) || ""),
                    "=" === (s + "").charAt(1) && (s = yr(t, d)))
                  : (s = yr(t, d)),
                (h = parseFloat(s)),
                (_ = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) &&
                  (o = o.substr(2)),
                (u = parseFloat(o)),
                d in dr &&
                  ("autoAlpha" === d &&
                    (1 === h &&
                      "hidden" === yr(t, "visibility") &&
                      u &&
                      (h = 0),
                    b.push("visibility", 0, x.visibility),
                    Yd(
                      this,
                      x,
                      "visibility",
                      h ? "inherit" : "hidden",
                      u ? "inherit" : "hidden",
                      !u
                    )),
                  "scale" !== d &&
                    "transform" !== d &&
                    ~(d = dr[d]).indexOf(",") &&
                    (d = d.split(",")[0])),
                (m = d in ar))
              )
                if (
                  (this.styles.save(d),
                  g ||
                    (((v = t._gsap).renderTransform && !e.parseTransform) ||
                      Or(t, e.parseTransform),
                    (y = !1 !== e.smoothOrigin && v.smooth),
                    ((g = this._pt =
                      new _e(
                        this._pt,
                        x,
                        cr,
                        0,
                        1,
                        v.renderTransform,
                        v,
                        0,
                        -1
                      )).dep = 1)),
                  "scale" === d)
                )
                  (this._pt = new _e(
                    this._pt,
                    v,
                    "scaleY",
                    v.scaleY,
                    (_ ? ka(v.scaleY, _ + u) : u) - v.scaleY || 0,
                    vd
                  )),
                    (this._pt.u = 0),
                    w.push("scaleY", d),
                    (d += "X");
                else {
                  if ("transformOrigin" === d) {
                    b.push(pr, 0, x[pr]),
                      (o = de(o)),
                      v.svg
                        ? le(t, o, 0, y, 0, this)
                        : ((p = parseFloat(o.split(" ")[2]) || 0) !==
                            v.zOrigin && Yd(this, v, "zOrigin", v.zOrigin, p),
                          Yd(this, x, d, kr(s), kr(o)));
                    continue;
                  }
                  if ("svgOrigin" === d) {
                    le(t, o, 1, y, 0, this);
                    continue;
                  }
                  if (d in xr) {
                    ve(this, v, d, h, _ ? ka(h, _ + o) : o);
                    continue;
                  }
                  if ("smoothOrigin" === d) {
                    Yd(this, v, "smooth", v.smooth, o);
                    continue;
                  }
                  if ("force3D" === d) {
                    v[d] = o;
                    continue;
                  }
                  if ("transform" === d) {
                    xe(this, o, t);
                    continue;
                  }
                }
              else d in x || (d = mr(d) || d);
              if (
                m ||
                ((u || 0 === u) && (h || 0 === h) && !fr.test(o) && d in x)
              )
                (u = u || 0),
                  (c = (s + "").substr((h + "").length)) !==
                    (p = Ya(o) || (d in q.units ? q.units[d] : c)) &&
                    (h = _d(t, d, s, p)),
                  (this._pt = new _e(
                    this._pt,
                    m ? v : x,
                    d,
                    h,
                    (_ ? ka(h, _ + u) : u) - h,
                    m || ("px" !== p && "zIndex" !== d) || !1 === e.autoRound
                      ? vd
                      : yd
                  )),
                  (this._pt.u = p || 0),
                  c !== p && "%" !== p && ((this._pt.b = s), (this._pt.r = xd));
              else if (d in x) be.call(this, t, d, s, _ ? _ + o : o);
              else if (d in t) this.add(t, d, s || t[d], _ ? _ + o : o, n, a);
              else if ("parseTransform" !== d) {
                Q(d, o);
                continue;
              }
              m || (d in x ? b.push(d, 0, x[d]) : b.push(d, 1, s || t[d])),
                w.push(d);
            }
        T && pe(this);
      },
      render: function render(t, e) {
        if (e.tween._time || !Be())
          for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
        else e.styles.revert();
      },
      get: yr,
      aliases: dr,
      getSetter: function getSetter(t, e, r) {
        var i = dr[e];
        return (
          i && i.indexOf(",") < 0 && (e = i),
          e in ar && e !== pr && (t._gsap.x || yr(t, "x"))
            ? r && Ie === r
              ? "scale" === e
                ? Ed
                : Dd
              : (Ie = r || {}) && ("scale" === e ? Fd : Gd)
            : t.style && !u(t.style[e])
            ? Bd
            : ~e.indexOf("-")
            ? Cd
            : ne(t, e)
        );
      },
      core: { _removeProperty: Xd, _getMatrix: ke },
    };
  (ze.utils.checkPrefix = mr),
    (ze.core.getStyleSaver = Md),
    (Rr = ha(
      (Er = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
        "," +
        (Dr = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        ar[t] = 1;
      }
    )),
    ha(Dr, function (t) {
      (q.units[t] = "deg"), (xr[t] = 1);
    }),
    (dr[Rr[13]] = Er + "," + Dr),
    ha(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
      function (t) {
        var e = t.split(":");
        dr[e[1]] = Rr[e[0]];
      }
    ),
    ha(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        q.units[t] = "px";
      }
    ),
    ze.registerPlugin(Fr);
  var Lr = ze.registerPlugin(Fr) || ze,
    Ir = Lr.core.Tween;
  (e.Back = Ze),
    (e.Bounce = er),
    (e.CSSPlugin = Fr),
    (e.Circ = nr),
    (e.Cubic = Qe),
    (e.Elastic = $e),
    (e.Expo = ir),
    (e.Linear = Ge),
    (e.Power0 = qe),
    (e.Power1 = Ve),
    (e.Power2 = Ue),
    (e.Power3 = Xe),
    (e.Power4 = Ne),
    (e.Quad = We),
    (e.Quart = Ke),
    (e.Quint = Je),
    (e.Sine = rr),
    (e.SteppedEase = tr),
    (e.Strong = He),
    (e.TimelineLite = Xt),
    (e.TimelineMax = Xt),
    (e.TweenLite = $t),
    (e.TweenMax = Ir),
    (e.default = Lr),
    (e.gsap = Lr);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});

/*!
 * Flip 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (e) {
  "use strict";
  function p(t) {
    var e = t.ownerDocument || t;
    !(w in t.style) &&
      "msTransform" in t.style &&
      (k = (w = "msTransform") + "Origin");
    for (; e.parentNode && (e = e.parentNode); );
    if (((y = window), (d = new M()), e)) {
      (a = (g = e).documentElement),
        (b = e.body),
        ((s = g.createElementNS(
          "http://www.w3.org/2000/svg",
          "g"
        )).style.transform = "none");
      var i = e.createElement("div"),
        n = e.createElement("div"),
        r = e && (e.body || e.firstElementChild);
      r &&
        r.appendChild &&
        (r.appendChild(i),
        i.appendChild(n),
        i.setAttribute(
          "style",
          "position:static;transform:translate3d(0,0,1px)"
        ),
        (m = n.offsetParent !== i),
        r.removeChild(i));
    }
    return e;
  }
  function t() {
    return y.pageYOffset || g.scrollTop || a.scrollTop || b.scrollTop || 0;
  }
  function u() {
    return y.pageXOffset || g.scrollLeft || a.scrollLeft || b.scrollLeft || 0;
  }
  function v(t) {
    return (
      t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null)
    );
  }
  function x(t, e) {
    if (t.parentNode && (g || p(t))) {
      var i = v(t),
        n = i
          ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
          : "http://www.w3.org/1999/xhtml",
        r = i ? (e ? "rect" : "g") : "div",
        a = 2 !== e ? 0 : 100,
        s = 3 === e ? 100 : 0,
        o =
          "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
        l = g.createElementNS
          ? g.createElementNS(n.replace(/^https/, "http"), r)
          : g.createElement(r);
      return (
        e &&
          (i
            ? ((f = f || x(t)),
              l.setAttribute("width", 0.01),
              l.setAttribute("height", 0.01),
              l.setAttribute("transform", "translate(" + a + "," + s + ")"),
              f.appendChild(l))
            : (c || ((c = x(t)).style.cssText = o),
              (l.style.cssText =
                o +
                "width:0.1px;height:0.1px;top:" +
                s +
                "px;left:" +
                a +
                "px"),
              c.appendChild(l))),
        l
      );
    }
    throw "Need document and parent.";
  }
  function z(t) {
    var e,
      i = t.getCTM();
    return (
      i ||
        ((e = t.style[w]),
        (t.style[w] = "none"),
        t.appendChild(s),
        (i = s.getCTM()),
        t.removeChild(s),
        e
          ? (t.style[w] = e)
          : t.style.removeProperty(w.replace(/([A-Z])/g, "-$1").toLowerCase())),
      i || d.clone()
    );
  }
  function A(t, e) {
    var i,
      n,
      r,
      a,
      s,
      o,
      l = v(t),
      u = t === l,
      p = l ? C : E,
      h = t.parentNode;
    if (t === y) return t;
    if ((p.length || p.push(x(t, 1), x(t, 2), x(t, 3)), (i = l ? f : c), l))
      u
        ? ((a = -(r = z(t)).e / r.a), (s = -r.f / r.d), (n = d))
        : t.getBBox
        ? ((r = t.getBBox()),
          (a =
            (n = (n = t.transform ? t.transform.baseVal : {}).numberOfItems
              ? 1 < n.numberOfItems
                ? (function _consolidate(t) {
                    for (var e = new M(), i = 0; i < t.numberOfItems; i++)
                      e.multiply(t.getItem(i).matrix);
                    return e;
                  })(n)
                : n.getItem(0).matrix
              : d).a *
              r.x +
            n.c * r.y),
          (s = n.b * r.x + n.d * r.y))
        : ((n = new M()), (a = s = 0)),
        e && "g" === t.tagName.toLowerCase() && (a = s = 0),
        (u ? l : h).appendChild(i),
        i.setAttribute(
          "transform",
          "matrix(" +
            n.a +
            "," +
            n.b +
            "," +
            n.c +
            "," +
            n.d +
            "," +
            (n.e + a) +
            "," +
            (n.f + s) +
            ")"
        );
    else {
      if (((a = s = 0), m))
        for (
          n = t.offsetParent, r = t;
          (r = r && r.parentNode) && r !== n && r.parentNode;

        )
          4 < (y.getComputedStyle(r)[w] + "").length &&
            ((a = r.offsetLeft), (s = r.offsetTop), (r = 0));
      if (
        "absolute" !== (o = y.getComputedStyle(t)).position &&
        "fixed" !== o.position
      )
        for (n = t.offsetParent; h && h !== n; )
          (a += h.scrollLeft || 0), (s += h.scrollTop || 0), (h = h.parentNode);
      ((r = i.style).top = t.offsetTop - s + "px"),
        (r.left = t.offsetLeft - a + "px"),
        (r[w] = o[w]),
        (r[k] = o[k]),
        (r.position = "fixed" === o.position ? "fixed" : "absolute"),
        t.parentNode.appendChild(i);
    }
    return i;
  }
  function B(t, e, i, n, r, a, s) {
    return (t.a = e), (t.b = i), (t.c = n), (t.d = r), (t.e = a), (t.f = s), t;
  }
  var g,
    y,
    a,
    b,
    c,
    f,
    d,
    s,
    m,
    i,
    w = "transform",
    k = w + "Origin",
    C = [],
    E = [],
    M =
      (((i = Matrix2D.prototype).inverse = function inverse() {
        var t = this.a,
          e = this.b,
          i = this.c,
          n = this.d,
          r = this.e,
          a = this.f,
          s = t * n - e * i || 1e-10;
        return B(
          this,
          n / s,
          -e / s,
          -i / s,
          t / s,
          (i * a - n * r) / s,
          -(t * a - e * r) / s
        );
      }),
      (i.multiply = function multiply(t) {
        var e = this.a,
          i = this.b,
          n = this.c,
          r = this.d,
          a = this.e,
          s = this.f,
          o = t.a,
          l = t.c,
          u = t.b,
          p = t.d,
          h = t.e,
          c = t.f;
        return B(
          this,
          o * e + u * n,
          o * i + u * r,
          l * e + p * n,
          l * i + p * r,
          a + h * e + c * n,
          s + h * i + c * r
        );
      }),
      (i.clone = function clone() {
        return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f);
      }),
      (i.equals = function equals(t) {
        var e = this.a,
          i = this.b,
          n = this.c,
          r = this.d,
          a = this.e,
          s = this.f;
        return (
          e === t.a &&
          i === t.b &&
          n === t.c &&
          r === t.d &&
          a === t.e &&
          s === t.f
        );
      }),
      (i.apply = function apply(t, e) {
        void 0 === e && (e = {});
        var i = t.x,
          n = t.y,
          r = this.a,
          a = this.b,
          s = this.c,
          o = this.d,
          l = this.e,
          u = this.f;
        return (
          (e.x = i * r + n * s + l || 0), (e.y = i * a + n * o + u || 0), e
        );
      }),
      Matrix2D);
  function Matrix2D(t, e, i, n, r, a) {
    void 0 === t && (t = 1),
      void 0 === e && (e = 0),
      void 0 === i && (i = 0),
      void 0 === n && (n = 1),
      void 0 === r && (r = 0),
      void 0 === a && (a = 0),
      B(this, t, e, i, n, r, a);
  }
  function getGlobalMatrix(e, i, n, r) {
    if (!e || !e.parentNode || (g || p(e)).documentElement === e)
      return new M();
    var a = (function _forceNonZeroScale(t) {
        for (var e, i; t && t !== b; )
          (i = t._gsap) && i.uncache && i.get(t, "x"),
            i &&
              !i.scaleX &&
              !i.scaleY &&
              i.renderTransform &&
              ((i.scaleX = i.scaleY = 1e-4),
              i.renderTransform(1, i),
              e ? e.push(i) : (e = [i])),
            (t = t.parentNode);
        return e;
      })(e),
      s = v(e) ? C : E,
      o = A(e, n),
      l = s[0].getBoundingClientRect(),
      h = s[1].getBoundingClientRect(),
      c = s[2].getBoundingClientRect(),
      f = o.parentNode,
      d =
        !r &&
        (function _isFixed(t) {
          return (
            "fixed" === y.getComputedStyle(t).position ||
            ((t = t.parentNode) && 1 === t.nodeType ? _isFixed(t) : void 0)
          );
        })(e),
      m = new M(
        (h.left - l.left) / 100,
        (h.top - l.top) / 100,
        (c.left - l.left) / 100,
        (c.top - l.top) / 100,
        l.left + (d ? 0 : u()),
        l.top + (d ? 0 : t())
      );
    if ((f.removeChild(o), a))
      for (l = a.length; l--; )
        ((h = a[l]).scaleX = h.scaleY = 0), h.renderTransform(1, h);
    return i ? m.inverse() : m;
  }
  function L(t, e) {
    return t.actions.forEach(function (t) {
      return t.vars[e] && t.vars[e](t);
    });
  }
  function S(t) {
    return "string" == typeof t ? t.split(" ").join("").split(",") : t;
  }
  function V(t) {
    return I(t)[0] || console.warn("Element not found:", t);
  }
  function W(t) {
    return Math.round(1e4 * t) / 1e4 || 0;
  }
  function X(t, e, i) {
    return t.forEach(function (t) {
      return t.classList[i](e);
    });
  }
  function $(t) {
    return t.replace(/([A-Z])/g, "-$1").toLowerCase();
  }
  function _(t, e) {
    var i,
      n = {};
    for (i in t) e[i] || (n[i] = t[i]);
    return n;
  }
  function ba(t) {
    var e = (st[t] = S(t));
    return (et[t] = e.concat(nt)), e;
  }
  function ea(t, e, i) {
    return (
      t.forEach(function (t) {
        return (t.d = (function _getDOMDepth(t, e, i) {
          void 0 === i && (i = 0);
          for (
            var n = t.parentNode,
              r = 1e3 * Math.pow(10, i) * (e ? -1 : 1),
              a = e ? 900 * -r : 0;
            t;

          )
            (a += r), (t = t.previousSibling);
          return n ? a + _getDOMDepth(n, e, i + 1) : a;
        })(i ? t.element : t.t, e));
      }),
      t.sort(function (t, e) {
        return t.d - e.d;
      }),
      t
    );
  }
  function fa(t, e) {
    for (
      var i, n, r = t.element.style, a = (t.css = t.css || []), s = e.length;
      s--;

    )
      (n = r[(i = e[s])] || r.getPropertyValue(i)),
        a.push(n ? i : Y[i] || (Y[i] = $(i)), n);
    return r;
  }
  function ga(t) {
    var e = t.css,
      i = t.element.style,
      n = 0;
    for (t.cache.uncache = 1; n < e.length; n += 2)
      e[n + 1] ? (i[e[n]] = e[n + 1]) : i.removeProperty(e[n]);
    !e[e.indexOf("transform") + 1] &&
      i.translate &&
      (i.removeProperty("translate"),
      i.removeProperty("scale"),
      i.removeProperty("rotate"));
  }
  function ha(t, e) {
    t.forEach(function (t) {
      return (t.a.cache.uncache = 1);
    }),
      e || t.finalStates.forEach(ga);
  }
  function ja(e, i, n) {
    var r,
      a,
      s,
      o = e.element,
      l = e.width,
      p = e.height,
      h = e.uncache,
      c = e.getProp,
      f = o.style,
      d = 4;
    if (("object" != typeof i && (i = e), tt && 1 !== n))
      return (
        tt._abs.push({ t: o, b: e, a: e, sd: 0 }),
        tt._final.push(function () {
          return (e.cache.uncache = 1) && ga(e);
        }),
        o
      );
    for (
      a = "none" === c("display"),
        (e.isVisible && !a) ||
          (a && (fa(e, ["display"]).display = i.display),
          (e.matrix = i.matrix),
          (e.width = l = e.width || i.width),
          (e.height = p = e.height || i.height)),
        fa(e, R),
        s = window.getComputedStyle(o);
      d--;

    )
      f[R[d]] = s[R[d]];
    if (
      ((f.gridArea = "1 / 1 / 1 / 1"),
      (f.transition = "none"),
      (f.position = "absolute"),
      (f.width = l + "px"),
      (f.height = p + "px"),
      f.top || (f.top = "0px"),
      f.left || (f.left = "0px"),
      h)
    )
      r = new pt(o);
    else if ((((r = _(e, D)).position = "absolute"), e.simple)) {
      var m = o.getBoundingClientRect();
      r.matrix = new M(1, 0, 0, 1, m.left + u(), m.top + t());
    } else r.matrix = getGlobalMatrix(o, !1, !1, !0);
    return (r = ot(r, e, !0)), (e.x = P(r.x, 0.01)), (e.y = P(r.y, 0.01)), o;
  }
  function ka(t, e) {
    return (
      !0 !== e &&
        ((e = I(e)),
        (t = t.filter(function (t) {
          if (-1 !== e.indexOf((t.sd < 0 ? t.b : t.a).element)) return !0;
          t.t._gsap.renderTransform(1),
            t.b.isVisible &&
              ((t.t.style.width = t.b.width + "px"),
              (t.t.style.height = t.b.height + "px"));
        }))),
      t
    );
  }
  function la(t) {
    return ea(t, !0).forEach(function (t) {
      return (
        (t.a.isVisible || t.b.isVisible) && ja(t.sd < 0 ? t.b : t.a, t.b, 1)
      );
    });
  }
  function pa(t, e) {
    var i,
      n = t.style || t;
    for (i in e) n[i] = e[i];
  }
  function ra(t) {
    return t.map(function (t) {
      return t.element;
    });
  }
  function sa(t, e, i) {
    return t && e.length && i.add(t(ra(e), i, new ut(e, 0, !0)), 0);
  }
  function ua(t, e) {
    return t instanceof ut ? t : new ut(t, e);
  }
  function va(t, e, i) {
    var n = t.idLookup[i],
      r = t.alt[i];
    return !r.isVisible ||
      ((e.getElementState(r.element) || r).isVisible && n.isVisible)
      ? n
      : r;
  }
  function za(t) {
    if (t !== l) {
      var e = o.style,
        i = o.clientWidth === window.outerWidth,
        n = o.clientHeight === window.outerHeight,
        r = 4;
      if (t && (i || n)) {
        for (; r--; ) j[r] = e[H[r]];
        i && ((e.width = o.clientWidth + "px"), (e.overflowY = "hidden")),
          n && ((e.height = o.clientHeight + "px"), (e.overflowX = "hidden")),
          (l = t);
      } else if (l) {
        for (; r--; ) j[r] ? (e[H[r]] = j[r]) : e.removeProperty($(H[r]));
        l = t;
      }
    }
  }
  function Aa(t, e, r, i) {
    (t instanceof ut && e instanceof ut) ||
      console.warn("Not a valid state object.");
    var a,
      s,
      o,
      l,
      u,
      p,
      h,
      c,
      f,
      n,
      d,
      m,
      g,
      v,
      y,
      x = (r = r || {}).clearProps,
      b = r.onEnter,
      w = r.onLeave,
      S = r.absolute,
      k = r.absoluteOnLeave,
      C = r.custom,
      V = r.delay,
      E = r.paused,
      M = r.repeat,
      B = r.repeatDelay,
      F = r.yoyo,
      L = r.toggleClass,
      I = r.nested,
      P = r.zIndex,
      A = r.scale,
      T = r.fade,
      O = r.stagger,
      N = r.spin,
      D = r.prune,
      Y = ("props" in r ? r : t).props,
      z = _(r, rt),
      R = Q.timeline({
        delay: V,
        paused: E,
        repeat: M,
        repeatDelay: B,
        yoyo: F,
        data: "isFlip",
      }),
      W = z,
      G = [],
      j = [],
      H = [],
      q = [],
      $ = !0 === N ? 1 : N || 0,
      Z =
        "function" == typeof N
          ? N
          : function () {
              return $;
            },
      J = t.interrupted || e.interrupted,
      U = R[1 !== i ? "to" : "from"];
    for (s in e.idLookup)
      (d = e.alt[s] ? va(e, t, s) : e.idLookup[s]),
        (u = d.element),
        (n = t.idLookup[s]),
        !t.alt[s] ||
          u !== n.element ||
          (!t.alt[s].isVisible && d.isVisible) ||
          (n = t.alt[s]),
        n
          ? ((p = {
              t: u,
              b: n,
              a: d,
              sd: n.element === u ? 0 : d.isVisible ? 1 : -1,
            }),
            H.push(p),
            p.sd &&
              (p.sd < 0 && ((p.b = d), (p.a = n)),
              J && fa(p.b, Y ? et[Y] : nt),
              T &&
                H.push(
                  (p.swap = {
                    t: n.element,
                    b: p.b,
                    a: p.a,
                    sd: -p.sd,
                    swap: p,
                  })
                )),
            (u._flip = n.element._flip = tt ? tt.timeline : R))
          : d.isVisible &&
            (H.push({
              t: u,
              b: _(d, { isVisible: 1 }),
              a: d,
              sd: 0,
              entering: 1,
            }),
            (u._flip = tt ? tt.timeline : R));
    Y &&
      (st[Y] || ba(Y)).forEach(function (e) {
        return (z[e] = function (t) {
          return H[t].a.props[e];
        });
      }),
      (H.finalStates = f = []),
      (m = function run() {
        for (ea(H), za(!0), l = 0; l < H.length; l++)
          (p = H[l]),
            (g = p.a),
            (v = p.b),
            !D || g.isDifferent(v) || p.entering
              ? ((u = p.t),
                !I ||
                  p.sd < 0 ||
                  !l ||
                  (g.matrix = getGlobalMatrix(u, !1, !1, !0)),
                v.isVisible && g.isVisible
                  ? (p.sd < 0
                      ? ((h = new pt(u, Y, t.simple)),
                        ot(h, g, A, 0, 0, h),
                        (h.matrix = getGlobalMatrix(u, !1, !1, !0)),
                        (h.css = p.b.css),
                        (p.a = g = h),
                        T && (u.style.opacity = J ? v.opacity : g.opacity),
                        O && q.push(u))
                      : 0 < p.sd &&
                        T &&
                        (u.style.opacity = J ? g.opacity - v.opacity : "0"),
                    ot(g, v, A, Y))
                  : v.isVisible !== g.isVisible &&
                    (v.isVisible
                      ? g.isVisible ||
                        ((v.css = g.css),
                        j.push(v),
                        H.splice(l--, 1),
                        S && I && ot(g, v, A, Y))
                      : (g.isVisible && G.push(g), H.splice(l--, 1))),
                A ||
                  ((u.style.maxWidth = Math.max(g.width, v.width) + "px"),
                  (u.style.maxHeight = Math.max(g.height, v.height) + "px"),
                  (u.style.minWidth = Math.min(g.width, v.width) + "px"),
                  (u.style.minHeight = Math.min(g.height, v.height) + "px")),
                I && L && u.classList.add(L))
              : H.splice(l--, 1),
            f.push(g);
        var e;
        if (
          (L &&
            ((e = f.map(function (t) {
              return t.element;
            })),
            I &&
              e.forEach(function (t) {
                return t.classList.remove(L);
              })),
          za(!1),
          A
            ? ((z.scaleX = function (t) {
                return H[t].a.scaleX;
              }),
              (z.scaleY = function (t) {
                return H[t].a.scaleY;
              }))
            : ((z.width = function (t) {
                return H[t].a.width + "px";
              }),
              (z.height = function (t) {
                return H[t].a.height + "px";
              }),
              (z.autoRound = r.autoRound || !1)),
          (z.x = function (t) {
            return H[t].a.x + "px";
          }),
          (z.y = function (t) {
            return H[t].a.y + "px";
          }),
          (z.rotation = function (t) {
            return H[t].a.rotation + (N ? 360 * Z(t, c[t], c) : 0);
          }),
          (z.skewX = function (t) {
            return H[t].a.skewX;
          }),
          (c = H.map(function (t) {
            return t.t;
          })),
          (!P && 0 !== P) ||
            ((z.modifiers = {
              zIndex: function zIndex() {
                return P;
              },
            }),
            (z.zIndex = P),
            (z.immediateRender = !1 !== r.immediateRender)),
          T &&
            (z.opacity = function (t) {
              return H[t].sd < 0 ? 0 : 0 < H[t].sd ? H[t].a.opacity : "+=0";
            }),
          q.length)
        ) {
          O = Q.utils.distribute(O);
          var i = c.slice(q.length);
          z.stagger = function (t, e) {
            return O(~q.indexOf(e) ? c.indexOf(H[t].swap.t) : t, e, i);
          };
        }
        if (
          (it.forEach(function (t) {
            return r[t] && R.eventCallback(t, r[t], r[t + "Params"]);
          }),
          C && c.length)
        )
          for (s in ((W = _(z, rt)),
          "scale" in C && ((C.scaleX = C.scaleY = C.scale), delete C.scale),
          C))
            ((a = _(C[s], at))[s] = z[s]),
              !("duration" in a) &&
                "duration" in z &&
                (a.duration = z.duration),
              (a.stagger = z.stagger),
              U.call(R, c, a, 0),
              delete W[s];
        (c.length || j.length || G.length) &&
          (L &&
            R.add(function () {
              return X(e, L, R._zTime < 0 ? "remove" : "add");
            }, 0) &&
            !E &&
            X(e, L, "add"),
          c.length && U.call(R, c, W, 0)),
          sa(b, G, R),
          sa(w, j, R);
        var n = tt && tt.timeline;
        n &&
          (n.add(R, 0),
          tt._final.push(function () {
            return ha(H, !x);
          })),
          (o = R.duration()),
          R.call(function () {
            var t = R.time() >= o;
            t && !n && ha(H, !x), L && X(e, L, t ? "remove" : "add");
          });
      }),
      k &&
        (S = H.filter(function (t) {
          return !t.sd && !t.a.isVisible && t.b.isVisible;
        }).map(function (t) {
          return t.a.element;
        })),
      tt
        ? (S && (y = tt._abs).push.apply(y, ka(H, S)), tt._run.push(m))
        : (S && la(ka(H, S)), m());
    var K = tt ? tt.timeline : R;
    return (
      (K.revert = function () {
        return lt(K, 1, 1);
      }),
      K
    );
  }
  function Da(t) {
    for (
      var e,
        i = (t.idLookup = {}),
        n = (t.alt = {}),
        r = t.elementStates,
        a = r.length;
      a--;

    )
      i[(e = r[a]).id] ? (n[e.id] = e) : (i[e.id] = e);
  }
  var I,
    Q,
    tt,
    r,
    o,
    P,
    T,
    l,
    n,
    h = 1,
    F = {},
    O = 180 / Math.PI,
    N = Math.PI / 180,
    D = {},
    Y = {},
    et = {},
    it = S("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
    nt = S(
      "transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"
    ),
    rt = {
      zIndex: 1,
      kill: 1,
      simple: 1,
      spin: 1,
      clearProps: 1,
      targets: 1,
      toggleClass: 1,
      onComplete: 1,
      onUpdate: 1,
      onInterrupt: 1,
      onStart: 1,
      delay: 1,
      repeat: 1,
      repeatDelay: 1,
      yoyo: 1,
      scale: 1,
      fade: 1,
      absolute: 1,
      props: 1,
      onEnter: 1,
      onLeave: 1,
      custom: 1,
      paused: 1,
      nested: 1,
      prune: 1,
      absoluteOnLeave: 1,
    },
    at = {
      zIndex: 1,
      simple: 1,
      clearProps: 1,
      scale: 1,
      absolute: 1,
      fitChild: 1,
      getVars: 1,
      props: 1,
    },
    st = {},
    R =
      "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(
        ","
      ),
    G = function _parseElementState(t, e, i, n) {
      return t instanceof pt
        ? t
        : t instanceof ut
        ? (function _findElStateInState(t, e) {
            return (e && t.idLookup[G(e).id]) || t.elementStates[0];
          })(t, n)
        : new pt(
            "string" == typeof t ? V(t) || console.warn(t + " not found") : t,
            e,
            i
          );
    },
    ot = function _fit(t, e, i, n, r, a) {
      var s,
        o,
        l,
        u,
        p,
        h,
        c,
        f = t.element,
        d = t.cache,
        m = t.parent,
        g = t.x,
        v = t.y,
        y = e.width,
        x = e.height,
        b = e.scaleX,
        w = e.scaleY,
        S = e.rotation,
        k = e.bounds,
        _ = a && T && T(f, "transform"),
        C = t,
        V = e.matrix,
        E = V.e,
        M = V.f,
        B =
          t.bounds.width !== k.width ||
          t.bounds.height !== k.height ||
          t.scaleX !== b ||
          t.scaleY !== w ||
          t.rotation !== S,
        F = !B && t.simple && e.simple && !r;
      return (
        F || !m
          ? ((b = w = 1), (S = s = 0))
          : ((h = (p = (function _getInverseGlobalMatrix(t) {
              var e = t._gsap || Q.core.getCache(t);
              return e.gmCache === Q.ticker.frame
                ? e.gMatrix
                : ((e.gmCache = Q.ticker.frame),
                  (e.gMatrix = getGlobalMatrix(t, !0, !1, !0)));
            })(m))
              .clone()
              .multiply(e.ctm ? e.matrix.clone().multiply(e.ctm) : e.matrix)),
            (S = W(Math.atan2(h.b, h.a) * O)),
            (s = W(Math.atan2(h.c, h.d) * O + S) % 360),
            (b = Math.sqrt(Math.pow(h.a, 2) + Math.pow(h.b, 2))),
            (w =
              Math.sqrt(Math.pow(h.c, 2) + Math.pow(h.d, 2)) * Math.cos(s * N)),
            r &&
              ((r = I(r)[0]),
              (u = Q.getProperty(r)),
              (c = r.getBBox && "function" == typeof r.getBBox && r.getBBox()),
              (C = {
                scaleX: u("scaleX"),
                scaleY: u("scaleY"),
                width: c ? c.width : Math.ceil(parseFloat(u("width", "px"))),
                height: c ? c.height : parseFloat(u("height", "px")),
              })),
            (d.rotation = S + "deg"),
            (d.skewX = s + "deg")),
        i
          ? ((b *= y !== C.width && C.width ? y / C.width : 1),
            (w *= x !== C.height && C.height ? x / C.height : 1),
            (d.scaleX = b),
            (d.scaleY = w))
          : ((y = P((y * b) / C.scaleX, 0)),
            (x = P((x * w) / C.scaleY, 0)),
            (f.style.width = y + "px"),
            (f.style.height = x + "px")),
        n && pa(f, e.props),
        F || !m
          ? ((g += E - t.matrix.e), (v += M - t.matrix.f))
          : B || m !== e.parent
          ? (d.renderTransform(1, d),
            (h = getGlobalMatrix(r || f, !1, !1, !0)),
            (o = p.apply({ x: h.e, y: h.f })),
            (g += (l = p.apply({ x: E, y: M })).x - o.x),
            (v += l.y - o.y))
          : ((p.e = p.f = 0),
            (g += (l = p.apply({ x: E - t.matrix.e, y: M - t.matrix.f })).x),
            (v += l.y)),
        (g = P(g, 0.02)),
        (v = P(v, 0.02)),
        !a || a instanceof pt
          ? ((d.x = g + "px"), (d.y = v + "px"), d.renderTransform(1, d))
          : _ && _.revert(),
        a &&
          ((a.x = g),
          (a.y = v),
          (a.rotation = S),
          (a.skewX = s),
          i
            ? ((a.scaleX = b), (a.scaleY = w))
            : ((a.width = y), (a.height = x))),
        a || d
      );
    },
    j = [],
    H = "width,height,overflowX,overflowY".split(","),
    lt = function _killFlip(t, e, i) {
      if (t && t.progress() < 1 && (!t.paused() || i))
        return (
          e &&
            ((function _interrupt(t) {
              t.vars.onInterrupt &&
                t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []),
                t.getChildren(!0, !1, !0).forEach(_interrupt);
            })(t),
            e < 2 && t.progress(1),
            t.kill()),
          !0
        );
    },
    ut =
      (((n = FlipState.prototype).update = function update(t) {
        var e = this;
        return (
          (this.elementStates = this.targets.map(function (t) {
            return new pt(t, e.props, e.simple);
          })),
          Da(this),
          this.interrupt(t),
          this.recordInlineStyles(),
          this
        );
      }),
      (n.clear = function clear() {
        return (
          (this.targets.length = this.elementStates.length = 0), Da(this), this
        );
      }),
      (n.fit = function fit(t, e, i) {
        for (
          var n,
            r,
            a = ea(this.elementStates.slice(0), !1, !0),
            s = (t || this).idLookup,
            o = 0;
          o < a.length;
          o++
        )
          (n = a[o]),
            i && (n.matrix = getGlobalMatrix(n.element, !1, !1, !0)),
            (r = s[n.id]) && ot(n, r, e, !0, 0, n),
            (n.matrix = getGlobalMatrix(n.element, !1, !1, !0));
        return this;
      }),
      (n.getProperty = function getProperty(t, e) {
        var i = this.getElementState(t) || D;
        return (e in i ? i : i.props || D)[e];
      }),
      (n.add = function add(t) {
        for (
          var e, i, n, r = t.targets.length, a = this.idLookup, s = this.alt;
          r--;

        )
          (n = a[(i = t.elementStates[r]).id]) &&
          (i.element === n.element ||
            (s[i.id] && s[i.id].element === i.element))
            ? ((e = this.elementStates.indexOf(
                i.element === n.element ? n : s[i.id]
              )),
              this.targets.splice(e, 1, t.targets[r]),
              this.elementStates.splice(e, 1, i))
            : (this.targets.push(t.targets[r]), this.elementStates.push(i));
        return (
          t.interrupted && (this.interrupted = !0),
          t.simple || (this.simple = !1),
          Da(this),
          this
        );
      }),
      (n.compare = function compare(t) {
        function kh(t, e, i) {
          return (
            (t.isVisible !== e.isVisible
              ? t.isVisible
                ? f
                : d
              : t.isVisible
              ? c
              : h
            ).push(i) && m.push(i)
          );
        }
        function lh(t, e, i) {
          return m.indexOf(i) < 0 && kh(t, e, i);
        }
        var e,
          i,
          n,
          r,
          a,
          s,
          o,
          l,
          u = t.idLookup,
          p = this.idLookup,
          h = [],
          c = [],
          f = [],
          d = [],
          m = [],
          g = t.alt,
          v = this.alt;
        for (n in u)
          (a = g[n]),
            (s = v[n]),
            (r = (e = a ? va(t, this, n) : u[n]).element),
            (i = p[n]),
            s
              ? ((l = i.isVisible || (!s.isVisible && r === i.element) ? i : s),
                (o =
                  !a || e.isVisible || a.isVisible || l.element !== a.element
                    ? e
                    : a).isVisible &&
                l.isVisible &&
                o.element !== l.element
                  ? ((o.isDifferent(l) ? c : h).push(o.element, l.element),
                    m.push(o.element, l.element))
                  : kh(o, l, o.element),
                a && o.element === a.element && (a = u[n]),
                lh(o.element !== i.element && a ? a : o, i, i.element),
                lh(a && a.element === s.element ? a : o, s, s.element),
                a && lh(a, s.element === a.element ? s : i, a.element))
              : (i ? (i.isDifferent(e) ? kh(e, i, r) : h.push(r)) : f.push(r),
                a && lh(a, i, a.element));
        for (n in p)
          u[n] || (d.push(p[n].element), v[n] && d.push(v[n].element));
        return { changed: c, unchanged: h, enter: f, leave: d };
      }),
      (n.recordInlineStyles = function recordInlineStyles() {
        for (var t = et[this.props] || nt, e = this.elementStates.length; e--; )
          fa(this.elementStates[e], t);
      }),
      (n.interrupt = function interrupt(n) {
        var r = this,
          a = [];
        this.targets.forEach(function (t) {
          var e = t._flip,
            i = lt(e, n ? 0 : 1);
          n &&
            i &&
            a.indexOf(e) < 0 &&
            e.add(function () {
              return r.updateVisibility();
            }),
            i && a.push(e);
        }),
          !n && a.length && this.updateVisibility(),
          this.interrupted || (this.interrupted = !!a.length);
      }),
      (n.updateVisibility = function updateVisibility() {
        this.elementStates.forEach(function (t) {
          var e = t.element.getBoundingClientRect();
          (t.isVisible = !!(e.width || e.height || e.top || e.left)),
            (t.uncache = 1);
        });
      }),
      (n.getElementState = function getElementState(t) {
        return this.elementStates[this.targets.indexOf(V(t))];
      }),
      (n.makeAbsolute = function makeAbsolute() {
        return ea(this.elementStates.slice(0), !0, !0).map(ja);
      }),
      FlipState);
  function FlipState(t, e, i) {
    if (((this.props = e && e.props), (this.simple = !(!e || !e.simple)), i))
      (this.targets = ra(t)), (this.elementStates = t), Da(this);
    else {
      this.targets = I(t);
      var n = e && (!1 === e.kill || (e.batch && !e.kill));
      tt && !n && tt._kill.push(this), this.update(n || !!tt);
    }
  }
  var q,
    pt =
      (((q = ElementState.prototype).isDifferent = function isDifferent(t) {
        var e = this.bounds,
          i = t.bounds;
        return (
          e.top !== i.top ||
          e.left !== i.left ||
          e.width !== i.width ||
          e.height !== i.height ||
          !this.matrix.equals(t.matrix) ||
          this.opacity !== t.opacity ||
          (this.props &&
            t.props &&
            JSON.stringify(this.props) !== JSON.stringify(t.props))
        );
      }),
      (q.update = function update(e, i) {
        var n = this,
          r = n.element,
          a = Q.getProperty(r),
          s = Q.core.getCache(r),
          o = r.getBoundingClientRect(),
          l =
            r.getBBox &&
            "function" == typeof r.getBBox &&
            "svg" !== r.nodeName.toLowerCase() &&
            r.getBBox(),
          p = i
            ? new M(1, 0, 0, 1, o.left + u(), o.top + t())
            : getGlobalMatrix(r, !1, !1, !0);
        (n.getProp = a),
          (n.element = r),
          (n.id = (function _getID(t) {
            var e = t.getAttribute("data-flip-id");
            return e || t.setAttribute("data-flip-id", (e = "auto-" + h++)), e;
          })(r)),
          (n.matrix = p),
          (n.cache = s),
          (n.bounds = o),
          (n.isVisible = !!(o.width || o.height || o.left || o.top)),
          (n.display = a("display")),
          (n.position = a("position")),
          (n.parent = r.parentNode),
          (n.x = a("x")),
          (n.y = a("y")),
          (n.scaleX = s.scaleX),
          (n.scaleY = s.scaleY),
          (n.rotation = a("rotation")),
          (n.skewX = a("skewX")),
          (n.opacity = a("opacity")),
          (n.width = l ? l.width : P(a("width", "px"), 0.04)),
          (n.height = l ? l.height : P(a("height", "px"), 0.04)),
          e &&
            (function _recordProps(t, e) {
              for (
                var i = Q.getProperty(t.element, null, "native"),
                  n = (t.props = {}),
                  r = e.length;
                r--;

              )
                n[e[r]] = (i(e[r]) + "").trim();
              n.zIndex && (n.zIndex = parseFloat(n.zIndex) || 0);
            })(n, st[e] || ba(e)),
          (n.ctm =
            r.getCTM && "svg" === r.nodeName.toLowerCase() && z(r).inverse()),
          (n.simple =
            i || (1 === W(p.a) && !W(p.b) && !W(p.c) && 1 === W(p.d))),
          (n.uncache = 0);
      }),
      ElementState);
  function ElementState(t, e, i) {
    (this.element = t), this.update(e, i);
  }
  var Z,
    J =
      (((Z = FlipAction.prototype).getStateById = function getStateById(t) {
        for (var e = this.states.length; e--; )
          if (this.states[e].idLookup[t]) return this.states[e];
      }),
      (Z.kill = function kill() {
        this.batch.remove(this);
      }),
      FlipAction);
  function FlipAction(t, e) {
    (this.vars = t),
      (this.batch = e),
      (this.states = []),
      (this.timeline = e.timeline);
  }
  var U,
    K =
      (((U = FlipBatch.prototype).add = function add(e) {
        var t = this.actions.filter(function (t) {
          return t.vars === e;
        });
        return t.length
          ? t[0]
          : ((t = new J("function" == typeof e ? { animate: e } : e, this)),
            this.actions.push(t),
            t);
      }),
      (U.remove = function remove(t) {
        var e = this.actions.indexOf(t);
        return 0 <= e && this.actions.splice(e, 1), this;
      }),
      (U.getState = function getState(e) {
        var i = this,
          t = tt,
          n = r;
        return (
          (tt = this).state.clear(),
          (this._kill.length = 0),
          this.actions.forEach(function (t) {
            t.vars.getState &&
              ((t.states.length = 0), ((r = t).state = t.vars.getState(t))),
              e &&
                t.states.forEach(function (t) {
                  return i.state.add(t);
                });
          }),
          (r = n),
          (tt = t),
          this.killConflicts(),
          this
        );
      }),
      (U.animate = function animate() {
        var t,
          e,
          i = this,
          n = tt,
          r = this.timeline,
          a = this.actions.length;
        for (
          tt = this,
            r.clear(),
            this._abs.length = this._final.length = this._run.length = 0,
            this.actions.forEach(function (t) {
              t.vars.animate && t.vars.animate(t);
              var e,
                i,
                n = t.vars.onEnter,
                r = t.vars.onLeave,
                a = t.targets;
              a &&
                a.length &&
                (n || r) &&
                ((e = new ut()),
                t.states.forEach(function (t) {
                  return e.add(t);
                }),
                (i = e.compare(ht.getState(a))).enter.length && n && n(i.enter),
                i.leave.length && r && r(i.leave));
            }),
            la(this._abs),
            this._run.forEach(function (t) {
              return t();
            }),
            e = r.duration(),
            t = this._final.slice(0),
            r.add(function () {
              e <= r.time() &&
                (t.forEach(function (t) {
                  return t();
                }),
                L(i, "onComplete"));
            }),
            tt = n;
          a--;

        )
          this.actions[a].vars.once && this.actions[a].kill();
        return L(this, "onStart"), r.restart(), this;
      }),
      (U.loadState = function loadState(n) {
        n =
          n ||
          function done() {
            return 0;
          };
        var r = [];
        return (
          this.actions.forEach(function (e) {
            if (e.vars.loadState) {
              var i,
                t = function f(t) {
                  t && (e.targets = t),
                    ~(i = r.indexOf(f)) && (r.splice(i, 1), r.length || n());
                };
              r.push(t), e.vars.loadState(t);
            }
          }),
          r.length || n(),
          this
        );
      }),
      (U.setState = function setState() {
        return (
          this.actions.forEach(function (t) {
            return (t.targets = t.vars.setState && t.vars.setState(t));
          }),
          this
        );
      }),
      (U.killConflicts = function killConflicts(e) {
        return (
          this.state.interrupt(e),
          this._kill.forEach(function (t) {
            return t.interrupt(e);
          }),
          this
        );
      }),
      (U.run = function run(t, e) {
        var i = this;
        return (
          this !== tt &&
            (t || this.getState(e),
            this.loadState(function () {
              i._killed || (i.setState(), i.animate());
            })),
          this
        );
      }),
      (U.clear = function clear(t) {
        this.state.clear(), t || (this.actions.length = 0);
      }),
      (U.getStateById = function getStateById(t) {
        for (var e, i = this.actions.length; i--; )
          if ((e = this.actions[i].getStateById(t))) return e;
        return this.state.idLookup[t] && this.state;
      }),
      (U.kill = function kill() {
        (this._killed = 1), this.clear(), delete F[this.id];
      }),
      FlipBatch);
  function FlipBatch(t) {
    (this.id = t),
      (this.actions = []),
      (this._kill = []),
      (this._final = []),
      (this._abs = []),
      (this._run = []),
      (this.data = {}),
      (this.state = new ut()),
      (this.timeline = Q.timeline());
  }
  var ht =
    ((Flip.getState = function getState(t, e) {
      var i = ua(t, e);
      return (
        r && r.states.push(i),
        e && e.batch && Flip.batch(e.batch).state.add(i),
        i
      );
    }),
    (Flip.from = function from(t, e) {
      return (
        "clearProps" in (e = e || {}) || (e.clearProps = !0),
        Aa(
          t,
          ua(e.targets || t.targets, {
            props: e.props || t.props,
            simple: e.simple,
            kill: !!e.kill,
          }),
          e,
          -1
        )
      );
    }),
    (Flip.to = function to(t, e) {
      return Aa(
        t,
        ua(e.targets || t.targets, {
          props: e.props || t.props,
          simple: e.simple,
          kill: !!e.kill,
        }),
        e,
        1
      );
    }),
    (Flip.fromTo = function fromTo(t, e, i) {
      return Aa(t, e, i);
    }),
    (Flip.fit = function fit(t, e, i) {
      var n = i ? _(i, at) : {},
        r = i || n,
        a = r.absolute,
        s = r.scale,
        o = r.getVars,
        l = r.props,
        u = r.runBackwards,
        p = r.onComplete,
        h = r.simple,
        c = i && i.fitChild && V(i.fitChild),
        f = G(e, l, h, t),
        d = G(t, 0, h, f),
        m = l ? et[l] : nt,
        g = Q.context();
      return (
        l && pa(n, f.props),
        fa(d, m),
        u &&
          ("immediateRender" in n || (n.immediateRender = !0),
          (n.onComplete = function () {
            ga(d), p && p.apply(this, arguments);
          })),
        a && ja(d, f),
        (n = ot(d, f, s || c, l, c, n.duration || o ? n : 0)),
        g &&
          !o &&
          g.add(function () {
            return function () {
              return ga(d);
            };
          }),
        o ? n : n.duration ? Q.to(d.element, n) : null
      );
    }),
    (Flip.makeAbsolute = function makeAbsolute(t, e) {
      return (t instanceof ut ? t : new ut(t, e)).makeAbsolute();
    }),
    (Flip.batch = function batch(t) {
      return F[(t = t || "default")] || (F[t] = new K(t));
    }),
    (Flip.killFlipsOf = function killFlipsOf(t, e) {
      (t instanceof ut ? t.targets : I(t)).forEach(function (t) {
        return t && lt(t._flip, !1 !== e ? 1 : 2);
      });
    }),
    (Flip.isFlipping = function isFlipping(t) {
      var e = Flip.getByTarget(t);
      return !!e && e.isActive();
    }),
    (Flip.getByTarget = function getByTarget(t) {
      return (V(t) || D)._flip;
    }),
    (Flip.getElementState = function getElementState(t, e) {
      return new pt(V(t), e);
    }),
    (Flip.convertCoordinates = function convertCoordinates(t, e, i) {
      var n = getGlobalMatrix(e, !0, !0).multiply(getGlobalMatrix(t));
      return i ? n.apply(i) : n;
    }),
    (Flip.register = function register(t) {
      if ((o = "undefined" != typeof document && document.body)) {
        (Q = t), p(o), (I = Q.utils.toArray), (T = Q.core.getStyleSaver);
        var i = Q.utils.snap(0.1);
        P = function _closestTenth(t, e) {
          return i(parseFloat(t) + e);
        };
      }
    }),
    Flip);
  function Flip() {}
  (ht.version = "3.12.5"),
    "undefined" != typeof window &&
      window.gsap &&
      window.gsap.registerPlugin(ht),
    (e.Flip = ht),
    (e.default = ht);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});

/*!
 * SplitText 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GSAP and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GSAP membership. See https://gsap.com/pricing
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (D, u) {
  "object" == typeof exports && "undefined" != typeof module
    ? u(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], u)
    : u(((D = D || self).window = D.window || {}));
})(this, function (D) {
  "use strict";
  var b =
    /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function n(D) {
    (X = document),
      (e = window),
      (C =
        C ||
        D ||
        e.gsap ||
        console.warn("Please gsap.registerPlugin(SplitText)")) &&
        ((E = C.utils.toArray),
        (i = C.core.context || function () {}),
        (F = 1));
  }
  function o(D) {
    return e.getComputedStyle(D);
  }
  function p(D) {
    return "absolute" === D.position || !0 === D.absolute;
  }
  function q(D, u) {
    for (var e, t = u.length; -1 < --t; )
      if (((e = u[t]), D.substr(0, e.length) === e)) return e.length;
  }
  function s(D, u) {
    void 0 === D && (D = "");
    var e = ~D.indexOf("++"),
      t = 1;
    return (
      e && (D = D.split("++").join("")),
      function () {
        return (
          "<" +
          u +
          " style='position:relative;display:inline-block;'" +
          (D ? " class='" + D + (e ? t++ : "") + "'>" : ">")
        );
      }
    );
  }
  function t(D, u, e) {
    var F = D.nodeType;
    if (1 === F || 9 === F || 11 === F)
      for (D = D.firstChild; D; D = D.nextSibling) t(D, u, e);
    else (3 !== F && 4 !== F) || (D.nodeValue = D.nodeValue.split(u).join(e));
  }
  function u(D, u) {
    for (var e = u.length; -1 < --e; ) D.push(u[e]);
  }
  function v(D, u, e) {
    for (var t; D && D !== u; ) {
      if ((t = D._next || D.nextSibling)) return t.textContent.charAt(0) === e;
      D = D.parentNode || D._parent;
    }
  }
  function w(D) {
    var u,
      e,
      t = E(D.childNodes),
      F = t.length;
    for (u = 0; u < F; u++)
      (e = t[u])._isSplit
        ? w(e)
        : u && e.previousSibling && 3 === e.previousSibling.nodeType
        ? ((e.previousSibling.nodeValue +=
            3 === e.nodeType ? e.nodeValue : e.firstChild.nodeValue),
          D.removeChild(e))
        : 3 !== e.nodeType &&
          (D.insertBefore(e.firstChild, e), D.removeChild(e));
  }
  function x(D, u) {
    return parseFloat(u[D]) || 0;
  }
  function y(D, e, F, C, i, n, s) {
    var E,
      r,
      l,
      d,
      a,
      h,
      B,
      f,
      A,
      c,
      g,
      y,
      b = o(D),
      _ = x("paddingLeft", b),
      S = -999,
      T = x("borderBottomWidth", b) + x("borderTopWidth", b),
      m = x("borderLeftWidth", b) + x("borderRightWidth", b),
      N = x("paddingTop", b) + x("paddingBottom", b),
      L = x("paddingLeft", b) + x("paddingRight", b),
      W = x("fontSize", b) * (e.lineThreshold || 0.2),
      H = b.textAlign,
      O = [],
      V = [],
      M = [],
      R = e.wordDelimiter || " ",
      j = e.tag ? e.tag : e.span ? "span" : "div",
      k = e.type || e.split || "chars,words,lines",
      P = i && ~k.indexOf("lines") ? [] : null,
      z = ~k.indexOf("words"),
      q = ~k.indexOf("chars"),
      G = p(e),
      I = e.linesClass,
      J = ~(I || "").indexOf("++"),
      K = [],
      Q = "flex" === b.display,
      U = D.style.display;
    for (
      J && (I = I.split("++").join("")),
        Q && (D.style.display = "block"),
        l = (r = D.getElementsByTagName("*")).length,
        a = [],
        E = 0;
      E < l;
      E++
    )
      a[E] = r[E];
    if (P || G)
      for (E = 0; E < l; E++)
        ((h = (d = a[E]).parentNode === D) || G || (q && !z)) &&
          ((y = d.offsetTop),
          P &&
            h &&
            Math.abs(y - S) > W &&
            ("BR" !== d.nodeName || 0 === E) &&
            ((B = []), P.push(B), (S = y)),
          G &&
            ((d._x = d.offsetLeft),
            (d._y = y),
            (d._w = d.offsetWidth),
            (d._h = d.offsetHeight)),
          P &&
            (((d._isSplit && h) ||
              (!q && h) ||
              (z && h) ||
              (!z &&
                d.parentNode.parentNode === D &&
                !d.parentNode._isSplit)) &&
              (B.push(d), (d._x -= _), v(d, D, R) && (d._wordEnd = !0)),
            "BR" === d.nodeName &&
              ((d.nextSibling && "BR" === d.nextSibling.nodeName) || 0 === E) &&
              P.push([])));
    for (E = 0; E < l; E++)
      if (((h = (d = a[E]).parentNode === D), "BR" !== d.nodeName))
        if (
          (G &&
            ((A = d.style),
            z || h || ((d._x += d.parentNode._x), (d._y += d.parentNode._y)),
            (A.left = d._x + "px"),
            (A.top = d._y + "px"),
            (A.position = "absolute"),
            (A.display = "block"),
            (A.width = d._w + 1 + "px"),
            (A.height = d._h + "px")),
          !z && q)
        )
          if (d._isSplit)
            for (
              d._next = r = d.nextSibling, d.parentNode.appendChild(d);
              r && 3 === r.nodeType && " " === r.textContent;

            )
              (d._next = r.nextSibling),
                d.parentNode.appendChild(r),
                (r = r.nextSibling);
          else
            d.parentNode._isSplit
              ? ((d._parent = d.parentNode),
                !d.previousSibling &&
                  d.firstChild &&
                  (d.firstChild._isFirst = !0),
                d.nextSibling &&
                  " " === d.nextSibling.textContent &&
                  !d.nextSibling.nextSibling &&
                  K.push(d.nextSibling),
                (d._next =
                  d.nextSibling && d.nextSibling._isFirst
                    ? null
                    : d.nextSibling),
                d.parentNode.removeChild(d),
                a.splice(E--, 1),
                l--)
              : h ||
                ((y = !d.nextSibling && v(d.parentNode, D, R)),
                d.parentNode._parent && d.parentNode._parent.appendChild(d),
                y && d.parentNode.appendChild(X.createTextNode(" ")),
                "span" === j && (d.style.display = "inline"),
                O.push(d));
        else
          d.parentNode._isSplit && !d._isSplit && "" !== d.innerHTML
            ? V.push(d)
            : q &&
              !d._isSplit &&
              ("span" === j && (d.style.display = "inline"), O.push(d));
      else
        P || G
          ? (d.parentNode && d.parentNode.removeChild(d), a.splice(E--, 1), l--)
          : z || D.appendChild(d);
    for (E = K.length; -1 < --E; ) K[E].parentNode.removeChild(K[E]);
    if (P) {
      for (
        G &&
          ((c = X.createElement(j)),
          D.appendChild(c),
          (g = c.offsetWidth + "px"),
          (y = c.offsetParent === D ? 0 : D.offsetLeft),
          D.removeChild(c)),
          A = D.style.cssText,
          D.style.cssText = "display:none;";
        D.firstChild;

      )
        D.removeChild(D.firstChild);
      for (f = " " === R && (!G || (!z && !q)), E = 0; E < P.length; E++) {
        for (
          B = P[E],
            (c = X.createElement(j)).style.cssText =
              "display:block;text-align:" +
              H +
              ";position:" +
              (G ? "absolute;" : "relative;"),
            I && (c.className = I + (J ? E + 1 : "")),
            M.push(c),
            l = B.length,
            r = 0;
          r < l;
          r++
        )
          "BR" !== B[r].nodeName &&
            ((d = B[r]),
            c.appendChild(d),
            f && d._wordEnd && c.appendChild(X.createTextNode(" ")),
            G &&
              (0 === r &&
                ((c.style.top = d._y + "px"), (c.style.left = _ + y + "px")),
              (d.style.top = "0px"),
              y && (d.style.left = d._x - y + "px")));
        0 === l
          ? (c.innerHTML = "&nbsp;")
          : z || q || (w(c), t(c, String.fromCharCode(160), " ")),
          G && ((c.style.width = g), (c.style.height = d._h + "px")),
          D.appendChild(c);
      }
      D.style.cssText = A;
    }
    G &&
      (s > D.clientHeight &&
        ((D.style.height = s - N + "px"),
        D.clientHeight < s && (D.style.height = s + T + "px")),
      n > D.clientWidth &&
        ((D.style.width = n - L + "px"),
        D.clientWidth < n && (D.style.width = n + m + "px"))),
      Q && (U ? (D.style.display = U) : D.style.removeProperty("display")),
      u(F, O),
      z && u(C, V),
      u(i, M);
  }
  function z(D, u, e, F) {
    function eb(D) {
      return D === B || (D === T && " " === B);
    }
    var C,
      i,
      n,
      s,
      E,
      r,
      l,
      o,
      d = u.tag ? u.tag : u.span ? "span" : "div",
      a = ~(u.type || u.split || "chars,words,lines").indexOf("chars"),
      h = p(u),
      B = u.wordDelimiter || " ",
      f = " " !== B ? "" : h ? "&#173; " : " ",
      A = "</" + d + ">",
      c = 1,
      x = u.specialChars
        ? "function" == typeof u.specialChars
          ? u.specialChars
          : q
        : null,
      g = X.createElement("div"),
      y = D.parentNode;
    for (
      y.insertBefore(g, D),
        g.textContent = D.nodeValue,
        y.removeChild(D),
        l =
          -1 !==
          (C = (function getText(D) {
            var u = D.nodeType,
              e = "";
            if (1 === u || 9 === u || 11 === u) {
              if ("string" == typeof D.textContent) return D.textContent;
              for (D = D.firstChild; D; D = D.nextSibling) e += getText(D);
            } else if (3 === u || 4 === u) return D.nodeValue;
            return e;
          })((D = g))).indexOf("<"),
        !1 !== u.reduceWhiteSpace && (C = C.replace(S, " ").replace(_, "")),
        l && (C = C.split("<").join("{{LT}}")),
        E = C.length,
        i = (" " === C.charAt(0) ? f : "") + e(),
        n = 0;
      n < E;
      n++
    )
      if (((r = C.charAt(n)), x && (o = x(C.substr(n), u.specialChars))))
        (r = C.substr(n, o || 1)),
          (i += a && " " !== r ? F() + r + "</" + d + ">" : r),
          (n += o - 1);
      else if (eb(r) && !eb(C.charAt(n - 1)) && n) {
        for (i += c ? A : "", c = 0; eb(C.charAt(n + 1)); ) (i += f), n++;
        n === E - 1
          ? (i += f)
          : ")" !== C.charAt(n + 1) && ((i += f + e()), (c = 1));
      } else
        "{" === r && "{{LT}}" === C.substr(n, 6)
          ? ((i += a ? F() + "{{LT}}</" + d + ">" : "{{LT}}"), (n += 5))
          : (55296 <= r.charCodeAt(0) && r.charCodeAt(0) <= 56319) ||
            (65024 <= C.charCodeAt(n + 1) && C.charCodeAt(n + 1) <= 65039)
          ? ((s = ((C.substr(n, 12).split(b) || [])[1] || "").length || 2),
            (i +=
              a && " " !== r
                ? F() + C.substr(n, s) + "</" + d + ">"
                : C.substr(n, s)),
            (n += s - 1))
          : (i += a && " " !== r ? F() + r + "</" + d + ">" : r);
    (D.outerHTML = i + (c ? A : "")), l && t(y, "{{LT}}", "<");
  }
  function A(D, u, e, t) {
    var F,
      C,
      i = E(D.childNodes),
      n = i.length,
      s = p(u);
    if (3 !== D.nodeType || 1 < n) {
      for (u.absolute = !1, F = 0; F < n; F++)
        ((C = i[F])._next = C._isFirst = C._parent = C._wordEnd = null),
          (3 === C.nodeType && !/\S+/.test(C.nodeValue)) ||
            (s &&
              3 !== C.nodeType &&
              "inline" === o(C).display &&
              ((C.style.display = "inline-block"),
              (C.style.position = "relative")),
            (C._isSplit = !0),
            A(C, u, e, t));
      return (u.absolute = s), void (D._isSplit = !0);
    }
    z(D, u, e, t);
  }
  var X,
    e,
    F,
    C,
    i,
    E,
    r,
    _ = /(?:\r|\n|\t\t)/g,
    S = /(?:\s\s+)/g,
    T = String.fromCharCode(160),
    l =
      (((r = SplitText.prototype).split = function split(D) {
        this.isSplit && this.revert(),
          (this.vars = D = D || this.vars),
          (this._originals.length =
            this.chars.length =
            this.words.length =
            this.lines.length =
              0);
        for (
          var u,
            e,
            t,
            F = this.elements.length,
            C = D.tag ? D.tag : D.span ? "span" : "div",
            i = s(D.wordsClass, C),
            n = s(D.charsClass, C);
          -1 < --F;

        )
          (t = this.elements[F]),
            (this._originals[F] = {
              html: t.innerHTML,
              style: t.getAttribute("style"),
            }),
            (u = t.clientHeight),
            (e = t.clientWidth),
            A(t, D, i, n),
            y(t, D, this.chars, this.words, this.lines, e, u);
        return (
          this.chars.reverse(),
          this.words.reverse(),
          this.lines.reverse(),
          (this.isSplit = !0),
          this
        );
      }),
      (r.revert = function revert() {
        var e = this._originals;
        if (!e) throw "revert() call wasn't scoped properly.";
        return (
          this.elements.forEach(function (D, u) {
            (D.innerHTML = e[u].html), D.setAttribute("style", e[u].style);
          }),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this.isSplit = !1),
          this
        );
      }),
      (SplitText.create = function create(D, u) {
        return new SplitText(D, u);
      }),
      SplitText);
  function SplitText(D, u) {
    F || n(),
      (this.elements = E(D)),
      (this.chars = []),
      (this.words = []),
      (this.lines = []),
      (this._originals = []),
      (this.vars = u || {}),
      i(this),
      this.split(u);
  }
  (l.version = "3.12.5"), (l.register = n), (D.SplitText = l), (D.default = l);
  if (typeof window === "undefined" || window !== D) {
    Object.defineProperty(D, "__esModule", { value: !0 });
  } else {
    delete D.default;
  }
});

/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function r() {
    return (
      Ce ||
      ("undefined" != typeof window &&
        (Ce = window.gsap) &&
        Ce.registerPlugin &&
        Ce)
    );
  }
  function z(e, t) {
    return ~Le.indexOf(e) && Le[Le.indexOf(e) + 1][t];
  }
  function A(e) {
    return !!~t.indexOf(e);
  }
  function B(e, t, r, n, o) {
    return e.addEventListener(t, r, { passive: !1 !== n, capture: !!o });
  }
  function C(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function F() {
    return (De && De.isPressed) || Ie.cache++;
  }
  function G(r, n) {
    function dd(e) {
      if (e || 0 === e) {
        o && (Se.history.scrollRestoration = "manual");
        var t = De && De.isPressed;
        (e = dd.v = Math.round(e) || (De && De.iOS ? 1 : 0)),
          r(e),
          (dd.cacheID = Ie.cache),
          t && i("ss", e);
      } else (n || Ie.cache !== dd.cacheID || i("ref")) && ((dd.cacheID = Ie.cache), (dd.v = r()));
      return dd.v + dd.offset;
    }
    return (dd.offset = 0), r && dd;
  }
  function J(e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || Ce.utils.toArray)(e)[0] ||
      ("string" == typeof e && !1 !== Ce.config().nullTargetWarn
        ? console.warn("Element not found:", e)
        : null)
    );
  }
  function K(t, e) {
    var r = e.s,
      n = e.sc;
    A(t) && (t = ke.scrollingElement || Pe);
    var o = Ie.indexOf(t),
      i = n === Fe.sc ? 1 : 2;
    ~o || (o = Ie.push(t) - 1), Ie[o + i] || B(t, "scroll", F);
    var a = Ie[o + i],
      s =
        a ||
        (Ie[o + i] =
          G(z(t, r), !0) ||
          (A(t)
            ? n
            : G(function (e) {
                return arguments.length ? (t[r] = e) : t[r];
              })));
    return (
      (s.target = t),
      a || (s.smooth = "smooth" === Ce.getProperty(t, "scrollBehavior")),
      s
    );
  }
  function L(e, t, o) {
    function Cd(e, t) {
      var r = ze();
      t || n < r - s
        ? ((a = i), (i = e), (l = s), (s = r))
        : o
        ? (i += e)
        : (i = a + ((e - a) / (r - l)) * (s - l));
    }
    var i = e,
      a = e,
      s = ze(),
      l = s,
      n = t || 50,
      c = Math.max(500, 3 * n);
    return {
      update: Cd,
      reset: function reset() {
        (a = i = o ? 0 : i), (l = s = 0);
      },
      getVelocity: function getVelocity(e) {
        var t = l,
          r = a,
          n = ze();
        return (
          (!e && 0 !== e) || e === i || Cd(e),
          s === l || c < n - l
            ? 0
            : ((i + (o ? r : -r)) / ((o ? n : s) - t)) * 1e3
        );
      },
    };
  }
  function M(e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  }
  function N(e) {
    var t = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r;
  }
  function O() {
    (Ae = Ce.core.globals().ScrollTrigger) &&
      Ae.core &&
      (function _integrate() {
        var e = Ae.core,
          r = e.bridge || {},
          t = e._scrollers,
          n = e._proxies;
        t.push.apply(t, Ie),
          n.push.apply(n, Le),
          (Ie = t),
          (Le = n),
          (i = function _bridge(e, t) {
            return r[e](t);
          });
      })();
  }
  function P(e) {
    return (
      (Ce = e || r()),
      !Te &&
        Ce &&
        "undefined" != typeof document &&
        document.body &&
        ((Se = window),
        (Pe = (ke = document).documentElement),
        (Me = ke.body),
        (t = [Se, ke, Pe, Me]),
        Ce.utils.clamp,
        (Be = Ce.core.context || function () {}),
        (Oe = "onpointerenter" in Me ? "pointer" : "mouse"),
        (Ee = k.isTouch =
          Se.matchMedia &&
          Se.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Se ||
              0 < navigator.maxTouchPoints ||
              0 < navigator.msMaxTouchPoints
            ? 2
            : 0),
        (Re = k.eventTypes =
          (
            "ontouchstart" in Pe
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Pe
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (o = 0);
        }, 500),
        O(),
        (Te = 1)),
      Te
    );
  }
  var Ce,
    Te,
    Se,
    ke,
    Pe,
    Me,
    Ee,
    Oe,
    Ae,
    t,
    De,
    Re,
    Be,
    o = 1,
    qe = [],
    Ie = [],
    Le = [],
    ze = Date.now,
    i = function _bridge(e, t) {
      return t;
    },
    n = "scrollLeft",
    a = "scrollTop",
    Ye = {
      s: n,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: G(function (e) {
        return arguments.length
          ? Se.scrollTo(e, Fe.sc())
          : Se.pageXOffset || ke[n] || Pe[n] || Me[n] || 0;
      }),
    },
    Fe = {
      s: a,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Ye,
      sc: G(function (e) {
        return arguments.length
          ? Se.scrollTo(Ye.sc(), e)
          : Se.pageYOffset || ke[a] || Pe[a] || Me[a] || 0;
      }),
    };
  (Ye.op = Fe), (Ie.cache = 0);
  var k =
    ((Observer.prototype.init = function init(e) {
      Te || P(Ce) || console.warn("Please gsap.registerPlugin(Observer)"),
        Ae || O();
      var o = e.tolerance,
        a = e.dragMinimum,
        t = e.type,
        i = e.target,
        r = e.lineHeight,
        n = e.debounce,
        s = e.preventDefault,
        l = e.onStop,
        c = e.onStopDelay,
        u = e.ignore,
        f = e.wheelSpeed,
        d = e.event,
        p = e.onDragStart,
        g = e.onDragEnd,
        h = e.onDrag,
        v = e.onPress,
        b = e.onRelease,
        m = e.onRight,
        y = e.onLeft,
        x = e.onUp,
        w = e.onDown,
        _ = e.onChangeX,
        T = e.onChangeY,
        S = e.onChange,
        k = e.onToggleX,
        E = e.onToggleY,
        D = e.onHover,
        R = e.onHoverEnd,
        q = e.onMove,
        I = e.ignoreCheck,
        z = e.isNormalizer,
        Y = e.onGestureStart,
        H = e.onGestureEnd,
        X = e.onWheel,
        W = e.onEnable,
        V = e.onDisable,
        U = e.onClick,
        j = e.scrollSpeed,
        G = e.capture,
        Q = e.allowClicks,
        Z = e.lockAxis,
        $ = e.onLockAxis;
      function cf() {
        return (xe = ze());
      }
      function df(e, t) {
        return (
          ((se.event = e) && u && ~u.indexOf(e.target)) ||
          (t && he && "touch" !== e.pointerType) ||
          (I && I(e, t))
        );
      }
      function ff() {
        var e = (se.deltaX = N(me)),
          t = (se.deltaY = N(ye)),
          r = Math.abs(e) >= o,
          n = Math.abs(t) >= o;
        S && (r || n) && S(se, e, t, me, ye),
          r &&
            (m && 0 < se.deltaX && m(se),
            y && se.deltaX < 0 && y(se),
            _ && _(se),
            k && se.deltaX < 0 != le < 0 && k(se),
            (le = se.deltaX),
            (me[0] = me[1] = me[2] = 0)),
          n &&
            (w && 0 < se.deltaY && w(se),
            x && se.deltaY < 0 && x(se),
            T && T(se),
            E && se.deltaY < 0 != ce < 0 && E(se),
            (ce = se.deltaY),
            (ye[0] = ye[1] = ye[2] = 0)),
          (ne || re) && (q && q(se), re && (h(se), (re = !1)), (ne = !1)),
          ie && !(ie = !1) && $ && $(se),
          oe && (X(se), (oe = !1)),
          (ee = 0);
      }
      function gf(e, t, r) {
        (me[r] += e),
          (ye[r] += t),
          se._vx.update(e),
          se._vy.update(t),
          n ? (ee = ee || requestAnimationFrame(ff)) : ff();
      }
      function hf(e, t) {
        Z &&
          !ae &&
          ((se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y"), (ie = !0)),
          "y" !== ae && ((me[2] += e), se._vx.update(e, !0)),
          "x" !== ae && ((ye[2] += t), se._vy.update(t, !0)),
          n ? (ee = ee || requestAnimationFrame(ff)) : ff();
      }
      function jf(e) {
        if (!df(e, 1)) {
          var t = (e = M(e, s)).clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y,
            i = se.isDragging;
          (se.x = t),
            (se.y = r),
            (i ||
              Math.abs(se.startX - t) >= a ||
              Math.abs(se.startY - r) >= a) &&
              (h && (re = !0),
              i || (se.isDragging = !0),
              hf(n, o),
              i || (p && p(se)));
        }
      }
      function mf(e) {
        return (
          e.touches &&
          1 < e.touches.length &&
          (se.isGesturing = !0) &&
          Y(e, se.isDragging)
        );
      }
      function nf() {
        return (se.isGesturing = !1) || H(se);
      }
      function of(e) {
        if (!df(e)) {
          var t = fe(),
            r = de();
          gf((t - pe) * j, (r - ge) * j, 1),
            (pe = t),
            (ge = r),
            l && te.restart(!0);
        }
      }
      function pf(e) {
        if (!df(e)) {
          (e = M(e, s)), X && (oe = !0);
          var t =
            (1 === e.deltaMode ? r : 2 === e.deltaMode ? Se.innerHeight : 1) *
            f;
          gf(e.deltaX * t, e.deltaY * t, 0), l && !z && te.restart(!0);
        }
      }
      function qf(e) {
        if (!df(e)) {
          var t = e.clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y;
          (se.x = t),
            (se.y = r),
            (ne = !0),
            l && te.restart(!0),
            (n || o) && hf(n, o);
        }
      }
      function rf(e) {
        (se.event = e), D(se);
      }
      function sf(e) {
        (se.event = e), R(se);
      }
      function tf(e) {
        return df(e) || (M(e, s) && U(se));
      }
      (this.target = i = J(i) || Pe),
        (this.vars = e),
        (u = u && Ce.utils.toArray(u)),
        (o = o || 1e-9),
        (a = a || 0),
        (f = f || 1),
        (j = j || 1),
        (t = t || "wheel,touch,pointer"),
        (n = !1 !== n),
        (r = r || parseFloat(Se.getComputedStyle(Me).lineHeight) || 22);
      var ee,
        te,
        re,
        ne,
        oe,
        ie,
        ae,
        se = this,
        le = 0,
        ce = 0,
        ue = e.passive || !s,
        fe = K(i, Ye),
        de = K(i, Fe),
        pe = fe(),
        ge = de(),
        he =
          ~t.indexOf("touch") &&
          !~t.indexOf("pointer") &&
          "pointerdown" === Re[0],
        ve = A(i),
        be = i.ownerDocument || ke,
        me = [0, 0, 0],
        ye = [0, 0, 0],
        xe = 0,
        we = (se.onPress = function (e) {
          df(e, 1) ||
            (e && e.button) ||
            ((se.axis = ae = null),
            te.pause(),
            (se.isPressed = !0),
            (e = M(e)),
            (le = ce = 0),
            (se.startX = se.x = e.clientX),
            (se.startY = se.y = e.clientY),
            se._vx.reset(),
            se._vy.reset(),
            B(z ? i : be, Re[1], jf, ue, !0),
            (se.deltaX = se.deltaY = 0),
            v && v(se));
        }),
        _e = (se.onRelease = function (t) {
          if (!df(t, 1)) {
            C(z ? i : be, Re[1], jf, !0);
            var e = !isNaN(se.y - se.startY),
              r = se.isDragging,
              n =
                r &&
                (3 < Math.abs(se.x - se.startX) ||
                  3 < Math.abs(se.y - se.startY)),
              o = M(t);
            !n &&
              e &&
              (se._vx.reset(),
              se._vy.reset(),
              s &&
                Q &&
                Ce.delayedCall(0.08, function () {
                  if (300 < ze() - xe && !t.defaultPrevented)
                    if (t.target.click) t.target.click();
                    else if (be.createEvent) {
                      var e = be.createEvent("MouseEvents");
                      e.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Se,
                        1,
                        o.screenX,
                        o.screenY,
                        o.clientX,
                        o.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        t.target.dispatchEvent(e);
                    }
                })),
              (se.isDragging = se.isGesturing = se.isPressed = !1),
              l && r && !z && te.restart(!0),
              g && r && g(se),
              b && b(se, n);
          }
        });
      (te = se._dc =
        Ce.delayedCall(c || 0.25, function onStopFunc() {
          se._vx.reset(), se._vy.reset(), te.pause(), l && l(se);
        }).pause()),
        (se.deltaX = se.deltaY = 0),
        (se._vx = L(0, 50, !0)),
        (se._vy = L(0, 50, !0)),
        (se.scrollX = fe),
        (se.scrollY = de),
        (se.isDragging = se.isGesturing = se.isPressed = !1),
        Be(this),
        (se.enable = function (e) {
          return (
            se.isEnabled ||
              (B(ve ? be : i, "scroll", F),
              0 <= t.indexOf("scroll") && B(ve ? be : i, "scroll", of, ue, G),
              0 <= t.indexOf("wheel") && B(i, "wheel", pf, ue, G),
              ((0 <= t.indexOf("touch") && Ee) || 0 <= t.indexOf("pointer")) &&
                (B(i, Re[0], we, ue, G),
                B(be, Re[2], _e),
                B(be, Re[3], _e),
                Q && B(i, "click", cf, !0, !0),
                U && B(i, "click", tf),
                Y && B(be, "gesturestart", mf),
                H && B(be, "gestureend", nf),
                D && B(i, Oe + "enter", rf),
                R && B(i, Oe + "leave", sf),
                q && B(i, Oe + "move", qf)),
              (se.isEnabled = !0),
              e && e.type && we(e),
              W && W(se)),
            se
          );
        }),
        (se.disable = function () {
          se.isEnabled &&
            (qe.filter(function (e) {
              return e !== se && A(e.target);
            }).length || C(ve ? be : i, "scroll", F),
            se.isPressed &&
              (se._vx.reset(), se._vy.reset(), C(z ? i : be, Re[1], jf, !0)),
            C(ve ? be : i, "scroll", of, G),
            C(i, "wheel", pf, G),
            C(i, Re[0], we, G),
            C(be, Re[2], _e),
            C(be, Re[3], _e),
            C(i, "click", cf, !0),
            C(i, "click", tf),
            C(be, "gesturestart", mf),
            C(be, "gestureend", nf),
            C(i, Oe + "enter", rf),
            C(i, Oe + "leave", sf),
            C(i, Oe + "move", qf),
            (se.isEnabled = se.isPressed = se.isDragging = !1),
            V && V(se));
        }),
        (se.kill = se.revert =
          function () {
            se.disable();
            var e = qe.indexOf(se);
            0 <= e && qe.splice(e, 1), De === se && (De = 0);
          }),
        qe.push(se),
        z && A(i) && (De = se),
        se.enable(d);
    }),
    (function _createClass(e, t, r) {
      return (
        t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
      );
    })(Observer, [
      {
        key: "velocityX",
        get: function get() {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function get() {
          return this._vy.getVelocity();
        },
      },
    ]),
    Observer);
  function Observer(e) {
    this.init(e);
  }
  (k.version = "3.12.5"),
    (k.create = function (e) {
      return new k(e);
    }),
    (k.register = P),
    (k.getAll = function () {
      return qe.slice();
    }),
    (k.getById = function (t) {
      return qe.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    r() && Ce.registerPlugin(k);
  function Ca(e, t, r) {
    var n = ct(e) && ("clamp(" === e.substr(0, 6) || -1 < e.indexOf("max"));
    return (r["_" + t + "Clamp"] = n) ? e.substr(6, e.length - 7) : e;
  }
  function Da(e, t) {
    return !t || (ct(e) && "clamp(" === e.substr(0, 6))
      ? e
      : "clamp(" + e + ")";
  }
  function Fa() {
    return (Ge = 1);
  }
  function Ga() {
    return (Ge = 0);
  }
  function Ha(e) {
    return e;
  }
  function Ia(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }
  function Ja() {
    return "undefined" != typeof window;
  }
  function Ka() {
    return He || (Ja() && (He = window.gsap) && He.registerPlugin && He);
  }
  function La(e) {
    return !!~l.indexOf(e);
  }
  function Ma(e) {
    return (
      ("Height" === e ? T : Ne["inner" + e]) ||
      Je["client" + e] ||
      We["client" + e]
    );
  }
  function Na(e) {
    return (
      z(e, "getBoundingClientRect") ||
      (La(e)
        ? function () {
            return (Ot.width = Ne.innerWidth), (Ot.height = T), Ot;
          }
        : function () {
            return wt(e);
          })
    );
  }
  function Qa(e, t) {
    var r = t.s,
      n = t.d2,
      o = t.d,
      i = t.a;
    return Math.max(
      0,
      (r = "scroll" + n) && (i = z(e, r))
        ? i() - Na(e)()[o]
        : La(e)
        ? (Je[r] || We[r]) - Ma(n)
        : e[r] - e["offset" + n]
    );
  }
  function Ra(e, t) {
    for (var r = 0; r < g.length; r += 3)
      (t && !~t.indexOf(g[r + 1])) || e(g[r], g[r + 1], g[r + 2]);
  }
  function Ta(e) {
    return "function" == typeof e;
  }
  function Ua(e) {
    return "number" == typeof e;
  }
  function Va(e) {
    return "object" == typeof e;
  }
  function Wa(e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause();
  }
  function Xa(e, t) {
    if (e.enabled) {
      var r = e._ctx
        ? e._ctx.add(function () {
            return t(e);
          })
        : t(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  }
  function mb(e) {
    return Ne.getComputedStyle(e);
  }
  function ob(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  }
  function qb(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  }
  function rb(e) {
    var t,
      r = [],
      n = e.labels,
      o = e.duration();
    for (t in n) r.push(n[t] / o);
    return r;
  }
  function tb(o) {
    var i = He.utils.snap(o),
      a =
        Array.isArray(o) &&
        o.slice(0).sort(function (e, t) {
          return e - t;
        });
    return a
      ? function (e, t, r) {
          var n;
          if ((void 0 === r && (r = 0.001), !t)) return i(e);
          if (0 < t) {
            for (e -= r, n = 0; n < a.length; n++) if (a[n] >= e) return a[n];
            return a[n - 1];
          }
          for (n = a.length, e += r; n--; ) if (a[n] <= e) return a[n];
          return a[0];
        }
      : function (e, t, r) {
          void 0 === r && (r = 0.001);
          var n = i(e);
          return !t || Math.abs(n - e) < r || n - e < 0 == t < 0
            ? n
            : i(t < 0 ? e - o : e + o);
        };
  }
  function vb(t, r, e, n) {
    return e.split(",").forEach(function (e) {
      return t(r, e, n);
    });
  }
  function wb(e, t, r, n, o) {
    return e.addEventListener(t, r, { passive: !n, capture: !!o });
  }
  function xb(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function yb(e, t, r) {
    (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r));
  }
  function Cb(e, t) {
    if (ct(e)) {
      var r = e.indexOf("="),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (n *= t / 100), (e = e.substr(0, r - 1))),
        (e =
          n +
          (e in H
            ? H[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  }
  function Db(e, t, r, n, o, i, a, s) {
    var l = o.startColor,
      c = o.endColor,
      u = o.fontSize,
      f = o.indent,
      d = o.fontWeight,
      p = Xe.createElement("div"),
      g = La(r) || "fixed" === z(r, "pinType"),
      h = -1 !== e.indexOf("scroller"),
      v = g ? We : r,
      b = -1 !== e.indexOf("start"),
      m = b ? l : c,
      y =
        "border-color:" +
        m +
        ";font-size:" +
        u +
        ";color:" +
        m +
        ";font-weight:" +
        d +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (y += "position:" + ((h || s) && g ? "fixed;" : "absolute;")),
      (!h && !s && g) ||
        (y += (n === Fe ? q : I) + ":" + (i + parseFloat(f)) + "px;"),
      a &&
        (y +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (p._isStart = b),
      p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (p.style.cssText = y),
      (p.innerText = t || 0 === t ? e + "-" + t : e),
      v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p),
      (p._offset = p["offset" + n.op.d2]),
      X(p, 0, n, b),
      p
    );
  }
  function Ib() {
    return 34 < at() - st && (D = D || requestAnimationFrame(Z));
  }
  function Jb() {
    (v && v.isPressed && !(v.startX > We.clientWidth)) ||
      (Ie.cache++,
      v ? (D = D || requestAnimationFrame(Z)) : Z(),
      st || U("scrollStart"),
      (st = at()));
  }
  function Kb() {
    (y = Ne.innerWidth), (m = Ne.innerHeight);
  }
  function Lb() {
    Ie.cache++,
      je ||
        h ||
        Xe.fullscreenElement ||
        Xe.webkitFullscreenElement ||
        (b &&
          y === Ne.innerWidth &&
          !(Math.abs(Ne.innerHeight - m) > 0.25 * Ne.innerHeight)) ||
        c.restart(!0);
  }
  function Ob() {
    return xb(ne, "scrollEnd", Ob) || Pt(!0);
  }
  function Rb(e) {
    for (var t = 0; t < j.length; t += 5)
      (!e || (j[t + 4] && j[t + 4].query === e)) &&
        ((j[t].style.cssText = j[t + 1]),
        j[t].getBBox && j[t].setAttribute("transform", j[t + 2] || ""),
        (j[t + 3].uncache = 1));
  }
  function Sb(e, t) {
    var r;
    for (Qe = 0; Qe < Tt.length; Qe++)
      !(r = Tt[Qe]) ||
        (t && r._ctx !== t) ||
        (e ? r.kill(1) : r.revert(!0, !0));
    (S = !0), t && Rb(t), t || U("revert");
  }
  function Tb(e, t) {
    Ie.cache++,
      (!t && rt) ||
        Ie.forEach(function (e) {
          return Ta(e) && e.cacheID++ && (e.rec = 0);
        }),
      ct(e) && (Ne.history.scrollRestoration = w = e);
  }
  function Yb() {
    We.appendChild(_),
      (T = (!v && _.offsetHeight) || Ne.innerHeight),
      We.removeChild(_);
  }
  function Zb(t) {
    return Ve(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (e) {
      return (e.style.display = t ? "none" : "block");
    });
  }
  function gc(e, t, r, n) {
    if (!e._gsap.swappedIn) {
      for (var o, i = $.length, a = t.style, s = e.style; i--; )
        a[(o = $[i])] = r[o];
      (a.position = "absolute" === r.position ? "absolute" : "relative"),
        "inline" === r.display && (a.display = "inline-block"),
        (s[I] = s[q] = "auto"),
        (a.flexBasis = r.flexBasis || "auto"),
        (a.overflow = "visible"),
        (a.boxSizing = "border-box"),
        (a[ft] = qb(e, Ye) + xt),
        (a[dt] = qb(e, Fe) + xt),
        (a[bt] = s[mt] = s.top = s.left = "0"),
        Et(n),
        (s[ft] = s.maxWidth = r[ft]),
        (s[dt] = s.maxHeight = r[dt]),
        (s[bt] = r[bt]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  }
  function jc(e) {
    for (var t = ee.length, r = e.style, n = [], o = 0; o < t; o++)
      n.push(ee[o], r[ee[o]]);
    return (n.t = e), n;
  }
  function mc(e, t, r, n, o, i, a, s, l, c, u, f, d, p) {
    Ta(e) && (e = e(s)),
      ct(e) &&
        "max" === e.substr(0, 3) &&
        (e = f + ("=" === e.charAt(4) ? Cb("0" + e.substr(3), r) : 0));
    var g,
      h,
      v,
      b = d ? d.time() : 0;
    if ((d && d.seek(0), isNaN(e) || (e = +e), Ua(e)))
      d &&
        (e = He.utils.mapRange(
          d.scrollTrigger.start,
          d.scrollTrigger.end,
          0,
          f,
          e
        )),
        a && X(a, r, n, !0);
    else {
      Ta(t) && (t = t(s));
      var m,
        y,
        x,
        w,
        _ = (e || "0").split(" ");
      (v = J(t, s) || We),
        ((m = wt(v) || {}) && (m.left || m.top)) ||
          "none" !== mb(v).display ||
          ((w = v.style.display),
          (v.style.display = "block"),
          (m = wt(v)),
          w ? (v.style.display = w) : v.style.removeProperty("display")),
        (y = Cb(_[0], m[n.d])),
        (x = Cb(_[1] || "0", r)),
        (e = m[n.p] - l[n.p] - c + y + o - x),
        a && X(a, x, n, r - x < 20 || (a._isStart && 20 < x)),
        (r -= r - x);
    }
    if ((p && ((s[p] = e || -0.001), e < 0 && (e = 0)), i)) {
      var C = e + r,
        T = i._isStart;
      (g = "scroll" + n.d2),
        X(
          i,
          C,
          n,
          (T && 20 < C) ||
            (!T && (u ? Math.max(We[g], Je[g]) : i.parentNode[g]) <= C + 1)
        ),
        u &&
          ((l = wt(a)),
          u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + xt));
    }
    return (
      d &&
        v &&
        ((g = wt(v)),
        d.seek(f),
        (h = wt(v)),
        (d._caScrollDist = g[n.p] - h[n.p]),
        (e = (e / d._caScrollDist) * f)),
      d && d.seek(b),
      d ? e : Math.round(e)
    );
  }
  function oc(e, t, r, n) {
    if (e.parentNode !== t) {
      var o,
        i,
        a = e.style;
      if (t === We) {
        for (o in ((e._stOrig = a.cssText), (i = mb(e))))
          +o ||
            re.test(o) ||
            !i[o] ||
            "string" != typeof a[o] ||
            "0" === o ||
            (a[o] = i[o]);
        (a.top = r), (a.left = n);
      } else a.cssText = e._stOrig;
      (He.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  }
  function pc(r, e, n) {
    var o = e,
      i = o;
    return function (e) {
      var t = Math.round(r());
      return (
        t !== o &&
          t !== i &&
          3 < Math.abs(t - o) &&
          3 < Math.abs(t - i) &&
          ((e = t), n && n()),
        (i = o),
        (o = e)
      );
    };
  }
  function qc(e, t, r) {
    var n = {};
    (n[t.p] = "+=" + r), He.set(e, n);
  }
  function rc(c, e) {
    function Ck(e, t, r, n, o) {
      var i = Ck.tween,
        a = t.onComplete,
        s = {};
      r = r || u();
      var l = pc(u, r, function () {
        i.kill(), (Ck.tween = 0);
      });
      return (
        (o = (n && o) || 0),
        (n = n || e - r),
        i && i.kill(),
        (t[f] = e),
        (t.inherit = !1),
        ((t.modifiers = s)[f] = function () {
          return l(r + n * i.ratio + o * i.ratio * i.ratio);
        }),
        (t.onUpdate = function () {
          Ie.cache++, Ck.tween && Z();
        }),
        (t.onComplete = function () {
          (Ck.tween = 0), a && a.call(i);
        }),
        (i = Ck.tween = He.to(c, t))
      );
    }
    var u = K(c, e),
      f = "_scroll" + e.p2;
    return (
      ((c[f] = u).wheelHandler = function () {
        return Ck.tween && Ck.tween.kill() && (Ck.tween = 0);
      }),
      wb(c, "wheel", u.wheelHandler),
      ne.isTouch && wb(c, "touchmove", u.wheelHandler),
      Ck
    );
  }
  var He,
    s,
    Ne,
    Xe,
    Je,
    We,
    l,
    c,
    Ve,
    Ue,
    Ke,
    u,
    je,
    Ge,
    f,
    Qe,
    d,
    p,
    g,
    Ze,
    $e,
    h,
    v,
    b,
    m,
    y,
    E,
    x,
    w,
    _,
    T,
    S,
    et,
    tt,
    D,
    rt,
    nt,
    ot,
    it = 1,
    at = Date.now,
    R = at(),
    st = 0,
    lt = 0,
    ct = function _isString(e) {
      return "string" == typeof e;
    },
    ut = Math.abs,
    q = "right",
    I = "bottom",
    ft = "width",
    dt = "height",
    pt = "Right",
    gt = "Left",
    ht = "Top",
    vt = "Bottom",
    bt = "padding",
    mt = "margin",
    yt = "Width",
    Y = "Height",
    xt = "px",
    wt = function _getBounds(e, t) {
      var r =
          t &&
          "matrix(1, 0, 0, 1, 0, 0)" !== mb(e)[f] &&
          He.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        n = e.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    _t = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Ct = { toggleActions: "play", anticipatePin: 0 },
    H = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    X = function _positionMarker(e, t, r, n) {
      var o = { display: "block" },
        i = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
      (e._isFlipped = n),
        (o[r.a + "Percent"] = n ? -100 : 0),
        (o[r.a] = n ? "1px" : 0),
        (o["border" + i + yt] = 1),
        (o["border" + a + yt] = 0),
        (o[r.p] = t + "px"),
        He.set(e, o);
    },
    Tt = [],
    St = {},
    W = {},
    V = [],
    U = function _dispatch(e) {
      return (
        (W[e] &&
          W[e].map(function (e) {
            return e();
          })) ||
        V
      );
    },
    j = [],
    kt = 0,
    Pt = function _refreshAll(e, t) {
      if (!st || e || S) {
        Yb(),
          (rt = ne.isRefreshing = !0),
          Ie.forEach(function (e) {
            return Ta(e) && ++e.cacheID && (e.rec = e());
          });
        var r = U("refreshInit");
        Ze && ne.sort(),
          t || Sb(),
          Ie.forEach(function (e) {
            Ta(e) &&
              (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
          }),
          Tt.slice(0).forEach(function (e) {
            return e.refresh();
          }),
          (S = !1),
          Tt.forEach(function (e) {
            if (e._subPinOffset && e.pin) {
              var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                r = e.pin[t];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh();
            }
          }),
          (et = 1),
          Zb(!0),
          Tt.forEach(function (e) {
            var t = Qa(e.scroller, e._dir),
              r = "max" === e.vars.end || (e._endClamp && e.end > t),
              n = e._startClamp && e.start >= t;
            (r || n) &&
              e.setPositions(
                n ? t - 1 : e.start,
                r ? Math.max(n ? t : e.start + 1, t) : e.end,
                !0
              );
          }),
          Zb(!1),
          (et = 0),
          r.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
          Ie.forEach(function (e) {
            Ta(e) &&
              (e.smooth &&
                requestAnimationFrame(function () {
                  return (e.target.style.scrollBehavior = "smooth");
                }),
              e.rec && e(e.rec));
          }),
          Tb(w, 1),
          c.pause(),
          kt++,
          Z((rt = 2)),
          Tt.forEach(function (e) {
            return Ta(e.vars.onRefresh) && e.vars.onRefresh(e);
          }),
          (rt = ne.isRefreshing = !1),
          U("refresh");
      } else wb(ne, "scrollEnd", Ob);
    },
    Q = 0,
    Mt = 1,
    Z = function _updateAll(e) {
      if (2 === e || (!rt && !S)) {
        (ne.isUpdating = !0), ot && ot.update(0);
        var t = Tt.length,
          r = at(),
          n = 50 <= r - R,
          o = t && Tt[0].scroll();
        if (
          ((Mt = o < Q ? -1 : 1),
          rt || (Q = o),
          n &&
            (st && !Ge && 200 < r - st && ((st = 0), U("scrollEnd")),
            (Ke = R),
            (R = r)),
          Mt < 0)
        ) {
          for (Qe = t; 0 < Qe--; ) Tt[Qe] && Tt[Qe].update(0, n);
          Mt = 1;
        } else for (Qe = 0; Qe < t; Qe++) Tt[Qe] && Tt[Qe].update(0, n);
        ne.isUpdating = !1;
      }
      D = 0;
    },
    $ = [
      "left",
      "top",
      I,
      q,
      mt + vt,
      mt + pt,
      mt + ht,
      mt + gt,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    ee = $.concat([
      ft,
      dt,
      "boxSizing",
      "max" + yt,
      "max" + Y,
      "position",
      mt,
      bt,
      bt + ht,
      bt + pt,
      bt + vt,
      bt + gt,
    ]),
    te = /([A-Z])/g,
    Et = function _setState(e) {
      if (e) {
        var t,
          r,
          n = e.t.style,
          o = e.length,
          i = 0;
        for ((e.t._gsap || He.core.getCache(e.t)).uncache = 1; i < o; i += 2)
          (r = e[i + 1]),
            (t = e[i]),
            r
              ? (n[t] = r)
              : n[t] && n.removeProperty(t.replace(te, "-$1").toLowerCase());
      }
    },
    Ot = { left: 0, top: 0 },
    re = /(webkit|moz|length|cssText|inset)/i,
    ne =
      ((ScrollTrigger.prototype.init = function init(E, O) {
        if (
          ((this.progress = this.start = 0), this.vars && this.kill(!0, !0), lt)
        ) {
          var A,
            n,
            p,
            D,
            R,
            B,
            q,
            I,
            L,
            Y,
            F,
            e,
            H,
            N,
            X,
            W,
            V,
            U,
            t,
            j,
            b,
            G,
            Q,
            m,
            Z,
            y,
            $,
            x,
            r,
            w,
            _,
            ee,
            o,
            g,
            te,
            re,
            ne,
            C,
            i,
            T = (E = ob(ct(E) || Ua(E) || E.nodeType ? { trigger: E } : E, Ct))
              .onUpdate,
            S = E.toggleClass,
            a = E.id,
            k = E.onToggle,
            oe = E.onRefresh,
            P = E.scrub,
            ie = E.trigger,
            ae = E.pin,
            se = E.pinSpacing,
            le = E.invalidateOnRefresh,
            M = E.anticipatePin,
            s = E.onScrubComplete,
            h = E.onSnapComplete,
            ce = E.once,
            ue = E.snap,
            fe = E.pinReparent,
            l = E.pinSpacer,
            de = E.containerAnimation,
            pe = E.fastScrollEnd,
            ge = E.preventOverlaps,
            he =
              E.horizontal || (E.containerAnimation && !1 !== E.horizontal)
                ? Ye
                : Fe,
            ve = !P && 0 !== P,
            be = J(E.scroller || Ne),
            c = He.core.getCache(be),
            me = La(be),
            ye =
              "fixed" ===
              ("pinType" in E
                ? E.pinType
                : z(be, "pinType") || (me && "fixed")),
            xe = [E.onEnter, E.onLeave, E.onEnterBack, E.onLeaveBack],
            we = ve && E.toggleActions.split(" "),
            _e = "markers" in E ? E.markers : Ct.markers,
            Ce = me ? 0 : parseFloat(mb(be)["border" + he.p2 + yt]) || 0,
            Te = this,
            Se =
              E.onRefreshInit &&
              function () {
                return E.onRefreshInit(Te);
              },
            ke = (function _getSizeFunc(e, t, r) {
              var n = r.d,
                o = r.d2,
                i = r.a;
              return (i = z(e, "getBoundingClientRect"))
                ? function () {
                    return i()[n];
                  }
                : function () {
                    return (t ? Ma(o) : e["client" + o]) || 0;
                  };
            })(be, me, he),
            Pe = (function _getOffsetsFunc(e, t) {
              return !t || ~Le.indexOf(e)
                ? Na(e)
                : function () {
                    return Ot;
                  };
            })(be, me),
            Me = 0,
            Ee = 0,
            Oe = 0,
            Ae = K(be, he);
          if (
            ((Te._startClamp = Te._endClamp = !1),
            (Te._dir = he),
            (M *= 45),
            (Te.scroller = be),
            (Te.scroll = de ? de.time.bind(de) : Ae),
            (D = Ae()),
            (Te.vars = E),
            (O = O || E.animation),
            "refreshPriority" in E &&
              ((Ze = 1), -9999 === E.refreshPriority && (ot = Te)),
            (c.tweenScroll = c.tweenScroll || {
              top: rc(be, Fe),
              left: rc(be, Ye),
            }),
            (Te.tweenTo = A = c.tweenScroll[he.p]),
            (Te.scrubDuration = function (e) {
              (o = Ua(e) && e)
                ? ee
                  ? ee.duration(e)
                  : (ee = He.to(O, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: o,
                      paused: !0,
                      onComplete: function onComplete() {
                        return s && s(Te);
                      },
                    }))
                : (ee && ee.progress(1).kill(), (ee = 0));
            }),
            O &&
              ((O.vars.lazy = !1),
              (O._initted && !Te.isReverted) ||
                (!1 !== O.vars.immediateRender &&
                  !1 !== E.immediateRender &&
                  O.duration() &&
                  O.render(0, !0, !0)),
              (Te.animation = O.pause()),
              (O.scrollTrigger = Te).scrubDuration(P),
              (w = 0),
              (a = a || O.vars.id)),
            ue &&
              ((Va(ue) && !ue.push) || (ue = { snapTo: ue }),
              "scrollBehavior" in We.style &&
                He.set(me ? [We, Je] : be, { scrollBehavior: "auto" }),
              Ie.forEach(function (e) {
                return (
                  Ta(e) &&
                  e.target === (me ? Xe.scrollingElement || Je : be) &&
                  (e.smooth = !1)
                );
              }),
              (p = Ta(ue.snapTo)
                ? ue.snapTo
                : "labels" === ue.snapTo
                ? (function _getClosestLabel(t) {
                    return function (e) {
                      return He.utils.snap(rb(t), e);
                    };
                  })(O)
                : "labelsDirectional" === ue.snapTo
                ? (function _getLabelAtDirection(r) {
                    return function (e, t) {
                      return tb(rb(r))(e, t.direction);
                    };
                  })(O)
                : !1 !== ue.directional
                ? function (e, t) {
                    return tb(ue.snapTo)(e, at() - Ee < 500 ? 0 : t.direction);
                  }
                : He.utils.snap(ue.snapTo)),
              (g = ue.duration || { min: 0.1, max: 2 }),
              (g = Va(g) ? Ue(g.min, g.max) : Ue(g, g)),
              (te = He.delayedCall(ue.delay || o / 2 || 0.1, function () {
                var e = Ae(),
                  t = at() - Ee < 500,
                  r = A.tween;
                if (
                  !(t || Math.abs(Te.getVelocity()) < 10) ||
                  r ||
                  Ge ||
                  Me === e
                )
                  Te.isActive && Me !== e && te.restart(!0);
                else {
                  var n,
                    o,
                    i = (e - B) / N,
                    a = O && !ve ? O.totalProgress() : i,
                    s = t ? 0 : ((a - _) / (at() - Ke)) * 1e3 || 0,
                    l = He.utils.clamp(-i, 1 - i, (ut(s / 2) * s) / 0.185),
                    c = i + (!1 === ue.inertia ? 0 : l),
                    u = ue.onStart,
                    f = ue.onInterrupt,
                    d = ue.onComplete;
                  if (
                    ((n = p(c, Te)),
                    Ua(n) || (n = c),
                    (o = Math.round(B + n * N)),
                    e <= q && B <= e && o !== e)
                  ) {
                    if (r && !r._initted && r.data <= ut(o - e)) return;
                    !1 === ue.inertia && (l = n - i),
                      A(
                        o,
                        {
                          duration: g(
                            ut(
                              (0.185 * Math.max(ut(c - a), ut(n - a))) /
                                s /
                                0.05 || 0
                            )
                          ),
                          ease: ue.ease || "power3",
                          data: ut(o - e),
                          onInterrupt: function onInterrupt() {
                            return te.restart(!0) && f && f(Te);
                          },
                          onComplete: function onComplete() {
                            Te.update(),
                              (Me = Ae()),
                              O &&
                                (ee
                                  ? ee.resetTo(
                                      "totalProgress",
                                      n,
                                      O._tTime / O._tDur
                                    )
                                  : O.progress(n)),
                              (w = _ =
                                O && !ve ? O.totalProgress() : Te.progress),
                              h && h(Te),
                              d && d(Te);
                          },
                        },
                        e,
                        l * N,
                        o - e - l * N
                      ),
                      u && u(Te, A.tween);
                  }
                }
              }).pause())),
            a && (St[a] = Te),
            (i =
              (i =
                (ie = Te.trigger = J(ie || (!0 !== ae && ae))) &&
                ie._gsap &&
                ie._gsap.stRevert) && i(Te)),
            (ae = !0 === ae ? ie : J(ae)),
            ct(S) && (S = { targets: ie, className: S }),
            ae &&
              (!1 === se ||
                se === mt ||
                (se =
                  !(
                    !se &&
                    ae.parentNode &&
                    ae.parentNode.style &&
                    "flex" === mb(ae.parentNode).display
                  ) && bt),
              (Te.pin = ae),
              (n = He.core.getCache(ae)).spacer
                ? (X = n.pinState)
                : (l &&
                    ((l = J(l)) &&
                      !l.nodeType &&
                      (l = l.current || l.nativeElement),
                    (n.spacerIsNative = !!l),
                    l && (n.spacerState = jc(l))),
                  (n.spacer = U = l || Xe.createElement("div")),
                  U.classList.add("pin-spacer"),
                  a && U.classList.add("pin-spacer-" + a),
                  (n.pinState = X = jc(ae))),
              !1 !== E.force3D && He.set(ae, { force3D: !0 }),
              (Te.spacer = U = n.spacer),
              (r = mb(ae)),
              (m = r[se + he.os2]),
              (j = He.getProperty(ae)),
              (b = He.quickSetter(ae, he.a, xt)),
              gc(ae, U, r),
              (V = jc(ae))),
            _e)
          ) {
            (e = Va(_e) ? ob(_e, _t) : _t),
              (Y = Db("scroller-start", a, be, he, e, 0)),
              (F = Db("scroller-end", a, be, he, e, 0, Y)),
              (t = Y["offset" + he.op.d2]);
            var u = J(z(be, "content") || be);
            (I = this.markerStart = Db("start", a, u, he, e, t, 0, de)),
              (L = this.markerEnd = Db("end", a, u, he, e, t, 0, de)),
              de && (C = He.quickSetter([I, L], he.a, xt)),
              ye ||
                (Le.length && !0 === z(be, "fixedMarkers")) ||
                ((function _makePositionable(e) {
                  var t = mb(e).position;
                  e.style.position =
                    "absolute" === t || "fixed" === t ? t : "relative";
                })(me ? We : be),
                He.set([Y, F], { force3D: !0 }),
                (y = He.quickSetter(Y, he.a, xt)),
                (x = He.quickSetter(F, he.a, xt)));
          }
          if (de) {
            var f = de.vars.onUpdate,
              d = de.vars.onUpdateParams;
            de.eventCallback("onUpdate", function () {
              Te.update(0, 0, 1), f && f.apply(de, d || []);
            });
          }
          if (
            ((Te.previous = function () {
              return Tt[Tt.indexOf(Te) - 1];
            }),
            (Te.next = function () {
              return Tt[Tt.indexOf(Te) + 1];
            }),
            (Te.revert = function (e, t) {
              if (!t) return Te.kill(!0);
              var r = !1 !== e || !Te.enabled,
                n = je;
              r !== Te.isReverted &&
                (r &&
                  ((re = Math.max(Ae(), Te.scroll.rec || 0)),
                  (Oe = Te.progress),
                  (ne = O && O.progress())),
                I &&
                  [I, L, Y, F].forEach(function (e) {
                    return (e.style.display = r ? "none" : "block");
                  }),
                r && (je = Te).update(r),
                !ae ||
                  (fe && Te.isActive) ||
                  (r
                    ? (function _swapPinOut(e, t, r) {
                        Et(r);
                        var n = e._gsap;
                        if (n.spacerIsNative) Et(n.spacerState);
                        else if (e._gsap.swappedIn) {
                          var o = t.parentNode;
                          o && (o.insertBefore(e, t), o.removeChild(t));
                        }
                        e._gsap.swappedIn = !1;
                      })(ae, U, X)
                    : gc(ae, U, mb(ae), Z)),
                r || Te.update(r),
                (je = n),
                (Te.isReverted = r));
            }),
            (Te.refresh = function (e, t, r, n) {
              if ((!je && Te.enabled) || t)
                if (ae && e && st) wb(ScrollTrigger, "scrollEnd", Ob);
                else {
                  !rt && Se && Se(Te),
                    (je = Te),
                    A.tween && !r && (A.tween.kill(), (A.tween = 0)),
                    ee && ee.pause(),
                    le && O && O.revert({ kill: !1 }).invalidate(),
                    Te.isReverted || Te.revert(!0, !0),
                    (Te._subPinOffset = !1);
                  var o,
                    i,
                    a,
                    s,
                    l,
                    c,
                    u,
                    f,
                    d,
                    p,
                    g,
                    h,
                    v,
                    b = ke(),
                    m = Pe(),
                    y = de ? de.duration() : Qa(be, he),
                    x = N <= 0.01,
                    w = 0,
                    _ = n || 0,
                    C = Va(r) ? r.end : E.end,
                    T = E.endTrigger || ie,
                    S = Va(r)
                      ? r.start
                      : E.start ||
                        (0 !== E.start && ie ? (ae ? "0 0" : "0 100%") : 0),
                    k = (Te.pinnedContainer =
                      E.pinnedContainer && J(E.pinnedContainer, Te)),
                    P = (ie && Math.max(0, Tt.indexOf(Te))) || 0,
                    M = P;
                  for (
                    _e &&
                    Va(r) &&
                    ((h = He.getProperty(Y, he.p)),
                    (v = He.getProperty(F, he.p)));
                    M--;

                  )
                    (c = Tt[M]).end || c.refresh(0, 1) || (je = Te),
                      !(u = c.pin) ||
                        (u !== ie && u !== ae && u !== k) ||
                        c.isReverted ||
                        ((p = p || []).unshift(c), c.revert(!0, !0)),
                      c !== Tt[M] && (P--, M--);
                  for (
                    Ta(S) && (S = S(Te)),
                      S = Ca(S, "start", Te),
                      B =
                        mc(
                          S,
                          ie,
                          b,
                          he,
                          Ae(),
                          I,
                          Y,
                          Te,
                          m,
                          Ce,
                          ye,
                          y,
                          de,
                          Te._startClamp && "_startClamp"
                        ) || (ae ? -0.001 : 0),
                      Ta(C) && (C = C(Te)),
                      ct(C) &&
                        !C.indexOf("+=") &&
                        (~C.indexOf(" ")
                          ? (C = (ct(S) ? S.split(" ")[0] : "") + C)
                          : ((w = Cb(C.substr(2), b)),
                            (C = ct(S)
                              ? S
                              : (de
                                  ? He.utils.mapRange(
                                      0,
                                      de.duration(),
                                      de.scrollTrigger.start,
                                      de.scrollTrigger.end,
                                      B
                                    )
                                  : B) + w),
                            (T = ie))),
                      C = Ca(C, "end", Te),
                      q =
                        Math.max(
                          B,
                          mc(
                            C || (T ? "100% 0" : y),
                            T,
                            b,
                            he,
                            Ae() + w,
                            L,
                            F,
                            Te,
                            m,
                            Ce,
                            ye,
                            y,
                            de,
                            Te._endClamp && "_endClamp"
                          )
                        ) || -0.001,
                      w = 0,
                      M = P;
                    M--;

                  )
                    (u = (c = Tt[M]).pin) &&
                      c.start - c._pinPush <= B &&
                      !de &&
                      0 < c.end &&
                      ((o =
                        c.end -
                        (Te._startClamp ? Math.max(0, c.start) : c.start)),
                      ((u === ie && c.start - c._pinPush < B) || u === k) &&
                        isNaN(S) &&
                        (w += o * (1 - c.progress)),
                      u === ae && (_ += o));
                  if (
                    ((B += w),
                    (q += w),
                    Te._startClamp && (Te._startClamp += w),
                    Te._endClamp &&
                      !rt &&
                      ((Te._endClamp = q || -0.001),
                      (q = Math.min(q, Qa(be, he)))),
                    (N = q - B || ((B -= 0.01) && 0.001)),
                    x &&
                      (Oe = He.utils.clamp(0, 1, He.utils.normalize(B, q, re))),
                    (Te._pinPush = _),
                    I &&
                      w &&
                      (((o = {})[he.a] = "+=" + w),
                      k && (o[he.p] = "-=" + Ae()),
                      He.set([I, L], o)),
                    !ae || (et && Te.end >= Qa(be, he)))
                  ) {
                    if (ie && Ae() && !de)
                      for (i = ie.parentNode; i && i !== We; )
                        i._pinOffset &&
                          ((B -= i._pinOffset), (q -= i._pinOffset)),
                          (i = i.parentNode);
                  } else
                    (o = mb(ae)),
                      (s = he === Fe),
                      (a = Ae()),
                      (G = parseFloat(j(he.a)) + _),
                      !y &&
                        1 < q &&
                        ((g = {
                          style: (g = (me ? Xe.scrollingElement || Je : be)
                            .style),
                          value: g["overflow" + he.a.toUpperCase()],
                        }),
                        me &&
                          "scroll" !==
                            mb(We)["overflow" + he.a.toUpperCase()] &&
                          (g.style["overflow" + he.a.toUpperCase()] =
                            "scroll")),
                      gc(ae, U, o),
                      (V = jc(ae)),
                      (i = wt(ae, !0)),
                      (f = ye && K(be, s ? Ye : Fe)()),
                      se
                        ? (((Z = [se + he.os2, N + _ + xt]).t = U),
                          (M = se === bt ? qb(ae, he) + N + _ : 0) &&
                            (Z.push(he.d, M + xt),
                            "auto" !== U.style.flexBasis &&
                              (U.style.flexBasis = M + xt)),
                          Et(Z),
                          k &&
                            Tt.forEach(function (e) {
                              e.pin === k &&
                                !1 !== e.vars.pinSpacing &&
                                (e._subPinOffset = !0);
                            }),
                          ye && Ae(re))
                        : (M = qb(ae, he)) &&
                          "auto" !== U.style.flexBasis &&
                          (U.style.flexBasis = M + xt),
                      ye &&
                        (((l = {
                          top: i.top + (s ? a - B : f) + xt,
                          left: i.left + (s ? f : a - B) + xt,
                          boxSizing: "border-box",
                          position: "fixed",
                        })[ft] = l.maxWidth =
                          Math.ceil(i.width) + xt),
                        (l[dt] = l.maxHeight = Math.ceil(i.height) + xt),
                        (l[mt] =
                          l[mt + ht] =
                          l[mt + pt] =
                          l[mt + vt] =
                          l[mt + gt] =
                            "0"),
                        (l[bt] = o[bt]),
                        (l[bt + ht] = o[bt + ht]),
                        (l[bt + pt] = o[bt + pt]),
                        (l[bt + vt] = o[bt + vt]),
                        (l[bt + gt] = o[bt + gt]),
                        (W = (function _copyState(e, t, r) {
                          for (
                            var n, o = [], i = e.length, a = r ? 8 : 0;
                            a < i;
                            a += 2
                          )
                            (n = e[a]), o.push(n, n in t ? t[n] : e[a + 1]);
                          return (o.t = e.t), o;
                        })(X, l, fe)),
                        rt && Ae(0)),
                      O
                        ? ((d = O._initted),
                          $e(1),
                          O.render(O.duration(), !0, !0),
                          (Q = j(he.a) - G + N + _),
                          ($ = 1 < Math.abs(N - Q)),
                          ye && $ && W.splice(W.length - 2, 2),
                          O.render(0, !0, !0),
                          d || O.invalidate(!0),
                          O.parent || O.totalTime(O.totalTime()),
                          $e(0))
                        : (Q = N),
                      g &&
                        (g.value
                          ? (g.style["overflow" + he.a.toUpperCase()] = g.value)
                          : g.style.removeProperty("overflow-" + he.a));
                  p &&
                    p.forEach(function (e) {
                      return e.revert(!1, !0);
                    }),
                    (Te.start = B),
                    (Te.end = q),
                    (D = R = rt ? re : Ae()),
                    de || rt || (D < re && Ae(re), (Te.scroll.rec = 0)),
                    Te.revert(!1, !0),
                    (Ee = at()),
                    te && ((Me = -1), te.restart(!0)),
                    (je = 0),
                    O &&
                      ve &&
                      (O._initted || ne) &&
                      O.progress() !== ne &&
                      O.progress(ne || 0, !0).render(O.time(), !0, !0),
                    (x || Oe !== Te.progress || de || le) &&
                      (O &&
                        !ve &&
                        O.totalProgress(
                          de && B < -0.001 && !Oe
                            ? He.utils.normalize(B, q, 0)
                            : Oe,
                          !0
                        ),
                      (Te.progress = x || (D - B) / N === Oe ? 0 : Oe)),
                    ae && se && (U._pinOffset = Math.round(Te.progress * Q)),
                    ee && ee.invalidate(),
                    isNaN(h) ||
                      ((h -= He.getProperty(Y, he.p)),
                      (v -= He.getProperty(F, he.p)),
                      qc(Y, he, h),
                      qc(I, he, h - (n || 0)),
                      qc(F, he, v),
                      qc(L, he, v - (n || 0))),
                    x && !rt && Te.update(),
                    !oe || rt || H || ((H = !0), oe(Te), (H = !1));
                }
            }),
            (Te.getVelocity = function () {
              return ((Ae() - R) / (at() - Ke)) * 1e3 || 0;
            }),
            (Te.endAnimation = function () {
              Wa(Te.callbackAnimation),
                O &&
                  (ee
                    ? ee.progress(1)
                    : O.paused()
                    ? ve || Wa(O, Te.direction < 0, 1)
                    : Wa(O, O.reversed()));
            }),
            (Te.labelToScroll = function (e) {
              return (
                (O &&
                  O.labels &&
                  (B || Te.refresh() || B) +
                    (O.labels[e] / O.duration()) * N) ||
                0
              );
            }),
            (Te.getTrailing = function (t) {
              var e = Tt.indexOf(Te),
                r =
                  0 < Te.direction ? Tt.slice(0, e).reverse() : Tt.slice(e + 1);
              return (
                ct(t)
                  ? r.filter(function (e) {
                      return e.vars.preventOverlaps === t;
                    })
                  : r
              ).filter(function (e) {
                return 0 < Te.direction ? e.end <= B : e.start >= q;
              });
            }),
            (Te.update = function (e, t, r) {
              if (!de || r || e) {
                var n,
                  o,
                  i,
                  a,
                  s,
                  l,
                  c,
                  u = !0 === rt ? re : Te.scroll(),
                  f = e ? 0 : (u - B) / N,
                  d = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                  p = Te.progress;
                if (
                  (t &&
                    ((R = D),
                    (D = de ? Ae() : u),
                    ue && ((_ = w), (w = O && !ve ? O.totalProgress() : d))),
                  M &&
                    ae &&
                    !je &&
                    !it &&
                    st &&
                    (!d && B < u + ((u - R) / (at() - Ke)) * M
                      ? (d = 1e-4)
                      : 1 === d &&
                        q > u + ((u - R) / (at() - Ke)) * M &&
                        (d = 0.9999)),
                  d !== p && Te.enabled)
                ) {
                  if (
                    ((a =
                      (s =
                        (n = Te.isActive = !!d && d < 1) != (!!p && p < 1)) ||
                      !!d != !!p),
                    (Te.direction = p < d ? 1 : -1),
                    (Te.progress = d),
                    a &&
                      !je &&
                      ((o = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3),
                      ve &&
                        ((i =
                          (!s && "none" !== we[o + 1] && we[o + 1]) || we[o]),
                        (c =
                          O && ("complete" === i || "reset" === i || i in O)))),
                    ge &&
                      (s || c) &&
                      (c || P || !O) &&
                      (Ta(ge)
                        ? ge(Te)
                        : Te.getTrailing(ge).forEach(function (e) {
                            return e.endAnimation();
                          })),
                    ve ||
                      (!ee || je || it
                        ? O && O.totalProgress(d, !(!je || (!Ee && !e)))
                        : (ee._dp._time - ee._start !== ee._time &&
                            ee.render(ee._dp._time - ee._start),
                          ee.resetTo
                            ? ee.resetTo("totalProgress", d, O._tTime / O._tDur)
                            : ((ee.vars.totalProgress = d),
                              ee.invalidate().restart()))),
                    ae)
                  )
                    if ((e && se && (U.style[se + he.os2] = m), ye)) {
                      if (a) {
                        if (
                          ((l =
                            !e && p < d && u < q + 1 && u + 1 >= Qa(be, he)),
                          fe)
                        )
                          if (e || (!n && !l)) oc(ae, U);
                          else {
                            var g = wt(ae, !0),
                              h = u - B;
                            oc(
                              ae,
                              We,
                              g.top + (he === Fe ? h : 0) + xt,
                              g.left + (he === Fe ? 0 : h) + xt
                            );
                          }
                        Et(n || l ? W : V),
                          ($ && d < 1 && n) || b(G + (1 !== d || l ? 0 : Q));
                      }
                    } else b(Ia(G + Q * d));
                  !ue || A.tween || je || it || te.restart(!0),
                    S &&
                      (s || (ce && d && (d < 1 || !tt))) &&
                      Ve(S.targets).forEach(function (e) {
                        return e.classList[n || ce ? "add" : "remove"](
                          S.className
                        );
                      }),
                    !T || ve || e || T(Te),
                    a && !je
                      ? (ve &&
                          (c &&
                            ("complete" === i
                              ? O.pause().totalProgress(1)
                              : "reset" === i
                              ? O.restart(!0).pause()
                              : "restart" === i
                              ? O.restart(!0)
                              : O[i]()),
                          T && T(Te)),
                        (!s && tt) ||
                          (k && s && Xa(Te, k),
                          xe[o] && Xa(Te, xe[o]),
                          ce && (1 === d ? Te.kill(!1, 1) : (xe[o] = 0)),
                          s || (xe[(o = 1 === d ? 1 : 3)] && Xa(Te, xe[o]))),
                        pe &&
                          !n &&
                          Math.abs(Te.getVelocity()) > (Ua(pe) ? pe : 2500) &&
                          (Wa(Te.callbackAnimation),
                          ee
                            ? ee.progress(1)
                            : Wa(O, "reverse" === i ? 1 : !d, 1)))
                      : ve && T && !je && T(Te);
                }
                if (x) {
                  var v = de
                    ? (u / de.duration()) * (de._caScrollDist || 0)
                    : u;
                  y(v + (Y._isFlipped ? 1 : 0)), x(v);
                }
                C && C((-u / de.duration()) * (de._caScrollDist || 0));
              }
            }),
            (Te.enable = function (e, t) {
              Te.enabled ||
                ((Te.enabled = !0),
                wb(be, "resize", Lb),
                me || wb(be, "scroll", Jb),
                Se && wb(ScrollTrigger, "refreshInit", Se),
                !1 !== e && ((Te.progress = Oe = 0), (D = R = Me = Ae())),
                !1 !== t && Te.refresh());
            }),
            (Te.getTween = function (e) {
              return e && A ? A.tween : ee;
            }),
            (Te.setPositions = function (e, t, r, n) {
              if (de) {
                var o = de.scrollTrigger,
                  i = de.duration(),
                  a = o.end - o.start;
                (e = o.start + (a * e) / i), (t = o.start + (a * t) / i);
              }
              Te.refresh(
                !1,
                !1,
                {
                  start: Da(e, r && !!Te._startClamp),
                  end: Da(t, r && !!Te._endClamp),
                },
                n
              ),
                Te.update();
            }),
            (Te.adjustPinSpacing = function (e) {
              if (Z && e) {
                var t = Z.indexOf(he.d) + 1;
                (Z[t] = parseFloat(Z[t]) + e + xt),
                  (Z[1] = parseFloat(Z[1]) + e + xt),
                  Et(Z);
              }
            }),
            (Te.disable = function (e, t) {
              if (
                Te.enabled &&
                (!1 !== e && Te.revert(!0, !0),
                (Te.enabled = Te.isActive = !1),
                t || (ee && ee.pause()),
                (re = 0),
                n && (n.uncache = 1),
                Se && xb(ScrollTrigger, "refreshInit", Se),
                te && (te.pause(), A.tween && A.tween.kill() && (A.tween = 0)),
                !me)
              ) {
                for (var r = Tt.length; r--; )
                  if (Tt[r].scroller === be && Tt[r] !== Te) return;
                xb(be, "resize", Lb), me || xb(be, "scroll", Jb);
              }
            }),
            (Te.kill = function (e, t) {
              Te.disable(e, t), ee && !t && ee.kill(), a && delete St[a];
              var r = Tt.indexOf(Te);
              0 <= r && Tt.splice(r, 1),
                r === Qe && 0 < Mt && Qe--,
                (r = 0),
                Tt.forEach(function (e) {
                  return e.scroller === Te.scroller && (r = 1);
                }),
                r || rt || (Te.scroll.rec = 0),
                O &&
                  ((O.scrollTrigger = null),
                  e && O.revert({ kill: !1 }),
                  t || O.kill()),
                I &&
                  [I, L, Y, F].forEach(function (e) {
                    return e.parentNode && e.parentNode.removeChild(e);
                  }),
                ot === Te && (ot = 0),
                ae &&
                  (n && (n.uncache = 1),
                  (r = 0),
                  Tt.forEach(function (e) {
                    return e.pin === ae && r++;
                  }),
                  r || (n.spacer = 0)),
                E.onKill && E.onKill(Te);
            }),
            Tt.push(Te),
            Te.enable(!1, !1),
            i && i(Te),
            O && O.add && !N)
          ) {
            var v = Te.update;
            (Te.update = function () {
              (Te.update = v), B || q || Te.refresh();
            }),
              He.delayedCall(0.01, Te.update),
              (N = 0.01),
              (B = q = 0);
          } else Te.refresh();
          ae &&
            (function _queueRefreshAll() {
              if (nt !== kt) {
                var e = (nt = kt);
                requestAnimationFrame(function () {
                  return e === kt && Pt(!0);
                });
              }
            })();
        } else this.update = this.refresh = this.kill = Ha;
      }),
      (ScrollTrigger.register = function register(e) {
        return (
          s ||
            ((He = e || Ka()),
            Ja() && window.document && ScrollTrigger.enable(),
            (s = lt)),
          s
        );
      }),
      (ScrollTrigger.defaults = function defaults(e) {
        if (e) for (var t in e) Ct[t] = e[t];
        return Ct;
      }),
      (ScrollTrigger.disable = function disable(t, r) {
        (lt = 0),
          Tt.forEach(function (e) {
            return e[r ? "kill" : "disable"](t);
          }),
          xb(Ne, "wheel", Jb),
          xb(Xe, "scroll", Jb),
          clearInterval(u),
          xb(Xe, "touchcancel", Ha),
          xb(We, "touchstart", Ha),
          vb(xb, Xe, "pointerdown,touchstart,mousedown", Fa),
          vb(xb, Xe, "pointerup,touchend,mouseup", Ga),
          c.kill(),
          Ra(xb);
        for (var e = 0; e < Ie.length; e += 3)
          yb(xb, Ie[e], Ie[e + 1]), yb(xb, Ie[e], Ie[e + 2]);
      }),
      (ScrollTrigger.enable = function enable() {
        if (
          ((Ne = window),
          (Xe = document),
          (Je = Xe.documentElement),
          (We = Xe.body),
          He &&
            ((Ve = He.utils.toArray),
            (Ue = He.utils.clamp),
            (x = He.core.context || Ha),
            ($e = He.core.suppressOverwrites || Ha),
            (w = Ne.history.scrollRestoration || "auto"),
            (Q = Ne.pageYOffset),
            He.core.globals("ScrollTrigger", ScrollTrigger),
            We))
        ) {
          (lt = 1),
            ((_ = document.createElement("div")).style.height = "100vh"),
            (_.style.position = "absolute"),
            Yb(),
            (function _rafBugFix() {
              return lt && requestAnimationFrame(_rafBugFix);
            })(),
            k.register(He),
            (ScrollTrigger.isTouch = k.isTouch),
            (E =
              k.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (b = 1 === k.isTouch),
            wb(Ne, "wheel", Jb),
            (l = [Ne, Xe, Je, We]),
            He.matchMedia
              ? ((ScrollTrigger.matchMedia = function (e) {
                  var t,
                    r = He.matchMedia();
                  for (t in e) r.add(t, e[t]);
                  return r;
                }),
                He.addEventListener("matchMediaInit", function () {
                  return Sb();
                }),
                He.addEventListener("matchMediaRevert", function () {
                  return Rb();
                }),
                He.addEventListener("matchMedia", function () {
                  Pt(0, 1), U("matchMedia");
                }),
                He.matchMedia("(orientation: portrait)", function () {
                  return Kb(), Kb;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            Kb(),
            wb(Xe, "scroll", Jb);
          var e,
            t,
            r = We.style,
            n = r.borderTopStyle,
            o = He.core.Animation.prototype;
          for (
            o.revert ||
              Object.defineProperty(o, "revert", {
                value: function value() {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = "solid",
              e = wt(We),
              Fe.m = Math.round(e.top + Fe.sc()) || 0,
              Ye.m = Math.round(e.left + Ye.sc()) || 0,
              n ? (r.borderTopStyle = n) : r.removeProperty("border-top-style"),
              u = setInterval(Ib, 250),
              He.delayedCall(0.5, function () {
                return (it = 0);
              }),
              wb(Xe, "touchcancel", Ha),
              wb(We, "touchstart", Ha),
              vb(wb, Xe, "pointerdown,touchstart,mousedown", Fa),
              vb(wb, Xe, "pointerup,touchend,mouseup", Ga),
              f = He.utils.checkPrefix("transform"),
              ee.push(f),
              s = at(),
              c = He.delayedCall(0.2, Pt).pause(),
              g = [
                Xe,
                "visibilitychange",
                function () {
                  var e = Ne.innerWidth,
                    t = Ne.innerHeight;
                  Xe.hidden ? ((d = e), (p = t)) : (d === e && p === t) || Lb();
                },
                Xe,
                "DOMContentLoaded",
                Pt,
                Ne,
                "load",
                Pt,
                Ne,
                "resize",
                Lb,
              ],
              Ra(wb),
              Tt.forEach(function (e) {
                return e.enable(0, 1);
              }),
              t = 0;
            t < Ie.length;
            t += 3
          )
            yb(xb, Ie[t], Ie[t + 1]), yb(xb, Ie[t], Ie[t + 2]);
        }
      }),
      (ScrollTrigger.config = function config(e) {
        "limitCallbacks" in e && (tt = !!e.limitCallbacks);
        var t = e.syncInterval;
        (t && clearInterval(u)) || ((u = t) && setInterval(Ib, t)),
          "ignoreMobileResize" in e &&
            (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize),
          "autoRefreshEvents" in e &&
            (Ra(xb) || Ra(wb, e.autoRefreshEvents || "none"),
            (h = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
      }),
      (ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = J(e),
          n = Ie.indexOf(r),
          o = La(r);
        ~n && Ie.splice(n, o ? 6 : 2),
          t && (o ? Le.unshift(Ne, t, We, t, Je, t) : Le.unshift(r, t));
      }),
      (ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
        Tt.forEach(function (e) {
          return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
        });
      }),
      (ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
        var n = (ct(e) ? J(e) : e).getBoundingClientRect(),
          o = n[r ? ft : dt] * t || 0;
        return r
          ? 0 < n.right - o && n.left + o < Ne.innerWidth
          : 0 < n.bottom - o && n.top + o < Ne.innerHeight;
      }),
      (ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
        ct(e) && (e = J(e));
        var n = e.getBoundingClientRect(),
          o = n[r ? ft : dt],
          i =
            null == t
              ? o / 2
              : t in H
              ? H[t] * o
              : ~t.indexOf("%")
              ? (parseFloat(t) * o) / 100
              : parseFloat(t) || 0;
        return r ? (n.left + i) / Ne.innerWidth : (n.top + i) / Ne.innerHeight;
      }),
      (ScrollTrigger.killAll = function killAll(e) {
        if (
          (Tt.slice(0).forEach(function (e) {
            return "ScrollSmoother" !== e.vars.id && e.kill();
          }),
          !0 !== e)
        ) {
          var t = W.killAll || [];
          (W = {}),
            t.forEach(function (e) {
              return e();
            });
        }
      }),
      ScrollTrigger);
  function ScrollTrigger(e, t) {
    s ||
      ScrollTrigger.register(He) ||
      console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
      x(this),
      this.init(e, t);
  }
  (ne.version = "3.12.5"),
    (ne.saveStyles = function (e) {
      return e
        ? Ve(e).forEach(function (e) {
            if (e && e.style) {
              var t = j.indexOf(e);
              0 <= t && j.splice(t, 5),
                j.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  He.core.getCache(e),
                  x()
                );
            }
          })
        : j;
    }),
    (ne.revert = function (e, t) {
      return Sb(!e, t);
    }),
    (ne.create = function (e, t) {
      return new ne(e, t);
    }),
    (ne.refresh = function (e) {
      return e ? Lb() : (s || ne.register()) && Pt(!0);
    }),
    (ne.update = function (e) {
      return ++Ie.cache && Z(!0 === e ? 2 : 0);
    }),
    (ne.clearScrollMemory = Tb),
    (ne.maxScroll = function (e, t) {
      return Qa(e, t ? Ye : Fe);
    }),
    (ne.getScrollFunc = function (e, t) {
      return K(J(e), t ? Ye : Fe);
    }),
    (ne.getById = function (e) {
      return St[e];
    }),
    (ne.getAll = function () {
      return Tt.filter(function (e) {
        return "ScrollSmoother" !== e.vars.id;
      });
    }),
    (ne.isScrolling = function () {
      return !!st;
    }),
    (ne.snapDirectional = tb),
    (ne.addEventListener = function (e, t) {
      var r = W[e] || (W[e] = []);
      ~r.indexOf(t) || r.push(t);
    }),
    (ne.removeEventListener = function (e, t) {
      var r = W[e],
        n = r && r.indexOf(t);
      0 <= n && r.splice(n, 1);
    }),
    (ne.batch = function (e, t) {
      function Cp(e, t) {
        var r = [],
          n = [],
          o = He.delayedCall(i, function () {
            t(r, n), (r = []), (n = []);
          }).pause();
        return function (e) {
          r.length || o.restart(!0),
            r.push(e.trigger),
            n.push(e),
            a <= r.length && o.progress(1);
        };
      }
      var r,
        n = [],
        o = {},
        i = t.interval || 0.016,
        a = t.batchMax || 1e9;
      for (r in t)
        o[r] =
          "on" === r.substr(0, 2) && Ta(t[r]) && "onRefreshInit" !== r
            ? Cp(0, t[r])
            : t[r];
      return (
        Ta(a) &&
          ((a = a()),
          wb(ne, "refresh", function () {
            return (a = t.batchMax());
          })),
        Ve(e).forEach(function (e) {
          var t = {};
          for (r in o) t[r] = o[r];
          (t.trigger = e), n.push(ne.create(t));
        }),
        n
      );
    });
  function tc(e, t, r, n) {
    return (
      n < t ? e(n) : t < 0 && e(0),
      n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    );
  }
  function uc(e, t) {
    !0 === t
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          !0 === t
            ? "auto"
            : t
            ? "pan-" + t + (k.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === Je && uc(We, t);
  }
  function wc(e) {
    var t,
      r = e.event,
      n = e.target,
      o = e.axis,
      i = (r.changedTouches ? r.changedTouches[0] : r).target,
      a = i._gsap || He.core.getCache(i),
      s = at();
    if (!a._isScrollT || 2e3 < s - a._isScrollT) {
      for (
        ;
        i &&
        i !== We &&
        ((i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth) ||
          (!ie[(t = mb(i)).overflowY] && !ie[t.overflowX]));

      )
        i = i.parentNode;
      (a._isScroll =
        i &&
        i !== n &&
        !La(i) &&
        (ie[(t = mb(i)).overflowY] || ie[t.overflowX])),
        (a._isScrollT = s);
    }
    (!a._isScroll && "x" !== o) || (r.stopPropagation(), (r._gsapAllow = !0));
  }
  function xc(e, t, r, n) {
    return k.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (n = n && wc),
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function onEnable() {
        return r && wb(Xe, k.eventTypes[0], se, !1, !0);
      },
      onDisable: function onDisable() {
        return xb(Xe, k.eventTypes[0], se, !0);
      },
    });
  }
  function Bc(e) {
    function zq() {
      return (o = !1);
    }
    function Cq() {
      (i = Qa(p, Fe)),
        (S = Ue(E ? 1 : 0, i)),
        f && (T = Ue(0, Qa(p, Ye))),
        (l = kt);
    }
    function Dq() {
      (v._gsap.y = Ia(parseFloat(v._gsap.y) + b.offset) + "px"),
        (v.style.transform =
          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
          parseFloat(v._gsap.y) +
          ", 0, 1)"),
        (b.offset = b.cacheID = 0);
    }
    function Jq() {
      Cq(),
        a.isActive() &&
          a.vars.scrollY > i &&
          (b() > i ? a.progress(1) && b(i) : a.resetTo("scrollY", i));
    }
    Va(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var n,
      i,
      l,
      o,
      a,
      c,
      u,
      s,
      f = e.normalizeScrollX,
      t = e.momentum,
      r = e.allowNestedScroll,
      d = e.onRelease,
      p = J(e.target) || Je,
      g = He.core.globals().ScrollSmoother,
      h = g && g.get(),
      v =
        E &&
        ((e.content && J(e.content)) ||
          (h && !1 !== e.content && !h.smooth() && h.content())),
      b = K(p, Fe),
      m = K(p, Ye),
      y = 1,
      x =
        (k.isTouch && Ne.visualViewport
          ? Ne.visualViewport.scale * Ne.visualViewport.width
          : Ne.outerWidth) / Ne.innerWidth,
      w = 0,
      _ = Ta(t)
        ? function () {
            return t(n);
          }
        : function () {
            return t || 2.8;
          },
      C = xc(p, e.type, !0, r),
      T = Ha,
      S = Ha;
    return (
      v && He.set(v, { y: "+=0" }),
      (e.ignoreCheck = function (e) {
        return (
          (E &&
            "touchmove" === e.type &&
            (function ignoreDrag() {
              if (o) {
                requestAnimationFrame(zq);
                var e = Ia(n.deltaY / 2),
                  t = S(b.v - e);
                if (v && t !== b.v + b.offset) {
                  b.offset = t - b.v;
                  var r = Ia((parseFloat(v && v._gsap.y) || 0) - b.offset);
                  (v.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    r +
                    ", 0, 1)"),
                    (v._gsap.y = r + "px"),
                    (b.cacheID = Ie.cache),
                    Z();
                }
                return !0;
              }
              b.offset && Dq(), (o = !0);
            })()) ||
          (1.05 < y && "touchstart" !== e.type) ||
          n.isGesturing ||
          (e.touches && 1 < e.touches.length)
        );
      }),
      (e.onPress = function () {
        o = !1;
        var e = y;
        (y = Ia(((Ne.visualViewport && Ne.visualViewport.scale) || 1) / x)),
          a.pause(),
          e !== y && uc(p, 1.01 < y || (!f && "x")),
          (c = m()),
          (u = b()),
          Cq(),
          (l = kt);
      }),
      (e.onRelease = e.onGestureStart =
        function (e, t) {
          if ((b.offset && Dq(), t)) {
            Ie.cache++;
            var r,
              n,
              o = _();
            f &&
              ((n = (r = m()) + (0.05 * o * -e.velocityX) / 0.227),
              (o *= tc(m, r, n, Qa(p, Ye))),
              (a.vars.scrollX = T(n))),
              (n = (r = b()) + (0.05 * o * -e.velocityY) / 0.227),
              (o *= tc(b, r, n, Qa(p, Fe))),
              (a.vars.scrollY = S(n)),
              a.invalidate().duration(o).play(0.01),
              ((E && a.vars.scrollY >= i) || i - 1 <= r) &&
                He.to({}, { onUpdate: Jq, duration: o });
          } else s.restart(!0);
          d && d(e);
        }),
      (e.onWheel = function () {
        a._ts && a.pause(), 1e3 < at() - w && ((l = 0), (w = at()));
      }),
      (e.onChange = function (e, t, r, n, o) {
        if (
          (kt !== l && Cq(),
          t && f && m(T(n[2] === t ? c + (e.startX - e.x) : m() + t - n[1])),
          r)
        ) {
          b.offset && Dq();
          var i = o[2] === r,
            a = i ? u + e.startY - e.y : b() + r - o[1],
            s = S(a);
          i && a !== s && (u += s - a), b(s);
        }
        (r || t) && Z();
      }),
      (e.onEnable = function () {
        uc(p, !f && "x"),
          ne.addEventListener("refresh", Jq),
          wb(Ne, "resize", Jq),
          b.smooth &&
            ((b.target.style.scrollBehavior = "auto"),
            (b.smooth = m.smooth = !1)),
          C.enable();
      }),
      (e.onDisable = function () {
        uc(p, !0),
          xb(Ne, "resize", Jq),
          ne.removeEventListener("refresh", Jq),
          C.kill();
      }),
      (e.lockAxis = !1 !== e.lockAxis),
      ((n = new k(e)).iOS = E) && !b() && b(1),
      E && He.ticker.add(Ha),
      (s = n._dc),
      (a = He.to(n, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: f ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: pc(b, b(), function () {
            return a.pause();
          }),
        },
        onUpdate: Z,
        onComplete: s.vars.onComplete,
      })),
      n
    );
  }
  var oe,
    ie = { auto: 1, scroll: 1 },
    ae = /(input|label|select|textarea)/i,
    se = function _captureInputs(e) {
      var t = ae.test(e.target.tagName);
      (t || oe) && ((e._gsapAllow = !0), (oe = t));
    };
  (ne.sort = function (e) {
    return Tt.sort(
      e ||
        function (e, t) {
          return (
            -1e6 * (e.vars.refreshPriority || 0) +
            e.start -
            (t.start + -1e6 * (t.vars.refreshPriority || 0))
          );
        }
    );
  }),
    (ne.observe = function (e) {
      return new k(e);
    }),
    (ne.normalizeScroll = function (e) {
      if (void 0 === e) return v;
      if (!0 === e && v) return v.enable();
      if (!1 === e) return v && v.kill(), void (v = e);
      var t = e instanceof k ? e : Bc(e);
      return v && v.target === t.target && v.kill(), La(t.target) && (v = t), t;
    }),
    (ne.core = {
      _getVelocityProp: L,
      _inputObserver: xc,
      _scrollers: Ie,
      _proxies: Le,
      bridge: {
        ss: function ss() {
          st || U("scrollStart"), (st = at());
        },
        ref: function ref() {
          return je;
        },
      },
    }),
    Ka() && He.registerPlugin(ne),
    (e.ScrollTrigger = ne),
    (e.default = ne);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});

/*!
 * MorphSVGPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GSAP and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GSAP membership. See https://gsap.com/pricing
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (t) {
  "use strict";
  function m(t) {
    return "string" == typeof t;
  }
  var x = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
    N = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
    b = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
    n = /(^[#\.][a-z]|[a-y][a-z])/i,
    B = Math.PI / 180,
    D = Math.sin,
    E = Math.cos,
    k = Math.abs,
    J = Math.sqrt,
    s = function _isNumber(t) {
      return "number" == typeof t;
    },
    h = function _round(t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    };
  function reverseSegment(t) {
    var e,
      r = 0;
    for (t.reverse(); r < t.length; r += 2)
      (e = t[r]), (t[r] = t[r + 1]), (t[r + 1] = e);
    t.reversed = !t.reversed;
  }
  var A = {
    rect: "rx,ry,x,y,width,height",
    circle: "r,cx,cy",
    ellipse: "rx,ry,cx,cy",
    line: "x1,x2,y1,y2",
  };
  function convertToPath(t, e) {
    var r,
      n,
      a,
      o,
      i,
      s,
      h,
      l,
      g,
      c,
      p,
      u,
      f,
      d,
      _,
      P,
      m,
      v,
      y,
      w,
      M,
      x,
      T = t.tagName.toLowerCase(),
      b = 0.552284749831;
    return "path" !== T && t.getBBox
      ? ((s = (function _createPath(t, e) {
          var r,
            n = document.createElementNS("http://www.w3.org/2000/svg", "path"),
            a = [].slice.call(t.attributes),
            o = a.length;
          for (e = "," + e + ","; -1 < --o; )
            (r = a[o].nodeName.toLowerCase()),
              e.indexOf("," + r + ",") < 0 &&
                n.setAttributeNS(null, r, a[o].nodeValue);
          return n;
        })(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points")),
        (x = (function _attrToObj(t, e) {
          for (var r = e ? e.split(",") : [], n = {}, a = r.length; -1 < --a; )
            n[r[a]] = +t.getAttribute(r[a]) || 0;
          return n;
        })(t, A[T])),
        "rect" === T
          ? ((o = x.rx),
            (i = x.ry || o),
            (n = x.x),
            (a = x.y),
            (c = x.width - 2 * o),
            (p = x.height - 2 * i),
            (r =
              o || i
                ? "M" +
                  (P = (d = (f = n + o) + c) + o) +
                  "," +
                  (v = a + i) +
                  " V" +
                  (y = v + p) +
                  " C" +
                  [
                    P,
                    (w = y + i * b),
                    (_ = d + o * b),
                    (M = y + i),
                    d,
                    M,
                    d - (d - f) / 3,
                    M,
                    f + (d - f) / 3,
                    M,
                    f,
                    M,
                    (u = n + o * (1 - b)),
                    M,
                    n,
                    w,
                    n,
                    y,
                    n,
                    y - (y - v) / 3,
                    n,
                    v + (y - v) / 3,
                    n,
                    v,
                    n,
                    (m = a + i * (1 - b)),
                    u,
                    a,
                    f,
                    a,
                    f + (d - f) / 3,
                    a,
                    d - (d - f) / 3,
                    a,
                    d,
                    a,
                    _,
                    a,
                    P,
                    m,
                    P,
                    v,
                  ].join(",") +
                  "z"
                : "M" +
                  (n + c) +
                  "," +
                  a +
                  " v" +
                  p +
                  " h" +
                  -c +
                  " v" +
                  -p +
                  " h" +
                  c +
                  "z"))
          : "circle" === T || "ellipse" === T
          ? ((l =
              "circle" === T
                ? (o = i = x.r) * b
                : ((o = x.rx), (i = x.ry) * b)),
            (r =
              "M" +
              ((n = x.cx) + o) +
              "," +
              (a = x.cy) +
              " C" +
              [
                n + o,
                a + l,
                n + (h = o * b),
                a + i,
                n,
                a + i,
                n - h,
                a + i,
                n - o,
                a + l,
                n - o,
                a,
                n - o,
                a - l,
                n - h,
                a - i,
                n,
                a - i,
                n + h,
                a - i,
                n + o,
                a - l,
                n + o,
                a,
              ].join(",") +
              "z"))
          : "line" === T
          ? (r = "M" + x.x1 + "," + x.y1 + " L" + x.x2 + "," + x.y2)
          : ("polyline" !== T && "polygon" !== T) ||
            ((r =
              "M" +
              (n = (g =
                (t.getAttribute("points") + "").match(N) || []).shift()) +
              "," +
              (a = g.shift()) +
              " L" +
              g.join(",")),
            "polygon" === T && (r += "," + n + "," + a + "z")),
        s.setAttribute(
          "d",
          rawPathToString((s._gsRawPath = stringToRawPath(r)))
        ),
        e &&
          t.parentNode &&
          (t.parentNode.insertBefore(s, t), t.parentNode.removeChild(t)),
        s)
      : t;
  }
  function arcToSegment(t, e, r, n, a, o, i, s, h) {
    if (t !== s || e !== h) {
      (r = k(r)), (n = k(n));
      var l = (a % 360) * B,
        g = E(l),
        c = D(l),
        p = Math.PI,
        u = 2 * p,
        f = (t - s) / 2,
        d = (e - h) / 2,
        _ = g * f + c * d,
        P = -c * f + g * d,
        m = _ * _,
        v = P * P,
        y = m / (r * r) + v / (n * n);
      1 < y && ((r = J(y) * r), (n = J(y) * n));
      var w = r * r,
        M = n * n,
        x = (w * M - w * v - M * m) / (w * v + M * m);
      x < 0 && (x = 0);
      var T = (o === i ? -1 : 1) * J(x),
        b = ((r * P) / n) * T,
        S = ((-n * _) / r) * T,
        N = g * b - c * S + (t + s) / 2,
        z = c * b + g * S + (e + h) / 2,
        A = (_ - b) / r,
        R = (P - S) / n,
        O = (-_ - b) / r,
        j = (-P - S) / n,
        Y = A * A + R * R,
        C = (R < 0 ? -1 : 1) * Math.acos(A / J(Y)),
        I =
          (A * j - R * O < 0 ? -1 : 1) *
          Math.acos((A * O + R * j) / J(Y * (O * O + j * j)));
      isNaN(I) && (I = p),
        !i && 0 < I ? (I -= u) : i && I < 0 && (I += u),
        (C %= u),
        (I %= u);
      var V,
        F = Math.ceil(k(I) / (u / 4)),
        L = [],
        X = I / F,
        U = ((4 / 3) * D(X / 2)) / (1 + E(X / 2)),
        G = g * r,
        Q = c * r,
        q = c * -n,
        H = g * n;
      for (V = 0; V < F; V++)
        (_ = E((a = C + V * X))),
          (P = D(a)),
          (A = E((a += X))),
          (R = D(a)),
          L.push(_ - U * P, P + U * _, A + U * R, R - U * A, A, R);
      for (V = 0; V < L.length; V += 2)
        (_ = L[V]),
          (P = L[V + 1]),
          (L[V] = _ * G + P * q + N),
          (L[V + 1] = _ * Q + P * H + z);
      return (L[V - 2] = s), (L[V - 1] = h), L;
    }
  }
  function stringToRawPath(t) {
    function uc(t, e, r, n) {
      (g = (r - t) / 3),
        (c = (n - e) / 3),
        s.push(t + g, e + c, r - g, n - c, r, n);
    }
    var e,
      r,
      n,
      a,
      o,
      i,
      s,
      h,
      l,
      g,
      c,
      p,
      u,
      f,
      d,
      _ =
        (t + "")
          .replace(b, function (t) {
            var e = +t;
            return e < 1e-4 && -1e-4 < e ? 0 : e;
          })
          .match(x) || [],
      P = [],
      m = 0,
      v = 0,
      y = _.length,
      w = 0,
      M = "ERROR: malformed path: " + t;
    if (!t || !isNaN(_[0]) || isNaN(_[1])) return console.log(M), P;
    for (e = 0; e < y; e++)
      if (
        ((u = o),
        isNaN(_[e]) ? (i = (o = _[e].toUpperCase()) !== _[e]) : e--,
        (n = +_[e + 1]),
        (a = +_[e + 2]),
        i && ((n += m), (a += v)),
        e || ((h = n), (l = a)),
        "M" === o)
      )
        s && (s.length < 8 ? --P.length : (w += s.length)),
          (m = h = n),
          (v = l = a),
          (s = [n, a]),
          P.push(s),
          (e += 2),
          (o = "L");
      else if ("C" === o)
        i || (m = v = 0),
          (s = s || [0, 0]).push(
            n,
            a,
            m + 1 * _[e + 3],
            v + 1 * _[e + 4],
            (m += 1 * _[e + 5]),
            (v += 1 * _[e + 6])
          ),
          (e += 6);
      else if ("S" === o)
        (g = m),
          (c = v),
          ("C" !== u && "S" !== u) ||
            ((g += m - s[s.length - 4]), (c += v - s[s.length - 3])),
          i || (m = v = 0),
          s.push(g, c, n, a, (m += 1 * _[e + 3]), (v += 1 * _[e + 4])),
          (e += 4);
      else if ("Q" === o)
        (g = m + (2 / 3) * (n - m)),
          (c = v + (2 / 3) * (a - v)),
          i || (m = v = 0),
          (m += 1 * _[e + 3]),
          (v += 1 * _[e + 4]),
          s.push(g, c, m + (2 / 3) * (n - m), v + (2 / 3) * (a - v), m, v),
          (e += 4);
      else if ("T" === o)
        (g = m - s[s.length - 4]),
          (c = v - s[s.length - 3]),
          s.push(
            m + g,
            v + c,
            n + (2 / 3) * (m + 1.5 * g - n),
            a + (2 / 3) * (v + 1.5 * c - a),
            (m = n),
            (v = a)
          ),
          (e += 2);
      else if ("H" === o) uc(m, v, (m = n), v), (e += 1);
      else if ("V" === o) uc(m, v, m, (v = n + (i ? v - m : 0))), (e += 1);
      else if ("L" === o || "Z" === o)
        "Z" === o && ((n = h), (a = l), (s.closed = !0)),
          ("L" === o || 0.5 < k(m - n) || 0.5 < k(v - a)) &&
            (uc(m, v, n, a), "L" === o && (e += 2)),
          (m = n),
          (v = a);
      else if ("A" === o) {
        if (
          ((f = _[e + 4]),
          (d = _[e + 5]),
          (g = _[e + 6]),
          (c = _[e + 7]),
          (r = 7),
          1 < f.length &&
            (f.length < 3
              ? ((c = g), (g = d), r--)
              : ((c = d), (g = f.substr(2)), (r -= 2)),
            (d = f.charAt(1)),
            (f = f.charAt(0))),
          (p = arcToSegment(
            m,
            v,
            +_[e + 1],
            +_[e + 2],
            +_[e + 3],
            +f,
            +d,
            (i ? m : 0) + 1 * g,
            (i ? v : 0) + 1 * c
          )),
          (e += r),
          p)
        )
          for (r = 0; r < p.length; r++) s.push(p[r]);
        (m = s[s.length - 2]), (v = s[s.length - 1]);
      } else console.log(M);
    return (
      (e = s.length) < 6
        ? (P.pop(), (e = 0))
        : s[0] === s[e - 2] && s[1] === s[e - 1] && (s.closed = !0),
      (P.totalPoints = w + e),
      P
    );
  }
  function rawPathToString(t) {
    s(t[0]) && (t = [t]);
    var e,
      r,
      n,
      a,
      o = "",
      i = t.length;
    for (r = 0; r < i; r++) {
      for (
        a = t[r],
          o += "M" + h(a[0]) + "," + h(a[1]) + " C",
          e = a.length,
          n = 2;
        n < e;
        n++
      )
        o +=
          h(a[n++]) +
          "," +
          h(a[n++]) +
          " " +
          h(a[n++]) +
          "," +
          h(a[n++]) +
          " " +
          h(a[n++]) +
          "," +
          h(a[n]) +
          " ";
      a.closed && (o += "z");
    }
    return o;
  }
  function y() {
    return (
      r ||
      ("undefined" != typeof window &&
        (r = window.gsap) &&
        r.registerPlugin &&
        r)
    );
  }
  function z(t) {
    return "function" == typeof t;
  }
  function M(t) {
    return console && console.warn(t);
  }
  function O(t) {
    var e,
      r = t.length,
      n = 0,
      a = 0;
    for (e = 0; e < r; e++) (n += t[e++]), (a += t[e]);
    return [n / (r / 2), a / (r / 2)];
  }
  function P(t) {
    var e,
      r,
      n,
      a = t.length,
      o = t[0],
      i = o,
      s = t[1],
      h = s;
    for (n = 6; n < a; n += 6)
      o < (e = t[n]) ? (o = e) : e < i && (i = e),
        s < (r = t[n + 1]) ? (s = r) : r < h && (h = r);
    return (
      (t.centerX = (o + i) / 2),
      (t.centerY = (s + h) / 2),
      (t.size = (o - i) * (s - h))
    );
  }
  function Q(t, e) {
    void 0 === e && (e = 3);
    for (
      var r,
        n,
        a,
        o,
        i,
        s,
        h,
        l,
        g,
        c,
        p,
        u,
        f,
        d,
        _,
        P,
        m = t.length,
        v = t[0][0],
        y = v,
        w = t[0][1],
        M = w,
        x = 1 / e;
      -1 < --m;

    )
      for (r = (i = t[m]).length, o = 6; o < r; o += 6)
        for (
          g = i[o],
            c = i[o + 1],
            p = i[o + 2] - g,
            d = i[o + 3] - c,
            u = i[o + 4] - g,
            _ = i[o + 5] - c,
            f = i[o + 6] - g,
            P = i[o + 7] - c,
            s = e;
          -1 < --s;

        )
          v <
          (n =
            ((h = x * s) * h * f + 3 * (l = 1 - h) * (h * u + l * p)) * h + g)
            ? (v = n)
            : n < y && (y = n),
            w < (a = (h * h * P + 3 * l * (h * _ + l * d)) * h + c)
              ? (w = a)
              : a < M && (M = a);
    return (
      (t.centerX = (v + y) / 2),
      (t.centerY = (w + M) / 2),
      (t.left = y),
      (t.width = v - y),
      (t.top = M),
      (t.height = w - M),
      (t.size = (v - y) * (w - M))
    );
  }
  function R(t, e) {
    return e.length - t.length;
  }
  function S(t, e) {
    var r = t.size || P(t),
      n = e.size || P(e);
    return Math.abs(n - r) < (r + n) / 20
      ? e.centerX - t.centerX || e.centerY - t.centerY
      : n - r;
  }
  function T(t, e) {
    var r,
      n,
      a = t.slice(0),
      o = t.length,
      i = o - 2;
    for (e |= 0, r = 0; r < o; r++)
      (n = (r + e) % i), (t[r++] = a[n]), (t[r] = a[1 + n]);
  }
  function U(t, e, r, n, a) {
    var o,
      i,
      s,
      h,
      l = t.length,
      g = 0,
      c = l - 2;
    for (r *= 6, i = 0; i < l; i += 6)
      (h = t[(o = (i + r) % c)] - (e[i] - n)),
        (s = t[1 + o] - (e[i + 1] - a)),
        (g += _(s * s + h * h));
    return g;
  }
  function V(t, e, r) {
    var n,
      a,
      o,
      i = t.length,
      s = O(t),
      h = O(e),
      l = h[0] - s[0],
      g = h[1] - s[1],
      c = U(t, e, 0, l, g),
      p = 0;
    for (o = 6; o < i; o += 6)
      (a = U(t, e, o / 6, l, g)) < c && ((c = a), (p = o));
    if (r)
      for (reverseSegment((n = t.slice(0))), o = 6; o < i; o += 6)
        (a = U(n, e, o / 6, l, g)) < c && ((c = a), (p = -o));
    return p / 6;
  }
  function W(t, e, r) {
    for (var n, a, o, i, s, h, l = t.length, g = 1e20, c = 0, p = 0; -1 < --l; )
      for (h = (n = t[l]).length, s = 0; s < h; s += 6)
        (a = n[s] - e),
          (o = n[s + 1] - r),
          (i = _(a * a + o * o)) < g && ((g = i), (c = n[s]), (p = n[s + 1]));
    return [c, p];
  }
  function X(t, e, r, n, a, o) {
    var i,
      s,
      h,
      l,
      g = e.length,
      c = 0,
      p = Math.min(t.size || P(t), e[r].size || P(e[r])) * n,
      u = 1e20,
      f = t.centerX + a,
      d = t.centerY + o;
    for (i = r; i < g && !((e[i].size || P(e[i])) < p); i++)
      (s = e[i].centerX - f),
        (h = e[i].centerY - d),
        (l = _(s * s + h * h)) < u && ((c = i), (u = l));
    return (l = e[c]), e.splice(c, 1), l;
  }
  function Y(t, e) {
    var r,
      n,
      a,
      o,
      i,
      s,
      h,
      l,
      g,
      c,
      p,
      u,
      f,
      d,
      _ = 0,
      P = t.length,
      m = e / ((P - 2) / 6);
    for (f = 2; f < P; f += 6)
      for (_ += m; 0.999999 < _; )
        (r = t[f - 2]),
          (n = t[f - 1]),
          (a = t[f]),
          (o = t[f + 1]),
          (i = t[f + 2]),
          (s = t[f + 3]),
          (h = t[f + 4]),
          (l = t[f + 5]),
          (g = r + (a - r) * (d = 1 / ((Math.floor(_) || 1) + 1))),
          (g += ((p = a + (i - a) * d) - g) * d),
          (p += (i + (h - i) * d - p) * d),
          (c = n + (o - n) * d),
          (c += ((u = o + (s - o) * d) - c) * d),
          (u += (s + (l - s) * d - u) * d),
          t.splice(
            f,
            4,
            r + (a - r) * d,
            n + (o - n) * d,
            g,
            c,
            g + (p - g) * d,
            c + (u - c) * d,
            p,
            u,
            i + (h - i) * d,
            s + (l - s) * d
          ),
          (f += 6),
          (P += 6),
          _--;
    return t;
  }
  function Z(t, e, r, n, a) {
    var o,
      i,
      s,
      h,
      l,
      g,
      c,
      p = e.length - t.length,
      u = 0 < p ? e : t,
      f = 0 < p ? t : e,
      d = 0,
      _ = "complexity" === n ? R : S,
      m = "position" === n ? 0 : "number" == typeof n ? n : 0.8,
      v = f.length,
      y = "object" == typeof r && r.push ? r.slice(0) : [r],
      w = "reverse" === y[0] || y[0] < 0,
      x = "log" === r;
    if (f[0]) {
      if (
        1 < u.length &&
        (t.sort(_),
        e.sort(_),
        u.size || Q(u),
        f.size || Q(f),
        (g = u.centerX - f.centerX),
        (c = u.centerY - f.centerY),
        _ === S)
      )
        for (v = 0; v < f.length; v++) u.splice(v, 0, X(f[v], u, v, m, g, c));
      if (p)
        for (
          p < 0 && (p = -p),
            u[0].length > f[0].length &&
              Y(f[0], ((u[0].length - f[0].length) / 6) | 0),
            v = f.length;
          d < p;

        )
          u[v].size || P(u[v]),
            (h = (s = W(f, u[v].centerX, u[v].centerY))[0]),
            (l = s[1]),
            (f[v++] = [h, l, h, l, h, l, h, l]),
            (f.totalPoints += 8),
            d++;
      for (v = 0; v < t.length; v++)
        (o = e[v]),
          (i = t[v]),
          (p = o.length - i.length) < 0
            ? Y(o, (-p / 6) | 0)
            : 0 < p && Y(i, (p / 6) | 0),
          w && !1 !== a && !i.reversed && reverseSegment(i),
          (r = y[v] || 0 === y[v] ? y[v] : "auto") &&
            (i.closed ||
            (Math.abs(i[0] - i[i.length - 2]) < 0.5 &&
              Math.abs(i[1] - i[i.length - 1]) < 0.5)
              ? "auto" === r || "log" === r
                ? ((y[v] = r = V(i, o, !v || !1 === a)),
                  r < 0 && ((w = !0), reverseSegment(i), (r = -r)),
                  T(i, 6 * r))
                : "reverse" !== r &&
                  (v && r < 0 && reverseSegment(i), T(i, 6 * (r < 0 ? -r : r)))
              : !w &&
                (("auto" === r &&
                  Math.abs(o[0] - i[0]) +
                    Math.abs(o[1] - i[1]) +
                    Math.abs(o[o.length - 2] - i[i.length - 2]) +
                    Math.abs(o[o.length - 1] - i[i.length - 1]) >
                    Math.abs(o[0] - i[i.length - 2]) +
                      Math.abs(o[1] - i[i.length - 1]) +
                      Math.abs(o[o.length - 2] - i[0]) +
                      Math.abs(o[o.length - 1] - i[1])) ||
                  r % 2)
              ? (reverseSegment(i), (y[v] = -1), (w = !0))
              : "auto" === r
              ? (y[v] = 0)
              : "reverse" === r && (y[v] = -1),
            i.closed !== o.closed && (i.closed = o.closed = !1));
      return x && M("shapeIndex:[" + y.join(",") + "]"), (t.shapeIndex = y);
    }
  }
  function $(t, e, r, n, a) {
    var o = stringToRawPath(t[0]),
      i = stringToRawPath(t[1]);
    Z(o, i, e || 0 === e ? e : "auto", r, a) &&
      ((t[0] = rawPathToString(o)),
      (t[1] = rawPathToString(i)),
      ("log" !== n && !0 !== n) ||
        M('precompile:["' + t[0] + '","' + t[1] + '"]'));
  }
  function aa(t, e) {
    var r,
      n,
      a,
      o,
      i,
      s,
      h,
      l = 0,
      g = parseFloat(t[0]),
      c = parseFloat(t[1]),
      p = g + "," + c + " ";
    for (r = (0.5 * e) / (0.5 * (a = t.length) - 1), n = 0; n < a - 2; n += 2) {
      if (
        ((l += r),
        (s = parseFloat(t[n + 2])),
        (h = parseFloat(t[n + 3])),
        0.999999 < l)
      )
        for (i = 1 / (Math.floor(l) + 1), o = 1; 0.999999 < l; )
          (p +=
            (g + (s - g) * i * o).toFixed(2) +
            "," +
            (c + (h - c) * i * o).toFixed(2) +
            " "),
            l--,
            o++;
      (p += s + "," + h + " "), (g = s), (c = h);
    }
    return p;
  }
  function ba(t) {
    var e = t[0].match(G) || [],
      r = t[1].match(G) || [],
      n = r.length - e.length;
    0 < n ? (t[0] = aa(e, n)) : (t[1] = aa(r, -n));
  }
  function ca(e) {
    return isNaN(e)
      ? ba
      : function (t) {
          ba(t),
            (t[1] = (function _offsetPoints(t, e) {
              if (!e) return t;
              var r,
                n,
                a,
                o = t.match(G) || [],
                i = o.length,
                s = "";
              for (
                r =
                  "reverse" === e
                    ? ((n = i - 1), -2)
                    : ((n = (2 * (parseInt(e, 10) || 0) + 1 + 100 * i) % i), 2),
                  a = 0;
                a < i;
                a += 2
              )
                (s += o[n - 1] + "," + o[n] + " "), (n = (n + r) % i);
              return s;
            })(t[1], parseInt(e, 10)));
        };
  }
  function ea(t, e) {
    for (
      var r, n, a, o, i, s, h, l, g, c, p, u, f = t.length, d = 0.2 * (e || 1);
      -1 < --f;

    ) {
      for (
        p = (n = t[f]).isSmooth = n.isSmooth || [0, 0, 0, 0],
          u = n.smoothData = n.smoothData || [0, 0, 0, 0],
          p.length = 4,
          l = n.length - 2,
          h = 6;
        h < l;
        h += 6
      )
        (a = n[h] - n[h - 2]),
          (o = n[h + 1] - n[h - 1]),
          (i = n[h + 2] - n[h]),
          (s = n[h + 3] - n[h + 1]),
          (g = w(o, a)),
          (c = w(s, i)),
          (r = Math.abs(g - c) < d) &&
            ((u[h - 2] = g),
            (u[h + 2] = c),
            (u[h - 1] = _(a * a + o * o)),
            (u[h + 3] = _(i * i + s * s))),
          p.push(r, r, 0, 0, r, r);
      n[l] === n[0] &&
        n[1 + l] === n[1] &&
        ((a = n[0] - n[l - 2]),
        (o = n[1] - n[l - 1]),
        (i = n[2] - n[0]),
        (s = n[3] - n[1]),
        (g = w(o, a)),
        (c = w(s, i)),
        Math.abs(g - c) < d &&
          ((u[l - 2] = g),
          (u[2] = c),
          (u[l - 1] = _(a * a + o * o)),
          (u[3] = _(i * i + s * s)),
          (p[l - 2] = p[l - 1] = !0)));
    }
    return t;
  }
  function fa(t) {
    var e = t.trim().split(" ");
    return {
      x:
        (~t.indexOf("left")
          ? 0
          : ~t.indexOf("right")
          ? 100
          : isNaN(parseFloat(e[0]))
          ? 50
          : parseFloat(e[0])) / 100,
      y:
        (~t.indexOf("top")
          ? 0
          : ~t.indexOf("bottom")
          ? 100
          : isNaN(parseFloat(e[1]))
          ? 50
          : parseFloat(e[1])) / 100,
    };
  }
  function ia(t, e, r, n) {
    var a,
      o,
      i = this._origin,
      s = this._eOrigin,
      h = t[r] - i.x,
      l = t[r + 1] - i.y,
      g = _(h * h + l * l),
      c = w(l, h);
    return (
      (h = e[r] - s.x),
      (l = e[r + 1] - s.y),
      (o = (function _shortAngle(t) {
        return t !== t % p ? t + (t < 0 ? u : -u) : t;
      })((a = w(l, h) - c))),
      !n && I && Math.abs(o + I.ca) < f && (n = I),
      (this._anchorPT = I =
        {
          _next: this._anchorPT,
          t: t,
          sa: c,
          ca: n && o * n.ca < 0 && Math.abs(o) > d ? a : o,
          sl: g,
          cl: _(h * h + l * l) - g,
          i: r,
        })
    );
  }
  function ja(t) {
    (r = y()),
      (a = a || (r && r.plugins.morphSVG)),
      r && a
        ? ((C = r.utils.toArray), (a.prototype._tweenRotation = ia), (F = 1))
        : t && M("Please gsap.registerPlugin(MorphSVGPlugin)");
  }
  var r,
    C,
    I,
    F,
    a,
    w = Math.atan2,
    j = Math.cos,
    L = Math.sin,
    _ = Math.sqrt,
    p = Math.PI,
    u = 2 * p,
    f = 0.3 * p,
    d = 0.7 * p,
    G = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    q = /(^[#\.][a-z]|[a-y][a-z])/i,
    H = /[achlmqstvz]/i,
    K =
      "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",
    tt = {
      version: "3.12.5",
      name: "morphSVG",
      rawVars: 1,
      register: function register(t, e) {
        (r = t), (a = e), ja();
      },
      init: function init(t, e, r, n, a) {
        if ((F || ja(1), !e)) return M("invalid shape"), !1;
        var o, i, s, h, l, g, c, p, u, f, d, _, P, m, v, y, w, x, T, b, S, N;
        if (
          (z(e) && (e = e.call(r, n, t, a)),
          "string" == typeof e || e.getBBox || e[0])
        )
          e = { shape: e };
        else if ("object" == typeof e) {
          for (i in ((o = {}), e))
            o[i] = z(e[i]) && "render" !== i ? e[i].call(r, n, t, a) : e[i];
          e = o;
        }
        var A = t.nodeType ? window.getComputedStyle(t) : {},
          R = A.fill + "",
          O = !(
            "none" === R ||
            "0" === (R.match(G) || [])[3] ||
            "evenodd" === A.fillRule
          ),
          j = (e.origin || "50 50").split(",");
        if (
          ((l =
            "POLYLINE" === (o = (t.nodeName + "").toUpperCase()) ||
            "POLYGON" === o),
          "PATH" !== o && !l && !e.prop)
        )
          return M("Cannot morph a <" + o + "> element. " + K), !1;
        if (
          ((i = "PATH" === o ? "d" : "points"), !e.prop && !z(t.setAttribute))
        )
          return !1;
        if (
          ((h = (function _parseShape(t, e, r) {
            var n, a;
            return (
              (!("string" == typeof t) ||
                q.test(t) ||
                (t.match(G) || []).length < 3) &&
                ((n = C(t)[0])
                  ? ((a = (n.nodeName + "").toUpperCase()),
                    e &&
                      "PATH" !== a &&
                      ((n = convertToPath(n, !1)), (a = "PATH")),
                    (t = n.getAttribute("PATH" === a ? "d" : "points") || ""),
                    n === r &&
                      (t = n.getAttributeNS(null, "data-original") || t))
                  : (M("WARNING: invalid morph to: " + t), (t = !1))),
              t
            );
          })(e.shape || e.d || e.points || "", "d" === i, t)),
          l && H.test(h))
        )
          return M("A <" + o + "> cannot accept path data. " + K), !1;
        if (
          ((g = e.shapeIndex || 0 === e.shapeIndex ? e.shapeIndex : "auto"),
          (c = e.map || tt.defaultMap),
          (this._prop = e.prop),
          (this._render = e.render || tt.defaultRender),
          (this._apply =
            "updateTarget" in e ? e.updateTarget : tt.defaultUpdateTarget),
          (this._rnd = Math.pow(10, isNaN(e.precision) ? 2 : +e.precision)),
          (this._tween = r),
          h)
        ) {
          if (
            ((this._target = t),
            (w = "object" == typeof e.precompile),
            (f = this._prop ? t[this._prop] : t.getAttribute(i)),
            this._prop ||
              t.getAttributeNS(null, "data-original") ||
              t.setAttributeNS(null, "data-original", f),
            "d" === i || this._prop)
          ) {
            if (
              ((f = stringToRawPath(w ? e.precompile[0] : f)),
              (d = stringToRawPath(w ? e.precompile[1] : h)),
              !w && !Z(f, d, g, c, O))
            )
              return !1;
            for (
              ("log" !== e.precompile && !0 !== e.precompile) ||
                M(
                  'precompile:["' +
                    rawPathToString(f) +
                    '","' +
                    rawPathToString(d) +
                    '"]'
                ),
                (S = "linear" !== (e.type || tt.defaultType)) &&
                  ((f = ea(f, e.smoothTolerance)),
                  (d = ea(d, e.smoothTolerance)),
                  f.size || Q(f),
                  d.size || Q(d),
                  (b = fa(j[0])),
                  (this._origin = f.origin =
                    { x: f.left + b.x * f.width, y: f.top + b.y * f.height }),
                  j[1] && (b = fa(j[1])),
                  (this._eOrigin = {
                    x: d.left + b.x * d.width,
                    y: d.top + b.y * d.height,
                  })),
                this._rawPath = t._gsRawPath = f,
                P = f.length;
              -1 < --P;

            )
              for (
                v = f[P],
                  y = d[P],
                  p = v.isSmooth || [],
                  u = y.isSmooth || [],
                  m = v.length,
                  _ = I = 0;
                _ < m;
                _ += 2
              )
                (y[_] === v[_] && y[_ + 1] === v[_ + 1]) ||
                  (S
                    ? p[_] && u[_]
                      ? ((x = v.smoothData),
                        (T = y.smoothData),
                        (N = _ + (_ === m - 4 ? 7 - m : 5)),
                        (this._controlPT = {
                          _next: this._controlPT,
                          i: _,
                          j: P,
                          l1s: x[_ + 1],
                          l1c: T[_ + 1] - x[_ + 1],
                          l2s: x[N],
                          l2c: T[N] - x[N],
                        }),
                        (s = this._tweenRotation(v, y, _ + 2)),
                        this._tweenRotation(v, y, _, s),
                        this._tweenRotation(v, y, N - 1, s),
                        (_ += 4))
                      : this._tweenRotation(v, y, _)
                    : ((s = this.add(v, _, v[_], y[_], 0, 0, 0, 0, 0, 1)),
                      (s =
                        this.add(
                          v,
                          _ + 1,
                          v[_ + 1],
                          y[_ + 1],
                          0,
                          0,
                          0,
                          0,
                          0,
                          1
                        ) || s)));
          } else
            s = this.add(
              t,
              "setAttribute",
              t.getAttribute(i) + "",
              h + "",
              n,
              a,
              0,
              ca(g),
              i
            );
          S &&
            (this.add(
              this._origin,
              "x",
              this._origin.x,
              this._eOrigin.x,
              0,
              0,
              0,
              0,
              0,
              1
            ),
            (s = this.add(
              this._origin,
              "y",
              this._origin.y,
              this._eOrigin.y,
              0,
              0,
              0,
              0,
              0,
              1
            ))),
            s && (this._props.push("morphSVG"), (s.end = h), (s.endProp = i));
        }
        return 1;
      },
      render: function render(t, e) {
        for (
          var r,
            n,
            a,
            o,
            i,
            s,
            h,
            l,
            g,
            c,
            p,
            u,
            f = e._rawPath,
            d = e._controlPT,
            _ = e._anchorPT,
            P = e._rnd,
            m = e._target,
            v = e._pt;
          v;

        )
          v.r(t, v.d), (v = v._next);
        if (1 === t && e._apply)
          for (v = e._pt; v; )
            v.end &&
              (e._prop
                ? (m[e._prop] = v.end)
                : m.setAttribute(v.endProp, v.end)),
              (v = v._next);
        else if (f) {
          for (; _; )
            (i = _.sa + t * _.ca),
              (o = _.sl + t * _.cl),
              (_.t[_.i] = e._origin.x + j(i) * o),
              (_.t[_.i + 1] = e._origin.y + L(i) * o),
              (_ = _._next);
          for (n = t < 0.5 ? 2 * t * t : (4 - 2 * t) * t - 1; d; )
            (u =
              (s = d.i) + (s === (a = f[d.j]).length - 4 ? 7 - a.length : 5)),
              (i = w(a[u] - a[s + 1], a[u - 1] - a[s])),
              (c = L(i)),
              (p = j(i)),
              (l = a[s + 2]),
              (g = a[s + 3]),
              (o = d.l1s + n * d.l1c),
              (a[s] = l - p * o),
              (a[s + 1] = g - c * o),
              (o = d.l2s + n * d.l2c),
              (a[u - 1] = l + p * o),
              (a[u] = g + c * o),
              (d = d._next);
          if (((m._gsRawPath = f), e._apply)) {
            for (r = "", h = 0; h < f.length; h++)
              for (
                o = (a = f[h]).length,
                  r +=
                    "M" +
                    ((a[0] * P) | 0) / P +
                    " " +
                    ((a[1] * P) | 0) / P +
                    " C",
                  s = 2;
                s < o;
                s++
              )
                r += ((a[s] * P) | 0) / P + " ";
            e._prop ? (m[e._prop] = r) : m.setAttribute("d", r);
          }
        }
        e._render && f && e._render.call(e._tween, f, m);
      },
      kill: function kill() {
        this._pt = this._rawPath = 0;
      },
      getRawPath: function getRawPath(t) {
        var e,
          r = (t = (m(t) && n.test(t) && document.querySelector(t)) || t)
            .getAttribute
            ? t
            : 0;
        return r && (t = t.getAttribute("d"))
          ? (r._gsPath || (r._gsPath = {}),
            (e = r._gsPath[t]) && !e._dirty
              ? e
              : (r._gsPath[t] = stringToRawPath(t)))
          : t
          ? m(t)
            ? stringToRawPath(t)
            : s(t[0])
            ? [t]
            : t
          : console.warn(
              "Expecting a <path> element or an SVG path data string"
            );
      },
      stringToRawPath: stringToRawPath,
      rawPathToString: rawPathToString,
      normalizeStrings: function normalizeStrings(t, e, r) {
        var n = r.shapeIndex,
          a = r.map,
          o = [t, e];
        return $(o, n, a), o;
      },
      pathFilter: $,
      pointsFilter: ba,
      getTotalSize: Q,
      equalizeSegmentQuantity: Z,
      convertToPath: function convertToPath$1(t, e) {
        return C(t).map(function (t) {
          return convertToPath(t, !1 !== e);
        });
      },
      defaultType: "linear",
      defaultUpdateTarget: !0,
      defaultMap: "size",
    };
  y() && r.registerPlugin(tt), (t.MorphSVGPlugin = tt), (t.default = tt);
  if (typeof window === "undefined" || window !== t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
  } else {
    delete t.default;
  }
});

/*!
 * Draggable 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function _assertThisInitialized(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function w(e, t) {
    if (e.parentNode && (h || T(e))) {
      var n = P(e),
        o = n
          ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
          : "http://www.w3.org/1999/xhtml",
        r = n ? (t ? "rect" : "g") : "div",
        i = 2 !== t ? 0 : 100,
        a = 3 === t ? 100 : 0,
        l =
          "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
        s = h.createElementNS
          ? h.createElementNS(o.replace(/^https/, "http"), r)
          : h.createElement(r);
      return (
        t &&
          (n
            ? ((g = g || w(e)),
              s.setAttribute("width", 0.01),
              s.setAttribute("height", 0.01),
              s.setAttribute("transform", "translate(" + i + "," + a + ")"),
              g.appendChild(s))
            : (f || ((f = w(e)).style.cssText = l),
              (s.style.cssText =
                l +
                "width:0.1px;height:0.1px;top:" +
                a +
                "px;left:" +
                i +
                "px"),
              f.appendChild(s))),
        s
      );
    }
    throw "Need document and parent.";
  }
  function A(e, t, n, o, r, i, a) {
    return (e.a = t), (e.b = n), (e.c = o), (e.d = r), (e.e = i), (e.f = a), e;
  }
  var h,
    u,
    i,
    a,
    f,
    g,
    x,
    m,
    y,
    t,
    v = "transform",
    b = v + "Origin",
    T = function _setDoc(e) {
      var t = e.ownerDocument || e;
      !(v in e.style) &&
        "msTransform" in e.style &&
        (b = (v = "msTransform") + "Origin");
      for (; t.parentNode && (t = t.parentNode); );
      if (((u = window), (x = new ge()), t)) {
        (i = (h = t).documentElement),
          (a = t.body),
          ((m = h.createElementNS(
            "http://www.w3.org/2000/svg",
            "g"
          )).style.transform = "none");
        var n = t.createElement("div"),
          o = t.createElement("div"),
          r = t && (t.body || t.firstElementChild);
        r &&
          r.appendChild &&
          (r.appendChild(n),
          n.appendChild(o),
          n.setAttribute(
            "style",
            "position:static;transform:translate3d(0,0,1px)"
          ),
          (y = o.offsetParent !== n),
          r.removeChild(n));
      }
      return t;
    },
    D = function _forceNonZeroScale(e) {
      for (var t, n; e && e !== a; )
        (n = e._gsap) && n.uncache && n.get(e, "x"),
          n &&
            !n.scaleX &&
            !n.scaleY &&
            n.renderTransform &&
            ((n.scaleX = n.scaleY = 1e-4),
            n.renderTransform(1, n),
            t ? t.push(n) : (t = [n])),
          (e = e.parentNode);
      return t;
    },
    M = [],
    E = [],
    L = function _getDocScrollTop() {
      return u.pageYOffset || h.scrollTop || i.scrollTop || a.scrollTop || 0;
    },
    S = function _getDocScrollLeft() {
      return u.pageXOffset || h.scrollLeft || i.scrollLeft || a.scrollLeft || 0;
    },
    P = function _svgOwner(e) {
      return (
        e.ownerSVGElement ||
        ("svg" === (e.tagName + "").toLowerCase() ? e : null)
      );
    },
    C = function _isFixed(e) {
      return (
        "fixed" === u.getComputedStyle(e).position ||
        ((e = e.parentNode) && 1 === e.nodeType ? _isFixed(e) : void 0)
      );
    },
    N = function _placeSiblings(e, t) {
      var n,
        o,
        r,
        i,
        a,
        l,
        s = P(e),
        c = e === s,
        d = s ? M : E,
        p = e.parentNode;
      if (e === u) return e;
      if ((d.length || d.push(w(e, 1), w(e, 2), w(e, 3)), (n = s ? g : f), s))
        c
          ? ((i =
              -(r = (function _getCTM(e) {
                var t,
                  n = e.getCTM();
                return (
                  n ||
                    ((t = e.style[v]),
                    (e.style[v] = "none"),
                    e.appendChild(m),
                    (n = m.getCTM()),
                    e.removeChild(m),
                    t
                      ? (e.style[v] = t)
                      : e.style.removeProperty(
                          v.replace(/([A-Z])/g, "-$1").toLowerCase()
                        )),
                  n || x.clone()
                );
              })(e)).e / r.a),
            (a = -r.f / r.d),
            (o = x))
          : e.getBBox
          ? ((r = e.getBBox()),
            (i =
              (o = (o = e.transform ? e.transform.baseVal : {}).numberOfItems
                ? 1 < o.numberOfItems
                  ? (function _consolidate(e) {
                      for (var t = new ge(), n = 0; n < e.numberOfItems; n++)
                        t.multiply(e.getItem(n).matrix);
                      return t;
                    })(o)
                  : o.getItem(0).matrix
                : x).a *
                r.x +
              o.c * r.y),
            (a = o.b * r.x + o.d * r.y))
          : ((o = new ge()), (i = a = 0)),
          t && "g" === e.tagName.toLowerCase() && (i = a = 0),
          (c ? s : p).appendChild(n),
          n.setAttribute(
            "transform",
            "matrix(" +
              o.a +
              "," +
              o.b +
              "," +
              o.c +
              "," +
              o.d +
              "," +
              (o.e + i) +
              "," +
              (o.f + a) +
              ")"
          );
      else {
        if (((i = a = 0), y))
          for (
            o = e.offsetParent, r = e;
            (r = r && r.parentNode) && r !== o && r.parentNode;

          )
            4 < (u.getComputedStyle(r)[v] + "").length &&
              ((i = r.offsetLeft), (a = r.offsetTop), (r = 0));
        if (
          "absolute" !== (l = u.getComputedStyle(e)).position &&
          "fixed" !== l.position
        )
          for (o = e.offsetParent; p && p !== o; )
            (i += p.scrollLeft || 0),
              (a += p.scrollTop || 0),
              (p = p.parentNode);
        ((r = n.style).top = e.offsetTop - a + "px"),
          (r.left = e.offsetLeft - i + "px"),
          (r[v] = l[v]),
          (r[b] = l[b]),
          (r.position = "fixed" === l.position ? "fixed" : "absolute"),
          e.parentNode.appendChild(n);
      }
      return n;
    },
    ge =
      (((t = Matrix2D.prototype).inverse = function inverse() {
        var e = this.a,
          t = this.b,
          n = this.c,
          o = this.d,
          r = this.e,
          i = this.f,
          a = e * o - t * n || 1e-10;
        return A(
          this,
          o / a,
          -t / a,
          -n / a,
          e / a,
          (n * i - o * r) / a,
          -(e * i - t * r) / a
        );
      }),
      (t.multiply = function multiply(e) {
        var t = this.a,
          n = this.b,
          o = this.c,
          r = this.d,
          i = this.e,
          a = this.f,
          l = e.a,
          s = e.c,
          c = e.b,
          d = e.d,
          p = e.e,
          u = e.f;
        return A(
          this,
          l * t + c * o,
          l * n + c * r,
          s * t + d * o,
          s * n + d * r,
          i + p * t + u * o,
          a + p * n + u * r
        );
      }),
      (t.clone = function clone() {
        return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f);
      }),
      (t.equals = function equals(e) {
        var t = this.a,
          n = this.b,
          o = this.c,
          r = this.d,
          i = this.e,
          a = this.f;
        return (
          t === e.a &&
          n === e.b &&
          o === e.c &&
          r === e.d &&
          i === e.e &&
          a === e.f
        );
      }),
      (t.apply = function apply(e, t) {
        void 0 === t && (t = {});
        var n = e.x,
          o = e.y,
          r = this.a,
          i = this.b,
          a = this.c,
          l = this.d,
          s = this.e,
          c = this.f;
        return (
          (t.x = n * r + o * a + s || 0), (t.y = n * i + o * l + c || 0), t
        );
      }),
      Matrix2D);
  function Matrix2D(e, t, n, o, r, i) {
    void 0 === e && (e = 1),
      void 0 === t && (t = 0),
      void 0 === n && (n = 0),
      void 0 === o && (o = 1),
      void 0 === r && (r = 0),
      void 0 === i && (i = 0),
      A(this, e, t, n, o, r, i);
  }
  function getGlobalMatrix(e, t, n, o) {
    if (!e || !e.parentNode || (h || T(e)).documentElement === e)
      return new ge();
    var r = D(e),
      i = P(e) ? M : E,
      a = N(e, n),
      l = i[0].getBoundingClientRect(),
      s = i[1].getBoundingClientRect(),
      c = i[2].getBoundingClientRect(),
      d = a.parentNode,
      p = !o && C(e),
      u = new ge(
        (s.left - l.left) / 100,
        (s.top - l.top) / 100,
        (c.left - l.left) / 100,
        (c.top - l.top) / 100,
        l.left + (p ? 0 : S()),
        l.top + (p ? 0 : L())
      );
    if ((d.removeChild(a), r))
      for (l = r.length; l--; )
        ((s = r[l]).scaleX = s.scaleY = 0), s.renderTransform(1, s);
    return t ? u.inverse() : u;
  }
  function X() {
    return "undefined" != typeof window;
  }
  function Y() {
    return xe || (X() && (xe = window.gsap) && xe.registerPlugin && xe);
  }
  function Z(e) {
    return "function" == typeof e;
  }
  function $(e) {
    return "object" == typeof e;
  }
  function _(e) {
    return void 0 === e;
  }
  function aa() {
    return !1;
  }
  function da(e) {
    return Math.round(1e4 * e) / 1e4;
  }
  function fa(e, t) {
    var n = ye.createElementNS
      ? ye.createElementNS(
          (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : ye.createElement(e);
    return n.style ? n : ye.createElement(e);
  }
  function ra(e, t) {
    var n,
      o = {};
    for (n in e) o[n] = t ? e[n] * t : e[n];
    return o;
  }
  function ta(e, t) {
    for (var n, o = e.length; o--; )
      t
        ? (e[o].style.touchAction = t)
        : e[o].style.removeProperty("touch-action"),
        (n = e[o].children) && n.length && ta(n, t);
  }
  function ua() {
    return Oe.forEach(function (e) {
      return e();
    });
  }
  function wa() {
    return !Oe.length && xe.ticker.remove(ua);
  }
  function xa(e) {
    for (var t = Oe.length; t--; ) Oe[t] === e && Oe.splice(t, 1);
    xe.to(wa, {
      overwrite: !0,
      delay: 15,
      duration: 0,
      onComplete: wa,
      data: "_draggable",
    });
  }
  function za(e, t, n, o) {
    if (e.addEventListener) {
      var r = Me[t];
      (o = o || (d ? { passive: !1 } : null)),
        e.addEventListener(r || t, n, o),
        r && t !== r && e.addEventListener(t, n, o);
    }
  }
  function Aa(e, t, n, o) {
    if (e.removeEventListener) {
      var r = Me[t];
      e.removeEventListener(r || t, n, o),
        r && t !== r && e.removeEventListener(t, n, o);
    }
  }
  function Ba(e) {
    e.preventDefault && e.preventDefault(),
      e.preventManipulation && e.preventManipulation();
  }
  function Da(e) {
    (Ee = e.touches && Ae < e.touches.length), Aa(e.target, "touchend", Da);
  }
  function Ea(e) {
    (Ee = e.touches && Ae < e.touches.length), za(e.target, "touchend", Da);
  }
  function Fa(e) {
    return (
      me.pageYOffset ||
      e.scrollTop ||
      e.documentElement.scrollTop ||
      e.body.scrollTop ||
      0
    );
  }
  function Ga(e) {
    return (
      me.pageXOffset ||
      e.scrollLeft ||
      e.documentElement.scrollLeft ||
      e.body.scrollLeft ||
      0
    );
  }
  function Ha(e, t) {
    za(e, "scroll", t), Qe(e.parentNode) || Ha(e.parentNode, t);
  }
  function Ia(e, t) {
    Aa(e, "scroll", t), Qe(e.parentNode) || Ia(e.parentNode, t);
  }
  function Ka(e, t) {
    var n = "x" === t ? "Width" : "Height",
      o = "scroll" + n,
      r = "client" + n;
    return Math.max(
      0,
      Qe(e)
        ? Math.max(ve[o], l[o]) - (me["inner" + n] || ve[r] || l[r])
        : e[o] - e[r]
    );
  }
  function La(e, t) {
    var n = Ka(e, "x"),
      o = Ka(e, "y");
    Qe(e) ? (e = We) : La(e.parentNode, t),
      (e._gsMaxScrollX = n),
      (e._gsMaxScrollY = o),
      t ||
        ((e._gsScrollX = e.scrollLeft || 0), (e._gsScrollY = e.scrollTop || 0));
  }
  function Ma(e, t, n) {
    var o = e.style;
    o &&
      (_(o[t]) && (t = c(t, e) || t),
      null == n
        ? o.removeProperty &&
          o.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase())
        : (o[t] = n));
  }
  function Na(e) {
    return me.getComputedStyle(
      e instanceof Element ? e : e.host || (e.parentNode || {}).host || e
    );
  }
  function Pa(e) {
    if (e === me)
      return (
        (p.left = p.top = 0),
        (p.width = p.right =
          ve.clientWidth || e.innerWidth || l.clientWidth || 0),
        (p.height = p.bottom =
          (e.innerHeight || 0) - 20 < ve.clientHeight
            ? ve.clientHeight
            : e.innerHeight || l.clientHeight || 0),
        p
      );
    var t = e.ownerDocument || ye,
      n = _(e.pageX)
        ? e.nodeType || _(e.left) || _(e.top)
          ? Te(e)[0].getBoundingClientRect()
          : e
        : {
            left: e.pageX - Ga(t),
            top: e.pageY - Fa(t),
            right: e.pageX - Ga(t) + 1,
            bottom: e.pageY - Fa(t) + 1,
          };
    return (
      _(n.right) && !_(n.width)
        ? ((n.right = n.left + n.width), (n.bottom = n.top + n.height))
        : _(n.width) &&
          (n = {
            width: n.right - n.left,
            height: n.bottom - n.top,
            right: n.right,
            left: n.left,
            bottom: n.bottom,
            top: n.top,
          }),
      n
    );
  }
  function Qa(e, t, n) {
    var o,
      r = e.vars,
      i = r[n],
      a = e._listeners[t];
    return (
      Z(i) &&
        (o = i.apply(
          r.callbackScope || e,
          r[n + "Params"] || [e.pointerEvent]
        )),
      a && !1 === e.dispatchEvent(t) && (o = !1),
      o
    );
  }
  function Ra(e, t) {
    var n,
      o,
      r,
      i = Te(e)[0];
    return i.nodeType || i === me
      ? O(i, t)
      : _(e.left)
      ? {
          left: (o = e.min || e.minX || e.minRotation || 0),
          top: (n = e.min || e.minY || 0),
          width: (e.max || e.maxX || e.maxRotation || 0) - o,
          height: (e.max || e.maxY || 0) - n,
        }
      : ((r = { x: 0, y: 0 }),
        {
          left: e.left - r.x,
          top: e.top - r.y,
          width: e.width,
          height: e.height,
        });
  }
  function Ua(r, i, e, t, a, n) {
    var o,
      l,
      s,
      c = {};
    if (i)
      if (1 !== a && i instanceof Array) {
        if (((c.end = o = []), (s = i.length), $(i[0])))
          for (l = 0; l < s; l++) o[l] = ra(i[l], a);
        else for (l = 0; l < s; l++) o[l] = i[l] * a;
        (e += 1.1), (t -= 1.1);
      } else
        Z(i)
          ? (c.end = function (e) {
              var t,
                n,
                o = i.call(r, e);
              if (1 !== a)
                if ($(o)) {
                  for (n in ((t = {}), o)) t[n] = o[n] * a;
                  o = t;
                } else o *= a;
              return o;
            })
          : (c.end = i);
    return (
      (!e && 0 !== e) || (c.max = e),
      (!t && 0 !== t) || (c.min = t),
      n && (c.velocity = 0),
      c
    );
  }
  function Va(e) {
    var t;
    return (
      !(!e || !e.getAttribute || e === l) &&
      (!(
        "true" !== (t = e.getAttribute("data-clickable")) &&
        ("false" === t ||
          (!o.test(e.nodeName + "") &&
            "true" !== e.getAttribute("contentEditable")))
      ) ||
        Va(e.parentNode))
    );
  }
  function Wa(e, t) {
    for (var n, o = e.length; o--; )
      ((n = e[o]).ondragstart = n.onselectstart = t ? null : aa),
        xe.set(n, { lazy: !0, userSelect: t ? "text" : "none" });
  }
  function $a(i, r) {
    (i = xe.utils.toArray(i)[0]), (r = r || {});
    var a,
      l,
      s,
      e,
      c,
      d,
      p = document.createElement("div"),
      u = p.style,
      t = i.firstChild,
      h = 0,
      f = 0,
      g = i.scrollTop,
      x = i.scrollLeft,
      m = i.scrollWidth,
      y = i.scrollHeight,
      v = 0,
      w = 0,
      b = 0;
    k && !1 !== r.force3D
      ? ((c = "translate3d("), (d = "px,0px)"))
      : B && ((c = "translate("), (d = "px)")),
      (this.scrollTop = function (e, t) {
        if (!arguments.length) return -this.top();
        this.top(-e, t);
      }),
      (this.scrollLeft = function (e, t) {
        if (!arguments.length) return -this.left();
        this.left(-e, t);
      }),
      (this.left = function (e, t) {
        if (!arguments.length) return -(i.scrollLeft + f);
        var n = i.scrollLeft - x,
          o = f;
        if ((2 < n || n < -2) && !t)
          return (
            (x = i.scrollLeft),
            xe.killTweensOf(this, { left: 1, scrollLeft: 1 }),
            this.left(-x),
            void (r.onKill && r.onKill())
          );
        (e = -e) < 0
          ? ((f = (e - 0.5) | 0), (e = 0))
          : w < e
          ? ((f = (e - w) | 0), (e = w))
          : (f = 0),
          (f || o) &&
            (this._skip || (u[B] = c + -f + "px," + -h + d),
            0 <= f + v && (u.paddingRight = f + v + "px")),
          (i.scrollLeft = 0 | e),
          (x = i.scrollLeft);
      }),
      (this.top = function (e, t) {
        if (!arguments.length) return -(i.scrollTop + h);
        var n = i.scrollTop - g,
          o = h;
        if ((2 < n || n < -2) && !t)
          return (
            (g = i.scrollTop),
            xe.killTweensOf(this, { top: 1, scrollTop: 1 }),
            this.top(-g),
            void (r.onKill && r.onKill())
          );
        (e = -e) < 0
          ? ((h = (e - 0.5) | 0), (e = 0))
          : b < e
          ? ((h = (e - b) | 0), (e = b))
          : (h = 0),
          (h || o) && (this._skip || (u[B] = c + -f + "px," + -h + d)),
          (i.scrollTop = 0 | e),
          (g = i.scrollTop);
      }),
      (this.maxScrollTop = function () {
        return b;
      }),
      (this.maxScrollLeft = function () {
        return w;
      }),
      (this.disable = function () {
        for (t = p.firstChild; t; )
          (e = t.nextSibling), i.appendChild(t), (t = e);
        i === p.parentNode && i.removeChild(p);
      }),
      (this.enable = function () {
        if ((t = i.firstChild) !== p) {
          for (; t; ) (e = t.nextSibling), p.appendChild(t), (t = e);
          i.appendChild(p), this.calibrate();
        }
      }),
      (this.calibrate = function (e) {
        var t,
          n,
          o,
          r = i.clientWidth === a;
        (g = i.scrollTop),
          (x = i.scrollLeft),
          (r &&
            i.clientHeight === l &&
            p.offsetHeight === s &&
            m === i.scrollWidth &&
            y === i.scrollHeight &&
            !e) ||
            ((h || f) &&
              ((n = this.left()),
              (o = this.top()),
              this.left(-i.scrollLeft),
              this.top(-i.scrollTop)),
            (t = Na(i)),
            (r && !e) ||
              ((u.display = "block"),
              (u.width = "auto"),
              (u.paddingRight = "0px"),
              (v = Math.max(0, i.scrollWidth - i.clientWidth)) &&
                (v +=
                  parseFloat(t.paddingLeft) +
                  (R ? parseFloat(t.paddingRight) : 0))),
            (u.display = "inline-block"),
            (u.position = "relative"),
            (u.overflow = "visible"),
            (u.verticalAlign = "top"),
            (u.boxSizing = "content-box"),
            (u.width = "100%"),
            (u.paddingRight = v + "px"),
            R && (u.paddingBottom = t.paddingBottom),
            (a = i.clientWidth),
            (l = i.clientHeight),
            (m = i.scrollWidth),
            (y = i.scrollHeight),
            (w = i.scrollWidth - a),
            (b = i.scrollHeight - l),
            (s = p.offsetHeight),
            (u.display = "block"),
            (n || o) && (this.left(n), this.top(o)));
      }),
      (this.content = p),
      (this.element = i),
      (this._skip = !1),
      this.enable();
  }
  function _a(e) {
    if (X() && document.body) {
      var t = window && window.navigator;
      (me = window),
        (ye = document),
        (ve = ye.documentElement),
        (l = ye.body),
        (s = fa("div")),
        (Pe = !!window.PointerEvent),
        ((we = fa("div")).style.cssText =
          "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
        (Se = "grab" === we.style.cursor ? "grab" : "move"),
        (_e = t && -1 !== t.userAgent.toLowerCase().indexOf("android")),
        (De =
          ("ontouchstart" in ve && "orientation" in me) ||
          (t && (0 < t.MaxTouchPoints || 0 < t.msMaxTouchPoints))),
        (o = fa("div")),
        (r = fa("div")),
        (i = r.style),
        (a = l),
        (i.display = "inline-block"),
        (i.position = "relative"),
        (o.style.cssText =
          "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
        o.appendChild(r),
        a.appendChild(o),
        (n = r.offsetHeight + 18 > o.scrollHeight),
        a.removeChild(o),
        (R = n),
        (Me = (function (e) {
          for (
            var t = e.split(","),
              n = (
                ("onpointerdown" in s)
                  ? "pointerdown,pointermove,pointerup,pointercancel"
                  : ("onmspointerdown" in s)
                  ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
                  : e
              ).split(","),
              o = {},
              r = 4;
            -1 < --r;

          )
            (o[t[r]] = n[r]), (o[n[r]] = t[r]);
          try {
            ve.addEventListener(
              "test",
              null,
              Object.defineProperty({}, "passive", {
                get: function get() {
                  d = 1;
                },
              })
            );
          } catch (e) {}
          return o;
        })("touchstart,touchmove,touchend,touchcancel")),
        za(ye, "touchcancel", aa),
        za(me, "touchmove", aa),
        l && l.addEventListener("touchstart", aa),
        za(ye, "contextmenu", function () {
          for (var e in ze) ze[e].isPressed && ze[e].endDrag();
        }),
        (xe = be = Y());
    }
    var n, o, r, i, a;
    xe
      ? ((Le = xe.plugins.inertia),
        (Xe = xe.core.context || function () {}),
        (c = xe.utils.checkPrefix),
        (B = c(B)),
        (Ce = c(Ce)),
        (Te = xe.utils.toArray),
        (Ye = xe.core.getStyleSaver),
        (k = !!c("perspective")))
      : e && console.warn("Please gsap.registerPlugin(Draggable)");
  }
  var xe,
    me,
    ye,
    ve,
    l,
    s,
    we,
    be,
    c,
    Te,
    d,
    De,
    Me,
    Ee,
    _e,
    Le,
    Se,
    Pe,
    Xe,
    Ye,
    k,
    R,
    n,
    Ae = 0,
    B = "transform",
    Ce = "transformOrigin",
    Ne = Array.isArray,
    ke = 180 / Math.PI,
    Re = 1e20,
    r = new ge(),
    Be =
      Date.now ||
      function () {
        return new Date().getTime();
      },
    Oe = [],
    ze = {},
    Ie = 0,
    o = /^(?:a|input|textarea|button|select)$/i,
    Fe = 0,
    He = {},
    We = {},
    Qe = function _isRoot(e) {
      return !(
        e &&
        e !== ve &&
        9 !== e.nodeType &&
        e !== ye.body &&
        e !== me &&
        e.nodeType &&
        e.parentNode
      );
    },
    p = {},
    Ge = {},
    O = function _getElementBounds(e, t) {
      t = Te(t)[0];
      var n,
        o,
        r,
        i,
        a,
        l,
        s,
        c,
        d,
        p,
        u,
        h,
        f,
        g = e.getBBox && e.ownerSVGElement,
        x = e.ownerDocument || ye;
      if (e === me)
        (r = Fa(x)),
          (o =
            (n = Ga(x)) +
            (x.documentElement.clientWidth ||
              e.innerWidth ||
              x.body.clientWidth ||
              0)),
          (i =
            r +
            ((e.innerHeight || 0) - 20 < x.documentElement.clientHeight
              ? x.documentElement.clientHeight
              : e.innerHeight || x.body.clientHeight || 0));
      else {
        if (t === me || _(t)) return e.getBoundingClientRect();
        (n = r = 0),
          g
            ? ((u = (p = e.getBBox()).width), (h = p.height))
            : (e.viewBox &&
                (p = e.viewBox.baseVal) &&
                ((n = p.x || 0), (r = p.y || 0), (u = p.width), (h = p.height)),
              u ||
                ((p = "border-box" === (f = Na(e)).boxSizing),
                (u =
                  (parseFloat(f.width) || e.clientWidth || 0) +
                  (p
                    ? 0
                    : parseFloat(f.borderLeftWidth) +
                      parseFloat(f.borderRightWidth))),
                (h =
                  (parseFloat(f.height) || e.clientHeight || 0) +
                  (p
                    ? 0
                    : parseFloat(f.borderTopWidth) +
                      parseFloat(f.borderBottomWidth))))),
          (o = u),
          (i = h);
      }
      return e === t
        ? { left: n, top: r, width: o - n, height: i - r }
        : ((l = (a = getGlobalMatrix(t, !0).multiply(getGlobalMatrix(e))).apply(
            { x: n, y: r }
          )),
          (s = a.apply({ x: o, y: r })),
          (c = a.apply({ x: o, y: i })),
          (d = a.apply({ x: n, y: i })),
          {
            left: (n = Math.min(l.x, s.x, c.x, d.x)),
            top: (r = Math.min(l.y, s.y, c.y, d.y)),
            width: Math.max(l.x, s.x, c.x, d.x) - n,
            height: Math.max(l.y, s.y, c.y, d.y) - r,
          });
    },
    z =
      (((n = EventDispatcher.prototype).addEventListener =
        function addEventListener(e, t) {
          var n = this._listeners[e] || (this._listeners[e] = []);
          ~n.indexOf(t) || n.push(t);
        }),
      (n.removeEventListener = function removeEventListener(e, t) {
        var n = this._listeners[e],
          o = n && n.indexOf(t);
        0 <= o && n.splice(o, 1);
      }),
      (n.dispatchEvent = function dispatchEvent(t) {
        var n,
          o = this;
        return (
          (this._listeners[t] || []).forEach(function (e) {
            return !1 === e.call(o, { type: t, target: o.target }) && (n = !1);
          }),
          n
        );
      }),
      EventDispatcher);
  function EventDispatcher(e) {
    (this._listeners = {}), (this.target = e || this);
  }
  var Ke,
    I =
      ((function _inheritsLoose(e, t) {
        (e.prototype = Object.create(t.prototype)),
          ((e.prototype.constructor = e).__proto__ = t);
      })(Draggable, (Ke = z)),
      (Draggable.register = function register(e) {
        (xe = e), _a();
      }),
      (Draggable.create = function create(e, t) {
        return (
          be || _a(!0),
          Te(e).map(function (e) {
            return new Draggable(e, t);
          })
        );
      }),
      (Draggable.get = function get(e) {
        return ze[(Te(e)[0] || {})._gsDragID];
      }),
      (Draggable.timeSinceDrag = function timeSinceDrag() {
        return (Be() - Fe) / 1e3;
      }),
      (Draggable.hitTest = function hitTest(e, t, n) {
        if (e === t) return !1;
        var o,
          r,
          i,
          a = Pa(e),
          l = Pa(t),
          s = a.top,
          c = a.left,
          d = a.right,
          p = a.bottom,
          u = a.width,
          h = a.height,
          f = l.left > d || l.right < c || l.top > p || l.bottom < s;
        return f || !n
          ? !f
          : ((i = -1 !== (n + "").indexOf("%")),
            (n = parseFloat(n) || 0),
            ((o = {
              left: Math.max(c, l.left),
              top: Math.max(s, l.top),
            }).width = Math.min(d, l.right) - o.left),
            (o.height = Math.min(p, l.bottom) - o.top),
            !(o.width < 0 || o.height < 0) &&
              (i
                ? u * h * (n *= 0.01) <= (r = o.width * o.height) ||
                  r >= l.width * l.height * n
                : o.width > n && o.height > n));
      }),
      Draggable);
  function Draggable(h, p) {
    var e;
    (e = Ke.call(this) || this),
      be || _a(1),
      (h = Te(h)[0]),
      (e.styles = Ye && Ye(h, "transform,left,top")),
      (Le = Le || xe.plugins.inertia),
      (e.vars = p = ra(p || {})),
      (e.target = h),
      (e.x = e.y = e.rotation = 0),
      (e.dragResistance = parseFloat(p.dragResistance) || 0),
      (e.edgeResistance = isNaN(p.edgeResistance)
        ? 1
        : parseFloat(p.edgeResistance) || 0),
      (e.lockAxis = p.lockAxis),
      (e.autoScroll = p.autoScroll || 0),
      (e.lockedAxis = null),
      (e.allowEventDefault = !!p.allowEventDefault),
      xe.getProperty(h, "x");
    function Rg(e, t) {
      return parseFloat(se.get(h, e, t));
    }
    function yh(e) {
      return (
        Ba(e), e.stopImmediatePropagation && e.stopImmediatePropagation(), !1
      );
    }
    function zh(e) {
      if (q.autoScroll && q.isDragging && (te || Y)) {
        var t,
          n,
          o,
          r,
          i,
          a,
          l,
          s,
          c = h,
          d = 15 * q.autoScroll;
        for (
          te = !1,
            We.scrollTop =
              null != me.pageYOffset
                ? me.pageYOffset
                : null != de.documentElement.scrollTop
                ? de.documentElement.scrollTop
                : de.body.scrollTop,
            We.scrollLeft =
              null != me.pageXOffset
                ? me.pageXOffset
                : null != de.documentElement.scrollLeft
                ? de.documentElement.scrollLeft
                : de.body.scrollLeft,
            r = q.pointerX - We.scrollLeft,
            i = q.pointerY - We.scrollTop;
          c && !n;

        )
          (t = (n = Qe(c.parentNode)) ? We : c.parentNode),
            (o = n
              ? {
                  bottom: Math.max(ve.clientHeight, me.innerHeight || 0),
                  right: Math.max(ve.clientWidth, me.innerWidth || 0),
                  left: 0,
                  top: 0,
                }
              : t.getBoundingClientRect()),
            (a = l = 0),
            U &&
              ((s = t._gsMaxScrollY - t.scrollTop) < 0
                ? (l = s)
                : i > o.bottom - re && s
                ? ((te = !0),
                  (l = Math.min(
                    s,
                    (d * (1 - Math.max(0, o.bottom - i) / re)) | 0
                  )))
                : i < o.top + ne &&
                  t.scrollTop &&
                  ((te = !0),
                  (l = -Math.min(
                    t.scrollTop,
                    (d * (1 - Math.max(0, i - o.top) / ne)) | 0
                  ))),
              l && (t.scrollTop += l)),
            V &&
              ((s = t._gsMaxScrollX - t.scrollLeft) < 0
                ? (a = s)
                : r > o.right - oe && s
                ? ((te = !0),
                  (a = Math.min(
                    s,
                    (d * (1 - Math.max(0, o.right - r) / oe)) | 0
                  )))
                : r < o.left + ie &&
                  t.scrollLeft &&
                  ((te = !0),
                  (a = -Math.min(
                    t.scrollLeft,
                    (d * (1 - Math.max(0, r - o.left) / ie)) | 0
                  ))),
              a && (t.scrollLeft += a)),
            n &&
              (a || l) &&
              (me.scrollTo(t.scrollLeft, t.scrollTop),
              he(q.pointerX + a, q.pointerY + l)),
            (c = t);
      }
      if (Y) {
        var p = q.x,
          u = q.y;
        Q
          ? ((q.deltaX = p - parseFloat(se.rotation)),
            (q.rotation = p),
            (se.rotation = p + "deg"),
            se.renderTransform(1, se))
          : f
          ? (U && ((q.deltaY = u - f.top()), f.top(u)),
            V && ((q.deltaX = p - f.left()), f.left(p)))
          : W
          ? (U && ((q.deltaY = u - parseFloat(se.y)), (se.y = u + "px")),
            V && ((q.deltaX = p - parseFloat(se.x)), (se.x = p + "px")),
            se.renderTransform(1, se))
          : (U &&
              ((q.deltaY = u - parseFloat(h.style.top || 0)),
              (h.style.top = u + "px")),
            V &&
              ((q.deltaX = p - parseFloat(h.style.left || 0)),
              (h.style.left = p + "px"))),
          !g ||
            e ||
            z ||
            (!(z = !0) === Qa(q, "drag", "onDrag") &&
              (V && (q.x -= q.deltaX), U && (q.y -= q.deltaY), zh(!0)),
            (z = !1));
      }
      Y = !1;
    }
    function Ah(e, t) {
      var n,
        o,
        r = q.x,
        i = q.y;
      h._gsap || (se = xe.core.getCache(h)),
        se.uncache && xe.getProperty(h, "x"),
        W
          ? ((q.x = parseFloat(se.x)), (q.y = parseFloat(se.y)))
          : Q
          ? (q.x = q.rotation = parseFloat(se.rotation))
          : f
          ? ((q.y = f.top()), (q.x = f.left()))
          : ((q.y = parseFloat(h.style.top || ((o = Na(h)) && o.top)) || 0),
            (q.x = parseFloat(h.style.left || (o || {}).left) || 0)),
        (A || C || N) &&
          !t &&
          (q.isDragging || q.isThrowing) &&
          (N &&
            ((He.x = q.x),
            (He.y = q.y),
            (n = N(He)).x !== q.x && ((q.x = n.x), (Y = !0)),
            n.y !== q.y && ((q.y = n.y), (Y = !0))),
          A &&
            (n = A(q.x)) !== q.x &&
            ((q.x = n), Q && (q.rotation = n), (Y = !0)),
          C && ((n = C(q.y)) !== q.y && (q.y = n), (Y = !0))),
        Y && zh(!0),
        e ||
          ((q.deltaX = q.x - r),
          (q.deltaY = q.y - i),
          Qa(q, "throwupdate", "onThrowUpdate"));
    }
    function Bh(a, l, s, n) {
      return (
        null == l && (l = -Re),
        null == s && (s = Re),
        Z(a)
          ? function (e) {
              var t = q.isPressed ? 1 - q.edgeResistance : 1;
              return (
                a.call(
                  q,
                  (s < e ? s + (e - s) * t : e < l ? l + (e - l) * t : e) * n
                ) * n
              );
            }
          : Ne(a)
          ? function (e) {
              for (var t, n, o = a.length, r = 0, i = Re; -1 < --o; )
                (n = (t = a[o]) - e) < 0 && (n = -n),
                  n < i && l <= t && t <= s && ((r = o), (i = n));
              return a[r];
            }
          : isNaN(a)
          ? function (e) {
              return e;
            }
          : function () {
              return a * n;
            }
      );
    }
    function Dh() {
      var e, t, n, o;
      (M = !1),
        f
          ? (f.calibrate(),
            (q.minX = L = -f.maxScrollLeft()),
            (q.minY = P = -f.maxScrollTop()),
            (q.maxX = E = q.maxY = S = 0),
            (M = !0))
          : p.bounds &&
            ((e = Ra(p.bounds, h.parentNode)),
            Q
              ? ((q.minX = L = e.left),
                (q.maxX = E = e.left + e.width),
                (q.minY = P = q.maxY = S = 0))
              : _(p.bounds.maxX) && _(p.bounds.maxY)
              ? ((t = Ra(h, h.parentNode)),
                (q.minX = L = Math.round(Rg(G, "px") + e.left - t.left)),
                (q.minY = P = Math.round(Rg(K, "px") + e.top - t.top)),
                (q.maxX = E = Math.round(L + (e.width - t.width))),
                (q.maxY = S = Math.round(P + (e.height - t.height))))
              : ((e = p.bounds),
                (q.minX = L = e.minX),
                (q.minY = P = e.minY),
                (q.maxX = E = e.maxX),
                (q.maxY = S = e.maxY)),
            E < L && ((q.minX = E), (q.maxX = E = L), (L = q.minX)),
            S < P && ((q.minY = S), (q.maxY = S = P), (P = q.minY)),
            Q && ((q.minRotation = L), (q.maxRotation = E)),
            (M = !0)),
        p.liveSnap &&
          ((n = !0 === p.liveSnap ? p.snap || {} : p.liveSnap),
          (o = Ne(n) || Z(n)),
          Q
            ? ((A = Bh(o ? n : n.rotation, L, E, 1)), (C = null))
            : n.points
            ? (N = (function buildPointSnapFunc(s, l, c, d, p, u, h) {
                return (
                  (u = u && u < Re ? u * u : Re),
                  Z(s)
                    ? function (e) {
                        var t,
                          n,
                          o,
                          r = q.isPressed ? 1 - q.edgeResistance : 1,
                          i = e.x,
                          a = e.y;
                        return (
                          (e.x = i =
                            c < i
                              ? c + (i - c) * r
                              : i < l
                              ? l + (i - l) * r
                              : i),
                          (e.y = a =
                            p < a
                              ? p + (a - p) * r
                              : a < d
                              ? d + (a - d) * r
                              : a),
                          (t = s.call(q, e)) !== e &&
                            ((e.x = t.x), (e.y = t.y)),
                          1 !== h && ((e.x *= h), (e.y *= h)),
                          u < Re &&
                            ((n = e.x - i),
                            (o = e.y - a),
                            u < n * n + o * o && ((e.x = i), (e.y = a))),
                          e
                        );
                      }
                    : Ne(s)
                    ? function (e) {
                        for (
                          var t, n, o, r, i = s.length, a = 0, l = Re;
                          -1 < --i;

                        )
                          (r =
                            (t = (o = s[i]).x - e.x) * t +
                            (n = o.y - e.y) * n) < l && ((a = i), (l = r));
                        return l <= u ? s[a] : e;
                      }
                    : function (e) {
                        return e;
                      }
                );
              })(o ? n : n.points, L, E, P, S, n.radius, f ? -1 : 1))
            : (V &&
                (A = Bh(
                  o ? n : n.x || n.left || n.scrollLeft,
                  L,
                  E,
                  f ? -1 : 1
                )),
              U &&
                (C = Bh(
                  o ? n : n.y || n.top || n.scrollTop,
                  P,
                  S,
                  f ? -1 : 1
                ))));
    }
    function Eh() {
      (q.isThrowing = !1), Qa(q, "throwcomplete", "onThrowComplete");
    }
    function Fh() {
      q.isThrowing = !1;
    }
    function Gh(e, t) {
      var n, o, r, i;
      e && Le
        ? (!0 === e &&
            ((n = p.snap || p.liveSnap || {}),
            (o = Ne(n) || Z(n)),
            (e = {
              resistance:
                (p.throwResistance || p.resistance || 1e3) / (Q ? 10 : 1),
            }),
            Q
              ? (e.rotation = Ua(q, o ? n : n.rotation, E, L, 1, t))
              : (V &&
                  (e[G] = Ua(
                    q,
                    o ? n : n.points || n.x || n.left,
                    E,
                    L,
                    f ? -1 : 1,
                    t || "x" === q.lockedAxis
                  )),
                U &&
                  (e[K] = Ua(
                    q,
                    o ? n : n.points || n.y || n.top,
                    S,
                    P,
                    f ? -1 : 1,
                    t || "y" === q.lockedAxis
                  )),
                (n.points || (Ne(n) && $(n[0]))) &&
                  ((e.linkedProps = G + "," + K), (e.radius = n.radius)))),
          (q.isThrowing = !0),
          (i = isNaN(p.overshootTolerance)
            ? 1 === p.edgeResistance
              ? 0
              : 1 - q.edgeResistance + 0.2
            : p.overshootTolerance),
          e.duration ||
            (e.duration = {
              max: Math.max(
                p.minDuration || 0,
                "maxDuration" in p ? p.maxDuration : 2
              ),
              min: isNaN(p.minDuration)
                ? 0 === i || ($(e) && 1e3 < e.resistance)
                  ? 0
                  : 0.5
                : p.minDuration,
              overshoot: i,
            }),
          (q.tween = r =
            xe.to(f || h, {
              inertia: e,
              data: "_draggable",
              inherit: !1,
              onComplete: Eh,
              onInterrupt: Fh,
              onUpdate: p.fastMode ? Qa : Ah,
              onUpdateParams: p.fastMode
                ? [q, "onthrowupdate", "onThrowUpdate"]
                : n && n.radius
                ? [!1, !0]
                : [],
            })),
          p.fastMode ||
            (f && (f._skip = !0),
            r.render(1e9, !0, !0),
            Ah(!0, !0),
            (q.endX = q.x),
            (q.endY = q.y),
            Q && (q.endRotation = q.x),
            r.play(0),
            Ah(!0, !0),
            f && (f._skip = !1)))
        : M && q.applyBounds();
    }
    function Hh(e) {
      var t,
        n = k;
      (k = getGlobalMatrix(h.parentNode, !0)),
        e &&
          q.isPressed &&
          !k.equals(n || new ge()) &&
          ((t = n.inverse().apply({ x: w, y: b })),
          k.apply(t, t),
          (w = t.x),
          (b = t.y)),
        k.equals(r) && (k = null);
    }
    function Ih() {
      var e,
        t,
        n,
        o = 1 - q.edgeResistance,
        r = ce ? Ga(de) : 0,
        i = ce ? Fa(de) : 0;
      W &&
        ((se.x = Rg(G, "px") + "px"),
        (se.y = Rg(K, "px") + "px"),
        se.renderTransform()),
        Hh(!1),
        (Ge.x = q.pointerX - r),
        (Ge.y = q.pointerY - i),
        k && k.apply(Ge, Ge),
        (w = Ge.x),
        (b = Ge.y),
        Y && (he(q.pointerX, q.pointerY), zh(!0)),
        (d = getGlobalMatrix(h)),
        f
          ? (Dh(), (D = f.top()), (T = f.left()))
          : (pe() ? (Ah(!0, !0), Dh()) : q.applyBounds(),
            Q
              ? ((e = h.ownerSVGElement
                  ? [se.xOrigin - h.getBBox().x, se.yOrigin - h.getBBox().y]
                  : (Na(h)[Ce] || "0 0").split(" ")),
                (X = q.rotationOrigin =
                  getGlobalMatrix(h).apply({
                    x: parseFloat(e[0]) || 0,
                    y: parseFloat(e[1]) || 0,
                  })),
                Ah(!0, !0),
                (t = q.pointerX - X.x - r),
                (n = X.y - q.pointerY + i),
                (T = q.x),
                (D = q.y = Math.atan2(n, t) * ke))
              : ((D = Rg(K, "px")), (T = Rg(G, "px")))),
        M &&
          o &&
          (E < T ? (T = E + (T - E) / o) : T < L && (T = L - (L - T) / o),
          Q ||
            (S < D ? (D = S + (D - S) / o) : D < P && (D = P - (P - D) / o))),
        (q.startX = T = da(T)),
        (q.startY = D = da(D));
    }
    function Kh() {
      !we.parentNode || pe() || q.isDragging || we.parentNode.removeChild(we);
    }
    function Lh(e, t) {
      var n;
      if (
        !u ||
        q.isPressed ||
        !e ||
        (!(("mousedown" !== e.type && "pointerdown" !== e.type) || t) &&
          Be() - le < 30 &&
          Me[q.pointerEvent.type])
      )
        F && e && u && Ba(e);
      else {
        if (
          ((R = pe()),
          (H = !1),
          (q.pointerEvent = e),
          Me[e.type]
            ? ((v = ~e.type.indexOf("touch")
                ? e.currentTarget || e.target
                : de),
              za(v, "touchend", fe),
              za(v, "touchmove", ue),
              za(v, "touchcancel", fe),
              za(de, "touchstart", Ea))
            : ((v = null), za(de, "mousemove", ue)),
          (O = null),
          (Pe && v) ||
            (za(de, "mouseup", fe),
            e && e.target && za(e.target, "mouseup", fe)),
          (y = ae.call(q, e.target) && !1 === p.dragClickables && !t))
        )
          return (
            za(e.target, "change", fe),
            Qa(q, "pressInit", "onPressInit"),
            Qa(q, "press", "onPress"),
            Wa(J, !0),
            void (F = !1)
          );
        if (
          ((B =
            !(
              !v ||
              V == U ||
              !1 === q.vars.allowNativeTouchScrolling ||
              (q.vars.allowContextMenu && e && (e.ctrlKey || 2 < e.which))
            ) && (V ? "y" : "x")),
          (F = !B && !q.allowEventDefault) &&
            (Ba(e), za(me, "touchforcechange", Ba)),
          e.changedTouches
            ? ((e = x = e.changedTouches[0]), (m = e.identifier))
            : e.pointerId
            ? (m = e.pointerId)
            : (x = m = null),
          Ae++,
          (function _addToRenderQueue(e) {
            Oe.push(e), 1 === Oe.length && xe.ticker.add(ua);
          })(zh),
          (b = q.pointerY = e.pageY),
          (w = q.pointerX = e.pageX),
          Qa(q, "pressInit", "onPressInit"),
          (B || q.autoScroll) && La(h.parentNode),
          !h.parentNode ||
            !q.autoScroll ||
            f ||
            Q ||
            !h.parentNode._gsMaxScrollX ||
            we.parentNode ||
            h.getBBox ||
            ((we.style.width = h.parentNode.scrollWidth + "px"),
            h.parentNode.appendChild(we)),
          Ih(),
          q.tween && q.tween.kill(),
          (q.isThrowing = !1),
          xe.killTweensOf(f || h, o, !0),
          f && xe.killTweensOf(h, { scrollTo: 1 }, !0),
          (q.tween = q.lockedAxis = null),
          (!p.zIndexBoost && (Q || f || !1 === p.zIndexBoost)) ||
            (h.style.zIndex = Draggable.zIndex++),
          (q.isPressed = !0),
          (g = !(!p.onDrag && !q._listeners.drag)),
          (s = !(!p.onMove && !q._listeners.move)),
          !1 !== p.cursor || p.activeCursor)
        )
          for (n = J.length; -1 < --n; )
            xe.set(J[n], {
              cursor:
                p.activeCursor || p.cursor || ("grab" === Se ? "grabbing" : Se),
            });
        Qa(q, "press", "onPress");
      }
    }
    function Ph(e) {
      if (e && q.isDragging && !f) {
        var t = e.target || h.parentNode,
          n = t.scrollLeft - t._gsScrollX,
          o = t.scrollTop - t._gsScrollY;
        (n || o) &&
          (k
            ? ((w -= n * k.a + o * k.c), (b -= o * k.d + n * k.b))
            : ((w -= n), (b -= o)),
          (t._gsScrollX += n),
          (t._gsScrollY += o),
          he(q.pointerX, q.pointerY));
      }
    }
    function Qh(e) {
      var t = Be(),
        n = t - le < 100,
        o = t - ee < 50,
        r = n && I === le,
        i = q.pointerEvent && q.pointerEvent.defaultPrevented,
        a = n && c === le,
        l = e.isTrusted || (null == e.isTrusted && n && r);
      if (
        ((r || (o && !1 !== q.vars.suppressClickOnDrag)) &&
          e.stopImmediatePropagation &&
          e.stopImmediatePropagation(),
        n &&
          (!q.pointerEvent || !q.pointerEvent.defaultPrevented) &&
          (!r || (l && !a)))
      )
        return l && r && (c = le), void (I = le);
      (q.isPressed || o || n) && ((l && e.detail && n && !i) || Ba(e)),
        n ||
          o ||
          H ||
          (e && e.target && (q.pointerEvent = e), Qa(q, "click", "onClick"));
    }
    function Rh(e) {
      return k
        ? { x: e.x * k.a + e.y * k.c + k.e, y: e.x * k.b + e.y * k.d + k.f }
        : { x: e.x, y: e.y };
    }
    var u,
      f,
      w,
      b,
      T,
      D,
      M,
      g,
      s,
      E,
      L,
      S,
      P,
      x,
      m,
      X,
      Y,
      t,
      A,
      C,
      N,
      y,
      v,
      k,
      R,
      B,
      O,
      z,
      I,
      c,
      F,
      d,
      H,
      n = (p.type || "x,y").toLowerCase(),
      W = ~n.indexOf("x") || ~n.indexOf("y"),
      Q = -1 !== n.indexOf("rotation"),
      G = Q ? "rotation" : W ? "x" : "left",
      K = W ? "y" : "top",
      V = !(!~n.indexOf("x") && !~n.indexOf("left") && "scroll" !== n),
      U = !(!~n.indexOf("y") && !~n.indexOf("top") && "scroll" !== n),
      j = p.minimumMovement || 2,
      q = _assertThisInitialized(e),
      J = Te(p.trigger || p.handle || h),
      o = {},
      ee = 0,
      te = !1,
      ne = p.autoScrollMarginTop || 40,
      oe = p.autoScrollMarginRight || 40,
      re = p.autoScrollMarginBottom || 40,
      ie = p.autoScrollMarginLeft || 40,
      ae = p.clickableTest || Va,
      le = 0,
      se = h._gsap || xe.core.getCache(h),
      ce = (function _isFixed(e) {
        return (
          "fixed" === Na(e).position ||
          ((e = e.parentNode) && 1 === e.nodeType ? _isFixed(e) : void 0)
        );
      })(h),
      de = h.ownerDocument || ye,
      pe = function isTweening() {
        return q.tween && q.tween.isActive();
      },
      ue = function onMove(e) {
        var t,
          n,
          o,
          r,
          i,
          a,
          l = e;
        if (u && !Ee && q.isPressed && e) {
          if ((t = (q.pointerEvent = e).changedTouches)) {
            if ((e = t[0]) !== x && e.identifier !== m) {
              for (
                r = t.length;
                -1 < --r && (e = t[r]).identifier !== m && e.target !== h;

              );
              if (r < 0) return;
            }
          } else if (e.pointerId && m && e.pointerId !== m) return;
          v &&
          B &&
          !O &&
          ((Ge.x = e.pageX - (ce ? Ga(de) : 0)),
          (Ge.y = e.pageY - (ce ? Fa(de) : 0)),
          k && k.apply(Ge, Ge),
          (n = Ge.x),
          (o = Ge.y),
          (((i = Math.abs(n - w)) !== (a = Math.abs(o - b)) &&
            (j < i || j < a)) ||
            (_e && B === O)) &&
            ((O = a < i && V ? "x" : "y"),
            B && O !== B && za(me, "touchforcechange", Ba),
            !1 !== q.vars.lockAxisOnTouchScroll &&
              V &&
              U &&
              ((q.lockedAxis = "x" === O ? "y" : "x"),
              Z(q.vars.onLockAxis) && q.vars.onLockAxis.call(q, l)),
            _e && B === O))
            ? fe(l)
            : ((F =
                q.allowEventDefault ||
                (B && (!O || B === O)) ||
                !1 === l.cancelable
                  ? F && !1
                  : (Ba(l), !0)),
              q.autoScroll && (te = !0),
              he(e.pageX, e.pageY, s));
        } else F && e && u && Ba(e);
      },
      he = function setPointerPosition(e, t, n) {
        var o,
          r,
          i,
          a,
          l,
          s,
          c = 1 - q.dragResistance,
          d = 1 - q.edgeResistance,
          p = q.pointerX,
          u = q.pointerY,
          h = D,
          f = q.x,
          g = q.y,
          x = q.endX,
          m = q.endY,
          y = q.endRotation,
          v = Y;
        (q.pointerX = e),
          (q.pointerY = t),
          ce && ((e -= Ga(de)), (t -= Fa(de))),
          Q
            ? ((a = Math.atan2(X.y - t, e - X.x) * ke),
              180 < (l = q.y - a)
                ? ((D -= 360), (q.y = a))
                : l < -180 && ((D += 360), (q.y = a)),
              (i =
                q.x !== T || Math.abs(D - a) > j
                  ? ((q.y = a), T + (D - a) * c)
                  : T))
            : (k &&
                ((s = e * k.a + t * k.c + k.e),
                (t = e * k.b + t * k.d + k.f),
                (e = s)),
              (r = t - b) < j && -j < r && (r = 0),
              (o = e - w) < j && -j < o && (o = 0),
              (q.lockAxis || q.lockedAxis) &&
                (o || r) &&
                ((s = q.lockedAxis) ||
                  ((q.lockedAxis = s =
                    V && Math.abs(o) > Math.abs(r) ? "y" : U ? "x" : null),
                  s &&
                    Z(q.vars.onLockAxis) &&
                    q.vars.onLockAxis.call(q, q.pointerEvent)),
                "y" === s ? (r = 0) : "x" === s && (o = 0)),
              (i = da(T + o * c)),
              (a = da(D + r * c))),
          (A || C || N) &&
            (q.x !== i || (q.y !== a && !Q)) &&
            (N &&
              ((He.x = i),
              (He.y = a),
              (s = N(He)),
              (i = da(s.x)),
              (a = da(s.y))),
            A && (i = da(A(i))),
            C && (a = da(C(a)))),
          M &&
            (E < i
              ? (i = E + Math.round((i - E) * d))
              : i < L && (i = L + Math.round((i - L) * d)),
            Q ||
              (S < a
                ? (a = Math.round(S + (a - S) * d))
                : a < P && (a = Math.round(P + (a - P) * d)))),
          (q.x === i && (q.y === a || Q)) ||
            (Q
              ? ((q.endRotation = q.x = q.endX = i), (Y = !0))
              : (U && ((q.y = q.endY = a), (Y = !0)),
                V && ((q.x = q.endX = i), (Y = !0))),
            n && !1 === Qa(q, "move", "onMove")
              ? ((q.pointerX = p),
                (q.pointerY = u),
                (D = h),
                (q.x = f),
                (q.y = g),
                (q.endX = x),
                (q.endY = m),
                (q.endRotation = y),
                (Y = v))
              : !q.isDragging &&
                q.isPressed &&
                ((q.isDragging = H = !0), Qa(q, "dragstart", "onDragStart")));
      },
      fe = function onRelease(e, t) {
        if (
          u &&
          q.isPressed &&
          (!e ||
            null == m ||
            t ||
            !(
              (e.pointerId && e.pointerId !== m && e.target !== h) ||
              (e.changedTouches &&
                !(function _hasTouchID(e, t) {
                  for (var n = e.length; n--; )
                    if (e[n].identifier === t) return !0;
                })(e.changedTouches, m))
            ))
        ) {
          q.isPressed = !1;
          var n,
            o,
            r,
            i,
            a,
            l = e,
            s = q.isDragging,
            c = q.vars.allowContextMenu && e && (e.ctrlKey || 2 < e.which),
            d = xe.delayedCall(0.001, Kh);
          if (
            (v
              ? (Aa(v, "touchend", onRelease),
                Aa(v, "touchmove", ue),
                Aa(v, "touchcancel", onRelease),
                Aa(de, "touchstart", Ea))
              : Aa(de, "mousemove", ue),
            Aa(me, "touchforcechange", Ba),
            (Pe && v) ||
              (Aa(de, "mouseup", onRelease),
              e && e.target && Aa(e.target, "mouseup", onRelease)),
            (Y = !1),
            s && ((ee = Fe = Be()), (q.isDragging = !1)),
            xa(zh),
            y && !c)
          )
            return (
              e && (Aa(e.target, "change", onRelease), (q.pointerEvent = l)),
              Wa(J, !1),
              Qa(q, "release", "onRelease"),
              Qa(q, "click", "onClick"),
              void (y = !1)
            );
          for (o = J.length; -1 < --o; )
            Ma(J[o], "cursor", p.cursor || (!1 !== p.cursor ? Se : null));
          if ((Ae--, e)) {
            if (
              (n = e.changedTouches) &&
              (e = n[0]) !== x &&
              e.identifier !== m
            ) {
              for (
                o = n.length;
                -1 < --o && (e = n[o]).identifier !== m && e.target !== h;

              );
              if (o < 0 && !t) return;
            }
            (q.pointerEvent = l),
              (q.pointerX = e.pageX),
              (q.pointerY = e.pageY);
          }
          return (
            c && l
              ? (Ba(l), (F = !0), Qa(q, "release", "onRelease"))
              : l && !s
              ? ((F = !1),
                R && (p.snap || p.bounds) && Gh(p.inertia || p.throwProps),
                Qa(q, "release", "onRelease"),
                (_e && "touchmove" === l.type) ||
                  -1 !== l.type.indexOf("cancel") ||
                  (Qa(q, "click", "onClick"),
                  Be() - le < 300 && Qa(q, "doubleclick", "onDoubleClick"),
                  (i = l.target || h),
                  (le = Be()),
                  (a = function syntheticClick() {
                    le === I ||
                      !q.enabled() ||
                      q.isPressed ||
                      l.defaultPrevented ||
                      (i.click
                        ? i.click()
                        : de.createEvent &&
                          ((r = de.createEvent("MouseEvents")).initMouseEvent(
                            "click",
                            !0,
                            !0,
                            me,
                            1,
                            q.pointerEvent.screenX,
                            q.pointerEvent.screenY,
                            q.pointerX,
                            q.pointerY,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null
                          ),
                          i.dispatchEvent(r)));
                  }),
                  _e || l.defaultPrevented || xe.delayedCall(0.05, a)))
              : (Gh(p.inertia || p.throwProps),
                q.allowEventDefault ||
                !l ||
                (!1 === p.dragClickables && ae.call(q, l.target)) ||
                !s ||
                (B && (!O || B !== O)) ||
                !1 === l.cancelable
                  ? (F = !1)
                  : ((F = !0), Ba(l)),
                Qa(q, "release", "onRelease")),
            pe() && d.duration(q.tween.duration()),
            s && Qa(q, "dragend", "onDragEnd"),
            !0
          );
        }
        F && e && u && Ba(e);
      };
    return (
      (t = Draggable.get(h)) && t.kill(),
      (e.startDrag = function (e, t) {
        var n, o, r, i;
        Lh(e || q.pointerEvent, !0),
          t &&
            !q.hitTest(e || q.pointerEvent) &&
            ((n = Pa(e || q.pointerEvent)),
            (o = Pa(h)),
            (r = Rh({ x: n.left + n.width / 2, y: n.top + n.height / 2 })),
            (i = Rh({ x: o.left + o.width / 2, y: o.top + o.height / 2 })),
            (w -= r.x - i.x),
            (b -= r.y - i.y)),
          q.isDragging ||
            ((q.isDragging = H = !0), Qa(q, "dragstart", "onDragStart"));
      }),
      (e.drag = ue),
      (e.endDrag = function (e) {
        return fe(e || q.pointerEvent, !0);
      }),
      (e.timeSinceDrag = function () {
        return q.isDragging ? 0 : (Be() - ee) / 1e3;
      }),
      (e.timeSinceClick = function () {
        return (Be() - le) / 1e3;
      }),
      (e.hitTest = function (e, t) {
        return Draggable.hitTest(q.target, e, t);
      }),
      (e.getDirection = function (e, t) {
        var n,
          o,
          r,
          i,
          a,
          l,
          s = "velocity" === e && Le ? e : $(e) && !Q ? "element" : "start";
        return (
          "element" === s && ((a = Pa(q.target)), (l = Pa(e))),
          (n =
            "start" === s
              ? q.x - T
              : "velocity" === s
              ? Le.getVelocity(h, G)
              : a.left + a.width / 2 - (l.left + l.width / 2)),
          Q
            ? n < 0
              ? "counter-clockwise"
              : "clockwise"
            : ((t = t || 2),
              (o =
                "start" === s
                  ? q.y - D
                  : "velocity" === s
                  ? Le.getVelocity(h, K)
                  : a.top + a.height / 2 - (l.top + l.height / 2)),
              (i =
                (r = Math.abs(n / o)) < 1 / t ? "" : n < 0 ? "left" : "right"),
              r < t && ("" !== i && (i += "-"), (i += o < 0 ? "up" : "down")),
              i)
        );
      }),
      (e.applyBounds = function (e, t) {
        var n, o, r, i, a, l;
        if (e && p.bounds !== e) return (p.bounds = e), q.update(!0, t);
        if ((Ah(!0), Dh(), M && !pe())) {
          if (
            ((n = q.x),
            (o = q.y),
            E < n ? (n = E) : n < L && (n = L),
            S < o ? (o = S) : o < P && (o = P),
            (q.x !== n || q.y !== o) &&
              ((r = !0),
              (q.x = q.endX = n),
              Q ? (q.endRotation = n) : (q.y = q.endY = o),
              zh((Y = !0)),
              q.autoScroll && !q.isDragging))
          )
            for (
              La(h.parentNode),
                i = h,
                We.scrollTop =
                  null != me.pageYOffset
                    ? me.pageYOffset
                    : null != de.documentElement.scrollTop
                    ? de.documentElement.scrollTop
                    : de.body.scrollTop,
                We.scrollLeft =
                  null != me.pageXOffset
                    ? me.pageXOffset
                    : null != de.documentElement.scrollLeft
                    ? de.documentElement.scrollLeft
                    : de.body.scrollLeft;
              i && !l;

            )
              (a = (l = Qe(i.parentNode)) ? We : i.parentNode),
                U &&
                  a.scrollTop > a._gsMaxScrollY &&
                  (a.scrollTop = a._gsMaxScrollY),
                V &&
                  a.scrollLeft > a._gsMaxScrollX &&
                  (a.scrollLeft = a._gsMaxScrollX),
                (i = a);
          q.isThrowing &&
            (r || q.endX > E || q.endX < L || q.endY > S || q.endY < P) &&
            Gh(p.inertia || p.throwProps, r);
        }
        return q;
      }),
      (e.update = function (e, t, n) {
        if (t && q.isPressed) {
          var o = getGlobalMatrix(h),
            r = d.apply({ x: q.x - T, y: q.y - D }),
            i = getGlobalMatrix(h.parentNode, !0);
          i.apply({ x: o.e - r.x, y: o.f - r.y }, r),
            (q.x -= r.x - i.e),
            (q.y -= r.y - i.f),
            zh(!0),
            Ih();
        }
        var a = q.x,
          l = q.y;
        return (
          Hh(!t),
          e ? q.applyBounds() : (Y && n && zh(!0), Ah(!0)),
          t && (he(q.pointerX, q.pointerY), Y && zh(!0)),
          q.isPressed &&
            !t &&
            ((V && 0.01 < Math.abs(a - q.x)) ||
              (U && 0.01 < Math.abs(l - q.y) && !Q)) &&
            Ih(),
          q.autoScroll &&
            (La(h.parentNode, q.isDragging),
            (te = q.isDragging),
            zh(!0),
            Ia(h, Ph),
            Ha(h, Ph)),
          q
        );
      }),
      (e.enable = function (e) {
        var t,
          n,
          o,
          r = { lazy: !0 };
        if (
          (!1 !== p.cursor && (r.cursor = p.cursor || Se),
          xe.utils.checkPrefix("touchCallout") && (r.touchCallout = "none"),
          "soft" !== e)
        ) {
          for (
            ta(
              J,
              V == U
                ? "none"
                : (p.allowNativeTouchScrolling &&
                    (h.scrollHeight === h.clientHeight) ==
                      (h.scrollWidth === h.clientHeight)) ||
                  p.allowEventDefault
                ? "manipulation"
                : V
                ? "pan-y"
                : "pan-x"
            ),
              n = J.length;
            -1 < --n;

          )
            (o = J[n]),
              Pe || za(o, "mousedown", Lh),
              za(o, "touchstart", Lh),
              za(o, "click", Qh, !0),
              xe.set(o, r),
              o.getBBox &&
                o.ownerSVGElement &&
                V != U &&
                xe.set(o.ownerSVGElement, {
                  touchAction:
                    p.allowNativeTouchScrolling || p.allowEventDefault
                      ? "manipulation"
                      : V
                      ? "pan-y"
                      : "pan-x",
                }),
              p.allowContextMenu || za(o, "contextmenu", yh);
          Wa(J, !1);
        }
        return (
          Ha(h, Ph),
          (u = !0),
          Le &&
            "soft" !== e &&
            Le.track(f || h, W ? "x,y" : Q ? "rotation" : "top,left"),
          (h._gsDragID = t = "d" + Ie++),
          (ze[t] = q),
          f && (f.enable(), (f.element._gsDragID = t)),
          (p.bounds || Q) && Ih(),
          p.bounds && q.applyBounds(),
          q
        );
      }),
      (e.disable = function (e) {
        for (var t, n = q.isDragging, o = J.length; -1 < --o; )
          Ma(J[o], "cursor", null);
        if ("soft" !== e) {
          for (ta(J, null), o = J.length; -1 < --o; )
            (t = J[o]),
              Ma(t, "touchCallout", null),
              Aa(t, "mousedown", Lh),
              Aa(t, "touchstart", Lh),
              Aa(t, "click", Qh, !0),
              Aa(t, "contextmenu", yh);
          Wa(J, !0),
            v &&
              (Aa(v, "touchcancel", fe),
              Aa(v, "touchend", fe),
              Aa(v, "touchmove", ue)),
            Aa(de, "mouseup", fe),
            Aa(de, "mousemove", ue);
        }
        return (
          Ia(h, Ph),
          (u = !1),
          Le &&
            "soft" !== e &&
            (Le.untrack(f || h, W ? "x,y" : Q ? "rotation" : "top,left"),
            q.tween && q.tween.kill()),
          f && f.disable(),
          xa(zh),
          (q.isDragging = q.isPressed = y = !1),
          n && Qa(q, "dragend", "onDragEnd"),
          q
        );
      }),
      (e.enabled = function (e, t) {
        return arguments.length ? (e ? q.enable(t) : q.disable(t)) : u;
      }),
      (e.kill = function () {
        return (
          (q.isThrowing = !1),
          q.tween && q.tween.kill(),
          q.disable(),
          xe.set(J, { clearProps: "userSelect" }),
          delete ze[h._gsDragID],
          q
        );
      }),
      (e.revert = function () {
        this.kill(), this.styles && this.styles.revert();
      }),
      ~n.indexOf("scroll") &&
        ((f = e.scrollProxy =
          new $a(
            h,
            (function _extend(e, t) {
              for (var n in t) n in e || (e[n] = t[n]);
              return e;
            })(
              {
                onKill: function onKill() {
                  q.isPressed && fe(null);
                },
              },
              p
            )
          )),
        (h.style.overflowY = U && !De ? "auto" : "hidden"),
        (h.style.overflowX = V && !De ? "auto" : "hidden"),
        (h = f.content)),
      Q ? (o.rotation = 1) : (V && (o[G] = 1), U && (o[K] = 1)),
      (se.force3D = !("force3D" in p) || p.force3D),
      Xe(_assertThisInitialized(e)),
      e.enable(),
      e
    );
  }
  !(function _setDefaults(e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
  })(I.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: !1,
    isPressed: !1,
  }),
    (I.zIndex = 1e3),
    (I.version = "3.12.5"),
    Y() && xe.registerPlugin(I),
    (e.Draggable = I),
    (e.default = I);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});

/*!
 * ScrambleTextPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GSAP and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GSAP membership. See https://gsap.com/pricing
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (D, u) {
  "object" == typeof exports && "undefined" != typeof module
    ? u(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], u)
    : u(((D = D || self).window = D.window || {}));
})(this, function (D) {
  "use strict";
  var r = /(?:^\s+|\s+$)/g,
    s =
      /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function getText(D) {
    var u = D.nodeType,
      F = "";
    if (1 === u || 9 === u || 11 === u) {
      if ("string" == typeof D.textContent) return D.textContent;
      for (D = D.firstChild; D; D = D.nextSibling) F += getText(D);
    } else if (3 === u || 4 === u) return D.nodeValue;
    return F;
  }
  function emojiSafeSplit(D, u, F, C) {
    if (
      ((D += ""),
      F && (D = D.trim ? D.trim() : D.replace(r, "")),
      u && "" !== u)
    )
      return D.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(u);
    for (var E, e, t = [], i = D.length, n = 0; n < i; n++)
      ((55296 <= (e = D.charAt(n)).charCodeAt(0) && e.charCodeAt(0) <= 56319) ||
        (65024 <= D.charCodeAt(n + 1) && D.charCodeAt(n + 1) <= 65039)) &&
        ((E = ((D.substr(n, 12).split(s) || [])[1] || "").length || 2),
        (e = D.substr(n, E)),
        (n += E - (t.emoji = 1))),
        t.push(
          ">" === e
            ? "&gt;"
            : "<" === e
            ? "&lt;"
            : !C ||
              " " !== e ||
              (" " !== D.charAt(n - 1) && " " !== D.charAt(n + 1))
            ? e
            : "&nbsp;"
        );
    return t;
  }
  var a =
    ((CharSet.prototype.grow = function grow(D) {
      for (var u = 0; u < 20; u++)
        this.sets[u] += F(D - this.length, this.chars);
      this.length = D;
    }),
    CharSet);
  function CharSet(D) {
    (this.chars = emojiSafeSplit(D)), (this.sets = []), (this.length = 50);
    for (var u = 0; u < 20; u++) this.sets[u] = F(80, this.chars);
  }
  function i() {
    return (
      u ||
      ("undefined" != typeof window &&
        (u = window.gsap) &&
        u.registerPlugin &&
        u)
    );
  }
  function p() {
    o = u = i();
  }
  var u,
    o,
    B = /\s+/g,
    F = function _scrambleText(D, u) {
      for (var F = u.length, C = ""; -1 < --D; ) C += u[~~(Math.random() * F)];
      return C;
    },
    C = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    E = C.toLowerCase(),
    l = {
      upperCase: new a(C),
      lowerCase: new a(E),
      upperAndLowerCase: new a(C + E),
    },
    e = {
      version: "3.12.5",
      name: "scrambleText",
      register: function register(D) {
        (u = D), p();
      },
      init: function init(D, u, F) {
        if (
          (o || p(),
          (this.prop =
            "innerHTML" in D
              ? "innerHTML"
              : "textContent" in D
              ? "textContent"
              : 0),
          this.prop)
        ) {
          (this.target = D), "object" != typeof u && (u = { text: u });
          var C,
            E,
            e,
            t,
            i = u.text || u.value || "",
            n = !1 !== u.trim,
            r = this;
          return (
            (r.delimiter = C = u.delimiter || ""),
            (r.original = emojiSafeSplit(
              getText(D).replace(B, " ").split("&nbsp;").join(""),
              C,
              n
            )),
            ("{original}" !== i && !0 !== i && null != i) ||
              (i = r.original.join(C)),
            (r.text = emojiSafeSplit((i || "").replace(B, " "), C, n)),
            (r.hasClass = !(!u.newClass && !u.oldClass)),
            (r.newClass = u.newClass),
            (r.oldClass = u.oldClass),
            (t = "" === C),
            (r.textHasEmoji = t && !!r.text.emoji),
            (r.charsHaveEmoji = !!u.chars && !!emojiSafeSplit(u.chars).emoji),
            (r.length = t ? r.original.length : r.original.join(C).length),
            (r.lengthDif =
              (t ? r.text.length : r.text.join(C).length) - r.length),
            (r.fillChar =
              u.fillChar || (u.chars && ~u.chars.indexOf(" ")) ? "&nbsp;" : ""),
            (r.charSet = e = l[u.chars || "upperCase"] || new a(u.chars)),
            (r.speed = 0.05 / (u.speed || 1)),
            (r.prevScrambleTime = 0),
            (r.setIndex = (20 * Math.random()) | 0),
            (E = r.length + Math.max(r.lengthDif, 0)) > e.length && e.grow(E),
            (r.chars = e.sets[r.setIndex]),
            (r.revealDelay = u.revealDelay || 0),
            (r.tweenLength = !1 !== u.tweenLength),
            (r.tween = F),
            (r.rightToLeft = !!u.rightToLeft),
            r._props.push("scrambleText", "text"),
            1
          );
        }
      },
      render: function render(D, u) {
        var F,
          C,
          E,
          e,
          t,
          i,
          n,
          r,
          s,
          a,
          o,
          B = u.target,
          l = u.prop,
          A = u.text,
          h = u.delimiter,
          p = u.tween,
          f = u.prevScrambleTime,
          g = u.revealDelay,
          c = u.setIndex,
          d = u.chars,
          m = u.charSet,
          x = u.length,
          S = u.textHasEmoji,
          j = u.charsHaveEmoji,
          w = u.lengthDif,
          b = u.tweenLength,
          v = u.oldClass,
          T = u.newClass,
          _ = u.rightToLeft,
          y = u.fillChar,
          L = u.speed,
          M = u.original,
          H = u.hasClass,
          I = A.length,
          P = p._time,
          O = P - f;
        g &&
          (p._from && (P = p._dur - P),
          (D =
            0 === P
              ? 0
              : P < g
              ? 1e-6
              : P === p._dur
              ? 1
              : p._ease((P - g) / (p._dur - g)))),
          D < 0 ? (D = 0) : 1 < D && (D = 1),
          _ && (D = 1 - D),
          (F = ~~(D * I + 0.5)),
          (e = D
            ? ((L < O || O < -L) &&
                ((u.setIndex = c = (c + ((19 * Math.random()) | 0)) % 20),
                (u.chars = m.sets[c]),
                (u.prevScrambleTime += O)),
              d)
            : M.join(h)),
          (o = p._from ? D : 1 - D),
          (a = x + (b ? (p._from ? o * o * o : 1 - o * o * o) : 1) * w),
          (e = _
            ? 1 !== D || (!p._from && "isFromStart" !== p.data)
              ? ((n = A.slice(F).join(h)),
                (E = j
                  ? emojiSafeSplit(e)
                      .slice(
                        0,
                        (a - (S ? emojiSafeSplit(n) : n).length + 0.5) | 0
                      )
                      .join("")
                  : e.substr(
                      0,
                      (a - (S ? emojiSafeSplit(n) : n).length + 0.5) | 0
                    )),
                n)
              : ((E = ""), M.join(h))
            : ((E = A.slice(0, F).join(h)),
              (C = (S ? emojiSafeSplit(E) : E).length),
              j
                ? emojiSafeSplit(e)
                    .slice(C, (a + 0.5) | 0)
                    .join("")
                : e.substr(C, (a - C + 0.5) | 0))),
          (n = H
            ? ((t = (r = _ ? v : T) && 0 != F)
                ? "<span class='" + r + "'>"
                : "") +
              E +
              (t ? "</span>" : "") +
              ((i = (s = _ ? T : v) && F !== I)
                ? "<span class='" + s + "'>"
                : "") +
              h +
              e +
              (i ? "</span>" : "")
            : E + h + e),
          (B[l] =
            "&nbsp;" === y && ~n.indexOf("  ")
              ? n.split("  ").join("&nbsp;&nbsp;")
              : n);
      },
    };
  (e.emojiSafeSplit = emojiSafeSplit),
    (e.getText = getText),
    i() && u.registerPlugin(e),
    (D.ScrambleTextPlugin = e),
    (D.default = e);
  if (typeof window === "undefined" || window !== D) {
    Object.defineProperty(D, "__esModule", { value: !0 });
  } else {
    delete D.default;
  }
});

/*!
 * InertiaPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GSAP and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GSAP membership. See https://gsap.com/pricing
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (e) {
  "use strict";
  function m() {
    return i || ("undefined" != typeof window && (i = window.gsap));
  }
  function p(t) {
    return c(t).id;
  }
  function q(t) {
    return f[p("string" == typeof t ? g(t)[0] : t)];
  }
  function r(t) {
    var e,
      r = o;
    if (0.05 <= t - s)
      for (s = t; r; )
        ((e = r.g(r.t, r.p)) !== r.v1 || 0.2 < t - r.t1) &&
          ((r.v2 = r.v1), (r.v1 = e), (r.t2 = r.t1), (r.t1 = t)),
          (r = r._next);
  }
  function t() {
    (i = m()) &&
      ((g = i.utils.toArray),
      (n = i.utils.getUnit),
      (c = i.core.getCache),
      (a = i.ticker),
      (l = 1));
  }
  function u(t, e, r, i) {
    (this.t = t),
      (this.p = e),
      (this.g = t._gsap.get),
      (this.rCap = v[r || n(this.g(t, e))]),
      (this.v1 = this.v2 = 0),
      (this.t1 = this.t2 = a.time),
      i && ((this._next = i)._prev = this);
  }
  var i,
    l,
    g,
    n,
    o,
    a,
    s,
    c,
    f = {},
    v = { deg: 360, rad: 2 * Math.PI },
    d = (function () {
      function VelocityTracker(e, r) {
        l || t(),
          (this.target = g(e)[0]),
          ((f[p(this.target)] = this)._props = {}),
          r && this.add(r);
      }
      VelocityTracker.register = function register(e) {
        (i = e), t();
      };
      var e = VelocityTracker.prototype;
      return (
        (e.get = function get(t, e) {
          var r,
            i,
            n =
              this._props[t] ||
              console.warn("Not tracking " + t + " velocity.");
          return (
            (r = parseFloat(e ? n.v1 : n.g(n.t, n.p)) - parseFloat(n.v2)),
            (i = n.rCap) &&
              (r %= i) !== r % (i / 2) &&
              (r = r < 0 ? r + i : r - i),
            (function _round(t) {
              return Math.round(1e4 * t) / 1e4;
            })(r / ((e ? n.t1 : a.time) - n.t2))
          );
        }),
        (e.getAll = function getAll() {
          var t,
            e = {},
            r = this._props;
          for (t in r) e[t] = this.get(t);
          return e;
        }),
        (e.isTracking = function isTracking(t) {
          return t in this._props;
        }),
        (e.add = function add(t, e) {
          t in this._props ||
            (o || (a.add(r), (s = a.time)),
            (o = this._props[t] = new u(this.target, t, e, o)));
        }),
        (e.remove = function remove(t) {
          var e,
            i,
            n = this._props[t];
          n &&
            ((e = n._prev),
            (i = n._next),
            e && (e._next = i),
            i ? (i._prev = e) : o === n && (a.remove(r), (o = 0)),
            delete this._props[t]);
        }),
        (e.kill = function kill(t) {
          for (var e in this._props) this.remove(e);
          t || delete f[p(this.target)];
        }),
        (VelocityTracker.track = function track(e, r, i) {
          l || t();
          for (
            var n,
              o,
              a = [],
              s = g(e),
              c = r.split(","),
              u = (i || "").split(","),
              f = s.length;
            f--;

          ) {
            for (n = q(s[f]) || new VelocityTracker(s[f]), o = c.length; o--; )
              n.add(c[o], u[o] || u[0]);
            a.push(n);
          }
          return a;
        }),
        (VelocityTracker.untrack = function untrack(t, e) {
          var r = (e || "").split(",");
          g(t).forEach(function (t) {
            var e = q(t);
            e &&
              (r.length
                ? r.forEach(function (t) {
                    return e.remove(t);
                  })
                : e.kill(1));
          });
        }),
        (VelocityTracker.isTracking = function isTracking(t, e) {
          var r = q(t);
          return r && r.isTracking(e);
        }),
        (VelocityTracker.getVelocity = function getVelocity(t, e) {
          var r = q(t);
          return r && r.isTracking(e)
            ? r.get(e)
            : console.warn("Not tracking velocity of " + e);
        }),
        VelocityTracker
      );
    })();
  (d.getByTarget = q), m() && i.registerPlugin(d);
  function L() {
    return (
      h ||
      ("undefined" != typeof window &&
        (h = window.gsap) &&
        h.registerPlugin &&
        h)
    );
  }
  function N(t) {
    return "number" == typeof t;
  }
  function O(t) {
    return "object" == typeof t;
  }
  function P(t) {
    return "function" == typeof t;
  }
  function S(t) {
    return t;
  }
  function W(t) {
    return Math.round(1e4 * t) / 1e4;
  }
  function X(t, e, r) {
    for (var i in e) i in t || i === r || (t[i] = e[i]);
    return t;
  }
  function Y(t) {
    var e,
      r,
      i = {};
    for (e in t) i[e] = O((r = t[e])) && !I(r) ? Y(r) : r;
    return i;
  }
  function Z(t, e, r, i, n) {
    var o,
      a,
      s,
      c,
      u = e.length,
      f = 0,
      l = R;
    if (O(t)) {
      for (; u--; ) {
        for (s in ((o = e[u]), (a = 0), t)) a += (c = o[s] - t[s]) * c;
        a < l && ((f = u), (l = a));
      }
      if ((n || R) < R && n < Math.sqrt(l)) return t;
    } else for (; u--; ) (a = (o = e[u]) - t) < 0 && (a = -a), a < l && i <= o && o <= r && ((f = u), (l = a));
    return e[f];
  }
  function $(t, e, r, i, n, o, a) {
    if ("auto" === t.end) return t;
    var s,
      c,
      u = t.end;
    if (((r = isNaN(r) ? R : r), (i = isNaN(i) ? -R : i), O(e))) {
      if (
        ((s = e.calculated ? e : (P(u) ? u(e, a) : Z(e, u, r, i, o)) || e),
        !e.calculated)
      ) {
        for (c in s) e[c] = s[c];
        e.calculated = !0;
      }
      s = s[n];
    } else s = P(u) ? u(e, a) : I(u) ? Z(e, u, r, i, o) : parseFloat(u);
    return (
      r < s ? (s = r) : s < i && (s = i),
      { max: s, min: s, unitFactor: t.unitFactor }
    );
  }
  function _(t, e, r) {
    return isNaN(t[e]) ? r : +t[e];
  }
  function aa(t, e) {
    return (0.05 * e * t) / T;
  }
  function ba(t, e, r) {
    return Math.abs(((e - t) * T) / r / 0.05);
  }
  function da(t, e, r, i) {
    if (e.linkedProps) {
      var n,
        o,
        a,
        s,
        c,
        u,
        f = e.linkedProps.split(","),
        l = {};
      for (n = 0; n < f.length; n++)
        (a = e[(o = f[n])]) &&
          ((s = N(a.velocity)
            ? a.velocity
            : (c = c || B(t)) && c.isTracking(o)
            ? c.get(o)
            : 0),
          (u = Math.abs(s / _(a, "resistance", i))),
          (l[o] = parseFloat(r(t, o)) + aa(s, u)));
      return l;
    }
  }
  function fa() {
    (h = L()) &&
      ((y = h.parseEase),
      (F = h.utils.toArray),
      (b = h.utils.getUnit),
      (A = h.core.getCache),
      (E = h.utils.clamp),
      (C = h.core.getStyleSaver),
      (w = h.core.reverting || function () {}),
      (k = y("power3")),
      (T = k(0.05)),
      (M = h.core.PropTween),
      h.config({
        resistance: 100,
        unitFactors: {
          time: 1e3,
          totalTime: 1e3,
          progress: 1e3,
          totalProgress: 1e3,
        },
      }),
      (V = h.config()),
      h.registerPlugin(d),
      (x = 1));
  }
  var h,
    x,
    y,
    F,
    k,
    V,
    b,
    M,
    A,
    T,
    E,
    j,
    C,
    w,
    B = d.getByTarget,
    I = Array.isArray,
    R = 1e10,
    U = {
      resistance: 1,
      checkpoint: 1,
      preventOvershoot: 1,
      linkedProps: 1,
      radius: 1,
      duration: 1,
    },
    D = {
      version: "3.12.5",
      name: "inertia",
      register: function register(t) {
        (h = t), fa();
      },
      init: function init(t, e, r, i, n) {
        x || fa();
        var o = B(t);
        if ("auto" === e) {
          if (!o)
            return void console.warn(
              "No inertia tracking on " +
                t +
                ". InertiaPlugin.track(target) first."
            );
          e = o.getAll();
        }
        (this.styles = C && "object" == typeof t.style && C(t)),
          (this.target = t),
          (this.tween = r),
          (j = e);
        var a,
          s,
          c,
          u,
          f,
          l,
          p,
          g,
          v,
          d = t._gsap,
          h = d.get,
          y = e.duration,
          m = O(y),
          k = e.preventOvershoot || (m && 0 === y.overshoot),
          T = _(e, "resistance", V.resistance),
          w = N(y)
            ? y
            : (function _calculateTweenDuration(t, e, r, i, n, o) {
                if (
                  (void 0 === r && (r = 10),
                  void 0 === i && (i = 0.2),
                  void 0 === n && (n = 1),
                  void 0 === o && (o = 0),
                  (function _isString(t) {
                    return "string" == typeof t;
                  })(t) && (t = F(t)[0]),
                  !t)
                )
                  return 0;
                var a,
                  s,
                  c,
                  u,
                  f,
                  l,
                  p,
                  g,
                  v,
                  d,
                  h = 0,
                  y = R,
                  m = e.inertia || e,
                  k = A(t).get,
                  T = _(m, "resistance", V.resistance);
                for (a in ((d = da(t, m, k, T)), m))
                  U[a] ||
                    ((s = m[a]),
                    O(s) ||
                      ((g = g || B(t)) && g.isTracking(a)
                        ? (s = N(s) ? { velocity: s } : { velocity: g.get(a) })
                        : ((u = +s || 0), (c = Math.abs(u / T)))),
                    O(s) &&
                      ((u = N(s.velocity)
                        ? s.velocity
                        : (g = g || B(t)) && g.isTracking(a)
                        ? g.get(a)
                        : 0),
                      (c = E(i, r, Math.abs(u / _(s, "resistance", T)))),
                      (l = (f = parseFloat(k(t, a)) || 0) + aa(u, c)),
                      "end" in s &&
                        ((s = $(
                          s,
                          d && a in d ? d : l,
                          s.max,
                          s.min,
                          a,
                          m.radius,
                          u
                        )),
                        o &&
                          (j === e && (j = m = Y(e)),
                          (m[a] = X(s, m[a], "end")))),
                      "max" in s && l > +s.max + 1e-10
                        ? ((v = s.unitFactor || V.unitFactors[a] || 1),
                          (p =
                            (f > s.max && s.min !== s.max) ||
                            (-15 < u * v && u * v < 45)
                              ? i + 0.1 * (r - i)
                              : ba(f, s.max, u)) +
                            n <
                            y && (y = p + n))
                        : "min" in s &&
                          l < s.min - 1e-10 &&
                          ((v = s.unitFactor || V.unitFactors[a] || 1),
                          (p =
                            (f < s.min && s.min !== s.max) ||
                            (-45 < u * v && u * v < 15)
                              ? i + 0.1 * (r - i)
                              : ba(f, s.min, u)) +
                            n <
                            y && (y = p + n)),
                      h < p && (h = p)),
                    h < c && (h = c));
                return y < h && (h = y), r < h ? r : h < i ? i : h;
              })(
                t,
                e,
                (m && y.max) || 10,
                (m && y.min) || 0.2,
                m && "overshoot" in y ? +y.overshoot : k ? 0 : 1,
                !0
              );
        for (a in ((e = j), (j = 0), (v = da(t, e, h, T)), e))
          U[a] ||
            ((s = e[a]),
            P(s) && (s = s(i, t, n)),
            N(s)
              ? (f = s)
              : O(s) && !isNaN(s.velocity)
              ? (f = +s.velocity)
              : o && o.isTracking(a)
              ? (f = o.get(a))
              : console.warn(
                  "ERROR: No velocity was defined for " + t + " property: " + a
                ),
            (l = aa(f, w)),
            (g = 0),
            (c = h(t, a)),
            (u = b(c)),
            (c = parseFloat(c)),
            O(s) &&
              ((p = c + l),
              "end" in s &&
                (s = $(s, v && a in v ? v : p, s.max, s.min, a, e.radius, f)),
              "max" in s && +s.max < p
                ? k || s.preventOvershoot
                  ? (l = s.max - c)
                  : (g = s.max - c - l)
                : "min" in s &&
                  +s.min > p &&
                  (k || s.preventOvershoot
                    ? (l = s.min - c)
                    : (g = s.min - c - l))),
            this._props.push(a),
            this.styles && this.styles.save(a),
            (this._pt = new M(this._pt, t, a, c, 0, S, 0, d.set(t, a, this))),
            (this._pt.u = u || 0),
            (this._pt.c1 = l),
            (this._pt.c2 = g));
        return r.duration(w), 1;
      },
      render: function render(t, e) {
        var r = e._pt;
        if ((t = k(e.tween._time / e.tween._dur)) || !w())
          for (; r; )
            r.set(r.t, r.p, W(r.s + r.c1 * t + r.c2 * t * t) + r.u, r.d, t),
              (r = r._next);
        else e.styles.revert();
      },
    };
  "track,untrack,isTracking,getVelocity,getByTarget"
    .split(",")
    .forEach(function (t) {
      return (D[t] = d[t]);
    }),
    L() && h.registerPlugin(D),
    (e.InertiaPlugin = D),
    (e.VelocityTracker = d),
    (e.default = D);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});
