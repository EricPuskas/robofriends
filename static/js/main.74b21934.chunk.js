(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=n(1),s=n(2),l=n(4),h=n(3),u=n(5),m=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-light-purple dib br2 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?size=200x200"),alt:"robot"}),r.a.createElement("div",null,r.a.createElement("h2",{className:"f4"},t),r.a.createElement("p",null,n)))},d=function(e){var t=e.robots;return t.map(function(e,n){return r.a.createElement(m,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email})})},f=function(e){var t=e.searchChange;e.searchfield;return r.a.createElement("div",null,r.a.createElement("input",{onChange:t,className:"pa3 ba b--blue bg-lightest-blue ma3",type:"search",placeholder:"search here"}))},b=(n(14),function(e){return r.a.createElement("div",{className:"scroll"},e.children)}),p=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).state={hasError:!1},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h2",{className:"white f2"}," Something went wrong... "):this.props.children}}]),t}(a.Component),v=(n(16),n(18),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={searchfield:"",robots:[]},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this,t=this.state.robots.filter(function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())});return 0===this.state.robots.length?r.a.createElement("h1",{className:"tc",style:{marginTop:"45vH"}},"Loading..."):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Robofriends"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(p,null,r.a.createElement(d,{robots:t}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(20)}},[[8,2,1]]]);
//# sourceMappingURL=main.74b21934.chunk.js.map