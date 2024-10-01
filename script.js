const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const footer = document.getElementById('footer');

window.onscroll = function() {
  handleScroll();
};

function handleScroll() {
  const windowHeight = window.innerHeight;
  const offset = window.scrollY;
  
  if (offset > windowHeight) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }

  const footerTop = footer.getBoundingClientRect().top + window.scrollY;
  if (offset + windowHeight > footerTop) {
    scrollToTopBtn.style.bottom = ((windowHeight - (footerTop - offset))+20) + 'px';
  } else {
    scrollToTopBtn.style.bottom = '20px';
  }
}

scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
  });
});
