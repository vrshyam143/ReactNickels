using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.DAL.Entities
{
    [Table("Transactions")]
    public class Transaction
    {
        [Key]
        public int TrnId { get; set; }
        public string AcctNbr { get; set; }
        public DateTime TrnDate{ get; set; }
        public string Payee{ get; set; }
        public string Type { get; set; }
        public string Amount { get; set; }
        public decimal? Mcc { get; set; }
        public string MccDesc { get; set; }
        public string Status { get; set; }
        public string Category { get; set; }
    }
}
