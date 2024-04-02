import { useState, useRef } from 'react'

const FormGet = () => {
  let [searchResult, setSearchResult] = useState('')
  const form = useRef()

  const onSubmitForm = (event) => {
    event.preventDefault()
    const formData = new FormData(form.current)
    let params = new URLSearchParams(formData) //.toString()
    let URL = 'https://vercel-server-react.vercel.app/api/form-get?' + params

    fetch(URL)
      .then((response) => response.json())
      .then((result) => {
        let r = (
          <>
            ค้นหา {result.target} ที่ตรงกับ: {result.kw} <br />
            พบข้อมูลทั้งหมด: {result.results} รายการ
          </>
        )
        setSearchResult(r)
      })
      .catch((err) => alert(err.message))
  }

  return (
    <>
      <h3>Form GET</h3>
      <div>
        <form
          ref={form}
          onSubmit={onSubmitForm}
          className="d-flex mt-3 justify-content-center"
        >
          <select id="target" name="target">
            <option value="เว็บ">เว็บ</option>
            <option value="รูปภาพ">รูปภาพ</option>
            <option value="วิดีโอ">วิดีโอ</option>
          </select>
          &nbsp; &nbsp;
          <input
            type="text"
            id="kw"
            name="kw"
            className="form-control-sm me-2"
            placeholder="ค้นหาข้อมูล"
          />
          &nbsp;
          <button type="submit" className="btn btn-outline-success">
            ตกลง
          </button>
        </form>

        <div className="mt-3 text-center">{searchResult}</div>
      </div>
    </>
  )
}
export default FormGet
