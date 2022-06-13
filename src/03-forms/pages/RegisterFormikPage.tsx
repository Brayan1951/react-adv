
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';
import '../styles/styles.css'

export const RegisterFormikPage = () => {



    return (
        <div>

            <h1>Reguister Formik PAge </h1>
            <hr />
            <Formik initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: ''
            }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    name: Yup.string().min(2, 'Debe de tener minimo 2 caracteres').max(15, 'Debe de tener 15 caracteres o menos').required('requerido'),
                    email: Yup.string().email('Debe de tener un formato valido').required('Requerido'),
                    password1: Yup.string().min(6, 'Debe de tener minimo 6 caracteres').required('Requerido'),
                    password2: Yup.string().required('Requerido').oneOf([Yup.ref('password1')], 'Debe conincidir')
                })}
            >

                {
                    ({ handleReset }) => (
                        <Form noValidate>
                            <MyTextInput label={'Name'} name={'name'} />
                            <MyTextInput label={'Email'} name={'email'} type="email" />
                            <MyTextInput label={'Password'} name={'password1'} type="password" />
                            <MyTextInput label={'Repeat Password'} name={'password2'} type="password" />
                            <button type='submit'>Submit</button>
                            <button type='button' onClick={handleReset}>Resset Form</button>
                        </Form>
                    )
                }


            </Formik>


        </div>
    )
}
