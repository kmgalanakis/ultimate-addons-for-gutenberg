(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{405:function(a,e,t){"use strict";t.r(e);var n=t(3),l=t.n(n),c=t(2),r=t.n(c),s=function(a){var e,t=a=a.parentProps,n=t.attributes,c=t.categoriesList,s=t.deviceType,o=n.layout,i=n.seperatorStyle,m=n.noTaxDisplaytext,u=n.showCount,g=n.listDisplayStyle,b=n.showhierarchy,d=n.titleTag;return"grid"==o?e=d||"H4":"list"==o&&(e=d||"div"),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:l()("uagb-taxonomy__outer-wrap","uagb-editor-preview-mode-".concat(s.toLowerCase()),"uagb-block-".concat(a.clientId.substr(0,8)))},r.a.createElement("div",{className:l()("uagb-taxonomy-wrap","uagb-layout-".concat(o))},"grid"==o&&c.map((function(a,t){return r.a.createElement("div",{className:"uagb-taxomony-box",key:t},r.a.createElement("a",{className:"uagb-tax-link",href:a.link},r.a.createElement(e,{className:"uagb-tax-title",dangerouslySetInnerHTML:{__html:a.name}}),u&&r.a.createElement("div",{className:"uagb-tax-count"},a.count," ",a.count>"1"?"".concat(a.singular_name,"s"):a.singular_name)))})),"list"==o&&"list"==g&&r.a.createElement("ul",{className:"uagb-list-wrap"},c.map((function(a,t){return r.a.createElement("li",{className:"uagb-tax-list",key:t},r.a.createElement(e,{className:"uagb-tax-link-wrap"},r.a.createElement("a",{className:"uagb-tax-link",href:a.link,dangerouslySetInnerHTML:{__html:a.name}}),u&&r.a.createElement("span",{className:"uagb-tax-list-count"}," (".concat(a.count,")")),b&&null!=a.children&&r.a.createElement("ul",{className:"uagb-taxonomy-list-children"},Object.keys(a.children).map((function(e,t){return r.a.createElement("li",{className:"uagb-tax-list",key:t},r.a.createElement("a",{className:"uagb-tax-link",href:"".concat(a.link).concat(a.children[e].slug)},a.children[e].name),u&&r.a.createElement("span",null," (".concat(a.children[e].count,")")))})))),"none"!=i&&r.a.createElement("div",{className:"uagb-tax-separator-wrap"},r.a.createElement("div",{className:"uagb-tax-separator"})))}))),"list"==o&&"dropdown"==g&&r.a.createElement("select",{className:"uagb-list-dropdown-wrap"},c.map((function(a,e){return r.a.createElement("option",{key:e,value:a.link},a.name,u&&" (".concat(a.count,")"))})))),""==c&&r.a.createElement("div",{className:"uagb-tax-not-available"},m)))};e.default=r.a.memo(s)}}]);