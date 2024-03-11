import FormCheck from './FormCheck'
import FormSelectFile from './FormSelectFile'
import FormValidation from './FormValidation'

const CheckBox = () => {
  return (
    <div className="container">
      <FormCheck />
      <hr />
      <FormSelectFile />
      <hr />
      <FormValidation />
    </div>
  )
}
export default CheckBox
