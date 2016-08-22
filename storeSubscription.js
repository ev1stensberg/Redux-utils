// react Component lifecycle input with store

class MyComponent extends Component {
  componentDidMount() {
    const { store } = this.props
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }
  componentWillUnMount() {
    this.unsubscribe()
  }
  render() {
    const props = this.props;
    const { store } = this.props,
    const state = store.getState()
    return(
      <MyComponent
      someProp={
        SomeUtilityFunc(
          state.todos,
          state.visibilityFilter
        )

      }
    )
  }
}
