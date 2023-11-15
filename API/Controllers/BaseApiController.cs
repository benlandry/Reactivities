using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]     // localhost:5000/weatherforecast
    public class BaseApiController : ControllerBase
    {
        private IMediator _mediator; // can only be used in this class

        protected IMediator Mediator => _mediator ??=                                               // protected can be used in this class and any derived
         HttpContext.RequestServices.GetService<IMediator>();                                       // If _mediator ??= is NULL THEN assign


    }
}