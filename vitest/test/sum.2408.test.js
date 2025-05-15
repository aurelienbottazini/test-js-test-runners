
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 86 to equal 89', () => {
  expect(sum(3, 86)).toBe(89);
});
