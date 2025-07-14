import { searchGameByGamer } from "../../src/utils/searchGameByGamer";
import { gamerFunctionalities } from "../../src/services/gamerFunctionalities";
import { Game } from "../../src/types/gameType";

jest.mock("../../src/services/gamerFunctionalities")
describe("searchGameByGamer",()=>{
    let logSpy:jest.SpyInstance;
    let promptMock=jest.fn();
    let games:Game[];

    beforeEach(()=>{
        logSpy=jest.spyOn(console,"log").mockImplementation(()=>{});
        games=[{ "id": 1, "name": "Shadow Quest", "genre": "RPG", "price": 49.99, "platform": "PC", "rating": 4.5 },
        { "id": 2, "name": "Rocket Racer", "genre": "Racing", "price": 39.99, "platform": "Xbox", "rating": 4.2 },
        { "id": 3, "name": "Sky Dominion", "genre": "Strategy", "price": 29.99, "platform": "PC", "rating": 4.0 }];
    })
    test("should display game if valid keyword",()=>{
        promptMock.mockReturnValueOnce("racer")
        searchGameByGamer(games,promptMock);
        expect(logSpy).toHaveBeenCalledWith("Rocket Racer found");
        expect(gamerFunctionalities).toHaveBeenCalledWith(games, promptMock);
    })

    test("should return error if game not found",()=>{
        promptMock.mockReturnValueOnce("chandu");
        searchGameByGamer(games,promptMock);
        expect(logSpy).toHaveBeenCalledWith("No games found.");
        expect(gamerFunctionalities).toHaveBeenCalledWith(games,promptMock)
    })
})