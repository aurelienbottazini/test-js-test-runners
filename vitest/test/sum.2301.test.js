
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 55 to equal 63', () => {
  expect(sum(8, 55)).toBe(63);
});
