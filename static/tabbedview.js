gx.evt.autoSkip=!1;
function tabbedview(a){this.ServerClass="TabbedView";this.PackageName="";this.setObjectType("web");this.setCmpContext(a);this.ReadonlyForm=!0;this.skipOnEnter=this.hasEnterEvent=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.e110j2_client=function(){this.executeServerEvent("HISTORYMANAGER.URLCHANGED",!0)};this.e150j2_client=function(){this.executeServerEvent("ENTER",!0)};this.e160j2_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,6,7,8,
11];this.GXLastCtrlId=11;a=this.HISTORYMANAGERContainer=gx.uc.getNew(this,15,0,"HistoryManager",this.CmpContext+"HISTORYMANAGERContainer","Historymanager");a.setProp("Hash","Hash","","char");a.setProp("URL","Url","","char");a.setProp("QueryString","Querystring","","char");a.setProp("Visible","Visible",!0,"bool");a.setC2ShowFunction(function(a){a.start()});a.addEventHandler("URLChanged",this.e110j2_client);this.setUserControl(a);this.GXValidFnc[2]={fld:"TABLE1",grid:0};this.GXValidFnc[6]={fld:"TABS",
format:1,grid:0};this.GXValidFnc[7]={fld:"TABPREVIOUS",grid:0};this.GXValidFnc[8]={fld:"TABNEXT",grid:0};this.GXValidFnc[11]={fld:"TABLE2",grid:0};this.AV18Tabs=[];this.AV15TabCode="";this.ServerEvents=["e110j2_client","e150j2_client","e160j2_client"];this.SetStandaloneVars();this.setComponent({id:"COMPONENT",GXClass:null,Prefix:"W0014",lvl:1})};