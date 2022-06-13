import { Formik, Form } from "formik";
import formJson from '../data/custom-fom.json'
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from "../components";
import * as Yup from 'yup';


const InitialValues: { [key: string]: any } = {}
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {

    InitialValues[input.name] = input.value

    if (!input.validations) continue;

    let schema = Yup.string()

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('Este campo es requerido')
        }
        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 2, `Minimo de ${(rule as any).value || 2} caracteres`)
        }
        if (rule.type === 'email') {
            schema = schema.email('Revise el formato del correo')
        }
    }
    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields })


export const DynamicForm = () => {
    return (
        <div>
            <h1>DynamicForm</h1>
            <hr />
            <Formik initialValues={InitialValues} validationSchema={validationSchema} onSubmit={(values) => {
                console.log(values);
            }} >
                {(fomik) => (
                    <Form noValidate>

                        {formJson.map(({ label, name, placeholder, type, options }) => {

                            if (type === 'input' || type === 'password' || type === 'email') {
                                return <MyTextInput
                                    key={name}
                                    type={(type as any)}
                                    label={label}
                                    name={name}
                                    placeholder={placeholder} />
                            } else if (type === 'select') {
                                return <MySelect key={name} label={label} name={name}>
                                    <option value={''} disabled>Select an option</option>
                                    {options?.map(({ id, labe }) => {
                                        return <option key={id} value={id}>{labe}</option>

                                    })}
                                </MySelect>
                            }
                            throw new Error(`Error el type: ${type} no es soportado`)


                        })}



                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
