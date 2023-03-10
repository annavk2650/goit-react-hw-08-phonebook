import { useState } from 'react';
import { FormCont, LabelCont, InputCont, BtnCont } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selector';
import { addContact } from 'redux/contacts/operations';
// import { toast } from 'react-toastify';
// import { LoaderComponent } from 'components/LoaderComponent/LoaderComponent';

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = evt => {
    const newContact = { name, number };

    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      return alert(`🤔 ${name} is already in the phonebook.`);
    } else if (contacts.find(contact => contact.number === number)) {
      return alert(`🤔 ${number} is already in the phonebook.`);
    } else {
      evt.preventDefault();
      dispatch(addContact(newContact));
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormCont onSubmit={handleSubmit}>
      <LabelCont>
        Name
        <InputCont
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Ivan Ivanov"
          required
          onChange={handleChange}
        />
      </LabelCont>
      <LabelCont>
        Number
        <InputCont
          type="tel"
          name="phone"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="11-11-11"
          required
          onChange={handleChange}
        />
      </LabelCont>

      <BtnCont type="submit">Add contact</BtnCont>
      {/* {isLoading && <LoaderComponent />} */}
    </FormCont>
  );
}
