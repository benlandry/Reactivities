using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Id);         // Get the activity

                _context.Remove(activity);                                              // Removes the activity from MEMORY  (not from DB)

                await _context.SaveChangesAsync();                                      // Save the changes to the DB
            }
        }
    }
}