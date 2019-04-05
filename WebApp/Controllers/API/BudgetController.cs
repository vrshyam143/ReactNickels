using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebApp.DAL.Entities;
using WebApp.Models;
using WebApp.ViewModel;

namespace WebApp.Controllers.API
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Produces("application/json")]
    public class BudgetController : ControllerBase
    {

        private readonly ILogger<BudgetController> _logger;
        private readonly IMapper _mapper;
        private readonly IBudgetModel _budgetModel;

        public BudgetController(ILogger<BudgetController> logger, IMapper mapper, IBudgetModel budgetModel)
        {
            this._logger = logger;
            this._mapper = mapper;
            this._budgetModel = budgetModel;
        }

        [Route("{clientID:int}")]
        [ActionName("client")]
        public ActionResult<BudgetItemListViewModel> Get(int clientID)
        {
            try
            {
                
                BudgetViewModel bvm = _mapper.Map<Budget, BudgetViewModel>(_budgetModel.GetBudget(clientID));
                BudgetItemListViewModel bvlm = TranslateToBudgetItemListViewModel(bvm);
                return Ok(bvlm);
            }
            catch (Exception exception)
            {
                _logger.LogError($"Exception occurred in Get() => {exception}");
                return BadRequest("Exception occurred in BudgetController.Get()");
            }
        }

        [Route("{clientID:int}")]
        [ActionName("budgetbreakdown")]
        public ActionResult<BudgetBreakdownViewModel> GetBugetBreakdown(int clientID)
        {
            try
            {
                Budget budget = _budgetModel.GetBudget(clientID);
                BudgetBreakdownViewModel viewModel = new BudgetBreakdownViewModel();
                viewModel.Budget = budget.MonthlyBudget;
                viewModel.AmountSpent = 3753;
                return Ok(viewModel);
            }
            catch (Exception exception)
            {
                _logger.LogError($"Exception occurred in Get() => {exception}");
                return BadRequest("Exception occurred in BudgetController.Get()");
            }
        }

        [HttpPost]
        [ActionName("SaveBudget")]
        [EnableCors("AllowAllPolicy")]
        public ActionResult<bool> Save([FromBody]BudgetItemListViewModel budgetItemListViewModel)
        {
            try
            {
                bool result = false;
                BudgetViewModel budgetViewModel = TranslateToBudgetViewModel(budgetItemListViewModel);
                if (ModelState.IsValid)
                {
                    result = _budgetModel.SaveBudget(_mapper.Map<BudgetViewModel, Budget>(budgetViewModel));
                }
                return Ok(result);
            }
            catch (Exception exception)
            {
                _logger.LogError($"Exception occurred in Save() => {exception}");
                return BadRequest("Exception occurred in BudgetController.Save()");
            }
        }


        private BudgetViewModel TranslateToBudgetViewModel(BudgetItemListViewModel budgetItemListViewModel)
        {
            BudgetViewModel budgetViewModel = new BudgetViewModel();

            if (budgetItemListViewModel != null && budgetItemListViewModel.BudgetItemList != null && budgetItemListViewModel.BudgetItemList.Count > 0)
            {
                budgetViewModel.ClientID = budgetItemListViewModel.ClientID;
                budgetViewModel.MonthlyBudget = budgetItemListViewModel.MonthlyBudget;

                foreach (BudgetItemViewModel bivm in budgetItemListViewModel.BudgetItemList)
                {
                    switch (bivm.ItemName.ToLower())
                    {
                        case "savings":
                            budgetViewModel.Saving = bivm.ItemPercent;
                            break;
                        case "housing":
                            budgetViewModel.Housing = bivm.ItemPercent;
                            break;
                        case "transportation":
                            budgetViewModel.Transportation = bivm.ItemPercent;
                            break;
                        case "utilities":
                            budgetViewModel.Utilities = bivm.ItemPercent;
                            break;
                        case "food":
                            budgetViewModel.Food = bivm.ItemPercent;
                            break;
                        case "clothing":
                            budgetViewModel.Clothing = bivm.ItemPercent;
                            break;
                        case "misc":
                            budgetViewModel.Misc = bivm.ItemPercent;
                            break;
                        case "personal":
                            budgetViewModel.Personal = bivm.ItemPercent;
                            break;
                        case "recreation":
                            budgetViewModel.Recreation = bivm.ItemPercent;
                            break;
                        case "debt":
                            budgetViewModel.Debt = bivm.ItemPercent;
                            break;
                    }

                }

            }
            return budgetViewModel;
        }

        private BudgetItemListViewModel TranslateToBudgetItemListViewModel(BudgetViewModel budgetViewModel)
        {
            BudgetItemListViewModel result = new BudgetItemListViewModel();

            result.ClientID = budgetViewModel.ClientID;
            result.MonthlyBudget = budgetViewModel.MonthlyBudget;

            result.BudgetItemList = new List<BudgetItemViewModel>();

            result.BudgetItemList.Add(new BudgetItemViewModel(budgetViewModel.Saving, "Savings", (result.MonthlyBudget * budgetViewModel.Saving) / 100, (((result.MonthlyBudget * budgetViewModel.Saving) / 100) * 25) / 100));
            result.BudgetItemList.Add(new BudgetItemViewModel(budgetViewModel.Housing, "Housing", (result.MonthlyBudget * budgetViewModel.Housing) / 100, (((result.MonthlyBudget * budgetViewModel.Housing) / 100) * 90) / 100));
            result.BudgetItemList.Add(new BudgetItemViewModel(budgetViewModel.Transportation, "Transportation", (result.MonthlyBudget * budgetViewModel.Transportation) / 100, (((result.MonthlyBudget * budgetViewModel.Transportation) / 100) * 50) / 100));
            result.BudgetItemList.Add(new BudgetItemViewModel(budgetViewModel.Utilities, "Utilities", (result.MonthlyBudget * budgetViewModel.Utilities) / 100, (((result.MonthlyBudget * budgetViewModel.Utilities) / 100) * 50) / 100));
            result.BudgetItemList.Add(new BudgetItemViewModel(budgetViewModel.Food, "Food", (result.MonthlyBudget * budgetViewModel.Food) / 100, (((result.MonthlyBudget * budgetViewModel.Food) / 100) * 25) / 100));
            result.BudgetItemList.Add(new BudgetItemViewModel(budgetViewModel.Clothing, "Clothing", (result.MonthlyBudget * budgetViewModel.Clothing) / 100, (((result.MonthlyBudget * budgetViewModel.Clothing) / 100) * 10) / 100));
            result.BudgetItemList.Add(new BudgetItemViewModel(budgetViewModel.Misc, "Misc", (result.MonthlyBudget * budgetViewModel.Misc) / 100, (((result.MonthlyBudget * budgetViewModel.Misc) / 100) * 25) / 100));
            result.BudgetItemList.Add(new BudgetItemViewModel(budgetViewModel.Personal, "Personal", (result.MonthlyBudget * budgetViewModel.Personal) / 100, (((result.MonthlyBudget * budgetViewModel.Personal) / 100) * 75) / 100));
            result.BudgetItemList.Add(new BudgetItemViewModel(budgetViewModel.Recreation, "Recreation", (result.MonthlyBudget * budgetViewModel.Recreation) / 100, (((result.MonthlyBudget * budgetViewModel.Recreation) / 100) * 90) / 100));
            result.BudgetItemList.Add(new BudgetItemViewModel(budgetViewModel.Debt, "Debt", (result.MonthlyBudget * budgetViewModel.Debt) / 100, (((result.MonthlyBudget * budgetViewModel.Debt) / 100) * 50) / 100));

            return result;
        }

    }
}