
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 5 to equal 36', () => {
  expect(sum(31, 5)).toBe(36);
});
