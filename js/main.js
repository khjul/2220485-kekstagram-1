import { createThumbnails } from './thumbnails.js';
import { getPhotos } from './data.js';

const data = getPhotos();
createThumbnails(data);
