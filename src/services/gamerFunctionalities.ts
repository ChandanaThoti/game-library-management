import { Game } from "../types/gameType";
import { filterGamesByGamer } from "../utils/filterGamesByGamer";
import { searchGameByGamer } from "../utils/searchGameByGamer";
import { selectRole } from "./selectRole";

export function gamerFunctionalities(games:Game[],prompt:(msg:string)=>string){
    console.log("------ Hey Gamer, Please select operation ------")
    console.log("1. Search Game");
    console.log("2. Filter Games");
    console.log("3. Add to Wishlist")
    console.log("4. View Wishlist");
    console.log("5. Back")
    const operation:string=prompt("Please select option from (1-5):")

    switch(operation){
        case "1":
        case "search game":
            searchGameByGamer(games,prompt);
            break;

        case "2":
        case "filter games":
            filterGamesByGamer(games,prompt);
            break;
            
        case "5":
        case "back":
            selectRole(games,prompt);
            break;

        default:
            console.log("Invalid input! Please enter valid input.");
            gamerFunctionalities(games,prompt)
    }
}