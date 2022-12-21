let readMoreButton = document.querySelectorAll('.button-read-more')
let swiper = document.querySelectorAll('.swiper')

readMoreButton[0].addEventListener('click', function () {
  let aboutText = document.querySelector('.about__text')
  let buttonText = readMoreButton[0].querySelector('.text')
  let buttonImg = readMoreButton[0].querySelector('.img')
  if (aboutText.classList.contains('max-height-for-block')) {
    aboutText.classList.remove('max-height-for-block')
    buttonImg.classList.remove('img-rotate')
    buttonText.textContent = 'Читать далее'
  } else {
    aboutText.classList.add('max-height-for-block')
    buttonImg.classList.add('img-rotate')
    buttonText.textContent = 'Свернуть'
  }
})

for (let i = 1; i < readMoreButton.length; i++) {
  readMoreButton[i].addEventListener('click', function () {
    let buttonText = readMoreButton[i].querySelector('.text')
    let buttonImg = readMoreButton[i].querySelector('.img')
    if (swiper[i - 1].classList.contains('max-height-for-block')) {
      swiper[i - 1].classList.remove('max-height-for-block')
      buttonImg.classList.remove('img-rotate')
      buttonText.textContent = 'Показать все'
    } else {
      swiper[i - 1].classList.add('max-height-for-block')
      buttonImg.classList.add('img-rotate')
      buttonText.textContent = 'Свернуть'
    }
  })
}

let menuPopupBtn = document.querySelector('.menu__first-ic')
let callPopupBtn = document.querySelector('#call')
let messagePopupBtn = document.querySelector('#message')
let popup = document.querySelectorAll('#popup')
let closePopupBtn = document.querySelectorAll('.ic-close')
let popupOverlay = document.querySelectorAll('.overlay')

callPopupBtn.addEventListener('click', function () {
  if (popup[0].classList.contains('popup--hide')) {
    popup[0].classList.remove('popup--hide')
  }
  popup[0].classList.add('popup--shown')
  document.body.style.position = 'fixed'
  document.body.style.top = `-${window.scrollY}px`
})

messagePopupBtn.addEventListener('click', function () {
  if (popup[1].classList.contains('popup--hide')) {
    popup[1].classList.remove('popup--hide')
  }
  popup[1].classList.add('popup--shown')
  document.body.style.position = 'fixed'
  document.body.style.top = `-${window.scrollY}px`
})

menuPopupBtn.addEventListener('click', function () {
  if (popup[2].classList.contains('popup--hide')) {
    popup[2].classList.remove('popup--hide')
  }
  popup[2].classList.add('popup--shown')
  document.body.style.position = 'fixed'
  document.body.style.top = `-${window.scrollY}px`
})

for (let i = 0; i < popup.length; i++) {
  closePopupBtn[i].addEventListener('click', function () {
    if (popup[i].classList.contains('popup--shown')) {
      popup[i].classList.remove('popup--shown')
    }
    popup[i].classList.add('popup--hide')
    const scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
  })

  popupOverlay[i].addEventListener('click', function () {
    if (popup[i].classList.contains('popup--shown')) {
      popup[i].classList.remove('popup--shown')
    }
    popup[i].classList.add('popup--hide')
    const scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
  })
}
