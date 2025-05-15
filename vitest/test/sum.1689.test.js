
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 48 to equal 89', () => {
  expect(sum(41, 48)).toBe(89);
});
