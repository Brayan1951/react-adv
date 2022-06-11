import { Formik, Form } from "formik";
import * as Yup from 'yup'
import { MyCheckbox, MySelect, MyTextInput } from "../components";
import '../styles/styles.css'




export const FormikAbstraction = () => {





    return (
        <div>
            <h1>Formik Components </h1>
            <hr />
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values);

                }}

                validationSchema={
                    Yup.object({
                        firstName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Requerido'),
                        lastName: Yup.string().max(10, 'Debe de tener 10 caracteres o menos').required('Requerido'),
                        email: Yup.string().email('Debe de tener un formato valido').required('Requerido'),
                        // terms: Yup.boolean().isTrue('Debe aceptar las condiciones'),
                        terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
                        jobType: Yup.string().notOneOf(['it-jr'], "Esta opcion no es permitida").required('Requerido')
                    })}


            >
                {
                    (formik) => (
                        <Form noValidate >
                            <MyTextInput label="First Name" name="firstName" placeholder="Ej. Brayan" />
                            <MyTextInput label="Last Name" name="lastName" placeholder="Ej. Coveñas" />
                            <MyTextInput label="Email" name="email" placeholder="Ej. bcove@gmail.com" type="email" />


                            <MySelect name="jobType" label="job Type">
                                <option value="" disabled>Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT-Senior</option>
                                <option value="it-jr">IT-Jr</option>
                            </MySelect>
                            <MyCheckbox label={"Terminos"} name={"terms"} />



                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }

            </Formik>


        </div>
    )
}
