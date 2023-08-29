import { add, divide, multiply, subtract } from "./calculator";

test("add function", () => {
  expect(add(1, 2)).toBe(3);
});
test("substract function", () => {
  expect(subtract(5, 2)).toBe(3);
});
test("multiply function", () => {
  expect(multiply(3, 5)).toBe(15);
});
test("divide function", () => {
  expect(divide(15, 5)).toBe(3);
});
test("divide by zero", () => {
  expect(() => divide(8, 0)).toThrow("Cannot divide by zero!");
});
