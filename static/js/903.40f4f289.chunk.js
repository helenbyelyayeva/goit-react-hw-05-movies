"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[903],{4377:function(A,e,t){t.d(e,{IQ:function(){return p},Jh:function(){return d},TP:function(){return i},wr:function(){return l},z1:function(){return o}});var r=t(5861),n=t(7757),a=t.n(n),c=t(1243),s="https://api.themoviedb.org/3/",u="e07de169e37f03be6b5aa0a3464541c3",l=function(){var A=(0,r.Z)(a().mark((function A(){var e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(u));case 2:return e=A.sent,A.abrupt("return",e.data.results);case 4:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),o=function(){var A=(0,r.Z)(a().mark((function A(e){var t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("".concat(s,"/search/movie?api_key=").concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=A.sent,A.abrupt("return",t.data.results);case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),i=function(){var A=(0,r.Z)(a().mark((function A(e){var t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("".concat(s,"/movie/").concat(e,"$?api_key=").concat(u,"&language=en-US"));case 2:return t=A.sent,A.abrupt("return",t.data);case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),p=function(){var A=(0,r.Z)(a().mark((function A(e){var t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=A.sent,A.abrupt("return",t.data);case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),d=function(){var A=(0,r.Z)(a().mark((function A(e){var t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:return t=A.sent,A.abrupt("return",t.data);case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()},7111:function(A,e,t){t.d(e,{$:function(){return c}});var r="Section_container__vEvWA",n="Section_title__SLHvV",a=t(184),c=function(A){var e=A.title,t=A.children;return(0,a.jsxs)("section",{className:r,children:[(0,a.jsx)("h2",{className:n,children:e}),t]})}},2903:function(A,e,t){t.r(e),t.d(e,{MovieDetails:function(){return m},default:function(){return C}});var r=t(7689),n=t(8617),a="BackLink_btn__qntB3",c=t(1087),s=t(184),u=function(A){var e=A.to;return(0,s.jsxs)(c.rU,{to:e,className:a,children:[(0,s.jsx)(n.jTe,{size:"18"}),"Go back"]})},l=t(7111),o=t(5861),i=t(9439),p=t(7757),d=t.n(p),v=t(2791),h=t(4377),f="Details_details__zhRZh",B="Details_poster__i5Ruy",w="Details_genres__AByoX",Q=t(8471),M=function(){var A=(0,r.UO)().movieId,e=(0,v.useState)(null),t=(0,i.Z)(e,2),n=t[0],a=t[1];return(0,v.useEffect)((function(){var e=function(){var e=(0,o.Z)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.TP)(A);case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[A]),(0,s.jsx)("main",{children:n&&(0,s.jsxs)("div",{className:f,children:[(0,s.jsx)("img",{className:B,src:n.poster_path?"https://image.tmdb.org/t/p/w500"+n.poster_path:Q,alt:n.original_title}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("h1",{children:[n.title," (",n.release_date.slice(0,4),")"]}),(0,s.jsxs)("p",{children:["User score: ",n.popularity]}),(0,s.jsx)("h2",{children:"Overview"}),(0,s.jsx)("p",{children:n.overview}),(0,s.jsx)("h2",{children:"Genres"}),(0,s.jsx)("ul",{className:w,children:n.genres.map((function(A){return(0,s.jsx)("li",{children:A.name},A.id)}))})]})]})})},V="Nav_navigation__8CeBz",g="Nav_link__aEnXo",Z=function(){var A=(0,r.TH)();return(0,s.jsxs)("ul",{className:V,children:[(0,s.jsx)("li",{children:(0,s.jsx)(c.rU,{to:"cast",state:{from:A.state.from,label:A.state.label},className:g,children:"Cast"})}),(0,s.jsx)("li",{children:(0,s.jsx)(c.rU,{to:"reviews",state:{from:A.state.from,label:A.state.label},className:g,children:"Reviews"})})]})},L=t(6673),m=function(){var A,e,t,n,a,c=(0,r.TH)(),o=null!==c&&void 0!==c&&null!==(A=c.state)&&void 0!==A&&A.from?"".concat(null===(e=c.state)||void 0===e||null===(t=e.from)||void 0===t?void 0:t.pathname).concat(null===(n=c.state)||void 0===n||null===(a=n.from)||void 0===a?void 0:a.search):"/";return(0,s.jsxs)("main",{children:[(0,s.jsxs)(l.$,{children:[(0,s.jsx)(u,{to:o}),(0,s.jsx)(M,{})]}),(0,s.jsxs)(v.Suspense,{fallback:(0,s.jsx)(L.a,{}),children:[(0,s.jsx)(l.$,{title:"Additional information",children:(0,s.jsx)(Z,{})}),(0,s.jsx)(r.j3,{})]})]})},C=m},8471:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=903.40f4f289.chunk.js.map