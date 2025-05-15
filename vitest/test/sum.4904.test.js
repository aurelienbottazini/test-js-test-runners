
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 2 to equal 63', () => {
  expect(sum(61, 2)).toBe(63);
});
