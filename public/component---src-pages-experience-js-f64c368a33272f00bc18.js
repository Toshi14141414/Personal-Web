(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{166:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(171),o=n(172),l=n(179),c=n(177),s=n(180),m=i.b.div.withConfig({displayName:"experience__Center",componentId:"h5ndy8-0"})(["height:80vh;display:flex;align-items:center;justify-content:center;flex-direction:column;"]);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(c.a,{title:"FOUR OH FOUR!"}),r.a.createElement(m,null,r.a.createElement(s.a,{size:"3em"},"FourOhFour"),r.a.createElement("p",null,"This doesn't seem to be a page."),r.a.createElement(o.a,{to:"/"},"Go Home")))}},172:function(e,t,n){"use strict";n.d(t,"b",function(){return d});var a=n(0),r=n.n(a),i=n(5),o=n.n(i),l=n(41),c=n.n(l);n.d(t,"a",function(){return c.a});n(173);var s=r.a.createContext({});function m(e){var t=e.staticQueryData,n=e.data,a=e.query,i=e.render,o=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,n=e.query,a=e.render,i=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(m,{data:t,query:n,render:a||i,staticQueryData:e})})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},173:function(e,t,n){var a;e.exports=(a=n(175))&&a.default||a},175:function(e,t,n){"use strict";n.r(t);n(42);var a=n(0),r=n.n(a),i=n(5),o=n.n(i),l=n(65),c=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},176:function(e){e.exports={data:{site:{siteMetadata:{instagram:"https://www.instagram.com/alex_xhy/",github:"https://github.com/Toshi14141414",linkedin:"https://www.linkedin.com/in/hanyuxu/",weibo:"https://www.weibo.com/sunmmerbegin",email:"me@xuhanyu.com"}}}}},177:function(e,t,n){"use strict";var a=n(178),r=n(0),i=n.n(r),o=n(190),l=n(5),c=n.n(l),s=n(172),m=function(e){var t=e.title,n=e.description,r=e.pathname,l=e.article;return i.a.createElement(s.b,{query:d,render:function(e){var a=e.site.siteMetadata,c=a.defaultTitle,s=a.titleTemplate,m=a.defaultDescription,d=a.siteUrl,u=a.twitterUsername,p={title:t||c,description:n||m,url:""+d+(r||"/")};return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.Helmet,{title:p.title,titleTemplate:s},i.a.createElement("meta",{name:"description",content:p.description}),i.a.createElement("meta",{propery:"og:locale",content:"en"}),p.url&&i.a.createElement("meta",{property:"og:url",content:p.url}),l&&i.a.createElement("meta",{property:"og:type",content:"article"}),p.title&&i.a.createElement("meta",{property:"og:title",content:p.title}),p.description&&i.a.createElement("meta",{property:"og:description",content:p.description}),u&&i.a.createElement("meta",{name:"twitter:creator",content:u}),p.title&&i.a.createElement("meta",{name:"twitter:title",content:p.title}),p.description&&i.a.createElement("meta",{name:"twitter:description",content:p.description}),i.a.createElement("meta",{name:"keywords",content:"web developer, web developer in boone iowa, front end developer, elixir, react, javascript, matthew secrist, matthewsecrist"})))},data:a})};t.a=m,m.propTypes={title:c.a.string,description:c.a.string,pathname:c.a.string,article:c.a.bool},m.defaultProps={title:null,description:null,pathname:null,article:!1};var d="2790152435"},178:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"Hanyu Xu",defaultDescription:"Hanyu Xu",siteUrl:"https://www.xuhanyu.com",twitterUsername:"@_Alexhy",titleTemplate:"%s"}}}}},179:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(171),o=n(181),l=n.n(o);function c(){var e=l()(["\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n\n  @import url('https://fonts.googleapis.com/css?family=Oxygen&display=swap');\n  \n  body {\n    --bg: ",";\n    --text: ",";   \n    --primary: ",";  \n    --navBg: ",";\n    --navText: ",";\n    --semiDark: ",";\n    --codeBg: transparent;\n    --shadow: ",";\n    --white: ",";\n\n    &.dark {\n      --bg: ",";\n      --text: ",";\n      --primary: ",";\n      --shadow: transparent;\n      --codeBg: ",";\n    }\n\n    background-color: var(--bg);\n\n    color: var(--text);\n\n    font-family: 'Oxygen', sans-serif;\n    font-weight: 400;\n    transition: background-color 0.3s ease-in-out;\n    font-size: 1.2rem;\n\n    text-rendering: optimizeLegibility;\n    font-kerning: normal;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-smooth: always;\n  }\n\n  h1, h2, h3, h4, h5 {\n    font-family: 'Ubuntu', sans-serif;\n  }\n\n  h1 {\n    font-size: 2rem;\n  }\n\n  a {\n    font-weight: bold;\n    text-decoration: none;\n    color: var(--primary);\n  }\n\n  #hello{\n    color : ",";\n    font-size: 5.8rem;\n  }\n\n  #hanyuXu{\n    color : ",";\n  }\n\n  #university{\n    color : ",";\n  }\n\n  #job{\n    color : ",";\n    font-weight : bold;\n  }\n\n  #aboutMe{\n    color : ",";\n  }\n\n  #projects{\n    color : ",";\n  }\n\n  #experience{\n    color : ",";\n  }\n\n  #things{\n    color : ",";\n  }\n  \n  #resume{\n    color : ",";\n  }\n\n  #toolbox{\n    padding: 0rem, 5rem, 0rem, 0rem;\n    color : ",";\n  }\n\n\n"]);return c=function(){return e},e}var s="#eae9e1",m=Object(i.a)(c(),"#1a1d27",s,s,"#2d303d",s,s,"#1a1d27","#FFFFFF","#1a1d27",s,s,"#2d303d","#ffbd50","#f29c9f","#83c192","#51c7da","#f29c9f","#83c192","#fada5d","#51c7da","#af98e6","#ffbd50"),d=n(172),u=n(174),p=n(182),f=Object(i.b)(p.a).withConfig({displayName:"Navigation__MobileNavMenu",componentId:"sc-15o2a8x-0"})(["position:fixed;top:0;right:0;color:",";z-index:100;@media screen and (min-width:","px){visibility:hidden;}"],function(e){return e.toggled?"var(--text)":"var(--primary)"},u.md),h=i.b.div.withConfig({displayName:"Navigation__NavMenu",componentId:"sc-15o2a8x-1"})(["top:0;right:0;justify-content:center;align-items:flex-end;flex-direction:column;display:flex;height:100vh;width:200px;background:var(--navBg);position:fixed;@media screen and (max-width:","px){position:fixed;z-index:90;right:0;width:200px;border-left:1px solid var(--primary);transition:transform 0.3s ease-in-out;transform:translateX(",");}"],u.md,function(e){return e.visible?"0%":"100%"}),g=i.b.nav.withConfig({displayName:"Navigation__NavLinksContainer",componentId:"sc-15o2a8x-2"})(["text-align:center;width:200px;a{color:var(--primary);padding:10px 0px 10px 0px;&:hover{color:var(--white);}}& .active{&::before{content:'{ ';color:var(--white);}&::after{content:' }';color:var(--white);}}"]),v=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{id:"nav-menu-button",size:48,toggled:!t,onClick:function(){return n(!t)}}),r.a.createElement(h,{id:"nav",visible:t},r.a.createElement(g,null,r.a.createElement("h2",null,r.a.createElement(d.a,{to:"/",activeClassName:"active",id:"aboutMe"},"aboutMe")),r.a.createElement("h2",null,r.a.createElement(d.a,{to:"/projects",activeClassName:"active",id:"projects"},"projects")),r.a.createElement("h2",null,r.a.createElement(d.a,{to:"/experience",activeClassName:"active",id:"experience"},"experience")),r.a.createElement("h2",null,r.a.createElement(d.a,{to:"/things",activeClassName:"active",id:"things"},"things")),r.a.createElement("h2",null,r.a.createElement(d.a,{to:"/resume",activeClassName:"active",id:"resume"},"resume")))))},b=n(176),x=n(186),w=n(187),y=n(188),E=n(185),k=n(189),C=i.b.a.withConfig({displayName:"socialMediaLinks__Link",componentId:"sc-1rirfde-0"})(["padding:1em;"]),N=i.b.div.withConfig({displayName:"socialMediaLinks__SocialMediaContainer",componentId:"sc-1rirfde-1"})(["display:flex;justify-content:space-around;margin:0 auto;align-content:center;flex-wrap:wrap;max-width:400px;a{svg{&:hover{color:var(--text);}}}"]),z=function(){return r.a.createElement(d.b,{query:"1647048299",render:function(e){var t=e.site.siteMetadata,n=t.instagram,a=t.github,i=t.linkedin,o=t.weibo,l=t.email;return r.a.createElement(N,null,r.a.createElement(C,{href:n,alt:"Instagram","aria-label":"Link to Instagram"},r.a.createElement(E.a,{color:"#f29c9f",size:"32"})),r.a.createElement(C,{href:a,alt:"Github","aria-label":"Link to Github"},r.a.createElement(x.a,{color:"#83c192",size:"32"})),r.a.createElement(C,{href:i,alt:"LinkedIn","aria-label":"Link to Linked In"},r.a.createElement(w.a,{color:"#fada5d",size:"32"})),r.a.createElement(C,{href:o,alt:"Weibo","aria-label":"Link to Weibo"},r.a.createElement(y.a,{color:"#51c7da",size:"32"})),r.a.createElement(C,{href:"mailto:"+l,alt:"E-mail","aria-label":"Link to Send Email"},r.a.createElement(k.a,{color:"#af98e6",size:"32"})))},data:b})},_=i.b.div.withConfig({displayName:"layout__ContentContainer",componentId:"sc-104cw7b-0"})(["padding:2vw;margin-right:250px;@media screen and (max-width:","px){margin-right:0;}"],u.md),j=i.b.span.withConfig({displayName:"layout__ThemeToggle",componentId:"sc-104cw7b-1"})(["cursor:pointer;position:absolute;top:10;left:10;z-index:99;"]),F=i.b.div.withConfig({displayName:"layout__Foot",componentId:"sc-104cw7b-2"})(["padding-top:20vh;font-size:0.75em;text-align:center;"]);t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(j,null),r.a.createElement(v,null),r.a.createElement(_,null,t,r.a.createElement(F,null,r.a.createElement(z,null),r.a.createElement("p",null,"© Copyright 2019, Hanyu Xu"))))}},180:function(e,t,n){"use strict";var a=n(171).b.h1.withConfig({displayName:"SuperText",componentId:"sc-52nmpq-0"})(["@media screen and (max-width:350px){font-size:2.5rem;}@media screen and (min-width:350px){font-size:3.5rem;}@media screen and (min-width:700px){font-size:5rem;}padding:2vh 0 10vh 0;margin:0;&::before{content:'<';color:var(--text);}&::after{content:' />';color:var(--text);}"]);t.a=a}}]);
//# sourceMappingURL=component---src-pages-experience-js-f64c368a33272f00bc18.js.map