(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{170:function(e,t,n){"use strict";var a=n(10),o=n(25),i=n.n(o),l=n(171),r=n.n(l);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}if(void 0===m)var m=[];var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(l,e);var t,n,a,o,i=(a=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(a);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=i.call(this,e)).state={status:void 0},t.handleLoading=function(){t.setState({status:"loading"})},t.addFont=function(e){m.includes(e)||m.push(e)},t.handleActive=function(){t.setState({status:"active"})},t.handleInactive=function(){t.setState({status:"inactive"})},t.loadFonts=function(){m.includes(t.props.config.google.families[0])||(r.a.load(u(u({},t.props.config),{},{loading:t.handleLoading,active:t.handleActive,inactive:t.handleInactive})),t.addFont(t.props.config.google.families[0]))},t}return t=l,(n=[{key:"componentDidMount",value:function(){this.loadFonts()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.onStatus,o=n.config;t.status!==this.state.status&&a(this.state.status),e.config!==o&&this.loadFonts()}},{key:"render",value:function(){return this.props.children||null}}])&&g(t.prototype,n),l}(a.Component);p.propTypes={config:i.a.object.isRequired,children:i.a.element,onStatus:i.a.func.isRequired},p.defaultProps={onStatus:function(){}},t.a=p},171:function(e,t,n){var a;!function(){function o(e,t,n){return e.call.apply(e.bind,arguments)}function i(e,t,n){if(!e)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function l(e,t,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:i).apply(null,arguments)}var r=Date.now||function(){return+new Date};function c(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var s=!!window.FontFace;function u(e,t,n,a){if(t=e.c.createElement(t),n)for(var o in n)n.hasOwnProperty(o)&&("style"==o?t.style.cssText=n[o]:t.setAttribute(o,n[o]));return a&&t.appendChild(e.c.createTextNode(a)),t}function f(e,t,n){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(n,e.lastChild)}function g(e){e.parentNode&&e.parentNode.removeChild(e)}function b(e,t,n){t=t||[],n=n||[];for(var a=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var i=!1,l=0;l<a.length;l+=1)if(t[o]===a[l]){i=!0;break}i||a.push(t[o])}for(t=[],o=0;o<a.length;o+=1){for(i=!1,l=0;l<n.length;l+=1)if(a[o]===n[l]){i=!0;break}i||t.push(a[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function h(e,t){for(var n=e.className.split(/\s+/),a=0,o=n.length;a<o;a++)if(n[a]==t)return!0;return!1}function d(e,t,n){function a(){r&&o&&i&&(r(l),r=null)}t=u(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,i=!0,l=null,r=n||null;s?(t.onload=function(){o=!0,a()},t.onerror=function(){o=!0,l=Error("Stylesheet failed to load"),a()}):setTimeout((function(){o=!0,a()}),0),f(e,"head",t)}function m(e,t,n,a){var o=e.c.getElementsByTagName("head")[0];if(o){var i=u(e,"script",{src:t}),l=!1;return i.onload=i.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,n&&n(null),i.onload=i.onreadystatechange=null,"HEAD"==i.parentNode.tagName&&o.removeChild(i))},o.appendChild(i),setTimeout((function(){l||(l=!0,n&&n(Error("Script load timeout")))}),a||5e3),i}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,y(e)}}function _(e,t){e.c=t,y(e)}function y(e){0==e.a&&e.c&&(e.c(),e.c=null)}function S(e){this.a=e||"-"}function j(e,t){this.c=e,this.f=4,this.a="n";var n=(t||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function O(e){var t=[];e=e.split(/,\s*/);for(var n=0;n<e.length;n++){var a=e[n].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?t.push("'"+a+"'"):t.push(a)}return t.join(",")}function w(e){return e.a+e.f}function E(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function T(e){var t=4,n="n",a=null;return e&&((a=e.match(/(normal|oblique|italic)/i))&&a[1]&&(n=a[1].substr(0,1).toLowerCase()),(a=e.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?t=7:/[1-9]00/.test(a[1])&&(t=parseInt(a[1].substr(0,1),10)))),n+t}function F(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new S("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function C(e){if(e.g){var t=h(e.f,e.a.c("wf","active")),n=[],a=[e.a.c("wf","loading")];t||n.push(e.a.c("wf","inactive")),b(e.f,n,a)}x(e,"inactive")}function x(e,t,n){e.j&&e.h[t]&&(n?e.h[t](n.c,w(n)):e.h[t]())}function k(){this.c={}}function L(e,t){this.c=e,this.f=t,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function z(e){f(e.c,"body",e.a)}function H(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+O(e.c)+";font-style:"+E(e)+";font-weight:"+e.f+"00;"}function P(e,t,n,a,o,i){this.g=e,this.j=t,this.a=a,this.c=n,this.f=o||3e3,this.h=i||void 0}function I(e,t,n,a,o,i,l){this.v=e,this.B=t,this.c=n,this.a=a,this.s=l||"BESbswy",this.f={},this.w=o||3e3,this.u=i||null,this.m=this.j=this.h=this.g=null,this.g=new L(this.c,this.s),this.h=new L(this.c,this.s),this.j=new L(this.c,this.s),this.m=new L(this.c,this.s),e=H(e=new j(this.a.c+",serif",w(this.a))),this.g.a.style.cssText=e,e=H(e=new j(this.a.c+",sans-serif",w(this.a))),this.h.a.style.cssText=e,e=H(e=new j("serif",w(this.a))),this.j.a.style.cssText=e,e=H(e=new j("sans-serif",w(this.a))),this.m.a.style.cssText=e,z(this.g),z(this.h),z(this.j),z(this.m)}S.prototype.c=function(e){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},P.prototype.start=function(){var e=this.c.o.document,t=this,n=r(),a=new Promise((function(a,o){!function i(){r()-n>=t.f?o():e.fonts.load(function(e){return E(e)+" "+e.f+"00 300px "+O(e.c)}(t.a),t.h).then((function(e){1<=e.length?a():setTimeout(i,25)}),(function(){o()}))}()})),o=null,i=new Promise((function(e,n){o=setTimeout(n,t.f)}));Promise.race([i,a]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var M={D:"serif",C:"sans-serif"},R=null;function N(){if(null===R){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);R=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return R}function A(e,t,n){for(var a in M)if(M.hasOwnProperty(a)&&t===e.f[M[a]]&&n===e.f[M[a]])return!0;return!1}function B(e,t){setTimeout(l((function(){g(this.g.a),g(this.h.a),g(this.j.a),g(this.m.a),t(this.a)}),e),0)}function W(e,t,n){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=n}I.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var n,a=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(n=a===t.f.serif&&o===t.f["sans-serif"])||(n=N()&&A(t,a,o)),n?r()-t.A>=t.w?N()&&A(t,a,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?B(t,t.v):B(t,t.B):function(t){setTimeout(l((function(){e(this)}),t),50)}(t):B(t,t.v)}(this)};var D=null;function U(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&b(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),x(e,"active")):C(e.a))}function G(e){this.j=e,this.a=new k,this.h=0,this.f=this.g=!0}function q(e,t,n,a,o){var i=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,r=a||{};if(0===n.length&&i)C(t.a);else{t.f+=n.length,i&&(t.j=i);var c,s=[];for(c=0;c<n.length;c++){var u=n[c],f=r[u.c],g=t.a,h=u;if(g.g&&b(g.f,[g.a.c("wf",h.c,w(h).toString(),"loading")]),x(g,"fontloading",h),g=null,null===D)if(window.FontFace){h=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);D=h?42<parseInt(h[1],10):!d}else D=!1;g=D?new P(l(t.g,t),l(t.h,t),t.c,u,t.s,f):new I(l(t.g,t),l(t.h,t),t.c,u,t.s,e,f),s.push(g)}for(c=0;c<s.length;c++)s[c].start()}}),0)}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e,this.a=t}function V(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}W.prototype.g=function(e){var t=this.a;t.g&&b(t.f,[t.a.c("wf",e.c,w(e).toString(),"active")],[t.a.c("wf",e.c,w(e).toString(),"loading"),t.a.c("wf",e.c,w(e).toString(),"inactive")]),x(t,"fontactive",e),this.m=!0,U(this)},W.prototype.h=function(e){var t=this.a;if(t.g){var n=h(t.f,t.a.c("wf",e.c,w(e).toString(),"active")),a=[],o=[t.a.c("wf",e.c,w(e).toString(),"loading")];n||a.push(t.a.c("wf",e.c,w(e).toString(),"inactive")),b(t.f,a,o)}x(t,"fontinactive",e),U(this)},G.prototype.load=function(e){this.c=new c(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,n){var a=[],o=n.timeout;!function(e){e.g&&b(e.f,[e.a.c("wf","loading")]),x(e,"loading")}(t),a=function(e,t,n){var a,o=[];for(a in t)if(t.hasOwnProperty(a)){var i=e.c[a];i&&o.push(i(t[a],n))}return o}(e.a,n,e.c);var i=new W(e.c,t,o);for(e.h=a.length,t=0,n=a.length;t<n;t++)a[t].load((function(t,n,a){q(e,i,t,n,a)}))}(this,new F(this.c,e),e)},$.prototype.load=function(e){var t=this,n=t.a.projectId,a=t.a.version;if(n){var o=t.c.o;m(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(a?"?v="+a:""),(function(a){a?e([]):(o["__MonotypeConfiguration__"+n]=function(){return t.a},function t(){if(o["__mti_fntLst"+n]){var a,i=o["__mti_fntLst"+n](),l=[];if(i)for(var r=0;r<i.length;r++){var c=i[r].fontfamily;null!=i[r].fontStyle&&null!=i[r].fontWeight?(a=i[r].fontStyle+i[r].fontWeight,l.push(new j(c,a))):l.push(new j(c))}e(l)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+n}else e([])},J.prototype.load=function(e){var t,n,a=this.a.urls||[],o=this.a.families||[],i=this.a.testStrings||{},l=new p;for(t=0,n=a.length;t<n;t++)d(this.c,a[t],v(l));var r=[];for(t=0,n=o.length;t<n;t++)if((a=o[t].split(":"))[1])for(var c=a[1].split(","),s=0;s<c.length;s+=1)r.push(new j(a[0],c[s]));else r.push(new j(a[0]));_(l,(function(){e(r,i)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ne={Arimo:!0,Cousine:!0,Tinos:!0};function ae(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,n=this.c,a=new V(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var n=t.length,a=0;a<n;a++){var o=t[a].split(":");3==o.length&&e.f.push(o.pop());var i="";2==o.length&&""!=o[1]&&(i=":"),e.a.push(o.join(i))}}(a,o);var i=new X(o);!function(e){for(var t=e.f.length,n=0;n<t;n++){var a=e.f[n].split(":"),o=a[0].replace(/\+/g," "),i=["n4"];if(2<=a.length){var l;if(l=[],r=a[1])for(var r,c=(r=r.split(",")).length,s=0;s<c;s++){var u;if((u=r[s]).match(/^[\w-]+$/))if(null==(f=ee.exec(u.toLowerCase())))u="";else{if(u=null==(u=f[2])||""==u?"n":Z[u],null==(f=f[1])||""==f)f="4";else var f=Y[f]||(isNaN(f)?"4":f.substr(0,1));u=[u,f].join("")}else u="";u&&l.push(u)}0<l.length&&(i=l),3==a.length&&(l=[],0<(a=(a=a[2])?a.split(","):l).length&&(a=Q[a[0]])&&(e.c[o]=a))}for(e.c[o]||(a=Q[o])&&(e.c[o]=a),a=0;a<i.length;a+=1)e.a.push(new j(o,i[a]))}}(i),d(n,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,n=[],a=0;a<t;a++)n.push(e.a[a].replace(/ /g,"+"));return t=e.c+"?family="+n.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(a),v(t)),_(t,(function(){e(i.a,i.c,ne)}))},ae.prototype.load=function(e){var t=this.a.id,n=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){t=n.Typekit.config.fn;for(var a=[],o=0;o<t.length;o+=2)for(var i=t[o],l=t[o+1],r=0;r<l.length;r++)a.push(new j(i,l[r]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(a)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,n=this.c.o,a=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var o=0,i=n.fonts.length;o<i;++o){var l=n.fonts[o];a.a.push(new j(l.name,T("font-weight:"+l.weight+";font-style:"+l.style)))}e(a.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var ie=new G(window);ie.a.c.custom=function(e,t){return new J(t,e)},ie.a.c.fontdeck=function(e,t){return new oe(t,e)},ie.a.c.monotype=function(e,t){return new $(t,e)},ie.a.c.typekit=function(e,t){return new ae(t,e)},ie.a.c.google=function(e,t){return new te(t,e)};var le={load:l(ie.load,ie)};void 0===(a=function(){return le}.call(t,n,t,e))||(e.exports=a)}()},372:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(6),l=n(2),r=n(58),c=n(12),s=n(8),u=n(17),f=n(170),g=n(172),b=n.n(g),h=n(4),d=n(5),m=[{value:"thumbnail",label:Object(l.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(l.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(l.__)("Large","ultimate-addons-for-gutenberg")}],p=function(e){var t,n,g,p=e=e.parentProps,v=p.setAttributes,_=p.attributes,y=_.align,S=_.tag,j=_.titleColor,O=_.prefixColor,w=_.descColor,E=_.titleFontFamily,T=_.titleFontWeight,F=_.titleFontSubset,C=_.titleFontSizeType,x=_.titleFontSize,k=_.titleFontSizeMobile,L=_.titleFontSizeTablet,z=_.titleLineHeightType,H=_.titleLineHeight,P=_.titleLineHeightMobile,I=_.titleLineHeightTablet,M=_.prefixFontFamily,R=_.prefixFontWeight,N=_.prefixFontSubset,A=_.prefixFontSizeType,B=_.prefixFontSize,W=_.prefixFontSizeMobile,D=_.prefixFontSizeTablet,U=_.prefixLineHeightType,G=_.prefixLineHeight,q=_.prefixLineHeightMobile,$=_.prefixLineHeightTablet,J=_.descFontFamily,V=_.descFontWeight,K=_.descFontSubset,X=_.descFontSizeType,Q=_.descFontSize,Y=_.descFontSizeMobile,Z=_.descFontSizeTablet,ee=_.descLineHeightType,te=_.descLineHeight,ne=_.descLineHeightMobile,ae=_.descLineHeightTablet,oe=_.socialFontSize,ie=_.socialFontSizeType,le=_.socialFontSizeMobile,re=_.socialFontSizeTablet,ce=_.titleLoadGoogleFonts,se=_.prefixLoadGoogleFonts,ue=_.descLoadGoogleFonts,fe=_.image,ge=_.imgStyle,be=_.imgAlign,he=_.imgSize,de=_.imgWidth,me=_.imgPosition,pe=_.titleSpace,ve=_.descSpace,_e=_.prefixSpace,ye=_.imgLeftMargin,Se=_.imgRightMargin,je=_.imgTopMargin,Oe=_.imgBottomMargin,we=_.twitterIcon,Ee=_.fbIcon,Te=_.linkedinIcon,Fe=_.pinIcon,Ce=_.twitterLink,xe=_.fbLink,ke=_.linkedinLink,Le=_.pinLink,ze=_.socialColor,He=_.socialHoverColor,Pe=_.socialSpace,Ie=_.socialTarget,Me=_.socialEnable,Re=_.stack,Ne=function(e){var t=[];for(var n in e)t.push({value:n,label:n});return t},Ae=Object.keys(r);if(fe&&fe.sizes&&(m=Ne(fe.sizes)),1==ce){var Be={google:{families:[E+(T?":"+T:"")]}};t=o.a.createElement(f.a,{config:Be})}if(1==se){var We={google:{families:[M+(R?":"+R:"")]}};n=o.a.createElement(f.a,{config:We})}if(1==ue){var De={google:{families:[J+(V?":"+V:"")]}};g=o.a.createElement(f.a,{config:De})}return o.a.createElement(o.a.Fragment,null,"above"==me&&o.a.createElement(h.BlockControls,{key:"controls"},o.a.createElement(h.AlignmentToolbar,{value:y,onChange:function(e){return v({align:e})}})),o.a.createElement(h.InspectorControls,null,o.a.createElement(d.PanelBody,{title:Object(l.__)("Image")},o.a.createElement(d.BaseControl,{id:"team-settings",className:"editor-bg-image-control",label:Object(l.__)("Team Member Image","ultimate-addons-for-gutenberg")},o.a.createElement(h.MediaUpload,{title:Object(l.__)("Select Image","ultimate-addons-for-gutenberg"),onSelect:function(t){var n=e.setAttributes;if(t&&t.url){if(t.type&&"image"==t.type&&(n({image:t}),t.sizes)){var a=Ne(t.sizes);m=a}}else n({image:null})},allowedTypes:["image"],value:fe,render:function(e){var t=e.open;return o.a.createElement(d.Button,{isSecondary:!0,onClick:t},fe?Object(l.__)("Replace image","ultimate-addons-for-gutenberg"):Object(l.__)("Select Image","ultimate-addons-for-gutenberg"))}}),fe&&o.a.createElement(d.Button,{className:"uagb-rm-btn",onClick:function(){v({image:null})},isLink:!0,isDestructive:!0},Object(l.__)("Remove Image","ultimate-addons-for-gutenberg"))),fe&&o.a.createElement(d.SelectControl,{label:Object(l.__)("Position","ultimate-addons-for-gutenberg"),value:me,onChange:function(e){return v({imgPosition:e})},options:[{value:"above",label:Object(l.__)("Above","ultimate-addons-for-gutenberg")},{value:"left",label:Object(l.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(l.__)("Right","ultimate-addons-for-gutenberg")}]}),"above"!=me&&fe&&o.a.createElement(d.SelectControl,{label:Object(l.__)("Stack on","ultimate-addons-for-gutenberg"),value:Re,options:[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(l.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(l.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(l.__)("Note: Choose on what breakpoint the Team will stack."),onChange:function(e){return v({stack:e})}}),fe&&o.a.createElement(d.SelectControl,{label:Object(l.__)("Image Style","ultimate-addons-for-gutenberg"),value:ge,onChange:function(e){return v({imgStyle:e})},options:[{value:"normal",label:Object(l.__)("Normal","ultimate-addons-for-gutenberg")},{value:"circle",label:Object(l.__)("Circle","ultimate-addons-for-gutenberg")},{value:"square",label:Object(l.__)("Square","ultimate-addons-for-gutenberg")}]}),me&&"above"!==me&&fe&&o.a.createElement(d.SelectControl,{label:Object(l.__)("Vertical Alignment","ultimate-addons-for-gutenberg"),value:be,onChange:function(e){return v({imgAlign:e})},options:[{value:"top",label:Object(l.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:Object(l.__)("Middle","ultimate-addons-for-gutenberg")}]}),fe&&o.a.createElement(o.a.Fragment,null,o.a.createElement(d.SelectControl,{label:Object(l.__)("Size","ultimate-addons-for-gutenberg"),options:m,value:he,onChange:function(e){return v({imgSize:e})}}),o.a.createElement(d.RangeControl,{label:Object(l.__)("Width","ultimate-addons-for-gutenberg"),value:de,onChange:function(e){return v({imgWidth:e})},min:0,max:500,allowReset:!0}))),o.a.createElement(d.PanelBody,{title:Object(l.__)("Social Links","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(d.ToggleControl,{label:Object(l.__)("Enable Social Links","ultimate-addons-for-gutenberg"),checked:Me,onChange:function(){return v({socialEnable:!Me})}}),Me&&o.a.createElement(o.a.Fragment,null,o.a.createElement(d.ToggleControl,{label:Object(l.__)("Open Links in New Window","ultimate-addons-for-gutenberg"),checked:Ie,onChange:function(){return v({socialTarget:!Ie})}}),o.a.createElement(d.PanelBody,{title:Object(l.__)("Twitter","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement("p",{className:"components-base-control__label"},Object(l.__)("Icon","ultimate-addons-for-gutenberg")),o.a.createElement(b.a,{icons:Ae,renderFunc:c.a,theme:"default",value:we,onChange:function(e){return v({twitterIcon:e})},isMulti:!1,noSelectedPlaceholder:Object(l.__)("Select Icon","ultimate-addons-for-gutenberg")}),o.a.createElement("p",{className:"components-base-control__label"},Object(l.__)("URL","ultimate-addons-for-gutenberg")),o.a.createElement(d.TextControl,{value:Ce,onChange:function(e){return v({twitterLink:e})},placeholder:Object(l.__)("Enter Twitter URL","ultimate-addons-for-gutenberg")})),o.a.createElement(d.PanelBody,{title:Object(l.__)("Facebook","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement("p",{className:"components-base-control__label"},Object(l.__)("Icon","ultimate-addons-for-gutenberg")),o.a.createElement(b.a,{icons:Ae,renderFunc:c.a,theme:"default",value:Ee,onChange:function(e){return v({fbIcon:e})},isMulti:!1,noSelectedPlaceholder:Object(l.__)("Select Icon","ultimate-addons-for-gutenberg")}),o.a.createElement("p",{className:"components-base-control__label"},Object(l.__)("URL","ultimate-addons-for-gutenberg")),o.a.createElement(d.TextControl,{value:xe,onChange:function(e){return v({fbLink:e})},placeholder:Object(l.__)("Enter Facebook URL","ultimate-addons-for-gutenberg")})),o.a.createElement(d.PanelBody,{title:Object(l.__)("LinkedIn","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement("p",{className:"components-base-control__label"},Object(l.__)("Icon","ultimate-addons-for-gutenberg")),o.a.createElement(b.a,{icons:Ae,renderFunc:c.a,noSelectedPlaceholder:Object(l.__)("Select Icon","ultimate-addons-for-gutenberg"),theme:"default",value:Te,onChange:function(e){return v({linkedinIcon:e})},isMulti:!1}),o.a.createElement("p",{className:"components-base-control__label"},Object(l.__)("URL","ultimate-addons-for-gutenberg")),o.a.createElement(d.TextControl,{value:ke,onChange:function(e){return v({linkedinLink:e})},placeholder:Object(l.__)("Enter LinkedIn URL","ultimate-addons-for-gutenberg")})),o.a.createElement(d.PanelBody,{title:Object(l.__)("Pinterest","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement("p",{className:"components-base-control__label"},Object(l.__)("Icon","ultimate-addons-for-gutenberg")),o.a.createElement(b.a,{icons:Ae,renderFunc:c.a,noSelectedPlaceholder:Object(l.__)("Select Icon","ultimate-addons-for-gutenberg"),theme:"default",value:Fe,onChange:function(e){return v({pinIcon:e})},isMulti:!1}),o.a.createElement("p",{className:"components-base-control__label"},Object(l.__)("URL","ultimate-addons-for-gutenberg")),o.a.createElement(d.TextControl,{value:Le,onChange:function(e){return v({pinLink:e})},placeholder:Object(l.__)("Enter Pinterest URL","ultimate-addons-for-gutenberg")})))),o.a.createElement(d.PanelBody,{title:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(d.SelectControl,{label:Object(l.__)("Title Tag","ultimate-addons-for-gutenberg"),value:S,onChange:function(e){return v({tag:e})},options:[{value:"h1",label:Object(l.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(l.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(l.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(l.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(l.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(l.__)("H6","ultimate-addons-for-gutenberg")}]}),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(l.__)("Title","ultimate-addons-for-gutenberg")),o.a.createElement(a.Suspense,{fallback:Object(s.a)()},o.a.createElement(u.default,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:_,setAttributes:v,loadGoogleFonts:{value:ce,label:"titleLoadGoogleFonts"},fontFamily:{value:E,label:"titleFontFamily"},fontWeight:{value:T,label:"titleFontWeight"},fontSubset:{value:F,label:"titleFontSubset"},fontSizeType:{value:C,label:"titleFontSizeType"},fontSize:{value:x,label:"titleFontSize"},fontSizeMobile:{value:k,label:"titleFontSizeMobile"},fontSizeTablet:{value:L,label:"titleFontSizeTablet"},lineHeightType:{value:z,label:"titleLineHeightType"},lineHeight:{value:H,label:"titleLineHeight"},lineHeightMobile:{value:P,label:"titleLineHeightMobile"},lineHeightTablet:{value:I,label:"titleLineHeightTablet"}})),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(l.__)("Prefix","ultimate-addons-for-gutenberg")),o.a.createElement(a.Suspense,{fallback:Object(s.a)()},o.a.createElement(u.default,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:_,setAttributes:v,loadGoogleFonts:{value:se,label:"prefixLoadGoogleFonts"},fontFamily:{value:M,label:"prefixFontFamily"},fontWeight:{value:R,label:"prefixFontWeight"},fontSubset:{value:N,label:"prefixFontSubset"},fontSizeType:{value:A,label:"prefixFontSizeType"},fontSize:{value:B,label:"prefixFontSize"},fontSizeMobile:{value:W,label:"prefixFontSizeMobile"},fontSizeTablet:{value:D,label:"prefixFontSizeTablet"},lineHeightType:{value:U,label:"prefixLineHeightType"},lineHeight:{value:G,label:"prefixLineHeight"},lineHeightMobile:{value:q,label:"prefixLineHeightMobile"},lineHeightTablet:{value:$,label:"prefixLineHeightTablet"}})),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(l.__)("Description","ultimate-addons-for-gutenberg")),o.a.createElement(a.Suspense,{fallback:Object(s.a)()},o.a.createElement(u.default,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:_,setAttributes:v,loadGoogleFonts:{value:ue,label:"descLoadGoogleFonts"},fontFamily:{value:J,label:"descFontFamily"},fontWeight:{value:V,label:"descFontWeight"},fontSubset:{value:K,label:"descFontSubset"},fontSizeType:{value:X,label:"descFontSizeType"},fontSize:{value:Q,label:"descFontSize"},fontSizeMobile:{value:Y,label:"descFontSizeMobile"},fontSizeTablet:{value:Z,label:"descFontSizeTablet"},lineHeightType:{value:ee,label:"descLineHeightType"},lineHeight:{value:te,label:"descLineHeight"},lineHeightMobile:{value:ne,label:"descLineHeightMobile"},lineHeightTablet:{value:ae,label:"descLineHeightTablet"}})),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(l.__)("Social Icons","ultimate-addons-for-gutenberg")),o.a.createElement(a.Suspense,{fallback:Object(s.a)()},o.a.createElement(u.default,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:_,setAttributes:v,fontSizeType:{value:ie,label:"socialFontSizeType"},fontSize:{value:oe,label:"socialFontSize"},fontSizeMobile:{value:le,label:"socialFontSizeMobile"},fontSizeTablet:{value:re,label:"socialFontSizeTablet"},disableFontFamily:!0,disableLineHeight:!0}))),o.a.createElement(h.PanelColorSettings,{title:Object(l.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!1,colorSettings:[{value:j,onChange:function(e){return v({titleColor:e})},label:Object(l.__)("Title Color","ultimate-addons-for-gutenberg")},{value:O,onChange:function(e){return v({prefixColor:e})},label:Object(l.__)("Designation Color","ultimate-addons-for-gutenberg")},{value:w,onChange:function(e){return v({descColor:e})},label:Object(l.__)("Description Color","ultimate-addons-for-gutenberg")},{value:ze,onChange:function(e){return v({socialColor:e})},label:Object(l.__)("Social Icon Color","ultimate-addons-for-gutenberg")},{value:He,onChange:function(e){return v({socialHoverColor:e})},label:Object(l.__)("Social Icon Hover Color","ultimate-addons-for-gutenberg")}]}),o.a.createElement(d.PanelBody,{title:Object(l.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(d.RangeControl,{label:Object(l.__)("Title Bottom Spacing","ultimate-addons-for-gutenberg"),value:pe,onChange:function(e){return v({titleSpace:e})},min:0,max:50,allowReset:!0,initialPosition:0}),o.a.createElement(d.RangeControl,{label:Object(l.__)("Designation Bottom Spacing","ultimate-addons-for-gutenberg"),value:_e,onChange:function(e){return v({prefixSpace:e})},min:0,max:50,allowReset:!0,initialPosition:0}),o.a.createElement(d.RangeControl,{label:Object(l.__)("Description Bottom Spacing","ultimate-addons-for-gutenberg"),value:ve,onChange:function(e){return v({descSpace:e})},min:0,max:50,allowReset:!0}),o.a.createElement(d.RangeControl,{label:Object(l.__)("Inter Social Icon Spacing","ultimate-addons-for-gutenberg"),value:Pe,onChange:function(e){return v({socialSpace:e})},min:0,max:50,allowReset:!0}),fe&&o.a.createElement(o.a.Fragment,null,o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(l.__)("Image Margin (px)","ultimate-addons-for-gutenberg")),"above"!=me&&o.a.createElement(d.RangeControl,{label:i.a.left_margin,className:"uagb-margin-control",value:ye,onChange:function(e){return v({imgLeftMargin:e})},min:0,max:50,allowReset:!0}),"above"!=me&&o.a.createElement(d.RangeControl,{label:i.a.right_margin,className:"uagb-margin-control",value:Se,onChange:function(e){return v({imgRightMargin:e})},min:0,max:50,allowReset:!0}),o.a.createElement(d.RangeControl,{label:i.a.top_margin,className:"uagb-margin-control",value:je,onChange:function(e){return v({imgTopMargin:e})},min:0,max:50,allowReset:!0}),o.a.createElement(d.RangeControl,{label:i.a.bottom_margin,className:"uagb-margin-control",value:Oe,onChange:function(e){return v({imgBottomMargin:e})},min:0,max:50,allowReset:!0})))),o.a.createElement(a.Suspense,{fallback:Object(s.a)()},t,n,g))};t.default=o.a.memo(p)}}]);