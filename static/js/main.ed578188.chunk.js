(this.webpackJsonppagination=this.webpackJsonppagination||[]).push([[0],{42:function(e,n,t){},69:function(e,n,t){},70:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t(0),r=t.n(a),i=t(31),s=t.n(i),o=t(8),j=t(2),d=(t(42),t(17)),l=t.n(d),u=t(32),b=t(12),p=t(33),O=t.n(p),x=t(13),h=t(14);function g(){var e=Object(x.a)(["\n    border:1px solid #d6d6d6;\n    margin-bottom: 1rem;\n    margin-top: 2rem; \n    margin-bottom:2rem;\n    .card-title {\n        background-color:#d6d6d6;\n        padding: 15px 10px; \n    }\n\n    .card-body {\n        padding: 10px;\n        font-size: 1.2rem;\n    }\n"]);return g=function(){return e},e}var f=function(e){var n=e.posts;return e.loading?Object(c.jsx)("h1",{children:"Loading"}):n.map((function(e){return Object(c.jsxs)(m,{children:[Object(c.jsx)("div",{className:"card-title",children:Object(c.jsx)("h2",{children:e.title})}),Object(c.jsx)("div",{className:"card-body",children:e.body})]},e.id)}))},m=h.a.div(g()),v=function(e){for(var n=e.postsPerPage,t=e.totalPages,a=e.paginate,r=e.nextPage,i=e.prevPage,s=[],o=1;o<=Math.ceil(t/n);o++)s.push(o);return Object(c.jsx)("nav",{className:"paginate",children:Object(c.jsxs)("ul",{className:"pagination",children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{onClick:function(){return i()},children:"Prev"})}),s.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{onClick:function(){return a(e)},children:e})},e)})),Object(c.jsx)("li",{children:Object(c.jsx)("a",{onClick:function(){return r()},children:"Next"})})]})})};var P=function(){var e=Object(a.useState)([]),n=Object(b.a)(e,2),t=n[0],r=n[1],i=Object(a.useState)(!1),s=Object(b.a)(i,2),o=s[0],j=s[1],d=Object(a.useState)(1),p=Object(b.a)(d,2),x=p[0],h=p[1],g=Object(a.useState)(10),m=Object(b.a)(g,2),P=m[0];m[1],Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,O.a.get("https://jsonplaceholder.typicode.com/posts");case 3:n=e.sent,r(n.data),j(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var k=x*P,N=k-P,y=t.slice(N,k);return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(f,{posts:y,loading:o}),Object(c.jsx)(v,{postsPerPage:P,totalPages:t.length,paginate:function(e){return h(e)},nextPage:function(){console.log("next page")},prevPage:function(){console.log("prev page")}})]})};function k(){var e=Object(x.a)(["\n\n    padding: 1rem;\n    background-color: #f5f5f5;\n\n    \n"]);return k=function(){return e},e}var N=function(){return Object(c.jsx)(y,{children:Object(c.jsxs)("div",{className:"container nav-items",children:[Object(c.jsx)(o.b,{to:"/",children:"Home"}),Object(c.jsx)(o.b,{to:"/page1",children:"Page 1"}),Object(c.jsx)(o.b,{to:"/page2",children:"page 2"}),Object(c.jsx)(o.b,{to:"/page3",children:"page 3"})]})})},y=h.a.div(k());var S=function(){return Object(c.jsxs)(o.a,{children:[Object(c.jsx)(N,{}),Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{exact:!0,path:"/",component:P}),Object(c.jsx)(j.a,{path:"*",component:function(){return Object(c.jsx)("h1",{className:"container n404",children:"404"})}})]})]})};t(69);s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(S,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.ed578188.chunk.js.map