(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{141:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"URL",(function(){return U}));var c,s,r,i=a(0),o=a(28),l=a.n(o),j=a(57),u=(a(141),a(20)),b=a(43),d=a(240),O=a(243),h=a(44),m=a.p+"static/media/mark.208cf855.png",p=a(49),g=a.n(p),x=a(6),f=d.a.Header,w=d.a.Footer,y=d.a.Content,v=Object(h.a)(f)(c||(c=Object(b.a)(["\n    color: #012F48;\n"]))),C=Object(h.a)(O.a)(s||(s=Object(b.a)(["\n    float : right;\n    padding : 0px;\n"]))),E=Object(h.a)(O.a.Item)(r||(r=Object(b.a)(["\n    margin : 30px;\n    float : right;\n"]))),S=function(){return Object(x.jsxs)(d.a,{className:"layout",children:[Object(x.jsxs)(v,{children:[Object(x.jsx)("img",{src:m,width:"30px"}),Object(x.jsxs)(C,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[""],children:[Object(x.jsx)(E,{children:"Home"}),Object(x.jsx)(E,{children:"MyPage"}),Object(x.jsx)(E,{children:"Create"})]})]}),Object(x.jsx)(y,{style:{padding:"0 50px"}}),Object(x.jsx)(w,{style:{textAlign:"center"},children:"Ant Design ?2018 Created by Ant UED"})]})},I=a(60),_=a(45),k=a(84),P="login_user";var T,D,F,N=a(241),L=a(242),q=a(134),U="http://3.35.139.141:3000",z=(a(231),function(e){var t;Object(i.useEffect)((function(){g.a.post(n).then((function(e){return console.log(e.data)}))}),[]);var a=Object(k.b)(),c=Object(i.useState)(""),s=Object(_.a)(c,2),r=s[0],o=s[1],l=Object(i.useState)(""),j=Object(_.a)(l,2),u=j[0],b=j[1];return Object(x.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",backgroundColor:"#011F48",fontColor:"white"},children:[Object(x.jsx)("img",{src:m,width:"250",height:"300","mx-auto":!0}),Object(x.jsxs)(N.a,{name:"basic",font:{color:"white"},labelCol:{span:10},wrapperCol:{span:20},initialValues:{remember:!0},autoComplete:"off",children:[Object(x.jsx)(N.a.Item,{label:"Email",name:"Email",rules:[{required:!0,message:"Please input your Email!"}],children:Object(x.jsx)(L.a,{type:"email",value:r,onChange:function(e){o(e.currentTarget.value)},size:50})}),Object(x.jsx)(N.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(x.jsx)(L.a.Password,(t={type:"password",size:"large",value:u},Object(I.a)(t,"size",50),Object(I.a)(t,"onChange",(function(e){b(e.currentTarget.value)})),t))}),Object(x.jsx)(N.a.Item,{wrapperCol:{offset:12,span:16},children:Object(x.jsx)(q.a,{type:"text",htmlType:"submit",onClick:function(e){var t;e.preventDefault(),a((t={email:r,pw:u},{type:"LOGIN_USER",payload:g.a.post("/api/users/login",t).then((function(e){return e.data}))})).then((function(e){console.log(e)}))},children:Object(x.jsx)("p",{style:{color:"white"},children:"Login"})})})]})]})});var R=Object(h.a)(N.a.Item)(T||(T=Object(b.a)(["\n    color: white;\n"]))),X=(Object(h.a)(N.a.Item.name)(D||(D=Object(b.a)(["\n    color: white;\n"]))),Object(h.a)(q.a)(F||(F=Object(b.a)(["\n    color: white;\n"]))),function(){var e=N.a.useForm(),t=Object(_.a)(e,1)[0],a=Object(i.useState)(""),n=Object(_.a)(a,2),c=n[0],s=n[1],r=Object(i.useState)(""),o=Object(_.a)(r,2),l=o[0],j=o[1],u=Object(i.useState)(""),b=Object(_.a)(u,2),d=b[0],O=b[1];return Object(x.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",background:"#011F48",flexDirection:"column"},children:[Object(x.jsx)("img",{src:m,width:"250",height:"300","mx-auto":!0}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)(N.a,{form:t,name:"register",children:[Object(x.jsx)(R,{Sname:"email",label:"E-mail",rules:[{type:"email",message:"@sm.ac.kr"},{required:!0,message:"Please input your E-mail!"}],children:Object(x.jsx)(L.a,{value:l,onChange:function(e){j(e.currentTarget.value)}})}),Object(x.jsx)(R,{Sname:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:Object(x.jsx)(L.a.Password,{value:d,onChange:function(e){O(e.currentTarget.value)}})}),Object(x.jsx)(R,{Sname:"nickname",label:"Nickname",tooltip:"What do you want others to call you?",rules:[{required:!0,message:"Please input your nickname!",whitespace:!0}],children:Object(x.jsx)(L.a,{value:c,onChange:function(e){s(e.currentTarget.value)}})}),Object(x.jsx)(N.a.Item,{wrapperCol:{offset:8,span:16},children:Object(x.jsx)(q.a,{type:"text",htmlType:"submit",onClick:function(e){e.preventDefault(),console.log("Nickname",c),console.log("Email",l),console.log("Password",d)},children:Object(x.jsx)("p",{style:{color:"white"},children:"Submit"})})})]})]})}),A=function(){return Object(x.jsx)(j.a,{basename:"/deploy_NoonsongItem",children:Object(x.jsxs)(u.c,{children:[Object(x.jsx)(u.a,{exact:!0,path:"/landing",component:S}),Object(x.jsx)(u.a,{exact:!0,path:"/",component:z}),Object(x.jsx)(u.a,{exact:!0,path:"/register",component:X})]})})};var V=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(A,{})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,244)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))},H=(a(233),a(61)),J=a(132),G=a(131),K=a.n(G),M=a(99),W=Object(H.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(M.a)(Object(M.a)({},e),{},{loginSuccess:t.payload});default:return e}}}),Q=Object(H.a)(K.a,J.a)(H.c);l.a.render(Object(x.jsx)(k.a,{store:Q(W,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),children:Object(x.jsx)(j.a,{children:Object(x.jsx)(V,{})})}),document.getElementById("root")),B()}},[[238,1,2]]]);
//# sourceMappingURL=main.b36a6634.chunk.js.map