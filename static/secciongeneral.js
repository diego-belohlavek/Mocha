gx.evt.autoSkip=!1;
function secciongeneral(b){this.ServerClass="SeccionGeneral";this.PackageName="";this.setObjectType("web");this.setCmpContext(b);this.ReadonlyForm=!0;this.skipOnEnter=this.hasEnterEvent=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.Valid_Seccionid=function(){try{var a=gx.util.balloon.getNew("SECCIONID");this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.e131t2_client=function(){this.executeServerEvent("'DOUPDATE'",!1)};this.e141t2_client=function(){this.executeServerEvent("'DODELETE'",
!1)};this.e151t2_client=function(){this.executeServerEvent("ENTER",!0)};this.e161t2_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,5,7,10,12,15,17,20,22,25,27,30,32];this.GXLastCtrlId=32;this.GXValidFnc[2]={fld:"TBL2",grid:0};this.GXValidFnc[5]={fld:"TEXTBLOCKSECCIONID",format:0,grid:0};this.GXValidFnc[7]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Seccionid,isvalid:null,rgrid:[],fld:"SECCIONID",gxz:"Z13SeccionId",
gxold:"O13SeccionId",gxvar:"A13SeccionId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A13SeccionId=gx.num.intval(a)},v2z:function(a){gx.O.Z13SeccionId=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("SECCIONID",gx.O.A13SeccionId,0)},c2v:function(){gx.O.A13SeccionId=this.val()},val:function(){return gx.fn.getIntegerValue("SECCIONID",",")},nac:function(){return!1}};this.GXValidFnc[10]={fld:"TEXTBLOCKSECCIONTITULO",format:0,grid:0};this.GXValidFnc[12]={lvl:0,type:"svchar",
len:40,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"SECCIONTITULO",gxz:"Z25SeccionTitulo",gxold:"O25SeccionTitulo",gxvar:"A25SeccionTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A25SeccionTitulo=a},v2z:function(a){gx.O.Z25SeccionTitulo=a},v2c:function(){gx.fn.setControlValue("SECCIONTITULO",gx.O.A25SeccionTitulo,0)},c2v:function(){gx.O.A25SeccionTitulo=this.val()},val:function(){return gx.fn.getControlValue("SECCIONTITULO")},nac:function(){return!1}};
this.GXValidFnc[15]={fld:"TEXTBLOCKSECCIONENUNCIADO",format:0,grid:0};this.GXValidFnc[17]={lvl:0,type:"vchar",len:2097152,dec:0,sign:!1,ro:1,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"SECCIONENUNCIADO",gxz:"Z14SeccionEnunciado",gxold:"O14SeccionEnunciado",gxvar:"A14SeccionEnunciado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A14SeccionEnunciado=a},v2z:function(a){gx.O.Z14SeccionEnunciado=a},v2c:function(){gx.fn.setControlValue("SECCIONENUNCIADO",gx.O.A14SeccionEnunciado,
0)},c2v:function(){gx.O.A14SeccionEnunciado=this.val()},val:function(){return gx.fn.getControlValue("SECCIONENUNCIADO")},nac:function(){return!1}};this.GXValidFnc[20]={fld:"TEXTBLOCKSECCIONPUNTO",format:0,grid:0};this.GXValidFnc[22]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"SECCIONPUNTO",gxz:"Z32SeccionPunto",gxold:"O32SeccionPunto",gxvar:"A32SeccionPunto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A32SeccionPunto=a},v2z:function(a){gx.O.Z32SeccionPunto=
a},v2c:function(){gx.fn.setControlValue("SECCIONPUNTO",gx.O.A32SeccionPunto,0)},c2v:function(){gx.O.A32SeccionPunto=this.val()},val:function(){return gx.fn.getControlValue("SECCIONPUNTO")},nac:function(){return!1}};this.GXValidFnc[25]={fld:"TEXTBLOCKSECCIONIMAGEN",format:0,grid:0};this.GXValidFnc[27]={lvl:0,type:"bits",len:1024,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"SECCIONIMAGEN",gxz:"Z15SeccionImagen",gxold:"O15SeccionImagen",gxvar:"A15SeccionImagen",ucs:[],op:[],ip:[],
nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A15SeccionImagen=a},v2z:function(a){gx.O.Z15SeccionImagen=a},v2c:function(){gx.fn.setMultimediaValue("SECCIONIMAGEN",gx.O.A15SeccionImagen,gx.O.A40000SeccionImagen_GXI)},c2v:function(){gx.O.A40000SeccionImagen_GXI=this.val_GXI();gx.O.A15SeccionImagen=this.val()},val:function(){return gx.fn.getBlobValue("SECCIONIMAGEN")},val_GXI:function(){return gx.fn.getControlValue("SECCIONIMAGEN_GXI")},gxvar_GXI:"A40000SeccionImagen_GXI",nac:function(){return!1}};
this.GXValidFnc[30]={fld:"TEXTBLOCKSECCIONINICIAL",format:0,grid:0};this.GXValidFnc[32]={lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"SECCIONINICIAL",gxz:"Z45SeccionInicial",gxold:"O45SeccionInicial",gxvar:"A45SeccionInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(a){gx.O.A45SeccionInicial=gx.lang.booleanValue(a)},v2z:function(a){gx.O.Z45SeccionInicial=gx.lang.booleanValue(a)},v2c:function(){gx.fn.setCheckBoxValue("SECCIONINICIAL",
gx.O.A45SeccionInicial,!0)},c2v:function(){gx.O.A45SeccionInicial=this.val()},val:function(){return gx.fn.getCheckBoxValue("SECCIONINICIAL",!0,!1)},nac:function(){return!1}};this.O13SeccionId=this.Z13SeccionId=this.A13SeccionId=0;this.O15SeccionImagen=this.Z15SeccionImagen=this.A15SeccionImagen=this.A40000SeccionImagen_GXI=this.O32SeccionPunto=this.Z32SeccionPunto=this.A32SeccionPunto=this.O14SeccionEnunciado=this.Z14SeccionEnunciado=this.A14SeccionEnunciado=this.O25SeccionTitulo=this.Z25SeccionTitulo=
this.A25SeccionTitulo="";this.O45SeccionInicial=this.Z45SeccionInicial=this.A45SeccionInicial=!1;this.A40000SeccionImagen_GXI="";this.ServerEvents=["e131t2_client","e141t2_client","e151t2_client","e161t2_client"];this.SetStandaloneVars()};
