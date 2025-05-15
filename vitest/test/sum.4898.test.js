
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 37 to equal 100', () => {
  expect(sum(63, 37)).toBe(100);
});
