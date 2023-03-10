import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { filteredContacts } from 'redux/contacts/selector';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(filteredContacts);

  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return <ContactListItem key={id} id={id} name={name} number={number}></ContactListItem>;
      })}
    </List>
  );
};
