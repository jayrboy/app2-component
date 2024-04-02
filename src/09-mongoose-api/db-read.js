/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import './table-style.css'

export default function DBRead() {
  let [data, setData] = React.useState('')

  React.useEffect(() => {
    fetch('https://vercel-server-react.vercel.app/api/db/read')
      .then((response) => response.json())
      .then((result) => {
        if (result.length > 0) {
          showData(result)
        } else {
          setData(<>ไม่มีรายการข้อมูล</>)
        }
      })
      .catch((err) => alert(err))
  }, [])

  const showData = (result) => {
    let tb = (
      <table>
        <thead>
          <tr>
            <th className="thLeft">ชื่อสินค้า</th>
            <th>ราคา</th>
            <th>วันที่เพิ่มสินค้า</th>
            <th className="thLeft">รายละเอียด</th>
          </tr>
        </thead>
        <tbody>
          {result.map((doc, i) => {
            //จัดรูปแบบวันเดือนปี ที่สามารถเข้าใจได้
            let dt = new Date(Date.parse(doc.date_added))
            let df = (
              <>
                {dt.getDate()}-{dt.getMonth() + 1}-{dt.getFullYear()}
              </>
            )
            let p = new Intl.NumberFormat().format(doc.price)

            return (
              <tr key={i + 1}>
                <td>{doc.name}</td>
                <td className="tdCenter">{p}</td>
                <td className="tdCenter">{df}</td>
                <td>{doc.detail}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )

    setData(tb)
  }

  return (
    <div style={{ margin: '20px' }}>
      <div id="data">{data}</div>
      <br />
      <a href="/db">หน้าหลัก</a>
    </div>
  )
}
