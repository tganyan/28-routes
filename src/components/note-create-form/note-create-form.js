import React from 'react';
import Dashboard from '../dashboard/dashboard';


class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false,
      content: '',
      title: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddNote(this.state);
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
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
          <button type='submit'>submit</button>
        </form>
    );
  }
}

export default NoteCreateForm;
