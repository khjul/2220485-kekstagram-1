import {createUserData} from './data.js';

// eslint-disable-next-line no-return-assign
const PHOTOS = () => Array.from({length: 25}).map((element, index) => element = createUserData(index + 1));(PHOTOS());
