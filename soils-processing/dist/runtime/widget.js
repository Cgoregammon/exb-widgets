System.register(["jimu-core"],(function(e,s){var r={};return{setters:[function(e){r.React=e.React,r.SessionManager=e.SessionManager,r.css=e.css,r.jsx=e.jsx}],execute:function(){e((()=>{var e={244:e=>{"use strict";e.exports=r}},s={};function o(r){var t=s[r];if(void 0!==t)return t.exports;var i=s[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.d=(e,s)=>{for(var r in s)o.o(s,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:s[r]})},o.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var t={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(t),o.d(t,{__set_webpack_public_path__:()=>d,default:()=>l});var e=o(244),s=function(e,s,r,o){return new(r||(r=Promise))((function(t,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function n(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var s;e.done?t(e.value):(s=e.value,s instanceof r?s:new r((function(e){e(s)}))).then(a,n)}l((o=o.apply(e,s||[])).next())}))};const{useState:r,useRef:i,useCallback:a}=e.React,n=e.css`
  .sp-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 12px;
    overflow: hidden;
  }

  .sp-content {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .sp-title {
    font-size: 16px;
    font-weight: 700;
    color: var(--dark-800, #333);
    margin-bottom: 4px;
  }

  .sp-subtitle {
    font-size: 12px;
    color: var(--dark-400, #999);
    margin-bottom: 8px;
  }

  .sp-field {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .sp-label {
    font-weight: 600;
    font-size: 13px;
    color: var(--dark-600, #555);
  }

  .sp-required {
    color: var(--danger, #dc3545);
    font-size: 11px;
  }

  .sp-dropzone {
    width: 100%;
    padding: 20px 12px;
    border: 2px dashed var(--light-500, #ccc);
    border-radius: 8px;
    text-align: center;
    color: var(--dark-400, #999);
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
    font-size: 13px;
  }

  .sp-dropzone:hover {
    border-color: var(--primary, #0079c1);
    background: var(--light-100, #f8f8f8);
  }

  .sp-dropzone.sp-dragging {
    border-color: var(--primary, #0079c1);
    background: var(--light-200, #f0f0f0);
  }

  .sp-dropzone.sp-has-file {
    border-color: var(--success, #28a745);
    background: var(--light-100, #f8f8f8);
    color: var(--dark-800, #333);
  }

  .sp-dropzone input { display: none; }

  .sp-input {
    width: 100%;
    padding: 8px 10px;
    border: 1px solid var(--light-500, #ccc);
    border-radius: 4px;
    font-size: 13px;
    font-family: inherit;
  }

  .sp-input:focus {
    outline: none;
    border-color: var(--primary, #0079c1);
  }

  .sp-submit-btn {
    width: 100%;
    padding: 10px 16px;
    border: none;
    border-radius: 6px;
    background: var(--primary, #0079c1);
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    transition: background 0.15s;
  }

  .sp-submit-btn:hover:not(:disabled) {
    background: #005a8e;
  }

  .sp-submit-btn:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .sp-progress {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px;
    background: var(--light-100, #f8f8f8);
    border: 1px solid var(--light-400, #ddd);
    border-radius: 6px;
  }

  .sp-progress-title {
    font-weight: 600;
    font-size: 13px;
    color: var(--dark-600, #555);
  }

  .sp-progress-bar-bg {
    width: 100%;
    height: 8px;
    background: var(--light-400, #ddd);
    border-radius: 4px;
    overflow: hidden;
  }

  .sp-progress-bar {
    height: 100%;
    background: var(--primary, #0079c1);
    border-radius: 4px;
    transition: width 0.3s;
  }

  .sp-progress-bar.sp-complete {
    background: var(--success, #28a745);
  }

  .sp-progress-bar.sp-error {
    background: var(--danger, #dc3545);
  }

  .sp-progress-status {
    font-size: 12px;
    color: var(--dark-400, #999);
  }

  .sp-message {
    font-size: 12px;
    padding: 8px 12px;
    border-radius: 4px;
  }

  .sp-message-success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  .sp-message-error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }

  .sp-message-info {
    background: #d1ecf1;
    color: #0c5460;
    border: 1px solid #bee5eb;
  }

  .sp-download-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    width: 100%;
    padding: 10px 16px;
    border: none;
    border-radius: 6px;
    background: var(--success, #28a745);
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    transition: background 0.15s;
    text-decoration: none;
  }

  .sp-download-btn:hover {
    background: #218838;
    color: #fff;
  }

  .sp-reset-btn {
    width: 100%;
    padding: 8px 16px;
    border: 1px solid var(--light-500, #ccc);
    border-radius: 6px;
    background: var(--white, #fff);
    color: var(--dark-600, #555);
    font-size: 13px;
    font-family: inherit;
    cursor: pointer;
  }

  .sp-reset-btn:hover {
    background: var(--light-300, #e8e8e8);
  }

  .sp-file-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
  }

  .sp-file-name {
    font-weight: 600;
    color: var(--dark-800, #333);
  }

  .sp-file-remove {
    color: var(--danger, #dc3545);
    cursor: pointer;
    font-size: 11px;
    border: none;
    background: none;
    text-decoration: underline;
    font-family: inherit;
  }
`;function l(o){const{config:t}=o,[l,d]=r(null),[p,c]=r((null==t?void 0:t.defaultName)||""),[u,f]=r(!1),[g,b]=r("idle"),[m,v]=r(0),[x,h]=r(""),[j,y]=r(""),[k,w]=r(""),[N,S]=r(""),z=i(null),P=i(null),M=(null==t?void 0:t.gpServiceUrl)||"https://atlas.michels.us/arcgis/rest/services/Geoprocessing/M0109SoilsProcessing_GPServer/M0109SoilsProcessing",J=M.substring(0,M.lastIndexOf("/")),C=a((()=>s(this,void 0,void 0,(function*(){var s;try{const r=e.SessionManager.getInstance(),o=r.getMainSession()||(null===(s=r.getSessions())||void 0===s?void 0:s[0]);if(o){return(yield o.getToken(J))||""}}catch(e){}return""}))),[J]),I=a((e=>{const s=e.name.toLowerCase().split(".").pop();"kmz"===s||"kml"===s?(d(e),S("")):(S("Please select a .kmz or .kml file."),d(null))}),[]),$=a((e=>{var s;const r=null===(s=e.target.files)||void 0===s?void 0:s[0];r&&I(r),z.current&&(z.current.value="")}),[I]),T=a((()=>{d(null),c((null==t?void 0:t.defaultName)||""),b("idle"),v(0),h(""),y(""),w(""),S(""),P.current&&clearInterval(P.current)}),[t]),D=a((()=>s(this,void 0,void 0,(function*(){var e,r,o;if(l&&p.trim()){b("uploading"),v(10),h("Uploading file..."),S(""),y(""),w("");try{const t=yield C(),i=`${J}/uploads/upload`,a=new FormData;a.append("file",l),a.append("f","json"),t&&a.append("token",t);const n=yield fetch(i,{method:"POST",body:a}),d=yield n.json();if(!(null===(e=d.item)||void 0===e?void 0:e.itemID))throw new Error((null===(r=d.error)||void 0===r?void 0:r.message)||"File upload failed.");const c=d.item.itemID;v(30),h("File uploaded. Submitting job..."),b("submitted");const u=`${M}/submitJob`,f=new URLSearchParams;f.append("inKMZ",JSON.stringify({itemID:c})),f.append("Name",p.trim()),f.append("f","json"),t&&f.append("token",t);const g=yield fetch(u,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:f.toString()}),m=yield g.json();if(!m.jobId)throw new Error((null===(o=m.error)||void 0===o?void 0:o.message)||"Job submission failed.");const x=m.jobId;v(50),h("Job submitted. Processing..."),b("processing");const j=`${M}/jobs/${x}`;P.current=setInterval((()=>s(this,void 0,void 0,(function*(){var e,s,r;try{const o=new URLSearchParams;o.append("f","json"),t&&o.append("token",t);const i=yield fetch(`${j}?${o.toString()}`),a=yield i.json(),n=a.jobStatus;if("esriJobSucceeded"===n){if(clearInterval(P.current),v(90),h("Processing complete. Getting results..."),null===(e=a.results)||void 0===e?void 0:e.message)try{const e=`${j}/results/message?f=json${t?"&token="+t:""}`,s=yield fetch(e),r=yield s.json();r.value&&y(r.value)}catch(e){}if(null===(s=a.results)||void 0===s?void 0:s.outTab)try{const e=`${j}/results/outTab?f=json${t?"&token="+t:""}`,s=yield fetch(e),o=yield s.json();if(null===(r=o.value)||void 0===r?void 0:r.url){const e=t?`${o.value.url}?token=${t}`:o.value.url;w(e)}}catch(e){}v(100),h("Complete!"),b("complete")}else if("esriJobFailed"===n||"esriJobCancelled"===n||"esriJobTimedOut"===n){clearInterval(P.current);let e="Job failed.";if(a.messages){const s=a.messages.filter((e=>"esriJobMessageTypeError"===e.type||"esriJobMessageTypeWarning"===e.type)).map((e=>e.description));s.length>0&&(e=s.join("; "))}v(100),h(e),b("failed"),S(e)}else{v({esriJobSubmitted:50,esriJobWaiting:55,esriJobExecuting:70}[n]||60),h(`Status: ${n.replace("esriJob","")}...`)}}catch(e){clearInterval(P.current),b("failed"),S("Error checking job status: "+e.message)}}))),3e3)}catch(e){b("failed"),v(0),S(e.message),h("")}}}))),[l,p,M,J,C]),O=l&&p.trim()&&"idle"===g,R=["uploading","submitted","processing"].includes(g);return(0,e.jsx)("div",{css:n},(0,e.jsx)("div",{className:"sp-container"},(0,e.jsx)("div",{className:"sp-content"},(0,e.jsx)("div",null,(0,e.jsx)("div",{className:"sp-title"},"Soils Processing"),(0,e.jsx)("div",{className:"sp-subtitle"},"Upload a KMZ/KML file to generate a soils report from the USA Soils Map Units service.")),(0,e.jsx)("div",{className:"sp-field"},(0,e.jsx)("div",{className:"sp-label"},"Input KMZ/KML File ",(0,e.jsx)("span",{className:"sp-required"},"*")),l?(0,e.jsx)("div",{className:"sp-dropzone sp-has-file"},(0,e.jsx)("div",{className:"sp-file-info"},(0,e.jsx)("span",{className:"sp-file-name"},l.name),"idle"===g&&(0,e.jsx)("button",{className:"sp-file-remove",onClick:()=>d(null)},"Remove"))):(0,e.jsx)("div",{className:"sp-dropzone "+(u?"sp-dragging":""),onClick:()=>{var e;return null===(e=z.current)||void 0===e?void 0:e.click()},onDragOver:e=>{e.preventDefault(),e.stopPropagation(),f(!0)},onDragLeave:e=>{e.preventDefault(),e.stopPropagation(),f(!1)},onDrop:e=>{var s;e.preventDefault(),e.stopPropagation(),f(!1);const r=null===(s=e.dataTransfer.files)||void 0===s?void 0:s[0];r&&I(r)}},(0,e.jsx)("input",{ref:z,type:"file",accept:".kml,.kmz",onChange:$}),"Drop a KMZ or KML file here, or click to browse")),(0,e.jsx)("div",{className:"sp-field"},(0,e.jsx)("div",{className:"sp-label"},"Name / Job Number ",(0,e.jsx)("span",{className:"sp-required"},"*")),(0,e.jsx)("input",{className:"sp-input",type:"text",placeholder:"Enter a Bid or Job Number",value:p,onChange:e=>c(e.target.value),disabled:R})),"idle"===g&&(0,e.jsx)("button",{className:"sp-submit-btn",onClick:D,disabled:!O},"Submit for Processing"),R&&(0,e.jsx)("div",{className:"sp-progress"},(0,e.jsx)("div",{className:"sp-progress-title"},"Processing..."),(0,e.jsx)("div",{className:"sp-progress-bar-bg"},(0,e.jsx)("div",{className:"sp-progress-bar",style:{width:`${m}%`}})),(0,e.jsx)("div",{className:"sp-progress-status"},x)),N&&(0,e.jsx)("div",{className:"sp-message sp-message-error"},N),j&&(0,e.jsx)("div",{className:"sp-message sp-message-info"},j),"complete"===g&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("div",{className:"sp-progress"},(0,e.jsx)("div",{className:"sp-progress-title"},"Processing Complete"),(0,e.jsx)("div",{className:"sp-progress-bar-bg"},(0,e.jsx)("div",{className:"sp-progress-bar sp-complete",style:{width:"100%"}})),(0,e.jsx)("div",{className:"sp-progress-status"},x)),k&&(0,e.jsx)("a",{className:"sp-download-btn",href:k,target:"_blank",rel:"noopener noreferrer"},"Download Soils Report"),(0,e.jsx)("button",{className:"sp-reset-btn",onClick:T},"Process Another File")),"failed"===g&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("div",{className:"sp-progress"},(0,e.jsx)("div",{className:"sp-progress-title"},"Processing Failed"),(0,e.jsx)("div",{className:"sp-progress-bar-bg"},(0,e.jsx)("div",{className:"sp-progress-bar sp-error",style:{width:"100%"}}))),(0,e.jsx)("button",{className:"sp-reset-btn",onClick:T},"Try Again")))))}function d(e){o.p=e}})(),t})())}}}));