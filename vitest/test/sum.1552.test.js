
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 44 to equal 105', () => {
  expect(sum(61, 44)).toBe(105);
});
