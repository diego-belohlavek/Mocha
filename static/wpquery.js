gx.evt.autoSkip=!1;
function wpquery(){this.ServerClass="WPQuery";this.PackageName="";this.setObjectType("web");this.skipOnEnter=this.hasEnterEvent=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.A16DiagnosticoId=gx.fn.getIntegerValue("DIAGNOSTICOID",",");this.A20UsuarioId=gx.fn.getIntegerValue("USUARIOID",",");this.A30CantSecciones=gx.fn.getIntegerValue("CANTSECCIONES",",");this.AV30SeccionParte=gx.fn.getIntegerValue("vSECCIONPARTE",",")};this.Valid_Preguntadescriptivaid=function(){try{if(0===gx.fn.currentGridRowImpl(62))return!0;
var a=gx.util.balloon.getNew("PREGUNTADESCRIPTIVAID",gx.fn.currentGridRowImpl(62));this.AnyError=0;this.StandaloneModal();this.StandaloneNotModal()}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.Valid_Seccionid=function(){try{if(0===gx.fn.currentGridRowImpl(62))return!0;var a=gx.util.balloon.getNew("SECCIONID",gx.fn.currentGridRowImpl(62));this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.Valid_Preguntaconceptualid=function(){gx.ajax.validSrvEvt("dyncall",
"valid_Preguntaconceptualid",["gx.O.A5PreguntaConceptualId","gx.O.AV13RespuestaConceptualValor"],["AV13RespuestaConceptualValor"]);return!0};this.Valid_Seccionid=function(){try{if(0===gx.fn.currentGridRowImpl(62))return!0;var a=gx.util.balloon.getNew("SECCIONID",gx.fn.currentGridRowImpl(62));this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.Valid_Preguntaconceptualid=function(){try{if(0===gx.fn.currentGridRowImpl(71))return!0;var a=gx.util.balloon.getNew("PREGUNTACONCEPTUALID",
gx.fn.currentGridRowImpl(71));this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.Valid_Seccionid=function(){try{if(0===gx.fn.currentGridRowImpl(62))return!0;var a=gx.util.balloon.getNew("SECCIONID",gx.fn.currentGridRowImpl(62));this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.Valid_Seccionid=function(){try{if(0===gx.fn.currentGridRowImpl(62))return!0;var a=gx.util.balloon.getNew("SECCIONID",gx.fn.currentGridRowImpl(62));this.AnyError=
0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.e110v2_client=function(){this.executeServerEvent("'INSERTARRESPUESTASDESCRIPTIVAS'",!1)};this.e150v2_client=function(a){this.executeServerEvent("ENTER",!0,a)};this.e160v2_client=function(a){this.executeServerEvent("CANCEL",!0,a)};this.GXValidFnc=[];this.GXCtrlIds=[7,12,15,18,21,24,25,28,34,37,40,42,44,46,48,50,52,54,59,65,66,67,68,74,75,76,77,78,79,84,87];this.GXLastCtrlId=87;var b=this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",
62,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"wpquery",[],!0,1,!0,!0,0,!1,!1,!1,"",100,"%","New row",!1,!1,!0,null,null,!1,"");b.startRow("","","","","","");b.startCell("","","","","","","","","","");b.addHtmlCode("<P>");b.addMultipleLineEdit(8,65,"PREGUNTADESCRIPTIVAENUNCIADO","","PreguntaDescriptivaEnunciado","svchar",80,"chr",3,"row","200",200,"left",null,!0,!1,0);b.addSingleLineEdit(7,66,"PREGUNTADESCRIPTIVAID","","","PreguntaDescriptivaId","int",4,"chr",4,4,"right",null,
[],7,"PreguntaDescriptivaId",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(13,67,"SECCIONID","","","SeccionId","int",4,"chr",4,4,"right",null,[],13,"SeccionId",!0,0,!1,!1,"Attribute",1);b.addHtmlCode("<P/>");b.addHtmlCode("<P/>");b.addHtmlCode("<P/>");b.addHtmlCode("<P/>");b.addHtmlCode("<P/>");b.addHtmlCode("<P/>");b.addHtmlCode("<P/>");b.addHtmlCode("</P><P>");b.addMultipleLineEdit("Respuestadescriptivavalor",68,"vRESPUESTADESCRIPTIVAVALOR","","RespuestaDescriptivaValor","vchar",99,"%",5,"row",
"2097152",2097152,"left",null,!0,!1,0);b.addHtmlCode("<P/>");b.addHtmlCode("<P/>");b.addHtmlCode("</P>");b.endCell();b.endRow();this.setGrid(b);var c=this.Grid2Container=new gx.grid.grid(this,6,"WbpLvl6",71,"Grid2","Grid2","Grid2Container",this.CmpContext,this.IsMasterPage,"wpquery",[],!0,1,!0,!0,0,!1,!1,!1,"",100,"%","New row",!1,!1,!0,null,null,!1,"");c.startRow("","","","","","");c.startCell("","","","","","","","","","");c.addHtmlCode("<P/>");c.addHtmlCode("<P>");c.addTextBlock("TEXTBLOCK1",null);
c.addHtmlCode("</P><P>");c.addSingleLineEdit(32,75,"SECCIONPUNTO","","","SeccionPunto","svchar",80,"chr",100,80,"left",null,[],32,"SeccionPunto",!0,0,!1,!1,"PreguntaEnunciado",1);c.addSingleLineEdit(6,76,"PREGUNTACONCEPTUALDESCRIPCION","","","PreguntaConceptualDescripcion","svchar",40,"chr",40,40,"left",null,[],6,"PreguntaConceptualDescripcion",!0,0,!1,!1,"PreguntaEnunciado",1);c.addSingleLineEdit(5,77,"PREGUNTACONCEPTUALID","","","PreguntaConceptualId","int",4,"chr",4,4,"right",null,[],5,"PreguntaConceptualId",
!0,0,!1,!1,"Attribute",1);c.addSingleLineEdit(13,78,"SECCIONID","","","SeccionId","int",4,"chr",4,4,"right",null,[],13,"SeccionId",!0,0,!1,!1,"Attribute",1);c.addHtmlCode("<P/>");c.addHtmlCode('<P align="center">');c.addHtmlCode("</P>");c.addComboBox("Respuestaconceptualvalor",79,"vRESPUESTACONCEPTUALVALOR","","RespuestaConceptualValor","int",null,0,!0,!1,80,"chr");c.addHtmlCode("<P/>");c.addHtmlCode("<P/>");c.addHtmlCode("</P>");c.endCell();c.endRow();this.setGrid(c);this.GXValidFnc[7]={fld:"TABLE1",
grid:0};this.GXValidFnc[12]={fld:"TABLE3",grid:0};this.GXValidFnc[15]={fld:"TABLE4",grid:0};this.GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"SECCIONTITULO",gxz:"Z25SeccionTitulo",gxold:"O25SeccionTitulo",gxvar:"A25SeccionTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A25SeccionTitulo=a},v2z:function(a){gx.O.Z25SeccionTitulo=a},v2c:function(){gx.fn.setControlValue("SECCIONTITULO",gx.O.A25SeccionTitulo,0)},c2v:function(){gx.O.A25SeccionTitulo=
this.val()},val:function(){return gx.fn.getControlValue("SECCIONTITULO")},nac:function(){return!1}};this.GXValidFnc[21]={fld:"TABLE5",grid:0};this.GXValidFnc[24]={lvl:0,type:"vchar",len:2097152,dec:0,sign:!1,ro:1,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"SECCIONENUNCIADO",gxz:"Z14SeccionEnunciado",gxold:"O14SeccionEnunciado",gxvar:"A14SeccionEnunciado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A14SeccionEnunciado=a},v2z:function(a){gx.O.Z14SeccionEnunciado=
a},v2c:function(){gx.fn.setControlValue("SECCIONENUNCIADO",gx.O.A14SeccionEnunciado,0)},c2v:function(){gx.O.A14SeccionEnunciado=this.val()},val:function(){return gx.fn.getControlValue("SECCIONENUNCIADO")},nac:function(){return!1}};this.GXValidFnc[25]={fld:"TABLE6",grid:0};this.GXValidFnc[28]={lvl:0,type:"bits",len:1024,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"SECCIONIMAGEN",gxz:"Z15SeccionImagen",gxold:"O15SeccionImagen",gxvar:"A15SeccionImagen",ucs:[],op:[],ip:[],nacdep:[],
ctrltype:"edit",v2v:function(a){gx.O.A15SeccionImagen=a},v2z:function(a){gx.O.Z15SeccionImagen=a},v2c:function(){gx.fn.setMultimediaValue("SECCIONIMAGEN",gx.O.A15SeccionImagen,gx.O.A40000SeccionImagen_GXI)},c2v:function(){gx.O.A40000SeccionImagen_GXI=this.val_GXI();gx.O.A15SeccionImagen=this.val()},val:function(){return gx.fn.getBlobValue("SECCIONIMAGEN")},val_GXI:function(){return gx.fn.getControlValue("SECCIONIMAGEN_GXI")},gxvar_GXI:"A40000SeccionImagen_GXI",nac:function(){return!1}};this.GXValidFnc[34]=
{fld:"PASO",format:0,grid:0};this.GXValidFnc[37]={fld:"TABLE8",grid:0};this.GXValidFnc[40]={fld:"FLECHA1",grid:0};this.GXValidFnc[42]={fld:"IMAGE1",grid:0};this.GXValidFnc[44]={fld:"FLECHA2",grid:0};this.GXValidFnc[46]={fld:"IMAGE2",grid:0};this.GXValidFnc[48]={fld:"FLECHA3",grid:0};this.GXValidFnc[50]={fld:"IMAGE3",grid:0};this.GXValidFnc[52]={fld:"FLECHA4",grid:0};this.GXValidFnc[54]={fld:"IMAGE4",grid:0};this.GXValidFnc[59]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,
isvalid:null,fld:"SECCIONPUNTO",gxz:"Z32SeccionPunto",gxold:"O32SeccionPunto",gxvar:"A32SeccionPunto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A32SeccionPunto=a},v2z:function(a){gx.O.Z32SeccionPunto=a},v2c:function(){gx.fn.setControlValue("SECCIONPUNTO",gx.O.A32SeccionPunto,0)},c2v:function(){gx.O.A32SeccionPunto=this.val()},val:function(){return gx.fn.getControlValue("SECCIONPUNTO")},nac:function(){return!1}};this.GXValidFnc[65]={lvl:2,type:"svchar",len:200,dec:0,sign:!1,
ro:1,isacc:0,multiline:!0,grid:62,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"PREGUNTADESCRIPTIVAENUNCIADO",gxz:"Z8PreguntaDescriptivaEnunciado",gxold:"O8PreguntaDescriptivaEnunciado",gxvar:"A8PreguntaDescriptivaEnunciado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A8PreguntaDescriptivaEnunciado=a},v2z:function(a){gx.O.Z8PreguntaDescriptivaEnunciado=a},v2c:function(){gx.fn.setGridControlValue("PREGUNTADESCRIPTIVAENUNCIADO",gx.fn.currentGridRowImpl(62),
gx.O.A8PreguntaDescriptivaEnunciado,0)},c2v:function(){gx.O.A8PreguntaDescriptivaEnunciado=this.val()},val:function(){return gx.fn.getGridControlValue("PREGUNTADESCRIPTIVAENUNCIADO",gx.fn.currentGridRowImpl(62))},nac:function(){return!1}};this.GXValidFnc[66]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:62,gxgrid:this.Grid1Container,fnc:this.Valid_Preguntadescriptivaid,isvalid:null,rgrid:[],fld:"PREGUNTADESCRIPTIVAID",gxz:"Z7PreguntaDescriptivaId",gxold:"O7PreguntaDescriptivaId",
gxvar:"A7PreguntaDescriptivaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A7PreguntaDescriptivaId=gx.num.intval(a)},v2z:function(a){gx.O.Z7PreguntaDescriptivaId=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("PREGUNTADESCRIPTIVAID",gx.fn.currentGridRowImpl(62),gx.O.A7PreguntaDescriptivaId,0)},c2v:function(){gx.O.A7PreguntaDescriptivaId=this.val()},val:function(){return gx.fn.getGridIntegerValue("PREGUNTADESCRIPTIVAID",gx.fn.currentGridRowImpl(62),
",")},nac:function(){return!1}};this.GXValidFnc[67]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:62,gxgrid:this.Grid1Container,fnc:this.Valid_Seccionid,isvalid:null,rgrid:[this.Grid1Container,this.Grid2Container],fld:"SECCIONID",gxz:"Z13SeccionId",gxold:"O13SeccionId",gxvar:"A13SeccionId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A13SeccionId=gx.num.intval(a)},v2z:function(a){gx.O.Z13SeccionId=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("SECCIONID",
gx.fn.currentGridRowImpl(62),gx.O.A13SeccionId,0)},c2v:function(){gx.O.A13SeccionId=this.val()},val:function(){return gx.fn.getGridIntegerValue("SECCIONID",gx.fn.currentGridRowImpl(62),",")},nac:function(){return!1}};this.GXValidFnc[68]={lvl:2,type:"vchar",len:2097152,dec:0,sign:!1,ro:0,isacc:0,multiline:!0,grid:62,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"vRESPUESTADESCRIPTIVAVALOR",gxz:"ZV15RespuestaDescriptivaValor",gxold:"OV15RespuestaDescriptivaValor",gxvar:"AV15RespuestaDescriptivaValor",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",placeholder:"Please make a description of the facts, actions and the quantitative data that respond the question. Please minimize the use of adjectives.",autoCorrect:"1",v2v:function(a){gx.O.AV15RespuestaDescriptivaValor=a},v2z:function(a){gx.O.ZV15RespuestaDescriptivaValor=a},v2c:function(){gx.fn.setGridControlValue("vRESPUESTADESCRIPTIVAVALOR",gx.fn.currentGridRowImpl(62),gx.O.AV15RespuestaDescriptivaValor,0)},c2v:function(){gx.O.AV15RespuestaDescriptivaValor=
this.val()},val:function(){return gx.fn.getGridControlValue("vRESPUESTADESCRIPTIVAVALOR",gx.fn.currentGridRowImpl(62))},nac:function(){return!1}};this.GXValidFnc[74]={fld:"TEXTBLOCK1",format:0,grid:71};this.GXValidFnc[75]={lvl:6,type:"svchar",len:100,dec:0,sign:!1,ro:1,isacc:0,grid:71,gxgrid:this.Grid2Container,fnc:null,isvalid:null,fld:"SECCIONPUNTO",gxz:"Z32SeccionPunto",gxold:"O32SeccionPunto",gxvar:"A32SeccionPunto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",
v2v:function(a){gx.O.A32SeccionPunto=a},v2z:function(a){gx.O.Z32SeccionPunto=a},v2c:function(){gx.fn.setGridControlValue("SECCIONPUNTO",gx.fn.currentGridRowImpl(71),gx.O.A32SeccionPunto,0)},c2v:function(){gx.O.A32SeccionPunto=this.val()},val:function(){return gx.fn.getGridControlValue("SECCIONPUNTO",gx.fn.currentGridRowImpl(71))},nac:function(){return!1}};this.GXValidFnc[76]={lvl:6,type:"svchar",len:40,dec:0,sign:!1,ro:1,isacc:0,grid:71,gxgrid:this.Grid2Container,fnc:null,isvalid:null,fld:"PREGUNTACONCEPTUALDESCRIPCION",
gxz:"Z6PreguntaConceptualDescripcion",gxold:"O6PreguntaConceptualDescripcion",gxvar:"A6PreguntaConceptualDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A6PreguntaConceptualDescripcion=a},v2z:function(a){gx.O.Z6PreguntaConceptualDescripcion=a},v2c:function(){gx.fn.setGridControlValue("PREGUNTACONCEPTUALDESCRIPCION",gx.fn.currentGridRowImpl(71),gx.O.A6PreguntaConceptualDescripcion,0)},c2v:function(){gx.O.A6PreguntaConceptualDescripcion=
this.val()},val:function(){return gx.fn.getGridControlValue("PREGUNTACONCEPTUALDESCRIPCION",gx.fn.currentGridRowImpl(71))},nac:function(){return!1}};this.GXValidFnc[77]={lvl:6,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:71,gxgrid:this.Grid2Container,fnc:this.Valid_Preguntaconceptualid,isvalid:null,rgrid:[],fld:"PREGUNTACONCEPTUALID",gxz:"Z5PreguntaConceptualId",gxold:"O5PreguntaConceptualId",gxvar:"A5PreguntaConceptualId",ucs:[],op:[79],ip:[79,77],nacdep:[],ctrltype:"edit",inputType:"text",
v2v:function(a){gx.O.A5PreguntaConceptualId=gx.num.intval(a)},v2z:function(a){gx.O.Z5PreguntaConceptualId=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("PREGUNTACONCEPTUALID",gx.fn.currentGridRowImpl(71),gx.O.A5PreguntaConceptualId,0)},c2v:function(){gx.O.A5PreguntaConceptualId=this.val()},val:function(){return gx.fn.getGridIntegerValue("PREGUNTACONCEPTUALID",gx.fn.currentGridRowImpl(71),",")},nac:function(){return!1}};this.GXValidFnc[78]={lvl:6,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",
ro:1,isacc:0,grid:71,gxgrid:this.Grid2Container,fnc:this.Valid_Seccionid,isvalid:null,rgrid:[this.Grid1Container,this.Grid2Container],fld:"SECCIONID",gxz:"Z13SeccionId",gxold:"O13SeccionId",gxvar:"A13SeccionId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A13SeccionId=gx.num.intval(a)},v2z:function(a){gx.O.Z13SeccionId=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("SECCIONID",gx.fn.currentGridRowImpl(71),gx.O.A13SeccionId,0)},c2v:function(){gx.O.A13SeccionId=
this.val()},val:function(){return gx.fn.getGridIntegerValue("SECCIONID",gx.fn.currentGridRowImpl(71),",")},nac:function(){return!1}};this.GXValidFnc[79]={lvl:6,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,isacc:0,grid:71,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vRESPUESTACONCEPTUALVALOR",gxz:"ZV13RespuestaConceptualValor",gxold:"OV13RespuestaConceptualValor",gxvar:"AV13RespuestaConceptualValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",inputType:"text",v2v:function(a){gx.O.AV13RespuestaConceptualValor=
gx.num.intval(a)},v2z:function(a){gx.O.ZV13RespuestaConceptualValor=gx.num.intval(a)},v2c:function(){gx.fn.setGridComboBoxValue("vRESPUESTACONCEPTUALVALOR",gx.fn.currentGridRowImpl(71),gx.O.AV13RespuestaConceptualValor)},c2v:function(){gx.O.AV13RespuestaConceptualValor=this.val()},val:function(){return gx.fn.getGridIntegerValue("vRESPUESTACONCEPTUALVALOR",gx.fn.currentGridRowImpl(71),",")},nac:function(){return!1}};this.GXValidFnc[84]={fld:"TABLE2",grid:0};this.GXValidFnc[87]={fld:"TABLE7",grid:0};
this.O8PreguntaDescriptivaEnunciado=this.Z8PreguntaDescriptivaEnunciado=this.O32SeccionPunto=this.Z32SeccionPunto=this.A32SeccionPunto=this.O15SeccionImagen=this.Z15SeccionImagen=this.A15SeccionImagen=this.A40000SeccionImagen_GXI=this.O14SeccionEnunciado=this.Z14SeccionEnunciado=this.A14SeccionEnunciado=this.O25SeccionTitulo=this.Z25SeccionTitulo=this.A25SeccionTitulo="";this.O13SeccionId=this.Z13SeccionId=this.O7PreguntaDescriptivaId=this.Z7PreguntaDescriptivaId=0;this.O6PreguntaConceptualDescripcion=
this.Z6PreguntaConceptualDescripcion=this.OV15RespuestaDescriptivaValor=this.ZV15RespuestaDescriptivaValor="";this.OV13RespuestaConceptualValor=this.ZV13RespuestaConceptualValor=this.O5PreguntaConceptualId=this.Z5PreguntaConceptualId=0;this.A40000SeccionImagen_GXI="";this.AV30SeccionParte=this.A30CantSecciones=this.A20UsuarioId=this.A16DiagnosticoId=0;this.A8PreguntaDescriptivaEnunciado="";this.A13SeccionId=this.A7PreguntaDescriptivaId=0;this.A6PreguntaConceptualDescripcion=this.AV15RespuestaDescriptivaValor=
"";this.A10RespuestaConceptualValor=this.A9RespuestaConceptualId=this.AV13RespuestaConceptualValor=this.A5PreguntaConceptualId=0;this.A12RespuestaDescriptivaValor="";this.A44SeccionSiguiente=this.A11RespuestaDescriptivaId=0;this.ServerEvents=["e110v2_client","e150v2_client","e160v2_client"];this.VarControlMap.A16DiagnosticoId={id:"DIAGNOSTICOID",grid:0,type:"int"};this.VarControlMap.A20UsuarioId={id:"USUARIOID",grid:0,type:"int"};this.VarControlMap.A30CantSecciones={id:"CANTSECCIONES",grid:0,type:"int"};
this.VarControlMap.AV30SeccionParte={id:"vSECCIONPARTE",grid:0,type:"int"};this.VarControlMap.A12RespuestaDescriptivaValor={id:"RESPUESTADESCRIPTIVAVALOR",grid:0,type:"vchar"};this.VarControlMap.A11RespuestaDescriptivaId={id:"RESPUESTADESCRIPTIVAID",grid:0,type:"int"};this.VarControlMap.AV30SeccionParte={id:"vSECCIONPARTE",grid:0,type:"int"};b.addRefreshingVar({rfrVar:"A13SeccionId",rfrProp:"Value",gxAttId:"13"});b.addRefreshingVar({rfrVar:"A7PreguntaDescriptivaId",rfrProp:"Visible",gxAttId:"7"});
b.addRefreshingVar({rfrVar:"A12RespuestaDescriptivaValor"});b.addRefreshingVar({rfrVar:"A11RespuestaDescriptivaId"});b.addRefreshingVar({rfrVar:"AV30SeccionParte"});c.addRefreshingVar({rfrVar:"A13SeccionId",rfrProp:"Value",gxAttId:"13"});c.addRefreshingVar({rfrVar:"A6PreguntaConceptualDescripcion",rfrProp:"Visible",gxAttId:"6"});c.addRefreshingVar({rfrVar:"A5PreguntaConceptualId",rfrProp:"Visible",gxAttId:"5"});c.addRefreshingVar({rfrVar:"A10RespuestaConceptualValor"});c.addRefreshingVar({rfrVar:"A9RespuestaConceptualId"});
c.addRefreshingVar({rfrVar:"AV30SeccionParte"});this.SetStandaloneVars()}wpquery.prototype=new gx.GxObject;gx.setParentObj(new wpquery);
