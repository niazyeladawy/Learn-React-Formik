import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import './youtubeform.module.css'
import * as Yup from 'yup'
import TextError from './TextError'
const initialValues = {
    name: "",
    email: "",
    channel: "",
    comments: "",
    socials: {
        facebook: "",
        twitter: ""
    },
    phoneNumbers:['','']
}

const onSubmit = (dd) => {
    console.log(dd)
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
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid Email').required('Required'),
    channel: Yup.string().required('Required'),
})

const YoutubeForm = () => {

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}  >
            <Form >
                <div>
                    <label htmlFor="name">Name</label>
                    <Field type="text" id='name' name='name' />
                    <ErrorMessage name='name' component={TextError} />
                </div>

                <div>
                    <label htmlFor="email">email</label>
                    <Field type="email" id='email' name='email' />
                    <ErrorMessage name='email' component={TextError} />
                </div>

                <div>
                    <label htmlFor="channel">channel</label>
                    <Field type="text" id='channel' name='channel' />
                    <ErrorMessage name='channel' component={TextError} />
                </div>

                <div>
                    <label htmlFor="facebook">facebook</label>
                    <Field type="text" id='facebook' name='socials.facebook' />
                </div>

                <div>
                    <label htmlFor="twitter">twitter</label>
                    <Field type="text" id='twitter' name='socials.twitter' />
                </div>

                <div>
                    <label htmlFor="phoneNumber1">phoneNumber1</label>
                    <Field type="number" id='phoneNumber1' name='phoneNumbers[0]' />
                </div>
                <div>
                    <label htmlFor="phoneNumber2">phoneNumber2</label>
                    <Field type="number" id='phoneNumber2' name='phoneNumbers[1]' />
                </div>

                <div>
                    <label htmlFor="comments">comments</label>
                    <Field rows="8" type="text" id='comments' as="textarea" name='comments' />
                </div>


                <button type='submit'>submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm