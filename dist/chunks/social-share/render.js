(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[90],{240:function(a,e,t){"use strict";var n=t(19),o=t.n(n)()((function(a){return a[1]}));o.push([a.i,'/**\n * Editor styles for the admin\n */\n#wpwrap .edit-post-visual-editor a.uagb-ss__link,\n#wpwrap .edit-post-visual-editor a.uagb-ss__link {\n  color: #3a3a3a; }\n\n.uagb-social-share__layout-vertical .uagb-social-share__outer-wrap > .block-editor-inner-blocks {\n  width: 100%; }\n\n[data-type="uagb/social-share"] .uagb-social-share__layout-horizontal .block-editor-inner-blocks > .block-editor-block-list__layout {\n  display: flex; }\n\n[data-type="uagb/social-share"] .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block {\n  width: auto;\n  padding-right: 0;\n  padding-left: 0;\n  margin-right: 10px;\n  margin-left: 10px; }\n',""]),e.a=o},526:function(a,e,t){"use strict";t.r(e);var n,o=t(15),i=t.n(o),r=t(4),s=t(3),l=t.n(s),c=t(18),u=t.n(c),d=t(240),b=0,p={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},_={};_.locals=d.a.locals||{},_.use=function(){return b++||(n=u()(d.a,p)),_},_.unuse=function(){b>0&&!--b&&(n(),n=null)};var g=_,h=["uagb/social-share-child"],f=function(a){Object(s.useLayoutEffect)((function(){return g.use(),function(){g.unuse()}}),[]);var e=a=a.parentProps,t=e.attributes,n=e.deviceType,o=t.className,c=t.social_count,u=t.socials,d=t.social_layout,b=Object(s.useMemo)((function(){for(var a=[],e=0;e<c;e++)a.push(["uagb/social-share-child",u[e]]);return a}),[c,u]);return l.a.createElement("div",{className:i()(o,"uagb-social-share__outer-wrap","uagb-social-share__layout-".concat(d),"uagb-editor-preview-mode-".concat(n.toLowerCase()),"uagb-block-".concat(a.clientId.substr(0,8)))},l.a.createElement(r.InnerBlocks,{template:b,templateLock:!1,allowedBlocks:h,__experimentalMoverDirection:d}))};e.default=l.a.memo(f)}}]);