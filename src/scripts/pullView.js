export const pullView = () => {
  let elem = document.querySelectorAll(".js-pull-view");
  const io = new IntersectionObserver(inViewport, {
    threshold: [0],
  });
  Array.from(elem).forEach((element) => {
    io.observe(element);
  });
  function inViewport(entries, io) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        const item = entry.target;
        item.classList.add("is-view");
        io.unobserve(entry.target);
      }
    });
  }
};
