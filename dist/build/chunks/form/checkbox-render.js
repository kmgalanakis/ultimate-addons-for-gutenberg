(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{350:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(3),c=n.n(r),l=n(0);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=wp.components,s=p.Button,m=p.ToggleControl,g=wp.blockEditor.RichText,f=function(e){var t=e.setState,n=e=e.parentProps,a=n.attributes,r=n.setAttributes,i=n.isSelected,b=a.block_id,p=a.checkboxRequired,f=a.options,d=a.checkboxName,v=f.map((function(e,t){return c.a.createElement("div",{key:t,className:"uagb-form-checkbox-option"},c.a.createElement("input",{type:"checkbox",name:"checkbox-".concat(b),value:e.optiontitle,id:e.optiontitle}),c.a.createElement("label",{htmlFor:e.optiontitle}),c.a.createElement("input",{className:"uagb-inner-input-view","aria-label":e.optiontitle,onChange:function(e){return O({optiontitle:e.target.value,optionvalue:e.target.value},t)},type:"text",value:e.optiontitle}),c.a.createElement("input",{className:"uagb-inner-input-view","aria-label":e.optionvalue,onChange:function(e){return O({optionvalue:e.target.value},t)},type:"text",value:e.optionvalue}),c.a.createElement(s,{className:"uagb-form-checkbox-option-delete",icon:"trash",label:"Remove",onClick:function(){return k(t)}}))})),h=function(){return f.map((function(e,t){var n=e.optionvalue.replace(/\s+/g,"-").toLowerCase();return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"checkbox",className:"uagb-forms-checkbox",id:"checkbox-".concat(n,"-").concat(b),name:"".concat(d,"[]"),value:n,required:p}),c.a.createElement("label",{htmlFor:"checkbox-".concat(n,"-").concat(b)},e.optiontitle),c.a.createElement("br",null))}))},O=function(e,n){var a=f.map((function(t,a){return n===a&&(t=u(u({},t),e)),t}));r({options:a}),t({optionsstate:a})},k=function(e){var n=f.map((function(t,n){return e===n&&(f.splice(e,1),t={options:f}),t}));t({optionsstate:n}),r({deleteOptions:n})},E=p?Object(l.__)("required","ultimate-addons-for-gutenberg"):"";return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:o()("uagb-forms-checkbox-wrap","uagb-forms-field-set","uagb-block-".concat(b))},i&&c.a.createElement("div",{className:"uagb-forms-required-wrap"},c.a.createElement(m,{label:Object(l.__)("Required","ultimate-addons-for-gutenberg"),checked:p,onChange:function(){return r({checkboxRequired:!p})}})),c.a.createElement(g,{tagName:"div",placeholder:Object(l.__)("Checkbox Title","ultimate-addons-for-gutenberg"),value:d,onChange:function(e){return r({checkboxName:e})},className:"uagb-forms-checkbox-label ".concat(E," uagb-forms-input-label"),multiline:!1,id:b}),i&&c.a.createElement(c.a.Fragment,null,v,c.a.createElement("div",{className:"uagb-forms-checkbox-controls"},c.a.createElement("div",null,c.a.createElement(s,{isSecondary:!0,onClick:function(){var e={optiontitle:Object(l.__)("Option Name ","ultimate-addons-for-gutenberg")+"".concat(f.length+1),optionvalue:Object(l.__)("Option Value ","ultimate-addons-for-gutenberg")+"".concat(f.length+1)};f[f.length]=e;var n=f.map((function(e){return e}));r({options:n}),t({optionsstate:n})}},Object(l.__)(" + Add Option ","ultimate-addons-for-gutenberg"))))),!i&&c.a.createElement(h,null)))};t.default=c.a.memo(f)}}]);