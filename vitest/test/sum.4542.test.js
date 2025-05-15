
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 7 to equal 89', () => {
  expect(sum(82, 7)).toBe(89);
});
