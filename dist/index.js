"use strict";var R=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var _=R(function(W,h){
var r=require('@stdlib/number-float64-base-to-float32/dist'),b=require('@stdlib/strided-base-reinterpret-complex64/dist'),H=require('@stdlib/complex-float32-real/dist'),I=require('@stdlib/complex-float32-imag/dist');function J(e,a,f,m,i,j,l,v,x){var s,n,o,q,E,O,t,u,y,p,c,d,w;if(e<=0)return i;for(s=b(a,0),n=b(i,0),t=m*2,u=l*2,E=f*2,O=j*2,o=H(x),q=I(x),w=0;w<e;w++)y=n[u],p=n[u+1],c=s[t],d=s[t+1],s[t]=r(r(v*c)+r(r(o*y)-r(q*p))),s[t+1]=r(r(v*d)+r(r(o*p)+r(q*y))),n[u]=r(r(v*y)-r(r(o*c)+r(q*d))),n[u+1]=r(r(v*p)-r(r(o*d)-r(q*c))),t+=E,u+=O;return i}h.exports=J
});var A=R(function(X,z){
var k=require('@stdlib/strided-base-stride2offset/dist'),K=_();function L(e,a,f,m,i,j,l){var v=k(e,f),x=k(e,i);return K(e,a,f,v,m,i,x,j,l)}z.exports=L
});var F=R(function(Y,D){
var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=A(),P=_();M(B,"ndarray",P);D.exports=B
});var Q=require("path").join,S=require('@stdlib/utils-try-require/dist'),T=require('@stdlib/assert-is-error/dist'),U=F(),g,G=S(Q(__dirname,"./native.js"));T(G)?g=U:g=G;module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
