import React, { Component } from 'react';
import Header from './components/layout/header';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
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
        isFinished: false
      },
      {
        id: 4,
        title: 'Draw some stars on the sky', 
        isFinished: false
      },
    ]
  }

  //Toggle every item isFinished
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
          todo.isFinished = !todo.isFinished
      }
      return todo;
    })  });
  }

  // delete todo

  removeTodo = (id) => {
    this.setState(
      { todos: [...this.state.todos.filter(todo => todo.id !== id)]}
    )
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos} markComplete = 
            {this.markComplete} removeTodo = {this.removeTodo} />
        </div>        
      </div>
    );
  }
  
}

export default App;
