chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
      if (request.greeting)
          sendResponse({ farewell: "content goodbye" });
      aXeThis(false);
  });


/*! jQuery v1.12.3 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = a.document, e = c.slice, f = c.concat, g = c.push, h = c.indexOf, i = {}, j = i.toString, k = i.hasOwnProperty, l = {}, m = "1.12.3", n = function (a, b) { return new n.fn.init(a, b) }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) { return b.toUpperCase() }; n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function () { return e.call(this) }, get: function (a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this) }, pushStack: function (a) { var b = n.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b }, each: function (a) { return n.each(this, a) }, map: function (a) { return this.pushStack(n.map(this, function (b, c) { return a.call(b, c, b) })) }, slice: function () { return this.pushStack(e.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (a) { var b = this.length, c = +a + (0 > a ? b : 0); return this.pushStack(c >= 0 && b > c ? [this[c]] : []) }, end: function () { return this.prevObject || this.constructor() }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () { var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--) ; i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c)); return g }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) { throw new Error(a) }, noop: function () { }, isFunction: function (a) { return "function" === n.type(a) }, isArray: Array.isArray || function (a) { return "array" === n.type(a) }, isWindow: function (a) { return null != a && a == a.window }, isNumeric: function (a) { var b = a && a.toString(); return !n.isArray(a) && b - parseFloat(b) + 1 >= 0 }, isEmptyObject: function (a) { var b; for (b in a) return !1; return !0 }, isPlainObject: function (a) { var b; if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1; try { if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 } if (!l.ownFirst) for (b in a) return k.call(a, b); for (b in a); return void 0 === b || k.call(a, b) }, type: function (a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a }, globalEval: function (b) { b && n.trim(b) && (a.execScript || function (b) { a.eval.call(a, b) })(b) }, camelCase: function (a) { return a.replace(p, "ms-").replace(q, r) }, nodeName: function (a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function (a, b) { var c, d = 0; if (s(a)) { for (c = a.length; c > d; d++) if (b.call(a[d], d, a[d]) === !1) break } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break; return a }, trim: function (a) { return null == a ? "" : (a + "").replace(o, "") }, makeArray: function (a, b) { var c = b || []; return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c }, inArray: function (a, b, c) { var d; if (b) { if (h) return h.call(b, a, c); for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c } return -1 }, merge: function (a, b) { var c = +b.length, d = 0, e = a.length; while (c > d) a[e++] = b[d++]; if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++]; return a.length = e, a }, grep: function (a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function (a, b, c) { var d, e, g = 0, h = []; if (s(a)) for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e); else for (g in a) e = b(a[g], g, c), null != e && h.push(e); return f.apply([], h) }, guid: 1, proxy: function (a, b) { var c, d, f; return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function () { return a.apply(b || this, c.concat(e.call(arguments))) }, d.guid = a.guid = a.guid || n.guid++, d) : void 0 }, now: function () { return +new Date }, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) { i["[object " + b + "]"] = b.toLowerCase() }); function s(a) { var b = !!a && "length" in a && a.length, c = n.type(a); return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a } var t = function (a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ga(), z = ga(), A = ga(), B = function (a, b) { return a === b && (l = !0), 0 }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function (a, b) { for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c; return -1 }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]", O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", P = new RegExp(L + "+", "g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), U = new RegExp(O), V = new RegExp("^" + M + "$"), W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") }, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g, ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), ca = function (a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) }, da = function () { m() }; try { H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType } catch (ea) { H = { apply: E.length ? function (a, b) { G.apply(a, I.call(b)) } : function (a, b) { var c = a.length, d = 0; while (a[c++] = b[d++]); a.length = c - 1 } } } function fa(a, b, d, e) { var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, x = b ? b.nodeType : 9; if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d; if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) { if (11 !== x && (o = $.exec(a))) if (f = o[1]) { if (9 === x) { if (!(j = b.getElementById(f))) return d; if (j.id === f) return d.push(j), d } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d } else { if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d; if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) { if (1 !== x) w = b, s = a; else if ("object" !== b.nodeName.toLowerCase()) { (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']"; while (h--) r[h] = l + " " + qa(r[h]); s = r.join(","), w = _.test(a) && oa(b.parentNode) || b } if (s) try { return H.apply(d, w.querySelectorAll(s)), d } catch (y) { } finally { k === u && b.removeAttribute("id") } } } return i(a.replace(Q, "$1"), b, d, e) } function ga() { var a = []; function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b } function ha(a) { return a[u] = !0, a } function ia(a) { var b = n.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } } function ja(a, b) { var c = a.split("|"), e = c.length; while (e--) d.attrHandle[c[e]] = b } function ka(a, b) { var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C); if (d) return d; if (c) while (c = c.nextSibling) if (c === b) return -1; return a ? 1 : -1 } function la(a) { return function (b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } } function ma(a) { return function (b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } } function na(a) { return ha(function (b) { return b = +b, ha(function (c, d) { var e, f = a([], c.length, b), g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) } function oa(a) { return a && "undefined" != typeof a.getElementsByTagName && a } c = fa.support = {}, f = fa.isXML = function (a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, m = fa.setDocument = function (a) { var b, e, g = a ? a.ownerDocument || a : v; return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ia(function (a) { return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) { return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length }), c.getById ? (d.find.ID = function (a, b) { if ("undefined" != typeof b.getElementById && p) { var c = b.getElementById(a); return c ? [c] : [] } }, d.filter.ID = function (a) { var b = a.replace(ba, ca); return function (a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function (a) { var b = a.replace(ba, ca); return function (a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function (a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function (a, b) { var c, d = [], e = 0, f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function (a, b) { return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0 }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), ia(function (a) { var b = n.createElement("input"); b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:") })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) { c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) { var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function (a, b) { if (b) while (b = b.parentNode) if (b === a) return !0; return !1 }, B = b ? function (a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1) } : function (a, b) { if (a === b) return l = !0, 0; var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b]; if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0; if (e === f) return ka(a, b); c = a; while (c = c.parentNode) g.unshift(c); c = b; while (c = c.parentNode) h.unshift(c); while (g[d] === h[d]) d++; return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0 }, n) : n }, fa.matches = function (a, b) { return fa(a, null, null, b) }, fa.matchesSelector = function (a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) { } return fa(b, n, null, [a]).length > 0 }, fa.contains = function (a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, fa.attr = function (a, b) { (a.ownerDocument || a) !== n && m(a); var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0; return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, fa.error = function (a) { throw new Error("Syntax error, unrecognized expression: " + a) }, fa.uniqueSort = function (a) { var b, d = [], e = 0, f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return k = null, a }, e = fa.getText = function (a) { var b, c = "", d = 0, f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else while (b = a[d++]) c += e(b); return c }, d = fa.selectors = { cacheLength: 50, createPseudo: ha, match: W, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (a) { return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function (a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a }, PSEUDO: function (a) { var b, c = !a[6] && a[2]; return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function (a) { var b = a.replace(ba, ca).toLowerCase(); return "*" === a ? function () { return !0 } : function (a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function (a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) }, ATTR: function (a, b, c) { return function (d) { var e = fa.attr(d, a); return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } }, CHILD: function (a, b, c, d, e) { var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b; return 1 === d && 0 === e ? function (a) { return !!a.parentNode } : function (b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1; if (q) { if (f) { while (p) { m = b; while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1; o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && s) { m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n]; while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) { k[a] = [w, n, t]; break } } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break; return t -= e, t === d || t % d === 0 && t / d >= 0 } } }, PSEUDO: function (a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a); return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) { var d, f = e(a, b), g = f.length; while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]) }) : function (a) { return e(a, 0, c) }) : e } }, pseudos: { not: ha(function (a) { var b = [], c = [], d = h(a.replace(Q, "$1")); return d[u] ? ha(function (a, b, c, e) { var f, g = d(a, null, e, []), h = a.length; while (h--) (f = g[h]) && (a[h] = !(b[h] = f)) }) : function (a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() } }), has: ha(function (a) { return function (b) { return fa(a, b).length > 0 } }), contains: ha(function (a) { return a = a.replace(ba, ca), function (b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: ha(function (a) { return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) { var c; do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType); return !1 } }), target: function (b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function (a) { return a === o }, focus: function (a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: function (a) { return a.disabled === !1 }, disabled: function (a) { return a.disabled === !0 }, checked: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function (a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function (a) { for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1; return !0 }, parent: function (a) { return !d.pseudos.empty(a) }, header: function (a) { return Y.test(a.nodeName) }, input: function (a) { return X.test(a.nodeName) }, button: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function (a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: na(function () { return [0] }), last: na(function (a, b) { return [b - 1] }), eq: na(function (a, b, c) { return [0 > c ? c + b : c] }), even: na(function (a, b) { for (var c = 0; b > c; c += 2) a.push(c); return a }), odd: na(function (a, b) { for (var c = 1; b > c; c += 2) a.push(c); return a }), lt: na(function (a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d); return a }), gt: na(function (a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = la(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b); function pa() { } pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function (a, b) { var c, e, f, g, h, i, j, k = z[a + " "]; if (k) return b ? 0 : k.slice(0); h = a, i = [], j = d.preFilter; while (h) { c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? fa.error(a) : z(a, i).slice(0) }; function qa(a) { for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value; return d } function ra(a, b, c) { var d = b.dir, e = c && "parentNode" === d, f = x++; return b.first ? function (b, c, f) { while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f) } : function (b, c, g) { var h, i, j, k = [w, f]; if (g) { while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0 } else while (b = b[d]) if (1 === b.nodeType || e) { if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2]; if (i[d] = k, k[2] = a(b, c, g)) return !0 } } } function sa(a) { return a.length > 1 ? function (b, c, d) { var e = a.length; while (e--) if (!a[e](b, c, d)) return !1; return !0 } : a[0] } function ta(a, b, c) { for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c); return c } function ua(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h))); return g } function va(a, b, c, d, e, f) { return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) { var j, k, l, m = [], n = [], o = g.length, p = f || ta(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ua(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = ua(r, n), d(j, [], h, i), k = j.length; while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--) (l = r[k]) && j.push(q[k] = l); e(null, r = [], j, i) } k = r.length; while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r) }) } function wa(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) { return a === b }, h, !0), l = ra(function (a) { return J(b, a) > -1 }, h, !0), m = [function (a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; f > i; i++) if (c = d.relative[a[i].type]) m = [ra(sa(m), c)]; else { if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) { for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break; return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a)) } m.push(c) } return sa(m) } function xa(a, b) { var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) { var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length; for (k && (j = g === n || g || k) ; s !== z && null != (l = x[s]) ; s++) { if (e && l) { o = 0, g || l.ownerDocument === n || (m(l), h = !p); while (q = a[o++]) if (q(l, g || n, h)) { i.push(l); break } k && (w = y) } c && ((l = !q && l) && r--, f && t.push(l)) } if (r += s, c && s !== r) { o = 0; while (q = b[o++]) q(t, u, g, h); if (f) { if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i)); u = ua(u) } H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i) } return k && (w = y, j = v), t }; return c ? ha(f) : f } return h = fa.compile = function (a, b) { var c, d = [], e = [], f = A[a + " "]; if (!f) { b || (b = g(a)), c = b.length; while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f); f = A(a, xa(e, d)), f.selector = a } return f }, i = fa.select = function (a, b, e, f) { var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a); if (e = e || [], 1 === o.length) { if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) { if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e; n && (b = b.parentNode), a = a.slice(j.shift().value.length) } i = W.needsContext.test(a) ? 0 : j.length; while (i--) { if (k = j[i], d.relative[l = k.type]) break; if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) { if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e; break } } } return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) { return 1 & a.compareDocumentPosition(n.createElement("div")) }), ia(function (a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || ja("type|href|height|width", function (a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ia(function (a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || ja("value", function (a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), ia(function (a) { return null == a.getAttribute("disabled") }) || ja(K, function (a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), fa }(a); n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains; var u = function (a, b, c) { var d = [], e = void 0 !== c; while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) { if (e && n(a).is(c)) break; d.push(a) } return d }, v = function (a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c }, w = n.expr.match.needsContext, x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, y = /^.[^:#\[\.,]*$/; function z(a, b, c) { if (n.isFunction(b)) return n.grep(a, function (a, d) { return !!b.call(a, d, a) !== c }); if (b.nodeType) return n.grep(a, function (a) { return a === b !== c }); if ("string" == typeof b) { if (y.test(b)) return n.filter(b, a, c); b = n.filter(b, a) } return n.grep(a, function (a) { return n.inArray(a, b) > -1 !== c }) } n.filter = function (a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) { return 1 === a.nodeType })) }, n.fn.extend({ find: function (a) { var b, c = [], d = this, e = d.length; if ("string" != typeof a) return this.pushStack(n(a).filter(function () { for (b = 0; e > b; b++) if (n.contains(d[b], this)) return !0 })); for (b = 0; e > b; b++) n.find(a, d[b], c); return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c }, filter: function (a) { return this.pushStack(z(this, a || [], !1)) }, not: function (a) { return this.pushStack(z(this, a || [], !0)) }, is: function (a) { return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length } }); var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function (a, b, c) { var e, f; if (!a) return this; if (c = c || A, "string" == typeof a) { if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a); if (e[1]) { if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]); return this } if (f = d.getElementById(e[2]), f && f.parentNode) { if (f.id !== e[2]) return A.find(a); this.length = 1, this[0] = f } return this.context = d, this.selector = a, this } return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this)) }; C.prototype = n.fn, A = n(d); var D = /^(?:parents|prev(?:Until|All))/, E = { children: !0, contents: !0, next: !0, prev: !0 }; n.fn.extend({ has: function (a) { var b, c = n(a, this), d = c.length; return this.filter(function () { for (b = 0; d > b; b++) if (n.contains(this, c[b])) return !0 }) }, closest: function (a, b) { for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) { f.push(c); break } return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f) }, index: function (a) { return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (a, b) { return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b)))) }, addBack: function (a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } }); function F(a, b) { do a = a[b]; while (a && 1 !== a.nodeType); return a } n.each({ parent: function (a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function (a) { return u(a, "parentNode") }, parentsUntil: function (a, b, c) { return u(a, "parentNode", c) }, next: function (a) { return F(a, "nextSibling") }, prev: function (a) { return F(a, "previousSibling") }, nextAll: function (a) { return u(a, "nextSibling") }, prevAll: function (a) { return u(a, "previousSibling") }, nextUntil: function (a, b, c) { return u(a, "nextSibling", c) }, prevUntil: function (a, b, c) { return u(a, "previousSibling", c) }, siblings: function (a) { return v((a.parentNode || {}).firstChild, a) }, children: function (a) { return v(a.firstChild) }, contents: function (a) { return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes) } }, function (a, b) { n.fn[a] = function (c, d) { var e = n.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e) } }); var G = /\S+/g; function H(a) { var b = {}; return n.each(a.match(G) || [], function (a, c) { b[c] = !0 }), b } n.Callbacks = function (a) { a = "string" == typeof a ? H(a) : n.extend({}, a); var b, c, d, e, f = [], g = [], h = -1, i = function () { for (e = a.once, d = b = !0; g.length; h = -1) { c = g.shift(); while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1) } a.memory || (c = !1), b = !1, e && (f = c ? [] : "") }, j = { add: function () { return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) { n.each(b, function (b, c) { n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c) }) }(arguments), c && !b && i()), this }, remove: function () { return n.each(arguments, function (a, b) { var c; while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h-- }), this }, has: function (a) { return a ? n.inArray(a, f) > -1 : f.length > 0 }, empty: function () { return f && (f = []), this }, disable: function () { return e = g = [], f = c = "", this }, disabled: function () { return !f }, lock: function () { return e = !0, c || j.disable(), this }, locked: function () { return !!e }, fireWith: function (a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this }, fire: function () { return j.fireWith(this, arguments), this }, fired: function () { return !!d } }; return j }, n.extend({ Deferred: function (a) { var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", d = { state: function () { return c }, always: function () { return e.done(arguments).fail(arguments), this }, then: function () { var a = arguments; return n.Deferred(function (c) { n.each(b, function (b, f) { var g = n.isFunction(a[b]) && a[b]; e[f[1]](function () { var a = g && g.apply(this, arguments); a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments) }) }), a = null }).promise() }, promise: function (a) { return null != a ? n.extend(a, d) : d } }, e = {}; return d.pipe = d.then, n.each(b, function (a, f) { var g = f[2], h = f[3]; d[f[1]] = g.add, h && g.add(function () { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function (a) { var b = 0, c = e.call(arguments), d = c.length, f = 1 !== d || a && n.isFunction(a.promise) ? d : 0, g = 1 === f ? a : n.Deferred(), h = function (a, b, c) { return function (d) { b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } }, i, j, k; if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d) ; d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f; return f || g.resolveWith(k, c), g.promise() } }); var I; n.fn.ready = function (a) { return n.ready.promise().done(a), this }, n.extend({ isReady: !1, readyWait: 1, holdReady: function (a) { a ? n.readyWait++ : n.ready(!0) }, ready: function (a) { (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready")))) } }); function J() { d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K)) } function K() { (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready()) } n.ready.promise = function (b) { if (!I) if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready); else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K); else { d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K); var c = !1; try { c = null == a.frameElement && d.documentElement } catch (e) { } c && c.doScroll && !function f() { if (!n.isReady) { try { c.doScroll("left") } catch (b) { return a.setTimeout(f, 50) } J(), n.ready() } }() } return I.promise(b) }, n.ready.promise(); var L; for (L in n(l)) break; l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function () { var a, b, c, e; c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e)) }), function () { var a = d.createElement("div"); l.deleteExpando = !0; try { delete a.test } catch (b) { l.deleteExpando = !1 } a = null }(); var M = function (a) { var b = n.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1; return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b }, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g; function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase(); if (c = a.getAttribute(d), "string" == typeof c) { try { c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c } catch (e) { } n.data(a, b, c) } else c = void 0;
        } return c
    } function Q(a) { var b; for (b in a) if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1; return !0 } function R(a, b, d, e) { if (M(a)) { var f, g, h = n.expando, i = a.nodeType, j = i ? n.cache : a, k = i ? a[h] : a[h] && h; if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: n.noop }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f } } function S(a, b, c) { if (M(a)) { var d, e, f = a.nodeType, g = f ? n.cache : a, h = f ? a[n.expando] : n.expando; if (g[h]) { if (b && (d = c ? g[h] : g[h].data)) { n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length; while (e--) delete d[b[e]]; if (c ? !Q(d) : !n.isEmptyObject(d)) return } (c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0) } } } n.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function (a) { return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a) }, data: function (a, b, c) { return R(a, b, c) }, removeData: function (a, b) { return S(a, b) }, _data: function (a, b, c) { return R(a, b, c, !0) }, _removeData: function (a, b) { return S(a, b, !0) } }), n.fn.extend({ data: function (a, b) { var c, d, e, f = this[0], g = f && f.attributes; if (void 0 === a) { if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) { c = g.length; while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d]))); n._data(f, "parsedAttrs", !0) } return e } return "object" == typeof a ? this.each(function () { n.data(this, a) }) : arguments.length > 1 ? this.each(function () { n.data(this, a, b) }) : f ? P(f, a, n.data(f, a)) : void 0 }, removeData: function (a) { return this.each(function () { n.removeData(this, a) }) } }), n.extend({ queue: function (a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0 }, dequeue: function (a, b) { b = b || "fx"; var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () { n.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function (a, b) { var c = b + "queueHooks"; return n._data(a, c) || n._data(a, c, { empty: n.Callbacks("once memory").add(function () { n._removeData(a, b + "queue"), n._removeData(a, c) }) }) } }), n.fn.extend({ queue: function (a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () { var c = n.queue(this, a, b); n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a) }) }, dequeue: function (a) { return this.each(function () { n.dequeue(this, a) }) }, clearQueue: function (a) { return this.queue(a || "fx", []) }, promise: function (a, b) { var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () { --d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b) } }), function () { var a; l.shrinkWrapBlocks = function () { if (null != a) return a; a = !1; var b, c, e; return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0 } }(); var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"), V = ["Top", "Right", "Bottom", "Left"], W = function (a, b) { return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a) }; function X(a, b, c, d) { var e, f = 1, g = 20, h = d ? function () { return d.cur() } : function () { return n.css(a, b, "") }, i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b)); if (k && k[3] !== j) { j = j || k[3], c = c || [], k = +i || 1; do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g) } return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e } var Y = function (a, b, c, d, e, f, g) { var h = 0, i = a.length, j = null == c; if ("object" === n.type(c)) { e = !0; for (h in c) Y(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) { return j.call(n(a), c) })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f }, Z = /^(?:checkbox|radio)$/i, $ = /<([\w:-]+)/, _ = /^$|\/(?:java|ecma)script/i, aa = /^\s+/, ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video"; function ca(a) { var b = ba.split("|"), c = a.createDocumentFragment(); if (c.createElement) while (b.length) c.createElement(b.pop()); return c } !function () { var a = d.createElement("div"), b = d.createDocumentFragment(), c = d.createElement("input"); a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando) }(); var da = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }; da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td; function ea(a, b) { var c, d, e = 0, f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0; if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]) ; e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b)); return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f } function fa(a, b) { for (var c, d = 0; null != (c = a[d]) ; d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval")) } var ga = /<|&#?\w+;/, ha = /<tbody/i; function ia(a) { Z.test(a.type) && (a.defaultChecked = a.checked) } function ja(a, b, c, d, e) { for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++) if (g = a[r], g || 0 === g) if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g); else if (ga.test(g)) { i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0]; while (f--) i = i.lastChild; if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) { g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length; while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k) } n.merge(q, i.childNodes), i.textContent = ""; while (i.firstChild) i.removeChild(i.firstChild); i = p.lastChild } else q.push(b.createTextNode(g)); i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0; while (g = q[r++]) if (d && n.inArray(g, d) > -1) e && e.push(g); else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) { f = 0; while (g = i[f++]) _.test(g.type || "") && c.push(g) } return i = null, p } !function () { var b, c, e = d.createElement("div"); for (b in { submit: !0, change: !0, focusin: !0 }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1); e = null }(); var ka = /^(?:input|select|textarea)$/i, la = /^key/, ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, na = /^(?:focusinfocus|focusoutblur)$/, oa = /^([^.]*)(?:\.(.+)|)/; function pa() { return !0 } function qa() { return !1 } function ra() { try { return d.activeElement } catch (a) { } } function sa(a, b, c, d, e, f) { var g, h; if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0); for (h in b) sa(a, h, c, d, b[h], f); return a } if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa; else if (!e) return a; return 1 === f && (g = e, e = function (a) { return n().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () { n.event.add(this, b, e, d, c) }) } n.event = { global: {}, add: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a); if (r) { c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) { return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments) }, k.elem = a), b = (b || "").match(G) || [""], h = b.length; while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0); a = null } }, remove: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a); if (r && (k = r.events)) { b = (b || "").match(G) || [""], j = b.length; while (j--) if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) { l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g)); i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o]) } else for (o in k) n.event.remove(a, o + b[j], c, d, !0); n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events")) } }, trigger: function (b, c, e, f) { var g, h, i, j, l, m, o, p = [e || d], q = k.call(b, "type") ? b.type : b, r = k.call(b, "namespace") ? b.namespace.split(".") : []; if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) { if (!f && !l.noBubble && !n.isWindow(e)) { for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode) ; i; i = i.parentNode) p.push(i), m = i; m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a) } o = 0; while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault()); if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) { m = e[h], m && (e[h] = null), n.event.triggered = q; try { e[q]() } catch (s) { } n.event.triggered = void 0, m && (e[h] = m) } return b.result } }, dispatch: function (a) { a = n.event.fix(a); var b, c, d, f, g, h = [], i = e.call(arguments), j = (n._data(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {}; if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = n.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, c = 0; while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, a), a.result } }, handlers: function (a, b) { var c, d, e, f, g = [], h = b.delegateCount, i = a.target; if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) { for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f); d.length && g.push({ elem: i, handlers: d }) } return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g }, fix: function (a) { if (a[n.expando]) return a; var b, c, e, f = a.type, g = a, h = this.fixHooks[f]; h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length; while (b--) c = e[b], a[c] = g[c]; return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) { var c, e, f, g = b.button, h = b.fromElement; return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a } }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== ra() && this.focus) try { return this.focus(), !1 } catch (a) { } }, delegateType: "focusin" }, blur: { trigger: function () { return this === ra() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function () { return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function (a) { return n.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function (a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } }, simulate: function (a, b, c) { var d = n.extend(new n.Event, c, { type: a, isSimulated: !0 }); n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault() } }, n.removeEvent = d.removeEventListener ? function (a, b, c) { a.removeEventListener && a.removeEventListener(b, c) } : function (a, b, c) { var d = "on" + b; a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c)) }, n.Event = function (a, b) { return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b) }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: qa, isPropagationStopped: qa, isImmediatePropagationStopped: qa, preventDefault: function () { var a = this.originalEvent; this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) }, stopPropagation: function () { var a = this.originalEvent; this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0) }, stopImmediatePropagation: function () { var a = this.originalEvent; this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation() } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) { n.event.special[a] = { delegateType: b, bindType: b, handle: function (a) { var c, d = this, e = a.relatedTarget, f = a.handleObj; return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), l.submit || (n.event.special.submit = { setup: function () { return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function (a) { var b = a.target, c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0; c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function (a) { a._submitBubble = !0 }), n._data(c, "submit", !0)) }) }, postDispatch: function (a) { a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a)) }, teardown: function () { return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit") } }), l.change || (n.event.special.change = { setup: function () { return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function (a) { "checked" === a.originalEvent.propertyName && (this._justChanged = !0) }), n.event.add(this, "click._change", function (a) { this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a) })), !1) : void n.event.add(this, "beforeactivate._change", function (a) { var b = a.target; ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function (a) { !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a) }), n._data(b, "change", !0)) }) }, handle: function (a) { var b = a.target; return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function () { return n.event.remove(this, "._change"), !ka.test(this.nodeName) } }), l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) { var c = function (a) { n.event.simulate(b, a.target, n.event.fix(a)) }; n.event.special[b] = { setup: function () { var d = this.ownerDocument || this, e = n._data(d, b); e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1) }, teardown: function () { var d = this.ownerDocument || this, e = n._data(d, b) - 1; e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b)) } } }), n.fn.extend({ on: function (a, b, c, d) { return sa(this, a, b, c, d) }, one: function (a, b, c, d) { return sa(this, a, b, c, d, 1) }, off: function (a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function () { n.event.remove(this, a, c, b) }) }, trigger: function (a, b) { return this.each(function () { n.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { var c = this[0]; return c ? n.event.trigger(a, b, c, !0) : void 0 } }); var ta = / jQuery\d+="(?:null|\d+)"/g, ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"), va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, wa = /<script|<style|<link/i, xa = /checked\s*(?:[^=]|=\s*.checked.)/i, ya = /^true\/(.*)/, za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Aa = ca(d), Ba = Aa.appendChild(d.createElement("div")); function Ca(a, b) { return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a } function Da(a) { return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a } function Ea(a) { var b = ya.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a } function Fa(a, b) { if (1 === b.nodeType && n.hasData(a)) { var c, d, e, f = n._data(a), g = n._data(b, f), h = f.events; if (h) { delete g.handle, g.events = {}; for (c in h) for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d]) } g.data && (g.data = n.extend({}, g.data)) } } function Ga(a, b) { var c, d, e; if (1 === b.nodeType) { if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) { e = n._data(b); for (d in e.events) n.removeEvent(b, d, e.handle); b.removeAttribute(n.expando) } "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) } } function Ha(a, b, c, d) { b = f.apply([], b); var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q); if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function (e) { var f = a.eq(e); r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d) }); if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) { for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m); if (h) for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, ""))); k = e = null } return a } function Ia(a, b, c) { for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]) ; f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d)); return a } n.extend({ htmlPrefilter: function (a) { return a.replace(va, "<$1></$2>") }, clone: function (a, b, c) { var d, e, f, g, h, i = n.contains(a.ownerDocument, a); if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]) ; ++g) d[g] && Ga(e, d[g]); if (b) if (c) for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]) ; g++) Fa(e, d[g]); else Fa(a, f); return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f }, cleanData: function (a, b) { for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]) ; h++) if ((b || M(d)) && (f = d[i], g = f && j[f])) { if (g.events) for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle); j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f)) } } }), n.fn.extend({ domManip: Ha, detach: function (a) { return Ia(this, a, !0) }, remove: function (a) { return Ia(this, a) }, text: function (a) { return Y(this, function (a) { return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a)) }, null, a, arguments.length) }, append: function () { return Ha(this, arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = Ca(this, a); b.appendChild(a) } }) }, prepend: function () { return Ha(this, arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = Ca(this, a); b.insertBefore(a, b.firstChild) } }) }, before: function () { return Ha(this, arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function () { return Ha(this, arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, empty: function () { for (var a, b = 0; null != (a = this[b]) ; b++) { 1 === a.nodeType && n.cleanData(ea(a, !1)); while (a.firstChild) a.removeChild(a.firstChild); a.options && n.nodeName(a, "select") && (a.options.length = 0) } return this }, clone: function (a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () { return n.clone(this, a, b) }) }, html: function (a) { return Y(this, function (a) { var b = this[0] || {}, c = 0, d = this.length; if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0; if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) { a = n.htmlPrefilter(a); try { for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a); b = 0 } catch (e) { } } b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function () { var a = []; return Ha(this, arguments, function (b) { var c = this.parentNode; n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this)) }, a) } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) { n.fn[a] = function (a) { for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get()); return this.pushStack(e) } }); var Ja, Ka = { HTML: "block", BODY: "block" }; function La(a, b) { var c = n(b.createElement(a)).appendTo(b.body), d = n.css(c[0], "display"); return c.detach(), d } function Ma(a) { var b = d, c = Ka[a]; return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c } var Na = /^margin/, Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"), Pa = function (a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f]; e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e }, Qa = d.documentElement; !function () { var b, c, e, f, g, h, i = d.createElement("div"), j = d.createElement("div"); if (j.style) { j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, { reliableHiddenOffsets: function () { return null == b && k(), f }, boxSizingReliable: function () { return null == b && k(), e }, pixelMarginRight: function () { return null == b && k(), c }, pixelPosition: function () { return null == b && k(), b }, reliableMarginRight: function () { return null == b && k(), g }, reliableMarginLeft: function () { return null == b && k(), h } }); function k() { var k, l, m = d.documentElement; m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || { width: "4px" }).width, j.style.marginRight = "50%", c = "4px" === (l || { marginRight: "4px" }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i) } } }(); var Ra, Sa, Ta = /^(top|right|bottom|left)$/; a.getComputedStyle ? (Ra = function (b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b) }, Sa = function (a, b, c) { var d, e, f, g, h = a.style; return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + "" }) : Qa.currentStyle && (Ra = function (a) { return a.currentStyle }, Sa = function (a, b, c) { var d, e, f, g, h = a.style; return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto" }); function Ua(a, b) { return { get: function () { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } } var Va = /alpha\([^)]*\)/i, Wa = /opacity\s*=\s*([^)]*)/i, Xa = /^(none|table(?!-c[ea]).+)/, Ya = new RegExp("^(" + T + ")(.*)$", "i"), Za = { position: "absolute", visibility: "hidden", display: "block" }, $a = { letterSpacing: "0", fontWeight: "400" }, _a = ["Webkit", "O", "Moz", "ms"], ab = d.createElement("div").style; function bb(a) { if (a in ab) return a; var b = a.charAt(0).toUpperCase() + a.slice(1), c = _a.length; while (c--) if (a = _a[c] + b, a in ab) return a } function cb(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display")))); for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a } function db(a, b, c) { var d = Ya.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b } function eb(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e))); return g } function fb(b, c, e) { var f = !0, g = "width" === c ? b.offsetWidth : b.offsetHeight, h = Ra(b), i = l.boxSizing && "border-box" === n.css(b, "boxSizing", !1, h); if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) { if (g = Sa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Oa.test(g)) return g; f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0 } return g + eb(b, c, e || (i ? "border" : "content"), f, h) + "px" } n.extend({ cssHooks: { opacity: { get: function (a, b) { if (b) { var c = Sa(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": l.cssFloat ? "cssFloat" : "styleFloat" }, style: function (a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = n.camelCase(b), i = a.style; if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]; if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try { i[b] = c } catch (j) { } } }, css: function (a, b, c, d) { var e, f, g, h = n.camelCase(b); return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f } }), n.each(["height", "width"], function (a, b) { n.cssHooks[b] = { get: function (a, c, d) { return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function () { return fb(a, b, d) }) : fb(a, b, d) : void 0 }, set: function (a, c, d) { var e = d && Ra(a); return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0) } } }), l.opacity || (n.cssHooks.opacity = { get: function (a, b) { return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" }, set: function (a, b) { var c = a.style, d = a.currentStyle, e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || ""; c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e) } }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) { return b ? Pa(a, { display: "inline-block" }, Sa, [a, "marginRight"]) : void 0 }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, { marginLeft: 0 }, function () { return a.getBoundingClientRect().left }) : 0)) + "px" : void 0
    }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) { n.cssHooks[a + b] = { expand: function (c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Na.test(a) || (n.cssHooks[a + b].set = db) }), n.fn.extend({ css: function (a, b) { return Y(this, function (a, b, c) { var d, e, f = {}, g = 0; if (n.isArray(b)) { for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d); return f } return void 0 !== c ? n.style(a, b, c) : n.css(a, b) }, a, b, arguments.length > 1) }, show: function () { return cb(this, !0) }, hide: function () { return cb(this) }, toggle: function (a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () { W(this) ? n(this).show() : n(this).hide() }) } }); function gb(a, b, c, d, e) { return new gb.prototype.init(a, b, c, d, e) } n.Tween = gb, gb.prototype = { constructor: gb, init: function (a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px") }, cur: function () { var a = gb.propHooks[this.prop]; return a && a.get ? a.get(this) : gb.propHooks._default.get(this) }, run: function (a) { var b, c = gb.propHooks[this.prop]; return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this } }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = { _default: { get: function (a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function (a) { n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit) } } }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = { set: function (a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, n.easing = { linear: function (a) { return a }, swing: function (a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, n.fx = gb.prototype.init, n.fx.step = {}; var hb, ib, jb = /^(?:toggle|show|hide)$/, kb = /queueHooks$/; function lb() { return a.setTimeout(function () { hb = void 0 }), hb = n.now() } function mb(a, b) { var c, d = { height: a }, e = 0; for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a; return b && (d.opacity = d.width = a), d } function nb(a, b, c) { for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d } function ob(a, b, c) { var d, e, f, g, h, i, j, k, m = this, o = {}, p = a.style, q = a.nodeType && W(a), r = n._data(a, "fxshow"); c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () { h.unqueued || i() }), h.unqueued++, m.always(function () { m.always(function () { h.unqueued--, n.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () { p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2] })); for (d in b) if (e = b[d], jb.exec(e)) { if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) { if ("show" !== e || !r || void 0 === r[d]) continue; q = !0 } o[d] = r && r[d] || n.style(a, d) } else j = void 0; if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j); else { r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () { n(a).hide() }), m.done(function () { var b; n._removeData(a, "fxshow"); for (b in o) n.style(a, b, o[b]) }); for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0)) } } function pb(a, b) { var c, d, e, f, g; for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e } function qb(a, b, c) { var d, e, f = 0, g = qb.prefilters.length, h = n.Deferred().always(function () { delete i.elem }), i = function () { if (e) return !1; for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) }, j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c), originalProperties: b, originalOptions: c, startTime: hb || lb(), duration: c.duration, tweens: [], createTween: function (b, c) { var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function (b) { var c = 0, d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; d > c; c++) j.tweens[c].run(1); return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this } }), k = j.props; for (pb(k, j.opts.specialEasing) ; g > f; f++) if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d; return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) } n.Animation = n.extend(qb, { tweeners: { "*": [function (a, b) { var c = this.createTween(a, b); return X(c.elem, a, U.exec(b), c), c }] }, tweener: function (a, b) { n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G); for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b) }, prefilters: [ob], prefilter: function (a, b) { b ? qb.prefilters.unshift(a) : qb.prefilters.push(a) } }), n.speed = function (a, b, c) { var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b }; return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () { n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue) }, d }, n.fn.extend({ fadeTo: function (a, b, c, d) { return this.filter(W).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function (a, b, c, d) { var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () { var b = qb(this, n.extend({}, a), f); (e || n._data(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function (a, b, c) { var d = function (a) { var b = a.stop; delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () { var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = n._data(this); if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]); for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); !b && c || n.dequeue(this, a) }) }, finish: function (a) { return a !== !1 && (a = a || "fx"), this.each(function () { var b, c = n._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0; for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this); delete c.finish }) } }), n.each(["toggle", "show", "hide"], function (a, b) { var c = n.fn[b]; n.fn[b] = function (a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e) } }), n.each({ slideDown: mb("show"), slideUp: mb("hide"), slideToggle: mb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) { n.fn[a] = function (a, c, d) { return this.animate(b, a, c, d) } }), n.timers = [], n.fx.tick = function () { var a, b = n.timers, c = 0; for (hb = n.now() ; c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1); b.length || n.fx.stop(), hb = void 0 }, n.fx.timer = function (a) { n.timers.push(a), a() ? n.fx.start() : n.timers.pop() }, n.fx.interval = 13, n.fx.start = function () { ib || (ib = a.setInterval(n.fx.tick, n.fx.interval)) }, n.fx.stop = function () { a.clearInterval(ib), ib = null }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (b, c) { return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) { var e = a.setTimeout(c, b); d.stop = function () { a.clearTimeout(e) } }) }, function () { var a, b = d.createElement("input"), c = d.createElement("div"), e = d.createElement("select"), f = e.appendChild(d.createElement("option")); c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value }(); var rb = /\r/g, sb = /[\x20\t\r\n\f]+/g; n.fn.extend({ val: function (a) { var b, c, d, e = this[0]; { if (arguments.length) return d = n.isFunction(a), this.each(function (c) { var e; 1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) { return null == a ? "" : a + "" })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c) } } }), n.extend({ valHooks: { option: { get: function (a) { var b = n.find.attr(a, "value"); return null != b ? b : n.trim(n.text(a)).replace(sb, " ") } }, select: { get: function (a) { for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) { if (b = n(c).val(), f) return b; g.push(b) } return g }, set: function (a, b) { var c, d, e = a.options, f = n.makeArray(b), g = e.length; while (g--) if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try { d.selected = c = !0 } catch (h) { d.scrollHeight } else d.selected = !1; return c || (a.selectedIndex = -1), e } } } }), n.each(["radio", "checkbox"], function () { n.valHooks[this] = { set: function (a, b) { return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0 } }, l.checkOn || (n.valHooks[this].get = function (a) { return null === a.getAttribute("value") ? "on" : a.value }) }); var tb, ub, vb = n.expr.attrHandle, wb = /^(?:checked|selected)$/i, xb = l.getSetAttribute, yb = l.input; n.fn.extend({ attr: function (a, b) { return Y(this, n.attr, a, b, arguments.length > 1) }, removeAttr: function (a) { return this.each(function () { n.removeAttr(this, a) }) } }), n.extend({ attr: function (a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d)) }, attrHooks: { type: { set: function (a, b) { if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } }, removeAttr: function (a, b) { var c, d, e = 0, f = b && b.match(G); if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d) } }), ub = { set: function (a, b, c) { return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) { var c = vb[b] || n.find.attr; yb && xb || !wb.test(b) ? vb[b] = function (a, b, d) { var e, f; return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e } : vb[b] = function (a, b, c) { return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null } }), yb && xb || (n.attrHooks.value = { set: function (a, b, c) { return n.nodeName(a, "input") ? void (a.defaultValue = b) : tb && tb.set(a, b, c) } }), xb || (tb = { set: function (a, b, c) { var d = a.getAttributeNode(c); return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0 } }, vb.id = vb.name = vb.coords = function (a, b, c) { var d; return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null }, n.valHooks.button = { get: function (a, b) { var c = a.getAttributeNode(b); return c && c.specified ? c.value : void 0 }, set: tb.set }, n.attrHooks.contenteditable = { set: function (a, b, c) { tb.set(a, "" === b ? !1 : b, c) } }, n.each(["width", "height"], function (a, b) { n.attrHooks[b] = { set: function (a, c) { return "" === c ? (a.setAttribute(b, "auto"), c) : void 0 } } })), l.style || (n.attrHooks.style = { get: function (a) { return a.style.cssText || void 0 }, set: function (a, b) { return a.style.cssText = b + "" } }); var zb = /^(?:input|select|textarea|button|object)$/i, Ab = /^(?:a|area)$/i; n.fn.extend({ prop: function (a, b) { return Y(this, n.prop, a, b, arguments.length > 1) }, removeProp: function (a) { return a = n.propFix[a] || a, this.each(function () { try { this[a] = void 0, delete this[a] } catch (b) { } }) } }), n.extend({ prop: function (a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function (a) { var b = n.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), l.hrefNormalized || n.each(["href", "src"], function (a, b) { n.propHooks[b] = { get: function (a) { return a.getAttribute(b, 4) } } }), l.optSelected || (n.propHooks.selected = { get: function (a) { var b = a.parentNode; return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null }, set: function (a) { var b = a.parentNode; b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex) } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { n.propFix[this.toLowerCase()] = this }), l.enctype || (n.propFix.enctype = "encoding"); var Bb = /[\t\r\n\f]/g; function Cb(a) { return n.attr(a, "class") || "" } n.fn.extend({ addClass: function (a) { var b, c, d, e, f, g, h, i = 0; if (n.isFunction(a)) return this.each(function (b) { n(this).addClass(a.call(this, b, Cb(this))) }); if ("string" == typeof a && a) { b = a.match(G) || []; while (c = this[i++]) if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) { g = 0; while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " "); h = n.trim(d), e !== h && n.attr(c, "class", h) } } return this }, removeClass: function (a) { var b, c, d, e, f, g, h, i = 0; if (n.isFunction(a)) return this.each(function (b) { n(this).removeClass(a.call(this, b, Cb(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" == typeof a && a) { b = a.match(G) || []; while (c = this[i++]) if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) { g = 0; while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " "); h = n.trim(d), e !== h && n.attr(c, "class", h) } } return this }, toggleClass: function (a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) { n(this).toggleClass(a.call(this, c, Cb(this), b), b) }) : this.each(function () { var b, d, e, f; if ("string" === c) { d = 0, e = n(this), f = a.match(G) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || "")) }) }, hasClass: function (a) { var b, c, d = 0; b = " " + a + " "; while (c = this[d++]) if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0; return !1 } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) { n.fn[b] = function (a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), n.fn.extend({ hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) } }); var Db = a.location, Eb = n.now(), Fb = /\?/, Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g; n.parseJSON = function (b) { if (a.JSON && a.JSON.parse) return a.JSON.parse(b + ""); var c, d = null, e = n.trim(b + ""); return e && !n.trim(e.replace(Gb, function (a, b, e, f) { return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "") })) ? Function("return " + e)() : n.error("Invalid JSON: " + b) }, n.parseXML = function (b) { var c, d; if (!b || "string" != typeof b) return null; try { a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)) } catch (e) { c = void 0 } return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c }; var Hb = /#.*$/, Ib = /([?&])_=[^&]*/, Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Lb = /^(?:GET|HEAD)$/, Mb = /^\/\//, Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Ob = {}, Pb = {}, Qb = "*/".concat("*"), Rb = Db.href, Sb = Nb.exec(Rb.toLowerCase()) || []; function Tb(a) { return function (b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0, f = b.toLowerCase().match(G) || []; if (n.isFunction(c)) while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } } function Ub(a, b, c, d) { var e = {}, f = a === Pb; function g(h) { var i; return e[h] = !0, n.each(a[h] || [], function (a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") } function Vb(a, b) { var c, d, e = n.ajaxSettings.flatOptions || {}; for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]); return c && n.extend(!0, a, c), a } function Wb(a, b, c) { var d, e, f, g, h = a.contents, i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type")); if (e) for (g in h) if (h[g] && h[g].test(e)) { i.unshift(g); break } if (i[0] in c) f = i[0]; else { for (g in c) { if (!i[0] || a.converters[g + " " + i[0]]) { f = g; break } d || (d = g) } f = f || d } return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0 } function Xb(a, b, c, d) { var e, f, g, h, i, j = {}, k = a.dataTypes.slice(); if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g]; f = k.shift(); while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break } if (g !== !0) if (g && a["throws"]) b = g(b); else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } } n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Rb, type: "GET", isLocal: Kb.test(Sb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Qb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (a, b) { return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a) }, ajaxPrefilter: Tb(Ob), ajaxTransport: Tb(Pb), ajax: function (b, c) { "object" == typeof b && (c = b, b = void 0), c = c || {}; var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c), m = l.context || l, o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event, p = n.Deferred(), q = n.Callbacks("once memory"), r = l.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = { readyState: 0, getResponseHeader: function (a) { var b; if (2 === u) { if (!k) { k = {}; while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2] } b = k[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function () { return 2 === u ? g : null }, setRequestHeader: function (a, b) { var c = a.toLowerCase(); return u || (a = t[c] = t[c] || a, s[a] = b), this }, overrideMimeType: function (a) { return u || (l.mimeType = a), this }, statusCode: function (a) { var b; if (a) if (2 > u) for (b in a) r[b] = [r[b], a[b]]; else w.always(a[w.status]); return this }, abort: function (a) { var b = a || v; return j && j.abort(b), y(0, b), this } }; if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w; i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]); for (e in l.headers) w.setRequestHeader(e, l.headers[e]); if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort(); v = "abort"; for (e in { success: 1, error: 1, complete: 1 }) w[e](l[e]); if (j = Ub(Pb, l, c, w)) { if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w; l.async && l.timeout > 0 && (h = a.setTimeout(function () { w.abort("timeout") }, l.timeout)); try { u = 1, j.send(s, y) } catch (x) { if (!(2 > u)) throw x; y(-1, x) } } else y(-1, "No Transport"); function y(b, c, d, e) { var k, s, t, v, x, y = c; 2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop"))) } return w }, getJSON: function (a, b, c) { return n.get(a, b, c, "json") }, getScript: function (a, b) { return n.get(a, void 0, b, "script") } }), n.each(["get", "post"], function (a, b) { n[b] = function (a, c, d, e) { return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a)) } }), n._evalUrl = function (a) { return n.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, n.fn.extend({ wrapAll: function (a) { if (n.isFunction(a)) return this.each(function (b) { n(this).wrapAll(a.call(this, b)) }); if (this[0]) { var b = n(a, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && b.insertBefore(this[0]), b.map(function () { var a = this; while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild; return a }).append(this) } return this }, wrapInner: function (a) { return n.isFunction(a) ? this.each(function (b) { n(this).wrapInner(a.call(this, b)) }) : this.each(function () { var b = n(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function (a) { var b = n.isFunction(a); return this.each(function (c) { n(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function () { return this.parent().each(function () { n.nodeName(this, "body") || n(this).replaceWith(this.childNodes) }).end() } }); function Yb(a) { return a.style && a.style.display || n.css(a, "display") } function Zb(a) { while (a && 1 === a.nodeType) { if ("none" === Yb(a) || "hidden" === a.type) return !0; a = a.parentNode } return !1 } n.expr.filters.hidden = function (a) { return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a) }, n.expr.filters.visible = function (a) { return !n.expr.filters.hidden(a) }; var $b = /%20/g, _b = /\[\]$/, ac = /\r?\n/g, bc = /^(?:submit|button|image|reset|file)$/i, cc = /^(?:input|select|textarea|keygen)/i; function dc(a, b, c, d) { var e; if (n.isArray(b)) n.each(b, function (b, e) { c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) dc(a + "[" + e + "]", b[e], c, d) } n.param = function (a, b) { var c, d = [], e = function (a, b) { b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () { e(this.name, this.value) }); else for (c in a) dc(c, a[c], b, e); return d.join("&").replace($b, "+") }, n.fn.extend({ serialize: function () { return n.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var a = n.prop(this, "elements"); return a ? n.makeArray(a) : this }).filter(function () { var a = this.type; return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a)) }).map(function (a, b) { var c = n(this).val(); return null == c ? null : n.isArray(c) ? n.map(c, function (a) { return { name: b.name, value: a.replace(ac, "\r\n") } }) : { name: b.name, value: c.replace(ac, "\r\n") } }).get() } }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () { return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic() } : hc; var ec = 0, fc = {}, gc = n.ajaxSettings.xhr(); a.attachEvent && a.attachEvent("onunload", function () { for (var a in fc) fc[a](void 0, !0) }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function (b) { if (!b.crossDomain || l.cors) { var c; return { send: function (d, e) { var f, g = b.xhr(), h = ++ec; if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (f in b.xhrFields) g[f] = b.xhrFields[f]; b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest"); for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + ""); g.send(b.hasContent && b.data || null), c = function (a, d) { var f, i, j; if (c && (d || 4 === g.readyState)) if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort(); else { j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText); try { i = g.statusText } catch (k) { i = "" } f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404 } j && e(f, i, j, g.getAllResponseHeaders()) }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c() }, abort: function () { c && c(void 0, !0) } } } }); function hc() { try { return new a.XMLHttpRequest } catch (b) { } } function ic() { try { return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) { } } n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (a) { return n.globalEval(a), a } } }), n.ajaxPrefilter("script", function (a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), n.ajaxTransport("script", function (a) { if (a.crossDomain) { var b, c = d.head || n("head")[0] || d.documentElement; return { send: function (e, f) { b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) { (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success")) }, c.insertBefore(b, c.firstChild) }, abort: function () { b && b.onload(void 0, !0) } } } }); var jc = [], kc = /(=)\?(?=&|$)|\?\?/; n.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var a = jc.pop() || n.expando + "_" + Eb++; return this[a] = !0, a } }), n.ajaxPrefilter("json jsonp", function (b, c, d) { var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () { return g || n.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function () { g = arguments }, d.always(function () { void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), n.parseHTML = function (a, b, c) { if (!a || "string" != typeof a) return null; "boolean" == typeof b && (c = b, b = !1), b = b || d; var e = x.exec(a), f = !c && []; return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes)) }; var lc = n.fn.load; n.fn.load = function (a, b, c) { if ("string" != typeof a && lc) return lc.apply(this, arguments); var d, e, f, g = this, h = a.indexOf(" "); return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) { f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a) }).always(c && function (a, b) { g.each(function () { c.apply(this, f || [a.responseText, b, a]) }) }), this }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) { n.fn[b] = function (a) { return this.on(b, a) } }), n.expr.filters.animated = function (a) { return n.grep(n.timers, function (b) { return a === b.elem }).length }; function mc(a) { return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1 } n.offset = { setOffset: function (a, b, c) { var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m) } }, n.fn.extend({ offset: function (a) { if (arguments.length) return void 0 === a ? this : this.each(function (b) { n.offset.setOffset(this, a, b) }); var b, c, d = { top: 0, left: 0 }, e = this[0], f = e && e.ownerDocument; if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d }, position: function () { if (this[0]) { var a, b, c = { top: 0, left: 0 }, d = this[0]; return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - n.css(d, "marginTop", !0), left: b.left - c.left - n.css(d, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var a = this.offsetParent; while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent; return a || Qa }) } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) { var c = /Y/.test(b); n.fn[a] = function (d) { return Y(this, function (a, d, e) { var f = mc(a); return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e) }, a, d, arguments.length, null) } }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
            return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0;
        })
    }), n.each({ Height: "height", Width: "width" }, function (a, b) { n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) { n.fn[d] = function (d, e) { var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border"); return Y(this, function (b, c, d) { var e; return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g) }, b, f ? d : void 0, f, null) } }) }), n.fn.extend({ bind: function (a, b, c) { return this.on(a, null, b, c) }, unbind: function (a, b) { return this.off(a, null, b) }, delegate: function (a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function (a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }), n.fn.size = function () { return this.length }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () { return n }); var nc = a.jQuery, oc = a.$; return n.noConflict = function (b) { return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n }, b || (a.jQuery = a.$ = n), n
});

/*! aXe v2.6.1
 * Copyright (c) 2017 Deque Systems, Inc.
 *
 * Your use of this Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * This entire copyright notice must appear in every copy of this file you
 * distribute or in any file that contains substantial portions of this source
 * code.
 */
(function axeFunction(window) {
    var global = window;
    var document = window.document;
    'use strict';
    var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };
    var axe = axe || {};
    axe.version = '2.6.1';
    if (typeof define === 'function' && define.amd) {
        define([], function () {
            'use strict';
            return axe;
        });
    }
    if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports && typeof axeFunction.toString === 'function') {
        axe.source = '(' + axeFunction.toString() + ')(typeof window === "object" ? window : this);';
        module.exports = axe;
    }
    if (typeof window.getComputedStyle === 'function') {
        window.axe = axe;
    }
    var commons;
    function SupportError(error) {
        this.name = 'SupportError';
        this.cause = error.cause;
        this.message = '`' + error.cause + '` - feature unsupported in your environment.';
        if (error.ruleId) {
            this.ruleId = error.ruleId;
            this.message += ' Skipping ' + this.ruleId + ' rule.';
        }
        this.stack = new Error().stack;
    }
    SupportError.prototype = Object.create(Error.prototype);
    SupportError.prototype.constructor = SupportError;
    'use strict';
    var utils = axe.utils = {};
    'use strict';
    var helpers = {};
    'use strict';
    var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };
    function getDefaultConfiguration(audit) {
        'use strict';
        var config;
        if (audit) {
            config = axe.utils.clone(audit);
            config.commons = audit.commons;
        } else {
            config = {};
        }
        config.reporter = config.reporter || null;
        config.rules = config.rules || [];
        config.checks = config.checks || [];
        config.data = Object.assign({
            checks: {},
            rules: {}
        }, config.data);
        return config;
    }
    function unpackToObject(collection, audit, method) {
        'use strict';
        var i, l;
        for (i = 0, l = collection.length; i < l; i++) {
            audit[method](collection[i]);
        }
    }
    function Audit(audit) {
        this.brand = 'axe';
        this.application = 'axeAPI';
        this.tagExclude = ['experimental'];
        this.defaultConfig = audit;
        this._init();
    }
    Audit.prototype._init = function () {
        var audit = getDefaultConfiguration(this.defaultConfig);
        axe.commons = commons = audit.commons;
        this.reporter = audit.reporter;
        this.commands = {};
        this.rules = [];
        this.checks = {};
        unpackToObject(audit.rules, this, 'addRule');
        unpackToObject(audit.checks, this, 'addCheck');
        this.data = {};
        this.data.checks = audit.data && audit.data.checks || {};
        this.data.rules = audit.data && audit.data.rules || {};
        this.data.failureSummaries = audit.data && audit.data.failureSummaries || {};
        this.data.incompleteFallbackMessage = audit.data && audit.data.incompleteFallbackMessage || '';
        this._constructHelpUrls();
    };
    Audit.prototype.registerCommand = function (command) {
        'use strict';
        this.commands[command.id] = command.callback;
    };
    Audit.prototype.addRule = function (spec) {
        'use strict';
        if (spec.metadata) {
            this.data.rules[spec.id] = spec.metadata;
        }
        var rule = this.getRule(spec.id);
        if (rule) {
            rule.configure(spec);
        } else {
            this.rules.push(new Rule(spec, this));
        }
    };
    Audit.prototype.addCheck = function (spec) {
        'use strict';
        var metadata = spec.metadata;
        if ((typeof metadata === 'undefined' ? 'undefined' : _typeof(metadata)) === 'object') {
            this.data.checks[spec.id] = metadata;
            if (_typeof(metadata.messages) === 'object') {
                Object.keys(metadata.messages).filter(function (prop) {
                    return metadata.messages.hasOwnProperty(prop) && typeof metadata.messages[prop] === 'string';
                }).forEach(function (prop) {
                    if (metadata.messages[prop].indexOf('function') === 0) {
                        metadata.messages[prop] = new Function('return ' + metadata.messages[prop] + ';')();
                    }
                });
            }
        }
        if (this.checks[spec.id]) {
            this.checks[spec.id].configure(spec);
        } else {
            this.checks[spec.id] = new Check(spec);
        }
    };
    Audit.prototype.run = function (context, options, resolve, reject) {
        'use strict';
        this.validateOptions(options);
        var q = axe.utils.queue();
        this.rules.forEach(function (rule) {
            if (axe.utils.ruleShouldRun(rule, context, options)) {
                if (options.performanceTimer) {
                    var markEnd = 'mark_rule_end_' + rule.id;
                    var markStart = 'mark_rule_start_' + rule.id;
                    axe.utils.performanceTimer.mark(markStart);
                }
                q.defer(function (res, rej) {
                    rule.run(context, options, function (out) {
                        if (options.performanceTimer) {
                            axe.utils.performanceTimer.mark(markEnd);
                            axe.utils.performanceTimer.measure('rule_' + rule.id, markStart, markEnd);
                        }
                        res(out);
                    }, function (err) {
                        if (!options.debug) {
                            var errResult = Object.assign(new RuleResult(rule), {
                                result: axe.constants.CANTTELL,
                                description: 'An error occured while running this rule',
                                message: err.message,
                                stack: err.stack,
                                error: err
                            });
                            res(errResult);
                        } else {
                            rej(err);
                        }
                    });
                });
            }
        });
        q.then(function (results) {
            resolve(results.filter(function (result) {
                return !!result;
            }));
        }).catch(reject);
    };
    Audit.prototype.after = function (results, options) {
        'use strict';
        var rules = this.rules;
        return results.map(function (ruleResult) {
            var rule = axe.utils.findBy(rules, 'id', ruleResult.id);
            return rule.after(ruleResult, options);
        });
    };
    Audit.prototype.getRule = function (ruleId) {
        return this.rules.find(function (rule) {
            return rule.id === ruleId;
        });
    };
    Audit.prototype.validateOptions = function (options) {
        'use strict';
        var audit = this;
        if (_typeof(options.runOnly) === 'object') {
            var only = options.runOnly;
            if (only.type === 'rule' && Array.isArray(only.value)) {
                only.value.forEach(function (ruleId) {
                    if (!audit.getRule(ruleId)) {
                        throw new Error('unknown rule `' + ruleId + '` in options.runOnly');
                    }
                });
            } else if (Array.isArray(only.value) && only.value.length > 0) {
                var tags = [].concat(only.value);
                audit.rules.forEach(function (rule) {
                    var tagPos, i, l;
                    if (!tags) {
                        return;
                    }
                    for (i = 0, l = rule.tags.length; i < l; i++) {
                        tagPos = tags.indexOf(rule.tags[i]);
                        if (tagPos !== -1) {
                            tags.splice(tagPos, 1);
                        }
                    }
                });
                if (tags.length !== 0) {
                    throw new Error('could not find tags `' + tags.join('`, `') + '`');
                }
            }
        }
        if (_typeof(options.rules) === 'object') {
            Object.keys(options.rules).forEach(function (ruleId) {
                if (!audit.getRule(ruleId)) {
                    throw new Error('unknown rule `' + ruleId + '` in options.rules');
                }
            });
        }
        return options;
    };
    Audit.prototype.setBranding = function (branding) {
        'use strict';
        var previous = {
            brand: this.brand,
            application: this.application
        };
        if (branding && branding.hasOwnProperty('brand') && branding.brand && typeof branding.brand === 'string') {
            this.brand = branding.brand;
        }
        if (branding && branding.hasOwnProperty('application') && branding.application && typeof branding.application === 'string') {
            this.application = branding.application;
        }
        this._constructHelpUrls(previous);
    };
    function getHelpUrl(_ref, ruleId, version) {
        var brand = _ref.brand, application = _ref.application;
        return axe.constants.helpUrlBase + brand + '/' + (version || axe.version.substring(0, axe.version.lastIndexOf('.'))) + '/' + ruleId + '?application=' + application;
    }
    Audit.prototype._constructHelpUrls = function () {
        var _this = this;
        var previous = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var version = (axe.version.match(/^[1-9][0-9]*\.[0-9]+/) || ['x.y'])[0];
        this.rules.forEach(function (rule) {
            if (!_this.data.rules[rule.id]) {
                _this.data.rules[rule.id] = {};
            }
            var metaData = _this.data.rules[rule.id];
            if (typeof metaData.helpUrl !== 'string' || previous && metaData.helpUrl === getHelpUrl(previous, rule.id, version)) {
                metaData.helpUrl = getHelpUrl(_this, rule.id, version);
            }
        });
    };
    Audit.prototype.resetRulesAndChecks = function () {
        'use strict';
        this._init();
    };
    'use strict';
    function CheckResult(check) {
        'use strict';
        this.id = check.id;
        this.data = null;
        this.relatedNodes = [];
        this.result = null;
    }
    'use strict';
    function createExecutionContext(spec) {
        'use strict';
        if (typeof spec === 'string') {
            return new Function('return ' + spec + ';')();
        }
        return spec;
    }
    function Check(spec) {
        if (spec) {
            this.id = spec.id;
            this.configure(spec);
        }
    }
    Check.prototype.enabled = true;
    Check.prototype.run = function (node, options, resolve, reject) {
        'use strict';
        options = options || {};
        var enabled = options.hasOwnProperty('enabled') ? options.enabled : this.enabled, checkOptions = options.options || this.options;
        if (enabled) {
            var checkResult = new CheckResult(this);
            var checkHelper = axe.utils.checkHelper(checkResult, options, resolve, reject);
            var result;
            try {
                result = this.evaluate.call(checkHelper, node, checkOptions);
            } catch (e) {
                reject(e);
                return;
            }
            if (!checkHelper.isAsync) {
                checkResult.result = result;
                setTimeout(function () {
                    resolve(checkResult);
                }, 0);
            }
        } else {
            resolve(null);
        }
    };
    Check.prototype.configure = function (spec) {
        var _this = this;
        ['options', 'enabled'].filter(function (prop) {
            return spec.hasOwnProperty(prop);
        }).forEach(function (prop) {
            return _this[prop] = spec[prop];
        });
        ['evaluate', 'after'].filter(function (prop) {
            return spec.hasOwnProperty(prop);
        }).forEach(function (prop) {
            return _this[prop] = createExecutionContext(spec[prop]);
        });
    };
    'use strict';
    var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };
    function pushUniqueFrame(collection, frame) {
        'use strict';
        if (axe.utils.isHidden(frame)) {
            return;
        }
        var fr = axe.utils.findBy(collection, 'node', frame);
        if (!fr) {
            collection.push({
                node: frame,
                include: [],
                exclude: []
            });
        }
    }
    function pushUniqueFrameSelector(context, type, selectorArray) {
        'use strict';
        context.frames = context.frames || [];
        var result, frame;
        var frames = document.querySelectorAll(selectorArray.shift());
        frameloop: for (var i = 0, l = frames.length; i < l; i++) {
            frame = frames[i];
            for (var j = 0, l2 = context.frames.length; j < l2; j++) {
                if (context.frames[j].node === frame) {
                    context.frames[j][type].push(selectorArray);
                    break frameloop;
                }
            }
            result = {
                node: frame,
                include: [],
                exclude: []
            };
            if (selectorArray) {
                result[type].push(selectorArray);
            }
            context.frames.push(result);
        }
    }
    function normalizeContext(context) {
        'use strict';
        if (context && (typeof context === 'undefined' ? 'undefined' : _typeof(context)) === 'object' || context instanceof NodeList) {
            if (context instanceof Node) {
                return {
                    include: [context],
                    exclude: []
                };
            }
            if (context.hasOwnProperty('include') || context.hasOwnProperty('exclude')) {
                return {
                    include: context.include && +context.include.length ? context.include : [document],
                    exclude: context.exclude || []
                };
            }
            if (context.length === +context.length) {
                return {
                    include: context,
                    exclude: []
                };
            }
        }
        if (typeof context === 'string') {
            return {
                include: [context],
                exclude: []
            };
        }
        return {
            include: [document],
            exclude: []
        };
    }
    function parseSelectorArray(context, type) {
        'use strict';
        var item, result = [];
        for (var i = 0, l = context[type].length; i < l; i++) {
            item = context[type][i];
            if (typeof item === 'string') {
                result = result.concat(axe.utils.toArray(document.querySelectorAll(item)));
                break;
            } else if (item && item.length && !(item instanceof Node)) {
                if (item.length > 1) {
                    pushUniqueFrameSelector(context, type, item);
                } else {
                    result = result.concat(axe.utils.toArray(document.querySelectorAll(item[0])));
                }
            } else {
                result.push(item);
            }
        }
        return result.filter(function (r) {
            return r;
        });
    }
    function validateContext(context) {
        'use strict';
        if (context.include.length === 0) {
            if (context.frames.length === 0) {
                var env = axe.utils.respondable.isInFrame() ? 'frame' : 'page';
                return new Error('No elements found for include in ' + env + ' Context');
            }
            context.frames.forEach(function (frame, i) {
                if (frame.include.length === 0) {
                    return new Error('No elements found for include in Context of frame ' + i);
                }
            });
        }
    }
    function Context(spec) {
        'use strict';
        var self = this;
        this.frames = [];
        this.initiator = spec && typeof spec.initiator === 'boolean' ? spec.initiator : true;
        this.page = false;
        spec = normalizeContext(spec);
        this.exclude = spec.exclude;
        this.include = spec.include;
        this.include = parseSelectorArray(this, 'include');
        this.exclude = parseSelectorArray(this, 'exclude');
        axe.utils.select('frame, iframe', this).forEach(function (frame) {
            if (isNodeInContext(frame, self)) {
                pushUniqueFrame(self.frames, frame);
            }
        });
        if (this.include.length === 1 && this.include[0] === document) {
            this.page = true;
        }
        var err = validateContext(this);
        if (err instanceof Error) {
            throw err;
        }
    }
    'use strict';
    function RuleResult(rule) {
        'use strict';
        this.id = rule.id;
        this.result = axe.constants.NA;
        this.pageLevel = rule.pageLevel;
        this.impact = null;
        this.nodes = [];
    }
    'use strict';
    function Rule(spec, parentAudit) {
        'use strict';
        this._audit = parentAudit;
        this.id = spec.id;
        this.selector = spec.selector || '*';
        this.excludeHidden = typeof spec.excludeHidden === 'boolean' ? spec.excludeHidden : true;
        this.enabled = typeof spec.enabled === 'boolean' ? spec.enabled : true;
        this.pageLevel = typeof spec.pageLevel === 'boolean' ? spec.pageLevel : false;
        this.any = spec.any || [];
        this.all = spec.all || [];
        this.none = spec.none || [];
        this.tags = spec.tags || [];
        if (spec.matches) {
            this.matches = createExecutionContext(spec.matches);
        }
    }
    Rule.prototype.matches = function () {
        'use strict';
        return true;
    };
    Rule.prototype.gather = function (context) {
        'use strict';
        var elements = axe.utils.select(this.selector, context);
        if (this.excludeHidden) {
            return elements.filter(function (element) {
                return !axe.utils.isHidden(element);
            });
        }
        return elements;
    };
    Rule.prototype.runChecks = function (type, node, options, resolve, reject) {
        'use strict';
        var self = this;
        var checkQueue = axe.utils.queue();
        this[type].forEach(function (c) {
            var check = self._audit.checks[c.id || c];
            var option = axe.utils.getCheckOption(check, self.id, options);
            checkQueue.defer(function (res, rej) {
                check.run(node, option, res, rej);
            });
        });
        checkQueue.then(function (results) {
            results = results.filter(function (check) {
                return check;
            });
            resolve({
                type: type,
                results: results
            });
        }).catch(reject);
    };
    Rule.prototype.run = function (context, options, resolve, reject) {
        var _this = this;
        var q = axe.utils.queue();
        var ruleResult = new RuleResult(this);
        var nodes = void 0;
        try {
            nodes = this.gather(context).filter(function (node) {
                return _this.matches(node);
            });
        } catch (error) {
            reject(new SupportError({
                cause: error,
                ruleId: this.id
            }));
            return;
        }
        if (options.performanceTimer) {
            axe.log('gather (', nodes.length, '):', axe.utils.performanceTimer.timeElapsed() + 'ms');
        }
        nodes.forEach(function (node) {
            q.defer(function (resolveNode, rejectNode) {
                var checkQueue = axe.utils.queue();
                checkQueue.defer(function (res, rej) {
                    _this.runChecks('any', node, options, res, rej);
                });
                checkQueue.defer(function (res, rej) {
                    _this.runChecks('all', node, options, res, rej);
                });
                checkQueue.defer(function (res, rej) {
                    _this.runChecks('none', node, options, res, rej);
                });
                checkQueue.then(function (results) {
                    if (results.length) {
                        var hasResults = false, result = {};
                        results.forEach(function (r) {
                            var res = r.results.filter(function (result) {
                                return result;
                            });
                            result[r.type] = res;
                            if (res.length) {
                                hasResults = true;
                            }
                        });
                        if (hasResults) {
                            result.node = new axe.utils.DqElement(node, options);
                            ruleResult.nodes.push(result);
                        }
                    }
                    resolveNode();
                }).catch(function (err) {
                    return rejectNode(err);
                });
            });
        });
        q.then(function () {
            return resolve(ruleResult);
        }).catch(function (error) {
            return reject(error);
        });
    };
    function findAfterChecks(rule) {
        'use strict';
        return axe.utils.getAllChecks(rule).map(function (c) {
            var check = rule._audit.checks[c.id || c];
            return check && typeof check.after === 'function' ? check : null;
        }).filter(Boolean);
    }
    function findCheckResults(nodes, checkID) {
        'use strict';
        var checkResults = [];
        nodes.forEach(function (nodeResult) {
            var checks = axe.utils.getAllChecks(nodeResult);
            checks.forEach(function (checkResult) {
                if (checkResult.id === checkID) {
                    checkResults.push(checkResult);
                }
            });
        });
        return checkResults;
    }
    function filterChecks(checks) {
        'use strict';
        return checks.filter(function (check) {
            return check.filtered !== true;
        });
    }
    function sanitizeNodes(result) {
        'use strict';
        var checkTypes = ['any', 'all', 'none'];
        var nodes = result.nodes.filter(function (detail) {
            var length = 0;
            checkTypes.forEach(function (type) {
                detail[type] = filterChecks(detail[type]);
                length += detail[type].length;
            });
            return length > 0;
        });
        if (result.pageLevel && nodes.length) {
            nodes = [nodes.reduce(function (a, b) {
                if (a) {
                    checkTypes.forEach(function (type) {
                        a[type].push.apply(a[type], b[type]);
                    });
                    return a;
                }
            })];
        }
        return nodes;
    }
    Rule.prototype.after = function (result, options) {
        'use strict';
        var afterChecks = findAfterChecks(this);
        var ruleID = this.id;
        afterChecks.forEach(function (check) {
            var beforeResults = findCheckResults(result.nodes, check.id);
            var option = axe.utils.getCheckOption(check, ruleID, options);
            var afterResults = check.after(beforeResults, option);
            beforeResults.forEach(function (item) {
                if (afterResults.indexOf(item) === -1) {
                    item.filtered = true;
                }
            });
        });
        result.nodes = sanitizeNodes(result);
        return result;
    };
    Rule.prototype.configure = function (spec) {
        'use strict';
        if (spec.hasOwnProperty('selector')) {
            this.selector = spec.selector;
        }
        if (spec.hasOwnProperty('excludeHidden')) {
            this.excludeHidden = typeof spec.excludeHidden === 'boolean' ? spec.excludeHidden : true;
        }
        if (spec.hasOwnProperty('enabled')) {
            this.enabled = typeof spec.enabled === 'boolean' ? spec.enabled : true;
        }
        if (spec.hasOwnProperty('pageLevel')) {
            this.pageLevel = typeof spec.pageLevel === 'boolean' ? spec.pageLevel : false;
        }
        if (spec.hasOwnProperty('any')) {
            this.any = spec.any;
        }
        if (spec.hasOwnProperty('all')) {
            this.all = spec.all;
        }
        if (spec.hasOwnProperty('none')) {
            this.none = spec.none;
        }
        if (spec.hasOwnProperty('tags')) {
            this.tags = spec.tags;
        }
        if (spec.hasOwnProperty('matches')) {
            if (typeof spec.matches === 'string') {
                this.matches = new Function('return ' + spec.matches + ';')();
            } else {
                this.matches = spec.matches;
            }
        }
    };
    'use strict';
    (function (axe) {
        var definitions = [{
            name: 'NA',
            value: 'inapplicable',
            priority: 0,
            group: 'inapplicable'
        }, {
            name: 'PASS',
            value: 'passed',
            priority: 1,
            group: 'passes'
        }, {
            name: 'CANTTELL',
            value: 'cantTell',
            priority: 2,
            group: 'incomplete'
        }, {
            name: 'FAIL',
            value: 'failed',
            priority: 3,
            group: 'violations'
        }];
        var constants = {
            helpUrlBase: 'https://dequeuniversity.com/rules/',
            results: [],
            resultGroups: [],
            resultGroupMap: {},
            impact: Object.freeze(['minor', 'moderate', 'serious', 'critical'])
        };
        definitions.forEach(function (definition) {
            var name = definition.name;
            var value = definition.value;
            var priority = definition.priority;
            var group = definition.group;
            constants[name] = value;
            constants[name + '_PRIO'] = priority;
            constants[name + '_GROUP'] = group;
            constants.results[priority] = value;
            constants.resultGroups[priority] = group;
            constants.resultGroupMap[value] = group;
        });
        Object.freeze(constants.results);
        Object.freeze(constants.resultGroups);
        Object.freeze(constants.resultGroupMap);
        Object.freeze(constants);
        Object.defineProperty(axe, 'constants', {
            value: constants,
            enumerable: true,
            configurable: false,
            writable: false
        });
    })(axe);
    'use strict';
    var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };
    axe.log = function () {
        'use strict';
        if ((typeof console === 'undefined' ? 'undefined' : _typeof(console)) === 'object' && console.log) {
            Function.prototype.apply.call(console.log, console, arguments);
        }
    };
    'use strict';
    var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };
    axe.a11yCheck = function (context, options, callback) {
        'use strict';
        if (typeof options === 'function') {
            callback = options;
            options = {};
        }
        if (!options || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
            options = {};
        }
        var audit = axe._audit;
        if (!audit) {
            throw new Error('No audit configured');
        }
        options.reporter = options.reporter || audit.reporter || 'v2';
        if (options.performanceTimer) {
            axe.utils.performanceTimer.start();
        }
        var reporter = axe.getReporter(options.reporter);
        axe._runRules(context, options, function (results) {
            var res = reporter(results, options, callback);
            if (res !== undefined) {
                if (options.performanceTimer) {
                    axe.utils.performanceTimer.end();
                }
                callback(res);
            }
        }, axe.log);
    };
    'use strict';
    function cleanupPlugins(resolve, reject) {
        'use strict';
        if (!axe._audit) {
            throw new Error('No audit configured');
        }
        var q = axe.utils.queue();
        var cleanupErrors = [];
        Object.keys(axe.plugins).forEach(function (key) {
            q.defer(function (res) {
                var rej = function rej(err) {
                    cleanupErrors.push(err);
                    res();
                };
                try {
                    axe.plugins[key].cleanup(res, rej);
                } catch (err) {
                    rej(err);
                }
            });
        });
        axe.utils.toArray(document.querySelectorAll('frame, iframe')).forEach(function (frame) {
            q.defer(function (res, rej) {
                return axe.utils.sendCommandToFrame(frame, {
                    command: 'cleanup-plugin'
                }, res, rej);
            });
        });
        q.then(function (results) {
            if (cleanupErrors.length === 0) {
                resolve(results);
            } else {
                reject(cleanupErrors);
            }
        }).catch(reject);
    }
    axe.cleanup = cleanupPlugins;
    'use strict';
    function configureChecksRulesAndBranding(spec) {
        'use strict';
        var audit;
        audit = axe._audit;
        if (!audit) {
            throw new Error('No audit configured');
        }
        if (spec.reporter && (typeof spec.reporter === 'function' || reporters[spec.reporter])) {
            audit.reporter = spec.reporter;
        }
        if (spec.checks) {
            spec.checks.forEach(function (check) {
                audit.addCheck(check);
            });
        }
        if (spec.rules) {
            spec.rules.forEach(function (rule) {
                audit.addRule(rule);
            });
        }
        if (typeof spec.branding !== 'undefined') {
            audit.setBranding(spec.branding);
        } else {
            audit._constructHelpUrls();
        }
        if (spec.tagExclude) {
            audit.tagExclude = spec.tagExclude;
        }
    }
    axe.configure = configureChecksRulesAndBranding;
    'use strict';
    axe.getRules = function (tags) {
        'use strict';
        tags = tags || [];
        var matchingRules = !tags.length ? axe._audit.rules : axe._audit.rules.filter(function (item) {
            return !!tags.filter(function (tag) {
                return item.tags.indexOf(tag) !== -1;
            }).length;
        });
        var ruleData = axe._audit.data.rules || {};
        return matchingRules.map(function (matchingRule) {
            var rd = ruleData[matchingRule.id] || {};
            return {
                ruleId: matchingRule.id,
                description: rd.description,
                help: rd.help,
                helpUrl: rd.helpUrl,
                tags: matchingRule.tags
            };
        });
    };
    'use strict';
    function runCommand(data, keepalive, callback) {
        'use strict';
        var resolve = callback;
        var reject = function reject(err) {
            if (err instanceof Error === false) {
                err = new Error(err);
            }
            callback(err);
        };
        var context = data && data.context || {};
        if (context.hasOwnProperty('include') && !context.include.length) {
            context.include = [document];
        }
        var options = data && data.options || {};
        switch (data.command) {
            case 'rules':
                return runRules(context, options, resolve, reject);

            case 'cleanup-plugin':
                return cleanupPlugins(resolve, reject);

            default:
                if (axe._audit && axe._audit.commands && axe._audit.commands[data.command]) {
                    return axe._audit.commands[data.command](data, callback);
                }
        }
    }
    axe._load = function (audit) {
        'use strict';
        axe.utils.respondable.subscribe('axe.ping', function (data, keepalive, respond) {
            respond({
                axe: true
            });
        });
        axe.utils.respondable.subscribe('axe.start', runCommand);
        axe._audit = new Audit(audit);
    };
    'use strict';
    var axe = axe || {};
    axe.plugins = {};
    function Plugin(spec) {
        'use strict';
        this._run = spec.run;
        this._collect = spec.collect;
        this._registry = {};
        spec.commands.forEach(function (command) {
            axe._audit.registerCommand(command);
        });
    }
    Plugin.prototype.run = function () {
        'use strict';
        return this._run.apply(this, arguments);
    };
    Plugin.prototype.collect = function () {
        'use strict';
        return this._collect.apply(this, arguments);
    };
    Plugin.prototype.cleanup = function (done) {
        'use strict';
        var q = axe.utils.queue();
        var that = this;
        Object.keys(this._registry).forEach(function (key) {
            q.defer(function (done) {
                that._registry[key].cleanup(done);
            });
        });
        q.then(function () {
            done();
        });
    };
    Plugin.prototype.add = function (impl) {
        'use strict';
        this._registry[impl.id] = impl;
    };
    axe.registerPlugin = function (plugin) {
        'use strict';
        axe.plugins[plugin.id] = new Plugin(plugin);
    };
    'use strict';
    var reporters = {};
    var defaultReporter;
    axe.getReporter = function (reporter) {
        'use strict';
        if (typeof reporter === 'string' && reporters[reporter]) {
            return reporters[reporter];
        }
        if (typeof reporter === 'function') {
            return reporter;
        }
        return defaultReporter;
    };
    axe.addReporter = function registerReporter(name, cb, isDefault) {
        'use strict';
        reporters[name] = cb;
        if (isDefault) {
            defaultReporter = cb;
        }
    };
    'use strict';
    function resetConfiguration() {
        'use strict';
        var audit = axe._audit;
        if (!audit) {
            throw new Error('No audit configured');
        }
        audit.resetRulesAndChecks();
    }
    axe.reset = resetConfiguration;
    'use strict';
    function runRules(context, options, resolve, reject) {
        'use strict';
        try {
            context = new Context(context);
        } catch (e) {
            return reject(e);
        }
        var q = axe.utils.queue();
        var audit = axe._audit;
        if (options.performanceTimer) {
            axe.utils.performanceTimer.auditStart();
        }
        if (context.frames.length && options.iframes !== false) {
            q.defer(function (res, rej) {
                axe.utils.collectResultsFromFrames(context, options, 'rules', null, res, rej);
            });
        }
        var scrollState = void 0;
        q.defer(function (res, rej) {
            if (options.restoreScroll) {
                scrollState = axe.utils.getScrollState();
            }
            audit.run(context, options, res, rej);
        });
        q.then(function (data) {
            try {
                if (scrollState) {
                    axe.utils.setScrollState(scrollState);
                }
                if (options.performanceTimer) {
                    axe.utils.performanceTimer.auditEnd();
                }
                var results = axe.utils.mergeResults(data.map(function (d) {
                    return {
                        results: d
                    };
                }));
                if (context.initiator) {
                    results = audit.after(results, options);
                    results.forEach(axe.utils.publishMetaData);
                    results = results.map(axe.utils.finalizeRuleResult);
                }
                try {
                    resolve(results);
                } catch (e) {
                    axe.log(e);
                }
            } catch (e) {
                reject(e);
            }
        }).catch(reject);
    }
    axe._runRules = runRules;
    'use strict';
    var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };
    function isContext(potential) {
        'use strict';
        switch (true) {
            case typeof potential === 'string':
            case Array.isArray(potential):
            case Node && potential instanceof Node:
            case NodeList && potential instanceof NodeList:
                return true;

            case (typeof potential === 'undefined' ? 'undefined' : _typeof(potential)) !== 'object':
                return false;

            case potential.include !== undefined:
            case potential.exclude !== undefined:
            case typeof potential.length === 'number':
                return true;

            default:
                return false;
        }
    }
    var noop = function noop() { };
    function normalizeRunParams(context, options, callback) {
        'use strict';
        var typeErr = new TypeError('axe.run arguments are invalid');
        if (!isContext(context)) {
            if (callback !== undefined) {
                throw typeErr;
            }
            callback = options;
            options = context;
            context = document;
        }
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
            if (callback !== undefined) {
                throw typeErr;
            }
            callback = options;
            options = {};
        }
        if (typeof callback !== 'function' && callback !== undefined) {
            throw typeErr;
        }
        return {
            context: context,
            options: options,
            callback: callback || noop
        };
    }
    axe.run = function (context, options, callback) {
        'use strict';
        if (!axe._audit) {
            throw new Error('No audit configured');
        }
        var args = normalizeRunParams(context, options, callback);
        context = args.context;
        options = args.options;
        callback = args.callback;
        options.reporter = options.reporter || axe._audit.reporter || 'v1';
        if (options.performanceTimer) {
            axe.utils.performanceTimer.start();
        }
        var p = void 0;
        var reject = noop;
        var resolve = noop;
        if (window.Promise && callback === noop) {
            p = new Promise(function (_resolve, _reject) {
                reject = _reject;
                resolve = _resolve;
            });
        }
        axe._runRules(context, options, function (rawResults) {
            var respond = function respond(results) {
                try {
                    callback(null, results);
                } catch (e) {
                    axe.log(e);
                }
                resolve(results);
            };
            if (options.performanceTimer) {
                axe.utils.performanceTimer.end();
            }
            try {
                var reporter = axe.getReporter(options.reporter);
                var results = reporter(rawResults, options, respond);
                if (results !== undefined) {
                    respond(results);
                }
            } catch (err) {
                callback(err);
                reject(err);
            }
        }, function (err) {
            callback(err);
            reject(err);
        });
        return p;
    };
    'use strict';
    helpers.failureSummary = function failureSummary(nodeData) {
        'use strict';
        var failingChecks = {};
        failingChecks.none = nodeData.none.concat(nodeData.all);
        failingChecks.any = nodeData.any;
        return Object.keys(failingChecks).map(function (key) {
            if (!failingChecks[key].length) {
                return;
            }
            var sum = axe._audit.data.failureSummaries[key];
            if (sum && typeof sum.failureMessage === 'function') {
                return sum.failureMessage(failingChecks[key].map(function (check) {
                    return check.message || '';
                }));
            }
        }).filter(function (i) {
            return i !== undefined;
        }).join('\n\n');
    };
    'use strict';
    helpers.incompleteFallbackMessage = function incompleteFallbackMessage() {
        'use strict';
        return axe._audit.data.incompleteFallbackMessage();
    };
    'use strict';
    var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };
    function normalizeRelatedNodes(node, options) {
        'use strict';
        ['any', 'all', 'none'].forEach(function (type) {
            if (!Array.isArray(node[type])) {
                return;
            }
            node[type].filter(function (checkRes) {
                return Array.isArray(checkRes.relatedNodes);
            }).forEach(function (checkRes) {
                checkRes.relatedNodes = checkRes.relatedNodes.map(function (relatedNode) {
                    var res = {
                        html: relatedNode.source
                    };
                    if (options.elementRef && !relatedNode.fromFrame) {
                        res.element = relatedNode.element;
                    }
                    if (options.selectors !== false || relatedNode.fromFrame) {
                        res.target = relatedNode.selector;
                    }
                    if (options.xpath) {
                        res.xpath = relatedNode.xpath;
                    }
                    return res;
                });
            });
        });
    }
    var resultKeys = axe.constants.resultGroups;
    helpers.processAggregate = function (results, options) {
        var resultObject = axe.utils.aggregateResult(results);
        resultObject.timestamp = new Date().toISOString();
        resultObject.url = window.location.href;
        resultKeys.forEach(function (key) {
            if (options.resultTypes && !options.resultTypes.includes(key)) {
                (resultObject[key] || []).forEach(function (ruleResult) {
                    if (Array.isArray(ruleResult.nodes) && ruleResult.nodes.length > 0) {
                        ruleResult.nodes = [ruleResult.nodes[0]];
                    }
                });
            }
            resultObject[key] = (resultObject[key] || []).map(function (ruleResult) {
                ruleResult = Object.assign({}, ruleResult);
                if (Array.isArray(ruleResult.nodes) && ruleResult.nodes.length > 0) {
                    ruleResult.nodes = ruleResult.nodes.map(function (subResult) {
                        if (_typeof(subResult.node) === 'object') {
                            subResult.html = subResult.node.source;
                            if (options.elementRef && !subResult.node.fromFrame) {
                                subResult.element = subResult.node.element;
                            }
                            if (options.selectors !== false || subResult.node.fromFrame) {
                                subResult.target = subResult.node.selector;
                            }
                            if (options.xpath) {
                                subResult.xpath = subResult.node.xpath;
                            }
                        }
                        delete subResult.result;
                        delete subResult.node;
                        normalizeRelatedNodes(subResult, options);
                        return subResult;
                    });
                }
                resultKeys.forEach(function (key) {
                    return delete ruleResult[key];
                });
                delete ruleResult.pageLevel;
                delete ruleResult.result;
                return ruleResult;
            });
        });
        return resultObject;
    };
    'use strict';
    axe.addReporter('na', function (results, options, callback) {
        'use strict';
        if (typeof options === 'function') {
            callback = options;
            options = {};
        }
        var out = helpers.processAggregate(results, options);
        callback({
            violations: out.violations,
            passes: out.passes,
            incomplete: out.incomplete,
            inapplicable: out.inapplicable,
            timestamp: out.timestamp,
            url: out.url
        });
    });
    'use strict';
    axe.addReporter('no-passes', function (results, options, callback) {
        'use strict';
        if (typeof options === 'function') {
            callback = options;
            options = {};
        }
        options.resultTypes = ['violations'];
        var out = helpers.processAggregate(results, options);
        callback({
            violations: out.violations,
            timestamp: out.timestamp,
            url: out.url
        });
    });
    'use strict';
    axe.addReporter('raw', function (results, options, callback) {
        'use strict';
        if (typeof options === 'function') {
            callback = options;
            options = {};
        }
        callback(results);
    });
    'use strict';
    axe.addReporter('v1', function (results, options, callback) {
        'use strict';
        if (typeof options === 'function') {
            callback = options;
            options = {};
        }
        var out = helpers.processAggregate(results, options);
        out.violations.forEach(function (result) {
            return result.nodes.forEach(function (nodeResult) {
                nodeResult.failureSummary = helpers.failureSummary(nodeResult);
            });
        });
        callback({
            violations: out.violations,
            passes: out.passes,
            incomplete: out.incomplete,
            inapplicable: out.inapplicable,
            timestamp: out.timestamp,
            url: out.url
        });
    });
    'use strict';
    axe.addReporter('v2', function (results, options, callback) {
        'use strict';
        if (typeof options === 'function') {
            callback = options;
            options = {};
        }
        var out = helpers.processAggregate(results, options);
        callback({
            violations: out.violations,
            passes: out.passes,
            incomplete: out.incomplete,
            inapplicable: out.inapplicable,
            timestamp: out.timestamp,
            url: out.url
        });
    }, true);
    'use strict';
    axe.utils.aggregate = function (map, values, initial) {
        values = values.slice();
        if (initial) {
            values.push(initial);
        }
        var sorting = values.map(function (val) {
            return map.indexOf(val);
        }).sort();
        return map[sorting.pop()];
    };
    'use strict';
    var _axe$constants = axe.constants, CANTTELL_PRIO = _axe$constants.CANTTELL_PRIO, FAIL_PRIO = _axe$constants.FAIL_PRIO;
    var checkMap = [];
    checkMap[axe.constants.PASS_PRIO] = true;
    checkMap[axe.constants.CANTTELL_PRIO] = null;
    checkMap[axe.constants.FAIL_PRIO] = false;
    var checkTypes = ['any', 'all', 'none'];
    function anyAllNone(obj, functor) {
        return checkTypes.reduce(function (out, type) {
            out[type] = (obj[type] || []).map(function (val) {
                return functor(val, type);
            });
            return out;
        }, {});
    }
    axe.utils.aggregateChecks = function (nodeResOriginal) {
        var nodeResult = Object.assign({}, nodeResOriginal);
        anyAllNone(nodeResult, function (check, type) {
            var i = checkMap.indexOf(check.result);
            check.priority = i !== -1 ? i : axe.constants.CANTTELL_PRIO;
            if (type === 'none') {
                check.priority = 4 - check.priority;
            }
        });
        var priorities = {
            all: nodeResult.all.reduce(function (a, b) {
                return Math.max(a, b.priority);
            }, 0),
            none: nodeResult.none.reduce(function (a, b) {
                return Math.max(a, b.priority);
            }, 0),
            any: nodeResult.any.reduce(function (a, b) {
                return Math.min(a, b.priority);
            }, 4) % 4
        };
        nodeResult.priority = Math.max(priorities.all, priorities.none, priorities.any);
        var impacts = [];
        checkTypes.forEach(function (type) {
            nodeResult[type] = nodeResult[type].filter(function (check) {
                return check.priority === nodeResult.priority && check.priority === priorities[type];
            });
            nodeResult[type].forEach(function (check) {
                return impacts.push(check.impact);
            });
        });
        if ([CANTTELL_PRIO, FAIL_PRIO].includes(nodeResult.priority)) {
            nodeResult.impact = axe.utils.aggregate(axe.constants.impact, impacts);
        } else {
            nodeResult.impact = null;
        }
        anyAllNone(nodeResult, function (c) {
            delete c.result;
            delete c.priority;
        });
        nodeResult.result = axe.constants.results[nodeResult.priority];
        delete nodeResult.priority;
        return nodeResult;
    };
    'use strict';
    (function () {
        axe.utils.aggregateNodeResults = function (nodeResults) {
            var ruleResult = {};
            nodeResults = nodeResults.map(function (nodeResult) {
                if (nodeResult.any && nodeResult.all && nodeResult.none) {
                    return axe.utils.aggregateChecks(nodeResult);
                } else if (Array.isArray(nodeResult.node)) {
                    return axe.utils.finalizeRuleResult(nodeResult);
                } else {
                    throw new TypeError('Invalid Result type');
                }
            });
            if (nodeResults && nodeResults.length) {
                var resultList = nodeResults.map(function (node) {
                    return node.result;
                });
                ruleResult.result = axe.utils.aggregate(axe.constants.results, resultList, ruleResult.result);
            } else {
                ruleResult.result = 'inapplicable';
            }
            axe.constants.resultGroups.forEach(function (group) {
                return ruleResult[group] = [];
            });
            nodeResults.forEach(function (nodeResult) {
                var groupName = axe.constants.resultGroupMap[nodeResult.result];
                ruleResult[groupName].push(nodeResult);
            });
            var impactGroup = axe.constants.FAIL_GROUP;
            if (ruleResult[impactGroup].length === 0) {
                impactGroup = axe.constants.CANTTELL_GROUP;
            }
            if (ruleResult[impactGroup].length > 0) {
                var impactList = ruleResult[impactGroup].map(function (failure) {
                    return failure.impact;
                });
                ruleResult.impact = axe.utils.aggregate(axe.constants.impact, impactList) || null;
            } else {
                ruleResult.impact = null;
            }
            return ruleResult;
        };
    })();
    'use strict';
    function copyToGroup(resultObject, subResult, group) {
        var resultCopy = Object.assign({}, subResult);
        resultCopy.nodes = (resultCopy[group] || []).concat();
        axe.constants.resultGroups.forEach(function (group) {
            delete resultCopy[group];
        });
        resultObject[group].push(resultCopy);
    }
    axe.utils.aggregateResult = function (results) {
        var resultObject = {};
        axe.constants.resultGroups.forEach(function (groupName) {
            return resultObject[groupName] = [];
        });
        results.forEach(function (subResult) {
            if (subResult.error) {
                copyToGroup(resultObject, subResult, axe.constants.CANTTELL_GROUP);
            } else if (subResult.result === axe.constants.NA) {
                copyToGroup(resultObject, subResult, axe.constants.NA_GROUP);
            } else {
                axe.constants.resultGroups.forEach(function (group) {
                    if (Array.isArray(subResult[group]) && subResult[group].length > 0) {
                        copyToGroup(resultObject, subResult, group);
                    }
                });
            }
        });
        return resultObject;
    };
    'use strict';
    function areStylesSet(el, styles, stopAt) {
        'use strict';
        var styl = window.getComputedStyle(el, null);
        var set = false;
        if (!styl) {
            return false;
        }
        styles.forEach(function (att) {
            if (styl.getPropertyValue(att.property) === att.value) {
                set = true;
            }
        });
        if (set) {
            return true;
        }
        if (el.nodeName.toUpperCase() === stopAt.toUpperCase() || !el.parentNode) {
            return false;
        }
        return areStylesSet(el.parentNode, styles, stopAt);
    }
    axe.utils.areStylesSet = areStylesSet;
    'use strict';
    axe.utils.checkHelper = function checkHelper(checkResult, options, resolve, reject) {
        'use strict';
        return {
            isAsync: false,
            async: function async() {
                this.isAsync = true;
                return function (result) {
                    if (result instanceof Error === false) {
                        checkResult.result = result;
                        resolve(checkResult);
                    } else {
                        reject(result);
                    }
                };
            },
            data: function data(_data) {
                checkResult.data = _data;
            },
            relatedNodes: function relatedNodes(nodes) {
                nodes = nodes instanceof Node ? [nodes] : axe.utils.toArray(nodes);
                checkResult.relatedNodes = nodes.map(function (element) {
                    return new axe.utils.DqElement(element, options);
                });
            }
        };
    };
    'use strict';
    var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };
    axe.utils.clone = function (obj) {
        'use strict';
        var index, length, out = obj;
        if (obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
            if (Array.isArray(obj)) {
                out = [];
                for (index = 0, length = obj.length; index < length; index++) {
                    out[index] = axe.utils.clone(obj[index]);
                }
            } else {
                out = {};
                for (index in obj) {
                    out[index] = axe.utils.clone(obj[index]);
                }
            }
        }
        return out;
    };
    'use strict';
    function err(message, node) {
        'use strict';
        return new Error(message + ': ' + axe.utils.getSelector(node));
    }
    axe.utils.sendCommandToFrame = function (node, parameters, resolve, reject) {
        'use strict';
        var win = node.contentWindow;
        if (!win) {
            axe.log('Frame does not have a content window', node);
            resolve(null);
            return;
        }
        var timeout = setTimeout(function () {
            timeout = setTimeout(function () {
                var errMsg = err('No response from frame', node);
                if (!parameters.debug) {
                    axe.log(errMsg);
                    resolve(null);
                } else {
                    reject(errMsg);
                }
            }, 0);
        }, 500);
        axe.utils.respondable(win, 'axe.ping', null, undefined, function () {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                reject(err('Axe in frame timed out', node));
            }, 3e4);
            axe.utils.respondable(win, 'axe.start', parameters, undefined, function (data) {
                clearTimeout(timeout);
                if (data instanceof Error === false) {
                    resolve(data);
                } else {
                    reject(data);
                }
            });
        });
    };
    function collectResultsFromFrames(context, options, command, parameter, resolve, reject) {
        'use strict';
        var q = axe.utils.queue();
        var frames = context.frames;
        frames.forEach(function (frame) {
            var params = {
                options: options,
                command: command,
                parameter: parameter,
                context: {
                    initiator: false,
                    page: context.page,
                    include: frame.include || [],
                    exclude: frame.exclude || []
                }
            };
            q.defer(function (res, rej) {
                var node = frame.node;
                axe.utils.sendCommandToFrame(node, params, function (data) {
                    if (data) {
                        return res({
                            results: data,
                            frameElement: node,
                            frame: axe.utils.getSelector(node)
                        });
                    }
                    res(null);
                }, rej);
            });
        });
        q.then(function (data) {
            resolve(axe.utils.mergeResults(data, options));
        }).catch(reject);
    }
    axe.utils.collectResultsFromFrames = collectResultsFromFrames;
    'use strict';
    axe.utils.contains = function (node, otherNode) {
        'use strict';
        if (typeof node.contains === 'function') {
            return node.contains(otherNode);
        }
        return !!(node.compareDocumentPosition(otherNode) & 16);
    };
    'use strict';
    function truncate(str, maxLength) {
        maxLength = maxLength || 300;
        if (str.length > maxLength) {
            var index = str.indexOf('>');
            str = str.substring(0, index + 1);
        }
        return str;
    }
    function getSource(element) {
        var source = element.outerHTML;
        if (!source && typeof XMLSerializer === 'function') {
            source = new XMLSerializer().serializeToString(element);
        }
        return truncate(source || '');
    }
    function DqElement(element, options, spec) {
        this._fromFrame = !!spec;
        this.spec = spec || {};
        if (options && options.absolutePaths) {
            this._options = {
                toRoot: true
            };
        }
        this.source = this.spec.source !== undefined ? this.spec.source : getSource(element);
        this._element = element;
    }
    DqElement.prototype = {
        get selector() {
            return this.spec.selector || [axe.utils.getSelector(this.element, this._options)];
        },
        get xpath() {
            return this.spec.xpath || [axe.utils.getXpath(this.element)];
        },
        get element() {
            return this._element;
        },
        get fromFrame() {
            return this._fromFrame;
        },
        toJSON: function toJSON() {
            'use strict';
            return {
                selector: this.selector,
                source: this.source,
                xpath: this.xpath
            };
        }
    };
    DqElement.fromFrame = function (node, options, frame) {
        node.selector.unshift(frame.selector);
        node.xpath.unshift(frame.xpath);
        return new axe.utils.DqElement(frame.element, options, node);
    };
    axe.utils.DqElement = DqElement;
    'use strict';
    axe.utils.matchesSelector = function () {
        'use strict';
        var method;
        function getMethod(win) {
            var index, candidate, elProto = win.Element.prototype, candidates = ['matches', 'matchesSelector', 'mozMatchesSelector', 'webkitMatchesSelector', 'msMatchesSelector'], length = candidates.length;
            for (index = 0; index < length; index++) {
                candidate = candidates[index];
                if (elProto[candidate]) {
                    return candidate;
                }
            }
        }
        return function (node, selector) {
            if (!method || !node[method]) {
                method = getMethod(node.ownerDocument.defaultView);
            }
            return node[method](selector);
        };
    }();
    'use strict';
    axe.utils.escapeSelector = function (value) {
        'use strict';
        var string = String(value);
        var length = string.length;
        var index = -1;
        var codeUnit;
        var result = '';
        var firstCodeUnit = string.charCodeAt(0);
        while (++index < length) {
            codeUnit = string.charCodeAt(index);
            if (codeUnit == 0) {
                throw new Error('INVALID_CHARACTER_ERR');
            }
            if (codeUnit >= 1 && codeUnit <= 31 || codeUnit >= 127 && codeUnit <= 159 || index == 0 && codeUnit >= 48 && codeUnit <= 57 || index == 1 && codeUnit >= 48 && codeUnit <= 57 && firstCodeUnit == 45) {
                result += '\\' + codeUnit.toString(16) + ' ';
                continue;
            }
            if (index == 1 && codeUnit == 45 && firstCodeUnit == 45) {
                result += '\\' + string.charAt(index);
                continue;
            }
            if (codeUnit >= 128 || codeUnit == 45 || codeUnit == 95 || codeUnit >= 48 && codeUnit <= 57 || codeUnit >= 65 && codeUnit <= 90 || codeUnit >= 97 && codeUnit <= 122) {
                result += string.charAt(index);
                continue;
            }
            result += '\\' + string.charAt(index);
        }
        return result;
    };
    'use strict';
    axe.utils.extendMetaData = function (to, from) {
        Object.assign(to, from);
        Object.keys(from).filter(function (prop) {
            return typeof from[prop] === 'function';
        }).forEach(function (prop) {
            to[prop] = null;
            try {
                to[prop] = from[prop](to);
            } catch (e) { }
        });
    };
    'use strict';
    axe.utils.finalizeRuleResult = function (ruleResult) {
        Object.assign(ruleResult, axe.utils.aggregateNodeResults(ruleResult.nodes));
        delete ruleResult.nodes;
        return ruleResult;
    };
    'use strict';
    var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };
    axe.utils.findBy = function (array, key, value) {
        if (Array.isArray(array)) {
            return array.find(function (obj) {
                return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj[key] === value;
            });
        }
    };
    'use strict';
    axe.utils.getAllChecks = function getAllChecks(object) {
        'use strict';
        var result = [];
        return result.concat(object.any || []).concat(object.all || []).concat(object.none || []);
    };
    'use strict';
    axe.utils.getCheckOption = function (check, ruleID, options) {
        var ruleCheckOption = ((options.rules && options.rules[ruleID] || {}).checks || {})[check.id];
        var checkOption = (options.checks || {})[check.id];
        var enabled = check.enabled;
        var opts = check.options;
        if (checkOption) {
            if (checkOption.hasOwnProperty('enabled')) {
                enabled = checkOption.enabled;
            }
            if (checkOption.hasOwnProperty('options')) {
                opts = checkOption.options;
            }
        }
        if (ruleCheckOption) {
            if (ruleCheckOption.hasOwnProperty('enabled')) {
                enabled = ruleCheckOption.enabled;
            }
            if (ruleCheckOption.hasOwnProperty('options')) {
                opts = ruleCheckOption.options;
            }
        }
        return {
            enabled: enabled,
            options: opts,
            absolutePaths: options.absolutePaths
        };
    };
    'use strict';
    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;
            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);
                    if (i && _arr.length === i) {
                        break;
                    }
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i['return']) {
                        _i['return']();
                    }
                } finally {
                    if (_d) {
                        throw _e;
                    }
                }
            }
            return _arr;
        }
        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
            }
        };
    }();
    function isMostlyNumbers() {
        var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        return str.length !== 0 && (str.match(/[0-9]/g) || '').length >= str.length / 2;
    }
    function splitString(str, splitIndex) {
        return [str.substring(0, splitIndex), str.substring(splitIndex)];
    }
    function uriParser(url) {
        var original = url;
        var protocol = '', domain = '', port = '', path = '', query = '', hash = '';
        if (url.includes('#')) {
            var _splitString = splitString(url, url.indexOf('#'));
            var _splitString2 = _slicedToArray(_splitString, 2);
            url = _splitString2[0];
            hash = _splitString2[1];
        }
        if (url.includes('?')) {
            var _splitString3 = splitString(url, url.indexOf('?'));
            var _splitString4 = _slicedToArray(_splitString3, 2);
            url = _splitString4[0];
            query = _splitString4[1];
        }
        if (url.includes('://')) {
            var _url$split = url.split('://');
            var _url$split2 = _slicedToArray(_url$split, 2);
            protocol = _url$split2[0];
            url = _url$split2[1];
            var _splitString5 = splitString(url, url.indexOf('/'));
            var _splitString6 = _slicedToArray(_splitString5, 2);
            domain = _splitString6[0];
            url = _splitString6[1];
        } else if (url.substr(0, 2) === '//') {
            url = url.substr(2);
            var _splitString7 = splitString(url, url.indexOf('/'));
            var _splitString8 = _slicedToArray(_splitString7, 2);
            domain = _splitString8[0];
            url = _splitString8[1];
        }
        if (domain.substr(0, 4) === 'www.') {
            domain = domain.substr(4);
        }
        if (domain && domain.includes(':')) {
            var _splitString9 = splitString(domain, domain.indexOf(':'));
            var _splitString10 = _slicedToArray(_splitString9, 2);
            domain = _splitString10[0];
            port = _splitString10[1];
        }
        path = url;
        return {
            original: original,
            protocol: protocol,
            domain: domain,
            port: port,
            path: path,
            query: query,
            hash: hash
        };
    }
    axe.utils.getFriendlyUriEnd = function getFriendlyUriEnd() {
        var uri = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (uri.length <= 1 || uri.substr(0, 5) === 'data:' || uri.substr(0, 11) === 'javascript:' || uri.includes('?')) {
            return;
        }
        var currentDomain = options.currentDomain, _options$maxLength = options.maxLength, maxLength = _options$maxLength === undefined ? 25 : _options$maxLength;
        var _uriParser = uriParser(uri), path = _uriParser.path, domain = _uriParser.domain, hash = _uriParser.hash;
        var pathEnd = path.substr(path.substr(0, path.length - 2).lastIndexOf('/') + 1);
        if (hash) {
            if (pathEnd && (pathEnd + hash).length <= maxLength) {
                return pathEnd + hash;
            } else if (pathEnd.length < 2 && hash.length > 2 && hash.length <= maxLength) {
                return hash;
            } else {
                return;
            }
        } else if (domain && domain.length < maxLength && path.length <= 1) {
            return domain + path;
        }
        if (path === '/' + pathEnd && domain && currentDomain && domain !== currentDomain && (domain + path).length <= maxLength) {
            return domain + path;
        }
        var lastDotIndex = pathEnd.lastIndexOf('.');
        if ((lastDotIndex === -1 || lastDotIndex > 1) && (lastDotIndex !== -1 || pathEnd.length > 2) && pathEnd.length <= maxLength && !pathEnd.match(/index(\.[a-zA-Z]{2-4})?/) && !isMostlyNumbers(pathEnd)) {
            return pathEnd;
        }
    };
    'use strict';
    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }
            return arr2;
        } else {
            return Array.from(arr);
        }
    }
    var escapeSelector = axe.utils.escapeSelector;
    var isXHTML = void 0;
    function isUncommonClassName(className) {
        return !['focus', 'hover', 'hidden', 'visible', 'dirty', 'touched', 'valid', 'disable', 'enable', 'active', 'col-'].find(function (str) {
            return className.includes(str);
        });
    }
    function getDistinctClassList(elm) {
        if (!elm.classList || elm.classList.length === 0) {
            return [];
        }
        var siblings = elm.parentNode && Array.from(elm.parentNode.children || '') || [];
        return siblings.reduce(function (classList, childElm) {
            if (elm === childElm) {
                return classList;
            } else {
                return classList.filter(function (classItem) {
                    return !childElm.classList.contains(classItem);
                });
            }
        }, Array.from(elm.classList).filter(isUncommonClassName));
    }
    var commonNodes = ['div', 'span', 'p', 'b', 'i', 'u', 'strong', 'em', 'h2', 'h3'];
    function getNthChildString(elm, selector) {
        var siblings = elm.parentNode && Array.from(elm.parentNode.children || '') || [];
        var hasMatchingSiblings = siblings.find(function (sibling) {
            return sibling !== elm && axe.utils.matchesSelector(sibling, selector);
        });
        if (hasMatchingSiblings) {
            var nthChild = 1 + siblings.indexOf(elm);
            return ':nth-child(' + nthChild + ')';
        } else {
            return '';
        }
    }
    var createSelector = {
        getElmId: function getElmId(elm) {
            if (!elm.getAttribute('id')) {
                return;
            }
            var id = '#' + escapeSelector(elm.getAttribute('id') || '');
            if (!id.match(/player_uid_/) && document.querySelectorAll(id).length === 1) {
                return id;
            }
        },
        getCustomElm: function getCustomElm(elm, _ref) {
            var isCustomElm = _ref.isCustomElm, nodeName = _ref.nodeName;
            if (isCustomElm) {
                return nodeName;
            }
        },
        getElmRoleProp: function getElmRoleProp(elm) {
            if (elm.hasAttribute('role')) {
                return '[role="' + escapeSelector(elm.getAttribute('role')) + '"]';
            }
        },
        getUncommonElm: function getUncommonElm(elm, _ref2) {
            var isCommonElm = _ref2.isCommonElm, isCustomElm = _ref2.isCustomElm, nodeName = _ref2.nodeName;
            if (!isCommonElm && !isCustomElm) {
                if (nodeName === 'input' && elm.hasAttribute('type')) {
                    nodeName += '[type="' + elm.type + '"]';
                }
                return nodeName;
            }
        },
        getElmNameProp: function getElmNameProp(elm) {
            if (!elm.hasAttribute('id') && elm.name) {
                return '[name="' + escapeSelector(elm.name) + '"]';
            }
        },
        getDistinctClass: function getDistinctClass(elm, _ref3) {
            var distinctClassList = _ref3.distinctClassList;
            if (distinctClassList.length > 0 && distinctClassList.length < 3) {
                return '.' + distinctClassList.map(escapeSelector).join('.');
            }
        },
        getFileRefProp: function getFileRefProp(elm) {
            var attr = void 0;
            if (elm.hasAttribute('href')) {
                attr = 'href';
            } else if (elm.hasAttribute('src')) {
                attr = 'src';
            } else {
                return;
            }
            var friendlyUriEnd = axe.utils.getFriendlyUriEnd(elm.getAttribute(attr));
            if (friendlyUriEnd) {
                return '[' + attr + '$="' + encodeURI(friendlyUriEnd) + '"]';
            }
        },
        getCommonName: function getCommonName(elm, _ref4) {
            var nodeName = _ref4.nodeName, isCommonElm = _ref4.isCommonElm;
            if (isCommonElm) {
                return nodeName;
            }
        }
    };
    function getElmFeatures(elm, featureCount) {
        if (typeof isXHTML === 'undefined') {
            isXHTML = axe.utils.isXHTML(document);
        }
        var nodeName = escapeSelector(isXHTML ? elm.localName : elm.nodeName.toLowerCase());
        var classList = Array.from(elm.classList) || [];
        var props = {
            nodeName: nodeName,
            classList: classList,
            isCustomElm: nodeName.includes('-'),
            isCommonElm: commonNodes.includes(nodeName),
            distinctClassList: getDistinctClassList(elm)
        };
        return [createSelector.getCustomElm, createSelector.getElmRoleProp, createSelector.getUncommonElm, createSelector.getElmNameProp, createSelector.getDistinctClass, createSelector.getFileRefProp, createSelector.getCommonName].reduce(function (features, func) {
            if (features.length === featureCount) {
                return features;
            }
            var feature = func(elm, props);
            if (feature) {
                if (!feature[0].match(/[a-z]/)) {
                    features.push(feature);
                } else {
                    features.unshift(feature);
                }
            }
            return features;
        }, []);
    }
    axe.utils.getSelector = function createUniqueSelector(elm) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!elm) {
            return '';
        }
        var selector = void 0, addParent = void 0;
        var _options$isUnique = options.isUnique, isUnique = _options$isUnique === undefined ? false : _options$isUnique;
        var idSelector = createSelector.getElmId(elm);
        var _options$featureCount = options.featureCount, featureCount = _options$featureCount === undefined ? 2 : _options$featureCount, _options$minDepth = options.minDepth, minDepth = _options$minDepth === undefined ? 1 : _options$minDepth, _options$toRoot = options.toRoot, toRoot = _options$toRoot === undefined ? false : _options$toRoot, _options$childSelecto = options.childSelectors, childSelectors = _options$childSelecto === undefined ? [] : _options$childSelecto;
        if (idSelector) {
            selector = idSelector;
            isUnique = true;
        } else {
            selector = getElmFeatures(elm, featureCount).join('');
            selector += getNthChildString(elm, selector);
            isUnique = options.isUnique || document.querySelectorAll(selector).length === 1;
            if (!isUnique && elm === document.documentElement) {
                selector += ':root';
            }
            addParent = minDepth !== 0 || !isUnique;
        }
        var selectorParts = [selector].concat(_toConsumableArray(childSelectors));
        if (elm.parentElement && (toRoot || addParent)) {
            return createUniqueSelector(elm.parentNode, {
                toRoot: toRoot,
                isUnique: isUnique,
                childSelectors: selectorParts,
                featureCount: 1,
                minDepth: minDepth - 1
            });
        } else {
            return selectorParts.join(' > ');
        }
    };
    'use strict';
    function getXPathArray(node, path) {
        var sibling, count;
        if (!node) {
            return [];
        }
        if (!path && node.nodeType === 9) {
            path = [{
                str: 'html'
            }];
            return path;
        }
        path = path || [];
        if (node.parentNode && node.parentNode !== node) {
            path = getXPathArray(node.parentNode, path);
        }
        if (node.previousSibling) {
            count = 1;
            sibling = node.previousSibling;
            do {
                if (sibling.nodeType === 1 && sibling.nodeName === node.nodeName) {
                    count++;
                }
                sibling = sibling.previousSibling;
            } while (sibling);
            if (count === 1) {
                count = null;
            }
        } else if (node.nextSibling) {
            sibling = node.nextSibling;
            do {
                if (sibling.nodeType === 1 && sibling.nodeName === node.nodeName) {
                    count = 1;
                    sibling = null;
                } else {
                    count = null;
                    sibling = sibling.previousSibling;
                }
            } while (sibling);
        }
        if (node.nodeType === 1) {
            var element = {};
            element.str = node.nodeName.toLowerCase();
            var id = node.getAttribute && axe.utils.escapeSelector(node.getAttribute('id'));
            if (id && node.ownerDocument.querySelectorAll('#' + id).length === 1) {
                element.id = node.getAttribute('id');
            }
            if (count > 1) {
                element.count = count;
            }
            path.push(element);
        }
        return path;
    }
    function xpathToString(xpathArray) {
        return xpathArray.reduce(function (str, elm) {
            if (elm.id) {
                return '/' + elm.str + '[@id=\'' + elm.id + '\']';
            } else {
                return str + ('/' + elm.str) + (elm.count > 0 ? '[' + elm.count + ']' : '');
            }
        }, '');
    }
    axe.utils.getXpath = function getXpath(node) {
        var xpathArray = getXPathArray(node);
        return xpathToString(xpathArray);
    };
    'use strict';
    var styleSheet;
    function injectStyle(style) {
        'use strict';
        if (styleSheet && styleSheet.parentNode) {
            if (styleSheet.styleSheet === undefined) {
                styleSheet.appendChild(document.createTextNode(style));
            } else {
                styleSheet.styleSheet.cssText += style;
            }
            return styleSheet;
        }
        if (!style) {
            return;
        }
        var head = document.head || document.getElementsByTagName('head')[0];
        styleSheet = document.createElement('style');
        styleSheet.type = 'text/css';
        if (styleSheet.styleSheet === undefined) {
            styleSheet.appendChild(document.createTextNode(style));
        } else {
            styleSheet.styleSheet.cssText = style;
        }
        head.appendChild(styleSheet);
        return styleSheet;
    }
    axe.utils.injectStyle = injectStyle;
    'use strict';
    axe.utils.isHidden = function isHidden(el, recursed) {
        'use strict';
        if (el.nodeType === 9) {
            return false;
        }
        var style = window.getComputedStyle(el, null);
        if (!style || !el.parentNode || style.getPropertyValue('display') === 'none' || !recursed && style.getPropertyValue('visibility') === 'hidden' || el.getAttribute('aria-hidden') === 'true') {
            return true;
        }
        return axe.utils.isHidden(el.parentNode, true);
    };
    'use strict';
    axe.utils.isXHTML = function (doc) {
        'use strict';
        if (!doc.createElement) {
            return false;
        }
        return doc.createElement('A').localName === 'A';
    };
    'use strict';
    function pushFrame(resultSet, options, frameElement, frameSelector) {
        'use strict';
        var frameXpath = axe.utils.getXpath(frameElement);
        var frameSpec = {
            element: frameElement,
            selector: frameSelector,
            xpath: frameXpath
        };
        resultSet.forEach(function (res) {
            res.node = axe.utils.DqElement.fromFrame(res.node, options, frameSpec);
            var checks = axe.utils.getAllChecks(res);
            if (checks.length) {
                checks.forEach(function (check) {
                    check.relatedNodes = check.relatedNodes.map(function (node) {
                        return axe.utils.DqElement.fromFrame(node, options, frameSpec);
                    });
                });
            }
        });
    }
    function spliceNodes(target, to) {
        'use strict';
        var firstFromFrame = to[0].node, sorterResult, t;
        for (var i = 0, l = target.length; i < l; i++) {
            t = target[i].node;
            sorterResult = axe.utils.nodeSorter(t.element, firstFromFrame.element);
            if (sorterResult > 0 || sorterResult === 0 && firstFromFrame.selector.length < t.selector.length) {
                target.splice.apply(target, [i, 0].concat(to));
                return;
            }
        }
        target.push.apply(target, to);
    }
    function normalizeResult(result) {
        'use strict';
        if (!result || !result.results) {
            return null;
        }
        if (!Array.isArray(result.results)) {
            return [result.results];
        }
        if (!result.results.length) {
            return null;
        }
        return result.results;
    }
    axe.utils.mergeResults = function mergeResults(frameResults, options) {
        'use strict';
        var result = [];
        frameResults.forEach(function (frameResult) {
            var results = normalizeResult(frameResult);
            if (!results || !results.length) {
                return;
            }
            results.forEach(function (ruleResult) {
                if (ruleResult.nodes && frameResult.frame) {
                    pushFrame(ruleResult.nodes, options, frameResult.frameElement, frameResult.frame);
                }
                var res = axe.utils.findBy(result, 'id', ruleResult.id);
                if (!res) {
                    result.push(ruleResult);
                } else {
                    if (ruleResult.nodes.length) {
                        spliceNodes(res.nodes, ruleResult.nodes);
                    }
                }
            });
        });
        return result;
    };
    'use strict';
    axe.utils.nodeSorter = function nodeSorter(a, b) {
        'use strict';
        if (a === b) {
            return 0;
        }
        if (a.compareDocumentPosition(b) & 4) {
            return -1;
        }
        return 1;
    };
    'use strict';
    utils.performanceTimer = function () {
        'use strict';
        function now() {
            if (window.performance && window.performance) {
                return window.performance.now();
            }
        }
        var originalTime = null;
        var lastRecordedTime = now();
        return {
            start: function start() {
                this.mark('mark_axe_start');
            },
            end: function end() {
                this.mark('mark_axe_end');
                this.measure('axe', 'mark_axe_start', 'mark_axe_end');
                this.logMeasures('axe');
            },
            auditStart: function auditStart() {
                this.mark('mark_audit_start');
            },
            auditEnd: function auditEnd() {
                this.mark('mark_audit_end');
                this.measure('audit_start_to_end', 'mark_audit_start', 'mark_audit_end');
                this.logMeasures();
            },
            mark: function mark(markName) {
                if (window.performance && window.performance.mark !== undefined) {
                    window.performance.mark(markName);
                }
            },
            measure: function measure(measureName, startMark, endMark) {
                if (window.performance && window.performance.measure !== undefined) {
                    window.performance.measure(measureName, startMark, endMark);
                }
            },
            logMeasures: function logMeasures(measureName) {
                function log(req) {
                    axe.log('Measure ' + req.name + ' took ' + req.duration + 'ms');
                }
                if (window.performance && window.performance.getEntriesByType !== undefined) {
                    var measures = window.performance.getEntriesByType('measure');
                    for (var i = 0; i < measures.length; ++i) {
                        var req = measures[i];
                        if (req.name === measureName) {
                            log(req);
                            return;
                        }
                        log(req);
                    }
                }
            },
            timeElapsed: function timeElapsed() {
                return now() - lastRecordedTime;
            },
            reset: function reset() {
                if (!originalTime) {
                    originalTime = now();
                }
                lastRecordedTime = now();
            }
        };
    }();
    'use strict';
    if (typeof Object.assign !== 'function') {
        (function () {
            Object.assign = function (target) {
                'use strict';
                if (target === undefined || target === null) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }
                var output = Object(target);
                for (var index = 1; index < arguments.length; index++) {
                    var source = arguments[index];
                    if (source !== undefined && source !== null) {
                        for (var nextKey in source) {
                            if (source.hasOwnProperty(nextKey)) {
                                output[nextKey] = source[nextKey];
                            }
                        }
                    }
                }
                return output;
            };
        })();
    }
    if (!Array.prototype.find) {
        Object.defineProperty(Array.prototype, 'find', {
            value: function value(predicate) {
                if (this === null) {
                    throw new TypeError('Array.prototype.find called on null or undefined');
                }
                if (typeof predicate !== 'function') {
                    throw new TypeError('predicate must be a function');
                }
                var list = Object(this);
                var length = list.length >>> 0;
                var thisArg = arguments[1];
                var value;
                for (var i = 0; i < length; i++) {
                    value = list[i];
                    if (predicate.call(thisArg, value, i, list)) {
                        return value;
                    }
                }
                return undefined;
            }
        });
    }
    axe.utils.pollyfillElementsFromPoint = function () {
        if (document.elementsFromPoint) {
            return document.elementsFromPoint;
        }
        if (document.msElementsFromPoint) {
            return document.msElementsFromPoint;
        }
        var usePointer = function () {
            var element = document.createElement('x');
            element.style.cssText = 'pointer-events:auto';
            return element.style.pointerEvents === 'auto';
        }();
        var cssProp = usePointer ? 'pointer-events' : 'visibility';
        var cssDisableVal = usePointer ? 'none' : 'hidden';
        var style = document.createElement('style');
        style.innerHTML = usePointer ? '* { pointer-events: all }' : '* { visibility: visible }';
        return function (x, y) {
            var current, i, d;
            var elements = [];
            var previousPointerEvents = [];
            document.head.appendChild(style);
            while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1) {
                elements.push(current);
                previousPointerEvents.push({
                    value: current.style.getPropertyValue(cssProp),
                    priority: current.style.getPropertyPriority(cssProp)
                });
                current.style.setProperty(cssProp, cssDisableVal, 'important');
            }
            for (i = previousPointerEvents.length; !!(d = previousPointerEvents[--i]);) {
                elements[i].style.setProperty(cssProp, d.value ? d.value : '', d.priority);
            }
            document.head.removeChild(style);
            return elements;
        };
    };
    if (typeof window.addEventListener === 'function') {
        document.elementsFromPoint = axe.utils.pollyfillElementsFromPoint();
    }
    if (!Array.prototype.includes) {
        Object.defineProperty(Array.prototype, 'includes', {
            value: function value(searchElement) {
                'use strict';
                var O = Object(this);
                var len = parseInt(O.length, 10) || 0;
                if (len === 0) {
                    return false;
                }
                var n = parseInt(arguments[1], 10) || 0;
                var k;
                if (n >= 0) {
                    k = n;
                } else {
                    k = len + n;
                    if (k < 0) {
                        k = 0;
                    }
                }
                var currentElement;
                while (k < len) {
                    currentElement = O[k];
                    if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
                        return true;
                    }
                    k++;
                }
                return false;
            }
        });
    }
    if (!Array.prototype.some) {
        Object.defineProperty(Array.prototype, 'some', {
            value: function value(fun) {
                'use strict';
                if (this == null) {
                    throw new TypeError('Array.prototype.some called on null or undefined');
                }
                if (typeof fun !== 'function') {
                    throw new TypeError();
                }
                var t = Object(this);
                var len = t.length >>> 0;
                var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
                for (var i = 0; i < len; i++) {
                    if (i in t && fun.call(thisArg, t[i], i, t)) {
                        return true;
                    }
                }
                return false;
            }
        });
    }
    if (!Array.from) {
        Object.defineProperty(Array, 'from', {
            value: function () {
                var toStr = Object.prototype.toString;
                var isCallable = function isCallable(fn) {
                    return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
                };
                var toInteger = function toInteger(value) {
                    var number = Number(value);
                    if (isNaN(number)) {
                        return 0;
                    }
                    if (number === 0 || !isFinite(number)) {
                        return number;
                    }
                    return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
                };
                var maxSafeInteger = Math.pow(2, 53) - 1;
                var toLength = function toLength(value) {
                    var len = toInteger(value);
                    return Math.min(Math.max(len, 0), maxSafeInteger);
                };
                return function from(arrayLike) {
                    var C = this;
                    var items = Object(arrayLike);
                    if (arrayLike == null) {
                        throw new TypeError('Array.from requires an array-like object - not null or undefined');
                    }
                    var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
                    var T;
                    if (typeof mapFn !== 'undefined') {
                        if (!isCallable(mapFn)) {
                            throw new TypeError('Array.from: when provided, the second argument must be a function');
                        }
                        if (arguments.length > 2) {
                            T = arguments[2];
                        }
                    }
                    var len = toLength(items.length);
                    var A = isCallable(C) ? Object(new C(len)) : new Array(len);
                    var k = 0;
                    var kValue;
                    while (k < len) {
                        kValue = items[k];
                        if (mapFn) {
                            A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                        } else {
                            A[k] = kValue;
                        }
                        k += 1;
                    }
                    A.length = len;
                    return A;
                };
            }()
        });
    }
    if (!String.prototype.includes) {
        String.prototype.includes = function (search, start) {
            if (typeof start !== 'number') {
                start = 0;
            }
            if (start + search.length > this.length) {
                return false;
            } else {
                return this.indexOf(search, start) !== -1;
            }
        };
    }
    'use strict';
    var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };
    function getIncompleteReason(checkData, messages) {
        function getDefaultMsg(messages) {
            if (messages.incomplete && messages.incomplete.default) {
                return messages.incomplete.default;
            } else {
                return helpers.incompleteFallbackMessage();
            }
        }
        if (checkData && checkData.missingData) {
            try {
                var msg = messages.incomplete[checkData.missingData[0].reason];
                if (!msg) {
                    throw new Error();
                }
                return msg;
            } catch (e) {
                if (typeof checkData.missingData === 'string') {
                    return messages.incomplete[checkData.missingData];
                } else {
                    return getDefaultMsg(messages);
                }
            }
        } else {
            return getDefaultMsg(messages);
        }
    }
    function extender(checksData, shouldBeTrue) {
        'use strict';
        return function (check) {
            var sourceData = checksData[check.id] || {};
            var messages = sourceData.messages || {};
            var data = Object.assign({}, sourceData);
            delete data.messages;
            if (check.result === undefined) {
                if (_typeof(messages.incomplete) === 'object') {
                    data.message = function () {
                        return getIncompleteReason(check.data, messages);
                    };
                } else {
                    data.message = messages.incomplete;
                }
            } else {
                data.message = check.result === shouldBeTrue ? messages.pass : messages.fail;
            }
            axe.utils.extendMetaData(check, data);
        };
    }
    axe.utils.publishMetaData = function (ruleResult) {
        'use strict';
        var checksData = axe._audit.data.checks || {};
        var rulesData = axe._audit.data.rules || {};
        var rule = axe.utils.findBy(axe._audit.rules, 'id', ruleResult.id) || {};
        ruleResult.tags = axe.utils.clone(rule.tags || []);
        var shouldBeTrue = extender(checksData, true);
        var shouldBeFalse = extender(checksData, false);
        ruleResult.nodes.forEach(function (detail) {
            detail.any.forEach(shouldBeTrue);
            detail.all.forEach(shouldBeTrue);
            detail.none.forEach(shouldBeFalse);
        });
        axe.utils.extendMetaData(ruleResult, axe.utils.clone(rulesData[ruleResult.id] || {}));
    };
    'use strict';
    var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };
    (function () {
        'use strict';
        function noop() { }
        function funcGuard(f) {
            if (typeof f !== 'function') {
                throw new TypeError('Queue methods require functions as arguments');
            }
        }
        function queue() {
            var tasks = [];
            var started = 0;
            var remaining = 0;
            var completeQueue = noop;
            var complete = false;
            var err;
            var defaultFail = function defaultFail(e) {
                err = e;
                setTimeout(function () {
                    if (err !== undefined && err !== null) {
                        axe.log('Uncaught error (of queue)', err);
                    }
                }, 1);
            };
            var failed = defaultFail;
            function createResolve(i) {
                return function (r) {
                    tasks[i] = r;
                    remaining -= 1;
                    if (!remaining && completeQueue !== noop) {
                        complete = true;
                        completeQueue(tasks);
                    }
                };
            }
            function abort(msg) {
                completeQueue = noop;
                failed(msg);
                return tasks;
            }
            function pop() {
                var length = tasks.length;
                for (; started < length; started++) {
                    var task = tasks[started];
                    try {
                        task.call(null, createResolve(started), abort);
                    } catch (e) {
                        abort(e);
                    }
                }
            }
            var q = {
                defer: function defer(fn) {
                    if ((typeof fn === 'undefined' ? 'undefined' : _typeof(fn)) === 'object' && fn.then && fn.catch) {
                        var defer = fn;
                        fn = function fn(resolve, reject) {
                            defer.then(resolve).catch(reject);
                        };
                    }
                    funcGuard(fn);
                    if (err !== undefined) {
                        return;
                    } else if (complete) {
                        throw new Error('Queue already completed');
                    }
                    tasks.push(fn);
                    ++remaining;
                    pop();
                    return q;
                },
                then: function then(fn) {
                    funcGuard(fn);
                    if (completeQueue !== noop) {
                        throw new Error('queue `then` already set');
                    }
                    if (!err) {
                        completeQueue = fn;
                        if (!remaining) {
                            complete = true;
                            completeQueue(tasks);
                        }
                    }
                    return q;
                },
                catch: function _catch(fn) {
                    funcGuard(fn);
                    if (failed !== defaultFail) {
                        throw new Error('queue `catch` already set');
                    }
                    if (!err) {
                        failed = fn;
                    } else {
                        fn(err);
                        err = null;
                    }
                    return q;
                },
                abort: abort
            };
            return q;
        }
        axe.utils.queue = queue;
    })();
    'use strict';
    var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };
    (function (exports) {
        'use strict';
        var messages = {}, subscribers = {}, errorTypes = Object.freeze(['EvalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError']);
        function _getSource() {
            var application = 'axe', version = '', src;
            if (typeof axe !== 'undefined' && axe._audit && !axe._audit.application) {
                application = axe._audit.application;
            }
            if (typeof axe !== 'undefined') {
                version = axe.version;
            }
            src = application + '.' + version;
            return src;
        }
        function verify(postedMessage) {
            if ((typeof postedMessage === 'undefined' ? 'undefined' : _typeof(postedMessage)) === 'object' && typeof postedMessage.uuid === 'string' && postedMessage._respondable === true) {
                var messageSource = _getSource();
                return postedMessage._source === messageSource || postedMessage._source === 'axe.x.y.z' || messageSource === 'axe.x.y.z';
            }
            return false;
        }
        function post(win, topic, message, uuid, keepalive, callback) {
            var error;
            if (message instanceof Error) {
                error = {
                    name: message.name,
                    message: message.message,
                    stack: message.stack
                };
                message = undefined;
            }
            var data = {
                uuid: uuid,
                topic: topic,
                message: message,
                error: error,
                _respondable: true,
                _source: _getSource(),
                _keepalive: keepalive
            };
            if (typeof callback === 'function') {
                messages[uuid] = callback;
            }
            win.postMessage(JSON.stringify(data), '*');
        }
        function respondable(win, topic, message, keepalive, callback) {
            var id = uuid.v1();
            post(win, topic, message, id, keepalive, callback);
        }
        respondable.subscribe = function (topic, callback) {
            subscribers[topic] = callback;
        };
        respondable.isInFrame = function (win) {
            win = win || window;
            return !!win.frameElement;
        };
        function createResponder(source, topic, uuid) {
            return function (message, keepalive, callback) {
                post(source, topic, message, uuid, keepalive, callback);
            };
        }
        function publish(target, data, keepalive) {
            var topic = data.topic;
            var subscriber = subscribers[topic];
            if (subscriber) {
                var responder = createResponder(target, null, data.uuid);
                subscriber(data.message, keepalive, responder);
            }
        }
        function buildErrorObject(error) {
            var msg = error.message || 'Unknown error occurred';
            var errorName = errorTypes.includes(error.name) ? error.name : 'Error';
            var ErrConstructor = window[errorName] || Error;
            if (error.stack) {
                msg += '\n' + error.stack.replace(error.message, '');
            }
            return new ErrConstructor(msg);
        }
        function parseMessage(dataString) {
            var data;
            if (typeof dataString !== 'string') {
                return;
            }
            try {
                data = JSON.parse(dataString);
            } catch (ex) { }
            if (!verify(data)) {
                return;
            }
            if (_typeof(data.error) === 'object') {
                data.error = buildErrorObject(data.error);
            } else {
                data.error = undefined;
            }
            return data;
        }
        if (typeof window.addEventListener === 'function') {
            window.addEventListener('message', function (e) {
                var data = parseMessage(e.data);
                if (!data) {
                    return;
                }
                var uuid = data.uuid;
                var keepalive = data._keepalive;
                var callback = messages[uuid];
                if (callback) {
                    var result = data.error || data.message;
                    var responder = createResponder(e.source, data.topic, uuid);
                    callback(result, keepalive, responder);
                    if (!keepalive) {
                        delete messages[uuid];
                    }
                }
                if (!data.error) {
                    try {
                        publish(e.source, data, keepalive);
                    } catch (err) {
                        post(e.source, data.topic, err, uuid, false);
                    }
                }
            }, false);
        }
        exports.respondable = respondable;
    })(utils);
    'use strict';
    function matchTags(rule, runOnly) {
        'use strict';
        var include, exclude, matching;
        var defaultExclude = axe._audit && axe._audit.tagExclude ? axe._audit.tagExclude : [];
        if (runOnly.hasOwnProperty('include') || runOnly.hasOwnProperty('exclude')) {
            include = runOnly.include || [];
            include = Array.isArray(include) ? include : [include];
            exclude = runOnly.exclude || [];
            exclude = Array.isArray(exclude) ? exclude : [exclude];
            exclude = exclude.concat(defaultExclude.filter(function (tag) {
                return include.indexOf(tag) === -1;
            }));
        } else {
            include = Array.isArray(runOnly) ? runOnly : [runOnly];
            exclude = defaultExclude.filter(function (tag) {
                return include.indexOf(tag) === -1;
            });
        }
        matching = include.some(function (tag) {
            return rule.tags.indexOf(tag) !== -1;
        });
        if (matching || include.length === 0 && rule.enabled !== false) {
            return exclude.every(function (tag) {
                return rule.tags.indexOf(tag) === -1;
            });
        } else {
            return false;
        }
    }
    axe.utils.ruleShouldRun = function (rule, context, options) {
        'use strict';
        var runOnly = options.runOnly || {};
        var ruleOptions = (options.rules || {})[rule.id];
        if (rule.pageLevel && !context.page) {
            return false;
        } else if (runOnly.type === 'rule') {
            return runOnly.values.indexOf(rule.id) !== -1;
        } else if (ruleOptions && typeof ruleOptions.enabled === 'boolean') {
            return ruleOptions.enabled;
        } else if (runOnly.type === 'tag' && runOnly.values) {
            return matchTags(rule, runOnly.values);
        } else {
            return matchTags(rule, []);
        }
    };
    'use strict';
    function getScroll(elm) {
        var style = window.getComputedStyle(elm);
        var visibleOverflowY = style.getPropertyValue('overflow-y') === 'visible';
        var visibleOverflowX = style.getPropertyValue('overflow-x') === 'visible';
        if (!visibleOverflowY && elm.scrollHeight > elm.clientHeight || !visibleOverflowX && elm.scrollWidth > elm.clientWidth) {
            return {
                elm: elm,
                top: elm.scrollTop,
                left: elm.scrollLeft
            };
        }
    }
    function setScroll(elm, top, left) {
        if (elm === window) {
            return elm.scroll(top, left);
        } else {
            elm.scrollTop = top;
            elm.scrollLeft = left;
        }
    }
    function getElmScrollRecursive(root) {
        return Array.from(root.children).reduce(function (scrolls, elm) {
            var scroll = getScroll(elm);
            if (scroll) {
                scrolls.push(scroll);
            }
            return scrolls.concat(getElmScrollRecursive(elm));
        }, []);
    }
    axe.utils.getScrollState = function getScrollState() {
        var win = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
        var root = win.document.documentElement;
        var windowScroll = [win.pageXOffset !== undefined ? {
            elm: win,
            top: win.pageYOffset,
            left: win.pageXOffset
        } : {
                elm: root,
                top: root.scrollTop,
                left: root.scrollLeft
            }];
        return windowScroll.concat(getElmScrollRecursive(document.body));
    };
    axe.utils.setScrollState = function setScrollState(scrollState) {
        scrollState.forEach(function (_ref) {
            var elm = _ref.elm, top = _ref.top, left = _ref.left;
            return setScroll(elm, top, left);
        });
    };
    'use strict';
    function getDeepest(collection) {
        'use strict';
        return collection.sort(function (a, b) {
            if (axe.utils.contains(a, b)) {
                return 1;
            }
            return -1;
        })[0];
    }
    function isNodeInContext(node, context) {
        'use strict';
        var include = context.include && getDeepest(context.include.filter(function (candidate) {
            return axe.utils.contains(candidate, node);
        }));
        var exclude = context.exclude && getDeepest(context.exclude.filter(function (candidate) {
            return axe.utils.contains(candidate, node);
        }));
        if (!exclude && include || exclude && axe.utils.contains(exclude, include)) {
            return true;
        }
        return false;
    }
    function pushNode(result, nodes, context) {
        'use strict';
        for (var i = 0, l = nodes.length; i < l; i++) {
            if (result.indexOf(nodes[i]) === -1 && isNodeInContext(nodes[i], context)) {
                result.push(nodes[i]);
            }
        }
    }
    axe.utils.select = function select(selector, context) {
        'use strict';
        var result = [], candidate;
        for (var i = 0, l = context.include.length; i < l; i++) {
            candidate = context.include[i];
            if (candidate.nodeType === candidate.ELEMENT_NODE && axe.utils.matchesSelector(candidate, selector)) {
                pushNode(result, [candidate], context);
            }
            pushNode(result, candidate.querySelectorAll(selector), context);
        }
        return result.sort(axe.utils.nodeSorter);
    };
    'use strict';
    axe.utils.toArray = function (thing) {
        'use strict';
        return Array.prototype.slice.call(thing);
    };
    'use strict';
    var uuid;
    (function (_global) {
        var _rng;
        var _crypto = _global.crypto || _global.msCrypto;
        if (!_rng && _crypto && _crypto.getRandomValues) {
            var _rnds8 = new Uint8Array(16);
            _rng = function whatwgRNG() {
                _crypto.getRandomValues(_rnds8);
                return _rnds8;
            };
        }
        if (!_rng) {
            var _rnds = new Array(16);
            _rng = function _rng() {
                for (var i = 0, r; i < 16; i++) {
                    if ((i & 3) === 0) {
                        r = Math.random() * 4294967296;
                    }
                    _rnds[i] = r >>> ((i & 3) << 3) & 255;
                }
                return _rnds;
            };
        }
        var BufferClass = typeof _global.Buffer == 'function' ? _global.Buffer : Array;
        var _byteToHex = [];
        var _hexToByte = {};
        for (var i = 0; i < 256; i++) {
            _byteToHex[i] = (i + 256).toString(16).substr(1);
            _hexToByte[_byteToHex[i]] = i;
        }
        function parse(s, buf, offset) {
            var i = buf && offset || 0, ii = 0;
            buf = buf || [];
            s.toLowerCase().replace(/[0-9a-f]{2}/g, function (oct) {
                if (ii < 16) {
                    buf[i + ii++] = _hexToByte[oct];
                }
            });
            while (ii < 16) {
                buf[i + ii++] = 0;
            }
            return buf;
        }
        function unparse(buf, offset) {
            var i = offset || 0, bth = _byteToHex;
            return bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]];
        }
        var _seedBytes = _rng();
        var _nodeId = [_seedBytes[0] | 1, _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]];
        var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 16383;
        var _lastMSecs = 0, _lastNSecs = 0;
        function v1(options, buf, offset) {
            var i = buf && offset || 0;
            var b = buf || [];
            options = options || {};
            var clockseq = options.clockseq != null ? options.clockseq : _clockseq;
            var msecs = options.msecs != null ? options.msecs : new Date().getTime();
            var nsecs = options.nsecs != null ? options.nsecs : _lastNSecs + 1;
            var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
            if (dt < 0 && options.clockseq == null) {
                clockseq = clockseq + 1 & 16383;
            }
            if ((dt < 0 || msecs > _lastMSecs) && options.nsecs == null) {
                nsecs = 0;
            }
            if (nsecs >= 1e4) {
                throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
            }
            _lastMSecs = msecs;
            _lastNSecs = nsecs;
            _clockseq = clockseq;
            msecs += 122192928e5;
            var tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
            b[i++] = tl >>> 24 & 255;
            b[i++] = tl >>> 16 & 255;
            b[i++] = tl >>> 8 & 255;
            b[i++] = tl & 255;
            var tmh = msecs / 4294967296 * 1e4 & 268435455;
            b[i++] = tmh >>> 8 & 255;
            b[i++] = tmh & 255;
            b[i++] = tmh >>> 24 & 15 | 16;
            b[i++] = tmh >>> 16 & 255;
            b[i++] = clockseq >>> 8 | 128;
            b[i++] = clockseq & 255;
            var node = options.node || _nodeId;
            for (var n = 0; n < 6; n++) {
                b[i + n] = node[n];
            }
            return buf ? buf : unparse(b);
        }
        function v4(options, buf, offset) {
            var i = buf && offset || 0;
            if (typeof options == 'string') {
                buf = options == 'binary' ? new BufferClass(16) : null;
                options = null;
            }
            options = options || {};
            var rnds = options.random || (options.rng || _rng)();
            rnds[6] = rnds[6] & 15 | 64;
            rnds[8] = rnds[8] & 63 | 128;
            if (buf) {
                for (var ii = 0; ii < 16; ii++) {
                    buf[i + ii] = rnds[ii];
                }
            }
            return buf || unparse(rnds);
        }
        uuid = v4;
        uuid.v1 = v1;
        uuid.v4 = v4;
        uuid.parse = parse;
        uuid.unparse = unparse;
        uuid.BufferClass = BufferClass;
    })(window);
    'use strict';
    axe._load({
        data: {
            rules: {
                accesskeys: {
                    description: 'Ensures every accesskey attribute value is unique',
                    help: 'accesskey attribute value must be unique'
                },
                'area-alt': {
                    description: 'Ensures <area> elements of image maps have alternate text',
                    help: 'Active <area> elements must have alternate text'
                },
                'aria-allowed-attr': {
                    description: 'Ensures ARIA attributes are allowed for an element\'s role',
                    help: 'Elements must only use allowed ARIA attributes'
                },
                'aria-hidden-body': {
                    description: 'Ensures aria-hidden=\'true\' is not present on the document body.',
                    help: 'aria-hidden=\'true\' must not be present on the document body'
                },
                'aria-required-attr': {
                    description: 'Ensures elements with ARIA roles have all required ARIA attributes',
                    help: 'Required ARIA attributes must be provided'
                },
                'aria-required-children': {
                    description: 'Ensures elements with an ARIA role that require child roles contain them',
                    help: 'Certain ARIA roles must contain particular children'
                },
                'aria-required-parent': {
                    description: 'Ensures elements with an ARIA role that require parent roles are contained by them',
                    help: 'Certain ARIA roles must be contained by particular parents'
                },
                'aria-roles': {
                    description: 'Ensures all elements with a role attribute use a valid value',
                    help: 'ARIA roles used must conform to valid values'
                },
                'aria-valid-attr-value': {
                    description: 'Ensures all ARIA attributes have valid values',
                    help: 'ARIA attributes must conform to valid values'
                },
                'aria-valid-attr': {
                    description: 'Ensures attributes that begin with aria- are valid ARIA attributes',
                    help: 'ARIA attributes must conform to valid names'
                },
                'audio-caption': {
                    description: 'Ensures <audio> elements have captions',
                    help: '<audio> elements must have a captions track'
                },
                blink: {
                    description: 'Ensures <blink> elements are not used',
                    help: '<blink> elements are deprecated and must not be used'
                },
                'button-name': {
                    description: 'Ensures buttons have discernible text',
                    help: 'Buttons must have discernible text'
                },
                bypass: {
                    description: 'Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content',
                    help: 'Page must have means to bypass repeated blocks'
                },
                checkboxgroup: {
                    description: 'Ensures related <input type="checkbox"> elements have a group and that that group designation is consistent',
                    help: 'Checkbox inputs with the same name attribute value must be part of a group'
                },
                'color-contrast': {
                    description: 'Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds',
                    help: 'Elements must have sufficient color contrast'
                },
                'definition-list': {
                    description: 'Ensures <dl> elements are structured correctly',
                    help: '<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script> or <template> elements'
                },
                dlitem: {
                    description: 'Ensures <dt> and <dd> elements are contained by a <dl>',
                    help: '<dt> and <dd> elements must be contained by a <dl>'
                },
                'document-title': {
                    description: 'Ensures each HTML document contains a non-empty <title> element',
                    help: 'Documents must have <title> element to aid in navigation'
                },
                'duplicate-id': {
                    description: 'Ensures every id attribute value is unique',
                    help: 'id attribute value must be unique'
                },
                'empty-heading': {
                    description: 'Ensures headings have discernible text',
                    help: 'Headings must not be empty'
                },
                'frame-title-unique': {
                    description: 'Ensures <iframe> and <frame> elements contain a unique title attribute',
                    help: 'Frames must have a unique title attribute'
                },
                'frame-title': {
                    description: 'Ensures <iframe> and <frame> elements contain a non-empty title attribute',
                    help: 'Frames must have title attribute'
                },
                'heading-order': {
                    description: 'Ensures the order of headings is semantically correct',
                    help: 'Heading levels should only increase by one'
                },
                'hidden-content': {
                    description: 'Informs users about hidden content.',
                    help: 'Hidden content on the page cannot be analyzed'
                },
                'href-no-hash': {
                    description: 'Ensures that href values are valid link references to promote only using anchors as links',
                    help: 'Anchors must only be used as links with valid URLs or URL fragments'
                },
                'html-has-lang': {
                    description: 'Ensures every HTML document has a lang attribute',
                    help: '<html> element must have a lang attribute'
                },
                'html-lang-valid': {
                    description: 'Ensures the lang attribute of the <html> element has a valid value',
                    help: '<html> element must have a valid value for the lang attribute'
                },
                'image-alt': {
                    description: 'Ensures <img> elements have alternate text or a role of none or presentation',
                    help: 'Images must have alternate text'
                },
                'image-redundant-alt': {
                    description: 'Ensure button and link text is not repeated as image alternative',
                    help: 'Text of buttons and links should not be repeated in the image alternative'
                },
                'input-image-alt': {
                    description: 'Ensures <input type="image"> elements have alternate text',
                    help: 'Image buttons must have alternate text'
                },
                'label-title-only': {
                    description: 'Ensures that every form element is not solely labeled using the title or aria-describedby attributes',
                    help: 'Form elements should have a visible label'
                },
                label: {
                    description: 'Ensures every form element has a label',
                    help: 'Form elements must have labels'
                },
                'landmark-main-is-top-level': {
                    description: 'The main landmark should not be contained in another landmark',
                    help: 'Main landmark is not at top level'
                },
                'landmark-one-main': {
                    description: 'Ensures a navigation point to the primary content of the page. If the page contains iframes, each iframe should contain either no main landmarks or just one.',
                    help: 'Page must contain one main landmark.'
                },
                'layout-table': {
                    description: 'Ensures presentational <table> elements do not use <th>, <caption> elements or the summary attribute',
                    help: 'Layout tables must not use data table elements'
                },
                'link-in-text-block': {
                    description: 'Links can be distinguished without relying on color',
                    help: 'Links must be distinguished from surrounding text in a way that does not rely on color'
                },
                'link-name': {
                    description: 'Ensures links have discernible text',
                    help: 'Links must have discernible text'
                },
                list: {
                    description: 'Ensures that lists are structured correctly',
                    help: '<ul> and <ol> must only directly contain <li>, <script> or <template> elements'
                },
                listitem: {
                    description: 'Ensures <li> elements are used semantically',
                    help: '<li> elements must be contained in a <ul> or <ol>'
                },
                marquee: {
                    description: 'Ensures <marquee> elements are not used',
                    help: '<marquee> elements are deprecated and must not be used'
                },
                'meta-refresh': {
                    description: 'Ensures <meta http-equiv="refresh"> is not used',
                    help: 'Timed refresh must not exist'
                },
                'meta-viewport-large': {
                    description: 'Ensures <meta name="viewport"> can scale a significant amount',
                    help: 'Users should be able to zoom and scale the text up to 500%'
                },
                'meta-viewport': {
                    description: 'Ensures <meta name="viewport"> does not disable text scaling and zooming',
                    help: 'Zooming and scaling must not be disabled'
                },
                'object-alt': {
                    description: 'Ensures <object> elements have alternate text',
                    help: '<object> elements must have alternate text'
                },
                'p-as-heading': {
                    description: 'Ensure p elements are not used to style headings',
                    help: 'Bold, italic text and font-size are not used to style p elements as a heading'
                },
                radiogroup: {
                    description: 'Ensures related <input type="radio"> elements have a group and that the group designation is consistent',
                    help: 'Radio inputs with the same name attribute value must be part of a group'
                },
                region: {
                    description: 'Ensures all content is contained within a landmark region',
                    help: 'Content should be contained in a landmark region'
                },
                'scope-attr-valid': {
                    description: 'Ensures the scope attribute is used correctly on tables',
                    help: 'scope attribute should be used correctly'
                },
                'server-side-image-map': {
                    description: 'Ensures that server-side image maps are not used',
                    help: 'Server-side image maps must not be used'
                },
                'skip-link': {
                    description: 'Ensures the first link on the page is a skip link',
                    help: 'The page should have a skip link as its first link'
                },
                tabindex: {
                    description: 'Ensures tabindex attribute values are not greater than 0',
                    help: 'Elements should not have tabindex greater than zero'
                },
                'table-duplicate-name': {
                    description: 'Ensure that tables do not have the same summary and caption',
                    help: 'The <caption> element should not contain the same text as the summary attribute'
                },
                'table-fake-caption': {
                    description: 'Ensure that tables with a caption use the <caption> element.',
                    help: 'Data or header cells should not be used to give caption to a data table.'
                },
                'td-has-header': {
                    description: 'Ensure that each non-empty data cell in a large table has one or more table headers',
                    help: 'All non-empty td element in table larger than 3 by 3 must have an associated table header'
                },
                'td-headers-attr': {
                    description: 'Ensure that each cell in a table using the headers refers to another cell in that table',
                    help: 'All cells in a table element that use the headers attribute must only refer to other cells of that same table'
                },
                'th-has-data-cells': {
                    description: 'Ensure that each table header in a data table refers to data cells',
                    help: 'All th elements and elements with role=columnheader/rowheader must have data cells they describe'
                },
                'valid-lang': {
                    description: 'Ensures lang attributes have valid values',
                    help: 'lang attribute must have a valid value'
                },
                'video-caption': {
                    description: 'Ensures <video> elements have captions',
                    help: '<video> elements must have captions'
                },
                'video-description': {
                    description: 'Ensures <video> elements have audio descriptions',
                    help: '<video> elements must have an audio description track'
                }
            },
            checks: {
                accesskeys: {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Accesskey attribute value is unique';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Document has multiple elements with the same accesskey';
                            return out;
                        }
                    }
                },
                'non-empty-alt': {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Element has a non-empty alt attribute';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Element has no alt attribute or the alt attribute is empty';
                            return out;
                        }
                    }
                },
                'non-empty-title': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Element has a title attribute';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Element has no title attribute or the title attribute is empty';
                            return out;
                        }
                    }
                },
                'aria-label': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'aria-label attribute exists and is not empty';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'aria-label attribute does not exist or is empty';
                            return out;
                        }
                    }
                },
                'aria-labelledby': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'aria-labelledby attribute exists and references elements that are visible to screen readers';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty or not visible';
                            return out;
                        }
                    }
                },
                'aria-allowed-attr': {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'ARIA attributes are used correctly for the defined role';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'ARIA attribute' + (it.data && it.data.length > 1 ? 's are' : ' is') + ' not allowed:';
                            var arr1 = it.data;
                            if (arr1) {
                                var value, i1 = -1, l1 = arr1.length - 1;
                                while (i1 < l1) {
                                    value = arr1[i1 += 1];
                                    out += ' ' + value;
                                }
                            }
                            return out;
                        }
                    }
                },
                'aria-hidden-body': {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'No aria-hidden attribute is present on document body';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'aria-hidden=true should not be present on the document body';
                            return out;
                        }
                    }
                },
                'aria-required-attr': {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'All required ARIA attributes are present';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Required ARIA attribute' + (it.data && it.data.length > 1 ? 's' : '') + ' not present:';
                            var arr1 = it.data;
                            if (arr1) {
                                var value, i1 = -1, l1 = arr1.length - 1;
                                while (i1 < l1) {
                                    value = arr1[i1 += 1];
                                    out += ' ' + value;
                                }
                            }
                            return out;
                        }
                    }
                },
                'aria-required-children': {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Required ARIA children are present';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Required ARIA ' + (it.data && it.data.length > 1 ? 'children' : 'child') + ' role not present:';
                            var arr1 = it.data;
                            if (arr1) {
                                var value, i1 = -1, l1 = arr1.length - 1;
                                while (i1 < l1) {
                                    value = arr1[i1 += 1];
                                    out += ' ' + value;
                                }
                            }
                            return out;
                        }
                    }
                },
                'aria-required-parent': {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Required ARIA parent role present';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Required ARIA parent' + (it.data && it.data.length > 1 ? 's' : '') + ' role not present:';
                            var arr1 = it.data;
                            if (arr1) {
                                var value, i1 = -1, l1 = arr1.length - 1;
                                while (i1 < l1) {
                                    value = arr1[i1 += 1];
                                    out += ' ' + value;
                                }
                            }
                            return out;
                        }
                    }
                },
                invalidrole: {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'ARIA role is valid';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Role must be one of the valid ARIA roles';
                            return out;
                        }
                    }
                },
                abstractrole: {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Abstract roles are not used';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Abstract roles cannot be directly used';
                            return out;
                        }
                    }
                },
                'aria-valid-attr-value': {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'ARIA attribute values are valid';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Invalid ARIA attribute value' + (it.data && it.data.length > 1 ? 's' : '') + ':';
                            var arr1 = it.data;
                            if (arr1) {
                                var value, i1 = -1, l1 = arr1.length - 1;
                                while (i1 < l1) {
                                    value = arr1[i1 += 1];
                                    out += ' ' + value;
                                }
                            }
                            return out;
                        }
                    }
                },
                'aria-errormessage': {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Uses a supported aria-errormessage technique';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'aria-errormessage value' + (it.data && it.data.length > 1 ? 's' : '') + ' ';
                            var arr1 = it.data;
                            if (arr1) {
                                var value, i1 = -1, l1 = arr1.length - 1;
                                while (i1 < l1) {
                                    value = arr1[i1 += 1];
                                    out += ' `' + value;
                                }
                            }
                            out += '` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)';
                            return out;
                        }
                    }
                },
                'aria-valid-attr': {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'ARIA attribute name' + (it.data && it.data.length > 1 ? 's' : '') + ' are valid';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Invalid ARIA attribute name' + (it.data && it.data.length > 1 ? 's' : '') + ':';
                            var arr1 = it.data;
                            if (arr1) {
                                var value, i1 = -1, l1 = arr1.length - 1;
                                while (i1 < l1) {
                                    value = arr1[i1 += 1];
                                    out += ' ' + value;
                                }
                            }
                            return out;
                        }
                    }
                },
                caption: {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'The multimedia element has a captions track';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'The multimedia element does not have a captions track';
                            return out;
                        },
                        incomplete: function anonymous(it) {
                            var out = 'A captions track for this element could not be found';
                            return out;
                        }
                    }
                },
                'is-on-screen': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Element is not visible';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Element is visible';
                            return out;
                        }
                    }
                },
                'non-empty-if-present': {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Element ';
                            if (it.data) {
                                out += 'has a non-empty value attribute';
                            } else {
                                out += 'does not have a value attribute';
                            }
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Element has a value attribute and the value attribute is empty';
                            return out;
                        }
                    }
                },
                'non-empty-value': {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Element has a non-empty value attribute';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Element has no value attribute or the value attribute is empty';
                            return out;
                        }
                    }
                },
                'button-has-visible-text': {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Element has inner text that is visible to screen readers';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Element does not have inner text that is visible to screen readers';
                            return out;
                        }
                    }
                },
                'role-presentation': {
                    impact: 'minor',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Element\'s default semantics were overriden with role="presentation"';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Element\'s default semantics were not overridden with role="presentation"';
                            return out;
                        }
                    }
                },
                'role-none': {
                    impact: 'minor',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Element\'s default semantics were overriden with role="none"';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Element\'s default semantics were not overridden with role="none"';
                            return out;
                        }
                    }
                },
                'focusable-no-name': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Element is not in tab order or has accessible text';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Element is in tab order and does not have accessible text';
                            return out;
                        }
                    }
                },
                'internal-link-present': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Valid skip link found';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'No valid skip link found';
                            return out;
                        }
                    }
                },
                'header-present': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Page has a header';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Page does not have a header';
                            return out;
                        }
                    }
                },
                landmark: {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Page has a landmark region';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Page does not have a landmark region';
                            return out;
                        }
                    }
                },
                'group-labelledby': {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'All elements with the name "' + it.data.name + '" reference the same element with aria-labelledby';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'All elements with the name "' + it.data.name + '" do not reference the same element with aria-labelledby';
                            return out;
                        }
                    }
                },
                fieldset: {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Element is contained in a fieldset';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = '';
                            var code = it.data && it.data.failureCode;
                            if (code === 'no-legend') {
                                out += 'Fieldset does not have a legend as its first child';
                            } else if (code === 'empty-legend') {
                                out += 'Legend does not have text that is visible to screen readers';
                            } else if (code === 'mixed-inputs') {
                                out += 'Fieldset contains unrelated inputs';
                            } else if (code === 'no-group-label') {
                                out += 'ARIA group does not have aria-label or aria-labelledby';
                            } else if (code === 'group-mixed-inputs') {
                                out += 'ARIA group contains unrelated inputs';
                            } else {
                                out += 'Element does not have a containing fieldset or ARIA group';
                            }
                            return out;
                        }
                    }
                },
                'color-contrast': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Element has sufficient color contrast of ' + it.data.contrastRatio;
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Element has insufficient color contrast of ' + it.data.contrastRatio + ' (foreground color: ' + it.data.fgColor + ', background color: ' + it.data.bgColor + ', font size: ' + it.data.fontSize + ', font weight: ' + it.data.fontWeight + '). Expected contrast ratio of ' + it.data.expectedContrastRatio;
                            return out;
                        },
                        incomplete: {
                            bgImage: 'Element\'s background color could not be determined due to a background image',
                            bgGradient: 'Element\'s background color could not be determined due to a background gradient',
                            imgNode: 'Element\'s background color could not be determined because element contains an image node',
                            bgOverlap: 'Element\'s background color could not be determined because it is overlapped by another element',
                            fgAlpha: 'Element\'s foreground color could not be determined because of alpha transparency',
                            elmPartiallyObscured: 'Element\'s background color could not be determined because it\'s partially obscured by another element',
                            elmPartiallyObscuring: 'Element\'s background color could not be determined because it partially overlaps other elements',
                            outsideViewport: 'Element\'s background color could not be determined because it\'s outside the viewport',
                            equalRatio: 'Element has a 1:1 contrast ratio with the background',
                            default: 'Unable to determine contrast ratio'
                        }
                    }
                },
                'structured-dlitems': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'When not empty, element has both <dt> and <dd> elements';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'When not empty, element does not have at least one <dt> element followed by at least one <dd> element';
                            return out;
                        }
                    }
                },
                'only-dlitems': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'List element only has direct children that are allowed inside <dt> or <dd> elements';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'List element has direct children that are not allowed inside <dt> or <dd> elements';
                            return out;
                        }
                    }
                },
                dlitem: {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Description list item has a <dl> parent element';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Description list item does not have a <dl> parent element';
                            return out;
                        }
                    }
                },
                'doc-has-title': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Document has a non-empty <title> element';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Document does not have a non-empty <title> element';
                            return out;
                        }
                    }
                },
                'duplicate-id': {
                    impact: 'moderate',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Document has no elements that share the same id attribute';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Document has multiple elements with the same id attribute: ' + it.data;
                            return out;
                        }
                    }
                },
                'has-visible-text': {
                    impact: 'minor',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Element has text that is visible to screen readers';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Element does not have text that is visible to screen readers';
                            return out;
                        }
                    }
                },
                'unique-frame-title': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Element\'s title attribute is unique';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Element\'s title attribute is not unique';
                            return out;
                        }
                    }
                },
                'heading-order': {
                    impact: 'moderate',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Heading order valid';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Heading order invalid';
                            return out;
                        }
                    }
                },
                'hidden-content': {
                    impact: 'minor',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'All content on the page has been analyzed.';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'There were problems analyzing the content on this page.';
                            return out;
                        },
                        incomplete: function anonymous(it) {
                            var out = 'There is hidden content on the page that was not analyzed. You will need to trigger the display of this content in order to analyze it.';
                            return out;
                        }
                    }
                },
                'href-no-hash': {
                    impact: 'moderate',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Anchor does not have an href value of #';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Anchor has an href value of #';
                            return out;
                        }
                    }
                },
                'has-lang': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'The <html> element has a lang attribute';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'The <html> element does not have a lang attribute';
                            return out;
                        }
                    }
                },
                'valid-lang': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Value of lang attribute is included in the list of valid languages';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Value of lang attribute not included in the list of valid languages';
                            return out;
                        }
                    }
                },
                'has-alt': {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Element has an alt attribute';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Element does not have an alt attribute';
                            return out;
                        }
                    }
                },
                'duplicate-img-label': {
                    impact: 'minor',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Element does not duplicate existing text in <img> alt text';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Element contains <img> element with alt text that duplicates existing text';
                            return out;
                        }
                    }
                },
                'title-only': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Form element does not solely use title attribute for its label';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Only title used to generate label for form element';
                            return out;
                        }
                    }
                },
                'implicit-label': {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Form element has an implicit (wrapped) <label>';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Form element does not have an implicit (wrapped) <label>';
                            return out;
                        }
                    }
                },
                'explicit-label': {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Form element has an explicit <label>';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Form element does not have an explicit <label>';
                            return out;
                        }
                    }
                },
                'help-same-as-label': {
                    impact: 'minor',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Help text (title or aria-describedby) does not duplicate label text';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Help text (title or aria-describedby) text is the same as the label text';
                            return out;
                        }
                    }
                },
                'multiple-label': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Form element does not have multiple <label> elements';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Form element has multiple <label> elements';
                            return out;
                        }
                    }
                },
                'main-is-top-level': {
                    impact: 'moderate',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'The main landmark is at the top level.';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'The main landmark is contained in another landmark.';
                            return out;
                        }
                    }
                },
                'has-at-least-one-main': {
                    impact: 'moderate',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Document has at least one main landmark';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Document has no main landmarks';
                            return out;
                        }
                    }
                },
                'has-no-more-than-one-main': {
                    impact: 'moderate',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Document has no more than one main landmark';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Document has more than one main landmark';
                            return out;
                        }
                    }
                },
                'has-th': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Layout table does not use <th> elements';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Layout table uses <th> elements';
                            return out;
                        }
                    }
                },
                'has-caption': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Layout table does not use <caption> element';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Layout table uses <caption> element';
                            return out;
                        }
                    }
                },
                'has-summary': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Layout table does not use summary attribute';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Layout table uses summary attribute';
                            return out;
                        }
                    }
                },
                'link-in-text-block': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Links can be distinguished from surrounding text in a way that does not rely on color';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Links can not be distinguished from surrounding text in a way that does not rely on color';
                            return out;
                        },
                        incomplete: {
                            bgContrast: 'Element\'s contrast ratio could not be determined. Check for a distinct hover/focus style',
                            bgImage: 'Element\'s contrast ratio could not be determined due to a background image',
                            bgGradient: 'Element\'s contrast ratio could not be determined due to a background gradient',
                            imgNode: 'Element\'s contrast ratio could not be determined because element contains an image node',
                            bgOverlap: 'Element\'s contrast ratio could not be determined because of element overlap',
                            default: 'Unable to determine contrast ratio'
                        }
                    }
                },
                'only-listitems': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'List element only has direct children that are allowed inside <li> elements';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'List element has direct children that are not allowed inside <li> elements';
                            return out;
                        }
                    }
                },
                listitem: {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'List item has a <ul>, <ol> or role="list" parent element';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'List item does not have a <ul>, <ol> or role="list" parent element';
                            return out;
                        }
                    }
                },
                'meta-refresh': {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = '<meta> tag does not immediately refresh the page';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = '<meta> tag forces timed refresh of page';
                            return out;
                        }
                    }
                },
                'meta-viewport-large': {
                    impact: 'minor',
                    messages: {
                        pass: function anonymous(it) {
                            var out = '<meta> tag does not prevent significant zooming on mobile devices';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = '<meta> tag limits zooming on mobile devices';
                            return out;
                        }
                    }
                },
                'meta-viewport': {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = '<meta> tag does not disable zooming on mobile devices';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = '<meta> tag disables zooming on mobile devices';
                            return out;
                        }
                    }
                },
                'p-as-heading': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = '<p> elements are not styled as headings';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Heading elements should be used instead of styled p elements';
                            return out;
                        }
                    }
                },
                region: {
                    impact: 'moderate',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Content contained by ARIA landmark';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Content not contained by an ARIA landmark';
                            return out;
                        }
                    }
                },
                'html5-scope': {
                    impact: 'moderate',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Scope attribute is only used on table header elements (<th>)';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'In HTML 5, scope attributes may only be used on table header elements (<th>)';
                            return out;
                        }
                    }
                },
                'scope-value': {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Scope attribute is used correctly';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'The value of the scope attribute may only be \'row\' or \'col\'';
                            return out;
                        }
                    }
                },
                exists: {
                    impact: 'minor',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Element does not exist';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Element exists';
                            return out;
                        }
                    }
                },
                'skip-link': {
                    impact: 'moderate',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Valid skip link found';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'No valid skip link found';
                            return out;
                        }
                    }
                },
                tabindex: {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Element does not have a tabindex greater than 0';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Element has a tabindex greater than 0';
                            return out;
                        }
                    }
                },
                'same-caption-summary': {
                    impact: 'minor',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'Content of summary attribute and <caption> are not duplicated';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Content of summary attribute and <caption> element are identical';
                            return out;
                        }
                    }
                },
                'caption-faked': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'The first row of a table is not used as a caption';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'The first row of the table should be a caption instead of a table cell';
                            return out;
                        }
                    }
                },
                'td-has-header': {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'All non-empty data cells have table headers';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Some non-empty data cells do not have table headers';
                            return out;
                        }
                    }
                },
                'td-headers-attr': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'The headers attribute is exclusively used to refer to other cells in the table';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'The headers attribute is not exclusively used to refer to other cells in the table';
                            return out;
                        }
                    }
                },
                'th-has-data-cells': {
                    impact: 'serious',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'All table header cells refer to data cells';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'Not all table header cells refer to data cells';
                            return out;
                        },
                        incomplete: function anonymous(it) {
                            var out = 'Table data cells are missing or empty';
                            return out;
                        }
                    }
                },
                description: {
                    impact: 'critical',
                    messages: {
                        pass: function anonymous(it) {
                            var out = 'The multimedia element has an audio description track';
                            return out;
                        },
                        fail: function anonymous(it) {
                            var out = 'The multimedia element does not have an audio description track';
                            return out;
                        },
                        incomplete: function anonymous(it) {
                            var out = 'An audio description track for this element could not be found';
                            return out;
                        }
                    }
                }
            },
            failureSummaries: {
                any: {
                    failureMessage: function anonymous(it) {
                        var out = 'Fix any of the following:';
                        var arr1 = it;
                        if (arr1) {
                            var value, i1 = -1, l1 = arr1.length - 1;
                            while (i1 < l1) {
                                value = arr1[i1 += 1];
                                out += '\n  ' + value.split('\n').join('\n  ');
                            }
                        }
                        return out;
                    }
                },
                none: {
                    failureMessage: function anonymous(it) {
                        var out = 'Fix all of the following:';
                        var arr1 = it;
                        if (arr1) {
                            var value, i1 = -1, l1 = arr1.length - 1;
                            while (i1 < l1) {
                                value = arr1[i1 += 1];
                                out += '\n  ' + value.split('\n').join('\n  ');
                            }
                        }
                        return out;
                    }
                }
            },
            incompleteFallbackMessage: function anonymous(it) {
                var out = 'aXe couldn\'t tell the reason. Time to break out the element inspector!';
                return out;
            }
        },
        rules: [{
            id: 'accesskeys',
            selector: '[accesskey]',
            excludeHidden: false,
            tags: ['wcag2a', 'wcag211', 'cat.keyboard'],
            all: [],
            any: [],
            none: ['accesskeys']
        }, {
            id: 'area-alt',
            selector: 'map area[href]',
            excludeHidden: false,
            tags: ['cat.text-alternatives', 'wcag2a', 'wcag111', 'section508', 'section508.22.a'],
            all: [],
            any: ['non-empty-alt', 'non-empty-title', 'aria-label', 'aria-labelledby'],
            none: []
        }, {
            id: 'aria-allowed-attr',
            matches: function matches(node) {
                var role = node.getAttribute('role');
                if (!role) {
                    role = axe.commons.aria.implicitRole(node);
                }
                var allowed = axe.commons.aria.allowedAttr(role);
                if (role && allowed) {
                    var aria = /^aria-/;
                    if (node.hasAttributes()) {
                        var attrs = node.attributes;
                        for (var i = 0, l = attrs.length; i < l; i++) {
                            if (aria.test(attrs[i].name)) {
                                return true;
                            }
                        }
                    }
                }
                return false;
            },
            tags: ['cat.aria', 'wcag2a', 'wcag411', 'wcag412'],
            all: [],
            any: ['aria-allowed-attr'],
            none: []
        }, {
            id: 'aria-hidden-body',
            selector: 'body',
            excludeHidden: false,
            tags: ['cat.aria', 'wcag2a', 'wcag412'],
            all: [],
            any: ['aria-hidden-body'],
            none: []
        }, {
            id: 'aria-required-attr',
            selector: '[role]',
            tags: ['cat.aria', 'wcag2a', 'wcag411', 'wcag412'],
            all: [],
            any: ['aria-required-attr'],
            none: []
        }, {
            id: 'aria-required-children',
            selector: '[role]',
            tags: ['cat.aria', 'wcag2a', 'wcag131'],
            all: [],
            any: ['aria-required-children'],
            none: []
        }, {
            id: 'aria-required-parent',
            selector: '[role]',
            tags: ['cat.aria', 'wcag2a', 'wcag131'],
            all: [],
            any: ['aria-required-parent'],
            none: []
        }, {
            id: 'aria-roles',
            selector: '[role]',
            tags: ['cat.aria', 'wcag2a', 'wcag131', 'wcag411', 'wcag412'],
            all: [],
            any: [],
            none: ['invalidrole', 'abstractrole']
        }, {
            id: 'aria-valid-attr-value',
            matches: function matches(node) {
                var aria = /^aria-/;
                if (node.hasAttributes()) {
                    var attrs = node.attributes;
                    for (var i = 0, l = attrs.length; i < l; i++) {
                        if (aria.test(attrs[i].name)) {
                            return true;
                        }
                    }
                }
                return false;
            },
            tags: ['cat.aria', 'wcag2a', 'wcag131', 'wcag411', 'wcag412'],
            all: [{
                options: [],
                id: 'aria-valid-attr-value'
            }, 'aria-errormessage'],
            any: [],
            none: []
        }, {
            id: 'aria-valid-attr',
            matches: function matches(node) {
                var aria = /^aria-/;
                if (node.hasAttributes()) {
                    var attrs = node.attributes;
                    for (var i = 0, l = attrs.length; i < l; i++) {
                        if (aria.test(attrs[i].name)) {
                            return true;
                        }
                    }
                }
                return false;
            },
            tags: ['cat.aria', 'wcag2a', 'wcag411'],
            all: [],
            any: [{
                options: [],
                id: 'aria-valid-attr'
            }],
            none: []
        }, {
            id: 'audio-caption',
            selector: 'audio',
            excludeHidden: false,
            tags: ['cat.time-and-media', 'wcag2a', 'wcag122', 'section508', 'section508.22.a'],
            all: [],
            any: [],
            none: ['caption']
        }, {
            id: 'blink',
            selector: 'blink',
            excludeHidden: false,
            tags: ['cat.time-and-media', 'wcag2a', 'wcag222', 'section508', 'section508.22.j'],
            all: [],
            any: [],
            none: ['is-on-screen']
        }, {
            id: 'button-name',
            selector: 'button, [role="button"], input[type="button"], input[type="submit"], input[type="reset"]',
            tags: ['cat.name-role-value', 'wcag2a', 'wcag412', 'section508', 'section508.22.a'],
            all: [],
            any: ['non-empty-if-present', 'non-empty-value', 'button-has-visible-text', 'aria-label', 'aria-labelledby', 'role-presentation', 'role-none'],
            none: ['focusable-no-name']
        }, {
            id: 'bypass',
            selector: 'html',
            pageLevel: true,
            matches: function matches(node) {
                return !!node.querySelector('a[href]');
            },
            tags: ['cat.keyboard', 'wcag2a', 'wcag241', 'section508', 'section508.22.o'],
            all: [],
            any: ['internal-link-present', 'header-present', 'landmark'],
            none: []
        }, {
            id: 'checkboxgroup',
            selector: 'input[type=checkbox][name]',
            tags: ['cat.forms', 'best-practice'],
            all: [],
            any: ['group-labelledby', 'fieldset'],
            none: []
        }, {
            id: 'color-contrast',
            matches: function matches(node) {
                var nodeName = node.nodeName.toUpperCase(), nodeType = node.type, doc = document;
                if (node.getAttribute('aria-disabled') === 'true' || axe.commons.dom.findUp(node, '[aria-disabled="true"]')) {
                    return false;
                }
                if (nodeName === 'INPUT') {
                    return ['hidden', 'range', 'color', 'checkbox', 'radio', 'image'].indexOf(nodeType) === -1 && !node.disabled;
                }
                if (nodeName === 'SELECT') {
                    return !!node.options.length && !node.disabled;
                }
                if (nodeName === 'TEXTAREA') {
                    return !node.disabled;
                }
                if (nodeName === 'OPTION') {
                    return false;
                }
                if (nodeName === 'BUTTON' && node.disabled || axe.commons.dom.findUp(node, 'button[disabled]')) {
                    return false;
                }
                if (nodeName === 'FIELDSET' && node.disabled || axe.commons.dom.findUp(node, 'fieldset[disabled]')) {
                    return false;
                }
                var nodeParentLabel = axe.commons.dom.findUp(node, 'label');
                if (nodeName === 'LABEL' || nodeParentLabel) {
                    var relevantNode = node;
                    if (nodeParentLabel) {
                        relevantNode = nodeParentLabel;
                    }
                    var candidate = relevantNode.htmlFor && doc.getElementById(relevantNode.htmlFor);
                    if (candidate && candidate.disabled) {
                        return false;
                    }
                    var candidate = relevantNode.querySelector('input:not([type="hidden"]):not([type="image"])' + ':not([type="button"]):not([type="submit"]):not([type="reset"]), select, textarea');
                    if (candidate && candidate.disabled) {
                        return false;
                    }
                }
                if (node.getAttribute('id')) {
                    var id = axe.commons.utils.escapeSelector(node.getAttribute('id'));
                    var _candidate = doc.querySelector('[aria-labelledby~="' + id + '"]');
                    if (_candidate && _candidate.hasAttribute('disabled')) {
                        return false;
                    }
                }
                if (axe.commons.text.visible(node, false, true) === '') {
                    return false;
                }
                var range = document.createRange(), childNodes = node.childNodes, length = childNodes.length, child, index;
                for (index = 0; index < length; index++) {
                    child = childNodes[index];
                    if (child.nodeType === 3 && axe.commons.text.sanitize(child.nodeValue) !== '') {
                        range.selectNodeContents(child);
                    }
                }
                var rects = range.getClientRects();
                length = rects.length;
                for (index = 0; index < length; index++) {
                    if (axe.commons.dom.visuallyOverlaps(rects[index], node)) {
                        return true;
                    }
                }
                return false;
            },
            excludeHidden: false,
            options: {
                noScroll: false
            },
            tags: ['cat.color', 'wcag2aa', 'wcag143'],
            all: [],
            any: ['color-contrast'],
            none: []
        }, {
            id: 'definition-list',
            selector: 'dl:not([role])',
            tags: ['cat.structure', 'wcag2a', 'wcag131'],
            all: [],
            any: [],
            none: ['structured-dlitems', 'only-dlitems']
        }, {
            id: 'dlitem',
            selector: 'dd:not([role]), dt:not([role])',
            tags: ['cat.structure', 'wcag2a', 'wcag131'],
            all: [],
            any: ['dlitem'],
            none: []
        }, {
            id: 'document-title',
            selector: 'html',
            matches: function matches(node) {
                return node.ownerDocument.defaultView.self === node.ownerDocument.defaultView.top;
            },
            tags: ['cat.text-alternatives', 'wcag2a', 'wcag242'],
            all: [],
            any: ['doc-has-title'],
            none: []
        }, {
            id: 'duplicate-id',
            selector: '[id]',
            excludeHidden: false,
            tags: ['cat.parsing', 'wcag2a', 'wcag411'],
            all: [],
            any: ['duplicate-id'],
            none: []
        }, {
            id: 'empty-heading',
            selector: 'h1, h2, h3, h4, h5, h6, [role="heading"]',
            enabled: true,
            tags: ['cat.name-role-value', 'best-practice'],
            all: [],
            any: ['has-visible-text', 'role-presentation', 'role-none'],
            none: []
        }, {
            id: 'frame-title-unique',
            selector: 'frame[title]:not([title=\'\']), iframe[title]:not([title=\'\'])',
            matches: function matches(node) {
                var title = node.getAttribute('title');
                return !!(title ? axe.commons.text.sanitize(title).trim() : '');
            },
            tags: ['cat.text-alternatives', 'best-practice'],
            all: [],
            any: [],
            none: ['unique-frame-title']
        }, {
            id: 'frame-title',
            selector: 'frame, iframe',
            tags: ['cat.text-alternatives', 'wcag2a', 'wcag241', 'section508', 'section508.22.i'],
            all: [],
            any: ['aria-label', 'aria-labelledby', 'non-empty-title', 'role-presentation', 'role-none'],
            none: []
        }, {
            id: 'heading-order',
            selector: 'h1,h2,h3,h4,h5,h6,[role=heading]',
            enabled: false,
            tags: ['cat.semantics', 'best-practice'],
            all: [],
            any: ['heading-order'],
            none: []
        }, {
            id: 'hidden-content',
            selector: '*',
            excludeHidden: false,
            tags: ['experimental', 'review-item'],
            all: [],
            any: ['hidden-content'],
            none: [],
            enabled: false
        }, {
            id: 'href-no-hash',
            selector: 'a[href]',
            enabled: false,
            tags: ['cat.semantics', 'best-practice'],
            all: [],
            any: ['href-no-hash'],
            none: []
        }, {
            id: 'html-has-lang',
            selector: 'html',
            tags: ['cat.language', 'wcag2a', 'wcag311'],
            all: [],
            any: ['has-lang'],
            none: []
        }, {
            id: 'html-lang-valid',
            selector: 'html[lang]',
            tags: ['cat.language', 'wcag2a', 'wcag311'],
            all: [],
            any: [],
            none: ['valid-lang']
        }, {
            id: 'image-alt',
            selector: 'img, [role=\'img\']',
            tags: ['cat.text-alternatives', 'wcag2a', 'wcag111', 'section508', 'section508.22.a'],
            all: [],
            any: ['has-alt', 'aria-label', 'aria-labelledby', 'non-empty-title', 'role-presentation', 'role-none'],
            none: []
        }, {
            id: 'image-redundant-alt',
            selector: 'button, [role="button"], a[href], p, li, td, th',
            tags: ['cat.text-alternatives', 'best-practice'],
            all: [],
            any: [],
            none: ['duplicate-img-label']
        }, {
            id: 'input-image-alt',
            selector: 'input[type="image"]',
            tags: ['cat.text-alternatives', 'wcag2a', 'wcag111', 'section508', 'section508.22.a'],
            all: [],
            any: ['non-empty-alt', 'aria-label', 'aria-labelledby', 'non-empty-title'],
            none: []
        }, {
            id: 'label-title-only',
            selector: 'input:not([type=\'hidden\']):not([type=\'image\']):not([type=\'button\']):not([type=\'submit\']):not([type=\'reset\']), select, textarea',
            enabled: false,
            tags: ['cat.forms', 'best-practice'],
            all: [],
            any: [],
            none: ['title-only']
        }, {
            id: 'label',
            selector: 'input:not([type=\'hidden\']):not([type=\'image\']):not([type=\'button\']):not([type=\'submit\']):not([type=\'reset\']), select, textarea',
            tags: ['cat.forms', 'wcag2a', 'wcag332', 'wcag131', 'section508', 'section508.22.n'],
            all: [],
            any: ['aria-label', 'aria-labelledby', 'implicit-label', 'explicit-label', 'non-empty-title'],
            none: ['help-same-as-label', 'multiple-label']
        }, {
            id: 'landmark-main-is-top-level',
            selector: 'main,[role=main]',
            tags: ['best-practice'],
            all: [],
            any: ['main-is-top-level'],
            none: []
        }, {
            id: 'landmark-one-main',
            selector: 'html',
            tags: ['best-practice'],
            all: ['has-at-least-one-main', 'has-no-more-than-one-main'],
            any: [],
            none: []
        }, {
            id: 'layout-table',
            selector: 'table',
            matches: function matches(node) {
                return !axe.commons.table.isDataTable(node);
            },
            tags: ['cat.semantics', 'wcag2a', 'wcag131'],
            all: [],
            any: [],
            none: ['has-th', 'has-caption', 'has-summary']
        }, {
            id: 'link-in-text-block',
            selector: 'a[href]:not([role]), *[role=link]',
            matches: function matches(node) {
                var text = axe.commons.text.sanitize(node.textContent);
                if (!text) {
                    return false;
                }
                if (!axe.commons.dom.isVisible(node, false)) {
                    return false;
                }
                return axe.commons.dom.isInTextBlock(node);
            },
            excludeHidden: false,
            tags: ['cat.color', 'experimental', 'wcag2a', 'wcag141'],
            all: ['link-in-text-block'],
            any: [],
            none: []
        }, {
            id: 'link-name',
            selector: 'a[href]:not([role="button"]), [role=link][href]',
            tags: ['cat.name-role-value', 'wcag2a', 'wcag111', 'wcag412', 'wcag244', 'section508', 'section508.22.a'],
            all: [],
            any: ['has-visible-text', 'aria-label', 'aria-labelledby', 'role-presentation', 'role-none'],
            none: ['focusable-no-name']
        }, {
            id: 'list',
            selector: 'ul:not([role]), ol:not([role])',
            tags: ['cat.structure', 'wcag2a', 'wcag131'],
            all: [],
            any: [],
            none: ['only-listitems']
        }, {
            id: 'listitem',
            selector: 'li:not([role])',
            tags: ['cat.structure', 'wcag2a', 'wcag131'],
            all: [],
            any: ['listitem'],
            none: []
        }, {
            id: 'marquee',
            selector: 'marquee',
            excludeHidden: false,
            tags: ['cat.parsing', 'wcag2a', 'wcag222'],
            all: [],
            any: [],
            none: ['is-on-screen']
        }, {
            id: 'meta-refresh',
            selector: 'meta[http-equiv="refresh"]',
            excludeHidden: false,
            tags: ['cat.time', 'wcag2a', 'wcag2aaa', 'wcag221', 'wcag224', 'wcag325'],
            all: [],
            any: ['meta-refresh'],
            none: []
        }, {
            id: 'meta-viewport-large',
            selector: 'meta[name="viewport"]',
            excludeHidden: false,
            tags: ['cat.sensory-and-visual-cues', 'best-practice'],
            all: [],
            any: [{
                options: {
                    scaleMinimum: 5,
                    lowerBound: 2
                },
                id: 'meta-viewport-large'
            }],
            none: []
        }, {
            id: 'meta-viewport',
            selector: 'meta[name="viewport"]',
            excludeHidden: false,
            tags: ['cat.sensory-and-visual-cues', 'wcag2aa', 'wcag144'],
            all: [],
            any: [{
                options: {
                    scaleMinimum: 2
                },
                id: 'meta-viewport'
            }],
            none: []
        }, {
            id: 'object-alt',
            selector: 'object',
            tags: ['cat.text-alternatives', 'wcag2a', 'wcag111', 'section508', 'section508.22.a'],
            all: [],
            any: ['has-visible-text', 'aria-label', 'aria-labelledby', 'non-empty-title'],
            none: []
        }, {
            id: 'p-as-heading',
            selector: 'p',
            matches: function matches(node) {
                var children = Array.from(node.parentNode.childNodes);
                var nodeText = node.textContent.trim();
                var isSentence = /[.!?:;](?![.!?:;])/g;
                if (nodeText.length === 0 || (nodeText.match(isSentence) || []).length >= 2) {
                    return false;
                }
                var siblingsAfter = children.slice(children.indexOf(node) + 1).filter(function (elm) {
                    return elm.nodeName.toUpperCase() === 'P' && elm.textContent.trim() !== '';
                });
                return siblingsAfter.length !== 0;
            },
            tags: ['cat.semantics', 'wcag2a', 'wcag131', 'experimental'],
            all: [{
                options: {
                    margins: [{
                        weight: 150,
                        italic: true
                    }, {
                        weight: 150,
                        size: 1.15
                    }, {
                        italic: true,
                        size: 1.15
                    }, {
                        size: 1.4
                    }]
                },
                id: 'p-as-heading'
            }],
            any: [],
            none: []
        }, {
            id: 'radiogroup',
            selector: 'input[type=radio][name]',
            tags: ['cat.forms', 'best-practice'],
            all: [],
            any: ['group-labelledby', 'fieldset'],
            none: []
        }, {
            id: 'region',
            selector: 'html',
            pageLevel: true,
            enabled: false,
            tags: ['cat.keyboard', 'best-practice'],
            all: [],
            any: ['region'],
            none: []
        }, {
            id: 'scope-attr-valid',
            selector: 'td[scope], th[scope]',
            enabled: true,
            tags: ['cat.tables', 'best-practice'],
            all: ['html5-scope', 'scope-value'],
            any: [],
            none: []
        }, {
            id: 'server-side-image-map',
            selector: 'img[ismap]',
            tags: ['cat.text-alternatives', 'wcag2a', 'wcag211', 'section508', 'section508.22.f'],
            all: [],
            any: [],
            none: ['exists']
        }, {
            id: 'skip-link',
            selector: 'a[href]',
            pageLevel: true,
            enabled: false,
            tags: ['cat.keyboard', 'best-practice'],
            all: [],
            any: ['skip-link'],
            none: []
        }, {
            id: 'tabindex',
            selector: '[tabindex]',
            tags: ['cat.keyboard', 'best-practice'],
            all: [],
            any: ['tabindex'],
            none: []
        }, {
            id: 'table-duplicate-name',
            selector: 'table',
            tags: ['cat.tables', 'best-practice'],
            all: [],
            any: [],
            none: ['same-caption-summary']
        }, {
            id: 'table-fake-caption',
            selector: 'table',
            matches: function matches(node) {
                return axe.commons.table.isDataTable(node);
            },
            tags: ['cat.tables', 'experimental', 'wcag2a', 'wcag131', 'section508', 'section508.22.g'],
            all: ['caption-faked'],
            any: [],
            none: []
        }, {
            id: 'td-has-header',
            selector: 'table',
            matches: function matches(node) {
                if (axe.commons.table.isDataTable(node)) {
                    var tableArray = axe.commons.table.toArray(node);
                    return tableArray.length >= 3 && tableArray[0].length >= 3 && tableArray[1].length >= 3 && tableArray[2].length >= 3;
                }
                return false;
            },
            tags: ['cat.tables', 'experimental', 'wcag2a', 'wcag131', 'section508', 'section508.22.g'],
            all: ['td-has-header'],
            any: [],
            none: []
        }, {
            id: 'td-headers-attr',
            selector: 'table',
            tags: ['cat.tables', 'wcag2a', 'wcag131', 'section508', 'section508.22.g'],
            all: ['td-headers-attr'],
            any: [],
            none: []
        }, {
            id: 'th-has-data-cells',
            selector: 'table',
            matches: function matches(node) {
                return axe.commons.table.isDataTable(node);
            },
            tags: ['cat.tables', 'wcag2a', 'wcag131', 'section508', 'section508.22.g'],
            all: ['th-has-data-cells'],
            any: [],
            none: []
        }, {
            id: 'valid-lang',
            selector: '[lang]:not(html), [xml\\:lang]:not(html)',
            tags: ['cat.language', 'wcag2aa', 'wcag312'],
            all: [],
            any: [],
            none: ['valid-lang']
        }, {
            id: 'video-caption',
            selector: 'video',
            excludeHidden: false,
            tags: ['cat.text-alternatives', 'wcag2a', 'wcag122', 'wcag123', 'section508', 'section508.22.a'],
            all: [],
            any: [],
            none: ['caption']
        }, {
            id: 'video-description',
            selector: 'video',
            excludeHidden: false,
            tags: ['cat.text-alternatives', 'wcag2aa', 'wcag125', 'section508', 'section508.22.b'],
            all: [],
            any: [],
            none: ['description']
        }],
        checks: [{
            id: 'abstractrole',
            evaluate: function evaluate(node, options) {
                return axe.commons.aria.getRoleType(node.getAttribute('role')) === 'abstract';
            }
        }, {
            id: 'aria-allowed-attr',
            evaluate: function evaluate(node, options) {
                var invalid = [];
                var attr, attrName, allowed, role = node.getAttribute('role'), attrs = node.attributes;
                if (!role) {
                    role = axe.commons.aria.implicitRole(node);
                }
                allowed = axe.commons.aria.allowedAttr(role);
                if (role && allowed) {
                    for (var i = 0, l = attrs.length; i < l; i++) {
                        attr = attrs[i];
                        attrName = attr.name;
                        if (axe.commons.aria.validateAttr(attrName) && allowed.indexOf(attrName) === -1) {
                            invalid.push(attrName + '="' + attr.nodeValue + '"');
                        }
                    }
                }
                if (invalid.length) {
                    this.data(invalid);
                    return false;
                }
                return true;
            }
        }, {
            id: 'aria-hidden-body',
            evaluate: function evaluate(node, options) {
                return node.getAttribute('aria-hidden') !== 'true';
            }
        }, {
            id: 'aria-errormessage',
            evaluate: function evaluate(node, options) {
                options = Array.isArray(options) ? options : [];
                var attr = node.getAttribute('aria-errormessage'), hasAttr = node.hasAttribute('aria-errormessage');
                var doc = document;
                function validateAttrValue() {
                    var idref = attr && doc.getElementById(attr);
                    if (idref) {
                        return idref.getAttribute('role') === 'alert' || idref.getAttribute('aria-live') === 'assertive' || axe.utils.tokenList(node.getAttribute('aria-describedby') || '').indexOf(attr) > -1;
                    }
                }
                if (options.indexOf(attr) === -1 && hasAttr) {
                    if (!validateAttrValue()) {
                        this.data(attr);
                        return false;
                    }
                }
                return true;
            }
        }, {
            id: 'invalidrole',
            evaluate: function evaluate(node, options) {
                return !axe.commons.aria.isValidRole(node.getAttribute('role'));
            }
        }, {
            id: 'aria-required-attr',
            evaluate: function evaluate(node, options) {
                var missing = [];
                if (node.hasAttributes()) {
                    var attr, role = node.getAttribute('role'), required = axe.commons.aria.requiredAttr(role);
                    if (role && required) {
                        for (var i = 0, l = required.length; i < l; i++) {
                            attr = required[i];
                            if (!node.getAttribute(attr)) {
                                missing.push(attr);
                            }
                        }
                    }
                }
                if (missing.length) {
                    this.data(missing);
                    return false;
                }
                return true;
            }
        }, {
            id: 'aria-required-children',
            evaluate: function evaluate(node, options) {
                var requiredOwned = axe.commons.aria.requiredOwned, implicitNodes = axe.commons.aria.implicitNodes, matchesSelector = axe.commons.utils.matchesSelector, idrefs = axe.commons.dom.idrefs;
                function owns(node, role, ariaOwned) {
                    if (node === null) {
                        return false;
                    }
                    var implicit = implicitNodes(role), selector = ['[role="' + role + '"]'];
                    if (implicit) {
                        selector = selector.concat(implicit);
                    }
                    selector = selector.join(',');
                    return ariaOwned ? matchesSelector(node, selector) || !!node.querySelector(selector) : !!node.querySelector(selector);
                }
                function ariaOwns(nodes, role) {
                    var index, length;
                    for (index = 0, length = nodes.length; index < length; index++) {
                        if (nodes[index] === null) {
                            continue;
                        }
                        if (owns(nodes[index], role, true)) {
                            return true;
                        }
                    }
                    return false;
                }
                function missingRequiredChildren(node, childRoles, all, role) {
                    var i, l = childRoles.length, missing = [], ownedElements = idrefs(node, 'aria-owns');
                    for (i = 0; i < l; i++) {
                        var r = childRoles[i];
                        if (owns(node, r) || ariaOwns(ownedElements, r)) {
                            if (!all) {
                                return null;
                            }
                        } else {
                            if (all) {
                                missing.push(r);
                            }
                        }
                    }
                    if (role === 'combobox') {
                        var textboxIndex = missing.indexOf('textbox');
                        var textTypeInputs = ['text', 'search', 'email', 'url', 'tel'];
                        if (textboxIndex >= 0 && node.tagName === 'INPUT' && textTypeInputs.includes(node.type)) {
                            missing.splice(textboxIndex, 1);
                        }
                        var listboxIndex = missing.indexOf('listbox');
                        var expanded = node.getAttribute('aria-expanded');
                        if (listboxIndex >= 0 && (!expanded || expanded === 'false')) {
                            missing.splice(listboxIndex, 1);
                        }
                    }
                    if (missing.length) {
                        return missing;
                    }
                    if (!all && childRoles.length) {
                        return childRoles;
                    }
                    return null;
                }
                var role = node.getAttribute('role');
                var required = requiredOwned(role);
                if (!required) {
                    return true;
                }
                var all = false;
                var childRoles = required.one;
                if (!childRoles) {
                    var all = true;
                    childRoles = required.all;
                }
                var missing = missingRequiredChildren(node, childRoles, all, role);
                if (!missing) {
                    return true;
                }
                this.data(missing);
                return false;
            }
        }, {
            id: 'aria-required-parent',
            evaluate: function evaluate(node, options) {
                function getSelector(role) {
                    var impliedNative = axe.commons.aria.implicitNodes(role) || [];
                    return impliedNative.concat('[role="' + role + '"]').join(',');
                }
                function getMissingContext(element, requiredContext, includeElement) {
                    var index, length, role = element.getAttribute('role'), missing = [];
                    if (!requiredContext) {
                        requiredContext = axe.commons.aria.requiredContext(role);
                    }
                    if (!requiredContext) {
                        return null;
                    }
                    for (index = 0, length = requiredContext.length; index < length; index++) {
                        if (includeElement && axe.utils.matchesSelector(element, getSelector(requiredContext[index]))) {
                            return null;
                        }
                        if (axe.commons.dom.findUp(element, getSelector(requiredContext[index]))) {
                            return null;
                        } else {
                            missing.push(requiredContext[index]);
                        }
                    }
                    return missing;
                }
                function getAriaOwners(element) {
                    var owners = [], o = null;
                    while (element) {
                        if (element.getAttribute('id')) {
                            var id = axe.commons.utils.escapeSelector(element.getAttribute('id'));
                            o = document.querySelector('[aria-owns~=' + id + ']');
                            if (o) {
                                owners.push(o);
                            }
                        }
                        element = element.parentElement;
                    }
                    return owners.length ? owners : null;
                }
                var missingParents = getMissingContext(node);
                if (!missingParents) {
                    return true;
                }
                var owners = getAriaOwners(node);
                if (owners) {
                    for (var i = 0, l = owners.length; i < l; i++) {
                        missingParents = getMissingContext(owners[i], missingParents, true);
                        if (!missingParents) {
                            return true;
                        }
                    }
                }
                this.data(missingParents);
                return false;
            }
        }, {
            id: 'aria-valid-attr-value',
            evaluate: function evaluate(node, options) {
                options = Array.isArray(options) ? options : [];
                var invalid = [], aria = /^aria-/;
                var attr, attrName, attrs = node.attributes;
                var skipAttrs = ['aria-errormessage'];
                for (var i = 0, l = attrs.length; i < l; i++) {
                    attr = attrs[i];
                    attrName = attr.name;
                    if (!skipAttrs.includes(attrName)) {
                        if (options.indexOf(attrName) === -1 && aria.test(attrName) && !axe.commons.aria.validateAttrValue(node, attrName)) {
                            invalid.push(attrName + '="' + attr.nodeValue + '"');
                        }
                    }
                }
                if (invalid.length) {
                    this.data(invalid);
                    return false;
                }
                return true;
            },
            options: []
        }, {
            id: 'aria-valid-attr',
            evaluate: function evaluate(node, options) {
                options = Array.isArray(options) ? options : [];
                var invalid = [], aria = /^aria-/;
                var attr, attrs = node.attributes;
                for (var i = 0, l = attrs.length; i < l; i++) {
                    attr = attrs[i].name;
                    if (options.indexOf(attr) === -1 && aria.test(attr) && !axe.commons.aria.validateAttr(attr)) {
                        invalid.push(attr);
                    }
                }
                if (invalid.length) {
                    this.data(invalid);
                    return false;
                }
                return true;
            },
            options: []
        }, {
            id: 'color-contrast',
            evaluate: function evaluate(node, options) {
                if (!axe.commons.dom.isVisible(node, false)) {
                    return true;
                }
                var noScroll = !!(options || {}).noScroll;
                var bgNodes = [], bgColor = axe.commons.color.getBackgroundColor(node, bgNodes, noScroll), fgColor = axe.commons.color.getForegroundColor(node, noScroll);
                var nodeStyle = window.getComputedStyle(node);
                var fontSize = parseFloat(nodeStyle.getPropertyValue('font-size'));
                var fontWeight = nodeStyle.getPropertyValue('font-weight');
                var bold = ['bold', 'bolder', '600', '700', '800', '900'].indexOf(fontWeight) !== -1;
                var cr = axe.commons.color.hasValidContrastRatio(bgColor, fgColor, fontSize, bold);
                var truncatedResult = Math.floor(cr.contrastRatio * 100) / 100;
                var missing;
                if (bgColor === null) {
                    missing = axe.commons.color.incompleteData.get('bgColor');
                }
                var equalRatio = false;
                if (truncatedResult === 1) {
                    equalRatio = true;
                    missing = axe.commons.color.incompleteData.set('bgColor', 'equalRatio');
                }
                var data = {
                    fgColor: fgColor ? fgColor.toHexString() : undefined,
                    bgColor: bgColor ? bgColor.toHexString() : undefined,
                    contrastRatio: cr ? truncatedResult : undefined,
                    fontSize: (fontSize * 72 / 96).toFixed(1) + 'pt',
                    fontWeight: bold ? 'bold' : 'normal',
                    missingData: missing,
                    expectedContrastRatio: cr.expectedContrastRatio + ':1'
                };
                this.data(data);
                if (fgColor === null || bgColor === null || equalRatio) {
                    missing = null;
                    axe.commons.color.incompleteData.clear();
                    this.relatedNodes(bgNodes);
                    return undefined;
                } else if (!cr.isValid) {
                    this.relatedNodes(bgNodes);
                }
                return cr.isValid;
            }
        }, {
            id: 'link-in-text-block',
            evaluate: function evaluate(node, options) {
                var color = axe.commons.color;
                function getContrast(color1, color2) {
                    var c1lum = color1.getRelativeLuminance();
                    var c2lum = color2.getRelativeLuminance();
                    return (Math.max(c1lum, c2lum) + .05) / (Math.min(c1lum, c2lum) + .05);
                }
                var blockLike = ['block', 'list-item', 'table', 'flex', 'grid', 'inline-block'];
                function isBlock(elm) {
                    var display = window.getComputedStyle(elm).getPropertyValue('display');
                    return blockLike.indexOf(display) !== -1 || display.substr(0, 6) === 'table-';
                }
                if (isBlock(node)) {
                    return false;
                }
                var parentBlock = node.parentNode;
                while (parentBlock.nodeType === 1 && !isBlock(parentBlock)) {
                    parentBlock = parentBlock.parentNode;
                }
                this.relatedNodes([parentBlock]);
                if (color.elementIsDistinct(node, parentBlock)) {
                    return true;
                } else {
                    var nodeColor, parentColor;
                    nodeColor = color.getForegroundColor(node);
                    parentColor = color.getForegroundColor(parentBlock);
                    if (!nodeColor || !parentColor) {
                        return undefined;
                    }
                    var contrast = getContrast(nodeColor, parentColor);
                    if (contrast === 1) {
                        return true;
                    } else if (contrast >= 3) {
                        axe.commons.color.incompleteData.set('fgColor', 'bgContrast');
                        this.data({
                            missingData: axe.commons.color.incompleteData.get('fgColor')
                        });
                        axe.commons.color.incompleteData.clear();
                        return undefined;
                    }
                    nodeColor = color.getBackgroundColor(node);
                    parentColor = color.getBackgroundColor(parentBlock);
                    if (!nodeColor || !parentColor || getContrast(nodeColor, parentColor) >= 3) {
                        var reason = void 0;
                        if (!nodeColor || !parentColor) {
                            reason = axe.commons.color.incompleteData.get('bgColor');
                        } else {
                            reason = 'bgContrast';
                        }
                        axe.commons.color.incompleteData.set('fgColor', reason);
                        this.data({
                            missingData: axe.commons.color.incompleteData.get('fgColor')
                        });
                        axe.commons.color.incompleteData.clear();
                        return undefined;
                    }
                }
                return false;
            }
        }, {
            id: 'fieldset',
            evaluate: function evaluate(node, options) {
                var failureCode, self = this;
                function getUnrelatedElements(parent, name) {
                    return axe.commons.utils.toArray(parent.querySelectorAll('select,textarea,button,input:not([name="' + name + '"]):not([type="hidden"])'));
                }
                function checkFieldset(group, name) {
                    var firstNode = group.firstElementChild;
                    if (!firstNode || firstNode.nodeName.toUpperCase() !== 'LEGEND') {
                        self.relatedNodes([group]);
                        failureCode = 'no-legend';
                        return false;
                    }
                    if (!axe.commons.text.accessibleText(firstNode)) {
                        self.relatedNodes([firstNode]);
                        failureCode = 'empty-legend';
                        return false;
                    }
                    var otherElements = getUnrelatedElements(group, name);
                    if (otherElements.length) {
                        self.relatedNodes(otherElements);
                        failureCode = 'mixed-inputs';
                        return false;
                    }
                    return true;
                }
                function checkARIAGroup(group, name) {
                    var hasLabelledByText = axe.commons.dom.idrefs(group, 'aria-labelledby').some(function (element) {
                        return element && axe.commons.text.accessibleText(element);
                    });
                    var ariaLabel = group.getAttribute('aria-label');
                    if (!hasLabelledByText && !(ariaLabel && axe.commons.text.sanitize(ariaLabel))) {
                        self.relatedNodes(group);
                        failureCode = 'no-group-label';
                        return false;
                    }
                    var otherElements = getUnrelatedElements(group, name);
                    if (otherElements.length) {
                        self.relatedNodes(otherElements);
                        failureCode = 'group-mixed-inputs';
                        return false;
                    }
                    return true;
                }
                function spliceCurrentNode(nodes, current) {
                    return axe.commons.utils.toArray(nodes).filter(function (candidate) {
                        return candidate !== current;
                    });
                }
                function runCheck(element) {
                    var name = axe.commons.utils.escapeSelector(node.name);
                    var matchingNodes = document.querySelectorAll('input[type="' + axe.commons.utils.escapeSelector(node.type) + '"][name="' + name + '"]');
                    if (matchingNodes.length < 2) {
                        return true;
                    }
                    var fieldset = axe.commons.dom.findUp(element, 'fieldset');
                    var group = axe.commons.dom.findUp(element, '[role="group"]' + (node.type === 'radio' ? ',[role="radiogroup"]' : ''));
                    if (!group && !fieldset) {
                        failureCode = 'no-group';
                        self.relatedNodes(spliceCurrentNode(matchingNodes, element));
                        return false;
                    }
                    return fieldset ? checkFieldset(fieldset, name) : checkARIAGroup(group, name);
                }
                var data = {
                    name: node.getAttribute('name'),
                    type: node.getAttribute('type')
                };
                var result = runCheck(node);
                if (!result) {
                    data.failureCode = failureCode;
                }
                this.data(data);
                return result;
            },
            after: function after(results, options) {
                var seen = {};
                return results.filter(function (result) {
                    if (result.result) {
                        return true;
                    }
                    var data = result.data;
                    if (data) {
                        seen[data.type] = seen[data.type] || {};
                        if (!seen[data.type][data.name]) {
                            seen[data.type][data.name] = [data];
                            return true;
                        }
                        var hasBeenSeen = seen[data.type][data.name].some(function (candidate) {
                            return candidate.failureCode === data.failureCode;
                        });
                        if (!hasBeenSeen) {
                            seen[data.type][data.name].push(data);
                        }
                        return !hasBeenSeen;
                    }
                    return false;
                });
            }
        }, {
            id: 'group-labelledby',
            evaluate: function evaluate(node, options) {
                this.data({
                    name: node.getAttribute('name'),
                    type: node.getAttribute('type')
                });
                var matchingNodes = document.querySelectorAll('input[type="' + axe.commons.utils.escapeSelector(node.type) + '"][name="' + axe.commons.utils.escapeSelector(node.name) + '"]');
                if (matchingNodes.length <= 1) {
                    return true;
                }
                return [].map.call(matchingNodes, function (m) {
                    var l = m.getAttribute('aria-labelledby');
                    return l ? l.split(/\s+/) : [];
                }).reduce(function (prev, curr) {
                    return prev.filter(function (n) {
                        return curr.indexOf(n) !== -1;
                    });
                }).filter(function (n) {
                    var labelNode = document.getElementById(n);
                    return labelNode && axe.commons.text.accessibleText(labelNode);
                }).length !== 0;
            },
            after: function after(results, options) {
                var seen = {};
                return results.filter(function (result) {
                    var data = result.data;
                    if (data) {
                        seen[data.type] = seen[data.type] || {};
                        if (!seen[data.type][data.name]) {
                            seen[data.type][data.name] = true;
                            return true;
                        }
                    }
                    return false;
                });
            }
        }, {
            id: 'accesskeys',
            evaluate: function evaluate(node, options) {
                if (axe.commons.dom.isVisible(node, false)) {
                    this.data(node.getAttribute('accesskey'));
                    this.relatedNodes([node]);
                }
                return true;
            },
            after: function after(results, options) {
                var seen = {};
                return results.filter(function (r) {
                    if (!r.data) {
                        return false;
                    }
                    var key = r.data.toUpperCase();
                    if (!seen[key]) {
                        seen[key] = r;
                        r.relatedNodes = [];
                        return true;
                    }
                    seen[key].relatedNodes.push(r.relatedNodes[0]);
                    return false;
                }).map(function (r) {
                    r.result = !!r.relatedNodes.length;
                    return r;
                });
            }
        }, {
            id: 'focusable-no-name',
            evaluate: function evaluate(node, options) {
                var tabIndex = node.getAttribute('tabindex'), isFocusable = axe.commons.dom.isFocusable(node) && tabIndex > -1;
                if (!isFocusable) {
                    return false;
                }
                return !axe.commons.text.accessibleText(node);
            }
        }, {
            id: 'has-at-least-one-main',
            evaluate: function evaluate(node, options) {
                var mains = document.querySelectorAll('main,[role=main]');
                this.data(!!mains[0]);
                return !!mains[0];
            },
            after: function after(results, options) {
                var hasMain = false;
                for (var i = 0; i < results.length && !hasMain; i++) {
                    hasMain = results[i].data;
                }
                for (var i = 0; i < results.length; i++) {
                    results[i].result = hasMain;
                }
                return results;
            }
        }, {
            id: 'has-no-more-than-one-main',
            evaluate: function evaluate(node, options) {
                var mains = document.querySelectorAll('main,[role=main]');
                return mains.length <= 1;
            }
        }, {
            id: 'main-is-top-level',
            evaluate: function evaluate(node, options) {
                var landmarks = axe.commons.aria.getRolesByType('landmark');
                var parent = node.parentNode;
                while (parent) {
                    if (parent.nodeType === 1) {
                        var role = parent.getAttribute('role');
                        if (!role && parent.tagName.toLowerCase() !== 'form') {
                            role = axe.commons.aria.implicitRole(parent);
                        }
                        if (role && landmarks.includes(role)) {
                            return false;
                        }
                    }
                    parent = parent.parentNode;
                }
                return true;
            }
        }, {
            id: 'tabindex',
            evaluate: function evaluate(node, options) {
                return node.tabIndex <= 0;
            }
        }, {
            id: 'duplicate-img-label',
            evaluate: function evaluate(node, options) {
                var imgs = node.querySelectorAll('img');
                var text = axe.commons.text.visible(node, true).toLowerCase();
                if (text === '') {
                    return false;
                }
                for (var i = 0, len = imgs.length; i < len; i++) {
                    var img = imgs[i];
                    var imgAlt = axe.commons.text.accessibleText(img).toLowerCase();
                    if (imgAlt === text && img.getAttribute('role') !== 'presentation' && axe.commons.dom.isVisible(img)) {
                        return true;
                    }
                }
                return false;
            }
        }, {
            id: 'explicit-label',
            evaluate: function evaluate(node, options) {
                if (node.getAttribute('id')) {
                    var id = axe.commons.utils.escapeSelector(node.getAttribute('id'));
                    var label = document.querySelector('label[for="' + id + '"]');
                    if (label) {
                        return !!axe.commons.text.accessibleText(label);
                    }
                }
                return false;
            }
        }, {
            id: 'help-same-as-label',
            evaluate: function evaluate(node, options) {
                var labelText = axe.commons.text.label(node), check = node.getAttribute('title');
                if (!labelText) {
                    return false;
                }
                if (!check) {
                    check = '';
                    if (node.getAttribute('aria-describedby')) {
                        var ref = axe.commons.dom.idrefs(node, 'aria-describedby');
                        check = ref.map(function (thing) {
                            return thing ? axe.commons.text.accessibleText(thing) : '';
                        }).join('');
                    }
                }
                return axe.commons.text.sanitize(check) === axe.commons.text.sanitize(labelText);
            },
            enabled: false
        }, {
            id: 'implicit-label',
            evaluate: function evaluate(node, options) {
                var label = axe.commons.dom.findUp(node, 'label');
                if (label) {
                    return !!axe.commons.text.accessibleText(label);
                }
                return false;
            }
        }, {
            id: 'multiple-label',
            evaluate: function evaluate(node, options) {
                var id = axe.commons.utils.escapeSelector(node.getAttribute('id'));
                var labels = Array.from(document.querySelectorAll('label[for="' + id + '"]'));
                var parent = node.parentNode;
                if (labels.length) {
                    labels = labels.filter(function (label, index) {
                        if (index === 0 && !axe.commons.dom.isVisible(label, true) || axe.commons.dom.isVisible(label, true)) {
                            return label;
                        }
                    });
                }
                while (parent) {
                    if (parent.tagName === 'LABEL' && labels.indexOf(parent) === -1) {
                        labels.push(parent);
                    }
                    parent = parent.parentNode;
                }
                this.relatedNodes(labels);
                return labels.length > 1;
            }
        }, {
            id: 'title-only',
            evaluate: function evaluate(node, options) {
                var labelText = axe.commons.text.label(node);
                return !labelText && !!(node.getAttribute('title') || node.getAttribute('aria-describedby'));
            }
        }, {
            id: 'has-lang',
            evaluate: function evaluate(node, options) {
                return !!(node.getAttribute('lang') || node.getAttribute('xml:lang') || '').trim();
            }
        }, {
            id: 'valid-lang',
            evaluate: function evaluate(node, options) {
                function getBaseLang(lang) {
                    return lang.trim().split('-')[0].toLowerCase();
                }
                var langs, invalid;
                langs = (options ? options : axe.commons.utils.validLangs()).map(getBaseLang);
                invalid = ['lang', 'xml:lang'].reduce(function (invalid, langAttr) {
                    var langVal = node.getAttribute(langAttr);
                    if (typeof langVal !== 'string') {
                        return invalid;
                    }
                    var baselangVal = getBaseLang(langVal);
                    if (baselangVal !== '' && langs.indexOf(baselangVal) === -1) {
                        invalid.push(langAttr + '="' + node.getAttribute(langAttr) + '"');
                    }
                    return invalid;
                }, []);
                if (invalid.length) {
                    this.data(invalid);
                    return true;
                }
                return false;
            }
        }, {
            id: 'dlitem',
            evaluate: function evaluate(node, options) {
                return node.parentNode.tagName.toUpperCase() === 'DL';
            }
        }, {
            id: 'has-listitem',
            evaluate: function evaluate(node, options) {
                var children = node.children;
                if (children.length === 0) {
                    return true;
                }
                for (var i = 0; i < children.length; i++) {
                    if (children[i].nodeName.toUpperCase() === 'LI') {
                        return false;
                    }
                }
                return true;
            }
        }, {
            id: 'listitem',
            evaluate: function evaluate(node, options) {
                if (['UL', 'OL'].indexOf(node.parentNode.nodeName.toUpperCase()) !== -1) {
                    return true;
                }
                return node.parentNode.getAttribute('role') === 'list';
            }
        }, {
            id: 'only-dlitems',
            evaluate: function evaluate(node, options) {
                var child, nodeName, bad = [], children = node.childNodes, permitted = ['STYLE', 'META', 'LINK', 'MAP', 'AREA', 'SCRIPT', 'DATALIST', 'TEMPLATE'], hasNonEmptyTextNode = false;
                for (var i = 0; i < children.length; i++) {
                    child = children[i];
                    var nodeName = child.nodeName.toUpperCase();
                    if (child.nodeType === 1 && nodeName !== 'DT' && nodeName !== 'DD' && permitted.indexOf(nodeName) === -1) {
                        bad.push(child);
                    } else if (child.nodeType === 3 && child.nodeValue.trim() !== '') {
                        hasNonEmptyTextNode = true;
                    }
                }
                if (bad.length) {
                    this.relatedNodes(bad);
                }
                var retVal = !!bad.length || hasNonEmptyTextNode;
                return retVal;
            }
        }, {
            id: 'only-listitems',
            evaluate: function evaluate(node, options) {
                var child, nodeName, bad = [], children = node.childNodes, permitted = ['STYLE', 'META', 'LINK', 'MAP', 'AREA', 'SCRIPT', 'DATALIST', 'TEMPLATE'], hasNonEmptyTextNode = false;
                for (var i = 0; i < children.length; i++) {
                    child = children[i];
                    nodeName = child.nodeName.toUpperCase();
                    if (child.nodeType === 1 && nodeName !== 'LI' && permitted.indexOf(nodeName) === -1) {
                        bad.push(child);
                    } else if (child.nodeType === 3 && child.nodeValue.trim() !== '') {
                        hasNonEmptyTextNode = true;
                    }
                }
                if (bad.length) {
                    this.relatedNodes(bad);
                }
                return !!bad.length || hasNonEmptyTextNode;
            }
        }, {
            id: 'structured-dlitems',
            evaluate: function evaluate(node, options) {
                var children = node.children;
                if (!children || !children.length) {
                    return false;
                }
                var hasDt = false, hasDd = false, nodeName;
                for (var i = 0; i < children.length; i++) {
                    nodeName = children[i].nodeName.toUpperCase();
                    if (nodeName === 'DT') {
                        hasDt = true;
                    }
                    if (hasDt && nodeName === 'DD') {
                        return false;
                    }
                    if (nodeName === 'DD') {
                        hasDd = true;
                    }
                }
                return hasDt || hasDd;
            }
        }, {
            id: 'caption',
            evaluate: function evaluate(node, options) {
                var tracks = node.querySelectorAll('track');
                if (tracks.length) {
                    for (var i = 0; i < tracks.length; i++) {
                        var kind = tracks[i].getAttribute('kind');
                        if (kind && kind === 'captions') {
                            return false;
                        }
                    }
                    return true;
                }
                return undefined;
            }
        }, {
            id: 'description',
            evaluate: function evaluate(node, options) {
                var tracks = node.querySelectorAll('track');
                if (tracks.length) {
                    for (var i = 0; i < tracks.length; i++) {
                        var kind = tracks[i].getAttribute('kind');
                        if (kind && kind === 'descriptions') {
                            return false;
                        }
                    }
                    return true;
                }
                return undefined;
            }
        }, {
            id: 'meta-viewport-large',
            evaluate: function evaluate(node, options) {
                options = options || {};
                var params, content = node.getAttribute('content') || '', parsedParams = content.split(/[;,]/), result = {}, minimum = options.scaleMinimum || 2, lowerBound = options.lowerBound || false;
                for (var i = 0, l = parsedParams.length; i < l; i++) {
                    params = parsedParams[i].split('=');
                    var key = params.shift().toLowerCase();
                    if (key && params.length) {
                        result[key.trim()] = params.shift().trim().toLowerCase();
                    }
                }
                if (lowerBound && result['maximum-scale'] && parseFloat(result['maximum-scale']) < lowerBound) {
                    return true;
                }
                if (!lowerBound && result['user-scalable'] === 'no') {
                    return false;
                }
                if (result['maximum-scale'] && parseFloat(result['maximum-scale']) < minimum) {
                    return false;
                }
                return true;
            },
            options: {
                scaleMinimum: 5,
                lowerBound: 2
            }
        }, {
            id: 'meta-viewport',
            evaluate: function evaluate(node, options) {
                options = options || {};
                var params, content = node.getAttribute('content') || '', parsedParams = content.split(/[;,]/), result = {}, minimum = options.scaleMinimum || 2, lowerBound = options.lowerBound || false;
                for (var i = 0, l = parsedParams.length; i < l; i++) {
                    params = parsedParams[i].split('=');
                    var key = params.shift().toLowerCase();
                    if (key && params.length) {
                        result[key.trim()] = params.shift().trim().toLowerCase();
                    }
                }
                if (lowerBound && result['maximum-scale'] && parseFloat(result['maximum-scale']) < lowerBound) {
                    return true;
                }
                if (!lowerBound && result['user-scalable'] === 'no') {
                    return false;
                }
                if (result['maximum-scale'] && parseFloat(result['maximum-scale']) < minimum) {
                    return false;
                }
                return true;
            },
            options: {
                scaleMinimum: 2
            }
        }, {
            id: 'header-present',
            evaluate: function evaluate(node, options) {
                return !!node.querySelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
            }
        }, {
            id: 'heading-order',
            evaluate: function evaluate(node, options) {
                var ariaHeadingLevel = node.getAttribute('aria-level');
                if (ariaHeadingLevel !== null) {
                    this.data(parseInt(ariaHeadingLevel, 10));
                    return true;
                }
                var headingLevel = node.tagName.match(/H(\d)/);
                if (headingLevel) {
                    this.data(parseInt(headingLevel[1], 10));
                    return true;
                }
                return true;
            },
            after: function after(results, options) {
                if (results.length < 2) {
                    return results;
                }
                var prevLevel = results[0].data;
                for (var i = 1; i < results.length; i++) {
                    if (results[i].result && results[i].data > prevLevel + 1) {
                        results[i].result = false;
                    }
                    prevLevel = results[i].data;
                }
                return results;
            }
        }, {
            id: 'href-no-hash',
            evaluate: function evaluate(node, options) {
                var href = node.getAttribute('href');
                if (href === '#') {
                    return false;
                }
                return true;
            }
        }, {
            id: 'internal-link-present',
            evaluate: function evaluate(node, options) {
                return !!node.querySelector('a[href^="#"]');
            }
        }, {
            id: 'landmark',
            evaluate: function evaluate(node, options) {
                return node.getElementsByTagName('main').length > 0 || !!node.querySelector('[role="main"]');
            }
        }, {
            id: 'meta-refresh',
            evaluate: function evaluate(node, options) {
                var content = node.getAttribute('content') || '', parsedParams = content.split(/[;,]/);
                return content === '' || parsedParams[0] === '0';
            }
        }, {
            id: 'p-as-heading',
            evaluate: function evaluate(node, options) {
                var siblings = Array.from(node.parentNode.children);
                var currentIndex = siblings.indexOf(node);
                options = options || {};
                var margins = options.margins || [];
                var nextSibling = siblings.slice(currentIndex + 1).find(function (elm) {
                    return elm.nodeName.toUpperCase() === 'P';
                });
                var prevSibling = siblings.slice(0, currentIndex).reverse().find(function (elm) {
                    return elm.nodeName.toUpperCase() === 'P';
                });
                function getTextContainer(elm) {
                    var nextNode = elm;
                    var outerText = elm.textContent.trim();
                    var innerText = outerText;
                    while (innerText === outerText && nextNode !== undefined) {
                        var i = -1;
                        elm = nextNode;
                        if (elm.children.length === 0) {
                            return elm;
                        }
                        do {
                            i++;
                            innerText = elm.children[i].textContent.trim();
                        } while (innerText === '' && i + 1 < elm.children.length);
                        nextNode = elm.children[i];
                    }
                    return elm;
                }
                function normalizeFontWeight(weight) {
                    switch (weight) {
                        case 'lighter':
                            return 100;

                        case 'normal':
                            return 400;

                        case 'bold':
                            return 700;

                        case 'bolder':
                            return 900;
                    }
                    weight = parseInt(weight);
                    return !isNaN(weight) ? weight : 400;
                }
                function getStyleValues(node) {
                    var style = window.getComputedStyle(getTextContainer(node));
                    return {
                        fontWeight: normalizeFontWeight(style.getPropertyValue('font-weight')),
                        fontSize: parseInt(style.getPropertyValue('font-size')),
                        isItalic: style.getPropertyValue('font-style') === 'italic'
                    };
                }
                function isHeaderStyle(styleA, styleB, margins) {
                    return margins.reduce(function (out, margin) {
                        return out || (!margin.size || styleA.fontSize / margin.size > styleB.fontSize) && (!margin.weight || styleA.fontWeight - margin.weight > styleB.fontWeight) && (!margin.italic || styleA.isItalic && !styleB.isItalic);
                    }, false);
                }
                var currStyle = getStyleValues(node);
                var nextStyle = nextSibling ? getStyleValues(nextSibling) : null;
                var prevStyle = prevSibling ? getStyleValues(prevSibling) : null;
                if (!nextStyle || !isHeaderStyle(currStyle, nextStyle, margins)) {
                    return true;
                }
                var blockquote = axe.commons.dom.findUp(node, 'blockquote');
                if (blockquote && blockquote.nodeName.toUpperCase() === 'BLOCKQUOTE') {
                    return undefined;
                }
                if (prevStyle && !isHeaderStyle(currStyle, prevStyle, margins)) {
                    return undefined;
                }
                return false;
            },
            options: {
                margins: [{
                    weight: 150,
                    italic: true
                }, {
                    weight: 150,
                    size: 1.15
                }, {
                    italic: true,
                    size: 1.15
                }, {
                    size: 1.4
                }]
            }
        }, {
            id: 'region',
            evaluate: function evaluate(node, options) {
                var landmarkRoles = axe.commons.aria.getRolesByType('landmark'), firstLink = node.querySelector('a[href]');
                var implicitLandmarks = landmarkRoles.reduce(function (arr, role) {
                    return arr.concat(axe.commons.aria.implicitNodes(role));
                }, []).filter(function (r) {
                    return r !== null;
                });
                function isSkipLink(n) {
                    return firstLink && axe.commons.dom.getElementByReference(firstLink, 'href') && firstLink === n;
                }
                function isLandmark(node) {
                    if (node.hasAttribute('role')) {
                        return landmarkRoles.includes(node.getAttribute('role').toLowerCase());
                    } else {
                        return implicitLandmarks.some(function (implicitSelector) {
                            return axe.utils.matchesSelector(node, implicitSelector);
                        });
                    }
                }
                function checkRegion(n) {
                    if (isLandmark(n)) {
                        return null;
                    }
                    if (isSkipLink(n)) {
                        return getViolatingChildren(n);
                    }
                    if (axe.commons.dom.isVisible(n, true) && (axe.commons.text.visible(n, true, true) || axe.commons.dom.isVisualContent(n))) {
                        return n;
                    }
                    return getViolatingChildren(n);
                }
                function getViolatingChildren(n) {
                    var children = axe.commons.utils.toArray(n.children);
                    if (children.length === 0) {
                        return [];
                    }
                    return children.map(checkRegion).filter(function (c) {
                        return c !== null;
                    }).reduce(function (a, b) {
                        return a.concat(b);
                    }, []);
                }
                var v = getViolatingChildren(node);
                this.relatedNodes(v);
                return !v.length;
            },
            after: function after(results, options) {
                return [results[0]];
            }
        }, {
            id: 'skip-link',
            evaluate: function evaluate(node, options) {
                var target = axe.commons.dom.getElementByReference(node, 'href');
                return !!target && axe.commons.dom.isFocusable(target);
            },
            after: function after(results, options) {
                return [results[0]];
            }
        }, {
            id: 'unique-frame-title',
            evaluate: function evaluate(node, options) {
                var title = axe.commons.text.sanitize(node.title).trim().toLowerCase();
                this.data(title);
                return true;
            },
            after: function after(results, options) {
                var titles = {};
                results.forEach(function (r) {
                    titles[r.data] = titles[r.data] !== undefined ? ++titles[r.data] : 0;
                });
                results.forEach(function (r) {
                    r.result = !!titles[r.data];
                });
                return results;
            }
        }, {
            id: 'aria-label',
            evaluate: function evaluate(node, options) {
                var label = node.getAttribute('aria-label');
                return !!(label ? axe.commons.text.sanitize(label).trim() : '');
            }
        }, {
            id: 'aria-labelledby',
            evaluate: function evaluate(node, options) {
                var getIdRefs = axe.commons.dom.idrefs;
                return getIdRefs(node, 'aria-labelledby').some(function (elm) {
                    return elm && axe.commons.text.accessibleText(elm, true);
                });
            }
        }, {
            id: 'button-has-visible-text',
            evaluate: function evaluate(node, options) {
                var nodeName = node.nodeName.toUpperCase();
                var role = node.getAttribute('role');
                var label = void 0;
                if (nodeName === 'BUTTON' || role === 'button' && nodeName !== 'INPUT') {
                    label = axe.commons.text.accessibleText(node);
                    this.data(label);
                    return !!label;
                } else {
                    return false;
                }
            }
        }, {
            id: 'doc-has-title',
            evaluate: function evaluate(node, options) {
                var title = document.title;
                return !!(title ? axe.commons.text.sanitize(title).trim() : '');
            }
        }, {
            id: 'duplicate-id',
            evaluate: function evaluate(node, options) {
                if (!node.getAttribute('id').trim()) {
                    return true;
                }
                var id = axe.commons.utils.escapeSelector(node.getAttribute('id'));
                var matchingNodes = document.querySelectorAll('[id="' + id + '"]');
                var related = [];
                for (var i = 0; i < matchingNodes.length; i++) {
                    if (matchingNodes[i] !== node) {
                        related.push(matchingNodes[i]);
                    }
                }
                if (related.length) {
                    this.relatedNodes(related);
                }
                this.data(node.getAttribute('id'));
                return matchingNodes.length <= 1;
            },
            after: function after(results, options) {
                var uniqueIds = [];
                return results.filter(function (r) {
                    if (uniqueIds.indexOf(r.data) === -1) {
                        uniqueIds.push(r.data);
                        return true;
                    }
                    return false;
                });
            }
        }, {
            id: 'exists',
            evaluate: function evaluate(node, options) {
                return true;
            }
        }, {
            id: 'has-alt',
            evaluate: function evaluate(node, options) {
                var nn = node.nodeName.toLowerCase();
                return node.hasAttribute('alt') && (nn === 'img' || nn === 'input' || nn === 'area');
            }
        }, {
            id: 'has-visible-text',
            evaluate: function evaluate(node, options) {
                return axe.commons.text.accessibleText(node).length > 0;
            }
        }, {
            id: 'is-on-screen',
            evaluate: function evaluate(node, options) {
                return axe.commons.dom.isVisible(node, false) && !axe.commons.dom.isOffscreen(node);
            }
        }, {
            id: 'non-empty-alt',
            evaluate: function evaluate(node, options) {
                var label = node.getAttribute('alt');
                return !!(label ? axe.commons.text.sanitize(label).trim() : '');
            }
        }, {
            id: 'non-empty-if-present',
            evaluate: function evaluate(node, options) {
                var nodeName = node.nodeName.toUpperCase();
                var type = (node.getAttribute('type') || '').toLowerCase();
                var label = node.getAttribute('value');
                this.data(label);
                if (nodeName === 'INPUT' && ['submit', 'reset'].indexOf(type) !== -1) {
                    return label === null;
                }
                return false;
            }
        }, {
            id: 'non-empty-title',
            evaluate: function evaluate(node, options) {
                var title = node.getAttribute('title');
                return !!(title ? axe.commons.text.sanitize(title).trim() : '');
            }
        }, {
            id: 'non-empty-value',
            evaluate: function evaluate(node, options) {
                var label = node.getAttribute('value');
                return !!(label ? axe.commons.text.sanitize(label).trim() : '');
            }
        }, {
            id: 'role-none',
            evaluate: function evaluate(node, options) {
                return node.getAttribute('role') === 'none';
            }
        }, {
            id: 'role-presentation',
            evaluate: function evaluate(node, options) {
                return node.getAttribute('role') === 'presentation';
            }
        }, {
            id: 'caption-faked',
            evaluate: function evaluate(node, options) {
                var table = axe.commons.table.toGrid(node);
                var firstRow = table[0];
                if (table.length <= 1 || firstRow.length <= 1 || node.rows.length <= 1) {
                    return true;
                }
                return firstRow.reduce(function (out, curr, i) {
                    return out || curr !== firstRow[i + 1] && firstRow[i + 1] !== undefined;
                }, false);
            }
        }, {
            id: 'has-caption',
            evaluate: function evaluate(node, options) {
                return !!node.caption;
            }
        }, {
            id: 'has-summary',
            evaluate: function evaluate(node, options) {
                return !!node.summary;
            }
        }, {
            id: 'has-th',
            evaluate: function evaluate(node, options) {
                var row, cell, badCells = [];
                for (var rowIndex = 0, rowLength = node.rows.length; rowIndex < rowLength; rowIndex++) {
                    row = node.rows[rowIndex];
                    for (var cellIndex = 0, cellLength = row.cells.length; cellIndex < cellLength; cellIndex++) {
                        cell = row.cells[cellIndex];
                        if (cell.nodeName.toUpperCase() === 'TH' || ['rowheader', 'columnheader'].indexOf(cell.getAttribute('role')) !== -1) {
                            badCells.push(cell);
                        }
                    }
                }
                if (badCells.length) {
                    this.relatedNodes(badCells);
                    return true;
                }
                return false;
            }
        }, {
            id: 'html5-scope',
            evaluate: function evaluate(node, options) {
                if (!axe.commons.dom.isHTML5(document)) {
                    return true;
                }
                return node.nodeName.toUpperCase() === 'TH';
            }
        }, {
            id: 'same-caption-summary',
            evaluate: function evaluate(node, options) {
                return !!(node.summary && node.caption) && node.summary === axe.commons.text.accessibleText(node.caption);
            }
        }, {
            id: 'scope-value',
            evaluate: function evaluate(node, options) {
                options = options || {};
                var value = node.getAttribute('scope').toLowerCase();
                var validVals = ['row', 'col', 'rowgroup', 'colgroup'] || options.values;
                return validVals.indexOf(value) !== -1;
            }
        }, {
            id: 'td-has-header',
            evaluate: function evaluate(node, options) {
                var tableUtils = axe.commons.table;
                var badCells = [];
                var cells = tableUtils.getAllCells(node);
                cells.forEach(function (cell) {
                    if (axe.commons.dom.hasContent(cell) && tableUtils.isDataCell(cell) && !axe.commons.aria.label(cell)) {
                        var hasHeaders = tableUtils.getHeaders(cell);
                        hasHeaders = hasHeaders.reduce(function (hasHeaders, header) {
                            return hasHeaders || header !== null && !!axe.commons.dom.hasContent(header);
                        }, false);
                        if (!hasHeaders) {
                            badCells.push(cell);
                        }
                    }
                });
                if (badCells.length) {
                    this.relatedNodes(badCells);
                    return false;
                }
                return true;
            }
        }, {
            id: 'td-headers-attr',
            evaluate: function evaluate(node, options) {
                var cells = [];
                for (var rowIndex = 0, rowLength = node.rows.length; rowIndex < rowLength; rowIndex++) {
                    var row = node.rows[rowIndex];
                    for (var cellIndex = 0, cellLength = row.cells.length; cellIndex < cellLength; cellIndex++) {
                        cells.push(row.cells[cellIndex]);
                    }
                }
                var ids = cells.reduce(function (ids, cell) {
                    if (cell.getAttribute('id')) {
                        ids.push(cell.getAttribute('id'));
                    }
                    return ids;
                }, []);
                var badCells = cells.reduce(function (badCells, cell) {
                    var isSelf, notOfTable;
                    var headers = (cell.getAttribute('headers') || '').split(/\s/).reduce(function (headers, header) {
                        header = header.trim();
                        if (header) {
                            headers.push(header);
                        }
                        return headers;
                    }, []);
                    if (headers.length !== 0) {
                        if (cell.getAttribute('id')) {
                            isSelf = headers.indexOf(cell.getAttribute('id').trim()) !== -1;
                        }
                        notOfTable = headers.reduce(function (fail, header) {
                            return fail || ids.indexOf(header) === -1;
                        }, false);
                        if (isSelf || notOfTable) {
                            badCells.push(cell);
                        }
                    }
                    return badCells;
                }, []);
                if (badCells.length > 0) {
                    this.relatedNodes(badCells);
                    return false;
                } else {
                    return true;
                }
            }
        }, {
            id: 'th-has-data-cells',
            evaluate: function evaluate(node, options) {
                var tableUtils = axe.commons.table;
                var cells = tableUtils.getAllCells(node);
                var checkResult = this;
                var reffedHeaders = [];
                cells.forEach(function (cell) {
                    var headers = cell.getAttribute('headers');
                    if (headers) {
                        reffedHeaders = reffedHeaders.concat(headers.split(/\s+/));
                    }
                    var ariaLabel = cell.getAttribute('aria-labelledby');
                    if (ariaLabel) {
                        reffedHeaders = reffedHeaders.concat(ariaLabel.split(/\s+/));
                    }
                });
                var headers = cells.filter(function (cell) {
                    if (axe.commons.text.sanitize(cell.textContent) === '') {
                        return false;
                    }
                    return cell.nodeName.toUpperCase() === 'TH' || ['rowheader', 'columnheader'].indexOf(cell.getAttribute('role')) !== -1;
                });
                var tableGrid = tableUtils.toGrid(node);
                var out = headers.reduce(function (res, header) {
                    if (header.getAttribute('id') && reffedHeaders.includes(header.getAttribute('id'))) {
                        return !res ? res : true;
                    }
                    var hasCell = false;
                    var pos = tableUtils.getCellPosition(header, tableGrid);
                    if (tableUtils.isColumnHeader(header)) {
                        hasCell = tableUtils.traverse('down', pos, tableGrid).reduce(function (out, cell) {
                            return out || axe.commons.dom.hasContent(cell) && !tableUtils.isColumnHeader(cell);
                        }, false);
                    }
                    if (!hasCell && tableUtils.isRowHeader(header)) {
                        hasCell = tableUtils.traverse('right', pos, tableGrid).reduce(function (out, cell) {
                            return out || axe.commons.dom.hasContent(cell) && !tableUtils.isRowHeader(cell);
                        }, false);
                    }
                    if (!hasCell) {
                        checkResult.relatedNodes(header);
                    }
                    return res && hasCell;
                }, true);
                return out ? true : undefined;
            }
        }, {
            id: 'hidden-content',
            evaluate: function evaluate(node, options) {
                var styles = window.getComputedStyle(node);
                var whitelist = ['SCRIPT', 'HEAD', 'TITLE', 'NOSCRIPT', 'STYLE', 'TEMPLATE'];
                if (!whitelist.includes(node.tagName.toUpperCase()) && axe.commons.dom.hasContent(node)) {
                    if (styles.getPropertyValue('display') === 'none') {
                        return undefined;
                    } else if (styles.getPropertyValue('visibility') === 'hidden') {
                        if (node.parentNode) {
                            var parentStyle = window.getComputedStyle(node.parentNode);
                        }
                        if (!parentStyle || parentStyle.getPropertyValue('visibility') !== 'hidden') {
                            return undefined;
                        }
                    }
                }
                return true;
            }
        }],
        commons: function () {
            var commons = {};
            var aria = commons.aria = {}, lookupTable = aria.lookupTable = {};
            lookupTable.attributes = {
                'aria-activedescendant': {
                    type: 'idref'
                },
                'aria-atomic': {
                    type: 'boolean',
                    values: ['true', 'false']
                },
                'aria-autocomplete': {
                    type: 'nmtoken',
                    values: ['inline', 'list', 'both', 'none']
                },
                'aria-busy': {
                    type: 'boolean',
                    values: ['true', 'false']
                },
                'aria-checked': {
                    type: 'nmtoken',
                    values: ['true', 'false', 'mixed', 'undefined']
                },
                'aria-colcount': {
                    type: 'int'
                },
                'aria-colindex': {
                    type: 'int'
                },
                'aria-colspan': {
                    type: 'int'
                },
                'aria-controls': {
                    type: 'idrefs'
                },
                'aria-current': {
                    type: 'nmtoken',
                    values: ['page', 'step', 'location', 'date', 'time', 'true', 'false']
                },
                'aria-describedby': {
                    type: 'idrefs'
                },
                'aria-disabled': {
                    type: 'boolean',
                    values: ['true', 'false']
                },
                'aria-dropeffect': {
                    type: 'nmtokens',
                    values: ['copy', 'move', 'reference', 'execute', 'popup', 'none']
                },
                'aria-errormessage': {
                    type: 'idref'
                },
                'aria-expanded': {
                    type: 'nmtoken',
                    values: ['true', 'false', 'undefined']
                },
                'aria-flowto': {
                    type: 'idrefs'
                },
                'aria-grabbed': {
                    type: 'nmtoken',
                    values: ['true', 'false', 'undefined']
                },
                'aria-haspopup': {
                    type: 'nmtoken',
                    values: ['true', 'false', 'menu', 'listbox', 'tree', 'grid', 'dialog']
                },
                'aria-hidden': {
                    type: 'boolean',
                    values: ['true', 'false']
                },
                'aria-invalid': {
                    type: 'nmtoken',
                    values: ['true', 'false', 'spelling', 'grammar']
                },
                'aria-keyshortcuts': {
                    type: 'string'
                },
                'aria-label': {
                    type: 'string'
                },
                'aria-labelledby': {
                    type: 'idrefs'
                },
                'aria-level': {
                    type: 'int'
                },
                'aria-live': {
                    type: 'nmtoken',
                    values: ['off', 'polite', 'assertive']
                },
                'aria-modal': {
                    type: 'boolean',
                    values: ['true', 'false']
                },
                'aria-multiline': {
                    type: 'boolean',
                    values: ['true', 'false']
                },
                'aria-multiselectable': {
                    type: 'boolean',
                    values: ['true', 'false']
                },
                'aria-orientation': {
                    type: 'nmtoken',
                    values: ['horizontal', 'vertical']
                },
                'aria-owns': {
                    type: 'idrefs'
                },
                'aria-placeholder': {
                    type: 'string'
                },
                'aria-posinset': {
                    type: 'int'
                },
                'aria-pressed': {
                    type: 'nmtoken',
                    values: ['true', 'false', 'mixed', 'undefined']
                },
                'aria-readonly': {
                    type: 'boolean',
                    values: ['true', 'false']
                },
                'aria-relevant': {
                    type: 'nmtokens',
                    values: ['additions', 'removals', 'text', 'all']
                },
                'aria-required': {
                    type: 'boolean',
                    values: ['true', 'false']
                },
                'aria-rowcount': {
                    type: 'int'
                },
                'aria-rowindex': {
                    type: 'int'
                },
                'aria-rowspan': {
                    type: 'int'
                },
                'aria-selected': {
                    type: 'nmtoken',
                    values: ['true', 'false', 'undefined']
                },
                'aria-setsize': {
                    type: 'int'
                },
                'aria-sort': {
                    type: 'nmtoken',
                    values: ['ascending', 'descending', 'other', 'none']
                },
                'aria-valuemax': {
                    type: 'decimal'
                },
                'aria-valuemin': {
                    type: 'decimal'
                },
                'aria-valuenow': {
                    type: 'decimal'
                },
                'aria-valuetext': {
                    type: 'string'
                }
            };
            lookupTable.globalAttributes = ['aria-atomic', 'aria-busy', 'aria-controls', 'aria-current', 'aria-describedby', 'aria-disabled', 'aria-dropeffect', 'aria-flowto', 'aria-grabbed', 'aria-haspopup', 'aria-hidden', 'aria-invalid', 'aria-keyshortcuts', 'aria-label', 'aria-labelledby', 'aria-live', 'aria-owns', 'aria-relevant'];
            lookupTable.role = {
                alert: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null
                },
                alertdialog: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-expanded', 'aria-modal']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null
                },
                application: {
                    type: 'landmark',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null
                },
                article: {
                    type: 'structure',
                    attributes: {
                        allowed: ['aria-expanded', 'aria-posinset', 'aria-setsize']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['article']
                },
                banner: {
                    type: 'landmark',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['header']
                },
                button: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-expanded', 'aria-pressed']
                    },
                    owned: null,
                    nameFrom: ['author', 'contents'],
                    context: null,
                    implicit: ['button', 'input[type="button"]', 'input[type="image"]', 'input[type="reset"]', 'input[type="submit"]', 'summary']
                },
                cell: {
                    type: 'structure',
                    attributes: {
                        allowed: ['aria-colindex', 'aria-colspan', 'aria-rowindex', 'aria-rowspan']
                    },
                    owned: null,
                    nameFrom: ['author', 'contents'],
                    context: ['row'],
                    implicit: ['td', 'th']
                },
                checkbox: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-checked', 'aria-required']
                    },
                    owned: null,
                    nameFrom: ['author', 'contents'],
                    context: null,
                    implicit: ['input[type="checkbox"]']
                },
                columnheader: {
                    type: 'structure',
                    attributes: {
                        allowed: ['aria-colindex', 'aria-colspan', 'aria-expanded', 'aria-rowindex', 'aria-rowspan', 'aria-required', 'aria-readonly', 'aria-selected', 'aria-sort']
                    },
                    owned: null,
                    nameFrom: ['author', 'contents'],
                    context: ['row'],
                    implicit: ['th']
                },
                combobox: {
                    type: 'composite',
                    attributes: {
                        allowed: ['aria-expanded', 'aria-autocomplete', 'aria-required', 'aria-activedescendant', 'aria-orientation']
                    },
                    owned: {
                        all: ['listbox', 'textbox']
                    },
                    nameFrom: ['author'],
                    context: null
                },
                command: {
                    nameFrom: ['author'],
                    type: 'abstract'
                },
                complementary: {
                    type: 'landmark',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['aside']
                },
                composite: {
                    nameFrom: ['author'],
                    type: 'abstract'
                },
                contentinfo: {
                    type: 'landmark',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['footer']
                },
                definition: {
                    type: 'structure',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['dd', 'dfn']
                },
                dialog: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-expanded', 'aria-modal']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['dialog']
                },
                directory: {
                    type: 'structure',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author', 'contents'],
                    context: null
                },
                document: {
                    type: 'structure',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['body']
                },
                feed: {
                    type: 'structure',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: {
                        one: ['article']
                    },
                    nameFrom: ['author'],
                    context: null
                },
                form: {
                    type: 'landmark',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['form']
                },
                grid: {
                    type: 'composite',
                    attributes: {
                        allowed: ['aria-activedescendant', 'aria-expanded', 'aria-colcount', 'aria-level', 'aria-multiselectable', 'aria-readonly', 'aria-rowcount']
                    },
                    owned: {
                        one: ['rowgroup', 'row']
                    },
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['table']
                },
                gridcell: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-colindex', 'aria-colspan', 'aria-expanded', 'aria-rowindex', 'aria-rowspan', 'aria-selected', 'aria-readonly', 'aria-required']
                    },
                    owned: null,
                    nameFrom: ['author', 'contents'],
                    context: ['row'],
                    implicit: ['td', 'th']
                },
                group: {
                    type: 'structure',
                    attributes: {
                        allowed: ['aria-activedescendant', 'aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['details', 'optgroup']
                },
                heading: {
                    type: 'structure',
                    attributes: {
                        allowed: ['aria-level', 'aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author', 'contents'],
                    context: null,
                    implicit: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
                },
                img: {
                    type: 'structure',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['img']
                },
                input: {
                    nameFrom: ['author'],
                    type: 'abstract'
                },
                landmark: {
                    nameFrom: ['author'],
                    type: 'abstract'
                },
                link: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author', 'contents'],
                    context: null,
                    implicit: ['a[href]']
                },
                list: {
                    type: 'structure',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: {
                        all: ['listitem']
                    },
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['ol', 'ul', 'dl']
                },
                listbox: {
                    type: 'composite',
                    attributes: {
                        allowed: ['aria-activedescendant', 'aria-multiselectable', 'aria-required', 'aria-expanded', 'aria-orientation']
                    },
                    owned: {
                        all: ['option']
                    },
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['select']
                },
                listitem: {
                    type: 'structure',
                    attributes: {
                        allowed: ['aria-level', 'aria-posinset', 'aria-setsize', 'aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author', 'contents'],
                    context: ['list'],
                    implicit: ['li', 'dt']
                },
                log: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null
                },
                main: {
                    type: 'landmark',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['main']
                },
                marquee: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null
                },
                math: {
                    type: 'structure',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['math']
                },
                menu: {
                    type: 'composite',
                    attributes: {
                        allowed: ['aria-activedescendant', 'aria-expanded', 'aria-orientation']
                    },
                    owned: {
                        one: ['menuitem', 'menuitemradio', 'menuitemcheckbox']
                    },
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['menu[type="context"]']
                },
                menubar: {
                    type: 'composite',
                    attributes: {
                        allowed: ['aria-activedescendant', 'aria-expanded', 'aria-orientation']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null
                },
                menuitem: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-posinset', 'aria-setsize', 'aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author', 'contents'],
                    context: ['menu', 'menubar'],
                    implicit: ['menuitem[type="command"]']
                },
                menuitemcheckbox: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-checked', 'aria-posinset', 'aria-setsize']
                    },
                    owned: null,
                    nameFrom: ['author', 'contents'],
                    context: ['menu', 'menubar'],
                    implicit: ['menuitem[type="checkbox"]']
                },
                menuitemradio: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-checked', 'aria-selected', 'aria-posinset', 'aria-setsize']
                    },
                    owned: null,
                    nameFrom: ['author', 'contents'],
                    context: ['menu', 'menubar'],
                    implicit: ['menuitem[type="radio"]']
                },
                navigation: {
                    type: 'landmark',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['nav']
                },
                none: {
                    type: 'structure',
                    attributes: null,
                    owned: null,
                    nameFrom: ['author'],
                    context: null
                },
                note: {
                    type: 'structure',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null
                },
                option: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-selected', 'aria-posinset', 'aria-setsize', 'aria-checked']
                    },
                    owned: null,
                    nameFrom: ['author', 'contents'],
                    context: ['listbox'],
                    implicit: ['option']
                },
                presentation: {
                    type: 'structure',
                    attributes: null,
                    owned: null,
                    nameFrom: ['author'],
                    context: null
                },
                progressbar: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-valuetext', 'aria-valuenow', 'aria-valuemax', 'aria-valuemin']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['progress']
                },
                radio: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-checked', 'aria-selected', 'aria-posinset', 'aria-setsize', 'aria-required']
                    },
                    owned: null,
                    nameFrom: ['author', 'contents'],
                    context: null,
                    implicit: ['input[type="radio"]']
                },
                radiogroup: {
                    type: 'composite',
                    attributes: {
                        allowed: ['aria-activedescendant', 'aria-required', 'aria-expanded']
                    },
                    owned: {
                        all: ['radio']
                    },
                    nameFrom: ['author'],
                    context: null
                },
                range: {
                    nameFrom: ['author'],
                    type: 'abstract'
                },
                region: {
                    type: 'landmark',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['section[aria-label]', 'section[aria-labelledby]', 'section[title]']
                },
                roletype: {
                    type: 'abstract'
                },
                row: {
                    type: 'structure',
                    attributes: {
                        allowed: ['aria-activedescendant', 'aria-colindex', 'aria-expanded', 'aria-level', 'aria-selected', 'aria-rowindex']
                    },
                    owned: {
                        one: ['cell', 'columnheader', 'rowheader', 'gridcell']
                    },
                    nameFrom: ['author', 'contents'],
                    context: ['rowgroup', 'grid', 'treegrid', 'table'],
                    implicit: ['tr']
                },
                rowgroup: {
                    type: 'structure',
                    attributes: {
                        allowed: ['aria-activedescendant', 'aria-expanded']
                    },
                    owned: {
                        all: ['row']
                    },
                    nameFrom: ['author', 'contents'],
                    context: ['grid', 'table'],
                    implicit: ['tbody', 'thead', 'tfoot']
                },
                rowheader: {
                    type: 'structure',
                    attributes: {
                        allowed: ['aria-colindex', 'aria-colspan', 'aria-expanded', 'aria-rowindex', 'aria-rowspan', 'aria-required', 'aria-readonly', 'aria-selected', 'aria-sort']
                    },
                    owned: null,
                    nameFrom: ['author', 'contents'],
                    context: ['row'],
                    implicit: ['th']
                },
                scrollbar: {
                    type: 'widget',
                    attributes: {
                        required: ['aria-controls', 'aria-valuenow', 'aria-valuemax', 'aria-valuemin'],
                        allowed: ['aria-valuetext', 'aria-orientation']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null
                },
                search: {
                    type: 'landmark',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null
                },
                searchbox: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-activedescendant', 'aria-autocomplete', 'aria-multiline', 'aria-readonly', 'aria-required', 'aria-placeholder']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['input[type="search"]']
                },
                section: {
                    nameFrom: ['author', 'contents'],
                    type: 'abstract'
                },
                sectionhead: {
                    nameFrom: ['author', 'contents'],
                    type: 'abstract'
                },
                select: {
                    nameFrom: ['author'],
                    type: 'abstract'
                },
                separator: {
                    type: 'structure',
                    attributes: {
                        allowed: ['aria-expanded', 'aria-orientation']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['hr']
                },
                slider: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-valuetext', 'aria-orientation'],
                        required: ['aria-valuenow', 'aria-valuemax', 'aria-valuemin']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['input[type="range"]']
                },
                spinbutton: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-valuetext', 'aria-required'],
                        required: ['aria-valuenow', 'aria-valuemax', 'aria-valuemin']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['input[type="number"]']
                },
                status: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['output']
                },
                structure: {
                    type: 'abstract'
                },
                switch: {
                    type: 'widget',
                    attributes: {
                        required: ['aria-checked']
                    },
                    owned: null,
                    nameFrom: ['author', 'contents'],
                    context: null
                },
                tab: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-selected', 'aria-expanded', 'aria-setsize', 'aria-posinset']
                    },
                    owned: null,
                    nameFrom: ['author', 'contents'],
                    context: ['tablist']
                },
                table: {
                    type: 'structure',
                    attributes: {
                        allowed: ['aria-colcount', 'aria-rowcount']
                    },
                    owned: {
                        one: ['rowgroup', 'row']
                    },
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['table']
                },
                tablist: {
                    type: 'composite',
                    attributes: {
                        allowed: ['aria-activedescendant', 'aria-expanded', 'aria-level', 'aria-multiselectable', 'aria-orientation']
                    },
                    owned: {
                        all: ['tab']
                    },
                    nameFrom: ['author'],
                    context: null
                },
                tabpanel: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null
                },
                term: {
                    type: 'structure',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author', 'contents'],
                    context: null,
                    implicit: ['dt']
                },
                text: {
                    type: 'structure',
                    owned: null,
                    nameFrom: ['author', 'contents'],
                    context: null
                },
                textbox: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-activedescendant', 'aria-autocomplete', 'aria-multiline', 'aria-readonly', 'aria-required', 'aria-placeholder']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['input[type="text"]', 'input[type="email"]', 'input[type="password"]', 'input[type="tel"]', 'input[type="url"]', 'input:not([type])', 'textarea']
                },
                timer: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null
                },
                toolbar: {
                    type: 'structure',
                    attributes: {
                        allowed: ['aria-activedescendant', 'aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author'],
                    context: null,
                    implicit: ['menu[type="toolbar"]']
                },
                tooltip: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-expanded']
                    },
                    owned: null,
                    nameFrom: ['author', 'contents'],
                    context: null
                },
                tree: {
                    type: 'composite',
                    attributes: {
                        allowed: ['aria-activedescendant', 'aria-multiselectable', 'aria-required', 'aria-expanded', 'aria-orientation']
                    },
                    owned: {
                        all: ['treeitem']
                    },
                    nameFrom: ['author'],
                    context: null
                },
                treegrid: {
                    type: 'composite',
                    attributes: {
                        allowed: ['aria-activedescendant', 'aria-colcount', 'aria-expanded', 'aria-level', 'aria-multiselectable', 'aria-readonly', 'aria-required', 'aria-rowcount', 'aria-orientation']
                    },
                    owned: {
                        one: ['rowgroup', 'row']
                    },
                    nameFrom: ['author'],
                    context: null
                },
                treeitem: {
                    type: 'widget',
                    attributes: {
                        allowed: ['aria-checked', 'aria-selected', 'aria-expanded', 'aria-level', 'aria-posinset', 'aria-setsize']
                    },
                    owned: null,
                    nameFrom: ['author', 'contents'],
                    context: ['group', 'tree']
                },
                widget: {
                    type: 'abstract'
                },
                window: {
                    nameFrom: ['author'],
                    type: 'abstract'
                }
            };
            var color = {};
            commons.color = color;
            var dom = commons.dom = {};
            var table = commons.table = {};
            var text = commons.text = {};
            var utils = commons.utils = axe.utils;
            aria.requiredAttr = function (role) {
                'use strict';
                var roles = aria.lookupTable.role[role], attr = roles && roles.attributes && roles.attributes.required;
                return attr || [];
            };
            aria.allowedAttr = function (role) {
                'use strict';
                var roles = aria.lookupTable.role[role], attr = roles && roles.attributes && roles.attributes.allowed || [], requiredAttr = roles && roles.attributes && roles.attributes.required || [];
                return attr.concat(aria.lookupTable.globalAttributes).concat(requiredAttr);
            };
            aria.validateAttr = function (att) {
                'use strict';
                return !!aria.lookupTable.attributes[att];
            };
            aria.validateAttrValue = function (node, attr) {
                'use strict';
                var matches, list, doc = document, value = node.getAttribute(attr), attrInfo = aria.lookupTable.attributes[attr];
                if (!attrInfo) {
                    return true;
                }
                switch (attrInfo.type) {
                    case 'boolean':
                    case 'nmtoken':
                        return typeof value === 'string' && attrInfo.values.indexOf(value.toLowerCase()) !== -1;

                    case 'nmtokens':
                        list = axe.utils.tokenList(value);
                        return list.reduce(function (result, token) {
                            return result && attrInfo.values.indexOf(token) !== -1;
                        }, list.length !== 0);

                    case 'idref':
                        return !!(value && doc.getElementById(value));

                    case 'idrefs':
                        list = axe.utils.tokenList(value);
                        return list.reduce(function (result, token) {
                            return !!(result && doc.getElementById(token));
                        }, list.length !== 0);

                    case 'string':
                        return true;

                    case 'decimal':
                        matches = value.match(/^[-+]?([0-9]*)\.?([0-9]*)$/);
                        return !!(matches && (matches[1] || matches[2]));

                    case 'int':
                        return /^[-+]?[0-9]+$/.test(value);
                }
            };
            aria.label = function (node) {
                var ref, candidate;
                if (node.getAttribute('aria-labelledby')) {
                    ref = dom.idrefs(node, 'aria-labelledby');
                    candidate = ref.map(function (thing) {
                        return thing ? text.visible(thing, true) : '';
                    }).join(' ').trim();
                    if (candidate) {
                        return candidate;
                    }
                }
                candidate = node.getAttribute('aria-label');
                if (candidate) {
                    candidate = text.sanitize(candidate).trim();
                    if (candidate) {
                        return candidate;
                    }
                }
                return null;
            };
            aria.isValidRole = function (role) {
                'use strict';
                if (aria.lookupTable.role[role]) {
                    return true;
                }
                return false;
            };
            aria.getRolesWithNameFromContents = function () {
                return Object.keys(aria.lookupTable.role).filter(function (r) {
                    return aria.lookupTable.role[r].nameFrom && aria.lookupTable.role[r].nameFrom.indexOf('contents') !== -1;
                });
            };
            aria.getRolesByType = function (roleType) {
                return Object.keys(aria.lookupTable.role).filter(function (r) {
                    return aria.lookupTable.role[r].type === roleType;
                });
            };
            aria.getRoleType = function (role) {
                var r = aria.lookupTable.role[role];
                return r && r.type || null;
            };
            aria.requiredOwned = function (role) {
                'use strict';
                var owned = null, roles = aria.lookupTable.role[role];
                if (roles) {
                    owned = axe.utils.clone(roles.owned);
                }
                return owned;
            };
            aria.requiredContext = function (role) {
                'use strict';
                var context = null, roles = aria.lookupTable.role[role];
                if (roles) {
                    context = axe.utils.clone(roles.context);
                }
                return context;
            };
            aria.implicitNodes = function (role) {
                'use strict';
                var implicit = null, roles = aria.lookupTable.role[role];
                if (roles && roles.implicit) {
                    implicit = axe.utils.clone(roles.implicit);
                }
                return implicit;
            };
            aria.implicitRole = function (node) {
                'use strict';
                var isValidImplicitRole = function isValidImplicitRole(set, role) {
                    var validForNodeType = function validForNodeType(implicitNodeTypeSelector) {
                        return axe.utils.matchesSelector(node, implicitNodeTypeSelector);
                    };
                    if (role.implicit && role.implicit.some(validForNodeType)) {
                        set.push(role.name);
                    }
                    return set;
                };
                var sortRolesByOptimalAriaContext = function sortRolesByOptimalAriaContext(roles, ariaAttributes) {
                    var getScore = function getScore(role) {
                        var allowedAriaAttributes = aria.allowedAttr(role);
                        return allowedAriaAttributes.reduce(function (score, attribute) {
                            return score + (ariaAttributes.indexOf(attribute) > -1 ? 1 : 0);
                        }, 0);
                    };
                    var scored = roles.map(function (role) {
                        return {
                            score: getScore(role),
                            name: role
                        };
                    });
                    var sorted = scored.sort(function (scoredRoleA, scoredRoleB) {
                        return scoredRoleB.score - scoredRoleA.score;
                    });
                    return sorted.map(function (sortedRole) {
                        return sortedRole.name;
                    });
                };
                var roles = Object.keys(aria.lookupTable.role).map(function (role) {
                    var lookup = aria.lookupTable.role[role];
                    return {
                        name: role,
                        implicit: lookup && lookup.implicit
                    };
                });
                var availableImplicitRoles = roles.reduce(isValidImplicitRole, []);
                if (!availableImplicitRoles.length) {
                    return null;
                }
                var nodeAttributes = node.attributes;
                var ariaAttributes = [];
                for (var i = 0, j = nodeAttributes.length; i < j; i++) {
                    var attr = nodeAttributes[i];
                    if (attr.name.match(/^aria-/)) {
                        ariaAttributes.push(attr.name);
                    }
                }
                return sortRolesByOptimalAriaContext(availableImplicitRoles, ariaAttributes).shift();
            };
            color.Color = function (red, green, blue, alpha) {
                this.red = red;
                this.green = green;
                this.blue = blue;
                this.alpha = alpha;
                this.toHexString = function () {
                    var redString = Math.round(this.red).toString(16);
                    var greenString = Math.round(this.green).toString(16);
                    var blueString = Math.round(this.blue).toString(16);
                    return '#' + (this.red > 15.5 ? redString : '0' + redString) + (this.green > 15.5 ? greenString : '0' + greenString) + (this.blue > 15.5 ? blueString : '0' + blueString);
                };
                var rgbRegex = /^rgb\((\d+), (\d+), (\d+)\)$/;
                var rgbaRegex = /^rgba\((\d+), (\d+), (\d+), (\d*(\.\d+)?)\)/;
                this.parseRgbString = function (colorString) {
                    if (colorString === 'transparent') {
                        this.red = 0;
                        this.green = 0;
                        this.blue = 0;
                        this.alpha = 0;
                        return;
                    }
                    var match = colorString.match(rgbRegex);
                    if (match) {
                        this.red = parseInt(match[1], 10);
                        this.green = parseInt(match[2], 10);
                        this.blue = parseInt(match[3], 10);
                        this.alpha = 1;
                        return;
                    }
                    match = colorString.match(rgbaRegex);
                    if (match) {
                        this.red = parseInt(match[1], 10);
                        this.green = parseInt(match[2], 10);
                        this.blue = parseInt(match[3], 10);
                        this.alpha = parseFloat(match[4]);
                        return;
                    }
                };
                this.getRelativeLuminance = function () {
                    var rSRGB = this.red / 255;
                    var gSRGB = this.green / 255;
                    var bSRGB = this.blue / 255;
                    var r = rSRGB <= .03928 ? rSRGB / 12.92 : Math.pow((rSRGB + .055) / 1.055, 2.4);
                    var g = gSRGB <= .03928 ? gSRGB / 12.92 : Math.pow((gSRGB + .055) / 1.055, 2.4);
                    var b = bSRGB <= .03928 ? bSRGB / 12.92 : Math.pow((bSRGB + .055) / 1.055, 2.4);
                    return .2126 * r + .7152 * g + .0722 * b;
                };
            };
            color.flattenColors = function (fgColor, bgColor) {
                var alpha = fgColor.alpha;
                var r = (1 - alpha) * bgColor.red + alpha * fgColor.red;
                var g = (1 - alpha) * bgColor.green + alpha * fgColor.green;
                var b = (1 - alpha) * bgColor.blue + alpha * fgColor.blue;
                var a = fgColor.alpha + bgColor.alpha * (1 - fgColor.alpha);
                return new color.Color(r, g, b, a);
            };
            color.getContrast = function (bgColor, fgColor) {
                if (!fgColor || !bgColor) {
                    return null;
                }
                if (fgColor.alpha < 1) {
                    fgColor = color.flattenColors(fgColor, bgColor);
                }
                var bL = bgColor.getRelativeLuminance();
                var fL = fgColor.getRelativeLuminance();
                return (Math.max(fL, bL) + .05) / (Math.min(fL, bL) + .05);
            };
            color.hasValidContrastRatio = function (bg, fg, fontSize, isBold) {
                var contrast = color.getContrast(bg, fg);
                var isSmallFont = isBold && Math.ceil(fontSize * 72) / 96 < 14 || !isBold && Math.ceil(fontSize * 72) / 96 < 18;
                var expectedContrastRatio = isSmallFont ? 4.5 : 3;
                return {
                    isValid: contrast > expectedContrastRatio,
                    contrastRatio: contrast,
                    expectedContrastRatio: expectedContrastRatio
                };
            };
            function _getFonts(style) {
                return style.getPropertyValue('font-family').split(/[,;]/g).map(function (font) {
                    return font.trim().toLowerCase();
                });
            }
            function elementIsDistinct(node, ancestorNode) {
                var nodeStyle = window.getComputedStyle(node);
                if (nodeStyle.getPropertyValue('background-image') !== 'none') {
                    return true;
                }
                var hasBorder = ['border-bottom', 'border-top', 'outline'].reduce(function (result, edge) {
                    var borderClr = new color.Color();
                    borderClr.parseRgbString(nodeStyle.getPropertyValue(edge + '-color'));
                    return result || nodeStyle.getPropertyValue(edge + '-style') !== 'none' && parseFloat(nodeStyle.getPropertyValue(edge + '-width')) > 0 && borderClr.alpha !== 0;
                }, false);
                if (hasBorder) {
                    return true;
                }
                var parentStyle = window.getComputedStyle(ancestorNode);
                if (_getFonts(nodeStyle)[0] !== _getFonts(parentStyle)[0]) {
                    return true;
                }
                var hasStyle = ['text-decoration-line', 'text-decoration-style', 'font-weight', 'font-style', 'font-size'].reduce(function (result, cssProp) {
                    return result || nodeStyle.getPropertyValue(cssProp) !== parentStyle.getPropertyValue(cssProp);
                }, false);
                var tDec = nodeStyle.getPropertyValue('text-decoration');
                if (tDec.split(' ').length < 3) {
                    hasStyle = hasStyle || tDec !== parentStyle.getPropertyValue('text-decoration');
                }
                return hasStyle;
            }
            color.elementIsDistinct = elementIsDistinct;
            var graphicNodes = ['IMG', 'CANVAS', 'OBJECT', 'IFRAME', 'VIDEO', 'SVG'];
            function elmHasImage(elm, style) {
                var nodeName = elm.nodeName.toUpperCase();
                if (graphicNodes.includes(nodeName)) {
                    axe.commons.color.incompleteData.set('bgColor', 'imgNode');
                    return true;
                }
                style = style || window.getComputedStyle(elm);
                var bgImageStyle = style.getPropertyValue('background-image');
                var hasBgImage = bgImageStyle !== 'none';
                if (hasBgImage) {
                    var hasGradient = /gradient/.test(bgImageStyle);
                    axe.commons.color.incompleteData.set('bgColor', hasGradient ? 'bgGradient' : 'bgImage');
                }
                return hasBgImage;
            }
            function getBgColor(elm, elmStyle) {
                elmStyle = elmStyle || window.getComputedStyle(elm);
                var bgColor = new color.Color();
                bgColor.parseRgbString(elmStyle.getPropertyValue('background-color'));
                if (bgColor.alpha !== 0) {
                    var opacity = elmStyle.getPropertyValue('opacity');
                    bgColor.alpha = bgColor.alpha * opacity;
                }
                return bgColor;
            }
            function contentOverlapping(targetElement, bgNode) {
                var targetRect = targetElement.getClientRects()[0];
                var obscuringElements = document.elementsFromPoint(targetRect.left, targetRect.top);
                if (obscuringElements) {
                    for (var i = 0; i < obscuringElements.length; i++) {
                        if (obscuringElements[i] !== targetElement && obscuringElements[i] === bgNode) {
                            return true;
                        }
                    }
                }
                return false;
            }
            function calculateObscuringAlpha(elmIndex, elmStack, originalElm) {
                var totalAlpha = 0;
                if (elmIndex > 0) {
                    for (var i = elmIndex - 1; i >= 0; i--) {
                        var bgElm = elmStack[i];
                        var bgElmStyle = window.getComputedStyle(bgElm);
                        var bgColor = getBgColor(bgElm, bgElmStyle);
                        if (bgColor.alpha && contentOverlapping(originalElm, bgElm)) {
                            totalAlpha += bgColor.alpha;
                        } else {
                            elmStack.splice(i, 1);
                        }
                    }
                }
                return totalAlpha;
            }
            function elmPartiallyObscured(elm, bgElm, bgColor) {
                var obscured = elm !== bgElm && !dom.visuallyContains(elm, bgElm) && bgColor.alpha !== 0;
                if (obscured) {
                    axe.commons.color.incompleteData.set('bgColor', 'elmPartiallyObscured');
                }
                return obscured;
            }
            function includeMissingElements(elmStack, elm) {
                var elementMap = {
                    TD: ['TR', 'TBODY'],
                    TH: ['TR', 'THEAD'],
                    INPUT: ['LABEL']
                };
                var tagArray = elmStack.map(function (elm) {
                    return elm.tagName;
                });
                var bgNodes = elmStack;
                for (var candidate in elementMap) {
                    if (tagArray.includes(candidate)) {
                        for (var candidateIndex in elementMap[candidate]) {
                            if (candidate.hasOwnProperty(candidateIndex)) {
                                var ancestorMatch = axe.commons.dom.findUp(elm, elementMap[candidate][candidateIndex]);
                                if (ancestorMatch && elmStack.indexOf(ancestorMatch) === -1) {
                                    var overlaps = axe.commons.dom.visuallyOverlaps(elm.getBoundingClientRect(), ancestorMatch);
                                    if (overlaps) {
                                        bgNodes.splice(tagArray.indexOf(candidate) + 1, 0, ancestorMatch);
                                    }
                                }
                                if (elm.tagName === elementMap[candidate][candidateIndex] && tagArray.indexOf(elm.tagName) === -1) {
                                    bgNodes.splice(tagArray.indexOf(candidate) + 1, 0, elm);
                                }
                            }
                        }
                    }
                }
                return bgNodes;
            }
            function sortPageBackground(elmStack) {
                var bodyIndex = elmStack.indexOf(document.body);
                var bgNodes = elmStack;
                if (bodyIndex > 1 && !elmHasImage(document.documentElement) && getBgColor(document.documentElement).alpha === 0) {
                    bgNodes.splice(bodyIndex, 1);
                    bgNodes.splice(elmStack.indexOf(document.documentElement), 1);
                    bgNodes.push(document.body);
                }
                return bgNodes;
            }
            color.getCoords = function (rect) {
                var x = void 0, y = void 0;
                if (rect.left > window.innerWidth) {
                    return;
                }
                if (rect.top > window.innerHeight) {
                    return;
                }
                x = Math.min(Math.ceil(rect.left + rect.width / 2), window.innerWidth - 1);
                y = Math.min(Math.ceil(rect.top + rect.height / 2), window.innerHeight - 1);
                return {
                    x: x,
                    y: y
                };
            };
            color.getRectStack = function (elm) {
                var boundingCoords = color.getCoords(elm.getBoundingClientRect());
                if (boundingCoords) {
                    var rects = Array.from(elm.getClientRects());
                    var boundingStack = Array.from(document.elementsFromPoint(boundingCoords.x, boundingCoords.y));
                    if (rects && rects.length > 1) {
                        var filteredArr = rects.filter(function (rect) {
                            return rect.width && rect.width > 0;
                        }).map(function (rect) {
                            var coords = color.getCoords(rect);
                            if (coords) {
                                return Array.from(document.elementsFromPoint(coords.x, coords.y));
                            }
                        });
                        filteredArr.splice(0, 0, boundingStack);
                        return filteredArr;
                    } else {
                        return [boundingStack];
                    }
                }
                return null;
            };
            color.filteredRectStack = function (elm) {
                var rectStack = color.getRectStack(elm);
                if (rectStack && rectStack.length === 1) {
                    return rectStack[0];
                } else if (rectStack && rectStack.length > 1) {
                    var boundingStack = rectStack.shift();
                    var isSame = void 0;
                    rectStack.forEach(function (rectList, index) {
                        if (index === 0) {
                            return;
                        }
                        var rectA = rectStack[index - 1], rectB = rectStack[index];
                        isSame = rectA.every(function (element, elementIndex) {
                            return element === rectB[elementIndex];
                        }) || boundingStack.includes(elm);
                    });
                    if (!isSame) {
                        axe.commons.color.incompleteData.set('bgColor', 'elmPartiallyObscuring');
                        return null;
                    }
                    return rectStack[0];
                } else {
                    axe.commons.color.incompleteData.set('bgColor', 'outsideViewport');
                    return null;
                }
            };
            color.getBackgroundStack = function (elm) {
                var elmStack = color.filteredRectStack(elm);
                if (elmStack === null) {
                    return null;
                }
                elmStack = includeMissingElements(elmStack, elm);
                elmStack = dom.reduceToElementsBelowFloating(elmStack, elm);
                elmStack = sortPageBackground(elmStack);
                var elmIndex = elmStack.indexOf(elm);
                if (calculateObscuringAlpha(elmIndex, elmStack, elm) >= .99) {
                    axe.commons.color.incompleteData.set('bgColor', 'bgOverlap');
                    return null;
                }
                return elmIndex !== -1 ? elmStack : null;
            };
            color.getBackgroundColor = function (elm) {
                var bgElms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
                var noScroll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                if (noScroll !== true) {
                    var alignToTop = elm.clientHeight - 2 >= window.innerHeight * 2;
                    elm.scrollIntoView(alignToTop);
                }
                var bgColors = [];
                var elmStack = color.getBackgroundStack(elm);
                (elmStack || []).some(function (bgElm) {
                    var bgElmStyle = window.getComputedStyle(bgElm);
                    var bgColor = getBgColor(bgElm, bgElmStyle);
                    if (elmPartiallyObscured(elm, bgElm, bgColor) || elmHasImage(bgElm, bgElmStyle)) {
                        bgColors = null;
                        bgElms.push(bgElm);
                        return true;
                    }
                    if (bgColor.alpha !== 0) {
                        bgElms.push(bgElm);
                        bgColors.push(bgColor);
                        return bgColor.alpha === 1;
                    } else {
                        return false;
                    }
                });
                if (bgColors !== null && elmStack !== null) {
                    bgColors.push(new color.Color(255, 255, 255, 1));
                    var colors = bgColors.reduce(color.flattenColors);
                    return colors;
                }
                return null;
            };
            dom.isOpaque = function (node) {
                var style = window.getComputedStyle(node);
                return elmHasImage(node, style) || getBgColor(node, style).alpha === 1;
            };
            color.getForegroundColor = function (node, noScroll) {
                var nodeStyle = window.getComputedStyle(node);
                var fgColor = new color.Color();
                fgColor.parseRgbString(nodeStyle.getPropertyValue('color'));
                var opacity = nodeStyle.getPropertyValue('opacity');
                fgColor.alpha = fgColor.alpha * opacity;
                if (fgColor.alpha === 1) {
                    return fgColor;
                }
                var bgColor = color.getBackgroundColor(node, [], noScroll);
                if (bgColor === null) {
                    var reason = axe.commons.color.incompleteData.get('bgColor');
                    axe.commons.color.incompleteData.set('fgColor', reason);
                    return null;
                }
                return color.flattenColors(fgColor, bgColor);
            };
            color.incompleteData = function () {
                var data = {};
                return {
                    set: function set(key, reason) {
                        if (typeof key !== 'string') {
                            throw new Error('Incomplete data: key must be a string');
                        }
                        if (reason) {
                            data[key] = reason;
                        }
                        return data[key];
                    },
                    get: function get(key) {
                        return data[key];
                    },
                    clear: function clear() {
                        data = {};
                    }
                };
            }();
            dom.reduceToElementsBelowFloating = function (elements, targetNode) {
                var floatingPositions = ['fixed', 'sticky'], finalElements = [], targetFound = false, index, currentNode, style;
                for (index = 0; index < elements.length; ++index) {
                    currentNode = elements[index];
                    if (currentNode === targetNode) {
                        targetFound = true;
                    }
                    style = window.getComputedStyle(currentNode);
                    if (!targetFound && floatingPositions.indexOf(style.position) !== -1) {
                        finalElements = [];
                        continue;
                    }
                    finalElements.push(currentNode);
                }
                return finalElements;
            };
            dom.findUp = function (element, target) {
                'use strict';
                var parent, matches = document.querySelectorAll(target), length = matches.length;
                if (!length) {
                    return null;
                }
                matches = axe.utils.toArray(matches);
                parent = element.parentNode;
                while (parent && matches.indexOf(parent) === -1) {
                    parent = parent.parentNode;
                }
                return parent;
            };
            dom.getElementByReference = function (node, attr) {
                'use strict';
                var candidate, fragment = node.getAttribute(attr), doc = document;
                if (fragment && fragment.charAt(0) === '#') {
                    fragment = fragment.substring(1);
                    candidate = doc.getElementById(fragment);
                    if (candidate) {
                        return candidate;
                    }
                    candidate = doc.getElementsByName(fragment);
                    if (candidate.length) {
                        return candidate[0];
                    }
                }
                return null;
            };
            dom.getElementCoordinates = function (element) {
                'use strict';
                var scrollOffset = dom.getScrollOffset(document), xOffset = scrollOffset.left, yOffset = scrollOffset.top, coords = element.getBoundingClientRect();
                return {
                    top: coords.top + yOffset,
                    right: coords.right + xOffset,
                    bottom: coords.bottom + yOffset,
                    left: coords.left + xOffset,
                    width: coords.right - coords.left,
                    height: coords.bottom - coords.top
                };
            };
            dom.getScrollOffset = function (element) {
                'use strict';
                if (!element.nodeType && element.document) {
                    element = element.document;
                }
                if (element.nodeType === 9) {
                    var docElement = element.documentElement, body = element.body;
                    return {
                        left: docElement && docElement.scrollLeft || body && body.scrollLeft || 0,
                        top: docElement && docElement.scrollTop || body && body.scrollTop || 0
                    };
                }
                return {
                    left: element.scrollLeft,
                    top: element.scrollTop
                };
            };
            dom.getViewportSize = function (win) {
                'use strict';
                var body, doc = win.document, docElement = doc.documentElement;
                if (win.innerWidth) {
                    return {
                        width: win.innerWidth,
                        height: win.innerHeight
                    };
                }
                if (docElement) {
                    return {
                        width: docElement.clientWidth,
                        height: docElement.clientHeight
                    };
                }
                body = doc.body;
                return {
                    width: body.clientWidth,
                    height: body.clientHeight
                };
            };
            dom.hasContent = function hasContent(elm) {
                var skipItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
                if (elm.textContent.trim() || aria.label(elm)) {
                    return true;
                }
                var contentElms = elm.querySelectorAll('*');
                for (var i = 0; i < contentElms.length; i++) {
                    if (skipItems.indexOf(contentElms[i]) === -1 && aria.label(contentElms[i]) || dom.isVisualContent(contentElms[i])) {
                        return true;
                    }
                }
                return false;
            };
            dom.idrefs = function (node, attr) {
                'use strict';
                var index, length, doc = document, result = [], idrefs = node.getAttribute(attr);
                if (idrefs) {
                    idrefs = axe.utils.tokenList(idrefs);
                    for (index = 0, length = idrefs.length; index < length; index++) {
                        result.push(doc.getElementById(idrefs[index]));
                    }
                }
                return result;
            };
            dom.isFocusable = function (el) {
                'use strict';
                if (dom.isNativelyFocusable(el)) {
                    return true;
                }
                var tabindex = el.getAttribute('tabindex');
                if (tabindex && !isNaN(parseInt(tabindex, 10))) {
                    return true;
                }
                return false;
            };
            dom.isNativelyFocusable = function (el) {
                'use strict';
                if (!el || el.disabled || !dom.isVisible(el) && el.nodeName.toUpperCase() !== 'AREA') {
                    return false;
                }
                switch (el.nodeName.toUpperCase()) {
                    case 'A':
                    case 'AREA':
                        if (el.href) {
                            return true;
                        }
                        break;

                    case 'INPUT':
                        return el.type !== 'hidden';

                    case 'TEXTAREA':
                    case 'SELECT':
                    case 'DETAILS':
                    case 'BUTTON':
                        return true;
                }
                return false;
            };
            dom.isHTML5 = function (doc) {
                var node = doc.doctype;
                if (node === null) {
                    return false;
                }
                return node.name === 'html' && !node.publicId && !node.systemId;
            };
            function walkDomNode(node, functor) {
                'use strict';
                var shouldWalk = functor(node);
                node = node.firstChild;
                while (node) {
                    if (shouldWalk !== false) {
                        walkDomNode(node, functor);
                    }
                    node = node.nextSibling;
                }
            }
            var blockLike = ['block', 'list-item', 'table', 'flex', 'grid', 'inline-block'];
            function isBlock(elm) {
                'use strict';
                var display = window.getComputedStyle(elm).getPropertyValue('display');
                return blockLike.indexOf(display) !== -1 || display.substr(0, 6) === 'table-';
            }
            dom.isInTextBlock = function isInTextBlock(node) {
                'use strict';
                if (isBlock(node)) {
                    return false;
                }
                var parentBlock = node.parentNode;
                while (parentBlock.nodeType === 1 && !isBlock(parentBlock)) {
                    parentBlock = parentBlock.parentNode;
                }
                var parentText = '';
                var linkText = '';
                var inBrBlock = 0;
                walkDomNode(parentBlock, function (currNode) {
                    if (inBrBlock === 2) {
                        return false;
                    }
                    if (currNode.nodeType === 3) {
                        parentText += currNode.nodeValue;
                    }
                    if (currNode.nodeType !== 1) {
                        return;
                    }
                    var nodeName = (currNode.nodeName || '').toUpperCase();
                    if (['BR', 'HR'].indexOf(nodeName) !== -1) {
                        if (inBrBlock === 0) {
                            parentText = '';
                            linkText = '';
                        } else {
                            inBrBlock = 2;
                        }
                    } else if (currNode.style.display === 'none' || currNode.style.overflow === 'hidden' || ['', null, 'none'].indexOf(currNode.style.float) === -1 || ['', null, 'relative'].indexOf(currNode.style.position) === -1) {
                        return false;
                    } else if (nodeName === 'A' && currNode.href || (currNode.getAttribute('role') || '').toLowerCase() === 'link') {
                        if (currNode === node) {
                            inBrBlock = 1;
                        }
                        linkText += currNode.textContent;
                        return false;
                    }
                });
                parentText = axe.commons.text.sanitize(parentText);
                linkText = axe.commons.text.sanitize(linkText);
                return parentText.length > linkText.length;
            };
            dom.isNode = function (element) {
                'use strict';
                return element instanceof Node;
            };
            dom.isOffscreen = function (element) {
                'use strict';
                var noParentScrolled = function noParentScrolled(element, offset) {
                    element = element.parentNode;
                    while (element.nodeName.toLowerCase() !== 'html') {
                        if (element.scrollTop) {
                            offset += element.scrollTop;
                            if (offset >= 0) {
                                return false;
                            }
                        }
                        element = element.parentNode;
                    }
                    return true;
                };
                var leftBoundary, docElement = document.documentElement, dir = window.getComputedStyle(document.body || docElement).getPropertyValue('direction'), coords = dom.getElementCoordinates(element);
                if (coords.bottom < 0 && noParentScrolled(element, coords.bottom)) {
                    return true;
                }
                if (coords.left === 0 && coords.right === 0) {
                    return false;
                }
                if (dir === 'ltr') {
                    if (coords.right <= 0) {
                        return true;
                    }
                } else {
                    leftBoundary = Math.max(docElement.scrollWidth, dom.getViewportSize(window).width);
                    if (coords.left >= leftBoundary) {
                        return true;
                    }
                }
                return false;
            };
            function isClipped(clip) {
                'use strict';
                var matches = clip.match(/rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/);
                if (matches && matches.length === 5) {
                    return matches[3] - matches[1] <= 0 && matches[2] - matches[4] <= 0;
                }
                return false;
            }
            dom.isVisible = function (el, screenReader, recursed) {
                'use strict';
                var style, nodeName = el.nodeName.toUpperCase(), parent = el.parentNode;
                if (el.nodeType === 9) {
                    return true;
                }
                style = window.getComputedStyle(el, null);
                if (style === null) {
                    return false;
                }
                if (style.getPropertyValue('display') === 'none' || nodeName.toUpperCase() === 'STYLE' || nodeName.toUpperCase() === 'SCRIPT' || !screenReader && isClipped(style.getPropertyValue('clip')) || !recursed && (style.getPropertyValue('visibility') === 'hidden' || !screenReader && dom.isOffscreen(el)) || screenReader && el.getAttribute('aria-hidden') === 'true') {
                    return false;
                }
                if (parent) {
                    return dom.isVisible(parent, screenReader, true);
                }
                return false;
            };
            var visualRoles = ['checkbox', 'img', 'radio', 'range', 'slider', 'spinbutton', 'textbox'];
            dom.isVisualContent = function (element) {
                var role = element.getAttribute('role');
                if (role) {
                    return visualRoles.indexOf(role) !== -1;
                }
                switch (element.tagName.toUpperCase()) {
                    case 'IMG':
                    case 'IFRAME':
                    case 'OBJECT':
                    case 'VIDEO':
                    case 'AUDIO':
                    case 'CANVAS':
                    case 'SVG':
                    case 'MATH':
                    case 'BUTTON':
                    case 'SELECT':
                    case 'TEXTAREA':
                    case 'KEYGEN':
                    case 'PROGRESS':
                    case 'METER':
                        return true;

                    case 'INPUT':
                        return element.type !== 'hidden';

                    default:
                        return false;
                }
            };
            dom.visuallyContains = function (node, parent) {
                var rectBound = node.getBoundingClientRect();
                var margin = .01;
                var rect = {
                    top: rectBound.top + margin,
                    bottom: rectBound.bottom - margin,
                    left: rectBound.left + margin,
                    right: rectBound.right - margin
                };
                var parentRect = parent.getBoundingClientRect();
                var parentTop = parentRect.top;
                var parentLeft = parentRect.left;
                var parentScrollArea = {
                    top: parentTop - parent.scrollTop,
                    bottom: parentTop - parent.scrollTop + parent.scrollHeight,
                    left: parentLeft - parent.scrollLeft,
                    right: parentLeft - parent.scrollLeft + parent.scrollWidth
                };
                var style = window.getComputedStyle(parent);
                if (style.getPropertyValue('display') === 'inline') {
                    return true;
                }
                if (rect.left < parentScrollArea.left && rect.left < parentRect.left || rect.top < parentScrollArea.top && rect.top < parentRect.top || rect.right > parentScrollArea.right && rect.right > parentRect.right || rect.bottom > parentScrollArea.bottom && rect.bottom > parentRect.bottom) {
                    return false;
                }
                if (rect.right > parentRect.right || rect.bottom > parentRect.bottom) {
                    return style.overflow === 'scroll' || style.overflow === 'auto' || style.overflow === 'hidden' || parent instanceof HTMLBodyElement || parent instanceof HTMLHtmlElement;
                }
                return true;
            };
            dom.visuallyOverlaps = function (rect, parent) {
                var parentRect = parent.getBoundingClientRect();
                var parentTop = parentRect.top;
                var parentLeft = parentRect.left;
                var parentScrollArea = {
                    top: parentTop - parent.scrollTop,
                    bottom: parentTop - parent.scrollTop + parent.scrollHeight,
                    left: parentLeft - parent.scrollLeft,
                    right: parentLeft - parent.scrollLeft + parent.scrollWidth
                };
                if (rect.left > parentScrollArea.right && rect.left > parentRect.right || rect.top > parentScrollArea.bottom && rect.top > parentRect.bottom || rect.right < parentScrollArea.left && rect.right < parentRect.left || rect.bottom < parentScrollArea.top && rect.bottom < parentRect.top) {
                    return false;
                }
                var style = window.getComputedStyle(parent);
                if (rect.left > parentRect.right || rect.top > parentRect.bottom) {
                    return style.overflow === 'scroll' || style.overflow === 'auto' || parent instanceof HTMLBodyElement || parent instanceof HTMLHtmlElement;
                }
                return true;
            };
            table.getAllCells = function (tableElm) {
                var rowIndex, cellIndex, rowLength, cellLength;
                var cells = [];
                for (rowIndex = 0, rowLength = tableElm.rows.length; rowIndex < rowLength; rowIndex++) {
                    for (cellIndex = 0, cellLength = tableElm.rows[rowIndex].cells.length; cellIndex < cellLength; cellIndex++) {
                        cells.push(tableElm.rows[rowIndex].cells[cellIndex]);
                    }
                }
                return cells;
            };
            table.getCellPosition = function (cell, tableGrid) {
                var rowIndex, index;
                if (!tableGrid) {
                    tableGrid = table.toGrid(dom.findUp(cell, 'table'));
                }
                for (rowIndex = 0; rowIndex < tableGrid.length; rowIndex++) {
                    if (tableGrid[rowIndex]) {
                        index = tableGrid[rowIndex].indexOf(cell);
                        if (index !== -1) {
                            return {
                                x: index,
                                y: rowIndex
                            };
                        }
                    }
                }
            };
            table.getHeaders = function (cell) {
                if (cell.hasAttribute('headers')) {
                    return commons.dom.idrefs(cell, 'headers');
                }
                var tableGrid = commons.table.toGrid(commons.dom.findUp(cell, 'table'));
                var position = commons.table.getCellPosition(cell, tableGrid);
                var rowHeaders = table.traverse('left', position, tableGrid).filter(function (cell) {
                    return table.isRowHeader(cell);
                });
                var colHeaders = table.traverse('up', position, tableGrid).filter(function (cell) {
                    return table.isColumnHeader(cell);
                });
                return [].concat(rowHeaders, colHeaders).reverse();
            };
            table.getScope = function (cell) {
                var scope = cell.getAttribute('scope');
                var role = cell.getAttribute('role');
                if (cell instanceof Element === false || ['TD', 'TH'].indexOf(cell.nodeName.toUpperCase()) === -1) {
                    throw new TypeError('Expected TD or TH element');
                }
                if (role === 'columnheader') {
                    return 'col';
                } else if (role === 'rowheader') {
                    return 'row';
                } else if (scope === 'col' || scope === 'row') {
                    return scope;
                } else if (cell.nodeName.toUpperCase() !== 'TH') {
                    return false;
                }
                var tableGrid = table.toGrid(dom.findUp(cell, 'table'));
                var pos = table.getCellPosition(cell);
                var headerRow = tableGrid[pos.y].reduce(function (headerRow, cell) {
                    return headerRow && cell.nodeName.toUpperCase() === 'TH';
                }, true);
                if (headerRow) {
                    return 'col';
                }
                var headerCol = tableGrid.map(function (col) {
                    return col[pos.x];
                }).reduce(function (headerCol, cell) {
                    return headerCol && cell.nodeName.toUpperCase() === 'TH';
                }, true);
                if (headerCol) {
                    return 'row';
                }
                return 'auto';
            };
            table.isColumnHeader = function (element) {
                return ['col', 'auto'].indexOf(table.getScope(element)) !== -1;
            };
            table.isDataCell = function (cell) {
                if (!cell.children.length && !cell.textContent.trim()) {
                    return false;
                }
                return cell.nodeName.toUpperCase() === 'TD';
            };
            table.isDataTable = function (node) {
                var role = node.getAttribute('role');
                if ((role === 'presentation' || role === 'none') && !dom.isFocusable(node)) {
                    return false;
                }
                if (node.getAttribute('contenteditable') === 'true' || dom.findUp(node, '[contenteditable="true"]')) {
                    return true;
                }
                if (role === 'grid' || role === 'treegrid' || role === 'table') {
                    return true;
                }
                if (commons.aria.getRoleType(role) === 'landmark') {
                    return true;
                }
                if (node.getAttribute('datatable') === '0') {
                    return false;
                }
                if (node.getAttribute('summary')) {
                    return true;
                }
                if (node.tHead || node.tFoot || node.caption) {
                    return true;
                }
                for (var childIndex = 0, childLength = node.children.length; childIndex < childLength; childIndex++) {
                    if (node.children[childIndex].nodeName.toUpperCase() === 'COLGROUP') {
                        return true;
                    }
                }
                var cells = 0;
                var rowLength = node.rows.length;
                var row, cell;
                var hasBorder = false;
                for (var rowIndex = 0; rowIndex < rowLength; rowIndex++) {
                    row = node.rows[rowIndex];
                    for (var cellIndex = 0, cellLength = row.cells.length; cellIndex < cellLength; cellIndex++) {
                        cell = row.cells[cellIndex];
                        if (cell.nodeName.toUpperCase() === 'TH') {
                            return true;
                        }
                        if (!hasBorder && (cell.offsetWidth !== cell.clientWidth || cell.offsetHeight !== cell.clientHeight)) {
                            hasBorder = true;
                        }
                        if (cell.getAttribute('scope') || cell.getAttribute('headers') || cell.getAttribute('abbr')) {
                            return true;
                        }
                        if (['columnheader', 'rowheader'].indexOf(cell.getAttribute('role')) !== -1) {
                            return true;
                        }
                        if (cell.children.length === 1 && cell.children[0].nodeName.toUpperCase() === 'ABBR') {
                            return true;
                        }
                        cells++;
                    }
                }
                if (node.getElementsByTagName('table').length) {
                    return false;
                }
                if (rowLength < 2) {
                    return false;
                }
                var sampleRow = node.rows[Math.ceil(rowLength / 2)];
                if (sampleRow.cells.length === 1 && sampleRow.cells[0].colSpan === 1) {
                    return false;
                }
                if (sampleRow.cells.length >= 5) {
                    return true;
                }
                if (hasBorder) {
                    return true;
                }
                var bgColor, bgImage;
                for (rowIndex = 0; rowIndex < rowLength; rowIndex++) {
                    row = node.rows[rowIndex];
                    if (bgColor && bgColor !== window.getComputedStyle(row).getPropertyValue('background-color')) {
                        return true;
                    } else {
                        bgColor = window.getComputedStyle(row).getPropertyValue('background-color');
                    }
                    if (bgImage && bgImage !== window.getComputedStyle(row).getPropertyValue('background-image')) {
                        return true;
                    } else {
                        bgImage = window.getComputedStyle(row).getPropertyValue('background-image');
                    }
                }
                if (rowLength >= 20) {
                    return true;
                }
                if (dom.getElementCoordinates(node).width > dom.getViewportSize(window).width * .95) {
                    return false;
                }
                if (cells < 10) {
                    return false;
                }
                if (node.querySelector('object, embed, iframe, applet')) {
                    return false;
                }
                return true;
            };
            table.isHeader = function (cell) {
                if (table.isColumnHeader(cell) || table.isRowHeader(cell)) {
                    return true;
                }
                if (cell.getAttribute('id')) {
                    var id = axe.utils.escapeSelector(cell.getAttribute('id'));
                    return !!document.querySelector('[headers~="' + id + '"]');
                }
                return false;
            };
            table.isRowHeader = function (cell) {
                return ['row', 'auto'].includes(table.getScope(cell));
            };
            table.toGrid = function (node) {
                var table = [];
                var rows = node.rows;
                for (var i = 0, rowLength = rows.length; i < rowLength; i++) {
                    var cells = rows[i].cells;
                    table[i] = table[i] || [];
                    var columnIndex = 0;
                    for (var j = 0, cellLength = cells.length; j < cellLength; j++) {
                        for (var colSpan = 0; colSpan < cells[j].colSpan; colSpan++) {
                            for (var rowSpan = 0; rowSpan < cells[j].rowSpan; rowSpan++) {
                                table[i + rowSpan] = table[i + rowSpan] || [];
                                while (table[i + rowSpan][columnIndex]) {
                                    columnIndex++;
                                }
                                table[i + rowSpan][columnIndex] = cells[j];
                            }
                            columnIndex++;
                        }
                    }
                }
                return table;
            };
            table.toArray = table.toGrid;
            (function (table) {
                var traverseTable = function traverseTable(dir, position, tableGrid, callback) {
                    var result;
                    var cell = tableGrid[position.y] ? tableGrid[position.y][position.x] : undefined;
                    if (!cell) {
                        return [];
                    }
                    if (typeof callback === 'function') {
                        result = callback(cell, position, tableGrid);
                        if (result === true) {
                            return [cell];
                        }
                    }
                    result = traverseTable(dir, {
                        x: position.x + dir.x,
                        y: position.y + dir.y
                    }, tableGrid, callback);
                    result.unshift(cell);
                    return result;
                };
                table.traverse = function (dir, startPos, tableGrid, callback) {
                    if (Array.isArray(startPos)) {
                        callback = tableGrid;
                        tableGrid = startPos;
                        startPos = {
                            x: 0,
                            y: 0
                        };
                    }
                    if (typeof dir === 'string') {
                        switch (dir) {
                            case 'left':
                                dir = {
                                    x: -1,
                                    y: 0
                                };
                                break;

                            case 'up':
                                dir = {
                                    x: 0,
                                    y: -1
                                };
                                break;

                            case 'right':
                                dir = {
                                    x: 1,
                                    y: 0
                                };
                                break;

                            case 'down':
                                dir = {
                                    x: 0,
                                    y: 1
                                };
                                break;
                        }
                    }
                    return traverseTable(dir, {
                        x: startPos.x + dir.x,
                        y: startPos.y + dir.y
                    }, tableGrid, callback);
                };
            })(table);
            var defaultButtonValues = {
                submit: 'Submit',
                reset: 'Reset'
            };
            var inputTypes = ['text', 'search', 'tel', 'url', 'email', 'date', 'time', 'number', 'range', 'color'];
            var phrasingElements = ['A', 'EM', 'STRONG', 'SMALL', 'MARK', 'ABBR', 'DFN', 'I', 'B', 'S', 'U', 'CODE', 'VAR', 'SAMP', 'KBD', 'SUP', 'SUB', 'Q', 'CITE', 'SPAN', 'BDO', 'BDI', 'BR', 'WBR', 'INS', 'DEL', 'IMG', 'EMBED', 'OBJECT', 'IFRAME', 'MAP', 'AREA', 'SCRIPT', 'NOSCRIPT', 'RUBY', 'VIDEO', 'AUDIO', 'INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'LABEL', 'OUTPUT', 'DATALIST', 'KEYGEN', 'PROGRESS', 'COMMAND', 'CANVAS', 'TIME', 'METER'];
            function findLabel(element) {
                var ref = null;
                if (element.getAttribute('id')) {
                    var id = axe.utils.escapeSelector(element.getAttribute('id'));
                    ref = document.querySelector('label[for="' + id + '"]');
                    if (ref) {
                        return ref;
                    }
                }
                ref = dom.findUp(element, 'label');
                return ref;
            }
            function isButton(element) {
                return ['button', 'reset', 'submit'].indexOf(element.type) !== -1;
            }
            function isInput(element) {
                var nodeName = element.nodeName.toUpperCase();
                return nodeName === 'TEXTAREA' || nodeName === 'SELECT' || nodeName === 'INPUT' && element.type.toLowerCase() !== 'hidden';
            }
            function shouldCheckSubtree(element) {
                return ['BUTTON', 'SUMMARY', 'A'].indexOf(element.nodeName.toUpperCase()) !== -1;
            }
            function shouldNeverCheckSubtree(element) {
                return ['TABLE', 'FIGURE'].indexOf(element.nodeName.toUpperCase()) !== -1;
            }
            function formValueText(element) {
                var nodeName = element.nodeName.toUpperCase();
                if (nodeName === 'INPUT') {
                    if (!element.hasAttribute('type') || inputTypes.indexOf(element.getAttribute('type').toLowerCase()) !== -1 && element.value) {
                        return element.value;
                    }
                    return '';
                }
                if (nodeName === 'SELECT') {
                    var opts = element.options;
                    if (opts && opts.length) {
                        var returnText = '';
                        for (var i = 0; i < opts.length; i++) {
                            if (opts[i].selected) {
                                returnText += ' ' + opts[i].text;
                            }
                        }
                        return text.sanitize(returnText);
                    }
                    return '';
                }
                if (nodeName === 'TEXTAREA' && element.value) {
                    return element.value;
                }
                return '';
            }
            function checkDescendant(element, nodeName) {
                var candidate = element.querySelector(nodeName.toLowerCase());
                if (candidate) {
                    return text.accessibleText(candidate);
                }
                return '';
            }
            function isEmbeddedControl(e) {
                if (!e) {
                    return false;
                }
                switch (e.nodeName.toUpperCase()) {
                    case 'SELECT':
                    case 'TEXTAREA':
                        return true;

                    case 'INPUT':
                        return !e.hasAttribute('type') || inputTypes.indexOf(e.getAttribute('type').toLowerCase()) !== -1;

                    default:
                        return false;
                }
            }
            function shouldCheckAlt(element) {
                var nodeName = element.nodeName.toUpperCase();
                return nodeName === 'INPUT' && element.type.toLowerCase() === 'image' || ['IMG', 'APPLET', 'AREA'].indexOf(nodeName) !== -1;
            }
            function nonEmptyText(t) {
                return !!text.sanitize(t);
            }
            text.accessibleText = function (element, inLabelledByContext) {
                var accessibleNameComputation;
                var encounteredNodes = [];
                function getInnerText(element, inLabelledByContext, inControlContext) {
                    var nodes = element.childNodes;
                    var returnText = '';
                    var node;
                    for (var i = 0; i < nodes.length; i++) {
                        node = nodes[i];
                        if (node.nodeType === 3) {
                            returnText += node.textContent;
                        } else if (node.nodeType === 1) {
                            if (phrasingElements.indexOf(node.nodeName.toUpperCase()) === -1) {
                                returnText += ' ';
                            }
                            returnText += accessibleNameComputation(nodes[i], inLabelledByContext, inControlContext);
                        }
                    }
                    return returnText;
                }
                function getLayoutTableText(element) {
                    if (!axe.commons.table.isDataTable(element) && axe.commons.table.getAllCells(element).length === 1) {
                        return getInnerText(element, false, false).trim();
                    }
                    return '';
                }
                function checkNative(element, inLabelledByContext, inControlContext) {
                    var returnText = '';
                    var nodeName = element.nodeName.toUpperCase();
                    if (shouldCheckSubtree(element)) {
                        returnText = getInnerText(element, false, false) || '';
                        if (nonEmptyText(returnText)) {
                            return returnText;
                        }
                    }
                    if (nodeName === 'FIGURE') {
                        returnText = checkDescendant(element, 'figcaption');
                        if (nonEmptyText(returnText)) {
                            return returnText;
                        }
                    }
                    if (nodeName === 'TABLE') {
                        returnText = checkDescendant(element, 'caption');
                        if (nonEmptyText(returnText)) {
                            return returnText;
                        }
                        returnText = element.getAttribute('title') || element.getAttribute('summary') || getLayoutTableText(element) || '';
                        if (nonEmptyText(returnText)) {
                            return returnText;
                        }
                    }
                    if (shouldCheckAlt(element)) {
                        return element.getAttribute('alt') || '';
                    }
                    if (isInput(element) && !inControlContext) {
                        if (isButton(element)) {
                            return element.value || element.title || defaultButtonValues[element.type] || '';
                        }
                        var labelElement = findLabel(element);
                        if (labelElement) {
                            return accessibleNameComputation(labelElement, inLabelledByContext, true);
                        }
                    }
                    return '';
                }
                function checkARIA(element, inLabelledByContext, inControlContext) {
                    if (!inLabelledByContext && element.hasAttribute('aria-labelledby')) {
                        return text.sanitize(dom.idrefs(element, 'aria-labelledby').map(function (l) {
                            if (element === l) {
                                encounteredNodes.pop();
                            }
                            return accessibleNameComputation(l, true, element !== l);
                        }).join(' '));
                    }
                    if (!(inControlContext && isEmbeddedControl(element)) && element.hasAttribute('aria-label')) {
                        return text.sanitize(element.getAttribute('aria-label'));
                    }
                    return '';
                }
                accessibleNameComputation = function accessibleNameComputation(element, inLabelledByContext, inControlContext) {
                    'use strict';
                    var returnText;
                    if (element === null || encounteredNodes.indexOf(element) !== -1) {
                        return '';
                    } else if (!inLabelledByContext && !dom.isVisible(element, true)) {
                        return '';
                    }
                    encounteredNodes.push(element);
                    var role = element.getAttribute('role');
                    returnText = checkARIA(element, inLabelledByContext, inControlContext);
                    if (nonEmptyText(returnText)) {
                        return returnText;
                    }
                    returnText = checkNative(element, inLabelledByContext, inControlContext);
                    if (nonEmptyText(returnText)) {
                        return returnText;
                    }
                    if (inControlContext) {
                        returnText = formValueText(element);
                        if (nonEmptyText(returnText)) {
                            return returnText;
                        }
                    }
                    if (!shouldNeverCheckSubtree(element) && (!role || aria.getRolesWithNameFromContents().indexOf(role) !== -1)) {
                        returnText = getInnerText(element, inLabelledByContext, inControlContext);
                        if (nonEmptyText(returnText)) {
                            return returnText;
                        }
                    }
                    if (element.hasAttribute('title')) {
                        return element.getAttribute('title');
                    }
                    return '';
                };
                return text.sanitize(accessibleNameComputation(element, inLabelledByContext));
            };
            text.label = function (node) {
                var ref, candidate;
                candidate = aria.label(node);
                if (candidate) {
                    return candidate;
                }
                if (node.getAttribute('id')) {
                    var id = axe.commons.utils.escapeSelector(node.getAttribute('id'));
                    ref = document.querySelector('label[for="' + id + '"]');
                    candidate = ref && text.visible(ref, true);
                    if (candidate) {
                        return candidate;
                    }
                }
                ref = dom.findUp(node, 'label');
                candidate = ref && text.visible(ref, true);
                if (candidate) {
                    return candidate;
                }
                return null;
            };
            text.sanitize = function (str) {
                'use strict';
                return str.replace(/\r\n/g, '\n').replace(/\u00A0/g, ' ').replace(/[\s]{2,}/g, ' ').trim();
            };
            text.visible = function (element, screenReader, noRecursing) {
                'use strict';
                var index, child, nodeValue, childNodes = element.childNodes, length = childNodes.length, result = '';
                for (index = 0; index < length; index++) {
                    child = childNodes[index];
                    if (child.nodeType === 3) {
                        nodeValue = child.nodeValue;
                        if (nodeValue && dom.isVisible(element, screenReader)) {
                            result += child.nodeValue;
                        }
                    } else if (!noRecursing) {
                        result += text.visible(child, screenReader);
                    }
                }
                return text.sanitize(result);
            };
            axe.utils.toArray = function (thing) {
                'use strict';
                return Array.prototype.slice.call(thing);
            };
            axe.utils.tokenList = function (str) {
                'use strict';
                return str.trim().replace(/\s{2,}/g, ' ').split(' ');
            };
            var langs = ['aa', 'ab', 'ae', 'af', 'ak', 'am', 'an', 'ar', 'as', 'av', 'ay', 'az', 'ba', 'be', 'bg', 'bh', 'bi', 'bm', 'bn', 'bo', 'br', 'bs', 'ca', 'ce', 'ch', 'co', 'cr', 'cs', 'cu', 'cv', 'cy', 'da', 'de', 'dv', 'dz', 'ee', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fa', 'ff', 'fi', 'fj', 'fo', 'fr', 'fy', 'ga', 'gd', 'gl', 'gn', 'gu', 'gv', 'ha', 'he', 'hi', 'ho', 'hr', 'ht', 'hu', 'hy', 'hz', 'ia', 'id', 'ie', 'ig', 'ii', 'ik', 'in', 'io', 'is', 'it', 'iu', 'iw', 'ja', 'ji', 'jv', 'jw', 'ka', 'kg', 'ki', 'kj', 'kk', 'kl', 'km', 'kn', 'ko', 'kr', 'ks', 'ku', 'kv', 'kw', 'ky', 'la', 'lb', 'lg', 'li', 'ln', 'lo', 'lt', 'lu', 'lv', 'mg', 'mh', 'mi', 'mk', 'ml', 'mn', 'mo', 'mr', 'ms', 'mt', 'my', 'na', 'nb', 'nd', 'ne', 'ng', 'nl', 'nn', 'no', 'nr', 'nv', 'ny', 'oc', 'oj', 'om', 'or', 'os', 'pa', 'pi', 'pl', 'ps', 'pt', 'qu', 'rm', 'rn', 'ro', 'ru', 'rw', 'sa', 'sc', 'sd', 'se', 'sg', 'sh', 'si', 'sk', 'sl', 'sm', 'sn', 'so', 'sq', 'sr', 'ss', 'st', 'su', 'sv', 'sw', 'ta', 'te', 'tg', 'th', 'ti', 'tk', 'tl', 'tn', 'to', 'tr', 'ts', 'tt', 'tw', 'ty', 'ug', 'uk', 'ur', 'uz', 've', 'vi', 'vo', 'wa', 'wo', 'xh', 'yi', 'yo', 'za', 'zh', 'zu', 'aaa', 'aab', 'aac', 'aad', 'aae', 'aaf', 'aag', 'aah', 'aai', 'aak', 'aal', 'aam', 'aan', 'aao', 'aap', 'aaq', 'aas', 'aat', 'aau', 'aav', 'aaw', 'aax', 'aaz', 'aba', 'abb', 'abc', 'abd', 'abe', 'abf', 'abg', 'abh', 'abi', 'abj', 'abl', 'abm', 'abn', 'abo', 'abp', 'abq', 'abr', 'abs', 'abt', 'abu', 'abv', 'abw', 'abx', 'aby', 'abz', 'aca', 'acb', 'acd', 'ace', 'acf', 'ach', 'aci', 'ack', 'acl', 'acm', 'acn', 'acp', 'acq', 'acr', 'acs', 'act', 'acu', 'acv', 'acw', 'acx', 'acy', 'acz', 'ada', 'adb', 'add', 'ade', 'adf', 'adg', 'adh', 'adi', 'adj', 'adl', 'adn', 'ado', 'adp', 'adq', 'adr', 'ads', 'adt', 'adu', 'adw', 'adx', 'ady', 'adz', 'aea', 'aeb', 'aec', 'aed', 'aee', 'aek', 'ael', 'aem', 'aen', 'aeq', 'aer', 'aes', 'aeu', 'aew', 'aey', 'aez', 'afa', 'afb', 'afd', 'afe', 'afg', 'afh', 'afi', 'afk', 'afn', 'afo', 'afp', 'afs', 'aft', 'afu', 'afz', 'aga', 'agb', 'agc', 'agd', 'age', 'agf', 'agg', 'agh', 'agi', 'agj', 'agk', 'agl', 'agm', 'agn', 'ago', 'agp', 'agq', 'agr', 'ags', 'agt', 'agu', 'agv', 'agw', 'agx', 'agy', 'agz', 'aha', 'ahb', 'ahg', 'ahh', 'ahi', 'ahk', 'ahl', 'ahm', 'ahn', 'aho', 'ahp', 'ahr', 'ahs', 'aht', 'aia', 'aib', 'aic', 'aid', 'aie', 'aif', 'aig', 'aih', 'aii', 'aij', 'aik', 'ail', 'aim', 'ain', 'aio', 'aip', 'aiq', 'air', 'ais', 'ait', 'aiw', 'aix', 'aiy', 'aja', 'ajg', 'aji', 'ajn', 'ajp', 'ajt', 'aju', 'ajw', 'ajz', 'akb', 'akc', 'akd', 'ake', 'akf', 'akg', 'akh', 'aki', 'akj', 'akk', 'akl', 'akm', 'ako', 'akp', 'akq', 'akr', 'aks', 'akt', 'aku', 'akv', 'akw', 'akx', 'aky', 'akz', 'ala', 'alc', 'ald', 'ale', 'alf', 'alg', 'alh', 'ali', 'alj', 'alk', 'all', 'alm', 'aln', 'alo', 'alp', 'alq', 'alr', 'als', 'alt', 'alu', 'alv', 'alw', 'alx', 'aly', 'alz', 'ama', 'amb', 'amc', 'ame', 'amf', 'amg', 'ami', 'amj', 'amk', 'aml', 'amm', 'amn', 'amo', 'amp', 'amq', 'amr', 'ams', 'amt', 'amu', 'amv', 'amw', 'amx', 'amy', 'amz', 'ana', 'anb', 'anc', 'and', 'ane', 'anf', 'ang', 'anh', 'ani', 'anj', 'ank', 'anl', 'anm', 'ann', 'ano', 'anp', 'anq', 'anr', 'ans', 'ant', 'anu', 'anv', 'anw', 'anx', 'any', 'anz', 'aoa', 'aob', 'aoc', 'aod', 'aoe', 'aof', 'aog', 'aoh', 'aoi', 'aoj', 'aok', 'aol', 'aom', 'aon', 'aor', 'aos', 'aot', 'aou', 'aox', 'aoz', 'apa', 'apb', 'apc', 'apd', 'ape', 'apf', 'apg', 'aph', 'api', 'apj', 'apk', 'apl', 'apm', 'apn', 'apo', 'app', 'apq', 'apr', 'aps', 'apt', 'apu', 'apv', 'apw', 'apx', 'apy', 'apz', 'aqa', 'aqc', 'aqd', 'aqg', 'aql', 'aqm', 'aqn', 'aqp', 'aqr', 'aqt', 'aqz', 'arb', 'arc', 'ard', 'are', 'arh', 'ari', 'arj', 'ark', 'arl', 'arn', 'aro', 'arp', 'arq', 'arr', 'ars', 'art', 'aru', 'arv', 'arw', 'arx', 'ary', 'arz', 'asa', 'asb', 'asc', 'asd', 'ase', 'asf', 'asg', 'ash', 'asi', 'asj', 'ask', 'asl', 'asn', 'aso', 'asp', 'asq', 'asr', 'ass', 'ast', 'asu', 'asv', 'asw', 'asx', 'asy', 'asz', 'ata', 'atb', 'atc', 'atd', 'ate', 'atg', 'ath', 'ati', 'atj', 'atk', 'atl', 'atm', 'atn', 'ato', 'atp', 'atq', 'atr', 'ats', 'att', 'atu', 'atv', 'atw', 'atx', 'aty', 'atz', 'aua', 'aub', 'auc', 'aud', 'aue', 'auf', 'aug', 'auh', 'aui', 'auj', 'auk', 'aul', 'aum', 'aun', 'auo', 'aup', 'auq', 'aur', 'aus', 'aut', 'auu', 'auw', 'aux', 'auy', 'auz', 'avb', 'avd', 'avi', 'avk', 'avl', 'avm', 'avn', 'avo', 'avs', 'avt', 'avu', 'avv', 'awa', 'awb', 'awc', 'awd', 'awe', 'awg', 'awh', 'awi', 'awk', 'awm', 'awn', 'awo', 'awr', 'aws', 'awt', 'awu', 'awv', 'aww', 'awx', 'awy', 'axb', 'axe', 'axg', 'axk', 'axl', 'axm', 'axx', 'aya', 'ayb', 'ayc', 'ayd', 'aye', 'ayg', 'ayh', 'ayi', 'ayk', 'ayl', 'ayn', 'ayo', 'ayp', 'ayq', 'ayr', 'ays', 'ayt', 'ayu', 'ayx', 'ayy', 'ayz', 'aza', 'azb', 'azc', 'azd', 'azg', 'azj', 'azm', 'azn', 'azo', 'azt', 'azz', 'baa', 'bab', 'bac', 'bad', 'bae', 'baf', 'bag', 'bah', 'bai', 'baj', 'bal', 'ban', 'bao', 'bap', 'bar', 'bas', 'bat', 'bau', 'bav', 'baw', 'bax', 'bay', 'baz', 'bba', 'bbb', 'bbc', 'bbd', 'bbe', 'bbf', 'bbg', 'bbh', 'bbi', 'bbj', 'bbk', 'bbl', 'bbm', 'bbn', 'bbo', 'bbp', 'bbq', 'bbr', 'bbs', 'bbt', 'bbu', 'bbv', 'bbw', 'bbx', 'bby', 'bbz', 'bca', 'bcb', 'bcc', 'bcd', 'bce', 'bcf', 'bcg', 'bch', 'bci', 'bcj', 'bck', 'bcl', 'bcm', 'bcn', 'bco', 'bcp', 'bcq', 'bcr', 'bcs', 'bct', 'bcu', 'bcv', 'bcw', 'bcy', 'bcz', 'bda', 'bdb', 'bdc', 'bdd', 'bde', 'bdf', 'bdg', 'bdh', 'bdi', 'bdj', 'bdk', 'bdl', 'bdm', 'bdn', 'bdo', 'bdp', 'bdq', 'bdr', 'bds', 'bdt', 'bdu', 'bdv', 'bdw', 'bdx', 'bdy', 'bdz', 'bea', 'beb', 'bec', 'bed', 'bee', 'bef', 'beg', 'beh', 'bei', 'bej', 'bek', 'bem', 'beo', 'bep', 'beq', 'ber', 'bes', 'bet', 'beu', 'bev', 'bew', 'bex', 'bey', 'bez', 'bfa', 'bfb', 'bfc', 'bfd', 'bfe', 'bff', 'bfg', 'bfh', 'bfi', 'bfj', 'bfk', 'bfl', 'bfm', 'bfn', 'bfo', 'bfp', 'bfq', 'bfr', 'bfs', 'bft', 'bfu', 'bfw', 'bfx', 'bfy', 'bfz', 'bga', 'bgb', 'bgc', 'bgd', 'bge', 'bgf', 'bgg', 'bgi', 'bgj', 'bgk', 'bgl', 'bgm', 'bgn', 'bgo', 'bgp', 'bgq', 'bgr', 'bgs', 'bgt', 'bgu', 'bgv', 'bgw', 'bgx', 'bgy', 'bgz', 'bha', 'bhb', 'bhc', 'bhd', 'bhe', 'bhf', 'bhg', 'bhh', 'bhi', 'bhj', 'bhk', 'bhl', 'bhm', 'bhn', 'bho', 'bhp', 'bhq', 'bhr', 'bhs', 'bht', 'bhu', 'bhv', 'bhw', 'bhx', 'bhy', 'bhz', 'bia', 'bib', 'bic', 'bid', 'bie', 'bif', 'big', 'bij', 'bik', 'bil', 'bim', 'bin', 'bio', 'bip', 'biq', 'bir', 'bit', 'biu', 'biv', 'biw', 'bix', 'biy', 'biz', 'bja', 'bjb', 'bjc', 'bjd', 'bje', 'bjf', 'bjg', 'bjh', 'bji', 'bjj', 'bjk', 'bjl', 'bjm', 'bjn', 'bjo', 'bjp', 'bjq', 'bjr', 'bjs', 'bjt', 'bju', 'bjv', 'bjw', 'bjx', 'bjy', 'bjz', 'bka', 'bkb', 'bkc', 'bkd', 'bkf', 'bkg', 'bkh', 'bki', 'bkj', 'bkk', 'bkl', 'bkm', 'bkn', 'bko', 'bkp', 'bkq', 'bkr', 'bks', 'bkt', 'bku', 'bkv', 'bkw', 'bkx', 'bky', 'bkz', 'bla', 'blb', 'blc', 'bld', 'ble', 'blf', 'blg', 'blh', 'bli', 'blj', 'blk', 'bll', 'blm', 'bln', 'blo', 'blp', 'blq', 'blr', 'bls', 'blt', 'blv', 'blw', 'blx', 'bly', 'blz', 'bma', 'bmb', 'bmc', 'bmd', 'bme', 'bmf', 'bmg', 'bmh', 'bmi', 'bmj', 'bmk', 'bml', 'bmm', 'bmn', 'bmo', 'bmp', 'bmq', 'bmr', 'bms', 'bmt', 'bmu', 'bmv', 'bmw', 'bmx', 'bmy', 'bmz', 'bna', 'bnb', 'bnc', 'bnd', 'bne', 'bnf', 'bng', 'bni', 'bnj', 'bnk', 'bnl', 'bnm', 'bnn', 'bno', 'bnp', 'bnq', 'bnr', 'bns', 'bnt', 'bnu', 'bnv', 'bnw', 'bnx', 'bny', 'bnz', 'boa', 'bob', 'boe', 'bof', 'bog', 'boh', 'boi', 'boj', 'bok', 'bol', 'bom', 'bon', 'boo', 'bop', 'boq', 'bor', 'bot', 'bou', 'bov', 'bow', 'box', 'boy', 'boz', 'bpa', 'bpb', 'bpd', 'bpg', 'bph', 'bpi', 'bpj', 'bpk', 'bpl', 'bpm', 'bpn', 'bpo', 'bpp', 'bpq', 'bpr', 'bps', 'bpt', 'bpu', 'bpv', 'bpw', 'bpx', 'bpy', 'bpz', 'bqa', 'bqb', 'bqc', 'bqd', 'bqf', 'bqg', 'bqh', 'bqi', 'bqj', 'bqk', 'bql', 'bqm', 'bqn', 'bqo', 'bqp', 'bqq', 'bqr', 'bqs', 'bqt', 'bqu', 'bqv', 'bqw', 'bqx', 'bqy', 'bqz', 'bra', 'brb', 'brc', 'brd', 'brf', 'brg', 'brh', 'bri', 'brj', 'brk', 'brl', 'brm', 'brn', 'bro', 'brp', 'brq', 'brr', 'brs', 'brt', 'bru', 'brv', 'brw', 'brx', 'bry', 'brz', 'bsa', 'bsb', 'bsc', 'bse', 'bsf', 'bsg', 'bsh', 'bsi', 'bsj', 'bsk', 'bsl', 'bsm', 'bsn', 'bso', 'bsp', 'bsq', 'bsr', 'bss', 'bst', 'bsu', 'bsv', 'bsw', 'bsx', 'bsy', 'bta', 'btb', 'btc', 'btd', 'bte', 'btf', 'btg', 'bth', 'bti', 'btj', 'btk', 'btl', 'btm', 'btn', 'bto', 'btp', 'btq', 'btr', 'bts', 'btt', 'btu', 'btv', 'btw', 'btx', 'bty', 'btz', 'bua', 'bub', 'buc', 'bud', 'bue', 'buf', 'bug', 'buh', 'bui', 'buj', 'buk', 'bum', 'bun', 'buo', 'bup', 'buq', 'bus', 'but', 'buu', 'buv', 'buw', 'bux', 'buy', 'buz', 'bva', 'bvb', 'bvc', 'bvd', 'bve', 'bvf', 'bvg', 'bvh', 'bvi', 'bvj', 'bvk', 'bvl', 'bvm', 'bvn', 'bvo', 'bvp', 'bvq', 'bvr', 'bvt', 'bvu', 'bvv', 'bvw', 'bvx', 'bvy', 'bvz', 'bwa', 'bwb', 'bwc', 'bwd', 'bwe', 'bwf', 'bwg', 'bwh', 'bwi', 'bwj', 'bwk', 'bwl', 'bwm', 'bwn', 'bwo', 'bwp', 'bwq', 'bwr', 'bws', 'bwt', 'bwu', 'bww', 'bwx', 'bwy', 'bwz', 'bxa', 'bxb', 'bxc', 'bxd', 'bxe', 'bxf', 'bxg', 'bxh', 'bxi', 'bxj', 'bxk', 'bxl', 'bxm', 'bxn', 'bxo', 'bxp', 'bxq', 'bxr', 'bxs', 'bxu', 'bxv', 'bxw', 'bxx', 'bxz', 'bya', 'byb', 'byc', 'byd', 'bye', 'byf', 'byg', 'byh', 'byi', 'byj', 'byk', 'byl', 'bym', 'byn', 'byo', 'byp', 'byq', 'byr', 'bys', 'byt', 'byv', 'byw', 'byx', 'byy', 'byz', 'bza', 'bzb', 'bzc', 'bzd', 'bze', 'bzf', 'bzg', 'bzh', 'bzi', 'bzj', 'bzk', 'bzl', 'bzm', 'bzn', 'bzo', 'bzp', 'bzq', 'bzr', 'bzs', 'bzt', 'bzu', 'bzv', 'bzw', 'bzx', 'bzy', 'bzz', 'caa', 'cab', 'cac', 'cad', 'cae', 'caf', 'cag', 'cah', 'cai', 'caj', 'cak', 'cal', 'cam', 'can', 'cao', 'cap', 'caq', 'car', 'cas', 'cau', 'cav', 'caw', 'cax', 'cay', 'caz', 'cba', 'cbb', 'cbc', 'cbd', 'cbe', 'cbg', 'cbh', 'cbi', 'cbj', 'cbk', 'cbl', 'cbn', 'cbo', 'cbq', 'cbr', 'cbs', 'cbt', 'cbu', 'cbv', 'cbw', 'cby', 'cca', 'ccc', 'ccd', 'cce', 'ccg', 'cch', 'ccj', 'ccl', 'ccm', 'ccn', 'cco', 'ccp', 'ccq', 'ccr', 'ccs', 'cda', 'cdc', 'cdd', 'cde', 'cdf', 'cdg', 'cdh', 'cdi', 'cdj', 'cdm', 'cdn', 'cdo', 'cdr', 'cds', 'cdy', 'cdz', 'cea', 'ceb', 'ceg', 'cek', 'cel', 'cen', 'cet', 'cfa', 'cfd', 'cfg', 'cfm', 'cga', 'cgc', 'cgg', 'cgk', 'chb', 'chc', 'chd', 'chf', 'chg', 'chh', 'chj', 'chk', 'chl', 'chm', 'chn', 'cho', 'chp', 'chq', 'chr', 'cht', 'chw', 'chx', 'chy', 'chz', 'cia', 'cib', 'cic', 'cid', 'cie', 'cih', 'cik', 'cim', 'cin', 'cip', 'cir', 'ciw', 'ciy', 'cja', 'cje', 'cjh', 'cji', 'cjk', 'cjm', 'cjn', 'cjo', 'cjp', 'cjr', 'cjs', 'cjv', 'cjy', 'cka', 'ckb', 'ckh', 'ckl', 'ckn', 'cko', 'ckq', 'ckr', 'cks', 'ckt', 'cku', 'ckv', 'ckx', 'cky', 'ckz', 'cla', 'clc', 'cld', 'cle', 'clh', 'cli', 'clj', 'clk', 'cll', 'clm', 'clo', 'clt', 'clu', 'clw', 'cly', 'cma', 'cmc', 'cme', 'cmg', 'cmi', 'cmk', 'cml', 'cmm', 'cmn', 'cmo', 'cmr', 'cms', 'cmt', 'cna', 'cnb', 'cnc', 'cng', 'cnh', 'cni', 'cnk', 'cnl', 'cno', 'cns', 'cnt', 'cnu', 'cnw', 'cnx', 'coa', 'cob', 'coc', 'cod', 'coe', 'cof', 'cog', 'coh', 'coj', 'cok', 'col', 'com', 'con', 'coo', 'cop', 'coq', 'cot', 'cou', 'cov', 'cow', 'cox', 'coy', 'coz', 'cpa', 'cpb', 'cpc', 'cpe', 'cpf', 'cpg', 'cpi', 'cpn', 'cpo', 'cpp', 'cps', 'cpu', 'cpx', 'cpy', 'cqd', 'cqu', 'cra', 'crb', 'crc', 'crd', 'crf', 'crg', 'crh', 'cri', 'crj', 'crk', 'crl', 'crm', 'crn', 'cro', 'crp', 'crq', 'crr', 'crs', 'crt', 'crv', 'crw', 'crx', 'cry', 'crz', 'csa', 'csb', 'csc', 'csd', 'cse', 'csf', 'csg', 'csh', 'csi', 'csj', 'csk', 'csl', 'csm', 'csn', 'cso', 'csq', 'csr', 'css', 'cst', 'csu', 'csv', 'csw', 'csy', 'csz', 'cta', 'ctc', 'ctd', 'cte', 'ctg', 'cth', 'ctl', 'ctm', 'ctn', 'cto', 'ctp', 'cts', 'ctt', 'ctu', 'ctz', 'cua', 'cub', 'cuc', 'cug', 'cuh', 'cui', 'cuj', 'cuk', 'cul', 'cum', 'cuo', 'cup', 'cuq', 'cur', 'cus', 'cut', 'cuu', 'cuv', 'cuw', 'cux', 'cvg', 'cvn', 'cwa', 'cwb', 'cwd', 'cwe', 'cwg', 'cwt', 'cya', 'cyb', 'cyo', 'czh', 'czk', 'czn', 'czo', 'czt', 'daa', 'dac', 'dad', 'dae', 'daf', 'dag', 'dah', 'dai', 'daj', 'dak', 'dal', 'dam', 'dao', 'dap', 'daq', 'dar', 'das', 'dau', 'dav', 'daw', 'dax', 'day', 'daz', 'dba', 'dbb', 'dbd', 'dbe', 'dbf', 'dbg', 'dbi', 'dbj', 'dbl', 'dbm', 'dbn', 'dbo', 'dbp', 'dbq', 'dbr', 'dbt', 'dbu', 'dbv', 'dbw', 'dby', 'dcc', 'dcr', 'dda', 'ddd', 'dde', 'ddg', 'ddi', 'ddj', 'ddn', 'ddo', 'ddr', 'dds', 'ddw', 'dec', 'ded', 'dee', 'def', 'deg', 'deh', 'dei', 'dek', 'del', 'dem', 'den', 'dep', 'deq', 'der', 'des', 'dev', 'dez', 'dga', 'dgb', 'dgc', 'dgd', 'dge', 'dgg', 'dgh', 'dgi', 'dgk', 'dgl', 'dgn', 'dgo', 'dgr', 'dgs', 'dgt', 'dgu', 'dgw', 'dgx', 'dgz', 'dha', 'dhd', 'dhg', 'dhi', 'dhl', 'dhm', 'dhn', 'dho', 'dhr', 'dhs', 'dhu', 'dhv', 'dhw', 'dhx', 'dia', 'dib', 'dic', 'did', 'dif', 'dig', 'dih', 'dii', 'dij', 'dik', 'dil', 'dim', 'din', 'dio', 'dip', 'diq', 'dir', 'dis', 'dit', 'diu', 'diw', 'dix', 'diy', 'diz', 'dja', 'djb', 'djc', 'djd', 'dje', 'djf', 'dji', 'djj', 'djk', 'djl', 'djm', 'djn', 'djo', 'djr', 'dju', 'djw', 'dka', 'dkk', 'dkl', 'dkr', 'dks', 'dkx', 'dlg', 'dlk', 'dlm', 'dln', 'dma', 'dmb', 'dmc', 'dmd', 'dme', 'dmg', 'dmk', 'dml', 'dmm', 'dmn', 'dmo', 'dmr', 'dms', 'dmu', 'dmv', 'dmw', 'dmx', 'dmy', 'dna', 'dnd', 'dne', 'dng', 'dni', 'dnj', 'dnk', 'dnn', 'dnr', 'dnt', 'dnu', 'dnv', 'dnw', 'dny', 'doa', 'dob', 'doc', 'doe', 'dof', 'doh', 'doi', 'dok', 'dol', 'don', 'doo', 'dop', 'doq', 'dor', 'dos', 'dot', 'dov', 'dow', 'dox', 'doy', 'doz', 'dpp', 'dra', 'drb', 'drc', 'drd', 'dre', 'drg', 'drh', 'dri', 'drl', 'drn', 'dro', 'drq', 'drr', 'drs', 'drt', 'dru', 'drw', 'dry', 'dsb', 'dse', 'dsh', 'dsi', 'dsl', 'dsn', 'dso', 'dsq', 'dta', 'dtb', 'dtd', 'dth', 'dti', 'dtk', 'dtm', 'dtn', 'dto', 'dtp', 'dtr', 'dts', 'dtt', 'dtu', 'dty', 'dua', 'dub', 'duc', 'dud', 'due', 'duf', 'dug', 'duh', 'dui', 'duj', 'duk', 'dul', 'dum', 'dun', 'duo', 'dup', 'duq', 'dur', 'dus', 'duu', 'duv', 'duw', 'dux', 'duy', 'duz', 'dva', 'dwa', 'dwl', 'dwr', 'dws', 'dwu', 'dww', 'dwy', 'dya', 'dyb', 'dyd', 'dyg', 'dyi', 'dym', 'dyn', 'dyo', 'dyu', 'dyy', 'dza', 'dzd', 'dze', 'dzg', 'dzl', 'dzn', 'eaa', 'ebg', 'ebk', 'ebo', 'ebr', 'ebu', 'ecr', 'ecs', 'ecy', 'eee', 'efa', 'efe', 'efi', 'ega', 'egl', 'ego', 'egx', 'egy', 'ehu', 'eip', 'eit', 'eiv', 'eja', 'eka', 'ekc', 'eke', 'ekg', 'eki', 'ekk', 'ekl', 'ekm', 'eko', 'ekp', 'ekr', 'eky', 'ele', 'elh', 'eli', 'elk', 'elm', 'elo', 'elp', 'elu', 'elx', 'ema', 'emb', 'eme', 'emg', 'emi', 'emk', 'emm', 'emn', 'emo', 'emp', 'ems', 'emu', 'emw', 'emx', 'emy', 'ena', 'enb', 'enc', 'end', 'enf', 'enh', 'enl', 'enm', 'enn', 'eno', 'enq', 'enr', 'enu', 'env', 'enw', 'enx', 'eot', 'epi', 'era', 'erg', 'erh', 'eri', 'erk', 'ero', 'err', 'ers', 'ert', 'erw', 'ese', 'esg', 'esh', 'esi', 'esk', 'esl', 'esm', 'esn', 'eso', 'esq', 'ess', 'esu', 'esx', 'esy', 'etb', 'etc', 'eth', 'etn', 'eto', 'etr', 'ets', 'ett', 'etu', 'etx', 'etz', 'euq', 'eve', 'evh', 'evn', 'ewo', 'ext', 'eya', 'eyo', 'eza', 'eze', 'faa', 'fab', 'fad', 'faf', 'fag', 'fah', 'fai', 'faj', 'fak', 'fal', 'fam', 'fan', 'fap', 'far', 'fat', 'fau', 'fax', 'fay', 'faz', 'fbl', 'fcs', 'fer', 'ffi', 'ffm', 'fgr', 'fia', 'fie', 'fil', 'fip', 'fir', 'fit', 'fiu', 'fiw', 'fkk', 'fkv', 'fla', 'flh', 'fli', 'fll', 'fln', 'flr', 'fly', 'fmp', 'fmu', 'fnb', 'fng', 'fni', 'fod', 'foi', 'fom', 'fon', 'for', 'fos', 'fox', 'fpe', 'fqs', 'frc', 'frd', 'frk', 'frm', 'fro', 'frp', 'frq', 'frr', 'frs', 'frt', 'fse', 'fsl', 'fss', 'fub', 'fuc', 'fud', 'fue', 'fuf', 'fuh', 'fui', 'fuj', 'fum', 'fun', 'fuq', 'fur', 'fut', 'fuu', 'fuv', 'fuy', 'fvr', 'fwa', 'fwe', 'gaa', 'gab', 'gac', 'gad', 'gae', 'gaf', 'gag', 'gah', 'gai', 'gaj', 'gak', 'gal', 'gam', 'gan', 'gao', 'gap', 'gaq', 'gar', 'gas', 'gat', 'gau', 'gav', 'gaw', 'gax', 'gay', 'gaz', 'gba', 'gbb', 'gbc', 'gbd', 'gbe', 'gbf', 'gbg', 'gbh', 'gbi', 'gbj', 'gbk', 'gbl', 'gbm', 'gbn', 'gbo', 'gbp', 'gbq', 'gbr', 'gbs', 'gbu', 'gbv', 'gbw', 'gbx', 'gby', 'gbz', 'gcc', 'gcd', 'gce', 'gcf', 'gcl', 'gcn', 'gcr', 'gct', 'gda', 'gdb', 'gdc', 'gdd', 'gde', 'gdf', 'gdg', 'gdh', 'gdi', 'gdj', 'gdk', 'gdl', 'gdm', 'gdn', 'gdo', 'gdq', 'gdr', 'gds', 'gdt', 'gdu', 'gdx', 'gea', 'geb', 'gec', 'ged', 'geg', 'geh', 'gei', 'gej', 'gek', 'gel', 'gem', 'geq', 'ges', 'gev', 'gew', 'gex', 'gey', 'gez', 'gfk', 'gft', 'gfx', 'gga', 'ggb', 'ggd', 'gge', 'ggg', 'ggk', 'ggl', 'ggn', 'ggo', 'ggr', 'ggt', 'ggu', 'ggw', 'gha', 'ghc', 'ghe', 'ghh', 'ghk', 'ghl', 'ghn', 'gho', 'ghr', 'ghs', 'ght', 'gia', 'gib', 'gic', 'gid', 'gie', 'gig', 'gih', 'gil', 'gim', 'gin', 'gio', 'gip', 'giq', 'gir', 'gis', 'git', 'giu', 'giw', 'gix', 'giy', 'giz', 'gji', 'gjk', 'gjm', 'gjn', 'gjr', 'gju', 'gka', 'gke', 'gkn', 'gko', 'gkp', 'gku', 'glc', 'gld', 'glh', 'gli', 'glj', 'glk', 'gll', 'glo', 'glr', 'glu', 'glw', 'gly', 'gma', 'gmb', 'gmd', 'gme', 'gmg', 'gmh', 'gml', 'gmm', 'gmn', 'gmq', 'gmu', 'gmv', 'gmw', 'gmx', 'gmy', 'gmz', 'gna', 'gnb', 'gnc', 'gnd', 'gne', 'gng', 'gnh', 'gni', 'gnk', 'gnl', 'gnm', 'gnn', 'gno', 'gnq', 'gnr', 'gnt', 'gnu', 'gnw', 'gnz', 'goa', 'gob', 'goc', 'god', 'goe', 'gof', 'gog', 'goh', 'goi', 'goj', 'gok', 'gol', 'gom', 'gon', 'goo', 'gop', 'goq', 'gor', 'gos', 'got', 'gou', 'gow', 'gox', 'goy', 'goz', 'gpa', 'gpe', 'gpn', 'gqa', 'gqi', 'gqn', 'gqr', 'gqu', 'gra', 'grb', 'grc', 'grd', 'grg', 'grh', 'gri', 'grj', 'grk', 'grm', 'gro', 'grq', 'grr', 'grs', 'grt', 'gru', 'grv', 'grw', 'grx', 'gry', 'grz', 'gse', 'gsg', 'gsl', 'gsm', 'gsn', 'gso', 'gsp', 'gss', 'gsw', 'gta', 'gti', 'gtu', 'gua', 'gub', 'guc', 'gud', 'gue', 'guf', 'gug', 'guh', 'gui', 'guk', 'gul', 'gum', 'gun', 'guo', 'gup', 'guq', 'gur', 'gus', 'gut', 'guu', 'guv', 'guw', 'gux', 'guz', 'gva', 'gvc', 'gve', 'gvf', 'gvj', 'gvl', 'gvm', 'gvn', 'gvo', 'gvp', 'gvr', 'gvs', 'gvy', 'gwa', 'gwb', 'gwc', 'gwd', 'gwe', 'gwf', 'gwg', 'gwi', 'gwj', 'gwm', 'gwn', 'gwr', 'gwt', 'gwu', 'gww', 'gwx', 'gxx', 'gya', 'gyb', 'gyd', 'gye', 'gyf', 'gyg', 'gyi', 'gyl', 'gym', 'gyn', 'gyr', 'gyy', 'gza', 'gzi', 'gzn', 'haa', 'hab', 'hac', 'had', 'hae', 'haf', 'hag', 'hah', 'hai', 'haj', 'hak', 'hal', 'ham', 'han', 'hao', 'hap', 'haq', 'har', 'has', 'hav', 'haw', 'hax', 'hay', 'haz', 'hba', 'hbb', 'hbn', 'hbo', 'hbu', 'hca', 'hch', 'hdn', 'hds', 'hdy', 'hea', 'hed', 'heg', 'heh', 'hei', 'hem', 'hgm', 'hgw', 'hhi', 'hhr', 'hhy', 'hia', 'hib', 'hid', 'hif', 'hig', 'hih', 'hii', 'hij', 'hik', 'hil', 'him', 'hio', 'hir', 'hit', 'hiw', 'hix', 'hji', 'hka', 'hke', 'hkk', 'hks', 'hla', 'hlb', 'hld', 'hle', 'hlt', 'hlu', 'hma', 'hmb', 'hmc', 'hmd', 'hme', 'hmf', 'hmg', 'hmh', 'hmi', 'hmj', 'hmk', 'hml', 'hmm', 'hmn', 'hmp', 'hmq', 'hmr', 'hms', 'hmt', 'hmu', 'hmv', 'hmw', 'hmx', 'hmy', 'hmz', 'hna', 'hnd', 'hne', 'hnh', 'hni', 'hnj', 'hnn', 'hno', 'hns', 'hnu', 'hoa', 'hob', 'hoc', 'hod', 'hoe', 'hoh', 'hoi', 'hoj', 'hok', 'hol', 'hom', 'hoo', 'hop', 'hor', 'hos', 'hot', 'hov', 'how', 'hoy', 'hoz', 'hpo', 'hps', 'hra', 'hrc', 'hre', 'hrk', 'hrm', 'hro', 'hrp', 'hrr', 'hrt', 'hru', 'hrw', 'hrx', 'hrz', 'hsb', 'hsh', 'hsl', 'hsn', 'hss', 'hti', 'hto', 'hts', 'htu', 'htx', 'hub', 'huc', 'hud', 'hue', 'huf', 'hug', 'huh', 'hui', 'huj', 'huk', 'hul', 'hum', 'huo', 'hup', 'huq', 'hur', 'hus', 'hut', 'huu', 'huv', 'huw', 'hux', 'huy', 'huz', 'hvc', 'hve', 'hvk', 'hvn', 'hvv', 'hwa', 'hwc', 'hwo', 'hya', 'hyx', 'iai', 'ian', 'iap', 'iar', 'iba', 'ibb', 'ibd', 'ibe', 'ibg', 'ibh', 'ibi', 'ibl', 'ibm', 'ibn', 'ibr', 'ibu', 'iby', 'ica', 'ich', 'icl', 'icr', 'ida', 'idb', 'idc', 'idd', 'ide', 'idi', 'idr', 'ids', 'idt', 'idu', 'ifa', 'ifb', 'ife', 'iff', 'ifk', 'ifm', 'ifu', 'ify', 'igb', 'ige', 'igg', 'igl', 'igm', 'ign', 'igo', 'igs', 'igw', 'ihb', 'ihi', 'ihp', 'ihw', 'iin', 'iir', 'ijc', 'ije', 'ijj', 'ijn', 'ijo', 'ijs', 'ike', 'iki', 'ikk', 'ikl', 'iko', 'ikp', 'ikr', 'iks', 'ikt', 'ikv', 'ikw', 'ikx', 'ikz', 'ila', 'ilb', 'ilg', 'ili', 'ilk', 'ill', 'ilm', 'ilo', 'ilp', 'ils', 'ilu', 'ilv', 'ilw', 'ima', 'ime', 'imi', 'iml', 'imn', 'imo', 'imr', 'ims', 'imy', 'inb', 'inc', 'ine', 'ing', 'inh', 'inj', 'inl', 'inm', 'inn', 'ino', 'inp', 'ins', 'int', 'inz', 'ior', 'iou', 'iow', 'ipi', 'ipo', 'iqu', 'iqw', 'ira', 'ire', 'irh', 'iri', 'irk', 'irn', 'iro', 'irr', 'iru', 'irx', 'iry', 'isa', 'isc', 'isd', 'ise', 'isg', 'ish', 'isi', 'isk', 'ism', 'isn', 'iso', 'isr', 'ist', 'isu', 'itb', 'itc', 'itd', 'ite', 'iti', 'itk', 'itl', 'itm', 'ito', 'itr', 'its', 'itt', 'itv', 'itw', 'itx', 'ity', 'itz', 'ium', 'ivb', 'ivv', 'iwk', 'iwm', 'iwo', 'iws', 'ixc', 'ixl', 'iya', 'iyo', 'iyx', 'izh', 'izi', 'izr', 'izz', 'jaa', 'jab', 'jac', 'jad', 'jae', 'jaf', 'jah', 'jaj', 'jak', 'jal', 'jam', 'jan', 'jao', 'jaq', 'jar', 'jas', 'jat', 'jau', 'jax', 'jay', 'jaz', 'jbe', 'jbi', 'jbj', 'jbk', 'jbn', 'jbo', 'jbr', 'jbt', 'jbu', 'jbw', 'jcs', 'jct', 'jda', 'jdg', 'jdt', 'jeb', 'jee', 'jeg', 'jeh', 'jei', 'jek', 'jel', 'jen', 'jer', 'jet', 'jeu', 'jgb', 'jge', 'jgk', 'jgo', 'jhi', 'jhs', 'jia', 'jib', 'jic', 'jid', 'jie', 'jig', 'jih', 'jii', 'jil', 'jim', 'jio', 'jiq', 'jit', 'jiu', 'jiv', 'jiy', 'jje', 'jjr', 'jka', 'jkm', 'jko', 'jkp', 'jkr', 'jku', 'jle', 'jls', 'jma', 'jmb', 'jmc', 'jmd', 'jmi', 'jml', 'jmn', 'jmr', 'jms', 'jmw', 'jmx', 'jna', 'jnd', 'jng', 'jni', 'jnj', 'jnl', 'jns', 'job', 'jod', 'jog', 'jor', 'jos', 'jow', 'jpa', 'jpr', 'jpx', 'jqr', 'jra', 'jrb', 'jrr', 'jrt', 'jru', 'jsl', 'jua', 'jub', 'juc', 'jud', 'juh', 'jui', 'juk', 'jul', 'jum', 'jun', 'juo', 'jup', 'jur', 'jus', 'jut', 'juu', 'juw', 'juy', 'jvd', 'jvn', 'jwi', 'jya', 'jye', 'jyy', 'kaa', 'kab', 'kac', 'kad', 'kae', 'kaf', 'kag', 'kah', 'kai', 'kaj', 'kak', 'kam', 'kao', 'kap', 'kaq', 'kar', 'kav', 'kaw', 'kax', 'kay', 'kba', 'kbb', 'kbc', 'kbd', 'kbe', 'kbf', 'kbg', 'kbh', 'kbi', 'kbj', 'kbk', 'kbl', 'kbm', 'kbn', 'kbo', 'kbp', 'kbq', 'kbr', 'kbs', 'kbt', 'kbu', 'kbv', 'kbw', 'kbx', 'kby', 'kbz', 'kca', 'kcb', 'kcc', 'kcd', 'kce', 'kcf', 'kcg', 'kch', 'kci', 'kcj', 'kck', 'kcl', 'kcm', 'kcn', 'kco', 'kcp', 'kcq', 'kcr', 'kcs', 'kct', 'kcu', 'kcv', 'kcw', 'kcx', 'kcy', 'kcz', 'kda', 'kdc', 'kdd', 'kde', 'kdf', 'kdg', 'kdh', 'kdi', 'kdj', 'kdk', 'kdl', 'kdm', 'kdn', 'kdo', 'kdp', 'kdq', 'kdr', 'kdt', 'kdu', 'kdv', 'kdw', 'kdx', 'kdy', 'kdz', 'kea', 'keb', 'kec', 'ked', 'kee', 'kef', 'keg', 'keh', 'kei', 'kej', 'kek', 'kel', 'kem', 'ken', 'keo', 'kep', 'keq', 'ker', 'kes', 'ket', 'keu', 'kev', 'kew', 'kex', 'key', 'kez', 'kfa', 'kfb', 'kfc', 'kfd', 'kfe', 'kff', 'kfg', 'kfh', 'kfi', 'kfj', 'kfk', 'kfl', 'kfm', 'kfn', 'kfo', 'kfp', 'kfq', 'kfr', 'kfs', 'kft', 'kfu', 'kfv', 'kfw', 'kfx', 'kfy', 'kfz', 'kga', 'kgb', 'kgc', 'kgd', 'kge', 'kgf', 'kgg', 'kgh', 'kgi', 'kgj', 'kgk', 'kgl', 'kgm', 'kgn', 'kgo', 'kgp', 'kgq', 'kgr', 'kgs', 'kgt', 'kgu', 'kgv', 'kgw', 'kgx', 'kgy', 'kha', 'khb', 'khc', 'khd', 'khe', 'khf', 'khg', 'khh', 'khi', 'khj', 'khk', 'khl', 'khn', 'kho', 'khp', 'khq', 'khr', 'khs', 'kht', 'khu', 'khv', 'khw', 'khx', 'khy', 'khz', 'kia', 'kib', 'kic', 'kid', 'kie', 'kif', 'kig', 'kih', 'kii', 'kij', 'kil', 'kim', 'kio', 'kip', 'kiq', 'kis', 'kit', 'kiu', 'kiv', 'kiw', 'kix', 'kiy', 'kiz', 'kja', 'kjb', 'kjc', 'kjd', 'kje', 'kjf', 'kjg', 'kjh', 'kji', 'kjj', 'kjk', 'kjl', 'kjm', 'kjn', 'kjo', 'kjp', 'kjq', 'kjr', 'kjs', 'kjt', 'kju', 'kjv', 'kjx', 'kjy', 'kjz', 'kka', 'kkb', 'kkc', 'kkd', 'kke', 'kkf', 'kkg', 'kkh', 'kki', 'kkj', 'kkk', 'kkl', 'kkm', 'kkn', 'kko', 'kkp', 'kkq', 'kkr', 'kks', 'kkt', 'kku', 'kkv', 'kkw', 'kkx', 'kky', 'kkz', 'kla', 'klb', 'klc', 'kld', 'kle', 'klf', 'klg', 'klh', 'kli', 'klj', 'klk', 'kll', 'klm', 'kln', 'klo', 'klp', 'klq', 'klr', 'kls', 'klt', 'klu', 'klv', 'klw', 'klx', 'kly', 'klz', 'kma', 'kmb', 'kmc', 'kmd', 'kme', 'kmf', 'kmg', 'kmh', 'kmi', 'kmj', 'kmk', 'kml', 'kmm', 'kmn', 'kmo', 'kmp', 'kmq', 'kmr', 'kms', 'kmt', 'kmu', 'kmv', 'kmw', 'kmx', 'kmy', 'kmz', 'kna', 'knb', 'knc', 'knd', 'kne', 'knf', 'kng', 'kni', 'knj', 'knk', 'knl', 'knm', 'knn', 'kno', 'knp', 'knq', 'knr', 'kns', 'knt', 'knu', 'knv', 'knw', 'knx', 'kny', 'knz', 'koa', 'koc', 'kod', 'koe', 'kof', 'kog', 'koh', 'koi', 'koj', 'kok', 'kol', 'koo', 'kop', 'koq', 'kos', 'kot', 'kou', 'kov', 'kow', 'kox', 'koy', 'koz', 'kpa', 'kpb', 'kpc', 'kpd', 'kpe', 'kpf', 'kpg', 'kph', 'kpi', 'kpj', 'kpk', 'kpl', 'kpm', 'kpn', 'kpo', 'kpp', 'kpq', 'kpr', 'kps', 'kpt', 'kpu', 'kpv', 'kpw', 'kpx', 'kpy', 'kpz', 'kqa', 'kqb', 'kqc', 'kqd', 'kqe', 'kqf', 'kqg', 'kqh', 'kqi', 'kqj', 'kqk', 'kql', 'kqm', 'kqn', 'kqo', 'kqp', 'kqq', 'kqr', 'kqs', 'kqt', 'kqu', 'kqv', 'kqw', 'kqx', 'kqy', 'kqz', 'kra', 'krb', 'krc', 'krd', 'kre', 'krf', 'krh', 'kri', 'krj', 'krk', 'krl', 'krm', 'krn', 'kro', 'krp', 'krr', 'krs', 'krt', 'kru', 'krv', 'krw', 'krx', 'kry', 'krz', 'ksa', 'ksb', 'ksc', 'ksd', 'kse', 'ksf', 'ksg', 'ksh', 'ksi', 'ksj', 'ksk', 'ksl', 'ksm', 'ksn', 'kso', 'ksp', 'ksq', 'ksr', 'kss', 'kst', 'ksu', 'ksv', 'ksw', 'ksx', 'ksy', 'ksz', 'kta', 'ktb', 'ktc', 'ktd', 'kte', 'ktf', 'ktg', 'kth', 'kti', 'ktj', 'ktk', 'ktl', 'ktm', 'ktn', 'kto', 'ktp', 'ktq', 'ktr', 'kts', 'ktt', 'ktu', 'ktv', 'ktw', 'ktx', 'kty', 'ktz', 'kub', 'kuc', 'kud', 'kue', 'kuf', 'kug', 'kuh', 'kui', 'kuj', 'kuk', 'kul', 'kum', 'kun', 'kuo', 'kup', 'kuq', 'kus', 'kut', 'kuu', 'kuv', 'kuw', 'kux', 'kuy', 'kuz', 'kva', 'kvb', 'kvc', 'kvd', 'kve', 'kvf', 'kvg', 'kvh', 'kvi', 'kvj', 'kvk', 'kvl', 'kvm', 'kvn', 'kvo', 'kvp', 'kvq', 'kvr', 'kvs', 'kvt', 'kvu', 'kvv', 'kvw', 'kvx', 'kvy', 'kvz', 'kwa', 'kwb', 'kwc', 'kwd', 'kwe', 'kwf', 'kwg', 'kwh', 'kwi', 'kwj', 'kwk', 'kwl', 'kwm', 'kwn', 'kwo', 'kwp', 'kwq', 'kwr', 'kws', 'kwt', 'kwu', 'kwv', 'kww', 'kwx', 'kwy', 'kwz', 'kxa', 'kxb', 'kxc', 'kxd', 'kxe', 'kxf', 'kxh', 'kxi', 'kxj', 'kxk', 'kxl', 'kxm', 'kxn', 'kxo', 'kxp', 'kxq', 'kxr', 'kxs', 'kxt', 'kxu', 'kxv', 'kxw', 'kxx', 'kxy', 'kxz', 'kya', 'kyb', 'kyc', 'kyd', 'kye', 'kyf', 'kyg', 'kyh', 'kyi', 'kyj', 'kyk', 'kyl', 'kym', 'kyn', 'kyo', 'kyp', 'kyq', 'kyr', 'kys', 'kyt', 'kyu', 'kyv', 'kyw', 'kyx', 'kyy', 'kyz', 'kza', 'kzb', 'kzc', 'kzd', 'kze', 'kzf', 'kzg', 'kzh', 'kzi', 'kzj', 'kzk', 'kzl', 'kzm', 'kzn', 'kzo', 'kzp', 'kzq', 'kzr', 'kzs', 'kzt', 'kzu', 'kzv', 'kzw', 'kzx', 'kzy', 'kzz', 'laa', 'lab', 'lac', 'lad', 'lae', 'laf', 'lag', 'lah', 'lai', 'laj', 'lak', 'lal', 'lam', 'lan', 'lap', 'laq', 'lar', 'las', 'lau', 'law', 'lax', 'lay', 'laz', 'lba', 'lbb', 'lbc', 'lbe', 'lbf', 'lbg', 'lbi', 'lbj', 'lbk', 'lbl', 'lbm', 'lbn', 'lbo', 'lbq', 'lbr', 'lbs', 'lbt', 'lbu', 'lbv', 'lbw', 'lbx', 'lby', 'lbz', 'lcc', 'lcd', 'lce', 'lcf', 'lch', 'lcl', 'lcm', 'lcp', 'lcq', 'lcs', 'lda', 'ldb', 'ldd', 'ldg', 'ldh', 'ldi', 'ldj', 'ldk', 'ldl', 'ldm', 'ldn', 'ldo', 'ldp', 'ldq', 'lea', 'leb', 'lec', 'led', 'lee', 'lef', 'leg', 'leh', 'lei', 'lej', 'lek', 'lel', 'lem', 'len', 'leo', 'lep', 'leq', 'ler', 'les', 'let', 'leu', 'lev', 'lew', 'lex', 'ley', 'lez', 'lfa', 'lfn', 'lga', 'lgb', 'lgg', 'lgh', 'lgi', 'lgk', 'lgl', 'lgm', 'lgn', 'lgq', 'lgr', 'lgt', 'lgu', 'lgz', 'lha', 'lhh', 'lhi', 'lhl', 'lhm', 'lhn', 'lhp', 'lhs', 'lht', 'lhu', 'lia', 'lib', 'lic', 'lid', 'lie', 'lif', 'lig', 'lih', 'lii', 'lij', 'lik', 'lil', 'lio', 'lip', 'liq', 'lir', 'lis', 'liu', 'liv', 'liw', 'lix', 'liy', 'liz', 'lja', 'lje', 'lji', 'ljl', 'ljp', 'ljw', 'ljx', 'lka', 'lkb', 'lkc', 'lkd', 'lke', 'lkh', 'lki', 'lkj', 'lkl', 'lkm', 'lkn', 'lko', 'lkr', 'lks', 'lkt', 'lku', 'lky', 'lla', 'llb', 'llc', 'lld', 'lle', 'llf', 'llg', 'llh', 'lli', 'llj', 'llk', 'lll', 'llm', 'lln', 'llo', 'llp', 'llq', 'lls', 'llu', 'llx', 'lma', 'lmb', 'lmc', 'lmd', 'lme', 'lmf', 'lmg', 'lmh', 'lmi', 'lmj', 'lmk', 'lml', 'lmm', 'lmn', 'lmo', 'lmp', 'lmq', 'lmr', 'lmu', 'lmv', 'lmw', 'lmx', 'lmy', 'lmz', 'lna', 'lnb', 'lnd', 'lng', 'lnh', 'lni', 'lnj', 'lnl', 'lnm', 'lnn', 'lno', 'lns', 'lnu', 'lnw', 'lnz', 'loa', 'lob', 'loc', 'loe', 'lof', 'log', 'loh', 'loi', 'loj', 'lok', 'lol', 'lom', 'lon', 'loo', 'lop', 'loq', 'lor', 'los', 'lot', 'lou', 'lov', 'low', 'lox', 'loy', 'loz', 'lpa', 'lpe', 'lpn', 'lpo', 'lpx', 'lra', 'lrc', 'lre', 'lrg', 'lri', 'lrk', 'lrl', 'lrm', 'lrn', 'lro', 'lrr', 'lrt', 'lrv', 'lrz', 'lsa', 'lsd', 'lse', 'lsg', 'lsh', 'lsi', 'lsl', 'lsm', 'lso', 'lsp', 'lsr', 'lss', 'lst', 'lsy', 'ltc', 'ltg', 'lth', 'lti', 'ltn', 'lto', 'lts', 'ltu', 'lua', 'luc', 'lud', 'lue', 'luf', 'lui', 'luj', 'luk', 'lul', 'lum', 'lun', 'luo', 'lup', 'luq', 'lur', 'lus', 'lut', 'luu', 'luv', 'luw', 'luy', 'luz', 'lva', 'lvk', 'lvs', 'lvu', 'lwa', 'lwe', 'lwg', 'lwh', 'lwl', 'lwm', 'lwo', 'lwt', 'lwu', 'lww', 'lya', 'lyg', 'lyn', 'lzh', 'lzl', 'lzn', 'lzz', 'maa', 'mab', 'mad', 'mae', 'maf', 'mag', 'mai', 'maj', 'mak', 'mam', 'man', 'map', 'maq', 'mas', 'mat', 'mau', 'mav', 'maw', 'max', 'maz', 'mba', 'mbb', 'mbc', 'mbd', 'mbe', 'mbf', 'mbh', 'mbi', 'mbj', 'mbk', 'mbl', 'mbm', 'mbn', 'mbo', 'mbp', 'mbq', 'mbr', 'mbs', 'mbt', 'mbu', 'mbv', 'mbw', 'mbx', 'mby', 'mbz', 'mca', 'mcb', 'mcc', 'mcd', 'mce', 'mcf', 'mcg', 'mch', 'mci', 'mcj', 'mck', 'mcl', 'mcm', 'mcn', 'mco', 'mcp', 'mcq', 'mcr', 'mcs', 'mct', 'mcu', 'mcv', 'mcw', 'mcx', 'mcy', 'mcz', 'mda', 'mdb', 'mdc', 'mdd', 'mde', 'mdf', 'mdg', 'mdh', 'mdi', 'mdj', 'mdk', 'mdl', 'mdm', 'mdn', 'mdp', 'mdq', 'mdr', 'mds', 'mdt', 'mdu', 'mdv', 'mdw', 'mdx', 'mdy', 'mdz', 'mea', 'meb', 'mec', 'med', 'mee', 'mef', 'meg', 'meh', 'mei', 'mej', 'mek', 'mel', 'mem', 'men', 'meo', 'mep', 'meq', 'mer', 'mes', 'met', 'meu', 'mev', 'mew', 'mey', 'mez', 'mfa', 'mfb', 'mfc', 'mfd', 'mfe', 'mff', 'mfg', 'mfh', 'mfi', 'mfj', 'mfk', 'mfl', 'mfm', 'mfn', 'mfo', 'mfp', 'mfq', 'mfr', 'mfs', 'mft', 'mfu', 'mfv', 'mfw', 'mfx', 'mfy', 'mfz', 'mga', 'mgb', 'mgc', 'mgd', 'mge', 'mgf', 'mgg', 'mgh', 'mgi', 'mgj', 'mgk', 'mgl', 'mgm', 'mgn', 'mgo', 'mgp', 'mgq', 'mgr', 'mgs', 'mgt', 'mgu', 'mgv', 'mgw', 'mgx', 'mgy', 'mgz', 'mha', 'mhb', 'mhc', 'mhd', 'mhe', 'mhf', 'mhg', 'mhh', 'mhi', 'mhj', 'mhk', 'mhl', 'mhm', 'mhn', 'mho', 'mhp', 'mhq', 'mhr', 'mhs', 'mht', 'mhu', 'mhw', 'mhx', 'mhy', 'mhz', 'mia', 'mib', 'mic', 'mid', 'mie', 'mif', 'mig', 'mih', 'mii', 'mij', 'mik', 'mil', 'mim', 'min', 'mio', 'mip', 'miq', 'mir', 'mis', 'mit', 'miu', 'miw', 'mix', 'miy', 'miz', 'mja', 'mjb', 'mjc', 'mjd', 'mje', 'mjg', 'mjh', 'mji', 'mjj', 'mjk', 'mjl', 'mjm', 'mjn', 'mjo', 'mjp', 'mjq', 'mjr', 'mjs', 'mjt', 'mju', 'mjv', 'mjw', 'mjx', 'mjy', 'mjz', 'mka', 'mkb', 'mkc', 'mke', 'mkf', 'mkg', 'mkh', 'mki', 'mkj', 'mkk', 'mkl', 'mkm', 'mkn', 'mko', 'mkp', 'mkq', 'mkr', 'mks', 'mkt', 'mku', 'mkv', 'mkw', 'mkx', 'mky', 'mkz', 'mla', 'mlb', 'mlc', 'mld', 'mle', 'mlf', 'mlh', 'mli', 'mlj', 'mlk', 'mll', 'mlm', 'mln', 'mlo', 'mlp', 'mlq', 'mlr', 'mls', 'mlu', 'mlv', 'mlw', 'mlx', 'mlz', 'mma', 'mmb', 'mmc', 'mmd', 'mme', 'mmf', 'mmg', 'mmh', 'mmi', 'mmj', 'mmk', 'mml', 'mmm', 'mmn', 'mmo', 'mmp', 'mmq', 'mmr', 'mmt', 'mmu', 'mmv', 'mmw', 'mmx', 'mmy', 'mmz', 'mna', 'mnb', 'mnc', 'mnd', 'mne', 'mnf', 'mng', 'mnh', 'mni', 'mnj', 'mnk', 'mnl', 'mnm', 'mnn', 'mno', 'mnp', 'mnq', 'mnr', 'mns', 'mnt', 'mnu', 'mnv', 'mnw', 'mnx', 'mny', 'mnz', 'moa', 'moc', 'mod', 'moe', 'mof', 'mog', 'moh', 'moi', 'moj', 'mok', 'mom', 'moo', 'mop', 'moq', 'mor', 'mos', 'mot', 'mou', 'mov', 'mow', 'mox', 'moy', 'moz', 'mpa', 'mpb', 'mpc', 'mpd', 'mpe', 'mpg', 'mph', 'mpi', 'mpj', 'mpk', 'mpl', 'mpm', 'mpn', 'mpo', 'mpp', 'mpq', 'mpr', 'mps', 'mpt', 'mpu', 'mpv', 'mpw', 'mpx', 'mpy', 'mpz', 'mqa', 'mqb', 'mqc', 'mqe', 'mqf', 'mqg', 'mqh', 'mqi', 'mqj', 'mqk', 'mql', 'mqm', 'mqn', 'mqo', 'mqp', 'mqq', 'mqr', 'mqs', 'mqt', 'mqu', 'mqv', 'mqw', 'mqx', 'mqy', 'mqz', 'mra', 'mrb', 'mrc', 'mrd', 'mre', 'mrf', 'mrg', 'mrh', 'mrj', 'mrk', 'mrl', 'mrm', 'mrn', 'mro', 'mrp', 'mrq', 'mrr', 'mrs', 'mrt', 'mru', 'mrv', 'mrw', 'mrx', 'mry', 'mrz', 'msb', 'msc', 'msd', 'mse', 'msf', 'msg', 'msh', 'msi', 'msj', 'msk', 'msl', 'msm', 'msn', 'mso', 'msp', 'msq', 'msr', 'mss', 'mst', 'msu', 'msv', 'msw', 'msx', 'msy', 'msz', 'mta', 'mtb', 'mtc', 'mtd', 'mte', 'mtf', 'mtg', 'mth', 'mti', 'mtj', 'mtk', 'mtl', 'mtm', 'mtn', 'mto', 'mtp', 'mtq', 'mtr', 'mts', 'mtt', 'mtu', 'mtv', 'mtw', 'mtx', 'mty', 'mua', 'mub', 'muc', 'mud', 'mue', 'mug', 'muh', 'mui', 'muj', 'muk', 'mul', 'mum', 'mun', 'muo', 'mup', 'muq', 'mur', 'mus', 'mut', 'muu', 'muv', 'mux', 'muy', 'muz', 'mva', 'mvb', 'mvd', 'mve', 'mvf', 'mvg', 'mvh', 'mvi', 'mvk', 'mvl', 'mvm', 'mvn', 'mvo', 'mvp', 'mvq', 'mvr', 'mvs', 'mvt', 'mvu', 'mvv', 'mvw', 'mvx', 'mvy', 'mvz', 'mwa', 'mwb', 'mwc', 'mwd', 'mwe', 'mwf', 'mwg', 'mwh', 'mwi', 'mwj', 'mwk', 'mwl', 'mwm', 'mwn', 'mwo', 'mwp', 'mwq', 'mwr', 'mws', 'mwt', 'mwu', 'mwv', 'mww', 'mwx', 'mwy', 'mwz', 'mxa', 'mxb', 'mxc', 'mxd', 'mxe', 'mxf', 'mxg', 'mxh', 'mxi', 'mxj', 'mxk', 'mxl', 'mxm', 'mxn', 'mxo', 'mxp', 'mxq', 'mxr', 'mxs', 'mxt', 'mxu', 'mxv', 'mxw', 'mxx', 'mxy', 'mxz', 'myb', 'myc', 'myd', 'mye', 'myf', 'myg', 'myh', 'myi', 'myj', 'myk', 'myl', 'mym', 'myn', 'myo', 'myp', 'myq', 'myr', 'mys', 'myt', 'myu', 'myv', 'myw', 'myx', 'myy', 'myz', 'mza', 'mzb', 'mzc', 'mzd', 'mze', 'mzg', 'mzh', 'mzi', 'mzj', 'mzk', 'mzl', 'mzm', 'mzn', 'mzo', 'mzp', 'mzq', 'mzr', 'mzs', 'mzt', 'mzu', 'mzv', 'mzw', 'mzx', 'mzy', 'mzz', 'naa', 'nab', 'nac', 'nad', 'nae', 'naf', 'nag', 'nah', 'nai', 'naj', 'nak', 'nal', 'nam', 'nan', 'nao', 'nap', 'naq', 'nar', 'nas', 'nat', 'naw', 'nax', 'nay', 'naz', 'nba', 'nbb', 'nbc', 'nbd', 'nbe', 'nbf', 'nbg', 'nbh', 'nbi', 'nbj', 'nbk', 'nbm', 'nbn', 'nbo', 'nbp', 'nbq', 'nbr', 'nbs', 'nbt', 'nbu', 'nbv', 'nbw', 'nbx', 'nby', 'nca', 'ncb', 'ncc', 'ncd', 'nce', 'ncf', 'ncg', 'nch', 'nci', 'ncj', 'nck', 'ncl', 'ncm', 'ncn', 'nco', 'ncp', 'ncq', 'ncr', 'ncs', 'nct', 'ncu', 'ncx', 'ncz', 'nda', 'ndb', 'ndc', 'ndd', 'ndf', 'ndg', 'ndh', 'ndi', 'ndj', 'ndk', 'ndl', 'ndm', 'ndn', 'ndp', 'ndq', 'ndr', 'nds', 'ndt', 'ndu', 'ndv', 'ndw', 'ndx', 'ndy', 'ndz', 'nea', 'neb', 'nec', 'ned', 'nee', 'nef', 'neg', 'neh', 'nei', 'nej', 'nek', 'nem', 'nen', 'neo', 'neq', 'ner', 'nes', 'net', 'neu', 'nev', 'new', 'nex', 'ney', 'nez', 'nfa', 'nfd', 'nfl', 'nfr', 'nfu', 'nga', 'ngb', 'ngc', 'ngd', 'nge', 'ngf', 'ngg', 'ngh', 'ngi', 'ngj', 'ngk', 'ngl', 'ngm', 'ngn', 'ngo', 'ngp', 'ngq', 'ngr', 'ngs', 'ngt', 'ngu', 'ngv', 'ngw', 'ngx', 'ngy', 'ngz', 'nha', 'nhb', 'nhc', 'nhd', 'nhe', 'nhf', 'nhg', 'nhh', 'nhi', 'nhk', 'nhm', 'nhn', 'nho', 'nhp', 'nhq', 'nhr', 'nht', 'nhu', 'nhv', 'nhw', 'nhx', 'nhy', 'nhz', 'nia', 'nib', 'nic', 'nid', 'nie', 'nif', 'nig', 'nih', 'nii', 'nij', 'nik', 'nil', 'nim', 'nin', 'nio', 'niq', 'nir', 'nis', 'nit', 'niu', 'niv', 'niw', 'nix', 'niy', 'niz', 'nja', 'njb', 'njd', 'njh', 'nji', 'njj', 'njl', 'njm', 'njn', 'njo', 'njr', 'njs', 'njt', 'nju', 'njx', 'njy', 'njz', 'nka', 'nkb', 'nkc', 'nkd', 'nke', 'nkf', 'nkg', 'nkh', 'nki', 'nkj', 'nkk', 'nkm', 'nkn', 'nko', 'nkp', 'nkq', 'nkr', 'nks', 'nkt', 'nku', 'nkv', 'nkw', 'nkx', 'nkz', 'nla', 'nlc', 'nle', 'nlg', 'nli', 'nlj', 'nlk', 'nll', 'nln', 'nlo', 'nlq', 'nlr', 'nlu', 'nlv', 'nlw', 'nlx', 'nly', 'nlz', 'nma', 'nmb', 'nmc', 'nmd', 'nme', 'nmf', 'nmg', 'nmh', 'nmi', 'nmj', 'nmk', 'nml', 'nmm', 'nmn', 'nmo', 'nmp', 'nmq', 'nmr', 'nms', 'nmt', 'nmu', 'nmv', 'nmw', 'nmx', 'nmy', 'nmz', 'nna', 'nnb', 'nnc', 'nnd', 'nne', 'nnf', 'nng', 'nnh', 'nni', 'nnj', 'nnk', 'nnl', 'nnm', 'nnn', 'nnp', 'nnq', 'nnr', 'nns', 'nnt', 'nnu', 'nnv', 'nnw', 'nnx', 'nny', 'nnz', 'noa', 'noc', 'nod', 'noe', 'nof', 'nog', 'noh', 'noi', 'noj', 'nok', 'nol', 'nom', 'non', 'noo', 'nop', 'noq', 'nos', 'not', 'nou', 'nov', 'now', 'noy', 'noz', 'npa', 'npb', 'npg', 'nph', 'npi', 'npl', 'npn', 'npo', 'nps', 'npu', 'npx', 'npy', 'nqg', 'nqk', 'nql', 'nqm', 'nqn', 'nqo', 'nqq', 'nqy', 'nra', 'nrb', 'nrc', 'nre', 'nrf', 'nrg', 'nri', 'nrk', 'nrl', 'nrm', 'nrn', 'nrp', 'nrr', 'nrt', 'nru', 'nrx', 'nrz', 'nsa', 'nsc', 'nsd', 'nse', 'nsf', 'nsg', 'nsh', 'nsi', 'nsk', 'nsl', 'nsm', 'nsn', 'nso', 'nsp', 'nsq', 'nsr', 'nss', 'nst', 'nsu', 'nsv', 'nsw', 'nsx', 'nsy', 'nsz', 'ntd', 'nte', 'ntg', 'nti', 'ntj', 'ntk', 'ntm', 'nto', 'ntp', 'ntr', 'nts', 'ntu', 'ntw', 'ntx', 'nty', 'ntz', 'nua', 'nub', 'nuc', 'nud', 'nue', 'nuf', 'nug', 'nuh', 'nui', 'nuj', 'nuk', 'nul', 'num', 'nun', 'nuo', 'nup', 'nuq', 'nur', 'nus', 'nut', 'nuu', 'nuv', 'nuw', 'nux', 'nuy', 'nuz', 'nvh', 'nvm', 'nvo', 'nwa', 'nwb', 'nwc', 'nwe', 'nwg', 'nwi', 'nwm', 'nwo', 'nwr', 'nwx', 'nwy', 'nxa', 'nxd', 'nxe', 'nxg', 'nxi', 'nxk', 'nxl', 'nxm', 'nxn', 'nxo', 'nxq', 'nxr', 'nxu', 'nxx', 'nyb', 'nyc', 'nyd', 'nye', 'nyf', 'nyg', 'nyh', 'nyi', 'nyj', 'nyk', 'nyl', 'nym', 'nyn', 'nyo', 'nyp', 'nyq', 'nyr', 'nys', 'nyt', 'nyu', 'nyv', 'nyw', 'nyx', 'nyy', 'nza', 'nzb', 'nzi', 'nzk', 'nzm', 'nzs', 'nzu', 'nzy', 'nzz', 'oaa', 'oac', 'oar', 'oav', 'obi', 'obk', 'obl', 'obm', 'obo', 'obr', 'obt', 'obu', 'oca', 'och', 'oco', 'ocu', 'oda', 'odk', 'odt', 'odu', 'ofo', 'ofs', 'ofu', 'ogb', 'ogc', 'oge', 'ogg', 'ogo', 'ogu', 'oht', 'ohu', 'oia', 'oin', 'ojb', 'ojc', 'ojg', 'ojp', 'ojs', 'ojv', 'ojw', 'oka', 'okb', 'okd', 'oke', 'okg', 'okh', 'oki', 'okj', 'okk', 'okl', 'okm', 'okn', 'oko', 'okr', 'oks', 'oku', 'okv', 'okx', 'ola', 'old', 'ole', 'olk', 'olm', 'olo', 'olr', 'olt', 'olu', 'oma', 'omb', 'omc', 'ome', 'omg', 'omi', 'omk', 'oml', 'omn', 'omo', 'omp', 'omq', 'omr', 'omt', 'omu', 'omv', 'omw', 'omx', 'ona', 'onb', 'one', 'ong', 'oni', 'onj', 'onk', 'onn', 'ono', 'onp', 'onr', 'ons', 'ont', 'onu', 'onw', 'onx', 'ood', 'oog', 'oon', 'oor', 'oos', 'opa', 'opk', 'opm', 'opo', 'opt', 'opy', 'ora', 'orc', 'ore', 'org', 'orh', 'orn', 'oro', 'orr', 'ors', 'ort', 'oru', 'orv', 'orw', 'orx', 'ory', 'orz', 'osa', 'osc', 'osi', 'oso', 'osp', 'ost', 'osu', 'osx', 'ota', 'otb', 'otd', 'ote', 'oti', 'otk', 'otl', 'otm', 'otn', 'oto', 'otq', 'otr', 'ots', 'ott', 'otu', 'otw', 'otx', 'oty', 'otz', 'oua', 'oub', 'oue', 'oui', 'oum', 'oun', 'ovd', 'owi', 'owl', 'oyb', 'oyd', 'oym', 'oyy', 'ozm', 'paa', 'pab', 'pac', 'pad', 'pae', 'paf', 'pag', 'pah', 'pai', 'pak', 'pal', 'pam', 'pao', 'pap', 'paq', 'par', 'pas', 'pat', 'pau', 'pav', 'paw', 'pax', 'pay', 'paz', 'pbb', 'pbc', 'pbe', 'pbf', 'pbg', 'pbh', 'pbi', 'pbl', 'pbn', 'pbo', 'pbp', 'pbr', 'pbs', 'pbt', 'pbu', 'pbv', 'pby', 'pbz', 'pca', 'pcb', 'pcc', 'pcd', 'pce', 'pcf', 'pcg', 'pch', 'pci', 'pcj', 'pck', 'pcl', 'pcm', 'pcn', 'pcp', 'pcr', 'pcw', 'pda', 'pdc', 'pdi', 'pdn', 'pdo', 'pdt', 'pdu', 'pea', 'peb', 'ped', 'pee', 'pef', 'peg', 'peh', 'pei', 'pej', 'pek', 'pel', 'pem', 'peo', 'pep', 'peq', 'pes', 'pev', 'pex', 'pey', 'pez', 'pfa', 'pfe', 'pfl', 'pga', 'pgd', 'pgg', 'pgi', 'pgk', 'pgl', 'pgn', 'pgs', 'pgu', 'pgy', 'pgz', 'pha', 'phd', 'phg', 'phh', 'phi', 'phk', 'phl', 'phm', 'phn', 'pho', 'phq', 'phr', 'pht', 'phu', 'phv', 'phw', 'pia', 'pib', 'pic', 'pid', 'pie', 'pif', 'pig', 'pih', 'pii', 'pij', 'pil', 'pim', 'pin', 'pio', 'pip', 'pir', 'pis', 'pit', 'piu', 'piv', 'piw', 'pix', 'piy', 'piz', 'pjt', 'pka', 'pkb', 'pkc', 'pkg', 'pkh', 'pkn', 'pko', 'pkp', 'pkr', 'pks', 'pkt', 'pku', 'pla', 'plb', 'plc', 'pld', 'ple', 'plf', 'plg', 'plh', 'plj', 'plk', 'pll', 'pln', 'plo', 'plp', 'plq', 'plr', 'pls', 'plt', 'plu', 'plv', 'plw', 'ply', 'plz', 'pma', 'pmb', 'pmc', 'pmd', 'pme', 'pmf', 'pmh', 'pmi', 'pmj', 'pmk', 'pml', 'pmm', 'pmn', 'pmo', 'pmq', 'pmr', 'pms', 'pmt', 'pmu', 'pmw', 'pmx', 'pmy', 'pmz', 'pna', 'pnb', 'pnc', 'pne', 'png', 'pnh', 'pni', 'pnj', 'pnk', 'pnl', 'pnm', 'pnn', 'pno', 'pnp', 'pnq', 'pnr', 'pns', 'pnt', 'pnu', 'pnv', 'pnw', 'pnx', 'pny', 'pnz', 'poc', 'pod', 'poe', 'pof', 'pog', 'poh', 'poi', 'pok', 'pom', 'pon', 'poo', 'pop', 'poq', 'pos', 'pot', 'pov', 'pow', 'pox', 'poy', 'poz', 'ppa', 'ppe', 'ppi', 'ppk', 'ppl', 'ppm', 'ppn', 'ppo', 'ppp', 'ppq', 'ppr', 'pps', 'ppt', 'ppu', 'pqa', 'pqe', 'pqm', 'pqw', 'pra', 'prb', 'prc', 'prd', 'pre', 'prf', 'prg', 'prh', 'pri', 'prk', 'prl', 'prm', 'prn', 'pro', 'prp', 'prq', 'prr', 'prs', 'prt', 'pru', 'prw', 'prx', 'pry', 'prz', 'psa', 'psc', 'psd', 'pse', 'psg', 'psh', 'psi', 'psl', 'psm', 'psn', 'pso', 'psp', 'psq', 'psr', 'pss', 'pst', 'psu', 'psw', 'psy', 'pta', 'pth', 'pti', 'ptn', 'pto', 'ptp', 'ptq', 'ptr', 'ptt', 'ptu', 'ptv', 'ptw', 'pty', 'pua', 'pub', 'puc', 'pud', 'pue', 'puf', 'pug', 'pui', 'puj', 'puk', 'pum', 'puo', 'pup', 'puq', 'pur', 'put', 'puu', 'puw', 'pux', 'puy', 'puz', 'pwa', 'pwb', 'pwg', 'pwi', 'pwm', 'pwn', 'pwo', 'pwr', 'pww', 'pxm', 'pye', 'pym', 'pyn', 'pys', 'pyu', 'pyx', 'pyy', 'pzn', 'qaa..qtz', 'qua', 'qub', 'quc', 'qud', 'quf', 'qug', 'quh', 'qui', 'quk', 'qul', 'qum', 'qun', 'qup', 'quq', 'qur', 'qus', 'quv', 'quw', 'qux', 'quy', 'quz', 'qva', 'qvc', 'qve', 'qvh', 'qvi', 'qvj', 'qvl', 'qvm', 'qvn', 'qvo', 'qvp', 'qvs', 'qvw', 'qvy', 'qvz', 'qwa', 'qwc', 'qwe', 'qwh', 'qwm', 'qws', 'qwt', 'qxa', 'qxc', 'qxh', 'qxl', 'qxn', 'qxo', 'qxp', 'qxq', 'qxr', 'qxs', 'qxt', 'qxu', 'qxw', 'qya', 'qyp', 'raa', 'rab', 'rac', 'rad', 'raf', 'rag', 'rah', 'rai', 'raj', 'rak', 'ral', 'ram', 'ran', 'rao', 'rap', 'raq', 'rar', 'ras', 'rat', 'rau', 'rav', 'raw', 'rax', 'ray', 'raz', 'rbb', 'rbk', 'rbl', 'rbp', 'rcf', 'rdb', 'rea', 'reb', 'ree', 'reg', 'rei', 'rej', 'rel', 'rem', 'ren', 'rer', 'res', 'ret', 'rey', 'rga', 'rge', 'rgk', 'rgn', 'rgr', 'rgs', 'rgu', 'rhg', 'rhp', 'ria', 'rie', 'rif', 'ril', 'rim', 'rin', 'rir', 'rit', 'riu', 'rjg', 'rji', 'rjs', 'rka', 'rkb', 'rkh', 'rki', 'rkm', 'rkt', 'rkw', 'rma', 'rmb', 'rmc', 'rmd', 'rme', 'rmf', 'rmg', 'rmh', 'rmi', 'rmk', 'rml', 'rmm', 'rmn', 'rmo', 'rmp', 'rmq', 'rmr', 'rms', 'rmt', 'rmu', 'rmv', 'rmw', 'rmx', 'rmy', 'rmz', 'rna', 'rnd', 'rng', 'rnl', 'rnn', 'rnp', 'rnr', 'rnw', 'roa', 'rob', 'roc', 'rod', 'roe', 'rof', 'rog', 'rol', 'rom', 'roo', 'rop', 'ror', 'rou', 'row', 'rpn', 'rpt', 'rri', 'rro', 'rrt', 'rsb', 'rsi', 'rsl', 'rsm', 'rtc', 'rth', 'rtm', 'rts', 'rtw', 'rub', 'ruc', 'rue', 'ruf', 'rug', 'ruh', 'rui', 'ruk', 'ruo', 'rup', 'ruq', 'rut', 'ruu', 'ruy', 'ruz', 'rwa', 'rwk', 'rwm', 'rwo', 'rwr', 'rxd', 'rxw', 'ryn', 'rys', 'ryu', 'rzh', 'saa', 'sab', 'sac', 'sad', 'sae', 'saf', 'sah', 'sai', 'saj', 'sak', 'sal', 'sam', 'sao', 'sap', 'saq', 'sar', 'sas', 'sat', 'sau', 'sav', 'saw', 'sax', 'say', 'saz', 'sba', 'sbb', 'sbc', 'sbd', 'sbe', 'sbf', 'sbg', 'sbh', 'sbi', 'sbj', 'sbk', 'sbl', 'sbm', 'sbn', 'sbo', 'sbp', 'sbq', 'sbr', 'sbs', 'sbt', 'sbu', 'sbv', 'sbw', 'sbx', 'sby', 'sbz', 'sca', 'scb', 'sce', 'scf', 'scg', 'sch', 'sci', 'sck', 'scl', 'scn', 'sco', 'scp', 'scq', 'scs', 'sct', 'scu', 'scv', 'scw', 'scx', 'sda', 'sdb', 'sdc', 'sde', 'sdf', 'sdg', 'sdh', 'sdj', 'sdk', 'sdl', 'sdm', 'sdn', 'sdo', 'sdp', 'sdr', 'sds', 'sdt', 'sdu', 'sdv', 'sdx', 'sdz', 'sea', 'seb', 'sec', 'sed', 'see', 'sef', 'seg', 'seh', 'sei', 'sej', 'sek', 'sel', 'sem', 'sen', 'seo', 'sep', 'seq', 'ser', 'ses', 'set', 'seu', 'sev', 'sew', 'sey', 'sez', 'sfb', 'sfe', 'sfm', 'sfs', 'sfw', 'sga', 'sgb', 'sgc', 'sgd', 'sge', 'sgg', 'sgh', 'sgi', 'sgj', 'sgk', 'sgl', 'sgm', 'sgn', 'sgo', 'sgp', 'sgr', 'sgs', 'sgt', 'sgu', 'sgw', 'sgx', 'sgy', 'sgz', 'sha', 'shb', 'shc', 'shd', 'she', 'shg', 'shh', 'shi', 'shj', 'shk', 'shl', 'shm', 'shn', 'sho', 'shp', 'shq', 'shr', 'shs', 'sht', 'shu', 'shv', 'shw', 'shx', 'shy', 'shz', 'sia', 'sib', 'sid', 'sie', 'sif', 'sig', 'sih', 'sii', 'sij', 'sik', 'sil', 'sim', 'sio', 'sip', 'siq', 'sir', 'sis', 'sit', 'siu', 'siv', 'siw', 'six', 'siy', 'siz', 'sja', 'sjb', 'sjd', 'sje', 'sjg', 'sjk', 'sjl', 'sjm', 'sjn', 'sjo', 'sjp', 'sjr', 'sjs', 'sjt', 'sju', 'sjw', 'ska', 'skb', 'skc', 'skd', 'ske', 'skf', 'skg', 'skh', 'ski', 'skj', 'skk', 'skm', 'skn', 'sko', 'skp', 'skq', 'skr', 'sks', 'skt', 'sku', 'skv', 'skw', 'skx', 'sky', 'skz', 'sla', 'slc', 'sld', 'sle', 'slf', 'slg', 'slh', 'sli', 'slj', 'sll', 'slm', 'sln', 'slp', 'slq', 'slr', 'sls', 'slt', 'slu', 'slw', 'slx', 'sly', 'slz', 'sma', 'smb', 'smc', 'smd', 'smf', 'smg', 'smh', 'smi', 'smj', 'smk', 'sml', 'smm', 'smn', 'smp', 'smq', 'smr', 'sms', 'smt', 'smu', 'smv', 'smw', 'smx', 'smy', 'smz', 'snb', 'snc', 'sne', 'snf', 'sng', 'snh', 'sni', 'snj', 'snk', 'snl', 'snm', 'snn', 'sno', 'snp', 'snq', 'snr', 'sns', 'snu', 'snv', 'snw', 'snx', 'sny', 'snz', 'soa', 'sob', 'soc', 'sod', 'soe', 'sog', 'soh', 'soi', 'soj', 'sok', 'sol', 'son', 'soo', 'sop', 'soq', 'sor', 'sos', 'sou', 'sov', 'sow', 'sox', 'soy', 'soz', 'spb', 'spc', 'spd', 'spe', 'spg', 'spi', 'spk', 'spl', 'spm', 'spn', 'spo', 'spp', 'spq', 'spr', 'sps', 'spt', 'spu', 'spv', 'spx', 'spy', 'sqa', 'sqh', 'sqj', 'sqk', 'sqm', 'sqn', 'sqo', 'sqq', 'sqr', 'sqs', 'sqt', 'squ', 'sra', 'srb', 'src', 'sre', 'srf', 'srg', 'srh', 'sri', 'srk', 'srl', 'srm', 'srn', 'sro', 'srq', 'srr', 'srs', 'srt', 'sru', 'srv', 'srw', 'srx', 'sry', 'srz', 'ssa', 'ssb', 'ssc', 'ssd', 'sse', 'ssf', 'ssg', 'ssh', 'ssi', 'ssj', 'ssk', 'ssl', 'ssm', 'ssn', 'sso', 'ssp', 'ssq', 'ssr', 'sss', 'sst', 'ssu', 'ssv', 'ssx', 'ssy', 'ssz', 'sta', 'stb', 'std', 'ste', 'stf', 'stg', 'sth', 'sti', 'stj', 'stk', 'stl', 'stm', 'stn', 'sto', 'stp', 'stq', 'str', 'sts', 'stt', 'stu', 'stv', 'stw', 'sty', 'sua', 'sub', 'suc', 'sue', 'sug', 'sui', 'suj', 'suk', 'sul', 'sum', 'suq', 'sur', 'sus', 'sut', 'suv', 'suw', 'sux', 'suy', 'suz', 'sva', 'svb', 'svc', 'sve', 'svk', 'svm', 'svr', 'svs', 'svx', 'swb', 'swc', 'swf', 'swg', 'swh', 'swi', 'swj', 'swk', 'swl', 'swm', 'swn', 'swo', 'swp', 'swq', 'swr', 'sws', 'swt', 'swu', 'swv', 'sww', 'swx', 'swy', 'sxb', 'sxc', 'sxe', 'sxg', 'sxk', 'sxl', 'sxm', 'sxn', 'sxo', 'sxr', 'sxs', 'sxu', 'sxw', 'sya', 'syb', 'syc', 'syd', 'syi', 'syk', 'syl', 'sym', 'syn', 'syo', 'syr', 'sys', 'syw', 'syx', 'syy', 'sza', 'szb', 'szc', 'szd', 'sze', 'szg', 'szl', 'szn', 'szp', 'szs', 'szv', 'szw', 'taa', 'tab', 'tac', 'tad', 'tae', 'taf', 'tag', 'tai', 'taj', 'tak', 'tal', 'tan', 'tao', 'tap', 'taq', 'tar', 'tas', 'tau', 'tav', 'taw', 'tax', 'tay', 'taz', 'tba', 'tbb', 'tbc', 'tbd', 'tbe', 'tbf', 'tbg', 'tbh', 'tbi', 'tbj', 'tbk', 'tbl', 'tbm', 'tbn', 'tbo', 'tbp', 'tbq', 'tbr', 'tbs', 'tbt', 'tbu', 'tbv', 'tbw', 'tbx', 'tby', 'tbz', 'tca', 'tcb', 'tcc', 'tcd', 'tce', 'tcf', 'tcg', 'tch', 'tci', 'tck', 'tcl', 'tcm', 'tcn', 'tco', 'tcp', 'tcq', 'tcs', 'tct', 'tcu', 'tcw', 'tcx', 'tcy', 'tcz', 'tda', 'tdb', 'tdc', 'tdd', 'tde', 'tdf', 'tdg', 'tdh', 'tdi', 'tdj', 'tdk', 'tdl', 'tdm', 'tdn', 'tdo', 'tdq', 'tdr', 'tds', 'tdt', 'tdu', 'tdv', 'tdx', 'tdy', 'tea', 'teb', 'tec', 'ted', 'tee', 'tef', 'teg', 'teh', 'tei', 'tek', 'tem', 'ten', 'teo', 'tep', 'teq', 'ter', 'tes', 'tet', 'teu', 'tev', 'tew', 'tex', 'tey', 'tfi', 'tfn', 'tfo', 'tfr', 'tft', 'tga', 'tgb', 'tgc', 'tgd', 'tge', 'tgf', 'tgg', 'tgh', 'tgi', 'tgj', 'tgn', 'tgo', 'tgp', 'tgq', 'tgr', 'tgs', 'tgt', 'tgu', 'tgv', 'tgw', 'tgx', 'tgy', 'tgz', 'thc', 'thd', 'the', 'thf', 'thh', 'thi', 'thk', 'thl', 'thm', 'thn', 'thp', 'thq', 'thr', 'ths', 'tht', 'thu', 'thv', 'thw', 'thx', 'thy', 'thz', 'tia', 'tic', 'tid', 'tie', 'tif', 'tig', 'tih', 'tii', 'tij', 'tik', 'til', 'tim', 'tin', 'tio', 'tip', 'tiq', 'tis', 'tit', 'tiu', 'tiv', 'tiw', 'tix', 'tiy', 'tiz', 'tja', 'tjg', 'tji', 'tjl', 'tjm', 'tjn', 'tjo', 'tjs', 'tju', 'tjw', 'tka', 'tkb', 'tkd', 'tke', 'tkf', 'tkg', 'tkk', 'tkl', 'tkm', 'tkn', 'tkp', 'tkq', 'tkr', 'tks', 'tkt', 'tku', 'tkv', 'tkw', 'tkx', 'tkz', 'tla', 'tlb', 'tlc', 'tld', 'tlf', 'tlg', 'tlh', 'tli', 'tlj', 'tlk', 'tll', 'tlm', 'tln', 'tlo', 'tlp', 'tlq', 'tlr', 'tls', 'tlt', 'tlu', 'tlv', 'tlw', 'tlx', 'tly', 'tma', 'tmb', 'tmc', 'tmd', 'tme', 'tmf', 'tmg', 'tmh', 'tmi', 'tmj', 'tmk', 'tml', 'tmm', 'tmn', 'tmo', 'tmp', 'tmq', 'tmr', 'tms', 'tmt', 'tmu', 'tmv', 'tmw', 'tmy', 'tmz', 'tna', 'tnb', 'tnc', 'tnd', 'tne', 'tnf', 'tng', 'tnh', 'tni', 'tnk', 'tnl', 'tnm', 'tnn', 'tno', 'tnp', 'tnq', 'tnr', 'tns', 'tnt', 'tnu', 'tnv', 'tnw', 'tnx', 'tny', 'tnz', 'tob', 'toc', 'tod', 'toe', 'tof', 'tog', 'toh', 'toi', 'toj', 'tol', 'tom', 'too', 'top', 'toq', 'tor', 'tos', 'tou', 'tov', 'tow', 'tox', 'toy', 'toz', 'tpa', 'tpc', 'tpe', 'tpf', 'tpg', 'tpi', 'tpj', 'tpk', 'tpl', 'tpm', 'tpn', 'tpo', 'tpp', 'tpq', 'tpr', 'tpt', 'tpu', 'tpv', 'tpw', 'tpx', 'tpy', 'tpz', 'tqb', 'tql', 'tqm', 'tqn', 'tqo', 'tqp', 'tqq', 'tqr', 'tqt', 'tqu', 'tqw', 'tra', 'trb', 'trc', 'trd', 'tre', 'trf', 'trg', 'trh', 'tri', 'trj', 'trk', 'trl', 'trm', 'trn', 'tro', 'trp', 'trq', 'trr', 'trs', 'trt', 'tru', 'trv', 'trw', 'trx', 'try', 'trz', 'tsa', 'tsb', 'tsc', 'tsd', 'tse', 'tsf', 'tsg', 'tsh', 'tsi', 'tsj', 'tsk', 'tsl', 'tsm', 'tsp', 'tsq', 'tsr', 'tss', 'tst', 'tsu', 'tsv', 'tsw', 'tsx', 'tsy', 'tsz', 'tta', 'ttb', 'ttc', 'ttd', 'tte', 'ttf', 'ttg', 'tth', 'tti', 'ttj', 'ttk', 'ttl', 'ttm', 'ttn', 'tto', 'ttp', 'ttq', 'ttr', 'tts', 'ttt', 'ttu', 'ttv', 'ttw', 'tty', 'ttz', 'tua', 'tub', 'tuc', 'tud', 'tue', 'tuf', 'tug', 'tuh', 'tui', 'tuj', 'tul', 'tum', 'tun', 'tuo', 'tup', 'tuq', 'tus', 'tut', 'tuu', 'tuv', 'tuw', 'tux', 'tuy', 'tuz', 'tva', 'tvd', 'tve', 'tvk', 'tvl', 'tvm', 'tvn', 'tvo', 'tvs', 'tvt', 'tvu', 'tvw', 'tvy', 'twa', 'twb', 'twc', 'twd', 'twe', 'twf', 'twg', 'twh', 'twl', 'twm', 'twn', 'two', 'twp', 'twq', 'twr', 'twt', 'twu', 'tww', 'twx', 'twy', 'txa', 'txb', 'txc', 'txe', 'txg', 'txh', 'txi', 'txj', 'txm', 'txn', 'txo', 'txq', 'txr', 'txs', 'txt', 'txu', 'txx', 'txy', 'tya', 'tye', 'tyh', 'tyi', 'tyj', 'tyl', 'tyn', 'typ', 'tyr', 'tys', 'tyt', 'tyu', 'tyv', 'tyx', 'tyz', 'tza', 'tzh', 'tzj', 'tzl', 'tzm', 'tzn', 'tzo', 'tzx', 'uam', 'uan', 'uar', 'uba', 'ubi', 'ubl', 'ubr', 'ubu', 'uby', 'uda', 'ude', 'udg', 'udi', 'udj', 'udl', 'udm', 'udu', 'ues', 'ufi', 'uga', 'ugb', 'uge', 'ugn', 'ugo', 'ugy', 'uha', 'uhn', 'uis', 'uiv', 'uji', 'uka', 'ukg', 'ukh', 'ukk', 'ukl', 'ukp', 'ukq', 'uks', 'uku', 'ukw', 'uky', 'ula', 'ulb', 'ulc', 'ule', 'ulf', 'uli', 'ulk', 'ull', 'ulm', 'uln', 'ulu', 'ulw', 'uma', 'umb', 'umc', 'umd', 'umg', 'umi', 'umm', 'umn', 'umo', 'ump', 'umr', 'ums', 'umu', 'una', 'und', 'une', 'ung', 'unk', 'unm', 'unn', 'unp', 'unr', 'unu', 'unx', 'unz', 'uok', 'upi', 'upv', 'ura', 'urb', 'urc', 'ure', 'urf', 'urg', 'urh', 'uri', 'urj', 'urk', 'url', 'urm', 'urn', 'uro', 'urp', 'urr', 'urt', 'uru', 'urv', 'urw', 'urx', 'ury', 'urz', 'usa', 'ush', 'usi', 'usk', 'usp', 'usu', 'uta', 'ute', 'utp', 'utr', 'utu', 'uum', 'uun', 'uur', 'uuu', 'uve', 'uvh', 'uvl', 'uwa', 'uya', 'uzn', 'uzs', 'vaa', 'vae', 'vaf', 'vag', 'vah', 'vai', 'vaj', 'val', 'vam', 'van', 'vao', 'vap', 'var', 'vas', 'vau', 'vav', 'vay', 'vbb', 'vbk', 'vec', 'ved', 'vel', 'vem', 'veo', 'vep', 'ver', 'vgr', 'vgt', 'vic', 'vid', 'vif', 'vig', 'vil', 'vin', 'vis', 'vit', 'viv', 'vka', 'vki', 'vkj', 'vkk', 'vkl', 'vkm', 'vko', 'vkp', 'vkt', 'vku', 'vlp', 'vls', 'vma', 'vmb', 'vmc', 'vmd', 'vme', 'vmf', 'vmg', 'vmh', 'vmi', 'vmj', 'vmk', 'vml', 'vmm', 'vmp', 'vmq', 'vmr', 'vms', 'vmu', 'vmv', 'vmw', 'vmx', 'vmy', 'vmz', 'vnk', 'vnm', 'vnp', 'vor', 'vot', 'vra', 'vro', 'vrs', 'vrt', 'vsi', 'vsl', 'vsv', 'vto', 'vum', 'vun', 'vut', 'vwa', 'waa', 'wab', 'wac', 'wad', 'wae', 'waf', 'wag', 'wah', 'wai', 'waj', 'wak', 'wal', 'wam', 'wan', 'wao', 'wap', 'waq', 'war', 'was', 'wat', 'wau', 'wav', 'waw', 'wax', 'way', 'waz', 'wba', 'wbb', 'wbe', 'wbf', 'wbh', 'wbi', 'wbj', 'wbk', 'wbl', 'wbm', 'wbp', 'wbq', 'wbr', 'wbs', 'wbt', 'wbv', 'wbw', 'wca', 'wci', 'wdd', 'wdg', 'wdj', 'wdk', 'wdu', 'wdy', 'wea', 'wec', 'wed', 'weg', 'weh', 'wei', 'wem', 'wen', 'weo', 'wep', 'wer', 'wes', 'wet', 'weu', 'wew', 'wfg', 'wga', 'wgb', 'wgg', 'wgi', 'wgo', 'wgu', 'wgw', 'wgy', 'wha', 'whg', 'whk', 'whu', 'wib', 'wic', 'wie', 'wif', 'wig', 'wih', 'wii', 'wij', 'wik', 'wil', 'wim', 'win', 'wir', 'wit', 'wiu', 'wiv', 'wiw', 'wiy', 'wja', 'wji', 'wka', 'wkb', 'wkd', 'wkl', 'wku', 'wkw', 'wky', 'wla', 'wlc', 'wle', 'wlg', 'wli', 'wlk', 'wll', 'wlm', 'wlo', 'wlr', 'wls', 'wlu', 'wlv', 'wlw', 'wlx', 'wly', 'wma', 'wmb', 'wmc', 'wmd', 'wme', 'wmh', 'wmi', 'wmm', 'wmn', 'wmo', 'wms', 'wmt', 'wmw', 'wmx', 'wnb', 'wnc', 'wnd', 'wne', 'wng', 'wni', 'wnk', 'wnm', 'wnn', 'wno', 'wnp', 'wnu', 'wnw', 'wny', 'woa', 'wob', 'woc', 'wod', 'woe', 'wof', 'wog', 'woi', 'wok', 'wom', 'won', 'woo', 'wor', 'wos', 'wow', 'woy', 'wpc', 'wra', 'wrb', 'wrd', 'wrg', 'wrh', 'wri', 'wrk', 'wrl', 'wrm', 'wrn', 'wro', 'wrp', 'wrr', 'wrs', 'wru', 'wrv', 'wrw', 'wrx', 'wry', 'wrz', 'wsa', 'wsg', 'wsi', 'wsk', 'wsr', 'wss', 'wsu', 'wsv', 'wtf', 'wth', 'wti', 'wtk', 'wtm', 'wtw', 'wua', 'wub', 'wud', 'wuh', 'wul', 'wum', 'wun', 'wur', 'wut', 'wuu', 'wuv', 'wux', 'wuy', 'wwa', 'wwb', 'wwo', 'wwr', 'www', 'wxa', 'wxw', 'wya', 'wyb', 'wyi', 'wym', 'wyr', 'wyy', 'xaa', 'xab', 'xac', 'xad', 'xae', 'xag', 'xai', 'xaj', 'xak', 'xal', 'xam', 'xan', 'xao', 'xap', 'xaq', 'xar', 'xas', 'xat', 'xau', 'xav', 'xaw', 'xay', 'xba', 'xbb', 'xbc', 'xbd', 'xbe', 'xbg', 'xbi', 'xbj', 'xbm', 'xbn', 'xbo', 'xbp', 'xbr', 'xbw', 'xbx', 'xby', 'xcb', 'xcc', 'xce', 'xcg', 'xch', 'xcl', 'xcm', 'xcn', 'xco', 'xcr', 'xct', 'xcu', 'xcv', 'xcw', 'xcy', 'xda', 'xdc', 'xdk', 'xdm', 'xdo', 'xdy', 'xeb', 'xed', 'xeg', 'xel', 'xem', 'xep', 'xer', 'xes', 'xet', 'xeu', 'xfa', 'xga', 'xgb', 'xgd', 'xgf', 'xgg', 'xgi', 'xgl', 'xgm', 'xgn', 'xgr', 'xgu', 'xgw', 'xha', 'xhc', 'xhd', 'xhe', 'xhr', 'xht', 'xhu', 'xhv', 'xia', 'xib', 'xii', 'xil', 'xin', 'xip', 'xir', 'xis', 'xiv', 'xiy', 'xjb', 'xjt', 'xka', 'xkb', 'xkc', 'xkd', 'xke', 'xkf', 'xkg', 'xkh', 'xki', 'xkj', 'xkk', 'xkl', 'xkn', 'xko', 'xkp', 'xkq', 'xkr', 'xks', 'xkt', 'xku', 'xkv', 'xkw', 'xkx', 'xky', 'xkz', 'xla', 'xlb', 'xlc', 'xld', 'xle', 'xlg', 'xli', 'xln', 'xlo', 'xlp', 'xls', 'xlu', 'xly', 'xma', 'xmb', 'xmc', 'xmd', 'xme', 'xmf', 'xmg', 'xmh', 'xmj', 'xmk', 'xml', 'xmm', 'xmn', 'xmo', 'xmp', 'xmq', 'xmr', 'xms', 'xmt', 'xmu', 'xmv', 'xmw', 'xmx', 'xmy', 'xmz', 'xna', 'xnb', 'xnd', 'xng', 'xnh', 'xni', 'xnk', 'xnn', 'xno', 'xnr', 'xns', 'xnt', 'xnu', 'xny', 'xnz', 'xoc', 'xod', 'xog', 'xoi', 'xok', 'xom', 'xon', 'xoo', 'xop', 'xor', 'xow', 'xpa', 'xpc', 'xpe', 'xpg', 'xpi', 'xpj', 'xpk', 'xpm', 'xpn', 'xpo', 'xpp', 'xpq', 'xpr', 'xps', 'xpt', 'xpu', 'xpy', 'xqa', 'xqt', 'xra', 'xrb', 'xrd', 'xre', 'xrg', 'xri', 'xrm', 'xrn', 'xrq', 'xrr', 'xrt', 'xru', 'xrw', 'xsa', 'xsb', 'xsc', 'xsd', 'xse', 'xsh', 'xsi', 'xsj', 'xsl', 'xsm', 'xsn', 'xso', 'xsp', 'xsq', 'xsr', 'xss', 'xsu', 'xsv', 'xsy', 'xta', 'xtb', 'xtc', 'xtd', 'xte', 'xtg', 'xth', 'xti', 'xtj', 'xtl', 'xtm', 'xtn', 'xto', 'xtp', 'xtq', 'xtr', 'xts', 'xtt', 'xtu', 'xtv', 'xtw', 'xty', 'xtz', 'xua', 'xub', 'xud', 'xug', 'xuj', 'xul', 'xum', 'xun', 'xuo', 'xup', 'xur', 'xut', 'xuu', 'xve', 'xvi', 'xvn', 'xvo', 'xvs', 'xwa', 'xwc', 'xwd', 'xwe', 'xwg', 'xwj', 'xwk', 'xwl', 'xwo', 'xwr', 'xwt', 'xww', 'xxb', 'xxk', 'xxm', 'xxr', 'xxt', 'xya', 'xyb', 'xyj', 'xyk', 'xyl', 'xyt', 'xyy', 'xzh', 'xzm', 'xzp', 'yaa', 'yab', 'yac', 'yad', 'yae', 'yaf', 'yag', 'yah', 'yai', 'yaj', 'yak', 'yal', 'yam', 'yan', 'yao', 'yap', 'yaq', 'yar', 'yas', 'yat', 'yau', 'yav', 'yaw', 'yax', 'yay', 'yaz', 'yba', 'ybb', 'ybd', 'ybe', 'ybh', 'ybi', 'ybj', 'ybk', 'ybl', 'ybm', 'ybn', 'ybo', 'ybx', 'yby', 'ych', 'ycl', 'ycn', 'ycp', 'yda', 'ydd', 'yde', 'ydg', 'ydk', 'yds', 'yea', 'yec', 'yee', 'yei', 'yej', 'yel', 'yen', 'yer', 'yes', 'yet', 'yeu', 'yev', 'yey', 'yga', 'ygi', 'ygl', 'ygm', 'ygp', 'ygr', 'ygs', 'ygu', 'ygw', 'yha', 'yhd', 'yhl', 'yhs', 'yia', 'yif', 'yig', 'yih', 'yii', 'yij', 'yik', 'yil', 'yim', 'yin', 'yip', 'yiq', 'yir', 'yis', 'yit', 'yiu', 'yiv', 'yix', 'yiy', 'yiz', 'yka', 'ykg', 'yki', 'ykk', 'ykl', 'ykm', 'ykn', 'yko', 'ykr', 'ykt', 'yku', 'yky', 'yla', 'ylb', 'yle', 'ylg', 'yli', 'yll', 'ylm', 'yln', 'ylo', 'ylr', 'ylu', 'yly', 'yma', 'ymb', 'ymc', 'ymd', 'yme', 'ymg', 'ymh', 'ymi', 'ymk', 'yml', 'ymm', 'ymn', 'ymo', 'ymp', 'ymq', 'ymr', 'yms', 'ymt', 'ymx', 'ymz', 'yna', 'ynd', 'yne', 'yng', 'ynh', 'ynk', 'ynl', 'ynn', 'yno', 'ynq', 'yns', 'ynu', 'yob', 'yog', 'yoi', 'yok', 'yol', 'yom', 'yon', 'yos', 'yot', 'yox', 'yoy', 'ypa', 'ypb', 'ypg', 'yph', 'ypk', 'ypm', 'ypn', 'ypo', 'ypp', 'ypz', 'yra', 'yrb', 'yre', 'yri', 'yrk', 'yrl', 'yrm', 'yrn', 'yro', 'yrs', 'yrw', 'yry', 'ysc', 'ysd', 'ysg', 'ysl', 'ysn', 'yso', 'ysp', 'ysr', 'yss', 'ysy', 'yta', 'ytl', 'ytp', 'ytw', 'yty', 'yua', 'yub', 'yuc', 'yud', 'yue', 'yuf', 'yug', 'yui', 'yuj', 'yuk', 'yul', 'yum', 'yun', 'yup', 'yuq', 'yur', 'yut', 'yuu', 'yuw', 'yux', 'yuy', 'yuz', 'yva', 'yvt', 'ywa', 'ywg', 'ywl', 'ywn', 'ywq', 'ywr', 'ywt', 'ywu', 'yww', 'yxa', 'yxg', 'yxl', 'yxm', 'yxu', 'yxy', 'yyr', 'yyu', 'yyz', 'yzg', 'yzk', 'zaa', 'zab', 'zac', 'zad', 'zae', 'zaf', 'zag', 'zah', 'zai', 'zaj', 'zak', 'zal', 'zam', 'zao', 'zap', 'zaq', 'zar', 'zas', 'zat', 'zau', 'zav', 'zaw', 'zax', 'zay', 'zaz', 'zbc', 'zbe', 'zbl', 'zbt', 'zbw', 'zca', 'zch', 'zdj', 'zea', 'zeg', 'zeh', 'zen', 'zga', 'zgb', 'zgh', 'zgm', 'zgn', 'zgr', 'zhb', 'zhd', 'zhi', 'zhn', 'zhw', 'zhx', 'zia', 'zib', 'zik', 'zil', 'zim', 'zin', 'zir', 'ziw', 'ziz', 'zka', 'zkb', 'zkd', 'zkg', 'zkh', 'zkk', 'zkn', 'zko', 'zkp', 'zkr', 'zkt', 'zku', 'zkv', 'zkz', 'zle', 'zlj', 'zlm', 'zln', 'zlq', 'zls', 'zlw', 'zma', 'zmb', 'zmc', 'zmd', 'zme', 'zmf', 'zmg', 'zmh', 'zmi', 'zmj', 'zmk', 'zml', 'zmm', 'zmn', 'zmo', 'zmp', 'zmq', 'zmr', 'zms', 'zmt', 'zmu', 'zmv', 'zmw', 'zmx', 'zmy', 'zmz', 'zna', 'znd', 'zne', 'zng', 'znk', 'zns', 'zoc', 'zoh', 'zom', 'zoo', 'zoq', 'zor', 'zos', 'zpa', 'zpb', 'zpc', 'zpd', 'zpe', 'zpf', 'zpg', 'zph', 'zpi', 'zpj', 'zpk', 'zpl', 'zpm', 'zpn', 'zpo', 'zpp', 'zpq', 'zpr', 'zps', 'zpt', 'zpu', 'zpv', 'zpw', 'zpx', 'zpy', 'zpz', 'zqe', 'zra', 'zrg', 'zrn', 'zro', 'zrp', 'zrs', 'zsa', 'zsk', 'zsl', 'zsm', 'zsr', 'zsu', 'zte', 'ztg', 'ztl', 'ztm', 'ztn', 'ztp', 'ztq', 'zts', 'ztt', 'ztu', 'ztx', 'zty', 'zua', 'zuh', 'zum', 'zun', 'zuy', 'zwa', 'zxx', 'zyb', 'zyg', 'zyj', 'zyn', 'zyp', 'zza', 'zzj'];
            axe.utils.validLangs = function () {
                'use strict';
                return langs;
            };
            return commons;
        }()
    });
})(typeof window === 'object' ? window : this);

function aXeThis(send) {
    if ($('#complianceMessage')) {
        $('#complianceMessage').remove();
    }
    axe.run(document, function (error, Results) {
        chrome.runtime.sendMessage(Results, function (response) {
            if (response != null)
                console.log(response.farewell);
            if ($('#mainContent').length > 0) {
                $("#mainContent").animate({ scrollTop: 0 }, "slow");
            } else {
                $("html").animate({ scrollTop: 0 }, "slow");
            }
        });
        if (send === true) {
            if ($('#complianceMessage')) {
                $('#complianceMessage').remove();
            }
            if (Results.hasOwnProperty('violations').length == 0) {
                $('#complianceMessage').fadeIn(500);
                $('body').prepend('<div id="complianceMessage" style="display: none; border: 1px solid black; border-radius: 3px; padding: 10px; min-height: 30px; width: 200px; position: fixed; top:700px; right: 20px; background-color: green; font-size: 14px; color: white;z-index: 10000;">No Violations</div>');
                $('#complianceMessage').fadeOut(2000);
            }

            if (Results.violations.length > 0) {
                $('body').prepend('<div id="complianceMessage" style="display: none; border: 1px solid black; border-radius: 3px; padding: 10px; min-height: 30px; width: 200px; position: fixed; top:700px; right: 20px; background-color: red; font-size: 14px; color: white;z-index: 10000;">Error saving compliance data</div>');
                $('#complianceMessage').removeAttr('style');
                $('#complianceMessage').attr('style', 'display: none; border: 1px solid black; border-radius: 3px; padding: 10px; min-height: 30px; width: 200px; position: fixed; top:700px; right: 20px; background-color: red; font-size: 14px; color: white;z-index: 10000;');
                $('#complianceMessage').html('This page has accessibilty compliance errors');
                $('#complianceMessage').fadeIn(500);
                $('#complianceMessage').fadeOut(3000);
            }
        }
    });
}

$(document).ready(function (e) {
    aXeThis(true);
});
