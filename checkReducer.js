const checkReducer = (reducer, action) => {
  action === 'INCREMENT' ? console.log(action) : undefined
}

checkReducer(reducer, 'INCREMENTAL')
