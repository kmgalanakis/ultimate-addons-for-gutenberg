(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{124:function(e,t,n){"use strict";var a=n(10),o=n(25),l=n.n(o),i=n(125),r=n.n(i);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}if(void 0===g)var g=[];var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,e);var t,n,a,o,l=(a=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(a);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=l.call(this,e)).state={status:void 0},t.handleLoading=function(){t.setState({status:"loading"})},t.addFont=function(e){g.includes(e)||g.push(e)},t.handleActive=function(){t.setState({status:"active"})},t.handleInactive=function(){t.setState({status:"inactive"})},t.loadFonts=function(){g.includes(t.props.config.google.families[0])||(r.a.load(u(u({},t.props.config),{},{loading:t.handleLoading,active:t.handleActive,inactive:t.handleInactive})),t.addFont(t.props.config.google.families[0]))},t}return t=i,(n=[{key:"componentDidMount",value:function(){this.loadFonts()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.onStatus,o=n.config;t.status!==this.state.status&&a(this.state.status),e.config!==o&&this.loadFonts()}},{key:"render",value:function(){return this.props.children||null}}])&&b(t.prototype,n),i}(a.Component);m.propTypes={config:l.a.object.isRequired,children:l.a.element,onStatus:l.a.func.isRequired},m.defaultProps={onStatus:function(){}},t.a=m},125:function(e,t,n){var a;!function(){function o(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){if(!e)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function i(e,t,n){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function c(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var s=!!window.FontFace;function u(e,t,n,a){if(t=e.c.createElement(t),n)for(var o in n)n.hasOwnProperty(o)&&("style"==o?t.style.cssText=n[o]:t.setAttribute(o,n[o]));return a&&t.appendChild(e.c.createTextNode(a)),t}function f(e,t,n){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(n,e.lastChild)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e,t,n){t=t||[],n=n||[];for(var a=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var l=!1,i=0;i<a.length;i+=1)if(t[o]===a[i]){l=!0;break}l||a.push(t[o])}for(t=[],o=0;o<a.length;o+=1){for(l=!1,i=0;i<n.length;i+=1)if(a[o]===n[i]){l=!0;break}l||t.push(a[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function h(e,t){for(var n=e.className.split(/\s+/),a=0,o=n.length;a<o;a++)if(n[a]==t)return!0;return!1}function d(e,t,n){function a(){r&&o&&l&&(r(i),r=null)}t=u(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,l=!0,i=null,r=n||null;s?(t.onload=function(){o=!0,a()},t.onerror=function(){o=!0,i=Error("Stylesheet failed to load"),a()}):setTimeout((function(){o=!0,a()}),0),f(e,"head",t)}function g(e,t,n,a){var o=e.c.getElementsByTagName("head")[0];if(o){var l=u(e,"script",{src:t}),i=!1;return l.onload=l.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,n&&n(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&o.removeChild(l))},o.appendChild(l),setTimeout((function(){i||(i=!0,n&&n(Error("Script load timeout")))}),a||5e3),l}return null}function m(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,_(e)}}function y(e,t){e.c=t,_(e)}function _(e){0==e.a&&e.c&&(e.c(),e.c=null)}function w(e){this.a=e||"-"}function E(e,t){this.c=e,this.f=4,this.a="n";var n=(t||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function S(e){var t=[];e=e.split(/,\s*/);for(var n=0;n<e.length;n++){var a=e[n].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?t.push("'"+a+"'"):t.push(a)}return t.join(",")}function C(e){return e.a+e.f}function x(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function O(e){var t=4,n="n",a=null;return e&&((a=e.match(/(normal|oblique|italic)/i))&&a[1]&&(n=a[1].substr(0,1).toLowerCase()),(a=e.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?t=7:/[1-9]00/.test(a[1])&&(t=parseInt(a[1].substr(0,1),10)))),n+t}function j(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new w("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function T(e){if(e.g){var t=h(e.f,e.a.c("wf","active")),n=[],a=[e.a.c("wf","loading")];t||n.push(e.a.c("wf","inactive")),p(e.f,n,a)}k(e,"inactive")}function k(e,t,n){e.j&&e.h[t]&&(n?e.h[t](n.c,C(n)):e.h[t]())}function N(){this.c={}}function R(e,t){this.c=e,this.f=t,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function P(e){f(e.c,"body",e.a)}function F(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+S(e.c)+";font-style:"+x(e)+";font-weight:"+e.f+"00;"}function z(e,t,n,a,o,l){this.g=e,this.j=t,this.a=a,this.c=n,this.f=o||3e3,this.h=l||void 0}function H(e,t,n,a,o,l,i){this.v=e,this.B=t,this.c=n,this.a=a,this.s=i||"BESbswy",this.f={},this.w=o||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new R(this.c,this.s),this.h=new R(this.c,this.s),this.j=new R(this.c,this.s),this.m=new R(this.c,this.s),e=F(e=new E(this.a.c+",serif",C(this.a))),this.g.a.style.cssText=e,e=F(e=new E(this.a.c+",sans-serif",C(this.a))),this.h.a.style.cssText=e,e=F(e=new E("serif",C(this.a))),this.j.a.style.cssText=e,e=F(e=new E("sans-serif",C(this.a))),this.m.a.style.cssText=e,P(this.g),P(this.h),P(this.j),P(this.m)}w.prototype.c=function(e){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},z.prototype.start=function(){var e=this.c.o.document,t=this,n=r(),a=new Promise((function(a,o){!function l(){r()-n>=t.f?o():e.fonts.load(function(e){return x(e)+" "+e.f+"00 300px "+S(e.c)}(t.a),t.h).then((function(e){1<=e.length?a():setTimeout(l,25)}),(function(){o()}))}()})),o=null,l=new Promise((function(e,n){o=setTimeout(n,t.f)}));Promise.race([l,a]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var A={D:"serif",C:"sans-serif"},B=null;function D(){if(null===B){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);B=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return B}function L(e,t,n){for(var a in A)if(A.hasOwnProperty(a)&&t===e.f[A[a]]&&n===e.f[A[a]])return!0;return!1}function I(e,t){setTimeout(i((function(){b(this.g.a),b(this.h.a),b(this.j.a),b(this.m.a),t(this.a)}),e),0)}function M(e,t,n){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=n}H.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var n,a=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(n=a===t.f.serif&&o===t.f["sans-serif"])||(n=D()&&L(t,a,o)),n?r()-t.A>=t.w?D()&&L(t,a,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?I(t,t.v):I(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):I(t,t.v)}(this)};var W=null;function G(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&p(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),k(e,"active")):T(e.a))}function V(e){this.j=e,this.a=new N,this.h=0,this.f=this.g=!0}function q(e,t,n,a,o){var l=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,r=a||{};if(0===n.length&&l)T(t.a);else{t.f+=n.length,l&&(t.j=l);var c,s=[];for(c=0;c<n.length;c++){var u=n[c],f=r[u.c],b=t.a,h=u;if(b.g&&p(b.f,[b.a.c("wf",h.c,C(h).toString(),"loading")]),k(b,"fontloading",h),b=null,null===W)if(window.FontFace){h=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);W=h?42<parseInt(h[1],10):!d}else W=!1;b=W?new z(i(t.g,t),i(t.h,t),t.c,u,t.s,f):new H(i(t.g,t),i(t.h,t),t.c,u,t.s,e,f),s.push(b)}for(c=0;c<s.length;c++)s[c].start()}}),0)}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e,this.a=t}function U(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}M.prototype.g=function(e){var t=this.a;t.g&&p(t.f,[t.a.c("wf",e.c,C(e).toString(),"active")],[t.a.c("wf",e.c,C(e).toString(),"loading"),t.a.c("wf",e.c,C(e).toString(),"inactive")]),k(t,"fontactive",e),this.m=!0,G(this)},M.prototype.h=function(e){var t=this.a;if(t.g){var n=h(t.f,t.a.c("wf",e.c,C(e).toString(),"active")),a=[],o=[t.a.c("wf",e.c,C(e).toString(),"loading")];n||a.push(t.a.c("wf",e.c,C(e).toString(),"inactive")),p(t.f,a,o)}k(t,"fontinactive",e),G(this)},V.prototype.load=function(e){this.c=new c(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,n){var a=[],o=n.timeout;!function(e){e.g&&p(e.f,[e.a.c("wf","loading")]),k(e,"loading")}(t),a=function(e,t,n){var a,o=[];for(a in t)if(t.hasOwnProperty(a)){var l=e.c[a];l&&o.push(l(t[a],n))}return o}(e.a,n,e.c);var l=new M(e.c,t,o);for(e.h=a.length,t=0,n=a.length;t<n;t++)a[t].load((function(t,n,a){q(e,l,t,n,a)}))}(this,new j(this.c,e),e)},$.prototype.load=function(e){var t=this,n=t.a.projectId,a=t.a.version;if(n){var o=t.c.o;g(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(a?"?v="+a:""),(function(a){a?e([]):(o["__MonotypeConfiguration__"+n]=function(){return t.a},function t(){if(o["__mti_fntLst"+n]){var a,l=o["__mti_fntLst"+n](),i=[];if(l)for(var r=0;r<l.length;r++){var c=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(a=l[r].fontStyle+l[r].fontWeight,i.push(new E(c,a))):i.push(new E(c))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+n}else e([])},J.prototype.load=function(e){var t,n,a=this.a.urls||[],o=this.a.families||[],l=this.a.testStrings||{},i=new m;for(t=0,n=a.length;t<n;t++)d(this.c,a[t],v(i));var r=[];for(t=0,n=o.length;t<n;t++)if((a=o[t].split(":"))[1])for(var c=a[1].split(","),s=0;s<c.length;s+=1)r.push(new E(a[0],c[s]));else r.push(new E(a[0]));y(i,(function(){e(r,l)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ne={Arimo:!0,Cousine:!0,Tinos:!0};function ae(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new m,n=this.c,a=new U(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var n=t.length,a=0;a<n;a++){var o=t[a].split(":");3==o.length&&e.f.push(o.pop());var l="";2==o.length&&""!=o[1]&&(l=":"),e.a.push(o.join(l))}}(a,o);var l=new X(o);!function(e){for(var t=e.f.length,n=0;n<t;n++){var a=e.f[n].split(":"),o=a[0].replace(/\+/g," "),l=["n4"];if(2<=a.length){var i;if(i=[],r=a[1])for(var r,c=(r=r.split(",")).length,s=0;s<c;s++){var u;if((u=r[s]).match(/^[\w-]+$/))if(null==(f=ee.exec(u.toLowerCase())))u="";else{if(u=null==(u=f[2])||""==u?"n":Z[u],null==(f=f[1])||""==f)f="4";else var f=Y[f]||(isNaN(f)?"4":f.substr(0,1));u=[u,f].join("")}else u="";u&&i.push(u)}0<i.length&&(l=i),3==a.length&&(i=[],0<(a=(a=a[2])?a.split(","):i).length&&(a=Q[a[0]])&&(e.c[o]=a))}for(e.c[o]||(a=Q[o])&&(e.c[o]=a),a=0;a<l.length;a+=1)e.a.push(new E(o,l[a]))}}(l),d(n,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,n=[],a=0;a<t;a++)n.push(e.a[a].replace(/ /g,"+"));return t=e.c+"?family="+n.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(a),v(t)),y(t,(function(){e(l.a,l.c,ne)}))},ae.prototype.load=function(e){var t=this.a.id,n=this.c.o;t?g(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){t=n.Typekit.config.fn;for(var a=[],o=0;o<t.length;o+=2)for(var l=t[o],i=t[o+1],r=0;r<i.length;r++)a.push(new E(l,i[r]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(a)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,n=this.c.o,a=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var o=0,l=n.fonts.length;o<l;++o){var i=n.fonts[o];a.a.push(new E(i.name,O("font-weight:"+i.weight+";font-style:"+i.style)))}e(a.a)},g(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var le=new V(window);le.a.c.custom=function(e,t){return new J(t,e)},le.a.c.fontdeck=function(e,t){return new oe(t,e)},le.a.c.monotype=function(e,t){return new $(t,e)},le.a.c.typekit=function(e,t){return new ae(t,e)},le.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(le.load,le)};void 0===(a=function(){return ie}.call(t,n,t,e))||(e.exports=a)}()},133:function(e,t,n){"use strict";var a=n(2),o=n(4),l=n(5),i=n(10);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(g,e);var t,n,r,h,d=(r=g,h=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(h){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function g(){var e;return c(this,g),(e=d.apply(this,arguments)).onAdvancedControlClick=e.onAdvancedControlClick.bind(b(e)),e.onAdvancedControlReset=e.onAdvancedControlReset.bind(b(e)),e}return t=g,(n=[{key:"onAdvancedControlClick",value:function(){var e=!0,t=Object(a.__)("Hide Advanced","ultimate-addons-for-gutenberg");null!==this.state&&!0===this.state.showAdvancedControls&&(e=!1,t=Object(a.__)("Advanced","ultimate-addons-for-gutenberg")),this.setState({showAdvancedControls:e,showAdvancedControlsLabel:t})}},{key:"onAdvancedControlReset",value:function(){var e=this.props.setAttributes;e({boxShadowColor:""}),e({boxShadowHOffset:""}),e({boxShadowVOffset:""}),e({boxShadowBlur:""}),e({boxShadowSpread:""}),e({boxShadowPosition:""})}},{key:"render",value:function(){var e,t,n,r=this.props,c=r.setAttributes,s=r.boxShadowColor,u=r.boxShadowHOffset,f=r.boxShadowVOffset,b=r.boxShadowBlur,p=r.boxShadowSpread,h=r.boxShadowPosition;return null!==this.state&&!0===this.state.showAdvancedControls&&(e=React.createElement("div",{className:"uagb-box-shadow-advanced"},React.createElement(i.Fragment,null,React.createElement("p",{className:"uagb-setting-label"},s.label,React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:s.value}}))),React.createElement(o.ColorPalette,{value:s.value,onChange:function(e){return c({boxShadowColor:e})},allowReset:!0})),React.createElement(i.Fragment,null,React.createElement("h2",null,u.label),React.createElement(l.RangeControl,{value:u.value,onChange:function(e){return c({boxShadowHOffset:e})},min:-100,max:100,allowReset:!0})),React.createElement(i.Fragment,null,React.createElement("h2",null,f.label),React.createElement(l.RangeControl,{value:f.value,onChange:function(e){return c({boxShadowVOffset:e})},min:-100,max:100,allowReset:!0})),React.createElement(i.Fragment,null,React.createElement("h2",null,b.label),React.createElement(l.RangeControl,{value:b.value,onChange:function(e){return c({boxShadowBlur:e})},min:0,max:100,allowReset:!0})),React.createElement(i.Fragment,null,React.createElement("h2",null,p.label),React.createElement(l.RangeControl,{value:p.value,onChange:function(e){return c({boxShadowSpread:e})},min:0,max:100,allowReset:!0})),React.createElement(i.Fragment,null,React.createElement(l.SelectControl,{label:h.label,value:h.value,onChange:function(e){return c({boxShadowPosition:e})},options:[{value:"inset",label:Object(a.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(a.__)("Outset","ultimate-addons-for-gutenberg")}]})))),n=React.createElement(l.Button,{className:"uagb-size-btn uagb-typography-reset-btn",isSmall:!0,"aria-pressed":null!==this.state,onClick:this.onAdvancedControlReset},React.createElement(l.Dashicon,{icon:"image-rotate"})),t=React.createElement(l.Button,{className:"uagb-size-btn uagb-typography-control-btn",isSmall:!0,"aria-pressed":null!==this.state,onClick:this.onAdvancedControlClick},React.createElement(l.Dashicon,{icon:"admin-tools"})),React.createElement("div",{className:"uag-typography-option-actions"},React.createElement("span",null,this.props.label),t,n,e)}}])&&s(t.prototype,n),g}(i.Component);t.a=h},474:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),l=n(2),i=n(6),r=n(8),c=n(51),s=n(17),u=n(133),f=n(124),b=wp.components,p=b.PanelBody,h=b.SelectControl,d=b.RangeControl,g=b.TextControl,m=b.ButtonGroup,v=b.Button,y=wp.blockEditor,_=y.InspectorControls,w=y.ColorPalette,E=function(e){var t,n,b=e=e.parentProps,y=b.attributes,E=b.setAttributes,S=b.deviceType,C=y.layout,x=y.placeholder,O=y.inputSize,j=y.textColor,T=y.inputBgColor,k=y.boxShadowColor,N=y.boxShadowHOffset,R=y.boxShadowVOffset,P=y.boxShadowBlur,F=y.boxShadowSpread,z=y.boxShadowPosition,H=y.borderStyle,A=y.borderWidth,B=y.borderRadius,D=y.borderColor,L=y.buttonBgColor,I=y.buttonBgHoverColor,M=y.buttonIconColor,W=y.buttonIconHoverColor,G=y.buttonWidth,V=y.buttonIconSize,q=y.iconColor,$=y.iconSize,J=y.inputloadGoogleFonts,U=y.inputFontFamily,K=y.inputFontWeight,X=y.inputFontSubset,Q=y.inputFontSize,Y=y.inputFontSizeType,Z=y.inputFontSizeTablet,ee=y.inputFontSizeMobile,te=y.inputLineHeight,ne=y.inputLineHeightType,ae=y.inputLineHeightTablet,oe=y.inputLineHeightMobile,le=y.inputPaddingTypeDesktop,ie=y.vinputPaddingMobile,re=y.vinputPaddingTablet,ce=y.vinputPaddingDesktop,se=y.hinputPaddingMobile,ue=y.hinputPaddingTablet,fe=y.hinputPaddingDesktop,be=y.buttonType,pe=y.buttonText,he=y.buttonloadGoogleFonts,de=y.buttonFontFamily,ge=y.buttonFontWeight,me=y.buttonFontSubset,ve=y.buttonFontSize,ye=y.buttonFontSizeType,_e=y.buttonFontSizeTablet,we=y.buttonFontSizeMobile,Ee=y.buttonLineHeight,Se=y.buttonLineHeightType,Ce=y.buttonLineHeightTablet,xe=y.buttonLineHeightMobile,Oe=y.buttonTextColor,je=y.buttonTextHoverColor,Te=y.inputSizeType;if(1==J){var ke={google:{families:[U+(K?":"+K:"")]}};t=o.a.createElement(f.a,{config:ke})}if(1==he){var Ne={google:{families:[de+(ge?":"+ge:"")]}};n=o.a.createElement(f.a,{config:Ne})}return o.a.createElement(a.Suspense,{fallback:Object(r.a)()},o.a.createElement(_,null,o.a.createElement(p,{title:Object(l.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb__url-panel-body"},o.a.createElement(h,{label:Object(l.__)("Layout","ultimate-addons-for-gutenberg"),value:C,options:[{value:"input-button",label:Object(l.__)("Classic","ultimate-addons-for-gutenberg")},{value:"input",label:Object(l.__)("Minimal","ultimate-addons-for-gutenberg")}],onChange:function(e){return E({layout:e})}}),o.a.createElement(o.a.Fragment,null,o.a.createElement(g,{label:Object(l.__)("Placeholder","ultimate-addons-for-gutenberg"),value:x,onChange:function(e){return E({placeholder:e})}}),o.a.createElement(m,{className:"uagb-size-type-field","aria-label":Object(l.__)("Size Type","ultimate-addons-for-gutenberg")},o.a.createElement(v,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Te,"aria-pressed":"px"===Te,onClick:function(){return E({inputSizeType:"px"})}},"px"),o.a.createElement(v,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Te,"aria-pressed":"%"===Te,onClick:function(){return E({inputSizeType:"%"})}},"%")),o.a.createElement(d,{label:Object(l.__)("Input Width","ultimate-addons-for-gutenberg"),value:O,onChange:function(e){return E({inputSize:e})},min:0,max:"px"===Te?500:100}))),o.a.createElement(p,{title:Object(l.__)("Input Box","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},o.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Text Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:j}}))),o.a.createElement(w,{value:j,onChange:function(e){return E({textColor:e})},allowReset:!0}),o.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Background Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:T}}))),o.a.createElement(w,{value:T,onChange:function(e){return E({inputBgColor:e})},allowReset:!0}),o.a.createElement("hr",null),o.a.createElement("h2",null,Object(l.__)("Border","ultimate-addons-for-gutenberg")),o.a.createElement(h,{label:Object(l.__)("Style","ultimate-addons-for-gutenberg"),value:H,options:[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(l.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(l.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(l.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(l.__)("Double","ultimate-addons-for-gutenberg")}],onChange:function(e){E({borderStyle:e})}}),"none"!==H&&o.a.createElement(o.a.Fragment,null,o.a.createElement(d,{label:Object(l.__)("Thickness (px)","ultimate-addons-for-gutenberg"),value:A,onChange:function(e){E({borderWidth:e})},min:0,max:20}),o.a.createElement(d,{label:Object(l.__)("Rounded Corners (px)","ultimate-addons-for-gutenberg"),value:B,onChange:function(e){E({borderRadius:e})},min:0,max:50}),o.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:D}}))),o.a.createElement(w,{value:D,onChange:function(e){return E({borderColor:e})},allowReset:!0})),o.a.createElement("hr",null),o.a.createElement(c.default,null),"Desktop"===S&&o.a.createElement(o.a.Fragment,null,o.a.createElement(m,{className:"uagb-size-type-field","aria-label":Object(l.__)("Size Type","ultimate-addons-for-gutenberg")},o.a.createElement(v,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===le,"aria-pressed":"px"===le,onClick:function(){return E({inputPaddingTypeDesktop:"px"})}},"px"),o.a.createElement(v,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===le,"aria-pressed":"%"===le,onClick:function(){return E({inputPaddingTypeDesktop:"%"})}},"%")),o.a.createElement("h2",null,Object(l.__)("Padding","ultimate-addons-for-gutenberg")),o.a.createElement(d,{label:i.a.vertical_spacing,className:"uagb-margin-control",value:ce,onChange:function(e){return E({vinputPaddingDesktop:e})},min:0,max:100,allowReset:!0}),o.a.createElement(d,{label:i.a.horizontal_spacing,className:"uagb-margin-control",value:fe,onChange:function(e){return E({hinputPaddingDesktop:e})},min:0,max:100,allowReset:!0})),"Tablet"===S&&o.a.createElement(o.a.Fragment,null,o.a.createElement(m,{className:"uagb-size-type-field","aria-label":Object(l.__)("Size Type","ultimate-addons-for-gutenberg")},o.a.createElement(v,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===le,"aria-pressed":"px"===le,onClick:function(){return E({inputPaddingTypeDesktop:"px"})}},"px"),o.a.createElement(v,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===le,"aria-pressed":"%"===le,onClick:function(){return E({inputPaddingTypeDesktop:"%"})}},"%")),o.a.createElement("h2",null,Object(l.__)("Padding","ultimate-addons-for-gutenberg")),o.a.createElement(d,{label:i.a.vertical_spacing,className:"uagb-margin-control",value:re,onChange:function(e){return E({vinputPaddingTablet:e})},min:0,max:100,allowReset:!0}),o.a.createElement(d,{label:i.a.horizontal_spacing,className:"uagb-margin-control",value:ue,onChange:function(e){return E({hinputPaddingTablet:e})},min:0,max:100,allowReset:!0})),"Mobile"===S&&o.a.createElement(o.a.Fragment,null,o.a.createElement(m,{className:"uagb-size-type-field","aria-label":Object(l.__)("Size Type","ultimate-addons-for-gutenberg")},o.a.createElement(v,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===le,"aria-pressed":"px"===le,onClick:function(){return E({inputPaddingTypeDesktop:"px"})}},"px"),o.a.createElement(v,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===le,"aria-pressed":"%"===le,onClick:function(){return E({inputPaddingTypeDesktop:"%"})}},"%")),o.a.createElement("h2",null,Object(l.__)("Padding","ultimate-addons-for-gutenberg")),o.a.createElement(d,{label:i.a.vertical_spacing,className:"uagb-margin-control",value:ie,onChange:function(e){return E({vinputPaddingMobile:e})},min:0,max:100,allowReset:!0}),o.a.createElement(d,{label:i.a.horizontal_spacing,className:"uagb-margin-control",value:se,onChange:function(e){return E({hinputPaddingMobile:e})},min:0,max:100,allowReset:!0})),o.a.createElement("hr",null),o.a.createElement(s.default,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:y,setAttributes:E,loadGoogleFonts:{value:J,label:"inputloadGoogleFonts"},fontFamily:{value:U,label:"inputFontFamily"},fontWeight:{value:K,label:"inputFontWeight"},fontSubset:{value:X,label:"inputFontSubset"},fontSizeType:{value:Y,label:"inputFontSizeType"},fontSize:{value:Q,label:"inputFontSize"},fontSizeMobile:{value:ee,label:"inputFontSizeMobile"},fontSizeTablet:{value:Z,label:"inputFontSizeTablet"},lineHeightType:{value:ne,label:"inputLineHeightType"},lineHeight:{value:te,label:"inputLineHeight"},lineHeightMobile:{value:oe,label:"inputLineHeightMobile"},lineHeightTablet:{value:ae,label:"inputLineHeightTablet"}}),o.a.createElement(u.a,{setAttributes:E,label:Object(l.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:k,label:Object(l.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:N,label:Object(l.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:R,label:Object(l.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:P,label:Object(l.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:F,label:Object(l.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:z,label:Object(l.__)("Position","ultimate-addons-for-gutenberg")}})),"input-button"===C?o.a.createElement(p,{title:Object(l.__)("Button","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{label:Object(l.__)("Type","ultimate-addons-for-gutenberg"),value:be,options:[{value:"icon",label:Object(l.__)("Icon","ultimate-addons-for-gutenberg")},{value:"text",label:Object(l.__)("Text","ultimate-addons-for-gutenberg")}],onChange:function(e){E({buttonType:e})}}),"text"===be&&o.a.createElement(o.a.Fragment,null,o.a.createElement(g,{label:"Text",value:pe,onChange:function(e){E({buttonText:e})}}),o.a.createElement(s.default,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:y,setAttributes:E,loadGoogleFonts:{value:he,label:"buttonloadGoogleFonts"},fontFamily:{value:de,label:"buttonFontFamily"},fontWeight:{value:ge,label:"buttonFontWeight"},fontSubset:{value:me,label:"buttonFontSubset"},fontSizeType:{value:ye,label:"buttonFontSizeType"},fontSize:{value:ve,label:"buttonFontSize"},fontSizeMobile:{value:we,label:"buttonFontSizeMobile"},fontSizeTablet:{value:_e,label:"buttonFontSizeTablet"},lineHeightType:{value:Se,label:"buttonLineHeightType"},lineHeight:{value:Ee,label:"buttonLineHeight"},lineHeightMobile:{value:xe,label:"buttonLineHeightMobile"},lineHeightTablet:{value:Ce,label:"buttonLineHeightTablet"}})),o.a.createElement(d,{label:Object(l.__)("Width","ultimate-addons-for-gutenberg"),value:G,onChange:function(e){E({buttonWidth:e})},min:0,max:500}),o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Background Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:L}}))),o.a.createElement(w,{value:L,onChange:function(e){return E({buttonBgColor:e})},allowReset:!0}),o.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Background Hover Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:I}}))),o.a.createElement(w,{value:I,onChange:function(e){return E({buttonBgHoverColor:e})},allowReset:!0}),"text"===be&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Text Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Oe}}))),o.a.createElement(w,{value:Oe,onChange:function(e){return E({buttonTextColor:e})},allowReset:!0}),o.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Text Hover Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:je}}))),o.a.createElement(w,{value:je,onChange:function(e){return E({buttonTextHoverColor:e})},allowReset:!0}))),"icon"===be&&o.a.createElement(o.a.Fragment,null,o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(l.__)("Icon","ultimate-addons-for-gutenberg")),o.a.createElement(d,{label:Object(l.__)("Size","ultimate-addons-for-gutenberg"),value:V,onChange:function(e){E({buttonIconSize:e})},min:0,max:500}),o.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:M}}))),o.a.createElement(w,{value:M,onChange:function(e){return E({buttonIconColor:e})},allowReset:!0}),o.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Hover Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:W}}))),o.a.createElement(w,{value:W,onChange:function(e){return E({buttonIconHoverColor:e})},allowReset:!0})))):"","input"===C?o.a.createElement(p,{title:Object(l.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},o.a.createElement(o.a.Fragment,null,o.a.createElement(d,{label:Object(l.__)("Size","ultimate-addons-for-gutenberg"),value:$,onChange:function(e){E({iconSize:e})},min:0,max:500}),o.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:q}}))),o.a.createElement(w,{value:q,onChange:function(e){return E({iconColor:e})},allowReset:!0}))):""),t,n)};t.default=o.a.memo(E)}}]);