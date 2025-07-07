import axios from "axios";
import {fetchGames} from "../../src/data/fetchGames";
import { Game } from "../../src/types/gameType";

jest.mock("axios")
const mockedAxios = axios as jest.Mocked<typeof axios>;
let mockedGames:Game[]=[
    { "id": 1, "name": "Shadow Quest", "genre": "RPG", "price": 49.99, "platform": "PC", "rating": 4.5 },
    { "id": 2, "name": "Rocket Racer", "genre": "Racing", "price": 39.99, "platform": "Xbox", "rating": 4.2 },
    { "id": 3, "name": "Sky Dominion", "genre": "Strategy", "price": 29.99, "platform": "PC", "rating": 4.0 }
]
mockedAxios.get.mockResolvedValue({data:mockedGames})

describe("fetchGames",()=>{
    test("fetch games from api",async()=>{
        const result=await fetchGames("mockapi/games");
        expect(result).toHaveLength(3)
        expect(result).toEqual(mockedGames)
    });
    
})