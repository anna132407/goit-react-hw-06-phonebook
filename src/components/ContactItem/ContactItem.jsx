import { PropTypes } from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

import {
  ListItem,
  DelBtn,
  ContactName,
  ContactNumber,
} from './ContactItem.styled';

export const ContactItem = ({ contactInfo }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contactInfo;
  return (
    <ListItem>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <DelBtn onClick={() => dispatch(deleteContact(id))}>Delete</DelBtn>
    </ListItem>
  );
};

ContactItem.prototype = {
  contactInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string || PropTypes.number.isRequired,
  }).isRequired,
};
