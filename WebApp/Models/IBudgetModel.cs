using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.DAL.Entities;

namespace WebApp.Models
{
    public interface IBudgetModel
    {
        Budget GetBudget(int clientID);

        bool SaveBudget(Budget budget);
    }
}
