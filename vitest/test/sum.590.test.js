
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 9 to equal 32', () => {
  expect(sum(23, 9)).toBe(32);
});
