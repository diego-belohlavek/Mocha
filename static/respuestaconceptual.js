gx.evt.autoSkip=!1;
function respuestaconceptual(){this.ServerClass="RespuestaConceptual";this.PackageName="";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Respuestaconceptualid=function(){gx.ajax.validSrvEvt("dyncall","valid_Respuestaconceptualid",["gx.O.A9RespuestaConceptualId","gx.O.A10RespuestaConceptualValor","gx.O.A5PreguntaConceptualId","gx.O.A20UsuarioId","gx.O.A16DiagnosticoId"],["A5PreguntaConceptualId",
"A20UsuarioId","A16DiagnosticoId","A10RespuestaConceptualValor","Gx_mode","Z9RespuestaConceptualId","Z5PreguntaConceptualId","Z20UsuarioId","Z16DiagnosticoId","Z10RespuestaConceptualValor",["BTN_DELETE2","Enabled"],["BTN_ENTER2","Enabled"]]);return!0};this.Valid_Preguntaconceptualid=function(){gx.ajax.validSrvEvt("dyncall","valid_Preguntaconceptualid",["gx.O.A5PreguntaConceptualId"],[]);return!0};this.Valid_Diagnosticoid=function(){try{var a=gx.util.balloon.getNew("DIAGNOSTICOID");this.AnyError=0}catch(b){}try{return null==
a?!0:a.show()}catch(c){}return!0};this.Valid_Usuarioid=function(){gx.ajax.validSrvEvt("dyncall","valid_Usuarioid",["gx.O.A20UsuarioId","gx.O.A16DiagnosticoId"],[]);return!0};this.e12047_client=function(){this.executeServerEvent("ENTER",!0)};this.e13047_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,5,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,50,53,55,58,60,66];this.GXLastCtrlId=66;this.GXValidFnc[2]={fld:"TABLEMAIN",grid:0};
this.GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};this.GXValidFnc[9]={fld:"BTN_FIRST",grid:0};this.GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};this.GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};this.GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};this.GXValidFnc[13]={fld:"BTN_NEXT",grid:0};this.GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};this.GXValidFnc[15]={fld:"BTN_LAST",grid:0};this.GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};this.GXValidFnc[17]={fld:"BTN_SELECT",grid:0};this.GXValidFnc[18]=
{fld:"BTN_SELECT_SEPARATOR",grid:0};this.GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};this.GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};this.GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};this.GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};this.GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};this.GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};this.GXValidFnc[27]={fld:"GROUPDATA",grid:0};this.GXValidFnc[28]={fld:"TABLE1",grid:0};this.GXValidFnc[34]={fld:"TABLE2",grid:0};this.GXValidFnc[37]={fld:"TEXTBLOCKRESPUESTACONCEPTUALID",
format:0,grid:0};this.GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Respuestaconceptualid,isvalid:null,rgrid:[],fld:"RESPUESTACONCEPTUALID",gxz:"Z9RespuestaConceptualId",gxold:"O9RespuestaConceptualId",gxvar:"A9RespuestaConceptualId",ucs:[],op:[55,60,44,49],ip:[55,60,44,49,39],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A9RespuestaConceptualId=gx.num.intval(a)},v2z:function(a){gx.O.Z9RespuestaConceptualId=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("RESPUESTACONCEPTUALID",
gx.O.A9RespuestaConceptualId,0)},c2v:function(){gx.O.A9RespuestaConceptualId=this.val()},val:function(){return gx.fn.getIntegerValue("RESPUESTACONCEPTUALID",",")},nac:function(){return!1}};this.GXValidFnc[42]={fld:"TEXTBLOCKPREGUNTACONCEPTUALID",format:0,grid:0};this.GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Preguntaconceptualid,isvalid:null,rgrid:[],fld:"PREGUNTACONCEPTUALID",gxz:"Z5PreguntaConceptualId",gxold:"O5PreguntaConceptualId",
gxvar:"A5PreguntaConceptualId",ucs:[],op:[],ip:[44],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A5PreguntaConceptualId=gx.num.intval(a)},v2z:function(a){gx.O.Z5PreguntaConceptualId=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("PREGUNTACONCEPTUALID",gx.O.A5PreguntaConceptualId,0)},c2v:function(){gx.O.A5PreguntaConceptualId=this.val()},val:function(){return gx.fn.getIntegerValue("PREGUNTACONCEPTUALID",",")},nac:function(){return!1}};this.GXValidFnc[47]={fld:"TEXTBLOCKRESPUESTACONCEPTUALVALOR",
format:0,grid:0};this.GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RESPUESTACONCEPTUALVALOR",gxz:"Z10RespuestaConceptualValor",gxold:"O10RespuestaConceptualValor",gxvar:"A10RespuestaConceptualValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(a){gx.O.A10RespuestaConceptualValor=gx.num.intval(a)},v2z:function(a){gx.O.Z10RespuestaConceptualValor=gx.num.intval(a)},v2c:function(){gx.fn.setRadioValue("RESPUESTACONCEPTUALVALOR",
gx.O.A10RespuestaConceptualValor)},c2v:function(){gx.O.A10RespuestaConceptualValor=this.val()},val:function(){return gx.fn.getIntegerValue("RESPUESTACONCEPTUALVALOR",",")},nac:function(){return!1}};this.GXValidFnc[50]={fld:"TABLE3",grid:0};this.GXValidFnc[53]={fld:"TEXTBLOCK1",format:0,grid:0};this.GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Diagnosticoid,isvalid:null,rgrid:[],fld:"DIAGNOSTICOID",gxz:"Z16DiagnosticoId",gxold:"O16DiagnosticoId",
gxvar:"A16DiagnosticoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A16DiagnosticoId=gx.num.intval(a)},v2z:function(a){gx.O.Z16DiagnosticoId=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("DIAGNOSTICOID",gx.O.A16DiagnosticoId,0)},c2v:function(){gx.O.A16DiagnosticoId=this.val()},val:function(){return gx.fn.getIntegerValue("DIAGNOSTICOID",",")},nac:function(){return!1}};this.GXValidFnc[58]={fld:"TEXTBLOCK2",format:0,grid:0};this.GXValidFnc[60]={lvl:0,type:"int",len:4,
dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuarioid,isvalid:null,rgrid:[],fld:"USUARIOID",gxz:"Z20UsuarioId",gxold:"O20UsuarioId",gxvar:"A20UsuarioId",ucs:[],op:[],ip:[55,60],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A20UsuarioId=gx.num.intval(a)},v2z:function(a){gx.O.Z20UsuarioId=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("USUARIOID",gx.O.A20UsuarioId,0)},c2v:function(){gx.O.A20UsuarioId=this.val()},val:function(){return gx.fn.getIntegerValue("USUARIOID",",")},
nac:function(){return!1}};this.GXValidFnc[66]={fld:"PROMPT_5",grid:7};this.O20UsuarioId=this.Z20UsuarioId=this.A20UsuarioId=this.O16DiagnosticoId=this.Z16DiagnosticoId=this.A16DiagnosticoId=this.O10RespuestaConceptualValor=this.Z10RespuestaConceptualValor=this.A10RespuestaConceptualValor=this.O5PreguntaConceptualId=this.Z5PreguntaConceptualId=this.A5PreguntaConceptualId=this.O9RespuestaConceptualId=this.Z9RespuestaConceptualId=this.A9RespuestaConceptualId=0;this.AV8UsuarioMail="";this.AV9UsuarioTipo=
0;this.AV7Session={};this.ServerEvents=["e12047_client","e13047_client"];this.setPrompt("PROMPT_5",[44]);this.EnterCtrl=["BTN_ENTER2","BTN_ENTER2_SEPARATOR","BTN_ENTER"];this.VarControlMap.Gx_mode={id:"vMODE",grid:0,type:"char"};this.SetStandaloneVars()}respuestaconceptual.prototype=new gx.GxObject;gx.setParentObj(new respuestaconceptual);