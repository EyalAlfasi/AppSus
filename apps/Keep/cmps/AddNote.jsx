
export class AddNote extends React.Component {

  state = {
    txt: 'Take a note...',
    newCmp: {
      noteInfo: '',
      type: 'NoteText',
    },

  }

  onAddNote = (ev) => {
    ev.preventDefault();
    this.props.addNote(this.state.newCmp)
  }

  onInputChange = (ev) => {
    const value = ev.target.value;
    const copyCmp = { ...this.state.newCmp}
    copyCmp['noteInfo'] = value
    this.setState({ newCmp: copyCmp },()=>{
    console.log(this.state.newCmp);
    })

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
    const { noteInfo} = this.state.newCmp
    return <section className="note-form">
      <form onSubmit={(ev) => {
        ev.preventDefault()
        this.props.onAddNote(this.state.newCmp)
      }}>
        <textarea  value={noteInfo} placeholder={this.state.txt} type="text" name="note"
        onChange={this.onInputChange}rows="2" cols="40"></textarea>
      {/* <input value={noteInfo} placeholder={this.state.txt} type="text" name="note"
        onChange={this.onInputChange} /> */}
        <button type="submit"><i className="fa fa-plus"></i></button> 
      <div className="add-note-btns-container">
        <i name="" className="fa fa-sticky-note" onClick={() => this.onChangeType('NoteText', 'Take a note...')}></i>
        <i className="fa fa-image" onClick={() => this.onChangeType('NoteImg', 'New image')}></i>
        <i className="fa fa-list" onClick={() => this.onChangeType('NoteTodos', 'New list')}></i>
        <i className="fa fa-video-camera" onClick={() => this.onChangeType('NoteVideo', 'New video')}></i>
      </div>
      </form>
    </section>
  }
}
