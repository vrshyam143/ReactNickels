using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.DAL.Entities;
using WebApp.ViewModel;

namespace WebApp.DAL
{
    public class NDEntityToViewModelMappingProfile : Profile
    {
        public NDEntityToViewModelMappingProfile()
        {
            CreateMap<Client, ClientViewModel>()
                .ReverseMap();

            CreateMap<Transaction, TransactionViewModel>()
                .ReverseMap();

            CreateMap<Account, AccountViewModel>()
               .ReverseMap();

            CreateMap<Budget, BudgetViewModel>()
               .ReverseMap();

        }
    }
}
