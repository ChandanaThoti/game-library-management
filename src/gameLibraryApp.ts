import { fetchGames } from "./data/fetchGames";
import * as dotenv from "dotenv";
import { Game } from "./types/gameType";
dotenv.config()

const API_URL:string=process.env.API_URL as string;
async function gameApp(){
    const games:Game[]=await fetchGames(API_URL)
}
gameApp()