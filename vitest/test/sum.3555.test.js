
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 85 to equal 89', () => {
  expect(sum(4, 85)).toBe(89);
});
