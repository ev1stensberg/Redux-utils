/*eslint-disable */
  document.addEventListener('click', () => {
  if(window) {
    System.import('./someScript').then(logIt)
    return
  }
})
  function logIt() {
    console.log('It works')
  }
}
/*eslint-enable */

// load based on fact

/*eslint-disable */
  document.addEventListener('click', () => {
  if(window) {
    System.import('./someScript/' + someVar).then(logIt)
    return
  }
})
  function logIt() {
    console.log('It works')
  }
}
/*eslint-enable */
