import React from 'react';
import uuid from 'uuid/v4';
import NoteCreateForm from '../note-create-form/note-create-form';
import NoteList from '../note-list/note-list';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.notes = [];
  }

  handleAddNote = (note) => {
    note.id = uuid();

    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, note],
      }

      console.log(this.state.notes);
    });
  }

  render() {
    return (
        <section>
          <h2>Notes Dashboard</h2>
          <p>Add a new note</p>
          <NoteCreateForm
            handleAddNote = {this.handleAddNote}
          />
          <NoteList
            notes = {this.state.notes}
          />
        </section>
    );
  }
}

export default Dashboard;
