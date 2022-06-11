import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css'

export const RegisterPage = () => {




    const {
        name, email, password1, password2,
        formData,
        onChange, resetForm, isValidEmail } = useForm({
            name: 'brayan',
            email: 'algo@algo.com',
            password1: '123456',
            password2: '12345'
        })

    // const { name, email, password1, password2 } = formData




    const onSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        console.log(formData);

    }

    return (
        <div>
            <h1>Register page</h1>
            <hr />
            <form onSubmit={onSubmit} noValidate>
                <input name='name' className={`${name.trim().length <= 0 && 'has-error'}`} onChange={onChange} value={name} type={'text'} placeholder="Name" />
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}
                <input name='email' className={`${!isValidEmail(email) && 'has-error'}`} onChange={onChange} value={email} type={'email'} placeholder="Email" />
                {!isValidEmail(email) && <span>Email no es valido</span>}

                <input name='password1' onChange={onChange} value={password1} type={'password'} placeholder="Password" />
                {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener 6 caracterers</span>}
                <input name='password2' onChange={onChange} value={password2} type={'password'} placeholder="Repeat Password" />
                {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password2.trim().length > 0 && password2 !== password1 && <span>La contraseña debe ser igual weon</span>}
                <button type='submit' >Create</button>
                <button type='button' onClick={resetForm} >Reset Form</button>
            </form>
        </div>
    )
}
