
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 2 to equal 32', () => {
  expect(sum(30, 2)).toBe(32);
});
