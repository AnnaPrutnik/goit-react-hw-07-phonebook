import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../components/Forms/Form';
import UserList from '../components/UserList/UsersList';
import Section from '../components/Section/Section';
import Filter from '../components/Forms/Filter';

import { fetchContacts } from '../redux/phonebook';

function ContactPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <h1 className="title">Phonebook</h1>
      <Section>
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <UserList />
      </Section>
    </div>
  );
}

export default ContactPage;
