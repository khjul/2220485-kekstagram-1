import { validateForm } from './validation.js';
import { buttonAdjustment } from './validation.js';
import { onFilterButtonChange, effectsList } from './effects.js';
import { onScaleControlSmallerButtonClick, onScaleControlBiggerButtonClick } from './slider.js';

const uploadFileButton = document.querySelector('#upload-file');
const editingForm = document.querySelector('.img-upload__overlay');
const closeEditingFormButton = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');

const inputHashtag = document.querySelector('.text__hashtags');
const inputComments = document.querySelector('.text__description');

const sliderWrapper = document.querySelector('.img-upload__effect-level');

const scaleControlSmallerButton = document.querySelector('.scale__control--smaller');
const scaleControlBiggerButton = document.querySelector('.scale__control--bigger');
const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');

const closeEditingForm = () => {
  body.classList.remove('modal-open');
  editingForm.classList.add('hidden');
  uploadFileButton.value = '';
  inputComments.value = '';
  inputHashtag.value = '';
  effectsList.removeEventListener('change', onFilterButtonChange);
  scaleControlBiggerButton.removeEventListener('click', onScaleControlBiggerButtonClick);
  scaleControlSmallerButton.removeEventListener('click', onScaleControlSmallerButtonClick);
  imgPreview.removeAttribute('class');
  imgPreview.removeAttribute('style');
};

const onEscKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    closeEditingForm();
    document.removeEventListener('keydown', onEscKeyDown);
  }
};

const renderUploadForm = () => {
  uploadFileButton.addEventListener('change', () => {
    editingForm.classList.remove('hidden');
    body.classList.add('modal-open');
    document.addEventListener('keydown', onEscKeyDown);
    closeEditingFormButton.addEventListener('click', closeEditingForm);
    buttonAdjustment();
    sliderWrapper.classList.add('hidden');
    effectsList.addEventListener('change', onFilterButtonChange);
    scaleControlSmallerButton.addEventListener('click', onScaleControlSmallerButtonClick);
    scaleControlBiggerButton.addEventListener('click', onScaleControlBiggerButtonClick);
  });
  validateForm();
};

export { renderUploadForm };
