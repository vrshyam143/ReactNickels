using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.ViewModel
{
    public class BudgetViewModel
    {
        [Required(ErrorMessage = "ClientID cannot be empty")]
        public int ClientID { get; set; }

        [Required(ErrorMessage = "Monthly Budget cannot be empty")]
        public int MonthlyBudget { get; set; }

        [Required(ErrorMessage = "Saving cannot be empty")]
        public int Saving { get; set; }

        [Required(ErrorMessage = "Housing cannot be empty")]
        public int Housing { get; set; }

        [Required(ErrorMessage = "Transportation cannot be empty")]
        public int Transportation { get; set; }

        [Required(ErrorMessage = "Utilities cannot be empty")]
        public int Utilities { get; set; }

        [Required(ErrorMessage = "Food cannot be empty")]
        public int Food { get; set; }

        [Required(ErrorMessage = "Clothing cannot be empty")]
        public int Clothing { get; set; }

        [Required(ErrorMessage = "Misc cannot be empty")]
        public int Misc { get; set; }

        [Required(ErrorMessage = "Personal cannot be empty")]
        public int Personal { get; set; }

        [Required(ErrorMessage = "Recreation cannot be empty")]
        public int Recreation { get; set; }

        [Required(ErrorMessage = "Debt cannot be empty")]
        public int Debt { get; set; }
    }
}
