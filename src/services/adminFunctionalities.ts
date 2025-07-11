import { Game } from "../types/gameType";
import { addGameByAdmin } from "../utils/addGameByAdmin";
import { removeGameByAdmin } from "../utils/removeGameByAdmin";
import { viewAllGames } from "../utils/viewAllGames";
import { selectRole } from "./selectRole";

export function adminFunctionalities(games:Game[],prompt:(msg:string)=>string):any{
    console.log("---------Hey Admin, Please select (1-4)----------")
    console.log("1. Add Game")
    console.log("2. Remove Game")
    console.log("3. View All Games")
    console.log("4. Back")
    const input:string=prompt("Select operation from (1-4)");
    const operation=input.toLowerCase()
    switch(operation){
        case "1":
            addGameByAdmin(games,prompt)
            break;
        case "2":
            removeGameByAdmin(games,prompt)
            break;
        case "3":
            viewAllGames(games)
            break;
        case "4": 
            selectRole(games,prompt)
            break;
        default:
            console.log("Invalid Input! Please enter valid option")
            adminFunctionalities(games,prompt)
    }
}