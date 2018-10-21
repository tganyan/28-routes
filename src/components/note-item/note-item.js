import React from 'react';
import PropTypes from 'prop-types';
import NoteCreateForm from '../note-create-form/note-create-form';

class NoteItem extends React.Component {
  render() {
    return (
        <li>
          <h5>{this.props.currentNote.title}</h5>
          <p>{this.props.currentNote.content}</p>
          <button
              onClick={this.props.handleRemoveNote.bind(null, this.props.currentNote)}
          >
            Delete note
          </button>
          <NoteCreateForm
              note = {this.props.currentNote}
              handleComplete = {this.props.handleComplete}
          />
        </li>
    );
  }
}

NoteItem.propTypes = {
  currentNote: PropTypes.obj,
  handleRemoveNote: PropTypes.func,
  handleComplete: PropTypes.func,
}

export default NoteItem;
