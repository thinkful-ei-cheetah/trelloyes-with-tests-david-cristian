import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import List from './List';
import store from './Store';


const lists = store.lists.map(
  (list, i) => <List
    header={list.header}
    cards={list.cardIds.map((x) => store.allCards[x] )}
    key={i} />
)


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Trelloyes</h1>
        </header>
        {lists}
      </div>
    );
  }
}

export default App;
