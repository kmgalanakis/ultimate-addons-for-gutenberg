(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{458:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t.n(n),u=t(1),i=t.n(u),o=t(2),m=wp.components.ToggleControl,l=wp.blockEditor.RichText,d=function(e){var a=e=e.parentProps,t=a.attributes,n=a.setAttributes,u=a.isSelected,d=t.block_id,c=t.dateRequired,s=t.name,b=t.additonalVal,g=t.minYear,p=t.minMonth,f=t.minDay,w="";g&&p&&f&&(w=g+"-"+p+"-"+f);var v;v=b?i.a.createElement("input",{type:"date",className:"uagb-forms-date-input uagb-forms-input",required:c,min:w,max:"",name:d}):i.a.createElement("input",{type:"date",className:"uagb-forms-date-input uagb-forms-input",required:c,name:d});var E=c?Object(o.__)("required","ultimate-addons-for-gutenberg"):"";return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:r()("uagb-forms-date-wrap","uagb-forms-field-set","uagb-block-".concat(d))},u&&i.a.createElement("div",{className:"uagb-forms-required-wrap"},i.a.createElement(m,{label:Object(o.__)("Required","ultimate-addons-for-gutenberg"),checked:c,onChange:function(){return n({dateRequired:!c})}})),i.a.createElement(l,{tagName:"div",placeholder:Object(o.__)("Date","ultimate-addons-for-gutenberg"),value:s,onChange:function(e){return n({name:e})},className:"uagb-forms-date-label ".concat(E," uagb-forms-input-label"),multiline:!1,id:d}),v))};a.default=i.a.memo(d)}}]);