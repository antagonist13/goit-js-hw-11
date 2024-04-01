import"./assets/vendor-DcaNd_Y2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function a(s){const r="https://pixabay.com",n="/api/",o=new URLSearchParams({key:"43176233-1ec673b2575ffa542635b4c36",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${n}?${o}`;return fetch(e,{"Content-Type":"application/json"}).then(i=>i.json())}function l({largeImageURL:s,webformatURL:r,tags:n,likes:o,views:e,comments:t,downloads:i}){return`<li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${n}"
    />
  </a>
  <div class="description">
  <div class="img-info">
  <span class="description-text">Likes</span>
  <p class="small-text">${o}</p>
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
  <p class="small-text">${i}</p>
</div>
</div>
</li>`}const p=document.querySelector(".gallery"),u=document.querySelector(".gallery-form"),c=document.querySelector(".search-window");u.addEventListener("submit",s=>{s.preventDefault(),d().then(r=>{const n=r.hits;p.innerHTML=m(n)}),c.value=""});function d(){return console.log(c.value),a(c.value)}function m(s){return s.map(l).join("")}
//# sourceMappingURL=commonHelpers.js.map
