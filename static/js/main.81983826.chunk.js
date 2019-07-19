(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(25)},20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(10),o=n.n(l),c=n(8),i=n.n(c),s=n(11),u=n(1),d=n(12),m=n(3),h=n(4),p=n(6),f=n(5),g=n(7),S=(n(20),n(21),n(22)),E=function(e){var t=e.people,n=e.handlePersonRowClick,r=e.personRowSelectedId,l=e.personRowSelected,o=function(e){return S({"born-before-1650":e.born<1650,"died-after-1800":e.died>1800,"middleage-father":e.children&&"m"===e.sex&&e.age<50})},c=function(e,t){return S({person:!0,"person--selected":e.id===r&&l,"person--female":"f"===e.sex,"person--mother":e.children&&"f"===e.sex,"person--male":"m"===e.sex,"person--father":e.children&&"m"===e.sex})},i=t.map(function(e,t,r){return a.a.createElement("tr",{key:e.id+e.name,className:c(e),onClick:function(){return n(e.id)}},a.a.createElement("td",null,e.id),a.a.createElement("td",{className:o(e)},e.name),a.a.createElement("td",null,e.sex),a.a.createElement("td",null,e.born),a.a.createElement("td",null,e.died),a.a.createElement("td",null,e.father),a.a.createElement("td",null,e.mother),a.a.createElement("td",{className:e.age>65?"long-life":"so-short-life"},e.age),a.a.createElement("td",{className:"person--lived-in-".concat(e.century)},e.century),a.a.createElement("td",null,e.children))});return a.a.createElement("tbody",null,i)},b=(n(23),function(e){return a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{onClick:function(){return e.handleSort("id")},className:"sorting--cell"},"id \u2193\u2191"),a.a.createElement("th",{onClick:function(){return e.handleSort("name")},className:"sorting--cell"},"name \u2193\u2191"),a.a.createElement("th",{onClick:function(){return e.handleSort("sex")},className:"sorting--cell"},"sex \u2193\u2191"),a.a.createElement("th",{onClick:function(){return e.handleSort("born")},className:"sorting--cell"},"born \u2193\u2191"),a.a.createElement("th",{onClick:function(){return e.handleSort("died")},className:"sorting--cell"},"died \u2193\u2191"),a.a.createElement("th",null,"father"),a.a.createElement("th",null,"mother"),a.a.createElement("th",{onClick:function(){return e.handleSort("age")},className:"sorting--cell"},"age \u2193\u2191"),a.a.createElement("th",{onClick:function(){return e.handleSort("century")},className:"sorting--cell"},"century \u2193\u2191"),a.a.createElement("th",null,"children")))}),w=(n(24),function(e){return a.a.createElement("table",{className:"PeopleTable"},a.a.createElement(b,{handleSort:e.handleSort}),a.a.createElement(E,{people:e.people,handlePersonRowClick:e.handlePersonRowClick,personRowSelectedId:e.personRowSelectedId,personRowSelected:e.personRowSelected}))}),v=n(2),N=function(e){function t(){var e,n;Object(m.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",sex:!1,born:"",died:"",mother:"",father:""},n.handleNewPerson=function(e){var t=e.target.name,r=e.target.value;switch(t){case"name":case"mother":case"father":r=r.replace(/[^A-Za-z ]/,"");break;case"born":n.setState({father:"",mother:""}),r=r.replace(/\D/g,"");break;default:r=r.replace(/\D/g,"")}n.setState(Object(v.a)({},t,r))},n.getParrents=function(e,t,n){return t.filter(function(t){return t.sex===e&&t.born<n&&t.died>n}).map(function(e){return a.a.createElement("option",{key:e.id+e.name,value:e.name},e.name)})},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.people,n=e.handleNewPersonSubmit,r=this.state,l=r.name,o=r.sex,c=r.born,i=r.died,s=r.father,u=r.mother,d=this.getParrents("m",t,c),m=this.getParrents("f",t,c);return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:n},a.a.createElement("input",{type:"text",name:"name",placeholder:"name",maxLength:"60",value:l,onChange:this.handleNewPerson,required:!0}),a.a.createElement("label",{htmlFor:"femaleRadio"},a.a.createElement("input",{name:"sex",type:"radio",value:"f",required:!0,onChange:this.handleNewPerson,id:"femaleRadio"}),"Female"),a.a.createElement("label",{htmlFor:"maleRadio"},a.a.createElement("input",{name:"sex",type:"radio",value:"m",required:!0,onChange:this.handleNewPerson,id:"maleRadio"}),"Male"),a.a.createElement("input",{name:"born",type:"text",placeholder:"born year",maxLength:"4",minLength:"4",required:!0,value:c,onChange:this.handleNewPerson}),a.a.createElement("input",{name:"died",type:"text",placeholder:"died year",maxLength:"4",minLength:"4",required:!0,value:i,onChange:this.handleNewPerson}),a.a.createElement("input",{name:"father",type:"text",placeholder:"father",required:!0,value:s,onChange:this.handleNewPerson}),a.a.createElement("select",{name:"father",value:s,onChange:this.handleNewPerson},a.a.createElement("option",{hidden:!0},"Selet Father"),d),a.a.createElement("input",{name:"mother",type:"text",placeholder:"mother",value:u,required:!0,onChange:this.handleNewPerson}),a.a.createElement("select",{name:"mother",value:u,onChange:this.handleNewPerson},a.a.createElement("option",{hidden:!0},"Selet Mother"),m),a.a.createElement("button",{type:"submit"},"Add New Person")),a.a.createElement("p",null,"Name:",l),a.a.createElement("p",null,"Sex:",o),a.a.createElement("p",null,"Born:",c),a.a.createElement("p",null,"Died:",i),a.a.createElement("p",null,"Father:",s),a.a.createElement("p",null,"Mother:",u))}}]),t}(a.a.Component),y=function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json").then(function(e){return e.json()})},C=function(e){function t(){var e,n;Object(m.a)(this,t);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={peopleFromServer:[],people:[],filterInputValue:"",sortfieldName:"",toggleNameSortOrder:1,personRowSelected:!1,personRowSelectedId:0,errorMessage:""},n.addKeysToPersonInArr=function(e){return e.map(function(e,t,r){return Object(d.a)({},e,{id:t+1,age:e.died-e.born,century:n.getCentury(e.died),children:n.getChildrenString(e,r)})})},n.getCentury=function(e){return Math.ceil(e/100)},n.getChildrenString=function(e,t){return t.filter(function(t){return t.father===e.name||t.mother===e.name}).map(function(e){return e.name}).join(", ")},n.isArrIncludeSubstr=function(e,t){return e=e.join(""),t=t.trim(),!!e&&e.toLowerCase().includes(t.toLowerCase())},n.sortingFunction=function(e,t,n){if(t)switch(typeof e[0][t]){case"string":return function(e,r){return n*e[t].localeCompare(r[t])};case"number":return function(e,r){return n*(e[t]-r[t])};default:return}},n.filteredSorteredPeople=function(e,t,r,a){return e.filter(function(e){return n.isArrIncludeSubstr([e.name,e.mother,e.father],t)}).sort(n.sortingFunction(e,r,a))},n.handleFilterInput=function(e){var t=e.target.value;n.setState(function(e){return{people:n.filteredSorteredPeople(Object(u.a)(e.peopleFromServer),t,e.sortfieldName,-e.toggleNameSortOrder),filterInputValue:t}})},n.handleSort=function(e){n.setState(function(t){return{people:n.filteredSorteredPeople(Object(u.a)(t.peopleFromServer),t.filterInputValue,e,t.toggleNameSortOrder),toggleNameSortOrder:-t.toggleNameSortOrder,sortfieldName:e}})},n.handlePersonRowClick=function(e){n.setState({personRowSelectedId:e}),n.state.personRowSelectedId===e?n.setState(function(e){return{personRowSelected:!e.personRowSelected}}):n.state.personRowSelectedId!==e&&n.setState({personRowSelected:!0})},n.handleNewPersonSubmit=function(e){e.preventDefault();var t={name:e.target[0].value,sex:e.target[1].checked?"f":"m",born:e.target[3].value,died:e.target[4].value,mother:e.target[5].value,father:e.target[6].value},r=t.died-t.born;r<0||r>150?n.setState({errorMessage:"Incorrect Age, or to much or not enough"}):n.setState(function(e){return{errorMessage:"",peopleFromServer:n.addKeysToPersonInArr([].concat(Object(u.a)(e.peopleFromServer),[t])),people:n.addKeysToPersonInArr([].concat(Object(u.a)(e.people),[t]))}})},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,n=this.addKeysToPersonInArr(t),this.setState({peopleFromServer:n,people:n});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.people,n=e.errorMessage,r=e.filterInputValue,l=e.personRowSelectedId,o=e.personRowSelected;return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"People table",t.length),a.a.createElement("h2",{className:"error-message"},n),a.a.createElement(N,{handleNewPersonSubmit:this.handleNewPersonSubmit,people:t}),a.a.createElement("input",{type:"text",placeholder:"Filter by Name, Mother of Father",value:r,onChange:this.handleFilterInput}),a.a.createElement(w,{people:t,handleSort:this.handleSort,handlePersonRowClick:this.handlePersonRowClick,personRowSelectedId:l,personRowSelected:o}))}}]),t}(a.a.Component);o.a.render(a.a.createElement(C,{test:123}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.81983826.chunk.js.map