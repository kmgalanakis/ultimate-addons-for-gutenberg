(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[26],{126:function(e,t,n){"use strict";var a=n(11),o=n(27),l=n.n(o),i=n(127),r=n.n(i);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}if(void 0===p)var p=[];var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(i,e);var t,n,a,o,l=(a=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(a);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=l.call(this,e)).state={status:void 0},t.handleLoading=function(){t.setState({status:"loading"})},t.addFont=function(e){p.includes(e)||p.push(e)},t.handleActive=function(){t.setState({status:"active"})},t.handleInactive=function(){t.setState({status:"inactive"})},t.loadFonts=function(){p.includes(t.props.config.google.families[0])||(r.a.load(u(u({},t.props.config),{},{loading:t.handleLoading,active:t.handleActive,inactive:t.handleInactive})),t.addFont(t.props.config.google.families[0]))},t}return t=i,(n=[{key:"componentDidMount",value:function(){this.loadFonts()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.onStatus,o=n.config;t.status!==this.state.status&&a(this.state.status),e.config!==o&&this.loadFonts()}},{key:"render",value:function(){return this.props.children||null}}])&&m(t.prototype,n),i}(a.Component);h.propTypes={config:l.a.object.isRequired,children:l.a.element,onStatus:l.a.func.isRequired},h.defaultProps={onStatus:function(){}},t.a=h},127:function(e,t,n){var a;!function(){function o(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){if(!e)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function i(e,t,n){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var c=!!window.FontFace;function u(e,t,n,a){if(t=e.c.createElement(t),n)for(var o in n)n.hasOwnProperty(o)&&("style"==o?t.style.cssText=n[o]:t.setAttribute(o,n[o]));return a&&t.appendChild(e.c.createTextNode(a)),t}function g(e,t,n){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(n,e.lastChild)}function m(e){e.parentNode&&e.parentNode.removeChild(e)}function f(e,t,n){t=t||[],n=n||[];for(var a=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var l=!1,i=0;i<a.length;i+=1)if(t[o]===a[i]){l=!0;break}l||a.push(t[o])}for(t=[],o=0;o<a.length;o+=1){for(l=!1,i=0;i<n.length;i+=1)if(a[o]===n[i]){l=!0;break}l||t.push(a[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function b(e,t){for(var n=e.className.split(/\s+/),a=0,o=n.length;a<o;a++)if(n[a]==t)return!0;return!1}function d(e,t,n){function a(){r&&o&&l&&(r(i),r=null)}t=u(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,l=!0,i=null,r=n||null;c?(t.onload=function(){o=!0,a()},t.onerror=function(){o=!0,i=Error("Stylesheet failed to load"),a()}):setTimeout((function(){o=!0,a()}),0),g(e,"head",t)}function p(e,t,n,a){var o=e.c.getElementsByTagName("head")[0];if(o){var l=u(e,"script",{src:t}),i=!1;return l.onload=l.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,n&&n(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&o.removeChild(l))},o.appendChild(l),setTimeout((function(){i||(i=!0,n&&n(Error("Script load timeout")))}),a||5e3),l}return null}function h(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,_(e)}}function y(e,t){e.c=t,_(e)}function _(e){0==e.a&&e.c&&(e.c(),e.c=null)}function w(e){this.a=e||"-"}function E(e,t){this.c=e,this.f=4,this.a="n";var n=(t||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function C(e){var t=[];e=e.split(/,\s*/);for(var n=0;n<e.length;n++){var a=e[n].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?t.push("'"+a+"'"):t.push(a)}return t.join(",")}function k(e){return e.a+e.f}function S(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function j(e){var t=4,n="n",a=null;return e&&((a=e.match(/(normal|oblique|italic)/i))&&a[1]&&(n=a[1].substr(0,1).toLowerCase()),(a=e.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?t=7:/[1-9]00/.test(a[1])&&(t=parseInt(a[1].substr(0,1),10)))),n+t}function x(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new w("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function T(e){if(e.g){var t=b(e.f,e.a.c("wf","active")),n=[],a=[e.a.c("wf","loading")];t||n.push(e.a.c("wf","inactive")),f(e.f,n,a)}O(e,"inactive")}function O(e,t,n){e.j&&e.h[t]&&(n?e.h[t](n.c,k(n)):e.h[t]())}function P(){this.c={}}function N(e,t){this.c=e,this.f=t,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function z(e){g(e.c,"body",e.a)}function R(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+C(e.c)+";font-style:"+S(e)+";font-weight:"+e.f+"00;"}function F(e,t,n,a,o,l){this.g=e,this.j=t,this.a=a,this.c=n,this.f=o||3e3,this.h=l||void 0}function q(e,t,n,a,o,l,i){this.v=e,this.B=t,this.c=n,this.a=a,this.s=i||"BESbswy",this.f={},this.w=o||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new N(this.c,this.s),this.h=new N(this.c,this.s),this.j=new N(this.c,this.s),this.m=new N(this.c,this.s),e=R(e=new E(this.a.c+",serif",k(this.a))),this.g.a.style.cssText=e,e=R(e=new E(this.a.c+",sans-serif",k(this.a))),this.h.a.style.cssText=e,e=R(e=new E("serif",k(this.a))),this.j.a.style.cssText=e,e=R(e=new E("sans-serif",k(this.a))),this.m.a.style.cssText=e,z(this.g),z(this.h),z(this.j),z(this.m)}w.prototype.c=function(e){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},F.prototype.start=function(){var e=this.c.o.document,t=this,n=r(),a=new Promise((function(a,o){!function l(){r()-n>=t.f?o():e.fonts.load(function(e){return S(e)+" "+e.f+"00 300px "+C(e.c)}(t.a),t.h).then((function(e){1<=e.length?a():setTimeout(l,25)}),(function(){o()}))}()})),o=null,l=new Promise((function(e,n){o=setTimeout(n,t.f)}));Promise.race([l,a]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var B={D:"serif",C:"sans-serif"},D=null;function A(){if(null===D){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);D=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return D}function H(e,t,n){for(var a in B)if(B.hasOwnProperty(a)&&t===e.f[B[a]]&&n===e.f[B[a]])return!0;return!1}function M(e,t){setTimeout(i((function(){m(this.g.a),m(this.h.a),m(this.j.a),m(this.m.a),t(this.a)}),e),0)}function L(e,t,n){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=n}q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var n,a=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(n=a===t.f.serif&&o===t.f["sans-serif"])||(n=A()&&H(t,a,o)),n?r()-t.A>=t.w?A()&&H(t,a,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?M(t,t.v):M(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):M(t,t.v)}(this)};var I=null;function G(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&f(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),O(e,"active")):T(e.a))}function W(e){this.j=e,this.a=new P,this.h=0,this.f=this.g=!0}function U(e,t,n,a,o){var l=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,r=a||{};if(0===n.length&&l)T(t.a);else{t.f+=n.length,l&&(t.j=l);var s,c=[];for(s=0;s<n.length;s++){var u=n[s],g=r[u.c],m=t.a,b=u;if(m.g&&f(m.f,[m.a.c("wf",b.c,k(b).toString(),"loading")]),O(m,"fontloading",b),m=null,null===I)if(window.FontFace){b=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);I=b?42<parseInt(b[1],10):!d}else I=!1;m=I?new F(i(t.g,t),i(t.h,t),t.c,u,t.s,g):new q(i(t.g,t),i(t.h,t),t.c,u,t.s,e,g),c.push(m)}for(s=0;s<c.length;s++)c[s].start()}}),0)}function Q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}L.prototype.g=function(e){var t=this.a;t.g&&f(t.f,[t.a.c("wf",e.c,k(e).toString(),"active")],[t.a.c("wf",e.c,k(e).toString(),"loading"),t.a.c("wf",e.c,k(e).toString(),"inactive")]),O(t,"fontactive",e),this.m=!0,G(this)},L.prototype.h=function(e){var t=this.a;if(t.g){var n=b(t.f,t.a.c("wf",e.c,k(e).toString(),"active")),a=[],o=[t.a.c("wf",e.c,k(e).toString(),"loading")];n||a.push(t.a.c("wf",e.c,k(e).toString(),"inactive")),f(t.f,a,o)}O(t,"fontinactive",e),G(this)},W.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,n){var a=[],o=n.timeout;!function(e){e.g&&f(e.f,[e.a.c("wf","loading")]),O(e,"loading")}(t),a=function(e,t,n){var a,o=[];for(a in t)if(t.hasOwnProperty(a)){var l=e.c[a];l&&o.push(l(t[a],n))}return o}(e.a,n,e.c);var l=new L(e.c,t,o);for(e.h=a.length,t=0,n=a.length;t<n;t++)a[t].load((function(t,n,a){U(e,l,t,n,a)}))}(this,new x(this.c,e),e)},Q.prototype.load=function(e){var t=this,n=t.a.projectId,a=t.a.version;if(n){var o=t.c.o;p(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(a?"?v="+a:""),(function(a){a?e([]):(o["__MonotypeConfiguration__"+n]=function(){return t.a},function t(){if(o["__mti_fntLst"+n]){var a,l=o["__mti_fntLst"+n](),i=[];if(l)for(var r=0;r<l.length;r++){var s=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(a=l[r].fontStyle+l[r].fontWeight,i.push(new E(s,a))):i.push(new E(s))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+n}else e([])},$.prototype.load=function(e){var t,n,a=this.a.urls||[],o=this.a.families||[],l=this.a.testStrings||{},i=new h;for(t=0,n=a.length;t<n;t++)d(this.c,a[t],v(i));var r=[];for(t=0,n=o.length;t<n;t++)if((a=o[t].split(":"))[1])for(var s=a[1].split(","),c=0;c<s.length;c+=1)r.push(new E(a[0],s[c]));else r.push(new E(a[0]));y(i,(function(){e(r,l)}))};var K="https://fonts.googleapis.com/css";function V(e){this.f=e,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ne={Arimo:!0,Cousine:!0,Tinos:!0};function ae(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new h,n=this.c,a=new J(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var n=t.length,a=0;a<n;a++){var o=t[a].split(":");3==o.length&&e.f.push(o.pop());var l="";2==o.length&&""!=o[1]&&(l=":"),e.a.push(o.join(l))}}(a,o);var l=new V(o);!function(e){for(var t=e.f.length,n=0;n<t;n++){var a=e.f[n].split(":"),o=a[0].replace(/\+/g," "),l=["n4"];if(2<=a.length){var i;if(i=[],r=a[1])for(var r,s=(r=r.split(",")).length,c=0;c<s;c++){var u;if((u=r[c]).match(/^[\w-]+$/))if(null==(g=ee.exec(u.toLowerCase())))u="";else{if(u=null==(u=g[2])||""==u?"n":Z[u],null==(g=g[1])||""==g)g="4";else var g=Y[g]||(isNaN(g)?"4":g.substr(0,1));u=[u,g].join("")}else u="";u&&i.push(u)}0<i.length&&(l=i),3==a.length&&(i=[],0<(a=(a=a[2])?a.split(","):i).length&&(a=X[a[0]])&&(e.c[o]=a))}for(e.c[o]||(a=X[o])&&(e.c[o]=a),a=0;a<l.length;a+=1)e.a.push(new E(o,l[a]))}}(l),d(n,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,n=[],a=0;a<t;a++)n.push(e.a[a].replace(/ /g,"+"));return t=e.c+"?family="+n.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(a),v(t)),y(t,(function(){e(l.a,l.c,ne)}))},ae.prototype.load=function(e){var t=this.a.id,n=this.c.o;t?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){t=n.Typekit.config.fn;for(var a=[],o=0;o<t.length;o+=2)for(var l=t[o],i=t[o+1],r=0;r<i.length;r++)a.push(new E(l,i[r]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(a)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,n=this.c.o,a=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var o=0,l=n.fonts.length;o<l;++o){var i=n.fonts[o];a.a.push(new E(i.name,j("font-weight:"+i.weight+";font-style:"+i.style)))}e(a.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var le=new W(window);le.a.c.custom=function(e,t){return new $(t,e)},le.a.c.fontdeck=function(e,t){return new oe(t,e)},le.a.c.monotype=function(e,t){return new Q(t,e)},le.a.c.typekit=function(e,t){return new ae(t,e)},le.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(le.load,le)};void 0===(a=function(){return ie}.call(t,n,t,e))||(e.exports=a)}()},490:function(e,t,n){"use strict";n.r(t);var a=n(12),o=n(128),l=n.n(o),i=n(6),r=n(1),s=n.n(r),c=n(9),u=n(53),g=n(126),m=n(19),f=n(2),b=n(10),d=n(4),p=n(5),h=function(e){var t,n,o=e=e.parentProps,h=o.attributes,v=o.setAttributes,y=o.deviceType,_=h.layout,w=h.inactiveOtherItems,E=h.expandFirstItem,C=h.enableSchemaSupport,k=h.rowsGap,S=h.columnsGap,j=h.align,x=h.enableSeparator,T=h.boxBgColor,O=h.borderStyle,P=h.borderWidth,N=h.borderRadius,z=h.borderColor,R=h.questionTextColor,F=h.questionTextActiveColor,q=h.questionPaddingTypeDesktop,B=h.answerTextColor,D=h.answerPaddingTypeDesktop,A=h.vanswerPaddingMobile,H=h.vanswerPaddingTablet,M=h.vanswerPaddingDesktop,L=h.hanswerPaddingMobile,I=h.hanswerPaddingTablet,G=h.hanswerPaddingDesktop,W=h.iconColor,U=h.iconActiveColor,Q=h.gapBtwIconQUestion,$=h.questionloadGoogleFonts,J=h.questionFontFamily,K=h.questionFontWeight,V=h.questionFontSubset,X=h.questionFontSizeType,Y=h.questionFontSize,Z=h.questionFontSizeMobile,ee=h.questionFontSizeTablet,te=h.questionLineHeightType,ne=h.questionLineHeight,ae=h.questionLineHeightMobile,oe=h.questionLineHeightTablet,le=h.answerloadGoogleFonts,ie=h.answerFontFamily,re=h.answerFontWeight,se=h.answerFontSubset,ce=h.answerFontSizeType,ue=h.answerFontSize,ge=h.answerFontSizeMobile,me=h.answerFontSizeTablet,fe=h.answerLineHeightType,be=h.answerLineHeight,de=h.answerLineHeightMobile,pe=h.answerLineHeightTablet,he=h.icon,ve=h.iconActive,ye=h.iconAlign,_e=h.iconSizeType,we=h.iconSizeMobile,Ee=h.iconSizeTablet,Ce=h.iconSize,ke=h.columns,Se=h.tcolumns,je=h.mcolumns,xe=h.enableToggle,Te=h.equalHeight,Oe=h.questionLeftPaddingTablet,Pe=h.hquestionPaddingTablet,Ne=h.vquestionPaddingTablet,ze=h.questionBottomPaddingTablet,Re=h.questionLeftPaddingDesktop,Fe=h.hquestionPaddingDesktop,qe=h.vquestionPaddingDesktop,Be=h.questionBottomPaddingDesktop,De=h.questionLeftPaddingMobile,Ae=h.hquestionPaddingMobile,He=h.vquestionPaddingMobile,Me=h.questionBottomPaddingMobile,Le=h.headingTag;if(1==$){var Ie={google:{families:[J+(K?":"+K:"")]}};t=s.a.createElement(g.a,{config:Ie})}if(1==le){var Ge={google:{families:[ie+(re?":"+re:"")]}};n=s.a.createElement(g.a,{config:Ge})}return s.a.createElement(r.Suspense,{fallback:Object(c.a)()},s.a.createElement(d.InspectorControls,null,s.a.createElement(p.PanelBody,{title:Object(f.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb__url-panel-body"},s.a.createElement(p.SelectControl,{label:Object(f.__)("Layout","ultimate-addons-for-gutenberg"),value:_,options:[{value:"accordion",label:Object(f.__)("Accordion","ultimate-addons-for-gutenberg")},{value:"grid",label:Object(f.__)("Grid","ultimate-addons-for-gutenberg")}],onChange:function(t){return function(t){Object(b.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.layout=t})),v({layout:t})}(t)}}),"accordion"===_&&s.a.createElement(s.a.Fragment,null,s.a.createElement(p.ToggleControl,{label:Object(f.__)("Collapse other items","ultimate-addons-for-gutenberg"),checked:w,onChange:function(){return v({inactiveOtherItems:!w})}}),!0===w&&s.a.createElement(p.ToggleControl,{label:Object(f.__)("Expand First Item","ultimate-addons-for-gutenberg"),checked:E,onChange:function(){return v({expandFirstItem:!E})}}),s.a.createElement(p.ToggleControl,{label:Object(f.__)("Enable Toggle","ultimate-addons-for-gutenberg"),checked:xe,onChange:function(){return v({enableToggle:!xe})}})),s.a.createElement(p.ToggleControl,{label:Object(f.__)("Enable Schema Support","ultimate-addons-for-gutenberg"),checked:C,onChange:function(){return v({enableSchemaSupport:!C})}}),s.a.createElement("hr",{className:"uagb-editor__separator"}),"grid"===_&&s.a.createElement(p.TabPanel,{className:"uagb-size-type-field-tabs uagb-without-size-type",activeClass:"active-tab",tabs:[{name:"desktop",title:s.a.createElement(p.Dashicon,{icon:"desktop"}),className:"uagb-desktop-tab uagb-responsive-tabs"},{name:"tablet",title:s.a.createElement(p.Dashicon,{icon:"tablet"}),className:"uagb-tablet-tab uagb-responsive-tabs"},{name:"mobile",title:s.a.createElement(p.Dashicon,{icon:"smartphone"}),className:"uagb-mobile-tab uagb-responsive-tabs"}]},(function(e){var t;return t="mobile"===e.name?s.a.createElement(p.RangeControl,{label:Object(f.__)("Mobile Columns","ultimate-addons-for-gutenberg"),value:je,onChange:function(e){return v({mcolumns:e})},min:1,max:2}):"tablet"===e.name?s.a.createElement(p.RangeControl,{label:Object(f.__)("Tab Columns","ultimate-addons-for-gutenberg"),value:Se,onChange:function(e){return v({tcolumns:e})},min:1,max:4}):s.a.createElement(p.RangeControl,{label:Object(f.__)("Desktop Columns","ultimate-addons-for-gutenberg"),value:ke,onChange:function(e){return v({columns:e})},min:1,max:6}),s.a.createElement("div",null,t)})),"grid"===_&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",null," ",Object(f.__)("Alignment","ultimate-addons-for-gutenberg")),s.a.createElement(p.Button,{key:"left",icon:"editor-alignleft",label:"Left",onClick:function(){return v({align:"left"})},"aria-pressed":"left"===j,isPrimary:"left"===j}),s.a.createElement(p.Button,{key:"center",icon:"editor-aligncenter",label:"Right",onClick:function(){return v({align:"center"})},"aria-pressed":"center"===j,isPrimary:"center"===j}),s.a.createElement(p.Button,{key:"right",icon:"editor-alignright",label:"Right",onClick:function(){return v({align:"right"})},"aria-pressed":"right"===j,isPrimary:"right"===j})),"accordion"===_&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",null," ",Object(f.__)("Icon","ultimate-addons-for-gutenberg")," "),s.a.createElement("p",{className:"components-base-control__label"},Object(f.__)("Expand","ultimate-addons-for-gutenberg")),s.a.createElement(l.a,{icons:wp.UAGBSvgIcons,renderFunc:a.a,theme:"default",value:he,onChange:function(t){return function(t){Object(b.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.icon=t})),v({icon:t})}(t)},isMulti:!1,noSelectedPlaceholder:Object(f.__)("Select Icon","ultimate-addons-for-gutenberg")}),s.a.createElement("p",{className:"components-base-control__label"},Object(f.__)("Collapse","ultimate-addons-for-gutenberg")),s.a.createElement(l.a,{icons:wp.UAGBSvgIcons,renderFunc:a.a,theme:"default",value:ve,onChange:function(t){return function(t){Object(b.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.iconActive=t})),v({iconActive:t})}(t)},isMulti:!1,noSelectedPlaceholder:Object(f.__)("Select Icon","ultimate-addons-for-gutenberg")}),s.a.createElement("h2",null," ",Object(f.__)("Icon Alignment","ultimate-addons-for-gutenberg")),s.a.createElement(p.Button,{key:"row",icon:"editor-alignleft",label:"Left",onClick:function(){return v({iconAlign:"row"})},"aria-pressed":"row"===ye,isPrimary:"row"===ye}),s.a.createElement(p.Button,{key:"row-reverse",icon:"editor-alignright",label:"Right",onClick:function(){return v({iconAlign:"row-reverse"})},"aria-pressed":"row-reverse"===ye,isPrimary:"row-reverse"===ye}))),s.a.createElement(p.PanelBody,{title:Object(f.__)("Style","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},s.a.createElement("p",{className:"uagb-setting-label"},Object(f.__)("Background Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:T}}))),s.a.createElement(d.ColorPalette,{value:T,onChange:function(e){return v({boxBgColor:e})},allowReset:!0}),s.a.createElement(p.RangeControl,{label:Object(f.__)("Rows Gap (px)","ultimate-addons-for-gutenberg"),value:k,onChange:function(e){return v({rowsGap:e})},min:0,max:50}),"grid"===_&&s.a.createElement(s.a.Fragment,null,s.a.createElement(p.RangeControl,{label:Object(f.__)("Columns Gap (px)","ultimate-addons-for-gutenberg"),value:S,onChange:function(e){return v({columnsGap:e})},min:0,max:50}),s.a.createElement(p.ToggleControl,{label:Object(f.__)("Equal Height","ultimate-addons-for-gutenberg"),checked:Te,onChange:function(){return v({equalHeight:!Te})}})),s.a.createElement(p.ToggleControl,{label:Object(f.__)("Enable Separator","ultimate-addons-for-gutenberg"),checked:x,onChange:function(){return v({enableSeparator:!x})}}),s.a.createElement("hr",{className:"uagb-editor__separator"}),s.a.createElement("h2",null,Object(f.__)("Border","ultimate-addons-for-gutenberg")),s.a.createElement(p.SelectControl,{label:Object(f.__)("Style","ultimate-addons-for-gutenberg"),value:O,options:[{value:"none",label:Object(f.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(f.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(f.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(f.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(f.__)("Double","ultimate-addons-for-gutenberg")}],onChange:function(e){v({borderStyle:e})}}),"none"!==O&&s.a.createElement(p.RangeControl,{label:Object(f.__)("Thickness (px)","ultimate-addons-for-gutenberg"),value:P,onChange:function(e){v({borderWidth:e})},min:0,max:20}),"none"!==O&&s.a.createElement(p.RangeControl,{label:Object(f.__)("Rounded Corners (px)","ultimate-addons-for-gutenberg"),value:N,onChange:function(e){v({borderRadius:e})},min:0,max:50}),s.a.createElement("p",{className:"uagb-setting-label"},Object(f.__)("Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:z}}))),s.a.createElement(d.ColorPalette,{value:z,onChange:function(e){return v({borderColor:e})},allowReset:!0}),"accordion"===_&&s.a.createElement(s.a.Fragment,null,s.a.createElement("hr",{className:"uagb-editor__separator"}),s.a.createElement("h2",null,Object(f.__)("Icon","ultimate-addons-for-gutenberg")),s.a.createElement(u.a,null),"Desktop"===y&&s.a.createElement(s.a.Fragment,null,s.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(f.__)("Size Type")},s.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===_e,"aria-pressed":"px"===_e,onClick:function(){return v({iconSizeType:"px"})}},"px"),s.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===_e,"aria-pressed":"%"===_e,onClick:function(){return v({iconSizeType:"%"})}},"%")),s.a.createElement("h2",null,Object(f.__)("Size")),s.a.createElement(p.RangeControl,{value:Ce,onChange:function(e){return v({iconSize:e})},min:0,max:100,allowReset:!0})),"Tablet"===y&&s.a.createElement(s.a.Fragment,null,s.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(f.__)("Size Type")},s.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===_e,"aria-pressed":"px"===_e,onClick:function(){return v({iconSizeType:"px"})}},"px"),s.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===_e,"aria-pressed":"%"===_e,onClick:function(){return v({iconSizeType:"%"})}},"%")),s.a.createElement("h2",null,Object(f.__)("Size")),s.a.createElement(p.RangeControl,{value:Ee,onChange:function(e){return v({iconSizeTablet:e})},min:0,max:100,allowReset:!0})),"Mobile"===y&&s.a.createElement(s.a.Fragment,null,s.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(f.__)("Size Type")},s.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===_e,"aria-pressed":"px"===_e,onClick:function(){return v({iconSizeType:"px"})}},"px"),s.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===_e,"aria-pressed":"%"===_e,onClick:function(){return v({iconSizeType:"%"})}},"%")),s.a.createElement("h2",null,Object(f.__)("Size")),s.a.createElement(p.RangeControl,{value:we,onChange:function(e){return v({iconSizeMobile:e})},min:0,max:100,allowReset:!0})),s.a.createElement(p.RangeControl,{label:Object(f.__)("Gap between Icon and Question","ultimate-addons-for-gutenberg"),value:Q,onChange:function(e){return v({gapBtwIconQUestion:e})},min:0,max:100}),s.a.createElement("p",{className:"uagb-setting-label"},Object(f.__)("Expand Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:W}}))),s.a.createElement(d.ColorPalette,{value:W,onChange:function(e){return v({iconColor:e})},allowReset:!0}),s.a.createElement("p",{className:"uagb-setting-label"},Object(f.__)("Collapse Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:U}}))),s.a.createElement(d.ColorPalette,{value:U,onChange:function(e){return v({iconActiveColor:e})},allowReset:!0}))),s.a.createElement(p.PanelBody,{title:Object(f.__)("Question","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},s.a.createElement(p.SelectControl,{label:Object(f.__)("Question Tag","ultimate-addons-for-gutenberg"),value:Le,onChange:function(t){return function(t){Object(b.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.headingTag=t})),v({headingTag:t})}(t)},options:[{value:"span",label:Object(f.__)("Span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(f.__)("P","ultimate-addons-for-gutenberg")},{value:"h1",label:Object(f.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(f.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(f.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(f.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(f.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(f.__)("H6","ultimate-addons-for-gutenberg")}]}),s.a.createElement(m.a,{label:Object(f.__)("Typography","ultimate-addons-for-gutenberg"),attributes:h,setAttributes:v,loadGoogleFonts:{value:$,label:"questionloadGoogleFonts"},fontFamily:{value:J,label:"questionFontFamily"},fontWeight:{value:K,label:"questionFontWeight"},fontSubset:{value:V,label:"questionFontSubset"},fontSizeType:{value:X,label:"questionFontSizeType"},fontSize:{value:Y,label:"questionFontSize"},fontSizeMobile:{value:Z,label:"questionFontSizeMobile"},fontSizeTablet:{value:ee,label:"questionFontSizeTablet"},lineHeightType:{value:te,label:"questionLineHeightType"},lineHeight:{value:ne,label:"questionLineHeight"},lineHeightMobile:{value:ae,label:"questionLineHeightMobile"},lineHeightTablet:{value:oe,label:"questionLineHeightTablet"}}),s.a.createElement("p",{className:"uagb-setting-label"},Object(f.__)("Text Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:R}}))),s.a.createElement(d.ColorPalette,{value:R,onChange:function(e){return v({questionTextColor:e})},allowReset:!0}),s.a.createElement("p",{className:"uagb-setting-label"},Object(f.__)("Text Active/Hover Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:F}}))),s.a.createElement(d.ColorPalette,{value:F,onChange:function(e){return v({questionTextActiveColor:e})},allowReset:!0}),s.a.createElement(u.a,null),"Desktop"===y&&s.a.createElement(s.a.Fragment,null,s.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(f.__)("Size Type","ultimate-addons-for-gutenberg")},s.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===q,"aria-pressed":"px"===q,onClick:function(){return v({questionPaddingTypeDesktop:"px"})}},"px"),s.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===q,"aria-pressed":"%"===q,onClick:function(){return v({questionPaddingTypeDesktop:"%"})}},"%")),s.a.createElement("h2",null,Object(f.__)("Padding")),s.a.createElement(p.RangeControl,{label:i.a.left_margin,className:"uagb-margin-control",value:Re,onChange:function(e){return v({questionLeftPaddingDesktop:e})},min:0,max:50,allowReset:!0}),s.a.createElement(p.RangeControl,{label:i.a.right_margin,className:"uagb-margin-control",value:Fe,onChange:function(e){return v({hquestionPaddingDesktop:e})},min:0,max:50,allowReset:!0}),s.a.createElement(p.RangeControl,{label:i.a.top_margin,className:"uagb-margin-control",value:qe,onChange:function(e){return v({vquestionPaddingDesktop:e})},min:0,max:50,allowReset:!0}),s.a.createElement(p.RangeControl,{label:i.a.bottom_margin,className:"uagb-margin-control",value:Be,onChange:function(e){return v({questionBottomPaddingDesktop:e})},min:0,max:50,allowReset:!0})),"Tablet"===y&&s.a.createElement(s.a.Fragment,null,s.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(f.__)("Size Type","ultimate-addons-for-gutenberg")},s.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===q,"aria-pressed":"px"===q,onClick:function(){return v({questionPaddingTypeDesktop:"px"})}},"px"),s.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===q,"aria-pressed":"%"===q,onClick:function(){return v({questionPaddingTypeDesktop:"%"})}},"%")),s.a.createElement("h2",null,Object(f.__)("Padding","ultimate-addons-for-gutenberg")),s.a.createElement(p.RangeControl,{label:i.a.left_margin,className:"uagb-margin-control",value:Oe,onChange:function(e){return v({questionLeftPaddingTablet:e})},min:0,max:50,allowReset:!0}),s.a.createElement(p.RangeControl,{label:i.a.right_margin,className:"uagb-margin-control",value:Pe,onChange:function(e){return v({hquestionPaddingTablet:e})},min:0,max:50,allowReset:!0}),s.a.createElement(p.RangeControl,{label:i.a.top_margin,className:"uagb-margin-control",value:Ne,onChange:function(e){return v({vquestionPaddingTablet:e})},min:0,max:50,allowReset:!0}),s.a.createElement(p.RangeControl,{label:i.a.bottom_margin,className:"uagb-margin-control",value:ze,onChange:function(e){return v({questionBottomPaddingTablet:e})},min:0,max:50,allowReset:!0})),"Mobile"===y&&s.a.createElement(s.a.Fragment,null,s.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(f.__)("Size Type","ultimate-addons-for-gutenberg")},s.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===q,"aria-pressed":"px"===q,onClick:function(){return v({questionPaddingTypeDesktop:"px"})}},"px"),s.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===q,"aria-pressed":"%"===q,onClick:function(){return v({questionPaddingTypeDesktop:"%"})}},"%")),s.a.createElement("h2",null,Object(f.__)("Padding","ultimate-addons-for-gutenberg")),s.a.createElement(p.RangeControl,{label:i.a.left_margin,className:"uagb-margin-control",value:De,onChange:function(e){return v({questionLeftPaddingMobile:e})},min:0,max:50,allowReset:!0}),s.a.createElement(p.RangeControl,{label:i.a.right_margin,className:"uagb-margin-control",value:Ae,onChange:function(e){return v({hquestionPaddingMobile:e})},min:0,max:50,allowReset:!0}),s.a.createElement(p.RangeControl,{label:i.a.top_margin,className:"uagb-margin-control",value:He,onChange:function(e){return v({vquestionPaddingMobile:e})},min:0,max:50,allowReset:!0}),s.a.createElement(p.RangeControl,{label:i.a.bottom_margin,className:"uagb-margin-control",value:Me,onChange:function(e){return v({questionBottomPaddingMobile:e})},min:0,max:50,allowReset:!0}))),s.a.createElement(p.PanelBody,{title:Object(f.__)("Answer","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},s.a.createElement(m.a,{label:Object(f.__)("Typography","ultimate-addons-for-gutenberg"),attributes:h,setAttributes:v,loadGoogleFonts:{value:le,label:"answerloadGoogleFonts"},fontFamily:{value:ie,label:"answerFontFamily"},fontWeight:{value:re,label:"answerFontWeight"},fontSubset:{value:se,label:"answerFontSubset"},fontSizeType:{value:ce,label:"answerFontSizeType"},fontSize:{value:ue,label:"answerFontSize"},fontSizeMobile:{value:ge,label:"answerFontSizeMobile"},fontSizeTablet:{value:me,label:"answerFontSizeTablet"},lineHeightType:{value:fe,label:"answerLineHeightType"},lineHeight:{value:be,label:"answerLineHeight"},lineHeightMobile:{value:de,label:"answerLineHeightMobile"},lineHeightTablet:{value:pe,label:"answerLineHeightTablet"}}),s.a.createElement("p",{className:"uagb-setting-label"},Object(f.__)("Text Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:B}}))),s.a.createElement(d.ColorPalette,{value:B,onChange:function(e){return v({answerTextColor:e})},allowReset:!0}),s.a.createElement(u.a,null),"Desktop"===y&&s.a.createElement(s.a.Fragment,null,s.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(f.__)("Size Type","ultimate-addons-for-gutenberg")},s.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===D,"aria-pressed":"px"===D,onClick:function(){return v({answerPaddingTypeDesktop:"px"})}},"px"),s.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===D,"aria-pressed":"%"===D,onClick:function(){return v({answerPaddingTypeDesktop:"%"})}},"%")),s.a.createElement("h2",null,Object(f.__)("Padding","ultimate-addons-for-gutenberg")),s.a.createElement(p.RangeControl,{label:i.a.vertical_spacing,className:"uagb-margin-control",value:M,onChange:function(e){return v({vanswerPaddingDesktop:e})},min:0,max:100,allowReset:!0}),s.a.createElement(p.RangeControl,{label:i.a.horizontal_spacing,className:"uagb-margin-control",value:G,onChange:function(e){return v({hanswerPaddingDesktop:e})},min:0,max:100,allowReset:!0})),"Tablet"===y&&s.a.createElement(s.a.Fragment,null,s.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(f.__)("Size Type","ultimate-addons-for-gutenberg")},s.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===D,"aria-pressed":"px"===D,onClick:function(){return v({answerPaddingTypeDesktop:"px"})}},"px"),s.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===D,"aria-pressed":"%"===D,onClick:function(){return v({answerPaddingTypeDesktop:"%"})}},"%")),s.a.createElement("h2",null,Object(f.__)("Padding","ultimate-addons-for-gutenberg")),s.a.createElement(p.RangeControl,{label:i.a.vertical_spacing,className:"uagb-margin-control",value:H,onChange:function(e){return v({vanswerPaddingTablet:e})},min:0,max:100,allowReset:!0}),s.a.createElement(p.RangeControl,{label:i.a.horizontal_spacing,className:"uagb-margin-control",value:I,onChange:function(e){return v({hanswerPaddingTablet:e})},min:0,max:100,allowReset:!0})),"Mobile"===y&&s.a.createElement(s.a.Fragment,null,s.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(f.__)("Size Type","ultimate-addons-for-gutenberg")},s.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===D,"aria-pressed":"px"===D,onClick:function(){return v({answerPaddingTypeDesktop:"px"})}},"px"),s.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===D,"aria-pressed":"%"===D,onClick:function(){return v({answerPaddingTypeDesktop:"%"})}},"%")),s.a.createElement("h2",null,Object(f.__)("Padding","ultimate-addons-for-gutenberg")),s.a.createElement(p.RangeControl,{label:i.a.vertical_spacing,className:"uagb-margin-control",value:A,onChange:function(e){return v({vanswerPaddingMobile:e})},min:0,max:100,allowReset:!0}),s.a.createElement(p.RangeControl,{label:i.a.horizontal_spacing,className:"uagb-margin-control",value:L,onChange:function(e){return v({hanswerPaddingMobile:e})},min:0,max:100,allowReset:!0})))),t,n)};t.default=s.a.memo(h)}}]);