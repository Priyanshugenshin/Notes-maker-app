import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const[note,setNote] = useState([])

  function addNote(newNote) {
    setNote(preNote => {
      return [...preNote,newNote]
    })
  }

  function deleteNote(id) {
    setNote(preNote => {
      return preNote.filter((noteItem,index)=>{
        return index !== id
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {note.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      
      <Footer />
    </div>
  );
}

export default App;
