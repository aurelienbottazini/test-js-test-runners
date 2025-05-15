
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 6 to equal 64', () => {
  expect(sum(58, 6)).toBe(64);
});
