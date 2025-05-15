
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 26 to equal 89', () => {
  expect(sum(63, 26)).toBe(89);
});
