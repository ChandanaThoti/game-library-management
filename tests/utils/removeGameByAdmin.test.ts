import { removeGameByAdmin } from "../../src/utils/removeGameByAdmin";
import { adminFunctionalities } from "../../src/services/adminFunctionalities";
import { isUniqueName } from "../../src/validations/gameValidations";
import { Game } from "../../src/types/gameType";
 
jest.mock("../../src/services/adminFunctionalities");
jest.mock("../../src/validations/gameValidations");

describe("removeGameByAdmin",()=>{
    let promptMock=jest.fn();
    let games:Game[];
    let logSpy:jest.SpyInstance;
    beforeEach(()=>{
        logSpy=jest.spyOn(console,"log").mockImplementation(()=>{})
        jest.clearAllMocks()
            games=[
            { "id": 1, "name": "Shadow Quest", "genre": "RPG", "price": 49.99, "platform": "PC", "rating": 4.5 },
            { "id": 2, "name": "Rocket Racer", "genre": "Racing", "price": 39.99, "platform": "Xbox", "rating": 4.2 }]
    })

    test("should prompt repeatedly for invalid game name",()=>{
        promptMock
        .mockReturnValueOnce("Rocket Racer")
        removeGameByAdmin(games,promptMock,undefined)
        expect(logSpy).toHaveBeenCalledWith("Rocket Racer removed successfully")
        expect(adminFunctionalities).toHaveBeenCalled()
    })

    test("Check test working",()=>{
        promptMock.mockReturnValueOnce("free fire")
        .mockReturnValueOnce("Rocker Racer")
        removeGameByAdmin(games,promptMock,undefined)
        expect(logSpy).toHaveBeenCalledWith("Game not found!")
        expect(logSpy).toHaveBeenCalledWith("Rocker Racer removed successfully")
        expect(adminFunctionalities).toHaveBeenCalled()
    })
    
})