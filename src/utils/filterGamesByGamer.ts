import { gamerFunctionalities } from "../services/gamerFunctionalities";
import { Game } from "../types/gameType";
import { filterByGenre, filterByPrice, filterByRating } from "./filterByChoice";

export function filterGamesByGamer(games:Game[],prompt:(msg:string)=>string):void{
    console.log("Filter By choice");
    console.log("1. Price");
    console.log("2. Genre");
    console.log("3. Rating");
    const operation:string=prompt("Enter choice to filter:");

    switch(operation){
        case "1":
            filterByPrice(games,prompt);
            break;

        case "2":
            filterByGenre(games,prompt);
            break;

        case "3":
            filterByRating(games,prompt)
            break;

        default:
            console.log("Invalid input! Please enter valid input.");
            filterGamesByGamer(games,prompt)
    }
    gamerFunctionalities(games,prompt)
}