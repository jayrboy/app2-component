import { useState, useRef } from 'react'

const FormPost = () => {
  let [postedData, setPostedData] = useState('')
  const form = useRef()

  const onSubmitForm = (ev) => {
    ev.preventDefault()
    const formData = new FormData(form.current)
    const formEnt = Object.fromEntries(formData.entries())

    fetch('https://vercel-server-react.vercel.app/api/form-post', {
      method: 'POST',
      body: JSON.stringify(formEnt),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.text())
      .then((result) => {
        console.log(result)
        setPostedData(result)
      }) // update state
      .catch((err) => alert(err))
  }

  const tableCenter = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  }

  return (
    <>
      <h3>Form POST</h3>
      <div
        className="mt-3 mx-auto p-3 rounded"
        style={{ width: '350px', background: '#EDE7F6' }}
      >
        <form ref={form} onSubmit={onSubmitForm}>
          <div>ติดต่อเรา</div>
          <input
            type="text"
            name="name"
            size="43"
            placeholder="ชื่อ"
            className="form-control"
          />
          <br />
          <input
            type="text"
            name="email"
            size="43"
            placeholder="อีเมล"
            className="form-control"
          />
          <br />
          <textarea
            name="message"
            cols="45"
            rows="4"
            placeholder="ข้อความ"
            className="form-control"
          ></textarea>
          <br />
          <div className="text-center">
            <button className="btn btn-sm btn-success">ตกลง</button>
          </div>
        </form>
      </div>
      <br />
      <div
        dangerouslySetInnerHTML={{ __html: postedData }}
        style={tableCenter}
      ></div>
    </>
  )
}
export default FormPost
