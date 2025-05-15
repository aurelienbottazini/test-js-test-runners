
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 98 to equal 114', () => {
  expect(sum(16, 98)).toBe(114);
});
