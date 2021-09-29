import Header from "./Header";
import Footer from './Footer';
import Note from './Note';
import notes from '../notes';
import CreateArea from "./createArea";
export default function App() {
  function addNote(note){
    console.log(note);
    }
    return (
        <div>
            <Header/>
            <CreateArea/>
            {notes.map((noteItem)=>
          <Note
          key={noteItem.key}
          title={noteItem.title} 
          content={noteItem.content}
          />
    )}
            <Footer/>
        </div>
    )
}
