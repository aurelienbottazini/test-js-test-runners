
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 35 to equal 58', () => {
  expect(sum(23, 35)).toBe(58);
});
