(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{351:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),o=t(3),l=t.n(o),u=t(0),c=wp.components.ToggleControl,i=wp.blockEditor.RichText,s=function(e){var a=e=e.parentProps,t=a.attributes,r=a.setAttributes,o=a.isSelected,s=t.block_id,m=t.textareaRequired,d=t.textareaName,b=t.rows,g=t.placeholder,p=m?Object(u.__)("required","ultimate-addons-for-gutenberg"):"";return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:n()("uagb-forms-textarea-wrap","uagb-forms-field-set","uagb-block-".concat(s))},o&&l.a.createElement("div",{className:"uagb-forms-required-wrap"},l.a.createElement(c,{label:Object(u.__)("Required","ultimate-addons-for-gutenberg"),checked:m,onChange:function(){return r({textareaRequired:!m})}})),l.a.createElement(i,{tagName:"div",placeholder:Object(u.__)("Textarea Name","ultimate-addons-for-gutenberg"),value:d,onChange:function(e){return r({textareaName:e})},className:"uagb-forms-textarea-label ".concat(p," uagb-forms-input-label"),multiline:!1,id:s}),l.a.createElement("textarea",{required:m,className:"uagb-forms-textarea-input uagb-forms-input",rows:b,placeholder:g,name:s})))};a.default=l.a.memo(s)}}]);