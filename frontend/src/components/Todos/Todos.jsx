import React from 'react';

class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] }
    }

    componentDidMount() {
        fetch('http://localhost:3000/todos')
            .then(res => res.json())
            .then(res => this.setState({ todos: res }))
            .catch(err => console.error(err));
    }
    render() {
        return (
            <div>
                {this.state.todos.length ? this.state.todos.map(d => {
                        return <p>{d.title}</p>
                    }) : 'No todos found'
                }
            </div>
        )
    }
}

export default Todos;