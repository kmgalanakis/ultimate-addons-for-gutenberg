(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{373:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t.n(n),c=t(1),i=t.n(c),o=t(2),l=t(12),m=t(9),s=t(4),u=function(e){var a=e=e.parentProps,t=a.className,n=a.setAttributes,c=a.attributes,u=a.mergeBlocks,g=a.insertBlocksAfter,_=a.onReplace,b=a.deviceType,p=c.align,d=c.tag,f=c.title,v=c.prefix,w=c.description_text,h=c.image,k=c.imgStyle,N=c.imgSize,E=c.imgPosition,x=c.twitterIcon,j=c.fbIcon,O=c.linkedinIcon,R=c.pinIcon,T=c.twitterLink,y=c.fbLink,A=c.linkedinLink,B=c.pinLink,I=c.socialTarget,L=c.socialEnable,S=c.stack,C=i.a.createElement("div",{className:"uagb-team__title-wrap"},i.a.createElement(s.RichText,{tagName:d,value:f,className:"uagb-team__title",onChange:function(e){return n({title:e})},multiline:!1,placeholder:Object(o.__)("Write a Title","ultimate-addons-for-gutenberg"),onMerge:u,onSplit:g?function(e,a){n({content:e});for(var t=arguments.length,r=new Array(t>2?t-2:0),c=2;c<t;c++)r[c-2]=arguments[c];g([].concat(r,[Object(m.createBlock)("core/paragraph",{content:a})]))}:void 0,onRemove:function(){return _([])}}),i.a.createElement(s.RichText,{tagName:"div",value:v,className:"uagb-team__prefix",onChange:function(e){return n({prefix:e})},onMerge:u,placeholder:Object(o.__)("Write a Designation","ultimate-addons-for-gutenberg"),onSplit:g?function(e,a){n({content:e});for(var t=arguments.length,r=new Array(t>2?t-2:0),c=2;c<t;c++)r[c-2]=arguments[c];g([].concat(r,[Object(m.createBlock)("core/paragraph",{content:a})]))}:void 0,onRemove:function(){return _([])}})),z=function(e,a,t){var n=t?"_blank":"_self";return i.a.createElement("li",{className:"uagb-team__social-icon"},i.a.createElement("a",{href:a,"aria-label":e,target:n,title:"",rel:"noopener noreferrer"},Object(l.a)(e)))},M=i.a.createElement("div",{className:"uagb-team__social-icon-wrap"},i.a.createElement("ul",{className:"uagb-team__social-list"},""!=x&&z(x,T,I),""!=j&&z(j,y,I),""!=O&&z(O,A,I),""!=R&&z(R,B,I))),W=i.a.createElement("div",{className:"uagb-team__desc-wrap"},i.a.createElement(s.RichText,{tagName:"p",value:w,placeholder:Object(o.__)("Write a Description","ultimate-addons-for-gutenberg"),className:"uagb-team__desc",onChange:function(e){return n({description_text:e})},onMerge:u,onSplit:g?function(e,a){n({content:e});for(var t=arguments.length,r=new Array(t>2?t-2:0),c=2;c<t;c++)r[c-2]=arguments[c];g([].concat(r,[Object(m.createBlock)("core/paragraph",{content:a})]))}:void 0,onRemove:function(){return _([])}})),D="",J="";h&&(D=h.sizes,J=h.sizes&&D[N]?D[N].url:h.url);var P="";return""!=J&&(P=i.a.createElement("div",{className:r()("uagb-team__image-wrap","uagb-team__image-crop-".concat(k))},i.a.createElement("img",{className:"",src:J,alt:h.alt?h.alt:""}))),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:r()(t,"uagb-team","uagb-team__outer-wrap","uagb-team__image-position-".concat(E),"uagb-team__align-".concat(p),"uagb-team__stack-".concat(S),"uagb-editor-preview-mode-".concat(b.toLowerCase()),"uagb-block-".concat(e.clientId.substr(0,8)))},i.a.createElement("div",{className:"uagb-team__wrap"},"left"==E&&P,i.a.createElement("div",{className:"uagb-team__content"},"above"==E&&P,C,W,L&&M),"right"==E&&P)))};a.default=i.a.memo(u)}}]);