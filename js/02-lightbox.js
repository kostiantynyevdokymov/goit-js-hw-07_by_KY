import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryCont = document.querySelector("ul.gallery");
const galleryMarkUp = createGalleryImg(galleryItems);

galleryCont.insertAdjacentHTML("beforeend", galleryMarkUp);

function createGalleryImg(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>`;
        })
        .join("");
}
    new SimpleLightbox(".gallery a", { captionDelay: 250, captionsData: "alt" });
    
    
    
    // galleryCont.addEventListener("click", openImg)
    
    // function openImg(event) {
    //     event.preventDefault();
    //     if (!event.target.classList.contains("gallery__image")) {
    //         return;
    //     }
    //     const instance = basicLightbox.create(
    //         `<img src="${event.target.dataset.source}" alt="${event.target.dataset.description}">`
    //     );
    //         instance.show();
    // }