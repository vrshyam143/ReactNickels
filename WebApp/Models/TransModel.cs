using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.DAL;
using WebApp.DAL.Entities;

namespace WebApp.Models
{
    public class TransModel : ITransModel
    {
        private readonly NDDatabaseContext _dbContext;
        public TransModel(NDDatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Transaction> GetTransactions(string acctNbr, string status, string acctType, int rowCount)
        {
            IEnumerable<Transaction> tranList =
                _dbContext.Set<Transaction>().FromSql("[dbo].[GetTransactions] @ACCTNBR = {0}, @STATUS = {1}, @TYPE = {2}, @ROWCOUNT = {3}", acctNbr, status, acctType, rowCount)
                .OrderByDescending(x => x.TrnDate)
                .ToList();

            return tranList;
        }

        public IEnumerable<Transaction> GetTransactionsByCategory(string category, string acctNbr)
        {
            IEnumerable<Transaction> tranList = _dbContext.Transactions
                .Where(x => x.Category == category && x.AcctNbr == acctNbr)
                .OrderByDescending(x => x.TrnDate)
                .ToList();

            return tranList;
        }
    }
}