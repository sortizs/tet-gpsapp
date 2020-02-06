using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class AuthenticateModel
    {
        [Required]
        public string Username { get; set; }

        public string Password { get; set; }
    }
}