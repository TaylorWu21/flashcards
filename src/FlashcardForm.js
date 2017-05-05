import React from 'react';

class FlashcardForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const card = { question: this.refs.question.value, answer: this.refs.answer.value };
    this.props.submitCard(card);
    this.refs.cardForm.reset();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} ref='cardForm'>
        <input type='text' ref='question' />
        <input type='text' ref='answer' />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default FlashcardForm;