(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{301:function(t,e,a){"use strict";a.r(e);var n=a(28),i=a(0),r=wp.blockEditor.__experimentalPanelColorGradientSettings;e.default=function(t){var e=t.attributes,a=t.setAttributes,o=e.gradientValue,c=e.gradientAngle,d=e.gradientColor1,g=e.gradientColor2,l=e.gradientLocation1,u=e.gradientLocation2,s=e.gradientPosition,b=e.gradientType;if(""===o){var p=Object(n.a)(d),f=Object(n.a)(g);if("linear"===b){var C="linear-gradient(".concat(c,"deg,").concat(p," ").concat(l,"%, ").concat(f," ").concat(u,"%)");a({gradientValue:C})}else C="radial-gradient(at ".concat(s,", ").concat(p," ").concat(l,"%, ").concat(f," ").concat(u,"%)"),a({gradientValue:C})}return React.createElement(r,{title:Object(i.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!0,settings:[{label:Object(i.__)("Overlay Color","ultimate-addons-for-gutenberg"),gradientValue:o,onGradientChange:function(t){a({gradientValue:t}),a({gradientAngle:"",gradientColor1:"",gradientColor2:"",gradientLocation1:"",gradientLocation2:""})}}]})}}}]);