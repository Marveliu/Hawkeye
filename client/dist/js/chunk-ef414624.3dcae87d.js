(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef414624"],{"0f27":function(t,n,a){"use strict";var e=a("1fb1"),l=a.n(e);l.a},"1fb1":function(t,n,a){},"278d":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("el-tabs",{attrs:{type:"border-card","active-name":t.activeName},on:{"tab-click":t.handleTabClick},model:{value:t.activeName,callback:function(n){t.activeName=n},expression:"activeName"}},[a("el-tab-pane",{attrs:{name:"rule"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"iconfont icon-search"}),t._v("监控项")]),a("Rule")],1),a("el-tab-pane",{attrs:{name:"blacklist"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"iconfont icon-shielding"}),t._v("黑名单")]),a("Blacklist")],1),a("el-tab-pane",{attrs:{name:"notice"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"iconfont icon-alert"}),t._v("告警")]),a("Notice")],1),a("el-tab-pane",{attrs:{name:"task"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"iconfont icon-task"}),t._v("定时任务")]),a("Task")],1),a("el-tab-pane",{attrs:{name:"github"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"iconfont icon-github-fill"}),t._v("GitHub账号")]),a("Github")],1)],1)},l=[],i=(a("cf54"),a("3a0f"),a("a3a3"),a("4d0b"),function(){return a.e("chunk-35157e29").then(a.bind(null,"88a95"))}),s=function(){return a.e("chunk-2d0e5db1").then(a.bind(null,"95ed"))},c=function(){return a.e("chunk-8e5b0408").then(a.bind(null,"f2b9"))},o=function(){return a.e("chunk-2d0e8ba4").then(a.bind(null,"8b04"))},u=function(){return a.e("chunk-b7bcb3e8").then(a.bind(null,"bd92"))},r={data:function(){return{activeName:this.$route.params.tab?this.$route.params.tab:"rule"}},components:{Github:s,Notice:i,Blacklist:u,Task:o,Rule:c},methods:{handleTabClick:function(t){this.$router.push({name:"setting",params:{tab:t.name}})}}},b=r,f=(a("0f27"),a("048f")),h=Object(f["a"])(b,e,l,!1,null,null,null);h.options.__file="Setting.vue";n["default"]=h.exports},cf54:function(t,n,a){var e=a("9a0d").f,l=Function.prototype,i=/^\s*function ([^ (]*)/,s="name";s in l||a("f711")&&e(l,s,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})}}]);