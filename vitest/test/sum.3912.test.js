
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 84 to equal 89', () => {
  expect(sum(5, 84)).toBe(89);
});
