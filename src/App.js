import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlashcardForm from './FlashcardForm';
import Flashcards from './Flashcards';

class App extends Component {
  state = { cards: [] }

  submitCard = (card) => {
    this.setState({ cards: [...this.state.cards, card] })
  }

  render() {
    console.log(this.state.cards);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Flash Cards</h2>
        </div>
        <FlashcardForm submitCard={this.submitCard} />
        <Flashcards cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
