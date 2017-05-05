import React from 'react';

class Flashcard extends React.Component {
  state = { showAnswer: false }

  toggleShow = () => {
    this.setState({ showAnswer: !this.state.showAnswer });
  }
  render() {
    return(
      <div onClick={this.toggleShow}>
        <h1>{this.state.showAnswer? this.props.card.answer : this.props.card.question }</h1>
      </div>
    )
  }
}

export default Flashcard;