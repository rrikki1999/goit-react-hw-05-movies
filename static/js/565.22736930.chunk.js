"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[565],{565:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var a=t(861),r=t(439),i=t(757),s=t.n(i),c=t(791),o=t(689),u=t(87),l=t(390),v="MovieDetails_movieDetailsContainer__6LAS+",p="MovieDetails_movieDetails__X14SS",h="MovieDetails_moviePoster__cAj2x",m="MovieDetails_movieInfoContainer__7q4la",d="MovieDetails_movieTitle__AnTmp",f="MovieDetails_movieOverview__EH8g1",_="MovieDetails_movieRelease__3zLXu",x="MovieDetails_movieRating__SVgv8",j="MovieDetails_movieGenres__rf-Ms",g="MovieDetails_genre__ya9dL",N="MovieDetails_title__hyTf8",k="MovieDetails_navigationList__9FxqW",w="MovieDetails_navigationItem__-EFWO",b={navigationLink:"NavigationStyles_navigationLink__wbVyi",active:"NavigationStyles_active__ubb05"},y=t(728),M=t(184),Z=(0,c.lazy)((function(){return t.e(696).then(t.bind(t,696))})),D=(0,c.lazy)((function(){return t.e(489).then(t.bind(t,489))})),I=function(){var e,n,t=(0,o.TH)(),i=(0,c.useRef)(null!==(e=null===(n=t.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"),I=(0,o.UO)().movieId,S=(0,c.useState)({}),z=(0,r.Z)(S,2),A=z[0],L=z[1],T=(0,c.useState)(""),E=(0,r.Z)(T,2),G=E[0],O=E[1],Y=(0,c.useState)(!1),C=(0,r.Z)(Y,2),J=C[0],R=C[1];(0,c.useEffect)((function(){R(!0);var e=function(){var e=(0,a.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.yK)(I);case 3:n=e.sent,L(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),O(e.t0);case 10:return e.prev=10,R(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[I]);var W=A.title,U=A.name,B=A.original_title,Q=A.overview,X=A.poster_path,H=A.release_date,V=A.vote_average,q=A.genres;return(0,M.jsxs)("div",{className:v,children:[(0,M.jsx)(u.OL,{className:function(e){return e.isActive?[b.navigationLink,b.active].join(" "):b.navigationLink},to:i.current,children:"Go back"}),J&&(0,M.jsx)(y.a,{}),G&&(0,M.jsx)("p",{children:"Something went wrong..."}),(0,M.jsxs)("div",{className:p,children:[(0,M.jsx)("img",{className:h,src:X?"https://image.tmdb.org/t/p/w200".concat(X):"https://via.placeholder.com/500x600?text=No+Image+Available",alt:W||U||B}),(0,M.jsxs)("div",{className:m,children:[(0,M.jsx)("h1",{className:d,children:W||U||B}),(0,M.jsxs)("p",{className:_,children:["Release date: ",H]}),(0,M.jsxs)("p",{className:x,children:["Rating: ",V]}),(0,M.jsx)("p",{className:f,children:Q}),(0,M.jsxs)("p",{className:j,children:["Genres:"," ",null===q||void 0===q?void 0:q.map((function(e){return(0,M.jsx)("span",{className:g,children:e.name},e.id)}))]})]})]}),(0,M.jsx)("h3",{className:N,children:"Additional information"}),(0,M.jsx)("nav",{children:(0,M.jsxs)("ul",{className:k,children:[(0,M.jsx)("li",{className:w,children:(0,M.jsx)(u.OL,{className:function(e){return e.isActive?[b.navigationLink,b.active].join(" "):b.navigationLink},to:"/movies/".concat(I,"/cast"),children:"Cast"})}),(0,M.jsx)("li",{className:w,children:(0,M.jsx)(u.OL,{className:function(e){return e.isActive?[b.navigationLink,b.active].join(" "):b.navigationLink},to:"/movies/".concat(I,"/reviews"),children:"Reviews"})})]})}),(0,M.jsx)(c.Suspense,{fallback:(0,M.jsx)(y.a,{}),children:(0,M.jsxs)(o.Z5,{children:[(0,M.jsx)(o.AW,{path:"cast",element:(0,M.jsx)(Z,{})}),(0,M.jsx)(o.AW,{path:"reviews",element:(0,M.jsx)(D,{})})]})})]})}},390:function(e,n,t){t.d(n,{$N:function(){return m},MR:function(){return h},Z$:function(){return l},yK:function(){return p},z1:function(){return v}});var a=t(861),r=t(757),i=t.n(r),s=t(340),c="7307c77377e4ea477963b1148465616b",o="https://api.themoviedb.org/3/",u="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzA3Yzc3Mzc3ZTRlYTQ3Nzk2M2IxMTQ4NDY1NjE2YiIsInN1YiI6IjY1YjQzYWZjMGMwYjM4MDE2M2Y5YzZhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0ET2hOjdtO2t_V1Tb7cCSTEDIHSmXfHbIEXJ5muNOFg",l=function(){var e=(0,a.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",url:"".concat(o,"/trending/movie/day"),params:{language:"en-US",api_key:c},headers:{accept:"application/json",Authorization:"Bearer ".concat(u)}},e.next=3,(0,s.Z)(n);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)(i().mark((function e(n){var t,a,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"".concat(o,"/search/movie"),params:{language:"en-US",api_key:c,page:"1",query:n},headers:{accept:"application/json",Authorization:"Bearer ".concat(u)}},e.next=3,(0,s.Z)(t);case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)(i().mark((function e(n){var t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"".concat(o,"/movie/").concat(n),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer ".concat(u)}},e.next=3,(0,s.Z)(t);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)(i().mark((function e(n){var t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"".concat(o,"/movie/").concat(n,"/credits"),params:{language:"en-US","\u0430pi_key":c},headers:{accept:"application/json",Authorization:"Bearer ".concat(u)}},e.next=3,(0,s.Z)(t);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)(i().mark((function e(n){var t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"".concat(o,"/movie/").concat(n,"/reviews"),params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer ".concat(u)}},e.next=3,(0,s.Z)(t);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=565.22736930.chunk.js.map