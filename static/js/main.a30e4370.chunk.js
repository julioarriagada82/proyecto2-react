(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,a,t){e.exports=t(69)},69:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(18),o=t.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(4),s=t(14),i=t(12),m=t(2),u=function(e){return{type:"GET_CHARACTERS_SUCCESS",payload:{info:e.info,characters:e.characters}}},d={infoApi:{count:0,pages:0,next:"https://rickandmortyapi.com/api/character/",prev:"",currentPage:0},characters:[],loading:!0,error:null},p=function(e){return{type:"GET_EPISODES_SUCCESS",payload:{info:e.info,episodes:e.episodes}}},E={infoApi:{count:0,pages:0,next:"https://rickandmortyapi.com/api/episode/",prev:"",currentPage:0},episodes:[],loading:!0,error:null},g=t(11),v={users:{1:{name:"Julio Arriagada",password:"123",email:"julioarriagada@gmail.com",favoriteCharacters:["1","2"],favoriteEpisodes:["3","4"]},2:{name:"Usuario Prueba",password:"123",email:"usuario@rm.com",favoriteCharacters:["5","6"],favoriteEpisodes:["7","8"]}},userList:["1","2"],loggedIn:null,loggedOut:!1,loading:!1},b=Object(s.c)({characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_CHARACTERS_REQUEST":return Object(m.a)({},e,{loading:!0,error:null});case"GET_CHARACTERS_SUCCESS":var t=a.payload,r=t.characters,n=t.info,c=n.pages,o=n.next,l=n.prev,s=n.count;return Object(m.a)({},e,{infoApi:Object(m.a)({},e.infoApi,{pages:c,next:o,prev:l,count:s,currentPage:e.infoApi.currentPage+1}),loading:!1,characters:[].concat(Object(i.a)(e.characters),Object(i.a)(r)),error:null});case"GET_CHARACTERS_ERROR":var u=a.payload.error;return Object(m.a)({},e,{loading:!1,error:u});default:return e}},episodes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_EPISODES_REQUEST":return Object(m.a)({},e,{loading:!0,error:null});case"GET_EPISODES_SUCCESS":var t=a.payload,r=t.episodes,n=t.info,c=n.pages,o=n.next,l=n.prev,s=n.count;return Object(m.a)({},e,{infoApi:Object(m.a)({},e.infoApi,{pages:c,next:o,prev:l,count:s,currentPage:e.infoApi.currentPage+1}),loading:!1,episodes:[].concat(Object(i.a)(e.episodes),Object(i.a)(r)),error:null});case"GET_EPISODESS_ERROR":var u=a.payload.error;return Object(m.a)({},e,{loading:!1,error:u});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGIN_REQUEST":return Object(m.a)({},e,{loading:!0});case"LOGIN_SUCCESS":return Object(m.a)({},e,{loggedIn:a.payload.userId,loading:!1,error:null});case"LOGIN_ERROR":return Object(m.a)({},e,{error:a.payload.error,loading:!1});case"LOGOUT_REQUEST":return Object(m.a)({},e,{loading:!0});case"LOGOUT_SUCCESS":return Object(m.a)({},e,{loggedIn:null,loggedOut:!0,loading:!1,error:null});case"LOGOUT_ERROR":return Object(m.a)({},e,{error:a.payload.error,loading:!1});case"ADD_USER_REQUEST":return Object(m.a)({},e,{loading:!0});case"ADD_USER_SUCCESS":var t=a.payload,r=t.id,n=t.name,c=t.email,o=t.password;return Object(m.a)({},e,{users:Object(m.a)({},e.users,Object(g.a)({},r,{name:n,email:c,password:o,favoriteCharacters:[],favoriteEpisodes:[]})),userList:[].concat(Object(i.a)(e.userList),[r]),loading:!1,error:null});case"ADD_USER_ERROR":return Object(m.a)({},e,{error:a.payload.error,loading:!1});default:return e}}}),f=t(39),O=Object(s.d)(b,Object(s.a)(f.a)),y=t(6),h=t(13),S=t(15),N=t.n(S),R=t(20),w=t(21),C=t.n(w),j={getCharacters:function(){return function(){var e=Object(R.a)(N.a.mark(function e(a,t){var r,n,c,o,l;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"GET_CHARACTERS_REQUEST"}),r=t().characters.infoApi.next,e.prev=2,e.next=5,C.a.get(r);case 5:n=e.sent,c=n.data,o=c.results,l=c.info,a(u({info:l,characters:o})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),a({type:"GET_CHARACTERS_ERROR",payload:{error:e.t0}});case 13:case"end":return e.stop()}},e,null,[[2,10]])}));return function(a,t){return e.apply(this,arguments)}}()}},_=Object(l.b)(function(e){var a=e.characters,t=a.characters,r=a.loading,n=a.error,c=a.infoApi;return{characters:t,loading:r,error:n,count:c.count,currentPage:c.currentPage,pages:c.pages}},j)(function(e){var a=e.characters,t=e.loading,c=e.pages,o=e.currentPage,l=e.count,s=e.getCharacters;return Object(r.useEffect)(function(){s()},[]),n.a.createElement("div",null,t&&"Loading.....",!t&&n.a.createElement("div",null,"Hay ",l," elementos."),n.a.createElement("div",{className:"row"},a.map(function(e,a){return n.a.createElement("div",{key:a,className:"col-12 col-sm-8 col-md-6 col-lg-4"},n.a.createElement("div",{className:"card"},n.a.createElement("img",{className:"card-img-top",src:e.image,alt:e.name}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},e.name),n.a.createElement("span",{className:"badge badge-primary"},e.status),n.a.createElement("span",{className:"badge badge-secondary"},e.species),n.a.createElement("span",{className:"badge badge-success"},e.gender)),n.a.createElement("div",{className:"card-body"},n.a.createElement("button",{className:"btn btn-primary"},"Favorito"))))})),!t&&n.a.createElement("div",null,"Hay ",c," p\xe1ginas, est\xe1s en la p\xe1gina ",o," "),!t&&o<c&&n.a.createElement("button",{onClick:s},"Ver m\xe1s"))}),T={logout:function(){return function(e,a){e({type:"LOGOUT_REQUEST"});var t=localStorage.getItem("userId");t?(localStorage.removeItem("userId"),e(function(e){return{type:"LOGOUT_SUCCESS",payload:{userId:e}}}(t))):e({type:"LOGOUT_ERROR",payload:{error:"Usuario no se encuentra logueado"}})}}},I=Object(l.b)(function(e){var a=e.users;return{loading:a.loading,error:a.error,loggedOut:a.loggedOut,users:a.users}},T)(function(e){var a=e.logout,t=e.loggedOut;return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},n.a.createElement("a",{className:"navbar-brand",href:"/"},"The Rick and Morty"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(y.c,{to:"/proyecto2-react/",exact:!0,activeClassName:"active",className:"nav-link"},"Ir a Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(y.c,{to:"/proyecto2-react/characters",exact:!0,activeClassName:"active",className:"nav-link"},"Ver Personajes")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(y.c,{to:"/proyecto2-react/episodes",exact:!0,activeClassName:"active",className:"nav-link"},"Ver Episodios")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(y.c,{to:"/proyecto2-react/comparisons",exact:!0,activeClassName:"active",className:"nav-link"},"Comparaciones")))),n.a.createElement("form",{className:"form-inline",onSubmit:function(e){e.preventDefault(),a()}},n.a.createElement("button",{type:"submit",className:"btn btn-danger"},"Logout")),t&&n.a.createElement(h.a,{push:!0,to:"/proyecto2-react/"}))}),U=function(){return n.a.createElement("div",{className:"container"},n.a.createElement(I,null),n.a.createElement(_,null))},A={getEpisodes:function(){return function(){var e=Object(R.a)(N.a.mark(function e(a,t){var r,n,c,o,l;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"GET_EPISODES_REQUEST"}),r=t().episodes.infoApi.next,e.prev=2,e.next=5,C.a.get(r);case 5:n=e.sent,c=n.data,o=c.results,l=c.info,a(p({info:l,episodes:o})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),a({type:"GET_EPISODESS_ERROR",payload:{error:e.t0}});case 13:case"end":return e.stop()}},e,null,[[2,10]])}));return function(a,t){return e.apply(this,arguments)}}()}},x=Object(l.b)(function(e){var a=e.episodes,t=a.episodes,r=a.loading,n=a.error,c=a.infoApi;return{episodes:t,loading:r,error:n,count:c.count,currentPage:c.currentPage,pages:c.pages}},A)(function(e){var a=e.episodes,t=e.loading,c=e.pages,o=e.currentPage,l=e.count,s=e.getEpisodes;return Object(r.useEffect)(function(){s()},[]),n.a.createElement("div",null,t&&"Loading.....",!t&&n.a.createElement("div",null,"Hay ",l," elementos."),!t&&n.a.createElement("table",{className:"table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"#"),n.a.createElement("th",{scope:"col"},"Nombre Episodio"),n.a.createElement("th",{scope:"col"},"Fecha al aire"),n.a.createElement("th",{scope:"col"},"Nombre episodio"),n.a.createElement("th",null,"Favorito"))),n.a.createElement("tbody",null,a.map(function(e,a){return n.a.createElement("tr",{key:a},n.a.createElement("th",{scope:"row"},e.id),n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.air_date),n.a.createElement("td",null,e.episode),n.a.createElement("td",null,n.a.createElement("button",{className:"btn btn-secundary"},"Agregar")))}))),!t&&n.a.createElement("div",null,"Hay ",c," p\xe1ginas, est\xe1s en la p\xe1gina ",o," "),!t&&o<c&&n.a.createElement("button",{onClick:s},"Ver m\xe1s"))}),D=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement(I,null),n.a.createElement(x,null))},P=function(){return n.a.createElement("div",{className:"container"},n.a.createElement(I,null))},G=function(){return n.a.createElement("div",{className:"container"},n.a.createElement(I,null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm"}),n.a.createElement("div",{className:"col-6"},n.a.createElement("h1",null,"THE RICK AND MORTY API "),n.a.createElement("p",null,"HEY, DID YOU EVER WANT TO HOLD A TERRY FOLD?")),n.a.createElement("div",{className:"col-sm"})))},L=t(23),k={login:function(e,a){return function(t,r){t({type:"LOGIN_REQUEST"});var n=function(e,a,t){var r=t.users,n=r.users;return r.userList.find(function(t){return n[t].email===e&&n[t].password===a})}(e,a,r());n?(localStorage.setItem("userId",n),t(function(e){return{type:"LOGIN_SUCCESS",payload:{userId:e}}}(n))):t({type:"LOGIN_ERROR",payload:{error:"Password o email incorrecto"}})}}},H=Object(l.b)(function(e){var a=e.users;return{loading:a.loading,error:a.error,users:a.users}},k)(function(e){var a=e.login,t=e.error,c=e.loading,o=e.users,l=Object(r.useState)({email:"",password:""}),s=Object(L.a)(l,2),i=s[0],u=s[1],d=function(e){var a=e.target,t=a.name,r=a.value;u(Object(m.a)({},i,Object(g.a)({},t,r)))};return n.a.createElement("div",{className:"row"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(o),a(i.email,i.password)}},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"email"},"Email address"),n.a.createElement("input",{required:!0,type:"email",name:"email",className:"form-control",value:i[""],onChange:d,"aria-describedby":"emailHelp",placeholder:"Ingrese email"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{required:!0,type:"password",name:"password",className:"form-control",value:i[""],onChange:d,placeholder:"Password"})),t&&n.a.createElement("div",{className:"alert alert-warning",role:"alert"},t),!c&&n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login"),n.a.createElement(y.b,{to:"/register",className:"btn btn-secundary"},"Registrarse")))}),Q=function(){return n.a.createElement("div",{className:"container"},n.a.createElement(H,null))},F=t(22),V=function(e){var a=e.component,t=Object(F.a)(e,["component"]),r=localStorage.getItem("userId");return n.a.createElement(h.b,Object.assign({render:function(e){return r?n.a.createElement(a,e):n.a.createElement(h.a,{to:"/proyecto2-react/"})}},t))},q=Object(l.b)(function(e){return{loading:e.users.loading}})(function(e){var a=e.component,t=Object(F.a)(e,["component"]),r=localStorage.getItem("userId");return n.a.createElement(h.b,Object.assign({render:function(e){return r?n.a.createElement(h.a,{to:"/proyecto2-react/"}):n.a.createElement(a,e)}},t))}),Y={addUser:function(e){var a=e.email,t=e.password,r=e.name;return function(e,n){e({type:"ADD_USER_REQUEST"});var c,o=function(e){var a=e.email,t=(e.password,e.name,e.state.users),r=t.users,n=t.userList,c={};return n.some(function(e){return r[e].email===a})?c.error="Ya existe este usuario.":c.newId=n.length+1,c}({email:a,password:t,name:r,state:n()}),l=o.error,s=o.newId;e(l?function(e){return{type:"ADD_USER_ERROR",payload:{error:e}}}(l):{type:"ADD_USER_SUCCESS",payload:{name:(c={id:s,email:a,name:r,password:t}).name,password:c.password,email:c.email,id:c.id}})}}},J=Object(l.b)(function(e){var a=e.users;return{loading:a.loading,error:a.error}},Y)(function(e){var a=e.loading,t=e.addUser,c=e.error,o=Object(r.useState)({name:"",password:"",email:""}),l=Object(L.a)(o,2),s=l[0],i=l[1],u=function(e){var a=e.target,t=a.name,r=a.value;i(Object(m.a)({},s,Object(g.a)({},t,r)))};return n.a.createElement("div",{className:"row"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(s)}},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"name"},"Nombre usuario"),n.a.createElement("input",{required:!0,type:"text",name:"name",className:"form-control",placeholder:"Ingrese el name",value:s.name,onChange:u})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{required:!0,type:"email",name:"email",className:"form-control",placeholder:"Ingrese el email",value:s.email,onChange:u})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{required:!0,type:"password",name:"password",className:"form-control",placeholder:"Ingrese el password",value:s.password,onChange:u})),c&&n.a.createElement("div",{className:"alert alert-warning",role:"alert"},c),!a&&n.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Registrar"),n.a.createElement(y.b,{to:"/login",className:"btn btn-secundary"},"Volver")))}),W=function(){return n.a.createElement("div",{className:"container"},n.a.createElement(J,null))},B=function(){return n.a.createElement(y.a,null,n.a.createElement(h.d,null,n.a.createElement(V,{path:"/proyecto2-react/",exact:!0,component:G}),n.a.createElement(V,{path:"/proyecto2-react/characters",exact:!0,component:U}),n.a.createElement(V,{path:"/proyecto2-react/episodes",exact:!0,component:D}),n.a.createElement(V,{path:"/proyecto2-react/comparisons",exact:!0,component:P}),n.a.createElement(q,{path:"/proyecto2-react/login",exact:!0,component:Q}),n.a.createElement(q,{exact:!0,path:"/proyecto2-react/register",component:W})))};o.a.render(n.a.createElement(function(){return n.a.createElement(l.a,{store:O},n.a.createElement(B,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.a30e4370.chunk.js.map