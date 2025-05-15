
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 29 to equal 32', () => {
  expect(sum(3, 29)).toBe(32);
});
