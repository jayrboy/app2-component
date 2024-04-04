/* eslint-disable */
import { Component } from 'react'

// Class Event Data Component
export class EvenDataClass extends Component {
  onClickStartStop = (ev) => {
    let t = ev.target.innerHTML
    let s = t === 'Start' ? 'Stop' : 'Start'
    ev.target.innerHTML = s
  }
  onClickAdd = (ev) => {
    let t = ev.target.innerText
    let r = eval(t)
    alert(`${t} = ${r}`)
  }
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '20' }}>
        <button onClick={(ev) => this.onClickStartStop(ev)}>Start</button>
        <br />
        <br />
        <button onClick={(ev) => this.onClickAdd(ev)}>10 + 20</button>
        <br />
        <br />
        <button onClick={this.onClickAdd.bind(this)}>30 * 40</button>
        <br />
        <br />
      </div>
    )
  }
}
// Arrow Function Event Data Component
export const EvenDataFunc = () => {
  const onClickStartStop = (ev) => {
    let t = ev.target.innerHTML
    let s = t === 'Start' ? 'Stop' : 'Start'
    ev.target.innerHTML = s
  }
  const onClickAdd = (ev) => {
    let t = ev.target.innerText
    let r = eval(t)
    alert(`${t} = ${r}`)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20' }}>
      <button
        className="btn btn-sm btn-danger"
        onClick={(ev) => onClickStartStop(ev)}
      >
        Start
      </button>
      <br />
      <br />
      <button
        className="btn btn-sm btn-outline-warning"
        onClick={(ev) => onClickAdd(ev)}
      >
        10 + 20
      </button>
      <br />
      <br />
      <button
        className="btn btn-sm btn-outline-warning"
        onClick={onClickAdd.bind(this)}
      >
        30 * 40
      </button>
      <br />
      <br />
    </div>
  )
}
// Arrow Function Table Component
export const Table = () => {
  const data = [
    ['Javascript', 100],
    ['React', 150],
    ['React Native', 180],
    ['Node.js', 200],
    ['VS Code', 120],
  ]

  const onMouseOverRow = (ev) =>
    (ev.target.parentNode.style.backgroundColor = 'yellow')

  const onMouseOutRow = (ev) =>
    (ev.target.parentNode.style.backgroundColor = 'white')

  return (
    <table border="1" cellPadding={5} style={{ margin: 'auto', marginTop: 30 }}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => {
          return (
            <tr key={i} onMouseOver={onMouseOverRow} onMouseOut={onMouseOutRow}>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
