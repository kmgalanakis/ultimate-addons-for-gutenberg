(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[100],{20:function(e,t,n){"use strict";var a=n(6),o=n(22),i=n.n(o),l=n(21),r=n.n(l);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}if(void 0===m)var m=[];var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(l,e);var t,n,a,o,i=(a=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(a);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=i.call(this,e)).state={status:void 0},t.handleLoading=function(){t.setState({status:"loading"})},t.addFont=function(e){m.includes(e)||m.push(e)},t.handleActive=function(){t.setState({status:"active"})},t.handleInactive=function(){t.setState({status:"inactive"})},t.loadFonts=function(){m.includes(t.props.config.google.families[0])||(r.a.load(u(u({},t.props.config),{},{loading:t.handleLoading,active:t.handleActive,inactive:t.handleInactive})),t.addFont(t.props.config.google.families[0]))},t}return t=l,(n=[{key:"componentDidMount",value:function(){this.loadFonts()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.onStatus,o=n.config;t.status!==this.state.status&&a(this.state.status),e.config!==o&&this.loadFonts()}},{key:"render",value:function(){return this.props.children||null}}])&&g(t.prototype,n),l}(a.Component);p.propTypes={config:i.a.object.isRequired,children:i.a.element,onStatus:i.a.func.isRequired},p.defaultProps={onStatus:function(){}},t.a=p},21:function(e,t,n){var a;!function(){function o(e,t,n){return e.call.apply(e.bind,arguments)}function i(e,t,n){if(!e)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function l(e,t,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:i).apply(null,arguments)}var r=Date.now||function(){return+new Date};function c(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var s=!!window.FontFace;function u(e,t,n,a){if(t=e.c.createElement(t),n)for(var o in n)n.hasOwnProperty(o)&&("style"==o?t.style.cssText=n[o]:t.setAttribute(o,n[o]));return a&&t.appendChild(e.c.createTextNode(a)),t}function f(e,t,n){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(n,e.lastChild)}function g(e){e.parentNode&&e.parentNode.removeChild(e)}function b(e,t,n){t=t||[],n=n||[];for(var a=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var i=!1,l=0;l<a.length;l+=1)if(t[o]===a[l]){i=!0;break}i||a.push(t[o])}for(t=[],o=0;o<a.length;o+=1){for(i=!1,l=0;l<n.length;l+=1)if(a[o]===n[l]){i=!0;break}i||t.push(a[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function h(e,t){for(var n=e.className.split(/\s+/),a=0,o=n.length;a<o;a++)if(n[a]==t)return!0;return!1}function d(e,t,n){function a(){r&&o&&i&&(r(l),r=null)}t=u(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,i=!0,l=null,r=n||null;s?(t.onload=function(){o=!0,a()},t.onerror=function(){o=!0,l=Error("Stylesheet failed to load"),a()}):setTimeout((function(){o=!0,a()}),0),f(e,"head",t)}function m(e,t,n,a){var o=e.c.getElementsByTagName("head")[0];if(o){var i=u(e,"script",{src:t}),l=!1;return i.onload=i.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,n&&n(null),i.onload=i.onreadystatechange=null,"HEAD"==i.parentNode.tagName&&o.removeChild(i))},o.appendChild(i),setTimeout((function(){l||(l=!0,n&&n(Error("Script load timeout")))}),a||5e3),i}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,y(e)}}function _(e,t){e.c=t,y(e)}function y(e){0==e.a&&e.c&&(e.c(),e.c=null)}function S(e){this.a=e||"-"}function w(e,t){this.c=e,this.f=4,this.a="n";var n=(t||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function j(e){var t=[];e=e.split(/,\s*/);for(var n=0;n<e.length;n++){var a=e[n].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?t.push("'"+a+"'"):t.push(a)}return t.join(",")}function O(e){return e.a+e.f}function E(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function T(e){var t=4,n="n",a=null;return e&&((a=e.match(/(normal|oblique|italic)/i))&&a[1]&&(n=a[1].substr(0,1).toLowerCase()),(a=e.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?t=7:/[1-9]00/.test(a[1])&&(t=parseInt(a[1].substr(0,1),10)))),n+t}function F(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new S("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function C(e){if(e.g){var t=h(e.f,e.a.c("wf","active")),n=[],a=[e.a.c("wf","loading")];t||n.push(e.a.c("wf","inactive")),b(e.f,n,a)}x(e,"inactive")}function x(e,t,n){e.j&&e.h[t]&&(n?e.h[t](n.c,O(n)):e.h[t]())}function k(){this.c={}}function L(e,t){this.c=e,this.f=t,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function z(e){f(e.c,"body",e.a)}function I(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(e.c)+";font-style:"+E(e)+";font-weight:"+e.f+"00;"}function H(e,t,n,a,o,i){this.g=e,this.j=t,this.a=a,this.c=n,this.f=o||3e3,this.h=i||void 0}function P(e,t,n,a,o,i,l){this.v=e,this.B=t,this.c=n,this.a=a,this.s=l||"BESbswy",this.f={},this.w=o||3e3,this.u=i||null,this.m=this.j=this.h=this.g=null,this.g=new L(this.c,this.s),this.h=new L(this.c,this.s),this.j=new L(this.c,this.s),this.m=new L(this.c,this.s),e=I(e=new w(this.a.c+",serif",O(this.a))),this.g.a.style.cssText=e,e=I(e=new w(this.a.c+",sans-serif",O(this.a))),this.h.a.style.cssText=e,e=I(e=new w("serif",O(this.a))),this.j.a.style.cssText=e,e=I(e=new w("sans-serif",O(this.a))),this.m.a.style.cssText=e,z(this.g),z(this.h),z(this.j),z(this.m)}S.prototype.c=function(e){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},H.prototype.start=function(){var e=this.c.o.document,t=this,n=r(),a=new Promise((function(a,o){!function i(){r()-n>=t.f?o():e.fonts.load(function(e){return E(e)+" "+e.f+"00 300px "+j(e.c)}(t.a),t.h).then((function(e){1<=e.length?a():setTimeout(i,25)}),(function(){o()}))}()})),o=null,i=new Promise((function(e,n){o=setTimeout(n,t.f)}));Promise.race([i,a]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var M={D:"serif",C:"sans-serif"},R=null;function B(){if(null===R){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);R=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return R}function N(e,t,n){for(var a in M)if(M.hasOwnProperty(a)&&t===e.f[M[a]]&&n===e.f[M[a]])return!0;return!1}function A(e,t){setTimeout(l((function(){g(this.g.a),g(this.h.a),g(this.j.a),g(this.m.a),t(this.a)}),e),0)}function W(e,t,n){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=n}P.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var n,a=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(n=a===t.f.serif&&o===t.f["sans-serif"])||(n=B()&&N(t,a,o)),n?r()-t.A>=t.w?B()&&N(t,a,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?A(t,t.v):A(t,t.B):function(t){setTimeout(l((function(){e(this)}),t),50)}(t):A(t,t.v)}(this)};var U=null;function G(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&b(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),x(e,"active")):C(e.a))}function D(e){this.j=e,this.a=new k,this.h=0,this.f=this.g=!0}function q(e,t,n,a,o){var i=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,r=a||{};if(0===n.length&&i)C(t.a);else{t.f+=n.length,i&&(t.j=i);var c,s=[];for(c=0;c<n.length;c++){var u=n[c],f=r[u.c],g=t.a,h=u;if(g.g&&b(g.f,[g.a.c("wf",h.c,O(h).toString(),"loading")]),x(g,"fontloading",h),g=null,null===U)if(window.FontFace){h=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);U=h?42<parseInt(h[1],10):!d}else U=!1;g=U?new H(l(t.g,t),l(t.h,t),t.c,u,t.s,f):new P(l(t.g,t),l(t.h,t),t.c,u,t.s,e,f),s.push(g)}for(c=0;c<s.length;c++)s[c].start()}}),0)}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e,this.a=t}function V(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}W.prototype.g=function(e){var t=this.a;t.g&&b(t.f,[t.a.c("wf",e.c,O(e).toString(),"active")],[t.a.c("wf",e.c,O(e).toString(),"loading"),t.a.c("wf",e.c,O(e).toString(),"inactive")]),x(t,"fontactive",e),this.m=!0,G(this)},W.prototype.h=function(e){var t=this.a;if(t.g){var n=h(t.f,t.a.c("wf",e.c,O(e).toString(),"active")),a=[],o=[t.a.c("wf",e.c,O(e).toString(),"loading")];n||a.push(t.a.c("wf",e.c,O(e).toString(),"inactive")),b(t.f,a,o)}x(t,"fontinactive",e),G(this)},D.prototype.load=function(e){this.c=new c(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,n){var a=[],o=n.timeout;!function(e){e.g&&b(e.f,[e.a.c("wf","loading")]),x(e,"loading")}(t),a=function(e,t,n){var a,o=[];for(a in t)if(t.hasOwnProperty(a)){var i=e.c[a];i&&o.push(i(t[a],n))}return o}(e.a,n,e.c);var i=new W(e.c,t,o);for(e.h=a.length,t=0,n=a.length;t<n;t++)a[t].load((function(t,n,a){q(e,i,t,n,a)}))}(this,new F(this.c,e),e)},$.prototype.load=function(e){var t=this,n=t.a.projectId,a=t.a.version;if(n){var o=t.c.o;m(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(a?"?v="+a:""),(function(a){a?e([]):(o["__MonotypeConfiguration__"+n]=function(){return t.a},function t(){if(o["__mti_fntLst"+n]){var a,i=o["__mti_fntLst"+n](),l=[];if(i)for(var r=0;r<i.length;r++){var c=i[r].fontfamily;null!=i[r].fontStyle&&null!=i[r].fontWeight?(a=i[r].fontStyle+i[r].fontWeight,l.push(new w(c,a))):l.push(new w(c))}e(l)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+n}else e([])},J.prototype.load=function(e){var t,n,a=this.a.urls||[],o=this.a.families||[],i=this.a.testStrings||{},l=new p;for(t=0,n=a.length;t<n;t++)d(this.c,a[t],v(l));var r=[];for(t=0,n=o.length;t<n;t++)if((a=o[t].split(":"))[1])for(var c=a[1].split(","),s=0;s<c.length;s+=1)r.push(new w(a[0],c[s]));else r.push(new w(a[0]));_(l,(function(){e(r,i)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ne={Arimo:!0,Cousine:!0,Tinos:!0};function ae(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,n=this.c,a=new V(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var n=t.length,a=0;a<n;a++){var o=t[a].split(":");3==o.length&&e.f.push(o.pop());var i="";2==o.length&&""!=o[1]&&(i=":"),e.a.push(o.join(i))}}(a,o);var i=new X(o);!function(e){for(var t=e.f.length,n=0;n<t;n++){var a=e.f[n].split(":"),o=a[0].replace(/\+/g," "),i=["n4"];if(2<=a.length){var l;if(l=[],r=a[1])for(var r,c=(r=r.split(",")).length,s=0;s<c;s++){var u;if((u=r[s]).match(/^[\w-]+$/))if(null==(f=ee.exec(u.toLowerCase())))u="";else{if(u=null==(u=f[2])||""==u?"n":Z[u],null==(f=f[1])||""==f)f="4";else var f=Y[f]||(isNaN(f)?"4":f.substr(0,1));u=[u,f].join("")}else u="";u&&l.push(u)}0<l.length&&(i=l),3==a.length&&(l=[],0<(a=(a=a[2])?a.split(","):l).length&&(a=Q[a[0]])&&(e.c[o]=a))}for(e.c[o]||(a=Q[o])&&(e.c[o]=a),a=0;a<i.length;a+=1)e.a.push(new w(o,i[a]))}}(i),d(n,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,n=[],a=0;a<t;a++)n.push(e.a[a].replace(/ /g,"+"));return t=e.c+"?family="+n.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(a),v(t)),_(t,(function(){e(i.a,i.c,ne)}))},ae.prototype.load=function(e){var t=this.a.id,n=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){t=n.Typekit.config.fn;for(var a=[],o=0;o<t.length;o+=2)for(var i=t[o],l=t[o+1],r=0;r<l.length;r++)a.push(new w(i,l[r]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(a)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,n=this.c.o,a=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var o=0,i=n.fonts.length;o<i;++o){var l=n.fonts[o];a.a.push(new w(l.name,T("font-weight:"+l.weight+";font-style:"+l.style)))}e(a.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var ie=new D(window);ie.a.c.custom=function(e,t){return new J(t,e)},ie.a.c.fontdeck=function(e,t){return new oe(t,e)},ie.a.c.monotype=function(e,t){return new $(t,e)},ie.a.c.typekit=function(e,t){return new ae(t,e)},ie.a.c.google=function(e,t){return new te(t,e)};var le={load:l(ie.load,ie)};void 0===(a=function(){return le}.call(t,n,t,e))||(e.exports=a)}()},471:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),i=n(2),l=n(17),r=n(16),c=n(25),s=n(20),u=n(27),f=n.n(u),g=n(4),b=n(5),h=[{value:"thumbnail",label:Object(i.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(i.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(i.__)("Large","ultimate-addons-for-gutenberg")}],d=function(e){var t,n,u,d=e=e.parentProps,m=d.setAttributes,p=d.attributes,v=p.align,_=p.tag,y=p.titleColor,S=p.prefixColor,w=p.descColor,j=p.titleFontFamily,O=p.titleFontWeight,E=p.titleFontSubset,T=p.titleFontSizeType,F=p.titleFontSize,C=p.titleFontSizeMobile,x=p.titleFontSizeTablet,k=p.titleLineHeightType,L=p.titleLineHeight,z=p.titleLineHeightMobile,I=p.titleLineHeightTablet,H=p.prefixFontFamily,P=p.prefixFontWeight,M=p.prefixFontSubset,R=p.prefixFontSizeType,B=p.prefixFontSize,N=p.prefixFontSizeMobile,A=p.prefixFontSizeTablet,W=p.prefixLineHeightType,U=p.prefixLineHeight,G=p.prefixLineHeightMobile,D=p.prefixLineHeightTablet,q=p.descFontFamily,$=p.descFontWeight,J=p.descFontSubset,V=p.descFontSizeType,K=p.descFontSize,X=p.descFontSizeMobile,Q=p.descFontSizeTablet,Y=p.descLineHeightType,Z=p.descLineHeight,ee=p.descLineHeightMobile,te=p.descLineHeightTablet,ne=p.socialFontSize,ae=p.socialFontSizeType,oe=p.socialFontSizeMobile,ie=p.socialFontSizeTablet,le=p.titleLoadGoogleFonts,re=p.prefixLoadGoogleFonts,ce=p.descLoadGoogleFonts,se=p.image,ue=p.imgStyle,fe=p.imgAlign,ge=p.imgSize,be=p.imgWidth,he=p.imgPosition,de=p.titleSpace,me=p.descSpace,pe=p.prefixSpace,ve=p.imgLeftMargin,_e=p.imgRightMargin,ye=p.imgTopMargin,Se=p.imgBottomMargin,we=p.twitterIcon,je=p.fbIcon,Oe=p.linkedinIcon,Ee=p.pinIcon,Te=p.twitterLink,Fe=p.fbLink,Ce=p.linkedinLink,xe=p.pinLink,ke=p.socialColor,Le=p.socialHoverColor,ze=p.socialSpace,Ie=p.socialTarget,He=p.socialEnable,Pe=p.stack,Me=function(e){var t=[];for(var n in e)t.push({value:n,label:n});return t};if(se&&se.sizes&&(h=Me(se.sizes)),1==le){var Re={google:{families:[j+(O?":"+O:"")]}};t=o.a.createElement(s.a,{config:Re})}if(1==re){var Be={google:{families:[H+(P?":"+P:"")]}};n=o.a.createElement(s.a,{config:Be})}if(1==ce){var Ne={google:{families:[q+($?":"+$:"")]}};u=o.a.createElement(s.a,{config:Ne})}return o.a.createElement(o.a.Fragment,null,"above"==he&&o.a.createElement(g.BlockControls,{key:"controls"},o.a.createElement(g.AlignmentToolbar,{value:v,onChange:function(e){return m({align:e})}})),o.a.createElement(g.InspectorControls,null,o.a.createElement(b.PanelBody,{title:Object(i.__)("Image")},o.a.createElement(b.BaseControl,{id:"team-settings",className:"editor-bg-image-control",label:Object(i.__)("Team Member Image","ultimate-addons-for-gutenberg")},o.a.createElement(g.MediaUpload,{title:Object(i.__)("Select Image","ultimate-addons-for-gutenberg"),onSelect:function(t){var n=e.setAttributes;if(t&&t.url){if(t.type&&"image"==t.type&&(n({image:t}),t.sizes)){var a=Me(t.sizes);h=a}}else n({image:null})},allowedTypes:["image"],value:se,render:function(e){var t=e.open;return o.a.createElement(b.Button,{isSecondary:!0,onClick:t},se?Object(i.__)("Replace image","ultimate-addons-for-gutenberg"):Object(i.__)("Select Image","ultimate-addons-for-gutenberg"))}}),se&&o.a.createElement(b.Button,{className:"uagb-rm-btn",onClick:function(){m({image:null})},isLink:!0,isDestructive:!0},Object(i.__)("Remove Image","ultimate-addons-for-gutenberg"))),se&&o.a.createElement(b.SelectControl,{label:Object(i.__)("Position","ultimate-addons-for-gutenberg"),value:he,onChange:function(e){return m({imgPosition:e})},options:[{value:"above",label:Object(i.__)("Above","ultimate-addons-for-gutenberg")},{value:"left",label:Object(i.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(i.__)("Right","ultimate-addons-for-gutenberg")}]}),"above"!=he&&se&&o.a.createElement(b.SelectControl,{label:Object(i.__)("Stack on","ultimate-addons-for-gutenberg"),value:Pe,options:[{value:"none",label:Object(i.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(i.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(i.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(i.__)("Note: Choose on what breakpoint the Team will stack."),onChange:function(e){return m({stack:e})}}),se&&o.a.createElement(b.SelectControl,{label:Object(i.__)("Image Style","ultimate-addons-for-gutenberg"),value:ue,onChange:function(e){return m({imgStyle:e})},options:[{value:"normal",label:Object(i.__)("Normal","ultimate-addons-for-gutenberg")},{value:"circle",label:Object(i.__)("Circle","ultimate-addons-for-gutenberg")},{value:"square",label:Object(i.__)("Square","ultimate-addons-for-gutenberg")}]}),he&&"above"!==he&&se&&o.a.createElement(b.SelectControl,{label:Object(i.__)("Vertical Alignment","ultimate-addons-for-gutenberg"),value:fe,onChange:function(e){return m({imgAlign:e})},options:[{value:"top",label:Object(i.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:Object(i.__)("Middle","ultimate-addons-for-gutenberg")}]}),se&&o.a.createElement(o.a.Fragment,null,o.a.createElement(b.SelectControl,{label:Object(i.__)("Size","ultimate-addons-for-gutenberg"),options:h,value:ge,onChange:function(e){return m({imgSize:e})}}),o.a.createElement(b.RangeControl,{label:Object(i.__)("Width","ultimate-addons-for-gutenberg"),value:be,onChange:function(e){return m({imgWidth:e})},min:0,max:500,allowReset:!0}))),o.a.createElement(b.PanelBody,{title:Object(i.__)("Social Links","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(b.ToggleControl,{label:Object(i.__)("Enable Social Links","ultimate-addons-for-gutenberg"),checked:He,onChange:function(){return m({socialEnable:!He})}}),He&&o.a.createElement(o.a.Fragment,null,o.a.createElement(b.ToggleControl,{label:Object(i.__)("Open Links in New Window","ultimate-addons-for-gutenberg"),checked:Ie,onChange:function(){return m({socialTarget:!Ie})}}),o.a.createElement(b.PanelBody,{title:Object(i.__)("Twitter","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("Icon","ultimate-addons-for-gutenberg")),o.a.createElement(f.a,{icons:wp.UAGBSvgIcons,renderFunc:l.a,theme:"default",value:we,onChange:function(e){return m({twitterIcon:e})},isMulti:!1,noSelectedPlaceholder:Object(i.__)("Select Icon","ultimate-addons-for-gutenberg")}),o.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("URL","ultimate-addons-for-gutenberg")),o.a.createElement(b.TextControl,{value:Te,onChange:function(e){return m({twitterLink:e})},placeholder:Object(i.__)("Enter Twitter URL","ultimate-addons-for-gutenberg")})),o.a.createElement(b.PanelBody,{title:Object(i.__)("Facebook","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("Icon","ultimate-addons-for-gutenberg")),o.a.createElement(f.a,{icons:wp.UAGBSvgIcons,renderFunc:l.a,theme:"default",value:je,onChange:function(e){return m({fbIcon:e})},isMulti:!1,noSelectedPlaceholder:Object(i.__)("Select Icon","ultimate-addons-for-gutenberg")}),o.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("URL","ultimate-addons-for-gutenberg")),o.a.createElement(b.TextControl,{value:Fe,onChange:function(e){return m({fbLink:e})},placeholder:Object(i.__)("Enter Facebook URL","ultimate-addons-for-gutenberg")})),o.a.createElement(b.PanelBody,{title:Object(i.__)("LinkedIn","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("Icon","ultimate-addons-for-gutenberg")),o.a.createElement(f.a,{icons:wp.UAGBSvgIcons,renderFunc:l.a,noSelectedPlaceholder:Object(i.__)("Select Icon","ultimate-addons-for-gutenberg"),theme:"default",value:Oe,onChange:function(e){return m({linkedinIcon:e})},isMulti:!1}),o.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("URL","ultimate-addons-for-gutenberg")),o.a.createElement(b.TextControl,{value:Ce,onChange:function(e){return m({linkedinLink:e})},placeholder:Object(i.__)("Enter LinkedIn URL","ultimate-addons-for-gutenberg")})),o.a.createElement(b.PanelBody,{title:Object(i.__)("Pinterest","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("Icon","ultimate-addons-for-gutenberg")),o.a.createElement(f.a,{icons:wp.UAGBSvgIcons,renderFunc:l.a,noSelectedPlaceholder:Object(i.__)("Select Icon","ultimate-addons-for-gutenberg"),theme:"default",value:Ee,onChange:function(e){return m({pinIcon:e})},isMulti:!1}),o.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("URL","ultimate-addons-for-gutenberg")),o.a.createElement(b.TextControl,{value:xe,onChange:function(e){return m({pinLink:e})},placeholder:Object(i.__)("Enter Pinterest URL","ultimate-addons-for-gutenberg")})))),o.a.createElement(b.PanelBody,{title:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(b.SelectControl,{label:Object(i.__)("Title Tag","ultimate-addons-for-gutenberg"),value:_,onChange:function(e){return m({tag:e})},options:[{value:"h1",label:Object(i.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(i.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(i.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(i.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(i.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(i.__)("H6","ultimate-addons-for-gutenberg")}]}),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(i.__)("Title","ultimate-addons-for-gutenberg")),o.a.createElement(a.Suspense,{fallback:Object(r.a)()},o.a.createElement(c.a,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:p,setAttributes:m,loadGoogleFonts:{value:le,label:"titleLoadGoogleFonts"},fontFamily:{value:j,label:"titleFontFamily"},fontWeight:{value:O,label:"titleFontWeight"},fontSubset:{value:E,label:"titleFontSubset"},fontSizeType:{value:T,label:"titleFontSizeType"},fontSize:{value:F,label:"titleFontSize"},fontSizeMobile:{value:C,label:"titleFontSizeMobile"},fontSizeTablet:{value:x,label:"titleFontSizeTablet"},lineHeightType:{value:k,label:"titleLineHeightType"},lineHeight:{value:L,label:"titleLineHeight"},lineHeightMobile:{value:z,label:"titleLineHeightMobile"},lineHeightTablet:{value:I,label:"titleLineHeightTablet"}})),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(i.__)("Prefix","ultimate-addons-for-gutenberg")),o.a.createElement(a.Suspense,{fallback:Object(r.a)()},o.a.createElement(c.a,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:p,setAttributes:m,loadGoogleFonts:{value:re,label:"prefixLoadGoogleFonts"},fontFamily:{value:H,label:"prefixFontFamily"},fontWeight:{value:P,label:"prefixFontWeight"},fontSubset:{value:M,label:"prefixFontSubset"},fontSizeType:{value:R,label:"prefixFontSizeType"},fontSize:{value:B,label:"prefixFontSize"},fontSizeMobile:{value:N,label:"prefixFontSizeMobile"},fontSizeTablet:{value:A,label:"prefixFontSizeTablet"},lineHeightType:{value:W,label:"prefixLineHeightType"},lineHeight:{value:U,label:"prefixLineHeight"},lineHeightMobile:{value:G,label:"prefixLineHeightMobile"},lineHeightTablet:{value:D,label:"prefixLineHeightTablet"}})),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(i.__)("Description","ultimate-addons-for-gutenberg")),o.a.createElement(a.Suspense,{fallback:Object(r.a)()},o.a.createElement(c.a,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:p,setAttributes:m,loadGoogleFonts:{value:ce,label:"descLoadGoogleFonts"},fontFamily:{value:q,label:"descFontFamily"},fontWeight:{value:$,label:"descFontWeight"},fontSubset:{value:J,label:"descFontSubset"},fontSizeType:{value:V,label:"descFontSizeType"},fontSize:{value:K,label:"descFontSize"},fontSizeMobile:{value:X,label:"descFontSizeMobile"},fontSizeTablet:{value:Q,label:"descFontSizeTablet"},lineHeightType:{value:Y,label:"descLineHeightType"},lineHeight:{value:Z,label:"descLineHeight"},lineHeightMobile:{value:ee,label:"descLineHeightMobile"},lineHeightTablet:{value:te,label:"descLineHeightTablet"}})),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(i.__)("Social Icons","ultimate-addons-for-gutenberg")),o.a.createElement(a.Suspense,{fallback:Object(r.a)()},o.a.createElement(c.a,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:p,setAttributes:m,fontSizeType:{value:ae,label:"socialFontSizeType"},fontSize:{value:ne,label:"socialFontSize"},fontSizeMobile:{value:oe,label:"socialFontSizeMobile"},fontSizeTablet:{value:ie,label:"socialFontSizeTablet"},disableFontFamily:!0,disableLineHeight:!0}))),o.a.createElement(g.PanelColorSettings,{title:Object(i.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!1,colorSettings:[{value:y,onChange:function(e){return m({titleColor:e})},label:Object(i.__)("Title Color","ultimate-addons-for-gutenberg")},{value:S,onChange:function(e){return m({prefixColor:e})},label:Object(i.__)("Designation Color","ultimate-addons-for-gutenberg")},{value:w,onChange:function(e){return m({descColor:e})},label:Object(i.__)("Description Color","ultimate-addons-for-gutenberg")},{value:ke,onChange:function(e){return m({socialColor:e})},label:Object(i.__)("Social Icon Color","ultimate-addons-for-gutenberg")},{value:Le,onChange:function(e){return m({socialHoverColor:e})},label:Object(i.__)("Social Icon Hover Color","ultimate-addons-for-gutenberg")}]}),o.a.createElement(b.PanelBody,{title:Object(i.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(b.RangeControl,{label:Object(i.__)("Title Bottom Spacing","ultimate-addons-for-gutenberg"),value:de,onChange:function(e){return m({titleSpace:e})},min:0,max:50,allowReset:!0,initialPosition:0}),o.a.createElement(b.RangeControl,{label:Object(i.__)("Designation Bottom Spacing","ultimate-addons-for-gutenberg"),value:pe,onChange:function(e){return m({prefixSpace:e})},min:0,max:50,allowReset:!0,initialPosition:0}),o.a.createElement(b.RangeControl,{label:Object(i.__)("Description Bottom Spacing","ultimate-addons-for-gutenberg"),value:me,onChange:function(e){return m({descSpace:e})},min:0,max:50,allowReset:!0}),o.a.createElement(b.RangeControl,{label:Object(i.__)("Inter Social Icon Spacing","ultimate-addons-for-gutenberg"),value:ze,onChange:function(e){return m({socialSpace:e})},min:0,max:50,allowReset:!0}),se&&o.a.createElement(o.a.Fragment,null,o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(i.__)("Image Margin (px)","ultimate-addons-for-gutenberg")),"above"!=he&&o.a.createElement(b.RangeControl,{label:wp.UAGBBlockIcons.left_margin,className:"uagb-margin-control",value:ve,onChange:function(e){return m({imgLeftMargin:e})},min:0,max:50,allowReset:!0}),"above"!=he&&o.a.createElement(b.RangeControl,{label:wp.UAGBBlockIcons.right_margin,className:"uagb-margin-control",value:_e,onChange:function(e){return m({imgRightMargin:e})},min:0,max:50,allowReset:!0}),o.a.createElement(b.RangeControl,{label:wp.UAGBBlockIcons.top_margin,className:"uagb-margin-control",value:ye,onChange:function(e){return m({imgTopMargin:e})},min:0,max:50,allowReset:!0}),o.a.createElement(b.RangeControl,{label:wp.UAGBBlockIcons.bottom_margin,className:"uagb-margin-control",value:Se,onChange:function(e){return m({imgBottomMargin:e})},min:0,max:50,allowReset:!0})))),o.a.createElement(a.Suspense,{fallback:Object(r.a)()},t,n,u))};t.default=o.a.memo(d)}}]);