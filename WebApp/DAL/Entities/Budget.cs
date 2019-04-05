using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.DAL.Entities
{
    [Table("Budget")]
    public class Budget
    {
        [Key]
        public int ClientID { get; set; }

        public int MonthlyBudget { get; set; }
        public int Saving { get; set; }
        public int Housing { get; set; }
        public int Transportation { get; set; }
        public int Utilities { get; set; }
        public int Food { get; set; }
        public int Clothing { get; set; }
        public int Misc { get; set; }
        public int Personal { get; set; }
        public int Recreation { get; set; }
        public int Debt { get; set; }
    }
}
