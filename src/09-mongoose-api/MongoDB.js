import { Link } from 'react-router-dom'

const MongoDB = () => {
  return (
    <div className="container mb-5">
      <Link to="/db/create">เพิ่มข้อมูล</Link>
      <br />
      <Link to="/db/read">แสดงข้อมูล</Link> <br />
      <Link to="/db/update">แก้ไขข้อมูล</Link> <br />
      <Link to="/db/delete">ลบข้อมูล</Link> <br />
      <Link to="/db/paginate">แบ่งเพจ</Link> <br />
    </div>
  )
}

export default MongoDB
