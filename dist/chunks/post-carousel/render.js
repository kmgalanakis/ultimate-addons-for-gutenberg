(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{208:function(e,t,r){"use strict";r.d(t,"b",(function(){return v})),r.d(t,"a",(function(){return h})),r.d(t,"e",(function(){return w})),r.d(t,"c",(function(){return N})),r.d(t,"d",(function(){return j}));var a=r(57),n=r(61),o=r(58),c=r(60),l=r(59);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var d=wp.element,f=d.createContext,g=(d.useContext,d.Suspense),y=f({parentName:"",parentClassName:"",isLoading:!1}),v=function(e){var t=e.parentName,r=void 0===t?"":t,a=e.parentClassName,n=void 0===a?"":a,o=e.children,c={parentName:r,parentClassName:n};return React.createElement(y.Provider,{value:c},o)},h=[["uagb/post-image"],["uagb/post-title"],["uagb/post-meta"],["uagb/post-excerpt"],["uagb/post-button"]],w=function e(t,r,a,n,o){if(a){var c=N(t);return a.map((function(a,l){var i,s,u=(s=2,function(e){if(Array.isArray(e))return e}(i=a)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var a,n,o=[],c=!0,l=!1;try{for(r=r.call(e);!(c=(a=r.next()).done)&&(o.push(a.value),!t||o.length!==t);c=!0);}catch(e){l=!0,n=e}finally{try{c||null==r.return||r.return()}finally{if(l)throw n}}return o}}(i,s)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}(i,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),b=u[0],d=u[1],f=void 0===d?{}:d;f.children&&f.children.length>0&&e(t,r,f.children,n,o);var y=c[b];return y?React.createElement(g,{fallback:React.createElement("div",{className:"wc-block-placeholder"})},React.createElement(y,p({},f,{post:r,attributes:n,categoriesList:o}))):null}))}},_={};function k(e){e.context||(e.context="any"),E(e,"context","string"),E(e,"blockName","string"),O(e,"component");var t=e.context,r=e.blockName,a=e.component;_[t]||(_[t]={}),_[t][r]=a}var O=function(e,t){if(e[t]){if("function"==typeof e[t])return;if(e[t].$$typeof&&e[t].$$typeof===Symbol.for("react.lazy"))return}throw new Error("Incorrect value for the ".concat(t," argument when registering a block component. Component must be a valid React Element or Lazy callback."))},E=function(e,t,r){var a=b(e[t]);if(a!==r)throw new Error("Incorrect value for the ".concat(t," argument when registering a block component. It was a ").concat(a,", but must be a ").concat(r,"."))};k({blockName:"uagb/post-title",component:a.a}),k({blockName:"uagb/post-image",component:o.a}),k({blockName:"uagb/post-meta",component:n.a}),k({blockName:"uagb/post-excerpt",component:c.a}),k({blockName:"uagb/post-button",component:l.a});var N=function(e){return s(s({},"object"===b(_[t=e])&&Object.keys(_[t]).length>0?_[t]:{}),_.any);var t},j=function e(t){return t&&0!==t.length?t.map((function(t){return[t.name,s(s({},t.attributes),{},{post:void 0,children:t.innerBlocks.length>0?e(t.innerBlocks):[]})]})):[]}},438:function(e,t,r){"use strict";r.r(t);var a=r(208),n=r(2),o=r.n(n),c=r(3),l=r.n(c),i=r(4),s=r(9);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var b=Object(n.lazy)((function(){return Promise.resolve().then(r.t.bind(null,76,7))}));function p(e){var t=e.attributes,r=e.className,c=e.latestPosts,p=e.block_id,m=e.deviceType,d=t.columns,f=t.tcolumns,g=t.mcolumns,y=t.imgPosition,v=t.postsToShow,h=t.autoplay,w=t.pauseOnHover,_=t.transitionSpeed,k=t.infiniteLoop,O=t.arrowSize,E=t.arrowBorderSize,N=t.arrowBorderRadius,j=t.arrowColor,S=t.arrowDots,C=t.equalHeight,P=t.layoutConfig,x=c.length>v?c.slice(0,v):c;function I(e){return o.a.createElement("button",{type:"button","data-role":"none",className:"slick-next slick-arrow","aria-label":"Next",tabIndex:"0",role:"button",style:{borderColor:j,borderRadius:N,borderWidth:E}},i.a.carousel_right)}function A(e){return o.a.createElement("button",{type:"button","data-role":"none",className:"slick-prev slick-arrow","aria-label":"Previous",tabIndex:"0",role:"button",style:{borderColor:j,borderRadius:N,borderWidth:E}},i.a.carousel_left)}var B=C?"uagb-post__carousel_equal-height":"",T={slidesToShow:d,slidesToScroll:1,autoplaySpeed:2e3,autoplay:h,infinite:k,pauseOnHover:w,speed:_,arrows:"arrows"==S||"arrows_dots"==S,dots:"dots"==S||"arrows_dots"==S,rtl:!1,afterChange:function(e){C&&uagb_carousel_height(p)},nextArrow:o.a.createElement(I,{arrowSize:O}),prevArrow:o.a.createElement(A,{arrowSize:O}),responsive:[{breakpoint:1024,settings:{slidesToShow:f,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:g,slidesToScroll:1}}]},L=x.map((function(t,r){return o.a.createElement("article",{key:r},o.a.createElement("div",{className:"uagb-post__inner-wrap"},Object(a.e)("uagb/post-carousel",t,P,e.attributes,e.categoriesList)))}));return d>=x.length?o.a.createElement("div",{className:l()(r,"uagb-post-grid","uagb-post__arrow-outside","uagb-post__image-position-".concat(y),"".concat(B),"uagb-editor-preview-mode-".concat(m.toLowerCase()),"uagb-block-".concat(p)),"data-blog-id":p},o.a.createElement("div",{className:l()("is-carousel","uagb-post__columns-".concat(d),"uagb-post__columns-tablet-".concat(f),"uagb-post__columns-mobile-".concat(g),"uagb-post__items")},o.a.createElement(a.b,{parentName:"uagb/post-carousel",parentClassName:"uagb-block-grid"},L))):o.a.createElement("div",{className:l()(r,"uagb-post-grid","uagb-post__arrow-outside","uagb-slick-carousel","uagb-post__image-position-".concat(y),"".concat(B),"uagb-block-".concat(p)),"data-blog-id":p,style:"dots"==S?{padding:"0 0 35px 0"}:{}},o.a.createElement(n.Suspense,{fallback:Object(s.a)()},o.a.createElement(b,u({className:l()("is-carousel","uagb-post__columns-".concat(d),"uagb-post__items")},T),L)))}var m=o.a.memo(p),d=r(0),f=r(11),g=r(5),y=r(6);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var h=function(e){var t,r=e,n=r.state,c=r.setState,l=r.togglePreview,i=e=e.parentProps,s=i.attributes,u=i.categoriesList,b=i.latestPosts,p=i.deviceType,h=o.a.createElement(g.Disabled,null,o.a.createElement(m,{attributes:s,className:e.className,latestPosts:b,block_id:e.clientId.substr(0,8),categoriesList:u,deviceType:p}));return o.a.createElement(o.a.Fragment,null,n.isEditing?(t={template:e.attributes.layoutConfig,templateLock:!1,allowedBlocks:Object.keys(Object(a.c)("uagb/post-grid"))},0!==e.attributes.layoutConfig.length&&(t.renderAppender=!1),o.a.createElement(g.Placeholder,{label:"Post Carousel Layout"},o.a.createElement("div",{className:"uagb-block-all-post-grid-item-template"},o.a.createElement(g.Tip,null,Object(d.__)("Edit the blocks inside the preview below to change the content displayed for each post within the post carousel.")),o.a.createElement(a.b,{parentName:"uagb/post-grid",parentClassName:"uagb-block-grid"},o.a.createElement("article",null,o.a.createElement("div",{className:"uagb-post__inner-wrap uagb-post__edit-mode"},o.a.createElement("div",{className:"uagb-post__text"},o.a.createElement(y.InnerBlocks,t))))),o.a.createElement("div",{className:"uagb-block-all-post__actions"},o.a.createElement(g.Button,{className:"uagb-block-all-post__done-button",isPrimary:!0,onClick:function(){var t=e,r=t.block;(0,t.setAttributes)({layoutConfig:Object(a.d)(r)}),c({innerBlocks:r}),l()}},Object(d.__)("Done")),o.a.createElement(g.Button,{className:"uagb-block-all-post__cancel-button",isTertiary:!0,onClick:function(){var t=e.replaceInnerBlocks,r=n.innerBlocks;t(e.clientId,r),l()}},Object(d.__)("Cancel")),o.a.createElement(g.Button,{className:"uagb-block-all-post__reset-button",onClick:function(){var t=e,r=t.block,n=t.replaceInnerBlocks,o=[];a.a.map((function(e){var t,r,a=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var a,n,o=[],c=!0,l=!1;try{for(r=r.call(e);!(c=(a=r.next()).done)&&(o.push(a.value),!t||o.length!==t);c=!0);}catch(e){l=!0,n=e}finally{try{c||null==r.return||r.return()}finally{if(l)throw n}}return o}}(t,r)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=a[0],c=a[1];return o.push(Object(f.createBlock)(n,c)),!0})),n(e.clientId,o),c({innerBlocks:r})}},Object(d.__)("Reset Layout")))))):h)};t.default=o.a.memo(h)}}]);