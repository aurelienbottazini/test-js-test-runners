
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 41 to equal 58', () => {
  expect(sum(17, 41)).toBe(58);
});
