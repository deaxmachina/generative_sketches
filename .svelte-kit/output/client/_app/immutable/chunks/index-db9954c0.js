function C(){}function G(t,n){for(const e in n)t[e]=n[e];return t}function L(t){return t()}function T(){return Object.create(null)}function p(t){t.forEach(L)}function J(t){return typeof t=="function"}function at(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function ft(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function K(t){return Object.keys(t).length===0}function Q(t,...n){if(t==null)return C;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function dt(t,n,e){t.$$.on_destroy.push(Q(n,e))}function _t(t,n,e,i){if(t){const r=O(t,n,e,i);return t[0](r)}}function O(t,n,e,i){return t[1]&&i?G(e.ctx.slice(),t[1](i(n))):e.ctx}function ht(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(n.dirty.length,r.length);for(let s=0;s<c;s+=1)l[s]=n.dirty[s]|r[s];return l}return n.dirty|r}return n.dirty}function mt(t,n,e,i,r,l){if(r){const c=O(n,e,i,l);t.p(c,r)}}function pt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let v=!1;function R(){v=!0}function U(){v=!1}function V(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&o.push(f)}n=o}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let o=0;o<n.length;o++){const u=n[o].claim_order,f=(r>0&&n[e[r]].claim_order<=u?r+1:V(1,r,y=>n[e[y]].claim_order,u))-1;i[o]=e[f]+1;const a=f+1;e[a]=o,r=Math.max(a,r)}const l=[],c=[];let s=n.length-1;for(let o=e[r]+1;o!=0;o=i[o-1]){for(l.push(n[o-1]);s>=o;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);l.reverse(),c.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<c.length;o++){for(;u<l.length&&c[o].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(c[o],f)}}function Y(t,n){t.appendChild(n)}function Z(t,n){if(v){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function yt(t,n,e){v&&!e?Z(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function P(t){t.parentNode.removeChild(t)}function gt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function W(t){return document.createElement(t)}function N(t){return document.createTextNode(t)}function bt(){return N(" ")}function xt(){return N("")}function z(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function wt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function tt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function I(t,n,e,i,r=!1){nt(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(n(s)){const o=e(s);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(n(s)){const o=e(s);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function et(t,n,e,i){return I(t,r=>r.nodeName===n,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];e[s.name]||l.push(s.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(n))}function $t(t,n,e){return et(t,n,e,W)}function it(t,n){return I(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>N(n),!0)}function vt(t){return it(t," ")}function Et(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function kt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}let b;function rt(){if(b===void 0){b=!1;try{typeof window!="undefined"&&window.parent&&window.parent.document}catch{b=!0}}return b}function At(t,n){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=W("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=rt();let l;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=z(window,"message",c=>{c.source===i.contentWindow&&n()})):(i.src="about:blank",i.onload=()=>{l=z(i.contentWindow,"resize",n)}),Y(t,i),()=>{(r||l&&i.contentWindow)&&l(),P(i)}}let m;function h(t){m=t}function E(){if(!m)throw new Error("Function called outside component initialization");return m}function jt(t){E().$$.on_mount.push(t)}function Ct(t){E().$$.after_update.push(t)}function Nt(t,n){return E().$$.context.set(t,n),n}function St(t){return E().$$.context.get(t)}const _=[],q=[],w=[],B=[],D=Promise.resolve();let A=!1;function F(){A||(A=!0,D.then(H))}function Mt(){return F(),D}function j(t){w.push(t)}const k=new Set;let x=0;function H(){const t=m;do{for(;x<_.length;){const n=_[x];x++,h(n),ot(n.$$)}for(h(null),_.length=0,x=0;q.length;)q.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];k.has(e)||(k.add(e),e())}w.length=0}while(_.length);for(;B.length;)B.pop()();A=!1,k.clear(),h(t)}function ot(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const $=new Set;let d;function Tt(){d={r:0,c:[],p:d}}function zt(){d.r||p(d.c),d=d.p}function ct(t,n){t&&t.i&&($.delete(t),t.i(n))}function qt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}const Bt=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Lt(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const c=t[l],s=n[l];if(s){for(const o in c)o in s||(i[o]=1);for(const o in s)r[o]||(e[o]=s[o],r[o]=1);t[l]=s}else for(const o in c)r[o]=1}for(const c in i)c in e||(e[c]=void 0);return e}function Ot(t){return typeof t=="object"&&t!==null?t:{}}function Pt(t){t&&t.c()}function Wt(t,n){t&&t.l(n)}function st(t,n,e,i){const{fragment:r,on_mount:l,on_destroy:c,after_update:s}=t.$$;r&&r.m(n,e),i||j(()=>{const o=l.map(L).filter(J);c?c.push(...o):p(o),t.$$.on_mount=[]}),s.forEach(j)}function lt(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(_.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function It(t,n,e,i,r,l,c,s=[-1]){const o=m;h(t);const u=t.$$={fragment:null,ctx:null,props:l,update:C,not_equal:r,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(o?o.$$.context:[])),callbacks:T(),dirty:s,skip_bound:!1,root:n.target||o.$$.root};c&&c(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,y,...S)=>{const M=S.length?S[0]:y;return u.ctx&&r(u.ctx[a],u.ctx[a]=M)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](M),f&&ut(t,a)),y}):[],u.update(),f=!0,p(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){R();const a=tt(n.target);u.fragment&&u.fragment.l(a),a.forEach(P)}else u.fragment&&u.fragment.c();n.intro&&ct(t.$$.fragment),st(t,n.target,n.anchor,n.customElement),U(),H()}h(o)}class Dt{$destroy(){lt(this,1),this.$destroy=C}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!K(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Ot as A,lt as B,G as C,Mt as D,C as E,_t as F,mt as G,pt as H,ht as I,Z as J,ft as K,z as L,p as M,gt as N,dt as O,St as P,j as Q,At as R,Dt as S,q as T,Bt as U,tt as a,wt as b,$t as c,P as d,W as e,kt as f,yt as g,it as h,It as i,Et as j,bt as k,xt as l,vt as m,Tt as n,qt as o,zt as p,ct as q,Nt as r,at as s,N as t,Ct as u,jt as v,Pt as w,Wt as x,st as y,Lt as z};
