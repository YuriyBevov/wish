const btns = document.querySelectorAll('.js-collapse-btn');

if(btns) {
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log(btn, btn.nextElementSibling)
      btn.nextElementSibling.classList.toggle('collapsed');
    });
  });
}
