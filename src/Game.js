// import React, {useState} from 'react';
//import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import NameForm from './NameForm';

import React, { Component } from 'react';
import { Timer } from 'react-countdown-clock-timer';
import { render } from 'react-dom';


import Card from './components/Card';
import Modal from "./components/Modal";
import StopWatch from "./components/StopWatch";
import './styles.css';

class Game extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      flippedCards: [],
      matchedCards: [],
      moveCount: 0,
      isClickDisabled: false,
      isModalOpen: false,
      images:["Hearts", "Star", "Mushrooms", "Unicorn", "Icecream"],
    }
  }

  componentDidMount() {
    this.createBoard();
  }

  createBoard = () => {
    const cards = [];
    const cardImages = this.state.images.concat(this.state.images).sort(() => Math.random() - 0.5)
    for (let i=1; i <= cardImages.length; i++) {
      const card = {
        id: i,
        isVisible: false,
        isMatched: false,
        isReset: false,
        image: cardImages[i-1]
      }
      cards.push(card)
    }
    this.setState({ cards })
  }

  clearBoard = () => {
    this.setState({ cards: [], flippedCards: [], matchedCards: [], isClickDisabled: false, moveCount: 0 }, () => this.createBoard())
  }

  replay = () => {
    if (this.state.isModalOpen) this.setState({isModalOpen: false})
    const cards = [...this.state.cards]
     cards.forEach(card => {
       card.isVisible = false
       card.isReset = true
     })
    this.setState({cards})
    setTimeout(() => {
      this.clearBoard();
    }, 500)
    this.setState({timeout: new Date()})
  }

  handleCardClick = (clickedCard) => {
    // update flipped status
    const flippedCards = [...this.state.flippedCards]
    if (this.state.flippedCards.length < 2  && !this.state.isClickDisabled && !clickedCard.isVisible) {
      const cards = [...this.state.cards]
      cards.forEach(card => {
        if (card.id === clickedCard.id) {
          card.isVisible = !card.isVisible
          flippedCards.push(card)
        }
      })
      this.setState({cards, flippedCards}, () => {
        // max 2 cards flipped at once
        if (flippedCards.length === 2) {
          
          this.setState({ isClickDisabled: true }, () => this.checkForMatch(flippedCards))
        }
      })
    }
  }

  checkForMatch = (flippedCards) => {
    if (flippedCards[0].image === flippedCards[1].image) {
      let matchedCards = [];
      flippedCards.forEach(card => card.isMatched = true)
      matchedCards = flippedCards.concat(this.state.matchedCards)

      // set isMatched to true for matched cards
      this.setState({ flippedCards: [], matchedCards, isClickDisabled: false }, () => {
        this.setState((state) => ({moveCount: state.moveCount + 1 }))
        this.checkForWin()
      })
    } else {
      setTimeout(() => {
        this.setState({ flippedCards: [] , isClickDisabled: false}, () => this.hideAllCards())
      }, 500)
    }
  }

  hideAllCards = () => {
    const cards = [...this.state.cards]
    cards.map(card => !card.isMatched ? card.isVisible = false : card.isVisible = true)
    this.setState({cards})
  }

  checkForWin = () => {
    if (this.state.matchedCards.length === this.state.cards.length) {
      setTimeout(() => {
      this.setState({isModalOpen: true})
      }, 500)
    }

  }
  render(){
  return (
    <div className="appBg">

    <div>
        <Modal moveCount={this.state.moveCount} show={this.state.isModalOpen} onReplay={this.replay} />
        <div className="wrapper">
          <div className="header">
            <div className="move-count">Total Matches: {this.state.moveCount}</div>
            <button className="new-game" onClick={this.replay}>New Game</button>
          </div>
          <div className="container">
            {this.state.cards.map((card, index) => {
              return (
                <Card card={card} key={index} onCardClick={this.handleCardClick}/>
              );
            })}
          </div>
        </div>
        <StopWatch count={this.state.moveCount} onReplay={this.replay} />
    </div>
    </div>
  );
}
}

export default Game;
