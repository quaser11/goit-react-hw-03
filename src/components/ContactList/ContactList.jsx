import Contact from '../Contact/Contact.jsx'
import {List} from './ContactList.styled.js'

const ContactList = ({numbers, deleteNumber}) => {
    return (
        <List>
            {/* eslint-disable-next-line react/prop-types */}
            {numbers.map(item => (
                <Contact number={item} key={item.id} deleteNumber={deleteNumber} />
            ))}
        </List>
    )
}

export default ContactList