gx.evt.autoSkip=!1;
function unicist(){this.ServerClass="Unicist";this.PackageName="";this.setObjectType("web");this.IsMasterPage=!0;this.skipOnEnter=this.hasEnterEvent=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.e13042_client=function(){this.executeServerEvent("LOGOUT_MPAGE",!0)};this.e15042_client=function(){this.executeServerEvent("ENTER_MPAGE",!0)};this.e16042_client=function(){this.executeServerEvent("CANCEL_MPAGE",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,5,7,10,15,18,24,27,30,33,36,39,40,43,
49,53,56,61];this.GXLastCtrlId=61;this.GXValidFnc[2]={fld:"TABLE7",grid:0};this.GXValidFnc[5]={fld:"IMAGE2",grid:0};this.GXValidFnc[7]={fld:"GUIDELINES",grid:0};this.GXValidFnc[10]={fld:"TABLE2",grid:0};this.GXValidFnc[15]={fld:"TABLE4",grid:0};this.GXValidFnc[18]={fld:"IMAGE1",grid:0};this.GXValidFnc[24]={fld:"TABLE3",grid:0};this.GXValidFnc[27]={fld:"TABLE6",grid:0};this.GXValidFnc[30]={fld:"TABLE8",grid:0};this.GXValidFnc[33]={fld:"TABLE9",grid:0};this.GXValidFnc[36]={fld:"TABLE11",grid:0};this.GXValidFnc[39]=
{fld:"TEXTBLOCK3",format:0,grid:0};this.GXValidFnc[40]={fld:"TABLE10",grid:0};this.GXValidFnc[43]={fld:"TEXTBLOCK4",format:0,grid:0};this.GXValidFnc[49]={fld:"TABLE1",grid:0};this.GXValidFnc[53]={fld:"TABLE5",grid:0};this.GXValidFnc[56]={fld:"TEXTBLOCK1",format:0,grid:0};this.GXValidFnc[61]={fld:"TEXTBLOCK2",format:0,grid:0};this.ServerEvents=["e13042_client","e15042_client","e16042_client"];this.SetStandaloneVars()}unicist.prototype=new gx.GxObject;gx.setMasterPage(new unicist);
