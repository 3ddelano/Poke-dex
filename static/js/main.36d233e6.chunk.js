(this["webpackJsonpapi-app"]=this["webpackJsonpapi-app"]||[]).push([[0],{21:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(14),s=c.n(n),r=(c(21),c(5)),i=c.n(r),j=c(15),p=c(3),o=c(16),u=c.n(o),b=c(0);function O(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)("pikachu"),r=Object(p.a)(s,2),o=r[0],O=r[1],l=Object(a.useState)(""),d=Object(p.a)(l,2),h=d[0],f=d[1],x=Object(a.useState)(""),m=Object(p.a)(x,2),v=m[0],k=m[1],g=Object(a.useState)(""),y=Object(p.a)(g,2),S=y[0],w=y[1];Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("https://pokeapi.co/api/v2/pokemon/".concat(o));case 3:t=e.sent,f(t.data.sprites.front_default),k(t.data.types[0].type.name),w(o),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("pokemon doesn't exist");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[o]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"back",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("img",{src:"".concat(h),alt:""}),Object(b.jsx)("div",{className:"name",children:S.toUpperCase()}),Object(b.jsx)("div",{className:"type",children:v}),Object(b.jsx)("input",{type:"text",onChange:function(e){n(e.target.value)},value:c}),Object(b.jsx)("button",{onClick:function(){""!==c&&O(c),n("")},children:"Search"})]})})})}c(42);var l=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(O,{})})};s.a.render(Object(b.jsx)(a.StrictMode,{children:Object(b.jsx)(l,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.36d233e6.chunk.js.map