(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{428:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),i=n(12),o=n(5),l=n(1),s=n(2),r=n.n(s),u=function(e){var t=e=e.parentProps,n=t.attributes,a=n.block_id,s=n.icon,u=n.noticeTitle,m=n.noticeContent,g=n.noticeDismiss,b=n.noticeAlignment,d=n.headingTag,p=t.setAttributes,_=t.className,h="";return g&&(h=r.a.createElement("span",{className:"uagb-notice-dismiss"},Object(i.a)(s))),r.a.createElement("div",{className:c()(_,"uagb-inline_notice__outer-wrap","".concat(g),"uagb-inline_notice__align-".concat(b),"uagb-block-".concat(a))},h,r.a.createElement(o.RichText,{tagName:d,placeholder:Object(l.__)("Notice Title","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:u,className:"uagb-notice-title",onChange:function(e){return p({noticeTitle:e})}}),r.a.createElement(o.RichText,{tagName:"div",multiline:"p",placeholder:Object(l.__)("Add notice text…","ultimate-addons-for-gutenberg"),value:m,className:"uagb-notice-text",onChange:function(e){return p({noticeContent:e})}}))};t.default=r.a.memo(u)}}]);