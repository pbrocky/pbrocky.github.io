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
            b = "http://www.amazon.co.jp/exec/obidos/ASIN/" + b + "/itozyun-22/ref=nosim/";
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
    for (var a = [], c = 0, d = b.length;c < d;++c) {
      a[c] = b[c];
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
        g = " " + a.className.toUpperCase() + " ", -1 !== g.indexOf(" PBLIST ") ? f(a) : -1 !== g.indexOf(" PBFONT ") && "CODE" === a.tagName.toUpperCase() && f(a);
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

/* Google Code Prettify */
!function(){var q=null;window.PR_SHOULD_USE_CONTINUATION=!0;
(function(){function S(a){function d(e){var b=e.charCodeAt(0);if(b!==92)return b;var a=e.charAt(1);return(b=r[a])?b:"0"<=a&&a<="7"?parseInt(e.substring(1),8):a==="u"||a==="x"?parseInt(e.substring(2),16):e.charCodeAt(1)}function g(e){if(e<32)return(e<16?"\\x0":"\\x")+e.toString(16);e=String.fromCharCode(e);return e==="\\"||e==="-"||e==="]"||e==="^"?"\\"+e:e}function b(e){var b=e.substring(1,e.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),e=[],a=
b[0]==="^",c=["["];a&&c.push("^");for(var a=a?1:0,f=b.length;a<f;++a){var h=b[a];if(/\\[bdsw]/i.test(h))c.push(h);else{var h=d(h),l;a+2<f&&"-"===b[a+1]?(l=d(b[a+2]),a+=2):l=h;e.push([h,l]);l<65||h>122||(l<65||h>90||e.push([Math.max(65,h)|32,Math.min(l,90)|32]),l<97||h>122||e.push([Math.max(97,h)&-33,Math.min(l,122)&-33]))}}e.sort(function(e,a){return e[0]-a[0]||a[1]-e[1]});b=[];f=[];for(a=0;a<e.length;++a)h=e[a],h[0]<=f[1]+1?f[1]=Math.max(f[1],h[1]):b.push(f=h);for(a=0;a<b.length;++a)h=b[a],c.push(g(h[0])),
h[1]>h[0]&&(h[1]+1>h[0]&&c.push("-"),c.push(g(h[1])));c.push("]");return c.join("")}function s(e){for(var a=e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),c=a.length,d=[],f=0,h=0;f<c;++f){var l=a[f];l==="("?++h:"\\"===l.charAt(0)&&(l=+l.substring(1))&&(l<=h?d[l]=-1:a[f]=g(l))}for(f=1;f<d.length;++f)-1===d[f]&&(d[f]=++x);for(h=f=0;f<c;++f)l=a[f],l==="("?(++h,d[h]||(a[f]="(?:")):"\\"===l.charAt(0)&&(l=+l.substring(1))&&l<=h&&
(a[f]="\\"+d[l]);for(f=0;f<c;++f)"^"===a[f]&&"^"!==a[f+1]&&(a[f]="");if(e.ignoreCase&&m)for(f=0;f<c;++f)l=a[f],e=l.charAt(0),l.length>=2&&e==="["?a[f]=b(l):e!=="\\"&&(a[f]=l.replace(/[A-Za-z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return a.join("")}for(var x=0,m=!1,j=!1,k=0,c=a.length;k<c;++k){var i=a[k];if(i.ignoreCase)j=!0;else if(/[a-z]/i.test(i.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){m=!0;j=!1;break}}for(var r={b:8,t:9,n:10,v:11,
f:12,r:13},n=[],k=0,c=a.length;k<c;++k){i=a[k];if(i.global||i.multiline)throw Error(""+i);n.push("(?:"+s(i)+")")}return RegExp(n.join("|"),j?"gi":"g")}function T(a,d){function g(a){var c=a.nodeType;if(c==1){if(!b.test(a.className)){for(c=a.firstChild;c;c=c.nextSibling)g(c);c=a.nodeName.toLowerCase();if("br"===c||"li"===c)s[j]="\n",m[j<<1]=x++,m[j++<<1|1]=a}}else if(c==3||c==4)c=a.nodeValue,c.length&&(c=d?c.replace(/\r\n?/g,"\n"):c.replace(/[\t\n\r ]+/g," "),s[j]=c,m[j<<1]=x,x+=c.length,m[j++<<1|1]=
a)}var b=/(?:^|\s)nocode(?:\s|$)/,s=[],x=0,m=[],j=0;g(a);return{a:s.join("").replace(/\n$/,""),d:m}}function H(a,d,g,b){d&&(a={a:d,e:a},g(a),b.push.apply(b,a.g))}function U(a){for(var d=void 0,g=a.firstChild;g;g=g.nextSibling)var b=g.nodeType,d=b===1?d?a:g:b===3?V.test(g.nodeValue)?a:d:d;return d===a?void 0:d}function C(a,d){function g(a){for(var j=a.e,k=[j,"pln"],c=0,i=a.a.match(s)||[],r={},n=0,e=i.length;n<e;++n){var z=i[n],w=r[z],t=void 0,f;if(typeof w==="string")f=!1;else{var h=b[z.charAt(0)];
if(h)t=z.match(h[1]),w=h[0];else{for(f=0;f<x;++f)if(h=d[f],t=z.match(h[1])){w=h[0];break}t||(w="pln")}if((f=w.length>=5&&"lang-"===w.substring(0,5))&&!(t&&typeof t[1]==="string"))f=!1,w="src";f||(r[z]=w)}h=c;c+=z.length;if(f){f=t[1];var l=z.indexOf(f),B=l+f.length;t[2]&&(B=z.length-t[2].length,l=B-f.length);w=w.substring(5);H(j+h,z.substring(0,l),g,k);H(j+h+l,f,I(w,f),k);H(j+h+B,z.substring(B),g,k)}else k.push(j+h,w)}a.g=k}var b={},s;(function(){for(var g=a.concat(d),j=[],k={},c=0,i=g.length;c<i;++c){var r=
g[c],n=r[3];if(n)for(var e=n.length;--e>=0;)b[n.charAt(e)]=r;r=r[1];n=""+r;k.hasOwnProperty(n)||(j.push(r),k[n]=q)}j.push(/[\S\s]/);s=S(j)})();var x=d.length;return g}function v(a){var d=[],g=[];a.tripleQuotedStrings?d.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,q,"'\""]):a.multiLineStrings?d.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,
q,"'\"`"]):d.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,q,"\"'"]);a.verbatimStrings&&g.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,q]);var b=a.hashComments;b&&(a.cStyleComments?(b>1?d.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):d.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/,q,"#"]),g.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,q])):d.push(["com",
/^#[^\n\r]*/,q,"#"]));a.cStyleComments&&(g.push(["com",/^\/\/[^\n\r]*/,q]),g.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,q]));if(b=a.regexLiterals){var s=(b=b>1?"":"\n\r")?".":"[\\S\\s]";g.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+("/(?=[^/*"+b+"])(?:[^/\\x5B\\x5C"+b+"]|\\x5C"+s+"|\\x5B(?:[^\\x5C\\x5D"+b+"]|\\x5C"+
s+")*(?:\\x5D|$))+/")+")")])}(b=a.types)&&g.push(["typ",b]);b=(""+a.keywords).replace(/^ | $/g,"");b.length&&g.push(["kwd",RegExp("^(?:"+b.replace(/[\s,]+/g,"|")+")\\b"),q]);d.push(["pln",/^\s+/,q," \r\n\t\u00a0"]);b="^.[^\\s\\w.$@'\"`/\\\\]*";a.regexLiterals&&(b+="(?!s*/)");g.push(["lit",/^@[$_a-z][\w$@]*/i,q],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,q],["pln",/^[$_a-z][\w$@]*/i,q],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,q,"0123456789"],["pln",/^\\[\S\s]?/,
q],["pun",RegExp(b),q]);return C(d,g)}function J(a,d,g){function b(a){var c=a.nodeType;if(c==1&&!x.test(a.className))if("br"===a.nodeName)s(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)b(a);else if((c==3||c==4)&&g){var d=a.nodeValue,i=d.match(m);if(i)c=d.substring(0,i.index),a.nodeValue=c,(d=d.substring(i.index+i[0].length))&&a.parentNode.insertBefore(j.createTextNode(d),a.nextSibling),s(a),c||a.parentNode.removeChild(a)}}function s(a){function b(a,c){var d=
c?a.cloneNode(!1):a,e=a.parentNode;if(e){var e=b(e,1),g=a.nextSibling;e.appendChild(d);for(var i=g;i;i=g)g=i.nextSibling,e.appendChild(i)}return d}for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),d;(d=a.parentNode)&&d.nodeType===1;)a=d;c.push(a)}for(var x=/(?:^|\s)nocode(?:\s|$)/,m=/\r\n?|\n/,j=a.ownerDocument,k=j.createElement("li");a.firstChild;)k.appendChild(a.firstChild);for(var c=[k],i=0;i<c.length;++i)b(c[i]);d===(d|0)&&c[0].setAttribute("value",d);var r=j.createElement("ol");
r.className="linenums";for(var d=Math.max(0,d-1|0)||0,i=0,n=c.length;i<n;++i)k=c[i],k.className="L"+(i+d)%10,k.firstChild||k.appendChild(j.createTextNode("\u00a0")),r.appendChild(k);a.appendChild(r)}function p(a,d){for(var g=d.length;--g>=0;){var b=d[g];F.hasOwnProperty(b)?D.console&&console.warn("cannot override language handler %s",b):F[b]=a}}function I(a,d){if(!a||!F.hasOwnProperty(a))a=/^\s*</.test(d)?"default-markup":"default-code";return F[a]}function K(a){var d=a.h;try{var g=T(a.c,a.i),b=g.a;
a.a=b;a.d=g.d;a.e=0;I(d,b)(a);var s=/\bMSIE\s(\d+)/.exec(navigator.userAgent),s=s&&+s[1]<=8,d=/\n/g,x=a.a,m=x.length,g=0,j=a.d,k=j.length,b=0,c=a.g,i=c.length,r=0;c[i]=m;var n,e;for(e=n=0;e<i;)c[e]!==c[e+2]?(c[n++]=c[e++],c[n++]=c[e++]):e+=2;i=n;for(e=n=0;e<i;){for(var p=c[e],w=c[e+1],t=e+2;t+2<=i&&c[t+1]===w;)t+=2;c[n++]=p;c[n++]=w;e=t}c.length=n;var f=a.c,h;if(f)h=f.style.display,f.style.display="none";try{for(;b<k;){var l=j[b+2]||m,B=c[r+2]||m,t=Math.min(l,B),A=j[b+1],G;if(A.nodeType!==1&&(G=x.substring(g,
t))){s&&(G=G.replace(d,"\r"));A.nodeValue=G;var L=A.ownerDocument,o=L.createElement("span");o.className=c[r+1];var v=A.parentNode;v.replaceChild(o,A);o.appendChild(A);g<l&&(j[b+1]=A=L.createTextNode(x.substring(t,l)),v.insertBefore(A,o.nextSibling))}g=t;g>=l&&(b+=2);g>=B&&(r+=2)}}finally{if(f)f.style.display=h}}catch(u){D.console&&console.log(u&&u.stack||u)}}var D=window,y=["break,continue,do,else,for,if,return,while"],E=[[y,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],M=[E,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],N=[E,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],
O=[N,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],E=[E,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],P=[y,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
Q=[y,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],W=[y,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],y=[y,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],R=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
V=/\S/,X=v({keywords:[M,O,E,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",P,Q,y],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),F={};p(X,["default-code"]);p(C([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",
/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]);p(C([["pln",/^\s+/,q," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,q,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],
["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]);p(C([],[["atv",/^[\S\s]+/]]),["uq.val"]);p(v({keywords:M,hashComments:!0,cStyleComments:!0,types:R}),["c","cc","cpp","cxx","cyc","m"]);p(v({keywords:"null,true,false"}),["json"]);p(v({keywords:O,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:R}),
["cs"]);p(v({keywords:N,cStyleComments:!0}),["java"]);p(v({keywords:y,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]);p(v({keywords:P,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]);p(v({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]);p(v({keywords:Q,
hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]);p(v({keywords:E,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]);p(v({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);p(v({keywords:W,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]);
p(C([],[["str",/^[\S\s]+/]]),["regex"]);var Y=D.PR={createSimpleLexer:C,registerLangHandler:p,sourceDecorator:v,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:D.prettyPrintOne=function(a,d,g){var b=document.createElement("div");b.innerHTML="<pre>"+a+"</pre>";b=b.firstChild;g&&J(b,g,!0);K({h:d,j:g,c:b,i:1});
return b.innerHTML},prettyPrint:D.prettyPrint=function(a,d){function g(){for(var b=D.PR_SHOULD_USE_CONTINUATION?c.now()+250:Infinity;i<p.length&&c.now()<b;i++){for(var d=p[i],j=h,k=d;k=k.previousSibling;){var m=k.nodeType,o=(m===7||m===8)&&k.nodeValue;if(o?!/^\??prettify\b/.test(o):m!==3||/\S/.test(k.nodeValue))break;if(o){j={};o.replace(/\b(\w+)=([\w%+\-.:]+)/g,function(a,b,c){j[b]=c});break}}k=d.className;if((j!==h||e.test(k))&&!v.test(k)){m=!1;for(o=d.parentNode;o;o=o.parentNode)if(f.test(o.tagName)&&
o.className&&e.test(o.className)){m=!0;break}if(!m){d.className+=" prettyprinted";m=j.lang;if(!m){var m=k.match(n),y;if(!m&&(y=U(d))&&t.test(y.tagName))m=y.className.match(n);m&&(m=m[1])}if(w.test(d.tagName))o=1;else var o=d.currentStyle,u=s.defaultView,o=(o=o?o.whiteSpace:u&&u.getComputedStyle?u.getComputedStyle(d,q).getPropertyValue("white-space"):0)&&"pre"===o.substring(0,3);u=j.linenums;if(!(u=u==="true"||+u))u=(u=k.match(/\blinenums\b(?::(\d+))?/))?u[1]&&u[1].length?+u[1]:!0:!1;u&&J(d,u,o);r=
{h:m,c:d,j:u,i:o};K(r)}}}i<p.length?setTimeout(g,250):"function"===typeof a&&a()}for(var b=d||document.body,s=b.ownerDocument||document,b=[b.getElementsByTagName("pre"),b.getElementsByTagName("code"),b.getElementsByTagName("xmp")],p=[],m=0;m<b.length;++m)for(var j=0,k=b[m].length;j<k;++j)p.push(b[m][j]);var b=q,c=Date;c.now||(c={now:function(){return+new Date}});var i=0,r,n=/\blang(?:uage)?-([\w.]+)(?!\S)/,e=/\bprettyprint\b/,v=/\bprettyprinted\b/,w=/pre|xmp/i,t=/^code$/i,f=/^(?:pre|code|xmp)$/i,
h={};g()}};typeof define==="function"&&define.amd&&define("google-code-prettify",[],function(){return Y})})();}()

PR.registerLangHandler(PR.createSimpleLexer([["pln",/^[\t\n\f\r ]+/,null," \t\r\n\u000c"]],[["str",/^"(?:[^\n\f\r"\\]|\\(?:\r\n?|\n|\f)|\\[\S\s])*"/,null],["str",/^'(?:[^\n\f\r'\\]|\\(?:\r\n?|\n|\f)|\\[\S\s])*'/,null],["lang-css-str",/^url\(([^"')]+)\)/i],["kwd",/^(?:url|rgb|!important|@import|@page|@media|@charset|inherit)(?=[^\w-]|$)/i,null],["lang-css-kw",/^(-?(?:[_a-z]|\\[\da-f]+ ?)(?:[\w-]|\\\\[\da-f]+ ?)*)\s*:/i],["com",/^\/\*[^*]*\*+(?:[^*/][^*]*\*+)*\//],
["com",/^(?:<\!--|--\>)/],["lit",/^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],["lit",/^#[\da-f]{3,6}\b/i],["pln",/^-?(?:[_a-z]|\\[\da-f]+ ?)(?:[\w-]|\\\\[\da-f]+ ?)*/i],["pun",/^[^\s\w"']+/]]),["css"]);PR.registerLangHandler(PR.createSimpleLexer([],[["kwd",/^-?(?:[_a-z]|\\[\da-f]+ ?)(?:[\w-]|\\\\[\da-f]+ ?)*/i]]),["css-kw"]);PR.registerLangHandler(PR.createSimpleLexer([],[["str",/^[^"')]+/]]),["css-str"]);

(function(v){
( !v || 5.5 <= v || 5 < document.documentMode ) && prettyPrint();
})(eval( '/*@cc_on@_jscript_version+@*/0' ));

