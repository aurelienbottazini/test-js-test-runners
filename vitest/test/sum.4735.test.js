
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 0 to equal 63', () => {
  expect(sum(63, 0)).toBe(63);
});
