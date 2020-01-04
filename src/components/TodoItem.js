import React, { Component } from 'react'
import Proptypes from 'prop-types';


class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding:'10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }

    
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '} 
                    { title } 
                    <button onClick={this.props.removeTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

//Proptypes
TodoItem.propTypes = {
    todo: Proptypes.object.isRequired,    
    markComplete: Proptypes.func.isRequired,
    removeTodo: Proptypes.func.isRequired
}



const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
