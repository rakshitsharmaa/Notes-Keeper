import React from 'react'
import Header from "./Header";
import Footer from './Footer';
import Note from './Note'
export default function App() {
    return (
        <div>
            <Header/>
            <Note title="this is the title of notes" content="this is the content"/> 
            <Footer/>
        </div>
    )
}
