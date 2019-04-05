using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.DAL.Entities;

namespace WebApp.Models
{
    public interface IClientModel
    {
        IEnumerable<Client> GetAllClients();
        Client GetById(string clientId);
    }
}
