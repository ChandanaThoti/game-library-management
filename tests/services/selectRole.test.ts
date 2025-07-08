import {selectRole} from "../../src/services/selectRole";
import {adminFunctionalities} from "../../src/services/adminFunctionalities";
import { Game } from "../../src/types/gameType";
jest.mock("../../src/services/adminFunctionalities")
describe("selectRole",()=>{
    let mockGames:Game[];
    let consoleLogSpy:jest.SpyInstance;
    let promptMock=jest.fn()
    beforeEach(()=>{
        jest.clearAllMocks()
        mockGames=[];
        consoleLogSpy=jest.spyOn(console,"log").mockImplementation(()=>{})
    })
    test("test admin functionalities is called or not",()=>{
        promptMock.mockReturnValueOnce("admin")
        selectRole(mockGames,promptMock);
        expect(adminFunctionalities).toHaveBeenCalledWith(mockGames,promptMock)
    })
    test("test for invalid input",()=>{
        promptMock.mockReturnValueOnce("chandu")
        .mockReturnValueOnce("admin");
        selectRole(mockGames, promptMock);
        expect(consoleLogSpy).toHaveBeenCalledWith("Invalid input! Please enter valid input.");
        expect(adminFunctionalities).toHaveBeenCalled();

    })
})