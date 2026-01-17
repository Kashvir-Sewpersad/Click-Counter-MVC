
//--------------------------------------------- start of file  ----------------------------------------// 

//========================= start of imports  ===============================// 
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using FunWebsiteApp.Models;

//========================= end of imports  =============================// 

// Define the namespace for  controllers
namespace FunWebsiteApp.Controllers;

// HomeController handles requests for the home page and related actions
public class HomeController : Controller
{
    // Logger for logging information and errors
    private readonly ILogger<HomeController> _logger;

    // Constructor that injects the logger dependency
    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    // Action method for the Index page (home page) to make it visible
    public IActionResult Index()
    {
        return View(); // returns view method  
    } 

    // Action method for the Privacy page
    public IActionResult Privacy()
    {
        return View();
    }

    // Action method for handling errors, with no caching
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
//---------------------------------------------- end of file -------------------------------------// 