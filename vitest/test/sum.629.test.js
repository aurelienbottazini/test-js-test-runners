
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 8 to equal 32', () => {
  expect(sum(24, 8)).toBe(32);
});
