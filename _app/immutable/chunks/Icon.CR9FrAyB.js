import{a as b,n as $}from"./disclose-version.RMkl_-ui.js";import{i as a0}from"./legacy.CgMNwOP2.js";import{U as F,p as r0,L as l0,v as k,e as I,h as i0,a3 as o0,n as G,P as n0,Q as S,d as T,f as y,aq as V,M as K,q as Q,N as t0,w as z,ar as s0,as as d0,m as u0,at as c0,an as f0,g as v0,j as h0,au as p0,ah as _0,_ as D,av as w0,aw as C0,ax as M0,a as g0,ay as N,a2 as R,az as x0,u as k0,E as Z0,F as A0,t as O,x as B0,C as H,r as y0,D as m0,B as L0,G as L}from"./runtime.CBu_r9p9.js";import{d as V0,f as q,g as E0,n as I0,j as T0}from"./store.CqJFsyPF.js";import{l as j,p as m}from"./props.-FiUUMrw.js";function H0(a,e){if(e){const r=document.body;a.autofocus=!0,F(()=>{document.activeElement===r&&a.focus()})}}function N0(a,e){return e}function b0(a,e,r,d){for(var u=[],c=e.length,s=0;s<c;s++)d0(e[s].e,u,!0);var f=c>0&&u.length===0&&r!==null;if(f){var _=r.parentNode;u0(_),_.append(r),d.clear(),Z(a,e[0].prev,e[c-1].next)}c0(u,()=>{for(var h=0;h<c;h++){var i=e[h];f||(d.delete(i.k),Z(a,i.prev,i.next)),f0(i.e,!f)}})}function S0(a,e,r,d,u,c=null){var s=a,f={flags:e,items:new Map,first:null};{var _=a;s=k?I(v0(_)):_.appendChild(r0())}k&&i0();var h=null,i=!1;l0(()=>{var v=r(),o=o0(v)?v:v==null?[]:G(v),t=o.length;if(i&&t===0)return;i=t===0;let w=!1;if(k){var M=s.data===n0;M!==(t===0)&&(s=S(),I(s),T(!1),w=!0)}if(k){for(var C=null,l,n=0;n<t;n++){if(y.nodeType===8&&y.data===h0){s=y,w=!0,T(!1);break}var x=o[n],g=d(x,n);l=X(y,f,C,null,x,g,n,u,e),f.items.set(g,l),C=l}t>0&&I(S())}if(!k){var p=p0;z0(o,f,s,u,e,(p.f&V)!==0,d)}c!==null&&(t===0?h?K(h):h=Q(()=>c(s)):h!==null&&t0(h,()=>{h=null})),w&&T(!0),r()}),k&&(s=y)}function z0(a,e,r,d,u,c,s){var f=a.length,_=e.items,h=e.first,i=h,v,o=null,t=[],w=[],M,C,l,n;for(n=0;n<f;n+=1){if(M=a[n],C=s(M,n),l=_.get(C),l===void 0){var x=i?i.e.nodes_start:r;o=X(x,e,o,o===null?e.first:o.next,M,C,n,d,u),_.set(C,o),t=[],w=[],i=o.next;continue}if(D0(l,M,n),l.e.f&V&&K(l.e),l!==i){if(v!==void 0&&v.has(l)){if(t.length<w.length){var g=w[0],p;o=g.prev;var A=t[0],B=t[t.length-1];for(p=0;p<t.length;p+=1)P(t[p],g,r);for(p=0;p<w.length;p+=1)v.delete(w[p]);Z(e,A.prev,B.next),Z(e,o,A),Z(e,B,g),i=g,o=B,n-=1,t=[],w=[]}else v.delete(l),P(l,i,r),Z(e,l.prev,l.next),Z(e,l,o===null?e.first:o.next),Z(e,o,l),o=l;continue}for(t=[],w=[];i!==null&&i.k!==C;)(c||!(i.e.f&V))&&(v??(v=new Set)).add(i),w.push(i),i=i.next;if(i===null)continue;l=i}t.push(l),o=l,i=l.next}if(i!==null||v!==void 0){for(var E=v===void 0?[]:G(v);i!==null;)(c||!(i.e.f&V))&&E.push(i),i=i.next;var W=E.length;if(W>0){var e0=f===0?r:null;b0(e,E,e0,_)}}z.first=e.first&&e.first.e,z.last=o&&o.e}function D0(a,e,r,d){s0(a.v,e),a.i=r}function X(a,e,r,d,u,c,s,f,_){var h=(_&C0)!==0,i=(_&M0)===0,v=h?i?_0(u):D(u):u,o=_&w0?D(s):s,t={i:o,v,k:c,a:null,e:null,prev:r,next:d};try{return t.e=Q(()=>f(a,v,o),k),t.e.prev=r&&r.e,t.e.next=d&&d.e,r===null?e.first=t:(r.next=t,r.e.next=t.e),d!==null&&(d.prev=t,d.e.prev=t.e),t}finally{}}function P(a,e,r){for(var d=a.next?a.next.e.nodes_start:r,u=e?e.e.nodes_start:r,c=a.e.nodes_start;c!==d;){var s=g0(c);u.before(c),c=s}}function Z(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function R0(a,e,r,d){var u=a.__attributes??(a.__attributes={});k&&(u[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||u[e]!==(u[e]=r)&&(e==="style"&&"__styles"in a&&(a.__styles={}),e==="loading"&&(a[N]=r),r==null?a.removeAttribute(e):typeof r!="string"&&J(a).includes(e)?a[e]=r:a.setAttribute(e,r))}function U(a,e,r,d,u=!1,c=!1,s=!1){var f=e||{},_=a.tagName==="OPTION";for(var h in e)h in r||(r[h]=null);var i=J(a),v=a.__attributes??(a.__attributes={}),o=[];for(const l in r){let n=r[l];if(_&&l==="value"&&n==null){a.value=a.__value="",f[l]=n;continue}var t=f[l];if(n!==t){f[l]=n;var w=l[0]+l[1];if(w!=="$$"){if(w==="on"){const x={},g="$$"+l;let p=l.slice(2);var M=T0(p);if(V0(p)&&(p=p.slice(0,-7),x.capture=!0),!M&&t){if(n!=null)continue;a.removeEventListener(p,f[g],x),f[g]=null}if(n!=null)if(M)a[`__${p}`]=n,E0([p]);else{let A=function(B){f[l].call(this,B)};e?f[g]=q(p,a,A,x):o.push([l,n,()=>f[g]=q(p,a,A,x)])}}else if(l==="style"&&n!=null)a.style.cssText=n+"";else if(l==="autofocus")H0(a,!!n);else if(l==="__value"||l==="value"&&n!=null)a.value=a[l]=a.__value=n;else{var C=l;u||(C=I0(C)),n==null&&!c?(v[l]=null,a.removeAttribute(l)):i.includes(C)&&(c||typeof n!="string")?a[C]=n:typeof n!="function"&&(k&&(C==="src"||C==="href"||C==="srcset")||R0(a,C,n))}l==="style"&&"__styles"in a&&(a.__styles={})}}}return e||F(()=>{if(a.isConnected)for(const[l,n,x]of o)f[l]===n&&x()}),f}var Y=new Map;function J(a){var e=Y.get(a.nodeName);if(e)return e;Y.set(a.nodeName,e=[]);for(var r,d=R(a),u=Element.prototype;u!==d;){r=x0(d);for(var c in r)r[c].set&&e.push(c);d=R(d)}return e}function F0(a){if(!k&&a.loading==="lazy"){var e=a.src;a[N]=null,a.loading="eager",a.removeAttribute("src"),requestAnimationFrame(()=>{a[N]!=="eager"&&(a.loading="lazy"),a.src=e})}}const G0={default:{a:{fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},path:[{"stroke-linecap":"round","stroke-linejoin":"round",d:"m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}]},micro:{a:{viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"},path:[{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-10.25a.75.75 0 0 0-1.5 0v4.69L6.03 8.22a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06L8.75 9.44V4.75Z","clip-rule":"evenodd"}]},mini:{a:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},path:[{"fill-rule":"evenodd",d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v4.59L7.3 9.24a.75.75 0 0 0-1.1 1.02l3.25 3.5a.75.75 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02l-1.95 2.1V6.75Z","clip-rule":"evenodd"}]},solid:{a:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},path:[{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z","clip-rule":"evenodd"}]}},K0={default:{a:{fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},path:[{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"}]},micro:{a:{viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"},path:[{"fill-rule":"evenodd",d:"M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z","clip-rule":"evenodd"}]},mini:{a:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},path:[{"fill-rule":"evenodd",d:"M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z","clip-rule":"evenodd"}]},solid:{a:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},path:[{"fill-rule":"evenodd",d:"M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"}]}},Q0={default:{a:{fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},path:[{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"}]},micro:{a:{viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"},path:[{"fill-rule":"evenodd",d:"M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z","clip-rule":"evenodd"}]},mini:{a:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},path:[{"fill-rule":"evenodd",d:"M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z","clip-rule":"evenodd"}]},solid:{a:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},path:[{"fill-rule":"evenodd",d:"M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z","clip-rule":"evenodd"}]}},X0={default:{a:{fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},path:[{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5 8.25 12l7.5-7.5"}]},micro:{a:{viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"},path:[{"fill-rule":"evenodd",d:"M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z","clip-rule":"evenodd"}]},mini:{a:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},path:[{"fill-rule":"evenodd",d:"M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z","clip-rule":"evenodd"}]},solid:{a:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},path:[{"fill-rule":"evenodd",d:"M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z","clip-rule":"evenodd"}]}},J0={default:{a:{fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},path:[{"stroke-linecap":"round","stroke-linejoin":"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"}]},micro:{a:{viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"},path:[{"fill-rule":"evenodd",d:"M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"}]},mini:{a:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},path:[{"fill-rule":"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"}]},solid:{a:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},path:[{"fill-rule":"evenodd",d:"M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z","clip-rule":"evenodd"}]}},W0={default:{a:{fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},path:[{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"}]},micro:{a:{viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"},path:[{d:"M8 7c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3Z"},{d:"M8 8.5c1.84 0 3.579-.37 4.914-1.037A6.33 6.33 0 0 0 14 6.78V8c0 1.657-2.686 3-6 3S2 9.657 2 8V6.78c.346.273.72.5 1.087.683C4.42 8.131 6.16 8.5 8 8.5Z"},{d:"M8 12.5c1.84 0 3.579-.37 4.914-1.037.366-.183.74-.41 1.086-.684V12c0 1.657-2.686 3-6 3s-6-1.343-6-3v-1.22c.346.273.72.5 1.087.683C4.42 12.131 6.16 12.5 8 12.5Z"}]},mini:{a:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},path:[{"fill-rule":"evenodd",d:"M10 1c3.866 0 7 1.79 7 4s-3.134 4-7 4-7-1.79-7-4 3.134-4 7-4Zm5.694 8.13c.464-.264.91-.583 1.306-.952V10c0 2.21-3.134 4-7 4s-7-1.79-7-4V8.178c.396.37.842.688 1.306.953C5.838 10.006 7.854 10.5 10 10.5s4.162-.494 5.694-1.37ZM3 13.179V15c0 2.21 3.134 4 7 4s7-1.79 7-4v-1.822c-.396.37-.842.688-1.306.953-1.532.875-3.548 1.369-5.694 1.369s-4.162-.494-5.694-1.37A7.009 7.009 0 0 1 3 13.179Z","clip-rule":"evenodd"}]},solid:{a:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},path:[{d:"M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z"},{d:"M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z"},{d:"M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z"},{d:"M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z"}]}},e1={default:{a:{fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},path:[{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"}]},micro:{a:{viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"},path:[{"fill-rule":"evenodd",d:"M4.78 4.97a.75.75 0 0 1 0 1.06L2.81 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM11.22 4.97a.75.75 0 0 0 0 1.06L13.19 8l-1.97 1.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0ZM8.856 2.008a.75.75 0 0 1 .636.848l-1.5 10.5a.75.75 0 0 1-1.484-.212l1.5-10.5a.75.75 0 0 1 .848-.636Z","clip-rule":"evenodd"}]},mini:{a:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},path:[{"fill-rule":"evenodd",d:"M6.28 5.22a.75.75 0 0 1 0 1.06L2.56 10l3.72 3.72a.75.75 0 0 1-1.06 1.06L.97 10.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Zm7.44 0a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 0 1 0-1.06ZM11.377 2.011a.75.75 0 0 1 .612.867l-2.5 14.5a.75.75 0 0 1-1.478-.255l2.5-14.5a.75.75 0 0 1 .866-.612Z","clip-rule":"evenodd"}]},solid:{a:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},path:[{"fill-rule":"evenodd",d:"M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z","clip-rule":"evenodd"}]}},a1={default:{a:{fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},path:[{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"}]},micro:{a:{viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"},path:[{d:"M2.5 3.5A1.5 1.5 0 0 1 4 2h4.879a1.5 1.5 0 0 1 1.06.44l3.122 3.12a1.5 1.5 0 0 1 .439 1.061V12.5A1.5 1.5 0 0 1 12 14H4a1.5 1.5 0 0 1-1.5-1.5v-9Z"}]},mini:{a:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},path:[{d:"M3 3.5A1.5 1.5 0 0 1 4.5 2h6.879a1.5 1.5 0 0 1 1.06.44l4.122 4.12A1.5 1.5 0 0 1 17 7.622V16.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 16.5v-13Z"}]},solid:{a:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},path:[{d:"M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z"},{d:"M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"}]}};var O0=$("<path></path>"),q0=$("<svg></svg>");function r1(a,e){const r=j(e,["children","$$slots","$$events","$$legacy"]),d=j(r,["src","size","solid","mini","micro"]);k0(e,!1);const u=m0();let c=m(e,"src",8),s=m(e,"size",12,"100%"),f=m(e,"solid",8,!1),_=m(e,"mini",8,!1),h=m(e,"micro",8,!1);if(s()!=="100%"&&s().slice(-1)!="x"&&s().slice(-1)!="m"&&s().slice(-1)!="%")try{s(parseInt(s())+"px")}catch{s("100%")}Z0(()=>(L(c()),L(f()),L(_()),L(h())),()=>{var o;L0(u,(o=c())==null?void 0:o[f()?"solid":_()?"mini":h()?"micro":"default"])}),A0(),a0();var i=q0();let v;S0(i,5,()=>{var o;return((o=H(u))==null?void 0:o.path)??[]},N0,(o,t)=>{var w=O0();let M;O(()=>M=U(w,M,{...H(t)},void 0,!0)),b(o,w)}),y0(i),O(()=>{var o;return v=U(i,v,{...(o=H(u))==null?void 0:o.a,xmlns:"http://www.w3.org/2000/svg",width:s(),height:s(),"aria-hidden":"true",...d},void 0,!0)}),b(a,i),B0()}export{K0 as A,X0 as C,a1 as D,r1 as I,J0 as a,e1 as b,W0 as c,G0 as d,S0 as e,Q0 as f,F0 as h,N0 as i,R0 as s};
