import { Game } from "../../src/types/gameType";
import * as filterModule from "../../src/utils/filterByChoice";

describe("filterByChoice",()=>{
    let logSpy:jest.SpyInstance;
    let promptMock=jest.fn();
    let games:Game[];

    beforeEach(()=>{
        jest.clearAllMocks();
        logSpy=jest.spyOn(console,"log").mockImplementation(()=>{});
        games=[{ "id": 1, "name": "Shadow Quest", "genre": "RPG", "price": 49.99, "platform": "PC", "rating": 4.5 },
            { "id": 2, "name": "Rocket Racer", "genre": "Racing", "price": 39.99, "platform": "Xbox", "rating": 4.2 }]
    })

    test("should return error if invalid price",()=>{
        promptMock.mockReturnValueOnce("gh")
        filterModule.filterByPrice(games,promptMock);
        expect(logSpy).toHaveBeenCalledWith("Invalid price. Please enter valid price.");
    })

    test("should return error if no games available in that price",()=>{
        promptMock.mockReturnValueOnce("15")
        filterModule.filterByPrice(games,promptMock);
        expect(logSpy).toHaveBeenCalledWith("No Games found under that price.");
    })

    test("should return error if invalid genre",()=>{
        promptMock.mockReturnValueOnce("15")
        filterModule.filterByGenre(games,promptMock);
        expect(logSpy).toHaveBeenCalledWith("Invalid genre! Please enter valid genre.");
    })

    test("should return error if invalid genre",()=>{
        promptMock.mockReturnValueOnce("shooter")
        filterModule.filterByGenre(games,promptMock);
        expect(logSpy).toHaveBeenCalledWith("No games found in that genre.");
    })

    test("should return error if invalid rating",()=>{
        promptMock.mockReturnValueOnce(-90)
        filterModule.filterByRating(games,promptMock);
        expect(logSpy).toHaveBeenCalledWith("Invalid rating. Please enter a value between 0 and 5.");
    })

    test("should return error if invalid r",()=>{
        promptMock.mockReturnValueOnce(4.8)
        filterModule.filterByRating(games,promptMock);
        expect(logSpy).toHaveBeenCalledWith("No games found with that rating.");
    })
})
