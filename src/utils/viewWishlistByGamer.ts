import { gamerFunctionalities } from "../services/gamerFunctionalities";
import { Game } from "../types/gameType";
import { wishList } from "./addToWishlistByGamer";
import { viewAllGames } from "./viewAllGames";

export function viewWishlistByGamer(games:Game[],prompt:(msg:string)=>string):void{
    if (wishList.length === 0) {
        console.log("Your wishlist is empty.");
    }
    console.log("----- Wishlisted Items -----");
    viewAllGames(wishList,["id","name","genre"])
    gamerFunctionalities(games,prompt)
}