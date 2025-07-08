import { Game } from "../types/gameType";

export function adminFunctionalities(games:Game[],prompt:(msg:string)=>string):void{
    console.log("---------Hey Admin, Please select (1-4)----------")
    console.log("1. Add Game")
    console.log("2. Remove Game")
    console.log("3. View All Games")
    console.log("4. Back")
}