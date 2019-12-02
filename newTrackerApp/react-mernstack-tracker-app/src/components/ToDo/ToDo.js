import React, {Component} from 'react';
import List from './List';

class ToDo extends Component{
    constructor(props) {
        super(props);
        this.state = {
          term: '',
          items: []
        };
      }
    
      onChange = (event) => {
        this.setState({ term: event.target.value });
      }
    
      onSubmit = (event) => {
        event.preventDefault();
        this.setState({
          term: '',
          items: [...this.state.items, this.state.term]
        });
      }
    
      render() {
        return (
          <div>
            <form className="ToDo" onSubmit={this.onSubmit}>
              <input value={this.state.term} onChange={this.onChange} />
              <button>Submit</button>
            </form>
            <List items={this.state.items} />
          </div>
        );
      }
    }

export default ToDo;