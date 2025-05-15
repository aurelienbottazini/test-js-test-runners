
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 84 to equal 105', () => {
  expect(sum(21, 84)).toBe(105);
});
