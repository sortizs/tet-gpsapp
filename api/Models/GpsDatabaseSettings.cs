namespace api.Models
{
    public class GpsDatabaseSettings : IGpsDatabaseSettings
    {
        public string GpsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IGpsDatabaseSettings
    {
        string GpsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}