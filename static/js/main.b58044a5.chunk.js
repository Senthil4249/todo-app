(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n(5),a=n.n(i),c=(n(4),n(6)),d=n(7),r=n(2),l=n(9),h=n(8),s=[{id:1,text:"Take out the trash",completed:!0},{id:2,text:"Grocery shopping",completed:!1},{id:3,text:"Clean fish tank",completed:!1},{id:4,text:"Mow the lawn",completed:!1},{id:5,text:"Learn React",completed:!0},{id:6,text:"Take Rest",completed:!1}],u=n(0);var p=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"checkbox",checked:e.item.completed,onChange:function(){return e.handleChange(e.item.id)},name:e.item.id}),Object(u.jsx)("label",{style:e.item.completed?{fontStyle:"italic",color:"grey",textDecoration:"line-through"}:null,for:e.item.id,children:e.item.text})]})},m=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState((function(e){return{todoObj:e.todoObj.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))}}))},e.state={todoObj:s},e.handleChange=e.handleChange.bind(Object(r.a)(e)),e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state.todoObj.map((function(t){return Object(u.jsx)(p,{item:t,handleChange:e.handleChange},t.id)}));return Object(u.jsx)("div",{className:"mainDiv",children:t})}}]),n}(o.Component);a.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))},4:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.b58044a5.chunk.js.map