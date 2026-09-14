// ==UserScript==
// @name        GarticPhone / gp-mod / Timelapse Player (stand-alone)
// @namespace   Violentmonkey Scripts
// @match       https://liliezzzz.github.io/gp-timelapse-player/*
// @match       https://gpmod.github.io/gp-timelapse-player/*
// @match       https://gpmod.github.io/player/*
// @match       https://discord.com/*
// @grant       GM_xmlhttpRequest
// @grant       unsafeWindow
// @require     https://gpmod.github.io/userscripts/vendor/xhr-parallel.js
// @noframes
// @version     2.9
// @author      -
// @description 10/20/2021, 6:18:00 AM
// @run-at      document-end
// @connect     cdn.discordapp.com
// @connect     *
// @icon        https://www.google.com/s2/favicons?sz=64&domain=garticphone.com
// @downloadURL https://gpmod.github.io/userscripts/dist/8033263611069205.user.js
// ==/UserScript==

'use strict';

(function(){
const SCRIPT_DATA={name:"Timelapse Player",version:"2.9",url:"https://gpmod.github.io/userscripts/dist/8033263611069205.user.js"};
if("discord.com"===location.hostname){class h{static GP_FILE_FORMAT="gpimg";static GP_ATTACHMENT_URL_PATTERN=new RegExp(`^https?:\\/\\/cdn\\.discordapp\\.com\\/attachments\\/.+\\.${this.GP_FILE_FORMAT}\\b\\??`,"i");static GP_PLAYER_URL_PATTERN=RegExp("^https?:\\/\\/(gpmod|liliezzzz)\\.github\\.io\\/(gp-timelapse-player|player)\\/\\?url=","i");constructor(){this.utils=null;this.isModuleSearchCompleted=!1;const a=this;window.open=new Proxy(window.open,{async apply(b,c,f){try{f[0]=await a.handleURL(f[0])}catch(e){}return Reflect.apply(b,
c,f)}});HTMLAnchorElement.prototype.click=new Proxy(HTMLAnchorElement.prototype.click,{async apply(b,c,f){try{c.href=await a.handleURL(c.href)}catch(e){}return Reflect.apply(b,c,f)}})}async handleURL(a){if(h.GP_ATTACHMENT_URL_PATTERN.test(a))return this.isURLExpired(a)?await this.refreshURL(a):a;if(h.GP_PLAYER_URL_PATTERN.test(a)){const b=new URL(a),c=new URL(b.searchParams.get("url"));if(this.isURLExpired(c))return a=await this.refreshURL(c.href),b.searchParams.set("url",a),b.href}return a}isURLExpired(a){a=
(new URL(a)).searchParams.get("ex");if(!a)return!0;a=1E3*parseInt(a,16);return isNaN(a)?!0:a<=Date.now()+36E5}async refreshURL(a){this.utils||this.isModuleSearchCompleted||(this.utils=this.buildUtils(),this.isModuleSearchCompleted=!0);a=this.utils.removeSignedUrlParameters(a);return await this.utils.maybeRefreshAttachmentUrl(a)}buildUtils(){if(!unsafeWindow.webpackChunkdiscord_app)return null;const a=this.findRefreshURLDescriptor("679164");if(!a)return null;const b={};Object.defineProperty(b,"maybeRefreshAttachmentUrl",
a);Object.defineProperty(b,"removeSignedUrlParameters",{value:c=>{try{const f=new URL(c);for(let e of["ex","is","hm"])f.searchParams.delete(e);return f}catch(f){return null}}});return b}findRefreshURLDescriptor(a){let b=null;unsafeWindow.webpackChunkdiscord_app.push([[`_${Math.random()}`],{},({c})=>{if(c&&!b){if(a&&c[a]&&(b=this.getRefreshURLDescriptor(c[a])))return;for(let f in c)if(b=this.getRefreshURLDescriptor(c[f]))break}}]);return b}getRefreshURLDescriptor(a){a=a?.exports;if(!a||"object"!==
typeof a)return null;for(const c in a){var b=a[c];if("function"===typeof b&&(b=b.toString(),0===b.indexOf("async function ")&&-1!==b.indexOf("toURLSafe",15)))return Object.getOwnPropertyDescriptor(a,c)}return null}}new h}else{const h="https://gpmod.github.io/pub",a={style:["dist/tp.min.css"],script:["dist/tp.min.js"]};let b;c();document.addEventListener("source_request",({detail:{url:e}})=>{f(e).then(d=>[!0,d]).catch(()=>[!1,null]).then(([d,g])=>{document.dispatchEvent(new CustomEvent("source_request_complete",{detail:{success:d,
url:e,blob:g}}))})});function c(){for(const e in a)a[e].forEach(d=>{const g=document.createElement("link");g.setAttribute("rel","preload");g.setAttribute("href",`${h}/${d}`);g.setAttribute("as",e);document.head.appendChild(g)});a.style.forEach(e=>{const d=document.createElement("link");d.rel="stylesheet";d.href=`${h}/${e}`;d.setAttribute("defer","");document.head.appendChild(d)});a.script.forEach(e=>{const d=document.createElement("script");d.src=`${h}/${e}`;d.setAttribute("defer","");document.head.appendChild(d)})}
function f(e){return new Promise((d,g)=>{b?.abort();b=GM_xmlhttpRequest({url:e,method:"GET",responseType:"blob",onload:k=>{200===k.status?d(k.response):g(k.status)},ontimeout:g,onerror:g})})}};
}).call(this)
