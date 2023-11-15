using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Activities;
using Application.Core;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions        // Extension class is static
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services,
            IConfiguration config)            // first paramter of ext method is the thing being extended
        {
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            services.AddDbContext<DataContext>(opt =>
            {
                opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });
            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
                });
            });

            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(List.Handler).Assembly)); //Upon startup, the app registers at mediator THEN mediator adds our handlers

            services.AddAutoMapper(typeof(MappingProfiles).Assembly);       // specifying type of application core namespace and to use assembly to locate mapping profiles

            return services;
        }
    }
}