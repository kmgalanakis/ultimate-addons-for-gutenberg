(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{433:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),i=a(50),l=a(37),c=a(32),s=a(33),o=a(270),m=a(0),u=React.memo((function(e){var t=e.attributes.headingTag,a=e.post,n="_self";return e.attributes.linkTarget&&(n="_blank"),React.createElement("div",{className:"uagb-timeline__heading-text"},React.createElement(t,{className:"uagb-timeline__heading"},React.createElement("a",{href:a.link,target:n,rel:"noopener noreferrer"},Object(o.decodeEntities)(a.title.rendered.trim())||Object(m.__)("(Untitled)"))))})),d=React.memo((function(e){var t=e.post,a=e.attributes;if(a.displayPostImage&&void 0!==t.uagb_featured_image_src&&a.imageSize&&t.uagb_featured_image_src[a.imageSize]){var n=t.uagb_featured_image_src[a.imageSize],r="_self";return a.linkTarget&&(r="_blank"),React.createElement("div",{className:"uagb-timeline__image"},React.createElement("a",{href:t.link,target:r,rel:"noopener noreferrer",style:{textAlign:a.align}},React.createElement("img",{src:n[0],alt:Object(o.decodeEntities)(t.title.rendered.trim())||__("(Untitled)")})))}return null})),b=React.memo((function(e){var t=e.post,a=e.attributes;if(a.displayPostExcerpt&&void 0!==t.uagb_excerpt){if(a.displayPostExcerpt&&t.uagb_excerpt)var n=t.uagb_excerpt.split(/\s+/).slice(0,a.exerptLength).join(" ");var r="";return a.displayPostLink&&(r=a.contentSpace+"px"),React.createElement("div",{className:"uagb-timeline-desc-content",dangerouslySetInnerHTML:{__html:n},style:{marginBottom:r}})}return null})),_=React.memo((function(e){var t=e.post,a=e.attributes,n="_self";return a.linkTarget&&(n="_blank"),a.displayPostLink?React.createElement("div",{className:"uagb-timeline__link_parent"},React.createElement("a",{className:"uagb-timeline__link",href:t.link,target:n,rel:"noopener noreferrer"},a.readMoreText)):null})),g=React.memo((function(e){var t=e.post,a=e.attributes,n="_self";return a.linkTarget&&(n="_blank"),React.createElement(React.Fragment,null,a.displayPostAuthor&&void 0!==t.uagb_author_info&&React.createElement("div",{className:"uagb-timeline__author"},React.createElement("span",{className:"dashicons-admin-users dashicons"}),React.createElement("a",{className:"uagb-timeline__author-link",target:n,href:t.uagb_author_info.author_link,rel:"noopener noreferrer"},t.uagb_author_info.display_name)))})),p=a(22),f=React.memo((function(e){var t=e.post,a=e.attributes,n=e.dateClass;return React.createElement(React.Fragment,null,a.displayPostDate&&t.date_gmt&&React.createElement("time",{dateTime:Object(p.format)("c",t.date_gmt),className:n,style:{color:a.dateColor}},Object(p.dateI18n)(a.dateFormat,t.date_gmt)))})),R=a(8),v=React.memo((function(e){var t=e.attributes;return React.createElement("div",{className:"uagb-timeline__marker uagb-timeline__out-view-icon"},React.createElement("span",{className:"uagb-timeline__icon-new uagb-timeline__out-view-icon"},Object(R.a)(t.icon)))})),E=a(7);function y(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return h(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?h(e,void 0):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=React.memo((function(e){var t=e=e.parentProps,a=t.attributes,n=t.className,o=t.deviceType,p="";return a.displayPostLink&&(p="uagb_timeline__cta-enable"),React.createElement("div",{className:r.a.apply(void 0,[n,"uagb-timeline__outer-wrap","uagb-timeline__content-wrap","uagb-editor-preview-mode-".concat(o.toLowerCase()),"uagb-block-".concat(e.clientId),p].concat(y(Object(l.a)(e.attributes))))},React.createElement("div",{className:"uagb-timeline__main"},function(){var t=e,a=t.attributes,n=t.latestPosts,r=a.timelinAlignment,l=a.postsToShow,o=a.contentPadding,p=document.getElementById("uagb-timeline-style-"+e.clientId);if(null!=p&&void 0!==p&&(p.innerHTML=Object(i.a)(e)),!Array.isArray(n)||!n.length)return React.createElement(E.Placeholder,{icon:"admin-post",label:uagb_blocks_info.blocks["uagb/post-timeline"].title},Array.isArray(n)?Object(m.__)("No posts found."):React.createElement(E.Spinner,null));var R=n.length>l?n.slice(0,l):n,h=Object(c.a)(e.attributes,0),N=Object(s.a)(e.attributes,0),k=(y(n),!1);return React.createElement("div",{className:"uagb-timeline__days"},R.map((function(t,n){return"center"==r&&(k=!0,h=Object(c.a)(e.attributes,n),N=Object(s.a)(e.attributes,n)),React.createElement("article",{className:"uagb-timeline__field uagb-timeline__field-wrap",key:n},React.createElement("div",{className:h},React.createElement(v,{attributes:a}),React.createElement("div",{className:N},React.createElement("div",{className:"uagb-timeline__events-inner-new"},React.createElement("div",{className:"uagb-timeline__date-hide uagb-timeline__date-inner"},React.createElement(f,{post:t,attributes:a,dateClass:"uagb-timeline__inner-date-new"})),React.createElement(d,{post:t,attributes:a}),React.createElement("div",{className:"uagb-content",style:{padding:o+"px"}},React.createElement(u,{post:t,attributes:a}),React.createElement(g,{post:t,attributes:a}),React.createElement(b,{post:t,attributes:a}),React.createElement(_,{post:t,attributes:a}),React.createElement("div",{className:"uagb-timeline__arrow"})))),k&&React.createElement("div",{className:"uagb-timeline__date-new"},React.createElement(f,{post:t,attributes:a,dateClass:"uagb-timeline__date-new"}))))})))}(),React.createElement("div",{className:"uagb-timeline__line"},React.createElement("div",{className:"uagb-timeline__line__inner"}))))}))}}]);