import { adminFunctionalities } from "../services/adminFunctionalities";
import { Game } from "../types/gameType";

export function removeGameByAdmin(games:Game[],prompt:(msg:string)=>string,gameName?:string,){
    let name:string=prompt("Enter game name to remove:")
    let foundGame:boolean=games.some(game=>name.toLowerCase()===game.name.toLowerCase());
    if(!foundGame){
        console.log("Game not found!")
        name=prompt("Please enter valid name:")
    }
    const gameIndex:number=games.findIndex(game=>name===game.name)
    games.splice(gameIndex,1)
    console.log(`${name} removed successfully`)
    adminFunctionalities(games,prompt)
    
}