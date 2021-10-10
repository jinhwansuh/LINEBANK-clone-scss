function isElementUnderBottom(element, heightDiff) {
  const { top } = element.getBoundingClientRect();
  const { innerHeight } = window;
  return top > innerHeight + (heightDiff || 0);
}

function handlingScroll() {
  const elements = document.querySelectorAll('.section');
  elements.forEach(element => {
    if (isElementUnderBottom(element, -150)) {
      element.style.opacity = "0";
      element.style.transform = 'translateY(70px)';
    } else {
      element.style.opacity = "1";
      element.style.transform = 'translateY(0px)';
    }
  });
}

window.addEventListener('scroll', handlingScroll);