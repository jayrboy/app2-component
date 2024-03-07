import FormSearch from '../05-form/FormSearch'
import FormText from '../05-form/FormText'
import FormBootstrap from '../05-form/FormBootstrap'

const Form = () => {
  return (
    <div className="container">
      <h3>Search</h3>
      <FormSearch />
      <hr />
      <h3>Form Text</h3>
      <FormText />
      <hr />
      <h3>Form </h3>
      <FormBootstrap />
    </div>
  )
}
export default Form
