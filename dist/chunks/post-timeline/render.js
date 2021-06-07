(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[78],{246:function(e,t,a){"use strict";var n=a(19),i=a.n(n)()((function(e){return e[1]}));i.push([e.i,"/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n#wpwrap .edit-post-visual-editor .uagb-timeline__widget a {\n  color: inherit;\n  text-decoration: none; }\n\n#wpwrap .edit-post-visual-editor .uagb-timeline__heading a,\n.gutenberg-editor-page #wpwrap .edit-post-visual-editor a {\n  margin: 0;\n  color: inherit;\n  font-size: inherit; }\n\n#wpwrap .edit-post-visual-editor .uagb-timeline__heading {\n  margin: 0; }\n\n#wpwrap .edit-post-visual-editor a {\n  pointer-events: none; }\n",""]),t.a=i},519:function(e,t,a){"use strict";a.r(t);var n,i=a(15),r=a.n(i),l=a(138),c=a(61),s=a(139),o=a(140),u=a(12),m=a(2),d=React.memo((function(e){var t=e.attributes.headingTag,a=e.post,n="_self";return e.attributes.linkTarget&&(n="_blank"),React.createElement("div",{className:"uagb-timeline__heading-text"},React.createElement(t,{className:"uagb-timeline__heading"},React.createElement("a",{href:a.link,target:n,rel:"noopener noreferrer"},Object(u.decodeEntities)(a.title.rendered.trim())||Object(m.__)("(Untitled)"))))})),_=React.memo((function(e){var t=e.post,a=e.attributes;if(a.displayPostImage&&void 0!==t.uagb_featured_image_src&&a.imageSize&&t.uagb_featured_image_src[a.imageSize]){var n=t.uagb_featured_image_src[a.imageSize],i="_self";return a.linkTarget&&(i="_blank"),React.createElement("div",{className:"uagb-timeline__image"},React.createElement("a",{href:t.link,target:i,rel:"noopener noreferrer",style:{textAlign:a.align}},React.createElement("img",{src:n[0],alt:Object(u.decodeEntities)(t.title.rendered.trim())||__("(Untitled)")})))}return null})),b=React.memo((function(e){var t=e.post,a=e.attributes;if(a.displayPostExcerpt&&void 0!==t.uagb_excerpt){if(a.displayPostExcerpt&&t.uagb_excerpt)var n=t.uagb_excerpt.split(/\s+/).slice(0,a.exerptLength).join(" ");var i="";return a.displayPostLink&&(i=a.contentSpace+"px"),React.createElement("div",{className:"uagb-timeline-desc-content",dangerouslySetInnerHTML:{__html:n},style:{marginBottom:i}})}return null})),g=React.memo((function(e){var t=e.post,a=e.attributes,n="_self";return a.linkTarget&&(n="_blank"),a.displayPostLink?React.createElement("div",{className:"uagb-timeline__link_parent"},React.createElement("a",{className:"uagb-timeline__link",href:t.link,target:n,rel:"noopener noreferrer"},a.readMoreText)):null})),p=React.memo((function(e){var t=e.post,a=e.attributes,n="_self";return a.linkTarget&&(n="_blank"),React.createElement(React.Fragment,null,a.displayPostAuthor&&void 0!==t.uagb_author_info&&React.createElement("div",{className:"uagb-timeline__author"},React.createElement("span",{className:"dashicons-admin-users dashicons"}),React.createElement("a",{className:"uagb-timeline__author-link",target:n,href:t.uagb_author_info.author_link,rel:"noopener noreferrer"},t.uagb_author_info.display_name)))})),f=a(9),v=React.memo((function(e){var t=e.post,a=e.attributes,n=e.dateClass;return React.createElement(React.Fragment,null,a.displayPostDate&&t.date_gmt&&React.createElement("time",{dateTime:Object(f.format)("c",t.date_gmt),className:n,style:{color:a.dateColor}},Object(f.dateI18n)(a.dateFormat,t.date_gmt)))})),R=a(17),E=React.memo((function(e){var t=e.attributes;return React.createElement("div",{className:"uagb-timeline__marker uagb-timeline__out-view-icon"},React.createElement("span",{className:"uagb-timeline__icon-new uagb-timeline__out-view-icon"},Object(R.a)(t.icon)))})),y=a(5),h=a(3),w=a(18),k=a.n(w),N=a(246),j=0,S={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},O={};O.locals=N.a.locals||{},O.use=function(){return j++||(n=k()(N.a,S)),O},O.unuse=function(){j>0&&!--j&&(n(),n=null)};var A=O;function T(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return x(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?x(e,void 0):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=React.memo((function(e){Object(h.useLayoutEffect)((function(){return A.use(),function(){A.unuse()}}),[]);var t=e=e.parentProps,a=t.attributes,n=t.className,i=t.deviceType,u="";return a.displayPostLink&&(u="uagb_timeline__cta-enable"),React.createElement("div",{className:r.a.apply(void 0,[n,"uagb-timeline__outer-wrap","uagb-timeline__content-wrap","uagb-editor-preview-mode-".concat(i.toLowerCase()),"uagb-block-".concat(e.clientId),u].concat(T(Object(c.a)(e.attributes))))},React.createElement("div",{className:"uagb-timeline__main"},function(){var t=e,a=t.attributes,n=t.latestPosts,i=a.timelinAlignment,r=a.postsToShow,c=a.contentPadding,u=document.getElementById("uagb-timeline-style-"+e.clientId);if(null!=u&&void 0!==u&&(u.innerHTML=Object(l.a)(e)),!Array.isArray(n)||!n.length)return React.createElement(y.Placeholder,{icon:"admin-post",label:uagb_blocks_info.blocks["uagb/post-timeline"].title},Array.isArray(n)?Object(m.__)("No posts found."):React.createElement(y.Spinner,null));var f=n.length>r?n.slice(0,r):n,R=Object(s.a)(e.attributes,0),h=Object(o.a)(e.attributes,0),w=(T(n),!1);return React.createElement("div",{className:"uagb-timeline__days"},f.map((function(t,n){return"center"==i&&(w=!0,R=Object(s.a)(e.attributes,n),h=Object(o.a)(e.attributes,n)),React.createElement("article",{className:"uagb-timeline__field uagb-timeline__field-wrap",key:n},React.createElement("div",{className:R},React.createElement(E,{attributes:a}),React.createElement("div",{className:h},React.createElement("div",{className:"uagb-timeline__events-inner-new"},React.createElement("div",{className:"uagb-timeline__date-hide uagb-timeline__date-inner"},React.createElement(v,{post:t,attributes:a,dateClass:"uagb-timeline__inner-date-new"})),React.createElement(_,{post:t,attributes:a}),React.createElement("div",{className:"uagb-content",style:{padding:c+"px"}},React.createElement(d,{post:t,attributes:a}),React.createElement(p,{post:t,attributes:a}),React.createElement(b,{post:t,attributes:a}),React.createElement(g,{post:t,attributes:a}),React.createElement("div",{className:"uagb-timeline__arrow"})))),w&&React.createElement("div",{className:"uagb-timeline__date-new"},React.createElement(v,{post:t,attributes:a,dateClass:"uagb-timeline__date-new"}))))})))}(),React.createElement("div",{className:"uagb-timeline__line"},React.createElement("div",{className:"uagb-timeline__line__inner"}))))}))}}]);