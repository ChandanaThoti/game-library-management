import axios, { AxiosResponse } from "axios";
import { Game } from "../types/gameType";
export async function fetchGames(apiUrl:string):Promise<Game[]>{
    try{
       const response:AxiosResponse = await axios.get(apiUrl);
       return response.data.map((game:Game)=>({
        id:game.id,
        name:game.name,
        genre:game.genre,
        price:game.price,
        platform:game.platform,
        rating:game.rating
       }))
    }
    catch(error){
        console.error("Error fetching games",error)
        throw error
    } }