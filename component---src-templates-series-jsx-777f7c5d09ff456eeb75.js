(self.webpackChunkgatsby_starter_hoodie=self.webpackChunkgatsby_starter_hoodie||[]).push([[249],{124:function(e,t,n){var o=n(9325);e.exports=function(){return o.Date.now()}},346:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},659:function(e,t,n){var o=n(1873),r=Object.prototype,i=r.hasOwnProperty,a=r.toString,l=o?o.toStringTag:void 0;e.exports=function(e){var t=i.call(e,l),n=e[l];try{e[l]=void 0;var o=!0}catch(c){}var r=a.call(e);return o&&(t?e[l]=n:delete e[l]),r}},786:function(e,t,n){"use strict";var o=n(6540),r=n(2568),i=n(4194);const a=r.default.div.withConfig({displayName:"TagList__TagListWrapper",componentId:"sc-s1uz5f-0"})(["margin-bottom:16px;word-break:break-all;"]),l=r.default.div.withConfig({displayName:"TagList__TagLink",componentId:"sc-s1uz5f-1"})(["display:inline-block;padding:9.6px 11.2px;margin-right:8px;margin-bottom:8px;border-radius:50px;background-color:",";color:",";text-decoration:none;font-size:14.4px;transition:all 0.2s;&:hover{background-color:",";}"],(e=>e.selected?e.theme.colors.selectedTagBackground:e.theme.colors.tagBackground),(e=>e.selected?e.theme.colors.selectedTagText:e.theme.colors.tagText),(e=>e.selected?e.theme.colors.hoveredSelectedTagBackground:e.theme.colors.hoveredTagBackground)),c=e=>e.replace(/\s+/g,"-");t.A=e=>{let{tagList:t,count:n,selected:r}=e;return t?n?o.createElement(a,null,t.map(((e,t)=>o.createElement(i.Link,{key:JSON.stringify({tag:e,i:t}),to:r===e.fieldValue?"/tags":`/tags?q=${e.fieldValue}`},o.createElement(l,{selected:e.fieldValue===r},c(e.fieldValue)," (",e.totalCount,")"))))):o.createElement(a,null,t.map(((e,t)=>o.createElement(i.Link,{key:JSON.stringify({tag:e,i:t}),to:`/tags?q=${e}`},o.createElement(l,null,c(e)))))):null}},1800:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},1873:function(e,t,n){var o=n(9325).Symbol;e.exports=o},2552:function(e,t,n){var o=n(1873),r=n(659),i=n(9350),a=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?r(e):i(e)}},2912:function(e,t,n){"use strict";var o=n(6540);const r=n(2568).default.h1.withConfig({displayName:"Title__Wrapper",componentId:"sc-1ttlsnf-0"})(["margin-bottom:24px;font-size:",";font-weight:700;line-height:1.3;color:",";word-break:break-all;& > a{text-decoration:none;color:inherit;transition:all 0.2s;}& > a:hover{color:",";}"],(e=>e.size),(e=>e.theme.colors.text),(e=>e.theme.colors.secondaryText));t.A=e=>{let{size:t,children:n}=e;return o.createElement(r,{size:{sm:"19.2px",md:"25.6px",bg:"32px"}[t]}," ",n," ")}},3173:function(e,t,n){"use strict";var o=n(5556),r=n.n(o);const i=n(2568).default.hr.withConfig({displayName:"Divider",componentId:"sc-1jz0jl-0"})(["margin-top:",";margin-bottom:",";border:none;border-bottom:1px solid ",";"],(e=>e.mt),(e=>e.mb),(e=>e.theme.colors.divider));i.propTypes={mt:r().string,mb:r().string},i.defaultProps={mt:"48px",mb:"48px"},t.A=i},3805:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},4128:function(e,t,n){var o=n(1800),r=/^\s+/;e.exports=function(e){return e?e.slice(0,o(e)+1).replace(r,""):e}},4394:function(e,t,n){var o=n(2552),r=n(346);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==o(e)}},4689:function(e,t,n){"use strict";n.r(t);var o=n(6540),r=n(2568),i=n(6288),a=n(5482),l=n(5608),c=n(3173),s=n(1960);const u=r.default.div.withConfig({displayName:"Series__Header",componentId:"sc-35e3s6-0"})(["@media (max-width:768px){padding:0px 15px;}"]),d=r.default.h1.withConfig({displayName:"Series__Title",componentId:"sc-35e3s6-1"})(["margin-bottom:15px;line-height:1.2;font-size:44.8px;font-weight:bold;color:",";word-break:break-all;"],(e=>e.theme.colors.text)),p=r.default.h3.withConfig({displayName:"Series__Subtitle",componentId:"sc-35e3s6-2"})(["display:inline-block;padding:2px 3px;margin-top:32px;margin-bottom:8px;font-size:20px;font-weight:bold;background-color:",";color:",";letter-spacing:-1px;"],(e=>e.theme.colors.text),(e=>e.theme.colors.bodyBackground)),m=r.default.div.withConfig({displayName:"Series__SeriesInform",componentId:"sc-35e3s6-3"})(["display:flex;align-items:center;font-size:16px;color:",";& > span{margin:0 3px;}"],(e=>e.theme.colors.text)),f=r.default.span.withConfig({displayName:"Series__Date",componentId:"sc-35e3s6-4"})(["color:",";font-weight:lighter;"],(e=>e.theme.colors.tertiaryText));t.default=e=>{let{pageContext:t,data:n}=e;const r=t.series,g=n.posts.nodes;return o.createElement(i.A,null,o.createElement(a.A,{title:`SERIES: ${r}`,description:s.description,url:s.siteUrl}),o.createElement(u,null,o.createElement(p,null," SERIES "),o.createElement(d,null," ",r," "),o.createElement(m,null,o.createElement("span",null,g.length," Posts"),o.createElement("span",null,"·"),o.createElement(f,null,"Last updated on ",g[g.length-1].frontmatter.date)),o.createElement(c.A,null)),o.createElement(l.A,{postList:g}))}},4840:function(e,t,n){var o="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=o},5608:function(e,t,n){"use strict";var o=n(7350),r=n.n(o),i=n(6540),a=n(2568),l=n(4194),c=n(2912),s=n(3173),u=n(786);const d=a.default.div.withConfig({displayName:"PostList__PostListWrapper",componentId:"sc-1oqnm6-0"})(["@media (max-width:768px){padding:0 10px;}"]),p=a.default.div.withConfig({displayName:"PostList__PostWrapper",componentId:"sc-1oqnm6-1"})(["position:relative;top:0;transition:all 0.5s;@media (max-width:768px){padding:0 5px;}"]),m=a.default.p.withConfig({displayName:"PostList__Date",componentId:"sc-1oqnm6-2"})(["margin-bottom:16px;font-size:14.4px;color:",";"],(e=>e.theme.colors.tertiaryText)),f=a.default.p.withConfig({displayName:"PostList__Excerpt",componentId:"sc-1oqnm6-3"})(["margin-bottom:32px;line-height:1.7;font-size:15px;color:",";word-break:break-all;"],(e=>e.theme.colors.secondaryText));t.A=e=>{let{postList:t}=e;const{0:n,1:o}=(0,i.useState)(10),a=r()((()=>{document.documentElement.scrollHeight-document.documentElement.scrollTop<=document.documentElement.clientHeight+100&&n<t.length&&setTimeout((()=>o(n+10)),300)}),250);return(0,i.useEffect)((()=>(window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)})),[n,t]),(0,i.useEffect)((()=>{o(10)}),[t]),i.createElement(d,null,t.slice(0,n).map(((e,o)=>{const{title:r,date:a,tags:d}=e.frontmatter,{excerpt:g}=e,{slug:x}=e.fields;return i.createElement(i.Fragment,{key:JSON.stringify({slug:x,date:a})},i.createElement(p,null,i.createElement(c.A,{size:"bg"},i.createElement(l.Link,{to:x},r)),i.createElement(m,null,a),i.createElement(f,null,g),i.createElement(u.A,{tagList:d})),n-1!==o&&t.length-1!==o&&i.createElement(s.A,{mt:"48px",mb:"32px"}))})))}},7350:function(e,t,n){var o=n(8221),r=n(3805);e.exports=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return r(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),o(e,t,{leading:i,maxWait:t,trailing:a})}},8221:function(e,t,n){var o=n(3805),r=n(124),i=n(9374),a=Math.max,l=Math.min;e.exports=function(e,t,n){var c,s,u,d,p,m,f=0,g=!1,x=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=c,o=s;return c=s=void 0,f=t,d=e.apply(o,n)}function b(e){var n=e-m;return void 0===m||n>=t||n<0||x&&e-f>=u}function y(){var e=r();if(b(e))return E(e);p=setTimeout(y,function(e){var n=t-(e-m);return x?l(n,u-(e-f)):n}(e))}function E(e){return p=void 0,h&&c?v(e):(c=s=void 0,d)}function w(){var e=r(),n=b(e);if(c=arguments,s=this,m=e,n){if(void 0===p)return function(e){return f=e,p=setTimeout(y,t),g?v(e):d}(m);if(x)return clearTimeout(p),p=setTimeout(y,t),v(m)}return void 0===p&&(p=setTimeout(y,t)),d}return t=i(t)||0,o(n)&&(g=!!n.leading,u=(x="maxWait"in n)?a(i(n.maxWait)||0,t):u,h="trailing"in n?!!n.trailing:h),w.cancel=function(){void 0!==p&&clearTimeout(p),f=0,c=m=s=p=void 0},w.flush=function(){return void 0===p?d:E(r())},w}},9325:function(e,t,n){var o=n(4840),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();e.exports=i},9350:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},9374:function(e,t,n){var o=n(4128),r=n(3805),i=n(4394),a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=o(e);var n=l.test(e);return n||c.test(e)?s(e.slice(2),n?2:8):a.test(e)?NaN:+e}}}]);
//# sourceMappingURL=component---src-templates-series-jsx-777f7c5d09ff456eeb75.js.map