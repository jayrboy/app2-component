/* eslint-disable */
import './products.css'
import { EvenDataClass, EvenDataFunc, Table } from '../components/event-data'

import RefsFunc from '../02-state-refs/RefsFunc'
import RefsArray from '../02-state-refs/RefsArray'
import StateFunc from '../02-state-refs/StateFunc'

import HeaderFun from '../03-context/HeaderFun'
import Content2 from '../03-context/Content2'

const Product = () => {
  return (
    <>
      {/* Event */}
      <h2 className="text-center text-danger">Event</h2>
      <div className=" container border p-2 rounded">
        <h3>class</h3>
        <EvenDataClass />
        <br />
        <h3>function</h3>
        <EvenDataFunc />
        <h3>table</h3>
        <Table />
      </div>
      <br />
      <h2 className="text-center text-success">React Hooks</h2>
      {/* React Hooks */}
      <div className=" container border p-2 rounded">
        <h3>useRef()</h3>
        <RefsFunc />
        <br />
        <RefsArray />
        <br />
        <h3>useState()</h3>
        <StateFunc />
      </div>
      <br />
      {/* useContext */}
      <div className=" container border p-2 rounded">
        <h3>useContext()</h3>
        <HeaderFun />
        <hr />
        <Content2 />
      </div>
    </>
  )
}
export default Product
