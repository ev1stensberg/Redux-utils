class VisibleTodoList extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
    this.forceUpdate()
  )
  }
  render() {
    const props = this.props
    const { store } = this.context
    const state = store.getState()
  }
  }
  VisibleTodoList.ContextTypes = (
    store: React.PropTypes.object
  )


class Provider extends Component {
  getChildContext() {
    return(
      store: this.props.store
    )
  }
  render() {
    return (
      this.props.children
    )
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object
}
