using Application.Activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {

        //Create endpoints
        [HttpGet] // api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities( CancellationToken ct)
        {
            return await Mediator.Send(new List.Query(), ct);                          // via Mediator object --> gets all activities
        }

        [HttpGet("{id}")]       // Add root parameter that gets specific activity --> api/activities/{id}
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });              // Instantiate Details & initialize the Id to id OF the activity object 
                                                                                    // Handles GetActivity() request(s) to and from api controller via MediatR object
        }

        [HttpPost]              // Add root parameter that creates a new activity --> api/activities
        public async Task<IActionResult> CreateActivity(Activity activity)          // Send activity object as a request 
        {
            await Mediator.Send(new Create.Command { Activity = activity });        // Handles Create() request(s) to and from api controller via MediatR object

            return Ok();
        }

        [HttpPut("{id}")]       // Pass in Id as root parameter --> api/activities/{id}
        public async Task<IActionResult> EditActivity(Guid id, Activity activity)
        {
            activity.Id = id;    // Set the Id of the activity object to the Id passed in the root parameter

            await Mediator.Send(new Edit.Command { Activity = activity });          // Handle EditActivity() request(s) to and from api controller via MediatR object @ BaseApiController

            return Ok();
        }

        [HttpDelete("{id}")]    // Supply Id of activity as root parameter --> api/activities/{id}
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            await Mediator.Send(new Delete.Command { Id = id });                    // Handles DeleteActivity() request(s) to and from api controller via MediatR object

            return Ok();
        }
    }
}