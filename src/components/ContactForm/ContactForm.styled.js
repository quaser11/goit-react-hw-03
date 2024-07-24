import styled from "@emotion/styled";
import {Form, Field, ErrorMessage} from "formik";

export const SubmitButton = styled.button`
    width:100px;
`

export const ContactsForm = styled(Form)`
    display:flex;
    flex-direction:column;
    gap:10px;
    width:200px;
    margin-bottom:20px;
`

export const Input = styled(Field)`
`

export const Error = styled(ErrorMessage)`
    color:red;
`