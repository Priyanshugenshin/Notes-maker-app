import React, { useState } from "react";

function CreateArea(props) {

  const[note,setNotes] = useState({
    title: "",
    content: ""  
  })

  function handleEvent(event) {
    const{name,value} = event.target

    setNotes(preNote =>{
      return {
        ...preNote,
        [name]:value
      }
    })
  }

  function submitNote(event) {
    props.onAdd(note)
    event.preventDefault()
  }

  return (
    <div>
      <form>
        <input onChange = {handleEvent} name="title" value={note.title} placeholder="Title" />
        <textarea onChange = {handleEvent} name="content" value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
