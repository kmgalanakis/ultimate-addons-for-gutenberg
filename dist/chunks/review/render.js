(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{470:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a.n(r),i=a(5),l=a(2),o=a(63);function c(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return u(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(e,void 0):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var s=function(e){var t=e.ID,a=e.items,r=e.summaryTitle,n=e.summaryDescription,u=e.starCount,s=e.setItems,m=e.setSummaryDescription,g=e.setSummaryTitle,d=e.setTitle,v=e.setDescription,h=e.setAuthorName,b=e.inactiveStarColor,f=e.activeStarColor,p=e.selectedStarColor,S=e.starOutlineColor,_=e.ctaTarget,y=e.ctaLink,C=e.setActiveStarIndex,w=e.rTitle,R=e.rContent,N=e.rAuthor,E=e.headingTag,T=e.image_icon_html,A=e.showfeature,k=e.imageEnabled,O=e.descriptionEnabled,I=e.showauthor,D=e.state.average,V=a.map((function(e){return e.value})).reduce((function(e,t){return e+t}))/a.length;D!==V&&e.setStateValue({average:V});var j="_self";return _&&(j="_blank"),React.createElement("div",{className:"uagb_review_block"},React.createElement("a",{href:y,className:"uagb-rating-link-wrapper",target:j,rel:"noopener noreferrer"},React.createElement(i.RichText,{tagName:E,placeholder:Object(l.__)("Title of the review","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:w,className:"uagb-rating-title",onChange:function(e){return d(e)}})),!0===O&&React.createElement(i.RichText,{tagName:"p",placeholder:Object(l.__)("Review Description","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:R,className:"uagb-rating-desc",onChange:function(e){return v(e)}}),!0===I&&React.createElement(i.RichText,{tagName:"p",placeholder:Object(l.__)("Review Author","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:N,className:"uagb-rating-author",onChange:function(e){return h(e)}}),!0===k&&React.createElement("div",{className:"uagb-rating__source-wrap"},T),a.map((function(r,n){return!0===A&&React.createElement("div",{className:"uagb_review_entry",key:n},React.createElement(i.RichText,{style:{marginRight:"auto"},placeholder:Object(l.__)("Edit feature"),value:r.label,onChange:function(e){return s([].concat(c(a.slice(0,n)),[{label:e,value:r.value}],c(a.slice(n+1))))}}),React.createElement("div",{style:{marginLeft:"auto",minWidth:a.length>1?120:100}},a.length>1&&React.createElement("div",{className:"dashicons dashicons-trash",onClick:function(){var t=a.slice(0,n).concat(a.slice(n+1,a.length));s(t),e.setStateValue({average:t.map((function(e){return e.value})).reduce((function(e,t){return e+t}))/t.length})}}),React.createElement(o.a,{id:"".concat(t,"-").concat(n),key:n,value:r.value,limit:u,setValue:function(t){var i=[].concat(c(a.slice(0,n)),[{label:r.label,value:t}],c(a.slice(n+1)));s(i),C(n),e.setStateValue({average:i.map((function(e){return e.value})).reduce((function(e,t){return e+t}))/i.length})},inactiveStarColor:b,activeStarColor:f,selectedStarColor:p,starOutlineColor:S,state:e.starState,setStateValue:e.starSetStateValue})))})),!0===A&&React.createElement("div",{title:Object(l.__)("Insert new review entry"),onClick:function(){s([].concat(c(a),[{label:"",value:0}])),e.setStateValue({average:D/(a.length+1)})},className:"uagb_review_add_entry dashicons dashicons-plus-alt"}),React.createElement("div",{className:"uagb_review_summary"},React.createElement(i.RichText,{className:"uagb_review_summary_title",placeholder:Object(l.__)("Title of the summary goes here","ultimate-addons-for-gutenberg"),tagName:"p",onChange:function(e){return g(e)},value:r}),React.createElement("div",{className:"uagb_review_overall_value"},React.createElement(i.RichText,{placeholder:Object(l.__)("Summary of the review goes here","ultimate-addons-for-gutenberg"),onChange:function(e){return m(e)},value:n}),React.createElement("div",{className:"uagb_review_average"},React.createElement("span",{className:"uagb_review_rating"},Math.round(10*D)/10),React.createElement(o.a,{id:"".concat(t,"-average"),className:"uagb_review_average_stars",onHover:function(){return null},onClick:function(){return null},value:D,limit:u,inactiveStarColor:b,activeStarColor:f,selectedStarColor:p,starOutlineColor:S,state:e.starState,setStateValue:e.starSetStateValue})))))};t.default=React.memo((function(e,t,a,r,i){var l=e=e.parentProps,o=l.attributes,c=l.setAttributes,u=l.isSelected,m=l.className,g=o.block_id,d=o.authorName,v=o.itemName,h=o.description,b=o.parts,f=o.starCount,p=o.summaryTitle,S=o.summaryDescription,_=o.inactiveStarColor,y=o.activeStarColor,C=o.ctaLink,w=o.ctaTarget,R=o.rTitle,N=o.rContent,E=o.rAuthor,T=o.headingTag,A=o.mainimage,k=o.imgSize,O=o.showFeature,I=o.showAuthor,D=o.starOutlineColor,V=o.enableDescription,j=o.enableImage,x="";void 0!==e.attributes.mainimage&&null!==e.attributes.mainimage&&""!==e.attributes.mainimage&&(x=e.attributes.mainimage.url,e.attributes.mainimage.title);if(""!==x){var F=e.attributes.mainimage.sizes,L=e.attributes.imgSize;void 0!==F&&void 0!==F[L]?F[L].url:x}return A&&A.url,React.createElement("div",{className:n()(m,"uagb-ratings__outer-wrap","uagb-block-".concat(g.substr(0,8)))},React.createElement(s,{rTitle:R,setTitle:function(e){return c({rTitle:e})},ctaLink:C,ctaTarget:w,rContent:N,setDescription:function(e){return c({rContent:e})},rAuthor:E,setAuthorName:function(e){return c({rAuthor:e})},headingTag:T,mainimage:A,imgSize:k,imageIconHtml:image_icon_html,isSelected:u,authorName:d,itemName:v,description:h,descriptionEnabled:V,ID:g,imageEnabled:j,items:b,starCount:f,summaryTitle:p,summaryDescription:S,inactiveStarColor:_,activeStarColor:y,selectedStarColor:y,starOutlineColor:D,setItemName:function(e){return c({itemName:e})},setImage:function(e){return c({imgID:e.id,imgURL:e.url,imgAlt:e.alt})},setItems:function(e){return c({parts:e})},setSummaryTitle:function(e){return c({summaryTitle:e})},setSummaryDescription:function(e){return c({summaryDescription:e})},hasFocus:u,setEditable:function(e){return a({editable:e})},setActiveStarIndex:function(e){return a({editedStar:e})},showfeature:O,showauthor:I,state:t,setStateValue:a,starState:r,starSetStateValue:i}))}))}}]);