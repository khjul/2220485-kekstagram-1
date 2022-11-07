import { openFullPicture } from './fullPicture.js';
import { getPhotos } from './data.js';

const getPictureTemplate = ({id, url, comments, likes}) => `<a href="#" class="picture js-picture" data-id="${id}">
<img class="picture__img" src="${url}" width="182" height="182" alt="Случайная фотография">
<p class="picture__info">
  <span class="picture__comments">${comments.length}</span>
  <span class="picture__likes">${likes}</span>
</p>
</a>`;

const photos = getPhotos();
const renderThumbnails = () => {
  const mainContainer = document.querySelector('.js-pictures');
  mainContainer.insertAdjacentHTML('beforeend', photos.map((photo) => getPictureTemplate(photo)).join(''));
};

const onPictureClick = (evt) => {
  evt.preventDefault();
  const target = evt.target;
  const parent = target.closest('.js-picture');
  const id = parent.dataset.id;

  openFullPicture(photos[id - 1]);
};

const makeBigPictures = () => {
  renderThumbnails();
  const pictures = document.querySelectorAll('.js-picture');

  pictures.forEach((picture) => {
    picture.addEventListener('click', onPictureClick);
  });
};

export {makeBigPictures};


