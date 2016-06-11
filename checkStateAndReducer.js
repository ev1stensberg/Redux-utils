const checkReducerAndState = (reducer, action) => {
  action === 'INCREMENT' ? console.log(action) : console.log(store.getState())
}

checkReducer(reducer, 'INCREMENTAL')
