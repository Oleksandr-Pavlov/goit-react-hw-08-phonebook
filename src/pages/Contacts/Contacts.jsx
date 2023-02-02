import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { visibleContacts } from 'Redux/selectors';
import { H1 } from './Contacts.styled';

export const Contacts = () => {
  const contacts = useSelector(visibleContacts);

  return (
    <>
      <H1>Phonebook</H1>
      <ContactForm />
      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
        </>
      )}
      <ContactList />
    </>
  );
};
