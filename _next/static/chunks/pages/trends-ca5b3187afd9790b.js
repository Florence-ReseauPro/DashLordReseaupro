(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{37434:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trends",function(){return t(74650)}])},74650:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return y}});var l=t(85893),u=t(9008),r=t(67294),d=t(45697),s=t.n(d);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function i(e,a){if(null==e)return{};var t,l,u=function(e,a){if(null==e)return{};var t,l,u={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||(u[t]=e[t]);return u}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var v=(0,r.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,u=e.size,d=void 0===u?24:u,s=i(e,["color","size"]);return r.createElement("svg",o({ref:a,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),r.createElement("polyline",{points:"17 6 23 6 23 12"}))}));v.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},v.displayName="TrendingUp";var n=v;function T(){return(T=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function Z(e,a){if(null==e)return{};var t,l,u=function(e,a){if(null==e)return{};var t,l,u={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||(u[t]=e[t]);return u}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var h=(0,r.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,u=e.size,d=void 0===u?24:u,s=Z(e,["color","size"]);return r.createElement("svg",T({ref:a,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.createElement("polyline",{points:"23 18 13.5 8.5 8.5 13.5 1 6"}),r.createElement("polyline",{points:"17 18 23 18 23 12"}))}));h.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},h.displayName="TrendingDown";var c=h,p=t(74041),g=t(18121),f=t(49384),_={testsslGrade:{title:"SSL"},codescanGrade:{title:"Codescan grade"},dependabotGrade:{title:"Dependabot grade"},httpGrade:{title:"HTTP observatory"},lighthouse_performance:{treshold:.1,title:"Lighthouse Performance"},lighthouse_seo:{treshold:.1,title:"Lighthouse SEO"},lighthouse_pwa:{treshold:.1,title:"Lighthouse PWA"},lighthouse_accessibility:{title:"Lighthouse accessibility"},"lighthouse_best-practices":{treshold:.1,title:"Lighthouse best practices"},nmapGrade:{title:"NMAP grade"},nmapOpenPortsGrade:{title:"NMAP open ports grade"},trackersCount:{title:"Trackers count",reverse:!0},cookiesCount:{title:"Cookies count",reverse:!0},uptime:{treshold:1,title:"uptime"},apdex:{treshold:.05,title:"apDex"},"declaration-a11y":{title:"D\xe9claration a11y"},trivyGrade:{title:"Trivy grade"}},G=[{name:"trend",label:"Trend",render:function(e){return function(e,a){var t=_[e],l=a[0],u=a[a.length-1];return e.match(/Grade$/)||"declaration-a11y"===e?(0,f.BE)(u)-(0,f.BE)(l):t.reverse?l-u:u-l}(e.key,e.values)>0?(0,l.jsx)(n,{size:40,style:{stroke:"var(--success)",marginRight:10}}):(0,l.jsx)(c,{size:40,style:{stroke:"var(--error)",marginRight:10}})}},{name:"outil",label:"Outil",render:function(e){return _[e.key].title}},{name:"evolution",label:"Evolution",render:function(e){return e.values.map((function(e){return isNaN(e)?e:Math.floor(1e4*e)/1e4})).filter((function(e,a,t){return 0===a||a===t.length-1})).join(" => ")}}],m=function(e){var a=e.trends,t=Object.keys(a);return t.sort(),(0,l.jsxs)("div",{children:[(0,l.jsx)("br",{}),(0,l.jsx)("h3",{children:"Evolutions sur les 30 derniers jours"}),(0,l.jsx)("br",{}),t.map((function(e){var t=function(e){var a={};return Object.keys(e).filter((function(e){return e in _})).forEach((function(t){var l=e[t].map((function(e){return e.date,e.value}));if(l.length>1){var u=l[0],r=l[l.length-1],d=_[t].treshold;(!d||Math.abs(u-r)>(d||0))&&u!==r&&(a[t]=[u,r])}})),a}(a[e]);return Object.keys(t).length?(0,l.jsx)(g.s,{title:(0,f.p5)(e),url:"/url/".concat(encodeURIComponent((0,f.N0)(e))),children:(0,l.jsx)(p.Table,{columns:G,data:Object.keys(t).map((function(e){return{key:e,values:t[e]}})),rowKey:"key"})},e):null}))]})},b=JSON.parse('{"https://www.fabrique.social.gouv.fr":{},"https://beta.gouv.fr":{},"http://reseaupro.unpidf.fr":{"404":[{"date":"2021-10-13T10:39:16.000Z","value":18}],"httpGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"F"}],"nmapGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"F"}],"nmapOpenPortsCount":[{"date":"2021-10-13T10:39:16.000Z","value":5}],"nmapOpenPortsGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2021-10-13T10:39:16.000Z","value":true}],"testsslExpireDate":[{"date":"2021-10-13T10:39:16.000Z","value":"2020-01-16T12:00:00.000Z"}],"testsslGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"T"}],"cookiesGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"C"}],"cookiesCount":[{"date":"2021-10-13T10:39:16.000Z","value":3}],"trackersGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"C"}],"trackersCount":[{"date":"2021-10-13T10:39:16.000Z","value":8}],"lighthouse_performance":[{"date":"2021-10-13T10:39:16.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2021-10-13T10:39:16.000Z","value":1}],"lighthouse_accessibilityGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-10-13T10:39:16.000Z","value":0.73}],"lighthouse_best-practicesGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"B"}],"lighthouse_seo":[{"date":"2021-10-13T10:39:16.000Z","value":0.92}],"lighthouse_seoGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-10-13T10:39:16.000Z","value":0.25}],"lighthouse_pwaGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"E"}],"statsGrade":[{"date":"2021-10-13T10:39:16.000Z","value":"F"}],"apdex":[{"date":"2021-10-13T11:11:43.000Z","value":0.938},{"date":"2021-10-13T20:24:20.000Z","value":0.962},{"date":"2021-10-15T15:33:51.000Z","value":1},{"date":"2021-10-17T07:21:34.000Z","value":0.992}],"apdexGrade":[{"date":"2021-10-13T11:11:43.000Z","value":"F"},{"date":"2021-10-13T20:24:20.000Z","value":"D"},{"date":"2021-10-15T15:33:51.000Z","value":"A"}],"uptime":[{"date":"2021-10-13T11:11:43.000Z","value":100}],"uptimeGrade":[{"date":"2021-10-13T11:11:43.000Z","value":"A"}],"declaration-a11y":[]},"https://unif.fr/":{"404":[{"date":"2021-10-13T20:24:20.000Z","value":10},{"date":"2021-10-31T07:12:28.000Z","value":7},{"date":"2021-11-28T07:29:49.000Z","value":8}],"httpGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"apdex":[{"date":"2021-10-13T20:24:20.000Z","value":0.952},{"date":"2021-10-15T15:33:51.000Z","value":1},{"date":"2021-10-17T07:21:34.000Z","value":0.996}],"apdexGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"E"},{"date":"2021-10-15T15:33:51.000Z","value":"A"}],"uptime":[{"date":"2021-10-13T20:24:20.000Z","value":100}],"uptimeGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2021-10-13T20:24:20.000Z","value":false}],"testsslExpireDate":[{"date":"2021-10-13T20:24:20.000Z","value":"2022-01-01T20:59:00.000Z"},{"date":"2021-12-12T07:29:23.000Z","value":"2022-03-05T21:55:00.000Z"}],"testsslGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"cookiesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"C"}],"cookiesCount":[{"date":"2021-10-13T20:24:20.000Z","value":3},{"date":"2021-12-12T07:29:23.000Z","value":4}],"trackersGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"C"},{"date":"2022-01-16T07:37:17.000Z","value":"F"}],"trackersCount":[{"date":"2021-10-13T20:24:20.000Z","value":7},{"date":"2021-12-12T07:29:23.000Z","value":9},{"date":"2022-01-16T07:37:17.000Z","value":11}],"lighthouse_performance":[{"date":"2021-10-13T20:24:20.000Z","value":1},{"date":"2021-12-12T07:29:23.000Z","value":0.9977653503417969},{"date":"2021-12-19T07:32:17.000Z","value":0.9977548599243165},{"date":"2021-12-26T07:38:47.000Z","value":0.99776611328125},{"date":"2022-01-02T07:26:51.000Z","value":0.9977649688720703},{"date":"2022-01-09T07:39:36.000Z","value":1},{"date":"2022-01-16T07:37:17.000Z","value":0.7477737426757812},{"date":"2022-01-23T07:32:00.000Z","value":0.7477733612060546},{"date":"2022-01-30T07:33:51.000Z","value":0.7478565216064453},{"date":"2022-02-13T07:40:46.008Z","value":0.7478118896484375}],"lighthouse_performanceGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"},{"date":"2022-01-16T07:37:17.000Z","value":"B"}],"lighthouse_accessibility":[{"date":"2021-10-13T20:24:20.000Z","value":0.93}],"lighthouse_accessibilityGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-10-13T20:24:20.000Z","value":0.87}],"lighthouse_best-practicesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-10-13T20:24:20.000Z","value":0.92}],"lighthouse_seoGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-10-13T20:24:20.000Z","value":0.42},{"date":"2021-12-12T07:29:23.000Z","value":0.5}],"lighthouse_pwaGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"D"}],"statsGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"nmapGrade":[{"date":"2021-10-15T15:33:51.000Z","value":"F"},{"date":"2021-10-17T07:21:34.000Z","value":"B"},{"date":"2021-10-24T07:10:29.000Z","value":"F"},{"date":"2021-11-14T07:09:39.000Z","value":"B"},{"date":"2021-11-21T07:33:25.000Z","value":"F"},{"date":"2021-12-19T07:32:17.000Z","value":"B"},{"date":"2021-12-26T07:38:47.000Z","value":"F"},{"date":"2022-01-23T07:32:00.000Z","value":"E"},{"date":"2022-01-30T07:33:51.000Z","value":"F"}],"nmapOpenPortsCount":[{"date":"2021-10-15T15:33:51.000Z","value":7},{"date":"2021-11-14T07:09:39.000Z","value":6},{"date":"2021-11-21T07:33:25.000Z","value":7},{"date":"2022-01-16T07:37:17.000Z","value":8}],"nmapOpenPortsGrade":[{"date":"2021-10-15T15:33:51.000Z","value":"F"}],"declaration-a11y":[]},"https://www.parisnanterre.fr/welcome-desk/":{"404":[{"date":"2021-10-13T20:24:20.000Z","value":80},{"date":"2021-11-21T07:33:25.000Z","value":42},{"date":"2021-11-28T07:29:49.000Z","value":44},{"date":"2021-12-12T07:29:23.000Z","value":41},{"date":"2021-12-19T07:32:17.000Z","value":42},{"date":"2022-01-02T07:26:51.000Z","value":43},{"date":"2022-01-09T07:39:36.000Z","value":41},{"date":"2022-01-16T07:37:17.000Z","value":42},{"date":"2022-01-23T07:32:00.000Z","value":40},{"date":"2022-02-13T07:40:46.008Z","value":42}],"httpGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"nmapGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"},{"date":"2021-10-24T15:00:33.000Z","value":"B"},{"date":"2021-10-31T07:12:28.000Z","value":"F"},{"date":"2021-12-12T07:29:23.000Z","value":"B"},{"date":"2021-12-19T07:32:17.000Z","value":"F"}],"nmapOpenPortsCount":[{"date":"2021-10-13T20:24:20.000Z","value":2},{"date":"2021-10-15T15:33:51.000Z","value":3}],"nmapOpenPortsGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"},{"date":"2021-10-15T15:33:51.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2021-10-13T20:24:20.000Z","value":false}],"testsslExpireDate":[{"date":"2021-10-13T20:24:20.000Z","value":"2022-09-08T23:59:00.000Z"},{"date":"2021-10-15T15:33:51.000Z","value":"2022-07-28T00:00:00.000Z"}],"testsslGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"cookiesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"cookiesCount":[{"date":"2021-10-13T20:24:20.000Z","value":1}],"trackersGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"},{"date":"2021-10-15T15:33:51.000Z","value":"A"},{"date":"2021-11-21T07:33:25.000Z","value":"F"}],"trackersCount":[{"date":"2021-10-13T20:24:20.000Z","value":36},{"date":"2021-10-15T15:33:51.000Z","value":0},{"date":"2021-11-21T07:33:25.000Z","value":33},{"date":"2021-12-12T07:29:23.000Z","value":37},{"date":"2021-12-19T07:32:17.000Z","value":32},{"date":"2022-01-02T07:26:51.000Z","value":31},{"date":"2022-01-09T07:39:36.000Z","value":36},{"date":"2022-01-16T07:37:17.000Z","value":34},{"date":"2022-01-23T07:32:00.000Z","value":33},{"date":"2022-01-30T07:33:51.000Z","value":40},{"date":"2022-02-13T07:40:46.008Z","value":36}],"lighthouse_performance":[{"date":"2021-10-13T20:24:20.000Z","value":0},{"date":"2021-11-21T07:33:25.000Z","value":0.058823585510253906},{"date":"2021-11-28T07:29:49.000Z","value":0.057132911682128903},{"date":"2021-12-12T07:29:23.000Z","value":0.05788841247558594},{"date":"2021-12-19T07:32:17.000Z","value":0.05779743194580078},{"date":"2021-12-26T07:38:47.000Z","value":0.041563796997070315},{"date":"2022-01-02T07:26:51.000Z","value":0.04168415069580078},{"date":"2022-01-09T07:39:36.000Z","value":0.042226219177246095},{"date":"2022-01-16T07:37:17.000Z","value":0.048586463928222655},{"date":"2022-01-23T07:32:00.000Z","value":0.04813652038574219},{"date":"2022-01-30T07:33:51.000Z","value":0.04823246002197266},{"date":"2022-02-13T07:40:46.008Z","value":0.043111419677734374}],"lighthouse_performanceGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"lighthouse_accessibility":[{"date":"2021-10-13T20:24:20.000Z","value":0.85},{"date":"2021-11-21T07:33:25.000Z","value":0.79}],"lighthouse_accessibilityGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"},{"date":"2021-11-21T07:33:25.000Z","value":"B"}],"lighthouse_best-practices":[{"date":"2021-10-13T20:24:20.000Z","value":0.8},{"date":"2021-11-21T07:33:25.000Z","value":0.67},{"date":"2022-01-16T07:37:17.000Z","value":0.73}],"lighthouse_best-practicesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"lighthouse_seo":[{"date":"2021-10-13T20:24:20.000Z","value":0.81},{"date":"2021-11-21T07:33:25.000Z","value":0.57},{"date":"2021-12-12T07:29:23.000Z","value":0.76}],"lighthouse_seoGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"},{"date":"2021-11-21T07:33:25.000Z","value":"C"},{"date":"2021-12-12T07:29:23.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2021-10-13T20:24:20.000Z","value":0.42},{"date":"2021-11-21T07:33:25.000Z","value":0.17},{"date":"2021-12-12T07:29:23.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"D"},{"date":"2021-11-21T07:33:25.000Z","value":"E"},{"date":"2021-12-12T07:29:23.000Z","value":"D"}],"statsGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"declaration-a11y":[]},"https://parisregion.eu/parisregionfp.html#welcome":{"404":[{"date":"2021-10-13T20:24:20.000Z","value":17}],"httpGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"nmapGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2021-10-13T20:24:20.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2021-10-13T20:24:20.000Z","value":true},{"date":"2021-10-15T15:33:51.000Z","value":false}],"testsslExpireDate":[{"date":"2021-10-13T20:24:20.000Z","value":"2021-10-19T09:50:00.000Z"},{"date":"2021-10-15T15:33:51.000Z","value":"2022-01-13T08:08:00.000Z"},{"date":"2021-12-19T07:32:17.000Z","value":"2022-03-14T07:10:00.000Z"},{"date":"2022-02-13T07:40:46.008Z","value":"2022-05-13T06:12:00.000Z"}],"testsslGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"cookiesCount":[{"date":"2021-10-13T20:24:20.000Z","value":2}],"trackersGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"C"}],"trackersCount":[{"date":"2021-10-13T20:24:20.000Z","value":3}],"lighthouse_performance":[{"date":"2021-10-13T20:24:20.000Z","value":0.4685770034790039},{"date":"2021-10-15T15:33:51.000Z","value":0.468583869934082},{"date":"2021-10-17T07:21:34.000Z","value":0.4685823440551758},{"date":"2021-10-24T07:10:29.000Z","value":0.46858558654785154},{"date":"2021-10-24T15:00:33.000Z","value":0.4685771942138672},{"date":"2021-10-31T07:12:28.000Z","value":0.46858558654785154},{"date":"2021-11-07T07:08:06.000Z","value":0.46847991943359374},{"date":"2021-11-14T07:09:39.000Z","value":0.46848163604736326},{"date":"2021-11-21T07:33:25.000Z","value":0.46848697662353517},{"date":"2021-11-28T07:29:49.000Z","value":0.4684904098510742},{"date":"2021-12-12T07:29:23.000Z","value":0.4684919357299805},{"date":"2021-12-19T07:32:17.000Z","value":0.46848697662353517},{"date":"2021-12-26T07:38:47.000Z","value":0.4684902191162109},{"date":"2022-01-02T07:26:51.000Z","value":0.46848506927490235},{"date":"2022-01-09T07:39:36.000Z","value":0.4679872512817383},{"date":"2022-01-16T07:37:17.000Z","value":0.4679853439331055},{"date":"2022-01-23T07:32:00.000Z","value":0.46798362731933596},{"date":"2022-01-30T07:33:51.000Z","value":0.4679853439331055},{"date":"2022-02-13T07:40:46.008Z","value":0.467987060546875}],"lighthouse_performanceGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"D"}],"lighthouse_accessibility":[{"date":"2021-10-13T20:24:20.000Z","value":0.69}],"lighthouse_accessibilityGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"lighthouse_best-practices":[{"date":"2021-10-13T20:24:20.000Z","value":0.67},{"date":"2021-12-26T07:38:47.000Z","value":0.6},{"date":"2022-01-02T07:26:51.000Z","value":0.67}],"lighthouse_best-practicesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"},{"date":"2021-12-26T07:38:47.000Z","value":"C"},{"date":"2022-01-02T07:26:51.000Z","value":"B"}],"lighthouse_seo":[{"date":"2021-10-13T20:24:20.000Z","value":0.75}],"lighthouse_seoGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2021-10-13T20:24:20.000Z","value":0.5}],"lighthouse_pwaGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"D"}],"statsGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"declaration-a11y":[]},"https://www.univ-gustave-eiffel.fr/international/etudiants-internationaux":{"404":[{"date":"2021-10-13T20:24:20.000Z","value":15},{"date":"2021-11-21T07:33:25.000Z","value":14},{"date":"2022-01-30T07:33:51.000Z","value":15}],"httpGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"nmapGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"nmapOpenPortsCount":[{"date":"2021-10-13T20:24:20.000Z","value":4}],"nmapOpenPortsGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2021-10-13T20:24:20.000Z","value":false},{"date":"2021-11-28T07:29:49.000Z","value":true},{"date":"2022-01-09T07:39:36.000Z","value":false}],"testsslExpireDate":[{"date":"2021-10-13T20:24:20.000Z","value":"2021-12-25T23:59:00.000Z"},{"date":"2022-01-09T07:39:36.000Z","value":"2022-12-11T23:59:00.000Z"}],"testsslGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"cookiesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"cookiesCount":[{"date":"2021-10-13T20:24:20.000Z","value":1}],"trackersGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"C"}],"trackersCount":[{"date":"2021-10-13T20:24:20.000Z","value":5}],"lighthouse_performance":[{"date":"2021-10-13T20:24:20.000Z","value":0.5669013977050781},{"date":"2021-10-15T15:33:51.000Z","value":0.5669061660766601},{"date":"2021-10-17T07:21:34.000Z","value":0.566900634765625},{"date":"2021-10-24T07:10:29.000Z","value":0.5669118881225585},{"date":"2021-10-24T15:00:33.000Z","value":0.5669157028198242},{"date":"2021-10-31T07:12:28.000Z","value":0.566891860961914},{"date":"2021-11-07T07:08:06.000Z","value":0.5669546127319336},{"date":"2021-11-14T07:09:39.000Z","value":0.5669870376586914},{"date":"2021-11-21T07:33:25.000Z","value":0.5669330596923828},{"date":"2021-11-28T07:29:49.000Z","value":0.5669349670410156},{"date":"2021-12-12T07:29:23.000Z","value":0.5669321060180664},{"date":"2021-12-19T07:32:17.000Z","value":0.5669332504272461},{"date":"2022-01-09T07:39:36.000Z","value":0.566935920715332},{"date":"2022-01-16T07:37:17.000Z","value":0.5669342041015625},{"date":"2022-01-23T07:32:00.000Z","value":0.5669574737548828},{"date":"2022-01-30T07:33:51.000Z","value":0.5669530868530274},{"date":"2022-02-13T07:40:46.008Z","value":0.566954231262207}],"lighthouse_performanceGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"C"}],"lighthouse_accessibility":[{"date":"2021-10-13T20:24:20.000Z","value":0.86}],"lighthouse_accessibilityGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-10-13T20:24:20.000Z","value":0.8}],"lighthouse_best-practicesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"lighthouse_seo":[{"date":"2021-10-13T20:24:20.000Z","value":0.85}],"lighthouse_seoGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-10-13T20:24:20.000Z","value":0.83}],"lighthouse_pwaGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"statsGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"declaration-a11y":[]},"https://datakairos.unif.fr/":{"404":[{"date":"2022-01-16T07:37:17.000Z","value":"A+"}],"httpGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"nmapGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"D"},{"date":"2021-10-15T15:33:51.000Z","value":"B"}],"nmapOpenPortsCount":[{"date":"2021-10-13T20:24:20.000Z","value":5}],"nmapOpenPortsGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2021-10-13T20:24:20.000Z","value":false}],"testsslExpireDate":[{"date":"2021-10-13T20:24:20.000Z","value":"2021-12-18T15:25:00.000Z"},{"date":"2021-11-21T07:33:25.000Z","value":"2022-02-16T18:25:00.000Z"},{"date":"2022-01-23T07:32:00.000Z","value":"2022-04-17T23:10:00.000Z"}],"testsslGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"cookiesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"cookiesCount":[{"date":"2021-10-13T20:24:20.000Z","value":0}],"trackersGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"C"},{"date":"2022-02-13T07:40:46.008Z","value":"B"}],"trackersCount":[{"date":"2021-10-13T20:24:20.000Z","value":6},{"date":"2022-02-13T07:40:46.008Z","value":1}],"lighthouse_performance":[{"date":"2021-10-13T20:24:20.000Z","value":0}],"lighthouse_performanceGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"lighthouse_accessibility":[{"date":"2021-10-13T20:24:20.000Z","value":0.97}],"lighthouse_accessibilityGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-10-13T20:24:20.000Z","value":0.93}],"lighthouse_best-practicesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-10-13T20:24:20.000Z","value":0.82}],"lighthouse_seoGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2021-10-13T20:24:20.000Z","value":0.33}],"lighthouse_pwaGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"E"}],"statsGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"declaration-a11y":[]},"https://ent.univ-paris13.fr/":{"404":[{"date":"2022-01-16T07:37:17.000Z","value":"A+"}],"httpGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"nmapGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"},{"date":"2021-10-15T21:18:05.000Z","value":"D"},{"date":"2021-10-17T07:21:34.000Z","value":"B"}],"nmapOpenPortsCount":[{"date":"2021-10-13T20:24:20.000Z","value":6}],"nmapOpenPortsGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"cookiesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"C"}],"cookiesCount":[{"date":"2021-10-13T20:24:20.000Z","value":3}],"trackersGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"F"}],"trackersCount":[{"date":"2021-10-13T20:24:20.000Z","value":14}],"lighthouse_performance":[{"date":"2021-10-13T20:24:20.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2021-10-13T20:24:20.000Z","value":0.71}],"lighthouse_accessibilityGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"lighthouse_best-practices":[{"date":"2021-10-13T20:24:20.000Z","value":0.8}],"lighthouse_best-practicesGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"lighthouse_seo":[{"date":"2021-10-13T20:24:20.000Z","value":0.83}],"lighthouse_seoGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2021-10-13T20:24:20.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"D"}],"statsGrade":[{"date":"2021-10-13T20:24:20.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2021-10-15T15:33:51.000Z","value":false}],"testsslExpireDate":[{"date":"2021-10-15T15:33:51.000Z","value":"2021-11-23T23:59:00.000Z"},{"date":"2022-02-13T07:40:46.008Z","value":"2022-11-10T23:59:00.000Z"}],"testsslGrade":[{"date":"2021-10-15T15:33:51.000Z","value":"B"},{"date":"2021-10-15T21:18:05.000Z","value":"F"},{"date":"2022-02-13T07:40:46.008Z","value":"B"}],"declaration-a11y":[]}}'),y=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.default,{children:(0,l.jsx)("title",{children:"DashLord - evolutions"})}),(0,l.jsx)(m,{trends:b})]})}},18121:function(e,a,t){"use strict";t.d(a,{s:function(){return T}});var l=t(85893),u=(t(67294),t(94184)),r=t.n(u),d=t(79223),s=t(73973),o=t(83206),i=t(41664),v=t(75670),n=t.n(v),T=function(e){var a=e.title,t=e.children,u=e.info,v=e.url,T=e.urlText,Z=void 0===T?"":T,h=e.className,c=e.isExternal,p=void 0!==c&&c;return(0,l.jsxs)("div",{className:r()(n().container,h),children:[(0,l.jsxs)("div",{className:n().banner,children:[(0,l.jsx)("h5",{className:n().mainTitle,children:a}),u&&(0,l.jsx)(d.Z,{overlay:u,children:(0,l.jsx)(s.Z,{size:20,style:{marginLeft:5,cursor:"pointer"}})}),v&&(p?(0,l.jsx)("a",{style:{float:"right"},href:v,target:"_blank",rel:"noreferrer noopener",children:Z}):(0,l.jsx)(i.default,{prefetch:!1,href:v,children:(0,l.jsxs)("a",{style:{float:"right"},children:[Z,(0,l.jsx)(o.Z,{})]})}))]}),(0,l.jsx)("div",{className:n().body,children:t})]})}},75670:function(e){e.exports={container:"panel_container__s3lQL",banner:"panel_banner__IDWUZ",mainTitle:"panel_mainTitle__N5MWp",body:"panel_body___c3aS"}}},function(e){e.O(0,[241,774,888,179],(function(){return a=37434,e(e.s=a);var a}));var a=e.O();_N_E=a}]);