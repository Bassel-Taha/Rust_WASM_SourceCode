(()=>{var e,t,r,n,a,o,i={},s={};function l(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={id:e,loaded:!1,exports:{}};return i[e](r,r.exports,l),r.loaded=!0,r.exports}l.m=i,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},l.a=(a,o,i)=>{var s;i&&((s=[]).d=-1);var l,c,u,d=new Set,p=a.exports,b=new Promise(((e,t)=>{u=t,c=e}));b[t]=p,b[e]=e=>(s&&e(s),d.forEach(e),b.catch((e=>{}))),a.exports=b,o((a=>{var o;l=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var o=[];o.d=0,a.then((e=>{i[t]=e,n(o)}),(e=>{i[r]=e,n(o)}));var i={};return i[e]=e=>e(o),i}}var s={};return s[e]=e=>{},s[t]=a,s})))(a);var i=()=>l.map((e=>{if(e[r])throw e[r];return e[t]})),c=new Promise((t=>{(o=()=>t(i)).r=0;var r=e=>e!==s&&!d.has(e)&&(d.add(e),e&&!e.d&&(o.r++,e.push(o)));l.map((t=>t[e](r)))}));return o.r?c:i()}),(e=>(e?u(b[r]=e):c(p),n(s)))),s&&s.d<0&&(s.d=0)},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,r)=>(l.f[r](e,t),t)),[])),l.u=e=>e+".index.js",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="rust_wsam:",l.l=(e,t,r,n)=>{if(a[e])a[e].push(t);else{var i,s;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+r){i=d;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",o+r),i.src=e),a[e]=[t];var p=(t,r)=>{i.onerror=i.onload=null,clearTimeout(b);var n=a[e];if(delete a[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},b=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),s&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.v=(e,t,r,n)=>{var a=fetch(l.p+""+r+".module.wasm"),o=()=>a.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,n))).then((t=>Object.assign(e,t.instance.exports)));return a.then((t=>"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(t,n).then((t=>Object.assign(e,t.instance.exports)),(e=>{if("application/wasm"!==t.headers.get("Content-Type"))return console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e),o();throw e})):o()))},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={792:0};l.f.j=(t,r)=>{var n=l.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=a);var o=l.p+l.u(t),i=new Error;l.l(o,(r=>{if(l.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,a,[o,i,s]=r,c=0;if(o.some((t=>0!==e[t]))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);s&&s(l)}for(t&&t(r);c<o.length;c++)a=o[c],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunkrust_wsam=self.webpackChunkrust_wsam||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),async function(){let e=!1;const t=document.getElementById("upload");let r=null;try{r=await l.e(300).then(l.bind(l,300)),console.log(r)}catch(e){return void console.log(e)}let n=new FileReader;t.addEventListener("change",(()=>{0!=t.files.length&&n.readAsDataURL(t.files[0])})),n.onloadend=()=>{e=!0,(e=!0)&&(t.disabled=!0),n.result;let a=n.result.replace(/^data:image\/(png|jpeg|jpg);base64,/,""),o=r.Gray_Scale(a);document.getElementById("new-img").setAttribute("src",o),e=!1,t.disabled=!1}}()})();