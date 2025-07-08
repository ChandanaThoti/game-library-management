import { adminFunctionalities } from "../../src/services/adminFunctionalities";
import { Game } from "../../src/types/gameType";
describe("admin Functionalities",()=>{
    let consoleLogSpy:jest.SpyInstance;
    beforeEach(()=>{
        jest.clearAllMocks;
        consoleLogSpy=jest.spyOn(console,"log").mockImplementation(()=>{})
    })
    test("test console log called correctly",()=>{
        const mockGames:Game[]=[]
        adminFunctionalities(mockGames,()=>"admin")
        expect(consoleLogSpy).toHaveBeenCalledWith("---------Hey Admin, Please select (1-4)----------")
        expect(consoleLogSpy).toHaveBeenCalledWith("1. Add Game")
        expect(consoleLogSpy).toHaveBeenCalledWith("2. Remove Game")
        expect(consoleLogSpy).toHaveBeenCalledWith("3. View All Games")
        expect(consoleLogSpy).toHaveBeenCalledWith("4. Back")
    })
})