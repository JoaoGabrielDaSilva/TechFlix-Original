(this.webpackJsonptechflix=this.webpackJsonptechflix||[]).push([[0],{76:function(e,n,t){"use strict";t.r(n);var r,a=t(0),c=t.n(a),i=t(41),o=t.n(i),s=t(15),u=t(9),d=t(16),b=t(47),p=t(6),l=t(4),g=t.n(l),f=t(8),h=t(2),j=t(3),v=j.b.div(r||(r=Object(h.a)(["\n    width: 100%;\n\n    background: #2d2b2b;\n    padding-top: 7%;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    align-items: center;\n    justify-items: center;\n"]))),x=t(45),O=t.n(x).a.create({baseURL:"https://api.themoviedb.org/3/"});O.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat("dfca496b57994b17cd605b1ed8862140"),e}));var m,w,k,y,_,C,A,S,P,E,I,M,D,z,L,B,T,U,V,q,G,J,R,W,F,H={getTrending:function(){return Object(f.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("trending/movie/day?api_key=dfca496b57994b17cd605b1ed8862140");case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))()},getMovies:function(){return Object(f.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("movie/popular?api_key=dfca496b57994b17cd605b1ed8862140");case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))()},getGenres:function(){return Object(f.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("genre/movie/list?api_key=dfca496b57994b17cd605b1ed8862140");case 2:return n=e.sent,e.abrupt("return",n.data.genres);case 4:case"end":return e.stop()}}),e)})))()},search:function(){var e=arguments;return Object(f.a)(g.a.mark((function n(){var t,r;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.length>0&&void 0!==e[0]?e[0]:"",n.next=3,O.get("search/movie?api_key=dfca496b57994b17cd605b1ed8862140&query=".concat(t));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})))()}},K=t(79),N=t(80),Q=j.b.div(m||(m=Object(h.a)(["\n    width: 210px;\n    height: 300px;\n\n    margin: 30px;\n\n    box-shadow: 0px 0px 11px 0px #232020;\n    position: relative;\n\n    &:hover {\n        transform: scale(1.05);\n        cursor: pointer;\n        transition: 100ms ease-in-out;\n    }\n"]))),X=j.b.img(w||(w=Object(h.a)(["\n    width: 100%;\n    height: 60%;\n    \n"]))),Y=j.b.div(k||(k=Object(h.a)(["\n    height: 40%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n"]))),Z=j.b.div(y||(y=Object(h.a)(["\n    width: 35px;\n    height: 35px;\n\n    margin: 5px;\n    color: #222;\n    background: ",";\n\n    border: 1px solid #fff;\n    border-radius: 50%;\n\n    position: absolute;\n    top: 0;\n    right: 0;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"])),(function(e){return e.color})),$=j.b.span(_||(_=Object(h.a)(["\n    font-size: 1em;\n    font-weight: bold;\n    text-align: center;\n    color: #fff;\n"]))),ee=j.b.span(C||(C=Object(h.a)(["\n    text-align: center;\n    color: #fff;\n"]))),ne=t(1),te=function(e){var n=e.data,t=Object(p.g)();return Object(ne.jsxs)(Q,{onClick:function(){t.push("movie-details",n)},children:[Object(ne.jsx)(X,{src:n?"https://image.tmdb.org/t/p/w500".concat(n.backdropPath):""}),Object(ne.jsx)(Z,{color:n.voteAverageColor,children:n.voteAverage}),Object(ne.jsxs)(Y,{children:[Object(ne.jsx)($,{children:n.title}),Object(ne.jsx)(ee,{children:Object(K.a)(new Date(n.releaseDate),"dd/MM/yyyy",{locale:N.a})})]})]})},re=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],c=function(){var e=Object(f.a)(g.a.mark((function e(){var n,t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.getMovies();case 3:n=e.sent,t=n.map((function(e){var n;switch(!0){case e.vote_average>6:n="green";break;case e.vote_average<6&&e.vote_average>3.5:n="yellow";break;case e.vote_average<3.5:n="red"}return{id:e.id,genreIds:e.genre_ids,overview:e.overview,posterPath:e.poster_path,title:e.original_title,releaseDate:e.release_date,voteAverageColor:n,voteAverage:e.vote_average,backdropPath:e.backdrop_path}})),r(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){c()}),[]),Object(ne.jsx)(v,{children:t.length>0&&t.map((function(e){return Object(ne.jsx)(te,{data:e},e.id)}))})},ae=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],c=function(){var e=Object(f.a)(g.a.mark((function e(){var n,t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.getTrending();case 3:n=e.sent,t=n.map((function(e){var n;switch(!0){case e.vote_average>6:n="green";break;case e.vote_average<6&&e.vote_average>3.5:n="yellow";break;case e.vote_average<3.5:n="red"}return{id:e.id,genreIds:e.genre_ids,overview:e.overview,posterPath:e.poster_path,title:e.original_title,releaseDate:e.release_date,voteAverageColor:n,voteAverage:e.vote_average,backdropPath:e.backdrop_path}})),r(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){c()}),[]),Object(ne.jsx)(v,{children:t.length>0&&t.map((function(e){return Object(ne.jsx)(te,{data:e},e.id)}))})},ce=t(46),ie=j.b.div(A||(A=Object(h.a)(["\n    width: 100%;\n    height: 100%;\n\n    background: #2d2b2b;\n\n    overflow: auto;\n\n    padding: 10% 30px 50px 50px;\n\n    display: grid;\n    grid-template-rows: 1fr auto;\n    grid-template-areas:\n        'image info'\n        'genre info';\n\n\n    position: relative;\n\n    @media (max-height: 750px) {\n        padding: 200px 30px 50px 50px;\n    }\n\n"]))),oe=j.b.div(S||(S=Object(h.a)(["\n    width: 100%;\n    height: 85%;\n    min-height: 500px ;\n\n    box-shadow: 0px 0px 11px 0px #232020;\n\n    grid-area: image;\n\n    align-self: center;\n\n    position: relative;\n"]))),se=j.b.img(P||(P=Object(h.a)(["\n    width: 100%;\n    height: 100%;\n"]))),ue=j.b.div(E||(E=Object(h.a)(["\n    height: 100%;\n\n    grid-area: info;\n\n    padding: 10px 30px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    align-self: center;\n\n"]))),de=j.b.span(I||(I=Object(h.a)(["\n    font-size: 1em;\n    font-weight: bold;\n\n    margin-bottom: 50px;\n    color: #fff;\n"]))),be=j.b.p(M||(M=Object(h.a)(["\n    text-align: justify;\n    color: #fff;\n"]))),pe=j.b.div(D||(D=Object(h.a)(["\n    width: 100%;\n    height: 50%;\n\n    display: flex;\n\n    grid-area: genre;\n    align-self: center;\n\n    \n"]))),le=j.b.span(z||(z=Object(h.a)(['\n    color: #fff;\n\n    & + span::before {\n        content: " | ";\n        margin: 0 10px;\n    }\n']))),ge=j.b.div(L||(L=Object(h.a)(["\n    width: 35px;\n    height: 35px;\n\n    margin: 5px;\n    color: #222;\n    background: ",";\n\n    border: 1px solid #fff;\n    border-radius: 50%;\n\n    position: absolute;\n    top: 0;\n    right: 0;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"])),(function(e){return e.color})),fe=function(e){var n=e.history.location.state,t=Object(a.useState)([]),r=Object(u.a)(t,2),c=r[0],i=r[1],o=function(){var e=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.getGenres();case 3:t=e.sent,n.genreIds.forEach((function(e){return t.forEach((function(n){n.id===e&&i([].concat(Object(ce.a)(c),[n.name]))}))})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){o()}),[]),Object(ne.jsxs)(ie,{children:[Object(ne.jsxs)(oe,{children:[Object(ne.jsx)(se,{src:"https://image.tmdb.org/t/p/w500".concat(n.posterPath)}),Object(ne.jsx)(ge,{color:n.voteAverageColor,children:n.voteAverage})]}),Object(ne.jsxs)(ue,{children:[Object(ne.jsx)(de,{children:n.title}),Object(ne.jsx)(be,{children:n.overview})]}),Object(ne.jsx)(pe,{children:c.map((function(e){return Object(ne.jsx)(le,{children:e},e)}))})]})},he=Object(a.createContext)({}),je=function(e){var n=e.children,t=Object(a.useState)(""),r=Object(u.a)(t,2),c=r[0],i=r[1],o=Object(p.g)(),s=function(){var e=Object(f.a)(g.a.mark((function e(){var n,t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.search(c);case 3:return n=e.sent,t=n.map((function(e){var n;switch(!0){case e.vote_average>6:n="green";break;case e.vote_average<6&&e.vote_average>3.5:n="yellow";break;case e.vote_average<3.5:n="red"}return{id:e.id,genreIds:e.genre_ids,overview:e.overview,posterPath:e.poster_path,title:e.original_title,releaseDate:e.release_date,voteAverageColor:n,voteAverage:e.vote_average,backdropPath:e.backdrop_path}})),e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(ne.jsx)(he.Provider,{value:{inputValue:c,handleChange:function(e){return i(e.target.value),0===e.target.value.length?o.push("/"):o.push("movie-search")},getMovies:s},children:n})},ve=function(){return Object(a.useContext)(he)},xe=function(){var e=ve(),n=e.getMovies,t=e.inputValue,r=Object(a.useState)([]),c=Object(u.a)(r,2),i=c[0],o=c[1],s=function(){var e=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s()}),[t]),Object(ne.jsx)(v,{children:i.length>0&&i.map((function(e){return Object(ne.jsx)(te,{data:e},e.id)}))})},Oe=t(24),me=j.b.div(B||(B=Object(h.a)(["\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background: rgb(34,34,34);\n    background: linear-gradient(117deg, rgba(34,34,34,1) 0%, rgba(121,9,9,1) 100%, rgba(0,212,255,1) 100%);\n\n"]))),we=j.b.div(T||(T=Object(h.a)(["\n    width: 600px;\n    height: 600px;\n    background: #fff;\n\n    padding: 20px;\n\n    border-radius: 10px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-end;\n"]))),ke=j.b.img(U||(U=Object(h.a)(["\n    width: 100%;\n    height: 100px;\n"]))),ye=j.b.input(V||(V=Object(h.a)(["\n    height: 50px;\n    width: 100%;\n\n    padding: 5px;\n\n    border:1px solid #222;\n    border-radius: 10px;\n\n\n"]))),_e=j.b.button(q||(q=Object(h.a)(["\n    width: 50%;\n    height: 50px;\n\n    background: rgba(121,9,9,1);\n    color: #fff;\n    outline: 0;\n    border: 0;\n    border-radius: 10px;\n\n    &:focus {\n        background: #fff;\n        background:rgba(121,9,9,1);\n    }\n\n    cursor: pointer;\n"]))),Ce=function(){var e=Object(p.g)(),n=Object(a.useState)({email:"",password:""}),t=Object(u.a)(n,2),r=t[0],c=t[1],i=function(e){var n=e.target.value;c(Object(d.a)(Object(d.a)({},r),{},Object(Oe.a)({},e.target.name,n)))};return Object(ne.jsx)(me,{children:Object(ne.jsxs)(we,{children:[Object(ne.jsx)(ke,{src:"https://i.imgur.com/7WULlyC.png"}),Object(ne.jsx)(ye,{name:"email",type:"text",placeholder:"Dgite sua emaaial",onChange:i,value:r.email}),Object(ne.jsx)(ye,{name:"password",type:"password",placeholder:"Digite seu senha",onChange:i,value:r.password}),Object(ne.jsx)(_e,{onClick:function(){"user@gmail.com"===r.email&&"12345"===r.password&&(localStorage.setItem("signed","true"),e.push("/"))},children:"Login"})]})})},Ae=function(e){var n=e.component,t=Object(b.a)(e,["component"]),r="true"===localStorage.getItem("signed");return Object(ne.jsx)(p.b,Object(d.a)(Object(d.a)({},t),{},{render:function(e){return r?Object(ne.jsx)(n,Object(d.a)({},e)):Object(ne.jsx)(p.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},Se=function(){return Object(ne.jsxs)(p.d,{children:[Object(ne.jsx)(Ae,{exact:!0,path:"/trending",component:ae}),Object(ne.jsx)(Ae,{exact:!0,path:"/movies",component:re}),Object(ne.jsx)(Ae,{exact:!0,path:"/movie-details",component:fe}),Object(ne.jsx)(Ae,{exact:!0,path:"/movie-search",component:xe}),Object(ne.jsx)(p.b,{exact:!0,path:"/login",component:Ce}),Object(ne.jsx)(p.a,{from:"/",to:"trending"})]})},Pe=j.b.div(G||(G=Object(h.a)(["\n    width: 100%;\n    height: 10%;\n    min-height: 85px;\n\n    padding: 0 10px;\n    background: #222;\n    color: #fff;\n\n    display: grid;\n    grid-template-columns: 9fr 5fr 1fr;    \n    grid-gap: 10px;\n    align-items: center;\n\n    position: fixed;\n    overflow: hidden;\n    z-index: 1;\n  \n  img {\n      cursor: pointer;\n      width: 190px;\n  }\n"]))),Ee=j.b.input(J||(J=Object(h.a)(["\n    width: 200px;\n    height: 50%;\n\n    padding: 10px;\n\n    border: 1px solid #fff;\n    border-radius: 5px;\n\n    color: #fff;\n"]))),Ie=j.b.ul(R||(R=Object(h.a)(["\n    height: 100%;\n    width: 100%;\n\n    list-style: none;\n\n    display: flex;\n    justify-content: space-around;\n    \n"]))),Me=j.b.li(W||(W=Object(h.a)(["\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &:hover {\n        background: #444444;\n        cursor: pointer;\n    }\n"]))),De=function(){var e=Object(p.g)(),n=ve(),t=n.handleChange,r=n.inputValue,a=function(n){e.push(n)};return Object(ne.jsxs)(Pe,{children:[Object(ne.jsx)("img",{src:"https://i.imgur.com/7WULlyC.png",alt:"Logo",onClick:function(){return a("/")}}),Object(ne.jsxs)(Ie,{children:[Object(ne.jsx)(Me,{onClick:function(){return a("/trending")},children:"Trending"}),Object(ne.jsx)(Me,{onClick:function(){return a("/movies")},children:"Movie"})]}),Object(ne.jsx)(Ee,{placeholder:"Buscar Filmes",onChange:t,value:r})]})},ze=Object(j.a)(F||(F=Object(h.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        font-family: 'Roboto', sans-serif;\n    }\n\n    input {\n        border: 0;\n        background: 0;\n        outline: 0;\n    }\n\n    html, body, #root {\n        height: 100%;\n        background: #2d2b2b;\n    }\n"])));var Le=function(){var e=Object(a.useState)(!1),n=Object(u.a)(e,2),t=n[0],r=n[1];return Object(a.useEffect)((function(){var e="true"===localStorage.getItem("signed");r(e)}),[t]),Object(ne.jsxs)(je,{children:[t&&Object(ne.jsx)(De,{}),Object(ne.jsx)(Se,{}),Object(ne.jsx)(ze,{})]})};o.a.render(Object(ne.jsx)(c.a.StrictMode,{children:Object(ne.jsx)(s.a,{children:Object(ne.jsx)(Le,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.7dea8809.chunk.js.map