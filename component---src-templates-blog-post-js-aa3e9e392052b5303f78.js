(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1QcF":function(e,t,n){},RPjP:function(e,t,n){"use strict";e.exports=n("SLms")},SLms:function(e,t,n){"use strict";n("pIFo"),n("8+KV"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("DNiP"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n("q1tI")),i=u(n("17x9"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=["shortname","identifier","title","url","category_id","onNewComment","language"],f=!1;function m(e,t){var n=t.onNewComment,r=t.language,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["onNewComment","language"]);for(var o in a)e.page[o]=a[o];e.language=r,n&&(e.callbacks={onNewComment:[n]})}var d=function(e){function t(){return c(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,n){return l.some((function(e){return e===n}))?t:r({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))}),{});return o.default.createElement("div",t,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!f){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),f=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};l.forEach((function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){m(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){m(this,t)},this.addDisqusScript())}}]),t}(o.default.Component);d.displayName="DisqusThread",d.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},d.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=d},TsVF:function(e,t,n){},Y64x:function(e,t,n){},jmfv:function(e,t,n){},"n1n/":function(e,t,n){},uhgt:function(e,t,n){},vg9a:function(e,t,n){},yZlL:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return C}));var r=n("q1tI"),a=n.n(r),o=(n("TsVF"),function(){return a.a.createElement("hr",{className:"custom-hr"})}),i=n("hpys"),u=n("CC2r"),c=function(e){var t=e.title;return a.a.createElement("h1",null,t)},s=(n("1QcF"),function(e){var t=e.date;return a.a.createElement("p",{className:"post-date"},t)}),l=function(e){var t=e.html;return a.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})},f=(n("jmfv"),function(e){var t=e.sponsorId;return a.a.createElement("div",{className:"sponsor-button"},a.a.createElement("a",{className:"bmc-button",target:"_blank",rel:"noopener noreferrer",href:"https://www.buymeacoffee.com/"+t},a.a.createElement("img",{src:"https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg",alt:"Buy me a coffee"}),a.a.createElement("span",null,"Buy me a coffee")))}),m=n("lbRd"),d=n("Wbzz"),p=(n("n1n/"),function(e){var t=e.pageContext,n=t.previous,r=t.next;return a.a.createElement("ul",{className:"navigator"},a.a.createElement("li",null,n&&a.a.createElement(d.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),a.a.createElement("li",null,r&&a.a.createElement(d.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →")))}),h=(n("a1Th"),n("Btvt"),n("I5cv"),n("RPjP")),v=n.n(h);function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y=function(e){var t,n;n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r;r=o;function o(t){var n;return(n=e.call(this,t)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(b(n)),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(b(n)),n}var i=o.prototype;return i.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},i.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!!"}),this.setState({toasts:e})},i.render=function(){var e=this.props,t=e.post,n=e.shortName,r=e.siteUrl+e.slug;return a.a.createElement(v.a,{shortname:n,identifier:t.frontmatter.title,title:t.frontmatter.title,url:r,category_id:t.frontmatter.category_id,onNewComment:this.notifyAboutComment})},o}(r.Component),g=(n("rGqo"),n("yt8O"),n("RW0V"),n("JqEL")),E=n("WlAH"),w=function(e){var t=e.repo,n=a.a.createRef();return Object(r.useEffect)((function(){var e=g.f(E.d.DARK),r=document.createElement("script"),a={src:"https://utteranc.es/client.js",repo:t,branch:"master",theme:e?"photon-dark":"github-light",label:"comment",async:!0,"issue-term":"pathname",crossorigin:"anonymous"};Object.keys(a).forEach((function(e){r.setAttribute(e,a[e])})),n.current.appendChild(r)}),[]),a.a.createElement("div",{className:"utterances",ref:n})};n("xfY5"),n("XfO3"),n("HEwt");n("Y64x");var O=function(){var e=Object(r.useState)([]),t=e[0],n=e[1],o=function(){var e=Object(r.useRef)(),t=Object(r.useState)(""),n=t[0],a=t[1];return Object(r.useEffect)((function(){return e.current=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&a(e.target.id)}))}),{rootMargin:"-20px 0% -40% 0px"}),document.querySelectorAll("h2, h3, h4").forEach((function(t){return e.current.observe(t)})),function(){return e.current.disconnect()}}),[]),{activeId:n}}().activeId;return Object(r.useEffect)((function(){var e=Array.from(document.querySelectorAll("h2, h3, h4")).map((function(e){return{id:e.id,text:e.innerText,level:Number(e.nodeName.charAt(1))}}));n(e)}),[]),a.a.createElement("nav",{className:"nav"},a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",{key:e.id,className:"head"+e.level},a.a.createElement("a",{href:"#"+e.id,onClick:function(t){t.preventDefault(),document.querySelector("#"+e.id).scrollIntoView({behavior:"smooth"})},style:{fontWeight:o===e.id?"bold":"normal"}},e.text))}))))},j=n("EXIE"),C=(n("uhgt"),n("vg9a"),t.default=function(e){var t=e.data,n=e.pageContext,d=e.location;Object(r.useEffect)((function(){return j.c(),function(){return j.a()}}),[]);var h=t.markdownRemark,v=t.site.siteMetadata,b=v.title,g=v.comment,E=v.siteUrl,C=(v.author,v.sponsor),_=g.disqusShortName,N=g.utterances,k=h.frontmatter,S=k.title,q=k.date;return a.a.createElement(i.a,{location:d,title:b},a.a.createElement(u.a,{title:S,description:h.excerpt}),a.a.createElement(c,{title:S}),a.a.createElement(s,{date:q}),a.a.createElement(O,null),a.a.createElement(l,{html:h.html}),!!C.buyMeACoffeeId&&a.a.createElement(f,{sponsorId:C.buyMeACoffeeId}),a.a.createElement(o,null),a.a.createElement(m.a,null),a.a.createElement(p,{pageContext:n}),!!_&&a.a.createElement(y,{post:h,shortName:_,siteUrl:E,slug:n.slug}),!!N&&a.a.createElement(w,{repo:N}))},"1559320954")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-aa3e9e392052b5303f78.js.map