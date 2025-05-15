
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 16 to equal 32', () => {
  expect(sum(16, 16)).toBe(32);
});
