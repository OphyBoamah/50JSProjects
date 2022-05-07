const searchButton = document.querySelector('.search');
const input = document.querySelector('.input')

searchButton.addEventListener('click', () => {
  searchButton.classList.toggle('active');
  input.focus()
});