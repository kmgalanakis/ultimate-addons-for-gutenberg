(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[37],{264:function(e,t,n){"use strict";var a=n(18),r=n.n(a)()((function(e){return e[1]}));r.push([e.i,'.uagb-columns__wrap::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  border: 1px dashed #03ddff;\n  content: ""; }\n',""]),t.a=r},549:function(e,t,n){"use strict";n.r(t);var a,r=n(3),u=n.n(r),o=n(1),i=n.n(o),l=n(2),s=n(17),c=n.n(s),d=n(264),m=0,b={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=d.a.locals||{},f.use=function(){return m++||(a=c()(d.a,b)),f},f.unuse=function(){m>0&&!--m&&(a(),a=null)};var g=f,p=n(5),_=n(4),h=function(e){Object(o.useLayoutEffect)((function(){return g.use(),function(){g.unuse()}}),[]);var t=e=e.parentProps,n=t.attributes,a=t.setAttributes,r=t.isSelected,s=n.block_id,c=n.nameRequired,d=n.name,m=n.placeholder,b=c?Object(l.__)("required","ultimate-addons-for-gutenberg"):"";return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:u()("uagb-forms-name-wrap","uagb-forms-field-set","uagb-block-".concat(s))},r&&i.a.createElement("div",{className:"uagb-forms-required-wrap"},i.a.createElement(p.ToggleControl,{label:Object(l.__)("Required","ultimate-addons-for-gutenberg"),checked:c,onChange:function(){return a({nameRequired:!c})}})),i.a.createElement(_.RichText,{tagName:"div",placeholder:Object(l.__)("Name","ultimate-addons-for-gutenberg"),value:d,onChange:function(e){return a({name:e})},className:"uagb-forms-name-label ".concat(b," uagb-forms-input-label"),multiline:!1,id:s}),i.a.createElement("input",{type:"text",placeholder:m,required:c,className:"uagb-forms-name-input uagb-forms-input",name:s})))};t.default=i.a.memo(h)}}]);