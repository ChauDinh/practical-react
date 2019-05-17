import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

/**
 * TodoMVC
 * 
 * Add Todo - done
 * Display Todos - done
 * Cross off todo - done
 * Show number of active todos - done
 * Filter all/active/complete - done
 * Delete todos
 * Delete all complete
 *  Only show if atleast one is complete
 * Button to toggle all on/off
 */

export default class TodoList extends Component {

  state = {
    todos: [],
    todoToShow: 'all',
    toggleAllComplete: true
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          // suppose to update
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    })
  }

  updateTodoToShow = str => {
    this.setState({
      todoToShow: str
    })
  }

  handleDeleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  removeAllCompleteTodos = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.complete)
    });
  }

  render() {
    let todos = [];

    if (this.state.todoToShow === 'all') {
      todos = this.state.todos;
    } else if (this.state.todoToShow === 'active') {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === 'complete') {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {
          todos.map(todo => (
            <Todo 
              key={todo.id} 
              toggleComplete={() => this.toggleComplete(todo.id)} 
              onDelete={() => this.handleDeleteTodo(todo.id)}
              todo={todo} 
            />
          ))
        }
        <div>
          todos left: {this.state.todos.filter(todo => !todo.complete).length}
        </div>
        <div>
          <button onClick={() => this.updateTodoToShow('all')}>all</button>
          <button onClick={() => this.updateTodoToShow('active')}>active</button>
          <button onClick={() => this.updateTodoToShow('complete')}>complete</button>
        </div>
        {this.state.todos.some(todo => todo.complete) ? (
          <div>
            <button onClick={this.removeAllCompleteTodos}>clear completed</button>
          </div>) 
          : null
        }
        <div>
          <button onClick={() => this.setState({
            todos: this.state.todos.map(todo => ({
              ...todo,
              complete: this.state.toggleAllComplete
            })),
            toggleAllComplete: !this.state.toggleAllComplete
          })}>
            toggle all complete
          </button>
        </div>
      </div>
    )
  }
}