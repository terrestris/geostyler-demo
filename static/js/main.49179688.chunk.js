(this["webpackJsonpgeostyler-demo"]=this["webpackJsonpgeostyler-demo"]||[]).push([[0],{1169:function(e,a,t){},1170:function(e,a,t){},1171:function(e,a,t){},1175:function(e,a,t){"use strict";t.r(a);var l=t(1),o=t.n(l),n=t(11),r=t.n(n),i=t(148),s=t(272),c=t(273),m=t(300),d=t(274),p=t(301),u=t(160),E=t(7),y=t(551),h=t(452),g=t(62),S=t(552),k=t(28),f=(t(613),t(614),t(557)),C=t.n(f),b=t(382),v=t.n(b),w=t(558),x=t.n(w),O=t(559),F=t.n(O),N=t(96),M=t(583),P=t.n(M),D=(t(1169),t(591)),L=t(553),j=(t(1170),t(584)),R=t(585),_=t(586),z=t(587),B=t(588),I=t(589),G=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).onExampleClicked=function(e){var a=e.target,l=parseInt(a.dataset.id,10);t.setState({selectedStyleId:l})},t.onOk=function(){var e=t.props.onOkClicked,a=t.state,l=a.exampleStyles,o=a.selectedStyleId,n=l.find((function(e){return e.id===o}));n&&e&&e(n.style)},t.state={exampleStyles:[{name:"Basic Point",id:1,description:"\u2026 the most simple example.",style:j},{name:"Basic Point",id:2,description:"\u2026 with a nested Filter",style:R},{name:"Zoom based Point",id:3,description:"\u2026 from GeoServer SLD Cookbook",style:z},{name:"Alternating Line",id:4,description:"\u2026 from GeoServer SLD Cookbook",style:B},{name:"Classified Polygons",id:5,description:"\u2026 for population. Created via classification tool.",style:_},{name:"Raster ColorMap",id:6,description:"\u2026 with a multi-color gradient from GeoServer SLD Cookbook",style:I}],locale:Object(i.a)({examples:"Examples"},N.locale.en_US)},t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.visible,o=a.onOkClicked,n=Object(D.a)(a,["visible","onOkClicked"]),r=this.state,i=r.selectedStyleId,s=r.exampleStyles,c=r.locale,m=s.map((function(a){var t="example-card";return a.id===i&&(t+=" selected"),l.createElement("div",{"data-id":a.id,className:t,key:a.name+a.description,onClick:e.onExampleClicked,title:a.description},l.createElement("span",{className:"title"},a.name),l.createElement("div",{className:"description"},a.description))}));return l.createElement(E.c,{locale:c},l.createElement(L.a,Object.assign({className:"examples-dialog"},n,{title:c.examples,visible:t,onOk:this.onOk,onCancel:function(){return o()}}),m))}}]),a}(l.Component);G.defaultProps={visible:!1},G.componentName="ExamplesDialog";var J=G,K=u.a.Button,T=u.a.Group,q=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e)))._sldStyleParser=new v.a,t._geoJsonParser=new C.a,t._shapefileParser=new x.a,t._wfsParser=new F.a,t.onLangChange=function(e){switch(e.target.value){case"en":k.locale("en"),t.setState({locale:Object(i.a)({graphicalEditor:"Graphical Editor",codeEditor:"Code Editor",previewMap:"Preview Map",language:"Language",compact:"Compact",examples:"Examples"},N.locale.en_US)});break;case"de":k.locale("de"),t.setState({locale:Object(i.a)({graphicalEditor:"Grafischer Editor",codeEditor:"Code Editor",previewMap:"Vorschau Karte",language:"Sprache",compact:"Kompakt",examples:"Beispiele"},N.locale.de_DE)});break;case"es":k.locale("es"),t.setState({locale:Object(i.a)({graphicalEditor:"Editor gr\xe1fico",codeEditor:"Editor de c\xf3digo",previewMap:"Mapa de previsualizaci\xf3n",language:"Idioma",compact:"Compacto",examples:"Ejemplos"},N.locale.es_ES)});break;default:k.locale("en"),t.setState({locale:Object(i.a)({graphicalEditor:"Graphical Editor",codeEditor:"Code Editor",previewMap:"Preview Map",language:"Language",compact:"Compact",examples:"Examples"},N.locale.en_US)})}},t.onRuleRendererChange=function(e){var a=e.target.value;t.setState({ruleRendererType:a})},t.onCompactSwitchChange=function(e){t.setState({compact:e})},t.onExamplesButtonClicked=function(){var e=t.state.examplesModalVisible;t.setState({examplesModalVisible:!e})},t.onExampleSelected=function(e){e?t.setState({examplesModalVisible:!1,style:e}):t.setState({examplesModalVisible:!1})},t.state={locale:Object(i.a)({graphicalEditor:"Graphical Editor",codeEditor:"Code Editor",previewMap:"Preview Map",language:"Language",compact:"Compact",examples:"Examples"},N.locale.en_US),compact:!0,ruleRendererType:"SLD",examplesModalVisible:!1,style:{name:"Demo Style",rules:[{name:"Rule 1",symbolizers:[{kind:"Mark",wellKnownName:"Circle"}]}]}},t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.examplesModalVisible,o=a.locale,n=a.style,r=a.data,i=a.compact,s=a.ruleRendererType;return l.createElement(E.c,{locale:o},l.createElement("div",{className:"app"},l.createElement("header",{className:"gs-header"},l.createElement("span",{className:"logo-title"},l.createElement("img",{className:"logo",src:P.a,alt:"logo"}),l.createElement("span",{className:"app-title"},"GeoStyler"))),l.createElement(y.a,{layout:"inline",className:"gs-settings"},l.createElement(y.a.Item,{label:o.language},l.createElement(T,{className:"language-select",onChange:this.onLangChange,defaultValue:"en"},l.createElement(K,{value:"en"},"EN"),l.createElement(K,{value:"de"},"DE"),l.createElement(K,{value:"es"},"ES"))),l.createElement(y.a.Item,{label:o.compact},l.createElement(h.a,{checked:i,onChange:this.onCompactSwitchChange})),l.createElement(y.a.Item,{label:"Symbolizer Renderer"},l.createElement(T,{className:"language-select",onChange:this.onRuleRendererChange,value:s},l.createElement(K,{value:"OpenLayers"},"OpenLayers"),l.createElement(K,{value:"SLD"},"SLD"))),l.createElement(y.a.Item,null,l.createElement(N.StyleLoader,{parsers:[this._sldStyleParser],onStyleRead:function(a){e.setState({style:a})}})),l.createElement(y.a.Item,null,l.createElement(N.DataLoader,{parsers:[this._geoJsonParser,this._wfsParser,this._shapefileParser],onDataRead:function(a){e.setState({data:a})}})),l.createElement(y.a.Item,null,l.createElement(g.a,{onClick:this.onExamplesButtonClicked},o.examples))),l.createElement("div",{className:"main-content"},l.createElement("div",{className:"gui-wrapper"},l.createElement("h2",null,o.graphicalEditor),l.createElement(N.Style,{style:n,data:r,onStyleChange:function(a){e.setState({style:a})},compact:i,ruleRendererType:s,sldRendererProps:{wmsBaseUrl:"https://ows.terrestris.de/geoserver/wms",layer:"terrestris:bundeslaender"}})),l.createElement("div",{className:"right-wrapper"},l.createElement(S.a,{defaultActiveKey:["code-editor"]},l.createElement(S.a.Panel,{header:o.codeEditor,key:"code-editor"},l.createElement(N.CodeEditor,{style:n,parsers:[this._sldStyleParser],defaultParser:this._sldStyleParser,onStyleChange:function(a){e.setState({style:a})},showSaveButton:!0,showCopyButton:!0})),l.createElement(S.a.Panel,{header:o.previewMap,key:"preview-map"},l.createElement(N.PreviewMap,{style:n,data:r}))))),l.createElement(J,{visible:t,onOkClicked:this.onExampleSelected,width:"50%"})))}}]),a}(l.Component);q.componentName="App";var V=q;t(1171),t(1172);r.a.render(o.a.createElement(V,null),document.getElementById("root"))},583:function(e,a,t){e.exports=t.p+"static/media/logo.b2b95d68.svg"},584:function(e){e.exports=JSON.parse('{"name":"Basic Circle","rules":[{"name":"Rule 1","symbolizers":[{"kind":"Mark","wellKnownName":"Circle"}]}]}')},585:function(e){e.exports=JSON.parse('{"name":"Nested Filter","rules":[{"filter":["&&",["||",["==","ID","1"],["==","ID","2"]],["||",["==","STREET","Main"],["==","STREET","Time square"],["&&",[">=","HOUSENO","1909"],["<=","HOUSENO","19909"]]]],"name":"Test","scaleDenominator":{"max":20000,"min":10000},"symbolizers":[{"color":"#FF0000","kind":"Mark","wellKnownName":"Circle","radius":3,"strokeColor":"#000000","strokeWidth":2}]}]}')},586:function(e){e.exports=JSON.parse('{"name":"Population Quantiles","rules":[{"name":"679000 - 2071000","filter":["&&",[">=","pop","679000"],["<","pop","2071000"]],"symbolizers":[{"kind":"Fill","color":"#f7f4f9"}]},{"name":"2071000 - 3228500","filter":["&&",[">=","pop","2071000"],["<","pop","3228500"]],"symbolizers":[{"kind":"Fill","color":"#cda0cf"}]},{"name":"3228500 - 6646250","filter":["&&",[">=","pop","3228500"],["<","pop","6646250"]],"symbolizers":[{"kind":"Fill","color":"#e71978"}]},{"name":"6646250 - 17890000","filter":["&&",[">=","pop","6646250"],["<=","pop","17890000"]],"symbolizers":[{"kind":"Fill","color":"#67001f"}]}]}')},587:function(e){e.exports=JSON.parse('{"name":"GeoServer SLD Cook Book: Zoom-based point","rules":[{"name":"Large","scaleDenominator":{"max":160000000},"symbolizers":[{"kind":"Mark","color":"#CC3300","radius":6,"wellKnownName":"Circle"}]},{"name":"Medium","scaleDenominator":{"min":160000000,"max":320000000},"symbolizers":[{"kind":"Mark","color":"#CC3300","radius":4,"wellKnownName":"Circle"}]},{"name":"Small","scaleDenominator":{"min":320000000},"symbolizers":[{"kind":"Mark","color":"#CC3300","radius":2,"wellKnownName":"Circle"}]}]}')},588:function(e){e.exports=JSON.parse('{"name":"SLD Cook Book: Dash/Symbol line","rules":[{"name":"","symbolizers":[{"kind":"Line","color":"#0000FF","width":1,"dasharray":[10,10]},{"kind":"Line","graphicStroke":{"kind":"Mark","radius":2.5,"wellKnownName":"Circle","strokeColor":"#000033","strokeWidth":1},"dasharray":[5,15],"dashOffset":7.5}]}]}')},589:function(e){e.exports=JSON.parse('{"name":"SLD Cook Book: Many color gradient","rules":[{"name":"","symbolizers":[{"kind":"Raster","colorMap":{"type":"ramp","colorMapEntries":[{"color":"#000000","quantity":95},{"color":"#0000FF","quantity":110},{"color":"#00FF00","quantity":135},{"color":"#FF0000","quantity":160},{"color":"#FF00FF","quantity":185},{"color":"#FFFF00","quantity":210},{"color":"#00FFFF","quantity":235},{"color":"#FFFFFF","quantity":256}]}}]}]}')},608:function(e,a,t){e.exports=t(1175)},625:function(e,a){},627:function(e,a){},699:function(e,a){}},[[608,1,2]]]);
//# sourceMappingURL=main.49179688.chunk.js.map