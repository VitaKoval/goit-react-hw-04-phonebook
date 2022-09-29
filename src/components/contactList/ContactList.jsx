import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  Item,
  ButtonDelete,
  ContactName,
} from '../ui/ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id} id={id}>
          <ContactName>{name}:</ContactName>
          {number}
          <ButtonDelete type="buton" onClick={() => onDeleteContact(id)}>
            Delete
          </ButtonDelete>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
