(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{334:function(e,a,t){"use strict";t.r(a);var n=t(3),l=t(2),r=t.n(l),o=t(0),i=t(10),u=Object(l.lazy)((function(){return Promise.resolve().then(t.bind(null,6))})),c=Object(l.lazy)((function(){return Promise.resolve().then(t.bind(null,41))})),b=Object(l.lazy)((function(){return Promise.resolve().then(t.bind(null,28))})),g=wp.blockEditor,m=g.BlockControls,d=g.BlockAlignmentToolbar,s=g.ColorPalette,_=g.InspectorControls,f=g.MediaUpload,p=wp.components,v=p.PanelBody,O=p.SelectControl,h=p.RangeControl,E=p.Button,j=p.ButtonGroup,y=p.BaseControl,C=p.ToggleControl,k=function(e){var a=e=e.parentProps,t=a.attributes,g=a.setAttributes,p=a.deviceType,k=t.align,x=t.contentWidth,T=t.width,N=t.innerWidth,P=t.innerWidthType,w=t.tag,R=t.themeWidth,S=t.leftPadding,M=t.rightPadding,z=t.topPadding,B=t.bottomPadding,I=t.leftMargin,F=t.rightMargin,V=t.topMargin,L=t.bottomMargin,W=t.topPaddingTablet,A=t.bottomPaddingTablet,D=t.leftPaddingTablet,G=t.rightPaddingTablet,H=t.topMarginTablet,J=t.bottomMarginTablet,U=t.leftMarginTablet,q=t.rightMarginTablet,K=t.topPaddingMobile,Q=t.bottomPaddingMobile,X=t.leftPaddingMobile,Y=t.rightPaddingMobile,Z=t.topMarginMobile,$=t.bottomMarginMobile,ee=t.leftMarginMobile,ae=t.rightMarginMobile,te=t.backgroundType,ne=t.backgroundImage,le=t.backgroundVideo,re=t.backgroundColor,oe=t.backgroundPosition,ie=t.backgroundAttachment,ue=t.backgroundRepeat,ce=t.backgroundSize,be=t.backgroundOpacity,ge=t.backgroundVideoColor,me=t.backgroundVideoOpacity,de=t.backgroundImageColor,se=t.overlayType,_e=t.gradientOverlayColor1,fe=t.gradientOverlayColor2,pe=t.gradientOverlayType,ve=t.gradientOverlayLocation1,Oe=t.gradientOverlayLocation2,he=t.gradientOverlayAngle,Ee=t.gradientOverlayPosition,je=t.borderStyle,ye=t.borderWidth,Ce=t.borderRadius,ke=t.borderColor,xe=t.mobileMarginType,Te=t.tabletMarginType,Ne=t.desktopMarginType,Pe=t.mobilePaddingType,we=t.tabletPaddingType,Re=t.desktopPaddingType,Se=t.boxShadowColor,Me=t.boxShadowHOffset,ze=t.boxShadowVOffset,Be=t.boxShadowBlur,Ie=t.boxShadowSpread,Fe=t.boxShadowPosition,Ve=["left","center","right"];return"full_width"==x&&(Ve=["wide","full"]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null,r.a.createElement(d,{value:k,onChange:function(e){g({align:e})},controls:Ve})),r.a.createElement(_,null,r.a.createElement(v,{title:Object(o.__)("Layout","ultimate-addons-for-gutenberg")},r.a.createElement(O,{label:Object(o.__)("Content Width","ultimate-addons-for-gutenberg"),value:x,onChange:function(e){return g({contentWidth:e})},options:[{value:"boxed",label:Object(o.__)("Boxed","ultimate-addons-for-gutenberg")},{value:"full_width",label:Object(o.__)("Full Width","ultimate-addons-for-gutenberg")}]}),"boxed"==x&&r.a.createElement(h,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),value:T,min:0,max:2e3,onChange:function(e){return g({width:e})}}),"boxed"!=x&&r.a.createElement(C,{label:Object(o.__)("Inherit Inner Width from Theme","ultimate-addons-for-gutenberg"),checked:R,onChange:function(){return g({themeWidth:!R})}}),"boxed"!=x&&!R&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{className:"uagb-size-type-field","aria-label":Object(o.__)("Size Type","ultimate-addons-for-gutenberg")},r.a.createElement(E,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===P,"aria-pressed":"px"===P,onClick:function(){return g({innerWidthType:"px"})}},"px"),r.a.createElement(E,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===P,"aria-pressed":"%"===P,onClick:function(){return g({innerWidthType:"%"})}},"%")),r.a.createElement(h,{label:Object(o.__)("Inner Width","ultimate-addons-for-gutenberg"),value:N,min:0,max:2e3,onChange:function(e){return g({innerWidth:e})}})),r.a.createElement(O,{label:Object(o.__)("HTML Tag","ultimate-addons-for-gutenberg"),value:w,onChange:function(e){return g({tag:e})},options:[{value:"div",label:Object(o.__)("div","ultimate-addons-for-gutenberg")},{value:"header",label:Object(o.__)("header","ultimate-addons-for-gutenberg")},{value:"footer",label:Object(o.__)("footer","ultimate-addons-for-gutenberg")},{value:"main",label:Object(o.__)("main","ultimate-addons-for-gutenberg")},{value:"article",label:Object(o.__)("article","ultimate-addons-for-gutenberg")},{value:"section",label:Object(o.__)("section","ultimate-addons-for-gutenberg")},{value:"aside",label:Object(o.__)("aside","ultimate-addons-for-gutenberg")},{value:"nav",label:Object(o.__)("nav","ultimate-addons-for-gutenberg")}]})),r.a.createElement(v,{title:Object(o.__)("Spacing"),initialOpen:!1},r.a.createElement(l.Suspense,{fallback:Object(i.a)()}," ",r.a.createElement(u,null)," "),"Desktop"===p&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{className:"uagb-size-type-field","aria-label":Object(o.__)("Size Type")},r.a.createElement(E,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Re,"aria-pressed":"px"===Re,onClick:function(){return g({desktopPaddingType:"px"})}},"px"),r.a.createElement(E,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Re,"aria-pressed":"%"===Re,onClick:function(){return g({desktopPaddingType:"%"})}},"%")),r.a.createElement("h2",null,Object(o.__)("Padding")),r.a.createElement(h,{label:n.a.top_margin,className:"uagb-margin-control",value:z,onChange:function(e){return g({topPadding:e})},min:0,max:"%"==Re?100:2e3,allowReset:!0}),r.a.createElement(h,{label:n.a.bottom_margin,className:"uagb-margin-control",value:B,onChange:function(e){return g({bottomPadding:e})},min:0,max:"%"==Re?100:2e3,allowReset:!0}),r.a.createElement(h,{label:n.a.left_margin,className:"uagb-margin-control",value:S,onChange:function(e){return g({leftPadding:e})},min:0,max:"%"==Re?100:2e3,allowReset:!0}),r.a.createElement(h,{label:n.a.right_margin,className:"uagb-margin-control",value:M,onChange:function(e){return g({rightPadding:e})},min:0,max:"%"==Re?100:2e3,allowReset:!0})),"Tablet"===p&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{className:"uagb-size-type-field","aria-label":Object(o.__)("Size Type")},r.a.createElement(E,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===we,"aria-pressed":"px"===we,onClick:function(){return g({tabletPaddingType:"px"})}},"px"),r.a.createElement(E,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===we,"aria-pressed":"%"===we,onClick:function(){return g({tabletPaddingType:"%"})}},"%")),r.a.createElement("h2",null,Object(o.__)("Padding Tablet")),r.a.createElement(h,{label:n.a.top_margin,className:"uagb-margin-control",value:W,onChange:function(e){return g({topPaddingTablet:e})},min:0,max:"%"==we?100:2e3,allowReset:!0}),r.a.createElement(h,{label:n.a.bottom_margin,className:"uagb-margin-control",value:A,onChange:function(e){return g({bottomPaddingTablet:e})},min:0,max:"%"==we?100:2e3,allowReset:!0}),r.a.createElement(h,{label:n.a.left_margin,className:"uagb-margin-control",value:D,onChange:function(e){return g({leftPaddingTablet:e})},min:0,max:"%"==we?100:2e3,allowReset:!0}),r.a.createElement(h,{label:n.a.right_margin,className:"uagb-margin-control",value:G,onChange:function(e){return g({rightPaddingTablet:e})},min:0,max:"%"==we?100:2e3,allowReset:!0})),"Mobile"===p&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{className:"uagb-size-type-field","aria-label":Object(o.__)("Size Type")},r.a.createElement(E,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Pe,"aria-pressed":"px"===Pe,onClick:function(){return g({mobilePaddingType:"px"})}},"px"),r.a.createElement(E,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Pe,"aria-pressed":"%"===Pe,onClick:function(){return g({mobilePaddingType:"%"})}},"%")),r.a.createElement("h2",null,Object(o.__)("Padding Mobile")),r.a.createElement(h,{label:n.a.top_margin,className:"uagb-margin-control",value:K,onChange:function(e){return g({topPaddingMobile:e})},min:0,max:"%"==Pe?100:2e3,allowReset:!0}),r.a.createElement(h,{label:n.a.bottom_margin,className:"uagb-margin-control",value:Q,onChange:function(e){return g({bottomPaddingMobile:e})},min:0,max:"%"==Pe?100:2e3,allowReset:!0}),r.a.createElement(h,{label:n.a.left_margin,className:"uagb-margin-control",value:X,onChange:function(e){return g({leftPaddingMobile:e})},min:0,max:"%"==Pe?100:2e3,allowReset:!0}),r.a.createElement(h,{label:n.a.right_margin,className:"uagb-margin-control",value:Y,onChange:function(e){return g({rightPaddingMobile:e})},min:0,max:"%"==Pe?100:2e3,allowReset:!0})),r.a.createElement("hr",{className:"uagb-editor__separator"}),r.a.createElement(l.Suspense,{fallback:Object(i.a)()}," ",r.a.createElement(u,null)," "),"Desktop"===p&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{className:"uagb-size-type-field","aria-label":Object(o.__)("Size Type")},r.a.createElement(E,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Ne,"aria-pressed":"px"===Ne,onClick:function(){return g({desktopMarginType:"px"})}},"px"),r.a.createElement(E,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Ne,"aria-pressed":"%"===Ne,onClick:function(){return g({desktopMarginType:"%"})}},"%")),r.a.createElement("h2",null,Object(o.__)("Margin")),r.a.createElement(h,{label:n.a.top_margin,className:"uagb-margin-control",value:V,onChange:function(e){return g({topMargin:e})},min:-2e3,max:2e3,allowReset:!0}),r.a.createElement(h,{label:n.a.bottom_margin,className:"uagb-margin-control",value:L,onChange:function(e){return g({bottomMargin:e})},min:-2e3,max:2e3,allowReset:!0}),r.a.createElement(h,{label:n.a.left_margin,className:"uagb-margin-control",value:I,onChange:function(e){return g({leftMargin:e})},min:-2e3,max:2e3,allowReset:!0}),r.a.createElement(h,{label:n.a.right_margin,className:"uagb-margin-control",value:F,onChange:function(e){return g({rightMargin:e})},min:-2e3,max:2e3,allowReset:!0})),"Tablet"===p&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{className:"uagb-size-type-field","aria-label":Object(o.__)("Size Type")},r.a.createElement(E,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Te,"aria-pressed":"px"===Te,onClick:function(){return g({tabletMarginType:"px"})}},"px"),r.a.createElement(E,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Te,"aria-pressed":"%"===Te,onClick:function(){return g({tabletMarginType:"%"})}},"%")),r.a.createElement("h2",null,Object(o.__)("Margin Tablet")),r.a.createElement(h,{label:n.a.top_margin,className:"uagb-margin-control",value:H,onChange:function(e){return g({topMarginTablet:e})},min:-2e3,max:2e3,allowReset:!0}),r.a.createElement(h,{label:n.a.bottom_margin,className:"uagb-margin-control",value:J,onChange:function(e){return g({bottomMarginTablet:e})},min:-2e3,max:2e3,allowReset:!0}),r.a.createElement(h,{label:n.a.left_margin,className:"uagb-margin-control",value:U,onChange:function(e){return g({leftMarginTablet:e})},min:-2e3,max:2e3,allowReset:!0}),r.a.createElement(h,{label:n.a.right_margin,className:"uagb-margin-control",value:q,onChange:function(e){return g({rightMarginTablet:e})},min:-2e3,max:2e3,allowReset:!0})),"Mobile"===p&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{className:"uagb-size-type-field","aria-label":Object(o.__)("Size Type")},r.a.createElement(E,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===xe,"aria-pressed":"px"===xe,onClick:function(){return g({mobileMarginType:"px"})}},"px"),r.a.createElement(E,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===xe,"aria-pressed":"%"===xe,onClick:function(){return g({mobileMarginType:"%"})}},"%")),r.a.createElement("h2",null,Object(o.__)("Margin Mobile")),r.a.createElement(h,{label:n.a.top_margin,className:"uagb-margin-control",value:Z,onChange:function(e){return g({topMarginMobile:e})},min:-2e3,max:2e3,allowReset:!0}),r.a.createElement(h,{label:n.a.bottom_margin,className:"uagb-margin-control",value:$,onChange:function(e){return g({bottomMarginMobile:e})},min:-2e3,max:2e3,allowReset:!0}),r.a.createElement(h,{label:n.a.left_margin,className:"uagb-margin-control",value:ee,onChange:function(e){return g({leftMarginMobile:e})},min:-2e3,max:2e3,allowReset:!0}),r.a.createElement(h,{label:n.a.right_margin,className:"uagb-margin-control",value:ae,onChange:function(e){return g({rightMarginMobile:e})},min:-2e3,max:2e3,allowReset:!0}))),r.a.createElement(v,{title:Object(o.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(O,{label:Object(o.__)("Background Type","ultimate-addons-for-gutenberg"),value:te,onChange:function(e){return g({backgroundType:e})},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",label:Object(o.__)("Image","ultimate-addons-for-gutenberg")},{value:"video",label:Object(o.__)("Video","ultimate-addons-for-gutenberg")}]}),"color"==te&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),r.a.createElement("span",{className:"components-base-control__label"},r.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:re}}))),r.a.createElement(s,{value:re,onChange:function(e){return g({backgroundColor:e})},allowReset:!0})),"image"==te&&r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{id:"section-image-settings",className:"editor-bg-image-control",label:Object(o.__)("Background Image","ultimate-addons-for-gutenberg")},r.a.createElement(f,{title:Object(o.__)("Select Background Image","ultimate-addons-for-gutenberg"),onSelect:function(a){var t=e.setAttributes;a&&a.url?a.type&&"image"==a.type&&t({backgroundImage:a}):t({backgroundImage:null})},allowedTypes:["image"],value:ne,render:function(e){var a=e.open;return r.a.createElement(E,{isSecondary:!0,onClick:a},ne?Object(o.__)("Replace image","ultimate-addons-for-gutenberg"):Object(o.__)("Select Background Image","ultimate-addons-for-gutenberg"))}}),ne&&r.a.createElement(E,{className:"uagb-rm-btn",onClick:function(){(0,e.setAttributes)({backgroundImage:null})},isLink:!0,isDestructive:!0},Object(o.__)("Remove Image"))),ne&&r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{label:Object(o.__)("Image Position","ultimate-addons-for-gutenberg"),value:oe,onChange:function(e){return g({backgroundPosition:e})},options:[{value:"top-left",label:Object(o.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"top-center",label:Object(o.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"top-right",label:Object(o.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center-left",label:Object(o.__)("Center Left","ultimate-addons-for-gutenberg")},{value:"center-center",label:Object(o.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center-right",label:Object(o.__)("Center Right","ultimate-addons-for-gutenberg")},{value:"bottom-left",label:Object(o.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"bottom-center",label:Object(o.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"bottom-right",label:Object(o.__)("Bottom Right","ultimate-addons-for-gutenberg")}]}),r.a.createElement(O,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),value:ie,onChange:function(e){return g({backgroundAttachment:e})},options:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]}),r.a.createElement(O,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),value:ue,onChange:function(e){return g({backgroundRepeat:e})},options:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]}),r.a.createElement(O,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),value:ce,onChange:function(e){return g({backgroundSize:e})},options:[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")}]}),r.a.createElement(O,{label:Object(o.__)("Image Overlay Type","ultimate-addons-for-gutenberg"),value:se,onChange:function(e){return g({overlayType:e})},options:[{value:"color",label:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")}]}),"color"==se&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),r.a.createElement("span",{className:"components-base-control__label"},r.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:de}}))),r.a.createElement(s,{value:de,onChange:function(e){return g({backgroundImageColor:e})},allowReset:!0})),"gradient"==se&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Color 1","ultimate-addons-for-gutenberg"),r.a.createElement("span",{className:"components-base-control__label"},r.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ge}}))),r.a.createElement(s,{value:_e,onChange:function(e){return g({gradientOverlayColor1:e})},allowReset:!0}),r.a.createElement(h,{label:Object(o.__)("Location 1","ultimate-addons-for-gutenberg"),value:ve,onChange:function(e){return g({gradientOverlayLocation1:e})},min:0,max:100,allowReset:!0}),r.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Color 2","ultimate-addons-for-gutenberg"),r.a.createElement("span",{className:"components-base-control__label"},r.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ge}}))),r.a.createElement(s,{value:fe,onChange:function(e){return g({gradientOverlayColor2:e})},allowReset:!0}),r.a.createElement(h,{label:Object(o.__)("Location 2","ultimate-addons-for-gutenberg"),value:Oe,onChange:function(e){return g({gradientOverlayLocation2:e})},min:0,max:100,allowReset:!0}),r.a.createElement(O,{label:Object(o.__)("Type","ultimate-addons-for-gutenberg"),value:pe,onChange:function(e){return g({gradientOverlayType:e})},options:[{value:"linear",label:Object(o.__)("Linear","ultimate-addons-for-gutenberg")},{value:"radial",label:Object(o.__)("Radial","ultimate-addons-for-gutenberg")}]}),"linear"==pe&&r.a.createElement(h,{label:Object(o.__)("Angle","ultimate-addons-for-gutenberg"),value:he,onChange:function(e){return g({gradientOverlayAngle:e})},min:0,max:360,allowReset:!0}),"radial"==pe&&r.a.createElement(O,{label:Object(o.__)("Type","ultimate-addons-for-gutenberg"),value:Ee,onChange:function(e){return g({gradientOverlayPosition:e})},options:[{value:"center center",label:Object(o.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center left",label:Object(o.__)("Center Left","ultimate-addons-for-gutenberg")},{value:"center right",label:Object(o.__)("Center Right","ultimate-addons-for-gutenberg")},{value:"top center",label:Object(o.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"top left",label:Object(o.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"top right",label:Object(o.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"bottom center",label:Object(o.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"bottom left",label:Object(o.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"bottom right",label:Object(o.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})))),"gradient"==te&&r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Suspense,{fallback:Object(i.a)()},r.a.createElement(c,{attributes:t,setAttributes:g}))),"video"==te&&r.a.createElement(y,{id:"section-video-settings",className:"editor-bg-video-control",label:Object(o.__)("Background Video","ultimate-addons-for-gutenberg")},r.a.createElement(f,{title:Object(o.__)("Select Background Video","ultimate-addons-for-gutenberg"),onSelect:function(a){var t=e.setAttributes;a&&a.url?a.type&&"video"==a.type&&t({backgroundVideo:a}):t({backgroundVideo:null})},allowedTypes:["video"],value:le,render:function(e){var a=e.open;return r.a.createElement(E,{isSecondary:!0,onClick:a},le?Object(o.__)("Replace Video","ultimate-addons-for-gutenberg"):Object(o.__)("Select Background Video","ultimate-addons-for-gutenberg"))}}),le&&r.a.createElement(E,{onClick:function(){(0,e.setAttributes)({backgroundVideo:null})},isLink:!0,isDestructive:!0},Object(o.__)("Remove Video"))),("color"==te||"image"==te&&ne||"gradient"==te)&&r.a.createElement(h,{label:Object(o.__)("Opacity","ultimate-addons-for-gutenberg"),value:be,onChange:function(e){return g({backgroundOpacity:e})},min:0,max:100,allowReset:!0,initialPosition:0}),"video"==te&&le&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Video Overlay Color"),r.a.createElement("span",{className:"components-base-control__label"},r.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ge}}))),r.a.createElement(s,{value:ge,onChange:function(e){return g({backgroundVideoColor:e})},allowReset:!0})),"video"==te&&le&&r.a.createElement(h,{label:Object(o.__)("Opacity","ultimate-addons-for-gutenberg"),value:me,onChange:function(e){return g({backgroundVideoOpacity:e})},min:0,max:100,allowReset:!0,initialPosition:50})),r.a.createElement(v,{title:Object(o.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(O,{label:Object(o.__)("Border Style","ultimate-addons-for-gutenberg"),value:je,onChange:function(e){return g({borderStyle:e})},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(o.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(o.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(o.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(o.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(o.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(o.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(o.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(o.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!=je&&r.a.createElement(h,{label:Object(o.__)("Border Width","ultimate-addons-for-gutenberg"),value:ye,onChange:function(e){return g({borderWidth:e})},min:0,max:50,allowReset:!0}),r.a.createElement(h,{label:Object(o.__)("Border Radius","ultimate-addons-for-gutenberg"),value:Ce,onChange:function(e){return g({borderRadius:e})},min:0,max:1e3,allowReset:!0}),"none"!=je&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Border Color","ultimate-addons-for-gutenberg"),r.a.createElement("span",{className:"components-base-control__label"},r.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ke}}))),r.a.createElement(s,{value:ke,onChange:function(e){return g({borderColor:e})},allowReset:!0})),r.a.createElement(l.Suspense,{fallback:Object(i.a)()},r.a.createElement(b,{setAttributes:g,label:Object(o.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:Se,label:Object(o.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:Me,label:Object(o.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:ze,label:Object(o.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:Be,label:Object(o.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:Ie,label:Object(o.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:Fe,label:Object(o.__)("Position","ultimate-addons-for-gutenberg")}})))))};a.default=r.a.memo(k)}}]);