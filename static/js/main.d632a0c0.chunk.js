(this["webpackJsonpob-portal-frontend"]=this["webpackJsonpob-portal-frontend"]||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(24),o=n.n(a),s=n(4),i=n(15),l=n(8),u=n(7),b=n(5),d=n(6),j=n.n(d),f=n(14),x=n(20),m=n.n(x),h=m.a.create({baseURL:"https://proyecto-ofertas-ob.herokuapp.com/api",headers:{Authorization:"Bearer ".concat(localStorage.getItem("user"))}});h.interceptors.request.use((function(e){var t=localStorage.getItem("user");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)}));var p,O,g=function(e){return h.get("/ofertas/".concat(e))},v={"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},y=function(){var e=Object(f.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("https://proyecto-ofertas-ob.herokuapp.com/api/login",t,{headers:v});case 2:(n=e.sent).data.token&&localStorage.setItem("user",n.data.token);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w={register:function(e){m.a.post("https://proyecto-ofertas-ob.herokuapp.com/api/register",e)},login:y,logout:function(){localStorage.removeItem("user")}},N=Object(l.b)("offers/retrieve",Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/ofertas");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),k=Object(l.b)("offers/retrieveById",function(){var e=Object(f.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),L=Object(l.c)({name:"offers",initialState:{offers:[],isLoading:!1,offer:{}},extraReducers:(p={},Object(u.a)(p,N.fulfilled,(function(e,t){return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,offers:t.payload})})),Object(u.a)(p,k.fulfilled,(function(e,t){return console.log("PAYLOAD",t.payload),Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,offer:t.payload})})),Object(u.a)(p,k.pending,(function(e){return Object(b.a)(Object(b.a)({},e),{},{isLoading:!0})})),Object(u.a)(p,N.pending,(function(e){return Object(b.a)(Object(b.a)({},e),{},{isLoading:!0})})),p)}).reducer,C=n(27),S=Object(l.b)("technologies/retrieve",Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/tecnologias");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),I=Object(l.c)({name:"technologies",initialState:[],extraReducers:Object(u.a)({},S.fulfilled,(function(e,t){return[].concat(Object(C.a)(e),[t.payload])}))}).reducer,M=Object(l.c)({name:"filters",initialState:[],reducers:{addFilter:function(e,t){return[].concat(Object(C.a)(e),[t.payload])},removeFilter:function(e,t){return 1===e.length?[]:e.filter((function(e){return e!==t.payload}))},resetFilter:function(){return[]}}}),z=M.reducer,E=M.actions,V=E.addFilter,F=E.removeFilter,R=(E.resetFilter,z),T=Object(l.b)("auth/login",function(){var e=Object(f.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.login(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),A=Object(l.b)("auth/logout",Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.logout();case 1:case"end":return e.stop()}}),e)})))),B=Object(l.b)("auth/register",function(){var e=Object(f.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.register(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),P=Object(l.c)({name:"auth",initialState:{isLoggedIn:!1},reducers:{checkLogged:function(e){localStorage.getItem("user")?e.isLoggedIn=!0:e.isLoggedIn=!1}},extraReducers:(O={},Object(u.a)(O,T.fulfilled,(function(e){e.isLoggedIn=!0})),Object(u.a)(O,A.fulfilled,(function(e){e.isLoggedIn=!1})),Object(u.a)(O,B.fulfilled,(function(e){e.isLoggedIn=!1})),O)}),$=P.reducer,D=P.actions.checkLogged,U=Object(i.b)({offers:L,auth:$,technologies:I,filters:R}),H=Object(l.a)({reducer:U,devTools:!0}),J=(n(70),n(71),n(31)),Y=n(18),q=n(2),K=n(17),W=n(0),G=function(e){var t=e.image;return Object(W.jsx)("img",{className:"w-16 border rounded h-16 self-center hidden lg:block",src:t,alt:"companyPhoto"})},Q=function(e){var t=e.company;return Object(W.jsx)("div",{className:"uppercase tracking-wide text-sm md:text-sm text-indigo-500 font-semibold",children:t})},X=function(e){var t=e.position;return Object(W.jsx)("span",{className:"block mt-1 leading-tight text-medium font-medium text-black hover:underline",children:t})},Z=function(e){var t=e.location,n=e.minSalary,r=e.maxSalary,c=n.toString().slice(0,-3),a=r.toString().slice(0,-3);return Object(W.jsxs)("div",{className:"space-x-1",children:[Object(W.jsx)("span",{className:"items-center inline-block text-sm justify-center font-semibold px-2 py-1 leading-none text-black bg-gray-300 uppercase rounded",children:t}),Object(W.jsxs)("span",{className:"items-center inline-block text-sm justify-center font-semibold px-2 py-1 leading-none text-black bg-gray-300 uppercase rounded",children:["\ud83d\udcb0 $",c,"k - $",a,"k"]})]})},_=function(e){var t=e.technologies;return Object(W.jsx)("div",{className:"w-56 flex-wrap self-center hidden md:flex items-center",children:t.map((function(e,t){return Object(W.jsx)("span",{className:"px-2 mx-1 my-1 text-sm text-center font-medium text-black uppercase bg-transparent rounded-md  border-black border-2",children:e.nombre},t)}))})},ee=function(e){var t=e.date,n=new Date,r=new Date(t),c=n.getTime()-r.getTime(),a=Math.trunc(c/864e5);return Object(W.jsx)("div",{className:"self-center px-2 hidden md:block",children:a<1?"".concat(24*a,"h"):"".concat(a,"d")})},te=function(){return Object(W.jsx)("div",{className:"self-center hidden lg:block pl-2 pr-1",children:Object(W.jsx)("button",{className:"bg-red-500 text-white font-bold py-2 px-12 rounded",children:"Postular"})})},ne=function(e){var t=e.offer,n=Object(q.g)(),r=t||{},c=r.urlImagen,a=r.id,o=r.nombre,s=r.empresa,i=r.salarioMaximo,l=r.salarioMinimo,u=r.tecnologias,b=r.fechaPublicacion,d=r.localidad;return Object(W.jsx)("div",{className:"select-none mx-auto p-5",children:Object(W.jsxs)("div",{onClick:function(){return n.push("/ofertas/".concat(a))},className:"max-w-lg appear mx-auto hover:bg-gray-100 md:max-w-5xl cursor-pointer flex bg justify-between rounded-xl border overflow-hidden p-5",children:[Object(W.jsx)(G,{image:c.length>0?c:"https://remoteok.io/assets/img/jobs/376af38d16bf762263aef1f70ed885ef1633445669.png?1633445670"}),Object(W.jsxs)("div",{className:"space-y-1 lg:w-64",children:[Object(W.jsx)(Q,{company:s}),Object(W.jsx)(X,{position:o}),Object(W.jsx)(Z,{location:d,minSalary:l,maxSalary:i})]}),Object(W.jsx)(_,{technologies:u}),Object(W.jsx)(ee,{date:b}),Object(W.jsx)(te,{})]})})},re=n(26),ce=n.n(re),ae=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.technologies[0]}));Object(r.useEffect)((function(){e(S())}),[]);return Object(W.jsxs)("div",{children:[Object(W.jsx)("div",{className:"text-center pt-5 pb-2",children:Object(W.jsx)("h1",{className:"text-3xl text-white font-bold",children:"Remote | OK"})}),Object(W.jsxs)("div",{className:"mx-auto w-min",children:[Object(W.jsx)("input",{onChange:function(n){return function(n){for(var r=0;r<t.length;r++)n.target.value===t[r].nombre&&e(V(n.target.value))}(n)},className:"p-3 outline rounded-full",list:"options"}),Object(W.jsx)("datalist",{name:"options",id:"options",children:t&&t.map((function(e){return Object(W.jsx)("option",{value:e.nombre},e.id)}))})]})]})},oe=function(){var e=Object(s.b)();return Object(W.jsx)("button",{onClick:function(){e(A())},className:"bg-blue-500 ml-2 mt-3 hover:bg-blue-700 text-white py-2 px-4 rounded",children:"Logout"})},se=function(){return Object(W.jsxs)("header",{className:"bg-landscape pb-10 mb-5",children:[Object(W.jsx)(oe,{}),Object(W.jsx)(ae,{})]})},ie=function(){var e=Object(s.c)((function(e){return e.offers.offers})),t=Object(s.c)((function(e){return e.offers.isLoading})),n=Object(s.c)((function(e){return e.filters})),c=Object(r.useState)([]),a=Object(K.a)(c,2),o=a[0],i=a[1],l=Object(s.b)();Object(r.useEffect)((function(){l(N()),i(e)}),[]),Object(r.useEffect)((function(){i(e)}),[e]),Object(r.useEffect)((function(){var e=u();i(e)}),[n]);var u=function(){return e&&0!==n.length?e.filter((function(e){for(var t=0,r=0;r<n.length;r++)for(var c=0;c<e.tecnologias.length;c++)e.tecnologias[c].nombre===n[r]&&(t+=1);return t===n.length})):e};return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(se,{}),Object(W.jsx)("div",{children:t||Object(W.jsxs)("div",{children:[Object(W.jsx)("span",{className:"text-xl ml-20 md:ml-52 mr-4",children:"Incluir:"}),n&&n.filter((function(e,t,n){return n.indexOf(e)===t})).map((function(e,t){return Object(W.jsxs)("span",{onClick:function(){return function(e){l(F(e))}(e)},className:"inline-flex items-center cursor-pointer justify-center px-2 py-1 mr-2 text-sm font-bold leading-none text-red-100 bg-red-600 rounded-full",children:[e," \u2715"]},t)}))]})}),t?Object(W.jsx)(ce.a,{className:"spinner",type:"spin",color:"blue",height:50,width:50}):o&&o.map((function(e){return Object(W.jsx)(ne,{offer:e},e.id)}))]})};function le(){return Object(W.jsx)(ie,{})}function ue(){return Object(W.jsx)("div",{class:"bg-gray-100",children:Object(W.jsx)("div",{class:"container mx-auto px-4",children:Object(W.jsx)("section",{class:"py-8 px-4 text-center",children:Object(W.jsxs)("div",{class:"max-w-auto mx-auto",children:[Object(W.jsx)("div",{class:"md:max-w-lg mx-auto",children:Object(W.jsx)("svg",{class:"fill-current text-gray-300",viewBox:"0 0 445 202",xmlns:"http://www.w3.org/2000/svg",children:Object(W.jsx)("path",{d:"M137.587 154.953h-22.102V197h-37.6v-42.047H.53v-33.557L72.36 2.803h43.125V124.9h22.102v30.053zM77.886 124.9V40.537L28.966 124.9h48.92zm116.707-23.718c0 22.46 1.842 39.643 5.525 51.547 3.684 11.905 11.23 17.857 22.64 17.857 11.411 0 18.89-5.952 22.44-17.857 3.548-11.904 5.323-29.086 5.323-51.547 0-23.54-1.775-40.97-5.324-52.29s-11.028-16.98-22.438-16.98c-11.41 0-18.957 5.66-22.64 16.98-3.684 11.32-5.526 28.75-5.526 52.29zM222.759.242c24.887 0 42.339 8.76 52.356 26.28 10.018 17.52 15.027 42.406 15.027 74.66s-5.01 57.095-15.027 74.525c-10.017 17.43-27.47 26.145-52.356 26.145-24.887 0-42.339-8.715-52.357-26.145-10.017-17.43-15.026-42.271-15.026-74.525 0-32.254 5.009-57.14 15.026-74.66C180.42 9.001 197.872.241 222.76.241zm221.824 154.711h-22.102V197h-37.6v-42.047h-77.355v-33.557l71.83-118.593h43.125V124.9h22.102v30.053zM384.882 124.9V40.537l-48.92 84.363h48.92z","fill-rule":"nonzero"})})}),Object(W.jsx)("h2",{class:"mt-8 uppercase text-xl lg:text-5xl font-black",children:"We are sorry, Page not found!"}),Object(W.jsx)("p",{class:"mt-6 uppercase text-sm lg:text-base text-gray-900",children:"The page you are looking for might have been removed had its name changed or is temporarily unavailable."}),Object(W.jsx)("a",{href:"/ofertas",class:"mt-6 bg-blue-500 hover:bg-blue-700 text-white font-light py-4 px-6 rounded-full inline-block uppercase shadow-md",children:"Back To Homepage"})]})})})})}var be=function(e){var t=e.id,n=Object(q.g)(),c=Object(s.c)((function(e){return e.offers.offer})),a=Object(s.c)((function(e){return e.offers.isLoading})),o=Object(s.b)();console.log(c),Object(r.useEffect)((function(){o(k(t))}),[]);return Object(W.jsxs)("div",{children:[Object(W.jsx)("button",{onClick:function(){n.push("/ofertas"),n.go(0)},class:"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",children:"Volver"}),a?Object(W.jsx)(ce.a,{className:"spinner",type:"spin",color:"blue",height:50,width:50}):Object(W.jsxs)("div",{className:"mx-auto appear mt-10 details py-7 px-6 shadow-2xl border rounded-sm md:w-11/12 w-full space-y-8",children:[Object(W.jsxs)("h1",{className:"mb-5 title text-2xl font-bold",children:[c.empresa," est\xe1 buscando un ",c.nombre," "]}),Object(W.jsx)("h3",{className:"text-xl title font-bold",children:"Empresa:"}),c.empresa,Object(W.jsxs)("div",{children:[Object(W.jsx)("h3",{className:"text-xl title font-bold",children:"Tecnolog\xedas:"}),c.tecnologias&&c.tecnologias.map((function(e){return Object(W.jsx)("li",{children:e.nombre},e.id)}))]}),Object(W.jsx)("h3",{className:"text-xl title my-2 font-bold",children:"A\xf1os de experiencia:"}),c.anyosExperiencia,Object(W.jsx)("h3",{className:"text-xl title font-bold",children:"Tipo de contrato"}),c.tipoContrato,Object(W.jsx)("h3",{className:"text-xl title font-bold",children:"Modalidad:"}),c.modalidad,Object(W.jsx)("h3",{className:"text-xl title font-bold",children:"Localidad: "}),c.localidad,Object(W.jsx)("h3",{className:"text-xl title font-bold",children:"Vacantes: "}),c.numeroVacantes,Object(W.jsx)("h3",{className:"text-xl title font-bold",children:"Rango Salarial: "}),"$",c.salarioMinimo," - $",c.salarioMaximo]})]})},de=function(e){var t=e.id;return Object(W.jsx)(be,{id:t})},je=function(){var e=Object(q.g)(),t=Object(s.b)(),n=Object(r.useState)({username:"",password:""}),c=Object(K.a)(n,2),a=c[0],o=c[1],i=function(e){o(Object(b.a)(Object(b.a)({},a),{},Object(u.a)({},e.target.name,e.target.value)))};return Object(W.jsx)("div",{className:"bg-grey-lighter bg-landscape min-h-screen flex flex-col",children:Object(W.jsxs)("div",{className:"container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2",children:[Object(W.jsxs)("div",{className:"bg-white px-6 py-8 rounded shadow-md text-black w-full",children:[Object(W.jsx)("h1",{className:"mb-8 text-3xl text-center",children:"Iniciar sesi\xf3n"}),Object(W.jsx)("input",{onChange:function(e){return i(e)},type:"text",className:"block border border-grey-light w-full p-3 rounded mb-4",name:"username",placeholder:"Usuario"}),Object(W.jsx)("input",{onChange:function(e){return i(e)},type:"password",className:"block border border-grey-light w-full p-3 rounded mb-4",name:"password",placeholder:"Contrase\xf1a"}),Object(W.jsx)("button",{type:"submit",onClick:function(){t(T(a)),t(D())},className:"w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1",children:"Login"})]}),Object(W.jsxs)("div",{className:"text-white text-lg mt-6",children:["No tienes una cuenta?\xa0",Object(W.jsx)("a",{className:"no-underline cursor-pointer border-b border-blue font-bold",onClick:function(){return e.push("/register")},children:"Reg\xedstrate"}),"."]})]})})},fe=function(){return Object(W.jsx)(je,{})},xe=function(){var e=Object(q.g)(),t=Object(s.b)(),n=Object(r.useState)({username:"",password:"",email:""}),c=Object(K.a)(n,2),a=c[0],o=c[1],i=function(e){o(Object(b.a)(Object(b.a)({},a),{},Object(u.a)({},e.target.name,e.target.value)))};return Object(W.jsx)(W.Fragment,{children:Object(W.jsx)("div",{className:"bg-grey-lighter bg-landscape min-h-screen flex flex-col",children:Object(W.jsxs)("div",{className:"container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2",children:[Object(W.jsxs)("div",{className:"bg-white px-6 py-8 rounded shadow-md text-black w-full",children:[Object(W.jsx)("h1",{className:"mb-8 text-3xl text-center",children:"Registrarse"}),Object(W.jsx)("input",{onChange:function(e){return i(e)},type:"text",className:"block border border-grey-light w-full p-3 rounded mb-4",name:"username",placeholder:"Usuario"}),Object(W.jsx)("input",{onChange:function(e){return i(e)},type:"text",className:"block border border-grey-500 w-full p-3 rounded mb-4",name:"email",placeholder:"Correo electr\xf3nico"}),Object(W.jsx)("input",{onChange:function(e){return i(e)},type:"password",className:"block border border-grey-light w-full p-3 rounded mb-4",name:"password",placeholder:"Contrase\xf1a"}),Object(W.jsx)("button",{onClick:function(){t(B(a)),e.push("/login")},type:"submit",className:"w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1",children:"Crear cuenta"})]}),Object(W.jsxs)("div",{className:"text-white text-lg mt-6",children:["Ya tienes una cuenta?\xa0",Object(W.jsx)("a",{className:"no-underline cursor-pointer border-b border-blue font-bold text-blue",onClick:function(){return e.push("/login")},children:"Inicia sesi\xf3n"}),"."]})]})})})},me=function(){return Object(W.jsx)(xe,{})},he=["auth","component"],pe=["auth","component"];var Oe=function(e){var t=e.auth,n=e.component,r=Object(J.a)(e,he);return Object(W.jsx)(q.b,Object(b.a)(Object(b.a)({},r),{},{render:function(){return t?Object(W.jsx)(n,{}):Object(W.jsx)(q.a,{to:"/login"})}}))},ge=function(e){var t=e.auth,n=e.component,r=Object(J.a)(e,pe);return Object(W.jsx)(q.b,Object(b.a)(Object(b.a)({},r),{},{render:function(){return t?Object(W.jsx)(q.a,{to:"/ofertas"}):Object(W.jsx)(n,{})}}))},ve=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth.isLoggedIn}));return Object(r.useEffect)((function(){e(D())}),[]),console.log(t),Object(W.jsx)(Y.a,{children:Object(W.jsxs)(q.d,{children:[Object(W.jsx)(Oe,{exact:!0,path:"/",component:le,auth:t}),Object(W.jsx)(ge,{path:"/login",component:fe,auth:t}),Object(W.jsx)(ge,{path:"/register",component:me,auth:t}),Object(W.jsx)(q.b,{auth:t,path:"/ofertas/:id",render:function(e){var t=e.match;return Object(W.jsx)(de,{id:t.params.id})}}),Object(W.jsx)(Oe,{path:"/ofertas",component:le,auth:t}),Object(W.jsx)(q.b,{component:ue})]})})};n(77);var ye=function(){return Object(W.jsx)(ve,{})};o.a.render(Object(W.jsx)(c.a.StrictMode,{children:Object(W.jsx)(s.a,{store:H,children:Object(W.jsx)(ye,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.d632a0c0.chunk.js.map