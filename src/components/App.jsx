import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
// import ContactForm from './contactForm/ContactForm';
import ContactForm from './contactForm/ContactFormHooks';
import { Container } from './ui/App.styled';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';

function App() {
  const [contacts, setContacts] = useState(()=>{return JSON.parse(window.localStorage.getItem('contacts')) ?? [] });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // получаем данные с инпутов после Submit
  const forSubmitHandle = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    console.log('contact', contact);

    const findName = contacts.find(
      el => el.name.toLowerCase() === contact.name.toLowerCase()
    );

    findName
      ? alert(`${contact.name} is already in contacts`)
      : setContacts([contact, ...contacts]);
  };

  const filterChange = evt => setFilter(evt.currentTarget.value);

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    //   if (!window.confirm('Are you sure?')) {
    //     return;
    // }
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={forSubmitHandle} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterChange} />
      <ContactList
        contacts={getFilterContacts()}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
}

export default App;
