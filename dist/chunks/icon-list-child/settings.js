(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{440:function(e,a,t){"use strict";t.r(a);var o=t(12),n=t(57),l=t(126),r=t.n(l),c=t(1),s=t.n(c),m=t(2),u=t(4),b=t(5),i=Object.keys(n),g=function(e){var a,t,n=e=e.parentProps,l=n.attributes,c=n.setAttributes,g=l.image_icon,_=l.icon,d=l.image,p=l.icon_color,E=l.label_color,C=l.icon_hover_color,f=l.label_hover_color,N=l.icon_bg_color,v=l.icon_bg_hover_color,h=l.icon_border_color,O=l.icon_border_hover_color,j=l.link,k=l.target,I=l.disableLink;return s.a.createElement(u.InspectorControls,null,s.a.createElement(b.PanelBody,{title:Object(m.__)("Icon Settings","ultimate-addons-for-gutenberg"),initialOpen:!0},s.a.createElement(b.SelectControl,{label:Object(m.__)("Image / Icon","ultimate-addons-for-gutenberg"),value:g,options:[{value:"icon",label:Object(m.__)("Icon","ultimate-addons-for-gutenberg")},{value:"image",label:Object(m.__)("Image","ultimate-addons-for-gutenberg")}],onChange:function(e){return c({image_icon:e})}}),"icon"==g&&s.a.createElement(s.a.Fragment,null,s.a.createElement("p",{className:"components-base-control__label"},Object(m.__)("Icon","ultimate-addons-for-gutenberg")),s.a.createElement(r.a,{icons:i,renderFunc:o.a,theme:"default",value:_,onChange:function(e){return c({icon:e})},isMulti:!1,noSelectedPlaceholder:Object(m.__)("Select Icon","ultimate-addons-for-gutenberg")})),"image"==g&&s.a.createElement(s.a.Fragment,null,s.a.createElement(u.MediaUpload,{title:Object(m.__)("Select Image","ultimate-addons-for-gutenberg"),onSelect:function(e){e&&e.url?e.type&&"image"==e.type&&c({image:e}):c({image:null})},allowedTypes:["image"],value:d,render:function(e){var a=e.open;return s.a.createElement(b.Button,{isSecondary:!0,onClick:a},d?Object(m.__)("Replace image"):Object(m.__)("Select Image"))}}),d&&s.a.createElement(b.Button,{className:"uagb-rm-btn",onClick:function(){c({image:null})},isLink:!0,isDestructive:!0},Object(m.__)("Remove Image","ultimate-addons-for-gutenberg"))),s.a.createElement("hr",{className:"uagb-editor__separator"}),s.a.createElement("h2",null,Object(m.__)("List Item Link","ultimate-addons-for-gutenberg")),s.a.createElement(b.ToggleControl,{label:Object(m.__)("Disable Link","ultimate-addons-for-gutenberg"),checked:I,onChange:function(e){return c({disableLink:!I})}}),!I&&s.a.createElement(s.a.Fragment,null,s.a.createElement("p",{className:"components-base-control__label"},Object(m.__)("URL","ultimate-addons-for-gutenberg")),s.a.createElement(b.TextControl,{value:j,onChange:function(e){return c({link:e})},placeholder:Object(m.__)("Enter URL","ultimate-addons-for-gutenberg")}),s.a.createElement(b.ToggleControl,{label:Object(m.__)("Open in New Tab","ultimate-addons-for-gutenberg"),checked:k,onChange:function(e){return c({target:!k})}})),s.a.createElement("hr",{className:"uagb-editor__separator"}),s.a.createElement("h2",null,Object(m.__)("Icon Color Settings","ultimate-addons-for-gutenberg")),(a="",t="","image"==g?(a=s.a.createElement(s.a.Fragment,null,s.a.createElement("p",{className:"uagb-setting-label"},Object(m.__)("Text Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:E}}))),s.a.createElement(u.ColorPalette,{value:E,onChange:function(e){return c({label_color:e})},allowReset:!0}),s.a.createElement("p",{className:"uagb-setting-label"},Object(m.__)("Image Background Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:N}}))),s.a.createElement(u.ColorPalette,{value:N,onChange:function(e){return c({icon_bg_color:e})},allowReset:!0}),s.a.createElement("p",{className:"uagb-setting-label"},Object(m.__)("Image Border Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:h}}))),s.a.createElement(u.ColorPalette,{value:h,onChange:function(e){return c({icon_border_color:e})},allowReset:!0})),t=s.a.createElement(s.a.Fragment,null,s.a.createElement("p",{className:"uagb-setting-label"},Object(m.__)("Text Hover Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:f}}))),s.a.createElement(u.ColorPalette,{value:f,onChange:function(e){return c({label_hover_color:e})},allowReset:!0}),s.a.createElement("p",{className:"uagb-setting-label"},Object(m.__)("Image Background Hover Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:v}}))),s.a.createElement(u.ColorPalette,{value:v,onChange:function(e){return c({icon_bg_hover_color:e})},allowReset:!0}),s.a.createElement("p",{className:"uagb-setting-label"},Object(m.__)("Image Border Hover Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:O}}))),s.a.createElement(u.ColorPalette,{value:O,onChange:function(e){return c({icon_border_hover_color:e})},allowReset:!0}))):(a=s.a.createElement(s.a.Fragment,null,s.a.createElement("p",{className:"uagb-setting-label"},Object(m.__)("Text Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:E}}))),s.a.createElement(u.ColorPalette,{value:E,onChange:function(e){return c({label_color:e})},allowReset:!0}),s.a.createElement("p",{className:"uagb-setting-label"},Object(m.__)("Icon Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:p}}))),s.a.createElement(u.ColorPalette,{value:p,onChange:function(e){return c({icon_color:e})},allowReset:!0}),s.a.createElement("p",{className:"uagb-setting-label"},Object(m.__)("Icon Background Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:N}}))),s.a.createElement(u.ColorPalette,{value:N,onChange:function(e){return c({icon_bg_color:e})},allowReset:!0}),s.a.createElement("p",{className:"uagb-setting-label"},Object(m.__)("Icon Border Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:h}}))),s.a.createElement(u.ColorPalette,{value:h,onChange:function(e){return c({icon_border_color:e})},allowReset:!0})),t=s.a.createElement(s.a.Fragment,null,s.a.createElement("p",{className:"uagb-setting-label"},Object(m.__)("Text Hover Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:f}}))),s.a.createElement(u.ColorPalette,{value:f,onChange:function(e){return c({label_hover_color:e})},allowReset:!0}),s.a.createElement("p",{className:"uagb-setting-label"},Object(m.__)("Icon Hover Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:C}}))),s.a.createElement(u.ColorPalette,{value:C,onChange:function(e){return c({icon_hover_color:e})},allowReset:!0}),s.a.createElement("p",{className:"uagb-setting-label"},Object(m.__)("Icon Background Hover Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:v}}))),s.a.createElement(u.ColorPalette,{value:v,onChange:function(e){return c({icon_bg_hover_color:e})},allowReset:!0}),s.a.createElement("p",{className:"uagb-setting-label"},Object(m.__)("Icon Border Hover Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:O}}))),s.a.createElement(u.ColorPalette,{value:O,onChange:function(e){return c({icon_border_hover_color:e})},allowReset:!0}))),s.a.createElement(b.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(m.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(m.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-hover-tab"}]},(function(e){var o;return o="normal"===e.name?a:t,s.a.createElement("div",null,o)})))))};a.default=s.a.memo(g)}}]);