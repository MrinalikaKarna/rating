const submitButton = document.querySelector('button');
const thankYouArea = document.querySelector('.thank-you');
const ratingNumbers = document.querySelectorAll('.rating-numbers p');
const ratingChoice = document.querySelector('.rating-choice');
let selectedRating;

submitButton.addEventListener('click', (e) => {
    const parent = e.target.parentElement;
    parent.style.display = 'none';
    thankYouArea.style.display = 'flex';
})

ratingNumbers.forEach((el) => {
    el.addEventListener('click', (e) => {
        selectedRating = e.target.textContent;
        e.target.style.backgroundColor = "hsl(0, 0%, 100%, 0.5)";
        ratingChoice.textContent = selectedRating;
      })
})