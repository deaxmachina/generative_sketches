/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mc="142",vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Rr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sM=0,Qf=1,oM=2,Ed=1,aM=2,Ds=3,Fs=0,Zn=1,Jr=2,lM=1,Vi=0,Zr=1,cc=2,$f=3,eh=4,cM=5,Yr=100,uM=101,fM=102,th=103,nh=104,hM=200,dM=201,pM=202,mM=203,Ad=204,Cd=205,gM=206,xM=207,vM=208,_M=209,MM=210,yM=0,SM=1,bM=2,uc=3,wM=4,TM=5,EM=6,AM=7,Ld=0,CM=1,LM=2,yi=0,DM=1,PM=2,RM=3,IM=4,FM=5,Dd=300,Qr=301,$r=302,fc=303,hc=304,aa=306,dc=1e3,jn=1001,pc=1002,Ht=1003,ih=1004,rh=1005,Mn=1006,OM=1007,la=1008,pr=1009,NM=1010,zM=1011,Pd=1012,UM=1013,ur=1014,Hi=1015,Os=1016,BM=1017,GM=1018,Kr=1020,WM=1021,HM=1022,ei=1023,Rd=1024,VM=1025,hr=1026,es=1027,Id=1028,kM=1029,XM=1030,qM=1031,YM=1033,El=33776,Al=33777,Cl=33778,Ll=33779,sh=35840,oh=35841,ah=35842,lh=35843,jM=36196,ch=37492,uh=37496,fh=37808,hh=37809,dh=37810,ph=37811,mh=37812,gh=37813,xh=37814,vh=37815,_h=37816,Mh=37817,yh=37818,Sh=37819,bh=37820,wh=37821,Th=36492,mr=3e3,Dt=3001,ZM=3200,KM=3201,yc=0,JM=1,xi="srgb",fr="srgb-linear",Dl=7680,QM=519,Eh=35044,Ah="300 es",mc=1035;class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,u=s.length;o<u;o++)s[o].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ch=1234567;const Rs=Math.PI/180,ra=180/Math.PI;function ns(){const l=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[l&255]+Kt[l>>8&255]+Kt[l>>16&255]+Kt[l>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function rn(l,e,t){return Math.max(e,Math.min(t,l))}function Sc(l,e){return(l%e+e)%e}function $M(l,e,t,i,s){return i+(l-e)*(s-i)/(t-e)}function ey(l,e,t){return l!==e?(t-l)/(e-l):0}function Is(l,e,t){return(1-t)*l+t*e}function ty(l,e,t,i){return Is(l,e,1-Math.exp(-t*i))}function ny(l,e=1){return e-Math.abs(Sc(l,e*2)-e)}function iy(l,e,t){return l<=e?0:l>=t?1:(l=(l-e)/(t-e),l*l*(3-2*l))}function ry(l,e,t){return l<=e?0:l>=t?1:(l=(l-e)/(t-e),l*l*l*(l*(l*6-15)+10))}function sy(l,e){return l+Math.floor(Math.random()*(e-l+1))}function oy(l,e){return l+Math.random()*(e-l)}function ay(l){return l*(.5-Math.random())}function ly(l){l!==void 0&&(Ch=l);let e=Ch+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cy(l){return l*Rs}function uy(l){return l*ra}function gc(l){return(l&l-1)===0&&l!==0}function fy(l){return Math.pow(2,Math.ceil(Math.log(l)/Math.LN2))}function sa(l){return Math.pow(2,Math.floor(Math.log(l)/Math.LN2))}function hy(l,e,t,i,s){const o=Math.cos,u=Math.sin,c=o(t/2),h=u(t/2),d=o((e+i)/2),p=u((e+i)/2),m=o((e-i)/2),x=u((e-i)/2),M=o((i-e)/2),S=u((i-e)/2);switch(s){case"XYX":l.set(c*p,h*m,h*x,c*d);break;case"YZY":l.set(h*x,c*p,h*m,c*d);break;case"ZXZ":l.set(h*m,h*x,c*p,c*d);break;case"XZX":l.set(c*p,h*S,h*M,c*d);break;case"YXY":l.set(h*M,c*p,h*S,c*d);break;case"ZYZ":l.set(h*S,h*M,c*p,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function dy(l,e){switch(e.constructor){case Float32Array:return l;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function py(l,e){switch(e.constructor){case Float32Array:return l;case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}var Fn=Object.freeze({__proto__:null,DEG2RAD:Rs,RAD2DEG:ra,generateUUID:ns,clamp:rn,euclideanModulo:Sc,mapLinear:$M,inverseLerp:ey,lerp:Is,damp:ty,pingpong:ny,smoothstep:iy,smootherstep:ry,randInt:sy,randFloat:oy,randFloatSpread:ay,seededRandom:ly,degToRad:cy,radToDeg:uy,isPowerOfTwo:gc,ceilPowerOfTwo:fy,floorPowerOfTwo:sa,setQuaternionFromProperEuler:hy,normalize:py,denormalize:dy});class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*i-u*s+e.x,this.y=o*s+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zn{constructor(){zn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,s,o,u,c,h,d){const p=this.elements;return p[0]=e,p[1]=s,p[2]=c,p[3]=t,p[4]=o,p[5]=h,p[6]=i,p[7]=u,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,u=i[0],c=i[3],h=i[6],d=i[1],p=i[4],m=i[7],x=i[2],M=i[5],S=i[8],v=s[0],g=s[3],b=s[6],D=s[1],F=s[4],A=s[7],C=s[2],z=s[5],W=s[8];return o[0]=u*v+c*D+h*C,o[3]=u*g+c*F+h*z,o[6]=u*b+c*A+h*W,o[1]=d*v+p*D+m*C,o[4]=d*g+p*F+m*z,o[7]=d*b+p*A+m*W,o[2]=x*v+M*D+S*C,o[5]=x*g+M*F+S*z,o[8]=x*b+M*A+S*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8];return t*u*p-t*c*d-i*o*p+i*c*h+s*o*d-s*u*h}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8],m=p*u-c*d,x=c*h-p*o,M=d*o-u*h,S=t*m+i*x+s*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/S;return e[0]=m*v,e[1]=(s*d-p*i)*v,e[2]=(c*i-s*u)*v,e[3]=x*v,e[4]=(p*t-s*h)*v,e[5]=(s*o-c*t)*v,e[6]=M*v,e[7]=(i*h-d*t)*v,e[8]=(u*t-i*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,u,c){const h=Math.cos(o),d=Math.sin(o);return this.set(i*h,i*d,-i*(h*u+d*c)+u+e,-s*d,s*h,-s*(-d*u+h*c)+c+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),s=this.elements,o=s[0],u=s[3],c=s[6],h=s[1],d=s[4],p=s[7];return s[0]=t*o+i*h,s[3]=t*u+i*d,s[6]=t*c+i*p,s[1]=-i*o+t*h,s[4]=-i*u+t*d,s[7]=-i*c+t*p,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Fd(l){for(let e=l.length-1;e>=0;--e)if(l[e]>65535)return!0;return!1}function Ns(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function dr(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function na(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}const Pl={[xi]:{[fr]:dr},[fr]:{[xi]:na}},kn={legacyMode:!0,get workingColorSpace(){return fr},set workingColorSpace(l){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(l,e,t){if(this.legacyMode||e===t||!e||!t)return l;if(Pl[e]&&Pl[e][t]!==void 0){const i=Pl[e][t];return l.r=i(l.r),l.g=i(l.g),l.b=i(l.b),l}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(l,e){return this.convert(l,this.workingColorSpace,e)},toWorkingColorSpace:function(l,e){return this.convert(l,e,this.workingColorSpace)}},Od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ut={r:0,g:0,b:0},Xn={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function Rl(l,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?l+(e-l)*6*t:t<1/2?e:t<2/3?l+(e-l)*6*(2/3-t):l}function Io(l,e){return e.r=l.r,e.g=l.g,e.b=l.b,e}class at{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=fr){return this.r=e,this.g=t,this.b=i,kn.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=fr){if(e=Sc(e,1),t=rn(t,0,1),i=rn(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,u=2*i-o;this.r=Rl(u,o,e+1/3),this.g=Rl(u,o,e),this.b=Rl(u,o,e-1/3)}return kn.toWorkingColorSpace(this,s),this}setStyle(e,t=xi){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let o;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,kn.toWorkingColorSpace(this,t),i(o[4]),this;if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,kn.toWorkingColorSpace(this,t),i(o[4]),this;break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c)){const h=parseFloat(o[1])/360,d=parseInt(o[2],10)/100,p=parseInt(o[3],10)/100;return i(o[4]),this.setHSL(h,d,p,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],u=o.length;if(u===3)return this.r=parseInt(o.charAt(0)+o.charAt(0),16)/255,this.g=parseInt(o.charAt(1)+o.charAt(1),16)/255,this.b=parseInt(o.charAt(2)+o.charAt(2),16)/255,kn.toWorkingColorSpace(this,t),this;if(u===6)return this.r=parseInt(o.charAt(0)+o.charAt(1),16)/255,this.g=parseInt(o.charAt(2)+o.charAt(3),16)/255,this.b=parseInt(o.charAt(4)+o.charAt(5),16)/255,kn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=xi){const i=Od[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return kn.fromWorkingColorSpace(Io(this,Ut),e),rn(Ut.r*255,0,255)<<16^rn(Ut.g*255,0,255)<<8^rn(Ut.b*255,0,255)<<0}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=fr){kn.fromWorkingColorSpace(Io(this,Ut),t);const i=Ut.r,s=Ut.g,o=Ut.b,u=Math.max(i,s,o),c=Math.min(i,s,o);let h,d;const p=(c+u)/2;if(c===u)h=0,d=0;else{const m=u-c;switch(d=p<=.5?m/(u+c):m/(2-u-c),u){case i:h=(s-o)/m+(s<o?6:0);break;case s:h=(o-i)/m+2;break;case o:h=(i-s)/m+4;break}h/=6}return e.h=h,e.s=d,e.l=p,e}getRGB(e,t=fr){return kn.fromWorkingColorSpace(Io(this,Ut),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=xi){return kn.fromWorkingColorSpace(Io(this,Ut),e),e!==xi?`color(${e} ${Ut.r} ${Ut.g} ${Ut.b})`:`rgb(${Ut.r*255|0},${Ut.g*255|0},${Ut.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Xn),Xn.h+=e,Xn.s+=t,Xn.l+=i,this.setHSL(Xn.h,Xn.s,Xn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(Ro);const i=Is(Xn.h,Ro.h,t),s=Is(Xn.s,Ro.s,t),o=Is(Xn.l,Ro.l,t);return this.setHSL(i,s,o),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}at.NAMES=Od;let Ir;class Nd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ir===void 0&&(Ir=Ns("canvas")),Ir.width=e.width,Ir.height=e.height;const i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ir}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Ns("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let u=0;u<o.length;u++)o[u]=dr(o[u]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(dr(t[i]/255)*255):t[i]=dr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class zd{constructor(e=null){this.isSource=!0,this.uuid=ns(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?o.push(Il(s[u].image)):o.push(Il(s[u]))}else o=Il(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function Il(l){return typeof HTMLImageElement!="undefined"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&l instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&l instanceof ImageBitmap?Nd.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let my=0;class Qt extends Xi{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,i=jn,s=jn,o=Mn,u=la,c=ei,h=pr,d=1,p=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=ns(),this.name="",this.source=new zd(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=h,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dc:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dc:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Dd;class _t{constructor(e=0,t=0,i=0,s=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*s+u[12]*o,this.y=u[1]*t+u[5]*i+u[9]*s+u[13]*o,this.z=u[2]*t+u[6]*i+u[10]*s+u[14]*o,this.w=u[3]*t+u[7]*i+u[11]*s+u[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const h=e.elements,d=h[0],p=h[4],m=h[8],x=h[1],M=h[5],S=h[9],v=h[2],g=h[6],b=h[10];if(Math.abs(p-x)<.01&&Math.abs(m-v)<.01&&Math.abs(S-g)<.01){if(Math.abs(p+x)<.1&&Math.abs(m+v)<.1&&Math.abs(S+g)<.1&&Math.abs(d+M+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(d+1)/2,A=(M+1)/2,C=(b+1)/2,z=(p+x)/4,W=(m+v)/4,T=(S+g)/4;return F>A&&F>C?F<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(F),s=z/i,o=W/i):A>C?A<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(A),i=z/s,o=T/s):C<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(C),i=W/o,s=T/o),this.set(i,s,o,t),this}let D=Math.sqrt((g-S)*(g-S)+(m-v)*(m-v)+(x-p)*(x-p));return Math.abs(D)<.001&&(D=1),this.x=(g-S)/D,this.y=(m-v)/D,this.z=(x-p)/D,this.w=Math.acos((d+M+b-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yn extends Xi{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new Qt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Mn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ud extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gy extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerp(e,t,i,s){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,s)}static slerpFlat(e,t,i,s,o,u,c){let h=i[s+0],d=i[s+1],p=i[s+2],m=i[s+3];const x=o[u+0],M=o[u+1],S=o[u+2],v=o[u+3];if(c===0){e[t+0]=h,e[t+1]=d,e[t+2]=p,e[t+3]=m;return}if(c===1){e[t+0]=x,e[t+1]=M,e[t+2]=S,e[t+3]=v;return}if(m!==v||h!==x||d!==M||p!==S){let g=1-c;const b=h*x+d*M+p*S+m*v,D=b>=0?1:-1,F=1-b*b;if(F>Number.EPSILON){const C=Math.sqrt(F),z=Math.atan2(C,b*D);g=Math.sin(g*z)/C,c=Math.sin(c*z)/C}const A=c*D;if(h=h*g+x*A,d=d*g+M*A,p=p*g+S*A,m=m*g+v*A,g===1-c){const C=1/Math.sqrt(h*h+d*d+p*p+m*m);h*=C,d*=C,p*=C,m*=C}}e[t]=h,e[t+1]=d,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,s,o,u){const c=i[s],h=i[s+1],d=i[s+2],p=i[s+3],m=o[u],x=o[u+1],M=o[u+2],S=o[u+3];return e[t]=c*S+p*m+h*M-d*x,e[t+1]=h*S+p*x+d*m-c*M,e[t+2]=d*S+p*M+c*x-h*m,e[t+3]=p*S-c*m-h*x-d*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,s=e._y,o=e._z,u=e._order,c=Math.cos,h=Math.sin,d=c(i/2),p=c(s/2),m=c(o/2),x=h(i/2),M=h(s/2),S=h(o/2);switch(u){case"XYZ":this._x=x*p*m+d*M*S,this._y=d*M*m-x*p*S,this._z=d*p*S+x*M*m,this._w=d*p*m-x*M*S;break;case"YXZ":this._x=x*p*m+d*M*S,this._y=d*M*m-x*p*S,this._z=d*p*S-x*M*m,this._w=d*p*m+x*M*S;break;case"ZXY":this._x=x*p*m-d*M*S,this._y=d*M*m+x*p*S,this._z=d*p*S+x*M*m,this._w=d*p*m-x*M*S;break;case"ZYX":this._x=x*p*m-d*M*S,this._y=d*M*m+x*p*S,this._z=d*p*S-x*M*m,this._w=d*p*m+x*M*S;break;case"YZX":this._x=x*p*m+d*M*S,this._y=d*M*m+x*p*S,this._z=d*p*S-x*M*m,this._w=d*p*m-x*M*S;break;case"XZY":this._x=x*p*m-d*M*S,this._y=d*M*m-x*p*S,this._z=d*p*S+x*M*m,this._w=d*p*m+x*M*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],u=t[1],c=t[5],h=t[9],d=t[2],p=t[6],m=t[10],x=i+c+m;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(p-h)*M,this._y=(o-d)*M,this._z=(u-s)*M}else if(i>c&&i>m){const M=2*Math.sqrt(1+i-c-m);this._w=(p-h)/M,this._x=.25*M,this._y=(s+u)/M,this._z=(o+d)/M}else if(c>m){const M=2*Math.sqrt(1+c-i-m);this._w=(o-d)/M,this._x=(s+u)/M,this._y=.25*M,this._z=(h+p)/M}else{const M=2*Math.sqrt(1+m-i-c);this._w=(u-s)/M,this._x=(o+d)/M,this._y=(h+p)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,u=e._w,c=t._x,h=t._y,d=t._z,p=t._w;return this._x=i*p+u*c+s*d-o*h,this._y=s*p+u*h+o*c-i*d,this._z=o*p+u*d+i*h-s*c,this._w=u*p-i*c-s*h-o*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,o=this._z,u=this._w;let c=u*e._w+i*e._x+s*e._y+o*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=s,this._z=o,this;const h=1-c*c;if(h<=Number.EPSILON){const M=1-t;return this._w=M*u+t*this._w,this._x=M*i+t*this._x,this._y=M*s+t*this._y,this._z=M*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const d=Math.sqrt(h),p=Math.atan2(d,c),m=Math.sin((1-t)*p)/d,x=Math.sin(t*p)/d;return this._w=u*m+this._w*x,this._x=i*m+this._x*x,this._y=s*m+this._y*x,this._z=o*m+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(o),i*Math.cos(o),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Lh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,u=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*u,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*u,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,u=e.y,c=e.z,h=e.w,d=h*t+u*s-c*i,p=h*i+c*t-o*s,m=h*s+o*i-u*t,x=-o*t-u*i-c*s;return this.x=d*h+x*-o+p*-c-m*-u,this.y=p*h+x*-u+m*-o-d*-c,this.z=m*h+x*-c+d*-u-p*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,u=t.x,c=t.y,h=t.z;return this.x=s*h-o*c,this.y=o*u-i*h,this.z=i*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fl.copy(this).projectOnVector(e),this.sub(Fl)}reflect(e){return this.sub(Fl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fl=new B,Lh=new ki;class Us{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,s=1/0,o=-1/0,u=-1/0,c=-1/0;for(let h=0,d=e.length;h<d;h+=3){const p=e[h],m=e[h+1],x=e[h+2];p<t&&(t=p),m<i&&(i=m),x<s&&(s=x),p>o&&(o=p),m>u&&(u=m),x>c&&(c=x)}return this.min.set(t,i,s),this.max.set(o,u,c),this}setFromBufferAttribute(e){let t=1/0,i=1/0,s=1/0,o=-1/0,u=-1/0,c=-1/0;for(let h=0,d=e.count;h<d;h++){const p=e.getX(h),m=e.getY(h),x=e.getZ(h);p<t&&(t=p),m<i&&(i=m),x<s&&(s=x),p>o&&(o=p),m>u&&(u=m),x>c&&(c=x)}return this.min.set(t,i,s),this.max.set(o,u,c),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=rr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const o=i.attributes.position;for(let u=0,c=o.count;u<c;u++)rr.fromBufferAttribute(o,u).applyMatrix4(e.matrixWorld),this.expandByPoint(rr)}else i.boundingBox===null&&i.computeBoundingBox(),Ol.copy(i.boundingBox),Ol.applyMatrix4(e.matrixWorld),this.union(Ol);const s=e.children;for(let o=0,u=s.length;o<u;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,rr),rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),Fo.subVectors(this.max,bs),Fr.subVectors(e.a,bs),Or.subVectors(e.b,bs),Nr.subVectors(e.c,bs),Oi.subVectors(Or,Fr),Ni.subVectors(Nr,Or),sr.subVectors(Fr,Nr);let t=[0,-Oi.z,Oi.y,0,-Ni.z,Ni.y,0,-sr.z,sr.y,Oi.z,0,-Oi.x,Ni.z,0,-Ni.x,sr.z,0,-sr.x,-Oi.y,Oi.x,0,-Ni.y,Ni.x,0,-sr.y,sr.x,0];return!Nl(t,Fr,Or,Nr,Fo)||(t=[1,0,0,0,1,0,0,0,1],!Nl(t,Fr,Or,Nr,Fo))?!1:(Oo.crossVectors(Oi,Ni),t=[Oo.x,Oo.y,Oo.z],Nl(t,Fr,Or,Nr,Fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return rr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(rr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hi=[new B,new B,new B,new B,new B,new B,new B,new B],rr=new B,Ol=new Us,Fr=new B,Or=new B,Nr=new B,Oi=new B,Ni=new B,sr=new B,bs=new B,Fo=new B,Oo=new B,or=new B;function Nl(l,e,t,i,s){for(let o=0,u=l.length-3;o<=u;o+=3){or.fromArray(l,o);const c=s.x*Math.abs(or.x)+s.y*Math.abs(or.y)+s.z*Math.abs(or.z),h=e.dot(or),d=t.dot(or),p=i.dot(or);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>c)return!1}return!0}const xy=new Us,Dh=new B,No=new B,zl=new B;class ca{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):xy.setFromPoints(e).getCenter(i);let s=0;for(let o=0,u=e.length;o<u;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){zl.subVectors(e,this.center);const t=zl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.add(zl.multiplyScalar(s/i)),this.radius+=s}return this}union(e){return this.center.equals(e.center)===!0?No.set(0,0,1).multiplyScalar(e.radius):No.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Dh.copy(e.center).add(No)),this.expandByPoint(Dh.copy(e.center).sub(No)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new B,Ul=new B,zo=new B,zi=new B,Bl=new B,Uo=new B,Gl=new B;class Bd{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.direction).multiplyScalar(t).add(this.origin),di.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ul.copy(e).add(t).multiplyScalar(.5),zo.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Ul);const o=e.distanceTo(t)*.5,u=-this.direction.dot(zo),c=zi.dot(this.direction),h=-zi.dot(zo),d=zi.lengthSq(),p=Math.abs(1-u*u);let m,x,M,S;if(p>0)if(m=u*h-c,x=u*c-h,S=o*p,m>=0)if(x>=-S)if(x<=S){const v=1/p;m*=v,x*=v,M=m*(m+u*x+2*c)+x*(u*m+x+2*h)+d}else x=o,m=Math.max(0,-(u*x+c)),M=-m*m+x*(x+2*h)+d;else x=-o,m=Math.max(0,-(u*x+c)),M=-m*m+x*(x+2*h)+d;else x<=-S?(m=Math.max(0,-(-u*o+c)),x=m>0?-o:Math.min(Math.max(-o,-h),o),M=-m*m+x*(x+2*h)+d):x<=S?(m=0,x=Math.min(Math.max(-o,-h),o),M=x*(x+2*h)+d):(m=Math.max(0,-(u*o+c)),x=m>0?o:Math.min(Math.max(-o,-h),o),M=-m*m+x*(x+2*h)+d);else x=u>0?-o:o,m=Math.max(0,-(u*x+c)),M=-m*m+x*(x+2*h)+d;return i&&i.copy(this.direction).multiplyScalar(m).add(this.origin),s&&s.copy(zo).multiplyScalar(x).add(Ul),M}intersectSphere(e,t){di.subVectors(e.center,this.origin);const i=di.dot(this.direction),s=di.dot(di)-i*i,o=e.radius*e.radius;if(s>o)return null;const u=Math.sqrt(o-s),c=i-u,h=i+u;return c<0&&h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,u,c,h;const d=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,x=this.origin;return d>=0?(i=(e.min.x-x.x)*d,s=(e.max.x-x.x)*d):(i=(e.max.x-x.x)*d,s=(e.min.x-x.x)*d),p>=0?(o=(e.min.y-x.y)*p,u=(e.max.y-x.y)*p):(o=(e.max.y-x.y)*p,u=(e.min.y-x.y)*p),i>u||o>s||((o>i||i!==i)&&(i=o),(u<s||s!==s)&&(s=u),m>=0?(c=(e.min.z-x.z)*m,h=(e.max.z-x.z)*m):(c=(e.max.z-x.z)*m,h=(e.min.z-x.z)*m),i>h||c>s)||((c>i||i!==i)&&(i=c),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,i,s,o){Bl.subVectors(t,e),Uo.subVectors(i,e),Gl.crossVectors(Bl,Uo);let u=this.direction.dot(Gl),c;if(u>0){if(s)return null;c=1}else if(u<0)c=-1,u=-u;else return null;zi.subVectors(this.origin,e);const h=c*this.direction.dot(Uo.crossVectors(zi,Uo));if(h<0)return null;const d=c*this.direction.dot(Bl.cross(zi));if(d<0||h+d>u)return null;const p=-c*zi.dot(Gl);return p<0?null:this.at(p/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,s,o,u,c,h,d,p,m,x,M,S,v,g){const b=this.elements;return b[0]=e,b[4]=t,b[8]=i,b[12]=s,b[1]=o,b[5]=u,b[9]=c,b[13]=h,b[2]=d,b[6]=p,b[10]=m,b[14]=x,b[3]=M,b[7]=S,b[11]=v,b[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/zr.setFromMatrixColumn(e,0).length(),o=1/zr.setFromMatrixColumn(e,1).length(),u=1/zr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,s=e.y,o=e.z,u=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s),p=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const x=u*p,M=u*m,S=c*p,v=c*m;t[0]=h*p,t[4]=-h*m,t[8]=d,t[1]=M+S*d,t[5]=x-v*d,t[9]=-c*h,t[2]=v-x*d,t[6]=S+M*d,t[10]=u*h}else if(e.order==="YXZ"){const x=h*p,M=h*m,S=d*p,v=d*m;t[0]=x+v*c,t[4]=S*c-M,t[8]=u*d,t[1]=u*m,t[5]=u*p,t[9]=-c,t[2]=M*c-S,t[6]=v+x*c,t[10]=u*h}else if(e.order==="ZXY"){const x=h*p,M=h*m,S=d*p,v=d*m;t[0]=x-v*c,t[4]=-u*m,t[8]=S+M*c,t[1]=M+S*c,t[5]=u*p,t[9]=v-x*c,t[2]=-u*d,t[6]=c,t[10]=u*h}else if(e.order==="ZYX"){const x=u*p,M=u*m,S=c*p,v=c*m;t[0]=h*p,t[4]=S*d-M,t[8]=x*d+v,t[1]=h*m,t[5]=v*d+x,t[9]=M*d-S,t[2]=-d,t[6]=c*h,t[10]=u*h}else if(e.order==="YZX"){const x=u*h,M=u*d,S=c*h,v=c*d;t[0]=h*p,t[4]=v-x*m,t[8]=S*m+M,t[1]=m,t[5]=u*p,t[9]=-c*p,t[2]=-d*p,t[6]=M*m+S,t[10]=x-v*m}else if(e.order==="XZY"){const x=u*h,M=u*d,S=c*h,v=c*d;t[0]=h*p,t[4]=-m,t[8]=d*p,t[1]=x*m+v,t[5]=u*p,t[9]=M*m-S,t[2]=S*m-M,t[6]=c*p,t[10]=v*m+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vy,e,_y)}lookAt(e,t,i){const s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ui.crossVectors(i,vn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ui.crossVectors(i,vn)),Ui.normalize(),Bo.crossVectors(vn,Ui),s[0]=Ui.x,s[4]=Bo.x,s[8]=vn.x,s[1]=Ui.y,s[5]=Bo.y,s[9]=vn.y,s[2]=Ui.z,s[6]=Bo.z,s[10]=vn.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,u=i[0],c=i[4],h=i[8],d=i[12],p=i[1],m=i[5],x=i[9],M=i[13],S=i[2],v=i[6],g=i[10],b=i[14],D=i[3],F=i[7],A=i[11],C=i[15],z=s[0],W=s[4],T=s[8],O=s[12],V=s[1],X=s[5],re=s[9],he=s[13],k=s[2],ne=s[6],Z=s[10],le=s[14],se=s[3],K=s[7],$=s[11],me=s[15];return o[0]=u*z+c*V+h*k+d*se,o[4]=u*W+c*X+h*ne+d*K,o[8]=u*T+c*re+h*Z+d*$,o[12]=u*O+c*he+h*le+d*me,o[1]=p*z+m*V+x*k+M*se,o[5]=p*W+m*X+x*ne+M*K,o[9]=p*T+m*re+x*Z+M*$,o[13]=p*O+m*he+x*le+M*me,o[2]=S*z+v*V+g*k+b*se,o[6]=S*W+v*X+g*ne+b*K,o[10]=S*T+v*re+g*Z+b*$,o[14]=S*O+v*he+g*le+b*me,o[3]=D*z+F*V+A*k+C*se,o[7]=D*W+F*X+A*ne+C*K,o[11]=D*T+F*re+A*Z+C*$,o[15]=D*O+F*he+A*le+C*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],u=e[1],c=e[5],h=e[9],d=e[13],p=e[2],m=e[6],x=e[10],M=e[14],S=e[3],v=e[7],g=e[11],b=e[15];return S*(+o*h*m-s*d*m-o*c*x+i*d*x+s*c*M-i*h*M)+v*(+t*h*M-t*d*x+o*u*x-s*u*M+s*d*p-o*h*p)+g*(+t*d*m-t*c*M-o*u*m+i*u*M+o*c*p-i*d*p)+b*(-s*c*p-t*h*m+t*c*x+s*u*m-i*u*x+i*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8],m=e[9],x=e[10],M=e[11],S=e[12],v=e[13],g=e[14],b=e[15],D=m*g*d-v*x*d+v*h*M-c*g*M-m*h*b+c*x*b,F=S*x*d-p*g*d-S*h*M+u*g*M+p*h*b-u*x*b,A=p*v*d-S*m*d+S*c*M-u*v*M-p*c*b+u*m*b,C=S*m*h-p*v*h-S*c*x+u*v*x+p*c*g-u*m*g,z=t*D+i*F+s*A+o*C;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/z;return e[0]=D*W,e[1]=(v*x*o-m*g*o-v*s*M+i*g*M+m*s*b-i*x*b)*W,e[2]=(c*g*o-v*h*o+v*s*d-i*g*d-c*s*b+i*h*b)*W,e[3]=(m*h*o-c*x*o-m*s*d+i*x*d+c*s*M-i*h*M)*W,e[4]=F*W,e[5]=(p*g*o-S*x*o+S*s*M-t*g*M-p*s*b+t*x*b)*W,e[6]=(S*h*o-u*g*o-S*s*d+t*g*d+u*s*b-t*h*b)*W,e[7]=(u*x*o-p*h*o+p*s*d-t*x*d-u*s*M+t*h*M)*W,e[8]=A*W,e[9]=(S*m*o-p*v*o-S*i*M+t*v*M+p*i*b-t*m*b)*W,e[10]=(u*v*o-S*c*o+S*i*d-t*v*d-u*i*b+t*c*b)*W,e[11]=(p*c*o-u*m*o-p*i*d+t*m*d+u*i*M-t*c*M)*W,e[12]=C*W,e[13]=(p*v*s-S*m*s+S*i*x-t*v*x-p*i*g+t*m*g)*W,e[14]=(S*c*s-u*v*s-S*i*h+t*v*h+u*i*g-t*c*g)*W,e[15]=(u*m*s-p*c*s+p*i*h-t*m*h-u*i*x+t*c*x)*W,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,u=e.x,c=e.y,h=e.z,d=o*u,p=o*c;return this.set(d*u+i,d*c-s*h,d*h+s*c,0,d*c+s*h,p*c+i,p*h-s*u,0,d*h-s*c,p*h+s*u,o*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,u){return this.set(1,i,o,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,u=t._y,c=t._z,h=t._w,d=o+o,p=u+u,m=c+c,x=o*d,M=o*p,S=o*m,v=u*p,g=u*m,b=c*m,D=h*d,F=h*p,A=h*m,C=i.x,z=i.y,W=i.z;return s[0]=(1-(v+b))*C,s[1]=(M+A)*C,s[2]=(S-F)*C,s[3]=0,s[4]=(M-A)*z,s[5]=(1-(x+b))*z,s[6]=(g+D)*z,s[7]=0,s[8]=(S+F)*W,s[9]=(g-D)*W,s[10]=(1-(x+v))*W,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let o=zr.set(s[0],s[1],s[2]).length();const u=zr.set(s[4],s[5],s[6]).length(),c=zr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],qn.copy(this);const d=1/o,p=1/u,m=1/c;return qn.elements[0]*=d,qn.elements[1]*=d,qn.elements[2]*=d,qn.elements[4]*=p,qn.elements[5]*=p,qn.elements[6]*=p,qn.elements[8]*=m,qn.elements[9]*=m,qn.elements[10]*=m,t.setFromRotationMatrix(qn),i.x=o,i.y=u,i.z=c,this}makePerspective(e,t,i,s,o,u){u===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const c=this.elements,h=2*o/(t-e),d=2*o/(i-s),p=(t+e)/(t-e),m=(i+s)/(i-s),x=-(u+o)/(u-o),M=-2*u*o/(u-o);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,o,u){const c=this.elements,h=1/(t-e),d=1/(i-s),p=1/(u-o),m=(t+e)*h,x=(i+s)*d,M=(u+o)*p;return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-x,c[2]=0,c[6]=0,c[10]=-2*p,c[14]=-M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const zr=new B,qn=new It,vy=new B(0,0,0),_y=new B(1,1,1),Ui=new B,Bo=new B,vn=new B,Ph=new It,Rh=new ki;class Bs{constructor(e=0,t=0,i=0,s=Bs.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],u=s[4],c=s[8],h=s[1],d=s[5],p=s[9],m=s[2],x=s[6],M=s[10];switch(t){case"XYZ":this._y=Math.asin(rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,M),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(x,d),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,M),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(rn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-m,M),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-rn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(c,M));break;case"XZY":this._z=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,d),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-p,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ph.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ph,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rh.setFromEuler(this),this.setFromQuaternion(Rh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Bs.DefaultOrder="XYZ";Bs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Gd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let My=0;const Ih=new B,Ur=new ki,pi=new It,Go=new B,ws=new B,yy=new B,Sy=new ki,Fh=new B(1,0,0),Oh=new B(0,1,0),Nh=new B(0,0,1),by={type:"added"},zh={type:"removed"};class $t extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DefaultUp.clone();const e=new B,t=new Bs,i=new ki,s=new B(1,1,1);function o(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new It},normalMatrix:{value:new zn}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=$t.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Gd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(Fh,e)}rotateY(e){return this.rotateOnAxis(Oh,e)}rotateZ(e){return this.rotateOnAxis(Nh,e)}translateOnAxis(e,t){return Ih.copy(e).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fh,e)}translateY(e){return this.translateOnAxis(Oh,e)}translateZ(e){return this.translateOnAxis(Nh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Go.copy(e):Go.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(ws,Go,this.up):pi.lookAt(Go,ws,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Ur.setFromRotationMatrix(pi),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(by)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(zh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,e,yy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,Sy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let o=0,u=s.length;o<u;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function o(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const m=h[d];o(e.shapes,m)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,d=this.material.length;h<d;h++)c.push(o(e.materials,this.material[h]));s.material=c}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];s.animations.push(o(e.animations,h))}}if(t){const c=u(e.geometries),h=u(e.materials),d=u(e.textures),p=u(e.images),m=u(e.shapes),x=u(e.skeletons),M=u(e.animations),S=u(e.nodes);c.length>0&&(i.geometries=c),h.length>0&&(i.materials=h),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),x.length>0&&(i.skeletons=x),M.length>0&&(i.animations=M),S.length>0&&(i.nodes=S)}return i.object=s,i;function u(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}$t.DefaultUp=new B(0,1,0);$t.DefaultMatrixAutoUpdate=!0;const Yn=new B,mi=new B,Wl=new B,gi=new B,Br=new B,Gr=new B,Uh=new B,Hl=new B,Vl=new B,kl=new B;class _i{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Yn.subVectors(e,t),s.cross(Yn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){Yn.subVectors(s,t),mi.subVectors(i,t),Wl.subVectors(e,t);const u=Yn.dot(Yn),c=Yn.dot(mi),h=Yn.dot(Wl),d=mi.dot(mi),p=mi.dot(Wl),m=u*d-c*c;if(m===0)return o.set(-2,-1,-1);const x=1/m,M=(d*h-c*p)*x,S=(u*p-c*h)*x;return o.set(1-M-S,S,M)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,gi),gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getUV(e,t,i,s,o,u,c,h){return this.getBarycoord(e,t,i,s,gi),h.set(0,0),h.addScaledVector(o,gi.x),h.addScaledVector(u,gi.y),h.addScaledVector(c,gi.z),h}static isFrontFacing(e,t,i,s){return Yn.subVectors(i,t),mi.subVectors(e,t),Yn.cross(mi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Yn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,o){return _i.getUV(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let u,c;Br.subVectors(s,i),Gr.subVectors(o,i),Hl.subVectors(e,i);const h=Br.dot(Hl),d=Gr.dot(Hl);if(h<=0&&d<=0)return t.copy(i);Vl.subVectors(e,s);const p=Br.dot(Vl),m=Gr.dot(Vl);if(p>=0&&m<=p)return t.copy(s);const x=h*m-p*d;if(x<=0&&h>=0&&p<=0)return u=h/(h-p),t.copy(i).addScaledVector(Br,u);kl.subVectors(e,o);const M=Br.dot(kl),S=Gr.dot(kl);if(S>=0&&M<=S)return t.copy(o);const v=M*d-h*S;if(v<=0&&d>=0&&S<=0)return c=d/(d-S),t.copy(i).addScaledVector(Gr,c);const g=p*S-M*m;if(g<=0&&m-p>=0&&M-S>=0)return Uh.subVectors(o,s),c=(m-p)/(m-p+(M-S)),t.copy(s).addScaledVector(Uh,c);const b=1/(g+v+x);return u=v*b,c=x*b,t.copy(i).addScaledVector(Br,u).addScaledVector(Gr,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let wy=0;class gr extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=Zr,this.side=Fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ad,this.blendDst=Cd,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=uc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=QM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dl,this.stencilZFail=Dl,this.stencilZPass=Dl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===lM;continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(i.blending=this.blending),this.side!==Fs&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function s(o){const u=[];for(const c in o){const h=o[c];delete h.metadata,u.push(h)}return u}if(t){const o=s(e.textures),u=s(e.images);o.length>0&&(i.textures=o),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bc extends gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new B,Wo=new Le;class ti{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Eh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let s=0,o=e.length;s<o;s++){let u=e[s];u===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",s),u=new at),t[i++]=u.r,t[i++]=u.g,t[i++]=u.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let s=0,o=e.length;s<o;s++){let u=e[s];u===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",s),u=new Le),t[i++]=u.x,t[i++]=u.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let s=0,o=e.length;s<o;s++){let u=e[s];u===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",s),u=new B),t[i++]=u.x,t[i++]=u.y,t[i++]=u.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let s=0,o=e.length;s<o;s++){let u=e[s];u===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",s),u=new _t),t[i++]=u.x,t[i++]=u.y,t[i++]=u.z,t[i++]=u.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wo.fromBufferAttribute(this,t),Wo.applyMatrix3(e),this.setXY(t,Wo.x,Wo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Wd extends ti{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Hd extends ti{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Et extends ti{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ty=0;const On=new It,Xl=new $t,Wr=new B,_n=new Us,Ts=new Us,Wt=new B;class fn extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fd(e)?Hd:Wd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new zn().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,i){return On.makeTranslation(e,t,i),this.applyMatrix4(On),this}scale(e,t,i){return On.makeScale(e,t,i),this.applyMatrix4(On),this}lookAt(e){return Xl.lookAt(e),Xl.updateMatrix(),this.applyMatrix4(Xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];_n.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ca);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const c=t[o];Ts.setFromBufferAttribute(c),this.morphTargetsRelative?(Wt.addVectors(_n.min,Ts.min),_n.expandByPoint(Wt),Wt.addVectors(_n.max,Ts.max),_n.expandByPoint(Wt)):(_n.expandByPoint(Ts.min),_n.expandByPoint(Ts.max))}_n.getCenter(i);let s=0;for(let o=0,u=e.count;o<u;o++)Wt.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(Wt));if(t)for(let o=0,u=t.length;o<u;o++){const c=t[o],h=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)Wt.fromBufferAttribute(c,d),h&&(Wr.fromBufferAttribute(e,d),Wt.add(Wr)),s=Math.max(s,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,o=t.normal.array,u=t.uv.array,c=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*c),4));const h=this.getAttribute("tangent").array,d=[],p=[];for(let V=0;V<c;V++)d[V]=new B,p[V]=new B;const m=new B,x=new B,M=new B,S=new Le,v=new Le,g=new Le,b=new B,D=new B;function F(V,X,re){m.fromArray(s,V*3),x.fromArray(s,X*3),M.fromArray(s,re*3),S.fromArray(u,V*2),v.fromArray(u,X*2),g.fromArray(u,re*2),x.sub(m),M.sub(m),v.sub(S),g.sub(S);const he=1/(v.x*g.y-g.x*v.y);!isFinite(he)||(b.copy(x).multiplyScalar(g.y).addScaledVector(M,-v.y).multiplyScalar(he),D.copy(M).multiplyScalar(v.x).addScaledVector(x,-g.x).multiplyScalar(he),d[V].add(b),d[X].add(b),d[re].add(b),p[V].add(D),p[X].add(D),p[re].add(D))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let V=0,X=A.length;V<X;++V){const re=A[V],he=re.start,k=re.count;for(let ne=he,Z=he+k;ne<Z;ne+=3)F(i[ne+0],i[ne+1],i[ne+2])}const C=new B,z=new B,W=new B,T=new B;function O(V){W.fromArray(o,V*3),T.copy(W);const X=d[V];C.copy(X),C.sub(W.multiplyScalar(W.dot(X))).normalize(),z.crossVectors(T,X);const he=z.dot(p[V])<0?-1:1;h[V*4]=C.x,h[V*4+1]=C.y,h[V*4+2]=C.z,h[V*4+3]=he}for(let V=0,X=A.length;V<X;++V){const re=A[V],he=re.start,k=re.count;for(let ne=he,Z=he+k;ne<Z;ne+=3)O(i[ne+0]),O(i[ne+1]),O(i[ne+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ti(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let x=0,M=i.count;x<M;x++)i.setXYZ(x,0,0,0);const s=new B,o=new B,u=new B,c=new B,h=new B,d=new B,p=new B,m=new B;if(e)for(let x=0,M=e.count;x<M;x+=3){const S=e.getX(x+0),v=e.getX(x+1),g=e.getX(x+2);s.fromBufferAttribute(t,S),o.fromBufferAttribute(t,v),u.fromBufferAttribute(t,g),p.subVectors(u,o),m.subVectors(s,o),p.cross(m),c.fromBufferAttribute(i,S),h.fromBufferAttribute(i,v),d.fromBufferAttribute(i,g),c.add(p),h.add(p),d.add(p),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(v,h.x,h.y,h.z),i.setXYZ(g,d.x,d.y,d.z)}else for(let x=0,M=t.count;x<M;x+=3)s.fromBufferAttribute(t,x+0),o.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),p.subVectors(u,o),m.subVectors(s,o),p.cross(m),i.setXYZ(x+0,p.x,p.y,p.z),i.setXYZ(x+1,p.x,p.y,p.z),i.setXYZ(x+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const s in i){if(e.attributes[s]===void 0)continue;const u=i[s].array,c=e.attributes[s],h=c.array,d=c.itemSize*t,p=Math.min(h.length,u.length-d);for(let m=0,x=d;m<p;m++,x++)u[x]=h[m]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(c,h){const d=c.array,p=c.itemSize,m=c.normalized,x=new d.constructor(h.length*p);let M=0,S=0;for(let v=0,g=h.length;v<g;v++){c.isInterleavedBufferAttribute?M=h[v]*c.data.stride+c.offset:M=h[v]*p;for(let b=0;b<p;b++)x[S++]=d[M++]}return new ti(x,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,i=this.index.array,s=this.attributes;for(const c in s){const h=s[c],d=e(h,i);t.setAttribute(c,d)}const o=this.morphAttributes;for(const c in o){const h=[],d=o[c];for(let p=0,m=d.length;p<m;p++){const x=d[p],M=e(x,i);h.push(M)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,h=u.length;c<h;c++){const d=u[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const d=i[h];e.data.attributes[h]=d.toJSON(e.data)}const s={};let o=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let m=0,x=d.length;m<x;m++){const M=d[m];p.push(M.toJSON(e.data))}p.length>0&&(s[h]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const d in s){const p=s[d];this.setAttribute(d,p.clone(t))}const o=e.morphAttributes;for(const d in o){const p=[],m=o[d];for(let x=0,M=m.length;x<M;x++)p.push(m[x].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];this.addGroup(m.start,m.count,m.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bh=new It,Hr=new Bd,ql=new ca,Bi=new B,Gi=new B,Wi=new B,Yl=new B,jl=new B,Zl=new B,Ho=new B,Vo=new B,ko=new B,Xo=new Le,qo=new Le,Yo=new Le,Kl=new B,jo=new B;class Mi extends $t{constructor(e=new fn,t=new bc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;if(s===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ql.copy(i.boundingSphere),ql.applyMatrix4(o),e.ray.intersectsSphere(ql)===!1)||(Bh.copy(o).invert(),Hr.copy(e.ray).applyMatrix4(Bh),i.boundingBox!==null&&Hr.intersectsBox(i.boundingBox)===!1))return;let u;const c=i.index,h=i.attributes.position,d=i.morphAttributes.position,p=i.morphTargetsRelative,m=i.attributes.uv,x=i.attributes.uv2,M=i.groups,S=i.drawRange;if(c!==null)if(Array.isArray(s))for(let v=0,g=M.length;v<g;v++){const b=M[v],D=s[b.materialIndex],F=Math.max(b.start,S.start),A=Math.min(c.count,Math.min(b.start+b.count,S.start+S.count));for(let C=F,z=A;C<z;C+=3){const W=c.getX(C),T=c.getX(C+1),O=c.getX(C+2);u=Zo(this,D,e,Hr,h,d,p,m,x,W,T,O),u&&(u.faceIndex=Math.floor(C/3),u.face.materialIndex=b.materialIndex,t.push(u))}}else{const v=Math.max(0,S.start),g=Math.min(c.count,S.start+S.count);for(let b=v,D=g;b<D;b+=3){const F=c.getX(b),A=c.getX(b+1),C=c.getX(b+2);u=Zo(this,s,e,Hr,h,d,p,m,x,F,A,C),u&&(u.faceIndex=Math.floor(b/3),t.push(u))}}else if(h!==void 0)if(Array.isArray(s))for(let v=0,g=M.length;v<g;v++){const b=M[v],D=s[b.materialIndex],F=Math.max(b.start,S.start),A=Math.min(h.count,Math.min(b.start+b.count,S.start+S.count));for(let C=F,z=A;C<z;C+=3){const W=C,T=C+1,O=C+2;u=Zo(this,D,e,Hr,h,d,p,m,x,W,T,O),u&&(u.faceIndex=Math.floor(C/3),u.face.materialIndex=b.materialIndex,t.push(u))}}else{const v=Math.max(0,S.start),g=Math.min(h.count,S.start+S.count);for(let b=v,D=g;b<D;b+=3){const F=b,A=b+1,C=b+2;u=Zo(this,s,e,Hr,h,d,p,m,x,F,A,C),u&&(u.faceIndex=Math.floor(b/3),t.push(u))}}}}function Ey(l,e,t,i,s,o,u,c){let h;if(e.side===Zn?h=i.intersectTriangle(u,o,s,!0,c):h=i.intersectTriangle(s,o,u,e.side!==Jr,c),h===null)return null;jo.copy(c),jo.applyMatrix4(l.matrixWorld);const d=t.ray.origin.distanceTo(jo);return d<t.near||d>t.far?null:{distance:d,point:jo.clone(),object:l}}function Zo(l,e,t,i,s,o,u,c,h,d,p,m){Bi.fromBufferAttribute(s,d),Gi.fromBufferAttribute(s,p),Wi.fromBufferAttribute(s,m);const x=l.morphTargetInfluences;if(o&&x){Ho.set(0,0,0),Vo.set(0,0,0),ko.set(0,0,0);for(let S=0,v=o.length;S<v;S++){const g=x[S],b=o[S];g!==0&&(Yl.fromBufferAttribute(b,d),jl.fromBufferAttribute(b,p),Zl.fromBufferAttribute(b,m),u?(Ho.addScaledVector(Yl,g),Vo.addScaledVector(jl,g),ko.addScaledVector(Zl,g)):(Ho.addScaledVector(Yl.sub(Bi),g),Vo.addScaledVector(jl.sub(Gi),g),ko.addScaledVector(Zl.sub(Wi),g)))}Bi.add(Ho),Gi.add(Vo),Wi.add(ko)}l.isSkinnedMesh&&(l.boneTransform(d,Bi),l.boneTransform(p,Gi),l.boneTransform(m,Wi));const M=Ey(l,e,t,i,Bi,Gi,Wi,Kl);if(M){c&&(Xo.fromBufferAttribute(c,d),qo.fromBufferAttribute(c,p),Yo.fromBufferAttribute(c,m),M.uv=_i.getUV(Kl,Bi,Gi,Wi,Xo,qo,Yo,new Le)),h&&(Xo.fromBufferAttribute(h,d),qo.fromBufferAttribute(h,p),Yo.fromBufferAttribute(h,m),M.uv2=_i.getUV(Kl,Bi,Gi,Wi,Xo,qo,Yo,new Le));const S={a:d,b:p,c:m,normal:new B,materialIndex:0};_i.getNormal(Bi,Gi,Wi,S.normal),M.face=S}return M}class Gs extends fn{constructor(e=1,t=1,i=1,s=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:u};const c=this;s=Math.floor(s),o=Math.floor(o),u=Math.floor(u);const h=[],d=[],p=[],m=[];let x=0,M=0;S("z","y","x",-1,-1,i,t,e,u,o,0),S("z","y","x",1,-1,i,t,-e,u,o,1),S("x","z","y",1,1,e,i,t,s,u,2),S("x","z","y",1,-1,e,i,-t,s,u,3),S("x","y","z",1,-1,e,t,i,s,o,4),S("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(h),this.setAttribute("position",new Et(d,3)),this.setAttribute("normal",new Et(p,3)),this.setAttribute("uv",new Et(m,2));function S(v,g,b,D,F,A,C,z,W,T,O){const V=A/W,X=C/T,re=A/2,he=C/2,k=z/2,ne=W+1,Z=T+1;let le=0,se=0;const K=new B;for(let $=0;$<Z;$++){const me=$*X-he;for(let de=0;de<ne;de++){const we=de*V-re;K[v]=we*D,K[g]=me*F,K[b]=k,d.push(K.x,K.y,K.z),K[v]=0,K[g]=0,K[b]=z>0?1:-1,p.push(K.x,K.y,K.z),m.push(de/W),m.push(1-$/T),le+=1}}for(let $=0;$<T;$++)for(let me=0;me<W;me++){const de=x+me+ne*$,we=x+me+ne*($+1),Re=x+(me+1)+ne*($+1),Ie=x+(me+1)+ne*$;h.push(de,we,Ie),h.push(we,Re,Ie),se+=6}c.addGroup(M,se,O),M+=se,x+=le}}static fromJSON(e){return new Gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(l){const e={};for(const t in l){e[t]={};for(const i in l[t]){const s=l[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Jt(l){const e={};for(let t=0;t<l.length;t++){const i=ts(l[t]);for(const s in i)e[s]=i[s]}return e}const Si={clone:ts,merge:Jt};var Ay=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vt extends gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Ay,this.fragmentShader=Cy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Vd extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nn extends Vd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,d=u.fullHeight;o+=u.offsetX*s/h,t-=u.offsetY*i/d,s*=u.width/h,i*=u.height/d}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vr=90,kr=1;class Ly extends $t{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const s=new Nn(Vr,kr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new B(1,0,0)),this.add(s);const o=new Nn(Vr,kr,e,t);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new B(-1,0,0)),this.add(o);const u=new Nn(Vr,kr,e,t);u.layers=this.layers,u.up.set(0,0,1),u.lookAt(new B(0,1,0)),this.add(u);const c=new Nn(Vr,kr,e,t);c.layers=this.layers,c.up.set(0,0,-1),c.lookAt(new B(0,-1,0)),this.add(c);const h=new Nn(Vr,kr,e,t);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new B(0,0,1)),this.add(h);const d=new Nn(Vr,kr,e,t);d.layers=this.layers,d.up.set(0,-1,0),d.lookAt(new B(0,0,-1)),this.add(d)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,o,u,c,h,d]=this.children,p=e.getRenderTarget(),m=e.toneMapping,x=e.xr.enabled;e.toneMapping=yi,e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,s),e.setRenderTarget(i,1),e.render(t,o),e.setRenderTarget(i,2),e.render(t,u),e.setRenderTarget(i,3),e.render(t,c),e.setRenderTarget(i,4),e.render(t,h),i.texture.generateMipmaps=M,e.setRenderTarget(i,5),e.render(t,d),e.setRenderTarget(p),e.toneMapping=m,e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class kd extends Qt{constructor(e,t,i,s,o,u,c,h,d,p){e=e!==void 0?e:[],t=t!==void 0?t:Qr,super(e,t,i,s,o,u,c,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dy extends yn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new kd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Gs(5,5,5),o=new Vt({name:"CubemapFromEquirect",uniforms:ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zn,blending:Vi});o.uniforms.tEquirect.value=t;const u=new Mi(s,o),c=t.minFilter;return t.minFilter===la&&(t.minFilter=Mn),new Ly(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,s){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,s);e.setRenderTarget(o)}}const Jl=new B,Py=new B,Ry=new zn;class ar{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Jl.subVectors(i,t).cross(Py.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Jl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(i).multiplyScalar(o).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ry.getNormalMatrix(e),s=this.coplanarPoint(Jl).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new ca,Ko=new B;class wc{constructor(e=new ar,t=new ar,i=new ar,s=new ar,o=new ar,u=new ar){this.planes=[e,t,i,s,o,u]}set(e,t,i,s,o,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(s),c[4].copy(o),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,s=i[0],o=i[1],u=i[2],c=i[3],h=i[4],d=i[5],p=i[6],m=i[7],x=i[8],M=i[9],S=i[10],v=i[11],g=i[12],b=i[13],D=i[14],F=i[15];return t[0].setComponents(c-s,m-h,v-x,F-g).normalize(),t[1].setComponents(c+s,m+h,v+x,F+g).normalize(),t[2].setComponents(c+o,m+d,v+M,F+b).normalize(),t[3].setComponents(c-o,m-d,v-M,F-b).normalize(),t[4].setComponents(c-u,m-p,v-S,F-D).normalize(),t[5].setComponents(c+u,m+p,v+S,F+D).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSprite(e){return Xr.center.set(0,0,0),Xr.radius=.7071067811865476,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ko.x=s.normal.x>0?e.max.x:e.min.x,Ko.y=s.normal.y>0?e.max.y:e.min.y,Ko.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xd(){let l=null,e=!1,t=null,i=null;function s(o,u){t(o,u),i=l.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=l.requestAnimationFrame(s),e=!0)},stop:function(){l.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){l=o}}}function Iy(l,e){const t=e.isWebGL2,i=new WeakMap;function s(d,p){const m=d.array,x=d.usage,M=l.createBuffer();l.bindBuffer(p,M),l.bufferData(p,m,x),d.onUploadCallback();let S;if(m instanceof Float32Array)S=5126;else if(m instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)S=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=5123;else if(m instanceof Int16Array)S=5122;else if(m instanceof Uint32Array)S=5125;else if(m instanceof Int32Array)S=5124;else if(m instanceof Int8Array)S=5120;else if(m instanceof Uint8Array)S=5121;else if(m instanceof Uint8ClampedArray)S=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:M,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version}}function o(d,p,m){const x=p.array,M=p.updateRange;l.bindBuffer(m,d),M.count===-1?l.bufferSubData(m,0,x):(t?l.bufferSubData(m,M.offset*x.BYTES_PER_ELEMENT,x,M.offset,M.count):l.bufferSubData(m,M.offset*x.BYTES_PER_ELEMENT,x.subarray(M.offset,M.offset+M.count)),M.count=-1)}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=i.get(d);p&&(l.deleteBuffer(p.buffer),i.delete(d))}function h(d,p){if(d.isGLBufferAttribute){const x=i.get(d);(!x||x.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const m=i.get(d);m===void 0?i.set(d,s(d,p)):m.version<d.version&&(o(m.buffer,d,p),m.version=d.version)}return{get:u,remove:c,update:h}}class Tc extends fn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,u=t/2,c=Math.floor(i),h=Math.floor(s),d=c+1,p=h+1,m=e/c,x=t/h,M=[],S=[],v=[],g=[];for(let b=0;b<p;b++){const D=b*x-u;for(let F=0;F<d;F++){const A=F*m-o;S.push(A,-D,0),v.push(0,0,1),g.push(F/c),g.push(1-b/h)}}for(let b=0;b<h;b++)for(let D=0;D<c;D++){const F=D+d*b,A=D+d*(b+1),C=D+1+d*(b+1),z=D+1+d*b;M.push(F,A,z),M.push(A,C,z)}this.setIndex(M),this.setAttribute("position",new Et(S,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(g,2))}static fromJSON(e){return new Tc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Oy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ny=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,By=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gy="vec3 transformed = vec3( position );",Wy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hy=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Vy=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,ky=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$y=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,eS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tS=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,rS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oS="gl_FragColor = linearToOutputTexel( gl_FragColor );",aS=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,vS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_S=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MS=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,yS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,SS=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,bS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,TS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ES=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,AS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,CS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,LS=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,PS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,RS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,OS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,NS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,US=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,BS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,XS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,qS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,YS=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,QS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,$S=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,eb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,tb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ib=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,rb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ob=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ab=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ub=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,fb=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hb=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,db=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,gb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_b=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sb=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,bb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,wb=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Tb=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Eb=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ab=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Cb=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Lb=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Db=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rb=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fb=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ob=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,zb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ub=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vb=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qb=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$b=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ew=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ow=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,aw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,tt={alphamap_fragment:Fy,alphamap_pars_fragment:Oy,alphatest_fragment:Ny,alphatest_pars_fragment:zy,aomap_fragment:Uy,aomap_pars_fragment:By,begin_vertex:Gy,beginnormal_vertex:Wy,bsdfs:Hy,iridescence_fragment:Vy,bumpmap_pars_fragment:ky,clipping_planes_fragment:Xy,clipping_planes_pars_fragment:qy,clipping_planes_pars_vertex:Yy,clipping_planes_vertex:jy,color_fragment:Zy,color_pars_fragment:Ky,color_pars_vertex:Jy,color_vertex:Qy,common:$y,cube_uv_reflection_fragment:eS,defaultnormal_vertex:tS,displacementmap_pars_vertex:nS,displacementmap_vertex:iS,emissivemap_fragment:rS,emissivemap_pars_fragment:sS,encodings_fragment:oS,encodings_pars_fragment:aS,envmap_fragment:lS,envmap_common_pars_fragment:cS,envmap_pars_fragment:uS,envmap_pars_vertex:fS,envmap_physical_pars_fragment:SS,envmap_vertex:hS,fog_vertex:dS,fog_pars_vertex:pS,fog_fragment:mS,fog_pars_fragment:gS,gradientmap_pars_fragment:xS,lightmap_fragment:vS,lightmap_pars_fragment:_S,lights_lambert_vertex:MS,lights_pars_begin:yS,lights_toon_fragment:bS,lights_toon_pars_fragment:wS,lights_phong_fragment:TS,lights_phong_pars_fragment:ES,lights_physical_fragment:AS,lights_physical_pars_fragment:CS,lights_fragment_begin:LS,lights_fragment_maps:DS,lights_fragment_end:PS,logdepthbuf_fragment:RS,logdepthbuf_pars_fragment:IS,logdepthbuf_pars_vertex:FS,logdepthbuf_vertex:OS,map_fragment:NS,map_pars_fragment:zS,map_particle_fragment:US,map_particle_pars_fragment:BS,metalnessmap_fragment:GS,metalnessmap_pars_fragment:WS,morphcolor_vertex:HS,morphnormal_vertex:VS,morphtarget_pars_vertex:kS,morphtarget_vertex:XS,normal_fragment_begin:qS,normal_fragment_maps:YS,normal_pars_fragment:jS,normal_pars_vertex:ZS,normal_vertex:KS,normalmap_pars_fragment:JS,clearcoat_normal_fragment_begin:QS,clearcoat_normal_fragment_maps:$S,clearcoat_pars_fragment:eb,iridescence_pars_fragment:tb,output_fragment:nb,packing:ib,premultiplied_alpha_fragment:rb,project_vertex:sb,dithering_fragment:ob,dithering_pars_fragment:ab,roughnessmap_fragment:lb,roughnessmap_pars_fragment:cb,shadowmap_pars_fragment:ub,shadowmap_pars_vertex:fb,shadowmap_vertex:hb,shadowmask_pars_fragment:db,skinbase_vertex:pb,skinning_pars_vertex:mb,skinning_vertex:gb,skinnormal_vertex:xb,specularmap_fragment:vb,specularmap_pars_fragment:_b,tonemapping_fragment:Mb,tonemapping_pars_fragment:yb,transmission_fragment:Sb,transmission_pars_fragment:bb,uv_pars_fragment:wb,uv_pars_vertex:Tb,uv_vertex:Eb,uv2_pars_fragment:Ab,uv2_pars_vertex:Cb,uv2_vertex:Lb,worldpos_vertex:Db,background_vert:Pb,background_frag:Rb,cube_vert:Ib,cube_frag:Fb,depth_vert:Ob,depth_frag:Nb,distanceRGBA_vert:zb,distanceRGBA_frag:Ub,equirect_vert:Bb,equirect_frag:Gb,linedashed_vert:Wb,linedashed_frag:Hb,meshbasic_vert:Vb,meshbasic_frag:kb,meshlambert_vert:Xb,meshlambert_frag:qb,meshmatcap_vert:Yb,meshmatcap_frag:jb,meshnormal_vert:Zb,meshnormal_frag:Kb,meshphong_vert:Jb,meshphong_frag:Qb,meshphysical_vert:$b,meshphysical_frag:ew,meshtoon_vert:tw,meshtoon_frag:nw,points_vert:iw,points_frag:rw,shadow_vert:sw,shadow_frag:ow,sprite_vert:aw,sprite_frag:lw},Ce={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new zn},uv2Transform:{value:new zn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zn}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zn}}},$n={basic:{uniforms:Jt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Jt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.fog,Ce.lights,{emissive:{value:new at(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Jt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Jt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Jt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new at(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Jt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Jt([Ce.points,Ce.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Jt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Jt([Ce.common,Ce.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Jt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Jt([Ce.sprite,Ce.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new zn},t2D:{value:null}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},cube:{uniforms:Jt([Ce.envmap,{opacity:{value:1}}]),vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:Jt([Ce.common,Ce.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:Jt([Ce.lights,Ce.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};$n.physical={uniforms:Jt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Le(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};function cw(l,e,t,i,s,o){const u=new at(0);let c=s===!0?0:1,h,d,p=null,m=0,x=null;function M(v,g){let b=!1,D=g.isScene===!0?g.background:null;D&&D.isTexture&&(D=e.get(D));const F=l.xr,A=F.getSession&&F.getSession();A&&A.environmentBlendMode==="additive"&&(D=null),D===null?S(u,c):D&&D.isColor&&(S(D,1),b=!0),(l.autoClear||b)&&l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil),D&&(D.isCubeTexture||D.mapping===aa)?(d===void 0&&(d=new Mi(new Gs(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:ts($n.cube.uniforms),vertexShader:$n.cube.vertexShader,fragmentShader:$n.cube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,z,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=D,d.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,(p!==D||m!==D.version||x!==l.toneMapping)&&(d.material.needsUpdate=!0,p=D,m=D.version,x=l.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):D&&D.isTexture&&(h===void 0&&(h=new Mi(new Tc(2,2),new Vt({name:"BackgroundMaterial",uniforms:ts($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Fs,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=D,D.matrixAutoUpdate===!0&&D.updateMatrix(),h.material.uniforms.uvTransform.value.copy(D.matrix),(p!==D||m!==D.version||x!==l.toneMapping)&&(h.material.needsUpdate=!0,p=D,m=D.version,x=l.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function S(v,g){t.buffers.color.setClear(v.r,v.g,v.b,g,o)}return{getClearColor:function(){return u},setClearColor:function(v,g=1){u.set(v),c=g,S(u,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,S(u,c)},render:M}}function uw(l,e,t,i){const s=l.getParameter(34921),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),u=i.isWebGL2||o!==null,c={},h=g(null);let d=h,p=!1;function m(k,ne,Z,le,se){let K=!1;if(u){const $=v(le,Z,ne);d!==$&&(d=$,M(d.object)),K=b(k,le,Z,se),K&&D(k,le,Z,se)}else{const $=ne.wireframe===!0;(d.geometry!==le.id||d.program!==Z.id||d.wireframe!==$)&&(d.geometry=le.id,d.program=Z.id,d.wireframe=$,K=!0)}se!==null&&t.update(se,34963),(K||p)&&(p=!1,T(k,ne,Z,le),se!==null&&l.bindBuffer(34963,t.get(se).buffer))}function x(){return i.isWebGL2?l.createVertexArray():o.createVertexArrayOES()}function M(k){return i.isWebGL2?l.bindVertexArray(k):o.bindVertexArrayOES(k)}function S(k){return i.isWebGL2?l.deleteVertexArray(k):o.deleteVertexArrayOES(k)}function v(k,ne,Z){const le=Z.wireframe===!0;let se=c[k.id];se===void 0&&(se={},c[k.id]=se);let K=se[ne.id];K===void 0&&(K={},se[ne.id]=K);let $=K[le];return $===void 0&&($=g(x()),K[le]=$),$}function g(k){const ne=[],Z=[],le=[];for(let se=0;se<s;se++)ne[se]=0,Z[se]=0,le[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:Z,attributeDivisors:le,object:k,attributes:{},index:null}}function b(k,ne,Z,le){const se=d.attributes,K=ne.attributes;let $=0;const me=Z.getAttributes();for(const de in me)if(me[de].location>=0){const Re=se[de];let Ie=K[de];if(Ie===void 0&&(de==="instanceMatrix"&&k.instanceMatrix&&(Ie=k.instanceMatrix),de==="instanceColor"&&k.instanceColor&&(Ie=k.instanceColor)),Re===void 0||Re.attribute!==Ie||Ie&&Re.data!==Ie.data)return!0;$++}return d.attributesNum!==$||d.index!==le}function D(k,ne,Z,le){const se={},K=ne.attributes;let $=0;const me=Z.getAttributes();for(const de in me)if(me[de].location>=0){let Re=K[de];Re===void 0&&(de==="instanceMatrix"&&k.instanceMatrix&&(Re=k.instanceMatrix),de==="instanceColor"&&k.instanceColor&&(Re=k.instanceColor));const Ie={};Ie.attribute=Re,Re&&Re.data&&(Ie.data=Re.data),se[de]=Ie,$++}d.attributes=se,d.attributesNum=$,d.index=le}function F(){const k=d.newAttributes;for(let ne=0,Z=k.length;ne<Z;ne++)k[ne]=0}function A(k){C(k,0)}function C(k,ne){const Z=d.newAttributes,le=d.enabledAttributes,se=d.attributeDivisors;Z[k]=1,le[k]===0&&(l.enableVertexAttribArray(k),le[k]=1),se[k]!==ne&&((i.isWebGL2?l:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,ne),se[k]=ne)}function z(){const k=d.newAttributes,ne=d.enabledAttributes;for(let Z=0,le=ne.length;Z<le;Z++)ne[Z]!==k[Z]&&(l.disableVertexAttribArray(Z),ne[Z]=0)}function W(k,ne,Z,le,se,K){i.isWebGL2===!0&&(Z===5124||Z===5125)?l.vertexAttribIPointer(k,ne,Z,se,K):l.vertexAttribPointer(k,ne,Z,le,se,K)}function T(k,ne,Z,le){if(i.isWebGL2===!1&&(k.isInstancedMesh||le.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;F();const se=le.attributes,K=Z.getAttributes(),$=ne.defaultAttributeValues;for(const me in K){const de=K[me];if(de.location>=0){let we=se[me];if(we===void 0&&(me==="instanceMatrix"&&k.instanceMatrix&&(we=k.instanceMatrix),me==="instanceColor"&&k.instanceColor&&(we=k.instanceColor)),we!==void 0){const Re=we.normalized,Ie=we.itemSize,te=t.get(we);if(te===void 0)continue;const Q=te.buffer,xe=te.type,De=te.bytesPerElement;if(we.isInterleavedBufferAttribute){const Me=we.data,ke=Me.stride,Ue=we.offset;if(Me.isInstancedInterleavedBuffer){for(let Be=0;Be<de.locationSize;Be++)C(de.location+Be,Me.meshPerAttribute);k.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Be=0;Be<de.locationSize;Be++)A(de.location+Be);l.bindBuffer(34962,Q);for(let Be=0;Be<de.locationSize;Be++)W(de.location+Be,Ie/de.locationSize,xe,Re,ke*De,(Ue+Ie/de.locationSize*Be)*De)}else{if(we.isInstancedBufferAttribute){for(let Me=0;Me<de.locationSize;Me++)C(de.location+Me,we.meshPerAttribute);k.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Me=0;Me<de.locationSize;Me++)A(de.location+Me);l.bindBuffer(34962,Q);for(let Me=0;Me<de.locationSize;Me++)W(de.location+Me,Ie/de.locationSize,xe,Re,Ie*De,Ie/de.locationSize*Me*De)}}else if($!==void 0){const Re=$[me];if(Re!==void 0)switch(Re.length){case 2:l.vertexAttrib2fv(de.location,Re);break;case 3:l.vertexAttrib3fv(de.location,Re);break;case 4:l.vertexAttrib4fv(de.location,Re);break;default:l.vertexAttrib1fv(de.location,Re)}}}}z()}function O(){re();for(const k in c){const ne=c[k];for(const Z in ne){const le=ne[Z];for(const se in le)S(le[se].object),delete le[se];delete ne[Z]}delete c[k]}}function V(k){if(c[k.id]===void 0)return;const ne=c[k.id];for(const Z in ne){const le=ne[Z];for(const se in le)S(le[se].object),delete le[se];delete ne[Z]}delete c[k.id]}function X(k){for(const ne in c){const Z=c[ne];if(Z[k.id]===void 0)continue;const le=Z[k.id];for(const se in le)S(le[se].object),delete le[se];delete Z[k.id]}}function re(){he(),p=!0,d!==h&&(d=h,M(d.object))}function he(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:m,reset:re,resetDefaultState:he,dispose:O,releaseStatesOfGeometry:V,releaseStatesOfProgram:X,initAttributes:F,enableAttribute:A,disableUnusedAttributes:z}}function fw(l,e,t,i){const s=i.isWebGL2;let o;function u(d){o=d}function c(d,p){l.drawArrays(o,d,p),t.update(p,o,1)}function h(d,p,m){if(m===0)return;let x,M;if(s)x=l,M="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[M](o,d,p,m),t.update(p,o,m)}this.setMode=u,this.render=c,this.renderInstances=h}function hw(l,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const W=e.get("EXT_texture_filter_anisotropic");i=l.getParameter(W.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(W){if(W==="highp"){if(l.getShaderPrecisionFormat(35633,36338).precision>0&&l.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";W="mediump"}return W==="mediump"&&l.getShaderPrecisionFormat(35633,36337).precision>0&&l.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext!="undefined"&&l instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&l instanceof WebGL2ComputeRenderingContext;let c=t.precision!==void 0?t.precision:"highp";const h=o(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=u||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,m=l.getParameter(34930),x=l.getParameter(35660),M=l.getParameter(3379),S=l.getParameter(34076),v=l.getParameter(34921),g=l.getParameter(36347),b=l.getParameter(36348),D=l.getParameter(36349),F=x>0,A=u||e.has("OES_texture_float"),C=F&&A,z=u?l.getParameter(36183):0;return{isWebGL2:u,drawBuffers:d,getMaxAnisotropy:s,getMaxPrecision:o,precision:c,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:g,maxVaryings:b,maxFragmentUniforms:D,vertexTextures:F,floatFragmentTextures:A,floatVertexTextures:C,maxSamples:z}}function dw(l){const e=this;let t=null,i=0,s=!1,o=!1;const u=new ar,c=new zn,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(m,x,M){const S=m.length!==0||x||i!==0||s;return s=x,t=p(m,M,0),i=m.length,S},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1,d()},this.setState=function(m,x,M){const S=m.clippingPlanes,v=m.clipIntersection,g=m.clipShadows,b=l.get(m);if(!s||S===null||S.length===0||o&&!g)o?p(null):d();else{const D=o?0:i,F=D*4;let A=b.clippingState||null;h.value=A,A=p(S,x,F,M);for(let C=0;C!==F;++C)A[C]=t[C];b.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=D}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(m,x,M,S){const v=m!==null?m.length:0;let g=null;if(v!==0){if(g=h.value,S!==!0||g===null){const b=M+v*4,D=x.matrixWorldInverse;c.getNormalMatrix(D),(g===null||g.length<b)&&(g=new Float32Array(b));for(let F=0,A=M;F!==v;++F,A+=4)u.copy(m[F]).applyMatrix4(D,c),u.normal.toArray(g,A),g[A+3]=u.constant}h.value=g,h.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function pw(l){let e=new WeakMap;function t(u,c){return c===fc?u.mapping=Qr:c===hc&&(u.mapping=$r),u}function i(u){if(u&&u.isTexture&&u.isRenderTargetTexture===!1){const c=u.mapping;if(c===fc||c===hc)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const d=new Dy(h.height/2);return d.fromEquirectangularTexture(l,u),e.set(u,d),u.addEventListener("dispose",s),t(d.texture,u.mapping)}else return null}}return u}function s(u){const c=u.target;c.removeEventListener("dispose",s);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class ua extends Vd{constructor(e=-1,t=1,i=1,s=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,u=i+e,c=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,u=o+d*this.view.width,c-=p*this.view.offsetY,h=c-p*this.view.height}this.projectionMatrix.makeOrthographic(o,u,c,h,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const jr=4,Gh=[.125,.215,.35,.446,.526,.582],cr=20,Ql=new ua,Wh=new at;let $l=null;const lr=(1+Math.sqrt(5))/2,qr=1/lr,Hh=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,lr,qr),new B(0,lr,-qr),new B(qr,0,lr),new B(-qr,0,lr),new B(lr,qr,0),new B(-lr,qr,0)];class Vh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){$l=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($l),e.scissorTest=!1,Jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qr||e.mapping===$r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$l=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Os,format:ei,encoding:mr,depthBuffer:!1},s=kh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mw(o)),this._blurMaterial=gw(o,e,t)}return s}_compileMaterial(e){const t=new Mi(this._lodPlanes[0],e);this._renderer.compile(t,Ql)}_sceneToCubeUV(e,t,i,s){const c=new Nn(90,1,t,i),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,x=p.toneMapping;p.getClearColor(Wh),p.toneMapping=yi,p.autoClear=!1;const M=new bc({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),S=new Mi(new Gs,M);let v=!1;const g=e.background;g?g.isColor&&(M.color.copy(g),e.background=null,v=!0):(M.color.copy(Wh),v=!0);for(let b=0;b<6;b++){const D=b%3;D===0?(c.up.set(0,h[b],0),c.lookAt(d[b],0,0)):D===1?(c.up.set(0,0,h[b]),c.lookAt(0,d[b],0)):(c.up.set(0,h[b],0),c.lookAt(0,0,d[b]));const F=this._cubeSize;Jo(s,D*F,b>2?F:0,F,F),p.setRenderTarget(s),v&&p.render(S,c),p.render(e,c)}S.geometry.dispose(),S.material.dispose(),p.toneMapping=x,p.autoClear=m,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Qr||e.mapping===$r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());const o=s?this._cubemapMaterial:this._equirectMaterial,u=new Mi(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e;const h=this._cubeSize;Jo(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(u,Ql)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),u=Hh[(s-1)%Hh.length];this._blur(e,s-1,s,o,u)}t.autoClear=i}_blur(e,t,i,s,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,s,"latitudinal",o),this._halfBlur(u,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,u,c){const h=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new Mi(this._lodPlanes[s],d),x=d.uniforms,M=this._sizeLods[i]-1,S=isFinite(o)?Math.PI/(2*M):2*Math.PI/(2*cr-1),v=o/S,g=isFinite(o)?1+Math.floor(p*v):cr;g>cr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${cr}`);const b=[];let D=0;for(let W=0;W<cr;++W){const T=W/v,O=Math.exp(-T*T/2);b.push(O),W===0?D+=O:W<g&&(D+=2*O)}for(let W=0;W<b.length;W++)b[W]=b[W]/D;x.envMap.value=e.texture,x.samples.value=g,x.weights.value=b,x.latitudinal.value=u==="latitudinal",c&&(x.poleAxis.value=c);const{_lodMax:F}=this;x.dTheta.value=S,x.mipInt.value=F-i;const A=this._sizeLods[s],C=3*A*(s>F-jr?s-F+jr:0),z=4*(this._cubeSize-A);Jo(t,C,z,3*A,2*A),h.setRenderTarget(t),h.render(m,Ql)}}function mw(l){const e=[],t=[],i=[];let s=l;const o=l-jr+1+Gh.length;for(let u=0;u<o;u++){const c=Math.pow(2,s);t.push(c);let h=1/c;u>l-jr?h=Gh[u-l+jr-1]:u===0&&(h=0),i.push(h);const d=1/(c-2),p=-d,m=1+d,x=[p,p,m,p,m,m,p,p,m,m,p,m],M=6,S=6,v=3,g=2,b=1,D=new Float32Array(v*S*M),F=new Float32Array(g*S*M),A=new Float32Array(b*S*M);for(let z=0;z<M;z++){const W=z%3*2/3-1,T=z>2?0:-1,O=[W,T,0,W+2/3,T,0,W+2/3,T+1,0,W,T,0,W+2/3,T+1,0,W,T+1,0];D.set(O,v*S*z),F.set(x,g*S*z);const V=[z,z,z,z,z,z];A.set(V,b*S*z)}const C=new fn;C.setAttribute("position",new ti(D,v)),C.setAttribute("uv",new ti(F,g)),C.setAttribute("faceIndex",new ti(A,b)),e.push(C),s>jr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function kh(l,e,t){const i=new yn(l,e,t);return i.texture.mapping=aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jo(l,e,t,i,s){l.viewport.set(e,t,i,s),l.scissor.set(e,t,i,s)}function gw(l,e,t){const i=new Float32Array(cr),s=new B(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Xh(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function qh(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Ec(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xw(l){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const h=c.mapping,d=h===fc||h===hc,p=h===Qr||h===$r;if(d||p)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let m=e.get(c);return t===null&&(t=new Vh(l)),m=d?t.fromEquirectangular(c,m):t.fromCubemap(c,m),e.set(c,m),m.texture}else{if(e.has(c))return e.get(c).texture;{const m=c.image;if(d&&m&&m.height>0||p&&m&&s(m)){t===null&&(t=new Vh(l));const x=d?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,x),c.addEventListener("dispose",o),x.texture}else return null}}}return c}function s(c){let h=0;const d=6;for(let p=0;p<d;p++)c[p]!==void 0&&h++;return h===d}function o(c){const h=c.target;h.removeEventListener("dispose",o);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function vw(l){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=l.getExtension("WEBGL_depth_texture")||l.getExtension("MOZ_WEBGL_depth_texture")||l.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=l.getExtension("EXT_texture_filter_anisotropic")||l.getExtension("MOZ_EXT_texture_filter_anisotropic")||l.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=l.getExtension("WEBGL_compressed_texture_s3tc")||l.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=l.getExtension("WEBGL_compressed_texture_pvrtc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=l.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function _w(l,e,t,i){const s={},o=new WeakMap;function u(m){const x=m.target;x.index!==null&&e.remove(x.index);for(const S in x.attributes)e.remove(x.attributes[S]);x.removeEventListener("dispose",u),delete s[x.id];const M=o.get(x);M&&(e.remove(M),o.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(m,x){return s[x.id]===!0||(x.addEventListener("dispose",u),s[x.id]=!0,t.memory.geometries++),x}function h(m){const x=m.attributes;for(const S in x)e.update(x[S],34962);const M=m.morphAttributes;for(const S in M){const v=M[S];for(let g=0,b=v.length;g<b;g++)e.update(v[g],34962)}}function d(m){const x=[],M=m.index,S=m.attributes.position;let v=0;if(M!==null){const D=M.array;v=M.version;for(let F=0,A=D.length;F<A;F+=3){const C=D[F+0],z=D[F+1],W=D[F+2];x.push(C,z,z,W,W,C)}}else{const D=S.array;v=S.version;for(let F=0,A=D.length/3-1;F<A;F+=3){const C=F+0,z=F+1,W=F+2;x.push(C,z,z,W,W,C)}}const g=new(Fd(x)?Hd:Wd)(x,1);g.version=v;const b=o.get(m);b&&e.remove(b),o.set(m,g)}function p(m){const x=o.get(m);if(x){const M=m.index;M!==null&&x.version<M.version&&d(m)}else d(m);return o.get(m)}return{get:c,update:h,getWireframeAttribute:p}}function Mw(l,e,t,i){const s=i.isWebGL2;let o;function u(x){o=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function p(x,M){l.drawElements(o,M,c,x*h),t.update(M,o,1)}function m(x,M,S){if(S===0)return;let v,g;if(s)v=l,g="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[g](o,M,c,x*h,S),t.update(M,o,S)}this.setMode=u,this.setIndex=d,this.render=p,this.renderInstances=m}function yw(l){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,u,c){switch(t.calls++,u){case 4:t.triangles+=c*(o/3);break;case 1:t.lines+=c*(o/2);break;case 3:t.lines+=c*(o-1);break;case 2:t.lines+=c*o;break;case 0:t.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Sw(l,e){return l[0]-e[0]}function bw(l,e){return Math.abs(e[1])-Math.abs(l[1])}function ec(l,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Uint8Array?t=255:i instanceof Uint16Array?t=65535:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),l.divideScalar(t)}function ww(l,e,t){const i={},s=new Float32Array(8),o=new WeakMap,u=new _t,c=[];for(let d=0;d<8;d++)c[d]=[d,0];function h(d,p,m,x){const M=d.morphTargetInfluences;if(e.isWebGL2===!0){const S=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=S!==void 0?S.length:0;let g=o.get(p);if(g===void 0||g.count!==v){let ne=function(){he.dispose(),o.delete(p),p.removeEventListener("dispose",ne)};g!==void 0&&g.texture.dispose();const F=p.morphAttributes.position!==void 0,A=p.morphAttributes.normal!==void 0,C=p.morphAttributes.color!==void 0,z=p.morphAttributes.position||[],W=p.morphAttributes.normal||[],T=p.morphAttributes.color||[];let O=0;F===!0&&(O=1),A===!0&&(O=2),C===!0&&(O=3);let V=p.attributes.position.count*O,X=1;V>e.maxTextureSize&&(X=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const re=new Float32Array(V*X*4*v),he=new Ud(re,V,X,v);he.type=Hi,he.needsUpdate=!0;const k=O*4;for(let Z=0;Z<v;Z++){const le=z[Z],se=W[Z],K=T[Z],$=V*X*4*Z;for(let me=0;me<le.count;me++){const de=me*k;F===!0&&(u.fromBufferAttribute(le,me),le.normalized===!0&&ec(u,le),re[$+de+0]=u.x,re[$+de+1]=u.y,re[$+de+2]=u.z,re[$+de+3]=0),A===!0&&(u.fromBufferAttribute(se,me),se.normalized===!0&&ec(u,se),re[$+de+4]=u.x,re[$+de+5]=u.y,re[$+de+6]=u.z,re[$+de+7]=0),C===!0&&(u.fromBufferAttribute(K,me),K.normalized===!0&&ec(u,K),re[$+de+8]=u.x,re[$+de+9]=u.y,re[$+de+10]=u.z,re[$+de+11]=K.itemSize===4?u.w:1)}}g={count:v,texture:he,size:new Le(V,X)},o.set(p,g),p.addEventListener("dispose",ne)}let b=0;for(let F=0;F<M.length;F++)b+=M[F];const D=p.morphTargetsRelative?1:1-b;x.getUniforms().setValue(l,"morphTargetBaseInfluence",D),x.getUniforms().setValue(l,"morphTargetInfluences",M),x.getUniforms().setValue(l,"morphTargetsTexture",g.texture,t),x.getUniforms().setValue(l,"morphTargetsTextureSize",g.size)}else{const S=M===void 0?0:M.length;let v=i[p.id];if(v===void 0||v.length!==S){v=[];for(let A=0;A<S;A++)v[A]=[A,0];i[p.id]=v}for(let A=0;A<S;A++){const C=v[A];C[0]=A,C[1]=M[A]}v.sort(bw);for(let A=0;A<8;A++)A<S&&v[A][1]?(c[A][0]=v[A][0],c[A][1]=v[A][1]):(c[A][0]=Number.MAX_SAFE_INTEGER,c[A][1]=0);c.sort(Sw);const g=p.morphAttributes.position,b=p.morphAttributes.normal;let D=0;for(let A=0;A<8;A++){const C=c[A],z=C[0],W=C[1];z!==Number.MAX_SAFE_INTEGER&&W?(g&&p.getAttribute("morphTarget"+A)!==g[z]&&p.setAttribute("morphTarget"+A,g[z]),b&&p.getAttribute("morphNormal"+A)!==b[z]&&p.setAttribute("morphNormal"+A,b[z]),s[A]=W,D+=W):(g&&p.hasAttribute("morphTarget"+A)===!0&&p.deleteAttribute("morphTarget"+A),b&&p.hasAttribute("morphNormal"+A)===!0&&p.deleteAttribute("morphNormal"+A),s[A]=0)}const F=p.morphTargetsRelative?1:1-D;x.getUniforms().setValue(l,"morphTargetBaseInfluence",F),x.getUniforms().setValue(l,"morphTargetInfluences",s)}}return{update:h}}function Tw(l,e,t,i){let s=new WeakMap;function o(h){const d=i.render.frame,p=h.geometry,m=e.get(h,p);return s.get(m)!==d&&(e.update(m),s.set(m,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),t.update(h.instanceMatrix,34962),h.instanceColor!==null&&t.update(h.instanceColor,34962)),m}function u(){s=new WeakMap}function c(h){const d=h.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:u}}const qd=new Qt,Yd=new Ud,jd=new gy,Zd=new kd,Yh=[],jh=[],Zh=new Float32Array(16),Kh=new Float32Array(9),Jh=new Float32Array(4);function is(l,e,t){const i=l[0];if(i<=0||i>0)return l;const s=e*t;let o=Yh[s];if(o===void 0&&(o=new Float32Array(s),Yh[s]=o),e!==0){i.toArray(o,0);for(let u=1,c=0;u!==e;++u)c+=t,l[u].toArray(o,c)}return o}function sn(l,e){if(l.length!==e.length)return!1;for(let t=0,i=l.length;t<i;t++)if(l[t]!==e[t])return!1;return!0}function on(l,e){for(let t=0,i=e.length;t<i;t++)l[t]=e[t]}function fa(l,e){let t=jh[e];t===void 0&&(t=new Int32Array(e),jh[e]=t);for(let i=0;i!==e;++i)t[i]=l.allocateTextureUnit();return t}function Ew(l,e){const t=this.cache;t[0]!==e&&(l.uniform1f(this.addr,e),t[0]=e)}function Aw(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(l.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;l.uniform2fv(this.addr,e),on(t,e)}}function Cw(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(l.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(l.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;l.uniform3fv(this.addr,e),on(t,e)}}function Lw(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(l.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;l.uniform4fv(this.addr,e),on(t,e)}}function Dw(l,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;l.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;Jh.set(i),l.uniformMatrix2fv(this.addr,!1,Jh),on(t,i)}}function Pw(l,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;l.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;Kh.set(i),l.uniformMatrix3fv(this.addr,!1,Kh),on(t,i)}}function Rw(l,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;l.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;Zh.set(i),l.uniformMatrix4fv(this.addr,!1,Zh),on(t,i)}}function Iw(l,e){const t=this.cache;t[0]!==e&&(l.uniform1i(this.addr,e),t[0]=e)}function Fw(l,e){const t=this.cache;sn(t,e)||(l.uniform2iv(this.addr,e),on(t,e))}function Ow(l,e){const t=this.cache;sn(t,e)||(l.uniform3iv(this.addr,e),on(t,e))}function Nw(l,e){const t=this.cache;sn(t,e)||(l.uniform4iv(this.addr,e),on(t,e))}function zw(l,e){const t=this.cache;t[0]!==e&&(l.uniform1ui(this.addr,e),t[0]=e)}function Uw(l,e){const t=this.cache;sn(t,e)||(l.uniform2uiv(this.addr,e),on(t,e))}function Bw(l,e){const t=this.cache;sn(t,e)||(l.uniform3uiv(this.addr,e),on(t,e))}function Gw(l,e){const t=this.cache;sn(t,e)||(l.uniform4uiv(this.addr,e),on(t,e))}function Ww(l,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(l.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||qd,s)}function Hw(l,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(l.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||jd,s)}function Vw(l,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(l.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Zd,s)}function kw(l,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(l.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Yd,s)}function Xw(l){switch(l){case 5126:return Ew;case 35664:return Aw;case 35665:return Cw;case 35666:return Lw;case 35674:return Dw;case 35675:return Pw;case 35676:return Rw;case 5124:case 35670:return Iw;case 35667:case 35671:return Fw;case 35668:case 35672:return Ow;case 35669:case 35673:return Nw;case 5125:return zw;case 36294:return Uw;case 36295:return Bw;case 36296:return Gw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ww;case 35679:case 36299:case 36307:return Hw;case 35680:case 36300:case 36308:case 36293:return Vw;case 36289:case 36303:case 36311:case 36292:return kw}}function qw(l,e){l.uniform1fv(this.addr,e)}function Yw(l,e){const t=is(e,this.size,2);l.uniform2fv(this.addr,t)}function jw(l,e){const t=is(e,this.size,3);l.uniform3fv(this.addr,t)}function Zw(l,e){const t=is(e,this.size,4);l.uniform4fv(this.addr,t)}function Kw(l,e){const t=is(e,this.size,4);l.uniformMatrix2fv(this.addr,!1,t)}function Jw(l,e){const t=is(e,this.size,9);l.uniformMatrix3fv(this.addr,!1,t)}function Qw(l,e){const t=is(e,this.size,16);l.uniformMatrix4fv(this.addr,!1,t)}function $w(l,e){l.uniform1iv(this.addr,e)}function e1(l,e){l.uniform2iv(this.addr,e)}function t1(l,e){l.uniform3iv(this.addr,e)}function n1(l,e){l.uniform4iv(this.addr,e)}function i1(l,e){l.uniform1uiv(this.addr,e)}function r1(l,e){l.uniform2uiv(this.addr,e)}function s1(l,e){l.uniform3uiv(this.addr,e)}function o1(l,e){l.uniform4uiv(this.addr,e)}function a1(l,e,t){const i=e.length,s=fa(t,i);l.uniform1iv(this.addr,s);for(let o=0;o!==i;++o)t.setTexture2D(e[o]||qd,s[o])}function l1(l,e,t){const i=e.length,s=fa(t,i);l.uniform1iv(this.addr,s);for(let o=0;o!==i;++o)t.setTexture3D(e[o]||jd,s[o])}function c1(l,e,t){const i=e.length,s=fa(t,i);l.uniform1iv(this.addr,s);for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Zd,s[o])}function u1(l,e,t){const i=e.length,s=fa(t,i);l.uniform1iv(this.addr,s);for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Yd,s[o])}function f1(l){switch(l){case 5126:return qw;case 35664:return Yw;case 35665:return jw;case 35666:return Zw;case 35674:return Kw;case 35675:return Jw;case 35676:return Qw;case 5124:case 35670:return $w;case 35667:case 35671:return e1;case 35668:case 35672:return t1;case 35669:case 35673:return n1;case 5125:return i1;case 36294:return r1;case 36295:return s1;case 36296:return o1;case 35678:case 36198:case 36298:case 36306:case 35682:return a1;case 35679:case 36299:case 36307:return l1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return u1}}class h1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Xw(t.type)}}class d1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=f1(t.type)}}class p1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,u=s.length;o!==u;++o){const c=s[o];c.setValue(e,t[c.id],i)}}}const tc=/(\w+)(\])?(\[|\.)?/g;function Qh(l,e){l.seq.push(e),l.map[e.id]=e}function m1(l,e,t){const i=l.name,s=i.length;for(tc.lastIndex=0;;){const o=tc.exec(i),u=tc.lastIndex;let c=o[1];const h=o[2]==="]",d=o[3];if(h&&(c=c|0),d===void 0||d==="["&&u+2===s){Qh(t,d===void 0?new h1(c,l,e):new d1(c,l,e));break}else{let m=t.map[c];m===void 0&&(m=new p1(c),Qh(t,m)),t=m}}}class ia{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),u=e.getUniformLocation(t,o.name);m1(o,u,this)}}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,u=t.length;o!==u;++o){const c=t[o],h=i[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const u=e[s];u.id in t&&i.push(u)}return i}}function $h(l,e,t){const i=l.createShader(e);return l.shaderSource(i,t),l.compileShader(i),i}let g1=0;function x1(l,e){const t=l.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=s;u<o;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}function v1(l){switch(l){case mr:return["Linear","( value )"];case Dt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",l),["Linear","( value )"]}}function ed(l,e,t){const i=l.getShaderParameter(e,35713),s=l.getShaderInfoLog(e).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const u=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+x1(l.getShaderSource(e),u)}else return s}function _1(l,e){const t=v1(e);return"vec4 "+l+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function M1(l,e){let t;switch(e){case DM:t="Linear";break;case PM:t="Reinhard";break;case RM:t="OptimizedCineon";break;case IM:t="ACESFilmic";break;case FM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+l+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function y1(l){return[l.extensionDerivatives||!!l.envMapCubeUVHeight||l.bumpMap||l.tangentSpaceNormalMap||l.clearcoatNormalMap||l.flatShading||l.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(l.extensionFragDepth||l.logarithmicDepthBuffer)&&l.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",l.extensionDrawBuffers&&l.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(l.extensionShaderTextureLOD||l.envMap||l.transmission)&&l.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ps).join(`
`)}function S1(l){const e=[];for(const t in l){const i=l[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function b1(l,e){const t={},i=l.getProgramParameter(e,35721);for(let s=0;s<i;s++){const o=l.getActiveAttrib(e,s),u=o.name;let c=1;o.type===35674&&(c=2),o.type===35675&&(c=3),o.type===35676&&(c=4),t[u]={type:o.type,location:l.getAttribLocation(e,u),locationSize:c}}return t}function Ps(l){return l!==""}function td(l,e){return l.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nd(l,e){return l.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const w1=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(l){return l.replace(w1,T1)}function T1(l,e){const t=tt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return xc(t)}const E1=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,A1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(l){return l.replace(A1,Kd).replace(E1,C1)}function C1(l,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Kd(l,e,t,i)}function Kd(l,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function rd(l){let e="precision "+l.precision+` float;
precision `+l.precision+" int;";return l.precision==="highp"?e+=`
#define HIGH_PRECISION`:l.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function L1(l){let e="SHADOWMAP_TYPE_BASIC";return l.shadowMapType===Ed?e="SHADOWMAP_TYPE_PCF":l.shadowMapType===aM?e="SHADOWMAP_TYPE_PCF_SOFT":l.shadowMapType===Ds&&(e="SHADOWMAP_TYPE_VSM"),e}function D1(l){let e="ENVMAP_TYPE_CUBE";if(l.envMap)switch(l.envMapMode){case Qr:case $r:e="ENVMAP_TYPE_CUBE";break;case aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function P1(l){let e="ENVMAP_MODE_REFLECTION";if(l.envMap)switch(l.envMapMode){case $r:e="ENVMAP_MODE_REFRACTION";break}return e}function R1(l){let e="ENVMAP_BLENDING_NONE";if(l.envMap)switch(l.combine){case Ld:e="ENVMAP_BLENDING_MULTIPLY";break;case CM:e="ENVMAP_BLENDING_MIX";break;case LM:e="ENVMAP_BLENDING_ADD";break}return e}function I1(l){const e=l.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function F1(l,e,t,i){const s=l.getContext(),o=t.defines;let u=t.vertexShader,c=t.fragmentShader;const h=L1(t),d=D1(t),p=P1(t),m=R1(t),x=I1(t),M=t.isWebGL2?"":y1(t),S=S1(o),v=s.createProgram();let g,b,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[S].filter(Ps).join(`
`),g.length>0&&(g+=`
`),b=[M,S].filter(Ps).join(`
`),b.length>0&&(b+=`
`)):(g=[rd(t),"#define SHADER_NAME "+t.shaderName,S,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),b=[M,rd(t),"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?tt.tonemapping_pars_fragment:"",t.toneMapping!==yi?M1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.encodings_pars_fragment,_1("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ps).join(`
`)),u=xc(u),u=td(u,t),u=nd(u,t),c=xc(c),c=td(c,t),c=nd(c,t),u=id(u),c=id(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,b=["#define varying in",t.glslVersion===Ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const F=D+g+u,A=D+b+c,C=$h(s,35633,F),z=$h(s,35632,A);if(s.attachShader(v,C),s.attachShader(v,z),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v),l.debug.checkShaderErrors){const O=s.getProgramInfoLog(v).trim(),V=s.getShaderInfoLog(C).trim(),X=s.getShaderInfoLog(z).trim();let re=!0,he=!0;if(s.getProgramParameter(v,35714)===!1){re=!1;const k=ed(s,C,"vertex"),ne=ed(s,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,35715)+`

Program Info Log: `+O+`
`+k+`
`+ne)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(V===""||X==="")&&(he=!1);he&&(this.diagnostics={runnable:re,programLog:O,vertexShader:{log:V,prefix:g},fragmentShader:{log:X,prefix:b}})}s.deleteShader(C),s.deleteShader(z);let W;this.getUniforms=function(){return W===void 0&&(W=new ia(s,v)),W};let T;return this.getAttributes=function(){return T===void 0&&(T=b1(s,v)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=g1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=z,this}let O1=0;class N1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new z1(e);t.set(e,i)}return t.get(e)}}class z1{constructor(e){this.id=O1++,this.code=e,this.usedTimes=0}}function U1(l,e,t,i,s,o,u){const c=new Gd,h=new N1,d=[],p=s.isWebGL2,m=s.logarithmicDepthBuffer,x=s.vertexTextures;let M=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T,O,V,X,re){const he=X.fog,k=re.geometry,ne=T.isMeshStandardMaterial?X.environment:null,Z=(T.isMeshStandardMaterial?t:e).get(T.envMap||ne),le=!!Z&&Z.mapping===aa?Z.image.height:null,se=S[T.type];T.precision!==null&&(M=s.getMaxPrecision(T.precision),M!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",M,"instead."));const K=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,$=K!==void 0?K.length:0;let me=0;k.morphAttributes.position!==void 0&&(me=1),k.morphAttributes.normal!==void 0&&(me=2),k.morphAttributes.color!==void 0&&(me=3);let de,we,Re,Ie;if(se){const ke=$n[se];de=ke.vertexShader,we=ke.fragmentShader}else de=T.vertexShader,we=T.fragmentShader,h.update(T),Re=h.getVertexShaderID(T),Ie=h.getFragmentShaderID(T);const te=l.getRenderTarget(),Q=T.alphaTest>0,xe=T.clearcoat>0,De=T.iridescence>0;return{isWebGL2:p,shaderID:se,shaderName:T.type,vertexShader:de,fragmentShader:we,defines:T.defines,customVertexShaderID:Re,customFragmentShaderID:Ie,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:M,instancing:re.isInstancedMesh===!0,instancingColor:re.isInstancedMesh===!0&&re.instanceColor!==null,supportsVertexTextures:x,outputEncoding:te===null?l.outputEncoding:te.isXRRenderTarget===!0?te.texture.encoding:mr,map:!!T.map,matcap:!!T.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:le,lightMap:!!T.lightMap,aoMap:!!T.aoMap,emissiveMap:!!T.emissiveMap,bumpMap:!!T.bumpMap,normalMap:!!T.normalMap,objectSpaceNormalMap:T.normalMapType===JM,tangentSpaceNormalMap:T.normalMapType===yc,decodeVideoTexture:!!T.map&&T.map.isVideoTexture===!0&&T.map.encoding===Dt,clearcoat:xe,clearcoatMap:xe&&!!T.clearcoatMap,clearcoatRoughnessMap:xe&&!!T.clearcoatRoughnessMap,clearcoatNormalMap:xe&&!!T.clearcoatNormalMap,iridescence:De,iridescenceMap:De&&!!T.iridescenceMap,iridescenceThicknessMap:De&&!!T.iridescenceThicknessMap,displacementMap:!!T.displacementMap,roughnessMap:!!T.roughnessMap,metalnessMap:!!T.metalnessMap,specularMap:!!T.specularMap,specularIntensityMap:!!T.specularIntensityMap,specularColorMap:!!T.specularColorMap,opaque:T.transparent===!1&&T.blending===Zr,alphaMap:!!T.alphaMap,alphaTest:Q,gradientMap:!!T.gradientMap,sheen:T.sheen>0,sheenColorMap:!!T.sheenColorMap,sheenRoughnessMap:!!T.sheenRoughnessMap,transmission:T.transmission>0,transmissionMap:!!T.transmissionMap,thicknessMap:!!T.thicknessMap,combine:T.combine,vertexTangents:!!T.normalMap&&!!k.attributes.tangent,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUvs:!!T.map||!!T.bumpMap||!!T.normalMap||!!T.specularMap||!!T.alphaMap||!!T.emissiveMap||!!T.roughnessMap||!!T.metalnessMap||!!T.clearcoatMap||!!T.clearcoatRoughnessMap||!!T.clearcoatNormalMap||!!T.iridescenceMap||!!T.iridescenceThicknessMap||!!T.displacementMap||!!T.transmissionMap||!!T.thicknessMap||!!T.specularIntensityMap||!!T.specularColorMap||!!T.sheenColorMap||!!T.sheenRoughnessMap,uvsVertexOnly:!(!!T.map||!!T.bumpMap||!!T.normalMap||!!T.specularMap||!!T.alphaMap||!!T.emissiveMap||!!T.roughnessMap||!!T.metalnessMap||!!T.clearcoatNormalMap||!!T.iridescenceMap||!!T.iridescenceThicknessMap||T.transmission>0||!!T.transmissionMap||!!T.thicknessMap||!!T.specularIntensityMap||!!T.specularColorMap||T.sheen>0||!!T.sheenColorMap||!!T.sheenRoughnessMap)&&!!T.displacementMap,fog:!!he,useFog:T.fog===!0,fogExp2:he&&he.isFogExp2,flatShading:!!T.flatShading,sizeAttenuation:T.sizeAttenuation,logarithmicDepthBuffer:m,skinning:re.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:me,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:l.shadowMap.enabled&&V.length>0,shadowMapType:l.shadowMap.type,toneMapping:T.toneMapped?l.toneMapping:yi,physicallyCorrectLights:l.physicallyCorrectLights,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Jr,flipSided:T.side===Zn,useDepthPacking:!!T.depthPacking,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:T.extensions&&T.extensions.derivatives,extensionFragDepth:T.extensions&&T.extensions.fragDepth,extensionDrawBuffers:T.extensions&&T.extensions.drawBuffers,extensionShaderTextureLOD:T.extensions&&T.extensions.shaderTextureLOD,rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function g(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)O.push(V),O.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(b(O,T),D(O,T),O.push(l.outputEncoding)),O.push(T.customProgramCacheKey),O.join()}function b(T,O){T.push(O.precision),T.push(O.outputEncoding),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.combine),T.push(O.vertexUvs),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function D(T,O){c.disableAll(),O.isWebGL2&&c.enable(0),O.supportsVertexTextures&&c.enable(1),O.instancing&&c.enable(2),O.instancingColor&&c.enable(3),O.map&&c.enable(4),O.matcap&&c.enable(5),O.envMap&&c.enable(6),O.lightMap&&c.enable(7),O.aoMap&&c.enable(8),O.emissiveMap&&c.enable(9),O.bumpMap&&c.enable(10),O.normalMap&&c.enable(11),O.objectSpaceNormalMap&&c.enable(12),O.tangentSpaceNormalMap&&c.enable(13),O.clearcoat&&c.enable(14),O.clearcoatMap&&c.enable(15),O.clearcoatRoughnessMap&&c.enable(16),O.clearcoatNormalMap&&c.enable(17),O.iridescence&&c.enable(18),O.iridescenceMap&&c.enable(19),O.iridescenceThicknessMap&&c.enable(20),O.displacementMap&&c.enable(21),O.specularMap&&c.enable(22),O.roughnessMap&&c.enable(23),O.metalnessMap&&c.enable(24),O.gradientMap&&c.enable(25),O.alphaMap&&c.enable(26),O.alphaTest&&c.enable(27),O.vertexColors&&c.enable(28),O.vertexAlphas&&c.enable(29),O.vertexUvs&&c.enable(30),O.vertexTangents&&c.enable(31),O.uvsVertexOnly&&c.enable(32),O.fog&&c.enable(33),T.push(c.mask),c.disableAll(),O.useFog&&c.enable(0),O.flatShading&&c.enable(1),O.logarithmicDepthBuffer&&c.enable(2),O.skinning&&c.enable(3),O.morphTargets&&c.enable(4),O.morphNormals&&c.enable(5),O.morphColors&&c.enable(6),O.premultipliedAlpha&&c.enable(7),O.shadowMapEnabled&&c.enable(8),O.physicallyCorrectLights&&c.enable(9),O.doubleSided&&c.enable(10),O.flipSided&&c.enable(11),O.useDepthPacking&&c.enable(12),O.dithering&&c.enable(13),O.specularIntensityMap&&c.enable(14),O.specularColorMap&&c.enable(15),O.transmission&&c.enable(16),O.transmissionMap&&c.enable(17),O.thicknessMap&&c.enable(18),O.sheen&&c.enable(19),O.sheenColorMap&&c.enable(20),O.sheenRoughnessMap&&c.enable(21),O.decodeVideoTexture&&c.enable(22),O.opaque&&c.enable(23),T.push(c.mask)}function F(T){const O=S[T.type];let V;if(O){const X=$n[O];V=Si.clone(X.uniforms)}else V=T.uniforms;return V}function A(T,O){let V;for(let X=0,re=d.length;X<re;X++){const he=d[X];if(he.cacheKey===O){V=he,++V.usedTimes;break}}return V===void 0&&(V=new F1(l,O,T,o),d.push(V)),V}function C(T){if(--T.usedTimes===0){const O=d.indexOf(T);d[O]=d[d.length-1],d.pop(),T.destroy()}}function z(T){h.remove(T)}function W(){h.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:F,acquireProgram:A,releaseProgram:C,releaseShaderCache:z,programs:d,dispose:W}}function B1(){let l=new WeakMap;function e(o){let u=l.get(o);return u===void 0&&(u={},l.set(o,u)),u}function t(o){l.delete(o)}function i(o,u,c){l.get(o)[u]=c}function s(){l=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function G1(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.material.id!==e.material.id?l.material.id-e.material.id:l.z!==e.z?l.z-e.z:l.id-e.id}function sd(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.z!==e.z?e.z-l.z:l.id-e.id}function od(){const l=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function u(m,x,M,S,v,g){let b=l[e];return b===void 0?(b={id:m.id,object:m,geometry:x,material:M,groupOrder:S,renderOrder:m.renderOrder,z:v,group:g},l[e]=b):(b.id=m.id,b.object=m,b.geometry=x,b.material=M,b.groupOrder=S,b.renderOrder=m.renderOrder,b.z=v,b.group=g),e++,b}function c(m,x,M,S,v,g){const b=u(m,x,M,S,v,g);M.transmission>0?i.push(b):M.transparent===!0?s.push(b):t.push(b)}function h(m,x,M,S,v,g){const b=u(m,x,M,S,v,g);M.transmission>0?i.unshift(b):M.transparent===!0?s.unshift(b):t.unshift(b)}function d(m,x){t.length>1&&t.sort(m||G1),i.length>1&&i.sort(x||sd),s.length>1&&s.sort(x||sd)}function p(){for(let m=e,x=l.length;m<x;m++){const M=l[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:c,unshift:h,finish:p,sort:d}}function W1(){let l=new WeakMap;function e(i,s){let o;return l.has(i)===!1?(o=new od,l.set(i,[o])):s>=l.get(i).length?(o=new od,l.get(i).push(o)):o=l.get(i)[s],o}function t(){l=new WeakMap}return{get:e,dispose:t}}function H1(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new at};break;case"SpotLight":t={position:new B,direction:new B,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new B,halfWidth:new B,halfHeight:new B};break}return l[e.id]=t,t}}}function V1(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[e.id]=t,t}}}let k1=0;function X1(l,e){return(e.castShadow?1:0)-(l.castShadow?1:0)}function q1(l,e){const t=new H1,i=V1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let p=0;p<9;p++)s.probe.push(new B);const o=new B,u=new It,c=new It;function h(p,m){let x=0,M=0,S=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let v=0,g=0,b=0,D=0,F=0,A=0,C=0,z=0;p.sort(X1);const W=m!==!0?Math.PI:1;for(let O=0,V=p.length;O<V;O++){const X=p[O],re=X.color,he=X.intensity,k=X.distance,ne=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)x+=re.r*he*W,M+=re.g*he*W,S+=re.b*he*W;else if(X.isLightProbe)for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(X.sh.coefficients[Z],he);else if(X.isDirectionalLight){const Z=t.get(X);if(Z.color.copy(X.color).multiplyScalar(X.intensity*W),X.castShadow){const le=X.shadow,se=i.get(X);se.shadowBias=le.bias,se.shadowNormalBias=le.normalBias,se.shadowRadius=le.radius,se.shadowMapSize=le.mapSize,s.directionalShadow[v]=se,s.directionalShadowMap[v]=ne,s.directionalShadowMatrix[v]=X.shadow.matrix,A++}s.directional[v]=Z,v++}else if(X.isSpotLight){const Z=t.get(X);if(Z.position.setFromMatrixPosition(X.matrixWorld),Z.color.copy(re).multiplyScalar(he*W),Z.distance=k,Z.coneCos=Math.cos(X.angle),Z.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),Z.decay=X.decay,X.castShadow){const le=X.shadow,se=i.get(X);se.shadowBias=le.bias,se.shadowNormalBias=le.normalBias,se.shadowRadius=le.radius,se.shadowMapSize=le.mapSize,s.spotShadow[b]=se,s.spotShadowMap[b]=ne,s.spotShadowMatrix[b]=X.shadow.matrix,z++}s.spot[b]=Z,b++}else if(X.isRectAreaLight){const Z=t.get(X);Z.color.copy(re).multiplyScalar(he),Z.halfWidth.set(X.width*.5,0,0),Z.halfHeight.set(0,X.height*.5,0),s.rectArea[D]=Z,D++}else if(X.isPointLight){const Z=t.get(X);if(Z.color.copy(X.color).multiplyScalar(X.intensity*W),Z.distance=X.distance,Z.decay=X.decay,X.castShadow){const le=X.shadow,se=i.get(X);se.shadowBias=le.bias,se.shadowNormalBias=le.normalBias,se.shadowRadius=le.radius,se.shadowMapSize=le.mapSize,se.shadowCameraNear=le.camera.near,se.shadowCameraFar=le.camera.far,s.pointShadow[g]=se,s.pointShadowMap[g]=ne,s.pointShadowMatrix[g]=X.shadow.matrix,C++}s.point[g]=Z,g++}else if(X.isHemisphereLight){const Z=t.get(X);Z.skyColor.copy(X.color).multiplyScalar(he*W),Z.groundColor.copy(X.groundColor).multiplyScalar(he*W),s.hemi[F]=Z,F++}}D>0&&(e.isWebGL2||l.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_FLOAT_1,s.rectAreaLTC2=Ce.LTC_FLOAT_2):l.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_HALF_1,s.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=x,s.ambient[1]=M,s.ambient[2]=S;const T=s.hash;(T.directionalLength!==v||T.pointLength!==g||T.spotLength!==b||T.rectAreaLength!==D||T.hemiLength!==F||T.numDirectionalShadows!==A||T.numPointShadows!==C||T.numSpotShadows!==z)&&(s.directional.length=v,s.spot.length=b,s.rectArea.length=D,s.point.length=g,s.hemi.length=F,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=z,s.spotShadowMap.length=z,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=C,s.spotShadowMatrix.length=z,T.directionalLength=v,T.pointLength=g,T.spotLength=b,T.rectAreaLength=D,T.hemiLength=F,T.numDirectionalShadows=A,T.numPointShadows=C,T.numSpotShadows=z,s.version=k1++)}function d(p,m){let x=0,M=0,S=0,v=0,g=0;const b=m.matrixWorldInverse;for(let D=0,F=p.length;D<F;D++){const A=p[D];if(A.isDirectionalLight){const C=s.directional[x];C.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(b),x++}else if(A.isSpotLight){const C=s.spot[S];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(b),C.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(b),S++}else if(A.isRectAreaLight){const C=s.rectArea[v];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(b),c.identity(),u.copy(A.matrixWorld),u.premultiply(b),c.extractRotation(u),C.halfWidth.set(A.width*.5,0,0),C.halfHeight.set(0,A.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),v++}else if(A.isPointLight){const C=s.point[M];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(b),M++}else if(A.isHemisphereLight){const C=s.hemi[g];C.direction.setFromMatrixPosition(A.matrixWorld),C.direction.transformDirection(b),g++}}}return{setup:h,setupView:d,state:s}}function ad(l,e){const t=new q1(l,e),i=[],s=[];function o(){i.length=0,s.length=0}function u(m){i.push(m)}function c(m){s.push(m)}function h(m){t.setup(i,m)}function d(m){t.setupView(i,m)}return{init:o,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:h,setupLightsView:d,pushLight:u,pushShadow:c}}function Y1(l,e){let t=new WeakMap;function i(o,u=0){let c;return t.has(o)===!1?(c=new ad(l,e),t.set(o,[c])):u>=t.get(o).length?(c=new ad(l,e),t.get(o).push(c)):c=t.get(o)[u],c}function s(){t=new WeakMap}return{get:i,dispose:s}}class j1 extends gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Z1 extends gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new B,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const K1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Q1(l,e,t){let i=new wc;const s=new Le,o=new Le,u=new _t,c=new j1({depthPacking:KM}),h=new Z1,d={},p=t.maxTextureSize,m={0:Zn,1:Fs,2:Jr},x=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:K1,fragmentShader:J1}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const S=new fn;S.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Mi(S,x),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ed,this.render=function(A,C,z){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const W=l.getRenderTarget(),T=l.getActiveCubeFace(),O=l.getActiveMipmapLevel(),V=l.state;V.setBlending(Vi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);for(let X=0,re=A.length;X<re;X++){const he=A[X],k=he.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const ne=k.getFrameExtents();if(s.multiply(ne),o.copy(k.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/ne.x),s.x=o.x*ne.x,k.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/ne.y),s.y=o.y*ne.y,k.mapSize.y=o.y)),k.map===null){const le=this.type!==Ds?{minFilter:Ht,magFilter:Ht}:{};k.map=new yn(s.x,s.y,le),k.map.texture.name=he.name+".shadowMap",k.camera.updateProjectionMatrix()}l.setRenderTarget(k.map),l.clear();const Z=k.getViewportCount();for(let le=0;le<Z;le++){const se=k.getViewport(le);u.set(o.x*se.x,o.y*se.y,o.x*se.z,o.y*se.w),V.viewport(u),k.updateMatrices(he,le),i=k.getFrustum(),F(C,z,k.camera,he,this.type)}k.isPointLightShadow!==!0&&this.type===Ds&&b(k,z),k.needsUpdate=!1}g.needsUpdate=!1,l.setRenderTarget(W,T,O)};function b(A,C){const z=e.update(v);x.defines.VSM_SAMPLES!==A.blurSamples&&(x.defines.VSM_SAMPLES=A.blurSamples,M.defines.VSM_SAMPLES=A.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new yn(s.x,s.y)),x.uniforms.shadow_pass.value=A.map.texture,x.uniforms.resolution.value=A.mapSize,x.uniforms.radius.value=A.radius,l.setRenderTarget(A.mapPass),l.clear(),l.renderBufferDirect(C,null,z,x,v,null),M.uniforms.shadow_pass.value=A.mapPass.texture,M.uniforms.resolution.value=A.mapSize,M.uniforms.radius.value=A.radius,l.setRenderTarget(A.map),l.clear(),l.renderBufferDirect(C,null,z,M,v,null)}function D(A,C,z,W,T,O){let V=null;const X=z.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(X!==void 0?V=X:V=z.isPointLight===!0?h:c,l.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0){const re=V.uuid,he=C.uuid;let k=d[re];k===void 0&&(k={},d[re]=k);let ne=k[he];ne===void 0&&(ne=V.clone(),k[he]=ne),V=ne}return V.visible=C.visible,V.wireframe=C.wireframe,O===Ds?V.side=C.shadowSide!==null?C.shadowSide:C.side:V.side=C.shadowSide!==null?C.shadowSide:m[C.side],V.alphaMap=C.alphaMap,V.alphaTest=C.alphaTest,V.clipShadows=C.clipShadows,V.clippingPlanes=C.clippingPlanes,V.clipIntersection=C.clipIntersection,V.displacementMap=C.displacementMap,V.displacementScale=C.displacementScale,V.displacementBias=C.displacementBias,V.wireframeLinewidth=C.wireframeLinewidth,V.linewidth=C.linewidth,z.isPointLight===!0&&V.isMeshDistanceMaterial===!0&&(V.referencePosition.setFromMatrixPosition(z.matrixWorld),V.nearDistance=W,V.farDistance=T),V}function F(A,C,z,W,T){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===Ds)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld);const X=e.update(A),re=A.material;if(Array.isArray(re)){const he=X.groups;for(let k=0,ne=he.length;k<ne;k++){const Z=he[k],le=re[Z.materialIndex];if(le&&le.visible){const se=D(A,le,W,z.near,z.far,T);l.renderBufferDirect(z,null,X,se,A,Z)}}}else if(re.visible){const he=D(A,re,W,z.near,z.far,T);l.renderBufferDirect(z,null,X,he,A,null)}}const V=A.children;for(let X=0,re=V.length;X<re;X++)F(V[X],C,z,W,T)}}function $1(l,e,t){const i=t.isWebGL2;function s(){let N=!1;const _e=new _t;let ge=null;const ze=new _t(0,0,0,0);return{setMask:function(Ee){ge!==Ee&&!N&&(l.colorMask(Ee,Ee,Ee,Ee),ge=Ee)},setLocked:function(Ee){N=Ee},setClear:function(Ee,Oe,ye,Xe,ct){ct===!0&&(Ee*=Xe,Oe*=Xe,ye*=Xe),_e.set(Ee,Oe,ye,Xe),ze.equals(_e)===!1&&(l.clearColor(Ee,Oe,ye,Xe),ze.copy(_e))},reset:function(){N=!1,ge=null,ze.set(-1,0,0,0)}}}function o(){let N=!1,_e=null,ge=null,ze=null;return{setTest:function(Ee){Ee?Ie(2929):te(2929)},setMask:function(Ee){_e!==Ee&&!N&&(l.depthMask(Ee),_e=Ee)},setFunc:function(Ee){if(ge!==Ee){if(Ee)switch(Ee){case yM:l.depthFunc(512);break;case SM:l.depthFunc(519);break;case bM:l.depthFunc(513);break;case uc:l.depthFunc(515);break;case wM:l.depthFunc(514);break;case TM:l.depthFunc(518);break;case EM:l.depthFunc(516);break;case AM:l.depthFunc(517);break;default:l.depthFunc(515)}else l.depthFunc(515);ge=Ee}},setLocked:function(Ee){N=Ee},setClear:function(Ee){ze!==Ee&&(l.clearDepth(Ee),ze=Ee)},reset:function(){N=!1,_e=null,ge=null,ze=null}}}function u(){let N=!1,_e=null,ge=null,ze=null,Ee=null,Oe=null,ye=null,Xe=null,ct=null;return{setTest:function(ut){N||(ut?Ie(2960):te(2960))},setMask:function(ut){_e!==ut&&!N&&(l.stencilMask(ut),_e=ut)},setFunc:function(ut,kt,Sn){(ge!==ut||ze!==kt||Ee!==Sn)&&(l.stencilFunc(ut,kt,Sn),ge=ut,ze=kt,Ee=Sn)},setOp:function(ut,kt,Sn){(Oe!==ut||ye!==kt||Xe!==Sn)&&(l.stencilOp(ut,kt,Sn),Oe=ut,ye=kt,Xe=Sn)},setLocked:function(ut){N=ut},setClear:function(ut){ct!==ut&&(l.clearStencil(ut),ct=ut)},reset:function(){N=!1,_e=null,ge=null,ze=null,Ee=null,Oe=null,ye=null,Xe=null,ct=null}}}const c=new s,h=new o,d=new u;let p={},m={},x=new WeakMap,M=[],S=null,v=!1,g=null,b=null,D=null,F=null,A=null,C=null,z=null,W=!1,T=null,O=null,V=null,X=null,re=null;const he=l.getParameter(35661);let k=!1,ne=0;const Z=l.getParameter(7938);Z.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(Z)[1]),k=ne>=1):Z.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),k=ne>=2);let le=null,se={};const K=l.getParameter(3088),$=l.getParameter(2978),me=new _t().fromArray(K),de=new _t().fromArray($);function we(N,_e,ge){const ze=new Uint8Array(4),Ee=l.createTexture();l.bindTexture(N,Ee),l.texParameteri(N,10241,9728),l.texParameteri(N,10240,9728);for(let Oe=0;Oe<ge;Oe++)l.texImage2D(_e+Oe,0,6408,1,1,0,6408,5121,ze);return Ee}const Re={};Re[3553]=we(3553,3553,1),Re[34067]=we(34067,34069,6),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Ie(2929),h.setFunc(uc),nt(!1),Mt(Qf),Ie(2884),Ue(Vi);function Ie(N){p[N]!==!0&&(l.enable(N),p[N]=!0)}function te(N){p[N]!==!1&&(l.disable(N),p[N]=!1)}function Q(N,_e){return m[N]!==_e?(l.bindFramebuffer(N,_e),m[N]=_e,i&&(N===36009&&(m[36160]=_e),N===36160&&(m[36009]=_e)),!0):!1}function xe(N,_e){let ge=M,ze=!1;if(N)if(ge=x.get(_e),ge===void 0&&(ge=[],x.set(_e,ge)),N.isWebGLMultipleRenderTargets){const Ee=N.texture;if(ge.length!==Ee.length||ge[0]!==36064){for(let Oe=0,ye=Ee.length;Oe<ye;Oe++)ge[Oe]=36064+Oe;ge.length=Ee.length,ze=!0}}else ge[0]!==36064&&(ge[0]=36064,ze=!0);else ge[0]!==1029&&(ge[0]=1029,ze=!0);ze&&(t.isWebGL2?l.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function De(N){return S!==N?(l.useProgram(N),S=N,!0):!1}const Me={[Yr]:32774,[uM]:32778,[fM]:32779};if(i)Me[th]=32775,Me[nh]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(Me[th]=N.MIN_EXT,Me[nh]=N.MAX_EXT)}const ke={[hM]:0,[dM]:1,[pM]:768,[Ad]:770,[MM]:776,[vM]:774,[gM]:772,[mM]:769,[Cd]:771,[_M]:775,[xM]:773};function Ue(N,_e,ge,ze,Ee,Oe,ye,Xe){if(N===Vi){v===!0&&(te(3042),v=!1);return}if(v===!1&&(Ie(3042),v=!0),N!==cM){if(N!==g||Xe!==W){if((b!==Yr||A!==Yr)&&(l.blendEquation(32774),b=Yr,A=Yr),Xe)switch(N){case Zr:l.blendFuncSeparate(1,771,1,771);break;case cc:l.blendFunc(1,1);break;case $f:l.blendFuncSeparate(0,769,0,1);break;case eh:l.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Zr:l.blendFuncSeparate(770,771,1,771);break;case cc:l.blendFunc(770,1);break;case $f:l.blendFuncSeparate(0,769,0,1);break;case eh:l.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}D=null,F=null,C=null,z=null,g=N,W=Xe}return}Ee=Ee||_e,Oe=Oe||ge,ye=ye||ze,(_e!==b||Ee!==A)&&(l.blendEquationSeparate(Me[_e],Me[Ee]),b=_e,A=Ee),(ge!==D||ze!==F||Oe!==C||ye!==z)&&(l.blendFuncSeparate(ke[ge],ke[ze],ke[Oe],ke[ye]),D=ge,F=ze,C=Oe,z=ye),g=N,W=null}function Be(N,_e){N.side===Jr?te(2884):Ie(2884);let ge=N.side===Zn;_e&&(ge=!ge),nt(ge),N.blending===Zr&&N.transparent===!1?Ue(Vi):Ue(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),h.setFunc(N.depthFunc),h.setTest(N.depthTest),h.setMask(N.depthWrite),c.setMask(N.colorWrite);const ze=N.stencilWrite;d.setTest(ze),ze&&(d.setMask(N.stencilWriteMask),d.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),d.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),wt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Ie(32926):te(32926)}function nt(N){T!==N&&(N?l.frontFace(2304):l.frontFace(2305),T=N)}function Mt(N){N!==sM?(Ie(2884),N!==O&&(N===Qf?l.cullFace(1029):N===oM?l.cullFace(1028):l.cullFace(1032))):te(2884),O=N}function Ot(N){N!==V&&(k&&l.lineWidth(N),V=N)}function wt(N,_e,ge){N?(Ie(32823),(X!==_e||re!==ge)&&(l.polygonOffset(_e,ge),X=_e,re=ge)):te(32823)}function At(N){N?Ie(3089):te(3089)}function ft(N){N===void 0&&(N=33984+he-1),le!==N&&(l.activeTexture(N),le=N)}function Bt(N,_e){le===null&&ft();let ge=se[le];ge===void 0&&(ge={type:void 0,texture:void 0},se[le]=ge),(ge.type!==N||ge.texture!==_e)&&(l.bindTexture(N,_e||Re[N]),ge.type=N,ge.texture=_e)}function yt(){const N=se[le];N!==void 0&&N.type!==void 0&&(l.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function R(){try{l.compressedTexImage2D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function E(){try{l.texSubImage2D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{l.texSubImage3D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{l.compressedTexSubImage2D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{l.texStorage2D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{l.texStorage3D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{l.texImage2D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function L(){try{l.texImage3D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(N){me.equals(N)===!1&&(l.scissor(N.x,N.y,N.z,N.w),me.copy(N))}function be(N){de.equals(N)===!1&&(l.viewport(N.x,N.y,N.z,N.w),de.copy(N))}function ve(){l.disable(3042),l.disable(2884),l.disable(2929),l.disable(32823),l.disable(3089),l.disable(2960),l.disable(32926),l.blendEquation(32774),l.blendFunc(1,0),l.blendFuncSeparate(1,0,1,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(513),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(519,0,4294967295),l.stencilOp(7680,7680,7680),l.clearStencil(0),l.cullFace(1029),l.frontFace(2305),l.polygonOffset(0,0),l.activeTexture(33984),l.bindFramebuffer(36160,null),i===!0&&(l.bindFramebuffer(36009,null),l.bindFramebuffer(36008,null)),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),p={},le=null,se={},m={},x=new WeakMap,M=[],S=null,v=!1,g=null,b=null,D=null,F=null,A=null,C=null,z=null,W=!1,T=null,O=null,V=null,X=null,re=null,me.set(0,0,l.canvas.width,l.canvas.height),de.set(0,0,l.canvas.width,l.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Ie,disable:te,bindFramebuffer:Q,drawBuffers:xe,useProgram:De,setBlending:Ue,setMaterial:Be,setFlipSided:nt,setCullFace:Mt,setLineWidth:Ot,setPolygonOffset:wt,setScissorTest:At,activeTexture:ft,bindTexture:Bt,unbindTexture:yt,compressedTexImage2D:R,texImage2D:Ne,texImage3D:L,texStorage2D:Se,texStorage3D:Te,texSubImage2D:E,texSubImage3D:ie,compressedTexSubImage2D:pe,scissor:ue,viewport:be,reset:ve}}function eT(l,e,t,i,s,o,u){const c=s.isWebGL2,h=s.maxTextures,d=s.maxCubemapSize,p=s.maxTextureSize,m=s.maxSamples,x=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,M=/OculusBrowser/g.test(navigator.userAgent),S=new WeakMap;let v;const g=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(R,E){return b?new OffscreenCanvas(R,E):Ns("canvas")}function F(R,E,ie,pe){let Se=1;if((R.width>pe||R.height>pe)&&(Se=pe/Math.max(R.width,R.height)),Se<1||E===!0)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap){const Te=E?sa:Math.floor,Ne=Te(Se*R.width),L=Te(Se*R.height);v===void 0&&(v=D(Ne,L));const ue=ie?D(Ne,L):v;return ue.width=Ne,ue.height=L,ue.getContext("2d").drawImage(R,0,0,Ne,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ne+"x"+L+")."),ue}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function A(R){return gc(R.width)&&gc(R.height)}function C(R){return c?!1:R.wrapS!==jn||R.wrapT!==jn||R.minFilter!==Ht&&R.minFilter!==Mn}function z(R,E){return R.generateMipmaps&&E&&R.minFilter!==Ht&&R.minFilter!==Mn}function W(R){l.generateMipmap(R)}function T(R,E,ie,pe,Se=!1){if(c===!1)return E;if(R!==null){if(l[R]!==void 0)return l[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Te=E;return E===6403&&(ie===5126&&(Te=33326),ie===5131&&(Te=33325),ie===5121&&(Te=33321)),E===33319&&(ie===5126&&(Te=33328),ie===5131&&(Te=33327),ie===5121&&(Te=33323)),E===6408&&(ie===5126&&(Te=34836),ie===5131&&(Te=34842),ie===5121&&(Te=pe===Dt&&Se===!1?35907:32856),ie===32819&&(Te=32854),ie===32820&&(Te=32855)),(Te===33325||Te===33326||Te===33327||Te===33328||Te===34842||Te===34836)&&e.get("EXT_color_buffer_float"),Te}function O(R,E,ie){return z(R,ie)===!0||R.isFramebufferTexture&&R.minFilter!==Ht&&R.minFilter!==Mn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function V(R){return R===Ht||R===ih||R===rh?9728:9729}function X(R){const E=R.target;E.removeEventListener("dispose",X),he(E),E.isVideoTexture&&S.delete(E)}function re(R){const E=R.target;E.removeEventListener("dispose",re),ne(E)}function he(R){const E=i.get(R);if(E.__webglInit===void 0)return;const ie=R.source,pe=g.get(ie);if(pe){const Se=pe[E.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&k(R),Object.keys(pe).length===0&&g.delete(ie)}i.remove(R)}function k(R){const E=i.get(R);l.deleteTexture(E.__webglTexture);const ie=R.source,pe=g.get(ie);delete pe[E.__cacheKey],u.memory.textures--}function ne(R){const E=R.texture,ie=i.get(R),pe=i.get(E);if(pe.__webglTexture!==void 0&&(l.deleteTexture(pe.__webglTexture),u.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++)l.deleteFramebuffer(ie.__webglFramebuffer[Se]),ie.__webglDepthbuffer&&l.deleteRenderbuffer(ie.__webglDepthbuffer[Se]);else{if(l.deleteFramebuffer(ie.__webglFramebuffer),ie.__webglDepthbuffer&&l.deleteRenderbuffer(ie.__webglDepthbuffer),ie.__webglMultisampledFramebuffer&&l.deleteFramebuffer(ie.__webglMultisampledFramebuffer),ie.__webglColorRenderbuffer)for(let Se=0;Se<ie.__webglColorRenderbuffer.length;Se++)ie.__webglColorRenderbuffer[Se]&&l.deleteRenderbuffer(ie.__webglColorRenderbuffer[Se]);ie.__webglDepthRenderbuffer&&l.deleteRenderbuffer(ie.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let Se=0,Te=E.length;Se<Te;Se++){const Ne=i.get(E[Se]);Ne.__webglTexture&&(l.deleteTexture(Ne.__webglTexture),u.memory.textures--),i.remove(E[Se])}i.remove(E),i.remove(R)}let Z=0;function le(){Z=0}function se(){const R=Z;return R>=h&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+h),Z+=1,R}function K(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.encoding),E.join()}function $(R,E){const ie=i.get(R);if(R.isVideoTexture&&Bt(R),R.isRenderTargetTexture===!1&&R.version>0&&ie.__version!==R.version){const pe=R.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(ie,R,E);return}}t.activeTexture(33984+E),t.bindTexture(3553,ie.__webglTexture)}function me(R,E){const ie=i.get(R);if(R.version>0&&ie.__version!==R.version){xe(ie,R,E);return}t.activeTexture(33984+E),t.bindTexture(35866,ie.__webglTexture)}function de(R,E){const ie=i.get(R);if(R.version>0&&ie.__version!==R.version){xe(ie,R,E);return}t.activeTexture(33984+E),t.bindTexture(32879,ie.__webglTexture)}function we(R,E){const ie=i.get(R);if(R.version>0&&ie.__version!==R.version){De(ie,R,E);return}t.activeTexture(33984+E),t.bindTexture(34067,ie.__webglTexture)}const Re={[dc]:10497,[jn]:33071,[pc]:33648},Ie={[Ht]:9728,[ih]:9984,[rh]:9986,[Mn]:9729,[OM]:9985,[la]:9987};function te(R,E,ie){if(ie?(l.texParameteri(R,10242,Re[E.wrapS]),l.texParameteri(R,10243,Re[E.wrapT]),(R===32879||R===35866)&&l.texParameteri(R,32882,Re[E.wrapR]),l.texParameteri(R,10240,Ie[E.magFilter]),l.texParameteri(R,10241,Ie[E.minFilter])):(l.texParameteri(R,10242,33071),l.texParameteri(R,10243,33071),(R===32879||R===35866)&&l.texParameteri(R,32882,33071),(E.wrapS!==jn||E.wrapT!==jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),l.texParameteri(R,10240,V(E.magFilter)),l.texParameteri(R,10241,V(E.minFilter)),E.minFilter!==Ht&&E.minFilter!==Mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const pe=e.get("EXT_texture_filter_anisotropic");if(E.type===Hi&&e.has("OES_texture_float_linear")===!1||c===!1&&E.type===Os&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(l.texParameterf(R,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function Q(R,E){let ie=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",X));const pe=E.source;let Se=g.get(pe);Se===void 0&&(Se={},g.set(pe,Se));const Te=K(E);if(Te!==R.__cacheKey){Se[Te]===void 0&&(Se[Te]={texture:l.createTexture(),usedTimes:0},u.memory.textures++,ie=!0),Se[Te].usedTimes++;const Ne=Se[R.__cacheKey];Ne!==void 0&&(Se[R.__cacheKey].usedTimes--,Ne.usedTimes===0&&k(E)),R.__cacheKey=Te,R.__webglTexture=Se[Te].texture}return ie}function xe(R,E,ie){let pe=3553;E.isDataArrayTexture&&(pe=35866),E.isData3DTexture&&(pe=32879);const Se=Q(R,E),Te=E.source;if(t.activeTexture(33984+ie),t.bindTexture(pe,R.__webglTexture),Te.version!==Te.__currentVersion||Se===!0){l.pixelStorei(37440,E.flipY),l.pixelStorei(37441,E.premultiplyAlpha),l.pixelStorei(3317,E.unpackAlignment),l.pixelStorei(37443,0);const Ne=C(E)&&A(E.image)===!1;let L=F(E.image,Ne,!1,p);L=yt(E,L);const ue=A(L)||c,be=o.convert(E.format,E.encoding);let ve=o.convert(E.type),N=T(E.internalFormat,be,ve,E.encoding,E.isVideoTexture);te(pe,E,ue);let _e;const ge=E.mipmaps,ze=c&&E.isVideoTexture!==!0,Ee=Te.__currentVersion===void 0||Se===!0,Oe=O(E,L,ue);if(E.isDepthTexture)N=6402,c?E.type===Hi?N=36012:E.type===ur?N=33190:E.type===Kr?N=35056:N=33189:E.type===Hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===hr&&N===6402&&E.type!==Pd&&E.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ur,ve=o.convert(E.type)),E.format===es&&N===6402&&(N=34041,E.type!==Kr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Kr,ve=o.convert(E.type))),Ee&&(ze?t.texStorage2D(3553,1,N,L.width,L.height):t.texImage2D(3553,0,N,L.width,L.height,0,be,ve,null));else if(E.isDataTexture)if(ge.length>0&&ue){ze&&Ee&&t.texStorage2D(3553,Oe,N,ge[0].width,ge[0].height);for(let ye=0,Xe=ge.length;ye<Xe;ye++)_e=ge[ye],ze?t.texSubImage2D(3553,ye,0,0,_e.width,_e.height,be,ve,_e.data):t.texImage2D(3553,ye,N,_e.width,_e.height,0,be,ve,_e.data);E.generateMipmaps=!1}else ze?(Ee&&t.texStorage2D(3553,Oe,N,L.width,L.height),t.texSubImage2D(3553,0,0,0,L.width,L.height,be,ve,L.data)):t.texImage2D(3553,0,N,L.width,L.height,0,be,ve,L.data);else if(E.isCompressedTexture){ze&&Ee&&t.texStorage2D(3553,Oe,N,ge[0].width,ge[0].height);for(let ye=0,Xe=ge.length;ye<Xe;ye++)_e=ge[ye],E.format!==ei?be!==null?ze?t.compressedTexSubImage2D(3553,ye,0,0,_e.width,_e.height,be,_e.data):t.compressedTexImage2D(3553,ye,N,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(3553,ye,0,0,_e.width,_e.height,be,ve,_e.data):t.texImage2D(3553,ye,N,_e.width,_e.height,0,be,ve,_e.data)}else if(E.isDataArrayTexture)ze?(Ee&&t.texStorage3D(35866,Oe,N,L.width,L.height,L.depth),t.texSubImage3D(35866,0,0,0,0,L.width,L.height,L.depth,be,ve,L.data)):t.texImage3D(35866,0,N,L.width,L.height,L.depth,0,be,ve,L.data);else if(E.isData3DTexture)ze?(Ee&&t.texStorage3D(32879,Oe,N,L.width,L.height,L.depth),t.texSubImage3D(32879,0,0,0,0,L.width,L.height,L.depth,be,ve,L.data)):t.texImage3D(32879,0,N,L.width,L.height,L.depth,0,be,ve,L.data);else if(E.isFramebufferTexture){if(Ee)if(ze)t.texStorage2D(3553,Oe,N,L.width,L.height);else{let ye=L.width,Xe=L.height;for(let ct=0;ct<Oe;ct++)t.texImage2D(3553,ct,N,ye,Xe,0,be,ve,null),ye>>=1,Xe>>=1}}else if(ge.length>0&&ue){ze&&Ee&&t.texStorage2D(3553,Oe,N,ge[0].width,ge[0].height);for(let ye=0,Xe=ge.length;ye<Xe;ye++)_e=ge[ye],ze?t.texSubImage2D(3553,ye,0,0,be,ve,_e):t.texImage2D(3553,ye,N,be,ve,_e);E.generateMipmaps=!1}else ze?(Ee&&t.texStorage2D(3553,Oe,N,L.width,L.height),t.texSubImage2D(3553,0,0,0,be,ve,L)):t.texImage2D(3553,0,N,be,ve,L);z(E,ue)&&W(pe),Te.__currentVersion=Te.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function De(R,E,ie){if(E.image.length!==6)return;const pe=Q(R,E),Se=E.source;if(t.activeTexture(33984+ie),t.bindTexture(34067,R.__webglTexture),Se.version!==Se.__currentVersion||pe===!0){l.pixelStorei(37440,E.flipY),l.pixelStorei(37441,E.premultiplyAlpha),l.pixelStorei(3317,E.unpackAlignment),l.pixelStorei(37443,0);const Te=E.isCompressedTexture||E.image[0].isCompressedTexture,Ne=E.image[0]&&E.image[0].isDataTexture,L=[];for(let ye=0;ye<6;ye++)!Te&&!Ne?L[ye]=F(E.image[ye],!1,!0,d):L[ye]=Ne?E.image[ye].image:E.image[ye],L[ye]=yt(E,L[ye]);const ue=L[0],be=A(ue)||c,ve=o.convert(E.format,E.encoding),N=o.convert(E.type),_e=T(E.internalFormat,ve,N,E.encoding),ge=c&&E.isVideoTexture!==!0,ze=Se.__currentVersion===void 0||pe===!0;let Ee=O(E,ue,be);te(34067,E,be);let Oe;if(Te){ge&&ze&&t.texStorage2D(34067,Ee,_e,ue.width,ue.height);for(let ye=0;ye<6;ye++){Oe=L[ye].mipmaps;for(let Xe=0;Xe<Oe.length;Xe++){const ct=Oe[Xe];E.format!==ei?ve!==null?ge?t.compressedTexSubImage2D(34069+ye,Xe,0,0,ct.width,ct.height,ve,ct.data):t.compressedTexImage2D(34069+ye,Xe,_e,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ge?t.texSubImage2D(34069+ye,Xe,0,0,ct.width,ct.height,ve,N,ct.data):t.texImage2D(34069+ye,Xe,_e,ct.width,ct.height,0,ve,N,ct.data)}}}else{Oe=E.mipmaps,ge&&ze&&(Oe.length>0&&Ee++,t.texStorage2D(34067,Ee,_e,L[0].width,L[0].height));for(let ye=0;ye<6;ye++)if(Ne){ge?t.texSubImage2D(34069+ye,0,0,0,L[ye].width,L[ye].height,ve,N,L[ye].data):t.texImage2D(34069+ye,0,_e,L[ye].width,L[ye].height,0,ve,N,L[ye].data);for(let Xe=0;Xe<Oe.length;Xe++){const ut=Oe[Xe].image[ye].image;ge?t.texSubImage2D(34069+ye,Xe+1,0,0,ut.width,ut.height,ve,N,ut.data):t.texImage2D(34069+ye,Xe+1,_e,ut.width,ut.height,0,ve,N,ut.data)}}else{ge?t.texSubImage2D(34069+ye,0,0,0,ve,N,L[ye]):t.texImage2D(34069+ye,0,_e,ve,N,L[ye]);for(let Xe=0;Xe<Oe.length;Xe++){const ct=Oe[Xe];ge?t.texSubImage2D(34069+ye,Xe+1,0,0,ve,N,ct.image[ye]):t.texImage2D(34069+ye,Xe+1,_e,ve,N,ct.image[ye])}}}z(E,be)&&W(34067),Se.__currentVersion=Se.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Me(R,E,ie,pe,Se){const Te=o.convert(ie.format,ie.encoding),Ne=o.convert(ie.type),L=T(ie.internalFormat,Te,Ne,ie.encoding);i.get(E).__hasExternalTextures||(Se===32879||Se===35866?t.texImage3D(Se,0,L,E.width,E.height,E.depth,0,Te,Ne,null):t.texImage2D(Se,0,L,E.width,E.height,0,Te,Ne,null)),t.bindFramebuffer(36160,R),ft(E)?x.framebufferTexture2DMultisampleEXT(36160,pe,Se,i.get(ie).__webglTexture,0,At(E)):l.framebufferTexture2D(36160,pe,Se,i.get(ie).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(R,E,ie){if(l.bindRenderbuffer(36161,R),E.depthBuffer&&!E.stencilBuffer){let pe=33189;if(ie||ft(E)){const Se=E.depthTexture;Se&&Se.isDepthTexture&&(Se.type===Hi?pe=36012:Se.type===ur&&(pe=33190));const Te=At(E);ft(E)?x.renderbufferStorageMultisampleEXT(36161,Te,pe,E.width,E.height):l.renderbufferStorageMultisample(36161,Te,pe,E.width,E.height)}else l.renderbufferStorage(36161,pe,E.width,E.height);l.framebufferRenderbuffer(36160,36096,36161,R)}else if(E.depthBuffer&&E.stencilBuffer){const pe=At(E);ie&&ft(E)===!1?l.renderbufferStorageMultisample(36161,pe,35056,E.width,E.height):ft(E)?x.renderbufferStorageMultisampleEXT(36161,pe,35056,E.width,E.height):l.renderbufferStorage(36161,34041,E.width,E.height),l.framebufferRenderbuffer(36160,33306,36161,R)}else{const pe=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Se=0;Se<pe.length;Se++){const Te=pe[Se],Ne=o.convert(Te.format,Te.encoding),L=o.convert(Te.type),ue=T(Te.internalFormat,Ne,L,Te.encoding),be=At(E);ie&&ft(E)===!1?l.renderbufferStorageMultisample(36161,be,ue,E.width,E.height):ft(E)?x.renderbufferStorageMultisampleEXT(36161,be,ue,E.width,E.height):l.renderbufferStorage(36161,ue,E.width,E.height)}}l.bindRenderbuffer(36161,null)}function Ue(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const pe=i.get(E.depthTexture).__webglTexture,Se=At(E);if(E.depthTexture.format===hr)ft(E)?x.framebufferTexture2DMultisampleEXT(36160,36096,3553,pe,0,Se):l.framebufferTexture2D(36160,36096,3553,pe,0);else if(E.depthTexture.format===es)ft(E)?x.framebufferTexture2DMultisampleEXT(36160,33306,3553,pe,0,Se):l.framebufferTexture2D(36160,33306,3553,pe,0);else throw new Error("Unknown depthTexture format")}function Be(R){const E=i.get(R),ie=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");Ue(E.__webglFramebuffer,R)}else if(ie){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(36160,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]=l.createRenderbuffer(),ke(E.__webglDepthbuffer[pe],R,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=l.createRenderbuffer(),ke(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(36160,null)}function nt(R,E,ie){const pe=i.get(R);E!==void 0&&Me(pe.__webglFramebuffer,R,R.texture,36064,3553),ie!==void 0&&Be(R)}function Mt(R){const E=R.texture,ie=i.get(R),pe=i.get(E);R.addEventListener("dispose",re),R.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=l.createTexture()),pe.__version=E.version,u.memory.textures++);const Se=R.isWebGLCubeRenderTarget===!0,Te=R.isWebGLMultipleRenderTargets===!0,Ne=A(R)||c;if(Se){ie.__webglFramebuffer=[];for(let L=0;L<6;L++)ie.__webglFramebuffer[L]=l.createFramebuffer()}else{if(ie.__webglFramebuffer=l.createFramebuffer(),Te)if(s.drawBuffers){const L=R.texture;for(let ue=0,be=L.length;ue<be;ue++){const ve=i.get(L[ue]);ve.__webglTexture===void 0&&(ve.__webglTexture=l.createTexture(),u.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&R.samples>0&&ft(R)===!1){const L=Te?E:[E];ie.__webglMultisampledFramebuffer=l.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,ie.__webglMultisampledFramebuffer);for(let ue=0;ue<L.length;ue++){const be=L[ue];ie.__webglColorRenderbuffer[ue]=l.createRenderbuffer(),l.bindRenderbuffer(36161,ie.__webglColorRenderbuffer[ue]);const ve=o.convert(be.format,be.encoding),N=o.convert(be.type),_e=T(be.internalFormat,ve,N,be.encoding),ge=At(R);l.renderbufferStorageMultisample(36161,ge,_e,R.width,R.height),l.framebufferRenderbuffer(36160,36064+ue,36161,ie.__webglColorRenderbuffer[ue])}l.bindRenderbuffer(36161,null),R.depthBuffer&&(ie.__webglDepthRenderbuffer=l.createRenderbuffer(),ke(ie.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(36160,null)}}if(Se){t.bindTexture(34067,pe.__webglTexture),te(34067,E,Ne);for(let L=0;L<6;L++)Me(ie.__webglFramebuffer[L],R,E,36064,34069+L);z(E,Ne)&&W(34067),t.unbindTexture()}else if(Te){const L=R.texture;for(let ue=0,be=L.length;ue<be;ue++){const ve=L[ue],N=i.get(ve);t.bindTexture(3553,N.__webglTexture),te(3553,ve,Ne),Me(ie.__webglFramebuffer,R,ve,36064+ue,3553),z(ve,Ne)&&W(3553)}t.unbindTexture()}else{let L=3553;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(c?L=R.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,pe.__webglTexture),te(L,E,Ne),Me(ie.__webglFramebuffer,R,E,36064,L),z(E,Ne)&&W(L),t.unbindTexture()}R.depthBuffer&&Be(R)}function Ot(R){const E=A(R)||c,ie=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let pe=0,Se=ie.length;pe<Se;pe++){const Te=ie[pe];if(z(Te,E)){const Ne=R.isWebGLCubeRenderTarget?34067:3553,L=i.get(Te).__webglTexture;t.bindTexture(Ne,L),W(Ne),t.unbindTexture()}}}function wt(R){if(c&&R.samples>0&&ft(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],ie=R.width,pe=R.height;let Se=16384;const Te=[],Ne=R.stencilBuffer?33306:36096,L=i.get(R),ue=R.isWebGLMultipleRenderTargets===!0;if(ue)for(let be=0;be<E.length;be++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+be,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),l.framebufferTexture2D(36009,36064+be,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let be=0;be<E.length;be++){Te.push(36064+be),R.depthBuffer&&Te.push(Ne);const ve=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(ve===!1&&(R.depthBuffer&&(Se|=256),R.stencilBuffer&&(Se|=1024)),ue&&l.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[be]),ve===!0&&(l.invalidateFramebuffer(36008,[Ne]),l.invalidateFramebuffer(36009,[Ne])),ue){const N=i.get(E[be]).__webglTexture;l.framebufferTexture2D(36009,36064,3553,N,0)}l.blitFramebuffer(0,0,ie,pe,0,0,ie,pe,Se,9728),M&&l.invalidateFramebuffer(36008,Te)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ue)for(let be=0;be<E.length;be++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+be,36161,L.__webglColorRenderbuffer[be]);const ve=i.get(E[be]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),l.framebufferTexture2D(36009,36064+be,3553,ve,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function At(R){return Math.min(m,R.samples)}function ft(R){const E=i.get(R);return c&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Bt(R){const E=u.render.frame;S.get(R)!==E&&(S.set(R,E),R.update())}function yt(R,E){const ie=R.encoding,pe=R.format,Se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===mc||ie!==mr&&(ie===Dt?c===!1?e.has("EXT_sRGB")===!0&&pe===ei?(R.format=mc,R.minFilter=Mn,R.generateMipmaps=!1):E=Nd.sRGBToLinear(E):(pe!==ei||Se!==pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ie)),E}this.allocateTextureUnit=se,this.resetTextureUnits=le,this.setTexture2D=$,this.setTexture2DArray=me,this.setTexture3D=de,this.setTextureCube=we,this.rebindTextures=nt,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ft}function tT(l,e,t){const i=t.isWebGL2;function s(o,u=null){let c;if(o===pr)return 5121;if(o===BM)return 32819;if(o===GM)return 32820;if(o===NM)return 5120;if(o===zM)return 5122;if(o===Pd)return 5123;if(o===UM)return 5124;if(o===ur)return 5125;if(o===Hi)return 5126;if(o===Os)return i?5131:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(o===WM)return 6406;if(o===ei)return 6408;if(o===Rd)return 6409;if(o===VM)return 6410;if(o===hr)return 6402;if(o===es)return 34041;if(o===Id)return 6403;if(o===HM)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(o===mc)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(o===kM)return 36244;if(o===XM)return 33319;if(o===qM)return 33320;if(o===YM)return 36249;if(o===El||o===Al||o===Cl||o===Ll)if(u===Dt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(o===El)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Al)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Cl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Ll)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(o===El)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Al)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Cl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Ll)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===sh||o===oh||o===ah||o===lh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(o===sh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===oh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===ah)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===lh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===jM)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===ch||o===uh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(o===ch)return u===Dt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(o===uh)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===fh||o===hh||o===dh||o===ph||o===mh||o===gh||o===xh||o===vh||o===_h||o===Mh||o===yh||o===Sh||o===bh||o===wh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(o===fh)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===hh)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===dh)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===ph)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===mh)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===gh)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===xh)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===vh)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===_h)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Mh)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===yh)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Sh)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===bh)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===wh)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Th)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(o===Th)return u===Dt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return o===Kr?i?34042:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):l[o]!==void 0?l[o]:null}return{convert:s}}class nT extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qo extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iT={type:"move"};class nc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,u=null;const c=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i);if(d.joints[v.jointName]===void 0){const D=new Qo;D.matrixAutoUpdate=!1,D.visible=!1,d.joints[v.jointName]=D,d.add(D)}const b=d.joints[v.jointName];g!==null&&(b.matrix.fromArray(g.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.jointRadius=g.radius),b.visible=g!==null}const p=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],x=p.position.distanceTo(m.position),M=.02,S=.005;d.inputState.pinching&&x>M+S?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&x<=M-S&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(iT)))}return c!==null&&(c.visible=s!==null),h!==null&&(h.visible=o!==null),d!==null&&(d.visible=u!==null),this}}class rT extends Qt{constructor(e,t,i,s,o,u,c,h,d,p){if(p=p!==void 0?p:hr,p!==hr&&p!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===hr&&(i=ur),i===void 0&&p===es&&(i=Kr),super(null,s,o,u,c,h,p,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Ht,this.minFilter=h!==void 0?h:Ht,this.flipY=!1,this.generateMipmaps=!1}}class sT extends Xi{constructor(e,t){super();const i=this;let s=null,o=1,u=null,c="local-floor",h=null,d=null,p=null,m=null,x=null,M=null;const S=t.getContextAttributes();let v=null,g=null;const b=[],D=[],F=new Nn;F.layers.enable(1),F.viewport=new _t;const A=new Nn;A.layers.enable(2),A.viewport=new _t;const C=[F,A],z=new nT;z.layers.enable(1),z.layers.enable(2);let W=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let $=b[K];return $===void 0&&($=new nc,b[K]=$),$.getTargetRaySpace()},this.getControllerGrip=function(K){let $=b[K];return $===void 0&&($=new nc,b[K]=$),$.getGripSpace()},this.getHand=function(K){let $=b[K];return $===void 0&&($=new nc,b[K]=$),$.getHandSpace()};function O(K){const $=D.indexOf(K.inputSource);if($===-1)return;const me=b[$];me!==void 0&&me.dispatchEvent({type:K.type,data:K.inputSource})}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",X);for(let K=0;K<b.length;K++){const $=D[K];$!==null&&(D[K]=null,b[K].disconnect($))}W=null,T=null,e.setRenderTarget(v),x=null,m=null,p=null,s=null,g=null,se.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){c=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return p},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",X),S.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:s.renderState.layers===void 0?S.antialias:!0,alpha:S.alpha,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:x}),g=new yn(x.framebufferWidth,x.framebufferHeight,{format:ei,type:pr,encoding:e.outputEncoding})}else{let $=null,me=null,de=null;S.depth&&(de=S.stencil?35056:33190,$=S.stencil?es:hr,me=S.stencil?Kr:ur);const we={colorFormat:32856,depthFormat:de,scaleFactor:o};p=new XRWebGLBinding(s,t),m=p.createProjectionLayer(we),s.updateRenderState({layers:[m]}),g=new yn(m.textureWidth,m.textureHeight,{format:ei,type:pr,depthTexture:new rT(m.textureWidth,m.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:S.stencil,encoding:e.outputEncoding,samples:S.antialias?4:0});const Re=e.properties.get(g);Re.__ignoreDepthValues=m.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(1),h=null,u=await s.requestReferenceSpace(c),se.setContext(s),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function X(K){for(let $=0;$<K.removed.length;$++){const me=K.removed[$],de=D.indexOf(me);de>=0&&(D[de]=null,b[de].dispatchEvent({type:"disconnected",data:me}))}for(let $=0;$<K.added.length;$++){const me=K.added[$];let de=D.indexOf(me);if(de===-1){for(let Re=0;Re<b.length;Re++)if(Re>=D.length){D.push(me),de=Re;break}else if(D[Re]===null){D[Re]=me,de=Re;break}if(de===-1)break}const we=b[de];we&&we.dispatchEvent({type:"connected",data:me})}}const re=new B,he=new B;function k(K,$,me){re.setFromMatrixPosition($.matrixWorld),he.setFromMatrixPosition(me.matrixWorld);const de=re.distanceTo(he),we=$.projectionMatrix.elements,Re=me.projectionMatrix.elements,Ie=we[14]/(we[10]-1),te=we[14]/(we[10]+1),Q=(we[9]+1)/we[5],xe=(we[9]-1)/we[5],De=(we[8]-1)/we[0],Me=(Re[8]+1)/Re[0],ke=Ie*De,Ue=Ie*Me,Be=de/(-De+Me),nt=Be*-De;$.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(nt),K.translateZ(Be),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const Mt=Ie+Be,Ot=te+Be,wt=ke-nt,At=Ue+(de-nt),ft=Q*te/Ot*Mt,Bt=xe*te/Ot*Mt;K.projectionMatrix.makePerspective(wt,At,ft,Bt,Mt,Ot)}function ne(K,$){$===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices($.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;z.near=A.near=F.near=K.near,z.far=A.far=F.far=K.far,(W!==z.near||T!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),W=z.near,T=z.far);const $=K.parent,me=z.cameras;ne(z,$);for(let we=0;we<me.length;we++)ne(me[we],$);z.matrixWorld.decompose(z.position,z.quaternion,z.scale),K.position.copy(z.position),K.quaternion.copy(z.quaternion),K.scale.copy(z.scale),K.matrix.copy(z.matrix),K.matrixWorld.copy(z.matrixWorld);const de=K.children;for(let we=0,Re=de.length;we<Re;we++)de[we].updateMatrixWorld(!0);me.length===2?k(z,F,A):z.projectionMatrix.copy(F.projectionMatrix)},this.getCamera=function(){return z},this.getFoveation=function(){if(m!==null)return m.fixedFoveation;if(x!==null)return x.fixedFoveation},this.setFoveation=function(K){m!==null&&(m.fixedFoveation=K),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=K)};let Z=null;function le(K,$){if(d=$.getViewerPose(h||u),M=$,d!==null){const me=d.views;x!==null&&(e.setRenderTargetFramebuffer(g,x.framebuffer),e.setRenderTarget(g));let de=!1;me.length!==z.cameras.length&&(z.cameras.length=0,de=!0);for(let we=0;we<me.length;we++){const Re=me[we];let Ie=null;if(x!==null)Ie=x.getViewport(Re);else{const Q=p.getViewSubImage(m,Re);Ie=Q.viewport,we===0&&(e.setRenderTargetTextures(g,Q.colorTexture,m.ignoreDepthValues?void 0:Q.depthStencilTexture),e.setRenderTarget(g))}let te=C[we];te===void 0&&(te=new Nn,te.layers.enable(we),te.viewport=new _t,C[we]=te),te.matrix.fromArray(Re.transform.matrix),te.projectionMatrix.fromArray(Re.projectionMatrix),te.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),we===0&&z.matrix.copy(te.matrix),de===!0&&z.cameras.push(te)}}for(let me=0;me<b.length;me++){const de=D[me],we=b[me];de!==null&&we!==void 0&&we.update(de,$,h||u)}Z&&Z(K,$),M=null}const se=new Xd;se.setAnimationLoop(le),this.setAnimationLoop=function(K){Z=K},this.dispose=function(){}}}function oT(l,e){function t(v,g){v.fogColor.value.copy(g.color),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function i(v,g,b,D,F){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(v,g):g.isMeshToonMaterial?(s(v,g),p(v,g)):g.isMeshPhongMaterial?(s(v,g),d(v,g)):g.isMeshStandardMaterial?(s(v,g),m(v,g),g.isMeshPhysicalMaterial&&x(v,g,F)):g.isMeshMatcapMaterial?(s(v,g),M(v,g)):g.isMeshDepthMaterial?s(v,g):g.isMeshDistanceMaterial?(s(v,g),S(v,g)):g.isMeshNormalMaterial?s(v,g):g.isLineBasicMaterial?(o(v,g),g.isLineDashedMaterial&&u(v,g)):g.isPointsMaterial?c(v,g,b,D):g.isSpriteMaterial?h(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map),g.alphaMap&&(v.alphaMap.value=g.alphaMap),g.bumpMap&&(v.bumpMap.value=g.bumpMap,v.bumpScale.value=g.bumpScale,g.side===Zn&&(v.bumpScale.value*=-1)),g.displacementMap&&(v.displacementMap.value=g.displacementMap,v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap),g.normalMap&&(v.normalMap.value=g.normalMap,v.normalScale.value.copy(g.normalScale),g.side===Zn&&v.normalScale.value.negate()),g.specularMap&&(v.specularMap.value=g.specularMap),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const b=e.get(g).envMap;if(b&&(v.envMap.value=b,v.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap){v.lightMap.value=g.lightMap;const A=l.physicallyCorrectLights!==!0?Math.PI:1;v.lightMapIntensity.value=g.lightMapIntensity*A}g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity);let D;g.map?D=g.map:g.specularMap?D=g.specularMap:g.displacementMap?D=g.displacementMap:g.normalMap?D=g.normalMap:g.bumpMap?D=g.bumpMap:g.roughnessMap?D=g.roughnessMap:g.metalnessMap?D=g.metalnessMap:g.alphaMap?D=g.alphaMap:g.emissiveMap?D=g.emissiveMap:g.clearcoatMap?D=g.clearcoatMap:g.clearcoatNormalMap?D=g.clearcoatNormalMap:g.clearcoatRoughnessMap?D=g.clearcoatRoughnessMap:g.iridescenceMap?D=g.iridescenceMap:g.iridescenceThicknessMap?D=g.iridescenceThicknessMap:g.specularIntensityMap?D=g.specularIntensityMap:g.specularColorMap?D=g.specularColorMap:g.transmissionMap?D=g.transmissionMap:g.thicknessMap?D=g.thicknessMap:g.sheenColorMap?D=g.sheenColorMap:g.sheenRoughnessMap&&(D=g.sheenRoughnessMap),D!==void 0&&(D.isWebGLRenderTarget&&(D=D.texture),D.matrixAutoUpdate===!0&&D.updateMatrix(),v.uvTransform.value.copy(D.matrix));let F;g.aoMap?F=g.aoMap:g.lightMap&&(F=g.lightMap),F!==void 0&&(F.isWebGLRenderTarget&&(F=F.texture),F.matrixAutoUpdate===!0&&F.updateMatrix(),v.uv2Transform.value.copy(F.matrix))}function o(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity}function u(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function c(v,g,b,D){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*b,v.scale.value=D*.5,g.map&&(v.map.value=g.map),g.alphaMap&&(v.alphaMap.value=g.alphaMap),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);let F;g.map?F=g.map:g.alphaMap&&(F=g.alphaMap),F!==void 0&&(F.matrixAutoUpdate===!0&&F.updateMatrix(),v.uvTransform.value.copy(F.matrix))}function h(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map),g.alphaMap&&(v.alphaMap.value=g.alphaMap),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);let b;g.map?b=g.map:g.alphaMap&&(b=g.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),v.uvTransform.value.copy(b.matrix))}function d(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function p(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function m(v,g){v.roughness.value=g.roughness,v.metalness.value=g.metalness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap),e.get(g).envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function x(v,g,b){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap)),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),v.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===Zn&&v.clearcoatNormalScale.value.negate())),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap)),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=b.texture,v.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap)}function M(v,g){g.matcap&&(v.matcap.value=g.matcap)}function S(v,g){v.referencePosition.value.copy(g.referencePosition),v.nearDistance.value=g.nearDistance,v.farDistance.value=g.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function aT(){const l=Ns("canvas");return l.style.display="block",l}function lT(l={}){this.isWebGLRenderer=!0;const e=l.canvas!==void 0?l.canvas:aT(),t=l.context!==void 0?l.context:null,i=l.depth!==void 0?l.depth:!0,s=l.stencil!==void 0?l.stencil:!0,o=l.antialias!==void 0?l.antialias:!1,u=l.premultipliedAlpha!==void 0?l.premultipliedAlpha:!0,c=l.preserveDrawingBuffer!==void 0?l.preserveDrawingBuffer:!1,h=l.powerPreference!==void 0?l.powerPreference:"default",d=l.failIfMajorPerformanceCaveat!==void 0?l.failIfMajorPerformanceCaveat:!1;let p;t!==null?p=t.getContextAttributes().alpha:p=l.alpha!==void 0?l.alpha:!1;let m=null,x=null;const M=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=mr,this.physicallyCorrectLights=!1,this.toneMapping=yi,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const v=this;let g=!1,b=0,D=0,F=null,A=-1,C=null;const z=new _t,W=new _t;let T=null,O=e.width,V=e.height,X=1,re=null,he=null;const k=new _t(0,0,O,V),ne=new _t(0,0,O,V);let Z=!1;const le=new wc;let se=!1,K=!1,$=null;const me=new It,de=new Le,we=new B,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return F===null?X:1}let te=t;function Q(P,q){for(let J=0;J<P.length;J++){const j=P[J],ce=e.getContext(j,q);if(ce!==null)return ce}return null}try{const P={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mc}`),e.addEventListener("webglcontextlost",N,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",ge,!1),te===null){const q=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&q.shift(),te=Q(q,P),te===null)throw Q(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}te.getShaderPrecisionFormat===void 0&&(te.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let xe,De,Me,ke,Ue,Be,nt,Mt,Ot,wt,At,ft,Bt,yt,R,E,ie,pe,Se,Te,Ne,L,ue;function be(){xe=new vw(te),De=new hw(te,xe,l),xe.init(De),L=new tT(te,xe,De),Me=new $1(te,xe,De),ke=new yw,Ue=new B1,Be=new eT(te,xe,Me,Ue,De,L,ke),nt=new pw(v),Mt=new xw(v),Ot=new Iy(te,De),ue=new uw(te,xe,Ot,De),wt=new _w(te,Ot,ke,ue),At=new Tw(te,wt,Ot,ke),Se=new ww(te,De,Be),E=new dw(Ue),ft=new U1(v,nt,Mt,xe,De,ue,E),Bt=new oT(v,Ue),yt=new W1,R=new Y1(xe,De),pe=new cw(v,nt,Me,At,p,u),ie=new Q1(v,At,De),Te=new fw(te,xe,ke,De),Ne=new Mw(te,xe,ke,De),ke.programs=ft.programs,v.capabilities=De,v.extensions=xe,v.properties=Ue,v.renderLists=yt,v.shadowMap=ie,v.state=Me,v.info=ke}be();const ve=new sT(v,te);this.xr=ve,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){const P=xe.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=xe.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(P){P!==void 0&&(X=P,this.setSize(O,V,!1))},this.getSize=function(P){return P.set(O,V)},this.setSize=function(P,q,J){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=P,V=q,e.width=Math.floor(P*X),e.height=Math.floor(q*X),J!==!1&&(e.style.width=P+"px",e.style.height=q+"px"),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(O*X,V*X).floor()},this.setDrawingBufferSize=function(P,q,J){O=P,V=q,X=J,e.width=Math.floor(P*J),e.height=Math.floor(q*J),this.setViewport(0,0,P,q)},this.getCurrentViewport=function(P){return P.copy(z)},this.getViewport=function(P){return P.copy(k)},this.setViewport=function(P,q,J,j){P.isVector4?k.set(P.x,P.y,P.z,P.w):k.set(P,q,J,j),Me.viewport(z.copy(k).multiplyScalar(X).floor())},this.getScissor=function(P){return P.copy(ne)},this.setScissor=function(P,q,J,j){P.isVector4?ne.set(P.x,P.y,P.z,P.w):ne.set(P,q,J,j),Me.scissor(W.copy(ne).multiplyScalar(X).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(P){Me.setScissorTest(Z=P)},this.setOpaqueSort=function(P){re=P},this.setTransparentSort=function(P){he=P},this.getClearColor=function(P){return P.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(P=!0,q=!0,J=!0){let j=0;P&&(j|=16384),q&&(j|=256),J&&(j|=1024),te.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",N,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",ge,!1),yt.dispose(),R.dispose(),Ue.dispose(),nt.dispose(),Mt.dispose(),At.dispose(),ue.dispose(),ft.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",ct),ve.removeEventListener("sessionend",ut),$&&($.dispose(),$=null),kt.stop()};function N(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;const P=ke.autoReset,q=ie.enabled,J=ie.autoUpdate,j=ie.needsUpdate,ce=ie.type;be(),ke.autoReset=P,ie.enabled=q,ie.autoUpdate=J,ie.needsUpdate=j,ie.type=ce}function ge(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ze(P){const q=P.target;q.removeEventListener("dispose",ze),Ee(q)}function Ee(P){Oe(P),Ue.remove(P)}function Oe(P){const q=Ue.get(P).programs;q!==void 0&&(q.forEach(function(J){ft.releaseProgram(J)}),P.isShaderMaterial&&ft.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,J,j,ce,Ve){q===null&&(q=Re);const Ye=ce.isMesh&&ce.matrixWorld.determinant()<0,Je=ss(P,q,J,j,ce);Me.setMaterial(j,Ye);let Ze=J.index;const ht=J.attributes.position;if(Ze===null){if(ht===void 0||ht.count===0)return}else if(Ze.count===0)return;let rt=1;j.wireframe===!0&&(Ze=wt.getWireframeAttribute(J),rt=2),ue.setup(ce,j,Je,J,Ze);let lt,St=Te;Ze!==null&&(lt=Ot.get(Ze),St=Ne,St.setIndex(lt));const ni=Ze!==null?Ze.count:ht.count,bi=J.drawRange.start*rt,Un=J.drawRange.count*rt,bn=Ve!==null?Ve.start*rt:0,st=Ve!==null?Ve.count*rt:1/0,wi=Math.max(bi,bn),Ct=Math.min(ni,bi+Un,bn+st)-1,wn=Math.max(0,Ct-wi+1);if(wn!==0){if(ce.isMesh)j.wireframe===!0?(Me.setLineWidth(j.wireframeLinewidth*Ie()),St.setMode(1)):St.setMode(4);else if(ce.isLine){let Bn=j.linewidth;Bn===void 0&&(Bn=1),Me.setLineWidth(Bn*Ie()),ce.isLineSegments?St.setMode(1):ce.isLineLoop?St.setMode(2):St.setMode(3)}else ce.isPoints?St.setMode(0):ce.isSprite&&St.setMode(4);if(ce.isInstancedMesh)St.renderInstances(wi,wn,ce.count);else if(J.isInstancedBufferGeometry){const Bn=Math.min(J.instanceCount,J._maxInstanceCount);St.renderInstances(wi,wn,Bn)}else St.render(wi,wn)}},this.compile=function(P,q){x=R.get(P),x.init(),S.push(x),P.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),x.setupLights(v.physicallyCorrectLights),P.traverse(function(J){const j=J.material;if(j)if(Array.isArray(j))for(let ce=0;ce<j.length;ce++){const Ve=j[ce];rs(Ve,P,J)}else rs(j,P,J)}),S.pop(),x=null};let ye=null;function Xe(P){ye&&ye(P)}function ct(){kt.stop()}function ut(){kt.start()}const kt=new Xd;kt.setAnimationLoop(Xe),typeof self!="undefined"&&kt.setContext(self),this.setAnimationLoop=function(P){ye=P,ve.setAnimationLoop(P),P===null?kt.stop():kt.start()},ve.addEventListener("sessionstart",ct),ve.addEventListener("sessionend",ut),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;P.autoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(q),q=ve.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,q,F),x=R.get(P,S.length),x.init(),S.push(x),me.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),le.setFromProjectionMatrix(me),K=this.localClippingEnabled,se=E.init(this.clippingPlanes,K,q),m=yt.get(P,M.length),m.init(),M.push(m),Sn(P,q,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(re,he),se===!0&&E.beginShadows();const J=x.state.shadowsArray;if(ie.render(J,P,q),se===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),pe.render(m,P),x.setupLights(v.physicallyCorrectLights),q.isArrayCamera){const j=q.cameras;for(let ce=0,Ve=j.length;ce<Ve;ce++){const Ye=j[ce];Vs(m,P,Ye,Ye.viewport)}}else Vs(m,P,q);F!==null&&(Be.updateMultisampleRenderTarget(F),Be.updateRenderTargetMipmap(F)),P.isScene===!0&&P.onAfterRender(v,P,q),ue.resetDefaultState(),A=-1,C=null,S.pop(),S.length>0?x=S[S.length-1]:x=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Sn(P,q,J,j){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)J=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||le.intersectsSprite(P)){j&&we.setFromMatrixPosition(P.matrixWorld).applyMatrix4(me);const Ye=At.update(P),Je=P.material;Je.visible&&m.push(P,Ye,Je,J,we.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==ke.render.frame&&(P.skeleton.update(),P.skeleton.frame=ke.render.frame),!P.frustumCulled||le.intersectsObject(P))){j&&we.setFromMatrixPosition(P.matrixWorld).applyMatrix4(me);const Ye=At.update(P),Je=P.material;if(Array.isArray(Je)){const Ze=Ye.groups;for(let ht=0,rt=Ze.length;ht<rt;ht++){const lt=Ze[ht],St=Je[lt.materialIndex];St&&St.visible&&m.push(P,Ye,St,J,we.z,lt)}}else Je.visible&&m.push(P,Ye,Je,J,we.z,null)}}const Ve=P.children;for(let Ye=0,Je=Ve.length;Ye<Je;Ye++)Sn(Ve[Ye],q,J,j)}function Vs(P,q,J,j){const ce=P.opaque,Ve=P.transmissive,Ye=P.transparent;x.setupLightsView(J),Ve.length>0&&da(ce,q,J),j&&Me.viewport(z.copy(j)),ce.length>0&&Yi(ce,q,J),Ve.length>0&&Yi(Ve,q,J),Ye.length>0&&Yi(Ye,q,J),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function da(P,q,J){const j=De.isWebGL2;$===null&&($=new yn(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Os:pr,minFilter:la,samples:j&&o===!0?4:0})),v.getDrawingBufferSize(de),j?$.setSize(de.x,de.y):$.setSize(sa(de.x),sa(de.y));const ce=v.getRenderTarget();v.setRenderTarget($),v.clear();const Ve=v.toneMapping;v.toneMapping=yi,Yi(P,q,J),v.toneMapping=Ve,Be.updateMultisampleRenderTarget($),Be.updateRenderTargetMipmap($),v.setRenderTarget(ce)}function Yi(P,q,J){const j=q.isScene===!0?q.overrideMaterial:null;for(let ce=0,Ve=P.length;ce<Ve;ce++){const Ye=P[ce],Je=Ye.object,Ze=Ye.geometry,ht=j===null?Ye.material:j,rt=Ye.group;Je.layers.test(J.layers)&&pa(Je,q,J,Ze,ht,rt)}}function pa(P,q,J,j,ce,Ve){P.onBeforeRender(v,q,J,j,ce,Ve),P.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ce.onBeforeRender(v,q,J,j,P,Ve),ce.transparent===!0&&ce.side===Jr?(ce.side=Zn,ce.needsUpdate=!0,v.renderBufferDirect(J,q,j,ce,P,Ve),ce.side=Fs,ce.needsUpdate=!0,v.renderBufferDirect(J,q,j,ce,P,Ve),ce.side=Jr):v.renderBufferDirect(J,q,j,ce,P,Ve),P.onAfterRender(v,q,J,j,ce,Ve)}function rs(P,q,J){q.isScene!==!0&&(q=Re);const j=Ue.get(P),ce=x.state.lights,Ve=x.state.shadowsArray,Ye=ce.state.version,Je=ft.getParameters(P,ce.state,Ve,q,J),Ze=ft.getProgramCacheKey(Je);let ht=j.programs;j.environment=P.isMeshStandardMaterial?q.environment:null,j.fog=q.fog,j.envMap=(P.isMeshStandardMaterial?Mt:nt).get(P.envMap||j.environment),ht===void 0&&(P.addEventListener("dispose",ze),ht=new Map,j.programs=ht);let rt=ht.get(Ze);if(rt!==void 0){if(j.currentProgram===rt&&j.lightsStateVersion===Ye)return ks(P,Je),rt}else Je.uniforms=ft.getUniforms(P),P.onBuild(J,Je,v),P.onBeforeCompile(Je,v),rt=ft.acquireProgram(Je,Ze),ht.set(Ze,rt),j.uniforms=Je.uniforms;const lt=j.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(lt.clippingPlanes=E.uniform),ks(P,Je),j.needsLights=os(P),j.lightsStateVersion=Ye,j.needsLights&&(lt.ambientLightColor.value=ce.state.ambient,lt.lightProbe.value=ce.state.probe,lt.directionalLights.value=ce.state.directional,lt.directionalLightShadows.value=ce.state.directionalShadow,lt.spotLights.value=ce.state.spot,lt.spotLightShadows.value=ce.state.spotShadow,lt.rectAreaLights.value=ce.state.rectArea,lt.ltc_1.value=ce.state.rectAreaLTC1,lt.ltc_2.value=ce.state.rectAreaLTC2,lt.pointLights.value=ce.state.point,lt.pointLightShadows.value=ce.state.pointShadow,lt.hemisphereLights.value=ce.state.hemi,lt.directionalShadowMap.value=ce.state.directionalShadowMap,lt.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,lt.spotShadowMap.value=ce.state.spotShadowMap,lt.spotShadowMatrix.value=ce.state.spotShadowMatrix,lt.pointShadowMap.value=ce.state.pointShadowMap,lt.pointShadowMatrix.value=ce.state.pointShadowMatrix);const St=rt.getUniforms(),ni=ia.seqWithValue(St.seq,lt);return j.currentProgram=rt,j.uniformsList=ni,rt}function ks(P,q){const J=Ue.get(P);J.outputEncoding=q.outputEncoding,J.instancing=q.instancing,J.skinning=q.skinning,J.morphTargets=q.morphTargets,J.morphNormals=q.morphNormals,J.morphColors=q.morphColors,J.morphTargetsCount=q.morphTargetsCount,J.numClippingPlanes=q.numClippingPlanes,J.numIntersection=q.numClipIntersection,J.vertexAlphas=q.vertexAlphas,J.vertexTangents=q.vertexTangents,J.toneMapping=q.toneMapping}function ss(P,q,J,j,ce){q.isScene!==!0&&(q=Re),Be.resetTextureUnits();const Ve=q.fog,Ye=j.isMeshStandardMaterial?q.environment:null,Je=F===null?v.outputEncoding:F.isXRRenderTarget===!0?F.texture.encoding:mr,Ze=(j.isMeshStandardMaterial?Mt:nt).get(j.envMap||Ye),ht=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,rt=!!j.normalMap&&!!J.attributes.tangent,lt=!!J.morphAttributes.position,St=!!J.morphAttributes.normal,ni=!!J.morphAttributes.color,bi=j.toneMapped?v.toneMapping:yi,Un=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,bn=Un!==void 0?Un.length:0,st=Ue.get(j),wi=x.state.lights;if(se===!0&&(K===!0||P!==C)){const Tn=P===C&&j.id===A;E.setState(j,P,Tn)}let Ct=!1;j.version===st.__version?(st.needsLights&&st.lightsStateVersion!==wi.state.version||st.outputEncoding!==Je||ce.isInstancedMesh&&st.instancing===!1||!ce.isInstancedMesh&&st.instancing===!0||ce.isSkinnedMesh&&st.skinning===!1||!ce.isSkinnedMesh&&st.skinning===!0||st.envMap!==Ze||j.fog===!0&&st.fog!==Ve||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==E.numPlanes||st.numIntersection!==E.numIntersection)||st.vertexAlphas!==ht||st.vertexTangents!==rt||st.morphTargets!==lt||st.morphNormals!==St||st.morphColors!==ni||st.toneMapping!==bi||De.isWebGL2===!0&&st.morphTargetsCount!==bn)&&(Ct=!0):(Ct=!0,st.__version=j.version);let wn=st.currentProgram;Ct===!0&&(wn=rs(j,q,ce));let Bn=!1,Ti=!1,xr=!1;const Xt=wn.getUniforms(),ji=st.uniforms;if(Me.useProgram(wn.program)&&(Bn=!0,Ti=!0,xr=!0),j.id!==A&&(A=j.id,Ti=!0),Bn||C!==P){if(Xt.setValue(te,"projectionMatrix",P.projectionMatrix),De.logarithmicDepthBuffer&&Xt.setValue(te,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),C!==P&&(C=P,Ti=!0,xr=!0),j.isShaderMaterial||j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshStandardMaterial||j.envMap){const Tn=Xt.map.cameraPosition;Tn!==void 0&&Tn.setValue(te,we.setFromMatrixPosition(P.matrixWorld))}(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Xt.setValue(te,"isOrthographic",P.isOrthographicCamera===!0),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial||j.isShadowMaterial||ce.isSkinnedMesh)&&Xt.setValue(te,"viewMatrix",P.matrixWorldInverse)}if(ce.isSkinnedMesh){Xt.setOptional(te,ce,"bindMatrix"),Xt.setOptional(te,ce,"bindMatrixInverse");const Tn=ce.skeleton;Tn&&(De.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),Xt.setValue(te,"boneTexture",Tn.boneTexture,Be),Xt.setValue(te,"boneTextureSize",Tn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const as=J.morphAttributes;return(as.position!==void 0||as.normal!==void 0||as.color!==void 0&&De.isWebGL2===!0)&&Se.update(ce,J,j,wn),(Ti||st.receiveShadow!==ce.receiveShadow)&&(st.receiveShadow=ce.receiveShadow,Xt.setValue(te,"receiveShadow",ce.receiveShadow)),Ti&&(Xt.setValue(te,"toneMappingExposure",v.toneMappingExposure),st.needsLights&&ma(ji,xr),Ve&&j.fog===!0&&Bt.refreshFogUniforms(ji,Ve),Bt.refreshMaterialUniforms(ji,j,X,V,$),ia.upload(te,st.uniformsList,ji,Be)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ia.upload(te,st.uniformsList,ji,Be),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Xt.setValue(te,"center",ce.center),Xt.setValue(te,"modelViewMatrix",ce.modelViewMatrix),Xt.setValue(te,"normalMatrix",ce.normalMatrix),Xt.setValue(te,"modelMatrix",ce.matrixWorld),wn}function ma(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function os(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(P,q,J){Ue.get(P.texture).__webglTexture=q,Ue.get(P.depthTexture).__webglTexture=J;const j=Ue.get(P);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=J===void 0,j.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,q){const J=Ue.get(P);J.__webglFramebuffer=q,J.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(P,q=0,J=0){F=P,b=q,D=J;let j=!0;if(P){const Ze=Ue.get(P);Ze.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(36160,null),j=!1):Ze.__webglFramebuffer===void 0?Be.setupRenderTarget(P):Ze.__hasExternalTextures&&Be.rebindTextures(P,Ue.get(P.texture).__webglTexture,Ue.get(P.depthTexture).__webglTexture)}let ce=null,Ve=!1,Ye=!1;if(P){const Ze=P.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture)&&(Ye=!0);const ht=Ue.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(ce=ht[q],Ve=!0):De.isWebGL2&&P.samples>0&&Be.useMultisampledRTT(P)===!1?ce=Ue.get(P).__webglMultisampledFramebuffer:ce=ht,z.copy(P.viewport),W.copy(P.scissor),T=P.scissorTest}else z.copy(k).multiplyScalar(X).floor(),W.copy(ne).multiplyScalar(X).floor(),T=Z;if(Me.bindFramebuffer(36160,ce)&&De.drawBuffers&&j&&Me.drawBuffers(P,ce),Me.viewport(z),Me.scissor(W),Me.setScissorTest(T),Ve){const Ze=Ue.get(P.texture);te.framebufferTexture2D(36160,36064,34069+q,Ze.__webglTexture,J)}else if(Ye){const Ze=Ue.get(P.texture),ht=q||0;te.framebufferTextureLayer(36160,36064,Ze.__webglTexture,J||0,ht)}A=-1},this.readRenderTargetPixels=function(P,q,J,j,ce,Ve,Ye){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=Ue.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ye!==void 0&&(Je=Je[Ye]),Je){Me.bindFramebuffer(36160,Je);try{const Ze=P.texture,ht=Ze.format,rt=Ze.type;if(ht!==ei&&L.convert(ht)!==te.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const lt=rt===Os&&(xe.has("EXT_color_buffer_half_float")||De.isWebGL2&&xe.has("EXT_color_buffer_float"));if(rt!==pr&&L.convert(rt)!==te.getParameter(35738)&&!(rt===Hi&&(De.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-j&&J>=0&&J<=P.height-ce&&te.readPixels(q,J,j,ce,L.convert(ht),L.convert(rt),Ve)}finally{const Ze=F!==null?Ue.get(F).__webglFramebuffer:null;Me.bindFramebuffer(36160,Ze)}}},this.copyFramebufferToTexture=function(P,q,J=0){const j=Math.pow(2,-J),ce=Math.floor(q.image.width*j),Ve=Math.floor(q.image.height*j);Be.setTexture2D(q,0),te.copyTexSubImage2D(3553,J,0,0,P.x,P.y,ce,Ve),Me.unbindTexture()},this.copyTextureToTexture=function(P,q,J,j=0){const ce=q.image.width,Ve=q.image.height,Ye=L.convert(J.format),Je=L.convert(J.type);Be.setTexture2D(J,0),te.pixelStorei(37440,J.flipY),te.pixelStorei(37441,J.premultiplyAlpha),te.pixelStorei(3317,J.unpackAlignment),q.isDataTexture?te.texSubImage2D(3553,j,P.x,P.y,ce,Ve,Ye,Je,q.image.data):q.isCompressedTexture?te.compressedTexSubImage2D(3553,j,P.x,P.y,q.mipmaps[0].width,q.mipmaps[0].height,Ye,q.mipmaps[0].data):te.texSubImage2D(3553,j,P.x,P.y,Ye,Je,q.image),j===0&&J.generateMipmaps&&te.generateMipmap(3553),Me.unbindTexture()},this.copyTextureToTexture3D=function(P,q,J,j,ce=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ve=P.max.x-P.min.x+1,Ye=P.max.y-P.min.y+1,Je=P.max.z-P.min.z+1,Ze=L.convert(j.format),ht=L.convert(j.type);let rt;if(j.isData3DTexture)Be.setTexture3D(j,0),rt=32879;else if(j.isDataArrayTexture)Be.setTexture2DArray(j,0),rt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}te.pixelStorei(37440,j.flipY),te.pixelStorei(37441,j.premultiplyAlpha),te.pixelStorei(3317,j.unpackAlignment);const lt=te.getParameter(3314),St=te.getParameter(32878),ni=te.getParameter(3316),bi=te.getParameter(3315),Un=te.getParameter(32877),bn=J.isCompressedTexture?J.mipmaps[0]:J.image;te.pixelStorei(3314,bn.width),te.pixelStorei(32878,bn.height),te.pixelStorei(3316,P.min.x),te.pixelStorei(3315,P.min.y),te.pixelStorei(32877,P.min.z),J.isDataTexture||J.isData3DTexture?te.texSubImage3D(rt,ce,q.x,q.y,q.z,Ve,Ye,Je,Ze,ht,bn.data):J.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),te.compressedTexSubImage3D(rt,ce,q.x,q.y,q.z,Ve,Ye,Je,Ze,bn.data)):te.texSubImage3D(rt,ce,q.x,q.y,q.z,Ve,Ye,Je,Ze,ht,bn),te.pixelStorei(3314,lt),te.pixelStorei(32878,St),te.pixelStorei(3316,ni),te.pixelStorei(3315,bi),te.pixelStorei(32877,Un),ce===0&&j.generateMipmaps&&te.generateMipmap(rt),Me.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?Be.setTextureCube(P,0):P.isData3DTexture?Be.setTexture3D(P,0):P.isDataArrayTexture?Be.setTexture2DArray(P,0):Be.setTexture2D(P,0),Me.unbindTexture()},this.resetState=function(){b=0,D=0,F=null,Me.reset(),ue.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class cT extends lT{}cT.prototype.isWebGL1Renderer=!0;class ST extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class uT extends Qt{constructor(e=null,t=1,i=1,s,o,u,c,h,d=Ht,p=Ht,m,x){super(null,u,c,h,d,p,s,o,m,x),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fT extends gr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ld=new It,vc=new Bd,$o=new ca,ea=new B;class bT extends $t{constructor(e=new fn,t=new fT){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$o.copy(i.boundingSphere),$o.applyMatrix4(s),$o.radius+=o,e.ray.intersectsSphere($o)===!1)return;ld.copy(s).invert(),vc.copy(e.ray).applyMatrix4(ld);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,d=i.index,m=i.attributes.position;if(d!==null){const x=Math.max(0,u.start),M=Math.min(d.count,u.start+u.count);for(let S=x,v=M;S<v;S++){const g=d.getX(S);ea.fromBufferAttribute(m,g),cd(ea,g,h,s,e,t,this)}}else{const x=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let S=x,v=M;S<v;S++)ea.fromBufferAttribute(m,S),cd(ea,S,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function cd(l,e,t,i,s,o,u){const c=vc.distanceSqToPoint(l);if(c<t){const h=new B;vc.closestPointToPoint(l,h),h.applyMatrix4(i);const d=s.ray.origin.distanceTo(h);if(d<s.near||d>s.far)return;o.push({distance:d,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,object:u})}}class wT extends Qt{constructor(e,t,i,s,o,u,c,h,d){super(e,t,i,s,o,u,c,h,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jd extends fn{constructor(e=1,t=8,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const o=[],u=[],c=[],h=[],d=new B,p=new Le;u.push(0,0,0),c.push(0,0,1),h.push(.5,.5);for(let m=0,x=3;m<=t;m++,x+=3){const M=i+m/t*s;d.x=e*Math.cos(M),d.y=e*Math.sin(M),u.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(u[x]/e+1)/2,p.y=(u[x+1]/e+1)/2,h.push(p.x,p.y)}for(let m=1;m<=t;m++)o.push(m,m+1,0);this.setIndex(o),this.setAttribute("position",new Et(u,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(h,2))}static fromJSON(e){return new Jd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ac extends fn{constructor(e=1,t=1,i=1,s=8,o=1,u=!1,c=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:o,openEnded:u,thetaStart:c,thetaLength:h};const d=this;s=Math.floor(s),o=Math.floor(o);const p=[],m=[],x=[],M=[];let S=0;const v=[],g=i/2;let b=0;D(),u===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(p),this.setAttribute("position",new Et(m,3)),this.setAttribute("normal",new Et(x,3)),this.setAttribute("uv",new Et(M,2));function D(){const A=new B,C=new B;let z=0;const W=(t-e)/i;for(let T=0;T<=o;T++){const O=[],V=T/o,X=V*(t-e)+e;for(let re=0;re<=s;re++){const he=re/s,k=he*h+c,ne=Math.sin(k),Z=Math.cos(k);C.x=X*ne,C.y=-V*i+g,C.z=X*Z,m.push(C.x,C.y,C.z),A.set(ne,W,Z).normalize(),x.push(A.x,A.y,A.z),M.push(he,1-V),O.push(S++)}v.push(O)}for(let T=0;T<s;T++)for(let O=0;O<o;O++){const V=v[O][T],X=v[O+1][T],re=v[O+1][T+1],he=v[O][T+1];p.push(V,X,he),p.push(X,re,he),z+=6}d.addGroup(b,z,0),b+=z}function F(A){const C=S,z=new Le,W=new B;let T=0;const O=A===!0?e:t,V=A===!0?1:-1;for(let re=1;re<=s;re++)m.push(0,g*V,0),x.push(0,V,0),M.push(.5,.5),S++;const X=S;for(let re=0;re<=s;re++){const k=re/s*h+c,ne=Math.cos(k),Z=Math.sin(k);W.x=O*Z,W.y=g*V,W.z=O*ne,m.push(W.x,W.y,W.z),x.push(0,V,0),z.x=ne*.5+.5,z.y=Z*.5*V+.5,M.push(z.x,z.y),S++}for(let re=0;re<s;re++){const he=C+re,k=X+re;A===!0?p.push(k,k+1,he):p.push(k+1,k,he),T+=3}d.addGroup(b,T,A===!0?1:2),b+=T}}static fromJSON(e){return new Ac(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qd extends Ac{constructor(e=1,t=1,i=8,s=1,o=!1,u=0,c=Math.PI*2){super(0,e,t,i,s,o,u,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:u,thetaLength:c}}static fromJSON(e){return new Qd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ha extends fn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const o=[],u=[];c(s),d(i),p(),this.setAttribute("position",new Et(o,3)),this.setAttribute("normal",new Et(o.slice(),3)),this.setAttribute("uv",new Et(u,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function c(D){const F=new B,A=new B,C=new B;for(let z=0;z<t.length;z+=3)M(t[z+0],F),M(t[z+1],A),M(t[z+2],C),h(F,A,C,D)}function h(D,F,A,C){const z=C+1,W=[];for(let T=0;T<=z;T++){W[T]=[];const O=D.clone().lerp(A,T/z),V=F.clone().lerp(A,T/z),X=z-T;for(let re=0;re<=X;re++)re===0&&T===z?W[T][re]=O:W[T][re]=O.clone().lerp(V,re/X)}for(let T=0;T<z;T++)for(let O=0;O<2*(z-T)-1;O++){const V=Math.floor(O/2);O%2===0?(x(W[T][V+1]),x(W[T+1][V]),x(W[T][V])):(x(W[T][V+1]),x(W[T+1][V+1]),x(W[T+1][V]))}}function d(D){const F=new B;for(let A=0;A<o.length;A+=3)F.x=o[A+0],F.y=o[A+1],F.z=o[A+2],F.normalize().multiplyScalar(D),o[A+0]=F.x,o[A+1]=F.y,o[A+2]=F.z}function p(){const D=new B;for(let F=0;F<o.length;F+=3){D.x=o[F+0],D.y=o[F+1],D.z=o[F+2];const A=g(D)/2/Math.PI+.5,C=b(D)/Math.PI+.5;u.push(A,1-C)}S(),m()}function m(){for(let D=0;D<u.length;D+=6){const F=u[D+0],A=u[D+2],C=u[D+4],z=Math.max(F,A,C),W=Math.min(F,A,C);z>.9&&W<.1&&(F<.2&&(u[D+0]+=1),A<.2&&(u[D+2]+=1),C<.2&&(u[D+4]+=1))}}function x(D){o.push(D.x,D.y,D.z)}function M(D,F){const A=D*3;F.x=e[A+0],F.y=e[A+1],F.z=e[A+2]}function S(){const D=new B,F=new B,A=new B,C=new B,z=new Le,W=new Le,T=new Le;for(let O=0,V=0;O<o.length;O+=9,V+=6){D.set(o[O+0],o[O+1],o[O+2]),F.set(o[O+3],o[O+4],o[O+5]),A.set(o[O+6],o[O+7],o[O+8]),z.set(u[V+0],u[V+1]),W.set(u[V+2],u[V+3]),T.set(u[V+4],u[V+5]),C.copy(D).add(F).add(A).divideScalar(3);const X=g(C);v(z,V+0,D,X),v(W,V+2,F,X),v(T,V+4,A,X)}}function v(D,F,A,C){C<0&&D.x===1&&(u[F]=D.x-1),A.x===0&&A.z===0&&(u[F]=C/2/Math.PI+.5)}function g(D){return Math.atan2(D.z,-D.x)}function b(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}static fromJSON(e){return new ha(e.vertices,e.indices,e.radius,e.details)}}class $d extends ha{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $d(e.radius,e.detail)}}class ep extends ha{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ep(e.radius,e.detail)}}class tp extends fn{constructor(e=1,t=32,i=16,s=0,o=Math.PI*2,u=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:o,thetaStart:u,thetaLength:c},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const h=Math.min(u+c,Math.PI);let d=0;const p=[],m=new B,x=new B,M=[],S=[],v=[],g=[];for(let b=0;b<=i;b++){const D=[],F=b/i;let A=0;b==0&&u==0?A=.5/t:b==i&&h==Math.PI&&(A=-.5/t);for(let C=0;C<=t;C++){const z=C/t;m.x=-e*Math.cos(s+z*o)*Math.sin(u+F*c),m.y=e*Math.cos(u+F*c),m.z=e*Math.sin(s+z*o)*Math.sin(u+F*c),S.push(m.x,m.y,m.z),x.copy(m).normalize(),v.push(x.x,x.y,x.z),g.push(z+A,1-F),D.push(d++)}p.push(D)}for(let b=0;b<i;b++)for(let D=0;D<t;D++){const F=p[b][D+1],A=p[b][D],C=p[b+1][D],z=p[b+1][D+1];(b!==0||u>0)&&M.push(F,A,z),(b!==i-1||h<Math.PI)&&M.push(A,C,z)}this.setIndex(M),this.setAttribute("position",new Et(S,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(g,2))}static fromJSON(e){return new tp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class TT extends gr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ET extends gr{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new at(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ud={enabled:!1,files:{},add:function(l,e){this.enabled!==!1&&(this.files[l]=e)},get:function(l){if(this.enabled!==!1)return this.files[l]},remove:function(l){delete this.files[l]},clear:function(){this.files={}}};class hT{constructor(e,t,i){const s=this;let o=!1,u=0,c=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){c++,o===!1&&s.onStart!==void 0&&s.onStart(p,u,c),o=!0},this.itemEnd=function(p){u++,s.onProgress!==void 0&&s.onProgress(p,u,c),u===c&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,m){return d.push(p,m),this},this.removeHandler=function(p){const m=d.indexOf(p);return m!==-1&&d.splice(m,2),this},this.getHandler=function(p){for(let m=0,x=d.length;m<x;m+=2){const M=d[m],S=d[m+1];if(M.global&&(M.lastIndex=0),M.test(p))return S}return null}}}const dT=new hT;class np{constructor(e){this.manager=e!==void 0?e:dT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,o){i.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class pT extends np{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,u=ud.get(e);if(u!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(u),o.manager.itemEnd(e)},0),u;const c=Ns("img");function h(){p(),ud.add(e,this),t&&t(this),o.manager.itemEnd(e)}function d(m){p(),s&&s(m),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){c.removeEventListener("load",h,!1),c.removeEventListener("error",d,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),o.manager.itemStart(e),c.src=e,c}}class AT extends np{constructor(e){super(e)}load(e,t,i,s){const o=new Qt,u=new pT(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){o.image=c,o.needsUpdate=!0,t!==void 0&&t(o)},i,s),o}}class Ws extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class CT extends Ws{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DefaultUp),this.updateMatrix(),this.groundColor=new at(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const fd=new It,hd=new B,dd=new B;class ip{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wc,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;hd.setFromMatrixPosition(e.matrixWorld),t.position.copy(hd),dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dd),t.updateMatrixWorld(),fd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pd=new It,Es=new B,ic=new B;class mT extends ip{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Es.setFromMatrixPosition(e.matrixWorld),i.position.copy(Es),ic.copy(i.position),ic.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ic),i.updateMatrixWorld(),s.makeTranslation(-Es.x,-Es.y,-Es.z),pd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pd)}}class LT extends Ws{constructor(e,t,i=0,s=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new mT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class gT extends ip{constructor(){super(new ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class DT extends Ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DefaultUp),this.updateMatrix(),this.target=new $t,this.shadow=new gT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class PT extends Ws{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class RT extends Ws{constructor(e,t,i=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class xT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=md(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=md();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function md(){return(typeof performance=="undefined"?Date:performance).now()}class gd{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);const rc={type:"change"},sc={type:"start"},oc={type:"end"};class IT extends Xi{constructor(e,t){super(),t===void 0&&console.warn('THREE.TrackballControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.TrackballControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.');const i=this,s={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:vi.ROTATE,MIDDLE:vi.DOLLY,RIGHT:vi.PAN},this.target=new B;const o=1e-6,u=new B;let c=1,h=s.NONE,d=s.NONE,p=0,m=0,x=0;const M=new B,S=new Le,v=new Le,g=new B,b=new Le,D=new Le,F=new Le,A=new Le,C=[],z={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const Q=i.domElement.getBoundingClientRect(),xe=i.domElement.ownerDocument.documentElement;i.screen.left=Q.left+window.pageXOffset-xe.clientLeft,i.screen.top=Q.top+window.pageYOffset-xe.clientTop,i.screen.width=Q.width,i.screen.height=Q.height};const W=function(){const Q=new Le;return function(De,Me){return Q.set((De-i.screen.left)/i.screen.width,(Me-i.screen.top)/i.screen.height),Q}}(),T=function(){const Q=new Le;return function(De,Me){return Q.set((De-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-Me))/i.screen.width),Q}}();this.rotateCamera=function(){const Q=new B,xe=new ki,De=new B,Me=new B,ke=new B,Ue=new B;return function(){Ue.set(v.x-S.x,v.y-S.y,0);let nt=Ue.length();nt?(M.copy(i.object.position).sub(i.target),De.copy(M).normalize(),Me.copy(i.object.up).normalize(),ke.crossVectors(Me,De).normalize(),Me.setLength(v.y-S.y),ke.setLength(v.x-S.x),Ue.copy(Me.add(ke)),Q.crossVectors(Ue,M).normalize(),nt*=i.rotateSpeed,xe.setFromAxisAngle(Q,nt),M.applyQuaternion(xe),i.object.up.applyQuaternion(xe),g.copy(Q),x=nt):!i.staticMoving&&x&&(x*=Math.sqrt(1-i.dynamicDampingFactor),M.copy(i.object.position).sub(i.target),xe.setFromAxisAngle(g,x),M.applyQuaternion(xe),i.object.up.applyQuaternion(xe)),S.copy(v)}}(),this.zoomCamera=function(){let Q;h===s.TOUCH_ZOOM_PAN?(Q=p/m,p=m,i.object.isPerspectiveCamera?M.multiplyScalar(Q):i.object.isOrthographicCamera?(i.object.zoom/=Q,i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(Q=1+(D.y-b.y)*i.zoomSpeed,Q!==1&&Q>0&&(i.object.isPerspectiveCamera?M.multiplyScalar(Q):i.object.isOrthographicCamera?(i.object.zoom/=Q,i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?b.copy(D):b.y+=(D.y-b.y)*this.dynamicDampingFactor)},this.panCamera=function(){const Q=new Le,xe=new B,De=new B;return function(){if(Q.copy(A).sub(F),Q.lengthSq()){if(i.object.isOrthographicCamera){const ke=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,Ue=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;Q.x*=ke,Q.y*=Ue}Q.multiplyScalar(M.length()*i.panSpeed),De.copy(M).cross(i.object.up).setLength(Q.x),De.add(xe.copy(i.object.up).setLength(Q.y)),i.object.position.add(De),i.target.add(De),i.staticMoving?F.copy(A):F.add(Q.subVectors(A,F).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(M.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,M.setLength(i.maxDistance)),b.copy(D)),M.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,M.setLength(i.minDistance)),b.copy(D)))},this.update=function(){M.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,M),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),u.distanceToSquared(i.object.position)>o&&(i.dispatchEvent(rc),u.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(u.distanceToSquared(i.object.position)>o||c!==i.object.zoom)&&(i.dispatchEvent(rc),u.copy(i.object.position),c=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){h=s.NONE,d=s.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),M.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(rc),u.copy(i.object.position),c=i.object.zoom};function O(Q){i.enabled!==!1&&(C.length===0&&(i.domElement.setPointerCapture(Q.pointerId),i.domElement.addEventListener("pointermove",V),i.domElement.addEventListener("pointerup",X)),we(Q),Q.pointerType==="touch"?K(Q):ne(Q))}function V(Q){i.enabled!==!1&&(Q.pointerType==="touch"?$(Q):Z(Q))}function X(Q){i.enabled!==!1&&(Q.pointerType==="touch"?me(Q):le(),Re(Q),C.length===0&&(i.domElement.releasePointerCapture(Q.pointerId),i.domElement.removeEventListener("pointermove",V),i.domElement.removeEventListener("pointerup",X)))}function re(Q){Re(Q)}function he(Q){i.enabled!==!1&&(window.removeEventListener("keydown",he),d===s.NONE&&(Q.code===i.keys[s.ROTATE]&&!i.noRotate?d=s.ROTATE:Q.code===i.keys[s.ZOOM]&&!i.noZoom?d=s.ZOOM:Q.code===i.keys[s.PAN]&&!i.noPan&&(d=s.PAN)))}function k(){i.enabled!==!1&&(d=s.NONE,window.addEventListener("keydown",he))}function ne(Q){if(h===s.NONE)switch(Q.button){case i.mouseButtons.LEFT:h=s.ROTATE;break;case i.mouseButtons.MIDDLE:h=s.ZOOM;break;case i.mouseButtons.RIGHT:h=s.PAN;break}const xe=d!==s.NONE?d:h;xe===s.ROTATE&&!i.noRotate?(v.copy(T(Q.pageX,Q.pageY)),S.copy(v)):xe===s.ZOOM&&!i.noZoom?(b.copy(W(Q.pageX,Q.pageY)),D.copy(b)):xe===s.PAN&&!i.noPan&&(F.copy(W(Q.pageX,Q.pageY)),A.copy(F)),i.dispatchEvent(sc)}function Z(Q){const xe=d!==s.NONE?d:h;xe===s.ROTATE&&!i.noRotate?(S.copy(v),v.copy(T(Q.pageX,Q.pageY))):xe===s.ZOOM&&!i.noZoom?D.copy(W(Q.pageX,Q.pageY)):xe===s.PAN&&!i.noPan&&A.copy(W(Q.pageX,Q.pageY))}function le(){h=s.NONE,i.dispatchEvent(oc)}function se(Q){if(i.enabled!==!1&&i.noZoom!==!0){switch(Q.preventDefault(),Q.deltaMode){case 2:b.y-=Q.deltaY*.025;break;case 1:b.y-=Q.deltaY*.01;break;default:b.y-=Q.deltaY*25e-5;break}i.dispatchEvent(sc),i.dispatchEvent(oc)}}function K(Q){switch(Ie(Q),C.length){case 1:h=s.TOUCH_ROTATE,v.copy(T(C[0].pageX,C[0].pageY)),S.copy(v);break;default:h=s.TOUCH_ZOOM_PAN;const xe=C[0].pageX-C[1].pageX,De=C[0].pageY-C[1].pageY;m=p=Math.sqrt(xe*xe+De*De);const Me=(C[0].pageX+C[1].pageX)/2,ke=(C[0].pageY+C[1].pageY)/2;F.copy(W(Me,ke)),A.copy(F);break}i.dispatchEvent(sc)}function $(Q){switch(Ie(Q),C.length){case 1:S.copy(v),v.copy(T(Q.pageX,Q.pageY));break;default:const xe=te(Q),De=Q.pageX-xe.x,Me=Q.pageY-xe.y;m=Math.sqrt(De*De+Me*Me);const ke=(Q.pageX+xe.x)/2,Ue=(Q.pageY+xe.y)/2;A.copy(W(ke,Ue));break}}function me(Q){switch(C.length){case 0:h=s.NONE;break;case 1:h=s.TOUCH_ROTATE,v.copy(T(Q.pageX,Q.pageY)),S.copy(v);break;case 2:h=s.TOUCH_ZOOM_PAN,v.copy(T(Q.pageX-S.x,Q.pageY-S.y)),S.copy(v);break}i.dispatchEvent(oc)}function de(Q){i.enabled!==!1&&Q.preventDefault()}function we(Q){C.push(Q)}function Re(Q){delete z[Q.pointerId];for(let xe=0;xe<C.length;xe++)if(C[xe].pointerId==Q.pointerId){C.splice(xe,1);return}}function Ie(Q){let xe=z[Q.pointerId];xe===void 0&&(xe=new Le,z[Q.pointerId]=xe),xe.set(Q.pageX,Q.pageY)}function te(Q){const xe=Q.pointerId===C[0].pointerId?C[1]:C[0];return z[xe.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",de),i.domElement.removeEventListener("pointerdown",O),i.domElement.removeEventListener("pointercancel",re),i.domElement.removeEventListener("wheel",se),i.domElement.removeEventListener("pointermove",V),i.domElement.removeEventListener("pointerup",X),window.removeEventListener("keydown",he),window.removeEventListener("keyup",k)},this.domElement.addEventListener("contextmenu",de),this.domElement.addEventListener("pointerdown",O),this.domElement.addEventListener("pointercancel",re),this.domElement.addEventListener("wheel",se,{passive:!1}),window.addEventListener("keydown",he),window.addEventListener("keyup",k),this.handleResize(),this.update()}}var As=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},_c={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(l,e){(function(){var t,i="4.17.21",s=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",d=500,p="__lodash_placeholder__",m=1,x=2,M=4,S=1,v=2,g=1,b=2,D=4,F=8,A=16,C=32,z=64,W=128,T=256,O=512,V=30,X="...",re=800,he=16,k=1,ne=2,Z=3,le=1/0,se=9007199254740991,K=17976931348623157e292,$=0/0,me=4294967295,de=me-1,we=me>>>1,Re=[["ary",W],["bind",g],["bindKey",b],["curry",F],["curryRight",A],["flip",O],["partial",C],["partialRight",z],["rearg",T]],Ie="[object Arguments]",te="[object Array]",Q="[object AsyncFunction]",xe="[object Boolean]",De="[object Date]",Me="[object DOMException]",ke="[object Error]",Ue="[object Function]",Be="[object GeneratorFunction]",nt="[object Map]",Mt="[object Number]",Ot="[object Null]",wt="[object Object]",At="[object Promise]",ft="[object Proxy]",Bt="[object RegExp]",yt="[object Set]",R="[object String]",E="[object Symbol]",ie="[object Undefined]",pe="[object WeakMap]",Se="[object WeakSet]",Te="[object ArrayBuffer]",Ne="[object DataView]",L="[object Float32Array]",ue="[object Float64Array]",be="[object Int8Array]",ve="[object Int16Array]",N="[object Int32Array]",_e="[object Uint8Array]",ge="[object Uint8ClampedArray]",ze="[object Uint16Array]",Ee="[object Uint32Array]",Oe=/\b__p \+= '';/g,ye=/\b(__p \+=) '' \+/g,Xe=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ct=/&(?:amp|lt|gt|quot|#39);/g,ut=/[&<>"']/g,kt=RegExp(ct.source),Sn=RegExp(ut.source),Vs=/<%-([\s\S]+?)%>/g,da=/<%([\s\S]+?)%>/g,Yi=/<%=([\s\S]+?)%>/g,pa=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,rs=/^\w*$/,ks=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ss=/[\\^$.*+?()[\]{}|]/g,ma=RegExp(ss.source),os=/^\s+/,P=/\s/,q=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,J=/\{\n\/\* \[wrapped with (.+)\] \*/,j=/,? & /,ce=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ve=/[()=,{}\[\]\/\s]/,Ye=/\\(\\)?/g,Je=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ze=/\w*$/,ht=/^[-+]0x[0-9a-f]+$/i,rt=/^0b[01]+$/i,lt=/^\[object .+?Constructor\]$/,St=/^0o[0-7]+$/i,ni=/^(?:0|[1-9]\d*)$/,bi=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Un=/($^)/,bn=/['\n\r\u2028\u2029\\]/g,st="\\ud800-\\udfff",wi="\\u0300-\\u036f",Ct="\\ufe20-\\ufe2f",wn="\\u20d0-\\u20ff",Bn=wi+Ct+wn,Ti="\\u2700-\\u27bf",xr="a-z\\xdf-\\xf6\\xf8-\\xff",Xt="\\xac\\xb1\\xd7\\xf7",ji="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",as="\\u2000-\\u206f",Tn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Lc="A-Z\\xc0-\\xd6\\xd8-\\xde",Dc="\\ufe0e\\ufe0f",Pc=Xt+ji+as+Tn,ga="['\u2019]",sp="["+st+"]",Rc="["+Pc+"]",Xs="["+Bn+"]",Ic="\\d+",op="["+Ti+"]",Fc="["+xr+"]",Oc="[^"+st+Pc+Ic+Ti+xr+Lc+"]",xa="\\ud83c[\\udffb-\\udfff]",ap="(?:"+Xs+"|"+xa+")",Nc="[^"+st+"]",va="(?:\\ud83c[\\udde6-\\uddff]){2}",_a="[\\ud800-\\udbff][\\udc00-\\udfff]",vr="["+Lc+"]",zc="\\u200d",Uc="(?:"+Fc+"|"+Oc+")",lp="(?:"+vr+"|"+Oc+")",Bc="(?:"+ga+"(?:d|ll|m|re|s|t|ve))?",Gc="(?:"+ga+"(?:D|LL|M|RE|S|T|VE))?",Wc=ap+"?",Hc="["+Dc+"]?",cp="(?:"+zc+"(?:"+[Nc,va,_a].join("|")+")"+Hc+Wc+")*",up="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",fp="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Vc=Hc+Wc+cp,hp="(?:"+[op,va,_a].join("|")+")"+Vc,dp="(?:"+[Nc+Xs+"?",Xs,va,_a,sp].join("|")+")",pp=RegExp(ga,"g"),mp=RegExp(Xs,"g"),Ma=RegExp(xa+"(?="+xa+")|"+dp+Vc,"g"),gp=RegExp([vr+"?"+Fc+"+"+Bc+"(?="+[Rc,vr,"$"].join("|")+")",lp+"+"+Gc+"(?="+[Rc,vr+Uc,"$"].join("|")+")",vr+"?"+Uc+"+"+Bc,vr+"+"+Gc,fp,up,Ic,hp].join("|"),"g"),xp=RegExp("["+zc+st+Bn+Dc+"]"),vp=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,_p=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Mp=-1,vt={};vt[L]=vt[ue]=vt[be]=vt[ve]=vt[N]=vt[_e]=vt[ge]=vt[ze]=vt[Ee]=!0,vt[Ie]=vt[te]=vt[Te]=vt[xe]=vt[Ne]=vt[De]=vt[ke]=vt[Ue]=vt[nt]=vt[Mt]=vt[wt]=vt[Bt]=vt[yt]=vt[R]=vt[pe]=!1;var xt={};xt[Ie]=xt[te]=xt[Te]=xt[Ne]=xt[xe]=xt[De]=xt[L]=xt[ue]=xt[be]=xt[ve]=xt[N]=xt[nt]=xt[Mt]=xt[wt]=xt[Bt]=xt[yt]=xt[R]=xt[E]=xt[_e]=xt[ge]=xt[ze]=xt[Ee]=!0,xt[ke]=xt[Ue]=xt[pe]=!1;var yp={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Sp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},bp={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},wp={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Tp=parseFloat,Ep=parseInt,kc=typeof As=="object"&&As&&As.Object===Object&&As,Ap=typeof self=="object"&&self&&self.Object===Object&&self,qt=kc||Ap||Function("return this")(),ya=e&&!e.nodeType&&e,Zi=ya&&!0&&l&&!l.nodeType&&l,Xc=Zi&&Zi.exports===ya,Sa=Xc&&kc.process,En=function(){try{var G=Zi&&Zi.require&&Zi.require("util").types;return G||Sa&&Sa.binding&&Sa.binding("util")}catch{}}(),qc=En&&En.isArrayBuffer,Yc=En&&En.isDate,jc=En&&En.isMap,Zc=En&&En.isRegExp,Kc=En&&En.isSet,Jc=En&&En.isTypedArray;function hn(G,ee,Y){switch(Y.length){case 0:return G.call(ee);case 1:return G.call(ee,Y[0]);case 2:return G.call(ee,Y[0],Y[1]);case 3:return G.call(ee,Y[0],Y[1],Y[2])}return G.apply(ee,Y)}function Cp(G,ee,Y,Pe){for(var qe=-1,dt=G==null?0:G.length;++qe<dt;){var Nt=G[qe];ee(Pe,Nt,Y(Nt),G)}return Pe}function An(G,ee){for(var Y=-1,Pe=G==null?0:G.length;++Y<Pe&&ee(G[Y],Y,G)!==!1;);return G}function Lp(G,ee){for(var Y=G==null?0:G.length;Y--&&ee(G[Y],Y,G)!==!1;);return G}function Qc(G,ee){for(var Y=-1,Pe=G==null?0:G.length;++Y<Pe;)if(!ee(G[Y],Y,G))return!1;return!0}function Ei(G,ee){for(var Y=-1,Pe=G==null?0:G.length,qe=0,dt=[];++Y<Pe;){var Nt=G[Y];ee(Nt,Y,G)&&(dt[qe++]=Nt)}return dt}function qs(G,ee){var Y=G==null?0:G.length;return!!Y&&_r(G,ee,0)>-1}function ba(G,ee,Y){for(var Pe=-1,qe=G==null?0:G.length;++Pe<qe;)if(Y(ee,G[Pe]))return!0;return!1}function bt(G,ee){for(var Y=-1,Pe=G==null?0:G.length,qe=Array(Pe);++Y<Pe;)qe[Y]=ee(G[Y],Y,G);return qe}function Ai(G,ee){for(var Y=-1,Pe=ee.length,qe=G.length;++Y<Pe;)G[qe+Y]=ee[Y];return G}function wa(G,ee,Y,Pe){var qe=-1,dt=G==null?0:G.length;for(Pe&&dt&&(Y=G[++qe]);++qe<dt;)Y=ee(Y,G[qe],qe,G);return Y}function Dp(G,ee,Y,Pe){var qe=G==null?0:G.length;for(Pe&&qe&&(Y=G[--qe]);qe--;)Y=ee(Y,G[qe],qe,G);return Y}function Ta(G,ee){for(var Y=-1,Pe=G==null?0:G.length;++Y<Pe;)if(ee(G[Y],Y,G))return!0;return!1}var Pp=Ea("length");function Rp(G){return G.split("")}function Ip(G){return G.match(ce)||[]}function $c(G,ee,Y){var Pe;return Y(G,function(qe,dt,Nt){if(ee(qe,dt,Nt))return Pe=dt,!1}),Pe}function Ys(G,ee,Y,Pe){for(var qe=G.length,dt=Y+(Pe?1:-1);Pe?dt--:++dt<qe;)if(ee(G[dt],dt,G))return dt;return-1}function _r(G,ee,Y){return ee===ee?Xp(G,ee,Y):Ys(G,eu,Y)}function Fp(G,ee,Y,Pe){for(var qe=Y-1,dt=G.length;++qe<dt;)if(Pe(G[qe],ee))return qe;return-1}function eu(G){return G!==G}function tu(G,ee){var Y=G==null?0:G.length;return Y?Ca(G,ee)/Y:$}function Ea(G){return function(ee){return ee==null?t:ee[G]}}function Aa(G){return function(ee){return G==null?t:G[ee]}}function nu(G,ee,Y,Pe,qe){return qe(G,function(dt,Nt,gt){Y=Pe?(Pe=!1,dt):ee(Y,dt,Nt,gt)}),Y}function Op(G,ee){var Y=G.length;for(G.sort(ee);Y--;)G[Y]=G[Y].value;return G}function Ca(G,ee){for(var Y,Pe=-1,qe=G.length;++Pe<qe;){var dt=ee(G[Pe]);dt!==t&&(Y=Y===t?dt:Y+dt)}return Y}function La(G,ee){for(var Y=-1,Pe=Array(G);++Y<G;)Pe[Y]=ee(Y);return Pe}function Np(G,ee){return bt(ee,function(Y){return[Y,G[Y]]})}function iu(G){return G&&G.slice(0,au(G)+1).replace(os,"")}function dn(G){return function(ee){return G(ee)}}function Da(G,ee){return bt(ee,function(Y){return G[Y]})}function ls(G,ee){return G.has(ee)}function ru(G,ee){for(var Y=-1,Pe=G.length;++Y<Pe&&_r(ee,G[Y],0)>-1;);return Y}function su(G,ee){for(var Y=G.length;Y--&&_r(ee,G[Y],0)>-1;);return Y}function zp(G,ee){for(var Y=G.length,Pe=0;Y--;)G[Y]===ee&&++Pe;return Pe}var Up=Aa(yp),Bp=Aa(Sp);function Gp(G){return"\\"+wp[G]}function Wp(G,ee){return G==null?t:G[ee]}function Mr(G){return xp.test(G)}function Hp(G){return vp.test(G)}function Vp(G){for(var ee,Y=[];!(ee=G.next()).done;)Y.push(ee.value);return Y}function Pa(G){var ee=-1,Y=Array(G.size);return G.forEach(function(Pe,qe){Y[++ee]=[qe,Pe]}),Y}function ou(G,ee){return function(Y){return G(ee(Y))}}function Ci(G,ee){for(var Y=-1,Pe=G.length,qe=0,dt=[];++Y<Pe;){var Nt=G[Y];(Nt===ee||Nt===p)&&(G[Y]=p,dt[qe++]=Y)}return dt}function js(G){var ee=-1,Y=Array(G.size);return G.forEach(function(Pe){Y[++ee]=Pe}),Y}function kp(G){var ee=-1,Y=Array(G.size);return G.forEach(function(Pe){Y[++ee]=[Pe,Pe]}),Y}function Xp(G,ee,Y){for(var Pe=Y-1,qe=G.length;++Pe<qe;)if(G[Pe]===ee)return Pe;return-1}function qp(G,ee,Y){for(var Pe=Y+1;Pe--;)if(G[Pe]===ee)return Pe;return Pe}function yr(G){return Mr(G)?jp(G):Pp(G)}function Gn(G){return Mr(G)?Zp(G):Rp(G)}function au(G){for(var ee=G.length;ee--&&P.test(G.charAt(ee)););return ee}var Yp=Aa(bp);function jp(G){for(var ee=Ma.lastIndex=0;Ma.test(G);)++ee;return ee}function Zp(G){return G.match(Ma)||[]}function Kp(G){return G.match(gp)||[]}var Jp=function G(ee){ee=ee==null?qt:Sr.defaults(qt.Object(),ee,Sr.pick(qt,_p));var Y=ee.Array,Pe=ee.Date,qe=ee.Error,dt=ee.Function,Nt=ee.Math,gt=ee.Object,Ra=ee.RegExp,Qp=ee.String,Cn=ee.TypeError,Zs=Y.prototype,$p=dt.prototype,br=gt.prototype,Ks=ee["__core-js_shared__"],Js=$p.toString,mt=br.hasOwnProperty,em=0,lu=function(){var n=/[^.]+$/.exec(Ks&&Ks.keys&&Ks.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Qs=br.toString,tm=Js.call(gt),nm=qt._,im=Ra("^"+Js.call(mt).replace(ss,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),$s=Xc?ee.Buffer:t,Li=ee.Symbol,eo=ee.Uint8Array,cu=$s?$s.allocUnsafe:t,to=ou(gt.getPrototypeOf,gt),uu=gt.create,fu=br.propertyIsEnumerable,no=Zs.splice,hu=Li?Li.isConcatSpreadable:t,cs=Li?Li.iterator:t,Ki=Li?Li.toStringTag:t,io=function(){try{var n=tr(gt,"defineProperty");return n({},"",{}),n}catch{}}(),rm=ee.clearTimeout!==qt.clearTimeout&&ee.clearTimeout,sm=Pe&&Pe.now!==qt.Date.now&&Pe.now,om=ee.setTimeout!==qt.setTimeout&&ee.setTimeout,ro=Nt.ceil,so=Nt.floor,Ia=gt.getOwnPropertySymbols,am=$s?$s.isBuffer:t,du=ee.isFinite,lm=Zs.join,cm=ou(gt.keys,gt),zt=Nt.max,jt=Nt.min,um=Pe.now,fm=ee.parseInt,pu=Nt.random,hm=Zs.reverse,Fa=tr(ee,"DataView"),us=tr(ee,"Map"),Oa=tr(ee,"Promise"),wr=tr(ee,"Set"),fs=tr(ee,"WeakMap"),hs=tr(gt,"create"),oo=fs&&new fs,Tr={},dm=nr(Fa),pm=nr(us),mm=nr(Oa),gm=nr(wr),xm=nr(fs),ao=Li?Li.prototype:t,ds=ao?ao.valueOf:t,mu=ao?ao.toString:t;function y(n){if(Lt(n)&&!je(n)&&!(n instanceof it)){if(n instanceof Ln)return n;if(mt.call(n,"__wrapped__"))return xf(n)}return new Ln(n)}var Er=function(){function n(){}return function(r){if(!Tt(r))return{};if(uu)return uu(r);n.prototype=r;var a=new n;return n.prototype=t,a}}();function lo(){}function Ln(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}y.templateSettings={escape:Vs,evaluate:da,interpolate:Yi,variable:"",imports:{_:y}},y.prototype=lo.prototype,y.prototype.constructor=y,Ln.prototype=Er(lo.prototype),Ln.prototype.constructor=Ln;function it(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=me,this.__views__=[]}function vm(){var n=new it(this.__wrapped__);return n.__actions__=an(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=an(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=an(this.__views__),n}function _m(){if(this.__filtered__){var n=new it(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Mm(){var n=this.__wrapped__.value(),r=this.__dir__,a=je(n),f=r<0,_=a?n.length:0,w=Rg(0,_,this.__views__),I=w.start,U=w.end,H=U-I,oe=f?U:I-1,ae=this.__iteratees__,fe=ae.length,Ae=0,Fe=jt(H,this.__takeCount__);if(!a||!f&&_==H&&Fe==H)return Bu(n,this.__actions__);var We=[];e:for(;H--&&Ae<Fe;){oe+=r;for(var Qe=-1,He=n[oe];++Qe<fe;){var et=ae[Qe],ot=et.iteratee,gn=et.type,nn=ot(He);if(gn==ne)He=nn;else if(!nn){if(gn==k)continue e;break e}}We[Ae++]=He}return We}it.prototype=Er(lo.prototype),it.prototype.constructor=it;function Ji(n){var r=-1,a=n==null?0:n.length;for(this.clear();++r<a;){var f=n[r];this.set(f[0],f[1])}}function ym(){this.__data__=hs?hs(null):{},this.size=0}function Sm(n){var r=this.has(n)&&delete this.__data__[n];return this.size-=r?1:0,r}function bm(n){var r=this.__data__;if(hs){var a=r[n];return a===h?t:a}return mt.call(r,n)?r[n]:t}function wm(n){var r=this.__data__;return hs?r[n]!==t:mt.call(r,n)}function Tm(n,r){var a=this.__data__;return this.size+=this.has(n)?0:1,a[n]=hs&&r===t?h:r,this}Ji.prototype.clear=ym,Ji.prototype.delete=Sm,Ji.prototype.get=bm,Ji.prototype.has=wm,Ji.prototype.set=Tm;function ii(n){var r=-1,a=n==null?0:n.length;for(this.clear();++r<a;){var f=n[r];this.set(f[0],f[1])}}function Em(){this.__data__=[],this.size=0}function Am(n){var r=this.__data__,a=co(r,n);if(a<0)return!1;var f=r.length-1;return a==f?r.pop():no.call(r,a,1),--this.size,!0}function Cm(n){var r=this.__data__,a=co(r,n);return a<0?t:r[a][1]}function Lm(n){return co(this.__data__,n)>-1}function Dm(n,r){var a=this.__data__,f=co(a,n);return f<0?(++this.size,a.push([n,r])):a[f][1]=r,this}ii.prototype.clear=Em,ii.prototype.delete=Am,ii.prototype.get=Cm,ii.prototype.has=Lm,ii.prototype.set=Dm;function ri(n){var r=-1,a=n==null?0:n.length;for(this.clear();++r<a;){var f=n[r];this.set(f[0],f[1])}}function Pm(){this.size=0,this.__data__={hash:new Ji,map:new(us||ii),string:new Ji}}function Rm(n){var r=So(this,n).delete(n);return this.size-=r?1:0,r}function Im(n){return So(this,n).get(n)}function Fm(n){return So(this,n).has(n)}function Om(n,r){var a=So(this,n),f=a.size;return a.set(n,r),this.size+=a.size==f?0:1,this}ri.prototype.clear=Pm,ri.prototype.delete=Rm,ri.prototype.get=Im,ri.prototype.has=Fm,ri.prototype.set=Om;function Qi(n){var r=-1,a=n==null?0:n.length;for(this.__data__=new ri;++r<a;)this.add(n[r])}function Nm(n){return this.__data__.set(n,h),this}function zm(n){return this.__data__.has(n)}Qi.prototype.add=Qi.prototype.push=Nm,Qi.prototype.has=zm;function Wn(n){var r=this.__data__=new ii(n);this.size=r.size}function Um(){this.__data__=new ii,this.size=0}function Bm(n){var r=this.__data__,a=r.delete(n);return this.size=r.size,a}function Gm(n){return this.__data__.get(n)}function Wm(n){return this.__data__.has(n)}function Hm(n,r){var a=this.__data__;if(a instanceof ii){var f=a.__data__;if(!us||f.length<s-1)return f.push([n,r]),this.size=++a.size,this;a=this.__data__=new ri(f)}return a.set(n,r),this.size=a.size,this}Wn.prototype.clear=Um,Wn.prototype.delete=Bm,Wn.prototype.get=Gm,Wn.prototype.has=Wm,Wn.prototype.set=Hm;function gu(n,r){var a=je(n),f=!a&&ir(n),_=!a&&!f&&Fi(n),w=!a&&!f&&!_&&Dr(n),I=a||f||_||w,U=I?La(n.length,Qp):[],H=U.length;for(var oe in n)(r||mt.call(n,oe))&&!(I&&(oe=="length"||_&&(oe=="offset"||oe=="parent")||w&&(oe=="buffer"||oe=="byteLength"||oe=="byteOffset")||li(oe,H)))&&U.push(oe);return U}function xu(n){var r=n.length;return r?n[qa(0,r-1)]:t}function Vm(n,r){return bo(an(n),$i(r,0,n.length))}function km(n){return bo(an(n))}function Na(n,r,a){(a!==t&&!Hn(n[r],a)||a===t&&!(r in n))&&si(n,r,a)}function ps(n,r,a){var f=n[r];(!(mt.call(n,r)&&Hn(f,a))||a===t&&!(r in n))&&si(n,r,a)}function co(n,r){for(var a=n.length;a--;)if(Hn(n[a][0],r))return a;return-1}function Xm(n,r,a,f){return Di(n,function(_,w,I){r(f,_,a(_),I)}),f}function vu(n,r){return n&&Jn(r,Gt(r),n)}function qm(n,r){return n&&Jn(r,cn(r),n)}function si(n,r,a){r=="__proto__"&&io?io(n,r,{configurable:!0,enumerable:!0,value:a,writable:!0}):n[r]=a}function za(n,r){for(var a=-1,f=r.length,_=Y(f),w=n==null;++a<f;)_[a]=w?t:xl(n,r[a]);return _}function $i(n,r,a){return n===n&&(a!==t&&(n=n<=a?n:a),r!==t&&(n=n>=r?n:r)),n}function Dn(n,r,a,f,_,w){var I,U=r&m,H=r&x,oe=r&M;if(a&&(I=_?a(n,f,_,w):a(n)),I!==t)return I;if(!Tt(n))return n;var ae=je(n);if(ae){if(I=Fg(n),!U)return an(n,I)}else{var fe=Zt(n),Ae=fe==Ue||fe==Be;if(Fi(n))return Hu(n,U);if(fe==wt||fe==Ie||Ae&&!_){if(I=H||Ae?{}:lf(n),!U)return H?bg(n,qm(I,n)):Sg(n,vu(I,n))}else{if(!xt[fe])return _?n:{};I=Og(n,fe,U)}}w||(w=new Wn);var Fe=w.get(n);if(Fe)return Fe;w.set(n,I),zf(n)?n.forEach(function(He){I.add(Dn(He,r,a,He,n,w))}):Of(n)&&n.forEach(function(He,et){I.set(et,Dn(He,r,a,et,n,w))});var We=oe?H?il:nl:H?cn:Gt,Qe=ae?t:We(n);return An(Qe||n,function(He,et){Qe&&(et=He,He=n[et]),ps(I,et,Dn(He,r,a,et,n,w))}),I}function Ym(n){var r=Gt(n);return function(a){return _u(a,n,r)}}function _u(n,r,a){var f=a.length;if(n==null)return!f;for(n=gt(n);f--;){var _=a[f],w=r[_],I=n[_];if(I===t&&!(_ in n)||!w(I))return!1}return!0}function Mu(n,r,a){if(typeof n!="function")throw new Cn(u);return ys(function(){n.apply(t,a)},r)}function ms(n,r,a,f){var _=-1,w=qs,I=!0,U=n.length,H=[],oe=r.length;if(!U)return H;a&&(r=bt(r,dn(a))),f?(w=ba,I=!1):r.length>=s&&(w=ls,I=!1,r=new Qi(r));e:for(;++_<U;){var ae=n[_],fe=a==null?ae:a(ae);if(ae=f||ae!==0?ae:0,I&&fe===fe){for(var Ae=oe;Ae--;)if(r[Ae]===fe)continue e;H.push(ae)}else w(r,fe,f)||H.push(ae)}return H}var Di=Yu(Kn),yu=Yu(Ba,!0);function jm(n,r){var a=!0;return Di(n,function(f,_,w){return a=!!r(f,_,w),a}),a}function uo(n,r,a){for(var f=-1,_=n.length;++f<_;){var w=n[f],I=r(w);if(I!=null&&(U===t?I===I&&!mn(I):a(I,U)))var U=I,H=w}return H}function Zm(n,r,a,f){var _=n.length;for(a=Ke(a),a<0&&(a=-a>_?0:_+a),f=f===t||f>_?_:Ke(f),f<0&&(f+=_),f=a>f?0:Bf(f);a<f;)n[a++]=r;return n}function Su(n,r){var a=[];return Di(n,function(f,_,w){r(f,_,w)&&a.push(f)}),a}function Yt(n,r,a,f,_){var w=-1,I=n.length;for(a||(a=zg),_||(_=[]);++w<I;){var U=n[w];r>0&&a(U)?r>1?Yt(U,r-1,a,f,_):Ai(_,U):f||(_[_.length]=U)}return _}var Ua=ju(),bu=ju(!0);function Kn(n,r){return n&&Ua(n,r,Gt)}function Ba(n,r){return n&&bu(n,r,Gt)}function fo(n,r){return Ei(r,function(a){return ci(n[a])})}function er(n,r){r=Ri(r,n);for(var a=0,f=r.length;n!=null&&a<f;)n=n[Qn(r[a++])];return a&&a==f?n:t}function wu(n,r,a){var f=r(n);return je(n)?f:Ai(f,a(n))}function en(n){return n==null?n===t?ie:Ot:Ki&&Ki in gt(n)?Pg(n):kg(n)}function Ga(n,r){return n>r}function Km(n,r){return n!=null&&mt.call(n,r)}function Jm(n,r){return n!=null&&r in gt(n)}function Qm(n,r,a){return n>=jt(r,a)&&n<zt(r,a)}function Wa(n,r,a){for(var f=a?ba:qs,_=n[0].length,w=n.length,I=w,U=Y(w),H=1/0,oe=[];I--;){var ae=n[I];I&&r&&(ae=bt(ae,dn(r))),H=jt(ae.length,H),U[I]=!a&&(r||_>=120&&ae.length>=120)?new Qi(I&&ae):t}ae=n[0];var fe=-1,Ae=U[0];e:for(;++fe<_&&oe.length<H;){var Fe=ae[fe],We=r?r(Fe):Fe;if(Fe=a||Fe!==0?Fe:0,!(Ae?ls(Ae,We):f(oe,We,a))){for(I=w;--I;){var Qe=U[I];if(!(Qe?ls(Qe,We):f(n[I],We,a)))continue e}Ae&&Ae.push(We),oe.push(Fe)}}return oe}function $m(n,r,a,f){return Kn(n,function(_,w,I){r(f,a(_),w,I)}),f}function gs(n,r,a){r=Ri(r,n),n=hf(n,r);var f=n==null?n:n[Qn(Rn(r))];return f==null?t:hn(f,n,a)}function Tu(n){return Lt(n)&&en(n)==Ie}function eg(n){return Lt(n)&&en(n)==Te}function tg(n){return Lt(n)&&en(n)==De}function xs(n,r,a,f,_){return n===r?!0:n==null||r==null||!Lt(n)&&!Lt(r)?n!==n&&r!==r:ng(n,r,a,f,xs,_)}function ng(n,r,a,f,_,w){var I=je(n),U=je(r),H=I?te:Zt(n),oe=U?te:Zt(r);H=H==Ie?wt:H,oe=oe==Ie?wt:oe;var ae=H==wt,fe=oe==wt,Ae=H==oe;if(Ae&&Fi(n)){if(!Fi(r))return!1;I=!0,ae=!1}if(Ae&&!ae)return w||(w=new Wn),I||Dr(n)?sf(n,r,a,f,_,w):Lg(n,r,H,a,f,_,w);if(!(a&S)){var Fe=ae&&mt.call(n,"__wrapped__"),We=fe&&mt.call(r,"__wrapped__");if(Fe||We){var Qe=Fe?n.value():n,He=We?r.value():r;return w||(w=new Wn),_(Qe,He,a,f,w)}}return Ae?(w||(w=new Wn),Dg(n,r,a,f,_,w)):!1}function ig(n){return Lt(n)&&Zt(n)==nt}function Ha(n,r,a,f){var _=a.length,w=_,I=!f;if(n==null)return!w;for(n=gt(n);_--;){var U=a[_];if(I&&U[2]?U[1]!==n[U[0]]:!(U[0]in n))return!1}for(;++_<w;){U=a[_];var H=U[0],oe=n[H],ae=U[1];if(I&&U[2]){if(oe===t&&!(H in n))return!1}else{var fe=new Wn;if(f)var Ae=f(oe,ae,H,n,r,fe);if(!(Ae===t?xs(ae,oe,S|v,f,fe):Ae))return!1}}return!0}function Eu(n){if(!Tt(n)||Bg(n))return!1;var r=ci(n)?im:lt;return r.test(nr(n))}function rg(n){return Lt(n)&&en(n)==Bt}function sg(n){return Lt(n)&&Zt(n)==yt}function og(n){return Lt(n)&&Lo(n.length)&&!!vt[en(n)]}function Au(n){return typeof n=="function"?n:n==null?un:typeof n=="object"?je(n)?Du(n[0],n[1]):Lu(n):Kf(n)}function Va(n){if(!Ms(n))return cm(n);var r=[];for(var a in gt(n))mt.call(n,a)&&a!="constructor"&&r.push(a);return r}function ag(n){if(!Tt(n))return Vg(n);var r=Ms(n),a=[];for(var f in n)f=="constructor"&&(r||!mt.call(n,f))||a.push(f);return a}function ka(n,r){return n<r}function Cu(n,r){var a=-1,f=ln(n)?Y(n.length):[];return Di(n,function(_,w,I){f[++a]=r(_,w,I)}),f}function Lu(n){var r=sl(n);return r.length==1&&r[0][2]?uf(r[0][0],r[0][1]):function(a){return a===n||Ha(a,n,r)}}function Du(n,r){return al(n)&&cf(r)?uf(Qn(n),r):function(a){var f=xl(a,n);return f===t&&f===r?vl(a,n):xs(r,f,S|v)}}function ho(n,r,a,f,_){n!==r&&Ua(r,function(w,I){if(_||(_=new Wn),Tt(w))lg(n,r,I,a,ho,f,_);else{var U=f?f(cl(n,I),w,I+"",n,r,_):t;U===t&&(U=w),Na(n,I,U)}},cn)}function lg(n,r,a,f,_,w,I){var U=cl(n,a),H=cl(r,a),oe=I.get(H);if(oe){Na(n,a,oe);return}var ae=w?w(U,H,a+"",n,r,I):t,fe=ae===t;if(fe){var Ae=je(H),Fe=!Ae&&Fi(H),We=!Ae&&!Fe&&Dr(H);ae=H,Ae||Fe||We?je(U)?ae=U:Pt(U)?ae=an(U):Fe?(fe=!1,ae=Hu(H,!0)):We?(fe=!1,ae=Vu(H,!0)):ae=[]:Ss(H)||ir(H)?(ae=U,ir(U)?ae=Gf(U):(!Tt(U)||ci(U))&&(ae=lf(H))):fe=!1}fe&&(I.set(H,ae),_(ae,H,f,w,I),I.delete(H)),Na(n,a,ae)}function Pu(n,r){var a=n.length;if(!!a)return r+=r<0?a:0,li(r,a)?n[r]:t}function Ru(n,r,a){r.length?r=bt(r,function(w){return je(w)?function(I){return er(I,w.length===1?w[0]:w)}:w}):r=[un];var f=-1;r=bt(r,dn(Ge()));var _=Cu(n,function(w,I,U){var H=bt(r,function(oe){return oe(w)});return{criteria:H,index:++f,value:w}});return Op(_,function(w,I){return yg(w,I,a)})}function cg(n,r){return Iu(n,r,function(a,f){return vl(n,f)})}function Iu(n,r,a){for(var f=-1,_=r.length,w={};++f<_;){var I=r[f],U=er(n,I);a(U,I)&&vs(w,Ri(I,n),U)}return w}function ug(n){return function(r){return er(r,n)}}function Xa(n,r,a,f){var _=f?Fp:_r,w=-1,I=r.length,U=n;for(n===r&&(r=an(r)),a&&(U=bt(n,dn(a)));++w<I;)for(var H=0,oe=r[w],ae=a?a(oe):oe;(H=_(U,ae,H,f))>-1;)U!==n&&no.call(U,H,1),no.call(n,H,1);return n}function Fu(n,r){for(var a=n?r.length:0,f=a-1;a--;){var _=r[a];if(a==f||_!==w){var w=_;li(_)?no.call(n,_,1):Za(n,_)}}return n}function qa(n,r){return n+so(pu()*(r-n+1))}function fg(n,r,a,f){for(var _=-1,w=zt(ro((r-n)/(a||1)),0),I=Y(w);w--;)I[f?w:++_]=n,n+=a;return I}function Ya(n,r){var a="";if(!n||r<1||r>se)return a;do r%2&&(a+=n),r=so(r/2),r&&(n+=n);while(r);return a}function $e(n,r){return ul(ff(n,r,un),n+"")}function hg(n){return xu(Pr(n))}function dg(n,r){var a=Pr(n);return bo(a,$i(r,0,a.length))}function vs(n,r,a,f){if(!Tt(n))return n;r=Ri(r,n);for(var _=-1,w=r.length,I=w-1,U=n;U!=null&&++_<w;){var H=Qn(r[_]),oe=a;if(H==="__proto__"||H==="constructor"||H==="prototype")return n;if(_!=I){var ae=U[H];oe=f?f(ae,H,U):t,oe===t&&(oe=Tt(ae)?ae:li(r[_+1])?[]:{})}ps(U,H,oe),U=U[H]}return n}var Ou=oo?function(n,r){return oo.set(n,r),n}:un,pg=io?function(n,r){return io(n,"toString",{configurable:!0,enumerable:!1,value:Ml(r),writable:!0})}:un;function mg(n){return bo(Pr(n))}function Pn(n,r,a){var f=-1,_=n.length;r<0&&(r=-r>_?0:_+r),a=a>_?_:a,a<0&&(a+=_),_=r>a?0:a-r>>>0,r>>>=0;for(var w=Y(_);++f<_;)w[f]=n[f+r];return w}function gg(n,r){var a;return Di(n,function(f,_,w){return a=r(f,_,w),!a}),!!a}function po(n,r,a){var f=0,_=n==null?f:n.length;if(typeof r=="number"&&r===r&&_<=we){for(;f<_;){var w=f+_>>>1,I=n[w];I!==null&&!mn(I)&&(a?I<=r:I<r)?f=w+1:_=w}return _}return ja(n,r,un,a)}function ja(n,r,a,f){var _=0,w=n==null?0:n.length;if(w===0)return 0;r=a(r);for(var I=r!==r,U=r===null,H=mn(r),oe=r===t;_<w;){var ae=so((_+w)/2),fe=a(n[ae]),Ae=fe!==t,Fe=fe===null,We=fe===fe,Qe=mn(fe);if(I)var He=f||We;else oe?He=We&&(f||Ae):U?He=We&&Ae&&(f||!Fe):H?He=We&&Ae&&!Fe&&(f||!Qe):Fe||Qe?He=!1:He=f?fe<=r:fe<r;He?_=ae+1:w=ae}return jt(w,de)}function Nu(n,r){for(var a=-1,f=n.length,_=0,w=[];++a<f;){var I=n[a],U=r?r(I):I;if(!a||!Hn(U,H)){var H=U;w[_++]=I===0?0:I}}return w}function zu(n){return typeof n=="number"?n:mn(n)?$:+n}function pn(n){if(typeof n=="string")return n;if(je(n))return bt(n,pn)+"";if(mn(n))return mu?mu.call(n):"";var r=n+"";return r=="0"&&1/n==-le?"-0":r}function Pi(n,r,a){var f=-1,_=qs,w=n.length,I=!0,U=[],H=U;if(a)I=!1,_=ba;else if(w>=s){var oe=r?null:Ag(n);if(oe)return js(oe);I=!1,_=ls,H=new Qi}else H=r?[]:U;e:for(;++f<w;){var ae=n[f],fe=r?r(ae):ae;if(ae=a||ae!==0?ae:0,I&&fe===fe){for(var Ae=H.length;Ae--;)if(H[Ae]===fe)continue e;r&&H.push(fe),U.push(ae)}else _(H,fe,a)||(H!==U&&H.push(fe),U.push(ae))}return U}function Za(n,r){return r=Ri(r,n),n=hf(n,r),n==null||delete n[Qn(Rn(r))]}function Uu(n,r,a,f){return vs(n,r,a(er(n,r)),f)}function mo(n,r,a,f){for(var _=n.length,w=f?_:-1;(f?w--:++w<_)&&r(n[w],w,n););return a?Pn(n,f?0:w,f?w+1:_):Pn(n,f?w+1:0,f?_:w)}function Bu(n,r){var a=n;return a instanceof it&&(a=a.value()),wa(r,function(f,_){return _.func.apply(_.thisArg,Ai([f],_.args))},a)}function Ka(n,r,a){var f=n.length;if(f<2)return f?Pi(n[0]):[];for(var _=-1,w=Y(f);++_<f;)for(var I=n[_],U=-1;++U<f;)U!=_&&(w[_]=ms(w[_]||I,n[U],r,a));return Pi(Yt(w,1),r,a)}function Gu(n,r,a){for(var f=-1,_=n.length,w=r.length,I={};++f<_;){var U=f<w?r[f]:t;a(I,n[f],U)}return I}function Ja(n){return Pt(n)?n:[]}function Qa(n){return typeof n=="function"?n:un}function Ri(n,r){return je(n)?n:al(n,r)?[n]:gf(pt(n))}var xg=$e;function Ii(n,r,a){var f=n.length;return a=a===t?f:a,!r&&a>=f?n:Pn(n,r,a)}var Wu=rm||function(n){return qt.clearTimeout(n)};function Hu(n,r){if(r)return n.slice();var a=n.length,f=cu?cu(a):new n.constructor(a);return n.copy(f),f}function $a(n){var r=new n.constructor(n.byteLength);return new eo(r).set(new eo(n)),r}function vg(n,r){var a=r?$a(n.buffer):n.buffer;return new n.constructor(a,n.byteOffset,n.byteLength)}function _g(n){var r=new n.constructor(n.source,Ze.exec(n));return r.lastIndex=n.lastIndex,r}function Mg(n){return ds?gt(ds.call(n)):{}}function Vu(n,r){var a=r?$a(n.buffer):n.buffer;return new n.constructor(a,n.byteOffset,n.length)}function ku(n,r){if(n!==r){var a=n!==t,f=n===null,_=n===n,w=mn(n),I=r!==t,U=r===null,H=r===r,oe=mn(r);if(!U&&!oe&&!w&&n>r||w&&I&&H&&!U&&!oe||f&&I&&H||!a&&H||!_)return 1;if(!f&&!w&&!oe&&n<r||oe&&a&&_&&!f&&!w||U&&a&&_||!I&&_||!H)return-1}return 0}function yg(n,r,a){for(var f=-1,_=n.criteria,w=r.criteria,I=_.length,U=a.length;++f<I;){var H=ku(_[f],w[f]);if(H){if(f>=U)return H;var oe=a[f];return H*(oe=="desc"?-1:1)}}return n.index-r.index}function Xu(n,r,a,f){for(var _=-1,w=n.length,I=a.length,U=-1,H=r.length,oe=zt(w-I,0),ae=Y(H+oe),fe=!f;++U<H;)ae[U]=r[U];for(;++_<I;)(fe||_<w)&&(ae[a[_]]=n[_]);for(;oe--;)ae[U++]=n[_++];return ae}function qu(n,r,a,f){for(var _=-1,w=n.length,I=-1,U=a.length,H=-1,oe=r.length,ae=zt(w-U,0),fe=Y(ae+oe),Ae=!f;++_<ae;)fe[_]=n[_];for(var Fe=_;++H<oe;)fe[Fe+H]=r[H];for(;++I<U;)(Ae||_<w)&&(fe[Fe+a[I]]=n[_++]);return fe}function an(n,r){var a=-1,f=n.length;for(r||(r=Y(f));++a<f;)r[a]=n[a];return r}function Jn(n,r,a,f){var _=!a;a||(a={});for(var w=-1,I=r.length;++w<I;){var U=r[w],H=f?f(a[U],n[U],U,a,n):t;H===t&&(H=n[U]),_?si(a,U,H):ps(a,U,H)}return a}function Sg(n,r){return Jn(n,ol(n),r)}function bg(n,r){return Jn(n,of(n),r)}function go(n,r){return function(a,f){var _=je(a)?Cp:Xm,w=r?r():{};return _(a,n,Ge(f,2),w)}}function Ar(n){return $e(function(r,a){var f=-1,_=a.length,w=_>1?a[_-1]:t,I=_>2?a[2]:t;for(w=n.length>3&&typeof w=="function"?(_--,w):t,I&&tn(a[0],a[1],I)&&(w=_<3?t:w,_=1),r=gt(r);++f<_;){var U=a[f];U&&n(r,U,f,w)}return r})}function Yu(n,r){return function(a,f){if(a==null)return a;if(!ln(a))return n(a,f);for(var _=a.length,w=r?_:-1,I=gt(a);(r?w--:++w<_)&&f(I[w],w,I)!==!1;);return a}}function ju(n){return function(r,a,f){for(var _=-1,w=gt(r),I=f(r),U=I.length;U--;){var H=I[n?U:++_];if(a(w[H],H,w)===!1)break}return r}}function wg(n,r,a){var f=r&g,_=_s(n);function w(){var I=this&&this!==qt&&this instanceof w?_:n;return I.apply(f?a:this,arguments)}return w}function Zu(n){return function(r){r=pt(r);var a=Mr(r)?Gn(r):t,f=a?a[0]:r.charAt(0),_=a?Ii(a,1).join(""):r.slice(1);return f[n]()+_}}function Cr(n){return function(r){return wa(jf(Yf(r).replace(pp,"")),n,"")}}function _s(n){return function(){var r=arguments;switch(r.length){case 0:return new n;case 1:return new n(r[0]);case 2:return new n(r[0],r[1]);case 3:return new n(r[0],r[1],r[2]);case 4:return new n(r[0],r[1],r[2],r[3]);case 5:return new n(r[0],r[1],r[2],r[3],r[4]);case 6:return new n(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new n(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var a=Er(n.prototype),f=n.apply(a,r);return Tt(f)?f:a}}function Tg(n,r,a){var f=_s(n);function _(){for(var w=arguments.length,I=Y(w),U=w,H=Lr(_);U--;)I[U]=arguments[U];var oe=w<3&&I[0]!==H&&I[w-1]!==H?[]:Ci(I,H);if(w-=oe.length,w<a)return ef(n,r,xo,_.placeholder,t,I,oe,t,t,a-w);var ae=this&&this!==qt&&this instanceof _?f:n;return hn(ae,this,I)}return _}function Ku(n){return function(r,a,f){var _=gt(r);if(!ln(r)){var w=Ge(a,3);r=Gt(r),a=function(U){return w(_[U],U,_)}}var I=n(r,a,f);return I>-1?_[w?r[I]:I]:t}}function Ju(n){return ai(function(r){var a=r.length,f=a,_=Ln.prototype.thru;for(n&&r.reverse();f--;){var w=r[f];if(typeof w!="function")throw new Cn(u);if(_&&!I&&yo(w)=="wrapper")var I=new Ln([],!0)}for(f=I?f:a;++f<a;){w=r[f];var U=yo(w),H=U=="wrapper"?rl(w):t;H&&ll(H[0])&&H[1]==(W|F|C|T)&&!H[4].length&&H[9]==1?I=I[yo(H[0])].apply(I,H[3]):I=w.length==1&&ll(w)?I[U]():I.thru(w)}return function(){var oe=arguments,ae=oe[0];if(I&&oe.length==1&&je(ae))return I.plant(ae).value();for(var fe=0,Ae=a?r[fe].apply(this,oe):ae;++fe<a;)Ae=r[fe].call(this,Ae);return Ae}})}function xo(n,r,a,f,_,w,I,U,H,oe){var ae=r&W,fe=r&g,Ae=r&b,Fe=r&(F|A),We=r&O,Qe=Ae?t:_s(n);function He(){for(var et=arguments.length,ot=Y(et),gn=et;gn--;)ot[gn]=arguments[gn];if(Fe)var nn=Lr(He),xn=zp(ot,nn);if(f&&(ot=Xu(ot,f,_,Fe)),w&&(ot=qu(ot,w,I,Fe)),et-=xn,Fe&&et<oe){var Rt=Ci(ot,nn);return ef(n,r,xo,He.placeholder,a,ot,Rt,U,H,oe-et)}var Vn=fe?a:this,fi=Ae?Vn[n]:n;return et=ot.length,U?ot=Xg(ot,U):We&&et>1&&ot.reverse(),ae&&H<et&&(ot.length=H),this&&this!==qt&&this instanceof He&&(fi=Qe||_s(fi)),fi.apply(Vn,ot)}return He}function Qu(n,r){return function(a,f){return $m(a,n,r(f),{})}}function vo(n,r){return function(a,f){var _;if(a===t&&f===t)return r;if(a!==t&&(_=a),f!==t){if(_===t)return f;typeof a=="string"||typeof f=="string"?(a=pn(a),f=pn(f)):(a=zu(a),f=zu(f)),_=n(a,f)}return _}}function el(n){return ai(function(r){return r=bt(r,dn(Ge())),$e(function(a){var f=this;return n(r,function(_){return hn(_,f,a)})})})}function _o(n,r){r=r===t?" ":pn(r);var a=r.length;if(a<2)return a?Ya(r,n):r;var f=Ya(r,ro(n/yr(r)));return Mr(r)?Ii(Gn(f),0,n).join(""):f.slice(0,n)}function Eg(n,r,a,f){var _=r&g,w=_s(n);function I(){for(var U=-1,H=arguments.length,oe=-1,ae=f.length,fe=Y(ae+H),Ae=this&&this!==qt&&this instanceof I?w:n;++oe<ae;)fe[oe]=f[oe];for(;H--;)fe[oe++]=arguments[++U];return hn(Ae,_?a:this,fe)}return I}function $u(n){return function(r,a,f){return f&&typeof f!="number"&&tn(r,a,f)&&(a=f=t),r=ui(r),a===t?(a=r,r=0):a=ui(a),f=f===t?r<a?1:-1:ui(f),fg(r,a,f,n)}}function Mo(n){return function(r,a){return typeof r=="string"&&typeof a=="string"||(r=In(r),a=In(a)),n(r,a)}}function ef(n,r,a,f,_,w,I,U,H,oe){var ae=r&F,fe=ae?I:t,Ae=ae?t:I,Fe=ae?w:t,We=ae?t:w;r|=ae?C:z,r&=~(ae?z:C),r&D||(r&=~(g|b));var Qe=[n,r,_,Fe,fe,We,Ae,U,H,oe],He=a.apply(t,Qe);return ll(n)&&df(He,Qe),He.placeholder=f,pf(He,n,r)}function tl(n){var r=Nt[n];return function(a,f){if(a=In(a),f=f==null?0:jt(Ke(f),292),f&&du(a)){var _=(pt(a)+"e").split("e"),w=r(_[0]+"e"+(+_[1]+f));return _=(pt(w)+"e").split("e"),+(_[0]+"e"+(+_[1]-f))}return r(a)}}var Ag=wr&&1/js(new wr([,-0]))[1]==le?function(n){return new wr(n)}:bl;function tf(n){return function(r){var a=Zt(r);return a==nt?Pa(r):a==yt?kp(r):Np(r,n(r))}}function oi(n,r,a,f,_,w,I,U){var H=r&b;if(!H&&typeof n!="function")throw new Cn(u);var oe=f?f.length:0;if(oe||(r&=~(C|z),f=_=t),I=I===t?I:zt(Ke(I),0),U=U===t?U:Ke(U),oe-=_?_.length:0,r&z){var ae=f,fe=_;f=_=t}var Ae=H?t:rl(n),Fe=[n,r,a,f,_,ae,fe,w,I,U];if(Ae&&Hg(Fe,Ae),n=Fe[0],r=Fe[1],a=Fe[2],f=Fe[3],_=Fe[4],U=Fe[9]=Fe[9]===t?H?0:n.length:zt(Fe[9]-oe,0),!U&&r&(F|A)&&(r&=~(F|A)),!r||r==g)var We=wg(n,r,a);else r==F||r==A?We=Tg(n,r,U):(r==C||r==(g|C))&&!_.length?We=Eg(n,r,a,f):We=xo.apply(t,Fe);var Qe=Ae?Ou:df;return pf(Qe(We,Fe),n,r)}function nf(n,r,a,f){return n===t||Hn(n,br[a])&&!mt.call(f,a)?r:n}function rf(n,r,a,f,_,w){return Tt(n)&&Tt(r)&&(w.set(r,n),ho(n,r,t,rf,w),w.delete(r)),n}function Cg(n){return Ss(n)?t:n}function sf(n,r,a,f,_,w){var I=a&S,U=n.length,H=r.length;if(U!=H&&!(I&&H>U))return!1;var oe=w.get(n),ae=w.get(r);if(oe&&ae)return oe==r&&ae==n;var fe=-1,Ae=!0,Fe=a&v?new Qi:t;for(w.set(n,r),w.set(r,n);++fe<U;){var We=n[fe],Qe=r[fe];if(f)var He=I?f(Qe,We,fe,r,n,w):f(We,Qe,fe,n,r,w);if(He!==t){if(He)continue;Ae=!1;break}if(Fe){if(!Ta(r,function(et,ot){if(!ls(Fe,ot)&&(We===et||_(We,et,a,f,w)))return Fe.push(ot)})){Ae=!1;break}}else if(!(We===Qe||_(We,Qe,a,f,w))){Ae=!1;break}}return w.delete(n),w.delete(r),Ae}function Lg(n,r,a,f,_,w,I){switch(a){case Ne:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case Te:return!(n.byteLength!=r.byteLength||!w(new eo(n),new eo(r)));case xe:case De:case Mt:return Hn(+n,+r);case ke:return n.name==r.name&&n.message==r.message;case Bt:case R:return n==r+"";case nt:var U=Pa;case yt:var H=f&S;if(U||(U=js),n.size!=r.size&&!H)return!1;var oe=I.get(n);if(oe)return oe==r;f|=v,I.set(n,r);var ae=sf(U(n),U(r),f,_,w,I);return I.delete(n),ae;case E:if(ds)return ds.call(n)==ds.call(r)}return!1}function Dg(n,r,a,f,_,w){var I=a&S,U=nl(n),H=U.length,oe=nl(r),ae=oe.length;if(H!=ae&&!I)return!1;for(var fe=H;fe--;){var Ae=U[fe];if(!(I?Ae in r:mt.call(r,Ae)))return!1}var Fe=w.get(n),We=w.get(r);if(Fe&&We)return Fe==r&&We==n;var Qe=!0;w.set(n,r),w.set(r,n);for(var He=I;++fe<H;){Ae=U[fe];var et=n[Ae],ot=r[Ae];if(f)var gn=I?f(ot,et,Ae,r,n,w):f(et,ot,Ae,n,r,w);if(!(gn===t?et===ot||_(et,ot,a,f,w):gn)){Qe=!1;break}He||(He=Ae=="constructor")}if(Qe&&!He){var nn=n.constructor,xn=r.constructor;nn!=xn&&"constructor"in n&&"constructor"in r&&!(typeof nn=="function"&&nn instanceof nn&&typeof xn=="function"&&xn instanceof xn)&&(Qe=!1)}return w.delete(n),w.delete(r),Qe}function ai(n){return ul(ff(n,t,Mf),n+"")}function nl(n){return wu(n,Gt,ol)}function il(n){return wu(n,cn,of)}var rl=oo?function(n){return oo.get(n)}:bl;function yo(n){for(var r=n.name+"",a=Tr[r],f=mt.call(Tr,r)?a.length:0;f--;){var _=a[f],w=_.func;if(w==null||w==n)return _.name}return r}function Lr(n){var r=mt.call(y,"placeholder")?y:n;return r.placeholder}function Ge(){var n=y.iteratee||yl;return n=n===yl?Au:n,arguments.length?n(arguments[0],arguments[1]):n}function So(n,r){var a=n.__data__;return Ug(r)?a[typeof r=="string"?"string":"hash"]:a.map}function sl(n){for(var r=Gt(n),a=r.length;a--;){var f=r[a],_=n[f];r[a]=[f,_,cf(_)]}return r}function tr(n,r){var a=Wp(n,r);return Eu(a)?a:t}function Pg(n){var r=mt.call(n,Ki),a=n[Ki];try{n[Ki]=t;var f=!0}catch{}var _=Qs.call(n);return f&&(r?n[Ki]=a:delete n[Ki]),_}var ol=Ia?function(n){return n==null?[]:(n=gt(n),Ei(Ia(n),function(r){return fu.call(n,r)}))}:wl,of=Ia?function(n){for(var r=[];n;)Ai(r,ol(n)),n=to(n);return r}:wl,Zt=en;(Fa&&Zt(new Fa(new ArrayBuffer(1)))!=Ne||us&&Zt(new us)!=nt||Oa&&Zt(Oa.resolve())!=At||wr&&Zt(new wr)!=yt||fs&&Zt(new fs)!=pe)&&(Zt=function(n){var r=en(n),a=r==wt?n.constructor:t,f=a?nr(a):"";if(f)switch(f){case dm:return Ne;case pm:return nt;case mm:return At;case gm:return yt;case xm:return pe}return r});function Rg(n,r,a){for(var f=-1,_=a.length;++f<_;){var w=a[f],I=w.size;switch(w.type){case"drop":n+=I;break;case"dropRight":r-=I;break;case"take":r=jt(r,n+I);break;case"takeRight":n=zt(n,r-I);break}}return{start:n,end:r}}function Ig(n){var r=n.match(J);return r?r[1].split(j):[]}function af(n,r,a){r=Ri(r,n);for(var f=-1,_=r.length,w=!1;++f<_;){var I=Qn(r[f]);if(!(w=n!=null&&a(n,I)))break;n=n[I]}return w||++f!=_?w:(_=n==null?0:n.length,!!_&&Lo(_)&&li(I,_)&&(je(n)||ir(n)))}function Fg(n){var r=n.length,a=new n.constructor(r);return r&&typeof n[0]=="string"&&mt.call(n,"index")&&(a.index=n.index,a.input=n.input),a}function lf(n){return typeof n.constructor=="function"&&!Ms(n)?Er(to(n)):{}}function Og(n,r,a){var f=n.constructor;switch(r){case Te:return $a(n);case xe:case De:return new f(+n);case Ne:return vg(n,a);case L:case ue:case be:case ve:case N:case _e:case ge:case ze:case Ee:return Vu(n,a);case nt:return new f;case Mt:case R:return new f(n);case Bt:return _g(n);case yt:return new f;case E:return Mg(n)}}function Ng(n,r){var a=r.length;if(!a)return n;var f=a-1;return r[f]=(a>1?"& ":"")+r[f],r=r.join(a>2?", ":" "),n.replace(q,`{
/* [wrapped with `+r+`] */
`)}function zg(n){return je(n)||ir(n)||!!(hu&&n&&n[hu])}function li(n,r){var a=typeof n;return r=r==null?se:r,!!r&&(a=="number"||a!="symbol"&&ni.test(n))&&n>-1&&n%1==0&&n<r}function tn(n,r,a){if(!Tt(a))return!1;var f=typeof r;return(f=="number"?ln(a)&&li(r,a.length):f=="string"&&r in a)?Hn(a[r],n):!1}function al(n,r){if(je(n))return!1;var a=typeof n;return a=="number"||a=="symbol"||a=="boolean"||n==null||mn(n)?!0:rs.test(n)||!pa.test(n)||r!=null&&n in gt(r)}function Ug(n){var r=typeof n;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?n!=="__proto__":n===null}function ll(n){var r=yo(n),a=y[r];if(typeof a!="function"||!(r in it.prototype))return!1;if(n===a)return!0;var f=rl(a);return!!f&&n===f[0]}function Bg(n){return!!lu&&lu in n}var Gg=Ks?ci:Tl;function Ms(n){var r=n&&n.constructor,a=typeof r=="function"&&r.prototype||br;return n===a}function cf(n){return n===n&&!Tt(n)}function uf(n,r){return function(a){return a==null?!1:a[n]===r&&(r!==t||n in gt(a))}}function Wg(n){var r=Ao(n,function(f){return a.size===d&&a.clear(),f}),a=r.cache;return r}function Hg(n,r){var a=n[1],f=r[1],_=a|f,w=_<(g|b|W),I=f==W&&a==F||f==W&&a==T&&n[7].length<=r[8]||f==(W|T)&&r[7].length<=r[8]&&a==F;if(!(w||I))return n;f&g&&(n[2]=r[2],_|=a&g?0:D);var U=r[3];if(U){var H=n[3];n[3]=H?Xu(H,U,r[4]):U,n[4]=H?Ci(n[3],p):r[4]}return U=r[5],U&&(H=n[5],n[5]=H?qu(H,U,r[6]):U,n[6]=H?Ci(n[5],p):r[6]),U=r[7],U&&(n[7]=U),f&W&&(n[8]=n[8]==null?r[8]:jt(n[8],r[8])),n[9]==null&&(n[9]=r[9]),n[0]=r[0],n[1]=_,n}function Vg(n){var r=[];if(n!=null)for(var a in gt(n))r.push(a);return r}function kg(n){return Qs.call(n)}function ff(n,r,a){return r=zt(r===t?n.length-1:r,0),function(){for(var f=arguments,_=-1,w=zt(f.length-r,0),I=Y(w);++_<w;)I[_]=f[r+_];_=-1;for(var U=Y(r+1);++_<r;)U[_]=f[_];return U[r]=a(I),hn(n,this,U)}}function hf(n,r){return r.length<2?n:er(n,Pn(r,0,-1))}function Xg(n,r){for(var a=n.length,f=jt(r.length,a),_=an(n);f--;){var w=r[f];n[f]=li(w,a)?_[w]:t}return n}function cl(n,r){if(!(r==="constructor"&&typeof n[r]=="function")&&r!="__proto__")return n[r]}var df=mf(Ou),ys=om||function(n,r){return qt.setTimeout(n,r)},ul=mf(pg);function pf(n,r,a){var f=r+"";return ul(n,Ng(f,qg(Ig(f),a)))}function mf(n){var r=0,a=0;return function(){var f=um(),_=he-(f-a);if(a=f,_>0){if(++r>=re)return arguments[0]}else r=0;return n.apply(t,arguments)}}function bo(n,r){var a=-1,f=n.length,_=f-1;for(r=r===t?f:r;++a<r;){var w=qa(a,_),I=n[w];n[w]=n[a],n[a]=I}return n.length=r,n}var gf=Wg(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(ks,function(a,f,_,w){r.push(_?w.replace(Ye,"$1"):f||a)}),r});function Qn(n){if(typeof n=="string"||mn(n))return n;var r=n+"";return r=="0"&&1/n==-le?"-0":r}function nr(n){if(n!=null){try{return Js.call(n)}catch{}try{return n+""}catch{}}return""}function qg(n,r){return An(Re,function(a){var f="_."+a[0];r&a[1]&&!qs(n,f)&&n.push(f)}),n.sort()}function xf(n){if(n instanceof it)return n.clone();var r=new Ln(n.__wrapped__,n.__chain__);return r.__actions__=an(n.__actions__),r.__index__=n.__index__,r.__values__=n.__values__,r}function Yg(n,r,a){(a?tn(n,r,a):r===t)?r=1:r=zt(Ke(r),0);var f=n==null?0:n.length;if(!f||r<1)return[];for(var _=0,w=0,I=Y(ro(f/r));_<f;)I[w++]=Pn(n,_,_+=r);return I}function jg(n){for(var r=-1,a=n==null?0:n.length,f=0,_=[];++r<a;){var w=n[r];w&&(_[f++]=w)}return _}function Zg(){var n=arguments.length;if(!n)return[];for(var r=Y(n-1),a=arguments[0],f=n;f--;)r[f-1]=arguments[f];return Ai(je(a)?an(a):[a],Yt(r,1))}var Kg=$e(function(n,r){return Pt(n)?ms(n,Yt(r,1,Pt,!0)):[]}),Jg=$e(function(n,r){var a=Rn(r);return Pt(a)&&(a=t),Pt(n)?ms(n,Yt(r,1,Pt,!0),Ge(a,2)):[]}),Qg=$e(function(n,r){var a=Rn(r);return Pt(a)&&(a=t),Pt(n)?ms(n,Yt(r,1,Pt,!0),t,a):[]});function $g(n,r,a){var f=n==null?0:n.length;return f?(r=a||r===t?1:Ke(r),Pn(n,r<0?0:r,f)):[]}function e0(n,r,a){var f=n==null?0:n.length;return f?(r=a||r===t?1:Ke(r),r=f-r,Pn(n,0,r<0?0:r)):[]}function t0(n,r){return n&&n.length?mo(n,Ge(r,3),!0,!0):[]}function n0(n,r){return n&&n.length?mo(n,Ge(r,3),!0):[]}function i0(n,r,a,f){var _=n==null?0:n.length;return _?(a&&typeof a!="number"&&tn(n,r,a)&&(a=0,f=_),Zm(n,r,a,f)):[]}function vf(n,r,a){var f=n==null?0:n.length;if(!f)return-1;var _=a==null?0:Ke(a);return _<0&&(_=zt(f+_,0)),Ys(n,Ge(r,3),_)}function _f(n,r,a){var f=n==null?0:n.length;if(!f)return-1;var _=f-1;return a!==t&&(_=Ke(a),_=a<0?zt(f+_,0):jt(_,f-1)),Ys(n,Ge(r,3),_,!0)}function Mf(n){var r=n==null?0:n.length;return r?Yt(n,1):[]}function r0(n){var r=n==null?0:n.length;return r?Yt(n,le):[]}function s0(n,r){var a=n==null?0:n.length;return a?(r=r===t?1:Ke(r),Yt(n,r)):[]}function o0(n){for(var r=-1,a=n==null?0:n.length,f={};++r<a;){var _=n[r];f[_[0]]=_[1]}return f}function yf(n){return n&&n.length?n[0]:t}function a0(n,r,a){var f=n==null?0:n.length;if(!f)return-1;var _=a==null?0:Ke(a);return _<0&&(_=zt(f+_,0)),_r(n,r,_)}function l0(n){var r=n==null?0:n.length;return r?Pn(n,0,-1):[]}var c0=$e(function(n){var r=bt(n,Ja);return r.length&&r[0]===n[0]?Wa(r):[]}),u0=$e(function(n){var r=Rn(n),a=bt(n,Ja);return r===Rn(a)?r=t:a.pop(),a.length&&a[0]===n[0]?Wa(a,Ge(r,2)):[]}),f0=$e(function(n){var r=Rn(n),a=bt(n,Ja);return r=typeof r=="function"?r:t,r&&a.pop(),a.length&&a[0]===n[0]?Wa(a,t,r):[]});function h0(n,r){return n==null?"":lm.call(n,r)}function Rn(n){var r=n==null?0:n.length;return r?n[r-1]:t}function d0(n,r,a){var f=n==null?0:n.length;if(!f)return-1;var _=f;return a!==t&&(_=Ke(a),_=_<0?zt(f+_,0):jt(_,f-1)),r===r?qp(n,r,_):Ys(n,eu,_,!0)}function p0(n,r){return n&&n.length?Pu(n,Ke(r)):t}var m0=$e(Sf);function Sf(n,r){return n&&n.length&&r&&r.length?Xa(n,r):n}function g0(n,r,a){return n&&n.length&&r&&r.length?Xa(n,r,Ge(a,2)):n}function x0(n,r,a){return n&&n.length&&r&&r.length?Xa(n,r,t,a):n}var v0=ai(function(n,r){var a=n==null?0:n.length,f=za(n,r);return Fu(n,bt(r,function(_){return li(_,a)?+_:_}).sort(ku)),f});function _0(n,r){var a=[];if(!(n&&n.length))return a;var f=-1,_=[],w=n.length;for(r=Ge(r,3);++f<w;){var I=n[f];r(I,f,n)&&(a.push(I),_.push(f))}return Fu(n,_),a}function fl(n){return n==null?n:hm.call(n)}function M0(n,r,a){var f=n==null?0:n.length;return f?(a&&typeof a!="number"&&tn(n,r,a)?(r=0,a=f):(r=r==null?0:Ke(r),a=a===t?f:Ke(a)),Pn(n,r,a)):[]}function y0(n,r){return po(n,r)}function S0(n,r,a){return ja(n,r,Ge(a,2))}function b0(n,r){var a=n==null?0:n.length;if(a){var f=po(n,r);if(f<a&&Hn(n[f],r))return f}return-1}function w0(n,r){return po(n,r,!0)}function T0(n,r,a){return ja(n,r,Ge(a,2),!0)}function E0(n,r){var a=n==null?0:n.length;if(a){var f=po(n,r,!0)-1;if(Hn(n[f],r))return f}return-1}function A0(n){return n&&n.length?Nu(n):[]}function C0(n,r){return n&&n.length?Nu(n,Ge(r,2)):[]}function L0(n){var r=n==null?0:n.length;return r?Pn(n,1,r):[]}function D0(n,r,a){return n&&n.length?(r=a||r===t?1:Ke(r),Pn(n,0,r<0?0:r)):[]}function P0(n,r,a){var f=n==null?0:n.length;return f?(r=a||r===t?1:Ke(r),r=f-r,Pn(n,r<0?0:r,f)):[]}function R0(n,r){return n&&n.length?mo(n,Ge(r,3),!1,!0):[]}function I0(n,r){return n&&n.length?mo(n,Ge(r,3)):[]}var F0=$e(function(n){return Pi(Yt(n,1,Pt,!0))}),O0=$e(function(n){var r=Rn(n);return Pt(r)&&(r=t),Pi(Yt(n,1,Pt,!0),Ge(r,2))}),N0=$e(function(n){var r=Rn(n);return r=typeof r=="function"?r:t,Pi(Yt(n,1,Pt,!0),t,r)});function z0(n){return n&&n.length?Pi(n):[]}function U0(n,r){return n&&n.length?Pi(n,Ge(r,2)):[]}function B0(n,r){return r=typeof r=="function"?r:t,n&&n.length?Pi(n,t,r):[]}function hl(n){if(!(n&&n.length))return[];var r=0;return n=Ei(n,function(a){if(Pt(a))return r=zt(a.length,r),!0}),La(r,function(a){return bt(n,Ea(a))})}function bf(n,r){if(!(n&&n.length))return[];var a=hl(n);return r==null?a:bt(a,function(f){return hn(r,t,f)})}var G0=$e(function(n,r){return Pt(n)?ms(n,r):[]}),W0=$e(function(n){return Ka(Ei(n,Pt))}),H0=$e(function(n){var r=Rn(n);return Pt(r)&&(r=t),Ka(Ei(n,Pt),Ge(r,2))}),V0=$e(function(n){var r=Rn(n);return r=typeof r=="function"?r:t,Ka(Ei(n,Pt),t,r)}),k0=$e(hl);function X0(n,r){return Gu(n||[],r||[],ps)}function q0(n,r){return Gu(n||[],r||[],vs)}var Y0=$e(function(n){var r=n.length,a=r>1?n[r-1]:t;return a=typeof a=="function"?(n.pop(),a):t,bf(n,a)});function wf(n){var r=y(n);return r.__chain__=!0,r}function j0(n,r){return r(n),n}function wo(n,r){return r(n)}var Z0=ai(function(n){var r=n.length,a=r?n[0]:0,f=this.__wrapped__,_=function(w){return za(w,n)};return r>1||this.__actions__.length||!(f instanceof it)||!li(a)?this.thru(_):(f=f.slice(a,+a+(r?1:0)),f.__actions__.push({func:wo,args:[_],thisArg:t}),new Ln(f,this.__chain__).thru(function(w){return r&&!w.length&&w.push(t),w}))});function K0(){return wf(this)}function J0(){return new Ln(this.value(),this.__chain__)}function Q0(){this.__values__===t&&(this.__values__=Uf(this.value()));var n=this.__index__>=this.__values__.length,r=n?t:this.__values__[this.__index__++];return{done:n,value:r}}function $0(){return this}function ex(n){for(var r,a=this;a instanceof lo;){var f=xf(a);f.__index__=0,f.__values__=t,r?_.__wrapped__=f:r=f;var _=f;a=a.__wrapped__}return _.__wrapped__=n,r}function tx(){var n=this.__wrapped__;if(n instanceof it){var r=n;return this.__actions__.length&&(r=new it(this)),r=r.reverse(),r.__actions__.push({func:wo,args:[fl],thisArg:t}),new Ln(r,this.__chain__)}return this.thru(fl)}function nx(){return Bu(this.__wrapped__,this.__actions__)}var ix=go(function(n,r,a){mt.call(n,a)?++n[a]:si(n,a,1)});function rx(n,r,a){var f=je(n)?Qc:jm;return a&&tn(n,r,a)&&(r=t),f(n,Ge(r,3))}function sx(n,r){var a=je(n)?Ei:Su;return a(n,Ge(r,3))}var ox=Ku(vf),ax=Ku(_f);function lx(n,r){return Yt(To(n,r),1)}function cx(n,r){return Yt(To(n,r),le)}function ux(n,r,a){return a=a===t?1:Ke(a),Yt(To(n,r),a)}function Tf(n,r){var a=je(n)?An:Di;return a(n,Ge(r,3))}function Ef(n,r){var a=je(n)?Lp:yu;return a(n,Ge(r,3))}var fx=go(function(n,r,a){mt.call(n,a)?n[a].push(r):si(n,a,[r])});function hx(n,r,a,f){n=ln(n)?n:Pr(n),a=a&&!f?Ke(a):0;var _=n.length;return a<0&&(a=zt(_+a,0)),Do(n)?a<=_&&n.indexOf(r,a)>-1:!!_&&_r(n,r,a)>-1}var dx=$e(function(n,r,a){var f=-1,_=typeof r=="function",w=ln(n)?Y(n.length):[];return Di(n,function(I){w[++f]=_?hn(r,I,a):gs(I,r,a)}),w}),px=go(function(n,r,a){si(n,a,r)});function To(n,r){var a=je(n)?bt:Cu;return a(n,Ge(r,3))}function mx(n,r,a,f){return n==null?[]:(je(r)||(r=r==null?[]:[r]),a=f?t:a,je(a)||(a=a==null?[]:[a]),Ru(n,r,a))}var gx=go(function(n,r,a){n[a?0:1].push(r)},function(){return[[],[]]});function xx(n,r,a){var f=je(n)?wa:nu,_=arguments.length<3;return f(n,Ge(r,4),a,_,Di)}function vx(n,r,a){var f=je(n)?Dp:nu,_=arguments.length<3;return f(n,Ge(r,4),a,_,yu)}function _x(n,r){var a=je(n)?Ei:Su;return a(n,Co(Ge(r,3)))}function Mx(n){var r=je(n)?xu:hg;return r(n)}function yx(n,r,a){(a?tn(n,r,a):r===t)?r=1:r=Ke(r);var f=je(n)?Vm:dg;return f(n,r)}function Sx(n){var r=je(n)?km:mg;return r(n)}function bx(n){if(n==null)return 0;if(ln(n))return Do(n)?yr(n):n.length;var r=Zt(n);return r==nt||r==yt?n.size:Va(n).length}function wx(n,r,a){var f=je(n)?Ta:gg;return a&&tn(n,r,a)&&(r=t),f(n,Ge(r,3))}var Tx=$e(function(n,r){if(n==null)return[];var a=r.length;return a>1&&tn(n,r[0],r[1])?r=[]:a>2&&tn(r[0],r[1],r[2])&&(r=[r[0]]),Ru(n,Yt(r,1),[])}),Eo=sm||function(){return qt.Date.now()};function Ex(n,r){if(typeof r!="function")throw new Cn(u);return n=Ke(n),function(){if(--n<1)return r.apply(this,arguments)}}function Af(n,r,a){return r=a?t:r,r=n&&r==null?n.length:r,oi(n,W,t,t,t,t,r)}function Cf(n,r){var a;if(typeof r!="function")throw new Cn(u);return n=Ke(n),function(){return--n>0&&(a=r.apply(this,arguments)),n<=1&&(r=t),a}}var dl=$e(function(n,r,a){var f=g;if(a.length){var _=Ci(a,Lr(dl));f|=C}return oi(n,f,r,a,_)}),Lf=$e(function(n,r,a){var f=g|b;if(a.length){var _=Ci(a,Lr(Lf));f|=C}return oi(r,f,n,a,_)});function Df(n,r,a){r=a?t:r;var f=oi(n,F,t,t,t,t,t,r);return f.placeholder=Df.placeholder,f}function Pf(n,r,a){r=a?t:r;var f=oi(n,A,t,t,t,t,t,r);return f.placeholder=Pf.placeholder,f}function Rf(n,r,a){var f,_,w,I,U,H,oe=0,ae=!1,fe=!1,Ae=!0;if(typeof n!="function")throw new Cn(u);r=In(r)||0,Tt(a)&&(ae=!!a.leading,fe="maxWait"in a,w=fe?zt(In(a.maxWait)||0,r):w,Ae="trailing"in a?!!a.trailing:Ae);function Fe(Rt){var Vn=f,fi=_;return f=_=t,oe=Rt,I=n.apply(fi,Vn),I}function We(Rt){return oe=Rt,U=ys(et,r),ae?Fe(Rt):I}function Qe(Rt){var Vn=Rt-H,fi=Rt-oe,Jf=r-Vn;return fe?jt(Jf,w-fi):Jf}function He(Rt){var Vn=Rt-H,fi=Rt-oe;return H===t||Vn>=r||Vn<0||fe&&fi>=w}function et(){var Rt=Eo();if(He(Rt))return ot(Rt);U=ys(et,Qe(Rt))}function ot(Rt){return U=t,Ae&&f?Fe(Rt):(f=_=t,I)}function gn(){U!==t&&Wu(U),oe=0,f=H=_=U=t}function nn(){return U===t?I:ot(Eo())}function xn(){var Rt=Eo(),Vn=He(Rt);if(f=arguments,_=this,H=Rt,Vn){if(U===t)return We(H);if(fe)return Wu(U),U=ys(et,r),Fe(H)}return U===t&&(U=ys(et,r)),I}return xn.cancel=gn,xn.flush=nn,xn}var Ax=$e(function(n,r){return Mu(n,1,r)}),Cx=$e(function(n,r,a){return Mu(n,In(r)||0,a)});function Lx(n){return oi(n,O)}function Ao(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new Cn(u);var a=function(){var f=arguments,_=r?r.apply(this,f):f[0],w=a.cache;if(w.has(_))return w.get(_);var I=n.apply(this,f);return a.cache=w.set(_,I)||w,I};return a.cache=new(Ao.Cache||ri),a}Ao.Cache=ri;function Co(n){if(typeof n!="function")throw new Cn(u);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function Dx(n){return Cf(2,n)}var Px=xg(function(n,r){r=r.length==1&&je(r[0])?bt(r[0],dn(Ge())):bt(Yt(r,1),dn(Ge()));var a=r.length;return $e(function(f){for(var _=-1,w=jt(f.length,a);++_<w;)f[_]=r[_].call(this,f[_]);return hn(n,this,f)})}),pl=$e(function(n,r){var a=Ci(r,Lr(pl));return oi(n,C,t,r,a)}),If=$e(function(n,r){var a=Ci(r,Lr(If));return oi(n,z,t,r,a)}),Rx=ai(function(n,r){return oi(n,T,t,t,t,r)});function Ix(n,r){if(typeof n!="function")throw new Cn(u);return r=r===t?r:Ke(r),$e(n,r)}function Fx(n,r){if(typeof n!="function")throw new Cn(u);return r=r==null?0:zt(Ke(r),0),$e(function(a){var f=a[r],_=Ii(a,0,r);return f&&Ai(_,f),hn(n,this,_)})}function Ox(n,r,a){var f=!0,_=!0;if(typeof n!="function")throw new Cn(u);return Tt(a)&&(f="leading"in a?!!a.leading:f,_="trailing"in a?!!a.trailing:_),Rf(n,r,{leading:f,maxWait:r,trailing:_})}function Nx(n){return Af(n,1)}function zx(n,r){return pl(Qa(r),n)}function Ux(){if(!arguments.length)return[];var n=arguments[0];return je(n)?n:[n]}function Bx(n){return Dn(n,M)}function Gx(n,r){return r=typeof r=="function"?r:t,Dn(n,M,r)}function Wx(n){return Dn(n,m|M)}function Hx(n,r){return r=typeof r=="function"?r:t,Dn(n,m|M,r)}function Vx(n,r){return r==null||_u(n,r,Gt(r))}function Hn(n,r){return n===r||n!==n&&r!==r}var kx=Mo(Ga),Xx=Mo(function(n,r){return n>=r}),ir=Tu(function(){return arguments}())?Tu:function(n){return Lt(n)&&mt.call(n,"callee")&&!fu.call(n,"callee")},je=Y.isArray,qx=qc?dn(qc):eg;function ln(n){return n!=null&&Lo(n.length)&&!ci(n)}function Pt(n){return Lt(n)&&ln(n)}function Yx(n){return n===!0||n===!1||Lt(n)&&en(n)==xe}var Fi=am||Tl,jx=Yc?dn(Yc):tg;function Zx(n){return Lt(n)&&n.nodeType===1&&!Ss(n)}function Kx(n){if(n==null)return!0;if(ln(n)&&(je(n)||typeof n=="string"||typeof n.splice=="function"||Fi(n)||Dr(n)||ir(n)))return!n.length;var r=Zt(n);if(r==nt||r==yt)return!n.size;if(Ms(n))return!Va(n).length;for(var a in n)if(mt.call(n,a))return!1;return!0}function Jx(n,r){return xs(n,r)}function Qx(n,r,a){a=typeof a=="function"?a:t;var f=a?a(n,r):t;return f===t?xs(n,r,t,a):!!f}function ml(n){if(!Lt(n))return!1;var r=en(n);return r==ke||r==Me||typeof n.message=="string"&&typeof n.name=="string"&&!Ss(n)}function $x(n){return typeof n=="number"&&du(n)}function ci(n){if(!Tt(n))return!1;var r=en(n);return r==Ue||r==Be||r==Q||r==ft}function Ff(n){return typeof n=="number"&&n==Ke(n)}function Lo(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=se}function Tt(n){var r=typeof n;return n!=null&&(r=="object"||r=="function")}function Lt(n){return n!=null&&typeof n=="object"}var Of=jc?dn(jc):ig;function ev(n,r){return n===r||Ha(n,r,sl(r))}function tv(n,r,a){return a=typeof a=="function"?a:t,Ha(n,r,sl(r),a)}function nv(n){return Nf(n)&&n!=+n}function iv(n){if(Gg(n))throw new qe(o);return Eu(n)}function rv(n){return n===null}function sv(n){return n==null}function Nf(n){return typeof n=="number"||Lt(n)&&en(n)==Mt}function Ss(n){if(!Lt(n)||en(n)!=wt)return!1;var r=to(n);if(r===null)return!0;var a=mt.call(r,"constructor")&&r.constructor;return typeof a=="function"&&a instanceof a&&Js.call(a)==tm}var gl=Zc?dn(Zc):rg;function ov(n){return Ff(n)&&n>=-se&&n<=se}var zf=Kc?dn(Kc):sg;function Do(n){return typeof n=="string"||!je(n)&&Lt(n)&&en(n)==R}function mn(n){return typeof n=="symbol"||Lt(n)&&en(n)==E}var Dr=Jc?dn(Jc):og;function av(n){return n===t}function lv(n){return Lt(n)&&Zt(n)==pe}function cv(n){return Lt(n)&&en(n)==Se}var uv=Mo(ka),fv=Mo(function(n,r){return n<=r});function Uf(n){if(!n)return[];if(ln(n))return Do(n)?Gn(n):an(n);if(cs&&n[cs])return Vp(n[cs]());var r=Zt(n),a=r==nt?Pa:r==yt?js:Pr;return a(n)}function ui(n){if(!n)return n===0?n:0;if(n=In(n),n===le||n===-le){var r=n<0?-1:1;return r*K}return n===n?n:0}function Ke(n){var r=ui(n),a=r%1;return r===r?a?r-a:r:0}function Bf(n){return n?$i(Ke(n),0,me):0}function In(n){if(typeof n=="number")return n;if(mn(n))return $;if(Tt(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=Tt(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=iu(n);var a=rt.test(n);return a||St.test(n)?Ep(n.slice(2),a?2:8):ht.test(n)?$:+n}function Gf(n){return Jn(n,cn(n))}function hv(n){return n?$i(Ke(n),-se,se):n===0?n:0}function pt(n){return n==null?"":pn(n)}var dv=Ar(function(n,r){if(Ms(r)||ln(r)){Jn(r,Gt(r),n);return}for(var a in r)mt.call(r,a)&&ps(n,a,r[a])}),Wf=Ar(function(n,r){Jn(r,cn(r),n)}),Po=Ar(function(n,r,a,f){Jn(r,cn(r),n,f)}),pv=Ar(function(n,r,a,f){Jn(r,Gt(r),n,f)}),mv=ai(za);function gv(n,r){var a=Er(n);return r==null?a:vu(a,r)}var xv=$e(function(n,r){n=gt(n);var a=-1,f=r.length,_=f>2?r[2]:t;for(_&&tn(r[0],r[1],_)&&(f=1);++a<f;)for(var w=r[a],I=cn(w),U=-1,H=I.length;++U<H;){var oe=I[U],ae=n[oe];(ae===t||Hn(ae,br[oe])&&!mt.call(n,oe))&&(n[oe]=w[oe])}return n}),vv=$e(function(n){return n.push(t,rf),hn(Hf,t,n)});function _v(n,r){return $c(n,Ge(r,3),Kn)}function Mv(n,r){return $c(n,Ge(r,3),Ba)}function yv(n,r){return n==null?n:Ua(n,Ge(r,3),cn)}function Sv(n,r){return n==null?n:bu(n,Ge(r,3),cn)}function bv(n,r){return n&&Kn(n,Ge(r,3))}function wv(n,r){return n&&Ba(n,Ge(r,3))}function Tv(n){return n==null?[]:fo(n,Gt(n))}function Ev(n){return n==null?[]:fo(n,cn(n))}function xl(n,r,a){var f=n==null?t:er(n,r);return f===t?a:f}function Av(n,r){return n!=null&&af(n,r,Km)}function vl(n,r){return n!=null&&af(n,r,Jm)}var Cv=Qu(function(n,r,a){r!=null&&typeof r.toString!="function"&&(r=Qs.call(r)),n[r]=a},Ml(un)),Lv=Qu(function(n,r,a){r!=null&&typeof r.toString!="function"&&(r=Qs.call(r)),mt.call(n,r)?n[r].push(a):n[r]=[a]},Ge),Dv=$e(gs);function Gt(n){return ln(n)?gu(n):Va(n)}function cn(n){return ln(n)?gu(n,!0):ag(n)}function Pv(n,r){var a={};return r=Ge(r,3),Kn(n,function(f,_,w){si(a,r(f,_,w),f)}),a}function Rv(n,r){var a={};return r=Ge(r,3),Kn(n,function(f,_,w){si(a,_,r(f,_,w))}),a}var Iv=Ar(function(n,r,a){ho(n,r,a)}),Hf=Ar(function(n,r,a,f){ho(n,r,a,f)}),Fv=ai(function(n,r){var a={};if(n==null)return a;var f=!1;r=bt(r,function(w){return w=Ri(w,n),f||(f=w.length>1),w}),Jn(n,il(n),a),f&&(a=Dn(a,m|x|M,Cg));for(var _=r.length;_--;)Za(a,r[_]);return a});function Ov(n,r){return Vf(n,Co(Ge(r)))}var Nv=ai(function(n,r){return n==null?{}:cg(n,r)});function Vf(n,r){if(n==null)return{};var a=bt(il(n),function(f){return[f]});return r=Ge(r),Iu(n,a,function(f,_){return r(f,_[0])})}function zv(n,r,a){r=Ri(r,n);var f=-1,_=r.length;for(_||(_=1,n=t);++f<_;){var w=n==null?t:n[Qn(r[f])];w===t&&(f=_,w=a),n=ci(w)?w.call(n):w}return n}function Uv(n,r,a){return n==null?n:vs(n,r,a)}function Bv(n,r,a,f){return f=typeof f=="function"?f:t,n==null?n:vs(n,r,a,f)}var kf=tf(Gt),Xf=tf(cn);function Gv(n,r,a){var f=je(n),_=f||Fi(n)||Dr(n);if(r=Ge(r,4),a==null){var w=n&&n.constructor;_?a=f?new w:[]:Tt(n)?a=ci(w)?Er(to(n)):{}:a={}}return(_?An:Kn)(n,function(I,U,H){return r(a,I,U,H)}),a}function Wv(n,r){return n==null?!0:Za(n,r)}function Hv(n,r,a){return n==null?n:Uu(n,r,Qa(a))}function Vv(n,r,a,f){return f=typeof f=="function"?f:t,n==null?n:Uu(n,r,Qa(a),f)}function Pr(n){return n==null?[]:Da(n,Gt(n))}function kv(n){return n==null?[]:Da(n,cn(n))}function Xv(n,r,a){return a===t&&(a=r,r=t),a!==t&&(a=In(a),a=a===a?a:0),r!==t&&(r=In(r),r=r===r?r:0),$i(In(n),r,a)}function qv(n,r,a){return r=ui(r),a===t?(a=r,r=0):a=ui(a),n=In(n),Qm(n,r,a)}function Yv(n,r,a){if(a&&typeof a!="boolean"&&tn(n,r,a)&&(r=a=t),a===t&&(typeof r=="boolean"?(a=r,r=t):typeof n=="boolean"&&(a=n,n=t)),n===t&&r===t?(n=0,r=1):(n=ui(n),r===t?(r=n,n=0):r=ui(r)),n>r){var f=n;n=r,r=f}if(a||n%1||r%1){var _=pu();return jt(n+_*(r-n+Tp("1e-"+((_+"").length-1))),r)}return qa(n,r)}var jv=Cr(function(n,r,a){return r=r.toLowerCase(),n+(a?qf(r):r)});function qf(n){return _l(pt(n).toLowerCase())}function Yf(n){return n=pt(n),n&&n.replace(bi,Up).replace(mp,"")}function Zv(n,r,a){n=pt(n),r=pn(r);var f=n.length;a=a===t?f:$i(Ke(a),0,f);var _=a;return a-=r.length,a>=0&&n.slice(a,_)==r}function Kv(n){return n=pt(n),n&&Sn.test(n)?n.replace(ut,Bp):n}function Jv(n){return n=pt(n),n&&ma.test(n)?n.replace(ss,"\\$&"):n}var Qv=Cr(function(n,r,a){return n+(a?"-":"")+r.toLowerCase()}),$v=Cr(function(n,r,a){return n+(a?" ":"")+r.toLowerCase()}),e_=Zu("toLowerCase");function t_(n,r,a){n=pt(n),r=Ke(r);var f=r?yr(n):0;if(!r||f>=r)return n;var _=(r-f)/2;return _o(so(_),a)+n+_o(ro(_),a)}function n_(n,r,a){n=pt(n),r=Ke(r);var f=r?yr(n):0;return r&&f<r?n+_o(r-f,a):n}function i_(n,r,a){n=pt(n),r=Ke(r);var f=r?yr(n):0;return r&&f<r?_o(r-f,a)+n:n}function r_(n,r,a){return a||r==null?r=0:r&&(r=+r),fm(pt(n).replace(os,""),r||0)}function s_(n,r,a){return(a?tn(n,r,a):r===t)?r=1:r=Ke(r),Ya(pt(n),r)}function o_(){var n=arguments,r=pt(n[0]);return n.length<3?r:r.replace(n[1],n[2])}var a_=Cr(function(n,r,a){return n+(a?"_":"")+r.toLowerCase()});function l_(n,r,a){return a&&typeof a!="number"&&tn(n,r,a)&&(r=a=t),a=a===t?me:a>>>0,a?(n=pt(n),n&&(typeof r=="string"||r!=null&&!gl(r))&&(r=pn(r),!r&&Mr(n))?Ii(Gn(n),0,a):n.split(r,a)):[]}var c_=Cr(function(n,r,a){return n+(a?" ":"")+_l(r)});function u_(n,r,a){return n=pt(n),a=a==null?0:$i(Ke(a),0,n.length),r=pn(r),n.slice(a,a+r.length)==r}function f_(n,r,a){var f=y.templateSettings;a&&tn(n,r,a)&&(r=t),n=pt(n),r=Po({},r,f,nf);var _=Po({},r.imports,f.imports,nf),w=Gt(_),I=Da(_,w),U,H,oe=0,ae=r.interpolate||Un,fe="__p += '",Ae=Ra((r.escape||Un).source+"|"+ae.source+"|"+(ae===Yi?Je:Un).source+"|"+(r.evaluate||Un).source+"|$","g"),Fe="//# sourceURL="+(mt.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Mp+"]")+`
`;n.replace(Ae,function(He,et,ot,gn,nn,xn){return ot||(ot=gn),fe+=n.slice(oe,xn).replace(bn,Gp),et&&(U=!0,fe+=`' +
__e(`+et+`) +
'`),nn&&(H=!0,fe+=`';
`+nn+`;
__p += '`),ot&&(fe+=`' +
((__t = (`+ot+`)) == null ? '' : __t) +
'`),oe=xn+He.length,He}),fe+=`';
`;var We=mt.call(r,"variable")&&r.variable;if(!We)fe=`with (obj) {
`+fe+`
}
`;else if(Ve.test(We))throw new qe(c);fe=(H?fe.replace(Oe,""):fe).replace(ye,"$1").replace(Xe,"$1;"),fe="function("+(We||"obj")+`) {
`+(We?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(U?", __e = _.escape":"")+(H?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+fe+`return __p
}`;var Qe=Zf(function(){return dt(w,Fe+"return "+fe).apply(t,I)});if(Qe.source=fe,ml(Qe))throw Qe;return Qe}function h_(n){return pt(n).toLowerCase()}function d_(n){return pt(n).toUpperCase()}function p_(n,r,a){if(n=pt(n),n&&(a||r===t))return iu(n);if(!n||!(r=pn(r)))return n;var f=Gn(n),_=Gn(r),w=ru(f,_),I=su(f,_)+1;return Ii(f,w,I).join("")}function m_(n,r,a){if(n=pt(n),n&&(a||r===t))return n.slice(0,au(n)+1);if(!n||!(r=pn(r)))return n;var f=Gn(n),_=su(f,Gn(r))+1;return Ii(f,0,_).join("")}function g_(n,r,a){if(n=pt(n),n&&(a||r===t))return n.replace(os,"");if(!n||!(r=pn(r)))return n;var f=Gn(n),_=ru(f,Gn(r));return Ii(f,_).join("")}function x_(n,r){var a=V,f=X;if(Tt(r)){var _="separator"in r?r.separator:_;a="length"in r?Ke(r.length):a,f="omission"in r?pn(r.omission):f}n=pt(n);var w=n.length;if(Mr(n)){var I=Gn(n);w=I.length}if(a>=w)return n;var U=a-yr(f);if(U<1)return f;var H=I?Ii(I,0,U).join(""):n.slice(0,U);if(_===t)return H+f;if(I&&(U+=H.length-U),gl(_)){if(n.slice(U).search(_)){var oe,ae=H;for(_.global||(_=Ra(_.source,pt(Ze.exec(_))+"g")),_.lastIndex=0;oe=_.exec(ae);)var fe=oe.index;H=H.slice(0,fe===t?U:fe)}}else if(n.indexOf(pn(_),U)!=U){var Ae=H.lastIndexOf(_);Ae>-1&&(H=H.slice(0,Ae))}return H+f}function v_(n){return n=pt(n),n&&kt.test(n)?n.replace(ct,Yp):n}var __=Cr(function(n,r,a){return n+(a?" ":"")+r.toUpperCase()}),_l=Zu("toUpperCase");function jf(n,r,a){return n=pt(n),r=a?t:r,r===t?Hp(n)?Kp(n):Ip(n):n.match(r)||[]}var Zf=$e(function(n,r){try{return hn(n,t,r)}catch(a){return ml(a)?a:new qe(a)}}),M_=ai(function(n,r){return An(r,function(a){a=Qn(a),si(n,a,dl(n[a],n))}),n});function y_(n){var r=n==null?0:n.length,a=Ge();return n=r?bt(n,function(f){if(typeof f[1]!="function")throw new Cn(u);return[a(f[0]),f[1]]}):[],$e(function(f){for(var _=-1;++_<r;){var w=n[_];if(hn(w[0],this,f))return hn(w[1],this,f)}})}function S_(n){return Ym(Dn(n,m))}function Ml(n){return function(){return n}}function b_(n,r){return n==null||n!==n?r:n}var w_=Ju(),T_=Ju(!0);function un(n){return n}function yl(n){return Au(typeof n=="function"?n:Dn(n,m))}function E_(n){return Lu(Dn(n,m))}function A_(n,r){return Du(n,Dn(r,m))}var C_=$e(function(n,r){return function(a){return gs(a,n,r)}}),L_=$e(function(n,r){return function(a){return gs(n,a,r)}});function Sl(n,r,a){var f=Gt(r),_=fo(r,f);a==null&&!(Tt(r)&&(_.length||!f.length))&&(a=r,r=n,n=this,_=fo(r,Gt(r)));var w=!(Tt(a)&&"chain"in a)||!!a.chain,I=ci(n);return An(_,function(U){var H=r[U];n[U]=H,I&&(n.prototype[U]=function(){var oe=this.__chain__;if(w||oe){var ae=n(this.__wrapped__),fe=ae.__actions__=an(this.__actions__);return fe.push({func:H,args:arguments,thisArg:n}),ae.__chain__=oe,ae}return H.apply(n,Ai([this.value()],arguments))})}),n}function D_(){return qt._===this&&(qt._=nm),this}function bl(){}function P_(n){return n=Ke(n),$e(function(r){return Pu(r,n)})}var R_=el(bt),I_=el(Qc),F_=el(Ta);function Kf(n){return al(n)?Ea(Qn(n)):ug(n)}function O_(n){return function(r){return n==null?t:er(n,r)}}var N_=$u(),z_=$u(!0);function wl(){return[]}function Tl(){return!1}function U_(){return{}}function B_(){return""}function G_(){return!0}function W_(n,r){if(n=Ke(n),n<1||n>se)return[];var a=me,f=jt(n,me);r=Ge(r),n-=me;for(var _=La(f,r);++a<n;)r(a);return _}function H_(n){return je(n)?bt(n,Qn):mn(n)?[n]:an(gf(pt(n)))}function V_(n){var r=++em;return pt(n)+r}var k_=vo(function(n,r){return n+r},0),X_=tl("ceil"),q_=vo(function(n,r){return n/r},1),Y_=tl("floor");function j_(n){return n&&n.length?uo(n,un,Ga):t}function Z_(n,r){return n&&n.length?uo(n,Ge(r,2),Ga):t}function K_(n){return tu(n,un)}function J_(n,r){return tu(n,Ge(r,2))}function Q_(n){return n&&n.length?uo(n,un,ka):t}function $_(n,r){return n&&n.length?uo(n,Ge(r,2),ka):t}var eM=vo(function(n,r){return n*r},1),tM=tl("round"),nM=vo(function(n,r){return n-r},0);function iM(n){return n&&n.length?Ca(n,un):0}function rM(n,r){return n&&n.length?Ca(n,Ge(r,2)):0}return y.after=Ex,y.ary=Af,y.assign=dv,y.assignIn=Wf,y.assignInWith=Po,y.assignWith=pv,y.at=mv,y.before=Cf,y.bind=dl,y.bindAll=M_,y.bindKey=Lf,y.castArray=Ux,y.chain=wf,y.chunk=Yg,y.compact=jg,y.concat=Zg,y.cond=y_,y.conforms=S_,y.constant=Ml,y.countBy=ix,y.create=gv,y.curry=Df,y.curryRight=Pf,y.debounce=Rf,y.defaults=xv,y.defaultsDeep=vv,y.defer=Ax,y.delay=Cx,y.difference=Kg,y.differenceBy=Jg,y.differenceWith=Qg,y.drop=$g,y.dropRight=e0,y.dropRightWhile=t0,y.dropWhile=n0,y.fill=i0,y.filter=sx,y.flatMap=lx,y.flatMapDeep=cx,y.flatMapDepth=ux,y.flatten=Mf,y.flattenDeep=r0,y.flattenDepth=s0,y.flip=Lx,y.flow=w_,y.flowRight=T_,y.fromPairs=o0,y.functions=Tv,y.functionsIn=Ev,y.groupBy=fx,y.initial=l0,y.intersection=c0,y.intersectionBy=u0,y.intersectionWith=f0,y.invert=Cv,y.invertBy=Lv,y.invokeMap=dx,y.iteratee=yl,y.keyBy=px,y.keys=Gt,y.keysIn=cn,y.map=To,y.mapKeys=Pv,y.mapValues=Rv,y.matches=E_,y.matchesProperty=A_,y.memoize=Ao,y.merge=Iv,y.mergeWith=Hf,y.method=C_,y.methodOf=L_,y.mixin=Sl,y.negate=Co,y.nthArg=P_,y.omit=Fv,y.omitBy=Ov,y.once=Dx,y.orderBy=mx,y.over=R_,y.overArgs=Px,y.overEvery=I_,y.overSome=F_,y.partial=pl,y.partialRight=If,y.partition=gx,y.pick=Nv,y.pickBy=Vf,y.property=Kf,y.propertyOf=O_,y.pull=m0,y.pullAll=Sf,y.pullAllBy=g0,y.pullAllWith=x0,y.pullAt=v0,y.range=N_,y.rangeRight=z_,y.rearg=Rx,y.reject=_x,y.remove=_0,y.rest=Ix,y.reverse=fl,y.sampleSize=yx,y.set=Uv,y.setWith=Bv,y.shuffle=Sx,y.slice=M0,y.sortBy=Tx,y.sortedUniq=A0,y.sortedUniqBy=C0,y.split=l_,y.spread=Fx,y.tail=L0,y.take=D0,y.takeRight=P0,y.takeRightWhile=R0,y.takeWhile=I0,y.tap=j0,y.throttle=Ox,y.thru=wo,y.toArray=Uf,y.toPairs=kf,y.toPairsIn=Xf,y.toPath=H_,y.toPlainObject=Gf,y.transform=Gv,y.unary=Nx,y.union=F0,y.unionBy=O0,y.unionWith=N0,y.uniq=z0,y.uniqBy=U0,y.uniqWith=B0,y.unset=Wv,y.unzip=hl,y.unzipWith=bf,y.update=Hv,y.updateWith=Vv,y.values=Pr,y.valuesIn=kv,y.without=G0,y.words=jf,y.wrap=zx,y.xor=W0,y.xorBy=H0,y.xorWith=V0,y.zip=k0,y.zipObject=X0,y.zipObjectDeep=q0,y.zipWith=Y0,y.entries=kf,y.entriesIn=Xf,y.extend=Wf,y.extendWith=Po,Sl(y,y),y.add=k_,y.attempt=Zf,y.camelCase=jv,y.capitalize=qf,y.ceil=X_,y.clamp=Xv,y.clone=Bx,y.cloneDeep=Wx,y.cloneDeepWith=Hx,y.cloneWith=Gx,y.conformsTo=Vx,y.deburr=Yf,y.defaultTo=b_,y.divide=q_,y.endsWith=Zv,y.eq=Hn,y.escape=Kv,y.escapeRegExp=Jv,y.every=rx,y.find=ox,y.findIndex=vf,y.findKey=_v,y.findLast=ax,y.findLastIndex=_f,y.findLastKey=Mv,y.floor=Y_,y.forEach=Tf,y.forEachRight=Ef,y.forIn=yv,y.forInRight=Sv,y.forOwn=bv,y.forOwnRight=wv,y.get=xl,y.gt=kx,y.gte=Xx,y.has=Av,y.hasIn=vl,y.head=yf,y.identity=un,y.includes=hx,y.indexOf=a0,y.inRange=qv,y.invoke=Dv,y.isArguments=ir,y.isArray=je,y.isArrayBuffer=qx,y.isArrayLike=ln,y.isArrayLikeObject=Pt,y.isBoolean=Yx,y.isBuffer=Fi,y.isDate=jx,y.isElement=Zx,y.isEmpty=Kx,y.isEqual=Jx,y.isEqualWith=Qx,y.isError=ml,y.isFinite=$x,y.isFunction=ci,y.isInteger=Ff,y.isLength=Lo,y.isMap=Of,y.isMatch=ev,y.isMatchWith=tv,y.isNaN=nv,y.isNative=iv,y.isNil=sv,y.isNull=rv,y.isNumber=Nf,y.isObject=Tt,y.isObjectLike=Lt,y.isPlainObject=Ss,y.isRegExp=gl,y.isSafeInteger=ov,y.isSet=zf,y.isString=Do,y.isSymbol=mn,y.isTypedArray=Dr,y.isUndefined=av,y.isWeakMap=lv,y.isWeakSet=cv,y.join=h0,y.kebabCase=Qv,y.last=Rn,y.lastIndexOf=d0,y.lowerCase=$v,y.lowerFirst=e_,y.lt=uv,y.lte=fv,y.max=j_,y.maxBy=Z_,y.mean=K_,y.meanBy=J_,y.min=Q_,y.minBy=$_,y.stubArray=wl,y.stubFalse=Tl,y.stubObject=U_,y.stubString=B_,y.stubTrue=G_,y.multiply=eM,y.nth=p0,y.noConflict=D_,y.noop=bl,y.now=Eo,y.pad=t_,y.padEnd=n_,y.padStart=i_,y.parseInt=r_,y.random=Yv,y.reduce=xx,y.reduceRight=vx,y.repeat=s_,y.replace=o_,y.result=zv,y.round=tM,y.runInContext=G,y.sample=Mx,y.size=bx,y.snakeCase=a_,y.some=wx,y.sortedIndex=y0,y.sortedIndexBy=S0,y.sortedIndexOf=b0,y.sortedLastIndex=w0,y.sortedLastIndexBy=T0,y.sortedLastIndexOf=E0,y.startCase=c_,y.startsWith=u_,y.subtract=nM,y.sum=iM,y.sumBy=rM,y.template=f_,y.times=W_,y.toFinite=ui,y.toInteger=Ke,y.toLength=Bf,y.toLower=h_,y.toNumber=In,y.toSafeInteger=hv,y.toString=pt,y.toUpper=d_,y.trim=p_,y.trimEnd=m_,y.trimStart=g_,y.truncate=x_,y.unescape=v_,y.uniqueId=V_,y.upperCase=__,y.upperFirst=_l,y.each=Tf,y.eachRight=Ef,y.first=yf,Sl(y,function(){var n={};return Kn(y,function(r,a){mt.call(y.prototype,a)||(n[a]=r)}),n}(),{chain:!1}),y.VERSION=i,An(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){y[n].placeholder=y}),An(["drop","take"],function(n,r){it.prototype[n]=function(a){a=a===t?1:zt(Ke(a),0);var f=this.__filtered__&&!r?new it(this):this.clone();return f.__filtered__?f.__takeCount__=jt(a,f.__takeCount__):f.__views__.push({size:jt(a,me),type:n+(f.__dir__<0?"Right":"")}),f},it.prototype[n+"Right"]=function(a){return this.reverse()[n](a).reverse()}}),An(["filter","map","takeWhile"],function(n,r){var a=r+1,f=a==k||a==Z;it.prototype[n]=function(_){var w=this.clone();return w.__iteratees__.push({iteratee:Ge(_,3),type:a}),w.__filtered__=w.__filtered__||f,w}}),An(["head","last"],function(n,r){var a="take"+(r?"Right":"");it.prototype[n]=function(){return this[a](1).value()[0]}}),An(["initial","tail"],function(n,r){var a="drop"+(r?"":"Right");it.prototype[n]=function(){return this.__filtered__?new it(this):this[a](1)}}),it.prototype.compact=function(){return this.filter(un)},it.prototype.find=function(n){return this.filter(n).head()},it.prototype.findLast=function(n){return this.reverse().find(n)},it.prototype.invokeMap=$e(function(n,r){return typeof n=="function"?new it(this):this.map(function(a){return gs(a,n,r)})}),it.prototype.reject=function(n){return this.filter(Co(Ge(n)))},it.prototype.slice=function(n,r){n=Ke(n);var a=this;return a.__filtered__&&(n>0||r<0)?new it(a):(n<0?a=a.takeRight(-n):n&&(a=a.drop(n)),r!==t&&(r=Ke(r),a=r<0?a.dropRight(-r):a.take(r-n)),a)},it.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},it.prototype.toArray=function(){return this.take(me)},Kn(it.prototype,function(n,r){var a=/^(?:filter|find|map|reject)|While$/.test(r),f=/^(?:head|last)$/.test(r),_=y[f?"take"+(r=="last"?"Right":""):r],w=f||/^find/.test(r);!_||(y.prototype[r]=function(){var I=this.__wrapped__,U=f?[1]:arguments,H=I instanceof it,oe=U[0],ae=H||je(I),fe=function(et){var ot=_.apply(y,Ai([et],U));return f&&Ae?ot[0]:ot};ae&&a&&typeof oe=="function"&&oe.length!=1&&(H=ae=!1);var Ae=this.__chain__,Fe=!!this.__actions__.length,We=w&&!Ae,Qe=H&&!Fe;if(!w&&ae){I=Qe?I:new it(this);var He=n.apply(I,U);return He.__actions__.push({func:wo,args:[fe],thisArg:t}),new Ln(He,Ae)}return We&&Qe?n.apply(this,U):(He=this.thru(fe),We?f?He.value()[0]:He.value():He)})}),An(["pop","push","shift","sort","splice","unshift"],function(n){var r=Zs[n],a=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",f=/^(?:pop|shift)$/.test(n);y.prototype[n]=function(){var _=arguments;if(f&&!this.__chain__){var w=this.value();return r.apply(je(w)?w:[],_)}return this[a](function(I){return r.apply(je(I)?I:[],_)})}}),Kn(it.prototype,function(n,r){var a=y[r];if(a){var f=a.name+"";mt.call(Tr,f)||(Tr[f]=[]),Tr[f].push({name:r,func:a})}}),Tr[xo(t,b).name]=[{name:"wrapper",func:t}],it.prototype.clone=vm,it.prototype.reverse=_m,it.prototype.value=Mm,y.prototype.at=Z0,y.prototype.chain=K0,y.prototype.commit=J0,y.prototype.next=Q0,y.prototype.plant=ex,y.prototype.reverse=tx,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=nx,y.prototype.first=y.prototype.head,cs&&(y.prototype[cs]=$0),y},Sr=Jp();Zi?((Zi.exports=Sr)._=Sr,ya._=Sr):qt._=Sr}).call(As)})(_c,_c.exports);var FT=_c.exports;const xd={type:"change"},ac={type:"start"},vd={type:"end"};class OT extends Xi{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vi.ROTATE,MIDDLE:vi.DOLLY,RIGHT:vi.PAN},this.touches={ONE:Rr.ROTATE,TWO:Rr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",yt),this._domElementKeyEvents=L},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(xd),i.update(),o=s.NONE},this.update=function(){const L=new B,ue=new ki().setFromUnitVectors(e.up,new B(0,1,0)),be=ue.clone().invert(),ve=new B,N=new ki,_e=2*Math.PI;return function(){const ze=i.object.position;L.copy(ze).sub(i.target),L.applyQuaternion(ue),c.setFromVector3(L),i.autoRotate&&o===s.NONE&&O(W()),i.enableDamping?(c.theta+=h.theta*i.dampingFactor,c.phi+=h.phi*i.dampingFactor):(c.theta+=h.theta,c.phi+=h.phi);let Ee=i.minAzimuthAngle,Oe=i.maxAzimuthAngle;return isFinite(Ee)&&isFinite(Oe)&&(Ee<-Math.PI?Ee+=_e:Ee>Math.PI&&(Ee-=_e),Oe<-Math.PI?Oe+=_e:Oe>Math.PI&&(Oe-=_e),Ee<=Oe?c.theta=Math.max(Ee,Math.min(Oe,c.theta)):c.theta=c.theta>(Ee+Oe)/2?Math.max(Ee,c.theta):Math.min(Oe,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),c.radius*=d,c.radius=Math.max(i.minDistance,Math.min(i.maxDistance,c.radius)),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),L.setFromSpherical(c),L.applyQuaternion(be),ze.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(h.theta*=1-i.dampingFactor,h.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(h.set(0,0,0),p.set(0,0,0)),d=1,m||ve.distanceToSquared(i.object.position)>u||8*(1-N.dot(i.object.quaternion))>u?(i.dispatchEvent(xd),ve.copy(i.object.position),N.copy(i.object.quaternion),m=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ie),i.domElement.removeEventListener("pointerdown",nt),i.domElement.removeEventListener("pointercancel",wt),i.domElement.removeEventListener("wheel",Bt),i.domElement.removeEventListener("pointermove",Mt),i.domElement.removeEventListener("pointerup",Ot),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",yt)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=s.NONE;const u=1e-6,c=new gd,h=new gd;let d=1;const p=new B;let m=!1;const x=new Le,M=new Le,S=new Le,v=new Le,g=new Le,b=new Le,D=new Le,F=new Le,A=new Le,C=[],z={};function W(){return 2*Math.PI/60/60*i.autoRotateSpeed}function T(){return Math.pow(.95,i.zoomSpeed)}function O(L){h.theta-=L}function V(L){h.phi-=L}const X=function(){const L=new B;return function(be,ve){L.setFromMatrixColumn(ve,0),L.multiplyScalar(-be),p.add(L)}}(),re=function(){const L=new B;return function(be,ve){i.screenSpacePanning===!0?L.setFromMatrixColumn(ve,1):(L.setFromMatrixColumn(ve,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(be),p.add(L)}}(),he=function(){const L=new B;return function(be,ve){const N=i.domElement;if(i.object.isPerspectiveCamera){const _e=i.object.position;L.copy(_e).sub(i.target);let ge=L.length();ge*=Math.tan(i.object.fov/2*Math.PI/180),X(2*be*ge/N.clientHeight,i.object.matrix),re(2*ve*ge/N.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(X(be*(i.object.right-i.object.left)/i.object.zoom/N.clientWidth,i.object.matrix),re(ve*(i.object.top-i.object.bottom)/i.object.zoom/N.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function k(L){i.object.isPerspectiveCamera?d/=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*L)),i.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ne(L){i.object.isPerspectiveCamera?d*=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/L)),i.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(L){x.set(L.clientX,L.clientY)}function le(L){D.set(L.clientX,L.clientY)}function se(L){v.set(L.clientX,L.clientY)}function K(L){M.set(L.clientX,L.clientY),S.subVectors(M,x).multiplyScalar(i.rotateSpeed);const ue=i.domElement;O(2*Math.PI*S.x/ue.clientHeight),V(2*Math.PI*S.y/ue.clientHeight),x.copy(M),i.update()}function $(L){F.set(L.clientX,L.clientY),A.subVectors(F,D),A.y>0?k(T()):A.y<0&&ne(T()),D.copy(F),i.update()}function me(L){g.set(L.clientX,L.clientY),b.subVectors(g,v).multiplyScalar(i.panSpeed),he(b.x,b.y),v.copy(g),i.update()}function de(L){L.deltaY<0?ne(T()):L.deltaY>0&&k(T()),i.update()}function we(L){let ue=!1;switch(L.code){case i.keys.UP:he(0,i.keyPanSpeed),ue=!0;break;case i.keys.BOTTOM:he(0,-i.keyPanSpeed),ue=!0;break;case i.keys.LEFT:he(i.keyPanSpeed,0),ue=!0;break;case i.keys.RIGHT:he(-i.keyPanSpeed,0),ue=!0;break}ue&&(L.preventDefault(),i.update())}function Re(){if(C.length===1)x.set(C[0].pageX,C[0].pageY);else{const L=.5*(C[0].pageX+C[1].pageX),ue=.5*(C[0].pageY+C[1].pageY);x.set(L,ue)}}function Ie(){if(C.length===1)v.set(C[0].pageX,C[0].pageY);else{const L=.5*(C[0].pageX+C[1].pageX),ue=.5*(C[0].pageY+C[1].pageY);v.set(L,ue)}}function te(){const L=C[0].pageX-C[1].pageX,ue=C[0].pageY-C[1].pageY,be=Math.sqrt(L*L+ue*ue);D.set(0,be)}function Q(){i.enableZoom&&te(),i.enablePan&&Ie()}function xe(){i.enableZoom&&te(),i.enableRotate&&Re()}function De(L){if(C.length==1)M.set(L.pageX,L.pageY);else{const be=Ne(L),ve=.5*(L.pageX+be.x),N=.5*(L.pageY+be.y);M.set(ve,N)}S.subVectors(M,x).multiplyScalar(i.rotateSpeed);const ue=i.domElement;O(2*Math.PI*S.x/ue.clientHeight),V(2*Math.PI*S.y/ue.clientHeight),x.copy(M)}function Me(L){if(C.length===1)g.set(L.pageX,L.pageY);else{const ue=Ne(L),be=.5*(L.pageX+ue.x),ve=.5*(L.pageY+ue.y);g.set(be,ve)}b.subVectors(g,v).multiplyScalar(i.panSpeed),he(b.x,b.y),v.copy(g)}function ke(L){const ue=Ne(L),be=L.pageX-ue.x,ve=L.pageY-ue.y,N=Math.sqrt(be*be+ve*ve);F.set(0,N),A.set(0,Math.pow(F.y/D.y,i.zoomSpeed)),k(A.y),D.copy(F)}function Ue(L){i.enableZoom&&ke(L),i.enablePan&&Me(L)}function Be(L){i.enableZoom&&ke(L),i.enableRotate&&De(L)}function nt(L){i.enabled!==!1&&(C.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",Mt),i.domElement.addEventListener("pointerup",Ot)),pe(L),L.pointerType==="touch"?R(L):At(L))}function Mt(L){i.enabled!==!1&&(L.pointerType==="touch"?E(L):ft(L))}function Ot(L){Se(L),C.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",Mt),i.domElement.removeEventListener("pointerup",Ot)),i.dispatchEvent(vd),o=s.NONE}function wt(L){Se(L)}function At(L){let ue;switch(L.button){case 0:ue=i.mouseButtons.LEFT;break;case 1:ue=i.mouseButtons.MIDDLE;break;case 2:ue=i.mouseButtons.RIGHT;break;default:ue=-1}switch(ue){case vi.DOLLY:if(i.enableZoom===!1)return;le(L),o=s.DOLLY;break;case vi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;se(L),o=s.PAN}else{if(i.enableRotate===!1)return;Z(L),o=s.ROTATE}break;case vi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;Z(L),o=s.ROTATE}else{if(i.enablePan===!1)return;se(L),o=s.PAN}break;default:o=s.NONE}o!==s.NONE&&i.dispatchEvent(ac)}function ft(L){if(i.enabled!==!1)switch(o){case s.ROTATE:if(i.enableRotate===!1)return;K(L);break;case s.DOLLY:if(i.enableZoom===!1)return;$(L);break;case s.PAN:if(i.enablePan===!1)return;me(L);break}}function Bt(L){i.enabled===!1||i.enableZoom===!1||o!==s.NONE||(L.preventDefault(),i.dispatchEvent(ac),de(L),i.dispatchEvent(vd))}function yt(L){i.enabled===!1||i.enablePan===!1||we(L)}function R(L){switch(Te(L),C.length){case 1:switch(i.touches.ONE){case Rr.ROTATE:if(i.enableRotate===!1)return;Re(),o=s.TOUCH_ROTATE;break;case Rr.PAN:if(i.enablePan===!1)return;Ie(),o=s.TOUCH_PAN;break;default:o=s.NONE}break;case 2:switch(i.touches.TWO){case Rr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Q(),o=s.TOUCH_DOLLY_PAN;break;case Rr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;xe(),o=s.TOUCH_DOLLY_ROTATE;break;default:o=s.NONE}break;default:o=s.NONE}o!==s.NONE&&i.dispatchEvent(ac)}function E(L){switch(Te(L),o){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;De(L),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;Me(L),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ue(L),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Be(L),i.update();break;default:o=s.NONE}}function ie(L){i.enabled!==!1&&L.preventDefault()}function pe(L){C.push(L)}function Se(L){delete z[L.pointerId];for(let ue=0;ue<C.length;ue++)if(C[ue].pointerId==L.pointerId){C.splice(ue,1);return}}function Te(L){let ue=z[L.pointerId];ue===void 0&&(ue=new Le,z[L.pointerId]=ue),ue.set(L.pageX,L.pageY)}function Ne(L){const ue=L.pointerId===C[0].pointerId?C[1]:C[0];return z[ue.pointerId]}i.domElement.addEventListener("contextmenu",ie),i.domElement.addEventListener("pointerdown",nt),i.domElement.addEventListener("pointercancel",wt),i.domElement.addEventListener("wheel",Bt,{passive:!1}),this.update()}}const vT=.5*(Math.sqrt(3)-1),Cs=(3-Math.sqrt(3))/6,_d=l=>Math.floor(l)|0,Md=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function NT(l=Math.random){const e=_T(l),t=new Float64Array(e).map(s=>Md[s%12*2]),i=new Float64Array(e).map(s=>Md[s%12*2+1]);return function(o,u){let c=0,h=0,d=0;const p=(o+u)*vT,m=_d(o+p),x=_d(u+p),M=(m+x)*Cs,S=m-M,v=x-M,g=o-S,b=u-v;let D,F;g>b?(D=1,F=0):(D=0,F=1);const A=g-D+Cs,C=b-F+Cs,z=g-1+2*Cs,W=b-1+2*Cs,T=m&255,O=x&255;let V=.5-g*g-b*b;if(V>=0){const he=T+e[O],k=t[he],ne=i[he];V*=V,c=V*V*(k*g+ne*b)}let X=.5-A*A-C*C;if(X>=0){const he=T+D+e[O+F],k=t[he],ne=i[he];X*=X,h=X*X*(k*A+ne*C)}let re=.5-z*z-W*W;if(re>=0){const he=T+1+e[O+1],k=t[he],ne=i[he];re*=re,d=re*re*(k*z+ne*W)}return 70*(c+h+d)}}function _T(l){const t=new Uint8Array(512);for(let i=0;i<512/2;i++)t[i]=i;for(let i=0;i<512/2-1;i++){const s=i+~~(l()*(256-i)),o=t[i];t[i]=t[s],t[s]=o}for(let i=256;i<512;i++)t[i]=t[i-256];return t}const oa={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class qi{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const MT=new ua(-1,1,1,-1,0,1),Cc=new fn;Cc.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3));Cc.setAttribute("uv",new Et([0,2,0,0,2,0],2));class Hs{constructor(e){this._mesh=new Mi(Cc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,MT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class yd extends qi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Si.clone(e.uniforms),this.material=new Vt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Hs(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class Sd extends qi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let u,c;this.inverse?(u=0,c=1):(u=1,c=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,u,4294967295),o.buffers.stencil.setClear(c),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class yT extends qi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class zT{constructor(e,t){if(this.renderer=e,t===void 0){const i=e.getSize(new Le);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new yn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],oa===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),yd===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new yd(oa),this.clock=new xT}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,o=this.passes.length;s<o;s++){const u=this.passes[s];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),u.needsSwap){if(i){const c=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(c.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(c.EQUAL,1,4294967295)}this.swapBuffers()}Sd!==void 0&&(u instanceof Sd?i=!0:u instanceof yT&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new ua(-1,1,1,-1,0,1);const rp=new fn;rp.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3));rp.setAttribute("uv",new Et([0,2,0,0,2,0],2));class UT extends qi{constructor(e,t,i,s,o){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=o!==void 0?o:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new at}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let o,u;this.overrideMaterial!==void 0&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),o=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,o),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=u),e.autoClear=s}}const bd={uniforms:{tDiffuse:{value:null},tSize:{value:new Le(256,256)},center:{value:new Le(.5,.5)},angle:{value:1.57},scale:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform vec2 center;
		uniform float angle;
		uniform float scale;
		uniform vec2 tSize;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		float pattern() {

			float s = sin( angle ), c = cos( angle );

			vec2 tex = vUv * tSize - center;
			vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;

			return ( sin( point.x ) * sin( point.y ) ) * 4.0;

		}

		void main() {

			vec4 color = texture2D( tDiffuse, vUv );

			float average = ( color.r + color.g + color.b ) / 3.0;

			gl_FragColor = vec4( vec3( average * 10.0 - 5.0 + pattern() ), color.a );

		}`};class BT extends qi{constructor(e,t,i){super(),bd===void 0&&console.error("THREE.DotScreenPass relies on DotScreenShader");const s=bd;this.uniforms=Si.clone(s.uniforms),e!==void 0&&this.uniforms.center.value.copy(e),t!==void 0&&(this.uniforms.angle.value=t),i!==void 0&&(this.uniforms.scale.value=i),this.material=new Vt({uniforms:this.uniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),this.fsQuad=new Hs(this.material)}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.tSize.value.set(i.width,i.height),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}}const wd={uniforms:{tDiffuse:{value:null},tDisp:{value:null},byp:{value:0},amount:{value:.08},angle:{value:.02},seed:{value:.02},seed_x:{value:.02},seed_y:{value:.02},distortion_x:{value:.5},distortion_y:{value:.6},col_s:{value:.05}},vertexShader:`

		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		uniform int byp; //should we apply the glitch ?

		uniform sampler2D tDiffuse;
		uniform sampler2D tDisp;

		uniform float amount;
		uniform float angle;
		uniform float seed;
		uniform float seed_x;
		uniform float seed_y;
		uniform float distortion_x;
		uniform float distortion_y;
		uniform float col_s;

		varying vec2 vUv;


		float rand(vec2 co){
			return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
		}

		void main() {
			if(byp<1) {
				vec2 p = vUv;
				float xs = floor(gl_FragCoord.x / 0.5);
				float ys = floor(gl_FragCoord.y / 0.5);
				//based on staffantans glitch shader for unity https://github.com/staffantan/unityglitch
				float disp = texture2D(tDisp, p*seed*seed).r;
				if(p.y<distortion_x+col_s && p.y>distortion_x-col_s*seed) {
					if(seed_x>0.){
						p.y = 1. - (p.y + distortion_y);
					}
					else {
						p.y = distortion_y;
					}
				}
				if(p.x<distortion_y+col_s && p.x>distortion_y-col_s*seed) {
					if(seed_y>0.){
						p.x=distortion_x;
					}
					else {
						p.x = 1. - (p.x + distortion_x);
					}
				}
				p.x+=disp*seed_x*(seed/5.);
				p.y+=disp*seed_y*(seed/5.);
				//base from RGB shift shader
				vec2 offset = amount * vec2( cos(angle), sin(angle));
				vec4 cr = texture2D(tDiffuse, p + offset);
				vec4 cga = texture2D(tDiffuse, p);
				vec4 cb = texture2D(tDiffuse, p - offset);
				gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);
				//add noise
				vec4 snow = 200.*amount*vec4(rand(vec2(xs * seed,ys * seed*50.))*0.2);
				gl_FragColor = gl_FragColor+ snow;
			}
			else {
				gl_FragColor=texture2D (tDiffuse, vUv);
			}
		}`};class GT extends qi{constructor(e=64){super(),wd===void 0&&console.error("THREE.GlitchPass relies on DigitalGlitch");const t=wd;this.uniforms=Si.clone(t.uniforms),this.uniforms.tDisp.value=this.generateHeightmap(e),this.material=new Vt({uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Hs(this.material),this.goWild=!1,this.curF=0,this.generateTrigger()}render(e,t,i){e.capabilities.isWebGL2===!1&&(this.uniforms.tDisp.value.format=Rd),this.uniforms.tDiffuse.value=i.texture,this.uniforms.seed.value=Math.random(),this.uniforms.byp.value=0,this.curF%this.randX==0||this.goWild==!0?(this.uniforms.amount.value=Math.random()/30,this.uniforms.angle.value=Fn.randFloat(-Math.PI,Math.PI),this.uniforms.seed_x.value=Fn.randFloat(-1,1),this.uniforms.seed_y.value=Fn.randFloat(-1,1),this.uniforms.distortion_x.value=Fn.randFloat(0,1),this.uniforms.distortion_y.value=Fn.randFloat(0,1),this.curF=0,this.generateTrigger()):this.curF%this.randX<this.randX/5?(this.uniforms.amount.value=Math.random()/90,this.uniforms.angle.value=Fn.randFloat(-Math.PI,Math.PI),this.uniforms.distortion_x.value=Fn.randFloat(0,1),this.uniforms.distortion_y.value=Fn.randFloat(0,1),this.uniforms.seed_x.value=Fn.randFloat(-.3,.3),this.uniforms.seed_y.value=Fn.randFloat(-.3,.3)):this.goWild==!1&&(this.uniforms.byp.value=1),this.curF++,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}generateTrigger(){this.randX=Fn.randInt(120,240)}generateHeightmap(e){const t=new Float32Array(e*e),i=e*e;for(let o=0;o<i;o++){const u=Fn.randFloat(0,1);t[o]=u}const s=new uT(t,e,e,Id,Hi);return s.needsUpdate=!0,s}}const WT={uniforms:{tDiffuse:{value:null},amount:{value:.005},angle:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float amount;
		uniform float angle;

		varying vec2 vUv;

		void main() {

			vec2 offset = amount * vec2( cos(angle), sin(angle));
			vec4 cr = texture2D(tDiffuse, vUv + offset);
			vec4 cga = texture2D(tDiffuse, vUv);
			vec4 cb = texture2D(tDiffuse, vUv - offset);
			gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);

		}`},HT={uniforms:{tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 tex = texture2D( tDiffuse, vUv );

			gl_FragColor = LinearTosRGB( tex );

		}`},Td={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new at(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class zs extends qi{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Le(e.x,e.y):new Le(256,256),this.clearColor=new at(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new yn(o,u),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let m=0;m<this.nMips;m++){const x=new yn(o,u);x.texture.name="UnrealBloomPass.h"+m,x.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(x);const M=new yn(o,u);M.texture.name="UnrealBloomPass.v"+m,M.texture.generateMipmaps=!1,this.renderTargetsVertical.push(M),o=Math.round(o/2),u=Math.round(u/2)}Td===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const c=Td;this.highPassUniforms=Si.clone(c.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Vt({uniforms:this.highPassUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const h=[3,5,7,9,11];o=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let m=0;m<this.nMips;m++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(h[m])),this.separableBlurMaterials[m].uniforms.texSize.value=new Le(o,u),o=Math.round(o/2),u=Math.round(u/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,oa===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const p=oa;this.copyUniforms=Si.clone(p.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Vt({uniforms:this.copyUniforms,vertexShader:p.vertexShader,fragmentShader:p.fragmentShader,blending:cc,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new at,this.oldClearAlpha=1,this.basic=new bc,this.fsQuad=new Hs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,s),this.renderTargetsVertical[o].setSize(i,s),this.separableBlurMaterials[o].uniforms.texSize.value=new Le(i,s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,o){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let c=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this.fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=c.texture,this.separableBlurMaterials[h].uniforms.direction.value=zs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=zs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this.fsQuad.render(e),c=this.renderTargetsVertical[h];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=u}getSeperableBlurMaterial(e){return new Vt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Le(.5,.5)},direction:{value:new Le(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}zs.BlurDirectionX=new Le(1,0);zs.BlurDirectionY=new Le(0,1);const Ls={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new Le(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},ta={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new Le(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},lc={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new Le(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class VT extends qi{constructor(e,t){super(),this.edgesRT=new yn(e,t,{depthBuffer:!1}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new yn(e,t,{depthBuffer:!1}),this.weightsRT.texture.name="SMAAPass.weights";const i=this,s=new Image;s.src=this.getAreaTexture(),s.onload=function(){i.areaTexture.needsUpdate=!0},this.areaTexture=new Qt,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=s,this.areaTexture.minFilter=Mn,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const o=new Image;o.src=this.getSearchTexture(),o.onload=function(){i.searchTexture.needsUpdate=!0},this.searchTexture=new Qt,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=o,this.searchTexture.magFilter=Ht,this.searchTexture.minFilter=Ht,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,Ls===void 0&&console.error("THREE.SMAAPass relies on SMAAShader"),this.uniformsEdges=Si.clone(Ls.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/t),this.materialEdges=new Vt({defines:Object.assign({},Ls.defines),uniforms:this.uniformsEdges,vertexShader:Ls.vertexShader,fragmentShader:Ls.fragmentShader}),this.uniformsWeights=Si.clone(ta.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/t),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new Vt({defines:Object.assign({},ta.defines),uniforms:this.uniformsWeights,vertexShader:ta.vertexShader,fragmentShader:ta.fragmentShader}),this.uniformsBlend=Si.clone(lc.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/t),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new Vt({uniforms:this.uniformsBlend,vertexShader:lc.vertexShader,fragmentShader:lc.fragmentShader}),this.needsSwap=!1,this.fsQuad=new Hs(null)}render(e,t,i){this.uniformsEdges.tDiffuse.value=i.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=i.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.edgesRT.setSize(e,t),this.weightsRT.setSize(e,t),this.materialEdges.uniforms.resolution.value.set(1/e,1/t),this.materialWeights.uniforms.resolution.value.set(1/e,1/t),this.materialBlend.uniforms.resolution.value.set(1/e,1/t)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}export{PT as A,Gs as B,at as C,Jr as D,zT as E,ep as F,GT as G,CT as H,$d as I,ET as J,Mn as L,Mi as M,Ht as N,ua as O,Tc as P,RT as R,ST as S,IT as T,zs as U,B as V,lT as W,FT as _,Vt as a,tp as b,xT as c,NT as d,TT as e,AT as f,DT as g,OT as h,ei as i,UT as j,BT as k,yd as l,WT as m,HT as n,VT as o,yn as p,Qo as q,LT as r,Qd as s,Jd as t,fT as u,bT as v,Nn as w,wT as x,dc as y,cc as z};
