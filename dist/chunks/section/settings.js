(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{372:function(e,a,t){"use strict";t.r(a);var n=t(4),l=t(2),o=t.n(l),r=t(0),i=t(10),u=t(6),g=t(7),c=Object(l.lazy)((function(){return Promise.resolve().then(t.bind(null,17))})),b=Object(l.lazy)((function(){return t.e(1).then(t.bind(null,302))})),m=Object(l.lazy)((function(){return t.e(0).then(t.bind(null,289))})),d=function(e){var a=e=e.parentProps,t=a.attributes,d=a.setAttributes,s=a.deviceType,_=t.align,f=t.contentWidth,p=t.width,C=t.innerWidth,v=t.innerWidthType,O=t.tag,h=t.themeWidth,E=t.leftPadding,y=t.rightPadding,j=t.topPadding,R=t.bottomPadding,k=t.leftMargin,x=t.rightMargin,P=t.topMargin,T=t.bottomMargin,N=t.topPaddingTablet,S=t.bottomPaddingTablet,w=t.leftPaddingTablet,M=t.rightPaddingTablet,B=t.topMarginTablet,z=t.bottomMarginTablet,I=t.leftMarginTablet,V=t.rightMarginTablet,F=t.topPaddingMobile,L=t.bottomPaddingMobile,W=t.leftPaddingMobile,A=t.rightPaddingMobile,G=t.topMarginMobile,D=t.bottomMarginMobile,H=t.leftMarginMobile,J=t.rightMarginMobile,U=t.backgroundType,q=t.backgroundImage,K=t.backgroundVideo,Q=t.backgroundColor,X=t.backgroundPosition,Y=t.backgroundAttachment,Z=t.backgroundRepeat,$=t.backgroundSize,ee=t.backgroundOpacity,ae=t.backgroundVideoColor,te=t.backgroundVideoOpacity,ne=t.backgroundImageColor,le=t.overlayType,oe=t.gradientOverlayColor1,re=t.gradientOverlayColor2,ie=t.gradientOverlayType,ue=t.gradientOverlayLocation1,ge=t.gradientOverlayLocation2,ce=t.gradientOverlayAngle,be=t.gradientOverlayPosition,me=t.borderStyle,de=t.borderWidth,se=t.borderRadius,_e=t.borderColor,fe=t.mobileMarginType,pe=t.tabletMarginType,Ce=t.desktopMarginType,ve=t.mobilePaddingType,Oe=t.tabletPaddingType,he=t.desktopPaddingType,Ee=t.boxShadowColor,ye=t.boxShadowHOffset,je=t.boxShadowVOffset,Re=t.boxShadowBlur,ke=t.boxShadowSpread,xe=t.boxShadowPosition,Pe=["left","center","right"];"full_width"==f&&(Pe=["wide","full"]);return o.a.createElement(l.Suspense,{fallback:Object(i.a)()},o.a.createElement(u.BlockControls,null,o.a.createElement(u.BlockAlignmentToolbar,{value:_,onChange:function(e){d({align:e})},controls:Pe})),o.a.createElement(u.InspectorControls,null,o.a.createElement(g.PanelBody,{title:Object(r.__)("Layout","ultimate-addons-for-gutenberg")},o.a.createElement(g.SelectControl,{label:Object(r.__)("Content Width","ultimate-addons-for-gutenberg"),value:f,onChange:function(e){return d({contentWidth:e})},options:[{value:"boxed",label:Object(r.__)("Boxed","ultimate-addons-for-gutenberg")},{value:"full_width",label:Object(r.__)("Full Width","ultimate-addons-for-gutenberg")}]}),"boxed"==f&&o.a.createElement(g.RangeControl,{label:Object(r.__)("Width","ultimate-addons-for-gutenberg"),value:p,min:0,max:2e3,onChange:function(e){return d({width:e})}}),"boxed"!=f&&o.a.createElement(g.ToggleControl,{label:Object(r.__)("Inherit Inner Width from Theme","ultimate-addons-for-gutenberg"),checked:h,onChange:function(){return d({themeWidth:!h})}}),"boxed"!=f&&!h&&o.a.createElement(o.a.Fragment,null,o.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type","ultimate-addons-for-gutenberg")},o.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===v,"aria-pressed":"px"===v,onClick:function(){return d({innerWidthType:"px"})}},"px"),o.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===v,"aria-pressed":"%"===v,onClick:function(){return d({innerWidthType:"%"})}},"%")),o.a.createElement(g.RangeControl,{label:Object(r.__)("Inner Width","ultimate-addons-for-gutenberg"),value:C,min:0,max:2e3,onChange:function(e){return d({innerWidth:e})}})),o.a.createElement(g.SelectControl,{label:Object(r.__)("HTML Tag","ultimate-addons-for-gutenberg"),value:O,onChange:function(e){return d({tag:e})},options:[{value:"div",label:Object(r.__)("div","ultimate-addons-for-gutenberg")},{value:"header",label:Object(r.__)("header","ultimate-addons-for-gutenberg")},{value:"footer",label:Object(r.__)("footer","ultimate-addons-for-gutenberg")},{value:"main",label:Object(r.__)("main","ultimate-addons-for-gutenberg")},{value:"article",label:Object(r.__)("article","ultimate-addons-for-gutenberg")},{value:"section",label:Object(r.__)("section","ultimate-addons-for-gutenberg")},{value:"aside",label:Object(r.__)("aside","ultimate-addons-for-gutenberg")},{value:"nav",label:Object(r.__)("nav","ultimate-addons-for-gutenberg")}]})),o.a.createElement(g.PanelBody,{title:Object(r.__)("Spacing"),initialOpen:!1}," ",o.a.createElement(c,null)," ","Desktop"===s&&o.a.createElement(o.a.Fragment,null,o.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type")},o.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===he,"aria-pressed":"px"===he,onClick:function(){return d({desktopPaddingType:"px"})}},"px"),o.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===he,"aria-pressed":"%"===he,onClick:function(){return d({desktopPaddingType:"%"})}},"%")),o.a.createElement("h2",null,Object(r.__)("Padding")),o.a.createElement(g.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:j,onChange:function(e){return d({topPadding:e})},min:0,max:"%"==he?100:2e3,allowReset:!0}),o.a.createElement(g.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:R,onChange:function(e){return d({bottomPadding:e})},min:0,max:"%"==he?100:2e3,allowReset:!0}),o.a.createElement(g.RangeControl,{label:n.a.left_margin,className:"uagb-margin-control",value:E,onChange:function(e){return d({leftPadding:e})},min:0,max:"%"==he?100:2e3,allowReset:!0}),o.a.createElement(g.RangeControl,{label:n.a.right_margin,className:"uagb-margin-control",value:y,onChange:function(e){return d({rightPadding:e})},min:0,max:"%"==he?100:2e3,allowReset:!0})),"Tablet"===s&&o.a.createElement(o.a.Fragment,null,o.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type")},o.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Oe,"aria-pressed":"px"===Oe,onClick:function(){return d({tabletPaddingType:"px"})}},"px"),o.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Oe,"aria-pressed":"%"===Oe,onClick:function(){return d({tabletPaddingType:"%"})}},"%")),o.a.createElement("h2",null,Object(r.__)("Padding Tablet")),o.a.createElement(g.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:N,onChange:function(e){return d({topPaddingTablet:e})},min:0,max:"%"==Oe?100:2e3,allowReset:!0}),o.a.createElement(g.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:S,onChange:function(e){return d({bottomPaddingTablet:e})},min:0,max:"%"==Oe?100:2e3,allowReset:!0}),o.a.createElement(g.RangeControl,{label:n.a.left_margin,className:"uagb-margin-control",value:w,onChange:function(e){return d({leftPaddingTablet:e})},min:0,max:"%"==Oe?100:2e3,allowReset:!0}),o.a.createElement(g.RangeControl,{label:n.a.right_margin,className:"uagb-margin-control",value:M,onChange:function(e){return d({rightPaddingTablet:e})},min:0,max:"%"==Oe?100:2e3,allowReset:!0})),"Mobile"===s&&o.a.createElement(o.a.Fragment,null,o.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type")},o.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===ve,"aria-pressed":"px"===ve,onClick:function(){return d({mobilePaddingType:"px"})}},"px"),o.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===ve,"aria-pressed":"%"===ve,onClick:function(){return d({mobilePaddingType:"%"})}},"%")),o.a.createElement("h2",null,Object(r.__)("Padding Mobile")),o.a.createElement(g.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:F,onChange:function(e){return d({topPaddingMobile:e})},min:0,max:"%"==ve?100:2e3,allowReset:!0}),o.a.createElement(g.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:L,onChange:function(e){return d({bottomPaddingMobile:e})},min:0,max:"%"==ve?100:2e3,allowReset:!0}),o.a.createElement(g.RangeControl,{label:n.a.left_margin,className:"uagb-margin-control",value:W,onChange:function(e){return d({leftPaddingMobile:e})},min:0,max:"%"==ve?100:2e3,allowReset:!0}),o.a.createElement(g.RangeControl,{label:n.a.right_margin,className:"uagb-margin-control",value:A,onChange:function(e){return d({rightPaddingMobile:e})},min:0,max:"%"==ve?100:2e3,allowReset:!0})),o.a.createElement("hr",{className:"uagb-editor__separator"})," ",o.a.createElement(c,null)," ","Desktop"===s&&o.a.createElement(o.a.Fragment,null,o.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type")},o.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Ce,"aria-pressed":"px"===Ce,onClick:function(){return d({desktopMarginType:"px"})}},"px"),o.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Ce,"aria-pressed":"%"===Ce,onClick:function(){return d({desktopMarginType:"%"})}},"%")),o.a.createElement("h2",null,Object(r.__)("Margin")),o.a.createElement(g.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:P,onChange:function(e){return d({topMargin:e})},min:-2e3,max:2e3,allowReset:!0}),o.a.createElement(g.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:T,onChange:function(e){return d({bottomMargin:e})},min:-2e3,max:2e3,allowReset:!0}),o.a.createElement(g.RangeControl,{label:n.a.left_margin,className:"uagb-margin-control",value:k,onChange:function(e){return d({leftMargin:e})},min:-2e3,max:2e3,allowReset:!0}),o.a.createElement(g.RangeControl,{label:n.a.right_margin,className:"uagb-margin-control",value:x,onChange:function(e){return d({rightMargin:e})},min:-2e3,max:2e3,allowReset:!0})),"Tablet"===s&&o.a.createElement(o.a.Fragment,null,o.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type")},o.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===pe,"aria-pressed":"px"===pe,onClick:function(){return d({tabletMarginType:"px"})}},"px"),o.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===pe,"aria-pressed":"%"===pe,onClick:function(){return d({tabletMarginType:"%"})}},"%")),o.a.createElement("h2",null,Object(r.__)("Margin Tablet")),o.a.createElement(g.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:B,onChange:function(e){return d({topMarginTablet:e})},min:-2e3,max:2e3,allowReset:!0}),o.a.createElement(g.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:z,onChange:function(e){return d({bottomMarginTablet:e})},min:-2e3,max:2e3,allowReset:!0}),o.a.createElement(g.RangeControl,{label:n.a.left_margin,className:"uagb-margin-control",value:I,onChange:function(e){return d({leftMarginTablet:e})},min:-2e3,max:2e3,allowReset:!0}),o.a.createElement(g.RangeControl,{label:n.a.right_margin,className:"uagb-margin-control",value:V,onChange:function(e){return d({rightMarginTablet:e})},min:-2e3,max:2e3,allowReset:!0})),"Mobile"===s&&o.a.createElement(o.a.Fragment,null,o.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type")},o.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===fe,"aria-pressed":"px"===fe,onClick:function(){return d({mobileMarginType:"px"})}},"px"),o.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===fe,"aria-pressed":"%"===fe,onClick:function(){return d({mobileMarginType:"%"})}},"%")),o.a.createElement("h2",null,Object(r.__)("Margin Mobile")),o.a.createElement(g.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:G,onChange:function(e){return d({topMarginMobile:e})},min:-2e3,max:2e3,allowReset:!0}),o.a.createElement(g.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:D,onChange:function(e){return d({bottomMarginMobile:e})},min:-2e3,max:2e3,allowReset:!0}),o.a.createElement(g.RangeControl,{label:n.a.left_margin,className:"uagb-margin-control",value:H,onChange:function(e){return d({leftMarginMobile:e})},min:-2e3,max:2e3,allowReset:!0}),o.a.createElement(g.RangeControl,{label:n.a.right_margin,className:"uagb-margin-control",value:J,onChange:function(e){return d({rightMarginMobile:e})},min:-2e3,max:2e3,allowReset:!0}))),o.a.createElement(g.PanelBody,{title:Object(r.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(g.SelectControl,{label:Object(r.__)("Background Type","ultimate-addons-for-gutenberg"),value:U,onChange:function(e){return d({backgroundType:e})},options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(r.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(r.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",label:Object(r.__)("Image","ultimate-addons-for-gutenberg")},{value:"video",label:Object(r.__)("Video","ultimate-addons-for-gutenberg")}]}),"color"==U&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Background Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Q}}))),o.a.createElement(u.ColorPalette,{value:Q,onChange:function(e){return d({backgroundColor:e})},allowReset:!0})),"image"==U&&o.a.createElement(o.a.Fragment,null,o.a.createElement(g.BaseControl,{id:"section-image-settings",className:"editor-bg-image-control",label:Object(r.__)("Background Image","ultimate-addons-for-gutenberg")},o.a.createElement(u.MediaUpload,{title:Object(r.__)("Select Background Image","ultimate-addons-for-gutenberg"),onSelect:function(a){var t=e.setAttributes;a&&a.url?a.type&&"image"==a.type&&t({backgroundImage:a}):t({backgroundImage:null})},allowedTypes:["image"],value:q,render:function(e){var a=e.open;return o.a.createElement(g.Button,{isSecondary:!0,onClick:a},q?Object(r.__)("Replace image","ultimate-addons-for-gutenberg"):Object(r.__)("Select Background Image","ultimate-addons-for-gutenberg"))}}),q&&o.a.createElement(g.Button,{className:"uagb-rm-btn",onClick:function(){(0,e.setAttributes)({backgroundImage:null})},isLink:!0,isDestructive:!0},Object(r.__)("Remove Image"))),q&&o.a.createElement(o.a.Fragment,null,o.a.createElement(g.SelectControl,{label:Object(r.__)("Image Position","ultimate-addons-for-gutenberg"),value:X,onChange:function(e){return d({backgroundPosition:e})},options:[{value:"top-left",label:Object(r.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"top-center",label:Object(r.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"top-right",label:Object(r.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center-left",label:Object(r.__)("Center Left","ultimate-addons-for-gutenberg")},{value:"center-center",label:Object(r.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center-right",label:Object(r.__)("Center Right","ultimate-addons-for-gutenberg")},{value:"bottom-left",label:Object(r.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"bottom-center",label:Object(r.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"bottom-right",label:Object(r.__)("Bottom Right","ultimate-addons-for-gutenberg")}]}),o.a.createElement(g.SelectControl,{label:Object(r.__)("Attachment","ultimate-addons-for-gutenberg"),value:Y,onChange:function(e){return d({backgroundAttachment:e})},options:[{value:"fixed",label:Object(r.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(r.__)("Scroll","ultimate-addons-for-gutenberg")}]}),o.a.createElement(g.SelectControl,{label:Object(r.__)("Repeat","ultimate-addons-for-gutenberg"),value:Z,onChange:function(e){return d({backgroundRepeat:e})},options:[{value:"no-repeat",label:Object(r.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(r.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(r.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(r.__)("Repeat-y","ultimate-addons-for-gutenberg")}]}),o.a.createElement(g.SelectControl,{label:Object(r.__)("Size","ultimate-addons-for-gutenberg"),value:$,onChange:function(e){return d({backgroundSize:e})},options:[{value:"auto",label:Object(r.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(r.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(r.__)("Contain","ultimate-addons-for-gutenberg")}]}),o.a.createElement(g.SelectControl,{label:Object(r.__)("Image Overlay Type","ultimate-addons-for-gutenberg"),value:le,onChange:function(e){return d({overlayType:e})},options:[{value:"color",label:Object(r.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(r.__)("Gradient","ultimate-addons-for-gutenberg")}]}),"color"==le&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ne}}))),o.a.createElement(u.ColorPalette,{value:ne,onChange:function(e){return d({backgroundImageColor:e})},allowReset:!0})),"gradient"==le&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Color 1","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ae}}))),o.a.createElement(u.ColorPalette,{value:oe,onChange:function(e){return d({gradientOverlayColor1:e})},allowReset:!0}),o.a.createElement(g.RangeControl,{label:Object(r.__)("Location 1","ultimate-addons-for-gutenberg"),value:ue,onChange:function(e){return d({gradientOverlayLocation1:e})},min:0,max:100,allowReset:!0}),o.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Color 2","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ae}}))),o.a.createElement(u.ColorPalette,{value:re,onChange:function(e){return d({gradientOverlayColor2:e})},allowReset:!0}),o.a.createElement(g.RangeControl,{label:Object(r.__)("Location 2","ultimate-addons-for-gutenberg"),value:ge,onChange:function(e){return d({gradientOverlayLocation2:e})},min:0,max:100,allowReset:!0}),o.a.createElement(g.SelectControl,{label:Object(r.__)("Type","ultimate-addons-for-gutenberg"),value:ie,onChange:function(e){return d({gradientOverlayType:e})},options:[{value:"linear",label:Object(r.__)("Linear","ultimate-addons-for-gutenberg")},{value:"radial",label:Object(r.__)("Radial","ultimate-addons-for-gutenberg")}]}),"linear"==ie&&o.a.createElement(g.RangeControl,{label:Object(r.__)("Angle","ultimate-addons-for-gutenberg"),value:ce,onChange:function(e){return d({gradientOverlayAngle:e})},min:0,max:360,allowReset:!0}),"radial"==ie&&o.a.createElement(g.SelectControl,{label:Object(r.__)("Type","ultimate-addons-for-gutenberg"),value:be,onChange:function(e){return d({gradientOverlayPosition:e})},options:[{value:"center center",label:Object(r.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center left",label:Object(r.__)("Center Left","ultimate-addons-for-gutenberg")},{value:"center right",label:Object(r.__)("Center Right","ultimate-addons-for-gutenberg")},{value:"top center",label:Object(r.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"top left",label:Object(r.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"top right",label:Object(r.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"bottom center",label:Object(r.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"bottom left",label:Object(r.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"bottom right",label:Object(r.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})))),"gradient"==U&&o.a.createElement(o.a.Fragment,null,o.a.createElement(b,{attributes:t,setAttributes:d})),"video"==U&&o.a.createElement(g.BaseControl,{id:"section-video-settings",className:"editor-bg-video-control",label:Object(r.__)("Background Video","ultimate-addons-for-gutenberg")},o.a.createElement(u.MediaUpload,{title:Object(r.__)("Select Background Video","ultimate-addons-for-gutenberg"),onSelect:function(a){var t=e.setAttributes;a&&a.url?a.type&&"video"==a.type&&t({backgroundVideo:a}):t({backgroundVideo:null})},allowedTypes:["video"],value:K,render:function(e){var a=e.open;return o.a.createElement(g.Button,{isSecondary:!0,onClick:a},K?Object(r.__)("Replace Video","ultimate-addons-for-gutenberg"):Object(r.__)("Select Background Video","ultimate-addons-for-gutenberg"))}}),K&&o.a.createElement(g.Button,{onClick:function(){(0,e.setAttributes)({backgroundVideo:null})},isLink:!0,isDestructive:!0},Object(r.__)("Remove Video"))),("color"==U||"image"==U&&q||"gradient"==U)&&o.a.createElement(g.RangeControl,{label:Object(r.__)("Opacity","ultimate-addons-for-gutenberg"),value:ee,onChange:function(e){return d({backgroundOpacity:e})},min:0,max:100,allowReset:!0,initialPosition:0}),"video"==U&&K&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Video Overlay Color"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ae}}))),o.a.createElement(u.ColorPalette,{value:ae,onChange:function(e){return d({backgroundVideoColor:e})},allowReset:!0})),"video"==U&&K&&o.a.createElement(g.RangeControl,{label:Object(r.__)("Opacity","ultimate-addons-for-gutenberg"),value:te,onChange:function(e){return d({backgroundVideoOpacity:e})},min:0,max:100,allowReset:!0,initialPosition:50})),o.a.createElement(g.PanelBody,{title:Object(r.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(g.SelectControl,{label:Object(r.__)("Border Style","ultimate-addons-for-gutenberg"),value:me,onChange:function(e){return d({borderStyle:e})},options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(r.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(r.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(r.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(r.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(r.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(r.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(r.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(r.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!=me&&o.a.createElement(g.RangeControl,{label:Object(r.__)("Border Width","ultimate-addons-for-gutenberg"),value:de,onChange:function(e){return d({borderWidth:e})},min:0,max:50,allowReset:!0}),o.a.createElement(g.RangeControl,{label:Object(r.__)("Border Radius","ultimate-addons-for-gutenberg"),value:se,onChange:function(e){return d({borderRadius:e})},min:0,max:1e3,allowReset:!0}),"none"!=me&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Border Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:_e}}))),o.a.createElement(u.ColorPalette,{value:_e,onChange:function(e){return d({borderColor:e})},allowReset:!0})),o.a.createElement(m,{setAttributes:d,label:Object(r.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:Ee,label:Object(r.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:ye,label:Object(r.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:je,label:Object(r.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:Re,label:Object(r.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:ke,label:Object(r.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:xe,label:Object(r.__)("Position","ultimate-addons-for-gutenberg")}}))))};a.default=o.a.memo(d)}}]);