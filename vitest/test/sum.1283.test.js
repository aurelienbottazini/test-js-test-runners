
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 23 to equal 32', () => {
  expect(sum(9, 23)).toBe(32);
});
