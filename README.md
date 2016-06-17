# Redux-utils

Small snippets of code to make your workflow a little less of a hazzle.

#checkReducer(reducer, action)

Checks your reducer and its dispatcher function so you can "debug" in terminal
to see if your dispatched action is what you expected it to be, returns undefined otherwise

(Swap out "INCREMENTAL" with your own action type in the code)

#checkReducerAndState(reducer, action)

Checks your action and if its not what it assigned to be, returns your current state instead.
(Swap out "INCREMENTAL" with your own action type in the code)

#Misc

```javascript
case 'TOGGLE_TODO':
    return state.map(t =>
     todo(t, action, [console.log(t)])
    )
```
