using api.Models;
using api.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace api.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private readonly LocationService _locationService;

        public LocationController(LocationService locationService)
        {
            _locationService = locationService;
        }

        [HttpGet]
        public ActionResult<List<Location>> Get() =>
            _locationService.Get();

        [HttpGet("{id:length(24)}", Name = "GetLocation")]
        public ActionResult<Location> Get(string id)
        {
            var location = _locationService.Get(id);

            if (location == null)
            {
                return NotFound();
            }

            return location;
        }

        [HttpPost]
        public ActionResult<Location> Create(Location location)
        {
            _locationService.Create(location);

            return CreatedAtRoute("GetLocation", new { id = location.Id.ToString() }, location);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Location locationIn)
        {
            var location = _locationService.Get(id);

            if (location == null)
            {
                return NotFound();
            }

            _locationService.Update(id, locationIn);

            return NoContent();
        }
    }
}