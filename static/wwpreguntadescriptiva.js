gx.evt.autoSkip=!1;
function wwpreguntadescriptiva(){this.ServerClass="WWPreguntaDescriptiva";this.PackageName="";this.setObjectType("web");this.skipOnEnter=this.hasEnterEvent=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.e11072_client=function(){this.executeServerEvent("'DOINSERT'",!0)};this.e15072_client=function(a){this.executeServerEvent("ENTER",!0,a)};this.e16072_client=function(a){this.executeServerEvent("CANCEL",!0,a)};this.GXValidFnc=[];this.GXCtrlIds=[2,5,8,11,13,16,19,23,27,28,29,30];this.GXLastCtrlId=
30;var b=this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",26,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwpreguntadescriptiva",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px","New row",!0,!1,!1,null,null,!1,"");b.addBitmap("&Update","vUPDATE",27,0,"px",17,"px",null,"","","Image");b.addBitmap("&Delete","vDELETE",28,0,"px",17,"px",null,"","","Image");b.addSingleLineEdit(7,29,"PREGUNTADESCRIPTIVAID","Descriptiva Id","","PreguntaDescriptivaId","int",0,"px",4,4,"right",null,[],7,"PreguntaDescriptivaId",
!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(8,30,"PREGUNTADESCRIPTIVAENUNCIADO","Descriptiva Enunciado","","PreguntaDescriptivaEnunciado","svchar",0,"px",200,80,"left",null,[],8,"PreguntaDescriptivaEnunciado",!0,0,!1,!1,"Attribute",1);this.setGrid(b);this.GXValidFnc[2]={fld:"TABLE",grid:0};this.GXValidFnc[5]={fld:"TITLETEXT",format:0,grid:0};this.GXValidFnc[8]={fld:"TABLESEARCH",grid:0};this.GXValidFnc[11]={fld:"FILTERTEXTPREGUNTADESCRIPTIVAENUNCIADO",format:0,grid:0};this.GXValidFnc[13]={lvl:0,
type:"svchar",len:200,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vPREGUNTADESCRIPTIVAENUNCIADO",gxz:"ZV14PreguntaDescriptivaEnunciado",gxold:"OV14PreguntaDescriptivaEnunciado",gxvar:"AV14PreguntaDescriptivaEnunciado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV14PreguntaDescriptivaEnunciado=a},v2z:function(a){gx.O.ZV14PreguntaDescriptivaEnunciado=a},v2c:function(){gx.fn.setControlValue("vPREGUNTADESCRIPTIVAENUNCIADO",gx.O.AV14PreguntaDescriptivaEnunciado,
0)},c2v:function(){gx.O.AV14PreguntaDescriptivaEnunciado=this.val()},val:function(){return gx.fn.getControlValue("vPREGUNTADESCRIPTIVAENUNCIADO")},nac:function(){return!1}};this.GXValidFnc[16]={fld:"TABLESEPARATOR",format:0,grid:0};this.GXValidFnc[19]={fld:"TABLEGRIDCONTAINER",grid:0};this.GXValidFnc[23]={fld:"INSERT",grid:0};this.GXValidFnc[27]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:26,gxgrid:this.GridContainer,fnc:null,isvalid:null,fld:"vUPDATE",gxz:"ZV15Update",gxold:"OV15Update",
gxvar:"AV15Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.AV15Update=a},v2z:function(a){gx.O.ZV15Update=a},v2c:function(){gx.fn.setGridMultimediaValue("vUPDATE",gx.fn.currentGridRowImpl(26),gx.O.AV15Update,gx.O.AV20Update_GXI)},c2v:function(){gx.O.AV20Update_GXI=this.val_GXI();gx.O.AV15Update=this.val()},val:function(){return gx.fn.getGridControlValue("vUPDATE",gx.fn.currentGridRowImpl(26))},val_GXI:function(){return gx.fn.getGridControlValue("vUPDATE_GXI",
gx.fn.currentGridRowImpl(26))},gxvar_GXI:"AV20Update_GXI",nac:function(){return!1}};this.GXValidFnc[28]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:26,gxgrid:this.GridContainer,fnc:null,isvalid:null,fld:"vDELETE",gxz:"ZV16Delete",gxold:"OV16Delete",gxvar:"AV16Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.AV16Delete=a},v2z:function(a){gx.O.ZV16Delete=a},v2c:function(){gx.fn.setGridMultimediaValue("vDELETE",gx.fn.currentGridRowImpl(26),gx.O.AV16Delete,
gx.O.AV21Delete_GXI)},c2v:function(){gx.O.AV21Delete_GXI=this.val_GXI();gx.O.AV16Delete=this.val()},val:function(){return gx.fn.getGridControlValue("vDELETE",gx.fn.currentGridRowImpl(26))},val_GXI:function(){return gx.fn.getGridControlValue("vDELETE_GXI",gx.fn.currentGridRowImpl(26))},gxvar_GXI:"AV21Delete_GXI",nac:function(){return!1}};this.GXValidFnc[29]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:26,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PREGUNTADESCRIPTIVAID",
gxz:"Z7PreguntaDescriptivaId",gxold:"O7PreguntaDescriptivaId",gxvar:"A7PreguntaDescriptivaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A7PreguntaDescriptivaId=gx.num.intval(a)},v2z:function(a){gx.O.Z7PreguntaDescriptivaId=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("PREGUNTADESCRIPTIVAID",gx.fn.currentGridRowImpl(26),gx.O.A7PreguntaDescriptivaId,0)},c2v:function(){gx.O.A7PreguntaDescriptivaId=this.val()},val:function(){return gx.fn.getGridIntegerValue("PREGUNTADESCRIPTIVAID",
gx.fn.currentGridRowImpl(26),",")},nac:function(){return!1}};this.GXValidFnc[30]={lvl:2,type:"svchar",len:200,dec:0,sign:!1,ro:1,isacc:0,grid:26,gxgrid:this.GridContainer,fnc:null,isvalid:null,fld:"PREGUNTADESCRIPTIVAENUNCIADO",gxz:"Z8PreguntaDescriptivaEnunciado",gxold:"O8PreguntaDescriptivaEnunciado",gxvar:"A8PreguntaDescriptivaEnunciado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A8PreguntaDescriptivaEnunciado=a},v2z:function(a){gx.O.Z8PreguntaDescriptivaEnunciado=
a},v2c:function(){gx.fn.setGridControlValue("PREGUNTADESCRIPTIVAENUNCIADO",gx.fn.currentGridRowImpl(26),gx.O.A8PreguntaDescriptivaEnunciado,0)},c2v:function(){gx.O.A8PreguntaDescriptivaEnunciado=this.val()},val:function(){return gx.fn.getGridControlValue("PREGUNTADESCRIPTIVAENUNCIADO",gx.fn.currentGridRowImpl(26))},nac:function(){return!1}};this.OV16Delete=this.ZV16Delete=this.OV15Update=this.ZV15Update=this.OV14PreguntaDescriptivaEnunciado=this.ZV14PreguntaDescriptivaEnunciado=this.AV14PreguntaDescriptivaEnunciado=
"";this.O7PreguntaDescriptivaId=this.Z7PreguntaDescriptivaId=0;this.AV16Delete=this.AV15Update=this.O8PreguntaDescriptivaEnunciado=this.Z8PreguntaDescriptivaEnunciado="";this.A7PreguntaDescriptivaId=0;this.A8PreguntaDescriptivaEnunciado="";this.ServerEvents=["e11072_client","e15072_client","e16072_client"];this.VarControlMap.AV19Pgmname={id:"vPGMNAME",grid:0,type:"char"};b.addRefreshingVar(this.GXValidFnc[13]);b.addRefreshingVar({rfrVar:"AV16Delete",rfrProp:"Tooltiptext",gxAttId:"Delete"});b.addRefreshingVar({rfrVar:"AV16Delete",
rfrProp:"Value",gxAttId:"Delete"});b.addRefreshingVar({rfrVar:"AV15Update",rfrProp:"Tooltiptext",gxAttId:"Update"});b.addRefreshingVar({rfrVar:"AV15Update",rfrProp:"Value",gxAttId:"Update"});b.addRefreshingVar({rfrVar:"AV19Pgmname"});b.addRefreshingVar({rfrVar:"A7PreguntaDescriptivaId",rfrProp:"Value",gxAttId:"7"});this.SetStandaloneVars()}wwpreguntadescriptiva.prototype=new gx.GxObject;gx.setParentObj(new wwpreguntadescriptiva);