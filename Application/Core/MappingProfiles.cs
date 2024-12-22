using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()    // CTOR that defines --> Where do we want to go FROM? || Where do we want to GOTO?
        {
           CreateMap<Activity, Activity>();    // AutoMapper looks inside Activity object and maps/matches property names to the
        }
    }
}