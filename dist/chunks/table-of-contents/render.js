(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[93],{255:function(t,e,a){"use strict";var n=a(18),l=a.n(n)()((function(t){return t[1]}));l.push([t.i,"/**\r\n * Editor styles for the admin\r\n */\n.uagb-toc__list > p {\n  color: #666;\n  font-size: 13px;\n  font-style: italic; }\n\n.block-editor-page .uagb-toc__scroll-top.dashicons {\n  right: 343px; }\n\n.block-editor-page .uagb-toc__scroll-top.uagb-toc__show-scroll {\n  display: inline-table; }\n\n.uagb-light-font-weight {\n  font-weight: 400; }\n\n.block-editor-block-list__block .wp-block-uagb-table-of-contents ol.uagb-toc__list li.uagb-toc__list ul,\n.block-editor-block-list__block .wp-block-uagb-table-of-contents ol.uagb-toc__list ul.uagb-toc__list ul {\n  list-style-type: circle; }\n\n.block-editor-block-list__block .wp-block-uagb-table-of-contents ol.uagb-toc__list > ul,\n.block-editor-block-list__block .wp-block-uagb-table-of-contents ol.uagb-toc__list > li {\n  list-style-type: disc; }\n",""]),e.a=l},541:function(t,e,a){"use strict";a.r(e);var n,l=a(3),o=a.n(l),c=a(76),i=a(1),s=a.n(i),u=a(2),r=a(12),b=a(4),_=a(17),g=a.n(_),p=a(255),d=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=p.a.locals||{},f.use=function(){return d++||(n=g()(p.a,m)),f},f.unuse=function(){d>0&&!--d&&(n(),n=null)};var k=f,w=function(t){Object(i.useLayoutEffect)((function(){return k.use(),function(){k.unuse()}}),[]);var e=t=t.parentProps,a=e.attributes,n=e.setAttributes,l=e.className,_=e.headers,g=e.deviceType,p=a.align,d=a.makeCollapsible,m=a.initialCollapse,f=a.icon,w=a.tColumnsDesktop,h=a.mappingHeaders,y=a.headingTitle,v="";return d&&f&&(v=s.a.createElement("span",{className:"uag-toc__collapsible-wrap"},Object(r.a)(f))),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:o()(l,"uagb-toc__align-".concat(p),"uagb-toc__columns-".concat(w),m?"uagb-toc__collapse":"","uagb-editor-preview-mode-".concat(g.toLowerCase()),"uagb-block-".concat(t.clientId.substr(0,8)))},s.a.createElement("div",{className:"uagb-toc__wrap"},s.a.createElement("div",{className:"uagb-toc__title-wrap"},s.a.createElement(b.RichText,{tagName:"div",placeholder:Object(u.__)("Table Of Contents","ultimate-addons-for-gutenberg"),value:y,className:"uagb-toc__title",onChange:function(t){return n({headingTitle:t})},multiline:!1,onRemove:function(){return t.onReplace([])}}),v),s.a.createElement(c.a,{mappingHeaders:h,headers:_}))))};e.default=s.a.memo(w)}}]);