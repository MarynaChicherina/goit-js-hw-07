import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const renderGalleryList = (galleryItems) =>
galleryItems.reduce((acc, {original, preview, description}) => 
acc + `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img 
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
   </a>
 </div>`, ''
);
const galleryDiv = document.querySelector('.gallery');

const insertGalleryList = (string) => {
      galleryDiv.insertAdjacentHTML('beforeend', string); 
};

insertGalleryList(renderGalleryList(galleryItems));

galleryDiv.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG'){
        return;
    } else {
        const instance = basicLightbox.create(
            `<img src="${event.target.dataset.source}" width="1280" height="855">`,
        {
		onShow: (instance) => {window.addEventListener('keydown', onEscapeKeyPress)},
		onClose: (instance) => {window.removeEventListener('keydown', onEscapeKeyPress)}
	})
        instance.show();

        function onEscapeKeyPress (event) {
            const ESC_KEY_CODE = 'Escape';
            if (event.code === ESC_KEY_CODE) {
                instance.close();
            }
        }

    }
};



