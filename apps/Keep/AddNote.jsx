
export class AddNote extends React.Component {

  state = {
    txt: 'Take a note...',
    newCmp: {
      note: '',
      type: '',
    },

  }


  onAddNote = (ev) => {
    ev.preventDefault();
    this.props.addNote(this.state.newCmp)
  }

  onInputChange = (ev) => {
    const value = ev.target.value;
    const field = ev.target.name
    const copyCmp = { ...this.state.newCmp, [field]: value }
    this.setState({ newCmp: copyCmp })
    console.log(this.state.newCmp, 'jdjdj');

  }

  onChangeType = (noteType, placeholderTxt) => {
    const copyCmp = { ...this.state.newCmp }
    copyCmp.type = noteType
    this.setState({
      newCmp: copyCmp,
      txt: placeholderTxt,
    })
  }


  render() {
    const { note } = this.state.newCmp
    return (
      <section className="note-form">
        <form onSubmit={(ev) => {
          ev.preventDefault()
          this.props.onAddNote(this.state.newCmp)
        }}>

          <input value={note} placeholder={this.state.txt} type="text" name="note"
            onChange={this.onInputChange} />
          <label >
            <i name="" className="fa fa-sticky-note" onClick={() => this.onChangeType('NoteText', 'Take a note...')}></i>
            <i className="fa fa-image" onClick={() => this.onChangeType('NoteImg', 'New image')}></i>
            <i className="fa fa-list-u" onClick={() => this.onChangeType('NoteTodos', 'New list')}></i>
            <i className="fa fa-video-camera" onClick={() => this.onChangeType('NoteVideo', 'New video')}></i>
            <button type="submit">Add</button>
          </label>
        </form>

      </section>
    )
  }
}
