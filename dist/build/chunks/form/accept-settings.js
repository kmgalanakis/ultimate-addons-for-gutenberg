(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{369:function(e,t,n){"use strict";n.r(t);var a=n(3),l=n.n(a),r=n(0),o=wp.components,c=o.PanelBody,i=o.ToggleControl,u=o.TextControl,b=o.TextareaControl,s=wp.blockEditor.InspectorControls,d=function(e){var t=e=e.parentProps,n=t.attributes,a=t.setAttributes,o=n.acceptRequired,d=n.acceptText,g=n.showLink,m=n.linkLabel,p=n.link,_=n.linkInNewTab;return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null,l.a.createElement(c,{title:Object(r.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb__url-panel-body"},l.a.createElement(i,{label:Object(r.__)("Required","ultimate-addons-for-gutenberg"),checked:o,onChange:function(){return a({acceptRequired:!o})}}),l.a.createElement(b,{label:Object(r.__)("Acceptance Text","ultimate-addons-for-gutenberg"),help:"Label to display as acceptance message.",value:d,onChange:function(e){return a({acceptText:e})}}),l.a.createElement(i,{label:Object(r.__)("Enable Privacy Link","ultimate-addons-for-gutenberg"),checked:g,onChange:function(){return a({showLink:!g})}}),g&&l.a.createElement(l.a.Fragment,null,l.a.createElement("hr",{className:"uagb-editor__separator"}),l.a.createElement(u,{label:Object(r.__)("Link Label","ultimate-addons-for-gutenberg"),value:m,onChange:function(e){return a({linkLabel:e})}}),l.a.createElement(u,{className:"uagb-forms-editor-privacy-link",label:Object(r.__)("Link","ultimate-addons-for-gutenberg"),value:p,onChange:function(e){return a({link:e})},help:""===p?Object(r.__)("Enter a valid link.","ultimate-addons-for-gutenberg"):""}),l.a.createElement(i,{label:Object(r.__)("Open in new tab","ultimate-addons-for-gutenberg"),checked:_,onChange:function(){return a({linkInNewTab:!_})}})))))};t.default=l.a.memo(d)}}]);