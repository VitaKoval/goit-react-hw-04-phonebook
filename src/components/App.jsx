import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';
import { Container } from './ui/App.styled';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // получаем данные с инпутов после Submit
  forSubmitHandle = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const findName = this.state.contacts.find(
      el => el.name.toLowerCase() === contact.name.toLowerCase()
    );

    findName
      ? alert(`${contact.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  filterChange = evt => this.setState({ filter: evt.currentTarget.value });

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    //   if (!window.confirm('Are you sure?')) {
    //     return;
    // }
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  // первая загрузка страниц
  componentDidMount() {
    // console.log('Первая загрузка');
    const contactLocal = JSON.parse(localStorage.getItem('contacts'));

    if (contactLocal) {
      this.setState({ contacts: contactLocal });
    }
  }

  // при изменении и перерендиге компонента
  componentDidUpdate(prevState) {
    // console.log('Обновление DOM')

    // console.log('до обновления', prevState)
    // console.log('после обновления компонента', this.state)

    if (this.state.contacts !== prevState.contacts) {
      // console.log('изменился список контактов');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      // console.log('1', this.state.contacts);
    }
  }

  render() {

    const { filter } = this.state;
    const filtredContacts = this.getFilterContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.forSubmitHandle} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.filterChange} />
        <ContactList
          contacts={filtredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
