/* eslint-disable */
import { useRef } from 'react'

const FormSearch = () => {
  const textKw = useRef()
  const btOk = useRef()

  const onChangeKw = () => {
    if (textKw.current.value.trim(0 !== '')) {
      btOk.current.disabled = false
    } else {
      btOk.current.disabled = true
    }
  }

  return (
    <div
      className="mt-3 mx-auto p-3 rounded"
      style={{ width: '350px', background: '#cee' }}
    >
      <form>
        <div className="form-group mb-3">
          <input
            type="text"
            name="kw"
            placeholder="ค้นหา"
            ref={textKw}
            onInput={onChangeKw}
            className="form-control"
          />
        </div>
        &nbsp;
        <button ref={btOk} className="btn btn-primary btn-sm" disabled>
          ตกลง
        </button>
      </form>
    </div>
  )
}
export default FormSearch
