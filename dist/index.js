!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.q_validation=t():e.q_validation=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){n(7);var r=n(5)(n(2),n(6),"data-v-c4bbd988",null);e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n.n(r);t.default={q_validation:o.a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"q_validation",data:function(){return{fixBox:!1,boxHeight:56,img_captcha:""}},props:{url:{type:String,defalut:"//192.168.9.119:8082/index.html"},appid:Number,operation:Number,value:{}},methods:{updateCaptcha:function(){this.$emit("input",this.img_captcha)}},components:{},created:function(){var e=this;window.addEventListener("message",function(t){void 0!==t.data.event&&e.operation!=t.data.data.operation||("changeBox"==t.data.event&&(t.data.data.height>100?(e.fixBox=!0,setTimeout(function(){e.boxHeight=t.data.data.height},100)):e.boxHeight=t.data.data.height),"validationCancel"==t.data.event&&(e.boxHeight=56,e.fixBox=!1),"validationSucceed"==t.data.event&&(e.fixBox=!1,e.boxHeight=56,e.img_captcha=t.data.data.data))},!1)}}},function(e,t,n){t=e.exports=n(4)(),t.push([e.i,".verification-box[data-v-c4bbd988]{width:100%;box-sizing:border-box;border-radius:28px;margin-bottom:15px;position:relative;overflow:hidden;background-color:rgba(88,79,96,.498039215686275)}iframe[data-v-c4bbd988]{display:block}.verification-box.fixBox .mask[data-v-c4bbd988]{width:100%;height:100vh;background:rgba(0,0,0,.5);position:fixed;top:0;left:0;z-index:100}.verification-box.fixBox iframe[data-v-c4bbd988]{width:80%;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:200;background-color:rgba(88,79,96,.498039215686275)}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t){e.exports=function(e,t,n,r){var o,a=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(o=e,a=e.default);var s="function"==typeof a?a.options:a;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var d=s.computed||(s.computed={});Object.keys(r).forEach(function(e){var t=r[e];d[e]=function(){return t}})}return{esModule:o,exports:a,options:s}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("div",{staticClass:"verification-box",class:{fixBox:e.fixBox},attrs:{value:e.updateCaptcha()}},[n("div",{staticClass:"mask"}),e._v(" "),n("iframe",{attrs:{src:"//"+e.url+"#/"+e.appid+"/"+e.operation+"/1",name:"verification",width:"100%",height:e.boxHeight+"px",frameborder:"0",scrolling:"no",allowtransparency:"true"}})])])])},staticRenderFns:[]}},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(8)("414a4faa",r,!0)},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=c[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(a(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(a(n.parts[o]));c[n.id]={id:n.id,refs:1,parts:i}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function a(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(x){var a=l++;r=p||(p=o()),t=i.bind(null,r,a,!1),n=i.bind(null,r,a,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function i(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(9),c={},f=d&&(document.head||document.getElementsByTagName("head")[0]),p=null,l=0,v=!1,h=function(){},x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var o=u(e,t);return r(o),function(t){for(var n=[],a=0;a<o.length;a++){var i=o[a],s=c[i.id];s.refs--,n.push(s)}t?(o=u(e,t),r(o)):o=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete c[s.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=a[0],s=a[1],d=a[2],u=a[3],c={id:e+":"+o,css:s,media:d,sourceMap:u};r[i]?r[i].parts.push(c):n.push(r[i]={id:i,parts:[c]})}return n}}])});