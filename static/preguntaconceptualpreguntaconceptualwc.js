gx.evt.autoSkip=!1;
function preguntaconceptualpreguntaconceptualwc(b){this.ServerClass="PreguntaConceptualPreguntaConceptualWC";this.PackageName="";this.setObjectType("web");this.setCmpContext(b);this.ReadonlyForm=!0;this.skipOnEnter=this.hasEnterEvent=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.Valid_Seccionid=function(){try{if(0===gx.fn.currentGridRowImpl(12))return!0;var a=gx.util.balloon.getNew("SECCIONID",gx.fn.currentGridRowImpl(12));this.AnyError=0;this.StandaloneModal();this.StandaloneNotModal()}catch(b){}try{return null==
a?!0:a.show()}catch(c){}return!0};this.e110p2_client=function(){this.executeServerEvent("'DOINSERT'",!0)};this.e140p2_client=function(a){this.executeServerEvent("ENTER",!0,a)};this.e150p2_client=function(a){this.executeServerEvent("CANCEL",!0,a)};this.GXValidFnc=[];this.GXCtrlIds=[2,5,9,13,14,15,16,17,18,19,20,23];this.GXLastCtrlId=23;b=this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",12,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"preguntaconceptualpreguntaconceptualwc",[],
!1,1,!1,!0,0,!0,!1,!1,"",0,"px","New row",!0,!1,!1,null,null,!1,"");b.addBitmap("&Update","vUPDATE",13,0,"px",17,"px",null,"","","Image");b.addBitmap("&Delete","vDELETE",14,0,"px",17,"px",null,"","","Image");b.addSingleLineEdit(13,15,"SECCIONID","Id","","SeccionId","int",0,"px",4,4,"right",null,[],13,"SeccionId",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(25,16,"SECCIONTITULO","Titulo","","SeccionTitulo","svchar",0,"px",40,40,"left",null,[],25,"SeccionTitulo",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(14,
17,"SECCIONENUNCIADO","Enunciado","","SeccionEnunciado","vchar",0,"px",2097152,80,"left",null,[],14,"SeccionEnunciado",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(32,18,"SECCIONPUNTO","Punto","","SeccionPunto","svchar",0,"px",100,80,"left",null,[],32,"SeccionPunto",!0,0,!1,!1,"Attribute",1);b.addBitmap(15,"SECCIONIMAGEN",19,0,"px",17,"px",null,"","Imagen","Image");b.addCheckBox(45,20,"SECCIONINICIAL","Inicial","","SeccionInicial","boolean","true","false",null,!0,!1,0,"px");this.setGrid(b);this.GXValidFnc[2]=
{fld:"TABLE",grid:0};this.GXValidFnc[5]={fld:"TABLEGRIDCONTAINER",grid:0};this.GXValidFnc[9]={fld:"INSERT",grid:0};this.GXValidFnc[13]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,fld:"vUPDATE",gxz:"ZV12Update",gxold:"OV12Update",gxvar:"AV12Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.AV12Update=a},v2z:function(a){gx.O.ZV12Update=a},v2c:function(){gx.fn.setGridMultimediaValue("vUPDATE",
gx.fn.currentGridRowImpl(12),gx.O.AV12Update,gx.O.AV17Update_GXI)},c2v:function(){gx.O.AV17Update_GXI=this.val_GXI();gx.O.AV12Update=this.val()},val:function(){return gx.fn.getGridControlValue("vUPDATE",gx.fn.currentGridRowImpl(12))},val_GXI:function(){return gx.fn.getGridControlValue("vUPDATE_GXI",gx.fn.currentGridRowImpl(12))},gxvar_GXI:"AV17Update_GXI",nac:function(){return!1}};this.GXValidFnc[14]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,
isvalid:null,fld:"vDELETE",gxz:"ZV13Delete",gxold:"OV13Delete",gxvar:"AV13Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.AV13Delete=a},v2z:function(a){gx.O.ZV13Delete=a},v2c:function(){gx.fn.setGridMultimediaValue("vDELETE",gx.fn.currentGridRowImpl(12),gx.O.AV13Delete,gx.O.AV18Delete_GXI)},c2v:function(){gx.O.AV18Delete_GXI=this.val_GXI();gx.O.AV13Delete=this.val()},val:function(){return gx.fn.getGridControlValue("vDELETE",gx.fn.currentGridRowImpl(12))},
val_GXI:function(){return gx.fn.getGridControlValue("vDELETE_GXI",gx.fn.currentGridRowImpl(12))},gxvar_GXI:"AV18Delete_GXI",nac:function(){return!1}};this.GXValidFnc[15]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:this.Valid_Seccionid,isvalid:null,rgrid:[],fld:"SECCIONID",gxz:"Z13SeccionId",gxold:"O13SeccionId",gxvar:"A13SeccionId",ucs:[],op:[16,17,18,19,20],ip:[16,17,18,19,20,15],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A13SeccionId=
gx.num.intval(a)},v2z:function(a){gx.O.Z13SeccionId=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("SECCIONID",gx.fn.currentGridRowImpl(12),gx.O.A13SeccionId,0)},c2v:function(){gx.O.A13SeccionId=this.val()},val:function(){return gx.fn.getGridIntegerValue("SECCIONID",gx.fn.currentGridRowImpl(12),",")},nac:function(){return!1}};this.GXValidFnc[16]={lvl:2,type:"svchar",len:40,dec:0,sign:!1,ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,fld:"SECCIONTITULO",gxz:"Z25SeccionTitulo",
gxold:"O25SeccionTitulo",gxvar:"A25SeccionTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A25SeccionTitulo=a},v2z:function(a){gx.O.Z25SeccionTitulo=a},v2c:function(){gx.fn.setGridControlValue("SECCIONTITULO",gx.fn.currentGridRowImpl(12),gx.O.A25SeccionTitulo,0)},c2v:function(){gx.O.A25SeccionTitulo=this.val()},val:function(){return gx.fn.getGridControlValue("SECCIONTITULO",gx.fn.currentGridRowImpl(12))},nac:function(){return!1}};this.GXValidFnc[17]=
{lvl:2,type:"vchar",len:2097152,dec:0,sign:!1,ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,fld:"SECCIONENUNCIADO",gxz:"Z14SeccionEnunciado",gxold:"O14SeccionEnunciado",gxvar:"A14SeccionEnunciado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A14SeccionEnunciado=a},v2z:function(a){gx.O.Z14SeccionEnunciado=a},v2c:function(){gx.fn.setGridControlValue("SECCIONENUNCIADO",gx.fn.currentGridRowImpl(12),gx.O.A14SeccionEnunciado,0)},
c2v:function(){gx.O.A14SeccionEnunciado=this.val()},val:function(){return gx.fn.getGridControlValue("SECCIONENUNCIADO",gx.fn.currentGridRowImpl(12))},nac:function(){return!1}};this.GXValidFnc[18]={lvl:2,type:"svchar",len:100,dec:0,sign:!1,ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,fld:"SECCIONPUNTO",gxz:"Z32SeccionPunto",gxold:"O32SeccionPunto",gxvar:"A32SeccionPunto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A32SeccionPunto=
a},v2z:function(a){gx.O.Z32SeccionPunto=a},v2c:function(){gx.fn.setGridControlValue("SECCIONPUNTO",gx.fn.currentGridRowImpl(12),gx.O.A32SeccionPunto,0)},c2v:function(){gx.O.A32SeccionPunto=this.val()},val:function(){return gx.fn.getGridControlValue("SECCIONPUNTO",gx.fn.currentGridRowImpl(12))},nac:function(){return!1}};this.GXValidFnc[19]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,fld:"SECCIONIMAGEN",gxz:"Z15SeccionImagen",gxold:"O15SeccionImagen",
gxvar:"A15SeccionImagen",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A15SeccionImagen=a},v2z:function(a){gx.O.Z15SeccionImagen=a},v2c:function(){gx.fn.setGridMultimediaValue("SECCIONIMAGEN",gx.fn.currentGridRowImpl(12),gx.O.A15SeccionImagen,gx.O.A40000SeccionImagen_GXI)},c2v:function(){gx.O.A40000SeccionImagen_GXI=this.val_GXI();gx.O.A15SeccionImagen=this.val()},val:function(){return gx.fn.getGridControlValue("SECCIONIMAGEN",gx.fn.currentGridRowImpl(12))},val_GXI:function(){return gx.fn.getGridControlValue("SECCIONIMAGEN_GXI",
gx.fn.currentGridRowImpl(12))},gxvar_GXI:"A40000SeccionImagen_GXI",nac:function(){return!1}};this.GXValidFnc[20]={lvl:2,type:"boolean",len:4,dec:0,sign:!1,ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,fld:"SECCIONINICIAL",gxz:"Z45SeccionInicial",gxold:"O45SeccionInicial",gxvar:"A45SeccionInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:"text",v2v:function(a){gx.O.A45SeccionInicial=gx.lang.booleanValue(a)},v2z:function(a){gx.O.Z45SeccionInicial=gx.lang.booleanValue(a)},
v2c:function(){gx.fn.setGridCheckBoxValue("SECCIONINICIAL",gx.fn.currentGridRowImpl(12),gx.O.A45SeccionInicial,!0)},c2v:function(){gx.O.A45SeccionInicial=this.val()},val:function(){return gx.fn.getGridCheckBoxValue("SECCIONINICIAL",gx.fn.currentGridRowImpl(12),!0,!1)},nac:function(){return!1}};this.GXValidFnc[23]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PREGUNTACONCEPTUALID",gxz:"Z5PreguntaConceptualId",gxold:"O5PreguntaConceptualId",
gxvar:"A5PreguntaConceptualId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A5PreguntaConceptualId=gx.num.intval(a)},v2z:function(a){gx.O.Z5PreguntaConceptualId=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("PREGUNTACONCEPTUALID",gx.O.A5PreguntaConceptualId,0)},c2v:function(){gx.O.A5PreguntaConceptualId=this.val()},val:function(){return gx.fn.getIntegerValue("PREGUNTACONCEPTUALID",",")},nac:function(){return!1}};this.OV13Delete=this.ZV13Delete=this.OV12Update=this.ZV12Update=
"";this.O13SeccionId=this.Z13SeccionId=0;this.O15SeccionImagen=this.Z15SeccionImagen=this.O32SeccionPunto=this.Z32SeccionPunto=this.O14SeccionEnunciado=this.Z14SeccionEnunciado=this.O25SeccionTitulo=this.Z25SeccionTitulo="";this.O45SeccionInicial=this.Z45SeccionInicial=!1;this.O5PreguntaConceptualId=this.Z5PreguntaConceptualId=this.A5PreguntaConceptualId=0;this.A40000SeccionImagen_GXI="";this.AV7PreguntaConceptualId=0;this.AV13Delete=this.AV12Update="";this.A13SeccionId=0;this.A15SeccionImagen=this.A32SeccionPunto=
this.A14SeccionEnunciado=this.A25SeccionTitulo="";this.A45SeccionInicial=!1;this.ServerEvents=["e110p2_client","e140p2_client","e150p2_client"];this.VarControlMap.AV7PreguntaConceptualId={id:"vPREGUNTACONCEPTUALID",grid:0,type:"int"};b.addRefreshingVar({rfrVar:"AV7PreguntaConceptualId"});b.addRefreshingVar({rfrVar:"AV13Delete",rfrProp:"Tooltiptext",gxAttId:"Delete"});b.addRefreshingVar({rfrVar:"AV13Delete",rfrProp:"Value",gxAttId:"Delete"});b.addRefreshingVar({rfrVar:"AV12Update",rfrProp:"Tooltiptext",
gxAttId:"Update"});b.addRefreshingVar({rfrVar:"AV12Update",rfrProp:"Value",gxAttId:"Update"});b.addRefreshingVar({rfrVar:"A13SeccionId",rfrProp:"Value",gxAttId:"13"});this.SetStandaloneVars()};
