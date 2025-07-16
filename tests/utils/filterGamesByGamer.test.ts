import { filterGamesByGamer } from "../../src/utils/filterGamesByGamer";
import { gamerFunctionalities } from "../../src/services/gamerFunctionalities";
import { Game } from "../../src/types/gameType";
import { filterByGenre, filterByRating } from "../../src/utils/filterByChoice";

jest.mock("../../src/services/gamerFunctionalities");

describe("filterGamesByGamer",()=>{
    let logSpy:jest.SpyInstance;
    let promptMock=jest.fn();
    let games:Game[];

    beforeEach(()=>{
         logSpy=jest.spyOn(console,"log").mockImplementation(()=>{});
        games=[{ "id": 1, "name": "Shadow Quest", "genre": "RPG", "price": 49.99, "platform": "PC", "rating": 4.5 },
        { "id": 2, "name": "Rocket Racer", "genre": "Racing", "price": 39.99, "platform": "Xbox", "rating": 4.2 }]
    })

    test("should filter games by price on input 1",()=>{
        promptMock.mockReturnValueOnce("1");
        promptMock.mockReturnValueOnce(45);
        filterGamesByGamer(games,promptMock);
        expect(logSpy).toHaveBeenCalledWith("Games under $45:");
        expect(logSpy).toHaveBeenCalledWith("Id: 2. Rocket Racer - $39.99");
        expect(gamerFunctionalities).toHaveBeenCalled();
    })

    test("should filter games by genre on input 2",()=>{
        promptMock.mockReturnValueOnce("2");
        promptMock.mockReturnValueOnce("racing")
        filterGamesByGamer(games,promptMock);
        expect(logSpy).toHaveBeenCalledWith("Games in genre \"racing\":");
        expect(logSpy).toHaveBeenCalledWith("Id: 2. Rocket Racer - Genre: Racing");
        expect(gamerFunctionalities).toHaveBeenCalled();
    })

    test("should filter games by rating on input 3",()=>{
        promptMock.mockReturnValueOnce("3");
        promptMock.mockReturnValueOnce(4.5)
        filterGamesByGamer(games,promptMock);
        expect(logSpy).toHaveBeenCalledWith("Games with rating ≥ 4.5:");
        expect(logSpy).toHaveBeenCalledWith("Id: 1. Shadow Quest - Rating: 4.5 ⭐");
        expect(gamerFunctionalities).toHaveBeenCalled();
    })

    test("should re prompt if invlaid input is provided",()=>{
        promptMock.mockReturnValueOnce("")
        .mockReturnValueOnce("1");
        filterGamesByGamer(games,promptMock);
        expect(logSpy).toHaveBeenCalledWith("Invalid input! Please enter valid input.");
        
    })
})