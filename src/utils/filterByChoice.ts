import { Game } from "../types/gameType";

export function filterByPrice(games:Game[],prompt:(msg:string)=>string,price?:number){
    const maxPrice :number=price|| parseFloat(prompt("Enter maximum price: "));
    if (isNaN(maxPrice) || maxPrice <= 0) {
        console.log("Invalid price. Please enter valid price.");
        return;
    }
    const filteredByPrice = games.filter(game => game.price <= maxPrice);
    if (filteredByPrice.length > 0) {
        console.log(`Games under $${maxPrice}:`);
        filteredByPrice.forEach(game => console.log(`Id: ${game.id}. ${game.name} - $${game.price}`));
    } else {
        console.log("No Games found under that price.");
    }
}

export function filterByGenre(games:Game[],prompt:(msg:string)=>string,Genre?:string){
    const genre :string=Genre|| prompt("Enter genre: ");
    if(!isNaN(Number(genre))){
        console.log("Invalid genre! Please enter valid genre.");
        return;
    }
    const filteredByGenre = games.filter(game => game.genre && game.genre.toLowerCase() === genre.toLowerCase());
    if (filteredByGenre.length > 0) {
        console.log(`Games in genre "${genre}":`);
        filteredByGenre.forEach(game => console.log(`Id: ${game.id}. ${game.name} - Genre: ${game.genre}`));
    } else {
        console.log("No games found in that genre.");
    }
}

export function filterByRating(games:Game[],prompt:(msg:string)=>string,rating?:number){
    const minRating :number=rating|| parseFloat(prompt("Enter minimum rating (0-5): "));
    if (isNaN(minRating) || minRating < 0 || minRating > 5) {
        console.log("Invalid rating. Please enter a value between 0 and 5.");
        return;
    }
    const filtered = games.filter(game => game.rating >= minRating);
    if (filtered.length > 0) {
        console.log(`Games with rating ≥ ${minRating}:`);
        filtered.forEach(game => console.log(`Id: ${game.id}. ${game.name} - Rating: ${game.rating} ⭐`));
    } else {
        console.log("No games found with that rating.");
    }
}