gx.evt.autoSkip=!1;
function viewpreguntadescriptiva(){this.ServerClass="ViewPreguntaDescriptiva";this.PackageName="";this.setObjectType("web");this.skipOnEnter=this.hasEnterEvent=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV11PreguntaDescriptivaId=gx.fn.getIntegerValue("vPREGUNTADESCRIPTIVAID",",");this.AV7TabCode=gx.fn.getControlValue("vTABCODE")};this.s112_client=function(){this.AV8Tabs=[];this.AV9Tab={Code:"",Description:"",Link:"",WebComponent:""};this.AV9Tab.Code="General";this.AV9Tab.Description=
"General";this.AV9Tab.WebComponent=gx.http.formatLink("preguntadescriptivageneral",[this.AV11PreguntaDescriptivaId]);this.AV9Tab.Link=gx.http.formatLink("viewpreguntadescriptiva",[this.AV11PreguntaDescriptivaId,this.AV9Tab.Code]);this.AV8Tabs.push(this.AV9Tab);this.AV9Tab={Code:"",Description:"",Link:"",WebComponent:""};this.AV9Tab.Code="PreguntaDescriptiva";this.AV9Tab.Description="Seccion";this.AV9Tab.WebComponent=gx.http.formatLink("preguntadescriptivapreguntadescriptivawc",[this.AV11PreguntaDescriptivaId]);
this.AV9Tab.Link=gx.http.formatLink("viewpreguntadescriptiva",[this.AV11PreguntaDescriptivaId,this.AV9Tab.Code]);this.AV8Tabs.push(this.AV9Tab);this.AV9Tab={Code:"",Description:"",Link:"",WebComponent:""};this.AV9Tab.Code="RespuestaDescriptiva";this.AV9Tab.Description="Respuesta Descriptiva";this.AV9Tab.WebComponent=gx.http.formatLink("preguntadescriptivarespuestadescriptivawc",[this.AV11PreguntaDescriptivaId]);this.AV9Tab.Link=gx.http.formatLink("viewpreguntadescriptiva",[this.AV11PreguntaDescriptivaId,
this.AV9Tab.Code]);this.AV8Tabs.push(this.AV9Tab)};this.e130d2_client=function(){this.executeServerEvent("ENTER",!0)};this.e140d2_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,5,8,10,13,16,18,19];this.GXLastCtrlId=19;this.GXValidFnc[2]={fld:"VIEWTABLE",grid:0};this.GXValidFnc[5]={fld:"TITLETABLE",grid:0};this.GXValidFnc[8]={fld:"VIEWTITLE",format:0,grid:0};this.GXValidFnc[10]={fld:"VIEWALL",format:0,grid:0};this.GXValidFnc[13]={fld:"TABLE1",grid:0};this.GXValidFnc[16]=
{fld:"FIXTEXTPREGUNTADESCRIPTIVAENUNCIADO",format:0,grid:0};this.GXValidFnc[18]={lvl:0,type:"svchar",len:200,dec:0,sign:!1,ro:1,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"PREGUNTADESCRIPTIVAENUNCIADO",gxz:"Z8PreguntaDescriptivaEnunciado",gxold:"O8PreguntaDescriptivaEnunciado",gxvar:"A8PreguntaDescriptivaEnunciado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A8PreguntaDescriptivaEnunciado=a},v2z:function(a){gx.O.Z8PreguntaDescriptivaEnunciado=a},v2c:function(){gx.fn.setControlValue("PREGUNTADESCRIPTIVAENUNCIADO",
gx.O.A8PreguntaDescriptivaEnunciado,0)},c2v:function(){gx.O.A8PreguntaDescriptivaEnunciado=this.val()},val:function(){return gx.fn.getControlValue("PREGUNTADESCRIPTIVAENUNCIADO")},nac:function(){return!1}};this.GXValidFnc[19]={fld:"SPACESEPARATOR",format:0,grid:0};this.O8PreguntaDescriptivaEnunciado=this.Z8PreguntaDescriptivaEnunciado=this.A8PreguntaDescriptivaEnunciado="";this.AV11PreguntaDescriptivaId=0;this.AV7TabCode="";this.A7PreguntaDescriptivaId=0;this.AV9Tab={};this.AV8Tabs=[];this.ServerEvents=
["e130d2_client","e140d2_client"];this.VarControlMap.AV11PreguntaDescriptivaId={id:"vPREGUNTADESCRIPTIVAID",grid:0,type:"int"};this.VarControlMap.AV7TabCode={id:"vTABCODE",grid:0,type:"char"};this.SetStandaloneVars();this.setComponent({id:"TABBEDVIEW",GXClass:null,Prefix:"W0022",lvl:1})}viewpreguntadescriptiva.prototype=new gx.GxObject;gx.setParentObj(new viewpreguntadescriptiva);
