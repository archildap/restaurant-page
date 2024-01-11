(()=>{"use strict";var e,n,t,r,o,a,i,c,s,d,l,u,p,m,h={426:(e,n,t)=>{t.d(n,{Z:()=>h});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(356),t.b),l=new URL(t(865),t.b),u=i()(o());u.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap);"]);var p=s()(d),m=s()(l);u.push([e.id,`* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Courgette', cursive;\n    text-align: center;\n\n}\n\n/* Header */\n\n#header {\n    width: 100%;\n    background: rgb(248, 243, 243);\n    color: black;\n    position: absolute;\n    z-index: 10;\n    height: 12%;\n    padding: 1.5rem 5rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 5px inset rgb(230, 149, 0);\n}\n\n#header h3 {\n    height: 100%;\n    padding-right: 4rem;\n    font-size: 1.7rem;\n    cursor: pointer;\n    background: url(${p}) no-repeat;\n    background-size: 20%;\n    background-position: right;\n    display: flex;\n    align-items: center;\n}\n\n#header ul {\n    list-style: none;\n    display: flex;\n    gap: 2rem;\n}\n\n#header li {\n    cursor: pointer;\n    font-size: 1.2rem;\n}\n\n#header li:hover {\n    font-size: 1.25rem;\n}\n\n\n\n\n/* home page */\n.bg-image {\n    position: relative;\n    background: url(${m}) no-repeat;\n    background-size: cover;\n    background-position: bottom;\n    width: 100%;\n    height: 100vh;\n}\n\n#home-section {\n    padding-top: 5rem;\n    position: absolute;\n    color: white;\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n#home-section p {\n    font-size: 1.5rem;\n    width: 40%;\n}\n\n#home-section h1 {\n    font-size: 3.8rem;\n}\n\n.btn {\n    font-family: 'Courgette', cursive;\n    padding: 10px 20px;\n    background: rgb(239, 148, 1);\n    border: none;\n    border-radius: 15px;\n    color: white;\n    font-size: 1rem;\n}\n\n.btn:hover {\n    background: rgb(255, 166, 23);\n    font-size: 1.02rem;\n}\n\n.btn:active {\n    padding: 11px 21px;\n}\n\n.bg-image::after {\n    content: ' ';\n    z-index: 0;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 100vh;\n    background: rgba(0, 0, 0, 0.4);\n}`,""]);const h=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},356:(e,n,t)=>{e.exports=t.p+"1a1d127746e8d2402346.png"},865:(e,n,t)=>{e.exports=t.p+"eb1af90cc8d12e080622.jpg"}},f={};function g(e){var n=f[e];if(void 0!==n)return n.exports;var t=f[e]={id:e,exports:{}};return h[e](t,t.exports,g),t.exports}g.m=h,g.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return g.d(n,{a:n}),n},g.d=(e,n)=>{for(var t in n)g.o(n,t)&&!g.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),g.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;g.g.importScripts&&(e=g.g.location+"");var n=g.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!e;)e=t[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=e})(),g.b=document.baseURI||self.location.href,g.nc=void 0,e=g(379),n=g.n(e),t=g(795),r=g.n(t),o=g(569),a=g.n(o),i=g(565),c=g.n(i),s=g(216),d=g.n(s),l=g(589),u=g.n(l),p=g(426),(m={}).styleTagTransform=u(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),n()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,function(){const e=document.querySelector("#content");e.appendChild(function(){const e=document.createElement("header"),n=document.createElement("h3"),t=document.createElement("ul"),r=document.createElement("li"),o=document.createElement("li"),a=document.createElement("li"),i=document.createElement("li");return r.appendChild(document.createElement("a")),o.appendChild(document.createElement("a")),a.appendChild(document.createElement("a")),i.appendChild(document.createElement("a")),r.textContent="Home",i.textContent="Menu",a.textContent="About",o.textContent="Contact",n.textContent="Crust & Craft",r.classList.add("nav","nav-home"),i.classList.add("nav","nav-menu"),a.classList.add("nav","nav-about"),o.classList.add("nav","nav-contact"),t.appendChild(r),t.appendChild(i),t.appendChild(a),t.appendChild(o),e.appendChild(n),e.appendChild(t),e.setAttribute("id","header"),e}()),e.appendChild(function(){const e=document.createElement("div"),n=document.createElement("h1"),t=document.createElement("p"),r=document.createElement("button"),o=document.createElement("div");return n.textContent="Crust & Craft",t.textContent='Welcome to "Crust & Craft Pizzeria," where passion meets perfection in every slice! Nestled in the heart\n    of the city, our pizza restaurant is a culinary haven for pizza enthusiasts seeking an unforgettable\n    dining experience.',r.textContent="BOOK NOW!",e.appendChild(n),e.appendChild(t),e.appendChild(r),document.querySelector("#content").appendChild(o),e.setAttribute("id","home-section"),r.classList.add("btn"),o.classList.add("bg-image"),e}())}()})();