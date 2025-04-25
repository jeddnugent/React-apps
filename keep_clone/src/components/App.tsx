import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  
  type Note = {
    title: string;
    content: string;
  };

  const [notes, setNotes] = useState<Note[]>([]);
  
  function addNote(newNote: Note){
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  }

  function deleteNote(id: number)
  {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index)=>{ return index !== id;})
    })
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {notes.map((note, index) => <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote}/>)}
      <Footer />
    </div>
  );
}

export default App;
