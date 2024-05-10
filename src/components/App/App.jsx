import ContactList from '../ContactList/ContactList.jsx';
import contacts from '../../contacts.json';
import css from './App.module.css';

export default function App() {
  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactList contacts={contacts} />
    </>
  );
}


