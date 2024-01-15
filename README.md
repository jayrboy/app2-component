#### Function Component

Function Component

```js
export default function example() {
  return <></>
}
```

Arrow Function Component

```js
export const example = () => {
  return <></>
}
```

#### Class Component

```js
import React, { Component } from 'react'

export default class Calendar extends Component {
    const variable = 'Hello World'
  render() {
    return <>{this.variable}</>
  }
}
```

### Import

- import default
  
```js 
import ... form './components/...'
```

- import variable
  
```js 
import { ... } form './components/...'
```

#### Event

Class Event Component

```js
import React, { Component } from 'react'

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
```

Arrow Function Event Component

```js
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
```

### EventData

```js
import React, { Component } from 'react'
/* eslint-disable */

// Class EventData Component
export class EvenData extends Component {
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
        <h2>Class</h2>
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

// Arrow Function EventData-2 Component
export const EvenData2 = () => {
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
      <h2>Function</h2>
      <button onClick={(ev) => onClickStartStop(ev)}>Start</button>
      <br />
      <br />
      <button onClick={(ev) => onClickAdd(ev)}>10 + 20</button>
      <br />
      <br />
      <button onClick={onClickAdd.bind(this)}>30 * 40</button>
      <br />
      <br />
    </div>
  )
}

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
      <tr>
        <th>Product</th>
        <th>Price</th>
      </tr>
      {data.map((item) => {
        return (
          <tr onMouseOver={onMouseOverRow} onMouseOut={onMouseOutRow}>
            <td>{item[0]}</td>
            <td>{item[1]}</td>
          </tr>
        )
      })}
    </table>
  )
}

```

src/App.js

```js
import { Button } from './components/class-component'
import { EvenData, EvenData2, Table } from './components/EvenData'

function App() {
  return (
    <>
      <Button />
      <EvenData />
      <hr />
      <EvenData2 />
      <hr />
      <Table />
    </>
  )
}

export default App
```





