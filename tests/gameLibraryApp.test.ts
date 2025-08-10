jest.mock("../src/data/fetchGames")
jest.mock("../src/services/selectRole")
import {fetchGames} from "../src/data/fetchGames";
import { selectRole } from "../src/services/selectRole";
const gameApp=require("../src/gameLibraryApp")
describe("gameLibraryApp",()=>{
test("Call fetchGames function",()=>{
    expect(fetchGames).toHaveBeenCalled()
    gameApp
})
test("Call selectRole function",()=>{
    expect(selectRole).toHaveBeenCalled()
    gameApp
})
})