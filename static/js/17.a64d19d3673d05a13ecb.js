webpackJsonp([17],{"5bM2":function(a,t,e){(a.exports=e("bKW+")(!1)).push([a.i,"\n.control-board[data-v-5300cd2e] {\n  margin: 20px 20px 36px 20px;\n}\n.control-board .box[data-v-5300cd2e] {\n    background: #fcf3e1;\n    border-left: 6px solid #fcb322;\n    font-size: 18px;\n    color: #333333;\n    padding: 15px;\n    margin-bottom: 20px;\n    line-height: 24px;\n}\n.control-board .header-content[data-v-5300cd2e] {\n    color: #101010;\n    padding: 30px 0;\n}\n.control-board .header-content span[data-v-5300cd2e] {\n      font-size: 16px;\n}\n.control-board .header-content span.pl25[data-v-5300cd2e] {\n        padding-left: 25px;\n}\n.control-board .header-content .button[data-v-5300cd2e] {\n      margin-left: 25px;\n}\n.control-board .numberMark[data-v-5300cd2e] {\n    color: #ed4e2a;\n}\n",""])},H2I3:function(a,t,e){var n=e("5bM2");"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);e("6imX")("60db3e44",n,!0)},z7li:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"controlBoard1",data:function(){return{dialogFormVisible:!1,dialogData:[],showStatus:{success:"到港可提",pending:"运输中",reject:"北港收购"},tableData:[{date:"1SFIE0097997",name:"ZYCG-佳木斯-深粮10000吨1",company:"深粮1",money:"14555"},{date:"2SFIE0097997",name:"ZYCG-佳木斯-深粮10000吨2",company:"深粮2",money:"24555"},{date:"3SFIE0097997",name:"ZYCG-佳木斯-深粮10000吨3",company:"深粮3",money:"34555"}],columns:[{label:"合同号",prop:"date"},{label:"订单名称",prop:"name"},{label:"付款企业",prop:"company"}],tableData1:[{date:"OR00000794",name:"ZY-彰武-丰源-深粮3300吨",company:"延安丰源",money:"44555"},{date:"OR00000794",name:"ZY-彰武-丰源-深粮3300吨",company:"延安丰源",money:"44555"},{date:"OR00000794",name:"ZY-彰武-丰源-深粮3300吨",company:"延安丰源",money:"44555"}],columns1:[{label:"合同号",prop:"date"},{label:"订单名称",prop:"name"},{label:"收款企业",prop:"company"}],labels:[{label:"合同号"},{label:"订单名称"},{label:"收款企业"},{label:"付款金额"}]}},mounted:function(){},methods:{row:function(a,t){this.dialogData=t,this.dialogFormVisible=!0}},components:{myTable:e("0qgA").a}},o={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"control-board"},[a._m(0),a._v(" "),e("my-table",{ref:"myTable",attrs:{tableData:a.tableData,columns:a.columns,showStatus:null,showDetail:!0,title:"今日应收",showMarkNumber:"收款金额"},on:{row:a.row}},[e("div",{staticClass:"header-content",attrs:{slot:"header-content"},slot:"header-content"},[e("span",[a._v("今日应收账款（元）：")]),a._v(" "),e("span",{staticClass:"numberMark"},[a._v("135,000")])])]),a._v(" "),e("my-table",{attrs:{tableData:a.tableData1,columns:a.columns1,title:"今日应付",showStatus:null,showDetail:!0,showMarkNumber:"付款金额"}},[e("div",{staticClass:"header-content",attrs:{slot:"header-content"},slot:"header-content"},[e("span",[a._v("今日应付账款（元）：")]),a._v(" "),e("span",{staticClass:"numberMark"},[a._v("535,000")])])]),a._v(" "),e("el-dialog",{attrs:{title:"详情",visible:a.dialogFormVisible},on:{"update:visible":function(t){a.dialogFormVisible=t}}},[e("el-form",{staticStyle:{display:"flex"},attrs:{model:a.dialogData}},[e("div",{staticStyle:{flex:"0 0 80px"}},a._l(a.labels,function(t){return e("div",[a._v("\n          "+a._s(t.label)+":\n        ")])})),a._v(" "),e("div",{staticStyle:{flex:"1"}},a._l(a.dialogData,function(t){return e("div",[a._v(" "+a._s(t))])}))])],1)],1)},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"box"},[t("p",[this._v("今日回款金额（元）：")]),this._v(" "),t("p",{staticClass:"numberMark"},[this._v("800,000,000")])])}]};var l=e("XAIM")(n,o,!1,function(a){e("H2I3")},"data-v-5300cd2e",null);t.default=l.exports}});