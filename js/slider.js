import { Scale } from './consts.js';
const scaleControlValue = document.querySelector('.scale__control--value');
const picturePreview = document.querySelector('.img-upload__preview').querySelector('img');

const onScaleControlSmallerButtonClick = () => {
  const inputScale = Number.parseInt(scaleControlValue.value, 10);
  if (inputScale !== Scale.MIN) {
    const actualScale = inputScale - Scale.STEP;
    scaleControlValue.value = `${actualScale}%`;
    picturePreview.style.transform = `scale(${actualScale / 100})`;
  }
};

const onScaleControlBiggerButtonClick = () => {
  const inputScale = Number.parseInt(scaleControlValue.value, 10);
  if (inputScale !== Scale.MAX) {
    const actualScale = inputScale + Scale.STEP;
    scaleControlValue.value = `${actualScale}%`;
    picturePreview.style.transform = `scale(${actualScale / 100})`;
  }
};

export { onScaleControlSmallerButtonClick, onScaleControlBiggerButtonClick };
