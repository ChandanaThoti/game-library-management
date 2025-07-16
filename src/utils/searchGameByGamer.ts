import { gamerFunctionalities } from "../services/gamerFunctionalities";
import { Game } from "../types/gameType";

export function searchGameByGamer(games:Game[],prompt:(msg:string)=>string):void{
    const searchKey:string= prompt("Enter keyword to search game:")
    let found:Game[]=games.filter(game=>game.name.toLowerCase().includes(searchKey.toLowerCase()))
    if(found.length > 0){
        found.forEach(game=>{
            console.log(`${game.name} found`)
        })
    }
    else{
        console.log("No games found.")
    }
    gamerFunctionalities(games,prompt)
}