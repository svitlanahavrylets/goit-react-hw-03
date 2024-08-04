import "./App.css";

import { useState } from "react";
import { nanoid } from "nanoid";

import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [users, setUsers] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filterValue, setFilterValue] = useState("");

  const handleFilter = (event) => {
    const value = event.target.value;
    setFilterValue(value);
  };
  const filteredContacts = users.filter((user) =>
    user.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
  );
  const onDeleteProfile = (profileId) => {
    setUsers(users.filter((user) => user.id !== profileId));
  };
  const onAddContact = (user) => {
    const finalUser = {
      ...user,
      id: nanoid(),
    };

    setUsers([finalUser, ...users]);
  };

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filterValue={filterValue} handleFilter={handleFilter} />

      {filteredContacts.map((user) => {
        return (
          <ContactList
            key={user.id}
            id={user.id}
            name={user.name}
            number={user.number}
            onDeleteProfile={onDeleteProfile}
          />
        );
      })}
    </div>
  );
}

export default App;
