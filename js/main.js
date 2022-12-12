import { renderUploadForm } from './form.js';
import { makeBigPictures } from './thumbnails.js';
import { getData } from './api.js';
import { errorGetDataMessage } from './message.js';

getData((photos) => makeBigPictures(photos), () => errorGetDataMessage());
renderUploadForm();

