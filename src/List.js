import React from 'react';
import Card from './Card';
import './styles/List.css';


export default function List(props) {
  console.log(props);
  const cards = props.cards.map(
    (card, i) =>
      <Card
        title={card.title}
        content={card.content}
        key={i}
      />
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