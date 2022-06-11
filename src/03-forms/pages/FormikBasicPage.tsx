import { FormikErrors, useFormik } from "formik";

import '../styles/styles.css'



interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}


export const FormikBasicPage = () => {

    const validate = ({ firstName, email, lastName }: FormValues) => {
        const errors: FormikErrors<FormValues> = {}
        if (!firstName) {
            errors.firstName = 'Required'
        } else if (firstName.length >= 15) {
            errors.firstName = 'Must be 15 characer or less'

        }
        if (!lastName) {
            errors.lastName = 'Required'
        } else if (lastName.length >= 10) {
            errors.lastName = 'Must be 10 characer or less'
        }


        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }



        return errors;
    }


    const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        }, onSubmit: values => {
            console.log(values);
        },
        validate
    })


    return (
        <div>
            <h1>FormikBasicPage Tutorial</h1>
            <hr />
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input onBlur={handleBlur} onChange={handleChange} value={values.firstName} type={'text'} name='firstName' />
                {touched.firstName && errors.firstName && <span>{errors.firstName} </span>}
                <label htmlFor="lastName">Last Name</label>
                <input onBlur={handleBlur} onChange={handleChange} value={values.lastName} type={'text'} name='lastName' />
                {touched.lastName && errors.lastName && <span>{errors.lastName}   </span>}
                <label htmlFor="email">Email Adress</label>
                <input onBlur={handleBlur} onChange={handleChange} value={values.email} type={'email'} name='email' />
                {touched.email && errors.email && <span>{errors.email} </span>}

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
