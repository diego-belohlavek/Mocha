gx.evt.autoSkip=!1;
function gx00c0(){this.ServerClass="Gx00C0";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV10pDiagnosticoId=gx.fn.getIntegerValue("vPDIAGNOSTICOID",",")};this.e131l2_client=function(a){this.executeServerEvent("ENTER",!0,a)};this.e141l1_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,33,37,38,39,40,41,44];this.GXLastCtrlId=
44;var b=this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",36,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00c0",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","New row",!0,!1,!1,null,null,!1,"");b.addBitmap("&Linkselection","vLINKSELECTION",37,0,"px",17,"px",null,"","","Image");b.addSingleLineEdit(16,38,"DIAGNOSTICOID","Id","Select","DiagnosticoId","int",0,"px",4,4,"right",null,[],16,"DiagnosticoId",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(17,39,"DIAGNOSTICONOMBRE","Nombre",
"","DiagnosticoNombre","svchar",0,"px",40,40,"left",null,[],17,"DiagnosticoNombre",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(18,40,"DIAGNOSTICOTITULO","Titulo","","DiagnosticoTitulo","svchar",0,"px",40,40,"left",null,[],18,"DiagnosticoTitulo",!0,0,!1,!1,"Attribute",1);b.addCheckBox(49,41,"DIAGNOSTICOINICIAL","Inicial","","DiagnosticoInicial","boolean","true","false",null,!0,!1,0,"px");this.setGrid(b);this.GXValidFnc[2]={fld:"TABLE1",grid:0};this.GXValidFnc[8]={fld:"GROUP1",grid:0};this.GXValidFnc[9]=
{fld:"TABLE2",grid:0};this.GXValidFnc[12]={fld:"TEXTBLOCKDIAGNOSTICOID",format:0,grid:0};this.GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDIAGNOSTICOID",gxz:"ZV6cDiagnosticoId",gxold:"OV6cDiagnosticoId",gxvar:"AV6cDiagnosticoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV6cDiagnosticoId=gx.num.intval(a)},v2z:function(a){gx.O.ZV6cDiagnosticoId=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vCDIAGNOSTICOID",
gx.O.AV6cDiagnosticoId,0)},c2v:function(){gx.O.AV6cDiagnosticoId=this.val()},val:function(){return gx.fn.getIntegerValue("vCDIAGNOSTICOID",",")},nac:function(){return!1}};this.GXValidFnc[17]={fld:"TEXTBLOCKDIAGNOSTICONOMBRE",format:0,grid:0};this.GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCDIAGNOSTICONOMBRE",gxz:"ZV7cDiagnosticoNombre",gxold:"OV7cDiagnosticoNombre",gxvar:"AV7cDiagnosticoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",
v2v:function(a){gx.O.AV7cDiagnosticoNombre=a},v2z:function(a){gx.O.ZV7cDiagnosticoNombre=a},v2c:function(){gx.fn.setControlValue("vCDIAGNOSTICONOMBRE",gx.O.AV7cDiagnosticoNombre,0)},c2v:function(){gx.O.AV7cDiagnosticoNombre=this.val()},val:function(){return gx.fn.getControlValue("vCDIAGNOSTICONOMBRE")},nac:function(){return!1}};this.GXValidFnc[22]={fld:"TEXTBLOCKDIAGNOSTICOTITULO",format:0,grid:0};this.GXValidFnc[24]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,
fld:"vCDIAGNOSTICOTITULO",gxz:"ZV8cDiagnosticoTitulo",gxold:"OV8cDiagnosticoTitulo",gxvar:"AV8cDiagnosticoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV8cDiagnosticoTitulo=a},v2z:function(a){gx.O.ZV8cDiagnosticoTitulo=a},v2c:function(){gx.fn.setControlValue("vCDIAGNOSTICOTITULO",gx.O.AV8cDiagnosticoTitulo,0)},c2v:function(){gx.O.AV8cDiagnosticoTitulo=this.val()},val:function(){return gx.fn.getControlValue("vCDIAGNOSTICOTITULO")},nac:function(){return!1}};this.GXValidFnc[27]=
{fld:"TEXTBLOCKDIAGNOSTICOINICIAL",format:0,grid:0};this.GXValidFnc[29]={lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCDIAGNOSTICOINICIAL",gxz:"ZV9cDiagnosticoInicial",gxold:"OV9cDiagnosticoInicial",gxvar:"AV9cDiagnosticoInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(a){gx.O.AV9cDiagnosticoInicial=gx.lang.booleanValue(a)},v2z:function(a){gx.O.ZV9cDiagnosticoInicial=gx.lang.booleanValue(a)},v2c:function(){gx.fn.setCheckBoxValue("vCDIAGNOSTICOINICIAL",
gx.O.AV9cDiagnosticoInicial,!0)},c2v:function(){gx.O.AV9cDiagnosticoInicial=this.val()},val:function(){return gx.fn.getCheckBoxValue("vCDIAGNOSTICOINICIAL",!0,!1)},nac:function(){return!1}};this.GXValidFnc[32]={fld:"GROUP2",grid:0};this.GXValidFnc[33]={fld:"TABLE3",grid:0};this.GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],
op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.AV5LinkSelection=a},v2z:function(a){gx.O.ZV5LinkSelection=a},v2c:function(){gx.fn.setGridMultimediaValue("vLINKSELECTION",gx.fn.currentGridRowImpl(36),gx.O.AV5LinkSelection,gx.O.AV13Linkselection_GXI)},c2v:function(){gx.O.AV13Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(){return gx.fn.getGridControlValue("vLINKSELECTION",gx.fn.currentGridRowImpl(36))},val_GXI:function(){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",
gx.fn.currentGridRowImpl(36))},gxvar_GXI:"AV13Linkselection_GXI",nac:function(){return!1}};this.GXValidFnc[38]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DIAGNOSTICOID",gxz:"Z16DiagnosticoId",gxold:"O16DiagnosticoId",gxvar:"A16DiagnosticoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A16DiagnosticoId=gx.num.intval(a)},v2z:function(a){gx.O.Z16DiagnosticoId=gx.num.intval(a)},
v2c:function(){gx.fn.setGridControlValue("DIAGNOSTICOID",gx.fn.currentGridRowImpl(36),gx.O.A16DiagnosticoId,0)},c2v:function(){gx.O.A16DiagnosticoId=this.val()},val:function(){return gx.fn.getGridIntegerValue("DIAGNOSTICOID",gx.fn.currentGridRowImpl(36),",")},nac:function(){return!1}};this.GXValidFnc[39]={lvl:2,type:"svchar",len:40,dec:0,sign:!1,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"DIAGNOSTICONOMBRE",gxz:"Z17DiagnosticoNombre",gxold:"O17DiagnosticoNombre",gxvar:"A17DiagnosticoNombre",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A17DiagnosticoNombre=a},v2z:function(a){gx.O.Z17DiagnosticoNombre=a},v2c:function(){gx.fn.setGridControlValue("DIAGNOSTICONOMBRE",gx.fn.currentGridRowImpl(36),gx.O.A17DiagnosticoNombre,0)},c2v:function(){gx.O.A17DiagnosticoNombre=this.val()},val:function(){return gx.fn.getGridControlValue("DIAGNOSTICONOMBRE",gx.fn.currentGridRowImpl(36))},nac:function(){return!1}};this.GXValidFnc[40]={lvl:2,type:"svchar",
len:40,dec:0,sign:!1,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"DIAGNOSTICOTITULO",gxz:"Z18DiagnosticoTitulo",gxold:"O18DiagnosticoTitulo",gxvar:"A18DiagnosticoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A18DiagnosticoTitulo=a},v2z:function(a){gx.O.Z18DiagnosticoTitulo=a},v2c:function(){gx.fn.setGridControlValue("DIAGNOSTICOTITULO",gx.fn.currentGridRowImpl(36),gx.O.A18DiagnosticoTitulo,0)},c2v:function(){gx.O.A18DiagnosticoTitulo=
this.val()},val:function(){return gx.fn.getGridControlValue("DIAGNOSTICOTITULO",gx.fn.currentGridRowImpl(36))},nac:function(){return!1}};this.GXValidFnc[41]={lvl:2,type:"boolean",len:4,dec:0,sign:!1,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"DIAGNOSTICOINICIAL",gxz:"Z49DiagnosticoInicial",gxold:"O49DiagnosticoInicial",gxvar:"A49DiagnosticoInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:"text",v2v:function(a){gx.O.A49DiagnosticoInicial=gx.lang.booleanValue(a)},
v2z:function(a){gx.O.Z49DiagnosticoInicial=gx.lang.booleanValue(a)},v2c:function(){gx.fn.setGridCheckBoxValue("DIAGNOSTICOINICIAL",gx.fn.currentGridRowImpl(36),gx.O.A49DiagnosticoInicial,!0)},c2v:function(){gx.O.A49DiagnosticoInicial=this.val()},val:function(){return gx.fn.getGridCheckBoxValue("DIAGNOSTICOINICIAL",gx.fn.currentGridRowImpl(36),!0,!1)},nac:function(){return!1}};this.GXValidFnc[44]={fld:"TABLE4",grid:0};this.OV6cDiagnosticoId=this.ZV6cDiagnosticoId=this.AV6cDiagnosticoId=0;this.OV8cDiagnosticoTitulo=
this.ZV8cDiagnosticoTitulo=this.AV8cDiagnosticoTitulo=this.OV7cDiagnosticoNombre=this.ZV7cDiagnosticoNombre=this.AV7cDiagnosticoNombre="";this.OV9cDiagnosticoInicial=this.ZV9cDiagnosticoInicial=this.AV9cDiagnosticoInicial=!1;this.OV5LinkSelection=this.ZV5LinkSelection="";this.O16DiagnosticoId=this.Z16DiagnosticoId=0;this.O18DiagnosticoTitulo=this.Z18DiagnosticoTitulo=this.O17DiagnosticoNombre=this.Z17DiagnosticoNombre="";this.O49DiagnosticoInicial=this.Z49DiagnosticoInicial=!1;this.AV10pDiagnosticoId=
0;this.AV5LinkSelection="";this.A16DiagnosticoId=0;this.A18DiagnosticoTitulo=this.A17DiagnosticoNombre="";this.A49DiagnosticoInicial=!1;this.ServerEvents=["e131l2_client","e141l1_client"];this.VarControlMap.AV10pDiagnosticoId={id:"vPDIAGNOSTICOID",grid:0,type:"int"};b.addRefreshingVar(this.GXValidFnc[14]);b.addRefreshingVar(this.GXValidFnc[19]);b.addRefreshingVar(this.GXValidFnc[24]);b.addRefreshingVar(this.GXValidFnc[29]);this.SetStandaloneVars()}gx00c0.prototype=new gx.GxObject;gx.setParentObj(new gx00c0);
