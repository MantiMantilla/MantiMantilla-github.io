/*! For license information please see component---src-pages-index-tsx-63358316fb944a690ddb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{BvKN:function(e,t,n){"use strict";var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,l=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,m=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,E=r?Symbol.for("react.responder"):60118,k=r?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case d:case i:case c:case l:case p:return e;default:switch(e=e&&e.$$typeof){case u:case m:case b:case y:case s:return e;default:return t}}case a:return t}}}function C(e){return w(e)===d}t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=u,t.ContextProvider=s,t.Element=o,t.ForwardRef=m,t.Fragment=i,t.Lazy=b,t.Memo=y,t.Portal=a,t.Profiler=c,t.StrictMode=l,t.Suspense=p,t.isAsyncMode=function(e){return C(e)||w(e)===f},t.isConcurrentMode=C,t.isContextConsumer=function(e){return w(e)===u},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return w(e)===m},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===b},t.isMemo=function(e){return w(e)===y},t.isPortal=function(e){return w(e)===a},t.isProfiler=function(e){return w(e)===c},t.isStrictMode=function(e){return w(e)===l},t.isSuspense=function(e){return w(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===c||e===l||e===p||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===y||e.$$typeof===s||e.$$typeof===u||e.$$typeof===m||e.$$typeof===v||e.$$typeof===E||e.$$typeof===k||e.$$typeof===g)},t.typeOf=w},QeBL:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("Zttt"),i=n("wtQ5"),l=n("Wbzz"),c=n("OKcn"),s=n("vOnD");const u=n("ATyU").a.custom(s.b.button.withConfig({displayName:"styles__Button",componentId:"sc-1fk4f0g-0"})(["outline:none !important;",";",";",";"],{paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"2rem",paddingRight:"2rem",borderRadius:"9999px",borderWidth:"1px",borderColor:"#ed64a6",color:"#fff"},e=>{let{primary:t}=e;return t?{backgroundColor:"#ed64a6"}:{color:"#ed64a6"}},e=>{let{block:t}=e;return t&&{width:"100%"}}));var f=e=>{let{primary:t,block:n,children:r}=e;return o.a.createElement(u,{primary:t,block:n,whileHover:{scale:1.05},whileTap:{scale:.95}},r)},d=n("q5BQ");const m=s.b.section.withConfig({displayName:"styles__Banner",componentId:"sc-vk37bh-0"})(["",";"],{backgroundColor:"#f7fafc",borderBottomWidth:"1px",borderColor:"#ebf4ff"}),p=s.b.p.withConfig({displayName:"styles__Content",componentId:"sc-vk37bh-1"})(["",";"],{marginBottom:"2rem"});var h=e=>{let{title:t,subtitle:n,content:r,linkTo:a,linkText:i,linkTo2:s,linkText2:u}=e;return o.a.createElement(m,null,o.a.createElement(c.a,{section:!0},o.a.createElement(d.a,{title:t,subtitle:n}),o.a.createElement(p,null,r),o.a.createElement(l.Link,{to:a},o.a.createElement(f,{primary:!0},i)),o.a.createElement("p",null,"  ",o.a.createElement("br",null),"  "),o.a.createElement("a",{href:s},o.a.createElement(f,{primary:!0},u))))};var y=()=>{const{markdownRemark:e}=Object(l.useStaticQuery)("548152229"),t=e.frontmatter;return o.a.createElement(h,{title:t.title,subtitle:t.subtitle,content:t.content,linkTo:t.linkTo,linkText:t.linkText,linkTo2:t.linkTo2,linkText2:t.linkText2})},b=n("9BYq");const g=s.b.div.withConfig({displayName:"styles__Services",componentId:"sc-1u3kv4y-0"})(["",";"],{display:"flex",flexWrap:"wrap",marginLeft:"-0.75rem",marginRight:"-0.75rem"}),v=s.b.div.withConfig({displayName:"styles__ServiceItem",componentId:"sc-1u3kv4y-1"})(["",";"],{width:"100%","@media (min-width: 640px)":{width:"50%"}});var E=()=>{const{markdownRemark:e,allMarkdownRemark:t}=Object(l.useStaticQuery)("1857913437"),n=e.frontmatter,r=t.edges;return o.a.createElement(c.a,{section:!0},o.a.createElement(d.a,{title:n.title,subtitle:n.subtitle,center:!0}),o.a.createElement(g,null,r.map(e=>{const{id:t,frontmatter:{title:n,icon:r,description:a}}=e.node;return o.a.createElement(v,{key:t},o.a.createElement(b.a,{icon:r,title:n,content:a}))})))},k=n("9eSz"),w=n.n(k);function C(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function S(){return(S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var x=n("dI71"),R=n("uTUB"),N=n("2mql"),T=n.n(N);function $(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var I=o.a.createContext();var O={initialChunks:{}};var L=function(e){return e};function j(e){var t=e.defaultResolveComponent,n=void 0===t?L:t,r=e.render,a=e.onLoad;function i(e,t){void 0===t&&(t={});var i=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),l={};function c(e){return t.cacheKey?t.cacheKey(e):i.resolve?i.resolve(e):"static"}function s(e,r,o){var a=t.resolveComponent?t.resolveComponent(e,r):n(e);if(t.resolveComponent&&!Object(R.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return T()(o,a,{preload:!0}),a}var u,f,d=function(e){var t=c(e),n=l[t];return n&&"REJECTED"!==n.status||((n=i.requireAsync(e)).status="PENDING",l[t]=n,n.then((function(){n.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:i.resolve(e),chunkName:i.chunkName(e),error:t?t.message:t}),n.status="REJECTED"}))),n},m=function(e){function n(n){var r;return(r=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:c(n)},$(!n.__chunkExtractor||i.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(i.requireAsync(n).catch((function(){return null})),r.loadSync(),n.__chunkExtractor.addChunk(i.chunkName(n))),_(r)):(!1!==t.ssr&&(i.isReady&&i.isReady(n)||i.chunkName&&O.initialChunks[i.chunkName(n)])&&r.loadSync(),r)}Object(x.a)(n,e),n.getDerivedStateFromProps=function(e,t){var n=c(e);return S({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var o=n.prototype;return o.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&"REJECTED"===e.status&&this.setCache(),this.state.loading&&this.loadAsync()},o.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},o.componentWillUnmount=function(){this.mounted=!1},o.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},o.getCacheKey=function(){return c(this.props)},o.getCache=function(){return l[this.getCacheKey()]},o.setCache=function(e){void 0===e&&(e=void 0),l[this.getCacheKey()]=e},o.triggerOnLoad=function(){var e=this;a&&setTimeout((function(){a(e.state.result,e.props)}))},o.loadSync=function(){if(this.state.loading)try{var e=s(i.requireSync(this.props),this.props,h);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:i.resolve(this.props),chunkName:i.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},o.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=s(t,e.props,h);e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},o.resolveAsync=function(){var e=this.props,t=(e.__chunkExtractor,e.forwardedRef,C(e,["__chunkExtractor","forwardedRef"]));return d(t)},o.render=function(){var e=this.props,n=e.forwardedRef,o=e.fallback,a=(e.__chunkExtractor,C(e,["forwardedRef","fallback","__chunkExtractor"])),i=this.state,l=i.error,c=i.loading,s=i.result;if(t.suspense&&"PENDING"===(this.getCache()||this.loadAsync()).status)throw this.loadAsync();if(l)throw l;var u=o||t.fallback||null;return c?u:r({fallback:u,result:s,options:t,props:S({},a,{ref:n})})},n}(o.a.Component),p=(f=function(e){return o.a.createElement(I.Consumer,null,(function(t){return o.a.createElement(u,Object.assign({__chunkExtractor:t},e))}))},(u=m).displayName&&(f.displayName=u.displayName+"WithChunkExtractor"),f),h=o.a.forwardRef((function(e,t){return o.a.createElement(p,Object.assign({forwardedRef:t},e))}));return h.displayName="Loadable",h.preload=function(e){h.load(e)},h.load=function(e){return d(e)},h}return{loadable:i,lazy:function(e,t){return i(e,S({},t,{suspense:!0}))}}}var A=j({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return o.a.createElement(t,n)}}),B=A.loadable,M=A.lazy,z=j({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),K=z.loadable,P=z.lazy;var q=B;q.lib=K,M.lib=P;var D=q,W=n("eFje");const F=s.b.div.withConfig({displayName:"styles__Testimonials",componentId:"sc-arzeu5-0"})(["",";"],{maxWidth:"640px",marginLeft:"auto",marginRight:"auto",width:"100%",paddingLeft:"0",paddingRight:"0","@media (min-width: 640px)":{paddingLeft:"4rem",paddingRight:"4rem"},marginBottom:"1rem"}),Q=s.b.div.withConfig({displayName:"styles__Testimonial",componentId:"sc-arzeu5-1"})(["",";"],{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",marginTop:"1rem"}),J=s.b.figure.withConfig({displayName:"styles__Image",componentId:"sc-arzeu5-2"})(["",";img{",";}"],{width:"4rem",height:"4rem",marginLeft:"auto",marginRight:"auto",borderWidth:"1px",borderColor:"#ed64a6",borderRadius:"9999px"},{borderWidth:"4px",borderColor:"#fff",borderRadius:"9999px"}),U=s.b.h3.withConfig({displayName:"styles__Title",componentId:"sc-arzeu5-3"})(["",";"],{fontWeight:"600",marginTop:"1rem",marginBottom:"1rem"}),V=D(()=>Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"W39X")));var G=()=>{const{markdownRemark:e,allMarkdownRemark:t}=Object(l.useStaticQuery)("4213775570"),n=e.frontmatter,r=t.edges;return o.a.createElement(c.a,{section:!0},o.a.createElement(d.a,{title:n.title,subtitle:n.subtitle,center:!0}),o.a.createElement(F,null,o.a.createElement(V,null,r.map(e=>{const{id:t,html:n,frontmatter:{cover:r,title:a,profile:i}}=e.node;return o.a.createElement(Q,{key:t},o.a.createElement(J,null,o.a.createElement(w.a,{fluid:r.childImageSharp.fluid,alt:a})),o.a.createElement(U,null,o.a.createElement("a",{href:i},a)),o.a.createElement(W.a,{content:n}))}))))};t.default=()=>o.a.createElement(a.a,null,o.a.createElement(i.a,{title:"About Me"}),o.a.createElement(y,null),o.a.createElement(E,null),o.a.createElement("hr",null),o.a.createElement(G,null))},eFje:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r);t.a=e=>{let{content:t}=e;return o.a.createElement("span",{className:"format-html",dangerouslySetInnerHTML:{__html:t}})}},uTUB:function(e,t,n){"use strict";e.exports=n("BvKN")}}]);
//# sourceMappingURL=component---src-pages-index-tsx-63358316fb944a690ddb.js.map