import { useState, useRef } from 'react'

function FormExam2() {
  let form = useRef(null)
  let nameRef = useRef(null)
  let addressRef = useRef(null)
  let keycardPickUpRef = useRef(null)
  let keycardDeliveryRef = useRef(null)
  let bankSCBRef = useRef(null)
  let bankKBankRef = useRef(null)
  let bankBBLRef = useRef(null)
  let fileRef = useRef(null)
  let [postedData, setPostedData] = useState('')

  function onSubmitForm(e) {
    e.preventDefault()

    if (keycardPickUpRef.current.checked) {
      addressRef.current.value = ''
    }

    if (
      !addressRef.current.value.trim() &&
      keycardDeliveryRef.current.checked
    ) {
      alert('กรุณากรอกที่อยู่')
      return
    }

    if (!fileRef.current.files[0]) {
      alert('กรุณาแนบหลักฐานการโอนเงิน')
      return
    }

    const formData = {
      name: nameRef.current.value,
      address: addressRef.current.value,
      keycard: keycardPickUpRef.current.checked ? 'pick_up' : 'home_delivery',
      bank: bankSCBRef.current.checked
        ? 'scb'
        : bankKBankRef.current.checked
        ? 'kbank'
        : 'bbk',
      file: fileRef.current.files[0].name,
    }

    // console.log('Form data:', formData)

    fetch('https://vercel-server-react.vercel.app/api/exam', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.text())
      .then((data) => {
        // console.log('Response:', data)
        setPostedData(data)
      })
      .catch((error) => console.log('Error:', error))
  }

  return (
    <div className="mt-4 p-3 mx-auto rounded" style={{ width: '450px' }}>
      <div className="card">
        <form ref={form} onSubmit={onSubmitForm}>
          <h2 className="card-header">
            แบบฟอร์มสำหรับ <br /> แจ้งการชำระค่าสมัครการเข้าใช้สปอร์ตคลับ
          </h2>
          <div className="p-3">
            <div className="form-group">
              <label htmlFor="name">ชื่อ-นามสกุลผู้สมัคร :</label>
              <input
                type="text"
                id="name"
                name="name"
                ref={nameRef}
                required
                className="form-control form-control-sm"
              />
            </div>
            &nbsp;
            <div className="form-group">
              <label>การรับ Keycard :</label>
              <div className="form-check">
                <input
                  type="radio"
                  name="keycard"
                  ref={keycardPickUpRef}
                  defaultChecked
                  className="form-check-input"
                />
                <label>รับด้วยตนเองที่สปอร์ตคลับ</label>
              </div>
              <div className="form-group">
                <input
                  type="radio"
                  name="keycard"
                  ref={keycardDeliveryRef}
                  className="form-check-input"
                />{' '}
                &nbsp;
                <label>ส่งที่บ้าน (กรุณาใส่ที่อยู่)</label>
                <textarea
                  rows="3"
                  name="address"
                  ref={addressRef}
                  className="form-control mt-2"
                ></textarea>
              </div>
            </div>
            &nbsp;
            <div className="form-group">
              <label>ชำระค่าสมัครผ่านธนาคาร :</label>
              <div className="form-check">
                <input
                  type="radio"
                  name="bank"
                  ref={bankSCBRef}
                  defaultChecked
                  className="form-check-input"
                />
                <label>ธ.ไทยพาณิชย์</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  name="bank"
                  ref={bankKBankRef}
                  className="form-check-input"
                />
                <label>ธ.กสิกรไทย</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  name="bank"
                  ref={bankBBLRef}
                  className="form-check-input"
                />
                <label>ธ.กรุงเทพ</label>
              </div>
            </div>
            &nbsp;
            <div>
              <label>แนบหลักฐานการโอนเงิน :</label>
              <input
                type="file"
                name="slip"
                ref={fileRef}
                className="form-control"
              />
            </div>
            <div className="text-center mt-3">
              <button type="submit" className="btn btn-sm btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postedData }}></div>
    </div>
  )
}
export default FormExam2
