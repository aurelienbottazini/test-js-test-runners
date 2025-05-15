
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 1 to equal 32', () => {
  expect(sum(31, 1)).toBe(32);
});
