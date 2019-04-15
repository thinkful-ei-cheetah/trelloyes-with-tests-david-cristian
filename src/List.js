import React from 'react';
import Card from './Card';
import './styles/List.css';
import store from './Store';

export default function List(props) {
  const cards = props.allCards.map(
    (card) => <Card title={card.title} content={card.content} key={card.title} />
  )

  return (


    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {cards}
        <button type='button' className='randomCard'>Add Random Card</button>
      </div>
    </section>
  )
}