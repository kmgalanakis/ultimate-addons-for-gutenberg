(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[80],{20:function(e,t,a){"use strict";var n=a(6),o=a(22),l=a.n(o),i=a(21),r=a.n(i);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){g(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}if(void 0===m)var m=[];var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(i,e);var t,a,n,o,l=(n=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(n);if(o){var a=h(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return f(this,e)});function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=l.call(this,e)).state={status:void 0},t.handleLoading=function(){t.setState({status:"loading"})},t.addFont=function(e){m.includes(e)||m.push(e)},t.handleActive=function(){t.setState({status:"active"})},t.handleInactive=function(){t.setState({status:"inactive"})},t.loadFonts=function(){m.includes(t.props.config.google.families[0])||(r.a.load(s(s({},t.props.config),{},{loading:t.handleLoading,active:t.handleActive,inactive:t.handleInactive})),t.addFont(t.props.config.google.families[0]))},t}return t=i,(a=[{key:"componentDidMount",value:function(){this.loadFonts()}},{key:"componentDidUpdate",value:function(e,t){var a=this.props,n=a.onStatus,o=a.config;t.status!==this.state.status&&n(this.state.status),e.config!==o&&this.loadFonts()}},{key:"render",value:function(){return this.props.children||null}}])&&b(t.prototype,a),i}(n.Component);p.propTypes={config:l.a.object.isRequired,children:l.a.element,onStatus:l.a.func.isRequired},p.defaultProps={onStatus:function(){}},t.a=p},21:function(e,t,a){var n;!function(){function o(e,t,a){return e.call.apply(e.bind,arguments)}function l(e,t,a){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,n),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function i(e,t,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function c(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var u=!!window.FontFace;function s(e,t,a,n){if(t=e.c.createElement(t),a)for(var o in a)a.hasOwnProperty(o)&&("style"==o?t.style.cssText=a[o]:t.setAttribute(o,a[o]));return n&&t.appendChild(e.c.createTextNode(n)),t}function g(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e,t,a){t=t||[],a=a||[];for(var n=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var l=!1,i=0;i<n.length;i+=1)if(t[o]===n[i]){l=!0;break}l||n.push(t[o])}for(t=[],o=0;o<n.length;o+=1){for(l=!1,i=0;i<a.length;i+=1)if(n[o]===a[i]){l=!0;break}l||t.push(n[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function f(e,t){for(var a=e.className.split(/\s+/),n=0,o=a.length;n<o;n++)if(a[n]==t)return!0;return!1}function h(e,t,a){function n(){r&&o&&l&&(r(i),r=null)}t=s(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,l=!0,i=null,r=a||null;u?(t.onload=function(){o=!0,n()},t.onerror=function(){o=!0,i=Error("Stylesheet failed to load"),n()}):setTimeout((function(){o=!0,n()}),0),g(e,"head",t)}function m(e,t,a,n){var o=e.c.getElementsByTagName("head")[0];if(o){var l=s(e,"script",{src:t}),i=!1;return l.onload=l.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,a&&a(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&o.removeChild(l))},o.appendChild(l),setTimeout((function(){i||(i=!0,a&&a(Error("Script load timeout")))}),n||5e3),l}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,y(e)}}function _(e,t){e.c=t,y(e)}function y(e){0==e.a&&e.c&&(e.c(),e.c=null)}function C(e){this.a=e||"-"}function O(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function R(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var n=e[a].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?t.push("'"+n+"'"):t.push(n)}return t.join(",")}function j(e){return e.a+e.f}function S(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function F(e){var t=4,a="n",n=null;return e&&((n=e.match(/(normal|oblique|italic)/i))&&n[1]&&(a=n[1].substr(0,1).toLowerCase()),(n=e.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?t=7:/[1-9]00/.test(n[1])&&(t=parseInt(n[1].substr(0,1),10)))),a+t}function w(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new C("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function E(e){if(e.g){var t=f(e.f,e.a.c("wf","active")),a=[],n=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),d(e.f,a,n)}T(e,"inactive")}function T(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,j(a)):e.h[t]())}function H(){this.c={}}function P(e,t){this.c=e,this.f=t,this.a=s(this.c,"span",{"aria-hidden":"true"},this.f)}function z(e){g(e.c,"body",e.a)}function k(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+R(e.c)+";font-style:"+S(e)+";font-weight:"+e.f+"00;"}function L(e,t,a,n,o,l){this.g=e,this.j=t,this.a=n,this.c=a,this.f=o||3e3,this.h=l||void 0}function x(e,t,a,n,o,l,i){this.v=e,this.B=t,this.c=a,this.a=n,this.s=i||"BESbswy",this.f={},this.w=o||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new P(this.c,this.s),this.h=new P(this.c,this.s),this.j=new P(this.c,this.s),this.m=new P(this.c,this.s),e=k(e=new O(this.a.c+",serif",j(this.a))),this.g.a.style.cssText=e,e=k(e=new O(this.a.c+",sans-serif",j(this.a))),this.h.a.style.cssText=e,e=k(e=new O("serif",j(this.a))),this.j.a.style.cssText=e,e=k(e=new O("sans-serif",j(this.a))),this.m.a.style.cssText=e,z(this.g),z(this.h),z(this.j),z(this.m)}C.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},L.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),n=new Promise((function(n,o){!function l(){r()-a>=t.f?o():e.fonts.load(function(e){return S(e)+" "+e.f+"00 300px "+R(e.c)}(t.a),t.h).then((function(e){1<=e.length?n():setTimeout(l,25)}),(function(){o()}))}()})),o=null,l=new Promise((function(e,a){o=setTimeout(a,t.f)}));Promise.race([l,n]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var B={D:"serif",C:"sans-serif"},A=null;function N(){if(null===A){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);A=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return A}function M(e,t,a){for(var n in B)if(B.hasOwnProperty(n)&&t===e.f[B[n]]&&a===e.f[B[n]])return!0;return!1}function I(e,t){setTimeout(i((function(){b(this.g.a),b(this.h.a),b(this.j.a),b(this.m.a),t(this.a)}),e),0)}function Y(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}x.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,n=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(a=n===t.f.serif&&o===t.f["sans-serif"])||(a=N()&&M(t,n,o)),a?r()-t.A>=t.w?N()&&M(t,n,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?I(t,t.v):I(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):I(t,t.v)}(this)};var D=null;function W(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&d(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),T(e,"active")):E(e.a))}function G(e){this.j=e,this.a=new H,this.h=0,this.f=this.g=!0}function q(e,t,a,n,o){var l=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,r=n||{};if(0===a.length&&l)E(t.a);else{t.f+=a.length,l&&(t.j=l);var c,u=[];for(c=0;c<a.length;c++){var s=a[c],g=r[s.c],b=t.a,f=s;if(b.g&&d(b.f,[b.a.c("wf",f.c,j(f).toString(),"loading")]),T(b,"fontloading",f),b=null,null===D)if(window.FontFace){f=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var h=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);D=f?42<parseInt(f[1],10):!h}else D=!1;b=D?new L(i(t.g,t),i(t.h,t),t.c,s,t.s,g):new x(i(t.g,t),i(t.h,t),t.c,s,t.s,e,g),u.push(b)}for(c=0;c<u.length;c++)u[c].start()}}),0)}function $(e,t){this.c=e,this.a=t}function U(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||Q,this.a=[],this.f=[],this.g=t||""}Y.prototype.g=function(e){var t=this.a;t.g&&d(t.f,[t.a.c("wf",e.c,j(e).toString(),"active")],[t.a.c("wf",e.c,j(e).toString(),"loading"),t.a.c("wf",e.c,j(e).toString(),"inactive")]),T(t,"fontactive",e),this.m=!0,W(this)},Y.prototype.h=function(e){var t=this.a;if(t.g){var a=f(t.f,t.a.c("wf",e.c,j(e).toString(),"active")),n=[],o=[t.a.c("wf",e.c,j(e).toString(),"loading")];a||n.push(t.a.c("wf",e.c,j(e).toString(),"inactive")),d(t.f,n,o)}T(t,"fontinactive",e),W(this)},G.prototype.load=function(e){this.c=new c(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var n=[],o=a.timeout;!function(e){e.g&&d(e.f,[e.a.c("wf","loading")]),T(e,"loading")}(t),n=function(e,t,a){var n,o=[];for(n in t)if(t.hasOwnProperty(n)){var l=e.c[n];l&&o.push(l(t[n],a))}return o}(e.a,a,e.c);var l=new Y(e.c,t,o);for(e.h=n.length,t=0,a=n.length;t<a;t++)n[t].load((function(t,a,n){q(e,l,t,a,n)}))}(this,new w(this.c,e),e)},$.prototype.load=function(e){var t=this,a=t.a.projectId,n=t.a.version;if(a){var o=t.c.o;m(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(n?"?v="+n:""),(function(n){n?e([]):(o["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(o["__mti_fntLst"+a]){var n,l=o["__mti_fntLst"+a](),i=[];if(l)for(var r=0;r<l.length;r++){var c=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(n=l[r].fontStyle+l[r].fontWeight,i.push(new O(c,n))):i.push(new O(c))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},U.prototype.load=function(e){var t,a,n=this.a.urls||[],o=this.a.families||[],l=this.a.testStrings||{},i=new p;for(t=0,a=n.length;t<a;t++)h(this.c,n[t],v(i));var r=[];for(t=0,a=o.length;t<a;t++)if((n=o[t].split(":"))[1])for(var c=n[1].split(","),u=0;u<c.length;u+=1)r.push(new O(n[0],c[u]));else r.push(new O(n[0]));_(i,(function(){e(r,l)}))};var Q="https://fonts.googleapis.com/css";function V(e){this.f=e,this.a=[],this.c={}}var K={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},X={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function ne(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,a=this.c,n=new J(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var a=t.length,n=0;n<a;n++){var o=t[n].split(":");3==o.length&&e.f.push(o.pop());var l="";2==o.length&&""!=o[1]&&(l=":"),e.a.push(o.join(l))}}(n,o);var l=new V(o);!function(e){for(var t=e.f.length,a=0;a<t;a++){var n=e.f[a].split(":"),o=n[0].replace(/\+/g," "),l=["n4"];if(2<=n.length){var i;if(i=[],r=n[1])for(var r,c=(r=r.split(",")).length,u=0;u<c;u++){var s;if((s=r[u]).match(/^[\w-]+$/))if(null==(g=ee.exec(s.toLowerCase())))s="";else{if(s=null==(s=g[2])||""==s?"n":Z[s],null==(g=g[1])||""==g)g="4";else var g=X[g]||(isNaN(g)?"4":g.substr(0,1));s=[s,g].join("")}else s="";s&&i.push(s)}0<i.length&&(l=i),3==n.length&&(i=[],0<(n=(n=n[2])?n.split(","):i).length&&(n=K[n[0]])&&(e.c[o]=n))}for(e.c[o]||(n=K[o])&&(e.c[o]=n),n=0;n<l.length;n+=1)e.a.push(new O(o,l[n]))}}(l),h(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],n=0;n<t;n++)a.push(e.a[n].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(n),v(t)),_(t,(function(){e(l.a,l.c,ae)}))},ne.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var n=[],o=0;o<t.length;o+=2)for(var l=t[o],i=t[o+1],r=0;r<i.length;r++)n.push(new O(l,i[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(n)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,a=this.c.o,n=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var o=0,l=a.fonts.length;o<l;++o){var i=a.fonts[o];n.a.push(new O(i.name,F("font-weight:"+i.weight+";font-style:"+i.style)))}e(n.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var le=new G(window);le.a.c.custom=function(e,t){return new U(t,e)},le.a.c.fontdeck=function(e,t){return new oe(t,e)},le.a.c.monotype=function(e,t){return new $(t,e)},le.a.c.typekit=function(e,t){return new ne(t,e)},le.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(le.load,le)};void 0===(n=function(){return ie}.call(t,a,t,e))||(e.exports=n)}()},484:function(e,t,a){"use strict";a.r(t);var n=a(27),o=a.n(n),l=a(17),i=a(25),r=a(20),c=a(2),u=a(9),s=a(5),g=a(4);t.default=React.memo((function(e){var t,a,n,b,d,f=e=e.parentProps,h=f.attributes,m=f.categoriesList,p=f.setAttributes,v=f.taxonomyList,_=h.headingColor,y=h.subHeadingColor,C=h.backgroundColor,O=h.separatorColor,R=h.separatorFillColor,j=h.separatorBg,S=h.separatorBorder,F=h.borderFocus,w=h.headingTag,E=h.headFontSizeType,T=h.headFontSize,H=h.headFontSizeTablet,P=h.headFontSizeMobile,z=h.headFontFamily,k=h.headFontWeight,L=h.headFontSubset,x=h.headLineHeightType,B=h.headLineHeight,A=h.headLineHeightTablet,N=h.headLineHeightMobile,M=h.headLoadGoogleFonts,I=h.timelinAlignment,Y=h.arrowlinAlignment,D=h.subHeadFontSizeType,W=h.subHeadFontSize,G=h.subHeadFontSizeTablet,q=h.subHeadFontSizeMobile,$=h.subHeadFontFamily,U=h.subHeadFontWeight,J=h.subHeadFontSubset,Q=h.subHeadLineHeightType,V=h.subHeadLineHeight,K=h.subHeadLineHeightTablet,X=h.subHeadLineHeightMobile,Z=h.subHeadLoadGoogleFonts,ee=h.verticalSpace,te=h.horizontalSpace,ae=h.headSpace,ne=h.separatorwidth,oe=h.borderwidth,le=h.connectorBgsize,ie=h.authorSpace,re=h.contentSpace,ce=h.authorColor,ue=h.authorFontSizeType,se=h.authorFontSize,ge=h.authorFontSizeTablet,be=h.authorFontSizeMobile,de=h.authorFontFamily,fe=h.authorFontWeight,he=h.authorFontSubset,me=h.authorLineHeightType,pe=h.authorLineHeight,ve=h.authorLineHeightTablet,_e=h.authorLineHeightMobile,ye=h.authorLoadGoogleFonts,Ce=h.dateBottomspace,Oe=h.displayPostDate,Re=h.displayPostExcerpt,je=h.displayPostAuthor,Se=h.displayPostImage,Fe=h.displayPostLink,we=h.align,Ee=h.order,Te=h.orderBy,He=h.categories,Pe=h.postsToShow,ze=h.imageSize,ke=h.readMoreText,Le=h.ctaBackground,xe=h.icon,Be=h.iconColor,Ae=h.dateColor,Ne=h.ctaColor,Me=h.dateFontsizeType,Ie=h.dateFontsize,Ye=h.dateFontsizeTablet,De=h.dateFontsizeMobile,We=h.dateFontFamily,Ge=h.dateFontWeight,qe=h.dateFontSubset,$e=h.dateLineHeightType,Ue=h.dateLineHeight,Je=h.dateLineHeightTablet,Qe=h.dateLineHeightMobile,Ve=h.dateLoadGoogleFonts,Ke=h.ctaFontSizeType,Xe=h.ctaFontSize,Ze=h.ctaFontSizeTablet,et=h.ctaFontSizeMobile,tt=h.ctaFontFamily,at=h.ctaFontWeight,nt=h.ctaFontSubset,ot=h.ctaLineHeightType,lt=h.ctaLineHeight,it=h.ctaLineHeightTablet,rt=h.ctaLineHeightMobile,ct=h.ctaLoadGoogleFonts,ut=h.iconSize,st=h.exerptLength,gt=h.borderRadius,bt=h.bgPadding,dt=h.contentPadding,ft=h.iconFocus,ht=h.iconBgFocus,mt=h.stack,pt=h.linkTarget,vt=h.postType,_t=h.taxonomyType,yt=h.dateFormat,Ct=h.excludeCurrentPost,Ot=[],Rt=[{value:"",label:Object(c.__)("All","ultimate-addons-for-gutenberg")}];if(""!=v&&Object.keys(v).map((function(e,t){return Ot.push({value:v[e].name,label:v[e].label})})),""!=m&&Object.keys(m).map((function(e,t){return Rt.push({value:m[e].id,label:m[e].name})})),1==M){var jt={google:{families:[z+(k?":"+k:"")]}};t=React.createElement(r.a,{config:jt})}if(1==Z){var St={google:{families:[$+(U?":"+U:"")]}};a=React.createElement(r.a,{config:St})}if(1==Ve){var Ft={google:{families:[We+(Ge?":"+Ge:"")]}};n=React.createElement(r.a,{config:Ft})}if(1==ye){var wt={google:{families:[de+(fe?":"+fe:"")]}};b=React.createElement(r.a,{config:wt})}if(1==ct){var Et={google:{families:[tt+(at?":"+at:"")]}};d=React.createElement(r.a,{config:Et})}var Tt,Ht,Pt=new Date,zt={icons:wp.UAGBSvgIcons,value:xe,onChange:function(t){e.setAttributes({icon:t})},isMulti:!1,renderFunc:l.a,noSelectedPlaceholder:Object(c.__)("Select Icon","ultimate-addons-for-gutenberg")};return Object(c.__)("px","ultimate-addons-for-gutenberg"),Object(c.__)("em","ultimate-addons-for-gutenberg"),React.createElement(React.Fragment,null,React.createElement(g.BlockControls,null,React.createElement(g.BlockAlignmentToolbar,{value:we,onChange:function(e){p({align:e})},controls:["center","left","right"]})),React.createElement(g.InspectorControls,null,React.createElement(s.PanelBody,{title:Object(c.__)("Query","ultimate-addons-for-gutenberg"),initialOpen:!0},React.createElement(s.SelectControl,{label:Object(c.__)("Post Type","ultimate-addons-for-gutenberg"),value:vt,onChange:function(t){return function(t){var a=e.setAttributes;a({postType:t}),a({categories:""})}(t)},options:uagb_blocks_info.post_types}),React.createElement("hr",{className:"uagb-editor__separator"}),""!=v&&React.createElement(s.SelectControl,{label:Object(c.__)("Taxonomy","ultimate-addons-for-gutenberg"),value:_t,onChange:function(t){return function(t){var a=e.setAttributes;a({taxonomyType:t}),a({categories:""})}(t)},options:Ot}),""!=m&&React.createElement(React.Fragment,null,React.createElement(s.SelectControl,{label:v[_t].label,value:He,onChange:function(e){return p({categories:e})},options:Rt}),React.createElement("hr",{className:"uagb-editor__separator"})),React.createElement(s.ToggleControl,{label:Object(c.__)("Exclude Current Post","ultimate-addons-for-gutenberg"),checked:Ct,onChange:function(e){return p({excludeCurrentPost:!Ct})}}),React.createElement(s.QueryControls,{order:Ee,orderBy:Te,numberOfItems:Pe,onNumberOfItemsChange:function(e){return p({postsToShow:e})}}),React.createElement(s.SelectControl,{label:Object(c.__)("Order By","ultimate-addons-for-gutenberg"),value:Te,onChange:function(e){return p({orderBy:e})},options:[{value:"date",label:Object(c.__)("Date","ultimate-addons-for-gutenberg")},{value:"title",label:Object(c.__)("Title","ultimate-addons-for-gutenberg")},{value:"rand",label:Object(c.__)("Random","ultimate-addons-for-gutenberg")},{value:"menu_order",label:Object(c.__)("Menu Order","ultimate-addons-for-gutenberg")}]}),React.createElement(s.SelectControl,{label:Object(c.__)("Order","ultimate-addons-for-gutenberg"),value:Ee,onChange:function(e){return p({order:e})},options:[{value:"desc",label:Object(c.__)("Descending","ultimate-addons-for-gutenberg")},{value:"asc",label:Object(c.__)("Ascending","ultimate-addons-for-gutenberg")}]})),React.createElement(s.PanelBody,{title:Object(c.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!1},React.createElement(s.SelectControl,{label:Object(c.__)("Orientation","ultimate-addons-for-gutenberg"),value:I,onChange:function(e){return p({timelinAlignment:e})},options:[{value:"left",label:Object(c.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(c.__)("Right","ultimate-addons-for-gutenberg")},{value:"center",label:Object(c.__)("Center","ultimate-addons-for-gutenberg")}]}),React.createElement(s.SelectControl,{label:Object(c.__)("Arrow Alignment","ultimate-addons-for-gutenberg"),value:Y,onChange:function(e){return p({arrowlinAlignment:e})},options:[{value:"top",label:Object(c.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(c.__)("Bottom","ultimate-addons-for-gutenberg")},{value:"center",label:Object(c.__)("Center","ultimate-addons-for-gutenberg")}]}),React.createElement(s.SelectControl,{label:Object(c.__)("Stack on","ultimate-addons-for-gutenberg"),value:mt,options:[{value:"none",label:Object(c.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(c.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(c.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(c.__)("Note: Choose on what breakpoint the Post Timeline will stack.","ultimate-addons-for-gutenberg"),onChange:function(e){return p({stack:e})}})),React.createElement(s.PanelBody,{title:Object(c.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},React.createElement(s.ToggleControl,{label:Object(c.__)("Display Featured Image","ultimate-addons-for-gutenberg"),checked:Se,onChange:function(e){return p({displayPostImage:!Se})}}),Se&&React.createElement(s.SelectControl,{label:Object(c.__)("Featured Image Style","ultimate-addons-for-gutenberg"),options:uagb_blocks_info.image_sizes,value:ze,onChange:function(t){return e.setAttributes({imageSize:t})}})),React.createElement(s.PanelBody,{title:Object(c.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},React.createElement(s.ToggleControl,{label:Object(c.__)("Display Post Author","ultimate-addons-for-gutenberg"),checked:je,onChange:function(e){return p({displayPostAuthor:!je})}}),React.createElement(s.ToggleControl,{label:Object(c.__)("Display Post Date","ultimate-addons-for-gutenberg"),checked:Oe,onChange:function(e){return p({displayPostDate:!Oe})}}),Oe&&React.createElement(s.SelectControl,{label:Object(c.__)("Date Format","ultimate-addons-for-gutenberg"),value:yt,onChange:function(e){return p({dateFormat:e})},options:[{value:"M j, Y",label:Object(u.dateI18n)("M j, Y",Pt)},{value:"F j, Y",label:Object(u.dateI18n)("F j, Y",Pt)},{value:"m/d/Y",label:Object(u.dateI18n)("m/d/Y",Pt)},{value:"m-d-Y",label:Object(u.dateI18n)("m-d-Y",Pt)},{value:"m.d.Y",label:Object(u.dateI18n)("m.d.Y",Pt)},{value:"d M Y",label:Object(u.dateI18n)("d M Y",Pt)},{value:"d F Y",label:Object(u.dateI18n)("d F Y",Pt)},{value:"d-m-Y",label:Object(u.dateI18n)("d-m-Y",Pt)},{value:"d.m.Y",label:Object(u.dateI18n)("d.m.Y",Pt)},{value:"d/m/Y",label:Object(u.dateI18n)("d/m/Y",Pt)},{value:"Y-m-d",label:Object(u.dateI18n)("Y-m-d",Pt)},{value:"Y.m.d",label:Object(u.dateI18n)("Y.m.d",Pt)},{value:"Y/m/d",label:Object(u.dateI18n)("Y/m/d",Pt)},{value:"M, Y",label:Object(u.dateI18n)("M, Y",Pt)},{value:"M Y",label:Object(u.dateI18n)("M Y",Pt)},{value:"F, Y",label:Object(u.dateI18n)("F, Y",Pt)},{value:"F Y",label:Object(u.dateI18n)("F Y",Pt)}]}),React.createElement(s.ToggleControl,{label:Object(c.__)("Display Post Excerpt","ultimate-addons-for-gutenberg"),checked:Re,onChange:function(e){return p({displayPostExcerpt:!Re})}}),Re&&React.createElement(s.RangeControl,{label:Object(c.__)("Excerpt Length","ultimate-addons-for-gutenberg"),value:st,onChange:function(e){return p({exerptLength:e})},min:1,max:50,allowReset:!0}),React.createElement(s.ToggleControl,{label:Object(c.__)("Display Continue Reading Link","ultimate-addons-for-gutenberg"),checked:Fe,onChange:function(e){return p({displayPostLink:!Fe})}}),Fe&&React.createElement(React.Fragment,null,React.createElement(s.TextControl,{label:Object(c.__)("CTA Text","ultimate-addons-for-gutenberg"),value:ke,onChange:function(e){return p({readMoreText:e})}})),React.createElement(s.ToggleControl,{label:Object(c.__)("Open links in New Tab","ultimate-addons-for-gutenberg"),checked:pt,onChange:function(e){return p({linkTarget:!pt})}})),React.createElement(s.PanelBody,{title:Object(c.__)("Timeline Item","ultimate-addons-for-gutenberg"),initialOpen:!1},React.createElement("h2",null,Object(c.__)("Heading","ultimate-addons-for-gutenberg")),React.createElement(s.SelectControl,{label:Object(c.__)("Heading Tag","ultimate-addons-for-gutenberg"),value:w,onChange:function(e){return p({headingTag:e})},options:[{value:"h1",label:Object(c.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(c.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(c.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(c.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(c.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(c.__)("H6","ultimate-addons-for-gutenberg")},{value:"p",label:Object(c.__)("P","ultimate-addons-for-gutenberg")},{value:"span",label:Object(c.__)("SPAN","ultimate-addons-for-gutenberg")}]}),React.createElement(i.a,{label:Object(c.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:p,loadGoogleFonts:{value:M,label:"headLoadGoogleFonts"},fontFamily:{value:z,label:"headFontFamily"},fontWeight:{value:k,label:"headFontWeight"},fontSubset:{value:L,label:"headFontSubset"},fontSizeType:{value:E,label:"headFontSizeType"},fontSize:{value:T,label:"headFontSize"},fontSizeMobile:{value:P,label:"headFontSizeMobile"},fontSizeTablet:{value:H,label:"headFontSizeTablet"},lineHeightType:{value:x,label:"headLineHeightType"},lineHeight:{value:B,label:"headLineHeight"},lineHeightMobile:{value:N,label:"headLineHeightMobile"},lineHeightTablet:{value:A,label:"headLineHeightTablet"}}),Re&&React.createElement(React.Fragment,null,React.createElement("hr",{className:"uagb-editor__separator"}),React.createElement("h2",null,Object(c.__)("Content","ultimate-addons-for-gutenberg")),React.createElement(i.a,{label:Object(c.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:p,loadGoogleFonts:{value:Z,label:"subHeadLoadGoogleFonts"},fontFamily:{value:$,label:"subHeadFontFamily"},fontWeight:{value:U,label:"subHeadFontWeight"},fontSubset:{value:J,label:"subHeadFontSubset"},fontSizeType:{value:D,label:"subHeadFontSizeType"},fontSize:{value:W,label:"subHeadFontSize"},fontSizeMobile:{value:q,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:G,label:"subHeadFontSizeTablet"},lineHeightType:{value:Q,label:"subHeadLineHeightType"},lineHeight:{value:V,label:"subHeadLineHeight"},lineHeightMobile:{value:X,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:K,label:"subHeadLineHeightTablet"}})),Oe&&React.createElement(React.Fragment,null,React.createElement("hr",{className:"uagb-editor__separator"}),React.createElement("h2",null,Object(c.__)("Date","ultimate-addons-for-gutenberg")),React.createElement(i.a,{label:Object(c.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:p,loadGoogleFonts:{value:Ve,label:"dateLoadGoogleFonts"},fontFamily:{value:We,label:"dateFontFamily"},fontWeight:{value:Ge,label:"dateFontWeight"},fontSubset:{value:qe,label:"dateFontSubset"},fontSizeType:{value:Me,label:"dateFontsizeType"},fontSize:{value:Ie,label:"dateFontsize"},fontSizeMobile:{value:De,label:"dateFontsizeMobile"},fontSizeTablet:{value:Ye,label:"dateFontsizeTablet"},lineHeightType:{value:$e,label:"dateLineHeightType"},lineHeight:{value:Ue,label:"dateLineHeight"},lineHeightMobile:{value:Qe,label:"dateLineHeightMobile"},lineHeightTablet:{value:Je,label:"dateLineHeightTablet"}})),je&&React.createElement(React.Fragment,null,React.createElement("hr",{className:"uagb-editor__separator"}),React.createElement("h2",null,Object(c.__)("Author","ultimate-addons-for-gutenberg")),React.createElement(i.a,{label:Object(c.__)("Typography","ultimate-addons-for-gutenberg"),attributes:h,setAttributes:p,loadGoogleFonts:{value:ye,label:"authorLoadGoogleFonts"},fontFamily:{value:de,label:"authorFontFamily"},fontWeight:{value:fe,label:"authorFontWeight"},fontSubset:{value:he,label:"authorFontSubset"},fontSizeType:{value:ue,label:"authorFontSizeType"},fontSize:{value:se,label:"authorFontSize"},fontSizeMobile:{value:be,label:"authorFontSizeMobile"},fontSizeTablet:{value:ge,label:"authorFontSizeTablet"},lineHeightType:{value:me,label:"authorLineHeightType"},lineHeight:{value:pe,label:"authorLineHeight"},lineHeightMobile:{value:_e,label:"authorLineHeightMobile"},lineHeightTablet:{value:ve,label:"authorLineHeightTablet"}})),Fe&&React.createElement(React.Fragment,null,React.createElement("hr",{className:"uagb-editor__separator"}),React.createElement("h2",null,Object(c.__)("CTA","ultimate-addons-for-gutenberg")),React.createElement(i.a,{label:Object(c.__)("Typography","ultimate-addons-for-gutenberg"),attributes:h,setAttributes:p,loadGoogleFonts:{value:ct,label:"ctaLoadGoogleFonts"},fontFamily:{value:tt,label:"ctaFontFamily"},fontWeight:{value:at,label:"ctaFontWeight"},fontSubset:{value:nt,label:"ctaFontSubset"},fontSizeType:{value:Ke,label:"ctaFontSizeType"},fontSize:{value:Xe,label:"ctaFontSize"},fontSizeMobile:{value:et,label:"ctaFontSizeMobile"},fontSizeTablet:{value:Ze,label:"ctaFontSizeTablet"},lineHeightType:{value:ot,label:"ctaLineHeightType"},lineHeight:{value:lt,label:"ctaLineHeight"},lineHeightMobile:{value:rt,label:"ctaLineHeightMobile"},lineHeightTablet:{value:it,label:"ctaLineHeightTablet"}})),React.createElement("hr",{className:"uagb-editor__separator"}),React.createElement(s.RangeControl,{label:Object(c.__)("Rounded Corners","ultimate-addons-for-gutenberg"),value:gt,onChange:function(e){return p({borderRadius:e})},min:0,initialPosition:10,max:50,allowReset:!0})),React.createElement(s.PanelBody,{title:Object(c.__)("Connector","ultimate-addons-for-gutenberg"),initialOpen:!1},React.createElement(o.a,zt),React.createElement(s.RangeControl,{label:Object(c.__)("Icon Size","ultimate-addons-for-gutenberg"),value:ut,onChange:function(e){return p({iconSize:e})},min:0,max:30,allowReset:!0}),React.createElement(s.RangeControl,{label:Object(c.__)("Icon Background Size","ultimate-addons-for-gutenberg"),value:le,onChange:function(e){return p({connectorBgsize:e})},min:25,max:90,allowReset:!0}),React.createElement(s.RangeControl,{label:Object(c.__)("Border Width","ultimate-addons-for-gutenberg"),value:oe,onChange:function(e){return p({borderwidth:e})},min:1,max:10,allowReset:!0}),React.createElement(s.RangeControl,{label:Object(c.__)("Connector Width","ultimate-addons-for-gutenberg"),value:ne,onChange:function(e){return p({separatorwidth:e})},min:1,max:10,allowReset:!0})),(Tt=React.createElement(g.PanelColorSettings,{title:Object(c.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!0,colorSettings:[{value:O,onChange:function(e){return p({separatorColor:e})},label:Object(c.__)("Line Color","ultimate-addons-for-gutenberg")},{value:Be,onChange:function(e){return p({iconColor:e})},label:Object(c.__)("Icon Color","ultimate-addons-for-gutenberg")},{value:j,onChange:function(e){return p({separatorBg:e})},label:Object(c.__)("Background Color","ultimate-addons-for-gutenberg")},{value:S,onChange:function(e){return p({separatorBorder:e})},label:Object(c.__)("Border Color","ultimate-addons-for-gutenberg")}]}),Ht=React.createElement(g.PanelColorSettings,{title:Object(c.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!0,colorSettings:[{value:R,onChange:function(e){return p({separatorFillColor:e})},label:Object(c.__)("Line Color","ultimate-addons-for-gutenberg")},{value:ft,onChange:function(e){return p({iconFocus:e})},label:Object(c.__)("Icon Color","ultimate-addons-for-gutenberg")},{value:ht,onChange:function(e){return p({iconBgFocus:e})},label:Object(c.__)("Background Color","ultimate-addons-for-gutenberg")},{value:F,onChange:function(e){return p({borderFocus:e})},label:Object(c.__)("Border Color","ultimate-addons-for-gutenberg")}]}),React.createElement(s.PanelBody,{title:Object(c.__)("Connector Colors","ultimate-addons-for-gutenberg"),initialOpen:!0},React.createElement(s.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(c.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"focus",title:Object(c.__)("Focus","ultimate-addons-for-gutenberg"),className:"uagb-focus-tab"}]},(function(e){var t;return t="focus"===e.name?Ht:Tt,React.createElement("div",null,t)})))),React.createElement(g.PanelColorSettings,{title:Object(c.__)("Color","ultimate-addons-for-gutenberg"),initialOpen:!1,colorSettings:[{value:C,onChange:function(e){return p({backgroundColor:e})},label:Object(c.__)("Background Color","ultimate-addons-for-gutenberg")}]},Oe&&React.createElement(React.Fragment,null,React.createElement("p",{className:"uagb-setting-label"},Object(c.__)("Date Color","ultimate-addons-for-gutenberg"),React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Ae}}))),React.createElement(g.ColorPalette,{value:Ae,onChange:function(e){return p({dateColor:e})},allowReset:!0})),React.createElement(React.Fragment,null,React.createElement("p",{className:"uagb-setting-label"},Object(c.__)("Heading Color","ultimate-addons-for-gutenberg"),React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:_}}))),React.createElement(g.ColorPalette,{value:_,onChange:function(e){return p({headingColor:e})},allowReset:!0})),je&&React.createElement(React.Fragment,null,React.createElement("p",{className:"uagb-setting-label"},Object(c.__)("Author Color","ultimate-addons-for-gutenberg"),React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ce}}))),React.createElement(g.ColorPalette,{value:ce,onChange:function(e){return p({authorColor:e})},allowReset:!0})),Re&&React.createElement(React.Fragment,null,React.createElement("p",{className:"uagb-setting-label"},Object(c.__)("Content Color","ultimate-addons-for-gutenberg"),React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:y}}))),React.createElement(g.ColorPalette,{value:y,onChange:function(e){return p({subHeadingColor:e})},allowReset:!0})),Fe&&React.createElement(React.Fragment,null,React.createElement("p",{className:"uagb-setting-label"},Object(c.__)("CTA Color","ultimate-addons-for-gutenberg"),React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Ne}}))),React.createElement(g.ColorPalette,{value:Ne,onChange:function(e){return p({ctaColor:e})},allowReset:!0}),React.createElement("p",{className:"uagb-setting-label"},Object(c.__)("CTA Background Color","ultimate-addons-for-gutenberg"),React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Le}}))),React.createElement(g.ColorPalette,{value:Le,onChange:function(e){return p({ctaBackground:e})},allowReset:!0}))),React.createElement(s.PanelBody,{title:Object(c.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},React.createElement(s.RangeControl,{label:Object(c.__)("Block Padding","ultimate-addons-for-gutenberg"),value:bt,onChange:function(e){return p({bgPadding:e})},min:0,initialPosition:10,max:50,allowReset:!0}),React.createElement(s.RangeControl,{label:Object(c.__)("Content Padding","ultimate-addons-for-gutenberg"),value:dt,onChange:function(e){return p({contentPadding:e})},min:0,initialPosition:10,max:50,allowReset:!0}),React.createElement(s.RangeControl,{label:Object(c.__)("Horizontal Space","ultimate-addons-for-gutenberg"),value:te,onChange:function(e){return p({horizontalSpace:e})},min:0,max:50,initialPosition:10,allowReset:!0}),React.createElement(s.RangeControl,{label:Object(c.__)("Vertical Space","ultimate-addons-for-gutenberg"),value:ee,onChange:function(e){return p({verticalSpace:e})},min:0,max:100,initialPosition:10,allowReset:!0}),React.createElement(s.RangeControl,{label:Object(c.__)("Heading Bottom Spacing","ultimate-addons-for-gutenberg"),value:ae,onChange:function(e){return p({headSpace:e})},min:0,max:50,initialPosition:10,allowReset:!0}),je&&React.createElement(s.RangeControl,{label:Object(c.__)("Author Bottom Spacing","ultimate-addons-for-gutenberg"),value:ie,onChange:function(e){return p({authorSpace:e})},min:0,max:50,initialPosition:10,allowReset:!0}),Re&&Fe&&React.createElement(s.RangeControl,{label:Object(c.__)("Content Bottom Spacing","ultimate-addons-for-gutenberg"),value:re,onChange:function(e){return p({contentSpace:e})},min:0,max:50,initialPosition:10,allowReset:!0}),Oe&&"center"!==I&&React.createElement(s.RangeControl,{label:Object(c.__)("Date Bottom Spacing","ultimate-addons-for-gutenberg"),value:Ce,onChange:function(e){return p({dateBottomspace:e})},min:0,max:50,initialPosition:10,allowReset:!0}))),t,a,n,b,d)}))}}]);