import { add } from "./calculator";

test("add function", ()=> {
  expect(add(1, 2)).toBe(3);
});