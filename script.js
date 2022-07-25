const input = document.getElementById('movie-name')
const searchBtn = document.getElementById('find-btn')
const main = document.getElementById('main');

function getMovieData(){
    const movieName = input.value;
    const url = `https://www.omdbapi.com/?t=${movieName}&apikey=882d3ae3`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
 
        if (data.Response === "False") {
            main.innerHTML = `<h2>Movie Not Found</h2>`;}
            else{
        main.innerHTML = 
        `<div>
        <img src="${data.Poster}">
        </div>
                <div>
                <h1><strong>Movie : </strong>${data.Title}</h1> 
                <p><b>Year: </b>${data.Year}</p>
                <p><b>Released: </b>${data.Released}</p>
                <h5>Genre: ${data.Genre}</h5>
                <h5>Language:${data.Language}</h5>
                <h5>IMDB Rating: ${data.imdbRating}</h5>
                <h5>Actors:${data.Actors}</h5>
                <h5>Director:${data.Director}</h5>
                <p> <b>Description:</b> ${data.Plot}</p>
                </div>
          
            `;

            }
    })
    .catch(err=>console.log(err))
}


searchBtn.addEventListener('click',()=>{
    getMovieData();
})