import {UserData} from './userData.js'

class App {
  constructor(props) {
    this.props = props
    this.domComponent = props.domComponent
    this.init(this.render)
  }
  
  init = async (render) => {
    render()
  }

  render = () => {
    var userDataElem = document.createElement('div')
    userDataElem.id = 'user-data'
    this.domComponent.appendChild(userDataElem)
    new UserData({domComponent: userDataElem})
  }
}

new App({domComponent: document.getElementById('app')})