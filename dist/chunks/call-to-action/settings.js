(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{195:function(e,t,n){"use strict";var a=n(25),o=n.n(a),l=n(196),i=n.n(l);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}if(void 0===d)var d=[];var m=wp.element.Component,p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(r,e);var t,n,a,o,l=(a=r,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(a);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=l.call(this,e)).state={status:void 0},t.handleLoading=function(){t.setState({status:"loading"})},t.addFont=function(e){d.includes(e)||d.push(e)},t.handleActive=function(){t.setState({status:"active"})},t.handleInactive=function(){t.setState({status:"inactive"})},t.loadFonts=function(){d.includes(t.props.config.google.families[0])||(i.a.load(s(s({},t.props.config),{},{loading:t.handleLoading,active:t.handleActive,inactive:t.handleInactive})),t.addFont(t.props.config.google.families[0]))},t}return t=r,(n=[{key:"componentDidMount",value:function(){this.loadFonts()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.onStatus,o=n.config;t.status!==this.state.status&&a(this.state.status),e.config!==o&&this.loadFonts()}},{key:"render",value:function(){return this.props.children||null}}])&&f(t.prototype,n),r}(m);p.propTypes={config:o.a.object.isRequired,children:o.a.element,onStatus:o.a.func.isRequired},p.defaultProps={onStatus:function(){}},t.a=p},196:function(e,t,n){var a;!function(){function o(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){if(!e)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function i(e,t,n){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function c(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var s=!!window.FontFace;function u(e,t,n,a){if(t=e.c.createElement(t),n)for(var o in n)n.hasOwnProperty(o)&&("style"==o?t.style.cssText=n[o]:t.setAttribute(o,n[o]));return a&&t.appendChild(e.c.createTextNode(a)),t}function f(e,t,n){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(n,e.lastChild)}function g(e){e.parentNode&&e.parentNode.removeChild(e)}function b(e,t,n){t=t||[],n=n||[];for(var a=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var l=!1,i=0;i<a.length;i+=1)if(t[o]===a[i]){l=!0;break}l||a.push(t[o])}for(t=[],o=0;o<a.length;o+=1){for(l=!1,i=0;i<n.length;i+=1)if(a[o]===n[i]){l=!0;break}l||t.push(a[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function h(e,t){for(var n=e.className.split(/\s+/),a=0,o=n.length;a<o;a++)if(n[a]==t)return!0;return!1}function d(e,t,n){function a(){r&&o&&l&&(r(i),r=null)}t=u(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,l=!0,i=null,r=n||null;s?(t.onload=function(){o=!0,a()},t.onerror=function(){o=!0,i=Error("Stylesheet failed to load"),a()}):setTimeout((function(){o=!0,a()}),0),f(e,"head",t)}function m(e,t,n,a){var o=e.c.getElementsByTagName("head")[0];if(o){var l=u(e,"script",{src:t}),i=!1;return l.onload=l.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,n&&n(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&o.removeChild(l))},o.appendChild(l),setTimeout((function(){i||(i=!0,n&&n(Error("Script load timeout")))}),a||5e3),l}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,y(e)}}function _(e,t){e.c=t,y(e)}function y(e){0==e.a&&e.c&&(e.c(),e.c=null)}function w(e){this.a=e||"-"}function C(e,t){this.c=e,this.f=4,this.a="n";var n=(t||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function j(e){var t=[];e=e.split(/,\s*/);for(var n=0;n<e.length;n++){var a=e[n].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?t.push("'"+a+"'"):t.push(a)}return t.join(",")}function E(e){return e.a+e.f}function O(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function S(e){var t=4,n="n",a=null;return e&&((a=e.match(/(normal|oblique|italic)/i))&&a[1]&&(n=a[1].substr(0,1).toLowerCase()),(a=e.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?t=7:/[1-9]00/.test(a[1])&&(t=parseInt(a[1].substr(0,1),10)))),n+t}function T(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new w("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function F(e){if(e.g){var t=h(e.f,e.a.c("wf","active")),n=[],a=[e.a.c("wf","loading")];t||n.push(e.a.c("wf","inactive")),b(e.f,n,a)}k(e,"inactive")}function k(e,t,n){e.j&&e.h[t]&&(n?e.h[t](n.c,E(n)):e.h[t]())}function x(){this.c={}}function N(e,t){this.c=e,this.f=t,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function P(e){f(e.c,"body",e.a)}function B(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(e.c)+";font-style:"+O(e)+";font-weight:"+e.f+"00;"}function H(e,t,n,a,o,l){this.g=e,this.j=t,this.a=a,this.c=n,this.f=o||3e3,this.h=l||void 0}function R(e,t,n,a,o,l,i){this.v=e,this.B=t,this.c=n,this.a=a,this.s=i||"BESbswy",this.f={},this.w=o||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new N(this.c,this.s),this.h=new N(this.c,this.s),this.j=new N(this.c,this.s),this.m=new N(this.c,this.s),e=B(e=new C(this.a.c+",serif",E(this.a))),this.g.a.style.cssText=e,e=B(e=new C(this.a.c+",sans-serif",E(this.a))),this.h.a.style.cssText=e,e=B(e=new C("serif",E(this.a))),this.j.a.style.cssText=e,e=B(e=new C("sans-serif",E(this.a))),this.m.a.style.cssText=e,P(this.g),P(this.h),P(this.j),P(this.m)}w.prototype.c=function(e){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},H.prototype.start=function(){var e=this.c.o.document,t=this,n=r(),a=new Promise((function(a,o){!function l(){r()-n>=t.f?o():e.fonts.load(function(e){return O(e)+" "+e.f+"00 300px "+j(e.c)}(t.a),t.h).then((function(e){1<=e.length?a():setTimeout(l,25)}),(function(){o()}))}()})),o=null,l=new Promise((function(e,n){o=setTimeout(n,t.f)}));Promise.race([l,a]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var L={D:"serif",C:"sans-serif"},z=null;function I(){if(null===z){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);z=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return z}function A(e,t,n){for(var a in L)if(L.hasOwnProperty(a)&&t===e.f[L[a]]&&n===e.f[L[a]])return!0;return!1}function M(e,t){setTimeout(i((function(){g(this.g.a),g(this.h.a),g(this.j.a),g(this.m.a),t(this.a)}),e),0)}function W(e,t,n){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=n}R.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var n,a=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(n=a===t.f.serif&&o===t.f["sans-serif"])||(n=I()&&A(t,a,o)),n?r()-t.A>=t.w?I()&&A(t,a,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?M(t,t.v):M(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):M(t,t.v)}(this)};var D=null;function G(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&b(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),k(e,"active")):F(e.a))}function q(e){this.j=e,this.a=new x,this.h=0,this.f=this.g=!0}function V(e,t,n,a,o){var l=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,r=a||{};if(0===n.length&&l)F(t.a);else{t.f+=n.length,l&&(t.j=l);var c,s=[];for(c=0;c<n.length;c++){var u=n[c],f=r[u.c],g=t.a,h=u;if(g.g&&b(g.f,[g.a.c("wf",h.c,E(h).toString(),"loading")]),k(g,"fontloading",h),g=null,null===D)if(window.FontFace){h=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);D=h?42<parseInt(h[1],10):!d}else D=!1;g=D?new H(i(t.g,t),i(t.h,t),t.c,u,t.s,f):new R(i(t.g,t),i(t.h,t),t.c,u,t.s,e,f),s.push(g)}for(c=0;c<s.length;c++)s[c].start()}}),0)}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e,this.a=t}function U(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}W.prototype.g=function(e){var t=this.a;t.g&&b(t.f,[t.a.c("wf",e.c,E(e).toString(),"active")],[t.a.c("wf",e.c,E(e).toString(),"loading"),t.a.c("wf",e.c,E(e).toString(),"inactive")]),k(t,"fontactive",e),this.m=!0,G(this)},W.prototype.h=function(e){var t=this.a;if(t.g){var n=h(t.f,t.a.c("wf",e.c,E(e).toString(),"active")),a=[],o=[t.a.c("wf",e.c,E(e).toString(),"loading")];n||a.push(t.a.c("wf",e.c,E(e).toString(),"inactive")),b(t.f,a,o)}k(t,"fontinactive",e),G(this)},q.prototype.load=function(e){this.c=new c(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,n){var a=[],o=n.timeout;!function(e){e.g&&b(e.f,[e.a.c("wf","loading")]),k(e,"loading")}(t),a=function(e,t,n){var a,o=[];for(a in t)if(t.hasOwnProperty(a)){var l=e.c[a];l&&o.push(l(t[a],n))}return o}(e.a,n,e.c);var l=new W(e.c,t,o);for(e.h=a.length,t=0,n=a.length;t<n;t++)a[t].load((function(t,n,a){V(e,l,t,n,a)}))}(this,new T(this.c,e),e)},$.prototype.load=function(e){var t=this,n=t.a.projectId,a=t.a.version;if(n){var o=t.c.o;m(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(a?"?v="+a:""),(function(a){a?e([]):(o["__MonotypeConfiguration__"+n]=function(){return t.a},function t(){if(o["__mti_fntLst"+n]){var a,l=o["__mti_fntLst"+n](),i=[];if(l)for(var r=0;r<l.length;r++){var c=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(a=l[r].fontStyle+l[r].fontWeight,i.push(new C(c,a))):i.push(new C(c))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+n}else e([])},J.prototype.load=function(e){var t,n,a=this.a.urls||[],o=this.a.families||[],l=this.a.testStrings||{},i=new p;for(t=0,n=a.length;t<n;t++)d(this.c,a[t],v(i));var r=[];for(t=0,n=o.length;t<n;t++)if((a=o[t].split(":"))[1])for(var c=a[1].split(","),s=0;s<c.length;s+=1)r.push(new C(a[0],c[s]));else r.push(new C(a[0]));_(i,(function(){e(r,l)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ne={Arimo:!0,Cousine:!0,Tinos:!0};function ae(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,n=this.c,a=new U(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var n=t.length,a=0;a<n;a++){var o=t[a].split(":");3==o.length&&e.f.push(o.pop());var l="";2==o.length&&""!=o[1]&&(l=":"),e.a.push(o.join(l))}}(a,o);var l=new X(o);!function(e){for(var t=e.f.length,n=0;n<t;n++){var a=e.f[n].split(":"),o=a[0].replace(/\+/g," "),l=["n4"];if(2<=a.length){var i;if(i=[],r=a[1])for(var r,c=(r=r.split(",")).length,s=0;s<c;s++){var u;if((u=r[s]).match(/^[\w-]+$/))if(null==(f=ee.exec(u.toLowerCase())))u="";else{if(u=null==(u=f[2])||""==u?"n":Z[u],null==(f=f[1])||""==f)f="4";else var f=Y[f]||(isNaN(f)?"4":f.substr(0,1));u=[u,f].join("")}else u="";u&&i.push(u)}0<i.length&&(l=i),3==a.length&&(i=[],0<(a=(a=a[2])?a.split(","):i).length&&(a=Q[a[0]])&&(e.c[o]=a))}for(e.c[o]||(a=Q[o])&&(e.c[o]=a),a=0;a<l.length;a+=1)e.a.push(new C(o,l[a]))}}(l),d(n,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,n=[],a=0;a<t;a++)n.push(e.a[a].replace(/ /g,"+"));return t=e.c+"?family="+n.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(a),v(t)),_(t,(function(){e(l.a,l.c,ne)}))},ae.prototype.load=function(e){var t=this.a.id,n=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){t=n.Typekit.config.fn;for(var a=[],o=0;o<t.length;o+=2)for(var l=t[o],i=t[o+1],r=0;r<i.length;r++)a.push(new C(l,i[r]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(a)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,n=this.c.o,a=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var o=0,l=n.fonts.length;o<l;++o){var i=n.fonts[o];a.a.push(new C(i.name,S("font-weight:"+i.weight+";font-style:"+i.style)))}e(a.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var le=new q(window);le.a.c.custom=function(e,t){return new J(t,e)},le.a.c.fontdeck=function(e,t){return new oe(t,e)},le.a.c.monotype=function(e,t){return new $(t,e)},le.a.c.typekit=function(e,t){return new ae(t,e)},le.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(le.load,le)};void 0===(a=function(){return ie}.call(t,n,t,e))||(e.exports=a)}()},415:function(e,t,n){"use strict";n.r(t);var a=n(197),o=n.n(a),l=n(6),i=n(2),r=n(12),c=n(62),s=n(1),u=n.n(s),f=n(8),g=n(17),b=n(195),h=n(4),d=n(5),m=Object.keys(c),p=function(e){var t,n,a,c=e=e.parentProps,p=c.setAttributes,v=c.attributes,_=v.textAlign,y=v.titleColor,w=v.descColor,C=v.titleTag,j=v.titleFontSize,E=v.titleFontSizeType,O=v.titleFontSizeMobile,S=v.titleFontSizeTablet,T=v.titleFontFamily,F=v.titleFontWeight,k=v.titleFontSubset,x=v.titleLineHeightType,N=v.titleLineHeight,P=v.titleLineHeightTablet,B=v.titleLineHeightMobile,H=v.titleLoadGoogleFonts,R=v.descFontSize,L=v.descFontSizeType,z=v.descFontSizeMobile,I=v.descFontSizeTablet,A=v.descFontFamily,M=v.descFontWeight,W=v.descFontSubset,D=v.descLineHeightType,G=v.descLineHeight,q=v.descLineHeightTablet,V=v.descLineHeightMobile,$=v.descLoadGoogleFonts,J=v.titleSpace,U=v.descSpace,K=v.ctaPosition,X=v.buttonAlign,Q=v.ctaType,Y=v.ctaText,Z=v.ctaLink,ee=v.ctaTarget,te=v.ctaIcon,ne=v.ctaIconPosition,ae=v.ctaIconSpace,oe=v.ctaFontSize,le=v.ctaFontSizeType,ie=v.ctaFontSizeMobile,re=v.ctaFontSizeTablet,ce=v.ctaFontFamily,se=v.ctaFontWeight,ue=v.ctaFontSubset,fe=v.ctaLoadGoogleFonts,ge=v.contentWidth,be=v.ctaBtnLinkColor,he=v.ctaBgHoverColor,de=v.ctaBgColor,me=v.ctaBtnVertPadding,pe=v.ctaBtnHrPadding,ve=v.ctaBorderStyle,_e=v.ctaBorderColor,ye=v.ctaBorderhoverColor,we=v.ctaBorderWidth,Ce=v.ctaBorderRadius,je=v.stack,Ee=v.ctaLeftSpace,Oe=v.ctaRightSpace,Se=v.ctaLinkHoverColor,Te=v.inheritFromTheme;if(1==fe){var Fe={google:{families:[ce+(se?":"+se:"")]}};t=u.a.createElement(b.a,{config:Fe})}if(1==H){var ke={google:{families:[T+(F?":"+F:"")]}};n=u.a.createElement(b.a,{config:ke})}if(1==$){var xe={google:{families:[A+(M?":"+M:"")]}};a=u.a.createElement(b.a,{config:xe})}var Ne={icons:m,value:te,onChange:function(e){p({ctaIcon:e})},isMulti:!1,renderFunc:r.a,noSelectedPlaceholder:Object(i.__)("Select Icon","ultimate-addons-for-gutenberg")};return u.a.createElement(s.Suspense,{fallback:Object(f.a)()},u.a.createElement(h.BlockControls,{key:"controls"},u.a.createElement(h.AlignmentToolbar,{value:_,onChange:function(e){return p({textAlign:e})}})),u.a.createElement(h.InspectorControls,null,"all"!==Q&&"none"!==Q&&u.a.createElement(d.PanelBody,{title:Object(i.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!0},u.a.createElement(d.SelectControl,{label:Object(i.__)("Button Position","ultimate-addons-for-gutenberg"),value:K,onChange:function(e){return p({ctaPosition:e})},options:[{value:"right",label:Object(i.__)("Normal","ultimate-addons-for-gutenberg")},{value:"below-title",label:Object(i.__)("Stack","ultimate-addons-for-gutenberg")}]}),"right"==K&&u.a.createElement(d.SelectControl,{label:Object(i.__)("Stack on","ultimate-addons-for-gutenberg"),value:je,options:[{value:"none",label:Object(i.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(i.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(i.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(i.__)("Note: Choose on what breakpoint the CTA button will stack.","ultimate-addons-for-gutenberg"),onChange:function(e){return p({stack:e})}}),("text"===Q||"button"===Q)&&u.a.createElement(u.a.Fragment,null,"right"===K&&u.a.createElement(d.RangeControl,{label:Object(i.__)("Content Width (%)","ultimate-addons-for-gutenberg"),value:ge,onChange:function(e){return p({contentWidth:e})},min:0,max:100,initialPosition:70,allowReset:!0})),K&&"right"===K&&u.a.createElement(d.SelectControl,{label:Object(i.__)("Verticle Alignment","ultimate-addons-for-gutenberg"),value:X,onChange:function(e){return p({buttonAlign:e})},options:[{value:"top",label:Object(i.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:Object(i.__)("Middle","ultimate-addons-for-gutenberg")}]})),u.a.createElement(d.PanelBody,{title:Object(i.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement("h2",null,Object(i.__)("Heading","ultimate-addons-for-gutenberg")),u.a.createElement(d.SelectControl,{label:Object(i.__)("Tag","ultimate-addons-for-gutenberg"),value:C,onChange:function(e){return p({titleTag:e})},options:[{value:"h1",label:Object(i.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(i.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(i.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(i.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(i.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(i.__)("H6","ultimate-addons-for-gutenberg")}]}),u.a.createElement(g.default,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:v,setAttributes:p,loadGoogleFonts:{value:H,label:"titleLoadGoogleFonts"},fontFamily:{value:T,label:"titleFontFamily"},fontWeight:{value:F,label:"titleFontWeight"},fontSubset:{value:k,label:"titleFontSubset"},fontSizeType:{value:E,label:"titleFontSizeType"},fontSize:{value:j,label:"titleFontSize"},fontSizeMobile:{value:O,label:"titleFontSizeMobile"},fontSizeTablet:{value:S,label:"titleFontSizeTablet"},lineHeightType:{value:x,label:"titleLineHeightType"},lineHeight:{value:N,label:"titleLineHeight"},lineHeightMobile:{value:B,label:"titleLineHeightMobile"},lineHeightTablet:{value:P,label:"titleLineHeightTablet"}}),u.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:y}}))),u.a.createElement(h.ColorPalette,{value:y,onChange:function(e){return p({titleColor:e})},allowReset:!0}),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(i.__)("Description","ultimate-addons-for-gutenberg")),u.a.createElement(g.default,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:v,setAttributes:p,loadGoogleFonts:{value:$,label:"descLoadGoogleFonts"},fontFamily:{value:A,label:"descFontFamily"},fontWeight:{value:M,label:"descFontWeight"},fontSubset:{value:W,label:"descFontSubset"},fontSizeType:{value:L,label:"descFontSizeType"},fontSize:{value:R,label:"descFontSize"},fontSizeMobile:{value:z,label:"descFontSizeMobile"},fontSizeTablet:{value:I,label:"descFontSizeTablet"},lineHeightType:{value:D,label:"descLineHeightType"},lineHeight:{value:G,label:"descLineHeight"},lineHeightMobile:{value:V,label:"descLineHeightMobile"},lineHeightTablet:{value:q,label:"descLineHeightTablet"}}),u.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:w}}))),u.a.createElement(h.ColorPalette,{value:w,onChange:function(e){return p({descColor:e})},allowReset:!0})),u.a.createElement(d.PanelBody,{title:Object(i.__)("Button","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(d.SelectControl,{label:Object(i.__)("Type","ultimate-addons-for-gutenberg"),value:Q,onChange:function(e){return p({ctaType:e})},options:[{value:"none",label:Object(i.__)("None","ultimate-addons-for-gutenberg")},{value:"text",label:Object(i.__)("Text","ultimate-addons-for-gutenberg")},{value:"button",label:Object(i.__)("Button","ultimate-addons-for-gutenberg")},{value:"all",label:Object(i.__)("Complete Box","ultimate-addons-for-gutenberg")}]}),("text"===Q||"button"===Q)&&u.a.createElement(u.a.Fragment,null,u.a.createElement(d.TextControl,{label:Object(i.__)("Text","ultimate-addons-for-gutenberg"),value:Y,onChange:function(e){return p({ctaText:e})}}),"button"===Q&&u.a.createElement(d.ToggleControl,{label:Object(i.__)("Inherit from Theme","ultimate-addons-for-gutenberg"),checked:Te,onChange:function(e){return p({inheritFromTheme:!Te})}}),!Te&&"button"===Q||"text"===Q&&u.a.createElement(g.default,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:v,setAttributes:p,loadGoogleFonts:{value:fe,label:"ctaLoadGoogleFonts"},fontFamily:{value:ce,label:"ctaFontFamily"},fontWeight:{value:se,label:"ctaFontWeight"},fontSubset:{value:ue,label:"ctaFontSubset"},fontSizeType:{value:le,label:"ctaFontSizeType"},fontSize:{value:oe,label:"ctaFontSize"},fontSizeMobile:{value:ie,label:"ctaFontSizeMobile"},fontSizeTablet:{value:re,label:"ctaFontSizeTablet"},disableLineHeight:!0})),"none"!==Q&&u.a.createElement(u.a.Fragment,null,u.a.createElement(d.TextControl,{label:Object(i.__)("Link","ultimate-addons-for-gutenberg"),value:Z,onChange:function(e){return p({ctaLink:e})}}),u.a.createElement(d.ToggleControl,{label:Object(i.__)("Open in new Window","ultimate-addons-for-gutenberg"),checked:ee,onChange:function(e){return p({ctaTarget:!ee})}})),"all"!==Q&&"none"!==Q&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(i.__)("Button Icon")),u.a.createElement(o.a,Ne),""!==te&&u.a.createElement(u.a.Fragment,null,u.a.createElement(d.SelectControl,{label:Object(i.__)("Icon Position","ultimate-addons-for-gutenberg"),value:ne,onChange:function(e){return p({ctaIconPosition:e})},options:[{value:"before",label:Object(i.__)("Before Text","ultimate-addons-for-gutenberg")},{value:"after",label:Object(i.__)("After Text","ultimate-addons-for-gutenberg")}]}),u.a.createElement(d.RangeControl,{label:Object(i.__)("Icon Spacing","ultimate-addons-for-gutenberg"),value:ae,onChange:function(e){return p({ctaIconSpace:e})},min:0,max:50,beforeIcon:"",allowReset:!0}))),"button"==Q&&!Te&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(i.__)("Button Padding (px)","ultimate-addons-for-gutenberg")),u.a.createElement(d.RangeControl,{label:l.a.vertical_spacing,className:"uagb-margin-control",value:me,onChange:function(e){return p({ctaBtnVertPadding:e})},min:0,max:500,beforeIcon:"",allowReset:!0}),u.a.createElement(d.RangeControl,{label:l.a.horizontal_spacing,className:"uagb-margin-control",value:pe,onChange:function(e){return p({ctaBtnHrPadding:e})},min:0,max:500,beforeIcon:"",allowReset:!0}),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(i.__)("Button Border","ultimate-addons-for-gutenberg")),u.a.createElement(d.SelectControl,{label:Object(i.__)("Style"),value:ve,onChange:function(e){return p({ctaBorderStyle:e})},options:[{value:"none",label:Object(i.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(i.__)("Solid","ultimate-addons-for-gutenberg")},{value:"double",label:Object(i.__)("Double","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(i.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(i.__)("Dotted","ultimate-addons-for-gutenberg")}]}),"none"!==ve&&u.a.createElement(u.a.Fragment,null,u.a.createElement(d.RangeControl,{label:Object(i.__)("Width","ultimate-addons-for-gutenberg"),value:we,onChange:function(e){return p({ctaBorderWidth:e})},min:0,max:10,beforeIcon:"",allowReset:!0}),u.a.createElement(d.RangeControl,{label:Object(i.__)("Rounded Corner","ultimate-addons-for-gutenberg"),value:Ce,onChange:function(e){return p({ctaBorderRadius:e})},min:0,max:100,beforeIcon:"",allowReset:!0}))),"text"===Q&&u.a.createElement(d.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(i.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(i.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-hover-tab"}]},(function(e){var t;return t="normal"===e.name?u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("CTA Text Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:be}}))),u.a.createElement(h.ColorPalette,{value:be,onChange:function(e){return p({ctaBtnLinkColor:e})},allowReset:!0})):u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("CTA Text Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Se}}))),u.a.createElement(h.ColorPalette,{value:Se,onChange:function(e){return p({ctaLinkHoverColor:e})},allowReset:!0})),u.a.createElement("div",null,t)})),"button"===Q&&!Te&&u.a.createElement(d.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(i.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(i.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-focus-tab"}]},(function(e){var t;return t="normal"===e.name?u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Text Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:be}}))),u.a.createElement(h.ColorPalette,{value:be,onChange:function(e){return p({ctaBtnLinkColor:e})},allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Background Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:de}}))),u.a.createElement(h.ColorPalette,{value:de,onChange:function(e){return p({ctaBgColor:e})},allowReset:!0}),"none"!==ve&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Border Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:_e}}))),u.a.createElement(h.ColorPalette,{value:_e,onChange:function(e){return p({ctaBorderColor:e})},allowReset:!0}))):u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Text Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Se}}))),u.a.createElement(h.ColorPalette,{value:Se,onChange:function(e){return p({ctaLinkHoverColor:e})},allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Background Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:he}}))),u.a.createElement(h.ColorPalette,{value:he,onChange:function(e){return p({ctaBgHoverColor:e})},allowReset:!0}),"none"!==ve&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Border Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ye}}))),u.a.createElement(h.ColorPalette,{value:ye,onChange:function(e){return p({ctaBorderhoverColor:e})},allowReset:!0}))),u.a.createElement("div",null,t)}))),u.a.createElement(d.PanelBody,{title:Object(i.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(d.RangeControl,{label:Object(i.__)("Heading Bottom Margin","ultimate-addons-for-gutenberg"),value:J,onChange:function(e){return p({titleSpace:e})},min:0,max:500,beforeIcon:"",allowReset:!0}),u.a.createElement(d.RangeControl,{label:Object(i.__)("Description Bottom Margin","ultimate-addons-for-gutenberg"),value:U,onChange:function(e){return p({descSpace:e})},min:0,max:500,beforeIcon:"",allowReset:!0}),"left"===_&&"right"===K&&u.a.createElement(d.RangeControl,{label:Object(i.__)("Content Left Margin","ultimate-addons-for-gutenberg"),value:Ee,onChange:function(e){return p({ctaLeftSpace:e})},min:0,max:500,beforeIcon:"",allowReset:!0}),"right"===_&&"right"===K&&u.a.createElement(d.RangeControl,{label:Object(i.__)("Content Right Margin","ultimate-addons-for-gutenberg"),value:Oe,onChange:function(e){return p({ctaRightSpace:e})},min:0,max:500,beforeIcon:"",allowReset:!0}))),t,n,a)};t.default=u.a.memo(p)}}]);