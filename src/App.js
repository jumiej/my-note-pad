import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Main from './Main';
import Sidebar from './Sidebar';

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

const [title, setTitle] =useState("");
const [description, setDescription] = useState("");


  const onAddNote = () => {
    
    const newNote = {
     
      id: uuid(),

      title: title,

      body:description,

      lastModified: Date.now(),
    };

    setNotes([...notes, newNote]);

  };

  const onUpdateNote = (UpdatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (notes.id === activeNote) {
        return UpdatedNote; 
      }

      return note;
    });

    setNotes(updatedNotesArray);

  };

  
  const onDeleteNote =(idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const getActiveNote = () =>{
    return notes.find((note) => note.id === activeNote);
  } 

  ///
  // const UploadAvater = () => {
  //   const [src, setSrc] = useState(null);
  //   const [preview, setPreview] = useState(null);

  //   const onClose = () =>{
  //     setPreview(null);
  //   }

  //   const onCrop = view => {
  //     setPreview(view);
  //   }

  //   return (
  //     <div className='Avater'>
  //       <div
  //       onCrop={onCrop} 
  //       onClose={onClose} 
  //       src={src} 
        
  //       />
  //     </div>
  //   )
  // }
  const [input, setInput] = useState(false)

  const showInput = () => {
    setInput(true)
  }



  ///
  return (
    <div className="App">

  

    <Sidebar
     notes={notes} 
     onAddNote={onAddNote}  
     onDeleteNote={onDeleteNote}
     activeNote={activeNote}
     setActiveNote={setActiveNote}
     title={title}
     showInput={showInput}
     
    />

<Main 
  activeNote={getActiveNote()}
  onUpdateNote={onUpdateNote} 
  title={title}  setTitle={setTitle}
  description={description} setDescription={setDescription}
  nput={input}
  />
     
    </div>
  );
}

export default App;
