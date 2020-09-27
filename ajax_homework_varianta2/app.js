var baseUrl = "https://games-world.herokuapp.com/games";

class Games {
    constructor (imageUrl, title, description){
        this.imageUrl = imageUrl;
        this.title = title;
        this.description = description;
    }

    async getGames() {

        let response = await fetch(baseUrl);
        let gameList = await response.json();
        console.log(gameList)


        var gamesElement = document.querySelector("#games");

        gameList.forEach(game => {

            const gameAll = this.gameDetails(game)
            gamesElement.appendChild(gameAll)

        });

    }
    gameDetails(game) {
        const allGames = document.createElement("div")

        const imageUrl = document.createElement("img");
        imageUrl.src = game.imageUrl;
        allGames.appendChild(imageUrl);

        const title = document.createElement("div");
        title.innerHTML = game.title
        allGames.appendChild(title);

        const description = document.createElement("div");
        description.innerHTML = game.description
        allGames.appendChild(description);

        return allGames
    }


};
 const games = new Games();
 games.getGames();


 async function deleteGame() {
    const response = await fetch("https://games-world.herokuapp.com/games/:id", {
         method: 'DELETE'
     });
     return response.json();
  }

// function deleteGame() {
//     return fetch("https://games-world.herokuapp.com/games/:id",{
//       method: 'DELETE'
//     }).then(function (response) {
//       return response.json(); 
//     })
//   }

// function deleteGame(gameId) {
//     fetch(
//         baseUrl + ':id' + gameId,
//         {method: 'DELETE'}
//     ).then(
//         function(response) {
//             return response.json();
//         }
//     ).then(
//         function(jsonResponse) {
//             console.log("Deleted: ", jsonResponse);
//         }
//     );
// }
deleteGame(0);   

