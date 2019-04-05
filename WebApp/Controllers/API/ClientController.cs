using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebApp.DAL.Entities;
using WebApp.Models;
using WebApp.ViewModel;

namespace WebApp.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ClientController : ControllerBase
    {
        private readonly ILogger<ClientController> _logger;
        private readonly IMapper _mapper;
        private readonly IClientModel _clientModel;
        private readonly IAccountModel _accountModel;

        public ClientController(ILogger<ClientController> logger, IMapper mapper, IClientModel clientModel, 
            IAccountModel accountModel)
        {
            this._logger = logger;
            this._mapper = mapper;
            _clientModel = clientModel;
            _accountModel = accountModel;
        }

        public ActionResult<IEnumerable<ClientViewModel>> Get()
        {
            try
            {

                return Ok(_mapper.Map<IEnumerable<Client>, IEnumerable<ClientViewModel>>(_clientModel.GetAllClients()));

            }
            catch (Exception exception)
            {
                _logger.LogError($"Exception occurred in Get() => {exception}");
                return BadRequest("Exception occurred in ClientController.Get()");
            }
        }

        [Route("{clientId}")]
        public ActionResult<ClientViewModel> GetById(string clientId)
        {
            try
            {

                return Ok(_mapper.Map<Client, ClientViewModel>(_clientModel.GetById(clientId)));

            }
            catch (Exception exception)
            {
                _logger.LogError($"Exception occurred in GetById() => {exception}");
                return BadRequest("Exception occurred in ClientController.GetById()");
            }
        }

        [Route("{clientId}/accts")]
        public ActionResult<IEnumerable<AccountViewModel>> GetClientAccounts(string clientId)
        {
            try
            {

                return Ok(_mapper.Map<IEnumerable<Account>, IEnumerable<AccountViewModel>>(_accountModel.GetAccountsByClient(clientId)));

            }
            catch (Exception exception)
            {
                _logger.LogError($"Exception occurred in GetClientAccounts() => {exception}");
                return BadRequest("Exception occurred in ClientController.GetAccountsByClient()");
            }
        }

    }
}