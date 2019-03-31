(function(b, h, c, d) {
  function a(a) {
    for (var h = n.length, d = this, b, g, c, f, e;h;) {
      if (g = n[--h], g.b === this) {
        img = g.j;
        if (g.c) {
          img.style.width = g.s, img.setAttribute("src", g.o), this.className = g.g, g.caption && (g.caption.style.cssText = g.i);
        } else {
          if (b = g.h) {
            for (delete g.h;d = d.parentNode || d.parentElement;) {
              if (c = d.tagName.toUpperCase(), 0 <= (" " + d.className + " ").indexOf(" caption ")) {
                g.caption = d, g.i = d.style.cssText;
              } else {
                if ("DIV" === c || "P" === c || "BLOCKQUOT" === c) {
                  break;
                }
              }
            }
            c = d.offsetWidth;
            1600 < c && (c = 1600);
            if (0 < b.indexOf(".bp.blogspot.com/")) {
              b = b.split("/");
              l = b.length;
              if (f = b[l - 2]) {
                (e = parseFloat(f.substr(1))) && f === "s" + e ? b[l - 2] = "w" + c : b.splice(l - 1, 0, "w" + c);
              }
              b = b.join("/");
            }
            g.l = b;
          }
          g.g = c = this.getAttribute("className") || "";
          this.className = (c ? c + " " : "") + "jL";
          img.style.width = "";
          img.setAttribute("src", g.l);
          g.caption && (g.caption.style.cssText = "float:none;margin-right:0");
        }
        g.c = !g.c;
      }
    }
    if (a) {
      return a.preventDefault(), a.stopPropagation(), k = !0, !1;
    }
    event.cancelBubble = !0;
    return event.returnValue = !1;
  }
  var p = b.onload, e = b.onunload, q = !!h.getElementsByTagName, f = h.documentElement || q ? h.getElementsByTagName("html")[0] : h.all.a("HTML")[0], n = [], k;
  onload = function(b) {
    var f = q ? h.getElementById(d) : h.all[d], f = q ? f.getElementsByTagName("A") : f.all.a("A"), e = -1, r, g, k, t;
    p && p(b);
    p = null;
    onload === arguments.callee && (onload = new c, onload = null);
    for (;r = f[++e];) {
      if (k = (g = 1 === r.children.length && r.children[0]) && g.tagName, "IMG" === k || "img" === k) {
        if (k = r.getAttribute("href"), t = k.split("?").join("").split("#").join("").split("."), t = (t[t.length - 1] || "").toLowerCase(), 0 <= "jpg png gif bmp".indexOf(t.substr(0, 3)) || 0 <= "jpeg webp".indexOf(t.substr(0, 4))) {
          r.onclick = a, n.push({b:r, o:g.src, s:g.style.width = g.offsetWidth + "px", h:k, j:g, c:!1, g:""});
        }
      }
    }
  };
  f.onclick = function(b) {
    if (k && b) {
      return k = !1, b.preventDefault(), !1;
    }
  };
  onunload = function() {
    var b = -1, a = new c, d;
    e && e();
    tempUnOnload = null;
    onunload === arguments.callee && (onunload = a, onunload = null);
    for (;d = n[++b];) {
      d.b.onclick = a, d.b.onclick = null;
    }
    f.onclick = a;
  };
})(window, document, Function, "jM");
(function(b, h, c, d, a, p, e) {
  function q() {
    for (var b = arguments, a = 0, d = b.length;a < d;++a) {
      if (isFinite(b[a])) {
        return b[a];
      }
    }
    return 0;
  }
  function f() {
    var a = B + ":translate" + (D ? "3D(0," : "(0,"), d = D ? "px,0)" : "px)", h = q(b.innerHeight, z.offsetHeight), u = w, c = u.offsetHeight, x = A.offsetHeight, f = 0, e = "";
    E = 0;
    if (x < c && v.offsetTop === u.offsetTop) {
      for (;u;) {
        f += u.offsetTop || 0, u = u.offsetParent || u.parentElement;
      }
      u = q(b.pageYOffset, b.scrollTop, z.scrollTop, t.scrollTop);
      x < h ? u <= f || u <= f + x - h || (e = u <= f + c - x ? B ? a + (u - f) + d : g ? "position:fixed;width:" + v.offsetWidth + "px;top:0" : "position:absolute;left:0;width:100%;top:" + (u - f) + "px" : B ? a + (c - x) + d : g ? "position:fixed;width:" + v.offsetWidth + "px;bottom:" + (h - (f + c - u)) + "px" : "position:absolute;left:0;width:100%;top:" + (c - x) + "px") : u <= f || u <= f + (x - h) || (e = u + h <= f + c ? B ? a + (u - f - (x - h)) + d : g ? "position:fixed;width:" + v.offsetWidth + 
      "px;bottom:0" : "position:absolute;left:0;width:100%;top:" + (u - f - (x - h)) + "px" : B ? a + (c - x) + d : g ? "position:fixed;width:" + v.offsetWidth + "px;bottom:" + (h - (f + c - u)) + "px" : "position:absolute;left:0;width:100%;top:" + (c - x) + "px");
    }
    B && e && (e += ";-webkit-overflow-scrolling:touch;");
    A.style.cssText = e;
  }
  var n = function() {
    for (var a = 3, b = h.createElement("div"), d = b.getElementsByTagName("i");b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", d[0];) {
    }
    return 4 < a ? a : void 0;
  }();
  5 === n && (0).toFixed && (n = 5.5);
  var k = b.onload, m = b.onscroll, y = b.onresize, C = b.onunload, r = new Function, g = function() {
    var a = c.userAgent, f = c.platform, D = d(a.split("AppleWebKit/")[1]), u = d(a.split("Fennec/")[1]), g = d(a.split("Opera Mobi/")[1]), x = eval("/*@cc_on@_jscript_version+@*/0") && Math.min(n, h.documentMode || n);
    return (-1 < f.indexOf("iPhone") || -1 < f.indexOf("iPad") || -1 < f.indexOf("iPod")) && 534 > D || b.m && "[object OperaMini]" === {}.toString.call(b.m) || 7458 > g || -1 < a.indexOf("Android") && 533 > D || 6 > u || b.palmGetResource && 534 > D || -1 < a.indexOf("MeeGo") && -1 < a.indexOf("NokiaBrowser/8.5.0") || 0 < x && 7 > x ? !1 : !0;
  }(), z, t, v, w, A, E, B, D;
  onload = function(d) {
    var c;
    t = h.body;
    c = t.style;
    k && k(d);
    k = null;
    onload === arguments.callee && (onload = r, onload = null);
    z = "CSS1Compat" !== h.compatMode ? t : h.documentElement || t;
    v = b[p] || h[p];
    w = b[a] || h[a];
    A = h.createElement("div");
    v.insertBefore(A, v.firstChild);
    for (A.id = e;1 < v.childNodes.length;) {
      A.appendChild(v.childNodes[1]);
    }
    B = void 0 !== c.transform ? "transform" : void 0 !== c["-o-transform"] ? "-o-transform" : void 0 !== c["-ms-transform"] ? "-ms-transform" : void 0 !== c["-moz-transform"] ? "-moz-transform" : void 0 !== c["-webkit-transform"] ? "-webkit-transform" : "";
    D = void 0 !== c.perspective || void 0 !== c["-moz-perspective"] || void 0 !== c["-webkit-perspective"];
    B || g || (v.style.position = w.style.position = "relative");
    f();
  };
  onscroll = function(a) {
    m && m(a);
    z && f();
  };
  onresize = function(a) {
    y && y(a);
    E && clearTimeout(E);
    E = setTimeout(f, 100);
  };
  onunload = function(a) {
    C && C(a);
    onload = onscroll = onresize = onunload = r;
    onload = onscroll = onresize = onunload = null;
  };
})(window, document, navigator, parseFloat, "jM", "jS", "jF");
5 === document.documentMode && function(b, h) {
  var c = b.onload, d = b.onload = function(a) {
    var b;
    c && c(a);
    c = null;
    onload === d && (onload = new Function, onload = null);
    a = h.getElementsByTagName("script");
    b = a[a.length - 1].src.split("/");
    --b.length;
    a = h.createElement("link");
    h.getElementsByTagName("head")[0].appendChild(a);
    a.href = b.join("/") + "/ie5win.css";
    a.rel = "stylesheet";
    a.type = "text/css";
  };
}(window, document);
(function(b, h, c) {
  var d = b.onload, a = b.onload = function(p) {
    function e(a, b, d, c) {
      var f = c ? "div" : "cite";
      a: {
        if (0 === b.indexOf("urn:isbn:")) {
          b = b.substr(9).toUpperCase().split("-").join("");
          if (13 === b.length) {
            b = b.toString().slice(3, -1);
            for (var e = 0, k = 0;9 > k;k++) {
              e += Number(b.charAt(k)) * (10 - k);
            }
            e = (11 - e % 11) % 11;
            e = 10 === e ? "X" : e.toString();
            b += e;
          }
          if (10 === b.length) {
            b = "http://www.amazon.co.jp/exec/obidos/ASIN/" + b;
            break a;
          }
        }
      }
      b = "<a" + (0 === b.indexOf("http") ? ' target="_blank" rel="nofollow"' : "") + ' hidefocus="true" href="' + b + '">' + a + "</a>";
      q ? (elmCite = h.createElement(f), c ? n.insertBefore(elmCite, n.firstChild) : n.appendChild(elmCite), elmCite.innerHTML = b, d && (elmCite.className = d)) : n.u(c ? "AfterStart" : "BeforeEnd", "<" + f + (d ? ' class="' + d + '">' : ">") + b + "</" + f + ">");
    }
    var q = !!h.getElementsByTagName, f = q ? h.getElementById(c) : h.all[c], f = q ? f.getElementsByTagName("blockquote") : f.all.a("blockquote"), n, k = -1, m;
    d && d(p);
    d = null;
    onload === a && (onload = new Function, onload = null);
    for (;n = f[++k];) {
      p = n.getAttribute("title"), m = n.getAttribute("cite"), p && m ? (n.removeAttribute("title"), e(p, m, "js-bqLink", !0)) : m && (n.removeAttribute("cite"), e(b.decodeURI ? b.decodeURI(m) : m, m, "js-bqCite"));
    }
  };
})(window, document, "jM");
(function(b, h, c) {
  h = b.onload;
  c = b.onload = function(d, a, p, e) {
    h && h(d);
    h = null;
    b.onload === c && (onload = new Function, onload = null);
    a = document;
    p = a.body;
    e = p.className || "";
    d = a.createElement("div");
    p.appendChild(d);
    d.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow();";
    p.className += (e ? " " : e) + (1 < d.offsetHeight ? "pbLCD-AX" : "");
    d.style.cssText = "";
    p.removeChild(d);
  };
})(window);
(function(b, h, c) {
  var d = b.onload, a = b.onload = function(q) {
    var f = h.getElementsByTagName ? h.getElementsByTagName("SAMP") : h.all.a("SAMP"), n = eval("/*@cc_on@_jscript_version+@*/0"), n = n && (5.8 >= n || 9 > h.documentMode), k = h.body, m, y, C, r, g, z, t, v, w;
    d && d(q);
    d = null;
    onload === a && (onload = new Function, onload = null);
    a = null;
    if (f.length) {
      m = h.createElement("a");
      k.appendChild(m);
      m.setAttribute("id", c);
      m.setAttribute("title", c);
      q = m.offsetWidth;
      y = m.style;
      y = void 0 !== y.opacity || void 0 !== y["-moz-opacity"] || void 0 !== y["-khtml-opacity"];
      k.removeChild(m);
      for (m = -1;k = f[++m];) {
        if (!(0 > k.parentNode.className.indexOf("pbLCD"))) {
          if (!q) {
            C = k.children;
            for (g = z = 0;r = C[g];++g) {
              t = r.className, v = (v = t.split("pbCsr")[1]) && v.split(" ")[0], w = (w = t.split("pbChr")[1]) && w.split(" ")[0], t = (t = t.split("pbAlp")[1]) && t.split(" ")[0], "A" === r.tagName.toUpperCase() && (z = r.outerHTML ? 0 < r.outerHTML.indexOf("dwtip") : r.hasAttribute ? r.hasAttribute("dwtip") : !1, children = r.children, child0 = children.length && children[0] || !1, child1 = children.length && children[1], w = '<div class="pbTip">' + r.getAttribute("title") + "</div>" + (children.length ? 
              "" : '<b class="pbChr' + w + (t ? " op" + t : "") + '">' + r.innerHTML + "</b>") + '<div class="pbTail"></div>', t = "pbCsr" + v + " " + (z ? "pbTipBtm" : "pbTipTop"), r.className = t, r.innerHTML = w, child0 && r.firstChild.appendChild(child0), child1 && r.firstChild.appendChild(child1), z = 1);
            }
            z && (k.className += (k.className ? " " : "") + " pbLCD-cntfix");
          }
          if (!y && !n && (b.PB100.f(".pbLCD b;z-index:1;.pbLCD .pbChrCS;z-index:0;.pbChrCS;background-image:url(base:pbLCD/x3_csr.gif) !important;.pbChrCS;background-position:2px 20px;.pbOP1;background-image:url(base:pbLCD/x3_a10.png);.pbOP2;background-image:url(base:pbLCD/x3_a20.png);.pbOP3;background-image:url(base:pbLCD/x3_a30.png);.pbOP4;background-image:url(base:pbLCD/x3_a40.png);.pbOP5;background-image:url(base:pbLCD/x3_a50.png);.pbOP6;background-image:url(base:pbLCD/x3_a60.png);.pbOP7;background-image:url(base:pbLCD/x3_a70.png);.pbOP8;background-image:url(base:pbLCD/x3_a80.png);.pbOP9;background-image:url(base:pbLCD/x3_a90.png);.pbChrCS.pbOP1;background-position:-180px 18px;.pbChrCS.pbOP2;background-position:-160px 18px;.pbChrCS.pbOP3;background-position:-140px 18px;.pbChrCS.pbOP4;background-position:-120px 18px;.pbChrCS.pbOP5;background-position:-100px 18px;.pbChrCS.pbOP6;background-position:-80px 18px;.pbChrCS.pbOP7;background-position:-60px 18px;.pbChrCS.pbOP8;background-position:-40px 18px;.pbChrCS.pbOP9;background-position:-20px 18px".split(";")), 
          q)) {
            return;
          }
        }
      }
      p.length && setInterval(e, 500);
    }
  }, p = [], e = !1;
})(window, document, "pbLCD-test");
(function(b) {
  b.pop || (b.pop = function() {
    var b = this[this.length - 1];
    --this.length;
    return b;
  });
  b.push || (b.push = function() {
    for (var b = arguments, c = 0, d = b.length, a = this.length;c < d;++c) {
      this[a + c] = b[c];
    }
    return this.length;
  });
  b.shift || (b.shift = function() {
    for (var b = this[0], c = 1, d = this.length;c < d;++c) {
      this[c - 1] = this[c];
    }
    --this.length;
    return b;
  });
  b.unshift || (b.unshift = function() {
    for (var b = arguments, c = b.length, d = this.length += c - 1, a = d;a >= c;--a) {
      this[a] = this[a - c];
    }
    for (a = 0;a < c;++a) {
      this[a] = b[a];
    }
    return d;
  });
  b.splice || (b.splice = function(b, c) {
    var d = arguments, a = d.length - 2 - c, p = this.slice(b, b + c), e, q;
    if (0 < a) {
      for (e = this.length - 1, q = b + c;e >= q;--e) {
        this[e + a] = this[e];
      }
    } else {
      if (0 > a) {
        e = b + c;
        for (q = this.length;e < q;++e) {
          this[e + a] = this[e];
        }
        this.length += a;
      }
    }
    e = 2;
    for (q = d.length;e < q;++e) {
      this[e - 2 + b] = d[e];
    }
    return p;
  });
  b.indexOf || (b.indexOf = function(b, c) {
    var d = this.length >>> 0, a;
    if (0 === d || c && (a = c || 0, a = -Infinity === a ? 0 : (0 > a ? -a : a) | 0, d <= a)) {
      return -1;
    }
    for (a = 0 <= a ? a : 0 < d + a ? d + a : 0;a < d;++a) {
      if (this[a] === b) {
        return a;
      }
    }
    return -1;
  });
})(Array.prototype);
(function(b) {
  var h = window.PB100 = {CDN_PATH:""};
  h.f = function(c) {
    var d = !!b.getElementsByTagName, a = b.styleSheets, p = "", e = -1, q, f, n = (d ? b.getElementsByTagName("HEAD") : b.all.a("HEAD"))[0], k = "";
    if (a) {
      for (var m = function(b) {
        for (var a = b.rules || b.cssRules, d = -1, c;c = a[++d];) {
          if (0 <= (c.selectorText || "").toLowerCase().indexOf(".pblcd")) {
            return b;
          }
          if (c = c.sheet || c.styleSheet) {
            if (c = m(c)) {
              return c;
            }
          }
        }
        if (b.imports.length) {
          for (d = -1;c = b.imports[++d];) {
            if (c = m(c)) {
              return c;
            }
          }
        }
      };(q = a[++e]) && !(f = m(q));) {
      }
    }
    if (!f || f.readOnly) {
      f ? (href = f.href.split("/"), href.pop(), p = href.join("/") + "/") : p = h.CDN_PATH, d ? (f = b.createElement("style"), n.appendChild(f), f.setAttribute("type", "text/css"), f = f.sheet) : (n.insertAdjacentHTML("BeforeEnd", "<style type=text/css></style>"), f = a[a.length]);
    }
    for (;c.length;) {
      d = c.shift(), a = c.shift().split("base:").join(p), f ? f.addRule ? f.addRule(d, a) : f.insertRule && f.insertRule(d + "{" + a + "}", f.cssRules.length) : k += d + "{" + a + "}";
    }
    k && (f = b.createElement("div"), f.innerHTML = '_<style type="text/css">' + k + "</style>", n.appendChild(f.lastChild));
  };
})(document);
(function(b, h, c) {
  function d(b) {
    return String.fromCharCode(b);
  }
  function a(b, a) {
    for (var c = "";a;) {
      a & 1 && (c += b), a >>= 1, b += b;
    }
    return c;
  }
  function p(b) {
    for (var a = [], c = b.length;c;) {
      a[--c] = b[c];
    }
    return a;
  }
  function e(a) {
    var d = p(h.getElementsByTagName ? h.all || h.getElementsByTagName("*") : h.all), g = h.body, k = eval("/*@cc_on@_jscript_version+@*/0"), u = k && (5.8 >= k || 9 > h.documentMode), k = -1;
    w && w(a);
    w = null;
    onload === e && (onload = new Function, onload = null);
    e = null;
    (E = q()) ? B = g["-webkit-font-feature-settings"] !== c || g["-moz-font-feature-settings"] !== c || g["-ms-font-feature-settings"] !== c || g["-o-font-feature-settings"] !== c || g["font-feature-settings"] !== c : (g.className += (g.className ? " " : "") + " pbList-noWebFont", a = u ? "x3wie.png" : "x3w.png", b.PB100.f([".pbList b", "background-image:url(base:pbList/" + a + ")", ".pbFont b", "background-image:url(base:pbList/" + a + ")"]));
    q = null;
    if (E) {
      for (;a = d[++k];) {
        g = " " + a.className + " ", -1 !== g.indexOf(" pbList ") ? f(a) : -1 !== g.indexOf(" pbFont ") && "CODE" === a.tagName.toUpperCase() && f(a);
      }
      for (;A.length;) {
        f(A.shift());
      }
    }
  }
  function q() {
    var a = function() {
      for (var a = 3, b = h.createElement("div"), c = b.getElementsByTagName("i");b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", c[0];) {
      }
      return 4 < a ? a : void 0;
    }();
    5 === a && (0).toFixed && (a = 5.5);
    var d = a, f;
    if (function(a) {
      var f = a.userAgent, h = a.platform;
      a = a.appVersion;
      var e;
      b.opera || 0 < f.indexOf("Gecko/") && f.split("rv:")[1] || !(f.indexOf("Linux") + 1 || f.indexOf("Android") + 1) ? h = void 0 : ((e = f.split("Android ")[1]) || (e = h.split("Android ")[1]) ? (e = e.split("."), e = parseFloat(e[0]) || 0) : "Linux armv7l" !== h && "Linux i686" !== h || b.ontouchstart === c || !(e = parseFloat(f.split("WebKit/")[1])) || b.Int8Array || (e = 529 > e ? 1.5 : 531 > e ? 2 : 534 > e ? b.HTMLAudioElement ? 2.3 : 2.2 : 0), h = e && 2.1 >= e);
      e = b.palmGetResource;
      var g = 0 < f.indexOf("UCBrowser/");
      a = (0 < f.indexOf("Windows Phone") || 0 < a.indexOf("ZuneWP")) && 5.7 <= d && 10 > d;
      return 0 < f.indexOf("NokiaBrowser/") || h || e || g || a;
    }(navigator)) {
      return !1;
    }
    if (d && 5.5 >= d) {
      return !0;
    }
    a = h.createElement("div");
    a.innerHTML = 'a<style type="text/css">@font-face {font-family:"font";src:url("https://")}</style>';
    h.getElementsByTagName("head")[0].appendChild(a = a.lastChild);
    a = (a = a.sheet || a.styleSheet) ? (f = a.cssRules) && (f = f[0]) ? f.cssText : a.cssText || "" : "";
    return 0 < a.indexOf("src") && 0 === a.indexOf("@font-face");
  }
  function f(a) {
    function b(a) {
      a = a.childNodes;
      for (var c = -1, e;e = a[++c];) {
        switch(e.nodeType) {
          case 1:
            b(e);
            break;
          case 3:
            e.data && e.data.split(d(13) + d(10)).join("").split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("") && f.push(e);
        }
      }
    }
    var c, f = [];
    if (e) {
      A.push(a);
    } else {
      for ((c = A.indexOf(a)) && 0 <= c && A.splice(c, 1), b(a);a = f.shift();) {
        c = a.data, B || (c = c.split(g).join(C)), n(c.split("\r").join("").split("&yen;").join(r).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(y).split("&amp;").join("&"), a);
      }
    }
  }
  function n(b, c) {
    var d = " area line str cmd fnc syb".split(" "), f = [], e, g, n, m;
    e = b.indexOf("P");
    if (g = -1 !== e) {
      e = b.substr(e), g = parseFloat(e.charAt(1)), g = "P" === e.charAt(0) && 0 <= g && 9 >= g;
    }
    if (g) {
      e = a("+", b.length);
    } else {
      a: {
        e = parseFloat(b);
        if (0 < e && e === e | 0 && (e += "", e = b.indexOf(e) + e.length, e <= b.length)) {
          break a;
        }
        e = 0;
      }
      (g = e) ? (e = a("|", g), --g) : (e = "", g = -1);
      for (;n = b.charAt(++g);) {
        n === y || m ? (e += "~", n === y && (m = !m)) : e += n;
      }
      e = k(e, v, "^");
      e = k(e, z, "{");
      e = k(e, t, "}");
    }
    for (g = 0;g < b.length;++g) {
      n = b.charAt(g), m = e.charAt(g), m = "+|~{}^".indexOf(m) + 1, "\n" !== n ? (m = d[m] && " " !== n ? ' class="pbList-' + d[m] + '"' : "", f[f.length] = "<font" + m + ">" + n + "</font>") : f[f.length] = "\n";
    }
    if (1 === c.nodeType) {
      c.innerHTML = f.join("");
    } else {
      d = h.createElement("font");
      for (d.innerHTML = f.join("");d.firstChild;) {
        c.parentNode.insertBefore(d.firstChild, c);
      }
      c.parentNode.removeChild(c);
    }
  }
  function k(b, c, d) {
    for (var e, f = -1, g, h;e = c[++f];) {
      for (;0 <= (g = b.indexOf(e));) {
        h = e.length, b = b.substr(0, g) + a(d, h) + b.substr(g + h);
      }
    }
    return b;
  }
  var m = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", d(960), ")", "(", d(234), d(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", 
  ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", d(9824), "\u2190", d(9829), d(9830), d(9827), d(956), "\u03a9", "\u2193", "\u2192", "%", d(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", d(9619)], y = m[7], C = m[30], r = m[113], g = d(8337) + d(8331), z = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), 
  t = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), v = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + C + m[31]).split(""), w = b.onload, A = [], E, B;
  b.onload = e;
  b.PB100.prettify = f;
})(window, document);

