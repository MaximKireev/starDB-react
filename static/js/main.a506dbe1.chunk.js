(this.webpackJsonpstardb=this.webpackJsonpstardb||[]).push([[0],{28:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(21),c=n.n(s),i=n(4),o=n(7),u=n(6),l=n(5),p=n(13),h=(n(28),n(0)),A=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("header",{className:"header-wrapper",children:[Object(h.jsx)(p.b,{to:"/",className:"logo",children:"SWAPI"}),Object(h.jsxs)("ul",{className:"main-header-list",children:[Object(h.jsx)(p.b,{to:"/people/",className:"header-list-item",children:"People"}),Object(h.jsx)(p.b,{to:"/planets/",className:"header-list-item",children:"Planets"}),Object(h.jsx)(p.b,{to:"/starships/",className:"header-list-item",children:"Starships"})]})]})}}]),n}(r.Component),d=(n(35),n(2)),j=n.n(d),f=n(9),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a)))._apiURL="https://www.swapi.tech/api",e._imgURL="https://starwars-visualguide.com/assets/img",e.getResources=function(){var t=Object(f.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e._apiURL).concat(n));case 2:if((r=t.sent).ok){t.next=5;break}throw new Error("Ups, smth goes wrong at ".concat(e._apiURL).concat(n," with error ").concat(r.status));case 5:return t.next=7,r.json();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getAllPeople=Object(f.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResources("/people/").then((function(e){return e.results}));case 2:return n=t.sent,t.abrupt("return",n.map((function(t){return e._transformItem(t)})));case 4:case"end":return t.stop()}}),t)}))),e.getPerson=function(){var t=Object(f.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResources("/people/".concat(n)).then((function(e){return e.result}));case 2:return r=t.sent,t.abrupt("return",e._transformItem(r.properties,r.uid));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getAllPlanets=Object(f.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResources("/planets/").then((function(e){return e.results}));case 2:return n=t.sent,t.abrupt("return",n.map((function(t){return e._transformItem(t)})));case 4:case"end":return t.stop()}}),t)}))),e.getPlanet=function(){var t=Object(f.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResources("/planets/".concat(n)).then((function(e){return e.result}));case 2:return r=t.sent,t.abrupt("return",e._transformItem(r.properties,r.uid));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getAllStarships=Object(f.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResources("/starships/").then((function(e){return e.results}));case 2:return n=t.sent,t.abrupt("return",n.map((function(t){return e._transformItem(t)})));case 4:case"end":return t.stop()}}),t)}))),e.getStarship=function(){var t=Object(f.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResources("/starships/".concat(n)).then((function(e){return e.result}));case 2:return r=t.sent,t.abrupt("return",e._transformItem(r.properties,r.uid));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getAllVehicles=Object(f.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResources("/vehicles/").then((function(e){return e.results}));case 2:return n=t.sent,t.abrupt("return",n.map((function(t){return e._transformItem(t)})));case 4:case"end":return t.stop()}}),t)}))),e.getVehicle=function(){var t=Object(f.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResources("/vehicles/".concat(n)).then((function(e){return e.result}));case 2:return r=t.sent,t.abrupt("return",e._transformItem(r.properties,r.uid));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getPlanetImage=function(){var t=Object(f.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,"".concat(e._imgURL,"/planets/").concat(n,".jpg");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getPersonImage=function(){var t=Object(f.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,"".concat(e._imgURL,"/characters/").concat(n,".jpg");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getStarshipsImage=function(){var t=Object(f.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,"".concat(e._imgURL,"/starships/").concat(n,".jpg");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e._transformItem=function(e,t){return{id:e.uid||t,loaded:!0,name:e.name||null,population:e.population||null,rotationPeriod:e.rotation_period||null,diameter:e.diameter||null,height:e.height||null,mass:e.mass||null,hair_color:e.hair_color||null,skin_color:e.skin_color||null,eye_color:e.eye_color||null,birth_year:e.birth_year||null,gender:e.gender||null,homeworld:e.homeworld||null,url:e.url||null,model:e.model||null,starship_class:e.starship_class||null,cost_in_credits:e.cost_in_credits||null,length:e.length||null}},e}return n}(r.Component),m=function(){return Object(h.jsxs)("div",{className:"loader-wrapper",children:[Object(h.jsx)("div",{className:"loader-img"}),Object(h.jsxs)("div",{className:"loader-container",children:[Object(h.jsx)("div",{className:"loader-item"}),Object(h.jsx)("div",{className:"loader-item"}),Object(h.jsx)("div",{className:"loader-item"})]})]})},O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){e&&this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(h.jsxs)("div",{className:"error_wrapper",children:[Object(h.jsx)("img",{src:"data:image/png;base64,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",alt:"death_start",className:"death_star",width:"50px",height:"50px"}),Object(h.jsx)("p",{children:"Uuuups, there is no such planet! :("})]}):this.props.children}}]),n}(r.Component),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).swapi=new b,e.state={id:12,loaded:!1,name:null,population:null,rotationPeriod:null,diameter:null},e.updatePlanet=function(){var t=Math.floor(18*Math.random())+2;return e.swapi.getPlanet(t).then((function(t){return e.setState(t)}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.updatePlanet()}},{key:"render",value:function(){var e=this.state.loaded;return Object(h.jsx)(O,{children:Object(h.jsx)("div",{className:"planet-wrapper",children:e?Object(h.jsx)(v,{params:this.state}):Object(h.jsx)(m,{})})})}}]),n}(r.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.params,t=e.name,n=e.population,r=e.rotationPeriod,s=e.diameter,c=e.id;return Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsx)("img",{src:"https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/".concat(c,".jpg"),alt:"random-planet",width:"170px",height:"170px"}),Object(h.jsxs)("div",{className:"planet-description",children:[Object(h.jsx)("h1",{className:"name",children:t}),Object(h.jsxs)("p",{className:"population",children:[Object(h.jsx)("span",{children:"Population"}),": ",n]}),Object(h.jsxs)("p",{className:"rotation-period",children:[Object(h.jsx)("span",{children:"Rotation-period:"})," ",r]}),Object(h.jsxs)("p",{className:"diametr",children:[Object(h.jsx)("span",{children:"Diameter:"})," ",s]})]})]})}}]),n}(r.Component),w=(n(37),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{"d-flex":!0,"w-100":!0,children:this.props.children})}}]),n}(r.Component)),x=(n(38),n(39),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"block-wrapper",children:this.props.children})}}]),n}(r.Component)),y=(n(40),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"block-wrapper",children:this.props.children})}}]),n}(r.Component)),B=n(3),C=n(19),I=function(e,t){return function(n){Object(u.a)(a,n);var r=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return(e=r.call.apply(r,[this].concat(n))).state={displayData:[],loaded:!1},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.renderAllItems()}},{key:"renderAllItems",value:function(){var e=Object(f.a)(j.a.mark((function e(){var n=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t().then((function(e){return n.setState({displayData:e})})).then((function(){return n.setState({loaded:!0})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,n=t.displayData,r=t.loaded;return Object(h.jsx)(e,Object(C.a)(Object(C.a)({},this.props),{},{displayData:n,loaded:r}))}}]),a}(r.Component)},D=(n(41),n(42),function(){return Object(h.jsx)("div",{className:"loader"})}),k=function(e){var t=e.onIdRequest,n=e.displayData,r=e.loaded;return Object(h.jsx)(O,{children:r?Object(h.jsx)("div",{className:"items-list-wrapper w-50",children:n.map((function(e){return Object(h.jsx)("span",{className:"list-group-item list-group-item-action",onClick:function(){return t(e.id)},children:e.name},e.id)}))}):Object(h.jsx)(D,{})})},G=new b,E=G.getAllPeople,P=G.getAllPlanets,S=G.getAllStarships,H=I(k,E),Q=I(k,P),N=I(k,S),U=(n(43),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={loaded:!1},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.item;return Object(h.jsx)(O,{children:Object(h.jsx)("div",{className:"item-details-wrapper",children:e?Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsx)("img",{src:e[1],alt:"info-img",width:"150px",height:"150px"}),Object(h.jsxs)("div",{className:"list-group w-50",children:[Object(h.jsx)("h3",{className:"item-name",children:e[0].name}),a.a.Children.map(this.props.children,(function(t){return a.a.cloneElement(t,{item:e})}))]})]}):Object(h.jsx)("h3",{children:"No items to display"})})})}}]),n}(r.Component)),M=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={Planet:null,Person:null,Starship:null},e.swapi=new b,e}return Object(o.a)(n,[{key:"setPlanetID",value:function(e){var t=this,n=this.swapi.getPlanet(e),r=this.swapi.getPlanetImage(e);return Promise.all([n,r]).then((function(e){return t.setState({Planet:e})}))}},{key:"setPersonID",value:function(e){var t=this,n=this.swapi.getPerson(e),r=this.swapi.getPersonImage(e);Promise.all([n,r]).then((function(e){return t.setState({Person:e})}))}},{key:"setStarshipID",value:function(e){var t=this,n=this.swapi.getStarship(e),r=this.swapi.getStarshipsImage(e);Promise.all([n,r]).then((function(e){return t.setState({Starship:e})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.Planet,r=t.Person,a=t.Starship;return Object(h.jsx)("div",{children:Object(h.jsxs)(p.a,{children:[Object(h.jsx)(A,{}),Object(h.jsx)(g,{}),Object(h.jsx)(B.c,{children:Object(h.jsxs)("div",{class:"container",children:[Object(h.jsx)(B.a,{exact:!0,path:"/",children:Object(h.jsx)("h2",{children:"Welcome to the star Data base"})}),Object(h.jsxs)(B.a,{path:"/planets/",component:w,children:[Object(h.jsx)(Q,{onIdRequest:function(t){return e.setPlanetID(t)}}),Object(h.jsxs)(U,{item:n,children:[Object(h.jsx)(J,{field:"climate",label:"Climate"}),Object(h.jsx)(J,{field:"population",label:"Population"}),Object(h.jsx)(J,{field:"diameter",label:"Diameter"})]})]}),Object(h.jsxs)(B.a,{path:"/people/",component:x,children:[Object(h.jsx)(H,{onIdRequest:function(t){return e.setPersonID(t)}}),Object(h.jsxs)(U,{item:r,children:[Object(h.jsx)(J,{field:"gender",label:"Gender"}),Object(h.jsx)(J,{field:"eye_color",label:"Eye color"})]})]}),Object(h.jsxs)(B.a,{path:"/starships/",component:y,children:[Object(h.jsx)(N,{onIdRequest:function(t){return e.setStarshipID(t)}}),Object(h.jsxs)(U,{item:a,children:[Object(h.jsx)(J,{field:"cost_in_credits",label:"Cost"}),Object(h.jsx)(J,{field:"starship_class",label:"Starship class"}),Object(h.jsx)(J,{field:"model",label:"Model"})]})]})]})})]})})}}]),n}(r.Component),J=function(e){var t=e.field,n=e.label,r=e.item;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[n,": "]}),Object(h.jsx)("div",{children:r[0][t]})]})};c.a.render(Object(h.jsx)(M,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.a506dbe1.chunk.js.map