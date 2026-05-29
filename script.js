const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('quoteForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const dates = document.getElementById('dates').value.trim();
  const type = document.getElementById('type').value;
  const notes = document.getElementById('notes').value.trim();
  const message = `Hi Right Car, I would like a rental car quote.%0AName: ${encodeURIComponent(name)}%0ADates: ${encodeURIComponent(dates)}%0ACar type: ${encodeURIComponent(type)}%0ANotes: ${encodeURIComponent(notes)}`;
  window.open(`https://wa.me/14808681792?text=${message}`, '_blank');
});
