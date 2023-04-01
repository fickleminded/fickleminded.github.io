"use strict";(self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5=self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5||[]).push([[678],{3204:function(e){const a=(e,a)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");a=Object.assign({pascalCase:!1},a);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return a.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let a=!1,t=!1,r=!1;for(let l=0;l<e.length;l++){const n=e[l];a&&/[a-zA-Z]/.test(n)&&n.toUpperCase()===n?(e=e.slice(0,l)+"-"+e.slice(l),a=!1,r=t,t=!0,l++):t&&r&&/[a-zA-Z]/.test(n)&&n.toLowerCase()===n?(e=e.slice(0,l-1)+"-"+e.slice(l-1),r=t,t=!1,a=!0):(a=n.toLowerCase()===n&&n.toUpperCase()!==n,r=t,t=n.toUpperCase()===n&&n.toLowerCase()!==n)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,a)=>a.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),t=e,a.pascalCase?t.charAt(0).toUpperCase()+t.slice(1):t;var t};e.exports=a,e.exports.default=a},3723:function(e,a,t){t.d(a,{L:function(){return p},M:function(){return w},P:function(){return y},S:function(){return W},_:function(){return s},a:function(){return c},b:function(){return o},g:function(){return m},h:function(){return i}});var r=t(7294),l=(t(3204),t(5697)),n=t.n(l);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}function s(e,a){if(null==e)return{};var t,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a.indexOf(t=n[r])>=0||(l[t]=e[t]);return l}const i=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function o(e,a,t,r,l){return void 0===l&&(l={}),c({},t,{loading:r,shouldLoad:e,"data-main-image":"",style:c({},l,{opacity:a?1:0})})}function m(e,a,t,r,l,n,s,i){const o={};n&&(o.backgroundColor=n,"fixed"===t?(o.width=r,o.height=l,o.backgroundColor=n,o.position="relative"):("constrained"===t||"fullWidth"===t)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),s&&(o.objectFit=s),i&&(o.objectPosition=i);const m=c({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:c({opacity:a?0:1,transition:"opacity 500ms linear"},o)});return m}const d=["children"],u=function(e){let{layout:a,width:t,height:l}=e;return"fullWidth"===a?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:l/t*100+"%"}}):"constrained"===a?r.createElement("div",{style:{maxWidth:t,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+l+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:a}=e,t=s(e,d);return r.createElement(r.Fragment,null,r.createElement(u,c({},t)),a,null)},g=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],f=function(e){let{src:a,srcSet:t,loading:l,alt:n="",shouldLoad:i}=e,o=s(e,g);return r.createElement("img",c({},o,{decoding:"async",loading:l,src:i?a:void 0,"data-src":i?void 0:a,srcSet:i?t:void 0,"data-srcset":i?void 0:t,alt:n}))},h=function(e){let{fallback:a,sources:t=[],shouldLoad:l=!0}=e,n=s(e,b);const i=n.sizes||(null==a?void 0:a.sizes),o=r.createElement(f,c({},n,a,{sizes:i,shouldLoad:l}));return t.length?r.createElement("picture",null,t.map((e=>{let{media:a,srcSet:t,type:n}=e;return r.createElement("source",{key:a+"-"+n+"-"+t,type:n,media:a,srcSet:l?t:void 0,"data-srcset":l?void 0:t,sizes:i})})),o):o};var v;f.propTypes={src:l.string.isRequired,alt:l.string.isRequired,sizes:l.string,srcSet:l.string,shouldLoad:l.bool},h.displayName="Picture",h.propTypes={alt:l.string.isRequired,shouldLoad:l.bool,fallback:l.exact({src:l.string.isRequired,srcSet:l.string,sizes:l.string}),sources:l.arrayOf(l.oneOfType([l.exact({media:l.string.isRequired,type:l.string,sizes:l.string,srcSet:l.string.isRequired}),l.exact({media:l.string,type:l.string.isRequired,sizes:l.string,srcSet:l.string.isRequired})]))};const E=["fallback"],y=function(e){let{fallback:a}=e,t=s(e,E);return a?r.createElement(h,c({},t,{fallback:{src:a},"aria-hidden":!0,alt:""})):r.createElement("div",c({},t))};y.displayName="Placeholder",y.propTypes={fallback:l.string,sources:null==(v=h.propTypes)?void 0:v.sources,alt:function(e,a,t){return e[a]?new Error("Invalid prop `"+a+"` supplied to `"+t+"`. Validation failed."):null}};const w=function(e){return r.createElement(r.Fragment,null,r.createElement(h,c({},e)),r.createElement("noscript",null,r.createElement(h,c({},e,{shouldLoad:!0}))))};w.displayName="MainImage",w.propTypes=h.propTypes;const N=function(e,a,t){for(var r=arguments.length,l=new Array(r>3?r-3:0),c=3;c<r;c++)l[c-3]=arguments[c];return e.alt||""===e.alt?n().string.apply(n(),[e,a,t].concat(l)):new Error('The "alt" prop is required in '+t+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:n().object.isRequired,alt:N},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],L=new Set;let T,C;const q=function(e){let{as:a="div",image:l,style:n,backgroundColor:o,className:m,class:d,onStartLoad:u,onLoad:p,onError:g}=e,b=s(e,k);const{width:f,height:h,layout:v}=l,E=function(e,a,t){const r={};let l="gatsby-image-wrapper";return"fixed"===t?(r.width=e,r.height=a):"constrained"===t&&(l="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:l,"data-gatsby-image-wrapper":"",style:r}}(f,h,v),{style:y,className:w}=E,N=s(E,S),x=(0,r.useRef)(),q=(0,r.useMemo)((()=>JSON.stringify(l.images)),[l.images]);d&&(m=d);const j=function(e,a,t){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+t/a*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+a+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+t+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,f,h);return(0,r.useEffect)((()=>{T||(T=Promise.all([t.e(774),t.e(223)]).then(t.bind(t,8223)).then((e=>{let{renderImageToString:a,swapPlaceholderImage:t}=e;return C=a,{renderImageToString:a,swapPlaceholderImage:t}})));const e=x.current.querySelector("[data-gatsby-image-ssr]");if(e&&i())return e.complete?(null==u||u({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function a(){e.removeEventListener("load",a),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(q);if(C&&L.has(q))return;let a,r;return T.then((e=>{let{renderImageToString:t,swapPlaceholderImage:s}=e;x.current&&(x.current.innerHTML=t(c({isLoading:!0,isLoaded:L.has(q),image:l},b)),L.has(q)||(a=requestAnimationFrame((()=>{x.current&&(r=s(x.current,q,L,n,u,p,g))}))))})),()=>{a&&cancelAnimationFrame(a),r&&r()}}),[l]),(0,r.useLayoutEffect)((()=>{L.has(q)&&C&&(x.current.innerHTML=C(c({isLoading:L.has(q),isLoaded:L.has(q),image:l},b)),null==u||u({wasCached:!0}),null==p||p({wasCached:!0}))}),[l]),(0,r.createElement)(a,c({},N,{style:c({},y,n,{backgroundColor:o}),className:w+(m?" "+m:""),ref:x,dangerouslySetInnerHTML:{__html:j},suppressHydrationWarning:!0}))},j=(0,r.memo)((function(e){return e.image?(0,r.createElement)(q,e):null}));j.propTypes=x,j.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],_=function(e,a){for(var t=arguments.length,r=new Array(t>2?t-2:0),l=2;l<t;l++)r[l-2]=arguments[l];return"fullWidth"!==e.layout||"width"!==a&&"height"!==a||!e[a]?n().number.apply(n(),[e,a].concat(r)):new Error('"'+a+'" '+e[a]+" may not be passed when layout is fullWidth.")},G=new Set(["fixed","fullWidth","constrained"]),A={src:n().string.isRequired,alt:N,width:_,height:_,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!G.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},W=(z=j,function(e){let{src:a,__imageData:t,__error:l}=e,n=s(e,O);return l&&console.warn(l),t?r.createElement(z,c({image:t},n)):(console.warn("Image not loaded",a),null)});var z;W.displayName="StaticImage",W.propTypes=A},1317:function(e,a,t){t.d(a,{Z:function(){return o}});var r=t(7294),l=t(1883),n=t.p+"static/logo-80c3d650db84e89ed28878ebec7573c4.png";const c=e=>{let{siteTitle:a}=e;return r.createElement("nav",{className:"navbar fixed-top navbar-expand-lg",id:"mainNav"},r.createElement("div",{className:"container"},r.createElement("a",{href:"/",className:"navbar-brand"},r.createElement("img",{src:n,height:"45",alt:"logo"})," Genoleum"),r.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.createElement("span",{className:"navbar-toggler-icon"})),r.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.createElement("ul",{className:"navbar-nav ms-lg-5 justify-content-end"},r.createElement("li",{className:"nav-item"},r.createElement("a",{className:"nav-link",href:"#home"},"Home")),r.createElement("li",{className:"nav-item"},r.createElement("a",{className:"nav-link",href:"#about"},"About")),r.createElement("li",{className:"nav-item"},r.createElement("a",{className:"nav-link",href:"#process"},"Process")),r.createElement("li",{className:"nav-item"},r.createElement("a",{className:"nav-link",href:"#contact"},"Contact"))))))};c.defaultProps={siteTitle:""};var s=c;var i=()=>r.createElement("footer",{className:"pt-5 pb-2 site-footer"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-5 col-12 me-auto mb-4"},r.createElement("h5",{className:"text-white mb-3"},"Newsletter"),r.createElement("form",{className:"custom-form subscribe-form mt-4"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-8 col-md-8 col-7"},r.createElement("input",{type:"email",name:"subscribe-email",id:"subscribe-email",pattern:"[^ @]*@[^ @]*",className:"form-control",placeholder:"Your email address",required:""})),r.createElement("div",{className:"col-lg-4 col-md-4 col-5"},r.createElement("button",{type:"submit",className:"form-control",id:"subscribe"},"Subscribe"))))),r.createElement("div",{className:"col-lg-2 col-12 mx-auto my-lg-0 my-4"},r.createElement("h5",{className:"text-white mb-3"},"Site Links"),r.createElement("ul",{className:"footer-menu"},r.createElement("li",{className:"footer-menu-item"},r.createElement("a",{href:"#home",className:"footer-menu-link"},"Home")),r.createElement("li",{className:"footer-menu-item"},r.createElement("a",{href:"#about",className:"footer-menu-link"},"About")),r.createElement("li",{className:"footer-menu-item"},r.createElement("a",{href:"#process",className:"footer-menu-link"},"Process")),r.createElement("li",{className:"footer-menu-item"},r.createElement("a",{href:"#contact",className:"footer-menu-link"},"Contact")))),r.createElement("div",{className:"col-lg-2 col-12"},r.createElement("h5",{className:"text-white mb-3"},"Say Hi"),r.createElement("p",{className:"text-white mb-1"},"4 Privet Drive ",r.createElement("br",null),"Little Whinging ",r.createElement("br",null),"Surrey, England"),r.createElement("p",null,r.createElement("a",{href:"mailto:email@company.com",className:"footer-link"},"harry@potter.com"))),r.createElement("div",{className:"site-footer-bottom mt-5"},r.createElement("div",{class:"row pt-4"},r.createElement("div",{class:"col-lg-6 col-12"},r.createElement("p",{class:"copyright-text copyright-link"},"Copyright © 2023 Genoleum Energy LLC.")))))));var o=e=>{var a;let{children:t}=e;const n=(0,l.useStaticQuery)("3649515864");return r.useEffect((()=>{window.addEventListener("scroll",(function(){window.scrollY>document.querySelector("section.hero").offsetHeight-80?document.getElementById("mainNav").classList.add("sticky-nav"):document.getElementById("mainNav").classList.remove("sticky-nav")}))}),[]),r.createElement("div",{className:"container-fluid p-0"},r.createElement(s,{siteTitle:(null===(a=n.site.siteMetadata)||void 0===a?void 0:a.title)||"Title"}),r.createElement("main",null,t),r.createElement(i,null))}},1707:function(e,a,t){t.d(a,{p:function(){return n}});var r=t(7294),l=t(1883);const n=e=>{let{title:a,description:t,pathname:n,children:c}=e;const{title:s,description:i,siteUrl:o}=(0,l.useStaticQuery)("63159454").site.siteMetadata,m={title:a||s,description:t||i,url:""+o+(n||"")};return r.createElement(r.Fragment,null,r.createElement("title",null,m.title),r.createElement("meta",{name:"description",content:m.description}),r.createElement("meta",{name:"twitter:title",content:m.title}),r.createElement("meta",{name:"twitter:url",content:m.url}),r.createElement("meta",{name:"twitter:description",content:m.description}),c)}},3803:function(e,a,t){t.r(a),t.d(a,{Head:function(){return u},default:function(){return d}});var r=t(7294);var l=()=>r.createElement("section",{className:"section-padding",id:"contact"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-8 col-md-10 col-12 mx-auto"},r.createElement("h2",{className:"mb-4 text-center"},"Let's chat"),r.createElement("form",{className:"custom-form",action:"",method:"post"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-4 col-md-6 col-12 my-2"},r.createElement("label",{className:"mb-2",htmlFor:"name"},"Full Name"),r.createElement("input",{type:"text",name:"name",id:"name",className:"form-control",required:""})),r.createElement("div",{className:"col-lg-4 col-md-6 col-12 my-2"},r.createElement("label",{className:"mb-2",htmlFor:"email"},"Email Address"),r.createElement("input",{type:"email",name:"email",id:"email",pattern:"[^ @]*@[^ @]*",className:"form-control",required:""})),r.createElement("div",{className:"col-lg-4 col-md-6 col-12 my-2"},r.createElement("label",{className:"mb-2",htmlFor:"subject"},"How did you hear about us?"),r.createElement("select",{className:"form-select form-control",name:"subject",id:"subject"},r.createElement("option",{selected:""},"Choose a subject"),r.createElement("option",{value:"web+search"},"Website Searches"),r.createElement("option",{value:"social+media"},"Social Media"),r.createElement("option",{value:"social+media"},"Friends and Family"),r.createElement("option",{value:"others"},"Others"))),r.createElement("div",{className:"col-12 my-2"},r.createElement("label",{className:"mb-2",htmlFor:"message"},"Tell us about your interest"),r.createElement("textarea",{className:"form-control",rows:"5",id:"message",name:"message"}),r.createElement("button",{type:"submit",className:"form-control mt-4",id:"submit"},"Submit")))))))),n=t(1317);var c=e=>{let{videoSrcURL:a,videoTitle:t,...l}=e;return r.createElement("div",{className:"video container"},r.createElement("div",{className:"ratio ratio-16x9"},r.createElement("iframe",{src:a,title:t,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0})))};var s=()=>r.createElement("section",{className:"services section-padding",id:"process"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("h2",{className:"mb-5 text-center"},"Genoleum process")),r.createElement(c,{videoSrcURL:"https://www.youtube.com/embed/K4TOrB7at0Y",videoTitle:"Genoleum process sample video",className:"text-center"}))),i=t(3723);var o=()=>r.createElement("section",{className:"about section-padding",id:"about"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-6 col-12"},r.createElement("h2",{className:"mb-5"},"What we are about")),r.createElement("div",{className:"col-lg-4 col-12 ms-lg-auto mb-5 mb-lg-0"},r.createElement("nav",null,r.createElement("div",{className:"nav nav-tabs",id:"nav-tab",role:"tablist"},r.createElement("button",{className:"nav-link active",id:"nav-intro-tab","data-bs-toggle":"tab","data-bs-target":"#nav-intro",type:"button",role:"tab","aria-controls":"nav-intro","aria-selected":"true"},"Greenify"),r.createElement("button",{className:"nav-link",id:"nav-profile-tab","data-bs-toggle":"tab","data-bs-target":"#nav-profile",type:"button",role:"tab","aria-controls":"nav-profile","aria-selected":"false"},"Waste"),r.createElement("button",{className:"nav-link",id:"nav-faq-tab","data-bs-toggle":"tab","data-bs-target":"#nav-faq",type:"button",role:"tab","aria-controls":"nav-faq","aria-selected":"false"},"FAQs")))),r.createElement("div",{className:"col-12"},r.createElement("div",{className:"tab-content",id:"nav-tabContent"},r.createElement("div",{className:"tab-pane fade show active",id:"nav-intro",role:"tabpanel","aria-labelledby":"nav-intro-tab"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-6 col-12 mb-lg-0 mb-4"},r.createElement(i.S,{src:"../images/factory.jpg",formats:["AUTO","WEBP"],alt:"A Gatsby astronaut",className:"img-fluid",__imageData:t(1824)})),r.createElement("div",{className:"col-lg-5 col-12 m-auto"},r.createElement("h3",{className:"mb-3"},"Waste back to oil"),r.createElement("p",null,"We convert waste plastic and tires to oil."),r.createElement("p",null,"Our process also filters carbon dioxide from the environment and produces usable by-products that can be used in other industries.")))),r.createElement("div",{className:"tab-pane fade",id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-5 col-12 m-auto"},r.createElement("h3",{className:"mb-3"},"Plastics and tires"),r.createElement("p",null,"The plastics and automotive tire industries are two of the world's largest consumers of oil…"),r.createElement("p",null,"Despite increased recycling efforts….we incinerate more plastic than we recycle….. 80% of all plastics will be disposed of in landfills."),r.createElement("p",null,"Genoleum converts these waste to oil.")),r.createElement("div",{className:"col-lg-6 col-12 mt-lg-0 mt-4"},r.createElement(i.S,{src:"../images/plastic-waste.jpg",formats:["AUTO","WEBP"],alt:"A Gatsby astronaut",className:"img-fluid",__imageData:t(8918)})))),r.createElement("div",{className:"tab-pane fade",id:"nav-faq",role:"tabpanel","aria-labelledby":"nav-faq-tab"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-6 col-12 mb-lg-0 mb-4"},r.createElement(i.S,{src:"../images/php-programming-html-coding-cyberspace-concept.jpg",formats:["AUTO","WEBP"],alt:"A Gatsby astronaut",className:"img-fluid",__imageData:t(2921)})),r.createElement("div",{className:"col-lg-5 col-12 m-auto"},r.createElement("h3",{className:"mb-3"},"Frequenlty Asked Questions"),r.createElement("div",{className:"accordion",id:"accordionGeneral"},r.createElement("div",{className:"accordion-item"},r.createElement("h2",{className:"accordion-header",id:"headingOne"},r.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#accordionGeneralOne","aria-expanded":"true","aria-controls":"accordionGeneralOne"},"Why do we need Genoleum?")),r.createElement("div",{id:"accordionGeneralOne",className:"accordion-collapse collapse","aria-labelledby":"headingOne","data-bs-parent":"#accordionGeneral"},r.createElement("div",{className:"accordion-body"},r.createElement("p",{className:"large-paragraph"},r.createElement("strong",null,"Genoleum")," lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),r.createElement("p",{className:"large-paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))),r.createElement("div",{className:"accordion-item"},r.createElement("h2",{className:"accordion-header",id:"headingTwo"},r.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#accordionGeneralTwo","aria-expanded":"false","aria-controls":"accordionGeneralTwo"},"How can you help?")),r.createElement("div",{id:"accordionGeneralTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionGeneral"},r.createElement("div",{className:"accordion-body"},r.createElement("p",{className:"large-paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))),r.createElement("div",{className:"accordion-item"},r.createElement("h2",{className:"accordion-header",id:"headingThree"},r.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#accordionGeneralThree","aria-expanded":"false","aria-controls":"accordionGeneralThree"},"Where are we now?")),r.createElement("div",{id:"accordionGeneralThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionGeneral"},r.createElement("div",{className:"accordion-body"},r.createElement("p",{className:"large-paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))))))))))))),m=t(1707);var d=()=>r.createElement(n.Z,null,r.createElement("section",{className:"hero d-flex justify-content-center align-items-center",id:"home"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-8 col-12"},r.createElement("div",{className:"heroText"},r.createElement("h1",{className:"text-white mb-lg-5 mb-4"},"Genoleum"),r.createElement("h2",{className:"text-white mb-lg-5 mb-4"},"Are you ready for some fresh air?"))))),r.createElement("div",{className:"overlay"})),r.createElement(o,null),r.createElement(s,null),r.createElement(l,null));const u=()=>r.createElement(m.p,null)},8918:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#98b8d8","images":{"fallback":{"src":"/static/a955cc408c297ec7516a61633074ff3c/0e64c/plastic-waste.jpg","srcSet":"/static/a955cc408c297ec7516a61633074ff3c/35886/plastic-waste.jpg 600w,\\n/static/a955cc408c297ec7516a61633074ff3c/bcea6/plastic-waste.jpg 1200w,\\n/static/a955cc408c297ec7516a61633074ff3c/0e64c/plastic-waste.jpg 2400w","sizes":"(min-width: 2400px) 2400px, 100vw"},"sources":[{"srcSet":"/static/a955cc408c297ec7516a61633074ff3c/decec/plastic-waste.webp 600w,\\n/static/a955cc408c297ec7516a61633074ff3c/dcd7e/plastic-waste.webp 1200w,\\n/static/a955cc408c297ec7516a61633074ff3c/52c6d/plastic-waste.webp 2400w","type":"image/webp","sizes":"(min-width: 2400px) 2400px, 100vw"}]},"width":2400,"height":1594}')},1824:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#383838","images":{"fallback":{"src":"/static/8ad3110fd3afa230dced343e3db512ac/c1897/factory.jpg","srcSet":"/static/8ad3110fd3afa230dced343e3db512ac/d00ff/factory.jpg 600w,\\n/static/8ad3110fd3afa230dced343e3db512ac/fdcf8/factory.jpg 1200w,\\n/static/8ad3110fd3afa230dced343e3db512ac/c1897/factory.jpg 2400w","sizes":"(min-width: 2400px) 2400px, 100vw"},"sources":[{"srcSet":"/static/8ad3110fd3afa230dced343e3db512ac/b7dec/factory.webp 600w,\\n/static/8ad3110fd3afa230dced343e3db512ac/d69e7/factory.webp 1200w,\\n/static/8ad3110fd3afa230dced343e3db512ac/ad43b/factory.webp 2400w","type":"image/webp","sizes":"(min-width: 2400px) 2400px, 100vw"}]},"width":2400,"height":1399}')},2921:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/8e5c676071c924b595a972303b14af22/4c078/php-programming-html-coding-cyberspace-concept.jpg","srcSet":"/static/8e5c676071c924b595a972303b14af22/054a9/php-programming-html-coding-cyberspace-concept.jpg 375w,\\n/static/8e5c676071c924b595a972303b14af22/62b46/php-programming-html-coding-cyberspace-concept.jpg 750w,\\n/static/8e5c676071c924b595a972303b14af22/4c078/php-programming-html-coding-cyberspace-concept.jpg 1500w","sizes":"(min-width: 1500px) 1500px, 100vw"},"sources":[{"srcSet":"/static/8e5c676071c924b595a972303b14af22/cfda2/php-programming-html-coding-cyberspace-concept.webp 375w,\\n/static/8e5c676071c924b595a972303b14af22/993c3/php-programming-html-coding-cyberspace-concept.webp 750w,\\n/static/8e5c676071c924b595a972303b14af22/436b5/php-programming-html-coding-cyberspace-concept.webp 1500w","type":"image/webp","sizes":"(min-width: 1500px) 1500px, 100vw"}]},"width":1500,"height":1049}')}}]);
//# sourceMappingURL=component---src-pages-index-js-2575a0fdcc505d6c7a87.js.map