function run() {
  const switchTheme  = document.querySelector('.switch')
  const circleSwitch = document.querySelector('.fa-circle')

  function changeComputedColors(props, color) {
    document.documentElement.style.setProperty(props, color)
  }

  function handleCheck(e) {
    if(e.target.checked) {
      circleSwitch.classList.add('checked')
      changeComputedColors('--light', '#0d1117')
      localStorage.setItem('theme', 'true')

    } else {
      circleSwitch.classList.remove('checked')
      changeComputedColors('--light', '#f3f3f3')
      localStorage.setItem('theme', 'false')
    }
  }

  if (localStorage.getItem('theme') === 'true') {
    changeComputedColors('--light', '#0d1117')
    circleSwitch.classList.add('checked')
  } else {
    localStorage.setItem('theme', 'false')
  }

  switchTheme.addEventListener('change', handleCheck)
}

window.addEventListener('DOMContentLoaded', run)