import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Make the cake', 
        isFinished: false
      },
      {
        id: uuid.v4(),
        title: 'Throw out the garbage', 
        isFinished: false
      },
      {
        id: uuid.v4(),
        title: 'Feed the kitty', 
        isFinished: false
      },
      {
        id: uuid.v4(),
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

  // Add todo

  addTodo = (title) => {

    const newTodo = {
      id: uuid.v4(),
      title: title,
      isFinished: false
    }

    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route path="/" render= {props => (
              <React.Fragment>
                <AddTodo addTodo = {this.addTodo}/>
                <Todos todos={this.state.todos} markComplete = 
                  {this.markComplete} removeTodo = {this.removeTodo} />
              </React.Fragment>
            )} />

            <Route path="/about" component= {About} />
              
          </div>        
        </div>
      </Router>
    );
  }
  
}

export default App;
