
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 27 to equal 63', () => {
  expect(sum(36, 27)).toBe(63);
});
