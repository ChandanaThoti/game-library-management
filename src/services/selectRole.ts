import { Game } from "../types/gameType";
import { adminFunctionalities } from "./adminFunctionalities";

export function selectRole(games:Game[],prompt:(msg:string)=>string):void{
    let roleInput:string=prompt("Who are You? Admin/Gamer:");
    let role=roleInput.toLowerCase()
    switch(role){
        case "admin" :
            adminFunctionalities(games,prompt)
            break;
        default:
            console.log("Invalid input! Please enter valid input.");
            selectRole(games,prompt)  
            
    }
}