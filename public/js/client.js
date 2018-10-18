!function(e){function t(t){for(var a,r,o=t[0],l=t[1],c=t[2],s=0,u=[];s<o.length;s++)r=o[s],P[r]&&u.push(P[r][0]),P[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(I&&I(t);u.length;)u.shift()();return D.push.apply(D,c||[]),n()}function n(){for(var e,t=0;t<D.length;t++){for(var n=D[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==P[o]&&(a=!1)}a&&(D.splice(t--,1),e=S(S.s=n[0]))}return e}var a=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!g[e])return;for(var n in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--v&&0===y&&O()}(e,t),a&&a(e,t)};var r,o=!0,l="d03c395fcfad1d7602b5",c=1e4,s={},u=[],i=[];var d=[],f="idle";function p(e){f=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var m,h,b,v=0,y=0,E={},g={},_={};function j(e){return+e+""===e?+e:e}function w(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return o=e,p("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var a=new XMLHttpRequest,r=S.p+""+l+".hot-update.json";a.open("GET",r,!0),a.timeout=e,a.send(null)}catch(e){return n(e)}a.onreadystatechange=function(){if(4===a.readyState)if(0===a.status)n(new Error("Manifest request to "+r+" timed out."));else if(404===a.status)t();else if(200!==a.status&&304!==a.status)n(new Error("Manifest request to "+r+" failed."));else{try{var e=JSON.parse(a.responseText)}catch(e){return void n(e)}t(e)}}})}(c).then(function(e){if(!e)return p("idle"),null;g={},E={},_=e.c,b=e.h,p("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});for(var n in h={},P)N(n);return"prepare"===f&&0===y&&0===v&&O(),t})}function N(e){_[e]?(g[e]=!0,v++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=S.p+""+e+"."+l+".hot-update.js",t.appendChild(n)}(e)):E[e]=!0}function O(){p("ready");var e=m;if(m=null,e)if(o)Promise.resolve().then(function(){return x(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(j(n));e.resolve(t)}}function x(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,a,r,o,c;function i(e){for(var t=[e],n={},a=t.slice().map(function(e){return{chain:[e],id:e}});a.length>0;){var r=a.pop(),l=r.id,c=r.chain;if((o=k[l])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:l};if(o.hot._main)return{type:"unaccepted",chain:c,moduleId:l};for(var s=0;s<o.parents.length;s++){var u=o.parents[s],i=k[u];if(i){if(i.hot._declinedDependencies[l])return{type:"declined",chain:c.concat([u]),moduleId:l,parentId:u};-1===t.indexOf(u)&&(i.hot._acceptedDependencies[l]?(n[u]||(n[u]=[]),d(n[u],[l])):(delete n[u],t.push(u),a.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];-1===e.indexOf(a)&&e.push(a)}}t=t||{};var m={},v=[],y={},E=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var g in h)if(Object.prototype.hasOwnProperty.call(h,g)){var w;c=j(g);var N=!1,O=!1,x=!1,D="";switch((w=h[g]?i(c):{type:"disposed",moduleId:g}).chain&&(D="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(N=new Error("Aborted because of self decline: "+w.moduleId+D));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(N=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+D));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(N=new Error("Aborted because "+c+" is not accepted"+D));break;case"accepted":t.onAccepted&&t.onAccepted(w),O=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),x=!0;break;default:throw new Error("Unexception type "+w.type)}if(N)return p("abort"),Promise.reject(N);if(O)for(c in y[c]=h[c],d(v,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,c)&&(m[c]||(m[c]=[]),d(m[c],w.outdatedDependencies[c]));x&&(d(v,[w.moduleId]),y[c]=E)}var C,M=[];for(a=0;a<v.length;a++)c=v[a],k[c]&&k[c].hot._selfAccepted&&M.push({module:c,errorHandler:k[c].hot._selfAccepted});p("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete P[e]}(e)});for(var A,I,H=v.slice();H.length>0;)if(c=H.pop(),o=k[c]){var T={},R=o.hot._disposeHandlers;for(r=0;r<R.length;r++)(n=R[r])(T);for(s[c]=T,o.hot.active=!1,delete k[c],delete m[c],r=0;r<o.children.length;r++){var U=k[o.children[r]];U&&((C=U.parents.indexOf(c))>=0&&U.parents.splice(C,1))}}for(c in m)if(Object.prototype.hasOwnProperty.call(m,c)&&(o=k[c]))for(I=m[c],r=0;r<I.length;r++)A=I[r],(C=o.children.indexOf(A))>=0&&o.children.splice(C,1);for(c in p("apply"),l=b,y)Object.prototype.hasOwnProperty.call(y,c)&&(e[c]=y[c]);var L=null;for(c in m)if(Object.prototype.hasOwnProperty.call(m,c)&&(o=k[c])){I=m[c];var q=[];for(a=0;a<I.length;a++)if(A=I[a],n=o.hot._acceptedDependencies[A]){if(-1!==q.indexOf(n))continue;q.push(n)}for(a=0;a<q.length;a++){n=q[a];try{n(I)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:I[a],error:e}),t.ignoreErrored||L||(L=e)}}}for(a=0;a<M.length;a++){var B=M[a];c=B.module,u=[c];try{S(c)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||L||(L=n),L||(L=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||L||(L=e)}}return L?(p("fail"),Promise.reject(L)):(p("idle"),new Promise(function(e){e(v)}))}var k={},P={0:0},D=[];function S(t){if(k[t])return k[t].exports;var n=k[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var a=0;a<e.length;a++)t._acceptedDependencies[e[a]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:w,apply:x,status:function(e){if(!e)return f;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:s[e]};return r=void 0,t}(t),parents:(i=u,u=[],i),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=k[e];if(!t)return S;var n=function(n){return t.hot.active?(k[n]?-1===k[n].parents.indexOf(e)&&k[n].parents.push(e):(u=[e],r=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),u=[]),S(n)},a=function(e){return{configurable:!0,enumerable:!0,get:function(){return S[e]},set:function(t){S[e]=t}}};for(var o in S)Object.prototype.hasOwnProperty.call(S,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,a(o));return n.e=function(e){return"ready"===f&&p("prepare"),y++,S.e(e).then(t,function(e){throw t(),e});function t(){y--,"prepare"===f&&(E[e]||N(e),0===y&&0===v&&O())}},n.t=function(e,t){return 1&t&&(e=n(e)),S.t(e,-2&t)},n}(t)),n.l=!0,n.exports}S.m=e,S.c=k,S.d=function(e,t,n){S.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},S.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.t=function(e,t){if(1&t&&(e=S(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(S.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)S.d(n,a,function(t){return e[t]}.bind(null,a));return n},S.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return S.d(t,"a",t),t},S.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},S.p="",S.h=function(){return l};var C=window.webpackJsonp=window.webpackJsonp||[],M=C.push.bind(C);C.push=t,C=C.slice();for(var A=0;A<C.length;A++)t(C[A]);var I=M;D.push(["./src/index.js",1]),n()}({"./src/App.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n("./node_modules/react/index.js"),o=s(r),l=(s(n("./node_modules/react-dom/index.js")),n("./node_modules/react-router-dom/es/index.js")),c=s(n("./node_modules/axios/index.js"));s(n("./src/components/Nav.js"));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={contacts:[]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){var e=this;console.log(c.default),c.default.get("http://localhost:3000/api/user").then(function(t){e.setState({contacts:t.data}),console.log(e.state.contacts)})}},{key:"delete",value:function(e){var t=this;console.log(e),c.default.post("http://localhost:3000/api/user/"+e).then(function(e){alert("data terhapus"),t.componentDidMount()}).catch(function(e){alert("terjadi kesalahan")})}},{key:"render",value:function(){var e=this;return o.default.createElement("div",{className:"container"},o.default.createElement("div",{className:"panel panel-default"},o.default.createElement("div",{className:"panel-heading"},o.default.createElement("h5",{className:"panel-title"},"User List")),o.default.createElement("div",{className:"panel-body"},o.default.createElement("table",{className:"table table-stripe"},o.default.createElement("thead",null,o.default.createElement("tr",null,o.default.createElement("th",null,"User ID"),o.default.createElement("th",null,"Name"),o.default.createElement("th",null,"Email"),o.default.createElement("th",null,"PhoneNumber"),o.default.createElement("th",null,"Address"),o.default.createElement("th",null,"Actions"))),o.default.createElement("tbody",null,this.state.contacts.map(function(t){return o.default.createElement("tr",null,o.default.createElement("td",null,t.userID),o.default.createElement("td",null,t.name),o.default.createElement("td",null,t.email),o.default.createElement("td",null,t.phoneNumber),o.default.createElement("td",null,t.address),o.default.createElement("td",null,o.default.createElement(l.Link,{to:"/user/edit/"+t.userID},o.default.createElement("button",{className:"btn btn-danger"},"Edit")),o.default.createElement("button",{onClick:e.delete.bind(e,t.userID),className:"btn btn-danger"},"Delete")))}))))))}}]),t}();t.default=u},"./src/components/Create.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n("./node_modules/react/index.js"),o=c(r),l=(c(n("./node_modules/react-dom/index.js")),c(n("./node_modules/axios/index.js")));n("./node_modules/react-router-dom/es/index.js");function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={name:"",email:"",phoneNumber:"",address:""},e.name=e.name.bind(e),e.email=e.email.bind(e),e.phoneNumber=e.phoneNumber.bind(e),e.address=e.address.bind(e),e.onSubmit=e.onSubmit.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"name",value:function(e){this.setState({name:e.target.value})}},{key:"email",value:function(e){this.setState({email:e.target.value})}},{key:"phoneNumber",value:function(e){this.setState({phoneNumber:e.target.value})}},{key:"address",value:function(e){this.setState({address:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),console.log(e);var n=this.state,a=n.name,r=n.email,o=n.phoneNumber,c=n.address;l.default.post("http://localhost:3000/api/user/add",{name:a,email:r,phoneNumber:o,address:c}).then(function(e){t.props.history.push("/")}).catch(function(e){alert("terjadi kesalahan")})}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,a=e.phoneNumber,r=e.address;return o.default.createElement("div",{className:"container"},o.default.createElement("div",{className:"panel panel-default"},o.default.createElement("div",{className:"panel-heading"},o.default.createElement("h5",{className:"panel-title"},"Create User")),o.default.createElement("div",{className:"panel-body"},o.default.createElement("form",{onSubmit:this.onSubmit},o.default.createElement("div",{className:"form-group"},o.default.createElement("label",{for:"isbn"},"Name:"),o.default.createElement("input",{type:"text",className:"form-control",name:"name",onChange:this.name,value:t,placeholder:"Name"})),o.default.createElement("div",{className:"form-group"},o.default.createElement("label",{for:"title"},"Email:"),o.default.createElement("input",{type:"text",className:"form-control",name:"email",onChange:this.email,value:n,placeholder:"email"})),o.default.createElement("div",{className:"form-group"},o.default.createElement("label",{for:"author"},"Phone Number:"),o.default.createElement("input",{type:"text",className:"form-control",name:"phoneNumber",onChange:this.phoneNumber,value:a,placeholder:"phoneNumber"})),o.default.createElement("div",{className:"form-group"},o.default.createElement("label",{for:"published_date"},"Address:"),o.default.createElement("input",{type:"text",className:"form-control",name:"address",onChange:this.address,value:r,placeholder:"address"})),o.default.createElement("button",{type:"submit",className:"btn btn-default"},"Submit")))))}}]),t}();t.default=s},"./src/components/Edit.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n("./node_modules/react/index.js"),o=c(r),l=c(n("./node_modules/axios/index.js"));n("./node_modules/react-router-dom/es/index.js");function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={contact:{}},n.name=n.name.bind(n),n.email=n.email.bind(n),n.phoneNumber=n.phoneNumber.bind(n),n.address=n.address.bind(n),n.onSubmit=n.onSubmit.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){var e=this;console.log("kkkk",this.props.match.params.id),l.default.get("http://localhost:3000/api/user/"+this.props.match.params.id).then(function(t){e.setState({contact:t.data}),console.log(e.state.contact)})}},{key:"name",value:function(e){var t=this.state.contact;t.name=e.target.value,this.setState({contact:t})}},{key:"email",value:function(e){var t=this.state.contact;t.email=e.target.value,this.setState({contact:t})}},{key:"phoneNumber",value:function(e){var t=this.state.contact;t.phoneNumber=e.target.value,this.setState({contact:t})}},{key:"address",value:function(e){var t=this.state.contact;t.address=e.target.value,this.setState({contact:t})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var n=this.state.contact,a=n.name,r=n.email,o=n.phoneNumber,c=n.address;l.default.post("http://localhost:3000/api/user/edit/"+this.props.match.params.id,{name:a,email:r,phoneNumber:o,address:c}).then(function(e){t.props.history.push("/")}).catch(function(e){alert("Terjadi Kesalahan")})}},{key:"render",value:function(){return o.default.createElement("div",{className:"container"},o.default.createElement("div",{className:"panel panel-default"},o.default.createElement("div",{className:"panel-heading"},o.default.createElement("h5",{className:"panel-title"},"EDIT Users")),o.default.createElement("div",{className:"panel-body"},o.default.createElement("form",{onSubmit:this.onSubmit},o.default.createElement("div",{className:"form-group"},o.default.createElement("label",{for:"name"},"Name:"),o.default.createElement("input",{type:"text",className:"form-control",name:"name",value:this.state.contact.name,onChange:this.name,placeholder:"Name"})),o.default.createElement("div",{className:"form-group"},o.default.createElement("label",{for:"title"},"Address:"),o.default.createElement("input",{type:"text",className:"form-control",name:"email",value:this.state.contact.email,onChange:this.email,placeholder:"Email"})),o.default.createElement("div",{className:"form-group"},o.default.createElement("label",{for:"author"},"City:"),o.default.createElement("input",{type:"text",className:"form-control",name:"phoneNumber",value:this.state.contact.phoneNumber,onChange:this.phoneNumber,placeholder:"Phone Number"})),o.default.createElement("div",{className:"form-group"},o.default.createElement("label",{for:"published_date"},"Phone Number:"),o.default.createElement("input",{type:"text",className:"form-control",name:"address",value:this.state.contact.address,onChange:this.address,placeholder:"Address"})),o.default.createElement("button",{type:"submit",className:"btn btn-default"},"Update")))))}}]),t}();t.default=s},"./src/components/Nav.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n("./node_modules/react/index.js"),o=s(r),l=s(n("./node_modules/axios/index.js")),c=n("./node_modules/react-router-dom/es/index.js");function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={contact:{}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){var e=this;l.default.get("http://localhost:3030/api/user"+this.props.match.params.id).then(function(t){e.setState({contact:t.data}),console.log(e.state.contact)})}},{key:"delete",value:function(e){var t=this;console.log(e),l.default.delete("/contacts/"+e).then(function(e){t.props.history.push("/")})}},{key:"goAdd",value:function(){this.props.history.push("/user/create")}},{key:"goList",value:function(){this.props.history.push("/user/list")}},{key:"render",value:function(){return o.default.createElement("div",{className:"Nav"},o.default.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},o.default.createElement("a",{className:"navbar-brand",href:"#"},"Navbar"),o.default.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},o.default.createElement("span",{className:"navbar-toggler-icon"})),o.default.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},o.default.createElement("ul",{className:"navbar-nav"},o.default.createElement("li",{className:"nav-item active"},o.default.createElement(c.Link,{className:"nav-link",to:"user/create"},"Create User")),o.default.createElement("li",{className:"nav-item"},o.default.createElement(c.Link,{className:"nav-link",to:"user/list"},"Users"))))))}}]),t}();t.default=u},"./src/components/Show.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n("./node_modules/react/index.js"),o=s(r),l=s(n("./node_modules/axios/index.js")),c=n("./node_modules/react-router-dom/es/index.js");function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={contact:{}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){var e=this;l.default.get("http://localhost:3030/api/user"+this.props.match.params.id).then(function(t){e.setState({contact:t.data}),console.log(e.state.contact)})}},{key:"delete",value:function(e){var t=this;console.log(e),l.default.delete("/contacts/"+e).then(function(e){t.props.history.push("/")})}},{key:"render",value:function(){return o.default.createElement("div",{class:"container"},o.default.createElement("div",{class:"panel panel-default"},o.default.createElement("div",{class:"panel-heading"},o.default.createElement("h3",{class:"panel-title"},"Contact Details")),o.default.createElement("div",{class:"panel-body"},o.default.createElement("h4",null,o.default.createElement(c.Link,{to:"/"},o.default.createElement("span",{class:"glyphicon glyphicon-th-list","aria-hidden":"true"})," Contacts List")),o.default.createElement("dl",null,o.default.createElement("dt",null,"Name:"),o.default.createElement("dd",null,this.state.contact.name),o.default.createElement("dt",null,"Address:"),o.default.createElement("dd",null,this.state.contact.address),o.default.createElement("dt",null,"City:"),o.default.createElement("dd",null,this.state.contact.city),o.default.createElement("dt",null,"Phone Number:"),o.default.createElement("dd",null,this.state.contact.phone),o.default.createElement("dt",null,"Email Address:"),o.default.createElement("dd",null,this.state.contact.email)),o.default.createElement(c.Link,{to:"/edit/"+this.state.contact.id,class:"btn btn-success"},"Edit")," ",o.default.createElement("button",{onClick:this.delete.bind(this,this.state.contact.id),class:"btn btn-danger"},"Delete"))))}}]),t}();t.default=u},"./src/index.js":function(e,t,n){"use strict";n("./node_modules/babel-polyfill/lib/index.js");var a=d(n("./node_modules/react/index.js"));d(n("./node_modules/bootstrap/dist/css/bootstrap.min.css")),d(n("./src/styles/styles.scss"));n("./node_modules/bootstrap/dist/js/bootstrap.js");var r=d(n("./node_modules/react-dom/index.js")),o=n("./node_modules/react-router-dom/es/index.js"),l=d(n("./src/App.js")),c=d(n("./src/components/Edit.js")),s=d(n("./src/components/Create.js")),u=d(n("./src/components/Show.js")),i=d(n("./src/components/Nav.js"));function d(e){return e&&e.__esModule?e:{default:e}}r.default.render(a.default.createElement(o.BrowserRouter,null,a.default.createElement("div",null,a.default.createElement(o.Route,{exact:!0,path:"/",component:i.default}),a.default.createElement(o.Route,{path:"/user/list",component:l.default}),a.default.createElement(o.Route,{path:"/user/edit/:id",component:c.default}),a.default.createElement(o.Route,{path:"/user/create",component:s.default}),a.default.createElement(o.Route,{path:"/user/show/:id",component:u.default}))),document.getElementById("app"))},"./src/styles/styles.scss":function(e,t){}});