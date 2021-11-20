(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["vue-visualization-app"]=t():e["vue-visualization-app"]=t()})(window,(function(){return function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],s=0,f=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b8e66":"06bc562c","chunk-239c2bb2":"c7085bcc","chunk-eed1f006":"c697dfda","chunk-5063a1b0":"75c59d12"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-239c2bb2":1,"chunk-eed1f006":1,"chunk-5063a1b0":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0b8e66":"31d6cfe0","chunk-239c2bb2":"ca3bd0c1","chunk-eed1f006":"7e31e6b6","chunk-5063a1b0":"e6a3c207"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var l=u[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-visualization/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp_vue-visualization"]=window["webpackJsonp_vue-visualization"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;return u.push([0,"vendors~app"]),n()}({0:function(e,t,n){e.exports=n("56d7")},"3fff":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return K})),n.d(t,"mount",(function(){return S})),n.d(t,"unmount",(function(){return C}));var r=n("1da1"),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("96cf"),n("83f4"),n("2b0e")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],i=(n("5c0b"),n("2877")),c={},l=Object(i["a"])(c,a,u,!1,null,null,null),s=l.exports,f=(n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("2532"),n("8c4f")),d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("dbbb")}})])}],h={name:"Home"},m=h,v=Object(i["a"])(m,d,p,!1,null,null,null),b=v.exports;o["default"].use(f["a"]);var A=window.__POWERED_BY_QIANKUN__?"/vue-visualization":"",g=[{path:A+"/",name:"Home",component:b,redirect:"/dashboard/overview"},{path:A+"/dashboard",name:"Dashboard",component:function(){return n.e("chunk-5063a1b0").then(n.bind(null,"c937"))},children:[{path:"overview",name:"Overview",component:function(){return Promise.all([n.e("chunk-2d0b8e66"),n.e("chunk-239c2bb2")]).then(n.bind(null,"de39"))}},{path:"analytics",name:"Analytics",component:function(){return Promise.all([n.e("chunk-2d0b8e66"),n.e("chunk-eed1f006")]).then(n.bind(null,"3fe3"))}}]}],P=new f["a"]({mode:"hash",routes:g});window.__POWERED_BY_QIANKUN__&&P.beforeEach((function(e,t,n){e.path.includes(A)?n():n({path:A+e.path})}));var w=P,y=n("2f62");o["default"].use(y["a"]);var U=new y["a"].Store({state:{},mutations:{},actions:{},modules:{}}),_=n("5c96"),N=n.n(_);n("0fae"),n("a210"),n("3fff");o["default"].use(N.a),o["default"].config.productionTip=!1;var k=null;function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.container;k=new o["default"]({router:w,store:U,render:function(e){return e(s)}}).$mount(t?t.querySelector("#app"):"#app")}function K(){return j.apply(this,arguments)}function j(){return j=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("[vue] vue app bootstraped");case 1:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function S(e){return T.apply(this,arguments)}function T(){return T=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("[vue] props from main framework",t),E(t);case 2:case"end":return e.stop()}}),e)}))),T.apply(this,arguments)}function C(){return O.apply(this,arguments)}function O(){return O=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:k.$destroy(),k.$el.innerHTML="",k=null;case 3:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}window.__POWERED_BY_QIANKUN__||E()},"5c0b":function(e,t,n){"use strict";n("70c1")},"70c1":function(e,t,n){},"83f4":function(e,t,n){window.__POWERED_BY_QIANKUN__&&(n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},a210:function(e,t,n){},dbbb:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAAAwCAMAAABe1aS+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA5UExURUdwTP9qAP9rAP9rAP9qAP9sAP9rAP9rAP9sAP9uAP96AP9sAP9qAP9rAP9qAP9rAP9wAP9rAP9qAKqb9/8AAAASdFJOUwDzg3nnUGWiPSMINLNajsQU04rSIgoAAAN9SURBVGje7ZrZlqMgEIZZZRU17/+w05IREAtER5N0zvynLzqCysdSUFUitEjxvsvUo1xEZHJUok/V6Nhjq217DVCLuXFTT2adoztY+vn2blfjcSaKgcY+CFCTQBUxzavZdTkaH7CebVWPXZmlV/Guns/UAnzOpCH+Aaxr9Yug5H5VBbQgtESBg6owTPVhUAQu6wpTtYOru4+CMuDUI6a4AA2Zaq+NUI7+yJsSpGkmP4sF1QmUC4XYr9NFbrWm2K5GcPINVO0YFkW3S2vYQKmlvbZgcPjyuGQtzGK+I1Baag4ZvmzosW20nmNvcXmoAlQ//0NfDUVTIsH1gVs1F7iwAwQoB+93N0Ml88iNJzZteP4FKL/89KuhpoL9alW0nQyA0t7qzFd4H6VAKBrKvaEIv+hxqDCBmD4FpeP5CoCSobfSYxgHoZpMepv+caDSodJbKN/L/fugupNQfQ0qrK03QfUnoXgNKi7574FKtt4ZChMylKEcWYSfdf/KfRhUF7deDxVh7jXpt0KJuPV+D5TfBKWUl0HJFpkylC7pABRbXI+LoPSjRVMZqnjPXVCUL/KGIvzqfjNUg0n/D3UXlBPeObkMCoV4ozdBTIAi90JFmIug1s4FPWzSRUnXQ41uJX/zsL6mgJfi8T1nvzYoKF5F911bh74KymQb21dAiUKM6jdDqT1v5KVQ4zNQk0PRH/Nj459fMNP62ipZ4TZxxjdClZxEu2/SUwSNK8N8jTvfvRyKhhDVynhwyaW6KPDiXg7FwDEgSbUQIsPjKaYYIsNQMHPEl0P1cEDPv+mvRxqDmeIUlKgFM9UzQTKX2CFK5scks5Ivc+trKtt4SdXOJ71kzWEkZathZw5m5MKkPWXSZWlaJa5mdyyJU0no0CIULZxzTkHZ4qyKJepAuq2eelMlqKF0zpEnoFT5hJSM4TaLzfYyOpoDXyhYVIASwBcJLEmOHoNylRNSXG1gZhrbvsjVC1xOimeGou/5uuUqeHixaS7zbXzbhoLHg8HC1HPUlcw02U0IVPLetjRHDPDtCWty0vd816wlDi6UlVP/RgIdhiLoHihb63wGTXk9NQ1rAxRBN0Et/cunht5HsFmZ8Tk6CIXTPfFaKBZeqzvo85y+ciRPNrdua1PUHP6FTI32gWG1KjJNwWTUFng2q0drZbZB6Y21zT/y6Pi5I+Ot+gNPpCJomQTojgAAAABJRU5ErkJggg=="}})}));