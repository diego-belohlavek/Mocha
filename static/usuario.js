gx.evt.autoSkip=!1;
function usuario(){this.ServerClass="Usuario";this.PackageName="";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.SetStandaloneVars=function(){this.A20UsuarioId=gx.fn.getIntegerValue("USUARIOID",",");this.Gx_mode=gx.fn.getControlValue("vMODE");this.A26DiagnosticoRealizado=gx.fn.getIntegerValue("DIAGNOSTICOREALIZADO",",")};this.Valid_Usuarionombre=function(){try{var a=gx.util.balloon.getNew("USUARIONOMBRE");this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};
this.Valid_Usuariomail=function(){try{var a=gx.util.balloon.getNew("USUARIOMAIL");this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.Valid_Usuariopass=function(){try{var a=gx.util.balloon.getNew("USUARIOPASS");this.AnyError=0;if(""==this.A22UsuarioMail||""==this.A21UsuarioNombre||""==this.A23UsuarioPass)try{a.setError("You must complete all fields"),this.AnyError=1}catch(b){}}catch(c){}try{return null==a?!0:a.show()}catch(d){}return!0};this.Valid_Diagnosticoid=function(){this.sMode15=
this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(15,58);this.standaloneModal0915();this.standaloneNotModal0915();if(0===gx.fn.currentGridRowImpl(58))return this.Gx_mode=this.sMode15,!0;var a=gx.util.balloon.getNew("DIAGNOSTICOID",gx.fn.currentGridRowImpl(58));if(gx.fn.gridDuplicateKey(59))return a.setError(gx.text.format(gx.getMessage("GXM_1004"),"Diagnosticos","","","","","","","","")),this.AnyError=1,this.Gx_mode=this.sMode15,a.show();gx.ajax.validSrvEvt("dyncall","valid_Diagnosticoid",["gx.O.A16DiagnosticoId",
"gx.O.A17DiagnosticoNombre"],["A17DiagnosticoNombre"]);this.Gx_mode=this.sMode15;return!0};this.standaloneModal0915=function(){try{"INS"!=this.Gx_mode?gx.fn.setCtrlProperty("DIAGNOSTICOID","Enabled",0):gx.fn.setCtrlProperty("DIAGNOSTICOID","Enabled",1)}catch(a){}return!0};this.standaloneNotModal0915=function(){return!0};this.e120914_client=function(){this.executeServerEvent("ENTER",!0)};this.e130914_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,5,9,10,
11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,40,42,45,47,50,52,55,57,59,60];this.GXLastCtrlId=60;var b=this.Grid1Container=new gx.grid.grid(this,15,"Diagnosticos",58,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"usuario",[16],!1,1,!1,!0,5,!1,!1,!1,"",100,"%","New row",!0,!1,!1,null,null,!1,"");b.addSingleLineEdit(16,59,"DIAGNOSTICOID","Diagnostic ID","","DiagnosticoId","int",0,"px",4,4,"right",null,[],16,"DiagnosticoId",!0,0,!1,!1,"Attribute",1);b.addBitmap("prompt_16",
"PROMPT_16",66,0,"",0,"",null,"","","Image");b.addSingleLineEdit(17,60,"DIAGNOSTICONOMBRE","Diagnostic Name","","DiagnosticoNombre","svchar",0,"px",40,40,"left",null,[],17,"DiagnosticoNombre",!0,0,!1,!1,"Attribute",1);this.setGrid(b);this.GXValidFnc[2]={fld:"TABLEMAIN",grid:0};this.GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};this.GXValidFnc[9]={fld:"BTN_FIRST",grid:0};this.GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};this.GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};this.GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",
grid:0};this.GXValidFnc[13]={fld:"BTN_NEXT",grid:0};this.GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};this.GXValidFnc[15]={fld:"BTN_LAST",grid:0};this.GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};this.GXValidFnc[17]={fld:"BTN_SELECT",grid:0};this.GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};this.GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};this.GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};this.GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};this.GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",
grid:0};this.GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};this.GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};this.GXValidFnc[27]={fld:"GROUPDATA",grid:0};this.GXValidFnc[28]={fld:"TABLE1",grid:0};this.GXValidFnc[34]={fld:"TABLE2",grid:0};this.GXValidFnc[40]={fld:"TEXTBLOCKUSUARIONOMBRE",format:0,grid:0};this.GXValidFnc[42]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuarionombre,isvalid:null,fld:"USUARIONOMBRE",gxz:"Z21UsuarioNombre",gxold:"O21UsuarioNombre",
gxvar:"A21UsuarioNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A21UsuarioNombre=a},v2z:function(a){gx.O.Z21UsuarioNombre=a},v2c:function(){gx.fn.setControlValue("USUARIONOMBRE",gx.O.A21UsuarioNombre,0)},c2v:function(){gx.O.A21UsuarioNombre=this.val()},val:function(){return gx.fn.getControlValue("USUARIONOMBRE")},nac:function(){return!1}};this.GXValidFnc[45]={fld:"TEXTBLOCKUSUARIOMAIL",format:0,grid:0};this.GXValidFnc[47]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,
gxgrid:null,fnc:this.Valid_Usuariomail,isvalid:null,fld:"USUARIOMAIL",gxz:"Z22UsuarioMail",gxold:"O22UsuarioMail",gxvar:"A22UsuarioMail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A22UsuarioMail=a},v2z:function(a){gx.O.Z22UsuarioMail=a},v2c:function(){gx.fn.setControlValue("USUARIOMAIL",gx.O.A22UsuarioMail,0)},c2v:function(){gx.O.A22UsuarioMail=this.val()},val:function(){return gx.fn.getControlValue("USUARIOMAIL")},nac:function(){return!1}};this.GXValidFnc[50]={fld:"TEXTBLOCKUSUARIOPASS",
format:0,grid:0};this.GXValidFnc[52]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuariopass,isvalid:null,fld:"USUARIOPASS",gxz:"Z23UsuarioPass",gxold:"O23UsuarioPass",gxvar:"A23UsuarioPass",ucs:[],op:[52,42,47],ip:[52,42,47],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A23UsuarioPass=a},v2z:function(a){gx.O.Z23UsuarioPass=a},v2c:function(){gx.fn.setControlValue("USUARIOPASS",gx.O.A23UsuarioPass,0)},c2v:function(){gx.O.A23UsuarioPass=this.val()},val:function(){return gx.fn.getControlValue("USUARIOPASS")},
nac:function(){return!1}};this.GXValidFnc[55]={fld:"TEXTBLOCK1",format:0,grid:0};this.GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOTIPO",gxz:"Z46UsuarioTipo",gxold:"O46UsuarioTipo",gxvar:"A46UsuarioTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(a){gx.O.A46UsuarioTipo=gx.num.intval(a)},v2z:function(a){gx.O.Z46UsuarioTipo=gx.num.intval(a)},v2c:function(){gx.fn.setComboBoxValue("USUARIOTIPO",gx.O.A46UsuarioTipo)},
c2v:function(){gx.O.A46UsuarioTipo=this.val()},val:function(){return gx.fn.getIntegerValue("USUARIOTIPO",",")},nac:function(){return!1}};this.GXValidFnc[59]={lvl:15,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,isacc:1,grid:58,gxgrid:this.Grid1Container,fnc:this.Valid_Diagnosticoid,isvalid:null,rgrid:[],fld:"DIAGNOSTICOID",gxz:"Z16DiagnosticoId",gxold:"O16DiagnosticoId",gxvar:"A16DiagnosticoId",ucs:[],op:[60],ip:[60,59],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A16DiagnosticoId=
gx.num.intval(a)},v2z:function(a){gx.O.Z16DiagnosticoId=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("DIAGNOSTICOID",gx.fn.currentGridRowImpl(58),gx.O.A16DiagnosticoId,0)},c2v:function(){gx.O.A16DiagnosticoId=this.val()},val:function(){return gx.fn.getGridIntegerValue("DIAGNOSTICOID",gx.fn.currentGridRowImpl(58),",")},nac:function(){return!1}};this.GXValidFnc[60]={lvl:15,type:"svchar",len:40,dec:0,sign:!1,ro:1,isacc:1,grid:58,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"DIAGNOSTICONOMBRE",
gxz:"Z17DiagnosticoNombre",gxold:"O17DiagnosticoNombre",gxvar:"A17DiagnosticoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A17DiagnosticoNombre=a},v2z:function(a){gx.O.Z17DiagnosticoNombre=a},v2c:function(){gx.fn.setGridControlValue("DIAGNOSTICONOMBRE",gx.fn.currentGridRowImpl(58),gx.O.A17DiagnosticoNombre,0)},c2v:function(){gx.O.A17DiagnosticoNombre=this.val()},val:function(){return gx.fn.getGridControlValue("DIAGNOSTICONOMBRE",gx.fn.currentGridRowImpl(58))},
nac:function(){return!1}};this.O23UsuarioPass=this.Z23UsuarioPass=this.A23UsuarioPass=this.O22UsuarioMail=this.Z22UsuarioMail=this.A22UsuarioMail=this.O21UsuarioNombre=this.Z21UsuarioNombre=this.A21UsuarioNombre="";this.O16DiagnosticoId=this.Z16DiagnosticoId=this.O46UsuarioTipo=this.Z46UsuarioTipo=this.A46UsuarioTipo=0;this.O17DiagnosticoNombre=this.Z17DiagnosticoNombre="";this.A16DiagnosticoId=0;this.A17DiagnosticoNombre="";this.A26DiagnosticoRealizado=0;this.AV8UsuarioMail="";this.AV9UsuarioTipo=
0;this.AV7Session={};this.A20UsuarioId=0;this.ServerEvents=["e120914_client","e130914_client"];this.setPrompt("PROMPT_16",[59]);this.EnterCtrl=["BTN_ENTER2","BTN_ENTER2_SEPARATOR","BTN_ENTER"];this.VarControlMap.A20UsuarioId={id:"USUARIOID",grid:0,type:"int"};this.VarControlMap.Gx_mode={id:"vMODE",grid:0,type:"char"};this.VarControlMap.A26DiagnosticoRealizado={id:"DIAGNOSTICOREALIZADO",grid:58,type:"int"};this.SetStandaloneVars()}usuario.prototype=new gx.GxObject;gx.setParentObj(new usuario);
