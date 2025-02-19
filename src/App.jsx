import ContactsForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Contacts</h1>
      <SearchBox />
      <ContactsForm />
      <ContactList />
    </div>
  );
}

export default App;
