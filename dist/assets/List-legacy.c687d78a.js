!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,o=[],c=!0,a=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);c=!0);}catch(l){a=!0,i=l}finally{try{c||null==t.return||t.return()}finally{if(a)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.4d51292d.js","./useT-legacy.f7641c08.js","./Folder-legacy.7588ed66.js","./Layout-legacy.763fe878.js","./useUtil-legacy.10ef0725.js","./index-legacy.b9620388.js","./obj-legacy.97e43e8b.js","./icon-legacy.b161d943.js","./useTitle-legacy.b912e32d.js","./Markdown-legacy.920f36c8.js","./api-legacy.316f5312.js","./index-legacy.03543ede.js","./FolderTree-legacy.d9d87199.js"],(function(n){"use strict";var t,r,i,o,c,a,l,u,s,g,f,d,m,h,b,y,j,w,p,x,A,v,$,k,S,C,I,M,z,E,O,T,P;return{setters:[function(e){t=e.f,r=e.a0,i=e.A,o=e.aB,c=e.aE,a=e.ck,l=e.m,u=e.aC,s=e.bq,g=e.ae,f=e.bb,d=e.am,m=e.ag,h=e.bc,b=e.bt,y=e.bD,j=e.e,w=e.K,p=e.cl,x=e.cm,A=e.cn,v=e.af,$=e.w,k=e.o,S=e.W},function(e){C=e.u},function(e){I=e.I},function(e){M=e.b,z=e.M},function(e){E=e.c},function(e){O=e.I},function(e){T=e.O},function(e){P=e.g},function(){},function(){},function(){},function(){},function(){}],execute:function(){var D=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],F=function(e){if((0,E().isHide)(e.obj))return null;var n=M().setPathAs,j=I({id:1}).show;return t(z.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(r,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",get _hover(){return{transform:"scale(1.01)",bgColor:i(),transition:"all 0.3s"}},as:O,get href(){return e.obj.name},onMouseEnter:function(){n(e.obj.name,e.obj.is_dir,!0)},onContextMenu:function(n){o((function(){c(!1),a(e.index,!0,!0)})),j(n,{props:e.obj})},get children(){return[t(r,{class:"name-box",spacing:"$1",get w(){return D[0].w},get children(){return[t(l,{get when(){return u()},get children(){return t(s,{"on:click":function(e){e.stopPropagation()},get checked(){return e.obj.selected},onChange:function(n){a(e.index,n.target.checked)}})}}),t(g,{class:"icon",boxSize:"$6",get color(){return f()},get as(){return P(e.obj)},mr:"$1","on:click":function(n){e.obj.type===T.IMAGE&&(n.stopPropagation(),n.preventDefault(),d.emit("gallery",e.obj.name))}}),t(m,{get label(){return e.obj.name},get children(){return t(h,{class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get children(){return e.obj.name}})}})]}}),t(h,{class:"size",get w(){return D[1].w},get textAlign(){return D[1].textAlign},get children(){return b(e.obj.size)}}),t(h,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return D[2].w},get textAlign(){return D[2].textAlign},get children(){return y(e.obj.modified)}})]}})}})};n("default",(function(){var n=C(),i=e(j(),2),a=i[0],g=i[1],f=e(j(!1),2),d=f[0],m=f[1];w((function(){a()&&p(a(),d())}));var b=function(e){return{fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:e.textAlign,cursor:"pointer",onClick:function(){e.name===a()?m(!d()):o((function(){g(e.name),m(!1)}))}}};return t(S,{class:"list",w:"$full",spacing:"$1",get children(){return[t(r,{class:"title",w:"$full",p:"$2",get children(){return[t(r,{get w(){return D[0].w},spacing:"$1",get children(){return[t(l,{get when(){return u()},get children(){return t(s,{get checked(){return x()},get indeterminate(){return A()},onChange:function(e){c(e.target.checked)}})}}),t(h,v((function(){return b(D[0])}),{get children(){return n("home.obj.".concat(D[0].name))}}))]}}),t(h,v({get w(){return D[1].w}},(function(){return b(D[1])}),{get children(){return n("home.obj.".concat(D[1].name))}})),t(h,v({get w(){return D[2].w}},(function(){return b(D[1])}),{display:{"@initial":"none","@md":"inline"},get children(){return n("home.obj.".concat(D[2].name))}}))]}}),t($,{get each(){return k.objs},children:function(e,n){return t(F,{obj:e,get index(){return n()}})}})]}})}))}}}))}();
