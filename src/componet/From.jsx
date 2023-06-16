import React from 'react';
import { useFormik } from "formik";
import { valiDateSchema } from '../schema';
import './From.css'

const From = () => {

    // https://codesandbox.io/s/react-dnd-example-try06?file=/src/App.jsx:3147-3150


    const valuesForm = {
        fname: '',
        lname: '',
        email: '',
        number: '',
        address: '',
        password: ''

    }
    const { handleChange, values, handleSubmit } = useFormik({

        initialValues: valuesForm,
        validationSchema: valiDateSchema,

        onSubmit: (values) => {
            console.log('values::: ', values);
        }
    })


    return (
        <>
            <form onSubmit={ handleSubmit } className='full '>
                <center>
                    <h1>school  from</h1>
                    <div  >
                        <label htmlFor="">fname </label><br />
                        <input
                            type="fname"
                            name='fname'
                            id='fname'
                            onChange={ handleChange }
                            value={ values.fname } /><br /><br />
                        <label htmlFor="">lanme</label><br />
                        <input
                            type="lname"
                            name='lname'
                            id='lname'
                            onChange={ handleChange }
                            value={ values.lname } /><br /><br />
                        <label htmlFor="">Email </label><br />
                        <input
                            type="email"
                            name='email'
                            id='email'
                            onChange={ handleChange }
                            value={ values.email } /><br /><br />
                        <label htmlFor="">phon number</label><br />
                        <input
                            type="number"
                            name='number'
                            id='number'
                            onChange={ handleChange }
                            value={ values.number } /> <br /><br />
                        <label htmlFor="">Addres</label><br />
                        <input
                            type="address"
                            name='address'
                            id='address'
                            onChange={ handleChange }
                            value={ values.address } /><br /><br />
                        <label htmlFor="">password</label><br />
                        <input
                            type="password"
                            name='password'
                            id='password'
                            onChange={ handleChange }
                            value={ values.password } /><br /><br />

                        <button type='submit'>submit</button>

                    </div>
                </center>
            </form>
        </>

    )
}

export default From