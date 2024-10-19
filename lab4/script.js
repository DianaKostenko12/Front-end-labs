const currentElement = document.getElementById("current-element");
const nextElement =
  document.querySelector("#current-element").nextElementSibling;

currentElement.addEventListener("click", (e) =>
  toggleClass(e.target, "highlight-color")
);
nextElement.addEventListener("click", (e) =>
  toggleClass(e.target, "highlight-color")
);

const toggleClass = (clickedElement, classToToggle) => {
  const classList = clickedElement.classList;
  classList.contains(classToToggle)
    ? classList.remove(classToToggle)
    : classList.add(classToToggle);
};

const addButton = document
  .getElementById("add-button")
  .addEventListener("click", function () {
    addImage();
  });
const zoomInButton = document
  .getElementById("zoom-in-image")
  .addEventListener("click", function () {
    zoomLastImg(zoomScale);
  });
const zoomOutButton = document
  .getElementById("zoom-out-image")
  .addEventListener("click", function () {
    zoomLastImg(1 / zoomScale);
  });
const deleteButton = document
  .getElementById("delete")
  .addEventListener("click", function () {
    removeImage();
  });

const mainImage = document.getElementById("main-img");
const imageContainer = document.getElementById("image-container");
const zoomScale = 1.4;

const addImage = () => {
  const imgWrapperClass = "deletable-img";

  const imgElem = document.createElement("img");
  imgElem.src = "Kyiv.jpg";
  imgElem.classList.add("added-img");

  const wrapper = document.createElement("div");
  wrapper.classList.add(imgWrapperClass);
  wrapper.appendChild(imgElem);
  imageContainer.appendChild(wrapper);
};

const zoomImg = (img, zoomScale) => {
  const imgStyle = window.getComputedStyle(img);
  const curTransform = imgStyle.getPropertyValue("transform");
  if (!curTransform) {
    img.style.transform = `scale(${zoomScale})`;
    return;
  }

  if (!curTransform.includes("scale")) {
    img.style.transform += ` scale(${zoomScale})`;
    return;
  }

  curTransform.replace(
    "scale([-]{0,1}[0-9]+[.]*[0-9]+)",
    `scale(${zoomScale})`
  );
};

const zoomLastImg = (scale) => {
  const imgWrapperClassName = "deletable-img";

  const addedImgs = document.querySelectorAll(
    `div.${imgWrapperClassName} img `
  );

  if (addedImgs.length !== 0) {
    const lastImg = addedImgs[addedImgs.length - 1];
    zoomImg(lastImg, scale);
    return;
  }

  zoomImg(mainImage, scale);
};

const removeImage = () => {
  const imgWrapperClass = "deletable-img";
  const imgWrappers = document.querySelectorAll(`.${imgWrapperClass}`);

  if (imgWrappers.length !== 0) {
    const lastImgContainer = imgWrappers[imgWrappers.length - 1];
    lastImgContainer.remove();
  }
};
