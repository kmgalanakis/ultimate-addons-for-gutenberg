(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[17],{245:function(o,n,l){"use strict";var t=l(18),e=l.n(t)()((function(o){return o[1]}));e.push([o.i,'/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.components-button-group {\n  z-index: 0; }\n\n.uagb-columns__wrap::before {\n  content: "";\n  position: absolute;\n  border: 1px dashed #03ddff;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1; }\n\n.uagb-columns__edit-active.uagb-columns__wrap::before {\n  border-color: #035cff; }\n\n.editor-bg-image-control .components-button,\n.editor-bg-video-control .components-button {\n  vertical-align: middle; }\n\n.editor-bg-image-control .components-button:last-child,\n.editor-bg-video-control .components-button:last-child {\n  margin-left: 10px; }\n\n.uagb-columns__inner-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout {\n  display: flex;\n  flex-wrap: nowrap; }\n\n.uagb-columns__inner-wrap > .block-editor-inner-blocks,\n.uagb-columns__inner-wrap > .block-editor-block-list__layout {\n  width: 100%; }\n\n.wp-block-uagb-columns .block-editor-block-list__layout {\n  margin-left: 0;\n  margin-right: 0; }\n  .wp-block-uagb-columns .block-editor-block-list__layout .editor-block-list__block {\n    max-width: none !important; }\n\n.block-editor-block-list__block[data-type="uagb/columns"] {\n  clear: both; }\n\n.block-editor-block-list__block[data-align="center"][data-type="uagb/columns"] {\n  text-align: inherit; }\n\n.block-editor-block-list__block[data-type="uagb/column"] > .editor-block-contextual-toolbar {\n  top: 38px;\n  transform: translateY(-38px);\n  margin-left: -29px;\n  margin-right: -29px; }\n\n.block-editor-block-list__block[data-type="uagb/column"] > .editor-block-list__insertion-point {\n  top: 0;\n  margin-top: 0; }\n\n.block-editor-block-list__block[data-align="full"] .wp-block-uagb-columns > .block-editor-inner-blocks > .block-editor-block-list__layout:first-child {\n  margin-left: 30px; }\n\n.block-editor-block-list__block[data-align="full"] .wp-block-uagb-columns > .block-editor-inner-blocks > .block-editor-block-list__layout:last-child {\n  margin-right: 30px; }\n\n.wp-block-uagb-columns.uagb-columns__valign-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.wp-block-uagb-columns.uagb-columns__valign-center > .uagb-columns__inner-wrap {\n  width: 100%;\n  justify-content: center;\n  justify-content: flex-end; }\n\n.wp-block-uagb-columns.uagb-columns__valign-bottom {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end; }\n\n.wp-block-uagb-columns.uagb-columns__valign-bottom > .uagb-columns__inner-wrap {\n  width: 100%; }\n\n.block-editor-block-list__layout .block-editor-block-list__block[data-type="uagb/column"] > .block-editor-block-list__block-edit {\n  margin-left: 14px;\n  margin-right: 14px; }\n  .block-editor-block-list__layout .block-editor-block-list__block[data-type="uagb/column"] > .block-editor-block-list__block-edit > div:not(.editor-block-contextual-toolbar) {\n    width: 100%; }\n  .block-editor-block-list__layout .block-editor-block-list__block[data-type="uagb/column"] > .block-editor-block-list__block-edit > .editor-block-contextual-toolbar {\n    position: absolute;\n    top: 0;\n    transform: translateY(-39px); }\n\n.wp-block-uagb-columns > .uagb-columns__inner-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout > [data-type="uagb/column"] > .block-editor-block-list__block-edit::before {\n  bottom: 0;\n  top: 0; }\n\n.block-editor-block-list__block[data-align="full"] .wp-block-uagb-columns {\n  padding-left: 15px;\n  padding-right: 15px; }\n\n/* for editor preview */\n.uagb-editor-preview-mode-mobile.uagb-columns__stack-mobile > .uagb-columns__inner-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout,\n.uagb-editor-preview-mode-tablet.uagb-columns__stack-tablet > .uagb-columns__inner-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout,\n.uagb-editor-preview-mode-mobile.uagb-columns__stack-tablet > .uagb-columns__inner-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout {\n  display: block; }\n  .uagb-editor-preview-mode-mobile.uagb-columns__stack-mobile > .uagb-columns__inner-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout > .block-editor-block-list__block[data-type="uagb/column"],\n  .uagb-editor-preview-mode-tablet.uagb-columns__stack-tablet > .uagb-columns__inner-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout > .block-editor-block-list__block[data-type="uagb/column"],\n  .uagb-editor-preview-mode-mobile.uagb-columns__stack-tablet > .uagb-columns__inner-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout > .block-editor-block-list__block[data-type="uagb/column"] {\n    width: 100% !important; }\n\n.wp-block-uagb-columns {\n  display: block;\n  position: relative; }\n  .wp-block-uagb-columns > .uagb-columns__inner-wrap {\n    z-index: 10;\n    position: relative;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column; }\n    .wp-block-uagb-columns > .uagb-columns__inner-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout {\n      display: flex;\n      flex-wrap: nowrap;\n      justify-content: space-between;\n      margin-left: 0;\n      margin-right: 0; }\n      .wp-block-uagb-columns > .uagb-columns__inner-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout > [data-type="uagb/column"] {\n        display: flex;\n        flex-direction: column;\n        max-width: none;\n        margin-top: 0;\n        margin-bottom: 0; }\n        .wp-block-uagb-columns > .uagb-columns__inner-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout > [data-type="uagb/column"] .block-editor-block-list__block-edit {\n          flex-basis: 100%; }\n\n.uagb-columns__columns-1 .block-editor-block-list__block[data-type="uagb/column"] {\n  width: 100%; }\n\n.uagb-columns__columns-2 .block-editor-block-list__block[data-type="uagb/column"] {\n  width: 50%; }\n\n.uagb-columns__columns-3 .block-editor-block-list__block[data-type="uagb/column"] {\n  width: 33.33%; }\n\n.uagb-columns__columns-4 .block-editor-block-list__block[data-type="uagb/column"] {\n  width: 25%; }\n\n.uagb-columns__columns-5 .block-editor-block-list__block[data-type="uagb/column"] {\n  width: 20%; }\n\n.uagb-columns__columns-6 .block-editor-block-list__block[data-type="uagb/column"] {\n  width: 16.66%; }\n\n.wp-block-uagb-columns.uagb-columns__valign-center > .uagb-columns__inner-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout > [data-type="uagb/column"] > .block-editor-block-list__block-edit {\n  align-items: center;\n  display: flex; }\n\n.wp-block-uagb-columns.uagb-columns__valign-bottom > .uagb-columns__inner-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout > [data-type="uagb/column"] > .block-editor-block-list__block-edit {\n  align-items: flex-end;\n  display: flex; }\n\n.wp-block-uagb-column {\n  width: 100%; }\n\n.block-editor-block-list__layout .block-editor-block-list__block[data-align="full"][data-type="uagb/columns"] {\n  margin-left: 0;\n  margin-right: 0; }\n\n.edit-post-visual-editor .editor-writing-flow .block-editor-block-list__layout .block-editor-block-list__block[data-type="uagb/column"] > .block-editor-block-list__block-edit {\n  margin-left: 0;\n  margin-right: 0; }\n\n.block-editor-block-list__layout .uagb-column__wrap .uagb-column__inner-wrap {\n  z-index: unset; }\n\n.block-editor-block-list__layout .uagb-column__wrap {\n  overflow: visible; }\n\n@media (min-width: 600px) {\n  .edit-post-visual-editor .block-editor-block-list__block[data-type="uagb/column"] .block-editor-block-list__block-edit {\n    padding-left: 0;\n    padding-right: 0; } }\n\n@media (max-width: 976px) {\n  .uagb-columns__reverse-tablet.wp-block-uagb-columns > .uagb-columns__inner-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout {\n    flex-direction: column-reverse; } }\n\n@media (max-width: 767px) {\n  .uagb-columns__reverse-mobile.wp-block-uagb-columns > .uagb-columns__inner-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout {\n    flex-direction: column-reverse; } }\n\n@media (max-width: 600px) {\n  .wp-block-uagb-columns > .uagb-columns__inner-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout {\n    flex-direction: column; }\n  .wp-block-uagb-columns > .uagb-columns__inner-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout > [data-type="uagb/column"] {\n    flex: none !important;\n    width: 100%;\n    margin-right: 0; } }\n\n.block-editor-block-list__block[data-type="uagb/columns"] > .block-editor-block-list__block-edit::before {\n  pointer-events: inherit; }\n\n.block-editor-block-list__block[data-type="uagb/columns"] > .editor-block-list__insertion-point {\n  height: 16px; }\n  .block-editor-block-list__block[data-type="uagb/columns"] > .editor-block-list__insertion-point .editor-block-list__insertion-point-inserter {\n    height: 16px; }\n',""]),n.a=e},532:function(o,n,l){"use strict";l.r(n);var t,e=l(3),c=l.n(e),a=l(26),i=l(1),b=l.n(i),u=l(4),r=l(17),s=l.n(r),_=l(245),d=0,k={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=_.a.locals||{},m.use=function(){return d++||(t=s()(_.a,k)),m},m.unuse=function(){d>0&&!--d&&(t(),t=null)};var g=m,p=["uagb/column"],w=function(o){Object(i.useLayoutEffect)((function(){return g.use(),function(){g.unuse()}}),[]);var n=o.parentProps,l=n.attributes,t=n.isSelected,e=n.className,r=n.deviceType,s=l.stack,_=l.align,d=l.vAlign,k=l.tag,m=l.columnGap,w=l.backgroundType,y=l.backgroundVideo,f=l.columns,h=l.bottomType,v=l.topType,x=l.bottomFlip,E=l.topFlip,j=l.reverseTablet,S=l.reverseMobile,T=l.topContentAboveShape,N=l.bottomContentAboveShape,z=Object(i.useMemo)((function(){for(var o=[],n=0;n<f;n++)o.push(["uagb/column",{id:n+1}]);return o}),[f]),C="none"!=v&&b.a.createElement("div",{className:c()("uagb-columns__shape","uagb-columns__shape-top",{"uagb-columns__shape-flip":!0===E},{"uagb-columns__shape-above-content":!0===T})},a.a[v]),A="none"!=h&&b.a.createElement("div",{className:c()("uagb-columns__shape","uagb-columns__shape-bottom",{"uagb-columns__shape-flip":!0===x},{"uagb-columns__shape-above-content":!0===N}),"data-negative":"false"},a.a[h]),B=j?"uagb-columns__reverse-tablet":"",L=S?"uagb-columns__reverse-mobile":"",P="".concat(k),F=t?"active":"not-active";return b.a.createElement(P,{className:c()(e,"uagb-columns__wrap","uagb-columns__background-".concat(w),"uagb-columns__edit-".concat(F),"uagb-editor-preview-mode-".concat(r.toLowerCase()),"uagb-columns__stack-".concat(s),"uagb-columns__valign-".concat(d),"uagb-columns__gap-".concat(m),"align".concat(_),B,L,"uagb-block-".concat(o.parentProps.clientId.substr(0,8)),"uagb-columns__columns-".concat(f))},b.a.createElement("div",{className:"uagb-columns__overlay"}),C,"video"==w&&b.a.createElement("div",{className:"uagb-columns__video-wrap"},y&&b.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsinline:!0},b.a.createElement("source",{src:y.url,type:"video/mp4"}))),b.a.createElement(u.InnerBlocks,{template:z,templateLock:"all",allowedBlocks:p}),A)};n.default=b.a.memo(w)}}]);