import  * as math from "../calc/addition";
import { multiply, divide } from "../calc/multiply";

jest.mock("../calc/addition", () => ({
   add: jest.fn(),
   subtract: jest.fn(),

   })
);

jest.mock("../calc/multiply", () => ({
    multiply: jest.fn(),
    divide : jest.fn((a: number, b: number) => (a / b)),
}));

describe("test mutliply", ()=> {
  it("test multiply", () =>{
      const mockMutiply = multiply as jest.Mock;
      mockMutiply.mockReturnValue(20);
      expect(multiply(4, 5)).toBe(20);
  });

  it ("test divide", ()=> {
    const mockDivide = divide as jest.Mock;
    mockDivide.mockReturnValue(2);
    expect(divide(10, 5)).toBe(2);
  });

  
});

describe("Calculator", () => {
  test("addition", () => {
    const addMock = math.add as jest.Mock;
    addMock.mockReturnValue(5);
    expect(math.add(2, 3)).toBe(5);
  });

  it("test subtract", ()=> {
    const sub = math.subtract as jest.Mock;
    sub.mockReturnValue(10);
      expect(math.subtract(1,1)).toBe(10);
  });
 
  
});