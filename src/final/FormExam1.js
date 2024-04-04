import { useState, useRef } from 'react'

function FormExam1() {
  const [childChecked, setChildChecked] = useState(false)
  const [adultChecked, setAdultChecked] = useState(false)
  const [elderlyChecked, setElderlyChecked] = useState(false)
  const childRef = useRef(null)
  const adultRef = useRef(null)
  const elderlyRef = useRef(null)
  const totalRef = useRef(0)

  function onChangeCheck(e) {
    const { name, checked } = e.target
    switch (name) {
      case 'child':
        setChildChecked(checked)
        childRef.current.value = 1
        break
      case 'adult':
        setAdultChecked(checked)
        adultRef.current.value = 1
        break
      case 'elderly':
        setElderlyChecked(checked)
        elderlyRef.current.value = 1
        break
      default:
        break
    }
  }

  function onSubmitForm(e) {
    e.preventDefault()

    if (
      (!childChecked || childRef.current.value === '') &&
      (!adultChecked || adultRef.current.value === '') &&
      (!elderlyChecked || elderlyRef.current.value === '')
    ) {
      alert('กรุณาเลือก checkbox และเพิ่มจำนวนตามที่ต้องการ')
      return
    }

    let childTotal = childChecked ? childRef.current.value * 200 : 0
    let adultTotal = adultChecked ? adultRef.current.value * 500 : 0
    let elderlyTotal = elderlyChecked ? elderlyRef.current.value * 300 : 0
    let total = childTotal + adultTotal + elderlyTotal
    totalRef.current.value = total

    const dataToSend = {
      child: childChecked ? childRef.current.value : 0,
      adult: adultChecked ? adultRef.current.value : 0,
      elderly: elderlyChecked ? elderlyRef.current.value : 0,
      total: total,
    }
    console.log(dataToSend)
  }

  return (
    <div className="mt-4 p-4 mx-auto rounded" style={{ width: '450px' }}>
      <div className="card">
        <h3 className="card-header">ค่าเข้าซาฟารีเวิลด์</h3>
        <form onSubmit={onSubmitForm}>
          {/* Card Form */}
          <div className=" m-3 p-2">
            <div className="mt-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="child"
                  checked={childChecked}
                  onChange={onChangeCheck}
                />
                <label>
                  เด็กส่วนสูงระหว่าง 100-150 ซม. <br /> ค่าเข้า 200 บาท จำนวน
                  &nbsp;
                  <input
                    type="number"
                    ref={childRef}
                    style={{ width: '60px' }}
                    disabled={!childChecked}
                    min={1}
                  />
                  &nbsp; คน
                </label>
              </div>
              &nbsp;
            </div>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="adult"
                  checked={adultChecked}
                  onChange={onChangeCheck}
                />
                <label>
                  ผู้ใหญ่ <br /> ค่าเข้า 500 บาท จำนวน &nbsp;
                  <input
                    type="number"
                    ref={adultRef}
                    disabled={!adultChecked}
                    style={{ width: '60px' }}
                    min={1}
                  />
                  &nbsp; คน
                </label>
              </div>
            </div>
            &nbsp;
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="elderly"
                  checked={elderlyChecked}
                  onChange={onChangeCheck}
                />
                <label>
                  ผู้สูงอายุที่อายุเกิน 60 ปี <br /> ค่าเข้า 300 บาท จำนวน
                  &nbsp;
                  <input
                    type="number"
                    ref={elderlyRef}
                    disabled={!elderlyChecked}
                    style={{ width: '60px' }}
                    min={0}
                  />
                  &nbsp; คน
                </label>
              </div>
            </div>
            {/* Button */}
            <div className="d-flex justify-content-start mt-3 p-3">
              <button className="btn btn-sm btn-primary">คิดเงิน</button>
              &nbsp;
              <button type="reset" className="btn btn-sm btn-secondary">
                รีเซ็ต
              </button>
            </div>
            {/* Calculator */}
            <p className="d-flex justify-content-between mt-3">
              รวมเป็นเงินทั้งสิ้น
              <input
                type="text"
                className="form-control form-control-sm"
                ref={totalRef}
                style={{ width: '60px' }}
                readOnly
              />
              บาท
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormExam1
