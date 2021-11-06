(this["webpackJsonpob-portal-frontend"]=this["webpackJsonpob-portal-frontend"]||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var r,c=n(1),a=n.n(c),s=n(25),o=n.n(s),l=n(11),i=n(13),u=n(12),d=n(10),b=n(18),j=n(5),x=n.n(j),m=n(14),f=n(39),h=n(40),p=n(22),g=n.n(p),O=g.a.create({baseURL:"https://proyecto-ofertas-ob.herokuapp.com/api",headers:{Authorization:"Bearer"+localStorage.getItem("user")}}),v=function(e){return O.get("/ofertas/".concat(e))},y={"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},w=function(){function e(){Object(f.a)(this,e)}return Object(h.a)(e,[{key:"login",value:function(e){g.a.post("https://proyecto-ofertas-ob.herokuapp.com/api/login",e,{headers:y}).then((function(e){return e.data.token&&localStorage.setItem("user",e.data.token),e.status})).catch((function(e){return console.log(e)}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e){g.a.post("https://proyecto-ofertas-ob.herokuapp.com/api/register",e)}}]),e}(),N=Object(u.b)("offers/retrieve",Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/ofertas");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),k=Object(u.b)("offers/retrieveById",function(){var e=Object(m.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),S=Object(u.c)({name:"offers",initialState:[],extraReducers:(r={},Object(d.a)(r,N.fulfilled,(function(e,t){return[].concat(Object(b.a)(e),[t.payload])})),Object(d.a)(r,k.fulfilled,(function(e,t){return[t.payload]})),r)}).reducer,C=Object(u.b)("technologies/retrieve",Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/tecnologias");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),I=Object(u.c)({name:"technologies",initialState:[],extraReducers:Object(d.a)({},C.fulfilled,(function(e,t){return[].concat(Object(b.a)(e),[t.payload])}))}).reducer,M=Object(u.c)({name:"filters",initialState:[],reducers:{addFilter:function(e,t){return[].concat(Object(b.a)(e),[t.payload])},removeFilter:function(e,t){return 1===e.length?[]:e.filter((function(e){return e!==t.payload}))},resetFilter:function(){return[]}}}),T=M.reducer,V=M.actions,z=V.addFilter,E=V.removeFilter,F=(V.resetFilter,T),R=Object(i.b)({offers:S,technologies:I,filters:F}),L=Object(u.a)({reducer:R,devTools:!0}),B=(n(70),n(71),n(16)),A=n(2),P=n(15),$=n(0),U=function(e){var t=e.image;return Object($.jsx)("img",{className:"w-16 border rounded h-16 self-center hidden lg:block",src:t,alt:"companyPhoto"})},D=function(e){var t=e.company;return Object($.jsx)("div",{className:"uppercase tracking-wide text-sm md:text-sm text-indigo-500 font-semibold",children:t})},H=function(e){var t=e.position;return Object($.jsx)("span",{className:"block mt-1 leading-tight text-medium font-medium text-black hover:underline",children:t})},J=function(e){var t=e.location,n=e.minSalary,r=e.maxSalary,c=n.toString().slice(0,-3),a=r.toString().slice(0,-3);return Object($.jsxs)("div",{className:"space-x-1",children:[Object($.jsx)("span",{className:"items-center inline-block text-sm justify-center font-semibold px-2 py-1 leading-none text-black bg-gray-300 uppercase rounded",children:t}),Object($.jsxs)("span",{className:"items-center inline-block text-sm justify-center font-semibold px-2 py-1 leading-none text-black bg-gray-300 uppercase rounded",children:["\ud83d\udcb0 $",c,"k - $",a,"k"]})]})},K=function(e){var t=e.technologies;return Object($.jsx)("div",{className:"w-56 flex-wrap self-center hidden md:flex items-center",children:t.map((function(e,t){return Object($.jsx)("span",{className:"px-2 mx-1 my-1 text-sm  text-center font-medium text-black uppercase  bg-transparent rounded-md border-black border-2",children:e.nombre},t)}))})},W=function(e){var t=e.date,n=new Date,r=new Date(t),c=n.getTime()-r.getTime(),a=Math.trunc(c/864e5);return Object($.jsx)("div",{className:"self-center px-2 hidden md:block",children:a<1?"".concat(24*a,"h"):"".concat(a,"d")})},Y=function(){return Object($.jsx)("div",{className:"self-center hidden lg:block pl-2 pr-1",children:Object($.jsx)("button",{className:"bg-red-500 text-white font-bold py-2 px-12 rounded",children:"Postular"})})},q=function(e){var t=e.offer,n=Object(A.f)(),r=t||{},c=r.urlImagen,a=r.id,s=r.nombre,o=r.empresa,l=r.salarioMaximo,i=r.salarioMinimo,u=r.tecnologias,d=r.fechaPublicacion,b=r.localidad;return Object($.jsx)("div",{className:"select-none mx-auto p-5",children:Object($.jsxs)("div",{onClick:function(){return n.push("/ofertas/".concat(a))},className:"max-w-lg appear mx-auto hover:bg-gray-100 md:max-w-5xl cursor-pointer flex bg justify-between rounded-xl border overflow-hidden p-5",children:[Object($.jsx)(U,{image:c.length>0?c:"https://remoteok.io/assets/img/jobs/376af38d16bf762263aef1f70ed885ef1633445669.png?1633445670"}),Object($.jsxs)("div",{className:"space-y-1 lg:w-64",children:[Object($.jsx)(D,{company:o}),Object($.jsx)(H,{position:s}),Object($.jsx)(J,{location:b,minSalary:i,maxSalary:l})]}),Object($.jsx)(K,{technologies:u}),Object($.jsx)(W,{date:d}),Object($.jsx)(Y,{})]})})},G=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.technologies[0]}));Object(c.useEffect)((function(){e(C())}),[]);return Object($.jsxs)("div",{children:[Object($.jsx)("div",{className:"text-center pt-5 pb-2",children:Object($.jsx)("h1",{className:"text-3xl text-white font-bold",children:"Remote | OK"})}),Object($.jsxs)("div",{className:"mx-auto w-min",children:[Object($.jsx)("input",{onChange:function(n){return function(n){for(var r=0;r<t.length;r++)n.target.value===t[r].nombre&&e(z(n.target.value))}(n)},className:"p-3 outline rounded-full",list:"options"}),Object($.jsx)("datalist",{name:"options",id:"options",children:t&&t.map((function(e){return Object($.jsx)("option",{value:e.nombre},e.id)}))})]})]})},Q=function(){var e=Object(A.f)(),t=new w;return Object($.jsx)("button",{onClick:function(){t.logout(),console.log("deleted",localStorage.getItem("user")),e.push("/login")},className:"bg-blue-500 ml-2 mt-3 hover:bg-blue-700 text-white py-2 px-4 rounded",children:"Logout"})},X=function(){return Object($.jsxs)("header",{className:"bg-landscape pb-10 mb-5",children:[Object($.jsx)(Q,{}),Object($.jsx)(G,{})]})},Z=function(){var e=Object(l.c)((function(e){return e.offers[0]})),t=Object(l.c)((function(e){return e.filters})),n=Object(c.useState)([]),r=Object(P.a)(n,2),a=r[0],s=r[1],o=Object(l.b)();Object(c.useEffect)((function(){o(N()),s(e)}),[]),Object(c.useEffect)((function(){s(e)}),[e]),Object(c.useEffect)((function(){var e=i();s(e)}),[t]);var i=function(){return e&&0!==t.length?e.filter((function(e){for(var n=0,r=0;r<t.length;r++)for(var c=0;c<e.tecnologias.length;c++)e.tecnologias[c].nombre===t[r]&&(n+=1);return n===t.length})):e};return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(X,{}),Object($.jsxs)("div",{children:[Object($.jsx)("span",{className:"text-xl ml-52 mr-4",children:"Incluir:"}),t&&t.map((function(e,t){return Object($.jsxs)("span",{onClick:function(){return function(e){o(E(e))}(e)},className:"inline-flex items-center cursor-pointer justify-center px-2 py-1 mr-2 text-sm font-bold leading-none text-red-100 bg-red-600 rounded-full",children:[e," \u2715"]},t)}))]}),a&&a.map((function(e){return Object($.jsx)(q,{offer:e},e.id)}))]})};function _(){var e=Object(A.f)();return null===localStorage.getItem("user")&&e.push("/login"),Object($.jsx)(Z,{})}function ee(){return Object($.jsx)("div",{class:"bg-gray-100",children:Object($.jsx)("div",{class:"container mx-auto px-4",children:Object($.jsx)("section",{class:"py-8 px-4 text-center",children:Object($.jsxs)("div",{class:"max-w-auto mx-auto",children:[Object($.jsx)("div",{class:"md:max-w-lg mx-auto",children:Object($.jsx)("svg",{class:"fill-current text-gray-300",viewBox:"0 0 445 202",xmlns:"http://www.w3.org/2000/svg",children:Object($.jsx)("path",{d:"M137.587 154.953h-22.102V197h-37.6v-42.047H.53v-33.557L72.36 2.803h43.125V124.9h22.102v30.053zM77.886 124.9V40.537L28.966 124.9h48.92zm116.707-23.718c0 22.46 1.842 39.643 5.525 51.547 3.684 11.905 11.23 17.857 22.64 17.857 11.411 0 18.89-5.952 22.44-17.857 3.548-11.904 5.323-29.086 5.323-51.547 0-23.54-1.775-40.97-5.324-52.29s-11.028-16.98-22.438-16.98c-11.41 0-18.957 5.66-22.64 16.98-3.684 11.32-5.526 28.75-5.526 52.29zM222.759.242c24.887 0 42.339 8.76 52.356 26.28 10.018 17.52 15.027 42.406 15.027 74.66s-5.01 57.095-15.027 74.525c-10.017 17.43-27.47 26.145-52.356 26.145-24.887 0-42.339-8.715-52.357-26.145-10.017-17.43-15.026-42.271-15.026-74.525 0-32.254 5.009-57.14 15.026-74.66C180.42 9.001 197.872.241 222.76.241zm221.824 154.711h-22.102V197h-37.6v-42.047h-77.355v-33.557l71.83-118.593h43.125V124.9h22.102v30.053zM384.882 124.9V40.537l-48.92 84.363h48.92z","fill-rule":"nonzero"})})}),Object($.jsx)("h2",{class:"mt-8 uppercase text-xl lg:text-5xl font-black",children:"We are sorry, Page not found!"}),Object($.jsx)("p",{class:"mt-6 uppercase text-sm lg:text-base text-gray-900",children:"The page you are looking for might have been removed had its name changed or is temporarily unavailable."}),Object($.jsx)("a",{href:"/ofertas",class:"mt-6 bg-blue-500 hover:bg-blue-700 text-white font-light py-4 px-6 rounded-full inline-block uppercase shadow-md",children:"Back To Homepage"})]})})})})}var te=function(e){var t=e.id,n=Object(c.useState)({}),r=Object(P.a)(n,2),a=r[0],s=r[1],o=Object(A.f)(),i=Object(l.b)();Object(c.useEffect)(Object(m.a)(x.a.mark((function e(){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(k(t));case 2:n=e.sent,s(n.payload);case 4:case"end":return e.stop()}}),e)}))),[]);return Object($.jsxs)("div",{children:[Object($.jsx)("button",{onClick:function(){o.push("/ofertas"),o.go(0)},class:"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",children:"Volver"}),0!==Object.keys(a).length&&Object($.jsxs)("div",{className:"mx-auto appear mt-10 details py-7 px-6 shadow-2xl border rounded-sm w-11/12 space-y-8",children:[Object($.jsxs)("h1",{className:"mb-5 title text-2xl font-bold",children:[a.empresa," est\xe1 buscando un ",a.nombre," "]}),Object($.jsx)("h3",{className:"text-xl title font-bold",children:"Empresa:"}),a.empresa,Object($.jsxs)("div",{children:[Object($.jsx)("h3",{className:"text-xl title font-bold",children:"Tecnolog\xedas:"}),a.tecnologias.map((function(e){return Object($.jsx)("li",{children:e.nombre},e.id)}))]}),Object($.jsx)("h3",{className:"text-xl title my-2 font-bold",children:"A\xf1os de experiencia:"}),a.anyosExperiencia,Object($.jsx)("h3",{className:"text-xl title font-bold",children:"Tipo de contrato"}),a.tipoContrato,Object($.jsx)("h3",{className:"text-xl title font-bold",children:"Modalidad:"}),a.modalidad,Object($.jsx)("h3",{className:"text-xl title font-bold",children:"Localidad: "}),a.localidad,Object($.jsx)("h3",{className:"text-xl title font-bold",children:"Vacantes: "}),a.numeroVacantes,Object($.jsx)("h3",{className:"text-xl title font-bold",children:"Rango Salarial: "}),"$",a.salarioMinimo," - $",a.salarioMaximo]})]})},ne=function(e){var t=e.id,n=Object(A.f)();return null===localStorage.getItem("user")&&n.push("/login"),Object($.jsx)(te,{id:t})},re=n(19),ce=function(){var e=new w,t=Object(A.f)(),n=Object(c.useState)({username:"",password:""}),r=Object(P.a)(n,2),a=r[0],s=r[1],o=function(e){s(Object(re.a)(Object(re.a)({},a),{},Object(d.a)({},e.target.name,e.target.value)))},l=function(){var n=Object(m.a)(x.a.mark((function n(){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.login(a);case 2:setTimeout((function(){localStorage.getItem("user")&&t.push("/ofertas")}),1e3);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object($.jsx)("div",{className:"bg-grey-lighter bg-landscape min-h-screen flex flex-col",children:Object($.jsxs)("div",{className:"container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2",children:[Object($.jsxs)("div",{className:"bg-white px-6 py-8 rounded shadow-md text-black w-full",children:[Object($.jsx)("h1",{className:"mb-8 text-3xl text-center",children:"Iniciar sesi\xf3n"}),Object($.jsx)("input",{onChange:function(e){return o(e)},type:"text",className:"block border border-grey-light w-full p-3 rounded mb-4",name:"username",placeholder:"Usuario"}),Object($.jsx)("input",{onChange:function(e){return o(e)},type:"password",className:"block border border-grey-light w-full p-3 rounded mb-4",name:"password",placeholder:"Contrase\xf1a"}),Object($.jsx)("button",{type:"submit",onClick:l,className:"w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1",children:"Login"})]}),Object($.jsxs)("div",{className:"text-white text-lg mt-6",children:["No tienes una cuenta?\xa0",Object($.jsx)("a",{className:"no-underline border-b border-blue font-bold",href:"../register/",children:"Reg\xedstrate"}),"."]})]})})},ae=function(){var e=Object(A.f)();return null!==localStorage.getItem("user")&&e.push("/ofertas"),Object($.jsx)(ce,{})},se=function(){var e=Object(A.f)(),t=new w,n=Object(c.useState)({username:"",password:"",email:""}),r=Object(P.a)(n,2),a=r[0],s=r[1],o=function(e){s(Object(re.a)(Object(re.a)({},a),{},Object(d.a)({},e.target.name,e.target.value)))};return Object($.jsx)($.Fragment,{children:Object($.jsx)("div",{className:"bg-grey-lighter bg-landscape min-h-screen flex flex-col",children:Object($.jsxs)("div",{className:"container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2",children:[Object($.jsxs)("div",{className:"bg-white px-6 py-8 rounded shadow-md text-black w-full",children:[Object($.jsx)("h1",{className:"mb-8 text-3xl text-center",children:"Registrarse"}),Object($.jsx)("input",{onChange:function(e){return o(e)},type:"text",className:"block border border-grey-light w-full p-3 rounded mb-4",name:"username",placeholder:"Usuario"}),Object($.jsx)("input",{onChange:function(e){return o(e)},type:"text",className:"block border border-grey-500 w-full p-3 rounded mb-4",name:"email",placeholder:"Correo electr\xf3nico"}),Object($.jsx)("input",{onChange:function(e){return o(e)},type:"password",className:"block border border-grey-light w-full p-3 rounded mb-4",name:"password",placeholder:"Contrase\xf1a"}),Object($.jsx)("button",{onClick:function(){t.register(a),e.push("/login")},type:"submit",className:"w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1",children:"Crear cuenta"})]}),Object($.jsxs)("div",{className:"text-white text-lg mt-6",children:["Ya tienes una cuenta?\xa0",Object($.jsx)("a",{className:"no-underline border-b border-blue text-blue",href:"../login/",children:"Inicia sesi\xf3n"}),"."]})]})})})},oe=function(){var e=Object(A.f)();return null!==localStorage.getItem("user")&&e.push("/ofertas"),Object($.jsx)(se,{})};var le=function(){return localStorage.getItem("user"),Object($.jsx)(B.a,{children:Object($.jsxs)(A.c,{children:[Object($.jsx)(A.a,{exact:!0,path:"/login",component:ae}),Object($.jsx)(A.a,{exact:!0,path:"/register",component:oe}),Object($.jsx)(A.a,{path:"/ofertas/:id",render:function(e){var t=e.match;return Object($.jsx)(ne,{id:t.params.id})}}),Object($.jsx)(A.a,{path:"/ofertas",component:_}),Object($.jsx)(A.a,{component:ee})]})})};n(77);var ie=function(){return Object($.jsx)(le,{})};o.a.render(Object($.jsx)(a.a.StrictMode,{children:Object($.jsx)(l.a,{store:L,children:Object($.jsx)(ie,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.f4869afd.chunk.js.map