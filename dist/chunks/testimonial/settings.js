(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{124:function(e,t,n){"use strict";var a=n(10),o=n(25),l=n.n(o),r=n(125),i=n.n(r);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}if(void 0===h)var h=[];var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(r,e);var t,n,a,o,l=(a=r,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(a);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=l.call(this,e)).state={status:void 0},t.handleLoading=function(){t.setState({status:"loading"})},t.addFont=function(e){h.includes(e)||h.push(e)},t.handleActive=function(){t.setState({status:"active"})},t.handleInactive=function(){t.setState({status:"inactive"})},t.loadFonts=function(){h.includes(t.props.config.google.families[0])||(i.a.load(s(s({},t.props.config),{},{loading:t.handleLoading,active:t.handleActive,inactive:t.handleInactive})),t.addFont(t.props.config.google.families[0]))},t}return t=r,(n=[{key:"componentDidMount",value:function(){this.loadFonts()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.onStatus,o=n.config;t.status!==this.state.status&&a(this.state.status),e.config!==o&&this.loadFonts()}},{key:"render",value:function(){return this.props.children||null}}])&&f(t.prototype,n),r}(a.Component);p.propTypes={config:l.a.object.isRequired,children:l.a.element,onStatus:l.a.func.isRequired},p.defaultProps={onStatus:function(){}},t.a=p},125:function(e,t,n){var a;!function(){function o(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){if(!e)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function r(e,t,n){return(r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:l).apply(null,arguments)}var i=Date.now||function(){return+new Date};function u(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var c=!!window.FontFace;function s(e,t,n,a){if(t=e.c.createElement(t),n)for(var o in n)n.hasOwnProperty(o)&&("style"==o?t.style.cssText=n[o]:t.setAttribute(o,n[o]));return a&&t.appendChild(e.c.createTextNode(a)),t}function g(e,t,n){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(n,e.lastChild)}function f(e){e.parentNode&&e.parentNode.removeChild(e)}function m(e,t,n){t=t||[],n=n||[];for(var a=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var l=!1,r=0;r<a.length;r+=1)if(t[o]===a[r]){l=!0;break}l||a.push(t[o])}for(t=[],o=0;o<a.length;o+=1){for(l=!1,r=0;r<n.length;r+=1)if(a[o]===n[r]){l=!0;break}l||t.push(a[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function b(e,t){for(var n=e.className.split(/\s+/),a=0,o=n.length;a<o;a++)if(n[a]==t)return!0;return!1}function d(e,t,n){function a(){i&&o&&l&&(i(r),i=null)}t=s(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,l=!0,r=null,i=n||null;c?(t.onload=function(){o=!0,a()},t.onerror=function(){o=!0,r=Error("Stylesheet failed to load"),a()}):setTimeout((function(){o=!0,a()}),0),g(e,"head",t)}function h(e,t,n,a){var o=e.c.getElementsByTagName("head")[0];if(o){var l=s(e,"script",{src:t}),r=!1;return l.onload=l.onreadystatechange=function(){r||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(r=!0,n&&n(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&o.removeChild(l))},o.appendChild(l),setTimeout((function(){r||(r=!0,n&&n(Error("Script load timeout")))}),a||5e3),l}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,y(e)}}function _(e,t){e.c=t,y(e)}function y(e){0==e.a&&e.c&&(e.c(),e.c=null)}function O(e){this.a=e||"-"}function j(e,t){this.c=e,this.f=4,this.a="n";var n=(t||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function w(e){var t=[];e=e.split(/,\s*/);for(var n=0;n<e.length;n++){var a=e[n].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?t.push("'"+a+"'"):t.push(a)}return t.join(",")}function C(e){return e.a+e.f}function S(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function E(e){var t=4,n="n",a=null;return e&&((a=e.match(/(normal|oblique|italic)/i))&&a[1]&&(n=a[1].substr(0,1).toLowerCase()),(a=e.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?t=7:/[1-9]00/.test(a[1])&&(t=parseInt(a[1].substr(0,1),10)))),n+t}function T(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new O("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function F(e){if(e.g){var t=b(e.f,e.a.c("wf","active")),n=[],a=[e.a.c("wf","loading")];t||n.push(e.a.c("wf","inactive")),m(e.f,n,a)}k(e,"inactive")}function k(e,t,n){e.j&&e.h[t]&&(n?e.h[t](n.c,C(n)):e.h[t]())}function R(){this.c={}}function x(e,t){this.c=e,this.f=t,this.a=s(this.c,"span",{"aria-hidden":"true"},this.f)}function P(e){g(e.c,"body",e.a)}function z(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+w(e.c)+";font-style:"+S(e)+";font-weight:"+e.f+"00;"}function B(e,t,n,a,o,l){this.g=e,this.j=t,this.a=a,this.c=n,this.f=o||3e3,this.h=l||void 0}function L(e,t,n,a,o,l,r){this.v=e,this.B=t,this.c=n,this.a=a,this.s=r||"BESbswy",this.f={},this.w=o||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new x(this.c,this.s),this.h=new x(this.c,this.s),this.j=new x(this.c,this.s),this.m=new x(this.c,this.s),e=z(e=new j(this.a.c+",serif",C(this.a))),this.g.a.style.cssText=e,e=z(e=new j(this.a.c+",sans-serif",C(this.a))),this.h.a.style.cssText=e,e=z(e=new j("serif",C(this.a))),this.j.a.style.cssText=e,e=z(e=new j("sans-serif",C(this.a))),this.m.a.style.cssText=e,P(this.g),P(this.h),P(this.j),P(this.m)}O.prototype.c=function(e){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},B.prototype.start=function(){var e=this.c.o.document,t=this,n=i(),a=new Promise((function(a,o){!function l(){i()-n>=t.f?o():e.fonts.load(function(e){return S(e)+" "+e.f+"00 300px "+w(e.c)}(t.a),t.h).then((function(e){1<=e.length?a():setTimeout(l,25)}),(function(){o()}))}()})),o=null,l=new Promise((function(e,n){o=setTimeout(n,t.f)}));Promise.race([l,a]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var H={D:"serif",C:"sans-serif"},I=null;function A(){if(null===I){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);I=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return I}function N(e,t,n){for(var a in H)if(H.hasOwnProperty(a)&&t===e.f[H[a]]&&n===e.f[H[a]])return!0;return!1}function M(e,t){setTimeout(r((function(){f(this.g.a),f(this.h.a),f(this.j.a),f(this.m.a),t(this.a)}),e),0)}function D(e,t,n){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=n}L.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=i(),function e(t){var n,a=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(n=a===t.f.serif&&o===t.f["sans-serif"])||(n=A()&&N(t,a,o)),n?i()-t.A>=t.w?A()&&N(t,a,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?M(t,t.v):M(t,t.B):function(t){setTimeout(r((function(){e(this)}),t),50)}(t):M(t,t.v)}(this)};var W=null;function G(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&m(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),k(e,"active")):F(e.a))}function q(e){this.j=e,this.a=new R,this.h=0,this.f=this.g=!0}function U(e,t,n,a,o){var l=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,i=a||{};if(0===n.length&&l)F(t.a);else{t.f+=n.length,l&&(t.j=l);var u,c=[];for(u=0;u<n.length;u++){var s=n[u],g=i[s.c],f=t.a,b=s;if(f.g&&m(f.f,[f.a.c("wf",b.c,C(b).toString(),"loading")]),k(f,"fontloading",b),f=null,null===W)if(window.FontFace){b=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);W=b?42<parseInt(b[1],10):!d}else W=!1;f=W?new B(r(t.g,t),r(t.h,t),t.c,s,t.s,g):new L(r(t.g,t),r(t.h,t),t.c,s,t.s,e,g),c.push(f)}for(u=0;u<c.length;u++)c[u].start()}}),0)}function V(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}D.prototype.g=function(e){var t=this.a;t.g&&m(t.f,[t.a.c("wf",e.c,C(e).toString(),"active")],[t.a.c("wf",e.c,C(e).toString(),"loading"),t.a.c("wf",e.c,C(e).toString(),"inactive")]),k(t,"fontactive",e),this.m=!0,G(this)},D.prototype.h=function(e){var t=this.a;if(t.g){var n=b(t.f,t.a.c("wf",e.c,C(e).toString(),"active")),a=[],o=[t.a.c("wf",e.c,C(e).toString(),"loading")];n||a.push(t.a.c("wf",e.c,C(e).toString(),"inactive")),m(t.f,a,o)}k(t,"fontinactive",e),G(this)},q.prototype.load=function(e){this.c=new u(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,n){var a=[],o=n.timeout;!function(e){e.g&&m(e.f,[e.a.c("wf","loading")]),k(e,"loading")}(t),a=function(e,t,n){var a,o=[];for(a in t)if(t.hasOwnProperty(a)){var l=e.c[a];l&&o.push(l(t[a],n))}return o}(e.a,n,e.c);var l=new D(e.c,t,o);for(e.h=a.length,t=0,n=a.length;t<n;t++)a[t].load((function(t,n,a){U(e,l,t,n,a)}))}(this,new T(this.c,e),e)},V.prototype.load=function(e){var t=this,n=t.a.projectId,a=t.a.version;if(n){var o=t.c.o;h(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(a?"?v="+a:""),(function(a){a?e([]):(o["__MonotypeConfiguration__"+n]=function(){return t.a},function t(){if(o["__mti_fntLst"+n]){var a,l=o["__mti_fntLst"+n](),r=[];if(l)for(var i=0;i<l.length;i++){var u=l[i].fontfamily;null!=l[i].fontStyle&&null!=l[i].fontWeight?(a=l[i].fontStyle+l[i].fontWeight,r.push(new j(u,a))):r.push(new j(u))}e(r)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+n}else e([])},$.prototype.load=function(e){var t,n,a=this.a.urls||[],o=this.a.families||[],l=this.a.testStrings||{},r=new p;for(t=0,n=a.length;t<n;t++)d(this.c,a[t],v(r));var i=[];for(t=0,n=o.length;t<n;t++)if((a=o[t].split(":"))[1])for(var u=a[1].split(","),c=0;c<u.length;c+=1)i.push(new j(a[0],u[c]));else i.push(new j(a[0]));_(r,(function(){e(i,l)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ne={Arimo:!0,Cousine:!0,Tinos:!0};function ae(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,n=this.c,a=new J(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var n=t.length,a=0;a<n;a++){var o=t[a].split(":");3==o.length&&e.f.push(o.pop());var l="";2==o.length&&""!=o[1]&&(l=":"),e.a.push(o.join(l))}}(a,o);var l=new X(o);!function(e){for(var t=e.f.length,n=0;n<t;n++){var a=e.f[n].split(":"),o=a[0].replace(/\+/g," "),l=["n4"];if(2<=a.length){var r;if(r=[],i=a[1])for(var i,u=(i=i.split(",")).length,c=0;c<u;c++){var s;if((s=i[c]).match(/^[\w-]+$/))if(null==(g=ee.exec(s.toLowerCase())))s="";else{if(s=null==(s=g[2])||""==s?"n":Z[s],null==(g=g[1])||""==g)g="4";else var g=Y[g]||(isNaN(g)?"4":g.substr(0,1));s=[s,g].join("")}else s="";s&&r.push(s)}0<r.length&&(l=r),3==a.length&&(r=[],0<(a=(a=a[2])?a.split(","):r).length&&(a=Q[a[0]])&&(e.c[o]=a))}for(e.c[o]||(a=Q[o])&&(e.c[o]=a),a=0;a<l.length;a+=1)e.a.push(new j(o,l[a]))}}(l),d(n,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,n=[],a=0;a<t;a++)n.push(e.a[a].replace(/ /g,"+"));return t=e.c+"?family="+n.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(a),v(t)),_(t,(function(){e(l.a,l.c,ne)}))},ae.prototype.load=function(e){var t=this.a.id,n=this.c.o;t?h(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){t=n.Typekit.config.fn;for(var a=[],o=0;o<t.length;o+=2)for(var l=t[o],r=t[o+1],i=0;i<r.length;i++)a.push(new j(l,r[i]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(a)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,n=this.c.o,a=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var o=0,l=n.fonts.length;o<l;++o){var r=n.fonts[o];a.a.push(new j(r.name,E("font-weight:"+r.weight+";font-style:"+r.style)))}e(a.a)},h(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var le=new q(window);le.a.c.custom=function(e,t){return new $(t,e)},le.a.c.fontdeck=function(e,t){return new oe(t,e)},le.a.c.monotype=function(e,t){return new V(t,e)},le.a.c.typekit=function(e,t){return new ae(t,e)},le.a.c.google=function(e,t){return new te(t,e)};var re={load:r(le.load,le)};void 0===(a=function(){return re}.call(t,n,t,e))||(e.exports=a)}()},428:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n(1),l=n.n(o),r=n(8),i=n(17),u=n(124),c=n(51),s=n(4),g=n(5);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var m=function(e){var t,n,m,b=e=e.parentProps,d=b.setAttributes,h=b.attributes,p=b.deviceType,v=h.test_item_count,_=h.test_block,y=h.headingAlign,O=h.companyColor,j=h.descColor,w=h.authorColor,C=h.nameFontSizeType,S=h.nameFontSize,E=h.nameFontSizeTablet,T=h.nameFontSizeMobile,F=h.nameFontFamily,k=h.nameFontWeight,R=h.nameFontSubset,x=h.nameLineHeightType,P=h.nameLineHeight,z=h.nameLineHeightTablet,B=h.nameLineHeightMobile,L=h.nameLoadGoogleFonts,H=h.companyFontSizeType,I=h.companyFontSize,A=h.companyFontSizeTablet,N=h.companyFontSizeMobile,M=h.companyFontFamily,D=h.companyFontWeight,W=h.companyFontSubset,G=h.companyLineHeightType,q=h.companyLineHeight,U=h.companyLineHeightTablet,V=h.companyLineHeightMobile,$=h.companyLoadGoogleFonts,J=h.descFontSizeType,K=h.descFontSize,X=h.descFontSizeTablet,Q=h.descFontSizeMobile,Y=h.descFontFamily,Z=h.descFontWeight,ee=h.descFontSubset,te=h.descLineHeightType,ne=h.descLineHeight,ae=h.descLineHeightTablet,oe=h.descLineHeightMobile,le=h.descLoadGoogleFonts,re=h.descSpace,ie=h.iconimgStyle,ue=h.imagePosition,ce=h.imageAlignment,se=h.nameSpace,ge=h.imgHrPadding,fe=h.imgVrPadding,me=h.imageSize,be=h.imageWidth,de=h.columns,he=h.tcolumns,pe=h.mcolumns,ve=h.pauseOnHover,_e=h.infiniteLoop,ye=h.transitionSpeed,Oe=h.arrowDots,je=h.arrowSize,we=h.arrowBorderSize,Ce=h.arrowBorderRadius,Se=h.autoplay,Ee=h.autoplaySpeed,Te=h.arrowColor,Fe=h.rowGap,ke=h.columnGap,Re=h.contentPadding,xe=h.backgroundType,Pe=h.backgroundColor,ze=h.backgroundImage,Be=h.backgroundPosition,Le=h.backgroundSize,He=h.backgroundRepeat,Ie=h.backgroundImageColor,Ae=h.backgroundOpacity,Ne=h.borderStyle,Me=h.borderWidth,De=h.borderRadius,We=h.borderColor,Ge=h.stack;if(1==L){var qe={google:{families:[F+(k?":"+k:"")]}};t=l.a.createElement(u.a,{config:qe})}if(1==$){var Ue={google:{families:[M+(D?":"+D:"")]}};n=l.a.createElement(u.a,{config:Ue})}if(1==le){var Ve={google:{families:[Y+(Z?":"+Z:"")]}};m=l.a.createElement(u.a,{config:Ve})}var $e=[{value:"thumbnail",label:Object(a.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(a.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(a.__)("Large","ultimate-addons-for-gutenberg")}],Je=function(e){var t=null;return _[e]&&void 0!==_[e]&&(t=_[e].image),l.a.createElement(g.PanelBody,{key:e,title:Object(a.__)("Image","ultimate-addons-for-gutenberg")+" "+(e+1)+" "+Object(a.__)("Settings","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb-repeater-panel"},l.a.createElement(g.BaseControl,{className:"editor-bg-image-control",label:Object(a.__)("")},l.a.createElement(s.MediaUpload,{title:Object(a.__)("Select Image"+(e+1)),onSelect:function(t){!function(e,t){var n=null;n=e&&e.url?e:null,e.type&&"image"===e.type||(n=null);var a=_.map((function(e,a){return t===a&&(e.image=n),e}));d({test_block:a})}(t,e)},allowedTypes:["image"],value:t,render:function(t){var n,o,r=t.open;return l.a.createElement(g.Button,{isSecondary:!0,onClick:r},(n=_[e].image,o=Object(a.__)("Select Image","ultimate-addons-for-gutenberg"),n&&(o=null==n.url||""==n.url?Object(a.__)("Select Image","ultimate-addons-for-gutenberg"):Object(a.__)("Replace Image","ultimate-addons-for-gutenberg")),o))}}),t&&null!==_[e].image.url&&""!==_[e].image.url&&l.a.createElement(g.Button,{className:"uagb-rm-btn",key:e,onClick:function(){!function(e){var t=_.map((function(t,n){return e===n&&(t.image=null),t}));d({test_block:t})}(e)},isLink:!0,isDestructive:!0},Object(a.__)("Remove Image"))))},Ke=0;return _.map((function(e,t){var n=_[t];if(n&&void 0!==n){var a=n.image;null!=a&&""!==a&&Ke++}})),l.a.createElement(o.Suspense,{fallback:Object(r.a)()},l.a.createElement(s.BlockControls,{key:"controls"},l.a.createElement(s.AlignmentToolbar,{value:y,onChange:function(e){return d({headingAlign:e})}})),l.a.createElement(s.InspectorControls,null,l.a.createElement(g.PanelBody,{title:Object(a.__)("General"),initialOpen:!0},l.a.createElement(g.RangeControl,{label:Object(a.__)("Number of Testimonials","ultimate-addons-for-gutenberg"),value:v,onChange:function(e){var t,n=function(e){if(Array.isArray(e))return f(e)}(t=_)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return f(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,void 0):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();if(n.length<e){for(var a=Math.abs(e-n.length),o=0;o<a;o++)n.push({description:"I have been working with these guys since years now! With lots of hard work and timely communication they made sure they delivered the best to me. Highly recommended!",name:"John Doe",company:"Company"+(n.length+1),image:""});d({test_block:n})}else{for(var l=Math.abs(e-n.length),r=n,i=0;i<l;i++)r.pop();d({test_block:r})}d({test_item_count:e})},min:0,max:50,allowReset:!0}),l.a.createElement(c.default,null),"Desktop"===p&&l.a.createElement(l.a.Fragment,null,l.a.createElement(g.RangeControl,{label:Object(a.__)("Columns","ultimate-addons-for-gutenberg"),value:de,onChange:function(e){return d({columns:e})},min:1,max:v})),"Tablet"===p&&l.a.createElement(l.a.Fragment,null,l.a.createElement(g.RangeControl,{label:Object(a.__)("Columns","ultimate-addons-for-gutenberg"),value:he,onChange:function(e){return d({tcolumns:e})},min:1,max:v})),"Mobile"===p&&l.a.createElement(l.a.Fragment,null,l.a.createElement(g.RangeControl,{label:Object(a.__)("Columns","ultimate-addons-for-gutenberg"),value:pe,onChange:function(e){return d({mcolumns:e})},min:1,max:v}))),l.a.createElement(g.PanelBody,{title:Object(a.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},function(){for(var e=[],t=0;t<v;t++)e.push(Je(t));return e}(),Ke>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("hr",{className:"uagb-editor__separator"}),l.a.createElement(g.SelectControl,{label:Object(a.__)("Image Position"),value:ue,onChange:function(e){return d({imagePosition:e})},options:[{value:"top",label:Object(a.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(a.__)("Bottom","ultimate-addons-for-gutenberg")},{value:"left",label:Object(a.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(a.__)("Right","ultimate-addons-for-gutenberg")}]}),("left"==ue||"right"==ue)&&l.a.createElement(l.a.Fragment,null,l.a.createElement(g.SelectControl,{label:Object(a.__)("Vertical ALignment","ultimate-addons-for-gutenberg"),value:ce,onChange:function(e){return d({imageAlignment:e})},options:[{value:"top",label:Object(a.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:Object(a.__)("Middle","ultimate-addons-for-gutenberg")}]}),l.a.createElement(g.SelectControl,{label:Object(a.__)("Stack on","ultimate-addons-for-gutenberg"),value:Ge,options:[{value:"none",label:Object(a.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(a.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(a.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(a.__)("Note: Choose on what breakpoint the Info Box will stack.","ultimate-addons-for-gutenberg"),onChange:function(e){return d({stack:e})}})),l.a.createElement(g.SelectControl,{label:Object(a.__)("Image Style","ultimate-addons-for-gutenberg"),value:ie,onChange:function(e){return d({iconimgStyle:e})},options:[{value:"normal",label:Object(a.__)("Normal","ultimate-addons-for-gutenberg")},{value:"circle",label:Object(a.__)("Circle","ultimate-addons-for-gutenberg")},{value:"square",label:Object(a.__)("Square","ultimate-addons-for-gutenberg")}]}),l.a.createElement(g.SelectControl,{label:Object(a.__)("Image Size","ultimate-addons-for-gutenberg"),options:$e,value:me,onChange:function(e){return d({imageSize:e})}}),l.a.createElement(g.RangeControl,{label:Object(a.__)("Width","ultimate-addons-for-gutenberg"),value:be,onChange:function(e){return d({imageWidth:e})},min:0,max:500,allowReset:!0}))),l.a.createElement(g.PanelBody,{title:Object(a.__)("Carousel","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(g.ToggleControl,{label:Object(a.__)("Pause On Hover","ultimate-addons-for-gutenberg"),checked:ve,onChange:function(){d({pauseOnHover:!ve})}}),l.a.createElement(g.ToggleControl,{label:Object(a.__)("Autoplay"),checked:Se,onChange:function(){d({autoplay:!Se})}}),1==Se&&l.a.createElement(g.RangeControl,{label:Object(a.__)("Autoplay Speed (ms)","ultimate-addons-for-gutenberg"),value:Ee,onChange:function(e){return d({autoplaySpeed:e})},min:100,max:1e4}),l.a.createElement(g.ToggleControl,{label:Object(a.__)("Infinite Loop","ultimate-addons-for-gutenberg"),checked:_e,onChange:function(){d({infiniteLoop:!_e})}}),l.a.createElement(g.RangeControl,{label:Object(a.__)("Transition Speed (ms)","ultimate-addons-for-gutenberg"),value:ye,onChange:function(e){return d({transitionSpeed:e})},min:100,max:5e3}),l.a.createElement(g.SelectControl,{label:Object(a.__)("Show Arrows & Dots","ultimate-addons-for-gutenberg"),value:Oe,onChange:function(e){return d({arrowDots:e})},options:[{value:"arrows",label:Object(a.__)("Only Arrows","ultimate-addons-for-gutenberg")},{value:"dots",label:Object(a.__)("Only Dots","ultimate-addons-for-gutenberg")},{value:"arrows_dots",label:Object(a.__)("Both Arrows & Dots","ultimate-addons-for-gutenberg")}]}),"dots"!=Oe&&l.a.createElement(l.a.Fragment,null,l.a.createElement(g.RangeControl,{label:Object(a.__)("Arrow Size","ultimate-addons-for-gutenberg"),value:je,onChange:function(e){return d({arrowSize:e})},min:0,max:50}),l.a.createElement(g.RangeControl,{label:Object(a.__)("Arrow Border Size","ultimate-addons-for-gutenberg"),value:we,onChange:function(e){return d({arrowBorderSize:e})},min:0,max:50}),l.a.createElement(g.RangeControl,{label:Object(a.__)("Arrow Border Radius","ultimate-addons-for-gutenberg"),value:Ce,onChange:function(e){return d({arrowBorderRadius:e})},min:0,max:50}))),l.a.createElement(l.a.Fragment,null,l.a.createElement(g.PanelBody,{title:Object(a.__)("Typography","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement("h2",null,Object(a.__)("Testimonial","ultimate-addons-for-gutenberg")),l.a.createElement(i.default,{label:Object(a.__)("Typography","ultimate-addons-for-gutenberg"),attributes:h,setAttributes:d,loadGoogleFonts:{value:le,label:"descLoadGoogleFonts"},fontFamily:{value:Y,label:"descFontFamily"},fontWeight:{value:Z,label:"descFontWeight"},fontSubset:{value:ee,label:"descFontSubset"},fontSizeType:{value:J,label:"descFontSizeType"},fontSize:{value:K,label:"descFontSize"},fontSizeMobile:{value:Q,label:"descFontSizeMobile"},fontSizeTablet:{value:X,label:"descFontSizeTablet"},lineHeightType:{value:te,label:"descLineHeightType"},lineHeight:{value:ne,label:"descLineHeight"},lineHeightMobile:{value:oe,label:"descLineHeightMobile"},lineHeightTablet:{value:ae,label:"descLineHeightTablet"}}),l.a.createElement("hr",{className:"uagb-editor__separator"}),l.a.createElement("h2",null,Object(a.__)("Name","ultimate-addons-for-gutenberg")),l.a.createElement(i.default,{label:Object(a.__)("Typography","ultimate-addons-for-gutenberg"),attributes:h,setAttributes:d,loadGoogleFonts:{value:L,label:"nameLoadGoogleFonts"},fontFamily:{value:F,label:"nameFontFamily"},fontWeight:{value:k,label:"nameFontWeight"},fontSubset:{value:R,label:"nameFontSubset"},fontSizeType:{value:C,label:"nameFontSizeType"},fontSize:{value:S,label:"nameFontSize"},fontSizeMobile:{value:T,label:"nameFontSizeMobile"},fontSizeTablet:{value:E,label:"nameFontSizeTablet"},lineHeightType:{value:x,label:"nameLineHeightType"},lineHeight:{value:P,label:"nameLineHeight"},lineHeightMobile:{value:B,label:"nameLineHeightMobile"},lineHeightTablet:{value:z,label:"nameLineHeightTablet"}}),l.a.createElement("hr",{className:"uagb-editor__separator"}),l.a.createElement("h2",null,Object(a.__)("Company","ultimate-addons-for-gutenberg")),l.a.createElement(i.default,{label:Object(a.__)("Typography","ultimate-addons-for-gutenberg"),attributes:h,setAttributes:d,loadGoogleFonts:{value:$,label:"companyLoadGoogleFonts"},fontFamily:{value:M,label:"companyFontFamily"},fontWeight:{value:D,label:"companyFontWeight"},fontSubset:{value:W,label:"companyFontSubset"},fontSizeType:{value:H,label:"companyFontSizeType"},fontSize:{value:I,label:"companyFontSize"},fontSizeMobile:{value:N,label:"companyFontSizeMobile"},fontSizeTablet:{value:A,label:"companyFontSizeTablet"},lineHeightType:{value:G,label:"companyLineHeightType"},lineHeight:{value:q,label:"companyLineHeight"},lineHeightMobile:{value:V,label:"companyLineHeightMobile"},lineHeightTablet:{value:U,label:"companyLineHeightTablet"}})),l.a.createElement(s.PanelColorSettings,{title:Object(a.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!1,colorSettings:[{value:j,onChange:function(e){return d({descColor:e})},label:Object(a.__)("Testimonial Color","ultimate-addons-for-gutenberg")},{value:w,onChange:function(e){return d({authorColor:e})},label:Object(a.__)("Name Color","ultimate-addons-for-gutenberg")},{value:O,onChange:function(e){return d({companyColor:e})},label:Object(a.__)("Company Color","ultimate-addons-for-gutenberg")},{value:Te,onChange:function(e){return d({arrowColor:e})},label:Object(a.__)("Arrow & Dots Color","ultimate-addons-for-gutenberg")}]})),l.a.createElement(g.PanelBody,{title:Object(a.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(g.RangeControl,{label:Object(a.__)("Gap Between Content & Dots","ultimate-addons-for-gutenberg"),value:Fe,onChange:function(e){return d({rowGap:e})},min:0,max:50,allowReset:!0}),l.a.createElement(g.RangeControl,{label:Object(a.__)("Row Gap","ultimate-addons-for-gutenberg"),value:ke,onChange:function(e){return d({columnGap:e})},min:0,max:50,allowReset:!0}),l.a.createElement(g.RangeControl,{label:Object(a.__)("Content Padding","ultimate-addons-for-gutenberg"),value:Re,onChange:function(e){return d({contentPadding:e})},min:0,max:50,allowReset:!0}),l.a.createElement(g.RangeControl,{label:Object(a.__)("Testimonial Bottom Margin","ultimate-addons-for-gutenberg"),value:re,onChange:function(e){return d({descSpace:e})},min:0,max:50,allowReset:!0}),l.a.createElement(g.RangeControl,{label:Object(a.__)("Name Bottom Margin","ultimate-addons-for-gutenberg"),value:se,onChange:function(e){return d({nameSpace:e})},min:0,max:50,allowReset:!0}),l.a.createElement(g.RangeControl,{label:Object(a.__)("Image Horizontal Padding","ultimate-addons-for-gutenberg"),value:ge,onChange:function(e){return d({imgHrPadding:e})},min:0,max:50,allowReset:!0}),l.a.createElement(g.RangeControl,{label:Object(a.__)("Image Vertical Padding","ultimate-addons-for-gutenberg"),value:fe,onChange:function(e){return d({imgVrPadding:e})},min:0,max:50,allowReset:!0})),l.a.createElement(l.a.Fragment,null,l.a.createElement(g.PanelBody,{title:Object(a.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(g.SelectControl,{label:Object(a.__)("Background Type","ultimate-addons-for-gutenberg"),value:xe,onChange:function(e){return d({backgroundType:e})},options:[{value:"none",label:Object(a.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(a.__)("Color","ultimate-addons-for-gutenberg")},{value:"image",label:Object(a.__)("Image","ultimate-addons-for-gutenberg")}]}),"color"==xe&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"uagb-setting-label"},Object(a.__)("Background Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Pe}}))),l.a.createElement(s.ColorPalette,{value:Pe,onChange:function(e){return d({backgroundColor:e})},allowReset:!0})),"image"==xe&&l.a.createElement(l.a.Fragment,null,l.a.createElement(g.BaseControl,{className:"editor-bg-image-control",label:Object(a.__)("Background Image","ultimate-addons-for-gutenberg")},l.a.createElement(s.MediaUpload,{title:Object(a.__)("Select Background Image","ultimate-addons-for-gutenberg"),onSelect:function(e){e&&e.url&&e.type&&"image"===e.type?d({backgroundImage:e}):d({backgroundImage:null})},allowedTypes:["image"],value:ze,render:function(e){var t=e.open;return l.a.createElement(g.Button,{isSecondary:!0,onClick:t},ze?Object(a.__)("Replace image","ultimate-addons-for-gutenberg"):Object(a.__)("Select Background Image","ultimate-addons-for-gutenberg"))}}),ze&&l.a.createElement(g.Button,{className:"uagb-rm-btn",onClick:function(){d({backgroundImage:null})},isLink:!0,isDestructive:!0},Object(a.__)("Remove Image","ultimate-addons-for-gutenberg"))),ze&&l.a.createElement(l.a.Fragment,null,l.a.createElement(g.SelectControl,{label:Object(a.__)("Image Position","ultimate-addons-for-gutenberg"),value:Be,onChange:function(e){return d({backgroundPosition:e})},options:[{value:"top-left",label:Object(a.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"top-center",label:Object(a.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"top-right",label:Object(a.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center-left",label:Object(a.__)("Center Left","ultimate-addons-for-gutenberg")},{value:"center-center",label:Object(a.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center-right",label:Object(a.__)("Center Right","ultimate-addons-for-gutenberg")},{value:"bottom-left",label:Object(a.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"bottom-center",label:Object(a.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"bottom-right",label:Object(a.__)("Bottom Right","ultimate-addons-for-gutenberg")}]}),l.a.createElement(g.SelectControl,{label:Object(a.__)("Repeat","ultimate-addons-for-gutenberg"),value:He,onChange:function(e){return d({backgroundRepeat:e})},options:[{value:"no-repeat",label:Object(a.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(a.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(a.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(a.__)("Repeat-y","ultimate-addons-for-gutenberg")}]}),l.a.createElement(g.SelectControl,{label:Object(a.__)("Size"),value:Le,onChange:function(e){return d({backgroundSize:e})},options:[{value:"auto",label:Object(a.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(a.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(a.__)("Contain","ultimate-addons-for-gutenberg")}]}),l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"uagb-setting-label"},Object(a.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Ie}}))),l.a.createElement(s.ColorPalette,{value:Ie,onChange:function(e){return d({backgroundImageColor:e})},allowReset:!0})))),"image"==xe&&ze&&l.a.createElement(g.RangeControl,{label:Object(a.__)("Opacity","ultimate-addons-for-gutenberg"),value:Ae,onChange:function(e){return d({backgroundOpacity:e})},min:0,max:100,allowReset:!0,initialPosition:0})),l.a.createElement(g.PanelBody,{title:Object(a.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(g.SelectControl,{label:Object(a.__)("Border Style","ultimate-addons-for-gutenberg"),value:Ne,onChange:function(e){return d({borderStyle:e})},options:[{value:"none",label:Object(a.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(a.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(a.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(a.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(a.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(a.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(a.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(a.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(a.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!=Ne&&l.a.createElement(l.a.Fragment,null,l.a.createElement(g.RangeControl,{label:Object(a.__)("Border Width","ultimate-addons-for-gutenberg"),value:Me,onChange:function(e){return d({borderWidth:e})},min:0,max:50,allowReset:!0}),l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"uagb-setting-label"},Object(a.__)("Border Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:We}}))),l.a.createElement(s.ColorPalette,{value:We,onChange:function(e){return d({borderColor:e})},allowReset:!0}))),l.a.createElement(g.RangeControl,{label:Object(a.__)("Border Radius","ultimate-addons-for-gutenberg"),value:De,onChange:function(e){return d({borderRadius:e})},min:0,max:1e3,allowReset:!0})))),t,n,m)};t.default=l.a.memo(m)}}]);