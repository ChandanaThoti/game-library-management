import { Game } from "../types/gameType";
import { gamerFunctionalities } from "./gamerFunctionalities";

export function selectRole(games:Game[],prompt:(msg:string)=>string):void{
    let roleInput:string=prompt("Who are You? Admin/Gamer:");
    let role=roleInput.toLowerCase()
    switch(role){
        case "gamer" :
            gamerFunctionalities(games,prompt)
            break;
        default:
            console.log("Invalid input! Please enter valid input.");
            selectRole(games,prompt)  
            
    }
}