import{a as x,t as h}from"../chunks/disclose-version.tVpYrPme.js";import{i as P}from"../chunks/legacy.DlkocQ35.js";import{p as T,f as q,t as c,a as A,b as B,g as s,m as E,s as l,c as o,r}from"../chunks/runtime.BcJFkwAi.js";import{e as G,s as d}from"../chunks/store.dEBlKHcu.js";import{e as S,i as z,V as b,a as H,s as _}from"../chunks/versions.BPwrn8td.js";import{p as I,o as J}from"../chunks/index-client.BcnZZLae.js";import{g as K}from"../chunks/entry.DMD7ebmF.js";import{N as L}from"../chunks/Navbar.ClAJKaxU.js";const Q=({params:p})=>({version:p.version}),rt=Object.freeze(Object.defineProperty({__proto__:null,load:Q},Symbol.toStringTag,{value:"Module"}));var R=h("<button> </button>"),U=h('<a class="align-center flex flex-col justify-center rounded-lg bg-white px-3 py-3"><img class="w-full rounded-lg"> <p class="lexend w-full text-center text-black"> </p></a>'),W=h('<!> <section class="flex flex-col items-center justify-center px-4 py-4"><div class="flex w-full items-stretch overflow-hidden rounded-lg bg-neutral-800"></div> <div class="mt-4 w-full rounded-lg bg-neutral-800 px-4 py-4"><h3 class="lexend text-base font-bold text-white"> </h3> <p class="lexend mt-1 text-sm font-light text-neutral-400"> </p></div> <div class="mt-4 grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4"></div></section>',1);function ot(p,w){T(w,!1);let i=I(w,"data",8),u=E([]);J(async()=>{const t=await fetch("/assets/choices/output.json");B(u,await t.json()),s(u).sort()});const f=[b.Original,b.Constraint,b.SelfFeedback];function C(t){K(`/task/${t}`)}P();var y=W(),k=q(y);L(k,{title:"Visualizations",link:"/"});var j=l(k,2),v=o(j);S(v,5,()=>f,z,(t,e)=>{var a=R(),n=o(a,!0);r(a),c(()=>{H(a,`lexend w-full px-4 py-2 text-sm ${(i().version===s(e).name?"bg-white text-black":"bg-neutral-800 text-gray-500")??""}`),d(n,s(e).name)}),G("click",a,()=>C(s(e).name)),x(t,a)}),r(v);var m=l(v,2),g=o(m),M=o(g,!0);c(()=>{var t;return d(M,((t=f.find(e=>e.name===i().version))==null?void 0:t.label)||"")}),r(g);var V=l(g,2),D=o(V,!0);c(()=>{var t;return d(D,((t=f.find(e=>e.name===i().version))==null?void 0:t.description)||"")}),r(V),r(m);var $=l(m,2);S($,5,()=>s(u),z,(t,e)=>{var a=U(),n=o(a),O=l(n,2),F=o(O,!0);r(O),r(a),c(()=>{_(a,"href",`/task/${i().version}/${s(e)}`),_(n,"src",`/assets/thumbnails/${s(e)}.png`),_(n,"alt",s(e)),d(F,s(e))}),x(t,a)}),r($),r(j),x(p,y),A()}export{ot as component,rt as universal};
