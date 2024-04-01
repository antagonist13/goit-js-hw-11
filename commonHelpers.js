import{i as l,S as p}from"./assets/vendor-BvkBopno.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function u(o){const s="https://pixabay.com",r="/api/",i=new URLSearchParams({key:"43176233-1ec673b2575ffa542635b4c36",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}${r}?${i}`;return fetch(e,{"Content-Type":"application/json"}).then(n=>n.json())}function d({largeImageURL:o,webformatURL:s,tags:r,likes:i,views:e,comments:t,downloads:n}){return`<li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img
      class="gallery-image"
      src="${s}"
      alt="${r}"
    />
  </a>
  <div class="description">
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
  <p class="small-text">${n}</p>
</div>
</div>
</li>`}const m=document.querySelector(".gallery"),f=document.querySelector(".gallery-form"),c=document.querySelector(".search-window"),a=document.querySelector(".loader");f.addEventListener("submit",o=>{o.preventDefault(),a.style.display="block",g().then(s=>{const r=s.hits;s.hits==0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m.innerHTML=y(r),new p(".gallery li a",{captionsData:"alt",captionsDelay:250}).refresh()}).then(s=>{a.style.display="none"}).catch(s=>console.log(s)),c.value=""});function g(){const o=u(c.value);return console.log(o),o}function y(o){return o.map(d).join("")}
//# sourceMappingURL=commonHelpers.js.map
