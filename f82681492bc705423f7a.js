(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{522:e=>{e.exports=function(e,t){for(var n=0;n<e.length;n++)if(e[n].id===t)return e[n];return null}},963:e=>{e.exports=function(e){return e<2048?e+" bytes":(e/=1024)<2048?Math.round(e)+" KiB":(e/=1024,Math.round(e)+" MiB")}},272:(e,t,n)=>{var s=n(855),l=n(522);e.exports=function(){document.title="hints";var e=[];s.stats.modules.forEach((function(t){var n={};t.dependencies.forEach((function(e){n[e.moduleId]?n[e.moduleId].count++:n[e.moduleId]={module:t,count:1,otherModule:l(s.stats.modules,e.moduleId)}})),Object.keys(n).forEach((function(t){var s=n[t];s.count>=2&&e.push(s)}))})),e.forEach((function(e){var t=(e.otherModule.id+"").length;e.saving=e.count*(2+t)-6-t})),(e=e.filter((function(e){return e.saving>10}))).sort((function(e,t){return t.saving-e.saving}));var t=[];s.stats.modules.forEach((function(e){e.chunks.length>=2&&t.push({module:e,count:e.chunks.length,saving:(e.chunks.length-1)*e.size})})),(t=t.filter((function(e){return e.saving>100}))).sort((function(e,t){return t.saving-e.saving}));var a=s.stats.modules.filter((function(e){return"number"==typeof e.timestamp})).sort((function(e,t){return t.timestamp-e.timestamp})).slice(0,10).map((function(e){for(var t=[e];"number"==typeof e.issuerUid&&(e=s.mapModulesUid[e.issuerUid]);)t.unshift(e);return t}));$(".page").html(n(128)({stats:s.stats,multiRefs:e,multiChunks:t,longChains:a}))}},128:(e,t,n)=>{var s=n(55);e.exports=function(e){var t,l="",a=e||{};return function(e,a,d,u){l+='<div class="container-fluid"><div class="row"><div class="col-md-12">',0===a.length&&0===d.length&&0===e.length&&(l+="<h2>Everything seem to be fine.</h2>"),a.length>0&&(l+='<h2>Module in multiple chunks</h2><p>Check if it is a good idea to move modules into a common parent. You may want to use <code>require.include</code> or insert them into the parents <code>require.ensure</code> array.</p><table class="table table-bordered"><thead><tr><th>module</th><th>name</th><th>count</th><th>chunks</th><th>saving</th></tr></thead><tbody>',function(){var e=a;if("number"==typeof e.length)for(var d=0,o=e.length;d<o;d++){var r=e[d];l+="<tr><td>",l=(l="number"==typeof r.module.uid?l+'<a class="btn btn-success"'+s.attr("href",`#module/${r.module.uid}`,!0,!0)+">"+s.escape(null==(t=r.module.id)?"":t)+"</a>":l+'<span class="btn btn-success">'+s.escape(null==(t=r.module.id)?"":t)+"</span>")+'</td><splittedModule>= item.module.name.split("!")</splittedModule><td><pre><code>'+s.escape(null==(t=u.join("\n"))?"":t)+"</code></pre></td><td>"+s.escape(null==(t=r.count)?"":t)+"</td><td>",function(){var e=r.module.chunks;if("number"==typeof e.length)for(var n=0,a=e.length;n<a;n++){var d=e[n];n>0&&(l+=s.escape(null==(t=" ")?"":t)),l=l+'<a class="btn btn-info"'+s.attr("href",`#chunk/${d}`,!0,!0)+">"+s.escape(null==(t=d)?"":t)+"</a>"}else{a=0;for(var n in e){a++;d=e[n];n>0&&(l+=s.escape(null==(t=" ")?"":t)),l=l+'<a class="btn btn-info"'+s.attr("href",`#chunk/${d}`,!0,!0)+">"+s.escape(null==(t=d)?"":t)+"</a>"}}}.call(this),l=l+"</td><td>"+s.escape(null==(t=n(963)(r.saving))?"":t)+"</td></tr>"}else{o=0;for(var d in e){o++;r=e[d];l+="<tr><td>",l=(l="number"==typeof r.module.uid?l+'<a class="btn btn-success"'+s.attr("href",`#module/${r.module.uid}`,!0,!0)+">"+s.escape(null==(t=r.module.id)?"":t)+"</a>":l+'<span class="btn btn-success">'+s.escape(null==(t=r.module.id)?"":t)+"</span>")+'</td><splittedModule>= item.module.name.split("!")</splittedModule><td><pre><code>'+s.escape(null==(t=u.join("\n"))?"":t)+"</code></pre></td><td>"+s.escape(null==(t=r.count)?"":t)+"</td><td>",function(){var e=r.module.chunks;if("number"==typeof e.length)for(var n=0,a=e.length;n<a;n++){var d=e[n];n>0&&(l+=s.escape(null==(t=" ")?"":t)),l=l+'<a class="btn btn-info"'+s.attr("href",`#chunk/${d}`,!0,!0)+">"+s.escape(null==(t=d)?"":t)+"</a>"}else{a=0;for(var n in e){a++;d=e[n];n>0&&(l+=s.escape(null==(t=" ")?"":t)),l=l+'<a class="btn btn-info"'+s.attr("href",`#chunk/${d}`,!0,!0)+">"+s.escape(null==(t=d)?"":t)+"</a>"}}}.call(this),l=l+"</td><td>"+s.escape(null==(t=n(963)(r.saving))?"":t)+"</td></tr>"}}}.call(this),l+="</tbody></table>"),d.length>0&&(l+='<h2>Multiple references to the same module</h2><p>Refactor this:</p><pre><code>var a = require("xyz").a;\nvar b = require("xyz").b;\nvar c = require("xyz").c;</code></pre><p>To this:</p><pre><code>var xyz = require("xyz");\nvar a = xyz.a;\nvar a = xyz.b;\nvar c = xyz.c;</code></pre><table class="table table-bordered"><thead><tr><th>module</th><th>name</th><th>count</th><th>referenced module</th><th>referenced name</th><th>saving</th></tr></thead><tbody>',function(){var e=d;if("number"==typeof e.length)for(var a=0,u=e.length;a<u;a++){var o=e[a];l+="<tr><td>",l=(l="number"==typeof o.module.uid?l+'<a class="btn btn-success"'+s.attr("href",`#module/${o.module.uid}`,!0,!0)+">"+s.escape(null==(t=o.module.id)?"":t)+"</a>":l+'<span class="btn btn-success">'+s.escape(null==(t=o.module.id)?"":t)+"</span>")+"</td><td><pre><code>"+s.escape(null==(t=o.module.name.split("!").join("\n"))?"":t)+"</code></pre></td><td>"+s.escape(null==(t=o.count)?"":t)+"</td><td>",l=(l="number"==typeof o.otherModule.uid?l+'<a class="btn btn-success"'+s.attr("href",`#module/${o.otherModule.uid}`,!0,!0)+">"+s.escape(null==(t=o.otherModule.id)?"":t)+"</a>":l+'<span class="btn btn-success">'+s.escape(null==(t=o.otherModule.id)?"":t)+"</span>")+"</td><td><pre><code>"+s.escape(null==(t=o.otherModule.name.split("!").join("\n"))?"":t)+"</code></pre></td><td>"+s.escape(null==(t=n(963)(o.saving)+"+")?"":t)+"</td></tr>"}else{u=0;for(var a in e){u++;o=e[a];l+="<tr><td>",l=(l="number"==typeof o.module.uid?l+'<a class="btn btn-success"'+s.attr("href",`#module/${o.module.uid}`,!0,!0)+">"+s.escape(null==(t=o.module.id)?"":t)+"</a>":l+'<span class="btn btn-success">'+s.escape(null==(t=o.module.id)?"":t)+"</span>")+"</td><td><pre><code>"+s.escape(null==(t=o.module.name.split("!").join("\n"))?"":t)+"</code></pre></td><td>"+s.escape(null==(t=o.count)?"":t)+"</td><td>",l=(l="number"==typeof o.otherModule.uid?l+'<a class="btn btn-success"'+s.attr("href",`#module/${o.otherModule.uid}`,!0,!0)+">"+s.escape(null==(t=o.otherModule.id)?"":t)+"</a>":l+'<span class="btn btn-success">'+s.escape(null==(t=o.otherModule.id)?"":t)+"</span>")+"</td><td><pre><code>"+s.escape(null==(t=o.otherModule.name.split("!").join("\n"))?"":t)+"</code></pre></td><td>"+s.escape(null==(t=n(963)(o.saving)+"+")?"":t)+"</td></tr>"}}}.call(this),l+="</tbody></table>"),e.length>0&&(l+="<h2>Long module build chains</h2><p>Use prefetching to increase build performance. Prefetch a module from the middle of the chain.</p>",function(){var n=e;if("number"==typeof n.length)for(var a=0,d=n.length;a<d;a++){var u=n[a];l+='<table class="table table-bordered"><thead><tr><th>module</th><th>name</th><th>time</th><th>finished @</th></tr></thead><tbody>',function(){var e=u;if("number"==typeof e.length)for(var n=0,a=e.length;n<a;n++){var d=e[n];l+="<tr><td>",l=(l="number"==typeof d.uid?l+'<a class="btn btn-success"'+s.attr("href",`#module/${d.uid}`,!0,!0)+">"+s.escape(null==(t=d.id)?"":t)+"</a>":l+'<span class="btn btn-success">'+s.escape(null==(t=d.id)?"":t)+"</span>")+"</td><td><pre><code>"+s.escape(null==(t=d.name.split("!").join("\n"))?"":t)+"</code></pre></td><td>"+s.escape(null==(t=d.time+" ms")?"":t)+"</td><td>"+s.escape(null==(t=d.timestamp+" ms")?"":t)+"</td></tr>"}else{a=0;for(var n in e){a++;d=e[n];l+="<tr><td>",l=(l="number"==typeof d.uid?l+'<a class="btn btn-success"'+s.attr("href",`#module/${d.uid}`,!0,!0)+">"+s.escape(null==(t=d.id)?"":t)+"</a>":l+'<span class="btn btn-success">'+s.escape(null==(t=d.id)?"":t)+"</span>")+"</td><td><pre><code>"+s.escape(null==(t=d.name.split("!").join("\n"))?"":t)+"</code></pre></td><td>"+s.escape(null==(t=d.time+" ms")?"":t)+"</td><td>"+s.escape(null==(t=d.timestamp+" ms")?"":t)+"</td></tr>"}}}.call(this),l+="</tbody></table>"}else{d=0;for(var a in n){d++;u=n[a];l+='<table class="table table-bordered"><thead><tr><th>module</th><th>name</th><th>time</th><th>finished @</th></tr></thead><tbody>',function(){var e=u;if("number"==typeof e.length)for(var n=0,a=e.length;n<a;n++){var d=e[n];l+="<tr><td>",l=(l="number"==typeof d.uid?l+'<a class="btn btn-success"'+s.attr("href",`#module/${d.uid}`,!0,!0)+">"+s.escape(null==(t=d.id)?"":t)+"</a>":l+'<span class="btn btn-success">'+s.escape(null==(t=d.id)?"":t)+"</span>")+"</td><td><pre><code>"+s.escape(null==(t=d.name.split("!").join("\n"))?"":t)+"</code></pre></td><td>"+s.escape(null==(t=d.time+" ms")?"":t)+"</td><td>"+s.escape(null==(t=d.timestamp+" ms")?"":t)+"</td></tr>"}else{a=0;for(var n in e){a++;d=e[n];l+="<tr><td>",l=(l="number"==typeof d.uid?l+'<a class="btn btn-success"'+s.attr("href",`#module/${d.uid}`,!0,!0)+">"+s.escape(null==(t=d.id)?"":t)+"</a>":l+'<span class="btn btn-success">'+s.escape(null==(t=d.id)?"":t)+"</span>")+"</td><td><pre><code>"+s.escape(null==(t=d.name.split("!").join("\n"))?"":t)+"</code></pre></td><td>"+s.escape(null==(t=d.time+" ms")?"":t)+"</td><td>"+s.escape(null==(t=d.timestamp+" ms")?"":t)+"</td></tr>"}}}.call(this),l+="</tbody></table>"}}}.call(this)),l+="</div></div></div>"}.call(this,"longChains"in a?a.longChains:"undefined"!=typeof longChains?longChains:void 0,"multiChunks"in a?a.multiChunks:"undefined"!=typeof multiChunks?multiChunks:void 0,"multiRefs"in a?a.multiRefs:"undefined"!=typeof multiRefs?multiRefs:void 0,"splittedModule"in a?a.splittedModule:"undefined"!=typeof splittedModule?splittedModule:void 0),l}}}]);