gx.ui={grid:function(){this.gridContainer=null;this.firstTime=!0;this.loadingCollection=this.autoRefreshing=!1;this.properties=[];this.setContainerDelayed=function(a){this.gridContainer=a;this.DesignContainerName=this.ContainerName=gx.dom.id(a)};this.getContainerControl=function(){return this.gridContainer};this.me=function(){return this.gridObject()+".grid"};this.render=function(a,c,b,d){this.clearFunctions();this.refreshDynProperties();this.properties=[];for(var e=0;e<this.rows.length;e++){this.properties[e]=
[];for(var f=this.rows[e],g=0;g<this.columns.length;g++){var i=this.columns[g],j=f.gxProps[i.index],h=i.gxControl;h.grid=this.ownerGrid;h.row=f;h.gridId=this.gxId;h.gridRow=f.gxId;b?h.value=j[0]:h.setProperties.apply(h,j);this.setRenderProperties(f.gxRenderProps[g],h);!h.enabled&&h.type<=gx.html.controls.types.checkBox&&(""!==h.cssClass&&0!==h.cssClass.indexOf("Readonly"))&&(h.cssClass="Readonly"+h.cssClass);this.properties[e][g]=gx.lang.clone(h);this.addC2V(i,this.properties[e][g])}}this.firstTime=
a;this.autoRefreshing=c?!0:!1;this.loadingCollection=b?!0:!1;this.show&&(this.setC2ShowFunction(function(a){a.show();d()}),this.autoRefreshing&&(this.show(),d()));this.autoRefreshing=!1};this.addC2V=function(a,c){this.addC2VFunction(function(b){if(""!==a.gxAttName){var d=b.ParentObject.getValidStruct(a.gxId);d&&(b.ParentObject[d.gxvar]=c.value);gx.fn.setHidden(c.id,c.value)}})};this.setRenderProperties=function(a,c){if(a)for(var b in a)c[b]=a[b]};this.selectRow=function(a){if(a=this.rows[a])this.instanciateSelectionVars(a.gxId),
this.instanciateSelectedRow(a)};this.getEventRow=function(){return!gx.lang.emptyObject(this.GridRow)?this.GridRow:"0001"};this.executeEvent=function(a,c){if(a<this.columns.length&&c<this.rows.length){var b=this.properties[c][a],d=gx.html.controls.eventJSCode(b.jsScrCode,b.eventName,b.jsDynCode,b.grid,b.row);if(""!==d)gx.lang.emptyObject(b.usrOnclick)||(d="if("+b.usrOnclick+") { "+d+" }"),b=new Function(d),"function"==typeof b&&b();else if(b.clickEvent){var d=this.parentGxObject,e=b.row.gxId;this.ownerGrid.instanciateRow(e);
d[b.clickEvent].call(d,e)}}};this.addEventHandler=function(a,c){this[a]=function(){this.eventHandler(this.GridId,gx.fn.currentGridRow(this.GridId),c)}.closure(this)}}};
gx.util.balloon={balloons:{},timerOn:!1,lastLbl:null,quirksCompatMode:gx.util.browser.isIE()&&(gx.util.browser.isCompatMode()||!document.documentMode||7>=document.documentMode),impl:function(){this.init=function(a){this.id=a;this.balloonid=a+"_Balloon";this.hasMessage=!1;this.messageWar=this.messageErr="";this.isError=!1;this.active=!0;this.errorValue=null};this.clear=function(){this.hasMessage=!1;this.messageWar=this.messageErr="";this.active=!1;this.errorValue=null;gx.util.balloon.lastLbl=null};
this.setMessage=function(a){this.hasMessage||(this.messageWar=a,this.hasMessage=!0)};this.setError=function(a){this.hasMessage||(this.messageErr=a,this.hasMessage=this.isError=!0)};this.create=function(a,c,b,d){var e;e=document.createElement("span");e.id=a;e.className=b;a=document.createElement("div");if(gx.util.balloon.quirksCompatMode&&"top"==gx.csv.messagePosition){var f=gx.dom.position(c);0===f.x&&(0===f.y&&c.parentNode)&&(f=gx.dom.position(c.parentNode));var g=parseInt(f.x,10),f=parseInt(f.y,
10);0>=g&&(g=10);0>=f&&(f=20);a.style.position="absolute";a.style.top=f-gx.dom.dimensions(c).h-2+"px";a.style.left=g+"px";a.style.zIndex=1}else a.style.position="relative";e.style.display="none";e.style.className=b;b=document.createTextNode(d);e.appendChild(b);a.appendChild(e);gx.util.balloon.quirksCompatMode&&"top"==gx.csv.messagePosition?document.body.appendChild(a):("right"==gx.csv.messagePosition||"bottom"==gx.csv.messagePosition?(d=(b=c.nextSibling)?b.firstChild:null,b&&b.id&&0<b.id.indexOf("dp_trigger")?
c=b:b&&("A"==b.nodeName&&d&&"IMG"==d.nodeName&&d.id&&0===d.id.indexOf("PROMPT_"))&&(c=b),c.parentNode.insertBefore(a,c.nextSibling)):c.parentNode.insertBefore(a,c),!0===gx.csv.overlap)?(e.style.position="absolute",e.style.zIndex="1"):e.style.position="relative";return e};this.hideBalloon=function(a){try{a&&(a.style.display="none",gx.util.balloon.quirksCompatMode&&(a.parentNode.style.display="none"))}catch(c){gx.dbg.logEx(c,"gxballoon.js","hideBalloon")}};this.showBalloon=function(a){try{if("right"==
gx.csv.messagePosition||"left"==gx.csv.messagePosition?a.style.display="inline":(a.style.display="block","top"==gx.csv.messagePosition&&(!gx.util.balloon.quirksCompatMode&&!0===gx.csv.overlap)&&(a.style.top=0-gx.dom.dimensions(a).h+"px")),gx.util.balloon.quirksCompatMode)a.parentNode.style.display="block"}catch(c){gx.dbg.logEx(c,"gxballoon.js","showBalloon")}};this.show=function(a){var c,b,d,e,f,g;if(!(void 0!==document.readyState&&"complete"!=document.readyState)){try{if(!1===this.hasMessage)return!0;
b=gx.dom.el(this.id);null===b&&null!==gx.csv.validatingUC&&(b=gx.csv.validatingUC.getContainerControl());"hidden"==b.type&&(c=gx.dom.el("span_"+this.id),null!==c&&(b=c));f=!0;0<this.messageErr.length?(d="Error",e=this.messageErr):0<this.messageWar.length&&(d="Warning",e=gx.html.encode(this.messageWar));""!==d&&(gx.dom.addPrefixClass(b,d),(g=gx.dom.byId(this.balloonid))?(g.innerHTML=e,f=!1):g=this.create(this.balloonid,b,d+"Messages",e));gx.util.balloon.lastLbl&&gx.csv.oneAtAtime&&this.hideBalloon(gx.util.balloon.lastLbl);
gx.util.balloon.lastLbl=g;!0===a?gx.csv.oneAtAtime||this.showBalloon(g):this.showBalloon(g);!1===gx.util.balloon.timerOn&&0<gx.csv.dismissSeconds?(gx.util.balloon.timerOn=!0,this.timerId=setTimeout(function(){gx.util.balloon.clearAll()},1E3*gx.csv.dismissSeconds)):f&&(gx.csv.oneAtAtime&&(gx.evt.attach(b,"mouseout",gx.util.balloon.cvsMouseOutHandler.closure(this)),gx.evt.attach(b,"mouseover",gx.util.balloon.cvsMouseOverHandler.closure(this))),gx.evt.attach(b,"blur",gx.util.balloon.cvsHide.closure(this)));
this.errorValue=gx.fn.getControlValue(b.id)}catch(i){gx.dbg.logEx(i,"gxballoon.js","show")}return!this.isError}}},cvsHide:function(){var a,c,b;try{a=gx.dom.byId(this.id),b=gx.fn.getControlValue(this.id),b!=this.errorValue&&(this.errorValue=b,c=gx.dom.byId(this.balloonid),null!=c&&(gx.dom.removePrefixClass(a,"Error"),gx.dom.removePrefixClass(a,"Warning"),this.hideBalloon(c),this.active=!1))}catch(d){}},cvsMouseOutHandler:function(){if(this.active){var a=gx.dom.byId(this.balloonid);null!=a&&(gx.util.balloon.lastLbl?
gx.util.balloon.lastLbl.id!=a.id&&this.hideBalloon(a):this.hideBalloon(a))}},cvsMouseOverHandler:function(){if(this.active){var a=gx.dom.byId(this.balloonid);null!=a&&this.showBalloon(a)}},clearAll:function(){var a,c,b;this.timerOn=!1;for(b in this.balloons)a=this.balloons[b],c=gx.util.balloon.cvsHide.closure(a),a.clear(),c()},clear:function(a){var c,b,d;try{c=gx.csv.ctxControlId(a),this.balloons[c]&&(b=this.balloons[c],d=gx.util.balloon.cvsHide.closure(b),b.clear(),d())}catch(e){gx.dbg.logEx(e,"gxballoon.js",
"clear")}},getNew:function(a,c){var b,d;"undefined"!=typeof c&&(a=a+"_"+c);try{b=gx.fn.screen_CtrlRef(a),d=!gx.lang.emptyObject(b.id)?b.id:b.name,a=gx.csv.ctxControlId(d)}catch(e){gx.dbg.logEx(e,"gxballoon.js","getNew")}this.balloons[a]?(b=this.balloons[a],b.hasMessage=!1):(b=new this.impl,this.balloons[a]=b,b.init(a));return b}};
gx.ajax={reqHeader:"GxAjaxRequest",resourceProvider:"",dfTimer:null,timeoutActions:{ignore:0,warn:1},maxGETLength:function(a){return a.AjaxSecurity?600:1350},getImageUrl:function(a,c){var b=a[c];if(gx.lang.emptyObject(b))return"";"object"==typeof b&&(a[c]=gx.ajax.imageGuidToUrl(b.guid));return gx.util.resourceUrl(gx.basePath+gx.staticDirectory+a[c],!0)},imageGuidToUrl:function(a){try{if(!gx.lang.emptyObject(this.resourceProvider)){var c=gx.ajax.objectUrl(this.resourceProvider)+"?image,"+encodeURIComponent(a)+
",,"+encodeURIComponent(gx.theme);gx.http.callBackend("",c,")",!0,gx.http.modes.none,!0,"GET",null,!0);return gx.http.lastResponse}}catch(b){gx.dbg.logEx(b,"gxcallrpc.js","getImageUrl")}return a},sendHeader:function(a){try{if(!gx.lang.emptyObject(this.resourceProvider))return gx.http.callBackend("",location.href,")",!0,gx.http.modes.none,!0,"HEAD",null,!0,!0,a),!0}catch(c){}return!1},encryptParms:function(a,c){return a.AjaxSecurity?gx.sec.encrypt(c):c},doPost:function(a,c){if(!gx.evt.processing||
gx.csv.validating){gx.evt.setProcessing(!0);gx.ajax.disableForm();gx.fx.obs.notify("gx.onbeforeevent",[a,c]);gx.fn.objectOnpost();gx.http.saveState();gx.fn.forceEnableControls(!1);var b=this.getPostInfo(a,c);b.onReady=function(){gx.evt.setProcessing(!1)};gx.http.doCall(b)}},getPostInfo:function(a,c){var b=gx.ajax.selfUrl(),d=/\?(.*)/,b=d.test(b)?b.replace(d,"?"+a+",$1"):b+("?"+a),d={};d.url=b;d.formNode=gx.dom.form();d.method="POST";d.encoding="UTF-8";d.useCash=!1;!0===c&&(d.sync=!0);d.handler=gx.http.postHandler;
this.multipartInfo(d);return d},multipartInfo:function(a){var c=!1,b=a.formNode.getElementsByTagName("input"),d=b.length;if(d){for(var e=0;e<d;e++)if("file"==b[e].getAttribute("type")&&!gx.lang.emptyObject(b[e].value)){c=!0;break}c&&(a.multipart=!0,a.mimetype="text/html",a.formNode.encoding="multipart/form-data")}},dispatchCommands:function(a){if(a&&0<a.length)for(var c=a.length,b=0;b<c;b++){var d=a[b];d.redirect&&(d.redirect.url=gx.ajax.removeGXParms(d.redirect.url));d.print&&gx.printing.print(d.print);
if(d.close){var e=[];d.close instanceof Array&&(e=d.close);gx.fn.closeWindow(e)}"undefined"!=typeof d.refresh&&("GET"==d.refresh?gx.http.reload():(e="RFR",gx.O.IsMasterPage&&(e+="_MPAGE"),gx.O.executeServerEvent(e,!0)));d.redirect&&gx.http.redirect(d.redirect.url,d.redirect.forceDisableFrm);if(d.popup){a.length>b+1&&(d.popup[7]=a.slice(b+1));d.popup[0]=gx.http.formatLink(d.popup[0]);gx.popup.open(d.popup);break}if(d.ucmethod){var f=gx.getObj(d.ucmethod.CmpContext,d.ucmethod.IsMasterPage);f&&(e=gx.O,
gx.setGxO(f.CmpContext,f.IsMasterPage),(f=gx.O.getUserControl(d.ucmethod.Control))&&"function"==typeof f[d.ucmethod.Method]&&f[d.ucmethod.Method].apply(f,d.ucmethod.Parms),gx.setGxO(e.CmpContext,e.IsMasterPage))}}},willLeavePage:function(a){if(a)for(var c=a.length,b=0;b<c;b++)if(a[b].close)return!0;return!1},hasRedirectCommand:function(a){if(a)for(var c=a.length,b=0;b<c;b++){var d=a[b];if(d.popup)break;if(d.redirect)return!0}return!1},setPostResponse:function(a){var c=gx.fn,b=gx.lang.doCall,d=this.willLeavePage(a.gxCommands);
gx.evt.srvCommand?(gx.evt.srvCommand=!1,b(gx.ajax.dispatchCommands,a.gxCommands)):this.hasRedirectCommand(a.gxCommands)?(b(gx.ajax.dispatchCommands,a.gxCommands),setTimeout(function(){gx.ajax.enableForm()},200)):d?b(gx.ajax.dispatchCommands,a.gxCommands):(b(c.setPostHiddens,a.gxHiddens),b(c.setPostComponents,a.gxComponents,a.DynComponentMap,a.gxHiddens,function(){gx.http.loadStyles();gx.updateTheme();gx.fn.installComponents(!1);b(c.setPostValues,a.gxValues);b(c.setPostProperties,a.gxProps);gx.util.balloon.clearAll();
c.enableDisableDelete();b(c.loadPostGrids,a.gxGrids);b(c.setErrorViewer,a.gxMessages);c.objectPostback();c.setFocusAfterLoad();gx.popup.currentPopup||gx.ajax.enableForm();gx.dom.indexElements();b(gx.ajax.dispatchCommands,a.gxCommands)}));return d},swallowKeys:function(a){a.cancel=!0},disableForm:function(a){a=void 0===a||a;0<gx.http.notification._delay?(this.dfTimer&&clearTimeout(this.dfTimer),this.dfTimer=setTimeout(gx.http.notification.show,gx.http.notification._delay)):gx.http.notification.show();
a&&gx.fx.obs.addObserver("gx.keypress",this,this.swallowKeys)},enableForm:function(){this.dfTimer&&0<gx.http.notification._delay&&clearTimeout(this.dfTimer);gx.http.notification.hide();gx.fx.obs.deleteObserver("gx.keypress",this,this.swallowKeys)},isFormEnabled:function(){return!gx.http.notification.isVisible()},executeCliEvent:function(a,c){try{var b,d=gx.lang.emptyObject;if(!d(c)){var e=gx.fn.rowGridId(c);if(!d(e)){var f=gx.fn.getGridObj(e);d(f)||(b=gx.fn.controlRowId(c)||gx.fn.currentGridRowImpl(e)||
"0001",f.instanciateRow(b))}}gx.O[a].call(gx.O,b)}catch(g){gx.dbg.logEx(g,"gxcallrpc.js","executeCliEvent")}},suggest:function(a,c,b,d,e,f){a=new gx.fx.suggestProvider(a,c,b);new gx.fx.autoSuggestControl(gx.fn.screen_CtrlRef(c),a,c,d,e,f)},hideCode:function(a,c,b){for(var b="gx.fn.setVarValues("+gx.lang.arrayToSource(b)+",",d=this.objectUrl()+"?",c="gxajaxHideCode_"+c,e=a.length,f=0;f<e;f++)c+=","+encodeURIComponent(eval(a[f]));d+=gx.ajax.encryptParms(gx.O,c);gx.http.callBackend(b,d,")",!0,gx.http.modes.retval);
return this.lastStatus},callCrl:function(a,c,b){var d=b?"gx.fn.setGridComboValues":"gx.fn.setComboValues",b=b?c:gx.fn.screen_CtrlRef(c).name,d=d+"('"+b+"',",b=this.objectUrl()+"?",a="gxajaxCallCrl_"+c+","+this.arrayToUrl(a),b=b+gx.ajax.encryptParms(gx.O,a);gx.http.callBackend(d,b,")",!0,gx.http.modes.retval)},refreshGrid:function(a,c){var b=this.objectUrl()+"?",d="gxajaxGridRefresh_"+a.gridName+","+c;gx.fx.obs.notify("grid.onbeforerefresh",[a]);a.autoRefreshing=!0;gx.csv.autoRefreshing=a;var e=a.grid.rows.length;
a.setPagingVars(1,0);if(d.length>gx.ajax.maxGETLength(gx.O)){for(var d=["GXEvent="+gx.ajax.encryptParms(gx.O,"gxajaxGridRefresh_"+a.gridName)],f=c.split(","),g=0,i=f.length;g<i;g++)d.push("GXParm"+g+"="+f[g]);gx.http.callBackend("",b,")",!1,gx.http.modes.full,!1,"POST",d.join("&"))}else d=gx.ajax.encryptParms(gx.O,d),gx.http.callBackend("",b+d,")",!1,gx.http.modes.full);gx.csv.autoRefreshing=null;gx.fx.obs.notify("grid.onafterrefresh",[a,e,a.grid.rows.length]);a.autoRefreshing=!1},newRows:function(a,
c,b,d,e,f,g,i){for(var j="gx.fn.gridObj('"+a+"','"+b+"',"+c.toString()+"').setNewRows(",h=this.objectUrl()+"?",d="gxajaxNewRow_"+b+","+d+","+e+","+f,a=gx.fn.gridObj(a,g?b+"_"+g:b,c),c=0;c<a.postingVariables.length;c++)d+=","+encodeURIComponent(a.parentObject[a.postingVariables[c]]);gx.O.IsComponent&&(d+=","+gx.O.CmpContext);h+=gx.ajax.encryptParms(gx.O,d);gx.http.callBackend(j,h,")",!0,gx.http.modes.none);if(j=gx.http.lastResponse)j=gx.json.evalJSON(j),i.call(a,j),gx.dom.indexElements()},loadCrl:function(a,
c,b){if("1"==gx.fn.getControlValue("IsConfirmed"))this.lastStatus=0;else{var b="gx.fn.setVarValues("+gx.lang.arrayToSource(b)+",",d=this.objectUrl()+"?",a="gxajaxExecAct_"+a+","+this.arrayToUrl(c),d=d+gx.ajax.encryptParms(gx.O,a);gx.http.callBackend(b,d,")",!0,gx.http.modes.retval)}},udp:function(a,c,b){var b="gx.fn.setVarValues("+gx.lang.arrayToSource(b)+",",d=this.objectUrl()+"?",a=a+","+this.arrayToUrl(c),d=d+gx.ajax.encryptParms(gx.O,a);gx.http.callBackend(b,d,")",!0,gx.http.modes.retval)},srvEvt:function(a,
c,b,d){var d="gx.fn.setVarValues("+gx.lang.arrayToSource(d)+",",e=this.objectUrl()+"?",a=a+","+c+","+this.arrayToUrl(b),e=e+gx.ajax.encryptParms(gx.O,a);gx.http.callBackend(d,e,")",!0,gx.http.modes.full)},validSrvEvt:function(a,c,b,d){var d="gx.csv.setValidValues("+gx.lang.arrayToSource(d)+",",e=this.objectUrl(),f=a+","+c+","+this.arrayToUrl(b,!0);f.length>this.maxGETLength(gx.O)?this.validAsPost(e,d,a,c,b):(e+="?"+gx.ajax.encryptParms(gx.O,f),gx.http.callBackend(d,e,")",!0,gx.http.modes.call,!gx.ajax.isFormEnabled()))},
validAsPost:function(a,c,b,d,e){b="GXEvent="+gx.ajax.encryptParms(gx.O,b)+"&GXAction="+d;0<e.length&&(b+="&"+this.getParmsPostData(e));gx.http.callBackend(c,a,")",!0,gx.http.modes.call,!1,"POST",b)},getParmsPostData:function(a){for(var c="",b=0;b<a.length;b++)0<b&&(c+="&"),c+="GXParm"+b+"="+this.parmToUrl(a[b],!0);return c},getCallerUrl:function(a){if(gx.stackSupported()){var a=(a=gx.call_stack_storage.get(gx.stackId(a)))||[],c=1==a.length&&a[0]!=gx.ajax.selfUrl()?a[0]:"";return c=1<a.length?a[a.length-
2]:c}return gx.fn.getControlValue("sCallerURL")},pushReferer:function(a,c){c="undefined"==typeof c?location.href:gx.ajax.absoluteurl(c);if(gx.stackSupported()){"undefined"==typeof a&&(a=gx.popup.popuplvl());var b=gx.call_stack_storage.get(gx.stackId(a)),b=b||[];c!=gx.util.lastArray(b)&&b.push(c);gx.call_stack_storage.set(gx.stackId(a),b)}else{var b=this.objectUrl()+"?",d="dyncall,PushReferer,"+encodeURIComponent(c),b=b+gx.ajax.encryptParms(gx.O,d);gx.http.callBackend("",b,"",!0,gx.http.modes.none,
!0)}},windowClosed:function(a){if(gx.stackSupported())if(-1==a){var c=gx.stackId(gx.popup.popuplvl()),a=(a=gx.call_stack_storage.get(c))||[];a.pop();gx.call_stack_storage.set(c,a)}else gx.call_stack_storage.remove(gx.stackId(a));else c="",c=-1==a?",PopReferer":",DeleteReferer,"+a.toString(),a=this.objectUrl()+"?",a+=gx.ajax.encryptParms(gx.O,"dyncall"+c),gx.http.callBackend("",a,"",!0,gx.http.modes.none,!0)},aggSel:function(a,c,b){var d=this.objectUrl()+"?",a="gxajaxAggSel"+c+"_"+a+","+this.arrayToUrl(b),
d=d+gx.ajax.encryptParms(gx.O,a);return gx.http.callBackend(null,d,"",!1,gx.http.modes.retval)[0]},aggSelDecimal:function(a,c,b,d,e){return gx.num.parseFloat(this.aggSel(a,c,e),b,d)},aggSelInteger:function(a,c,b){return parseInt(this.aggSel(a,c,b),10)},dynComponent:function(a,c,b,d){a=a.toLowerCase();gx.gen.isDotNet()&&(a+=".aspx");a=gx.ajax.objectUrl(a);b="GXEvent="+gx.ajax.encryptParms(gx.O,"dyncomponent")+"&GXAction="+encodeURIComponent(b)+"&GXParm0="+encodeURIComponent(d);for(d=0;d<c.length;d++)b+=
"&GXParm"+(d+1).toString()+"="+encodeURIComponent(c[d]);gx.http.callBackend("",a,")",!0,gx.http.modes.none,!0,"POST",b);return gx.json.evalJSON(gx.http.lastResponse)},selfUrl:function(){return location.href.replace(/#[\s\S]*$/,"")},removeGXParms:function(a){return a.replace(/\?gxajaxEvt,?|\?gxportlet,?/,"?")},arrayToUrl:function(a,c){for(var b="",d=a.length,e=0;e<d;e++)b+=this.parmToUrl(a[e],c)+",";return b},parmToUrl:function(a,c){var b=eval(a);if(b instanceof Array&&2==b.length&&"string"==typeof b[0]&&
"string"==typeof b[1]){var d=gx.fn.vStructForVar(b[0]);null!=d&&(b=gx.fn.getGridCtrlProperty(d.grid,d.fld,b[1]))}c&&(d=gx.fn.vStructForVar(gx.unprefixVar(a)),null!=d&&gx.html.controls.isMultiSelection(d.ctrltype)&&(d=gx.fn.getControlGridRef(d.fld,d.grid),(d=gx.dom.comboBoxToObj(d,b))&&(b=d)));"object"==typeof b&&(b=gx.json.serializeJson(b));if("undefined"==typeof b||null==b){d=!1;if(a&&0===a.indexOf("gx.O.")){var a=gx.unprefixVar(a),e=gx.fn.getHidden(gx.O.CmpContext+a);null!=e&&"undefined"!=typeof e&&
(b=e,d=!0)}d||(b="")}return encodeURIComponent(b)},objectUrl:function(a){var c="";a?c=a:(c=gx.csv.cmpCtx?gx.fn.getControlValue(gx.csv.cmpCtx+"_CMPPGM"):gx.ajax.selfUrl(),null!=c&&(c=c.replace(/\?.*/,""),c=c.replace(/#[\s\S]*$/,"")),c=this.objnameFromUrl(c));return this.absoluteurl(this.objToRelativeUrl(c))},objToRelativeUrl:function(a){if(this.isabsoluteurl(a))return a;var c=location.pathname;if(null!=a){for(var b=location.pathname.split("/"),c="",d=b.length,e=1;e<d-1;e++)c+="/"+b[e];c+="/"+a}return c},
isabsoluteurl:function(a){return-1!=a.search("://")},isRelativeToHost:function(a){return"/"==a.substr(0,1)},absoluteurl:function(a){if(!this.isabsoluteurl(a)){if("/"!=a.charAt(0)){for(var c="",b=location.pathname.split("/"),d=1;d<b.length-1;d++)c+="/"+b[d];return location.protocol+"//"+location.host+c+"/"+a}return location.protocol+"//"+location.host+a}return a},objnameFromUrl:function(a){0<=a.indexOf("?")&&(a=a.split("?")[0]);var c=a.split("/"),b=c.length;return 0===b?a:c[b-1]},_init:function(){this.resourceProvider=
gx.fn.getHidden("GX_RES_PROVIDER");if(gx.stackSupported()){var a=gx.json.evalJSON(gx.fn.getHidden("GX_NAV"));if(a)for(var c=0;c<a.length;c++)gx.ajax.pushReferer(gx.popup.popuplvl(),a[c]);gx.ajax.pushReferer(gx.popup.popuplvl(),window.location.toString())}}};gx._init();
