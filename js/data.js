import { getRandomPositiveInteger } from './util.js';

const MAX_COUNT_PHOTOS = 25;

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTION = [
  'Красота!',
  'Необыкновенно!',
  'Жизнь прекрасна!',
];

const NAMES = [
  'Анастасия',
  'Михаил',
  'Елизавета',
  'Леонид',
  'Максим',
  'Светлана',
];

const CountLike = {
  MIN: 15,
  MAX: 200,
};

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: MESSAGE[getRandomPositiveInteger(0, MESSAGE.length - 1)],
  name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],
});

const createUserData = (id) => ({
  id,
  url: `photos/${getRandomPositiveInteger(1, MAX_COUNT_PHOTOS)}.jpg`,
  description: DESCRIPTION[getRandomPositiveInteger(0, DESCRIPTION.length - 1)],
  likes: getRandomPositiveInteger(CountLike.MIN, CountLike.MAX),
  comments: createComment(id),
});

export {createUserData};
