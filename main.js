document.addEventListener("DOMContentLoaded", function () {

  const reveals = document.querySelectorAll('.reveal, .reveal-delay');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    });
    reveals.forEach(reveal => observer.observe(reveal));
  }

 window.scrollToSection = function (className) {
  const section = document.querySelector('.' + className);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
});
