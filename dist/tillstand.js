var umd=function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){e.exports=a(1)},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){switch("string"==typeof t&&(t=(0,i["default"])(t)),!0){case e instanceof HTMLElement:return(0,p["default"])(e,t);case e instanceof NodeList:case e instanceof jQuery:case e instanceof Array:for(var a=0;a<e.length;a++)if(!(0,p["default"])(e[a]))return!1;return!0;default:return}}function f(e,t){switch("string"==typeof t&&(t=(0,i["default"])(t)),!0){case e instanceof HTMLElement:return(0,p["default"])(e,t)?((0,v["default"])(e,t),!1):((0,l["default"])(e,t),!0);case e instanceof NodeList:case e instanceof jQuery:case e instanceof Array:for(var a=0;a<e.length;a++)f(e[a],t);break;default:return}}function s(e,t){switch("string"==typeof t&&(t=(0,i["default"])(t)),!0){case e instanceof HTMLElement:(0,p["default"])(e,t)||(0,l["default"])(e,t);break;case e instanceof NodeList:case e instanceof jQuery:case e instanceof Array:for(var a=0;a<e.length;a++)s(e[a],t);break;default:return}}function u(e,t){switch("string"==typeof t&&(t=(0,i["default"])(t)),!0){case e instanceof HTMLElement:(0,p["default"])(e,t)&&(0,v["default"])(e,t);break;case e instanceof NodeList:case e instanceof jQuery:case e instanceof Array:for(var a=0;a<e.length;a++)u(e[a],t);break;default:return}}Object.defineProperty(t,"__esModule",{value:!0}),t.check=r,t.toggle=f,t.affirm=s,t.negate=u;var c=a(2),i=n(c),o=a(3),l=n(o),d=a(5),v=n(d),m=a(4),p=n(m)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){return{affirmative:"is-"+e,negative:"not-"+e}}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){switch((0,f["default"])(e,t)){case!1:e.className=e.className.replace(t.negative,t.affirmative);break;case null:e.className+=t.affirmative}};var r=a(4),f=n(r)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){return e.className.search(t.affirmative)>-1?!0:e.className.search(t.negative)>-1?!1:null}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){(0,f["default"])(e,t)&&(e.className=e.className.replace(t.affirmative,t.negative))};var r=a(4),f=n(r)}]);