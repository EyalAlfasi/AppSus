export class NotesFilter extends React.Component {

    state = {
        filterBy: {
            text: ''
        }
    };

    handleChange = (ev) => {
        const callback = () => {
            this.props.setFilter(this.state.filterBy);
        };

        const filterBy = { ...this.state.filterBy }
        filterBy[ev.target.name] = ev.target.value;
    
        this.setState({ filterBy }, callback);
    };

    render() {
        return <section className="notes-filter">
            <input className="filter-search" type="text" name="text"
                value={this.state.filterBy.text}
                placeholder="Look Me Up.."
                autoComplete="off"
                onChange={this.handleChange} />
                <i className="fa fa-search"></i>
        </section>;
    }

}