import React from "react"
import Entry from "./Entry"
import emojipedia from "../assets/emojipedia"
import './App.css'

function createEntry(emojiInfo){
  return (
    <Entry 
      key={emojiInfo.id}
      emoji={emojiInfo.emoji}
      name={emojiInfo.name}
      meaning={emojiInfo.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;

