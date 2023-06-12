function run() {
  const switchTheme  = document.querySelector('.switch')
  const circleSwitch = document.querySelector('.fa-circle')

  function handleCheck(e) {
    if(e.target.checked) {
      circleSwitch.classList.add('checked')
    } else {
      circleSwitch.classList.remove('checked')
    }
  }

  switchTheme.addEventListener('change', handleCheck)
}

window.addEventListener('DOMContentLoaded', run)