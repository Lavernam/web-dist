!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,a,c=[],i=!0,o=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(c.push(r.value),!e||c.length!==e);i=!0);}catch(u){o=!0,a=u}finally{try{i||null==t.return||t.return()}finally{if(o)throw a}}return c}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.4af04eee.js","./useT-legacy.c1cba3a3.js","./File-legacy.fd1d04e2.js","./useUtil-legacy.c0dfa3d1.js","./api-legacy.538c3029.js","./icon-legacy.815aaf03.js","./index-legacy.a822ff8e.js","./Layout-legacy.89f42ad9.js","./useTitle-legacy.806a6cbd.js","./Markdown-legacy.daa37319.js","./index-legacy.e4f30fdd.js","./FolderTree-legacy.001c8491.js","./obj-legacy.97e43e8b.js"],(function(e){"use strict";var t,r,a,c,i,o;return{setters:[function(n){t=n.e,r=n.f,a=n.B,c=n.o},function(n){i=n.u},function(n){o=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=i(),u=n(t(!1),2),l=u[0],f=u[1];return r(o,{get children(){return r(a,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+c.raw_url},onClick:function(){f(!0)},get children(){return e("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();
