(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{425:function(e,t,a){"use strict";a.r(t);var o=a(31),r=a(1),n=a.n(r),l=a(2),s=a.n(l),c=a(3),i=a(8);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var b=Object(r.lazy)((function(){return Promise.resolve().then(a.t.bind(null,86,7))}));function p(e){var t=e.attributes,a=e.className,l=e.latestPosts,p=e.block_id,d=e.deviceType,m=t.columns,g=t.tcolumns,_=t.mcolumns,f=t.imgPosition,v=t.postsToShow,y=t.autoplay,w=t.pauseOnHover,h=t.transitionSpeed,k=t.infiniteLoop,E=t.arrowSize,N=t.arrowBorderSize,S=t.arrowBorderRadius,O=t.arrowColor,C=t.arrowDots,j=t.equalHeight,B=t.layoutConfig,T=l.length>v?l.slice(0,v):l;function P(e){return n.a.createElement("button",{type:"button","data-role":"none",className:"slick-next slick-arrow","aria-label":"Next",tabIndex:"0",role:"button",style:{borderColor:O,borderRadius:S,borderWidth:N}},c.a.carousel_right)}function I(e){return n.a.createElement("button",{type:"button","data-role":"none",className:"slick-prev slick-arrow","aria-label":"Previous",tabIndex:"0",role:"button",style:{borderColor:O,borderRadius:S,borderWidth:N}},c.a.carousel_left)}var A=j?"uagb-post__carousel_equal-height":"",x={slidesToShow:m,slidesToScroll:1,autoplaySpeed:2e3,autoplay:y,infinite:k,pauseOnHover:w,speed:h,arrows:"arrows"==C||"arrows_dots"==C,dots:"dots"==C||"arrows_dots"==C,rtl:!1,afterChange:function(e){j&&uagb_carousel_height(p)},nextArrow:n.a.createElement(P,{arrowSize:E}),prevArrow:n.a.createElement(I,{arrowSize:E}),responsive:[{breakpoint:1024,settings:{slidesToShow:g,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:_,slidesToScroll:1}}]},L=T.map((function(t,a){return n.a.createElement("article",{key:a},n.a.createElement("div",{className:"uagb-post__inner-wrap"},Object(o.e)("uagb/post-carousel",t,B,e.attributes,e.categoriesList)))}));return m>=T.length?n.a.createElement("div",{className:s()(a,"uagb-post-grid","uagb-post__arrow-outside","uagb-post__image-position-".concat(f),"".concat(A),"uagb-editor-preview-mode-".concat(d.toLowerCase()),"uagb-block-".concat(p)),"data-blog-id":p},n.a.createElement("div",{className:s()("is-carousel","uagb-post__columns-".concat(m),"uagb-post__columns-tablet-".concat(g),"uagb-post__columns-mobile-".concat(_),"uagb-post__items")},n.a.createElement(o.b,{parentName:"uagb/post-carousel",parentClassName:"uagb-block-grid"},L))):n.a.createElement("div",{className:s()(a,"uagb-post-grid","uagb-post__arrow-outside","uagb-slick-carousel","uagb-post__image-position-".concat(f),"".concat(A),"uagb-block-".concat(p)),"data-blog-id":p,style:"dots"==C?{padding:"0 0 35px 0"}:{}},n.a.createElement(r.Suspense,{fallback:Object(i.a)()},n.a.createElement(b,u({className:s()("is-carousel","uagb-post__columns-".concat(m),"uagb-post__items")},x),L)))}var d=n.a.memo(p),m=a(0),g=a(11),_=a(5),f=a(6);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=e[a];return o}var y=function(e){var t,a=e,r=a.state,l=a.setState,s=a.togglePreview,c=e=e.parentProps,i=c.attributes,u=c.categoriesList,b=c.latestPosts,p=c.deviceType,y=n.a.createElement(_.Disabled,null,n.a.createElement(d,{attributes:i,className:e.className,latestPosts:b,block_id:e.clientId.substr(0,8),categoriesList:u,deviceType:p}));return n.a.createElement(n.a.Fragment,null,r.isEditing?(t={template:e.attributes.layoutConfig,templateLock:!1,allowedBlocks:Object.keys(Object(o.c)("uagb/post-grid"))},0!==e.attributes.layoutConfig.length&&(t.renderAppender=!1),n.a.createElement(_.Placeholder,{label:"Post Carousel Layout"},n.a.createElement("div",{className:"uagb-block-all-post-grid-item-template"},n.a.createElement(_.Tip,null,Object(m.__)("Edit the blocks inside the preview below to change the content displayed for each post within the post carousel.")),n.a.createElement(o.b,{parentName:"uagb/post-grid",parentClassName:"uagb-block-grid"},n.a.createElement("article",null,n.a.createElement("div",{className:"uagb-post__inner-wrap uagb-post__edit-mode"},n.a.createElement("div",{className:"uagb-post__text"},n.a.createElement(f.InnerBlocks,t))))),n.a.createElement("div",{className:"uagb-block-all-post__actions"},n.a.createElement(_.Button,{className:"uagb-block-all-post__done-button",isPrimary:!0,onClick:function(){var t=e,a=t.block;(0,t.setAttributes)({layoutConfig:Object(o.d)(a)}),l({innerBlocks:a}),s()}},Object(m.__)("Done")),n.a.createElement(_.Button,{className:"uagb-block-all-post__cancel-button",isTertiary:!0,onClick:function(){var t=e.replaceInnerBlocks,a=r.innerBlocks;t(e.clientId,a),s()}},Object(m.__)("Cancel")),n.a.createElement(_.Button,{className:"uagb-block-all-post__reset-button",onClick:function(){var t=e,a=t.block,r=t.replaceInnerBlocks,n=[];o.a.map((function(e){var t,a,o=(a=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var a=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=a){var o,r,n=[],l=!0,s=!1;try{for(a=a.call(e);!(l=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);l=!0);}catch(e){s=!0,r=e}finally{try{l||null==a.return||a.return()}finally{if(s)throw r}}return n}}(t,a)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?v(e,t):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],l=o[1];return n.push(Object(g.createBlock)(r,l)),!0})),r(e.clientId,n),l({innerBlocks:a})}},Object(m.__)("Reset Layout")))))):y)};t.default=n.a.memo(y)}}]);