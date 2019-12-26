import React, { Component } from 'react'
import Proptypes from 'prop-types';
class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding:'10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.isFinished ? 
            'line-through' : 'none'
        }
    }
    
    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.markComplete} /> {' '} 
                {this.props.todo.title} 
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: Proptypes.array.isRequired
}



export default TodoItem
