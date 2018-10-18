import React from 'react';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <ul>
          {
            this.props.notes.map((currentNote) => {
              return <li key={currentNote.id}>
                <h5>{currentNote.title}</h5>
                <p>{currentNote.content}</p>
              </li>
            })
          }
        </ul>
    );
  }
}

export default NoteList;
