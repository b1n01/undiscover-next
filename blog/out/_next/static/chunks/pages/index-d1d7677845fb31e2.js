(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2766:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(432)}])},432:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f},default:function(){return i}});var r=n(4246),o=n(9894),u=n.n(o);function a(e){for(var t=[],n=0;n<Math.floor(e/10);n++)t.push("\ud83c\udfa7 ");return t}function l(e){var t=e.albums;return(0,r.jsx)("ul",{children:t.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)(u(),{href:e.id.toString(),children:(0,r.jsxs)("a",{children:[(0,r.jsxs)("div",{children:[e.attributes.author,(0,r.jsx)("span",{children:" - "}),e.attributes.name]}),(0,r.jsxs)("div",{children:["postato il ",(t=e.attributes.publishedAt,(t=new Date(t)).toLocaleString("it-IT",{year:"numeric",month:"long",day:"numeric"}))," | ascolto di ",e.attributes.length," minuti ",a(e.attributes.length)]})]})})},e.id);var t}))})}var f=!0;function i(e){var t=e.albums;return(0,r.jsx)(l,{albums:t})}},1528:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1453:function(e,t,n){"use strict";var r=n(9854).Z;n(2271).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u=(o=n(7378))&&o.__esModule?o:{default:o},a=n(194),l=n(4087),f=n(9756),i=n(7868),c=n(1842),s=n(1528),d=n(1470);var p="undefined"!==typeof u.default.useTransition,v={};function h(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var y=u.default.forwardRef((function(e,t){var n,o=e.href,y=e.as,b=e.children,_=e.prefetch,g=e.passHref,m=e.replace,j=e.shallow,M=e.scroll,x=e.locale,C=e.onClick,E=e.onMouseEnter,O=e.legacyBehavior,w=void 0===O?!0!==Boolean(!1):O,L=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=b,!w||"string"!==typeof n&&"number"!==typeof n||(n=u.default.createElement("a",null,n));var k=!1!==_,R=r(p?u.default.useTransition():[],2)[1],P=u.default.useContext(f.RouterContext),I=u.default.useContext(i.AppRouterContext);I&&(P=I);var N,T=u.default.useMemo((function(){var e=r(a.resolveHref(P,o,!0),2),t=e[0],n=e[1];return{href:t,as:y?a.resolveHref(P,y):n||t}}),[P,o,y]),S=T.href,A=T.as,D=u.default.useRef(S),U=u.default.useRef(A);w&&(N=u.default.Children.only(n));var B=w?N&&"object"===typeof N&&N.ref:t,H=r(c.useIntersection({rootMargin:"200px"}),3),K=H[0],X=H[1],Z=H[2],q=u.default.useCallback((function(e){U.current===A&&D.current===S||(Z(),U.current=A,D.current=S),K(e),B&&("function"===typeof B?B(e):"object"===typeof B&&(B.current=e))}),[A,B,S,Z,K]);u.default.useEffect((function(){var e=X&&k&&a.isLocalURL(S),t="undefined"!==typeof x?x:P&&P.locale,n=v[S+"%"+A+(t?"%"+t:"")];e&&!n&&h(P,S,A,{locale:t})}),[A,S,X,x,k,P]);var z={ref:q,onClick:function(e){w||"function"!==typeof C||C(e),w&&N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,l,f,i){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n)){e.preventDefault();var c=function(){t[o?"replace":"push"](n,r,{shallow:u,locale:f,scroll:l})};i?i(c):c()}}(e,P,S,A,m,j,M,x,I?R:void 0)},onMouseEnter:function(e){w||"function"!==typeof E||E(e),w&&N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),a.isLocalURL(S)&&h(P,S,A,{priority:!0})}};if(!w||g||"a"===N.type&&!("href"in N.props)){var G="undefined"!==typeof x?x:P&&P.locale,F=P&&P.isLocaleDomain&&s.getDomainLocale(A,G,P.locales,P.domainLocales);z.href=F||d.addBasePath(l.addLocale(A,G,P&&P.defaultLocale))}return w?u.default.cloneElement(N,z):u.default.createElement("a",Object.assign({},L,z),n)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1842:function(e,t,n){"use strict";var r=n(9854).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,i=e.disabled||!a,c=o.useRef(),s=r(o.useState(!1),2),d=s[0],p=s[1],v=r(o.useState(null),2),h=v[0],y=v[1];o.useEffect((function(){if(a){if(c.current&&(c.current(),c.current=void 0),i||d)return;return h&&h.tagName&&(c.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=f.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:u,elements:o},f.push(n),l.set(n,t),t}(n),o=r.id,u=r.observer,a=r.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),l.delete(o);var t=f.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&f.splice(t,1)}}}(h,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==c.current||c.current(),c.current=void 0}}if(!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[h,i,n,t,d]);var b=o.useCallback((function(){p(!1)}),[]);return[y,d,b]};var o=n(7378),u=n(2878),a="function"===typeof IntersectionObserver;var l=new Map,f=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7868:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AppRouterContext=void 0;var o=((r=n(7378))&&r.__esModule?r:{default:r}).default.createContext(null);t.AppRouterContext=o},9894:function(e,t,n){e.exports=n(1453)}},function(e){e.O(0,[774,888,179],(function(){return t=2766,e(e.s=t);var t}));var t=e.O();_N_E=t}]);