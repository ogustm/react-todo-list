import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Make the cake', 
        todoStatus: false
      },
      {
        id: 2,
        title: 'Throw out the garbage', 
        todoStatus: false
      },
      {
        id: 3,
        title: 'Feed the kitty', 
        todoStatus: false
      },
      {
        id: 4,
        title: 'Draw some stars on the sky', 
        todoStatus: false
      },
    ]
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
  
}

export default App;
