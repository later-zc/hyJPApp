import { Component } from 'react'
import { Provider } from 'react-redux'
import './app.scss'
import store from './store'

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    // this.props.children 是将要会渲染的页面
    return <Provider store={store}>{this.props.children}</Provider>
  }
}

export default App
