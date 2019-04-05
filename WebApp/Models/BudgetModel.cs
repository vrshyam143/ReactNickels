using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.DAL;
using WebApp.DAL.Entities;

namespace WebApp.Models
{
    public class BudgetModel : IBudgetModel
    {
        private readonly NDDatabaseContext _dbContext;
        public BudgetModel(NDDatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Budget GetBudget(int clientID)
        {
            return _dbContext.Budgets
                .Where(x => x.ClientID == clientID)
                .FirstOrDefault();
        }


        public bool SaveBudget(Budget budget)
        {
            if (ValidateBudget(budget))
            {
                var budgetFromDb = _dbContext.Budgets
                    .Where(x => x.ClientID == budget.ClientID)
                    .FirstOrDefault();

                if (budgetFromDb != null && budgetFromDb.ClientID > 0)
                {
                    budgetFromDb.MonthlyBudget = budget.MonthlyBudget;
                    budgetFromDb.Saving = budget.Saving;
                    budgetFromDb.Housing = budget.Housing;
                    budgetFromDb.Transportation = budget.Transportation;
                    budgetFromDb.Utilities = budget.Utilities;
                    budgetFromDb.Food = budget.Food;
                    budgetFromDb.Clothing = budget.Clothing;
                    budgetFromDb.Misc = budget.Misc;
                    budgetFromDb.Personal = budget.Personal;
                    budgetFromDb.Recreation = budget.Recreation;
                    budgetFromDb.Debt = budget.Debt;

                    _dbContext.Budgets.Update(budgetFromDb);
                    _dbContext.SaveChanges();
                }
                else
                {
                    _dbContext.Budgets.Add(budget);
                    _dbContext.SaveChanges();
                }
                return true;
            }
            else
            {
                return false;
            }
        }

        private bool ValidateBudget(Budget budget)
        {
            return true;
        }
    }
}
