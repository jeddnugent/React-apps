import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props: {
  title: string;
  content: string;
  id: Number;
  deleteNote: Function;})
  {
  return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
      <button onClick={()=>{props.deleteNote(props.id)}}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;