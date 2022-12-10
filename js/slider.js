import { MAX_SCALE, MIN_SCALE, STEP_SCALE } from './consts.js';
const scaleControlValue = document.querySelector('.scale__control--value');
const picturePreview = document.querySelector('.img-upload__preview').querySelector('img');

const onScaleControlSmallerButtonClick = () => {
  const inputScale = Number.parseInt(scaleControlValue.value, 10);
  if (inputScale !== MIN_SCALE) {
    const actualScale = inputScale - STEP_SCALE;
    scaleControlValue.value = `${actualScale}%`;
    picturePreview.style.transform = `scale(${actualScale / 100})`;
  }
};

const onScaleControlBiggerButtonClick = () => {
  const inputScale = Number.parseInt(scaleControlValue.value, 10);
  if (inputScale !== MAX_SCALE) {
    const actualScale = inputScale + STEP_SCALE;
    scaleControlValue.value = `${actualScale}%`;
    picturePreview.style.transform = `scale(${actualScale / 100})`;
  }
};

export { onScaleControlSmallerButtonClick, onScaleControlBiggerButtonClick };
