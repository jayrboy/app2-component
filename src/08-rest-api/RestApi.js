import RestBasic from './RestBasic'
import FormGet from './FormGet'
import FormPost from './FormPost'

const RestApi = () => {
  return (
    <div className="container mb-5">
      <RestBasic />
      <hr />
      <FormGet />
      <hr />
      <FormPost />
    </div>
  )
}

export default RestApi
