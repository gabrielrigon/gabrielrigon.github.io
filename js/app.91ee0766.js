(function(t){function e(e){for(var r,i,l=e[0],c=e[1],u=e[2],f=0,p=[];f<l.length;f++)i=l[f],a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);s&&s(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var s=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},1888:function(t,e,n){"use strict";var r=n("e915"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("AboutMe"),n("Skills"),n("Interests"),n("Contact")],1)},o=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-me"},[n("h1",[t._v("Gabriel Rigon")]),n("h2",[t._v("About me")]),n("p",[n("strong",[t._v("\n      \"I'm\n      "),n("a",{staticClass:"normal-text",attrs:{href:"http://batman.com",target:"_blank",tabindex:"-1"}},[t._v("Batman")]),t._v('!"\n    ')]),t._v(" hahaha, I'm kidding... or not!?\n    "),n("br"),n("br"),t._v("I love to code, technology, pizza and\n    "),n("a",{staticClass:"normal-text",attrs:{href:"https://www.youtube.com/watch?v=TRqiFPpw2fY",target:"_blank",tabindex:"-1"}},[t._v("rock and roll")]),t._v(" 🤘🏼\n  ")])])}],c={name:"AboutMe"},u=c,s=(n("1888"),n("2877")),f=Object(s["a"])(u,i,l,!1,null,"8a1004c2",null);f.options.__file="AboutMe.vue";var p=f.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact"},[n("h2",[t._v("Contact")]),n("p",[t._v("For now, I only have an email to contact me, but in a few years I will buy a mobile phone, I promise.\n    "),n("a",{attrs:{href:"mailto:gabrielrigon@outlook.com"}},[t._v("gabrielrigon@outlook.com")])])])}],b={name:"AboutMe"},m=b,d=(n("6acf"),Object(s["a"])(m,v,_,!1,null,"6188cb3d",null));d.options.__file="Contact.vue";var h=d.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"skills"},[n("h2",[t._v("Interests")]),n("p",[t._v("Machine Learning, Blockchain, Python, Go, iOS, Augmented Reality, Chatbots")])])}],k={name:"Skills"},w=k,O=(n("7ca0"),Object(s["a"])(w,g,y,!1,null,"209ccd8c",null));O.options.__file="Interests.vue";var j=O.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"skills"},[n("h2",[t._v("Skills")]),n("ul",t._l(t.skills,function(e,r){return n("li",{key:r},[t._v(t._s(e.name))])}))])},S=[],C={name:"Skills",data:function(){return{skills:[{name:"Ruby on Rails"},{name:"Node.js"},{name:"Swift (iOS)"},{name:"React"},{name:"Vue.js"}]}}},I=C,M=(n("981f"),Object(s["a"])(I,x,S,!1,null,"198d8536",null));M.options.__file="Skills.vue";var $=M.exports,A={name:"app",components:{AboutMe:p,Contact:h,Interests:j,Skills:$}},E=A,P=(n("034f"),Object(s["a"])(E,a,o,!1,null,null,null));P.options.__file="App.vue";var R=P.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(R)}}).$mount("#app")},"64a9":function(t,e,n){},6622:function(t,e,n){},"6acf":function(t,e,n){"use strict";var r=n("e06c"),a=n.n(r);a.a},"7ca0":function(t,e,n){"use strict";var r=n("db6f"),a=n.n(r);a.a},"981f":function(t,e,n){"use strict";var r=n("6622"),a=n.n(r);a.a},db6f:function(t,e,n){},e06c:function(t,e,n){},e915:function(t,e,n){}});
//# sourceMappingURL=app.91ee0766.js.map