(this.webpackJsonpreact_employee_directory=this.webpackJsonpreact_employee_directory||[]).push([[0],{24:function(e,t,s){},25:function(e,t,s){},28:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},50:function(e,t,s){"use strict";s.r(t);var n=s(2),r=s.n(n),c=s(13),a=s.n(c),o=(s(24),s(25),s(0));var l=function(){return Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsx)("header",{className:"row justify-content-center",children:Object(o.jsx)("h1",{className:"col-12",children:"Employee Directory"})})})},i=s(4),u=s.n(i),h=s(14),j=s(15),d=s(16),b=s(19),m=s(18);s(28);var f=function(e){return Object(o.jsx)("form",{className:"search",children:Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"employee"}),Object(o.jsx)("input",{value:e.search,onChange:e.handleInputChange,name:"employee",type:"text",className:"form-control search-width",placeholder:"Type in an Employee Name"})]})})},O=s(17),p=s.n(O),x=function(){return p.a.get("https://randomuser.me/api/?results=50")};s(47),s(48);var v=function(e){return Object(o.jsx)("tbody",{children:e.results.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("img",{src:e.picture.thumbnail,alt:e.gender})}),Object(o.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(o.jsx)("td",{children:e.phone}),Object(o.jsx)("td",{children:e.email}),Object(o.jsx)("td",{children:e.dob.date})]},e.login.sha256)}))})};var y=function(e){return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("table",{className:"table table-striped table-hover",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"Image"}),Object(o.jsxs)("th",{scope:"col",className:"sortByName",onClick:function(){return e.sortBy()},children:["Name ",Object(o.jsx)("i",{className:"fas fa-arrows-alt-v"})]}),Object(o.jsx)("th",{scope:"col",children:"Phone"}),Object(o.jsx)("th",{scope:"col",children:"Email"}),Object(o.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(o.jsx)(v,{results:e.searchResults})]})})},g=function(e){Object(b.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(j.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={search:"",results:[],sortResults:[],order:"",error:""},e.handleInputChange=function(){var t=Object(h.a)(u.a.mark((function t(s){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({search:s.target.value});case 2:return t.next=4,e.sortResultsName(e.state.search);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.sortBy=function(){if(""===e.state.order||"descending"===e.state.order){e.setState({order:"ascending"});var t=e.state.results.sort((function(e,t){return e.name.last.toLowerCase()<t.name.last.toLowerCase()?-1:0}));e.setState({sortResults:t})}else if("ascending"===e.state.order){e.setState({order:"descending"});var s=e.state.results.sort((function(e,t){return e.name.last.toLowerCase()>t.name.last.toLowerCase()?-1:0}));e.setState({sortResults:s})}},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;x().then((function(t){e.setState({results:t.data.results}),e.sortResultsName(e.state.search)})).catch((function(e){return console.log(e)}))}},{key:"sortResultsName",value:function(e){if(this.state.search.length){var t=this.state.results.filter((function(t){return t.name.first.toLowerCase().includes(e)||t.name.last.toLowerCase().includes(e)}));this.setState({sortResults:t})}else this.setState({sortResults:this.state.results})}},{key:"render",value:function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row justify-content-center",children:[Object(o.jsx)(f,{handleInputChange:this.handleInputChange}),Object(o.jsx)(y,{searchResults:this.state.sortResults,sortBy:this.sortBy})]})})}}]),s}(n.Component);var N=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{}),Object(o.jsx)(g,{})]})},C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,51)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),n(e),r(e),c(e),a(e)}))};s(49);a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root")),C()}},[[50,1,2]]]);
//# sourceMappingURL=main.7afda69d.chunk.js.map