using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.DAL.Entities;

namespace WebApp.DAL
{
    public class NDDatabaseContext : DbContext

    {

        public NDDatabaseContext(DbContextOptions<NDDatabaseContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            //builder.Entity<StudentWeekGrade>().HasKey(table => new { table.ID, table.StudentID });
            //builder.Entity<StudentTermScore>().HasKey(table => new { table.ID, table.StudentID });
        }

        public DbSet<Client> Clients { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<Budget> Budgets { get; set; }


    }
}
