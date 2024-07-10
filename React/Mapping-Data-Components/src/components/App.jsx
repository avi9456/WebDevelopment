import React from "react";
import Card from "./Card";
import contacts from "../assets/contacts";
import "./App.css";

function createCard(contact){
  return (
    <Card 
      key={contact.id}
      name={contact.name}
      src={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}
function App() {
  console.log(contacts);
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
      {/* <Card
        name={contacts[0].name}
        src={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        src={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        src={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;