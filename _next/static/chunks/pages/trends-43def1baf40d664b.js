(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{21105:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trends",function(){return t(15548)}])},15548:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return k}});var l=t(85893),u=t(9008),d=t.n(u),r=t(67294),v=t(45697),s=t.n(v);function T(){return T=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},T.apply(this,arguments)}function Z(e,a){if(null==e)return{};var t,l,u=function(e,a){if(null==e)return{};var t,l,u={},d=Object.keys(e);for(l=0;l<d.length;l++)t=d[l],a.indexOf(t)>=0||(u[t]=e[t]);return u}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(l=0;l<d.length;l++)t=d[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var o=(0,r.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,u=e.size,d=void 0===u?24:u,v=Z(e,["color","size"]);return r.createElement("svg",T({ref:a,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},v),r.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),r.createElement("polyline",{points:"17 6 23 6 23 12"}))}));o.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},o.displayName="TrendingUp";var i=o;function n(){return n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},n.apply(this,arguments)}function c(e,a){if(null==e)return{};var t,l,u=function(e,a){if(null==e)return{};var t,l,u={},d=Object.keys(e);for(l=0;l<d.length;l++)t=d[l],a.indexOf(t)>=0||(u[t]=e[t]);return u}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(l=0;l<d.length;l++)t=d[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var h=(0,r.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,u=e.size,d=void 0===u?24:u,v=c(e,["color","size"]);return r.createElement("svg",n({ref:a,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},v),r.createElement("polyline",{points:"23 18 13.5 8.5 8.5 13.5 1 6"}),r.createElement("polyline",{points:"17 18 23 18 23 12"}))}));h.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},h.displayName="TrendingDown";var p=h,g=t(74041),f=t(68257),_=t(98473),G={testsslGrade:{title:"SSL"},codescanGrade:{title:"Codescan grade"},dependabotGrade:{title:"Dependabot grade"},httpGrade:{title:"HTTP observatory"},lighthouse_performance:{treshold:.1,title:"Lighthouse Performance"},lighthouse_seo:{treshold:.1,title:"Lighthouse SEO"},lighthouse_pwa:{treshold:.1,title:"Lighthouse PWA"},lighthouse_accessibility:{title:"Lighthouse accessibility"},"lighthouse_best-practices":{treshold:.1,title:"Lighthouse best practices"},nmapGrade:{title:"NMAP grade"},nmapOpenPortsGrade:{title:"NMAP open ports grade"},trackersCount:{title:"Trackers count",reverse:!0},cookiesCount:{title:"Cookies count",reverse:!0},uptime:{treshold:1,title:"uptime"},apdex:{treshold:.05,title:"apDex"},"declaration-a11y":{title:"D\xe9claration a11y"},"declaration-rgpd":{title:"D\xe9claration RGPD"},trivyGrade:{title:"Trivy grade"}},m=[{name:"trend",label:"Trend",render:function(e){return function(e,a){var t=G[e],l=a[0],u=a[a.length-1];return e.match(/Grade$/)||"declaration-a11y"===e?(0,_.BE)(u)-(0,_.BE)(l):t.reverse?l-u:u-l}(e.key,e.values)>0?(0,l.jsx)(i,{size:40,style:{stroke:"var(--success)",marginRight:10}}):(0,l.jsx)(p,{size:40,style:{stroke:"var(--error)",marginRight:10}})}},{name:"outil",label:"Outil",render:function(e){return G[e.key].title}},{name:"evolution",label:"Evolution",render:function(e){return e.values.map((function(e){return isNaN(e)?e:Math.floor(1e4*e)/1e4})).filter((function(e,a,t){return 0===a||a===t.length-1})).join(" => ")}}],b=function(e){var a=e.trends,t=Object.keys(a);return t.sort(),(0,l.jsxs)("div",{children:[(0,l.jsx)("br",{}),(0,l.jsx)("h3",{children:"Evolutions sur les 30 derniers jours"}),(0,l.jsx)("br",{}),t.map((function(e){var t=function(e){var a={};return Object.keys(e).filter((function(e){return e in G})).forEach((function(t){var l=e[t].map((function(e){return e.date,e.value}));if(l.length>1){var u=l[0],d=l[l.length-1],r=G[t].treshold;(!r||Math.abs(u-d)>(r||0))&&u!==d&&(a[t]=[u,d])}})),a}(a[e]);return Object.keys(t).length?(0,l.jsx)(f.s,{title:(0,_.p5)(e),url:"/url/".concat(encodeURIComponent((0,_.N0)(e))),children:(0,l.jsx)(g.Table,{columns:m,data:Object.keys(t).map((function(e){return{key:e,values:t[e]}})),rowKey:"key"})},e):null}))]})},y=JSON.parse('{"https://www.fabrique.social.gouv.fr":{},"https://beta.gouv.fr":{},"http://reseaupro.unpidf.fr":{"404":[{"date":"2021-10-13T10:39:16.000Z","value":18}],"httpGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"F"}],"nmapGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"F"}],"nmapOpenPortsCount":[{"date":"2021-10-13T10:39:16.000Z","value":5}],"nmapOpenPortsGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2021-10-13T10:39:16.000Z","value":true}],"testsslExpireDate":[{"date":"2021-10-13T10:39:16.000Z","value":"2020-01-16T12:00:00.000Z"}],"testsslGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"T"}],"cookiesGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"C"}],"cookiesCount":[{"date":"2021-10-13T10:39:16.000Z","value":3}],"trackersGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"C"}],"trackersCount":[{"date":"2021-10-13T10:39:16.000Z","value":8}],"lighthouse_performance":[{"date":"2021-10-13T10:39:16.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2021-10-13T10:39:16.000Z","value":1}],"lighthouse_accessibilityGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-10-13T10:39:16.000Z","value":0.73}],"lighthouse_best-practicesGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"B"}],"lighthouse_seo":[{"date":"2021-10-13T10:39:16.000Z","value":0.92}],"lighthouse_seoGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-10-13T10:39:16.000Z","value":0.25}],"lighthouse_pwaGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"E"}],"statsGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"F"}],"apdex":[{"date":"2021-10-13T11:11:43.000Z","value":0.938},{"date":"2021-10-13T20:24:20.000Z","value":0.962},{"date":"2021-10-15T15:33:51.000Z","value":1},{"date":"2021-10-17T07:21:34.000Z","value":0.992}],"apdexGrade":[{"date":"2021-10-13T11:11:43.000Z","value":"F"},{"date":"2021-10-13T20:24:20.000Z","value":"D"},{"date":"2021-10-15T15:33:51.000Z","value":"A"}],"uptime":[{"date":"2021-10-13T11:11:43.000Z","value":100}],"uptimeGrade":[{"date":"2021-10-13T11:11:43.000Z","value":"A"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://unif.fr/":{"404":[{"date":"2021-10-13T20:24:20.000Z","value":10},{"date":"2021-10-31T07:12:28.000Z","value":7},{"date":"2021-11-28T07:29:49.000Z","value":8},{"date":"2022-03-13T07:40:40.000Z","value":9},{"date":"2022-03-20T07:46:50.000Z","value":8}],"httpGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"apdex":[{"date":"2021-10-13T20:24:20.000Z","value":0.952},{"date":"2021-10-15T15:33:51.000Z","value":1},{"date":"2021-10-17T07:21:34.000Z","value":0.996}],"apdexGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"E"},{"date":"2021-10-15T15:33:51.000Z","value":"A"}],"uptime":[{"date":"2021-10-13T20:24:20.000Z","value":100}],"uptimeGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2021-10-13T20:24:20.000Z","value":false},{"date":"2022-04-10T07:48:52.000Z","value":true},{"date":"2022-04-17T08:07:21.000Z","value":false}],"testsslExpireDate":[{"date":"2021-10-13T20:24:20.000Z","value":"2022-01-01T20:59:00.000Z"},{"date":"2021-12-12T07:29:23.000Z","value":"2022-03-05T21:55:00.000Z"},{"date":"2022-02-20T07:45:41.000Z","value":"2022-05-07T21:56:00.000Z"},{"date":"2022-04-17T08:07:21.000Z","value":"2022-07-09T20:57:00.000Z"}],"testsslGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"cookiesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"C"}],"cookiesCount":[{"date":"2021-10-13T20:24:20.000Z","value":3},{"date":"2021-12-12T07:29:23.000Z","value":4}],"trackersGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"C"},{"date":"2022-01-16T07:37:17.000Z","value":"F"}],"trackersCount":[{"date":"2021-10-13T20:24:20.000Z","value":7},{"date":"2021-12-12T07:29:23.000Z","value":9},{"date":"2022-01-16T07:37:17.000Z","value":11}],"lighthouse_performance":[{"date":"2021-10-13T20:24:20.000Z","value":1},{"date":"2021-12-12T07:29:23.000Z","value":0.9977653503417969},{"date":"2021-12-19T07:32:17.000Z","value":0.9977548599243165},{"date":"2021-12-26T07:38:47.000Z","value":0.99776611328125},{"date":"2022-01-02T07:26:51.000Z","value":0.9977649688720703},{"date":"2022-01-09T07:39:36.000Z","value":1},{"date":"2022-01-16T07:37:17.000Z","value":0.7477737426757812},{"date":"2022-01-23T07:32:00.000Z","value":0.7477733612060546},{"date":"2022-01-30T07:33:51.000Z","value":0.7478565216064453},{"date":"2022-02-13T07:41:50.000Z","value":0.7478118896484375},{"date":"2022-02-20T07:45:41.000Z","value":0.7476093292236328},{"date":"2022-02-27T07:42:48.000Z","value":0.7475872039794922},{"date":"2022-03-06T07:47:18.000Z","value":0.7477025985717773},{"date":"2022-03-13T07:40:40.000Z","value":0.747683334350586},{"date":"2022-03-20T07:46:50.000Z","value":0.7476985931396485},{"date":"2022-03-27T07:51:04.000Z","value":0.7475664138793945},{"date":"2022-04-03T07:54:20.000Z","value":0.7474584579467773},{"date":"2022-04-10T07:48:52.000Z","value":0.7474582672119141},{"date":"2022-04-17T08:07:21.000Z","value":0.7473676681518555},{"date":"2022-04-24T08:05:55.000Z","value":0.7473274230957031},{"date":"2022-05-01T08:36:22.000Z","value":0.747317886352539},{"date":"2022-05-08T08:19:15.000Z","value":0.7469367980957031},{"date":"2022-05-15T08:24:41.000Z","value":0.7472343444824219},{"date":"2022-05-22T08:05:00.000Z","value":0.7472387313842773},{"date":"2022-05-29T08:13:48.893Z","value":0.7471530914306641}],"lighthouse_performanceGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"},{"date":"2022-01-16T07:37:17.000Z","value":"B"}],"lighthouse_accessibility":[{"date":"2021-10-13T20:24:20.000Z","value":0.93}],"lighthouse_accessibilityGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-10-13T20:24:20.000Z","value":0.87}],"lighthouse_best-practicesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-10-13T20:24:20.000Z","value":0.92}],"lighthouse_seoGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-10-13T20:24:20.000Z","value":0.42},{"date":"2021-12-12T07:29:23.000Z","value":0.5}],"lighthouse_pwaGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"D"}],"statsGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"nmapGrade":[{"date":"2021-10-15T15:33:51.000Z","value":"F"},{"date":"2021-10-17T07:21:34.000Z","value":"B"},{"date":"2021-10-24T07:10:29.000Z","value":"F"},{"date":"2021-11-14T07:09:39.000Z","value":"B"},{"date":"2021-11-21T07:33:25.000Z","value":"F"},{"date":"2021-12-19T07:32:17.000Z","value":"B"},{"date":"2021-12-26T07:38:47.000Z","value":"F"},{"date":"2022-01-23T07:32:00.000Z","value":"E"},{"date":"2022-01-30T07:33:51.000Z","value":"F"},{"date":"2022-02-20T07:45:41.000Z","value":"B"},{"date":"2022-03-06T07:47:18.000Z","value":"F"},{"date":"2022-03-27T07:51:04.000Z","value":"E"},{"date":"2022-04-03T07:54:20.000Z","value":"F"},{"date":"2022-05-22T08:05:00.000Z","value":"E"},{"date":"2022-05-29T08:13:48.893Z","value":"F"}],"nmapOpenPortsCount":[{"date":"2021-10-15T15:33:51.000Z","value":7},{"date":"2021-11-14T07:09:39.000Z","value":6},{"date":"2021-11-21T07:33:25.000Z","value":7},{"date":"2022-01-16T07:37:17.000Z","value":8}],"nmapOpenPortsGrade":[{"date":"2021-10-15T15:33:51.000Z","value":"F"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://www.parisnanterre.fr/welcome-desk/":{"404":[{"date":"2021-10-13T20:24:20.000Z","value":80},{"date":"2021-11-21T07:33:25.000Z","value":42},{"date":"2021-11-28T07:29:49.000Z","value":44},{"date":"2021-12-12T07:29:23.000Z","value":41},{"date":"2021-12-19T07:32:17.000Z","value":42},{"date":"2022-01-02T07:26:51.000Z","value":43},{"date":"2022-01-09T07:39:36.000Z","value":41},{"date":"2022-01-16T07:37:17.000Z","value":42},{"date":"2022-01-23T07:32:00.000Z","value":40},{"date":"2022-02-13T07:41:50.000Z","value":42},{"date":"2022-02-20T07:45:41.000Z","value":41},{"date":"2022-03-13T07:40:40.000Z","value":42},{"date":"2022-03-20T07:46:50.000Z","value":43},{"date":"2022-03-27T07:51:04.000Z","value":6036},{"date":"2022-04-03T07:54:20.000Z","value":6063},{"date":"2022-04-10T07:48:52.000Z","value":6078},{"date":"2022-04-17T08:07:21.000Z","value":6134},{"date":"2022-04-24T08:05:55.000Z","value":43},{"date":"2022-05-01T08:36:22.000Z","value":42},{"date":"2022-05-29T08:13:48.893Z","value":43}],"httpGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"nmapGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"},{"date":"2021-10-24T15:00:33.000Z","value":"B"},{"date":"2021-10-31T07:12:28.000Z","value":"F"},{"date":"2021-12-12T07:29:23.000Z","value":"B"},{"date":"2021-12-19T07:32:17.000Z","value":"F"},{"date":"2022-02-27T07:42:48.000Z","value":"B"},{"date":"2022-03-06T07:47:18.000Z","value":"F"},{"date":"2022-03-13T07:40:40.000Z","value":"B"},{"date":"2022-03-27T07:51:04.000Z","value":"F"},{"date":"2022-04-17T08:07:21.000Z","value":"B"},{"date":"2022-04-24T08:05:55.000Z","value":"F"},{"date":"2022-05-15T08:24:41.000Z","value":"B"},{"date":"2022-05-22T08:05:00.000Z","value":"F"}],"nmapOpenPortsCount":[{"date":"2021-10-13T20:24:20.000Z","value":2},{"date":"2021-10-15T15:33:51.000Z","value":3}],"nmapOpenPortsGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"},{"date":"2021-10-15T15:33:51.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2021-10-13T20:24:20.000Z","value":false}],"testsslExpireDate":[{"date":"2021-10-13T20:24:20.000Z","value":"2022-09-08T23:59:00.000Z"},{"date":"2021-10-15T15:33:51.000Z","value":"2022-07-28T00:00:00.000Z"}],"testsslGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"cookiesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"cookiesCount":[{"date":"2021-10-13T20:24:20.000Z","value":1}],"trackersGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"},{"date":"2021-10-15T15:33:51.000Z","value":"A"},{"date":"2021-11-21T07:33:25.000Z","value":"F"},{"date":"2022-02-20T07:45:41.000Z","value":"C"},{"date":"2022-02-27T07:42:48.000Z","value":"F"}],"trackersCount":[{"date":"2021-10-13T20:24:20.000Z","value":36},{"date":"2021-10-15T15:33:51.000Z","value":0},{"date":"2021-11-21T07:33:25.000Z","value":33},{"date":"2021-12-12T07:29:23.000Z","value":37},{"date":"2021-12-19T07:32:17.000Z","value":32},{"date":"2022-01-02T07:26:51.000Z","value":31},{"date":"2022-01-09T07:39:36.000Z","value":36},{"date":"2022-01-16T07:37:17.000Z","value":34},{"date":"2022-01-23T07:32:00.000Z","value":33},{"date":"2022-01-30T07:33:51.000Z","value":40},{"date":"2022-02-13T07:41:50.000Z","value":36},{"date":"2022-02-20T07:45:41.000Z","value":7},{"date":"2022-02-27T07:42:48.000Z","value":28},{"date":"2022-03-06T07:47:18.000Z","value":29},{"date":"2022-03-20T07:46:50.000Z","value":31},{"date":"2022-03-27T07:51:04.000Z","value":33},{"date":"2022-04-03T07:54:20.000Z","value":34},{"date":"2022-04-17T08:07:21.000Z","value":28},{"date":"2022-04-24T08:05:55.000Z","value":31},{"date":"2022-05-08T08:19:15.000Z","value":33},{"date":"2022-05-15T08:24:41.000Z","value":34},{"date":"2022-05-22T08:05:00.000Z","value":31}],"lighthouse_performance":[{"date":"2021-10-13T20:24:20.000Z","value":0},{"date":"2021-11-21T07:33:25.000Z","value":0.058823585510253906},{"date":"2021-11-28T07:29:49.000Z","value":0.057132911682128903},{"date":"2021-12-12T07:29:23.000Z","value":0.05788841247558594},{"date":"2021-12-19T07:32:17.000Z","value":0.05779743194580078},{"date":"2021-12-26T07:38:47.000Z","value":0.041563796997070315},{"date":"2022-01-02T07:26:51.000Z","value":0.04168415069580078},{"date":"2022-01-09T07:39:36.000Z","value":0.042226219177246095},{"date":"2022-01-16T07:37:17.000Z","value":0.048586463928222655},{"date":"2022-01-23T07:32:00.000Z","value":0.04813652038574219},{"date":"2022-01-30T07:33:51.000Z","value":0.04823246002197266},{"date":"2022-02-13T07:41:50.000Z","value":0.043111419677734374},{"date":"2022-02-20T07:45:41.000Z","value":0.09372673034667969},{"date":"2022-02-27T07:42:48.000Z","value":0.04261627197265625},{"date":"2022-03-06T07:47:18.000Z","value":0.042816543579101564},{"date":"2022-03-13T07:40:40.000Z","value":0.04550876617431641},{"date":"2022-03-20T07:46:50.000Z","value":0}],"lighthouse_performanceGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"lighthouse_accessibility":[{"date":"2021-10-13T20:24:20.000Z","value":0.85},{"date":"2021-11-21T07:33:25.000Z","value":0.79}],"lighthouse_accessibilityGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"},{"date":"2021-11-21T07:33:25.000Z","value":"B"}],"lighthouse_best-practices":[{"date":"2021-10-13T20:24:20.000Z","value":0.8},{"date":"2021-11-21T07:33:25.000Z","value":0.67},{"date":"2022-01-16T07:37:17.000Z","value":0.73}],"lighthouse_best-practicesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"lighthouse_seo":[{"date":"2021-10-13T20:24:20.000Z","value":0.81},{"date":"2021-11-21T07:33:25.000Z","value":0.57},{"date":"2021-12-12T07:29:23.000Z","value":0.76}],"lighthouse_seoGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"},{"date":"2021-11-21T07:33:25.000Z","value":"C"},{"date":"2021-12-12T07:29:23.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2021-10-13T20:24:20.000Z","value":0.42},{"date":"2021-11-21T07:33:25.000Z","value":0.17},{"date":"2021-12-12T07:29:23.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"D"},{"date":"2021-11-21T07:33:25.000Z","value":"E"},{"date":"2021-12-12T07:29:23.000Z","value":"D"}],"statsGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://parisregion.eu/parisregionfp.html#welcome":{"404":[{"date":"2021-10-13T20:24:20.000Z","value":17}],"httpGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"nmapGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2021-10-13T20:24:20.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2021-10-13T20:24:20.000Z","value":true},{"date":"2021-10-15T15:33:51.000Z","value":false}],"testsslExpireDate":[{"date":"2021-10-13T20:24:20.000Z","value":"2021-10-19T09:50:00.000Z"},{"date":"2021-10-15T15:33:51.000Z","value":"2022-01-13T08:08:00.000Z"},{"date":"2021-12-19T07:32:17.000Z","value":"2022-03-14T07:10:00.000Z"},{"date":"2022-02-13T07:41:50.000Z","value":"2022-05-13T06:12:00.000Z"},{"date":"2022-04-17T08:07:21.000Z","value":"2022-07-12T05:12:00.000Z"}],"testsslGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"cookiesCount":[{"date":"2021-10-13T20:24:20.000Z","value":2}],"trackersGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"C"}],"trackersCount":[{"date":"2021-10-13T20:24:20.000Z","value":3}],"lighthouse_performance":[{"date":"2021-10-13T20:24:20.000Z","value":0.4685770034790039},{"date":"2021-10-15T15:33:51.000Z","value":0.468583869934082},{"date":"2021-10-17T07:21:34.000Z","value":0.4685823440551758},{"date":"2021-10-24T07:10:29.000Z","value":0.46858558654785154},{"date":"2021-10-24T15:00:33.000Z","value":0.4685771942138672},{"date":"2021-10-31T07:12:28.000Z","value":0.46858558654785154},{"date":"2021-11-07T07:08:06.000Z","value":0.46847991943359374},{"date":"2021-11-14T07:09:39.000Z","value":0.46848163604736326},{"date":"2021-11-21T07:33:25.000Z","value":0.46848697662353517},{"date":"2021-11-28T07:29:49.000Z","value":0.4684904098510742},{"date":"2021-12-12T07:29:23.000Z","value":0.4684919357299805},{"date":"2021-12-19T07:32:17.000Z","value":0.46848697662353517},{"date":"2021-12-26T07:38:47.000Z","value":0.4684902191162109},{"date":"2022-01-02T07:26:51.000Z","value":0.46848506927490235},{"date":"2022-01-09T07:39:36.000Z","value":0.4679872512817383},{"date":"2022-01-16T07:37:17.000Z","value":0.4679853439331055},{"date":"2022-01-23T07:32:00.000Z","value":0.46798362731933596},{"date":"2022-01-30T07:33:51.000Z","value":0.4679853439331055},{"date":"2022-02-13T07:41:50.000Z","value":0.467987060546875},{"date":"2022-02-20T07:45:41.000Z","value":0.46796226501464844},{"date":"2022-02-27T07:42:48.000Z","value":0.46796207427978515},{"date":"2022-03-06T07:47:18.000Z","value":0.4679603576660156},{"date":"2022-03-13T07:40:40.000Z","value":0.467955207824707},{"date":"2022-03-20T07:46:50.000Z","value":0.4679603576660156},{"date":"2022-03-27T07:51:04.000Z","value":0.46796207427978515},{"date":"2022-04-03T07:54:20.000Z","value":0.4679603576660156},{"date":"2022-04-10T07:48:52.000Z","value":0.4679586410522461},{"date":"2022-04-17T08:07:21.000Z","value":0.46796207427978515},{"date":"2022-05-08T08:19:15.000Z","value":0.4679571151733398},{"date":"2022-05-15T08:24:41.000Z","value":0.4679677963256836},{"date":"2022-05-22T08:05:00.000Z","value":0.4679695129394531},{"date":"2022-05-29T08:13:48.893Z","value":0.4679697036743164}],"lighthouse_performanceGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"D"}],"lighthouse_accessibility":[{"date":"2021-10-13T20:24:20.000Z","value":0.69}],"lighthouse_accessibilityGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"lighthouse_best-practices":[{"date":"2021-10-13T20:24:20.000Z","value":0.67},{"date":"2021-12-26T07:38:47.000Z","value":0.6},{"date":"2022-01-02T07:26:51.000Z","value":0.67},{"date":"2022-03-06T07:47:18.000Z","value":0.6},{"date":"2022-03-13T07:40:40.000Z","value":0.67}],"lighthouse_best-practicesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"},{"date":"2021-12-26T07:38:47.000Z","value":"C"},{"date":"2022-01-02T07:26:51.000Z","value":"B"},{"date":"2022-03-06T07:47:18.000Z","value":"C"},{"date":"2022-03-13T07:40:40.000Z","value":"B"}],"lighthouse_seo":[{"date":"2021-10-13T20:24:20.000Z","value":0.75}],"lighthouse_seoGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2021-10-13T20:24:20.000Z","value":0.5}],"lighthouse_pwaGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"D"}],"statsGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://www.univ-gustave-eiffel.fr/international/etudiants-internationaux":{"404":[{"date":"2021-10-13T20:24:20.000Z","value":15},{"date":"2021-11-21T07:33:25.000Z","value":14},{"date":"2022-01-30T07:33:51.000Z","value":15},{"date":"2022-05-08T08:19:15.000Z","value":16}],"httpGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"nmapGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"nmapOpenPortsCount":[{"date":"2021-10-13T20:24:20.000Z","value":4}],"nmapOpenPortsGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2021-10-13T20:24:20.000Z","value":false},{"date":"2021-11-28T07:29:49.000Z","value":true},{"date":"2022-01-09T07:39:36.000Z","value":false}],"testsslExpireDate":[{"date":"2021-10-13T20:24:20.000Z","value":"2021-12-25T23:59:00.000Z"},{"date":"2022-01-09T07:39:36.000Z","value":"2022-12-11T23:59:00.000Z"}],"testsslGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"cookiesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"cookiesCount":[{"date":"2021-10-13T20:24:20.000Z","value":1}],"trackersGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"C"}],"trackersCount":[{"date":"2021-10-13T20:24:20.000Z","value":5}],"lighthouse_performance":[{"date":"2021-10-13T20:24:20.000Z","value":0.5669013977050781},{"date":"2021-10-15T15:33:51.000Z","value":0.5669061660766601},{"date":"2021-10-17T07:21:34.000Z","value":0.566900634765625},{"date":"2021-10-24T07:10:29.000Z","value":0.5669118881225585},{"date":"2021-10-24T15:00:33.000Z","value":0.5669157028198242},{"date":"2021-10-31T07:12:28.000Z","value":0.566891860961914},{"date":"2021-11-07T07:08:06.000Z","value":0.5669546127319336},{"date":"2021-11-14T07:09:39.000Z","value":0.5669870376586914},{"date":"2021-11-21T07:33:25.000Z","value":0.5669330596923828},{"date":"2021-11-28T07:29:49.000Z","value":0.5669349670410156},{"date":"2021-12-12T07:29:23.000Z","value":0.5669321060180664},{"date":"2021-12-19T07:32:17.000Z","value":0.5669332504272461},{"date":"2022-01-09T07:39:36.000Z","value":0.566935920715332},{"date":"2022-01-16T07:37:17.000Z","value":0.5669342041015625},{"date":"2022-01-23T07:32:00.000Z","value":0.5669574737548828},{"date":"2022-01-30T07:33:51.000Z","value":0.5669530868530274},{"date":"2022-02-13T07:41:50.000Z","value":0.566954231262207},{"date":"2022-02-20T07:45:41.000Z","value":0.566952896118164},{"date":"2022-02-27T07:42:48.000Z","value":0.5669549942016602},{"date":"2022-03-06T07:47:18.000Z","value":0.5669586181640625},{"date":"2022-03-13T07:40:40.000Z","value":0.5669557571411132},{"date":"2022-03-20T07:46:50.000Z","value":0.5669546127319336},{"date":"2022-03-27T07:51:04.000Z","value":0.5669557571411132},{"date":"2022-04-03T07:54:20.000Z","value":0.5669588088989258},{"date":"2022-04-10T07:48:52.000Z","value":0.5670124053955078},{"date":"2022-04-17T08:07:21.000Z","value":0.5670120239257812},{"date":"2022-04-24T08:05:55.000Z","value":0.5669601440429688},{"date":"2022-05-01T08:36:22.000Z","value":0.5669563293457032},{"date":"2022-05-08T08:19:15.000Z","value":0.5670099258422852},{"date":"2022-05-15T08:24:41.000Z","value":0.5669574737548828},{"date":"2022-05-22T08:05:00.000Z","value":0.5669607162475586},{"date":"2022-05-29T08:13:48.893Z","value":0.5669595718383789}],"lighthouse_performanceGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"C"}],"lighthouse_accessibility":[{"date":"2021-10-13T20:24:20.000Z","value":0.86}],"lighthouse_accessibilityGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-10-13T20:24:20.000Z","value":0.8}],"lighthouse_best-practicesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"lighthouse_seo":[{"date":"2021-10-13T20:24:20.000Z","value":0.85}],"lighthouse_seoGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-10-13T20:24:20.000Z","value":0.83}],"lighthouse_pwaGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"statsGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://datakairos.unif.fr/":{"404":[{"date":"2022-01-16T07:37:17.000Z","value":"A+"}],"httpGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"nmapGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"D"},{"date":"2021-10-15T15:33:51.000Z","value":"B"}],"nmapOpenPortsCount":[{"date":"2021-10-13T20:24:20.000Z","value":5}],"nmapOpenPortsGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2021-10-13T20:24:20.000Z","value":false},{"date":"2022-03-20T07:46:50.000Z","value":true},{"date":"2022-03-27T07:51:04.000Z","value":false}],"testsslExpireDate":[{"date":"2021-10-13T20:24:20.000Z","value":"2021-12-18T15:25:00.000Z"},{"date":"2021-11-21T07:33:25.000Z","value":"2022-02-16T18:25:00.000Z"},{"date":"2022-01-23T07:32:00.000Z","value":"2022-04-17T23:10:00.000Z"},{"date":"2022-03-27T07:51:04.000Z","value":"2022-06-17T06:01:00.000Z"}],"testsslGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"cookiesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"cookiesCount":[{"date":"2021-10-13T20:24:20.000Z","value":0}],"trackersGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"C"},{"date":"2022-02-13T07:41:50.000Z","value":"B"}],"trackersCount":[{"date":"2021-10-13T20:24:20.000Z","value":6},{"date":"2022-02-13T07:41:50.000Z","value":1}],"lighthouse_performance":[{"date":"2021-10-13T20:24:20.000Z","value":0}],"lighthouse_performanceGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"lighthouse_accessibility":[{"date":"2021-10-13T20:24:20.000Z","value":0.97}],"lighthouse_accessibilityGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-10-13T20:24:20.000Z","value":0.93}],"lighthouse_best-practicesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-10-13T20:24:20.000Z","value":0.82}],"lighthouse_seoGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2021-10-13T20:24:20.000Z","value":0.33}],"lighthouse_pwaGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"E"}],"statsGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://ent.univ-paris13.fr/":{"404":[{"date":"2022-01-16T07:37:17.000Z","value":"A+"}],"httpGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"nmapGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"},{"date":"2021-10-15T21:18:05.000Z","value":"D"},{"date":"2021-10-17T07:21:34.000Z","value":"B"}],"nmapOpenPortsCount":[{"date":"2021-10-13T20:24:20.000Z","value":6},{"date":"2022-05-08T08:19:15.000Z","value":7}],"nmapOpenPortsGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"cookiesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"C"}],"cookiesCount":[{"date":"2021-10-13T20:24:20.000Z","value":3}],"trackersGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"trackersCount":[{"date":"2021-10-13T20:24:20.000Z","value":14}],"lighthouse_performance":[{"date":"2021-10-13T20:24:20.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2021-10-13T20:24:20.000Z","value":0.71}],"lighthouse_accessibilityGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"lighthouse_best-practices":[{"date":"2021-10-13T20:24:20.000Z","value":0.8}],"lighthouse_best-practicesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"lighthouse_seo":[{"date":"2021-10-13T20:24:20.000Z","value":0.83}],"lighthouse_seoGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2021-10-13T20:24:20.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"D"}],"statsGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2021-10-15T15:33:51.000Z","value":false}],"testsslExpireDate":[{"date":"2021-10-15T15:33:51.000Z","value":"2021-11-23T23:59:00.000Z"},{"date":"2022-02-13T07:41:50.000Z","value":"2022-11-10T23:59:00.000Z"}],"testsslGrade":[{"date":"2021-10-15T15:33:51.000Z","value":"B"},{"date":"2021-10-15T21:18:05.000Z","value":"F"},{"date":"2022-02-13T07:41:50.000Z","value":"B"}],"declaration-a11y":[],"declaration-rgpd":[]}}'),k=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d(),{children:(0,l.jsx)("title",{children:"DashLord - evolutions"})}),(0,l.jsx)(b,{trends:y})]})}},68257:function(e,a,t){"use strict";t.d(a,{s:function(){return n}});var l=t(85893),u=(t(67294),t(94184)),d=t.n(u),r=t(79223),v=t(73973),s=t(83206),T=t(41664),Z=t.n(T),o=t(99522),i=t.n(o),n=function(e){var a=e.title,t=e.children,u=e.info,T=e.url,o=e.urlText,n=void 0===o?"":o,c=e.className,h=e.isExternal,p=void 0!==h&&h;return(0,l.jsxs)("div",{className:d()(i().container,c),children:[(0,l.jsxs)("div",{className:i().banner,children:[(0,l.jsx)("h5",{className:i().mainTitle,children:a}),u&&(0,l.jsx)(r.Z,{overlay:u,children:(0,l.jsx)(v.Z,{size:20,style:{marginLeft:5,cursor:"pointer"}})}),T&&(p?(0,l.jsx)("a",{style:{float:"right"},href:T,target:"_blank",rel:"noreferrer noopener",children:n}):(0,l.jsx)(Z(),{prefetch:!1,href:T,children:(0,l.jsxs)("a",{style:{float:"right"},children:[n,(0,l.jsx)(s.Z,{})]})}))]}),(0,l.jsx)("div",{className:i().body,children:t})]})}},99522:function(e){e.exports={container:"panel_container__s3lQL",banner:"panel_banner__IDWUZ",mainTitle:"panel_mainTitle__N5MWp",body:"panel_body___c3aS"}}},function(e){e.O(0,[241,774,888,179],(function(){return a=21105,e(e.s=a);var a}));var a=e.O();_N_E=a}]);