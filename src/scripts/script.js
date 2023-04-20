const headerLinks = document.querySelectorAll('.link');
const modal = document.querySelector('.modal');
const button = document.querySelector('.show-modal');
const closeBtn = document.querySelector('.close');

const headerLinksArr = Array.from(headerLinks);

button.addEventListener('click', () => {
  modal.classList.remove('pointer-events-none');
  modal.classList.remove('hidden');
  modal.classList.remove('invisible');
  modal.classList.add('block');
  modal.classList.add('visible');
  modal.classList.add('pointer-events-auto');
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('pointer-events-none');
  modal.classList.add('hidden');
  modal.classList.add('invisible');
  modal.classList.remove('block');
  modal.classList.remove('visible');
  modal.classList.remove('pointer-events-auto');
});

// const addClass = element => {
//   console.log('almost works');
//   // element.classList.add('.active');
// };

headerLinksArr.forEach((element, index) => {
  element.addEventListener('click', () => {
    console.log(element);
  });
});

console.log('code works');
