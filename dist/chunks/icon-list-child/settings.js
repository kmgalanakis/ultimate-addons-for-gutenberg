(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[60],{472:function(e,a,t){"use strict";t.r(a);var o=t(12),n=t(127),l=t.n(n),r=t(1),c=t.n(r),s=t(2),m=t(4),u=t(5),b=function(e){var a,t,n=e=e.parentProps,r=n.attributes,b=n.setAttributes,g=r.image_icon,i=r.icon,_=r.image,d=r.icon_color,p=r.label_color,E=r.icon_hover_color,C=r.label_hover_color,f=r.icon_bg_color,N=r.icon_bg_hover_color,v=r.icon_border_color,h=r.icon_border_hover_color,O=r.link,j=r.target,k=r.disableLink;return c.a.createElement(m.InspectorControls,null,c.a.createElement(u.PanelBody,{title:Object(s.__)("Icon Settings","ultimate-addons-for-gutenberg"),initialOpen:!0},c.a.createElement(u.SelectControl,{label:Object(s.__)("Image / Icon","ultimate-addons-for-gutenberg"),value:g,options:[{value:"icon",label:Object(s.__)("Icon","ultimate-addons-for-gutenberg")},{value:"image",label:Object(s.__)("Image","ultimate-addons-for-gutenberg")}],onChange:function(e){return b({image_icon:e})}}),"icon"==g&&c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"components-base-control__label"},Object(s.__)("Icon","ultimate-addons-for-gutenberg")),c.a.createElement(l.a,{icons:wp.UAGBSvgIcons,renderFunc:o.a,theme:"default",value:i,onChange:function(e){return b({icon:e})},isMulti:!1,noSelectedPlaceholder:Object(s.__)("Select Icon","ultimate-addons-for-gutenberg")})),"image"==g&&c.a.createElement(c.a.Fragment,null,c.a.createElement(m.MediaUpload,{title:Object(s.__)("Select Image","ultimate-addons-for-gutenberg"),onSelect:function(e){e&&e.url?e.type&&"image"==e.type&&b({image:e}):b({image:null})},allowedTypes:["image"],value:_,render:function(e){var a=e.open;return c.a.createElement(u.Button,{isSecondary:!0,onClick:a},_?Object(s.__)("Replace image"):Object(s.__)("Select Image"))}}),_&&c.a.createElement(u.Button,{className:"uagb-rm-btn",onClick:function(){b({image:null})},isLink:!0,isDestructive:!0},Object(s.__)("Remove Image","ultimate-addons-for-gutenberg"))),c.a.createElement("hr",{className:"uagb-editor__separator"}),c.a.createElement("h2",null,Object(s.__)("List Item Link","ultimate-addons-for-gutenberg")),c.a.createElement(u.ToggleControl,{label:Object(s.__)("Disable Link","ultimate-addons-for-gutenberg"),checked:k,onChange:function(){return b({disableLink:!k})}}),!k&&c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"components-base-control__label"},Object(s.__)("URL","ultimate-addons-for-gutenberg")),c.a.createElement(u.TextControl,{value:O,onChange:function(e){return b({link:e})},placeholder:Object(s.__)("Enter URL","ultimate-addons-for-gutenberg")}),c.a.createElement(u.ToggleControl,{label:Object(s.__)("Open in New Tab","ultimate-addons-for-gutenberg"),checked:j,onChange:function(){return b({target:!j})}})),c.a.createElement("hr",{className:"uagb-editor__separator"}),c.a.createElement("h2",null,Object(s.__)("Icon Color Settings","ultimate-addons-for-gutenberg")),(a="",t="","image"==g?(a=c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Text Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:p}}))),c.a.createElement(m.ColorPalette,{value:p,onChange:function(e){return b({label_color:e})},allowReset:!0}),c.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Image Background Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:f}}))),c.a.createElement(m.ColorPalette,{value:f,onChange:function(e){return b({icon_bg_color:e})},allowReset:!0}),c.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Image Border Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:v}}))),c.a.createElement(m.ColorPalette,{value:v,onChange:function(e){return b({icon_border_color:e})},allowReset:!0})),t=c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Text Hover Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:C}}))),c.a.createElement(m.ColorPalette,{value:C,onChange:function(e){return b({label_hover_color:e})},allowReset:!0}),c.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Image Background Hover Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:N}}))),c.a.createElement(m.ColorPalette,{value:N,onChange:function(e){return b({icon_bg_hover_color:e})},allowReset:!0}),c.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Image Border Hover Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:h}}))),c.a.createElement(m.ColorPalette,{value:h,onChange:function(e){return b({icon_border_hover_color:e})},allowReset:!0}))):(a=c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Text Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:p}}))),c.a.createElement(m.ColorPalette,{value:p,onChange:function(e){return b({label_color:e})},allowReset:!0}),c.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Icon Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:d}}))),c.a.createElement(m.ColorPalette,{value:d,onChange:function(e){return b({icon_color:e})},allowReset:!0}),c.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Icon Background Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:f}}))),c.a.createElement(m.ColorPalette,{value:f,onChange:function(e){return b({icon_bg_color:e})},allowReset:!0}),c.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Icon Border Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:v}}))),c.a.createElement(m.ColorPalette,{value:v,onChange:function(e){return b({icon_border_color:e})},allowReset:!0})),t=c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Text Hover Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:C}}))),c.a.createElement(m.ColorPalette,{value:C,onChange:function(e){return b({label_hover_color:e})},allowReset:!0}),c.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Icon Hover Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:E}}))),c.a.createElement(m.ColorPalette,{value:E,onChange:function(e){return b({icon_hover_color:e})},allowReset:!0}),c.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Icon Background Hover Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:N}}))),c.a.createElement(m.ColorPalette,{value:N,onChange:function(e){return b({icon_bg_hover_color:e})},allowReset:!0}),c.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Icon Border Hover Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:h}}))),c.a.createElement(m.ColorPalette,{value:h,onChange:function(e){return b({icon_border_hover_color:e})},allowReset:!0}))),c.a.createElement(u.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(s.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(s.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-hover-tab"}]},(function(e){var o;return o="normal"===e.name?a:t,c.a.createElement("div",null,o)})))))};a.default=c.a.memo(b)}}]);