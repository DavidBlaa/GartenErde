import{S as t,i as e,s as $,A as s,T as n,j as a,k as r,m as o,n as c,o as f,f as p,p as m,q as l,v as g,r as i,w as u,d,ac as x,ad as h}from"../../chunks/vendor-1792fa9e.js";import{a as w,R as b,I as y,L as k}from"../../chunks/SpeciesDetails-ad4efa41.js";import{h as I}from"../../chunks/store-05e62c71.js";function j(t){let e,$;const n=[t[0]];let r={};for(let a=0;a<n.length;a+=1)r=s(r,n[a]);return e=new b({props:r}),{c(){a(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,s){f(e,t,s),$=!0},p(t,$){const s=1&$?m(n,[l(t[0])]):{};e.$set(s)},i(t){$||(g(e.$$.fragment,t),$=!0)},o(t){i(e.$$.fragment,t),$=!1},d(t){u(e,t)}}}function z(t){let e,$;const n=[t[0]];let r={};for(let a=0;a<n.length;a+=1)r=s(r,n[a]);return e=new y({props:r}),{c(){a(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,s){f(e,t,s),$=!0},p(t,$){const s=1&$?m(n,[l(t[0])]):{};e.$set(s)},i(t){$||(g(e.$$.fragment,t),$=!0)},o(t){i(e.$$.fragment,t),$=!1},d(t){u(e,t)}}}function v(t){let e,$;const n=[t[0]];let r={};for(let a=0;a<n.length;a+=1)r=s(r,n[a]);return e=new k({props:r}),{c(){a(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,s){f(e,t,s),$=!0},p(t,$){const s=1&$?m(n,[l(t[0])]):{};e.$set(s)},i(t){$||(g(e.$$.fragment,t),$=!0)},o(t){i(e.$$.fragment,t),$=!1},d(t){u(e,t)}}}function L(t){let e,$,s,n,m,l;return e=new h({props:{tabId:"Beziehung",tab:"Beziehung",$$slots:{default:[j]},$$scope:{ctx:t}}}),s=new h({props:{tabId:"Interactions",tab:"Interaktionen",active:!0,$$slots:{default:[z]},$$scope:{ctx:t}}}),m=new h({props:{tabId:"Lebenszyklus",tab:"Lebenszyklus",$$slots:{default:[v]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment),$=r(),a(s.$$.fragment),n=r(),a(m.$$.fragment)},l(t){o(e.$$.fragment,t),$=c(t),o(s.$$.fragment,t),n=c(t),o(m.$$.fragment,t)},m(t,a){f(e,t,a),p(t,$,a),f(s,t,a),p(t,n,a),f(m,t,a),l=!0},p(t,$){const n={};3&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const a={};3&$&&(a.$$scope={dirty:$,ctx:t}),s.$set(a);const r={};3&$&&(r.$$scope={dirty:$,ctx:t}),m.$set(r)},i(t){l||(g(e.$$.fragment,t),g(s.$$.fragment,t),g(m.$$.fragment,t),l=!0)},o(t){i(e.$$.fragment,t),i(s.$$.fragment,t),i(m.$$.fragment,t),l=!1},d(t){u(e,t),t&&d($),u(s,t),t&&d(n),u(m,t)}}}function B(t){let e,$;return e=new x({props:{pills:!0,$$slots:{default:[L]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,s){f(e,t,s),$=!0},p(t,$){const s={};3&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){$||(g(e.$$.fragment,t),$=!0)},o(t){i(e.$$.fragment,t),$=!1},d(t){u(e,t)}}}function S(t){let e,$,x,h;const b=[t[0]];let y={};for(let n=0;n<b.length;n+=1)y=s(y,b[n]);return e=new w({props:y}),x=new n({props:{$$slots:{default:[B]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment),$=r(),a(x.$$.fragment)},l(t){o(e.$$.fragment,t),$=c(t),o(x.$$.fragment,t)},m(t,s){f(e,t,s),p(t,$,s),f(x,t,s),h=!0},p(t,[$]){const s=1&$?m(b,[l(t[0])]):{};e.$set(s);const n={};3&$&&(n.$$scope={dirty:$,ctx:t}),x.$set(n)},i(t){h||(g(e.$$.fragment,t),g(x.$$.fragment,t),h=!0)},o(t){i(e.$$.fragment,t),i(x.$$.fragment,t),h=!1},d(t){u(e,t),t&&d($),u(x,t)}}}async function q({page:t}){const e=t.params.id,$=I+"/api/animal/"+e.replace("$",""),s=await fetch($);return{props:{species:await s.json()}}}function A(t,e,$){let{species:s}=e;return t.$$set=t=>{"species"in t&&$(0,s=t.species)},[s]}export default class extends t{constructor(t){super(),e(this,t,A,S,$,{species:0})}}export{q as load};
