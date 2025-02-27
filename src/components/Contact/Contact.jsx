import {ContactItem, ContactName, ContactNumber, InfoContainer, DeleteButton} from "./Contact.styled.js";

const Contact = ({number, deleteNumber}) => {

    return (
        <ContactItem>
            <InfoContainer>
                <ContactName>{number.name}</ContactName>
                <ContactNumber>{number.number}</ContactNumber>
            </InfoContainer>

            <DeleteButton type='button' onClick={() => deleteNumber(number.id)}>Delete</DeleteButton>
        </ContactItem>
    )
}

export default Contact;