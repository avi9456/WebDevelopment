import React, { useState } from "react";

function CreateArea(props) {
  const [Content, setContent] = useState("");
  const [Title, setTitle] = useState("");
  function handeleChange(event) {
    const { name, value } = event.target;
    name === "title" ? setTitle(value) : setContent(value);
  }
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const note = {
            id: props.id,
            title: Title,
            content: Content,
          };
          props.addNote(note);
          setTitle("");
          setContent("");
        }}
      >
        <input
          type="text"
          onChange={handeleChange}
          name="title"
          placeholder="Title"
          value={Title}
        />
        <textarea
          onChange={handeleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={Content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
