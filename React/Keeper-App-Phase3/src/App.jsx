import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    setNotes((preVal) => [...preVal, note]);
  }

  function deleteNote(id) {
    setNotes((preVal) => {
      return preVal.filter((note, index) => {
        return index + 1 !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} id={notes.length + 1} />
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
