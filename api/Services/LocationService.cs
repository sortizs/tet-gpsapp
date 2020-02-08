using api.Models;
using MongoDB.Driver;
using System.Linq;
using System.Collections.Generic;

namespace api.Services
{
    public class LocationService
    {
        private readonly IMongoCollection<Location> _location;

        public LocationService(IGpsDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            
            _location = database.GetCollection<Location>("Location");
        }

        public List<Location> Get() =>
            _location.Find(location => true).ToList();

        public Location Get(string id) =>
            _location.Find<Location>(location => location.Id == id).FirstOrDefault();

        public List<Location> GetLocations(string id)
        {
            var locations = _location.Find(l => l.UserId == id).ToList();
            return locations;
        }

        public Location Create(Location location)
        {
            _location.InsertOne(location);
            return location;
        }

        public void Update(string id, Location locationIn) =>
            _location.ReplaceOne(location => location.Id == id, locationIn);
    }
}