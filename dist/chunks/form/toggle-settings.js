(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{414:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(0),u=wp.components,r=u.PanelBody,g=u.ToggleControl,c=u.SelectControl,s=u.TextControl,i=wp.blockEditor.InspectorControls,b=function(e){var t=e=e.parentProps,a=t.attributes,n=t.setAttributes,u=a.toggleRequired,b=a.toggleStatus,d=a.layout,f=a.trueValue,m=a.falseValue;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,null,l.a.createElement(r,{title:Object(o.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb__url-panel-body"},l.a.createElement("p",{className:"uagb-settings-notice"},Object(o.__)("Leaving the toggle in On/Off state will set it as a default value on page load for the user.","ultimate-addons-for-gutenberg")),l.a.createElement(g,{label:Object(o.__)("Required","ultimate-addons-for-gutenberg"),checked:u,onChange:function(){return n({toggleRequired:!u})}}),l.a.createElement(g,{label:Object(o.__)("Default State","ultimate-addons-for-gutenberg"),checked:b,help:b?Object(o.__)("ON State","ultimate-addons-for-gutenberg"):Object(o.__)("OFF State","ultimate-addons-for-gutenberg"),onChange:function(){return n({toggleStatus:!b})}}),l.a.createElement(s,{label:Object(o.__)("True State","ultimate-addons-for-gutenberg"),value:f,onChange:function(e){return n({trueValue:e})}}),l.a.createElement(s,{label:Object(o.__)("False State","ultimate-addons-for-gutenberg"),value:m,onChange:function(e){return n({falseValue:e})}}),l.a.createElement(c,{label:Object(o.__)("Layout","ultimate-addons-for-gutenberg"),value:d,onChange:function(e){return n({layout:e})},options:[{value:"",label:Object(o.__)("Square","ultimate-addons-for-gutenberg")},{value:"round",label:Object(o.__)("Round","ultimate-addons-for-gutenberg")}]}))))};t.default=l.a.memo(b)}}]);