"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{4377:function(n,e,t){t.d(e,{IQ:function(){return l},Jh:function(){return v},TP:function(){return f},wr:function(){return o},z1:function(){return p}});var r=t(5861),a=t(7757),c=t.n(a),u=t(1243),i="https://api.themoviedb.org/3/",s="e07de169e37f03be6b5aa0a3464541c3",o=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/search/movie?api_key=").concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(e,"$?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},2168:function(n,e,t){t.r(e),t.d(e,{Reviews:function(){return l},default:function(){return v}});var r=t(5861),a=t(9439),c=t(7757),u=t.n(c),i=t(2791),s=t(7689),o=t(4377),p={container:"Reviews_container__2j80+",nick:"Reviews_nick__0uHPR"},f=t(184),l=function(){var n=(0,i.useState)([]),e=(0,a.Z)(n,2),t=e[0],c=e[1],l=(0,s.UO)().movieId;return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Jh)(l);case 3:e=n.sent,t=e.results,c(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[l]),(0,f.jsx)("div",{className:p.container,children:0===t.length?(0,f.jsx)("p",{children:"We don't have any reviews for this movie"}):(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{className:p.list,children:t.map((function(n){return(0,f.jsxs)("li",{children:[(0,f.jsx)("p",{className:p.nick,children:n.author}),(0,f.jsx)("p",{children:n.content})]},n.id)}))})})})},v=l}}]);
//# sourceMappingURL=168.2bccb949.chunk.js.map