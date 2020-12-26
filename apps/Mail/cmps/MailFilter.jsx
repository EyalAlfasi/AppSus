export class MailFilter extends React.Component {

    state = {
        filterBy: {
            read: false,
            text: ''
        }
    };

    handleChange = (ev) => {
        const callback = () => {
            this.props.onSetFilter(this.state.filterBy);
        };
        
        const filterBy = {...this.state.filterBy}
        filterBy[ev.target.name] = ev.target.value;

        this.setState({filterBy}, callback);
    };

    render() {
        return <section className="mails-filter">
            <i className="fa fa-search"></i>
            <input type="text" name="text"
                value={this.state.filterBy.text}
                placeholder="Search..."
                autoComplete="off"
                onChange={this.handleChange} />
        </section>;
    }

}