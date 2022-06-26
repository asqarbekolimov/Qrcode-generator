const wrapper = document.querySelector('.wrapper'),
  generateBtn = wrapper.querySelector('.form button'),
  qrInput = document.querySelector('input'),
  qrImg = document.querySelector('.qr-code img'),
  qrCode = document.querySelector('.qr-code'),
  icon = document.querySelector('.dwn-btn i')

generateBtn.addEventListener('click', () => {
  let qrValue = qrInput.value
  console.log(qrValue)
  if (!qrValue) return
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
  wrapper.classList.add('active')
  qrCode.style.opacity = '1'
  icon.style.opacity = '1'
  qrImg.addEventListener('load', () => {
    // wrapper.classList.add(active)
  })
})

qrInput.addEventListener('keyup', () => {
  if (!qrInput.value) {
    wrapper.classList.remove('active')
    qrCode.style.opacity = '0'
  }
})
