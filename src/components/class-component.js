import { Component } from 'react'

export class Calendar extends Component {
  getDate() {
    const dayNames = [
      'อาทิตย์',
      'จันทร์',
      'อังคาร',
      'พุธ',
      'พฤหัสบดี',
      'ศุกร์',
      'เสาร์',
    ]
    const monthNames = [
      'มกราคม',
      'กุมภาพันธ์',
      'มีนาคม',
      'เมษายน',
      'พฤษภาคม',
      'มิถุนายน',
      'กรกฏาคม',
      'สิงหาคม',
      'กันยายน',
      'ตุลาคม',
      'พฤศจิกายน',
      'ธันวาคม',
    ]
    const date = new Date()
    const weekDay = dayNames[date.getDay()]
    const day = date.getDate()
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear() + 543
    return `วัน ${weekDay} ที่ ${day} ${month} ${year}`
  }

  render() {
    return <div>{this.getDate()}</div>
  }
}

export class Button extends Component {
  // Event Handler
  showAlert(msg) {
    alert(msg)
  }
  // Event Handler แบบ Arrow Function (Regular Function)
  onClickButtonOK = () => {
    this.showAlert('Hello')
  }
  render() {
    return <button onClick={this.onClickButtonOK}>OK</button>
  }
}
