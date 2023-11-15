using System.Diagnostics;
using MediatR;
using Domain;
using Persistence;
using Microsoft.EntityFrameworkCore;
using Activity = Domain.Activity;
using Microsoft.Extensions.Logging;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Activity>> { }            // Mediator Query         

        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Activity>> Handle(Query request, CancellationToken token) //Passes request to the Handler //Since returning a task, it must be async 
            {
        
                return await _context.Activities.ToListAsync(); // Returns List to Activities
            }

        }


    }
}
