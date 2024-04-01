import"./assets/vendor-DcaNd_Y2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function a(s){const r="https://pixabay.com",n="/api/",i=new URLSearchParams({key:"43176233-1ec673b2575ffa542635b4c36",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${n}?${i}`;return fetch(e,{"Content-Type":"application/json"}).then(o=>o.json())}function l({largeImageURL:s,webformatURL:r,tags:n,likes:i,views:e,comments:t,downloads:o}){return`<li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${n}"
    />
  </a>
  <div class="img-info">
  <span class="description-text">Likes</span>
  <p class="small-text">${i}</p>
</div>
<div class="img-info">
  <span class="description-text">Views</span>
  <p class="small-text">${e}</p>
</div>
<div class="img-info">
  <span class="description-text">Comments</span>
  <p class="small-text">${t}</p>
</div>
<div class="img-info">
  <span class="description-text">Downloads</span>
  <p class="small-text">${o}</p>
</div>
</li>`}const p=document.querySelector(".gallery"),u=document.querySelector(".gallery-form"),c=document.querySelector(".search-window");u.addEventListener("submit",s=>{s.preventDefault(),m().then(r=>{const n=r.hits;p.innerHTML=d(n)})});function m(){return console.log(c.value),a(c.value)}function d(s){return s.map(l).join("")}
//# sourceMappingURL=commonHelpers.js.map
