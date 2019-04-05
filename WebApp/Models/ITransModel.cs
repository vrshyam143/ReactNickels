using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.DAL.Entities;

namespace WebApp.Models
{
    public interface ITransModel
    {
        IEnumerable<Transaction> GetTransactions(string acctNbr, string status, string acctType, int rowCount);

        IEnumerable<Transaction> GetTransactionsByCategory(string category, string acctNbr);
    }
}
