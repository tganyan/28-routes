import React from 'react';
import PropTypes from 'prop-types';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);

    const emptyState = {
      content: '',
      title: '',
    }

    this.state = this.props.note ? this.props.note : emptyState;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleComplete(this.state);
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const buttonText = this.props.note ? 'Update' : 'Submit'
    return (
        <form onSubmit={this.handleSubmit}>
          <input
              name='title'
              placeholder='title'
              value={this.state.title}
              onChange={this.handleChange}
          />
          <label htmlFor='title'>Enter your search term</label>
          <textarea
              row='5'
              columns='5'
              placeholder='content'
              name='content'
              value={this.state.content}
              onChange={this.handleChange}
          />
          <label htmlFor='content'>Enter the results limit</label>
          <button type='submit'>{buttonText} note</button>
        </form>
    );
  }
}

NoteCreateForm.propTypes = {
  note: PropTypes.obj,
  handleComplete: PropTypes.func,
}

export default NoteCreateForm;
