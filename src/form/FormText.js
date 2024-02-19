import { useRef } from 'react'

const FormText = () => {
  const textPswd = useRef()
  const textPswd2 = useRef()

  const onBlurPassword = () => {
    let pswd = textPswd.current.value
    if (pswd !== '' && !pswd.match(/^[0-9a-zZ-Z]+$/)) {
      textPswd.current.value = ''
      alert('ต้องเป็น 0-9 หรือ a-z หรือ A-Z เท่านั้น')
    }
  }

  const onBlurPassword2 = () => {
    let pswd = textPswd.current.value
    let pswd2 = textPswd2.current.value
    if (pswd !== pswd2) {
      textPswd.current.value = ''
      alert('รหัสผ่านทั้งสองช่องไม่ตรงกัน')
    }
  }

  return (
    <div
      className="mt-4 mx-auto p-3 rounded"
      style={{ width: '400px', background: '#fffaf0' }}
    >
      <form>
        <div className="form-group mb-3">
          <label htmlFor="login">ชื่อผู้ใช้ (Login)</label>
          <input type="text" id="login" name="login" className="form-control" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="pswd">รหัสผ่าน</label>
          <input
            type="password"
            id="pswd"
            name="pswd"
            className="form-control"
            ref={textPswd}
            onBlur={onBlurPassword}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="pswd2">ใส่รหัสผ่านซ้ำ</label>
          <input
            type="password"
            id="pswd2"
            name="pswd2"
            className="form-control"
            ref={textPswd2}
            onBlur={onBlurPassword2}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="pswd2">บันทึกช่วยจำ</label>
          <textarea
            name="memo"
            id="memo"
            rows="3"
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group mb-3">
          <div className="d-flex justify-content-center align-item-center">
            <button className="btn btn-outline-primary btn-sm">OK</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormText
