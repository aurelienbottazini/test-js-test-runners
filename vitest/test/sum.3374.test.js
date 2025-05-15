
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 32 to equal 63', () => {
  expect(sum(31, 32)).toBe(63);
});
