(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[85],{260:function(e,t,a){"use strict";var r=a(19),n=a.n(r)()((function(e){return e[1]}));n.push([e.i,'.editor-styles-wrapper [data-type="uagb/review"] .rating-schema-notices {\n  padding: 8px 10px;\n  background-color: #FFF8E5;\n  border-left: 5px solid #FFB901;\n  color: #32373c;\n  font-size: 13px;\n  line-height: 20px; }\n  .editor-styles-wrapper [data-type="uagb/review"] .rating-schema-notices ul {\n    padding-bottom: 0;\n    margin: 0; }\n  .editor-styles-wrapper [data-type="uagb/review"] .rating-schema-notices h6 {\n    margin: 0;\n    font-size: inherit;\n    line-height: inherit; }\n  .editor-styles-wrapper [data-type="uagb/review"] .rating-schema-notices p {\n    margin: 15px 0 0;\n    color: #555d66;\n    font-size: inherit; }\n\n.dashicons.dashicons-plus-alt {\n  left: 50%;\n  width: 100%; }\n\n.dashicons.dashicons-trash {\n  margin-left: 50px; }\n\n.uagb_review_average_stars, .uagb_review_entry .dashicons-trash {\n  float: right; }\n',""]),t.a=n},520:function(e,t,a){"use strict";a.r(t);var r=a(15),n=a.n(r),i=a(4),o=a(2),l=a(142);function u(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?c(e,void 0):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var s,m=function(e){var t=e.ID,a=e.items,r=e.summaryTitle,n=e.summaryDescription,c=e.starCount,s=e.setItems,m=e.setSummaryDescription,g=e.setSummaryTitle,d=e.setTitle,v=e.setDescription,h=e.setAuthorName,f=e.inactiveStarColor,b=e.activeStarColor,p=e.selectedStarColor,y=e.starOutlineColor,_=e.ctaTarget,S=e.ctaLink,w=e.setActiveStarIndex,C=e.rTitle,E=e.rContent,N=e.rAuthor,T=e.headingTag,R=e.image_icon_html,A=e.showfeature,O=e.imageEnabled,k=e.descriptionEnabled,I=e.showauthor,j=e.state.average,x=a.map((function(e){return e.value})).reduce((function(e,t){return e+t}))/a.length;j!==x&&e.setStateValue({average:x});var D="_self";return _&&(D="_blank"),React.createElement("div",{className:"uagb_review_block"},React.createElement("a",{href:S,className:"uagb-rating-link-wrapper",target:D,rel:"noopener noreferrer"},React.createElement(i.RichText,{tagName:T,placeholder:Object(o.__)("Title of the review","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:C,className:"uagb-rating-title",onChange:function(e){return d(e)}})),!0===k&&React.createElement(i.RichText,{tagName:"p",placeholder:Object(o.__)("Review Description","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:E,className:"uagb-rating-desc",onChange:function(e){return v(e)}}),!0===I&&React.createElement(i.RichText,{tagName:"p",placeholder:Object(o.__)("Review Author","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:N,className:"uagb-rating-author",onChange:function(e){return h(e)}}),!0===O&&React.createElement("div",{className:"uagb-rating__source-wrap"},R),a.map((function(r,n){return!0===A&&React.createElement("div",{className:"uagb_review_entry",key:n},React.createElement(i.RichText,{style:{marginRight:"auto"},placeholder:Object(o.__)("Edit feature"),value:r.label,onChange:function(e){return s([].concat(u(a.slice(0,n)),[{label:e,value:r.value}],u(a.slice(n+1))))}}),React.createElement("div",{style:{marginLeft:"auto",minWidth:a.length>1?120:100}},a.length>1&&React.createElement("div",{className:"dashicons dashicons-trash",onClick:function(){var t=a.slice(0,n).concat(a.slice(n+1,a.length));s(t),e.setStateValue({average:t.map((function(e){return e.value})).reduce((function(e,t){return e+t}))/t.length})}}),React.createElement(l.a,{id:"".concat(t,"-").concat(n),key:n,value:r.value,limit:c,setValue:function(t){var i=[].concat(u(a.slice(0,n)),[{label:r.label,value:t}],u(a.slice(n+1)));s(i),w(n),e.setStateValue({average:i.map((function(e){return e.value})).reduce((function(e,t){return e+t}))/i.length})},inactiveStarColor:f,activeStarColor:b,selectedStarColor:p,starOutlineColor:y,state:e.starState,setStateValue:e.starSetStateValue})))})),!0===A&&React.createElement("div",{title:Object(o.__)("Insert new review entry"),onClick:function(){s([].concat(u(a),[{label:"",value:0}])),e.setStateValue({average:j/(a.length+1)})},className:"uagb_review_add_entry dashicons dashicons-plus-alt"}),React.createElement("div",{className:"uagb_review_summary"},React.createElement(i.RichText,{className:"uagb_review_summary_title",placeholder:Object(o.__)("Title of the summary goes here","ultimate-addons-for-gutenberg"),tagName:"p",onChange:function(e){return g(e)},value:r}),React.createElement("div",{className:"uagb_review_overall_value"},React.createElement(i.RichText,{placeholder:Object(o.__)("Summary of the review goes here","ultimate-addons-for-gutenberg"),onChange:function(e){return m(e)},value:n}),React.createElement("div",{className:"uagb_review_average"},React.createElement("span",{className:"uagb_review_rating"},Math.round(10*j)/10),React.createElement(l.a,{id:"".concat(t,"-average"),className:"uagb_review_average_stars",onHover:function(){return null},onClick:function(){return null},value:j,limit:c,inactiveStarColor:f,activeStarColor:b,selectedStarColor:p,starOutlineColor:y,state:e.starState,setStateValue:e.starSetStateValue})))))},g=a(3),d=a.n(g),v=a(18),h=a.n(v),f=a(260),b=0,p={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},y={};y.locals=f.a.locals||{},y.use=function(){return b++||(s=h()(f.a,p)),y},y.unuse=function(){b>0&&!--b&&(s(),s=null)};var _=y;function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=a){var r,n,i=[],_n=!0,o=!1;try{for(a=a.call(e);!(_n=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);_n=!0);}catch(e){o=!0,n=e}finally{try{_n||null==a.return||a.return()}finally{if(o)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?w(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var C=function(e){Object(g.useLayoutEffect)((function(){return _.use(),function(){_.unuse()}}),[]);var t=e=e.parentProps,a=t.attributes,r=a.block_id,i=a.authorName,o=a.itemName,l=a.description,u=a.parts,c=a.starCount,s=a.summaryTitle,v=a.summaryDescription,h=a.inactiveStarColor,f=a.activeStarColor,b=a.ctaLink,p=a.ctaTarget,y=a.rTitle,w=a.rContent,C=a.rAuthor,E=a.headingTag,N=a.mainimage,T=a.imgSize,R=a.showFeature,A=a.showAuthor,O=a.starOutlineColor,k=a.enableDescription,I=a.enableImage,j=t.setAttributes,x=t.isSelected,D=t.className,V={average:e.attributes.parts.map((function(e){return e.value})).reduce((function(e,t){return e+t}))/e.attributes.parts.length},F=S(Object(g.useState)(V),2),z=F[0],L=F[1],P={displayValue:e.value,displayColor:e.activeStarColor},M=S(Object(g.useState)(P),2),U=M[0],H=M[1],J="",$="";void 0!==e.attributes.mainimage&&null!==e.attributes.mainimage&&""!==e.attributes.mainimage&&(J=e.attributes.mainimage.url,$=e.attributes.mainimage.title);var B="";if(""!==J){var W=e.attributes.mainimage.sizes,q=e.attributes.imgSize;B=void 0!==W&&void 0!==W[q]?W[q].url:J}var G="";return N&&N.url&&(G=d.a.createElement("img",{className:"uagb-review__source-image",src:B,title:$})),d.a.createElement("div",{className:n()(D,"uagb-ratings__outer-wrap","uagb-block-".concat(r.substr(0,8)))},d.a.createElement(m,{rTitle:y,setTitle:function(e){return j({rTitle:e})},ctaLink:b,ctaTarget:p,rContent:w,setDescription:function(e){return j({rContent:e})},rAuthor:C,setAuthorName:function(e){return j({rAuthor:e})},headingTag:E,mainimage:N,imgSize:T,imageIconHtml:G,isSelected:x,authorName:i,itemName:o,description:l,descriptionEnabled:k,ID:r,imageEnabled:I,items:u,starCount:c,summaryTitle:s,summaryDescription:v,inactiveStarColor:h,activeStarColor:f,selectedStarColor:f,starOutlineColor:O,setItemName:function(e){return j({itemName:e})},setImage:function(e){return j({imgID:e.id,imgURL:e.url,imgAlt:e.alt})},setItems:function(e){return j({parts:e})},setSummaryTitle:function(e){return j({summaryTitle:e})},setSummaryDescription:function(e){return j({summaryDescription:e})},hasFocus:x,setEditable:function(e){return L({editable:e})},setActiveStarIndex:function(e){return L({editedStar:e})},showfeature:R,showauthor:A,state:z,setStateValue:L,starState:U,starSetStateValue:H}))};t.default=d.a.memo(C)}}]);