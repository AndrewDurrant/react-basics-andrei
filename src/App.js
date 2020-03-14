import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { Search } from './components/search/search';
import './App.css';

class App extends Component  {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({ monsters: users }))
}

handleSearch() {
  
}

  render() {
    return (
      <div className="App">
        <Search />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
