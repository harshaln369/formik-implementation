import { useFormik } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(15, 'First Name must be less that 15 chars.')
        .required('This cannot be empty'),
      lastname: Yup.string()
        .max(15, 'Last Name must be less that 15 chars.')
        .required('This cannot be empty'),
      email: Yup.string()
        .email('Please enter a valid Email.')
        .required('This cannot be empty'),
    }),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id='firstname'
        name='firstname'
        type='text'
        placeholder='First Name'
        value={formik.values.firstname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.firstname && formik.touched.firstname ? (
        <p>{formik.errors.firstname}</p>
      ) : null}
      <input
        id='lastname'
        name='lastname'
        type='text'
        placeholder='Last Name'
        value={formik.values.lastname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.lastname && formik.touched.lastname ? (
        <p>{formik.errors.lastname}</p>
      ) : null}
      <input
        id='email'
        name='email'
        type='text'
        placeholder='Email'
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.email && formik.touched.email ? (
        <p>{formik.errors.email}</p>
      ) : null}
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Signup;
