using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.DAL;
using WebApp.DAL.Entities;

namespace WebApp.Models
{
    public class AccountModel : IAccountModel
    {
        private readonly NDDatabaseContext _dbContext;
        public AccountModel(NDDatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Account> GetAccountsByClient(string clientId)
        {
            int id = 0;
            if (int.TryParse(clientId, out id))
            {
                return _dbContext.Accounts
                    .Where(x => x.ClientID == id)
                    .ToList();
            }

            return null;
        }
     
    }
}
