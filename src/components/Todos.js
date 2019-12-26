import React, { Component } from 'react';
import TodoItem from './TodoItem';
import Proptypes from 'prop-types';


class Todos extends Component {
    render() {
        
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo}/>
        ));
    }
  
}

//PropTypes
Todos.propTypes = {
    todos: Proptypes.array.isRequired
}

export default Todos;