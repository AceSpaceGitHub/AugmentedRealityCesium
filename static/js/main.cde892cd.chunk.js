(this["webpackJsonpar-map"]=this["webpackJsonpar-map"]||[]).push([[0],{0:function(t,e){t.exports=Cesium},14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),a=n(5),r=n.n(a),l=(n(14),n(15),n(6)),u=n(7),s=n(9),d=n(8),c=n(3),v=n(0),h=n(2),p=function(t){Object(s.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(l.a)(this,n),(t=e.call(this)).state={},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timer=setInterval((function(){t.getExportData()}),5e3),this.getExportData()}},{key:"componentWillUnmount",value:function(){this.timer&&window.clearInterval(this.timer)}},{key:"getExportData",value:function(){var t=this;fetch("http://augmentedrealitywhiteboardbackend.azurewebsites.net/exportdata",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(e){var n,o,i,a,r,l,u,s,d,c,v,h=!0;Math.abs((null!==(n=null===(o=t.state.exportData)||void 0===o||null===(i=o.anchor)||void 0===i?void 0:i.latitude)&&void 0!==n?n:0)-(null!==(a=null===e||void 0===e||null===(r=e.anchor)||void 0===r?void 0:r.latitude)&&void 0!==a?a:0))<Number.EPSILON&&Math.abs((null!==(l=null===(u=t.state.exportData)||void 0===u||null===(s=u.anchor)||void 0===s?void 0:s.longitude)&&void 0!==l?l:0)-(null!==(d=null===e||void 0===e||null===(c=e.anchor)||void 0===c?void 0:c.longitude)&&void 0!==d?d:0))<Number.EPSILON&&(h=!1),console.log(null===(v=t.state.exportData)||void 0===v?void 0:v.anchor),console.log(h),t.setState({needsFlyTo:h,exportData:e})}))}},{key:"render",value:function(){var t,e,n,o,i,a,r,l,u,s,d;return Object(h.jsxs)(c.d,{full:!0,children:[(null===(t=this.state)||void 0===t||null===(e=t.exportData)||void 0===e?void 0:e.anchor)?Object(h.jsx)(c.b,{position:v.Cartesian3.fromDegrees(this.state.exportData.anchor.longitude,this.state.exportData.anchor.latitude),name:"Anchor",description:"Home",children:Object(h.jsx)(c.c,{pixelSize:10,color:v.Color.RED})}):void 0,(null===(n=this.state)||void 0===n||null===(o=n.exportData)||void 0===o?void 0:o.markers)?this.state.exportData.markers.map((function(t,e){return Object(h.jsx)(c.b,{position:v.Cartesian3.fromDegrees(t.longitude,t.latitude),name:t.name,description:t.type,children:Object(h.jsx)(c.c,{pixelSize:10,color:v.Color.BLUE})},e)})):void 0,(null===(i=this.state)||void 0===i?void 0:i.needsFlyTo)?Object(h.jsx)(c.a,{destination:v.Cartesian3.fromDegrees(null!==(a=null===(r=this.state.exportData)||void 0===r||null===(l=r.anchor)||void 0===l?void 0:l.longitude)&&void 0!==a?a:0,null!==(u=null===(s=this.state.exportData)||void 0===s||null===(d=s.anchor)||void 0===d?void 0:d.latitude)&&void 0!==u?u:0,1e6),duration:3}):void 0]})}}]),n}(i.a.Component);var x=function(){return Object(h.jsx)(p,{})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,o=e.getFID,i=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),o(t),i(t),a(t),r(t)}))};r.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.cde892cd.chunk.js.map