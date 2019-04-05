using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.DAL.Entities;

namespace WebApp.ViewModel
{
    public class TransactionListViewModel
    {
        public TransactionListViewModel(Transaction e)
        {
            this.Date = e.TrnDate.ToShortDateString();
            this.Description = e.Payee;
            this.Amount =  this.SetDebitCredit(e.Type) + e.Amount;
            this.Type = e.Type;
            //this.DebitCredit = this.SetDebitCredit(e.Type);
        }

        private string SetDebitCredit(string type)
        {
            switch (type)
            {
                case "OVERDRAFT FEE":
                case "ACH BB&T LOAN PAYMENT":
                case "ACH DEBIT":
                case "ACH MISCELLANEOUS DEBIT":
                case "ATM NETWORK CASH WITHDRAWAL":
                case "BB & T 24 CASH WITHDRAWAL":
                case "BB & T ONLINE BILL PAYMENT":
                case "BB & T ONLINE EXTERNAL TRNSF - DR":
                case "CHECK CHARGE":
                case "CONVERTED CHECK -ARC":
                case "CONVERTED CHECK -BOC":
                case "CONVERTED CHECK -POP":
                case "DEBIT CARD MISC DEBIT":
                case "DEBIT CARD NON - BBT ATM FEE":
                case "DEBIT CARD NON - BBT ATM INQ FEE":
                case "DEBIT CARD PURCHASE":
                case "DEBIT CARD PURCHASE - PIN":
                case "DEBIT CARD RECURRING PYMT":
                case "DEBIT CARD RETURN":
                case "DEBIT CARD RETURN-PIN":
                case "DEBIT CARD WITHDRAWAL":
                case "INTERNATIONAL ATM FEE":
                case "INTERNET PAYMENT":
                case "INTL SERVICE ASSESSMENT FEE":
                case "PERSON - TO - PERSON PAYMENT":
                case "RECURRING INTERNET PAYMENT":
                case "SAFE DEPOSIT BOX FEE":
                case "TELEPHONE PAYMENT":
                case "VISA MONEY TRANSFER DEBIT":
                    return "-"; //DEBIT
                case "ACH CREDIT":
                case "ACH MISCELLANEOUS CREDIT":
                case "BB & T 24 DEPOSIT":
                case "BB & T ONLINE EXTERNAL TRNSF - CR":
                case "VISA MONEY TRANSFER CREDIT":
                    return "+"; //CREDIT
                default:
                    return "+"; //CREDIT
            }

        }

        public string Date { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public string Amount { get; set; }
        //public string DebitCredit { get; set; }

    }
}
