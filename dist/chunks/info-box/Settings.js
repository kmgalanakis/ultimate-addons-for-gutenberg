(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{386:function(e,t,a){"use strict";a.r(t);var l=a(57),n=a.n(l),o=a(6),r=a(1),i=a(11),c=a(32),u=a(2),b=a.n(u),s=a(8),g=a(14),m=a(16),d=a(5),f=a(4);$=jQuery;var _=Object.keys(c),p=[{value:"thumbnail",label:Object(r.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(r.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(r.__)("Large","ultimate-addons-for-gutenberg")}],h=function(e){var t=e=e.parentProps,a=t.setAttributes,l=t.attributes,c=l.headingAlign,h=l.headingColor,v=l.subHeadingColor,C=l.prefixColor,E=l.prefixFontSize,S=l.prefixFontSizeType,O=l.prefixFontSizeTablet,j=l.prefixFontSizeMobile,F=l.prefixFontFamily,T=l.prefixFontWeight,y=l.prefixFontSubset,H=l.prefixLineHeightType,x=l.prefixLineHeight,N=l.prefixLineHeightTablet,z=l.prefixLineHeightMobile,R=l.prefixLoadGoogleFonts,k=l.headingTag,w=l.headFontSize,B=l.headFontSizeType,L=l.headFontSizeTablet,I=l.headFontSizeMobile,P=l.headFontFamily,M=l.headFontWeight,W=l.headFontSubset,A=l.headLineHeightType,G=l.headLineHeight,D=l.headLineHeightTablet,V=l.headLineHeightMobile,J=l.headLoadGoogleFonts,Q=l.subHeadFontSize,U=l.subHeadFontSizeType,q=l.subHeadFontSizeTablet,K=l.subHeadFontSizeMobile,X=l.subHeadFontFamily,Y=l.subHeadFontWeight,Z=l.subHeadFontSubset,ee=l.subHeadLineHeightType,te=l.subHeadLineHeight,ae=l.subHeadLineHeightTablet,le=l.subHeadLineHeightMobile,ne=l.subHeadLoadGoogleFonts,oe=l.separatorWidthType,re=l.seperatorSpace,ie=l.headSpace,ce=l.subHeadSpace,ue=l.icon,be=l.iconColor,se=l.iconSize,ge=l.iconimgPosition,me=l.iconHover,de=l.iconimgBorderRadius,fe=l.source_type,_e=l.sourceAlign,pe=l.seperatorPosition,he=l.seperatorStyle,ve=l.seperatorWidth,Ce=l.seperatorColor,Ee=l.seperatorThickness,Se=l.ctaType,Oe=l.ctaText,je=l.ctaLink,Fe=l.ctaTarget,Te=l.ctaIcon,ye=l.ctaIconPosition,He=l.ctaIconSpace,xe=l.ctaLinkColor,Ne=l.ctaFontSize,ze=l.ctaFontSizeType,Re=l.ctaFontSizeMobile,ke=l.ctaFontSizeTablet,we=l.ctaFontFamily,Be=l.ctaFontWeight,Le=l.ctaFontSubset,Ie=l.ctaLoadGoogleFonts,Pe=l.ctaBtnLinkColor,Me=l.ctaLinkHoverColor,We=l.ctaBgHoverColor,Ae=l.ctaBgColor,Ge=l.ctaBtnVertPadding,De=l.ctaBtnHrPadding,Ve=l.ctaBorderStyle,Je=l.ctaBorderColor,$e=l.ctaBorderhoverColor,Qe=l.ctaBorderWidth,Ue=l.ctaBorderRadius,qe=l.prefixSpace,Ke=l.iconLeftMargin,Xe=l.iconRightMargin,Ye=l.iconTopMargin,Ze=l.iconBottomMargin,et=l.iconImage,tt=l.imageSize,at=l.imageWidth,lt=l.imageWidthType,nt=l.stack,ot=l.showPrefix,rt=l.showTitle,it=l.showDesc,ct=l.inheritFromTheme,ut=function(e){var t=[];return $.each(e,(function(e,a){var l={value:e,label:e};t.push(l)})),t};et&&et.sizes&&(p=ut(et.sizes));var bt,st,gt,mt,dt=Object(r.__)("Select Image","ultimate-addons-for-gutenberg");if(et&&(dt=null==et.url||""==et.url?Object(r.__)("Select Image","ultimate-addons-for-gutenberg"):Object(r.__)("Replace Image","ultimate-addons-for-gutenberg")),1==R){var ft={google:{families:[F+(T?":"+T:"")]}};bt=b.a.createElement(m.a,{config:ft})}if(1==J){var _t={google:{families:[P+(M?":"+M:"")]}};mt=b.a.createElement(m.a,{config:_t})}if(1==ne){var pt={google:{families:[X+(Y?":"+Y:"")]}};st=b.a.createElement(m.a,{config:pt})}if(1==ne){var ht={google:{families:[we+(Be?":"+Be:"")]}};gt=b.a.createElement(m.a,{config:ht})}return b.a.createElement(b.a.Fragment,null,("above-title"==ge||"below-title"==ge)&&b.a.createElement(d.BlockControls,{key:"controls"},b.a.createElement(d.AlignmentToolbar,{value:c,onChange:function(e){return a({headingAlign:e})}})),b.a.createElement(d.InspectorControls,null,b.a.createElement(f.PanelBody,{title:Object(r.__)("Image/Icon","ultimate-addons-for-gutenberg")},b.a.createElement(f.SelectControl,{label:Object(r.__)("Select Position","ultimate-addons-for-gutenberg"),value:ge,onChange:function(e){return a({iconimgPosition:e})},options:[{value:"above-title",label:Object(r.__)("Above Title","ultimate-addons-for-gutenberg")},{value:"below-title",label:Object(r.__)("Below Title","ultimate-addons-for-gutenberg")},{value:"left-title",label:Object(r.__)("Left of Title","ultimate-addons-for-gutenberg")},{value:"right-title",label:Object(r.__)("Right of Title","ultimate-addons-for-gutenberg")},{value:"left",label:Object(r.__)("Left of Text and Title","ultimate-addons-for-gutenberg")},{value:"right",label:Object(r.__)("Right of Text and Title","ultimate-addons-for-gutenberg")}]}),("left"==ge||"right"==ge)&&b.a.createElement(f.SelectControl,{label:Object(r.__)("Stack on","ultimate-addons-for-gutenberg"),value:nt,options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(r.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(r.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(r.__)("Note: Choose on what breakpoint the Info Box will stack.","ultimate-addons-for-gutenberg"),onChange:function(e){return a({stack:e})}}),b.a.createElement("hr",{className:"uagb-editor__separator"}),b.a.createElement(f.SelectControl,{label:Object(r.__)("Select Source","ultimate-addons-for-gutenberg"),value:fe,onChange:function(e){return a({source_type:e})},options:[{value:"icon",label:Object(r.__)("Icon","ultimate-addons-for-gutenberg")},{value:"image",label:Object(r.__)("Image","ultimate-addons-for-gutenberg")}]}),ge&&"above-title"!==ge&&"below-title"!==ge&&b.a.createElement(f.SelectControl,{label:Object(r.__)("Vertical Alignment","ultimate-addons-for-gutenberg"),value:_e,onChange:function(e){return a({sourceAlign:e})},options:[{value:"top",label:Object(r.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:Object(r.__)("Middle","ultimate-addons-for-gutenberg")}]}),"icon"==fe&&b.a.createElement(b.a.Fragment,null,b.a.createElement(n.a,{icons:_,renderFunc:i.a,value:ue,onChange:function(e){return a({icon:e})},isMulti:!1,noSelectedPlaceholder:Object(r.__)("Select Icon","ultimate-addons-for-gutenberg")}),b.a.createElement(f.RangeControl,{label:Object(r.__)("Icon Size","ultimate-addons-for-gutenberg"),value:se,onChange:function(e){return a({iconSize:e})},min:10,max:300,beforeIcon:"",allowReset:!0}),b.a.createElement(f.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(r.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(r.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-focus-tab"}]},(function(e){var t;return t="normal"===e.name?b.a.createElement(b.a.Fragment,null,b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Icon Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:be}}))),b.a.createElement(d.ColorPalette,{value:be,onChange:function(e){return a({iconColor:e})},allowReset:!0})):b.a.createElement(b.a.Fragment,null,b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Icon Hover Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:me}}))),b.a.createElement(d.ColorPalette,{value:me,onChange:function(e){return a({iconHover:e})},allowReset:!0})),b.a.createElement("div",null,t)}))),"image"==fe&&b.a.createElement(b.a.Fragment,null,b.a.createElement(f.BaseControl,{className:"editor-bg-image-control",label:Object(r.__)("Image","ultimate-addons-for-gutenberg")},b.a.createElement(d.MediaUpload,{title:Object(r.__)("Select Image","ultimate-addons-for-gutenberg"),onSelect:function(e){if(e&&e.url)if(e.type&&"image"===e.type){if(e.sizes){var t=ut(e.sizes);p=t}a({iconImage:e})}else a({iconImage:null});else a({iconImage:null})},allowedTypes:["image"],value:et,render:function(e){var t=e.open;return b.a.createElement(f.Button,{isSecondary:!0,onClick:t},dt)}}),et&&"null"!==et.url&&""!==et.url&&b.a.createElement(f.Button,{className:"uagb-rm-btn",onClick:function(){a({iconImage:""})},isLink:!0,isDestructive:!0},Object(r.__)("Remove Image","ultimate-addons-for-gutenberg"))),et&&"null"!==et.url&&""!==et.url&&b.a.createElement(b.a.Fragment,null,b.a.createElement(f.SelectControl,{label:Object(r.__)("Image Size","ultimate-addons-for-gutenberg"),options:p,value:tt,onChange:function(e){return a({imageSize:e})}}),b.a.createElement(f.ToggleControl,{label:Object(r.__)("Custom Width","ultimate-addons-for-gutenberg"),checked:lt,onChange:function(e){return a({imageWidthType:!lt})},help:Object(r.__)("Turn this off to inherit the natural width of Image.","ultimate-addons-for-gutenberg")}),lt&&b.a.createElement(f.RangeControl,{label:Object(r.__)("Width (px)","ultimate-addons-for-gutenberg"),value:at,onChange:function(e){return a({imageWidth:e})},min:0,max:500,beforeIcon:"",allowReset:!0}),b.a.createElement(f.RangeControl,{label:Object(r.__)("Rounded Corners (px)","ultimate-addons-for-gutenberg"),value:de,onChange:function(e){return a({iconimgBorderRadius:e})},min:0,max:500,beforeIcon:"",allowReset:!0})))),b.a.createElement(f.PanelBody,{title:Object(r.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},b.a.createElement(f.ToggleControl,{label:Object(r.__)("Enable Prefix","ultimate-addons-for-gutenberg"),checked:ot,onChange:function(e){return a({showPrefix:!ot})}}),ot&&b.a.createElement(b.a.Fragment,null,b.a.createElement(u.Suspense,{fallback:Object(s.a)()},b.a.createElement(g.default,{label:Object(r.__)("Typography","ultimate-addons-for-gutenberg"),attributes:l,setAttributes:a,loadGoogleFonts:{value:R,label:"prefixLoadGoogleFonts"},fontFamily:{value:F,label:"prefixFontFamily"},fontWeight:{value:T,label:"prefixFontWeight"},fontSubset:{value:y,label:"prefixFontSubset"},fontSizeType:{value:S,label:"prefixFontSizeType"},fontSize:{value:E,label:"prefixFontSize"},fontSizeMobile:{value:j,label:"prefixFontSizeMobile"},fontSizeTablet:{value:O,label:"prefixFontSizeTablet"},lineHeightType:{value:H,label:"prefixLineHeightType"},lineHeight:{value:x,label:"prefixLineHeight"},lineHeightMobile:{value:z,label:"prefixLineHeightMobile"},lineHeightTablet:{value:N,label:"prefixLineHeightTablet"}})),b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Prefix Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:C}}))),b.a.createElement(d.ColorPalette,{value:C,onChange:function(e){return a({prefixColor:e})},allowReset:!0}),b.a.createElement("hr",{className:"uagb-editor__separator"})),b.a.createElement(f.ToggleControl,{label:Object(r.__)("Enable Title","ultimate-addons-for-gutenberg"),checked:rt,onChange:function(e){return a({showTitle:!rt})}}),rt&&b.a.createElement(b.a.Fragment,null,b.a.createElement(f.SelectControl,{label:Object(r.__)("Title Tag","ultimate-addons-for-gutenberg"),value:k,onChange:function(e){return a({headingTag:e})},options:[{value:"h1",label:Object(r.__)("H1")},{value:"h2",label:Object(r.__)("H2")},{value:"h3",label:Object(r.__)("H3")},{value:"h4",label:Object(r.__)("H4")},{value:"h5",label:Object(r.__)("H5")},{value:"h6",label:Object(r.__)("H6")}]}),b.a.createElement(u.Suspense,{fallback:Object(s.a)()},b.a.createElement(g.default,{label:Object(r.__)("Typography","ultimate-addons-for-gutenberg"),attributes:l,setAttributes:a,loadGoogleFonts:{value:J,label:"headLoadGoogleFonts"},fontFamily:{value:P,label:"headFontFamily"},fontWeight:{value:M,label:"headFontWeight"},fontSubset:{value:W,label:"headFontSubset"},fontSizeType:{value:B,label:"headFontSizeType"},fontSize:{value:w,label:"headFontSize"},fontSizeMobile:{value:I,label:"headFontSizeMobile"},fontSizeTablet:{value:L,label:"headFontSizeTablet"},lineHeightType:{value:A,label:"headLineHeightType"},lineHeight:{value:G,label:"headLineHeight"},lineHeightMobile:{value:V,label:"headLineHeightMobile"},lineHeightTablet:{value:D,label:"headLineHeightTablet"}})),b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Title Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:h}}))),b.a.createElement(d.ColorPalette,{value:h,onChange:function(e){return a({headingColor:e})},allowReset:!0}),b.a.createElement("hr",{className:"uagb-editor__separator"})),b.a.createElement(f.ToggleControl,{label:Object(r.__)("Enable Description","ultimate-addons-for-gutenberg"),checked:it,onChange:function(e){return a({showDesc:!it})}}),it&&b.a.createElement(b.a.Fragment,null,b.a.createElement(u.Suspense,{fallback:Object(s.a)()},b.a.createElement(g.default,{label:Object(r.__)("Typography","ultimate-addons-for-gutenberg"),attributes:l,setAttributes:a,loadGoogleFonts:{value:ne,label:"subHeadLoadGoogleFonts"},fontFamily:{value:X,label:"subHeadFontFamily"},fontWeight:{value:Y,label:"subHeadFontWeight"},fontSubset:{value:Z,label:"subHeadFontSubset"},fontSizeType:{value:U,label:"subHeadFontSizeType"},fontSize:{value:Q,label:"subHeadFontSize"},fontSizeMobile:{value:K,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:q,label:"subHeadFontSizeTablet"},lineHeightType:{value:ee,label:"subHeadLineHeightType"},lineHeight:{value:te,label:"subHeadLineHeight"},lineHeightMobile:{value:le,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:ae,label:"subHeadLineHeightTablet"}})),b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Description Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:v}}))),b.a.createElement(d.ColorPalette,{value:v,onChange:function(e){return a({subHeadingColor:e})},allowReset:!0}))),b.a.createElement(f.PanelBody,{title:Object(r.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},b.a.createElement(f.SelectControl,{label:Object(r.__)("Position","ultimate-addons-for-gutenberg"),value:pe,onChange:function(e){return a({seperatorPosition:e})},options:[{value:"after_icon",label:Object(r.__)("After Icon/Image","ultimate-addons-for-gutenberg")},{value:"after_prefix",label:Object(r.__)("After Prefix","ultimate-addons-for-gutenberg")},{value:"after_title",label:Object(r.__)("After Title","ultimate-addons-for-gutenberg")},{value:"after_desc",label:Object(r.__)("After Description","ultimate-addons-for-gutenberg")}]}),b.a.createElement(f.SelectControl,{label:Object(r.__)("Style"),value:he,onChange:function(e){return a({seperatorStyle:e})},options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(r.__)("Solid","ultimate-addons-for-gutenberg")},{value:"double",label:Object(r.__)("Double","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(r.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(r.__)("Dotted","ultimate-addons-for-gutenberg")}]}),"none"!==he&&b.a.createElement(b.a.Fragment,null,b.a.createElement(f.RangeControl,{label:Object(r.__)("Thickness","ultimate-addons-for-gutenberg"),value:Ee,onChange:function(e){return a({seperatorThickness:e})},min:0,max:10,beforeIcon:"",allowReset:!0}),b.a.createElement(f.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type","ultimate-addons-for-gutenberg")},b.a.createElement(f.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===oe,"aria-pressed":"px"===oe,onClick:function(){return a({separatorWidthType:"px"})}},"px"),b.a.createElement(f.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===oe,"aria-pressed":"%"===oe,onClick:function(){return a({separatorWidthType:"%"})}},"%")),b.a.createElement(f.RangeControl,{label:Object(r.__)("Width","ultimate-addons-for-gutenberg"),value:ve,onChange:function(e){return a({seperatorWidth:e})},min:0,max:"%"==oe?100:500,beforeIcon:"",allowReset:!0}),b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Separator Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Ce}}))),b.a.createElement(d.ColorPalette,{value:Ce,onChange:function(e){return a({seperatorColor:e})},allowReset:!0}))),b.a.createElement(f.PanelBody,{title:Object(r.__)("Call To Action","ultimate-addons-for-gutenberg"),initialOpen:!1},b.a.createElement(f.SelectControl,{label:Object(r.__)("Type","ultimate-addons-for-gutenberg"),value:Se,onChange:function(e){return a({ctaType:e})},options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"text",label:Object(r.__)("Text","ultimate-addons-for-gutenberg")},{value:"button",label:Object(r.__)("Button","ultimate-addons-for-gutenberg")},{value:"all",label:Object(r.__)("Complete Box","ultimate-addons-for-gutenberg")}]}),("text"===Se||"button"===Se)&&b.a.createElement(b.a.Fragment,null,b.a.createElement(f.TextControl,{label:Object(r.__)("Text","ultimate-addons-for-gutenberg"),value:Oe,onChange:function(e){return a({ctaText:e})}}),b.a.createElement(f.ToggleControl,{label:Object(r.__)("Inherit from Theme","ultimate-addons-for-gutenberg"),checked:ct,onChange:function(e){return a({inheritFromTheme:!ct})}}),"text"===Se&&b.a.createElement(g.default,{label:Object(r.__)("Typography","ultimate-addons-for-gutenberg"),attributes:l,setAttributes:a,loadGoogleFonts:{value:Ie,label:"ctaLoadGoogleFonts"},fontFamily:{value:we,label:"ctaFontFamily"},fontWeight:{value:Be,label:"ctaFontWeight"},fontSubset:{value:Le,label:"ctaFontSubset"},fontSizeType:{value:ze,label:"ctaFontSizeType"},fontSize:{value:Ne,label:"ctaFontSize"},fontSizeMobile:{value:Re,label:"ctaFontSizeMobile"},fontSizeTablet:{value:ke,label:"ctaFontSizeTablet"},disableLineHeight:!0}),!ct&&"button"===Se&&b.a.createElement(g.default,{label:Object(r.__)("Typography","ultimate-addons-for-gutenberg"),attributes:l,setAttributes:a,loadGoogleFonts:{value:Ie,label:"ctaLoadGoogleFonts"},fontFamily:{value:we,label:"ctaFontFamily"},fontWeight:{value:Be,label:"ctaFontWeight"},fontSubset:{value:Le,label:"ctaFontSubset"},fontSizeType:{value:ze,label:"ctaFontSizeType"},fontSize:{value:Ne,label:"ctaFontSize"},fontSizeMobile:{value:Re,label:"ctaFontSizeMobile"},fontSizeTablet:{value:ke,label:"ctaFontSizeTablet"},disableLineHeight:!0})),"none"!==Se&&b.a.createElement(b.a.Fragment,null,b.a.createElement(f.TextControl,{label:Object(r.__)("Link","ultimate-addons-for-gutenberg"),value:je,onChange:function(e){return a({ctaLink:e})}}),b.a.createElement(f.ToggleControl,{label:Object(r.__)("Open in new Window","ultimate-addons-for-gutenberg"),checked:Fe,onChange:function(e){return a({ctaTarget:!Fe})}})),"all"!==Se&&"none"!==Se&&b.a.createElement(b.a.Fragment,null,b.a.createElement("hr",{className:"uagb-editor__separator"}),b.a.createElement("h2",null,Object(r.__)("Button Icon","ultimate-addons-for-gutenberg")),b.a.createElement(n.a,{icons:_,renderFunc:i.a,value:Te,onChange:function(e){return a({ctaIcon:e})},isMulti:!1,noSelectedPlaceholder:Object(r.__)("Select Icon","ultimate-addons-for-gutenberg")}),""!==Te&&b.a.createElement(b.a.Fragment,null,b.a.createElement(f.SelectControl,{label:Object(r.__)("Icon Position","ultimate-addons-for-gutenberg"),value:ye,onChange:function(e){return a({ctaIconPosition:e})},options:[{value:"before",label:Object(r.__)("Before Text","ultimate-addons-for-gutenberg")},{value:"after",label:Object(r.__)("After Text","ultimate-addons-for-gutenberg")}]}),b.a.createElement(f.RangeControl,{label:Object(r.__)("Icon Spacing","ultimate-addons-for-gutenberg"),value:He,onChange:function(e){return a({ctaIconSpace:e})},min:0,max:50,beforeIcon:"",allowReset:!0})),b.a.createElement("hr",{className:"uagb-editor__separator"})),!ct&&"button"==Se&&b.a.createElement(b.a.Fragment,null,b.a.createElement("h2",null,Object(r.__)("Button Padding","ultimate-addons-for-gutenberg")),b.a.createElement(f.RangeControl,{label:o.a.vertical_spacing,value:Ge,onChange:function(e){return a({ctaBtnVertPadding:e})},min:0,max:50,className:"uagb-margin-control",allowReset:!0}),b.a.createElement(f.RangeControl,{label:o.a.horizontal_spacing,value:De,onChange:function(e){return a({ctaBtnHrPadding:e})},min:0,max:50,className:"uagb-margin-control",allowReset:!0}),b.a.createElement("hr",{className:"uagb-editor__separator"}),b.a.createElement("h2",null,Object(r.__)("Button Border","ultimate-addons-for-gutenberg")),b.a.createElement(f.SelectControl,{label:Object(r.__)("Style","ultimate-addons-for-gutenberg"),value:Ve,onChange:function(e){return a({ctaBorderStyle:e})},options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(r.__)("Solid","ultimate-addons-for-gutenberg")},{value:"double",label:Object(r.__)("Double","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(r.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(r.__)("Dotted","ultimate-addons-for-gutenberg")}]}),"none"!==Ve&&b.a.createElement(b.a.Fragment,null,b.a.createElement(f.RangeControl,{label:Object(r.__)("Width","ultimate-addons-for-gutenberg"),value:Qe,onChange:function(e){return a({ctaBorderWidth:e})},min:0,max:10,beforeIcon:"",allowReset:!0})),b.a.createElement(f.RangeControl,{label:Object(r.__)("Rounded Corner","ultimate-addons-for-gutenberg"),value:Ue,onChange:function(e){return a({ctaBorderRadius:e})},min:0,max:100,beforeIcon:"",allowReset:!0}),b.a.createElement("hr",{className:"uagb-editor__separator"})),"text"===Se&&b.a.createElement(f.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(r.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(r.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-focus-tab"}]},(function(e){var t;return t="normal"===e.name?b.a.createElement(b.a.Fragment,null,b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Text Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:xe}}))),b.a.createElement(d.ColorPalette,{value:xe,onChange:function(e){return a({ctaLinkColor:e})},allowReset:!0})):b.a.createElement(b.a.Fragment,null,b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Text Hover Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Me}}))),b.a.createElement(d.ColorPalette,{value:Me,onChange:function(e){return a({ctaLinkHoverColor:e})},allowReset:!0})),b.a.createElement("div",null,t)})),!ct&&"button"==Se&&b.a.createElement(f.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(r.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(r.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-focus-tab"}]},(function(e){var t;return t="normal"===e.name?b.a.createElement(b.a.Fragment,null,b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Text Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Pe}}))),b.a.createElement(d.ColorPalette,{value:Pe,onChange:function(e){return a({ctaBtnLinkColor:e})},allowReset:!0}),b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Background Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Ae}}))),b.a.createElement(d.ColorPalette,{value:Ae,onChange:function(e){return a({ctaBgColor:e})},allowReset:!0}),"none"!==Ve&&b.a.createElement(b.a.Fragment,null,b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Border Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Je}}))),b.a.createElement(d.ColorPalette,{value:Je,onChange:function(e){return a({ctaBorderColor:e})},allowReset:!0}))):b.a.createElement(b.a.Fragment,null,b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Text Hover Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Me}}))),b.a.createElement(d.ColorPalette,{value:Me,onChange:function(e){return a({ctaLinkHoverColor:e})},allowReset:!0}),b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Background Hover Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:We}}))),b.a.createElement(d.ColorPalette,{value:We,onChange:function(e){return a({ctaBgHoverColor:e})},allowReset:!0}),"none"!==Ve&&b.a.createElement(b.a.Fragment,null,b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Border Hover Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:$e}}))),b.a.createElement(d.ColorPalette,{value:$e,onChange:function(e){return a({ctaBorderhoverColor:e})},allowReset:!0}))),b.a.createElement("div",null,t)}))),b.a.createElement(f.PanelBody,{title:Object(r.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},ot&&b.a.createElement(f.RangeControl,{label:Object(r.__)("Prefix Bottom Margin","ultimate-addons-for-gutenberg"),value:qe,onChange:function(e){return a({prefixSpace:e})},min:0,max:50,beforeIcon:"",allowReset:!0}),rt&&b.a.createElement(f.RangeControl,{label:Object(r.__)("Title Bottom Margin","ultimate-addons-for-gutenberg"),value:ie,onChange:function(e){return a({headSpace:e})},min:0,max:50,beforeIcon:"",allowReset:!0}),"none"!==he&&b.a.createElement(f.RangeControl,{label:Object(r.__)("Separator Bottom Margin","ultimate-addons-for-gutenberg"),value:re,onChange:function(e){return a({seperatorSpace:e})},min:0,max:50,beforeIcon:"",allowReset:!0}),it&&b.a.createElement(f.RangeControl,{label:Object(r.__)("Description Bottom Margin","ultimate-addons-for-gutenberg"),value:ce,onChange:function(e){return a({subHeadSpace:e})},min:0,max:50,beforeIcon:"",allowReset:!0}),b.a.createElement("hr",{className:"uagb-editor__separator"}),b.a.createElement("h2",null,Object(r.__)("Image/Icon Margin (px)","ultimate-addons-for-gutenberg")),b.a.createElement(f.RangeControl,{label:o.a.left_margin,className:"uagb-margin-control",value:Ke,onChange:function(e){return a({iconLeftMargin:e})},min:0,max:50,allowReset:!0}),b.a.createElement(f.RangeControl,{label:o.a.right_margin,className:"uagb-margin-control",value:Xe,onChange:function(e){return a({iconRightMargin:e})},min:0,max:50,allowReset:!0}),b.a.createElement(f.RangeControl,{label:o.a.top_margin,className:"uagb-margin-control",value:Ye,onChange:function(e){return a({iconTopMargin:e})},min:0,max:50,allowReset:!0}),b.a.createElement(f.RangeControl,{label:o.a.bottom_margin,className:"uagb-margin-control",value:Ze,onChange:function(e){return a({iconBottomMargin:e})},min:0,max:50,allowReset:!0}))),b.a.createElement(u.Suspense,{fallback:Object(s.a)()},bt,st,gt,mt))};t.default=b.a.memo(h)}}]);