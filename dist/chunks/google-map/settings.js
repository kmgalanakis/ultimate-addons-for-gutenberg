(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{382:function(e,a,t){"use strict";t.r(a);var l=t(2),n=t.n(l),u=t(0),b=wp.blockEditor.InspectorControls,r=wp.components,o=r.PanelBody,g=r.RangeControl,d=r.TextControl,i=r.SelectControl,_=function(e){var a=e=e.parentProps,t=a.setAttributes,l=a.attributes,r=l.height,_=l.zoom,s=l.address,c=l.language;return n.a.createElement(b,null,n.a.createElement(o,{title:Object(u.__)("General","ultimate-addons-for-gutenberg")},n.a.createElement("p",{className:"uagb-settings-notice"},Object(u.__)("This block uses Ultimate Addon for Gutenberg's API key to display the map. You don't need to create your own API key or worry about renewing it.","ultimate-addons-for-gutenberg")),n.a.createElement("p",{className:"components-base-control__label"},Object(u.__)("Address","ultimate-addons-for-gutenberg")),n.a.createElement(d,{value:s,onChange:function(e){return t({address:e})},placeholder:Object(u.__)("Type the address","ultimate-addons-for-gutenberg")}),n.a.createElement(g,{label:Object(u.__)("Zoom","ultimate-addons-for-gutenberg"),value:_,onChange:function(e){return t({zoom:e})},min:1,max:22,beforeIcon:"editor-textcolor",allowReset:!0}),n.a.createElement(g,{label:Object(u.__)("Height","ultimate-addons-for-gutenberg"),value:r,onChange:function(e){return t({height:e})},min:0,max:1e3,allowReset:!0}),n.a.createElement(i,{label:Object(u.__)("Language","ultimate-addons-for-gutenberg"),value:c,onChange:function(e){return t({language:e})},options:[{value:"af",label:Object(u.__)("Afrikaans","ultimate-addons-for-gutenberg")},{value:"sq",label:Object(u.__)("Albanian","ultimate-addons-for-gutenberg")},{value:"am",label:Object(u.__)("Amharic","ultimate-addons-for-gutenberg")},{value:"ar",label:Object(u.__)("Arabic","ultimate-addons-for-gutenberg")},{value:"hy",label:Object(u.__)("Armenian","ultimate-addons-for-gutenberg")},{value:"az",label:Object(u.__)("Azerbaijani","ultimate-addons-for-gutenberg")},{value:"eu",label:Object(u.__)("Basque","ultimate-addons-for-gutenberg")},{value:"be",label:Object(u.__)("Belarusian","ultimate-addons-for-gutenberg")},{value:"bn",label:Object(u.__)("Bengali","ultimate-addons-for-gutenberg")},{value:"bs",label:Object(u.__)("Bosnian","ultimate-addons-for-gutenberg")},{value:"bg",label:Object(u.__)("Bulgarian","ultimate-addons-for-gutenberg")},{value:"my",label:Object(u.__)("Burmese","ultimate-addons-for-gutenberg")},{value:"ca",label:Object(u.__)("Catalan","ultimate-addons-for-gutenberg")},{value:"zh",label:Object(u.__)("Chinese","ultimate-addons-for-gutenberg")},{value:"hr",label:Object(u.__)("Croatian","ultimate-addons-for-gutenberg")},{value:"cs",label:Object(u.__)("Czech","ultimate-addons-for-gutenberg")},{value:"da",label:Object(u.__)("Danish","ultimate-addons-for-gutenberg")},{value:"nl",label:Object(u.__)("Dutch","ultimate-addons-for-gutenberg")},{value:"en",label:Object(u.__)("English","ultimate-addons-for-gutenberg")},{value:"et",label:Object(u.__)("Estonian","ultimate-addons-for-gutenberg")},{value:"fa",label:Object(u.__)("Farsi","ultimate-addons-for-gutenberg")},{value:"fi",label:Object(u.__)("Finnish","ultimate-addons-for-gutenberg")},{value:"fr",label:Object(u.__)("French","ultimate-addons-for-gutenberg")},{value:"gl",label:Object(u.__)("Galician","ultimate-addons-for-gutenberg")},{value:"ka",label:Object(u.__)("Georgian","ultimate-addons-for-gutenberg")},{value:"de",label:Object(u.__)("German","ultimate-addons-for-gutenberg")},{value:"el",label:Object(u.__)("Greek","ultimate-addons-for-gutenberg")},{value:"gu",label:Object(u.__)("Gujarati","ultimate-addons-for-gutenberg")},{value:"iw",label:Object(u.__)("Hebrew","ultimate-addons-for-gutenberg")},{value:"hi",label:Object(u.__)("Hindi","ultimate-addons-for-gutenberg")},{value:"hu",label:Object(u.__)("Hungarian","ultimate-addons-for-gutenberg")},{value:"is",label:Object(u.__)("Icelandic","ultimate-addons-for-gutenberg")},{value:"id",label:Object(u.__)("Indonesian","ultimate-addons-for-gutenberg")},{value:"it",label:Object(u.__)("Italian","ultimate-addons-for-gutenberg")},{value:"ja",label:Object(u.__)("Japanese","ultimate-addons-for-gutenberg")},{value:"kn",label:Object(u.__)("Kannada","ultimate-addons-for-gutenberg")},{value:"kk",label:Object(u.__)("Kazakh","ultimate-addons-for-gutenberg")},{value:"km",label:Object(u.__)("Khmer","ultimate-addons-for-gutenberg")},{value:"ko",label:Object(u.__)("Korean","ultimate-addons-for-gutenberg")},{value:"ky",label:Object(u.__)("Kyrgyz","ultimate-addons-for-gutenberg")},{value:"lo",label:Object(u.__)("Lao","ultimate-addons-for-gutenberg")},{value:"lv",label:Object(u.__)("Latvian","ultimate-addons-for-gutenberg")},{value:"lt",label:Object(u.__)("Lithuanian","ultimate-addons-for-gutenberg")},{value:"mk",label:Object(u.__)("Macedonian","ultimate-addons-for-gutenberg")},{value:"ms",label:Object(u.__)("Malay","ultimate-addons-for-gutenberg")},{value:"ml",label:Object(u.__)("Malayalam","ultimate-addons-for-gutenberg")},{value:"mr",label:Object(u.__)("Marathi","ultimate-addons-for-gutenberg")},{value:"mn",label:Object(u.__)("Mongolian","ultimate-addons-for-gutenberg")},{value:"ne",label:Object(u.__)("Nepali","ultimate-addons-for-gutenberg")},{value:"no",label:Object(u.__)("Norwegian","ultimate-addons-for-gutenberg")},{value:"pl",label:Object(u.__)("Polish","ultimate-addons-for-gutenberg")},{value:"pt",label:Object(u.__)("Portuguese","ultimate-addons-for-gutenberg")},{value:"pa",label:Object(u.__)("Punjabi","ultimate-addons-for-gutenberg")},{value:"ro",label:Object(u.__)("Romanian","ultimate-addons-for-gutenberg")},{value:"ru",label:Object(u.__)("Russian","ultimate-addons-for-gutenberg")},{value:"sr",label:Object(u.__)("Serbian","ultimate-addons-for-gutenberg")},{value:"si",label:Object(u.__)("Sinhalese","ultimate-addons-for-gutenberg")},{value:"sk",label:Object(u.__)("Slovak","ultimate-addons-for-gutenberg")},{value:"sl",label:Object(u.__)("Slovenian","ultimate-addons-for-gutenberg")},{value:"es",label:Object(u.__)("Spanish","ultimate-addons-for-gutenberg")},{value:"sw",label:Object(u.__)("Swahili","ultimate-addons-for-gutenberg")},{value:"sv",label:Object(u.__)("Swedish","ultimate-addons-for-gutenberg")},{value:"ta",label:Object(u.__)("Tamil","ultimate-addons-for-gutenberg")},{value:"te",label:Object(u.__)("Telugu","ultimate-addons-for-gutenberg")},{value:"th",label:Object(u.__)("Thai","ultimate-addons-for-gutenberg")},{value:"tr",label:Object(u.__)("Turkish","ultimate-addons-for-gutenberg")},{value:"uk",label:Object(u.__)("Ukrainian","ultimate-addons-for-gutenberg")},{value:"ur",label:Object(u.__)("Urdu","ultimate-addons-for-gutenberg")},{value:"uz",label:Object(u.__)("Uzbek","ultimate-addons-for-gutenberg")},{value:"vi",label:Object(u.__)("Vietnamese","ultimate-addons-for-gutenberg")},{value:"zu",label:Object(u.__)("Zulu","ultimate-addons-for-gutenberg")}]})))};a.default=n.a.memo(_)}}]);