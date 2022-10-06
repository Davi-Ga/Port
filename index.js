const container = document.getElementById('container');
const grid = document.getElementById('masonry-grid');
const imageViewerPopUp = document.getElementById('image-viewer-popup');
const openedImage = document.getElementById('opened-image');
const card = document.getElementById('card');

const MAXIMUM_SIZE_OF_GENERATED_IMAGES = 700;
const MINIMUM_SIZE_OF_GENERATED_IMAGES = 300;

window.onload = () => {
  loadPhotos(20);

  container.addEventListener('scroll', () => scrollListener(container));

  imageViewerPopUp.onclick = () => {
    imageViewerPopUp.style.visibility = 'hidden';
  };
};

function scrollListener(element) {
  if (element.scrollTop + element.clientHeight >= element.scrollHeight-1000) {
    loadPhotos(5);
  };
};

function loadPhotos(numberOfPhotosToLoad=10) {
  for (let index = 0; index < numberOfPhotosToLoad; index++) {
    addImageCard();
  };
};

function addImageCard() {
  const imageSize = getRandomSize();
  const imgElement = document.createElement('img');
  const divElement = document.createElement('div');

  imgElement.setAttribute('src', `https://picsum.photos/${imageSize.width}/${imageSize.height}`);
  imgElement.style.aspectRatio = `${imageSize.width}/${imageSize.height}`;
  divElement.setAttribute('class', 'masonry-grid__item');
  
  imgElement.onclick = () => {
    imageViewerPopUp.style.visibility = 'visible';
    openedImage.setAttribute('src', imgElement.getAttribute('src'));
    openedImage.style.aspectRatio = imgElement.style.aspectRatio;
  };

  divElement.appendChild(imgElement);

  grid.appendChild(divElement);
};

function getRandomSize() {
  return {
    width: Math.floor(Math.random() * (MAXIMUM_SIZE_OF_GENERATED_IMAGES - MINIMUM_SIZE_OF_GENERATED_IMAGES) + MINIMUM_SIZE_OF_GENERATED_IMAGES),
    height: Math.floor(Math.random() * (MAXIMUM_SIZE_OF_GENERATED_IMAGES - MINIMUM_SIZE_OF_GENERATED_IMAGES) + MINIMUM_SIZE_OF_GENERATED_IMAGES)
  };
};