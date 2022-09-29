import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  FormForAddContact,
  Label,
  Input,
  ButtomAddContact,
} from '../ui/ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    // забрать через пропсы данные state в App (вызываем метод, который прокинули через пропсы для контактФорм)
    this.props.onSubmit(this.state);
    this.resetInput();
  };

  // очистить инпут после submit
  resetInput = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  render() {
    const { name, number } = this.state;
    return (
      <FormForAddContact onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInputId}>Name</Label>
        <Input
          type="text"
          name="name"
          id={this.nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Enter a name to add to contacts"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={this.handleChange}
          required
        />

        <Label htmlFor={this.numberInputId}>Number </Label>
        <Input
          type="tel"
          name="number"
          id={this.numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          placeholder="Enter a phone number to add to contacts"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={this.handleChange}
          required
        />

        <ButtomAddContact type="submit">Add contact</ButtomAddContact>
      </FormForAddContact>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
