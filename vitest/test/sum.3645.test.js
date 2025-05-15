
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 50 to equal 105', () => {
  expect(sum(55, 50)).toBe(105);
});
