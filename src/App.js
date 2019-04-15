import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Card from './Card';
import List from './List';
import store from './Store';

// const card1 = {
//   title: 'title1',
//   content: 'content1'
// }
// const card2 = {
//   title: 'title2',
//   content: 'content2'
// }

// const card3 = {
//   title: 'title3',
//   content: 'content3'
// }

const lists = store.lists.map(
  (list) => <List header={list.header} cards={list.cards} key={list.header} />
  )


class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <h1>HEADER</h1>
      </header>
      <List />
      </div>
    );
  }
}

export default App;
