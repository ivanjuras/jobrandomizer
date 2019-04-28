(function(t){function e(e){for(var n,s,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)s=r[u],i[s]&&d.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/jobrandomizer/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var p=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("Form"),a("Template")],1)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-fixed"},[a("nav",[a("div",{staticClass:"nav-wrapper light-blue darken-3"},[a("a",{staticClass:"brand-logo center",attrs:{href:"#"}},[t._v("CustomerBloom Job Randomizer")])])])])}],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col s12 m5 input-form"},[a("div",{staticClass:"card-panel grey lighten-5"},[a("span",{staticClass:"black-text"},[a("div",{staticClass:"row",class:{"disable-form":t.loading}},[a("form",{staticClass:"col s12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.companyName,expression:"companyName"}],staticClass:"validate",attrs:{id:"company_name",type:"text",disabled:t.loading},domProps:{value:t.companyName},on:{input:function(e){e.target.composing||(t.companyName=e.target.value)}}}),a("label",{attrs:{for:"company_name"}},[t._v("Company Name")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.companyDescription,expression:"companyDescription"}],staticClass:"materialize-textarea",attrs:{id:"company_description",disabled:t.loading},domProps:{value:t.companyDescription},on:{input:function(e){e.target.composing||(t.companyDescription=e.target.value)}}}),a("label",{attrs:{for:"company_description"}},[t._v("Company Description (optional)")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.jobType,expression:"jobType"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.jobType=e.target.multiple?a:a[0]},t.fetchJobData]}},t._l(t.jobTypes,function(e,n){return a("option",{key:n,domProps:{value:n}},[t._v(t._s(e))])}),0),a("label",[t._v("Job Type")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.jobPostSite,expression:"jobPostSite"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.jobPostSite=e.target.multiple?a:a[0]}}},t._l(t.jobPostWebsites,function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}),0),a("label",[t._v("Job Post Website")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.instructionsImageURL,expression:"instructionsImageURL"}],staticClass:"validate",attrs:{id:"instructions_image",type:"text",disabled:t.loading},domProps:{value:t.instructionsImageURL},on:{input:function(e){e.target.composing||(t.instructionsImageURL=e.target.value)}}}),a("label",{attrs:{for:"instructions_image"}},[t._v("Instructions Image Url")])])])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s6"},[a("a",{staticClass:"waves-effect waves-light btn",class:{disabled:t.loading},on:{click:t.generateContent}},[t._v("Generate Content")])]),a("div",{staticClass:"input-field col s6"},[!t.loading&&t.canCopy?a("a",{staticClass:"waves-effect waves-light btn deep-orange lighten-1",on:{click:t.copyContent}},[t._v("Copy Content")]):t._e()])])])])},r=[],l=a("cebc"),c=(a("96cf"),a("3b8d")),p=a("bc3a"),u=a.n(p),d=u.a.create({baseURL:"https://sheetdb.io/api/v1/nfcdhk19ftk1v"}),m=d,f=function(){return m.get("/",{params:{sheet:"generalContent"}}).then(function(t){return t.data.reduce(function(t,e){return t[e.contentType]=t[e.contentType]||[],t[e.contentType].push(e.content),t},{})})},b=function(){return m.get("/",{params:{sheet:"jobTypes"}}).then(function(t){return t.data.reduce(function(t,e){return t[e.sheet]=e.jobType,t},{})})},v=function(t){return m.get("/",{params:{sheet:t}}).then(function(t){return t.data.reduce(function(t,e){return t[e.itemType]=t[e.itemType]||[],t[e.itemType].push(e.content),t},{})})},h={getGeneralContent:f,getJobTypes:b,getJobData:v},g=(a("3b2b"),a("a481"),a("ac6a"),a("4917"),a("20e5")),y=function(t){var e=new g["a"],a={};for(var n in t)if(t.hasOwnProperty(n)){var i=t[n];a[n]=e.pick(i)}return a},_=function(t){var e=function(e){if(t.hasOwnProperty(e)){var a=t[e],n=a.match(/{{\s*[\w\.]+\s*}}/g)||[],i=n.map(function(t){var e=t.match(/[\w\.]+/);return{key:e[0],placeholder:e.input}});i.forEach(function(a){if(!t[a.key])throw new Error('Value for key "'.concat(a.key,'" is missing!, Content key "').concat(e,'"'));t[e]=t[e].replace(new RegExp(a.placeholder,"g"),t[a.key])})}};for(var a in t)e(a)},j={getRandomData:y,resolveTemplates:_},C=(a("5118"),{name:"Form",data:function(){return{jobTypes:{},jobPostWebsites:[],companyName:"",companyDescription:"",jobType:"",jobPostSite:"",instructionsImageURL:"",jobDataCache:{},selectedJobData:{},generalContent:{},loading:!1,canCopy:!1}},updated:function(){this.initSelectFields()},mounted:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.initSelectFields(),t.next=3,h.getGeneralContent();case 3:return this.generalContent=t.sent,t.next=6,h.getJobTypes();case 6:this.jobTypes=t.sent,this.jobPostWebsites=this.generalContent.jobPostSite,this.jobPostSite=this.jobPostWebsites.length&&this.jobPostWebsites[0],this.loading=!1;case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),created:function(){this.loading=!0},methods:{generateContent:function(){this.$root.$emit("generatingContent");var t=j.getRandomData(this.generalContent),e=j.getRandomData(this.selectedJobData),a=Object(l["a"])({},t,e,{jobPostSite:this.jobPostSite,companyName:this.companyName,companyDescription:this.companyDescription,instructionsImageURL:this.instructionsImageURL});try{j.resolveTemplates(a),this.canCopy=!0}catch(n){this.canCopy=!1,a=null,M.toast({displayLength:8e3,html:n.message})}this.$root.$emit("showJobDetails",a)},copyContent:function(){var t=document.getElementsByClassName("generatedContent")[0].innerHTML,e=function(e){e.clipboardData.setData("text/html",t),e.clipboardData.setData("text/plain",t),e.preventDefault()};document.addEventListener("copy",e),document.execCommand("copy"),document.removeEventListener("copy",e)},fetchJobData:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.jobDataCache[this.jobType]){t.next=3;break}return this.selectedJobData=this.jobDataCache[this.jobType],t.abrupt("return");case 3:return this.loading=!0,t.next=6,h.getJobData(this.jobType);case 6:this.jobDataCache[this.jobType]=t.sent,this.selectedJobData=this.jobDataCache[this.jobType],this.loading=!1;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),initSelectFields:function(){var t=document.querySelectorAll("select");M.FormSelect.init(t)}}}),D=C,w=(a("c550"),a("2877")),x=Object(w["a"])(D,s,r,!1,null,"f50edbca",null),P=x.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col s12 m7 template"},[a("div",{staticClass:"card-panel grey lighten-5"},[t.displayJobDetails?t._e():a("content-placeholders",{staticStyle:{width:"300px"},attrs:{animated:t.loading}},[a("content-placeholders-heading",{attrs:{img:!1}}),a("content-placeholders-text",{attrs:{lines:21}})],1),t.displayJobDetails?a("span",{staticClass:"black-text generatedContent"},[a("h5",[t._v(t._s(t.jobDetails.jobNameVariation))]),t.jobDetails.salaryRangeFrom&&t.jobDetails.salaryRangeTo?a("span",{staticStyle:{"font-size":"13px"}},[t._v(t._s(t.jobDetails.salaryRangeFrom)+" - "+t._s(t.jobDetails.salaryRangeTo))]):t._e(),a("p",[t._v(t._s(t.jobDetails.introParagraph))]),t.jobDetails.companyDescription?a("p",[t._v(t._s(t.jobDetails.companyDescription))]):t._e(),a("h6",[t._v(t._s(t.jobDetails.jobDetailsHeading))]),a("p",[t._v(t._s(t.jobDetails.detailsParagraph1))]),a("p",[t._v(t._s(t.jobDetails.detailsParagraph2))]),t.showParagraph()?a("p",[t._v(t._s(t.jobDetails.detailsParagraph3))]):t._e(),a("h6",[t._v(t._s(t.jobDetails.expectationsHeading))]),a("p",[t._v(t._s(t.jobDetails.expectationsParagraph))]),a("random-list",{attrs:{type:"expectationsBullet",data:t.jobDetails}}),a("h6",[t._v(t._s(t.jobDetails.benefitsHeading))]),a("p",[t._v(t._s(t.jobDetails.benefitsParagraph))]),a("random-list",{attrs:{type:"benefitsBullet",data:t.jobDetails}}),a("h6",[t._v(t._s(t.jobDetails.applicationHeading))]),a("p",[t._v(t._s(t.jobDetails.applicationParagraph))]),a("p",[t._v(t._s(t.jobDetails.instructionsImageURL))])],1):t._e()],1)])},R=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"list-styled"},t._l(t.listItems,function(e){return a("li",{key:e},[t._v("\n    "+t._s(e)+"\n  ")])}),0)},J=[],S=(a("6762"),a("2fdb"),a("a4bb")),O=a.n(S),N=(a("c5f6"),{name:"RandomList",props:{type:{type:String,required:!0},data:{type:Object,required:!0},min:{type:Number,default:5},max:{type:Number,default:10}},computed:{listItems:function(){var t=this,e=new g["a"],a=O()(this.data).filter(function(e){return e.includes(t.type)}).map(function(e){return t.data[e]});return e.shuffle(a),a.length<=5?a:e.sample(a,e.integer(this.min,this.max))}}}),L=N,$=(a("5b70"),Object(w["a"])(L,k,J,!1,null,"0c86e133",null)),I=$.exports,E={name:"Template",components:{RandomList:I},data:function(){return{displayJobDetails:!1,loading:!1,jobDetails:{}}},mounted:function(){var t=document.querySelectorAll("select");M.FormSelect.init(t)},created:function(){var t=this;this.$root.$on("generatingContent",function(){t.displayJobDetails=!1,t.loading=!0}),this.$root.$on("showJobDetails",function(e){t.loading=!1,e?(t.displayJobDetails=!0,t.jobDetails=e):t.displayJobDetails=!1})},methods:{showParagraph:function(){var t=new g["a"];return t.bool()}}},F=E,U=(a("7ce5"),Object(w["a"])(F,T,R,!1,null,"3987f2bf",null)),W=U.exports,A={name:"App",components:{Form:P,Template:W}},H=A,q=Object(w["a"])(H,i,o,!1,null,null,null),z=q.exports,B=a("967d");a("dc53"),a("4d5c");n["a"].use(B["default"]),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(z)}}).$mount("#app")},"5a99":function(t,e,a){},"5b70":function(t,e,a){"use strict";var n=a("f5c4"),i=a.n(n);i.a},"79a7":function(t,e,a){},"7ce5":function(t,e,a){"use strict";var n=a("79a7"),i=a.n(n);i.a},c550:function(t,e,a){"use strict";var n=a("5a99"),i=a.n(n);i.a},f5c4:function(t,e,a){}});
//# sourceMappingURL=app.a2fbec32.js.map