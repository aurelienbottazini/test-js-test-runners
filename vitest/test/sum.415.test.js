
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 49 to equal 105', () => {
  expect(sum(56, 49)).toBe(105);
});
