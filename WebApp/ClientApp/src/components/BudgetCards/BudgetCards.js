import React from 'react';
import BudgetCard from '../BudgetCards/BudgetCard/BudgetCard';

const BudgetCards = ({ cards }) => (
  <div>
    {
      cards.map((card, i) => 
        <BudgetCard key={i} {...card}/>
      )
    }
  </div>
)

export default BudgetCards;
