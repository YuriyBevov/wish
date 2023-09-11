const btns = document.querySelectorAll('.warranty .main-card .lw-main-btn');

if(btns) {
  const onClickHandler = (evt) => {
    const target = evt.target;
    const parentNode = target.closest('.warranty__list-item');

    if(parentNode.classList.contains('active')){
      parentNode.classList.remove('active');
      target.innerHTML = 'Подробнее';
    } else {
      parentNode.classList.add('active');
      target.innerHTML = 'Скрыть';
    }
  }

  btns.forEach(btn => {
    btn.addEventListener('click', onClickHandler);
  });
}
