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
    public class AcctTransController : ControllerBase
    {
        private readonly ILogger<AcctTransController> _logger;
        private readonly IMapper _mapper;
        private readonly ITransModel _transModel;

        public AcctTransController(ILogger<AcctTransController> logger, IMapper mapper, ITransModel _transModel)
        {
            this._logger = logger;
            this._mapper = mapper;
            this._transModel = _transModel;
        }

         //000000000254661708 //000000000450726656
        [Route("{acctNbr}/list")]
        public ActionResult<IEnumerable<TransactionListViewModel>> GetTransactions(string acctNbr)
        {
            try
            {
                if (string.IsNullOrEmpty(acctNbr) || acctNbr.Trim().Length == 0 )
                {
                    return BadRequest("acctNbr cannot be empty");
                }

                List<TransactionListViewModel> vmList = new List<TransactionListViewModel>();
                IEnumerable<Transaction> dataList = _transModel.GetTransactions(acctNbr, null, null, 10); 
                foreach (Transaction e in dataList)
                {
                    vmList.Add(new TransactionListViewModel(e));
                }

                return Ok(vmList.OrderByDescending(e => e.Date));
                //return Ok(_mapper.Map<IEnumerable<Transaction>, IEnumerable<TransactionListViewModel>>(_transModel.GetTransactions(acctNbr, null, null, 10)));
            }
            catch (Exception exception)
            {
                _logger.LogError($"Exception occurred in Get() => {exception}");
                return BadRequest("Exception occurred in AcctTransController.GetTransactions()");
            }
        }

        [Route("{status}/checking")]
        public ActionResult<IEnumerable<TransactionListViewModel>> GetCheckingTransactions(string status)
        {
            try
            {
                List<TransactionListViewModel> vmList = new List<TransactionListViewModel>();
                IEnumerable<Transaction> dataList = _transModel.GetTransactions("000000000254661708", string.IsNullOrEmpty(status) ? string.Empty : status.ToUpper(), null, 10);
                foreach (Transaction e in dataList)
                {
                    vmList.Add(new TransactionListViewModel(e));
                }

                return Ok(vmList.OrderByDescending(e => e.Date));
                //return Ok(_mapper.Map<IEnumerable<Transaction>, IEnumerable<TransactionListViewModel>>(_transModel.GetTransactions(acctNbr, null, null, 10)));
            }
            catch (Exception exception)
            {
                _logger.LogError($"Exception occurred in Get() => {exception}");
                return BadRequest("Exception occurred in AcctTransController.GetTransactions()");
            }
        }

        [Route("{status}/savings")]
        public ActionResult<IEnumerable<TransactionListViewModel>> GetSavingTransactions(string status)
        {
            try
            {
                List<TransactionListViewModel> vmList = new List<TransactionListViewModel>();
                IEnumerable<Transaction> dataList = _transModel.GetTransactions("000000000254661708", string.IsNullOrEmpty(status) ? string.Empty : status.ToUpper(), null, 10);
                foreach (Transaction e in dataList)
                {
                    vmList.Add(new TransactionListViewModel(e));
                }

                return Ok(vmList.OrderByDescending(e => e.Date));
                //return Ok(_mapper.Map<IEnumerable<Transaction>, IEnumerable<TransactionListViewModel>>(_transModel.GetTransactions(acctNbr, null, null, 10)));
            }
            catch (Exception exception)
            {
                _logger.LogError($"Exception occurred in Get() => {exception}");
                return BadRequest("Exception occurred in AcctTransController.GetTransactions()");
            }
        }

        [Route("{category}")] //000000000254661708
        [ActionName("bycategory")]
        public ActionResult<IEnumerable<TransactionViewModel>> GetTransactionsByCategory(string category)
        {
            try
            {
                List<TransactionViewModel> vmList = new List<TransactionViewModel>();
                IEnumerable<Transaction> dataList = _transModel.GetTransactionsByCategory(category, "000000000254661708"); //.OrderByDescending(e => e.TrnDate);
                foreach (Transaction e in dataList)
                {
                    vmList.Add(new TransactionViewModel(e));
                }

                return Ok(vmList.OrderByDescending(e => e.TrnDate));
                //return Ok(_mapper.Map<IEnumerable<Transaction>, IEnumerable<TransactionViewModel>>(_transModel.GetTransactionsByCustomerAccount(string.Empty, acctNbr)));
            }
            catch (Exception exception)
            {
                _logger.LogError($"Exception occurred in Get() => {exception}");
                return BadRequest("Exception occurred in AcctTransController.GetTrans()");
            }
        }
    }
}