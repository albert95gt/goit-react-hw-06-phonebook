import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

import { Wrapper, PageTitle, ContactsTitle } from './App.styled';

// const initialValues = [
//   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
// ]
const App = () => {
  return (
    <Wrapper>
      <PageTitle>Phonebook</PageTitle>
      <ToastContainer theme="colored" />
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>

      <Filter />

      <ContactList />
    </Wrapper>
  );
};

export default App;
