import{S as T,Q as $,R as j,T as m,U as V,m as w,V as c,y as S,g as o,W as L,X as z,Y as G,Z as H,_ as Q,$ as W,a0 as Y,a1 as X,d as B,a2 as U,a3 as J,a4 as k,a5 as q,a6 as ee,a7 as Z,a8 as re,a9 as ne,i as C,w as te,aa as ae,ab as ie,b as A,a as ue}from"./runtime.fS1GLMV3.js";import{c as fe}from"./store.hUj0uQFW.js";function p(e,r=null,_){if(typeof e!="object"||e===null||T in e)return e;const P=G(e);if(P!==$&&P!==j)return e;var f=new Map,b=H(e),I=m(0);b&&f.set("length",m(e.length));var y;return new Proxy(e,{defineProperty(u,n,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&V();var a=f.get(n);return a===void 0?(a=m(t.value),f.set(n,a)):w(a,p(t.value,y)),!0},deleteProperty(u,n){var t=f.get(n);if(t===void 0)n in u&&f.set(n,m(c));else{if(b&&typeof n=="string"){var a=f.get("length"),i=Number(n);Number.isInteger(i)&&i<a.v&&w(a,i)}w(t,c),F(I)}return!0},get(u,n,t){var d;if(n===T)return e;var a=f.get(n),i=n in u;if(a===void 0&&(!i||(d=S(u,n))!=null&&d.writable)&&(a=m(p(i?u[n]:c,y)),f.set(n,a)),a!==void 0){var s=o(a);return s===c?void 0:s}return Reflect.get(u,n,t)},getOwnPropertyDescriptor(u,n){var t=Reflect.getOwnPropertyDescriptor(u,n);if(t&&"value"in t){var a=f.get(n);a&&(t.value=o(a))}else if(t===void 0){var i=f.get(n),s=i==null?void 0:i.v;if(i!==void 0&&s!==c)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return t},has(u,n){var s;if(n===T)return!0;var t=f.get(n),a=t!==void 0&&t.v!==c||Reflect.has(u,n);if(t!==void 0||L!==null&&(!a||(s=S(u,n))!=null&&s.writable)){t===void 0&&(t=m(a?p(u[n],y):c),f.set(n,t));var i=o(t);if(i===c)return!1}return a},set(u,n,t,a){var x;var i=f.get(n),s=n in u;if(b&&n==="length")for(var d=t;d<i.v;d+=1){var v=f.get(d+"");v!==void 0?w(v,c):d in u&&(v=m(c),f.set(d+"",v))}i===void 0?(!s||(x=S(u,n))!=null&&x.writable)&&(i=m(void 0),w(i,p(t,y)),f.set(n,i)):(s=i.v!==c,w(i,p(t,y)));var h=Reflect.getOwnPropertyDescriptor(u,n);if(h!=null&&h.set&&h.set.call(a,t),!s){if(b&&typeof n=="string"){var O=f.get("length"),g=Number(n);Number.isInteger(g)&&g>=O.v&&w(O,g+1)}F(I)}return!0},ownKeys(u){o(I);var n=Reflect.ownKeys(u).filter(i=>{var s=f.get(i);return s===void 0||s.v!==c});for(var[t,a]of f)a.v!==c&&!(t in u)&&n.push(t);return n},setPrototypeOf(){z()}})}function F(e,r=1){w(e,e.v+r)}function se(e){throw new Error("lifecycle_outside_component")}const le={get(e,r){if(!e.exclude.includes(r))return o(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,_){return r in e.special||(e.special[r]=ce({get[r](){return e.props[r]}},r,Y)),e.special[r](_),U(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),U(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function oe(e,r){return new Proxy({props:e,exclude:r,special:{},version:m(0)},le)}function K(e){for(var r=L,_=L;r!==null&&!(r.f&(J|k));)r=r.parent;try{return q(r),e()}finally{q(_)}}function ce(e,r,_,P){var M;var f=(_&ee)!==0,b=!Z||(_&re)!==0,I=(_&ne)!==0,y=(_&ae)!==0,u=!1,n;I?[n,u]=fe(()=>e[r]):n=e[r];var t=(M=S(e,r))==null?void 0:M.set,a=P,i=!0,s=!1,d=()=>(s=!0,i&&(i=!1,y?a=B(P):a=P),a);n===void 0&&P!==void 0&&(t&&b&&Q(),n=d(),t&&t(n));var v;if(b)v=()=>{var l=e[r];return l===void 0?d():(i=!0,s=!1,l)};else{var h=K(()=>(f?C:te)(()=>e[r]));h.f|=W,v=()=>{var l=o(h);return l!==void 0&&(a=void 0),l===void 0?a:l}}if(!(_&Y))return v;if(t){var O=e.$$legacy;return function(l,R){return arguments.length>0?((!b||!R||O||u)&&t(R?v():l),l):v()}}var g=!1,x=!1,D=ie(n),E=K(()=>C(()=>{var l=v(),R=o(D);return g?(g=!1,x=!0,R):(x=!1,D.v=l)}));return f||(E.equals=X),function(l,R){if(arguments.length>0){const N=R?o(E):b&&I?p(l):l;return E.equals(N)||(g=!0,w(D,N),s&&a!==void 0&&(a=N),B(()=>o(E))),l}return o(E)}}function be(e){A===null&&se(),Z&&A.l!==null?de(A).m.push(e):ue(()=>{const r=B(e);if(typeof r=="function")return r})}function de(e){var r=e.l;return r.u??(r.u={a:[],b:[],m:[]})}export{p as a,oe as l,be as o,ce as p};
