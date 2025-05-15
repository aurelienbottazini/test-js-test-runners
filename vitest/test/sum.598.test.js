
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 69 to equal 105', () => {
  expect(sum(36, 69)).toBe(105);
});
