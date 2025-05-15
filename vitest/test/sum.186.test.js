
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 6 to equal 32', () => {
  expect(sum(26, 6)).toBe(32);
});
