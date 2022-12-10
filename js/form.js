import { validateForm } from './validation.js';
import { buttonAdjustment, form } from './validation.js';
import { onFilterButtonChange, effectsList } from './effects.js';
import { onScaleControlSmallerButtonClick, onScaleControlBiggerButtonClick } from './slider.js';
import { sendData } from './api.js';
import { renderMessage } from './message.js';

const uploadFileButton = document.querySelector('#upload-file');
const editingForm = document.querySelector('.img-upload__overlay');
const closeEditingFormButton = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');

const sliderWrapper = document.querySelector('.img-upload__effect-level');

const scaleControlSmallerButton = document.querySelector('.scale__control--smaller');
const scaleControlBiggerButton = document.querySelector('.scale__control--bigger');
const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');

const closeEditingForm = () => {
  body.classList.remove('modal-open');
  editingForm.classList.add('hidden');
  uploadFileButton.value = '';
  effectsList.removeEventListener('change', onFilterButtonChange);
  scaleControlBiggerButton.removeEventListener('click', onScaleControlBiggerButtonClick);
  scaleControlSmallerButton.removeEventListener('click', onScaleControlSmallerButtonClick);
  document.removeEventListener('keydown', onEscKeyDown);
};

const closeEditingFormToDefault = () => {
  closeEditingForm();
  imgPreview.removeAttribute('class');
  imgPreview.removeAttribute('style');
  form.reset();
};

function onEscKeyDown(evt) {
  if (evt.key === 'Escape') {
    closeEditingFormToDefault();
    document.removeEventListener('keydown', onEscKeyDown);
  }
}

const setEditingFormSubmit = (onSuccess, onError) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(() => {
      onSuccess();
      renderMessage(true);
    },
    () => {
      onError();
      renderMessage(false);
    },
    new FormData(evt.target),
    );
  });
};

const renderUploadForm = () => {
  uploadFileButton.addEventListener('change', () => {
    editingForm.classList.remove('hidden');
    body.classList.add('modal-open');
    document.addEventListener('keydown', onEscKeyDown);
    closeEditingFormButton.addEventListener('click', closeEditingFormToDefault);
    buttonAdjustment();
    sliderWrapper.classList.add('hidden');
    effectsList.addEventListener('change', onFilterButtonChange);
    scaleControlSmallerButton.addEventListener('click', onScaleControlSmallerButtonClick);
    scaleControlBiggerButton.addEventListener('click', onScaleControlBiggerButtonClick);
  });
  validateForm();
  setEditingFormSubmit(closeEditingFormToDefault, closeEditingForm);
};

export { renderUploadForm };
