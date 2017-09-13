chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      console.log(request.greeting);
      if (request.greeting)
          sendResponse({ farewell: "content goodbye" });
      aXeThis(false);
  });

// ==UserScript==
// @name         insertAxe
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://tampermonkey.net/index.php?version=4.0.25&ext=dhdg&updated=true#script_overview
// @grant        none
// ==/UserScript==

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

(function () {
    'use strict';
    /*! aXe v1.1.1
 * Copyright (c) 2015 Deque Systems, Inc.
 *
 * Your use of this Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * This entire copyright notice must appear in every copy of this file you
 * distribute or in any file that contains substantial portions of this source
 * code.
 */
    (function (window, document) {
        function clone(obj) {
            "use strict";
            var index, length, out = obj;
            if (obj !== null && typeof obj === "object") {
                if (Array.isArray(obj)) {
                    out = [];
                    for (index = 0, length = obj.length; index < length; index++) {
                        out[index] = clone(obj[index]);
                    }
                } else {
                    out = {};
                    for (index in obj) {
                        out[index] = clone(obj[index]);
                    }
                }
            }
            return out;
        }
        var matchesSelector = function () {
            "use strict";
            var method;
            function getMethod(win) {
                var index, candidate, elProto = win.Element.prototype, candidates = ["matches", "matchesSelector", "mozMatchesSelector", "webkitMatchesSelector", "msMatchesSelector"], length = candidates.length;
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
        var escapeSelector = function (value) {
            "use strict";
            var string = String(value);
            var length = string.length;
            var index = -1;
            var codeUnit;
            var result = "";
            var firstCodeUnit = string.charCodeAt(0);
            while (++index < length) {
                codeUnit = string.charCodeAt(index);
                if (codeUnit == 0) {
                    throw new Error("INVALID_CHARACTER_ERR");
                }
                if (codeUnit >= 1 && codeUnit <= 31 || codeUnit >= 127 && codeUnit <= 159 || index == 0 && codeUnit >= 48 && codeUnit <= 57 || index == 1 && codeUnit >= 48 && codeUnit <= 57 && firstCodeUnit == 45) {
                    result += "\\" + codeUnit.toString(16) + " ";
                    continue;
                }
                if (index == 1 && codeUnit == 45 && firstCodeUnit == 45) {
                    result += "\\" + string.charAt(index);
                    continue;
                }
                if (codeUnit >= 128 || codeUnit == 45 || codeUnit == 95 || codeUnit >= 48 && codeUnit <= 57 || codeUnit >= 65 && codeUnit <= 90 || codeUnit >= 97 && codeUnit <= 122) {
                    result += string.charAt(index);
                    continue;
                }
                result += "\\" + string.charAt(index);
            }
            return result;
        };
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
                _rng = function () {
                    for (var i = 0, r; i < 16; i++) {
                        if ((i & 3) === 0) {
                            r = Math.random() * 4294967296;
                        }
                        _rnds[i] = r >>> ((i & 3) << 3) & 255;
                    }
                    return _rnds;
                };
            }
            var BufferClass = typeof _global.Buffer == "function" ? _global.Buffer : Array;
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
                return bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]];
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
                    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
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
                if (typeof options == "string") {
                    buf = options == "binary" ? new BufferClass(16) : null;
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
        var axe = {};
        var commons;
        var require, define;
        var utils = axe.utils = {};
        utils.matchesSelector = matchesSelector;
        utils.escapeSelector = escapeSelector;
        utils.clone = clone;
        var helpers = {};
        function setDefaultConfiguration(audit) {
            "use strict";
            var config = audit || {};
            config.rules = config.rules || [];
            config.tools = config.tools || [];
            config.checks = config.checks || [];
            config.data = config.data || {
                checks: {},
                rules: {}
            };
            return config;
        }
        function unpackToObject(collection, audit, method) {
            "use strict";
            var i, l;
            for (i = 0, l = collection.length; i < l; i++) {
                audit[method](collection[i]);
            }
        }
        function Audit(audit) {
            "use strict";
            audit = setDefaultConfiguration(audit);
            axe.commons = commons = audit.commons;
            this.reporter = audit.reporter;
            this.rules = [];
            this.tools = {};
            this.checks = {};
            unpackToObject(audit.rules, this, "addRule");
            unpackToObject(audit.tools, this, "addTool");
            unpackToObject(audit.checks, this, "addCheck");
            this.data = audit.data || {
                checks: {},
                rules: {}
            };
            injectStyle(audit.style);
        }
        Audit.prototype.addRule = function (spec) {
            "use strict";
            if (spec.metadata) {
                this.data.rules[spec.id] = spec.metadata;
            }
            var candidate;
            for (var i = 0, l = this.rules.length; i < l; i++) {
                candidate = this.rules[i];
                if (candidate.id === spec.id) {
                    this.rules[i] = new Rule(spec, this);
                    return;
                }
            }
            this.rules.push(new Rule(spec, this));
        };
        Audit.prototype.addTool = function (spec) {
            "use strict";
            this.tools[spec.id] = new Tool(spec);
        };
        Audit.prototype.addCheck = function (spec) {
            "use strict";
            if (spec.metadata) {
                this.data.checks[spec.id] = spec.metadata;
            }
            this.checks[spec.id] = new Check(spec);
        };
        Audit.prototype.run = function (context, options, fn) {
            "use strict";
            var q = utils.queue();
            this.rules.forEach(function (rule) {
                if (utils.ruleShouldRun(rule, context, options)) {
                    q.defer(function (cb) {
                        rule.run(context, options, cb);
                    });
                }
            });
            q.then(fn);
        };
        Audit.prototype.after = function (results, options) {
            "use strict";
            var rules = this.rules;
            return results.map(function (ruleResult) {
                var rule = utils.findBy(rules, "id", ruleResult.id);
                return rule.after(ruleResult, options);
            });
        };
        function CheckResult(check) {
            "use strict";
            this.id = check.id;
            this.data = null;
            this.relatedNodes = [];
            this.result = null;
        }
        function Check(spec) {
            "use strict";
            this.id = spec.id;
            this.options = spec.options;
            this.selector = spec.selector;
            this.evaluate = spec.evaluate;
            if (spec.after) {
                this.after = spec.after;
            }
            if (spec.matches) {
                this.matches = spec.matches;
            }
            this.enabled = spec.hasOwnProperty("enabled") ? spec.enabled : true;
        }
        Check.prototype.matches = function (node) {
            "use strict";
            if (!this.selector || utils.matchesSelector(node, this.selector)) {
                return true;
            }
            return false;
        };
        Check.prototype.run = function (node, options, callback) {
            "use strict";
            options = options || {};
            var enabled = options.hasOwnProperty("enabled") ? options.enabled : this.enabled, checkOptions = options.options || this.options;
            if (enabled && this.matches(node)) {
                var checkResult = new CheckResult(this);
                var checkHelper = utils.checkHelper(checkResult, callback);
                var result;
                try {
                    result = this.evaluate.call(checkHelper, node, checkOptions);
                } catch (e) {
                    axe.log(e.message, e.stack);
                    callback(null);
                    return;
                }
                if (!checkHelper.isAsync) {
                    checkResult.result = result;
                    setTimeout(function () {
                        callback(checkResult);
                    }, 0);
                }
            } else {
                callback(null);
            }
        };
        function pushUniqueFrame(collection, frame) {
            "use strict";
            if (utils.isHidden(frame)) {
                return;
            }
            var fr = utils.findBy(collection, "node", frame);
            if (!fr) {
                collection.push({
                    node: frame,
                    include: [],
                    exclude: []
                });
            }
        }
        function pushUniqueFrameSelector(context, type, selectorArray) {
            "use strict";
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
            "use strict";
            if (context && typeof context === "object" || context instanceof NodeList) {
                if (context instanceof Node) {
                    return {
                        include: [context],
                        exclude: []
                    };
                }
                if (context.hasOwnProperty("include") || context.hasOwnProperty("exclude")) {
                    return {
                        include: context.include || [document],
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
            if (typeof context === "string") {
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
            "use strict";
            var item, result = [];
            for (var i = 0, l = context[type].length; i < l; i++) {
                item = context[type][i];
                if (typeof item === "string") {
                    result = result.concat(utils.toArray(document.querySelectorAll(item)));
                    break;
                } else {
                    if (item && item.length) {
                        if (item.length > 1) {
                            pushUniqueFrameSelector(context, type, item);
                        } else {
                            result = result.concat(utils.toArray(document.querySelectorAll(item[0])));
                        }
                    } else {
                        result.push(item);
                    }
                }
            }
            return result.filter(function (r) {
                return r;
            });
        }
        function Context(spec) {
            "use strict";
            var self = this;
            this.frames = [];
            this.initiator = spec && typeof spec.initiator === "boolean" ? spec.initiator : true;
            this.page = false;
            spec = normalizeContext(spec);
            this.exclude = spec.exclude;
            this.include = spec.include;
            this.include = parseSelectorArray(this, "include");
            this.exclude = parseSelectorArray(this, "exclude");
            utils.select("frame, iframe", this).forEach(function (frame) {
                if (isNodeInContext(frame, self)) {
                    pushUniqueFrame(self.frames, frame);
                }
            });
            if (this.include.length === 1 && this.include[0] === document) {
                this.page = true;
            }
        }
        function RuleResult(rule) {
            "use strict";
            this.id = rule.id;
            this.result = axe.constants.result.NA;
            this.pageLevel = rule.pageLevel;
            this.impact = null;
            this.nodes = [];
        }
        function Rule(spec, parentAudit) {
            "use strict";
            this._audit = parentAudit;
            this.id = spec.id;
            this.selector = spec.selector || "*";
            this.excludeHidden = typeof spec.excludeHidden === "boolean" ? spec.excludeHidden : true;
            this.enabled = typeof spec.enabled === "boolean" ? spec.enabled : true;
            this.pageLevel = typeof spec.pageLevel === "boolean" ? spec.pageLevel : false;
            this.any = spec.any || [];
            this.all = spec.all || [];
            this.none = spec.none || [];
            this.tags = spec.tags || [];
            if (spec.matches) {
                this.matches = spec.matches;
            }
        }
        Rule.prototype.matches = function () {
            "use strict";
            return true;
        };
        Rule.prototype.gather = function (context) {
            "use strict";
            var elements = utils.select(this.selector, context);
            if (this.excludeHidden) {
                return elements.filter(function (element) {
                    return !utils.isHidden(element);
                });
            }
            return elements;
        };
        Rule.prototype.runChecks = function (type, node, options, callback) {
            "use strict";
            var self = this;
            var checkQueue = utils.queue();
            this[type].forEach(function (c) {
                var check = self._audit.checks[c.id || c];
                var option = utils.getCheckOption(check, self.id, options);
                checkQueue.defer(function (done) {
                    check.run(node, option, done);
                });
            });
            checkQueue.then(function (results) {
                results = results.filter(function (check) {
                    return check;
                });
                callback({
                    type: type,
                    results: results
                });
            });
        };
        Rule.prototype.run = function (context, options, callback) {
            "use strict";
            var nodes = this.gather(context);
            var q = utils.queue();
            var self = this;
            var ruleResult;
            ruleResult = new RuleResult(this);
            nodes.forEach(function (node) {
                if (self.matches(node)) {
                    q.defer(function (nodeQueue) {
                        var checkQueue = utils.queue();
                        checkQueue.defer(function (done) {
                            self.runChecks("any", node, options, done);
                        });
                        checkQueue.defer(function (done) {
                            self.runChecks("all", node, options, done);
                        });
                        checkQueue.defer(function (done) {
                            self.runChecks("none", node, options, done);
                        });
                        checkQueue.then(function (results) {
                            if (results.length) {
                                var hasResults = false, result = {
                                    node: new utils.DqElement(node)
                                };
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
                                    ruleResult.nodes.push(result);
                                }
                            }
                            nodeQueue();
                        });
                    });
                }
            });
            q.then(function () {
                callback(ruleResult);
            });
        };
        function findAfterChecks(rule) {
            "use strict";
            return utils.getAllChecks(rule).map(function (c) {
                var check = rule._audit.checks[c.id || c];
                return typeof check.after === "function" ? check : null;
            }).filter(Boolean);
        }
        function findCheckResults(nodes, checkID) {
            "use strict";
            var checkResults = [];
            nodes.forEach(function (nodeResult) {
                var checks = utils.getAllChecks(nodeResult);
                checks.forEach(function (checkResult) {
                    if (checkResult.id === checkID) {
                        checkResults.push(checkResult);
                    }
                });
            });
            return checkResults;
        }
        function filterChecks(checks) {
            "use strict";
            return checks.filter(function (check) {
                return check.filtered !== true;
            });
        }
        function sanitizeNodes(result) {
            "use strict";
            var checkTypes = ["any", "all", "none"];
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
            "use strict";
            var afterChecks = findAfterChecks(this);
            var ruleID = this.id;
            afterChecks.forEach(function (check) {
                var beforeResults = findCheckResults(result.nodes, check.id);
                var option = utils.getCheckOption(check, ruleID, options);
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
        function Tool(spec) {
            "use strict";
            spec.source = spec.source || {};
            this.id = spec.id;
            this.options = spec.options;
            this._run = spec.source.run;
            this._cleanup = spec.source.cleanup;
            this.active = false;
        }
        Tool.prototype.run = function (element, options, callback) {
            "use strict";
            options = typeof options === "undefined" ? this.options : options;
            this.active = true;
            this._run(element, options, callback);
        };
        Tool.prototype.cleanup = function (callback) {
            "use strict";
            this.active = false;
            this._cleanup(callback);
        };
        axe.constants = {};
        axe.constants.result = {
            PASS: "PASS",
            FAIL: "FAIL",
            NA: "NA"
        };
        axe.constants.raisedMetadata = {
            impact: ["minor", "moderate", "serious", "critical"]
        };
        axe.version = "dev";
        window.axe = axe;
        axe.log = function () {
            "use strict";
            if (typeof console === "object" && console.log) {
                Function.prototype.apply.call(console.log, console, arguments);
            }
        };
        function cleanupTools(callback) {
            "use strict";
            if (!axe._audit) {
                throw new Error("No audit configured");
            }
            var q = utils.queue();
            Object.keys(axe._audit.tools).forEach(function (key) {
                var tool = axe._audit.tools[key];
                if (tool.active) {
                    q.defer(function (done) {
                        tool.cleanup(done);
                    });
                }
            });
            utils.toArray(document.querySelectorAll("frame, iframe")).forEach(function (frame) {
                q.defer(function (done) {
                    return utils.sendCommandToFrame(frame, {
                        command: "cleanup-tool"
                    }, done);
                });
            });
            q.then(callback);
        }
        axe.cleanup = cleanupTools;
        axe.configure = function (spec) {
            "use strict";
            var audit = axe._audit;
            if (!audit) {
                throw new Error("No audit configured");
            }
            if (spec.reporter && (typeof spec.reporter === "function" || reporters[spec.reporter])) {
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
            if (spec.tools) {
                spec.tools.forEach(function (tool) {
                    audit.addTool(tool);
                });
            }
        };
        axe.getRules = function (tags) {
            "use strict";
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
        function runCommand(data, callback) {
            "use strict";
            var context = data && data.context || {};
            if (context.include && !context.include.length) {
                context.include = [document];
            }
            var options = data && data.options || {};
            switch (data.command) {
                case "rules":
                    return runRules(context, options, callback);

                case "run-tool":
                    return runTool(data.parameter, data.selectorArray, options, callback);

                case "cleanup-tool":
                    return cleanupTools(callback);
            }
        }
        axe._load = function (audit) {
            "use strict";
            utils.respondable.subscribe("axe.ping", function (data, respond) {
                respond({
                    axe: true
                });
            });
            utils.respondable.subscribe("axe.start", runCommand);
            axe._audit = new Audit(audit);
        };
        var reporters = {};
        var defaultReporter;
        function getReporter(reporter) {
            "use strict";
            if (typeof reporter === "string" && reporters[reporter]) {
                return reporters[reporter];
            }
            if (typeof reporter === "function") {
                return reporter;
            }
            return defaultReporter;
        }
        axe.reporter = function registerReporter(name, cb, isDefault) {
            "use strict";
            reporters[name] = cb;
            if (isDefault) {
                defaultReporter = cb;
            }
        };
        function runRules(context, options, callback) {
            "use strict";
            context = new Context(context);
            var q = utils.queue();
            var audit = axe._audit;
            if (context.frames.length) {
                q.defer(function (done) {
                    utils.collectResultsFromFrames(context, options, "rules", null, done);
                });
            }
            q.defer(function (cb) {
                audit.run(context, options, cb);
            });
            q.then(function (data) {
                var results = utils.mergeResults(data.map(function (d) {
                    return {
                        results: d
                    };
                }));
                if (context.initiator) {
                    results = audit.after(results, options);
                    results = results.map(utils.finalizeRuleResult);
                }
                callback(results);
            });
        }
        axe.a11yCheck = function (context, options, callback) {
            "use strict";
            if (typeof options === "function") {
                callback = options;
                options = {};
            }
            if (!options || typeof options !== "object") {
                options = {};
            }
            var audit = axe._audit;
            if (!audit) {
                throw new Error("No audit configured");
            }
            var reporter = getReporter(options.reporter || audit.reporter);
            runRules(context, options, function (results) {
                reporter(results, callback);
            });
        };
        function runTool(toolId, selectorArray, options, callback) {
            "use strict";
            if (!axe._audit) {
                throw new Error("No audit configured");
            }
            if (selectorArray.length > 1) {
                var frame = document.querySelector(selectorArray.shift());
                return utils.sendCommandToFrame(frame, {
                    options: options,
                    command: "run-tool",
                    parameter: toolId,
                    selectorArray: selectorArray
                }, callback);
            }
            var node = document.querySelector(selectorArray.shift());
            axe._audit.tools[toolId].run(node, options, callback);
        }
        axe.tool = runTool;
        helpers.failureSummary = function failureSummary(nodeData) {
            "use strict";
            var failingChecks = {};
            failingChecks.none = nodeData.none.concat(nodeData.all);
            failingChecks.any = nodeData.any;
            return Object.keys(failingChecks).map(function (key) {
                if (!failingChecks[key].length) {
                    return;
                }
                return axe._audit.data.failureSummaries[key].failureMessage(failingChecks[key].map(function (check) {
                    return check.message || "";
                }));
            }).filter(function (i) {
                return i !== undefined;
            }).join("\n\n");
        };
        helpers.formatCheck = function (check) {
            "use strict";
            return {
                id: check.id,
                impact: check.impact,
                message: check.message,
                data: check.data,
                relatedNodes: check.relatedNodes.map(helpers.formatNode)
            };
        };
        helpers.formatChecks = function (nodeResult, data) {
            "use strict";
            nodeResult.any = data.any.map(helpers.formatCheck);
            nodeResult.all = data.all.map(helpers.formatCheck);
            nodeResult.none = data.none.map(helpers.formatCheck);
            return nodeResult;
        };
        helpers.formatNode = function (node) {
            "use strict";
            return {
                target: node ? node.selector : null,
                html: node ? node.source : null
            };
        };
        helpers.formatRuleResult = function (ruleResult) {
            "use strict";
            return {
                id: ruleResult.id,
                description: ruleResult.description,
                help: ruleResult.help,
                helpUrl: ruleResult.helpUrl || null,
                impact: null,
                tags: ruleResult.tags,
                nodes: []
            };
        };
        helpers.splitResultsWithChecks = function (results) {
            "use strict";
            return helpers.splitResults(results, helpers.formatChecks);
        };
        helpers.splitResults = function (results, nodeDataMapper) {
            "use strict";
            var violations = [], passes = [];
            results.forEach(function (rr) {
                function mapNode(nodeData) {
                    var result = nodeData.result || rr.result;
                    var node = helpers.formatNode(nodeData.node);
                    node.impact = nodeData.impact || null;
                    return nodeDataMapper(node, nodeData, result);
                }
                var failResult, passResult = helpers.formatRuleResult(rr);
                failResult = utils.clone(passResult);
                failResult.impact = rr.impact || null;
                failResult.nodes = rr.violations.map(mapNode);
                passResult.nodes = rr.passes.map(mapNode);
                if (failResult.nodes.length) {
                    violations.push(failResult);
                }
                if (passResult.nodes.length) {
                    passes.push(passResult);
                }
            });
            return {
                violations: violations,
                passes: passes,
                url: window.location.href,
                timestamp: new Date()
            };
        };
        axe.reporter("na", function (results, callback) {
            "use strict";
            var na = results.filter(function (rr) {
                return rr.violations.length === 0 && rr.passes.length === 0;
            }).map(helpers.formatRuleResult);
            var formattedResults = helpers.splitResultsWithChecks(results);
            callback({
                violations: formattedResults.violations,
                passes: formattedResults.passes,
                notApplicable: na,
                timestamp: formattedResults.timestamp,
                url: formattedResults.url
            });
        });
        axe.reporter("no-passes", function (results, callback) {
            "use strict";
            var formattedResults = helpers.splitResultsWithChecks(results);
            callback({
                violations: formattedResults.violations,
                timestamp: formattedResults.timestamp,
                url: formattedResults.url
            });
        });
        axe.reporter("raw", function (results, callback) {
            "use strict";
            callback(results);
        });
        axe.reporter("v1", function (results, callback) {
            "use strict";
            var formattedResults = helpers.splitResults(results, function (nodeResult, data, result) {
                if (result === axe.constants.result.FAIL) {
                    nodeResult.failureSummary = helpers.failureSummary(data);
                }
                return nodeResult;
            });
            callback({
                violations: formattedResults.violations,
                passes: formattedResults.passes,
                timestamp: formattedResults.timestamp,
                url: formattedResults.url
            });
        });
        axe.reporter("v2", function (results, callback) {
            "use strict";
            var formattedResults = helpers.splitResultsWithChecks(results);
            callback({
                violations: formattedResults.violations,
                passes: formattedResults.passes,
                timestamp: formattedResults.timestamp,
                url: formattedResults.url
            });
        }, true);
        utils.checkHelper = function checkHelper(checkResult, callback) {
            "use strict";
            return {
                isAsync: false,
                async: function () {
                    this.isAsync = true;
                    return function (result) {
                        checkResult.value = result;
                        callback(checkResult);
                    };
                },
                data: function (data) {
                    checkResult.data = data;
                },
                relatedNodes: function (nodes) {
                    nodes = nodes instanceof Node ? [nodes] : utils.toArray(nodes);
                    checkResult.relatedNodes = nodes.map(function (element) {
                        return new utils.DqElement(element);
                    });
                }
            };
        };
        utils.sendCommandToFrame = function (node, parameters, callback) {
            "use strict";
            var win = node.contentWindow;
            if (!win) {
                axe.log("Frame does not have a content window", node);
                return callback({});
            }
            var timeout = setTimeout(function () {
                timeout = setTimeout(function () {
                    axe.log("No response from frame: ", node);
                    callback(null);
                }, 0);
            }, 500);
            utils.respondable(win, "axe.ping", null, function () {
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    axe.log("Error returning results from frame: ", node);
                    callback({});
                    callback = null;
                }, 3e4);
                utils.respondable(win, "axe.start", parameters, function (data) {
                    if (callback) {
                        clearTimeout(timeout);
                        callback(data);
                    }
                });
            });
        };
        utils.collectResultsFromFrames = function collectResultsFromFrames(context, options, command, parameter, callback) {
            "use strict";
            var q = utils.queue();
            var frames = context.frames;
            function defer(frame) {
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
                q.defer(function (done) {
                    var node = frame.node;
                    utils.sendCommandToFrame(node, params, function (data) {
                        if (data) {
                            return done({
                                results: data,
                                frameElement: node,
                                frame: utils.getSelector(node)
                            });
                        }
                        done(null);
                    });
                });
            }
            for (var i = 0, l = frames.length; i < l; i++) {
                defer(frames[i]);
            }
            q.then(function (data) {
                callback(utils.mergeResults(data));
            });
        };
        utils.contains = function (node, otherNode) {
            "use strict";
            if (typeof node.contains === "function") {
                return node.contains(otherNode);
            }
            return !!(node.compareDocumentPosition(otherNode) & 16);
        };
        function truncate(str, maxLength) {
            "use strict";
            maxLength = maxLength || 300;
            if (str.length > maxLength) {
                var index = str.indexOf(">");
                str = str.substring(0, index + 1);
            }
            return str;
        }
        function getSource(element) {
            "use strict";
            var source = element.outerHTML;
            if (!source && typeof XMLSerializer === "function") {
                source = new XMLSerializer().serializeToString(element);
            }
            return truncate(source || "");
        }
        function DqElement(element, spec) {
            "use strict";
            spec = spec || {};
            this.selector = spec.selector || [utils.getSelector(element)];
            this.source = spec.source !== undefined ? spec.source : getSource(element);
            this.element = element;
        }
        DqElement.prototype.toJSON = function () {
            "use strict";
            return {
                selector: this.selector,
                source: this.source
            };
        };
        utils.DqElement = DqElement;
        utils.extendBlacklist = function (to, from, blacklist) {
            "use strict";
            blacklist = blacklist || [];
            for (var i in from) {
                if (from.hasOwnProperty(i) && blacklist.indexOf(i) === -1) {
                    to[i] = from[i];
                }
            }
            return to;
        };
        utils.extendMetaData = function (to, from) {
            "use strict";
            for (var i in from) {
                if (from.hasOwnProperty(i)) {
                    if (typeof from[i] === "function") {
                        try {
                            to[i] = from[i](to);
                        } catch (e) {
                            to[i] = null;
                        }
                    } else {
                        to[i] = from[i];
                    }
                }
            }
        };
        function raiseMetadata(obj, checks) {
            "use strict";
            Object.keys(axe.constants.raisedMetadata).forEach(function (key) {
                var collection = axe.constants.raisedMetadata[key];
                var highestIndex = checks.reduce(function (prevIndex, current) {
                    var currentIndex = collection.indexOf(current[key]);
                    return currentIndex > prevIndex ? currentIndex : prevIndex;
                }, -1);
                if (collection[highestIndex]) {
                    obj[key] = collection[highestIndex];
                }
            });
        }
        function calculateCheckResult(failingChecks) {
            "use strict";
            var isFailing = failingChecks.any.length || failingChecks.all.length || failingChecks.none.length;
            return isFailing ? axe.constants.result.FAIL : axe.constants.result.PASS;
        }
        function calculateRuleResult(ruleResult) {
            "use strict";
            function checkMap(check) {
                return utils.extendBlacklist({}, check, ["result"]);
            }
            var newRuleResult = utils.extendBlacklist({
                violations: [],
                passes: []
            }, ruleResult, ["nodes"]);
            ruleResult.nodes.forEach(function (detail) {
                var failingChecks = utils.getFailingChecks(detail);
                var result = calculateCheckResult(failingChecks);
                if (result === axe.constants.result.FAIL) {
                    raiseMetadata(detail, utils.getAllChecks(failingChecks));
                    detail.any = failingChecks.any.map(checkMap);
                    detail.all = failingChecks.all.map(checkMap);
                    detail.none = failingChecks.none.map(checkMap);
                    newRuleResult.violations.push(detail);
                    return;
                }
                detail.any = detail.any.filter(function (check) {
                    return check.result;
                }).map(checkMap);
                detail.all = detail.all.map(checkMap);
                detail.none = detail.none.map(checkMap);
                newRuleResult.passes.push(detail);
            });
            raiseMetadata(newRuleResult, newRuleResult.violations);
            newRuleResult.result = newRuleResult.violations.length ? axe.constants.result.FAIL : newRuleResult.passes.length ? axe.constants.result.PASS : newRuleResult.result;
            return newRuleResult;
        }
        utils.getFailingChecks = function (detail) {
            "use strict";
            var any = detail.any.filter(function (check) {
                return !check.result;
            });
            return {
                all: detail.all.filter(function (check) {
                    return !check.result;
                }),
                any: any.length === detail.any.length ? any : [],
                none: detail.none.filter(function (check) {
                    return !!check.result;
                })
            };
        };
        utils.finalizeRuleResult = function (ruleResult) {
            "use strict";
            utils.publishMetaData(ruleResult);
            return calculateRuleResult(ruleResult);
        };
        utils.findBy = function (array, key, value) {
            "use strict";
            array = array || [];
            var index, length;
            for (index = 0, length = array.length; index < length; index++) {
                if (array[index][key] === value) {
                    return array[index];
                }
            }
        };
        utils.getAllChecks = function getAllChecks(object) {
            "use strict";
            var result = [];
            return result.concat(object.any || []).concat(object.all || []).concat(object.none || []);
        };
        utils.getCheckOption = function (check, ruleID, options) {
            "use strict";
            var ruleCheckOption = ((options.rules && options.rules[ruleID] || {}).checks || {})[check.id];
            var checkOption = (options.checks || {})[check.id];
            var enabled = check.enabled;
            var opts = check.options;
            if (checkOption) {
                if (checkOption.hasOwnProperty("enabled")) {
                    enabled = checkOption.enabled;
                }
                if (checkOption.hasOwnProperty("options")) {
                    opts = checkOption.options;
                }
            }
            if (ruleCheckOption) {
                if (ruleCheckOption.hasOwnProperty("enabled")) {
                    enabled = ruleCheckOption.enabled;
                }
                if (ruleCheckOption.hasOwnProperty("options")) {
                    opts = ruleCheckOption.options;
                }
            }
            return {
                enabled: enabled,
                options: opts
            };
        };
        function nthOfType(element) {
            "use strict";
            var index = 1, type = element.nodeName;
            while (element = element.previousElementSibling) {
                if (element.nodeName === type) {
                    index++;
                }
            }
            return index;
        }
        function siblingsHaveSameSelector(node, selector) {
            "use strict";
            var index, sibling, siblings = node.parentNode.children;
            if (!siblings) {
                return false;
            }
            var length = siblings.length;
            for (index = 0; index < length; index++) {
                sibling = siblings[index];
                if (sibling !== node && utils.matchesSelector(sibling, selector)) {
                    return true;
                }
            }
            return false;
        }
        utils.getSelector = function getSelector(node) {
            "use strict";
            function escape(p) {
                return utils.escapeSelector(p);
            }
            var parts = [], part;
            while (node.parentNode) {
                part = "";
                if (node.id && document.querySelectorAll("#" + utils.escapeSelector(node.id)).length === 1) {
                    parts.unshift("#" + utils.escapeSelector(node.id));
                    break;
                }
                if (node.className && typeof node.className === "string") {
                    part = "." + node.className.trim().split(/\s+/).map(escape).join(".");
                    if (part === "." || siblingsHaveSameSelector(node, part)) {
                        part = "";
                    }
                }
                if (!part) {
                    part = utils.escapeSelector(node.nodeName).toLowerCase();
                    if (part === "html" || part === "body") {
                        parts.unshift(part);
                        break;
                    }
                    if (siblingsHaveSameSelector(node, part)) {
                        part += ":nth-of-type(" + nthOfType(node) + ")";
                    }
                }
                parts.unshift(part);
                node = node.parentNode;
            }
            return parts.join(" > ");
        };
        var styleSheet;
        function injectStyle(style) {
            "use strict";
            if (styleSheet && styleSheet.parentNode) {
                styleSheet.parentNode.removeChild(styleSheet);
                styleSheet = null;
            }
            if (!style) {
                return;
            }
            var head = document.head || document.getElementsByTagName("head")[0];
            styleSheet = document.createElement("style");
            styleSheet.type = "text/css";
            if (styleSheet.styleSheet === undefined) {
                styleSheet.appendChild(document.createTextNode(style));
            } else {
                styleSheet.styleSheet.cssText = style;
            }
            head.appendChild(styleSheet);
            return styleSheet;
        }
        utils.isHidden = function isHidden(el, recursed) {
            "use strict";
            if (el.nodeType === 9) {
                return false;
            }
            var style = window.getComputedStyle(el, null);
            if (!style || (!el.parentNode || (style.getPropertyValue("display") === "none" || !recursed && style.getPropertyValue("visibility") === "hidden" || el.getAttribute("aria-hidden") === "true"))) {
                return true;
            }
            return utils.isHidden(el.parentNode, true);
        };
        function pushFrame(resultSet, frameElement, frameSelector) {
            "use strict";
            resultSet.forEach(function (res) {
                res.node.selector.unshift(frameSelector);
                res.node = new utils.DqElement(frameElement, res.node);
                var checks = utils.getAllChecks(res);
                if (checks.length) {
                    checks.forEach(function (check) {
                        check.relatedNodes.forEach(function (node) {
                            node.selector.unshift(frameSelector);
                            node = new utils.DqElement(frameElement, node);
                        });
                    });
                }
            });
        }
        function spliceNodes(target, to) {
            "use strict";
            var firstFromFrame = to[0].node, sorterResult, t;
            for (var i = 0, l = target.length; i < l; i++) {
                t = target[i].node;
                sorterResult = utils.nodeSorter(t.element, firstFromFrame.element);
                if (sorterResult > 0 || sorterResult === 0 && firstFromFrame.selector.length < t.selector.length) {
                    target.splice.apply(target, [i, 0].concat(to));
                    return;
                }
            }
            target.push.apply(target, to);
        }
        function normalizeResult(result) {
            "use strict";
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
        utils.mergeResults = function mergeResults(frameResults) {
            "use strict";
            var result = [];
            frameResults.forEach(function (frameResult) {
                var results = normalizeResult(frameResult);
                if (!results || !results.length) {
                    return;
                }
                results.forEach(function (ruleResult) {
                    if (ruleResult.nodes && frameResult.frame) {
                        pushFrame(ruleResult.nodes, frameResult.frameElement, frameResult.frame);
                    }
                    var res = utils.findBy(result, "id", ruleResult.id);
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
        utils.nodeSorter = function nodeSorter(a, b) {
            "use strict";
            if (a === b) {
                return 0;
            }
            if (a.compareDocumentPosition(b) & 4) {
                return -1;
            }
            return 1;
        };
        utils.publishMetaData = function (ruleResult) {
            "use strict";
            function extender(shouldBeTrue) {
                return function (check) {
                    var sourceData = checksData[check.id] || {};
                    var messages = sourceData.messages || {};
                    var data = utils.extendBlacklist({}, sourceData, ["messages"]);
                    data.message = check.result === shouldBeTrue ? messages.pass : messages.fail;
                    utils.extendMetaData(check, data);
                };
            }
            var checksData = axe._audit.data.checks || {};
            var rulesData = axe._audit.data.rules || {};
            var rule = utils.findBy(axe._audit.rules, "id", ruleResult.id) || {};
            ruleResult.tags = utils.clone(rule.tags || []);
            var shouldBeTrue = extender(true);
            var shouldBeFalse = extender(false);
            ruleResult.nodes.forEach(function (detail) {
                detail.any.forEach(shouldBeTrue);
                detail.all.forEach(shouldBeTrue);
                detail.none.forEach(shouldBeFalse);
            });
            utils.extendMetaData(ruleResult, utils.clone(rulesData[ruleResult.id] || {}));
        };
        (function () {
            "use strict";
            function noop() { }
            function queue() {
                var tasks = [], started = 0, remaining = 0, await = noop;
                function pop() {
                    var length = tasks.length;
                    for (; started < length; started++) {
                        var task = tasks[started], fn = task.shift();
                        task.push(callback(started));
                        fn.apply(null, task);
                    }
                }
                function callback(i) {
                    return function (r) {
                        tasks[i] = r;
                        if (!--remaining) {
                            notify();
                        }
                    };
                }
                function notify() {
                    await(tasks);
                }
                return {
                    defer: function (fn) {
                        tasks.push([fn]);
                        ++remaining;
                        pop();
                    },
                    then: function (f) {
                        await = f;
                        if (!remaining) {
                            notify();
                        }
                    },
                    abort: function (fn) {
                        await = noop;
                        fn(tasks);
                    }
                };
            }
            utils.queue = queue;
        })();
        (function (exports) {
            "use strict";
            var messages = {}, subscribers = {};
            function verify(postedMessage) {
                return typeof postedMessage === "object" && typeof postedMessage.uuid === "string" && postedMessage._respondable === true;
            }
            function post(win, topic, message, uuid, callback) {
                var data = {
                    uuid: uuid,
                    topic: topic,
                    message: message,
                    _respondable: true
                };
                messages[uuid] = callback;
                win.postMessage(JSON.stringify(data), "*");
            }
            function respondable(win, topic, message, callback) {
                var id = uuid.v1();
                post(win, topic, message, id, callback);
            }
            respondable.subscribe = function (topic, callback) {
                subscribers[topic] = callback;
            };
            function publish(event, data) {
                var topic = data.topic, message = data.message, subscriber = subscribers[topic];
                if (subscriber) {
                    subscriber(message, createResponder(event.source, null, data.uuid));
                }
            }
            function createResponder(source, topic, uuid) {
                return function (message, callback) {
                    post(source, topic, message, uuid, callback);
                };
            }
            window.addEventListener("message", function (e) {
                if (typeof e.data !== "string") {
                    return;
                }
                var data;
                try {
                    data = JSON.parse(e.data);
                } catch (ex) { }
                if (!verify(data)) {
                    return;
                }
                var uuid = data.uuid;
                if (messages[uuid]) {
                    messages[uuid](data.message, createResponder(e.source, data.topic, uuid));
                    messages[uuid] = null;
                }
                publish(e, data);
            }, false);
            exports.respondable = respondable;
        })(utils);
        utils.ruleShouldRun = function (rule, context, options) {
            "use strict";
            if (rule.pageLevel && !context.page) {
                return false;
            }
            var runOnly = options.runOnly, ruleOptions = (options.rules || {})[rule.id];
            if (runOnly) {
                if (runOnly.type === "rule") {
                    return runOnly.values.indexOf(rule.id) !== -1;
                }
                return !!(runOnly.values || []).filter(function (item) {
                    return rule.tags.indexOf(item) !== -1;
                }).length;
            }
            if (ruleOptions && ruleOptions.hasOwnProperty("enabled") ? !ruleOptions.enabled : !rule.enabled) {
                return false;
            }
            return true;
        };
        function getDeepest(collection) {
            "use strict";
            return collection.sort(function (a, b) {
                if (utils.contains(a, b)) {
                    return 1;
                }
                return -1;
            })[0];
        }
        function isNodeInContext(node, context) {
            "use strict";
            var include = context.include && getDeepest(context.include.filter(function (candidate) {
                return utils.contains(candidate, node);
            }));
            var exclude = context.exclude && getDeepest(context.exclude.filter(function (candidate) {
                return utils.contains(candidate, node);
            }));
            if (!exclude && include || exclude && utils.contains(exclude, include)) {
                return true;
            }
            return false;
        }
        function pushNode(result, nodes, context) {
            "use strict";
            for (var i = 0, l = nodes.length; i < l; i++) {
                if (result.indexOf(nodes[i]) === -1 && isNodeInContext(nodes[i], context)) {
                    result.push(nodes[i]);
                }
            }
        }
        utils.select = function select(selector, context) {
            "use strict";
            var result = [], candidate;
            for (var i = 0, l = context.include.length; i < l; i++) {
                candidate = context.include[i];
                if (candidate.nodeType === candidate.ELEMENT_NODE && utils.matchesSelector(candidate, selector)) {
                    pushNode(result, [candidate], context);
                }
                pushNode(result, candidate.querySelectorAll(selector), context);
            }
            return result.sort(utils.nodeSorter);
        };
        utils.toArray = function (thing) {
            "use strict";
            return Array.prototype.slice.call(thing);
        };
        axe._load({
            data: {
                rules: {
                    accesskeys: {
                        description: "Ensures every accesskey attribute value is unique",
                        help: "accesskey attribute value must be unique",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/accesskeys"
                    },
                    "area-alt": {
                        description: "Ensures <area> elements of image maps have alternate text",
                        help: "Active <area> elements must have alternate text",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/area-alt"
                    },
                    "aria-allowed-attr": {
                        description: "Ensures ARIA attributes are allowed for an element's role",
                        help: "Elements must only use allowed ARIA attributes",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/aria-allowed-attr"
                    },
                    "aria-required-attr": {
                        description: "Ensures elements with ARIA roles have all required ARIA attributes",
                        help: "Required ARIA attributes must be provided",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/aria-required-attr"
                    },
                    "aria-required-children": {
                        description: "Ensures elements with an ARIA role that require child roles contain them",
                        help: "Certain ARIA roles must contain particular children",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/aria-required-children"
                    },
                    "aria-required-parent": {
                        description: "Ensures elements with an ARIA role that require parent roles are contained by them",
                        help: "Certain ARIA roles must be contained by particular parents",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/aria-required-parent"
                    },
                    "aria-roles": {
                        description: "Ensures all elements with a role attribute use a valid value",
                        help: "ARIA roles used must conform to valid values",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/aria-roles"
                    },
                    "aria-valid-attr-value": {
                        description: "Ensures all ARIA attributes have valid values",
                        help: "ARIA attributes must conform to valid values",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/aria-valid-attr-value"
                    },
                    "aria-valid-attr": {
                        description: "Ensures attributes that begin with aria- are valid ARIA attributes",
                        help: "ARIA attributes must conform to valid names",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/aria-valid-attr"
                    },
                    "audio-caption": {
                        description: "Ensures <audio> elements have captions",
                        help: "<audio> elements must have a captions track",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/audio-caption"
                    },
                    blink: {
                        description: "Ensures <blink> elements are not used",
                        help: "<blink> elements are deprecated and must not be used",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/blink"
                    },
                    "button-name": {
                        description: "Ensures buttons have discernible text",
                        help: "Buttons must have discernible text",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/button-name"
                    },
                    bypass: {
                        description: "Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content",
                        help: "Page must have means to bypass repeated blocks",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/bypass"
                    },
                    checkboxgroup: {
                        description: 'Ensures related <input type="checkbox"> elements have a group and that that group designation is consistent',
                        help: "Checkbox inputs with the same name attribute value must be part of a group",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/checkboxgroup"
                    },
                    "color-contrast": {
                        description: "Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds",
                        help: "Elements must have sufficient color contrast",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/color-contrast"
                    },
                    "data-table": {
                        description: "Ensures data tables are marked up semantically and have the correct header structure",
                        help: "Data tables should be marked up properly",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/data-table"
                    },
                    "definition-list": {
                        description: "Ensures <dl> elements are structured correctly",
                        help: "<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script> or <template> elements",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/definition-list"
                    },
                    dlitem: {
                        description: "Ensures <dt> and <dd> elements are contained by a <dl>",
                        help: "<dt> and <dd> elements must be contained by a <dl>",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/dlitem"
                    },
                    "document-title": {
                        description: "Ensures each HTML document contains a non-empty <title> element",
                        help: "Documents must have <title> element to aid in navigation",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/document-title"
                    },
                    "duplicate-id": {
                        description: "Ensures every id attribute value is unique",
                        help: "id attribute value must be unique",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/duplicate-id"
                    },
                    "empty-heading": {
                        description: "Ensures headings have discernible text",
                        help: "Headings must not be empty",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/empty-heading"
                    },
                    "frame-title": {
                        description: "Ensures <iframe> and <frame> elements contain a unique and non-empty title attribute",
                        help: "Frames must have unique title attribute",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/frame-title"
                    },
                    "heading-order": {
                        description: "Ensures the order of headings is semantically correct",
                        help: "Heading levels should only increase by one",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/heading-order"
                    },
                    "html-lang": {
                        description: "Ensures every HTML document has a lang attribute and its value is valid",
                        help: "<html> element must have a valid lang attribute",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/html-lang"
                    },
                    "image-alt": {
                        description: "Ensures <img> elements have alternate text or a role of none or presentation",
                        help: "Images must have alternate text",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/image-alt"
                    },
                    "input-image-alt": {
                        description: 'Ensures <input type="image"> elements have alternate text',
                        help: "Image buttons must have alternate text",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/input-image-alt"
                    },
                    "label-title-only": {
                        description: "Ensures that every form element is not solely labeled using the title or aria-describedby attributes",
                        help: "Form elements should have a visible label",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/label-title-only"
                    },
                    label: {
                        description: "Ensures every form element has a label",
                        help: "Form elements must have labels",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/label"
                    },
                    "layout-table": {
                        description: "Ensures presentational <table> elements do not use <th>, <caption> elements or the summary attribute",
                        help: "Layout tables must not use data table elements",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/layout-table"
                    },
                    "link-name": {
                        description: "Ensures links have discernible text",
                        help: "Links must have discernible text",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/link-name"
                    },
                    list: {
                        description: "Ensures that lists are structured correctly",
                        help: "<ul> and <ol> must only directly contain <li>, <script> or <template> elements",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/list"
                    },
                    listitem: {
                        description: "Ensures <li> elements are used semantically",
                        help: "<li> elements must be contained in a <ul> or <ol>",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/listitem"
                    },
                    marquee: {
                        description: "Ensures <marquee> elements are not used",
                        help: "<marquee> elements are deprecated and must not be used",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/marquee"
                    },
                    "meta-refresh": {
                        description: 'Ensures <meta http-equiv="refresh"> is not used',
                        help: "Timed refresh must not exist",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/meta-refresh"
                    },
                    "meta-viewport": {
                        description: 'Ensures <meta name="viewport"> does not disable text scaling and zooming',
                        help: "Zooming and scaling must not be disabled",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/meta-viewport"
                    },
                    "object-alt": {
                        description: "Ensures <object> elements have alternate text",
                        help: "<object> elements must have alternate text",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/object-alt"
                    },
                    radiogroup: {
                        description: 'Ensures related <input type="radio"> elements have a group and that the group designation is consistent',
                        help: "Radio inputs with the same name attribute value must be part of a group",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/radiogroup"
                    },
                    region: {
                        description: "Ensures all content is contained within a landmark region",
                        help: "Content should be contained in a landmark region",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/region"
                    },
                    scope: {
                        description: "Ensures the scope attribute is used correctly on tables",
                        help: "scope attribute should be used correctly",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/scope"
                    },
                    "server-side-image-map": {
                        description: "Ensures that server-side image maps are not used",
                        help: "Server-side image maps must not be used",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/server-side-image-map"
                    },
                    "skip-link": {
                        description: "Ensures the first link on the page is a skip link",
                        help: "The page should have a skip link as its first link",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/skip-link"
                    },
                    tabindex: {
                        description: "Ensures tabindex attribute values are not greater than 0",
                        help: "Elements should not have tabindex greater than zero",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/tabindex"
                    },
                    "valid-lang": {
                        description: "Ensures lang attributes have valid values",
                        help: "lang attribute must have a valid value",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/valid-lang"
                    },
                    "video-caption": {
                        description: "Ensures <video> elements have captions",
                        help: "<video> elements must have captions",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/video-caption"
                    },
                    "video-description": {
                        description: "Ensures <video> elements have audio descriptions",
                        help: "<video> elements must have an audio description track",
                        helpUrl: "https://dequeuniversity.com/rules/axe/1.1/video-description"
                    }
                },
                checks: {
                    accesskeys: {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Accesskey attribute value is unique";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Document has multiple elements with the same accesskey";
                                return out;
                            }
                        }
                    },
                    "non-empty-alt": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Element has a non-empty alt attribute";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Element has no alt attribute or the alt attribute is empty";
                                return out;
                            }
                        }
                    },
                    "aria-label": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "aria-label attribute exists and is not empty";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "aria-label attribute does not exist or is empty";
                                return out;
                            }
                        }
                    },
                    "aria-labelledby": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "aria-labelledby attribute exists and references elements that are visible to screen readers";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty or not visible";
                                return out;
                            }
                        }
                    },
                    "aria-allowed-attr": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "ARIA attributes are used correctly for the defined role";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "ARIA attribute" + (it.data && it.data.length > 1 ? "s are" : " is") + " not allowed:";
                                var arr1 = it.data;
                                if (arr1) {
                                    var value, i1 = -1, l1 = arr1.length - 1;
                                    while (i1 < l1) {
                                        value = arr1[i1 += 1];
                                        out += " " + value;
                                    }
                                }
                                return out;
                            }
                        }
                    },
                    "aria-required-attr": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "All required ARIA attributes are present";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Required ARIA attribute" + (it.data && it.data.length > 1 ? "s" : "") + " not present:";
                                var arr1 = it.data;
                                if (arr1) {
                                    var value, i1 = -1, l1 = arr1.length - 1;
                                    while (i1 < l1) {
                                        value = arr1[i1 += 1];
                                        out += " " + value;
                                    }
                                }
                                return out;
                            }
                        }
                    },
                    "aria-required-children": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Required ARIA children are present";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Required ARIA " + (it.data && it.data.length > 1 ? "children" : "child") + " role not present:";
                                var arr1 = it.data;
                                if (arr1) {
                                    var value, i1 = -1, l1 = arr1.length - 1;
                                    while (i1 < l1) {
                                        value = arr1[i1 += 1];
                                        out += " " + value;
                                    }
                                }
                                return out;
                            }
                        }
                    },
                    "aria-required-parent": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Required ARIA parent role present";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Required ARIA parent" + (it.data && it.data.length > 1 ? "s" : "") + " role not present:";
                                var arr1 = it.data;
                                if (arr1) {
                                    var value, i1 = -1, l1 = arr1.length - 1;
                                    while (i1 < l1) {
                                        value = arr1[i1 += 1];
                                        out += " " + value;
                                    }
                                }
                                return out;
                            }
                        }
                    },
                    invalidrole: {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "ARIA role is valid";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Role must be one of the valid ARIA roles";
                                return out;
                            }
                        }
                    },
                    abstractrole: {
                        impact: "serious",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Abstract roles are not used";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Abstract roles cannot be directly used";
                                return out;
                            }
                        }
                    },
                    "aria-valid-attr-value": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "ARIA attribute values are valid";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Invalid ARIA attribute value" + (it.data && it.data.length > 1 ? "s" : "") + ":";
                                var arr1 = it.data;
                                if (arr1) {
                                    var value, i1 = -1, l1 = arr1.length - 1;
                                    while (i1 < l1) {
                                        value = arr1[i1 += 1];
                                        out += " " + value;
                                    }
                                }
                                return out;
                            }
                        }
                    },
                    "aria-valid-attr": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "ARIA attribute name" + (it.data && it.data.length > 1 ? "s" : "") + " are valid";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Invalid ARIA attribute name" + (it.data && it.data.length > 1 ? "s" : "") + ":";
                                var arr1 = it.data;
                                if (arr1) {
                                    var value, i1 = -1, l1 = arr1.length - 1;
                                    while (i1 < l1) {
                                        value = arr1[i1 += 1];
                                        out += " " + value;
                                    }
                                }
                                return out;
                            }
                        }
                    },
                    caption: {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "The multimedia element has a captions track";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "The multimedia element does not have a captions track";
                                return out;
                            }
                        }
                    },
                    exists: {
                        impact: "minor",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Element does not exist";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Element exists";
                                return out;
                            }
                        }
                    },
                    "non-empty-if-present": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Element ";
                                if (it.data) {
                                    out += "has a non-empty value attribute";
                                } else {
                                    out += "does not have a value attribute";
                                }
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Element has a value attribute and the value attribute is empty";
                                return out;
                            }
                        }
                    },
                    "non-empty-value": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Element has a non-empty value attribute";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Element has no value attribute or the value attribute is empty";
                                return out;
                            }
                        }
                    },
                    "button-has-visible-text": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Element has inner text that is visible to screen readers";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Element does not have inner text that is visible to screen readers";
                                return out;
                            }
                        }
                    },
                    "role-presentation": {
                        impact: "moderate",
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
                    "role-none": {
                        impact: "moderate",
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
                    "duplicate-img-label": {
                        impact: "minor",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Element does not duplicate existing text in <img> alt text";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Element contains <img> element with alt text that duplicates existing text";
                                return out;
                            }
                        }
                    },
                    "focusable-no-name": {
                        impact: "serious",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Element is not in tab order or has accessible text";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Element is in tab order and does not have accessible text";
                                return out;
                            }
                        }
                    },
                    "internal-link-present": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Valid skip link found";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "No valid skip link found";
                                return out;
                            }
                        }
                    },
                    "header-present": {
                        impact: "moderate",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Page has a header";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Page does not have a header";
                                return out;
                            }
                        }
                    },
                    landmark: {
                        impact: "serious",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Page has a landmark region";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Page does not have a landmark region";
                                return out;
                            }
                        }
                    },
                    "group-labelledby": {
                        impact: "critical",
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
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Element is contained in a fieldset";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "";
                                var code = it.data && it.data.failureCode;
                                if (code === "no-legend") {
                                    out += "Fieldset does not have a legend as its first child";
                                } else {
                                    if (code === "empty-legend") {
                                        out += "Legend does not have text that is visible to screen readers";
                                    } else {
                                        if (code === "mixed-inputs") {
                                            out += "Fieldset contains unrelated inputs";
                                        } else {
                                            if (code === "no-group-label") {
                                                out += "ARIA group does not have aria-label or aria-labelledby";
                                            } else {
                                                if (code === "group-mixed-inputs") {
                                                    out += "ARIA group contains unrelated inputs";
                                                } else {
                                                    out += "Element does not have a containing fieldset or ARIA group";
                                                }
                                            }
                                        }
                                    }
                                }
                                return out;
                            }
                        }
                    },
                    "color-contrast": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "";
                                if (it.data && it.data.contrastRatio) {
                                    out += "Element has sufficient color contrast of " + it.data.contrastRatio;
                                } else {
                                    out += "Unable to determine contrast ratio";
                                }
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Element has insufficient color contrast of " + it.data.contrastRatio + " (foreground color: " + it.data.fgColor + ", background color: " + it.data.bgColor + ", font size: " + it.data.fontSize + ", font weight: " + it.data.fontWeight + ")";
                                return out;
                            }
                        }
                    },
                    "consistent-columns": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Table has consistent column widths";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Table does not have the same number of columns in every row";
                                return out;
                            }
                        }
                    },
                    "cell-no-header": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "All data cells have table headers";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Some data cells do not have table headers";
                                return out;
                            }
                        }
                    },
                    "headers-visible-text": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Header cell has visible text";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Header cell does not have visible text";
                                return out;
                            }
                        }
                    },
                    "headers-attr-reference": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "headers attribute references elements that are visible to screen readers";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "headers attribute references element that is not visible to screen readers";
                                return out;
                            }
                        }
                    },
                    "th-scope": {
                        impact: "serious",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "<th> elements use scope attribute";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "<th> elements must use scope attribute";
                                return out;
                            }
                        }
                    },
                    "no-caption": {
                        impact: "serious",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Table has a <caption>";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Table does not have a <caption>";
                                return out;
                            }
                        }
                    },
                    "th-headers-attr": {
                        impact: "serious",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "<th> elements do not use headers attribute";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "<th> elements should not use headers attribute";
                                return out;
                            }
                        }
                    },
                    "th-single-row-column": {
                        impact: "serious",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "<th> elements are used when there is only a single row and single column of headers";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "<th> elements should only be used when there is a single row and single column of headers";
                                return out;
                            }
                        }
                    },
                    "same-caption-summary": {
                        impact: "moderate",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Content of summary attribute and <caption> are not duplicated";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Content of summary attribute and <caption> element are indentical";
                                return out;
                            }
                        }
                    },
                    rowspan: {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Table does not have cells with rowspan attribute greater than 1";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Table has cells whose rowspan attribute is not equal to 1";
                                return out;
                            }
                        }
                    },
                    "structured-dlitems": {
                        impact: "serious",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "When not empty, element has both <dt> and <dd> elements";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "When not empty, element does not have at least one <dt> element followed by at least one <dd> element";
                                return out;
                            }
                        }
                    },
                    "only-dlitems": {
                        impact: "serious",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Element only has children that are <dt> or <dd> elements";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Element has children that are not <dt> or <dd> elements";
                                return out;
                            }
                        }
                    },
                    dlitem: {
                        impact: "serious",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Description list item has a <dl> parent element";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Description list item does not have a <dl> parent element";
                                return out;
                            }
                        }
                    },
                    "doc-has-title": {
                        impact: "moderate",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Document has a non-empty <title> element";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Document does not have a non-empty <title> element";
                                return out;
                            }
                        }
                    },
                    "duplicate-id": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Document has no elements that share the same id attribute";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Document has multiple elements with the same id attribute: " + it.data;
                                return out;
                            }
                        }
                    },
                    "has-visible-text": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Element has text that is visible to screen readers";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Element does not have text that is visible to screen readers";
                                return out;
                            }
                        }
                    },
                    "non-empty-title": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Element has a title attribute";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Element has no title attribute or the title attribute is empty";
                                return out;
                            }
                        }
                    },
                    "unique-frame-title": {
                        impact: "serious",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Element's title attribute is unique";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Element's title attribute is not unique";
                                return out;
                            }
                        }
                    },
                    "heading-order": {
                        impact: "minor",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Heading order valid";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Heading order invalid";
                                return out;
                            }
                        }
                    },
                    "has-lang": {
                        impact: "serious",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "The <html> element has a lang attribute";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "The <html> element does not have a lang attribute";
                                return out;
                            }
                        }
                    },
                    "valid-lang": {
                        impact: "serious",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Value of lang attribute is included in the list of valid languages";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Value of lang attribute not included in the list of valid languages";
                                return out;
                            }
                        }
                    },
                    "has-alt": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Element has an alt attribute";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Element does not have an alt attribute";
                                return out;
                            }
                        }
                    },
                    "title-only": {
                        impact: "serious",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Form element does not solely use title attribute for its label";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Only title used to generate label for form element";
                                return out;
                            }
                        }
                    },
                    "implicit-label": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Form element has an implicit (wrapped) <label>";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Form element does not have an implicit (wrapped) <label>";
                                return out;
                            }
                        }
                    },
                    "explicit-label": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Form element has an explicit <label>";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Form element does not have an explicit <label>";
                                return out;
                            }
                        }
                    },
                    "help-same-as-label": {
                        impact: "minor",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Help text (title or aria-describedby) does not duplicate label text";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Help text (title or aria-describedby) text is the same as the label text";
                                return out;
                            }
                        }
                    },
                    "multiple-label": {
                        impact: "serious",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Form element does not have multiple <label> elements";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Form element has multiple <label> elements";
                                return out;
                            }
                        }
                    },
                    "has-th": {
                        impact: "serious",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Layout table does not use <th> elements";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Layout table uses <th> elements";
                                return out;
                            }
                        }
                    },
                    "has-caption": {
                        impact: "serious",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Layout table does not use <caption> element";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Layout table uses <caption> element";
                                return out;
                            }
                        }
                    },
                    "has-summary": {
                        impact: "serious",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Layout table does not use summary attribute";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Layout table uses summary attribute";
                                return out;
                            }
                        }
                    },
                    "only-listitems": {
                        impact: "serious",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "List element only has children that are <li>, <script> or <template> elements";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "List element has children that are not <li>, <script> or <template> elements";
                                return out;
                            }
                        }
                    },
                    listitem: {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "List item has a <ul> or <ol> parent element";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "List item does not have a <ul> or <ol> parent element";
                                return out;
                            }
                        }
                    },
                    "meta-refresh": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "<meta> tag does not immediately refresh the page";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "<meta> tag forces timed refresh of page";
                                return out;
                            }
                        }
                    },
                    "meta-viewport": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "<meta> tag does not disable zooming";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "<meta> tag disables zooming";
                                return out;
                            }
                        }
                    },
                    region: {
                        impact: "moderate",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Content contained by ARIA landmark";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Content not contained by an ARIA landmark";
                                return out;
                            }
                        }
                    },
                    "html5-scope": {
                        impact: "serious",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Scope attribute is only used on table header elements (<th>)";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "In HTML 5, scope attributes may only be used on table header elements (<th>)";
                                return out;
                            }
                        }
                    },
                    "html4-scope": {
                        impact: "serious",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Scope attribute is only used on table cell elements (<th> and <td>)";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "In HTML 4, the scope attribute may only be used on table cell elements (<th> and <td>)";
                                return out;
                            }
                        }
                    },
                    "scope-value": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Scope attribute is used correctly";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "The value of the scope attribute may only be 'row' or 'col'";
                                return out;
                            }
                        }
                    },
                    "skip-link": {
                        impact: "critical",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Valid skip link found";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "No valid skip link found";
                                return out;
                            }
                        }
                    },
                    tabindex: {
                        impact: "serious",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "Element does not have a tabindex greater than 0";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "Element has a tabindex greater than 0";
                                return out;
                            }
                        }
                    },
                    description: {
                        impact: "serious",
                        messages: {
                            pass: function anonymous(it) {
                                var out = "The multimedia element has an audio description track";
                                return out;
                            },
                            fail: function anonymous(it) {
                                var out = "The multimedia element does not have an audio description track";
                                return out;
                            }
                        }
                    }
                },
                failureSummaries: {
                    any: {
                        failureMessage: function anonymous(it) {
                            var out = "Fix any of the following:";
                            var arr1 = it;
                            if (arr1) {
                                var value, i1 = -1, l1 = arr1.length - 1;
                                while (i1 < l1) {
                                    value = arr1[i1 += 1];
                                    out += "\n  " + value.split("\n").join("\n  ");
                                }
                            }
                            return out;
                        }
                    },
                    none: {
                        failureMessage: function anonymous(it) {
                            var out = "Fix all of the following:";
                            var arr1 = it;
                            if (arr1) {
                                var value, i1 = -1, l1 = arr1.length - 1;
                                while (i1 < l1) {
                                    value = arr1[i1 += 1];
                                    out += "\n  " + value.split("\n").join("\n  ");
                                }
                            }
                            return out;
                        }
                    }
                }
            },
            rules: [{
                id: "accesskeys",
                selector: "[accesskey]",
                tags: ["wcag2a", "wcag211"],
                all: [],
                any: [],
                none: ["accesskeys"]
            }, {
                id: "area-alt",
                selector: "map area[href]",
                excludeHidden: false,
                tags: ["wcag2a", "wcag111", "section508", "section508a"],
                all: [],
                any: ["non-empty-alt", "aria-label", "aria-labelledby"],
                none: []
            }, {
                id: "aria-allowed-attr",
                tags: ["wcag2a", "wcag411"],
                all: [],
                any: ["aria-allowed-attr"],
                none: []
            }, {
                id: "aria-required-attr",
                selector: "[role]",
                tags: ["wcag2a", "wcag411"],
                all: [],
                any: ["aria-required-attr"],
                none: []
            }, {
                id: "aria-required-children",
                selector: "[role]",
                tags: ["wcag2a", "wcag411"],
                all: [],
                any: ["aria-required-children"],
                none: []
            }, {
                id: "aria-required-parent",
                selector: "[role]",
                tags: ["wcag2a", "wcag411"],
                all: [],
                any: ["aria-required-parent"],
                none: []
            }, {
                id: "aria-roles",
                selector: "[role]",
                tags: ["wcag2a", "wcag411"],
                all: [],
                any: [],
                none: ["invalidrole", "abstractrole"]
            }, {
                id: "aria-valid-attr-value",
                tags: ["wcag2a", "wcag411"],
                all: [],
                any: [{
                    options: [],
                    id: "aria-valid-attr-value"
                }],
                none: []
            }, {
                id: "aria-valid-attr",
                tags: ["wcag2a", "wcag411"],
                all: [],
                any: [{
                    options: [],
                    id: "aria-valid-attr"
                }],
                none: []
            }, {
                id: "audio-caption",
                selector: "audio",
                excludeHidden: false,
                tags: ["wcag2a", "wcag122", "section508", "section508a"],
                all: [],
                any: [],
                none: ["caption"]
            }, {
                id: "blink",
                selector: "blink",
                tags: ["wcag2a", "wcag222"],
                all: [],
                any: [],
                none: ["exists"]
            }, {
                id: "button-name",
                selector: 'button, [role="button"], input[type="button"], input[type="submit"], input[type="reset"]',
                tags: ["wcag2a", "wcag412", "section508", "section508a"],
                all: [],
                any: ["non-empty-if-present", "non-empty-value", "button-has-visible-text", "aria-label", "aria-labelledby", "role-presentation", "role-none"],
                none: ["duplicate-img-label", "focusable-no-name"]
            }, {
                id: "bypass",
                selector: "html",
                pageLevel: true,
                matches: function (node) {
                    return !!node.querySelector("a[href]");
                },
                tags: ["wcag2a", "wcag241", "section508", "section508o"],
                all: [],
                any: ["internal-link-present", "header-present", "landmark"],
                none: []
            }, {
                id: "checkboxgroup",
                selector: "input[type=checkbox][name]",
                tags: ["wcag2a", "wcag131"],
                all: [],
                any: ["group-labelledby", "fieldset"],
                none: []
            }, {
                id: "color-contrast",
                selector: "*",
                tags: ["wcag2aa", "wcag143"],
                all: [],
                any: ["color-contrast"],
                none: []
            }, {
                id: "data-table",
                selector: "table",
                matches: function (node) {
                    return commons.table.isDataTable(node);
                },
                tags: ["wcag2a", "wcag131"],
                all: [],
                any: ["consistent-columns"],
                none: ["cell-no-header", "headers-visible-text", "headers-attr-reference", "th-scope", "no-caption", "th-headers-attr", "th-single-row-column", "same-caption-summary", "rowspan"]
            }, {
                id: "definition-list",
                selector: "dl",
                tags: ["wcag2a", "wcag131"],
                all: [],
                any: [],
                none: ["structured-dlitems", "only-dlitems"]
            }, {
                id: "dlitem",
                selector: "dd, dt",
                tags: ["wcag2a", "wcag131"],
                all: [],
                any: ["dlitem"],
                none: []
            }, {
                id: "document-title",
                selector: "html",
                tags: ["wcag2a", "wcag242"],
                all: [],
                any: ["doc-has-title"],
                none: []
            }, {
                id: "duplicate-id",
                selector: "[id]",
                tags: ["wcag2a", "wcag411"],
                all: [],
                any: ["duplicate-id"],
                none: []
            }, {
                id: "empty-heading",
                selector: 'h1, h2, h3, h4, h5, h6, [role="heading"]',
                tags: ["wcag2a", "wcag131"],
                all: [],
                any: ["has-visible-text", "role-presentation", "role-none"],
                none: []
            }, {
                id: "frame-title",
                selector: "frame, iframe",
                tags: ["wcag2a", "wcag241"],
                all: [],
                any: ["non-empty-title"],
                none: ["unique-frame-title"]
            }, {
                id: "heading-order",
                selector: "h1,h2,h3,h4,h5,h6,[role=heading]",
                enabled: false,
                tags: ["best-practice"],
                all: [],
                any: ["heading-order"],
                none: []
            }, {
                id: "html-lang",
                selector: "html",
                tags: ["wcag2a", "wcag311"],
                all: [],
                any: ["has-lang"],
                none: [{
                    options: ["aa", "ab", "ae", "af", "ak", "am", "an", "ar", "as", "av", "ay", "az", "ba", "be", "bg", "bh", "bi", "bm", "bn", "bo", "br", "bs", "ca", "ce", "ch", "co", "cr", "cs", "cu", "cv", "cy", "da", "de", "dv", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "ff", "fi", "fj", "fo", "fr", "fy", "ga", "gd", "gl", "gn", "gu", "gv", "ha", "he", "hi", "ho", "hr", "ht", "hu", "hy", "hz", "ia", "id", "ie", "ig", "ii", "ik", "in", "io", "is", "it", "iu", "iw", "ja", "ji", "jv", "jw", "ka", "kg", "ki", "kj", "kk", "kl", "km", "kn", "ko", "kr", "ks", "ku", "kv", "kw", "ky", "la", "lb", "lg", "li", "ln", "lo", "lt", "lu", "lv", "mg", "mh", "mi", "mk", "ml", "mn", "mo", "mr", "ms", "mt", "my", "na", "nb", "nd", "ne", "ng", "nl", "nn", "no", "nr", "nv", "ny", "oc", "oj", "om", "or", "os", "pa", "pi", "pl", "ps", "pt", "qu", "rm", "rn", "ro", "ru", "rw", "sa", "sc", "sd", "se", "sg", "sh", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sv", "sw", "ta", "te", "tg", "th", "ti", "tk", "tl", "tn", "to", "tr", "ts", "tt", "tw", "ty", "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "wo", "xh", "yi", "yo", "za", "zh", "zu"],
                    id: "valid-lang"
                }]
            }, {
                id: "image-alt",
                selector: "img",
                tags: ["wcag2a", "wcag111", "section508", "section508a"],
                all: [],
                any: ["has-alt", "aria-label", "aria-labelledby", "non-empty-title", "role-presentation", "role-none"],
                none: []
            }, {
                id: "input-image-alt",
                selector: 'input[type="image"]',
                tags: ["wcag2a", "wcag111", "section508", "section508a"],
                all: [],
                any: ["non-empty-alt", "aria-label", "aria-labelledby"],
                none: []
            }, {
                id: "label-title-only",
                selector: "input:not([type='hidden']):not([type='image']):not([type='button']):not([type='submit']):not([type='reset']), select, textarea",
                enabled: false,
                tags: ["best-practice"],
                all: [],
                any: [],
                none: ["title-only"]
            }, {
                id: "label",
                selector: "input:not([type='hidden']):not([type='image']):not([type='button']):not([type='submit']):not([type='reset']), select, textarea",
                tags: ["wcag2a", "wcag332", "wcag131", "section508", "section508n"],
                all: [],
                any: ["aria-label", "aria-labelledby", "implicit-label", "explicit-label", "non-empty-title"],
                none: ["help-same-as-label", "multiple-label"]
            }, {
                id: "layout-table",
                selector: "table",
                matches: function (node) {
                    return !commons.table.isDataTable(node);
                },
                tags: ["wcag2a", "wcag131"],
                all: [],
                any: [],
                none: ["has-th", "has-caption", "has-summary"]
            }, {
                id: "link-name",
                selector: 'a[href]:not([role="button"]), [role=link][href]',
                tags: ["wcag2a", "wcag111", "wcag412", "section508", "section508a"],
                all: [],
                any: ["has-visible-text", "aria-label", "aria-labelledby", "role-presentation", "role-none"],
                none: ["duplicate-img-label", "focusable-no-name"]
            }, {
                id: "list",
                selector: "ul, ol",
                tags: ["wcag2a", "wcag131"],
                all: [],
                any: [],
                none: ["only-listitems"]
            }, {
                id: "listitem",
                selector: "li",
                tags: ["wcag2a", "wcag131"],
                all: [],
                any: ["listitem"],
                none: []
            }, {
                id: "marquee",
                selector: "marquee",
                tags: ["wcag2a", "wcag222", "section508", "section508j"],
                all: [],
                any: [],
                none: ["exists"]
            }, {
                id: "meta-refresh",
                selector: 'meta[http-equiv="refresh"]',
                excludeHidden: false,
                tags: ["wcag2a", "wcag2aaa", "wcag221", "wcag224", "wcag325"],
                all: [],
                any: ["meta-refresh"],
                none: []
            }, {
                id: "meta-viewport",
                selector: 'meta[name="viewport"]',
                excludeHidden: false,
                tags: ["wcag2aa", "wcag144"],
                all: [],
                any: ["meta-viewport"],
                none: []
            }, {
                id: "object-alt",
                selector: "object",
                tags: ["wcag2a", "wcag111"],
                all: [],
                any: ["has-visible-text"],
                none: []
            }, {
                id: "radiogroup",
                selector: "input[type=radio][name]",
                tags: ["wcag2a", "wcag131"],
                all: [],
                any: ["group-labelledby", "fieldset"],
                none: []
            }, {
                id: "region",
                selector: "html",
                pageLevel: true,
                enabled: false,
                tags: ["best-practice"],
                all: [],
                any: ["region"],
                none: []
            }, {
                id: "scope",
                selector: "[scope]",
                enabled: false,
                tags: ["best-practice"],
                all: [],
                any: ["html5-scope", "html4-scope"],
                none: ["scope-value"]
            }, {
                id: "server-side-image-map",
                selector: "img[ismap]",
                tags: ["wcag2a", "wcag211", "section508", "section508f"],
                all: [],
                any: [],
                none: ["exists"]
            }, {
                id: "skip-link",
                selector: "a[href]",
                pageLevel: true,
                enabled: false,
                tags: ["best-practice"],
                all: [],
                any: ["skip-link"],
                none: []
            }, {
                id: "tabindex",
                selector: "[tabindex]",
                tags: ["best-practice"],
                all: [],
                any: ["tabindex"],
                none: []
            }, {
                id: "valid-lang",
                selector: "[lang]:not(html), [xml\\:lang]:not(html)",
                tags: ["wcag2aa", "wcag312"],
                all: [],
                any: [],
                none: [{
                    options: ["aa", "ab", "ae", "af", "ak", "am", "an", "ar", "as", "av", "ay", "az", "ba", "be", "bg", "bh", "bi", "bm", "bn", "bo", "br", "bs", "ca", "ce", "ch", "co", "cr", "cs", "cu", "cv", "cy", "da", "de", "dv", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "ff", "fi", "fj", "fo", "fr", "fy", "ga", "gd", "gl", "gn", "gu", "gv", "ha", "he", "hi", "ho", "hr", "ht", "hu", "hy", "hz", "ia", "id", "ie", "ig", "ii", "ik", "in", "io", "is", "it", "iu", "iw", "ja", "ji", "jv", "jw", "ka", "kg", "ki", "kj", "kk", "kl", "km", "kn", "ko", "kr", "ks", "ku", "kv", "kw", "ky", "la", "lb", "lg", "li", "ln", "lo", "lt", "lu", "lv", "mg", "mh", "mi", "mk", "ml", "mn", "mo", "mr", "ms", "mt", "my", "na", "nb", "nd", "ne", "ng", "nl", "nn", "no", "nr", "nv", "ny", "oc", "oj", "om", "or", "os", "pa", "pi", "pl", "ps", "pt", "qu", "rm", "rn", "ro", "ru", "rw", "sa", "sc", "sd", "se", "sg", "sh", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sv", "sw", "ta", "te", "tg", "th", "ti", "tk", "tl", "tn", "to", "tr", "ts", "tt", "tw", "ty", "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "wo", "xh", "yi", "yo", "za", "zh", "zu"],
                    id: "valid-lang"
                }]
            }, {
                id: "video-caption",
                selector: "video",
                tags: ["wcag2a", "wcag122", "wcag123", "section508", "section508a"],
                all: [],
                any: [],
                none: ["caption"]
            }, {
                id: "video-description",
                selector: "video",
                tags: ["wcag2aa", "wcag125", "section508", "section508a"],
                all: [],
                any: [],
                none: ["description"]
            }],
            checks: [{
                id: "abstractrole",
                evaluate: function (node, options) {
                    return commons.aria.getRoleType(node.getAttribute("role")) === "abstract";
                }
            }, {
                id: "aria-allowed-attr",
                matches: function (node) {
                    var role = node.getAttribute("role");
                    if (!role) {
                        role = commons.aria.implicitRole(node);
                    }
                    var allowed = commons.aria.allowedAttr(role);
                    if (role && allowed) {
                        var aria = /^aria-/;
                        if (node.hasAttributes()) {
                            var attrs = node.attributes;
                            for (var i = 0, l = attrs.length; i < l; i++) {
                                if (aria.test(attrs[i].nodeName)) {
                                    return true;
                                }
                            }
                        }
                    }
                    return false;
                },
                evaluate: function (node, options) {
                    var invalid = [];
                    var attr, attrName, allowed, role = node.getAttribute("role"), attrs = node.attributes;
                    if (!role) {
                        role = commons.aria.implicitRole(node);
                    }
                    allowed = commons.aria.allowedAttr(role);
                    if (role && allowed) {
                        for (var i = 0, l = attrs.length; i < l; i++) {
                            attr = attrs[i];
                            attrName = attr.nodeName;
                            if (commons.aria.validateAttr(attrName) && allowed.indexOf(attrName) === -1) {
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
                id: "invalidrole",
                evaluate: function (node, options) {
                    return !commons.aria.isValidRole(node.getAttribute("role"));
                }
            }, {
                id: "aria-required-attr",
                evaluate: function (node, options) {
                    var missing = [];
                    if (node.hasAttributes()) {
                        var attr, role = node.getAttribute("role"), required = commons.aria.requiredAttr(role);
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
                id: "aria-required-children",
                evaluate: function (node, options) {
                    var requiredOwned = commons.aria.requiredOwned, implicitNodes = commons.aria.implicitNodes, matchesSelector = commons.utils.matchesSelector, idrefs = commons.dom.idrefs;
                    function owns(node, role, ariaOwned) {
                        if (node === null) {
                            return false;
                        }
                        var implicit = implicitNodes(role), selector = ['[role="' + role + '"]'];
                        if (implicit) {
                            selector = selector.concat(implicit);
                        }
                        selector = selector.join(",");
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
                    function missingRequiredChildren(node, childRoles, all) {
                        var i, l = childRoles.length, missing = [], ownedElements = idrefs(node, "aria-owns");
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
                        if (missing.length) {
                            return missing;
                        }
                        if (!all && childRoles.length) {
                            return childRoles;
                        }
                        return null;
                    }
                    var role = node.getAttribute("role");
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
                    var missing = missingRequiredChildren(node, childRoles, all);
                    if (!missing) {
                        return true;
                    }
                    this.data(missing);
                    return false;
                }
            }, {
                id: "aria-required-parent",
                evaluate: function (node, options) {
                    function getSelector(role) {
                        var impliedNative = commons.aria.implicitNodes(role) || [];
                        return impliedNative.concat('[role="' + role + '"]').join(",");
                    }
                    function getMissingContext(element, requiredContext, includeElement) {
                        var index, length, role = element.getAttribute("role"), missing = [];
                        if (!requiredContext) {
                            requiredContext = commons.aria.requiredContext(role);
                        }
                        if (!requiredContext) {
                            return null;
                        }
                        for (index = 0, length = requiredContext.length; index < length; index++) {
                            if (includeElement && commons.utils.matchesSelector(element, getSelector(requiredContext[index]))) {
                                return null;
                            }
                            if (commons.dom.findUp(element, getSelector(requiredContext[index]))) {
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
                            if (element.id) {
                                o = document.querySelector("[aria-owns~=" + commons.utils.escapeSelector(element.id) + "]");
                                if (o) {
                                    owners.push(o);
                                }
                            }
                            element = element.parentNode;
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
                id: "aria-valid-attr-value",
                matches: function (node) {
                    var aria = /^aria-/;
                    if (node.hasAttributes()) {
                        var attrs = node.attributes;
                        for (var i = 0, l = attrs.length; i < l; i++) {
                            if (aria.test(attrs[i].nodeName)) {
                                return true;
                            }
                        }
                    }
                    return false;
                },
                evaluate: function (node, options) {
                    options = Array.isArray(options) ? options : [];
                    var invalid = [], aria = /^aria-/;
                    var attr, attrName, attrs = node.attributes;
                    for (var i = 0, l = attrs.length; i < l; i++) {
                        attr = attrs[i];
                        attrName = attr.nodeName;
                        if (options.indexOf(attrName) === -1 && aria.test(attrName) && !commons.aria.validateAttrValue(node, attrName)) {
                            invalid.push(attrName + '="' + attr.nodeValue + '"');
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
                id: "aria-valid-attr",
                matches: function (node) {
                    var aria = /^aria-/;
                    if (node.hasAttributes()) {
                        var attrs = node.attributes;
                        for (var i = 0, l = attrs.length; i < l; i++) {
                            if (aria.test(attrs[i].nodeName)) {
                                return true;
                            }
                        }
                    }
                    return false;
                },
                evaluate: function (node, options) {
                    options = Array.isArray(options) ? options : [];
                    var invalid = [], aria = /^aria-/;
                    var attr, attrs = node.attributes;
                    for (var i = 0, l = attrs.length; i < l; i++) {
                        attr = attrs[i].nodeName;
                        if (options.indexOf(attr) === -1 && aria.test(attr) && !commons.aria.validateAttr(attr)) {
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
                id: "color-contrast",
                matches: function (node) {
                    var nodeName = node.nodeName, nodeType = node.type, doc = document;
                    if (nodeName === "INPUT") {
                        return ["hidden", "range", "color", "checkbox", "radio", "image"].indexOf(nodeType) === -1 && !node.disabled;
                    }
                    if (nodeName === "SELECT") {
                        return !!node.options.length && !node.disabled;
                    }
                    if (nodeName === "TEXTAREA") {
                        return !node.disabled;
                    }
                    if (nodeName === "OPTION") {
                        return false;
                    }
                    if (nodeName === "BUTTON" && node.disabled) {
                        return false;
                    }
                    if (nodeName === "LABEL") {
                        var candidate = node.htmlFor && doc.getElementById(node.htmlFor);
                        if (candidate && candidate.disabled) {
                            return false;
                        }
                        var candidate = node.querySelector('input:not([type="hidden"]):not([type="image"])' + ':not([type="button"]):not([type="submit"]):not([type="reset"]), select, textarea');
                        if (candidate && candidate.disabled) {
                            return false;
                        }
                    }
                    if (node.id) {
                        var candidate = doc.querySelector("[aria-labelledby~=" + commons.utils.escapeSelector(node.id) + "]");
                        if (candidate && candidate.disabled) {
                            return false;
                        }
                    }
                    if (commons.text.visible(node, false, true) === "") {
                        return false;
                    }
                    var range = document.createRange(), childNodes = node.childNodes, length = childNodes.length, child, index;
                    for (index = 0; index < length; index++) {
                        child = childNodes[index];
                        if (child.nodeType === 3 && commons.text.sanitize(child.nodeValue) !== "") {
                            range.selectNodeContents(child);
                        }
                    }
                    var rects = range.getClientRects();
                    length = rects.length;
                    for (index = 0; index < length; index++) {
                        if (commons.dom.visuallyOverlaps(rects[index], node)) {
                            return true;
                        }
                    }
                    return false;
                },
                evaluate: function (node, options) {
                    var bgNodes = [], bgColor = commons.color.getBackgroundColor(node, bgNodes), fgColor = commons.color.getForegroundColor(node);
                    if (fgColor === null || bgColor === null) {
                        return true;
                    }
                    var nodeStyle = window.getComputedStyle(node);
                    var fontSize = parseFloat(nodeStyle.getPropertyValue("font-size"));
                    var fontWeight = nodeStyle.getPropertyValue("font-weight");
                    var bold = ["bold", "bolder", "600", "700", "800", "900"].indexOf(fontWeight) !== -1;
                    var cr = commons.color.hasValidContrastRatio(bgColor, fgColor, fontSize, bold);
                    this.data({
                        fgColor: fgColor.toHexString(),
                        bgColor: bgColor.toHexString(),
                        contrastRatio: cr.contrastRatio.toFixed(2),
                        fontSize: (fontSize * 72 / 96).toFixed(1) + "pt",
                        fontWeight: bold ? "bold" : "normal"
                    });
                    if (!cr.isValid) {
                        this.relatedNodes(bgNodes);
                    }
                    return cr.isValid;
                }
            }, {
                id: "fieldset",
                evaluate: function (node, options) {
                    var failureCode, self = this;
                    function getUnrelatedElements(parent, name) {
                        return commons.utils.toArray(parent.querySelectorAll('select,textarea,button,input:not([name="' + name + '"]):not([type="hidden"])'));
                    }
                    function checkFieldset(group, name) {
                        var firstNode = group.firstElementChild;
                        if (!firstNode || firstNode.nodeName !== "LEGEND") {
                            self.relatedNodes([group]);
                            failureCode = "no-legend";
                            return false;
                        }
                        if (!commons.text.accessibleText(firstNode)) {
                            self.relatedNodes([firstNode]);
                            failureCode = "empty-legend";
                            return false;
                        }
                        var otherElements = getUnrelatedElements(group, name);
                        if (otherElements.length) {
                            self.relatedNodes(otherElements);
                            failureCode = "mixed-inputs";
                            return false;
                        }
                        return true;
                    }
                    function checkARIAGroup(group, name) {
                        var hasLabelledByText = commons.dom.idrefs(group, "aria-labelledby").some(function (element) {
                            return element && commons.text.accessibleText(element);
                        });
                        var ariaLabel = group.getAttribute("aria-label");
                        if (!hasLabelledByText && !(ariaLabel && commons.text.sanitize(ariaLabel))) {
                            self.relatedNodes(group);
                            failureCode = "no-group-label";
                            return false;
                        }
                        var otherElements = getUnrelatedElements(group, name);
                        if (otherElements.length) {
                            self.relatedNodes(otherElements);
                            failureCode = "group-mixed-inputs";
                            return false;
                        }
                        return true;
                    }
                    function spliceCurrentNode(nodes, current) {
                        return commons.utils.toArray(nodes).filter(function (candidate) {
                            return candidate !== current;
                        });
                    }
                    function runCheck(element) {
                        var name = commons.utils.escapeSelector(node.name);
                        var matchingNodes = document.querySelectorAll('input[type="' + commons.utils.escapeSelector(node.type) + '"][name="' + name + '"]');
                        if (matchingNodes.length < 2) {
                            return true;
                        }
                        var fieldset = commons.dom.findUp(element, "fieldset");
                        var group = commons.dom.findUp(element, '[role="group"]' + (node.type === "radio" ? ',[role="radiogroup"]' : ""));
                        if (!group && !fieldset) {
                            failureCode = "no-group";
                            self.relatedNodes(spliceCurrentNode(matchingNodes, element));
                            return false;
                        }
                        return fieldset ? checkFieldset(fieldset, name) : checkARIAGroup(group, name);
                    }
                    var data = {
                        name: node.getAttribute("name"),
                        type: node.getAttribute("type")
                    };
                    var result = runCheck(node);
                    if (!result) {
                        data.failureCode = failureCode;
                    }
                    this.data(data);
                    return result;
                },
                after: function (results, options) {
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
                id: "group-labelledby",
                evaluate: function (node, options) {
                    this.data({
                        name: node.getAttribute("name"),
                        type: node.getAttribute("type")
                    });
                    var matchingNodes = document.querySelectorAll('input[type="' + commons.utils.escapeSelector(node.type) + '"][name="' + commons.utils.escapeSelector(node.name) + '"]');
                    if (matchingNodes.length <= 1) {
                        return true;
                    }
                    return [].map.call(matchingNodes, function (m) {
                        var l = m.getAttribute("aria-labelledby");
                        return l ? l.split(/\s+/) : [];
                    }).reduce(function (prev, curr) {
                        return prev.filter(function (n) {
                            return curr.indexOf(n) !== -1;
                        });
                    }).filter(function (n) {
                        var labelNode = document.getElementById(n);
                        return labelNode && commons.text.accessibleText(labelNode);
                    }).length !== 0;
                },
                after: function (results, options) {
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
                id: "accesskeys",
                evaluate: function (node, options) {
                    this.data(node.getAttribute("accesskey"));
                    this.relatedNodes([node]);
                    return true;
                },
                after: function (results, options) {
                    var seen = {};
                    return results.filter(function (r) {
                        if (!seen[r.data]) {
                            seen[r.data] = r;
                            r.relatedNodes = [];
                            return true;
                        }
                        seen[r.data].relatedNodes.push(r.relatedNodes[0]);
                        return false;
                    }).map(function (r) {
                        r.result = !!r.relatedNodes.length;
                        return r;
                    });
                }
            }, {
                id: "focusable-no-name",
                evaluate: function (node, options) {
                    var tabIndex = node.getAttribute("tabindex"), isFocusable = commons.dom.isFocusable(node) && tabIndex > -1;
                    if (!isFocusable) {
                        return false;
                    }
                    return !commons.text.accessibleText(node);
                }
            }, {
                id: "tabindex",
                evaluate: function (node, options) {
                    return node.tabIndex <= 0;
                }
            }, {
                id: "duplicate-img-label",
                evaluate: function (node, options) {
                    var imgs = node.querySelectorAll("img");
                    var text = commons.text.visible(node, true);
                    for (var i = 0, len = imgs.length; i < len; i++) {
                        var imgAlt = commons.text.accessibleText(imgs[i]);
                        if (imgAlt === text && text !== "") {
                            return true;
                        }
                    }
                    return false;
                },
                enabled: false
            }, {
                id: "explicit-label",
                evaluate: function (node, options) {
                    var label = document.querySelector('label[for="' + commons.utils.escapeSelector(node.id) + '"]');
                    if (label) {
                        return !!commons.text.accessibleText(label);
                    }
                    return false;
                },
                selector: "[id]"
            }, {
                id: "help-same-as-label",
                evaluate: function (node, options) {
                    var labelText = commons.text.label(node), check = node.getAttribute("title");
                    if (!labelText) {
                        return false;
                    }
                    if (!check) {
                        check = "";
                        if (node.getAttribute("aria-describedby")) {
                            var ref = commons.dom.idrefs(node, "aria-describedby");
                            check = ref.map(function (thing) {
                                return thing ? commons.text.accessibleText(thing) : "";
                            }).join("");
                        }
                    }
                    return commons.text.sanitize(check) === commons.text.sanitize(labelText);
                },
                enabled: false
            }, {
                id: "implicit-label",
                evaluate: function (node, options) {
                    var label = commons.dom.findUp(node, "label");
                    if (label) {
                        return !!commons.text.accessibleText(label);
                    }
                    return false;
                }
            }, {
                id: "multiple-label",
                evaluate: function (node, options) {
                    var labels = [].slice.call(document.querySelectorAll('label[for="' + commons.utils.escapeSelector(node.id) + '"]')), parent = node.parentNode;
                    while (parent) {
                        if (parent.tagName === "LABEL" && labels.indexOf(parent) === -1) {
                            labels.push(parent);
                        }
                        parent = parent.parentNode;
                    }
                    this.relatedNodes(labels);
                    return labels.length > 1;
                }
            }, {
                id: "title-only",
                evaluate: function (node, options) {
                    var labelText = commons.text.label(node);
                    return !labelText && !!(node.getAttribute("title") || node.getAttribute("aria-describedby"));
                }
            }, {
                id: "has-lang",
                evaluate: function (node, options) {
                    return node.hasAttribute("lang") || node.hasAttribute("xml:lang");
                }
            }, {
                id: "valid-lang",
                options: ["aa", "ab", "ae", "af", "ak", "am", "an", "ar", "as", "av", "ay", "az", "ba", "be", "bg", "bh", "bi", "bm", "bn", "bo", "br", "bs", "ca", "ce", "ch", "co", "cr", "cs", "cu", "cv", "cy", "da", "de", "dv", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "ff", "fi", "fj", "fo", "fr", "fy", "ga", "gd", "gl", "gn", "gu", "gv", "ha", "he", "hi", "ho", "hr", "ht", "hu", "hy", "hz", "ia", "id", "ie", "ig", "ii", "ik", "in", "io", "is", "it", "iu", "iw", "ja", "ji", "jv", "jw", "ka", "kg", "ki", "kj", "kk", "kl", "km", "kn", "ko", "kr", "ks", "ku", "kv", "kw", "ky", "la", "lb", "lg", "li", "ln", "lo", "lt", "lu", "lv", "mg", "mh", "mi", "mk", "ml", "mn", "mo", "mr", "ms", "mt", "my", "na", "nb", "nd", "ne", "ng", "nl", "nn", "no", "nr", "nv", "ny", "oc", "oj", "om", "or", "os", "pa", "pi", "pl", "ps", "pt", "qu", "rm", "rn", "ro", "ru", "rw", "sa", "sc", "sd", "se", "sg", "sh", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sv", "sw", "ta", "te", "tg", "th", "ti", "tk", "tl", "tn", "to", "tr", "ts", "tt", "tw", "ty", "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "wo", "xh", "yi", "yo", "za", "zh", "zu"],
                evaluate: function (node, options) {
                    var lang = (node.getAttribute("lang") || "").trim().toLowerCase();
                    var xmlLang = (node.getAttribute("xml:lang") || "").trim().toLowerCase();
                    var invalid = [];
                    (options || []).forEach(function (cc) {
                        cc = cc.toLowerCase();
                        if (lang && (lang === cc || lang.indexOf(cc.toLowerCase() + "-") === 0)) {
                            lang = null;
                        }
                        if (xmlLang && (xmlLang === cc || xmlLang.indexOf(cc.toLowerCase() + "-") === 0)) {
                            xmlLang = null;
                        }
                    });
                    if (xmlLang) {
                        invalid.push('xml:lang="' + xmlLang + '"');
                    }
                    if (lang) {
                        invalid.push('lang="' + lang + '"');
                    }
                    if (invalid.length) {
                        this.data(invalid);
                        return true;
                    }
                    return false;
                }
            }, {
                id: "dlitem",
                evaluate: function (node, options) {
                    return node.parentNode.tagName === "DL";
                }
            }, {
                id: "has-listitem",
                evaluate: function (node, options) {
                    var children = node.children;
                    if (children.length === 0) {
                        return true;
                    }
                    for (var i = 0; i < children.length; i++) {
                        if (children[i].nodeName === "LI") {
                            return false;
                        }
                    }
                    return true;
                }
            }, {
                id: "listitem",
                evaluate: function (node, options) {
                    return ["UL", "OL"].indexOf(node.parentNode.tagName) !== -1;
                }
            }, {
                id: "only-dlitems",
                evaluate: function (node, options) {
                    var child, bad = [], children = node.childNodes, hasNonEmptyTextNode = false;
                    for (var i = 0; i < children.length; i++) {
                        child = children[i];
                        if (child.nodeType === 1 && (child.nodeName !== "DT" && child.nodeName !== "DD" && child.nodeName !== "SCRIPT" && child.nodeName !== "TEMPLATE")) {
                            bad.push(child);
                        } else {
                            if (child.nodeType === 3 && child.nodeValue.trim() !== "") {
                                hasNonEmptyTextNode = true;
                            }
                        }
                    }
                    if (bad.length) {
                        this.relatedNodes(bad);
                    }
                    var retVal = !!bad.length || hasNonEmptyTextNode;
                    return retVal;
                }
            }, {
                id: "only-listitems",
                evaluate: function (node, options) {
                    var child, bad = [], children = node.childNodes, hasNonEmptyTextNode = false;
                    for (var i = 0; i < children.length; i++) {
                        child = children[i];
                        if (child.nodeType === 1 && child.nodeName !== "LI" && child.nodeName !== "SCRIPT" && child.nodeName !== "TEMPLATE") {
                            bad.push(child);
                        } else {
                            if (child.nodeType === 3 && child.nodeValue.trim() !== "") {
                                hasNonEmptyTextNode = true;
                            }
                        }
                    }
                    if (bad.length) {
                        this.relatedNodes(bad);
                    }
                    return !!bad.length || hasNonEmptyTextNode;
                }
            }, {
                id: "structured-dlitems",
                evaluate: function (node, options) {
                    var children = node.children;
                    if (!children || !children.length) {
                        return false;
                    }
                    var hasDt = false, hasDd = false;
                    for (var i = 0; i < children.length; i++) {
                        if (children[i].nodeName === "DT") {
                            hasDt = true;
                        }
                        if (hasDt && children[i].nodeName === "DD") {
                            return false;
                        }
                        if (children[i].nodeName === "DD") {
                            hasDd = true;
                        }
                    }
                    return hasDt || hasDd;
                }
            }, {
                id: "caption",
                evaluate: function (node, options) {
                    return !node.querySelector("track[kind=captions]");
                }
            }, {
                id: "description",
                evaluate: function (node, options) {
                    return !node.querySelector("track[kind=descriptions]");
                }
            }, {
                id: "meta-viewport",
                evaluate: function (node, options) {
                    var params, content = node.getAttribute("content") || "", parsedParams = content.split(/[;,]/), result = {};
                    for (var i = 0, l = parsedParams.length; i < l; i++) {
                        params = parsedParams[i].split("=");
                        var key = params.shift();
                        if (key && params.length) {
                            result[key.trim()] = params.join("=").trim();
                        }
                    }
                    if (result["maximum-scale"] && parseFloat(result["maximum-scale"]) < 5) {
                        return false;
                    }
                    if (result["user-scalable"] === "no") {
                        return false;
                    }
                    return true;
                }
            }, {
                id: "header-present",
                selector: "html",
                evaluate: function (node, options) {
                    return !!node.querySelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
                }
            }, {
                id: "heading-order",
                evaluate: function (node, options) {
                    var ariaHeadingLevel = node.getAttribute("aria-level");
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
                after: function (results, options) {
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
                id: "internal-link-present",
                selector: "html",
                evaluate: function (node, options) {
                    return !!node.querySelector('a[href^="#"]');
                }
            }, {
                id: "landmark",
                selector: "html",
                evaluate: function (node, options) {
                    return !!node.querySelector('[role="main"]');
                }
            }, {
                id: "meta-refresh",
                evaluate: function (node, options) {
                    var content = node.getAttribute("content") || "", parsedParams = content.split(/[;,]/);
                    return content === "" || parsedParams[0] === "0";
                }
            }, {
                id: "region",
                evaluate: function (node, options) {
                    var landmarkRoles = commons.aria.getRolesByType("landmark"), firstLink = node.querySelector("a[href]");
                    function isSkipLink(n) {
                        return firstLink && commons.dom.isFocusable(commons.dom.getElementByReference(firstLink, "href")) && firstLink === n;
                    }
                    function isLandmark(n) {
                        var role = n.getAttribute("role");
                        return role && landmarkRoles.indexOf(role) !== -1;
                    }
                    function checkRegion(n) {
                        if (isLandmark(n)) {
                            return null;
                        }
                        if (isSkipLink(n)) {
                            return getViolatingChildren(n);
                        }
                        if (commons.dom.isVisible(n, true) && (commons.text.visible(n, true, true) || commons.dom.isVisualContent(n))) {
                            return n;
                        }
                        return getViolatingChildren(n);
                    }
                    function getViolatingChildren(n) {
                        var children = commons.utils.toArray(n.children);
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
                after: function (results, options) {
                    return [results[0]];
                }
            }, {
                id: "skip-link",
                selector: "a[href]",
                evaluate: function (node, options) {
                    return commons.dom.isFocusable(commons.dom.getElementByReference(node, "href"));
                },
                after: function (results, options) {
                    return [results[0]];
                }
            }, {
                id: "unique-frame-title",
                evaluate: function (node, options) {
                    this.data(node.title);
                    return true;
                },
                after: function (results, options) {
                    var titles = {};
                    results.forEach(function (r) {
                        titles[r.data] = titles[r.data] !== undefined ? ++titles[r.data] : 0;
                    });
                    return results.filter(function (r) {
                        return !!titles[r.data];
                    });
                }
            }, {
                id: "aria-label",
                evaluate: function (node, options) {
                    var label = node.getAttribute("aria-label");
                    return !!(label ? commons.text.sanitize(label).trim() : "");
                }
            }, {
                id: "aria-labelledby",
                evaluate: function (node, options) {
                    var results = commons.dom.idrefs(node, "aria-labelledby");
                    var element, i, l = results.length;
                    for (i = 0; i < l; i++) {
                        element = results[i];
                        if (element && commons.text.accessibleText(element).trim()) {
                            return true;
                        }
                    }
                    return false;
                }
            }, {
                id: "button-has-visible-text",
                evaluate: function (node, options) {
                    return commons.text.accessibleText(node).length > 0;
                },
                selector: 'button, [role="button"]:not(input)'
            }, {
                id: "doc-has-title",
                evaluate: function (node, options) {
                    var title = document.title;
                    return !!(title ? commons.text.sanitize(title).trim() : "");
                }
            }, {
                id: "duplicate-id",
                evaluate: function (node, options) {
                    var matchingNodes = document.querySelectorAll('[id="' + commons.utils.escapeSelector(node.id) + '"]');
                    var related = [];
                    for (var i = 0; i < matchingNodes.length; i++) {
                        if (matchingNodes[i] !== node) {
                            related.push(matchingNodes[i]);
                        }
                    }
                    if (related.length) {
                        this.relatedNodes(related);
                    }
                    this.data(node.getAttribute("id"));
                    return matchingNodes.length <= 1;
                },
                after: function (results, options) {
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
                id: "exists",
                evaluate: function (node, options) {
                    return true;
                }
            }, {
                id: "has-alt",
                evaluate: function (node, options) {
                    return node.hasAttribute("alt");
                }
            }, {
                id: "has-visible-text",
                evaluate: function (node, options) {
                    return commons.text.accessibleText(node).length > 0;
                }
            }, {
                id: "non-empty-alt",
                evaluate: function (node, options) {
                    var label = node.getAttribute("alt");
                    return !!(label ? commons.text.sanitize(label).trim() : "");
                }
            }, {
                id: "non-empty-if-present",
                evaluate: function (node, options) {
                    var label = node.getAttribute("value");
                    this.data(label);
                    return label === null || commons.text.sanitize(label).trim() !== "";
                },
                selector: '[type="submit"], [type="reset"]'
            }, {
                id: "non-empty-title",
                evaluate: function (node, options) {
                    var title = node.getAttribute("title");
                    return !!(title ? commons.text.sanitize(title).trim() : "");
                }
            }, {
                id: "non-empty-value",
                evaluate: function (node, options) {
                    var label = node.getAttribute("value");
                    return !!(label ? commons.text.sanitize(label).trim() : "");
                },
                selector: '[type="button"]'
            }, {
                id: "role-none",
                evaluate: function (node, options) {
                    return node.getAttribute("role") === "none";
                }
            }, {
                id: "role-presentation",
                evaluate: function (node, options) {
                    return node.getAttribute("role") === "presentation";
                }
            }, {
                id: "cell-no-header",
                evaluate: function (node, options) {
                    var row, cell, badCells = [];
                    for (var rowIndex = 0, rowLength = node.rows.length; rowIndex < rowLength; rowIndex++) {
                        row = node.rows[rowIndex];
                        for (var cellIndex = 0, cellLength = row.cells.length; cellIndex < cellLength; cellIndex++) {
                            cell = row.cells[cellIndex];
                            if (commons.table.isDataCell(cell) && (!commons.aria.label(cell) && !commons.table.getHeaders(cell).length)) {
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
                id: "consistent-columns",
                evaluate: function (node, options) {
                    var table = commons.table.toArray(node);
                    var relatedNodes = [];
                    var expectedWidth;
                    for (var i = 0, length = table.length; i < length; i++) {
                        if (i === 0) {
                            expectedWidth = table[i].length;
                        } else {
                            if (expectedWidth !== table[i].length) {
                                relatedNodes.push(node.rows[i]);
                            }
                        }
                    }
                    return !relatedNodes.length;
                }
            }, {
                id: "has-caption",
                evaluate: function (node, options) {
                    return !!node.caption;
                }
            }, {
                id: "has-summary",
                evaluate: function (node, options) {
                    return !!node.summary;
                }
            }, {
                id: "has-th",
                evaluate: function (node, options) {
                    var row, cell, badCells = [];
                    for (var rowIndex = 0, rowLength = node.rows.length; rowIndex < rowLength; rowIndex++) {
                        row = node.rows[rowIndex];
                        for (var cellIndex = 0, cellLength = row.cells.length; cellIndex < cellLength; cellIndex++) {
                            cell = row.cells[cellIndex];
                            if (cell.nodeName === "TH") {
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
                id: "headers-attr-reference",
                evaluate: function (node, options) {
                    var row, cell, headerCells, badHeaders = [];
                    function checkHeader(header) {
                        if (!header || !commons.text.accessibleText(header)) {
                            badHeaders.push(cell);
                        }
                    }
                    for (var rowIndex = 0, rowLength = node.rows.length; rowIndex < rowLength; rowIndex++) {
                        row = node.rows[rowIndex];
                        for (var cellIndex = 0, cellLength = row.cells.length; cellIndex < cellLength; cellIndex++) {
                            cell = row.cells[cellIndex];
                            headerCells = commons.dom.idrefs(cell, "headers");
                            if (headerCells.length) {
                                headerCells.forEach(checkHeader);
                            }
                        }
                    }
                    if (badHeaders.length) {
                        this.relatedNodes(badHeaders);
                        return true;
                    }
                    return false;
                }
            }, {
                id: "headers-visible-text",
                evaluate: function (node, options) {
                    var row, cell, badHeaders = [];
                    for (var rowIndex = 0, rowLength = node.rows.length; rowIndex < rowLength; rowIndex++) {
                        row = node.rows[rowIndex];
                        for (var cellIndex = 0, cellLength = row.cells.length; cellIndex < cellLength; cellIndex++) {
                            cell = row.cells[cellIndex];
                            if (commons.table.isHeader(cell) && !commons.text.accessibleText(cell)) {
                                badHeaders.push(cell);
                            }
                        }
                    }
                    if (badHeaders.length) {
                        this.relatedNodes(badHeaders);
                        return true;
                    }
                    return false;
                }
            }, {
                id: "html4-scope",
                evaluate: function (node, options) {
                    if (commons.dom.isHTML5(document)) {
                        return false;
                    }
                    return node.nodeName === "TH" || node.nodeName === "TD";
                }
            }, {
                id: "html5-scope",
                evaluate: function (node, options) {
                    if (!commons.dom.isHTML5(document)) {
                        return false;
                    }
                    return node.nodeName === "TH";
                }
            }, {
                id: "no-caption",
                evaluate: function (node, options) {
                    return !(node.caption || {}).textContent;
                },
                enabled: false
            }, {
                id: "rowspan",
                evaluate: function (node, options) {
                    var row, cell, badCells = [];
                    for (var rowIndex = 0, rowLength = node.rows.length; rowIndex < rowLength; rowIndex++) {
                        row = node.rows[rowIndex];
                        for (var cellIndex = 0, cellLength = row.cells.length; cellIndex < cellLength; cellIndex++) {
                            cell = row.cells[cellIndex];
                            if (cell.rowSpan !== 1) {
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
                id: "same-caption-summary",
                selector: "table",
                evaluate: function (node, options) {
                    return !!(node.summary && node.caption) && node.summary === commons.text.accessibleText(node.caption);
                }
            }, {
                id: "scope-value",
                evaluate: function (node, options) {
                    var value = node.getAttribute("scope");
                    return value !== "row" && value !== "col";
                }
            }, {
                id: "th-headers-attr",
                evaluate: function (node, options) {
                    var row, cell, headersTH = [];
                    for (var rowIndex = 0, rowLength = node.rows.length; rowIndex < rowLength; rowIndex++) {
                        row = node.rows[rowIndex];
                        for (var cellIndex = 0, cellLength = row.cells.length; cellIndex < cellLength; cellIndex++) {
                            cell = row.cells[cellIndex];
                            if (cell.nodeName === "TH" && cell.getAttribute("headers")) {
                                headersTH.push(cell);
                            }
                        }
                    }
                    if (headersTH.length) {
                        this.relatedNodes(headersTH);
                        return true;
                    }
                    return false;
                }
            }, {
                id: "th-scope",
                evaluate: function (node, options) {
                    var row, cell, noScopeTH = [];
                    for (var rowIndex = 0, rowLength = node.rows.length; rowIndex < rowLength; rowIndex++) {
                        row = node.rows[rowIndex];
                        for (var cellIndex = 0, cellLength = row.cells.length; cellIndex < cellLength; cellIndex++) {
                            cell = row.cells[cellIndex];
                            if (cell.nodeName === "TH" && !cell.getAttribute("scope")) {
                                noScopeTH.push(cell);
                            }
                        }
                    }
                    if (noScopeTH.length) {
                        this.relatedNodes(noScopeTH);
                        return true;
                    }
                    return false;
                }
            }, {
                id: "th-single-row-column",
                evaluate: function (node, options) {
                    var row, cell, position, rowHeaders = [], columnHeaders = [];
                    for (var rowIndex = 0, rowLength = node.rows.length; rowIndex < rowLength; rowIndex++) {
                        row = node.rows[rowIndex];
                        for (var cellIndex = 0, cellLength = row.cells.length; cellIndex < cellLength; cellIndex++) {
                            cell = row.cells[cellIndex];
                            if (cell.nodeName) {
                                if (commons.table.isColumnHeader(cell) && columnHeaders.indexOf(rowIndex) === -1) {
                                    columnHeaders.push(rowIndex);
                                } else {
                                    if (commons.table.isRowHeader(cell)) {
                                        position = commons.table.getCellPosition(cell);
                                        if (rowHeaders.indexOf(position.x) === -1) {
                                            rowHeaders.push(position.x);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (columnHeaders.length > 1 || rowHeaders.length > 1) {
                        return true;
                    }
                    return false;
                }
            }],
            commons: function () {
                var commons = {};
                var aria = commons.aria = {}, lookupTables = aria._lut = {};
                lookupTables.attributes = {
                    "aria-activedescendant": {
                        type: "idref"
                    },
                    "aria-atomic": {
                        type: "boolean",
                        values: ["true", "false"]
                    },
                    "aria-autocomplete": {
                        type: "nmtoken",
                        values: ["inline", "list", "both", "none"]
                    },
                    "aria-busy": {
                        type: "boolean",
                        values: ["true", "false"]
                    },
                    "aria-checked": {
                        type: "nmtoken",
                        values: ["true", "false", "mixed", "undefined"]
                    },
                    "aria-colcount": {
                        type: "int"
                    },
                    "aria-colindex": {
                        type: "int"
                    },
                    "aria-colspan": {
                        type: "int"
                    },
                    "aria-controls": {
                        type: "idrefs"
                    },
                    "aria-describedby": {
                        type: "idrefs"
                    },
                    "aria-disabled": {
                        type: "boolean",
                        values: ["true", "false"]
                    },
                    "aria-dropeffect": {
                        type: "nmtokens",
                        values: ["copy", "move", "reference", "execute", "popup", "none"]
                    },
                    "aria-expanded": {
                        type: "nmtoken",
                        values: ["true", "false", "undefined"]
                    },
                    "aria-flowto": {
                        type: "idrefs"
                    },
                    "aria-grabbed": {
                        type: "nmtoken",
                        values: ["true", "false", "undefined"]
                    },
                    "aria-haspopup": {
                        type: "boolean",
                        values: ["true", "false"]
                    },
                    "aria-hidden": {
                        type: "boolean",
                        values: ["true", "false"]
                    },
                    "aria-invalid": {
                        type: "nmtoken",
                        values: ["true", "false", "spelling", "grammar"]
                    },
                    "aria-label": {
                        type: "string"
                    },
                    "aria-labelledby": {
                        type: "idrefs"
                    },
                    "aria-level": {
                        type: "int"
                    },
                    "aria-live": {
                        type: "nmtoken",
                        values: ["off", "polite", "assertive"]
                    },
                    "aria-multiline": {
                        type: "boolean",
                        values: ["true", "false"]
                    },
                    "aria-multiselectable": {
                        type: "boolean",
                        values: ["true", "false"]
                    },
                    "aria-orientation": {
                        type: "nmtoken",
                        values: ["horizontal", "vertical"]
                    },
                    "aria-owns": {
                        type: "idrefs"
                    },
                    "aria-posinset": {
                        type: "int"
                    },
                    "aria-pressed": {
                        type: "nmtoken",
                        values: ["true", "false", "mixed", "undefined"]
                    },
                    "aria-readonly": {
                        type: "boolean",
                        values: ["true", "false"]
                    },
                    "aria-relevant": {
                        type: "nmtokens",
                        values: ["additions", "removals", "text", "all"]
                    },
                    "aria-required": {
                        type: "boolean",
                        values: ["true", "false"]
                    },
                    "aria-rowcount": {
                        type: "int"
                    },
                    "aria-rowindex": {
                        type: "int"
                    },
                    "aria-rowspan": {
                        type: "int"
                    },
                    "aria-selected": {
                        type: "nmtoken",
                        values: ["true", "false", "undefined"]
                    },
                    "aria-setsize": {
                        type: "int"
                    },
                    "aria-sort": {
                        type: "nmtoken",
                        values: ["ascending", "descending", "other", "none"]
                    },
                    "aria-valuemax": {
                        type: "decimal"
                    },
                    "aria-valuemin": {
                        type: "decimal"
                    },
                    "aria-valuenow": {
                        type: "decimal"
                    },
                    "aria-valuetext": {
                        type: "string"
                    }
                };
                lookupTables.globalAttributes = ["aria-atomic", "aria-busy", "aria-controls", "aria-describedby", "aria-disabled", "aria-dropeffect", "aria-flowto", "aria-grabbed", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-label", "aria-labelledby", "aria-live", "aria-owns", "aria-relevant"];
                lookupTables.role = {
                    alert: {
                        type: "widget",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    alertdialog: {
                        type: "widget",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    application: {
                        type: "landmark",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    article: {
                        type: "structure",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null,
                        implicit: ["article"]
                    },
                    banner: {
                        type: "landmark",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    button: {
                        type: "widget",
                        attributes: {
                            allowed: ["aria-expanded", "aria-pressed"]
                        },
                        owned: null,
                        nameFrom: ["author", "contents"],
                        context: null,
                        implicit: ["button", 'input[type="button"]', 'input[type="image"]']
                    },
                    cell: {
                        type: "structure",
                        attributes: {
                            allowed: ["aria-colindex", "aria-colspan", "aria-rowindex", "aria-rowspan"]
                        },
                        owned: null,
                        nameFrom: ["author", "contents"],
                        context: ["row"]
                    },
                    checkbox: {
                        type: "widget",
                        attributes: {
                            required: ["aria-checked"]
                        },
                        owned: null,
                        nameFrom: ["author", "contents"],
                        context: null,
                        implicit: ['input[type="checkbox"]']
                    },
                    columnheader: {
                        type: "structure",
                        attributes: {
                            allowed: ["aria-expanded", "aria-sort", "aria-readonly", "aria-selected", "aria-required"]
                        },
                        owned: null,
                        nameFrom: ["author", "contents"],
                        context: ["row"]
                    },
                    combobox: {
                        type: "composite",
                        attributes: {
                            required: ["aria-expanded"],
                            allowed: ["aria-autocomplete", "aria-required", "aria-activedescendant"]
                        },
                        owned: {
                            all: ["listbox", "textbox"]
                        },
                        nameFrom: ["author"],
                        context: null
                    },
                    command: {
                        nameFrom: ["author"],
                        type: "abstract"
                    },
                    complementary: {
                        type: "landmark",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null,
                        implicit: ["aside"]
                    },
                    composite: {
                        nameFrom: ["author"],
                        type: "abstract"
                    },
                    contentinfo: {
                        type: "landmark",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    definition: {
                        type: "structure",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    dialog: {
                        type: "widget",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null,
                        implicit: ["dialog"]
                    },
                    directory: {
                        type: "structure",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author", "contents"],
                        context: null
                    },
                    document: {
                        type: "structure",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null,
                        implicit: ["body"]
                    },
                    form: {
                        type: "landmark",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    grid: {
                        type: "composite",
                        attributes: {
                            allowed: ["aria-level", "aria-multiselectable", "aria-readonly", "aria-activedescendant", "aria-expanded"]
                        },
                        owned: {
                            one: ["rowgroup", "row"]
                        },
                        nameFrom: ["author"],
                        context: null
                    },
                    gridcell: {
                        type: "widget",
                        attributes: {
                            allowed: ["aria-selected", "aria-readonly", "aria-expanded", "aria-required"]
                        },
                        owned: null,
                        nameFrom: ["author", "contents"],
                        context: ["row"]
                    },
                    group: {
                        type: "structure",
                        attributes: {
                            allowed: ["aria-activedescendant", "aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null,
                        implicit: ["details"]
                    },
                    heading: {
                        type: "structure",
                        attributes: {
                            allowed: ["aria-level", "aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author", "contents"],
                        context: null,
                        implicit: ["h1", "h2", "h3", "h4", "h5", "h6"]
                    },
                    img: {
                        type: "structure",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null,
                        implicit: ["img"]
                    },
                    input: {
                        nameFrom: ["author"],
                        type: "abstract"
                    },
                    landmark: {
                        nameFrom: ["author"],
                        type: "abstract"
                    },
                    link: {
                        type: "widget",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author", "contents"],
                        context: null,
                        implicit: ["a[href]"]
                    },
                    list: {
                        type: "structure",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: {
                            all: ["listitem"]
                        },
                        nameFrom: ["author"],
                        context: null,
                        implicit: ["ol", "ul"]
                    },
                    listbox: {
                        type: "composite",
                        attributes: {
                            allowed: ["aria-activedescendant", "aria-multiselectable", "aria-required", "aria-expanded"]
                        },
                        owned: {
                            all: ["option"]
                        },
                        nameFrom: ["author"],
                        context: null,
                        implicit: ["select"]
                    },
                    listitem: {
                        type: "structure",
                        attributes: {
                            allowed: ["aria-level", "aria-posinset", "aria-setsize", "aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author", "contents"],
                        context: ["list"],
                        implicit: ["li"]
                    },
                    log: {
                        type: "widget",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    main: {
                        type: "landmark",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    marquee: {
                        type: "widget",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    math: {
                        type: "structure",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    menu: {
                        type: "composite",
                        attributes: {
                            allowed: ["aria-activedescendant", "aria-expanded"]
                        },
                        owned: {
                            one: ["menuitem", "menuitemradio", "menuitemcheckbox"]
                        },
                        nameFrom: ["author"],
                        context: null
                    },
                    menubar: {
                        type: "composite",
                        attributes: {
                            allowed: ["aria-activedescendant", "aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    menuitem: {
                        type: "widget",
                        attributes: null,
                        owned: null,
                        nameFrom: ["author", "contents"],
                        context: ["menu", "menubar"]
                    },
                    menuitemcheckbox: {
                        type: "widget",
                        attributes: {
                            required: ["aria-checked"]
                        },
                        owned: null,
                        nameFrom: ["author", "contents"],
                        context: ["menu", "menubar"]
                    },
                    menuitemradio: {
                        type: "widget",
                        attributes: {
                            allowed: ["aria-selected", "aria-posinset", "aria-setsize"],
                            required: ["aria-checked"]
                        },
                        owned: null,
                        nameFrom: ["author", "contents"],
                        context: ["menu", "menubar"]
                    },
                    navigation: {
                        type: "landmark",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    none: {
                        type: "structure",
                        attributes: null,
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    note: {
                        type: "structure",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    option: {
                        type: "widget",
                        attributes: {
                            allowed: ["aria-selected", "aria-posinset", "aria-setsize", "aria-checked"]
                        },
                        owned: null,
                        nameFrom: ["author", "contents"],
                        context: ["listbox"]
                    },
                    presentation: {
                        type: "structure",
                        attributes: null,
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    progressbar: {
                        type: "widget",
                        attributes: {
                            allowed: ["aria-valuetext", "aria-valuenow", "aria-valuemax", "aria-valuemin"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    radio: {
                        type: "widget",
                        attributes: {
                            allowed: ["aria-selected", "aria-posinset", "aria-setsize"],
                            required: ["aria-checked"]
                        },
                        owned: null,
                        nameFrom: ["author", "contents"],
                        context: null,
                        implicit: ['input[type="radio"]']
                    },
                    radiogroup: {
                        type: "composite",
                        attributes: {
                            allowed: ["aria-activedescendant", "aria-required", "aria-expanded"]
                        },
                        owned: {
                            all: ["radio"]
                        },
                        nameFrom: ["author"],
                        context: null
                    },
                    range: {
                        nameFrom: ["author"],
                        type: "abstract"
                    },
                    region: {
                        type: "structure",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null,
                        implicit: ["section"]
                    },
                    roletype: {
                        type: "abstract"
                    },
                    row: {
                        type: "structure",
                        attributes: {
                            allowed: ["aria-level", "aria-selected", "aria-activedescendant", "aria-expanded"]
                        },
                        owned: {
                            one: ["cell", "columnheader", "rowheader", "gridcell"]
                        },
                        nameFrom: ["author", "contents"],
                        context: ["rowgroup", "grid", "treegrid", "table"]
                    },
                    rowgroup: {
                        type: "structure",
                        attributes: {
                            allowed: ["aria-activedescendant", "aria-expanded"]
                        },
                        owned: {
                            all: ["row"]
                        },
                        nameFrom: ["author", "contents"],
                        context: ["grid", "table"]
                    },
                    rowheader: {
                        type: "structure",
                        attributes: {
                            allowed: ["aria-sort", "aria-required", "aria-readonly", "aria-expanded", "aria-selected"]
                        },
                        owned: null,
                        nameFrom: ["author", "contents"],
                        context: ["row"]
                    },
                    scrollbar: {
                        type: "widget",
                        attributes: {
                            required: ["aria-controls", "aria-orientation", "aria-valuenow", "aria-valuemax", "aria-valuemin"],
                            allowed: ["aria-valuetext"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    search: {
                        type: "landmark",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    searchbox: {
                        type: "widget",
                        attributes: {
                            allowed: ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-readonly", "aria-required"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null,
                        implicit: ['input[type="search"]']
                    },
                    section: {
                        nameFrom: ["author", "contents"],
                        type: "abstract"
                    },
                    sectionhead: {
                        nameFrom: ["author", "contents"],
                        type: "abstract"
                    },
                    select: {
                        nameFrom: ["author"],
                        type: "abstract"
                    },
                    separator: {
                        type: "structure",
                        attributes: {
                            allowed: ["aria-expanded", "aria-orientation"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    slider: {
                        type: "widget",
                        attributes: {
                            allowed: ["aria-valuetext", "aria-orientation"],
                            required: ["aria-valuenow", "aria-valuemax", "aria-valuemin"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    spinbutton: {
                        type: "widget",
                        attributes: {
                            allowed: ["aria-valuetext", "aria-required"],
                            required: ["aria-valuenow", "aria-valuemax", "aria-valuemin"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    status: {
                        type: "widget",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null,
                        implicit: ["output"]
                    },
                    structure: {
                        type: "abstract"
                    },
                    "switch": {
                        type: "widget",
                        attributes: {
                            required: ["aria-checked"]
                        },
                        owned: null,
                        nameFrom: ["author", "contents"],
                        context: null
                    },
                    tab: {
                        type: "widget",
                        attributes: {
                            allowed: ["aria-selected", "aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author", "contents"],
                        context: ["tablist"]
                    },
                    table: {
                        type: "structure",
                        attributes: {
                            allowed: ["aria-colcount", "aria-rowcount"]
                        },
                        owned: {
                            one: ["rowgroup", "row"]
                        },
                        nameFrom: ["author"],
                        context: null,
                        implicit: ["table"]
                    },
                    tablist: {
                        type: "composite",
                        attributes: {
                            allowed: ["aria-activedescendant", "aria-expanded", "aria-level", "aria-multiselectable"]
                        },
                        owned: {
                            all: ["tab"]
                        },
                        nameFrom: ["author"],
                        context: null
                    },
                    tabpanel: {
                        type: "widget",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    text: {
                        type: "structure",
                        owned: null,
                        nameFrom: ["author", "contents"],
                        context: null
                    },
                    textbox: {
                        type: "widget",
                        attributes: {
                            allowed: ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-readonly", "aria-required"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null,
                        implicit: ['input[type="text"]', "input:not([type])"]
                    },
                    timer: {
                        type: "widget",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null
                    },
                    toolbar: {
                        type: "structure",
                        attributes: {
                            allowed: ["aria-activedescendant", "aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author"],
                        context: null,
                        implicit: ['menu[type="toolbar"]']
                    },
                    tooltip: {
                        type: "widget",
                        attributes: {
                            allowed: ["aria-expanded"]
                        },
                        owned: null,
                        nameFrom: ["author", "contents"],
                        context: null
                    },
                    tree: {
                        type: "composite",
                        attributes: {
                            allowed: ["aria-activedescendant", "aria-multiselectable", "aria-required", "aria-expanded"]
                        },
                        owned: {
                            all: ["treeitem"]
                        },
                        nameFrom: ["author"],
                        context: null
                    },
                    treegrid: {
                        type: "composite",
                        attributes: {
                            allowed: ["aria-activedescendant", "aria-expanded", "aria-level", "aria-multiselectable", "aria-readonly", "aria-required"]
                        },
                        owned: {
                            all: ["treeitem"]
                        },
                        nameFrom: ["author"],
                        context: null
                    },
                    treeitem: {
                        type: "widget",
                        attributes: {
                            allowed: ["aria-checked", "aria-selected", "aria-expanded", "aria-level", "aria-posinset", "aria-setsize"]
                        },
                        owned: null,
                        nameFrom: ["author", "contents"],
                        context: ["treegrid", "tree"]
                    },
                    widget: {
                        type: "abstract"
                    },
                    window: {
                        nameFrom: ["author"],
                        type: "abstract"
                    }
                };
                var color = {};
                commons.color = color;
                var dom = commons.dom = {};
                var table = commons.table = {};
                var text = commons.text = {};
                var utils = commons.utils = {};
                utils.escapeSelector = axe.utils.escapeSelector;
                utils.matchesSelector = axe.utils.matchesSelector;
                utils.clone = axe.utils.clone;
                aria.requiredAttr = function (role) {
                    "use strict";
                    var roles = lookupTables.role[role], attr = roles && roles.attributes && roles.attributes.required;
                    return attr || [];
                };
                aria.allowedAttr = function (role) {
                    "use strict";
                    var roles = lookupTables.role[role], attr = roles && roles.attributes && roles.attributes.allowed || [], requiredAttr = roles && roles.attributes && roles.attributes.required || [];
                    return attr.concat(lookupTables.globalAttributes).concat(requiredAttr);
                };
                aria.validateAttr = function (att) {
                    "use strict";
                    return !!lookupTables.attributes[att];
                };
                aria.validateAttrValue = function (node, attr) {
                    "use strict";
                    var ids, index, length, matches, doc = document, value = node.getAttribute(attr), attrInfo = lookupTables.attributes[attr];
                    if (!attrInfo) {
                        return true;
                    } else {
                        if (attrInfo.values) {
                            if (typeof value === "string" && attrInfo.values.indexOf(value.toLowerCase()) !== -1) {
                                return true;
                            }
                            return false;
                        }
                    }
                    switch (attrInfo.type) {
                        case "idref":
                            return !!(value && doc.getElementById(value));

                        case "idrefs":
                            ids = utils.tokenList(value);
                            for (index = 0, length = ids.length; index < length; index++) {
                                if (ids[index] && !doc.getElementById(ids[index])) {
                                    return false;
                                }
                            }
                            return !!ids.length;

                        case "string":
                            return true;

                        case "decimal":
                            matches = value.match(/^[-+]?([0-9]*)\.?([0-9]*)$/);
                            return !!(matches && (matches[1] || matches[2]));

                        case "int":
                            return /^[-+]?[0-9]+$/.test(value);
                    }
                };
                aria.label = function (node) {
                    var ref, candidate;
                    if (node.getAttribute("aria-labelledby")) {
                        ref = dom.idrefs(node, "aria-labelledby");
                        candidate = ref.map(function (thing) {
                            return thing ? text.visible(thing, true) : "";
                        }).join(" ").trim();
                        if (candidate) {
                            return candidate;
                        }
                    }
                    candidate = node.getAttribute("aria-label");
                    if (candidate) {
                        candidate = text.sanitize(candidate).trim();
                        if (candidate) {
                            return candidate;
                        }
                    }
                    return null;
                };
                aria.isValidRole = function (role) {
                    "use strict";
                    if (lookupTables.role[role]) {
                        return true;
                    }
                    return false;
                };
                aria.getRolesWithNameFromContents = function () {
                    return Object.keys(lookupTables.role).filter(function (r) {
                        return lookupTables.role[r].nameFrom && lookupTables.role[r].nameFrom.indexOf("contents") !== -1;
                    });
                };
                aria.getRolesByType = function (roleType) {
                    return Object.keys(lookupTables.role).filter(function (r) {
                        return lookupTables.role[r].type === roleType;
                    });
                };
                aria.getRoleType = function (role) {
                    var r = lookupTables.role[role];
                    return r && r.type || null;
                };
                aria.requiredOwned = function (role) {
                    "use strict";
                    var owned = null, roles = lookupTables.role[role];
                    if (roles) {
                        owned = utils.clone(roles.owned);
                    }
                    return owned;
                };
                aria.requiredContext = function (role) {
                    "use strict";
                    var context = null, roles = lookupTables.role[role];
                    if (roles) {
                        context = utils.clone(roles.context);
                    }
                    return context;
                };
                aria.implicitNodes = function (role) {
                    "use strict";
                    var implicit = null, roles = lookupTables.role[role];
                    if (roles && roles.implicit) {
                        implicit = utils.clone(roles.implicit);
                    }
                    return implicit;
                };
                aria.implicitRole = function (node) {
                    "use strict";
                    var role, r, candidate, roles = lookupTables.role;
                    for (role in roles) {
                        if (roles.hasOwnProperty(role)) {
                            r = roles[role];
                            if (r.implicit) {
                                for (var index = 0, length = r.implicit.length; index < length; index++) {
                                    candidate = r.implicit[index];
                                    if (utils.matchesSelector(node, candidate)) {
                                        return role;
                                    }
                                }
                            }
                        }
                    }
                    return null;
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
                        return "#" + (this.red > 15.5 ? redString : "0" + redString) + (this.green > 15.5 ? greenString : "0" + greenString) + (this.blue > 15.5 ? blueString : "0" + blueString);
                    };
                    var rgbRegex = /^rgb\((\d+), (\d+), (\d+)\)$/;
                    var rgbaRegex = /^rgba\((\d+), (\d+), (\d+), (\d*(\.\d+)?)\)/;
                    this.parseRgbString = function (colorString) {
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
                    return {
                        isValid: isSmallFont && contrast >= 4.5 || !isSmallFont && contrast >= 3,
                        contrastRatio: contrast
                    };
                };
                function getBackgroundForSingleNode(node) {
                    var bgColor, nodeStyle = window.getComputedStyle(node);
                    if (nodeStyle.getPropertyValue("background-image") !== "none") {
                        return null;
                    }
                    var bgColorString = nodeStyle.getPropertyValue("background-color");
                    if (bgColorString === "transparent") {
                        bgColor = new color.Color(0, 0, 0, 0);
                    } else {
                        bgColor = new color.Color();
                        bgColor.parseRgbString(bgColorString);
                    }
                    var opacity = nodeStyle.getPropertyValue("opacity");
                    bgColor.alpha = bgColor.alpha * opacity;
                    return bgColor;
                }
                dom.isOpaque = function (node) {
                    var bgColor = getBackgroundForSingleNode(node);
                    if (bgColor === null || bgColor.alpha === 1) {
                        return true;
                    }
                    return false;
                };
                var getVisualParents = function (node, rect) {
                    var visualParents, thisIndex, parents = [], fallbackToVisual = false, currentNode = node, nodeStyle = window.getComputedStyle(currentNode), posVal, topVal, bottomVal, leftVal, rightVal;
                    while (currentNode !== null && (!dom.isOpaque(currentNode) || parseInt(nodeStyle.getPropertyValue("height"), 10) === 0)) {
                        posVal = nodeStyle.getPropertyValue("position");
                        topVal = nodeStyle.getPropertyValue("top");
                        bottomVal = nodeStyle.getPropertyValue("bottom");
                        leftVal = nodeStyle.getPropertyValue("left");
                        rightVal = nodeStyle.getPropertyValue("right");
                        if (posVal !== "static" && posVal !== "relative" || posVal === "relative" && (leftVal !== "auto" || rightVal !== "auto" || topVal !== "auto" || bottomVal !== "auto")) {
                            fallbackToVisual = true;
                        }
                        currentNode = currentNode.parentElement;
                        if (currentNode !== null) {
                            nodeStyle = window.getComputedStyle(currentNode);
                            if (parseInt(nodeStyle.getPropertyValue("height"), 10) !== 0) {
                                parents.push(currentNode);
                            }
                        }
                    }
                    if (fallbackToVisual && dom.supportsElementsFromPoint(document)) {
                        visualParents = dom.elementsFromPoint(document, Math.ceil(rect.left + 1), Math.ceil(rect.top + 1));
                        thisIndex = visualParents.indexOf(node);
                        if (thisIndex === -1) {
                            return null;
                        }
                        if (visualParents && thisIndex < visualParents.length - 1) {
                            parents = visualParents.slice(thisIndex + 1);
                        }
                    }
                    return parents;
                };
                color.getBackgroundColor = function (node, bgNodes) {
                    var parent, parentColor;
                    var bgColor = getBackgroundForSingleNode(node);
                    if (bgNodes && (bgColor === null || bgColor.alpha !== 0)) {
                        bgNodes.push(node);
                    }
                    if (bgColor === null || bgColor.alpha === 1) {
                        return bgColor;
                    }
                    node.scrollIntoView();
                    var rect = node.getBoundingClientRect(), currentNode = node, colorStack = [{
                        color: bgColor,
                        node: node
                    }], parents = getVisualParents(currentNode, rect);
                    if (!parents) {
                        return null;
                    }
                    while (bgColor.alpha !== 1) {
                        parent = parents.shift();
                        if (!parent && currentNode.tagName !== "HTML") {
                            return null;
                        }
                        if (!parent && currentNode.tagName === "HTML") {
                            parentColor = new color.Color(255, 255, 255, 1);
                        } else {
                            if (!dom.visuallyContains(node, parent)) {
                                return null;
                            }
                            parentColor = getBackgroundForSingleNode(parent);
                            if (bgNodes && (parentColor === null || parentColor.alpha !== 0)) {
                                bgNodes.push(parent);
                            }
                            if (parentColor === null) {
                                return null;
                            }
                        }
                        currentNode = parent;
                        bgColor = parentColor;
                        colorStack.push({
                            color: bgColor,
                            node: currentNode
                        });
                    }
                    var currColorNode = colorStack.pop();
                    var flattenedColor = currColorNode.color;
                    while ((currColorNode = colorStack.pop()) !== undefined) {
                        flattenedColor = color.flattenColors(currColorNode.color, flattenedColor);
                    }
                    return flattenedColor;
                };
                color.getForegroundColor = function (node) {
                    var nodeStyle = window.getComputedStyle(node);
                    var fgColor = new color.Color();
                    fgColor.parseRgbString(nodeStyle.getPropertyValue("color"));
                    var opacity = nodeStyle.getPropertyValue("opacity");
                    fgColor.alpha = fgColor.alpha * opacity;
                    if (fgColor.alpha === 1) {
                        return fgColor;
                    }
                    var bgColor = color.getBackgroundColor(node);
                    if (bgColor === null) {
                        return null;
                    }
                    return color.flattenColors(fgColor, bgColor);
                };
                dom.supportsElementsFromPoint = function (doc) {
                    var element = doc.createElement("x");
                    element.style.cssText = "pointer-events:auto";
                    return element.style.pointerEvents === "auto" || !!doc.msElementsFromPoint;
                };
                dom.elementsFromPoint = function (doc, x, y) {
                    var elements = [], previousPointerEvents = [], current, i, d;
                    if (doc.msElementsFromPoint) {
                        var nl = doc.msElementsFromPoint(x, y);
                        return nl ? Array.prototype.slice.call(nl) : null;
                    }
                    while ((current = doc.elementFromPoint(x, y)) && elements.indexOf(current) === -1 && current !== null) {
                        elements.push(current);
                        previousPointerEvents.push({
                            value: current.style.getPropertyValue("pointer-events"),
                            priority: current.style.getPropertyPriority("pointer-events")
                        });
                        current.style.setProperty("pointer-events", "none", "important");
                        if (dom.isOpaque(current)) {
                            break;
                        }
                    }
                    for (i = previousPointerEvents.length; !!(d = previousPointerEvents[--i]) ;) {
                        elements[i].style.setProperty("pointer-events", d.value ? d.value : "", d.priority);
                    }
                    return elements;
                };
                dom.findUp = function (element, target) {
                    "use strict";
                    var parent, matches = document.querySelectorAll(target), length = matches.length;
                    if (!length) {
                        return null;
                    }
                    matches = utils.toArray(matches);
                    parent = element.parentNode;
                    while (parent && matches.indexOf(parent) === -1) {
                        parent = parent.parentNode;
                    }
                    return parent;
                };
                dom.getElementByReference = function (node, attr) {
                    "use strict";
                    var candidate, fragment = node.getAttribute(attr), doc = document;
                    if (fragment && fragment.charAt(0) === "#") {
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
                    "use strict";
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
                    "use strict";
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
                    "use strict";
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
                dom.idrefs = function (node, attr) {
                    "use strict";
                    var index, length, doc = document, result = [], idrefs = node.getAttribute(attr);
                    if (idrefs) {
                        idrefs = utils.tokenList(idrefs);
                        for (index = 0, length = idrefs.length; index < length; index++) {
                            result.push(doc.getElementById(idrefs[index]));
                        }
                    }
                    return result;
                };
                dom.isFocusable = function (el) {
                    "use strict";
                    if (!el || el.disabled || !dom.isVisible(el) && el.nodeName !== "AREA") {
                        return false;
                    }
                    switch (el.nodeName) {
                        case "A":
                        case "AREA":
                            if (el.href) {
                                return true;
                            }
                            break;

                        case "INPUT":
                            return el.type !== "hidden";

                        case "TEXTAREA":
                        case "SELECT":
                        case "DETAILS":
                        case "BUTTON":
                            return true;
                    }
                    var tabindex = el.getAttribute("tabindex");
                    if (tabindex && !isNaN(parseInt(tabindex, 10))) {
                        return true;
                    }
                    return false;
                };
                dom.isHTML5 = function (doc) {
                    var node = doc.doctype;
                    if (node === null) {
                        return false;
                    }
                    return node.name === "html" && !node.publicId && !node.systemId;
                };
                dom.isNode = function (candidate) {
                    "use strict";
                    return candidate instanceof Node;
                };
                dom.isOffscreen = function (element) {
                    "use strict";
                    var leftBoundary, docElement = document.documentElement, dir = window.getComputedStyle(document.body || docElement).getPropertyValue("direction"), coords = dom.getElementCoordinates(element);
                    if (coords.bottom < 0) {
                        return true;
                    }
                    if (dir === "ltr") {
                        if (coords.right < 0) {
                            return true;
                        }
                    } else {
                        leftBoundary = Math.max(docElement.scrollWidth, dom.getViewportSize(window).width);
                        if (coords.left > leftBoundary) {
                            return true;
                        }
                    }
                    return false;
                };
                function isClipped(clip) {
                    "use strict";
                    var matches = clip.match(/rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/);
                    if (matches && matches.length === 5) {
                        return matches[3] - matches[1] <= 0 && matches[2] - matches[4] <= 0;
                    }
                    return false;
                }
                dom.isVisible = function (el, screenReader, recursed) {
                    "use strict";
                    var style, nodeName = el.nodeName, parent = el.parentNode;
                    if (el.nodeType === 9) {
                        return true;
                    }
                    style = window.getComputedStyle(el, null);
                    if (style === null) {
                        return false;
                    }
                    if (style.getPropertyValue("display") === "none" || nodeName === "STYLE" || nodeName === "SCRIPT" || !screenReader && isClipped(style.getPropertyValue("clip")) || !recursed && (style.getPropertyValue("visibility") === "hidden" || !screenReader && dom.isOffscreen(el)) || screenReader && el.getAttribute("aria-hidden") === "true") {
                        return false;
                    }
                    if (parent) {
                        return dom.isVisible(parent, screenReader, true);
                    }
                    return false;
                };
                dom.isVisualContent = function (candidate) {
                    "use strict";
                    switch (candidate.tagName.toUpperCase()) {
                        case "IMG":
                        case "IFRAME":
                        case "OBJECT":
                        case "VIDEO":
                        case "AUDIO":
                        case "CANVAS":
                        case "SVG":
                        case "MATH":
                        case "BUTTON":
                        case "SELECT":
                        case "TEXTAREA":
                        case "KEYGEN":
                        case "PROGRESS":
                        case "METER":
                            return true;

                        case "INPUT":
                            return candidate.type !== "hidden";

                        default:
                            return false;
                    }
                };
                dom.visuallyContains = function (node, parent) {
                    var rect = node.getBoundingClientRect();
                    var parentRect = parent.getBoundingClientRect();
                    var parentTop = parentRect.top;
                    var parentLeft = parentRect.left;
                    var parentScrollArea = {
                        top: parentTop - parent.scrollTop,
                        bottom: parentTop - parent.scrollTop + parent.scrollHeight,
                        left: parentLeft - parent.scrollLeft,
                        right: parentLeft - parent.scrollLeft + parent.scrollWidth
                    };
                    if (rect.left < parentScrollArea.left && rect.left < parentRect.left || rect.top < parentScrollArea.top && rect.top < parentRect.top || rect.right > parentScrollArea.right && rect.right > parentRect.right || rect.bottom > parentScrollArea.bottom && rect.bottom > parentRect.bottom) {
                        return false;
                    }
                    var style = window.getComputedStyle(parent);
                    if (rect.right > parentRect.right || rect.bottom > parentRect.bottom) {
                        return style.overflow === "scroll" || style.overflow === "auto" || style.overflow === "hidden" || parent instanceof HTMLBodyElement || parent instanceof HTMLHtmlElement;
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
                        return style.overflow === "scroll" || style.overflow === "auto" || parent instanceof HTMLBodyElement || parent instanceof HTMLHtmlElement;
                    }
                    return true;
                };
                table.getCellPosition = function (cell) {
                    var tbl = table.toArray(dom.findUp(cell, "table")), index;
                    for (var rowIndex = 0; rowIndex < tbl.length; rowIndex++) {
                        if (tbl[rowIndex]) {
                            index = tbl[rowIndex].indexOf(cell);
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
                    if (cell.getAttribute("headers")) {
                        return commons.dom.idrefs(cell, "headers");
                    }
                    var headers = [], currentCell, tbl = commons.table.toArray(commons.dom.findUp(cell, "table")), position = commons.table.getCellPosition(cell);
                    for (var x = position.x - 1; x >= 0; x--) {
                        currentCell = tbl[position.y][x];
                        if (commons.table.isRowHeader(currentCell)) {
                            headers.unshift(currentCell);
                        }
                    }
                    for (var y = position.y - 1; y >= 0; y--) {
                        currentCell = tbl[y][position.x];
                        if (currentCell && commons.table.isColumnHeader(currentCell)) {
                            headers.unshift(currentCell);
                        }
                    }
                    return headers;
                };
                table.isColumnHeader = function (node) {
                    var scope = node.getAttribute("scope");
                    if (scope === "col") {
                        return true;
                    } else {
                        if (scope || node.nodeName !== "TH") {
                            return false;
                        }
                    }
                    var currentCell, position = table.getCellPosition(node), tbl = table.toArray(dom.findUp(node, "table")), cells = tbl[position.y];
                    for (var cellIndex = 0, cellLength = cells.length; cellIndex < cellLength; cellIndex++) {
                        currentCell = cells[cellIndex];
                        if (currentCell !== node) {
                            if (table.isDataCell(currentCell)) {
                                return false;
                            }
                        }
                    }
                    return true;
                };
                table.isDataCell = function (cell) {
                    if (!cell.children.length && !cell.textContent.trim()) {
                        return false;
                    }
                    return cell.nodeName === "TD";
                };
                table.isDataTable = function (node) {
                    var role = node.getAttribute("role");
                    if ((role === "presentation" || role === "none") && !dom.isFocusable(node)) {
                        return false;
                    }
                    if (node.getAttribute("contenteditable") === "true" || dom.findUp(node, '[contenteditable="true"]')) {
                        return true;
                    }
                    if (role === "grid" || role === "treegrid" || role === "table") {
                        return true;
                    }
                    if (commons.aria.getRoleType(role) === "landmark") {
                        return true;
                    }
                    if (node.getAttribute("datatable") === "0") {
                        return false;
                    }
                    if (node.getAttribute("summary")) {
                        return true;
                    }
                    if (node.tHead || node.tFoot || node.caption) {
                        return true;
                    }
                    for (var childIndex = 0, childLength = node.children.length; childIndex < childLength; childIndex++) {
                        if (node.children[childIndex].nodeName === "COLGROUP") {
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
                            if (!hasBorder && (cell.offsetWidth !== cell.clientWidth || cell.offsetHeight !== cell.clientHeight)) {
                                hasBorder = true;
                            }
                            if (cell.getAttribute("scope") || cell.getAttribute("headers") || cell.getAttribute("abbr")) {
                                return true;
                            }
                            if (cell.nodeName === "TH") {
                                return true;
                            }
                            if (cell.children.length === 1 && cell.children[0].nodeName === "ABBR") {
                                return true;
                            }
                            cells++;
                        }
                    }
                    if (node.getElementsByTagName("table").length) {
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
                        if (bgColor && bgColor !== window.getComputedStyle(row).getPropertyValue("background-color")) {
                            return true;
                        } else {
                            bgColor = window.getComputedStyle(row).getPropertyValue("background-color");
                        }
                        if (bgImage && bgImage !== window.getComputedStyle(row).getPropertyValue("background-image")) {
                            return true;
                        } else {
                            bgImage = window.getComputedStyle(row).getPropertyValue("background-image");
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
                    if (node.querySelector("object, embed, iframe, applet")) {
                        return false;
                    }
                    return true;
                };
                table.isHeader = function (cell) {
                    if (table.isColumnHeader(cell) || table.isRowHeader(cell)) {
                        return true;
                    }
                    if (cell.id) {
                        return !!document.querySelector('[headers~="' + utils.escapeSelector(cell.id) + '"]');
                    }
                    return false;
                };
                table.isRowHeader = function (node) {
                    var scope = node.getAttribute("scope");
                    if (scope === "row") {
                        return true;
                    } else {
                        if (scope || node.nodeName !== "TH") {
                            return false;
                        }
                    }
                    if (table.isColumnHeader(node)) {
                        return false;
                    }
                    var currentCell, position = table.getCellPosition(node), tbl = table.toArray(dom.findUp(node, "table"));
                    for (var rowIndex = 0, rowLength = tbl.length; rowIndex < rowLength; rowIndex++) {
                        currentCell = tbl[rowIndex][position.x];
                        if (currentCell !== node) {
                            if (table.isDataCell(currentCell)) {
                                return false;
                            }
                        }
                    }
                    return true;
                };
                table.toArray = function (node) {
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
                var defaultButtonValues = {
                    submit: "Submit",
                    reset: "Reset"
                };
                var inputTypes = ["text", "search", "tel", "url", "email", "date", "time", "number", "range", "color"];
                var phrasingElements = ["a", "em", "strong", "small", "mark", "abbr", "dfn", "i", "b", "s", "u", "code", "var", "samp", "kbd", "sup", "sub", "q", "cite", "span", "bdo", "bdi", "br", "wbr", "ins", "del", "img", "embed", "object", "iframe", "map", "area", "script", "noscript", "ruby", "video", "audio", "input", "textarea", "select", "button", "label", "output", "datalist", "keygen", "progress", "command", "canvas", "time", "meter"];
                function findLabel(element) {
                    var ref = null;
                    if (element.id) {
                        ref = document.querySelector('label[for="' + utils.escapeSelector(element.id) + '"]');
                        if (ref) {
                            return ref;
                        }
                    }
                    ref = dom.findUp(element, "label");
                    return ref;
                }
                function isButton(element) {
                    return ["button", "reset", "submit"].indexOf(element.type) !== -1;
                }
                function isInput(element) {
                    return element.nodeName === "TEXTAREA" || element.nodeName === "SELECT" || element.nodeName === "INPUT" && element.type !== "hidden";
                }
                function shouldCheckSubtree(element) {
                    return ["BUTTON", "SUMMARY", "A"].indexOf(element.nodeName) !== -1;
                }
                function shouldNeverCheckSubtree(element) {
                    return ["TABLE", "FIGURE"].indexOf(element.nodeName) !== -1;
                }
                function formValueText(element) {
                    if (element.nodeName === "INPUT") {
                        if (!element.hasAttribute("type") || inputTypes.indexOf(element.getAttribute("type")) !== -1 && element.value) {
                            return element.value;
                        }
                        return "";
                    }
                    if (element.nodeName === "SELECT") {
                        var opts = element.options;
                        if (opts && opts.length) {
                            var returnText = "";
                            for (var i = 0; i < opts.length; i++) {
                                if (opts[i].selected) {
                                    returnText += " " + opts[i].text;
                                }
                            }
                            return text.sanitize(returnText);
                        }
                        return "";
                    }
                    if (element.nodeName === "TEXTAREA" && element.value) {
                        return element.value;
                    }
                    return "";
                }
                function checkDescendant(element, nodeName) {
                    var candidate = element.querySelector(nodeName);
                    if (candidate) {
                        return text.accessibleText(candidate);
                    }
                    return "";
                }
                function isEmbeddedControl(e) {
                    if (!e) {
                        return false;
                    }
                    switch (e.nodeName) {
                        case "SELECT":
                        case "TEXTAREA":
                            return true;

                        case "INPUT":
                            return !e.hasAttribute("type") || inputTypes.indexOf(e.getAttribute("type")) !== -1;

                        default:
                            return false;
                    }
                }
                function shouldCheckAlt(element) {
                    return element.nodeName === "INPUT" && element.type === "image" || ["IMG", "APPLET", "AREA"].indexOf(element.nodeName) !== -1;
                }
                function nonEmptyText(t) {
                    return !!text.sanitize(t);
                }
                text.accessibleText = function (element) {
                    function checkNative(element, inLabelledByContext, inControlContext) {
                        var returnText = "";
                        if (shouldCheckSubtree(element)) {
                            returnText = getInnerText(element, false, false) || "";
                            if (nonEmptyText(returnText)) {
                                return returnText;
                            }
                        }
                        if (element.nodeName === "FIGURE") {
                            returnText = checkDescendant(element, "figcaption");
                            if (nonEmptyText(returnText)) {
                                return returnText;
                            }
                        }
                        if (element.nodeName === "TABLE") {
                            returnText = checkDescendant(element, "caption");
                            if (nonEmptyText(returnText)) {
                                return returnText;
                            }
                            returnText = element.getAttribute("title") || element.getAttribute("summary") || "";
                            if (nonEmptyText(returnText)) {
                                return returnText;
                            }
                        }
                        if (shouldCheckAlt(element)) {
                            return element.getAttribute("alt") || "";
                        }
                        if (isInput(element) && !inControlContext) {
                            if (isButton(element)) {
                                return element.value || element.title || defaultButtonValues[element.type] || "";
                            }
                            var labelElement = findLabel(element);
                            if (labelElement) {
                                return accessibleNameComputation(labelElement, inLabelledByContext, true);
                            }
                        }
                        return "";
                    }
                    function checkARIA(element, inLabelledByContext, inControlContext) {
                        if (!inLabelledByContext && element.hasAttribute("aria-labelledby")) {
                            return text.sanitize(dom.idrefs(element, "aria-labelledby").map(function (l) {
                                if (element === l) {
                                    encounteredNodes.pop();
                                }
                                return accessibleNameComputation(l, true, element !== l);
                            }).join(" "));
                        }
                        if (!(inControlContext && isEmbeddedControl(element)) && element.hasAttribute("aria-label")) {
                            return text.sanitize(element.getAttribute("aria-label"));
                        }
                        return "";
                    }
                    function getInnerText(element, inLabelledByContext, inControlContext) {
                        var nodes = element.childNodes;
                        var returnText = "";
                        var node;
                        for (var i = 0; i < nodes.length; i++) {
                            node = nodes[i];
                            if (node.nodeType === 3) {
                                returnText += node.textContent;
                            } else {
                                if (node.nodeType === 1) {
                                    if (phrasingElements.indexOf(node.nodeName.toLowerCase()) === -1) {
                                        returnText += " ";
                                    }
                                    returnText += accessibleNameComputation(nodes[i], inLabelledByContext, inControlContext);
                                }
                            }
                        }
                        return returnText;
                    }
                    var encounteredNodes = [];
                    function accessibleNameComputation(element, inLabelledByContext, inControlContext) {
                        "use strict";
                        var returnText = "";
                        if (element === null || !dom.isVisible(element, true) || encounteredNodes.indexOf(element) !== -1) {
                            return "";
                        }
                        encounteredNodes.push(element);
                        var role = element.getAttribute("role");
                        returnText += checkARIA(element, inLabelledByContext, inControlContext);
                        if (nonEmptyText(returnText)) {
                            return returnText;
                        }
                        returnText = checkNative(element, inLabelledByContext, inControlContext);
                        if (nonEmptyText(returnText)) {
                            return returnText;
                        }
                        if (inControlContext) {
                            returnText += formValueText(element);
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
                        if (element.hasAttribute("title")) {
                            return element.getAttribute("title");
                        }
                        return "";
                    }
                    return text.sanitize(accessibleNameComputation(element));
                };
                text.label = function (node) {
                    var ref, candidate;
                    candidate = aria.label(node);
                    if (candidate) {
                        return candidate;
                    }
                    if (node.id) {
                        ref = document.querySelector('label[for="' + utils.escapeSelector(node.id) + '"]');
                        candidate = ref && text.visible(ref, true);
                        if (candidate) {
                            return candidate;
                        }
                    }
                    ref = dom.findUp(node, "label");
                    candidate = ref && text.visible(ref, true);
                    if (candidate) {
                        return candidate;
                    }
                    return null;
                };
                text.sanitize = function (str) {
                    "use strict";
                    return str.replace(/\r\n/g, "\n").replace(/\u00A0/g, " ").replace(/[\s]{2,}/g, " ").trim();
                };
                text.visible = function (element, screenReader, noRecursing) {
                    "use strict";
                    var index, child, nodeValue, childNodes = element.childNodes, length = childNodes.length, result = "";
                    for (index = 0; index < length; index++) {
                        child = childNodes[index];
                        if (child.nodeType === 3) {
                            nodeValue = child.nodeValue;
                            if (nodeValue && dom.isVisible(element, screenReader)) {
                                result += child.nodeValue;
                            }
                        } else {
                            if (!noRecursing) {
                                result += text.visible(child, screenReader);
                            }
                        }
                    }
                    return text.sanitize(result);
                };
                utils.toArray = function (thing) {
                    "use strict";
                    return Array.prototype.slice.call(thing);
                };
                utils.tokenList = function (str) {
                    "use strict";
                    return str.trim().replace(/\s{2,}/g, " ").split(" ");
                };
                return commons;
            }()
        });
        axe.version = "1.1.1";
    })(window, window.document);

})();

function postJSON(O, url, callback) {
    var invocation = new XMLHttpRequest();
    invocation.open('POST', url, true);
    invocation.setRequestHeader('Content-Type', 'application/json');

    invocation.onload = function () {
        if (invocation.readyState === invocation.DONE) {
            if (invocation.status === 202) {
                callback(JSON.parse(invocation.response));
                // console.log(invocation.response);
            } else {
                callback({ "errornum": "4", "errortext": "The connection timed out. Please try again when you have a better network connection." });
                //TODO: better error handling
                //{ "errornum": "4", "errortext": "The connection timed out. Please try again when you have a better network connection." },
                //{ "errornum": "5", "errortext": "The request was denied. Please contact the network administrator." },
                //{ "errornum": "6", "errortext": "An Internal Server Error caused the application to fail. Please contact the network administrator." }
            }
        }
    };
    invocation.send(JSON.stringify(O));
}
var Results;


function aXeThis(send) {

    var url = 'http://localhost:3000';
    axe.a11yCheck(document, function (results) {
        Results = results;
        var page = Results.url;
        page = page.slice(page.lastIndexOf('/') + 1, page.lastIndexOf('page') + 4);
        console.log('Page: ', page);
        for (i = 0; i < Results.violations.length; i++) {
            console.log(Results.violations[i].impact, '   ', Results.violations[i].id, '  ', Results.violations[i].description);
            if (Results.violations[i].nodes.length > 0) {
                console.log('     Affected nodes:');
                for (y = 0; y < Results.violations[i].nodes.length; y++) {
                    console.log('          ', Results.violations[i].nodes[y].html);
                }
            }
            console.log('');
        }


        chrome.runtime.sendMessage(Results, function (response) {
            if (response != null)
                console.log(response.farewell);
        });
        if (send === true) {
            postJSON(Results, url, function (d) {
                console.log(d);
                if (d.hasOwnProperty('status')) {
                    console.log('success!!!!!');
                    $('body').prepend('<div id="complianceMessage" style="display: none; border: 1px solid black; border-radius: 3px; padding: 10px; min-height: 30px; width: 200px; position: fixed; top:700px; right: 20px; background-color: green; font-size: 14px; color: white;z-index: 10000;">Saved!</div>')

                }
                if (d.hasOwnProperty('errornum')) {  //response handling 
                    $('body').prepend('<div id="complianceMessage" style="display: none; border: 1px solid black; border-radius: 3px; padding: 10px; min-height: 30px; width: 200px; position: fixed; top:700px; right: 20px; background-color: red; font-size: 14px; color: white;z-index: 10000;">Error saving compliance data</div>')
                }
                $('#complianceMessage').fadeIn(500);
                $('#complianceMessage').fadeOut(2000, function () {
                    if (Results.violations.length > 0) {
                        $('#complianceMessage').removeAttr('style');
                        $('#complianceMessage').attr('style', 'display: none; border: 1px solid black; border-radius: 3px; padding: 10px; min-height: 30px; width: 200px; position: fixed; top:700px; right: 20px; background-color: red; font-size: 14px; color: white;z-index: 10000;');
                        $('#complianceMessage').html('This page has accessibilty compliance errors');
                        $('#complianceMessage').fadeIn(500);
                        $('#complianceMessage').fadeOut(3000);
                    }
                });
            });
        }
    });
}

$(document).ready(function (e) {
    aXeThis(true);
});

