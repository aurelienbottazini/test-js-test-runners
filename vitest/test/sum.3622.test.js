
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 23 to equal 47', () => {
  expect(sum(24, 23)).toBe(47);
});
