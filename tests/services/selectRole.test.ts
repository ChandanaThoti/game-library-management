import {selectRole} from "../../src/services/selectRole"
import { gamerFunctionalities } from "../../src/services/gamerFunctionalities"
import { Game } from "../../src/types/gameType";
jest.mock("../../src/services/gamerFunctionalities")

describe("selectRole",()=>{
    let promptMock=jest.fn();
    let logSpy:jest.SpyInstance;
    let games:Game[];
    beforeEach(()=>{
        jest.clearAllMocks();
        logSpy=jest.spyOn(console,"log").mockImplementation(()=>{})
        games=[]
        })
    test("should verify gamer called with input gamer",()=>{
        promptMock.mockReturnValueOnce("gamer");
        selectRole(games,promptMock);
        expect(gamerFunctionalities).toHaveBeenCalled();
    })
    test("should reprompt selectRole if invalid option",()=>{
        promptMock.mockReturnValueOnce("chandu")
        .mockReturnValueOnce("gamer");
        selectRole(games,promptMock);
        expect(logSpy).toHaveBeenCalledWith("Invalid input! Please enter valid input.");
        expect(gamerFunctionalities).toHaveBeenCalled()

    })
    

})