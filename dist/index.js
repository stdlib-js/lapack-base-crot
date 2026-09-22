"use strict";var R=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var _=R(function(W,h){
var r=require('@stdlib/number-float64-base-to-float32/dist'),b=require('@stdlib/strided-base-reinterpret-complex64/dist'),H=require('@stdlib/complex-float32-real/dist'),I=require('@stdlib/complex-float32-imag/dist');function J(a,e,i,m,v,j,l,t,x){var n,o,q,f,E,O,u,s,y,p,c,d,w;if(a<=0)return v;for(n=b(e,0),o=b(v,0),u=m*2,s=l*2,E=i*2,O=j*2,q=H(x),f=I(x),w=0;w<a;w++)y=o[s],p=o[s+1],c=n[u],d=n[u+1],n[u]=r(r(t*c)+r(r(q*y)-r(f*p))),n[u+1]=r(r(t*d)+r(r(q*p)+r(f*y))),o[s]=r(r(t*y)-r(r(q*c)+r(f*d))),o[s+1]=r(r(t*p)-r(r(q*d)-r(f*c))),u+=E,s+=O;return v}h.exports=J
});var A=R(function(X,z){
var k=require('@stdlib/strided-base-stride2offset/dist'),K=_();function L(a,e,i,m,v,j,l){var t=k(a,i),x=k(a,v);return K(a,e,i,t,m,v,x,j,l)}z.exports=L
});var F=R(function(Y,D){
var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=A(),P=_();M(B,"ndarray",P);D.exports=B
});var Q=require("path").join,S=require('@stdlib/utils-try-require/dist'),T=require('@stdlib/assert-is-error/dist'),U=F(),g,G=S(Q(__dirname,"./native.js"));T(G)?g=U:g=G;module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
