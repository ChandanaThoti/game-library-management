import { addGameByAdmin } from "../../src/utils/addGameByAdmin";
import { adminFunctionalities } from "../../src/services/adminFunctionalities";
import { Game } from "../../src/types/gameType";

jest.mock("../../src/services/adminFunctionalities") 
describe("addGameByAdmin", () => {
  let promptMock = jest.fn();
  let logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  let games: Game[] = [];

  beforeEach(() => {
    jest.clearAllMocks();
    games = [{ id: 1, name: "space colony", genre: "action", price: 20, platform: "PC", rating: 4 }];
  });
  test("adds a game with valid inputs via prompt", () => {   
    addGameByAdmin(games, promptMock,"free fire","action",49.99,"PC",4.5);
    expect(logSpy).toHaveBeenCalledWith("free fire added successfully");
    expect(games).toHaveLength(2);
    expect(games[1]).toMatchObject({
      name: "free fire",
      genre: "action",
      price: 49.99,
      platform: "PC",
      rating: 4.5
    });
    expect(adminFunctionalities).toHaveBeenCalled();
  });

  test("prompt repeatedly for invalid game name",()=>{
    promptMock.mockReturnValueOnce("")
    .mockReturnValueOnce("Space Colony")
    .mockReturnValueOnce("pub g")
    addGameByAdmin(games, promptMock,undefined,"action",49.99,"PC",4.5);
    expect(logSpy).toHaveBeenCalledWith("Invalid input! Please enter valid input");
    expect(logSpy).toHaveBeenCalledWith("Space Colony already exists");
    expect(logSpy).toHaveBeenCalledWith("pub g added successfully");
    expect(adminFunctionalities).toHaveBeenCalled();
  })
  test("prompt repeatedly for invalid game genre",()=>{
    promptMock.mockReturnValueOnce("")
    .mockReturnValueOnce("action")
    addGameByAdmin(games, promptMock,"temple run",undefined,49.99,"PC",4.5);
    expect(logSpy).toHaveBeenCalledWith("Invalid input! Please enter valid input");
    expect(logSpy).toHaveBeenCalledWith("temple run added successfully");
    expect(adminFunctionalities).toHaveBeenCalled();
  })
  test("prompt repeatedly for invalid game price",()=>{
    promptMock.mockReturnValueOnce("price")
    .mockReturnValueOnce("67.8")
    addGameByAdmin(games, promptMock,"Combat Zone","shooter",undefined,"PC",4.5);
    expect(logSpy).toHaveBeenCalledWith("Invalid price! Please enter valid price");
    expect(logSpy).toHaveBeenCalledWith("Combat Zone added successfully");
    expect(adminFunctionalities).toHaveBeenCalled();
  })
  test("prompt repeatedly for innvalid platform",()=>{
    promptMock.mockReturnValueOnce("5678")
    .mockReturnValueOnce("Xbox")
    addGameByAdmin(games, promptMock,"Rocket Racing","Racing",67.9,undefined,4.5);
    expect(logSpy).toHaveBeenCalledWith("Invalid input! Please enter valid input");
    expect(logSpy).toHaveBeenCalledWith("Rocket Racing added successfully");
    expect(adminFunctionalities).toHaveBeenCalled();
  })
   test("prompt repeatedly for innvalid rating",()=>{
    promptMock.mockReturnValueOnce("-90")
    .mockReturnValueOnce("60")
    .mockReturnValueOnce("4.7")
    addGameByAdmin(games, promptMock,"Fantasy Sprint","Racing",67.9,"Switch",undefined);
    expect(logSpy).toHaveBeenCalledWith("Invalid rating! Please enter valid rating");
    expect(logSpy).toHaveBeenCalledWith("Invalid rating! Please enter valid rating");
    expect(logSpy).toHaveBeenCalledWith("Fantasy Sprint added successfully");
    expect(adminFunctionalities).toHaveBeenCalled();
  })

});
