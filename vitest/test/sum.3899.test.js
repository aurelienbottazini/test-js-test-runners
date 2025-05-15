
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 39 to equal 89', () => {
  expect(sum(50, 39)).toBe(89);
});
