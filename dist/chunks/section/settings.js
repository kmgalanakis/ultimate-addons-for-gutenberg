(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{177:function(e,t,a){"use strict";var n=a(2),l=a(4),o=a(5),r=a(10);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(_,e);var t,a,i,d,f=(i=_,d=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(i);if(d){var a=m(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return b(this,e)});function _(){var e;return u(this,_),(e=f.apply(this,arguments)).onAdvancedControlClick=e.onAdvancedControlClick.bind(s(e)),e.onAdvancedControlReset=e.onAdvancedControlReset.bind(s(e)),e}return t=_,(a=[{key:"onAdvancedControlClick",value:function(){var e=!0,t=Object(n.__)("Hide Advanced","ultimate-addons-for-gutenberg");null!==this.state&&!0===this.state.showAdvancedControls&&(e=!1,t=Object(n.__)("Advanced","ultimate-addons-for-gutenberg")),this.setState({showAdvancedControls:e,showAdvancedControlsLabel:t})}},{key:"onAdvancedControlReset",value:function(){var e=this.props.setAttributes;e({boxShadowColor:""}),e({boxShadowHOffset:""}),e({boxShadowVOffset:""}),e({boxShadowBlur:""}),e({boxShadowSpread:""}),e({boxShadowPosition:""})}},{key:"render",value:function(){var e,t,a,i=this.props,u=i.setAttributes,c=i.boxShadowColor,g=i.boxShadowHOffset,b=i.boxShadowVOffset,s=i.boxShadowBlur,m=i.boxShadowSpread,d=i.boxShadowPosition;return null!==this.state&&!0===this.state.showAdvancedControls&&(e=React.createElement("div",{className:"uagb-box-shadow-advanced"},React.createElement(r.Fragment,null,React.createElement("p",{className:"uagb-setting-label"},c.label,React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:c.value}}))),React.createElement(l.ColorPalette,{value:c.value,onChange:function(e){return u({boxShadowColor:e})},allowReset:!0})),React.createElement(r.Fragment,null,React.createElement("h2",null,g.label),React.createElement(o.RangeControl,{value:g.value,onChange:function(e){return u({boxShadowHOffset:e})},min:-100,max:100,allowReset:!0})),React.createElement(r.Fragment,null,React.createElement("h2",null,b.label),React.createElement(o.RangeControl,{value:b.value,onChange:function(e){return u({boxShadowVOffset:e})},min:-100,max:100,allowReset:!0})),React.createElement(r.Fragment,null,React.createElement("h2",null,s.label),React.createElement(o.RangeControl,{value:s.value,onChange:function(e){return u({boxShadowBlur:e})},min:0,max:100,allowReset:!0})),React.createElement(r.Fragment,null,React.createElement("h2",null,m.label),React.createElement(o.RangeControl,{value:m.value,onChange:function(e){return u({boxShadowSpread:e})},min:0,max:100,allowReset:!0})),React.createElement(r.Fragment,null,React.createElement(o.SelectControl,{label:d.label,value:d.value,onChange:function(e){return u({boxShadowPosition:e})},options:[{value:"inset",label:Object(n.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(n.__)("Outset","ultimate-addons-for-gutenberg")}]})))),a=React.createElement(o.Button,{className:"uagb-size-btn uagb-typography-reset-btn",isSmall:!0,"aria-pressed":null!==this.state,onClick:this.onAdvancedControlReset},React.createElement(o.Dashicon,{icon:"image-rotate"})),t=React.createElement(o.Button,{className:"uagb-size-btn uagb-typography-control-btn",isSmall:!0,"aria-pressed":null!==this.state,onClick:this.onAdvancedControlClick},React.createElement(o.Dashicon,{icon:"admin-tools"})),React.createElement("div",{className:"uag-typography-option-actions"},React.createElement("span",null,this.props.label),t,a,e)}}])&&c(t.prototype,a),_}(r.Component);t.a=d},186:function(e,t,a){"use strict";var n=a(18),l=a(2),o=a(4);t.a=function(e){var t=e.attributes,a=e.setAttributes,r=t.gradientValue,i=t.gradientAngle,u=t.gradientColor1,c=t.gradientColor2,g=t.gradientLocation1,b=t.gradientLocation2,s=t.gradientPosition,m=t.gradientType;if(""===r){var d=Object(n.a)(u),f=Object(n.a)(c);if("linear"===m){var _="linear-gradient(".concat(i,"deg,").concat(d," ").concat(g,"%, ").concat(f," ").concat(b,"%)");a({gradientValue:_})}else _="radial-gradient(at ".concat(s,", ").concat(d," ").concat(g,"%, ").concat(f," ").concat(b,"%)"),a({gradientValue:_})}return React.createElement(o.__experimentalPanelColorGradientSettings,{title:Object(l.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!0,settings:[{label:Object(l.__)("Overlay Color","ultimate-addons-for-gutenberg"),gradientValue:r,onGradientChange:function(e){a({gradientValue:e}),a({gradientAngle:"",gradientColor1:"",gradientColor2:"",gradientLocation1:"",gradientLocation2:""})}}]})}},362:function(e,t,a){"use strict";a.r(t);var n=a(6),l=a(1),o=a.n(l),r=a(2),i=a(8),u=a(51),c=a(186),g=a(177),b=a(4),s=a(5),m=function(e){var t=e=e.parentProps,a=t.attributes,m=t.setAttributes,d=t.deviceType,f=a.align,_=a.contentWidth,p=a.width,v=a.innerWidth,C=a.innerWidthType,h=a.tag,O=a.themeWidth,y=a.leftPadding,E=a.rightPadding,R=a.topPadding,j=a.bottomPadding,x=a.leftMargin,k=a.rightMargin,w=a.topMargin,S=a.bottomMargin,P=a.topPaddingTablet,N=a.bottomPaddingTablet,T=a.leftPaddingTablet,B=a.rightPaddingTablet,M=a.topMarginTablet,z=a.bottomMarginTablet,A=a.leftMarginTablet,V=a.rightMarginTablet,F=a.topPaddingMobile,L=a.bottomPaddingMobile,I=a.leftPaddingMobile,W=a.rightPaddingMobile,G=a.topMarginMobile,D=a.bottomMarginMobile,H=a.leftMarginMobile,J=a.rightMarginMobile,U=a.backgroundType,q=a.backgroundImage,K=a.backgroundVideo,Q=a.backgroundColor,X=a.backgroundPosition,Y=a.backgroundAttachment,Z=a.backgroundRepeat,$=a.backgroundSize,ee=a.backgroundOpacity,te=a.backgroundVideoColor,ae=a.backgroundVideoOpacity,ne=a.backgroundImageColor,le=a.overlayType,oe=a.gradientOverlayColor1,re=a.gradientOverlayColor2,ie=a.gradientOverlayType,ue=a.gradientOverlayLocation1,ce=a.gradientOverlayLocation2,ge=a.gradientOverlayAngle,be=a.gradientOverlayPosition,se=a.borderStyle,me=a.borderWidth,de=a.borderRadius,fe=a.borderColor,_e=a.mobileMarginType,pe=a.tabletMarginType,ve=a.desktopMarginType,Ce=a.mobilePaddingType,he=a.tabletPaddingType,Oe=a.desktopPaddingType,ye=a.boxShadowColor,Ee=a.boxShadowHOffset,Re=a.boxShadowVOffset,je=a.boxShadowBlur,xe=a.boxShadowSpread,ke=a.boxShadowPosition,we=["left","center","right"];"full_width"==_&&(we=["wide","full"]);return o.a.createElement(l.Suspense,{fallback:Object(i.a)()},o.a.createElement(b.BlockControls,null,o.a.createElement(b.BlockAlignmentToolbar,{value:f,onChange:function(e){m({align:e})},controls:we})),o.a.createElement(b.InspectorControls,null,o.a.createElement(s.PanelBody,{title:Object(r.__)("Layout","ultimate-addons-for-gutenberg")},o.a.createElement(s.SelectControl,{label:Object(r.__)("Content Width","ultimate-addons-for-gutenberg"),value:_,onChange:function(e){return m({contentWidth:e})},options:[{value:"boxed",label:Object(r.__)("Boxed","ultimate-addons-for-gutenberg")},{value:"full_width",label:Object(r.__)("Full Width","ultimate-addons-for-gutenberg")}]}),"boxed"==_&&o.a.createElement(s.RangeControl,{label:Object(r.__)("Width","ultimate-addons-for-gutenberg"),value:p,min:0,max:2e3,onChange:function(e){return m({width:e})}}),"boxed"!=_&&o.a.createElement(s.ToggleControl,{label:Object(r.__)("Inherit Inner Width from Theme","ultimate-addons-for-gutenberg"),checked:O,onChange:function(){return m({themeWidth:!O})}}),"boxed"!=_&&!O&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type","ultimate-addons-for-gutenberg")},o.a.createElement(s.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===C,"aria-pressed":"px"===C,onClick:function(){return m({innerWidthType:"px"})}},"px"),o.a.createElement(s.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===C,"aria-pressed":"%"===C,onClick:function(){return m({innerWidthType:"%"})}},"%")),o.a.createElement(s.RangeControl,{label:Object(r.__)("Inner Width","ultimate-addons-for-gutenberg"),value:v,min:0,max:2e3,onChange:function(e){return m({innerWidth:e})}})),o.a.createElement(s.SelectControl,{label:Object(r.__)("HTML Tag","ultimate-addons-for-gutenberg"),value:h,onChange:function(e){return m({tag:e})},options:[{value:"div",label:Object(r.__)("div","ultimate-addons-for-gutenberg")},{value:"header",label:Object(r.__)("header","ultimate-addons-for-gutenberg")},{value:"footer",label:Object(r.__)("footer","ultimate-addons-for-gutenberg")},{value:"main",label:Object(r.__)("main","ultimate-addons-for-gutenberg")},{value:"article",label:Object(r.__)("article","ultimate-addons-for-gutenberg")},{value:"section",label:Object(r.__)("section","ultimate-addons-for-gutenberg")},{value:"aside",label:Object(r.__)("aside","ultimate-addons-for-gutenberg")},{value:"nav",label:Object(r.__)("nav","ultimate-addons-for-gutenberg")}]})),o.a.createElement(s.PanelBody,{title:Object(r.__)("Spacing"),initialOpen:!1}," ",o.a.createElement(u.default,null)," ","Desktop"===d&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type")},o.a.createElement(s.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Oe,"aria-pressed":"px"===Oe,onClick:function(){return m({desktopPaddingType:"px"})}},"px"),o.a.createElement(s.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Oe,"aria-pressed":"%"===Oe,onClick:function(){return m({desktopPaddingType:"%"})}},"%")),o.a.createElement("h2",null,Object(r.__)("Padding")),o.a.createElement(s.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:R,onChange:function(e){return m({topPadding:e})},min:0,max:"%"==Oe?100:2e3,allowReset:!0}),o.a.createElement(s.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:j,onChange:function(e){return m({bottomPadding:e})},min:0,max:"%"==Oe?100:2e3,allowReset:!0}),o.a.createElement(s.RangeControl,{label:n.a.left_margin,className:"uagb-margin-control",value:y,onChange:function(e){return m({leftPadding:e})},min:0,max:"%"==Oe?100:2e3,allowReset:!0}),o.a.createElement(s.RangeControl,{label:n.a.right_margin,className:"uagb-margin-control",value:E,onChange:function(e){return m({rightPadding:e})},min:0,max:"%"==Oe?100:2e3,allowReset:!0})),"Tablet"===d&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type")},o.a.createElement(s.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===he,"aria-pressed":"px"===he,onClick:function(){return m({tabletPaddingType:"px"})}},"px"),o.a.createElement(s.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===he,"aria-pressed":"%"===he,onClick:function(){return m({tabletPaddingType:"%"})}},"%")),o.a.createElement("h2",null,Object(r.__)("Padding Tablet")),o.a.createElement(s.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:P,onChange:function(e){return m({topPaddingTablet:e})},min:0,max:"%"==he?100:2e3,allowReset:!0}),o.a.createElement(s.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:N,onChange:function(e){return m({bottomPaddingTablet:e})},min:0,max:"%"==he?100:2e3,allowReset:!0}),o.a.createElement(s.RangeControl,{label:n.a.left_margin,className:"uagb-margin-control",value:T,onChange:function(e){return m({leftPaddingTablet:e})},min:0,max:"%"==he?100:2e3,allowReset:!0}),o.a.createElement(s.RangeControl,{label:n.a.right_margin,className:"uagb-margin-control",value:B,onChange:function(e){return m({rightPaddingTablet:e})},min:0,max:"%"==he?100:2e3,allowReset:!0})),"Mobile"===d&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type")},o.a.createElement(s.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Ce,"aria-pressed":"px"===Ce,onClick:function(){return m({mobilePaddingType:"px"})}},"px"),o.a.createElement(s.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Ce,"aria-pressed":"%"===Ce,onClick:function(){return m({mobilePaddingType:"%"})}},"%")),o.a.createElement("h2",null,Object(r.__)("Padding Mobile")),o.a.createElement(s.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:F,onChange:function(e){return m({topPaddingMobile:e})},min:0,max:"%"==Ce?100:2e3,allowReset:!0}),o.a.createElement(s.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:L,onChange:function(e){return m({bottomPaddingMobile:e})},min:0,max:"%"==Ce?100:2e3,allowReset:!0}),o.a.createElement(s.RangeControl,{label:n.a.left_margin,className:"uagb-margin-control",value:I,onChange:function(e){return m({leftPaddingMobile:e})},min:0,max:"%"==Ce?100:2e3,allowReset:!0}),o.a.createElement(s.RangeControl,{label:n.a.right_margin,className:"uagb-margin-control",value:W,onChange:function(e){return m({rightPaddingMobile:e})},min:0,max:"%"==Ce?100:2e3,allowReset:!0})),o.a.createElement("hr",{className:"uagb-editor__separator"})," ",o.a.createElement(u.default,null)," ","Desktop"===d&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type")},o.a.createElement(s.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===ve,"aria-pressed":"px"===ve,onClick:function(){return m({desktopMarginType:"px"})}},"px"),o.a.createElement(s.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===ve,"aria-pressed":"%"===ve,onClick:function(){return m({desktopMarginType:"%"})}},"%")),o.a.createElement("h2",null,Object(r.__)("Margin")),o.a.createElement(s.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:w,onChange:function(e){return m({topMargin:e})},min:-2e3,max:2e3,allowReset:!0}),o.a.createElement(s.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:S,onChange:function(e){return m({bottomMargin:e})},min:-2e3,max:2e3,allowReset:!0}),o.a.createElement(s.RangeControl,{label:n.a.left_margin,className:"uagb-margin-control",value:x,onChange:function(e){return m({leftMargin:e})},min:-2e3,max:2e3,allowReset:!0}),o.a.createElement(s.RangeControl,{label:n.a.right_margin,className:"uagb-margin-control",value:k,onChange:function(e){return m({rightMargin:e})},min:-2e3,max:2e3,allowReset:!0})),"Tablet"===d&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type")},o.a.createElement(s.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===pe,"aria-pressed":"px"===pe,onClick:function(){return m({tabletMarginType:"px"})}},"px"),o.a.createElement(s.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===pe,"aria-pressed":"%"===pe,onClick:function(){return m({tabletMarginType:"%"})}},"%")),o.a.createElement("h2",null,Object(r.__)("Margin Tablet")),o.a.createElement(s.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:M,onChange:function(e){return m({topMarginTablet:e})},min:-2e3,max:2e3,allowReset:!0}),o.a.createElement(s.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:z,onChange:function(e){return m({bottomMarginTablet:e})},min:-2e3,max:2e3,allowReset:!0}),o.a.createElement(s.RangeControl,{label:n.a.left_margin,className:"uagb-margin-control",value:A,onChange:function(e){return m({leftMarginTablet:e})},min:-2e3,max:2e3,allowReset:!0}),o.a.createElement(s.RangeControl,{label:n.a.right_margin,className:"uagb-margin-control",value:V,onChange:function(e){return m({rightMarginTablet:e})},min:-2e3,max:2e3,allowReset:!0})),"Mobile"===d&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type")},o.a.createElement(s.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===_e,"aria-pressed":"px"===_e,onClick:function(){return m({mobileMarginType:"px"})}},"px"),o.a.createElement(s.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===_e,"aria-pressed":"%"===_e,onClick:function(){return m({mobileMarginType:"%"})}},"%")),o.a.createElement("h2",null,Object(r.__)("Margin Mobile")),o.a.createElement(s.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:G,onChange:function(e){return m({topMarginMobile:e})},min:-2e3,max:2e3,allowReset:!0}),o.a.createElement(s.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:D,onChange:function(e){return m({bottomMarginMobile:e})},min:-2e3,max:2e3,allowReset:!0}),o.a.createElement(s.RangeControl,{label:n.a.left_margin,className:"uagb-margin-control",value:H,onChange:function(e){return m({leftMarginMobile:e})},min:-2e3,max:2e3,allowReset:!0}),o.a.createElement(s.RangeControl,{label:n.a.right_margin,className:"uagb-margin-control",value:J,onChange:function(e){return m({rightMarginMobile:e})},min:-2e3,max:2e3,allowReset:!0}))),o.a.createElement(s.PanelBody,{title:Object(r.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(s.SelectControl,{label:Object(r.__)("Background Type","ultimate-addons-for-gutenberg"),value:U,onChange:function(e){return m({backgroundType:e})},options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(r.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(r.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",label:Object(r.__)("Image","ultimate-addons-for-gutenberg")},{value:"video",label:Object(r.__)("Video","ultimate-addons-for-gutenberg")}]}),"color"==U&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Background Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Q}}))),o.a.createElement(b.ColorPalette,{value:Q,onChange:function(e){return m({backgroundColor:e})},allowReset:!0})),"image"==U&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.BaseControl,{id:"section-image-settings",className:"editor-bg-image-control",label:Object(r.__)("Background Image","ultimate-addons-for-gutenberg")},o.a.createElement(b.MediaUpload,{title:Object(r.__)("Select Background Image","ultimate-addons-for-gutenberg"),onSelect:function(t){var a=e.setAttributes;t&&t.url?t.type&&"image"==t.type&&a({backgroundImage:t}):a({backgroundImage:null})},allowedTypes:["image"],value:q,render:function(e){var t=e.open;return o.a.createElement(s.Button,{isSecondary:!0,onClick:t},q?Object(r.__)("Replace image","ultimate-addons-for-gutenberg"):Object(r.__)("Select Background Image","ultimate-addons-for-gutenberg"))}}),q&&o.a.createElement(s.Button,{className:"uagb-rm-btn",onClick:function(){(0,e.setAttributes)({backgroundImage:null})},isLink:!0,isDestructive:!0},Object(r.__)("Remove Image"))),q&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.SelectControl,{label:Object(r.__)("Image Position","ultimate-addons-for-gutenberg"),value:X,onChange:function(e){return m({backgroundPosition:e})},options:[{value:"top-left",label:Object(r.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"top-center",label:Object(r.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"top-right",label:Object(r.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center-left",label:Object(r.__)("Center Left","ultimate-addons-for-gutenberg")},{value:"center-center",label:Object(r.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center-right",label:Object(r.__)("Center Right","ultimate-addons-for-gutenberg")},{value:"bottom-left",label:Object(r.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"bottom-center",label:Object(r.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"bottom-right",label:Object(r.__)("Bottom Right","ultimate-addons-for-gutenberg")}]}),o.a.createElement(s.SelectControl,{label:Object(r.__)("Attachment","ultimate-addons-for-gutenberg"),value:Y,onChange:function(e){return m({backgroundAttachment:e})},options:[{value:"fixed",label:Object(r.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(r.__)("Scroll","ultimate-addons-for-gutenberg")}]}),o.a.createElement(s.SelectControl,{label:Object(r.__)("Repeat","ultimate-addons-for-gutenberg"),value:Z,onChange:function(e){return m({backgroundRepeat:e})},options:[{value:"no-repeat",label:Object(r.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(r.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(r.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(r.__)("Repeat-y","ultimate-addons-for-gutenberg")}]}),o.a.createElement(s.SelectControl,{label:Object(r.__)("Size","ultimate-addons-for-gutenberg"),value:$,onChange:function(e){return m({backgroundSize:e})},options:[{value:"auto",label:Object(r.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(r.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(r.__)("Contain","ultimate-addons-for-gutenberg")}]}),o.a.createElement(s.SelectControl,{label:Object(r.__)("Image Overlay Type","ultimate-addons-for-gutenberg"),value:le,onChange:function(e){return m({overlayType:e})},options:[{value:"color",label:Object(r.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(r.__)("Gradient","ultimate-addons-for-gutenberg")}]}),"color"==le&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ne}}))),o.a.createElement(b.ColorPalette,{value:ne,onChange:function(e){return m({backgroundImageColor:e})},allowReset:!0})),"gradient"==le&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Color 1","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:te}}))),o.a.createElement(b.ColorPalette,{value:oe,onChange:function(e){return m({gradientOverlayColor1:e})},allowReset:!0}),o.a.createElement(s.RangeControl,{label:Object(r.__)("Location 1","ultimate-addons-for-gutenberg"),value:ue,onChange:function(e){return m({gradientOverlayLocation1:e})},min:0,max:100,allowReset:!0}),o.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Color 2","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:te}}))),o.a.createElement(b.ColorPalette,{value:re,onChange:function(e){return m({gradientOverlayColor2:e})},allowReset:!0}),o.a.createElement(s.RangeControl,{label:Object(r.__)("Location 2","ultimate-addons-for-gutenberg"),value:ce,onChange:function(e){return m({gradientOverlayLocation2:e})},min:0,max:100,allowReset:!0}),o.a.createElement(s.SelectControl,{label:Object(r.__)("Type","ultimate-addons-for-gutenberg"),value:ie,onChange:function(e){return m({gradientOverlayType:e})},options:[{value:"linear",label:Object(r.__)("Linear","ultimate-addons-for-gutenberg")},{value:"radial",label:Object(r.__)("Radial","ultimate-addons-for-gutenberg")}]}),"linear"==ie&&o.a.createElement(s.RangeControl,{label:Object(r.__)("Angle","ultimate-addons-for-gutenberg"),value:ge,onChange:function(e){return m({gradientOverlayAngle:e})},min:0,max:360,allowReset:!0}),"radial"==ie&&o.a.createElement(s.SelectControl,{label:Object(r.__)("Type","ultimate-addons-for-gutenberg"),value:be,onChange:function(e){return m({gradientOverlayPosition:e})},options:[{value:"center center",label:Object(r.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center left",label:Object(r.__)("Center Left","ultimate-addons-for-gutenberg")},{value:"center right",label:Object(r.__)("Center Right","ultimate-addons-for-gutenberg")},{value:"top center",label:Object(r.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"top left",label:Object(r.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"top right",label:Object(r.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"bottom center",label:Object(r.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"bottom left",label:Object(r.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"bottom right",label:Object(r.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})))),"gradient"==U&&o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{attributes:a,setAttributes:m})),"video"==U&&o.a.createElement(s.BaseControl,{id:"section-video-settings",className:"editor-bg-video-control",label:Object(r.__)("Background Video","ultimate-addons-for-gutenberg")},o.a.createElement(b.MediaUpload,{title:Object(r.__)("Select Background Video","ultimate-addons-for-gutenberg"),onSelect:function(t){var a=e.setAttributes;t&&t.url?t.type&&"video"==t.type&&a({backgroundVideo:t}):a({backgroundVideo:null})},allowedTypes:["video"],value:K,render:function(e){var t=e.open;return o.a.createElement(s.Button,{isSecondary:!0,onClick:t},K?Object(r.__)("Replace Video","ultimate-addons-for-gutenberg"):Object(r.__)("Select Background Video","ultimate-addons-for-gutenberg"))}}),K&&o.a.createElement(s.Button,{onClick:function(){(0,e.setAttributes)({backgroundVideo:null})},isLink:!0,isDestructive:!0},Object(r.__)("Remove Video"))),("color"==U||"image"==U&&q||"gradient"==U)&&o.a.createElement(s.RangeControl,{label:Object(r.__)("Opacity","ultimate-addons-for-gutenberg"),value:ee,onChange:function(e){return m({backgroundOpacity:e})},min:0,max:100,allowReset:!0,initialPosition:0}),"video"==U&&K&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Video Overlay Color"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:te}}))),o.a.createElement(b.ColorPalette,{value:te,onChange:function(e){return m({backgroundVideoColor:e})},allowReset:!0})),"video"==U&&K&&o.a.createElement(s.RangeControl,{label:Object(r.__)("Opacity","ultimate-addons-for-gutenberg"),value:ae,onChange:function(e){return m({backgroundVideoOpacity:e})},min:0,max:100,allowReset:!0,initialPosition:50})),o.a.createElement(s.PanelBody,{title:Object(r.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(s.SelectControl,{label:Object(r.__)("Border Style","ultimate-addons-for-gutenberg"),value:se,onChange:function(e){return m({borderStyle:e})},options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(r.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(r.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(r.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(r.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(r.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(r.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(r.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(r.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!=se&&o.a.createElement(s.RangeControl,{label:Object(r.__)("Border Width","ultimate-addons-for-gutenberg"),value:me,onChange:function(e){return m({borderWidth:e})},min:0,max:50,allowReset:!0}),o.a.createElement(s.RangeControl,{label:Object(r.__)("Border Radius","ultimate-addons-for-gutenberg"),value:de,onChange:function(e){return m({borderRadius:e})},min:0,max:1e3,allowReset:!0}),"none"!=se&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Border Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:fe}}))),o.a.createElement(b.ColorPalette,{value:fe,onChange:function(e){return m({borderColor:e})},allowReset:!0})),o.a.createElement(g.a,{setAttributes:m,label:Object(r.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:ye,label:Object(r.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:Ee,label:Object(r.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:Re,label:Object(r.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:je,label:Object(r.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:xe,label:Object(r.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:ke,label:Object(r.__)("Position","ultimate-addons-for-gutenberg")}}))))};t.default=o.a.memo(m)}}]);