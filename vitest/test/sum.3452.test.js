
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 67 to equal 125', () => {
  expect(sum(58, 67)).toBe(125);
});
