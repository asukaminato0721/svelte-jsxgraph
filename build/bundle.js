var app=function(){"use strict";function noop(){}function run(t){return t()}function blank_object(){return Object.create(null)}function run_all(t){t.forEach(run)}function is_function(t){return"function"==typeof t}function safe_not_equal(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function is_empty(t){return 0===Object.keys(t).length}function append(t,e){t.appendChild(e)}function insert(t,e,n){t.insertBefore(e,n||null)}function detach(t){t.parentNode.removeChild(t)}function destroy_each(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function element(t){return document.createElement(t)}function text(t){return document.createTextNode(t)}function space(){return text(" ")}function empty(){return text("")}function listen(t,e,n,a){return t.addEventListener(e,n,a),()=>t.removeEventListener(e,n,a)}function attr(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function children(t){return Array.from(t.childNodes)}function set_input_value(t,e){t.value=null==e?"":e}function set_style(t,e,n,a){t.style.setProperty(e,n,a?"important":"")}function select_option(t,e){for(let n=0;n<t.options.length;n+=1){const a=t.options[n];if(a.__value===e)return void(a.selected=!0)}}function select_value(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}class HtmlTag{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=element(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)insert(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(detach)}}let current_component;function set_current_component(t){current_component=t}const dirty_components=[],binding_callbacks=[],render_callbacks=[],flush_callbacks=[],resolved_promise=Promise.resolve();let update_scheduled=!1;function schedule_update(){update_scheduled||(update_scheduled=!0,resolved_promise.then(flush))}function add_render_callback(t){render_callbacks.push(t)}let flushing=!1;const seen_callbacks=new Set;function flush(){if(!flushing){flushing=!0;do{for(let t=0;t<dirty_components.length;t+=1){const e=dirty_components[t];set_current_component(e),update(e.$$)}for(set_current_component(null),dirty_components.length=0;binding_callbacks.length;)binding_callbacks.pop()();for(let t=0;t<render_callbacks.length;t+=1){const e=render_callbacks[t];seen_callbacks.has(e)||(seen_callbacks.add(e),e())}render_callbacks.length=0}while(dirty_components.length);for(;flush_callbacks.length;)flush_callbacks.pop()();update_scheduled=!1,flushing=!1,seen_callbacks.clear()}}function update(t){if(null!==t.fragment){t.update(),run_all(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(add_render_callback)}}const outroing=new Set;let outros;function transition_in(t,e){t&&t.i&&(outroing.delete(t),t.i(e))}function transition_out(t,e,n,a){if(t&&t.o){if(outroing.has(t))return;outroing.add(t),outros.c.push((()=>{outroing.delete(t),a&&(n&&t.d(1),a())})),t.o(e)}}function create_component(t){t&&t.c()}function mount_component(t,e,n,a){const{fragment:r,on_mount:o,on_destroy:i,after_update:c}=t.$$;r&&r.m(e,n),a||add_render_callback((()=>{const e=o.map(run).filter(is_function);i?i.push(...e):run_all(e),t.$$.on_mount=[]})),c.forEach(add_render_callback)}function destroy_component(t,e){const n=t.$$;null!==n.fragment&&(run_all(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function make_dirty(t,e){-1===t.$$.dirty[0]&&(dirty_components.push(t),schedule_update(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function init(t,e,n,a,r,o,i=[-1]){const c=current_component;set_current_component(t);const l=t.$$={fragment:null,ctx:null,props:o,update:noop,not_equal:r,bound:blank_object(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:blank_object(),dirty:i,skip_bound:!1};let s=!1;if(l.ctx=n?n(t,e.props||{},((e,n,...a)=>{const o=a.length?a[0]:n;return l.ctx&&r(l.ctx[e],l.ctx[e]=o)&&(!l.skip_bound&&l.bound[e]&&l.bound[e](o),s&&make_dirty(t,e)),n})):[],l.update(),s=!0,run_all(l.before_update),l.fragment=!!a&&a(l.ctx),e.target){if(e.hydrate){const t=children(e.target);l.fragment&&l.fragment.l(t),t.forEach(detach)}else l.fragment&&l.fragment.c();e.intro&&transition_in(t.$$.fragment),mount_component(t,e.target,e.anchor,e.customElement),flush()}set_current_component(c)}class SvelteComponent{$destroy(){destroy_component(this,1),this.$destroy=noop}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!is_empty(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var browserSupportsTextareaTextNodes;function canManipulateViaTextNodes(t){if("TEXTAREA"!==t.nodeName)return!1;if(void 0===browserSupportsTextareaTextNodes){var e=document.createElement("textarea");e.value=1,browserSupportsTextareaTextNodes=!!e.firstChild}return browserSupportsTextareaTextNodes}function index(t,e){if(t.focus(),document.selection){var n=document.selection.createRange();return n.text=e,n.collapse(!1),void n.select()}if(!document.execCommand("insertText",!1,e)){var a=t.selectionStart,r=t.selectionEnd;if("function"==typeof t.setRangeText)t.setRangeText(e);else{var o=document.createRange(),i=document.createTextNode(e);if(canManipulateViaTextNodes(t)){var c=t.firstChild;if(c){for(var l=0,s=null,d=null;c&&(null===s||null===d);){var u=c.nodeValue.length;a>=l&&a<=l+u&&o.setStart(s=c,a-l),r>=l&&r<=l+u&&o.setEnd(d=c,r-l),l+=u,c=c.nextSibling}a!==r&&o.deleteContents()}else t.appendChild(i)}if(canManipulateViaTextNodes(t)&&"#text"===o.commonAncestorContainer.nodeName)o.insertNode(i);else{var p=t.value;t.value=p.slice(0,a)+e+p.slice(r)}}t.setSelectionRange(a+e.length,a+e.length);var h=document.createEvent("UIEvent");h.initEvent("input",!0,!1),t.dispatchEvent(h)}}function saveTextAsFile(t,e){var n=new Blob([t],{type:"text/plain"}),a=document.createElement("a");a.download=e,a.innerHTML="Download File",null!=window.webkitURL?a.href=window.webkitURL.createObjectURL(n):(a.href=window.URL.createObjectURL(n),a.onclick=destroyClickedElement,a.style.display="none",document.body.appendChild(a)),a.click()}var InfinitySquare='var board = JXG.JSXGraph.initBoard("jxgbox", {\n    boundingbox: [-9, 8, 9, -10],\n    keepaspectreatio: true,\n    axis: false,\n    grid: false,\n    shownavigation: false,\n  });\n\n  // construction\n  board.suspendUpdate();\n  var S = board.create(\n    "slider",\n    [\n      [-5, -6],\n      [5, -6],\n      [0, 0.85, 1],\n    ],\n    {\n      name: "Whirl",\n    }\n  );\n  var hue = board.create(\n    "slider",\n    [\n      [-5, -7],\n      [5, -7],\n      [0, 20.5, 36],\n    ],\n    {\n      name: "Colors",\n    }\n  );\n\n  var points = new Array();\n  points[0] = board.create("point", [5, 5], { name: " " });\n  points[1] = board.create("point", [-5, 5], { name: " " });\n  points[2] = board.create("point", [-5, -5], { name: " " });\n  points[3] = board.create("point", [5, -5], { name: " " });\n\n  function quadrangle(pt, n) {\n    var col;\n    var arr = new Array();\n    for (var i = 0; i < 4; i++) {\n      arr[i] = board.create(\n        "point",\n        [\n          (function (t) {\n            return function () {\n              var x = pt[t].X();\n              var x1 = pt[(t + 1) % 4].X();\n              var s = S.Value();\n              return x + (x1 - x) * s;\n            };\n          })(i),\n          (function (t) {\n            return function () {\n              var y = pt[t].Y();\n              var y1 = pt[(t + 1) % 4].Y();\n              var s = S.Value();\n              return y + (y1 - y) * s;\n            };\n          })(i),\n        ],\n        { size: 1, name: "", withLabel: false, visible: false }\n      );\n    }\n    col = function () {\n      return JXG.hsv2rgb(hue.Value() * n, 0.7, 0.9);\n    };\n    board.create("polygon", pt, { fillColor: col });\n    if (n > 0) quadrangle(arr, --n);\n  }\n  quadrangle(points, 30);\n\n  board.unsuspendUpdate();';let Moonwalk="  var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-1.5, 1.5, 1.5, -1.5], axis: false, grid: false}),\n        mu = 1.0/81.45, stars = 40, i,\n        apolloPath, moonPath,\n        moon, apollo, earth,\n        ode = function () {\n            var I = [17.066, 0],\n                x0 = [0.994, 0, 0, -2.0015851063790825],\n                N = 10000,\n                data, dataX, dataY, i,\n \n                f = function(t, x) {\n                    var m  = 1.0/81.45,\n                        D1 = Math.sqrt(Math.pow((x[0]+m)*(x[0]+m)+x[2]*x[2],3)),\n                        D2 = Math.sqrt(Math.pow((x[0]-(1-m))*(x[0]-(1-m))+x[2]*x[2],3)),\n                        y = [];\n \n                    y[0] = x[1];\n                    y[1] = x[0]+2*x[3]-(1-m)*(x[0]+m)/D1-m*(x[0]-(1-m))/D2;\n                    y[2] = x[3];\n                    y[3] = x[2]-2*x[1]-(1-m)*x[2]/D1-m*x[2]/D2;\n \n                    return y;\n                };\n \n \n            data = JXG.Math.Numerics.rungeKutta('rk4', x0, I, N, f);\n \n            dataX = [];\n            dataY = [];\n            for(i = 0; i < data.length; i++) {\n                dataX[i] = data[i][0];\n                dataY[i] = data[i][2];\n            }\n \n            return [dataX, dataY];\n        },\n        circle = function (radius, points) {\n            var dataX = [], dataY = [], i;\n \n            for (i = 0; i < points; i++) {\n                dataX[i] = radius*Math.cos(i/(points-1)*2*Math.PI);\n                dataY[i] = -radius*Math.sin(i/(points-1)*2*Math.PI);\n            }\n \n            return [dataX, dataY];\n        };\n \n    // stars\n    for (i = 0; i < stars; i++) {\n        board.create('point', [3*Math.random()-1.5, 3*Math.random()-1.5],{\n            strokeWidth: 0,\n            fillColor: 'white',\n            size: 1,\n            face: '<>',\n            withLabel: false,\n            needsRegularUpdate: false,\n            fixed: true\n        });\n    }\n \n    // earth\n    earth = board.create('point', [-mu, 0], {\n        withLabel: false,\n        strokeWidth: 0,\n        strokeColor: 'none',\n        fillColor: '#4096EE',\n        size: 12\n    });\n \n    earth.setProperty({\n        gradient: 'linear',\n        gradientSecondColor: 'green',\n        needsRegularUpdate: false,\n        fixed: true\n    });\n \n    // our space shuttle\n    apolloPath = board.createElement('curve', ode(), {\n        strokeColor: 'red',\n        strokeOpacity: 0.3,\n        strokeWidth: 3,\n        visible: true,\n        needsRegularUpdate: false\n    });\n \n    apolloPath.hasPoint = function () {\n        return false;\n    };\n \n    apollo = board.create('point', [1, 0], {\n        withLabel: false,\n        strokeColor: 'red',\n        fillColor: 'red',\n        size: 3,\n        face: '<>',\n        fixed: true\n    });\n \n    moon = board.create('point', [1-mu, 0], {\n        withLabel: false,\n        strokeColor: 'gray',\n        fillColor: 'gray',\n        size: 3,\n        fixed: true\n    });\n \n    moon.setProperty({\n        gradient: 'linear',\n        gradientSecondColor: '#ddd'\n    });\n \n    // a text in upper right corner to stop the animation\n    board.create('text', [0.8, 1.3, '<a href=\"javascript:void();\" id=\"stopanimation\">Stop Animation</a>'], {\n        fontSize: 8\n    });\n    $('#stopanimation').click(function () {\n        board.stopAllAnimation();\n    });\n \n    apollo.moveAlong(function (i) {\n        return [apolloPath.dataX[i%apolloPath.dataX.length], apolloPath.dataY[i%apolloPath.dataY.length]];\n    }, 2000);";function makeJsToHtml(t){return'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <script\n      type="text/javascript"\n      charset="UTF-8"\n      src="https://cdn.jsdelivr.net/npm/jsxgraph@1.1.0/distrib/jsxgraphcore.js"\n    ><\/script>\n    <link\n      rel="stylesheet"\n      type="text/css"\n      href="https://cdn.jsdelivr.net/npm/jsxgraph@1.1.0/distrib/jsxgraph.css"\n    />\n    <title>jsxgraph file</title>\n  </head>\n  <body>\n    <div id="jxgbox" class="jxgbox" style="width: 500px; height: 500px"></div>\n  </body>\n  <script type="text/javascript">'+t+"<\/script>\n</html>"}let _itemList=[{cmd:"let segment = board.create('segment', [p1, p2]);"},{cmd:"let circle = board.create('circle', [p1, p2]);"},{cmd:"let conic = board.create('conic',[A,B,C,D,E]);"},{cmd:"let point = board.create('point', [1.0, 1.0]);"}],templates=[{itemName:"circle",cmd:"let circle = board.create('circle', [p1, p2]);"},{itemName:"conic",cmd:"let conic = board.create('conic', [A,B,C,D,E])"}],textareaContent="let board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-20, 10, 20, -10], axis:true});\n";function get_each_context$1(t,e,n){const a=t.slice();return a[4]=e[n],a[5]=e,a[6]=n,a}function create_each_block$1(t){let e,n,a,r,o,i,c,l,s;function d(){t[1].call(n,t[5],t[6])}function u(){return t[2](t[4])}function p(){return t[3](t[4])}return{c(){e=element("label"),n=element("input"),a=element("button"),a.textContent="insert command",r=space(),o=element("button"),o.textContent="delete",i=space(),c=element("br"),attr(n,"type","text"),attr(n,"size","120")},m(h,m){insert(h,e,m),append(e,n),set_input_value(n,t[4].cmd),append(e,a),append(e,r),append(e,o),append(e,i),insert(h,c,m),l||(s=[listen(n,"input",d),listen(a,"click",u),listen(o,"click",p)],l=!0)},p(e,a){t=e,1&a&&n.value!==t[4].cmd&&set_input_value(n,t[4].cmd)},d(t){t&&detach(e),t&&detach(c),l=!1,run_all(s)}}}function create_fragment$1(t){let e,n=t[0],a=[];for(let e=0;e<n.length;e+=1)a[e]=create_each_block$1(get_each_context$1(t,n,e));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();e=empty()},m(t,n){for(let e=0;e<a.length;e+=1)a[e].m(t,n);insert(t,e,n)},p(t,[r]){if(1&r){let o;for(n=t[0],o=0;o<n.length;o+=1){const i=get_each_context$1(t,n,o);a[o]?a[o].p(i,r):(a[o]=create_each_block$1(i),a[o].c(),a[o].m(e.parentNode,e))}for(;o<a.length;o+=1)a[o].d(1);a.length=n.length}},i:noop,o:noop,d(t){destroy_each(a,t),t&&detach(e)}}}function instance$1(t,e,n){let{itemList:a}=e;return t.$$set=t=>{"itemList"in t&&n(0,a=t.itemList)},[a,function(t,e){t[e].cmd=this.value,n(0,a)},t=>index(document.getElementById("jscode"),t.cmd+"\n"),t=>{n(0,a=a.filter((e=>e.cmd!==t.cmd)))}]}class CurrentCommand extends SvelteComponent{constructor(t){super(),init(this,t,instance$1,create_fragment$1,safe_not_equal,{itemList:0})}}function get_each_context(t,e,n){const a=t.slice();return a[12]=e[n],a}function create_each_block(t){let e,n,a,r=t[12].itemName+"";return{c(){e=element("option"),n=text(r),a=space(),e.__value=t[12].cmd,e.value=e.__value},m(t,r){insert(t,e,r),append(e,n),append(e,a)},p:noop,d(t){t&&detach(e)}}}function create_fragment(t){let e,n,a,r,o,i,c,l,s,d,u,p,h,m,f,_,g,x,b,v,y,k,$,C,w,j,T,E,S,L,N="<script type='text/javascript' id='injected'>"+t[2]+"<\/script>";p=new CurrentCommand({props:{itemList:t[0]}});let M=templates,A=[];for(let e=0;e<M.length;e+=1)A[e]=create_each_block(get_each_context(t,M,e));return{c(){e=element("a"),e.textContent="click to return github repository",n=space(),a=element("h3"),a.textContent="choose command",r=space(),o=element("button"),o.textContent="InfinitySquare",i=space(),c=element("button"),c.textContent="Moonwalk",l=space(),s=element("button"),s.textContent="init",d=element("br"),u=space(),create_component(p.$$.fragment),h=space(),m=element("input"),f=space(),_=element("select");for(let t=0;t<A.length;t+=1)A[t].c();g=element("button"),g.textContent="click to add",x=space(),b=element("textarea"),v=space(),y=element("button"),y.textContent="click to render",k=space(),$=element("div"),C=space(),j=space(),T=element("button"),T.textContent="download as file",set_style(e,"text-decoration","none"),attr(e,"href","https://github.com/wuyudi/svelte-jsxgraph"),attr(m,"type","text"),attr(m,"size","120"),attr(m,"placeholder","type command or choose from right"),void 0===t[1]&&add_render_callback((()=>t[7].call(_))),attr(b,"id","jscode"),attr(b,"name","jscode"),attr(b,"rows","8"),attr(b,"cols","140"),attr($,"id","jxgbox"),attr($,"class","jxgbox"),set_style($,"width","600px"),set_style($,"height","600px"),w=new HtmlTag(j)},m(M,X){insert(M,e,X),insert(M,n,X),insert(M,a,X),insert(M,r,X),insert(M,o,X),insert(M,i,X),insert(M,c,X),insert(M,l,X),insert(M,s,X),insert(M,d,X),insert(M,u,X),mount_component(p,M,X),insert(M,h,X),insert(M,m,X),set_input_value(m,t[1]),insert(M,f,X),insert(M,_,X);for(let t=0;t<A.length;t+=1)A[t].m(_,null);select_option(_,t[1]),insert(M,g,X),insert(M,x,X),insert(M,b,X),set_input_value(b,t[2]),insert(M,v,X),insert(M,y,X),insert(M,k,X),insert(M,$,X),insert(M,C,X),w.m(N,M,X),insert(M,j,X),insert(M,T,X),E=!0,S||(L=[listen(o,"click",t[3]),listen(c,"click",t[4]),listen(s,"click",t[5]),listen(m,"input",t[6]),listen(_,"change",t[7]),listen(g,"click",t[8]),listen(b,"input",t[9]),listen(y,"click",t[10]),listen(T,"click",t[11])],S=!0)},p(t,[e]){const n={};if(1&e&&(n.itemList=t[0]),p.$set(n),2&e&&m.value!==t[1]&&set_input_value(m,t[1]),0&e){let n;for(M=templates,n=0;n<M.length;n+=1){const a=get_each_context(t,M,n);A[n]?A[n].p(a,e):(A[n]=create_each_block(a),A[n].c(),A[n].m(_,null))}for(;n<A.length;n+=1)A[n].d(1);A.length=M.length}2&e&&select_option(_,t[1]),4&e&&set_input_value(b,t[2]),(!E||4&e)&&N!==(N="<script type='text/javascript' id='injected'>"+t[2]+"<\/script>")&&w.p(N)},i(t){E||(transition_in(p.$$.fragment,t),E=!0)},o(t){transition_out(p.$$.fragment,t),E=!1},d(t){t&&detach(e),t&&detach(n),t&&detach(a),t&&detach(r),t&&detach(o),t&&detach(i),t&&detach(c),t&&detach(l),t&&detach(s),t&&detach(d),t&&detach(u),destroy_component(p,t),t&&detach(h),t&&detach(m),t&&detach(f),t&&detach(_),destroy_each(A,t),t&&detach(g),t&&detach(x),t&&detach(b),t&&detach(v),t&&detach(y),t&&detach(k),t&&detach($),t&&detach(C),t&&w.d(),t&&detach(j),t&&detach(T),S=!1,run_all(L)}}}function instance($$self,$$props,$$invalidate){let itemList=_itemList,addCommand="",currentContent=textareaContent;const click_handler=()=>{$$invalidate(2,currentContent=InfinitySquare),eval(InfinitySquare)},click_handler_1=()=>{$$invalidate(2,currentContent=Moonwalk),eval(Moonwalk)},click_handler_2=()=>{$$invalidate(2,currentContent=textareaContent),eval(currentContent)};function input_input_handler(){addCommand=this.value,$$invalidate(1,addCommand)}function select_change_handler(){addCommand=select_value(this),$$invalidate(1,addCommand)}const click_handler_3=()=>{$$invalidate(0,itemList=[...itemList,{cmd:addCommand}]),$$invalidate(1,addCommand="")};function textarea_input_handler(){currentContent=this.value,$$invalidate(2,currentContent)}const click_handler_4=()=>{eval(document.getElementById("injected").innerHTML)},click_handler_5=()=>saveTextAsFile(makeJsToHtml(currentContent),"file.html");return[itemList,addCommand,currentContent,click_handler,click_handler_1,click_handler_2,input_input_handler,select_change_handler,click_handler_3,textarea_input_handler,click_handler_4,click_handler_5]}class App extends SvelteComponent{constructor(t){super(),init(this,t,instance,create_fragment,safe_not_equal,{})}}const app=new App({target:document.body});return app}();
//# sourceMappingURL=bundle.js.map
