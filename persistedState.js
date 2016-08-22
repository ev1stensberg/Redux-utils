const persistedState = {
  todos: [{
    id: '0',
    text: 'Welcome Back!',
    completed: false,
  }],
  visibilityFilter: undefined
};

const store = createStore(
  todoApp,
  persistedState // overrides items touched from todoApp and into a combined state instead of undefined
)

/*****************************************/

// import { throttle } from lodash
const configureStore = () => {
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if(serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState) // turn into state obj
  } catch(err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(err) {
    console.log("error")
  }
}
 // invoked on any state change
  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    })
  }, 10E3 ))
return store
}
