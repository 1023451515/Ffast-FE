webpackJsonp([3],{"7f37":function(t,a,e){"use strict";function i(t){e("GzYZ"),e("YkRi")}Object.defineProperty(a,"__esModule",{value:!0});var s=e("mvHQ"),n=e.n(s),l={props:[],data:function(){return{methods:"",url:"",result:"",apiList:[],searchText:"",index:-1,paramDynamic:[],methodsList:[{label:"POST",value:"POST"},{label:"GET",value:"GET"}],urlList:[]}},created:function(){},mounted:function(){var t=this;this.$http.apiGet("/restful/list",{}).then(function(a){t.apiList=a})},methods:{handleAdd:function(){this.index++,this.paramDynamic.push({value:"",status:1,name:"",index:this.index})},handleRemove:function(t){this.paramDynamic[t].status=0},onClick:function(t){this.url=t.url.replace("/api/","/")},filterSearch:function(t){return 0===this.searchText.length||t.indexOf(this.searchText)>=0},request:function(){for(var t=this,a={},e=0;e<this.paramDynamic.length;e++){var i=this.paramDynamic[e];null!=i&&1===i.status&&(a[i.name]=i.value)}switch(this.methods){case"POST":this.$http.apiPost(this.url,a).then(function(a){t.result=n()(a)});break;case"GET":this.$http.apiGet(this.url,a).then(function(a){t.result=n()(a)})}}},components:{}},r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main-view main-view-full"},[e("Row",{attrs:{gutter:10}},[e("i-col",{staticStyle:{padding:"10px"},attrs:{span:"14"}},[e("Row",{attrs:{gutter:10}},[e("i-col",{attrs:{span:"24"}},[e("Input",{model:{value:t.url,callback:function(a){t.url=a},expression:"url"}},[e("Select",{staticStyle:{width:"100px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:t.methods,callback:function(a){t.methods=a},expression:"methods"}},t._l(t.methodsList,function(a){return e("Option",{key:a.value,attrs:{value:a.value}},[t._v(t._s(a.label))])}))],1)],1)],1),t._v(" "),e("Row",{staticStyle:{"padding-top":"10px"},attrs:{gutter:10}},[e("i-col",{staticStyle:{"max-height":"300px",overflow:"auto"},attrs:{span:"20"}},[e("Row",[e("table",{directives:[{name:"show",rawName:"v-show",value:t.paramDynamic&&t.paramDynamic.length>0,expression:"paramDynamic && paramDynamic.length>0"}],staticStyle:{width:"100%"}},[e("tr",[e("th",{staticClass:"ivu-table-column-center",staticStyle:{width:"120px"}},[t._v("参数名")]),t._v(" "),e("th",{staticClass:"ivu-table-column-center"},[t._v("值")]),t._v(" "),e("th",{staticClass:"ivu-table-column-center",staticStyle:{width:"60px"}})]),t._v(" "),t._l(t.paramDynamic,function(a,i){return a.status?[e("tr",[e("td",[e("Input",{attrs:{type:"text",size:"small",placeholder:"参数名"},model:{value:a.name,callback:function(e){t.$set(a,"name",e)},expression:"item.name"}})],1),t._v(" "),e("td",[e("Input",{attrs:{type:"text",size:"small",placeholder:"值"},model:{value:a.value,callback:function(e){t.$set(a,"value",e)},expression:"item.value"}})],1),t._v(" "),e("td",[e("Button",{attrs:{type:"ghost",size:"small"},on:{click:function(a){t.handleRemove(i)}}},[t._v("删除")])],1)])]:t._e()})],2)]),t._v(" "),e("Row",[e("Button",{attrs:{type:"dashed",long:"",icon:"plus-round"},on:{click:t.handleAdd}},[t._v("添加参数")])],1)],1),t._v(" "),e("i-col",{attrs:{span:"4"}},[e("Button",{attrs:{type:"ghost",long:"",icon:"ios-search"},on:{click:t.request}},[t._v("发 送")])],1)],1),t._v(" "),e("Row",{staticStyle:{"padding-top":"20px"},attrs:{gutter:10}},[e("i-col",{attrs:{span:"24"}},[e("Input",{attrs:{readonly:"",type:"textarea",rows:20},model:{value:t.result,callback:function(a){t.result=a},expression:"result"}})],1)],1)],1),t._v(" "),e("i-col",{attrs:{span:"10"}},[e("ul",{staticClass:"api-ul"},[e("div",{staticStyle:{margin:"10px"}},[e("h1",[t._v("API接口列表")]),t._v(" "),e("Input",{staticStyle:{width:"100%"},attrs:{size:"small",icon:"ios-search"},model:{value:t.searchText,callback:function(a){t.searchText=a},expression:"searchText"}}),t._v(" "),t._l(t.apiList,function(a){return[t.filterSearch(a.url)?e("li",{staticClass:"api-li",on:{click:function(e){t.onClick(a)}}},[t._v("\n              "+t._s(a.url)+"\n            ")]):t._e()]})],2)])])],1)],1)},o=[],c={render:r,staticRenderFns:o},u=c,p=e("VU/8"),d=i,h=p(l,u,!1,d,"data-v-98a7679a",null);a.default=h.exports},GzYZ:function(t,a,e){var i=e("f6Ko");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("a56b4d88",i,!0,{})},OfuI:function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,".ivu-table-wrapper{border:none}",""])},YkRi:function(t,a,e){var i=e("OfuI");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("df4bdb9c",i,!0,{})},f6Ko:function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,".api-ul[data-v-98a7679a]{height:calc(100vh - 120px);margin:0 5px 0 20px;padding-right:20px;overflow:auto;border-left:2px solid #f5f7f9}.api-li[data-v-98a7679a]{cursor:pointer;padding:2px 0;border-bottom:1px solid #f5f7f9}.api-li[data-v-98a7679a]:hover{border-left:2px solid #333;font-size:14px}td[data-v-98a7679a]{height:30px;padding:0 5px;text-align:center}tr th[data-v-98a7679a]{height:30px;white-space:nowrap;overflow:hidden;background-color:#f8f8f9}table[data-v-98a7679a]{border:1px solid #f8f8f9;margin-bottom:2px}",""])}});