import { adminFunctionalities } from "../services/adminFunctionalities";
import { Game } from "../types/gameType";
import { isUniqueName, validateInputString, validatePrice, validateRating } from "../validations/gameValidations";

export function addGameByAdmin(games:Game[],prompt:(msg:string)=>string,
gameName?:string,gameGenre?:string,gamePrice?:number,gamePlatform?:string,gameRating?:number)
:void{
    let id:number=Math.max(...games.map(game=>game.id))+1

    // validate name
    let name:string =gameName|| prompt("Enter name of the game:");  
    while(validateInputString(name) || isUniqueName(games,name)){
        name=prompt("Enter name of the game:");
    }

    // validate genre
    let genre:string =gameGenre|| prompt("Enter genre of the game:");
    while(validateInputString(genre)){
        genre=prompt("Enter genre of the game:");
    }

    // validate price
    let price:number = gamePrice|| parseFloat(prompt("Enter price of the game:"));
    while(validatePrice(price)){    
        price = parseFloat(prompt("Enter price of the game:"));
    }

    // validate platform
    let platform:string =gamePlatform|| prompt("Enter platform of the game:");
    while(validateInputString(platform)){
        platform=prompt("Enter platform of the game:");
    }

    // validate rating
    let rating:number = gameRating|| parseFloat(prompt("Enter rating of the game:"));
    while(validateRating(rating)){     
        rating = parseFloat(prompt("Enter rating of the game:"));
    }
    let eachGame:Game={
        id,
        name:name,
        genre:genre,
        price,
        platform,
        rating
    }
    games.push(eachGame)
    console.log(`${name} added successfully`)
    adminFunctionalities(games,prompt)
};