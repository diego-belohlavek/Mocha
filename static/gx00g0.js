gx.evt.autoSkip=!1;
function gx00g0(){this.ServerClass="Gx00G0";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV8pResultId=gx.fn.getIntegerValue("vPRESULTID",",")};this.e13182_client=function(a){this.executeServerEvent("ENTER",!0,a)};this.e14181_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,8,9,12,14,17,19,22,23,27,28,29,32];this.GXLastCtrlId=32;var b=this.Grid1Container=
new gx.grid.grid(this,2,"WbpLvl2",26,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00g0",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","New row",!0,!1,!1,null,null,!1,"");b.addBitmap("&Linkselection","vLINKSELECTION",27,0,"px",17,"px",null,"","","Image");b.addSingleLineEdit(36,28,"RESULTID","Id","","ResultId","int",0,"px",4,4,"right",null,[],36,"ResultId",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(16,29,"DIAGNOSTICOID","Diagnostico Id","","DiagnosticoId","int",0,"px",4,4,"right",
null,[],16,"DiagnosticoId",!0,0,!1,!1,"Attribute",1);this.setGrid(b);this.GXValidFnc[2]={fld:"TABLE1",grid:0};this.GXValidFnc[8]={fld:"GROUP1",grid:0};this.GXValidFnc[9]={fld:"TABLE2",grid:0};this.GXValidFnc[12]={fld:"TEXTBLOCKRESULTID",format:0,grid:0};this.GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCRESULTID",gxz:"ZV6cResultId",gxold:"OV6cResultId",gxvar:"AV6cResultId",ucs:[],op:[],ip:[],nacdep:[],
ctrltype:"edit",v2v:function(a){gx.O.AV6cResultId=gx.num.intval(a)},v2z:function(a){gx.O.ZV6cResultId=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vCRESULTID",gx.O.AV6cResultId,0)},c2v:function(){gx.O.AV6cResultId=this.val()},val:function(){return gx.fn.getIntegerValue("vCRESULTID",",")},nac:function(){return!1}};this.GXValidFnc[17]={fld:"TEXTBLOCKDIAGNOSTICOID",format:0,grid:0};this.GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,
rgrid:[this.Grid1Container],fld:"vCDIAGNOSTICOID",gxz:"ZV7cDiagnosticoId",gxold:"OV7cDiagnosticoId",gxvar:"AV7cDiagnosticoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV7cDiagnosticoId=gx.num.intval(a)},v2z:function(a){gx.O.ZV7cDiagnosticoId=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vCDIAGNOSTICOID",gx.O.AV7cDiagnosticoId,0)},c2v:function(){gx.O.AV7cDiagnosticoId=this.val()},val:function(){return gx.fn.getIntegerValue("vCDIAGNOSTICOID",",")},nac:function(){return!1}};
this.GXValidFnc[22]={fld:"GROUP2",grid:0};this.GXValidFnc[23]={fld:"TABLE3",grid:0};this.GXValidFnc[27]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.AV5LinkSelection=a},v2z:function(a){gx.O.ZV5LinkSelection=a},v2c:function(){gx.fn.setGridMultimediaValue("vLINKSELECTION",
gx.fn.currentGridRowImpl(26),gx.O.AV5LinkSelection,gx.O.AV11Linkselection_GXI)},c2v:function(){gx.O.AV11Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(){return gx.fn.getGridControlValue("vLINKSELECTION",gx.fn.currentGridRowImpl(26))},val_GXI:function(){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",gx.fn.currentGridRowImpl(26))},gxvar_GXI:"AV11Linkselection_GXI",nac:function(){return!1}};this.GXValidFnc[28]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,
isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RESULTID",gxz:"Z36ResultId",gxold:"O36ResultId",gxvar:"A36ResultId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A36ResultId=gx.num.intval(a)},v2z:function(a){gx.O.Z36ResultId=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("RESULTID",gx.fn.currentGridRowImpl(26),gx.O.A36ResultId,0)},c2v:function(){gx.O.A36ResultId=this.val()},val:function(){return gx.fn.getGridIntegerValue("RESULTID",
gx.fn.currentGridRowImpl(26),",")},nac:function(){return!1}};this.GXValidFnc[29]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DIAGNOSTICOID",gxz:"Z16DiagnosticoId",gxold:"O16DiagnosticoId",gxvar:"A16DiagnosticoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A16DiagnosticoId=gx.num.intval(a)},v2z:function(a){gx.O.Z16DiagnosticoId=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("DIAGNOSTICOID",
gx.fn.currentGridRowImpl(26),gx.O.A16DiagnosticoId,0)},c2v:function(){gx.O.A16DiagnosticoId=this.val()},val:function(){return gx.fn.getGridIntegerValue("DIAGNOSTICOID",gx.fn.currentGridRowImpl(26),",")},nac:function(){return!1}};this.GXValidFnc[32]={fld:"TABLE4",grid:0};this.OV7cDiagnosticoId=this.ZV7cDiagnosticoId=this.AV7cDiagnosticoId=this.OV6cResultId=this.ZV6cResultId=this.AV6cResultId=0;this.OV5LinkSelection=this.ZV5LinkSelection="";this.AV8pResultId=this.O16DiagnosticoId=this.Z16DiagnosticoId=
this.O36ResultId=this.Z36ResultId=0;this.AV5LinkSelection="";this.A16DiagnosticoId=this.A36ResultId=0;this.ServerEvents=["e13182_client","e14181_client"];this.VarControlMap.AV8pResultId={id:"vPRESULTID",grid:0,type:"int"};b.addRefreshingVar(this.GXValidFnc[14]);b.addRefreshingVar(this.GXValidFnc[19]);this.SetStandaloneVars()}gx00g0.prototype=new gx.GxObject;gx.setParentObj(new gx00g0);
