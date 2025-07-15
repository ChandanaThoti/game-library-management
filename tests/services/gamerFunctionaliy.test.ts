import { gamerFunctionalities } from "../../src/services/gamerFunctionalities";
import { searchGameByGamer } from "../../src/utils/searchGameByGamer";
import { selectRole } from "../../src/services/selectRole";
import { Game } from "../../src/types/gameType";
import { filterGamesByGamer } from "../../src/utils/filterGamesByGamer";

jest.mock("../../src/utils/searchGameByGamer");
jest.mock("../../src/services/selectRole");
jest.mock("../../src/utils/filterGamesByGamer")

describe("gamerFunctionality",()=>{
    let logSpy:jest.SpyInstance;
    let promptMock=jest.fn();
    let games:Game[];

    beforeEach(()=>{
        logSpy=jest.spyOn(console,"log").mockImplementation(()=>{})
        games=[]
    })

    test("should call searchGameByAdmin on input '1'",()=>{
        promptMock.mockReturnValueOnce("1")
        gamerFunctionalities(games,promptMock);
        expect(searchGameByGamer).toHaveBeenCalledWith(games,promptMock)
    })

    test("should call searchGameByAdmin on input 'search game'",()=>{
        promptMock.mockReturnValueOnce("search game")
        gamerFunctionalities(games,promptMock);
        expect(searchGameByGamer).toHaveBeenCalledWith(games,promptMock)
    })

    test("should call filterGamesByGamer on input 'filter games'",()=>{
        promptMock.mockReturnValueOnce("2")
        gamerFunctionalities(games,promptMock);
        expect(filterGamesByGamer).toHaveBeenCalledWith(games,promptMock)
    })
    
    test("should return to previous section on iput '5'",()=>{
        promptMock.mockReturnValueOnce("5");
        gamerFunctionalities(games,promptMock);
        expect(selectRole).toHaveBeenCalledWith(games,promptMock);
    })
    test("should return to previous section on back",()=>{
        promptMock.mockReturnValueOnce("back");
        gamerFunctionalities(games,promptMock);
        expect(selectRole).toHaveBeenCalledWith(games,promptMock);
    })

    test("should prompt again if invalid input given",()=>{
        promptMock.mockReturnValueOnce("chandu")
        .mockReturnValueOnce("1")
        gamerFunctionalities(games,promptMock);
        expect(logSpy).toHaveBeenCalledWith("Invalid input! Please enter valid input.")
        expect(searchGameByGamer).toHaveBeenCalled()
    })
   
})