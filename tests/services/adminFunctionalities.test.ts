import { adminFunctionalities } from "../../src/services/adminFunctionalities";
import { selectRole } from "../../src/services/selectRole";
import { Game } from "../../src/types/gameType";
import { addGameByAdmin } from "../../src/utils/addGameByAdmin";
import { removeGameByAdmin } from "../../src/utils/removeGameByAdmin";
import { viewAllGames } from "../../src/utils/viewAllGames";
jest.mock("../../src/utils/addGameByAdmin")
jest.mock("../../src/services/selectRole")
jest.mock("../../src/utils/removeGameByAdmin")
jest.mock("../../src/utils/viewAllGames")
describe("admin Functionalities",()=>{
    let consoleLogSpy:jest.SpyInstance;
    let mockGames:Game[];
    let promptMock=jest.fn();
    beforeEach(()=>{
        jest.clearAllMocks();
        consoleLogSpy=jest.spyOn(console,"log").mockImplementation(()=>{})
        mockGames=[]
    })
    test("test addGame is called or not",()=>{
        promptMock.mockReturnValueOnce("1")
        adminFunctionalities(mockGames,promptMock);
        expect(addGameByAdmin).toHaveBeenCalledWith(mockGames,promptMock)
    })
    test("test removeGame is called or not",()=>{
        promptMock.mockReturnValueOnce("2")
        adminFunctionalities(mockGames,promptMock);
        expect(removeGameByAdmin).toHaveBeenCalledWith(mockGames,promptMock)
    })
    test("test viewAllGames is called or not",()=>{
        promptMock.mockReturnValueOnce("3")
        adminFunctionalities(mockGames,promptMock);
        expect(viewAllGames).toHaveBeenCalled()
    })
    test("test selectRole is called or not",()=>{
        promptMock.mockReturnValueOnce("4")
        adminFunctionalities(mockGames,promptMock);
        expect(selectRole).toHaveBeenCalled()
    })
    test("test invalid input for selecting operation",()=>{
        promptMock.mockReturnValueOnce("invalid")
        .mockReturnValueOnce("1")
        adminFunctionalities(mockGames,promptMock);
        expect(consoleLogSpy).toHaveBeenCalledWith("Invalid Input! Please enter valid option")
        expect(addGameByAdmin).toHaveBeenCalled()
    })
})