(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{429:function(e,a,t){"use strict";t.r(a);var l=t(3),r=t.n(l),n=t(2),u=t.n(n),c=t(0),o=wp.components.ToggleControl,s=wp.blockEditor.RichText,i=function(e){var a=e=e.parentProps,t=a.attributes,l=a.setAttributes,n=a.isSelected,i=t.block_id,m=t.toggleRequired,d=t.name,g=t.toggleStatus,b=t.layout,p=t.trueValue,f=t.falseValue,h=m?Object(c.__)("required","ultimate-addons-for-gutenberg"):"";return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:r()("uagb-forms-toggle-wrap","uagb-forms-field-set","uagb-block-".concat(i))},n&&u.a.createElement("div",{className:"uagb-forms-required-wrap"},u.a.createElement(o,{label:Object(c.__)("Required","ultimate-addons-for-gutenberg"),checked:m,onChange:function(){return l({toggleRequired:!m})}})),u.a.createElement(s,{tagName:"div",placeholder:Object(c.__)("Name","ultimate-addons-for-gutenberg"),value:d,onChange:function(e){return l({name:e})},className:"uagb-forms-toggle-label ".concat(h," uagb-forms-input-label"),multiline:!1,id:i}),u.a.createElement("label",{htmlFor:i,className:"uagb-switch"},u.a.createElement("input",{type:"hidden",className:"uagb-forms-toggle-input",checked:g,"data-truestate":p,"data-falsestate":f,value:g?p:f,required:m,name:i}),u.a.createElement("input",{type:"checkbox",className:"uagb-forms-toggle-input",readOnly:!0,checked:g,"data-truestate":p,"data-falsestate":f,value:g?p:f,required:m,name:i}),u.a.createElement("span",{className:"uagb-slider ".concat(b)}))))};a.default=u.a.memo(i)}}]);