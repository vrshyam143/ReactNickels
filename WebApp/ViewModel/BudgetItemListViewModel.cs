using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.ViewModel
{
    public class BudgetItemListViewModel
    {
        public int ClientID { get; set; }
        public int MonthlyBudget { get; set; }
        public List<BudgetItemViewModel> BudgetItemList { get; set; }
    }

    public class BudgetItemViewModel
    {
        public BudgetItemViewModel(int itemPercent, string itemName, int limitAmt, int spentAmt)
        {
            this.ItemPercent = itemPercent;
            this.ItemName = itemName;
            this.LimitAmt = limitAmt;
            this.SpentAmt = spentAmt;
        }

        public int ItemPercent { get; set; }
        public string ItemName { get; set; }
        public int LimitAmt { get; set; }
        public int SpentAmt { get; set; }
    }
}
