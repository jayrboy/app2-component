const FormBootstrap = () => {
  return (
    <div
      className="mt-3 mx-auto p-3 rounded"
      style={{ width: '350px', background: '#eee' }}
    >
      <form>
        <div className="form-group mb-3">
          <label htmlFor="login" className="form-label">
            Email
          </label>
          <input type="text" id="login" name="login" className="form-control" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="pswd" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="pswd"
            name="pswd"
            className="form-control"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="select1" className="form-label">
            Select
          </label>
          <select id="select1" name="select1" className="form-select">
            <option value="1">Item 1</option>
            <option value="2">Item 2</option>
            <option value="3">Item 3</option>
          </select>
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
export default FormBootstrap
