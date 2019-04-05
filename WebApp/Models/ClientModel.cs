using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.DAL;
using WebApp.DAL.Entities;

namespace WebApp.Models
{
    public class ClientModel : IClientModel
    {
        private readonly NDDatabaseContext _dbContext;
        public ClientModel(NDDatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Client> GetAllClients()
        {
            return _dbContext.Clients.ToList();
        }

        public Client GetById(string clientId)
        {
            return _dbContext.Clients
                .Where(x => x.ClientID == clientId)
                .FirstOrDefault();
        }
    }
}
