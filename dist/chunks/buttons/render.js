(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[7],{236:function(t,n,e){"use strict";var a=e(19),o=e.n(a)()((function(t){return t[1]}));o.push([t.i,'/**\n * Editor styles for the admin\n */\n.uagb-buttons__outer-wrap .uagb-button__wrapper {\n  display: flex; }\n  .uagb-buttons__outer-wrap .uagb-button__wrapper div {\n    display: inline-flex; }\n\n[data-type="uagb/buttons"] .block-editor-inner-blocks > .block-editor-block-list__layout {\n  display: flex;\n  flex-direction: row; }\n\n.wp-block[data-type="uagb/buttons"][data-btn-width="full"] .block-editor-inner-blocks,\n.wp-block[data-type="uagb/buttons"][data-btn-width="full"] .wp-block[data-type="uagb/buttons-child"] {\n  width: 100%; }\n\n.wp-block[data-type="uagb/buttons"][data-btn-width="full"] .block-editor-block-list__layout {\n  flex-grow: 1;\n  justify-content: space-between; }\n\n.wp-block[data-type="uagb/buttons"][data-btn-width="full"] .uagb-buttons-repeater {\n  justify-content: center; }\n  .wp-block[data-type="uagb/buttons"][data-btn-width="full"] .uagb-buttons-repeater .block-editor-rich-text__editable {\n    justify-content: center;\n    text-align: center; }\n\n[data-type="uagb/buttons"] .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block {\n  width: auto;\n  padding-right: 0;\n  padding-left: 0;\n  margin-right: 10px;\n  margin-left: 10px; }\n\n.uagb-buttons__outer-wrap .uagb-buttons__wrap.uagb-buttons-stack-desktop .block-list-appender {\n  width: 60px; }\n\n.uagb-buttons__outer-wrap .block-list-appender {\n  margin-top: 24px;\n  margin-bottom: 24px;\n  margin-left: 10px; }\n',""]),n.a=o},522:function(t,n,e){"use strict";e.r(n);var a,o=e(15),u=e.n(o),b=(e(2),e(4)),l=e(3),r=e.n(l),i=e(18),s=e.n(i),c=e(236),d=0,p={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=c.a.locals||{},g.use=function(){return d++||(a=s()(c.a,p)),g},g.unuse=function(){d>0&&!--d&&(a(),a=null)};var _=g,w=["uagb/buttons-child"],k=function(t){Object(l.useLayoutEffect)((function(){return _.use(),function(){_.unuse()}}),[]);var n=(t=t.parentProps).attributes,e=n.className,a=n.btn_count,o=n.buttons,i=n.stack,s=Object(l.useMemo)((function(){for(var t=[],n=0;n<a;n++)t.push(["uagb/buttons-child",o[n]]);return t}),[a,o]);return r.a.createElement("div",{className:u()(e,"uagb-buttons__outer-wrap","uagb-block-".concat(t.clientId.substr(0,8)))},r.a.createElement("div",{className:u()("uagb-buttons__wrap","uagb-buttons-stack-".concat(i))},r.a.createElement(b.InnerBlocks,{template:s,templateLock:!1,allowedBlocks:w,__experimentalMoverDirection:"desktop"==i?"vertical":"horizontal"})))};n.default=r.a.memo(k)}}]);