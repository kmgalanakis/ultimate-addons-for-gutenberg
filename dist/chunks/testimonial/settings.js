(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{377:function(e,t,a){"use strict";a.r(t);var n=a(16),l=a.n(n),o=a(0),r=a(1),i=a.n(r),u=a(9),g=a(5),c=a(6);function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var m=Object(r.lazy)((function(){return Promise.resolve().then(a.bind(null,8))})),d=Object(r.lazy)((function(){return Promise.resolve().then(a.bind(null,10))})),s=Object(r.lazy)((function(){return Promise.resolve().then(a.bind(null,17))})),_=function(e){var t,a,n,_=e=e.parentProps,f=_.setAttributes,p=_.attributes,v=_.deviceType,h=p.test_item_count,O=p.test_block,y=p.headingAlign,C=p.companyColor,j=p.descColor,S=p.authorColor,E=p.nameFontSizeType,F=p.nameFontSize,T=p.nameFontSizeTablet,R=p.nameFontSizeMobile,k=p.nameFontFamily,w=p.nameFontWeight,z=p.nameFontSubset,H=p.nameLineHeightType,B=p.nameLineHeight,L=p.nameLineHeightTablet,I=p.nameLineHeightMobile,P=p.nameLoadGoogleFonts,M=p.companyFontSizeType,A=p.companyFontSize,N=p.companyFontSizeTablet,x=p.companyFontSizeMobile,G=p.companyFontFamily,W=p.companyFontWeight,D=p.companyFontSubset,V=p.companyLineHeightType,J=p.companyLineHeight,U=p.companyLineHeightTablet,q=p.companyLineHeightMobile,$=p.companyLoadGoogleFonts,K=p.descFontSizeType,Q=p.descFontSize,X=p.descFontSizeTablet,Y=p.descFontSizeMobile,Z=p.descFontFamily,ee=p.descFontWeight,te=p.descFontSubset,ae=p.descLineHeightType,ne=p.descLineHeight,le=p.descLineHeightTablet,oe=p.descLineHeightMobile,re=p.descLoadGoogleFonts,ie=p.descSpace,ue=p.iconimgStyle,ge=p.imagePosition,ce=p.imageAlignment,be=p.nameSpace,me=p.imgHrPadding,de=p.imgVrPadding,se=p.imageSize,_e=p.imageWidth,fe=p.columns,pe=p.tcolumns,ve=p.mcolumns,he=p.pauseOnHover,Oe=p.infiniteLoop,ye=p.transitionSpeed,Ce=p.arrowDots,je=p.arrowSize,Se=p.arrowBorderSize,Ee=p.arrowBorderRadius,Fe=p.autoplay,Te=p.autoplaySpeed,Re=p.arrowColor,ke=p.rowGap,we=p.columnGap,ze=p.contentPadding,He=p.backgroundType,Be=p.backgroundColor,Le=p.backgroundImage,Ie=p.backgroundPosition,Pe=p.backgroundSize,Me=p.backgroundRepeat,Ae=p.backgroundImageColor,Ne=p.backgroundOpacity,xe=p.borderStyle,Ge=p.borderWidth,We=p.borderRadius,De=p.borderColor,Ve=p.stack;if(1==P){var Je={google:{families:[k+(w?":"+w:"")]}};t=i.a.createElement(d,{config:Je})}if(1==$){var Ue={google:{families:[G+(W?":"+W:"")]}};a=i.a.createElement(d,{config:Ue})}if(1==re){var qe={google:{families:[Z+(ee?":"+ee:"")]}};n=i.a.createElement(d,{config:qe})}var $e=[{value:"thumbnail",label:Object(o.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(o.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(o.__)("Large","ultimate-addons-for-gutenberg")}],Ke=0;return O.map((function(e,t){var a=O[t];if(a&&void 0!==a){var n=a.image;null!=n&&""!==n&&Ke++}})),i.a.createElement(r.Suspense,{fallback:Object(u.a)()},i.a.createElement(g.BlockControls,{key:"controls"},i.a.createElement(g.AlignmentToolbar,{value:y,onChange:function(e){return f({headingAlign:e})}})),i.a.createElement(g.InspectorControls,null,i.a.createElement(c.PanelBody,{title:Object(o.__)("General"),initialOpen:!0},i.a.createElement(c.RangeControl,{label:Object(o.__)("Number of Testimonials","ultimate-addons-for-gutenberg"),value:h,onChange:function(e){var t,a=function(e){if(Array.isArray(e))return b(e)}(t=O)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return b(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?b(e,void 0):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();if(a.length<e){for(var n=Math.abs(e-a.length),l=0;l<n;l++)a.push({description:"I have been working with these guys since years now! With lots of hard work and timely communication they made sure they delivered the best to me. Highly recommended!",name:"John Doe",company:"Company"+(a.length+1),image:""});f({test_block:a})}else{for(var o=Math.abs(e-a.length),r=a,i=0;i<o;i++)r.pop();f({test_block:r})}f({test_item_count:e})},min:0,max:50,allowReset:!0}),i.a.createElement(s,null),"Desktop"===v&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.RangeControl,{label:Object(o.__)("Columns","ultimate-addons-for-gutenberg"),value:fe,onChange:function(e){return f({columns:e})},min:1,max:h})),"Tablet"===v&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.RangeControl,{label:Object(o.__)("Columns","ultimate-addons-for-gutenberg"),value:pe,onChange:function(e){return f({tcolumns:e})},min:1,max:h})),"Mobile"===v&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.RangeControl,{label:Object(o.__)("Columns","ultimate-addons-for-gutenberg"),value:ve,onChange:function(e){return f({mcolumns:e})},min:1,max:h}))),i.a.createElement(c.PanelBody,{title:Object(o.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},l()(h,(function(e){return a=null,O[t=e]&&void 0!==O[t]&&(a=O[t].image),i.a.createElement(c.PanelBody,{key:t,title:Object(o.__)("Image","ultimate-addons-for-gutenberg")+" "+(t+1)+" "+Object(o.__)("Settings","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb-repeater-panel"},i.a.createElement(c.BaseControl,{className:"editor-bg-image-control",label:Object(o.__)("")},i.a.createElement(g.MediaUpload,{title:Object(o.__)("Select Image"+(t+1)),onSelect:function(e){!function(e,t){var a=null;a=e&&e.url?e:null,e.type&&"image"===e.type||(a=null);var n=O.map((function(e,n){return t===n&&(e.image=a),e}));f({test_block:n})}(e,t)},allowedTypes:["image"],value:a,render:function(e){var a,n,l=e.open;return i.a.createElement(c.Button,{isSecondary:!0,onClick:l},(a=O[t].image,n=Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),a&&(n=null==a.url||""==a.url?Object(o.__)("Select Image","ultimate-addons-for-gutenberg"):Object(o.__)("Replace Image","ultimate-addons-for-gutenberg")),n))}}),a&&null!==O[t].image.url&&""!==O[t].image.url&&i.a.createElement(c.Button,{className:"uagb-rm-btn",key:t,onClick:function(){!function(e){var t=O.map((function(t,a){return e===a&&(t.image=null),t}));f({test_block:t})}(t)},isLink:!0,isDestructive:!0},Object(o.__)("Remove Image"))));var t,a})),Ke>0&&i.a.createElement(i.a.Fragment,null,i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement(c.SelectControl,{label:Object(o.__)("Image Position"),value:ge,onChange:function(e){return f({imagePosition:e})},options:[{value:"top",label:Object(o.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(o.__)("Bottom","ultimate-addons-for-gutenberg")},{value:"left",label:Object(o.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(o.__)("Right","ultimate-addons-for-gutenberg")}]}),("left"==ge||"right"==ge)&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.SelectControl,{label:Object(o.__)("Vertical ALignment","ultimate-addons-for-gutenberg"),value:ce,onChange:function(e){return f({imageAlignment:e})},options:[{value:"top",label:Object(o.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:Object(o.__)("Middle","ultimate-addons-for-gutenberg")}]}),i.a.createElement(c.SelectControl,{label:Object(o.__)("Stack on","ultimate-addons-for-gutenberg"),value:Ve,options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(o.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(o.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(o.__)("Note: Choose on what breakpoint the Info Box will stack.","ultimate-addons-for-gutenberg"),onChange:function(e){return f({stack:e})}})),i.a.createElement(c.SelectControl,{label:Object(o.__)("Image Style","ultimate-addons-for-gutenberg"),value:ue,onChange:function(e){return f({iconimgStyle:e})},options:[{value:"normal",label:Object(o.__)("Normal","ultimate-addons-for-gutenberg")},{value:"circle",label:Object(o.__)("Circle","ultimate-addons-for-gutenberg")},{value:"square",label:Object(o.__)("Square","ultimate-addons-for-gutenberg")}]}),i.a.createElement(c.SelectControl,{label:Object(o.__)("Image Size","ultimate-addons-for-gutenberg"),options:$e,value:se,onChange:function(e){return f({imageSize:e})}}),i.a.createElement(c.RangeControl,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),value:_e,onChange:function(e){return f({imageWidth:e})},min:0,max:500,allowReset:!0}))),i.a.createElement(c.PanelBody,{title:Object(o.__)("Carousel","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(c.ToggleControl,{label:Object(o.__)("Pause On Hover","ultimate-addons-for-gutenberg"),checked:he,onChange:function(){f({pauseOnHover:!he})}}),i.a.createElement(c.ToggleControl,{label:Object(o.__)("Autoplay"),checked:Fe,onChange:function(){f({autoplay:!Fe})}}),1==Fe&&i.a.createElement(c.RangeControl,{label:Object(o.__)("Autoplay Speed (ms)","ultimate-addons-for-gutenberg"),value:Te,onChange:function(e){return f({autoplaySpeed:e})},min:100,max:1e4}),i.a.createElement(c.ToggleControl,{label:Object(o.__)("Infinite Loop","ultimate-addons-for-gutenberg"),checked:Oe,onChange:function(){f({infiniteLoop:!Oe})}}),i.a.createElement(c.RangeControl,{label:Object(o.__)("Transition Speed (ms)","ultimate-addons-for-gutenberg"),value:ye,onChange:function(e){return f({transitionSpeed:e})},min:100,max:5e3}),i.a.createElement(c.SelectControl,{label:Object(o.__)("Show Arrows & Dots","ultimate-addons-for-gutenberg"),value:Ce,onChange:function(e){return f({arrowDots:e})},options:[{value:"arrows",label:Object(o.__)("Only Arrows","ultimate-addons-for-gutenberg")},{value:"dots",label:Object(o.__)("Only Dots","ultimate-addons-for-gutenberg")},{value:"arrows_dots",label:Object(o.__)("Both Arrows & Dots","ultimate-addons-for-gutenberg")}]}),"dots"!=Ce&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.RangeControl,{label:Object(o.__)("Arrow Size","ultimate-addons-for-gutenberg"),value:je,onChange:function(e){return f({arrowSize:e})},min:0,max:50}),i.a.createElement(c.RangeControl,{label:Object(o.__)("Arrow Border Size","ultimate-addons-for-gutenberg"),value:Se,onChange:function(e){return f({arrowBorderSize:e})},min:0,max:50}),i.a.createElement(c.RangeControl,{label:Object(o.__)("Arrow Border Radius","ultimate-addons-for-gutenberg"),value:Ee,onChange:function(e){return f({arrowBorderRadius:e})},min:0,max:50}))),i.a.createElement(i.a.Fragment,null,i.a.createElement(c.PanelBody,{title:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement("h2",null,Object(o.__)("Testimonial","ultimate-addons-for-gutenberg")),i.a.createElement(m,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:p,setAttributes:f,loadGoogleFonts:{value:re,label:"descLoadGoogleFonts"},fontFamily:{value:Z,label:"descFontFamily"},fontWeight:{value:ee,label:"descFontWeight"},fontSubset:{value:te,label:"descFontSubset"},fontSizeType:{value:K,label:"descFontSizeType"},fontSize:{value:Q,label:"descFontSize"},fontSizeMobile:{value:Y,label:"descFontSizeMobile"},fontSizeTablet:{value:X,label:"descFontSizeTablet"},lineHeightType:{value:ae,label:"descLineHeightType"},lineHeight:{value:ne,label:"descLineHeight"},lineHeightMobile:{value:oe,label:"descLineHeightMobile"},lineHeightTablet:{value:le,label:"descLineHeightTablet"}}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("h2",null,Object(o.__)("Name","ultimate-addons-for-gutenberg")),i.a.createElement(m,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:p,setAttributes:f,loadGoogleFonts:{value:P,label:"nameLoadGoogleFonts"},fontFamily:{value:k,label:"nameFontFamily"},fontWeight:{value:w,label:"nameFontWeight"},fontSubset:{value:z,label:"nameFontSubset"},fontSizeType:{value:E,label:"nameFontSizeType"},fontSize:{value:F,label:"nameFontSize"},fontSizeMobile:{value:R,label:"nameFontSizeMobile"},fontSizeTablet:{value:T,label:"nameFontSizeTablet"},lineHeightType:{value:H,label:"nameLineHeightType"},lineHeight:{value:B,label:"nameLineHeight"},lineHeightMobile:{value:I,label:"nameLineHeightMobile"},lineHeightTablet:{value:L,label:"nameLineHeightTablet"}}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("h2",null,Object(o.__)("Company","ultimate-addons-for-gutenberg")),i.a.createElement(m,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:p,setAttributes:f,loadGoogleFonts:{value:$,label:"companyLoadGoogleFonts"},fontFamily:{value:G,label:"companyFontFamily"},fontWeight:{value:W,label:"companyFontWeight"},fontSubset:{value:D,label:"companyFontSubset"},fontSizeType:{value:M,label:"companyFontSizeType"},fontSize:{value:A,label:"companyFontSize"},fontSizeMobile:{value:x,label:"companyFontSizeMobile"},fontSizeTablet:{value:N,label:"companyFontSizeTablet"},lineHeightType:{value:V,label:"companyLineHeightType"},lineHeight:{value:J,label:"companyLineHeight"},lineHeightMobile:{value:q,label:"companyLineHeightMobile"},lineHeightTablet:{value:U,label:"companyLineHeightTablet"}})),i.a.createElement(g.PanelColorSettings,{title:Object(o.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!1,colorSettings:[{value:j,onChange:function(e){return f({descColor:e})},label:Object(o.__)("Testimonial Color","ultimate-addons-for-gutenberg")},{value:S,onChange:function(e){return f({authorColor:e})},label:Object(o.__)("Name Color","ultimate-addons-for-gutenberg")},{value:C,onChange:function(e){return f({companyColor:e})},label:Object(o.__)("Company Color","ultimate-addons-for-gutenberg")},{value:Re,onChange:function(e){return f({arrowColor:e})},label:Object(o.__)("Arrow & Dots Color","ultimate-addons-for-gutenberg")}]})),i.a.createElement(c.PanelBody,{title:Object(o.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(c.RangeControl,{label:Object(o.__)("Gap Between Content & Dots","ultimate-addons-for-gutenberg"),value:ke,onChange:function(e){return f({rowGap:e})},min:0,max:50,allowReset:!0}),i.a.createElement(c.RangeControl,{label:Object(o.__)("Row Gap","ultimate-addons-for-gutenberg"),value:we,onChange:function(e){return f({columnGap:e})},min:0,max:50,allowReset:!0}),i.a.createElement(c.RangeControl,{label:Object(o.__)("Content Padding","ultimate-addons-for-gutenberg"),value:ze,onChange:function(e){return f({contentPadding:e})},min:0,max:50,allowReset:!0}),i.a.createElement(c.RangeControl,{label:Object(o.__)("Testimonial Bottom Margin","ultimate-addons-for-gutenberg"),value:ie,onChange:function(e){return f({descSpace:e})},min:0,max:50,allowReset:!0}),i.a.createElement(c.RangeControl,{label:Object(o.__)("Name Bottom Margin","ultimate-addons-for-gutenberg"),value:be,onChange:function(e){return f({nameSpace:e})},min:0,max:50,allowReset:!0}),i.a.createElement(c.RangeControl,{label:Object(o.__)("Image Horizontal Padding","ultimate-addons-for-gutenberg"),value:me,onChange:function(e){return f({imgHrPadding:e})},min:0,max:50,allowReset:!0}),i.a.createElement(c.RangeControl,{label:Object(o.__)("Image Vertical Padding","ultimate-addons-for-gutenberg"),value:de,onChange:function(e){return f({imgVrPadding:e})},min:0,max:50,allowReset:!0})),i.a.createElement(i.a.Fragment,null,i.a.createElement(c.PanelBody,{title:Object(o.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(c.SelectControl,{label:Object(o.__)("Background Type","ultimate-addons-for-gutenberg"),value:He,onChange:function(e){return f({backgroundType:e})},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"image",label:Object(o.__)("Image","ultimate-addons-for-gutenberg")}]}),"color"==He&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Be}}))),i.a.createElement(g.ColorPalette,{value:Be,onChange:function(e){return f({backgroundColor:e})},allowReset:!0})),"image"==He&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.BaseControl,{className:"editor-bg-image-control",label:Object(o.__)("Background Image","ultimate-addons-for-gutenberg")},i.a.createElement(g.MediaUpload,{title:Object(o.__)("Select Background Image","ultimate-addons-for-gutenberg"),onSelect:function(e){e&&e.url&&e.type&&"image"===e.type?f({backgroundImage:e}):f({backgroundImage:null})},allowedTypes:["image"],value:Le,render:function(e){var t=e.open;return i.a.createElement(c.Button,{isSecondary:!0,onClick:t},Le?Object(o.__)("Replace image","ultimate-addons-for-gutenberg"):Object(o.__)("Select Background Image","ultimate-addons-for-gutenberg"))}}),Le&&i.a.createElement(c.Button,{className:"uagb-rm-btn",onClick:function(){f({backgroundImage:null})},isLink:!0,isDestructive:!0},Object(o.__)("Remove Image","ultimate-addons-for-gutenberg"))),Le&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.SelectControl,{label:Object(o.__)("Image Position","ultimate-addons-for-gutenberg"),value:Ie,onChange:function(e){return f({backgroundPosition:e})},options:[{value:"top-left",label:Object(o.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"top-center",label:Object(o.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"top-right",label:Object(o.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center-left",label:Object(o.__)("Center Left","ultimate-addons-for-gutenberg")},{value:"center-center",label:Object(o.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center-right",label:Object(o.__)("Center Right","ultimate-addons-for-gutenberg")},{value:"bottom-left",label:Object(o.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"bottom-center",label:Object(o.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"bottom-right",label:Object(o.__)("Bottom Right","ultimate-addons-for-gutenberg")}]}),i.a.createElement(c.SelectControl,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),value:Me,onChange:function(e){return f({backgroundRepeat:e})},options:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]}),i.a.createElement(c.SelectControl,{label:Object(o.__)("Size"),value:Pe,onChange:function(e){return f({backgroundSize:e})},options:[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")}]}),i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Ae}}))),i.a.createElement(g.ColorPalette,{value:Ae,onChange:function(e){return f({backgroundImageColor:e})},allowReset:!0})))),"image"==He&&Le&&i.a.createElement(c.RangeControl,{label:Object(o.__)("Opacity","ultimate-addons-for-gutenberg"),value:Ne,onChange:function(e){return f({backgroundOpacity:e})},min:0,max:100,allowReset:!0,initialPosition:0})),i.a.createElement(c.PanelBody,{title:Object(o.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(c.SelectControl,{label:Object(o.__)("Border Style","ultimate-addons-for-gutenberg"),value:xe,onChange:function(e){return f({borderStyle:e})},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(o.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(o.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(o.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(o.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(o.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(o.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(o.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(o.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!=xe&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.RangeControl,{label:Object(o.__)("Border Width","ultimate-addons-for-gutenberg"),value:Ge,onChange:function(e){return f({borderWidth:e})},min:0,max:50,allowReset:!0}),i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Border Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:De}}))),i.a.createElement(g.ColorPalette,{value:De,onChange:function(e){return f({borderColor:e})},allowReset:!0}))),i.a.createElement(c.RangeControl,{label:Object(o.__)("Border Radius","ultimate-addons-for-gutenberg"),value:We,onChange:function(e){return f({borderRadius:e})},min:0,max:1e3,allowReset:!0})))),t,a,n)};t.default=i.a.memo(_)}}]);