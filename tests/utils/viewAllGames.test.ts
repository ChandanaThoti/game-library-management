import { Game } from "../../src/types/gameType";
import { viewAllGames } from "../../src/utils/viewAllGames";

describe("viewAllGames",()=>{
    let games:Game[];
    let logSpy:jest.SpyInstance;
    beforeEach(()=>{
        jest.clearAllMocks()
        logSpy=jest.spyOn(console,"log").mockImplementation(()=>{})
        games=[
            { "id": 1, "name": "Shadow Quest", "genre": "RPG", "price": 49.99, "platform": "PC", "rating": 4.5 },
            { "id": 2, "name": "Rocket Racer", "genre": "Racing", "price": 39.99, "platform": "Xbox", "rating": 4.2 },
            { "id": 3, "name": "Sky Dominion", "genre": "Strategy", "price": 29.99, "platform": "PC", "rating": 4.0 }]
    })

    test("Should display data in specified format",()=>{
        viewAllGames(games)
        expect(logSpy).toHaveBeenCalledWith("ID          name                                              genre       Price       platform    Rating      ")
        expect(logSpy).toHaveBeenCalledWith("--------------------------------------------------------------------------------------------------------------")
        expect(logSpy).toHaveBeenCalledWith("1           Shadow Quest                                      RPG         $49.99      PC          4.5         ")
        expect(logSpy).toHaveBeenCalledWith("2           Rocket Racer                                      Racing      $39.99      Xbox        4.2         ")
        expect(logSpy).toHaveBeenCalledWith("3           Sky Dominion                                      Strategy    $29.99      PC          4.0         ")
    })
    test("Display empty when no products",()=>{
        const games:Game[]=[];
        viewAllGames(games);
        expect(games).toEqual([])

    })
})