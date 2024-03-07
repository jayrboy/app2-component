import { Calendar, Button } from '../components/class-component'
import { Header, Content, Footer } from '../components/func-component'
import { CalculatorClass, CalculatorFunc } from '../components/calculator'

const Home = () => {
  return (
    <div className="mb-5">
      <div style={{ textAlign: 'center' }}>
        <h3>ยินดีต้อนรับสู่ React Store</h3>
        รายชื่อ <a href="/products">สินค้า</a> ที่เรามีจำหน่าย
        <br />
        แต่ท่านต้องเป็น <a href="/member">สมาชิก</a> จึงจะ สั่งซื้อได้
        <br />
        หากมีข้อสงสัย กรุณา <a href="/contact">ติดต่อเรา</a>
      </div>
      <br />
      {/* JSX */}
      <h1 className="text-center text-primary">Component</h1>
      <div className=" container border p-3 rounded">
        <h3>Date</h3>
        <Calendar />
        <hr />
        <h3>Button</h3>
        <Button />
      </div>
      <br />
      <div className=" container border p-1 rounded">
        <Header />
        <Content />
        <Footer />
      </div>
      <br />
      {/* Component */}
      <div className=" container border p-2 rounded">
        <h3>class</h3>
        <CalculatorClass />
        <br />
        <h3>function</h3>
        <CalculatorFunc />
      </div>
    </div>
  )
}
export default Home
