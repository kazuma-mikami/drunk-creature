(this["webpackJsonpdrunk-creature"]=this["webpackJsonpdrunk-creature"]||[]).push([[0],{30:function(e,t,a){e.exports=a(38)},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(28),u=a(8),i=a(40),m=function(e){var t=e.image,a=function(e){return{backgroundColor:"rgba(0,0,0,".concat((e>10?10:e)/10,")")}}(e.step);return r.a.createElement("div",null,t?r.a.createElement(i.a,{src:"".concat("/drunk-creature","/").concat(t),roundedCircle:!0,height:50,width:50}):r.a.createElement("div",{className:"empty-content",style:a}))},s=Object(n.createContext)({size:5,setSize:function(){}}),h=a(24),g=[{col:0,row:0},{col:0,row:1},{col:0,row:-1},{col:1,row:0},{col:1,row:1},{col:1,row:-1},{col:-1,row:0},{col:-1,row:1},{col:-1,row:-1}],f=function(e){for(var t=Object(h.a)(e).slice(0),a=t.length-1;a>=0;a--){var n=Math.floor(Math.random()*(a+1)),r=[t[n],t[a]];t[a]=r[0],t[n]=r[1]}return t},d=function(e,t){for(var a=0,n=0;n<e.length;n++)e[n].col===t.col&&e[n].row===t.row&&a++;return a},E=function(e){var t=e.image,a=e.position,o=e.history,c=Object(n.useContext)(s).size;return r.a.createElement("table",{id:"game-board"},r.a.createElement("tbody",null,Array(c).fill(0).map((function(e,n){return r.a.createElement("tr",{key:n},Array(c).fill(0).map((function(e,c){return r.a.createElement("td",{key:c},r.a.createElement(m,{image:(l=c,u=n,l===a.col&&u===a.row?t:void 0),step:d(o,{col:c,row:n})}));var l,u})))}))))},p=a(42),w=a(43),b=a(41),v=a(25),k=function(e){var t=e.pitch,a=e.onChange;return r.a.createElement(b.a.Group,{as:v.a,controlId:"formBasicRangeCustom"},r.a.createElement(b.a.Label,null,"\u79fb\u52d5\u901f\u5ea6"),r.a.createElement(b.a.Control,{type:"range",min:50,max:5e3,value:t,custom:!0,onChange:function(e){return a(e)}}))},C=function(){var e=Object(n.useContext)(s),t=e.size,a=e.setSize;return r.a.createElement(b.a.Group,{as:v.a,controlId:"exampleForm.SelectCustomSizeSm"},r.a.createElement(b.a.Label,null,"\u76e4\u9762\u306e\u5927\u304d\u3055(n\xd7n)"),r.a.createElement(b.a.Control,{type:"number",min:"1",max:"100",value:t,onChange:function(e){return a(Number(e.target.value))}}))},j=function(e){var t=e.image,a=e.onChange;return r.a.createElement(b.a.Group,{as:v.a},r.a.createElement(b.a.Label,null,"\u9154\u3063\u6255\u3044\u751f\u7269"),r.a.createElement(b.a.Row,null,r.a.createElement(b.a.Check,{type:"radio",label:"\u30b4\u30ad\u30d6\u30ea",onChange:function(){return a("cockroach.jpg")},checked:"cockroach.jpg"===t}),r.a.createElement(b.a.Check,{type:"radio",label:"\u30cf\u30e0\u30b9\u30bf\u30fc",onChange:function(){return a("hamster.png")},checked:"hamster.png"===t}),r.a.createElement(b.a.Check,{type:"radio",label:"\u4eba\u9593",onChange:function(){return a("human.png")},checked:"human.png"===t})))},y=function(){var e=Object(n.useState)(5),t=Object(u.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(function(e){return{col:Math.floor(Math.random()*e),row:Math.floor(Math.random()*e)}}(a)),i=Object(u.a)(c,2),m=i[0],h=i[1],d=Object(n.useState)([m]),v=Object(u.a)(d,2),y=v[0],O=v[1],S=Object(n.useState)(1e3),x=Object(u.a)(S,2),z=x[0],M=x[1],B=Object(n.useState)("cockroach.jpg"),I=Object(u.a)(B,2),N=I[0],R=I[1];return Object(n.useEffect)((function(){var e=setInterval((function(){var e=function(e,t){for(var a=f(Array(9).fill(0).map((function(e,t){return t})));a.length>0;){var n=g[a.pop()],r={col:e.col+n.col,row:e.row+n.row};if(r.col>=0&&r.col<t&&r.row>=0&&r.row<t)return r}return{col:e.col+(e.col>0?-1:0),row:e.row+(e.row>0?-1:0)}}(m,a);h(e),O([].concat(Object(l.a)(y),[m]))}),z);return function(){clearInterval(e)}})),r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{bg:"dark",variant:"dark"},r.a.createElement(p.a.Brand,{href:"#home"},r.a.createElement("img",{alt:"",src:"".concat("/drunk-creature","/logo.png"),width:"30",height:"30",className:"d-inline-block align-top"})," ","Drunk Creature")),r.a.createElement(s.Provider,{value:{size:a,setSize:o}},r.a.createElement(w.a,{style:{margin:"50px"}},r.a.createElement(w.a.Header,null,"\u8a2d\u5b9a"),r.a.createElement(w.a.Body,null,r.a.createElement(b.a,null,r.a.createElement(b.a.Row,null,r.a.createElement(k,{pitch:z,onChange:function(e){M(Number(e.target.value))}}),r.a.createElement(C,null)),r.a.createElement(b.a.Row,null,r.a.createElement(j,{image:N,onChange:function(e){R(e)}}))))),r.a.createElement(E,{image:N,position:m,history:y})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.ba76b93c.chunk.js.map