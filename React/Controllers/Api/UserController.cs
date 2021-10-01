using React.Models.ViewModel;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;

namespace React.Controllers.Api
{
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {
        [HttpGet]
        [Route("")]
        public async Task<IHttpActionResult> GetAllUser()
        {
            var list = new List<User>
           {
               new User
               {
                   Id=1,
                   Name="Sunil",
                   Address="Tahachal"
               },
               new User
               {
                   Id=1,
                   Name="Sujan",
                   Address="Bhaktapur"
               },
               new User
               {
                   Id=1,
                   Name="Saurav",
                   Address="Bhaktapur"
               },
               new User
               {
                   Id=1,
                   Name="Ajay",
                   Address="Dallu"
               },
           };
            return Ok(list);
        }
    }
}
