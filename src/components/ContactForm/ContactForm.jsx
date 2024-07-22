import {useId} from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import styled from '@emotion/styled'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from "prop-types";
import * as Yup from 'yup';

const SubmitButton = styled.button`
    width:100px;
`

const ContactsForm = styled(Form)`
    display:flex;
    flex-direction:column;
    gap:10px;
    width:200px;
    margin-bottom:20px;
`

const Error = styled(ErrorMessage)`
    color:red;
`

const validationSchema = Yup.object({
    name: Yup.string().required('Please enter your name'),
    number: Yup.string().min(10, 'Number too short!').max(10, 'Number too long!').required('Please enter a number!'),
})
const ContactForm = ({addNumber}) => {
    const id = {
        name: useId(),
        number: useId(),
    }

    let initialValues = {
        name: '',
        number: ''
    }

    const handleSubmit = (values, action) => {

        addNumber({...values, id: uuidv4()})

        initialValues = {name: '', number: ''}
        action.resetForm
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            <ContactsForm>
                <label htmlFor={id.name}>Name</label>
                <Field type='text' name='name' id={id.name}/>
                <Error name='name' component='span' />
                <label htmlFor={id.number}>Number</label>
                <Field type='text' name='number' id={id.number}></Field>
                <Error name='number' component='span' />

                <Error type='submit'>Submit</Error>
            </ContactsForm>
        </Formik>
    )
}

export default ContactForm

ContactForm.propTypes = PropTypes.func
