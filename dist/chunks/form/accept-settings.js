(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[28],{514:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),l=n(2),o=wp.components,c=o.PanelBody,u=o.ToggleControl,i=o.TextControl,b=o.TextareaControl,d=wp.blockEditor.InspectorControls,s=function(e){var t=e=e.parentProps,n=t.attributes,a=t.setAttributes,o=n.acceptRequired,s=n.acceptText,g=n.showLink,m=n.linkLabel,_=n.link,p=n.linkInNewTab;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null,r.a.createElement(c,{title:Object(l.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb__url-panel-body"},r.a.createElement(u,{label:Object(l.__)("Required","ultimate-addons-for-gutenberg"),checked:o,onChange:function(){return a({acceptRequired:!o})}}),r.a.createElement(b,{label:Object(l.__)("Acceptance Text","ultimate-addons-for-gutenberg"),help:"Label to display as acceptance message.",value:s,onChange:function(e){return a({acceptText:e})}}),r.a.createElement(u,{label:Object(l.__)("Enable Privacy Link","ultimate-addons-for-gutenberg"),checked:g,onChange:function(){return a({showLink:!g})}}),g&&r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",{className:"uagb-editor__separator"}),r.a.createElement(i,{label:Object(l.__)("Link Label","ultimate-addons-for-gutenberg"),value:m,onChange:function(e){return a({linkLabel:e})}}),r.a.createElement(i,{className:"uagb-forms-editor-privacy-link",label:Object(l.__)("Link","ultimate-addons-for-gutenberg"),value:_,onChange:function(e){return a({link:e})},help:""===_?Object(l.__)("Enter a valid link.","ultimate-addons-for-gutenberg"):""}),r.a.createElement(u,{label:Object(l.__)("Open in new tab","ultimate-addons-for-gutenberg"),checked:p,onChange:function(){return a({linkInNewTab:!p})}})))))};t.default=r.a.memo(s)}}]);