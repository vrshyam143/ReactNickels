using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.DAL.Entities;

namespace WebApp.Models
{
    public interface IAccountModel
    {
        IEnumerable<Account> GetAccountsByClient(string clientId);
    }
}
