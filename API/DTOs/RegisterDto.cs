using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterDto
{
    [Required(ErrorMessage = "Username can not be null")]
    public string username { get; set; }
    [Required]
    public string password { get; set; }
}
