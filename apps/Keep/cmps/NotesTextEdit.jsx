

export class NotesTextEdit extends React.Component {

  state = {
    updatedText: {
      text: '',
      type: 'NoteText',
    }
  }

  handleChange = (ev) => {
    const value = ev.target.value;
    let updatedText = { ...this.state.updatedText }
    updatedText[ev.target.name] = value;
    this.setState({ updatedText },()=>{
      console.log(this.state.updatedText);
    })
  }

  render() {
    const { noteId, onNoteTextEdit } = this.props
    return <section className="notes-text-edit-container">
      <input type="text" name="text" onChange={this.handleChange} value={this.state.updatedText.text} placeholder="Update your note" />
      <button>Cancel</button>
      <button onClick={() => onNoteTextEdit(this.state.updatedText, noteId)}>Update</button>
    </section>
  }
}