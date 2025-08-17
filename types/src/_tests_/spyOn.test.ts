import { calc } from '../calc/calculator';

jest.mock('../calc/calculatorAdd', () => ({
  add: jest.fn(() => 100),
})); 

describe('calc', () => {
  it('should use mocked add function and return correct value', () => {
    const result = calc(5, 3); // subtract(100, 3) = 97
    expect(result).toBe(97);
  });
});