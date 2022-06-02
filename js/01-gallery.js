import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryCont = document.querySelector("div.gallery");
const galleryMarkUp = createGalleryImg(galleryItems);

galleryCont.insertAdjacentHTML("beforeend", galleryMarkUp);

function createGalleryImg(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </div>
    `;
        })
        .join("");
    }
    galleryCont.addEventListener(`click`, openImg)
    
    function openImg(event) {
        event.preventDefault();
        if (!event.target.classList.contains("gallery__item")) {
            return;
        }
        const instanse = basicLightBox.create(
            `<img src="${event.target.dataset.source}" alt="${event.target.dataset.description}">`
        );
            instanse.show();
    }

