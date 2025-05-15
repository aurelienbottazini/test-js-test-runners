
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 88 to equal 89', () => {
  expect(sum(1, 88)).toBe(89);
});
