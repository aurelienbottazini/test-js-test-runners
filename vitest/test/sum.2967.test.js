
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 56 to equal 63', () => {
  expect(sum(7, 56)).toBe(63);
});
