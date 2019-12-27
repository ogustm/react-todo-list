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
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '} 
                    { title } 
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: Proptypes.object.isRequired
}



export default TodoItem
