System.register(["jimu-core","jimu-arcgis"],(function(e,t){var n={},o={};return{setters:[function(e){n.React=e.React,n.css=e.css,n.jsx=e.jsx},function(e){o.JimuMapViewComponent=e.JimuMapViewComponent}],execute:function(){e((()=>{var e={686:e=>{"use strict";e.exports=o},244:e=>{"use strict";e.exports=n}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,i),r.exports}i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="";var r={};return i.p=window.jimuConfig.baseUrl,(()=>{"use strict";i.r(r),i.d(r,{__set_webpack_public_path__:()=>d,default:()=>a});var e=i(244),t=i(686);const{useState:n,useRef:o,useCallback:s,useEffect:l}=e.React,c=e.css`
  .ge-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 12px;
    overflow: hidden;
  }

  .ge-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px;
    gap: 8px;
    flex: 1;
  }

  .ge-coords {
    font-size: 13px;
    color: var(--dark-800, #333);
    text-align: center;
  }

  .ge-hint {
    font-size: 12px;
    color: var(--dark-400, #999);
    font-style: italic;
    text-align: center;
  }

  .ge-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 20px;
    border: none;
    border-radius: 6px;
    background: #4285F4;
    color: #fff;
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    font-family: inherit;
    white-space: nowrap;
    transition: background 0.15s;
  }

  .ge-btn:hover {
    background: #3367D6;
  }

  .ge-btn:disabled {
    opacity: 0.4;
    cursor: default;
    background: #4285F4;
  }

  .ge-btn-icon {
    width: 18px;
    height: 18px;
  }

  .ge-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    color: var(--dark-400, #999);
    text-align: center;
    flex: 1;
    font-size: 13px;
  }
`;function a(i){var r,a;const{config:d,useMapWidgetIds:u}=i,[p,f]=n(null),[x,g]=n(null),[m,v]=n(0),[h,y]=n(0),[w,b]=n(0),j=o(null),k=o(null),$=null!==(r=null==d?void 0:d.defaultAltitude)&&void 0!==r?r:500,_=null!==(a=null==d?void 0:d.openMode)&&void 0!==a?a:"web";l((()=>()=>{j.current&&j.current.remove(),k.current&&k.current.remove()}),[]);const M=s((e=>{if(!e)return;const t=e.view;j.current&&j.current.remove(),k.current&&k.current.remove(),j.current=t.on("click",(e=>{const t=e.mapPoint;t&&null!=t.latitude&&null!=t.longitude&&(f(t.latitude),g(t.longitude),e.stopPropagation())})),k.current=t.watch("extent",(()=>{v(t.zoom),t.viewpoint&&(y(t.viewpoint.rotation||0),t.viewpoint.camera&&b(t.viewpoint.camera.tilt||0))}))}),[]),C=s((()=>{if(null==p||null==x)return;const e=$,t=h.toFixed(1),n=w>0?w.toFixed(1):"60";if("desktop"===_){const o=`https://earth.google.com/web/@${p},${x},${e}a,${e}d,${n}y,${t}h,${n}t,0r`;window.open(o,"_blank")}else{const o=`https://earth.google.com/web/@${p},${x},${e}a,${e}d,${n}y,${t}h,${n}t,0r`;window.open(o,"_blank")}}),[p,x,$,_,h,w]);if(!u||0===u.length)return(0,e.jsx)("div",{css:c},(0,e.jsx)("div",{className:"ge-container"},(0,e.jsx)("div",{className:"ge-placeholder"},"Connect this widget to a Map widget in the settings panel.")));const S=null!=p&&null!=x;return(0,e.jsx)("div",{css:c},(0,e.jsx)("div",{className:"ge-container"},(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:u[0],onActiveViewChange:M}),(0,e.jsx)("div",{className:"ge-content"},!S&&(0,e.jsx)("span",{className:"ge-hint"},"Click on the map to set a location"),S&&(0,e.jsx)("span",{className:"ge-coords"},p.toFixed(6),", ",x.toFixed(6)),(0,e.jsx)("button",{className:"ge-btn",onClick:C,disabled:!S,title:"Open in Google Earth"},(0,e.jsx)("svg",{className:"ge-btn-icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.jsx)("circle",{cx:"12",cy:"12",r:"10",fill:"#4285F4",stroke:"#fff",strokeWidth:"1"}),(0,e.jsx)("circle",{cx:"12",cy:"12",r:"6",fill:"none",stroke:"#fff",strokeWidth:"1.5"}),(0,e.jsx)("circle",{cx:"12",cy:"12",r:"2",fill:"#fff"}),(0,e.jsx)("line",{x1:"12",y1:"2",x2:"12",y2:"6",stroke:"#fff",strokeWidth:"1"}),(0,e.jsx)("line",{x1:"12",y1:"18",x2:"12",y2:"22",stroke:"#fff",strokeWidth:"1"}),(0,e.jsx)("line",{x1:"2",y1:"12",x2:"6",y2:"12",stroke:"#fff",strokeWidth:"1"}),(0,e.jsx)("line",{x1:"18",y1:"12",x2:"22",y2:"12",stroke:"#fff",strokeWidth:"1"})),"Open in Google Earth"))))}function d(e){i.p=e}})(),r})())}}}));