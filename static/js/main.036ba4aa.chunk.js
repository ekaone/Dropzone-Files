(this["webpackJsonpdropzone-files"]=this["webpackJsonpdropzone-files"]||[]).push([[0],{12:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(3),i=t.n(a),l=(t(12),t(5)),c=t(6);function s(){var e={display:"inline-flex",borderRadius:2,border:"1px solid #eaeaea",marginBottom:8,marginRight:8,width:100,height:100,padding:4,boxSizing:"border-box"},n={display:"flex",minWidth:0,overflow:"hidden"},t={display:"block",width:"auto",height:"100%"},a=Object(o.useState)([]),i=Object(l.a)(a,2),s=i[0],u=i[1],d=Object(c.a)({accept:"image/*",onDrop:function(e){u(e.map((function(e,n){return Object.assign(e,{preview:URL.createObjectURL(e,n),index:n})})))}}),f=d.getRootProps,m=d.getInputProps,p=s.map((function(o){return r.a.createElement("div",{style:e,key:o.name},r.a.createElement("div",{style:n},r.a.createElement("img",{src:o.preview,style:t,alt:o.path,onClick:function(){return function(e){var n=s.filter((function(n){return n.index!==e}));u(n),console.log(n)}(o.index)}}),r.a.createElement("br",null)))}));return Object(o.useEffect)((function(){return function(){s.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[s]),r.a.createElement(r.a.Fragment,null,r.a.createElement("section",null,r.a.createElement("div",f({className:"dropzone"}),r.a.createElement("aside",{style:{backgroundColor:"yellow"}},r.a.createElement("input",m()),r.a.createElement("p",null,"Drag 'n' drop some files here, or ",r.a.createElement("u",null,"click")," to select files")))),r.a.createElement("section",null,r.a.createElement("aside",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:16}},r.a.createElement("h4",null,"Click image to removed"),r.a.createElement("br",null),p),r.a.createElement("aside",null,r.a.createElement("button",{onClick:function(){return u([])}},"Delete all Images"))),r.a.createElement("hr",null),r.a.createElement("header",null,r.a.createElement("section",null,r.a.createElement("pre",null,JSON.stringify(s,null,4)))))}var u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null))},d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Dropzone-Files",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/Dropzone-Files","/service-worker.js");d?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(n,e)}))}}()},7:function(e,n,t){e.exports=t(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.036ba4aa.chunk.js.map