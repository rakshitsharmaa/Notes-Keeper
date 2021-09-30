import Header from "./Header";
import Footer from './Footer';
import Note from './Note';
import CreateArea from "./createArea";
import { useState } from "react";



export default function App() {
    const [notes,setNotes]=useState([]);

  function addNote(newNote){
    setNotes(prevNotes=>{
        
       return[...prevNotes,newNote];
    });
    }
    return (
        <div>
            <Header/>
            <CreateArea onAdd= {addNote}/>
            {notes.map((note)=>{
                return(
                    <Note
                    title={note.title} 
                    content={note.content}
                    />
                )
              
            }  
    )};
            <Footer/>
        </div>
    )
}
