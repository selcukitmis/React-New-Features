import React, { useState, useEffect, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { isTemplateElement } from '@babel/types';

const notesReducer = (state, action) => {
    switch (action.type) {
        case "POPULATE_NOTES":
            return action.notes;
        case "ADD_NOTE":
            return [
                ...state,
                { title : action.title, body : action.body }
            ]
            return action.notes;
        case "REMOVE_NOTE":
            return state.filter(note => note.title !== action.title);
        default:
            return state;
    }
}

const NoteApp = (props) => {
    //const [notes, setNotes] = useState([])
    //const [state,dispatch] = useReducer(notesReducer, [])
    const [notes,dispatch] = useReducer(notesReducer, [])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNote = (e) => {
        e.preventDefault();
        dispatch({
            type : "ADD_NOTE",
            title,
            body
        })
        //setNotes([ ...notes,{ title, body } ])
        setTitle("")
        setBody("")
    }

    const removeNote = (title) => {
        dispatch({
            type : "REMOVE_NOTE",
            title
        })
        //setNotes(notes.filter(s => s.title !== title))
    }

    useEffect(() => {
        console.log("Here will run once!")
        const notes = JSON.parse(localStorage.getItem("notes"))
        if (notes) {
            dispatch({type : "POPULATE_NOTES", notes })
            //setNotes(notesData)
        }
    }, [])

    useEffect(() => {
        console.log("Here will run when notes changes")

        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])
    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map((note) => (
                    <Note key={note.title} note={note} removeNote={removeNote} />
                ))}
            </ul>
            <p>Add Note</p>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) => { setTitle(e.target.value) }} /><br />
                <textarea value={body} onChange={(e) => { setBody(e.target.value) }}></textarea>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

const Note = ({ note, removeNote }) => {
    useEffect(() => {
        console.log("Setting up effect")
        return () => {
            console.log("Cleaning up effect!")
        }
    }, [])
    return (
        <div key={note.title}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => removeNote(note.title)}>X</button>
        </div>
    )
}


export default NoteApp