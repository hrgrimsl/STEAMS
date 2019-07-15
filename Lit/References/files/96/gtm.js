
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"101",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(\"meta[name\\x3d'citation_title']\").attr(\"content\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(\"meta[name\\x3d'citation_publication_date']\").attr(\"content\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(\"meta[name\\x3d'citation_journal_title']\").attr(\"content\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(\"meta[name\\x3d'citation_online_date']\").attr(\"content\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(\"meta[name\\x3d'citation_volume']\").attr(\"content\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(\"meta[name\\x3d'citation_issue']\").attr(\"content\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(\"meta[name\\x3d'citation_publisher']\").attr(\"content\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(\"meta[name\\x3d'dc_identifier']\").attr(\"content\")})();"]
    },{
      "function":"__aev",
      "vtp_varType":"URL",
      "vtp_component":"PATH"
    },{
      "function":"__aev",
      "vtp_varType":"URL",
      "vtp_component":"QUERY",
      "vtp_queryKey":"currentTarget"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"\/email\"==",["escape",["macro",8],8,16],"){var a=",["escape",["macro",9],8,16],";a=a.split(\"\/\");journalTitle=a[4]}else a=",["escape",["macro",8],8,16],",a=a.split(\"\/\"),journalTitle=a[5];return journalTitle})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(\"meta[name\\x3d'citation_title']\").attr(\"content\")})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],",b=",["escape",["macro",13],8,16],";return 0===b.length?a:a+\"?\"+b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"\",a=$(\".topic-list a\");if(0!==a.length\u0026\u0026\"\/\"!==",["escape",["macro",12],8,16],"){for(i=0;i\u003Ca.length;i++)b+=a[i].text,i!==a.length-1\u0026\u0026(b+=\" | \");return b}})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=",["escape",["macro",16],8,16],",d=void 0,b=[[\"\/showMailPage\",\"E-mail\"],[\"facebook.com\",\"Facebook\"],[\"\/action\/recommendation\",\"Recommended To Librarians\"],[\"twitter.com\",\"Twitter\"],[\"linkedin\",\"Linkedin\",\"i\"]],a=0,e=b.length;a\u003Ce;a+=1){var f=new RegExp(b[a][0],b[a][2]);if(f.test(c))return b[a][1]}return d})();"]
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",18],8,16],".toLowerCase();return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(\"meta[name\\x3d'dc.Description']\").attr(\"content\");return a=a.replace(\/[\u0026\\\/\\\\#,+()$~%.'\":*?\u003C\u003E{}]\/g,\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(\"meta[name\\x3d'citation_firstpage']\").attr(\"content\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(\"meta[name\\x3d'citation_author']\").attr(\"content\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(\"meta[name\\x3d'citation_issn']\").attr(\"content\")})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",24],8,16],".pathname.split(\".\");return 1\u003Ca.length?a.pop():\"html\"})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",26],8,16],".toLowerCase();a=a.split(\"\/\")[2];a=a.split(\".\");a=a[0];if(0\u003Ca.length)return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",24],8,16],";return a.getAttribute(\"data-doi\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],";a=a.toLowerCase();return-1!=a.indexOf(\"\/content\")||-1!=a.indexOf(\"\/search\")?\"Article\":-1!=a.indexOf(\"\/for-librarians\")||-1!=a.indexOf(\"\/librarians\")?\"Librarians\":-1!=a.indexOf(\"\/advertisers\")||-1!=a.indexOf(\"\/advertising\")?\"Advertisers\":\"Other\"})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",30],8,16],".toLowerCase();return-1!=a.indexOf(\"ingenta.com\")?\"UA-39337252-3\":\"UA-39337252-1\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"doi"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",32],8,16],",a=",["escape",["macro",24],8,16],";a=a.closest(\".tabs-abstract-cont\");if(1\u003Cb.length)return b;if(void 0!==a\u0026\u0026null!==a)return a.previousElementSibling.querySelector(\"a\").innerHTML.split(\"org\/\")[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",16],8,16],";a=a.split(\"\/pdf\");return a[1]})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",35],8,16],".match(\/[^.]*\\.[^.]{2,3}(?:\\.[^.]{2,3})?$\/)[0]})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__dbg"
    },{
      "function":"__v",
      "vtp_name":"eventCategory",
      "vtp_dataLayerVersion":2
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",27],
      "vtp_defaultValue":"Publisher Lookup Error",
      "vtp_map":["list",["map","key","aip","value","AIP Publishing"],["map","key","avs","value","AVS: Science \u0026 Technology of Materials, Interfaces, and Processing"],["map","key","asa","value","Acoustics Society of America"],["map","key","aapt","value","American Association of Physics Teachers"],["map","key","cps","value","Chinese Physical Society"],["map","key","lia","value","Laser Institute of America"],["map","key","sor","value","The Society of Rheology"],["map","key","physicstoday","value","Physics Today"],["map","key","aca","value","Structural Dynamics"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"journal"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",42],
      "vtp_defaultValue":"Journal Title Lookup Error",
      "vtp_map":["list",["map","key","pto","value","Physics Today"],["map","key","adv","value","AIP Advances"],["map","key","apc","value","AIP Conference Proceedings"],["map","key","apl","value","Applied Physics Letters"],["map","key","apm","value","APL Materials"],["map","key","app","value","APL Photonics"],["map","key","are","value","Applied Physics Reviews"],["map","key","bmf","value","Biomicrofluidics"],["map","key","cha","value","Chaos"],["map","key","csx","value","Computing in Science \u0026 Engineering"],["map","key","jap","value","Journal of Applied Physics"],["map","key","jcp","value","The Journal of Chemical Physics"],["map","key","jmp","value","Journal of Mathematical Physics"],["map","key","jpr","value","Journal of Physical and Chemical Reference Data"],["map","key","rse","value","Journal of Renewable and Sustainable Energy"],["map","key","ltp","value","Low Temperature Physics"],["map","key","phf","value","Physics of Fluids"],["map","key","php","value","Physics of Plasmas"],["map","key","rsi","value","Review of Scientific Instruments"],["map","key","sdy","value","Structural Dynamics"],["map","key","jas","value","The Journal of the Acoustical Society of America"],["map","key","pma","value","Proceedings of Meetings on Acoustics"],["map","key","arl","value","Acoustics Research Letters Online"],["map","key","noc","value","Noise Control"],["map","key","sou","value","Sound: Its Uses and Control"],["map","key","ajp","value","American Journal of Physics"],["map","key","pte","value","The Physics Teacher"],["map","key","bip","value","Biointerphases"],["map","key","jva","value","Journal of Vacuum Science \u0026 Technology A"],["map","key","jvb","value","Journal of Vacuum Science \u0026 Technology B, Nanotechnology and Microelectronics: Materials, Processing, Measurement, and Phenomena"],["map","key","sss","value","Surface Science Spectra"],["map","key","jvs","value","Journal of Vacuum Science \u0026 Technology"],["map","key","cjp","value","Chinese Journal of Chemical Physics"],["map","key","jla","value","Journal of Laser Applications"],["map","key","jor","value","Journal of Rheology"],["map","key","sci","value","Scilight"],["map","key","apb","value","APL Bioengineering"],["map","key","cip","value","Computers in Physics"],["map","key","mmm","value","Magnetism \u0026 Magnetic Materials"],["map","key","mre","value","Matter and Radiation at Extremes"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",32],8,16],"?",["escape",["macro",32],8,16],":",["escape",["macro",28],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"non-interaction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventAction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventLabel",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventValue",
      "vtp_dataLayerVersion":2
    },{
      "function":"__c",
      "vtp_value":"physicstoday.org, aip.org, scitation.org"
    },{
      "function":"__c",
      "vtp_value":"UA-75604-12"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fireGTM"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",52],
      "vtp_defaultValue":"UA-75604-14",
      "vtp_map":["list",["map","key","true","value","UA-75604-6"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",52],
      "vtp_defaultValue":"UA-75604-13",
      "vtp_map":["list",["map","key","true","value","UA-75604-12"]]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_stripWww":false,
      "vtp_component":"HOST",
      "vtp_varType":"URL"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1===",["escape",["macro",55],8,16],".indexOf(",["escape",["macro",36],8,16],")?!0:!1})();"]
    },{
      "function":"__e"
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_CHANGE_SOURCE"
    },{
      "function":"__f",
      "vtp_component":"HOST",
      "vtp_stripWww":false
    },{
      "function":"__f",
      "vtp_component":"PATH"
    },{
      "function":"__f",
      "vtp_component":"PROTOCOL"
    },{
      "function":"__f",
      "vtp_component":"QUERY"
    },{
      "function":"__aev",
      "vtp_varType":"URL",
      "vtp_component":"QUERY",
      "vtp_queryKey":"itemId"
    },{
      "function":"__v",
      "vtp_name":"gtm.element.0.value",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"gtm.element.parentElement.title",
      "vtp_dataLayerVersion":2
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_stripWww":true,
      "vtp_customUrlSource":["macro",71],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f"
    },{
      "function":"__c",
      "vtp_value":"UA-997933-3"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "tag_id":2
    },{
      "function":"__cl",
      "tag_id":8
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":["macro",39],
      "vtp_eventCategory":["macro",40],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template",["macro",41]," - ",["macro",43]],
      "vtp_eventLabel":["macro",44],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":13
    },{
      "function":"__fsl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "tag_id":14
    },{
      "function":"__hl",
      "tag_id":32
    },{
      "function":"__ua",
      "vtp_nonInteraction":true,
      "vtp_useDebugVersion":["macro",39],
      "vtp_eventCategory":"Key Topics",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",18],
      "vtp_eventLabel":["macro",12],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":36
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":["macro",39],
      "vtp_eventCategory":"Click to Buy",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template",["macro",41]," - ",["macro",43]],
      "vtp_eventLabel":["macro",32],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":37
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":["macro",39],
      "vtp_eventCategory":"Download - Article",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template",["macro",41]," - ",["macro",43]],
      "vtp_eventLabel":["macro",32],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_metric":["list",["map","index","1","metric","1"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":40
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":["macro",39],
      "vtp_eventCategory":["template","Download - ",["macro",29]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",25],
      "vtp_eventLabel":["macro",16],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":41
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":["macro",39],
      "vtp_eventCategory":"Email - Article",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template",["macro",41]," - ",["macro",43]],
      "vtp_eventLabel":["macro",33],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":42
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":["macro",39],
      "vtp_eventCategory":"Article Interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template","Go To Section - ",["macro",19]],
      "vtp_eventLabel":["macro",32],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":43
    },{
      "function":"__ua",
      "vtp_nonInteraction":true,
      "vtp_useDebugVersion":["macro",39],
      "vtp_eventCategory":"Metrics",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template",["macro",41]," - ",["macro",43]],
      "vtp_eventLabel":["macro",32],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":44
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":["macro",39],
      "vtp_eventCategory":"Recommend to Library",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template",["macro",41]," - ",["macro",43]],
      "vtp_eventLabel":["macro",12],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":46
    },{
      "function":"__ua",
      "vtp_nonInteraction":true,
      "vtp_useDebugVersion":["macro",39],
      "vtp_eventCategory":"Related",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template",["macro",41]," - ",["macro",43]],
      "vtp_eventLabel":["macro",32],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":47
    },{
      "function":"__ua",
      "vtp_nonInteraction":["macro",46],
      "vtp_useDebugVersion":["macro",39],
      "vtp_eventCategory":["macro",40],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",47],
      "vtp_eventLabel":["macro",48],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",49],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":48
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":["macro",39],
      "vtp_eventCategory":"Social - Click to Share",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",17],
      "vtp_eventLabel":["macro",12],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":49
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":["macro",39],
      "vtp_eventCategory":"Show Abstract",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template",["macro",41]," - ",["macro",43]],
      "vtp_eventLabel":["macro",28],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_metric":["list",["map","index","1","metric","1"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":50
    },{
      "function":"__ua",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":["macro",39],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","allowLinker","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",15]],["map","index","1","dimension",["macro",14]],["map","index","3","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":51
    },{
      "function":"__ua",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":["macro",39],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","allowLinker","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",50],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":56
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":["macro",39],
      "vtp_eventCategory":"Download - Article",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template",["macro",41]," - ",["macro",43]],
      "vtp_eventLabel":["macro",34],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_metric":["list",["map","index","1","metric","1"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":57
    },{
      "function":"__ua",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":["macro",39],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","allowLinker","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_functionName":"_btiUGA",
      "vtp_autoLinkDomains":"physicstoday.org, aip.org",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",53],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":58
    },{
      "function":"__ua",
      "vtp_useDebugVersion":["macro",39],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_functionName":"_btiUGA",
      "vtp_autoLinkDomains":["macro",50],
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","allowLinker","value","true"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":59
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":true,
      "vtp_useDebugVersion":["macro",39],
      "vtp_eventCategory":"Source",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",18],
      "vtp_eventLabel":["macro",12],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":61
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":["macro",39],
      "vtp_eventCategory":"Outbound Link Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",55],
      "vtp_eventLabel":["macro",16],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":62
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":["macro",39],
      "vtp_eventCategory":"Outbound Link Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",55],
      "vtp_eventLabel":["macro",16],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":64
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Outbound Link Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Join Society",
      "vtp_eventLabel":["macro",41],
      "vtp_trackingId":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":65
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Article Interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Article Loaded",
      "vtp_eventLabel":["macro",32],
      "vtp_trackingId":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":66
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"PREV-NEXT Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",18],
      "vtp_eventLabel":["macro",26],
      "vtp_trackingId":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":68
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"669702_15",
      "tag_id":69
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"669702_24",
      "tag_id":70
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"669702_31",
      "tag_id":71
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"669702_34",
      "tag_id":72
    },{
      "function":"__cl",
      "tag_id":73
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"1000",
      "vtp_uniqueTriggerId":"669702_49",
      "tag_id":74
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"669702_50",
      "tag_id":75
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"669702_52",
      "tag_id":76
    },{
      "function":"__cl",
      "tag_id":77
    },{
      "function":"__cl",
      "tag_id":78
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"669702_59",
      "tag_id":79
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"669702_60",
      "tag_id":80
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"669702_64",
      "tag_id":81
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"669702_85",
      "tag_id":82
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"669702_89",
      "tag_id":83
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"669702_107",
      "tag_id":84
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"669702_108",
      "tag_id":85
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"669702_123",
      "tag_id":86
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a(document).ready(function(){a(\"div#articleTabs ul li\").each(function(){a(this).click(function(){a(\"a\",this).hasClass(\"disabled\")||dataLayer.push({activeTab:a(this).text().trim(),event:\"tabClick\"})})})})})(jQuery);\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":10
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var c,b=function(){c||(c=!0,dataLayer.push({eventCategory:\"Print Page - Article\",event:\"printPage\"}))};if(window.matchMedia){var d=window.matchMedia(\"print\");d.addListener(function(a){a.matches||b()})}window.onafterprint=b;$(document).keydown(function(a){80==a.keyCode\u0026\u0026(a.ctrlKey||a.metaKey)\u0026\u0026$.browser.opera\u0026\u0026b()});$(\".printlink\").click(function(){$.browser.opera\u0026\u0026b();window.print()})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a(document).ready(function(){var b=",["escape",["macro",24],8,16],";a(\".js-show-abstract-toc\").click(function(){var a=b.getAttribute(\"data-doi\"),c=b.getAttribute(\"data-journal-title\"),d=b.getAttribute(\"data-publisher\");0\u003Ca.length\u0026\u0026dataLayer.push({event:\"articleClicks\",eventCategory:\"Article Interaction\",eventAction:c-d,eventLabel:a})})})})(jQuery);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":52
    },{
      "function":"__html",
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){function h(){bottom=a(window).height()+a(window).scrollTop();height=a(document).height();middle=height\/2;bottom\u003Ek\u0026\u0026!e\u0026\u0026(currentTime=new Date,scrollStart=currentTime.getTime(),timeToScroll=Math.round((scrollStart-l)\/1E3),b?console.log(\"Started scrolling at \"+timeToScroll+\" seconds.\"):dataLayer.push({event:\"scrollEvent\",eventCategory:\"Article Interaction\",eventAction:\"Scroll Start\",eventLabel:",["escape",["macro",32],8,16],",eventValue:timeToScroll,\"non-interaction\":!0}),e=!0);bottom\u003E=middle\u0026\u0026!f\u0026\u0026\n(currentTime=new Date,contentScrollEnd=currentTime.getTime(),timeToContentHalf=Math.round((contentScrollEnd-scrollStart)\/1E3),b?console.log(\"Scrolled 50% at \"+timeToContentHalf+\" seconds from scroll start.\"):dataLayer.push({event:\"scrollEvent\",eventCategory:\"Article Interaction\",eventAction:\"Scroll 50%\",eventLabel:",["escape",["macro",32],8,16],",eventValue:timeToContentHalf,\"non-interaction\":!1}),f=!0);bottom\u003E=.95*height\u0026\u0026!g\u0026\u0026(currentTime=new Date,end=currentTime.getTime(),c=Math.round((end-scrollStart)\/1E3),\nb?console.log(\"Reached bottom of page at \"+c+\" seconds from scroll start.\"):dataLayer.push({event:\"scrollEvent\",eventCategory:\"Article Interaction\",eventAction:\"Scroll to Bottom\",eventLabel:",["escape",["macro",32],8,16],",eventValue:c,\"non-interaction\":!1}),g=!0)}var b=",["escape",["macro",39],8,16],",m=100,k=150,d=0,e=!1,f=!1,g=!1,n=new Date,l=n.getTime(),c=0;a(window).scroll(function(){d\u0026\u0026clearTimeout(d);-1!==",["escape",["macro",12],8,16],".indexOf(\"\/full\/\")\u0026\u0026(d=setTimeout(h,m))})})(jQuery);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":53
    },{
      "function":"__html",
      "vtp_html":["template","\u003Cscript type=\"application\/ld+json\"\u003E\n{\n  \"@context\": \"http:\/\/schema.org\", \n  \"@graph\": [\n    {\n        \"@id\": \"#issue\", \n        \"@type\": \"PublicationIssue\", \n        \"datePublished\": \"",["escape",["macro",1],7],"\", \n        \"isPartOf\": \"#publicationIssue\", \n            \"name\": \"",["escape",["macro",2],7],"\", \n            \"issueNumber\": \"",["escape",["macro",5],7],"\",\n            \"publisher\": \"",["escape",["macro",6],7],"\"\n    }, \n\t\n    {\n        \"@type\": \"PublicationVolume\", \n        \"datePublished\": \"",["escape",["macro",1],7],"\", \n        \"isPartOf\": \"#publicationVolume\", \n            \"name\": \"",["escape",["macro",2],7],"\", \n            \"volumeNumber\": \"",["escape",["macro",4],7],"\"\n    }, \n    \n    {\n        \"@type\": \"ScholarlyArticle\", \n        \"isPartOf\": \"#issue\", \n        \"description\": \"",["escape",["macro",20],7],"\", \n        \"sameAs\": \"",["escape",["macro",44],7],"\", \n        \"about\": [\n            \"Works\", \n            \"Catalog\"\n        ], \n        \"pageStart\": \"",["escape",["macro",21],7],"\", \n        \"name\": \"",["escape",["macro",11],7],"\", \n        \"author\": \"",["escape",["macro",22],7],"\"\n    }\n  ]\n}\n\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":54
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{ \n  \"@context\": \"https:\/\/schema.org\", \n  \"@type\": \"WebSite\", \n  \"url\": \"https:\/\/www.scitation.org\/\", \n  \"potentialAction\": { \n    \"@type\": \"SearchAction\", \n    \"target\": \"https:\/\/www.scitation.org\/action\/doSearch?field1=AllField\u0026text1={search_term}\", \n    \"query-input\": \"required name=search_term\" } \n}\n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":55
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Clink rel=\"stylesheet\" type=\"text\/css\" href=\"\/\/cdnjs.cloudflare.com\/ajax\/libs\/cookieconsent2\/3.0.3\/cookieconsent.min.css\"\u003E\n\u003Cscript data-gtmsrc=\"\/\/cdnjs.cloudflare.com\/ajax\/libs\/cookieconsent2\/3.0.3\/cookieconsent.min.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"load\",function(){window.cookieconsent.initialise({palette:{popup:{background:\"#15559a\",text:\"#ffffff\"},button:{background:\"#000000\",text:\"#ffffff\"}},theme:\"edgeless\",content:{message:\"This website uses cookies to ensure the best user experience.  \",href:\"https:\/\/scitation.org\/privacy\"}})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":63
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/wchat.freshchat.com\/js\/widget.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.fcWidget.init({token:\"83e69625-935d-4b91-a2a4-6f0af192786d\",host:\"https:\/\/wchat.freshchat.com\"});\u003C\/script\u003E\n             ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"gtm.js"
    },{
      "function":"_sw",
      "arg0":["macro",12],
      "arg1":"\/doi\/"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"(.*)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"printPage"
    },{
      "function":"_re",
      "arg0":["macro",35],
      "arg1":"physicstoday\\.org|aip\\.org|boxwood",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":".topic-list.padded-content a"
    },{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":"(^$|((^|,)669702_52($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"buy"
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":"(^$|((^|,)669702_15($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"\/doi\/pdf"
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":"(^$|((^|,)669702_49($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",25],
      "arg1":"pdf",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":"(^$|((^|,)669702_50($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"\/toc"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"\/doi"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":".addthis_button_email"
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":"(^$|((^|,)669702_59($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":".fragmentList"
    },{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"gtm.click"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":".show-metrics"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":".recommend-to-librarians"
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":"(^$|((^|,)669702_60($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":".article-list-boxes div div a"
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":"(^$|((^|,)669702_31($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"scrollEvent"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"facebook\\.com|twitter\\.com|linkedin\\.com|mendeley\\.com|reddit\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":"(^$|((^|,)669702_34($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":".js-show-abstract-toc"
    },{
      "function":"_cn",
      "arg0":["macro",35],
      "arg1":"physicstoday.scitation.org"
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":"(^$|((^|,)669702_64($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"jobs\\.physicstoday\\.org|aip\\.org\/jobs|boxwood",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"physicstoday|aip\\.org\/jobs\/|boxwood",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":".NLM_paragraph a"
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":"(^$|((^|,)669702_85($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":"(^$|((^|,)669702_89($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":"(^$|((^|,)669702_107($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":".registration-subscribe a"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"SIGN UP"
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":"(^$|((^|,)669702_108($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"(NEXT|PREV)"
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":"(^$|((^|,)669702_123($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":".*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",37],
      "arg1":"scitation"
    },{
      "function":"_eq",
      "arg0":["macro",42],
      "arg1":"sci"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":".*"
    },{
      "function":"_sw",
      "arg0":["macro",30],
      "arg1":"physicstoday.scitation.org"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"physicstoday"
    },{
      "function":"_eq",
      "arg0":["macro",42],
      "arg1":"pto"
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"\/content\/(.*)\/journal\/(.*)\/(.*)\/(.*)\/10\\.(.*)\/(.*)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"https:\/\/www.scitation.org\/"
    },{
      "function":"_cn",
      "arg0":["macro",37],
      "arg1":"aip.org\/jobs\/"
    },{
      "function":"_sw",
      "arg0":["macro",30],
      "arg1":"jobs.physicstoday"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"stag"
    },{
      "function":"_cn",
      "arg0":["macro",37],
      "arg1":"\/showPreferences?menuTab"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"aip-stag"
    },{
      "function":"_cn",
      "arg0":["macro",37],
      "arg1":"institution"
    },{
      "function":"_cn",
      "arg0":["macro",37],
      "arg1":"\/search\/saved"
    }],
  "rules":[
    [["if",0,1],["add",0,17,52],["block",48]],
    [["if",1,2],["add",1,3,4,26,46,47,49]],
    [["if",3,4],["add",2]],
    [["if",6,7,8],["add",5]],
    [["if",7,9,10],["add",6]],
    [["if",7,11,12],["add",7]],
    [["if",7,13,14],["add",8]],
    [["if",7,17,18],["add",9]],
    [["if",19,20],["add",10]],
    [["if",20,21],["add",11]],
    [["if",7,22,23],["add",12]],
    [["if",7,24,25],["add",13]],
    [["if",26],["add",14]],
    [["if",7,27,28],["add",15]],
    [["if",20,29],["add",16]],
    [["if",1,30],["add",18]],
    [["if",7,11,15,31],["add",19]],
    [["if",1,32],["add",20]],
    [["if",1,33],["add",21]],
    [["if",7,34,35],["add",22]],
    [["if",7,36,37],["add",23]],
    [["if",7,36,38],["add",24]],
    [["if",7,39,40,41],["add",25],["block",24]],
    [["if",7,42,43],["add",27]],
    [["if",1],["add",28,29,31,32,34,35,36,37,38,39,40]],
    [["if",1,44],["add",30]],
    [["if",1,45],["add",33]],
    [["if",1,46],["add",41]],
    [["if",1,47,48],["add",42]],
    [["if",1,47],["add",43]],
    [["if",1],["unless",49],["add",44]],
    [["if",1,50],["add",45]],
    [["if",1,15],["add",48],["block",8]],
    [["if",1,16],["add",50],["block",8]],
    [["if",1,51],["add",50]],
    [["if",1,52],["add",51]],
    [["if",1,56,57],["add",53]],
    [["if",1,57,58],["add",53]],
    [["if",1,57,59],["add",53]],
    [["if",1,5],["block",2,5,6,7,8,9,10,11,12,13,14,15,16,17,19,22,26,47,49,50,51]],
    [["if",1,53],["block",52]],
    [["if",1,54],["block",52]],
    [["if",1,55],["block",52]]]
},
"runtime":[
[],[]
]



};
var aa,ba=this||self,ca=/^[\w+/_-]+[=]{0,2}$/,da=null;var fa=function(){},ha=function(a){return"function"==typeof a},ia=function(a){return"string"==typeof a},ja=function(a){return"number"==typeof a&&!isNaN(a)},ka=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},la=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ma=function(a,b){if(a&&ka(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},na=function(a,b){if(!ja(a)||
!ja(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},pa=function(a,b){for(var c=new oa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ra=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},sa=function(a){return Math.round(Number(a))||0},ta=function(a){return"false"==String(a).toLowerCase()?!1:!!a},ua=function(a){var b=[];if(ka(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},va=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},wa=function(){return(new Date).getTime()},oa=function(){this.prefix="gtm.";this.values={}};oa.prototype.set=function(a,b){this.values[this.prefix+a]=b};oa.prototype.get=function(a){return this.values[this.prefix+a]};oa.prototype.contains=function(a){return void 0!==this.get(a)};
var xa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ya=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},za=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Aa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ca=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Da=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ea=function(a){if(null==a)return String(a);var b=Da.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Fa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ga=function(a){if(!a||"object"!=Ea(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Fa(a,"constructor")&&!Fa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Fa(a,b)},Ha=function(a,b){var c=b||("array"==Ea(a)?[]:{}),d;for(d in a)if(Fa(a,d)){var e=a[d];"array"==Ea(e)?("array"!=Ea(c[d])&&(c[d]=[]),c[d]=Ha(e,c[d])):Ga(e)?(Ga(c[d])||(c[d]={}),c[d]=Ha(e,c[d])):c[d]=e}return c};var f=window,u=document,Ia=navigator,Ka=u.currentScript&&u.currentScript.src,La=function(a,b){var c=f[a];f[a]=void 0===c?b:c;return f[a]},Ma=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Na=function(a,b,c){var d=u.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Ma(d,b);c&&(d.onerror=c);var e;if(null===da)b:{var g=ba.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ca.test(k)){da=k;break b}}da=""}e=da;e&&d.setAttribute("nonce",e);var l=u.getElementsByTagName("script")[0]||u.body||u.head;l.parentNode.insertBefore(d,l);return d},Oa=function(){if(Ka){var a=Ka.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Pa=function(a,b){var c=u.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=u.body&&u.body.lastChild||
u.body||u.head;d.parentNode.insertBefore(c,d);Ma(c,b);void 0!==a&&(c.src=a);return c},Qa=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Ra=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Sa=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},A=function(a){f.setTimeout(a,0)},Ta=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Ua=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Va=function(a){var b=u.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Wa=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Xa=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Ya=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Za={},$a=function(a,b){Za[a]=Za[a]||[];Za[a][b]=!0},bb=function(a){for(var b=[],c=Za[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var cb=/:[0-9]+$/,db=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},gb=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=eb(a.protocol)||eb(f.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:f.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||f.location.hostname).replace(cb,"").toLowerCase());var g=b,h,k=eb(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=fb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(cb,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||$a("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=la(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=db(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},eb=function(a){return a?a.replace(":","").toLowerCase():""},fb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
hb=function(a){var b=u.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||$a("TAGGING",1),c="/"+c);var d=b.hostname.replace(cb,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var ib=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},lb=function(a,b,c,d){var e=jb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=kb(e,function(g){return g.Cb},b);if(1===e.length)return e[0].id;e=kb(e,function(g){return g.Ua},c);return e[0]?e[0].id:void 0}};
function mb(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=ib(b,e).indexOf(c)}
var pb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var w=nb(),v=0;v<w.length;++v){var y="none"!=w[v]?w[v]:void 0;if(!ob(y,t)&&mb(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!ob(p,t)&&mb(m,a,l)}return k};function kb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function jb(a,b){for(var c=[],d=ib(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Cb:1*k[0]||1,Ua:1*k[1]||1}))}}return c}
var qb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,rb=/(^|\.)doubleclick\.net$/i,ob=function(a,b){return rb.test(document.location.hostname)||"/"===b&&qb.test(a)},nb=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var tb=[],ub={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},vb=function(a){return ub[a]},wb=/[\x00\x22\x26\x27\x3c\x3e]/g;var Ab=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Bb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Cb=function(a){return Bb[a]};tb[7]=function(a){return String(a).replace(Ab,Cb)};
tb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ab,Cb)+"'"}};var Lb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Mb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Nb=function(a){return Mb[a]};tb[16]=function(a){return a};var Pb=[],Qb=[],Rb=[],Sb=[],Tb=[],Ub={},Vb,Wb,Xb,Yb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Zb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Ub[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Ub[c](e):(void 0)(c,e,b)},ac=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=$b(a[e],b,c));return d},
bc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Ub[b];return c?c.priorityOverride||0:0},$b=function(a,b,c){if(ka(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push($b(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=Pb[g];if(!h||b.wc(h))return;c[g]=!0;try{var k=ac(h,b,c);k.vtp_gtmEventId=b.id;d=Zb(k,b);Xb&&(d=Xb.qf(d,k))}catch(v){b.Pd&&b.Pd(v,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[$b(a[l],b,c)]=$b(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=$b(a[n],b,c);Wb&&(m=m||p===Wb.rb);d.push(p)}return Wb&&m?Wb.tf(d):d.join("");case "escape":d=$b(a[1],b,c);if(Wb&&ka(a[1])&&"macro"===a[1][0]&&Wb.Vf(a))return Wb.eg(d);d=String(d);for(var t=2;t<a.length;t++)tb[a[t]]&&(d=tb[a[t]](d));return d;case "tag":var q=a[1];if(!Sb[q])throw Error("Unable to resolve tag reference "+q+".");return d={Bd:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var w=cc(r,b,c);a[4]&&(w=!w);return w;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},cc=function(a,b,c){try{return Vb(ac(a,b,c))}catch(d){JSON.stringify(a)}return null};var dc=function(){var a=function(b){return{toString:function(){return b}}};return{Zc:a("convert_case_to"),$c:a("convert_false_to"),ad:a("convert_null_to"),bd:a("convert_true_to"),cd:a("convert_undefined_to"),ra:a("function"),Fe:a("instance_name"),Ge:a("live_only"),He:a("malware_disabled"),Ie:a("metadata"),Og:a("original_vendor_template_id"),Je:a("once_per_event"),rd:a("once_per_load"),sd:a("setup_tags"),td:a("tag_id"),ud:a("teardown_tags")}}();var ec=null,hc=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];ec=fc(a);for(var e=0;e<Qb.length;e++){var g=Qb[e],h=gc(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<Sb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},gc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=ec(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=ec(e[g]);if(null===h)return null;
if(h)return!1}return!0},fc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=cc(Rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var yc={},zc=null,Ac=Math.random();yc.i="GTM-P4TNS3";yc.vb="651";var Bc="www.googletagmanager.com/gtm.js";var Cc=Bc,Dc=null,Ec=null,Fc=null,Gc="//www.googletagmanager.com/a?id="+yc.i+"&cv=101",Hc={},Ic={},Jc=function(){var a=zc.sequence||0;zc.sequence=a+1;return a};var D=function(a,b,c,d){return(2===Kc()||d||"http:"!=f.location.protocol?a:b)+c},Kc=function(){var a=Oa(),b;if(1===a)a:{var c=Cc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=u.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Lc=!1;
var Pc=function(){return"&tc="+Sb.filter(function(a){return a}).length},Yc=function(){Qc&&(f.clearTimeout(Qc),Qc=void 0);void 0===Rc||Sc[Rc]&&!Tc||(Uc[Rc]||Vc.Xf()||0>=Wc--?($a("GTM",1),Uc[Rc]=!0):(Vc.pg(),Qa(Xc()),Sc[Rc]=!0,Tc=""))},Xc=function(){var a=Rc;if(void 0===a)return"";var b=bb("GTM"),c=bb("TAGGING");return[Zc,Sc[a]?"":"&es=1",$c[a],b?"&u="+b:"",c?"&ut="+c:"",Pc(),Tc,"&z=0"].join("")},ad=function(){return[Gc,"&v=3&t=t","&pid="+na(),"&rv="+yc.vb].join("")},bd="0.005000">
Math.random(),Zc=ad(),cd=function(){Zc=ad()},Sc={},Tc="",Rc=void 0,$c={},Uc={},Qc=void 0,Vc=function(a,b){var c=0,d=0;return{Xf:function(){if(c<a)return!1;wa()-d>=b&&(c=0);return c>=a},pg:function(){wa()-d>=b&&(c=0);c++;d=wa()}}}(2,1E3),Wc=1E3,dd=function(a,b){if(bd&&!Uc[a]&&Rc!==a){Yc();Rc=a;Tc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";$c[a]="&e="+c+"&eid="+a;Qc||(Qc=f.setTimeout(Yc,500))}},ed=function(a,b,c){if(bd&&!Uc[a]&&b){a!==Rc&&(Yc(),Rc=a);var d=String(b[dc.ra]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Tc=Tc?Tc+"."+e:"&tr="+e;Qc||(Qc=f.setTimeout(Yc,500));2022<=Xc().length&&Yc()}};var fd={},gd=new oa,hd={},id={},md={name:"dataLayer",set:function(a,b){Ha(jd(a,b),hd);kd()},get:function(a){return ld(a,2)},reset:function(){gd=new oa;hd={};kd()}},ld=function(a,b){if(2!=b){var c=gd.get(a);if(bd){var d=nd(a);c!==d&&$a("GTM",5)}return c}return nd(a)},nd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:pd(d)},pd=function(a){for(var b=hd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var sd=function(a,b){id.hasOwnProperty(a)||(gd.set(a,b),Ha(jd(a,b),hd),kd())},jd=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},kd=function(a){ra(id,function(b,c){gd.set(b,c);Ha(jd(b,void 0),hd);Ha(jd(b,c),hd);a&&delete id[b]})},td=function(a,b,c){fd[a]=fd[a]||{};var d=1!==c?nd(b):gd.get(b);"array"===Ea(d)||"object"===Ea(d)?fd[a][b]=Ha(d):fd[a][b]=d},ud=function(a,b){if(fd[a])return fd[a][b]};var vd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),wd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},xd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},yd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Ad=function(a){var b=ld("gtm.whitelist");b&&$a("GTM",9);var c=b&&Ca(ua(b),wd),d=ld("gtm.blacklist");d||(d=ld("tagTypeBlacklist"))&&$a("GTM",3);
d?$a("GTM",8):d=[];zd()&&(d=ua(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=la(ua(d),"google")&&$a("GTM",2);var e=d&&Ca(ua(d),xd),g={};return function(h){var k=h&&h[dc.ra];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Ic[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>la(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
la(c,l[p])){$a("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=la(e,k);if(q)t=q;else{var r=pa(e,l||[]);r&&$a("GTM",10);t=r}}var w=!m||t;w||!(0<=la(l,"sandboxedScripts"))||c&&-1!==la(c,"sandboxedScripts")||(w=pa(e,yd));return g[k]=w}},zd=function(){return vd.test(f.location&&f.location.hostname)};var Bd={qf:function(a,b){b[dc.Zc]&&"string"===typeof a&&(a=1==b[dc.Zc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(dc.ad)&&null===a&&(a=b[dc.ad]);b.hasOwnProperty(dc.cd)&&void 0===a&&(a=b[dc.cd]);b.hasOwnProperty(dc.bd)&&!0===a&&(a=b[dc.bd]);b.hasOwnProperty(dc.$c)&&!1===a&&(a=b[dc.$c]);return a}};var Cd={active:!0,isWhitelisted:function(){return!0}},Dd=function(a){var b=zc.zones;!b&&a&&(b=zc.zones=a());return b};var Ed=!1,Fd=0,Gd=[];function Hd(a){if(!Ed){var b=u.createEventObject,c="complete"==u.readyState,d="interactive"==u.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Ed=!0;for(var e=0;e<Gd.length;e++)A(Gd[e])}Gd.push=function(){for(var g=0;g<arguments.length;g++)A(arguments[g]);return 0}}}function Id(){if(!Ed&&140>Fd){Fd++;try{u.documentElement.doScroll("left"),Hd()}catch(a){f.setTimeout(Id,50)}}}var Jd=function(a){Ed?a():Gd.push(a)};var Kd={},Ld={},Md=function(a,b,c){if(!Ld[a])return-1;var d={};Ga(c)&&(d=Ha(c,d));d.id=b;d.status="timeout";return Ld[a].tags.push(d)-1},Nd=function(a,b,c,d){if(Ld[a]){var e=Ld[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Od(a){for(var b=Kd[a]||[],c=0;c<b.length;c++)b[c]();Kd[a]={push:function(d){var e=!1;d(yc.i,Ld[a]),e=!0;!e&&d(yc.i)}}}
var Rd=function(a,b,c){Ld[a]={tags:[]};ha(b)&&Pd(a,b);c&&f.setTimeout(function(){return Od(a)},Number(c));return Qd(a)},Pd=function(a,b){Kd[a]=Kd[a]||[];Kd[a].push(ya(function(){return A(function(){var c=!1;b(yc.i,Ld[a]),c=!0;!c&&b(yc.i)})}))};function Qd(a){var b=0,c=0,d=!1;return{add:function(){c++;return ya(function(){b++;d&&b>=c&&Od(a)})},Xe:function(){d=!0;b>=c&&Od(a)}}};var Sd=function(){function a(d){return!ja(d)||0>d?0:d}if(!zc._li&&f.performance&&f.performance.timing){var b=f.performance.timing.navigationStart,c=ja(md.get("gtm.start"))?md.get("gtm.start"):0;zc._li={cst:a(c-b),cbt:a(Ec-b)}}};var Wd=!1,Xd=function(){return f.GoogleAnalyticsObject&&f[f.GoogleAnalyticsObject]},Yd=!1;
var Zd=function(a){f.GoogleAnalyticsObject||(f.GoogleAnalyticsObject=a||"ga");var b=f.GoogleAnalyticsObject;if(f[b])f.hasOwnProperty(b)||$a("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);f[b]=c}Sd();return f[b]},$d=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Xd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var be=function(){},ae=function(){return f.GoogleAnalyticsObject||"ga"},ce=!1;var je=function(a){};function ie(a,b){a.containerId=yc.i;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function ke(a,b,c,d){var e=Sb[a],g=le(a,b,c,d);if(!g)return null;var h=$b(e[dc.sd],c,[]);if(h&&h.length){var k=h[0];g=ke(k.index,{K:g,P:1===k.Bd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function le(a,b,c,d){function e(){if(g[dc.He])k();else{var v=ac(g,c,[]),y=Md(c.id,Number(g[dc.td]),v[dc.Ie]),x=!1;v.vtp_gtmOnSuccess=function(){if(!x){x=!0;var C=wa()-B;ed(c.id,Sb[a],"5");Nd(c.id,y,"success",C);h()}};v.vtp_gtmOnFailure=function(){if(!x){x=!0;var C=wa()-B;ed(c.id,Sb[a],"6");Nd(c.id,y,"failure",C);k()}};v.vtp_gtmTagId=g.tag_id;v.vtp_gtmEventId=
c.id;ed(c.id,g,"1");var z=function(C){var E=wa()-B;je(C);ed(c.id,g,"7");Nd(c.id,y,"exception",E);x||(x=!0,k())};var B=wa();try{Zb(v,c)}catch(C){z(C)}}}
var g=Sb[a],h=b.K,k=b.P,l=b.terminate;if(c.wc(g))return null;var m=$b(g[dc.ud],c,[]);if(m&&m.length){var n=m[0],p=ke(n.index,{K:h,P:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.Bd?l:p}if(g[dc.rd]||g[dc.Je]){var t=g[dc.rd]?Tb:c.Ag,q=h,r=k;if(!t[a]){e=ya(e);var w=me(a,t,e);h=w.K;k=w.P}return function(){t[a](q,r)}}return e}function me(a,b,c){var d=[],e=[];b[a]=ne(d,e,c);return{K:function(){b[a]=oe;for(var g=0;g<d.length;g++)d[g]()},P:function(){b[a]=pe;for(var g=0;g<e.length;g++)e[g]()}}}
function ne(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function oe(a){a()}function pe(a,b){b()};var se=function(a,b){for(var c=[],d=0;d<Sb.length;d++)if(a.Ta[d]){var e=Sb[d];var g=b.add();try{var h=ke(d,{K:g,P:g,terminate:g},a,d);h?c.push({ce:d,b:bc(e),Bf:h}):(qe(d,a),g())}catch(l){g()}}b.Xe();c.sort(re);for(var k=0;k<c.length;k++)c[k].Bf();return 0<c.length};function re(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.ce,k=b.ce;g=h>k?1:h<k?-1:0}return g}
function qe(a,b){if(!bd)return;var c=function(d){var e=b.wc(Sb[d])?"3":"4",g=$b(Sb[d][dc.sd],b,[]);g&&g.length&&c(g[0].index);ed(b.id,Sb[d],e);var h=$b(Sb[d][dc.ud],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var te=!1,ue=function(a,b,c,d,e){if("gtm.js"==b){if(te)return!1;te=!0}dd(a,b);var g=Rd(a,d,e);td(a,"event",1);td(a,"ecommerce",1);td(a,"gtm");var h={id:a,name:b,wc:Ad(c),Ta:[],Ag:[],Pd:function(p){$a("GTM",6);je(p)}};h.Ta=hc(h);var k=se(h,g);"gtm.js"!==b&&"gtm.sync"!==b||be();if(!k)return k;for(var l={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,
__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},m=0;m<h.Ta.length;m++)if(h.Ta[m]){var n=Sb[m];if(n&&!l[n[dc.ra]])return!0}return!1};var G={Sb:"event_callback",Ub:"event_timeout"};var we={};var xe=/[A-Z]+/,ye=/\s/,ze=function(a){if(ia(a)&&(a=va(a),!ye.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(xe.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],fa:d}}}}},Be=function(a){for(var b={},c=0;c<a.length;++c){var d=ze(a[c]);d&&(b[d.id]=d)}Ae(b);var e=[];ra(b,function(g,h){e.push(h)});return e};
function Ae(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.fa[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Ce=null,De={},Ee={},Ge,He=function(a,b){var c={event:a};b&&(c.eventModel=Ha(b),b[G.Sb]&&(c.eventCallback=b[G.Sb]),b[G.Ub]&&(c.eventTimeout=b[G.Ub]));return c};
var Me={config:function(a){},event:function(a){var b=a[1];if(ia(b)&&!(3<a.length)){var c;if(2<
a.length){if(!Ga(a[2]))return;c=a[2]}var d=He(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];we[b]||(we[b]=[]);we[b].push(c)}},set:function(a){var b;2==a.length&&Ga(a[1])?b=Ha(a[1]):3==a.length&&ia(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=Ha(b),b.event="gtag.set",b._clear=!0,b}},Ne={policy:!0};var Oe=function(){var a=!1;return a};var Qe=function(a){return Pe?u.querySelectorAll(a):null},Re=function(a,b){if(!Pe)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!u.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Se=!1;if(u.querySelectorAll)try{var Te=u.querySelectorAll(":root");Te&&1==Te.length&&Te[0]==u.documentElement&&(Se=!0)}catch(a){}var Pe=Se;var $e=function(a){if(Ze(a))return a;this.Hg=a};$e.prototype.If=function(){return this.Hg};var Ze=function(a){return!a||"object"!==Ea(a)||Ga(a)?!1:"getUntrustedUpdateValue"in a};$e.prototype.getUntrustedUpdateValue=$e.prototype.If;var af=!1,bf=[];function cf(){if(!af){af=!0;for(var a=0;a<bf.length;a++)A(bf[a])}}var df=function(a){af?A(a):bf.push(a)};var ef=[],ff=!1,gf=function(a){return f["dataLayer"].push(a)},hf=function(a){var b=zc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},kf=function(a){var b=a._clear;ra(a,function(g,h){"_clear"!==g&&(b&&sd(g,void 0),sd(g,h))});Dc||(Dc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Jc(),a["gtm.uniqueEventId"]=d,sd("gtm.uniqueEventId",d));Fc=c;var e=jf(a);
Fc=null;return e};function jf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=zc.zones;d=e?e.checkState(yc.i,c):Cd;return d.active?ue(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var lf=function(){for(var a=!1;!ff&&0<ef.length;){ff=!0;delete hd.eventModel;kd();var b=ef.shift();if(null!=b){var c=Ze(b);if(c){var d=b;b=Ze(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=ld(h,1);if(ka(k)||Ga(k))k=Ha(k);id[h]=k}}try{if(ha(b))try{b.call(md)}catch(w){}else if(ka(b)){var l=b;if(ia(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=ld(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(w){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ia(b[0])){var r=Me[b[0]];if(r&&(!c||!Ne[b[0]])){b=r(b);break a}}b=void 0}if(!b){ff=!1;continue}}a=kf(b)||a}}finally{c&&kd(!0)}}ff=!1}
return!a},mf=function(){var a=lf();try{var b=yc.i,c=f["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},nf=function(){var a=La("dataLayer",[]),b=La("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Jd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});df(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<zc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new $e(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);ef.push.apply(ef,d);if(300<this.length)for($a("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return lf()&&h};ef.push.apply(ef,a.slice(0));A(mf)};var of;var Kf={};Kf.rb=new String("undefined");
var Lf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Kf.rb?b:a[d]);return c.join("")}};Lf.prototype.toString=function(){return this.resolve("undefined")};Lf.prototype.valueOf=Lf.prototype.toString;Kf.Ke=Lf;Kf.fc={};Kf.tf=function(a){return new Lf(a)};var Mf={};Kf.qg=function(a,b){var c=Jc();Mf[c]=[a,b];return c};Kf.zd=function(a){var b=a?0:1;return function(c){var d=Mf[c];if(d&&"function"===typeof d[b])d[b]();Mf[c]=void 0}};Kf.Vf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Kf.eg=function(a){if(a===Kf.rb)return a;var b=Jc();Kf.fc[b]=a;return'google_tag_manager["'+yc.i+'"].macro('+b+")"};Kf.Zf=function(a,b,c){a instanceof Kf.Ke&&(a=a.resolve(Kf.qg(b,c)),b=fa);return{uc:a,K:b}};var Nf=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Ta(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Of=function(a){zc.hasOwnProperty("autoEventsSettings")||(zc.autoEventsSettings={});var b=zc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Pf=function(a,b,c){Of(a)[b]=c},Qf=function(a,b,c,d){var e=Of(a),g=xa(e,b,d);e[b]=c(g)},Rf=function(a,b,c){var d=Of(a);return xa(d,b,c)};var Sf=function(){for(var a=Ia.userAgent+(u.cookie||"")+(u.referrer||""),b=a.length,c=f.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(wa()/1E3)].join(".")},Vf=function(a,b,c,d){var e=Tf(b);return lb(a,e,Uf(c),d)},Tf=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Uf=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Wf(a,b){var c=""+Tf(a),d=Uf(b);1<d&&(c+="-"+d);return c};var Xf=["1"],Yf={},bg=function(a,b,c,d){var e=Zf(a);Yf[e]||$f(e,b,c)||(ag(e,Sf(),b,c,d),$f(e,b,c))};function ag(a,b,c,d,e){var g;g=["1",Wf(d,c),b].join(".");pb(a,g,c,d,0==e?void 0:new Date(wa()+1E3*(void 0==e?7776E3:e)))}function $f(a,b,c){var d=Vf(a,b,c,Xf);d&&(Yf[a]=d);return d}function Zf(a){return(a||"_gcl")+"_au"};var cg=function(){for(var a=[],b=u.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Rc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Rc]||(g[a[h].Rc]=[]),g[a[h].Rc].push({timestamp:k[1],Ff:k[2]}))}return g};function dg(){for(var a=eg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function fg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var eg,gg,hg=function(a){eg=eg||fg();gg=gg||dg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(eg[l],eg[m],eg[n],eg[p])}return b.join("")},ig=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=gg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}eg=eg||fg();gg=gg||
dg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var jg;function kg(a,b){if(!a||b===u.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var og=function(){var a=lg,b=mg,c=ng(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Ra(u,"mousedown",d);Ra(u,"keyup",d);Ra(u,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},ng=function(){var a=La("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var pg=/(.*?)\*(.*?)\*(.*)/,qg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,rg=/^(?:www\.|m\.|amp\.)+/,sg=/([^?#]+)(\?[^#]*)?(#.*)?/,tg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,vg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(hg(String(d))))}var e=b.join("*");return["1",ug(e),e].join("*")},ug=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=jg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}jg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^jg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},xg=function(){return function(a){var b=hb(f.location.href),c=b.search.replace("?",""),d=db(c,"_gl",!0)||"";a.query=wg(d)||{};var e=gb(b,"fragment").match(tg);a.fragment=wg(e&&e[3]||
"")||{}}},wg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=pg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===ug(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=ig(t[q+1]);return p}}}}catch(r){}};
function yg(a,b,c){function d(m){var n=m,p=tg.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var w=m.charAt(m.length-1);m&&"&"!==w&&(m+="&");return m+l}c=void 0===c?!1:c;var e=sg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function zg(a,b,c){for(var d={},e={},g=ng().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&kg(k.domains,b)&&(k.fragment?za(e,k.callback()):za(d,k.callback()))}if(Aa(d)){var l=vg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=u.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var w=yg(l,a.action);Ya.test(w)&&(a.action=w)}}}else Ag(l,a,!1)}if(!c&&Aa(e)){var v=vg(e);Ag(v,a,!0)}}function Ag(a,b,c){if(b.href){var d=yg(a,b.href,void 0===c?!1:c);Ya.test(d)&&(b.href=d)}}
var lg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||zg(e,e.hostname,!1)}}catch(h){}},mg=function(a){try{if(a.action){var b=gb(hb(a.action),"host");zg(a,b,!0)}}catch(c){}},Bg=function(a,b,c,d){og();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};ng().decorators.push(e)},Cg=function(){var a=u.location.hostname,b=qg.exec(u.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(rg,"")===e.replace(rg,"")},Dg=function(a,b){return!1===a?!1:a||b||Cg()};var Eg={};var Fg=/^\w+$/,Gg=/^[\w-]+$/,Hg=/^~?[\w-]+$/,Ig={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function Jg(a){return a&&"string"==typeof a&&a.match(Fg)?a:"_gcl"}var Lg=function(){var a=hb(f.location.href),b=gb(a,"query",!1,void 0,"gclid"),c=gb(a,"query",!1,void 0,"gclsrc"),d=gb(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||db(e,"gclid",void 0);c=c||db(e,"gclsrc",void 0)}return Kg(b,c,d)};
function Kg(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(Gg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Eg.gtm_3pds?0:Eg.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function Mg(a,b,c){function d(p,t){var q=Ng(p,e);q&&pb(q,t,h,g,l,!0)}b=b||{};var e=Jg(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Qd?7776E3:b.Qd;c=c||wa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.nh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var Ng=function(a,b){var c=Ig[a];if(void 0!==c)return b+c},Og=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function Pg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Qg=function(a,b,c,d,e){if(ka(b)){var g=Jg(e);Bg(function(){for(var h={},k=0;k<a.length;++k){var l=Ng(a[k],g);if(l){var m=ib(l,u.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Rg=function(a){return a.filter(function(b){return Hg.test(b)})},Sg=function(a){for(var b=["aw","dc"],c=Jg(a&&a.prefix),d={},e=0;e<b.length;e++)Ig[b[e]]&&(d[b[e]]=Ig[b[e]]);ra(d,function(g,h){var k=ib(c+h,u.cookie);if(k.length){var l=k[0],m=Og(l),n={};n[g]=[Pg(l)];Mg(n,a,m)}})};var Tg=/^\d+\.fls\.doubleclick\.net$/;function Ug(a){var b=hb(f.location.href),c=gb(b,"host",!1);if(c&&c.match(Tg)){var d=gb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Vg(a,b){if("aw"==a||"dc"==a){var c=Ug("gcl"+a);if(c)return c.split(".")}var d=Jg(b);if("_gcl"==d){var e;e=Lg()[a]||[];if(0<e.length)return e}var g=Ng(a,d),h;if(g){var k=[];if(u.cookie){var l=ib(g,u.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Pg(l[m]);n&&-1===la(k,n)&&k.push(n)}h=Rg(k)}else h=k}else h=k}else h=[];return h}
var Wg=function(){var a=Ug("gac");if(a)return decodeURIComponent(a);var b=cg(),c=[];ra(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Ff);g=Rg(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Xg=function(a,b,c,d,e){bg(b,c,d,e);var g=Yf[Zf(b)],h=Lg().dc||[],k=!1;if(g&&0<h.length){var l=zc.joined_au=zc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ia.sendBeacon&&Ia.sendBeacon(t)||Qa(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=Zf(b),r=Yf[q];r&&ag(q,r,c,d,e)}};var Yg;if(3===yc.vb.length)Yg="g";else{var Zg="G";Yg=Zg}
var $g={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Yg,OPT:"o"},ah=function(a){var b=yc.i.split("-"),c=b[0].toUpperCase(),d=$g[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===yc.vb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+yc.vb+e};var hh=!!f.MutationObserver,ih=void 0,jh=function(a){if(!ih){var b=function(){var c=u.body;if(c)if(hh)(new MutationObserver(function(){for(var e=0;e<ih.length;e++)A(ih[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Ra(c,"DOMNodeInserted",function(){d||(d=!0,A(function(){d=!1;for(var e=0;e<ih.length;e++)A(ih[e])}))})}};ih=[];u.body?b():A(b)}ih.push(a)};var Jh=f.clearTimeout,Kh=f.setTimeout,H=function(a,b,c){if(Oe()){b&&A(b)}else return Na(a,b,c)},Lh=function(){return new Date},Mh=function(){return f.location.href},Nh=function(a){return gb(hb(a),"fragment")},Oh=function(a){return fb(hb(a))},Ph=null;
var Qh=function(a,b){return ld(a,b||2)},Rh=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return gf(a)},Sh=function(a,b){f[a]=b},K=function(a,b,c){b&&(void 0===f[a]||c&&!f[a])&&(f[a]=b);return f[a]},Th=function(a,b,c){return ib(a,b,void 0===c?!0:!!c)},Uh=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Qd:d},g=Lg();Mg(g,e);Sg(e)},Vh=function(a,b,c,d,e){var g=xg(),h=ng();h.data||(h.data={query:{},fragment:{}},g(h.data));var k={},l=h.data;l&&
(za(k,l.query),za(k,l.fragment));for(var m=Jg(b),n=0;n<a.length;++n){var p=a[n];if(void 0!==Ig[p]){var t=Ng(p,m),q=k[t];if(q){var r=Math.min(Og(q),wa()),w;b:{for(var v=r,y=ib(t,u.cookie),x=0;x<y.length;++x)if(Og(y[x])>v){w=!0;break b}w=!1}w||pb(t,q,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var z={prefix:b,path:c,domain:d};Mg(Kg(k.gclid,k.gclsrc),z);},Wh=function(a,b,c,d,e){Qg(a,b,c,d,e);},
Xh=function(a,b){if(Oe()){b&&A(b)}else Pa(a,b)},Yh=function(a){return!!Rf(a,"init",!1)},Zh=function(a){Pf(a,"init",!0)},$h=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Cc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ra(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});H(D("https://","http://",d))},ai=function(a,b){var c=a[b];return c};
var ci=Kf.Zf;var di=new oa,ei=function(a,b){function c(h){var k=hb(h),l=gb(k,"protocol"),m=gb(k,"host",!0),n=gb(k,"port"),p=gb(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},fi=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ka(c)){for(var d=0;d<c.length;d++)if(fi({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(w){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=la(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=di.get(q);r||(r=new RegExp(c,t),di.set(q,r));p=r.test(b)}catch(w){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ei(b,c)}return!1};var hi=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var ii={},ji=encodeURI,L=encodeURIComponent,ki=Qa;var li=function(a,b){if(!a)return!1;var c=gb(hb(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var mi=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};ii.Wf=function(){var a=!1;return a};var ni=function(){var a=!1;return a};var Xi=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},Yi=function(){this.c=1;this.e=[];this.p=null};function Zi(a){var b=zc,c=b.gss=b.gss||{};return c[a]=c[a]||new Yi}var $i=function(a,b){Zi(a).p=b},aj=function(a){var b=Zi(a),c=b.p;if(c){var d=b.e,e=[];b.e=[];var g=function(h){for(var k=0;k<h.length;k++)try{var l=h[k];l.d?(l.d=!1,e.push(l)):c(l.n,l.t,l.p)}catch(m){}};g(d);g(e)}};var cj=function(){var a=f.gaGlobal=f.gaGlobal||{};a.hid=a.hid||na();return a.hid};var rj=window,sj=document,tj=function(a){var b=rj._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===rj["ga-disable-"+a])return!0;try{var c=rj.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=ib("AMP_TOKEN",sj.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return sj.getElementById("__gaOptOutExtension")?!0:!1};var Aj=function(a,b,c){zj(a);var d=Math.floor(wa()/1E3);Zi(a).e.push(new Xi(b,d,c,void 0));aj(a)},Bj=function(a,b,c){zj(a);var d=Math.floor(wa()/1E3);Zi(a).e.push(new Xi(b,d,c,!0))},zj=function(a){if(1===Zi(a).c&&(Zi(a).c=2,!Oe())){var b=encodeURIComponent(a);Na(("http:"!=f.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Dj=function(a,b){},Cj=function(a,
b){};var Y={a:{}};

Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.g="jsm";Y.__jsm.h=!0;Y.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=K("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Y.a.c=["google"],function(){(function(a){Y.__c=a;Y.__c.g="c";Y.__c.h=!0;Y.__c.b=0})(function(a){return a.vtp_value})}();

Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.g="e";Y.__e.h=!0;Y.__e.b=0})(function(a){return String(ud(a.vtp_gtmEventId,"event"))})}();Y.a.f=["google"],function(){(function(a){Y.__f=a;Y.__f.g="f";Y.__f.h=!0;Y.__f.b=0})(function(a){var b=Qh("gtm.referrer",1)||u.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?gb(hb(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Oh(String(b)):String(b)})}();
Y.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Nf(c,"gtm.click");Rh(d)}}(function(b){Y.__cl=b;Y.__cl.g="cl";Y.__cl.h=!0;Y.__cl.b=0})(function(b){if(!Yh("cl")){var c=K("document");Ra(c,"click",a,!0);Zh("cl")}A(b.vtp_gtmOnSuccess)})}();
Y.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.g="u";Y.__u.h=!0;Y.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Qh("gtm.url",1))||Mh();var d=b[a("vtp_component")];if(!d||"URL"==d)return Oh(String(c));var e=hb(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ka(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=gb(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=gb(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.g="v";Y.__v.h=!0;Y.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Qh(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.a.ua=["google"],function(){var a,b=function(c){var d={},e={},g={},h={},k={},l=void 0;if(c.vtp_gaSettings){var m=c.vtp_gaSettings;Ha(mi(m.vtp_fieldsToSet,"fieldName","value"),e);Ha(mi(m.vtp_contentGroup,"index","group"),g);Ha(mi(m.vtp_dimension,"index","dimension"),h);Ha(mi(m.vtp_metric,"index","metric"),k);c.vtp_gaSettings=null;m.vtp_fieldsToSet=void 0;m.vtp_contentGroup=void 0;m.vtp_dimension=void 0;m.vtp_metric=void 0;var n=Ha(m);c=Ha(c,n)}Ha(mi(c.vtp_fieldsToSet,"fieldName","value"),e);Ha(mi(c.vtp_contentGroup,
"index","group"),g);Ha(mi(c.vtp_dimension,"index","dimension"),h);Ha(mi(c.vtp_metric,"index","metric"),k);var p=Zd(c.vtp_functionName);if(ha(p)){var t="",q="";c.vtp_setTrackerName&&"string"==typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(q=c.vtp_trackerName,t=q+"."):(q="gtm"+Jc(),t=q+".");var r={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},v=function(U){var N=[].slice.call(arguments,0);N[0]=t+N[0];p.apply(window,N)},y=function(U,N){return void 0===N?N:U(N)},x=function(U,N){if(N)for(var Z in N)N.hasOwnProperty(Z)&&v("set",U+Z,N[Z])},z=function(){},
B=function(U,N,Z){var qa=0;if(U)for(var Ba in U)if(U.hasOwnProperty(Ba)&&(Z&&r[Ba]||!Z&&void 0===r[Ba])){var Ja=w[Ba]?ta(U[Ba]):U[Ba];"anonymizeIp"!=Ba||Ja||(Ja=void 0);N[Ba]=Ja;qa++}return qa},C={name:q};B(e,C,!0);(function(){})();p("create",c.vtp_trackingId||d.trackingId,C);v("set","&gtm",ah(!0));c.vtp_enableRecaptcha&&v("require","recaptcha","recaptcha.js");(function(U,N){void 0!==
c[N]&&v("set",U,c[N])})("nonInteraction","vtp_nonInteraction");x("contentGroup",g);x("dimension",h);x("metric",k);var E={};B(e,E,!1)&&v("set",E);var F;c.vtp_enableLinkId&&v("require","linkid","linkid.js");v("set","hitCallback",function(){var U=e&&e.hitCallback;ha(U)&&U();c.vtp_gtmOnSuccess()});if("TRACK_EVENT"==c.vtp_trackType){
c.vtp_enableEcommerce&&(v("require","ec","ec.js"),z());var Q={hitType:"event",eventCategory:String(c.vtp_eventCategory||d.category),eventAction:String(c.vtp_eventAction||d.action),eventLabel:y(String,c.vtp_eventLabel||d.label),eventValue:y(sa,c.vtp_eventValue||d.value)};B(F,Q,!1);v("send",Q);}else if("TRACK_SOCIAL"==c.vtp_trackType){}else if("TRACK_TRANSACTION"==c.vtp_trackType){}else if("TRACK_TIMING"==c.vtp_trackType){}else if("DECORATE_LINK"==c.vtp_trackType){}else if("DECORATE_FORM"==c.vtp_trackType){}else if("TRACK_DATA"==c.vtp_trackType){}else{c.vtp_enableEcommerce&&(v("require","ec","ec.js"),z());if(c.vtp_doubleClick||"DISPLAY_FEATURES"==c.vtp_advertisingFeaturesType){var S="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","displayfeatures",void 0,{cookieName:S})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==c.vtp_advertisingFeaturesType){var X="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");v("require","adfeatures",{cookieName:X})}F?v("send","pageview",F):v("send","pageview");c.vtp_autoLinkDomains&&$d(t,c.vtp_autoLinkDomains,!!c.vtp_useHashAutoLink,!!c.vtp_decorateFormsAutoLink);}if(!a){var V=c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";c.vtp_useInternalVersion&&!c.vtp_useDebugVersion&&(V="internal/"+V);a=!0;var ea=D("https:","http:",
"//www.google-analytics.com/"+V,e&&e.forceSSL);H(ea,function(){var U=Xd();U&&U.loaded||c.vtp_gtmOnFailure();},c.vtp_gtmOnFailure)}}else A(c.vtp_gtmOnFailure)};Y.__ua=b;Y.__ua.g="ua";Y.__ua.h=!0;Y.__ua.b=0}();




Y.a.aev=["google"],function(){function a(m,n){var p=!1,t;var q=ud(m,"gtm");if(!q)return;p=!0;t=q[n];p||(t=Qh("gtm."+n,1));return t}function b(m,n,p,t){t||(t="element");var q=m+"."+n,r;if(h.hasOwnProperty(q))r=h[q];else{var w=a(m,t);if(w&&(r=p(w),h[q]=r,k.push(q),35<k.length)){var v=k.shift();delete h[v]}}return r}function c(m,n,p){var t=a(m,l[n]);return void 0!==t?t:p}function d(m,n){if(!m)return!1;
var p=e(Mh());ka(n)||(n=String(n||"").replace(/\s+/g,"").split(","));for(var t=[p],q=0;q<n.length;q++)if(n[q]instanceof RegExp){if(n[q].test(m))return!1}else{var r=n[q];if(0!=r.length){if(0<=e(m).indexOf(r))return!1;t.push(e(r))}}return!li(m,t)}function e(m){g.test(m)||(m="http://"+m);return gb(hb(m),"HOST",!0)}var g=/^https?:\/\//i,h={},k=[],l={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",
HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(m){Y.__aev=m;Y.__aev.g="aev";Y.__aev.h=!0;Y.__aev.b=0})(function(m){var n=m.vtp_gtmEventId,p=m.vtp_defaultValue,t=m.vtp_varType;switch(t){case "TAG_NAME":var q=a(n,"element");return q&&q.tagName||p;case "TEXT":return b(n,t,Ua)||p;case "URL":var r;a:{var w=String(a(n,"elementUrl")||p||""),v=hb(w),y=String(m.vtp_component||"URL");switch(y){case "URL":r=
w;break a;case "IS_OUTBOUND":r=d(w,m.vtp_affiliatedDomains);break a;default:r=gb(v,y,m.vtp_stripWww,m.vtp_defaultPages,m.vtp_queryKey)}}return r;case "ATTRIBUTE":var x;if(void 0===m.vtp_attribute)x=c(n,t,p);else{var z=m.vtp_attribute,B=a(n,"element");x=B&&Ta(B,z)||p||""}return x;case "MD":var C=m.vtp_mdValue,E=b(n,"MD",xh);return C&&E?yh(E,C)||p:E||p;default:return c(n,t,p)}})}();

Y.a.hl=["google"],function(){function a(g){return g.target&&g.target.location&&g.target.location.href?g.target.location.href:Mh()}function b(g,h){Ra(g,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:Oh(l),D:Nh(l)})})}function c(g,h){Ra(g,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:Oh(l),D:Nh(l)})})}function d(g,h,k){var l=h.history,m=l[g];if(ha(m))try{l[g]=function(n,p,t){m.apply(l,[].slice.call(arguments,0));k({source:g,state:n,url:Oh(Mh()),
D:Nh(Mh())})}}catch(n){}}function e(){var g={source:null,state:K("history").state||null,url:Oh(Mh()),D:Nh(Mh())};return function(h){var k=g,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.D!=h.D){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":g.D,"gtm.newUrlFragment":h.D,"gtm.oldHistoryState":g.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=g.url,m["gtm.newUrl"]=h.url;
g=h;Rh(m)}}}(function(g){Y.__hl=g;Y.__hl.g="hl";Y.__hl.h=!0;Y.__hl.b=0})(function(g){var h=K("self");if(!Yh("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);Zh("hl")}A(g.vtp_gtmOnSuccess)})}();

Y.a.fsl=[],function(){function a(){var e=K("document"),g=c(),h=HTMLFormElement.prototype.submit;Ra(e,"click",function(k){var l=k.target;if(l&&(l=Wa(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Ta(l,"value")){var m;(m=l.form?l.form.tagName?l.form:u.getElementById(l.form):Wa(l,["form"],100))&&g.store(m,l)}},!1);Ra(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,p=!0;if(d(l,function(){if(p){var t=g.get(l),
q;t&&(q=e.createElement("input"),q.type="hidden",q.name=t.name,q.value=t.value,l.appendChild(q));h.call(l);q&&l.removeChild(q)}},m,n))p=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var g=e.target;return g&&"_self"!==g&&"_parent"!==g&&"_top"!==g?!1:!0}function c(){var e=[],g=function(h){return ma(e,function(k){return k.form===
h})};return{store:function(h,k){var l=g(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=g(h);return k?k.button:null}}}function d(e,g,h,k){var l=Rf("fsl",h?"nv.mwt":"mwt",0),m;m=h?Rf("fsl","nv.ids",[]):Rf("fsl","ids",[]);if(!m.length)return!0;var n=Nf(e,"gtm.formSubmit",m),p=e.action;p&&p.tagName&&(p=e.cloneNode(!1).action);n["gtm.elementUrl"]=p;if(k&&l){if(!Rh(n,hf(g),l))return!1}else Rh(n,function(){},l||2E3);return!0}(function(e){Y.__fsl=e;Y.__fsl.g="fsl";Y.__fsl.h=!0;Y.__fsl.b=
0})(function(e){var g=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(p){return Math.max(k,p)};Qf("fsl","mwt",m,0);h||Qf("fsl","nv.mwt",m,0)}var n=function(p){p.push(l);return p};Qf("fsl","ids",n,[]);h||Qf("fsl","nv.ids",n,[]);Yh("fsl")||(a(),Zh("fsl"));A(e.vtp_gtmOnSuccess)})}();
Y.a.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.g="smm";Y.__smm.h=!0;Y.__smm.b=0})(function(a){var b=a.vtp_input,c=mi(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Y.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=u.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Ma(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){A(h)}}}var c=function(d){if(u.body){var e=
d.vtp_gtmOnFailure,g=ci(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.uc,k=g.K;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(u.body,Va(h),k,e)()}else Kh(function(){c(d)},
200)};Y.__html=c;Y.__html.g="html";Y.__html.h=!0;Y.__html.b=0}();Y.a.dbg=["google"],function(){(function(a){Y.__dbg=a;Y.__dbg.g="dbg";Y.__dbg.h=!0;Y.__dbg.b=0})(function(){return!1})}();


Y.a.lcl=[],function(){function a(){var c=K("document"),d=0,e=function(g){var h=g.target;if(h&&3!==g.which&&(!g.timeStamp||g.timeStamp!==d)){d=g.timeStamp;h=Wa(h,["a","area"],100);if(!h)return g.returnValue;var k=g.defaultPrevented||!1===g.returnValue,l=Rf("lcl",k?"nv.mwt":"mwt",0),m;m=k?Rf("lcl","nv.ids",[]):Rf("lcl","ids",[]);if(m.length){var n=Nf(h,"gtm.linkClick",m);if(b(g,h,c)&&!k&&l&&h.href){var p=K((ai(h,"target")||"_self").substring(1)),t=!0;if(Rh(n,hf(function(){t&&p&&(p.location.href=ai(h,
"href"))}),l))t=!1;else return g.preventDefault&&g.preventDefault(),g.returnValue=!1}else Rh(n,function(){},l||2E3);return!0}}};Ra(c,"click",e,!1);Ra(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var g=ai(d,"href"),h=g.indexOf("#"),k=ai(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=Oh(g),m=Oh(e.location);return l!==m}return!0}(function(c){Y.__lcl=c;Y.__lcl.g="lcl";Y.__lcl.h=!0;Y.__lcl.b=0})(function(c){var d=
void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,g=Number(c.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(g,m)};Qf("lcl","mwt",k,0);e||Qf("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};Qf("lcl","ids",l,[]);e||Qf("lcl","nv.ids",l,[]);Yh("lcl")||(a(),Zh("lcl"));A(c.vtp_gtmOnSuccess)})}();

var Ej={};Ej.macro=function(a){if(Kf.fc.hasOwnProperty(a))return Kf.fc[a]},Ej.onHtmlSuccess=Kf.zd(!0),Ej.onHtmlFailure=Kf.zd(!1);Ej.dataLayer=md;Ej.callback=function(a){Hc.hasOwnProperty(a)&&ha(Hc[a])&&Hc[a]();delete Hc[a]};Ej.bf=function(){zc[yc.i]=Ej;za(Ic,Y.a);Wb=Wb||Kf;Xb=Bd};
Ej.Rf=function(){Eg.gtm_3pds=!0;zc=f.google_tag_manager=f.google_tag_manager||{};if(zc[yc.i]){var a=zc.zones;a&&a.unregisterChild(yc.i)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Pb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Sb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)Rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Qb.push(p)}Ub=Y;Vb=fi;Ej.bf();nf();Ed=!1;Fd=0;if("interactive"==u.readyState&&!u.createEventObject||"complete"==u.readyState)Hd();else{Ra(u,"DOMContentLoaded",Hd);Ra(u,"readystatechange",Hd);if(u.createEventObject&&u.documentElement.doScroll){var q=!0;try{q=!f.frameElement}catch(y){}q&&Id()}Ra(f,"load",Hd)}af=!1;"complete"===u.readyState?cf():
Ra(f,"load",cf);a:{if(!bd)break a;f.setInterval(cd,864E5);}
Ec=(new Date).getTime();}};(0,Ej.Rf)();

})()