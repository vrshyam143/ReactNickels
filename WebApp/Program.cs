using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace WebApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration(SetupConfiguration)
                .UseStartup<Startup>()
                .CaptureStartupErrors(true);

        private static void SetupConfiguration(WebHostBuilderContext context, IConfigurationBuilder builder)
        {
            // Remove existing configuration
            builder.Sources.Clear();

            builder.AddJsonFile("config.json", false, true)
                .AddEnvironmentVariables();
        }
    }
}
