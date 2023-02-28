import React, { Component } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Main from './Main';
import Sidebar from './Sidebar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      activeNote: false,
      title: "",
      description: "",
      input: false,
    };
  }

  onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: this.state.title,
      body: this.state.description,
      lastModified: Date.now(),
    };

    this.setState(prevState => ({ notes: [...prevState.notes, newNote] }));
  };

  onUpdateNote = (updatedNote) => {
    const updatedNotesArray = this.state.notes.map((note) => {
      if (note.id === this.state.activeNote) {
        return updatedNote;
      }
      return note;
    });

    this.setState({ notes: updatedNotesArray });
  };

  onDeleteNote = (idToDelete) => {
    const filteredNotes = this.state.notes.filter((note) => note.id !== idToDelete);
    this.setState({ notes: filteredNotes });
  };

  getActiveNote = () => {
    return this.state.notes.find((note) => note.id === this.state.activeNote);
  };

  showInput = () => {
    this.setState({ input: true });
  };

  render() {
    const { notes, activeNote, title, description, input } = this.state;
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

    return (
      <div className="App">
        <Sidebar
          notes={sortedNotes}
          onAddNote={this.onAddNote}
          onDeleteNote={this.onDeleteNote}
          activeNote={activeNote}
          setActiveNote={(id) => this.setState({ activeNote: id })}
          title={title}
          showInput={this.showInput}
        />

        <Main
          activeNote={this.getActiveNote()}
          onUpdateNote={this.onUpdateNote}
          title={title}
          setTitle={(title) => this.setState({ title })}
          description={description}
          setDescription={(description) => this.setState({ description })}
          input={input}
        />
      </div>
    );
  }
}

export default App;
