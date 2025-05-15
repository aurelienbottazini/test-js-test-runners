
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 63 to equal 63', () => {
  expect(sum(0, 63)).toBe(63);
});
