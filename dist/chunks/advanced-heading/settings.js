(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[4],{130:function(e,t,n){"use strict";var a=n(11),o=n(27),i=n.n(o),r=n(131),l=n.n(r);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}if(void 0===b)var b=[];var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(r,e);var t,n,a,o,i=(a=r,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(a);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=i.call(this,e)).state={status:void 0},t.handleLoading=function(){t.setState({status:"loading"})},t.addFont=function(e){b.includes(e)||b.push(e)},t.handleActive=function(){t.setState({status:"active"})},t.handleInactive=function(){t.setState({status:"inactive"})},t.loadFonts=function(){b.includes(t.props.config.google.families[0])||(l.a.load(u(u({},t.props.config),{},{loading:t.handleLoading,active:t.handleActive,inactive:t.handleInactive})),t.addFont(t.props.config.google.families[0]))},t}return t=r,(n=[{key:"componentDidMount",value:function(){this.loadFonts()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.onStatus,o=n.config;t.status!==this.state.status&&a(this.state.status),e.config!==o&&this.loadFonts()}},{key:"render",value:function(){return this.props.children||null}}])&&h(t.prototype,n),r}(a.Component);m.propTypes={config:i.a.object.isRequired,children:i.a.element,onStatus:i.a.func.isRequired},m.defaultProps={onStatus:function(){}},t.a=m},131:function(e,t,n){var a;!function(){function o(e,t,n){return e.call.apply(e.bind,arguments)}function i(e,t,n){if(!e)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function r(e,t,n){return(r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:i).apply(null,arguments)}var l=Date.now||function(){return+new Date};function s(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var c=!!window.FontFace;function u(e,t,n,a){if(t=e.c.createElement(t),n)for(var o in n)n.hasOwnProperty(o)&&("style"==o?t.style.cssText=n[o]:t.setAttribute(o,n[o]));return a&&t.appendChild(e.c.createTextNode(a)),t}function f(e,t,n){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(n,e.lastChild)}function h(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e,t,n){t=t||[],n=n||[];for(var a=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var i=!1,r=0;r<a.length;r+=1)if(t[o]===a[r]){i=!0;break}i||a.push(t[o])}for(t=[],o=0;o<a.length;o+=1){for(i=!1,r=0;r<n.length;r+=1)if(a[o]===n[r]){i=!0;break}i||t.push(a[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function g(e,t){for(var n=e.className.split(/\s+/),a=0,o=n.length;a<o;a++)if(n[a]==t)return!0;return!1}function p(e,t,n){function a(){l&&o&&i&&(l(r),l=null)}t=u(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,i=!0,r=null,l=n||null;c?(t.onload=function(){o=!0,a()},t.onerror=function(){o=!0,r=Error("Stylesheet failed to load"),a()}):setTimeout((function(){o=!0,a()}),0),f(e,"head",t)}function b(e,t,n,a){var o=e.c.getElementsByTagName("head")[0];if(o){var i=u(e,"script",{src:t}),r=!1;return i.onload=i.onreadystatechange=function(){r||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(r=!0,n&&n(null),i.onload=i.onreadystatechange=null,"HEAD"==i.parentNode.tagName&&o.removeChild(i))},o.appendChild(i),setTimeout((function(){r||(r=!0,n&&n(Error("Script load timeout")))}),a||5e3),i}return null}function m(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,w(e)}}function y(e,t){e.c=t,w(e)}function w(e){0==e.a&&e.c&&(e.c(),e.c=null)}function _(e){this.a=e||"-"}function S(e,t){this.c=e,this.f=4,this.a="n";var n=(t||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function j(e){var t=[];e=e.split(/,\s*/);for(var n=0;n<e.length;n++){var a=e[n].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?t.push("'"+a+"'"):t.push(a)}return t.join(",")}function O(e){return e.a+e.f}function H(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function T(e){var t=4,n="n",a=null;return e&&((a=e.match(/(normal|oblique|italic)/i))&&a[1]&&(n=a[1].substr(0,1).toLowerCase()),(a=e.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?t=7:/[1-9]00/.test(a[1])&&(t=parseInt(a[1].substr(0,1),10)))),n+t}function E(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new _("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function F(e){if(e.g){var t=g(e.f,e.a.c("wf","active")),n=[],a=[e.a.c("wf","loading")];t||n.push(e.a.c("wf","inactive")),d(e.f,n,a)}C(e,"inactive")}function C(e,t,n){e.j&&e.h[t]&&(n?e.h[t](n.c,O(n)):e.h[t]())}function x(){this.c={}}function k(e,t){this.c=e,this.f=t,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function P(e){f(e.c,"body",e.a)}function z(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(e.c)+";font-style:"+H(e)+";font-weight:"+e.f+"00;"}function L(e,t,n,a,o,i){this.g=e,this.j=t,this.a=a,this.c=n,this.f=o||3e3,this.h=i||void 0}function N(e,t,n,a,o,i,r){this.v=e,this.B=t,this.c=n,this.a=a,this.s=r||"BESbswy",this.f={},this.w=o||3e3,this.u=i||null,this.m=this.j=this.h=this.g=null,this.g=new k(this.c,this.s),this.h=new k(this.c,this.s),this.j=new k(this.c,this.s),this.m=new k(this.c,this.s),e=z(e=new S(this.a.c+",serif",O(this.a))),this.g.a.style.cssText=e,e=z(e=new S(this.a.c+",sans-serif",O(this.a))),this.h.a.style.cssText=e,e=z(e=new S("serif",O(this.a))),this.j.a.style.cssText=e,e=z(e=new S("sans-serif",O(this.a))),this.m.a.style.cssText=e,P(this.g),P(this.h),P(this.j),P(this.m)}_.prototype.c=function(e){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},L.prototype.start=function(){var e=this.c.o.document,t=this,n=l(),a=new Promise((function(a,o){!function i(){l()-n>=t.f?o():e.fonts.load(function(e){return H(e)+" "+e.f+"00 300px "+j(e.c)}(t.a),t.h).then((function(e){1<=e.length?a():setTimeout(i,25)}),(function(){o()}))}()})),o=null,i=new Promise((function(e,n){o=setTimeout(n,t.f)}));Promise.race([i,a]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var A={D:"serif",C:"sans-serif"},R=null;function W(){if(null===R){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);R=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return R}function B(e,t,n){for(var a in A)if(A.hasOwnProperty(a)&&t===e.f[A[a]]&&n===e.f[A[a]])return!0;return!1}function I(e,t){setTimeout(r((function(){h(this.g.a),h(this.h.a),h(this.j.a),h(this.m.a),t(this.a)}),e),0)}function M(e,t,n){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=n}N.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=l(),function e(t){var n,a=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(n=a===t.f.serif&&o===t.f["sans-serif"])||(n=W()&&B(t,a,o)),n?l()-t.A>=t.w?W()&&B(t,a,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?I(t,t.v):I(t,t.B):function(t){setTimeout(r((function(){e(this)}),t),50)}(t):I(t,t.v)}(this)};var D=null;function G(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&d(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),C(e,"active")):F(e.a))}function q(e){this.j=e,this.a=new x,this.h=0,this.f=this.g=!0}function $(e,t,n,a,o){var i=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,l=a||{};if(0===n.length&&i)F(t.a);else{t.f+=n.length,i&&(t.j=i);var s,c=[];for(s=0;s<n.length;s++){var u=n[s],f=l[u.c],h=t.a,g=u;if(h.g&&d(h.f,[h.a.c("wf",g.c,O(g).toString(),"loading")]),C(h,"fontloading",g),h=null,null===D)if(window.FontFace){g=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var p=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);D=g?42<parseInt(g[1],10):!p}else D=!1;h=D?new L(r(t.g,t),r(t.h,t),t.c,u,t.s,f):new N(r(t.g,t),r(t.h,t),t.c,u,t.s,e,f),c.push(h)}for(s=0;s<c.length;s++)c[s].start()}}),0)}function J(e,t){this.c=e,this.a=t}function U(e,t){this.c=e,this.a=t}function K(e,t){this.c=e||V,this.a=[],this.f=[],this.g=t||""}M.prototype.g=function(e){var t=this.a;t.g&&d(t.f,[t.a.c("wf",e.c,O(e).toString(),"active")],[t.a.c("wf",e.c,O(e).toString(),"loading"),t.a.c("wf",e.c,O(e).toString(),"inactive")]),C(t,"fontactive",e),this.m=!0,G(this)},M.prototype.h=function(e){var t=this.a;if(t.g){var n=g(t.f,t.a.c("wf",e.c,O(e).toString(),"active")),a=[],o=[t.a.c("wf",e.c,O(e).toString(),"loading")];n||a.push(t.a.c("wf",e.c,O(e).toString(),"inactive")),d(t.f,a,o)}C(t,"fontinactive",e),G(this)},q.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,n){var a=[],o=n.timeout;!function(e){e.g&&d(e.f,[e.a.c("wf","loading")]),C(e,"loading")}(t),a=function(e,t,n){var a,o=[];for(a in t)if(t.hasOwnProperty(a)){var i=e.c[a];i&&o.push(i(t[a],n))}return o}(e.a,n,e.c);var i=new M(e.c,t,o);for(e.h=a.length,t=0,n=a.length;t<n;t++)a[t].load((function(t,n,a){$(e,i,t,n,a)}))}(this,new E(this.c,e),e)},J.prototype.load=function(e){var t=this,n=t.a.projectId,a=t.a.version;if(n){var o=t.c.o;b(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(a?"?v="+a:""),(function(a){a?e([]):(o["__MonotypeConfiguration__"+n]=function(){return t.a},function t(){if(o["__mti_fntLst"+n]){var a,i=o["__mti_fntLst"+n](),r=[];if(i)for(var l=0;l<i.length;l++){var s=i[l].fontfamily;null!=i[l].fontStyle&&null!=i[l].fontWeight?(a=i[l].fontStyle+i[l].fontWeight,r.push(new S(s,a))):r.push(new S(s))}e(r)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+n}else e([])},U.prototype.load=function(e){var t,n,a=this.a.urls||[],o=this.a.families||[],i=this.a.testStrings||{},r=new m;for(t=0,n=a.length;t<n;t++)p(this.c,a[t],v(r));var l=[];for(t=0,n=o.length;t<n;t++)if((a=o[t].split(":"))[1])for(var s=a[1].split(","),c=0;c<s.length;c+=1)l.push(new S(a[0],s[c]));else l.push(new S(a[0]));y(r,(function(){e(l,i)}))};var V="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ne={Arimo:!0,Cousine:!0,Tinos:!0};function ae(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new m,n=this.c,a=new K(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var n=t.length,a=0;a<n;a++){var o=t[a].split(":");3==o.length&&e.f.push(o.pop());var i="";2==o.length&&""!=o[1]&&(i=":"),e.a.push(o.join(i))}}(a,o);var i=new X(o);!function(e){for(var t=e.f.length,n=0;n<t;n++){var a=e.f[n].split(":"),o=a[0].replace(/\+/g," "),i=["n4"];if(2<=a.length){var r;if(r=[],l=a[1])for(var l,s=(l=l.split(",")).length,c=0;c<s;c++){var u;if((u=l[c]).match(/^[\w-]+$/))if(null==(f=ee.exec(u.toLowerCase())))u="";else{if(u=null==(u=f[2])||""==u?"n":Z[u],null==(f=f[1])||""==f)f="4";else var f=Y[f]||(isNaN(f)?"4":f.substr(0,1));u=[u,f].join("")}else u="";u&&r.push(u)}0<r.length&&(i=r),3==a.length&&(r=[],0<(a=(a=a[2])?a.split(","):r).length&&(a=Q[a[0]])&&(e.c[o]=a))}for(e.c[o]||(a=Q[o])&&(e.c[o]=a),a=0;a<i.length;a+=1)e.a.push(new S(o,i[a]))}}(i),p(n,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,n=[],a=0;a<t;a++)n.push(e.a[a].replace(/ /g,"+"));return t=e.c+"?family="+n.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(a),v(t)),y(t,(function(){e(i.a,i.c,ne)}))},ae.prototype.load=function(e){var t=this.a.id,n=this.c.o;t?b(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){t=n.Typekit.config.fn;for(var a=[],o=0;o<t.length;o+=2)for(var i=t[o],r=t[o+1],l=0;l<r.length;l++)a.push(new S(i,r[l]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(a)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,n=this.c.o,a=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var o=0,i=n.fonts.length;o<i;++o){var r=n.fonts[o];a.a.push(new S(r.name,T("font-weight:"+r.weight+";font-style:"+r.style)))}e(a.a)},b(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var ie=new q(window);ie.a.c.custom=function(e,t){return new U(t,e)},ie.a.c.fontdeck=function(e,t){return new oe(t,e)},ie.a.c.monotype=function(e,t){return new J(t,e)},ie.a.c.typekit=function(e,t){return new ae(t,e)},ie.a.c.google=function(e,t){return new te(t,e)};var re={load:r(ie.load,ie)};void 0===(a=function(){return re}.call(t,n,t,e))||(e.exports=a)}()},459:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(9),r=n(19),l=n(130),s=n(2),c=n(4),u=n(5),f=function(e){var t,n,f=e=e.parentProps,h=f.attributes,d=f.setAttributes,g=h.headingAlign,p=h.headingColor,b=h.subHeadingColor,m=h.separatorColor,v=h.headingTag,y=h.headFontFamily,w=h.headFontWeight,_=h.headFontSubset,S=h.headFontSizeType,j=h.headFontSize,O=h.headFontSizeMobile,H=h.headFontSizeTablet,T=h.headLineHeightType,E=h.headLineHeight,F=h.headLineHeightMobile,C=h.headLineHeightTablet,x=h.subHeadFontFamily,k=h.subHeadFontWeight,P=h.subHeadFontSubset,z=h.subHeadFontSize,L=h.subHeadFontSizeType,N=h.subHeadFontSizeMobile,A=h.subHeadFontSizeTablet,R=h.subHeadLineHeight,W=h.subHeadLineHeightType,B=h.subHeadLineHeightMobile,I=h.subHeadLineHeightTablet,M=h.separatorWidth,D=h.separatorWidthType,G=h.seperatorStyle,q=h.separatorHeight,$=h.headSpace,J=h.separatorSpace,U=h.headLoadGoogleFonts,K=h.subHeadLoadGoogleFonts;if(!0===U){var V={google:{families:[y+(w?":"+w:"")]}};t=o.a.createElement(l.a,{config:V})}if(!0===K){var X={google:{families:[x+(k?":"+k:"")]}};n=o.a.createElement(l.a,{config:X})}return o.a.createElement("div",null,o.a.createElement(c.BlockControls,{key:"controls"},o.a.createElement(c.AlignmentToolbar,{value:g,onChange:function(e){return d({headingAlign:e})}})),o.a.createElement(c.InspectorControls,null,o.a.createElement(u.PanelBody,{title:Object(s.__)("Advanced Heading","ultimate-addons-for-gutenberg")},o.a.createElement("h2",null,Object(s.__)("Heading","ultimate-addons-for-gutenberg")),o.a.createElement(u.SelectControl,{label:Object(s.__)("Heading Tag","ultimate-addons-for-gutenberg"),value:v,onChange:function(e){d({headingTag:e})},options:[{value:"h1",label:Object(s.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(s.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(s.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(s.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(s.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(s.__)("H6","ultimate-addons-for-gutenberg")}]}),o.a.createElement(r.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:h,setAttributes:d,loadGoogleFonts:{value:U,label:"headLoadGoogleFonts"},fontFamily:{value:y,label:"headFontFamily"},fontWeight:{value:w,label:"headFontWeight"},fontSubset:{value:_,label:"headFontSubset"},fontSizeType:{value:S,label:"headFontSizeType"},fontSize:{value:j,label:"headFontSize"},fontSizeMobile:{value:O,label:"headFontSizeMobile"},fontSizeTablet:{value:H,label:"headFontSizeTablet"},lineHeightType:{value:T,label:"headLineHeightType"},lineHeight:{value:E,label:"headLineHeight"},lineHeightMobile:{value:F,label:"headLineHeightMobile"},lineHeightTablet:{value:C,label:"headLineHeightTablet"}}),o.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Heading Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:p}}))),o.a.createElement(c.ColorPalette,{value:p,onChange:function(e){return d({headingColor:e})},allowReset:!0}),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(s.__)("Sub-Heading","ultimate-addons-for-gutenberg")),o.a.createElement(a.Suspense,{fallback:Object(i.a)()},o.a.createElement(r.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:h,setAttributes:d,loadGoogleFonts:{value:K,label:"subHeadLoadGoogleFonts"},fontFamily:{value:x,label:"subHeadFontFamily"},fontWeight:{value:k,label:"subHeadFontWeight"},fontSubset:{value:P,label:"subHeadFontSubset"},fontSizeType:{value:L,label:"subHeadFontSizeType"},fontSize:{value:z,label:"subHeadFontSize"},fontSizeMobile:{value:N,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:A,label:"subHeadFontSizeTablet"},lineHeightType:{value:W,label:"subHeadLineHeightType"},lineHeight:{value:R,label:"subHeadLineHeight"},lineHeightMobile:{value:B,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:I,label:"subHeadLineHeightTablet"}})),o.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Sub Heading Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:b}}))),o.a.createElement(c.ColorPalette,{value:b,onChange:function(e){return d({subHeadingColor:e})},allowReset:!0})),o.a.createElement(u.PanelBody,{title:Object(s.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(u.SelectControl,{label:Object(s.__)("Style","ultimate-addons-for-gutenberg"),value:G,onChange:function(e){return d({seperatorStyle:e})},options:[{value:"none",label:Object(s.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(s.__)("Solid","ultimate-addons-for-gutenberg")},{value:"double",label:Object(s.__)("Double","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(s.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(s.__)("Dotted","ultimate-addons-for-gutenberg")}]}),"none"!==G&&o.a.createElement(o.a.Fragment,null,o.a.createElement(u.RangeControl,{label:Object(s.__)("Thickness (px)","ultimate-addons-for-gutenberg"),value:q,onChange:function(e){return d({separatorHeight:e})},min:0,max:20,beforeIcon:"",allowReset:!0,initialPosition:3}),o.a.createElement(u.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(s.__)("Size Type","ultimate-addons-for-gutenberg")},o.a.createElement(u.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===D,"aria-pressed":"px"===D,onClick:function(){return d({separatorWidthType:"px"})}},"px"),o.a.createElement(u.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===D,"aria-pressed":"%"===D,onClick:function(){return d({separatorWidthType:"%"})}},"%")),o.a.createElement(u.RangeControl,{label:Object(s.__)("Width","ultimate-addons-for-gutenberg"),value:M,onChange:function(e){return d({separatorWidth:e})},min:0,max:"%"===D?100:500,beforeIcon:"",allowReset:!0,initialPosition:20}),"none"!==G&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Separator Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:m}}))),o.a.createElement(c.ColorPalette,{value:m,onChange:function(e){return d({separatorColor:e})},allowReset:!0})))),o.a.createElement(u.PanelBody,{title:Object(s.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(u.RangeControl,{label:Object(s.__)("Heading Bottom Spacing (px)","ultimate-addons-for-gutenberg"),value:$,onChange:function(e){return d({headSpace:e})},min:0,max:500,beforeIcon:"",allowReset:!0,initialPosition:0}),"none"!==G&&o.a.createElement(u.RangeControl,{label:Object(s.__)("Separator Bottom Spacing (px)","ultimate-addons-for-gutenberg"),value:J,onChange:function(e){return d({separatorSpace:e})},min:0,max:500,beforeIcon:"",allowReset:!0,initialPosition:0}))),o.a.createElement(a.Suspense,{fallback:Object(i.a)()},t,n))};t.default=o.a.memo(f)}}]);