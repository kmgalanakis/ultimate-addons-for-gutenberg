(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{352:function(e,a,t){"use strict";t.r(a);var r=t(2),c=t.n(r),o=t(1),n=t.n(o),s=t(4),u=t(0),l=wp.blockEditor.RichText,b=function(e){var a=e=e.parentProps,t=a.attributes,r=a.setAttributes,o=a.deviceType,b=t.block_id,i=t.layout,m=t.placeholder,p=t.buttonType,h=t.buttonText;return n.a.createElement("div",{className:c()("uagb-wp-search__outer-wrap","uagb-editor-preview-mode-".concat(o.toLowerCase()),"uagb-block-".concat(b),"uagb-layout-".concat(i))},"input-button"===i?n.a.createElement("form",{className:"uagb-search-wrapper",onSubmit:function(e){return e.preventDefault()},role:"search",action:uagb_blocks_info.uagb_home_url,method:"get"},n.a.createElement("div",{className:"uagb-search-form__container wp-block-button",role:"tablist"},n.a.createElement("input",{placeholder:m,className:"uagb-search-form__input",type:"search",name:"s",title:"Search"}),n.a.createElement("button",{className:"uagb-search-submit wp-block-button__link",type:"submit"},"icon"===p&&n.a.createElement("span",{className:"uagb-wp-search-button-icon-wrap"},Object(s.a)("fas fa-search")),"text"===p&&n.a.createElement(l,{tagName:"span",placeholder:Object(u.__)("Search","ultimate-addons-for-gutenberg"),value:h,onChange:function(e){return r({buttonText:e})},className:"uagb-wp-search-button-text",multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"]})))):"","input"===i?n.a.createElement("form",{className:"uagb-search-wrapper",onSubmit:function(e){return e.preventDefault()},role:"search",action:uagb_blocks_info.uagb_home_url,method:"get"},n.a.createElement("div",{className:"uagb-search-form__container",role:"tablist"},n.a.createElement("span",{className:"uagb-wp-search-icon-wrap"},Object(s.a)("fas fa-search")),n.a.createElement("input",{placeholder:m,className:"uagb-search-form__input",type:"search",name:"s",title:"Search"}))):"")};a.default=n.a.memo(b)}}]);