// JS для навигации и кнопок, чтобы они корректно менялись на всех страницах
document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('mouseover', function() {
    button.style.color = '#ff0077';
  });
  button.addEventListener('mouseout', function() {
    button.style.color = '';
  });
});
