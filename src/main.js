import { getImages } from './js/pixabay-api'

const searchBtn = document.querySelector(".search-btn")
const searchInput = document.querySelector(".search-window")

console.log(getImages('roses').then((el) => {
    (el)
})); 