
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 34 to equal 58', () => {
  expect(sum(24, 34)).toBe(58);
});
