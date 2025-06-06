import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from "@mui/material";

function CreateArea(props: {
  addNote: Function;
}) {
  const [newNote, setNote] = useState({
    title: "",
    content: ""
  });
	const [createTapped, setCreateTapped] = useState(false);

	function handleCreateTapped(){
		setCreateTapped(true);
	}

  function handleNoteChange(event: { target: { name: string; value: string; }; }){
    const {name, value} = event.target;
    setNote(prevItem => {
      return {...prevItem, [name]:value};
    });
  }

  function submitNote(event: React.MouseEvent<HTMLButtonElement>) {
    props.addNote(newNote);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input type={createTapped ? "text" : "hidden"} onChange={handleNoteChange} name="title" placeholder="Title" value={newNote.title}/>
        <textarea onClick={handleCreateTapped} onChange={handleNoteChange} name="content" placeholder="Take a note..." rows={createTapped ? 3 : 1} value={newNote.content}/>
        <Zoom in={createTapped}>
          <Fab onClick={submitNote}>
            <AddIcon />
        	</Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
