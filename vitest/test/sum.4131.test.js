
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 23 to equal 82', () => {
  expect(sum(59, 23)).toBe(82);
});
