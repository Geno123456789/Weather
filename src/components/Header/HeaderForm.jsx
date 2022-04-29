import { Form, Field } from 'react-final-form'



const HeaderForm = ({handleSubmit}) => {
    <Form
    onSubmit={handleSubmit}
    // validate={validate}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <h2>Simple Default Input</h2>
        <div>
          <label>First Name</label>
          <Field name="firstName" component="input" placeholder="First Name" />
        </div>


        <button type="submit">Submit</button>
      </form>
    )}
  />
}
  


export default HeaderForm;