import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  
  var noteIndex = 0;

  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  }

  function deleteNote(id)
  {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index)=>{ return index !== id;})
    })
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} id={notes.length}/>
      {notes.map((note, index) => <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote}/>)}
      <Footer />
    </div>
  );
}

export default App;
