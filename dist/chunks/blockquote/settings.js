(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{364:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a.n(n),o=a(3),r=a(1),u=a.n(r),i=a(6),c=a(5),s=a(0),b=a(261),m=a(9),g=function(e){var t,a,n,r=e=e.parentProps,g=r.className,d=r.setAttributes,_=r.attributes,f=[{key:"px",name:Object(s.__)("px","ultimate-addons-for-gutenberg")},{key:"em",name:Object(s.__)("em","ultimate-addons-for-gutenberg")}],h=_.skinStyle,p=_.align,E=_.authorColor,v=_.descColor,C=_.descFontSize,O=_.descFontSizeType,S=_.descFontSizeTablet,w=_.descFontSizeMobile,j=_.descFontFamily,F=_.descFontWeight,y=_.descFontSubset,N=_.descLineHeightType,T=_.descLineHeight,B=_.descLineHeightTablet,R=_.descLineHeightMobile,k=_.descLoadGoogleFonts,z=_.authorFontSize,H=_.authorFontSizeType,P=_.authorFontSizeTablet,I=_.authorFontSizeMobile,L=_.authorFontFamily,q=_.authorFontWeight,x=_.authorFontSubset,M=_.authorLineHeightType,A=_.authorLineHeight,G=_.authorLineHeightTablet,Q=_.authorLineHeightMobile,W=_.authorLoadGoogleFonts,U=_.descSpace,D=_.authorSpace,V=_.stack,J=_.borderColor,K=_.borderStyle,X=_.borderWidth,Y=_.borderGap,Z=_.verticalPadding,$=_.quoteColor,ee=_.quoteBgColor,te=_.quoteSize,ae=_.quoteSizeType,ne=_.quoteSizeTablet,le=_.quoteSizeMobile,oe=_.quotePadding,re=_.quotePaddingType,ue=_.quotePaddingTablet,ie=_.quotePaddingMobile,ce=_.quoteBorderRadius,se=_.quoteStyle,be=_.enableTweet,me=_.tweetLinkColor,ge=_.tweetBtnColor,de=_.tweetBtnHoverColor,_e=_.tweetBtnBgColor,fe=_.tweetBtnBgHoverColor,he=_.tweetBtnFontSize,pe=_.tweetBtnFontSizeType,Ee=_.tweetBtnFontSizeTablet,ve=_.tweetBtnFontSizeMobile,Ce=_.tweetBtnFontFamily,Oe=_.tweetBtnFontWeight,Se=_.tweetBtnFontSubset,we=_.tweetBtnLineHeightType,je=_.tweetBtnLineHeight,Fe=_.tweetBtnLineHeightTablet,ye=_.tweetBtnLineHeightMobile,Ne=_.tweetBtnLoadGoogleFonts,Te=_.tweetBtnHrPadding,Be=_.tweetBtnVrPadding,Re=_.tweetIconSpacing,ke=_.iconView,ze=_.iconSkin,He=_.iconLabel,Pe=_.iconShareVia,Ie=_.iconTargetUrl,Le=_.customUrl,qe=_.authorImage,xe=_.authorImageWidth,Me=_.authorImageSize,Ae=_.authorImgBorderRadius,Ge=_.authorImgPosition,Qe=_.quoteTopMargin,We=_.quoteBottomMargin,Ue=_.quoteLeftMargin,De=_.quoteRightMargin,Ve=_.quoteHoverColor,Je=_.quoteBgHoverColor,Ke=_.borderHoverColor;if(1==k){var Xe={google:{families:[j+(F?":"+F:"")]}};t=u.a.createElement(i.default,{config:Xe})}if(1==W){var Ye={google:{families:[L+(q?":"+q:"")]}};a=u.a.createElement(i.default,{config:Ye})}if(1==Ne){var Ze={google:{families:[Ce+(Oe?":"+Oe:"")]}};n=u.a.createElement(i.default,{config:Ze})}var $e=u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement(b.BaseControl,{id:"blockquote-image-controls",className:"editor-bg-image-control",label:Object(s.__)("Author Image","ultimate-addons-for-gutenberg")},u.a.createElement(m.MediaUpload,{title:Object(s.__)("Select Image","ultimate-addons-for-gutenberg"),onSelect:function(t){var a=e.setAttributes;t&&t.url?t.type&&"image"==t.type&&a({authorImage:t}):a({authorImage:null})},allowedTypes:["image"],value:qe,render:function(e){var t=e.open;return u.a.createElement(b.Button,{isSecondary:!0,onClick:t},ut)}}),qe&&"null"!==qe.url&&""!==qe.url&&u.a.createElement(b.Button,{className:"uagb-rm-btn",onClick:function(){(0,e.setAttributes)({authorImage:null})},isLink:!0,isDestructive:!0},Object(s.__)("Remove Image","ultimate-addons-for-gutenberg"))),qe&&"null"!==qe.url&&""!==qe.url&&u.a.createElement(u.a.Fragment,null,u.a.createElement(b.SelectControl,{label:Object(s.__)("Author Image Position","ultimate-addons-for-gutenberg"),value:Ge,onChange:function(e){return d({authorImgPosition:e})},options:[{value:"left",label:Object(s.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(s.__)("Right","ultimate-addons-for-gutenberg")},{value:"top",label:Object(s.__)("Top","ultimate-addons-for-gutenberg")}]}),u.a.createElement(b.SelectControl,{label:Object(s.__)("Author Image Size","ultimate-addons-for-gutenberg"),options:rt,value:Me,onChange:function(e){return d({authorImageSize:e})}}),u.a.createElement(b.RangeControl,{label:Object(s.__)("Author Image Width","ultimate-addons-for-gutenberg"),value:xe,onChange:function(e){return d({authorImageWidth:e})},min:0,max:500,beforeIcon:"",allowReset:!0}),u.a.createElement(b.RangeControl,{label:Object(s.__)("Author Image Rounded Corners","ultimate-addons-for-gutenberg"),value:Ae,onChange:function(e){return d({authorImgBorderRadius:e})},min:0,max:100,beforeIcon:"",allowReset:!0}))),et=u.a.createElement(u.a.Fragment,null,u.a.createElement("h2",null,Object(s.__)("Modern Layout - Styling","ultimate-addons-for-gutenberg")),u.a.createElement(b.SelectControl,{label:Object(s.__)("Quote Border Style","ultimate-addons-for-gutenberg"),value:K,onChange:function(e){return d({borderStyle:e})},options:[{value:"none",label:Object(s.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(s.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(s.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(s.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(s.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(s.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(s.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(s.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(s.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!=K&&u.a.createElement(b.RangeControl,{label:Object(s.__)("Thickness (px)","ultimate-addons-for-gutenberg"),value:X,onChange:function(e){return d({borderWidth:e})},min:0,max:50,allowReset:!0})),tt=u.a.createElement(u.a.Fragment,null,u.a.createElement("h2",null,Object(s.__)("Quotation Layout - Styling","ultimate-addons-for-gutenberg")),u.a.createElement(b.TabPanel,{className:"uagb-size-type-field-tabs",activeClass:"active-tab",tabs:[{name:"desktop",title:u.a.createElement(b.Dashicon,{icon:"desktop"}),className:"uagb-desktop-tab uagb-responsive-tabs"},{name:"tablet",title:u.a.createElement(b.Dashicon,{icon:"tablet"}),className:"uagb-tablet-tab uagb-responsive-tabs"},{name:"mobile",title:u.a.createElement(b.Dashicon,{icon:"smartphone"}),className:"uagb-mobile-tab uagb-responsive-tabs"}]},(function(e){var t;return t="mobile"===e.name?u.a.createElement(u.a.Fragment,null,mt,u.a.createElement(b.RangeControl,{label:Object(s.__)("Quote Icon Size","ultimate-addons-for-gutenberg"),value:le,onChange:function(e){return d({quoteSizeMobile:e})},min:0,max:500,beforeIcon:"editor-textcolor",allowReset:!0,initialPosition:30})):"tablet"===e.name?u.a.createElement(u.a.Fragment,null,mt,u.a.createElement(b.RangeControl,{label:Object(s.__)("Quote Icon Size","ultimate-addons-for-gutenberg"),value:ne,onChange:function(e){return d({quoteSizeTablet:e})},min:0,max:500,beforeIcon:"editor-textcolor",allowReset:!0,initialPosition:30})):u.a.createElement(u.a.Fragment,null,mt,u.a.createElement(b.RangeControl,{label:Object(s.__)("Quote Icon Size","ultimate-addons-for-gutenberg"),value:te,onChange:function(e){return d({quoteSize:e})},min:0,max:500,beforeIcon:"editor-textcolor",allowReset:!0,initialPosition:30})),u.a.createElement("div",null,t)})),u.a.createElement(b.TabPanel,{className:"uagb-size-type-field-tabs",activeClass:"active-tab",tabs:[{name:"desktop",title:u.a.createElement(b.Dashicon,{icon:"desktop"}),className:"uagb-desktop-tab uagb-responsive-tabs"},{name:"tablet",title:u.a.createElement(b.Dashicon,{icon:"tablet"}),className:"uagb-tablet-tab uagb-responsive-tabs"},{name:"mobile",title:u.a.createElement(b.Dashicon,{icon:"smartphone"}),className:"uagb-mobile-tab uagb-responsive-tabs"}]},(function(e){var t;return t="mobile"===e.name?u.a.createElement(u.a.Fragment,null,gt,u.a.createElement(b.RangeControl,{label:Object(s.__)("Background Size","ultimate-addons-for-gutenberg"),value:ie,onChange:function(e){return d({quotePaddingMobile:e})},min:0,max:500,beforeIcon:"editor-textcolor",allowReset:!0,initialPosition:30})):"tablet"===e.name?u.a.createElement(u.a.Fragment,null,gt,u.a.createElement(b.RangeControl,{label:Object(s.__)("Background Size","ultimate-addons-for-gutenberg"),value:ue,onChange:function(e){return d({quotePaddingTablet:e})},min:0,max:500,beforeIcon:"editor-textcolor",allowReset:!0,initialPosition:30})):u.a.createElement(u.a.Fragment,null,gt,u.a.createElement(b.RangeControl,{label:Object(s.__)("Background Size","ultimate-addons-for-gutenberg"),value:oe,onChange:function(e){return d({quotePadding:e})},min:0,max:500,beforeIcon:"editor-textcolor",allowReset:!0,initialPosition:30})),u.a.createElement("div",null,t)})),ee&&u.a.createElement(b.RangeControl,{label:Object(s.__)("Quote Icon Border Radius (%)","ultimate-addons-for-gutenberg"),value:ce,onChange:function(e){return d({quoteBorderRadius:e})},min:0,max:100,allowReset:!0})),at=u.a.createElement(b.PanelBody,{title:Object(s.__)("Layout","ultimate-addons-for-gutenberg")},u.a.createElement(b.SelectControl,{label:Object(s.__)("Layout","ultimate-addons-for-gutenberg"),options:[{value:"border",label:Object(s.__)("Modern","ultimate-addons-for-gutenberg")},{value:"quotation",label:Object(s.__)("Quotation","ultimate-addons-for-gutenberg")}],value:h,onChange:function(e){return d({skinStyle:e})}}),u.a.createElement("hr",{className:"uagb-editor__separator"}),"border"===h&&et,"quotation"===h&&tt,"quotation"===h&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(s.__)("Quote Icon Colors","ultimate-addons-for-gutenberg"))),"none"!=K&&u.a.createElement(b.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(s.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(s.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-hover-tab"}]},(function(e){var t;return t="hover"===e.name?ct:it,u.a.createElement("div",null,t)})),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement(b.SelectControl,{label:Object(s.__)("Stack on","ultimate-addons-for-gutenberg"),value:V,options:[{value:"none",label:Object(s.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(s.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(s.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(s.__)("Note: Choose on what breakpoint the elements will stack.","ultimate-addons-for-gutenberg"),onChange:function(e){return d({stack:e})}})),nt=u.a.createElement(b.PanelBody,{title:Object(s.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement("h2",null,Object(s.__)("Quote","ultimate-addons-for-gutenberg")),u.a.createElement(c.default,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:_,setAttributes:d,loadGoogleFonts:{value:k,label:"descLoadGoogleFonts"},fontFamily:{value:j,label:"descFontFamily"},fontWeight:{value:F,label:"descFontWeight"},fontSubset:{value:y,label:"descFontSubset"},fontSizeType:{value:O,label:"descFontSizeType"},fontSize:{value:C,label:"descFontSize"},fontSizeMobile:{value:w,label:"descFontSizeMobile"},fontSizeTablet:{value:S,label:"descFontSizeTablet"},lineHeightType:{value:N,label:"descLineHeightType"},lineHeight:{value:T,label:"descLineHeight"},lineHeightMobile:{value:R,label:"descLineHeightMobile"},lineHeightTablet:{value:B,label:"descLineHeightTablet"}}),u.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Quote Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:v}}))),u.a.createElement(m.ColorPalette,{value:v,onChange:function(e){return d({descColor:e})},allowReset:!0}),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(s.__)("Author","ultimate-addons-for-gutenberg")),u.a.createElement(c.default,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:_,setAttributes:d,loadGoogleFonts:{value:W,label:"authorLoadGoogleFonts"},fontFamily:{value:L,label:"authorFontFamily"},fontWeight:{value:q,label:"authorFontWeight"},fontSubset:{value:x,label:"authorFontSubset"},fontSizeType:{value:H,label:"authorFontSizeType"},fontSize:{value:z,label:"authorFontSize"},fontSizeMobile:{value:I,label:"authorFontSizeMobile"},fontSizeTablet:{value:P,label:"authorFontSizeTablet"},lineHeightType:{value:M,label:"authorLineHeightType"},lineHeight:{value:A,label:"authorLineHeight"},lineHeightMobile:{value:Q,label:"authorLineHeightMobile"},lineHeightTablet:{value:G,label:"authorLineHeightTablet"}}),u.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Author Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:E}}))),u.a.createElement(m.ColorPalette,{value:E,onChange:function(e){return d({authorColor:e})},allowReset:!0}),$e),lt=u.a.createElement(b.PanelBody,{title:Object(s.__)("Twitter Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(b.ToggleControl,{label:Object(s.__)("Enable Twitter Icon","ultimate-addons-for-gutenberg"),checked:be,onChange:function(){return d({enableTweet:!be})}}),be&&u.a.createElement(u.a.Fragment,null,u.a.createElement(b.SelectControl,{label:Object(s.__)("Icon View","ultimate-addons-for-gutenberg"),value:ke,onChange:function(e){return d({iconView:e})},options:[{value:"icon_text",label:Object(s.__)("Icon & Text","ultimate-addons-for-gutenberg")},{value:"icon",label:Object(s.__)("Icon","ultimate-addons-for-gutenberg")},{value:"text",label:Object(s.__)("Text","ultimate-addons-for-gutenberg")}]}),u.a.createElement(b.SelectControl,{label:Object(s.__)("Icon Style","ultimate-addons-for-gutenberg"),value:ze,onChange:function(e){return d({iconSkin:e})},options:[{value:"classic",label:Object(s.__)("Classic","ultimate-addons-for-gutenberg")},{value:"bubble",label:Object(s.__)("Bubble","ultimate-addons-for-gutenberg")},{value:"link",label:Object(s.__)("Link","ultimate-addons-for-gutenberg")}]})),be&&"icon"!==ke&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement(b.TextControl,{label:Object(s.__)("Label","ultimate-addons-for-gutenberg"),value:He,onChange:function(e){return d({iconLabel:e})}})),be&&u.a.createElement(u.a.Fragment,null,u.a.createElement(c.default,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:_,setAttributes:d,loadGoogleFonts:{value:Ne,label:"tweetBtnLoadGoogleFonts"},fontFamily:{value:Ce,label:"tweetBtnFontFamily"},fontWeight:{value:Oe,label:"tweetBtnFontWeight"},fontSubset:{value:Se,label:"tweetBtnFontSubset"},fontSizeType:{value:pe,label:"tweetBtnFontSizeType"},fontSize:{value:he,label:"tweetBtnFontSize"},fontSizeMobile:{value:ve,label:"tweetBtnFontSizeMobile"},fontSizeTablet:{value:Ee,label:"tweetBtnFontSizeTablet"},lineHeightType:{value:we,label:"tweetBtnLineHeightType"},lineHeight:{value:je,label:"tweetBtnLineHeight"},lineHeightMobile:{value:ye,label:"tweetBtnLineHeightMobile"},lineHeightTablet:{value:Fe,label:"tweetBtnLineHeightTablet"}}),u.a.createElement(b.SelectControl,{label:Object(s.__)("Target URL","ultimate-addons-for-gutenberg"),value:Ie,onChange:function(e){return d({iconTargetUrl:e})},options:[{value:"current",label:Object(s.__)("Current Page","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(s.__)("Custom URL","ultimate-addons-for-gutenberg")}]}),"custom"==Ie&&u.a.createElement(b.TextControl,{label:Object(s.__)("URL","ultimate-addons-for-gutenberg"),value:Le,onChange:function(e){return d({customUrl:e})}})),be&&"link"!==ze&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(s.__)("Button Padding (px)","ultimate-addons-for-gutenberg")),u.a.createElement(b.RangeControl,{label:o.a.vertical_spacing,className:"uagb-margin-control",value:Be,onChange:function(e){return d({tweetBtnVrPadding:e})},min:0,max:500,allowReset:!0,initialPosition:5}),u.a.createElement(b.RangeControl,{label:o.a.horizontal_spacing,className:"uagb-margin-control",value:Te,onChange:function(e){return d({tweetBtnHrPadding:e})},min:0,max:500,allowReset:!0,initialPosition:5})),be&&"icon_text"==ke&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement(b.RangeControl,{label:Object(s.__)("Space between Tweet Icon and Text","ultimate-addons-for-gutenberg"),value:Re,onChange:function(e){return d({tweetIconSpacing:e})},min:0,max:20,allowReset:!0,initialPosition:5})),be&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement(b.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(s.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(s.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-hover-tab"}]},(function(e){var t;return t="hover"===e.name?bt:st,u.a.createElement("div",null,t)})))),ot=u.a.createElement(b.PanelBody,{title:Object(s.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},"quotation"===h&&u.a.createElement(u.a.Fragment,null,u.a.createElement("h2",null,Object(s.__)("Quote Icon Margin (px)","ultimate-addons-for-gutenberg")),u.a.createElement(b.RangeControl,{label:o.a.top_margin,className:"uagb-margin-control",value:Qe,onChange:function(e){return d({quoteTopMargin:e})},min:0,max:500,allowReset:!0}),u.a.createElement(b.RangeControl,{label:o.a.bottom_margin,className:"uagb-margin-control",value:We,onChange:function(e){return d({quoteBottomMargin:e})},min:0,max:500,allowReset:!0}),u.a.createElement(b.RangeControl,{label:o.a.left_margin,className:"uagb-margin-control",value:Ue,onChange:function(e){return d({quoteLeftMargin:e})},min:0,max:500,allowReset:!0}),u.a.createElement(b.RangeControl,{label:o.a.right_margin,className:"uagb-margin-control",value:De,onChange:function(e){return d({quoteRightMargin:e})},min:0,max:500,allowReset:!0}),u.a.createElement("hr",{className:"uagb-editor__separator"})),"border"===h&&u.a.createElement(b.RangeControl,{label:Object(s.__)("Gap Between Border and Quote","ultimate-addons-for-gutenberg"),value:Y,onChange:function(e){return d({borderGap:e})},min:0,max:500,allowReset:!0}),u.a.createElement(b.RangeControl,{label:Object(s.__)("Quote Bottom Spacing","ultimate-addons-for-gutenberg"),value:U,onChange:function(e){return d({descSpace:e})},min:0,max:200,allowReset:!0,initialPosition:0}),"center"==p&&"border"!==h&&u.a.createElement(b.RangeControl,{label:Object(s.__)("Author Bottom Spacing","ultimate-addons-for-gutenberg"),value:D,onChange:function(e){return d({authorSpace:e})},min:0,max:200,allowReset:!0,initialPosition:0}),"border"===h&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(s.__)("Vertical Padding","ultimate-addons-for-gutenberg")),u.a.createElement(b.RangeControl,{label:o.a.vertical_spacing,className:"uagb-margin-control",value:Z,onChange:function(e){return d({verticalPadding:e})},min:0,max:500,allowReset:!0}))),rt=[{value:"thumbnail",label:Object(s.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(s.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(s.__)("Large","ultimate-addons-for-gutenberg")}],ut=Object(s.__)("Select Image","ultimate-addons-for-gutenberg");qe&&(ut=null==qe.url||""==qe.url?Object(s.__)("Select Image","ultimate-addons-for-gutenberg"):Object(s.__)("Replace Image","ultimate-addons-for-gutenberg"));var it=u.a.createElement(u.a.Fragment,null,"none"!=K&&"border"==h&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Border Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:J}}))),u.a.createElement(m.ColorPalette,{value:J,onChange:function(e){return d({borderColor:e})},allowReset:!0})),"quotation"==h&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Icon Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:$}}))),u.a.createElement(m.ColorPalette,{value:$,onChange:function(e){return d({quoteColor:e})},allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Icon Background Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ee}}))),u.a.createElement(m.ColorPalette,{value:ee,onChange:function(e){return d({quoteBgColor:e})},allowReset:!0}))),ct=u.a.createElement(u.a.Fragment,null,"border"==h&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Border Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Ke}}))),u.a.createElement(m.ColorPalette,{value:Ke,onChange:function(e){return d({borderHoverColor:e})},allowReset:!0})),"quotation"==h&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Ve}}))),u.a.createElement(m.ColorPalette,{value:Ve,onChange:function(e){return d({quoteHoverColor:e})},allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Background Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Je}}))),u.a.createElement(m.ColorPalette,{value:Je,onChange:function(e){return d({quoteBgHoverColor:e})},allowReset:!0}))),st=u.a.createElement(u.a.Fragment,null,"link"==ze&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Tweet Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:me}}))),u.a.createElement(m.ColorPalette,{value:me,onChange:function(e){return d({tweetLinkColor:e})},allowReset:!0})),"link"!==ze&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Tweet Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ge}}))),u.a.createElement(m.ColorPalette,{value:ge,onChange:function(e){return d({tweetBtnColor:e})},allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Tweet Background Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:_e}}))),u.a.createElement(m.ColorPalette,{value:_e,onChange:function(e){return d({tweetBtnBgColor:e})},allowReset:!0}))),bt=u.a.createElement(u.a.Fragment,null,"link"==ze&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Tweet Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:de}}))),u.a.createElement(m.ColorPalette,{value:de,onChange:function(e){return d({tweetBtnHoverColor:e})},allowReset:!0})),"link"!==ze&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Tweet Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:de}}))),u.a.createElement(m.ColorPalette,{value:de,onChange:function(e){return d({tweetBtnHoverColor:e})},allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Tweet Background Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:fe}}))),u.a.createElement(m.ColorPalette,{value:fe,onChange:function(e){return d({tweetBtnBgHoverColor:e})},allowReset:!0}))),mt=u.a.createElement(b.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(s.__)("Size Type","ultimate-addons-for-gutenberg")},f.map((function(e){var t=e.name,a=e.key;return u.a.createElement(b.Button,{key:a,className:"uagb-size-btn",isSmall:!0,isPrimary:ae===a,"aria-pressed":ae===a,onClick:function(){return d({quoteSizeType:a})}},t)}))),gt=u.a.createElement(b.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(s.__)("Size Type","ultimate-addons-for-gutenberg")},f.map((function(e){var t=e.name,a=e.key;return u.a.createElement(b.Button,{key:a,className:"uagb-size-btn",isSmall:!0,isPrimary:re===a,"aria-pressed":re===a,onClick:function(){return d({quotePaddingType:a})}},t)})));return u.a.createElement(u.a.Fragment,null,u.a.createElement(m.BlockControls,{key:"controls"},"border"!==h&&u.a.createElement(m.AlignmentToolbar,{value:p,onChange:function(e){return d({align:e})}}),"quotation"===h&&u.a.createElement(u.a.Fragment,null,u.a.createElement(b.Toolbar,{label:"Options"},u.a.createElement(b.Tooltip,{text:Object(s.__)("Normal Quote","ultimate-addons-for-gutenberg")},u.a.createElement(b.Button,{className:l()("components-icon-button","components-toolbar__control",{"is-active":"style_1"===se}),onClick:function(){return d({quoteStyle:"style_1"})}},o.a.quote_1))),u.a.createElement(b.Toolbar,{label:"Options"},u.a.createElement(b.Tooltip,{text:Object(s.__)("Inline Quote","ultimate-addons-for-gutenberg")},u.a.createElement(b.Button,{className:l()("components-icon-button","components-toolbar__control",{"is-active":"style_2"===se}),onClick:function(){return d({quoteStyle:"style_2"})}},o.a.quote_2)))),be&&u.a.createElement(u.a.Fragment,null,u.a.createElement(b.Toolbar,{label:"Options"},u.a.createElement("label",{"aria-label":Object(s.__)("Twitter Username","ultimate-addons-for-gutenberg"),className:"".concat(g,"__via-label"),htmlFor:"".concat(g,"__via")}," ",o.a.at_the_rate),u.a.createElement("input",{"aria-label":Object(s.__)("Twitter Username","ultimate-addons-for-gutenberg"),className:"".concat(g,"__via"),id:"".concat(g,"__via"),onChange:function(e){return d({iconShareVia:e.target.value})},placeholder:Object(s.__)("Username","ultimate-addons-for-gutenberg"),type:"text",value:Pe})))),u.a.createElement(m.InspectorControls,null,at,nt,lt,ot),t,a,n)};t.default=u.a.memo(g)}}]);