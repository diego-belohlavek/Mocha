gx.evt.autoSkip=!1;
function opcionpreguntaconceptualgeneral(b){this.ServerClass="OpcionPreguntaConceptualGeneral";this.PackageName="";this.setObjectType("web");this.setCmpContext(b);this.ReadonlyForm=!0;this.skipOnEnter=this.hasEnterEvent=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.Valid_Opcionpreguntaconceptualid=function(){try{var a=gx.util.balloon.getNew("OPCIONPREGUNTACONCEPTUALID");this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.e130l2_client=function(){this.executeServerEvent("'DOUPDATE'",
!1)};this.e140l2_client=function(){this.executeServerEvent("'DODELETE'",!1)};this.e150l2_client=function(){this.executeServerEvent("ENTER",!0)};this.e160l2_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,5,7,10,12,15,17,20,22];this.GXLastCtrlId=22;this.GXValidFnc[2]={fld:"TBL2",grid:0};this.GXValidFnc[5]={fld:"TEXTBLOCKOPCIONPREGUNTACONCEPTUALID",format:0,grid:0};this.GXValidFnc[7]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,
fnc:this.Valid_Opcionpreguntaconceptualid,isvalid:null,rgrid:[],fld:"OPCIONPREGUNTACONCEPTUALID",gxz:"Z1OpcionPreguntaConceptualId",gxold:"O1OpcionPreguntaConceptualId",gxvar:"A1OpcionPreguntaConceptualId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A1OpcionPreguntaConceptualId=gx.num.intval(a)},v2z:function(a){gx.O.Z1OpcionPreguntaConceptualId=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("OPCIONPREGUNTACONCEPTUALID",gx.O.A1OpcionPreguntaConceptualId,0)},c2v:function(){gx.O.A1OpcionPreguntaConceptualId=
this.val()},val:function(){return gx.fn.getIntegerValue("OPCIONPREGUNTACONCEPTUALID",",")},nac:function(){return!1}};this.GXValidFnc[10]={fld:"TEXTBLOCKOPCIONPREGUNTACONCEPTUALDESCRIPCION",format:0,grid:0};this.GXValidFnc[12]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"OPCIONPREGUNTACONCEPTUALDESCRI",gxz:"Z4OpcionPreguntaConceptualDescri",gxold:"O4OpcionPreguntaConceptualDescri",gxvar:"A4OpcionPreguntaConceptualDescri",ucs:[],op:[],ip:[],nacdep:[],
ctrltype:"edit",v2v:function(a){gx.O.A4OpcionPreguntaConceptualDescri=a},v2z:function(a){gx.O.Z4OpcionPreguntaConceptualDescri=a},v2c:function(){gx.fn.setControlValue("OPCIONPREGUNTACONCEPTUALDESCRI",gx.O.A4OpcionPreguntaConceptualDescri,0)},c2v:function(){gx.O.A4OpcionPreguntaConceptualDescri=this.val()},val:function(){return gx.fn.getControlValue("OPCIONPREGUNTACONCEPTUALDESCRI")},nac:function(){return!1}};this.GXValidFnc[15]={fld:"TEXTBLOCKOPCIONPREGUNTACONCEPTUALTXT",format:0,grid:0};this.GXValidFnc[17]=
{lvl:0,type:"svchar",len:200,dec:0,sign:!1,ro:1,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"OPCIONPREGUNTACONCEPTUALTXT",gxz:"Z2OpcionPreguntaConceptualTxt",gxold:"O2OpcionPreguntaConceptualTxt",gxvar:"A2OpcionPreguntaConceptualTxt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A2OpcionPreguntaConceptualTxt=a},v2z:function(a){gx.O.Z2OpcionPreguntaConceptualTxt=a},v2c:function(){gx.fn.setControlValue("OPCIONPREGUNTACONCEPTUALTXT",gx.O.A2OpcionPreguntaConceptualTxt,
0)},c2v:function(){gx.O.A2OpcionPreguntaConceptualTxt=this.val()},val:function(){return gx.fn.getControlValue("OPCIONPREGUNTACONCEPTUALTXT")},nac:function(){return!1}};this.GXValidFnc[20]={fld:"TEXTBLOCKOPCIONPREGUNTACONCEPTUALVALOR",format:0,grid:0};this.GXValidFnc[22]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OPCIONPREGUNTACONCEPTUALVALOR",gxz:"Z3OpcionPreguntaConceptualValor",gxold:"O3OpcionPreguntaConceptualValor",gxvar:"A3OpcionPreguntaConceptualValor",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A3OpcionPreguntaConceptualValor=gx.num.intval(a)},v2z:function(a){gx.O.Z3OpcionPreguntaConceptualValor=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("OPCIONPREGUNTACONCEPTUALVALOR",gx.O.A3OpcionPreguntaConceptualValor,0)},c2v:function(){gx.O.A3OpcionPreguntaConceptualValor=this.val()},val:function(){return gx.fn.getIntegerValue("OPCIONPREGUNTACONCEPTUALVALOR",",")},nac:function(){return!1}};this.O1OpcionPreguntaConceptualId=
this.Z1OpcionPreguntaConceptualId=this.A1OpcionPreguntaConceptualId=0;this.O2OpcionPreguntaConceptualTxt=this.Z2OpcionPreguntaConceptualTxt=this.A2OpcionPreguntaConceptualTxt=this.O4OpcionPreguntaConceptualDescri=this.Z4OpcionPreguntaConceptualDescri=this.A4OpcionPreguntaConceptualDescri="";this.O3OpcionPreguntaConceptualValor=this.Z3OpcionPreguntaConceptualValor=this.A3OpcionPreguntaConceptualValor=0;this.ServerEvents=["e130l2_client","e140l2_client","e150l2_client","e160l2_client"];this.SetStandaloneVars()}
;
