using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using MoviesAPI.Entities;
using MoviesAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers
{
  [Route("api/genres")]
  public class GenresController: ControllerBase
  {
    private readonly IRepository repository;

    public GenresController(IRepository repository)
    {
      this.repository = repository;
    }

    [HttpGet] //api/genres
    [HttpGet("list")]
    [HttpGet("/allgenres")]
    public async Task<ActionResult<List<Genre>>> Get()
    {
      return await repository.GetAllGenres();
    }

    [HttpGet("{Id:int}")] //api/genres/example
    public IActionResult Get(int Id, [FromHeader] string param2)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }
      var genre = repository.GetGenreById(Id);

      if(genre == null)
      {
        return NotFound();
      }

      return Ok(genre);
    }

    [HttpPost]
    public ActionResult Post([FromBody] Genre genre)
    {
      return NoContent();
    }

    [HttpPut]
    public ActionResult Put([FromBody] Genre genre)
    {
      return NoContent();
    }

    [HttpDelete]
    public ActionResult Delete()
    {
      return NoContent();
    }
  }
}
