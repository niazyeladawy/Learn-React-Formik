import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import './youtubeform.module.css'
import * as Yup from 'yup'
const initialValues = {
    name: "",
    email: "",
    channel: "",
}

const onSubmit = ()=>{

}


const validate = values => {
    let errors = {};

    if (!values.name) {
        errors.name = "Required"
    }

    if (!values.email) {
        errors.email = "Required"
    }
    else if (! /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
        errors.email = "Wrong Email Format"
    }

    if (!values.channel) {
        errors.channel = "Required"
    }

    return errors;
}

const validationSchema = Yup.object({
    name:Yup.string().required('Required!'),
    email:Yup.string().email('Invalid Email').required('Required'),
    channel:Yup.string().required('Required'),
})

const YoutubeForm = () => {

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}  >
            <Form >
                <label htmlFor="name">Name</label>
                <Field type="text"  id='name' name='name'  />
                <ErrorMessage name='name' />
                <Field type="email" o id='email' name='email'   />
                <ErrorMessage name='email' />
                <label htmlFor="channel">channel</label>
                <Field type="text"  id='channel' name='channel'   />
                <ErrorMessage name='channel' />
                <button type='submit'>submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm