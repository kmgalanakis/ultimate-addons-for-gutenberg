(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[44],{269:function(e,t,n){"use strict";var a=n(18),r=n.n(a)()((function(e){return e[1]}));r.push([e.i,".uagb-forms-select-controls {\n  margin-top: 10px; }\n\n.uagb-form-select-option-delete.has-icon {\n  vertical-align: middle;\n  padding: 10px;\n  margin: 0; }\n\n.uagb-forms-main-form .uagb-inner-input-view {\n  vertical-align: middle;\n  width: 35% !important;\n  margin: 0 10px !important; }\n",""]),t.a=r},554:function(e,t,n){"use strict";n.r(t);var a,r=n(3),o=n.n(r),i=n(1),l=n.n(i),u=n(2),c=n(17),s=n.n(c),p=n(269),m=0,b={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=p.a.locals||{},g.use=function(){return m++||(a=s()(p.a,b)),g},g.unuse=function(){m>0&&!--m&&(a(),a=null)};var f=g,d=n(5),v=n(4);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e){Object(i.useLayoutEffect)((function(){return f.use(),function(){f.unuse()}}),[]);var t=e.setState,n=e=e.parentProps,a=n.attributes,r=n.setAttributes,c=n.isSelected,s=a.block_id,p=a.selectRequired,m=a.options,b=a.selectName,g=m.map((function(e,t){return l.a.createElement("div",{key:t,className:"uagb-form-select-option"},l.a.createElement("input",{className:"uagb-inner-input-view","aria-label":e.optiontitle,onChange:function(e){return _({optiontitle:e.target.value,optionvalue:e.target.value},t)},type:"text",value:e.optiontitle}),l.a.createElement("input",{className:"uagb-inner-input-view","aria-label":e.optionvalue,onChange:function(e){return _({optionvalue:e.target.value},t)},type:"text",value:e.optionvalue}),l.a.createElement(d.Button,{className:"uagb-form-select-option-delete",icon:"trash",label:"Remove",onClick:function(){return j(t)}}))})),O=function(){var e=m.map((function(e,t){return l.a.createElement("option",{key:t,value:e.optionvalue},e.optiontitle)}));return l.a.createElement("select",{className:"uagb-forms-select-box uagb-forms-input",required:p,name:s,defaultValue:""},l.a.createElement("option",{value:"",disabled:!0},Object(u.__)("Select your option","ultimate-addons-for-gutenberg")),e)},_=function(e,n){var a=m.map((function(t,a){return n===a&&(t=y(y({},t),e)),t}));r({options:a}),t({optionsstate:a})},j=function(e){var n=m.map((function(t,n){return e===n&&(m.splice(e,1),t={options:m}),t}));t({optionsstate:n}),r({deleteCurrentOptions:n})},h=p?Object(u.__)("required","ultimate-addons-for-gutenberg"):"";return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:o()("uagb-forms-select-wrap","uagb-forms-field-set","uagb-block-".concat(s))},c&&l.a.createElement("div",{className:"uagb-forms-required-wrap"},l.a.createElement(d.ToggleControl,{label:Object(u.__)("Required","ultimate-addons-for-gutenberg"),checked:p,onChange:function(){return r({selectRequired:!p})}})),l.a.createElement(v.RichText,{tagName:"div",placeholder:Object(u.__)("Select Title","ultimate-addons-for-gutenberg"),value:b,onChange:function(e){return r({selectName:e})},className:"uagb-forms-select-label ".concat(h," uagb-forms-input-label"),multiline:!1,id:s}),c&&l.a.createElement(l.a.Fragment,null,g,l.a.createElement("div",{className:"uagb-forms-select-controls"},l.a.createElement("div",null,l.a.createElement(d.Button,{isSecondary:!0,onClick:function(){var e={optiontitle:Object(u.__)("Option Name ","ultimate-addons-for-gutenberg")+"".concat(m.length+1),optionvalue:Object(u.__)("Option Value ","ultimate-addons-for-gutenberg")+"".concat(m.length+1)};m[m.length]=e;var n=m.map((function(e){return e}));r({options:n}),t({optionsstate:n})}},Object(u.__)(" + Add Option ","ultimate-addons-for-gutenberg"))))),!c&&l.a.createElement(O,null)))};t.default=l.a.memo(j)}}]);