!function(o){var e;"function"==typeof o&&(e=o,o=null),function(e,n,i,t,a){var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="function"==typeof c[t]&&c[t],l=r.cache||{},p="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function f(o,n){if(!l[o]){if(!e[o]){var i="function"==typeof c[t]&&c[t];if(!n&&i)return i(o,!0);if(r)return r(o,!0);if(p&&"string"==typeof o)return p(o);var a=Error("Cannot find module '"+o+"'");throw a.code="MODULE_NOT_FOUND",a}d.resolve=function(n){var i=e[o][1][n];return null!=i?i:n},d.cache={};var s=l[o]=new f.Module(o);e[o][0].call(s.exports,d,s,s.exports,this)}return l[o].exports;function d(o){var e=d.resolve(o);return!1===e?{}:f(e)}}f.isParcelRequire=!0,f.Module=function(o){this.id=o,this.bundle=f,this.exports={}},f.modules=e,f.cache=l,f.parent=r,f.register=function(o,n){e[o]=[function(o,e){e.exports=n},{}]},Object.defineProperty(f,"root",{get:function(){return c[t]}}),c[t]=f;for(var s=0;s<n.length;s++)f(n[s]);if(i){var d=f(i);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof o&&o.amd?o(function(){return d}):a&&(this[a]=d)}}({kgW6q:[function(o,e,n){o("../../../background")},{"../../../background":"dHFmR"}],dHFmR:[function(o,e,n){chrome.runtime.onMessage.addListener(async(o,e,n)=>{if("start"===o.action)console.log(o.payload);else if("checkThisUrl"===o.action){let e=await fetch("http://178.170.48.29:5000/prediction",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5MTExNjUxNCwianRpIjoiZWE4YzljZTUtM2QzNi00ZWRmLThjNjgtZGVkYTFhNTg2MWE5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IllqWTFZVEZpT0RRdE1qVmxPQzAwTjJGbUxXRm1NV1l0WmpVeFpqQTBNak13WmpZeCIsIm5iZiI6MTY5MTExNjUxNCwiZXhwIjoxNjkxMTE3NDE0fQ.oUyWmhlBkDyjBh6apuBI6jwotjQrpWIJJkOIE-f4DTI"},body:JSON.stringify({url:o.payload})});console.log(o.payload);let i=await e.json();i?.predict==="NORMAL"?await chrome.action.setIcon({path:{16:"./../../icon16.plasmo.9f44d99c.png",32:"./../../icon32.plasmo.83dbbbab.png",48:"./../../icon48.plasmo.a78c509e.png",64:"./../../icon64.plasmo.15206795.png",128:"./../../icon128.plasmo.c11f39af.png"}}):i?.predict==="MALICIOUS"&&await chrome.action.setIcon({path:{16:"./icon16.plasmo.9f44d99c.png",32:"./icon32.plasmo.83dbbbab.png",48:"./icon48.plasmo.a78c509e.png",64:"./icon64.plasmo.15206795.png",128:"./icon128.plasmo.c11f39af.png"}}),n(i),console.log(i),console.log(e)}})},{}]},["kgW6q"],"kgW6q","parcelRequire91c9"),globalThis.define=e}(globalThis.define);