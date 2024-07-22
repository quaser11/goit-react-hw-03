import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';

import {useEffect, useState} from "react";

const initialNumbers = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

function App() {
    const [numbers, setNumbers] = useState(() => {
        const numbers = JSON.parse(localStorage.getItem('numbers'))

        if (numbers !== null) {
            return numbers
        }

        return initialNumbers;
    });

    const [visibleNumbers, setVisibleNumbers] = useState('');

    useEffect(() => {
        localStorage.setItem('numbers', JSON.stringify(numbers));

    }, [numbers])

    const addNumber = (number) => {
        setNumbers((prevArray) => [...prevArray, number]);
    }

    const deleteNumber = (id) => {
        setNumbers((prevNumbers) => (
            prevNumbers.filter((item) => item.id !== id)
        ));
    }

    const visibleItems = numbers.filter((item) =>
        item.name.toLowerCase().includes(visibleNumbers.toLowerCase())
        ||
        item.number.includes(visibleNumbers));

    return (
        <>
            <ContactForm addNumber={addNumber}/>
            <SearchBox value={visibleNumbers} onChange={setVisibleNumbers}/>
            <ContactList numbers={visibleItems} deleteNumber={deleteNumber}/>
        </>
    )
}

export default App
