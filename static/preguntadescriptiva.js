gx.evt.autoSkip=!1;
function preguntadescriptiva(){this.ServerClass="PreguntaDescriptiva";this.PackageName="";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.SetStandaloneVars=function(){this.A7PreguntaDescriptivaId=gx.fn.getIntegerValue("PREGUNTADESCRIPTIVAID",",");this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Preguntadescriptivaenunciado=function(){try{var a=gx.util.balloon.getNew("PREGUNTADESCRIPTIVAENUNCIADO");this.AnyError=0;if(""==this.A8PreguntaDescriptivaEnunciado)try{a.setError("You must complete all the fileds"),this.AnyError=
1}catch(b){}}catch(c){}try{return null==a?!0:a.show()}catch(d){}return!0};this.e12062_client=function(){this.executeServerEvent("AFTER TRN",!0)};this.e130610_client=function(){this.executeServerEvent("ENTER",!0)};this.e140610_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,5,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,40,42];this.GXLastCtrlId=42;this.GXValidFnc[2]={fld:"TABLEMAIN",grid:0};this.GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};this.GXValidFnc[9]=
{fld:"BTN_FIRST",grid:0};this.GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};this.GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};this.GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};this.GXValidFnc[13]={fld:"BTN_NEXT",grid:0};this.GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};this.GXValidFnc[15]={fld:"BTN_LAST",grid:0};this.GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};this.GXValidFnc[17]={fld:"BTN_SELECT",grid:0};this.GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};this.GXValidFnc[19]=
{fld:"BTN_ENTER2",grid:0};this.GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};this.GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};this.GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};this.GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};this.GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};this.GXValidFnc[27]={fld:"GROUPDATA",grid:0};this.GXValidFnc[28]={fld:"TABLE1",grid:0};this.GXValidFnc[34]={fld:"TABLE2",grid:0};this.GXValidFnc[40]={fld:"TEXTBLOCKPREGUNTADESCRIPTIVAENUNCIADO",format:0,grid:0};
this.GXValidFnc[42]={lvl:0,type:"svchar",len:200,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:this.Valid_Preguntadescriptivaenunciado,isvalid:null,fld:"PREGUNTADESCRIPTIVAENUNCIADO",gxz:"Z8PreguntaDescriptivaEnunciado",gxold:"O8PreguntaDescriptivaEnunciado",gxvar:"A8PreguntaDescriptivaEnunciado",ucs:[],op:[42],ip:[42],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A8PreguntaDescriptivaEnunciado=a},v2z:function(a){gx.O.Z8PreguntaDescriptivaEnunciado=a},v2c:function(){gx.fn.setControlValue("PREGUNTADESCRIPTIVAENUNCIADO",
gx.O.A8PreguntaDescriptivaEnunciado,0)},c2v:function(){gx.O.A8PreguntaDescriptivaEnunciado=this.val()},val:function(){return gx.fn.getControlValue("PREGUNTADESCRIPTIVAENUNCIADO")},nac:function(){return!1}};this.AV12UsuarioMail=this.O8PreguntaDescriptivaEnunciado=this.Z8PreguntaDescriptivaEnunciado=this.A8PreguntaDescriptivaEnunciado="";this.AV13UsuarioTipo=0;this.AV7Context={};this.AV11Session={};this.AV10WebSession={};this.A7PreguntaDescriptivaId=0;this.ServerEvents=["e12062_client","e130610_client",
"e140610_client"];this.EnterCtrl=["BTN_ENTER2","BTN_ENTER2_SEPARATOR","BTN_ENTER"];this.VarControlMap.A7PreguntaDescriptivaId={id:"PREGUNTADESCRIPTIVAID",grid:0,type:"int"};this.VarControlMap.Gx_mode={id:"vMODE",grid:0,type:"char"};this.SetStandaloneVars()}preguntadescriptiva.prototype=new gx.GxObject;gx.setParentObj(new preguntadescriptiva);
