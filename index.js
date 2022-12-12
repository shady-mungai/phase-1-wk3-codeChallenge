// understanding of problem

/*
-program that displays all movie details of first movie
-program shows all movies on the menu list
-program allows one to buy a ticket if available tickets > 0

*/

//pseudo-code
/*
-fetch(data[0])
add data[0].poster to an image tag to the HTML
iterate thru the keys of the object,
create elem 'li ' and add keys to 'li'
append to div containing img tag

*/

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/films/1")
    .then((resp) => resp.json())
    .then(appendData);

  function appendData(data) {
  document.getElementById("firstMovieImage").src = `${data.poster}`;
    document.getElementById("title").innerText = "Movie title : " + data.title;
    document.getElementById("runTime").innerText = "Run-time : " + data.runtime;
    document.getElementById("showTime").innerText =
      "Showtime : " + data.showtime;

    var ticketsAvailable = data.capacity - data.tickets_sold;

    document.getElementById("availableTickets").innerText =
      "Available tickets : " + ticketsAvailable;
    document.getElementById("description").innerText = data.description;
    let button = document.getElementById("button");

    button.textContent = "Buy Ticket";
    button.addEventListener("click", () => {
      if (ticketsAvailable > 0) {
        ticketsAvailable--;
        document.getElementById("availableTickets").innerHTML =
          `Available tickets: ` + ticketsAvailable;
      } else {
        document.getElementById("availableTickets").innerHTML =
          "No tickets Available";
      }

      document.getElementById("button").appendChild(button);
    });
  }

  const movieMenu = document.getElementById("films");

  fetch("http://localhost:3000/films")
    .then((resp) => resp.json())
    .then(formMenu);

  function formMenu(info) {
    for (const item of info) {
      const menuList = document.createElement("li");
      menuList.id = "list";
      menuList.innerText = item.title;
      menuList.addEventListener("click", () => {
        let i = item.id;
        displayOneMovie(info[i - 1]);
      });
      movieMenu.append(menuList);
    }
  }

  // display movie details

  function displayOneMovie(item) {

    document.getElementById("firstMovieImage").src = `${item.poster}`;
    document.getElementById("title").innerHTML = "Movie title : " + item.title;
    document.getElementById("runTime").innerHTML = "Run-time : " + item.runtime;
    document.getElementById("showTime").innerHTML =
      "Showtime : " + item.showtime;

      var ticketsAvailable = data.capacity - data.tickets_sold;
    document.getElementById("availableTickets").innerHTML =
      "Available tickets : " + ticketsAvailable;
      document.getElementById("description").innerText = item.description;


  }
});
Time