const MAX_SYMBOLS = 20;
const MAX_HASHTAGS = 5;

const ErrorMessage = {
  SEPARETED_BY_SPACES: 'Хэш-теги разделяются пробелами',
  START_WITH: 'Хэш-тег должен начинаться с символа #',
  NO_REPEAT: 'Хэш-теги не должны повторяться',
  HASHTAG_MAX_LENGTH: `Максимальная длина одного хэш-тега ${MAX_SYMBOLS} символов, включая решётку`,
  MAX_COUNT_HASHTAG: `Нельзя указывать больше ${MAX_HASHTAGS} хэш-тегов`,
  UNACCEPTABLE_SYMBOLS: 'Хэш-тег содержит недопустимые символы',
  COMMENT_MAX_LENGTH: 'Длина комментария не может составлять больше 140 символов'
};

const DEFAULT_RENDERED_COMMENTS = 5;
const STEP_ADDED_COMMENTS = 5;

const MIN_SCALE = 25;
const MAX_SCALE = 100;
const STEP_SCALE = 25;

export { DEFAULT_RENDERED_COMMENTS, STEP_ADDED_COMMENTS, MAX_SYMBOLS, MAX_HASHTAGS, ErrorMessage, MAX_SCALE, MIN_SCALE, STEP_SCALE };
