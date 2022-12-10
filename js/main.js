import { renderUploadForm } from './form.js';
import { makeBigPictures } from './thumbnails.js';
import { initEffects } from './effects.js';
import { getData } from './api.js';

getData((photos) => makeBigPictures(photos));

renderUploadForm();
initEffects();
