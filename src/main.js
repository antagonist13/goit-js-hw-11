import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImages } from './js/pixabay-api'
import { createMarkup } from './js/render-functions'

const gallery = document.querySelector(".gallery")
const searchForm = document.querySelector(".gallery-form")
const searchInput = document.querySelector(".search-window")

searchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    imgCreating().then(el => {
        const imgList = el.hits
        gallery.innerHTML = usersTemplate(imgList)
    })
})
function imgCreating() {
    console.log(searchInput.value);
    const img = getImages(searchInput.value)
    return img
}
function usersTemplate(arr) {
            return arr.map(createMarkup).join('');
             
        }