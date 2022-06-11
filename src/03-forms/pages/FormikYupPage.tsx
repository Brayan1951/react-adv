import { useFormik } from "formik";
import * as Yup from 'yup'
import '../styles/styles.css'




export const FormikYupPage = () => {



    const { handleSubmit, getFieldProps, errors, touched } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        }, onSubmit: values => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Requerido'),
            lastName: Yup.string().max(10, 'Debe de tener 10 caracteres o menos').required('Requerido'),
            email: Yup.string().email('Debe de tener un formato valido').required('Requerido')
        })
    })


    return (
        <div>
            <h1>Formik Page Yup</h1>
            <hr />
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                {/* <input onBlur={handleBlur} onChange={handleChange} value={values.firstName} type={'text'} name='firstName' /> */}
                <input {...getFieldProps('firstName')} type={'text'} />
                {touched.firstName && errors.firstName && <span>{errors.firstName} </span>}
                <label htmlFor="lastName">Last Name</label>
                <input {...getFieldProps('lastName')} type={'text'} />
                {touched.lastName && errors.lastName && <span>{errors.lastName}   </span>}
                <label htmlFor="email">Email Adress</label>
                <input {...getFieldProps('email')} type={'email'} />
                {touched.email && errors.email && <span>{errors.email} </span>}

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
