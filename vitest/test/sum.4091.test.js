
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 50 to equal 89', () => {
  expect(sum(39, 50)).toBe(89);
});
