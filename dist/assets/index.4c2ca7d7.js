import{f as e,w,W as k,v as V,a2 as I,a3 as A,be as m,U as z,R as B,u as p,L as y,A as C,m as _,ae as h,bf as g,e as M,bg as E,a0 as l,Y as i,t as L,H as n,_ as r,bh as x,bi as U,ao as W,J as R,a7 as T,bj as H,bk as Y,n as j,aV as N,aN as F,aO as J,aP as q,aQ as Q,aR as G,aa as f,aT as b,aU as D,bl as K,bm as X,bn as Z}from"./index.33d2aa70.js";import{u as d}from"./useT.2ec8a2b0.js";import{b as e1,a as t1}from"./useTitle.38fb23d6.js";import{A as n1,d as r1,e as o1,f as a1,g as i1,h as s1,i as c1,j as l1,k as u1,l as m1,m as g1,n as d1,o as _1,p as h1,q as p1}from"./index.a372d41a.js";var c=(t=>(t[t.SITE=0]="SITE",t[t.STYLE=1]="STYLE",t[t.PREVIEW=2]="PREVIEW",t[t.GLOBAL=3]="GLOBAL",t[t.SINGLE=4]="SINGLE",t[t.ARIA2=5]="ARIA2",t))(c||{}),E1=(t=>(t[t.PUBLIC=0]="PUBLIC",t[t.PRIVATE=1]="PRIVATE",t[t.READONLY=2]="READONLY",t[t.DEPRECATED=3]="DEPRECATED",t))(E1||{});const f1=t=>{const o=V(()=>{if(!I.is_admin(A())){if(t.role===void 0)return!1;if(t.role===m.GENERAL&&!I.is_general(A()))return!1}return!0});return e(B,{get fallback(){return e($1,t)},get children(){return[e(z,{get when(){return!o()},children:null}),e(z,{get when(){return t.children},get children(){return e(v1,t)}})]}})},$1=t=>{const{pathname:o}=p(),a=d(),s=()=>o()===t.to;return e(n1,{display:"flex",as:y,get href(){return t.to},onClick:()=>{S()},w:"$full",alignItems:"center",get _hover(){return{bgColor:s()?"$info4":C(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return s()?"$info4":""},get color(){return s()?"$info11":""},get children(){return[e(_,{get when(){return t.icon},get children(){return e(h,{mr:"$2",get as(){return t.icon}})}}),e(g,{get children(){return a(t.title)}})]}})},v1=t=>{const{pathname:o}=p(),[a,s]=M(o().includes(t.to)),O=d();return e(i,{w:"$full",get children(){return[e(E,{justifyContent:"space-between",onClick:()=>{s(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:C()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[e(l,{get children(){return[e(_,{get when(){return t.icon},get children(){return e(h,{mr:"$2",get as(){return t.icon}})}}),e(g,{get children(){return O(t.title)}})]}}),e(h,{as:r1,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),e(_,{get when(){return a()},get children(){return e(i,{pl:"$2",get children(){return e($,{get items(){return t.children}})}})}})]}})},$=t=>e(k,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return e(w,{get each(){return t.items},children:o=>e(f1,o)})}});function I1(t){return L({a:{viewBox:"0 0 24 24"},c:'<path d="M5.385 6.136c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-1.438 2.63c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465-2.63c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.499-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm-1.088 5.592c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.643 1.461 1.438 1.461zm5.464-5.592c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 7.247 12 7.247s1.088-.498 1.088-1.111zm.35-4.675c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461S11.206 0 12 0s1.438.654 1.438 1.461zm-.35 0C13.088.848 12.6.35 12 .35s-1.088.498-1.088 1.111S11.4 2.572 12 2.572s1.088-.498 1.088-1.111zm.35 8.806c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.499 1.088-1.111zm4.376-4.131c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939 1.461c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.644 1.461 1.438 1.461zm-4.027 1.209c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.643-1.461-1.438-1.461zm4.027 0c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 12.857a1.45 1.45 0 00-1.438 1.461c0 .807.644 1.461 1.438 1.461s1.438-.654 1.438-1.461a1.45 1.45 0 00-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zM12 12.896c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.464 1.461c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 16.948c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm4.376 0c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm.35 4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 23.65 12 23.65s1.088-.498 1.088-1.111zm4.376-4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461z"/>'},t)}function A1(t){return L({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},t)}const u=n(()=>r(()=>import("./Common.a8ba0ad5.js"),["assets/Common.a8ba0ad5.js","assets/index.33d2aa70.js","assets/index.659f4289.css","assets/useT.2ec8a2b0.js","assets/useTitle.38fb23d6.js","assets/SettingItem.2d33a6e9.js","assets/item_type.be442da4.js","assets/index.a372d41a.js","assets/ResponsiveGrid.c622709b.js"])),v=[{title:"manage.sidemenu.profile",icon:o1,to:"/@manage",role:m.GUEST,component:n(()=>r(()=>import("./Profile.b0c9b166.js"),["assets/Profile.b0c9b166.js","assets/index.33d2aa70.js","assets/index.659f4289.css","assets/useT.2ec8a2b0.js","assets/useTitle.38fb23d6.js","assets/index.a372d41a.js"]))},{title:"manage.sidemenu.settings",icon:a1,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:i1,to:"/@manage/settings/site",component:()=>e(u,{get group(){return c.SITE}})},{title:"manage.sidemenu.style",icon:s1,to:"/@manage/settings/style",component:()=>e(u,{get group(){return c.STYLE}})},{title:"manage.sidemenu.preview",icon:c1,to:"/@manage/settings/preview",component:()=>e(u,{get group(){return c.PREVIEW}})},{title:"manage.sidemenu.global",icon:l1,to:"/@manage/settings/global",component:()=>e(u,{get group(){return c.GLOBAL}})},{title:"manage.sidemenu.other",icon:u1,to:"/@manage/settings/other",component:n(()=>r(()=>import("./Other.a99755c9.js"),["assets/Other.a99755c9.js","assets/index.33d2aa70.js","assets/index.659f4289.css","assets/useT.2ec8a2b0.js","assets/useTitle.38fb23d6.js","assets/useUtil.c55c396d.js","assets/api.e0893224.js","assets/SettingItem.2d33a6e9.js","assets/item_type.be442da4.js","assets/index.a372d41a.js"]))}]},{title:"manage.sidemenu.tasks",icon:A1,to:"/@manage/tasks",children:[{title:"manage.sidemenu.aria2",icon:m1,to:"/@manage/tasks/aria2",component:n(()=>r(()=>import("./Aria2.7ab43281.js"),["assets/Aria2.7ab43281.js","assets/index.33d2aa70.js","assets/index.659f4289.css","assets/useTitle.38fb23d6.js","assets/useT.2ec8a2b0.js","assets/Tasks.b65b0edc.js"]))},{title:"manage.sidemenu.upload",icon:g1,to:"/@manage/tasks/upload",component:n(()=>r(()=>import("./Upload.60d8d9d8.js"),["assets/Upload.60d8d9d8.js","assets/index.33d2aa70.js","assets/index.659f4289.css","assets/useTitle.38fb23d6.js","assets/useT.2ec8a2b0.js","assets/Tasks.b65b0edc.js"]))},{title:"manage.sidemenu.copy",icon:x,to:"/@manage/tasks/copy",component:n(()=>r(()=>import("./Copy.e4119115.js"),["assets/Copy.e4119115.js","assets/index.33d2aa70.js","assets/index.659f4289.css","assets/useTitle.38fb23d6.js","assets/useT.2ec8a2b0.js","assets/Tasks.b65b0edc.js"]))}]},{title:"manage.sidemenu.users",icon:d1,to:"/@manage/users",component:n(()=>r(()=>import("./Users.768dccaf.js"),["assets/Users.768dccaf.js","assets/index.33d2aa70.js","assets/index.659f4289.css","assets/useT.2ec8a2b0.js","assets/useTitle.38fb23d6.js","assets/DeletePopover.da4b67cc.js"]))},{title:"manage.sidemenu.storages",icon:_1,to:"/@manage/storages",component:n(()=>r(()=>import("./Storages.82ba45aa.js"),["assets/Storages.82ba45aa.js","assets/index.33d2aa70.js","assets/index.659f4289.css","assets/useT.2ec8a2b0.js","assets/useTitle.38fb23d6.js","assets/DeletePopover.da4b67cc.js"]))},{title:"manage.sidemenu.metas",icon:I1,to:"/@manage/metas",component:n(()=>r(()=>import("./Metas.fa98b082.js"),["assets/Metas.fa98b082.js","assets/index.33d2aa70.js","assets/index.659f4289.css","assets/useT.2ec8a2b0.js","assets/useTitle.38fb23d6.js","assets/DeletePopover.da4b67cc.js"]))},{title:"manage.sidemenu.about",icon:h1,to:"/@manage/about",role:m.GUEST,component:n(()=>r(()=>import("./About.7cc79a0e.js"),["assets/About.7cc79a0e.js","assets/index.33d2aa70.js","assets/index.659f4289.css","assets/Markdown.2728e972.js"]))},{title:"manage.sidemenu.home",icon:U,to:"/",role:m.GUEST}],{isOpen:z1,onOpen:T1,onClose:S}=W(),w1=()=>{const t=d(),{to:o}=p();return e(i,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return R("$background","$neutral2")()},get children(){return[e(E,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[e(l,{spacing:"$2",get children(){return[e(T,{"aria-label":"menu",get icon(){return e(p1,{})},display:{"@sm":"none"},onClick:T1,size:"sm"}),e(g,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{o("/@manage")},get children(){return t("manage.title")}})]}}),e(l,{spacing:"$1",get children(){return e(T,{"aria-label":"logout",get icon(){return e(H,{})},onClick:()=>{Y(),j.success(t("manage.logout_success")),o(`/@login?redirect=${encodeURIComponent(location.pathname)}`)},size:"sm"})}})]}}),e(N,{get opened(){return z1()},placement:"left",onClose:S,get children(){return[e(F,{}),e(J,{get children(){return[e(q,{}),e(Q,{color:"$info9",get children(){return t("manage.title")}}),e(G,{get children(){return[e($,{items:v}),e(f,{get children(){return e(l,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[e(b,{}),e(D,{})]}})}})]}})]}})]}})]}})},C1=[{to:"/storages/add",component:n(()=>r(()=>import("./AddOrEdit.5f6e6c95.js"),["assets/AddOrEdit.5f6e6c95.js","assets/index.33d2aa70.js","assets/index.659f4289.css","assets/useT.2ec8a2b0.js","assets/item_type.be442da4.js","assets/ResponsiveGrid.c622709b.js"]))},{to:"/storages/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.5f6e6c95.js"),["assets/AddOrEdit.5f6e6c95.js","assets/index.33d2aa70.js","assets/index.659f4289.css","assets/useT.2ec8a2b0.js","assets/item_type.be442da4.js","assets/ResponsiveGrid.c622709b.js"]))},{to:"/users/add",component:n(()=>r(()=>import("./AddOrEdit.560d5110.js"),["assets/AddOrEdit.560d5110.js","assets/index.33d2aa70.js","assets/index.659f4289.css","assets/FolderTree.efff2f9f.js","assets/index.a372d41a.js","assets/api.e0893224.js","assets/useT.2ec8a2b0.js"]))},{to:"/users/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.560d5110.js"),["assets/AddOrEdit.560d5110.js","assets/index.33d2aa70.js","assets/index.659f4289.css","assets/FolderTree.efff2f9f.js","assets/index.a372d41a.js","assets/api.e0893224.js","assets/useT.2ec8a2b0.js"]))},{to:"/metas/add",component:n(()=>r(()=>import("./AddOrEdit.6ae3e24f.js"),["assets/AddOrEdit.6ae3e24f.js","assets/index.33d2aa70.js","assets/index.659f4289.css","assets/FolderTree.efff2f9f.js","assets/index.a372d41a.js","assets/api.e0893224.js","assets/useT.2ec8a2b0.js"]))},{to:"/metas/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.6ae3e24f.js"),["assets/AddOrEdit.6ae3e24f.js","assets/index.33d2aa70.js","assets/index.659f4289.css","assets/FolderTree.efff2f9f.js","assets/index.a372d41a.js","assets/api.e0893224.js","assets/useT.2ec8a2b0.js"]))},{to:"/2fa",component:n(()=>r(()=>import("./2fa.487f8a9e.js"),["assets/2fa.487f8a9e.js","assets/index.33d2aa70.js","assets/index.659f4289.css","assets/useT.2ec8a2b0.js"]))},{to:"/messenger",component:n(()=>r(()=>import("./Messenger.7a2f3243.js"),["assets/Messenger.7a2f3243.js","assets/index.33d2aa70.js","assets/index.659f4289.css","assets/useT.2ec8a2b0.js"]))}],L1=t=>(e1(t.title),e(f,{h:"$full",get children(){return e(g,{get children(){return t.title}})}})),P=(t,o=[])=>(t.forEach(a=>{a.children?P(a.children,o):o.push({to:K(a.to,"/@manage"),component:a.component||(()=>e(L1,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),o),R1=P(v).concat(C1),b1=()=>{const t=d();return t1(()=>t("manage.title")),e(i,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[e(w1,{}),e(E,{w:"$full",h:"calc(100vh - 64px)",get children(){return[e(i,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return R("$background","$neutral2")()},overflowY:"auto",get children(){return[e($,{items:v}),e(f,{get children(){return e(l,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[e(b,{}),e(D,{})]}})}})]}}),e(i,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return e(X,{get children(){return e(w,{each:R1,children:o=>e(Z,{get path(){return o.to},get component(){return o.component}})})}})}})]}})]}})},k1=Object.freeze(Object.defineProperty({__proto__:null,default:b1},Symbol.toStringTag,{value:"Module"}));export{E1 as F,c as G,k1 as i};
