gx.evt.autoSkip=!1;
function opcionpreguntaconceptual(){this.ServerClass="OpcionPreguntaConceptual";this.PackageName="";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.SetStandaloneVars=function(){this.AV14OpcionPreguntaConceptualId=gx.fn.getIntegerValue("vOPCIONPREGUNTACONCEPTUALID",",");this.A1OpcionPreguntaConceptualId=gx.fn.getIntegerValue("OPCIONPREGUNTACONCEPTUALID",",");this.A4OpcionPreguntaConceptualDescri=gx.fn.getControlValue("OPCIONPREGUNTACONCEPTUALDESCRI");this.AV15Pgmname=gx.fn.getControlValue("vPGMNAME");
this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Opcionpreguntaconceptualtxt=function(){try{var a=gx.util.balloon.getNew("OPCIONPREGUNTACONCEPTUALTXT");this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.Valid_Opcionpreguntaconceptualvalor=function(){try{var a=gx.util.balloon.getNew("OPCIONPREGUNTACONCEPTUALVALOR");this.AnyError=0;if(""==this.A2OpcionPreguntaConceptualTxt||0==this.A3OpcionPreguntaConceptualValor)try{a.setError("You must complete all the fields"),
this.AnyError=1}catch(b){}}catch(c){}try{return null==a?!0:a.show()}catch(d){}return!0};this.e12012_client=function(){this.executeServerEvent("AFTER TRN",!0)};this.e13011_client=function(){this.executeServerEvent("ENTER",!0)};this.e14011_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,5,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,40,42,45,47];this.GXLastCtrlId=47;this.GXValidFnc[2]={fld:"TABLEMAIN",grid:0};this.GXValidFnc[5]={fld:"TABLETOOLBAR",
grid:0};this.GXValidFnc[9]={fld:"BTN_FIRST",grid:0};this.GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};this.GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};this.GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};this.GXValidFnc[13]={fld:"BTN_NEXT",grid:0};this.GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};this.GXValidFnc[15]={fld:"BTN_LAST",grid:0};this.GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};this.GXValidFnc[17]={fld:"BTN_SELECT",grid:0};this.GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",
grid:0};this.GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};this.GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};this.GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};this.GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};this.GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};this.GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};this.GXValidFnc[27]={fld:"GROUPDATA",grid:0};this.GXValidFnc[28]={fld:"TABLE1",grid:0};this.GXValidFnc[34]={fld:"TABLE2",grid:0};this.GXValidFnc[40]={fld:"TEXTBLOCKOPCIONPREGUNTACONCEPTUALTXT",
format:0,grid:0};this.GXValidFnc[42]={lvl:0,type:"svchar",len:200,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:this.Valid_Opcionpreguntaconceptualtxt,isvalid:null,fld:"OPCIONPREGUNTACONCEPTUALTXT",gxz:"Z2OpcionPreguntaConceptualTxt",gxold:"O2OpcionPreguntaConceptualTxt",gxvar:"A2OpcionPreguntaConceptualTxt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A2OpcionPreguntaConceptualTxt=a},v2z:function(a){gx.O.Z2OpcionPreguntaConceptualTxt=a},v2c:function(){gx.fn.setControlValue("OPCIONPREGUNTACONCEPTUALTXT",
gx.O.A2OpcionPreguntaConceptualTxt,0)},c2v:function(){gx.O.A2OpcionPreguntaConceptualTxt=this.val()},val:function(){return gx.fn.getControlValue("OPCIONPREGUNTACONCEPTUALTXT")},nac:function(){return!1}};this.GXValidFnc[45]={fld:"TEXTBLOCKOPCIONPREGUNTACONCEPTUALVALOR",format:0,grid:0};this.GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Opcionpreguntaconceptualvalor,isvalid:null,rgrid:[],fld:"OPCIONPREGUNTACONCEPTUALVALOR",gxz:"Z3OpcionPreguntaConceptualValor",
gxold:"O3OpcionPreguntaConceptualValor",gxvar:"A3OpcionPreguntaConceptualValor",ucs:[],op:[47,42],ip:[47,42],nacdep:[],ctrltype:"radio",v2v:function(a){gx.O.A3OpcionPreguntaConceptualValor=gx.num.intval(a)},v2z:function(a){gx.O.Z3OpcionPreguntaConceptualValor=gx.num.intval(a)},v2c:function(){gx.fn.setRadioValue("OPCIONPREGUNTACONCEPTUALVALOR",gx.O.A3OpcionPreguntaConceptualValor)},c2v:function(){gx.O.A3OpcionPreguntaConceptualValor=this.val()},val:function(){return gx.fn.getIntegerValue("OPCIONPREGUNTACONCEPTUALVALOR",
",")},nac:function(){return!1}};this.O2OpcionPreguntaConceptualTxt=this.Z2OpcionPreguntaConceptualTxt=this.A2OpcionPreguntaConceptualTxt="";this.O3OpcionPreguntaConceptualValor=this.Z3OpcionPreguntaConceptualValor=this.A3OpcionPreguntaConceptualValor=0;this.AV12UsuarioMail="";this.AV13UsuarioTipo=0;this.AV15Pgmname="";this.AV8IsAuthorized=!1;this.AV9TrnContext={};this.AV7Context={};this.AV14OpcionPreguntaConceptualId=0;this.AV11Session={};this.AV10WebSession={};this.A1OpcionPreguntaConceptualId=0;
this.Gx_mode=this.A4OpcionPreguntaConceptualDescri="";this.ServerEvents=["e12012_client","e13011_client","e14011_client"];this.EnterCtrl=["BTN_ENTER2","BTN_ENTER2_SEPARATOR","BTN_ENTER"];this.VarControlMap.AV14OpcionPreguntaConceptualId={id:"vOPCIONPREGUNTACONCEPTUALID",grid:0,type:"int"};this.VarControlMap.A1OpcionPreguntaConceptualId={id:"OPCIONPREGUNTACONCEPTUALID",grid:0,type:"int"};this.VarControlMap.A4OpcionPreguntaConceptualDescri={id:"OPCIONPREGUNTACONCEPTUALDESCRI",grid:0,type:"svchar"};
this.VarControlMap.AV15Pgmname={id:"vPGMNAME",grid:0,type:"char"};this.VarControlMap.Gx_mode={id:"vMODE",grid:0,type:"char"};this.SetStandaloneVars()}opcionpreguntaconceptual.prototype=new gx.GxObject;gx.setParentObj(new opcionpreguntaconceptual);
