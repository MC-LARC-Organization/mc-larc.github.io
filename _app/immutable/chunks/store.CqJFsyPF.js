import{aA as f,ab as d,au as w,w as E,J as S,U as L,aB as B,a3 as I,am as b,T as N,ah as V,C as x,B as D}from"./runtime.CBu_r9p9.js";function M(e){var r=w,u=E;f(null),d(null);try{return e()}finally{f(r),d(u)}}const O=new Set,W=new Set;function q(e,r,u,n){function a(t){if(n.capture||C.call(r,t),!t.cancelBubble)return M(()=>u.call(this,t))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?L(()=>{r.addEventListener(e,a,n)}):r.addEventListener(e,a,n),a}function J(e,r,u,n,a){var t={capture:n,passive:a},i=q(e,r,u,t);(r===document.body||r===window||r===document)&&S(()=>{r.removeEventListener(e,i,t)})}function R(e){for(var r=0;r<e.length;r++)O.add(e[r]);for(var u of W)u(e)}function C(e){var y;var r=this,u=r.ownerDocument,n=e.type,a=((y=e.composedPath)==null?void 0:y.call(e))||[],t=a[0]||e.target,i=0,v=e.__root;if(v){var p=a.indexOf(v);if(p!==-1&&(r===document||r===window)){e.__root=r;return}var h=a.indexOf(r);if(h===-1)return;p<=h&&(i=p)}if(t=a[i]||e.target,t!==r){B(e,"currentTarget",{configurable:!0,get(){return t||u}});var T=w,k=E;f(null),d(null);try{for(var o,g=[];t!==null;){var _=t.assignedSlot||t.parentNode||t.host||null;try{var s=t["__"+n];if(s!==void 0&&!t.disabled)if(I(s)){var[m,...A]=s;m.apply(t,[e,...A])}else s.call(t,e)}catch(c){o?g.push(c):o=c}if(e.cancelBubble||_===r||_===null)break;t=_}if(o){for(let c of g)queueMicrotask(()=>{throw c});throw o}}finally{e.__root=r,delete e.currentTarget,f(T),d(k)}}}function F(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const P=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function H(e){return P.includes(e)}const U={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function K(e){return e=e.toLowerCase(),U[e]??e}const j=["touchstart","touchmove"];function Q(e){return j.includes(e)}function z(e,r,u){if(e==null)return r(void 0),b;const n=N(()=>e.subscribe(r,u));return n.unsubscribe?()=>n.unsubscribe():n}let l=!1;function X(e,r,u){const n=u[r]??(u[r]={store:null,source:V(void 0),unsubscribe:b});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=b;else{var a=!0;n.unsubscribe=z(e,t=>{a?n.source.v=t:D(n.source,t)}),a=!1}return x(n.source)}function Y(){const e={};return S(()=>{for(var r in e)e[r].unsubscribe()}),e}function Z(e){var r=l;try{return l=!1,[e(),l]}finally{l=r}}export{O as a,X as b,Z as c,F as d,J as e,q as f,R as g,C as h,Q as i,H as j,K as n,W as r,Y as s};