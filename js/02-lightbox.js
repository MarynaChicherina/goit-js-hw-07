import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const renderGalleryList = (galleryItems) =>
galleryItems.reduce((acc, {original, preview, description}) => 
acc + `
  <a class="gallery__item" href="${original}">
  <img 
    class="gallery__image"
    src="${preview}"
    alt="${description}"
  />
   </a>`, ''
);
const galleryList = document.querySelector('.gallery');

const insertGalleryList = (string) => {
      galleryList.insertAdjacentHTML('beforeend', string); 
};

insertGalleryList(renderGalleryList(galleryItems));

const title = document.querySelectorAll('img');

title.forEach(img => {
    img.title = img.alt;
});

var lightbox = new SimpleLightbox('.gallery a',
 { captionsData: 'title',  captionDelay: 250 });