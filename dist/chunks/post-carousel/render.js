(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[70],{30:function(t,e,o){"use strict";o.d(e,"b",(function(){return _})),o.d(e,"a",(function(){return y})),o.d(e,"e",(function(){return h})),o.d(e,"c",(function(){return j})),o.d(e,"d",(function(){return N}));var a=o(78),n=o(81),r=o(79),i=o(56),l=o(80);function c(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(Object(o),!0).forEach((function(e){u(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function u(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t}).apply(this,arguments)}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,a=new Array(e);o<e;o++)a[o]=t[o];return a}var g=wp.element,m=g.createContext,f=(g.useContext,g.Suspense),w=m({parentName:"",parentClassName:"",isLoading:!1}),_=function(t){var e=t.parentName,o=void 0===e?"":e,a=t.parentClassName,n=void 0===a?"":a,r=t.children,i={parentName:o,parentClassName:n};return React.createElement(w.Provider,{value:i},r)},y=[["uagb/post-image"],["uagb/post-title"],["uagb/post-meta"],["uagb/post-excerpt"],["uagb/post-button"]],h=function t(e,o,a,n,r){if(a){var i=j(e);return a.map((function(a,l){var c,s,u=(s=2,function(t){if(Array.isArray(t))return t}(c=a)||function(t,e){var o=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=o){var a,n,r=[],_n=!0,i=!1;try{for(o=o.call(t);!(_n=(a=o.next()).done)&&(r.push(a.value),!e||r.length!==e);_n=!0);}catch(t){i=!0,n=t}finally{try{_n||null==o.return||o.return()}finally{if(i)throw n}}return r}}(c,s)||function(t,e){if(t){if("string"==typeof t)return d(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?d(t,e):void 0}}(c,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),b=u[0],g=u[1],m=void 0===g?{}:g;m.children&&m.children.length>0&&t(e,o,m.children,n,r);var w=i[b];return w?React.createElement(f,{fallback:React.createElement("div",{className:"wc-block-placeholder"})},React.createElement(w,p({},m,{post:o,attributes:n,categoriesList:r}))):null}))}},v={};function k(t){t.context||(t.context="any"),E(t,"context","string"),E(t,"blockName","string"),O(t,"component");var e=t.context,o=t.blockName,a=t.component;v[e]||(v[e]={}),v[e][o]=a}var O=function(t,e){if(t[e]){if("function"==typeof t[e])return;if(t[e].$$typeof&&t[e].$$typeof===Symbol.for("react.lazy"))return}throw new Error("Incorrect value for the ".concat(e," argument when registering a block component. Component must be a valid React Element or Lazy callback."))},E=function(t,e,o){var a=b(t[e]);if(a!==o)throw new Error("Incorrect value for the ".concat(e," argument when registering a block component. It was a ").concat(a,", but must be a ").concat(o,"."))};k({blockName:"uagb/post-title",component:a.a}),k({blockName:"uagb/post-image",component:r.a}),k({blockName:"uagb/post-meta",component:n.a}),k({blockName:"uagb/post-excerpt",component:i.a}),k({blockName:"uagb/post-button",component:l.a});var j=function(t){return s(s({},"object"===b(v[e=t])&&Object.keys(v[e]).length>0?v[e]:{}),v.any);var e},N=function t(e){return e&&0!==e.length?e.map((function(e){return[e.name,s(s({},e.attributes),{},{post:void 0,children:e.innerBlocks.length>0?t(e.innerBlocks):[]})]})):[]}},51:function(t,e,o){"use strict";var a,n=o(18),r=o.n(n),i=o(52),l=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},s={};s.locals=i.a.locals||{},s.use=function(){return l++||(a=r()(i.a,c)),s},s.unuse=function(){l>0&&!--l&&(a(),a=null)},e.a=s},52:function(t,e,o){"use strict";var a=o(19),n=o.n(a)()((function(t){return t[1]}));n.push([t.i,"/**\n * Editor styles for the admin\n */\n.uagb-post-grid h2 a {\n  text-decoration: none; }\n\n.uagb-post-grid a {\n  cursor: default;\n  pointer-events: none; }\n\n.uagb-post-grid .uagb-post__load-more-wrap {\n  width: 100%; }\n  .uagb-post-grid .uagb-post__load-more-wrap .uagb-post-pagination-button {\n    cursor: pointer; }\n  .uagb-post-grid .uagb-post__load-more-wrap a {\n    color: inherit; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-1 article {\n  width: 100%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-2 article {\n  width: 50%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-3 article {\n  width: 33.2%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-4 article {\n  width: 25%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-5 article {\n  width: 20%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-6 article {\n  width: 16.66%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-7 article {\n  width: 14.28%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-8 article {\n  width: 12.5%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-1 article {\n  width: 100%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-2 article {\n  width: 50%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-3 article {\n  width: 33.2%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-4 article {\n  width: 25%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-5 article {\n  width: 20%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-6 article {\n  width: 16.66%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-tablet-7 article {\n  width: 14.28%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-tablet-8 article {\n  width: 12.5%; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .slick-dots button {\n  color: transparent; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-post__image-position-background .uagb-post__image img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: auto;\n  height: auto;\n  max-width: none;\n  min-width: 100%;\n  min-height: 100%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n",""]),e.a=n},559:function(t,e,o){"use strict";o.r(e);var a=o(30),n=o(3),r=o.n(n),i=o(15),l=o.n(i),c=o(16);function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t}).apply(this,arguments)}var u=Object(n.lazy)((function(){return o.e(1).then(o.t.bind(null,518,7))}));function b(t){var e=t.attributes,o=t.className,i=t.latestPosts,b=t.block_id,p=t.deviceType,d=e.columns,g=e.tcolumns,m=e.mcolumns,f=e.imgPosition,w=e.postsToShow,_=e.autoplay,y=e.pauseOnHover,h=e.transitionSpeed,v=e.infiniteLoop,k=e.arrowSize,O=e.arrowBorderSize,E=e.arrowBorderRadius,j=e.arrowColor,N=e.arrowDots,S=e.equalHeight,C=e.layoutConfig,P=i.length>w?i.slice(0,w):i;function x(t){return r.a.createElement("button",{type:"button","data-role":"none",className:"slick-next slick-arrow","aria-label":"Next",tabIndex:"0",role:"button",style:{borderColor:j,borderRadius:E,borderWidth:O}},wp.UAGBBlockIcons.carousel_right)}function B(t){return r.a.createElement("button",{type:"button","data-role":"none",className:"slick-prev slick-arrow","aria-label":"Previous",tabIndex:"0",role:"button",style:{borderColor:j,borderRadius:E,borderWidth:O}},wp.UAGBBlockIcons.carousel_left)}var I=S?"uagb-post__carousel_equal-height":"",A={slidesToShow:d,slidesToScroll:1,autoplaySpeed:2e3,autoplay:_,infinite:v,pauseOnHover:y,speed:h,arrows:"arrows"==N||"arrows_dots"==N,dots:"dots"==N||"arrows_dots"==N,rtl:!1,afterChange:function(t){S&&uagb_carousel_height(b)},nextArrow:r.a.createElement(x,{arrowSize:k}),prevArrow:r.a.createElement(B,{arrowSize:k}),responsive:[{breakpoint:1024,settings:{slidesToShow:g,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:m,slidesToScroll:1}}]},T=P.map((function(e,o){return r.a.createElement("article",{key:o},r.a.createElement("div",{className:"uagb-post__inner-wrap"},Object(a.e)("uagb/post-carousel",e,C,t.attributes,t.categoriesList)))}));return d>=P.length?r.a.createElement("div",{className:l()(o,"uagb-post-grid","uagb-post__arrow-outside","uagb-post__image-position-".concat(f),"".concat(I),"uagb-editor-preview-mode-".concat(p.toLowerCase()),"uagb-block-".concat(b)),"data-blog-id":b},r.a.createElement("div",{className:l()("is-carousel","uagb-post__columns-".concat(d),"uagb-post__columns-tablet-".concat(g),"uagb-post__columns-mobile-".concat(m),"uagb-post__items")},r.a.createElement(a.b,{parentName:"uagb/post-carousel",parentClassName:"uagb-block-grid"},T))):r.a.createElement("div",{className:l()(o,"uagb-post-grid","uagb-post__arrow-outside","uagb-slick-carousel","uagb-post__image-position-".concat(f),"".concat(I),"uagb-block-".concat(b)),"data-blog-id":b,style:"dots"==N?{padding:"0 0 35px 0"}:{}},r.a.createElement(n.Suspense,{fallback:Object(c.a)()},r.a.createElement(u,s({className:l()("is-carousel","uagb-post__columns-".concat(d),"uagb-post__items")},A),T)))}var p=r.a.memo(b),d=o(2),g=o(0),m=o(5),f=o(4),w=o(51);function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,a=new Array(e);o<e;o++)a[o]=t[o];return a}var y=function(t){Object(n.useLayoutEffect)((function(){return w.a.use(),function(){w.a.unuse()}}),[]);var e,o=t,i=o.state,l=o.setState,c=o.togglePreview,s=t=t.parentProps,u=s.attributes,b=s.categoriesList,y=s.latestPosts,h=s.deviceType,v=r.a.createElement(m.Disabled,null,r.a.createElement(p,{attributes:u,className:t.className,latestPosts:y,block_id:t.clientId.substr(0,8),categoriesList:b,deviceType:h}));return r.a.createElement(r.a.Fragment,null,i.isEditing?(e={template:t.attributes.layoutConfig,templateLock:!1,allowedBlocks:Object.keys(Object(a.c)("uagb/post-grid"))},0!==t.attributes.layoutConfig.length&&(e.renderAppender=!1),r.a.createElement(m.Placeholder,{label:"Post Carousel Layout"},r.a.createElement("div",{className:"uagb-block-all-post-grid-item-template"},r.a.createElement(m.Tip,null,Object(d.__)("Edit the blocks inside the preview below to change the content displayed for each post within the post carousel.")),r.a.createElement(a.b,{parentName:"uagb/post-grid",parentClassName:"uagb-block-grid"},r.a.createElement("article",null,r.a.createElement("div",{className:"uagb-post__inner-wrap uagb-post__edit-mode"},r.a.createElement("div",{className:"uagb-post__text"},r.a.createElement(f.InnerBlocks,e))))),r.a.createElement("div",{className:"uagb-block-all-post__actions"},r.a.createElement(m.Button,{className:"uagb-block-all-post__done-button",isPrimary:!0,onClick:function(){var e=t,o=e.block;(0,e.setAttributes)({layoutConfig:Object(a.d)(o)}),l({innerBlocks:o}),c()}},Object(d.__)("Done")),r.a.createElement(m.Button,{className:"uagb-block-all-post__cancel-button",isTertiary:!0,onClick:function(){var e=t.replaceInnerBlocks,o=i.innerBlocks;e(t.clientId,o),c()}},Object(d.__)("Cancel")),r.a.createElement(m.Button,{className:"uagb-block-all-post__reset-button",onClick:function(){var e=t,o=e.block,n=e.replaceInnerBlocks,r=[];a.a.map((function(t){var e,o,a=(o=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var o=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=o){var a,n,r=[],_n=!0,i=!1;try{for(o=o.call(t);!(_n=(a=o.next()).done)&&(r.push(a.value),!e||r.length!==e);_n=!0);}catch(t){i=!0,n=t}finally{try{_n||null==o.return||o.return()}finally{if(i)throw n}}return r}}(e,o)||function(t,e){if(t){if("string"==typeof t)return _(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_(t,e):void 0}}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=a[0],i=a[1];return r.push(Object(g.createBlock)(n,i)),!0})),n(t.clientId,r),l({innerBlocks:o})}},Object(d.__)("Reset Layout")))))):v)};e.default=r.a.memo(y)}}]);