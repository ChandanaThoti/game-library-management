import { gamerFunctionalities } from "../services/gamerFunctionalities";
import { Game } from "../types/gameType";

let wishList:Game[]=[]
export function addToWishlistByGamer(games:Game[],prompt:(msg:string)=>string):void{
    const gameInput:string=prompt("Enter game name or Id to addToWishlist:");
    const existingGame:Game |undefined=games.find(game=> game.name.toLowerCase()===gameInput.toLowerCase() || game.id.toString()===gameInput);
    if(existingGame){
        wishList.push(existingGame);
        console.log(`${existingGame.name} added to wishlist.`)
    }
    else{
        console.log(`${gameInput} not found.`)
    }
    gamerFunctionalities(games,prompt)
}