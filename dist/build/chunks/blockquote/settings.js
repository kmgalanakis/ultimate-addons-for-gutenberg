(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{334:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(2),r=a(3),i=a.n(r),u=a(5),c=a(4),s=a(0),m=wp.components,b=m.PanelBody,g=m.SelectControl,d=m.RangeControl,_=m.Button,f=m.TextControl,p=m.BaseControl,h=m.ToggleControl,E=m.Toolbar,v=m.Tooltip,C=m.TabPanel,O=m.ButtonGroup,w=m.Dashicon,j=wp.blockEditor,S=j.AlignmentToolbar,F=j.BlockControls,y=j.InspectorControls,N=j.ColorPalette,T=j.MediaUpload,B=function(e){var t,a,n,r=e=e.parentProps,m=r.className,j=r.setAttributes,B=r.attributes,k=[{key:"px",name:Object(s.__)("px","ultimate-addons-for-gutenberg")},{key:"em",name:Object(s.__)("em","ultimate-addons-for-gutenberg")}],z=B.skinStyle,H=B.align,R=B.authorColor,I=B.descColor,L=B.descFontSize,q=B.descFontSizeType,x=B.descFontSizeTablet,P=B.descFontSizeMobile,M=B.descFontFamily,A=B.descFontWeight,Q=B.descFontSubset,G=B.descLineHeightType,W=B.descLineHeight,U=B.descLineHeightTablet,V=B.descLineHeightMobile,D=B.descLoadGoogleFonts,J=B.authorFontSize,K=B.authorFontSizeType,X=B.authorFontSizeTablet,Y=B.authorFontSizeMobile,Z=B.authorFontFamily,$=B.authorFontWeight,ee=B.authorFontSubset,te=B.authorLineHeightType,ae=B.authorLineHeight,ne=B.authorLineHeightTablet,le=B.authorLineHeightMobile,oe=B.authorLoadGoogleFonts,re=B.descSpace,ie=B.authorSpace,ue=B.stack,ce=B.borderColor,se=B.borderStyle,me=B.borderWidth,be=B.borderGap,ge=B.verticalPadding,de=B.quoteColor,_e=B.quoteBgColor,fe=B.quoteSize,pe=B.quoteSizeType,he=B.quoteSizeTablet,Ee=B.quoteSizeMobile,ve=B.quotePadding,Ce=B.quotePaddingType,Oe=B.quotePaddingTablet,we=B.quotePaddingMobile,je=B.quoteBorderRadius,Se=B.quoteStyle,Fe=B.enableTweet,ye=B.tweetLinkColor,Ne=B.tweetBtnColor,Te=B.tweetBtnHoverColor,Be=B.tweetBtnBgColor,ke=B.tweetBtnBgHoverColor,ze=B.tweetBtnFontSize,He=B.tweetBtnFontSizeType,Re=B.tweetBtnFontSizeTablet,Ie=B.tweetBtnFontSizeMobile,Le=B.tweetBtnFontFamily,qe=B.tweetBtnFontWeight,xe=B.tweetBtnFontSubset,Pe=B.tweetBtnLineHeightType,Me=B.tweetBtnLineHeight,Ae=B.tweetBtnLineHeightTablet,Qe=B.tweetBtnLineHeightMobile,Ge=B.tweetBtnLoadGoogleFonts,We=B.tweetBtnHrPadding,Ue=B.tweetBtnVrPadding,Ve=B.tweetIconSpacing,De=B.iconView,Je=B.iconSkin,Ke=B.iconLabel,Xe=B.iconShareVia,Ye=B.iconTargetUrl,Ze=B.customUrl,$e=B.authorImage,et=B.authorImageWidth,tt=B.authorImageSize,at=B.authorImgBorderRadius,nt=B.authorImgPosition,lt=B.quoteTopMargin,ot=B.quoteBottomMargin,rt=B.quoteLeftMargin,it=B.quoteRightMargin,ut=B.quoteHoverColor,ct=B.quoteBgHoverColor,st=B.borderHoverColor;if(1==D){var mt={google:{families:[M+(A?":"+A:"")]}};t=i.a.createElement(u.default,{config:mt})}if(1==oe){var bt={google:{families:[Z+($?":"+$:"")]}};a=i.a.createElement(u.default,{config:bt})}if(1==Ge){var gt={google:{families:[Le+(qe?":"+qe:"")]}};n=i.a.createElement(u.default,{config:gt})}var dt=i.a.createElement(b,{title:Object(s.__)("Layout","ultimate-addons-for-gutenberg")},i.a.createElement(g,{label:Object(s.__)("Layout","ultimate-addons-for-gutenberg"),options:[{value:"border",label:Object(s.__)("Modern","ultimate-addons-for-gutenberg")},{value:"quotation",label:Object(s.__)("Quotation","ultimate-addons-for-gutenberg")}],value:z,onChange:function(e){return j({skinStyle:e})}}),i.a.createElement("hr",{className:"uagb-editor__separator"}),"border"===z&&ht,"quotation"===z&&Et,"quotation"===z&&i.a.createElement(i.a.Fragment,null,i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("h2",null,Object(s.__)("Quote Icon Colors","ultimate-addons-for-gutenberg"))),"none"!=se&&i.a.createElement(C,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(s.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(s.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-hover-tab"}]},(function(e){var t;return t="hover"===e.name?jt:wt,i.a.createElement("div",null,t)})),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement(g,{label:Object(s.__)("Stack on","ultimate-addons-for-gutenberg"),value:ue,options:[{value:"none",label:Object(s.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(s.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(s.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(s.__)("Note: Choose on what breakpoint the elements will stack.","ultimate-addons-for-gutenberg"),onChange:function(e){return j({stack:e})}})),_t=i.a.createElement(i.a.Fragment,null,i.a.createElement(b,{title:Object(s.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement("h2",null,Object(s.__)("Quote","ultimate-addons-for-gutenberg")),i.a.createElement(c.default,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:B,setAttributes:j,loadGoogleFonts:{value:D,label:"descLoadGoogleFonts"},fontFamily:{value:M,label:"descFontFamily"},fontWeight:{value:A,label:"descFontWeight"},fontSubset:{value:Q,label:"descFontSubset"},fontSizeType:{value:q,label:"descFontSizeType"},fontSize:{value:L,label:"descFontSize"},fontSizeMobile:{value:P,label:"descFontSizeMobile"},fontSizeTablet:{value:x,label:"descFontSizeTablet"},lineHeightType:{value:G,label:"descLineHeightType"},lineHeight:{value:W,label:"descLineHeight"},lineHeightMobile:{value:V,label:"descLineHeightMobile"},lineHeightTablet:{value:U,label:"descLineHeightTablet"}}),i.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Quote Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:I}}))),i.a.createElement(N,{value:I,onChange:function(e){return j({descColor:e})},allowReset:!0}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("h2",null,Object(s.__)("Author","ultimate-addons-for-gutenberg")),i.a.createElement(c.default,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:B,setAttributes:j,loadGoogleFonts:{value:oe,label:"authorLoadGoogleFonts"},fontFamily:{value:Z,label:"authorFontFamily"},fontWeight:{value:$,label:"authorFontWeight"},fontSubset:{value:ee,label:"authorFontSubset"},fontSizeType:{value:K,label:"authorFontSizeType"},fontSize:{value:J,label:"authorFontSize"},fontSizeMobile:{value:Y,label:"authorFontSizeMobile"},fontSizeTablet:{value:X,label:"authorFontSizeTablet"},lineHeightType:{value:te,label:"authorLineHeightType"},lineHeight:{value:ae,label:"authorLineHeight"},lineHeightMobile:{value:le,label:"authorLineHeightMobile"},lineHeightTablet:{value:ne,label:"authorLineHeightTablet"}}),i.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Author Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:R}}))),i.a.createElement(N,{value:R,onChange:function(e){return j({authorColor:e})},allowReset:!0}),Ot)),ft=i.a.createElement(b,{title:Object(s.__)("Twitter Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(h,{label:Object(s.__)("Enable Twitter Icon","ultimate-addons-for-gutenberg"),checked:Fe,onChange:function(){return j({enableTweet:!Fe})}}),Fe&&i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{label:Object(s.__)("Icon View","ultimate-addons-for-gutenberg"),value:De,onChange:function(e){return j({iconView:e})},options:[{value:"icon_text",label:Object(s.__)("Icon & Text","ultimate-addons-for-gutenberg")},{value:"icon",label:Object(s.__)("Icon","ultimate-addons-for-gutenberg")},{value:"text",label:Object(s.__)("Text","ultimate-addons-for-gutenberg")}]}),i.a.createElement(g,{label:Object(s.__)("Icon Style","ultimate-addons-for-gutenberg"),value:Je,onChange:function(e){return j({iconSkin:e})},options:[{value:"classic",label:Object(s.__)("Classic","ultimate-addons-for-gutenberg")},{value:"bubble",label:Object(s.__)("Bubble","ultimate-addons-for-gutenberg")},{value:"link",label:Object(s.__)("Link","ultimate-addons-for-gutenberg")}]})),Fe&&"icon"!==De&&i.a.createElement(i.a.Fragment,null,i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement(f,{label:Object(s.__)("Label","ultimate-addons-for-gutenberg"),value:Ke,onChange:function(e){return j({iconLabel:e})}})),Fe&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.default,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:B,setAttributes:j,loadGoogleFonts:{value:Ge,label:"tweetBtnLoadGoogleFonts"},fontFamily:{value:Le,label:"tweetBtnFontFamily"},fontWeight:{value:qe,label:"tweetBtnFontWeight"},fontSubset:{value:xe,label:"tweetBtnFontSubset"},fontSizeType:{value:He,label:"tweetBtnFontSizeType"},fontSize:{value:ze,label:"tweetBtnFontSize"},fontSizeMobile:{value:Ie,label:"tweetBtnFontSizeMobile"},fontSizeTablet:{value:Re,label:"tweetBtnFontSizeTablet"},lineHeightType:{value:Pe,label:"tweetBtnLineHeightType"},lineHeight:{value:Me,label:"tweetBtnLineHeight"},lineHeightMobile:{value:Qe,label:"tweetBtnLineHeightMobile"},lineHeightTablet:{value:Ae,label:"tweetBtnLineHeightTablet"}}),i.a.createElement(g,{label:Object(s.__)("Target URL","ultimate-addons-for-gutenberg"),value:Ye,onChange:function(e){return j({iconTargetUrl:e})},options:[{value:"current",label:Object(s.__)("Current Page","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(s.__)("Custom URL","ultimate-addons-for-gutenberg")}]}),"custom"==Ye&&i.a.createElement(f,{label:Object(s.__)("URL","ultimate-addons-for-gutenberg"),value:Ze,onChange:function(e){return j({customUrl:e})}})),Fe&&"link"!==Je&&i.a.createElement(i.a.Fragment,null,i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("h2",null,Object(s.__)("Button Padding (px)","ultimate-addons-for-gutenberg")),i.a.createElement(d,{label:o.a.vertical_spacing,className:"uagb-margin-control",value:Ue,onChange:function(e){return j({tweetBtnVrPadding:e})},min:0,max:500,allowReset:!0,initialPosition:5}),i.a.createElement(d,{label:o.a.horizontal_spacing,className:"uagb-margin-control",value:We,onChange:function(e){return j({tweetBtnHrPadding:e})},min:0,max:500,allowReset:!0,initialPosition:5})),Fe&&"icon_text"==De&&i.a.createElement(i.a.Fragment,null,i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement(d,{label:Object(s.__)("Space between Tweet Icon and Text","ultimate-addons-for-gutenberg"),value:Ve,onChange:function(e){return j({tweetIconSpacing:e})},min:0,max:20,allowReset:!0,initialPosition:5})),Fe&&i.a.createElement(i.a.Fragment,null,i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement(C,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(s.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(s.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-hover-tab"}]},(function(e){var t;return t="hover"===e.name?Ft:St,i.a.createElement("div",null,t)})))),pt=i.a.createElement(b,{title:Object(s.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},"quotation"===z&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,Object(s.__)("Quote Icon Margin (px)","ultimate-addons-for-gutenberg")),i.a.createElement(d,{label:o.a.top_margin,className:"uagb-margin-control",value:lt,onChange:function(e){return j({quoteTopMargin:e})},min:0,max:500,allowReset:!0}),i.a.createElement(d,{label:o.a.bottom_margin,className:"uagb-margin-control",value:ot,onChange:function(e){return j({quoteBottomMargin:e})},min:0,max:500,allowReset:!0}),i.a.createElement(d,{label:o.a.left_margin,className:"uagb-margin-control",value:rt,onChange:function(e){return j({quoteLeftMargin:e})},min:0,max:500,allowReset:!0}),i.a.createElement(d,{label:o.a.right_margin,className:"uagb-margin-control",value:it,onChange:function(e){return j({quoteRightMargin:e})},min:0,max:500,allowReset:!0}),i.a.createElement("hr",{className:"uagb-editor__separator"})),"border"===z&&i.a.createElement(d,{label:Object(s.__)("Gap Between Border and Quote","ultimate-addons-for-gutenberg"),value:be,onChange:function(e){return j({borderGap:e})},min:0,max:500,allowReset:!0}),i.a.createElement(d,{label:Object(s.__)("Quote Bottom Spacing","ultimate-addons-for-gutenberg"),value:re,onChange:function(e){return j({descSpace:e})},min:0,max:200,allowReset:!0,initialPosition:0}),"center"==H&&"border"!==z&&i.a.createElement(d,{label:Object(s.__)("Author Bottom Spacing","ultimate-addons-for-gutenberg"),value:ie,onChange:function(e){return j({authorSpace:e})},min:0,max:200,allowReset:!0,initialPosition:0}),"border"===z&&i.a.createElement(i.a.Fragment,null,i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("h2",null,Object(s.__)("Vertical Padding","ultimate-addons-for-gutenberg")),i.a.createElement(d,{label:o.a.vertical_spacing,className:"uagb-margin-control",value:ge,onChange:function(e){return j({verticalPadding:e})},min:0,max:500,allowReset:!0}))),ht=i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,Object(s.__)("Modern Layout - Styling","ultimate-addons-for-gutenberg")),i.a.createElement(g,{label:Object(s.__)("Quote Border Style","ultimate-addons-for-gutenberg"),value:se,onChange:function(e){return j({borderStyle:e})},options:[{value:"none",label:Object(s.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(s.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(s.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(s.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(s.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(s.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(s.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(s.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(s.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!=se&&i.a.createElement(d,{label:Object(s.__)("Thickness (px)","ultimate-addons-for-gutenberg"),value:me,onChange:function(e){return j({borderWidth:e})},min:0,max:50,allowReset:!0})),Et=i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,Object(s.__)("Quotation Layout - Styling","ultimate-addons-for-gutenberg")),i.a.createElement(C,{className:"uagb-size-type-field-tabs",activeClass:"active-tab",tabs:[{name:"desktop",title:i.a.createElement(w,{icon:"desktop"}),className:"uagb-desktop-tab uagb-responsive-tabs"},{name:"tablet",title:i.a.createElement(w,{icon:"tablet"}),className:"uagb-tablet-tab uagb-responsive-tabs"},{name:"mobile",title:i.a.createElement(w,{icon:"smartphone"}),className:"uagb-mobile-tab uagb-responsive-tabs"}]},(function(e){var t;return t="mobile"===e.name?i.a.createElement(i.a.Fragment,null,Tt,i.a.createElement(d,{label:Object(s.__)("Quote Icon Size","ultimate-addons-for-gutenberg"),value:Ee,onChange:function(e){return j({quoteSizeMobile:e})},min:0,max:500,beforeIcon:"editor-textcolor",allowReset:!0,initialPosition:30})):"tablet"===e.name?i.a.createElement(i.a.Fragment,null,Tt,i.a.createElement(d,{label:Object(s.__)("Quote Icon Size","ultimate-addons-for-gutenberg"),value:he,onChange:function(e){return j({quoteSizeTablet:e})},min:0,max:500,beforeIcon:"editor-textcolor",allowReset:!0,initialPosition:30})):i.a.createElement(i.a.Fragment,null,Tt,i.a.createElement(d,{label:Object(s.__)("Quote Icon Size","ultimate-addons-for-gutenberg"),value:fe,onChange:function(e){return j({quoteSize:e})},min:0,max:500,beforeIcon:"editor-textcolor",allowReset:!0,initialPosition:30})),i.a.createElement("div",null,t)})),i.a.createElement(C,{className:"uagb-size-type-field-tabs",activeClass:"active-tab",tabs:[{name:"desktop",title:i.a.createElement(w,{icon:"desktop"}),className:"uagb-desktop-tab uagb-responsive-tabs"},{name:"tablet",title:i.a.createElement(w,{icon:"tablet"}),className:"uagb-tablet-tab uagb-responsive-tabs"},{name:"mobile",title:i.a.createElement(w,{icon:"smartphone"}),className:"uagb-mobile-tab uagb-responsive-tabs"}]},(function(e){var t;return t="mobile"===e.name?i.a.createElement(i.a.Fragment,null,Bt,i.a.createElement(d,{label:Object(s.__)("Background Size","ultimate-addons-for-gutenberg"),value:we,onChange:function(e){return j({quotePaddingMobile:e})},min:0,max:500,beforeIcon:"editor-textcolor",allowReset:!0,initialPosition:30})):"tablet"===e.name?i.a.createElement(i.a.Fragment,null,Bt,i.a.createElement(d,{label:Object(s.__)("Background Size","ultimate-addons-for-gutenberg"),value:Oe,onChange:function(e){return j({quotePaddingTablet:e})},min:0,max:500,beforeIcon:"editor-textcolor",allowReset:!0,initialPosition:30})):i.a.createElement(i.a.Fragment,null,Bt,i.a.createElement(d,{label:Object(s.__)("Background Size","ultimate-addons-for-gutenberg"),value:ve,onChange:function(e){return j({quotePadding:e})},min:0,max:500,beforeIcon:"editor-textcolor",allowReset:!0,initialPosition:30})),i.a.createElement("div",null,t)})),_e&&i.a.createElement(d,{label:Object(s.__)("Quote Icon Border Radius (%)","ultimate-addons-for-gutenberg"),value:je,onChange:function(e){return j({quoteBorderRadius:e})},min:0,max:100,allowReset:!0})),vt=[{value:"thumbnail",label:Object(s.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(s.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(s.__)("Large","ultimate-addons-for-gutenberg")}],Ct=Object(s.__)("Select Image","ultimate-addons-for-gutenberg");$e&&(Ct=null==$e.url||""==$e.url?Object(s.__)("Select Image","ultimate-addons-for-gutenberg"):Object(s.__)("Replace Image","ultimate-addons-for-gutenberg"));var Ot=i.a.createElement(i.a.Fragment,null,i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement(p,{id:"blockquote-image-controls",className:"editor-bg-image-control",label:Object(s.__)("Author Image","ultimate-addons-for-gutenberg")},i.a.createElement(T,{title:Object(s.__)("Select Image","ultimate-addons-for-gutenberg"),onSelect:Nt,allowedTypes:["image"],value:$e,render:function(e){var t=e.open;return i.a.createElement(_,{isSecondary:!0,onClick:t},Ct)}}),$e&&"null"!==$e.url&&""!==$e.url&&i.a.createElement(_,{className:"uagb-rm-btn",onClick:yt,isLink:!0,isDestructive:!0},Object(s.__)("Remove Image","ultimate-addons-for-gutenberg"))),$e&&"null"!==$e.url&&""!==$e.url&&i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{label:Object(s.__)("Author Image Position","ultimate-addons-for-gutenberg"),value:nt,onChange:function(e){return j({authorImgPosition:e})},options:[{value:"left",label:Object(s.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(s.__)("Right","ultimate-addons-for-gutenberg")},{value:"top",label:Object(s.__)("Top","ultimate-addons-for-gutenberg")}]}),i.a.createElement(g,{label:Object(s.__)("Author Image Size","ultimate-addons-for-gutenberg"),options:vt,value:tt,onChange:function(e){return j({authorImageSize:e})}}),i.a.createElement(d,{label:Object(s.__)("Author Image Width","ultimate-addons-for-gutenberg"),value:et,onChange:function(e){return j({authorImageWidth:e})},min:0,max:500,beforeIcon:"",allowReset:!0}),i.a.createElement(d,{label:Object(s.__)("Author Image Rounded Corners","ultimate-addons-for-gutenberg"),value:at,onChange:function(e){return j({authorImgBorderRadius:e})},min:0,max:100,beforeIcon:"",allowReset:!0}))),wt=i.a.createElement(i.a.Fragment,null,"none"!=se&&"border"==z&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Border Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ce}}))),i.a.createElement(N,{value:ce,onChange:function(e){return j({borderColor:e})},allowReset:!0})),"quotation"==z&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Icon Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:de}}))),i.a.createElement(N,{value:de,onChange:function(e){return j({quoteColor:e})},allowReset:!0}),i.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Icon Background Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:_e}}))),i.a.createElement(N,{value:_e,onChange:function(e){return j({quoteBgColor:e})},allowReset:!0}))),jt=i.a.createElement(i.a.Fragment,null,"border"==z&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Border Hover Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:st}}))),i.a.createElement(N,{value:st,onChange:function(e){return j({borderHoverColor:e})},allowReset:!0})),"quotation"==z&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Hover Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ut}}))),i.a.createElement(N,{value:ut,onChange:function(e){return j({quoteHoverColor:e})},allowReset:!0}),i.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Background Hover Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ct}}))),i.a.createElement(N,{value:ct,onChange:function(e){return j({quoteBgHoverColor:e})},allowReset:!0}))),St=i.a.createElement(i.a.Fragment,null,"link"==Je&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Tweet Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ye}}))),i.a.createElement(N,{value:ye,onChange:function(e){return j({tweetLinkColor:e})},allowReset:!0})),"link"!==Je&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Tweet Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Ne}}))),i.a.createElement(N,{value:Ne,onChange:function(e){return j({tweetBtnColor:e})},allowReset:!0}),i.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Tweet Background Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Be}}))),i.a.createElement(N,{value:Be,onChange:function(e){return j({tweetBtnBgColor:e})},allowReset:!0}))),Ft=i.a.createElement(i.a.Fragment,null,"link"==Je&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Tweet Hover Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Te}}))),i.a.createElement(N,{value:Te,onChange:function(e){return j({tweetBtnHoverColor:e})},allowReset:!0})),"link"!==Je&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Tweet Hover Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Te}}))),i.a.createElement(N,{value:Te,onChange:function(e){return j({tweetBtnHoverColor:e})},allowReset:!0}),i.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Tweet Background Hover Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ke}}))),i.a.createElement(N,{value:ke,onChange:function(e){return j({tweetBtnBgHoverColor:e})},allowReset:!0}))),yt=function(){(0,e.setAttributes)({authorImage:null})},Nt=function(t){var a=e.setAttributes;t&&t.url?t.type&&"image"==t.type&&a({authorImage:t}):a({authorImage:null})},Tt=i.a.createElement(O,{className:"uagb-size-type-field","aria-label":Object(s.__)("Size Type","ultimate-addons-for-gutenberg")},k.map((function(e){var t=e.name,a=e.key;return i.a.createElement(_,{key:a,className:"uagb-size-btn",isSmall:!0,isPrimary:pe===a,"aria-pressed":pe===a,onClick:function(){return j({quoteSizeType:a})}},t)}))),Bt=i.a.createElement(O,{className:"uagb-size-type-field","aria-label":Object(s.__)("Size Type","ultimate-addons-for-gutenberg")},k.map((function(e){var t=e.name,a=e.key;return i.a.createElement(_,{key:a,className:"uagb-size-btn",isSmall:!0,isPrimary:Ce===a,"aria-pressed":Ce===a,onClick:function(){return j({quotePaddingType:a})}},t)})));return i.a.createElement(i.a.Fragment,null,i.a.createElement(F,{key:"controls"},"border"!==z&&i.a.createElement(S,{value:H,onChange:function(e){return j({align:e})}}),"quotation"===z&&i.a.createElement(i.a.Fragment,null,i.a.createElement(E,{label:"Options"},i.a.createElement(v,{text:Object(s.__)("Normal Quote","ultimate-addons-for-gutenberg")},i.a.createElement(_,{className:l()("components-icon-button","components-toolbar__control",{"is-active":"style_1"===Se}),onClick:function(){return j({quoteStyle:"style_1"})}},o.a.quote_1))),i.a.createElement(E,{label:"Options"},i.a.createElement(v,{text:Object(s.__)("Inline Quote","ultimate-addons-for-gutenberg")},i.a.createElement(_,{className:l()("components-icon-button","components-toolbar__control",{"is-active":"style_2"===Se}),onClick:function(){return j({quoteStyle:"style_2"})}},o.a.quote_2)))),Fe&&i.a.createElement(i.a.Fragment,null,i.a.createElement(E,{label:"Options"},i.a.createElement("label",{"aria-label":Object(s.__)("Twitter Username","ultimate-addons-for-gutenberg"),className:"".concat(m,"__via-label"),htmlFor:"".concat(m,"__via")}," ",o.a.at_the_rate),i.a.createElement("input",{"aria-label":Object(s.__)("Twitter Username","ultimate-addons-for-gutenberg"),className:"".concat(m,"__via"),id:"".concat(m,"__via"),onChange:function(e){return j({iconShareVia:e.target.value})},placeholder:Object(s.__)("Username","ultimate-addons-for-gutenberg"),type:"text",value:Xe})))),i.a.createElement(y,null,dt,_t,ft,pt),t,a,n)};t.default=i.a.memo(B)}}]);