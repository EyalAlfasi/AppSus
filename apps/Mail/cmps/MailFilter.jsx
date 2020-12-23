export class MailFilter extends React.Component {

    state = {
        filterBy: {
            read: false,
            text: ''
        }
    };

    handleChange = (ev) => {
        const callback = () => {
            this.props.setFilter(this.state.filterBy);
        };
        
        const filterBy = {...this.state.filterBy}
        filterBy[ev.target.name] = ev.target.value;

        this.setState({filterBy}, callback);
    };

    render() {
        return <section className="mails-filter">
            <input type="text" name="text"
                value={this.state.filterBy.text}
                placeholder="Filter by name, subject, and Email address"
                autoComplete="off"
                onChange={this.handleChange} />
        </section>;
    }

}