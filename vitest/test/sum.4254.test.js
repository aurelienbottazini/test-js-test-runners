
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 10 to equal 105', () => {
  expect(sum(95, 10)).toBe(105);
});
