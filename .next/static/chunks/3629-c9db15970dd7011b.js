(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3629],{762:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},1370:(e,t,r)=>{"use strict";let n;r.d(t,{T:()=>a,V:()=>s});let s=e=>{n=e},a=()=>n},1653:(e,t,r)=>{"use strict";r.d(t,{r:()=>a});var n=r(6937),s=r(1370);let a={type:"3rdParty",init(e){(0,n.P)(e.options.react),(0,s.V)(e)}}},3629:(e,t,r)=>{"use strict";r.d(t,{xC:()=>j,Bd:()=>_});var n=r(2115),s=r(762),a=r.n(s),i=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;Object.create(null);let l=(e,t,r,n)=>{let s=[r,{code:t,...n||{}}];if(e?.services?.logger?.forward)return e.services.logger.forward(s,"warn","react-i18next::",!0);f(s[0])&&(s[0]=`react-i18next:: ${s[0]}`),e?.services?.logger?.warn?e.services.logger.warn(...s):console?.warn&&console.warn(...s)},o={},u=(e,t,r,n)=>{f(r)&&o[r]||(f(r)&&(o[r]=new Date),l(e,t,r,n))},c=(e,t)=>()=>{if(e.isInitialized)t();else{let r=()=>{setTimeout(()=>{e.off("initialized",r)},0),t()};e.on("initialized",r)}},p=(e,t,r)=>{e.loadNamespaces(t,c(e,r))},d=(e,t,r,n)=>{if(f(r)&&(r=[r]),e.options.preload&&e.options.preload.indexOf(t)>-1)return p(e,r,n);r.forEach(t=>{0>e.options.ns.indexOf(t)&&e.options.ns.push(t)}),e.loadLanguages(t,c(e,n))},g=(e,t,r={})=>t.languages&&t.languages.length?t.hasLoadedNamespace(e,{lng:r.lng,precheck:(t,n)=>{if(r.bindI18n?.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!n(t.isLanguageChangingTo,e))return!1}}):(u(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0),f=e=>"string"==typeof e,m=e=>"object"==typeof e&&null!==e;var h=r(6937);let y=(e,t)=>{if(!e)return!1;let r=e.props?.children??e.children;return t?r.length>0:!!r},N=e=>{if(!e)return[];let t=e.props?.children??e.children;return e.props?.i18nIsDynamicList?E(t):t},b=e=>Array.isArray(e)&&e.every(isValidElement),E=e=>Array.isArray(e)?e:[e],w=(e,t)=>{let r={...t};return r.props=Object.assign(e.props,t.props),r},k=(e,t,r)=>{let n=e.key||t,s=cloneElement(e,{key:n});return!s.props||!s.props.children||0>r.indexOf(`${t}/>`)&&0>r.indexOf(`${t} />`)?s:createElement(function(){return createElement(Fragment,null,s)},{key:n})},x=(e,t)=>e.map((e,r)=>k(e,r,t)),O=(e,t)=>{let r={};return Object.keys(e).forEach(n=>{Object.assign(r,{[n]:k(e[n],n,t)})}),r};var v=r(1370);r(1653);let C=(0,n.createContext)();class T{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}let I=(e,t)=>{let r=(0,n.useRef)();return(0,n.useEffect)(()=>{r.current=t?r.current:e},[e,t]),r.current},A=(e,t,r,n)=>e.getFixedT(t,r,n),S=(e,t,r,s)=>(0,n.useCallback)(A(e,t,r,s),[e,t,r,s]),_=(e,t={})=>{let{i18n:r}=t,{i18n:s,defaultNS:a}=(0,n.useContext)(C)||{},i=r||s||(0,v.T)();if(i&&!i.reportNamespaces&&(i.reportNamespaces=new T),!i){u(i,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");let e=(e,t)=>f(t)?t:m(t)&&f(t.defaultValue)?t.defaultValue:Array.isArray(e)?e[e.length-1]:e,t=[e,{},!1];return t.t=e,t.i18n={},t.ready=!1,t}i.options.react?.wait&&u(i,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");let l={...(0,h.r)(),...i.options.react,...t},{useSuspense:o,keyPrefix:c}=l,y=e||a||i.options?.defaultNS;y=f(y)?[y]:y||["translation"],i.reportNamespaces.addUsedNamespaces?.(y);let N=(i.isInitialized||i.initializedStoreOnce)&&y.every(e=>g(e,i,l)),b=S(i,t.lng||null,"fallback"===l.nsMode?y:y[0],c),E=()=>b,w=()=>A(i,t.lng||null,"fallback"===l.nsMode?y:y[0],c),[k,x]=(0,n.useState)(E),O=y.join();t.lng&&(O=`${t.lng}${O}`);let _=I(O),j=(0,n.useRef)(!0);(0,n.useEffect)(()=>{let{bindI18n:e,bindI18nStore:r}=l;j.current=!0,N||o||(t.lng?d(i,t.lng,y,()=>{j.current&&x(w)}):p(i,y,()=>{j.current&&x(w)})),N&&_&&_!==O&&j.current&&x(w);let n=()=>{j.current&&x(w)};return e&&i?.on(e,n),r&&i?.store.on(r,n),()=>{j.current=!1,i&&e?.split(" ").forEach(e=>i.off(e,n)),r&&i&&r.split(" ").forEach(e=>i.store.off(e,n))}},[i,O]),(0,n.useEffect)(()=>{j.current&&N&&x(E)},[i,c,N]);let P=[k,i,N];if(P.t=k,P.i18n=i,P.ready=N,N||!N&&!o)return P;throw new Promise(e=>{t.lng?d(i,t.lng,y,()=>e()):p(i,y,()=>e())})};function j({i18n:e,defaultNS:t,children:r}){let s=(0,n.useMemo)(()=>({i18n:e,defaultNS:t}),[e,t]);return(0,n.createElement)(C.Provider,{value:s},r)}},6937:(e,t,r)=>{"use strict";r.d(t,{r:()=>o,P:()=>l});let n=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,s={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xa9","&#169;":"\xa9","&reg;":"\xae","&#174;":"\xae","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},a=e=>s[e],i={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(n,a)},l=(e={})=>{i={...i,...e}},o=()=>i}}]);