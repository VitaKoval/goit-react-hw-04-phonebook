import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  FormForAddContact,
  Label,
  Input,
  ButtomAddContact,
} from '../ui/ContactForm.styled';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const newContact = { name, number };
//   console.log(newContact);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChangeName = evt => {
    setName(evt.currentTarget.value);
  };
  const handleChangeNumber = evt => {
    setNumber(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    // забрать через пропсы данные state в App (вызываем метод, который прокинули через пропсы для контактФорм)
    onSubmit(newContact);

    // очистить инпут после submit
    setName('');
    setNumber('');
  };

  return (
    <FormForAddContact onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>Name</Label>
      <Input
        type="text"
        name="name"
        id={nameInputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="Enter a name to add to contacts"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={handleChangeName}
        required
      />

      <Label htmlFor={numberInputId}>Number </Label>
      <Input
        type="tel"
        name="number"
        id={numberInputId}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        placeholder="Enter a phone number to add to contacts"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={handleChangeNumber}
        required
      />

      <ButtomAddContact type="submit">Add contact</ButtomAddContact>
    </FormForAddContact>
  );
}

export default ContactForm;
