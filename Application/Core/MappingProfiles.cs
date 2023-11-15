using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            //  Where do we go from? //  Where do go to?

            CreateMap<Activity, Activity>();            // From Activity to Activity    // Essentially Telling AutoMapper Match The Properties Of This Activity With New Property Values


        }
    }
}