"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[696,382],{696:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(861),a=r(439),c=r(757),s=r.n(c),u=r(791),o=r(390),i=r(689),p="Cast_castContainer__VS976",h="Cast_castList__Nf+Xj",f="Cast_castItem__drjcb",l="Cast_castImg__3kRfJ",m="Cast_castName__a5eb1",d="Cast_castCharacter__HUyQe",v=r(184),_=function(){var e=(0,i.UO)().movieId,t=(0,u.useState)([]),r=(0,a.Z)(t,2),c=r[0],_=r[1];return(0,u.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.MR)(e);case 3:r=t.sent,_(r.data.cast),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching movie cast:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,v.jsxs)("div",{className:p,children:[(0,v.jsx)("h1",{children:"Movie Cast"}),(0,v.jsx)("ul",{className:h,children:c.map((function(e){var t=e.id,r=e.name,n=e.profile_path,a=e.character;return(0,v.jsxs)("li",{className:f,children:[(0,v.jsx)("img",{className:l,src:n?"https://image.tmdb.org/t/p/w200".concat(n):"https://via.placeholder.com/200x300?text=No+Image+Available",alt:r,width:208,height:300}),(0,v.jsx)("h3",{className:m,children:r}),(0,v.jsxs)("p",{className:d,children:["Role: ",a]})]},t)}))})]})}},390:function(e,t,r){r.d(t,{$N:function(){return m},MR:function(){return l},Z$:function(){return p},yK:function(){return f},z1:function(){return h}});var n=r(861),a=r(757),c=r.n(a),s=r(340),u="7307c77377e4ea477963b1148465616b",o="https://api.themoviedb.org/3/",i="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzA3Yzc3Mzc3ZTRlYTQ3Nzk2M2IxMTQ4NDY1NjE2YiIsInN1YiI6IjY1YjQzYWZjMGMwYjM4MDE2M2Y5YzZhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0ET2hOjdtO2t_V1Tb7cCSTEDIHSmXfHbIEXJ5muNOFg",p=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"".concat(o,"/trending/movie/day"),params:{language:"en-US",api_key:u},headers:{accept:"application/json",Authorization:"Bearer ".concat(i)}},e.next=3,(0,s.Z)(t);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"".concat(o,"/search/movie"),params:{language:"en-US",api_key:u,page:"1",query:t},headers:{accept:"application/json",Authorization:"Bearer ".concat(i)}},e.next=3,(0,s.Z)(r);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"".concat(o,"/movie/").concat(t),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer ".concat(i)}},e.next=3,(0,s.Z)(r);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"".concat(o,"/movie/").concat(t,"/credits"),params:{language:"en-US","\u0430pi_key":u},headers:{accept:"application/json",Authorization:"Bearer ".concat(i)}},e.next=3,(0,s.Z)(r);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"".concat(o,"/movie/").concat(t,"/reviews"),params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer ".concat(i)}},e.next=3,(0,s.Z)(r);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=696.287c3c9b.chunk.js.map