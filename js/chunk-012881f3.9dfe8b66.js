(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-012881f3"],{"60a5":function(t,e,r){"use strict";var a=r("950c"),n=r.n(a);n.a},"615b":function(t,e,r){},"8da2":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-main",{staticClass:"bg"},[r("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"10",sm:"8",md:"4"}},[r("div",{staticClass:" text-center"},[r("img",{staticClass:"imglogin",attrs:{src:"https://www.img.in.th/images/baec9e10112fc5b2253841c3099c9e42.png",alt:""}}),r("h2",{staticClass:"fcw"},[t._v("ยินดีต้อนรับเข้าสู่ระบบ")])]),r("div",{staticClass:"mt-6"},[r("v-text-field",{attrs:{rounded:"",solo:"",label:"ชื่อผู้ใช้",name:"login","prepend-inner-icon":"mdi-account",type:"text"}}),r("v-text-field",{attrs:{rounded:"",solo:"",id:"password",label:"รหัสผ่าน",name:"password","prepend-inner-icon":"mdi-lock",type:"password"}}),r("v-spacer"),r("v-btn",{staticClass:"width",attrs:{rounded:"",dark:"",large:"",color:"green"},on:{click:function(e){return t.$router.push("/user/home")}}},[r("v-icon",[t._v("mdi-login")]),r("h1",[t._v("เข้าสู่ระบบ")])],1)],1),r("div",[r("v-card-title",{attrs:{"primary-title":""}},[r("v-spacer"),r("v-btn",{attrs:{depressed:"",rounded:"",color:"error"},on:{click:function(e){return t.$router.push("forgotpassword")}}},[t._v("ลืมรหัสผ่าน")])],1)],1)])],1),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"10",sm:"8",md:"4"}},[r("v-divider",{staticClass:"pa",attrs:{color:"white"}}),r("div",[r("v-card-title",{attrs:{"primary-title":""}},[r("v-btn",{attrs:{rounded:"",depressed:"",color:"indigo",dark:""},on:{click:function(e){return t.$router.push("register")}}},[t._v("สมัครสมาชิก")]),r("v-spacer"),r("v-btn",{attrs:{depressed:"",rounded:""},on:{click:function(e){return t.$router.push("contact")}}},[t._v("ติดต่อแอดมิน")])],1)],1)],1)],1)],1)],1)],1)},n=[],s=(r("96cf"),r("1da1")),i={name:"Root",components:{},props:{},data:function(){return{txt:"Hello World"}},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),beforeRouteEnter:function(t,e,r){return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r();case 1:case"end":return t.stop()}}),t)})))()},computed:{},methods:{load:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}},c=i,o=(r("60a5"),r("2877")),d=r("6544"),l=r.n(d),u=r("7496"),p=r("8336"),v=r("99d9"),f=r("62ad"),h=r("a523"),m=r("ce7e"),g=r("132d"),b=r("f6c4"),w=r("0fd9"),k=r("2fa4"),_=r("8654"),C=Object(o["a"])(c,a,n,!1,null,"1707d7bd",null);e["default"]=C.exports;l()(C,{VApp:u["a"],VBtn:p["a"],VCardTitle:v["b"],VCol:f["a"],VContainer:h["a"],VDivider:m["a"],VIcon:g["a"],VMain:b["a"],VRow:w["a"],VSpacer:k["a"],VTextField:_["a"]})},"950c":function(t,e,r){},"99d9":function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return o}));var a=r("b0af"),n=r("80d2"),s=Object(n["i"])("v-card__actions"),i=Object(n["i"])("v-card__subtitle"),c=Object(n["i"])("v-card__text"),o=Object(n["i"])("v-card__title");a["a"]},b0af:function(t,e,r){"use strict";r("0481"),r("4069"),r("a9e3");var a=r("5530"),n=(r("615b"),r("10d2")),s=r("297c"),i=r("1c87"),c=r("58df");e["a"]=Object(c["a"])(s["a"],i["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-card":!0},i["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n["a"].options.computed.classes.call(this))},styles:function(){var t=Object(a["a"])({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=s["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots["default"]])}})}}]);
//# sourceMappingURL=chunk-012881f3.9dfe8b66.js.map