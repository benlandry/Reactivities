using MediatR;
using Persistence;
using Activity = Domain.Activity;

namespace Application.Activities
{
    public class Create
    {
        public class Command : IRequest             // Commands do not return anything( no type parameter )
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {

            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)                // <Unit> ----------- tells API our request is finished so it may move on
            {
                _context.Activities.Add(request.Activity);

                await _context.SaveChangesAsync();

            }
        }

    }
}