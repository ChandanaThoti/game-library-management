import { viewWishlistByGamer } from "../../src/utils/viewWishlistByGamer";
import { Game } from "../../src/types/gameType";
import { addToWishlistByGamer,wishList } from "../../src/utils/addToWishlistByGamer";
import { gamerFunctionalities } from "../../src/services/gamerFunctionalities";

jest.mock("../../src/services/gamerFunctionalities");

describe("viewWishlistByGamer",()=>{
    let logSpy:jest.SpyInstance;
    let games:Game[];
    let promptMock=jest.fn();
    beforeEach(()=>{
        logSpy=jest.spyOn(console,"log").mockImplementation(()=>{});
        games=[
            { "id": 1, "name": "Shadow Quest", "genre": "RPG", "price": 49.99, "platform": "PC", "rating": 4.5 },
            { "id": 2, "name": "Rocket Racer", "genre": "Racing", "price": 39.99, "platform": "Xbox", "rating": 4.2 },
            { "id": 3, "name": "Sky Dominion", "genre": "Strategy", "price": 29.99, "platform": "PC", "rating": 4.0 }
        ];
    })
    
    test("should return error ifnot games in wishlist",()=>{
        promptMock.mockReturnValueOnce("rocket racer")
        viewWishlistByGamer(games,promptMock);
        expect(logSpy).toHaveBeenCalledWith("Your wishlist is empty.") 
        expect(gamerFunctionalities).toHaveBeenCalled()
    })

    test("should display wishlisted games",()=>{
        promptMock.mockReturnValueOnce("rocket racer");
        addToWishlistByGamer(games,promptMock);
        viewWishlistByGamer(games,promptMock);
        expect(logSpy).toHaveBeenCalledWith("Rocket Racer added to wishlist.")
        expect(logSpy).toHaveBeenCalledWith("----- Wishlisted Items -----");
        expect(logSpy).toHaveBeenCalledWith("ID          name                                              genre       ");
        expect(logSpy).toHaveBeenCalledWith("2           Rocket Racer                                      Racing      ");    
        expect(gamerFunctionalities).toHaveBeenCalled()
    })

   
})


