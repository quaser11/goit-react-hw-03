import {useId} from "react";
import {Formik} from 'formik';
import {SubmitButton, Input, Error, ContactsForm} from './ContactForm.styled.js'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from "prop-types";
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Name too short!').max(50, 'Name too long!').required('Please enter your name'),
    number: Yup.string().min(3, 'Number too short!').max(50, 'Number too long!').required('Please enter a number!'),
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

        action.resetForm()
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            <ContactsForm>
                <label htmlFor={id.name}>Name</label>
                <Input type='text' name='name' id={id.name}/>
                <Error name='name' component='span' />
                <label htmlFor={id.number}>Number</label>
                <Input type='text' name='number' id={id.number}></Input>
                <Error name='number' component='span' />

                <SubmitButton type='submit'>Add</SubmitButton>
            </ContactsForm>
        </Formik>
    )
}

export default ContactForm

ContactForm.propTypes = PropTypes.func
