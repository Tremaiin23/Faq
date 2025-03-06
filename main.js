document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.faq-card');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach(card => {
    observer.observe(card);
  });

  // Back navigation
  const backButton = document.getElementById('backButton');
  backButton.addEventListener('click', () => {
    window.history.back();
  });
});