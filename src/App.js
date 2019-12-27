import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Make the cake', 
        isFinished: false
      },
      {
        id: 2,
        title: 'Throw out the garbage', 
        isFinished: false
      },
      {
        id: 3,
        title: 'Feed the kitty', 
        isFinished: true
      },
      {
        id: 4,
        title: 'Draw some stars on the sky', 
        isFinished: false
      },
    ]
  }

  //Toggle isFinished
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
          todo.isFinished = !todo.isFinished
      }
      return todo;
    })  });
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete = {this.markComplete} />
      </div>
    );
  }
  
}

export default App;
