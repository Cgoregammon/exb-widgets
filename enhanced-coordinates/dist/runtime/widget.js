System.register(["jimu-core","jimu-arcgis"],(function(e,t){var o={},n={};return{setters:[function(e){o.React=e.React,o.css=e.css,o.jsx=e.jsx},function(e){n.JimuMapViewComponent=e.JimuMapViewComponent}],execute:function(){e((()=>{var e={686:e=>{"use strict";e.exports=n},244:e=>{"use strict";e.exports=o}},t={};function l(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,l),i.exports}l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var i={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(i),l.d(i,{__set_webpack_public_path__:()=>x,default:()=>g});var e=l(244),t=l(686);const{useState:o,useRef:n,useCallback:r,useEffect:s}=e.React,c=e.css`
  .ec-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 12px;
    overflow: hidden;
  }

  .ec-coords-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4px;
    padding: 4px 8px;
    min-height: 28px;
    color: var(--dark-800, #333);
    background: var(--light-100, #f8f8f8);
    border-bottom: 1px solid var(--light-400, #ddd);
  }

  .ec-coords-bar .ec-sep {
    color: var(--light-500, #bbb);
    margin: 0 2px;
  }

  .ec-coords-bar .ec-label {
    white-space: nowrap;
  }

  .ec-buttons-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4px;
    padding: 4px 8px;
    min-height: 32px;
    background: var(--light-200, #f0f0f0);
  }

  .ec-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 3px 8px;
    border: 1px solid var(--light-500, #ccc);
    border-radius: 4px;
    background: var(--white, #fff);
    color: var(--dark-600, #555);
    cursor: pointer;
    font-size: 11px;
    font-family: inherit;
    white-space: nowrap;
    transition: background 0.15s, border-color 0.15s;
  }

  .ec-btn:hover {
    background: var(--light-300, #e8e8e8);
    border-color: var(--light-600, #aaa);
  }

  .ec-btn:disabled {
    opacity: 0.4;
    cursor: default;
  }

  .ec-btn:disabled:hover {
    background: var(--white, #fff);
    border-color: var(--light-500, #ccc);
  }

  .ec-btn-icon {
    width: 14px;
    height: 14px;
  }

  .ec-copied {
    color: var(--success, #28a745);
    font-weight: 600;
  }

  .ec-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    color: var(--dark-400, #999);
    text-align: center;
    flex: 1;
  }

  .ec-click-hint {
    font-size: 11px;
    color: var(--dark-400, #999);
    font-style: italic;
  }
`,a='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="7" fill="#4285F4"/><text x="8" y="12" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">G</text></svg>',u='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="5" r="3" fill="#FBBC05"/><path d="M4 16 C4 10, 12 10, 12 16" fill="#FBBC05"/></svg>',d='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="14" height="14" rx="2" fill="#00809D"/><text x="8" y="12" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">B</text></svg>',p='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="9" height="10" rx="1" fill="none" stroke="#666" stroke-width="1.5"/><path d="M3 12V3a1 1 0 011-1h7" fill="none" stroke="#666" stroke-width="1.5"/></svg>';function v({svgStr:t,alt:o}){const n=new Blob([t],{type:"image/svg+xml"}),l=URL.createObjectURL(n);return(0,e.jsx)("img",{className:"ec-btn-icon",src:l,alt:o})}function g(l){var i,g,x,m,w,b,f,h,y,j,k,S,C;const{config:$,useMapWidgetIds:B}=l,[M,N]=o(""),[_,O]=o(""),[F,T]=o(0),[R,G]=o(0),[P,V]=o("0"),[z,E]=o("0"),[D,U]=o(!1),[I,J]=o(null),[L,W]=o(null),[Z,A]=o(!1),q=n(null),H=n(null),K=n(null),Q=n(null),X=n(!0),Y=n(null),ee=null===(i=null==$?void 0:$.showZoom)||void 0===i||i,te=null===(g=null==$?void 0:$.showScale)||void 0===g||g,oe=null===(x=null==$?void 0:$.showTilt)||void 0===x||x,ne=null===(m=null==$?void 0:$.showRotation)||void 0===m||m,le=null===(w=null==$?void 0:$.showGoogleMaps)||void 0===w||w,ie=null===(b=null==$?void 0:$.showGoogleStreetView)||void 0===b||b,re=null===(f=null==$?void 0:$.showGoogle3D)||void 0===f||f,se=null===(h=null==$?void 0:$.showBingSatellite)||void 0===h||h,ce=null===(y=null==$?void 0:$.showBingStreetside)||void 0===y||y,ae=null===(j=null==$?void 0:$.showCopyCoords)||void 0===j||j,ue=null!==(k=null==$?void 0:$.pictometryEnabled)&&void 0!==k&&k,de=null!==(S=null==$?void 0:$.pictometryBaseUrl)&&void 0!==S?S:"",pe=null===(C=null==$?void 0:$.disablePopupsOnClick)||void 0===C||C;s((()=>()=>{var e;H.current&&H.current.remove(),K.current&&K.current.remove(),Q.current&&Q.current.remove(),Y.current&&clearTimeout(Y.current),(null===(e=q.current)||void 0===e?void 0:e.view)&&(q.current.view.popupEnabled=!0)}),[]);const ve=r((e=>{T(e.zoom),G(Math.round(e.scale)),e.viewpoint&&(E(e.viewpoint.rotation.toFixed(1)),e.viewpoint.camera&&V(e.viewpoint.camera.tilt.toFixed(0)))}),[]),ge=r((e=>{if(!e)return;q.current=e;const t=e.view;H.current&&H.current.remove(),K.current&&K.current.remove(),Q.current&&Q.current.remove(),H.current=t.on("pointer-move",(e=>{const o=t.toMap({x:e.x,y:e.y});o&&(N(o.latitude.toFixed(5)),O(o.longitude.toFixed(5)),U(!0))})),K.current=t.on("click",(e=>{const o=e.mapPoint;o&&null!=o.latitude&&null!=o.longitude&&(J(o.latitude),W(o.longitude),A(!1),pe&&(t.popupEnabled=!1,X.current=!1,setTimeout((()=>{t.popupEnabled=!0,X.current=!0}),300)),e.stopPropagation())})),Q.current=t.watch("extent",(()=>{ve(t)})),ve(t),U(!0)}),[pe,ve]),xe=r((()=>{if(null==I||null==L)return;const e=`https://www.google.com/maps/@${I},${L},18z`;window.open(e,"_blank")}),[I,L]),me=r((()=>{if(null==I||null==L)return;const e=`https://www.google.com/maps/@${I},${L},3a,75y,0h,90t/data=!3m4!1e1!3m2!1s!2e0`;window.open(e,"_blank")}),[I,L]),we=r((()=>{if(null==I||null==L)return;const e=`https://www.google.com/maps/@${I},${L},500a,35y,${z||"0"}h,${P||"0"}t/data=!3m1!1e3`;window.open(e,"_blank")}),[I,L,z,P]),be=r((()=>{if(null==I||null==L)return;const e=`https://www.bing.com/maps?cp=${I}~${L}&lvl=18&style=a`;window.open(e,"_blank")}),[I,L]),fe=r((()=>{if(null==I||null==L)return;const e=`https://www.bing.com/maps?cp=${I}~${L}&lvl=18&style=x`;window.open(e,"_blank")}),[I,L]),he=r((()=>{if(null==I||null==L||!de)return;const e=`${de}${I},${L}`;window.open(e,"_blank")}),[I,L,de]),ye=r((()=>{if(null==I||null==L)return;const e=`${I.toFixed(6)}, ${L.toFixed(6)}`;navigator.clipboard.writeText(e).then((()=>{A(!0),Y.current&&clearTimeout(Y.current),Y.current=setTimeout((()=>A(!1)),2e3)})).catch((()=>{const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),A(!0),Y.current&&clearTimeout(Y.current),Y.current=setTimeout((()=>A(!1)),2e3)}))}),[I,L]);if(!B||0===B.length)return(0,e.jsx)("div",{css:c},(0,e.jsx)("div",{className:"ec-container"},(0,e.jsx)("div",{className:"ec-placeholder"},"Connect this widget to a Map widget in the settings panel.")));const je=null!=I&&null!=L,ke=[];M&&_&&ke.push(`${M}, ${_}`),ee&&ke.push(`Zoom: ${F.toFixed(0)}`),te&&ke.push(`Scale: 1:${R.toLocaleString()}`),oe&&ke.push(`Tilt: ${P}\xb0`),ne&&ke.push(`Rotation: ${z}\xb0`);const Se=le||ie||re||se||ce||ae||ue&&de;return(0,e.jsx)("div",{css:c},(0,e.jsx)("div",{className:"ec-container"},(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:B[0],onActiveViewChange:ge}),(0,e.jsx)("div",{className:"ec-coords-bar"},D?ke.map(((t,o)=>(0,e.jsx)(e.React.Fragment,{key:o},o>0&&(0,e.jsx)("span",{className:"ec-sep"},"|"),(0,e.jsx)("span",{className:"ec-label"},t)))):(0,e.jsx)("span",{className:"ec-label"},"Move pointer over map...")),Se&&(0,e.jsx)("div",{className:"ec-buttons-bar"},!je&&(0,e.jsx)("span",{className:"ec-click-hint"},"Click on the map for location tools"),le&&(0,e.jsx)("button",{className:"ec-btn",onClick:xe,disabled:!je,title:"Open in Google Maps"},(0,e.jsx)(v,{svgStr:a,alt:"Google"}),"Maps"),ie&&(0,e.jsx)("button",{className:"ec-btn",onClick:me,disabled:!je,title:"Open in Google Street View"},(0,e.jsx)(v,{svgStr:u,alt:"Street View"}),"Street View"),re&&(0,e.jsx)("button",{className:"ec-btn",onClick:we,disabled:!je,title:"Open in Google Maps 3D"},(0,e.jsx)(v,{svgStr:a,alt:"Google 3D"}),"3D"),se&&(0,e.jsx)("button",{className:"ec-btn",onClick:be,disabled:!je,title:"Open in Bing Satellite"},(0,e.jsx)(v,{svgStr:d,alt:"Bing"}),"Bing Sat"),ce&&(0,e.jsx)("button",{className:"ec-btn",onClick:fe,disabled:!je,title:"Open in Bing Streetside"},(0,e.jsx)(v,{svgStr:d,alt:"Bing Streetside"}),"Streetside"),ue&&de&&(0,e.jsx)("button",{className:"ec-btn",onClick:he,disabled:!je,title:"Open in Pictometry"},"Pictometry"),ae&&(0,e.jsx)("button",{className:"ec-btn",onClick:ye,disabled:!je,title:"Copy coordinates to clipboard"},(0,e.jsx)(v,{svgStr:p,alt:"Copy"}),Z?(0,e.jsx)("span",{className:"ec-copied"},"Copied!"):"Copy"))))}function x(e){l.p=e}})(),i})())}}}));