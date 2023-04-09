import { galleryItems } from './gallery-items.js';
// Change code below this line

const itemUl = document.querySelector('.gallery');



const marupGallery = galleryItems.map(({ preview, original, description }) => {
    return `<li class="galerry__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src=
"${preview}" data-source="${original}" alt="${description}"></a></li>`;
}).join('');

itemUl.insertAdjacentHTML('beforeend', marupGallery)

itemUl.addEventListener('click', onOpenModal);

function onOpenModal(event) {
    event.preventDefault();
   
    const currentItem = event.target;
    

    if (currentItem.nodeName !== 'IMG') {
        return;
    }
    const modal = new SimpleLightbox('.gallery .gallery__link', {
        captionsData: 'alt',
        captionDelay: 250,
    });
    
    modal.open();
}


console.log(galleryItems);
