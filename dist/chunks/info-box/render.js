(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[62],{237:function(e,t,a){"use strict";var n=a(19),r=a.n(n)()((function(e){return e[1]}));r.push([e.i,"/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.block-editor-page #wpwrap .edit-post-visual-editor a.uagb-infobox-link-wrap {\n  z-index: -1;\n  color: inherit; }\n",""]),t.a=r},523:function(e,t,a){"use strict";a.r(t);var n,r=a(15),i=a.n(r),l=a(87),o=a(3),s=a.n(o),c=a(84),u=a(85),b=a(89),m=a(88),f=a(86),p=a(137),g=a(83),d=a(18),v=a.n(d),w=a(237),y=0,E={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},_={};_.locals=w.a.locals||{},_.use=function(){return y++||(n=v()(w.a,E)),_},_.unuse=function(){y>0&&!--y&&(n(),n=null)};var h=_;function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var k=function(e){Object(o.useLayoutEffect)((function(){return h.use(),function(){h.unuse()}}),[]);var t,a=e=e.parentProps,n=a.className,r=a.attributes,d=a.setAttributes,v=r.icon,w=r.iconimgPosition,y=r.source_type,E=r.seperatorPosition,_=r.seperatorStyle,k=r.ctaType,x=r.showPrefix,S=r.showTitle,N=r.showDesc,F=r.block_id,j=t="icon"===y&&""!==v?s.a.createElement(f.a,{attributes:r}):s.a.createElement(p.a,{attributes:r}),T=E,I=s.a.createElement(m.a,{attributes:r}),O=!0;"after_icon"!=E||"above-title"!=w&&"below-title"!=w||(O=!1,j=s.a.createElement(s.a.Fragment,null,t,"none"!==_&&I)),"after_icon"!=E||"above-title"===w&&"below-title"===w||(T="after_title"),"below-title"==w&&"after_title"==E&&(O=!1,j=s.a.createElement(s.a.Fragment,null,"none"!==_&&I,t));var P,z=s.a.createElement(s.a.Fragment,null,"none"!==_&&"after_title"==T&&O&&I,s.a.createElement("div",{className:"uagb-ifb-text-wrap"},N&&s.a.createElement(u.a,{attributes:r,setAttributes:d,props:e}),"none"!==_&&"after_desc"==T&&I,s.a.createElement(b.a,{attributes:r,setAttributes:d}))),C=s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"uagb-ifb-title-wrap"},x&&s.a.createElement(g.a,{attributes:r,setAttributes:d,props:e}),"none"!==_&&"after_prefix"==T&&I,S&&s.a.createElement(c.a,{attributes:r,setAttributes:d,props:e}))),J=s.a.createElement("div",{className:i.a.apply(void 0,["uagb-infobox__content-wrap","all"==k?" uagb-infobox_cta-type-all":""].concat((P=Object(l.a)(r),function(e){if(Array.isArray(e))return A(e)}(P)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(P)||function(e,t){if(e){if("string"==typeof e)return A(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?A(e,void 0):void 0}}(P)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())))},s.a.createElement("div",{className:"uagb-ifb-left-right-wrap"},"left"==w&&j,s.a.createElement("div",{className:"uagb-ifb-content"},"above-title"==w&&j,("above-title"==w||"below-title"==w)&&C,"below-title"==w&&j,("above-title"==w||"below-title"==w)&&z,"left-title"===w&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"uagb-ifb-left-title-image"},j,C),z),"right-title"===w&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"uagb-ifb-right-title-image"},C,j),z),("left"==w||"right"==w)&&s.a.createElement(s.a.Fragment,null,C,z)),"right"==w&&j));return s.a.createElement("div",{className:i()(n,"uagb-infobox__outer-wrap","uagb-block-".concat(F))},"all"==k&&s.a.createElement(s.a.Fragment,null,s.a.createElement("a",{className:"uagb-infobox-link-wrap uagb-infbox__link-to-all","aria-label":"Infobox Link",rel:"noopener noreferrer"}),J),"all"!==k&&J)};t.default=s.a.memo(k)}}]);