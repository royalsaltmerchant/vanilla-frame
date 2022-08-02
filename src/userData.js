import {state} from './state.js'

export class UserData {
  constructor(props) {
    this.props = props
    this.domComponent = props.domComponent
    this.init(this.render)
  }

  loadUserData = async () => {
    try {
      var res = await fetch('https://randomuser.me/api/')
      if(!res.ok) {
        throw new Error(res.status)
      }
      return await res.json()
    } catch(err) {
      console.log(err)
      return null
    }
  }
  
  init = async (render) => {
    var data = await this.loadUserData()
    if(data) {
      state.userData = data
      render()
    }
  }

  render = () => {
    // clear
    this.domComponent.innerHTML = ''
    // write
    var html = /*html*/ `
      <div>${state.userData.results[0].name.first}</div>
      <div>${state.userData.results[0].name.last}</div>
    `
    this.domComponent.innerHTML = html
  }
}