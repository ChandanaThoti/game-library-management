jest.mock("../src/data/fetchGames")
import {fetchGames} from "../src/data/fetchGames";
const gameApp=require("../src/gameLibraryApp")
describe("gameLibraryApp",()=>{
test("Call fetchGames function",()=>{
    expect(fetchGames).toHaveBeenCalled()
    gameApp
})
})