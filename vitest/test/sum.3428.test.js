
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 0 to equal 32', () => {
  expect(sum(32, 0)).toBe(32);
});
