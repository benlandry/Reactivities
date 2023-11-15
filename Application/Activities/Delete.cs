using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest         // bring in IRequest as a mediator
        {
            public Guid Id { get; set; }
        }


        public class Handler : IRequestHandler<Command>
        {
        private readonly DataContext _context;
            public Handler( DataContext context)
            {
            _context = context;
                
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)      // Go Get The Activity
            {
                var activity = await _context.Activities.FindAsync(request.Id);

                _context.Remove(activity);

                await _context.SaveChangesAsync();
            }
        }
    }
}