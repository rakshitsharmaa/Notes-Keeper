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
    function deleteNode(id){
        setNotes(prevNotes=>{
          return  prevNotes.filter((noteItem,index)=>{
                return index!==id
            })
        })
    }
    return (
        <div>
            <Header/>
            <CreateArea onAdd= {addNote}/>
            {notes.map((note,index)=>{
                return(
                    <Note
                    key={index}
                    id={index} 
                    title={note.title} 
                    content={note.content}
                    onDelete={deleteNode}
                    />
                )
            }  
    )};
            <Footer/>
        </div>
    )
}
