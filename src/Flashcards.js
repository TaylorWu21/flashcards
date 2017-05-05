import React from 'react';
import Flashcard from './Flashcard';

class Flashcards extends React.Component {
  render() {
    const cards = this.props.cards.map( (card, i) => {
      return(<Flashcard key={i} card={card} />);
    });
    return(
      <div>
        {cards}
      </div>
    );
  }
}

export default Flashcards;