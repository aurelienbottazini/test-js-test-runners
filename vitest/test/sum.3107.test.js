
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 67 to equal 105', () => {
  expect(sum(38, 67)).toBe(105);
});
