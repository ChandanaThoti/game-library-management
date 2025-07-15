import { addToWishlistByGamer } from "../../src/utils/addToWishlistByGamer";
import { gamerFunctionalities } from "../../src/services/gamerFunctionalities";
import { Game } from "../../src/types/gameType";

jest.mock("../../src/services/gamerFunctionalities");

describe("addToWishlistByGamer",()=>{
    let logSpy:jest.SpyInstance;
    let games:Game[];
    let promptMock=jest.fn();

    beforeEach(()=>{
        jest.clearAllMocks();
        games=[
            { "id": 1, "name": "Shadow Quest", "genre": "RPG", "price": 49.99, "platform": "PC", "rating": 4.5 },
            { "id": 2, "name": "Rocket Racer", "genre": "Racing", "price": 39.99, "platform": "Xbox", "rating": 4.2 },
            { "id": 3, "name": "Sky Dominion", "genre": "Strategy", "price": 29.99, "platform": "PC", "rating": 4.0 },
            { "id": 4, "name": "Blitz Arena", "genre": "Shooter", "price": 59.99, "platform": "PS5", "rating": 4.7 },
            { "id": 5, "name": "Pixel Kingdom", "genre": "Adventure", "price": 19.99, "platform": "Switch", "rating": 4.1 }];
        logSpy=jest.spyOn(console,"log").mockImplementation(()=>{});
    })

    test("should add game to wishlist if found by id",()=>{
        promptMock.mockReturnValueOnce("3");
        addToWishlistByGamer(games,promptMock);
        expect(logSpy).toHaveBeenCalledWith("Sky Dominion added to wishlist.");
        expect(gamerFunctionalities).toHaveBeenCalled();
    })

    test("should add game to wishlist if found by name",()=>{
        promptMock.mockReturnValueOnce("rocket racer");
        addToWishlistByGamer(games,promptMock);
        expect(logSpy).toHaveBeenCalledWith("Rocket Racer added to wishlist.");
        expect(gamerFunctionalities).toHaveBeenCalled();
    })

    test("should return error if not games available",()=>{
        promptMock.mockReturnValueOnce("free fire");
        addToWishlistByGamer(games,promptMock);
        expect(logSpy).toHaveBeenCalledWith("free fire not found.");
        expect(gamerFunctionalities).toHaveBeenCalled();
    })
})
