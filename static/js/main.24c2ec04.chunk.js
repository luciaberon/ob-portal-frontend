(this["webpackJsonpob-portal-frontend"]=this["webpackJsonpob-portal-frontend"]||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(25),o=n.n(a),s=n(4),i=n(15),l=n(6),u=n(7),b=n(18),d=n(5),j=n.n(d),x=n(13),f=n(22),m=n.n(f),h=(n(39),m.a.create({baseURL:"https://proyecto-ofertas-ob.herokuapp.com/api",headers:{Authorization:"Bearer "+localStorage.getItem("user"),accept:"*/*"}}));h.interceptors.request.use((function(e){return console.log("TOKEN",localStorage.getItem("user")),console.log("Starting Request",JSON.stringify(e,null,2)),e})),h.interceptors.response.use((function(e){return console.log("Response:",JSON.stringify(e,null,2)),e}));var p,g,O=function(e){return h.get("/ofertas/".concat(e))},v={"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},y=function(e){m.a.post("https://proyecto-ofertas-ob.herokuapp.com/api/register",e)},w=function(e){m.a.post("https://proyecto-ofertas-ob.herokuapp.com/api/login",e,{headers:v}).then((function(e){e.data.token&&(console.log("token login",e.data.token),localStorage.setItem("user",e.data.token))})).catch((function(e){console.log(e)}))},k=function(){localStorage.removeItem("user")},N=Object(l.b)("offers/retrieve",Object(x.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/ofertas");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),S=Object(l.b)("offers/retrieveById",function(){var e=Object(x.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),C=Object(l.c)({name:"offers",initialState:[],extraReducers:(p={},Object(u.a)(p,N.fulfilled,(function(e,t){return[].concat(Object(b.a)(e),[t.payload])})),Object(u.a)(p,S.fulfilled,(function(e,t){return[t.payload]})),p)}).reducer,I=Object(l.b)("technologies/retrieve",Object(x.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/tecnologias");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),L=Object(l.c)({name:"technologies",initialState:[],extraReducers:Object(u.a)({},I.fulfilled,(function(e,t){return[].concat(Object(b.a)(e),[t.payload])}))}).reducer,M=Object(l.c)({name:"filters",initialState:[],reducers:{addFilter:function(e,t){return[].concat(Object(b.a)(e),[t.payload])},removeFilter:function(e,t){return 1===e.length?[]:e.filter((function(e){return e!==t.payload}))},resetFilter:function(){return[]}}}),E=M.reducer,R=M.actions,T=R.addFilter,V=R.removeFilter,z=(R.resetFilter,E),F=Object(l.b)("auth/login",function(){var e=Object(x.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),A=Object(l.b)("auth/logout",Object(x.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k();case 1:case"end":return e.stop()}}),e)})))),B=Object(l.b)("auth/register",function(){var e=Object(x.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),J=Object(l.c)({name:"auth",initialState:{isLoggedIn:!1},reducers:{checkLogged:function(e){localStorage.getItem("user")?e.isLoggedIn=!0:e.isLoggedIn=!1}},extraReducers:(g={},Object(u.a)(g,F.fulfilled,(function(e){e.isLoggedIn=!0})),Object(u.a)(g,A.fulfilled,(function(e){e.isLoggedIn=!1})),Object(u.a)(g,B.fulfilled,(function(e){e.isLoggedIn=!1})),g)}),P=J.reducer,U=J.actions.checkLogged,$=Object(i.b)({offers:C,auth:P,technologies:L,filters:z}),H=Object(l.a)({reducer:$,devTools:!0}),q=(n(70),n(71),n(14)),D=n(30),K=n(19),W=n(2),Y=n(16),G=n(0),Q=function(e){var t=e.image;return Object(G.jsx)("img",{className:"w-16 border rounded h-16 self-center hidden lg:block",src:t,alt:"companyPhoto"})},X=function(e){var t=e.company;return Object(G.jsx)("div",{className:"uppercase tracking-wide text-sm md:text-sm text-indigo-500 font-semibold",children:t})},Z=function(e){var t=e.position;return Object(G.jsx)("span",{className:"block mt-1 leading-tight text-medium font-medium text-black hover:underline",children:t})},_=function(e){var t=e.location,n=e.minSalary,r=e.maxSalary,c=n.toString().slice(0,-3),a=r.toString().slice(0,-3);return Object(G.jsxs)("div",{className:"space-x-1",children:[Object(G.jsx)("span",{className:"items-center inline-block text-sm justify-center font-semibold px-2 py-1 leading-none text-black bg-gray-300 uppercase rounded",children:t}),Object(G.jsxs)("span",{className:"items-center inline-block text-sm justify-center font-semibold px-2 py-1 leading-none text-black bg-gray-300 uppercase rounded",children:["\ud83d\udcb0 $",c,"k - $",a,"k"]})]})},ee=function(e){var t=e.technologies;return Object(G.jsx)("div",{className:"w-56 flex-wrap self-center hidden md:flex items-center",children:t.map((function(e,t){return Object(G.jsx)("span",{className:"px-2 mx-1 my-1 text-sm  text-center font-medium text-black uppercase  bg-transparent rounded-md border-black border-2",children:e.nombre},t)}))})},te=function(e){var t=e.date,n=new Date,r=new Date(t),c=n.getTime()-r.getTime(),a=Math.trunc(c/864e5);return Object(G.jsx)("div",{className:"self-center px-2 hidden md:block",children:a<1?"".concat(24*a,"h"):"".concat(a,"d")})},ne=function(){return Object(G.jsx)("div",{className:"self-center hidden lg:block pl-2 pr-1",children:Object(G.jsx)("button",{className:"bg-red-500 text-white font-bold py-2 px-12 rounded",children:"Postular"})})},re=function(e){var t=e.offer,n=Object(W.g)(),r=t||{},c=r.urlImagen,a=r.id,o=r.nombre,s=r.empresa,i=r.salarioMaximo,l=r.salarioMinimo,u=r.tecnologias,b=r.fechaPublicacion,d=r.localidad;return Object(G.jsx)("div",{className:"select-none mx-auto p-5",children:Object(G.jsxs)("div",{onClick:function(){return n.push("/ofertas/".concat(a))},className:"max-w-lg appear mx-auto hover:bg-gray-100 md:max-w-5xl cursor-pointer flex bg justify-between rounded-xl border overflow-hidden p-5",children:[Object(G.jsx)(Q,{image:c.length>0?c:"https://remoteok.io/assets/img/jobs/376af38d16bf762263aef1f70ed885ef1633445669.png?1633445670"}),Object(G.jsxs)("div",{className:"space-y-1 lg:w-64",children:[Object(G.jsx)(X,{company:s}),Object(G.jsx)(Z,{position:o}),Object(G.jsx)(_,{location:d,minSalary:l,maxSalary:i})]}),Object(G.jsx)(ee,{technologies:u}),Object(G.jsx)(te,{date:b}),Object(G.jsx)(ne,{})]})})},ce=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.technologies[0]}));Object(r.useEffect)((function(){e(I())}),[]);return Object(G.jsxs)("div",{children:[Object(G.jsx)("div",{className:"text-center pt-5 pb-2",children:Object(G.jsx)("h1",{className:"text-3xl text-white font-bold",children:"Remote | OK"})}),Object(G.jsxs)("div",{className:"mx-auto w-min",children:[Object(G.jsx)("input",{onChange:function(n){return function(n){for(var r=0;r<t.length;r++)n.target.value===t[r].nombre&&e(T(n.target.value))}(n)},className:"p-3 outline rounded-full",list:"options"}),Object(G.jsx)("datalist",{name:"options",id:"options",children:t&&t.map((function(e){return Object(G.jsx)("option",{value:e.nombre},e.id)}))})]})]})},ae=function(){var e=Object(s.b)();return Object(G.jsx)("button",{onClick:function(){e(A())},className:"bg-blue-500 ml-2 mt-3 hover:bg-blue-700 text-white py-2 px-4 rounded",children:"Logout"})},oe=function(){return Object(G.jsxs)("header",{className:"bg-landscape pb-10 mb-5",children:[Object(G.jsx)(ae,{}),Object(G.jsx)(ce,{})]})},se=function(){var e=Object(s.c)((function(e){return e.offers[0]})),t=Object(s.c)((function(e){return e.filters})),n=Object(r.useState)([]),c=Object(Y.a)(n,2),a=c[0],o=c[1],i=Object(s.b)();Object(r.useEffect)((function(){i(N()),o(e)}),[]),Object(r.useEffect)((function(){o(e)}),[e]),Object(r.useEffect)((function(){var e=l();o(e)}),[t]);var l=function(){return e&&0!==t.length?e.filter((function(e){for(var n=0,r=0;r<t.length;r++)for(var c=0;c<e.tecnologias.length;c++)e.tecnologias[c].nombre===t[r]&&(n+=1);return n===t.length})):e};return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(oe,{}),Object(G.jsxs)("div",{children:[Object(G.jsx)("span",{className:"text-xl ml-20 md:ml-52 mr-4",children:"Incluir:"}),t&&t.map((function(e,t){return Object(G.jsxs)("span",{onClick:function(){return function(e){i(V(e))}(e)},className:"inline-flex items-center cursor-pointer justify-center px-2 py-1 mr-2 text-sm font-bold leading-none text-red-100 bg-red-600 rounded-full",children:[e," \u2715"]},t)}))]}),a&&a.map((function(e){return Object(G.jsx)(re,{offer:e},e.id)}))]})};function ie(){return Object(G.jsx)(se,{})}function le(){return Object(G.jsx)("div",{class:"bg-gray-100",children:Object(G.jsx)("div",{class:"container mx-auto px-4",children:Object(G.jsx)("section",{class:"py-8 px-4 text-center",children:Object(G.jsxs)("div",{class:"max-w-auto mx-auto",children:[Object(G.jsx)("div",{class:"md:max-w-lg mx-auto",children:Object(G.jsx)("svg",{class:"fill-current text-gray-300",viewBox:"0 0 445 202",xmlns:"http://www.w3.org/2000/svg",children:Object(G.jsx)("path",{d:"M137.587 154.953h-22.102V197h-37.6v-42.047H.53v-33.557L72.36 2.803h43.125V124.9h22.102v30.053zM77.886 124.9V40.537L28.966 124.9h48.92zm116.707-23.718c0 22.46 1.842 39.643 5.525 51.547 3.684 11.905 11.23 17.857 22.64 17.857 11.411 0 18.89-5.952 22.44-17.857 3.548-11.904 5.323-29.086 5.323-51.547 0-23.54-1.775-40.97-5.324-52.29s-11.028-16.98-22.438-16.98c-11.41 0-18.957 5.66-22.64 16.98-3.684 11.32-5.526 28.75-5.526 52.29zM222.759.242c24.887 0 42.339 8.76 52.356 26.28 10.018 17.52 15.027 42.406 15.027 74.66s-5.01 57.095-15.027 74.525c-10.017 17.43-27.47 26.145-52.356 26.145-24.887 0-42.339-8.715-52.357-26.145-10.017-17.43-15.026-42.271-15.026-74.525 0-32.254 5.009-57.14 15.026-74.66C180.42 9.001 197.872.241 222.76.241zm221.824 154.711h-22.102V197h-37.6v-42.047h-77.355v-33.557l71.83-118.593h43.125V124.9h22.102v30.053zM384.882 124.9V40.537l-48.92 84.363h48.92z","fill-rule":"nonzero"})})}),Object(G.jsx)("h2",{class:"mt-8 uppercase text-xl lg:text-5xl font-black",children:"We are sorry, Page not found!"}),Object(G.jsx)("p",{class:"mt-6 uppercase text-sm lg:text-base text-gray-900",children:"The page you are looking for might have been removed had its name changed or is temporarily unavailable."}),Object(G.jsx)("a",{href:"/ofertas",class:"mt-6 bg-blue-500 hover:bg-blue-700 text-white font-light py-4 px-6 rounded-full inline-block uppercase shadow-md",children:"Back To Homepage"})]})})})})}var ue=function(e){var t=e.id,n=Object(r.useState)({}),c=Object(Y.a)(n,2),a=c[0],o=c[1],i=Object(W.g)(),l=Object(s.b)();Object(r.useEffect)(Object(x.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(S(t));case 2:n=e.sent,o(n.payload);case 4:case"end":return e.stop()}}),e)}))),[]);return Object(G.jsxs)("div",{children:[Object(G.jsx)("button",{onClick:function(){i.push("/ofertas"),i.go(0)},class:"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",children:"Volver"}),0!==Object.keys(a).length&&Object(G.jsxs)("div",{className:"mx-auto appear mt-10 details py-7 px-6 shadow-2xl border rounded-sm md:w-11/12 w-full space-y-8",children:[Object(G.jsxs)("h1",{className:"mb-5 title text-2xl font-bold",children:[a.empresa," est\xe1 buscando un ",a.nombre," "]}),Object(G.jsx)("h3",{className:"text-xl title font-bold",children:"Empresa:"}),a.empresa,Object(G.jsxs)("div",{children:[Object(G.jsx)("h3",{className:"text-xl title font-bold",children:"Tecnolog\xedas:"}),a.tecnologias.map((function(e){return Object(G.jsx)("li",{children:e.nombre},e.id)}))]}),Object(G.jsx)("h3",{className:"text-xl title my-2 font-bold",children:"A\xf1os de experiencia:"}),a.anyosExperiencia,Object(G.jsx)("h3",{className:"text-xl title font-bold",children:"Tipo de contrato"}),a.tipoContrato,Object(G.jsx)("h3",{className:"text-xl title font-bold",children:"Modalidad:"}),a.modalidad,Object(G.jsx)("h3",{className:"text-xl title font-bold",children:"Localidad: "}),a.localidad,Object(G.jsx)("h3",{className:"text-xl title font-bold",children:"Vacantes: "}),a.numeroVacantes,Object(G.jsx)("h3",{className:"text-xl title font-bold",children:"Rango Salarial: "}),"$",a.salarioMinimo," - $",a.salarioMaximo]})]})},be=function(e){var t=e.id;return Object(G.jsx)(ue,{id:t})},de=function(){var e=Object(W.g)(),t=Object(s.c)((function(e){return e.auth.isLoggedIn}));console.log(t);var n=Object(s.b)(),c=Object(r.useState)({username:"",password:""}),a=Object(Y.a)(c,2),o=a[0],i=a[1],l=function(e){i(Object(q.a)(Object(q.a)({},o),{},Object(u.a)({},e.target.name,e.target.value)))};return Object(G.jsx)("div",{className:"bg-grey-lighter bg-landscape min-h-screen flex flex-col",children:Object(G.jsxs)("div",{className:"container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2",children:[Object(G.jsxs)("div",{className:"bg-white px-6 py-8 rounded shadow-md text-black w-full",children:[Object(G.jsx)("h1",{className:"mb-8 text-3xl text-center",children:"Iniciar sesi\xf3n"}),Object(G.jsx)("input",{onChange:function(e){return l(e)},type:"text",className:"block border border-grey-light w-full p-3 rounded mb-4",name:"username",placeholder:"Usuario"}),Object(G.jsx)("input",{onChange:function(e){return l(e)},type:"password",className:"block border border-grey-light w-full p-3 rounded mb-4",name:"password",placeholder:"Contrase\xf1a"}),Object(G.jsx)("button",{type:"submit",onClick:function(){n(F(o)),n(U()),console.log(t)},className:"w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1",children:"Login"})]}),Object(G.jsxs)("div",{className:"text-white text-lg mt-6",children:["No tienes una cuenta?\xa0",Object(G.jsx)("a",{className:"no-underline border-b border-blue font-bold",onClick:function(){return e.push("/register")},children:"Reg\xedstrate"}),"."]})]})})},je=function(){return Object(G.jsx)(de,{})},xe=function(){var e=Object(W.g)(),t=Object(s.b)(),n=Object(r.useState)({username:"",password:"",email:""}),c=Object(Y.a)(n,2),a=c[0],o=c[1],i=function(e){o(Object(q.a)(Object(q.a)({},a),{},Object(u.a)({},e.target.name,e.target.value)))};return Object(G.jsx)(G.Fragment,{children:Object(G.jsx)("div",{className:"bg-grey-lighter bg-landscape min-h-screen flex flex-col",children:Object(G.jsxs)("div",{className:"container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2",children:[Object(G.jsxs)("div",{className:"bg-white px-6 py-8 rounded shadow-md text-black w-full",children:[Object(G.jsx)("h1",{className:"mb-8 text-3xl text-center",children:"Registrarse"}),Object(G.jsx)("input",{onChange:function(e){return i(e)},type:"text",className:"block border border-grey-light w-full p-3 rounded mb-4",name:"username",placeholder:"Usuario"}),Object(G.jsx)("input",{onChange:function(e){return i(e)},type:"text",className:"block border border-grey-500 w-full p-3 rounded mb-4",name:"email",placeholder:"Correo electr\xf3nico"}),Object(G.jsx)("input",{onChange:function(e){return i(e)},type:"password",className:"block border border-grey-light w-full p-3 rounded mb-4",name:"password",placeholder:"Contrase\xf1a"}),Object(G.jsx)("button",{onClick:function(){t(B(a))},type:"submit",className:"w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1",children:"Crear cuenta"})]}),Object(G.jsxs)("div",{className:"text-white text-lg mt-6",children:["Ya tienes una cuenta?\xa0",Object(G.jsx)("a",{className:"no-underline border-b border-blue text-blue",onClick:function(){return e.push("/login")},children:"Inicia sesi\xf3n"}),"."]})]})})})},fe=function(){return Object(G.jsx)(xe,{})},me=["auth","component"],he=["auth","component"];var pe=function(e){var t=e.auth,n=e.component,r=Object(D.a)(e,me);return console.log("AUTH",t),Object(G.jsx)(W.b,Object(q.a)(Object(q.a)({},r),{},{render:function(){return t?Object(G.jsx)(n,{}):Object(G.jsx)(W.a,{to:"/login"})}}))},ge=function(e){var t=e.auth,n=e.component,r=Object(D.a)(e,he);return Object(G.jsx)(W.b,Object(q.a)(Object(q.a)({},r),{},{render:function(){return t?Object(G.jsx)(W.a,{to:"/ofertas"}):Object(G.jsx)(n,{})}}))},Oe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth.isLoggedIn}));return Object(r.useEffect)((function(){e(U())}),[]),console.log(t),Object(G.jsx)(K.a,{children:Object(G.jsxs)(W.d,{children:[Object(G.jsx)(pe,{exact:!0,path:"/",component:ie,auth:t}),Object(G.jsx)(ge,{path:"/login",component:je,auth:t}),Object(G.jsx)(ge,{path:"/register",component:fe,auth:t}),Object(G.jsx)(W.b,{path:"/ofertas/:id",render:function(e){var t=e.match;return Object(G.jsx)(be,{id:t.params.id})}}),Object(G.jsx)(pe,{path:"/ofertas",component:ie,auth:t}),Object(G.jsx)(W.b,{component:le})]})})};n(77);var ve=function(){return Object(G.jsx)(Oe,{})};o.a.render(Object(G.jsx)(c.a.StrictMode,{children:Object(G.jsx)(s.a,{store:H,children:Object(G.jsx)(ve,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.24c2ec04.chunk.js.map