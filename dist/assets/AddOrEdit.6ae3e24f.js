import{u as p,br as x,a as d,b4 as g,f as t,W as C,bf as v,aY as c,aW as m,w as k,B as _,bd as h,n as F,Z as I,bg as S,ay as o,I as T,bP as L,T as E,bq as M,m as q,F as B}from"./index.33d2aa70.js";import{F as D}from"./FolderTree.efff2f9f.js";import{u as b}from"./useT.2ec8a2b0.js";import"./index.a372d41a.js";import"./api.e0893224.js";const H=e=>{const r=b();return t(c,{w:"$full",display:"flex",flexDirection:"column",get children(){return[t(m,{get for(){return e.name},display:"flex",alignItems:"center",get children(){return r(`metas.${e.name}`)}}),t(S,{w:"$full",get direction(){return e.type==="bool"?"row":{"@initial":"column","@md":"row"}},gap:"$2",get children(){return[o(()=>o(()=>e.type==="string",!0)()?t(T,{get id(){return e.name},get value(){return e.value},onInput:a=>e.onChange(a.currentTarget.value)}):o(()=>e.type==="bool",!0)()?t(L,{get id(){return e.name},get defaultChecked(){return e.value},onChange:a=>e.onChange(a.currentTarget.checked)}):t(E,{get id(){return e.name},get value(){return e.value},onChange:a=>e.onChange(a.currentTarget.value)})),t(c,{w:"fit-content",display:"flex",get children(){return t(M,{css:{whiteSpace:"nowrap"},get id(){return`${e.name}_sub`},onChange:a=>e.onSub(a.currentTarget.checked),color:"$neutral10",fontSize:"$sm",get checked(){return e.sub},get children(){return r("metas.apply_sub")}})}})]}}),t(q,{get when(){return e.help},get children(){return t(B,{get children(){return r(`metas.${e.name}_help`)}})}})]}})},V=()=>{const e=b(),{params:r,back:a}=p(),{id:u}=r,[l,s]=x({id:0,path:"",password:"",p_sub:!1,write:!1,w_sub:!1,hide:"",h_sub:!1,readme:"",r_sub:!1}),[f,w]=d(()=>g.get(`/admin/meta/get?id=${u}`));u&&(async()=>{const n=await w();h(n,s)})();const[y,$]=d(()=>g.post(`/admin/meta/${u?"update":"create"}`,l));return t(I,{get loading(){return f()},get children(){return t(C,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(v,{get children(){return e(`global.${u?"edit":"add"}`)}}),t(c,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[t(m,{for:"path",display:"flex",alignItems:"center",get children(){return e("metas.path")}}),t(D,{id:"path",get value(){return l.path},onChange:n=>s("path",n)})]}}),t(k,{each:[{name:"password",type:"string"},{name:"write",type:"bool"},{name:"hide",type:"text",help:!0},{name:"readme",type:"text",help:!0}],children:n=>t(H,{get name(){return n.name},get type(){return n.type},get value(){return l[n.name]},onChange:i=>s(n.name,i),get sub(){return l[`${n.name[0]}_sub`]},onSub:i=>s(`${n.name[0]}_sub`,i),get help(){return n.help}})}),t(_,{get loading(){return y()},onClick:async()=>{const n=await $();h(n,()=>{F.success(e("global.save_success")),a()})},get children(){return e(`global.${u?"save":"add"}`)}})]}})}})};export{V as default};
