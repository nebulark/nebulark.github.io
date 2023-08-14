import{d as _,i as d,a as p,u,b as h,c as m,e as f,f as n,g as t,t as o,h as a,F as g,r as v,n as x,j as y,o as l,k as b,l as k,m as N,p as P,q as w,_ as S}from"./index-cbb986e4.js";import{N as V}from"./NoteDisplay-a3c51892.js";const j={class:"m-4"},C={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},M=t("div",{class:"flex-auto"},null,-1),R={key:0,class:"border-gray-400/50 mb-8"},z=_({__name:"PresenterPrint",setup(F){d(p),u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const r=f(()=>y.map(s=>{var i;return(i=s.meta)==null?void 0:i.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,i)=>(l(),n("div",{id:"page-root",style:x(a(w))},[t("div",j,[t("div",C,[t("h1",L,o(a(m).title),1),t("div",T,o(new Date().toLocaleString()),1)]),(l(!0),n(g,null,v(a(r),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,o(e==null?void 0:e.no)+"/"+o(a(b)),1),k(" "+o(e==null?void 0:e.title)+" ",1),M])]),N(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(r).length-1?(l(),n("hr",R)):P("v-if",!0)]))),128))])],4))}}),E=S(z,[["__file","C:/Users/MrRed/Repos/talk_value_semantics/exclusive_mutablility/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
