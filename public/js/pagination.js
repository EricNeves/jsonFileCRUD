const previous = document.querySelector('#previous')
const next     = document.querySelector('#next')

function paginateNext(e) {
  e.preventDefault()
  let [inital, offset] = next.getAttribute('href').match(/\d+/g)
  let initialFormatted = parseInt(inital)
  let offsetFormatted = parseInt(offset)

  window.location.href = `
    /?initial=${initialFormatted += 8}&offset=${parseInt(offsetFormatted += 8)}
  `
}

function paginatePrevious(e) {
  e.preventDefault()
  let [inital, offset] = previous.getAttribute('href').match(/\d+/g)
  let initialFormatted = parseInt(inital)
  let offsetFormatted = parseInt(offset)

  window.location.href = `
    /?initial=${initialFormatted -= 8}&offset=${parseInt(offsetFormatted -= 8)}
  `
}

next.addEventListener('click', paginateNext)
previous.addEventListener('click', paginatePrevious)