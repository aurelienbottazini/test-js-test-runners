
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 5 to equal 32', () => {
  expect(sum(27, 5)).toBe(32);
});
