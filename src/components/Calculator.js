import React, { Component } from 'react'
/* eslint-disable */

// Class Component
export class Calculator1 extends Component {
  n1 = 20
  n2 = 4

  calculate = (op) => {
    let c = `${this.n1} ${op} ${this.n2}`
    let r = eval(c)
    alert(`${c} = ${r}`)
  }
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '20' }}>
        <span>{this.n1}</span> &nbsp;
        <button onClick={() => this.calculate('+')}>+</button> &nbsp;
        <button onClick={() => this.calculate('-')}>-</button> &nbsp;
        <button onClick={() => this.calculate('*')}>*</button> &nbsp;
        <button onClick={() => this.calculate('/')}>/</button> &nbsp;
        <span>{this.n2}</span>
      </div>
    )
  }
}
// Function Component
export function Calculator2() {
  const n1 = 20
  const n2 = 4

  const calculate = (op) => {
    let c = `${n1} ${op} ${n2}`
    let r = eval(c)
    alert(`${c} = ${r}`)
  }
  return (
    <div style={{ textAlign: 'center', marginTop: '20' }}>
      <span>{n1}</span> &nbsp;
      <button onClick={() => calculate('+')}>+</button> &nbsp;
      <button onClick={() => calculate('-')}>-</button> &nbsp;
      <button onClick={() => calculate('*')}>*</button> &nbsp;
      <button onClick={() => calculate('/')}>/</button> &nbsp;
      <span>{n2}</span>
    </div>
  )
}
