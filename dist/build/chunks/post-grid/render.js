(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{344:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a.n(r),l=a(9),o=a(14),c=a(0),s=a(40),i=a(47),u=a(341);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var b=Object(r.lazy)((function(){return a.e(27).then(a.bind(null,342))})),m=function(e){var t,a=e.state.isEditing,m=e.parentProps,d=m.attributes,g=m.latestPosts,f=m.categoriesList,y=m.deviceType;return a?n.a.createElement(n.a.Fragment,null,(t={template:e.parentProps.attributes.layoutConfig,templateLock:!1,allowedBlocks:Object.keys(Object(o.c)("uagb/post-grid"))},0!==e.parentProps.attributes.layoutConfig.length&&(t.renderAppender=!1),n.a.createElement(i.Placeholder,{label:"Post Grid Layout"},n.a.createElement("div",{className:"uagb-block-all-post-grid-item-template"},n.a.createElement(i.Tip,null,Object(c.__)("Edit the blocks inside the preview below to change the content displayed for each post within the post grid.")),n.a.createElement(o.b,{parentName:"uagb/post-grid",parentClassName:"uagb-block-grid"},n.a.createElement("article",null,n.a.createElement("div",{className:"uagb-post__inner-wrap uagb-post__edit-mode"},n.a.createElement("div",{className:"uagb-post__text"},n.a.createElement(u.InnerBlocks,t))))),n.a.createElement("div",{className:"uagb-block-all-post__actions"},n.a.createElement(i.Button,{className:"uagb-block-all-post__done-button",isPrimary:!0,onClick:function(){var t=e.parentProps,a=t.block;(0,t.setAttributes)({layoutConfig:Object(o.d)(a)}),e.setStateValue({innerBlocks:a}),e.togglePreview()}},Object(c.__)("Done")),n.a.createElement(i.Button,{className:"uagb-block-all-post__cancel-button",isTertiary:!0,onClick:function(){var t=e.parentProps.replaceInnerBlocks,a=e.state.innerBlocks;t(e.parentProps.clientId,a),e.togglePreview()}},Object(c.__)("Cancel")),n.a.createElement(i.Button,{className:"uagb-block-all-post__reset-button",onClick:function(){var t=e.parentProps,a=t.block,r=t.replaceInnerBlocks,n=[];o.a.map((function(e){var t,a,r=(a=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var a=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=a){var r,n,l=[],o=!0,c=!1;try{for(a=a.call(e);!(o=(r=a.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){c=!0,n=e}finally{try{o||null==a.return||a.return()}finally{if(c)throw n}}return l}}(t,a)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?p(e,t):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=r[0],o=r[1];return n.push(Object(s.createBlock)(l,o)),!0})),r(e.parentProps.clientId,n),e.setStateValue({innerBlocks:a})}},Object(c.__)("Reset Layout"))))))):n.a.createElement(n.a.Fragment,null,n.a.createElement(i.Disabled,null,n.a.createElement(r.Suspense,{fallback:Object(l.a)()},n.a.createElement(b,{attributes:d,className:e.parentProps.className,latestPosts:g,block_id:e.parentProps.clientId.substr(0,8),categoriesList:f,deviceType:y}))))};t.default=n.a.memo(m)}}]);