
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 29 to equal 63', () => {
  expect(sum(34, 29)).toBe(63);
});
