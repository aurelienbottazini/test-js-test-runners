
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 63 to equal 89', () => {
  expect(sum(26, 63)).toBe(89);
});
