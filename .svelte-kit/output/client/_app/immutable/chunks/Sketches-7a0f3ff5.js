import{S as ee,i as te,s as ne,Q as re,e as L,c as T,a as I,d as x,b as S,g as Q,J as b,R as _e,L as se,E as W,v as ye,U as xe,T as Pe,t as Y,k as oe,w as le,h as $,m as ie,x as ae,y as ce,q as X,o as J,B as ue,f as it,l as Ne,n as st,p as lt,O as at}from"./index-db9954c0.js";/* empty css               */import{s as ct}from"./stores-816cca7c.js";import{S as ze,P as pe,a as Le,D as Se,C as K,M as de,w as Be,h as Ee,W as be,c as Ce,e as Fe,B as De,A as ke,g as Me,R as ut,V as We,O as Re,d as ve,_ as Ae,x as Je,y as Te,z as Ve,F as dt,J as ft,I as ht,s as gt,t as mt,u as vt,v as wt,T as pt,H as qe,r as Ie,L as Oe,i as _t,E as yt,j as xt,k as Pt,G as zt,l as Ze,m as bt,U as Ct,n as Mt,o as Et,p as St}from"./RectAreaLightHelper-bfa925a7.js";var kt=`uniform float uTime;
uniform vec3 uColour1;
uniform vec3 uColour2;
varying vec2 vUv;

void main() {
  
  vec3 colourA = vec3(uColour1);
  vec3 colourB = vec3(uColour2);

  
  
  
  
  
  

  
  vec2 center = vUv - 0.5; 
  
  float dist = length(center); 
  vec3 colour = mix(colourA, colourB, vUv.y * sin(uTime) + vUv.x);
  
  
  float alpha = smoothstep(0.5, 0.2, dist); 
  

  gl_FragColor = vec4(colour, alpha);
}`,Lt=`uniform float uTime;
varying vec2 vUv;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;
  gl_Position = projectionPosition;

  vUv = uv;
}`;const{window:Qe}=xe;function Tt(r){let t,e,n,s,c;return re(r[13]),{c(){t=L("div"),e=L("canvas"),this.h()},l(o){t=T(o,"DIV",{class:!0,id:!0});var l=I(t);e=T(l,"CANVAS",{class:!0}),I(e).forEach(x),l.forEach(x),this.h()},h(){S(e,"class","svelte-n3luzd"),S(t,"class","wrapper svelte-n3luzd"),S(t,"id","shader-colours-wrapper"),re(()=>r[15].call(t))},m(o,l){Q(o,t,l),b(t,e),r[14](e),n=_e(t,r[15].bind(t)),s||(c=se(Qe,"resize",r[13]),s=!0)},p:W,i:W,o:W,d(o){o&&x(t),r[14](null),n(),s=!1,c()}}}function It(r,t,e){let n,s,c,o,{col1:l="#ff595e"}=t,{col2:m="#6a4c93"}=t,f,d,g,y,P,i,a,u,v,z,p;ye(()=>{const w=document.getElementById("shader-colours-wrapper"),{width:h}=w.getBoundingClientRect(),M=h,G=g>1e3?h*1:h*1.3,N=M/G;w.addEventListener("dblclick",()=>{document.fullscreenElement?document.exitFullscreen():o.requestFullscreen()}),e(6,y=new ze),P=new pe(4,4,50,50),e(7,i=new Le({vertexShader:Lt,fragmentShader:kt,side:Se,transparent:!0,uniforms:{uColour1:{value:new K(l)},uColour2:{value:new K(m)},uTime:{value:0},uAspectRatio:{value:N},uExplosion:{value:1}}})),a=new de(P,i),a.rotation.y=Math.PI/6,a.rotation.x=Math.PI/6,y.add(a),e(8,u=new Be(75,N,.1,100)),e(8,u.position.z=2.5,u),y.add(u),v=new Ee(u,o),v.enableDamping=!0,v.enabled=!1,e(9,z=new be({canvas:o})),z.setSize(M,G),z.setClearColor("#fff"),z.setPixelRatio(Math.min(window.devicePixelRatio,2));let D;p=new Ce;const H=()=>{const R=p.getElapsedTime();e(7,i.uniforms.uTime.value=R,i),e(7,i.uniforms.uExplosion.value=Math.sin(R-Math.PI/4)*.5+.5,i),v.update(),z.render(y,u),D=window.requestAnimationFrame(H)};return H(),()=>{window.cancelAnimationFrame(D),e(6,y=null),e(8,u=null),v=null}});function C(){e(1,g=Qe.innerWidth)}function _(w){Pe[w?"unshift":"push"](()=>{o=w,e(2,o)})}function E(){f=this.clientWidth,d=this.clientHeight,e(0,f),e(3,d)}return r.$$set=w=>{"col1"in w&&e(4,l=w.col1),"col2"in w&&e(5,m=w.col2)},r.$$.update=()=>{r.$$.dirty&1&&e(11,n=f),r.$$.dirty&3&&e(10,s=g>1e3?f*1:f*1.3),r.$$.dirty&3072&&e(12,c=n/s),r.$$.dirty&4352&&u&&c&&(e(8,u.aspect=c,u),u.updateProjectionMatrix()),r.$$.dirty&3904&&z&&y&&u&&n&&s&&(z.setSize(n,s),z.setPixelRatio(Math.min(2,window.devicePixelRatio)),z.render(y,u)),r.$$.dirty&176&&i&&(e(7,i.uniforms.uColour1.value=new K(l),i),e(7,i.uniforms.uColour2.value=new K(m),i))},[f,g,o,d,l,m,y,i,u,z,s,n,c,C,_,E]}class Dt extends ee{constructor(t){super(),te(this,t,It,Tt,ne,{col1:4,col2:5})}}function Rt(r){let t,e,n,s,c,o,l,m,f,d,g,y,P;return d=new Dt({props:{col1:r[0],col2:r[1]}}),{c(){t=L("div"),e=L("div"),n=L("h1"),s=Y("Coloured .01"),c=oe(),o=L("button"),l=Y("re-generate"),m=oe(),f=L("div"),le(d.$$.fragment),this.h()},l(i){t=T(i,"DIV",{class:!0});var a=I(t);e=T(a,"DIV",{class:!0});var u=I(e);n=T(u,"H1",{class:!0});var v=I(n);s=$(v,"Coloured .01"),v.forEach(x),c=ie(u),o=T(u,"BUTTON",{class:!0});var z=I(o);l=$(z,"re-generate"),z.forEach(x),u.forEach(x),m=ie(a),f=T(a,"DIV",{class:!0});var p=I(f);ae(d.$$.fragment,p),p.forEach(x),a.forEach(x),this.h()},h(){S(n,"class","svelte-air7lv"),S(o,"class","svelte-air7lv"),S(e,"class","left svelte-air7lv"),S(f,"class","right svelte-air7lv"),S(t,"class","layout svelte-air7lv")},m(i,a){Q(i,t,a),b(t,e),b(e,n),b(n,s),b(e,c),b(e,o),b(o,l),b(t,m),b(t,f),ce(d,f,null),g=!0,y||(P=se(o,"click",r[2]),y=!0)},p(i,[a]){const u={};a&1&&(u.col1=i[0]),a&2&&(u.col2=i[1]),d.$set(u)},i(i){g||(X(d.$$.fragment,i),g=!0)},o(i){J(d.$$.fragment,i),g=!1},d(i){i&&x(t),ue(d),y=!1,P()}}}function Ht(r,t,e){const n=["#ff595e","#dd2634","#9e164d","#31dd87","#13b79f"],s=["#6a4c93","#61189b","#6239d3","#334dcc","#ccaf36"];let c,o;return[c,o,()=>{e(0,c=n[Math.floor(Math.random()*n.length)]),e(1,o=s[Math.floor(Math.random()*s.length)])}]}class At extends ee{constructor(t){super(),te(this,t,Ht,Rt,ne,{})}}const{window:Ke}=xe;function Vt(r){let t,e,n,s,c;return re(r[18]),{c(){t=L("div"),e=L("canvas"),this.h()},l(o){t=T(o,"DIV",{class:!0,id:!0});var l=I(t);e=T(l,"CANVAS",{class:!0}),I(e).forEach(x),l.forEach(x),this.h()},h(){S(e,"class","svelte-1sx4h6r"),S(t,"class","wrapper svelte-1sx4h6r"),S(t,"id","rect-area-wrapper"),re(()=>r[20].call(t))},m(o,l){Q(o,t,l),b(t,e),r[19](e),n=_e(t,r[20].bind(t)),s||(c=se(Ke,"resize",r[18]),s=!0)},p:W,i:W,o:W,d(o){o&&x(t),r[19](null),n(),s=!1,c()}}}const Xe=5112063,Bt=200,fe=2;function Ft(r,t,e){let n,s,c,o,{noise2D:l}=t,{rectLightIntensity:m}=t,{rectLightWidth:f}=t,{rectLightHeight:d}=t,g,y,P,i,a,u,v,z=[],p,C,_,E,w,h,M,G;ye(()=>{const R=document.getElementById("rect-area-wrapper"),{width:j}=R.getBoundingClientRect(),F=j,O=F*1,B=F/O;R.addEventListener("dblclick",()=>{document.fullscreenElement?document.exitFullscreen():o.requestFullscreen()}),e(8,i=new ze),e(9,a=new Fe({color:new K("white"),side:Se})),u=new pe(13,13),v=new de(u,a),v.rotation.x=-Math.PI*.5,v.position.y=-.5,i.add(v),e(11,p=new De(1,1,1));for(let k=0;k<Bt;k++){const V=new de(p,a);V.position.set(l(k,k*2)*2,Math.max(0,l(k,k*3)*2),Math.max(0,l(k,k*5)));const U=l(k,k)*.4;V.scale.set(U,U,U),i.add(V),z.push(V)}C=new ke(16777215,.2),i.add(C),_=new Me(16777215,0),_.position.set(1,.25,0),i.add(_),e(12,E=new ut(Xe,m,f,d)),E.lookAt(new We(0,0,0)),e(12,E.rotation.x=Math.PI,E),i.add(E),e(13,w=new Re),e(13,w.left=-fe*B,w),e(13,w.right=fe*B,w),e(13,w.top=fe,w),e(13,w.bottom=-fe,w),e(13,w.near=-100,w),e(13,w.far=100,w),w.position.set(fe,fe,fe),e(13,w.position.x=2,w),w.updateProjectionMatrix(),h=new Ee(w,o),h.enableDamping=!0,h.enabled=!1,e(14,M=new be({canvas:o,antialias:!0})),M.setSize(F,O),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.setClearColor("white"),M.render(i,w),G=new Ce;let q;const A=()=>{const k=G.getElapsedTime();for(let V=0;V<z.length;V++){const U=z[V];U.position.z=Math.sin(k)*l(V,V)*.85}h.update(),M.render(i,w),q=window.requestAnimationFrame(A)};return A(),()=>{window.cancelAnimationFrame(q),e(8,i=null),e(13,w=null),h=null}});function N(){e(1,P=Ke.innerWidth)}function D(R){Pe[R?"unshift":"push"](()=>{o=R,e(2,o)})}function H(){g=this.clientWidth,y=this.clientHeight,e(0,g),e(3,y)}return r.$$set=R=>{"noise2D"in R&&e(4,l=R.noise2D),"rectLightIntensity"in R&&e(5,m=R.rectLightIntensity),"rectLightWidth"in R&&e(6,f=R.rectLightWidth),"rectLightHeight"in R&&e(7,d=R.rectLightHeight)},r.$$.update=()=>{if(r.$$.dirty&1&&e(16,n=g),r.$$.dirty&3&&e(15,s=P>1e3?g*1:g*1.2),r.$$.dirty&98304&&e(17,c=n/s),r.$$.dirty&139264&&w&&c&&(e(13,w.aspect=c,w),e(13,w.left=-fe*c,w),e(13,w.right=fe*c,w),w.updateProjectionMatrix()),r.$$.dirty&123136&&M&&i&&w&&n&&s&&(M.setSize(n,s),M.setPixelRatio(Math.min(2,window.devicePixelRatio)),M.render(i,w)),r.$$.dirty&4320&&E&&(e(12,E.color=new K(Xe),E),e(12,E.intensity=m,E),e(12,E.width=f,E),e(12,E.height=d,E)),r.$$.dirty&3600&&a){const R=[];z.forEach((j,F)=>{j.position.set(l(F,F*2)*2,Math.max(0,l(F,F*3)*2),Math.max(0,l(F,F*5)));const O=l(F,F)*.4;j.scale.set(O,O,O),R.push(j),e(10,z=R)})}},[g,P,o,y,l,m,f,d,i,a,z,p,E,w,M,s,n,c,N,D,H]}class Wt extends ee{constructor(t){super(),te(this,t,Ft,Vt,ne,{noise2D:4,rectLightIntensity:5,rectLightWidth:6,rectLightHeight:7})}}function qt(r){let t,e,n,s,c,o,l,m,f,d,g,y,P;return d=new Wt({props:{rectLightIntensity:r[0],rectLightWidth:r[1],rectLightHeight:r[2],noise2D:r[3]}}),{c(){t=L("div"),e=L("div"),n=L("h1"),s=Y("Light .01"),c=oe(),o=L("button"),l=Y("re-generate"),m=oe(),f=L("div"),le(d.$$.fragment),this.h()},l(i){t=T(i,"DIV",{class:!0});var a=I(t);e=T(a,"DIV",{class:!0});var u=I(e);n=T(u,"H1",{class:!0});var v=I(n);s=$(v,"Light .01"),v.forEach(x),c=ie(u),o=T(u,"BUTTON",{class:!0});var z=I(o);l=$(z,"re-generate"),z.forEach(x),u.forEach(x),m=ie(a),f=T(a,"DIV",{class:!0});var p=I(f);ae(d.$$.fragment,p),p.forEach(x),a.forEach(x),this.h()},h(){S(n,"class","svelte-air7lv"),S(o,"class","svelte-air7lv"),S(e,"class","left svelte-air7lv"),S(f,"class","right svelte-air7lv"),S(t,"class","layout svelte-air7lv")},m(i,a){Q(i,t,a),b(t,e),b(e,n),b(n,s),b(e,c),b(e,o),b(o,l),b(t,m),b(t,f),ce(d,f,null),g=!0,y||(P=se(o,"click",r[4]),y=!0)},p(i,[a]){const u={};a&1&&(u.rectLightIntensity=i[0]),a&2&&(u.rectLightWidth=i[1]),a&4&&(u.rectLightHeight=i[2]),a&8&&(u.noise2D=i[3]),d.$set(u)},i(i){g||(X(d.$$.fragment,i),g=!0)},o(i){J(d.$$.fragment,i),g=!1},d(i){i&&x(t),ue(d),y=!1,P()}}}function jt(r,t,e){let n=10,s=2,c=3,o=ve();return[n,s,c,o,()=>{e(0,n=Ae.random(1,10)),e(1,s=Ae.random(1,6)),e(2,c=Ae.random(1,6)),e(3,o=ve())}]}class Gt extends ee{constructor(t){super(),te(this,t,jt,qt,ne,{})}}var Ut=`uniform sampler2D uTexture;

varying float vElevation;

void main() {

    vec4 textureColor = texture2D(uTexture, vec2(0.0, vElevation * 10.0));

    
    

    
    gl_FragColor = textureColor;
}`,Nt=`vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec3 P){
  vec3 Pi0 = floor(P); 
  vec3 Pi1 = Pi0 + vec3(1.0); 
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

uniform float uElevation;
uniform float uHeightHill;
varying float vElevation;

float getElevation(vec3 _position) {
    float elevation = 0.0;

    
    elevation += cnoise(vec3(
        _position.xz * 0.9,
        0.0
    )) * uHeightHill; 

    
    elevation += cnoise(vec3(
        (_position.xz + 123.0) * 1.0,
        0.0
    )) * 0.2;

    elevation *= uElevation;

    return elevation;
}

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0); 
    
    float elevation = getElevation(modelPosition.xyz);

    modelPosition.y += elevation;

    vec4 viewPosition = viewMatrix * modelPosition; 
    vec4 projectionPosition = projectionMatrix * viewPosition; 
    gl_Position = projectionPosition;

    
    vElevation = elevation;
}`;const{window:Ye}=xe;function Ot(r){let t,e,n,s,c;return re(r[16]),{c(){t=L("div"),e=L("canvas"),this.h()},l(o){t=T(o,"DIV",{class:!0,id:!0});var l=I(t);e=T(l,"CANVAS",{class:!0}),I(e).forEach(x),l.forEach(x),this.h()},h(){S(e,"class","svelte-17hpy8e"),S(t,"class","wrapper svelte-17hpy8e"),S(t,"id","shader-colours-wrapper"),re(()=>r[18].call(t))},m(o,l){Q(o,t,l),b(t,e),r[17](e),n=_e(t,r[18].bind(t)),s||(c=se(Ye,"resize",r[16]),s=!0)},p:W,i:W,o:W,d(o){o&&x(t),r[17](null),n(),s=!1,c()}}}const Zt="#011627";function Xt(r,t,e){let n,s,c,o,{colHills:l="#fff"}=t,{colSun:m="#9e164d"}=t,{hillValue:f=.5}=t,d,g,y,P,i,a,u,v,z,p,C,_,E,w,h={};ye(()=>{const D=document.getElementById("shader-colours-wrapper"),{width:H}=D.getBoundingClientRect(),R=H,j=y>1e3?H*1:H*1.3,F=R/j;D.addEventListener("dblclick",()=>{document.fullscreenElement?document.exitFullscreen():o.requestFullscreen()}),e(12,h.linesCount=10,h),e(12,h.width=32,h),e(12,h.height=128,h),e(12,h.canvas=document.createElement("canvas"),h),e(12,h.canvas.width=h.width,h),e(12,h.canvas.height=h.height,h),e(12,h.canvas.style.position="fixed",h),e(12,h.canvas.style.top=0,h),e(12,h.canvas.style.left=0,h),e(12,h.canvas.style.zIndex=1,h),e(12,h.context=h.canvas.getContext("2d"),h),e(12,h.instance=new Je(h.canvas),h),e(12,h.instance.wrapS=Te,h),e(12,h.instance.wrapT=Te,h),h.context.clearRect(0,0,h.width,h.height),e(12,h.context.globalAlpha=1,h),e(12,h.context.fillStyle=l,h),h.context.fillRect(0,0,h.width,Math.round(h.height*.08));const O=h.linesCount-1;for(let U=0;U<O;U++)e(12,h.context.globalAlpha=.5,h),h.context.fillRect(0,Math.round(h.height/(O+1))*(U+1),h.width,Math.round(h.height*.01));e(7,P=new ze),i=new pe(3,3,1e3,1e3),i.rotateX(-Math.PI*.5),e(8,a=new Le({vertexShader:Nt,fragmentShader:Ut,side:Se,transparent:!0,blending:Ve,uniforms:{uTime:{value:0},uTexture:{value:h.instance},uElevation:{value:1},uHeightHill:{value:.4}}})),u=new de(i,a),u.scale.set(10,10,10),u.rotation.z=Math.PI,u.rotation.x=Math.PI*.05,u.position.y-=2,P.add(u);const B=new ke(0,.1);P.add(B);const q=new Me(16777215,.6);q.position.set(1,.25,0),P.add(q);const A=new Me(16777215,.1);A.position.set(-1,-.6,0),P.add(A),v=new dt(.5,0),e(9,z=new ft({color:new K(m)})),p=new de(v,z),p.position.y+=.9,p.rotation.x=Math.PI*.6,P.add(p),e(10,C=new Be(75,F,.1,100)),e(10,C.position.z=2.5,C),P.add(C),_=new Ee(C,o),_.enableDamping=!0,e(11,E=new be({canvas:o})),E.setSize(R,j),E.setClearColor(Zt),E.setPixelRatio(Math.min(window.devicePixelRatio,2));let k;w=new Ce;const V=()=>{const U=w.getElapsedTime();e(8,a.uniforms.uTime.value=U,a),e(8,a.uniforms.uElevation.value=1-Math.sin(U)*.3,a),p.rotation.z=U*.2,_.update(),E.render(P,C),k=window.requestAnimationFrame(V)};return V(),()=>{window.cancelAnimationFrame(k),e(7,P=null),e(10,C=null),_=null}});function M(){e(1,y=Ye.innerWidth)}function G(D){Pe[D?"unshift":"push"](()=>{o=D,e(2,o)})}function N(){d=this.clientWidth,g=this.clientHeight,e(0,d),e(3,g)}return r.$$set=D=>{"colHills"in D&&e(4,l=D.colHills),"colSun"in D&&e(5,m=D.colSun),"hillValue"in D&&e(6,f=D.hillValue)},r.$$.update=()=>{r.$$.dirty&1&&e(14,n=d),r.$$.dirty&3&&e(13,s=y>1e3?d*.85:d*1.3),r.$$.dirty&24576&&e(15,c=n/s),r.$$.dirty&33792&&C&&c&&(e(10,C.aspect=c,C),C.updateProjectionMatrix()),r.$$.dirty&27776&&E&&P&&C&&n&&s&&(E.setSize(n,s),E.setPixelRatio(Math.min(2,window.devicePixelRatio)),E.render(P,C)),r.$$.dirty&4416&&a&&h&&e(8,a.uniforms.uHeightHill.value=f,a),r.$$.dirty&544&&z&&z.color.set(new K(m))},[d,y,o,g,l,m,f,P,a,z,C,E,h,s,n,c,M,G,N]}class Jt extends ee{constructor(t){super(),te(this,t,Xt,Ot,ne,{colHills:4,colSun:5,hillValue:6})}}function Qt(r){let t,e,n,s,c,o,l,m,f,d,g,y,P;return d=new Jt({props:{colHills:r[0],colSun:r[1],hillValue:r[2]}}),{c(){t=L("div"),e=L("div"),n=L("h1"),s=Y("Mercurial .01"),c=oe(),o=L("button"),l=Y("re-generate"),m=oe(),f=L("div"),le(d.$$.fragment),this.h()},l(i){t=T(i,"DIV",{class:!0});var a=I(t);e=T(a,"DIV",{class:!0});var u=I(e);n=T(u,"H1",{class:!0});var v=I(n);s=$(v,"Mercurial .01"),v.forEach(x),c=ie(u),o=T(u,"BUTTON",{class:!0});var z=I(o);l=$(z,"re-generate"),z.forEach(x),u.forEach(x),m=ie(a),f=T(a,"DIV",{class:!0});var p=I(f);ae(d.$$.fragment,p),p.forEach(x),a.forEach(x),this.h()},h(){S(n,"class","svelte-1627w20"),S(o,"class","svelte-1627w20"),S(e,"class","left svelte-1627w20"),S(f,"class","right svelte-1627w20"),S(t,"class","layout svelte-1627w20")},m(i,a){Q(i,t,a),b(t,e),b(e,n),b(n,s),b(e,c),b(e,o),b(o,l),b(t,m),b(t,f),ce(d,f,null),g=!0,y||(P=se(o,"click",r[3]),y=!0)},p(i,[a]){const u={};a&1&&(u.colHills=i[0]),a&2&&(u.colSun=i[1]),a&4&&(u.hillValue=i[2]),d.$set(u)},i(i){g||(X(d.$$.fragment,i),g=!0)},o(i){J(d.$$.fragment,i),g=!1},d(i){i&&x(t),ue(d),y=!1,P()}}}function Kt(r,t,e){const n=["#9e164d","#f71735","#ff9f1c","#61189b","#6239d3","#ffffff","#a53860"];let s,c,o;return[s,c,o,()=>{e(0,s=n[Math.floor(Math.random()*n.length)]),e(1,c=n[Math.floor(Math.random()*n.length)]),e(2,o=Math.random())}]}class Yt extends ee{constructor(t){super(),te(this,t,Kt,Qt,ne,{})}}var $t=`uniform sampler2D uTexture;

varying float vElevation;

void main() {

    vec4 textureColor = texture2D(uTexture, vec2(0.0, vElevation * 10.0));

    
    

    
    gl_FragColor = textureColor;
}`,en=`vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec3 P){
  vec3 Pi0 = floor(P); 
  vec3 Pi1 = Pi0 + vec3(1.0); 
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

uniform float uElevation;
uniform float uHeightHill;
varying float vElevation;

float getElevation(vec3 _position) {
    float elevation = 0.0;

    
    elevation += cnoise(vec3(
        _position.xz * 0.9,
        0.0
    )) * uHeightHill; 

    
    elevation += cnoise(vec3(
        (_position.xz + 123.0) * 1.0,
        0.0
    )) * 0.2;

    elevation *= uElevation;

    return elevation;
}

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0); 
    
    float elevation = getElevation(modelPosition.xyz);

    modelPosition.y += elevation;

    vec4 viewPosition = viewMatrix * modelPosition; 
    vec4 projectionPosition = projectionMatrix * viewPosition; 
    gl_Position = projectionPosition;

    
    vElevation = elevation;
}`,tn=`uniform float uTime;
uniform vec3 uColour1;
uniform vec3 uColour2;
varying vec2 vUv;

void main() {
  vec3 colourA = vec3(uColour1);
  vec3 colourB = vec3(uColour2);

  
  vec2 center = vUv - 0.5; 
  float dist = length(center); 
  vec3 colour = mix(colourA, colourB, vUv.x * sin(uTime));
  float alpha = smoothstep(0.55, 0.2, dist); 

  gl_FragColor = vec4(colour, alpha);
}`,nn=`uniform float uTime;
varying vec2 vUv;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;
  gl_Position = projectionPosition;

  vUv = uv;
}`;const{window:$e}=xe;function rn(r){let t,e,n,s,c;return re(r[15]),{c(){t=L("div"),e=L("canvas"),this.h()},l(o){t=T(o,"DIV",{class:!0,id:!0});var l=I(t);e=T(l,"CANVAS",{class:!0}),I(e).forEach(x),l.forEach(x),this.h()},h(){S(e,"class","svelte-17hpy8e"),S(t,"class","wrapper svelte-17hpy8e"),S(t,"id","shader-colours-wrapper"),re(()=>r[17].call(t))},m(o,l){Q(o,t,l),b(t,e),r[16](e),n=_e(t,r[17].bind(t)),s||(c=se($e,"resize",r[15]),s=!0)},p:W,i:W,o:W,d(o){o&&x(t),r[16](null),n(),s=!1,c()}}}const on="#000";function sn(r,t,e){let n,s,c,o,{colHills:l="#fff"}=t,{hillValue:m=.5}=t,{col1:f="#3d5a80"}=t,{col2:d="#ffffff"}=t,g,y,P,i,a,u,v,z,p,C,_,E,w,h,M={};ye(()=>{const H=document.getElementById("shader-colours-wrapper"),{width:R}=H.getBoundingClientRect(),j=R,F=P>1e3?R*1:R*1.3,O=j/F;H.addEventListener("dblclick",()=>{document.fullscreenElement?document.exitFullscreen():o.requestFullscreen()}),M.linesCount=10,M.width=32,M.height=128,M.canvas=document.createElement("canvas"),M.canvas.width=M.width,M.canvas.height=M.height,M.canvas.style.position="fixed",M.canvas.style.top=0,M.canvas.style.left=0,M.canvas.style.zIndex=1,M.context=M.canvas.getContext("2d"),M.instance=new Je(M.canvas),M.instance.wrapS=Te,M.instance.wrapT=Te,M.context.clearRect(0,0,M.width,M.height),M.context.globalAlpha=1,M.context.fillStyle=l,M.context.fillRect(0,0,M.width,Math.round(M.height*.08));const B=M.linesCount-1;for(let k=0;k<B;k++)M.context.globalAlpha=.5,M.context.fillRect(0,Math.round(M.height/(B+1))*(k+1),M.width,Math.round(M.height*.01));e(8,i=new ze),a=new pe(3,3,1e3,1e3),a.rotateX(-Math.PI*.7),u=new Le({vertexShader:en,fragmentShader:$t,side:Se,transparent:!0,blending:Ve,uniforms:{uTime:{value:0},uTexture:{value:M.instance},uElevation:{value:1},uHeightHill:{value:.4}}}),v=new de(a,u),v.scale.set(10,10,10),v.rotation.z=Math.PI,v.rotation.x=Math.PI*.05,v.position.y-=2,i.add(v),z=new pe(5,5,40,40),z.rotateX(Math.PI*.7),e(9,p=new Le({vertexShader:nn,fragmentShader:tn,side:Se,transparent:!0,blending:Ve,uniforms:{uColour1:{value:new K(f)},uColour2:{value:new K(d)},uTime:{value:0}}})),C=new de(z,p),i.add(C),e(10,_=new Be(75,O,.1,100)),e(10,_.position.z=2.5,_),e(10,_.position.y=2.5,_),i.add(_),E=new Ee(_,o),E.enableDamping=!0,E.enabled=!1,e(11,w=new be({canvas:o})),w.setSize(j,F),w.setClearColor(on),w.setPixelRatio(Math.min(window.devicePixelRatio,2));let q;h=new Ce;const A=()=>{const k=h.getElapsedTime();u.uniforms.uTime.value=k,u.uniforms.uElevation.value=1-Math.sin(k)*.3,e(9,p.uniforms.uTime.value=k,p),E.update(),w.render(i,_),q=window.requestAnimationFrame(A)};return A(),()=>{window.cancelAnimationFrame(q),e(8,i=null),e(10,_=null),E=null}});function G(){e(1,P=$e.innerWidth)}function N(H){Pe[H?"unshift":"push"](()=>{o=H,e(2,o)})}function D(){g=this.clientWidth,y=this.clientHeight,e(0,g),e(3,y)}return r.$$set=H=>{"colHills"in H&&e(4,l=H.colHills),"hillValue"in H&&e(5,m=H.hillValue),"col1"in H&&e(6,f=H.col1),"col2"in H&&e(7,d=H.col2)},r.$$.update=()=>{r.$$.dirty&1&&e(13,n=g),r.$$.dirty&3&&e(12,s=P>1e3?g*.95:g*1.3),r.$$.dirty&12288&&e(14,c=n/s),r.$$.dirty&17408&&_&&c&&(e(10,_.aspect=c,_),_.updateProjectionMatrix()),r.$$.dirty&15616&&w&&i&&_&&n&&s&&(w.setSize(n,s),w.setPixelRatio(Math.min(2,window.devicePixelRatio)),w.render(i,_)),r.$$.dirty&576&&p&&e(9,p.uniforms.uColour1.value=new K(f),p)},[g,P,o,y,l,m,f,d,i,p,_,w,s,n,c,G,N,D]}class ln extends ee{constructor(t){super(),te(this,t,sn,rn,ne,{colHills:4,hillValue:5,col1:6,col2:7})}}function an(r){let t,e,n,s,c,o,l,m,f,d,g,y,P;return d=new ln({props:{col1:r[0],hillValue:r[1]}}),{c(){t=L("div"),e=L("div"),n=L("h1"),s=Y("Mercurial .02"),c=oe(),o=L("button"),l=Y("re-generate"),m=oe(),f=L("div"),le(d.$$.fragment),this.h()},l(i){t=T(i,"DIV",{class:!0});var a=I(t);e=T(a,"DIV",{class:!0});var u=I(e);n=T(u,"H1",{class:!0});var v=I(n);s=$(v,"Mercurial .02"),v.forEach(x),c=ie(u),o=T(u,"BUTTON",{class:!0});var z=I(o);l=$(z,"re-generate"),z.forEach(x),u.forEach(x),m=ie(a),f=T(a,"DIV",{class:!0});var p=I(f);ae(d.$$.fragment,p),p.forEach(x),a.forEach(x),this.h()},h(){S(n,"class","svelte-air7lv"),S(o,"class","svelte-air7lv"),S(e,"class","left svelte-air7lv"),S(f,"class","right svelte-air7lv"),S(t,"class","layout svelte-air7lv")},m(i,a){Q(i,t,a),b(t,e),b(e,n),b(n,s),b(e,c),b(e,o),b(o,l),b(t,m),b(t,f),ce(d,f,null),g=!0,y||(P=se(o,"click",r[2]),y=!0)},p(i,[a]){const u={};a&1&&(u.col1=i[0]),a&2&&(u.hillValue=i[1]),d.$set(u)},i(i){g||(X(d.$$.fragment,i),g=!0)},o(i){J(d.$$.fragment,i),g=!1},d(i){i&&x(t),ue(d),y=!1,P()}}}function cn(r,t,e){const n=["#9e164d","#ffffff","#a53860","#565264","#706677","#a6808c","#d6cfcb","#07beb8","#16697a","#3d5a80"];let s,c;return[s,c,()=>{e(0,s=n[Math.floor(Math.random()*n.length)]),e(1,c=Math.random())}]}class un extends ee{constructor(t){super(),te(this,t,cn,an,ne,{})}}const{window:et}=xe;function dn(r){let t,e,n,s,c;return re(r[16]),{c(){t=L("div"),e=L("canvas"),this.h()},l(o){t=T(o,"DIV",{class:!0,id:!0});var l=I(t);e=T(l,"CANVAS",{class:!0}),I(e).forEach(x),l.forEach(x),this.h()},h(){S(e,"class","svelte-1j2hdhd"),S(t,"class","wrapper svelte-1j2hdhd"),S(t,"id","simple-cube-wrapper"),re(()=>r[18].call(t))},m(o,l){Q(o,t,l),b(t,e),r[17](e),n=_e(t,r[18].bind(t)),s||(c=se(et,"resize",r[16]),s=!0)},p:W,i:W,o:W,d(o){o&&x(t),r[17](null),n(),s=!1,c()}}}const he=2;function fn(r,t,e){let n,s,c,{backgroundColour:o}=t,{colour:l="#ffff"}=t,{geometryType:m}=t,f,d,g,y,P,i,a,u=[],v,z,p,C,_,E,w,h={};ye(()=>{e(12,h={IcosahedronGeometry:new ht(.2,10),ConeGeometry:new gt(.2,.8,40,30),BoxGeometry:new De(.5,.5,.5,30,30,30),CircleGeometry:new mt(.2,32)});const D=document.getElementById("simple-cube-wrapper"),{width:H}=D.getBoundingClientRect(),R=H,j=y>1e3?H*.8:H*1,F=R/j;D.addEventListener("dblclick",()=>{document.fullscreenElement?document.exitFullscreen():f.requestFullscreen()}),e(7,P=new ze),e(8,i=new vt({color:new K(l),size:.02,sizeAttenuation:!0,transparent:!0,depthWrite:!1})),e(9,a=h[m]);const O=1e3;for(let A=0;A<O;A++){const k=new wt(a,i),V=Math.random();k.scale.set(V,V,V),k.position.set(Math.random()*7,Math.random()*7,Math.random()*10),u.push(k),P.add(k)}e(10,v=new Re),e(10,v.left=-he*F,v),e(10,v.right=he*F,v),e(10,v.top=he,v),e(10,v.bottom=-he,v),e(10,v.near=-100,v),e(10,v.far=100,v),v.position.set(he,he,he),e(10,v.position.x=2,v),z=new pt(v,f),z.enableDamping=!0,z.enabled=!1,_=new ke(16777215,.2),P.add(_),E=new Me(16777215,.8),E.position.set(0,0,1),P.add(E),w=new qe("#ff5252","#0c0366",.6),w.position.set(0,-1,0),P.add(w),e(11,p=new be({canvas:f,antialias:!0})),p.setSize(R,j),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.setClearColor(o),p.render(P,v),C=new Ce;let B;const q=()=>{const A=C.getElapsedTime();u.forEach((k,V)=>k.rotation.y=V%2===0?Math.sin(A):-Math.sin(A)),z.update(),p.render(P,v),B=window.requestAnimationFrame(q)};return q(),()=>{console.log("The experiment was destroyed"),window.cancelAnimationFrame(B),e(7,P=null),e(10,v=null),z=null}});function M(){e(1,y=et.innerWidth)}function G(D){Pe[D?"unshift":"push"](()=>{f=D,e(2,f)})}function N(){d=this.clientWidth,g=this.clientHeight,e(0,d),e(3,g)}return r.$$set=D=>{"backgroundColour"in D&&e(4,o=D.backgroundColour),"colour"in D&&e(5,l=D.colour),"geometryType"in D&&e(6,m=D.geometryType)},r.$$.update=()=>{r.$$.dirty&1&&e(14,n=d),r.$$.dirty&3&&e(13,s=y>1e3?d*.8:d*1),r.$$.dirty&24576&&e(15,c=n/s),r.$$.dirty&33792&&c&&v&&(e(10,v.aspect=c,v),e(10,v.left=-he*c,v),e(10,v.right=he*c,v),v.updateProjectionMatrix()),r.$$.dirty&27776&&p&&P&&v&&n&&s&&(p.setSize(n,s),p.setPixelRatio(Math.min(2,window.devicePixelRatio)),p.render(P,v)),r.$$.dirty&288&&i&&e(8,i.color=new K(l),i),r.$$.dirty&4672&&a&&u&&(e(9,a=h[m]),u.forEach(D=>D.geometry=a)),r.$$.dirty&3216&&p&&(p.setClearColor(o),p.render(P,v))},[d,y,f,g,o,l,m,P,i,a,v,p,h,s,n,c,M,G,N]}class hn extends ee{constructor(t){super(),te(this,t,fn,dn,ne,{backgroundColour:4,colour:5,geometryType:6})}}function gn(r){let t,e,n,s,c,o,l,m,f,d,g,y,P;return d=new hn({props:{colour:mn,geometryType:r[1],backgroundColour:r[0]}}),{c(){t=L("div"),e=L("div"),n=L("h1"),s=Y("Perspective .01"),c=oe(),o=L("button"),l=Y("re-generate"),m=oe(),f=L("div"),le(d.$$.fragment),this.h()},l(i){t=T(i,"DIV",{class:!0});var a=I(t);e=T(a,"DIV",{class:!0});var u=I(e);n=T(u,"H1",{class:!0});var v=I(n);s=$(v,"Perspective .01"),v.forEach(x),c=ie(u),o=T(u,"BUTTON",{class:!0});var z=I(o);l=$(z,"re-generate"),z.forEach(x),u.forEach(x),m=ie(a),f=T(a,"DIV",{class:!0});var p=I(f);ae(d.$$.fragment,p),p.forEach(x),a.forEach(x),this.h()},h(){S(n,"class","svelte-xuaakt"),S(o,"class","svelte-xuaakt"),S(e,"class","left svelte-xuaakt"),S(f,"class","right svelte-xuaakt"),it(f,"max-width","950px",!1),S(t,"class","layout svelte-xuaakt")},m(i,a){Q(i,t,a),b(t,e),b(e,n),b(n,s),b(e,c),b(e,o),b(o,l),b(t,m),b(t,f),ce(d,f,null),g=!0,y||(P=se(o,"click",r[4]),y=!0)},p(i,[a]){const u={};a&2&&(u.geometryType=i[1]),a&1&&(u.backgroundColour=i[0]),d.$set(u)},i(i){g||(X(d.$$.fragment,i),g=!0)},o(i){J(d.$$.fragment,i),g=!1},d(i){i&&x(t),ue(d),y=!1,P()}}}let mn="#ffff";function vn(r,t,e){let n="#5ca4a9",s="BoxGeometry";const c=["IcosahedronGeometry","ConeGeometry","BoxGeometry"],o=["#ff006e","rgb(100, 70, 200)","#b5838d","#6d6875","#5ca4a9"];return[n,s,c,o,()=>{e(1,s=c[Math.floor(Math.random()*c.length)]),e(0,n=o[Math.floor(Math.random()*o.length)])}]}class wn extends ee{constructor(t){super(),te(this,t,vn,gn,ne,{})}}const{window:tt}=xe;function pn(r){let t,e,n,s,c;return re(r[14]),{c(){t=L("div"),e=L("canvas"),this.h()},l(o){t=T(o,"DIV",{class:!0,id:!0});var l=I(t);e=T(l,"CANVAS",{class:!0}),I(e).forEach(x),l.forEach(x),this.h()},h(){S(e,"class","svelte-qdett3"),S(t,"class","wrapper svelte-qdett3"),S(t,"id","hemi-light-wrapper"),re(()=>r[16].call(t))},m(o,l){Q(o,t,l),b(t,e),r[15](e),n=_e(t,r[16].bind(t)),s||(c=se(tt,"resize",r[14]),s=!0)},p:W,i:W,o:W,d(o){o&&x(t),r[15](null),n(),s=!1,c()}}}const _n=100,ge=1.7;function yn(r,t,e){let n,s,c,o,{noise2D:l=ve()}=t,m,f,d,g,y,P,i,a,u=[],v,z,p,C,_,E,w,h;ye(()=>{const D=document.getElementById("hemi-light-wrapper"),{width:H}=D.getBoundingClientRect(),R=H,j=d>1e3?H*.8:H*1.3,F=R/j;D.addEventListener("dblclick",()=>{document.fullscreenElement?document.exitFullscreen():o.requestFullscreen()}),e(5,g=new ze),e(6,y=new Fe({color:new K("#fff"),roughness:.8,metalness:0})),P=new pe(13,13),i=new de(P,y),i.rotation.x=-Math.PI*.5,i.position.y=-1.2,g.add(i),e(7,a=new De(1,1,1));for(let k=0;k<_n;k++){const V=new de(a,y);V.position.set(l(k,k*2),l(k,k*3),l(k,k*5)),V.scale.set(l(k,k*Math.random()),l(k,k*Math.random()),l(k,k*Math.random())),g.add(V),u.push(V)}v=new ke(16777215,.1),g.add(v),z=new Me(16777215,.8),z.position.set(1,.25,0),g.add(z),p=new Ie(16748544,.8,3),p.position.set(1,-.4,1),g.add(p),new Ie(16711680,.4,3).position.set(0,1,2),C=new qe("#ff5252","#0c0366",.6),C.position.set(0,-1,0),g.add(C),e(9,_=new Re),e(9,_.left=-ge*F,_),e(9,_.right=ge*F,_),e(9,_.top=ge,_),e(9,_.bottom=-ge,_),e(9,_.near=-100,_),e(9,_.far=100,_),_.position.set(ge,ge,ge),_.lookAt(new We),_.updateProjectionMatrix(),E=new Ee(_,o),E.enableDamping=!0,E.enabled=!1,e(10,w=new be({canvas:o,antialias:!0})),w.setSize(R,j),w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.setClearColor("#fff",1),h=new Ce;let B=0,q;const A=()=>{B=h.getElapsedTime();const V=1.2,U=1;p.position.z=Math.cos(B*U)*V,p.position.x=Math.sin(B*U)*V,E.update(),w.render(g,_),q=window.requestAnimationFrame(A)};return A(),()=>{window.cancelAnimationFrame(q),e(5,g=null),e(9,_=null),E=null}});function M(){e(1,d=tt.innerWidth)}function G(D){Pe[D?"unshift":"push"](()=>{o=D,e(2,o)})}function N(){m=this.clientWidth,f=this.clientHeight,e(0,m),e(3,f)}return r.$$set=D=>{"noise2D"in D&&e(4,l=D.noise2D)},r.$$.update=()=>{if(r.$$.dirty&1&&e(12,n=m),r.$$.dirty&3&&e(11,s=d>1e3?m*.8:m*1.3),r.$$.dirty&6144&&e(13,c=n/s),r.$$.dirty&8704&&_&&c&&(e(9,_.aspect=c,_),e(9,_.left=-ge*c,_),e(9,_.right=ge*c,_),_.updateProjectionMatrix()),r.$$.dirty&7712&&w&&g&&_&&n&&s&&(w.setSize(n,s),w.setPixelRatio(Math.min(2,window.devicePixelRatio)),w.render(g,_)),r.$$.dirty&464&&y){const D=[];u.forEach((H,R)=>{H.position.set(l(R,R*2),l(R,R*3),l(R,R*5)),H.scale.set(l(R,R*Math.random()),l(R,R*Math.random()),l(R,R*Math.random())),D.push(H),e(8,u=D)})}},[m,d,o,f,l,g,y,a,u,_,w,s,n,c,M,G,N]}class xn extends ee{constructor(t){super(),te(this,t,yn,pn,ne,{noise2D:4})}}function Pn(r){let t,e,n,s,c,o,l,m,f,d,g,y,P;return d=new xn({props:{noise2D:r[0]}}),{c(){t=L("div"),e=L("div"),n=L("h1"),s=Y("Structured .01"),c=oe(),o=L("button"),l=Y("re-generate"),m=oe(),f=L("div"),le(d.$$.fragment),this.h()},l(i){t=T(i,"DIV",{class:!0});var a=I(t);e=T(a,"DIV",{class:!0});var u=I(e);n=T(u,"H1",{class:!0});var v=I(n);s=$(v,"Structured .01"),v.forEach(x),c=ie(u),o=T(u,"BUTTON",{class:!0});var z=I(o);l=$(z,"re-generate"),z.forEach(x),u.forEach(x),m=ie(a),f=T(a,"DIV",{class:!0});var p=I(f);ae(d.$$.fragment,p),p.forEach(x),a.forEach(x),this.h()},h(){S(n,"class","svelte-1627w20"),S(o,"class","svelte-1627w20"),S(e,"class","left svelte-1627w20"),S(f,"class","right svelte-1627w20"),S(t,"class","layout svelte-1627w20")},m(i,a){Q(i,t,a),b(t,e),b(e,n),b(n,s),b(e,c),b(e,o),b(o,l),b(t,m),b(t,f),ce(d,f,null),g=!0,y||(P=se(o,"click",r[1]),y=!0)},p(i,[a]){const u={};a&1&&(u.noise2D=i[0]),d.$set(u)},i(i){g||(X(d.$$.fragment,i),g=!0)},o(i){J(d.$$.fragment,i),g=!1},d(i){i&&x(t),ue(d),y=!1,P()}}}function zn(r,t,e){let n=ve();return[n,()=>{e(0,n=ve())}]}class bn extends ee{constructor(t){super(),te(this,t,zn,Pn,ne,{})}}const{window:nt}=xe;function Cn(r){let t,e,n,s,c;return re(r[15]),{c(){t=L("div"),e=L("canvas"),this.h()},l(o){t=T(o,"DIV",{class:!0,id:!0});var l=I(t);e=T(l,"CANVAS",{class:!0}),I(e).forEach(x),l.forEach(x),this.h()},h(){S(e,"class","svelte-qdett3"),S(t,"class","wrapper svelte-qdett3"),S(t,"id","hemi-light-wrapper"),re(()=>r[17].call(t))},m(o,l){Q(o,t,l),b(t,e),r[16](e),n=_e(t,r[17].bind(t)),s||(c=se(nt,"resize",r[15]),s=!0)},p:W,i:W,o:W,d(o){o&&x(t),r[16](null),n(),s=!1,c()}}}const Mn=200,me=1.4;function En(r,t,e){let n,s,c,o,{noise2D:l=ve()}=t,m,f,d,g,y,P,i,a,u=[],v,z,p,C,_,E,w,h,M,G,N,D,H,R;ye(()=>{const B=document.getElementById("hemi-light-wrapper"),{width:q}=B.getBoundingClientRect(),A=q,k=d>1e3?q*.9:q*1,V=A/k;B.addEventListener("dblclick",()=>{document.fullscreenElement?document.exitFullscreen():o.requestFullscreen()}),e(5,g=new ze),e(6,y=new Fe({color:new K("#fff"),roughness:1,metalness:.1})),P=new pe(13,13),i=new de(P,y),i.rotation.x=-Math.PI*.5,i.position.y=-1.2,g.add(i),e(7,a=new De(1,1,1));for(let Z=0;Z<Mn;Z++){const we=new de(a,y);we.position.set(l(Z,Z*2),l(Z,Z*3),l(Z,Z*5)),we.scale.set(l(Z,Z*Math.random()),l(Z,Z*Math.random()),l(Z,Z*Math.random())),g.add(we),u.push(we)}new ke(16777215,.1),v=new Me("#175676",.8),v.position.set(1,.25,0),g.add(v),z=new Ie("#252422",.8,3),z.position.set(1,-.4,1),g.add(z),new Ie("#7b1e7a",.4,3).position.set(0,1,2),p=new qe("#3a86ff","#ff006e",.9),p.position.set(.6,-1,.2),g.add(p),e(9,C=new Re),e(9,C.left=-me*V,C),e(9,C.right=me*V,C),e(9,C.top=me,C),e(9,C.bottom=-me,C),e(9,C.near=-100,C),e(9,C.far=100,C),C.position.set(me,me,me),C.lookAt(new We),C.updateProjectionMatrix(),_=new Ee(C,o),_.enableDamping=!0,_.enabled=!1,e(10,E=new be({canvas:o,antialias:!0})),E.setSize(A,k),E.setPixelRatio(Math.min(window.devicePixelRatio,2)),E.setClearColor("#fff",1);const rt=St,ot=new rt(600,800,{minFilter:Oe,magFilter:Oe,format:_t});e(11,h=new yt(E,ot)),h.setSize(A,k),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),M=new xt(g,C),h.addPass(M),G=new Pt,G.enabled=!1,h.addPass(G),N=new zt(g,C),N.enabled=!1,h.addPass(N),D=new Ze(bt),h.addPass(D),H=new Ct,H.strength=.7,H.radius=1,H.threshold=.6,H.enabled=!0,h.addPass(H),new Ze(Mt),E.getPixelRatio()===1&&!E.capabilities.isWebGL2&&(R=new Et,h.addPass(R)),w=new Ce;let He=0,je;const Ge=()=>{const Z=w.getElapsedTime();u.forEach(jn=>{}),He=Z;const we=1.5,Ue=1;z.position.z=Math.cos(He*Ue)*we,z.position.x=Math.sin(He*Ue)*we,_.update(),h.render(),je=window.requestAnimationFrame(Ge)};return Ge(),()=>{window.cancelAnimationFrame(je),e(5,g=null),e(9,C=null),_=null}});function j(){e(1,d=nt.innerWidth)}function F(B){Pe[B?"unshift":"push"](()=>{o=B,e(2,o)})}function O(){m=this.clientWidth,f=this.clientHeight,e(0,m),e(3,f)}return r.$$set=B=>{"noise2D"in B&&e(4,l=B.noise2D)},r.$$.update=()=>{if(r.$$.dirty[0]&1&&e(13,n=m),r.$$.dirty[0]&3&&e(12,s=d>1e3?m*.9:m*1),r.$$.dirty[0]&12288&&e(14,c=n/s),r.$$.dirty[0]&16896&&C&&c&&(e(9,C.aspect=c,C),e(9,C.left=-me*c,C),e(9,C.right=me*c,C),C.updateProjectionMatrix()),r.$$.dirty[0]&15904&&E&&g&&C&&n&&s&&(E.setSize(n,s),E.setPixelRatio(Math.min(2,window.devicePixelRatio)),h.setSize(n,s),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.render()),r.$$.dirty[0]&464&&y){const B=[];u.forEach((q,A)=>{q.position.set(l(A,A*2),l(A,A*3),l(A,A*5)),q.scale.set(l(A,A*Math.random()),l(A,A*Math.random()),l(A,A*Math.random())),B.push(q),e(8,u=B)})}},[m,d,o,f,l,g,y,a,u,C,E,h,s,n,c,j,F,O]}class Sn extends ee{constructor(t){super(),te(this,t,En,Cn,ne,{noise2D:4},null,[-1,-1])}}function kn(r){let t,e,n,s,c,o,l,m,f,d,g,y,P;return d=new Sn({props:{noise2D:r[0]}}),{c(){t=L("div"),e=L("div"),n=L("h1"),s=Y("Structured .02"),c=oe(),o=L("button"),l=Y("re-generate"),m=oe(),f=L("div"),le(d.$$.fragment),this.h()},l(i){t=T(i,"DIV",{class:!0});var a=I(t);e=T(a,"DIV",{class:!0});var u=I(e);n=T(u,"H1",{class:!0});var v=I(n);s=$(v,"Structured .02"),v.forEach(x),c=ie(u),o=T(u,"BUTTON",{class:!0});var z=I(o);l=$(z,"re-generate"),z.forEach(x),u.forEach(x),m=ie(a),f=T(a,"DIV",{class:!0});var p=I(f);ae(d.$$.fragment,p),p.forEach(x),a.forEach(x),this.h()},h(){S(n,"class","svelte-1627w20"),S(o,"class","svelte-1627w20"),S(e,"class","left svelte-1627w20"),S(f,"class","right svelte-1627w20"),S(t,"class","layout svelte-1627w20")},m(i,a){Q(i,t,a),b(t,e),b(e,n),b(n,s),b(e,c),b(e,o),b(o,l),b(t,m),b(t,f),ce(d,f,null),g=!0,y||(P=se(o,"click",r[1]),y=!0)},p(i,[a]){const u={};a&1&&(u.noise2D=i[0]),d.$set(u)},i(i){g||(X(d.$$.fragment,i),g=!0)},o(i){J(d.$$.fragment,i),g=!1},d(i){i&&x(t),ue(d),y=!1,P()}}}function Ln(r,t,e){let n=ve();return[n,()=>{e(0,n=ve())}]}class Tn extends ee{constructor(t){super(),te(this,t,Ln,kn,ne,{})}}function In(r){let t,e;return{c(){t=L("h1"),e=Y("This page does not exist... yet")},l(n){t=T(n,"H1",{});var s=I(t);e=$(s,"This page does not exist... yet"),s.forEach(x)},m(n,s){Q(n,t,s),b(t,e)},i:W,o:W,d(n){n&&x(t)}}}function Dn(r){let t,e;return t=new Tn({}),{c(){le(t.$$.fragment)},l(n){ae(t.$$.fragment,n)},m(n,s){ce(t,n,s),e=!0},i(n){e||(X(t.$$.fragment,n),e=!0)},o(n){J(t.$$.fragment,n),e=!1},d(n){ue(t,n)}}}function Rn(r){let t,e;return t=new bn({}),{c(){le(t.$$.fragment)},l(n){ae(t.$$.fragment,n)},m(n,s){ce(t,n,s),e=!0},i(n){e||(X(t.$$.fragment,n),e=!0)},o(n){J(t.$$.fragment,n),e=!1},d(n){ue(t,n)}}}function Hn(r){let t,e;return t=new wn({}),{c(){le(t.$$.fragment)},l(n){ae(t.$$.fragment,n)},m(n,s){ce(t,n,s),e=!0},i(n){e||(X(t.$$.fragment,n),e=!0)},o(n){J(t.$$.fragment,n),e=!1},d(n){ue(t,n)}}}function An(r){let t,e;return t=new un({}),{c(){le(t.$$.fragment)},l(n){ae(t.$$.fragment,n)},m(n,s){ce(t,n,s),e=!0},i(n){e||(X(t.$$.fragment,n),e=!0)},o(n){J(t.$$.fragment,n),e=!1},d(n){ue(t,n)}}}function Vn(r){let t,e;return t=new Yt({}),{c(){le(t.$$.fragment)},l(n){ae(t.$$.fragment,n)},m(n,s){ce(t,n,s),e=!0},i(n){e||(X(t.$$.fragment,n),e=!0)},o(n){J(t.$$.fragment,n),e=!1},d(n){ue(t,n)}}}function Bn(r){let t,e;return t=new Gt({}),{c(){le(t.$$.fragment)},l(n){ae(t.$$.fragment,n)},m(n,s){ce(t,n,s),e=!0},i(n){e||(X(t.$$.fragment,n),e=!0)},o(n){J(t.$$.fragment,n),e=!1},d(n){ue(t,n)}}}function Fn(r){let t,e;return t=new At({}),{c(){le(t.$$.fragment)},l(n){ae(t.$$.fragment,n)},m(n,s){ce(t,n,s),e=!0},i(n){e||(X(t.$$.fragment,n),e=!0)},o(n){J(t.$$.fragment,n),e=!1},d(n){ue(t,n)}}}function Wn(r){let t,e,n,s;const c=[Fn,Bn,Vn,An,Hn,Rn,Dn,In],o=[];function l(m,f){return m[0]==="colours01"?0:m[0]==="light01"?1:m[0]==="mercurial01"?2:m[0]==="mercurial02"?3:m[0]==="perspective01"?4:m[0]==="structured01"?5:m[0]==="structured02"?6:7}return t=l(r),e=o[t]=c[t](r),{c(){e.c(),n=Ne()},l(m){e.l(m),n=Ne()},m(m,f){o[t].m(m,f),Q(m,n,f),s=!0},p(m,[f]){let d=t;t=l(m),t!==d&&(st(),J(o[d],1,1,()=>{o[d]=null}),lt(),e=o[t],e||(e=o[t]=c[t](m),e.c()),X(e,1),e.m(n.parentNode,n))},i(m){s||(X(e),s=!0)},o(m){J(e),s=!1},d(m){o[t].d(m),m&&x(n)}}}function qn(r,t,e){let n;return at(r,ct,s=>e(0,n=s)),[n]}class Zn extends ee{constructor(t){super(),te(this,t,qn,Wn,ne,{})}}export{Zn as S};
