(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{402:function(e,t,l){"use strict";l.r(t);var a=l(1),n=l.n(a),o=l(8),i=l(15),r=l(43),c=l(35),b=l(6),u=l(2),s=l(11),g=l(5),m=l(4),_=function(e){var t,l,_,h=e=e.parentProps,p=h.setAttributes,d=h.attributes,v=h.deviceType,f=d.menu_item_count,S=d.titleSpace,E=d.imgHrPadding,F=d.imgVrPadding,O=d.columns,C=d.tcolumns,j=d.mcolumns,T=d.rowGap,y=d.columnGap,H=d.contentHrPadding,z=d.contentVrPadding,L=d.priceColor,k=d.descColor,M=d.titleColor,P=d.seperatorStyle,w=d.seperatorWidth,R=d.seperatorThickness,G=d.seperatorColor,N=d.priceLoadGoogleFonts,x=d.titleLoadGoogleFonts,W=d.descLoadGoogleFonts,B=d.titleFontSizeType,I=d.titleFontSize,A=d.titleFontSizeTablet,V=d.titleFontSizeMobile,D=d.titleFontFamily,J=d.titleFontWeight,q=d.titleFontSubset,K=d.titleLineHeightType,Q=d.titleLineHeight,U=d.titleLineHeightTablet,X=d.titleLineHeightMobile,Y=d.priceFontSizeType,Z=d.priceFontSize,$=d.priceFontSizeTablet,ee=d.priceFontSizeMobile,te=d.priceFontFamily,le=d.priceFontWeight,ae=d.priceFontSubset,ne=d.priceLineHeightType,oe=d.priceLineHeight,ie=d.priceLineHeightTablet,re=d.priceLineHeightMobile,ce=d.descFontSizeType,be=d.descFontSize,ue=d.descFontSizeTablet,se=d.descFontSizeMobile,ge=d.descFontFamily,me=d.descFontWeight,_e=d.descFontSubset,he=d.descLineHeightType,pe=d.descLineHeight,de=d.descLineHeightTablet,ve=d.descLineHeightMobile,fe=d.headingTag,Se=d.imagePosition,Ee=d.imageAlignment,Fe=d.imageSize,Oe=d.imageWidth,Ce=d.stack,je=function(t){Object(s.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,l){e.attributes.imagePosition=t})),p({imagePosition:t})};if(1==x){var Te={google:{families:[D+(J?":"+J:"")]}};t=n.a.createElement(r.a,{config:Te})}if(1==W){var ye={google:{families:[ge+(me?":"+me:"")]}};l=n.a.createElement(r.a,{config:ye})}if(1==N){var He={google:{families:[te+(le?":"+le:"")]}};_=n.a.createElement(r.a,{config:He})}var ze=[{value:"thumbnail",label:Object(u.__)("Thumbnail")},{value:"medium",label:Object(u.__)("Medium")},{value:"full",label:Object(u.__)("Large")}],Le=n.a.createElement(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},n.a.createElement(m.Path,{d:"M9 20h6V9H9v11zM4 4v1.5h16V4H4z"}));return n.a.createElement(n.a.Fragment,null,n.a.createElement(g.InspectorControls,null,n.a.createElement(m.PanelBody,{title:Object(u.__)("General"),initialOpen:!0},n.a.createElement(c.default,null),"Desktop"===v&&n.a.createElement(n.a.Fragment,null,n.a.createElement(m.RangeControl,{label:Object(u.__)("Columns"),value:O,onChange:function(t){Object(s.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,l){e.attributes.columns=t})),p({columns:t})},min:1,max:Math.min(3,f)})),"Tablet"===v&&n.a.createElement(n.a.Fragment,null,n.a.createElement(m.RangeControl,{label:Object(u.__)("Columns"),value:C,onChange:function(e){return p({tcolumns:e})},min:1,max:Math.min(3,f)})),"Mobile"===v&&n.a.createElement(n.a.Fragment,null,n.a.createElement(m.RangeControl,{label:Object(u.__)("Columns"),value:j,onChange:function(e){return p({mcolumns:e})},min:1,max:Math.min(3,f)})),n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,n.a.createElement("strong",null,Object(u.__)("Image Settings"))),n.a.createElement("h2",null," ",Object(u.__)("Image Position")),n.a.createElement(m.ButtonGroup,{className:"uagb-editor_imgpos_group"},n.a.createElement(m.Button,{key:"left",icon:"editor-alignleft",label:"Left",onClick:function(){return je("left")},"aria-pressed":"left"===Se,isPrimary:"left"===Se}),n.a.createElement(m.Button,{key:"top",icon:Le,label:"Top",onClick:function(){return je("top")},"aria-pressed":"top"===Se,isPrimary:"top"===Se}),n.a.createElement(m.Button,{key:"right",icon:"editor-alignright",label:"Right",onClick:function(){return je("right")},"aria-pressed":"right"===Se,isPrimary:"right"===Se})),("left"==Se||"right"==Se)&&n.a.createElement(n.a.Fragment,null,n.a.createElement(m.SelectControl,{label:Object(u.__)("Vertical Alignment"),value:Ee,onChange:function(t){Object(s.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,l){e.attributes.imageAlignment=t})),p({imageAlignment:t})},options:[{value:"top",label:Object(u.__)("Top")},{value:"middle",label:Object(u.__)("Middle")}]}),n.a.createElement(m.SelectControl,{label:Object(u.__)("Stack on"),value:Ce,options:[{value:"none",label:Object(u.__)("None")},{value:"tablet",label:Object(u.__)("Tablet")},{value:"mobile",label:Object(u.__)("Mobile")}],help:Object(u.__)("Note: Choose on what breakpoint the Images will stack."),onChange:function(e){return p({stack:e})}})),n.a.createElement(m.SelectControl,{label:Object(u.__)("Image Size"),options:ze,value:Fe,onChange:function(t){Object(s.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,l){e.attributes.imageSize=t})),p({imageSize:t})}}),n.a.createElement(m.RangeControl,{label:Object(u.__)("Width"),value:Oe,onChange:function(e){return p({imageWidth:e})},min:0,max:500,allowReset:!0})),n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,n.a.createElement("strong",null,"Separator Settings")),n.a.createElement(m.SelectControl,{label:Object(u.__)("Separator Style"),value:P,onChange:function(e){return p({seperatorStyle:e})},options:[{value:"none",label:Object(u.__)("None")},{value:"solid",label:Object(u.__)("Solid")},{value:"dotted",label:Object(u.__)("Dotted")},{value:"dashed",label:Object(u.__)("Dashed")},{value:"double",label:Object(u.__)("Double")},{value:"groove",label:Object(u.__)("Groove")},{value:"inset",label:Object(u.__)("Inset")},{value:"outset",label:Object(u.__)("Outset")},{value:"ridge",label:Object(u.__)("Ridge")}]}),"none"!=P&&n.a.createElement(n.a.Fragment,null,n.a.createElement(m.RangeControl,{label:Object(u.__)("Separator Width (%)"),value:w,onChange:function(e){return p({seperatorWidth:e})},min:0,max:100,allowReset:!0}),n.a.createElement(m.RangeControl,{label:Object(u.__)("Separator Thickness"),value:R,onChange:function(e){return p({seperatorThickness:e})},min:0,max:20,allowReset:!0}),n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"uagb-setting-label"},Object(u.__)("Separator Color"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:G}}))),n.a.createElement(g.ColorPalette,{value:G,onChange:function(e){return p({seperatorColor:e})},allowReset:!0}))))),n.a.createElement(m.PanelBody,{title:Object(u.__)("Spacing"),initialOpen:!1},n.a.createElement(m.RangeControl,{label:Object(u.__)("Row Gap"),value:T,onChange:function(e){return p({rowGap:e})},min:0,max:50,allowReset:!0}),n.a.createElement(m.RangeControl,{label:Object(u.__)("Column Gap"),value:y,onChange:function(e){return p({columnGap:e})},min:0,max:50,allowReset:!0}),n.a.createElement(m.RangeControl,{label:Object(u.__)("Title Bottom Margin"),value:S,onChange:function(e){return p({titleSpace:e})},min:0,max:50,allowReset:!0}),n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement("h2",null,Object(u.__)("Item Padding (px)")),n.a.createElement(m.RangeControl,{label:b.a.vertical_spacing,className:"uagb-margin-control",value:z,onChange:function(e){return p({contentVrPadding:e})},min:0,max:50,allowReset:!0}),n.a.createElement(m.RangeControl,{label:b.a.horizontal_spacing,className:"uagb-margin-control",value:H,onChange:function(e){return p({contentHrPadding:e})},min:0,max:50,allowReset:!0}),n.a.createElement(n.a.Fragment,null,n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement("h2",null,Object(u.__)("Image Padding (px)")),n.a.createElement(m.RangeControl,{label:b.a.vertical_spacing,className:"uagb-margin-control",value:F,onChange:function(e){return p({imgVrPadding:e})},min:0,max:50,allowReset:!0}),n.a.createElement(m.RangeControl,{label:b.a.horizontal_spacing,className:"uagb-margin-control",value:E,onChange:function(e){return p({imgHrPadding:e})},min:0,max:50,allowReset:!0}))),n.a.createElement(g.PanelColorSettings,{title:Object(u.__)("Color Settings"),initialOpen:!1,colorSettings:[{value:M,onChange:function(e){return p({titleColor:e})},label:Object(u.__)("Title Color")},{value:k,onChange:function(e){return p({descColor:e})},label:Object(u.__)("Content Color")},{value:L,onChange:function(e){return p({priceColor:e})},label:Object(u.__)("Price Color")}]}),n.a.createElement(m.PanelBody,{title:Object(u.__)("Typography"),initialOpen:!1},n.a.createElement("h2",null,Object(u.__)("Title")),n.a.createElement(m.SelectControl,{label:Object(u.__)("Title Tag"),value:fe,onChange:function(t){Object(s.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,l){e.attributes.headingTag=t})),p({headingTag:t})},options:[{value:"h1",label:Object(u.__)("H1")},{value:"h2",label:Object(u.__)("H2")},{value:"h3",label:Object(u.__)("H3")},{value:"h4",label:Object(u.__)("H4")},{value:"h5",label:Object(u.__)("H5")},{value:"h6",label:Object(u.__)("H6")},{value:"p",label:Object(u.__)("P")},{value:"span",label:Object(u.__)("SPAN")}]}),n.a.createElement(a.Suspense,{fallback:Object(o.a)()},n.a.createElement(i.default,{label:Object(u.__)("Typography"),attributes:d,setAttributes:p,loadGoogleFonts:{value:x,label:"titleLoadGoogleFonts"},fontFamily:{value:D,label:"titleFontFamily"},fontWeight:{value:J,label:"titleFontWeight"},fontSubset:{value:q,label:"titleFontSubset"},fontSizeType:{value:B,label:"titleFontSizeType"},fontSize:{value:I,label:"titleFontSize"},fontSizeMobile:{value:V,label:"titleFontSizeMobile"},fontSizeTablet:{value:A,label:"titleFontSizeTablet"},lineHeightType:{value:K,label:"titleLineHeightType"},lineHeight:{value:Q,label:"titleLineHeight"},lineHeightMobile:{value:X,label:"titleLineHeightMobile"},lineHeightTablet:{value:U,label:"titleLineHeightTablet"}}),n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement("h2",null,Object(u.__)("Content")),n.a.createElement(i.default,{label:Object(u.__)("Typography"),attributes:d,setAttributes:p,loadGoogleFonts:{value:W,label:"descLoadGoogleFonts"},fontFamily:{value:ge,label:"descFontFamily"},fontWeight:{value:me,label:"descFontWeight"},fontSubset:{value:_e,label:"descFontSubset"},fontSizeType:{value:ce,label:"descFontSizeType"},fontSize:{value:be,label:"descFontSize"},fontSizeMobile:{value:se,label:"descFontSizeMobile"},fontSizeTablet:{value:ue,label:"descFontSizeTablet"},lineHeightType:{value:he,label:"descLineHeightType"},lineHeight:{value:pe,label:"descLineHeight"},lineHeightMobile:{value:ve,label:"descLineHeightMobile"},lineHeightTablet:{value:de,label:"descLineHeightTablet"}}),n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement("h2",null,Object(u.__)("Price")),n.a.createElement(i.default,{label:Object(u.__)("Typography"),attributes:d,setAttributes:p,loadGoogleFonts:{value:N,label:"priceLoadGoogleFonts"},fontFamily:{value:te,label:"priceFontFamily"},fontWeight:{value:le,label:"priceFontWeight"},fontSubset:{value:ae,label:"priceFontSubset"},fontSizeType:{value:Y,label:"priceFontSizeType"},fontSize:{value:Z,label:"priceFontSize"},fontSizeMobile:{value:ee,label:"priceFontSizeMobile"},fontSizeTablet:{value:$,label:"priceFontSizeTablet"},lineHeightType:{value:ne,label:"priceLineHeightType"},lineHeight:{value:oe,label:"priceLineHeight"},lineHeightMobile:{value:re,label:"priceLineHeightMobile"},lineHeightTablet:{value:ie,label:"priceLineHeightTablet"}})))),n.a.createElement(a.Suspense,{fallback:Object(o.a)()},t,l,_))};t.default=n.a.memo(_)}}]);