(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[67],{323:function(e,n,t){"use strict";var a=t(19),o=t.n(a)()((function(e){return e[1]}));o.push([e.i,".uagb-lottie_upload_wrap {\n  padding: 50px;\n  background: #eee; }\n\n.uagb-lottie_upload_wrap-controller .components-placeholder {\n  box-shadow: none; }\n\n.uagb-show-notice {\n  padding: 20px;\n  background: #eee; }\n\n.uagb-lottie__center {\n  margin: 0 auto; }\n\n.uagb-lottie__right {\n  margin-left: auto; }\n\n.uagb-lottie__left {\n  margin-right: auto; }\n",""]),n.a=o},558:function(e,n,t){"use strict";t.r(n);var a,o=t(3),r=t.n(o),u=t(15),i=t.n(u),l=t(16),s=t(273),c=t.n(s),p=t(18),d=t.n(p),g=t(323),b=0,f={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},_={};_.locals=g.a.locals||{},_.use=function(){return b++||(a=d()(g.a,f)),_},_.unuse=function(){b>0&&!--b&&(a(),a=null)};var m=_,w=function(e){Object(o.useLayoutEffect)((function(){return m.use(),function(){m.unuse()}}),[]);var n=e.lottieplayer,t=e=e.parentProps,a=t.className,u=(t.setAttributes,t.attributes),s=u.loop,p=u.speed,d=u.reverse,g=u.lottieURl,b=u.playOn,f=function(){n.current.anim.play()},_=d&&s?-1:1,w=!0;return"none"!==b&&"scroll"!==b&&void 0!==b||(w=!1),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:i()(a,"uagb-block-".concat(e.clientId.substr(0,8)),"uagb-lottie__outer-wrap"),onMouseEnter:"hover"===b?f:function(){return w=!0},onMouseLeave:"hover"===b?function(){n.current.anim.stop()}:function(){return w=!0},onClick:"click"===b?f:function(){return w=!0}},r.a.createElement(o.Suspense,{fallback:Object(l.a)()},r.a.createElement(c.a,{key:g,ref:n,options:{loop:s,path:g,rendererSettings:{preserveAspectRatio:"xMidYMid",className:"uagb-lottie-inner-wrap"}},isStopped:w,speed:p,isClickToPauseDisabled:!0,direction:_}))))};n.default=r.a.memo(w)}}]);