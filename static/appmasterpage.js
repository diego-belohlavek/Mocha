gx.evt.autoSkip=!1;
function appmasterpage(){this.ServerClass="AppMasterPage";this.PackageName="";this.setObjectType("web");this.IsMasterPage=!0;this.skipOnEnter=this.hasEnterEvent=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.e14012_client=function(){this.executeServerEvent("ENTER_MPAGE",!0)};this.e15012_client=function(){this.executeServerEvent("CANCEL_MPAGE",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,5,8,10,13,15,17,19,21,32,37,40];this.GXLastCtrlId=40;this.GXValidFnc[2]={fld:"TABLE1",grid:0};this.GXValidFnc[5]=
{fld:"TABLE2",grid:0};this.GXValidFnc[8]={fld:"APPLICATIONHEADER",format:0,grid:0};this.GXValidFnc[10]={fld:"TABLE3",grid:0};this.GXValidFnc[13]={fld:"ENGLISH",format:0,grid:0};this.GXValidFnc[15]={fld:"PIPE",format:0,grid:0};this.GXValidFnc[17]={fld:"SPANISH",format:0,grid:0};this.GXValidFnc[19]={fld:"PIPE2",format:0,grid:0};this.GXValidFnc[21]={fld:"PORTUGUESE",format:0,grid:0};this.GXValidFnc[32]={fld:"TABLE6",grid:0};this.GXValidFnc[37]={fld:"TABLE7",grid:0};this.GXValidFnc[40]={fld:"TEXTBLOCK1",
format:0,grid:0};this.ServerEvents=["e14012_client","e15012_client"];this.SetStandaloneVars();this.setComponent({id:"WCRECENTLINKS",GXClass:null,Prefix:"MPW0024",lvl:1})}appmasterpage.prototype=new gx.GxObject;gx.setMasterPage(new appmasterpage);
