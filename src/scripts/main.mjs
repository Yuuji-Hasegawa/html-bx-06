import { menu } from "./menu.js";
menu();

import { lazyMap } from "./lazyMap.js";
lazyMap();

import { shareForm } from "./shareForm.js";
shareForm();

import { cellAdjust } from "./adjustFlexBasis.js";
cellAdjust();

import { pullView } from "./pullView.js";
pullView();

import "photoswipe/dist/photoswipe.css";
import PhotoSwipeLightbox from "photoswipe/lightbox";
const lightBox = new PhotoSwipeLightbox({
  gallery: "#photos",
  children: "a",
  pswpModule: () => import("photoswipe"),
});
lightBox.init();
document.addEventListener("DOMContentLoaded", function () {
  const photos = document.querySelectorAll("#photos a");
  photos.forEach((el) => {
    loadImage(el.href).then((img) => {
      el.setAttribute("data-pswp-width", img.naturalWidth);
      el.setAttribute("data-pswp-height", img.naturalHeight);
      el.firstElementChild.removeAttribute("style");
    });
  });
});

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
    img.src = src;
  });
}
