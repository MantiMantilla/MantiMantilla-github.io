(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{UTyF:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),i=n("Zttt"),r=n("wtQ5"),o=n("Wbzz"),d=n("vOnD");const s=d.b.div.withConfig({displayName:"styles__Timeline",componentId:"sc-5osnx9-0"})(["",";&:last-child{",";}"],{display:"flex",flexDirection:"column","@media (min-width: 640px)":{flexDirection:"row"},width:"100%",padding:"1rem",position:"relative",borderLeftWidth:"1px",borderColor:"#c3dafe"},{paddingBottom:"0"}),m=d.b.div.withConfig({displayName:"styles__Details",componentId:"sc-5osnx9-1"})(["",";"],{width:"100%","@media (min-width: 640px)":{width:"33.333333%"}}),c=d.b.div.withConfig({displayName:"styles__Content",componentId:"sc-5osnx9-2"})(["",";"],{width:"100%","@media (min-width: 640px)":{width:"66.666667%",marginTop:"0"},marginTop:"1rem"}),p=d.b.div.withConfig({displayName:"styles__Title",componentId:"sc-5osnx9-3"})(["",";"],{fontWeight:"600",marginTop:"0.75rem"}),u=d.b.div.withConfig({displayName:"styles__Subtitle",componentId:"sc-5osnx9-4"})(["",";"],{fontSize:"0.75rem"}),h=d.b.div.withConfig({displayName:"styles__Date",componentId:"sc-5osnx9-5"})(["",";width:fit-content;"],{fontSize:"0.75rem",borderWidth:"1px",borderColor:"#ed64a6",borderRadius:"9999px",paddingLeft:"0.5rem",paddingRight:"0.5rem"}),f=d.b.span.withConfig({displayName:"styles__Point",componentId:"sc-5osnx9-6"})(["",";left:-6px;top:20px;"],{width:"0.75rem",height:"0.75rem",borderWidth:"1px",borderColor:"#c3dafe",backgroundColor:"#ebf4ff",borderRadius:"9999px",position:"absolute"});var w=e=>{let{title:t,subtitle:n,content:a,startDate:i,endDate:r}=e;return l.a.createElement(s,null,l.a.createElement(f,null),l.a.createElement(m,null,l.a.createElement(h,null,i," - ",r),l.a.createElement(p,null,t),l.a.createElement(u,null,n)),l.a.createElement(c,null,a))},b=n("OKcn"),g=n("q5BQ"),y=n("eFje");var E=()=>{const{markdownRemark:e,allMarkdownRemark:t}=Object(o.useStaticQuery)("4033427577"),n=e.frontmatter,a=t.edges;return l.a.createElement(b.a,{section:!0},l.a.createElement(g.a,{title:n.title,subtitle:n.subtitle}),a.map(e=>{const{id:t,html:n,frontmatter:{company:a,position:i,startDate:r,endDate:o}}=e.node;return l.a.createElement(w,{key:t,title:a,subtitle:i,content:l.a.createElement(y.a,{content:n}),startDate:r,endDate:o})}))};var _=()=>{const{markdownRemark:e,allMarkdownRemark:t}=Object(o.useStaticQuery)("2252611511"),n=e.frontmatter,a=t.edges;return l.a.createElement(b.a,{section:!0},l.a.createElement(g.a,{title:n.title,subtitle:n.subtitle}),a.map(e=>{const{id:t,html:n,frontmatter:{university:a,degree:i,startDate:r,endDate:o}}=e.node;return l.a.createElement(w,{key:t,title:a,subtitle:i,content:l.a.createElement(y.a,{content:n}),startDate:r,endDate:o})}))};const k=d.b.div.withConfig({displayName:"styles__ProgressBar",componentId:"sc-lkj12d-0"})(["",";"],{padding:"0.75rem"}),x=d.b.div.withConfig({displayName:"styles__BarWrapper",componentId:"sc-lkj12d-1"})(["",";"],{width:"100%",height:"0.5rem",backgroundColor:"#e2e8f0",borderRadius:"0.25rem",overflow:"hidden",marginTop:"0.25rem"}),C=d.b.div.withConfig({displayName:"styles__Bar",componentId:"sc-lkj12d-2"})(["",";width:",";"],{height:"0.5rem",backgroundColor:"#f687b3"},e=>{let{percentage:t}=e;return t+"%"}),v=d.b.div.withConfig({displayName:"styles__Content",componentId:"sc-lkj12d-3"})(["",";"],{width:"100%",display:"flex",justifyContent:"space-between"}),I=d.b.h3.withConfig({displayName:"styles__Title",componentId:"sc-lkj12d-4"})(["",";"],{fontWeight:"600"}),N=d.b.h3.withConfig({displayName:"styles__Percentage",componentId:"sc-lkj12d-5"})(["",";"],{fontWeight:"600"});var D=e=>{let{title:t,percentage:n}=e;return l.a.createElement(k,null,l.a.createElement(v,null,l.a.createElement(I,null,t),l.a.createElement(N,null,n,"%")),l.a.createElement(x,null,l.a.createElement(C,{percentage:n})))};const j=d.b.div.withConfig({displayName:"styles__Skills",componentId:"sc-4xum2u-0"})(["",";"],{display:"flex",flexWrap:"wrap",width:"100%"}),R=d.b.div.withConfig({displayName:"styles__Skill",componentId:"sc-4xum2u-1"})(["",";"],{width:"100%","@media (min-width: 640px)":{width:"50%"}});var S=()=>{const{markdownRemark:e,allMarkdownRemark:t}=Object(o.useStaticQuery)("1174766746"),n=e.frontmatter,a=t.edges;return l.a.createElement(b.a,{section:!0},l.a.createElement(g.a,{title:n.title,subtitle:n.subtitle,center:!0}),l.a.createElement(j,null,a.map(e=>{const{id:t,frontmatter:{title:n,percentage:a}}=e.node;return l.a.createElement(R,{key:t},l.a.createElement(D,{title:n,percentage:a}))})))};t.default=()=>l.a.createElement(i.a,null,l.a.createElement(r.a,{title:"Resume"}),l.a.createElement(E,null),l.a.createElement("hr",null),l.a.createElement(_,null),l.a.createElement("hr",null),l.a.createElement(S,null))},eFje:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a);t.a=e=>{let{content:t}=e;return l.a.createElement("span",{className:"format-html",dangerouslySetInnerHTML:{__html:t}})}}}]);
//# sourceMappingURL=component---src-pages-resume-tsx-f1892e698f7c2cbf63b6.js.map