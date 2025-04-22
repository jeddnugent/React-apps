import React, {useState} from "react";

function CreateArea(props) {
  const [newNote, setNote] = useState({
    title: "",
    content: ""
  })

  function handleNoteChange(event){
    const {name, value} = event.target;
    setNote(prevItem => {
      return {...prevItem, [name]:value};
    });
  }

  function submitNote(event) {
    props.addNote(newNote);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input onChange={handleNoteChange} name="title" placeholder="Title" value={newNote.title}/>
        <textarea onChange={handleNoteChange} name="content" placeholder="Take a note..." rows="3" value={newNote.content}/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
