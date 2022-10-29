import { useFormik } from 'formik'
import React from 'react'
import './youtubeform.module.css'

const YoutubeForm = () => {
    const initialValues={
        name:"",
        email:"",
        channel:"",
    }

    const onSubmit=values =>{
        
    }

    const validate = values =>{
        let errors ={};

        if(!values.name){
            errors.name = "Required"
        }

        if(!values.email){
            errors.email = "Required"
        }
        else if(! /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
            errors.email = "Wrong Email Format"
        }

        if(!values.channel){
            errors.channel = "Required"
        }


        return errors;
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    
console.log(formik.errors);
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text"  onBlur={formik.handleBlur} onChange={formik.handleChange} id='name' name='name' value={formik.values.name} />
                { formik.touched.name &&  formik.errors.name? <span>{formik.errors.name} </span>: null}
                <label htmlFor="email">Email</label>
                <input type="email"  onBlur={formik.handleBlur} onChange={formik.handleChange} id='email' name='email'  value={formik.values.email}/>
                {formik.touched.email  &&  formik.errors.email? <span>{formik.errors.email} </span>:null}
                <label htmlFor="channel">channel</label>
                <input type="text"  onBlur={formik.handleBlur} onChange={formik.handleChange} id='channel' name='channel' value={formik.values.channel} />
                {formik.touched.channel &&   formik.errors.channel? <span>{formik.errors.channel} </span>:null}
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm