gx.evt.autoSkip=!1;
function gx0010(){this.ServerClass="Gx0010";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV9pOpcionPreguntaConceptualId=gx.fn.getIntegerValue("vPOPCIONPREGUNTACONCEPTUALID",",")};this.e13132_client=function(a){this.executeServerEvent("ENTER",!0,a)};this.e14131_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,38];this.GXLastCtrlId=
38;var b=this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0010",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","New row",!0,!1,!1,null,null,!1,"");b.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image");b.addSingleLineEdit(1,33,"OPCIONPREGUNTACONCEPTUALID","Conceptual Id","","OpcionPreguntaConceptualId","int",0,"px",4,4,"right",null,[],1,"OpcionPreguntaConceptualId",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(2,
34,"OPCIONPREGUNTACONCEPTUALTXT","Opcion Pregunta Conceptual Txt","","OpcionPreguntaConceptualTxt","svchar",0,"px",200,80,"left",null,[],2,"OpcionPreguntaConceptualTxt",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(3,35,"OPCIONPREGUNTACONCEPTUALVALOR","Conceptual Valor","","OpcionPreguntaConceptualValor","int",0,"px",4,4,"right",null,[],3,"OpcionPreguntaConceptualValor",!0,0,!1,!1,"Attribute",1);this.setGrid(b);this.GXValidFnc[2]={fld:"TABLE1",grid:0};this.GXValidFnc[8]={fld:"GROUP1",grid:0};this.GXValidFnc[9]=
{fld:"TABLE2",grid:0};this.GXValidFnc[12]={fld:"TEXTBLOCKOPCIONPREGUNTACONCEPTUALID",format:0,grid:0};this.GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCOPCIONPREGUNTACONCEPTUALID",gxz:"ZV6cOpcionPreguntaConceptualId",gxold:"OV6cOpcionPreguntaConceptualId",gxvar:"AV6cOpcionPreguntaConceptualId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV6cOpcionPreguntaConceptualId=gx.num.intval(a)},
v2z:function(a){gx.O.ZV6cOpcionPreguntaConceptualId=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vCOPCIONPREGUNTACONCEPTUALID",gx.O.AV6cOpcionPreguntaConceptualId,0)},c2v:function(){gx.O.AV6cOpcionPreguntaConceptualId=this.val()},val:function(){return gx.fn.getIntegerValue("vCOPCIONPREGUNTACONCEPTUALID",",")},nac:function(){return!1}};this.GXValidFnc[17]={fld:"TEXTBLOCKOPCIONPREGUNTACONCEPTUALDESCRIPCION",format:0,grid:0};this.GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,
grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCOPCIONPREGUNTACONCEPTUALDESCRIPCION",gxz:"ZV7cOpcionPreguntaConceptualDescripcion",gxold:"OV7cOpcionPreguntaConceptualDescripcion",gxvar:"AV7cOpcionPreguntaConceptualDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV7cOpcionPreguntaConceptualDescripcion=a},v2z:function(a){gx.O.ZV7cOpcionPreguntaConceptualDescripcion=a},v2c:function(){gx.fn.setControlValue("vCOPCIONPREGUNTACONCEPTUALDESCRIPCION",gx.O.AV7cOpcionPreguntaConceptualDescripcion,
0)},c2v:function(){gx.O.AV7cOpcionPreguntaConceptualDescripcion=this.val()},val:function(){return gx.fn.getControlValue("vCOPCIONPREGUNTACONCEPTUALDESCRIPCION")},nac:function(){return!1}};this.GXValidFnc[22]={fld:"TEXTBLOCKOPCIONPREGUNTACONCEPTUALVALOR",format:0,grid:0};this.GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCOPCIONPREGUNTACONCEPTUALVALOR",gxz:"ZV8cOpcionPreguntaConceptualValor",gxold:"OV8cOpcionPreguntaConceptualValor",
gxvar:"AV8cOpcionPreguntaConceptualValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV8cOpcionPreguntaConceptualValor=gx.num.intval(a)},v2z:function(a){gx.O.ZV8cOpcionPreguntaConceptualValor=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vCOPCIONPREGUNTACONCEPTUALVALOR",gx.O.AV8cOpcionPreguntaConceptualValor,0)},c2v:function(){gx.O.AV8cOpcionPreguntaConceptualValor=this.val()},val:function(){return gx.fn.getIntegerValue("vCOPCIONPREGUNTACONCEPTUALVALOR",",")},nac:function(){return!1}};
this.GXValidFnc[27]={fld:"GROUP2",grid:0};this.GXValidFnc[28]={fld:"TABLE3",grid:0};this.GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.AV5LinkSelection=a},v2z:function(a){gx.O.ZV5LinkSelection=a},v2c:function(){gx.fn.setGridMultimediaValue("vLINKSELECTION",
gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV12Linkselection_GXI)},c2v:function(){gx.O.AV12Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(){return gx.fn.getGridControlValue("vLINKSELECTION",gx.fn.currentGridRowImpl(31))},val_GXI:function(){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",gx.fn.currentGridRowImpl(31))},gxvar_GXI:"AV12Linkselection_GXI",nac:function(){return!1}};this.GXValidFnc[33]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,
isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"OPCIONPREGUNTACONCEPTUALID",gxz:"Z1OpcionPreguntaConceptualId",gxold:"O1OpcionPreguntaConceptualId",gxvar:"A1OpcionPreguntaConceptualId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A1OpcionPreguntaConceptualId=gx.num.intval(a)},v2z:function(a){gx.O.Z1OpcionPreguntaConceptualId=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("OPCIONPREGUNTACONCEPTUALID",gx.fn.currentGridRowImpl(31),
gx.O.A1OpcionPreguntaConceptualId,0)},c2v:function(){gx.O.A1OpcionPreguntaConceptualId=this.val()},val:function(){return gx.fn.getGridIntegerValue("OPCIONPREGUNTACONCEPTUALID",gx.fn.currentGridRowImpl(31),",")},nac:function(){return!1}};this.GXValidFnc[34]={lvl:2,type:"svchar",len:200,dec:0,sign:!1,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"OPCIONPREGUNTACONCEPTUALTXT",gxz:"Z2OpcionPreguntaConceptualTxt",gxold:"O2OpcionPreguntaConceptualTxt",gxvar:"A2OpcionPreguntaConceptualTxt",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A2OpcionPreguntaConceptualTxt=a},v2z:function(a){gx.O.Z2OpcionPreguntaConceptualTxt=a},v2c:function(){gx.fn.setGridControlValue("OPCIONPREGUNTACONCEPTUALTXT",gx.fn.currentGridRowImpl(31),gx.O.A2OpcionPreguntaConceptualTxt,0)},c2v:function(){gx.O.A2OpcionPreguntaConceptualTxt=this.val()},val:function(){return gx.fn.getGridControlValue("OPCIONPREGUNTACONCEPTUALTXT",gx.fn.currentGridRowImpl(31))},nac:function(){return!1}};
this.GXValidFnc[35]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"OPCIONPREGUNTACONCEPTUALVALOR",gxz:"Z3OpcionPreguntaConceptualValor",gxold:"O3OpcionPreguntaConceptualValor",gxvar:"A3OpcionPreguntaConceptualValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A3OpcionPreguntaConceptualValor=gx.num.intval(a)},v2z:function(a){gx.O.Z3OpcionPreguntaConceptualValor=gx.num.intval(a)},
v2c:function(){gx.fn.setGridControlValue("OPCIONPREGUNTACONCEPTUALVALOR",gx.fn.currentGridRowImpl(31),gx.O.A3OpcionPreguntaConceptualValor,0)},c2v:function(){gx.O.A3OpcionPreguntaConceptualValor=this.val()},val:function(){return gx.fn.getGridIntegerValue("OPCIONPREGUNTACONCEPTUALVALOR",gx.fn.currentGridRowImpl(31),",")},nac:function(){return!1}};this.GXValidFnc[38]={fld:"TABLE4",grid:0};this.OV6cOpcionPreguntaConceptualId=this.ZV6cOpcionPreguntaConceptualId=this.AV6cOpcionPreguntaConceptualId=0;this.OV7cOpcionPreguntaConceptualDescripcion=
this.ZV7cOpcionPreguntaConceptualDescripcion=this.AV7cOpcionPreguntaConceptualDescripcion="";this.OV8cOpcionPreguntaConceptualValor=this.ZV8cOpcionPreguntaConceptualValor=this.AV8cOpcionPreguntaConceptualValor=0;this.OV5LinkSelection=this.ZV5LinkSelection="";this.O1OpcionPreguntaConceptualId=this.Z1OpcionPreguntaConceptualId=0;this.O2OpcionPreguntaConceptualTxt=this.Z2OpcionPreguntaConceptualTxt="";this.AV9pOpcionPreguntaConceptualId=this.O3OpcionPreguntaConceptualValor=this.Z3OpcionPreguntaConceptualValor=
0;this.AV5LinkSelection=this.A4OpcionPreguntaConceptualDescri="";this.A1OpcionPreguntaConceptualId=0;this.A2OpcionPreguntaConceptualTxt="";this.A3OpcionPreguntaConceptualValor=0;this.ServerEvents=["e13132_client","e14131_client"];this.VarControlMap.AV9pOpcionPreguntaConceptualId={id:"vPOPCIONPREGUNTACONCEPTUALID",grid:0,type:"int"};b.addRefreshingVar(this.GXValidFnc[14]);b.addRefreshingVar(this.GXValidFnc[19]);b.addRefreshingVar(this.GXValidFnc[24]);this.SetStandaloneVars()}gx0010.prototype=new gx.GxObject;
gx.setParentObj(new gx0010);
