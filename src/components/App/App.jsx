import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import contacts from '../../contacts.json';
import { useState } from 'react';
import css from './App.module.css';

export default function App() {
  const [filter, setFilter] = useState('');
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList contacts={visibleContacts} />
    </>
  );
}


