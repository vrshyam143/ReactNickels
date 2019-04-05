import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PercentageBar from '../../ProgressBar/PercentageBar/PercentageBar';
import './BudgetCard.css';


const BudgetCard = ({ itemName, itemPercent, limitAmt, spentAmt }) => {

  let balanceColor;

    if ((spentAmt * 100) / limitAmt > 80 ) {
    balanceColor = 'red'
  }
   
  return <Card className="card-wrapper">
    <CardContent>
      <div className="budget-card__row-wrapper">
        <div className="budget-card__row">
            <span className="budget-card__label">{itemName}</span>
            <span className="budget-card__balance" style={{ color: balanceColor }}>Spent: {spentAmt}</span>
        </div>
        <div className="budget-card__row">
                  <span>{ itemPercent }% of Budget</span>
                  <span>Limit: {limitAmt}</span>
        </div>
      </div>
          <PercentageBar percentage={(spentAmt * 100) / limitAmt} />
    </CardContent>
  </Card>
}

export default BudgetCard;
