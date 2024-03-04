/* eslint-disable */
import { useRef } from 'react'

export default function FormCheck() {
  const switchReq = useRef()
  const styles = ['bold', 'italic', 'underline']
  const sizes = ['small', 'medium', 'large']
  let checkedStyles = []
  let checkedSize = ''

  const onChangeCheck = (event) => {
    let checked = event.target.checked
    let value = event.target.value
    let idx = checkedStyles.indexOf(value)

    if (checked && idx === -1) {
      checkedStyles.push(value)
    } else {
      checkedStyles.splice(idx, 1)
    }
  }
  //สำหรับจัดการอีเวนต์ของ radio ถ้าเกิดกับรายการใด รายการนั้นจะมีสถานะเป็น on
  //จึงเอาค่าไปเก็บแทนค่าเดิมได้เลย เพราะ radio เลือกได้เพียงรายการเดียว
  const onChangeRadio = (event) => {
    checkedSize = event.target.value
  }
  //เมื่อคลิกปุ่ม OK ถ้า switch เป็น on ให้ตรวจสอบว่า
  //เลือกรายการครบทุกกลุ่มหรือไม่
  const onClickButton = () => {
    if (switchReq.current.checked) {
      if (checkedStyles.length === 0) {
        alert('Please select style')
        return
      } else if (checkedSize === '') {
        alert('Please select size')
        return
      }
    }
    let msg = 'selected style(s): ' + checkedStyles.join(',')
    msg += '\nselected size: ' + checkedSize
    alert(msg)
  }

  return (
    <>
      <h3>From Check</h3>
      <div
        className="mt-4 mx-auto p-3 rounded"
        style={{ width: '450px', background: '#cee' }}
      >
        <form>
          <span>font style:</span>&nbsp;&nbsp;
          {styles.map((st, i) => {
            return (
              <div key={i} className="form-check form-check-inline mb-2">
                <input
                  type="checkbox"
                  id={'check' + i}
                  value={st}
                  className="form-check-input"
                  onChange={onChangeCheck}
                />
                <label htmlFor={'radio' + i} className="from-check-label">
                  {st}
                </label>
              </div>
            )
          })}
          <br />
          {sizes.map((sz, i) => {
            return (
              <div className="form-check form-check-inline mb-2">
                <input
                  type="radio"
                  id={'check' + i}
                  value={sz}
                  className="form-check-input"
                  onChange={onChangeRadio}
                />
                <label htmlFor={'radio' + i} className="from-check-label">
                  {sz}
                </label>
              </div>
            )
          })}
          <div className="form-check form-switch mt-3">
            <input
              type="checkbox"
              id="sw"
              value="require"
              className="form-check-input"
              ref={switchReq}
            />
            <label htmlFor="sw" className="form-check-label">
              require
            </label>
          </div>
          <div className="text-center mt-4">
            <button
              className="btn btn-primary btn-sm px-4"
              onClick={onClickButton}
            >
              OK
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
