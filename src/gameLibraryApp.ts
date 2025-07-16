import { fetchGames } from "./data/fetchGames";
import * as dotenv from "dotenv";
import { Game } from "./types/gameType";
import { selectRole } from "./services/selectRole";
dotenv.config()

const API_URL:string=process.env.API_URL as string;
async function gameApp(){
    const prompt = require("prompt-sync")()
    const games:Game[]=await fetchGames(API_URL)
    selectRole(games,prompt)
}
gameApp()