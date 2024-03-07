/* eslint-disable */
import { useRef } from 'react'

const RefsArray = () => {
  const table = useRef()
  const tr = useRef([])
  const data = [
    ['JavaScript', 100],
    ['React', 150],
    ['React Native', 180],
    ['Node.js', 200],
    ['VS Code', 120],
  ]

  const onClickButton = (i) => {
    //การลบแถวออกจากตาราง จะท าให้ลำาดับแถวเปลี่ยนไปจากเดิม
    //ซึ่งอาจไม่ตรงกับล าดับอ้างอิงของแถวนั้นที่ได้ก าหนดไว้ล่วงหน้า
    //ดังนั้น เราต้องตรวจสอบลำดับที่แท้จริงอีกครั้ง เพื่อใช้ในการลบ
    const index = tr.current[i].rowIndex
    table.current.deleteRow(index)
  }

  const onMouseOverRow = (i) => {
    tr.current[i].style.backgroundColor = 'yellow'
  }

  const onMouseOutRow = (i) => {
    tr.current[i].style.backgroundColor = 'white'
  }

  const tableStyles = { margin: 'auto', marginTop: 30 }

  return (
    <table ref={table} border="1" cellPadding={5} style={tableStyles}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => {
          return (
            <tr
              key={i}
              ref={(el) => (tr.current[i] = el)}
              onMouseOver={() => onMouseOverRow(i)}
              onMouseOut={() => onMouseOutRow(i)}
            >
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onClickButton(i)}
                >
                  Delete
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
export default RefsArray
