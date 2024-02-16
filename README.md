#### ReactDOM และการแสดงเว็บเพจ

```js
import ReactDOM form 'react-dom'

ReactDOM.render(element, container [, callback])
```

- public/index.html
- src/App.js
- src/index.js

# JSX

1. Function Component

- app1/src/App.js

```js
function App() {
  return <h3>Hello World!</h3>
}
```

2. Arrow Function Component

```js
const App = () => <h3>Hello World!</h3>
```

3. Arrow Function Component + React.Fragment (HTML Tag <></>)

```js
const App = () => {
  return (
    <>
      <h3>Hello World!</h3>
    </>
  )
}
```

# CSS ร่วมกับ JSX

- const divStyle = {...} (inline)

```js
const App = () => {
  const divStyle = {
    color: 'red',
    backgroundColor: 'powderblue',
    fontSize: 'larger',
    padding: '3px',
  }
  return (
    <div style={divStyle}>
      <h3>Hello World!</h3>
    </div>
  )
}
```

- src/style.css (external)

```css
h2 {
  font-size: 20px;
  color: blue;
}

.title {
  font-size: 16px;
  color: green;
  text-decoration: underline;
}
```

- src/App.js

```js
impor './style.css'

const App = () => {
  return (
    <>
      <h2>Hello World!</h3>
      <div className="title">React</div>
    </>
  )
}
```

# Array.map()

- map() ต้องมี return เพื่อส่งค่าในแต่ละรอบกลับออกไป
- กรณีที่ใช้ Arrow Function หากมีคำสั่งเดียวไม่ต้องระบุ return ก็ได้

```js
map((item, index) => <div>คำสั่งเดียว<div>)
```

```js
map((item, index) => {
  return <div key={index}>{item}</div>
})
```

- ใช้ method map() จากตัวแปร let

```js
const App = () => {
  let colors = ['red', 'green', 'blue', 'yellow']
  let list = colors.map((i) => <li>{i}</li>)
  return (
    <>
      <h2>Hello World!</h3>
      <ul>{list}</ul>
    </>
  )
}
```

- หรือ ใช้ method map() ใน JSX โดยตรง

```js
const App = () => {
  let colors = ['red', 'green', 'blue', 'yellow']
  return (
    <>
      <h2>Hello World!</h3>
      <ul>
        { colors.map(c => <li>{c}</li>) }
      </ul>
    </>
  )
}
```

# การแสดงรูปภาพ

- public/images

```html
<img src="./images/logo.png" alt="" />
```

- src

```js
import logo from './logo.svg'

return <img src={logo} width="10%" alt="" />
```

==========================================================================

- หลักการของ React จะแบ่งองค์ประกอบภายในเว็บเพจออกเป็นส่วนย่อยๆ ที่เรียกว่า Component
  - Navigation Component (Menu)
  - Content Component และ Component ปลีกย่อยสำหรับเนื้อหาในแต่ละเรื่อง
  - Footer Component
- สร้าง Component ได้ 2 วิธี แบบเก่าจะสร้างแบบ Class แบบใหม่จะสร้างแบบ Function

#### Function Component

1. Function Component

```js
export default function example() {
  return <></>
}
```

2. Arrow Function Component

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

# Import

1. import default

```js
import MyComponent form './components/...'
```

2. import variable

```js
import { MyComponent1, MyComponent2 } form './components/...'
```

==========================================================================

#### การกำหนดและจัดการ Event

1. Class Event Component

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

2. Arrow Function Event Component

```js
export function Calculator2() {
  const n1 = 20
  const n2 = 4
  // arrow function
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

# การตรวจสอบ Event Data

1. การตรวจสอบ Event Data แบบแ Class

```js
import React, { Component } from 'react'

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
```

2. การตรวจสอบ Event Data แบบ Arrow Function

```js
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

3. การแสดง Event Data Component

- src/App.js

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

=========================================================================

#### React Hook

1. useRef()
2. useState()
3. useEffect()
4. useContext()

# useRef

- ตัวแปรใช้อ้างอิงเพื่อเข้าถึง DOM element ต่างๆ ที่ไม่ต้องการ re-render

# useState

- ตัวแปรใช้กำหนดตัวแปรที่อยากให้มีการเปลี่ยนแปลง มีการ re-render ใหม่ทุกครั้งที่มีการเปลี่ยนแปลง

# useEffect

1. มีผลกระทบการตอบสนองต่อ component ครั้งแรก
2. มีผลกระทบการตอบสนองต่อ component ซ้ำ (re-render)
3. มีผลกระทบการตอบสนองต่อ component การเปลี่ยนแปลงค่าตัวแปร state
4. ใช้ตอนการรับ-ส่งข้อมูลกับ server

```js
import { useEffect, useState } from 'react'
ี
function App() {
  let [a, setA] = useState
  useEffect(() => {
    // callback ครั้งแรก
  })

  useEffect(() => {
    // callback ทุกครั้ง
  },[])

  useEffect(() => {
    // callback เมื่อ state เปลี่ยนแปลง
  },[a])

  return <div></div>
}
```

# Centralized storage with Context

- การกำหนดค่า Provider สำหรับ Context (แชร์ระหว่าง Component)
- แยกไฟล์ context.js แล้วเรียกใช้งานโดยการ import

```js
import { createContext } from 'react'

export const userContext = createContext()
// ตัวแปรไม่สามารถ export default (มันจะมองเป็น module)
```

- ทำการห่อหุ้มด้วย Context App.js

```js
import { userContext } from './context' // Import Context
import Header from './components/Header'
import Content from './components/Content'

export default function App() {
  return (
    <userContext.Provider value={'Jay Jakkrit'}>
      <Header />
      <Content />
    </userContext.Provider>
  )
}
```

- การใช้ Context Data

```js
import React from 'react'
import { userContext } from './context'

export default function Content() {
  let user = React.useContext(userContext)

  return <div>Hello {user}</div>
}
```

- เปลี่ยนไปใช้ตัวแปร state in App.js

```js
import { useState } from 'react'
import { userContext } from './context' // Import Context
import Header from './components/Header'
import Content from './components/Content'

export default function App() {
  let [user, setUser] = useState()

  return (
    <userContext.Provider value={[user, setState]}>
      <Header />
      <Content />
    </userContext.Provider>
  )
}
```

==========================================================================

#### React Router Dom

```sh
npm install react-router-dom
```
