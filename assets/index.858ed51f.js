import{r as e,c as n,o,a as t,b as i,w as a,v as l,F as s,d as r,n as f,t as m,e as u,f as d}from"./vendor.c37dab44.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&n(e)})).observe(document,{childList:!0,subtree:!0})}function n(e){if(e.ep)return;e.ep=!0;const n=function(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?n.credentials="include":"anonymous"===e.crossorigin?n.credentials="omit":n.credentials="same-origin",n}(e);fetch(e.href,n)}}();var c=(e,n)=>{for(const[o,t]of n)e[o]=t;return e};const h={setup(){const o=e({bodyFontSize:"10px",language:"zh-tw",fontContent:n((()=>"zh-tw"===o.language?s.chinese:s.english))}),t=e({fontSize:"1.6em",fontFamilyChinese:"PMingLiU",fontFamilyEnglish:"Arial",lineHeight:"1.4em"}),i=e({fontSize:"1.6em",fontFamilyChinese:"PMingLiU",fontFamilyEnglish:"Arial",lineHeight:"1.4em"}),a=function(e,n){const o=[];for(let t=e;t<=n;t++)o.push(t+"px");return o}(1,30),l=function(e,n){const o=[];for(let t=e;t<=n;t+=.1)o.push(t.toFixed(1)+"em");return o}(1,10),s={chinese:'<p><a href="http://evchk.wikia.com/wiki/%E6%AF%92%E7%94%B7%E7%9A%84%E4%B8%80%E7%94%9F">毒男的一生 - 香港網絡大典 - Wikia</a></p><p>升中四了，還未試過拍拖，但毒男說：「不緊要，依家努力讀書考好會考，第時有錢你荒（慌）無女？」</p><p>結果，毒男克服了一個又一個的考試，升上大學，影畢業相時，發覺好多人都一雙一對，原來大學係撮合情侶既好地方。毒男依然一個，但他說：「不緊要，即將係我踏入社會大展拳腳既時候，亦係我幸福生活既開始！」</p><p>毒男努力工作，三年，五年，七年過去了，依然單身。但他終於達成了心願，成為高收入人仕 － 月薪達二萬零五百蚊。</p><p>毒男年過三十，開始疑惑：「點解我已經係成功人仕，但仲係無女？」更令他驚訝的是，公司不少女同事都同MK型男拍拖結婚，但那些男人可不是事業型喎，例如，Dorothy既男朋友只係中五畢業既Sales，月薪只有一萬八千蚊，比自己足足少了二千多元！點解？唔係努力讀書成為有錢人就有女既咩？</p><p>不知不覺毒男到了中年，身邊已無什麼朋友，自己渡過一個又一個既聖誕節及情人節。</p><p>毒男年老了，孤零零一個坐在公園，回想一生：「自己曾得過什麼？女人的身體是怎麼樣的？和女朋友係海邊共渡平安夜既滋味係點架？高登人不是經常留帖話：『後生時唔好浪費時間，第時有錢你荒無女咩！』我照做了，究竟什麼地方出錯？」</p>',english:'<p><a href="https://en.wikipedia.org/wiki/HTTPS">AngularJS - Wikipedia, the free encyclopedia</a></p><p>AngularJS (commonly referred to as "Angular" or "Angular.js") is an open-source web application framework mainly maintained by Google and by a community of individual as well as group developers and corporations to address many of the challenges encountered in developing single-page applications. It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications.</p><p>The AngularJS library works by first reading the HTML page, which has embedded into it additional custom tag attributes. Angular interprets those attributes as directives to bind input or output parts of the page to a model that is represented by standard JavaScript variables. The values of those JavaScript variables can be manually set within the code, or retrieved from static or dynamic JSON resources.</p><p>According to JavaScript analytics service Libscore, AngularJS is used on the websites of NBC, Walgreens, Intel, Sprint, ABC News, and approximately 8,400 other sites out of 1 million tested in July 2015.[1]</p><p>AngularJS is the frontend part of the MEAN stack, together with Node.js runtime, Express.js backend framework and MongoDB database.</p>'};return{commonData:o,fontColumn1:t,fontColumn2:i,fontPX:a,fontEM:l,fontFamilyChinese:[{name:"--Windows 預設字體--",font:"PMingLiU"},{name:"新細明體",font:"PMingLiU"},{name:"微軟正黑體",font:"Microsoft JhengHei"},{name:"標楷體",font:"DFKai-SB"},{name:"--MAC 預設字體--",font:"PingFang SC"},{name:"蘋方-繁",font:"PingFang SC"},{name:"黑體-繁",font:"Heiti TC"},{name:"儷黑 Pro",font:"LiHei Pro"},{name:"標楷體",font:"BiauKai"}],fontFamilyEnglish:[{name:"--Sans-serif--",font:"Arial"},{name:"Arial",font:"Arial"},{name:"Helvetica",font:"Helvetica"},{name:"Arial Black",font:"Arial Black"},{name:"Verdana",font:"Verdana"},{name:"Tahoma",font:"Tahoma"},{name:"Impact",font:"Impact"},{name:"Trebuchet MS",font:"Trebuchet MS"},{name:"--Serif--",font:"Georgia"},{name:"Georgia",font:"Georgia"},{name:"Palatino",font:"Palatino"},{name:"Times New Roman",font:"Times New Roman"},{name:"--- Monospaced ---",font:""},{name:"Courier New",font:"Courier New"},{name:"Lucida Console",font:"Lucida Console"}],fontContent:s}}};const g={class:"header"},p=i("div",{class:"header--title"},"字體測試",-1),y={class:"header--setting"},v=i("label",{for:"body-font-size"},"Body Font-size：",-1),C=["value"],b=i("label",{for:"language"},"語言：",-1),S=[i("option",{value:"zh-tw"},"中文",-1),i("option",{value:"us-en"},"英文",-1)],F={class:"container"},w={class:"settingColumn"},z=i("div",{class:"title"},[i("h3",null,"設定")],-1),E=i("hr",null,null,-1),k={class:"fontColumn"},M={class:"fontSetting"},A=i("label",{for:"font-size"},"Font-size:",-1),H=["value"],L={class:"fontSetting"},T=i("label",{for:"font-family-eng"},"Font-family (English):",-1),U=["value"],V={class:"fontSetting"},N=i("label",{for:"line-height"}," Line height:",-1),P=["value"],D={class:"fontSetting"},J=i("label",{for:"font-family-chinese"},"Font-family (中文):",-1),B=["value"],R=i("hr",null,null,-1),I=["innerHTML"],j={class:"settingColumn"},x=i("div",{class:"title"},[i("h3",null,"設定")],-1),W=i("hr",null,null,-1),G={class:"fontColumn"},K={class:"fontSetting"},O=i("label",{for:"font-size-2"},"Font-size:",-1),$=["value"],X={class:"fontSetting"},q=i("label",{for:"font-family-eng-2"},"Font-family (English):",-1),Q=["value"],Y={class:"fontSetting"},Z=i("label",{for:"line-height-2"}," Line height:",-1),_=["value"],ee={class:"fontSetting"},ne=i("label",{for:"font-family-chinese-2"},"Font-family (中文):",-1),oe=["value"],te=i("hr",null,null,-1),ie=["innerHTML"];var ae=c(h,[["render",function(e,n,u,d,c,h){return o(),t(s,null,[i("header",g,[p,i("div",y,[v,a(i("select",{"onUpdate:modelValue":n[0]||(n[0]=e=>d.commonData.bodyFontSize=e),class:"bodyFontSize",id:"body-font-size"},[(o(!0),t(s,null,r(d.fontPX,(e=>(o(),t("option",{key:e.id,value:e},m(e),9,C)))),128))],512),[[l,d.commonData.bodyFontSize]]),b,a(i("select",{"onUpdate:modelValue":n[1]||(n[1]=e=>d.commonData.language=e),class:"language",id:"language"},S,512),[[l,d.commonData.language]])])]),i("section",null,[i("div",F,[i("div",w,[z,E,i("div",k,[i("div",M,[A,a(i("select",{"onUpdate:modelValue":n[2]||(n[2]=e=>d.fontColumn1.fontSize=e),id:"font-size"},[(o(!0),t(s,null,r(d.fontEM,(e=>(o(),t("option",{key:e.id,value:e},m(e),9,H)))),128))],512),[[l,d.fontColumn1.fontSize]])]),i("div",L,[T,a(i("select",{"onUpdate:modelValue":n[3]||(n[3]=e=>d.fontColumn1.fontFamilyEnglish=e),id:"font-family-eng"},[(o(!0),t(s,null,r(d.fontFamilyEnglish,(e=>(o(),t("option",{key:e.name,value:e.font},m(e.name),9,U)))),128))],512),[[l,d.fontColumn1.fontFamilyEnglish]])]),i("div",V,[N,a(i("select",{"onUpdate:modelValue":n[4]||(n[4]=e=>d.fontColumn1.lineHeight=e),id:"line-height"},[(o(!0),t(s,null,r(d.fontEM,(e=>(o(),t("option",{key:e.id,value:e},m(e),9,P)))),128))],512),[[l,d.fontColumn1.lineHeight]])]),i("div",D,[J,a(i("select",{"onUpdate:modelValue":n[5]||(n[5]=e=>d.fontColumn1.fontFamilyChinese=e),id:"font-family-chinese"},[(o(!0),t(s,null,r(d.fontFamilyChinese,(e=>(o(),t("option",{key:e.name,value:e.font},m(e.name),9,B)))),128))],512),[[l,d.fontColumn1.fontFamilyChinese]])]),R,i("div",{style:f({fontSize:d.commonData.bodyFontSize})},[i("div",{class:"fontContent",style:f({fontSize:d.fontColumn1.fontSize,fontFamily:`${d.fontColumn1.fontFamilyChinese}, ${d.fontColumn1.fontFamilyEnglish}`,lineHeight:d.fontColumn1.lineHeight}),innerHTML:d.commonData.fontContent},null,12,I)],4)])]),i("div",j,[x,W,i("div",G,[i("div",K,[O,a(i("select",{"onUpdate:modelValue":n[6]||(n[6]=e=>d.fontColumn2.fontSize=e),id:"font-size-2"},[(o(!0),t(s,null,r(d.fontEM,(e=>(o(),t("option",{key:e.id,value:e},m(e),9,$)))),128))],512),[[l,d.fontColumn2.fontSize]])]),i("div",X,[q,a(i("select",{"onUpdate:modelValue":n[7]||(n[7]=e=>d.fontColumn2.fontFamilyEnglish=e),id:"font-family-eng-2"},[(o(!0),t(s,null,r(d.fontFamilyEnglish,(e=>(o(),t("option",{key:e.name,value:e.font},m(e.name),9,Q)))),128))],512),[[l,d.fontColumn2.fontFamilyEnglish]])]),i("div",Y,[Z,a(i("select",{"onUpdate:modelValue":n[8]||(n[8]=e=>d.fontColumn2.lineHeight=e),id:"line-height-2"},[(o(!0),t(s,null,r(d.fontEM,(e=>(o(),t("option",{key:e.id,value:e},m(e),9,_)))),128))],512),[[l,d.fontColumn2.lineHeight]])]),i("div",ee,[ne,a(i("select",{"onUpdate:modelValue":n[9]||(n[9]=e=>d.fontColumn2.fontFamilyChinese=e),id:"font-family-chinese-2"},[(o(!0),t(s,null,r(d.fontFamilyChinese,(e=>(o(),t("option",{key:e.name,value:e.font},m(e.name),9,oe)))),128))],512),[[l,d.fontColumn2.fontFamilyChinese]])]),te,i("div",{style:f({fontSize:d.commonData.bodyFontSize})},[i("div",{class:"fontContent",style:f({fontSize:d.fontColumn2.fontSize,fontFamily:`${d.fontColumn2.fontFamilyChinese}, ${d.fontColumn2.fontFamilyEnglish}`,lineHeight:d.fontColumn2.lineHeight}),innerHTML:d.commonData.fontContent},null,12,ie)],4)])])])])],64)}]]);(function(e={}){const{immediate:n=!1,onNeedRefresh:o,onOfflineReady:t,onRegistered:i,onRegisterError:a}=e;let l;return"serviceWorker"in navigator&&(l=new u("/web-font-test/sw.js",{scope:"/web-font-test/"}),l.addEventListener("activated",(e=>{e.isUpdate?window.location.reload():null==t||t()})),l.register({immediate:n}).then((e=>{null==i||i(e)})).catch((e=>{null==a||a(e)}))),async(e=!0)=>{}})({onNeedRefresh(){},onOfflineReady(){}})(),d(ae).mount("#app");
