(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[573],{698:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/500",function(){return r(3897)}])},3149:function(e,t,r){"use strict";r.d(t,{h:function(){return s}});var n=r(5893),o=r(8834),i=r(2461),a=r(9953),s=function(e){var t=(0,i.r5)(a.Pu.icon);return(0,n.jsxs)(o.Fb,{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("meta",{name:"title",content:e.title}),(0,n.jsx)("meta",{name:"description",content:e.description||"No description was provided for this page."}),(0,n.jsx)("meta",{name:"robots",content:"all"}),(0,n.jsx)("meta",{name:"DC.title",content:e.title}),(0,n.jsx)("meta",{name:"keywords",content:a.Pu.keywords.join(",")}),(0,n.jsx)("meta",{name:"theme-color",content:a.Pu["theme-color"]}),(0,n.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:a.Pu["theme-color"]}),(0,n.jsx)("meta",{name:"msapplication-navbutton-color",content:a.Pu["theme-color"]}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:url",content:a.Pu.url}),(0,n.jsx)("meta",{property:"og:title",content:e.title}),(0,n.jsx)("meta",{property:"og:description",content:e.description||"No description was provided for this page."}),(0,n.jsx)("meta",{property:"og:image",content:a.Pu.image}),(0,n.jsx)("meta",{property:"og:site_name",content:"Made by r1zyn"}),(0,n.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{property:"twitter:url",content:a.Pu.url}),(0,n.jsx)("meta",{property:"twitter:title",content:e.title}),(0,n.jsx)("meta",{property:"twitter:description",content:e.description||"No description was provided for this page."}),(0,n.jsx)("meta",{property:"twitter:image",content:a.Pu.image}),(0,n.jsx)("title",{children:e.title}),(0,n.jsx)("link",{rel:"icon",type:t,href:a.Pu.icon}),(0,n.jsx)("link",{rel:"shortcut icon",type:t,href:a.Pu.icon}),(0,n.jsx)("link",{rel:"apple-touch-icon",type:t,href:a.Pu.icon})]})}},9953:function(e,t,r){"use strict";r.d(t,{Pu:function(){return i},aW:function(){return o},jk:function(){return a}});var n=r(2461),o="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").slice(0,10),i={url:"https://r1zyn.github.io/powerball-simulator/","theme-color":"#ffffff",image:(0,n.up)("/assets/XJY3ZrAQqf5zCq3kZb6obQUF1grJp6k6.png"),icon:(0,n.up)("/assets/c7p3jjI2BFgGszRhVxRjtZdYDFeADlrt.png"),keywords:["lotto","lottery","powerball","simulator"]},a={article:"https://www.rnz.co.nz/news/in-depth/474134/lotto-stores-in-poorest-half-of-nz-account-for-70-percent-of-sales",license:"https://github.com/r1zyn/powerball-simulator/blob/master/LICENSE",github:"https://github.com/r1zyn/powerball-simulator",nextjs:"https://nextjs.org/",nodejs:"https://nodejs.org/",developer:"https://github.com/r1zyn",sockt:"https://sockt.vercel.app/",matrix:"https://matrixdev.xyz/",lotto:"https://mylotto.co.nz/lotto/how-to-play"}},2461:function(e,t,r){"use strict";function n(e){return"/powerball-simulator".concat(e)}function o(e){var t=e.match(/(\.[a-z]{3,})$/g);if(!t)throw Error("Invalid file name provided");return t[0].slice(1,t[0].length-1)}function i(){var e=new Date;return"".concat(e.getDate()," ").concat((function(){var e=new Date().getMonth();switch(e){case 0:return"January";case 1:return"February";case 2:return"March";case 3:return"April";case 4:return"May";case 5:return"June";case 6:return"July";case 7:return"August";case 8:return"September";case 9:return"October";case 10:return"November";case 11:return"December";default:throw Error("Invalid month")}})().slice(0,3)," ").concat(e.getFullYear().toString().slice(2,4))}function a(){var e=new Date().getDay();switch(e){case 0:return"Sunday";case 1:return"Monday";case 2:return"Tuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday";default:throw Error("Invalid day")}}function s(e){var t=document.getElementById(e);t&&window.scrollTo({top:t.offsetTop,behavior:"smooth"})}function c(e){e.lottoNumbers=[],e.finalLottoNumbers=[],e.winningLine=[],e.totalWinnings=0,e.bonusball=0,e.powerball=0,e.lottoNumbers=function(e){for(var t=0;t<10;t++){e.push([]);for(var r=0;r<8;r++){if(r<7){for(var n=u(1,41);e[t].includes(n);)n=u(1,41);e[t].push(n)}if(7===r){for(var o=u(1,10);e[t].includes(o);)o=u(1,10);e[t].push(o)}}}return e}(e.lottoNumbers);var t=function(e,t,r){for(var n=0;n<8;n++)if(n<7){for(var o=u(1,41);e.includes(o);)o=u(1,41);e[n]=o}else if(7===n){for(var i=u(1,10);e.includes(i);)i=u(1,10);e[n]=i}return t=e[6],r=e[7],{winningLine:e,bonusball:t,powerball:r}}(e.winningLine,e.bonusball,e.powerball);e.winningLine=t.winningLine,e.bonusball=t.bonusball,e.powerball=t.powerball;var r=function(e,t,r,n,o,i){for(var a=[0,25111111,35771,1270,110,55,41,15],s=0,c=!1,u=!1,l=0;l<10;l++){t.push([]);for(var p=0;p<8;p++)p<6?e[l][p]==r[p]?(s++,t[l].push({correct:!0,value:e[l][p]})):t[l].push({correct:!1,value:e[l][p]}):6===p?e[l][p]==o?(c=!0,t[l].push({correct:!0,value:e[l][p]})):t[l].push({correct:!1,value:e[l][p]}):7===p&&(e[l][p]==i?(u=!0,t[l].push({correct:!0,value:e[l][p]})):t[l].push({correct:!1,value:e[l][p]}));switch(s){case 6:u&&(n+=a[1]);break;case 5:u&&(c?n+=a[2]:n+=a[3]);break;case 4:u&&(c?n+=a[4]:n+=a[5]);break;case 3:u&&(c?n+=a[6]:n+=a[7]);break;default:n+=a[0]}s=0,c=!1,u=!1}return{finalLottoNumbers:t,totalWinnings:n}}(e.lottoNumbers,e.finalLottoNumbers,e.winningLine,e.totalWinnings,e.bonusball,e.powerball);return e.finalLottoNumbers=r.finalLottoNumbers,e.totalWinnings=r.totalWinnings,{lottoNumbers:e.lottoNumbers,finalLottoNumbers:e.finalLottoNumbers,winningLine:e.winningLine,bonusball:e.bonusball,powerball:e.powerball,totalWinnings:e.totalWinnings}}function u(e,t){return Math.floor(Math.random()*(t-e)+e)}r.d(t,{I0:function(){return c},MH:function(){return u},_3:function(){return i},kI:function(){return s},r5:function(){return o},up:function(){return n},wf:function(){return a}})},3897:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(8834),i=r(3149),a=r(6699),s=r.n(a),c=function(){var e="An internal server error occurred.";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h,{title:"Error ".concat(500," - ").concat(e.replace(".","")),description:e}),(0,n.jsxs)("div",{className:s()["error-container"],children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{className:s()["error-code"],children:500}),(0,n.jsx)("div",{className:s()["error-divider"],children:(0,n.jsx)("h1",{className:s()["error-message"],children:e})})]}),(0,n.jsx)(o.rU,{href:"/",children:(0,n.jsx)("span",{className:s()["return-link"],children:"Return to home"})})]})]})};t.default=c},6699:function(e){e.exports={"error-container":"Error_error-container__Mm7VL","error-code":"Error_error-code__ndALg","error-divider":"Error_error-divider__RyGYm","error-message":"Error_error-message__Bc4bh","return-link":"Error_return-link__fFTOL"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=698)}),_N_E=e.O()}]);