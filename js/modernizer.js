/*! modernizr 3.6.0 (Custom Build) | MIT *
automatically generated by given choices
 * https://modernizr.com/download/?-arrow-generators-promises-templatestrings-setclasses !*/
 !function (window, document, undefined) {
    function is(e, n) { return typeof e === n }
    function testRunner() {
        var e, n, o, s, r, t, i;
        for (var a in tests)
            if (tests.hasOwnProperty(a)) {
                i
                f(e = [], n = tests[a], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                for (o = 0; o < n.options.aliases.length; o++)e.push(n.options.aliases[o].toLowerCase());
                for (s = is(n.fn, "function") ? n.fn() : n.fn, r = 0; r < e.length; r++)t = e[r], i = t.split("."), 1 === i.length ? Modernizr[i[0]] = s :
                    (!Modernizr[i[0]] || Modernizr[i[0]] instanceof Boolean || (Modernizr[i[0]] = new Boolean(Modernizr[i[0]])),
                        Modernizr[i[0]][i[1]] = s), classes.push((s ? "" : "no-") + i.join("-"))
            }
    } function setClasses(e) {
        var n = docElement.className, o = Modernizr._config.classPrefix || ""; if (isSVG && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var s = new RegExp("(^|\\s)" + o + "no-js(\\s|$)"); n = n.replace(s, "$1" + o + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + o + e.join(" " + o), isSVG ? docElement.className.baseVal = n : docElement.className = n)
    }
    var classes = [], tests = [], ModernizrProto = {
        _version: "3.6.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function (e, n) {
            var o = this;
            setTimeout(function () { n(o[e]) }, 0)
        }, addTest: function (e, n, o) { tests.push({ name: e, fn: n, options: o }) }, addAsyncTest: function (e) { tests.push({ name: null, fn: e }) }
    },
        Modernizr = function () { };
    Modernizr.prototype = ModernizrProto, Modernizr = new Modernizr, Modernizr.addTest("templatestrings", function () { var supports; try { eval("``"), supports = !0 } catch (e) { } return !!supports }), Modernizr.addTest("promises", function () {
        return "Promise" in window && "resolve" in window.Promise && "reject" in window.Promise && "all" in window.Promise && "race" in window.Promise && function () {
            var e;
            return new window.Promise(function (n) { e = n }), "function" == typeof e
        }()
    }), Modernizr.addTest("arrow", function () { try { eval("()=>{}") } catch (e) { return !1 } return !0 }); var docElement = document.documentElement, isSVG = "svg" === docElement.nodeName.toLowerCase(); Modernizr.addTest("generators", function () {
        try { new Function("function* test() {}")() } catch (e) { return !1 } return !0
    }), testRunner(), setClasses(classes), delete ModernizrProto.addTest, delete ModernizrProto.addAsyncTest;
    for (var i = 0; i < Modernizr._q.length; i++)Modernizr._q[i](); window.Modernizr = Modernizr
}(window, document);